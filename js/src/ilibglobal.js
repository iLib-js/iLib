/*
 * ilibglobal.js - define the ilib name space
 * 
 * Copyright © 2012, JEDLSoft
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
 * @returns {string} a version string for this instance of ilib
 */
ilib.getVersion = function () {
	// increment this for each release
	return "1.2";
};

/*
 * Place where resources and such are eventually assigned.
 */
ilib.data = {
	norm: {}
};

window["ilib"] = ilib;

/**
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
 * Return the default locale for all of ilib if one has been set. This 
 * locale will be used when no explicit locale is passed to any ilib 
 * class. If the default
 * locale is not set, ilib will attempt to use the locale of the
 * environment it is running in, if it can find that. If not, it will
 * default to the locale "en-US".<p>
 * 
 * Depends directive: !depends ilibglobal.js 
 * 
 * @returns {string} the locale specifier for the default locale
 */
ilib.getLocale = function () {
	return ilib.locale || "en-US";
};

/**
 * Sets the default time zone for all of ilib. This time zone will be used when
 * no explicit time zone is passed to any ilib class. If the default time zone
 * is not set, ilib will attempt to use the time zone of the
 * environment it is running in, if it can find that. If not, it will
 * default to the the GMT zone "Europe/London".<p>
 * 
 * Depends directive: !depends ilibglobal.js
 * 
 * @param {string} tz the name of the time zone to set as the default time zone
 */
ilib.setTimeZone = function (tz) {
	ilib.tz = tz || ilib.tz;
};

/**
 * Return the default time zone for all of ilib if one has been set. This 
 * time zone will be used when no explicit time zone is passed to any ilib 
 * class. If the default time zone
 * is not set, ilib will attempt to use the locale of the
 * environment it is running in, if it can find that. If not, it will
 * default to the the GMT zone "Europe/London".<p>
 * 
 * Depends directive: !depends ilibglobal.js
 * 
 * @returns {string} the default time zone for ilib
 */
ilib.getTimeZone = function() {
	return ilib.tz || "Europe/London";
};
