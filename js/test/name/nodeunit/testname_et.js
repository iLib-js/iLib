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
    var NameFmt = require("../.././../lib/NameFmt.js");
}
if (typeof(Name) === "undefined") {
    var Name = require("../.././../lib/Name.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testname_et = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_et_EE: function(test) {
        test.expect(2);
        var parsed = new Name("Kertu-Triin Sepp", {locale: 'et-EE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Kertu-Triin",
            familyName: "Sepp"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseSimpleName_et_EE: function(test) {
        test.expect(2);
        var parsed = new Name("professor Kertu Sepp", {locale: 'et-EE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "professor",
            givenName: "Kertu",
            familyName: "Sepp"
                   
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseSingleNameWithPrefixAndAdjunct_et_EE: function(test) {
        test.expect(2);
        var parsed = new Name("Kertu-Triin Sepp jr.", {locale: 'et-EE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
             suffix : "jr.",
            givenName: "Kertu-Triin",
            familyName: "Sepp"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_et_EE1: function(test) {
        test.expect(2);
        var parsed = new Name("Hr. Kertu-Triin Sepp", {locale: 'et-EE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "Hr.",
            givenName: "Kertu-Triin",
            familyName: "Sepp"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_et_EE_second: function(test) {
        test.expect(2);
        var parsed = new Name("Prl. Kertu-Triin Sepp", {locale: 'et-EE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "Prl.",
            givenName: "Kertu-Triin",
            familyName: "Sepp"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitleWithFamilyOnlyAndAdjunct_et_EE: function(test) {
        test.expect(2);
    
        var name = new Name({
            prefix: "Hr.",
            givenName: "Kertu-Triin",
            familyName: "Sepp",
            suffix: "pensionile"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'et-EE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Hr. Kertu-Triin Sepp pensionile";
        
        test.equal(formatted, expected);
        test.done();
    
    },
    
    
    testParseTitleWithFamilyOnlyAndAdjunctex_et_EE: function(test) {
        test.expect(2);
        var parsed = new Name("inspektor Kertu-Triin Sepp pensionile", {locale: 'et-EE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "inspektor",
            givenName: "Kertu-Triin",
            familyName: "Sepp",
            suffix : "pensionile"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseCompoundHonorific_et_EE: function(test) {
        test.expect(2);
        var parsed = new Name("Hr. Sepp", {locale: 'et-EE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Hr.",
            familyName: "Sepp"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_et_EE: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Kertu-Triin",
            familyName: "Sepp"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'et-EE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Kertu-Triin Sepp";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_et_EE: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Kertu-Triin",
            familyName: "Sepp"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'et-EE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Kertu-Triin Sepp";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_et_EE: function(test) {
        test.expect(2);
        var name = new Name({
            
            givenName: "Kertu-Triin",
            familyName: "Sepp",
            suffix: "pensionile"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'et-EE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Kertu-Triin Sepp pensionile";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_et_EE: function(test) {
        test.expect(2);
        var name = new Name({
            suffix: "pensionile",
            givenName: "Kertu-Triin",
            familyName: "Sepp"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'et-EE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Kertu-Triin Sepp";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    
    testFormatAsianNameMedium_et_EE: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'et-EE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameLong_et_EE: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'et-EE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "小地獸太太";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
    
};
