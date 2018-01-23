/*
 * testname_uz_Latn.js - test the name object in Uzbek
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

module.exports.testname_uz_Latn = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_uz_Latn: function(test) {
        test.expect(2);
        var parsed = new Name("Anastasia Gimazetdinova", {locale: 'uz-Latn-UZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            givenName: "Anastasia",
            familyName: "Gimazetdinova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseAdjunctNames_uz_Latn: function(test) {
        test.expect(2);
        var parsed = new Name("Anastasia Gimazetdinova", {locale: 'uz-Latn-UZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =  {
            givenName: "Anastasia",
            familyName: "Gimazetdinova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseSingleNameWithPrefixAndAdjunct_uz_Latn: function(test) {
        test.expect(2);
        var parsed = new Name("Janob va xonim Gimazetdinova", {locale: 'uz-Latn-UZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            prefix: "Janob va xonim",
            familyName: "Gimazetdinova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitle_uz_Latn: function(test) {
        test.expect(2);
        var parsed = new Name("Anastasia Gimazetdinova katta", {locale: 'uz-Latn-UZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =    {
            suffix: "katta",
            givenName: "Anastasia",
            familyName: "Gimazetdinova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitleWithFamilyOnly_uz_Latn: function(test) {
        test.expect(2);
        var parsed = new Name("janob Gimazetdinova", {locale: 'uz-Latn-UZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            prefix: "janob",
            familyName: "Gimazetdinova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseEverything_uz_Latn: function(test) {
        test.expect(2);
        var parsed = new Name("janob Anastasia Gimazetdinova", {locale: 'uz-Latn-UZ'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =    {
            prefix: "janob",
            givenName: "Anastasia",
            familyName: "Gimazetdinova"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_uz_Latn: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Anastasia",
            familyName: "Gimazetdinova"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'uz-Latn-UZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Anastasia Gimazetdinova";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_uz_Latn: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Anastasia",
            familyName: "Gimazetdinova"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'uz-Latn-UZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Anastasia Gimazetdinova";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_uz_Latn: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Anastasia",
            familyName: "Gimazetdinova",
            suffix: "kichik"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'uz-Latn-UZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Anastasia Gimazetdinova";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_uz_Latn: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "xonim",
            givenName: "Anastasia",
            familyName: "Gimazetdinova",
            suffix: "kichik"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'uz-Latn-UZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "xonim Anastasia Gimazetdinova kichik";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
};