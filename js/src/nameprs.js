/*
 * nameprs.js - Person name parser
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

/* !depends 
ilibglobal.js 
locale.js
util/utils.js 
ctype.isalpha.js 
ctype.isideo.js 
ctype.ispunct.js 
ctype.isspace.js 
*/

// !data name

// notes:
// icelandic given names: http://en.wiktionary.org/wiki/Appendix:Icelandic_given_names
// danish approved given names: http://www.familiestyrelsen.dk/samliv/navne/
// http://www.mentalfloss.com/blogs/archives/59277
// other countries with first name restrictions: Norway, China, New Zealand, Japan, Sweden, Germany, Hungary

/**
 * @class
 * A class to parse names of people. Different locales have different conventions when it
 * comes to naming people.<p>
 * 
 * The options can contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - use the rules and conventions of the given locale in order to parse
 * the name
 * <li><i>style</i> - explicitly use the named style to parse the name. Valid values so 
 * far are "western" and "asian". If this property is not specified, then the style will 
 * be gleaned from the name itself. This class will count the total number of Latin or Asian 
 * characters. If the majority of the characters are in one style, that style will be 
 * used to parse the whole name. 
 * <li><i>order</i> - explicitly use the given order for names. In some locales, such
 * as Russian, names may be written equally validly as "givenName familyName" or "familyName
 * givenName". This option tells the parser which order to prefer, and overrides the 
 * default order for the locale. Valid values are "gf" (given-family) or "fg" (family-given).
 * 
 * <li>onLoad - a callback function to call when the name info is fully 
 * loaded and the name has been parsed. When the onLoad option is given, the name object 
 * will attempt to load any missing locale data using the ilib loader callback.
 * When the constructor is done (even if the data is already preassembled), the 
 * onLoad function is called with the current instance as a parameter, so this
 * callback can be used with preassembled or dynamic loading or a mix of the two.
 * 
 * <li>sync - tell whether to load any missing locale data synchronously or 
 * asynchronously. If this option is given as "false", then the "onLoad"
 * callback must be given, as the instance returned from this constructor will
 * not be usable for a while. 
 * </ul>
 * 
 * When the parser has completed its parsing, it fills in the fields listed below.<p>
 * 
 * For names that include auxilliary words, such as the family name "van der Heijden", all 
 * of the auxilliary words ("van der") will be included in the field.<p>
 * 
 * For names in Spanish locales, it is assumed that the family name is doubled. That is,
 * a person may have a paternal family name followed by a maternal family name. All
 * family names will be listed in the familyName field as normal, separated by spaces. 
 * When formatting the short version of such names, only the paternal family name will 
 * be used.
 * 
 * @constructor
 * @param {string|ilib.Name=} name the name to parse
 * @param {Object=} options Options governing the construction of this name instance
 */
ilib.Name = function(name, options) {
	var sync = true;
	
	if (typeof(name) === 'object') {
		// copy constructor
		/**
		 * The prefixes for this name
		 * @type string
		 */
		this.prefix = name.prefix;
		/**
		 * The given (personal) name in this name.
		 * @type string
		 */
		this.givenName = name.givenName;
		/**
		 * The middle names used in this name. If there are multiple middle names, they all 
		 * appear in this field separated by spaces. 
		 * @type string
		 */
		this.middleName = name.middleName;
		/**
		 * The family names in this name. If there are multiple family names, they all 
		 * appear in this field separated by spaces.
		 * @type string
		 */
		this.familyName = name.familyName;
		/**
		 * The suffixes for this name. If there are multiple suffixes, they all 
		 * appear in this field separated by spaces.
		 * @type string
		 */
		this.suffix = name.suffix;
		
		// private properties
		this.locale = name.locale;
		this.style = name.style;
		this.order = name.order;
		return;
	}

	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		
		if (options.style && (options.style === "asian" || options.style === "western")) {
			this.style = options.style;
		}
		
		if (options.order && (options.order === "gf" || options.order === "fg")) {
			this.order = options.order;
		}
		
		if (typeof(options.sync) !== 'undefined') {
			sync = (options.sync == true);
		}
	}

	if (!ilib.Name.cache) {
		ilib.Name.cache = {};
	}

	this.locale = this.locale || new ilib.Locale();
	var spec = this.locale.getSpec().replace(/-/g, "_");
	if (typeof(ilib.Name.cache[spec]) === 'undefined') {
		/**
		 * @private
		 * @type {{sortByHeadWord:boolean,conjunctions:Object,auxillaries:Object,prefixes:Object,suffixes:Object,knownFamilyNames:Object,nameStyle:string}}
		 */
		this.info = /** @type {{sortByHeadWord:boolean,conjunctions:Object,auxillaries:Object,prefixes:Object,suffixes:Object,knownFamilyNames:Object,nameStyle:string}} */ ilib.mergeLocData("name", this.locale);
		if (this.info) {
			ilib.Name.cache[spec] = this.info;
			this._init(name);
			if (options && typeof(options.onLoad) === 'function') {
				options.onLoad(this);
			}
		} else if (typeof(ilib._load) === 'function') {
			// locale is not preassembled, so attempt to load it dynamically
			var files = ilib.getLocFiles(this.locale, "name");
			
			ilib._load(files, sync, function(arr) {
				this.info = {};
				for (var i = 0; i < arr.length; i++) {
					if (typeof(arr[i]) !== 'undefined') {
						this.info = ilib.merge(this.info, arr[i]);
					}
				}
				
				ilib.Name.cache[spec] = this.info;
				this._init(name);
				if (options && typeof(options.onLoad) === 'function') {
					options.onLoad(this);
				}
			}.bind(this));
		} else {
			// no data other than the generic shared data
			this.info = ilib.data.name;
			ilib.Name.cache[spec] = this.info;
			this._init(name);
			if (options && typeof(options.onLoad) === 'function') {
				options.onLoad(this);
			}
		}
	} else {
		this.info = ilib.Name.cache[spec];
		this._init(name);
		if (options && typeof(options.onLoad) === 'function') {
			options.onLoad(this);
		}
	}
};

/**
 * @static
 * @protected
 */
ilib.Name._isAsianName = function (name) {
	// the idea is to count the number of asian chars and the number
	// of latin chars. If one is greater than the other, choose
	// that style.
	var asian = 0, latin = 0, i;
	
	if (name && name.length > 0) {
		for (i = 0; i < name.length; i++) {
			if (ilib.CType.isAlpha(name.charAt(i))) {
				latin++;
			} else if (ilib.CType.isIdeo(name.charAt(i))) {
				asian++;
			}
		}
		
		return latin < asian;
	}

	return false;
};

/**
 * @static
 * @protected
 * Return true if any Latin letters are found in the string. Return
 * false if all the characters are non-Latin.
 */
ilib.Name._isEuroName = function(name) {
	var c, 
		n = new ilib.String(name),
		it = n.charIterator();
	
	while (it.hasNext()) {
		c = it.next();
		
		if (!ilib.CType.isIdeo(c) && 
			 !ilib.CType.isPunct(c) &&
			 !ilib.CType.isSpace(c)) {
			return true;
		}
	}
	
	return false;
};

ilib.Name.prototype = {
    /**
     * @protected
     */
    _init: function (name) {
    	var parts, prefixArray, prefix, prefixLower,
			suffixArray, suffix, suffixLower,
			asianName, i, info, hpSuffix;

    	if (name) {
    		// for DFISH-12905, pick off the part that the LDAP server automatically adds to our names in HP emails
    		i = name.search(/\s*[,\(\[\{<]/);
    		if (i !== -1) {
    			hpSuffix = name.substring(i);
    			hpSuffix = hpSuffix.replace(/\s+/g, ' ');	// compress multiple whitespaces
    			suffixArray = hpSuffix.split(" ");
    			var conjunctionIndex = this._findLastConjunction(suffixArray);
    			if (conjunctionIndex > -1) {
    				// it's got conjunctions in it, so this is not really a suffix
    				hpSuffix = undefined;
    			} else {
    				name = name.substring(0,i);
    			}
    		}
    		
    		if (this.info.nameStyle === "asian") {
    			asianName = !ilib.Name._isEuroName(name);
    			info = asianName ? this.info : ilib.data.name;
    		} else {
    			asianName = ilib.Name._isAsianName(name);
	    		info = asianName ? ilib.data.name : this.info;
    		}
    		
    		if (asianName) {
    			// all-asian names
    			name = name.replace(/\s+/g, '');	// eliminate all whitespaces
    			parts = name.trim().split('');
    		} else {
    			name = name.replace(/, /g, ' , ');
    			name = name.replace(/\s+/g, ' ');	// compress multiple whitespaces
    			parts = name.trim().split(' ');
    		}
    		
    		// check for prefixes
    		if (parts.length > 1) {
    			for (i = parts.length; i > 0; i--) {
    				prefixArray = parts.slice(0, i);
    				prefix = prefixArray.join(asianName ? '' : ' ');
    				prefixLower = prefix.toLowerCase();
    				prefixLower = prefixLower.replace(/[,\.]/g, '');  // ignore commas and periods
    			
    				if (info.prefixes && info.prefixes.indexOf(prefixLower) > -1) {
    					if (this.prefix) {
    						if (!asianName) {
    							this.prefix += ' ';
    						} 
    						this.prefix += prefix;
    					} else {
    						this.prefix = prefix;
    					}
    					parts = parts.slice(i);
    					i = parts.length;
    				}
    			}
    		}
    		
    		// check for suffixes
    		if (parts.length > 1) {
    			for (i = parts.length; i > 0; i--) {
    				suffixArray = parts.slice(-i);
    				suffix = suffixArray.join(asianName ? '' : ' ');
    				suffixLower = suffix.toLowerCase();
    				suffixLower = suffixLower.replace(/[\.]/g, '');  // ignore periods
    				
    				if (info.suffixes && info.suffixes.indexOf(suffixLower) > -1) {
    					if (this.suffix) {
    						if (!asianName && !ilib.CType.isPunct(this.suffix.charAt(0))) {
    							this.suffix = ' ' + this.suffix;
    						}
    						this.suffix = suffix + this.suffix;
    					} else {
    						this.suffix = suffix;
    					}
    					parts = parts.slice(0, parts.length-i);
    					i = parts.length;
    				}
    			}
    		}
    		
    		if (hpSuffix) {
    			this.suffix = (this.suffix && this.suffix + hpSuffix) || hpSuffix;
    		}

    		// adjoin auxillary words to their headwords
    		if (parts.length > 1 && !asianName ) {
    			parts = this._joinAuxillaries(parts, asianName);
    		}
    		
    		if (asianName) {
    			this._parseAsianName(parts);
    		} else {
    			this._parseWesternName(parts);
    		}
    		
    		this._joinNameArrays();
    	}
    },
    
	/**
	 * @return {number} 
	 *
	_findSequence: function(parts, hash, isAsian) {
		var sequence, sequenceLower, sequenceArray, aux = [], i, ret = {};
		
		if (parts.length > 0 && hash) {
			//console.info("_findSequence: finding sequences");
			for (var start = 0; start < parts.length-1; start++) {
				for ( i = parts.length; i > start; i-- ) {
					sequenceArray = parts.slice(start, i);
					sequence = sequenceArray.join(isAsian ? '' : ' ');
					sequenceLower = sequence.toLowerCase();
					sequenceLower = sequenceLower.replace(/[,\.]/g, '');  // ignore commas and periods
					
					//console.info("_findSequence: checking sequence: '" + sequenceLower + "'");
					
					if ( sequenceLower in hash ) {
						ret.match = sequenceArray;
						ret.start = start;
						ret.end = i;
						return ret;
						//console.info("_findSequence: Found sequence '" + sequence + "' New parts list is " + JSON.stringify(parts));
					}
				}
			}
		}
	
		return undefined;
	},
	*/
	
	/**
	 * @protected
	 */
	_findPrefix: function (parts, names, isAsian) {
		var i, prefix, prefixLower, prefixArray, aux = [];
		
		if (parts.length > 0 && names) {
			for (i = parts.length; i > 0; i--) {
				prefixArray = parts.slice(0, i);
				prefix = prefixArray.join(isAsian ? '' : ' ');
				prefixLower = prefix.toLowerCase();
				prefixLower = prefixLower.replace(/[,\.]/g, '');  // ignore commas and periods
				
				if (prefixLower in names) {
					aux = aux.concat(isAsian ? prefix : prefixArray);
					parts = parts.slice(i);
					i = parts.length + 1;
				}
			}
		}
		
		return aux;
	},

	/**
	 * @protected
	 */
	_findSuffix: function (parts, names, isAsian) {
		var i, j, seq = "";
		
		for (i = 0; i < names.length; i++) {
			if (parts.length >= names[i].length) {
				j = 0;
				while (j < names[i].length && parts[parts.length-j] === names[i][names[i].length-j]) {
					j++;
				}
				if (j >= names[i].length) {
					seq = parts.slice(parts.length-j).join(isAsian ? "" : " ") + (isAsian ? "" : " ") + seq;
					parts = parts.slice(0, parts.length-j);
					i = -1; // restart the search
				}
			}
		}

		this.suffix = seq;
		return parts;
	},

	/**
	 * @protected
	 * Find the last instance of 'and' in the name
	 * @param {Array.<string>} parts
	 * @returns {number}
	 */
	_findLastConjunction: function _findLastConjunction(parts) {
		var conjunctionIndex = -1, index, part;
		
		for (index = 0; index < parts.length; index++) {
			part = parts[index];
			if (typeof(part) === 'string') {
				part = part.toLowerCase();
				// also recognize English
				if ("and" === part || "or" === part || "&" === part || "+" === part) {
					conjunctionIndex = index;
				}
				if (this.info.conjunctions.and1 === part || 
					this.info.conjunctions.and2 === part || 
					this.info.conjunctions.or1 === part ||
					this.info.conjunctions.or2 === part || 
					("&" === part) || 
					("+" === part)) {
					conjunctionIndex = index;
				}
			}
		}
		return conjunctionIndex;
	},

	/**
	 * @protected
	 * @param {Array.<string>} parts the current array of name parts
	 * @param {boolean} isAsian true if the name is being parsed as an Asian name
	 * @return {Array.<string>} the remaining parts after the prefixes have been removed
	 */
	_extractPrefixes: function (parts, isAsian) {
		var i = this._findPrefix(parts, this.info.prefixes, isAsian);
		if (i > 0) {
			this.prefix = parts.slice(0, i).join(isAsian ? "" : " ");
			return parts.slice(i);
		}
		// prefixes not found, so just return the array unmodified
		return parts;
	},

	/**
	 * @protected
	 * @param {Array.<string>} parts the current array of name parts
	 * @param {boolean} isAsian true if the name is being parsed as an Asian name
	 * @return {Array.<string>} the remaining parts after the suffices have been removed
	 */
	_extractSuffixes: function (parts, isAsian) {
		var i = this._findSuffix(parts, this.info.suffixes, isAsian);
		if (i > 0) {
			this.suffix = parts.slice(i).join(isAsian ? "" : " ");
			return parts.slice(0,i);
		}
		// suffices not found, so just return the array unmodified
		return parts;
	},
	
	/**
	 * @protected
	 * Adjoin auxillary words to their head words.
	 * @param {Array.<string>} parts the current array of name parts
	 * @param {boolean} isAsian true if the name is being parsed as an Asian name
	 * @return {Array.<string>} the parts after the auxillary words have been plucked onto their head word
	 */
	_joinAuxillaries: function (parts, isAsian) {
		var start, i, prefixArray, prefix, prefixLower;
		
		if (this.info.auxillaries && (parts.length > 2 || this.prefix)) {
			for (start = 0; start < parts.length-1; start++) {
				for (i = parts.length; i > start; i--) {
					prefixArray = parts.slice(start, i);
					prefix = prefixArray.join(' ');
					prefixLower = prefix.toLowerCase();
					prefixLower = prefixLower.replace(/[,\.]/g, '');  // ignore commas and periods
					
					if (prefixLower in this.info.auxillaries) {
						parts.splice(start, i+1-start, prefixArray.concat(parts[i]));
						i = start;
					}
				}
			}
		}
		
		return parts;
	},

	/**
	 * @protected
	 * Recursively join an array or string into a long string.
	 */
	_joinArrayOrString: function _joinArrayOrString(part) {
		var i;
		if (typeof(part) === 'object') {
			for (i = 0; i < part.length; i++) {
				part[i] = this._joinArrayOrString(part[i]);
			}
			var ret = "";
			part.forEach(function (segment) {
				if (ret.length > 0 && !ilib.CType.isPunct(segment.charAt(0))) {
					ret += ' ';
				}
				ret += segment;
			});
			return ret;
		}
		return part;
	},
	
	/**
	 * @protected
	 */
	_joinNameArrays: function _joinNameArrays() {
		var prop;
		for (prop in this) {
			if (this[prop] !== undefined && typeof(this[prop]) === 'object' && this[prop] instanceof Array) {
				this[prop] = this._joinArrayOrString(this[prop]);
			}
		}
	},

	/**
	 * @protected
	 */
	_parseAsianName: function (parts) {
		var familyNameArray = this._findPrefix(parts, this.info.knownFamilyNames, true);
		
		if (familyNameArray && familyNameArray.length > 0) {
			this.familyName = familyNameArray.join('');
			this.givenName = parts.slice(this.familyName.length).join('');
		} else if (this.suffix || this.prefix) {
			this.familyName = parts.join('');
		} else {
			this.givenName = parts.join('');
		}
	},
	
	/**
	 * @protected
	 */
	_parseSpanishName: function (parts) {
		var conjunctionIndex;
		
		if (parts.length === 1) {
			if (this.prefix || typeof(parts[0]) === 'object') {
				this.familyName = parts[0];
			} else {
				this.givenName = parts[0];
			}
		} else if (parts.length === 2) {
			// we do G F
			this.givenName = parts[0];
			this.familyName = parts[1];
		} else if (parts.length === 3) {
			conjunctionIndex = this._findLastConjunction(parts);
			// if there's an 'and' in the middle spot, put everything in the first name
			if (conjunctionIndex === 1) {
				this.givenName = parts;
			} else {
				// else, do G F F
				this.givenName = parts[0];
				this.familyName = parts.slice(1);
			}
		} else if (parts.length > 3) {
			//there are at least 4 parts to this name
			
			conjunctionIndex = this._findLastConjunction(parts);
			if (conjunctionIndex > 0) {
				// if there's a conjunction that's not the first token, put everything up to and 
				// including the token after it into the first name, the last 2 tokens into
				// the family name (if they exist) and everything else in to the middle name
				// 0 1 2 3 4 5
				// G A G
				// G A G F
				// G G A G
				// G A G F F
				// G G A G F
				// G G G A G
				// G A G M F F
				// G G A G F F
				// G G G A G F
				// G G G G A G
				this.givenName = parts.splice(0,conjunctionIndex+2);
				if (parts.length > 1) {
					this.familyName = parts.splice(parts.length-2, 2);
					if ( parts.length > 0 ) {
						this.middleName = parts;
					}
				} else if (parts.length === 1) {
					this.familyName = parts[0];
				}
			} else {
				this.givenName = parts.splice(0,1);
				this.familyName = parts.splice(parts.length-2, 2);
				this.middleName = parts;
			}
		}
	},

	/**
	 * @protected
	 */
	_parseWesternName: function (parts) {
		if (this.locale.getLanguage() === "es") {
			// in spain and mexico, we parse names differently than in the rest of the world 
			// because of the double family names
			this._parseSpanishName(parts);
		} else if (this.locale.getLanguage() === "ru") {
			/*
			 * In Russian, names can be given equally validly as given-family 
			 * or family-given. Use the value of the "order" property of the
			 * constructor options to give the default when the order is ambiguous.
			 */
			// TODO: this._parseRussianName(parts);
		} else {
			/* Western names are parsed as follows, and rules are applied in this 
			 * order:
			 * 
			 * G
			 * G F
			 * G M F
			 * G M M F
			 * P F
			 * P G F 
			 */
			var conjunctionIndex;
			
			if (parts.length === 1) {
				if (this.prefix || typeof(parts[0]) === 'object') {
					// already has a prefix, so assume it goes with the family name like "Dr. Roberts" or
					// it is a name with auxillaries, which is almost always a family name
					this.familyName = parts[0];
				} else {
					this.givenName = parts[0];
				}
			} else if (parts.length === 2) {
				// we do G F
				this.givenName = parts[0];
				this.familyName = parts[1];
			} else if (parts.length >= 3) {
				//find the first instance of 'and' in the name
				conjunctionIndex = this._findLastConjunction(parts);
		
				if (conjunctionIndex > 0) {
					// if there's a conjunction that's not the first token, put everything up to and 
					// including the token after it into the first name, the last token into
					// the family name (if it exists) and everything else in to the middle name
					// 0 1 2 3 4 5
					// G A G M M F
					// G G A G M F
					// G G G A G F
					// G G G G A G
					this.givenName = parts.slice(0,conjunctionIndex+2);
					if (conjunctionIndex + 1 < parts.length - 1) {
						this.familyName = parts.splice(parts.length-1, 1);
						if (conjunctionIndex + 2 < parts.length - 1) {
							this.middleName = parts.slice(conjunctionIndex + 2, parts.length - conjunctionIndex - 3);
						}
					}
				} else {
					this.givenName = parts[0];
					this.middleName = parts.slice(1, parts.length-1);
					this.familyName = parts[parts.length-1];
				}
			}
		}
	},

	/**
	 * When sorting names with auxiliary words (like "van der" or "de los"), determine
	 * which is the "head word" and return a string that can be easily sorted by head
	 * word. In English, names are always sorted by initial characters. In places like
	 * the Netherlands or Germany, family names are sorted by the head word of a list
	 * of names rather than the first element of that name.
	 * @return {string|undefined} a string containing the family name[s] to be used for sorting
	 * in the current locale, or undefined if there is no family name in this object
	 */
	getSortFamilyName: function() {
		var name,
			auxillaries, 
			auxString, 
			parts,
			i;
		
		// no name to sort by
		if (!this.familyName) {
			return undefined;
		}
		
		// first break the name into parts
		if (this.info) {
			if (this.info.sortByHeadWord) {
				if (typeof(this.familyName) === 'string') {
					name = this.familyName.replace(/\s+/g, ' ');	// compress multiple whitespaces
					parts = name.trim().split(' ');
				} else {
					// already split
					parts = /** @type Array */ this.familyName;
				}
				
				auxillaries = this._findPrefix(parts, this.info.auxillaries, false);
				if (auxillaries && auxillaries.length > 0) {
					if (typeof(this.familyName) === 'string') {
						auxString = auxillaries.join(' ');
						name = this.familyName.substring(auxString.length+1) + ', ' + auxString;
					} else {
						name = parts.slice(auxillaries.length).join(' ') + 
							', ' + 
							parts.slice(0,auxillaries.length).join(' ');
					}
				}
			} else if (this.info.knownFamilyNames && this.familyName) {
				parts = this.familyName.split('');
				var familyNameArray = this._findPrefix(parts, this.info.knownFamilyNames, true);
				name = "";
				for (i = 0; i < familyNameArray.length; i++) {
					name += (this.info.knownFamilyNames[familyNameArray[i]] || "");
				}
			}
		}
	
		return name || this.familyName;
	},
	
	getHeadFamilyName: function() {
	},
	
	/** 
	 * @protected
	 * Return a shallow copy of the current instance.
	 */
	clone: function () {
		var other = new ilib.Name();
		ilib.shallowCopy(this, other);
		return other;
	}
};

