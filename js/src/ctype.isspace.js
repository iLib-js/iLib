/*
 * ctype.isspace.js - Character type is space char
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

// !data ctype ctype_z

var ilib = ilib || {CType:{}};

/**
 * Return whether or not the first character is a whitespace character.<p>
 * 
 * Depends directive: !depends ctype.isspace.js
 * 
 * @param {string|ilib.String|number} ch character or code point to examine
 * @return {boolean} true if the first character is a whitespace character.
 */
ilib.CType.isSpace = function (ch) {
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

	return ilib.CType._inRange(num, 'space', ilib.data.ctype) ||
		ilib.CType._inRange(num, 'Zs', ilib.data.ctype_z) ||
		ilib.CType._inRange(num, 'Zl', ilib.data.ctype_z) ||
		ilib.CType._inRange(num, 'Zp', ilib.data.ctype_z);
};

/**
 * @protected
 * @param {boolean} sync
 * @param {Object} loadParams
 * @param {function(*)|undefined} onLoad
 */
ilib.CType.isSpace._init = function (sync, loadParams, onLoad) {
	ilib.CType._load("ctype_z", sync, loadParams, function () {
		ilib.CType._init(sync, loadParams, onLoad);
	});
};

module.exports = function(loader) {
	loader.require(["strings.js", "ctype.js"]);
	// (!extilib.data || !extilib.data.ctype_z) && ilib.CType.isSpace._init(true);

	return ilib;
};