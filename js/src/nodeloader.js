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
	
	var nodeLoader = function () {
		// util.print("new common nodeLoader instance\n");
	
		if (typeof(module) !== 'undefined' && module.filename) {
			// loaded under nodejs
			var base = path.dirname(module.filename);
			var localeDir = path.normalize(path.join(base, "locale"));
			if (fs.existsSync(localeDir) && fs.existsSync(path.join(localeDir, "localeinfo.json"))) {
				// this was loaded via a nodejs require() call in an npm module, so the parent
				// dir of this file is where the locale dir is
				this.base = base;
				this.code = path.normalize(path.join(base, "js"));
			} 
			
			if (!this.base) {
				// for use from within a check-out of ilib
				var root = path.normalize(path.join(base, ".."));
				this.base = path.normalize(path.join(root, "data"));
				this.code = path.normalize(path.join(root, "src"));
					
				localeDir = path.normalize(path.join(base, "localetemp"));
				if (fs.existsSync(localeDir) && fs.existsSync(path.join(localeDir, "localeinfo.json"))) {
					// loaded from a development check-out of the ilib sources
					this.base = base;
				}
			}
		}
	
		if (!this.base) {
			// default to the standard install location
			this.base = "/usr/share/javascript/ilib";
			this.code = "/usr/share/javascript/ilib/js";
		}
		
		// util.print("base is defined as " + this.base + "\n");
		// util.print("code is defined as " + this.code + "\n");
	};
	
	// make this a subclass of loader
	nodeLoader.prototype = new ilib.Loader();
	nodeLoader.prototype.parent = new ilib.Loader;
	nodeLoader.prototype.constructor = nodeLoader;
	
	nodeLoader.prototype.loadFiles = function(paths, sync, params, callback) {
		var root = (params && params.base) ? path.normalize(params.base) : this.base;
	
		// util.print("nodeLoader loadFiles called\n");
		// make sure we know what we can load
		this._loadManifests();
		
		if (!paths) {
			// nothing to load
			// util.print("nothing to load\n");
			return;
		}
		
		var resources = path.normalize(path.join(root, "resources"));
		var resExists = fs.existsSync(resources);
	
		// util.print("node loader: attempting to load paths " + JSON.stringify(paths) + "\n");
		if (sync) {
			var ret = [];
			
			// synchronous
			paths.forEach(function (p) {
				var json;
	
				var filepath = path.join(root, "locale", p);
				// util.print("node loader: attempting sync load " + filepath + "\n");
				if (fs.existsSync(filepath)) {
					json = fs.readFileSync(filepath, "utf-8");
					// util.print("node loader: load " + filepath + (json ? " succeeded\n" : " failed\n"));
					ret.push(json ? JSON.parse(json) : undefined);
					return;
				} 
				
				if (resExists) {
					filepath = path.join(resources, p);
					// util.print("node loader: attempting sync load resources " + filepath + "\n");
					if (fs.existsSync(filepath)) {
						json = fs.readFileSync(filepath, "utf-8");
						// util.print("node loader: load " + filepath + (json ? " succeeded\n" : " failed\n"));
						ret.push(json ? JSON.parse(json) : undefined);
					}
				}
				
				ret.push(undefined);
				// util.print("node loader:  sync load failed\n");
			});
	
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
	
	nodeLoader.prototype._loadFilesAsync = function (root, paths) {
		if (paths.length > 0) {
			var filename = paths.shift();
			var filepath = path.join(root, "locale", filename);
			// util.print("node loader: attempting async load " + filepath + "\n");
			fs.readFile(filepath, "utf-8", function(err, json) {
				if (err) {
					filepath = path.join("resources", filename);
					// util.print("node loader: attempting async load " + filepath + "\n");
					fs.readFile(filepath, "utf-8", function(err, json) {
						this._nextFile(root, paths, err ? undefined : json);
					});
				} else {
					this._nextFile(root, paths, json);
				}
			});
		}
	};
	nodeLoader.prototype._nextFile = function (root, paths, json) {
		// util.print("node loader:  async load " + (json ? "succeeded" : "failed") + "\n");
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
	nodeLoader.prototype._loadManifests = function() {
		// util.print("node loader: load manifests\n");
		if (!this.manifest) {
			var root = this.base;
			var manifest = {};
	
			function loadManifest(subpath) {
				var json;
				var dirpath = path.join(root, subpath);
				var filepath = path.join(dirpath, "ilibmanifest.json");
				if (fs.existsSync(filepath)) {
					// util.print("node loader: loading manifest " + filepath + "\n");
					json = fs.readFileSync(filepath, "utf-8");
					if (json) {
						manifest[dirpath] = JSON.parse(json).files;
					}
				}
			}
	
			loadManifest("localetemp");
			loadManifest("locale");
			
			root = ".";
			loadManifest("resources");
			
			this.manifest = manifest;
		}
	};
	nodeLoader.prototype.listAvailableFiles = function() {
		// util.print("node loader: list available files called\n");
		this._loadManifests();
		return this.manifest;
	};
	nodeLoader.prototype.isAvailable = function(path) {
		this._loadManifests();
		
		// util.print("node loader: isAvailable " + path + "? ");
		for (var dir in this.manifest) {
			if (ilib.indexOf(this.manifest[dir], path) !== -1) {
				// util.print("true\n");
				return true;
			}
		}
		
		// util.print("false\n");
		return false;
	};
	
	return new nodeLoader();
};