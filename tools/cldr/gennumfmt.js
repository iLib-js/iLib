/* 
 * gennumfmt.js - ilib tool to generate the  number json fragments from
 * the CLDR data files
 *
 * Copyright © 2013-2015, LGE
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
var path = require('path');
var util = require('util');
var common = require('./common');
var merge = common.merge;
var Locale = common.Locale;
var mergeAndPrune = common.mergeAndPrune;
var makeDirs = common.makeDirs;
var isEmpty = common.isEmpty;

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

util.print("gennumfmts - generate number formats information files.\n" +
	"Copyright (c) 2013-2015 LGE\n");

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

var filename, root, json, suppData, languageData, numberingSystemsData, digitsData, scripts = {};
var localeDirs;

try {
	localeDirs = fs.readdirSync(path.join(cldrDirName, "main"));	
} catch (e) {
	util.print("Error: Could not load file " + filename + "\n");
	process.exit(2);
}

function loadFile(pathname) {
	var ret = undefined;
	
	if (fs.existsSync(pathname)) {
		json = fs.readFileSync(pathname, "utf-8");
		ret = JSON.parse(json);
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
	util.print("path: ", path);
	return path;
}

function loadFileNonGenerated(language, script, region) {
	var path = calcLocalePath(language, script, region, "numfmt.jf");
	util.print("loadFileNonGenerated: " + path + "\n");
	var obj = loadFile(path);
	//var obj = loadFile(path);
	if (typeof (obj) !== 'undefined' && (typeof (obj.generated) === 'undefined' || obj.generated === false)) {
		// only return non-generated files 
		return obj;
	}
	return undefined;
}

var localeData = {};

function getLocaleData(dirname, locale) {
	try {
		var language = undefined,script = undefined,region = undefined,spec = undefined;
		if (locale !== undefined) {
			language = locale.getLanguage(),
			script = locale.getScript(),
			region = locale.getRegion();
			spec = locale.getSpec();	
		} else {
			spec = "root";
		}

		var filename = path.join(cldrDirName, "main", dirname, "numbers.json");		
		var data = loadFile(filename);
		var numData = data.main[spec];

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
				localeData[language][script][region].data = numData;
			}
		} else if (region) {
			if (!localeData[language]) {
				localeData[language] = {};
			}
			if (!localeData[language][region]) {
				localeData[language][region] = {};
			}
			localeData[language][region].data = numData;
		} else if (language) {
			if (!localeData[language]) {
				localeData[language] = {};
			}
			localeData[language].data = numData;
		} else {
			// root locale 
			localeData.data = numData;
		}

		//util.print("dirname: " + dirname + "  data: ", numData + "\n");		
	} catch (e) {
		util.print("Error: Could not load file " + e + "\n");
	}

	return numData;
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
	//util.print("data to be written into jf files" + path + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringify(data)+"\n");
	if (data.generated) {
		if (anyProperties(data)) {
			util.print("Writing " + path + "\n");

			var empty_data_default = data["numfmt"];
			var empty_data_native = data["native_numfmt"];
			if (isEmpty(empty_data_default) && isEmpty(empty_data_native)) {
				//util.print("no need to create the file " + "\n");
				return;
			}

			//util.print("data to be written into jf files" + path + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringify(numfmt)+"\n"); */
			if (!isEmpty(data)) {
				data.generated = true;
				makeDirs(path);
				fs.writeFileSync(path + "/numfmt.jf", JSON.stringify(data, true, 4), "utf-8");
			}
			/*if(typeof(numfmt["native"])!='undefined') {
				if ((!isEmpty(numfmt["native"]))) {
			fs.appendFileSync(path + "/numfmt.jf", '\"native_numfmt\" :' + JSON.stringify(numfmt["native"]) + ',\n', "utf-8");
				}
			}*/
			//fs.writeFileSync(path + "/numfmt.jf",JSON.stringify(data), "utf-8");
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
		//util.print("\nLoaded existing resources data " + JSON.stringify(numbers) + "\n");
		numbers.generated = false;
		return numbers;
	}

	// else generate a new one 
	numbers = {
		generated: true
	};

	//var symbols = data.numbers;
	var symbols = data.numbers;
	var def_num_system = symbols.defaultNumberingSystem;

	var native_num_system = symbols["otherNumberingSystems"]["native"];
	var default_data = {};
	var native_data = {};
	var numfmt = {};
	default_data = getNumberFormats_num_system(def_num_system, data);
	numfmt = default_data;

	if (native_num_system != def_num_system) {
		numbers.native_numfmt = getNumberFormats_num_system(native_num_system, data);
		
	}
	numbers["numfmt"] = numfmt;

	return numbers;

}

function getNumberFormats_num_system(def_num_system, data) {
	var symbol = "symbols-numberSystem-";
	var decimal = "decimalFormats-numberSystem-";
	var percentage = "percentFormats-numberSystem-";
	var currency = "currencyFormats-numberSystem-";

	symbol_number_system = symbol.concat(def_num_system);
	decimal_number_system = decimal.concat(def_num_system);
	percentage_number_system = percentage.concat(def_num_system);
	currency_number_system = currency.concat(def_num_system);

	//util.print("the symbol numbering system " + symbol_number_system + "\n");
	var symbol_format = data.numbers[symbol_number_system];
	var decimal_format = data.numbers[decimal_number_system]["standard"];
	var percent_format = data.numbers[percentage_number_system]["standard"];
	var currency_format = data.numbers[currency_number_system]["accounting"];
	var symbol_format_data = {};

	var decimal_separator = data.numbers[symbol_number_system]["decimal"];
	var group_separator = data.numbers[symbol_number_system]["group"];

	var index_of_decimal = 0;
	var index_of_group = 0;
	var primarygroupsize = 0;
	var secondarygroupsize = 0;

	decimal_format = decimal_format.replace(/'(.)+'/g, "");
	var decimal_fmt = decimal_format;
	if (decimal_format.lastIndexOf(",") === -1) {
		primarygroupsize = 0;
	}

	if (decimal_format.indexOf(";") != -1) {
		index_of_semi_colon = decimal_format.indexOf(";");
		decimal_format = decimal_format.substring(index_of_semi_colon, decimal_format.length);
	}

	//else { 
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
		} else
			secondarygroupsize = 0;
	}

	percent_format = percent_format.replace(/'(.)+'/g, "");
	var pctFmt = percent_format.replace(/[0#,\.]+/, "{n}");
	//if(def_num_system == "latn") {
	if (def_num_system.length == 4) {
		def_num_system = def_num_system.charAt(0).toUpperCase() + def_num_system.substring(1);
	}
	symbol_format_data["script"] = def_num_system;
	//}
	symbol_format_data["decimalChar"] = decimal_separator;
	symbol_format_data["groupChar"] = group_separator;
	symbol_format_data["pctChar"] = symbol_format["percentSign"];
	symbol_format_data["exponential"] = symbol_format["exponential"];
	symbol_format_data["prigroupSize"] = primarygroupsize;
	if (secondarygroupsize !== 0) {
		symbol_format_data["secgroupSize"] = secondarygroupsize;
	}

	currency_format = currency_format.replace(/'(.)+'/g, "");
	symbol_format_data.currencyFormats = {};
	if (currency_format.indexOf(";") != -1) {
		index_of_semi_colon = currency_format.indexOf(";");
		var cur_fmt = currency_format.substring(0, index_of_semi_colon);
		//util.print("cur_fmt      is  ...................." + cur_fmt + "===================" + "\n");
		var curFmt = cur_fmt.replace(/[0#,\.]+/, "{n}");
		curFmt = curFmt.replace(/¤/g, "{s}");
		symbol_format_data.currencyFormats.common = curFmt;
		
		var negative_cur_format = currency_format.substring(index_of_semi_colon + 1, currency_format.length);
		var curfmtnegative = negative_cur_format.replace(/[0#,\.]+/, "{n}");
		curfmtnegative = curfmtnegative.replace(/¤/g, "{s}");
		symbol_format_data.currencyFormats.commonNegative = curfmtnegative;
	} else {
		curFmt = currency_format.replace(/[0#,\.]+/, "{n}");
		curFmt = curFmt.replace(/¤/g, "{s}");
		symbol_format_data.currencyFormats.common = curFmt;
	}

		//symbol_format_data["curFmt"]=curFmt; 
	if (decimal_fmt.indexOf(";") != -1) {
		index_of_semi_colon = decimal_fmt.indexOf(";");
		var negative_num_format = decimal_fmt.substring(index_of_semi_colon + 1, decimal_fmt.length);
		var numfmtnegative = negative_num_format.replace(/[0#,\.]+/, "{n}");
		symbol_format_data["negativenumFmt"] = numfmtnegative;
	}

	if (percent_format.indexOf(";") != -1) {
		index_of_semi_colon = percent_format.indexOf(";");
		var negative_pct_format = percent_format.substring(index_of_semi_colon + 1, percent_format.length);
		var pctfmtnegative = negative_pct_format.replace(/[0#,\.]+/, "{n}");
		symbol_format_data["negativepctFmt"] = pctfmtnegative;

		var positive_pct_format = percent_format.substring(0, index_of_semi_colon - 1);
		pctFmt = positive_pct_format.replace(/[0#,\.]+/, "{n}");
		//pctFmt=pctFmt.replace(/¤/g,"{s}"); 
		symbol_format_data["pctFmt"] = pctFmt;
	} else {
		pctFmt = percent_format.replace(/[0#,\.]+/, "{n}");
		//pctFmt=pctFmt.replace(/¤/g,"{s}"); 
		symbol_format_data["pctFmt"] = pctFmt;
	}

	symbol_format_data["roundingMode"] = "halfdown";
	
	var native_digits;
	
	native_digits = getNativeDigits(def_num_system.toLowerCase());

	var standard_digits="0123456789";

	if (native_digits != standard_digits) {
		symbol_format_data["digits"] = native_digits;
		symbol_format_data["useNative"] = true;
	} else {
		symbol_format_data["useNative"] = false;
	}

	return symbol_format_data;	
}

function getNativeDigits(script) {
	//var digits=[];

	//util.print("script for native digits " + script + "\n");
	var numberingSystemsfile = cldrDirName + "/supplemental/numberingSystems.json";
	json = fs.readFileSync(numberingSystemsfile, "utf-8");
	numberingSystemsData = JSON.parse(json);
	
	digitsData = numberingSystemsData.supplemental["numberingSystems"]
	digits_script = digitsData[script];
	
	//util.print("digits for script are:" + JSON.stringify(digits_script) + "\n");
	if (typeof (digits_script) != 'undefined' && digits_script !== "latn") {
		if (digits_script["_type"] == "numeric") {
			var digits = digits_script["_digits"];
			//util.print("digits for script are:" + JSON.stringify(digits) + "\n");
			return digits;
		}
	}
}

util.print("Reading locale data into memory...\n");

for (var i = 0; i < localeDirs.length; i++) {
	var dirname = localeDirs[i];
	if (dirname === "root") {
		// special case because "root" is not a valid locale specifier 
		getLocaleData(dirname, undefined);
	} else {
		var localeSpec = dirname.replace(/_/g, "-");
		var locale = new Locale(localeSpec);
		if (typeof (locale.getVariant()) === 'undefined') {
			getLocaleData(dirname, locale);
		}	
	}
}

util.print("\n");
util.print("Merging and pruning locale data...\n");

mergeAndPrune(localeData);
util.print("Extracting number formats...\n");

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

util.print("\nMerging and pruning formats...\n");

mergeAndPrune(resources);

util.print("\nWriting formats...\n");

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

writeNumberFormats(undefined, undefined, undefined, resources.data);
process.exit(0);
