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
	if (!this.root) {
		this.root = Qt.resolvedUrl(".");
		if (this.root[this.root.length-1] === '/') {
			this.root = this.root.substring(0,this.root.length-1);
		}
	}
	
	console.log("this.root is " + this.root + " and pathname before was " + pathname);
	
	var base = module.filename ? this.dirname(module.filename) : this.root;

	if (pathname.charAt(0) !== '/') {
		pathname = base + "/" + pathname;
	}
	
	pathname = this.normalize(pathname);
	console.log("pathname after is " + pathname);
	
	if (this.cache[pathname]) {
		return this.cache[pathname];
	}
	
	// communicate the current dir to the included js file
	var tmp = module.filename;
	module.filename = pathname;
	
	var s = Qt.include(pathname);
	
	module.filename = tmp;
	
	if (s.status === s.OK) {
		var dirname = this.dirname(pathname);
		this.cache[pathname] = module.exports;
		return module.exports;
	}
	
	console.log("s.exception was " + JSON.stringify(s.exception, undefined, 4));
	console.log("Failed loading " + pathname);
	return undefined;
};

var r = new requireClass();
var require = requireClass.prototype.require.bind(r);

var module = {exports: {},filename:null};

var qmlLoader = require("./qmlloader.js");

var ilib = require("./ilibglobal.js");
ilib.setLoaderCallback(new qmlLoader(ilib));

