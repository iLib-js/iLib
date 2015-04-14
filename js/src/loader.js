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

/** @interface */
var genericLoader = function(ilib) {
	// console.log("new genericLoader instance");

	this.ilibobj = ilib;
	this.protocol = "file://";
	this.includePath = [];
};

genericLoader.prototype = new ilib.Loader();
genericLoader.prototype.parent = ilib.Loader;
genericLoader.prototype.constructor = genericLoader;

/** @abstract */
genericLoader.prototype._loadFile = function (pathname, sync, cb) {};

genericLoader.prototype._exists = function(dir, file) {
	var fullpath = path.normalize(path.join(dir, file));
	if (this.protocol !== "http://") {
		text = this._loadFile(fullpath, true);
		if (text) {
			this.includePath.push(dir);
		}
	} else {
		// put the dir on the list now assuming it exists, and check for its availability 
		// later so we can avoid the 404 errors eventually
		this.includePath.push(dir);
		this._loadFile(fullpath, false, ilib.bind(this, function(text) {
			if (!text) {
				console.log("genericLoader._exists: removing " + dir + " from the include path because it doesn't exist.");
				this.includePath = this.includePath.slice(-1);
			}
		}));
	}
};

genericLoader.prototype._loadFileAlongIncludePath = function(includePath, pathname) {
	for (var i = 0; i < includePath.length; i++) {
		var manifest = this.manifest[includePath[i]];
		if (!manifest || genericLoader.indexOf(manifest, pathname) > -1) {
			var filepath = path.join(includePath[i], pathname);
			//console.log("genericLoader._loadFileAlongIncludePath: attempting sync load " + filepath);
			var text = this._loadFile(filepath, true);
			if (text) {
				//console.log("genericLoader._loadFileAlongIncludePath: succeeded");
				return text;
			} 
			//else {
				//console.log("genericLoader._loadFileAlongIncludePath: failed");
			//} 
		} 
		//else {
			//console.log("genericLoader._loadFileAlongIncludePath: " + pathname + " not in manifest for " + this.includePath[i]);
		//}
	}
	
	//console.log("genericLoader._loadFileAlongIncludePath: file not found anywhere along the path.");
	return undefined;
};

genericLoader.prototype.loadFiles = function(paths, sync, params, callback) {
	var includePath = params && params.base ? [params.base].concat(this.includePath) : this.includePath;

	//console.log("genericLoader loadFiles called\n");
	// make sure we know what we can load
	if (!paths) {
		// nothing to load
		//console.log("nothing to load\n");
		return;
	}
	
	//console.log("generic loader: attempting to load these files: " + JSON.stringify(paths) + "\n");
	if (sync) {
		var ret = [];
		
		// synchronous
		this._loadManifests();
		
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
	this._loadManifests(false, ilib.bind(this, function() {
		this.results = [];
		this._loadFilesAsync(includePath, paths, callback);
	}));
};

genericLoader.prototype._loadFilesAsyncAlongIncludePath = function (includes, filename, cb) {
	var text = undefined;
	
	if (includes.length > 0) {
		var root = includes[0];
		includes = includes.slice(1);
		
		var manifest = this.manifest[root];
		if (!manifest || genericLoader.indexOf(manifest, filename) > -1) {
			var filepath = path.join(root, filename);
			this._loadFile(filepath, false, ilib.bind(this, function(t) {
				//console.log("genericLoader._loadFilesAsyncAlongIncludePath: loading " + (t ? " success" : " failed"));
				if (t) {
					cb(t);
				} else {
					this._loadFilesAsyncAlongIncludePath(includes, filename, cb);
				}
			}));
		} else {
			//console.log("genericLoader._loadFilesAsyncAlongIncludePath: " + filepath + " not in manifest for " + root);
			this._loadFilesAsyncAlongIncludePath(includes, filename, cb);
		}
	} else {
		cb();
	}
};

genericLoader.prototype._loadFilesAsync = function (includePath, paths, callback) {
	if (paths.length > 0) {
		var filename = paths[0];
		paths = paths.slice(1);
		
		//console.log("genericLoader._loadFilesAsync: attempting to load " + filename + " along the include path.");
		this._loadFilesAsyncAlongIncludePath(includePath, filename, ilib.bind(this, function (json) {
			this.results.push(json ? JSON.parse(json) : undefined);
			this._loadFilesAsync(includePath, paths, callback);
		}));
	} else {
		// only call the callback at the end of the chain of files
		if (typeof(callback) === 'function') {
			callback(this.results);
		}
	}
};

genericLoader.prototype._loadManifestFile = function(i, sync, cb) {
	if (i < this.includePath.length) {
		var filepath = path.join(this.includePath[i], "ilibmanifest.json");
		var text = this._loadFile(filepath, sync, ilib.bind(this, function(text) {
			if (text) {
				this.manifest[this.includePath[i]] = JSON.parse(text).files;
			}
			this._loadManifestFile(i+1, sync, cb);
		}));
	} else {
		if (typeof(cb) === 'function') {
			cb();
		}
	}
};

genericLoader.prototype._loadManifests = function(sync, cb) {
	if (!this.manifest) {
		this.manifest = {};
		if (typeof(sync) !== 'boolean') {
			sync = true;
		}
			
		this._loadManifestFile(0, sync, cb);
	} else {
		if (typeof(cb) === 'function') {
			cb();
		}
	}
};

genericLoader.prototype.listAvailableFiles = function(sync, cb) {
	//console.log("generic loader: list available files called\n");
	this._loadManifests(sync, ilib.bind(this, function () {
		if (typeof(cb) === 'function') {
			cb(this.manifest);
		}
	}));
	return this.manifest;
};

genericLoader.indexOf = function(array, obj) {
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

genericLoader.prototype.checkAvailability = function(file) {
	for (var dir in this.manifest) {
		if (genericLoader.indexOf(this.manifest[dir], file) !== -1) {
			return true;
		}
	}
	
	return false;
};

genericLoader.prototype.isAvailable = function(file, sync, cb) {
	if (typeof(sync) !== 'boolean') {
		sync = true;
	}
	if (sync) {
		this._loadManifests(sync);
		return this.checkAvailability(file);
	}
	
	this._loadManifests(false, ilib.bind(this, function () {
		// console.log("generic loader: isAvailable " + path + "? ");
		if (typeof(cb) === 'function') {
			cb(this.checkAvailability(file));
		}
	}));
};

module.exports = genericLoader;