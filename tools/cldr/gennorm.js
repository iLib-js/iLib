/*
 * gennorm.js - ilib tool to generate the json UNA normalization data from the Unicode 
 * data files
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
var common = require('./common.js');
var iso15924 = require('iso-15924');

var charIterator = common.charIterator;
var isMember = common.isMember;
var coelesce = common.coelesce;

function usage() {
    console.log("Usage: gennorm [-h] [dataDir [codeDir]]\n" +
            "Generate the normalization data.\n\n" +
            "-h or --help\n" +
            "  this help\n" +
            "dataDir\n" +
            "  directory to output the normalization data json files. Default: current_dir/locale.\n" +
            "codeDir\n" +
            "  directory to output the generated code files. Default: current_dir/lib.");
    process.exit(1);
}

var toDir = "./locale";
var codeDir = "./lib";

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

if (process.argv.length < 2) {
    console.error('Error: not enough arguments');
    usage();
}

if (process.argv.length > 2) {
    toDir = process.argv[2];
    if (process.argv.length > 3) {
        codeDir = process.argv[3];
    } else {
        codeDir = toDir;
    }
}

console.log("gennorm - generate normalization data.\n" +
        "Copyright (c) 2013-2018, 2020 JEDLSoft");


if (!fs.existsSync(toDir)) {
    mkdirs(toDir);
    if (!fs.existsSync(toDir)) {
        console.error("Could not access target data directory " + toDir);
        usage();
    }
}
if (!fs.existsSync(codeDir)) {
    mkdirs(codeDir);
    if (!fs.existsSync(codeDir)) {
        console.error("Could not access target code directory " + codeDir);
        usage();
    }
}
var canonicalMappings = {};
var canonicalDecomp = {};
var canonicalComp = {};
var compatibilityMappings = {};
var compatibilityDecomp = {};
var combiningMappings = {};
var compositionExclusions = [];

/**
 * Expand one character according to the given canonical and 
 * compatibility mappings.
 * @param {string} ch character to map
 * @param {object} canon the canonical mappings to apply
 * @param {object} compat the compatibility mappings to apply, or undefined
 * if only the canonical mappings are needed
 * @return {string} the mapped character
 */
function expand(ch, canon, compat) {
    var expansion = "";
    var result = canon[ch];
    if (!result && compat) {
        result = compat[ch];
    }
    if (result && result !== ch) {
        var it = new charIterator(result);
        while (it.hasNext()) {
            var c = it.next();
            expansion += expand(c, canon, compat);
        }
    } else {
        expansion = ch;
    }
    return expansion;
}

var ef = require("ucd-full/DerivedNormalizationProps.json");
for (var i = 0; i < ef.DerivedNormalizationProps.length; i++ ) {
    var entry = ef.DerivedNormalizationProps[i];
    if (entry.property === "Full_Composition_Exclusion") {
        var range = entry.range.map(function(element) {
            return parseInt(element, 16);
        });
        compositionExclusions.push(range);
    }
}
//console.log("Full exclusion table is:\n" + JSON.stringify(compositionExclusions));

var ud = require("ucd-full/UnicodeData.json");

for (var i = 0; i < ud.UnicodeData.length; i++ ) {
    var entry = ud.UnicodeData[i];
    var c = common.hexStringUTF16String(entry.codepoint);
    var decomposition;
    // the decomposition type is given in <angle brackets> at the beginning of the mapping.
    // if there are no angle brackets, then this is a canonical mapping
    if (entry.characterDecompositionMapping) {
        decomposition = entry.characterDecompositionMapping;
        if (decomposition.length && decomposition[0] === '<') {
            decomposition = entry.characterDecompositionMapping.split(/\s+/g).slice(1).join(' ');
            compatibilityMappings[c] = common.hexStringUTF16String(decomposition);
        } else {
            // decompositionType is "canonical"
            decomposition = common.hexStringUTF16String(decomposition);
            canonicalMappings[c] = decomposition;
            if (!isMember(compositionExclusions, common.UTF16ToCodePoint(c))) {
                canonicalComp[decomposition] = c;
            //} else {
            //	console.log("Composition from " + common.UTF16ToCodePoint(c) + " to " + common.UTF16ToCodePoint(entry.characterDecompositionMapping) + " is on the exclusion list.");
            }
        }
    }

    var temp = entry.canonicalCombiningClass;
    if (temp > 0) {
        combiningMappings[c] = parseInt(temp);
    }
}

var fullToShortMap = {};

iso15924.forEach(function(script) {
    fullToShortMap[(script.pva && script.pva.toLowerCase()) || script.name.toLowerCase()] = script.code;
});

var scriptName;
var ranges = [];
var rangeToScript = [];

var sf = require("ucd-full/Scripts.json");

for (var i = 0; i < sf.Scripts.length; i++) {
    var entry = sf.Scripts[i];
    scriptName = entry.script;
    scriptName = fullToShortMap[scriptName.toLowerCase()] || scriptName;
    range = entry.range.map(function(element) {
        return parseInt(element, 16);
    });

    if (range.length > 1) {
        ranges.push([range[0], range[1], scriptName]);
    } else {
        ranges.push([range[0], range[0], scriptName]);
    }
}

function compareByStart(left, right) {
    return left[1] - right[1];
}

ranges.sort(compareByStart);
rangeToScript = coelesce(ranges, 1);

function findScript(str) {
    var cp = common.UTF16ToCodePoint(str);
    var i = common.findMember(rangeToScript, cp);
    if (i !== -1) {
        return rangeToScript[i][2];
    }
    return "Zyyy"; // default is "common" script which is shared by all scripts
}

function genCode(script, form) {
    var str =
        "/*\n" +
        " * " + script + ".js - include file for normalization data for a particular script\n" +
        " * \n" +
        " * Copyright © 2013 - 2018, 2020 JEDLSoft\n" +
        " *\n" +
        " * Licensed under the Apache License, Version 2.0 (the \"License\");\n" +
        " * you may not use this file except in compliance with the License.\n" +
        " * You may obtain a copy of the License at\n" +
        " *\n" +
        " *     http://www.apache.org/licenses/LICENSE-2.0\n" +
        " *\n" +
        " * Unless required by applicable law or agreed to in writing, software\n" +
        " * distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
        " * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
        " *\n" +
        " * See the License for the specific language governing permissions and\n" +
        " * limitations under the License.\n" +
        " */\n" +
        "/* WARNING: THIS IS A FILE GENERATED BY gennorm.js. DO NOT EDIT BY HAND. */\n";
    switch (form) {
        case 'nfd':
            str += "// !data nfd/" + script;
            if (script !== "Zyyy" && script !== "all") {
                // Zyyy cannot depend on itself, and all already includes Zyyy
                str += " nfd/Zyyy";
            }
            break;
        case 'nfc':
            str += "// !data nfc/" + script + " nfd/" + script;
            if (script !== "Zyyy" && script !== "all") {
                // Zyyy cannot depend on itself, and all already includes Zyyy
                str += " nfc/Zyyy nfd/Zyyy";
            }
            break;
        case 'nfkd':
            str += "// !data nfkd/" + script + " nfd/" + script;
            if (script !== "Zyyy" && script !== "all") {
                // Zyyy cannot depend on itself, and all already includes Zyyy
                str += " nfkd/Zyyy nfd/Zyyy";
            }
            break;
        case 'nfkc':
            str += "// !data nfc/" + script + " nfkd/" + script + " nfd/" + script;
            if (script !== "Zyyy" && script !== "all") {
                // Zyyy cannot depend on itself, and all already includes Zyyy
                str += " nfc/Zyyy nfkd/Zyyy nfd/Zyyy";
            }
            break;
    }

    str += "\n";

    return str;
}

var script;
var nfdByScript = {};
var nfcByScript = {};
var nfkdByScript = {};

// the Unicode data has only the binary decompositions. That is, the first of 
// two chars of a decomposition may be itself decomposable. So, apply the 
// decompositions recursively here to pre-calculate the full decomposition 
// before writing out the files.

for (var mapping in canonicalMappings) {
    if (mapping && canonicalMappings[mapping]) {
        canonicalDecomp[mapping] = expand(mapping, canonicalMappings);

        script = findScript(mapping);
        if (typeof(nfdByScript[script]) === 'undefined') {
            nfdByScript[script] = {};
        }
        nfdByScript[script][mapping] = canonicalDecomp[mapping];
    }
}

for (mapping in compatibilityMappings) {
    if (mapping && compatibilityMappings[mapping]) {
        var expansion = expand(mapping, canonicalDecomp, compatibilityMappings);
        if (expansion && expansion !== mapping) {
            compatibilityDecomp[mapping] = expansion;

            script = findScript(mapping);
            if (typeof(nfkdByScript[script]) === 'undefined') {
                nfkdByScript[script] = {};
            }
            nfkdByScript[script][mapping] = compatibilityDecomp[mapping];
        }
    }
}

for (mapping in canonicalComp) {
    if (mapping && canonicalComp[mapping]) {
        script = findScript(mapping);
        if (typeof(nfcByScript[script]) === 'undefined') {
            nfcByScript[script] = {};
        }
        nfcByScript[script][mapping] = canonicalComp[mapping];
    }
}

function mkdirs(path) {
    if (!fs.existsSync(path)) {
        return fs.mkdirSync(path);
    }
}

mkdirs(toDir + "/nfd");
mkdirs(toDir + "/nfc");
mkdirs(toDir + "/nfkd");

mkdirs(codeDir + "/nfd");
mkdirs(codeDir + "/nfc");
mkdirs(codeDir + "/nfkd");
mkdirs(codeDir + "/nfkc");

fs.writeFile(toDir + "/nfd/all.json", JSON.stringify(canonicalDecomp, true, 4), function (err) {
    if (err) {
        throw err;
    }
});
fs.writeFile(codeDir + "/nfd/all.js", genCode("all", "nfd"), function (err) {
    if (err) {
        throw err;
    }
});

for (script in nfdByScript) {
    if (script && nfdByScript[script]) {
        fs.writeFile(toDir + "/nfd/" + script + ".json", JSON.stringify(nfdByScript[script], true, 4), function (err) {
            if (err) {
                throw err;
            }
        });

        fs.writeFile(codeDir + "/nfd/" + script + ".js", genCode(script, "nfd"), function (err) {
            if (err) {
                throw err;
            }
        });
    }
}

fs.writeFile(toDir + "/nfc/all.json", JSON.stringify(canonicalComp, true, 4), function (err) {
    if (err) {
        throw err;
    }
});

fs.writeFile(codeDir + "/nfc/all.js", genCode("all", "nfc"), function (err) {
    if (err) {
        throw err;
    }
});

for (script in nfcByScript) {
    if (script && nfcByScript[script]) {
        fs.writeFile(toDir + "/nfc/" + script + ".json", JSON.stringify(nfcByScript[script], true, 4), function (err) {
            if (err) {
                throw err;
            }
        });
        fs.writeFile(codeDir + "/nfc/" + script + ".js", genCode(script, "nfc"), function (err) {
            if (err) {
                throw err;
            }
        });
    }
}

fs.writeFile(toDir + "/nfkd/all.json", JSON.stringify(compatibilityDecomp, true, 4), function (err) {
    if (err) {
        throw err;
    }
});
fs.writeFile(codeDir + "/nfkd/all.js", genCode("all", "nfkd"), function (err) {
    if (err) {
        throw err;
    }
});

for (script in nfkdByScript) {
    if (script && nfkdByScript[script]) {
        fs.writeFile(toDir + "/nfkd/" + script + ".json", JSON.stringify(nfkdByScript[script], true, 4), function (err) {
            if (err) {
                throw err;
            }
        });

        fs.writeFile(codeDir + "/nfkd/" + script + ".js", genCode(script, "nfkd"), function (err) {
            if (err) {
                throw err;
            }
        });
    }
}

fs.writeFile(codeDir + "/nfkc/all.js", genCode("all", "nfkc"), function (err) {
    if (err) {
        throw err;
    }
});

for (script in nfkdByScript) {
    if (script && nfkdByScript[script]) {
        fs.writeFile(codeDir + "/nfkc/" + script + ".js", genCode(script, "nfkc"), function (err) {
            if (err) {
                throw err;
            }
        });
    }
}

fs.writeFile(toDir + "/ccc.json", JSON.stringify(combiningMappings, true, 4), function (err) {
    if (err) {
        throw err;
    }
});
