/*
 * phoneloc.js - Represent a phone locale object.
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
*/

// !data phoneloc

/**
 *
 * @param {Object} options Options that govern how this phone locale works
 * @constructor
 * @class
 *
 */
ilib.Locale.PhoneLoc = function(options) {
	var region,
		mcc,
		cc,
		sync = true,
		loadParams = {};

	this.locale = new ilib.Locale();

	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
			region = this.locale.region;			
		}

		if (typeof(options.mcc) !== 'undefined') {
			mcc = options.mcc;
		}
		
		if (typeof(options.countryCode) !== 'undefined') {
			cc = options.countryCode;
		}

		if (typeof(options.sync) !== 'undefined') {
			sync = (options.sync == true);
		}
		
		if (options.loadParams) {
			loadParams = options.loadParams;
		}
	}

	ilib.loadData({
		name: "phoneloc.json",
		object: ilib.Locale.PhoneLoc,
		locale: this.locale,
		sync: sync, 
		loadParams: loadParams, 
		callback: ilib.bind(this, function (data) {
			this.mappings = data;
			
			if (mcc) {
				region = this.mappings.mcc2reg[mcc]	|| "XX";	
			}

			if (cc) {
				region = this.mappings.cc2reg[cc] || "XX";
			}

			if (!region) {
				this.locale = new ilib.Locale();
				region = this.locale.region
			}

			this.language = this.locale.language;
			this.variant = this.locale.varient;
			this.region = this._normPhoneReg(region);
			this.spec = this.language + "-" + this.region;

			if (options && typeof(options.onLoad) === 'function') {
				options.onLoad(this);
			}									
		})
	});
};

ilib.Locale.PhoneLoc.prototype = new ilib.Locale();
ilib.Locale.PhoneLoc.prototype.parent = ilib.Locale;
ilib.Locale.PhoneLoc.prototype.constructor = ilib.Locale.PhoneLoc;

/**
 * Map a mobile carrier code to a region code.
 *
 * @static
 * @protected
 * @param {string} mcc MCC string to parse
 * @return {Object} components of the MCC number
 */

ilib.Locale.PhoneLoc.prototype._mapMCCtoRegion = function(mcc) {
	if (!mcc) {
		return null;
	}
	return this.mappings.mcc2reg && this.mappings.mcc2reg[mcc] || "XX";
};

/**
 * Map a Country code to a region code.
 *
 * @static
 * @protected
 * @param {string} cc CC string to parse
 * @return {Object} components of the CC number
 */
ilib.Locale.PhoneLoc.prototype._mapCCtoRegion = function(cc) {
	if (!cc) {
		return null;
	}
	return this.mappings.cc2reg && this.mappings.cc2reg[cc] || "XX";
};

/**
 * Map a Region code to a dialing code.
 *
 * @static
 * @protected
 * @param {string} region Region string to parse
 * @return {Object} components of the CC number
 */
ilib.Locale.PhoneLoc.prototype._mapRegiontoCC = function(region) {
	if (!region) {
		return null;
	}
	return this.mappings.reg2cc && this.mappings.reg2cc[region] || "0";
};

/**
 * Map a Country code to a region code.
 *
 * @static
 * @protected
 * @param {string} cc CC string to parse
 * @return {Object} components of the CC number
 */
ilib.Locale.PhoneLoc.prototype._mapAreatoRegion = function(cc, area) {
	if (!cc) {
		return null;
	}
	if (cc in this.mappings.area2reg) {
		return this.mappings.area2reg[cc][area] || this.mappings.area2reg[cc]["default"];
	} else {
		return this.mappings.cc2reg[cc];
	}
};

/*
* Return the region that controls the dialing plan in the given
* region. (ie. the "normalized phone region".)
*/
ilib.Locale.PhoneLoc.prototype._normPhoneReg = function(region) {
	var norm;
	
	// Map all NANP regions to the right region, so that they get parsed using the 
	// correct state table
	switch (region) {
		case "US": // usa
		case "CA": // canada
		case "AG": // antigua and barbuda
		case "BS": // bahamas
		case "BB": // barbados
		case "DM": // dominica
		case "DO": // dominican republic
		case "GD": // grenada
		case "JM": // jamaica
		case "KN": // st. kitts and nevis
		case "LC": // st. lucia
		case "VC": // st. vincent and the grenadines
		case "TT": // trinidad and tobago
		case "AI": // anguilla
		case "BM": // bermuda
		case "VG": // british virgin islands
		case "KY": // cayman islands
		case "MS": // montserrat
		case "TC": // turks and caicos
		case "AS": // American Samoa 
		case "VI": // Virgin Islands, U.S.
		case "PR": // Puerto Rico
		case "MP": // Northern Mariana Islands
		case "T:": // East Timor
		case "GU": // Guam
			norm = "US";
			break;
		
		// these all use the Italian dialling plan
		case "IT": // italy
		case "SM": // san marino
		case "VA": // vatican city
			norm = "IT";
			break;
		
		// all the French dependencies are on the French dialling plan
		case "FR": // france
		case "GF": // french guiana
		case "MQ": // martinique
		case "GP": // guadeloupe, 
		case "BL": // saint barthélemy
		case "MF": // saint martin
		case "RE": // réunion, mayotte
			norm = "FR";
			break;
		default:
			norm = region;
			break;
	}	
	return norm;
};