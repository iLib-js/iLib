/*
 * testname_en.js - test the name object in English
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
    var NameFmt = require("../.././../lib/NameFmt.js");
}
if (typeof(Name) === "undefined") {
    var Name = require("../.././../lib/Name.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testname_en = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testENUSParseSimpleName: function(test) {
        var parsed = new Name("John Smith", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "John",
            familyName: "Smith"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENUSParseTripleName: function(test) {
        var parsed = new Name("John Michael Smith", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "John",
            middleName: "Michael",
            familyName: "Smith"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENUSParseHypenatedName: function(test) {
        var parsed = new Name("John Michael Taylor-Smith", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "John",
            middleName: "Michael",
            familyName: "Taylor-Smith"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENUSParseQuadrupleName: function(test) {
        var parsed = new Name("John Michael Kevin Smith", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "John",
            middleName: "Michael Kevin",
            familyName: "Smith"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENUSParseTitle: function(test) {
        var parsed = new Name("Dr. John Smith", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Dr.",
            givenName: "John",
            familyName: "Smith"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENUSParseHonorific: function(test) {
        var parsed = new Name("Mr. John Smith", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Mr.",
            givenName: "John",
            familyName: "Smith"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENUSParseSuffix: function(test) {
        var parsed = new Name("John Smith Jr. Esq.", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "John",
            familyName: "Smith",
            suffix: "Jr. Esq."
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    // for DFISH-25146
    testENUSParseSuffixWithComma: function(test) {
        var parsed = new Name("John Smith, PhD", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "John",
            familyName: "Smith",
            suffix: ", PhD"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENUSParseEuroMultiName: function(test) {
        var parsed = new Name("Pieter van der Meulen", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Pieter",
            familyName: "van der Meulen"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENBenStrong: function(test) {
        var parsed = new Name("Ben Strong", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Ben",
            familyName: "Strong"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
     
    testENUSParseEverything: function(test) {
        var parsed = new Name("The Right Honorable Governor General Dr. John Michael Kevin Smith III, DDM", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "The Right Honorable Governor General Dr.",
            givenName: "John",
            middleName: "Michael Kevin",
            familyName: "Smith",
            suffix: "III, DDM"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENSingleName: function(test) {
        var parsed = new Name("Sting", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Sting"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENLastNames: function(test) {
        var parsed = new Name("Dr. Roberts", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Dr.",
            familyName: "Roberts"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENCompoundNames: function(test) {
        var parsed = new Name("Mr. and Mrs. Smith", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "Mr. and Mrs.",
            familyName: "Smith"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENCompoundFamily: function(test) {
        var parsed = new Name("John and Mary Smith", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "John and Mary",
            familyName: "Smith"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENByFamily: function(test) {
        var parsed = new Name("The Robertsons", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "The",
            familyName: "Robertsons"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENAuxDE: function(test) {
        var parsed = new Name("Herbert von Karajan", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Herbert",
            familyName: "von Karajan"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENAuxNL: function(test) {
        var parsed = new Name("Jan van der Heiden", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Jan",
            familyName: "van der Heiden"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENAuxFR: function(test) {
        var parsed = new Name("Serges du Maurier", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Serges",
            familyName: "du Maurier"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENAuxIT: function(test) {
        var parsed = new Name("Leonardo di Caprio", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Leonardo",
            familyName: "di Caprio"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENAuxES: function(test) {
        var parsed = new Name("Jorge de las Cruces", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Jorge",
            familyName: "de las Cruces"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testENGibberish: function(test) {
        var parsed = new Name("Géê ëī a d øö", {locale: 'en-US'});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Géê",
            middleName: "ëī a d",
            familyName: "øö"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    /*
     * Format tests
     */
    
    testENFormatSimpleNameShort: function(test) {
        var name = new Name({
            prefix: "Dr.",
            givenName: "John",
            middleName: "Michael",
            familyName: "Smith",
            suffix: ", PhD"
        });
        var fmt = new NameFmt({style: "short", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "John Smith";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testENFormatSimpleNameMedium: function(test) {
        var name = new Name({
            prefix: "Dr.",
            givenName: "John",
            middleName: "Michael",
            familyName: "Smith",
            suffix: ", PhD"
        });
        var fmt = new NameFmt({style: "medium", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "John Michael Smith";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testENFormatSimpleNameLong: function(test) {
        var name = new Name({
            prefix: "Dr.",
            givenName: "John",
            middleName: "Michael",
            familyName: "Smith",
            suffix: ", PhD"
        });
        var fmt = new NameFmt({
            style: "long", 
            locale: 'en-US'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Dr. John Michael Smith";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testENFormatSimpleNameFull: function(test) {
        var name = new Name({
            prefix: "Dr.",
            givenName: "John",
            middleName: "Michael",
            familyName: "Smith",
            suffix: ", PhD"
        });
        var fmt = new NameFmt({
            style: "full", 
            locale: 'en-US'
        });
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Dr. John Michael Smith, PhD";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testENFormatComplexNameShort: function(test) {
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Michael Kevin",
            familyName: "von Schmitt",
            suffix: "III"
        });
        var fmt = new NameFmt({style: "short", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "John von Schmitt";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testENFormatComplexNameMedium: function(test) {
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Michael Kevin",
            familyName: "von Schmitt",
            suffix: "III"
        });
        var fmt = new NameFmt({style: "medium", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "John Michael Kevin von Schmitt";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testENFormatComplexNameLong: function(test) {
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Michael Kevin",
            familyName: "von Schmitt",
            suffix: "III"
        });
        var fmt = new NameFmt({style: "long", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Mr. John Michael Kevin von Schmitt";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testENFormatComplexNameFull: function(test) {
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Michael Kevin",
            familyName: "von Schmitt",
            suffix: "III"
        });
        var fmt = new NameFmt({style: "full", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Mr. John Michael Kevin von Schmitt III";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testENFormatCommasInSuffix: function(test) {
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Michael Kevin",
            familyName: "von Schmitt",
            suffix: ", III, PhD"
        });
        var fmt = new NameFmt({style: "full", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Mr. John Michael Kevin von Schmitt, III, PhD";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testENFormatAsianNameShort: function(test) {
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({style: "short", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testENFormatAsianNameMedium: function(test) {
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({style: "medium", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testENFormatAsianNameLong: function(test) {
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({style: "long", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "小地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testENFormatAsianNameFull: function(test) {
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({style: "full", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "小地獸太太";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testENFormatWithNulls: function(test) {
        var name = new Name({
            prefix: null,
            givenName: "John",
            middleName: null,
            familyName: "Doe",
            suffix: null
        });
        
        var fmt = new NameFmt({style: "long", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.expect(2);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "John Doe";
        
        test.equal(formatted, expected);
        test.done();
    }
    
};