/*
 * resources.js - Resource bundle definition
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

// !depends ilibglobal.js locale.js strings.js util/utils.js

/**
 * @class
 * Create a new resource bundle instance. The resource bundle loads strings
 * appropriate for a particular locale and provides them via the getString 
 * method.<p>
 * 
 * The options object may contain any (or none) of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - The locale of the strings to load. If not specified, the default
 * locale is the the default for the web page or app in which the bundle is 
 * being loaded.
 * <li><i>name</i> - Base name of the resource bundle to load. If not specified the default
 * base name is "resources".
 * <li><i>type</i> - Name the type of strings this bundle contains. Valid values are 
 * "xml", "html", "text", or "raw". The default is "text". If the type is "xml" or "html",
 * then XML/HTML entities and tags are not pseudo-translated. During a real translation, 
 * HTML character entities are translated to their corresponding characters in a source
 * string before looking that string up in the translations. Also, the characters "<", ">",
 * and "&" are converted to entities again in the output, but characters are left as they
 * are. If the type is "xml", "html", or "text" types, then the replacement parameter names
 * are not pseudo-translated as well so that the output can be used for formatting with 
 * the ilib.String class. If the type is raw, all characters are pseudo-translated, 
 * including replacement parameters as well as XML/HTML tags and entities.  
 * <li><i>lengthen</i> - when pseudo-translating the string, tell whether or not to 
 * automatically lengthen the string to simulate "long" languages such as German
 * or French. This is a boolean value. Default is false. 
 * </ul>
 * 
 * The locale option may be given as a locale spec string or as an 
 * ilib.Locale object. If the locale option is not specified, then strings for
 * the default locale will be loaded.<p> 
 * 
 * The name option can be used to put groups of strings together in a
 * single bundle. The strings will then appear together in a JS object in
 * a JS file that can be included before the ilib.<p>
 * 
 * A resource bundle with a particular name is actually a set of bundles
 * that are each specific to a language, a language plus a region, or a language
 * plus a region plus a variant. All bundles with the same base name should
 * contain the same set of source strings, but with different translations for 
 * the given locale. The user of the bundle does not need to be aware of 
 * the locale of the bundle, as long as it contains values for the strings 
 * it needs.<p>
 * 
 * Strings in bundles for a particular locale are inherited from parent bundles
 * that are more generic. In general, the hierarchy is as follows:
 * 
 * <ol>
 * <li>base_language_region_variant inherits from
 * <li>base_language_region inherits from
 * <li>base_language inherits from
 * <li>base
 * </ol>
 * 
 * That is, if the translation for a string does not exist in the current
 * locale, the more-generic parent locale is searched for the string. In the
 * worst case scenario, the string is not found in the base locale's strings. 
 * In this case, the original source is returned as the translation. This allows
 * developers to create code with new or changed strings in it and check in that
 * code without waiting for the translations to be done first. The translated
 * version of the app or web site will still function properly, but will show 
 * a spurious untranslated string here and there until the translations are 
 * done and also checked in.<p>   
 *  
 * The base is whatever language your developers use to code in. For
 * a German web site, strings in the source code may be written in German 
 * for example. Often this base is English, as many web sites are coded in
 * English, but that is not required.<p>
 * 
 * The strings can be extracted with the ilib localization tool. Once the strings
 * have been translated, the set of translated files can be generated with the
 * same tool. The output from the tool can be used as input to the ResBundle
 * object. It is up to the web page or app to make sure the JS file that defines
 * the bundle is included before creating the ResBundle instance.<p>
 * 
 * A special locale "xx-XX" is used as the pseudo-translation locale because
 * xx and XX are not a valid ISO language or country specifiers. 
 * Pseudo-translation is a locale where the translations are generated on
 * the fly based on the contents of the source string. Characters in the source 
 * string are replaced with accented versions of those characters and returned. 
 * This allows the strings to be readable in the UI (if somewhat funky-looking), 
 * and yet a tester can easily verify that the string is properly externalized 
 * and loaded from a resource bundle without waiting for any translations to 
 * be completed.<p>
 * 
 * Example. If the source string is:
 * 
 * <pre>
 * "This is a string"
 * </pre>
 * 
 * then the pseudo-translated version might look something like this: 
 * 
 * <pre>
 * "Ţħïş ïş á şţřïñĝ"
 * </pre>
 *<p>
 * 
 * When the "lengthen" property is set to true in the options, the 
 * pseudotranslation code will add digits to the end of the string to simulate
 * the lengthening that occurs when translating to other languages. The above 
 * example will come out like this:
 * 
 * <pre>
 * "Ţħïş ïş á şţřïñĝ76543210"
 * </pre>
 * 
 * The string is lengthened according to the length of the source string. If
 * the source string is less than 20 characters long, the string is lengthened 
 * by 50%. If the source string is 20-40 
 * characters long, the string is lengthened by 33%. If te string is greater
 * than 40 characters long, the string is lengthened by 20%.<p>
 * 
 * The pseudotranslation always ends a string with the digit "0". If you do
 * not see the digit "0" in the UI for your app, you know that truncation
 * has occurred, and the number you see at the end of the string tells you 
 * how many characters were truncated.<p>
 * 
 * Depends directive: !depends resources.js
 * 
 * @constructor
 * @param {?Object} options Options controlling how the bundle is created
 */
ilib.ResBundle = function (options) {
	var name, lookupLocale;
	
	this.locale = new ilib.Locale();	// use the default locale
	this.baseName = "resources";
	this.type = "text";
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? 
					new ilib.Locale(options.locale) :
					options.locale;
		}
		if (options.name) {
			this.baseName = options.name;
		}
		if (options.type) {
			this.type = options.type;
		}
		this.lengthen = options.lengthen || false;
	}
	
	this.map = {};

	lookupLocale = this.locale.isPseudo() ? new ilib.Locale(ilib.getLocale()) : this.locale;
	
	name = this.baseName;
	if (ilib.data[name]) {
		this.map = ilib.merge(this.map, ilib.data[name]);
	}
	if (lookupLocale.getLanguage()) {
		name += "_" + lookupLocale.getLanguage();
		if (ilib.data[name]) {
			this.map = ilib.merge(this.map, ilib.data[name], this.baseName, name);
		}
		if (lookupLocale.getRegion()) {
			name += "_" + lookupLocale.getRegion();		
			if (ilib.data[name]) {
				this.map = ilib.merge(this.map, ilib.data[name], this.baseName + "_" + this.locale.getLanguage(), name);
			}
			if (lookupLocale.getVariant()) {
				name += "_" + lookupLocale.getVariant();
				if (ilib.data[name]) {
					this.map = ilib.merge(this.map, ilib.data[name], this.baseName + "_" + this.locale.getLanguage() + "_" + this.locale.getRegion(), name);
				}
			}
		}
	}
	
	// console.log("Merged resources " + this.locale.toString() + " are: " + JSON.stringify(this.map));
	if (!this.locale.isPseudo() && ilib.isEmpty(this.map)) {
		console.log("Resources for bundle " + this.baseName + " locale " + this.locale.toString() + " are not available.");
	}
};

/**
 * @private
 * @const
 * @type Object.<string, string> 
 * Mapping for psuedo-translation 
 */
ilib.ResBundle._pseudoMap = {
	"a": "à",	
	"c": "ç",	
	"d": "ð",	
	"e": "ë",	
	"g": "ğ",	
	"h": "ĥ",
	"i": "í",	
	"j": "ĵ",	
	"k": "ķ",	
	"l": "ľ",	
	"n": "ñ",	
	"o": "õ",	
	"p": "þ",	
	"r": "ŕ",	
	"s": "š",	
	"t": "ţ",	
	"u": "ü",	
	"w": "ŵ",	
	"y": "ÿ",	
	"z": "ž",	
	"A": "Ã",
	"B": "ß",
	"C": "Ç",	
	"D": "Ð",	
	"E": "Ë",	
	"G": "Ĝ",	
	"H": "Ħ",
	"I": "Ï",	
	"J": "Ĵ",	
	"K": "ĸ",	
	"L": "Ľ",	
	"N": "Ň",	
	"O": "Ø",	
	"R": "Ŗ",	
	"S": "Š",	
	"T": "Ť",	
	"U": "Ú",	
	"W": "Ŵ",	
	"Y": "Ŷ",	
	"Z": "Ż"	
};

ilib.ResBundle.prototype = {
	/**
	 * Return the locale of this resource bundle.
	 * @returns {ilib.Locale} the locale of this resource bundle object 
	 */
	getLocale: function () {
		return this.locale;
	},
	
	/**
	 * Return the name of this resource bundle. This corresponds to the name option
	 * given to the constructor.
	 * @returns {string} name of the the current instance
	 */
	getName: function () {
		return this.baseName;
	},
	
	/**
	 * Return the type of this resource bundle. This corresponds to the type option
	 * given to the constructor.
	 * @returns {string} type of the the current instance
	 */
	getType: function () {
		return this.type;
	},

	/*
	 * @private
	 * Pseudo-translate a string
	 */
	pseudo: function (str) {
		if (!str) {
			return undefined;
		}
		var ret = "", i;
		for (i = 0; i < str.length; i++) {
			if (this.type !== "raw") {
				if (this.type === "html" || this.type === "xml") {
					if (str.charAt(i) === '<') {
						ret += str.charAt(i++);
						while (i < str.length && str.charAt(i) !== '>') {
							ret += str.charAt(i++);
						}
						if (i < str.length) {
							ret += str.charAt(i++);
						}
					} else if (str.charAt(i) === '&') {
						ret += str.charAt(i++);
						while (i < str.length && str.charAt(i) !== ';' && str.charAt(i) !== ' ') {
							ret += str.charAt(i++);
						}
						if (i < str.length) {
							ret += str.charAt(i++);
						}
					}
				}
				if (i < str.length) { 
					if (str.charAt(i) === '{') {
						ret += str.charAt(i++);
						while (i < str.length && str.charAt(i) !== '}') {
							ret += str.charAt(i++);
						}
						if (i < str.length) {
							ret += str.charAt(i);
						}
					} else {
						ret += ilib.ResBundle._pseudoMap[str.charAt(i)] || str.charAt(i);
					}
				}
			} else {
				ret += ilib.ResBundle._pseudoMap[str.charAt(i)] || str.charAt(i);
			}
		}
		if (this.lengthen) {
			var add;
			if (ret.length <= 20) {
				add = Math.round(ret.length / 2);
			} else if (ret.length > 20 && ret.length <= 40) {
				add = Math.round(ret.length / 3);
			} else {
				add = Math.round(ret.length / 5);
			}
			for (i = add-1; i >= 0; i--) {
				ret += (i % 10);
			}
		}
		return ret;
	},
	
	/*
	 * @private
	 * Escape html characters in the output.
	 */
	escape: function (str) {
		str = str.replace(/&/g, '&amp;');
		str = str.replace(/</g, '&lt;');
		str = str.replace(/>/g, '&gt;');
		return str;
	},

	/*
	 * @private
	 * @param {string} str the string to unescape
	 */
	unescape: function (str) {
		str = str.replace(/&amp;/g, '&');
		str = str.replace(/&lt;/g, '<');
		str = str.replace(/&gt;/g, '>');
		return str;
	},
	
	/*
	 * @private
	 * Create a key name out of a source string. All this does so far is 
	 * compress sequences of white space into a single space on the assumption
	 * that this doesn't really change the meaning of the string, and therefore
	 * all such strings that compress to the same thing should share the same
	 * translation.
	 * @param {string} source the source string to make a key out of
	 */
	makeKey: function (source) {
		var key = source.replace(/\s+/gm, ' ');
		return (this.type === "xml" || this.type === "html") ? this.unescape(key) : key;
	},
	
	/**
	 * Return a localized string. If the string is not found in the loaded set of
	 * resources, the original source string is returned. If the key is not given,
	 * then the source string itself is used as the key. In the case where the 
	 * source string is used as the key, the whitespace is compressed down to 1 space
	 * each, and the whitespace at the beginning and end of the string is trimmed.
	 * 
	 * @param {?string=} source the source string to translate
	 * @param {?string=} key optional name of the key, if any
	 * @returns {ilib.String|undefined} the translation of the given source/key or undefined 
	 * if the translation is not found and the source is undefined 
	 */
	getString: function (source, key) {
		if (!source && !key) return undefined;
		
		if (this.locale.isPseudo()) {
			var str = source ? source : this.map[key],
				ret = this.pseudo(str);
			return ret ? new ilib.String(ret) : undefined;
		}
		
		var keyName = key || this.makeKey(source);
		var trans = this.map[keyName] || source;
		return trans === undefined ? undefined : new ilib.String((this.type === "xml" || this.type === "html") ? this.escape(trans) : trans);
	},
	
	/**
	 * Return the merged resources as an entire object. When loading resources for a
	 * locale that are not just a set of translated strings, but instead an entire 
	 * structured object, you can gain access to that object via this call. This method
	 * will ensure that all the of the parts of the object are correct for the locale.
	 * It starts by loading <i>ilib.data[name]</i>, where <i>name</i> is the base name
	 * for this set of resources. Then, it successively overwrites objects in the base
	 * data using locale-specific data. It loads it in this order from <i>ilib.data</i>:
	 * 
	 * <ol>
	 * <li> name + "_" + language
	 * <li> name + "_" + language + "_" + region
	 * <li> name + "_" + language + "_" + region + "_" + variant
	 * 
	 * Loading the resources this way allows the program to share resources between all
	 * locales that share a common language, or a common language and region. As a 
	 * general rule-of-thumb, resources should be as generic as possible in order to
	 * cover as many locales as possible.
	 * 
	 * @returns {Object} returns the object that is the basis for this resources instance
	 */
	getResObj: function () {
		return this.map;
	}
};
