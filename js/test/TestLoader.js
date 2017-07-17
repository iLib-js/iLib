/* jshint node: true */
/*
 * testLoader.js - return ilib appropriate for the environment
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

var path = require("path");
var fs = require("fs");

var nodeunit = require("nodeunit");
var reporter = nodeunit.reporters.minimal;

var NodeLoader = require("../lib/NodeLoader.js");

module.exports = function init(dir, assembly, compilation) {
    var fileName = "../output/js/ilib-ut" + ((assembly === "dynamicdata") ? "-dyn" : "") + ((compilation === "compiled") ? "-compiled" : "") + ".js";
    
    var suites;
    
    var script = fs.readFileSync(fileName, "utf-8");
    eval(script);

    switch (assembly) {
    default:
    case "dynamic":
        ilib.setLoaderCallback(NodeLoader(ilib));

        ilib._dyncode = true; // indicate that we are using dynamically loaded code
        ilib._dyndata = true;
        break;
    case "dynamicdata": 
        ilib.setLoaderCallback(NodeLoader(ilib));

        ilib._dyncode = false;
        ilib._dyndata = true;
        break;
    case "assembled":
        CType._init(true);
        NormString.init();

        ilib._dyncode = false;
        ilib._dyndata = false;
        break;
    }

    suites = require("./" + path.join(dir, "nodeunit/testSuiteFiles.js")).files.map(function(file) {
        return path.join(dir, "nodeunit", file);
    });

    console.log("Running test files: " + JSON.stringify(suites));
    
    var modules = {};

    suites.forEach(function (path) {
        var test = require("./" + path);
        for (var suite in test) {
            modules[suite] = test[suite];
        }
    });

    reporter.run(modules);
};