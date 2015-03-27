/*
 * ilib-web.js - glue code for web apps to load local ilib code and data 
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

function normalize(pathname) {
	if (pathname) {
		var previousLen;
		do {
			previousLen = pathname.length;
			pathname = pathname.replace(/\/[^/]+\/\.\./g, "").replace(/\/\.\//g, "/").replace(/^\.\//, "");
		} while (pathname.length < previousLen);
	}
	return pathname;
}

function loadFile(pathname, sync, success, failure) {
	// use normal web techniques
	var req = new XMLHttpRequest();
	var text = undefined;
		
	//req.open("GET", "file:" + path.resolve(file), false);
	req.open("GET", "file:" + pathname, !sync);
	//req.responseType = "text";
	req.onload = function(e) {
		text = req.response;
		if (!sync && typeof(success) === 'function') {
			success(text);
		}
	};
	req.onerror = !sync ? failure : function(err) {
		// file is not there or could not be loaded
		text = undefined;
	};
	
	//console.log("url is " + JSON.stringify(req._url, undefined, 4));
	try {
		req.send();
	} catch (e) {
		// could not load the file
		console.log("loadFile warning: could not load file " + pathname);
		text = undefined;
	}
	
	return text;
}

var requireClass = function() {
	this.cache = {};
};
requireClass.prototype.require = function(pathname) {
	if (!this.root) {
		var pos;
		var scripts = document.getElementsByTagName("script");
	
		this.root = ".";
		for (var i = 0; i < scripts.length; i++) {
			var source = scripts[i].src;
			if (source && (pos = source.search(/ilib-web\.js$/)) !== -1) {
				this.root = source.substring(7, pos-1);
				break;
			}
		}
	}
	
	console.log("this.root is " + this.root + " and pathname before was " + pathname);
	
	if (pathname.charAt(0) !== '/') {
		pathname = this.root + "/" + pathname;
	}
	
	pathname = normalize(pathname);
	console.log("pathname after is " + pathname);
	
	if (this.cache[pathname]) {
		return this.cache[pathname];
	}
	
	var text = loadFile(pathname, true);
	if (text) {
		text = 'var module={exports:{},filename:"' + pathname + '"};' + text;
		// console.log("text is " + text);
		eval(text);
		
		this.cache[pathname] = module.exports;
		return module.exports;
	}

	return undefined;
};

var r = new requireClass();
var require = requireClass.prototype.require.bind(r);

var webLoader = require("./webloader.js");

var ilib = require("./ilibglobal.js");
ilib.setLoaderCallback(new webLoader(ilib));

ilib.DateFmt = function(options) {
	ilib.DateFmt = require("./datefmt.js");
	return ilib.DateFmt(options);
};