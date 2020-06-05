/*
 * genccharmap.js - ilib tool to generate the charset mappings from the Unicode 
 * data files
 * 
 * Copyright © 2014, 2020 JEDLSoft
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
var CharmapFile = require('./charmapfile.js').CharmapFile;
var path = require('path');

function usage() {
	console.log("Usage: gencharmap [-h] path_to_linux_charmaps path_to_UCD_mappings charsetaliases.json [toDir]\n" +
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
			"  directory to output the normalization json files. Default: <currentdir>/charmaps.");
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
	console.error('Error: not enough arguments');
	usage();
}

charmapDir = process.argv[2];
ucdDir = process.argv[3];
aliasesFile = process.argv[4];

if (process.argv.length > 5) {
	toDir = process.argv[5];
}

toDir = path.join(toDir, "charmaps");

console.log("gencharmap - generate charmap mapping data.\n" +
		"Copyright (c) 2014 JEDLSoft\n");

if (!fs.existsSync(charmapDir)) {
	console.error("Could not access dir " + charmapDir);
	usage();
}

if (!fs.existsSync(ucdDir)) {
	console.error("Could not access UCD mappings dir " + ucdDir);
	usage();
}

if (!fs.existsSync(aliasesFile)) {
	console.error("Could not access aliases file " + aliasesFile);
	usage();
}

if (!fs.existsSync(toDir)) {
	if (!common.makeDirs(toDir)) {
		console.error("Could not access target directory " + toDir);
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
		// console.log("fullpath is " + fullpath);
		var stat = fs.statSync(fullpath);
		if (stat && stat.isDirectory()) {
			walk(fullpath);
		} else {
			//if (fullpath.match(/.gz$/)) {
				console.log("found charmap file " + fullpath);
				try {
					var fileName = aliases[file.replace(/[-_:\+\.\(\)]/g, '').toUpperCase()] || file;
					var toFileName = path.join(toDir, fileName + ".json");
					// console.log("Writing results to file " + toFileName);
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
					
					// console.log("len is " + len);
					for (var i = 0; i < len; i++) {
						row = uf.get(i);

						native = [];
						unicode = [];
						reversible = true;
						
						//console.log("row is " + JSON.stringify(row));
						if (three) {
							//console.log("3 column mode");
							
							// 3 column mode <symbolicname> <native> <unicode>
							var nativeByteStrings = row[1].split(/\/x/g);
							for (var j = 0; j < nativeByteStrings.length; j++) {
								if (nativeByteStrings[j].length > 0) {
									native.push(parseInt(nativeByteStrings[j], 16));
								}
							}
							//console.log("native is " + JSON.stringify(native));
							
							if (native[0] === 0) {
								var symbolicName = row[0].substring(1, row[0].length-1);
								//console.log("native is the PCS symbolic name " + symbolicName);
								
								if (typeof(portable_charset[symbolicName]) !== 'undefined') {
									native = [ portable_charset[symbolicName].charCodeAt(0) ];
									//console.log("maps to: " + native[native.length-1]);
								//} else {
									//console.log("Unknown symbolic name: " + row[0]);
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
							//console.log("3 column unicode is " + JSON.stringify(unicode) + " and uniChars is " + JSON.stringify(uniChars));
						} else {
							//console.log("2 column mode");
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
								//console.log("uniResult[2] is " + uniResult[2]);
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
								//console.log("unicode is " + JSON.stringify(unicode));
								//console.log("2 column unicode is " + JSON.stringify(unicode) + " and uniChars is " + JSON.stringify(uniChars));
							//} else {
								//console.log("no match");
							}
						}
						
						if (native.length <= 0) {
							console.log("native length");
						}
						if (native[0] === 0) {
							console.log("native null");
						}
						if (!unicode) {
							console.log("not unicode");
						} else if (unicode.length <= 0) {
							console.log("unicode zero length");
						} else if (unicode[0] === '\u0000') {
							console.log("unicode zero first char. Array is: " + JSON.stringify(unicode));
						}
						if (native.length > 0 && native[0] !== 0 && 
							unicode && unicode.length > 0 && unicode[0] !== "\u0000") {
							
							map.to.add(native, unicode);
							
							if (reversible) {
								map.from.add(unicode, native);
							}
						} else {
							console.log("skipping bad mapping from " + row[0] + " to " + row[1]);
						}
						//} else {
							//console.log("row " + row + " did not pass the test");
							//console.log("uniRE.exec(row[0]) was " + JSON.stringify(uniRE.exec(row[0])));
							//console.log("mapRE.test(row[1]) was " + mapRE.test(row[1]));
					    //}
					}
					
					if (!common.isEmpty(map.to)) {
						var m = {
							to: map.to.cleanForm(),
							from: map.from.cleanForm()
						};
						
						if (fs.writeFileSync(toFileName, JSON.stringify(m, undefined, 4), "utf-8") < 0) {
							console.log("Could not write to output file " + toFileName);
						}
					} else {
						console.log("No data to write for charmap " + toFileName + ". Skipping...");
					}
				} catch (err) {
					console.log("File " + fullpath + " is not readable or does not contain valid unicode mapping data.");
					console.log(err);
				}
			//}
		}
	});
}

function ucdWalk(dir) {
	var list = fs.readdirSync(dir);
	list.forEach(function (file) {
		var fullpath = dir + '/' + file;
		// console.log("fullpath is " + fullpath);
		var stat = fs.statSync(fullpath);
		if (stat && stat.isDirectory()) {
			ucdWalk(fullpath);
		} else {
			if (fullpath.match(/.TXT$/)) {
				console.log("found charmap file " + fullpath);
				try {
					var baseName = file.replace(/.TXT$/, '');
					var fileName = aliases[baseName.replace(/[-_,:\+\.\(\)]/g, '').toUpperCase()] || baseName;
					var toFileName = path.join(toDir, fileName + ".json");
					console.log("Output file is " + toFileName);
					
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
									console.log("3 column mode");
								}
							}
						} 

						columnRE.lastIndex = 0;
						
						// console.log("len is " + len);
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
								
								// console.log("native is " + JSON.stringify(native));
								
								var uniResult;
								columnRE.lastIndex = 0;
								// console.log("row[nativeColumn] is " + row[nativeColumn] + " and columnRE.exec is " + columnRE.exec(row[unicodeColumn]));
								while ((uniResult = columnRE.exec(row[unicodeColumn])) !== null) {
									// console.log("found uni char " + uniResult[0]);
									var u = parseInt(uniResult[0], 16);
									var uniStr = common.codePointToUTF16(u);
									// push each surrogate separately so that we can
									// decode the trie char by char when charmapping
									// instead of code-point by code-point
									for (var k = 0; k < uniStr.length; k++) {
										unicode.push(uniStr.charAt(k));	
									}
								}
								
								// console.log("unicode is " + JSON.stringify(unicode));
							}
							
							/*
							if (native.length <= 0) {
								console.log("native length");
							}
							if (native[0] === 0) {
								console.log("native null");
							}
							if (!unicode) {
								console.log("not unicode");
							} else if (unicode.length <= 0) {
								console.log("unicode zero length");
							} else if (unicode[0] === '\u0000') {
								console.log("unicode zero first char. Array is: " + JSON.stringify(unicode));
							}
							*/
							if (native.length > 0 && native[0] !== 0 && 
								unicode && unicode.length > 0 && unicode[0] !== "\u0000") {
								
								map.to.add(native, unicode);
								map.from.add(unicode, native);
							} else {
								console.log("skipping bad mapping from " + row[nativeColumn] + " to " + row[unicodeColumn]);
							}
							//} else {
								//console.log("row " + row + " did not pass the test");
								//console.log("uniRE.exec(row[nativeColumn]) was " + JSON.stringify(uniRE.exec(row[nativeColumn])));
								//console.log("mapRE.test(row[unicodeColumn]) was " + mapRE.test(row[unicodeColumn]));
						    //}
						}
						
						if (!common.isEmpty(map.to)) {
							var m = {
								to: map.to.cleanForm(),
								from: map.from.cleanForm()
							};
							
							if (fs.writeFileSync(toFileName, JSON.stringify(m, undefined, 4), "utf-8") < 0) {
								console.log("Could not write to output file " + toFileName);
							}
						} else {
							console.log("No data to write for charmap " + toFileName + ". Skipping...");
						}
					} else {
						console.log("Output file " + toFileName + " already exists. Will not overwrite.");
					}
				} catch (err) {
					console.log("File " + fullpath + " is not readable or does not contain valid unicode mapping data.");
					console.log(err);
				}
			}
		}
	});
}

walk(charmapDir);

ucdWalk(ucdDir);
