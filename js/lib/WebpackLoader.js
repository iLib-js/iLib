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
        var text;
        console.log("WebpackLoader._loadFile: loading " + pathname + (sync ? " sync" : " async"));
        
        var parts = ["."];
        var dir = Path.dirname(pathname);
        var base = pathname.substring(dir.length+1, pathname.lastIndexOf("."));
        var dataName = base;
        var locale = new Locale();
        var rootUrl = "/output/js/full/assembled/";

        if (dir) {
            var locpath = /([a-z][a-z](\/[A-Z][a-z][a-z][a-z])?(\/[A-Z][A-Z](\/[A-Z]+)?)?)$/.exec(dir);
            if (locpath) {
                locale = new Locale(locpath[0].substring(1).replace(/\//g, "-"));
            }
        }
        
        if (locale) {
            var filename;
            
            if (locale.script) {
                if (locale.region) {
                    filename = locale.language + "-" + locale.script + "-" + locale.region;
                    document.write('<scrip' + 't src="' + rootUrl + part + '.js"></scri' + 'pt>\n');
                } else {
                    filename = locale.language + "-" + locale.script;
                }
            } else if (locale.region) {
                filename = "und-" + locale.region;
                document.write('<scrip' + 't src="' + rootUrl + filename + '.js"></scri' + 'pt>\n');
                
                filename = locale.language + "-" + locale.region;
            } else {
                filename = locale.language;
            }
            
            document.write('<scrip' + 't src="' + rootUrl + filename + '.js"></scri' + 'pt>\n');
        }
        
        var dataName = base;
        if (dir) {
            locale = new Locale(locpath[0].substring(1).replace(/\//g, "-"));
            var spec = locale.getSpec();
            if (spec) {
                dataName += "_" + spec;
            }
        }
        
        dataName = dataName.replace(/[\.:\(\)\/\\\+\-]/g, "_");

        return ilib.data[dataName];
    };
    
    WebpackLoader.prototype._exists = function(dir, file) {
        return false;
    };

    return new WebpackLoader(ilib);
};
