/*
 * testrequire.js - test the require function for whatever platform this test 
 * is running on
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

// !dependencies: false

var ilib = require("./../lib/ilib.js");

function testRequireSingleFile() {
	if (!ilib.isDynCode()) {
		// can't test the require function unless you're 
		// in dynamic code loading mode
		return;
	}
	var mod = require("./root/test/testfiles/datefmt2.js");
    assertNotUndefined(mod);
    
    assertEquals("function", typeof(mod));
}

function testRequireDoNotReloadSameFile() {
	if (!ilib.isDynCode()) {
		// can't test the require function unless you're 
		// in dynamic code loading mode
		return;
	}
	assertUndefined(Qwerty);

	var Qwerty = require("./root/test/testfiles/qwerty.js");
	assertNotUndefined(Qwerty);
    
    Qwerty.testproperty = "foo";
    
    Qwerty = undefined;
    
    // should not reload it again because it already loaded it previously
    // so the test property should be in the cache
    Qwerty = require("./root/test/testfiles/qwerty.js");
    
    assertNotUndefined(Qwerty);
    assertEquals("foo", Qwerty.testproperty);
}

function testRequireRunCode1() {
	if (!ilib.isDynCode()) {
		// can't test the require function unless you're 
		// in dynamic code loading mode
		return;
	}
	var Locale2 = require("./root/test/testfiles/locale2.js");
	
    assertNotUndefined(Locale2);

    var locale = new Locale2("de-DE");
    
    assertEquals("de", locale.getLanguage());
    assertEquals("DE", locale.getRegion());
}

function testRequireRunCode2() {
	if (!ilib.isDynCode()) {
		// can't test the require function unless you're 
		// in dynamic code loading mode
		return;
	}
	
	var Locale2 = require("./root/test/testfiles/locale2.js");
    assertNotUndefined(Locale2);
    
    var DateFmt2 = require("./root/test/testfiles/datefmt2.js");
    assertNotUndefined(DateFmt2);
    var df = new DateFmt2({locale: "de-DE"});
    
    var d = new Date(2015, 2, 25, 16, 16, 16);
    assertEquals("25/3/2015", df.format(d));
    
    df = new DateFmt2({locale: "en-US"});
    
    assertEquals("3/25/2015", df.format(d));
}
