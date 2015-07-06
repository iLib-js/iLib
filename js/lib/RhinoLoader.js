/*
 * RhinoLoader.js - loader implementation for Rhino-based apps. 
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

importPackage(java.io);

var ilib = require("./ilib.js");
var path = require("./Path.js");
var Loader = require("./Loader.js");

/**
 * @class
 * An implementation of the Loader class for Rhino.
 * 
 * @private
 * @constructor
 */
var RhinoLoader = function() {
	//console.log("new RhinoLoader instance called with " + fr);
	
	this.parent.call(this, ilib);
	
	this.root = module.resolve("..") || environment["user.dir"];
	this.root = this.root.replace("file://", "");
	// console.log("RhinoLoader using root: " + this.root);
	
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
	
	//console.log("RhinoLoader: include path is now " + JSON.stringify(this.includePath));
};

RhinoLoader.prototype = new Loader();
RhinoLoader.prototype.parent = Loader;
RhinoLoader.prototype.constructor = RhinoLoader;

RhinoLoader.prototype._loadFile = function (pathname, sync, cb) {
	// ignore sync flag -- always load synchronously
	// console.log("RhinoLoader._loadFile: attempting to load " + pathname);
	var text = "";
	var reader;
	try {
		reader = new BufferedReader(new InputStreamReader(new FileInputStream(pathname), "utf-8"));
		var tmp;
		while ((tmp = reader.readLine()) !== null) {
			text += tmp + '\n';
		}
	} catch (e) {
		// ignore
		text = undefined;
	} finally {
		if (reader) {
			try {
				reader.close();
			} catch (e2) {}
		}
		cb && typeof(cb) === 'function' && cb(text);
	}
	return text;
};

RhinoLoader.prototype._exists = function(dir, file) {
	var fullpath = path.normalize(path.join(dir, file));
	// console.log("RhinoLoader._exists: checking for the existence of " + fullpath);
	try {
    	var f = new File(fullpath);
    	if (f.exists() && f.canRead()) {
    		// console.log("RhinoLoader._exists: found");
    		this.includePath.push(dir);
    	}
	} catch (e) {
		// ignore errors -- that means we have a permission problem and shouldn't add 
		// the dir to the include path anyways
		console.log(e);
	}
};

module.exports = RhinoLoader;