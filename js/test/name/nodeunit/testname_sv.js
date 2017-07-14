/*
 * testname_sv_SE.js - test the name object in Swedish
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

module.exports.testname_sv = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_sv_SE: function(test) {
        test.expect(2);
        var parsed = new Name("Maud Adams", {locale: 'sv-SE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Maud",
            familyName: "Adams"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitle_sv_SE: function(test) {
        test.expect(2);
        var parsed = new Name("Maud Adams pension", {locale: 'sv-SE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix: "pension",
            givenName: "Maud",
            familyName: "Adams"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitleWithFamilyOnly_sv_SE: function(test) {
        test.expect(2);
        var parsed = new Name("herr Adams", {locale: 'sv-SE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "herr",
            familyName: "Adams"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseEverything_sv_SE: function(test) {
        test.expect(2);
        var parsed = new Name("herr och fru Adams", {locale: 'sv-SE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "herr och fru",
            familyName: "Adams"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefix_sv_SE: function(test) {
        test.expect(2);
        var parsed = new Name("herr Maud Adams", {locale: 'sv-SE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "herr",
            givenName: "Maud",
            familyName: "Adams"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefixAndSuffix_sv_SE: function(test) {
        test.expect(2);
        var parsed = new Name("premiärminister Maud Adams pension", {locale: 'sv-SE'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "premiärminister",
            givenName: "Maud",
            familyName: "Adams",
            suffix:"pension"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_sv_SE: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Maud",
            familyName: "Adams"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'sv-SE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Maud Adams";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_sv_SE: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Maud",
            familyName: "Adams"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'sv-SE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Maud Adams";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_sv_SE: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Maud",
            familyName: "Adams",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'sv-SE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Maud Adams";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSurname_sv_SE: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "herr och fru",
            familyName: "Adams"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'sv-SE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "herr och fru Adams";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_sv_SE: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "guvernör",
            givenName: "Maud",
            familyName: "Adams",
            suffix: "pension"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'sv-SE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "guvernör Maud Adams pension";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_sv_SE: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "guvernör",
            givenName: "Maud",
            familyName: "Adams"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'sv-SE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Maud Adams";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_sv_SE: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "guvernör",
            givenName: "Maud",
            familyName: "Adams"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'sv-SE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Maud Adams";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_sv_SE: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "guvernör",
            givenName: "Maud",
            familyName: "Adams"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'sv-SE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "guvernör Maud Adams";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
};