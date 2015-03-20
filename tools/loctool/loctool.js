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
	util.print("Usage: loctool.js [-h] [-v] [-o target_dir] [-l locale_list] [-s source_dir] [command]\n" +
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
	    "-s source_dir\n" +
		'  Where to find files to scan. Default "."\n' +
		"command\n" +
		"  Action to perform:\n" +
		"    extract - extract strings from the current app, but do not localize it\n" +
		"    localize - extract and localize the current app\n" +
		"    import [pathname] - import an xliff file or directory full of\n" +
		"       xliff files into the strings db\n" +
		"    export [-s] [pathname] - export the stringsdb to an xliff file\n" +
		"      -s - split by language so that the tool produces one xliff per language\n" +
		"  Default command: localize\n"
		);
	process.exit(1);
}

var sourcedir = ".", 
	targetdir = "resources",
	verbose = false,
	sourceLocale = new common.Locale("en-US"),
	locales,
	command = "localize",
	doExtract = true;
	doLocalize = true,
	splitByLang = false
	targetFile = "strings.xliff";

for (var i = 2; i < process.argv.length; i++) {
	if (process.argv[i].toUpperCase() === '-H' || process.argv[i] === '--help') {
		usage();
	} else if (process.argv[i].toUpperCase() === '-O' || process.argv[i] === '--output') {
		if (i+1 >= process.argv.length) {
			util.print("Error: " + process.argv[i] + " argument requires an output dir to follow it.\n");
			usage();
		}
		targetdir = process.argv[++i];
	} else if (process.argv[i].toUpperCase() === '-V' || process.argv[i] === '--verbose') {
		verbose = true;
	} else if (process.argv[i].toUpperCase() === '-L' || process.argv[i] === '--locales') {
		if (i+1 >= process.argv.length) {
			util.print("Error: " + process.argv[i] + " argument requires a list of locales to follow it.\n");
			usage();
		}
		locales = process.argv[++i].split(",");
	} else if (process.argv[i].toUpperCase() === '-S' || process.argv[i] === '--source') {
		if (i+1 >= process.argv.length) {
			util.print("Error: " + process.argv[i] + " argument requires a source dir to follow it.\n");
			usage();
		}
		sourcedir = process.argv[++i];
	} else {
		command = process.argv[i];
		switch (command) {
		case 'localize':
			break;
		case 'export':
			if (i+1 < process.argv.length && 
					(process.argv[i+1].toUpperCase() === '-S' || process.argv[i] === '--split')) {
				splitByLang = true;
				i++;
			}
			if (i+1 < process.argv.length) {
				targetFile = process.argv[i+1];
				i++;
			}
			break;
		case 'import':
			if (i+1 < process.argv.length) {
				targetFile = process.argv[i+1];
				i++;
			}
			break;
		default:
			util.print("Error: unrecognized command: " + command + "\n");
			usage();
			break;
		}
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
	var tu2;

	tu2 = stringsdb.getTranslationUnit(tu.key, "-");
	if (!tu2) {
		tu.status = "new";
	}
	
	for (var i = 0; i < locales.length; i++) {
		tu2 = stringsdb.getTranslationUnit(tu.key, locales[i]);
		
		if (!tu2) {
			// newStrings only has strings that are not yet translated.
			// re-use the source for the translation field for new strings
			newStrings.addTranslationUnit(common.merge(tu, {
				locale: locales[i], 
				translation: tu.source
			}));
		}
		
		stringsdb.addTranslationUnit(common.merge(tu, {
			locale: locales[i]
		}));
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

switch (command) {
	case "localize":
		walk(sourcedir, "");
		
		// verbose && util.print("Extracted json is: \n" + JSON.stringify(extracted, undefined, 4) + "\n");
		
		verbose && util.print("All strings extracted. Now writing output files...\n");
		
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
		fs.writeFileSync(outputFile, stringsdb.toXliff(function (tu) {
	    	return tu.status === "new";
	    }), "utf-8");
		verbose && util.print("New strings file written to " + outputFile + "\n");
		break;
		
	case "export":
		if (splitByLang) {
			var sets = stringsdb.split();
			var basename = path.basename(targetFile);
			var extension = path.extname(targetFile);
			var outputFile;
			
			for (var i = 0; i < sets.length; i++) {
				util.print("sets[i] is " + JSON.stringify(sets[i], undefined, 4) + "\n");
				outputFile = basename + sets[i].db.locale + extension; 
				fs.writeFileSync(outputFile, sets[i].toXliff(function (tu) {
			    	return tu.status === "new";
			    }), "utf-8");
			}
		} else {
			fs.writeFileSync(targetFile, stringsdb.toXliff(function (tu) {
		    	return tu.status === "new";
		    }), "utf-8");
		}
		break;
		
	case "import":
		var xliff = new TranslationSet({
			xliff: fs.readFileSync(targetFile, "utf-8")
		});
		stringsdb.merge(xliff);
		stringsdb.save();
		break;
}