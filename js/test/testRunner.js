/*
 * testRunner.js - top level test suite
 * 
 * Copyright © 2017, JEDLSoft
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

var util = require("util");
var fs = require("fs");

var path = require("../lib/Path.js");
var NodeLoader = require("../lib/NodeLoader.js");

var nodeunit = require("nodeunit");
var reporter = nodeunit.reporters.minimal;

var suiteDefinitions = {
	"core": [
	    "util", 
	    "root"
	],
	"standard": [
		"util",
		"root",
		"calendar",
		"date",
		"daterange",
		"durfmt",
		"number",
		"maps",
		"ctype"
	],
	"full": [
		"util",
		"root",
		"calendar",
		"date",
		"daterange",
		"durfmt",
		"number",
		"maps",
		"ctype",
		"strings-ext",
		"phone",
		"units",
		"name",
		"address",
		"collate"
	]
};

// override the possible node environment to make the tests uniform
process.env.TZ = "";
process.env.LANG = "";
process.env.LC_ALL = "";

var assembly = "dynamic";
var compilation = "uncompiled";
var size = "full";
var suite = suiteDefinitions.full;

// Usage: testSuite.js [assembly_style [compilation_style [suite_name_or_collection]]]
if (process.argv.length > 2) {
	if (process.argv.length > 3) {
		if (process.argv.length > 4) {
			if (process.argv.length > 5) {
				set = process.argv[5];
			}
			
			size = process.argv[4];
			if (suiteDefinitions[size]) {
                console.log("Only running set " + size);
                suite = suiteDefinitions[size];
			} else if (suiteDefinitions.full.indexOf(size) > -1) {
                console.log("Only running suite " + size);
                suite = [size];
			} else {
			    if (size !== "all") {
			        console.log("Suite " + size + " is unrecognized. Testing all suites by default.");
			    } else {
			        console.log("Testing all suites.");
			    }
                suite = suiteDefinitions.full;
			}
		}
		compilation = process.argv[3];
		if (compilation !== "uncompiled" && compilation !== "compiled") {
			console.log("Compilation " + compilation + " is unknown. Using 'compiled' by default.");
			compilation = "compiled";
		}
	}
	assembly = process.argv[2];
	if (assembly !== "assembled" && assembly !== "dynamicdata" && assembly !== "dynamic") {
		// assembled: pre-assembled code and locale data together in one file
		// dynamicdata: pre-assembled code, but dynamically loaded locale data
		// dynamic: dynamically loaded code and locale data
		console.log("Assembly " + assembly + " is unknown. Using 'dynamic' by default.");
		compilation = "dynamic";
	}
}

console.log("Running " + compilation + " " + assembly + " suites: " + JSON.stringify(suite));

var suites, ilib;
var modules = {};

if (assembly === "dynamic") {
    console.log("requiring ../lib/ilib.js");
    ilib = require("../lib/ilib.js");

    ilib.setLoaderCallback(NodeLoader(ilib));

    ilib._dyncode = true; // indicate that we are using dynamically loaded code
    ilib._dyndata = true;

    for (var i = 0; i < suite.length; i++) {
        console.log("Adding suite: " + suite[i]);
        suites = require("./" + path.join(suite[i], "nodeunit/testSuiteFiles.js")).files.forEach(function(file) {
            var test = require("./" + path.join(suite[i], "nodeunit", file));
            if (!modules[suite[i]]) modules[suite[i]] = {};
            for (var t in test) {
                modules[suite[i]][t] = test[t];
            }
        });
    }
} else {
    var geval = eval; // execute in the global scope
    
    var fileName = "../output/js/ilib-ut" + ((assembly === "dynamicdata") ? "-dyn" : "") + ((compilation === "compiled") ? "-compiled" : "") + ".js";
    console.log("loading in " + fileName);
    var script = fs.readFileSync(fileName, "utf-8");
    geval(script);
    
    ilib = global["ilib"];
    
    console.log("loading in shim file ilib-unpack.js");
    script = fs.readFileSync("../lib/ilib-unpack.js", "utf-8");
    geval(script);

    if (assembly === "dynamicdata") {
        ilib.setLoaderCallback(NodeLoader(ilib));
    
        ilib._dyncode = false;
        ilib._dyndata = true;
    } else {
        CType._init(true);
        NormString.init();
    
        ilib._dyncode = false;
        ilib._dyndata = false;
    }
    
    global["require"] = function(pathname) {
        console.log("Attempt to load " + pathname);
        throw "Require not available in assembled tests.";
    };
    
    global["normtests"] = require("../test/strings-ext/test/normdata.js")

    for (var i = 0; i < suite.length; i++) {
        console.log("Adding suite: " + suite[i]);
        suites = require("./" + path.join(suite[i], "nodeunit/testSuiteFiles.js")).files;
        for (var j = 0; j < suites.length; j++) {
            var pathname = "./" + path.join(suite[i], "nodeunit", suites[j]);
            // console.log("Loading test file " + pathname);   
            var script = fs.readFileSync(pathname, "utf-8");
            global["module"] = {exports: {}};
            geval(script);
            var test = global["module"].exports;
            if (!modules[suite[i]]) modules[suite[i]] = {};
            for (var t in test) {
                // console.log("Adding test group " + t);
                modules[suite[i]][t] = test[t];
            }
        }
    }
}

reporter.run(modules);