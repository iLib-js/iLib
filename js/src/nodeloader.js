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
		util = require("util"),
		genericLoader = require("./loader.js");
	
	var nodeLoader = function (ilib) {
		// util.print("new common nodeLoader instance\n");
	
		this.parent.call(this, ilib);
		
		// root of the app that created this loader
		// this.root = root || process.cwd();
		this.root = process.cwd();
		
		this.base = (typeof(module) !== 'undefined' && module.filename) ?
				path.join(path.dirname(module.filename), "..") :
				this.root;
		
		// console.log("base is defined as " + this.base + "\n");
		
		this.includePath.push(path.join(this.root, "resources")); 	// always check the application's resources dir first
		
		// then try a check-out dir of ilib
		this._exists(path.join(this.base, "data", "localetemp"), "localeinfo.json");
		
		// then a standard locale dir of a built version of ilib from npm
		this._exists(path.join(this.base, "locale"), "localeinfo.json");
		
		// ... else fall back to the standard install directories
		this._exists("/usr/share/javascript/ilib/locale", "localeinfo.json");
		
		// console.log("nodeLoader: include path is now " + JSON.stringify(this.includePath));
	};
		
	// make this a subclass of loader
	nodeLoader.prototype = new genericLoader();
	nodeLoader.prototype.parent = genericLoader;
	nodeLoader.prototype.constructor = nodeLoader;
	
	nodeLoader.prototype._loadFile = function (pathname, sync, cb) {
		var text;
		// console.log("nodeLoader._loadFile: loading " + pathname);
		try {
			if (sync) {
				text = fs.readFileSync(pathname, "utf-8");
				if (typeof(cb) === 'function') {
					cb(text);
				}
			} else {
				fs.readFile(pathname, "utf-8", function(err, text) {
					if (typeof(cb) === 'function') {
						cb(err ? undefined : text);
					}
				});
			}
		} catch (e) {
			if (typeof(cb) === 'function') {
				cb();
			}
		}
		return text;
	};
	
	nodeLoader.prototype._exists = function(dir, file) {
		var fullpath = path.normalize(path.join(dir, file));
		// console.log("nodeLoader._exists: checking for the existence of " + dir);
		if (fs.existsSync(fullpath)) {
			// console.log("nodeLoader._exists: found");
			this.includePath.push(dir);
		}
	};

	return new nodeLoader(ilib);
};