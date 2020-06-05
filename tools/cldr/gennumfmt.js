/*
 * gennumfmt.js - ilib tool to generate the  number json fragments from
 * the CLDR data files
 *
 * Copyright © 2013-2018, 2020 JEDLSoft
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
var cldr = require("cldr-data");
var numberingSystemsData = require("cldr-data/supplemental/numberingSystems.json");

var common = require('./common');
var Locale = common.Locale;
var mergeAndPrune = common.mergeAndPrune;
var makeDirs = common.makeDirs;
var isEmpty = common.isEmpty;

function usage() {
    console.log("Usage: gennumfmts [-h] [toDir]\n" +
        "Generate number formats information files.\n\n" +
        "-h or --help\n" +
        "  this help\n" +
        "toDir\n" +
        "  directory to output the currency.jf json files. Default: current dir.");
    process.exit(1);
}

var toDir;

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

if (process.argv.length <= 2) {
    console.error('Error: not enough arguments.\n');
    usage();
} else {
    toDir = process.argv[2];
}

console.log("gennumfmts - generate number formats information files.\n" +
    "Copyright (c) 2013-2018, 2020 JEDLSoft");

console.log("Output dir: " + toDir );

if (!fs.existsSync(toDir)) {
    console.error("Could not access Output directory " + toDir);
    usage();
}

var filename, root, json, suppData, languageData, digitsData, scripts = {};

function calcLocalePath(language, script, region, filename) {
    var pathName = toDir;
    if (language) {
        pathName = path.join(pathName, language);
    }
    if (script) {
        pathName = path.join(pathName, script);
    }
    if (region) {
        pathName = path.join(pathName, region);
    }
    pathName = path.join(pathName, filename);
    console.log("path: ", pathName);
    return pathName;
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

        var filename = path.join(dirname, "numbers.json");
        var data = require(filename);
        var numData = data.main[spec];

        if (script) {
            if (!localeData[language]) {
                localeData[language] = {};
            }
            if (!localeData[language][script]) {
                localeData[language][script] = {};
            }
            if (region) {
                if (!localeData[language][script][region]) {
                    localeData[language][script][region] = {};
                }
                localeData[language][script][region].data = numData;
            } else {
                localeData[language][script].data = numData;
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

        //console.log("dirname: " + dirname + "  data: ", numData );
    } catch (e) {
        console.log("Error: Could not load file " + e );
    }

    return numData;
}

function anyProperties(data) {
    var count = 0;
    for (var prop in data) {
        if (prop && data[prop]) {
            count++;
        }
        if (count >= 1) {
            return true;
        }
    }
    return false;
}

function writeNumberFormats(language, script, region, data) {
    var path = calcLocalePath(language, script, region, "");
    //console.log("data to be written into jf files" + path + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringify(data));
    if (data.generated) {
        if (anyProperties(data)) {
            console.log("Writing " + path );

            var empty_data_default = data["numfmt"];
            var empty_data_native = data["native_numfmt"];
            if (isEmpty(empty_data_default) && isEmpty(empty_data_native)) {
                //console.log("no need to create the file " );
                return;
            }

            //console.log("data to be written into jf files" + path + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringify(numfmt)); */
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
            console.log("Skipping empty " + path );
        }
    } else {
        console.log("Skipping existing " + path );
    }
}
function getNumberFormats(language, script, region, data) {
    var numbers = {
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

    var symbol_number_system = symbol.concat(def_num_system);
    var decimal_number_system = decimal.concat(def_num_system);
    var percentage_number_system = percentage.concat(def_num_system);
    var currency_number_system = currency.concat(def_num_system);

    //console.log("the symbol numbering system " + symbol_number_system );
    var symbol_format = data.numbers[symbol_number_system];
    var decimal_format = data.numbers[decimal_number_system]["standard"];
    var percent_format = data.numbers[percentage_number_system]["standard"];
    var currency_format = data.numbers[currency_number_system]["standard"];
    var symbol_format_data = {};

    var decimal_separator = data.numbers[symbol_number_system]["decimal"];
    var group_separator = data.numbers[symbol_number_system]["group"];
    var minus_sign = data.numbers[symbol_number_system]["minusSign"];

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
        //console.log("cur_fmt      is  ...................." + cur_fmt + "===================" );
        var curFmt = cur_fmt.replace(/[0#,\.]+/, "{n}");
        curFmt = curFmt.replace(/¤/g, "{s}");
        symbol_format_data.currencyFormats.common = curFmt.trim();

        var negative_cur_format = currency_format.substring(index_of_semi_colon + 1, currency_format.length);
        var curfmtnegative = negative_cur_format.replace(/[0#,\.]+/, "{n}");
        curfmtnegative = curfmtnegative.replace(/¤/g, "{s}");
        symbol_format_data.currencyFormats.commonNegative = curfmtnegative;
    } else {
        curFmt = currency_format.replace(/[0#,\.]+/, "{n}");
        curFmt = curFmt.replace(/¤/g, "{s}");
        symbol_format_data.currencyFormats.common = curFmt.trim();
        symbol_format_data.currencyFormats.commonNegative = minus_sign + curFmt.trim();
    }

        //symbol_format_data["curFmt"]=curFmt;
    if (decimal_fmt.indexOf(";") != -1) {
        index_of_semi_colon = decimal_fmt.indexOf(";");
        var negative_num_format = decimal_fmt.substring(index_of_semi_colon + 1, decimal_fmt.length);
        var numfmtnegative = negative_num_format.replace(/[0#,\.]+/, "{n}");
        symbol_format_data["negativenumFmt"] = numfmtnegative.trim();
    } else {
        var numfmtnegative = decimal_fmt.replace(/[0#,\.]+/, "{n}");
        symbol_format_data["negativenumFmt"] = minus_sign +  numfmtnegative.trim();
    }

    if (percent_format.indexOf(";") != -1) {
        index_of_semi_colon = percent_format.indexOf(";");
        var negative_pct_format = percent_format.substring(index_of_semi_colon + 1, percent_format.length);
        var pctfmtnegative = negative_pct_format.replace(/[0#,\.]+/, "{n}");

        var positive_pct_format = percent_format.substring(0, index_of_semi_colon - 1);
        pctFmt = positive_pct_format.replace(/[0#,\.]+/, "{n}");

        if (symbol_format_data["pctChar"] !== "%") {
            newpctfmtnegative = pctfmtnegative.replace("%", symbol_format["percentSign"]);
            newpctFmt = pctFmt.replace("%", symbol_format["percentSign"]);

            symbol_format_data["negativepctFmt"] = newpctfmtnegative;
            symbol_format_data["pctFmt"] = newpctFmt;

        } else {
            symbol_format_data["negativepctFmt"] = pctfmtnegative;
            symbol_format_data["pctFmt"] = pctFmt;
        }

    } else {
        pctFmt = percent_format.replace(/[0#,\.]+/, "{n}");

        if (symbol_format["percentSign"] !== "%") {
            newpctFmt = pctFmt.replace("%", symbol_format["percentSign"]);
            symbol_format_data["pctFmt"] = newpctFmt;
            symbol_format_data["negativepctFmt"] = minus_sign + newpctFmt;

        } else {
            symbol_format_data["pctFmt"] = pctFmt;
            symbol_format_data["negativepctFmt"] = minus_sign + pctFmt;
        }
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

    //console.log("script for native digits " + script );

    digitsData = numberingSystemsData.supplemental["numberingSystems"]
    digits_script = digitsData[script];

    //console.log("digits for script are:" + JSON.stringify(digits_script) );
    if (typeof (digits_script) != 'undefined' && digits_script !== "latn") {
        if (digits_script["_type"] == "numeric") {
            var digits = digits_script["_digits"];
            //console.log("digits for script are:" + JSON.stringify(digits) );
            return digits;
        }
    }
}

console.log("Reading locale data into memory...");

var list = cldr.availableLocales;

list.forEach(function(loc) {
    var locale = loc ? new Locale(loc) : undefined;

    console.log(loc);

    var sourceDir = path.join("cldr-data/main", loc);

    if (loc === "root" || typeof (locale.getVariant()) === 'undefined') {
        // special case because "root" is not a valid locale specifier
        getLocaleData(sourceDir, (loc === "root") ? undefined : locale);
    }
});

console.log("");
console.log("Merging and pruning locale data...");

mergeAndPrune(localeData);
console.log("Extracting number formats...");

var resources = {};
resources.data = getNumberFormats(undefined, undefined, undefined, localeData.data);

for (language in localeData) {
    if (language && localeData[language] && language !== 'data' && language !== 'merged') {
        resources[language] = resources[language] || {};
        //console.log(language + " ");
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

console.log("\nMerging and pruning formats...");

mergeAndPrune(resources);

console.log("\nWriting formats...");

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