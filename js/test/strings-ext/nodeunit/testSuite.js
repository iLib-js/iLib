/*
* testSuite.js - test suite for this directory
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

var nodeunit = require("nodeunit");
var assert = require("../../test/assertSupplement.js");
var reporter = nodeunit.reporters.minimal;
var modules = {};
var suites = [
    "testglyphstr.js",
    "testlistfmt.js",
    "testlistfmt_ar.js",
    "testlistfmt_bs.js",
    "testlistfmt_de.js",
    "testlistfmt_en.js",
    "testlistfmt_el.js",
    "testlistfmt_es.js",
    "testlistfmt_fa.js",
    "testlistfmt_fr.js",
    "testlistfmt_hr.js",
    "testlistfmt_it.js",
    "testlistfmt_ms.js",
    "testlistfmt_nl.js",
    "testlistfmt_ja_JP.js",
    "testlistfmt_pt.js",
    "testlistfmt_ru.js",
    "testlistfmt_sv.js",
    "testlistfmt_sq.js",
    "testlistfmt_tr.js",
    "testlistfmt_zh.js",
    "testnorm.js"
];

suites.forEach(function (path) {
    var test = require("./" + path);
    for (var suite in test) {
        modules[suite] = test[suite];
    }
});

reporter.run(modules);