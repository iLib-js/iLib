/*
 * testname_ar.js - test the name object in Arabic
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

module.exports.testname_ar = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_ar: function(test) {
        var parsed = new Name("ابن سعود", {locale: 'ar-SA'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            givenName: "ابن",
            familyName: "سعود"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseAdjunctNames_ar: function(test) {
        var parsed = new Name("ابن سعود", {locale: 'ar-SA'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =  {
            givenName: "ابن",
            familyName: "سعود"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseSingleNameWithPrefixAndAdjunct_ar: function(test) {
        var parsed = new Name("السيد و السيدة سعود", {locale: 'ar-SA'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            prefix: "السيد و السيدة",
            familyName: "سعود"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_ar: function(test) {
        var parsed = new Name("ابن سعود كبار", {locale: 'ar-SA'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =    {
            suffix: "كبار",
            givenName: "ابن",
            familyName: "سعود"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitleWithFamilyOnly_ar: function(test) {
        var parsed = new Name("الملك سعود", {locale: 'ar-SA'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            prefix: "الملك",
            familyName: "سعود"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseEverything_ar: function(test) {
        var parsed = new Name("الملك ابن سعود", {locale: 'ar-SA'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =    {
            prefix: "الملك",
            givenName: "ابن",
            familyName: "سعود"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_ar: function(test) {
        var name = new Name({
            givenName: "ابن",
            familyName: "سعود"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'ar-SA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ابن سعود";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_ar: function(test) {
        var name = new Name({
            givenName: "ابن",
            familyName: "سعود"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'ar-SA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ابن سعود";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_ar: function(test) {
        var name = new Name({
            givenName: "ابن",
            
            familyName: "سعود",
            suffix: "كبار"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'ar-SA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ابن سعود";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_ar: function(test) {
        var name = new Name({
            prefix: "الملك",
            givenName: "ابن",
            familyName: "سعود",
            suffix: "كبار"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'ar-SA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "الملك ابن سعود كبار";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_ar: function(test) {
        var name = new Name({
            prefix: "الملك",
            givenName: "ابن",
            familyName: "سعود"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'ar-SA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ابن سعود";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_ar: function(test) {
        var name = new Name({
            prefix: "الملك",
            givenName: "ابن",
            familyName: "سعود"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'ar-SA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ابن سعود";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_ar: function(test) {
        var name = new Name({
            prefix: "الملك",
            givenName: "ابن",
            familyName: "سعود"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'ar-SA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "الملك ابن سعود";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameShort_ar: function(test) {
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'ar-SA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameMedium_ar: function(test) {
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'ar-SA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameLong_ar: function(test) {
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'ar-SA'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "小地獸";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
    
    
    
};