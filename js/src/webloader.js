/*
 * webloader.js - loader implementation for web apps. 
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

var path = require("./path.js");
var ilib = require("./ilibglobal.js");

var webLoader = function(ilibobj) {
	console.log("new webLoader instance\n");

	// for use from within a check-out of ilib
	var root, pos;
	
	scripts = document.getElementsByTagName("script");

	for (var i = 0; i < scripts.length; i++) {
		var source = scripts[i].src;
		if (source && (pos = source.search(/ilib-web\.js$/)) !== -1) {
			root = path.join(source.substring(7, pos-1), "..");
			break;
		}
	}
	
	this.base = path.normalize(path.join(root, "data"));
	this.code = path.normalize(path.join(root, "src"));
	
	// for use on-device
	var text = this._loadFile(path.join(this.base, "locale/localeinfo.json"), true);
	if (!text) {
		// ... else use the standard install directories
		this.base = "/usr/share/javascript/ilib";
		this.code = "/usr/share/javascript/ilib/js";
	}
	
	this.ilibobj = ilibobj;
	this.fileNameCache = {};
};

webLoader.prototype = new ilib.Loader();
webLoader.prototype.parent = ilib.Loader;
webLoader.prototype.constructor = webLoader;

webLoader.prototype._loadFile = function (pathname, sync, success, failure) {
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
		text = undefined;
	}
	
	return text;
};

webLoader.prototype.loadFiles = function(paths, sync, params, callback) {
	var root = params && params.base || this.base;

	// console.log("webLoader loadFiles called\n");
	// make sure we know what we can load
	this._loadManifests();
	
	if (!paths) {
		// nothing to load
		// console.log("nothing to load\n");
		return;
	}
	
	var resources = path.normalize(path.join(root, "resources"));
	
	console.log("web loader: attempting to load paths " + JSON.stringify(paths) + "\n");
	if (sync) {
		var ret = [];
		
		// synchronous
		for (var i = 0; i < paths.length; i++) {
			var json;
			var p = paths[i];

			var filepath = path.join(root, "locale", p);
			console.log("web loader: attempting sync load " + filepath + "\n");
			var text = this._loadFile(filepath, true);
			if (text) {
				console.log("web loader: load " + filepath + (json ? " succeeded\n" : " failed\n"));
				ret.push(JSON.parse(text));
			} else { 
				filepath = path.join(resources, p);
				console.log("web loader: attempting sync load resources " + filepath + "\n");
				text = this._loadFile(filepath, true);
				if (text) {
					console.log("web loader: load " + filepath + (json ? " succeeded\n" : " failed\n"));
					ret.push(JSON.parse(text));
				} else {
					ret.push(undefined);
					console.log("web loader: sync load failed\n");
				}
			}
		};

		// only call the callback at the end of the chain of files
		if (typeof(callback) === 'function') {
			callback(ret);
		}

		return ret;
	}

	// asynchronous
	this.results = [];
	this.callback = callback;
	this._loadFilesAsync(root, paths);
};

webLoader.prototype._loadFilesAsync = function (root, paths) {
	if (paths.length > 0) {
		var filename = paths.shift();
		var filepath = path.join(root, "locale", filename);
		console.log("web loader: attempting async load " + filepath);
		this._loadFile(filepath, false, function(text) {
			console.log("success\n");
			this._nextFile(root, paths, text);
		}, function (err) {
			console.log("failed\n");
			filepath = path.join("resources", filename);
			console.log("web loader: attempting async load " + filepath);
			this._loadFile(filepath, false, function(text) {
				console.log("success\n");
				this._nextFile(root, paths, text);
			}, function (err) {
				console.log("failed\n");
				this._nextFile(root, paths, undefined);
			});
		});
	}
};
webLoader.prototype._nextFile = function (root, paths, json) {
	// console.log("web loader:  async load " + (json ? "succeeded" : "failed") + "\n");
	this.results.push(json ? JSON.parse(json) : undefined);
	if (paths.length > 0) {
		this._loadFilesAsync(root, paths);
	} else {
		// only call the callback at the end of the chain of files
		if (typeof(callback) === 'function') {
			this.callback(this.results);
		}
	}
};

webLoader.prototype._loadManifest = function(root, subpath, manifest) {
	var dirpath = path.normalize(path.join(root, subpath));
	var filepath = path.join(dirpath, "ilibmanifest.json");
	var text = this._loadFile(filepath, true);
	if (text) {
		console.log("web loader: loading manifest " + filepath + "\n");
		manifest[dirpath] = JSON.parse(text).files;
	}
};

webLoader.prototype._loadManifests = function() {
	console.log("web loader: load manifests\n");
	if (!this.manifest) {
		var manifest = {};
		
		this._loadManifest(this.base, "localetemp", manifest);
		this._loadManifest(this.base, "locale", manifest);
		this._loadManifest(".", "resources", manifest);
		
		this.manifest = manifest;
	}
};
webLoader.prototype.listAvailableFiles = function() {
	console.log("web loader: list available files called\n");
	this._loadManifests();
	return this.manifest;
};

webLoader.indexOf = function(array, obj) {
	if (!array || !obj) {
		return -1;
	}
	if (typeof(array.indexOf) === 'function') {
		return array.indexOf(obj);
	} else {
		for (var i = 0; i < array.length; i++) {
	        if (array[i] === obj) {
	            return i;
	        }
	    }
	    return -1;
	}
};

webLoader.prototype.isAvailable = function(path) {
	this._loadManifests();
	
	console.log("web loader: isAvailable " + path + "? ");
	for (var dir in this.manifest) {
		if (webLoader.indexOf(this.manifest[dir], path) !== -1) {
			console.log("true\n");
			return true;
		}
	}
	
	console.log("false\n");
	return false;
};

// merge object2's properties into object 1
webLoader.prototype.merge = function (object1, object2) {
	var prop = undefined;
	for (prop in object2) {
		if (prop && typeof(object2[prop]) !== 'undefined') {
			if (object1[prop] instanceof Array && object2[prop] instanceof Array) {
				//console.log("Merging array prop " + prop);
				object1[prop] = object1[prop].concat(object2[prop]);
			} else if (typeof(object1[prop]) === 'object' && typeof(object2[prop]) === 'object') {
				//console.log("Merging object prop " + prop);
				if (prop !== "_load" && prop !== "ilib") {
					object1[prop] = this.merge(object1[prop], object2[prop]);
				}
			} else {
				//console.log("Copying prop " + prop);
				// for debugging. Used to determine whether or not json files are overriding their parents unnecessarily
				object1[prop] = object2[prop];
			}
		}
	}
	return object1;
};

webLoader.prototype.require = function(pathname) {
	//	console.log("typeof(this.code) is " + typeof(this.code));
	//	console.log("typeof(pathname) is " + typeof(pathname));
	var paths = (typeof(pathname) === 'string') ? [pathname] : pathname;
	var mod, submodule = {};
	for (var i = 0; i < paths.length; i++) {
		if (!this.fileNameCache[paths[i]]) {
			var text = this._loadFile(path.join(this.code, paths[i]), true, undefined);
			if (text) {
				// remove the ilib definition so that the things that file defines
				// go to the global ilib rather than the local one
				text = text.replace(/var ilib = [^;]*;/, "var xilib = {};");
				text = text.replace(/\nilib\./g, "\nxilib.");
				text = text.replace(/return ilib;/, "return xilib;");
				
				// console.log("text is " + text);
				eval(text);
				
				mod = module.exports(this);
				this.merge(submodule, mod);
				this.merge(this.ilibobj, mod);
				/*
				for (var prop in submodule) {
					console.log("assigning " + prop);
					obj[prop] = submodule[prop];
				}
				*/
			}
			this.fileNameCache[paths[i]] = true;
		}
	}
	return submodule;
};

webLoader.prototype.clearRequireCache = function() {
	this.fileNameCache = {};
};

webLoader.prototype.getTarget = function () {
	return this.ilibobj;
};

module.exports = webLoader;