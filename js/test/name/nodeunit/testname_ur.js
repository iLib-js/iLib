/*
 * testname_ur_IN.js - test the name object in Urdu
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
    var NameFmt = require("../.././../lib/NameFmt.js");
}
if (typeof(Name) === "undefined") {
    var Name = require("../.././../lib/Name.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testname_ur = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_ur_IN: function(test) {
        var parsed = new Name("موہن لال", {locale: 'ur-IN'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "موہن",
            familyName: "لال"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitle_ur_IN: function(test) {
        var parsed = new Name("موہن لال میں", {locale: 'ur-IN'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix: "میں",
            givenName: "موہن",
            familyName: "لال"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitleWithFamilyOnly_ur_IN: function(test) {
        var parsed = new Name("مسٹر لال", {locale: 'ur-IN'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "مسٹر",
            familyName: "لال"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseEverything_ur_IN: function(test) {
        var parsed = new Name("مسٹر اور مسز لال", {locale: 'ur-IN'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "مسٹر اور مسز",
            familyName: "لال"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefix_ur_IN: function(test) {
        var parsed = new Name("مسٹر موہن لال", {locale: 'ur-IN'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "مسٹر",
            givenName: "موہن",
            familyName: "لال"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_ur_IN: function(test) {
        var name = new Name({
            givenName: "موہن",
            familyName: "لال"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'ur-IN'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "موہن لال";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_ur_IN: function(test) {
        var name = new Name({
            givenName: "موہن",
            familyName: "لال"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'ur-IN'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "موہن لال";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_ur_IN: function(test) {
        var name = new Name({
            givenName: "موہن",
            familyName: "لال"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'ur-IN'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "موہن لال";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSurname_ur_IN: function(test) {
        var name = new Name({
            prefix: "مسٹر اور مسز",
            familyName: "لال"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'ur-IN'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "مسٹر اور مسز لال";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_ur_IN: function(test) {
        var name = new Name({
            prefix: "ڈاکٹر",
            givenName: "موہن",
            familyName: "لال",
            suffix: "میں"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'ur-IN'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ڈاکٹر موہن لال میں";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_ur_IN: function(test) {
        var name = new Name({
            prefix: "ڈاکٹر",
            givenName: "موہن",
            familyName: "لال"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'ur-IN'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "موہن لال";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_ur_IN: function(test) {
        var name = new Name({
            prefix: "ڈاکٹر",
            givenName: "موہن",
            familyName: "لال"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'ur-IN'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "موہن لال";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_ur_IN: function(test) {
        var name = new Name({
            prefix: "ڈاکٹر",
            givenName: "موہن",
            familyName: "لال"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'ur-IN'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ڈاکٹر موہن لال";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
};