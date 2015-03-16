/*
 * translationunit.js - a class to manage a particular translation
 * 
 * Copyright © 2015, JEDLSoft
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

var util = require('util');
var common = require('../cldr/common.js');

/**
 * Create a new translation unit. A translation unit stores the
 * translation for one single source string from the source locale
 * to a particular target locale and includes a number of attributes. 
 *
 * @class
 * @constructor
 * @param {Object} params parameters to initialize this translation unit 
 */
var TranslationUnit = function TranslationUnit(params) {
	if (params) {
		this.key = params.key;
		this.source = params.source;
		this.translation = params.translation;
		this.locale = params.locale;
		this.dataType = params.dataType;
		this.comment = params.comment;
		this.status = params.status;
	}
	
	this.dataType = this.dataType || "javascript";
	this.key = this.key || this.source;
	this.occurances = [];
};

/**
 * Record a location where the source string was used in the
 * component's source code. In some programming paradigms like
 * Qt/QML, the translation files depend on knowing exactly
 * where in the source code a source string was used.
 * 
 * @param {String} file path to the file where the source string was used
 * @param {Number} line line number within the file where the source string was used
 */
TranslationUnit.prototype.addOccurance = function(file, line) {
	this.occurances.push({
		file: file,
		line: line
	});
};

/**
 * Return an array of all occurances where the source string was
 * used in the source code.
 * @return {Array.<{file:String,line:Number}>} an array of occurances
 */
TranslationUnit.prototype.getOccurances = function(locale) {
	return this.occurances;
};

module.exports = TranslationUnit;