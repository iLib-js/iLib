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

function testRequireSingleFile() {
	if (!ilib.isDynCode()) {
		// can't test the require function unless you're 
		// in dynamic code loading mode
		return;
	}
	var mod = require("./test/testfiles/datefmt2.js");
    
    assertNotUndefined(mod);
    assertEquals("function", typeof(mod));
}

function testRequireSingleFileWithSideEffects() {
	if (!ilib.isDynCode()) {
		// can't test the require function unless you're 
		// in dynamic code loading mode
		return;
	}
    assertUndefined(ilib.Foobar);
    
    require("./test/testfiles/foobar.js");
    
    assertNotUndefined(ilib.Foobar);
}

function testRequireSingleFileDependenciesLoaded() {
	if (!ilib.isDynCode()) {
		// can't test the require function unless you're 
		// in dynamic code loading mode
		return;
	}
   assertUndefined(ilib.Grzwfd);
    
    // datefmt2 depends on locale2 automatically
    var mod = require("./test/testfiles/asdf.js");
    
    assertNotUndefined(ilib.Grzwfd);
}

function testRequireDoNotReloadSameFile() {
	if (!ilib.isDynCode()) {
		// can't test the require function unless you're 
		// in dynamic code loading mode
		return;
	}
	assertUndefined(ilib.Qwerty);
    
	var mod = require("./test/testfiles/qwerty.js");
    
    assertNotUndefined(ilib.Qwerty);
    ilib.Qwerty.testproperty = "foo";
    
    ilib.Qwerty = undefined;
    
    // should not reload it again because it already loaded it previously
    // so the test property should be in the cache
    ilib.Qwerty = require("./test/testfiles/qwerty.js");
    assertNotUndefined(ilib.Qwerty);
    assertEquals("foo", ilib.Qwerty.testproperty);
}

function testRequireRunCode1() {
	if (!ilib.isDynCode()) {
		// can't test the require function unless you're 
		// in dynamic code loading mode
		return;
	}
    var mod = require("./test/testfiles/datefmt2.js");
    assertNotUndefined(mod);

    var locale = new ilib.Locale2("de-DE");
    
    assertEquals("de", locale.getLanguage());
    assertEquals("DE", locale.getRegion());
}

function testRequireRunCode2() {
	if (!ilib.isDynCode()) {
		// can't test the require function unless you're 
		// in dynamic code loading mode
		return;
	}
    var mod = require("./test/testfiles/datefmt2.js");
    assertNotUndefined(mod);
    
    assertNotUndefined(ilib.DateFmt2);
    var df = new ilib.DateFmt2({locale: "de-DE"});
    
    var d = new Date(2015, 2, 25, 16, 16, 16);
    assertEquals("25/3/2015", df.format(d));
    
    df = new ilib.DateFmt2({locale: "en-US"});
    
    assertEquals("3/25/2015", df.format(d));
}
