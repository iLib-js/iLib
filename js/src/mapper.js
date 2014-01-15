/*
 * mapper.js - ilib string mapper class definition
 * 
 * Copyright © 2014, JEDLSoft
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

// !depends strings.js util/utils.js locale.js

/**
 * @class
 * Create a new string mapper instance. <p>
 * 
 * The options may contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - locale to use when loading the mapper. Some maps are 
 * locale-dependent, and this locale selects the right one. Default if this is
 * not specified is the current locale.
 * 
 * <li><i>name</i> - the name of the map to load
 * 
 * </ul>
 * 
 * Depends directive: !depends mapper.js
 * 
 * @constructor
 * @param {Object=} options options to initialize this string mapper 
 */
ilib.StringMapper = function (options) {
};

ilib.StringMapper.prototype = {
	/**
	 * Return the locale that this mapper was constructed. 
	 * @returns
	 */
	getLocale: function () {
		return this.locale;
	},
		
	getName: function () {
		return this.name;
	},
	
	/**
	 * @param {string|undefined} string
	 * @return {string|undefined}
	 */
	map: function (string) {
		
	}	
};