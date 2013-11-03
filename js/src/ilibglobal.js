/*
 * ilibglobal.js - define the ilib name space
 * 
 * Copyright © 2012-2013, JEDLSoft
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
 * @namespace The global namespace that contains all ilib functions and classes.
 */
var ilib = ilib || {};

/**
 * Return the current version of ilib.
 * 
 * @return {string} a version string for this instance of ilib
 */
ilib.getVersion = function () {
    // increment this for each release
    return // !macro ilibVersion
    ;
};

/**
 * Place where resources and such are eventually assigned.
 * @dict
 */
ilib.data = {
    norm: {
        nfc: {},
        nfd: {},
        nfkd: {},
        ccc: {}
    }
};

if (typeof(window) !== 'undefined') {
	window["ilib"] = ilib;
}

// export ilib for use as a module in nodejs
if (typeof(exports) !== 'undefined') {
	exports.ilib = ilib;
}

/**
 * @private
 * @static
 * Return the name of the platform
 * @return {string} string naming the platform
 */
ilib._getPlatform = function () {
	if (!ilib._platform) {
		if (typeof(environment) !== 'undefined') {
			ilib._platform = "rhino";
		} else if (typeof(process) !== 'undefined' || typeof(require) !== 'undefined') {
			ilib._platform = "nodejs";
		} else if (typeof(window) !== 'undefined') {
			ilib._platform = (typeof(PalmSystem) !== 'undefined') ? "webos" : "browser";
		} else {
			ilib._platform = "unknown";
		}
	}	
	return ilib._platform;
};

/**
 * @private
 * @static
 * Return true if the global variable is defined on this platform.
 * @return {boolean} true if the global variable is defined on this platform, false otherwise
 */
ilib._isGlobal = function(name) {
	switch (ilib._getPlatform()) {
		case "rhino":
			var top = (function() {
			  return (typeof global === 'object') ? global : this;
			})();
			return typeof(top[name]) !== undefined;
		case "nodejs":
			var root = typeof(global) !== 'undefined' ? global : this;
			return root && typeof(root[name]) !== undefined;
			
		default:
			return typeof(window[name]) !== undefined;
	}
};

/**
 * @static
 * Sets the default locale for all of ilib. This locale will be used
 * when no explicit locale is passed to any ilib class. If the default
 * locale is not set, ilib will attempt to use the locale of the
 * environment it is running in, if it can find that. If not, it will
 * default to the locale "en-US".<p>
 * 
 * Depends directive: !depends ilibglobal.js
 * 
 * @param {string} spec the locale specifier for the default locale
 */
ilib.setLocale = function (spec) {
    ilib.locale = spec || ilib.locale;
};

/**
 * @static
 * Return the default locale for all of ilib if one has been set. This 
 * locale will be used when no explicit locale is passed to any ilib 
 * class. If the default
 * locale is not set, ilib will attempt to use the locale of the
 * environment it is running in, if it can find that. If not, it will
 * default to the locale "en-US".<p>
 * 
 * Depends directive: !depends ilibglobal.js 
 * 
 * @return {string} the locale specifier for the default locale
 */
ilib.getLocale = function () {
	if (typeof(ilib.locale) === 'undefined') {
		if (typeof(navigator) !== 'undefined' && typeof(navigator.language) !== 'undefined') {
			// running in a browser
			ilib.locale = navigator.language;  // FF/Opera/Chrome/Webkit
			if (!ilib.locale) {
				// IE on Windows
				var lang = typeof(navigator.browserLanguage) !== 'undefined' ? 
					navigator.browserLanguage : 
					(typeof(navigator.userLanguage) !== 'undefined' ? 
						navigator.userLanguage : 
						(typeof(navigator.systemLanguage) !== 'undefined' ?
							navigator.systemLanguage :
							undefined));
				if (typeof(lang) !== 'undefined' && lang) {
					// for some reason, MS uses lower case region tags
					ilib.locale = lang.substring(0,3) + lang.substring(3,5).toUpperCase();
				}
			}
		} else if (typeof(PalmSystem) !== 'undefined' && typeof(PalmSystem.locales) !== 'undefined') {
			// webOS
			if (typeof(PalmSystem.locales.UI) != 'undefined' && PalmSystem.locales.UI.length > 0) {
				ilib.locale = PalmSystem.locales.UI;
			}
		} else if (typeof(environment) !== 'undefined' && typeof(environment.user) !== 'undefined') {
			// running under rhino
			if (typeof(environment.user.language) === 'string' && environment.user.language.length > 0) {
				ilib.locale = environment.user.language;
				if (typeof(environment.user.country) === 'string' && environment.user.country.length > 0) {
					ilib.locale += '-' + environment.user.country;
				}
			}
		} else if (typeof(process) !== 'undefined' && typeof(process.env) !== 'undefined') {
			// running under nodejs
			var lang = process.env.LANG || process.env.LC_ALL;
			// the LANG variable on unix is in the form "lang_REGION.CHARSET"
			// where language and region are the correct ISO codes separated by
			// an underscore. This translate it back to the BCP-47 form.
			if (lang && lang !== 'undefined') {
				ilib.locale = lang.substring(0,2).toLowerCase() + '-' + lang.substring(3,5).toUpperCase();
			}
		}
			 
		ilib.locale = ilib.locale || 'en-US';
	}
    return ilib.locale;
};

/**
 * @static
 * Sets the default time zone for all of ilib. This time zone will be used when
 * no explicit time zone is passed to any ilib class. If the default time zone
 * is not set, ilib will attempt to use the time zone of the
 * environment it is running in, if it can find that. If not, it will
 * default to the the UTC zone "Etc/UTC".<p>
 * 
 * Depends directive: !depends ilibglobal.js
 * 
 * @param {string} tz the name of the time zone to set as the default time zone
 */
ilib.setTimeZone = function (tz) {
    ilib.tz = tz || ilib.tz;
};

/**
 * @static
 * Return the default time zone for all of ilib if one has been set. This 
 * time zone will be used when no explicit time zone is passed to any ilib 
 * class. If the default time zone
 * is not set, ilib will attempt to use the locale of the
 * environment it is running in, if it can find that. If not, it will
 * default to the the zone "local".<p>
 * 
 * Depends directive: !depends ilibglobal.js
 * 
 * @return {string} the default time zone for ilib
 */
ilib.getTimeZone = function() {
	if (typeof(ilib.tz) === 'undefined') {
		if (typeof(navigator) !== 'undefined' && typeof(navigator.timezone) !== 'undefined') {
			// running in a browser
			if (navigator.timezone.length > 0) {
				ilib.tz = navigator.timezone;
			}
		} else if (typeof(PalmSystem) !== 'undefined' && typeof(PalmSystem.timezone) !== 'undefined') {
			// running in webkit on webOS
			if (PalmSystem.timezone.length > 0) {
				ilib.tz = PalmSystem.timezone;
			}
		} else if (typeof(environment) !== 'undefined' && typeof(environment.user) !== 'undefined') {
			// running under rhino
			if (typeof(environment.user.timezone) !== 'undefined' && environment.user.timezone.length > 0) {
				ilib.tz = environment.user.timezone;
			}
		} else if (typeof(process) !== 'undefined' && typeof(process.env) !== 'undefined') {
			// running in nodejs
			if (process.env.TZ && process.env.TZ !== "undefined") {
				ilib.tz = process.env.TZ;
			}
		}
		
		ilib.tz = ilib.tz || "local"; 
	}

    return ilib.tz;
};

/**
 * @static
 * Define a callback function for loading missing locale data or resources.
 * If this copy of ilib is assembled without including the required locale data
 * or resources, then that data can be lazy loaded dynamically when it is 
 * needed by calling this callback function. Each ilib class will first
 * check for the existence of data under ilib.data, and if it is not there, 
 * it will attempt to load it by calling this loader function, and then place
 * it there.<p>
 * 
 * Suggested implementations of the callback function might be to load files 
 * directly from disk under nodejs or rhino, or within web pages, to load 
 * files from the server with XHR calls.<p>
 * 
 * The expected API for the call back is:
 * 
 * <pre>
 * function(paths, sync, params, callback) {}
 * </pre>
 * 
 * The first parameter to the callback
 * function, paths, is an array of relative paths within the ilib dir structure for the 
 * requested data. These paths will already have the locale spec integrated 
 * into them, so no further tweaking needs to happen to load the data. Simply
 * load the named files. The second
 * parameter tells the loader whether to load the files synchronously or asynchronously.
 * If the sync parameters is false, then the onLoad function must also be specified.
 * The third parameter gives extra parameters to the loader passed from the calling
 * code. This may contain any property/value pairs.  The last parameter, callback,
 * is a callback function to call when all of the data is finishing loading. Make
 * sure to call the callback with the context of "this" so that the caller has their 
 * context back again.<p>
 * 
 * The loader function must be able to operate either synchronously or asychronously. 
 * If the loader function is called with an undefined callback function, it is
 * expected to load the data synchronously, convert it to javascript
 * objects, and return the array of json objects as the return value of the 
 * function. If the loader 
 * function is called with a callback function, it may load the data 
 * synchronously or asynchronously (doesn't matter which) as long as it calls
 * the callback function with the data converted to a javascript objects
 * when it becomes available. If a particular file could not be loaded, the 
 * loader function should put undefined into the corresponding entry in the
 * results array. 
 * Note that it is important that all the data is loaded before the callback
 * is called.<p>
 * 
 * An example implementation for nodejs might be:
 * 
 * <pre>
 * function loadFiles(context, paths, results, callback) {
 *    if (paths.length > 0) {
 *        var file = paths.shift();
 *        fs.readFile(file, "utf-8", function(err, json) {
 *            results.push(err ? undefined : JSON.parse(json));
 *            if (paths.length > 0) {
 *                loadFiles(context, paths, results, callback);
 *            } else {
 *                callback.call(context, results);
 *            }
 *        });
 *     }
 * }
 * // bind to "this" so that "this" is relative to your own instance
 * ilib.setLoaderCallback(ilib.bind(this, function(paths, sync, params, callback) {
 *    if (sync) {
 *        var ret = [];
 *        // synchronous
 *        paths.forEach(function (path) {
 *            var json = fs.readFileSync(path, "utf-8");
 *            ret.push(json ? JSON.parse(json) : undefined);
 *        });
 *        
 *        return ret;
 *    }
 *
 *    // asynchronous
 *    var results = [];
 *    loadFiles(this, paths, results, callback);
 * }));
 * </pre>
 * 
 * @param {function(Array.<string>,Boolean,Object,function(Object))} loader function to call to 
 * load the requested data.
 * @return {boolean} true if the loader was installed correctly, or false
 * if not
 */
ilib.setLoaderCallback = function(loader) {
    // only a basic check
    if (typeof(loader) === 'function' || typeof(loader) === 'undefined') {
    	// console.log("setting callback loader to " + (loader ? loader.name : "undefined"));
        ilib._load = loader;
        return true;
    }
    return false;
};
