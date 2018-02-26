/*
 * testrequire.js - test the require function for whatever platform this test 
 * is running on
 * 
 * Copyright © 2015, 2017-2018, JEDLSoft
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

if (typeof(Path) === "undefined") {
    var Path = require("../../../lib/Path.js");
}

// make sure it thinks the current module's dir is the same as in the 
// nodejs tests so these require tests will be operating in the same
// environment and therefore will work properly
if (ilib._getPlatform() === "browser") {
    //console.log("ilib getplatform is " + ilib._getPlatform());
    //console.log("process is ");
    //console.dir(process);
    console.log("window is");
    console.dir(window);
    console.log("module is");
    console.dir(module);
    
    //var i = r.root.lastIndexOf('/');
    //r.root = r.root.substring(0, i) + "/test";
}

module.exports.testrequire = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testRequireSingleFile: function(test) {
        if (!ilib.isDynCode()) {
            // can't test the require function unless you're 
            // in dynamic code loading mode
            test.done();
            return;
        }
        var mod = require("../test/testfiles/datefmt2.js");
        test.expect(2);
        test.ok(typeof(mod) !== "undefined");
        
        test.equal(typeof(mod), "function");
        test.done();
    },
    
    testRequireDoNotReloadSameFile: function(test) {
        if (!ilib.isDynCode()) {
            // can't test the require function unless you're 
            // in dynamic code loading mode
            test.done();
            return;
        }
        test.expect(4);
        test.ok(typeof(Qwerty) === "undefined");
    
        var Qwerty = require("../test/testfiles/qwerty.js");
        test.ok(typeof(Qwerty) !== "undefined");
        
        Qwerty.testproperty = "foo";
        
        Qwerty = undefined;
        
        // should not reload it again because it already loaded it previously
        // so the test property should be in the cache
        Qwerty = require("../test/testfiles/qwerty.js");
        
        test.ok(typeof(Qwerty) !== "undefined");
        test.equal(Qwerty.testproperty, "foo");
        test.done();
    },
    
    testRequireRunCode1: function(test) {
        if (!ilib.isDynCode()) {
            // can't test the require function unless you're 
            // in dynamic code loading mode
            test.done();
            return;
        }
        var Locale2 = require("../test/testfiles/locale2.js");
        
        test.expect(3);
        test.ok(typeof(Locale2) !== "undefined");
    
        var locale = new Locale2("de-DE");
        
        test.equal(locale.getLanguage(), "de");
        test.equal(locale.getRegion(), "DE");
        test.done();
    },
    
    testRequireRunCode2: function(test) {
        if (!ilib.isDynCode()) {
            // can't test the require function unless you're 
            // in dynamic code loading mode
            test.done();
            return;
        }
        
        var dir = Path.dirname(module.filename);
        var Locale2 = require(Path.join(dir, "../test/testfiles/locale2.js"));
        test.expect(4);
        test.ok(typeof(Locale2) !== "undefined");
        
        var DateFmt2 = require(Path.join(dir, "../test/testfiles/datefmt2.js"));
        test.ok(typeof(DateFmt2) !== "undefined");
        var df = new DateFmt2({locale: "de-DE"});
        
        var d = new Date(2015, 2, 25, 16, 16, 16);
        test.equal(df.format(d), "25/3/2015");
        
        df = new DateFmt2({locale: "en-US"});
        
        test.equal(df.format(d), "3/25/2015");
        test.done();
    }
    
};
