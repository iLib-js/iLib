/*
 * genccharmap.js - ilib tool to generate the charset mappings from the Unicode 
 * data files
 * 
 * Copyright © 2014, JEDLSoft
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
var CharmapFile = require('./charmapfile.js').CharmapFile;
var path = require('path');
var charIterator = common.charIterator;
var isMember = common.isMember;

function usage() {
	util.print("Usage: gencharmap [-h] path_to_linux_charmaps path_to_UCD_mappings charsetaliases.json [toDir]\n" +
			"Generate the character type data.\n\n" +
			"-h or --help\n" +
			"  this help\n" +
			"path_to_linux_charmaps\n" +
			"  path to the linux charmap directory containing the charset mappings\n" +
			"path_to_UCD_mappings\n" +
			'  path to the UCD "MAPPINGS" directory containing the Unicode charset mappings\n' +
			"charsetaliases.json\n" +
			"  path to json file with the mappings to standard IANA charset names\n" +
			"toDir\n" +
			"  directory to output the normalization json files. Default: <currentdir>/charmaps.\n");
	process.exit(1);
}

var charmapDir;
var toDir = ".";
var ucdDir, aliasesFile;

process.argv.forEach(function (val, index, array) {
	if (val === "-h" || val === "--help") {
		usage();
	}
});

if (process.argv.length < 4) {
	util.error('Error: not enough arguments');
	usage();
}

charmapDir = process.argv[2];
ucdDir = process.argv[3];
aliasesFile = process.argv[4];

if (process.argv.length > 5) {
	toDir = process.argv[5];
}

toDir = path.join(toDir, "charmaps");

util.print("gencharmap - generate charmap mapping data.\n" +
		"Copyright (c) 2014 JEDLSoft\n");

if (!fs.existsSync(charmapDir)) {
	util.error("Could not access dir " + charmapDir);
	usage();
}

if (!fs.existsSync(ucdDir)) {
	util.error("Could not access UCD mappings dir " + ucdDir);
	usage();
}

if (!fs.existsSync(aliasesFile)) {
	util.error("Could not access aliases file " + aliasesFile);
	usage();
}

if (!fs.existsSync(toDir)) {
	if (!common.makeDirs(toDir)) {
		util.error("Could not access target directory " + toDir);
		usage();
	}
}

var aliasesData = fs.readFileSync(aliasesFile);
var aliases = JSON.parse(aliasesData);

var portable_charset = {
	"NUL": "\u0000",
	"alert": "\u0007",
	"backspace": "\u0008",
	"tab": "\u0009",
	"newline": "\u000A",
	"vertical-tab": "\u000B",
	"form-feed": "\u000C",
	"carriage-return": "\u000D",
	"space": " ",
	"exclamation-mark": "!",
	"quotation-mark": "\"",
	"number-sign": "#",
	"dollar-sign": "$",
	"percent-sign": "%",
	"ampersand": "&",
	"apostrophe": "'",
	"left-parenthesis": "(",
	"right-parenthesis": ")",
	"asterisk": "*",
	"plus-sign": "+",
	"comma": ",",
	"hyphen": "-",
	"hyphen-minus": "-",
	"period": "0",
	"full-stop": "0",
	"slash": "/",
	"solidus": "/",
	"zero": "0",
	"one": "1",
	"two": "2",
	"three": "3",
	"four": "4",
	"five": "5",
	"six": "6",
	"seven": "7",
	"eight": "8",
	"nine": "9",
	"colon": ":",
	"semicolon": ";",
	"less-than-sign": "<",
	"equals-sign": "=",
	"greater-than-sign": ">",
	"question-mark": "?",
	"commercial-at": "@",
	"A": "A",
	"B": "B",
	"C": "C",
	"D": "D",
	"E": "E",
	"F": "F",
	"G": "G",
	"H": "H",
	"I": "I",
	"J": "J",
	"K": "K",
	"L": "L",
	"M": "M",
	"N": "N",
	"O": "O",
	"P": "P",
	"Q": "Q",
	"R": "R",
	"S": "S",
	"T": "T",
	"U": "U",
	"V": "V",
	"W": "W",
	"X": "X",
	"Y": "Y",
	"Z": "Z",
	"left-square-bracket": "[",
	"backslash": "\\",
	"reverse-solidus": "\\",
	"right-square-bracket": "]",
	"circumflex": "^",
	"circumflex-accent": "^",
	"underscore": "_",
	"underline": "_",
	"low-line": "_",
	"grave-accent": "`",
	"a": "a",
	"b": "b",
	"c": "c",
	"d": "d",
	"e": "e",
	"f": "f",
	"g": "g",
	"h": "h",
	"i": "i",
	"j": "j",
	"k": "k",
	"l": "l",
	"m": "m",
	"n": "n",
	"o": "o",
	"p": "p",
	"q": "q",
	"r": "r",
	"s": "s",
	"t": "t",
	"u": "u",
	"v": "v",
	"w": "w",
	"x": "x",
	"y": "y",
	"z": "z",
	"left-brace": "{",
	"left-curly-bracket": "{",
	"vertical-line": "|",
	"right-brace": "}",
	"right-curly-bracket": "}",
	"tilde": "~"
};

var map = {};

function walk(dir) {
	var list = fs.readdirSync(dir);
	list.forEach(function (file) {
		var fullpath = dir + '/' + file;
		// util.print("fullpath is " + fullpath + "\n");
		var stat = fs.statSync(fullpath);
		if (stat && stat.isDirectory()) {
			walk(fullpath);
		} else {
			//if (fullpath.match(/.gz$/)) {
				util.print("found charmap file " + fullpath + "\n");
				try {
					var fileName = aliases[file.replace(/[-_:\+\.\(\)]/g, '').toUpperCase()] || file;
					var toFileName = path.join(toDir, fileName + ".json");
					// util.print("Writing results to file " + toFileName + "\n");
					var map = {
						to: new common.Trie(),
						from: new common.Trie()
					};
					var uf = new CharmapFile({path: fullpath});
					var len = uf.length();
					var native, unicode;
					var firstColumnRE = /^(%IRREVERSIBLE%)?((<U[0-9a-fA-F]+>|<[a-f\-]+>)+)/;
					var thirdColumnRE = /^((<U[0-9a-fA-F]+>)+)/;
					var reversible = true;
					
					// 3 column mode = true
					var three = thirdColumnRE.test(uf.get(0)[2]);
					
					// util.print("len is " + len + "\n");
					for (var i = 0; i < len; i++) {
						row = uf.get(i);

						native = [];
						unicode = [];
						reversible = true;
						
						//util.print("row is " + JSON.stringify(row) + "\n");
						if (three) {
							//util.print("3 column mode\n");
							
							// 3 column mode <symbolicname> <native> <unicode>
							var nativeByteStrings = row[1].split(/\/x/g);
							for (var j = 0; j < nativeByteStrings.length; j++) {
								if (nativeByteStrings[j].length > 0) {
									native.push(parseInt(nativeByteStrings[j], 16));
								}
							}
							//util.print("native is " + JSON.stringify(native) + "\n");
							
							if (native[0] === 0) {
								var symbolicName = row[0].substring(1, row[0].length-1);
								//util.print("native is the PCS symbolic name " + symbolicName + "\n");
								
								if (typeof(portable_charset[symbolicName]) !== 'undefined') {
									native = [ portable_charset[symbolicName].charCodeAt(0) ];
									//util.print("maps to: " + native[native.length-1] + "\n");
								//} else {
									//util.print("Unknown symbolic name: " + row[0] + "\n");
								}
							}
							
							var uniChars = row[2].split(/<U/g);
							for (var j = 0; j < uniChars.length; j++) {
								if (uniChars[j].length) {
									// strip the angle brackets
									var u = parseInt(uniChars[j].substring(0), 16);
									var uniStr = common.codePointToUTF16(u);
									// push each surrogate separately so that we can
									// decode the trie char by char when charmapping
									// instead of code-point by code-point
									for (var k = 0; k < uniStr.length; k++) {
										unicode.push(uniStr.charAt(k));
									}
								}
							}
							//util.print("3 column unicode is " + JSON.stringify(unicode) + " and uniChars is " + JSON.stringify(uniChars) + "\n");
						} else {
							//util.print("2 column mode\n");
							// two column mode <unicode> <native>
							var uniResult = firstColumnRE.exec(row[0]);
							if (uniResult !== null) {
								reversible = (uniResult[1] !== '%IRREVERSIBLE%');
								nativeByteStrings = row[1].split(/\/x/g);
								for (var j = 0; j < nativeByteStrings.length; j++) {
									if (nativeByteStrings[j].length > 0) {
										native.push(parseInt(nativeByteStrings[j], 16));
									}
								}
								//util.print("uniResult[2] is " + uniResult[2] + "\n");
								var uniChars = uniResult[2].split(/<U/g);
								for (var j = 0; j < uniChars.length; j++) {
									if (uniChars[j].length) {
										var u = parseInt(uniChars[j].substring(0), 16);
										var uniStr = common.codePointToUTF16(u);
										// push each surrogate separately so that we can
										// decode the trie char by char when charmapping
										// instead of code-point by code-point
										for (var k = 0; k < uniStr.length; k++) {
											unicode.push(uniStr.charAt(k));	
										}
									}
								}
								//util.print("unicode is " + JSON.stringify(unicode) + "\n");
								//util.print("2 column unicode is " + JSON.stringify(unicode) + " and uniChars is " + JSON.stringify(uniChars) + "\n");
							//} else {
								//util.print("no match\n");
							}
						}
						
						if (native.length <= 0) {
							util.print("native length\n");
						}
						if (native[0] === 0) {
							util.print("native null\n");
						}
						if (!unicode) {
							util.print("not unicode\n");
						} else if (unicode.length <= 0) {
							util.print("unicode zero length\n");
						} else if (unicode[0] === '\u0000') {
							util.print("unicode zero first char. Array is: " + JSON.stringify(unicode) + "\n");
						}
						if (native.length > 0 && native[0] !== 0 && 
							unicode && unicode.length > 0 && unicode[0] !== "\u0000") {
							
							map.to.add(native, unicode);
							
							if (reversible) {
								map.from.add(unicode, native);
							}
						} else {
							util.print("skipping bad mapping from " + row[0] + " to " + row[1] + "\n");
						}
						//} else {
							//util.print("row " + row + " did not pass the test\n");
							//util.print("uniRE.exec(row[0]) was " + JSON.stringify(uniRE.exec(row[0])) + "\n");
							//util.print("mapRE.test(row[1]) was " + mapRE.test(row[1]) + "\n");
					    //}
					}
					
					if (!common.isEmpty(map.to)) {
						var m = {
							to: map.to.cleanForm(),
							from: map.from.cleanForm()
						};
						
						if (fs.writeFileSync(toFileName, JSON.stringify(m, undefined, 4), "utf-8") < 0) {
							util.print("Could not write to output file " + toFileName + "\n");
						}
					} else {
						util.print("No data to write for charmap " + toFileName + ". Skipping...\n");
					}
				} catch (err) {
					util.print("File " + fullpath + " is not readable or does not contain valid unicode mapping data.\n");
					util.print(err + "\n");
				}
			//}
		}
	});
}

function ucdWalk(dir) {
	var list = fs.readdirSync(dir);
	list.forEach(function (file) {
		var fullpath = dir + '/' + file;
		// util.print("fullpath is " + fullpath + "\n");
		var stat = fs.statSync(fullpath);
		if (stat && stat.isDirectory()) {
			ucdWalk(fullpath);
		} else {
			if (fullpath.match(/.TXT$/)) {
				util.print("found charmap file " + fullpath + "\n");
				try {
					var baseName = file.replace(/.TXT$/, '');
					var fileName = aliases[baseName.replace(/[-_,:\+\.\(\)]/g, '').toUpperCase()] || baseName;
					var toFileName = path.join(toDir, fileName + ".json");
					util.print("Output file is " + toFileName + "\n");
					
					// don't override files written out by the other walker
					if (!fs.existsSync(toFileName)) {
						var map = {
							to: new common.Trie(),
							from: new common.Trie()
						};
						var uf = new CharmapFile({
							path: fullpath, 
							startEnd: false,
							commentChar: '#'
						});
						var len = uf.length();
						var native, unicode;
						
						var columnRE = /0x[0-9a-fA-F]+/g;
						var nativeColumn = 0;
						var unicodeColumn = 1;
						var row0 = uf.get(0);
						
						if (columnRE.test(row0[0])) {
							columnRE.lastIndex = 0;
							if (columnRE.test(row0[1])) {
								columnRE.lastIndex = 0;
								if (columnRE.test(row0[2])) {
									// three column file
									nativeColumn = 1;
									unicodeColumn = 2;
									util.print("3 column mode\n");
								}
							}
						} 

						columnRE.lastIndex = 0;
						
						// util.print("len is " + len + "\n");
						for (var i = 0; i < len; i++) {
							row = uf.get(i);
	
							native = [];
							unicode = [];
							
							var nativeResult = columnRE.exec(row[nativeColumn]);
							if (nativeResult !== null) {
								var nativeNum = parseInt(nativeResult[0]);
								var bytes = [];
								
								while (nativeNum) {
									bytes.push(nativeNum & 0xFF);
									nativeNum >>= 8;
								}
								
								for (var j = bytes.length-1; j >= 0; j--) {
									native.push(bytes[j]);
								}
								
								// util.print("native is " + JSON.stringify(native) + "\n");
								
								var uniResult;
								columnRE.lastIndex = 0;
								// util.print("row[nativeColumn] is " + row[nativeColumn] + " and columnRE.exec is " + columnRE.exec(row[unicodeColumn]) + "\n");
								while ((uniResult = columnRE.exec(row[unicodeColumn])) !== null) {
									// util.print("found uni char " + uniResult[0] + "\n");
									var u = parseInt(uniResult[0], 16);
									var uniStr = common.codePointToUTF16(u);
									// push each surrogate separately so that we can
									// decode the trie char by char when charmapping
									// instead of code-point by code-point
									for (var k = 0; k < uniStr.length; k++) {
										unicode.push(uniStr.charAt(k));	
									}
								}
								
								// util.print("unicode is " + JSON.stringify(unicode) + "\n");
							}
							
							/*
							if (native.length <= 0) {
								util.print("native length\n");
							}
							if (native[0] === 0) {
								util.print("native null\n");
							}
							if (!unicode) {
								util.print("not unicode\n");
							} else if (unicode.length <= 0) {
								util.print("unicode zero length\n");
							} else if (unicode[0] === '\u0000') {
								util.print("unicode zero first char. Array is: " + JSON.stringify(unicode) + "\n");
							}
							*/
							if (native.length > 0 && native[0] !== 0 && 
								unicode && unicode.length > 0 && unicode[0] !== "\u0000") {
								
								map.to.add(native, unicode);
								map.from.add(unicode, native);
							} else {
								util.print("skipping bad mapping from " + row[nativeColumn] + " to " + row[unicodeColumn] + "\n");
							}
							//} else {
								//util.print("row " + row + " did not pass the test\n");
								//util.print("uniRE.exec(row[nativeColumn]) was " + JSON.stringify(uniRE.exec(row[nativeColumn])) + "\n");
								//util.print("mapRE.test(row[unicodeColumn]) was " + mapRE.test(row[unicodeColumn]) + "\n");
						    //}
						}
						
						if (!common.isEmpty(map.to)) {
							var m = {
								to: map.to.cleanForm(),
								from: map.from.cleanForm()
							};
							
							if (fs.writeFileSync(toFileName, JSON.stringify(m, undefined, 4), "utf-8") < 0) {
								util.print("Could not write to output file " + toFileName + "\n");
							}
						} else {
							util.print("No data to write for charmap " + toFileName + ". Skipping...\n");
						}
					} else {
						util.print("Output file " + toFileName + " already exists. Will not overwrite.\n");
					}
				} catch (err) {
					util.print("File " + fullpath + " is not readable or does not contain valid unicode mapping data.\n");
					util.print(err + "\n");
				}
			}
		}
	});
}

walk(charmapDir);

ucdWalk(ucdDir);
