/*
 * testSuiteAsync.js - test suite for this directory
 *
 * Copyright © 2018, JEDLSoft
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

var nodeunit = require("nodeunit");
require("../test/assertExtras.js");
var reporter = nodeunit.reporters.minimal;
var modules = {};
var suites = require("./testSuiteFilesAsync.js").files;

var ilib = require("../../lib/ilib-node-async.js");

suites.forEach(function (path) {
    var test = require("./" + path);
    for (var suite in test) {
        modules[suite] = test[suite];
    }
});

reporter.run(modules);
