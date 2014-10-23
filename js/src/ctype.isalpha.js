/*
 * ctype.islpha.js - Character type is alphabetic
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

// !data ctype_l

/**
 * Return whether or not the first character is alphabetic.<p>
 * 
 * Depends directive: !depends ctype.isalnum.js
 * 
 * @param {string|ilib.String} ch character to examine
 * @return {boolean} true if the first character is alphabetic.
 */
ilib.CType.isAlpha = function (ch) {
	var str = (typeof(ch) === 'string') ? new ilib.String(ch) : ch;
	return ilib.CType._inRange(str, 'Lu', ilib.data.ctype_l) ||
		ilib.CType._inRange(str, 'Ll', ilib.data.ctype_l) ||
		ilib.CType._inRange(str, 'Lt', ilib.data.ctype_l) ||
		ilib.CType._inRange(str, 'Lm', ilib.data.ctype_l) ||
		ilib.CType._inRange(str, 'Lo', ilib.data.ctype_l);
};

/**
 * @protected
 * @param {boolean} sync
 * @param {Object} loadParams
 * @param {function(*)|undefined} onLoad
 */
ilib.CType.isAlpha._init = function (sync, loadParams, onLoad) {
	ilib.CType._load("ctype_l", sync, loadParams, onLoad);
};


