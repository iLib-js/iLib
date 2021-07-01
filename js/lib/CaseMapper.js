/*
 * CaseMapper.js - define upper- and lower-case mapper
 *
 * Copyright © 2014-2015, 2018, 2021 JEDLSoft
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

// !data casing

var ilib = require("../index.js");

var Locale = require("./Locale.js");
var IString = require("./IString.js");
var casing = require("../locale/casing.json");

/**
 * @private
 * There are only a few styles of title case:
 *
 * firstcap: The first letter or digraph is capitalized
 * and the rest of the text follows regular capitalization
 * rules.
 *
 * everycap: Every word in the title is capitalized
 *
 * important: The first letter or digraph is capitalized
 * and all important words after that are capitalized. Other
 * words start with small letters. (ie. rules in English.)
 */
function titleTypeForLanguage(language) {
    if (language === "en") {
        return "english";
    }

    return "firstcap";
};

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
 *   <li><i>start</i> - map the string to start case. This capitalizes each word in the
 *   string regardless of grammar for the language.
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
    var target = this.locale.getLanguage();
    var type = "allcaps";
    
    if (casing.languages.indexOf(target) < -1) {
        // this language does not use a script that has casing, so any operation on this
        // string is a no-op
        this.style = "noop";
        return;
    }

    if (options) {
        if (typeof(options.locale) !== 'undefined') {
            this.locale = (typeof(options.locale) === 'string') ? new Locale(options.locale) : options.locale;
        }

        this.up = (!options.direction || options.direction === "toupper" || options.type === "toupper");
        type = options.type;
        if (options.type) {
            switch (options.type) {
               case 'toupper':
                   this.up = true;
                   break;
               case 'tolower':
                   this.up = false;
                   break;
               case 'sentence':
               case 'title': 
               case 'start':
                   break;
               default:
                   // unrecognized type -- just do toupper by default
                   this.up = true;
                   type = "allcaps";
            }
        } else {
            type = this.up ? "allcaps" : "alllower";
        }
    }

    this.mapData = this.up ? {
        "ß": "SS",       // German
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
        'Ӏ': 'Ӏ'         // Russian and slavic languages
    };

    if (type === "sentence" || type === "title") {
        this.ligatures = {};
    }
    switch (target) {
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

        case 'nl':
            if (type === "sentence" || type === "title" || type === "start") {
                this.ligatures = {
                    "i": {
                        "j": "IJ"
                    }
                };
            }
            break;

        // Bali
        case 'bfa':
        case 'keo':
        case 'mqu':
            this.ligatures = {
                "ʼ": {
                    "b": "ʼB"
                },
                "ʼ": {
                    "d": "ʼD"
                },
                "ʼ": {
                    "y": "ʼY"
                }
            };
            break;

        // Irish
        case 'ga':
            this.ligatures = {
                "m": {
                    "b": "mB"
                },
                "n": {
                    "d": "nD"
                },
                "n": {
                    "g": "nG"
                }
            };
            break;

        // northern slavic + others = treat digraphs as separate letters
        case 'lt':
        case 'lv':
        case 'cz':
        case 'sk':
            this.ligatures = {
                "D": {
                    "Z": "Dz",
                    "Ž": "Dž",
                },
                "d": {
                    "z": "Dz",
                    "ž": "Dž"
                },
                "l": {
                    "j": "Lj",
                },
                "n": {
                    "j": "Nj",
                },

                "ǌ": "Nj",
                "Ǌ": "Nj",

                "ǉ": "Lj",
                "Ǉ": "Lj",

                "ǳ": "Dz",
                "Ǳ": "Dz",

                "ǆ": "Dž",
                "Ǆ": "Dž"
            };
            break;

        // South Slavic languages = digraphs are a single letter with 3 forms
        case 'hr':
        case 'hrp':
        case 'sr':
        case 'srp':
        case 'bs':
        case 'bos':
        case 'cnr':
        case 'sl':
        case 'slv':
        case 'kjv':
        case 'ckm':
        case 'sh':
        case 'hsb':
        case 'scr':
            if (type === "sentence" || type === "title") {
                this.ligatures = {
                    "n": {
                        "j": "Nj"
                    },
                    "N": {
                        "J": "Nj"
                    },
                    "ǌ": "ǋ",
                    "Ǌ": "Ǌ",

                    "l": {
                        "j": "Lj"
                    },
                    "L": {
                        "J": "Lj"
                    },
                    "ǉ": "ǈ",
                    "Ǉ": "ǈ",

                    "d": {
                        "z": "Dz",
                        "ž": "Dž"
                    },
                    "D": {
                        "Z": "Dz",
	                    "Ž": "Dž"
                    },
                    "ǳ": "ǲ",
                    "Ǳ": "ǲ",

                    "ǆ": "ǅ",
                    "Ǆ": "ǅ"
                };
            } else if (type === "start") {
                this.ligatures = {
                    "n": {
                        "j": "NJ"
                    },
                    "N": {
                        "j": "NJ"
                    },
                    "ǌ": "Ǌ",
                    "ǋ": "Ǌ",

                    "l": {
                        "j": "LJ"
                    },
                    "L": {
                        "j": "LJ"
                    },
                    "ǉ": "Ǉ",
                    "ǈ": "Ǉ",

                    "d": {
                        "z": "DZ",
	                    "ž": "DŽ"
                    },
                    "D": {
                        "z": "DZ",
	                    "ž": "DŽ"
                    },
                    "ǳ": "Ǳ",
                    "ǲ": "Ǳ",

                    "ǆ": "Ǆ",
                    "ǅ": "Ǆ"
                };
            }
            break;
    }

    if (type === "sentence") {
        // first character of each sentence is a capital
        this.style = "firstcap";
    } else if (type === "title") {
        // for most languages, titles are like sentence case
        this.style = titleTypeForLanguage(target);
    } else if (type === "initial") {
        this.style = "initialcaps";
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
    _toupper: function(c) {
        if (this.mapData[c]) {
            return this.mapData[c];
        } else {
            return c.toUpperCase();
        }
    },

    _capitalizeFirst: function(charArray) {
        if (this.ligatures) {
            var node = this.ligatures;
            if (typeof(node[charArray[0]]) === "string") {
                charArray[0] = node[charArray[0]];
            } else if (typeof(node[charArray[0]]) === "object") {
                node = node[charArray[0]];
                if (typeof(node[charArray[1]]) === "string") {
                    charArray = [node[charArray[1]]].concat(charArray.slice(2));
                } else {
                    charArray[0] = _toupper(charArray[0]);
                }
            } else {
                charArray[0] = _toupper(charArray[0]);
            }
        }
        return charArray;
    },

    /**
     * @private
     */
    _titleMapper: function(string) {
        var input = (typeof(string) === 'string') ? new IString(string) : string.toString();
        var it = input.charIterator();

        var charArray = [];
        while (it.hasNext()) {
            charArray.push(it.next());
        }

        if (this.style === "firstcap") {
            var uppercased = this._capitalizeFirst(charArray);
            return uppercased.join("");
        }

        var ret = "";
        var c;
        var wordArray = [];
        var state = "break";
        var word = [];
        var i = 0;

        while (i < charArray.length) {
            c = charArray[i];
            switch (state) {
                case "break":
                    if (isBreak(c)) {
                        word.push(c);
                    } else {
                        wordArray.push(word);
                        state = "text";
                        word = [c];
                    }
                    break;
                case "text":
                    if (isBreak(c)) {
                        state = "break";
                    }
                    word.push(c);
                    break;
            }
        }
        if (word.length) {
            wordArray.push(word);
        }

    },

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
        if (!string || this.style === "noop") {
            return string;
        }
        switch (this.style) {
            case "allcaps":
                return this._charMapper(string);
            case "firstcap":
            case "title":
                break;
        }
    }
};

module.exports = CaseMapper;
