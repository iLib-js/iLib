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
				pathname = pathname.replace(/\/\.\//g, "/").replace(/\/[^/]+[^\.]\/\.\./g, "").replace(/^\.\//, "").replace(/\/\//g, "/");
			} while (pathname.length < previousLen);
		}
		return pathname;
	}
};


var requireClass = function() {
	this.cache = {};
	this.loading = {};
	this.updateRequire = /\brequire\s*\(\s*"([^/][^"+]*)"/g;
	
	var pos;
	var scripts = document.getElementsByTagName("script");

	this.protocol = "file://";
	this.root = ".";
	
	for (var i = 0; i < scripts.length; i++) {
		var source = scripts[i].src;
		if (source && (pos = source.search(/ilib-web\.js$/)) !== -1) {
			var colon = source.indexOf('://');
			this.protocol = source.substring(0,colon+3);
			this.root = source.substring(colon+3, pos-1);
			break;
		}
	}
};

requireClass.prototype.loadFile = function(pathname) {
	// special case for IE because it has a @#$%ed up XMLHttpRequest implementation
	var req = (navigator.userAgent.indexOf(" .NET") > -1) ? 
		new ActiveXObject("MSXML2.XMLHTTP") :
		new XMLHttpRequest();
		
	req.open("GET", this.protocol + pathname, false);
	req.send();
	
	return req.responseText;
};

requireClass.prototype.require = function(pathname) {
	
	//console.log("this.root is " + this.root + " and pathname before was " + pathname);
	
	if (pathname.charAt(0) !== '/') {
		// make the current path be relative to the parent's path, otherwise use the root
		pathname = path.join((module && module.filename) ? path.dirname(module.filename) : this.root, pathname);
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

	this.loading[pathname] = true;

	var text = this.loadFile(pathname);
	var dirname = path.dirname(pathname);
	var match, replacement;
	
	if (text) {
		var tmp = module.filename;
		module.filename = pathname;
		module.exports = null;
		module.require = requireClass.prototype.require.bind(r);
		
		while ((match = this.updateRequire.exec(text)) !== null) {
			replacement = path.normalize(path.join(dirname, match[1]));
			text = text.replace(new RegExp('"' + match[1] + '"', "g"), '"' + replacement + '"');
			this.updateRequire.lastIndex = match.index + replacement.length + 2;
		}
		// for debugging in chrome with nice file names instead of random ids like "VM (2342)"
		text = text + "\n//# sourceURL=" + pathname + "\n";
		
		// console.log("text is " + text);
		try {
			eval(text);
		
			this.cache[pathname] = module.exports;
		} finally {
			this.loading[pathname] = undefined;
			module.filename = tmp;
		}
		
		return module.exports;
	}

	return undefined;
};

if (typeof(window.module) === 'undefined') {
	window.module = {
		exports: {},
		filename: null
	};
}

var r = new requireClass();
var require = requireClass.prototype.require.bind(r);

var WebLoader = require("../lib/WebLoader.js");

var ilib = require("../lib/ilib.js");
ilib.setLoaderCallback(new WebLoader(ilib));

ilib._dyncode = true; // indicate that we are using dynamically loaded code

