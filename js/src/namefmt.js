/*
 * namefmt.js - Format person names for display
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
strings.js
nameprs.js
ctype.ispunct.js
*/

// !data name

/**
 * @class
 * Creates a formatter that can format person name instances (ilib.Name) for display to
 * a user. The options may contain the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - Use the conventions of the given locale to construct the name format. 
 * <li><i>style</i> - Format the name with the given style. The value of this property
 * should be one of the following strings: 
 *   <ul>
 *     <li><i>short</i> - Format a short name with just the given and family names.
 *     <li><i>medium</i> - Format a medium-length name with the given, middle, and family names.
 *     <li><i>long</i> - Format a long name with all names available in the given name object, including
 *     prefixes and suffixes.
 *   </ul>
 * <li><i>components</i> - Format the name with the given components in the correct
 * order for those components. Components are encoded as a string of letters representing
 * the desired components:
 *   <ul>
 *     <li><i>p</i> - prefixes
 *     <li><i>g</i> - given name
 *     <li><i>m</i> - middle names
 *     <li><i>f</i> - family name
 *     <li><i>s</i> - suffixes
 *   </ul>
 * <p>
 * For example, the string "pf" would mean to only format any prefixes and family names 
 * together and leave out all the other parts of the name.<p>
 * 
 * The components can be listed in any order in the string. The <i>components</i> option 
 * overrides the <i>style</i> option if both are specified.
 * </ul>
 * 
 * Formatting names is a locale-dependent function, as the order of the components 
 * depends on the locale. The following explains some of the details:<p>
 * 
 * <ul>
 * <li>In Western countries, the given name comes first, followed by a space, followed 
 * by the family name. In Asian countries, the family name comes first, followed immediately
 * by the given name with no space. But, that format is only used with Asian names written
 * in ideographic characters. In Asian countries, especially ones where both an Asian and 
 * a Western language are used (Hong Kong, Singapore, etc.), the convention is often to 
 * follow the language of the name. That is, Asian names are written in Asian style, and 
 * Western names are written in Western style. This class follows that convention as
 * well. 
 * <li>In other Asian countries, Asian names
 * written in Latin script are written with Asian ordering. eg. "Xu Ping-an" instead
 * of the more Western order "Ping-an Xu", as the order is thought to go with the style
 * that is appropriate for the name rather than the style for the language being written.
 * <li>In some Spanish speaking countries, people often take both their maternal and
 * paternal last names as their own family name. When formatting a short or medium style
 * of that family name, only the paternal name is used. In the long style, all the names
 * are used. eg. "Juan Julio Raul Lopez Ortiz" took the name "Lopez" from his father and 
 * the name "Ortiz" from his mother. His family name would be "Lopez Ortiz". The formatted
 * short style of his name would be simply "Juan Lopez" which only uses his paternal
 * family name of "Lopez".
 * <li>In many Western languages, it is common to use auxillary words in family names. For
 * example, the family name of "Ludwig von Beethoven" in German is "von Beethoven", not 
 * "Beethoven". This class ensures that the family name is formatted correctly with 
 * all auxillary words.   
 * </ul>
 * 
 * @constructor
 * @param {Object} options A set of options that govern how the formatter will behave
 */
ilib.NameFmt = function(options) {
	this.style = "short";
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		
		if (options.style) {
			this.style = options.style;
		}
		
		if (options.components) {
			this.components = options.components;
		}
	}
	
	// set up defaults in case we need them
	this.defaultEuroTemplate = new ilib.String("{prefix} {givenName} {middleName} {familyName}{suffix}");
	this.defaultAsianTemplate = new ilib.String("{prefix}{familyName}{givenName}{middleName}{suffix}");
	this.useFirstFamilyName = false;

	switch (this.style) {
		default:
		case "s":
		case "short":
			this.style = "short";
			break;
		case "m":
		case "medium":
			this.style = "medium";
			break;
		case "l":
		case "long":
			this.style = "long";
			break;
		case "f":
		case "full":
			this.style = "full";
			break;
	}

	this.locale = this.locale || new ilib.Locale();
	var spec = this.locale.getSpec().replace(/-/g, "_");
	if (typeof(ilib.data.nameInfo[spec]) === 'undefined') {
		/**
		 * @private
		 */
		this.info = ilib.mergeLocData("name", this.locale);
		if (this.info) {
			ilib.data.nameInfo[spec] = this.info;
			this._init();
			if (options && typeof(options.onLoad) === 'function') {
				options.onLoad(this);
			}
		} else if (typeof(ilib._load) === 'function') {
			// locale is not preassembled, so attempt to load it dynamically
			var files = ilib.getLocFiles("locale", this.locale, "name");
			
			ilib._load(files, function(arr) {
				this.info = {};
				for (var i = 0; i < arr.length; i++) {
					if (typeof(arr[i]) !== 'undefined') {
						this.info = ilib.merge(this.info, arr[i]);
					}
				}
				
				ilib.data.nameInfo[spec] = this.info;
				this._init();
				if (options && typeof(options.onLoad) === 'function') {
					options.onLoad(this);
				}
			}.bind(this));
		} else {
			// no data other than the generic shared data
			this.info = ilib.data.name;
			ilib.data.nameInfo[spec] = this.info;
			this._init();
			if (options && typeof(options.onLoad) === 'function') {
				options.onLoad(this);
			}
		}
	} else {
		this.info = ilib.data.nameInfo[spec];
		this._init();
		if (options && typeof(options.onLoad) === 'function') {
			options.onLoad(this);
		}
	}
};

ilib.NameFmt.prototype = {
	/**                          
	 * @protected
	 */
	_init: function() {
		if (this.components) {
			var valids = {"p":1,"g":1,"m":1,"f":1,"s":1},
				arr = this.components.split("");
			this.comps = {};
			for (var i = 0; i < arr.length; i++) {
				if (valids[arr[i].toLowerCase()]) {
					this.comps[arr[i].toLowerCase()] = true;
				}
			}
		} else {
			this.comps = this.info.components[this.style];
		}

		this.template = new ilib.String(this.info.format);
		
		if (this.locale.language === "es" && (this.style !== "long" && this.style !== "full")) {
			this.useFirstFamilyName = true;	// in spanish, they have 2 family names, the maternal and paternal
		}

		this.isAsianLocale = (this.info.nameStyle === "asian");
	},

	/**
	 * @protected
	 * adjoin auxillary words to their head words
	 */
	_adjoinAuxillaries: function (parts, namePrefix) {
		var start, i, prefixArray, prefix, prefixLower;
		
		//console.info("_adjoinAuxillaries: finding and adjoining aux words in " + parts.join(' '));
		
		if ( this.info.auxillaries && (parts.length > 2 || namePrefix) ) {
			for ( start = 0; start < parts.length-1; start++ ) {
				for ( i = parts.length; i > start; i-- ) {
					prefixArray = parts.slice(start, i);
					prefix = prefixArray.join(' ');
					prefixLower = prefix.toLowerCase();
					prefixLower = prefixLower.replace(/[,\.]/g, '');  // ignore commas and periods
					
					//console.info("_adjoinAuxillaries: checking aux prefix: '" + prefixLower + "' which is " + start + " to " + i);
					
					if ( prefixLower in this.info.auxillaries ) {
						//console.info("Found! Old parts list is " + JSON.stringify(parts));
						parts.splice(start, i+1-start, prefixArray.concat(parts[i]));
						//console.info("_adjoinAuxillaries: Found! New parts list is " + JSON.stringify(parts));
						i = start;
					}
				}
			}
		}
		
		//console.info("_adjoinAuxillaries: done. Result is " + JSON.stringify(parts));

		return parts;
	},

	/**
	 * Return the locale for this formatter instance.
	 * @return {ilib.Locale} the locale instance for this formatter
	 */
	getLocale: function () {
		return this.locale;
	},
	
	/**
	 * Return the style of names returned by this formatter
	 * @return {string} the style of names returned by this formatter
	 */
	getStyle: function () {
		return this.style;
	},
	
	/**
	 * Return the list of components used to format names in this formatter
	 * @return {string} the list of components
	 */
	getComponents: function () {
		return this.components;
	},
	
	/**
	 * Format the name for display in the current locale with the options set up
	 * in the constructor of this formatter instance.<p>
	 * 
	 * If the name does not contain all the parts required for the style, those parts
	 * will be left blank.<p>
	 * 
	 * There are two basic styles of formatting: European, and Asian. If this formatter object
	 * is set for European style, but an Asian name is passed to the format method, then this
	 * method will format the Asian name with a generic Asian template. Similarly, if the
	 * formatter is set for an Asian style, and a European name is passed to the format method,
	 * the formatter will use a generic European template.<p>
	 * 
	 * This means it is always safe to format any name with a formatter for any locale. You should
	 * always get something at least reasonable as output.<p>
	 * 
	 * @param {ilib.Name} name the name to format
	 * @return {string|undefined} the name formatted according to the style of this formatter instance
	 */
	format: function(name) {
		var formatted, temp, modified, isAsianName;
		
		if (!name || typeof(name) !== 'object') {
			return undefined;
		}
		
		if ((!name.givenName || ilib.Name._isEuroName(name.givenName)) &&
				 (!name.middleName || ilib.Name._isEuroName(name.middleName)) &&
				 (!name.familyName || ilib.Name._isEuroName(name.familyName))) {
			isAsianName = false;	// this is a euro name, even if the locale is asian
			modified = name.clone();
			
			// handle the case where there is no space if there is punctuation in the suffix like ", Phd". 
			// Otherwise, put a space in to transform "PhD" to " PhD"
			/*
			console.log("suffix is " + modified.suffix);
			if ( modified.suffix ) {
				console.log("first char is " + modified.suffix.charAt(0));
				console.log("isPunct(modified.suffix.charAt(0)) is " + ilib.CType.isPunct(modified.suffix.charAt(0)));
			}
			*/
			if (modified.suffix && ilib.CType.isPunct(modified.suffix.charAt(0)) === false) {
				modified.suffix = ' ' + modified.suffix; 
			}
			
			if (this.useFirstFamilyName && name.familyName) {
				var familyNameParts = modified.familyName.trim().split(' ');
				if (familyNameParts.length > 1) {
					familyNameParts = this._adjoinAuxillaries(familyNameParts, name.prefix);
				}	//in spain and mexico, we parse names differently than in the rest of the world
	
				modified.familyName = familyNameParts[0];
			}
		
			modified._joinNameArrays();
		} else {
			isAsianName = true;
			modified = name;
		}
		
		if (!this.template || isAsianName !== this.isAsianLocale) {
			temp = isAsianName ? this.defaultAsianTemplate : this.defaultEuroTemplate;
		} else {
			temp = this.template;
		}
		
		var parts = {
			prefix: this.comps["p"] && modified.prefix || "",
			givenName: this.comps["g"] && modified.givenName || "",
			middleName: this.comps["m"] && modified.middleName || "",
			familyName: this.comps["f"] && modified.familyName || "",
			suffix: this.comps["s"] && modified.suffix || ""
		};
		
		formatted = temp.format(parts);
		return formatted.replace(/\s+/g, ' ').trim();
	}
};
