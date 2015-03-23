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

var reSlashDotCommentOneLine = new RegExp("/\\*+\\s*(i18n)?\\s*((\\*[^/]|[^\\*])*)\\*/\\s*$", "g");
var reSlashDotCommentStart = new RegExp("/\\*+\\s*(i18n)?\\s*((\\*[^/]|[^\\*])*)$", "g");
var reSlashDotCommentEnd = new RegExp("((\\*[^/]|[^\\*])*)\\*/", "g");
var reSlashSlashComments = new RegExp("//\\s*(i18n)?\\s*(.*)$", "g");
var reGetStringSourceOnly = new RegExp("(\\.getString(JS)?|\\$L)\\s*\\(\\s*('([^'\\n]|\\\\.)*'|\"([^\"\\n]|\\\\.)*\")\\s*\\)", "g");
var reGetStringSourceAndKey = new RegExp("(\\.getString(JS)?|\\$L)\\s*\\(\\s*('([^'\\n]|\\\\.)*'|\"([^\"\\n]|\\\\.)*\")\\s*,\\s*('([^'\n]|\\\\.)*'|\"([^\"\\n]|\\\\.)*\")\\s*\\)", "g");
var re$LSourceOnly = new RegExp("\\.\\$L\\s*\\(\\s*('([^'\\n]|\\\\.)*'|\"([^\"\\n]|\\\\.)*\")\\s*\\)", "g");
var re$LSourceAndKey = new RegExp("\\.\\$L\\s*\\(\\s*('([^'\\n]|\\\\.)*'|\"([^\"\\n]|\\\\.)*\")\\s*,\\s*('([^'\\n]|\\\\.)*'|\"([^\"\\n]|\\\\.)*\")\\s*\\)", "g");
var reStarPrefix = new RegExp("^\\s*\\*\\s*", "g");

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
	var text = this.data; // this.data.replace(reSlashDotComments, ""); // ignore things inside slash dot comments
	var result;
	var lines = text.split("\n");
	var comment = undefined, inComment = false;
	var ts = new TranslationSet();
	
	for (var i = 0; i < lines.length; i++) {
		var line = lines[i];
		if (inComment) {
			reSlashDotCommentEnd.lastIndex = 0;
			if ((result = reSlashDotCommentEnd.exec(line)) && result && result.length > 0) {
				comment += line;
				inComment = false;
				lines[i] = line.replace(reSlashDotCommentEnd, "");
				i--; // reprocess this line in case there is something after the end of the comment

				// process the comment as if it were all one line now
				// util.print("Checking comment " + comment + "\n");
				reSlashDotCommentOneLine.lastIndex = 0;
				if ((result = reSlashDotCommentOneLine.exec(comment)) && result && result.length > 0) {
					if (result[1] && result[1].trim() === "i18n" && result[2]) {
						comment = result[2];
						this.verbose && util.print("Found translator's comment: " + comment + "\n");
						// util.print("comment found: " + comment + "\n");
					} else {
						// util.print("not a comment\n");
						comment = undefined;
					}
				} else {
					// util.print("not a comment\n");
					comment = undefined;
				}
			} else {
				if (comment && comment.charAt(comment.length-1) !== ' ') {
					comment += ' ';
				}
				comment += line.replace(reStarPrefix, "");
			} 
		} else {
			reSlashDotCommentOneLine.lastIndex = 0;
			if ((result = reSlashDotCommentOneLine.exec(line)) && result && result.length > 0) {
				if (result[1] && result[1].trim() === "i18n" && result[2]) {
					comment = result[2];
					this.verbose && util.print("Found translator's comment: " + comment + "\n");	
				}
				
				line = line.replace(reSlashDotCommentOneLine, "");
			}
			reSlashDotCommentStart.lastIndex = 0;
			if ((result = reSlashDotCommentStart.exec(line)) && result && result.length > 0) {
				comment = line;
				inComment = true;
				
				line = line.replace(reSlashDotCommentStart, "");
			}
			//util.print("line is " + line + "\n");
			reSlashSlashComments.lastIndex = 0;
			if ((result = reSlashSlashComments.exec(line)) && result && result.length > 0) {
				//util.print("Slash Slash Result: " + JSON.stringify(result, undefined, 4) + "\n");
				if (result[1] && result[1].trim() === "i18n" && result[2]) {
					comment = result[2];
					this.verbose && util.print("Found translator's comment: " + comment + "\n");	
				}
				
				line = line.replace(reSlashSlashComments, "");
			}
			//util.print("line is now " + line + "\n");
			reGetStringSourceOnly.lastIndex = 0;
			while ((result = reGetStringSourceOnly.exec(line)) !== null && result && result.length > 0) {
				this.verbose && util.print("Found source string: " + result[3] + "\n");
				var str = stripQuotes(result[3]);
				ts.addTranslationUnit(new TranslationUnit({
					source: str,
					comment: comment && comment.trim()
				}));
				comment = undefined;
			}
			
			reGetStringSourceAndKey.lastIndex = 0;
			while ((result = reGetStringSourceAndKey.exec(line)) !== null && result && result.length > 0) {
				this.verbose && util.print("Found source string: " + result[3] + ", key: " + result[6] + "\n");
				ts.addTranslationUnit(new TranslationUnit({
					key: stripQuotes(result[6]),
					source: stripQuotes(result[3]),
					comment: comment && comment.trim()
				}));
				comment = undefined;
			}
		}
	}
	
	return ts;
};
JSFile.prototype.localize = function() {
	// do the work in the FileType class
	return;
};

module.exports = JSFile;