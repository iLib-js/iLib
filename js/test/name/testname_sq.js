/*
 * testname_sq_Al.js - test the name object in Albanian
 *
 * Copyright © 2013-2015,2017, JEZotiSoft
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

module.exports.testname_sq = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_sq_Al: function(test) {
        test.expect(2);
        var parsed = new Name("James Belushi", {locale: 'sq-Al'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "James",
            familyName: "Belushi"
        };

        test.contains(parsed, expected);
        test.done();
    },





    testParseTitle_sq_Al: function(test) {
        test.expect(2);
        var parsed = new Name("James Belushi njom", {locale: 'sq-Al'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            suffix: "njom",
            givenName: "James",
            familyName: "Belushi"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseTitleWithFamilyOnly_sq_Al: function(test) {
        test.expect(2);
        var parsed = new Name("Zoti. Belushi", {locale: 'sq-Al'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Zoti.",
            familyName: "Belushi"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseEverything_sq_Al: function(test) {
        test.expect(2);
        var parsed = new Name("Zoti. dhe Zonja. Belushi", {locale: 'sq-Al'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Zoti. dhe Zonja.",
            familyName: "Belushi"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testParseprefix_sq_Al: function(test) {
        test.expect(2);
        var parsed = new Name("Zoti. James Belushi", {locale: 'sq-Al'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Zoti.",
            givenName: "James",
            familyName: "Belushi"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testParseprefixAndSuffix_sq_Al: function(test) {
        test.expect(2);
        var parsed = new Name("Zëvendëspresident James Belushi njom", {locale: 'sq-Al'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Zëvendëspresident",
            givenName: "James",
            familyName: "Belushi",
            suffix:"njom"
        };

        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */

    testFormatSimpleNameShort_sq_Al: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "James",
            familyName: "Belushi"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'sq-Al'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "James Belushi";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameMedium_sq_Al: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "James",
            familyName: "Belushi"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'sq-Al'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "James Belushi";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameLong_sq_Al: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "James",
            familyName: "Belushi",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long",
            locale: 'sq-Al'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "James Belushi";

        test.equal(formatted, expected);
        test.done();
    },



    testFormatSurname_sq_Al: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Zoti. dhe Zonja.",
            familyName: "Belushi"
        });
        var fmt = new NameFmt({
            style: "long",
            locale: 'sq-Al'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Zoti. dhe Zonja. Belushi";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameFull_sq_Al: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Guvernator",
            givenName: "James",
            familyName: "Belushi",
            suffix: "njom"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'sq-Al'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Guvernator James Belushi njom";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameShort_sq_Al: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Guvernator",
            givenName: "James",
            familyName: "Belushi"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'sq-Al'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "James Belushi";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameMedium_sq_Al: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Guvernator",
            givenName: "James",
            familyName: "Belushi"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'sq-Al'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "James Belushi";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameLong_sq_Al: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Guvernator",
            givenName: "James",
            familyName: "Belushi"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'sq-Al'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Guvernator James Belushi";

        test.equal(formatted, expected);
        test.done();
    }



};
