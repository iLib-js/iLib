/*
 * phonegeo.js - Represent a phone number geolocator object.
 * 
 * Copyright © 2014, JEDLSoft
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

/*
!depends 
ilibglobal.js 
locale.js 
localeinfo.js
phone/numplan.js
phone/phoneloc.js
phone/phonenum.js
*/

// !data iddarea area

/**
 * Create a geographically located phone number. Because this class inherits from the
 * phone number class, you can use it as a regular phone number that happens to have
 * extra geolocation information associated with it. The parent class parses the
 * number and the current class adds the location information.<p>
 * 
 * The location of the number is calculated according to the following rules:
 * 
 * <ol>
 * <li>If the areaCode property is undefined or empty, or if the number specifies a 
 * country code for which we do not have information, then the area property may be 
 * missing from the returned object. In this case, only the country object will be returned.
 * 
 * <li>If there is no area code, but there is a mobile prefix, service code, or emergency 
 * code, then a fixed string indicating the type of number will be returned.
 * 
 * <li>The country object is filled out according to the countryCode property of the phone
 * number. 
 * 
 * <li>If the phone number does not have an explicit country code, the MCC will be used if
 * it is available. The country code can be gleaned directly from the MCC. If the MCC 
 * of the carrier to which the phone is currently connected is available, it should be 
 * passed in so that local phone numbers will look correct.
 * 
 * <li>If the country's dialling plan mandates a fixed length for phone numbers, and a 
 * particular number exceeds that length, then the area code will not be given on the
 * assumption that the number has problems in the first place and we cannot guess
 * correctly.
 * </ol>
 * 
 * The returned area property varies in specificity according
 * to the locale. In North America, the area is no finer than large parts of states
 * or provinces. In Germany and the UK, the area can be as fine as small towns.<p>
 * 
 * If the number passed in is invalid, no geolocation will be performed. If the location
 * information about the country where the phone number is located is not available,
 * then the area information will be missing and only the country will be available.<p>
 * 
 * See the description of {@link ilib.PhoneNumber} for details on what properties
 * this parameter may contain. This class adds one more property to the possible
 * parameters:
 * 
 * <ul>
 * <li><i>displayLocale</i> The locale parameter is used to parse the phone number,
 * but the displayLocale is used to load translations of the names of regions and
 * areas if available. For example, if the locale property is "de-DE" (German for Germany)
 * and the displayLocale property is given as "en-US" (English for USA), then this class
 * would correctly parse a phone number in Munich and return the area code name as "Munich"
 * instead of the name in German "München". The default display locale is the current 
 * ilib locale. If translations are not available, the region and area names are given 
 * in English, which should always be available.
 * </ul>
 * 
 * @class
 * @constructor
 * @param {string|ilib.PhoneNumber} number if this parameter is given as a string, it
 * should be a number to parse. If it is given as a phone number object, then this
 * instance will be initialized from the given phone number
 * @param {Object} params parameters controlling the parsing of the phone number.

 */
ilib.GeoPhoneNumber = function(params) {
	var sync = true,
		loadParams = {};

	this.locale = new ilib.Locale();

	if (params) {
		if (params.locale) {
			this.locale = new ilib.Locale.PhoneLoc(params);
		} 
		if (typeof(params.sync) !== 'undefined') {
			sync = (params.sync == true);
		}
		
		if (params.loadParams) {
			loadParams = params.loadParams;
		}
	}
	this.plan = new ilib.NumPlan({locale: this.locale});

	ilib.loadData({
		name: "iddarea.json",
		object: ilib.GeoPhoneNumber,
		nonlocale: true,
		sync: sync,
		loadParams: loadParams,
		callback: ilib.bind(this, function (data) {
			this.regiondata = data;
		})
	});
};

ilib.GeoPhoneNumber.prototype = new ilib.PhoneNumber();
ilib.GeoPhoneNumber.prototype.parent = ilib.PhoneNumber;
ilib.GeoPhoneNumber.prototype.constructor = ilib.GeoPhoneNumber;

ilib.GeoPhoneNumber.prototype = {
	_matchPrefix: function(prefix, table)  {
		var i, matchedDot, matchesWithDots = [], entry;

		if (table[prefix]) {
			return table[prefix];
		}
		for (entry in table) {
			if (entry && typeof(entry) === 'string') {
				i = 0;
				matchedDot = false;
				while (i < entry.length && (entry.charAt(i) === prefix.charAt(i) || entry.charAt(i) === '.')) {
					if (entry.charAt(i) === '.') {
						matchedDot = true;
					}
					i++;
				}
				if (i >= entry.length) {
					if (matchedDot) {
						matchesWithDots.push(entry);
					} else {
						return table[entry];
					}
				}
			}
		}

		// match entries with dots last, so sort the matches so that the entry with the 
		// most dots sorts last. The entry that ends up at the beginning of the list is
		// the best match because it has the fewest dots
		if (matchesWithDots.length > 0) {
			matchesWithDots.sort(function (left, right) {
				return (right < left) ? -1 : ((left < right) ? 1 : 0);
			});
			return table[matchesWithDots[0]];
		}
		
		return undefined;
	},
	_getAreaInfo: function(number, data) {
		var ret = {}, 
			region, 
			countryCode, 
			rb, 
			areaInfo, 
			temp, 
			areaCode, 
			geoTable, 
			plan,
			tempNumber, 
			prefix, 
			statesTable,
			locale,
			geoValue;

		prefix = number.areaCode || number.serviceCode;
		plan = this.plan;
		geoTable = data;

		if (prefix !== undefined) {
			if (plan.getExtendedAreaCode()) {

			} else if (!plan || 
					plan.getFieldLength('maxLocalLength') === undefined || 
					!number.subscriberNumber ||
					number.subscriberNumber.length <= plan.getFieldLength('maxLocalLength')) {
				if (geoTable) {
					areaCode = prefix.replace(/[wWpPtT\+#\*]/g, '');
					areaInfo = this._matchPrefix(areaCode, geoTable);

					if (areaInfo && areaInfo.sn && areaInfo.ln) {
						ret.area = {
							sn: areaInfo.sn,
							ln: areaInfo.ln
						};
					} else if (number.serviceCode) {
						ret.area = {
							sn: "Service Number",
							ln: "Service Number"
						};
					}
				} else {
					countryCode = ilib.Locale.PhoneLoc.prototype._mapRegiontoCC(this.locale.getRegion());
					if (countryCode !== "0" && this.regiondata) {
						temp = this.regiondata[countryCode];
						if (temp && temp.sn) {
							ret.country = {
								sn: temp.sn,
								ln: temp.ln,
								code: this.locale.getRegion()
							};
						}
					}
				}
			} else {
				countryCode = ilib.Locale.PhoneLoc.prototype._mapRegiontoCC(this.locale.getRegion());
				if (countryCode !== "0" && this.regiondata) {
					temp = this.regiondata[countryCode];
					if (temp && temp.sn) {
						ret.country = {
							sn: temp.sn,
							ln: temp.ln,
							code: this.locale.getRegion()
						};
					}
				}
			}

		} else if (number.mobilePrefix) {
			ret.area = {
				sn: "Mobile Number",
				ln: "Mobile Number"
			};
		} else if (number.emergency) {
			ret.area = {
				sn: "Emergency Services Number",
				ln: "Emergency Services Number"
			};
		}

		return ret;
	},
	/**
	 * Returns a the location of the given phone number, if known. 
	 * The returned object has 2 properties, each of which has an sn (short name) 
	 * and an ln (long name) string. Additionally, the country code, if given,
	 * includes the 2 letter ISO code for the recognized country.
	 *	 	{
	 *			"country": {
	 *	        	"sn": "North America",
	 *            	"ln": "North America and the Caribbean Islands",
	 *				"code": "us"
	 *         	 },
	 *         	 "area": {
	 *       	    "sn": "California",
	 *          	 "ln": "Central California: San Jose, Los Gatos, Milpitas, Sunnyvale, Cupertino, Gilroy"
	 *         	 }
	 *    	 }
	 * 
	 * The location name is subject to the following rules:
	 *
	 * If the areaCode property is undefined or empty, or if the number specifies a 
	 * country code for which we do not have information, then the area property may be 
	 * missing from the returned object. In this case, only the country object will be returned.
	 *
	 * If there is no area code, but there is a mobile prefix, service code, or emergency 
	 * code, then a fixed string indicating the type of number will be returned.
	 * 
	 * The country object is filled out according to the countryCode property of the phone
	 * number. 
	 * 
	 * If the phone number does not have an explicit country code, the MCC will be used if
	 * it is available. The country code can be gleaned directly from the MCC. If the MCC 
	 * of the carrier to which the phone is currently connected is available, it should be 
	 * passed in so that local phone numbers will look correct.
	 * 
	 * If the country's dialling plan mandates a fixed length for phone numbers, and a 
	 * particular number exceeds that length, then the area code will not be given on the
	 * assumption that the number has problems in the first place and we cannot guess
	 * correctly.
	 *
	 * The returned area property varies in specificity according
	 * to the locale. In North America, the area is no finer than large parts of states
	 * or provinces. In Germany and the UK, the area can be as fine as small towns.
	 *
	 * The strings returned from this function are already localized to the 
	 * given locale, and thus are ready for display to the user.
	 *
	 * If the number passed in is invalid, an empty object is returned. If the location
	 * information about the country where the phone number is located is not available,
	 * then the area information will be missing and only the country will be returned.
	 * 
	 * @param {Object} number An ilib.PhoneNumber instance containing a phone number to locate
	 * @return {Object} 
	 */
	locate: function(number) {
		var ret = {}, 
			region, 
			countryCode, 
			temp, 
			areaCode, 
			geoTable, 
			plan,
			tempNumber, 
			prefix, 
			statesTable,
			locale,
			areaData,
			areaResult;

		if (number === undefined || typeof(number) !== 'object' || !(number instanceof ilib.PhoneNumber)) {
			return ret;
		}

		areaData = this.regiondata;
		// console.log("GeoLocator.locate: looking for geo for number " + JSON.stringify(number));
		region = this.locale.getRegion();
		if (number.countryCode !== undefined) {
			countryCode = number.countryCode.replace(/[wWpPtT\+#\*]/g, '');
			temp = areaData[countryCode];
			locale = new ilib.Locale.PhoneLoc({countryCode: countryCode});
			if (locale.getRegion() !== this.locale.getRegion()) {
				this.plan = new ilib.NumPlan({locale:locale});
			}
			ret.country = {
				sn: temp.sn,
				ln: temp.ln,
				code: locale.getRegion()
			};
		}
		
		if (!plan) {
			plan = this.plan;
			locale = this.locale;
		}
		
		ilib.loadData({
			name: "area.json",
			object: ilib.GeoPhoneNumber,
			locale: locale,
			sync: true,
			loadParams: {
				returnOne: true
			},
			callback: ilib.bind(this, function (areadata) {
				this.areadata = areadata;
				areaResult = this._getAreaInfo(number, this.areadata);
				ret = ilib.merge(ret, areaResult)
				
				/*if (params && typeof(params.onLoad) === 'function') {
					params.onLoad(this);
				}*/
			})
		});

		if (ret.country === undefined) {
			countryCode = ilib.Locale.PhoneLoc.prototype._mapRegiontoCC(region);
			if (countryCode !== "0" && this.regiondata) {
				temp = this.regiondata[countryCode];
				if (temp && temp.sn) {
					ret.country = {
						sn: temp.sn,
						ln: temp.ln,
						code: this.locale.getRegion()
					};
				}
			}
		}
		
		return ret;
	},
	/**
	 * Returns a string that describes the ISO-3166-2 country code of the given phone
	 * number. 
	 *
	 * 
	 * If the phone number is a local phone number and does not contain
	 * any country information, this routine will return the region for the current
	 * formatter instance.
	 *
	 * @param {Object} number An ilib.PhoneNumber instance
	 * @return {string}
	 */
	country: function(number) {
		var countryCode, region;
		var phoneloc = new ilib.Locale.PhoneLoc();

		if (!number || !(number instanceof ilib.PhoneNumber)) {
			return undefined;
		}

		region = (number.countryCode && phoneloc._mapCCtoRegion(number.countryCode)) ||
			(number.locale && number.locale.region) || 
			phoneloc.locale.getRegion() ||
			this.locale.getRegion() /*|| 
			enyo.g11n.phoneLocale().region*/;

		countryCode = number.countryCode || phoneloc._mapRegiontoCC(region);
		
		if (number.areaCode) {
			region = phoneloc._mapAreatoRegion(countryCode, number.areaCode);
		} else if (countryCode === "33" && number.serviceCode) {
			// french departments are in the service code, not the area code
			region = phoneloc._mapAreatoRegion(countryCode, number.serviceCode);
		}		
		return region;
	}
}