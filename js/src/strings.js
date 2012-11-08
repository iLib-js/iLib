/*
 * strings.js - ilib string subclass definition
 * 
 * Copyright © 2012, JEDLSoft
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

// !depends ilibglobal.js locale.js

/**
 * @class
 * Create a new string instance. This string inherits from the Javascript
 * String class, and adds two more methods, fmt and fmtChoice. It can be
 * used anywhere that a normal Javascript string is used. The formatting
 * methods are of course most useful when localizing strings in an app
 * or web site in combination with the ilib.ResBundle class.<p>
 * 
 * Depends directive: !depends strings.js
 * 
 * @constructor
 * @param {string|ilib.String=} string initialize this instance with this string 
 */
ilib.String = function (string) {
	if (typeof(string) === 'object') {
		this.str = string.str;
	} else {
		this.str = string ? new String(string) : "";
	}
};

ilib.String.prototype.toString = function () {
	return this.str.toString();
};
ilib.String.prototype.valueOf = function () {
	return this.str.valueOf();
};

/**
 * Return the length of this string in characters. This function defers to the regular
 * Javascript string class in order to perform the length function. Please note that this
 * method is a real method, whereas the length property of Javascript strings is 
 * implemented by native code and appears to be a property.<p>
 * 
 * Example:
 * 
 * <pre>
 * var str = new ilib.String("this is a string");
 * console.log("String is " + str.length() + " characters long.");
 * </pre>
 */
ilib.String.prototype.length = function () {
	return this.str.length;
};


/**
 * Format this string instance as a message, replacing the parameters with 
 * the given values.<p>
 * 
 * The string can contain any text that a regular Javascript string can
 * contain. Replacement parameters have the syntax:
 * 
 * <pre>
 * {name}
 * </pre>
 * 
 * Where "name" can be any string surrounded by curly brackets. The value of 
 * "name" is taken from the parameters argument.<p>
 * 
 * Example:
 * 
 * <pre>
 * var str = new ilib.String("There are {num} objects.");
 * console.log(str.format({
 *   num: 12
 * });
 * </pre>
 * 
 * Would give the output:
 * 
 * <pre>
 * There are 12 objects.
 * </pre>
 * 
 * If a property is missing from the parameter block, the replacement
 * parameter substring is left untouched in the string, and a different
 * set of parameters may be applied a second time. This way, different
 * parts of the code may format different parts of the message that they
 * happen to know about.<p>
 * 
 * Example:
 * 
 * <pre>
 * var str = new ilib.String("There are {num} objects in the {container}.");
 * console.log(str.format({
 *   num: 12
 * });
 * </pre>
 * 
 * Would give the output:<p>
 * 
 * <pre>
 * There are 12 objects in the {container}.
 * </pre>
 * 
 * The result can then be formatted again with a different parameter block that
 * specifies a value for the container property.
 * 
 * @param params a Javascript object containing values for the replacement 
 * parameters in the current string
 * @return a new ilib.String instance with as many replacement parameters filled
 * out as possible with real values.
 */
ilib.String.prototype.format = function (params) {
	var p, formatted = this.str;
	if (params) {
		for (p in params) {
			if (typeof(params[p]) !== 'undefined') {
				formatted = formatted.replace("\{"+p+"\}", params[p]);
			}
		}
	}
	return formatted.toString();
};

/**
 * Format a string as one of a choice of strings dependent on the value of
 * a particular argument index.<p>
 * 
 * The syntax of the choice string is as follows. The string contains a
 * series of choices separated by a vertical bar character "|". Each choice
 * has a value or range of values to match followed by a hash character "#"
 * followed by the string to use if the variable matches the criteria.<p>
 * 
 * Example string:
 * 
 * <pre>
 * var num = 2;
 * var str = new ilib.String("0#There are no objects.|1#There is one object.|2#There are {number} objects.");
 * console.log(str.formatChoice(num, {
 *   number: num
 * }));
 * </pre>
 * 
 * Gives the output:
 * 
 * <pre>
 * "There are 2 objects."
 * </pre>
 * 
 * The strings to format may contain replacement variables that will be formatted
 * using the fmt() method above and the params argument as a source of values
 * to use while formatting those variables.<p>
 * 
 * If the criterion for a particular choice is empty, that choice will be used
 * as the default one for use when none of the other choice's criteria match.<p>
 * 
 * Example string:
 * 
 * <pre>
 * var num = 22;
 * var str = new ilib.String("0#There are no objects.|1#There is one object.|#There are {number} objects.");
 * console.log(str.formatChoice(num, {
 *   number: num
 * }));
 * </pre>
 * 
 * Gives the output:
 * 
 * <pre>
 * "There are 22 objects."
 * </pre>
 * 
 * If multiple choice patterns can match a given argument index, the first one 
 * encountered in the string will be used. If no choice patterns match the 
 * argument index, then the default choice will be used. If there is no default
 * choice defined, then this method will return an empty string.<p>
 * 
 * <b>Special Syntax</b><p>
 * 
 * For any choice format string, all of the patterns in the string should be
 * of a single type: numeric, boolean, or string/regexp. The type of the 
 * patterns is determined by the type of the argument index parameter.<p>
 * 
 * If the argument index is numeric, then some special syntax can be used 
 * in the patterns to match numeric ranges.<p>
 * 
 * <ul>
 * <li><i>&gt;x</i> - match any number that is greater than x 
 * <li><i>&gt;=x</i> - match any number that is greater than or equal to x
 * <li><i>&lt;x</i> - match any number that is less than x
 * <li><i>&lt;=x</i> - match any number that is less than or equal to x
 * <li><i>start-end</i> - match any number in the range [start,end)
 * </ul>
 * 
 * If the argument index is a boolean, the values "true" and "false" may appear
 * as the choice patterns.<p>
 * 
 * If the argument index is of type string, then the choice patterns may contain
 * regular expressions, or static strings as degenerate regexps.
 * 
 * @param {*} argIndex The index into the choice array of the current parameter
 * @param {Object} params The hash of parameter values that replace the replacement 
 * variables in the string
 * @throws "syntax error in choice format pattern: " if there is a syntax error
 * @returns {string} the formatted string
 */
ilib.String.prototype.formatChoice = function(argIndex, params) {
	var choices = this.str.split("|");
	var type = typeof(argIndex);
	var limits = [];
	var strings = [];
	var i;
	var parts;
	var limit;
	var arg;
	var result;
	var defaultCase;

	if (this.str.length === 0) {
		// nothing to do
		return "";
	}
	
	// first parse all the choices
	for (i = 0; i < choices.length; i++) {		
		parts = choices[i].split("#");		
		if (parts.length > 2) {
			limits[i] = parts[0];
			parts = parts.shift();			
			strings[i] = parts.join("#");
		} else if (parts.length === 2) {
			limits[i] = parts[0];
			strings[i] = parts[1];
		} else {
			// syntax error
			throw "syntax error in choice format pattern: " + choices[i];
		}		
	}
	
	// then apply the argument index
	for (i = 0; i < limits.length; i++) {
		if (limits[i].length === 0) {
			// this is default case
			defaultCase = new ilib.String(strings[i]);			
		} else {
			switch (type) {
				case 'number':
					arg = parseInt(argIndex, 10);
										
					if (limits[i].substring(0,2) === "<=") {						
						limit = parseFloat(limits[i].substring(2));
						if (arg <= limit) {
							result = new ilib.String(strings[i]);
							i = limits.length;
						}
					} else if (limits[i].substring(0,2) === ">=") {						
						limit = parseFloat(limits[i].substring(2));
						if (arg >= limit) {
							result = new ilib.String(strings[i]);
							i = limits.length;
						}
					} else if (limits[i].charAt(0) === "<") {						
						limit = parseFloat(limits[i].substring(1));
						if (arg < limit) {
							result = new ilib.String(strings[i]);
							i = limits.length;
						}
					} else if (limits[i].charAt(0) === ">") {						
						limit = parseFloat(limits[i].substring(1));
						if (arg > limit) {
							result = new ilib.String(strings[i]);
							i = limits.length;
						}
					} else {
						var dash = limits[i].indexOf("-");
						if (dash !== -1) {							
							// range
							var start = limits[i].substring(0, dash);
							var end = limits[i].substring(dash+1);							
							if (arg >= parseInt(start, 10) && arg <= parseInt(end, 10)) {								
								result = new ilib.String(strings[i]);
								i = limits.length;
							}
						} else if (arg === parseInt(limits[i], 10)) {							
							// exact amount
							result = new ilib.String(strings[i]);
							i = limits.length;
						}
					}
					break;
				case 'boolean':					
					if (limits[i] === "true" && argIndex === true) {						
						result = new ilib.String(strings[i]);
						i = limits.length;
					} else if (limits[i] === "false" && argIndex === false) {						
						result = new ilib.String(strings[i]);
						i = limits.length;
					}
					break;
				case 'string':					
					var regexp = new RegExp(limits[i], "i");
					if (regexp.test(argIndex)) {
						result = new ilib.String(strings[i]);
						i = limits.length;
					}
					break;
				case 'object':
					throw "syntax error: fmtChoice parameter for the argument index cannot be an object";
			}
		}
	}
	
	if (!result) {		
		result = defaultCase || new ilib.String("");
	}
	
	result = result.format(params);
	
	return result.toString();
};
