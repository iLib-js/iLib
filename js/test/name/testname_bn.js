/*
 * testname_bn_IN.js - test the name object in Hindi
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

module.exports.testname_bn = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_bn_IN: function(test) {
        test.expect(2);
        var parsed = new Name("শশী ব্যানার্জী", {locale: 'bn-IN'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "শশী",
            familyName: "ব্যানার্জী"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseTitle_bn_IN: function(test) {
        test.expect(2);
        var parsed = new Name("শশী ব্যানার্জী কনিষ্ঠ", {locale: 'bn-IN'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            suffix: "কনিষ্ঠ",
            givenName: "শশী",
            familyName: "ব্যানার্জী"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseTitleWithFamilyOnly_bn_IN: function(test) {
        test.expect(2);
        var parsed = new Name("এমএস ব্যানার্জী", {locale: 'bn-IN'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "এমএস",
            familyName: "ব্যানার্জী"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseEverything_bn_IN: function(test) {
        test.expect(2);
        var parsed = new Name("মিঃ এবং মিসেস ব্যানার্জী", {locale: 'bn-IN'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "মিঃ এবং মিসেস",
            familyName: "ব্যানার্জী"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testParseprefix_bn_IN: function(test) {
        test.expect(2);
        var parsed = new Name("মিঃ শশী ব্যানার্জী", {locale: 'bn-IN'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "মিঃ",
            givenName: "শশী",
            familyName: "ব্যানার্জী"
        };

        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */

    testFormatSimpleNameShort_bn_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "শশী",
            familyName: "ব্যানার্জী"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'bn-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "শশী ব্যানার্জী";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameMedium_bn_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "শশী",

            familyName: "ব্যানার্জী"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'bn-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "শশী ব্যানার্জী";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameLong_bn_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "শশী",

            familyName: "ব্যানার্জী",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long",
            locale: 'bn-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "শশী ব্যানার্জী";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSurname_bn_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "মিঃ এবং মিসেস",

            familyName: "ব্যানার্জী"
        });
        var fmt = new NameFmt({
            style: "long",
            locale: 'bn-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "মিঃ এবং মিসেস ব্যানার্জী";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameFull_bn_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ডাক্তার",
            givenName: "শশী",

            familyName: "ব্যানার্জী",
            suffix: " वरिष्ठ"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'bn-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "ডাক্তার শশী ব্যানার্জী वरिष्ठ";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameShort_bn_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ডাক্তার",
            givenName: "শশী",
            familyName: "ব্যানার্জী"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'bn-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "শশী ব্যানার্জী";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameMedium_bn_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ডাক্তার",
            givenName: "শশী",
            familyName: "ব্যানার্জী"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'bn-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "শশী ব্যানার্জী";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameLong_bn_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ডাক্তার",
            givenName: "শশী",
            familyName: "ব্যানার্জী"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'bn-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "ডাক্তার শশী ব্যানার্জী";

        test.equal(formatted, expected);
        test.done();
    }



};
