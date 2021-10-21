/*
 * Utils.js - Core utility routines
 *
 * Copyright © 2012-2015, 2018-2019, 2021 JEDLSoft
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
var Locale = require("./Locale.js");
var JSUtils = require("./JSUtils.js");
var Path = require("./Path.js");
var ISet = require("./ISet.js");

var Utils = {};

/**
 * Return the property name inside of ilib.data that corresponds to the given locale data file.
 *
 * @private
 * @param {String} basename the basename of the file
 * @param {String} pathname the path from the root to the base file which usually encodes the
 * locale of the file
 * @param {String=} root the root directory of the file or undefined for the standard locale dir
 */
function getPropertyName(basename, pathname, root) {
    var bits = [ basename ];
    if (root) {
        bits = bits.concat(root.split("\/"));
    }
    if (pathname) {
        bits = bits.concat(pathname.split("\/"));
    }
    return bits.join('_');
}

/**
 * Return an array of locales that represent the sublocales of
 * the given locale. These sublocales are intended to be used
 * to load locale data. Each sublocale might be represented
 * separately by files on disk in order to share them with other
 * locales that have the same sublocales. The sublocales are
 * given in the order that they should be loaded, which is
 * least specific to most specific.<p>
 *
 * For example, the locale "en-US" would have the sublocales
 * "root", "en", "und-US", and "en-US".<p>
 *
 * <h4>Variations</h4>
 *
 * With only language and region specified, the following
 * sequence of sublocales will be generated:<p>
 *
 * <pre>
 * root
 * language
 * und-region
 * language-region
 * </pre>
 *
 * With only language and script specified:<p>
 *
 * <pre>
 * root
 * language
 * language-script
 * </pre>
 *
 * With only script and region specified:<p>
 *
 * <pre>
 * root
 * und-region
 * </pre>
 *
 * With only region and variant specified:<p>
 *
 * <pre>
 * root
 * und-region
 * region-variant
 * </pre>
 *
 * With only language, script, and region specified:<p>
 *
 * <pre>
 * root
 * language
 * und-region
 * language-script
 * language-region
 * language-script-region
 * </pre>
 *
 * With only language, region, and variant specified:<p>
 *
 * <pre>
 * root
 * language
 * und-region
 * language-region
 * und-region-variant
 * language-region-variant
 * </pre>
 *
 * With all parts specified:<p>
 *
 * <pre>
 * root
 * language
 * und-region
 * language-script
 * language-region
 * und-region-variant
 * language-script-region
 * language-region-variant
 * language-script-region-variant
 * </pre>
 *
 * @static
 * @param {Locale|String} locale the locale to find the sublocales for
 * @return {Array.<string>} An array of locale specifiers that
 * are the sublocales of the given on
 */
Utils.getSublocales = function(locale) {
    var ret = ["root"];
    var loc = typeof(locale) === "string" ? new Locale(locale) : locale;
    var lang = loc.getLanguage();
    var region = loc.getRegion();
    var script = loc.getScript();
    var variant = loc.getVariant();

    if (lang) {
        ret.push(lang);
    }
    if (region) {
        ret.push('und-' + region);
    }

    if (lang) {
        if (script) {
            ret.push(lang + '-' + script);
        }
        if (region) {
            ret.push(lang + '-' + region);
        }
        if (variant) {
            ret.push(lang + '-' + variant);
        }
    }

    if (region && variant) {
        ret.push("und-" + region + '-' + variant);
    }

    if (lang) {
        if (script && region) {
            ret.push(lang + '-' + script + '-' + region);
        }
        if (script && variant) {
            ret.push(lang + '-' + script + '-' + variant);
        }
        if (region && variant) {
            ret.push(lang + '-' + region + '-' + variant);
        }
        if (script && region && variant) {
            ret.push(lang + '-' + script + '-' + region + '-' + variant);
        }
    }
    return ret;
};

/**
 * Find and merge all the locale data for a particular prefix in the given locale
 * and return it as a single javascript object. This merges the data in the
 * correct order:
 *
 * <ol>
 * <li>shared data (usually English)
 * <li>data for language
 * <li>data for language + region
 * <li>data for language + region + script
 * <li>data for language + region + script + variant
 * </ol>
 *
 * It is okay for any of the above to be missing. This function will just skip the
 * missing data.
 *
 * @static
 * @param {string} prefix prefix under ilib.data of the data to merge
 * @param {Locale} locale locale of the data being sought
 * @param {boolean=} replaceArrays if true, replace the array elements in object1 with those in object2.
 * If false, concatenate array elements in object1 with items in object2.
 * @param {boolean=} returnOne if true, only return the most locale-specific data. If false,
 * merge all the relevant locale data together.
 * @param {string=} root root path if there is one
 * @return {Object?} the merged locale data
 */
Utils.mergeLocData = function (prefix, locale, replaceArrays, returnOne, root) {
    var data = undefined;
    var loc = locale || new Locale();
    var mostSpecific;

    data = {};

    mostSpecific = data;

    Utils.getSublocales(loc).forEach(function(l) {
        var property = getPropertyName(prefix, (l === "root") ? undefined : l.replace(/-/g, "/"), root);

        if (ilib.data[property]) {
            if (returnOne) {
                mostSpecific = ilib.data[property];
            } else {
                data = JSUtils.merge(data, ilib.data[property], replaceArrays);
            }
        }
    });

    return returnOne ? mostSpecific : data;
};


/**
 * Return an array of relative path names for the
 * files that represent the data for the given locale.<p>
 *
 * Note that to prevent the situation where a directory for
 * a language exists next to the directory for a region where
 * the language code and region code differ only by case, the
 * plain region directories are located under the special
 * "undefined" language directory which has the ISO code "und".
 * The reason is that some platforms have case-insensitive
 * file systems, and you cannot have 2 directories with the
 * same name which only differ by case. For example, "es" is
 * the ISO 639 code for the language "Spanish" and "ES" is
 * the ISO 3166 code for the region "Spain", so both the
 * directories cannot exist underneath "locale". The region
 * therefore will be loaded from "und/ES" instead.<p>
 *
 * <h4>Variations</h4>
 *
 * With only language and region specified, the following
 * sequence of paths will be generated:<p>
 *
 * <pre>
 * language
 * und/region
 * language/region
 * </pre>
 *
 * With only language and script specified:<p>
 *
 * <pre>
 * language
 * language/script
 * </pre>
 *
 * With only script and region specified:<p>
 *
 * <pre>
 * und/region
 * </pre>
 *
 * With only region and variant specified:<p>
 *
 * <pre>
 * und/region
 * region/variant
 * </pre>
 *
 * With only language, script, and region specified:<p>
 *
 * <pre>
 * language
 * und/region
 * language/script
 * language/region
 * language/script/region
 * </pre>
 *
 * With only language, region, and variant specified:<p>
 *
 * <pre>
 * language
 * und/region
 * language/region
 * region/variant
 * language/region/variant
 * </pre>
 *
 * With all parts specified:<p>
 *
 * <pre>
 * language
 * und/region
 * language/script
 * language/region
 * region/variant
 * language/script/region
 * language/region/variant
 * language/script/region/variant
 * </pre>
 *
 * @static
 * @param {Locale} locale load the files for this locale
 * @param {string?} name the file name of each file to load without
 * any path
 * @return {Array.<string>} An array of relative path names
 * for the files that contain the locale data
 */
Utils.getLocFiles = function(locale, name) {
    var filename = name || "resources.json";
    var loc = locale || new Locale();

    return Utils.getSublocales(loc).map(function(l) {
        return (l === "root") ? filename : Path.join(l.replace(/-/g, "/"), filename);
    });
};

/**
 * Load data using the new loader object or via the old function callback.
 * @static
 * @private
 */
Utils._callLoadData = function (files, sync, params, root, callback) {
    // console.log("Utils._callLoadData called");
    if (typeof(ilib._load) === 'function') {
        // console.log("Utils._callLoadData: calling as a regular function");
        return ilib._load(files, sync, params, callback);
    } else if (typeof(ilib._load) === 'object' && typeof(ilib._load.loadFiles) === 'function') {
        // console.log("Utils._callLoadData: calling as an object");
        return ilib._load.loadFiles(files, sync, params, callback, root);
    }

    // console.log("Utils._callLoadData: not calling. Type is " + typeof(ilib._load) + " and instanceof says " + (ilib._load instanceof Loader));
    return undefined;
};

function getPropertyNameFromFile(basename, filepath, root) {
    var dir = Path.dirname(filepath);
    return getPropertyName(basename, (dir === "." || dir === "/" || dir === "..") ? undefined : dir, root);
}

/**
 * Return true if the locale data corresponding to the given pathname is not already loaded
 * or assembled.
 *
 * @private
 * @param basename
 * @param locale
 * @returns
 */
function dataNotExists(basename, pathname, root) {
    return !ilib.data[getPropertyNameFromFile(basename, pathname, root)];
}

/**
 * Find locale data or load it in. If the data with the given name is preassembled, it will
 * find the data in ilib.data. If the data is not preassembled but there is a loader function,
 * this function will call it to load the data. Otherwise, the callback will be called with
 * undefined as the data. This function will create a cache under the given class object.
 * If data was successfully loaded, it will be set into the cache so that future access to
 * the same data for the same locale is much quicker.<p>
 *
 * The parameters can specify any of the following properties:<p>
 *
 * <ul>
 * <li><i>name</i> - String. The name of the file being loaded. Default: ResBundle.json
 * <li><i>object</i> - String. The name of the class attempting to load data. This is used to differentiate parts of the cache.
 * <li><i>locale</i> - Locale. The locale for which data is loaded. Default is the current locale.
 * <li><i>nonlocale</i> - boolean. If true, the data being loaded is not locale-specific.
 * <li><i>type</i> - String. Type of file to load. This can be "json" or "other" type. Default: "json"
 * <li><i>replace</i> - boolean. When merging json objects, this parameter controls whether to merge arrays
 * or have arrays replace each other. If true, arrays in child objects replace the arrays in parent
 * objects. When false, the arrays in child objects are concatenated with the arrays in parent objects.
 * <li><i>root</i> - String. If provided, look in this root directory first for files, and then fall back
 * to the standard include paths if they are not found in this root. If not provided, just search the
 * standard include paths.
 * <li><i>loadParams</i> - Object. An object with parameters to pass to the loader function
 * <li><i>sync</i> - boolean. Whether or not to load the data synchronously
 * <li><i>callback</i> - function(?)=. callback Call back function to call when the data is available.
 * Data is not returned from this method, so a callback function is mandatory.
 * </ul>
 *
 * @static
 * @param {Object} params Parameters configuring how to load the files (see above)
 */
Utils.loadData = function(params) {
    var name = "resources.json",
        locale = new Locale(ilib.getLocale()),
        sync = false,
        type = undefined,
        loadParams = {},
        callback = undefined,
        nonlocale = false,
        replace = false,
        root,
        basename;

    if (!params || typeof(params.callback) !== 'function') {
        throw "Utils.loadData called without a callback. It must have a callback to work.";
    }

    if (params.name) {
        name = params.name;
    }
    if (params.locale) {
        locale = (typeof(params.locale) === 'string') ? new Locale(params.locale) : params.locale;
    }
    if (params.type) {
        type = params.type;
    }
    if (params.loadParams) {
        loadParams = params.loadParams;
    }
    if (params.sync) {
        sync = params.sync;
    }
    if (params.nonlocale) {
        nonlocale = !!params.nonlocale;
    }
    if (typeof(params.replace) === 'boolean') {
        replace = params.replace;
    }

    root = params.root;
    callback = params.callback;

    if (!type) {
        var dot = name.lastIndexOf(".");
        type = (dot !== -1) ? name.substring(dot+1) : "text";
    }

    if (typeof(ilib.data.cache) === "undefined") {
        ilib.data.cache = {};
    }
    if (typeof(ilib.data.cache.fileSet) === "undefined") {
        ilib.data.cache.fileSet = new ISet();
    }

    var data, returnOne = ((loadParams && loadParams.returnOne) || type !== "json");

    basename = name.substring(0, name.lastIndexOf(".")).replace(/[\.:\(\)\/\\\+\-]/g, "_");

    if (ilib._cacheMerged) {
        if (typeof(ilib.data.cache.merged) === "undefined") {
            ilib.data.cache.merged = {};
        }
        var spec = ((!nonlocale && locale.getSpec().replace(/-/g, '_')) || "root") + "," + basename + "," + String(JSUtils.hashCode(loadParams));
        if (typeof(ilib.data.cache.merged[spec]) !== 'undefined') {
            // cache hit!
            callback(ilib.data.cache.merged[spec]);
            return;
        }
    }

    if (typeof(ilib._load) !== 'undefined') {
        // We have a loader, so we can figure out which json files are loaded already and
        // which are not so that we can load the missing ones.
        // the data is not preassembled, so attempt to load it dynamically
        var files = nonlocale ? [ name || "resources.json" ] : Utils.getLocFiles(locale, name);

        var isPath = ilib._load.multiPaths;
        
        /*if (typeof(isPath) !== undefined && isPath){
            ilib.data.cache.fileSet.clear();
            
        }*/

        if (typeof(isPath) == undefined || isPath == false){
            files = files.filter(ilib.bind(this, function(file) {
                return !ilib.data.cache.fileSet.has(Path.join(root, file)) && dataNotExists(basename, file, root);
            }));
        }

        // find the ones we haven't loaded before
        /*files = files.filter(ilib.bind(this, function(file) {
            return !ilib.data.cache.fileSet.has(Path.join(root, file)) && dataNotExists(basename, file, root);
        }));
        */
        if (files.length) {
            Utils._callLoadData(files, sync, loadParams, root, ilib.bind(this, function(arr) {
                for (var i = 0; i < files.length; i++) {
                    if (arr[i]) {
                        var property = nonlocale ? basename : getPropertyNameFromFile(basename, files[i], root);

                        if (ilib._load.multiPaths || !ilib.data[property]) {
                            ilib.data[property] = arr[i];
                        }
                    }
                    
                    ilib.data.cache.fileSet.add(Path.join(root, files[i]));
                }

                if (!nonlocale) {
                    data = Utils.mergeLocData(basename, locale, replace, returnOne, root);
                    if (ilib._cacheMerged) ilib.data.cache.merged[spec] = data;
                } else {
                    data = ilib.data[basename];
                }

                callback(data);
            }));

            return;
        }
        // otherwise the code below will return the already-loaded data
    }

    // No loader, or data already loaded? Then use whatever data we have already in ilib.data
    if (!nonlocale) {
        data = Utils.mergeLocData(basename, locale, replace, returnOne, root);
        if (ilib._cacheMerged) ilib.data.cache.merged[spec] = data;
    } else {
        data = ilib.data[basename];
    }

    callback(data);
};

module.exports = Utils;
