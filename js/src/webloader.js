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

var webLoader = function(ilib) {
	//console.log("new webLoader instance\n");

	this.ilibobj = ilib;
	
	// for use from within a check-out of ilib
	var base, root, pos;
	
	scripts = document.getElementsByTagName("script");

	pos = window.location.href.lastIndexOf('/');
	this.root = path.normalize(window.location.href.substring(0, pos));
	
	for (var i = 0; i < scripts.length; i++) {
		var source = scripts[i].src;
		if (source && (pos = source.search(/ilib-web\.js$/)) !== -1) {
			base = path.join(source.substring(7, pos-1), "..");
			break;
		}
	}
	
	this.base = path.normalize(path.join(base || this.root, "data"));

	//console.log("webLoader.constructor: this.base is " + this.base);
	//console.log("webLoader.constructor: this.root is " + this.root);
	
	this.includePath = [
        path.join(this.root, "resources") 	// always check the application's resources dir first
	];
	
	// then try a check-out dir of ilib
	this._exists(path.join(this.base, "localetemp"), "localeinfo.json");
	
	// then a standard locale dir of a built version of ilib
	this._exists(path.join(this.base, "locale"), "localeinfo.json");
	
	// ... else fall back to the standard install directories
	this._exists("/usr/share/javascript/ilib/locale", "localeinfo.json");
};

webLoader.prototype = new ilib.Loader();
webLoader.prototype.parent = ilib.Loader;
webLoader.prototype.constructor = webLoader;

webLoader.prototype._exists = function(dir, file) {
	if (this._loadFile(path.join(dir, file), true)) {
		//console.log("webLoader._exists: adding " + dir + " to the include path.");
		this.includePath.push(dir);
	}
};

webLoader.prototype._loadFile = function (pathname, sync, success, failure) {
	// use normal web techniques
	var req = new XMLHttpRequest();
	var text = undefined;
		
	//req.open("GET", "file:" + path.resolve(file), false);
	if (pathname.substring(0,7) !== "file://") {
		pathname = "file://" + pathname;
	}
	req.open("GET", pathname, !sync);
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

webLoader.prototype._loadFileAlongIncludePath = function(includePath, pathname) {
	for (var i = 0; i < includePath.length; i++) {
		var manifest = this.manifest[includePath[i]];
		if (!manifest || webLoader.indexOf(manifest, pathname) > -1) {
			var filepath = path.join(includePath[i], pathname);
			//console.log("webLoader._loadFileAlongIncludePath: attempting sync load " + filepath);
			var text = this._loadFile(filepath, true);
			if (text) {
				//console.log("webLoader._loadFileAlongIncludePath: succeeded");
				return text;
			} 
			//else {
				//console.log("webLoader._loadFileAlongIncludePath: failed");
			//} 
		} 
		//else {
			//console.log("webLoader._loadFileAlongIncludePath: " + pathname + " not in manifest for " + this.includePath[i]);
		//}
	}
	
	//console.log("webLoader._loadFileAlongIncludePath: file not found anywhere along the path.");
	return undefined;
};

webLoader.prototype.loadFiles = function(paths, sync, params, callback) {
	var includePath = params && params.base ? [params.base].concat(this.includePath) : this.includePath;

	//console.log("webLoader loadFiles called\n");
	// make sure we know what we can load
	this._loadManifests();
	
	if (!paths) {
		// nothing to load
		//console.log("nothing to load\n");
		return;
	}
	
	//console.log("web loader: attempting to load these files: " + JSON.stringify(paths) + "\n");
	if (sync) {
		var ret = [];
		
		// synchronous
		for (var i = 0; i < paths.length; i++) {
			var text = this._loadFileAlongIncludePath(includePath, path.normalize(paths[i]));
			ret.push(text ? JSON.parse(text) : undefined); 
		};

		// only call the callback at the end of the chain of files
		if (typeof(callback) === 'function') {
			callback(ret);
		}

		return ret;
	}

	// asynchronous
	this.results = [];
	this._loadFilesAsync(includePath, paths, callback);
};

webLoader.prototype._loadFilesAsyncAlongIncludePath = function (includes, filename, success, failure) {
	var text = undefined;
	
	if (includes.length > 0) {
		var root = includes[0];
		includes = includes.slice(1);
		
		var manifest = this.manifest[root];
		if (!manifest || webLoader.indexOf(manifest, filename) > -1) {
			var filepath = path.join(root, filename);
			this._loadFile(filepath, false, function(t) {
				//console.log("webLoader._loadFilesAsyncAlongIncludePath: loading " + filepath + " success\n");
				success(t);
			}, this.ilibobj.bind(this, function (err) {
				//console.log("webLoader._loadFilesAsyncAlongIncludePath: loading " + filepath + " failed\n");
				this._loadFilesAsyncAlongIncludePath(includes, filename, success, failure);
			}));
		} else {
			//console.log("webLoader._loadFilesAsyncAlongIncludePath: " + filepath + " not in manifest for " + root);
			this._loadFilesAsyncAlongIncludePath(includes, filename, success, failure);
		}
	} else {
		failure();
	}
};

webLoader.prototype._loadFilesAsync = function (includePath, paths, callback) {
	if (paths.length > 0) {
		var filename = paths[0];
		paths = paths.slice(1);
		
		//console.log("webLoader._loadFilesAsync: attempting to load " + filename + " along the include path.");
		this._loadFilesAsyncAlongIncludePath(includePath, filename, this.ilibobj.bind(this, function (json) {
			this.results.push(json ? JSON.parse(json) : undefined);
			this._loadFilesAsync(includePath, paths, callback);
		}), this.ilibobj.bind(this, function () {
			this.results.push(undefined);
			this._loadFilesAsync(includePath, paths, callback);
		}));
	} else {
		// only call the callback at the end of the chain of files
		if (typeof(callback) === 'function') {
			callback(this.results);
		}
	}
};

webLoader.prototype._loadManifestFile = function(root) {
	var dirpath = path.normalize(root);
	var filepath = path.join(dirpath, "ilibmanifest.json");
	var text = this._loadFile(filepath, true);
	if (text) {
		//console.log("web loader: loaded manifest " + filepath + "\n");
		this.manifest[dirpath] = JSON.parse(text).files;
	}
};

webLoader.prototype._loadManifests = function() {
	//console.log("web loader: load manifests\n");
	if (!this.manifest) {
		this.manifest = {};
		
		for (var i = 0; i < this.includePath.length; i++) {
			this._loadManifestFile(this.includePath[i]);
		}
	}
};
webLoader.prototype.listAvailableFiles = function() {
	//console.log("web loader: list available files called\n");
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
	
	//console.log("web loader: isAvailable " + path + "? ");
	for (var dir in this.manifest) {
		if (webLoader.indexOf(this.manifest[dir], path) !== -1) {
			//console.log("true\n");
			return true;
		}
	}
	
	//console.log("false\n");
	return false;
};

module.exports = webLoader;