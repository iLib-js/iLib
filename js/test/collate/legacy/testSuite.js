/*
 * testSuite.js - test suite for the collation tests
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

function newSuite(path, include) {
	var suite = new TestSuite("collate/legacy/" + path);
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new TestSuite();
    
    var suites = [
  		"testcollation_cs.js",
		"testcollation_da.js",
		"testcollation_de.js",
		"testcollation_el.js",
		"testcollation_es.js",
		"testcollation_et.js",
		"testcollation_fi.js",
		"testcollation_fo.js",
		"testcollation_general.js",
		"testcollation_he.js",
		"testcollation_ja.js",
		"testcollation.js",
		"testcollation_ko.js",
		"testcollation_lt.js",
		"testcollation_lv.js",
		"testcollation_nb.js",
		"testcollation_nn.js",
		"testcollation_no.js",
		"testcollation_ru.js",
		"testcollation_sv.js",
		"testcollation_tr.js",
		"testcollation_zh-Hans.js",
		"testcollation_zh-Hant.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}

