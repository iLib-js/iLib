/*
 * testname_en.js - test the name object in Japanese
 * 
 * Copyright © 2013-2015,2017, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICJASE-2.0
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

module.exports.testname_hu = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_hu_HU: function(test) {
        test.expect(2);
        var parsed = new Name("Halász Dorottya", {locale: 'hu-HU'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Dorottya",
            familyName: "Halász"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseSimpleName_hu_HU1: function(test) {
        test.expect(2);
        var parsed = new Name("úr. Halász Dorottya", {locale: 'hu-HU'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "úr.",
            givenName: "Dorottya",
            familyName: "Halász"
                   
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseSimpleNameWom_hu_HU: function(test) {
        test.expect(2);
        var parsed = new Name("Kisasszony. Kovács Lajos", {locale: 'hu-HU'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "Kisasszony.",
            givenName: "Lajos",
            familyName: "Kovács"
                   
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseSingleNameWithPrefixAndAdjunct_hu_HU: function(test) {
        test.expect(2);
        var parsed = new Name("Halász Dorottya jr.", {locale: 'hu-HU'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix : "jr.",
            givenName: "Dorottya",
            familyName: "Halász"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_hu_HU1: function(test) {
        test.expect(2);
        var parsed = new Name("alelnöke Halász Dorottya", {locale: 'hu-HU'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "alelnöke",
                familyName: "Halász",
            givenName: "Dorottya"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_hu_HU_second: function(test) {
        test.expect(2);
        var parsed = new Name("Úr. és Kisasszony. Halász", {locale: 'hu-HU'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            familyName: "Halász",
            prefix: "Úr. és Kisasszony."
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitleWithFamilyOnlyAndAdjunct_hu_HU: function(test) {
        test.expect(2);
    
        var name = new Name({
            prefix: "alelnöke",
            givenName: "Dorottya",
        
            familyName: "Halász",
            suffix: "idősebb"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'hu-HU'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "alelnöke Halász Dorottya idősebb";
        
        test.equal(formatted, expected);
        test.done();
    
    },
    
    
    
    testParseCompoundHonorific_hu_HU: function(test) {
        test.expect(2);
        var parsed = new Name("alelnöke Halász", {locale: 'hu-HU'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "alelnöke",
            familyName: "Halász"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_hu_HU: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Dorottya",
            familyName: "Halász"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'hu-HU'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Halász Dorottya";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_hu_HU: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Dorottya",
            familyName: "Halász"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'hu-HU'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Halász Dorottya";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_hu_HU: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Dorottya",
            familyName: "Halász",
            suffix: "idősebb"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'hu-HU'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Halász Dorottya idősebb";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_hu_HU: function(test) {
        test.expect(2);
        var name = new Name({
            suffix: "idősebb",
            givenName: "Dorottya",
            familyName: "Halász"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'hu-HU'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Halász Dorottya";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    
    testFormatAsianNameMedium_hu_HU: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'hu-HU'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameLong_hu_HU: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'hu-HU'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "小地獸太太";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
    
};
