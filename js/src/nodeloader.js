/*
 * nodeloader.js - ilib.Loader implementation for nodejs
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

module.exports = function (ilib) {
	var path = require("path"),
		fs = require("fs"),
		util = require("util");
	
	var nodeLoader = function (root) {
		// util.print("new common nodeLoader instance\n");
	
		// root of the app that created this loader
		this.root = root || process.cwd();
		
		this.base = (typeof(module) !== 'undefined' && module.filename) ?
				path.join(path.dirname(module.filename), "..") :
				this.root;
		
		// console.log("base is defined as " + this.base + "\n");
		
		this.includePath = [
	        path.join(this.root, "resources") 	// always check the application's resources dir first
		];
		
		// then try a check-out dir of ilib
		this._exists(path.join(this.base, "data", "localetemp"), "localeinfo.json");
		
		// then a standard locale dir of a built version of ilib from npm
		this._exists(path.join(this.base, "locale"), "localeinfo.json");
		
		// ... else fall back to the standard install directories
		this._exists("/usr/share/javascript/ilib/locale", "localeinfo.json");
		
	};
		
	// make this a subclass of loader
	nodeLoader.prototype = new ilib.Loader();
	nodeLoader.prototype.parent = new ilib.Loader;
	nodeLoader.prototype.constructor = nodeLoader;
	
	nodeLoader.indexOf = function(array, obj) {
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

	nodeLoader.prototype._exists = function(dir, file) {
		if (fs.existsSync(path.join(dir, file))) {
			// console.log("nodeLoader._exists: adding " + dir + " to the include path.");
			this.includePath.push(dir);
		}
	};

	nodeLoader.prototype._loadFileAlongIncludePath = function(includePath, pathname) {
		for (var i = 0; i < includePath.length; i++) {
			var manifest = this.manifest[includePath[i]];
			if (!manifest || nodeLoader.indexOf(manifest, pathname) > -1) {
				var filepath = path.join(includePath[i], pathname);
				// console.log("nodeLoader._loadFileAlongIncludePath: attempting sync load " + filepath);
				var text;
				if (fs.existsSync(filepath)) {
					text = fs.readFileSync(filepath, "utf-8");
				}
				if (text) {
					// console.log("nodeLoader._loadFileAlongIncludePath: succeeded");
					return text;
				} 
				//else {
					// console.log("nodeLoader._loadFileAlongIncludePath: failed");
				//} 
			} 
			//else {
				// console.log("nodeLoader._loadFileAlongIncludePath: " + pathname + " not in manifest for " + this.includePath[i]);
			//}
		}
		
		// console.log("nodeLoader._loadFileAlongIncludePath: file not found anywhere along the path.");
		return undefined;
	};
	
	nodeLoader.prototype.loadFiles = function(paths, sync, params, callback) {
		var includePath = params && params.base ? [params.base].concat(this.includePath) : this.includePath;

		//console.log("nodeLoader loadFiles called\n");
		// make sure we know what we can load
		this._loadManifests();
		
		if (!paths) {
			// nothing to load
			//console.log("nothing to load\n");
			return;
		}
		
		// console.log("nodeLoader: attempting to load these files: " + JSON.stringify(paths) + "\n");
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
	
	nodeLoader.prototype._loadFilesAsyncAlongIncludePath = function (includes, filename, cb) {
		var text = undefined;
		
		if (includes.length > 0) {
			var root = includes[0];
			includes = includes.slice(1);
			
			var manifest = this.manifest[root];
			if (!manifest || nodeLoader.indexOf(manifest, filename) > -1) {
				var filepath = path.join(root, filename);
				fs.readFile(filepath, "utf-8", ilib.bind(this, function(err, t) {
					// console.log("nodeLoader._loadFilesAsyncAlongIncludePath: loading " + filepath + (err ? " failed" : " success"));
					if (err) {
						this._loadFilesAsyncAlongIncludePath(includes, filename, cb);
					} else {
						cb(t);
					}
				}));
			} else {
				// console.log("nodeLoader._loadFilesAsyncAlongIncludePath: " + filepath + " not in manifest for " + root);
				this._loadFilesAsyncAlongIncludePath(includes, filename, cb);
			}
		} else {
			cb();
		}
	};

	nodeLoader.prototype._loadFilesAsync = function (includePath, paths, callback) {
		if (paths.length > 0) {
			var filename = paths[0];
			paths = paths.slice(1);
			
			// console.log("nodeLoader._loadFilesAsync: attempting to load " + filename + " along the include path.");
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

	nodeLoader.prototype._loadManifestFile = function(root) {
		var dirpath = path.normalize(root);
		var filepath = path.join(dirpath, "ilibmanifest.json");
		if (fs.existsSync(filepath)) {
			var text = fs.readFileSync(filepath, "utf-8");
			if (text) {
				// console.log("nodeLoader: loaded manifest " + filepath + "\n");
				this.manifest[dirpath] = JSON.parse(text).files;
			}
		}
	};

	nodeLoader.prototype._loadManifests = function() {
		// console.log("nodeLoader: load manifests\n");
		if (!this.manifest) {
			this.manifest = {};
			
			for (var i = 0; i < this.includePath.length; i++) {
				this._loadManifestFile(this.includePath[i]);
			}
		}
	};

	nodeLoader.prototype.listAvailableFiles = function() {
		// util.print("node loader: list available files called\n");
		this._loadManifests();
		return this.manifest;
	};

	nodeLoader.prototype.isAvailable = function(path) {
		this._loadManifests();
		
		// console.log("nodeLoader: isAvailable " + path + "? ");
		for (var dir in this.manifest) {
			if (nodeLoader.indexOf(this.manifest[dir], path) !== -1) {
				// console.log("true\n");
				return true;
			}
		}
		
		// console.log("false\n");
		return false;
	};
	
	return new nodeLoader();
};