/*
 * testname_pt_PT.js - test the name object in Portugese
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

module.exports.testname_pt = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_pt_PT: function(test) {
        test.expect(2);
        var parsed = new Name("Cristiano Ronaldo", {locale: 'pt-PT'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "Cristiano",
            familyName: "Ronaldo"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testParseSimpleNameWithTwoFamilyName_pt_PT: function(test) {
        test.expect(2);
        var parsed = new Name("José Eduardo Tavares Silva", {locale: 'pt-PT'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "José",
            middleName: "Eduardo",
            familyName: "Tavares Silva"
        };

        test.contains(parsed, expected);
        test.done();
    },


    testParseTitle_pt_PT: function(test) {
        test.expect(2);
        var parsed = new Name("Cristiano Ronaldo aposentados", {locale: 'pt-PT'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            suffix: "aposentados",
            givenName: "Cristiano",
            familyName: "Ronaldo"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseTitleWithFamilyOnly_pt_PT: function(test) {
        test.expect(2);
        var parsed = new Name("Senhor Ronaldo", {locale: 'pt-PT'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Senhor",
            familyName: "Ronaldo"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseEverything_pt_PT: function(test) {
        test.expect(2);
        var parsed = new Name("Senhor e Senhora Ronaldo", {locale: 'pt-PT'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Senhor e Senhora",
            familyName: "Ronaldo"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testParseprefix_pt_PT: function(test) {
        test.expect(2);
        var parsed = new Name("Senhor Cristiano Ronaldo", {locale: 'pt-PT'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "Senhor",
            givenName: "Cristiano",
            familyName: "Ronaldo"
        };

        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */

    testFormatSimpleNameShort_pt_PT: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Cristiano",
            familyName: "Ronaldo"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'pt-PT'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Cristiano Ronaldo";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameMedium_pt_PT: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Cristiano",
            familyName: "Ronaldo"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'pt-PT'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Cristiano Ronaldo";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameLong_pt_PT: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Cristiano",
            familyName: "Ronaldo",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long",
            locale: 'pt-PT'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Cristiano Ronaldo";

        test.equal(formatted, expected);
        test.done();
    },



    testFormatSurname_pt_PT: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Senhor e Senhori",
            familyName: "Ronaldo"
        });
        var fmt = new NameFmt({
            style: "long",
            locale: 'pt-PT'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Senhor e Senhori Ronaldo";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameFull_pt_PT: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "presidente",
            givenName: "Cristiano",
            familyName: "Ronaldo",
            suffix: "aposentados"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'pt-PT'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "presidente Cristiano Ronaldo aposentados";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameShort_pt_PT: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "presidente",
            givenName: "Cristiano",
            familyName: "Ronaldo"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'pt-PT'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Cristiano Ronaldo";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameMedium_pt_PT: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "presidente",
            givenName: "Cristiano",
            familyName: "Ronaldo"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'pt-PT'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Cristiano Ronaldo";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameLong_pt_PT: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "presidente",
            givenName: "Cristiano",
            familyName: "Ronaldo"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'pt-PT'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "presidente Cristiano Ronaldo";

        test.equal(formatted, expected);
        test.done();
    }



};
