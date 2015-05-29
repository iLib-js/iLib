/* 
 * JsonFileType.js - represents a collection of javascript source files
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
/* 
 * This code is intended to be run under node.js. This requires that you
 * install the package xml2js from npm.
 */
var fs = require('fs');
var util = require('util');
var path = require('path');
var xml2js = require('xml2js');

var common = require('../cldr/common.js');
var TranslationSet = require('./translationset.js');
var TranslationUnit = require('./translationunit.js');
var JsonFile = require("./JsonFile.js");

var JsonFileType = function(options) {
	if (options) {
		this.verbose = options.verbose;
		this.locales = options.locales;
	}
};

JsonFileType.prototype.getName = function(filename) {
	return "json";
};

JsonFileType.prototype.isFileType = function(filename) {
	// use upper-case because of case-insensitive Windows file names
	return filename && filename.toUpperCase().match(/\.JSON$/);
};

JsonFileType.prototype.newFile = function(filename) {
	return new JsonFile({
		filename: filename,
		verbose: this.verbose,
		locales: this.locales
	});
};

JsonFileType.prototype.addSet = function(set) {
	// don't need to do anything at the file type level
	return;
};
JsonFileType.prototype.localize = function() {
	// don't need to do anything at the file type level
	return;
};

module.exports = JsonFileType;