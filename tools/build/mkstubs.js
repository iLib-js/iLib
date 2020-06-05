/* 
 * mkstubs.js - ilib tool to extract stubs for 
 *
 * Copyright © 2015, 2020 JEDLSoft
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
 * This code is intended to be run under node.js
 */
var fs = require('fs');
var util = require('util');
var common = require('../cldr/common');
var path = require('../../js/lib/Path.js');

function usage() {
	console.log("Usage: mkstubs.js [-h] [assembled_source_file [output_file]]\n"
			+ "Create an dynamic-load stub file out of the existing assembled source file.\n\n"
			+ "-h or --help\n"
			+ "  this help\n"
			+ "assembled_source_file\n"
			+ '  File to scan. Default: "ilib-dyn.js"\n'
			+ "output_file\n"
			+ '  File to put output. Default: "ilib-stubs.js"');
	process.exit(1);
}

var sourcefile = "ilib-dyn.js";
var outputDynFile = "ilib-stubs-dyn.js";
var outputFile = "ilib-stubs.js";

if (process.argv.length > 2) {
	if (process.argv[2] == '-h' || process.argv[2] == '-H'
			|| process.argv[2] == '--help') {
		usage();
	}
	sourcefile = process.argv[2];
	if (process.argv.length > 3) {
		outputDynFile = process.argv[3];
	}
}

if (!fs.existsSync(sourcefile)) {
	console.log("Could not access source file " + sourcefile);
	usage();
}

console.log("mkstubs - make a dynamic-load stubs file");
console.log("source file: " + sourcefile);

var legacyMapping = {
	"AddressFmt" : "ilib.AddressFmt",
	"Address" : "ilib.Address",
	"Collator" : "ilib.Collator",
	"ElementIterator" : "ilib.ElementIterator",
	"CodePointSource" : "ilib.CodePointSource",
	"isAlnum" : "ilib.CType.isAlnum",
	"isAlpha" : "ilib.CType.isAlpha",
	"isAscii" : "ilib.CType.isAscii",
	"isBlank" : "ilib.CType.isBlank",
	"isCntrl" : "ilib.CType.isCntrl",
	"isDigit" : "ilib.CType.isDigit",
	"isGraph" : "ilib.CType.isGraph",
	"isIdeo" : "ilib.CType.isIdeo",
	"isLower" : "ilib.CType.isLower",
	"isPrint" : "ilib.CType.isPrint",
	"isPunct" : "ilib.CType.isPunct",
	"isScript" : "ilib.CType.isScript",
	"isSpace" : "ilib.CType.isSpace",
	"isUpper" : "ilib.CType.isUpper",
	"isXdigit" : "ilib.CType.isXdigit",
	"Currency" : "ilib.Currency",
	"Locale" : "ilib.Locale",
	"DateFmt" : "ilib.DateFmt",
	"DateRngFmt" : "ilib.DateRngFmt",
	"DurationFmt" : "ilib.DurFmt",
	"GlyphString" : "ilib.GlyphString",
	"JulianDay" : "ilib.JulianDay",
	"Loader" : "ilib.Loader",
	"LocaleInfo" : "ilib.LocaleInfo",
	"LocaleMatcher" : "ilib.LocaleMatcher",
	"StringMapper" : "ilib.StringMapper",
	"NameFmt" : "ilib.NameFmt",
	"Name" : "ilib.Name",
	"NormString" : "ilib.NormString",
	"NumFmt" : "ilib.NumFmt",
	"INumber" : "ilib.Number",
	"ResBundle" : "ilib.ResBundle",
	"ScriptInfo" : "ilib.ScriptInfo",
	"IString" : "ilib.String",
	"TimeZone" : "ilib.TimeZone",
	"UnitFmt" : "ilib.UnitFmt",
	"CopticDate" : "ilib.Date.CopticDate",
	"CopticCal" : "ilib.Cal.Coptic",
	"EthiopicDate" : "ilib.Date.EthiopicDate",
	"EthiopicCal" : "ilib.Cal.Ethiopic",
	"GregorianDate" : "ilib.Date.GregDate",
	"GregorianCal" : "ilib.Cal.Gregorian",
	"GregRataDie" : "ilib.Date.GregRataDie",
	"HanDate" : "ilib.Date.HanDate",
	"HanCal" : "ilib.Cal.Han",
	"HebrewDate" : "ilib.Date.HebrewDate",
	"HebrewCal" : "ilib.Cal.Hebrew",
	"IslamicDate" : "ilib.Date.IslamicDate",
	"IslamicCal" : "ilib.Cal.Islamic",
	"JulianDate" : "ilib.Date.JulDate",
	"JulianCal" : "ilib.Cal.Julian",
	"PersianDate" : "ilib.Date.PersDate",
	"PersianCal" : "ilib.Cal.Persian",
	"PersianAlgoDate" : "ilib.Date.PersAlgoDate",
	"PersianAlgoCal" : "ilib.Cal.PersianAlgo",
	"PersRataDie" : "ilib.Date.PersAstroRataDie",
	"PersAlgoRataDie": "ilib.Date.PersAlgoRataDie",
	"RataDie" : "ilib.Date.RataDie",
	"ThaiSolarDate" : "ilib.Date.ThaiSolarDate",
	"ThaiSolarCal" : "ilib.Cal.ThaiSolar",
	"CaseMapper" : "ilib.CaseMapper",
	"PhoneHandler" : "ilib.StateHandler",
	"NumberingPlan" : "ilib.NumPlan",
	"PhoneFmt" : "ilib.PhoneFmt",
	"PhoneGeoLocator" : "ilib.GeoLocator",
	"PhoneLocale" : "ilib.PhoneLoc",
	"PhoneNumber" : "ilib.PhoneNumber",
	"AreaUnit" : "ilib.Measurement.Area",
	"DigitalStorageUnit" : "ilib.Measurement.DigitalStorage",
	"DigitalSpeedUnit" : "ilib.Measurement.DigitalSpeed",
	"EnergyUnit" : "ilib.Measurement.Energy",
	"FuelConsumptionUnit" : "ilib.Measurement.FuelConsumption",
	"LengthUnit" : "ilib.Measurement.Length",
	"MassUnit" : "ilib.Measurement.Mass",
	"VelocityUnit" : "ilib.Measurement.Speed",
	"TemperatureUnit" : "ilib.Measurement.Temperature",
	"TimeUnit" : "ilib.Measurement.Time",
	"UnknownUnit" : "ilib.Measurement.Unknown",
	"VolumeUnit" : "ilib.Measurement.Volume",
	"PhoneHandlerFactory" : "ilib._handlerFactory",
	
	"JSUtils.shallowCopy" : "ilib.shallowCopy",
	"JSUtils.deepCopy" : "ilib.deepCopy",
	"JSUtils.mapString" : "ilib.mapString",
	"JSUtils.indexOf" : "ilib.indexOf",
	"JSUtils.toHexString" : "ilib.toHexString",
	"JSUtils.isDate" : "ilib.isDate",
	"JSUtils.merge" : "ilib.merge",
	"JSUtils.isEmpty" : "ilib.isEmpty",
	"JSUtils.hashCode" : "ilib.hashCode",

	"MathUtils.signum" : "ilib.signum",
	"MathUtils.floor" : "ilib._roundFnc.floor",
	"MathUtils.ceiling" : "ilib._roundFnc.ceiling",
	"MathUtils.down" : "ilib._roundFnc.down",
	"MathUtils.up" : "ilib._roundFnc.up",
	"MathUtils.halfup" : "ilib._roundFnc.halfup",
	"MathUtils.halfdown" : "ilib._roundFnc.halfdown",
	"MathUtils.halfeven" : "ilib._roundFnc.halfeven",
	"MathUtils.halfodd" : "ilib._roundFnc.halfodd",
	"MathUtils.mod" : "ilib.mod",
	"MathUtils.amod" : "ilib.amod",

	"SearchUtils.bsearch" : "ilib.bsearch",
	"SearchUtils.bsearch.numbers" : "ilib.bsearch.numbers",
	"SearchUtils.bisectionSearch" : "ilib.bisectionSearch",

	"Utils.mergeLocData" : "ilib.mergeLocData",
	"Utils.getLocFiles" : "ilib.getLocFiles",
	"Utils._callLoadData" : "ilib._callLoadData",
	"Utils.loadData" : "ilib.loadData",

	"Astro.initAstro" : "ilib.Date.initAstro",
	
	"DateFactory" : "ilib.Date.newInstance",
	"DateFactory._dateToIlib": "ilib.Date._dateToIlib",
	
	"CalendarFactory" : "ilib.Cal.newInstance",
	"CalendarFactory.getCalendars" : "ilib.Cal.getCalendars"
};

var parentMap = {
	"ilib.Date" : "IDate",
	"ilib.Cal" : "Calendar",
	"ilib.Measurement" : "MeasurementFactory"
};
var nonClasses = [ 
	"JSUtils", 
	"MathUtils", 
	"SearchUtils", 
	"Utils", 
	"Astro",
	"ilib",
	"DateFactory",
	"CalendarFactory"
];

var text = fs.readFileSync(sourcefile, "utf-8");
var lines = text.split(/\n/g);

var fileNameRegex = /^\/\*< ([^\*]*) \*\//;
var functionRegex1 = /^var\s*(\S+)\s*=\s*function\s*(\([^{]*\))\s*{$/;
var functionRegex2 = /^(\S+)\s*=\s*function\s*(\([^{]*\))\s*{$/;
var staticRegex = /\* @static/;
var privateRegex = /\* @private/;
var protectedRegex = /\* @protected/;
var publicRegex = /\* @public/;
var classRegex = /\* @class/;

var i, currentFile, outputDyn, output, isStatic = true, isPublic = true, isClass = false;

function parentId(name) {
	var parts = name.split(".");
	if (parts.length > 2) {
		return parts[0] + "." + parts[1];
	}
	return undefined;
}

function outputDynIdentifier(name, signature, filename, isStatic) {
	var parts, oldName = legacyMapping[name];
	// console.log("Dynamic stub " + name);
	if (oldName) {
		outputDyn += "if(!" + oldName + "){" + oldName + "=function" + signature + '{';
		
		parts = name.split(".");
		var nonClassParent = (parts.length > 1) ? parts.slice(0, parts.length-1).join('.') : name;
		
		parts = oldName.split(".");
		var parent = (parts.length > 1) ? parts.slice(0, parts.length-1).join('.') : oldName;

		if (nonClasses.indexOf(nonClassParent) > -1) {
			outputDyn += "ilib.extend(" + parent + ', require("./' + filename + '"))';
		} else {
			outputDyn += oldName + '=require("./' + filename + '")';
		}
		outputDyn += ';return ';
		if (!isStatic) {
			outputDyn += 'new ';
		}
		outputDyn += oldName + signature + ";};" + oldName + ".stub=true;}\n";
	}
}

function outputIdentifier(name, signature, filename, isStatic) {
	var oldName = legacyMapping[name];
	// console.log("Stub " + name);
	if (oldName) {
		output += oldName + "=" + name + ";";
	}
}

outputDyn = "/* This is a generated file. DO NOT EDIT, as your changes will be lost. */\n"
		+ "/* Instead, fix the code in mkstubs.js which generated this file.       */\n"
		+ 'var ilib=require("./ilib.js");\n'
		+ 'if(!ilib.CType)ilib.CType={};if(!ilib._roundFnc)ilib._roundFnc={};\n';

output = "/* This is a generated file. DO NOT EDIT, as your changes will be lost. */\n"
		+ "/* Instead, fix the code in mkstubs.js which generated this file.       */\n"
		+ 'ilib.CType=CType;ilib._roundFnc={};\n';

// first output the parents
var parentName;
for (parentName in parentMap) {
	outputDyn += "if(!" + parentName + ")" + parentName + '=require("./' + parentMap[parentName] + '.js");\n';

	output += parentName + "=" + parentMap[parentName] + ";";
}

output += "\n";

for (i = 0; i < lines.length; i++) {
	var result = fileNameRegex.exec(lines[i]);
	if (result !== null) {
		currentFile = result[1];
		isStatic = true;
		isPublic = true;
		isClass = false;
	} else if (staticRegex.test(lines[i])) {
		isStatic = true;
	} else if (classRegex.test(lines[i])) {
		isStatic = false;
		isPublic = true;
		isClass = true;
	} else if (protectedRegex.test(lines[i]) || privateRegex.test(lines[i])) {
		isPublic = false;
	} else if (publicRegex.test(lines[i])) {
		isPublic = true;
	} else if (currentFile !== "ilib.js"
			&& lines[i].indexOf(".prototype") === -1) {
		result = functionRegex1.exec(lines[i]);
		if (result === null) {
			result = functionRegex2.exec(lines[i]);
		}
		if (result !== null) {
			if (isPublic || isClass) {
				outputDynIdentifier(result[1], result[2], currentFile, isStatic);
				outputIdentifier(result[1], result[2], currentFile, isStatic);
			}
			isStatic = true;
			isPublic = true;
			isClass = false;
		}
	}
}

outputDyn += "module.exports = ilib;\n";

fs.writeFileSync(outputDynFile, outputDyn, "utf-8");
console.log("Output written to " + outputDynFile);

output += "\n";

fs.writeFileSync(outputFile, output, "utf-8");
console.log("Output written to " + outputFile);
