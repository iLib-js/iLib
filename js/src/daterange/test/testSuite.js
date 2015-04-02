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

var cli = require('./runner.js');

function newSuite(path, include) {
	var suite = new cli.TestSuite("daterange/test/" + path);
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new cli.TestSuite();
    
    var suites = [
		"testdatefmtrange_af_ZA.js",
		"testdatefmtrange_af_NA.js",
        "testdatefmtrange_am_ET.js",                  
		"testdatefmtrange_ar_SA.js",
		"testdatefmtrange_as_IN.js",
		"testdatefmtrange_bg_BG.js",
		"testdatefmtrange_bn_IN.js",
		"testdatefmtrange_bs_Latn_BA.js",
		"testdatefmtrange_cs_CZ.js",
		"testdatefmtrange_da_DK.js",
		"testdatefmtrange_de_DE.js",
		"testdatefmtrange_el_GR.js",
		"testdatefmtrange_en_GB.js",
		"testdatefmtrange_en_SG.js",
		"testdatefmtrange_en_US.js",
		"testdatefmtrange_es_CO.js",
		"testdatefmtrange_es_ES.js",
		"testdatefmtrange_es_UY.js",
		"testdatefmtrange_es_VE.js",
		"testdatefmtrange_et_EE.js",
		"testdatefmtrange_fa_IR.js",
		"testdatefmtrange_fi_FI.js",
		"testdatefmtrange_fr_CA.js",
		"testdatefmtrange_fr_FR.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}

