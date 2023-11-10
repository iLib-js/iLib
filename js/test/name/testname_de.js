/*
 * testname_de.js - test the name object in German
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

module.exports.testname_de = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseSimpleName_de_DE: function(test) {
        test.expect(2);
        var parsed = new Name("Johan Schmidt", {locale: 'de-DE'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Johan",
            familyName: "Schmidt"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseTripleName_de_DE: function(test) {
        test.expect(2);
        var parsed = new Name("Johan Michael Schmidt", {locale: 'de-DE'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Johan",
            middleName: "Michael",
            familyName: "Schmidt"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseAdjunctNames_de_DE: function(test) {
        test.expect(2);
        var parsed = new Name("Ludwig Klaus von Beethoven", {locale: 'de-DE'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Ludwig",
            middleName: "Klaus",
            familyName: "von Beethoven"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseSingleName_de_DE: function(test) {
        test.expect(2);
        var parsed = new Name("Ludwig", {locale: 'de-DE'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Ludwig",
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseSingleNameWithAdjunct_de_DE: function(test) {
        test.expect(2);
        var parsed = new Name("von Beethoven", {locale: 'de-DE'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "von",
            familyName: "Beethoven"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseSingleNameWithPrefixAndAdjunct_de_DE: function(test) {
        test.expect(2);
        var parsed = new Name("Herr von Beethoven", {locale: 'de-DE'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Herr",
            familyName: "von Beethoven"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseMultiAdjunctNames_de_DE: function(test) {
        test.expect(2);
        var parsed = new Name("Ludwig von den Wiesthal", {locale: 'de-DE'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Ludwig",
            familyName: "von den Wiesthal"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseHypenatedName_de_DE: function(test) {
        test.expect(2);
        var parsed = new Name("Johan Michael Bergische-Schmidt", {locale: 'de-DE'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Johan",
            middleName: "Michael",
            familyName: "Bergische-Schmidt"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseQuadrupleName_de_DE: function(test) {
        test.expect(2);
        var parsed = new Name("Johan Michael Jürgen Schmidt", {locale: 'de-DE'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Johan",
            middleName: "Michael Jürgen",
            familyName: "Schmidt"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseTitle_de_DE: function(test) {
        test.expect(2);
        var parsed = new Name("Herr Dr. Johan Schmidt", {locale: 'de-DE'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Herr Dr.",
            givenName: "Johan",
            familyName: "Schmidt"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseTitleWithFamilyOnly_de_DE: function(test) {
        test.expect(2);
        var parsed = new Name("Herr Schmidt", {locale: 'de-DE'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Herr",
            familyName: "Schmidt"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseTitleWithFamilyOnlyAndAdjunct_de_DE: function(test) {
        test.expect(2);
        var parsed = new Name("Herr von Schmidt", {locale: 'de-DE'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Herr",
            familyName: "von Schmidt"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseHonorific_de_DE: function(test) {
        test.expect(2);
        var parsed = new Name("Fr. Julia Maier", {locale: 'de-DE'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Fr.",
            givenName: "Julia",
            familyName: "Maier"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseEverything_de_DE: function(test) {
        test.expect(2);
        var parsed = new Name("Herr Präsident Johan Michael Jürgen Schmidt III", {locale: 'de-DE'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Herr Präsident",
            givenName: "Johan",
            middleName: "Michael Jürgen",
            familyName: "Schmidt",
            suffix: "III"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseFamily_de_DE: function(test) {
        test.expect(2);
        var parsed = new Name("Die Maiers", {locale: 'de-DE'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Die",
            familyName: "Maiers"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseCompoundHonorific_de_DE: function(test) {
        test.expect(2);
        var parsed = new Name("Herr und Frau Maier", {locale: 'de-DE'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Herr und Frau",
            familyName: "Maier"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testFormatSimpleNameShort_de_DE: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Johan",
            middleName: "Michael",
            familyName: "Schmidt"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'de-DE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Johan Schmidt";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatSimpleNameMedium_de_DE: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Johan",
            middleName: "Michael",
            familyName: "Schmidt"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'de-DE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Johan Michael Schmidt";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatSimpleNameLong_de_DE: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Johan",
            middleName: "Michael",
            familyName: "Schmidt",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long",
            locale: 'de-DE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Johan Michael Schmidt";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatSimpleNameFull_de_DE: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Herr Doktor",
            givenName: "Johan",
            middleName: "Michael",
            familyName: "Schmidt",
            suffix: " MdB"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'de-DE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Herr Doktor Johan Michael Schmidt MdB";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatComplexNameShort_de_DE: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Herr Doktor",
            givenName: "Johan",
            middleName: "Michael Uwe",
            familyName: "von Schmidt",
            suffix: "III"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'de-DE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Johan von Schmidt";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatComplexNameMedium_de_DE: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Herr Doktor",
            givenName: "Johan",
            middleName: "Michael Uwe",
            familyName: "von Schmidt",
            suffix: "III"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'de-DE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Johan Michael Uwe von Schmidt";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatComplexNameLong_de_DE: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Herr Doktor",
            givenName: "Johan",
            middleName: "Michael Uwe",
            familyName: "von Schmidt",
            suffix: "III"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'de-DE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Herr Doktor Johan Michael Uwe von Schmidt III";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatAsianNameShort_de_DE: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'de-DE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "地獸";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatAsianNameMedium_de_DE: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'de-DE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "地獸";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatAsianNameLong_de_DE: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'de-DE'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "小地獸太太";

        test.equal(formatted, expected);
        test.done();
    }
};
