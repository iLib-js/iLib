/*
 * QMLLoader.js - loader implementation for Qt/QML apps. 
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

var ilib = require("./ilib.js");
var path = require("./Path.js");
var Loader = require("./Loader.js");

/**
 * @class
 * QML implemenation of a Loader class.
 * 
 * @private
 * @extends Loader
 * @param {Object} fr the Qt FileReader instance
 */
var QMLLoader = function(fr) {
	//console.log("new QMLLoader instance called with " + fr);
	this.fr = fr;
	
	this.parent.call(this, ilib);
	
	this.root = module.filename ? path.dirname(path.join(module.filename, "..")) : Qt.resolvedUrl("..").toString();
	this.root = this.root.replace("file://", "");
	//console.log("QMLLoader using root: " + root);
	
	if (this.root[this.root.length-1] === '/') {
		this.root = this.root.substring(0, this.root.length-1);
	}
	

	this.includePath.push(path.join(this.root, "resources")); 	// always check the application's resources dir first
	
	// then a standard locale dir of a built version of ilib from npm
	this._exists(path.join(this.root, "locale"), "localeinfo.json");
	
	// try the standard install directories
	this._exists("/usr/share/javascript/ilib/locale", "localeinfo.json");
	
	// ... else fall back to see if we're in a check-out dir of ilib
	// this._exists(path.join(this.root, "data", "locale"), "localeinfo.json");
	
	//console.log("QMLLoader: include path is now " + JSON.stringify(this.includePath));
};

QMLLoader.prototype = new Loader();
QMLLoader.prototype.parent = Loader;
QMLLoader.prototype.constructor = QMLLoader;

QMLLoader.prototype._loadFile = function (pathname, sync, cb) {
	//console.log("_loadFile: attempting to load " + pathname);
	// use the FileReader plugin to access the local disk synchronously
	if (this.fr.exists(pathname)) {
		var text = this.fr.read(pathname);
		cb && typeof(cb) === 'function' && cb(text);
		return text;
	} else {
		cb && typeof(cb) === 'function' && cb();
		return undefined;
	}
};

QMLLoader.prototype._exists = function(dir, file) {
	var fullpath = path.normalize(path.join(dir, file));
	//console.log("QMLLoader._exists: checking for the existence of " + dir);
	if (this.fr.exists(fullpath)) {
		//console.log("QMLLoader._exists: found");
		this.includePath.push(dir);
	}
};


QMLLoader.prototype.getTarget = function () {
	return this.ilibobj;
};

module.exports = QMLLoader;