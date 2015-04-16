/*
 * ilib-qt.js - glue code for qt apps to load local ilib code and data 
 * 
 * Copyright © 2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var module = {
	exports: {},
	filename:null
};

function loadFile(pathname, sync, success, failure) {
	if (sync) {
		return Qt.include(pathname);
	} else {
		Qt.include(pathname, function(obj) {
			if (obj) {
				success(obj);
			} else {
				failure();
			}
		});
	}
}

var requireClass = function() {
	this.cache = {};
	this.loading = {};
	this.updateRequire = /require\(("[^/][^"+]*")\)/g;
};

requireClass.prototype.dirname = function(pathname) {
	var i = pathname.lastIndexOf("/");
	return i !== -1 ? pathname.substring(0,i) : pathname;
};

requireClass.prototype.normalize = function(pathname) {
	if (pathname) {
		var previousLen;
		do {
			previousLen = pathname.length;
			pathname = pathname.replace(/\/[^/]+\/\.\./g, "").replace(/\/\.\//g, "/").replace(/^\.\//, "");
		} while (pathname.length < previousLen);
	}
	return pathname;
};
	
requireClass.prototype.require = function(pathname) {
	//console.log("------------------------\nrequire: called with " + pathname);
	if (!this.root) {
		this.root = Qt.resolvedUrl(".").toString();
		if (this.root[this.root.length-1] === '/') {
			this.root = this.root.substring(0,this.root.length-1);
		}
		if (this.root.substring(0,7) === "file://") {
			this.root = this.root.substring(7);
		}
	}
	
	if (pathname === "./runner.js") {
		// special case to redirect to the qt runner instead
		pathname = "../../qt/UnitTest/runner.js";
	}
	
	//console.log("this.root is " + this.root + " and pathname before was " + pathname);
	//console.log("require: module.filename is " + module.filename);
	
	var base = module.filename ? this.dirname(module.filename) : this.root;

	//console.log("require: base is " + base);
	
	if (pathname.charAt(0) !== '/') {
		pathname = base + "/" + pathname;
	}
	
	pathname = this.normalize(pathname);
	//console.log("require: pathname after is " + pathname);
	
	if (this.cache[pathname]) {
		//console.log("require: cache hit");
		return this.cache[pathname];
	}
	
	// don't try to load things that are currently in the process of loading
	if (this.loading[pathname]) {
		//console.log("require: already loading...");
		return {};
	}
	//console.log("require: loading the file");
	
	// communicate the current dir to the included js file
	var tmp = module.filename;
	module.filename = pathname;
	this.loading[pathname] = true;
	
	var s = Qt.include(pathname);
	
	module.filename = tmp;
	this.loading[pathname] = undefined;
	
	if (s.status === s.OK) {
		this.cache[pathname] = module.exports;
		return module.exports;
	}
	
	console.log("exception was " + JSON.stringify(s.status, undefined, 4));
	console.log("Failed loading " + pathname);
	return undefined;
};

var r = new requireClass();
var require = requireClass.prototype.require.bind(r);

var QmlLoader = require("./qmlloader.js");

var ilib = require("./ilibglobal.js");

ilib._dyncode = true; // indicate that we are using dynamically loaded code

require("./ilib-stubs.js");
