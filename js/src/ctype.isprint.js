/*
 * ctype.isprint.js - Character type is printable char
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

// !depends ctype.js ctype.iscntrl.js

var ilib = ilib || {CType:{}};

/**
 * Return whether or not the first character is any printable character,
 * including space.<p>
 * 
 * Depends directive: !depends ctype.isprint.js
 * 
 * @param {string|ilib.String|number} ch character or code point to examine
 * @return {boolean} true if the first character is printable.
 */
ilib.CType.isPrint = function (ch) {
	return typeof(ch) !== 'undefined' && ch.length > 0 && !ilib.CType.isCntrl(ch);
};

/**
 * @protected
 * @param {boolean} sync
 * @param {Object} loadParams
 * @param {function(*)|undefined} onLoad
 */
ilib.CType.isPrint._init = function (sync, loadParams, onLoad) {
	ilib.CType.isCntrl._init(sync, loadParams, onLoad);
};

module.exports = function(loader) {
	loader.require(["strings.js", "ctype.iscntrl.js"]);
	
	return ilib;
};