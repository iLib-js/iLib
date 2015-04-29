/*
 * benchSuite.js - test suite for benchmarking in this directory
 * 
 * Copyright © 2014-2015, JEDLSoft
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

var TestSuite = require("./TestSuiteModule.js");
var ilib = require("./../lib/ilib.js");
var util = require("util");

function newSuite(path, include) {
	var suite = new TestSuite("test/" + path);
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new TestSuite();
    
    var suites = [
        {file: "benresbundle_initial_assembled.js", iterations: 100},
        {file: "benresbundle_initial_dynamic.js", iterations: 100},
		{file: "benresbundle_subsequent_assembled.js", iterations: 1},
		{file: "benresbundle_subsequent_dynamic.js", iterations: 1},
		
        {file: "bendatefmt_initial_assembled.js", iterations: 100},
		{file: "bendatefmt_initial_dynamic.js", iterations: 100},
        {file: "bendatefmt_subsequent_assembled.js", iterations: 1},
		{file: "bendatefmt_subsequent_dynamic.js", iterations: 1},
		
        {file: "benlocinfo_initial_assembled.js", iterations: 100},
		{file: "benlocinfo_initial_dynamic.js", iterations: 100},
        {file: "benlocinfo_subsequent_assembled.js", iterations: 1},
		{file: "benlocinfo_subsequent_dynamic.js", iterations: 1},

        {file: "bentimezone_initial_assembled.js", iterations: 100},
		{file: "bentimezone_initial_dynamic.js", iterations: 100},
        {file: "bentimezone_subsequent_assembled.js", iterations: 1},
		{file: "bentimezone_subsequent_dynamic.js", iterations: 1},

        {file: "benscriptinfo_initial_assembled.js", iterations: 100},
		{file: "benscriptinfo_initial_dynamic.js", iterations: 100},
        {file: "benscriptinfo_subsequent_assembled.js", iterations: 1},
		{file: "benscriptinfo_subsequent_dynamic.js", iterations: 1},

        {file: "bencurinfo_initial_assembled.js", iterations: 100},
		{file: "bencurinfo_initial_dynamic.js", iterations: 100},
        {file: "bencurinfo_subsequent_assembled.js", iterations: 1},
		{file: "bencurinfo_subsequent_dynamic.js", iterations: 1},

        {file: "bennumfmt_initial_assembled.js", iterations: 100},
		{file: "bennumfmt_initial_dynamic.js", iterations: 100},
        {file: "bennumfmt_subsequent_assembled.js", iterations: 1},
		{file: "bennumfmt_subsequent_dynamic.js", iterations: 1},

        {file: "benctype_initial_assembled.js", iterations: 100},
		{file: "benctype_initial_dynamic.js", iterations: 100},
        {file: "benctype_subsequent_assembled.js", iterations: 1},
		{file: "benctype_subsequent_dynamic.js", iterations: 1},

        {file: "benwholefile_assembled.js", iterations: 100},
		{file: "benwholefile_dynamic.js", iterations: 100}
	];

    suites.forEach(function (path) {
    	var ns = newSuite(path.file);
    	ns.include("ilib-ut-compiled.js");
    	s.addSuite(ns, path.iterations);
    });
    
    return s;
}
