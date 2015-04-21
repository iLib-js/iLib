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

var TestSuite = require("./TestSuiteModule.js");

function newSuite(path, include) {
	var suite = new TestSuite("daterange/test/" + path);
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new TestSuite();
    
    var suites = [
		"testdatefmtrange_pa_IN.js",
		"testdatefmtrange_pl_PL.js",
		"testdatefmtrange_pt_BR.js",
		"testdatefmtrange_pt_PT.js",
		"testdatefmtrange_ro_RO.js",
		"testdatefmtrange_ru_RU.js",
		"testdatefmtrange_sk_SK.js",
		"testdatefmtrange_sl_SI.js",
		"testdatefmtrange_sq_AL.js",
		"testdatefmtrange_sr_Latn_RS.js",
		"testdatefmtrange_sv_SE.js",
		"testdatefmtrange_ta_IN.js",
		"testdatefmtrange_te_IN.js",
		"testdatefmtrange_th_TH.js",
		"testdatefmtrange_tr_TR.js",
		"testdatefmtrange_uk_UA.js",
		"testdatefmtrange_ur_IN.js",
		"testdatefmtrange_uz_Cyrl_UZ.js",
		"testdatefmtrange_uz_Latn_UZ.js",
		"testdatefmtrange_vi_VN.js",
		"testdatefmtrange_zh_Hans_CN.js",
		"testdatefmtrange_zh_Hant_HK.js",
		"testdatefmtrange_zh_Hant_TW.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}

