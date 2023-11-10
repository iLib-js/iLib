/*
 * testname_mk_MK.js - test the name object in macedonian
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
    var NameFmt = require("../../lib/NameFmt.js");
}
if (typeof(Name) === "undefined") {
    var Name = require("../../lib/Name.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testname_mk = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseSimpleName_mk_MK: function(test) {
        test.expect(2);
        var parsed = new Name("Љубunша Самарџunќ", {locale: 'mk-MK'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Љубunша",
            familyName: "Самарџunќ"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseSimpleWithHiphen_mk_MK: function(test) {
        test.expect(2);
        var parsed = new Name("Nikola-Kole Angelovski", {locale: 'mk-MK'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Nikola-Kole",
            familyName: "Angelovski"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseTitle_mk_MK: function(test) {
        test.expect(2);
        var parsed = new Name("Љубunша Самарџunќ високи", {locale: 'mk-MK'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            suffix: "високи",
            givenName: "Љубunша",
            familyName: "Самарџunќ"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseTitleWithFamilyOnly_mk_MK: function(test) {
        test.expect(2);
        var parsed = new Name("г-дин Самарџunќ", {locale: 'mk-MK'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "г-дин",
            familyName: "Самарџunќ"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseEverything_mk_MK: function(test) {
        test.expect(2);
        var parsed = new Name("г-дин и г-ѓа Самарџunќ", {locale: 'mk-MK'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "г-дин и г-ѓа",
            familyName: "Самарџunќ"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testParseprefix_mk_MK: function(test) {
        test.expect(2);
        var parsed = new Name("г-дин Љубunша Самарџunќ", {locale: 'mk-MK'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "г-дин",
            givenName: "Љубunша",
            familyName: "Самарџunќ"
        };

        test.contains(parsed, expected);
        test.done();
    },
    testFormatSimpleNameShort_mk_MK: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Љубunша",
            familyName: "Самарџunќ"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'mk-MK'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Љубunша Самарџunќ";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatSimpleNameMedium_mk_MK: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Љубunша",
            familyName: "Самарџunќ"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'mk-MK'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Љубunша Самарџunќ";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatSimpleNameLong_mk_MK: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Љубunша",
            familyName: "Самарџunќ",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long",
            locale: 'mk-MK'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Љубunша Самарџunќ";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatSurname_mk_MK: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "г-дunн и kundze",
            familyName: "Самарџunќ"
        });
        var fmt = new NameFmt({
            style: "long",
            locale: 'mk-MK'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "г-дunн и kundze Самарџunќ";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatSimpleNameFull_mk_MK: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "претседател",
            givenName: "Љубunша",
            familyName: "Самарџunќ",
            suffix: "помладun"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'mk-MK'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "претседател Љубunша Самарџunќ помладun";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatComplexNameShort_mk_MK: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "претседател",
            givenName: "Љубunша",
            familyName: "Самарџunќ"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'mk-MK'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Љубunша Самарџunќ";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatComplexNameMedium_mk_MK: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "претседател",
            givenName: "Љубunша",
            familyName: "Самарџunќ"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'mk-MK'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Љубunша Самарџunќ";

        test.equal(formatted, expected);
        test.done();
    },
    testFormatComplexNameLong_mk_MK: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "претседател",
            givenName: "Љубunша",
            familyName: "Самарџunќ"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'mk-MK'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "претседател Љубunша Самарџunќ";

        test.equal(formatted, expected);
        test.done();
    }
};