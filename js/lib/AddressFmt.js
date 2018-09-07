/*
 * AddressFmt.js - Format an address
 * 
 * Copyright © 2013-2015, 2018, JEDLSoft
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

// !data address addressres regionnames

var ilib = require("./ilib.js");
var Utils = require("./Utils.js");
var JSUtils = require("./JSUtils.js");

var Locale = require("./Locale.js");
var Address = require("./Address.js");
var IString = require("./IString.js");
var ResBundle = require("./ResBundle.js");

/**
 * @class
 * Create a new formatter object to format physical addresses in a particular way.
 *
 * The options object may contain the following properties, both of which are optional:
 *
 * <ul>
 * <li><i>locale</i> - the locale to use to format this address. If not specified, it uses the default locale
 * 
 * <li><i>style</i> - the style of this address. The default style for each country usually includes all valid 
 * fields for that country.
 * 
 * <li><i>onLoad</i> - a callback function to call when the address info for the
 * locale is fully loaded and the address has been parsed. When the onLoad 
 * option is given, the address formatter object 
 * will attempt to load any missing locale data using the ilib loader callback.
 * When the constructor is done (even if the data is already preassembled), the 
 * onLoad function is called with the current instance as a parameter, so this
 * callback can be used with preassembled or dynamic loading or a mix of the two. 
 * 
 * <li><i>sync</i> - tell whether to load any missing locale data synchronously or 
 * asynchronously. If this option is given as "false", then the "onLoad"
 * callback must be given, as the instance returned from this constructor will
 * not be usable for a while. 
 *
 * <li><i>loadParams</i> - an object containing parameters to pass to the 
 * loader callback function when locale data is missing. The parameters are not
 * interpretted or modified in any way. They are simply passed along. The object 
 * may contain any property/value pairs as long as the calling code is in
 * agreement with the loader callback function as to what those parameters mean.
 * </ul>
 * 
 * 
 * @constructor
 * @param {Object} options options that configure how this formatter should work
 * Returns a formatter instance that can format multiple addresses.
 */
var AddressFmt = function(options) {
	this.sync = true;
	this.styleName = 'default';
	this.loadParams = {};
	this.locale = new Locale();
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new Locale(options.locale) : options.locale;
		}
		
		if (typeof(options.sync) !== 'undefined') {
			this.sync = (options.sync == true);
		}
		
		if (options.style) {
			this.styleName = options.style;
		}
		
		if (options.loadParams) {
			this.loadParams = options.loadParams;
		}
	}
	
	// console.log("Creating formatter for region: " + this.locale.region);
	Utils.loadData({
		name: "address.json",
		object: "AddressFmt", 
		locale: this.locale,
		sync: this.sync, 
		loadParams: this.loadParams, 
		callback: ilib.bind(this, function(info) {
			if (!info || JSUtils.isEmpty(info)) {
				// load the "unknown" locale instead
				Utils.loadData({
					name: "address.json",
					object: "AddressFmt", 
					locale: new Locale("XX"),
					sync: this.sync, 
					loadParams: this.loadParams, 
					callback: ilib.bind(this, function(info) {
						this.info = info;
						this._init();
						if (options && typeof(options.onLoad) === 'function') {
							options.onLoad(this);
						}
					})
				});
			} else {
				this.info = info;
				this._init();
				if (options && typeof(options.onLoad) === 'function') {
					options.onLoad(this);
				}
			}
		})
	});
};

/**
 * @private
 */
AddressFmt.prototype._init = function () {
	this.style = this.info && this.info.formats && this.info.formats[this.styleName];
	
	// use generic default -- should not happen, but just in case...
	this.style = this.style || (this.info && this.info.formats && this.info.formats["default"]) || "{streetAddress}\n{locality} {region} {postalCode}\n{country}";
};

/**
 * This function formats a physical address (Address instance) for display. 
 * Whitespace is trimmed from the beginning and end of final resulting string, and 
 * multiple consecutive whitespace characters in the middle of the string are 
 * compressed down to 1 space character.
 * 
 * If the Address instance is for a locale that is different than the locale for this
 * formatter, then a hybrid address is produced. The country name is located in the
 * correct spot for the current formatter's locale, but the rest of the fields are
 * formatted according to the default style of the locale of the actual address.
 * 
 * Example: a mailing address in China, but formatted for the US might produce the words
 * "People's Republic of China" in English at the last line of the address, and the 
 * Chinese-style address will appear in the first line of the address. In the US, the
 * country is on the last line, but in China the country is usually on the first line.
 *
 * @param {Address} address Address to format
 * @returns {string} Returns a string containing the formatted address
 */
AddressFmt.prototype.format = function (address) {
	var ret, template, other, format;
	
	if (!address) {
		return "";
	}
	// console.log("formatting address: " + JSON.stringify(address));
	if (address.countryCode && 
			address.countryCode !== this.locale.region && 
			Locale._isRegionCode(this.locale.region) && 
			this.locale.region !== "XX") {
		// we are formatting an address that is sent from this country to another country,
		// so only the country should be in this locale, and the rest should be in the other
		// locale
		// console.log("formatting for another locale. Loading in its settings: " + address.countryCode);
		other = new AddressFmt({
			locale: new Locale(address.countryCode), 
			style: this.styleName
		});
		return other.format(address);
	}
	
	if (typeof(this.style) === 'object') {
		format = this.style[address.format || "latin"];
	} else {
		format = this.style;
	}
	
	// console.log("Using format: " + format);
	// make sure we have a blank string for any missing parts so that
	// those template parts get blanked out
	var params = {
		country: address.country || "",
		region: address.region || "",
		locality: address.locality || "",
		streetAddress: address.streetAddress || "",
		postalCode: address.postalCode || "",
		postOffice: address.postOffice || ""
	};
	template = new IString(format);
	ret = template.format(params);
	ret = ret.replace(/[ \t]+/g, ' ');
	ret = ret.replace("\n ", "\n");
	ret = ret.replace(" \n", "\n");
	return ret.replace(/\n+/g, '\n').trim();
};


/*
 * Return true if this is an asian locale.
 * @private
 * @returns {boolean} true if this is an asian locale, or false otherwise
 */
function isAsianLocale(locale) {
    return locale.language === "zh" || locale.language === "ja" || locale.language === "ko";
}

/*
 * Invert the properties and values, filtering out all the values with numbers.
 * @private
 * @returns {Object} the inverted object
 */
function invertAndFilter(object) {
    var ret = {};
    for (var p in object) {
        if (object.hasOwnProperty(p) && !object[p].match(/\d/)) {
            ret[object[p]] = p;
        }
    }
    
    return ret;
}

/**
 * Return information about the address format that can be used
 * by UI builders to display a locale-sensitive set of input fields
 * based on the current formatter's settings.<p>
 *
 * The object returned by this method is an array of address rows. Each
 * row is itself an array which may have one to four address
 * components in that row. Each address component is an object
 * that contains a component property and a label to display
 * with it. The label is written in the given locale, or the
 * locale of this formatter if it was not given.<p>
 *
 * Optionally, if the address component is constrained to a
 * particular pattern or to a fixed list of possible values, then
 * the constraint rules are given in the "constraint" property.<p>
 *
 * If the constraint is that the address component must conform to a
 * particular pattern, the regular expression that matches valid input
 * is returned in "constraint". Often, it is only the postal code
 * component that can be validated like this.<p>
 *
 * If the constraint is that the address component should be limited
 * to a fixed list of values, then the constraint property will be
 * set to an object that lists those values. The object maps codes for
 * each valid value to labels to show in the UI for that value.
 * The codes should not be shown to the user and are intended to
 * represent the values in code. The labels are translated to the given
 * locale or to the locale of this formatter if it was not given. For
 * the most part, it is the region and country components that
 * are constrained in this way. The list of values are sorted by the
 * label where possible.<p>
 *
 * Here is what the result would look like for a US address:
 * <pre>
 * [
 *   [{
 *     "component": "streetAddress",
 *     "label": "Street Address"
 *   }],
 *   [{
 *     "component": "locality",
 *     "label": "City"
 *   },{
 *     "component": "region",
 *     "label": "State",
 *     "constraint": {
 *       "AL": "Alabama",
 *       "AK": "Alaska",
 *       "AZ": "Arizona",
 *       ...
 *       "WY": "Wyoming"
 *     }
 *   },{
 *     "component": "postalCode",
 *     "label": "Zip Code",
 *     "constraint": "[0-9]{5}(-[0-9]{4})?"
 *   }],
 *   [{
 *     "component": "country",
 *     "label": "Country",
 *     "constraint": {
 *       "AF": "Afghanistan",
 *       "AL": "Albania",
 *       "DZ": "Algeria",
 *       ...
 *       "ZW": "Zimbabwe"
 *     }
 *   }]
 * ]
 * </pre>
 * <p>
 * @example <caption>Example of calling the getFormatInfo method</caption>
 * 
 * // the AddressFmt should be created with the locale of the address you 
 * // would like the user to enter. For example, if you have a "country"
 * // selector, you would create a new AddressFmt instance each time the
 * // selector is changed.
 * new AddressFmt({
 *   locale: 'nl-NL', // for addresses in the Netherlands
 *   onLoad: ilib.bind(this, function(fmt) {
 *     fmt.getAddressFormatInfo({
 *       // The following is the locale of the UI you would like to see the labels
 *       // like "City" and "Postal Code" translated to. In this example, we
 *       // are showing an input form for Dutch addresses, but the labels are
 *       // written in US English.
 *       locale: "en-US", 
 *       onLoad: ilib.bind(this, function(rows) {
 *         // iterate through the rows array and dynamically create the input 
 *         // elements with the given labels
 *       })
 *     });
 *   })
 * });
 * 
 * @param {Locale|String=} locale the locale to translate the labels
 * to. If not given, the locale of the formatter will be used.
 * @param {boolean} sync true if this method should load the data
 * synchronously, false if async
 * @param {Function} callback a callback to call when the data
 * is ready
 * @returns {Array.<Object>} An array of rows of address components
 */
AddressFmt.prototype.getFormatInfo = function(locale, sync, callback) {
    var info;
    var loc = new Locale(this.locale);
    if (locale) {
        if (typeof(locale) === "string") {
            locale = new Locale(locale);
        }
        loc.language = locale.getLanguage();
        loc.spec = undefined;
    }

    Utils.loadData({
        name: "regionnames.json",
        object: "AddressFmt",
        locale: loc,
        sync: this.sync,
        loadParams: this.loadParams,
        callback: ilib.bind(this, function(regions) {
            this.regions = regions;

            new ResBundle({
                locale: loc,
                name: "addressres",
                sync: this.sync,
                loadParams: this.loadParams, 
                onLoad: ilib.bind(this, function (rb) {
                    var type, format, fields = this.info.fields;
                    if (this.info.multiformat) {
                        type = isAsianLocale(this.locale) ? "asian" : "latin";
                        fields = this.info.fields[type];
                    }

                    if (typeof(this.style) === 'object') {
                        format = this.style[type || "latin"];
                    } else {
                        format = this.style;
                    }
                    var localeAddress = new Address(" ", {locale: loc});

                    var rows = format.split(/\n/g);
                    info = rows.map(ilib.bind(this, function(row) {
                        return row.split("}").filter(function(component) {
                            return component.length > 0;
                        }).map(ilib.bind(this, function(component) {
                            var name = component.replace(/.*{/, "");
                            var obj = {
                                component: name,
                                label: rb.getStringJS(this.info.fieldNames[name])
                            };
                            var field = fields.filter(function(f) {
                                return f.name === name;
                            });
                            if (field && field[0] && field[0].pattern) {
                                if (typeof(field[0].pattern) === "string") {
                                    obj.constraint = field[0].pattern;
                                }
                            }
                            if (name === "country") {
                                obj.constraint = invertAndFilter(localeAddress.ctrynames);
                            } else if (name === "region" && this.regions[loc.getRegion()]) {
                                obj.constraint = this.regions[loc.getRegion()];
                            }
                            return obj;
                        }));
                    }));

                    if (callback && typeof(callback) === "function") {
                        callback(info);
                    }
                })
            });
        })
    });

    return info;
};

module.exports = AddressFmt;
