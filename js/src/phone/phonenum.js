/*
 * phonenum.js - Represent a phone number.
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
*/

// !data phone states

/**
 * Create a new phone number instance that parses the phone number parameter for its 
 * constituent parts, and store them as separate fields in the returned object.
 * 
 * The options object may include any of these properties:
 * 
 * <ul>
 * <li><i>locale</i> The locale with which to parse the number. This gives a clue as to which
 * numbering plan to use.
 * <li><i>mcc</i> The mobile carrier code (MCC) associated with the carrier that the phone is 
 * currently connected to, if known. This also can give a clue as to which numbering plan to
 * use
 * </ul>
 * 
 * This function is locale-sensitive, and will assume any number passed to it is
 * appropriate for the given locale. If the MCC is given, this method will assume
 * that numbers without an explicit country code have been dialled within the country
 * given by the MCC. This affects how things like area codes are parsed. If the MCC
 * is not given, this method will use the given locale to determine the country
 * code. If the locale is not explicitly given either, then this function uses the 
 * region of current locale as the default.<p>
 * 
 * The input number may contain any formatting characters for the given locale. Each 
 * field that is returned in the json object is a simple string of digits with
 * all formatting and whitespace characters removed.<p>
 * 
 * The number is decomposed into its parts, regardless if the number
 * contains formatting characters. If a particular part cannot be extracted from given 
 * number, the field will not be returned as a field in the object. If no fields can be
 * extracted from the number at all, then all digits found in the string will be 
 * returned in the subscriberNumber field. If the number parameter contains no 
 * digits, an empty object is returned.<p>
 * 
 * This instance can contain any of the following fields after parsing is done:
 * 
 * <ul>
 * <li>vsc - if this number starts with a VSC (Vertical Service Code, or "star code"), this field will contain the star and the code together
 * <li>iddPrefix - the prefix for international direct dialing. This can either be in the form of a plus character or the IDD access code for the given locale
 * <li>countryCode - if this number is an international direct dial number, this is the country code
 * <li>cic - for "dial-around" services (access to other carriers), this is the prefix used as the carrier identification code
 * <li>emergency - an emergency services number
 * <li>mobilePrefix - prefix that introduces a mobile phone number
 * <li>trunkAccess - trunk access code (long-distance access)
 * <li>serviceCode - like a geographic area code, but it is a required prefix for various services
 * <li>areaCode - geographic area codes
 * <li>subscriberNumber - the unique number of the person or company that pays for this phone line
 * <li>extension - in some countries, extensions are dialed directly without going through an operator or a voice prompt system. If the number includes an extension, it is given in this field.
 * <li>invalid - this property is added and set to true if the parser found that the number is invalid in the numbering plan for the country. This method will make its best effort at parsing, but any digits after the error will go into the subscriberNumber field
 * </ul>
 * 
 * The following rules determine how the number is parsed:
 * 
 * <ol>
 * <li>If the number starts with a character that is alphabetic instead of numeric, do
 * not parse the number at all. There is a good chance that it is not really a phone number.
 * In this case, an empty instance will be returned.
 * <li>If the phone number uses the plus notation or explicitly uses the international direct
 * dialing prefix for the given locale, then the country code is identified in 
 * the number. The rules of given locale are used to parse the IDD prefix, and then the rules
 * of the country in the prefix are used to parse the rest of the number.
 * <li>If a country code is provided as an argument to the function call, use that country's
 * parsing rules for the number. This is intended for programs like a Contacts application that 
 * know what the country is of the person that owns the phone number and can pass that on as 
 * a hint.
 * <li>If the appropriate locale cannot be easily determined, default to using the rules 
 * for the current user's region.
 * </ol>
 * 
 * Example: parsing the number "+49 02101345345-78" will give the following properties in the
 * resulting phone number instance:
 * 
 * <pre>
 *      {
 *        iddPrefix: "+",
 *        countryCode: "49",
 *        areaCode: "02101",
 *        subscriberNumber: "345345",
 *        extension: "78"
 *      }
 * </pre>
 *  
 * Note that in this example, because international direct dialing is explicitly used 
 * in the number, the part of this number after the IDD prefix and country code will be 
 * parsed exactly the same way in all locales with German rules (country code 49).
 *  
 * Regions currently supported are:
 *  
 * <ul>
 * <li>NANP (North American Numbering Plan) countries - USA, Canada, Bermuda, various Caribbean nations
 * <li>UK
 * <li>Republic of Ireland
 * <li>Germany
 * <li>France
 * <li>Spain
 * <li>Italy
 * <li>Mexico
 * <li>India
 * <li>People's Republic of China
 * <li>Netherlands
 * <li>Belgium
 * <li>Luxembourg
 * <li>Australia
 * <li>New Zealand
 * <li>Singapore
 * </ul>
 * 
 * @class
 * @constructor
 * @param {string|ilib.PhoneNumber} number A free-form phone number to be parsed, or another phone
 * number instance
 * @param {Object} options options that guide the parser in parsing the number 

 */
ilib.PhoneNumber = function(number, options) {
	var locale,
		plan,
		stateData,
		regionSettings;

	if (options) {
		this.locale = new ilib.PhoneLoc(options);
	} else {
		this.locale = new ilib.Locale();
	}

	if (!number || (typeof number === "string" && number.length === 0)) {
		return this;
	} else if (typeof number === "object") {
		ilib.PhoneNumber._deepCopy(number, this);
		return this;
	}

	// use ^ to indicate the beginning of the number, because certain things only match at the beginning
	number = "^" + number.replace(/\^/g, '');

	//console.log("PhoneNumber: locale is: " + this.locale + " parsing number: " + number);

	/*ilib.loadData({
		name: "idd.json",
		object: ilib.PhoneNumber,
		locale: "-",
		//sync: true, 
		callback: ilib.bind(this, function (data) {
			ilib.data.idd = data;
			if (options && typeof(options.onLoad) === 'function') {
				options.onLoad(this);
			}
		})
	});*/

	ilib.loadData({
		name: "states.json",
		object: ilib.PhoneNumber,
		locale: this.locale,
		sync: true,
		callback: ilib.bind(this, function (stdata) {
			if (!stdata) {
				stdata = {"states" : [[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1],[2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-3,-1,-1,-1,-1],[-4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]};
			}
			stateData = stdata;
			plan = new ilib.NumPlan({locale: this.locale});

			regionSettings = {
				stateData : stateData,
				plan: plan,
				handler : ilib._handlerFactory(this.locale, plan)
			};

			this._parseNumber(number, regionSettings);
			if (options && typeof(options.onLoad) === 'function') {
				options.onLoad(this);
			}
		})
	});
};

/**
 * 
 */
ilib.PhoneNumber._deepCopy = function(from, to) {
	var prop;

	for (prop in from) {
		if (prop) {
			if (typeof(from[prop]) === 'object') {
				to[prop] ={};
				ilib.PhoneNumber._deepCopy(from[prop], to[prop]);
			} else {
				to[prop] = from[prop];
			}
		}
	}
	return to;
};

/**
 * Parse an IMSI number.
 *
 * @static
 * @protected
 * @param {string} imsi IMSI string to parse
 * @return {Object} components of the IMSI number
 */
ilib.PhoneNumber._parseImsi = function(imsi) {

};

ilib.PhoneNumber._stripFormatting = function(str) {
	var ret = "";
	var i;

	for (i = 0; i < str.length; i++) {
		if (ilib.PhoneNumber._getCharacterCode(str.charAt(i)) >= -1) {
			ret += str.charAt(i);
		}
	}
	return ret;
};

ilib.PhoneNumber._getCharacterCode = function(ch) {
	if (ch >= '0' && ch <= '9') {
			return ch - '0';
		}
	switch (ch) {
	case '+':
		return 10;
	case '*':
		return 11;
	case '#':
		return 12;
	case '^':
		return 13;
	case 'p':		// pause chars
	case 'P':
	case 't':
	case 'T':
	case 'w':
	case 'W':
		return -1;
	case 'x':
	case 'X':		// extension char
		return -1;
	}
	return -2;
};

ilib.PhoneNumber._states = [
	"none",
	"unknown",
	"plus",
	"idd",
	"cic",
	"service",
	"cell",
	"area",
	"vsc",
	"country",
	"personal",
	"special",
	"trunk",
	"premium",
	"emergency",
	"service2",
	"service3",
	"service4",
	"cic2",
	"cic3",
	"start",
	"local"
];

ilib.PhoneNumber.prototype = {
	/**
	 * @protected
	 */
	_parseNumber: function(number, regionData) {
		var locale,
			plan,
			stateData,
			i, ch,
			regionSettings,
			state = 0, //begin state
			newState,
			stateTable,
			dot,
			handlerMethod,
			result,
			temp,
			numplan;

		number = ilib.PhoneNumber._stripFormatting(number);
		regionSettings = regionData;
		stateData = regionSettings.stateData;
		dot = 14; //[Q] special transition which matches all characters. See AreaCodeTableMaker.java

		i = 0;
		while (i < number.length) {
			ch = ilib.PhoneNumber._getCharacterCode(number.charAt(i));
			if (ch >= 0) {
				newState = stateData.states[state][ch];
	
				if (newState === -1 && stateData.states[state][dot] !== -1 ) {
					// check if this character can match the dot instead
					newState = stateData.states[state][dot];
					//console.log("char " + ch + " doesn't have a transition. Using dot to transition to state " + newState);
				}
	
				if (newState < 0) {
					// this final state. First convert the state to a positive array index
					// in order to look up the name of the handler function name in the array
					newState = -newState -1;
					handlerMethod = ilib.PhoneNumber._states[newState];
	
					if (number.charAt(0) === '^') {
						result = regionSettings.handler[handlerMethod](number.slice(1), i-1, this, regionSettings);
					} else {
						result = regionSettings.handler[handlerMethod](number, i, this, regionSettings);
					}
	
					// reparse whatever is left
					number = result.number;
					i= 0;
					//console.log("reparsing with new number: " +  number);
					state = 0;
					// if the handler requested a special sub-table, use it for this round of parsing,
					// otherwise, set it back to the regular table to continue parsing
					if (result.states !== undefined) {
						locale = result.locale; // push;
						ilib.loadData({
							name: result.states,
							object: ilib.PhoneNumber,
							locale: locale,
							callback: ilib.bind(this, function (data) {
								stateData = data;
								// recursively call the parser with the new states data
								numplan = new ilib.NumPlan({locale:locale});
								regionSettings = {
									stateData: stateData,
									plan: numplan,
									handler: ilib._handlerFactory(this.locale, plan)
								};
								//this._parseNumber(regionSettings);
								/*if (options && typeof(options.onLoad) === 'function') {
									options.onLoad(this);
								}*/
							})
						})
					} else if (result.skipTrunk !== undefined) {
						ch = ilib.PhoneNumber._getCharacterCode(regionSettings.plan.getTrunkCode());
						state = stateData[state][ch];
					}
				} else {
					// console.info("recognized digit " + ch + " continuing...");
					// recognized digit, so continue parsing
					state = newState;
					i++;
				}
			} else if (ch === -1) {
				// non-transition character, continue parsing in the same state
				i++;
			} else {
				// should not happen
				// console.info("skipping character " + ch);
				// not a digit, plus, pound, or star, so this is probably a formatting char. Skip it.
				i++;
			}
			}
			if (state > 0 && i > 0) {
				// we reached the end of the phone number, but did not finish recognizing anything. 
				// Default to last resort and put everything that is left into the subscriber number
				//console.log("Reached end of number before parsing was complete. Using handler for method none.")
				if (number.charAt(0) === '^') {
					result = regionSettings.handler.none(number.slice(1), i-1, this, regionSettings);
				} else {
					result = regionSettings.handler.none(number, i, this, regionSettings);
				}
		}
	},
	/**
	 * @protected
	 */
	_getPrefix: function() {
		return this.areaCode || this.serviceCode || this.mobilePrefix || "";
	},
	_xor : function(left, right) {
		if ((left === undefined && right === undefined ) || (left !== undefined && right !== undefined)) {
			return false;
		} else {
			return true;
		}
	},
	/**
	 * This routine will compare the two phone numbers in an locale-sensitive
	 * manner to see if they possibly reference the same phone number.<p>
	 * 
	 * In many places,
	 * there are multiple ways to reach the same phone number. In North America for 
	 * example, you might have a number with the trunk access code of "1" and another
	 * without, and they reference the exact same phone number. This is considered a
	 * strong match. For a different pair of numbers, one may be a local number and
	 * the other a full phone number with area code, which may reference the same 
	 * phone number if the local number happens to be located in that area code. 
	 * However, you cannot say for sure if it is in that area code, so it will 
	 * be considered a somewhat weaker match.<p>
	 *  
	 * Similarly, in other countries, there are sometimes different ways of 
	 * reaching the same destination, and the way that numbers
	 * match depends on the locale.<p>
	 * 
	 * The various phone number fields are handled differently for matches. There
	 * are various fields that do not need to match at all. For example, you may
	 * type equally enter "00" or "+" into your phone to start international direct
	 * dialling, so the iddPrefix field does not need to match at all.<p> 
	 * 
	 * Typically, fields that require matches need to match exactly if both sides have a value 
	 * for that field. If both sides specify a value and those values differ, that is
	 * a strong non-match. If one side does not have a value and the other does, that 
	 * causes a partial match, because the number with the missing field may possibly
	 * have an implied value that matches the other number. For example, the numbers
	 * "650-555-1234" and "555-1234" have a partial match as the local number "555-1234"
	 * might possibly have the same 650 area code as the first number, and might possibly
	 * not. If both side do not specify a value for a particular field, that field is 
	 * considered matching.<p>
	 *  
	 * The values of following fields are ignored when performing matches:
	 * 
	 * <ul>
	 * <li>vsc
	 * <li>iddPrefix
	 * <li>cic
	 * <li>trunkAccess
	 * </ul>
	 * 
	 * The values of the following fields matter if they do not match:
	 *   
	 * <ul>
	 * <li>countryCode - A difference causes a moderately strong problem except for 
	 * certain countries where there is a way to access the same subscriber via IDD 
	 * and via intranetwork dialling
	 * <li>mobilePrefix - A difference causes a possible non-match
	 * <li>serviceCode - A difference causes a possible non-match
	 * <li>areaCode - A difference causes a possible non-match
	 * <li>subscriberNumber - A difference causes a very strong non-match
	 * <li>extension - A difference causes a minor non-match
	 * </ul>
	 *  
	 * @param {string|ilib.PhoneNumber} second phone number to compare this one to
	 * @return {number} non-negative integer describing the percentage quality of the 
	 * match. 100 means a very strong match (100%), and lower numbers are less and 
	 * less strong, down to 0 meaning not at all a match. 
	 */
	compare: function (other) {
		var match = 100,
			FRdepartments = {"590":1, "594":1, "596":1, "262":1},
			ITcountries = {"378":1, "379":1},
			thisPrefix,
			otherPrefix,
			currentCountryCode = ilib.PhoneLoc._mapRegiontoCC(this.locale.region);

		// subscriber number must be present and must match
		if (!this.subscriberNumber || !other.subscriberNumber || this.subscriberNumber !== other.subscriberNumber) {
			return 0;
		}

		// extension must match if it is present
		if (this._xor(this.extension, other.extension) || this.extension !== other.extension) {
			return 0;
		}

		if (this._xor(this.countryCode, other.countryCode)) {
			// if one doesn't have a country code, give it some demerit points, but if the
			// one that has the country code has something other than the current country
			// add even more. Ignore the special cases where you can dial the same number internationally or via 
			// the local numbering system
			switch (this.locale.region) {
			case 'FR':
				if (this.countryCode in FRdepartments || other.countryCode in FRdepartments) {
					if (this.areaCode !== other.areaCode || this.mobilePrefix !== other.mobilePrefix) {
						match -= 100;
					}
				} else {
					match -= 16;
				}
				break;
			case 'IT':
				if (this.countryCode in ITcountries || other.countryCode in ITcountries) { 
					if (this.areaCode !== other.areaCode) {
						match -= 100;
					}
				} else {
					match -= 16;
				}
				break;
			default:
				match -= 16;
				if ((this.countryCode !== undefined && this.countryCode !== currentCountryCode) || 
					(other.countryCode !== undefined && other.countryCode !== currentCountryCode)) {
					match -= 16;
				}
			}
		} else if (this.countryCode !== other.countryCode) {

		}

		if (this._xor(this.serviceCode, other.serviceCode)) {
			match -= 20;
		} else if (this.serviceCode !== other.serviceCode) {
			match -= 100;
		}

		if (this._xor(this.mobilePrefix, other.mobilePrefix)) {
			match -= 20;
		} else if (this.mobilePrefix !== other.mobilePrefix) {
			match -= 100;
		}

		if (this._xor(this.areaCode, other.areaCode)) {
			// one has an area code, the other doesn't, so dock some points. It could be a match if the local
			// number in the one number has the same implied area code as the explicit area code in the other number.
			match -= 12;
		} else if (this.areaCode !== other.areaCode) {
			match -= 100;
		}

		thisPrefix = this._getPrefix();
		otherPrefix = other._getPrefix();
		
		if (thisPrefix && otherPrefix && thisPrefix !== otherPrefix) {
			match -= 100;
		}
		
		// make sure we are between 0 and 100
		if (match < 0) {
			match = 0;	
		} else if (match > 100) {
			match = 100;
		}

		return match;
	},
	
	/**
	 * Determine whether or not the other phone number is exactly equal to the current one.<p>
	 *  
	 * The difference between the compare method and the equals method is that the compare 
	 * method compares normalized numbers with each other and returns the degree of match,
	 * whereas the equals operator returns true iff the two numbers contain the same fields
	 * and the fields are exactly the same. Functions and other non-phone number properties
	 * are not compared.
	 * @param {string|ilib.PhoneNumber} other another phone number to compare to this one
	 * @return {boolean} true if the numbers are the same, false otherwise
	 */
	equals: function equals(other) {
		var p;
		
		if (other.locale && this.locale && !this.locale.equals(other.locale) && (!this.countryCode || !other.countryCode)) {
			return false;
		}
		
		for (p in other) {
			if (p !== undefined && this[p] !== undefined && typeof(this[p]) !== 'object') {
				if (other[p] === undefined) {
					console.error("PhoneNumber.equals: other is missing property " + p + " which has the value " + this[p] + " in this");
					console.error("this is : " + JSON.stringify(this));
					console.error("other is: " + JSON.stringify(other));
					return false;
				}
				if (this[p] !== other[p]) {
					console.error("PhoneNumber.equals: difference in property " + p);
					console.error("this is : " + JSON.stringify(this));
					console.error("other is: " + JSON.stringify(other));
					return false;
				}
			}
		}
		for (p in other) {
			if (p !== undefined && other[p] !== undefined && typeof(other[p]) !== 'object') {
				if (this[p] === undefined) {
					console.error("PhoneNumber.equals: this is missing property " + p + " which has the value " + other[p] + " in the other");
					console.error("this is : " + JSON.stringify(this));
					console.error("other is: " + JSON.stringify(other));
					return false;
				}
				if (this[p] !== other[p]) {
					console.error("PhoneNumber.equals: difference in property " + p);
					console.error("this is : " + JSON.stringify(this));
					console.error("other is: " + JSON.stringify(other));
					return false;
				}
			}
		}
		return true;
	},
	
	/**
	 * This function normalizes the current phone number to a canonical format and returns a
	 * string with that phone number. If parts are missing, this function attempts to fill in 
	 * those parts.<p>
	 * 	  
	 * The options object contains a set of properties that can possibly help normalize
	 * this number by providing "extra" information to the algorithm. The options
	 * parameter may be null or an empty object if no hints can be determined before
	 * this call is made. If any particular hint is not
	 * available, it does not need to be present in the options object.<p>
	 * 
	 * The following is a list of hints that the algorithm will look for in the options
	 * object:
	 * 
	 * <ul>
	 * <li><i>mcc</i> the mobile carrier code of the current network upon which this 
	 * phone is operating. This is translated into an IDD country code. This is 
	 * useful if the number being normalized comes from CNAP (callerid) and the
	 * MCC is known.
	 * <li><i>defaultAreaCode</i> the area code of the phone number of the current
	 * device, if available. Local numbers in a person's contact list are most 
	 * probably in this same area code.
	 * <li><i>country</i> the 2 letter ISO 3166 code of the country if it is
	 * known from some other means such as parsing the physical address of the
	 * person associated with the phone number, or the from the domain name 
	 * of the person's email address
	 * <li><i>networkType</i> specifies whether the phone is currently connected to a
	 * CDMA network or a UMTS network. Valid values are the strings "cdma" and "umts".
	 * If one of those two strings are not specified, or if this property is left off
	 * completely, this method will assume UMTS.
	 * </ul>
	 * 
	 * The following are a list of options that control the behaviour of the normalization:
	 * 
	 * <ul>
	 * <li><i>assistedDialing</i> if this is set to true, the number will be normalized
	 * so that it can dialled directly on the type of network this phone is 
	 * currently connected to. This allows customers to dial numbers or use numbers 
	 * in their contact list that are specific to their "home" region when they are 
	 * roaming and those numbers would not otherwise work with the current roaming 
	 * carrier as they are. The home region is 
	 * specified as the phoneRegion system preference that is settable in the 
	 * regional settings app. With assisted dialling, this method will add or 
	 * remove international direct dialling prefixes and country codes, as well as
	 * national trunk access codes, as required by the current roaming carrier and the
	 * home region in order to dial the number properly. If it is not possible to 
	 * construct a full international dialling sequence from the options and hints given,
	 * this function will not modify the phone number, and will return "undefined".
	 * If assisted dialling is false or not specified, then this method will attempt
	 * to add all the information it can to the number so that it is as fully
	 * specified as possible. This allows two numbers to be compared more easily when
	 * those two numbers were otherwise only partially specified.
	 * <li><i>sms</i> set this option to true for the following conditions: 
	 *   <ul>
	 *   <li>assisted dialing is turned on
	 *   <li>the phone number represents the destination of an SMS message
	 *   <li>the phone is UMTS 
	 *   <li>the phone is SIM-locked to its carrier
	 *   </ul> 
	 * This enables special international direct dialling codes to route the SMS message to
	 * the correct carrier. If assisted dialling is not turned on, this option has no
	 * affect.
	 * <li><i>manualDialing</i> set this option to true if the user is entering this number on
	 * the keypad directly, and false when the number comes from a stored location like a 
	 * contact entry or a call log entry. When true, this option causes the normalizer to 
	 * not perform any normalization on numbers that look like local numbers in the home 
	 * country. If false, all numbers go through normalization. This option only has an effect
	 * when the assistedDialing option is true as well, otherwise it is ignored.
	 * </ul> 
	 * 
	 * If both a set of options and a locale are given, and they offer conflicting
	 * information, the options will take precedence. The idea is that the locale
	 * tells you the region setting that the user has chosen (probably in 
	 * firstuse), whereas the the hints are more current information such as
	 * where the phone is currently operating (the MCC).<p> 
	 * 
	 * This function performs the following types of normalizations with assisted
	 * dialling turned on:
	 * 
	 * <ol>
	 * <li>If the current location of the phone matches the home country, this is a
	 * domestic call.
	 *   <ul> 
	 *   <li>Remove any iddPrefix and countryCode fields, as they are not needed
	 *   <li>Add in a trunkAccess field that may be necessary to call a domestic numbers 
	 *     in the home country
	 *   </ul>
	 * <li> If the current location of the phone does not match the home country,
	 * attempt to form a whole international number.
	 *   <ul>
	 *   <li>Add in the area code if it is missing from the phone number and the area code
	 *     of the current phone is available in the hints
	 *   <li>Add the country dialling code for the home country if it is missing from the 
	 *     phone number
	 *   <li>Add or replace the iddPrefix with the correct one for the current country. The
	 *     phone number will have been parsed with the settings for the home country, so
	 *     the iddPrefix may be incorrect for the
	 *     current country. The iddPrefix for the current country can be "+" if the phone 
	 *     is connected to a UMTS network, and either a "+" or a country-dependent 
	 *     sequences of digits for CDMA networks.
	 *   </ul>
	 * </ol>
	 * 
	 * This function performs the following types of normalization with assisted
	 * dialling turned off:
	 * 
	 * <ul>
	 * <li>Normalize the international direct dialing prefix to be a plus or the
	 * international direct dialling access code for the current country, depending
	 * on the network type.
	 * <li>If a number is a local number (ie. it is missing its area code), 
	 * use a default area code from the hints if available. CDMA phones always know their area 
	 * code, and GSM/UMTS phones know their area code in many instances, but not always 
	 * (ie. not on Vodaphone or Telcel phones). If the default area code is not available, 
	 * do not add it.
	 * <li>In assisted dialling mode, if a number is missing its country code, 
	 * use the current MCC number if
	 * it is available to figure out the current country code, and prepend that 
	 * to the number. If it is not available, leave it off. Also, use that 
	 * country's settings to parse the number instead of the current format 
	 * locale.
	 * <li>For North American numbers with an area code but no trunk access 
	 * code, add in the trunk access code.
	 * <li>For other countries, if the country code is added in step 3, remove the 
	 * trunk access code when required by that country's conventions for 
	 * international calls. If the country requires a trunk access code for 
	 * international calls and it doesn't exist, add one.
	 * </ul>
	 *  
	 * This method modifies the current object, and also returns a string 
	 * containing the normalized phone number that can be compared directly against
	 * other normalized numbers. The canonical format for phone numbers that is 
	 * returned from this method is simply an uninterrupted and unformatted string 
	 * of dialable digits.
	 * 
	 * @param {Object} options an object containing options to help in normalizing. 
	 * @return {string|undefined} the normalized string, or undefined if the number
	 * could not be normalized
	 */
	normalize: function(options) {
	}
};