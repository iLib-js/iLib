/*
 * unifile.js - read and parse a file downloaded from the unicode repository
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

var fs = require('fs');

/**
 * @class
 * 
 * Parses a Unicode-style file. Unicode files have comments, blank
 * lines and content lines. Content lines have fields separated with
 * a semi-colon, which are optionally followed by a comment. This
 * class automatically skips all comments and blank lines and only
 * retrieves content lines.<p>
 *
 * It is up to the caller to interpret the fields in a content line
 * as it sees fit. Content lines do not necessarily all contain the
 * same number of fields.<p>
 * 
 * The options must contain only one of the following properties:
 * 
 * <ul>
 * <li>path - Path to the file to read on disk
 * <li>string - The actual in-memory text of the file
 * </ul>
 * 
 * @constructor
 * @param {Object.<path:string,string:string>} options options governing the construction of this file
 */
exports.UnicodeFile = function (options) {
	var data;
	
	this.rows = [];

	if (options) {
		if (options.path) {
			data = fs.readFileSync(options.path, "utf-8");
		}
		if (options.string) {
			data = options.string;
		}
	}
	
	if (!data) {
		return undefined;
	}
	
	var string = (data.charAt(data.length-1) === '\n') ? data.substring(0, data.length-1): data; 
	var rows =  string.split('\n');
	var row;
	
	for (var i = 0; i < rows.length; i++) {
		if (rows[i].trim().charAt(0) !== '@') {
			var commentStart = rows[i].indexOf("#");
			row = (commentStart === -1) ? rows[i] : rows[i].substring(0, commentStart);
			row = row.trim();
			if (row.length > 0) {
				this.rows.push(row);
			}
		}
	}
};

exports.UnicodeFile.prototype = {
	/**
	 * Return the number of content lines in this unicode file.
	 * @returns {number} the number of content lines in this unicode file
	 */
	length: function () {
		return this.rows.length;
	},
	
	/**
	 * Return the content line with the given index.
	 * 
	 * @param index the index of the given content line
	 * @returns {Array.<string>} an array of content values as strings
	 */
	get: function (index) {
		var row = (index >= 0 && index < this.rows.length) ? this.rows[index] : undefined;
		return row && row.split(/;/); 
	}
};