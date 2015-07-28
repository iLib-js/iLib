/*
 * NodeLoader.js - Loader implementation for nodejs
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

/**
 * @class
 * Implementation of Loader for nodejs.
 * 
 * @constructor
 * @private
 */
module.exports = function (ilib) {
	var path = require("./Path.js"),
		fs = require("fs"),
		util = require("util"),
		ZoneInfoFile = require("./ZoneInfo.js"),
		Loader = require("./Loader.js");
	
	var NodeLoader = function (ilib) {
		// util.print("new common NodeLoader instance\n");
	
		this.parent.call(this, ilib);
		
		// root of the app that created this loader
		// this.root = root || process.cwd();
		this.root = process.cwd();
		
		this.base = (typeof(module) !== 'undefined' && module.filename) ?
				path.join(path.dirname(module.filename), "..") :
				this.root;
		
		//console.log("module.filename is " + module.filename + "\n");
		//console.log("base is defined as " + this.base + "\n");
		//console.log("root is defined as " + this.root + "\n");
		
		this.includePath.push(path.join(this.root, "resources")); 	// always check the application's resources dir first
		
		// then a standard locale dir of a built version of ilib from npm
		this._exists(path.join(this.base, "locale"), "localeinfo.json");
		
		// try the standard install directories
		this._exists("/usr/share/javascript/ilib/locale", "localeinfo.json");
		
		// ... else fall back to see if we're in a check-out dir of ilib
		// this._exists(path.join(this.base, "data", "locale"), "localeinfo.json");
		
		if (fs.existsSync("/usr/share/zoneinfo")) {
			//console.log("_createZoneFile: Loading zone info from the system\n");
			this.useSystemZoneInfo = false;
		} else {
			//console.log("_createZoneFile: using ilib zone info\n");
		}
		// console.log("NodeLoader: include path is now " + JSON.stringify(this.includePath));
	};
		
	// make this a subclass of loader
	NodeLoader.prototype = new Loader();
	NodeLoader.prototype.parent = Loader;
	NodeLoader.prototype.constructor = NodeLoader;
	
	NodeLoader.prototype.name = "NodeLoader";
	NodeLoader.prototype._loadFile = function (pathname, sync, cb) {
		var text;
		//console.log("NodeLoader._loadFile: loading " + pathname + (sync ? " sync" : " async"));
		try {
			// on node, just secret load everything synchronously, even when asynchronous 
			// load is requested, or else you will get crazy results where files are not read 
			// until a long time later when the run queue is free
			//util.print("TIMEZONE: " + this.useSystemZoneInfo + " index: " + pathname.indexOf("zoneinfo") + "\n");
			if (this.useSystemZoneInfo && pathname.indexOf("zoneinfo") !== -1) {
				//util.print("NodeLoader.__loadFile: loading zoneinfo path " + pathname + "\n");
				text = this._createZoneFile(pathname);
			} else
				text = fs.readFileSync(pathname, "utf-8");
			if (typeof(cb) === 'function') {
				cb(text);
			}
		} catch (e) {
			//console.log("NodeLoader._loadFile: caught exception");
			if (typeof(cb) === 'function') {
				cb();
			}
		}
		return text;
	};

	NodeLoader.prototype._createZoneFile = function (path) {
		var zone = path.substring(path.indexOf("zoneinfo"));

		// remove the .json suffix to get the name of the zone
		zone = zone.substring(0, zone.length-5);

		try {
			//util.print("NodeLoader._createZoneFile: /usr/share/" + zone + "\n");
			var zif = new ZoneInfoFile("/usr/share/" + zone);

			// only get the info for this year. Later we can get the info
			// for any historical or future year too
			ret =  zif.getIlibZoneInfo(new Date());
			return JSON.stringify(ret);
		} catch (e) {
			console.log("NodeLoader._createZoneFile: error: "+e);
			return undefined;
		}
	};
	
	NodeLoader.prototype._exists = function(dir, file) {
		var fullpath = path.normalize(path.join(dir, file));
		//console.log("NodeLoader._exists: checking for the existence of " + dir);
		if (fs.existsSync(fullpath)) {
			//console.log("NodeLoader._exists: found");
			this.includePath.push(dir);
		}
	};

	return new NodeLoader(ilib);
};
