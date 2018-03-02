/**
 * ilibdata-webpack-loader.js - A webpack loader to process js files and include
 * all of the locale data that is needed for the requested locales
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
//import validateOptions from 'schema-utils';

var path = require('path');
var fs = require('fs');
var Locale = require('./lib/Locale.js');
var Utils = require('./lib/Utils.js');
var LocaleMatcher = require('./lib/LocaleMatcher.js');

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

function makeDirs(path) {
    var parts = path.split(/[\\\/]/);

    for (var i = 1; i <= parts.length; i++) {
        var p = parts.slice(0, i).join("/");
        if (p && p.length > 0 && !fs.existsSync(p)) {
            fs.mkdirSync(p);
        }
    }
}

function toIlibDataName(str) {
    return (!str || str === "root" || str === "*") ? "" : str.replace(/[\.:\(\)\/\\\+\-]/g, "_");
}

function findIlibRoot() {
    var dir = module.paths.find(function(p) {
        return fs.existsSync(path.join(p, "ilib/package.json"));
    });
    return dir && path.join(dir, "ilib");
}

var dataPatternSlashStar = /\/\*\s*!data\s*([^\*]+)\*\//g;
var dataPatternSlashSlash = /\/\/\s*!data\s*([^\n]+)/g;

var macroPatternSlashSlash = /\/\/\s*!macro\s*(\S*)/g;
var macroPatternQuoted = /["']!macro\s*(\S*)["']/g;

var loadLocaleDataPattern = /\/\/\s*!loadLocaleData/g;
var defineLocaleDataPattern = /\/\/\s*!defineLocaleData/g;

var normPattern = /(nfc|nfd|nfkc|nfkd)(\/(\w+))?/g;

function calcDataRoot(options) {
    var ilibRoot = options.ilibRoot;
    if (!ilibRoot) {
        return path.join(findIlibRoot(), "locale");
    } else {
        return path.join(ilibRoot, (options.compilation && options.compilation === "uncompiled") ? "data/locale" : "locale");
    }
}

/**
 * Produce a set of js files that contain the necessary
 * locale data. These files are output into js files, one
 * per locale part, that each export a function that adds
 * data for that locale part to the ilib.data structure.
 * For example, the locale "en-US" has the following parts:
 *
 * <ul>
 * <li><i>root</i> - shared by all locales, containing
 * generic locale data and most non-locale data.
 * <li><i>en</i> - language-specific data shared by all
 * of the English locales. Example: date formats
 * <li><i>und-US</i> - region-specific data shared by
 * all languages in the same region. Example: default
 * time zone or standard currency
 * <li><i>en-US</i> - language- and region-specific
 * information that overrides the above information.
 * </ul>
 *
 * Ilib knows to load the locale data parts in the right
 * order such that the more specific data overrides
 * the less specific data.
 *
 * @param compilation the webpack compilation
 * @param optionsk the options for this loader from
 * the webpack.config.js
 * @returns {Array.<string>} an array of files that
 * were emitted by this function
 */
function emitLocaleData(compilation, options) {
    var localeData = compilation.localeDataSet;
    var outputFileName, output;
    var scripts = new Set();
    var normalizations = {};
    var outputDir = compilation.options.output.path;

    if (localeData) {
        var charsets = new Set();
        var charmaps = {};
        var lang2charset;
        var outputSet = {};
        var match;
        var root = options.ilibRoot || findIlibRoot();
        var dataRoot = calcDataRoot(options);
        var manifest = []; // list of all locale data files that were processed

        var locales = options.locales;
        locales.forEach(function(locale) {
            var lm = new LocaleMatcher({locale: locale});
            var full = lm.getLikelyLocale();
            if (full.getScript()) {
                scripts.add(full.getScript());
            }
        });
        if (options.debug) console.log("emitting locale data for locales " + locales.join(","));

        locales.forEach(function(locale) {
            localeData.forEach(function(filename) {
                normPattern.lastIndex = 0;
                if (filename === "charset" || filename === "charmaps") {
                    // charmaps and charset info are special cases because they are non-locale data.
                    // If they just use the generic "charset" or "charmaps" data, then
                    // we figure out which charsets are appropriate for the locale
                    if (!lang2charset) {
                        var fileName = path.join(dataRoot, "lang2charset.json");

                        if (fileName[0] !== '/' && fileName[0] !== '.' ) {
                            fileName = "./" + fileName;
                        }
                        lang2charset = require(fileName);
                    }

                    var l = new Locale(locale);
                    var spec = l.getLanguage() + (l.getScript() ? ("-" + l.getScript()) : ""); // TODO: should use l.getLangScript()
                    if (lang2charset[spec]) {
                        // always add the charset, even when charmaps are requested, because the
                        // charmaps need the charset for the charmap
                        lang2charset[spec].forEach(function(charsetName) {
                            charsets.add(charsetName);
                        });

                        if (filename === "charmaps") {
                            if (!charmaps[spec]) {
                                charmaps[spec] = new Set();
                            }
                            lang2charset[spec].forEach(function(charsetName) {
                                charmaps[spec].add(charsetName);
                            });
                        }
                    }
                } else if ((match = normPattern.exec(filename)) !== null) {
                    var form = match[1];
                    if (!normalizations[form]) {
                        normalizations[form] = new Set();
                    }
                    if (match.length > 3) {
                        normalizations[form].add(match[3] || "");
                    }
                } else if (filename === "zoneinfo") {
                    // time zone data in the zoneinfo files are a special case because they are non-locale data
                    // console.log(">>>>>>>>>>>>> processing zoneinfo. cwd is " + process.cwd());
                    var cwdToData = path.join(dataRoot, "zoneinfo/zonetab.json");
                    var data = fs.readFileSync(cwdToData, "utf-8");
                    var zonetab = JSON.parse(data);
                    // console.log(">>>>>>>>>>>>> got zone tab.");
                    var line = 'ilib.data.zoneinfo.zonetab = ' + data + ';\n';
                    if (!outputSet.root) {
                        outputSet.root = {};
                    }
                    outputSet.root.zonetab = line;
                    manifest.push("zoneinfo/zonetab.json");

                    var regionSet = new Set();
                    locales.forEach(function(locale) {
                        regionSet.add(new Locale(locale).region);
                    });
                    var zoneSet = new Set();
                    regionSet.forEach(function(region) {
                        if (zonetab[region]) {
                            zonetab[region].forEach(function(zone) {
                                zoneSet.add(zone);
                            });
                        }
                    });
                    zoneSet.forEach(function(zone) {
                        try {
                            var cwdToData = path.join(dataRoot, "zoneinfo", zone + ".json");
                            if (fs.existsSync(cwdToData)) {
                                data = fs.readFileSync(cwdToData, "utf-8");
                                var line = 'ilib.data.zoneinfo["' + zone.replace(/-/g, "m").replace(/\+/g, "p") + '"] = ' + data + ';\n';
                                // console.log(">>>>>>>>>>>>> Adding zone: " + line);
                                outputSet.root[zone] = line;
                                manifest.push(path.join("zoneinfo", zone + ".json"));
                            }
                        } catch (e) {
                            console.log("Error: " + e);
                        }
                    }.bind(this));

                    // now add the generic zones
                    var zoneinfoDir = path.join(dataRoot, "zoneinfo");
                    var list = fs.readdirSync(zoneinfoDir);
                    list = list.concat(fs.readdirSync(path.join(zoneinfoDir, "Etc")).map(function(zone) {
                        return "Etc/" + zone;
                    }));

                    list.filter(function(pathname) {
                        return pathname.endsWith(".json") && pathname !== "zonetab.json";
                    }).forEach(function (file) {
                        var zone = path.basename(file, ".json");
                        var cwdToData = path.join(dataRoot, "zoneinfo", file);
                        data = fs.readFileSync(cwdToData, "utf-8");
                        var line = 'ilib.data.zoneinfo["' + zone.replace(/-/g, "m").replace(/\+/g, "p") + '"] = ' + data + ';\n';
                        // console.log(">>>>>>>>>>>>> Adding generic zone: " + line);
                        // compiler.addDependency(cwdToData);
                        outputSet.root[zone] = line;
                        manifest.push(path.join("zoneinfo", file));
                    }.bind(this));
                } else {
                    var l = new Locale(locale);

                    var parts = [
                        ".",
                        l.language
                        ];

                    if (l.script) {
                        parts.push(l.language + "/" + l.script);
                        if (l.region) {
                            parts.push(l.language + "/" + l.script + "/" + l.region);
                        }
                    }
                    if (l.region) {
                        parts.push(l.language + "/" + l.region);
                        parts.push("und/" + l.region);
                    }

                    parts.forEach(function(localeDir) {
                        try {
                            var cwdToData = path.join(dataRoot, localeDir, filename + ".json");
                            if (fs.existsSync(cwdToData)) {
                                var part = localeDir === "." ? "root" : localeDir;
                                part = part.replace(/\//g, "-");

                                if (!outputSet[part]) {
                                    outputSet[part] = {};
                                }
                                if (!outputSet[part][filename]) {
                                    var line = "ilib.data." + toIlibDataName(filename);
                                    if (part !== "root") {
                                        line += "_" + toIlibDataName(part);
                                    }
                                    data = fs.readFileSync(cwdToData, "utf-8");
                                    line += " = " + data + ";\n";
                                    // console.log(">>>>>>>>>>>>> Adding line: " + line);

                                    outputSet[part][filename] = line;
                                    manifest.push(path.join(localeDir, filename + ".json"));
                                }
                            }
                        } catch (e) {
                            console.log("Error: " + e);
                        }
                    }.bind(this));
                }
            });
        }.bind(this));

        if (charsets.size > 0) {
            var optional = new Set();

            if (!outputSet.root) {
                outputSet.root = {};
            }
            var data, cwdToData = path.join(dataRoot, "charsetaliases.json");
            if (!outputSet.root.charsetaliases && fs.existsSync(cwdToData)) {
                data = fs.readFileSync(cwdToData, "utf-8");
                var line = "ilib.data.charsetaliases = " + data + ";\n";
                outputSet.root.charsetaliases = line;
                manifest.push("charsetaliases.json");
            }

            charsets.forEach(function(charset) {
                var data, cwdToData = path.join(dataRoot, "charset", charset + ".json");
                filename = "charset_" + charset;
                if (!outputSet.root[filename] && fs.existsSync(cwdToData)) {
                    data = fs.readFileSync(cwdToData, "utf-8");
                    var line = "ilib.data.charset_" + toIlibDataName(charset) + " = " + data + ";\n";
                    outputSet.root[filename] = line;
                    manifest.push(path.join("charset", charset + ".json"));

                    var cs = JSON.parse(data);
                    if (typeof(cs.optional) === "boolean" && cs.optional) {
                        optional.add(charset);
                    }
                }
            });

            for (var locale in charmaps) {
                var loc = (locale === "*" ? "root" : locale);
                charmaps[locale].forEach(function(charset) {
                    var data, cwdToData = path.join(dataRoot, "charmaps", charset + ".json");
                    filename = "charmaps_" + charset;
                    if (!optional.has(charset) && !outputSet.root[filename] && fs.existsSync(cwdToData)) {
                        data = fs.readFileSync(cwdToData, "utf-8");
                        var line = "ilib.data.charmaps_" + toIlibDataName(charset) + " = " + data + ";\n";
                        outputSet.root[filename] = line;
                        manifest.push(path.join("charmaps", charset + ".json"));
                    }
                });
            }
        }

        function addForm(form, script) {
            if (script) {
                try {
                    var cwdToData = path.join(dataRoot, form, script + ".json");
                    if (fs.existsSync(cwdToData)) {
                        data = fs.readFileSync(cwdToData, "utf-8");
                        var line = '// form ' + form + ' script ' + script + '\nilib.extend(ilib.data.norm.' + form + ', ' + data + ');\n';
                        // console.log(">>>>>>>>>>>>> Adding form: " + form);
                        outputSet.root[form + "/" + script] = line;
                        manifest.push(path.join(form, script + ".json"));
                    }
                } catch (e) {
                    console.log("Error: " + e);
                }
            }
        }

        for (var form in normalizations) {
            if (normalizations[form].has("all")) {
                // if "all" is there, then we don't need to add each script individually
                // because they are all in the all.json already
                addForm(form, "all");
            } else {
                var set = (normalizations.size === 0 || (normalizations[form].has("") && normalizations.size === 1)) ? scripts : normalizations[form];
                set.forEach(function(script) {
                    if (options.debug) console.log("Including " + form + " for script " + script);
                    addForm(form, script);
                });
            }
        }

        // Write out the manifest file so that the WebpackLoader knows when to attempt
        // to load data and when not to. If a file it is attempting to load is not in
        // the manifest, it does not have to load the locale files that would contain it,
        // which leads to 404s.
        var manifestObj =  {
            files: manifest
        };
        var outputPath = path.join(outputDir, "locales");
        makeDirs(outputPath);
        if (options.debug) console.log("Emitting " + path.join(outputPath, "ilibmanifest.json"));
        fs.writeFileSync(path.join(outputPath, "ilibmanifest.json"), JSON.stringify(manifestObj), "utf-8");

        for (var filename in outputSet) {
            var outputFileName = filename + ".js";
            var dataFiles = outputSet[filename];

            var output =
                "/*\n" +
                " * WARNING: this is a file generated by ilib-webpack-loader.js.\n" +
                " * Do not hand edit or else your changes may be overwritten and lost.\n" +
                " */\n"
                output += (options.assembly === "dynamicdata") ?
                    "module.exports.installLocale = function(ilib) {\n" :
                        "var ilib = require('../../../../lib/ilib.js');\n";

            for (var dataFile in dataFiles) {
                output += dataFiles[dataFile];
            }

            output += (options.assembly === "dynamicdata") ?
                "};\n" :
                    "module.exports = ilib;\n";

            if (options.debug) console.log("Emitting " + outputFileName + " size " + output.length);

            /*
            if (options.compilationType === "compiled") {
                try {
                    var result = UglifyJS.minify(output, {fromString: true});
                    if (!result.error) {
                        output = result.code;
                        //console.log("After compression: " + output.length);
                    //} else {
                        //console.log("Error compressing " + outputFileName + ": " + result.error);
                    }
                } catch (e) {
                    console.log("Error while parsing " + filename);
                    console.log(e);
                }
            }
             */

            var outputFile = path.join(outputPath, outputFileName);
            if (options.debug) console.log("Writing to " + outputFile);
            makeDirs(path.dirname(outputFile));
            fs.writeFileSync(outputFile, output, "utf-8");
        }

        // console.log("Done emitting locale data.");
        return Object.keys(outputSet).concat(["ilibmanifest"]);
    } else {
        console.log("No data to include");
        return [];
    }
}

var ilibDataLoader = function(source) {
    const options = getOptions(this);
    var match;
    var output = "";
    var async = false;
    var callback;
    var outputRoot = this.options.output.path;

    // validateOptions(schema, options, 'Ilib data loader');

    if (options.debug) console.log("ilibdata-loader: processing file " + this.resource);

    // first find all the locale parts we need to search
    var locales = options.locales;

    // mix all of the locale data we find in all of the js files together so that
    // we can emit one file for each locale with all the locale data that are
    // needed for that locale
    if (!this._compilation.localeDataSet) {
        this._compilation.localeDataSet = new Set();
    }
    var dataSet = this._compilation.localeDataSet;

    if (defineLocaleDataPattern.exec(source) !== null) {
        // This is the special ilib-getdata.js file -- process it asynchronously so
        // that it will happen after all the other js files are processed
        async = true;
        callback = this.async();
    }
    defineLocaleDataPattern.lastIndex = 0;

    var searchFile = function (re, text) {
        var output = "";

        re.lastIndex = 0;
        while ((match = re.exec(text)) !== null) {
            // console.log(">>>>>>>>>> found a match");
            var datafiles = match[1].split(/\s+/g);

            datafiles.forEach(function(filename) {
                if (filename) {
                    dataSet.add(filename);
                }
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

    var processDefineLocaleData = function (text) {
        var partial = text;
        var output = "";

        defineLocaleDataPattern.lastIndex = 0;
        if ((match = defineLocaleDataPattern.exec(partial)) !== null) {
            // console.log(">>>>>>>>>> found a match");
            output += partial.substring(0, match.index);
            if (options.assembly === "dynamicdata") {
                output +=
                    "ilib.WebpackLoader = require('./WebpackLoader.js');\n" +
                    "ilib.setLoaderCallback(ilib.WebpackLoader(ilib));\n" +
                    "ilib._dyncode = false;\n" +
                    "ilib._dyndata = true;\n";
            } else {
                var files = emitLocaleData(this._compilation, options);
                var outputPath = path.join(outputRoot, "locales");
                files.forEach(function(locale) {
                    output += "require('" + path.join(outputPath, locale + (locale === "ilibmanifest" ? ".json" : ".js")) + "');\n";
                });
                output +=
                    "ilib._dyncode = false;\n" +
                    "ilib._dyndata = false;\n";
            }

            partial = partial.substring(match.index + match[0].length);
            defineLocaleDataPattern.lastIndex = 0;
        }

        return output + partial;
    }.bind(this);

    var processLoadLocaleData = function (text) {
        var partial = text;
        var output = "";

        loadLocaleDataPattern.lastIndex = 0;
        if ((match = loadLocaleDataPattern.exec(partial)) !== null) {
            var files = emitLocaleData(this._compilation, options);

            // console.log(">>>>>>>>>> found a match");
            output += partial.substring(0, match.index);
            var outputPath = path.join(outputRoot, "locales");
            files.forEach(function(file) {
                if (file === "root") {
                    output += "default:\n";
                }

                if (file === "ilibmanifest.json") {

                }
                output += "        case '" + file + "':\n"

                output += (file === "ilibmanifest") ?
                    "            System.import(/* webpackChunkName: '" + file + "' */ '" + path.join(outputPath, file + ".json") + "').then(function(module) {\n" +
                    "                callback(module);\n" :

                        "            System.import(/* webpackChunkName: '" + file + "' */ '" + path.join(outputPath, file + ".js") + "').then(function(module) {\n" +
                        "                module.installLocale(ilib);\n" +
                        "                callback(module);\n";

                    output +=
                        "            });\n" +
                        "            break;\n" 
            });

            partial = partial.substring(match.index + match[0].length);
            loadLocaleDataPattern.lastIndex = 0;
        }

        return output + partial;
    }.bind(this);

    function processFile(partial) {
        searchFile(dataPatternSlashStar, partial);
        searchFile(dataPatternSlashSlash, partial);

        partial = processMacros(macroPatternSlashSlash, partial);
        partial = processMacros(macroPatternQuoted, partial);

        partial = processDefineLocaleData(partial);

        return processLoadLocaleData(partial);
    }

    if (async) {
        setTimeout(function (source) {
            callback(null, processFile(source));
        }, 500, source);
    } else {
        output = processFile(source);

        // console.log("****************************************\nTransformed file to:\n" + output);
        return output;
    }
};

module.exports = ilibDataLoader;
