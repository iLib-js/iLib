/*
 * testname_ID.js - test the name object in Indonesian
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

module.exports.testname_id = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_id_ID: function(test) {
        test.expect(2);
        var parsed = new Name("Mahyadi Panggabean", {locale: 'id-ID'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Mahyadi",
            middleName: "Panggabean"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseSimpleName_id_ID1: function(test) {
        test.expect(2);
        var parsed = new Name("Bapak. Abdul Panggabean", {locale: 'id-ID'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "Bapak.",
            givenName: "Abdul",
            middleName: "Panggabean"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseSimpleName_id_ID2: function(test) {
        test.expect(2);
        var parsed = new Name("Ibu. Mahyadi Panggabean", {locale: 'id-ID'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "Ibu.",
            givenName: "Mahyadi",
            middleName: "Panggabean"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseSingleNameWithPrefixAndAdjunct_id_ID: function(test) {
        test.expect(2);
        var parsed = new Name("Mahyadi Krupuk muda", {locale: 'id-ID'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix : "muda",
            givenName: "Mahyadi",
            middleName : "Krupuk"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_id_ID1: function(test) {
        test.expect(2);
        var parsed = new Name("perdana menteri Mahyadi Krupuk", {locale: 'id-ID'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "perdana menteri",
            givenName: "Mahyadi",
            middleName : "Krupuk"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_id_ID_second: function(test) {
        test.expect(2);
        var parsed = new Name("Ibu. dan Bapak. Panggabean", {locale: 'id-ID'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "Ibu. dan Bapak.",
            givenName: "Panggabean"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitleWithFamilyOnlyAndAdjunct_id_ID: function(test) {
        test.expect(2);
    
        var name = new Name({
            prefix: "presiden",
            givenName: "Mahyadi",
            middleName : "Krupuk",
            suffix: "mundur"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'id-ID'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "presiden Mahyadi Krupuk mundur";
        
        test.equal(formatted, expected);
        test.done();
    
    },
    
    
    
    testParseCompoundHonorific_id_ID: function(test) {
        test.expect(2);
        var parsed = new Name("melayani Panggabean", {locale: 'id-ID'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "melayani",
            givenName: "Panggabean"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_id_ID: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Mahyadi",
            middleName : "Krupuk"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'id-ID'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Mahyadi";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_id_ID: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Mahyadi",
            middleName : "Krupuk"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'id-ID'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Mahyadi Krupuk";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    
    testFormatComplexNameShort_id_ID: function(test) {
        test.expect(2);
        var name = new Name({
            suffix: "mirovini",
            givenName: "Mahyadi",
            middleName: "Panggabean"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'id-ID'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Mahyadi Panggabean";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    
    testFormatAsianNameMedium_id_ID: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            middleName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'id-ID'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "獸地";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameLong_id_ID: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            middleName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'id-ID'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "小獸地太太";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
    
};
