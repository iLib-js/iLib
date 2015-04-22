/*
 * ilib-webapp.js - glue code for web apps to load remote code and data
 * using script injection to the head of the html
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
var path = {
	dirname: function(pathname) {
		var i = pathname.lastIndexOf("/");
		return i !== -1 ? pathname.substring(0,i) : pathname;
	},
	
	join: function() {
		var arr = [];
		for (var i = 0; i < arguments.length; i++) {
			arr.push(arguments[i]);
		}
		return arr.join("/");
	},
	
	normalize: function(pathname) {
		if (pathname) {
			var previousLen;
			do {
				previousLen = pathname.length;
				pathname = pathname.replace(/\/\.\//g, "/").replace(/\/[^/]+\/\.\./g, "").replace(/^\.\//, "");
			} while (pathname.length < previousLen);
		}
		return pathname;
	}
};


var requireClass = function() {
	this.cache = {};
	this.loading = {};
	
	var pos;
	var scripts = document.getElementsByTagName("script");

	this.protocol = "http://";
	this.root = ".";
	
	for (var i = 0; i < scripts.length; i++) {
		var source = scripts[i].src;
		if (source && (pos = source.search(/ilib-webapp\.js$/)) !== -1) {
			var colon = source.indexOf('://');
			this.protocol = source.substring(0,colon+3);
			this.root = source.substring(colon+3, pos-1);
			this.insertPoint = scripts[i].nextSibling === null ? undefined : scripts[i].nextSibling;
			break;
		}
	}
	
	this.headElement = document.getElementsByTagName('head')[0];
	
	var scriptElement = document.createElement('script');
	scriptElement.text = 'var module={exports:{},filename:""};'
	this.headElement.insertBefore(scriptElement, this.insertPoint);
};
requireClass.prototype.loadFile = function(pathname, sync) {
	var scriptElement = document.createElement('script');
	scriptElement.defer = false;
	scriptElement.src = pathname;
	this.headElement.insertBefore(scriptElement, this.insertPoint);
};
requireClass.prototype.require = function(pathname) {
	
	//console.log("this.root is " + this.root + " and pathname before was " + pathname);
	
	if (pathname.charAt(0) !== '/') {
		pathname = this.root + "/" + pathname;
	}
	
	pathname = path.normalize(pathname);
	
	if (this.cache[pathname]) {
		return this.cache[pathname];
	}
	
	// don't try to load things that are currently in the process of loading
	if (this.loading[pathname]) {
		//console.log("require: already loading...");
		return {};
	}

	console.log("loading module " + pathname);

	var tmp = module.filename;
	module.filename = pathname;
	this.loading[pathname] = true;

	var text = this.loadFile(pathname, true);
	
	this.cache[pathname] = module.exports;
	module.filename = tmp;
	this.loading[pathname] = undefined;

	return module.exports;
};

var r = new requireClass();
var require = requireClass.prototype.require.bind(r);

var webLoader = require("./webLoader.js");

var ilib = require("./ilib.js");
ilib.setLoaderCallback(new webLoader(ilib));

ilib._dyncode = true; // indicate that we are using dynamically loaded code

require("./ilib-stubs.js");

if (typeof(window.module) === 'undefined') {
	var module = {
		exports: {}
	};
}