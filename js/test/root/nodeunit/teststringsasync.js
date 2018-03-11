/*
 * teststringsasync.js - test the String object
 *
 * Copyright © 2018, JEDLSoft
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../.././../lib/ilib.js");
}
if (typeof(NormString) === "undefined") {
    var NormString = require("../.././../lib/NormString.js");
}
if (typeof(Locale) === "undefined") {
    var Locale = require("../.././../lib/Locale.js");
}
if (typeof(IString) === "undefined") {
    var IString = require("../.././../lib/IString.js");
}

module.exports.teststringsasync = {
    testStringLoadPlurals: function(test) {
        test.expect(1);
        IString.loadPlurals(false, undefined, undefined, function() {
            var str = new IString("asdf");

            test.ok(str !== null);
            test.done();
        })
    },

    testStringSetLocale: function(test) {
        test.expect(2);
        var str = new IString("1#first string|2#second string");
        str.setLocale("de-DE", false, undefined, function() {
            test.ok(str !== null);

            test.equal(str.toString(), "1#first string|2#second string");
            test.done();
        })
    },

    testStringFormatChoiceSimpleNoPlurals: function(test) {
        test.expect(2);
        var str = new IString("1#first string|2#second string");

        test.ok(str !== null);

        // should default to English rules
        test.equal(str.formatChoice(1), "first string");
        test.done();
    },

    testStringFormatChoiceSimpleRussian: function(test) {
        test.expect(3);
        var str = new IString("1#first string|few#second string|many#third string");
        str.setLocale("ru-RU", false, undefined, function() {
            test.ok(str !== null);

            test.equal(str.formatChoice(2), "second string");
            test.equal(str.formatChoice(5), "third string");
            test.done();
        });
    },

    testStringFormatChoiceSimpleRussianTwice: function(test) {
        test.expect(4);
        var str = new IString("1#first string|few#second string|many#third string");
        str.setLocale("ru-RU", false, undefined, function() {
            test.ok(str !== null);

            test.equal(str.formatChoice(5), "third string");
            str = new IString("1#single|few#few|many#many");

            // Russian rules should already be loaded. Need to make sure
            // the callback is still called anyways
            str.setLocale("ru-RU", false, undefined, function() {
                test.ok(str !== null);
                test.equal(str.formatChoice(5), "many");
                test.done();
            });
        });
    },

};
