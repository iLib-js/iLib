/*
 * uniData.js - models a unicode character database file
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

var unifile = require("./unifile.js");
var common = require("./common.js");
var UnicodeFile = unifile.UnicodeFile;
var hexToChar = common.hexToChar;

/**
 * @class
 * Represents information about a particular character.
 * 
 * @constructor
 * @param {string} row a row from the UnicodeData.txt file to parse
 */
exports.CharacterInfo = function(fields) {
	if (typeof(fields) !== 'object') {
		return undefined;
	}
	
	this.c = hexToChar(fields[0]);
	this.name = fields[1];
	this.category = fields[2];
	this.ccc = (fields[3].length > 0) ? parseInt(fields[3], 10) : 0;
	this.bidiClass = fields[4];
	
	if (fields[5].length > 0) {
		var decomp = fields[5];
		var start = decomp.indexOf('<');
		if (start !== -1) {
			var end = decomp.lastIndexOf('>');
			this.decompType = decomp.substring(start+1, end);
			decomp = decomp.substring(end+1);
		} else {
			this.decompType = "canon"; // default is canonical decomposition
		}
		var chars = decomp.split(' ');
		this.decomp = "";
		for (var i = 0; i < chars.length; i++) {
			if (chars[i].length > 0) {
				this.decomp += hexToChar(chars[i]);
			}
		}
	}
	
	// TODO get the digit value from fields 6, 7, 8
	
	this.bidiMirrored = (fields[9] && fields[9] == 'Y');
	this.upper = (fields[12] && fields[12].length > 0) ? hexToChar(fields[12]) : "";
	this.lower = (fields[13] && fields[13].length > 0) ? hexToChar(fields[13]) : "";
	this.title = (fields[14] && fields[14].length > 0) ? hexToChar(fields[14]) : "";
};

exports.CharacterInfo.prototype = {
	/**
	 * @return {string}
	 */
	getCharacter: function () {
		return this.c;
	},
	
	/**
	 * @return {string}
	 */
	getName: function () {
		return this.name;
	},
	
	/**
	 * @return {string}
	 */
	getCategory: function () {
		return this.category;
	},
	
	/**
	 * @return {number}
	 */
	getCombiningClass: function () {
		return this.ccc;
	},
	
	/**
	 * @return {string}
	 */
	getBidiClass: function () {
		return this.bidiClass;
	},
	
	/**
	 * @return {string}
	 */
	getDecompositionType: function () {
		return this.decompType || "";
	},
	
	/**
	 * @return {string}
	 */
	getDecomposition: function () {
		return this.decomp || this.c;
	},
	
	/**
	 * @return {string}
	 */
	getNumericType: function () {
		
	},
	
	/**
	 * @return {number}
	 */
	getNumericValue: function () {
		
	},
	
	/**
	 * @return {boolean}
	 */
	getBidiMirrored: function () {
		return this.bidiMirrored;
	},
	
	/**
	 * @return {string}
	 */
	getSimpleUppercase: function () {
		return this.upper;
	},
	
	/**
	 * @return {string}
	 */
	getSimpleLowercase: function () {
		return this.lower;
	},
	
	/**
	 * @return {string}
	 */
	getSimpleTitlecase: function () {
		return this.title;
	}	
};

/**
 * @class
 * Return an object that represents a unicode character database.<p>
 * 
 * The options must contain only one of the following properties:
 * 
 * <ul>
 * <li>path - Path to the file to read on disk
 * <li>string - The actual in-memory text of the file
 * </ul>
 *
 * @constructor
 * @param {Object.<{path:string,string:string}>} options Options controlling the construction of the instance 
 */
exports.UnicodeData = function (options) {
	this.uf = new UnicodeFile(options);
};

exports.UnicodeData.prototype = {
	/**
	 * Return the number of rows in this character database. Each row is
	 * represented by a CharacterInfo object.
	 * 
	 * @return {number} the number of rows in this character database 
	 */
	length: function () {
		return this.uf.length();
	},
	
	/**
	 * Return the character info for a particular row in the database.
	 * 
	 * @param {number} index the row to return 
	 * @return {exports.CharacterInfo?} the character info at the given row
	 */
	get: function (index) {
		return new exports.CharacterInfo(this.uf.get(index));
	}
};
