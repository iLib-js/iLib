/*
 * gennumfmts.js - ilib tool to generate the  number json fragments from 
 * the CLDR data files
 * 
 * Copyright © 2013, LGE
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
var common = require('./common');
var merge = common.merge;
var Locale = common.Locale;
var mergeAndPrune = common.mergeAndPrune;
var makeDirs = common.makeDirs;

function usage() {
	util.print("Usage: gennumfmts [-h] CLDR_json_dir locale_data_dir\n" +
		"Generate number formats information files.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"CLDR_json_dir\n" +
		"  the top level of the Unicode CLDR distribution in json format\n" +
		"locale_data_dir\n" +
		"  the top level of the ilib locale data directory\n");
	process.exit(1);
}
var cldrDirName;
var localeDirName;
process.argv.forEach(function (val, index, array) {
		if (val === "-h" || val === "--help") {
			usage();
		}
	});
if (process.argv.length < 4) {
	util.error('Error: not enough arguments');
	usage();
}
cldrDirName = process.argv[2];
localeDirName = process.argv[3];
util.print("gendatefmts - generate number formats information files.\n" +
	"Copyright (c) 2013 LGE\n");
util.print("CLDR dir: " + cldrDirName + "\n");
util.print("locale dir: " + localeDirName + "\n");
fs.exists(cldrDirName, function (exists) {
		if (!exists) {
			util.error("Could not access CLDR dir " + cldrDirName);
			usage();
		}
	});
fs.exists(localeDirName, function (exists) {
		if (!exists) {
			util.error("Could not access locale data directory " + localeDirName);
			usage();
		}
	});
var filename, root, json, suppData, languageData, scripts = {};
try {
	filename = cldrDirName + "/main/en.json";
	json = fs.readFileSync(filename, "utf-8");
	root = JSON.parse(json);
	filename = cldrDirName + "/supplemental/supplementalData.json";
	json = fs.readFileSync(filename, "utf-8");
	suppData = JSON.parse(json);
	languageData = suppData.languageData;
} catch (e) {
	util.print("Error: Could not load file " + filename + "\n");
	process.exit(2);
}
for (var locale in languageData) {
	if (locale && languageData[locale]) {
		if (typeof (languageData[locale]["@scripts"]) === 'string') {
			var language = (locale.length <= 3) ? locale : locale.split(/-/)[0];
			if (typeof (scripts[language]) === 'undefined') {
				scripts[language] = [];
			}
			var newLangs = languageData[locale]["@scripts"].split(/ /g);
			if (locale.length <= 3) {
				// util.print("language " + language + " prepending " + JSON.stringify(newLangs));
				scripts[language] = newLangs.concat(scripts[language]);
			} else {
				// util.print("language " + language + " appending " + JSON.stringify(newLangs));
				scripts[language] = scripts[language].concat(newLangs);
			}
		}
	}
}

function loadFile(path) {
	var ret = undefined;
	if (fs.existsSync(path)) {
		json = fs.readFileSync(path, "utf-8");
		ret = JSON.parse(json);
		//util.print("path is :"+path+"\n");
	}
	return ret;
}

function loadFile_jf(path) {
	var ret = undefined;
	if (fs.existsSync(path)) {
		json = fs.readFileSync(path, "utf-8");
		var lastComma = json.lastIndexOf(",");
		json = json.substring(0, lastComma);
		ret = JSON.parse("{" + json + "}");
		util.print("path is :" + path + "\n");
	}
	return ret;
}

function calcLocalePath(language, script, region, filename) {
	var path = localeDirName + "/";
	if (language) {
		path += language + "/";
	}
	if (script) {
		path += script + "/";
	}
	if (region) {
		path += region + "/";
	}
	path += filename;
	return path;
}

function loadFileNonGenerated(language, script, region) {
	var path = calcLocalePath(language, script, region, "numfmt.jf");
	var obj = loadFile_jf(path);
	if (typeof (obj) !== 'undefined' && (typeof (obj.generated) === 'undefined' || obj.generated === false)) {
		// only return non-generated files
		return obj;
	}
	return undefined;
}
var localeData = {};

function getLocaleData(path, language, script, region) {
	var data;
	try {
		filename = cldrDirName + "/main/" + path;
		data = loadFile(filename);
		if (script) {
			if (region) {
				if (!localeData[language]) {
					localeData[language] = {};
				}
				if (!localeData[language][script]) {
					localeData[language][script] = {};
				}
				if (!localeData[language][script][region]) {
					localeData[language][script][region] = {};
				}
				localeData[language][script][region].data = data;
			}
		} else if (region) {
			if (!localeData[language]) {
				localeData[language] = {};
			}
			if (!localeData[language][region]) {
				localeData[language][region] = {};
			}
			localeData[language][region].data = data;
		} else if (language) {
			if (!localeData[language]) {
				localeData[language] = {};
			}
			localeData[language].data = data;
		} else {
			// root locale
			localeData.data = data;
		}
	} catch (e) {
		return undefined;
	}
	return data;
}

function anyProperties(data) {
	var count = 0;
	for (var prop in data) {
		if (prop && data[prop]) {
			count++;
		}
		if (count > 1) {
			return true;
		}
	}
	return false;
}
function writeNumberFormats(language, script, region, data) {

	var path = calcLocalePath(language, script, region, "");
	if (data.generated) {
		if (anyProperties(data)) {
			util.print("Writing " + path + "\n");
			var empty_data = data["symbol"];
			if ((Object.keys(empty_data).length === 0)) {
				util.print("no need to create the file " + "\n");
				return;
			}
			makeDirs(path);

			var numfmt = {};
			var numberformat = {};
			numfmt.decimalChar = data["symbol"]["decimal"];
			numfmt.groupChar = data["symbol"]["group"];
			numfmt.pctChar = data["symbol"]["percentSign"];
			numfmt.prigroupSize = data["symbol"]["primarygroupSize"];
			numfmt.pctFmt = data["symbol"]["pctFmt"];
			numfmt.curFmt = data["symbol"]["curFmt"];
			numberformat["numfmt"] = numfmt;
			if (data["symbol"]["secondarygroupSize"] !== undefined) {
				numfmt.secgroupSize = data["symbol"]["secondarygroupSize"];
			}
			if (data["symbol"]["negativenumFmt"] !== undefined) {
				numfmt.negativenumFmt = data["symbol"]["numFmtnegative"];
			}
			if (data["symbol"]["negativepctFmt"] !== undefined) {
				numfmt.negativepctFmt = data["symbol"]["pctFmtnegative"];
			}
			if (data["symbol"]["negativecurFmt"] !== undefined) {
				numfmt.negativecurFmt = data["symbol"]["curFmtnegative"];
			}
			numfmt.roundingMode = data["symbol"]["roundingMode"];
			//util.print("data to be written into jf files" + path + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringify(numfmt)+"\n");
			fs.writeFileSync(path + "/numfmt.jf", '\"numfmt\" :' + JSON.stringify(numfmt) + ',\n', "utf-8");
		} else {
			util.print("Skipping empty " + path + "\n");
		}
	} else {
		util.print("Skipping existing " + path + "\n");
	}
}

function getNumberFormats(language, script, region, data) {
	// if it is already there and non-generated, return it
	var numbers = loadFileNonGenerated(language, script, region);
	if (numbers) {
		util.print("\nLoaded existing resources from " + calcLocalePath(language, script, region, "numfmt.jf") + "\n");
		numbers.generated = false;
		return numbers;
	}
	// else generate a new one
	numbers = {
		generated: true
	};
	var symbols = data.numbers;
	var def_num_system = symbols.defaultNumberingSystem;
	util.print("the language is  " + JSON.stringify(language) + "\n");
	util.print("the default numbering system is " + JSON.stringify(def_num_system) + "\n");
	var symbol = "symbols-numberSystem-";
	var decimal = "decimalFormats-numberSystem-";
	var percentage = "percentFormats-numberSystem-";
	var currency = "currencyFormats-numberSystem-";
	symbol_number_system = symbol.concat(def_num_system);
	decimal_number_system = decimal.concat(def_num_system);
	percentage_number_system = percentage.concat(def_num_system);
	currency_number_system = currency.concat(def_num_system);
	util.print("the symbol numbering system " + symbol_number_system + "\n");
	var symbol_format = data.numbers[symbol_number_system];
	var decimal_format = data.numbers[decimal_number_system]["standard"]["decimalFormat"]["pattern"];
	var percent_format = data.numbers[percentage_number_system]["standard"]["percentFormat"]["pattern"];
	var currency_format = data.numbers[currency_number_system]["standard"]["currencyFormat"]["pattern"];
	var symbol_format_data = {};
	var decimal_separator = symbol_format["decimal"];
	var group_separator = symbol_format["group"];
	//	var index_of_semi_colon=0;
	var index_of_decimal = 0;
	var index_of_group = 0;
	var primarygroupsize = 0;
	var secondarygroupsize = 0;
	//var separator_count = 0;
	decimal_format = decimal_format.replace(/'(.)+'/g, "");
	var decimal_fmt = decimal_format;
	if (decimal_format.indexOf(";") !== -1) {
		index_of_semi_colon = decimal_format.indexOf(";");
		decimal_format = decimal_format.substring(0, index_of_semi_colon - 1);
	}
	if (decimal_format.lastIndexOf(",") === -1) {
		primarygroupsize = 0;
	} else {
		if (decimal_format.lastIndexOf(".") !== -1) {
			if (decimal_format.lastIndexOf(".") > decimal_format.lastIndexOf(",")) {
				index_of_decimal = decimal_format.lastIndexOf(".");
				index_of_group = decimal_format.lastIndexOf(",") + 1;
			} else if (decimal_format.lastIndexOf(".") < (decimal_format.lastIndexOf(","))) {
				index_of_decimal = decimal_format.lastIndexOf(".") + 1;
				index_of_group = decimal_format.lastIndexOf(",");
			}
			primarygroupsize = Math.abs(index_of_decimal - index_of_group);
		} else {
			primarygroup_size = decimal_format.length - (decimal_format.lastIndexOf(",") + 1);
		}
		var separator_count = (decimal_format.match(/,/g));
		if (separator_count != null) {
			if (separator_count.length > 1) {
				secondarygroupsize = decimal_format.lastIndexOf(",") - (decimal_format.indexOf(",") + 1);
			}
		}
	}
	percent_format = percent_format.replace(/'(.)+'/g, "");
	var pctFmt = percent_format.replace(/[0#,\.]+/, "{n}");
	symbol_format_data["decimal"] = decimal_separator;
	symbol_format_data["group"] = group_separator;
	symbol_format_data["primarygroupSize"] = primarygroupsize;
	symbol_format_data["secondarygroupSize"] = secondarygroupsize;
	//	symbol_format_data["pctFmt"]=pctFmt;
	currency_format = currency_format.replace(/'(.)+'/g, "");
	if (currency_format.indexOf(";") != -1) {
		index_of_semi_colon = currency_format.indexOf(";");
		var cur_fmt = currency_format.substring(0, index_of_semi_colon);
		util.print("cur_fmt      is  ...................." + cur_fmt + "===================" + "\n");
		var curFmt = cur_fmt.replace(/[0#,\.]+/, "{n}");
		curFmt = curFmt.replace(/¤/g, "{s}");
		symbol_format_data["curFmt"] = curFmt;
	} else {
		curFmt = currency_format.replace(/[0#,\.]+/, "{n}");
		curFmt = curFmt.replace(/¤/g, "{s}");
		symbol_format_data["curFmt"] = curFmt;
	}
	//	symbol_format_data["curFmt"]=curFmt;
	if (decimal_fmt.indexOf(";") != -1) {
		index_of_semi_colon = decimal_fmt.indexOf(";");
		var negative_num_format = decimal_fmt.substring(index_of_semi_colon, decimal_fmt.length);
		var numfmtnegative = negative_num_format.replace(/[0#,\.]+/, "{n}");
		symbol_format_data["numFmtnegative"] = numfmtnegative;
	}
	if (percent_format.indexOf(";") != -1) {
		index_of_semi_colon = percent_format.indexOf(";");
		var negative_pct_format = percent_format.substring(index_of_semi_colon, percent_format.length);
		var pctfmtnegative = negative_pct_format.replace(/[0#,\.]+/, "{n}");
		symbol_format_data["pctFmtnegative"] = pctfmtnegative;
		var positive_pct_format = percent_format.substring(0, index_of_semi_colon - 1);
		pctFmt = positive_pct_format.replace(/[0#,\.]+/, "{n}");
		//pctFmt=pctFmt.replace(/¤/g,"{s}");
		symbol_format_data["pctFmt"] = pctFmt;
	} else {
		pctFmt = percent_format.replace(/[0#,\.]+/, "{n}");
		//pctFmt=pctFmt.replace(/¤/g,"{s}");
		symbol_format_data["pctFmt"] = pctFmt;
	}
	if ((JSON.stringify(currency_format).indexOf(";")) != -1) {
		index_of_semi_colon = currency_format.indexOf(";");
		var negative_cur_format = currency_format.substring(index_of_semi_colon + 1, currency_format.length);
		var curfmtnegative = negative_cur_format.replace(/[0#,\.]+/, "{n}");
		curfmtnegative = curfmtnegative.replace(/¤/g, "{s}");
		symbol_format_data["curFmtnegative"] = curfmtnegative;
	}
	symbol_format_data["roundingMode"] = "halfdown";
	numbers["symbol"] = symbol_format_data;
	return numbers;
}
var language, region, script, files;
files = fs.readdirSync(cldrDirName + "/main/");
util.print("Reading locale data into memory...\n");
for (var i = 0; i < files.length; i++) {
	file = files[i];
	if (file === "numfmt.jf") {
		// special case because "root" is not a valid locale specifier
		getLocaleData(file, undefined, undefined, undefined);
	} else {
		locale = file.split(/\./)[0].replace(/_/g, "-");
		var l = new Locale(locale);
		getLocaleData(file, l.getLanguage(), l.getScript(), l.getRegion());
	}
}
util.print("\n");
util.print("Merging and pruning locale data...\n");
mergeAndPrune(localeData);
var resources = {};
resources.data = getNumberFormats(undefined, undefined, undefined, localeData.data);
for (language in localeData) {
	if (language && localeData[language] && language !== 'data' && language !== 'merged') {
		resources[language] = resources[language] || {};
		//util.print(language + " ");
		for (var subpart in localeData[language]) {
			if (subpart && localeData[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
				resources[language][subpart] = resources[language][subpart] || {};
				if (Locale.isScriptCode(subpart)) {
					script = subpart;
					for (region in localeData[language][script]) {
						resources[language][script][region] = resources[language][script][region] || {};
						if (region && localeData[language][script][region] && region !== 'data' && region !== 'merged') {
							resources[language][script][region].data = getNumberFormats(language, script, region, localeData[language][script][region].merged);
						}
					}
				}
				resources[language][subpart].data = getNumberFormats(language, subpart, undefined, localeData[language][subpart].merged);
			}
		}
		resources[language].data = getNumberFormats(language, undefined, undefined, localeData[language].merged);
	}
}
//resources.data = getNumberFormats(undefined, undefined, undefined, localeData.data);
util.print("\nMerging and pruning r...\n");
//writeNumberFormats(undefined, undefined, undefined, resources.data);
mergeAndPrune(resources);
writeNumberFormats(undefined, undefined, undefined, resources.data);
for (language in resources) {
	if (language && resources[language] && language !== 'data' && language !== 'merged') {
		for (var subpart in resources[language]) {
			if (subpart && resources[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
				if (Locale.isScriptCode(subpart)) {
					script = subpart;
					for (region in resources[language][script]) {
						if (region && resources[language][script][region] && region !== 'data' && region !== 'merged') {
							writeNumberFormats(language, script, region, resources[language][script][region].data);
						}
					}
					writeNumberFormats(language, script, undefined, resources[language][script].data);
				} else {
					writeNumberFormats(language, undefined, subpart, resources[language][subpart].data);
				}
			}
		}
		writeNumberFormats(language, undefined, undefined, resources[language].data);
	}
}
//writeNumberFormats(undefined, undefined, undefined, resources.data);
process.exit(0);