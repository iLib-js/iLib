/* 
 * JSFile.js - represents a javascript source file
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

var JSFile = function(options) {
	this.sourcePath = options && options.filename;
	this.verbose = options && options.verbose;
	this.verbose && util.print("Scanning js file " + this.sourcePath + "\n");
	this.data = fs.readFileSync(this.sourcePath, 'utf8');
};
JSFile.prototype.getFileName = function() {
	return this.sourcePath;
};

var reSlashDotComments = new RegExp("\\/\\*( ?i18n )?(\\*[^/]|[^\\*])*\\*\\/", "g");
var reSlashSlashComments = new RegExp("\\/\\/( ?i18n )?.*$", "g");
var reGetStringSourceOnly = new RegExp("(\\.getString|\\$L)\\s*\\(\\s*('([^'\\n]|\\\\.)*'|\"([^\"\\n]|\\\\.)*\")\\s*\\)", "g");
var reGetStringSourceAndKey = new RegExp("(\\.getString|\\$L)\\s*\\(\\s*('([^'\\n]|\\\\.)*'|\"([^\"\\n]|\\\\.)*\")\\s*,\\s*('([^'\n]|\\\\.)*'|\"([^\"\\n]|\\\\.)*\")\\s*\\)", "g");
var re$LSourceOnly = new RegExp("\\.\\$L\\s*\\(\\s*('([^'\\n]|\\\\.)*'|\"([^\"\\n]|\\\\.)*\")\\s*\\)", "g");
var re$LSourceAndKey = new RegExp("\\.\\$L\\s*\\(\\s*('([^'\\n]|\\\\.)*'|\"([^\"\\n]|\\\\.)*\")\\s*,\\s*('([^'\\n]|\\\\.)*'|\"([^\"\\n]|\\\\.)*\")\\s*\\)", "g");

function stripQuotes(str) {
	if (str.charAt(0) === '"' || str.charAt(0) === "'") {
		str = str.substring(1);
	}
	if (str.charAt(str.length-1) === '"' || str.charAt(str.length-1) === "'") {
		str = str.substring(0,str.length-1);
	}
	return str;
}

JSFile.prototype.scan = function() {
	var text = this.data.replace(reSlashDotComments, ""); // ignore things inside slash dot comments
	var result;
	var lines = text.split("\n");
	var comment;
	var ts = new TranslationSet();
	
	for (var i = 0; i < lines.length; i++) {
		var line = lines[i];
		if ((result = reSlashSlashComments.exec(lines[i])) && result && result.length > 0) {
			if (result[1]) {
				comment = result[0].substring(2+result[1].length);
				this.verbose && util.print("Found translator's comment: " + comment + "\n");	
			}
			
			line = lines[i].replace(reSlashSlashComments, "");
		}
		
		while ((result = reGetStringSourceOnly.exec(line)) !== null && result && result.length > 0) {
			this.verbose && util.print("Found source string: " + result[2] + "\n");
			var str = stripQuotes(result[2]);
			ts.addTranslationUnit(new TranslationUnit({
				source: str,
				comment: comment
			}));
			comment = undefined;
		}
		
		while ((result = reGetStringSourceAndKey.exec(line)) !== null && result && result.length > 0) {
			this.verbose && util.print("Found source string: " + result[2] + ", key: " + result[5] + "\n");
			ts.addTranslationUnit(new TranslationUnit({
				key: stripQuotes(result[5]),
				source: stripQuotes(result[2]),
				comment: comment
			}));
			comment = undefined;
		}
	}
	
	return ts;
};
JSFile.prototype.localize = function() {
	// do the work in the FileType class
	return;
};

module.exports = JSFile;