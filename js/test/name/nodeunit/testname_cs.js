/*
 * testname_cs_CZ.js - test the name object in CZECH Republic
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

module.exports.testname_cs = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_cs_CZ: function(test) {
        test.expect(2);
        var parsed = new Name("Yana Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Yana",
            familyName: "Synkova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTripleName_cs_CZ: function(test) {
        test.expect(2);
        var parsed = new Name("Yana Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Yana",
            familyName: "Synkova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseSingleNameWithPrefixAndAdjunct_cs_CZ: function(test) {
        test.expect(2);
        var parsed = new Name("prezident Yana Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "prezident",
            givenName: "Yana",
            familyName: "Synkova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseHypenatedName_cs_CZ: function(test) {
        test.expect(2);
        var parsed = new Name("Yana Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Yana",
            familyName: "Synkova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitle_cs_CZ: function(test) {
        test.expect(2);
        var parsed = new Name("prezident Yana Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "prezident",
            givenName: "Yana",
            familyName: "Synkova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_cs_CZ1: function(test) {
        test.expect(2);
        var parsed = new Name("předsedkyně Yana Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "předsedkyně",
            givenName: "Yana",
            familyName: "Synkova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitleWithFamilyOnlyAndAdjunct_cs_CZ: function(test) {
        test.expect(2);
        var parsed = new Name("viceprezident Yana Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "viceprezident",
            givenName: "Yana",
            familyName: "Synkova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseEverything_cs_CZ: function(test) {
        test.expect(2);
        var parsed = new Name("dáma Yana Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "dáma",
            givenName: "Yana",
            familyName: "Synkova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseCompoundHonorific_cs_CZ: function(test) {
        test.expect(2);
        var parsed = new Name("šéfkuchař Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "šéfkuchař",
            familyName: "Synkova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseCompoundHonorific_cs_CZ1: function(test) {
        test.expect(2);
        var parsed = new Name("Dr. Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Dr.",
            familyName: "Synkova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParsewithFamilyCompoundHonorific_cs_CZ1: function(test) {
        test.expect(2);
        var parsed = new Name("Pan a Paní Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Pan a Paní",
            familyName: "Synkova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseCompoundHonorific_cs_CZZ: function(test) {
        test.expect(2);
        var parsed = new Name("Paní Yana Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Paní",
            givenName: "Yana",
            familyName: "Synkova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_cs_CZ: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Yana",
            familyName: "Synkova"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'cs-CZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Yana Synkova";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_cs_CZ: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Yana",
            familyName: "Synkova"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'cs-CZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Yana Synkova";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_cs_CZ: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Yana",
            familyName: "Synkova",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'cs-CZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Yana Synkova";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull1_cs_CZ: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Pan",
            givenName: "Yana",
            familyName: "Synkova",
            suffix: "v důchodu"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'cs-CZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Pan Yana Synkova v důchodu";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFullu_cs_CZ: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Paní",
            givenName: "Yana",
            familyName: "Synkova",
            suffix: "v důchodu"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'cs-CZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Paní Yana Synkova v důchodu";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    
    testFormatSimpleNameFull_cs_CZ: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "prezidentí ministerský předseda",
            givenName: "Yana",
            familyName: "Synkova",
            suffix: "v důchodu"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'cs-CZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "prezidentí ministerský předseda Yana Synkova v důchodu";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_cs_CZ: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "prezidentí ministerský",
            givenName: "Yana",
            familyName: "von Synkova"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'cs-CZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Yana von Synkova";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_cs_CZ: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "prezidentí ministerský",
            givenName: "Yana",
            familyName: "von Synkova"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'cs-CZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Yana von Synkova";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_cs_CZ: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "prezidentí ministerský",
            givenName: "Yana",
            familyName: "von Synkova"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'cs-CZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "prezidentí ministerský Yana von Synkova";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameShort_cs_CZ: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'cs-CZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameMedium_cs_CZ: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'cs-CZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameLong_cs_CZ: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'cs-CZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "小地獸太太";
        
        test.equal(formatted, expected);
        test.done();
    }
    
};