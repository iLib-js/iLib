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

module.exports.testname_hr = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_hr_HR: function(test) {
        test.expect(2);
        var parsed = new Name("Antonio Pavlović", {locale: 'hr-HR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Antonio",
            familyName: "Pavlović"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseSimpleName_hr_HR: function(test) {
        test.expect(2);
        var parsed = new Name("G. Kertu Pavlović", {locale: 'hr-HR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "G.",
            givenName: "Kertu",
            familyName: "Pavlović"
                   
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseSimpleName_hr_HR: function(test) {
        test.expect(2);
        var parsed = new Name("Gospođa. Kertu Pavlović", {locale: 'hr-HR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "Gospođa.",
            givenName: "Kertu",
            familyName: "Pavlović"
                   
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseSingleNameWithPrefixAndAdjunct_hr_HR: function(test) {
        test.expect(2);
        var parsed = new Name("Antonio Vesna Pavlović mlađi", {locale: 'hr-HR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix : "mlađi",
            givenName: "Antonio",
                middleName : "Vesna",
            familyName: "Pavlović"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_hr_HR1: function(test) {
        test.expect(2);
        var parsed = new Name("predsjednik Antonio Vesna Pavlović", {locale: 'hr-HR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix : "predsjednik",
            givenName: "Antonio",
                middleName : "Vesna",
            familyName: "Pavlović"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitle_hr_HR_second: function(test) {
        test.expect(2);
        var parsed = new Name("G. i Gospođa. Pavlović", {locale: 'hr-HR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            familyName: "Pavlović"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseTitleWithFamilyOnlyAndAdjunct_hr_HR: function(test) {
        test.expect(2);
    
        var name = new Name({
            prefix: "predsjednik",
            givenName: "Antonio",
            middleName : "Vesna",
            familyName: "Pavlović",
            suffix: "mirovini"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'hr-HR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "predsjednik Antonio Vesna Pavlović mirovini";
        
        test.equal(formatted, expected);
        test.done();
    
    },
    
    
    
    testParseCompoundHonorific_hr_HR: function(test) {
        test.expect(2);
        var parsed = new Name("predsjednik Pavlović", {locale: 'hr-HR'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "predsjednik",
            familyName: "Pavlović"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_hr_HR: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Antonio",
            middleName : "Vesna",
            familyName: "Pavlović"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'hr-HR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Antonio Pavlović";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_hr_HR: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Antonio",
            middleName : "Vesna",
            familyName: "Pavlović"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'hr-HR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Antonio Vesna Pavlović";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_hr_HR: function(test) {
        test.expect(2);
        var name = new Name({
            
            givenName: "Antonio",
            middleName : "Vesna",
            familyName: "Pavlović",
            suffix: "mirovini"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'hr-HR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Antonio Vesna Pavlović mirovini";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_hr_HR: function(test) {
        test.expect(2);
        var name = new Name({
            suffix: "mirovini",
            givenName: "Antonio",
            middleName : "Vesna",
            familyName: "Pavlović"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'hr-HR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Antonio Pavlović";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    
    testFormatAsianNameMedium_hr_HR: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'hr-HR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatAsianNameLong_hr_HR: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'hr-HR'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "小地獸太太";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
    
};
