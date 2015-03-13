/* 
 * JsonFile.js - represents a javascript source file
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
var common = require('../cldr/common.js');
var path = require('path');
var xml2js = require('xml2js');
var TranslationSet = require('./translationset.js');
var TranslationUnit = require('./translationunit.js');

var JsonFile = function(options) {
	if (options) {
		this.filename = options.filename;
		this.verbose = options.verbose;
		this.locales = options.locales;
	}
	this.verbose && util.print("Scanning json file " + this.filename + "\n");
	var text = fs.readFileSync(this.filename, 'utf8');
	if (text) {
		this.data = JSON.parse(text);
	}
};
JsonFile.prototype.getFileName = function() {
	return this.filename;
};
JsonFile.prototype.scan = function() {
	
};
JsonFile.prototype.localize = function() {
};

module.exports = JsonFile;