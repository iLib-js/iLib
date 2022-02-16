/*
 * testRunner.js - top level test suite
 * 
 * Copyright © 2017-2019, 2022 JEDLSoft
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
var AsyncNodeLoader = require("../lib/AsyncNodeLoader.js");

var nodeunit = require("nodeunit");
require("./test/assertExtras.js");

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
process.env.TZ = "Etc/UTC";
process.env.LANG = "";
process.env.LC_ALL = "";

var assembly = "dynamic";
var compilation = "uncompiled";
var size = "full";
var suite = suiteDefinitions.full;
var sync = true;
var target = "node";
var reporter;

if (process.argv.length >= 2 &&
    (process.argv[2] === "help" ||
     process.argv[2] === "-h" ||
     process.argv[2] === "--help")) {
    console.log("Usage: testRunner.js [assembly_style [compilation_style [suite_name_or_collection [sync|async]]]]");
    process.exit(0);
}

// Usage: testSuite.js [assembly_style [compilation_style [suite_name_or_collection [sync|async]]]]
if (process.argv.length > 2) {
	if (process.argv.length > 3) {
		if (process.argv.length > 4) {
			if (process.argv.length > 5) {
			    sync = (process.argv[5] !== "async");
			}
			
			size = process.argv[4];
			if (suiteDefinitions[size]) {
                console.log("Only running set " + size);
                suite = suiteDefinitions[size];
                reporter = nodeunit.reporters.minimal;
			} else if (suiteDefinitions.full.indexOf(size) > -1) {
                console.log("Only running suite " + size);
                suite = [size];
                reporter = nodeunit.reporters["default"];
			} else {
			    if (size !== "all") {
			        console.log("Suite " + size + " is unrecognized. Testing all suites by default.");
			    } else {
			        console.log("Testing all suites.");
			    }
                suite = suiteDefinitions.full;
                reporter = nodeunit.reporters.minimal;
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
		assembly = "dynamic";
	}
} else {
    console.log('Usage: testRunner.js [assembled|dynamicdata|dynamic [compiled|uncompiled [suite_name_or_collection [sync|async]]]]');
    process.exit(1);
}

console.log("Running " + compilation + " " + assembly + " " + (sync ? "sync" : "async") + " suites: " + JSON.stringify(suite));
var geval = eval; // cause it to execute in the global scope

if (assembly === "dynamic") {
    console.log("requiring ../lib/ilib.js");
    var ilib = require("../lib/ilib.js");

    ilib.setLoaderCallback(sync ? NodeLoader(ilib) : AsyncNodeLoader(ilib));

    ilib._dyncode = true; // indicate that we are using dynamically loaded code
    ilib._dyndata = true;
} else {
    var dirName = ["ut", assembly, compilation, target].join("-");
    var urlPath = path.join('../output/js', dirName);
    
    fileName = path.join(urlPath, "ilib-ut" + ((assembly === "dynamicdata") ? "-dyn" : "") + ((compilation === "compiled") ? "-compiled" : "") + ".js");
    console.log("loading in " + fileName);
    var script = fs.readFileSync(fileName, "utf-8");
    geval(script);

    if (assembly === "dynamicdata") {
        global.ilib.setLoaderCallback(sync ? NodeLoader(ilib) : AsyncNodeLoader(ilib));
    
        global.ilib._dyncode = false;
        global.ilib._dyndata = true;
        global.require = require;
    } else {
        if (suite.indexOf("ctype") > -1) {
            global.CType._init(true);
        }
        if (suite.indexOf("strings-ext") > -1) {
            global.NormString.init();
        }
        
        global.ilib._dyncode = false;
        global.ilib._dyndata = false;
    }
    
    if (suite.indexOf("strings-ext") > -1) {
        // special case for massive test data that we should only load if we need it
        script = fs.readFileSync("strings-ext/normdata.js", "utf-8");
        geval(script);
    }
}

var suites;
var modules = {};

for (var i = 0; i < suite.length; i++) {
    console.log("Adding suite: " + suite[i]);
    var suiteFile = sync ? "testSuiteFiles.js" : "testSuiteFilesAsync.js";
    var suiteFilesPath = path.join(suite[i], suiteFile);
    if (fs.existsSync(suiteFilesPath)) {
        suites = require("./" + suiteFilesPath).files.forEach(function(file) {
            var subtest, filepath = path.join(suite[i], file);
            if (!modules[suite[i]]) modules[suite[i]] = {};
            if (assembly === "dynamic") {
                subtest = require("./" + filepath);
            } else {
                global.module = { exports: {} };
                // console.log("reading " + filepath);
                var test = fs.readFileSync(filepath, "utf-8");
                geval(test);
                subtest = global.module.exports;
            }
            if (subtest) {
                for (var t in subtest) {
                    modules[suite[i]][t] = subtest[t];
                }
            }
        });
    }
}

reporter.run(modules, undefined, function(err) {
    process.exitCode = err ? 1 : 0;
});