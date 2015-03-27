/*
 * ctype.isgraph.js - Character type is graph char
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

// !depends ctype.js strings.js ctype.isspace.js ctype.iscntrl.js

var ilib = require("./ilibglobal.js");

if (!ilib.CType) ilib.CType = require("./ctype.js");
if (!ilib.String) ilib.String = require("./strings.js");
if (!ilib.CType.isSpace) ilib.CType.isSpace = require("./ctype.isspace.js");
if (!ilib.CType.isCntrl) ilib.CType.isCntrl = require("./ctype.iscntrl.js");

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
			num = ilib.String.toCodePoint(ch, 0);
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
 * @param {Object|undefined} loadParams
 * @param {function(*)|undefined} onLoad
 */
ilib.CType.isGraph._init = function (sync, loadParams, onLoad) {
	ilib.CType.isSpace._init(sync, loadParams, function () {
		ilib.CType.isCntrl._init(sync, loadParams, onLoad);
	});
};

module.exports = ilib.CType.isGraph;