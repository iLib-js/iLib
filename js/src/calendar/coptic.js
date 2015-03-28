/*
 * coptic.js - Represent a Coptic calendar object.
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


/* !depends ilibglobal.js calendar.js locale.js date.js util/utils.js */

var ilib = require("../ilibglobal.js");
ilib.extend(ilib, require("../util/utils.js"));

if (!ilib.Locale) ilib.Locale = require("../locale.js");
if (!ilib.Date) ilib.Date = require("../date.js");
if (!ilib.Cal) ilib.Cal = require("../calendar.js");

/**
 * @class
 * Construct a new Coptic calendar object. This class encodes information about
 * a Coptic calendar.<p>
 * 
 * Depends directive: !depends coptic.js
 * 
 * @constructor
 * @implements ilib.Cal
 */
ilib.Cal.Coptic = function() {
	this.type = "coptic";
};

ilib.Cal.Coptic.prototype = new ilib.Cal.Ethiopic();
ilib.Cal.Coptic.prototype.parent = ilib.Cal.Coptic.prototype;
ilib.Cal.Coptic.prototype.constructor = ilib.Cal.Coptic;

/**
 * Return a date instance for this calendar type using the given
 * options.
 * @param {Object} options options controlling the construction of 
 * the date instance
 * @return {ilib.Date} a date appropriate for this calendar type
 */
ilib.Cal.Coptic.prototype.newDateInstance = function (options) {
	return new ilib.Date.CopticDate(options);
};

/* register this calendar for the factory method */
ilib.Cal._constructors["coptic"] = ilib.Cal.Coptic;

module.exports = ilib.Cal.Coptic;