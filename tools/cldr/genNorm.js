/*
 * gennorm.js - ilib tool to generate the json UNA normalization data from the Unicode 
 * data files
 * 
 * Copyright © 2012, JEDLSoft
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
var uniData = require('./uniData.js');
var unifile = require('./unifile.js');
var common = require('./common.js');
var UnicodeData = uniData.UnicodeData;
var CharacterInfo = uniData.CharacterInfo;
var UnicodeFile = unifile.UnicodeFile;
var charIterator = common.charIterator;
var isMember = common.isMember;

function usage() {
	util.print("Usage: gennorm [-h] UnicodeData.txt DerivedNormalizationProps.txt [toDir]\n" +
			"Generate the normalization data.\n\n" +
			"-h or --help\n" +
			"  this help\n" +
			"UnicodeData.txt\n" +
			"  the Unicode character database file downloaded from the Unicode site\n" +
			"DerivedNormalizationProps.txt\n" +
			"  the derived normalization properties database downloaded from the Unicode site\n" +
			"toDir\n" +
			"  directory to output the normalization json files. Default: current dir.\n");
	process.exit(1);
}

var unicodeFileName;
var toDir = ".";

process.argv.forEach(function (val, index, array) {
	if (val === "-h" || val === "--help") {
		usage();
	}
});

if (process.argv.length < 4) {
	util.error('Error: not enough arguments');
	usage();
}

unicodeFileName = process.argv[2];
exclusionFileName = process.argv[3];
if (process.argv.length > 4) {
	toDir = process.argv[4];
}

util.print("gennorm - generate normalization data.\n" +
		"Copyright (c) 2012 JEDLSoft\n");

fs.exists(unicodeFileName, function (exists) {
	if (!exists) {
		util.error("Could not access file " + unicodeFileName);
		usage();
	}
});

fs.exists(exclusionFileName, function (exists) {
	if (!exists) {
		util.error("Could not access file " + exclusionFileName);
		usage();
	}
});

fs.exists(toDir, function (exists) {
	if (!exists) {
		util.error("Could not access target directory " + toDir);
		usage();
	}
});

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
 * @returns {string} the mapped character
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

var exclusionFile = new UnicodeFile({path: exclusionFileName});
var len = exclusionFile.length();
for (var i = 0; i < len; i++ ) {
	var fields = exclusionFile.get(i);
	if (fields[1].trim() === "Full_Composition_Exclusion") {
		var range = fields[0].split(/\.\./);
		compositionExclusions.push((range.length > 1) ? [parseInt(range[0], 16), parseInt(range[1], 16)] : parseInt(fields[0], 16));
	}
}
//util.print("Full exclusion table is:\n" + JSON.stringify(compositionExclusions));

var ud = new UnicodeData({path: unicodeFileName});
len = ud.length();
var row;
for (var i = 0; i < len; i++ ) {
	row = ud.get(i);
	var c = row.getCharacter();
	if (row.getDecompositionType() === 'canon') {
		canonicalMappings[c] = row.getDecomposition();
		if (!isMember(compositionExclusions, common.UTF16ToCodePoint(c))) {
			canonicalComp[row.getDecomposition()] = c;	
		//} else {
		//	util.print("Composition from " + common.UTF16ToCodePoint(c) + " to " + common.UTF16ToCodePoint(row.getDecomposition()) + " is on the exclusion list.\n");
		}
	} else {
		compatibilityMappings[c] = row.getDecomposition();
	}
	
	var temp = row.getCombiningClass();
	if (temp > 0) {
		combiningMappings[row.getCharacter()] = temp;
	}
}

// the Unicode data has only the binary decompositions. That is, the first of 
// two chars of a decomposition may be itself decomposable. So, apply the 
// decompositions recursively here to pre-calculate the full decomposition 
// before writing out the files.

for (mapping in canonicalMappings) {
	if (mapping && canonicalMappings[mapping]) {
		canonicalDecomp[mapping] = expand(mapping, canonicalMappings);
	}
}

for (mapping in compatibilityMappings) {
	if (mapping && compatibilityMappings[mapping]) {
		var expansion = expand(mapping, canonicalDecomp, compatibilityMappings);
		if (expansion && expansion !== mapping) {
			compatibilityDecomp[mapping] = expansion; 
		}
	}
}

fs.writeFile(toDir + "/norm.nfd.json", JSON.stringify(canonicalDecomp), function (err) {
	if (err) {
		throw err;
	}
});
fs.writeFile(toDir + "/norm.nfc.json", JSON.stringify(canonicalComp), function (err) {
	if (err) {
		throw err;
	}
});
fs.writeFile(toDir + "/norm.nfkd.json", JSON.stringify(compatibilityDecomp), function (err) {
	if (err) {
		throw err;
	}
});
fs.writeFile(toDir + "/norm.ccc.json", JSON.stringify(combiningMappings), function (err) {
	if (err) {
		throw err;
	}
});
