/*
 * testname_pl_PL.js - test the name object in Polish
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

module.exports.testname_pl = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_pl_PL: function(test) {
        test.expect(2);
        var parsed = new Name("Szymon Askenazy", {locale: 'pl-PL'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Szymon",
            familyName: "Askenazy"
        };

        test.contains(parsed, expected);
        test.done();
    },




    testParseTitle_pl_PL: function(test) {
        test.expect(2);
        var parsed = new Name("Szymon Askenazy emeryturę", {locale: 'pl-PL'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            suffix: "emeryturę",
            givenName: "Szymon",
            familyName: "Askenazy"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseTitleWithFamilyOnly_pl_PL: function(test) {
        test.expect(2);
        var parsed = new Name("Pan. Askenazy", {locale: 'pl-PL'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Pan.",
            familyName: "Askenazy"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseEverything_pl_PL: function(test) {
        test.expect(2);
        var parsed = new Name("Pan. i Pani. Askenazy", {locale: 'pl-PL'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Pan. i Pani.",
            familyName: "Askenazy"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testParseprefix_pl_PL: function(test) {
        test.expect(2);
        var parsed = new Name("Pan. Szymon Askenazy", {locale: 'pl-PL'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Pan.",
            givenName: "Szymon",
            familyName: "Askenazy"
        };

        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */

    testFormatSimpleNameShort_pl_PL: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Szymon",
            familyName: "Askenazy"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'pl-PL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Szymon Askenazy";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameMedium_pl_PL: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Szymon",
            familyName: "Askenazy"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'pl-PL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Szymon Askenazy";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameLong_pl_PL: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Szymon",
            familyName: "Askenazy",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long",
            locale: 'pl-PL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Szymon Askenazy";

        test.equal(formatted, expected);
        test.done();
    },



    testFormatSurname_pl_PL: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Pan. i Pani.",
            familyName: "Askenazy"
        });
        var fmt = new NameFmt({
            style: "long",
            locale: 'pl-PL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Pan. i Pani. Askenazy";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameFull_pl_PL: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "prezydent",
            givenName: "Szymon",
            familyName: "Askenazy",
            suffix: "emeryturę"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'pl-PL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "prezydent Szymon Askenazy emeryturę";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameShort_pl_PL: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "prezydent",
            givenName: "Szymon",
            familyName: "Askenazy"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'pl-PL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Szymon Askenazy";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameMedium_pl_PL: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "prezydent",
            givenName: "Szymon",
            familyName: "Askenazy"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'pl-PL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Szymon Askenazy";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameLong_pl_PL: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "prezydent",
            givenName: "Szymon",
            familyName: "Askenazy"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'pl-PL'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "prezydent Szymon Askenazy";

        test.equal(formatted, expected);
        test.done();
    }



};
