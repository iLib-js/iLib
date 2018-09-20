/*
 * testname_lt_LT.js - test the name object in Lithunaian
 * 
 * Copyright © 2013-2015,2017, JEDLSoft
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

if (typeof(NameFmt) === "undefined") {
    var NameFmt = require("../../../lib/NameFmt.js");
}
if (typeof(Name) === "undefined") {
    var Name = require("../../../lib/Name.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testname_lt = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_lt_LT: function(test) {
        test.expect(2);
        var parsed = new Name("Gediminas Baravykas", {locale: 'lt-LT'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Gediminas",
            familyName: "Baravykas"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitle_lt_LT: function(test) {
        test.expect(2);
        var parsed = new Name("Gediminas Baravykas jaunesnysis", {locale: 'lt-LT'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix: "jaunesnysis",
            givenName: "Gediminas",
            familyName: "Baravykas"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitleWithFamilyOnly_lt_LT: function(test) {
        test.expect(2);
        var parsed = new Name("inspektorius Baravykas", {locale: 'lt-LT'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "inspektorius",
            familyName: "Baravykas"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseEverything_lt_LT: function(test) {
        test.expect(2);
        var parsed = new Name("ponas ir ponia Baravykas", {locale: 'lt-LT'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "ponas ir ponia",
            familyName: "Baravykas"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefix_lt_LT: function(test) {
        test.expect(2);
        var parsed = new Name("ponas Gediminas Baravykas", {locale: 'lt-LT'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "ponas",
            givenName: "Gediminas",
            familyName: "Baravykas"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_lt_LT: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Gediminas",
            familyName: "Baravykas"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'lt-LT'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Gediminas Baravykas";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_lt_LT: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Gediminas",
            familyName: "Baravykas"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'lt-LT'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Gediminas Baravykas";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_lt_LT: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Gediminas",
            familyName: "Baravykas",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'lt-LT'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Gediminas Baravykas";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSurname_lt_LT: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ponas ir ponia",
            familyName: "Baravykas"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'lt-LT'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ponas ir ponia Baravykas";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_lt_LT: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "profesorius",
            givenName: "Gediminas",
            familyName: "Baravykas",
            suffix: "daktaro"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'lt-LT'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "profesorius Gediminas Baravykas daktaro";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_lt_LT: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "profesorius",
            givenName: "Gediminas",
            familyName: "Baravykas"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'lt-LT'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Gediminas Baravykas";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_lt_LT: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "profesorius",
            givenName: "Gediminas",
            familyName: "Baravykas"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'lt-LT'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Gediminas Baravykas";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_lt_LT: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "profesorius",
            givenName: "Gediminas",
            familyName: "Baravykas"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'lt-LT'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "profesorius Gediminas Baravykas";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
};
