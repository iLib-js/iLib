/*
 * testname_nb_NO.js - test the name object in Norweign
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

module.exports.testname_nb = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_nb_NO: function(test) {
        test.expect(2);
        var parsed = new Name("Maria Bonnevie", {locale: 'nb-NO'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Maria",
            familyName: "Bonnevie"
        };

        test.contains(parsed, expected);
        test.done();
    },


    testParseTitle_nb_NO: function(test) {
        test.expect(2);
        var parsed = new Name("Maria Bonnevie pensjonert", {locale: 'nb-NO'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            suffix: "pensjonert",
            givenName: "Maria",
            familyName: "Bonnevie"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseTitleWithFamilyOnly_nb_NO: function(test) {
        test.expect(2);
        var parsed = new Name("Mrs. Bonnevie", {locale: 'nb-NO'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Mrs.",
            familyName: "Bonnevie"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseEverything_nb_NO: function(test) {
        test.expect(2);
        var parsed = new Name("Mr. og Mrs. Bonnevie", {locale: 'nb-NO'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Mr. og Mrs.",
            familyName: "Bonnevie"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testParseprefix_nb_NO: function(test) {
        test.expect(2);
        var parsed = new Name("Mrs. Maria Bonnevie", {locale: 'nb-NO'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Mrs.",
            givenName: "Maria",
            familyName: "Bonnevie"
        };

        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */

    testFormatSimpleNameShort_nb_NO: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Maria",
            familyName: "Bonnevie"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'nb-NO'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Maria Bonnevie";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameMedium_nb_NO: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Maria",
            familyName: "Bonnevie"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'nb-NO'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Maria Bonnevie";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameLong_nb_NO: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Maria",
            familyName: "Bonnevie",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long",
            locale: 'nb-NO'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Maria Bonnevie";

        test.equal(formatted, expected);
        test.done();
    },



    testFormatSurname_nb_NO: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Mr. og Mrs.",
            familyName: "Bonnevie"
        });
        var fmt = new NameFmt({
            style: "long",
            locale: 'nb-NO'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Mr. og Mrs. Bonnevie";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameFull_nb_NO: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "vice president",
            givenName: "Maria",
            familyName: "Bonnevie",
            suffix: "pensjonert"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'nb-NO'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "vice president Maria Bonnevie pensjonert";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameShort_nb_NO: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "vice president",
            givenName: "Maria",
            familyName: "Bonnevie"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'nb-NO'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Maria Bonnevie";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameMedium_nb_NO: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "vice president",
            givenName: "Maria",
            familyName: "Bonnevie"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'nb-NO'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Maria Bonnevie";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameLong_nb_NO: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "vice president",
            givenName: "Maria",
            familyName: "Bonnevie"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'nb-NO'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "vice president Maria Bonnevie";

        test.equal(formatted, expected);
        test.done();
    }



};
