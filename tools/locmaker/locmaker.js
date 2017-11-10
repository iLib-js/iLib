/* 
 * locmaker.js - ilib tool to construct a javascript file that contains
 * all of the locale data needed for a particular set of classes with
 * a particular set of locales.
 *
 * Copyright © 2017, JEDLSoft
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
 * This code is intended to be run under node.js.
 */

var fs = require('fs');
var util = require('util');
var path = require('path');

// var clargs = require('command-line-args');
var ilib = require("ilib");
var Locale = require("ilib/lib/Locale");

var common = require('../cldr/common.js');

var thisDir = path.dirname(module.filename);
var localeDir = path.join(thisDir, "../../js/locale");
var toDir = "localedata";

function usage() {
    console.log("Usage: locmaker [-h] [toDir]\n" +
            "Generate js files containing all the ilib data for particular locales.\n\n" +
            "-h or --help\n" +
            "  this help\n" +
            "toDir\n" +
            "  directory where the output should go\n");
    process.exit(1);
}

if (!fs.existsSync(localeDir)) {
	console.log("Error: directory " + localeDir + 
		' is missing.\n' +
		'Please run "ant export" in the ilib root first before running this tool.');
	usage();
}

if (!fs.existsSync(toDir)) {
	console.log("Error: directory " + toDir +  ' is missing. so Create the directory.\n');

	fs.mkdir('localedata', function(err) {
		console.log("fail to create " + toDir + "directory");
    });
}

console.log("locmaker - generate js files containing ilib data for particular locales.\n" +
	"Copyright (c) 2017 JEDLSoft\n");


var reDataSlashSlash = /\/\/ !data (.*)/;
var reDataSlashDot = /\/\*\s*!data\s*([^\*]*)\*\//m;

function getDependencies(className) {
	var pathName = path.join(thisDir, "../../js/lib", className + ".js");
	
	var contents = fs.readFileSync(pathName, "utf-8");
	var files = [];
	
	reDataSlashSlash.lastIndex = 0;
	var match = reDataSlashSlash.exec(contents);
	if (match) {
		files = match[1].split(/\s+/).filter(function(entry) { return !!entry; });
	} else {
		match = reDataSlashDot.exec(contents);
		if (match) {
			files = match[1].split(/\s+/).filter(function(entry) { return !!entry; });
		}
	}	
	
	return files;
}

function getLocaleList(locale) {
	var l = new Locale(locale);
	var list = [];
	var lang = l.getLanguage();
	var script = l.getScript();
	var region = l.getRegion();
	
	if (lang) {
		if (region) {
			if (script) {
				list.push(path.join(lang, script, region));
			}
			
			list.push(path.join(lang, region));
		}
		
		if (script) {
			list.push(path.join(lang, script));
		}

		list.push(lang);
	}
	
	if (region) {
		list.push(path.join("und", region));
	}
	
	list.push("."); // also take the root as well
	
	return list;
}

var classList = [
	"DateFmt",
	"DateFactory",
	"IString",
	"NumFmt",
	"DurationFmt",
	"DateRngFmt",
	"LocaleInfo",
	"ResBundle",
	"Locale"
];

var localeList = ["ar-AE","ar-BH","ar-DJ","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LB","ar-LY",
"ar-MA","ar-MR","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-TN","ar-YE","as-IN","az-Latn-AZ","bg-BG","bn-IN",
"bs-Latn-BA","bs-Latn-ME","cs-CZ","da-DK","de-AT","de-CH","de-DE","de-LU","et-EE","el-CY","el-GR","en-AM","en-AU",
"en-AZ","en-CA","en-ET","en-GB","en-GH","en-GM","en-HK","en-IE","en-IN","en-IS","en-JP","en-KE","en-KR",
"en-LK","en-LR","en-MM","en-MW","en-MY","en-NG","en-NZ","en-PH","en-PK","en-PR","en-RW","en-SD","en-SG",
"en-SL","en-TW","en-TZ","en-UG","en-US","en-ZA","en-ZM","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO",
"es-EC","es-ES","es-GQ","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PH","es-PR","es-PY","es-SV",
"es-US","es-UY","es-VE","fa-AF","fa-IR","fi-FI","fr-BE","fr-BF","fr-BJ","fr-CA","fr-CD","fr-CF","fr-CG",
"fr-CH","fr-CI","fr-CM","fr-GQ","fr-DJ","fr-DZ","fr-FR","fr-GA","fr-GN","fr-LB","fr-LU","fr-ML","fr-RW","fr-SN",
"fr-TG","ga-IE","gu-IN","he-IL","hi-IN","hi-SG","hr-HR","hr-ME","hu-HU","id-ID","it-CH","it-IT","ja-JP",
"kk-Cyrl-KZ","km-KH","kn-IN","ko-KR","ku-Arab-IQ","lt-LT","lv-LV","mk-MK","ml-IN", "mn-Cyrl-MN","mr-IN","ms-MY",
"ms-SG","nb-NO","nl-BE","nl-NL","pa-IN","pa-PK","pl-PL","pt-AO","pt-BR","pt-GQ","pt-CV","pt-PT","ro-RO",
"ru-BY","ru-GE","ru-KG","ru-KZ","ru-RU","ru-UA","si-LK","sk-SK","sl-SI","sq-AL","sq-ME","sr-Latn-ME","sr-Latn-RS",
"sv-FI","sv-SE","sw-KE","ta-IN","ta-SG","te-IN","th-TH","tr-AM","tr-AZ","tr-CY","tr-TR","uk-UA","ur-IN",
"ur-PK","uz-Cyrl-UZ","uz-Latn-UZ","vi-VN","zh-Hans-CN","zh-Hans-SG","zh-Hant-HK","zh-Hans-MY","zh-Hant-TW",
"af-ZA","am-ET","ha-Latn-NG","or-IN","en-GE","en-CN","en-MX","en-TW","es-CA"];

console.log("locaneList Num : " + localeList.length);

var fullLocales = {};
var fullDeps = new Set();
var fullLocales = {};

// use a set to get the list of dependencies so that we don't duplicate data
classList.forEach(function(className) {
	console.log("Collecting dependencies for " + className);
	getDependencies(className).forEach(function(dep) {
		fullDeps.add(dep);
	});
});

console.log("Full list of dependencies: " + [...fullDeps]);

// use a set to get the list of locale dirs as well so we don't duplicate data
localeList.forEach(function(locale) {
	fullLocales[locale] = new Set();
	
	getLocaleList(locale).forEach(function(loc) {
		fullLocales[locale].add(loc);
	});
});

localeList.forEach(function(locale) {
	var output = "window.ilibData = window.ilibData || {};\n\n";
	
	fullDeps.forEach(function(dep) {
		getLocaleList(locale).forEach(function(sublocale) {
			var filename = path.join("../../js/locale", sublocale, dep + ".json");
			console.log("looking for " + filename);
			if (fs.existsSync(filename)) {
				var data = fs.readFileSync(filename);
				var key = (sublocale === ".") ? dep : dep + "_" + sublocale.replace(/\//g, "_");
				output += "ilibData." + key + " = " + data + "\n";
			}
		});
	});

	console.log("Writing out " + locale + ".js");
	
	fs.writeFileSync(path.join(toDir, locale + ".js"), output, "utf-8");
});

console.log("Done.");

/*
var options = clargs([
	{ name: rb.getStringJS("verbose"), type: Boolean, alias: rb.getStringJS("v"), description: rb.getStringJS("Verbose mode.") },
	{ name: rb.getStringJS("help"), type: Boolean, alias: rb.getStringJS("h"), description: rb.getStringJS("This help.") },
	{ name: rb.getStringJS("output"), type: String, alias: rb.getStringJS("o"), description: rb.getStringJS('Dir where the results should go. Default "./resources"')},
	{ name: rb.getStringJS("timezones"), type: String, alias: rb.getStringJS("z"), description: rb.getStringJS('Comma-separated list of time zones to include.')},
	{ name: rb.getStringJS("locales"), type: String, description: rb.getStringJS('Comma-separated list of BCP-47 style locale names to make. Default is all locales that already exist in the strings database.')},
	{ name: rb.getStringJS("classes"), type: Array, defaultOption: true, description: rb.getStringJS('Collect the locale data for this list of ilib classes.') }
]);

var sourcedir = ".", 
	targetdir = "resources",
	verbose = false,
	sourceLocale = new ilib.Locale("en-US"),
	locales,
	command = "localize",
	doExtract = true,
	doLocalize = true,
	splitByLang = false,
	targetFile = "strings.xliff",
	status,
	autoAdvance = false;

var ignoreDirs = ["test", "resources", "locale", "output"];
var fileTypesToLoad = ["JSFileType", "JsonFileType"];
var statii = ["new", "edit", "review", "approved"];

function usage() {		
	util.print(options.getUsage({
	    header: rb.getStringJS("Tool to extract and localize strings from software or web sites."),
	    footer: rb.getStringJS("For more information, visit http://sourceforge.net/p/i18nlib/wiki/iLib%20-%20an%20internationalization%20library%20written%20in%20Javascript/")
	}));
	process.exit(1);
}

if (options.help) {
	usage();
}

if (options.locales) {
	locales = options.locales.split(",");
}

if (typeof(options.output) !== 'undefined') {
	if (options.output) {
		targetdir = options.output;	
	} else {
		util.print(rb.getStringJS("Error: output argument requires an output dir to follow it.\n"));
		usage();
	}
}

if (typeof(options.source) !== 'undefined') {
	if (options.source) {
		sourcedir = options.source;	
	} else {
		util.print(rb.getStringJS("Error: source argument requires an source dir to follow it.\n"));
		usage();
	}
}

if (typeof(options.status) !== 'undefined') {
	if (options.status) {
		status = options.status;	
	} else {
		util.print(rb.getStringJS("Error: status argument requires a status to follow it.\n") +
			rb.getStringJS("One of:"));
		for (var j = 0; j < statii.length; j++) {
			util.print(" " + statii[j]);
		}
		util.print("\n");
		usage();
	}
}

verbose = !!options.verbose;
splitByLang = !!options.split;
autoAdvance = !!options.advance;

if (options.command && options.command.length > 0) {
	command = options.command[0];
	switch (command) {
	case 'localize':
	case 'export':
	case 'import':
		break;
	default:
		util.print(rb.getString("Error: unrecognized command: {cmd}\n").format({cmd: command}));
		usage();
		break;
	}
	
	if (options.command.length > 1) {
		targetFile = options.command[1];
	}
}

verbose && util.print(rb.getString("Doing command {cmd}\n").format({cmd: command}));

verbose && util.print(rb.getStringJS("Loctool was run with options:\n") + JSON.stringify(options, undefined, 4) + "\n");

if (!fs.existsSync(sourcedir)) {
	util.print(rb.getString("Error: Could not access source directory {dir}").format({dir: sourcedir}));
	usage();
}

if (!fs.existsSync(targetdir)) {
	try {
		common.makeDirs(targetdir);
	} catch (e) {
		util.print(rb.getString("Could not access or create target directory {dir}\nError: {errstring}\n").format({dir: targetdir, errstring: e}));
		usage();
	}
}

if (command === "import" && !fs.existsSync(targetFile)) {
	util.print(rb.getString("Error: Could not access the file {filename} to import it.\n").format({filename: targetFile}));
	usage();
}

if (verbose) {
	util.print(rb.getString("source dir: {dir}\n").format({dir: sourcedir}));
	util.print(rb.getString("target dir: {dir}\n").format({dir: targetdir}));
}


var configFileName = path.join(sourcedir, "loctool.json");
var config = {};

if (fs.existsSync(configFileName)) {
	try {
		var tmp = fs.readFileSync(configFileName, "utf-8");
		config = JSON.parse(config);
	} catch (e) {
		util.print(rb.getString("Error reading config file {filename}.\n").format({filename: configFileName}));
		util.print(e);
		process.exit(3);
	}
}

if (!locales) {
	if (typeof(config.locales) === 'object' && config.locales instanceof Array && config.locales.length > 0) {
		locales = config.locales;
	} else {
		locales = stringsdb.getAllLocales();
	}
}

var fileTypes = [];

if (typeof(config.fileTypes) === 'object' && config.fileTypes instanceof Array && config.fileTypes.length > 0) {
	fileTypesToLoad = config.fileTypes;
}

for (var i = 0; i < fileTypesToLoad.length; i++) {
	var type = require("./" + fileTypesToLoad[i] + ".js");
	fileTypes.push(new type({
		sourcedir: sourcedir,
		targetdir: targetdir,
		verbose: verbose,
		locales: locales
	}));
}

if (typeof(config.ignoreDirs) === 'object' && config.ignoreDirs instanceof Array && config.ignoreDirs.length > 0) {
	ignoreDirs = config.ignoreDirs;
}

if (typeof(config.statusList) === 'object' && config.statusList instanceof Array && config.statusList.length > 0) {
	statii = config.statusList;
}


var stringsdb = new TranslationSet({
	path: "."
});
var extracted = new TranslationSet();


function saveTransUnit(tu) {
	var tu2;

	tu2 = stringsdb.getTranslationUnit(tu.key, "-");
	if (!tu2) {
		tu.status = "new";
	}
	
	for (var i = 0; i < locales.length; i++) {
		tu2 = stringsdb.getTranslationUnit(tu.key, locales[i]);
		
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
				verbose && util.print(rb.getString("Scanning dir {dir}\n").format({dir: sourcePath}));
				walk(root, sourcePathRelative);
			} else {
				verbose && util.print(rb.getString("Ignoring dir {dir}\n").format({dir: sourcePath}));
			}
		} else {
			var file;
			
			for (var i = 0; i < fileTypes.length; i++) {
				if (fileTypes[i].isFileType(filename)) {
					try {
						file = fileTypes[i].newFile(sourcePath);

						saveTranslations(file.scan());
						file.localize(stringsdb);
					} catch (err) {
						util.print(rb.getString("File {path} is not readable or does not contain valid source.\n").format({path: sourcePath}));
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
		
		verbose && util.print(rb.getStringJS("All strings extracted. Now writing output files...\n"));
		
		stringsdb.save();
		verbose && util.print(rb.getString("Strings database saved to {path}\n").format({path: stringsdb.getPath()}));
		
		var outputDir;
		
		for (var i = 0; i < fileTypes.length; i++) {
			try {
				fileTypes[i].localize(stringsdb);
			} catch (err) {
				util.print(rb.getString("Could not write to output file for file type {filetype}\n").format({filetype: fileTypes[i].getName()}));
				util.print(err + "\n");
				process.exit(2);
			}
		}
		
		outputFile = path.join(targetdir, "extracted.xliff");
		fs.writeFileSync(outputFile, extracted.toXliff(), "utf-8");
		verbose && util.print(rb.getString("Extracted strings file written to {filename}\n").format({filename: outputFile}));
		
		outputFile = path.join(targetdir, "newstrings.xliff");
		fs.writeFileSync(outputFile, stringsdb.toXliff(function (tu) {
	    	return tu.status === "new";
	    }), "utf-8");
		verbose && util.print(rb.getString("New strings file written to {filename}\n").format({filename: outputFile}));
		break;
		
	case "export":
		if (splitByLang) {
			verbose && util.print(rb.getStringJS("Splitting by language\n"));
			var sets = stringsdb.split();
			var basename = path.basename(targetFile, ".xliff");
			var extension = path.extname(targetFile) || ".xliff";
			var outputFile;
			
			for (var loc in sets) {
				if (loc !== '-') {
					//util.print("sets[loc] is " + JSON.stringify(sets[loc], undefined, 4) + "\n");
					outputFile = basename + "." + loc + extension; 
					fs.writeFileSync(outputFile, sets[loc].toXliff(function (tu) {
				    	return tu.status === "new";
				    }), "utf-8");
					verbose && util.print(rb.getString("Wrote to {filename}\n").format({filename: outputFile}));
				}
			}
		} else {
			fs.writeFileSync(targetFile, stringsdb.toXliff(function (tu) {
		    	return tu.status === "new";
		    }), "utf-8");
			verbose && util.print(rb.getString("Wrote to {filename}\n").format({filename: targetFile}));
		}
		break;
		
	case "import":
		var xliff = new TranslationSet({
			xliff: fs.readFileSync(targetFile, "utf-8")
		});
		stringsdb.merge(xliff);
		stringsdb.save();
		verbose && util.print(rb.getString("Successfully imported {filename}\n").format({filename: targetFile}));
		break;
}
*/
