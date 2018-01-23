/*
 * testname_lv_LV.js - test the name object in Latvian
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

module.exports.testname_lv = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_lv_LV: function(test) {
        test.expect(2);
        var parsed = new Name("Mikhail Baryshnikov", {locale: 'lv-LV'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Mikhail",
            familyName: "Baryshnikov"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseSimpleWithMiddleName_lv_LV: function(test) {
        test.expect(2);
        var parsed = new Name("Sergei M. Eisenstein", {locale: 'lv-LV'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Sergei",
            middleName: "M.",
            familyName: "Eisenstein"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitle_lv_LV: function(test) {
        test.expect(2);
        var parsed = new Name("Mikhail Baryshnikov vecākais", {locale: 'lv-LV'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix: "vecākais",
            givenName: "Mikhail",
            familyName: "Baryshnikov"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseTitleWithFamilyOnly_lv_LV: function(test) {
        test.expect(2);
        var parsed = new Name("priekšsēdētāja Baryshnikov", {locale: 'lv-LV'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "priekšsēdētāja",
            familyName: "Baryshnikov"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    
    testParseEverything_lv_LV: function(test) {
        test.expect(2);
        var parsed = new Name("kungs un kundze Baryshnikov", {locale: 'lv-LV'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "kungs un kundze",
            familyName: "Baryshnikov"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseprefix_lv_LV: function(test) {
        test.expect(2);
        var parsed = new Name("kungs Mikhail Baryshnikov", {locale: 'lv-LV'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "kungs",
            givenName: "Mikhail",
            familyName: "Baryshnikov"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */
    
    testFormatSimpleNameShort_lv_LV: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Mikhail",
            familyName: "Baryshnikov"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'lv-LV'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Mikhail Baryshnikov";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameMedium_lv_LV: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Mikhail",
            familyName: "Baryshnikov"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'lv-LV'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Mikhail Baryshnikov";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameLong_lv_LV: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Mikhail",
            familyName: "Baryshnikov",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'lv-LV'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Mikhail Baryshnikov";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameWithMiddleNameFull_lv_LV: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Sergei",
            middleName: "M.",
            familyName: "Eisenstein",
            suffix: "pūt"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'lv-LV'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Sergei M. Eisenstein pūt";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSurname_lv_LV: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "kungs un kundze",
            familyName: "Baryshnikov"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'lv-LV'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "kungs un kundze Baryshnikov";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatSimpleNameFull_lv_LV: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "priekšsēdētājs",
            givenName: "Mikhail",
            familyName: "Baryshnikov",
            suffix: "jaunākais"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'lv-LV'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "priekšsēdētājs Mikhail Baryshnikov jaunākais";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameShort_lv_LV: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "priekšsēdētājs",
            givenName: "Mikhail",
            familyName: "Baryshnikov"
        });
        var fmt = new NameFmt({
            style: "short", 
            locale: 'lv-LV'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Mikhail Baryshnikov";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameMedium_lv_LV: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "priekšsēdētājs",
            givenName: "Mikhail",
            familyName: "Baryshnikov"
        });
        var fmt = new NameFmt({
            style: "medium", 
            locale: 'lv-LV'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Mikhail Baryshnikov";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatComplexNameLong_lv_LV: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "priekšsēdētājs",
            givenName: "Mikhail",
            familyName: "Baryshnikov"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'lv-LV'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "priekšsēdētājs Mikhail Baryshnikov";
        
        test.equal(formatted, expected);
        test.done();
    }
    
    
    
};