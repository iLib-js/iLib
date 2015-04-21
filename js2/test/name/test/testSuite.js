/*
 * testSuiteNames.js - test suite for the names tests
 * 
 * Copyright © 2014, JEDLSoft
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
	var suite = new TestSuite("name/test/" + path);
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new TestSuite();
    
    var suites = [
	    "testname.js",
	    "testnamefmt.js",
	    "testname_ar.js",
		"testname_bg.js",
		"testname_bs.js",
		"testname_cs.js",
		"testname_de.js",
		"testname_el.js",
		"testname_en.js",
		"testname_es.js",
		"testname_et.js",
		"testname_fa.js",
		"testname_fi.js",
		"testnamefmt.js",
		"testname_fr.js",
		"testname_ga.js",
		"testname_he.js",
		"testname_hi.js",
		"testname_hr.js",
		"testname_hu.js",	
		"testname_id.js",
		"testname_it.js",
		"testname_ja.js",
		"testname_kk.js",
		"testname_bn.js",
		"testname_kn.js",
		"testname_mr.js",
		"testname_ml.js",
		"testname_ta.js",
		"testname_te.js",
        "testname_gu.js",
		"testname_ur.js",
		"testname_ko.js",
		"testname_ku_Arab.js",
		"testname_lt.js",
		"testname_lv.js",
		"testname_mk.js",
		"testname_mn_Cyrl.js",
		"testname_ms.js",
		"testname_nb.js",
		"testname_nl.js",
		"testname_pl.js",	
		"testname_pt.js",
		"testname_ro.js",
		"testname_ru.js",
		"testname_sk.js",
		"testname_sl.js",
		"testname_sq.js",
		"testname_sr.js",
		"testname_sv.js",
		"testname_tr.js",
		"testname_uk.js",
		"testname_uz_Cyrl.js",
		"testname_uz_Latn.js",
		"testname_vi.js",
		"testname_zh_Hans.js",
		"testname_zh_Hant.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}

