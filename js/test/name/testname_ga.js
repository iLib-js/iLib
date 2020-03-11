/*
 * testname_en.js - test the name object in Japanese
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
    var NameFmt = require("../../lib/NameFmt.js");
}
if (typeof(Name) === "undefined") {
    var Name = require("../../lib/Name.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testname_ga = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_ga_IE: function(test) {
        test.expect(2);
        var parsed = new Name("Daniel O'Reilly", {locale: 'ga-IE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Daniel",
            familyName: "O'Reilly"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseSimpleName_ga_IE: function(test) {
        test.expect(2);
        var parsed = new Name("An tUasal. Kertu O'Reilly", {locale: 'ga-IE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "An tUasal.",
            givenName: "Kertu",
            familyName: "O'Reilly"
                   
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseSingleNameWithPrefixAndAdjunct_ga_IE: function(test) {
        test.expect(2);
        var parsed = new Name("Daniel O'Reilly sóisearach", {locale: 'ga-IE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
             suffix : "sóisearach",
            givenName: "Daniel",
            familyName: "O'Reilly"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_ga_IE1: function(test) {
        test.expect(2);
        var parsed = new Name("príomh-aire Daniel O'Reilly", {locale: 'ga-IE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "príomh-aire",
            givenName: "Daniel",
            familyName: "O'Reilly"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_ga_IE_second: function(test) {
        test.expect(2);
        var parsed = new Name("An tUasal. agus Mrs. O'Reilly", {locale: 'ga-IE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "An tUasal. agus Mrs.",
            familyName: "O'Reilly"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitleWithFamilyOnlyAndAdjunct_ga_IE: function(test) {
        test.expect(2);
    
        var name = new Name({
            prefix: "príomh-aire",
            givenName: "Daniel",
            familyName: "O'Reilly",
            suffix: "scor"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'ga-IE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "príomh-aire Daniel O'Reilly scor";
        
        test.equal(formatted, expected);
        test.done();
    
    },
    
    
    
    testParseCompoundHonorific_ga_IE: function(test) {
        test.expect(2);
        var parsed = new Name("príomh-aire O'Reilly", {locale: 'ga-IE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "príomh-aire",
            familyName: "O'Reilly"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_ga_IE: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Daniel",
            familyName: "O'Reilly"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'ga-IE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Daniel O'Reilly";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_ga_IE: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Daniel",
            familyName: "O'Reilly"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'ga-IE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Daniel O'Reilly";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_ga_IE: function(test) {
        test.expect(2);
        var name = new Name({
            
            givenName: "Daniel",
            familyName: "O'Reilly",
            suffix: "scor"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'ga-IE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Daniel O'Reilly scor";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_ga_IE: function(test) {
        test.expect(2);
        var name = new Name({
            suffix: "scor",
            givenName: "Daniel",
            familyName: "O'Reilly"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'ga-IE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Daniel O'Reilly";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    
    testFormatAsianNameMedium_ga_IE: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'ga-IE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameLong_ga_IE: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'ga-IE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "小地獸太太";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
    
};
