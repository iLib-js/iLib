/* 
 * dependencies.js - automatically find modules and update code that 
 * uses those modules to have the right require() statements at the
 * top of them
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
var path = require('path');

function usage() {
	console.log("Usage: dependencies.js [-h] [-c] [-v] [-I lib_dir ] [start_dir]\n" +
		"Automatically find modules and update code that uses those modules\n" +
		"to have the right require() statements at the top of them.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"-c or --convert\n" +
		"  Find calls to the legacy ilib namespace and convert them to calls\n" +
		"  to the equivalent new ilib modules.\n" +
		"-v or --verbose\n" +
		"  Print verbose output to trace was this script is doing.\n" +
		"-I or --include lib_dir\n" +
		"  Name a directory to search for modules. Multiple directories can be" +
		"  specified with multiple -I arguments. Default is to search the\n" +
		"  start dir for modules." +
		"start_dir\n" +
		"  The top level of the diretory to search for js file that need their\n" +
		'  require() statements updated. Default "."');
	process.exit(1);
}

var startDir = [];
var includes = [];
var convert = false;
var verbose = false;

for (var i = 2; i < process.argv.length; i++) {
	switch (process.argv[i].toLowerCase()) {
	case "-h":
	case "--help":
		usage();
		break;
		
	case "-i":
	case "--include":
		if (i+1 >= process.argv.length) {
			console.log("Error: " + process.argv[i] + " must be followed by a directory name");
			usage();
		}
		i++;
		includes.push(process.argv[i]);
		break;
		
	case "-c":
	case "--convert":
		convert = true;
		break;
		
	case "-v":
	case "--verbose":
		verbose = true;
		break;
		
	default:
		if (process.argv[i].charAt(0) === '-') {
			console.log("Unrecognized option: " + process.argv[i]);
			usage();
		}
		startDir.push(process.argv[i]);
		break;
	}
}

if (startDir.length === 0) {
	startDir.push(".");
}

verbose && console.log("Start dir: " + startDir);

for (i = 0; i < startDir.length; i++) {
	if (!fs.existsSync(startDir[i])) {
		console.log("Could not access start directory " + startDir[i]);
		usage();
	}
}

for (i = 0; i < includes.length; i++) {
	if (!fs.existsSync(includes[i])) {
		console.log("Could not access include directory " + includes[i]);
		usage();
	}
}
if (includes.length === 0) {
	includes.push(".");
}

var legacyCalls = {
	"ilib.Date.initAstro": "Astro.initAstro",
	"ilib.Date._dtr": "Astro._dtr",
	"ilib.Date._rtd": "Astro._rtd",
	"ilib.Date._dcos": "Astro._dcos",
	"ilib.Date._dsin": "Astro._dsin",
	"ilib.Date._dtan": "Astro._dtan",
	"ilib.Date._fixangle": "Astro._fixangle",
	"ilib.Date._fixangr": "Astro._fixangr",
	"ilib.Date._equinox": "Astro._equinox",
	"ilib.Date._deltat": "Astro._deltat",
	"ilib.Date._obliqeq": "Astro._obliqeq",
	"ilib.Date._sunpos": "Astro._sunpos",
	"ilib.Date._nutation": "Astro._nutation",
	"ilib.Date._equationOfTime": "Astro._equationOfTime",
	"ilib.Date._poly": "Astro._poly",
	"ilib.Date._universalFromLocal": "Astro._universalFromLocal",
	"ilib.Date._localFromUniversal": "Astro._localFromUniversal",
	"ilib.Date._aberration": "Astro._aberration",
	"ilib.Date._nutation2": "Astro._nutation2",
	"ilib.Date._ephemerisCorrection": "Astro._ephemerisCorrection",
	"ilib.Date._ephemerisFromUniversal": "Astro._ephemerisFromUniversal",
	"ilib.Date._universalFromEphemeris": "Astro._universalFromEphemeris",
	"ilib.Date._julianCenturies": "Astro._julianCenturies",
	"ilib.Date._solarLongitude": "Astro._solarLongitude",
	"ilib.Date._lunarLongitude": "Astro._lunarLongitude",
	"ilib.Date._newMoonTime": "Astro._newMoonTime",
	"ilib.Date._lunarSolarAngle": "Astro._lunarSolarAngle",
	"ilib.Date._newMoonBefore": "Astro._newMoonBefore",
	"ilib.Date._newMoonAtOrAfter": "Astro._newMoonAtOrAfter",
	"ilib.Date._nextSolarLongitude": "Astro._nextSolarLongitude",
	"ilib.Date._floorToJD": "Astro._floorToJD",
	"ilib.Date._ceilToJD": "Astro._ceilToJD",
	"ilib.Date.RataDie": "RataDie",

	"ilib.shallowCopy": "JSUtils.shallowCopy",
	"ilib.deepCopy": "JSUtils.deepCopy",
	"ilib.mapString": "JSUtils.mapString",
	"ilib.indexOf": "JSUtils.indexOf",
	"ilib.toHexString": "JSUtils.toHexString",
	"ilib.isDate": "JSUtils.isDate",
	"ilib.merge": "JSUtils.merge",
	"ilib.isEmpty": "JSUtils.isEmpty",
	"ilib.hashCode": "JSUtils.hashCode",
	"ilib._handlerFactory": "PhoneHandlerFactory",

	"ilib.signum": "MathUtils.signum",
	"ilib._roundFnc.floor": "MathUtils.floor",
	"ilib._roundFnc.ceiling": "MathUtils.ceiling",
	"ilib._roundFnc.down": "MathUtils.down",
	"ilib._roundFnc.up": "MathUtils.up",
	"ilib._roundFnc.halfup": "MathUtils.halfup",
	"ilib._roundFnc.halfdown": "MathUtils.halfdown",
	"ilib._roundFnc.halfeven": "MathUtils.halfeven",
	"ilib._roundFnc.halfodd": "MathUtils.halfodd",
	"ilib.mod": "MathUtils.mod",
	"ilib.amod": "MathUtils.amod",

	"ilib.bsearch": "SearchUtils.bsearch",
	"ilib.bsearch.number": "SearchUtils.bsearch.number",
	"ilib.bisectionSearch": "SearchUtils.bisectionSearch",

	"ilib.mergeLocData": "Utils.mergeLocData",
	"ilib.getLocFiles": "Utils.getLocFiles",
	"ilib._callLoadData": "Utils._callLoadData",
	"ilib.loadData": "Utils.loadData",

	"ilib.AddressFmt": "AddressFmt",
	"ilib.Address": "Address",
	"ilib.Calendar": "Calendar",
	"ilib.CodePointSource": "CodePointSource",
	"ilib.Collator": "Collator",
	"ilib.CType.isAlnum": "isAlnum",
	"ilib.CType.isAlpha": "isAlpha",
	"ilib.CType.isAscii": "isAscii",
	"ilib.CType.isBlank": "isBlank",
	"ilib.CType.isCntrl": "isCntrl",
	"ilib.CType.isDigit": "isDigit",
	"ilib.CType.isGraph": "isGraph",
	"ilib.CType.isIdeo": "isIdeo",
	"ilib.CType.isLower": "isLower",
	"ilib.CType.isPrint": "isPrint",
	"ilib.CType.isPunct": "isPunct",
	"ilib.CType.isScript": "isScript",
	"ilib.CType.isSpace": "isSpace",
	"ilib.CType.isUpper": "isUpper",
	"ilib.CType.isXdigit": "isXdigit",
	"ilib.CType": "CType",
	"ilib.Currency": "Currency",
	"ilib.DateFmt": "DateFmt",
	"ilib.DateRngFmt": "DateRngFmt",
	"ilib.DurFmt": "DurationFmt",
	"ilib.ElementIterator": "ElementIterator",
	"ilib.GlyphString": "GlyphString",
	"ilib.JulianDay": "JulianDay",
	"ilib.LocaleInfo": "LocaleInfo",
	"ilib.Locale": "Locale",
	"ilib.LocaleMatcher": "LocaleMatcher",
	"ilib.StringMapper": "StringMapper",
	"ilib.NameFmt": "NameFmt",
	"ilib.Name": "Name",
	"ilib.NodeLoader": "NodeLoader",
	"ilib.NormString": "NormString",
	"ilib.NumFmt": "NumFmt",
	"ilib.Number": "INumber",
	"ilib.Path": "Path",
	"ilib.ResBundle": "ResBundle",
	"ilib.ScriptInfo": "ScriptInfo",
	"ilib.String": "IString",
	"ilib.TimeZone": "TimeZone",
	"ilib.UnitFmt": "UnitFmt",
	"ilib.Date.CopticDate": "CopticDate",
	"ilib.Cal.Coptic": "CopticCal",
	"ilib.Date.EthiopicDate": "EthiopicDate",
	"ilib.Cal.Ethiopic": "EthiopicCal",
	"ilib.Date.GregDate": "GregorianDate",
	"ilib.Cal.Gregorian": "GregorianCal",
	"ilib.Date.HanDate": "HanDate",
	"ilib.Cal.Han": "HanCal",
	"ilib.Date.HebrewDate": "HebrewDate",
	"ilib.Cal.Hebrew": "HebrewCal",
	"ilib.Date.IslamicDate": "IslamicDate",
	"ilib.Cal.Islamic": "IslamicCal",
	"ilib.Date.JulDate": "JulianDate",
	"ilib.Cal.Julian": "JulianCal",
	"ilib.Date.PersDate": "PersianDate",
	"ilib.Date.PersAlgoDate": "PersianAlgoDate",
	"ilib.Cal.PersianAlgo": "PersianAlgoCal",
	"ilib.Cal.Persian": "PersianCal",
	"ilib.Date.ThaiSolarDate": "ThaiSolarDate",
	"ilib.Cal.ThaiSolar": "ThaiSolarCal",

	"ilib.Date.CopticRataDie": "CopticRataDie",
	"ilib.Date.EthiopicRataDie": "EthiopicRataDie",
	"ilib.Date.GregRataDie": "GregRataDie",
	"ilib.Date.HanRataDie": "HanRataDie",
	"ilib.Date.HebrewRataDie": "HebrewRataDie",
	"ilib.Date.IslamicRataDie": "IslamicRataDie",
	"ilib.Date.JulianRataDie": "JulianRataDie",
	"ilib.Date.PersAlgoRataDie": "PersAlgoRataDie",
	"ilib.Date.PersAstroRataDie": "PersRataDie",
	"ilib.Date.RataDie": "RataDie",
	
	"ilib.Date.newInstance": "DateFactory",
	"ilib.Cal.newInstance": "CalendarFactory",

	"ilib.CaseMapper": "CaseMapper",
	"ilib.StateHandler": "PhoneHandler",
	"ilib.NumPlan": "NumberingPlan",
	"ilib.PhoneFmt": "PhoneFmt",
	"ilib.GeoLocator": "PhoneGeoLocator",
	"ilib.PhoneLoc": "PhoneLocale",
	"ilib.PhoneNumber": "PhoneNumber",
	"ilib.Measurement.Area": "AreaUnit",
	"ilib.Measurement.DigitalStorage": "DigitalStorageUnit",
	"ilib.Measurement.DigitalSpeed": "DigitalSpeedUnit",
	"ilib.Measurement.Energy": "EnergyUnit",
	"ilib.Measurement.FuelConsumption": "FuelConsumptionUnit",
	"ilib.Measurement.Length": "LengthUnit",
	"ilib.Measurement.Mass": "MassUnit",
	"ilib.Measurement.Velocity": "VelocityUnit",
	"ilib.Measurement.Speed": "VelocityUnit",
	"ilib.Measurement.Temperature": "TemperatureUnit",
	"ilib.Measurement.Time": "TimeUnit",
	"ilib.Measurement.Unknown": "UnknownUnit",
	"ilib.Measurement.Volume": "VolumeUnit",
	"ilib.Measurement": "MeasurementFactory",
	"webLoader": "WebLoader",
	"qmlLoader": "QMLLoader",
	
	"cli.TestSuite": "TestSuite",

	"ilib.Date": "DateFactory",
	"ilib.Cal": "CalendarFactory",
	
	// for the unit tests
	"cli.TestSuite": "TestSuite",
	"cli.TestRunner": "TestRunner"
};

var reExports = new RegExp("module\\.exports\\s*=\\s*(\\S+);", "g");
var reIdent = new RegExp("", "g");
var modules = {};
var reRequires = new RegExp("=\\s*require\\s*\\(\\s*['\"][^'\"]*/([^/'\"]+)\\.[Jj][Ss]['\"]", "g");
var reSlashStarComments = new RegExp("/\\*(\\*[^/]|[^\\*])*\\*/", "mg");
var reSlashSlashComments = new RegExp("//.*\n", "g");
var reSlashSlashNoDependencies = new RegExp("//\\s*!dependencies:\\s*false");
var reEmptyLine = new RegExp("^\\s*$");
var filesUpdated = 0;

function processFile(dir, file, update) {
	var pathname = path.join(dir, file);
	var result, text = fs.readFileSync(pathname, "utf-8");
	if (text) {
		if (update) {
			verbose && console.log("Searching " + pathname + " for module definitions...");
			if ((result = reExports.exec(text)) && result && result.length > 0) {
				verbose && console.log("found " + result[1]);
				modules[result[1]] = {
					"path": pathname,
					"re": new RegExp("([^\\w\\$]" + result[1] + "[^\\w\\$]|^" + result[1] + "[^\\w\\$]|[^\\w\\$]" + result[1] + "$)")
				}
			}
			verbose && console.log("");
			reExports.lastIndex = 0;
		} else {
			verbose && console.log("Searching " + pathname + " to update its require() calls.");
			if (reSlashSlashNoDependencies.test(text)) {
				verbose && console.log("  Found a 'dependencies: false' comment. Skipping this file.");
			} else {
				var uses = [];
				var requires = [];
				var i, j, changes = 0;
				
				if (convert) {
					var len = text.length;
					// first convert old ilib namespace calls to the modular classes
					for (var name in legacyCalls) {
						console.log("  trying " + name);
						text = text.replace(new RegExp(name, "g"), legacyCalls[name]);
						if (text.length !== len) {
							verbose && console.log("  Replaced legacy call " + name + " with call to module " + legacyCalls[name]);
							len = text.length;
							changes++;
						}
					}
				}
				
				// avoid searching the comments for references to modules by removing the comments first
				var cleaned = text.replace(reSlashStarComments, "");
				cleaned = cleaned.replace(reSlashSlashComments, "");
				
				for (var mod in modules) {
					// don't search the file that defines a module for usages of that same module
					if (modules[mod].path !== pathname) {
						result = modules[mod].re.exec(cleaned);
						if (result && result.length > 0) {
							verbose && console.log("  This file uses module " + mod);
							uses.push(mod);
						}
						modules[mod].re.lastIndex = 0;
					}
				}
				
				while ((result = reRequires.exec(cleaned)) && result && result.length > 0) {
					verbose && console.log("  File already requires " + result[1]);
					requires.push(result[1]);
				}
				
				var updated = text.split("\n");
				
				for (i = 0; i < uses.length; i++) {
					if (requires.indexOf(uses[i]) === -1) {
						verbose && console.log("  Need to add require('" + uses[i] + "')");
						changes++;
						
						j = 0; 

						// skip initial empty lines
						while (j < updated.length && reEmptyLine.test(updated[j])) {
							reEmptyLine.lastIndex = 0;
							j++;
						}
						
						// skip the initial comment
						if (j < updated.length && updated[j] && updated[j].indexOf("/*") > -1) {
							while (j < updated.length && updated[j].indexOf("*/") === -1) {
								j++;
							}
							j++;
						}

						// skip any other empty lines
						while (j < updated.length && reEmptyLine.test(updated[j])) {
							reEmptyLine.lastIndex = 0;
							j++;
						}

						// now insert the require
						updated.splice(j, 0, "var " + uses[i] + ' = require("./' + modules[uses[i]].path + '");');
					}
				}
	
				for (i = 0; i < requires.length; i++) {
					if (uses.indexOf(requires[i]) === -1) {
						verbose && console.log("  Need to remove require('" + requires[i] + "')");
						changes++;

						if (!updated) {
							updated = text.split("\n");
						}
						
						j = 0;
						
						while (j < updated.length) {
							if ((result = reRequires.exec(updated[j])) && result.length > 0 && result[1] === requires[i]) {
								updated.splice(j, 1);
								break;
							}
							reRequires.lastIndex = 0;
							j++;
						}
					}
				}
				
				verbose && console.log(changes + " changes were needed.");
				if (changes > 0) {
					filesUpdated++;
					fs.writeFileSync(pathname, updated.join("\n"));
				}
			}
		}
	}
}

function walk(dir, update) {
	var results = [];
	var list = fs.readdirSync(dir);
	var merged = {};
	list.forEach(function (file) {
		var pathname = path.join(dir, file);
		var stat = fs.statSync(pathname);
		if (stat && stat.isDirectory()) {
			walk(pathname, update);
		} else {
			if (pathname.match(/\.[Jj][Ss]$/)) {
				processFile(dir, file, update);
			}
		}
	});
	return results;
}

// find modules first
for (i = 0; i < includes.length; i++) {
	walk(includes[i], true);
}

// now update the source files in the start dir
for (i = 0; i < startDir.length; i++) {
	var stat = fs.statSync(startDir[i]);
	if (stat && stat.isDirectory()) {
		walk(startDir[i], false);
	} else {
		processFile("", startDir[i], false);
	}
}

console.log("Done. " + filesUpdated + " files updated.");