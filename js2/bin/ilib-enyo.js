/*
 * ilib-enyo.js - glue code for enyo apps to load local ilib code and data 
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
			} while (pathname.length < previousLen && pathname.length > 0);
		}
		return pathname;
	}
};

var requireClass = function() {
	this.cache = {};
	this.updateRequire = /require\(("[^/][^"+]*")\)/g;
};

requireClass.prototype.loadFile = function(pathname, sync) {
	var text;
    var ajax = new enyo.Ajax({
    	handleAs: "text",
        cacheBust: false,
        sync: true,
        url: "file://" + pathname
	});
	ajax.response(this, function(s, r) {
        text = r;
	});
	ajax.go();
	return text;
};

requireClass.prototype.setRoot = function() {
	if (!this.root) {
		var pos;
		var scripts = document.getElementsByTagName("script");
	
		this.root = ".";
		for (var i = 0; i < scripts.length; i++) {
			var source = scripts[i].src;
			if (source && (pos = source.search(/enyo\.js$/)) !== -1) {
				this.root = path.normalize(path.join(source.substring(7, pos-1), "../lib/enyo-ilib/ilib/js"));
				break;
			}
		}
	}
};

requireClass.prototype.cacheObjectForPath = function(pathname, obj) {
	this.setRoot();
	if (pathname.charAt(0) !== '/') {
		pathname = path.join(this.root, pathname);
	}
	
	pathname = path.normalize(pathname);
	
	this.cache[pathname] = obj;
};

requireClass.prototype.require = function(pathname) {
	this.setRoot();
	
	//console.log("this.root is " + this.root + " and pathname before was " + pathname);
	
	if (pathname.charAt(0) !== '/') {
		pathname = path.join(this.root, pathname);
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
r.cacheObjectForPath("./ilib.js", ilib);

ilib._dyncode = true; // indicate that we are using dynamically loaded code

if (typeof(window.module) === 'undefined') {
	var module = {
		exports: {}
	};
}

require("./ilib-stubs-dyn.js");

// now the enyo code should create an enyo loader and set it in to ilib
// with ilib.setLoaderCallback()