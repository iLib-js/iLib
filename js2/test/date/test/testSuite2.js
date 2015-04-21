/*
 * testSuiteDates.js - test suite for the date tests
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

var TestSuite = require("./TestSuiteModule.js");

function newSuite(path, include) {
	var suite = new TestSuite("date/test/" + path);
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new TestSuite();
    
    var suites = [
		"testdatefmt_ga_IE.js",
		"testdatefmt_gu_IN.js",
		"testdatefmt_ha_Latn_NG.js",
		"testdatefmt_he_IL.js",
		"testdatefmt_hi_IN.js",
		"testdatefmt_hr_HR.js",
		"testdatefmt_id_ID.js",
		"testdatefmt_it_IT.js",
		"testdatefmt_ja_JP.js",
		"testdatefmt.js",
		"testdatefmt_kk_Cyrl_KZ.js",
		"testdatefmt_kn_IN.js",
		"testdatefmt_ko_KR.js",
		//"testdatefmt_ku_Arab_IQ.js",
		"testdatefmt_lt_LT.js",
		"testdatefmt_lv_LV.js",
		"testdatefmt_mk_MK.js",
		"testdatefmt_mn_Cyrl_MN.js",
		"testdatefmt_ml_IN.js",
		"testdatefmt_mr_IN.js",
		"testdatefmt_ms_MY.js",
		"testdatefmt_nb_NO.js",
		"testdatefmt_nl_NL.js",
		"testdatefmt_or_IN.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}

