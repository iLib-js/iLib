/*
 * qmlloader.js - loader implementation for Qt/QML apps. 
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

/**
 * @param {Object} fr the Qt FileReader instance
 */
var qmlLoader = function(fr) {
	//console.log("new qmlLoader instance called with " + fr);
	this.fr = fr;

	// for use from within a check-out of ilib
	var root, pos;
	
	root = module.filename ? path.dirname(path.join(module.filename, "..")) : Qt.resolvedUrl("..").toString();
	root = root.replace("file://", "");
	//console.log("qmlLoader using root: " + root);
	
	if (root[root.length-1] === '/') {
		root = root.substring(0,root.length-1);
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

	//console.log("qmlLoader base: " + this.base);
	//console.log("qmlLoader code: " + this.code);
};

qmlLoader.prototype = new ilib.Loader();
qmlLoader.prototype.parent = ilib.Loader;
qmlLoader.prototype.constructor = qmlLoader;

qmlLoader.prototype._loadFile = function (pathname, sync, success, failure) {
	//console.log("_loadFile: attempting to load " + pathname);
	// use the FileReader plugin to access the local disk synchronously
	if (this.fr.exists(pathname)) {
		var text = this.fr.read(pathname);
		success && typeof(success) === 'function' && success(text);
		return text;
	} else {
		failure && typeof(failure) === 'function' && failure(text);
		return undefined;
	}
};

qmlLoader.prototype.loadFiles = function(paths, sync, params, callback) {
	var root = params && params.base || this.base;

	// console.log("qmlLoader loadFiles called");
	// make sure we know what we can load
	this._loadManifests();
	
	if (!paths) {
		// nothing to load
		// console.log("nothing to load");
		return;
	}
	
	var resources = path.normalize(path.join(root, "resources"));
	
	//console.log("qml loader: attempting to load paths " + JSON.stringify(paths));
	if (sync) {
		var ret = [];
		
		// synchronous
		for (var i = 0; i < paths.length; i++) {
			var json;
			var p = paths[i];

			var filepath = path.join(root, "locale", p);
			//console.log("qml loader: attempting sync load " + filepath);
			var text = this._loadFile(filepath, true);
			if (text) {
				//console.log("qml loader: load " + filepath + " succeeded");
				ret.push(JSON.parse(text));
			} else { 
				filepath = path.join(resources, p);
				//console.log("qml loader: attempting sync load resources " + filepath);
				text = this._loadFile(filepath, true);
				if (text) {
					//console.log("qml loader: load " + filepath + " succeeded");
					ret.push(JSON.parse(text));
				} else {
					ret.push(undefined);
					//console.log("qml loader: sync load failed");
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

qmlLoader.prototype._loadFilesAsync = function (root, paths) {
	if (paths.length > 0) {
		var filename = paths.shift();
		var filepath = path.join(root, "locale", filename);
		//console.log("qml loader: attempting async load " + filepath);
		this._loadFile(filepath, false, ilib.bind(this, function(text) {
			//console.log("success");
			this._nextFile(root, paths, text);
		}), ilib.bind(this, function (err) {
			//console.log("failed");
			filepath = path.join("resources", filename);
			//console.log("qml loader: attempting async load " + filepath);
			this._loadFile(filepath, false, ilib.bind(this, function(text) {
				//console.log("success");
				this._nextFile(root, paths, text);
			}), ilib.bind(this, function (err) {
				//console.log("failed");
				this._nextFile(root, paths, undefined);
			}));
		}));
	}
};
qmlLoader.prototype._nextFile = function (root, paths, json) {
	// console.log("qml loader:  async load " + (json ? "succeeded" : "failed"));
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

qmlLoader.prototype._loadManifest = function(root, subpath, manifest) {
	var dirpath = path.normalize(path.join(root, subpath));
	var filepath = path.join(dirpath, "ilibmanifest.json");
	if (this.fr.exists(filepath)) {
		var text = this._loadFile(filepath, true);
		if (text) {
			//console.log("qml loader: loaded manifest " + filepath);
			manifest[dirpath] = JSON.parse(text).files;
		}
	}
};

qmlLoader.prototype._loadManifests = function() {
	//console.log("qml loader: load manifests");
	if (!this.manifest) {
		var manifest = {};
		
		this._loadManifest(this.base, "localetemp", manifest);
		this._loadManifest(this.base, "locale", manifest);
		this._loadManifest(".", "resources", manifest);
		
		this.manifest = manifest;
	}
};
qmlLoader.prototype.listAvailableFiles = function() {
	//console.log("qml loader: list available files called");
	this._loadManifests();
	return this.manifest;
};

qmlLoader.indexOf = function(array, obj) {
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

qmlLoader.prototype.isAvailable = function(path) {
	this._loadManifests();
	
	//console.log("qml loader: isAvailable " + path + "? ");
	for (var dir in this.manifest) {
		if (qmlLoader.indexOf(this.manifest[dir], path) !== -1) {
			//console.log("true");
			return true;
		}
	}
	
	//console.log("false");
	return false;
};

// merge object2's properties into object 1
qmlLoader.prototype.merge = function (object1, object2) {
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

qmlLoader.prototype.getTarget = function () {
	return this.ilibobj;
};

module.exports = qmlLoader;