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
phone/phonenum.js
*/

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
ilib.GeoPhoneNumber = function(number, params) {
	
};

ilib.GeoPhoneNumber.prototype = new ilib.PhoneNumber();
ilib.GeoPhoneNumber.prototype.parent = ilib.PhoneNumber;
ilib.GeoPhoneNumber.prototype.constructor = ilib.GeoPhoneNumber;

/**
 * Return the ISO region code for this phone number.
 * 
 * @return {string} the ISO region code for this phone number
 */
ilib.GeoPhoneNumber.prototype.getRegion = function () {
	
};

/**
 * Return the short name of region of this phone number.
 * 
 * @return {string} the short name of region of this phone number
 */
ilib.GeoPhoneNumber.prototype.getRegionShortName = function () {
	
};

/**
 * Return the long or descriptive name of region of this phone number.
 * 
 * @return {string} the long name of region of this phone number
 */
ilib.GeoPhoneNumber.prototype.getRegionLongName = function () {
	
};

/**
 * Return the short name of area of this phone number. The area
 * might be as large as a province or state, or as small as
 * a county or city. The definition of the size of an area 
 * depends on the region of the phone number. For numbers that 
 * are not regular subscriber numbers, a generic description such as
 * "mobile number" or "toll-free number" is given.
 * 
 * @return {string} the short name of area of this phone number
 */
ilib.GeoPhoneNumber.prototype.getAreaShortName = function () {
	
};

/**
 * Return the long or descriptive name of region of this phone number.
 * The long name often contains a description of the area covered
 * by the area code in this phone number, sometimes listing cities
 * or counties that are covered. For numbers that are not 
 * regular subscriber numbers, a generic description such as
 * "mobile number" or "toll-free number" is given.
 * 
 * @return {string} the long name of region of this phone number
 */
ilib.GeoPhoneNumber.prototype.getAreaLongName = function () {
	
};
