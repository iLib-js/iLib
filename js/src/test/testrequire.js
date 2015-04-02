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

function testLoaderRequireSingleFile() {
	var mod = require("./testfiles/datefmt2.js");
    
    assertNotUndefined(mod);
    assertNotUndefined(mod.DateFmt2);
}

function testLoaderRequireSingleFileWithSideEffects() {
    ilib.DateFmt2 = undefined;
    
    assertUndefined(ilib.DateFmt2);
    
    require("./testfiles/datefmt2.js");
    
    assertNotUndefined(ilib.DateFmt2);
}

function testLoaderRequireSingleFileDependenciesLoaded() {
    ilib.Locale2 = undefined;
    
    assertUndefined(ilib.Locale2);
    
    // datefmt2 depends on locale2 automatically
    var mod = require("./testfiles/datefmt2.js");
    
    assertNotUndefined(ilib.Locale2);
}

function testLoaderRequireMultipleFiles() {
    ilib.DateFmt2 = undefined;
    ilib.Locale2 = undefined;
    
    var mod = require([
        "./testfiles/locale3.js",
    	"./testfiles/datefmt2.js"
    ]);
    
    assertNotUndefined(mod);
    assertNotUndefined(mod.DateFmt2);
    assertNotUndefined(mod.Locale2);
    
    assertEquals("This property came from ilib.DateFmt2", ilib.x);
    assertEquals("This property came from the alternate ilib.Locale2", ilib.z);
    
    assertUndefined(ilib.y); // should not load locale2.js because the dependency is already satisfied by locale3.js
}

function testLoaderRequireDoNotReloadSameFile() {
    ilib.DateFmt2 = undefined;
    
    var mod = require("./testfiles/datefmt2.js");
    
    assertNotUndefined(ilib.DateFmt2);
    ilib.DateFmt2.testproperty = "foo";
    
    ilib.DateFmt2 = undefined;
    
    // should not reload it again because it already loaded it previously
    // so the test property should be in the cache
    var mod = require("./testfiles/datefmt2.js");
    assertUndefined(ilib.DateFmt2);
    assertEquals("foo", ilib.DateFmt2.testproperty);
}

function testLoaderRunCode1() {
    require("./testfiles/datefmt2.js");

    var locale = new ilib.Locale2("de-DE");
    
    assertEquals("de", locale.getLanguage());
    assertEquals("DE", locale.getRegion());
}

function testLoaderRunCode2() {
    require("./testfiles/datefmt2.js");

    var df = new ilib.DateFmt2({locale: "de-DE"});
    
    var d = new Date(2015, 2, 25, 16, 16, 16);
    assertEquals("25/3/2015", df.format(d));
    
    df = new ilib.DateFmt2({locale: "en-US"});
    
    assertEquals("3/25/2015", df.format(d));
}
