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
	var suite = new TestSuite("date/legacy/" + path);
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new TestSuite();
    
    var suites = [
		"testdatefmt_pa_IN.js",
		"testdatefmt_pl_PL.js",
		"testdatefmt_pt_BR.js",
		"testdatefmt_ro_RO.js",
		"testdatefmt_ru_RU.js",
		"testdatefmt_sk_SK.js",
		"testdatefmt_sl_SI.js",
		"testdatefmt_sq_AL.js",
		"testdatefmt_sr_Latn_RS.js",
		"testdatefmt_sv_SE.js",
		"testdatefmt_ta_IN.js",
		"testdatefmt_te_IN.js",
		"testdatefmt_th_TH.js",
		"testdatefmt_tr_TR.js",
		"testdatefmt_uk_UA.js",
		"testdatefmt_ur_IN.js",
		"testdatefmt_uz_Cyrl_UZ.js",
		"testdatefmt_uz_Latn_UZ.js",
		"testdatefmt_vi_VN.js",
		"testdatefmt_zh_CN.js",
		"testdatefmt_zh_Hant_HK.js",
		"testdatefmt_zh_Hant_TW.js",
		"testdate.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}

