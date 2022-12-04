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
    var NameFmt = require("../../lib/NameFmt.js");
}
if (typeof(Name) === "undefined") {
    var Name = require("../../lib/Name.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testname_en = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testENUSParseSimpleName: function(test) {
        test.expect(2);
        var parsed = new Name("John Smith", {locale: 'en-US'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "John",
            familyName: "Smith"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testENUSParseTripleName: function(test) {
        test.expect(2);
        var parsed = new Name("John Michael Smith", {locale: 'en-US'});
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
        test.expect(2);
        var parsed = new Name("John Michael Taylor-Smith", {locale: 'en-US'});
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
        test.expect(2);
        var parsed = new Name("John Michael Kevin Smith", {locale: 'en-US'});
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
        test.expect(2);
        var parsed = new Name("Dr. John Smith", {locale: 'en-US'});
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
        test.expect(2);
        var parsed = new Name("Mr. John Smith", {locale: 'en-US'});
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
        test.expect(2);
        var parsed = new Name("John Smith Jr. Esq.", {locale: 'en-US'});
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
        test.expect(2);
        var parsed = new Name("John Smith, PhD", {locale: 'en-US'});
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
        test.expect(2);
        var parsed = new Name("Pieter van der Meulen", {locale: 'en-US'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Pieter",
            familyName: "van der Meulen"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testENBenStrong: function(test) {
        test.expect(2);
        var parsed = new Name("Ben Strong", {locale: 'en-US'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Ben",
            familyName: "Strong"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testENUSParseEverything: function(test) {
        test.expect(2);
        var parsed = new Name("The Right Honorable Governor General Dr. John Michael Kevin Smith III, DDM", {locale: 'en-US'});
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
        test.expect(2);
        var parsed = new Name("Sting", {locale: 'en-US'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Sting"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testENLastNames: function(test) {
        test.expect(2);
        var parsed = new Name("Dr. Roberts", {locale: 'en-US'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Dr.",
            familyName: "Roberts"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testENCompoundNames: function(test) {
        test.expect(2);
        var parsed = new Name("Mr. and Mrs. Smith", {locale: 'en-US'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Mr. and Mrs.",
            familyName: "Smith"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testENCompoundFamily: function(test) {
        test.expect(2);
        var parsed = new Name("John and Mary Smith", {locale: 'en-US'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "John and Mary",
            familyName: "Smith"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testENByFamily: function(test) {
        test.expect(2);
        var parsed = new Name("The Robertsons", {locale: 'en-US'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "The",
            familyName: "Robertsons"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testENAuxDE: function(test) {
        test.expect(2);
        var parsed = new Name("Herbert von Karajan", {locale: 'en-US'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Herbert",
            familyName: "von Karajan"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testENAuxNL: function(test) {
        test.expect(2);
        var parsed = new Name("Jan van der Heiden", {locale: 'en-US'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Jan",
            familyName: "van der Heiden"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testENAuxFR: function(test) {
        test.expect(2);
        var parsed = new Name("Serges du Maurier", {locale: 'en-US'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Serges",
            familyName: "du Maurier"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testENAuxIT: function(test) {
        test.expect(2);
        var parsed = new Name("Leonardo di Caprio", {locale: 'en-US'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Leonardo",
            familyName: "di Caprio"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testENAuxES: function(test) {
        test.expect(2);
        var parsed = new Name("Jorge de las Cruces", {locale: 'en-US'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Jorge",
            familyName: "de las Cruces"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testENGibberish: function(test) {
        test.expect(2);
        var parsed = new Name("Géê ëī a d øö", {locale: 'en-US'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Géê",
            middleName: "ëī a d",
            familyName: "øö"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testENHKNormal: function(test) {
        test.expect(2);
        var parsed = new Name("Chan Ho Yun", {locale: 'en-HK'});
        test.ok(typeof(parsed) !== "undefined");

        // name in English in Hong Kong are written with Asian order, much like Hungarian
        var expected = {
            givenName: "Ho",
            middleName: "Yun",
            familyName: "Chan"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testENHKWithPrefix: function(test) {
        test.expect(2);
        var parsed = new Name("Dr Chan Ho Yun", {locale: 'en-HK'});
        test.ok(typeof(parsed) !== "undefined");

        // name in English in Hong Kong are written with Asian order, much like Hungarian
        var expected = {
        	prefix: "Dr",
            givenName: "Ho",
            middleName: "Yun",
            familyName: "Chan"
        };

        test.contains(parsed, expected);
        test.done();
    },

    /*
     * Format tests
     */

    testENFormatSimpleNameShort: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Dr.",
            givenName: "John",
            middleName: "Michael",
            familyName: "Smith",
            suffix: ", PhD"
        });
        var fmt = new NameFmt({style: "short", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "John Smith";

        test.equal(formatted, expected);
        test.done();
    },

    testENFormatSimpleNameMedium: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Dr.",
            givenName: "John",
            middleName: "Michael",
            familyName: "Smith",
            suffix: ", PhD"
        });
        var fmt = new NameFmt({style: "medium", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "John Michael Smith";

        test.equal(formatted, expected);
        test.done();
    },

    testENFormatSimpleNameLong: function(test) {
        test.expect(2);
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
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Dr. John Michael Smith";

        test.equal(formatted, expected);
        test.done();
    },

    testENFormatSimpleNameFull: function(test) {
        test.expect(2);
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
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Dr. John Michael Smith, PhD";

        test.equal(formatted, expected);
        test.done();
    },

    testENFormatComplexNameShort: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Michael Kevin",
            familyName: "von Schmitt",
            suffix: "III"
        });
        var fmt = new NameFmt({style: "short", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "John von Schmitt";

        test.equal(formatted, expected);
        test.done();
    },

    testENFormatComplexNameMedium: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Michael Kevin",
            familyName: "von Schmitt",
            suffix: "III"
        });
        var fmt = new NameFmt({style: "medium", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "John Michael Kevin von Schmitt";

        test.equal(formatted, expected);
        test.done();
    },

    testENFormatComplexNameLong: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Michael Kevin",
            familyName: "von Schmitt",
            suffix: "III"
        });
        var fmt = new NameFmt({style: "long", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Mr. John Michael Kevin von Schmitt";

        test.equal(formatted, expected);
        test.done();
    },

    testENFormatComplexNameFull: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Michael Kevin",
            familyName: "von Schmitt",
            suffix: "III"
        });
        var fmt = new NameFmt({style: "full", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Mr. John Michael Kevin von Schmitt III";

        test.equal(formatted, expected);
        test.done();
    },

    testENFormatCommasInSuffix: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Mr.",
            givenName: "John",
            middleName: "Michael Kevin",
            familyName: "von Schmitt",
            suffix: ", III, PhD"
        });
        var fmt = new NameFmt({style: "full", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Mr. John Michael Kevin von Schmitt, III, PhD";

        test.equal(formatted, expected);
        test.done();
    },

    testENFormatAsianNameShort: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({style: "short", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "地獸";

        test.equal(formatted, expected);
        test.done();
    },

    testENFormatAsianNameMedium: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({style: "medium", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "地獸";

        test.equal(formatted, expected);
        test.done();
    },

    testENFormatAsianNameLong: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({style: "long", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "小地獸";

        test.equal(formatted, expected);
        test.done();
    },

    testENFormatAsianNameFull: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({style: "full", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "小地獸太太";

        test.equal(formatted, expected);
        test.done();
    },

    testENFormatWithNulls: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: null,
            givenName: "John",
            middleName: null,
            familyName: "Doe",
            suffix: null
        });

        var fmt = new NameFmt({style: "long", locale: 'en-US'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "John Doe";

        test.equal(formatted, expected);
        test.done();
    },

    testENHKRegular: function(test) {
        test.expect(2);
        var name = new Name({
            honorific: "Dr",
            givenName: "Min Kee",
            middleName: "John",
            familyName: "Fan",
            suffix: null
        });

        var fmt = new NameFmt({style: "short", locale: 'en-HK'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        // English names in Hong Kong are formatted with family name first, much like Hungarian
        var expected = "Fan Min Kee";

        test.equal(formatted, expected);
        test.done();
    },

    testENHKFormatFormalShort: function(test) {
        test.expect(2);
        var name = new Name({
            honorific: "Dr",
            givenName: "Min Kee",
            middleName: "John",
            familyName: "Fan",
            suffix: null
        });

        var fmt = new NameFmt({style: "formal_short", locale: 'en-HK'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Dr Fan";

        test.equal(formatted, expected);
        test.done();
    },

    testENHKFormatFormalLong: function(test) {
        test.expect(2);
        var name = new Name({
            honorific: "Dr",
            givenName: "Min Kee",
            middleName: "John",
            familyName: "Fan",
            suffix: null
        });

        var fmt = new NameFmt({style: "formal_long", locale: 'en-HK'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Dr Fan Min Kee John";

        test.equal(formatted, expected);
        test.done();
    }
};
