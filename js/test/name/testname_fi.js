/*
 * testname_en.js - test the name object in Japanese
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

module.exports.testname_fi = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseSimpleName_fi_FI: function(test) {
        test.expect(2);
        var parsed = new Name("Pihla Viitala Mikkeli", {locale: 'fi-FI'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Pihla",
            middleName : "Viitala",
            familyName: "Mikkeli"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseSimpleName_fi_FI: function(test) {
        test.expect(2);
        var parsed = new Name("Herra Kertu Mikkeli", {locale: 'fi-FI'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix : "Herra",
            givenName: "Kertu",
            familyName: "Mikkeli"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseSingleNameWithPrefixAndAdjunct_fi_FI: function(test) {
        test.expect(2);
        var parsed = new Name("Pihla Viitala Mikkeli nuorempi", {locale: 'fi-FI'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            suffix : "nuorempi",
            givenName: "Pihla",
            middleName : "Viitala",
            familyName: "Mikkeli"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseTitle_fi_FI1: function(test) {
        test.expect(2);
        var parsed = new Name("presidentti Pihla Viitala Mikkeli", {locale: 'fi-FI'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix : "presidentti",
            givenName: "Pihla",
            middleName : "Viitala",
            familyName: "Mikkeli"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseTitle_fi_FI_second: function(test) {
        test.expect(2);
        var parsed = new Name("Herra ja Neiti Mikkeli", {locale: 'fi-FI'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix : "Herra ja Neiti",
            familyName: "Mikkeli"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseTitleWithFamilyOnlyAndAdjunct_fi_FI: function(test) {
        test.expect(2);

        var name = new Name({
            prefix: "presidentti",
            givenName: "Pihla",
            middleName : "Viitala",
            familyName: "Mikkeli",
            suffix: "vanhempi"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'fi-FI'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "presidentti Pihla Viitala Mikkeli vanhempi";

        test.equal(formatted, expected);
        test.done();

    },
    testParseCompoundHonorific_fi_FI: function(test) {
        test.expect(2);
        var parsed = new Name("presidentti Mikkeli", {locale: 'fi-FI'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "presidentti",
            familyName: "Mikkeli"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testFormatSimpleNameShort_fi_FI: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Pihla",
            middleName : "Viitala",
            familyName: "Mikkeli"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'fi-FI'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Pihla Mikkeli";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatSimpleNameMedium_fi_FI: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Pihla",
            middleName : "Viitala",
            familyName: "Mikkeli"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'fi-FI'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Pihla Viitala Mikkeli";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatSimpleNameFull_fi_FI: function(test) {
        test.expect(2);
        var name = new Name({

            givenName: "Pihla",
            middleName : "Viitala",
            familyName: "Mikkeli",
            suffix: "vanhempi"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'fi-FI'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Pihla Viitala Mikkeli vanhempi";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatComplexNameShort_fi_FI: function(test) {
        test.expect(2);
        var name = new Name({
            suffix: "vanhempi",
            givenName: "Pihla",
            middleName : "Viitala",
            familyName: "Mikkeli"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'fi-FI'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Pihla Mikkeli";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatAsianNameMedium_fi_FI: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'fi-FI'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "地獸";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatAsianNameLong_fi_FI: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'fi-FI'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "小地獸太太";

        test.equal(formatted, expected);
        test.done();
    }
};