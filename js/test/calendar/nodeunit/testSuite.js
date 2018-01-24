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
var reporter = nodeunit.reporters.minimal;
var modules = {};
var suites = [
    "testastro.js",
    "testcalasync.js",
    "testcalendar.js",
    "testcoptic.js",
    "testcopticdate.js",
    "testethiopic.js",
    "testethiopicdate.js",
    "testgregorian.js",
    "testgregoriandate.js",
    "testgregratadie.js",
    "testhan.js",
    "testhandate.js",
    "testhebrew.js",
    "testhebrewdate.js",
    "testislamic.js",
    "testislamicdate.js",
    "testjulian.js",
    "testjuliandate.js",
    "testjulianday.js",
    "testpersian.js",
    "testpersianastro.js",
    "testpersiandate.js",
    "testpersiandateastro.js",
    "testthaisolar.js",
    "testthaisolardate.js",
    "testtimezone.js",
];

var ilib = require("../../../lib/ilib-node.js");

suites.forEach(function (path) {
    var test = require("./" + path);
    for (var suite in test) {
        modules[suite] = test[suite];
    }
});

reporter.run(modules);