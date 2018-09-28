/*
 * testname_fa.js - test the name object in Farsi
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

module.exports.testname_fa = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_fa: function(test) {
        test.expect(2);
        var parsed = new Name("لیلا میلانی", {locale: 'fa-IR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            givenName: "لیلا",
            familyName: "میلانی"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseAdjunctNames_fa: function(test) {
        test.expect(2);
        var parsed = new Name("لیلا میلانی", {locale: 'fa-IR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =  {
            givenName: "لیلا",
            familyName: "میلانی"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseSingleNameWithPrefixAndAdjunct_fa: function(test) {
        test.expect(2);
        var parsed = new Name("آقای ﻭ خانم میلانی", {locale: 'fa-IR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            prefix: "آقای ﻭ خانم",
            familyName: "میلانی"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_fa: function(test) {
        test.expect(2);
        var parsed = new Name("لیلا میلانی ﺙﺎﻠﺛﺍ", {locale: 'fa-IR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =    {
            suffix: "ﺙﺎﻠﺛﺍ",
            givenName: "لیلا",
            familyName: "میلانی"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitleWithFamilyOnly_fa: function(test) {
        test.expect(2);
        var parsed = new Name("خانم میلانی", {locale: 'fa-IR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            prefix: "خانم",
            familyName: "میلانی"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseEverything_fa: function(test) {
        test.expect(2);
        var parsed = new Name("خانم لیلا میلانی", {locale: 'fa-IR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =    {
            prefix: "خانم",
            givenName: "لیلا",
            familyName: "میلانی"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_fa: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "لیلا",
            familyName: "میلانی"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'fa-IR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "لیلا میلانی";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_fa: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "لیلا",
            familyName: "میلانی"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'fa-IR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "لیلا میلانی";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_fa: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "لیلا",
            familyName: "میلانی",
            suffix: "ﺙﺎﻠﺛﺍ"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'fa-IR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "لیلا میلانی";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_fa: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "خانم",
            givenName: "لیلا",
            familyName: "میلانی",
            suffix: "ﺙﺎﻠﺛﺍ"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'fa-IR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "خانم لیلا میلانی ﺙﺎﻠﺛﺍ";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_fa: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "خانم",
            givenName: "لیلا",
            familyName: "میلانی"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'fa-IR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "لیلا میلانی";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_fa: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "خانم",
            givenName: "لیلا",
            familyName: "میلانی"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'fa-IR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "لیلا میلانی";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_fa: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "خانم",
            givenName: "لیلا",
            familyName: "میلانی"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'fa-IR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "خانم لیلا میلانی";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameShort_fa: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'fa-IR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameMedium_fa: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'fa-IR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameLong_fa: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'fa-IR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "小地獸";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
    
    
    
};
