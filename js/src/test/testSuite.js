/*
 * testSuite.js - test suite for this directory
 * 
 * Copyright © 2013, JEDLSoft
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
	var suite = new cli.TestSuite("test/" + path);
	suite.include(include);
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new cli.TestSuite();
    
    var suites = [
	    "testcalendar.js",
	    "testcurrency.js",
	    "testdatefmt_de_DE.js",
	    "testdatefmt_en_US.js",
	    "testdatefmt_en_CA.js",
	    "testdatefmt_en_GB.js",
	    "testdatefmt_en_IN.js",
		"testdatefmt_es_ES.js",
	    "testdatefmt_fr_FR.js",
		"testdatefmt_fr_CA.js",
	    "testdatefmt.js",
	    "testdatefmt_it_IT.js",
	    "testdatefmt_id_ID.js",
	    "testdatefmt_ja_JP.js",
	    "testdatefmt_ko_KR.js",
	    "testdatefmt_pt_BR.js",
	    "testdatefmt_ru_RU.js",
	    "testdatefmt_zh_CN.js",
	    "testdatefmt_es_CO.js",
	    "testdatefmt_nl_NL.js",
	    "testdatefmt_hi_IN.js",
	    "testdatefmt_pl_PL.js",
	    "testdate.js",
	    "testjulianday.js",
	    "testlocale.js",
	    "testlocaleinfo.js",
	    "testnumfmt.js",
	    "testresources.js",
	    "teststrings.js",
	    "testtimezone.js",
	    "testdatefmtrange.js",
	    "testdatefmtrange_en_US.js",
	    "testdatefmtrange_de_DE.js",
	    "testdatefmtrange_ja_JP.js",
	    "testdatefmtrange_fr_FR.js",
	    "testname.js",
	    "testnamefmt.js",
	    "testctype.js",
	    "testdurfmt.js",
	    "testglobal.js",
	    "testscriptinfo.js",
	    "testcollation.js",
	    "testname.js",
	    "testnamefmt.js",
	    "testname_de.js",
	    "testname_en.js",
	    "testname_es.js",
	    "testname_nl.js",
	    "testname_zh_CN.js",
	    "testaddress.js",
	    //"testaddress_AT.js",
	    "testaddress_AU.js",
	    // "testaddress_BE.js",
	    "testaddress_CA.js",
	    //"testaddress_CH.js",
	    "testaddress_CN.js",
	    "testaddress_DE.js",
	    "testaddress_ES.js",
	    "testaddress_FR.js",
	    "testaddress_GB.js",
	    "testaddress_HK.js",
	    "testaddress_IE.js",
	    "testaddress_IT.js",
	    //"testaddress_LU.js",
	    "testaddress_MO.js",
	    "testaddress_MX.js",
	    "testaddress_NL.js",
	    "testaddress_NZ.js",
	    "testaddress_SG.js",
	    "testaddress_TW.js"
	];

    // uncompiled
    suites.forEach(function (path) {
    	s.addSuite(newSuite(path, "ilib-ut.js"));
    });
    
    // compiled
    suites.forEach(function (path) {
    	s.addSuite(newSuite(path, "ilib-ut-compiled.js"));
    });
    
    return s;
}
