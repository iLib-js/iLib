/*
 * testname_gu_IN.js - test the name object in Hindi
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

module.exports.testname_gu = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_gu_IN: function(test) {
        test.expect(2);
        var parsed = new Name("જેઠાલાલ મોદી", {locale: 'gu-IN'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            givenName: "જેઠાલાલ",
            familyName: "મોદી"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseTitle_gu_IN: function(test) {
        test.expect(2);
        var parsed = new Name("જેઠાલાલ મોદી વરિષ્ઠ", {locale: 'gu-IN'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            suffix: "વરિષ્ઠ",
            givenName: "જેઠાલાલ",
            familyName: "મોદી"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseEverything_gu_IN: function(test) {
        test.expect(2);
        var parsed = new Name("મિસ્ટર અને શ્રીમતી મોદી", {locale: 'gu-IN'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "મિસ્ટર અને શ્રીમતી",
            familyName: "મોદી"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testParseprefix_gu_IN: function(test) {
        test.expect(2);
        var parsed = new Name("મિસ્ટર જેઠાલાલ મોદી", {locale: 'gu-IN'});
        test.ok(typeof(parsed) !== "undefined");

        var expected = {
            prefix: "મિસ્ટર",
            givenName: "જેઠાલાલ",
            familyName: "મોદી"
        };

        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */

    testFormatSimpleNameShort_gu_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "જેઠાલાલ",
            familyName: "મોદી"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'gu-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "જેઠાલાલ મોદી";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameMedium_gu_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "જેઠાલાલ",

            familyName: "મોદી"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'gu-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "જેઠાલાલ મોદી";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameLong_gu_IN: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "જેઠાલાલ",

            familyName: "મોદી",
            suffix: "asdf"
        });
        var fmt = new NameFmt({
            style: "long",
            locale: 'gu-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "જેઠાલાલ મોદી";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSurname_gu_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "મિસ્ટર અને શ્રીમતી",

            familyName: "મોદી"
        });
        var fmt = new NameFmt({
            style: "long",
            locale: 'gu-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "મિસ્ટર અને શ્રીમતી મોદી";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameFull_gu_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ગુમાવે છે",
            givenName: "જેઠાલાલ",

            familyName: "મોદી",
            suffix: "વરિષ્ઠ"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'gu-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "ગુમાવે છે જેઠાલાલ મોદી વરિષ્ઠ";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameShort_gu_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ગુમાવે છે",
            givenName: "જેઠાલાલ",
            familyName: "મોદી"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'gu-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "જેઠાલાલ મોદી";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameMedium_gu_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ગુમાવે છે",
            givenName: "જેઠાલાલ",
            familyName: "મોદી"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'gu-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "જેઠાલાલ મોદી";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameLong_gu_IN: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "ગુમાવે છે",
            givenName: "જેઠાલાલ",
            familyName: "મોદી"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'gu-IN'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "ગુમાવે છે જેઠાલાલ મોદી";

        test.equal(formatted, expected);
        test.done();
    }



};
