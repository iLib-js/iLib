/*
 * phoneloc.js - Represent a phone locale object.
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

// !data phoneloc

var ilib = require("../index.js");
var Utils = require("./Utils.js");
var Locale = require("./Locale.js");

/**
 * @class
 * Extension of the locale class that has extra methods to map various numbers
 * related to phone number parsing.
 *
 * @param {Object} options Options that govern how this phone locale works
 *
 * @private
 * @constructor
 * @extends Locale
 */
var PhoneLocale = function(options) {
    var region,
        mcc,
        cc,
        sync = true,
        loadParams = {},
        locale;

    locale = (options && options.locale) || ilib.getLocale();

    this.parent.call(this, locale);

    region = this.region;

    if (options) {
        if (typeof(options.mcc) !== 'undefined') {
            mcc = options.mcc;
        }

        if (typeof(options.countryCode) !== 'undefined') {
            cc = options.countryCode;
        }

        if (typeof(options.sync) !== 'undefined') {
            sync = !!options.sync;
        }

        if (options.loadParams) {
            loadParams = options.loadParams;
        }
    }

    Utils.loadData({
        name: "phoneloc.json",
        object: "PhoneLocale",
        nonlocale: true,
        sync: sync,
        loadParams: loadParams,
        callback: ilib.bind(this, function (data) {
            /** @type {{mcc2reg:Object.<string,string>,cc2reg:Object.<string,string>,reg2cc:Object.<string,string>,area2reg:Object.<string,string>}} */
            this.mappings = data;

            if (typeof(mcc) !== 'undefined') {
                region = this.mappings.mcc2reg[mcc];
            }

            if (typeof(cc) !== 'undefined') {
                region = this.mappings.cc2reg[cc];
            }

            if (!region) {
                region = "XX";
            }

            this.region = this._normPhoneReg(region);
            this._genSpec();

            if (options && typeof(options.onLoad) === 'function') {
                options.onLoad(this);
            }
        })
    });
};

PhoneLocale.prototype = new Locale();
PhoneLocale.prototype.parent = Locale;
PhoneLocale.prototype.constructor = PhoneLocale;

/**
 * Map a mobile carrier code to a region code.
 *
 * @static
 * @package
 * @param {string|undefined} mcc the MCC to map
 * @return {string|undefined} the region code
 */

PhoneLocale.prototype._mapMCCtoRegion = function(mcc) {
    if (!mcc) {
        return undefined;
    }
    return this.mappings.mcc2reg && this.mappings.mcc2reg[mcc] || "XX";
};

/**
 * Map a country code to a region code.
 *
 * @static
 * @package
 * @param {string|undefined} cc the country code to map
 * @return {string|undefined} the region code
 */
PhoneLocale.prototype._mapCCtoRegion = function(cc) {
    if (!cc) {
        return undefined;
    }
    return this.mappings.cc2reg && this.mappings.cc2reg[cc] || "XX";
};

/**
 * Map a region code to a country code.
 *
 * @static
 * @package
 * @param {string|undefined} region the region code to map
 * @return {string|undefined} the country code
 */
PhoneLocale.prototype._mapRegiontoCC = function(region) {
    if (!region) {
        return undefined;
    }
    return this.mappings.reg2cc && this.mappings.reg2cc[region] || "0";
};

/**
 * Map a country code to a region code.
 *
 * @static
 * @package
 * @param {string|undefined} cc the country code to map
 * @param {string|undefined} area the area code within the country code's numbering plan
 * @return {string|undefined} the region code
 */
PhoneLocale.prototype._mapAreatoRegion = function(cc, area) {
    if (!cc) {
        return undefined;
    }
    if (cc in this.mappings.area2reg) {
        return this.mappings.area2reg[cc][area] || this.mappings.area2reg[cc]["default"];
    } else {
        return this.mappings.cc2reg[cc];
    }
};

/**
 * Return the region that controls the dialing plan in the given
 * region. (ie. the "normalized phone region".)
 *
 * @static
 * @package
 * @param {string} region the region code to normalize
 * @return {string} the normalized region code
 */
PhoneLocale.prototype._normPhoneReg = function(region) {
    var norm;

    /*
    * Country list has been updated from metadata.json fro, libphonenumber-js library  v1.7.20
    * and Modified some countries based on Wikipedia
    */

    // Map all NANP regions to the right region, so that they get parsed using the
    // correct state table
    switch (region) {
        case "US": // usa
        case "AG": // antigua and barbuda
        case "AI": // anguilla
        case "AS": // American Samoa
        case "BB": // barbados
        case "BM": // bermuda
        case "BS": // bahamas
        case "CA": // canada
        case "DM": // dominica
        case "DO": // dominican republic
        case "GD": // grenada
        case "GU": // Guam
        case "JM": // jamaica
        case "KN": // st. kitts and nevis
        case "KY": // cayman islands
        case "LC": // st. lucia
        case "MP": // Northern Mariana Islands
        case "MS": // montserrat
        case "PR": // Puerto Rico
        case "SX": // Sint Maarten
        case "TC": // turks and caicos
        case "TT": // trinidad and tobago
        case "VC": // st. vincent and the grenadines
        case "VG": // british virgin islands
        case "VI": // Virgin Islands, U.S.
            norm = "US";
            break;

        /* all the French dependencies are on the French dialling plan
        *  Update manually following Wikipedia information
        * https://en.wikipedia.org/wiki/Telephone_numbers_in_France#Others
        */
        case "FR": // france
        case "GF": // french guiana
        case "MQ": // martinique
        case "GP": // guadeloupe,
        case "BL": // saint barthélemy
        case "MF": // saint martin
        case "RE": // réunion
        case "YT": // mayotte
            norm = "FR";
            break;

        // these all use the Italian dialling plan
        case "IT": // italy
        case "SM": // san marino
        case "VA": // vatican city  // Update manually following Wikipedia information
            norm = "IT";
            break;

        // all the UK dependencies are on the UK dialling plan
        case "GB": // United Kingdom
        case "GG": // Guernsey
        case "IM": // Isle of Man
        case "JE": // Jersey
            norm = "GB";
            break;
        case "RU": // Russia
        case "KZ": // Kazakhstan
            norm = "RU";
            break;
        case "NO": // Norway
        case "SJ": // Svalbard and Jan Mayen
            norm = "NO";
            break;
        case "AU": // Australia
        case "CC": // Cocos (Keeling) Islands
        case "CX": // Christmas Island
            norm = "AU";
            break;
        case "MA": // Morocco
        case "EH": // Western Sahara
            norm = "MA";
            break;
        case "SH": // Saint Helena
        case "TA": // ?
            norm = "SH";
            break;
        case "FI": // Finland
        case "AX": // Aland Islands
            norm = "FI";
            break;
        case "GP": // Guadeloupe
        case "BL": // Saint-Barthélemy
        case "MF": // Saint Martin (French part)
            norm = "GP";
            break;
        case "CW": // Curaçao
        case "BQ": // Caribbean Netherlands
            norm = "CW";
            break;
        default:
            norm = region;
            break;
    }
    return norm;
};

module.exports = PhoneLocale;