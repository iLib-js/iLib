/* 
 * mkstubs.js - ilib tool to extract stubs for 
 *
 * Copyright © 2015, JEDLSoft
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
var common = require('../cldr/common');
var path = require('path');

function usage() {
	util.print("Usage: mkstubs.js [-h] [assembled_source_file [output_file]]\n" +
		"Create an dynamic-load stub file out of the existing assembled source file.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"assembled_source_file\n" +
		'  File to scan. Default: "ilib-dyn.js"\n' +
		"output_file\n" +
		'  File to put output. Default: "ilib-stubs.js"\n');
	process.exit(1);
}


var sourcefile = "ilib-dyn.js";
var outputfile = "ilib-stubs.js";

if (process.argv.length > 2) {
	if (process.argv[2] == '-h' || process.argv[2] == '-H' || process.argv[2] == '--help') {
		usage();
	}
	sourcefile = process.argv[2];
	if (process.argv.length > 3) {
		outputfile = process.argv[3];
	}	
}

if (!fs.existsSync(sourcefile)) {
	util.print("Could not access source file " + sourcefile + "\n");
	usage();
}

util.print("mkstubs - make a dynamic-load stubs file\n");
util.print("source file: " + sourcefile + "\n");

var text = fs.readFileSync(sourcefile, "utf-8");
var lines = text.split(/\n/g);

var fileNameRegex = /^\/\*< ([^\*]*) \*\//;
var functionRegex = /^(ilib\.\S*)\s+=\s+function([^{]*) {$/;
var staticRegex = /\* @static/;
var classRegex = /\* @class/;

var i, currentFile, output, isStatic = true;

function outputClass(name, signature, filename) {
	output += name + "=function" + signature + '{require("./' + filename + '");return new ' + name + signature + ";};" + name + ".stub=true;\n";
}

function outputStatic(name, signature, filename) {
	output += name + "=function" + signature + '{require("./' + filename + '");return ' + name + signature + ";};" + name + ".stub=true;\n";
}

output = 
	"/* This is a generated file. DO NOT EDIT, as your changes will be lost. */\n" +
	"/* Instead, fix the code in mkstubs.js which generated this file.       */\n" +
	'var ilib = require("./ilibglobal.js");\n' +
	'ilib.CType = {stub:true}; ilib._roundFnc = {stub:true};\n';

for (i = 0; i < lines.length; i++) {
	var result = fileNameRegex.exec(lines[i]);
	if (result !== null) {
		currentFile = result[1];
	} else if (staticRegex.test(lines[i])) {
		isStatic = true;
	} else if (classRegex.test(lines[i])) {
		isStatic = false;
	} else if (currentFile !== "ilibglobal.js" && lines[i].indexOf(".prototype") === -1) {
		result = functionRegex.exec(lines[i]);
		if (result != null) {
			if (isStatic) {
				outputStatic(result[1], result[2], currentFile);
			} else {
				outputClass(result[1], result[2], currentFile);
			}
			isStatic = true;
		}
	}
}

output += "module.exports = ilib;\n";

fs.writeFileSync(outputfile, output, "utf-8");
util.print("Output written to " + outputfile + "\n");