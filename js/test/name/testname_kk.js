/*
 * testname_kk.js - test the name object in Kazahk
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

module.exports.testname_kk = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_kk: function(test) {
        test.expect(2);
        var parsed = new Name("Джордж Буш", {locale: 'kk-KZ'});
        test.ok(typeof(parsed) !== "undefined");

        var expected =   {
            givenName: "Джордж",
            familyName: "Буш"
        };

        test.contains(parsed, expected);
        test.done();
    },


    testParseSingleNameWithPrefixAndAdjunct_kk: function(test) {
        test.expect(2);
        var parsed = new Name("үлкен Буш", {locale: 'kk-KZ'});
        test.ok(typeof(parsed) !== "undefined");

        var expected =   {
            prefix: "үлкен",
            familyName: "Буш"
        };

        test.contains(parsed, expected);
        test.done();
    },


    testParseTitle_kk: function(test) {
        test.expect(2);
        var parsed = new Name("Джордж Буш 2-ші", {locale: 'kk-KZ'});
        test.ok(typeof(parsed) !== "undefined");

        var expected =    {
            suffix: "2-ші",
            givenName: "Джордж",
            familyName: "Буш"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testParseEverything_kk: function(test) {
        test.expect(2);
        var parsed = new Name("үлкен Джордж Буш 2-ші", {locale: 'kk-KZ'});
        test.ok(typeof(parsed) !== "undefined");

        var expected =    {
            prefix: "үлкен",
            givenName: "Джордж",
            familyName: "Буш",
            suffix: "2-ші"
        };

        test.contains(parsed, expected);
        test.done();
    },


    /*
     * Format Tests
     */

    testFormatSimpleNameShort_kk: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Джордж",
            familyName: "Буш"
        });
        var fmt = new NameFmt({
            style: "short",
            locale: 'kk-KZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Джордж Буш";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameMedium_kk: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Джордж",
            familyName: "Буш"
        });
        var fmt = new NameFmt({
            style: "medium",
            locale: 'kk-KZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Джордж Буш";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameLong_kk: function(test) {
        test.expect(2);
        var name = new Name({
            givenName: "Джордж",
            familyName: "Буш",
            suffix: "2-ші"
        });
        var fmt = new NameFmt({
            style: "long",
            locale: 'kk-KZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "Джордж Буш";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameFull_kk: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "үлкен",
            givenName: "Джордж",
            familyName: "Буш",
            suffix: "2-ші"
        });
        var fmt = new NameFmt({
            style: "full",
            locale: 'kk-KZ'
        });
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        var expected = "үлкен Джордж Буш 2-ші";

        test.equal(formatted, expected);
        test.done();
    }



};
