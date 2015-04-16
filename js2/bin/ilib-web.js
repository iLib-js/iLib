/*
 * ilib-web.js - glue code for web apps to load local ilib code and data
 * using XHR
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
				pathname = pathname.replace(/\/[^/]+\/\.\./g, "").replace(/\/\.\//g, "/").replace(/^\.\//, "");
			} while (pathname.length < previousLen);
		}
		return pathname;
	}
};


var requireClass = function() {
	this.cache = {};
	this.updateRequire = /require\(("[^/][^"+]*")\)/g;
	
	var pos;
	var scripts = document.getElementsByTagName("script");

	this.protocol = "file:";
	this.root = ".";
	
	for (var i = 0; i < scripts.length; i++) {
		var source = scripts[i].src;
		if (source && (pos = source.search(/ilib-web\.js$/)) !== -1) {
			var colon = source.indexOf('://');
			this.protocol = source.substring(0,colon+1);
			this.root = source.substring(colon+1, pos-1);
			break;
		}
	}
};
requireClass.prototype.loadFile = function(pathname, sync, success, failure) {
	// use normal web techniques
	var req = new XMLHttpRequest();
	var text = undefined;
		
	//req.open("GET", "file:" + path.resolve(file), false);
	req.open("GET", this.protocol + pathname, !sync);
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
	//try {
		req.send();
	//} catch (e) {
		// could not load the file
		//console.log("loadFile warning: could not load file " + pathname);
		//text = undefined;
	//}
	
	return text;
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
	
	console.log("loading module " + pathname);
	
	var text = this.loadFile(pathname, true);
	var dirname = path.dirname(pathname);
	var match, replacement;
	
	if (text) {
		text = 'var module={exports:{},filename:"' + pathname + '"};' + text;
		while ((match = this.updateRequire.exec(text)) !== null) {
			replacement = '"' + dirname + '/" + ' + match[1];
			text = text.replace(new RegExp(match[1], "g"), replacement);
			this.updateRequire.lastIndex = match.index + replacement.length;
		}
		// console.log("text is " + text);
		eval(text);
		
		this.cache[pathname] = module.exports;
		return module.exports;
	}

	return undefined;
};

var r = new requireClass();
var require = requireClass.prototype.require.bind(r);

var WebLoader = require("../lib/WebLoader.js");

var ilib = require("../lib/ilib.js");
ilib.setLoaderCallback(new WebLoader(ilib));

ilib._dyncode = true; // indicate that we are using dynamically loaded code

require("./ilib-stubs.js");

if (typeof(window.module) === 'undefined') {
	var module = {
		exports: {}
	};
}