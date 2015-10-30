/*
 * genctype.js - ilib tool to generate the json ctype information from the Unicode 
 * data files
 * 
 * Copyright © 2013 - 2015, JEDLSoft
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
var unifile = require('./unifile.js');
var common = require('./common.js');
var UnicodeFile = unifile.UnicodeFile;
var charIterator = common.charIterator;
var isMember = common.isMember;

function usage() {
	util.print("Usage: genctype [-h] UCD_dir [toDir]\n" +
			"Generate the character type data.\n\n" +
			"-h or --help\n" +
			"  this help\n" +
			"UCD_dir\n" +
			"  path to the Unicode Character Database files \n" +
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



if (process.argv.length < 3) {
	util.error('Error: not enough arguments');
	usage();
}

var unicodeDirName = process.argv[2];

var unicodeFileName = unicodeDirName + "extracted/DerivedGeneralCategory.txt";
var unicodeBlockFile = unicodeDirName + "Blocks.txt";


if (process.argv.length > 3) {
	toDir = process.argv[3];
}

util.print("genctype - generate ctype data.\n" +
		"Copyright (c) 2012 - 2015 JEDLSoft\n");


fs.exists(unicodeFileName, function (exists) {
	if (!exists) {
		util.error("Could not access file " + unicodeFileName);
		usage();
	}
});

fs.exists(toDir, function (exists) {
	if (!exists) {
		util.error("Could not access target directory " + toDir);
		usage();
	}
});

var map = {};

var uf = new UnicodeFile({path: unicodeFileName});
var len = uf.length();
var row;
var range, rangeName, rangeStart, rangeEnd;
var rangeLetter;

/*for (var i = 0; i < len; i++ ) {
	row = uf.get(i);

	rangeName = row[1].trim();
	rangeStart = parseInt(row[0].match(/^[A-F0-9]+/)[0],16);
	rangeEnd = row[0].match(/\.\.[A-F0-9]+/);

	if (rangeEnd && rangeEnd.length > 0) {
		rangeEnd = parseInt(rangeEnd[0].substring(2), 16);
		range = [rangeStart, rangeEnd];
	} else {
		range = [rangeStart];
	}
	
	rangeLetter = rangeName.substring(0,1).toLowerCase();
	if (typeof(map[rangeLetter]) === 'undefined') {
		map[rangeLetter] = {};
	}
	if (typeof(map[rangeLetter][rangeName]) === 'undefined') {
		map[rangeLetter][rangeName] = [];
	}
	map[rangeLetter][rangeName].push(range);
}

for (letter in map) {
	if (letter && map[letter]) {
		fs.writeFile(toDir + "/ctype_" + letter + ".json", JSON.stringify(map[letter], true, 4), function (err) {
			if (err) {
				throw err;
			}
		});
	}
}*/

var blockNameMapping = {
	"basic latin": "latin",
	"latin-1 supplement": "latin",
	"latin extended-a": "latin",
	"latin extended-b": "latin",
	"latin extended additional": "latin",
	"latin extended-c": "latin",
	"latin extended-d": "latin",
	"latin extended-e": "latin",

}



uf = new UnicodeFile({path: unicodeBlockFile});
len = uf.length();

for (var i = 0; i < len; i++) {
	row = uf.get(i);

	rangeName = row[1].trim().toLowerCase();

	// Note. Temporarily code for checking names. This colde will be replaced with not using if/else statement.
	if (rangeName.indexOf('latin') !== -1) {
		rangeName = "latin" 
		// basic latin,latin-1 supplement,latin extended-a,latin extended-b,latin extended additional,latin extended-c,latin extended-d,latin extended-e
	} else if (rangeName === 'ancient greek musical notation') {
		rangeName = "greekmusic"
	}
	else if (rangeName === 'ancient greek numbers') {
		rangeName = "greeknumbers"
	}
	else if (rangeName === 'greek extended' || rangeName === 'greek and coptic') {
		rangeName = "greek"
	}
	else if (rangeName === 'ipa extensions' || rangeName === 'phonetic extensions' || rangeName === 'phonetic extensions supplement') {
		rangeName = "ipa"
	}
	else if (rangeName === 'mathematical operators' || rangeName === 'supplemental mathematical operators') {
		rangeName = "operators"
	}
	else if (rangeName.indexOf('cyrillic') !== -1) {
		rangeName = "cyrillic"
		// cyrillic, cyrillic supplement, cyrillic extended-a, cyrillic extended-b
	}
	else if (rangeName.indexOf('arabic') !== -1) {
		rangeName = "arabic"
		//arabic,arabic supplement,arabic extended-a,arabic presentation forms-a,arabic presentation forms-b,arabic mathematical alphabetic symbols
	}
	else if (rangeName.indexOf('devanagari') !== -1) {
		rangeName = "devanagari"
		//devanagari,devanagari extended"
	}
	else if (rangeName.indexOf('myanmar') !== -1) {
		rangeName = "myanmar"
		//myanmar,myanmar extended-b,myanmar extended-a
	}
	else if (rangeName.indexOf('hangul') !== -1) {
		rangeName = "hangul"
		//hangul jamo,hangul compatibility jamo,hangul jamo extended-a,hangul syllables,hangul jamo extended-b
	}
	else if (rangeName.indexOf('ethiopic') !== -1) {
		rangeName = "ethiopic"
		//ethiopic,ethiopic supplement,ethiopic extended,ethiopic extended-a
	}
	else if (rangeName.indexOf('canadian') !== -1) {
		rangeName = "canadian"
		//devanagari,devanagari extended"
	}
	else if (rangeName.indexOf('combining') !== -1) {
		rangeName = "combining"
		//combining diacritical marks,combining diacritical marks extended,combining diacritical marks supplement,combining diacritical marks for symbols
	}
	else if (rangeName.indexOf('arrows') !== -1) {
		rangeName = "arrows"
		//arrows,supplemental arrows-a,supplemental arrows-b,miscellaneous symbols and arrows,supplemental arrows-c
	}
	else if (rangeName.indexOf('cjk compatibility') !== -1) {
		rangeName = "cjkcompatibility"
		//cjk compatibility,cjk compatibility ideographs,cjk compatibility forms,cjk compatibility ideographs supplement
	}
	else if (rangeName === 'ideographic description characters'
			 || rangeName === 'cjk symbols and punctuation'
			 || rangeName === 'cjk strokes'			 
			 || rangeName === 'cjk unified ideographs extension a'
			 || rangeName === 'cjk unified ideographs'
			 || rangeName === 'cjk unified ideographs extension b'
			 || rangeName === 'cjk unified ideographs extension c'
			 || rangeName === 'cjk unified ideographs extension d'
			 || rangeName === 'cjk unified ideographs extension e'
			 ) {

		rangeName = "cjk"
		/*
			ideographic description characters : include currently in cjk		
			cjk symbols and punctuation ??
			cjk strokes
			cjk unified ideographs extension a
			cjk unified ideographs			
			cjk unified ideographs extension b
			cjk unified ideographs extension c
			cjk unified ideographs extension d
			cjk unified ideographs extension e
		*/
	}
	else if (rangeName === 'miscellaneous mathematical symbols-a'
			 || rangeName === 'miscellaneous mathematical symbols-b'
			 || rangeName === 'mathematical alphanumeric symbols'	
			 ) {
		rangeName = "mathematical"
		/*
			miscellaneous mathematical symbols-a
			miscellaneous mathematical symbols-b
			mathematical alphanumeric symbols
		*/
	}
	else if (rangeName === 'private use area'
			 || rangeName === 'supplementary private use area-a'
			 || rangeName === 'supplementary private use area-b'	
			 ) {
		rangeName = "privateuse"
		/*
			private use area
			supplementary private use area-a
			supplementary private use area-b
		*/
	}
	else if (rangeName.indexOf('variation') !== -1) {
		rangeName = "variations"
		//variation selectors, variation selectors supplement
	}
	else if (rangeName.indexOf('bamum') !== -1) {
		rangeName = "bamum"
		//bamum,bamum supplement
	}
	else if (rangeName.indexOf('georgian') !== -1) {
		rangeName = "georgian"
		//georgian,georgian supplement
	}
	else if (rangeName === 'general punctuation'
			 || rangeName === 'supplemental punctuation' 
			 ) {
		rangeName = "punctuation"
		/*
			general punctuation
			supplemental punctuation
		*/
	}
	else if (rangeName.indexOf('kana') !== -1) {
		rangeName = "katakana"
		//katakana,katakana phonetic extensions,kana supplement
	}
	else if (rangeName.indexOf('bopomofo') !== -1) {
		rangeName = "bopomofo"
		//bopomofo,bopomofo extended
	}
	else if (rangeName === 'enclosed alphanumerics'
			 || rangeName === 'enclosed alphanumeric supplement' 
			 ) {
		rangeName = "enclosedalpha"
		/*
			enclosed alphanumerics
			enclosed alphanumeric supplement
		*/
	}
	else if (rangeName === 'cjk radicals supplement'
			 || rangeName === 'kangxi radicals' 
			 ) {
		rangeName = "cjkradicals"
		/*
			cjk radicals supplement
			kangxi radicals
		*/
	}
	else if (rangeName === 'yi syllables'
			 || rangeName === 'yi radicals' 
			 ) {
		rangeName = "yi"
		/*
			yi syllables
			yi radicals
		*/
	}
	else if (rangeName.indexOf('linear b') !== -1) {
		rangeName = "linearb"
		//linear b syllabary ,linear b ideograms
	}
	else if (rangeName === 'enclosed cjk letters and months'
			 || rangeName === 'enclosed ideographic supplement' 
			 ) {
		rangeName = "enclosedcjk"
		/*
			enclosed cjk letters and months
			enclosed ideographic supplement
		*/
	}
	else if (rangeName === 'spacing') {
		rangeName = "spacing"
		//spacing modifier letters
	}
	else if (rangeName === 'sinhala'
			 || rangeName === 'sinhala archaic numbers' 
			 ) {
		rangeName = "sinhala"
		/*
			sinhala
			sinhala archaic numbers
		*/
	}
	else if (rangeName === 'cherokee'
			 || rangeName === 'cherokee supplement' 
			 ) {
		rangeName = "cherokee"
		/*
			cherokee
			cherokee supplement
		*/
	}
	else if (rangeName === 'khmer symbols') {
		rangeName = "khmersymbols"
		/*
			khmer symbols
		*/
	}
	else if (rangeName === 'tai le') {
		rangeName = "taile"
		/*
			tai le
		*/
	}
	else if (rangeName === 'new tai lue') {
		rangeName = "newtailue"
		/*
			new tai lue
		*/
	}
	else if (rangeName === 'tai tham') {
		rangeName = "taitham"
		/*
			tai tham
		*/
	}
	else if (rangeName === 'sundanese'
			 || rangeName === 'sundanese supplement' 
			 ) {
		rangeName = "sundanese"
		/*
			sundanese
			sundanese supplement
		*/
	}
	else if (rangeName === 'ol chiki') {
		rangeName = "olchiki"
		/*
			ol chiki
		*/
	}
	else if (rangeName === 'vedic extensions') {
		rangeName = "vedic"
		/*
			vedic extensions
		*/
	}
	else if (rangeName === 'superscripts and subscripts') {
		rangeName = "supersub"
		/*
			superscripts and subscripts
		*/
	}
	else if (rangeName === 'currency symbols') {
		rangeName = "currency"
		/*
			currency symbols
		*/
	}
	else if (rangeName === 'letterlike symbols') {
		rangeName = "letterlike"
		/*
			letterlike symbols
		*/
	}


	//rangeName = convert_map[rangeName];

	rangeStart = parseInt(row[0].match(/^[A-F0-9]+/)[0],16);
	rangeEnd = row[0].match(/\.\.[A-F0-9]+/);

	if (rangeEnd && rangeEnd.length > 0) {
		rangeEnd = parseInt(rangeEnd[0].substring(2), 16);
		range = [rangeStart, rangeEnd];
	} else {
		range = [rangeStart];
	}

	if (typeof(map[rangeName]) === 'undefined') {
		map[rangeName] = [];
	}

	map[rangeName].push(range);
}

fs.writeFile(toDir + "/ctype.json", JSON.stringify(map, true, 4))
