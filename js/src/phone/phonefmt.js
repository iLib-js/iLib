/*
 * phonefmt.js - Represent a phone number formatter.
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

// !data phonefmt

/**
 * Create a new phone number formatter object that formats numbers according to the parameters.<p>
 * 
 * The params object can contain zero or more of the following parameters:
 *
 * <ul>
 * <li><i>locale</i> locale to use to format this number, or undefined to use the default locale
 * <li><i>style</i> the name of style to use to format numbers, or undefined to use the default style
 * <li><i>mcc</i> the MCC of the country to use if the number is a local number and the country code is not known
 * </ul>
 *
 * Some regions have more than one style of formatting, and the style parameter
 * selects which style the user prefers. The style names can be found by calling <p>
 *
 * If the MCC is given, numbers will be formatted in the manner of the country
 * specified by the MCC. If it is not given, but the locale is, the manner of
 * the country in the locale will be used. If neither the locale or MCC are not given,
 * then the country of the current locale is used. 
 *
 * @class
 * @constructor
 * @param {Object} params properties that control how this formatter behaves
 */
ilib.PhoneFmt = function(params) {
};

ilib.PhoneFmt.prototype = {
	/**
	 * Format the parts of a phone number appropriately according to the settings in 
	 * this formatter instance.
	 *  
	 * The params can contain zero or more of these properties:
	 * 
	 * <ul>
	 * <li><i>partial</i> boolean which tells whether or not this phone number 
	 * represents a partial number or not. The default is false, which means the number 
	 * represents a whole number. 
	 * <li><i>style</i> style to use to format the number, if different from the 
	 * default style or the style specified in the constructor
	 * </ul>
	 *      
	 * The partial parameter specifies whether or not the phone number contains
	 * a partial phone number or if it is a whole phone number. A partial 
	 * number is usually a number as the user is entering it with a dial pad. The
	 * reason is that certain types of phone numbers should be formatted differently
	 * depending on whether or not it represents a whole number. Specifically, SMS
	 * short codes are formatted differently.<p>
	 * 
	 * Example: a subscriber number of "48773" in the US would get formatted as:
	 * 
	 * <ul>
	 * <li>partial: 487-73  (perhaps the user is in the process of typing a whole phone 
	 * number such as 487-7379)
	 * <li>whole:   48773   (this is the entire SMS short code)
	 * </ul>
	 * 
	 * Any place in the UI where the user types in phone numbers, such as the keypad in 
	 * the phone app, should pass in partial: true to this formatting routine. All other 
	 * places, such as the call log in the phone app, should pass in partial: false, or 
	 * leave the partial flag out of the parameters entirely. 
	 * 
	 * @param {string|ilib.PhoneNumber} number object containing the phone number to format, or a 
	 * string containing a phone number to parse and then reformat
	 * @param {Object} params Parameters which control how to format the number
	 * @return {string} Returns the formatted phone number as a string.
	 */
	format: function format(number, params) {
	},
	
	/**
	 * Return an array of names of all available styles that can be used with the current 
	 * formatter.
	 * @return {Array.<string>} an array of names of styles that are supported by this formatter
	 */
	getAvailableStyles: function () {
		
	},
	
	/**
	 * Return an example phone number formatted with the given style.
	 * 
	 * @param {string|undefined} style style to get an example of, or undefined to use
	 * the current default style for this formatter
	 * @return {string|undefined} an example phone number formatted according to the 
	 * given style, or undefined if the style is not recognized or does not have an 
	 * example 
	 */
	getStyleExample: function (style) {
		
	}
};