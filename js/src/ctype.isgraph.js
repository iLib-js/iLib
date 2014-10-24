/*
 * ctype.isgraph.js - Character type is graph char
 * 
 * Copyright © 2012-2013, JEDLSoft
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

// !depends ctype.js ctype.isspace.js ctype.iscntrl.js

/**
 * Return whether or not the first character is any printable character
 * other than space.<p>
 * 
 * Depends directive: !depends ctype.isgraph.js
 * 
 * @param {string|ilib.String|number} ch character or code point to examine
 * @return {boolean} true if the first character is any printable character
 * other than space. 
 */
ilib.CType.isGraph = function (ch) {
	var num;
	switch (typeof(ch)) {
		case 'number':
			num = ch;
			break;
		case 'string':
			var str = new ilib.String(ch);
			num = str._toCodePoint(0);
			break;
		case 'undefined':
			return false;
		default:
			num = ch._toCodePoint(0);
			break;
	}
	return typeof(ch) !== 'undefined' && ch.length > 0 && !ilib.CType.isSpace(num) && !ilib.CType.isCntrl(num);
};

/**
 * @protected
 * @param {boolean} sync
 * @param {Object} loadParams
 * @param {function(*)|undefined} onLoad
 */
ilib.CType.isGraph._init = function (sync, loadParams, onLoad) {
	ilib.CType.isSpace._init(sync, loadParams, function () {
		ilib.CType.isCntrl._init(sync, loadParams, onLoad);
	});
};
