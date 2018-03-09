/*
 * CaseMapper.js - define upper- and lower-case mapper
 *
 * Copyright © 2014-2015, 2018, JEDLSoft
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

var ilib = require("../index.js");

var Locale = require("./Locale.js");
var IString = require("./IString.js");

/**
 * @class
 * Create a new string mapper instance that maps strings to upper or
 * lower case. This mapping will work for any string as characters
 * that have no case will be returned unchanged.<p>
 *
 * The options may contain any of the following properties:
 *
 * <ul>
 * <li><i>locale</i> - locale to use when loading the mapper. Some maps are
 * locale-dependent, and this locale selects the right one. Default if this is
 * not specified is the current locale.
 *
 * <li><i>direction</i> - "toupper" for upper-casing, or "tolower" for lower-casing.
 * Default if not specified is "toupper".
 *
 * <li><i>type</i> - the type of mapping. This allows the case mapper to map the
 * case of an entire string properly, and not just to all-lower and all-upper. The
 * valid choices for this property are:
 *   <ul>
 *   <li><i>tolower</i> - map the entire string to lower case. This type is implied
 *   when direction property is set to "tolower".
 *   <li><i>toupper</i> - map the entire string to upper case. This type is implied
 *   when direction property is set to "toupper".
 *   <li><i>sentence</i> - map the string to sentence case. This mode is used when
 *   writing sentences in regular text. In many languages, this
 *   means capitalizing the first character of the sentence. This mode will skip
 *   over non-letter characters at the beginning of the string until the first letter
 *   character is found.
 *   <li><i>title</i> - map the string to title case. This mode is used when writing
 *   a heading or the title of page. In some languages, all words have an initial
 *   capital letter (like start case). In others, only "open class" words get
 *   capitalized, and in yet
 *   others, only the initial word in the string is capitalized (like sentence case)
 *   and all other words retain their previous capitalization. The style depends on
 *   the locale.
 *   <li><i>start</i> - map the string to start case. This converts each word in the
 *   string to be capitalized.
 *   </ul>
 * </ul>
 *
 * This class can deal with Unicode digraph or ligature characters properly per
 * locale. For example, in Dutch, the word "ijsland" (the country "Iceland") is
 * capitalized in sentence case as "IJsland" with both characters of the digraph
 * "ij" being capitalized together.<p>
 *
 * Note that when a string is sentence- or title-cased, and the conventions of the
 * language are not to capitalize words in the middle of a sentence, the case of
 * the text in the middle of the sentence is not modified. It is assumed that the
 * sentence already has the proper casing in it already. For example, German is one
 * of the languages where title case only upper-cases the first word in the
 * string, and it is also convention to upper-case all nouns. This class will
 * perform the proper upper-casing of the first word, but will not touch the rest
 * of the string, as it is assumed that the nouns in the rest of the string are
 * already upper-cased properly.<p>
 *
 * If the type and direction properties are both given, the type property will take
 * precedence and the direction property will be ignored. The type of "toupper" is the
 * same as the direction "toupper", and similarly the type "tolower" is the same as
 * the direction "tolower".
 *
 * @constructor
 * @param {Object=} options options to initialize this mapper
 */
var CaseMapper = function (options) {
    this.up = true;
    this.locale = new Locale();

    if (options) {
        if (typeof(options.locale) !== 'undefined') {
            this.locale = (typeof(options.locale) === 'string') ? new Locale(options.locale) : options.locale;
        }

        this.up = (!options.direction || options.direction === "toupper");
    }

    this.mapData = this.up ? {
        "ß": "SS",        // German
        'ΐ': 'Ι',        // Greek
        'ά': 'Α',
        'έ': 'Ε',
        'ή': 'Η',
        'ί': 'Ι',
        'ΰ': 'Υ',
        'ϊ': 'Ι',
        'ϋ': 'Υ',
        'ό': 'Ο',
        'ύ': 'Υ',
        'ώ': 'Ω',
        'Ӏ': 'Ӏ',        // Russian and slavic languages
        'ӏ': 'Ӏ'
    } : {
        'Ӏ': 'Ӏ'        // Russian and slavic languages
    };

    switch (this.locale.getLanguage()) {
        case "az":
        case "tr":
        case "crh":
        case "kk":
        case "krc":
        case "tt":
            var lower = "iı";
            var upper = "İI";
            this._setUpMap(lower, upper);
            break;
    }

    if (ilib._getBrowser() === "ie" || ilib._getBrowser() === "Edge") {
        // IE is missing these mappings for some reason
        if (this.up) {
            this.mapData['ς'] = 'Σ';
        }
        this._setUpMap("ⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⳁⳉⳋ", "ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⳀⳈⳊ"); // Coptic
        // Georgian Nuskhuri <-> Asomtavruli
        this._setUpMap("ⴀⴁⴂⴃⴄⴅⴆⴇⴈⴉⴊⴋⴌⴍⴎⴏⴐⴑⴒⴓⴔⴕⴖⴗⴘⴙⴚⴛⴜⴝⴞⴟⴠⴡⴢⴣⴤⴥ", "ႠႡႢႣႤႥႦႧႨႩႪႫႬႭႮႯႰႱႲႳႴႵႶႷႸႹႺႻႼႽႾႿჀჁჂჃჄჅ");
    }
};

CaseMapper.prototype = {
    /**
     * @private
     */
    _charMapper: function(string) {
        if (!string) {
            return string;
        }
        var input = (typeof(string) === 'string') ? new IString(string) : string.toString();
        var ret = "";
        var it = input.charIterator();
        var c;

        while (it.hasNext()) {
            c = it.next();
            if (!this.up && c === 'Σ') {
                if (it.hasNext()) {
                    c = it.next();
                    var code = c.charCodeAt(0);
                    // if the next char is not a greek letter, this is the end of the word so use the
                    // final form of sigma. Otherwise, use the mid-word form.
                    ret += ((code < 0x0388 && code !== 0x0386) || code > 0x03CE) ? 'ς' : 'σ';
                    ret += c.toLowerCase();
                } else {
                    // no next char means this is the end of the word, so use the final form of sigma
                    ret += 'ς';
                }
            } else {
                if (this.mapData[c]) {
                    ret += this.mapData[c];
                } else {
                    ret += this.up ? c.toUpperCase() : c.toLowerCase();
                }
            }
        }

        return ret;
    },

    /** @private */
    _setUpMap: function(lower, upper) {
        var from, to;
        if (this.up) {
            from = lower;
            to = upper;
        } else {
            from = upper;
            to = lower;
        }
        for (var i = 0; i < upper.length; i++) {
            this.mapData[from[i]] = to[i];
        }
    },

    /**
     * Return the locale that this mapper was constructed with.
     * @returns {Locale} the locale that this mapper was constructed with
     */
    getLocale: function () {
        return this.locale;
    },

    /**
     * Map a string to lower case in a locale-sensitive manner.
     *
     * @param {string|undefined} string
     * @return {string|undefined}
     */
    map: function (string) {
        return this._charMapper(string);
    }
};

module.exports = CaseMapper;
