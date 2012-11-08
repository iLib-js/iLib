/*
 * ctype.js - Character type definitions
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

// !data ctype

/**
 * Return whether or not the first character is an ideographic character.<p>
 * 
 * Depends directive: !depends ctype.isideo.js
 * 
 * @param {string} ch character to examine
 * @return {boolean} true if the first character is an ideographic character.
 */
ilib.CType.isIdeo = function (ch) {
	return ilib.CType._inRange(ch, 'cjk', ilib.data.ctype) ||
		ilib.CType._inRange(ch, 'cjkradicals', ilib.data.ctype) ||
		ilib.CType._inRange(ch, 'enclosedcjk', ilib.data.ctype) ||
		ilib.CType._inRange(ch, 'cjkpunct', ilib.data.ctype) ||
		ilib.CType._inRange(ch, 'cjkcompatibility', ilib.data.ctype);
	
};
