/*
 * testname_kn_IN.js - test the name object in Hindi
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

module.exports.testname_kn = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_kn_IN: function(test) {
        test.expect(2);
        var parsed = new Name("ಮಂಜುನಾಥ ಗೌಡ", {locale: 'kn-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "ಮಂಜುನಾಥ",
            familyName: "ಗೌಡ"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitle_kn_IN: function(test) {
        test.expect(2);
        var parsed = new Name("ಮಂಜುನಾಥ ಗೌಡ ಹಿರಿಯ", {locale: 'kn-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix: "ಹಿರಿಯ",
            givenName: "ಮಂಜುನಾಥ",
            familyName: "ಗೌಡ"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitleWithFamilyOnly_kn_IN: function(test) {
        test.expect(2);
        var parsed = new Name("ವೈದ್ಯರು ಗೌಡ", {locale: 'kn-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "ವೈದ್ಯರು",
            familyName: "ಗೌಡ"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseEverything_kn_IN: function(test) {
        test.expect(2);
        var parsed = new Name("ಶ್ರೀ ಮತ್ತು ಶ್ರೀಮತಿ ಗೌಡ", {locale: 'kn-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "ಶ್ರೀ ಮತ್ತು ಶ್ರೀಮತಿ",
            familyName: "ಗೌಡ"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefix_kn_IN: function(test) {
        test.expect(2);
        var parsed = new Name("ಶ್ರೀ ಮಂಜುನಾಥ ಗೌಡ", {locale: 'kn-IN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "ಶ್ರೀ",
            givenName: "ಮಂಜುನಾಥ",
            familyName: "ಗೌಡ"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_kn_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "ಮಂಜುನಾಥ",
            familyName: "ಗೌಡ"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'kn-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ಮಂಜುನಾಥ ಗೌಡ";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_kn_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "ಮಂಜುನಾಥ",
            
            familyName: "ಗೌಡ"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'kn-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ಮಂಜುನಾಥ ಗೌಡ";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_kn_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "ಮಂಜುನಾಥ",
            
            familyName: "ಗೌಡ"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'kn-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ಮಂಜುನಾಥ ಗೌಡ";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSurname_kn_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ಶ್ರೀ ಮತ್ತು ಶ್ರೀಮತಿ",
            familyName: "ಗೌಡ"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'kn-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ಶ್ರೀ ಮತ್ತು ಶ್ರೀಮತಿ ಗೌಡ";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_kn_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ವೈದ್ಯರು",
            givenName: "ಮಂಜುನಾಥ",
            
            familyName: "ಗೌಡ",
            suffix: "ಕಿರಿಯ"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'kn-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ವೈದ್ಯರು ಮಂಜುನಾಥ ಗೌಡ ಕಿರಿಯ";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_kn_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ವೈದ್ಯರು",
            givenName: "ಮಂಜುನಾಥ",
            familyName: "ಗೌಡ"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'kn-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ಮಂಜುನಾಥ ಗೌಡ";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_kn_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ವೈದ್ಯರು",
            givenName: "ಮಂಜುನಾಥ",
            familyName: "ಗೌಡ"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'kn-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ಮಂಜುನಾಥ ಗೌಡ";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_kn_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ವೈದ್ಯರು",
            givenName: "ಮಂಜುನಾಥ",
            familyName: "ಗೌಡ"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'kn-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "ವೈದ್ಯರು ಮಂಜುನಾಥ ಗೌಡ";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
};