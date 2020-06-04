/*
 * WebpackLoader.js - Loader implementation for webpack'ed ilib on the web
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

var Loader = require("./Loader.js");
var Path = require("./Path.js");
var Locale = require("./Locale.js");
var ISet = require("./ISet.js");
var Utils = require("./Utils.js");
var JSUtils = require("./JSUtils.js");

var alreadyLoaded = new ISet();

function loadLocaleData(ilib, locale, callback) {
    switch (locale) {
        // This special macro will get replaced in the ilibdata-webpack-loader with
        // case statements for each locale js file so that webpack can make separate
        // bundles for each one of those files when in dynamic load mode. In static
        // (assembled) mode, this will get replaced with require calls that cause
        // the data to be put into one giant webpack bundle.

        // !loadLocaleData

        case "dummy":
            // This is just here to prevent webpack from removing the function contents. Otherwise,
            // it will think this whole function is "unused" or "dead" code.
            console.log("Should never happen");
            callback();
            break;
    }
}

/**
 * @class
 * Implementation of Loader for webpack.
 *
 * @constructor
 * @private
 */
module.exports = function (ilib) {
    var WebpackLoader = function (ilib) {
        // console.log("new common WebpackLoader instance");

        this.parent.call(this, ilib);
        this.ilib = ilib;
        this.manifests = {};

        this.includePath.push("");
    };

    // make this a subclass of loader
    WebpackLoader.prototype = new Loader();
    WebpackLoader.prototype.parent = Loader;
    WebpackLoader.prototype.constructor = WebpackLoader;

    WebpackLoader.prototype.name = "WebpackLoader";

    WebpackLoader.prototype.getData = function(dataName, tzName) {
        return dataName === "zoneinfo" ? this.ilib.data.zoneinfo[tzName] : this.ilib.data[dataName];
    };

    // used locally with node
    WebpackLoader.prototype._loadFile = function (pathname, sync, cb) {
        var dir = Path.dirname(pathname);
        var base = Path.basename(pathname, "json");
        var dataName = base;
        var locale = undefined;
        var filename;
        var tzName;

        if (dir) {
            var locpath = /(^|\/)([a-z][a-z][a-z]?(\/[A-Z][a-z][a-z][a-z])?(\/[A-Z][A-Z](\/[A-Z]+)?)?)$/.exec(dir);
            if (locpath) {
                locale = new Locale(locpath[2].replace(/\//g, "-"));
            }
        }

        filename = locale && locale.getSpec() || (base === "ilibmanifest" ? "localmanifest" : "root");

        var dataName = base;
        if (dir) {
            if (locale) {
                dataName += "_" + filename;
            } else if (dir === "charset" || dir === "charmaps") {
                dataName = dir + "_" + base;
            } else if (dir.substring(0, 9) === "zoneinfo/") {
                dataName = "zoneinfo";
                tzName = pathname.substring(9).substring(0, - 5);
            }
        }

        dataName = dataName.replace(/[\.:\(\)\/\\\+\-]/g, "_");

        var data = this.getData(dataName, tzName);

        if (data) {
            // already loaded
            if (typeof(cb) === "function") cb(data);
        } else if (!alreadyLoaded.has(filename)) {
            console.log("WebpackLoader._loadFile: loading " + pathname + (sync ? " sync" : " async") + " as " + filename + ".js");

            alreadyLoaded.add(filename);
            loadLocaleData(this.ilib, filename, function(callback, data) {
                data = (data && typeof(data) === "object" && typeof(data.installLocale) === "function") ? this.getData(dataName, tzName) : data;
                if (callback && typeof(callback) === "function") {
                    callback(data);
                }
            }.bind(this, cb));
        } else {
            if (typeof(cb) === "function") cb();
        }

        // return data;
    };

    WebpackLoader.prototype._exists = function(dir, file) {
        return false;
    };

    // used remotely on a browser
    WebpackLoader.prototype._loadLocaleFile = function(path, sync, callback) {
        var base = Path.basename(path, ".js");

        if (alreadyLoaded.has(base)) {
            callback();
        } else {
            console.log("WebpackLoader._loadLocaleFile: loading " + path + (sync ? " sync" : " async"));

            alreadyLoaded.add(base);
            loadLocaleData(this.ilib, base, function(callback, data) {
                callback(data);
            }.bind(this, callback));
        }
    };

    /**
     * @private
     */
    WebpackLoader.prototype._ensureManifest = function(locale, dir, callback) {
        if (this.manifests[dir]) {
            callback(this.manifests[dir]);
        } else {
            this._loadLocaleFile(Path.join(dir, "remotemanifest.js"), false, ilib.bind(this, function(manifest) {
                if (manifest) {
                    this.manifests[dir] = manifest.files;
                    callback(manifest.files);
                } else {
                    callback(); // undefined param indicates error
                }
            }));
        }
    };

    /**
     * Ensure that the data for a locale is loaded into memory from the given
     * dir. This will decompose the locale into its constituent parts and
     * load all the appropriate files based on those parts. Thereafter,
     * all ilib code can be called synchronously.
     */
    WebpackLoader.prototype.ensureLocale = function(locale, dir, callback) {
        this._ensureManifest(locale, dir, ilib.bind(this, function(manifest) {
            var filesToLoad = Utils.getSublocales(locale).map(function(sublocale) {
                return sublocale + ".js";
            }).filter(function(file) {
                return !manifest || Loader.indexOf(manifest, file) > -1;
            });
            JSUtils.callAll(filesToLoad, ilib.bind(this, function(arr, cb) {
                this._loadLocaleFile(arr[0], false, cb);
            }), function(results) {
                callback(results);
            });
        }));
    };

    return new WebpackLoader(ilib);
};
