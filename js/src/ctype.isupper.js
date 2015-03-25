/*
 * ctype.isupper.js - Character type is upper-case letter
 * 
 * Copyright © 2012-2015, JEDLSoft
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

// !depends ctype.js strings.js

// !data ctype_l

var ilib = ilib || {CType:{}};

/**
 * Return whether or not the first character is upper-case. For alphabetic
 * characters in scripts that do not make a distinction between upper- and 
 * lower-case, this function always returns true.<p>
 * 
 * Depends directive: !depends ctype.isupper.js
 * 
 * @param {string|ilib.String|number} ch character or code point to examine
 * @return {boolean} true if the first character is upper-case.
 */
ilib.CType.isUpper = function (ch) {
	var num;
	switch (typeof(ch)) {
		case 'number':
			num = ch;
			break;
		case 'string':
			num = ilib.String.toCodePoint(ch, 0);
			break;
		case 'undefined':
			return false;
		default:
			num = ch._toCodePoint(0);
			break;
	}

	return ilib.CType._inRange(num, 'Lu', ilib.data.ctype_l);
};

/**
 * @protected
 * @param {boolean} sync
 * @param {Object} loadParams
 * @param {function(*)|undefined} onLoad
 */
ilib.CType.isUpper._init = function (sync, loadParams, onLoad) {
	ilib.CType._load("ctype_l", sync, loadParams, onLoad);
};

module.exports = function(loader) {
	loader.require(["strings.js", "ctype.js"]);
	// (!extilib.data || !extilib.data.ctype_l) && ilib.CType.isUpper._init(true);

	return ilib;
};