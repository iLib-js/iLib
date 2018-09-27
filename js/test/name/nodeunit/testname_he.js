/*
 * testname_he.js - test the name object in Hebrew
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

module.exports.testname_he = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_he: function(test) {
        test.expect(2);
        var parsed = new Name("נטלי פורטמן", {locale: 'he-IL'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            givenName: "נטלי",
            familyName: "פורטמן"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseAdjunctNames_he: function(test) {
        test.expect(2);
        var parsed = new Name("נטלי פורטמן", {locale: 'he-IL'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =  {
            givenName: "נטלי",
            familyName: "פורטמן"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseSingleNameWithPrefixAndAdjunct_he: function(test) {
        test.expect(2);
        var parsed = new Name("מר ו - גברת פורטמן", {locale: 'he-IL'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            prefix: "מר ו - גברת",
            familyName: "פורטמן"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_he: function(test) {
        test.expect(2);
        var parsed = new Name("נטלי פורטמן דוקטור", {locale: 'he-IL'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =    {
            suffix: "דוקטור",
            givenName: "נטלי",
            familyName: "פורטמן"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitleWithFamilyOnly_he: function(test) {
        test.expect(2);
        var parsed = new Name("גברת פורטמן", {locale: 'he-IL'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            prefix: "גברת",
            familyName: "פורטמן"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseEverything_he: function(test) {
        test.expect(2);
        var parsed = new Name("גברת נטלי פורטמן", {locale: 'he-IL'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =    {
            prefix: "גברת",
            givenName: "נטלי",
            familyName: "פורטמן"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_he: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "נטלי",
            familyName: "פורטמן"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'he-IL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "נטלי פורטמן";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_he: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "נטלי",
            familyName: "פורטמן"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'he-IL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "נטלי פורטמן";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_he: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "נטלי",
            familyName: "פורטמן",
            suffix: "דוקטור"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'he-IL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "נטלי פורטמן";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_he: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ראש הממשלה",
            givenName: "נטלי",
            
            familyName: "פורטמן",
            suffix: "לשעבר"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'he-IL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ראש הממשלה נטלי פורטמן לשעבר";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_he: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ראש הממשלה",
            givenName: "נטלי",
            
            familyName: "פורטמן",
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'he-IL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "נטלי פורטמן";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_he: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ראש הממשלה",
            givenName: "נטלי",
            
            familyName: "פורטמן",
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'he-IL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "נטלי פורטמן";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_he: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ראש הממשלה",
            givenName: "נטלי",
            
            familyName: "פורטמן",
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'he-IL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ראש הממשלה נטלי פורטמן";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameShort_he: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'he-IL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameMedium_he: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'he-IL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameLong_he: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'he-IL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "小地獸";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
    
    
    
};
