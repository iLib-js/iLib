/**
 * ilibdata-webpack-loader.js - A Webpack loader to process js files and insert
 * requires for all of the data that is needed for all the locales
 *
 * @license
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

const getOptions = require('loader-utils').getOptions;
// import validateOptions from 'schema-utils';

var path = require('path');
var fs = require('fs');
var Locale = require('./Locale.js');

/*
const schema = {
    type: 'object',
    properties: {
        locales: {
            type: 'array'
        }
    }
};
*/

let dataPatternSlashStar = /\/\*\s*!data\s*([^\*]+)\*\//g;
let dataPatternSlashSlash = /\/\/\s*!data\s*([^\n]+)/g;

let macroPatternSlashSlash = /\/\/\s*!macro\s*(\S*)/g;
let macroPatternQuoted = /["']!macro\s*(\S*)["']/g;

var ilibDataLoader = function(source) {
    const options = getOptions(this);
    var match;
    var partial = source;
    var output = "";

    // validateOptions(schema, options, 'Ilib data loader');

    // console.log("ilibdata-loader: processing file ");
    
    // first find all the locale parts we need to search
    var locales = options.locales;

    // mix all of the locale data we find in all of the js file together so that
    // we can emit one file for each locale with all the locale data that are
    // needed
    if (!this._compilation.localeDataSet) {
        this._compilation.localeDataSet = new Set();
    }
    var dataSet = this._compilation.localeDataSet;

    var searchFile = function (re, text) {
        var output = "";

        re.lastIndex = 0;
        while ((match = re.exec(text)) !== null) {
            // console.log(">>>>>>>>>> found a match");
            var datafiles = match[1].split(/\s+/g);

            datafiles.forEach(function(filename) {
                dataSet.add(filename);
            });
        }
    };

    var processMacros = function (re, text) {
        var partial = text;
        var output = "";

        re.lastIndex = 0;
        while ((match = re.exec(partial)) !== null) {
            // console.log(">>>>>>>>>> found a match");
            var macroName = match[1];
            output += partial.substring(0, match.index);

            if (macroName) {
                if (macroName.toLowerCase() === "localelist") {
                    output += locales.map(function(locale) {
                        return '"' + locale + '"';
                    }).join(", ");
                } else if (macroName.toLowerCase() === "ilibversion") {
                    // the DefinePlugin in the config will replace this with the
                    // actual version number from the project.json file
                    output += "__VERSION__";
                }
            }

            partial = partial.substring(match.index + match[0].length);
            re.lastIndex = 0;
        }

        return output + partial;
    }.bind(this);

    searchFile(dataPatternSlashStar, partial);
    searchFile(dataPatternSlashSlash, partial);

    partial = processMacros(macroPatternSlashSlash, partial);
    output  = processMacros(macroPatternQuoted, partial);
    
    /*
    if (this.resource.endsWith("/ilib.js")) {
        var set = new Set();
    
        locales.forEach(function(l) {
            set.add("root");
            set.add(l.language);
            if (l.script) {
                set.add(l.language + "-" + l.script);
                if (l.region) {
                    set.add(l.language + "-" + l.script + "-" + l.region);
                }
            }
            if (l.region) {
                set.add(l.language + "-" + l.region);
                set.add("und/" + l.region);
            }
        });
        
        var reqs = "";
        
        set.forEach(function(locale) {
            reqs += "require('./" + locale + ".js');\n";
        });
        
        output = reqs + output;
    }
    */

    // console.log("****************************************\nTransformed file to:\n" + output);
    return output;
};

module.exports = ilibDataLoader;