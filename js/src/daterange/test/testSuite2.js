/*
 * testSuiteDates.js - test suite for the date tests
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

var cli = require('../testcli/runner.js');

function newSuite(path, include) {
	var suite = new cli.TestSuite("daterange/test/" + path);
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new cli.TestSuite();
    
    var suites = [
		"testdatefmtrange_ga_IE.js",
		"testdatefmtrange_gu_IN.js",
		"testdatefmtrange_ha_Latn_NE.js",
		"testdatefmtrange_he_IL.js",
		"testdatefmtrange_hi_IN.js",
		"testdatefmtrange_hr_HR.js",
		"testdatefmtrange_hu_HU.js",
		"testdatefmtrange_id_ID.js",
		"testdatefmtrange_it_IT.js",
		"testdatefmtrange_ja_JP.js",
		"testdatefmtrange.js",
		"testdatefmtrange_kk_Cyrl_KZ.js",
		"testdatefmtrange_kn_IN.js",
		"testdatefmtrange_ko_KR.js",
		//"testdatefmtrange_ku_Arab_IQ.js",
		"testdatefmtrange_lt_LT.js",
		"testdatefmtrange_lv_LV.js",
		"testdatefmtrange_mk_MK.js",
		"testdatefmtrange_ml_IN.js",
		"testdatefmtrange_mn_Cyrl_MN.js",
		"testdatefmtrange_mr_IN.js",
		"testdatefmtrange_ms_MY.js",
		"testdatefmtrange_nb_NO.js",
		"testdatefmtrange_nl_NL.js",
		"testdatefmtrange_or_IN.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}

