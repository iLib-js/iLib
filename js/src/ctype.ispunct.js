/*
 * ctype.ispunct.js - Character type is punctuation
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

// !depends ctype.js

// !data ctype_p

/**
 * Return whether or not the first character is punctuation.<p>
 * 
 * Depends directive: !depends ctype.isprint.js
 * 
 * @param {string|ilib.String} ch character to examine
 * @return {boolean} true if the first character is punctuation.
 */
ilib.CType.isPunct = function (ch) {
	var str = (typeof(ch) === 'string') ? new ilib.String(ch) : ch;
	return ilib.CType._inRange(str, 'Pd', ilib.data.ctype_p) ||
		ilib.CType._inRange(str, 'Ps', ilib.data.ctype_p) ||
		ilib.CType._inRange(str, 'Pe', ilib.data.ctype_p) ||
		ilib.CType._inRange(str, 'Pc', ilib.data.ctype_p) ||
		ilib.CType._inRange(str, 'Po', ilib.data.ctype_p) ||
		ilib.CType._inRange(str, 'Pi', ilib.data.ctype_p) ||
		ilib.CType._inRange(str, 'Pf', ilib.data.ctype_p);
};

/**
 * @protected
 * @param {boolean} sync
 * @param {Object} loadParams
 * @param {function(*)|undefined} onLoad
 */
ilib.CType.isPunct._init = function (sync, loadParams, onLoad) {
	ilib.CType._load("ctype_p", sync, loadParams, onLoad);
};
