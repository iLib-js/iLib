/*
 * testname_vi.js - test the name object in Vietnamese
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

module.exports.testname_vi = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_vi: function(test) {
        test.expect(2);
        var parsed = new Name("Chau-Giang Thi Nguyen", {locale: 'vi-VN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            givenName: "Chau-Giang",
            middleName: "Thi",
            familyName: "Nguyen"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseAdjunctNames_vi: function(test) {
        test.expect(2);
        var parsed = new Name("Chau-Giang Thi Nguyen", {locale: 'vi-VN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =  {
            givenName: "Chau-Giang",
            middleName: "Thi",
            familyName: "Nguyen"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseSingleNameWithPrefixAndAdjunct_vi: function(test) {
        test.expect(2);
        var parsed = new Name("Ông và Bà Nguyen", {locale: 'vi-VN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            prefix: "Ông và Bà",
            familyName: "Nguyen"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_vi: function(test) {
        test.expect(2);
        var parsed = new Name("Chau-Giang Nguyen Cao cấp", {locale: 'vi-VN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =    {
            suffix: "Cao cấp",
            givenName: "Chau-Giang",
            familyName: "Nguyen"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitleWithFamilyOnly_vi: function(test) {
        test.expect(2);
        var parsed = new Name("Thị trưởng Nguyen", {locale: 'vi-VN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =   {
            prefix: "Thị trưởng",
            familyName: "Nguyen"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseEverything_vi: function(test) {
        test.expect(2);
        var parsed = new Name("Ông Chau-Giang Thi Nguyen", {locale: 'vi-VN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected =    {
            prefix: "Ông",
            givenName: "Chau-Giang",
            middleName: "Thi",
            familyName: "Nguyen"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_vi: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Chau-Giang",
            middleName: "Thi",
            familyName: "Nguyen"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'vi-VN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Chau-Giang Nguyen";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_vi: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Chau-Giang",
            middleName: "Thi",
            familyName: "Nguyen"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'vi-VN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Chau-Giang Thi Nguyen";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_vi: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Chau-Giang",
            middleName: "Thi",
            familyName: "Nguyen",
            suffix: "Cao cấp"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'vi-VN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Chau-Giang Thi Nguyen";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_vi: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Ông",
            givenName: "Chau-Giang",
            middleName: "Thi",
            familyName: "Nguyen",
            suffix: "Cao cấp"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'vi-VN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Ông Chau-Giang Thi Nguyen Cao cấp";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_vi: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Ông",
            givenName: "Chau-Giang",
            middleName: "Thi",
            familyName: "Nguyen"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'vi-VN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Chau-Giang Nguyen";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_vi: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Ông",
            givenName: "Chau-Giang",
            middleName: "Thi",
            familyName: "Nguyen"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'vi-VN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Chau-Giang Thi Nguyen";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_vi: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Ông",
            givenName: "Chau-Giang",
            middleName: "Thi",
            familyName: "Nguyen"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'vi-VN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Ông Chau-Giang Thi Nguyen";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameShort_vi: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'vi-VN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameMedium_vi: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'vi-VN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameLong_vi: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'vi-VN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "小地獸";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
    
    
    
};