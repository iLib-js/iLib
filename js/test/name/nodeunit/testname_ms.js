/*
 * testname_ms_MY.js - test the name object in Malaysian
 * 
 * Copyright © 2013-2015,2017, JEDLSoft
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
    var NameFmt = require("../.././../lib/NameFmt.js");
}
if (typeof(Name) === "undefined") {
    var Name = require("../.././../lib/Name.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testname_ms = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_ms_MY: function(test) {
        test.expect(2);
        var parsed = new Name("Carmen Soo", {locale: 'ms-MY'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Carmen",
            familyName: "Soo"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    
    testParseTitle_ms_MY: function(test) {
        test.expect(2);
        var parsed = new Name("Carmen Soo bersara", {locale: 'ms-MY'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix: "bersara",
            givenName: "Carmen",
            familyName: "Soo"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitleWithFamilyOnly_ms_MY: function(test) {
        test.expect(2);
        var parsed = new Name("cik Soo", {locale: 'ms-MY'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "cik",
            familyName: "Soo"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseEverything_ms_MY: function(test) {
        test.expect(2);
        var parsed = new Name("encik dan cik Soo", {locale: 'ms-MY'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "encik dan cik",
            familyName: "Soo"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefix_ms_MY: function(test) {
        test.expect(2);
        var parsed = new Name("cik Carmen Soo", {locale: 'ms-MY'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "cik",
            givenName: "Carmen",
            familyName: "Soo"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_ms_MY: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Carmen",
            familyName: "Soo"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'ms-MY'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Carmen Soo";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_ms_MY: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Carmen",
            familyName: "Soo"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'ms-MY'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Carmen Soo";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_ms_MY: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Carmen",
            familyName: "Soo",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'ms-MY'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Carmen Soo";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    
    
    testFormatSurname_ms_MY: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "encik dan cik",
            familyName: "Soo"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'ms-MY'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "encik dan cik Soo";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_ms_MY: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "pesuruhjaya",
            givenName: "Carmen",
            familyName: "Soo",
            suffix: "bersara"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'ms-MY'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "pesuruhjaya Carmen Soo bersara";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_ms_MY: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "pesuruhjaya",
            givenName: "Carmen",
            familyName: "Soo"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'ms-MY'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Carmen Soo";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_ms_MY: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "pesuruhjaya",
            givenName: "Carmen",
            familyName: "Soo"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'ms-MY'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Carmen Soo";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_ms_MY: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "pesuruhjaya",
            givenName: "Carmen",
            familyName: "Soo"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'ms-MY'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "pesuruhjaya Carmen Soo";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
};