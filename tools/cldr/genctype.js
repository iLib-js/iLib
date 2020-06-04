/*
 * genctype.js - ilib tool to generate the json ctype information from the Unicode
 * data files
 *
 * Copyright © 2013-2015, 2018 JEDLSoft
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

var unifile = require('./unifile.js');
var common = require('./common.js');
var UnicodeFile = unifile.UnicodeFile;
var charIterator = common.charIterator;
var isMember = common.isMember;
var coelesce = common.coelesce;

function usage() {
    console.log("Usage: genctype [-h] UCD_dir [toDir]\n" +
        "Generate the character type data.\n\n" +
        "-h or --help\n" +
        "  this help\n" +
        "UCD_dir\n" +
        "  path to the Unicode Character Database files \n" +
        "toDir\n" +
        "  directory to output the normalization json files. Default: current dir.");
    process.exit(1);
}

var unicodeFileName;
var fileName;
var toDir = "tmp";

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});


if (process.argv.length < 3) {
    console.error('Error: not enough arguments');
    usage();
}

var unicodeDirName = process.argv[2];

var unicodeFileName = path.join(unicodeDirName, "extracted/DerivedGeneralCategory.txt");
var unicodeBlockFile = path.join(unicodeDirName, "Blocks.txt");


if (process.argv.length > 3) {
    toDir = process.argv[3];
}

console.log("genctype - generate ctype data.\n" +
    "Copyright (c) 2012 - 2015, 2018 JEDLSoft");

if (!fs.existsSync(unicodeFileName)) {
    console.error("Could not access file " + unicodeFileName);
    usage();
}

if (!fs.existsSync(toDir)) {
    common.makeDirs(toDir);
}

/*
 *	For creating ctype_*.json
 */
var map = {};

var uf = new UnicodeFile({path: unicodeFileName});
var len = uf.length();
var row;
var range, rangeName, rangeStart, rangeEnd;
var rangeLetter;

for (var i = 0; i < len; i++ ) {
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
        fileName = path.join(toDir, "/ctype_" + letter + ".json");
        console.log(fileName);
        fs.writeFile(fileName, JSON.stringify(map[letter], true, 4), function (err) {
            if (err) {
                throw err;
            }
        });
    }
}

/*
 *	For creating ctype.json
 */

/*
 *	List for updating blockName for ctype.json.
 *	Some names don't need to be re-named.
 */
var blockNameMapping = {
    "basic latin": "latin",
    "latin-1 supplement": "latin",
    "latin extended-a": "latin",
    "latin extended-b": "latin",
    "latin extended additional": "latin",
    "latin extended-c": "latin",
    "latin extended-d": "latin",
    "latin extended-e": "latin",
    "ancient greek musical notation": "greekmusic",
    "ancient greek numbers": "greeknumbers",
    "greek extended": "greek",
    "greek and coptic": "greek",
    "ipa extensions": "ipa",
    "phonetic extensions": "ipa",
    "phonetic extensions supplement": "ipa",
    "mathematical operators": "operators",
    "supplemental mathematical operators": "operators",
    "cyrillic": "cyrillic",
    "cyrillic supplement": "cyrillic",
    "cyrillic extended-a": "cyrillic",
    "cyrillic extended-b": "cyrillic",
    "arabic": "arabic",
    "arabic supplement": "arabic",
    "arabic extended-a": "arabic",
    "arabic presentation forms-a": "arabic",
    "arabic presentation forms-b": "arabic",
    "arabic mathematical alphabetic symbols": "arabic",
    "devanagari": "devanagari",
    "devanagari extended": "devanagari",
    "myanmar": "myanmar",
    "myanmar extended-a": "myanmar",
    "myanmar extended-b": "myanmar",
    "hangul jamo": "hangul",  // ideograph
    "hangul compatibility jamo": "hangul",
    "hangul jamo extended-a": "hangul",
    "hangul jamo extended-b": "hangul",
    "hangul syllables": "hangul",
    "ethiopic": "ethiopic",
    "ethiopic supplement": "ethiopic",
    "ethiopic extended": "ethiopic",
    "ethiopic extended-a": "ethiopic",
    "unified canadian aboriginal syllabics": "canadian",
    "unified canadian aboriginal syllabics extended": "canadian",
    "combining diacritical marks": "combining",
    "combining diacritical marks extended": "combining",
    "combining diacritical marks supplement": "combining",
    "combining diacritical marks for symbols": "combining",
    "arrows": "arrows",
    "supplemental arrows-a": "arrows",
    "supplemental arrows-b": "arrows",
    "miscellaneous symbols and arrows": "arrows",
    "supplemental arrows-c": "arrows",
    "cjk compatibility": "cjkcompatibility",
    "cjk compatibility ideographs": "cjkcompatibility",
    "cjk compatibility forms": "cjkcompatibility",
    "cjk compatibility ideographs supplement": "cjkcompatibility",
    "ideographic description characters": "cjk",
    "cjk unified ideographs extension a": "cjk",
    "cjk unified ideographs": "cjk",
    "cjk unified ideographs extension b": "cjk",
    "cjk unified ideographs extension c": "cjk",
    "cjk unified ideographs extension d": "cjk",
    "cjk unified ideographs extension e": "cjk",
    "miscellaneous mathematical symbols-a": "mathematical",
    "miscellaneous mathematical symbols-b": "mathematical",
    "mathematical alphanumeric symbols": "mathematical",
    "private use area": "privateuse",
    "supplementary private use area-a": "privateuse",
    "supplementary private use area-b": "privateuse",
    "variation selectors": "variations",
    "variation selectors supplement": "variations",
    "bamum": "bamum",
    "bamum supplement": "bamum",
    "georgian": "georgian",
    "georgian supplement": "georgian",
    "general punctuation": "punctuation",
    "supplemental punctuation": "punctuation",
    "katakana": "katakana",
    "katakana phonetic extensions": "katakana",
    "kana supplement": "katakana",
    "bopomofo": "bopomofo",
    "bopomofo extended": "bopomofo",
    "enclosed alphanumerics": "enclosedalpha",
    "enclosed alphanumeric supplement": "enclosedalpha",
    "cjk radicals supplement": "cjkradicals",
    "kangxi radicals": "cjkradicals",
    "yi syllables": "yi",
    "yi radicals": "yi",
    "linear b syllabary": "linearb",
    "linear b ideograms": "linearb",
    "enclosed cjk letters and months": "enclosedcjk",
    "enclosed ideographic supplement": "enclosedcjk",
    "spacing modifier letters": "spacing",
    "sinhala": "sinhala",
    "sinhala archaic numbers": "sinhala",
    "cherokee": "cherokee",
    "cherokee supplement": "cherokee",
    "khmer symbols": "khmersymbols",
    "tai le": "taile",
    "new tai lue": "newtailue",
    "tai tham": "taitham",
    "sundanese": "sundanese",
    "sundanese supplement": "sundanese",
    "ol chiki": "olchiki",
    "vedic extensions": "vedic",
    "superscripts and subscripts": "supersub",
    "currency symbols": "currency",
    "letterlike symbols": "letterlike",
    "number forms": "numbers",
    "miscellaneous technical": "misc",
    "control pictures": "controlpictures",
    "optical character recognition": "ocr",
    "box drawing": "box",
    "block elements": "block",
    "geometric shapes": "geometric",
    "geometric shapes extended": "geometric",
    "miscellaneous symbols": "miscsymbols",
    "braille patterns": "braille",
    "cjk symbols and punctuation": "cjkpunct",
    "yijing hexagram symbols": "yijing",
    "cjk strokes": "cjkstrokes",
    "modifier tone letters": "modifiertone",
    "syloti nagri": "sylotinagri",
    "common indic number forms": "indicnumber",
    "phags-pa": "phagspa",
    "kayah li": "kayahli",
    "tai viet": "taiviet",
    "meetei mayek": "meeteimayek",
    "meetei mayek extensions": "meeteimayek",
    "alphabetic presentation forms": "presentation",
    "vertical forms": "vertical",
    "combining half marks": "halfmarks",
    "small form variants": "small",
    "halfwidth and fullwidth forms": "width",
    "aegean numbers": "aegean",
    "ancient symbols": "ancient",
    "phaistos disc": "phaistosdisc",
    "old italic": "olditalic",
    "old persian": "oldpersian",
    "cypriot syllabary": "cypriot",
    "imperial aramaic": "aramaic",
    "old south arabian": "oldsoutharabian",
    "inscriptional parthian": "parthian",
    "inscriptional pahlavi": "pahlavi",
    "psalter pahlavi": "pahlavi",
    "old turkic": "oldturkic",
    "rumi numeral symbols": "ruminumerals",
    "cuneiform": "cuneiform",
    "early dynastic cuneiform": "cuneiform",
    "cuneiform numbers and punctuation": "cuneiformnumbers",
    "meroitic hieroglyphs": "hieroglyphs",
    "egyptian hieroglyphs": "hieroglyphs",
    "anatolian hieroglyphs": "hieroglyphs",
    "byzantine musical symbols": "byzantine musical",
    "tai xuan jing symbols": "taixuanjing",
    "counting rod numerals": "rodnumerals",
    "mahjong tiles": "mahjong",
    "domino tiles": "domino",
    "playing cards": "playingcards",
    "transport and map symbols": "mapsymbols",
    "alchemical symbols": "alchemic",
    "byzantine musical symbols": "byzantinemusic",
    // newly added manually since UCD 8.0
    "coptic epact numbers": "copticnumber",
    "old permic": "oldpermic",
    "caucasian albanian": "albanian",
    "linear a": "lineara",
    "meroitic cursive": "meroitic",
    "old north arabian": "oldnortharabian",
    "high surrogates": "highsurrogates",
    "high private use surrogates": "highsurrogates",
    "low surrogates": "lowsurrogates",
    "old hungarian": "oldhungarian",
    "sora sompeng": "sorasompeng",
    "warang citi": "warangciti",
    "pau cin hau": "paucinhau",
    "bassa vah": "bassavah",
    "pahawh hmong": "pahawhhmong",
    "shorthand format controls": "shorthandformat",
    "sutton signwriting": "suttonsignwriting",
    "miscellaneous symbols and pictographs": "pictographs",
    "supplemental symbols and pictographs": "pictographs",
    "ornamental dingbats": "ornamentaldingbats",
    // newly added manually since UCD 9.0
    "cyrillic extended-c": "cyrillic",
    "mongolian supplement":  "mongolian",
    "ideographic symbols and punctuation": "tangut",
    "tangut": "tangut",
    "tangut components": "tangut",
    "glagolitic supplement": "glagolitic"
}

/*
 *	List for manually handled
 *	as Reference: http://www.cplusplus.com/reference/cctype/
 */
var manuallyHandleRange = {
    "ascii": [
        [32, 127]
    ],
    "digit": [
        [48, 57]
    ],
    "xdigit": [
        [48, 57],
        [65, 70],
        [97, 102]
    ],
    "blank": [
        [9, 9],
        [32, 32]
    ],
    "space": [
        [9, 13],
        [32, 32],
        [133],
        [8232, 8233] //Line Separator, Paragraph Separator
    ]
};

function sortKeys(x) {
    var keys = Object.keys(x);
    keys.sort();
    var y = {};

    for (var i = 0; i < keys.length; i++) {
        y[keys[i]] = x[keys[i]];
    }
    return y;
}

function sortObject(objectName) {
    var listMap = objectName;
    for (i=0; i< listMap.length; i++) {
        for (j= i+1; j < listMap.length; j++) {
            if(listMap[i][0] > listMap[j][0]) {
                temp = listMap[i];
                listMap[i] = listMap[j]
                listMap[j] = temp;
            }
        }
    }
}

function createKeys (keyTitle, keyList){
    var name = keyTitle,
    list = keyList;

    for (i=0; i < list.length; i++) {
        for (j=0; j< ctypeMap[list[i]].length ;j++) {
            ctypeMap[keyTitle].push(ctypeMap[list[i]][j]);
        }
    }
}

var ctypeMap = {};

uf = new UnicodeFile({path: unicodeBlockFile});
len = uf.length();

for (var i = 0; i < len; i++) {
    row = uf.get(i);

    rangeName = row[1].trim().toLowerCase();
    updateRangeName = blockNameMapping[rangeName];

    if (updateRangeName !== undefined) {
        rangeName = updateRangeName;
    }

    rangeStart = parseInt(row[0].match(/^[A-F0-9]+/)[0],16);
    rangeEnd = row[0].match(/\.\.[A-F0-9]+/);

    if (rangeEnd && rangeEnd.length > 0) {
        rangeEnd = parseInt(rangeEnd[0].substring(2), 16);
        range = [rangeStart, rangeEnd];
    } else {
        range = [rangeStart];
    }

    if (!ctypeMap[rangeName]) {
        ctypeMap[rangeName] = [range];
    } else {
        ctypeMap[rangeName].push(range);
    }

}

for (rangeName in ctypeMap) {
    if (rangeName && ctypeMap[rangeName]) {
        ctypeMap[rangeName] = coelesce(ctypeMap[rangeName], 0);
    }
}

ctypeMap["ideograph"] = [];
ctypeMap["ideoother"] = [];
var ideographGroup = ["bopomofo", "cjk", "katakana",  "yi", "hangul","cjkcompatibility"];
var ideootherGroup = ["bopomofo", "katakana", "hangul",
    "hiragana", "cjkcompatibility", "cjkradicals",
    "cjkpunct", "cjkstrokes"
    ];

createKeys("ideograph", ideographGroup)
listMap = ctypeMap["ideograph"];
sortObject(listMap);

createKeys("ideoother", ideootherGroup)
listMap2 = ctypeMap["ideoother"];
sortObject(listMap2);

var sortedCtype = sortKeys(ctypeMap)
var merged = common.merge(manuallyHandleRange, sortedCtype);
fileName = path.join(toDir, "ctype.json");
console.log(fileName);
fs.writeFileSync(fileName, JSON.stringify(merged, true, 4))

console.log("Done.");