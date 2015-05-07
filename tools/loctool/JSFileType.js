/* 
 * JSFileType.js - represents a collection of javascript source files
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
var ilib = require("ilib").ilib;

var common = require('../cldr/common.js');
var TranslationSet = require('./translationset.js');
var TranslationUnit = require('./translationunit.js');
var TreeLocale = require('./treelocale.js');
var JSFile = require("./JSFile.js");

ilib.ResBundle.prototype.getStringJS = function(source, key, escapeMode) {
	return this.getString(source, key, escapeMode).toString();
};
var rb = new ilib.ResBundle();

var JSFileType = function(options) {
	if (options) {
		this.verbose = options.verbose;
		this.locales = options.locales;
		this.targetdir = options.targetdir;
		this.sourcedir = options.sourcedir;
	}
	this.set = new TranslationSet();
};

JSFileType.prototype.getName = function(filename) {
	return "javascript";
};

JSFileType.prototype.isFileType = function(filename) {
	// use upper-case because of case-insensitive Windows file names
	return filename && filename.toUpperCase().match(/\.JS$/);
};

JSFileType.prototype.newFile = function(filename) {
	return new JSFile({
		filename: filename,
		verbose: this.verbose,
		locales: this.locales
	});
};

JSFileType.prototype.addSet = function(set) {
	this.set.merge(set);
};

function getOutputJson(set, locale) {
	var json = {};
	var tulist = set.getAllTranslationUnits(locale);
	var tu, ancestor;
	for (var i = 0; i < tulist.length; i++) {
		tu = tulist[i];
		ancestor = set.getAncestorTranslationUnit(tu.key, tu.locale);
		if (tu.translation && (!ancestor || tu.translation !== ancestor.translation) && (!tu.status || tu.status === "approved")) {
			json[tu.key] = tu.translation;
		}
	}
	return json;
}

JSFileType.prototype.localize = function(translations) {
	this.verbose && util.print(rb.getStringJS("Writing strings for the javascript file type.\n"));
	for (var i = 0; i < this.locales.length; i++) {
		var loc = new TreeLocale(this.locales[i]);
		outputDir = this.targetdir;
		if (loc.getLanguage()) {
			outputDir = path.join(outputDir, loc.getLanguage());
			if (loc.getScript()) {
				outputDir = path.join(outputDir, loc.getScript());
			}
			if (loc.getRegion()) {
				outputDir = path.join(outputDir, loc.getRegion());
			}
		}
		common.makeDirs(outputDir);
		outputFile = path.join(outputDir, "strings.js");
		var locname = loc.getSpec();
		locname = (locname === "-") ? "" : "_" + locname.replace("-", "_");
		fs.writeFileSync(outputFile, 
				"ilib.data.strings" +
				locname + 
				" = " + 
				JSON.stringify(getOutputJson(translations, this.locales[i]), undefined, 4) +
				";\n", "utf-8");
		this.verbose && util.print(rb.getString("JS output file written to {filename}\n").format({filename: outputFile}));
		
		outputFile = path.join(outputDir, "strings.json");
		fs.writeFileSync(outputFile, JSON.stringify(getOutputJson(translations, this.locales[i]), undefined, 4) + "\n", "utf-8");
		this.verbose && util.print(rb.getString("Json output file written to {filename}\n").format({filename: outputFile}));
	}
};

module.exports = JSFileType;