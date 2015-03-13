/* 
 * loctool.js - ilib tool to extract translatable strings from JS files
 * and generate json translation files
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

function usage() {
	util.print("Usage: loctool.js [-h] [-v] [-o target_dir] [-l locale_list] command [source_dir]\n" +
		"Scan js files for translatable strings and generate translated json files.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"-v\n" +
	    "  Verbose mode" +
	    "-o target_dir\n" +
		'  Where to put the results. Default "./resources"\n' +
	    "-l locale_list\n" +
		'  Comma-separated list of BCP-47 style locale names to localize to. Default is\n' +
		'  all locales that already exist in the strings database.\n' +
		"command\n" +
		"  Action to perform: extract, merge, split" +
	    "source_dir\n" +
		'  Where to find files to scan. Default "."\n');
	process.exit(1);
}

var sourcedir = ".", 
	targetdir = "resources",
	verbose = false,
	sourceLocale = new common.Locale("en-US"),
	locales;

for (var i = 2; i < process.argv.length; i++) {
	if (process.argv[i].toUpperCase() === '-H' || process.argv[i] === '--help') {
		usage();
	} else if (process.argv[i].toUpperCase() === '-O' || process.argv[i] === '--output') {
		targetdir = process.argv[i];
	} else if (process.argv[i].toUpperCase() === '-V' || process.argv[i] === '--verbose') {
		verbose = true;
	} else if (process.argv[i].toUpperCase() === '-L' || process.argv[i] === '--locales') {
		if (i+1 >= process.argv.length) {
			util.print("Error: " + process.argv[i] + " argument requires a list of locales to follow it.\n");
			usage();
		}
		locales = process.argv[++i].split(",");
	} else {
		sourcedir = process.argv[i];
	}
}

if (!fs.existsSync(sourcedir)) {
	util.print("Error: Could not access source directory " + sourcedir + "\n");
	usage();
}

if (!fs.existsSync(targetdir)) {
	try {
		common.makeDirs(targetdir);
	} catch (e) {
		util.print("Could not access or create target directory " + targetdir + "\nError: " + e + "\n");
		usage();
	}
}

if (verbose) {
	util.print("source dir: " + sourcedir + "\n");
	util.print("target dir: " + targetdir + "\n");
}

var ignoreDirs = ["test", "resources", "locale", "output"];
var fileTypesToLoad = ["JSFileType", "JsonFileType"];

var stringsdb = new TranslationSet({
	path: "."
});
var extracted = new TranslationSet();
var newStrings = new TranslationSet();

if (!locales) {
	locales = stringsdb.getAllLocales();
}

var fileTypes = [];

for (var i = 0; i < fileTypesToLoad.length; i++) {
	var type = require("./" + fileTypesToLoad[i] + ".js");
	fileTypes.push(new type({
		sourcedir: sourcedir,
		targetdir: targetdir,
		verbose: verbose,
		locales: locales
	}));
}


function saveTransUnit(tu) {
	for (var i = 0; i < locales.length; i++) {
		var tu2 = stringsdb.getTranslationUnit(tu.key, locales[i]);
		
		if (!tu2) {
			// newStrings only has strings that are not yet translated.
			// re-use the source for the translation field for new strings
			newStrings.addTranslationUnit(common.merge(tu, {
				locale: locales[i], 
				translation: tu.source
			}));
		}
	}
	
	// saves all strings
	stringsdb.addTranslationUnit(tu);
	
	// only has strings extracted in this run of the loc tool
	extracted.addTranslationUnit(tu);
}

function saveTranslations(ts) {
	if (ts) {
		var units = ts.getAllTranslationUnits();
		for (var i = 0; i < units.length; i++) {
			saveTransUnit(units[i]);
		}
	}
}

function walk(root, dir) {
	var results = [];
	var list = fs.readdirSync(path.join(root, dir));
	list.forEach(function (filename) {
		var sourcePathRelative = path.join(dir, filename);
		var sourcePath = path.join(root, sourcePathRelative);
		var stat = fs.statSync(sourcePath);
		if (stat && stat.isDirectory()) {
			if (ignoreDirs.indexOf(filename) === -1 && path.normalize(sourcePath) !== path.normalize(targetdir)) {
				verbose && util.print("Scanning dir " + sourcePath + "\n");
				walk(root, sourcePathRelative);
			} else {
				verbose && util.print("Ignoring dir " + sourcePath + "\n");
			}
		} else {
			var obj, file;
			
			for (var i = 0; i < fileTypes.length; i++) {
				if (fileTypes[i].isFileType(filename)) {
					try {
						file = fileTypes[i].newFile(sourcePath);

						saveTranslations(file.scan());
						file.localize(stringsdb);
					} catch (err) {
						util.print("File " + sourcePath + " is not readable or does not contain valid source.\n");
						util.print(err + "\n");
						process.exit(2);
					}
					
				}
			}
		}
	});

	return results;
}

walk(sourcedir, "");

// verbose && util.print("Extracted json is: \n" + JSON.stringify(extracted, undefined, 4) + "\n");

verbose && util.print("All strings extracted. Now writing output files...\n");

function getOutputJson(locale) {
	var json = {};
	var tulist = extracted.getAllTranslationUnits(locale);
	var tu;
	for (var i = 0; i < tulist.length; i++) {
		tu = tulist[i];
		if (tu.translation) {
			json[tu.key] = tu.translation;
		}
	}
	return json;
}

stringsdb.save();
verbose && util.print("Strings database saved to " + stringsdb.getPath() + "\n");

var outputDir;

for (var i = 0; i < fileTypes.length; i++) {
	try {
		fileTypes[i].localize(stringsdb);
	} catch (err) {
		util.print("Could not write to output file for file type " + fileTypes[i].getName() + "\n");
		util.print(err + "\n");
		process.exit(2);
	}
}

outputFile = path.join(targetdir, "extracted.xliff");
fs.writeFileSync(outputFile, extracted.toXliff(), "utf-8");
verbose && util.print("Extracted strings file written to " + outputFile + "\n");

outputFile = path.join(targetdir, "newstrings.xliff");
fs.writeFileSync(outputFile, newStrings.toXliff(), "utf-8");
verbose && util.print("New strings file written to " + outputFile + "\n");
