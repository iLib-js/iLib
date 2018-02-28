/*
 * WebpackLoader.js - Loader implementation for webpack'ed ilib on the web
 *
 * Copyright © 2018, JEDLSoft
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

function getData(dataName, tzName) {
    return dataName === "zoneinfo" ? ilib.data.zoneinfo[tzName] : ilib.data[dataName];
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
        // util.print("new common WebpackLoader instance\n");

        this.parent.call(this, ilib);

        this.includePath.push("");
    };

    // make this a subclass of loader
    WebpackLoader.prototype = new Loader();
    WebpackLoader.prototype.parent = Loader;
    WebpackLoader.prototype.constructor = WebpackLoader;

    WebpackLoader.prototype.name = "WebpackLoader";
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

        filename = locale && locale.getSpec() || (base === "ilibmanifest" ? "ilibmanifest" : "root");
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

        if (alreadyLoaded.has(filename)) {
            if (cb && typeof(cb) === "function") {
                cb(getData(dataName, tzName));
            }
        } else {
            console.log("WebpackLoader._loadFile: loading " + pathname + (sync ? " sync" : " async") + " as " + filename + ".js");

            alreadyLoaded.add(filename);
            loadLocaleData(ilib, filename, function(callback, data) {
                if (callback && typeof(callback) === "function") {
                    callback((data && typeof(data) === "object" && typeof(data.installLocale) === "function") ? getData(dataName, tzName) : data);
                }
            }.bind(this, cb));
        }

        return ilib.data[dataName];
    };

    WebpackLoader.prototype._exists = function(dir, file) {
        return false;
    };
    
    // Ensure that the data for a locale is loaded into memory. Thereafter,
    // all ilib code can be called synchronously.
    WebpackLoader.prototype.ensureLocale = function(locale, callback) {
        loadLocaleData(ilib, locale, callback);
    };

    return new WebpackLoader(ilib);
};
