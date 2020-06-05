/*
 * charmapfile.js - read and parse a Linux charmap file
 * 
 * Copyright © 2014-2015, 2020 JEDLSoft
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
var zlib = require('zlib');
var util = require("util");

/**
 * Parse a Linux charmap file. Charmap files have comments, blank
 * lines and content lines. Content lines have fields separated with
 * a space or tab, which are optionally followed by a comment. This
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
 * <li>string - The actual in-memory text of the file to parse
 * </ul>
 * 
 * @class
 * @constructor
 * @param {Object.<path:string,string:string>} options options governing the construction of this file
 */
exports.CharmapFile = function (options) {
	var data = undefined;
	
	this.rows = [];
	this.splitChar = /[\s,]+/g;
	this.startEnd = true;
	this.commentChar = '%';
	
	if (options) {
		if (options.path) {
			data = fs.readFileSync(options.path);
		}
		if (options.string) {
			data = options.string;
		}
		if (options.splitChar) {
			this.splitChar = new RegExp(options.splitChar);
		}
		if (typeof(options.startEnd) === 'boolean') {
			// look for CHARMAP ... END CHARMAP
			this.startEnd = options.startEnd;
		}
		if (options.commentChar) {
			this.commentChar = options.commentChar;
		}
	}
	
	if (!data) {
		console.log("could not read data");
		return undefined;
	}
	
	// console.log("read data");
	
	var string = new String(data, "utf-8");
	string = (string.charAt(string.length-1) === '\n') ? string.substring(0, string.length-1): string; 
	var rows = string.split('\n');
	var row;
	var i;
	
	/*
	var commentRE = /^<comment_char> (.)/;
	
	for (i = 0; i < rows.length; i++) {
		var result = comment_RE.exec(rows[i]);
		if (result !== null) {
			commentChar = result[1];
			break;
		}
	}
	*/
	
	i = 0;
	if (this.startEnd) {
		while (i < rows.length) {
			if (rows[i].trim().charAt(0) !== this.commentChar) {
				if (rows[i].trim() === "CHARMAP") {
					i++;
					break;
				}
			}
			i++;
		}
	}

	while (i < rows.length) {
		if (this.startEnd && rows[i].trim() === "END CHARMAP") {
			// done
			break;
		}
		var commentStart = rows[i].indexOf(this.commentChar);
		row = (commentStart === -1) ? rows[i] : rows[i].substring(0, commentStart);
		row = row.trim();
		if (row.length > 0) {
			// console.log("pushing row " + JSON.stringify(row.split(this.splitChar)));
			this.rows.push(row.split(this.splitChar));
		}
		i++;
	}
	console.log("found " + this.rows.length + " rows");
};

exports.CharmapFile.prototype = {
	/**
	 * Return the number of content lines in this unicode file.
	 * @return {number} the number of content lines in this unicode file
	 */
	length: function () {
		return this.rows.length;
	},
	
	/**
	 * Return the content line with the given index.
	 * 
	 * @param {number} index the index of the given content line
	 * @return {Array.<string>} an array of content values as strings
	 */
	get: function (index) {
		var row = (index >= 0 && index < this.rows.length) ? this.rows[index] : undefined;
		return row; 
	}
};