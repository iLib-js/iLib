/*
 * AsyncAsyncNodeLoader.js - Loader implementation for nodejs with asynchronous calls.
 * Mostly this is used for testing the async calls
 *
 * Copyright © 2018, 2020 JEDLSoft
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
 * Implementation of async Loader for nodejs.
 *
 * @constructor
 * @private
 */
module.exports = function (ilib) {
    var path = require("./Path.js"),
    fs = require("fs"),
    util = require("util"),
    Loader = require("./Loader.js");

    var AsyncNodeLoader = function (ilib) {
        // console.log("new common AsyncNodeLoader instance");

        this.parent.call(this, ilib);

        // root of the app that created this loader
        // this.root = root || process.cwd();
        this.root = process.cwd();

        this.base = (typeof(module) !== 'undefined' && module.filename) ?
            path.join(path.dirname(module.filename), "..") :
            this.root;

        //console.log("module.filename is " + module.filename);
        //console.log("base is defined as " + this.base);

        // this.includePath.push(path.join(this.root, "resources"));
        this._exists(this.root, "resources"); // always check the application's resources dir first
        this._exists(path.join(this.root, "locale"), "localeinfo.json");

        // then a standard locale dir of a built version of ilib from npm
        this._exists(path.join(this.base, "locale"), "localeinfo.json");

        // try the standard install directories
        this._exists("/usr/share/javascript/ilib/locale", "localeinfo.json");

        // ... else fall back to see if we're in a check-out dir of ilib
        // this._exists(path.join(this.base, "data", "locale"), "localeinfo.json");

        // console.log("AsyncNodeLoader: include path is now " + JSON.stringify(this.includePath));
    };

    // make this a subclass of loader
    AsyncNodeLoader.prototype = new Loader();
    AsyncNodeLoader.prototype.parent = Loader;
    AsyncNodeLoader.prototype.constructor = AsyncNodeLoader;

    AsyncNodeLoader.prototype.name = "AsyncNodeLoader";
    AsyncNodeLoader.prototype._loadFile = function (pathname, sync, cb) {
        var text;
        //console.log("AsyncNodeLoader._loadFile: loading " + pathname + (sync ? " sync" : " async"));
        try {
            // on node, just secret load everything synchronously, even when asynchronous
            // load is requested, or else you will get crazy results where files are not read
            // until a long time later when the run queue is free
            fs.readFile(pathname, "utf-8", function(err, text) {
                if (typeof(cb) === 'function') {
                    cb(!err || err.errno === -2 ? text : undefined);
                }
            });
        } catch (e) {
            //console.log("AsyncNodeLoader._loadFile: caught exception");
            if (typeof(cb) === 'function') {
                cb();
            }
        }
        return text;
    };

    AsyncNodeLoader.prototype._exists = function(dir, file) {
        var fullpath = path.normalize(path.join(dir, file));
        //console.log("AsyncNodeLoader._exists: checking for the existence of " + dir);
        if (fs.existsSync(fullpath)) {
            //console.log("AsyncNodeLoader._exists: found");
            this.includePath.push(dir);
        }
    };

    return new AsyncNodeLoader(ilib);
};
