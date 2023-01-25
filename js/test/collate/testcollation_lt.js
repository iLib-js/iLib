/*
 * testcollation_lt.js - test the Collator object in Lithuanian
 *
 * Copyright © 2014-2015,2017, JEDLSoft
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

if (typeof(Collator) === "undefined") {
    var Collator = require("../../lib/Collator.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testcollation_lt = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJSCollatorQuatCD_lt: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "lt-LT",
            useNative: false,
            sensitivity: "quaternary"
        });

        test.ok(typeof(col) !== "undefined");

        // C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
        // c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
        test.ok("C < Č",  col.compare("C", "Č") < 0);
        test.ok("Č < D",  col.compare("Č", "D") < 0);
        test.ok("c < č", col.compare("c", "č") < 0);
        test.ok("č < d",  col.compare("č", "d") < 0);
        test.done();
    },

    testJSCollatorQuatEF_lt: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "lt-LT",
            useNative: false,
            sensitivity: "quaternary"
        });

        test.ok(typeof(col) !== "undefined");

        // C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
        // c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
        test.ok("E < Ę",  col.compare("E", "Ę") < 0);
        test.ok("Ę < Ė",  col.compare("Ę", "Ė") < 0);
        test.ok("Ė < F",  col.compare("Ė", "F") < 0);
        test.ok("e < ę",  col.compare("e", "ę") < 0);
        test.ok("ę < ė", col.compare("ę", "ė") < 0);
        test.ok("ė < f",  col.compare("ė", "f") < 0);
        test.done();
    },

    testJSCollatorQuatIJ_lt: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "lt-LT",
            useNative: false,
            sensitivity: "quaternary"
        });

        test.ok(typeof(col) !== "undefined");

        // C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
        // c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
        test.ok("I < Į",  col.compare("I", "Į") < 0);
        test.ok("Į < Y",  col.compare("Į", "Y") < 0);
        test.ok("Y < J",  col.compare("Y", "J") < 0);
        test.ok("i < į",  col.compare("i", "į") < 0);
        test.ok("į < y", col.compare("į", "y") < 0);
        test.ok("y < j",  col.compare("y", "j") < 0);
        test.done();
    },

    testJSCollatorQuatST_lt: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "lt-LT",
            useNative: false,
            sensitivity: "quaternary"
        });

        test.ok(typeof(col) !== "undefined");

        // C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
        // c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
        test.ok("S < Š",  col.compare("S", "Š") < 0);
        test.ok("Š < T",  col.compare("Š", "T") < 0);
        test.ok("s < š", col.compare("s", "š") < 0);
        test.ok("š < t",  col.compare("š", "t") < 0);
        test.done();
    },

    testJSCollatorQuatUV_lt: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "lt-LT",
            useNative: false,
            sensitivity: "quaternary"
        });

        test.ok(typeof(col) !== "undefined");

        // C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
        // c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
        test.ok("U < Ų",  col.compare("U", "Ų") < 0);
        test.ok("Ų < Ū",  col.compare("Ų", "Ū") < 0);
        test.ok("Ū < V",  col.compare("Ū", "V") < 0);
        test.ok("u < ų",  col.compare("u", "ų") < 0);
        test.ok("ų < ū", col.compare("ų", "ū") < 0);
        test.ok("ū < v",  col.compare("ū", "v") < 0);
        test.done();
    },

    testJSCollatorQuatZ_lt: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "lt-LT",
            useNative: false,
            sensitivity: "quaternary"
        });

        test.ok(typeof(col) !== "undefined");

        // C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
        // c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
        test.ok("Z < Ž",  col.compare("Z", "Ž") < 0);
        test.ok("z < ž",  col.compare("z", "ž") < 0);
        test.done();
    },

    // differences in accented characters should be primary differences

    testJSCollatorPrimaryCD_lt: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "lt-LT",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
        // c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
        test.ok("C < Č",  col.compare("C", "Č") < 0);
        test.ok("Č < D",  col.compare("Č", "D") < 0);
        test.ok("c < č", col.compare("c", "č") < 0);
        test.ok("č < d",  col.compare("č", "d") < 0);
        test.done();
    },

    testJSCollatorPrimaryEF_lt: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "lt-LT",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
        // c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
        test.ok("E < Ę",  col.compare("E", "Ę") < 0);
        test.ok("Ę < Ė",  col.compare("Ę", "Ė") < 0);
        test.ok("Ė < F",  col.compare("Ė", "F") < 0);
        test.ok("e < ę",  col.compare("e", "ę") < 0);
        test.ok("ę < ė", col.compare("ę", "ė") < 0);
        test.ok("ė < f",  col.compare("ė", "f") < 0);
        test.done();
    },

    testJSCollatorPrimaryIJ_lt: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "lt-LT",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
        // c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
        test.ok("I < Į",  col.compare("I", "Į") < 0);
        test.ok("Į < Y",  col.compare("Į", "Y") < 0);
        test.ok("Y < J",  col.compare("Y", "J") < 0);
        test.ok("i < į",  col.compare("i", "į") < 0);
        test.ok("į < y", col.compare("į", "y") < 0);
        test.ok("y < j",  col.compare("y", "j") < 0);
        test.done();
    },

    testJSCollatorPrimaryST_lt: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "lt-LT",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
        // c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
        test.ok("S < Š",  col.compare("S", "Š") < 0);
        test.ok("Š < T",  col.compare("Š", "T") < 0);
        test.ok("s < š", col.compare("s", "š") < 0);
        test.ok("š < t",  col.compare("š", "t") < 0);
        test.done();
    },

    testJSCollatorPrimaryUV_lt: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "lt-LT",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
        // c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
        test.ok("U < Ų",  col.compare("U", "Ų") < 0);
        test.ok("Ų < Ū",  col.compare("Ų", "Ū") < 0);
        test.ok("Ū < V",  col.compare("Ū", "V") < 0);
        test.ok("u < ų",  col.compare("u", "ų") < 0);
        test.ok("ų < ū", col.compare("ų", "ū") < 0);
        test.ok("ū < v",  col.compare("ū", "v") < 0);
        test.done();
    },

    testJSCollatorPrimaryZ_lt: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "lt-LT",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
        // c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
        test.ok("Z < Ž",  col.compare("Z", "Ž") < 0);
        test.ok("z < ž",  col.compare("z", "ž") < 0);
        test.done();
    },

    testCollatorNativeCase_lt: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "lt-LT",
            useNative: false,
            sensitivity: "case",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");

        var input = [
               "eĖ",
            "ua",
            "ca",
            "Ža",
            "ųa",
            "Ūa",
            "Za",
            "Št",
            "ža",
            "ūa",
            "Va",
            "ča",
            "Da",
            "ee",
            "eę",
            "eF",
            "yo",
            "Tt",
            "Įo",
            "za",
            "Ua",
            "io",
            "va",
            "įo",
             "Ca",
            "jo",
            "eĘ",
            "Ča",
            "St",
            "da",
            "ef",
            "Yo",
            "eE",
            "Ųa",
            "št",
            "Jo",
            "tt",
            "st",
            "eė",
            "Io"
        ];

        input.sort(col.getComparator());

        // C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
        // c č d e ę ė f .. i į y j .. s š t u ų ū v z ž

        var expected = [
            "Ca",
            "ca",
            "Ča",
            "ča",
            "Da",
            "da",
            "eE",
            "ee",
            "eĘ",
            "eę",
            "eĖ",
            "eė",
            "eF",
            "ef",
            "Io",
            "io",
            "Įo",
            "įo",
            "Yo",
            "yo",
            "Jo",
            "jo",
            "St",
            "st",
            "Št",
            "št",
            "Tt",
            "tt",
            "Ua",
            "ua",
            "Ųa",
            "ųa",
            "Ūa",
            "ūa",
            "Va",
            "va",
            "Za",
            "za",
            "Ža",
            "ža"
        ];

        test.deepEqual(input, expected);
        test.done();
    },

    testCollatorNativeVariant_lt: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "lt-LT",
            useNative: false,
            sensitivity: "variant",
            upperFirst: true,
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");

        var input = [
            "eĖ",
            "ua",
            "ca",
            "št",
            "ūa",
            "Ža",
            "ųa",
            "Ūa",
            "Za",
            "Št",
            "ža",
            "ūa",
            "Va",
            "ča",
            "Da",
            "ee",
            "eę",
            "Ža",
            "eF",
            "yo",
            "Ūa",
            "Tt",
            "Įo",
            "za",
            "Št",
            "Ua",
            "Ča",
            "io",
            "va",
            "įo",
            "Ca",
            "jo",
            "eĘ",
            "Ča",
            "ža",
            "St",
            "da",
            "ef",
            "Ųa",
            "Yo",
            "eE",
            "Ųa",
            "št",
            "Jo",
            "tt",
            "st",
            "ča",
            "eė",
            "Io"
        ];

        input.sort(col.getComparator());

        var expected = [
            "Ca",
            "ca",
            "Ča",
            "Ča",
            "ča",
            "ča",
            "Da",
            "da",
            "eE",
            "ee",
            "eĘ",
            "eę",
            "eĖ",
            "eė",
            "eF",
            "ef",
            "Io",
            "io",
            "Įo",
            "įo",
            "Yo",
            "yo",
            "Jo",
            "jo",
            "St",
            "st",
            "Št",
            "Št",
            "št",
            "št",
            "Tt",
            "tt",
            "Ua",
            "ua",
            "Ųa",
            "Ųa",
            "ųa",
            "Ūa",
            "Ūa",
            "ūa",
            "ūa",
            "Va",
            "va",
            "Za",
            "za",
            "Ža",
            "Ža",
            "ža",
            "ža"
        ];

        test.deepEqual(input, expected);
        test.done();
    }
};
