/*
 * ctype.islower.js - Character type is lower case letter
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

// !depends ctype.js

// !data ctype_l

/**
 * Return whether or not the first character is lower-case. For alphabetic
 * characters in scripts that do not make a distinction between upper- and 
 * lower-case, this function always returns true.<p>
 * 
 * Depends directive: !depends ctype.islower.js
 * 
 * @param {string} ch character to examine
 * @return {boolean} true if the first character is lower-case.
 */
ilib.CType.isLower = function (ch) {
	return ilib.CType._inRange(ch, 'Ll', ilib.data.ctype_l);
};

/**
 * @protected
 * @param {boolean} sync
 * @param {Object} loadParams
 * @param {function(*)|undefined} onLoad
 */
ilib.CType.isLower._init = function (sync, loadParams, onLoad) {
	ilib.CType._load("ctype_l", sync, loadParams, onLoad);
};
