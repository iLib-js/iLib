/*
 * testname_sk_SK.js - test the name object in slovak
 * 
 * Copyright © 2013-2015,2017, JEPánSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * unless required by applicable law or agreed to in writing, software
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

module.exports.testname_sk = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_sk_SK: function(test) {
        test.expect(2);
        var parsed = new Name("Iveta Stan", {locale: 'sk-SK'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Iveta",
            familyName: "Stan"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitle_sk_SK: function(test) {
        test.expect(2);
        var parsed = new Name("Iveta Stan dôchodku", {locale: 'sk-SK'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix: "dôchodku",
            givenName: "Iveta",
            familyName: "Stan"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitleWithFamilyOnly_sk_SK: function(test) {
        test.expect(2);
        var parsed = new Name("Pán. Stan", {locale: 'sk-SK'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Pán.",
            familyName: "Stan"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseEverything_sk_SK: function(test) {
        test.expect(2);
        var parsed = new Name("Pán. a pani. Stan", {locale: 'sk-SK'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Pán. a pani.",
            familyName: "Stan"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefix_sk_SK: function(test) {
        test.expect(2);
        var parsed = new Name("Pán. Iveta Stan", {locale: 'sk-SK'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Pán.",
            givenName: "Iveta",
            familyName: "Stan"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefixAndSuffix_sk_SK: function(test) {
        test.expect(2);
        var parsed = new Name("Viceprezident Iveta Stan dôchodku", {locale: 'sk-SK'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Viceprezident",
            givenName: "Iveta",
            familyName: "Stan",
            suffix:"dôchodku"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_sk_SK: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Iveta",
            familyName: "Stan"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'sk-SK'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Iveta Stan";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_sk_SK: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Iveta",
            familyName: "Stan"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'sk-SK'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Iveta Stan";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_sk_SK: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Iveta",
            familyName: "Stan",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'sk-SK'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Iveta Stan";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    
    
    testFormatSurname_sk_SK: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Pán. a pani.",
            familyName: "Stan"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'sk-SK'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Pán. a pani. Stan";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_sk_SK: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "princezná",
            givenName: "Iveta",
            familyName: "Stan",
            suffix: "dôchodku"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'sk-SK'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "princezná Iveta Stan dôchodku";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_sk_SK: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "princezná",
            givenName: "Iveta",
            familyName: "Stan"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'sk-SK'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Iveta Stan";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_sk_SK: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "princezná",
            givenName: "Iveta",
            familyName: "Stan"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'sk-SK'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Iveta Stan";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_sk_SK: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "princezná",
            givenName: "Iveta",
            familyName: "Stan"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'sk-SK'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "princezná Iveta Stan";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
};
