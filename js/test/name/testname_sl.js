/*
 * testname_sl_SI.js - test the name object in slovenian
 * 
 * Copyright © 2013-2015,2017, JEGSoft
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

module.exports.testname_sl = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_sl_SI: function(test) {
        test.expect(2);
        var parsed = new Name("Melania Trump", {locale: 'sl-SI'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Melania",
            familyName: "Trump"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitle_sl_SI: function(test) {
        test.expect(2);
        var parsed = new Name("Melania Trump upokojil", {locale: 'sl-SI'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix: "upokojil",
            givenName: "Melania",
            familyName: "Trump"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitleWithFamilyOnly_sl_SI: function(test) {
        test.expect(2);
        var parsed = new Name("G. Trump", {locale: 'sl-SI'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "G.",
            familyName: "Trump"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseEverything_sl_SI: function(test) {
        test.expect(2);
        var parsed = new Name("G. in Ga. Trump", {locale: 'sl-SI'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "G. in Ga.",
            familyName: "Trump"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefix_sl_SI: function(test) {
        test.expect(2);
        var parsed = new Name("Ga. Melania Trump", {locale: 'sl-SI'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Ga.",
            givenName: "Melania",
            familyName: "Trump"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefixAndSuffix_sl_SI: function(test) {
        test.expect(2);
        var parsed = new Name("Predsednik Melania Trump upokojil", {locale: 'sl-SI'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Predsednik",
            givenName: "Melania",
            familyName: "Trump",
            suffix:"upokojil"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_sl_SI: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Melania",
            familyName: "Trump"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'sl-SI'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Melania Trump";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_sl_SI: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Melania",
            familyName: "Trump"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'sl-SI'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Melania Trump";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_sl_SI: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Melania",
            familyName: "Trump",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'sl-SI'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Melania Trump";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    
    
    testFormatSurname_sl_SI: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "G. in Ga.",
            familyName: "Trump"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'sl-SI'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "G. in Ga. Trump";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_sl_SI: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Princeska",
            givenName: "Melania",
            familyName: "Trump",
            suffix: "upokojil"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'sl-SI'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Princeska Melania Trump upokojil";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_sl_SI: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Princeska",
            givenName: "Melania",
            familyName: "Trump"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'sl-SI'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Melania Trump";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_sl_SI: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Princeska",
            givenName: "Melania",
            familyName: "Trump"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'sl-SI'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Melania Trump";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_sl_SI: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Princeska",
            givenName: "Melania",
            familyName: "Trump"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'sl-SI'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Princeska Melania Trump";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
};
