/*
 * testcollation.js - test the Collator object
 *
 * Copyright © 2013-2015, 2017-2018, JEDLSoft
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
    var ilib = require("../../lib/ilib.js");
}
if (typeof(ElementIterator) === "undefined") {
    var ElementIterator = require("../../lib/ElementIterator.js");
}
if (typeof(Collator) === "undefined") {
    var Collator = require("../../lib/Collator.js");
}
if (typeof(CodePointSource) === "undefined") {
    var CodePointSource = require("../../lib/CodePointSource.js");
}

module.exports.testcollation = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testCodePointSourceConstructor: function(test) {
        test.expect(1);
        var cps = new CodePointSource("abc");

        test.ok(typeof(cps) !== "undefined");
        test.done();
    },
    testCodePointSourcePeek4: function(test) {
        test.expect(2);
        var cps = new CodePointSource("abcdefghi");

        test.ok(typeof(cps) !== "undefined");

        test.equal(cps.peek(4), "abcd");
        test.done();
    },
    testCodePointSourcePeek3: function(test) {
        test.expect(2);
        var cps = new CodePointSource("abcdefghi");

        test.ok(typeof(cps) !== "undefined");

        test.equal(cps.peek(3), "abc");
        test.done();
    },
    testCodePointSourcePeek2: function(test) {
        test.expect(2);
        var cps = new CodePointSource("abcdefghi");

        test.ok(typeof(cps) !== "undefined");

        test.equal(cps.peek(2), "ab");
        test.done();
    },
    testCodePointSourcePeek1: function(test) {
        test.expect(2);
        var cps = new CodePointSource("abcdefghi");

        test.ok(typeof(cps) !== "undefined");

        test.equal(cps.peek(1), "a");
        test.done();
    },
    testCodePointSourceConsume1: function(test) {
        test.expect(3);
        var cps = new CodePointSource("abcdefghi");

        test.ok(typeof(cps) !== "undefined");

        test.equal(cps.peek(1), "a");
        cps.consume(1);
        test.equal(cps.peek(1), "b");
        test.done();
    },
    testCodePointSourceConsume2: function(test) {
        test.expect(3);
        var cps = new CodePointSource("abcdefghi");

        test.ok(typeof(cps) !== "undefined");

        test.equal(cps.peek(2), "ab");
        cps.consume(2);
        test.equal(cps.peek(2), "cd");
        test.done();
    },
    testCodePointSourceConsume3: function(test) {
        test.expect(3);
        var cps = new CodePointSource("abcdefghi");

        test.ok(typeof(cps) !== "undefined");

        test.equal(cps.peek(3), "abc");
        cps.consume(3);
        test.equal(cps.peek(3), "def");
        test.done();
    },
    testCodePointSourceConsume4: function(test) {
        test.expect(3);
        var cps = new CodePointSource("abcdefghi");

        test.ok(typeof(cps) !== "undefined");

        test.equal(cps.peek(4), "abcd");
        cps.consume(4);
        test.equal(cps.peek(4), "efgh");
        test.done();
    },
    testCodePointSourcePeekWithSurrogates: function(test) {
        test.expect(2);
        var cps = new CodePointSource("a\uD800\uDF02b\uD800\uDC00");

        test.ok(typeof(cps) !== "undefined");

        test.equal(cps.peek(2), "a\uD800\uDF02");
        test.done();
    },
    testCodePointSourceConsumeWithSurrogates: function(test) {
        test.expect(3);
        var cps = new CodePointSource("a\uD800\uDF02b\uD800\uDC00");

        test.ok(typeof(cps) !== "undefined");

        test.equal(cps.peek(2), "a\uD800\uDF02");
        cps.consume(2);
        test.equal(cps.peek(2), "b\uD800\uDC00");
        test.done();
    },
    testCodePointSourcePeekWithCombiningAccents: function(test) {
        test.expect(2);
        // this is A with 2 combining accents
        var cps = new CodePointSource("aẬa");

        test.ok(typeof(cps) !== "undefined");

        // this A is precomposed with one of the accents and is combined
        // with the other
        test.equal(cps.peek(3), "aẬa");
        test.done();
    },
    testCodePointSourceConsumeWithCombiningAccents: function(test) {
        test.expect(3);
        // this is A with 2 combining accents
        var cps = new CodePointSource("aẬaẬaa");

        test.ok(typeof(cps) !== "undefined");

        // this A is precomposed with one of the accents and is combined
        // with the other
        test.equal(cps.peek(3), "aẬa");
        cps.consume(3);
        test.equal(cps.peek(3), "Ậaa");
        test.done();
    },
    testCodePointSourcePeekNotEnough: function(test) {
        test.expect(2);
        var cps = new CodePointSource("abc");

        test.ok(typeof(cps) !== "undefined");

        test.ok(typeof(cps.peek(4)) === "undefined");
        test.done();
    },
    testCodePointSourcePeekJustEnough: function(test) {
        test.expect(2);
        var cps = new CodePointSource("abc");

        test.ok(typeof(cps) !== "undefined");

        test.equal(cps.peek(3), "abc");
        test.done();
    },
    testCodePointSourceIterateToEmpty: function(test) {
        test.expect(11);
        var cps = new CodePointSource("abcdef");

        test.ok(typeof(cps) !== "undefined");
        test.equal(cps.peek(3), "abc");
        cps.consume(3);
        test.equal(cps.peek(2), "de");
        cps.consume(2);
        test.ok(typeof(cps.peek(4)) === "undefined");
        test.ok(typeof(cps.peek(3)) === "undefined");
        test.ok(typeof(cps.peek(2)) === "undefined");
        test.equal(cps.peek(1), "f");
        cps.consume(1);
        test.ok(typeof(cps.peek(4)) === "undefined");
        test.ok(typeof(cps.peek(3)) === "undefined");
        test.ok(typeof(cps.peek(2)) === "undefined");
        test.ok(typeof(cps.peek(1)) === "undefined");
        test.done();
    },
    testCodePointSourcePeekZero: function(test) {
        test.expect(2);
        var cps = new CodePointSource("abc");

        test.ok(typeof(cps) !== "undefined");

        test.ok(typeof(cps.peek(0)) === "undefined");
        test.done();
    },
    testCodePointSourceConsumeZero: function(test) {
        test.expect(3);
        var cps = new CodePointSource("abc");

        test.ok(typeof(cps) !== "undefined");

        test.equal(cps.peek(1), "a");
        cps.consume(0);
        test.equal(cps.peek(1), "a");
        test.done();
    },
    testCodePointSourceConsumeAllRemaining: function(test) {
        test.expect(6);
        var cps = new CodePointSource("abc");

        test.ok(typeof(cps) !== "undefined");

        test.equal(cps.peek(3), "abc");
        cps.consume(4);
        test.ok(typeof(cps.peek(4)) === "undefined");
        test.ok(typeof(cps.peek(3)) === "undefined");
        test.ok(typeof(cps.peek(2)) === "undefined");
        test.ok(typeof(cps.peek(1)) === "undefined");
        test.done();
    },
    testCodePointSourceConsumeWithoutPeek: function(test) {
        test.expect(2);
        var cps = new CodePointSource("abcdef");

        test.ok(typeof(cps) !== "undefined");
        cps.consume(3);
        test.equal(cps.peek(3), "def");
        test.done();
    },
    testElementIteratorConstructor: function(test) {
        test.expect(1);
        var cps = new CodePointSource("abcdef");
        var map = {
                "a": [0],
                "b": [1],
                "c": [2],
                "d": [3],
                "e": [4],
                "f": [5]
        };
        var ei = new ElementIterator(cps, map, 3);

        test.ok(typeof(ei) !== "undefined");
        test.done();
    },
    testElementIteratorHasNext: function(test) {
        test.expect(2);
        var cps = new CodePointSource("abcdef");
        var map = {
                "a": [0],
                "b": [1],
                "c": [2],
                "d": [3],
                "e": [4],
                "f": [5]
        };
        var ei = new ElementIterator(cps, map, 3);
        test.ok(typeof(ei) !== "undefined");

        test.ok(ei.hasNext());
        test.done();
    },
    testElementIteratorHasNextStringDone: function(test) {
        test.expect(2);
        var cps = new CodePointSource("abc");
        var map = {
                "a": [0],
                "b": [1],
                "c": [2],
                "d": [3],
                "e": [4],
                "f": [5]
        };
        cps.consume(3);
        var ei = new ElementIterator(cps, map, 3);
        test.ok(typeof(ei) !== "undefined");

        test.ok(!ei.hasNext());
        test.done();
    },
    testElementIteratorNext: function(test) {
        test.expect(8);
        var cps = new CodePointSource("abc");
        var map = {
                "a": [0],
                "b": [1],
                "c": [2],
                "d": [3],
                "e": [4],
                "f": [5]
        };
        var ei = new ElementIterator(cps, map, 3);
        test.ok(typeof(ei) !== "undefined");

        test.ok(ei.hasNext());
        test.equal(ei.next(), 0);
        test.ok(ei.hasNext());
        test.equal(ei.next(), 1);
        test.ok(ei.hasNext());
        test.equal(ei.next(), 2);
        test.ok(!ei.hasNext());
        test.done();
    },
    testElementIteratorNextExhaustCodePoints: function(test) {
        test.expect(7);
        var cps = new CodePointSource("abc");
        var map = {
                "a": [0],
                "b": [1],
                "c": [2],
                "d": [3],
                "e": [4],
                "f": [5]
        };
        var ei = new ElementIterator(cps, map, 3);
        test.ok(typeof(ei) !== "undefined");

        test.ok(ei.hasNext());
        test.equal(ei.next(), 0);
        test.equal(ei.next(), 1);
        test.equal(ei.next(), 2);
        test.ok(!ei.hasNext());
        test.ok(typeof(ei.next()) === "undefined");
        test.done();
    },
    testElementIteratorExpansions: function(test) {
        test.expect(9);
        var cps = new CodePointSource("abc");
        var map = {
                "a": [0,1],
                "b": [1],
                "c": [2,1],
                "d": [3],
                "e": [4],
                "f": [5]
        };
        var ei = new ElementIterator(cps, map, 3);
        test.ok(typeof(ei) !== "undefined");

        test.ok(ei.hasNext());
        test.equal(ei.next(), 0);
        test.equal(ei.next(), 1);
        test.equal(ei.next(), 1);
        test.equal(ei.next(), 2);
        test.equal(ei.next(), 1);
        test.ok(!ei.hasNext());
        test.ok(typeof(ei.next()) === "undefined");
        test.done();
    },
    testElementIteratorContractions: function(test) {
        test.expect(6);
        var cps = new CodePointSource("abc");
        var map = {
                "ab": [0],
                "b": [1],  // ab should take precendence over plain b
                "c": [2],
                "d": [3],
                "e": [4],
                "f": [5]
        };
        var ei = new ElementIterator(cps, map, 3);
        test.ok(typeof(ei) !== "undefined");

        test.ok(ei.hasNext());
        test.equal(ei.next(), 0);
        test.equal(ei.next(), 2);
        test.ok(!ei.hasNext());
        test.ok(typeof(ei.next()) === "undefined");
        test.done();
    },
    testElementIteratorContractions2: function(test) {
        test.expect(11);
        var cps = new CodePointSource("aẬbAÂaa");
        var map = {
                "a": [0],
                "A": [4],
                "Â": [5],
                "Ậ": [6],  // actually an A with circumflex character plus a combining dot blow character
                "b": [8],
                "c": [16],
                "d": [24],
                "e": [32],
                "f": [40]
        };
        var ei = new ElementIterator(cps, map, 6);
        test.ok(typeof(ei) !== "undefined");

        test.ok(ei.hasNext());
        test.equal(ei.next(), 0);
        test.equal(ei.next(), 6);
        test.equal(ei.next(), 8);
        test.equal(ei.next(), 4);
        test.equal(ei.next(), 5);
        test.equal(ei.next(), 0);
        test.equal(ei.next(), 0);
        test.ok(!ei.hasNext());
        test.ok(typeof(ei.next()) === "undefined");
        test.done();
    },
    testElementIteratorHasNextEmptyString: function(test) {
        test.expect(2);
        var cps = new CodePointSource("");
        var map = {
                "a": [0],
                "b": [1],
                "c": [2],
                "d": [3],
                "e": [4],
                "f": [5]
        };
        var ei = new ElementIterator(cps, map, 3);
        test.ok(typeof(ei) !== "undefined");

        test.ok(!ei.hasNext());
        test.done();
    },
    testElementIteratorNextEmptyString: function(test) {
        test.expect(2);
        var cps = new CodePointSource("");
        var map = {
                "a": [0],
                "b": [1],
                "c": [2],
                "d": [3],
                "e": [4],
                "f": [5]
        };
        var ei = new ElementIterator(cps, map, 3);
        test.ok(typeof(ei) !== "undefined");

        test.ok(typeof(ei.next()) === "undefined");
        test.done();
    },
    testElementIteratorNonMapCharacter: function(test) {
        test.expect(8);
        var cps = new CodePointSource("abcq");
        var map = {
                "a": [0],
                "b": [1],
                "c": [2],
                "d": [3],
                "e": [4],
                "f": [5]
        };
        var ei = new ElementIterator(cps, map, 3);
        test.ok(typeof(ei) !== "undefined");

        test.ok(ei.hasNext());
        test.equal(ei.next(), 0);
        test.equal(ei.next(), 1);
        test.equal(ei.next(), 2);
        test.equal(ei.next(), 904);
        test.ok(!ei.hasNext());
        test.ok(typeof(ei.next()) === "undefined");
        test.done();
    },



    testCollatorConstructorNative: function(test) {
        test.expect(1);
        var col = new Collator();

        test.ok(typeof(col) !== "undefined");
        test.done();
    },
    testCollatorDefaultNative: function(test) {
        test.expect(5);
        var col = new Collator();

        test.ok(typeof(col) !== "undefined");

        // should compare in English
        test.equal(0, col.compare("string", "string"), "equality");
        test.ok("a < b", col.compare("a", "b") < 0);
        test.ok("b < c", col.compare("b", "c") < 0);
        test.ok("c < z", col.compare("c", "z") < 0);
        test.done();
    },
    testCollatorDefaultCase: function(test) {
        test.expect(5);
        var col = new Collator();

        test.ok(typeof(col) !== "undefined");


        // netscape and ie do not work properly on some platforms
        var browser = ilib._getBrowser();
        if ((browser === "firefox" &&
                navigator &&
                navigator.userAgent &&
                navigator.userAgent.indexOf("Android")) ||
            browser === "ie" || browser === "Edge" || browser === "iOS") {
            // should compare lower-case first within a base character
            test.ok("a < A", col.compare("a", "A") < 0);
            test.ok("b < B", col.compare("b", "B") < 0);
            test.ok("a < Z", col.compare("a", "Z") < 0);
            test.ok("a < Á", col.compare("a", "Á") < 0);
        } else {
            // should compare upper-case first within a base character
            test.ok("A < a", col.compare("A", "a") < 0);
            test.ok("B < b", col.compare("B", "b") < 0);
            test.ok("a < Z", col.compare("a", "Z") < 0);
            test.ok("Á < a", col.compare("A", "a") < 0); // accent is more important than case
        }
        test.done();
    },
    testCollatorGetComparator: function(test) {
        test.expect(3);
        var col = new Collator();

        test.ok(typeof(col) !== "undefined");

        // should compare in English
        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.equal(typeof(func), "function");
        test.done();
    },
    testCollatorGetComparatorWorks: function(test) {
        test.expect(6);
        var col = new Collator();

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");

        // should compare in English
        test.equal(0, func("string", "string"), "equality");
        test.ok("a < b", func("a", "b") < 0);
        test.ok("b < c", func("b", "c") < 0);
        test.ok("c < z", func("c", "z") < 0);
        test.done();
    },
    testCollatorGetComparatorWorksWithCase: function(test) {
        test.expect(6);
        var col = new Collator();

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");

        // netscape and ie do not work properly
        var browser = ilib._getBrowser();
        if ((browser === "firefox" &&
                navigator &&
                navigator.userAgent &&
                navigator.userAgent.indexOf("Android")) ||
            browser === "ie" || browser === "Edge" || browser === "iOS") {
            // should compare lower-case first within a base character
            test.ok("a < A", func("a", "A") < 0);
            test.ok("b < B", func("b", "B") < 0);
            test.ok("a < Z", func("a", "Z") < 0);
            test.ok("a < Á", func("a", "Á") < 0);
        } else {
            // should compare upper-case first
            test.ok("A < a", func("A", "a") < 0);
            test.ok("B < b", func("B", "b") < 0);
            test.ok("a < Z", func("a", "Z") < 0);
            test.ok("Á < a", func("A", "a") < 0); // accent is more important than case
        }
        test.done();
    },
    testCollatorConstructorJS: function(test) {
        test.expect(1);
        var col = new Collator({useNative: false});

        test.ok(typeof(col) !== "undefined");
        test.done();
    },
    testCollatorDefaultJS: function(test) {
        test.expect(5);
        var col = new Collator({useNative: false});

        test.ok(typeof(col) !== "undefined");

        // should compare in English
        test.equal(0, col.compare("string", "string"), "equality");
        test.ok("a < b", col.compare("a", "b") < 0);
        test.ok("b < c", col.compare("b", "c") < 0);
        test.ok("c < z", col.compare("c", "z") < 0);
        test.done();
    },
    testCollatorDefaultCaseJS: function(test) {
        test.expect(5);
        var col = new Collator({useNative: false});

        test.ok(typeof(col) !== "undefined");

        // should compare upper-case first within a base character
        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("B < b", col.compare("B", "b") < 0);
        test.ok("a < Z", col.compare("a", "Z") < 0);
        test.ok("Á < a", col.compare("A", "a") < 0);
        test.done();
    },
    testCollatorGetComparatorJS: function(test) {
        test.expect(3);
        var col = new Collator({useNative: false});

        test.ok(typeof(col) !== "undefined");

        // should compare in English
        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.equal(typeof(func), "function");
        test.done();
    },
    testCollatorGetComparatorWorksJS: function(test) {
        test.expect(6);
        var col = new Collator({useNative: false});

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");

        // should compare in English
        test.equal(0, func("string", "string"), "equality");
        test.ok("a < b", func("a", "b") < 0);
        test.ok("b < c", func("b", "c") < 0);
        test.ok("c < z", func("c", "z") < 0);
        test.done();
    },
    testCollatorGetComparatorWorksWithCaseJS: function(test) {
        test.expect(6);
        var col = new Collator({useNative: false});

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");

        // should compare upper-case first
        test.ok("A < a", func("A", "a") < 0);
        test.ok("B < b", func("B", "b") < 0);
        test.ok("a < Z", func("a", "Z") < 0);
        test.ok("Á < a", func("A", "a") < 0);
        test.done();
    },
    testCollatorGetSortKeyNative: function(test) {
        if (typeof(Intl) === 'undefined' && Intl) {
            test.done();
            return;
        }
        var col = new Collator();

        test.expect(2);
        test.ok(typeof(col) !== "undefined");

        // no sort key available when using native...
        test.equal(col.sortKey("string"), "string");
        test.done();
    },
    testCollatorGetSortKeySimpleUpper: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("ABCDEF"), "4204404604804a04c0");
        test.done();
    },
    testCollatorGetSortKeySimpleLower: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("abcdef"), "4224424624824a24c2");
        test.done();
    },
    testCollatorGetSortKeyMixed: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("String"), "6606826425225c24e2");
        test.done();
    },
    testCollatorGetSortKeyWithExpansion: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});

        test.ok(typeof(col) !== "undefined");

        // has 2 collation elements for "a" and "e"
        test.equal(col.sortKey("æ"), "43e4a2");
        test.done();
    },
    testCollatorGetSortKeyWithContraction: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});

        test.ok(typeof(col) !== "undefined");

        // The à is actually an "a" with a second combining grave
        // accent character. Together, they should have only 1
        // collation element because they are normalized to an
        // a-grave character first.
        test.equal(col.sortKey("à"), "427");
        test.done();
    },
    testCollatorGetSortKeyEmpty: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey(""), "");
        test.done();
    },
    testCollatorGetSortKeyUndefined: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey(undefined), "");
        test.done();
    },
    testCollatorGetSortKeyDeterministic: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});

        test.ok(typeof(col) !== "undefined");

        // should be equal always
        test.ok(col.sortKey("string") === col.sortKey("string"));
        test.done();
    },
    testCollatorGetSortKeyWorks: function(test) {
        test.expect(4);
        var col = new Collator({useNative: false});

        test.ok(typeof(col) !== "undefined");

        // should compare in English
        test.ok("a < b", col.sortKey("a") < col.sortKey("b"));
        test.ok("b < c", col.sortKey("b") < col.sortKey("c"));
        test.ok("c < z", col.sortKey("c") < col.sortKey("z"));
        test.done();
    },
    testCollatorWithSort: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});
        test.ok(typeof(col) !== "undefined");

        var input = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

        input.sort(col.getComparator());

        var expected = ["e", "i", "o", "p", "q", "r", "t", "u", "w", "y"];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorWithSortUpperFirst: function(test) {
        test.expect(2);
        var col = new Collator({
            upperFirst: true,
            useNative: false
        });
        test.ok(typeof(col) !== "undefined");

        var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

        input.sort(col.getComparator());

        var expected;
        // ie does not work properly
        var browser = ilib._getBrowser();

        expected = ["E", "e", "I", "i", "o", "p", "q", "r", "T", "U"];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorWithSortUpperNotFirst: function(test) {
        test.expect(2);
        var col = new Collator({
            upperFirst: false,
            useNative: false
        });
        test.ok(typeof(col) !== "undefined");

        var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

        input.sort(col.getComparator());

        // netscape happens to give the right result here, but not on purpose!
        var expected = ["e", "E", "i", "I", "o", "p", "q", "r", "T", "U"];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorWithSortJS: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});
        test.ok(typeof(col) !== "undefined");

        var input = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

        input.sort(col.getComparator());

        var expected = ["e", "i", "o", "p", "q", "r", "t", "u", "w", "y"];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorWithSortUpperFirstJS: function(test) {
        test.expect(2);
        var col = new Collator({
            upperFirst: true,
            useNative: false
        });
        test.ok(typeof(col) !== "undefined");

        var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

        input.sort(col.getComparator());

        var expected = ["E", "e", "I", "i", "o", "p", "q", "r", "T", "U"];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorWithSortUpperNotFirstJS: function(test) {
        test.expect(2);
        var col = new Collator({
            upperFirst: false,
            useNative: false
        });
        test.ok(typeof(col) !== "undefined");

        var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

        input.sort(col.getComparator());

        var expected = ["e", "E", "i", "I", "o", "p", "q", "r", "T", "U"];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorGetAvailableScripts: function(test) {
        test.expect(1);
        test.deepEqual(Collator.getAvailableScripts(), ["Latn"]);
        test.done();
    },
    testCollatorGetAvailableStyles: function(test) {
        test.expect(1);
        test.deepEqual(Collator.getAvailableStyles(), ["standard"]);
        test.done();
    },
    testCollatorDefaultExtendedChars: function(test) {
        // only test on platforms that support the new Intl class natively
        if (typeof(Intl) === 'undefined') {
            test.done();
            return;
        }
        var col = new Collator();

        test.expect(3);
        test.ok(typeof(col) !== "undefined");

        // should compare in English
        test.ok("e < ë", col.compare("e", "ë") < 0);
        test.ok("o < ø", col.compare("o", "ø") < 0);
        test.done();
    },
    testCollatorPrimaryExtendedChars: function(test) {
        // only test on platforms that support the new Intl class natively
        if (typeof(Intl) === 'undefined') {
            test.done();
            return;
        }
        var col = new Collator({
            sensitivity: "primary",
            usage: "search"
        });

        test.expect(3);
        test.ok(typeof(col) !== "undefined");

        // should compare in English
        test.equal(0, col.compare("e", "ë"), "e = ë");
        test.equal(0, col.compare("o", "ø"), "o = ø");
        test.done();
    },
    testCollatorDefaultExtendedCharsJS: function(test) {
        // only test on platforms that support the new Intl class natively
        if (typeof(Intl) === 'undefined') {
            test.done();
            return;
        }
        var col = new Collator({useNative: false});

        test.expect(3);
        test.ok(typeof(col) !== "undefined");

        // should compare in English
        test.ok("e < ë", col.compare("e", "ë") < 0);
        test.ok("o < ø", col.compare("o", "ø") < 0);
        test.done();
    },
    testCollatorPrimaryExtendedCharsJS: function(test) {
        // only test on platforms that support the new Intl class natively
        if (typeof(Intl) === 'undefined') {
            test.done();
            return;
        }
        var col = new Collator({
            sensitivity: "primary",
            usage: "search",
            useNative: false
        });

        test.expect(3);
        test.ok(typeof(col) !== "undefined");

        // should compare in English
        test.equal(0, col.compare("e", "ë"), "e = ë");
        test.equal(0, col.compare("o", "ø"), "o = ø");
        test.done();
    },
    testCollatorNativeIsNative: function(test) {
        // only test on platforms that support the new Intl class natively
        if (typeof(Intl) === 'undefined') {
            test.done();
            return;
        }
        var col = new Collator();
        test.expect(2);
        test.ok(typeof(col) !== "undefined");
        test.ok(typeof(col.collator) !== "undefined");
        test.done();
    },
    testJSCollatorPrimaryEqual: function(test) {
        test.expect(6);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base first
        test.equal(0, col.compare("a", "a"), "a = a");
        test.equal(0, col.compare("å", "å"), "å = å");
        test.equal(0, col.compare("A", "A"), "A = A");
        test.equal(0, col.compare("Ã", "Ã"), "Ã = Ã");
        test.equal(0, col.compare("à", "à"), "à = à");
        test.done();
    },
    testJSCollatorPrimaryBase: function(test) {
        test.expect(17);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base first
        // A a Ã ã O o Õ õ
        test.ok("a < o", col.compare("a", "o") < 0);
        test.ok("A < o", col.compare("A", "o") < 0);
        test.ok("ã < o", col.compare("ã", "o") < 0);
        test.ok("Ã < o", col.compare("Ã", "o") < 0);

        test.ok("a < õ", col.compare("a", "õ") < 0);
        test.ok("A < õ", col.compare("A", "õ") < 0);
        test.ok("ã < õ", col.compare("ã", "õ") < 0);
        test.ok("Ã < õ", col.compare("Ã", "õ") < 0);

        test.ok("a < O", col.compare("a", "O") < 0);
        test.ok("A < O", col.compare("A", "O") < 0);
        test.ok("ã < O", col.compare("ã", "O") < 0);
        test.ok("Ã < O", col.compare("Ã", "O") < 0);

        test.ok("a < Õ", col.compare("a", "Õ") < 0);
        test.ok("A < Õ", col.compare("A", "Õ") < 0);
        test.ok("ã < Õ", col.compare("ã", "Õ") < 0);
        test.ok("Ã < Õ", col.compare("Ã", "Õ") < 0);
        test.done();
    },
    testJSCollatorPrimaryAccent: function(test) {
        test.expect(4);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base, then accent, then case, then variant
        // a à à å
        // (second "a" with grave is two characters: "a" character with a combining grave character)
        test.ok("a < à", col.compare("a", "à") < 0);

        test.ok("à < à  (combining)", col.compare("à", "à") < 0);
        test.ok("à  (combining) < å", col.compare("à", "å") < 0);
        test.done();
    },
    testJSCollatorPrimaryCase: function(test) {
        test.expect(12);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base, then accent, then case, then variant
        // A À À Å a à à å O Õ o õ
        // (second set of "a" with grave is two characters: "a" character with a combining grave character)
        test.ok("A < À", col.compare("A", "À") < 0);
        test.ok("À < À  (combining)", col.compare("À", "À") < 0);
        test.ok("À  (combining) < Å", col.compare("À", "Å") < 0);
        test.ok("Å > a", col.compare("Å", "a") > 0);
        test.ok("a < à", col.compare("a", "à") < 0);
        test.ok("à < à  (combining)", col.compare("à", "à") < 0);
        test.ok("à  (combining) < å", col.compare("à", "å") < 0);
        test.ok("å < O", col.compare("å", "O") < 0);
        test.ok("O < Õ", col.compare("O", "Õ") < 0);
        test.ok("Õ > o", col.compare("Õ", "o") > 0);
        test.ok("o < õ", col.compare("o", "õ") < 0);
        test.done();
    },
    testJSCollatorGetComparatorPrimary: function(test) {
        test.expect(3);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.equal(typeof(func), "function");
        test.done();
    },
    testJSCollatorGetComparatorPrimaryWorks: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.done();

    },
    testJSCollatorGetComparatorPrimaryWorksWithCase: function(test) {
        test.expect(13);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");

        // A À À Å a à à å O Õ o õ
        // (second set of "a" with grave is two characters: "a" character with a combining grave character)
        test.ok("A < À", func("A", "À") < 0);
        test.ok("À < À  (combining)", func("À", "À") < 0);
        test.ok("À  (combining) < Å", func("À", "Å") < 0);
        test.ok("Å > a", func("Å", "a") > 0);
        test.ok("a < à", func("a", "à") < 0);
        test.ok("à < à  (combining)", func("à", "à") < 0);
        test.ok("à  (combining) < å", func("à", "å") < 0);
        test.ok("å < O", func("å", "O") < 0);
        test.ok("O < Õ", func("O", "Õ") < 0);
        test.ok("Õ > o", func("Õ", "o") > 0);
        test.ok("o < õ", func("o", "õ") < 0);
        test.done();
    },
    testJSCollatorGetSortKeyPrimary: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("string"), "6626826425225c24e2");
        test.done();
    },
    testJSCollatorGetSortKeyPrimaryWithAccentsAndCase: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("Strïng"), "6606826425335c24e2");
        test.done();
    },
    testJSCollatorGetSortKeyPrimaryWorks: function(test) {
        test.expect(13);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("string"), col.sortKey("string"), "string");
        // A À À Å a à à å O Õ o õ
        test.ok("A < À", col.sortKey("A") < col.sortKey("À"));
        test.ok("À < À  (combining)", col.sortKey("À") < col.sortKey("À"));
        test.ok("À (combining) < Å", col.sortKey("À") < col.sortKey("Å"));
        test.ok("Å > a", col.sortKey("Å") > col.sortKey("a"));
        test.ok("a < à", col.sortKey("a") < col.sortKey("à"));
        test.ok("à < à (combining)", col.sortKey("à") < col.sortKey("à"));
        test.ok("à (combining) < å", col.sortKey("à") < col.sortKey("å"));
        test.ok("å < O", col.sortKey("å") < col.sortKey("O"));
        test.ok("O < Õ", col.sortKey("O") < col.sortKey("Õ"));
        test.ok("Õ > o", col.sortKey("Õ") > col.sortKey("o"));
        test.ok("o < õ", col.sortKey("o") < col.sortKey("õ"));
        test.done();
    },
    testJSCollatorSecondaryEqual: function(test) {
        test.expect(6);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base first
        test.equal(0, col.compare("a", "a"), "a = a");
        test.equal(0, col.compare("å", "å"), "å = å");
        test.equal(0, col.compare("A", "A"), "A = A");
        test.equal(0, col.compare("Ã", "Ã"), "Ã = Ã");
        test.equal(0, col.compare("à", "à"), "à = à");
        test.done();
    },
    testJSCollatorSecondaryBase: function(test) {
        test.expect(17);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base first
        // A Ã a ã O Õ o õ
        test.ok("a < o", col.compare("a", "o") < 0);
        test.ok("A < o", col.compare("A", "o") < 0);
        test.ok("ã < o", col.compare("ã", "o") < 0);
        test.ok("Ã < o", col.compare("Ã", "o") < 0);

        test.ok("a < õ", col.compare("a", "õ") < 0);
        test.ok("A < õ", col.compare("A", "õ") < 0);
        test.ok("ã < õ", col.compare("ã", "õ") < 0);
        test.ok("Ã < õ", col.compare("Ã", "õ") < 0);

        test.ok("a < O", col.compare("a", "O") < 0);
        test.ok("A < O", col.compare("A", "O") < 0);
        test.ok("ã < O", col.compare("ã", "O") < 0);
        test.ok("Ã < O", col.compare("Ã", "O") < 0);

        test.ok("a < Õ", col.compare("a", "Õ") < 0);
        test.ok("A < Õ", col.compare("A", "Õ") < 0);
        test.ok("ã < Õ", col.compare("ã", "Õ") < 0);
        test.ok("Ã < Õ", col.compare("Ã", "Õ") < 0);
        test.done();
    },
    testJSCollatorSecondaryAccent: function(test) {
        test.expect(4);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base, then accent, then case, then variant
        // a à à å
        // (second "a" with grave is two characters: "a" character with a combining grave character)
        test.ok("a < à", col.compare("a", "à") < 0);
        test.ok("à < à (combining)", col.compare("à", "à") < 0);
        test.ok("à (combining) < å", col.compare("à", "å") < 0);
        test.done();
    },
    testJSCollatorSecondaryCase: function(test) {
        test.expect(12);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base, then case, then accent, then variant
        // A À À Å a à à å O Õ o õ
        test.ok("A < À", col.compare("A", "À") < 0);
        test.ok("À < À (combining)", col.compare("À", "À") < 0);
        test.ok("À (combining) < Å", col.compare("À", "Å") < 0);
        test.ok("Å > a", col.compare("Å", "a") > 0);
        test.ok("a < à", col.compare("a", "à") < 0);
        test.ok("à < à (combining)", col.compare("à", "à") < 0);
        test.ok("à (combining) < å", col.compare("à", "å") < 0);
        test.ok("å < O", col.compare("å", "O") < 0);
        test.ok("O < Õ", col.compare("O", "Õ") < 0);
        test.ok("Õ > o", col.compare("Õ", "o") > 0);
        test.ok("o < õ", col.compare("o", "õ") < 0);
        test.done();
    },
    testJSCollatorGetComparatorSecondary: function(test) {
        test.expect(3);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.equal(typeof(func), "function");
        test.done();
    },
    testJSCollatorGetComparatorSecondaryWorks: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.done();

    },
    testJSCollatorGetComparatorSecondaryWorksWithCase: function(test) {
        test.expect(13);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");

        // A À À Å a à à å O Õ o õ
        test.ok("A < À", func("A", "À") < 0);
        test.ok("À < À (combining)", func("À", "À") < 0);
        test.ok("À (combining) < Å", func("À", "Å") < 0);
        test.ok("Å > a", func("Å", "a") > 0);
        test.ok("a < à", func("a", "à") < 0);
        test.ok("à < à (combining)", func("à", "à") < 0);
        test.ok("à (combining) < å", func("à", "å") < 0);
        test.ok("å < O", func("å", "O") < 0);
        test.ok("O < Õ", func("O", "Õ") < 0);
        test.ok("Õ > o", func("Õ", "o") > 0);
        test.ok("o < õ", func("o", "õ") < 0);
        test.done();
    },
    testJSCollatorGetSortKeySecondary: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("string"), "6626826425225c24e2");
        test.done();
    },
    testJSCollatorGetSortKeySecondaryWithAccentsAndCase: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("Strïng"), "6606826425335c24e2");
        test.done();
    },
    testJSCollatorGetSortKeySecondaryWorks: function(test) {
        test.expect(13);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("string"), col.sortKey("string"), "string");
        // A À À Å a à à å O Õ o õ
        test.ok("A < À", col.sortKey("A") < col.sortKey("À"));
        test.ok("À < À (combining)", col.sortKey("À") < col.sortKey("À"));
        test.ok("À (combining) < Å", col.sortKey("À") < col.sortKey("Å"));
        test.ok("Å > a", col.sortKey("Å") > col.sortKey("a"));
        test.ok("a < à", col.sortKey("a") < col.sortKey("à"));
        test.ok("à < à (combining)", col.sortKey("à") < col.sortKey("à"));
        test.ok("à (combining) < å", col.sortKey("à") < col.sortKey("å"));
        test.ok("å < O", col.sortKey("å") < col.sortKey("O"));
        test.ok("O < Õ", col.sortKey("O") < col.sortKey("Õ"));
        test.ok("Õ > o", col.sortKey("Õ") > col.sortKey("o"));
        test.ok("o < õ", col.sortKey("o") < col.sortKey("õ"));
        test.done();
    },
    testJSCollatorTertiaryEqual: function(test) {
        test.expect(6);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base first
        test.equal(0, col.compare("a", "a"), "a = a");
        test.equal(0, col.compare("å", "å"), "å = å");
        test.equal(0, col.compare("A", "A"), "A = A");
        test.equal(0, col.compare("Ã", "Ã"), "Ã = Ã");
        test.equal(0, col.compare("à", "à"), "à = à");
        test.done();
    },
    testJSCollatorTertiaryBase: function(test) {
        test.expect(17);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base first
        // A Ã a ã O Õ o õ
        test.ok("a < o", col.compare("a", "o") < 0);
        test.ok("A < o", col.compare("A", "o") < 0);
        test.ok("ã < o", col.compare("ã", "o") < 0);
        test.ok("Ã < o", col.compare("Ã", "o") < 0);

        test.ok("a < õ", col.compare("a", "õ") < 0);
        test.ok("A < õ", col.compare("A", "õ") < 0);
        test.ok("ã < õ", col.compare("ã", "õ") < 0);
        test.ok("Ã < õ", col.compare("Ã", "õ") < 0);

        test.ok("a < O", col.compare("a", "O") < 0);
        test.ok("A < O", col.compare("A", "O") < 0);
        test.ok("ã < O", col.compare("ã", "O") < 0);
        test.ok("Ã < O", col.compare("Ã", "O") < 0);

        test.ok("a < Õ", col.compare("a", "Õ") < 0);
        test.ok("A < Õ", col.compare("A", "Õ") < 0);
        test.ok("ã < Õ", col.compare("ã", "Õ") < 0);
        test.ok("Ã < Õ", col.compare("Ã", "Õ") < 0);
        test.done();
    },
    testJSCollatorTertiaryAccent: function(test) {
        test.expect(4);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base, then accent
        // (second "a" with grave is two characters: "a" character with a combining grave character)
        test.ok("a < à", col.compare("a", "à") < 0);
        test.ok("à < à (combining)", col.compare("à", "à") < 0);
        test.ok("à (combining) < å", col.compare("à", "å") < 0);
        test.done();
    },
    testJSCollatorTertiaryCase: function(test) {
        test.expect(12);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base, then case, then accent, then variant
        // A À À Å a à à å O Õ o õ
        test.ok("A < À", col.compare("A", "À") < 0);
        test.ok("À < À (combining)", col.compare("À", "À") < 0);
        test.ok("À (combining) < Å", col.compare("À", "Å") < 0);
        test.ok("Å > a", col.compare("Å", "a") > 0);
        test.ok("a < à", col.compare("a", "à") < 0);
        test.ok("à < à (combining)", col.compare("à", "à") < 0);
        test.ok("à (combining) < å", col.compare("à", "å") < 0);
        test.ok("å < O", col.compare("å", "O") < 0);
        test.ok("O < Õ", col.compare("O", "Õ") < 0);
        test.ok("Õ > o", col.compare("Õ", "o") > 0);
        test.ok("o < õ", col.compare("o", "õ") < 0);
        test.done();
    },
    testJSCollatorGetComparatorTertiary: function(test) {
        test.expect(3);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.equal(typeof(func), "function");
        test.done();
    },
    testJSCollatorGetComparatorTertiaryWorks: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.done();

    },
    testJSCollatorGetComparatorTertiaryWorksWithCase: function(test) {
        test.expect(13);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");

        // A À À Å a à à å O Õ o õ
        test.ok("A < À", func("A", "À") < 0);
        test.ok("À < À (combining)", func("À", "À") < 0);
        test.ok("À (combining) < Å", func("À", "Å") < 0);
        test.ok("Å > a", func("Å", "a") > 0);
        test.ok("a < à", func("a", "à") < 0);
        test.ok("à < à (combining)", func("à", "à") < 0);
        test.ok("à (combining) < å", func("à", "å") < 0);
        test.ok("å < O", func("å", "O") < 0);
        test.ok("O < Õ", func("O", "Õ") < 0);
        test.ok("Õ > o", func("Õ", "o") > 0);
        test.ok("o < õ", func("o", "õ") < 0);
        test.done();
    },
    testJSCollatorGetSortKeyTertiary: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("string"), "6626826425225c24e2");
        test.done();
    },
    testJSCollatorGetSortKeyTertiaryWithAccentsAndCase: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("Strïng"), "6606826425335c24e2");
        test.done();
    },
    testJSCollatorGetSortKeyTertiaryWorks: function(test) {
        test.expect(13);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("string"), col.sortKey("string"), "string");
        // A À À Å a à à å O Õ o õ
        test.ok("A < À", col.sortKey("A") < col.sortKey("À"));
        test.ok("À < À (combining)", col.sortKey("À") < col.sortKey("À"));
        test.ok("À (combining) < Å", col.sortKey("À") < col.sortKey("Å"));
        test.ok("Å > a", col.sortKey("Å") > col.sortKey("a"));
        test.ok("a < à", col.sortKey("a") < col.sortKey("à"));
        test.ok("à < à (combining)", col.sortKey("à") < col.sortKey("à"));
        test.ok("à (combining) < å", col.sortKey("à") < col.sortKey("å"));
        test.ok("å < O", col.sortKey("å") < col.sortKey("O"));
        test.ok("O < Õ", col.sortKey("O") < col.sortKey("Õ"));
        test.ok("Õ > o", col.sortKey("Õ") > col.sortKey("o"));
        test.ok("o < õ", col.sortKey("o") < col.sortKey("õ"));
        test.done();
    },
    testJSCollatorSearchPrimaryEqual: function(test) {
        test.expect(6);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base first
        test.equal(0, col.compare("a", "a"), "a = a");
        test.equal(0, col.compare("å", "å"), "å = å");
        test.equal(0, col.compare("A", "A"), "A = A");
        test.equal(0, col.compare("Ã", "Ã"), "Ã = Ã");
        test.equal(0, col.compare("à", "à"), "à = à");
        test.done();
    },
    testJSCollatorSearchPrimaryBase: function(test) {
        test.expect(17);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base first
        // A a Ã ã O o Õ õ
        test.ok("a < o", col.compare("a", "o") < 0);
        test.ok("A < o", col.compare("A", "o") < 0);
        test.ok("ã < o", col.compare("ã", "o") < 0);
        test.ok("Ã < o", col.compare("Ã", "o") < 0);

        test.ok("a < õ", col.compare("a", "õ") < 0);
        test.ok("A < õ", col.compare("A", "õ") < 0);
        test.ok("ã < õ", col.compare("ã", "õ") < 0);
        test.ok("Ã < õ", col.compare("Ã", "õ") < 0);

        test.ok("a < O", col.compare("a", "O") < 0);
        test.ok("A < O", col.compare("A", "O") < 0);
        test.ok("ã < O", col.compare("ã", "O") < 0);
        test.ok("Ã < O", col.compare("Ã", "O") < 0);

        test.ok("a < Õ", col.compare("a", "Õ") < 0);
        test.ok("A < Õ", col.compare("A", "Õ") < 0);
        test.ok("ã < Õ", col.compare("ã", "Õ") < 0);
        test.ok("Ã < Õ", col.compare("Ã", "Õ") < 0);
        test.done();
    },
    testJSCollatorSearchPrimaryAccent: function(test) {
        test.expect(4);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base, then accent, then case, then variant
        // a à à å
        // (second "a" with grave is two characters: "a" character with a combining grave character)
        test.equal(0, col.compare("a", "à"), "a = à");
        test.equal(0, col.compare("à", "à"), "à = à (combining)");
        test.equal(0, col.compare("à", "å"), "à (combining) = å");
        test.done();
    },
    testJSCollatorSearchPrimaryCase: function(test) {
        test.expect(12);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base, then accent, then case, then variant
        // A a À à À à Å å O o Õ õ
        // (second set of "a" with grave is two characters: "a" character with a combining grave character)
        test.equal(0, col.compare("A", "a"), "A = a");
        test.equal(0, col.compare("a", "À"), "a = À");
        test.equal(0, col.compare("À", "à"), "À = à");
        test.equal(0, col.compare("à", "À"), "à = À (combining)");
        test.equal(0, col.compare("À", "à"), "À (combining) = à (combining)");
        test.equal(0, col.compare("à", "Å"), "à (combining) = Å");
        test.equal(0, col.compare("Å", "å"), "Å = å");
        test.ok("ã < O", col.compare("ã", "O") < 0);
        test.equal(0, col.compare("O", "o"), "O = o");
        test.equal(0, col.compare("o", "Õ"), "o = Õ");
        test.equal(0, col.compare("Õ", "õ"), "Õ = õ");
        test.done();
    },
    testJSCollatorSearchGetComparatorPrimary: function(test) {
        test.expect(3);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.equal(typeof(func), "function");
        test.done();
    },
    testJSCollatorSearchGetComparatorPrimaryWorks: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.done();

    },
    testJSCollatorSearchGetComparatorPrimaryWorksWithCase: function(test) {
        test.expect(13);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");

        // A a À à À à Å å O o Õ õ
        // (second set of "a" with grave is two characters: "a" character with a combining grave character)
        test.equal(0, func("A", "a"), "A = a");
        test.equal(0, func("a", "À"), "a = À");
        test.equal(0, func("À", "à"), "À = à");
        test.equal(0, func("à", "À"), "à = À (combining)");
        test.equal(0, func("À", "à"), "À (combining) = à (combining)");
        test.equal(0, func("à", "Å"), "à (combining) = Å");
        test.equal(0, func("Å", "å"), "Å = å");
        test.ok("ã < O", func("ã", "O") < 0);
        test.equal(0, func("O", "o"), "O = o");
        test.equal(0, func("o", "Õ"), "o = Õ");
        test.equal(0, func("Õ", "õ"), "Õ = õ");
        test.done();
    },
    testJSCollatorSearchGetSortKeyPrimary: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("string"), "333432292e27");
        test.done();
    },
    testJSCollatorSearchGetSortKeyPrimaryWithAccentsAndCase: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("Strïng"), "333432292e27");
        test.done();
    },
    testJSCollatorSearchGetSortKeyPrimaryWorks: function(test) {
        test.expect(13);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("string"), col.sortKey("string"), "string");
        // A a À à À à Å å O o Õ õ
        test.equal(col.sortKey("A"), col.sortKey("a"), "A = a");
        test.equal(col.sortKey("a"), col.sortKey("À"), "a = À");
        test.equal(col.sortKey("À"), col.sortKey("à"), "À = à");
        test.equal(col.sortKey("à"), col.sortKey("À"), "à = À (combining)");
        test.equal(col.sortKey("À"), col.sortKey("à"), "À (combining) = à (combining)");
        test.equal(col.sortKey("à"), col.sortKey("Å"), "à (combining) = Å");
        test.equal(col.sortKey("Å"), col.sortKey("å"), "Å = å");
        test.ok("ã < O", col.sortKey("ã") < col.sortKey("O"));
        test.equal(col.sortKey("O"), col.sortKey("o"), "O = o");
        test.equal(col.sortKey("o"), col.sortKey("Õ"), "o = Õ");
        test.equal(col.sortKey("Õ"), col.sortKey("õ"), "Õ = õ");
        test.done();
    },
    testJSCollatorSearchSecondaryEqual: function(test) {
        test.expect(6);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base first
        test.equal(0, col.compare("a", "a"), "a = a");
        test.equal(0, col.compare("å", "å"), "å = å");
        test.equal(0, col.compare("A", "A"), "A = A");
        test.equal(0, col.compare("Ã", "Ã"), "Ã = Ã");
        test.equal(0, col.compare("à", "à"), "à = à");
        test.done();
    },
    testJSCollatorSearchSecondaryBase: function(test) {
        test.expect(17);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base first, then case
        // A Ã a ã O Õ o õ
        test.ok("a < o", col.compare("a", "o") < 0);
        test.ok("A < o", col.compare("A", "o") < 0);
        test.ok("ã < o", col.compare("ã", "o") < 0);
        test.ok("Ã < o", col.compare("Ã", "o") < 0);

        test.ok("a < õ", col.compare("a", "õ") < 0);
        test.ok("A < õ", col.compare("A", "õ") < 0);
        test.ok("ã < õ", col.compare("ã", "õ") < 0);
        test.ok("Ã < õ", col.compare("Ã", "õ") < 0);

        test.ok("a < O", col.compare("a", "O") < 0);
        test.ok("A < O", col.compare("A", "O") < 0);
        test.ok("ã < O", col.compare("ã", "O") < 0);
        test.ok("Ã < O", col.compare("Ã", "O") < 0);

        test.ok("a < Õ", col.compare("a", "Õ") < 0);
        test.ok("A < Õ", col.compare("A", "Õ") < 0);
        test.ok("ã < Õ", col.compare("ã", "Õ") < 0);
        test.ok("Ã < Õ", col.compare("Ã", "Õ") < 0);
        test.done();
    },
    testJSCollatorSearchSecondaryAccent: function(test) {
        test.expect(4);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base, then case
        // a à à å
        // (second "a" with grave is two characters: "a" character with a combining grave character)
        test.ok("a < à", col.compare("a", "à") < 0);
        test.equal(0, col.compare("à", "à"), "à = à (combining)");
        test.equal(0, col.compare("à", "À"), "à (combining) = À");
        test.done();
    },
    testJSCollatorSearchSecondaryCase: function(test) {
        test.expect(12);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base, then case
        // A À À Å a à à å O Õ o õ
        // (second set of "a" with grave is two characters: "a" character with a combining grave character)
        test.ok("A < À",  col.compare("A", "À") < 0);
        test.equal(0, col.compare("À", "À"), "À = À (combining)");
        test.ok("À (combining) < Å",  col.compare("À", "Å") < 0);
        test.ok("Å > a", col.compare("Å", "a") > 0);
        test.ok("a < à",  col.compare("a", "à") < 0);
        test.equal(0, col.compare("à", "à"), "à = à (combining)");
        test.ok("à (combining) < å",  col.compare("à", "å") < 0);
        test.ok("å < O", col.compare("å", "O") < 0);
        test.ok("O < Õ",  col.compare("O", "Õ") < 0);
        test.ok("Õ > o", col.compare("Õ", "o") > 0);
        test.ok("o < õ",  col.compare("o", "õ") < 0);
        test.done();
    },
    testJSCollatorSearchGetComparatorSecondary: function(test) {
        test.expect(3);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.equal(typeof(func), "function");
        test.done();
    },
    testJSCollatorSearchGetComparatorSecondaryWorks: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.done();

    },
    testJSCollatorSearchGetComparatorSecondaryWorksWithCase: function(test) {
        test.expect(13);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");

        // should compare base, then case
        // A À À Å a à à å O Õ o õ
        // (second set of "a" with grave is two characters: "a" character with a combining grave character)
        test.ok("A < À",  func("A", "À") < 0);
        test.equal(0, func("À", "À"), "À = À (combining)");
        test.ok("À (combining) < Å",  func("À", "Å") < 0);
        test.ok("Å > a", func("Å", "a") > 0);
        test.ok("a < à",  func("a", "à") < 0);
        test.equal(0, func("à", "à"), "à = à (combining)");
        test.ok("à (combining) < å",  func("à", "å") < 0);
        test.ok("å < O", func("å", "O") < 0);
        test.ok("O < Õ", func("O", "Õ") < 0);
        test.ok("Õ > o", func("Õ", "o") > 0);
        test.ok("o < õ", func("o", "õ") < 0);
        test.done();
    },
    testJSCollatorSearchGetSortKeySecondary: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("string"), "1981a0190148170138");
        test.done();
    },
    testJSCollatorSearchGetSortKeySecondaryWithAccentsAndCase: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("Strïng"), "1981a019014c170138");
        test.done();
    },
    testJSCollatorSearchGetSortKeySecondaryWorks: function(test) {
        test.expect(13);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("string"), col.sortKey("string"), "string");
        // A À À Å a à à å O Õ o õ
        test.ok("A < À", col.sortKey("A") < col.sortKey("À"));
        test.ok("À = À (combining)", col.sortKey("À") === col.sortKey("À"));
        test.ok("À (combining) < Å", col.sortKey("À") < col.sortKey("Å"));
        test.ok("Å > a", col.sortKey("Å") > col.sortKey("a"));
        test.ok("a < à", col.sortKey("a") < col.sortKey("à"));
        test.ok("à = à (combining)", col.sortKey("à") === col.sortKey("à"));
        test.ok("à (combining) < å", col.sortKey("à") < col.sortKey("å"));
        test.ok("å < O", col.sortKey("å") < col.sortKey("O"));
        test.ok("O < Õ", col.sortKey("O") < col.sortKey("Õ"));
        test.ok("Õ > o", col.sortKey("Õ") > col.sortKey("o"));
        test.ok("o < õ", col.sortKey("o") < col.sortKey("õ"));
        test.done();
    },
    testJSCollatorSearchTertiaryEqual: function(test) {
        test.expect(6);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base first
        test.equal(0, col.compare("a", "a"), "a = a");
        test.equal(0, col.compare("å", "å"), "å = å");
        test.equal(0, col.compare("A", "A"), "A = A");
        test.equal(0, col.compare("Ã", "Ã"), "Ã = Ã");
        test.equal(0, col.compare("à", "à"), "à = à");
        test.done();
    },
    testJSCollatorSearchTertiaryBase: function(test) {
        test.expect(17);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base first
        // A Ã a ã O Õ o õ
        test.ok("a < o", col.compare("a", "o") < 0);
        test.ok("A < o", col.compare("A", "o") < 0);
        test.ok("ã < o", col.compare("ã", "o") < 0);
        test.ok("Ã < o", col.compare("Ã", "o") < 0);

        test.ok("a < õ", col.compare("a", "õ") < 0);
        test.ok("A < õ", col.compare("A", "õ") < 0);
        test.ok("ã < õ", col.compare("ã", "õ") < 0);
        test.ok("Ã < õ", col.compare("Ã", "õ") < 0);

        test.ok("a < O", col.compare("a", "O") < 0);
        test.ok("A < O", col.compare("A", "O") < 0);
        test.ok("ã < O", col.compare("ã", "O") < 0);
        test.ok("Ã < O", col.compare("Ã", "O") < 0);

        test.ok("a < Õ", col.compare("a", "Õ") < 0);
        test.ok("A < Õ", col.compare("A", "Õ") < 0);
        test.ok("ã < Õ", col.compare("ã", "Õ") < 0);
        test.ok("Ã < Õ", col.compare("Ã", "Õ") < 0);
        test.done();
    },
    testJSCollatorSearchTertiaryAccent: function(test) {
        test.expect(4);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base, then accent
        // a à à å
        // (second "a" with grave is two characters: "a" character with a combining grave character)
        test.ok("a < à", col.compare("a", "à") < 0);
        test.equal(0, col.compare("à", "à"), "à = à (combining)");
        test.ok("à (combining) < å", col.compare("à", "å") < 0);
        test.done();
    },
    testJSCollatorSearchTertiaryCase: function(test) {
        test.expect(12);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base, then case, then accent
        // A À À Å a à à å O Õ o õ
        // (second set of "a" with grave is two characters: "a" character with a combining grave character)
        test.ok("A < À", col.compare("A", "À") < 0);
        test.equal(0, col.compare("À", "À"), "À = À (combining)");
        test.ok("À (combining) < Å", col.compare("À", "Å") < 0);
        test.ok("Å > a", col.compare("Å", "a") > 0);
        test.ok("a < à", col.compare("a", "à") < 0);
        test.equal(0, col.compare("à", "à"), "à = à (combining)");
        test.ok("à (combining) < å", col.compare("à", "å") < 0);
        test.ok("å < O", col.compare("å", "O") < 0);
        test.ok("O < Õ", col.compare("O", "Õ") < 0);
        test.ok("Õ > o", col.compare("Õ", "o") > 0);
        test.ok("o < õ", col.compare("o", "õ") < 0);
        test.done();
    },
    testJSCollatorSearchGetComparatorTertiary: function(test) {
        test.expect(3);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.equal(typeof(func), "function");
        test.done();
    },
    testJSCollatorSearchGetComparatorTertiaryWorks: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.done();

    },
    testJSCollatorSearchGetComparatorTertiaryWorksWithCase: function(test) {
        test.expect(13);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");

        // should compare base, then case, then accent
        // A À À Å a à à å O Õ o õ
        // (second set of "a" with grave is two characters: "a" character with a combining grave character)
        test.ok("A < À", func("A", "À") < 0);
        test.equal(0, func("À", "À"), "À = À (combining)");
        test.ok("À (combining) < Å", func("À", "Å") < 0);
        test.ok("Å > a", func("Å", "a") > 0);
        test.ok("a < à", func("a", "à") < 0);
        test.equal(0, func("à", "à"), "à = à (combining)");
        test.ok("à (combining) < å", func("à", "å") < 0);
        test.ok("å < O", func("å", "O") < 0);
        test.ok("O < Õ", func("O", "Õ") < 0);
        test.ok("Õ > o", func("Õ", "o") > 0);
        test.ok("o < õ", func("o", "õ") < 0);
        test.done();
    },
    testJSCollatorSearchGetSortKeyTertiary: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("string"), "3313413212912e1271");
        test.done();
    },
    testJSCollatorSearchGetSortKeyTertiaryWithAccentsAndCase: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("Strïng"), "3303413212992e1271");
        test.done();
    },
    testJSCollatorSearchGetSortKeyTertiaryWorks: function(test) {
        test.expect(13);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("string"), col.sortKey("string"), "string");
        // A À À Å a à à å O Õ o õ
        test.ok("A < À", col.sortKey("A") < col.sortKey("À"));
        test.ok("À = À (combining)", col.sortKey("À") === col.sortKey("À"));
        test.ok("À (combining) < Å", col.sortKey("À") < col.sortKey("Å"));
        test.ok("Å > a", col.sortKey("Å") > col.sortKey("a"));
        test.ok("a < à", col.sortKey("a") < col.sortKey("à"));
        test.ok("à = à (combining)", col.sortKey("à") === col.sortKey("à"));
        test.ok("à (combining) < å", col.sortKey("à") < col.sortKey("å"));
        test.ok("å < O", col.sortKey("å") < col.sortKey("O"));
        test.ok("O < Õ", col.sortKey("O") < col.sortKey("Õ"));
        test.ok("Õ > o", col.sortKey("Õ") > col.sortKey("o"));
        test.ok("o < õ", col.sortKey("o") < col.sortKey("õ"));
        test.done();
    },
    testJSCollatorSearchQuaternaryEqual: function(test) {
        test.expect(6);
        var col = new Collator({
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base first
        test.equal(0, col.compare("a", "a"), "a = a");
        test.equal(0, col.compare("å", "å"), "å = å");
        test.equal(0, col.compare("A", "A"), "A = A");
        test.equal(0, col.compare("Ã", "Ã"), "Ã = Ã");
        test.equal(0, col.compare("à", "à"), "à = à");
        test.done();
    },
    testJSCollatorSearchQuaternaryBase: function(test) {
        test.expect(17);
        var col = new Collator({
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base first
        // A Ã a ã O Õ o õ
        test.ok("a < o", col.compare("a", "o") < 0);
        test.ok("A < o", col.compare("A", "o") < 0);
        test.ok("ã < o", col.compare("ã", "o") < 0);
        test.ok("Ã < o", col.compare("Ã", "o") < 0);

        test.ok("a < õ", col.compare("a", "õ") < 0);
        test.ok("A < õ", col.compare("A", "õ") < 0);
        test.ok("ã < õ", col.compare("ã", "õ") < 0);
        test.ok("Ã < õ", col.compare("Ã", "õ") < 0);

        test.ok("a < O", col.compare("a", "O") < 0);
        test.ok("A < O", col.compare("A", "O") < 0);
        test.ok("ã < O", col.compare("ã", "O") < 0);
        test.ok("Ã < O", col.compare("Ã", "O") < 0);

        test.ok("a < Õ", col.compare("a", "Õ") < 0);
        test.ok("A < Õ", col.compare("A", "Õ") < 0);
        test.ok("ã < Õ", col.compare("ã", "Õ") < 0);
        test.ok("Ã < Õ", col.compare("Ã", "Õ") < 0);
        test.done();
    },
    testJSCollatorSearchQuaternaryAccent: function(test) {
        test.expect(4);
        var col = new Collator({
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base, then accent
        // a à à å
        // (second "a" with grave is two characters: "a" character with a combining grave character)
        test.ok("a < à", col.compare("a", "à") < 0);
        test.ok("à < à (combining)", col.compare("à", "à") < 0);
        test.ok("à (combining) < å", col.compare("à", "å") < 0);
        test.done();
    },
    testJSCollatorSearchQuaternaryCase: function(test) {
        test.expect(12);
        var col = new Collator({
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // should compare base, then case, then accent
        // A À À Å a à à å O Õ o õ
        // (second set of "a" with grave is two characters: "a" character with a combining grave character)
        test.ok("A < À", col.compare("A", "À") < 0);
        test.ok("À < À (combining)", col.compare("À", "À") < 0);
        test.ok("À (combining) < Å", col.compare("À", "Å") < 0);
        test.ok("Å > a", col.compare("Å", "a") > 0);
        test.ok("a < à", col.compare("a", "à") < 0);
        test.ok("à < à (combining)", col.compare("à", "à") < 0);
        test.ok("à (combining) < å", col.compare("à", "å") < 0);
        test.ok("å < O", col.compare("å", "O") < 0);
        test.ok("O < Õ", col.compare("O", "Õ") < 0);
        test.ok("Õ > o", col.compare("Õ", "o") > 0);
        test.ok("o < õ", col.compare("o", "õ") < 0);
        test.done();
    },
    testJSCollatorSearchGetComparatorQuaternary: function(test) {
        test.expect(3);
        var col = new Collator({
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.equal(typeof(func), "function");
        test.done();
    },
    testJSCollatorSearchGetComparatorQuaternaryWorks: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.done();

    },
    testJSCollatorSearchGetComparatorQuaternaryWorksWithCase: function(test) {
        test.expect(13);
        var col = new Collator({
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");

        // should compare base, then case, then accent
        // A À À Å a à à å O Õ o õ
        // (second set of "a" with grave is two characters: "a" character with a combining grave character)
        test.ok("A < À", func("A", "À") < 0);
        test.ok("À < À (combining)", func("À", "À") < 0);
        test.ok("À (combining) < Å", func("À", "Å") < 0);
        test.ok("Å > a", func("Å", "a") > 0);
        test.ok("a < à", func("a", "à") < 0);
        test.ok("à < à (combining)", func("à", "à") < 0);
        test.ok("à (combining) < å", func("à", "å") < 0);
        test.ok("å < O", func("å", "O") < 0);
        test.ok("O < Õ", func("O", "Õ") < 0);
        test.ok("Õ > o", func("Õ", "o") > 0);
        test.ok("o < õ", func("o", "õ") < 0);
        test.done();
    },
    testJSCollatorSearchGetSortKeyQuaternary: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("string"), "6626826425225c24e2");
        test.done();
    },
    testJSCollatorSearchGetSortKeyQuaternaryWithAccentsAndCase: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("Strïng"), "6606826425335c24e2");
        test.done();
    },
    testJSCollatorSearchGetSortKeyQuaternaryWorks: function(test) {
        test.expect(13);
        var col = new Collator({
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("string"), col.sortKey("string"), "string");
        // A À À Å a à à å O Õ o õ
        test.ok("A < À", col.sortKey("A") < col.sortKey("À"));
        test.ok("À < À (combining)", col.sortKey("À") < col.sortKey("À"));
        test.ok("À (combining) < Å", col.sortKey("À") < col.sortKey("Å"));
        test.ok("Å > a", col.sortKey("Å") > col.sortKey("a"));
        test.ok("a < à", col.sortKey("a") < col.sortKey("à"));
        test.ok("à < à (combining)", col.sortKey("à") < col.sortKey("à"));
        test.ok("à (combining) < å", col.sortKey("à") < col.sortKey("å"));
        test.ok("å < O", col.sortKey("å") < col.sortKey("O"));
        test.ok("O < Õ", col.sortKey("O") < col.sortKey("Õ"));
        test.ok("Õ > o", col.sortKey("Õ") > col.sortKey("o"));
        test.ok("o < õ", col.sortKey("o") < col.sortKey("õ"));
        test.done();
    },
    testCollatorJSWithSortPrimary: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary"
        });
        test.ok(typeof(col) !== "undefined");

        var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

        input.sort(col.getComparator());

        var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorJSWithSortPrimaryStable: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary"
        });
        test.ok(typeof(col) !== "undefined");

        // input array order should not matter
        var input = ["strïng", "Strïng", "StrinG", "Strïng", "str", "String", "strïng", "strïnG", "string"];

        input.sort(col.getComparator());

        var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorJSWithSortPrimaryLowerFirst: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary",
            upperFirst: false
        });
        test.ok(typeof(col) !== "undefined");

        var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

        input.sort(col.getComparator());

        var expected = ["str", "string", "strïng", "strïnG", "strïng", "String", "StrinG", "Strïng", "Strïng"];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorJSWithSortPrimaryReverse: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary",
            reverse: true
        });
        test.ok(typeof(col) !== "undefined");

        var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

        input.sort(col.getComparator());

        var expected = ["strïng", "strïng", "strïnG", "string", "str", "Strïng", "Strïng", "String", "StrinG"];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorJSWithSortPrimaryReverseLowerFirst: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary",
            reverse: true,
            upperFirst: false
        });
        test.ok(typeof(col) !== "undefined");

        var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

        input.sort(col.getComparator());

        var expected = ["Strïng", "Strïng", "StrinG", "String", "strïng", "strïnG", "strïng", "string", "str"];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorJSWithSortSecondary: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary"
        });
        test.ok(typeof(col) !== "undefined");

        var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

        input.sort(col.getComparator());

        // no change from primary
        var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorJSWithSortTertiary: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary"
        });
        test.ok(typeof(col) !== "undefined");

        var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

        input.sort(col.getComparator());

        // no change from primary
        var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorJSWithSortWithSortKeys: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary"
        });
        test.ok(typeof(col) !== "undefined");

        var input = [
             col.sortKey("Strïng"),
             col.sortKey("strïng"),
             col.sortKey("String"),
             col.sortKey("StrinG"),
             col.sortKey("Strïng"),
             col.sortKey("string"),
             col.sortKey("str"),
             col.sortKey("strïng"),
             col.sortKey("strïnG")
         ];

        input.sort();  // use generic non-locale-sensitive sort!

        var expected = [
            col.sortKey("StrinG"),
            col.sortKey("String"),
            col.sortKey("Strïng"),
            col.sortKey("Strïng"),
            col.sortKey("str"),
            col.sortKey("string"),
            col.sortKey("strïnG"),
            col.sortKey("strïng"),
            col.sortKey("strïng")
        ];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorJSWithSortUpperFirst: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            upperFirst: true
        });
        test.ok(typeof(col) !== "undefined");

        var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

        input.sort(col.getComparator());

        var expected = ["E", "e", "I", "i", "o", "p", "q", "r", "T", "U"];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorJSWithSortUpperNotFirst: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            upperFirst: false
        });
        test.ok(typeof(col) !== "undefined");

        var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

        input.sort(col.getComparator());

        var expected = ["e", "E", "i", "I", "o", "p", "q", "r", "T", "U"];

        test.deepEqual(input, expected);
        test.done();
    },
    testJSCollatorSortGetSortKeyReversePrimary: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            usage: "search",
            reverse: true,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("string"), "cdccced7d2d9");
        test.done();
    },
    testJSCollatorSortGetSortKeyReverseQuaternary: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            usage: "search",
            reverse: true,
            sensitivity: "quaternary"
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("string"), "99e97e9beadea3eb1e");
        test.done();
    },
    testCollatorJSWithSortWithSortKeysReverse: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary",
            reverse: true
        });
        test.ok(typeof(col) !== "undefined");

        var input = [
                     col.sortKey("Strïng"),
                     col.sortKey("strïng"),
                     col.sortKey("String"),
                     col.sortKey("StrinG"),
                     col.sortKey("Strïng"),
                     col.sortKey("string"),
                     col.sortKey("str"),
                     col.sortKey("strïng"),
                     col.sortKey("strïnG")
                     ];

        input.sort();  // use generic non-locale-sensitive sort!

        var expected = [
                        col.sortKey("str"),
                        col.sortKey("strïng"),
                        col.sortKey("strïng"),
                        col.sortKey("strïnG"),
                        col.sortKey("string"),
                        col.sortKey("Strïng"),
                        col.sortKey("Strïng"),
                        col.sortKey("String"),
                        col.sortKey("StrinG")
                        ];

        test.deepEqual(input, expected);
        test.done();
    },
    testJSCollatorIgnorePunctuation: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            ignorePunctuation: true
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.compare("string", "'st,ri-ng"), 0);
        test.done();
    },
    testJSCollatorIgnorePunctuationNoPunct: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            ignorePunctuation: true
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.compare("string", "string"), 0);
        test.done();
    },
    testJSCollatorIgnorePunctuationSortKey: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            ignorePunctuation: true
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("-@#%St-ring-#@%"), "6606826425225c24e2");
        test.done();
    },
    testJSCollatorNumeric: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.compare("123.4", "123.4"), 0);
        test.done();
    },
    testJSCollatorNumericEquivButDifferentLexically: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.compare("10", "10.0"), 0);
        test.done();
    },
    testJSCollatorNumericEquivButDifferentLexicallyLeadingZeros: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.compare("010", "10"), 0);
        test.done();
    },
    testJSCollatorNumericEquivButDifferentLexicallyLeadingInteger: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.compare("0.1", ".1"), 0);
        test.done();
    },
    testJSCollatorNumericEquivButDifferentLexicallyTrailingZeros: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.compare("0.01", "0.01000"), 0);
        test.done();
    },
    testJSCollatorNumericLeftSmaller: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.ok(col.compare("11", "20") < 0);
        test.done();
    },
    testJSCollatorNumericLeftSmallerWithTrailingNonNumbers: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.ok(col.compare("11 foo", "20 asdf") < 0);
        test.done();
    },
    testJSCollatorNumericRightSmaller: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.ok(col.compare("20 asdf", "3 foo") > 0);
        test.done();
    },
    testJSCollatorNumericNoNumbers: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.ok(col.compare("asdf", "foo") < 0);
        test.done();
    },
    testJSCollatorNumericLeftNumber: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.ok(col.compare("1", "foo") < 0);
        test.done();
    },
    testJSCollatorNumericRightNumber: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.ok(col.compare("asdf", "231234") > 0);
        test.done();
    },
    testJSCollatorWithThousandsSeparator: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.compare("12,454,454.4", "0,012,454,454.4"), 0);
        test.done();
    },
    testJSCollatorSortNumericOnlyNumbers: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        var input = [
            "2 mangos",
            "32 lemons",
            "100 mandarins",
            "24grapes",
            "0 limes",
            "2 bananas",
            "14 blackberries",
            "2mangos",
            "24 grapes",
            "0 acai",
            "24 pears",
            "3 oranges"
        ];

        var expected = [
            "0 acai",
             "0 limes",
             "2 bananas",
             "2 mangos",
             "2mangos",
             "3 oranges",
             "14 blackberries",
             "24 grapes",
             "24 pears",
             "24grapes",
             "32 lemons",
             "100 mandarins"
        ];

        test.deepEqual(input.sort(col.getComparator()), expected);
        test.done();
    },
    testJSCollatorSortNumericMixedNumbersAndStrings: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        var input = [
            "orange",
            "2 mangos",
            "kiwi",
            "32 lemons",
            "100 mandarins",
            "grapefruit",
            "24grapes",
            "banana",
            "0 limes",
            "2 bananas",
            "raspberry",
            "14 blackberries",
            "2mangos",
            "24 grapes",
            "0 acai",
            "quince",
            "starfruit",
            "24 pears",
            "apple",
            "3 oranges",
            "guava"
        ];

        var expected = [
            "0 acai",
            "0 limes",
            "2 bananas",
            "2 mangos",
            "2mangos",
            "3 oranges",
            "14 blackberries",
            "24 grapes",
            "24 pears",
            "24grapes",
            "32 lemons",
            "100 mandarins",
            "apple",
            "banana",
            "grapefruit",
            "guava",
            "kiwi",
            "orange",
            "quince",
            "raspberry",
            "starfruit"
        ];

        test.deepEqual(input.sort(col.getComparator()), expected);
        test.done();
    },
    testJSCollatorWithThousandsSeparatorDE: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            locale: "de-DE",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.compare("12.454.454,4", "0.012.454.454,4"), 0);
        test.done();
    },
    testJSCollatorNumeric1: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.ok(col.compare("10", "1") > 0);
        test.done();
    },
    testJSCollatorNumeric2: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.ok(col.compare("100", "10") > 0);
        test.done();
    },
    testJSCollatorNumeric3: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.ok(col.compare("100", "99") > 0);
        test.done();
    },
    testJSCollatorNumeric4: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.ok(col.compare("100", "99.9") > 0);
        test.done();
    },
    testJSCollatorNumericWithText: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.ok(col.compare("1 box", "2 boxes") < 0);
        test.done();
    },
    testJSCollatorNumericWithText: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.ok(col.compare("20 boxes", "2 boxes") > 0);
        test.done();
    },
    testJSCollatorNumericWithText2: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.ok(col.compare("20.1 boxes", "201 boxes") < 0);
        test.done();
    },
    testJSCollatorNumericSortKey1: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("1"), "0000000000000001");
        test.done();
    },
    testJSCollatorNumericSortKey255: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("255"), "00000000000000ff");
        test.done();
    },
    testJSCollatorNumericSortKeyBig: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("17238562365345"), "00000fadaa62dfa1");
        test.done();
    },
    testJSCollatorBogusStyle: function(test) {
        test.expect(5);
        var col = new Collator({
            useNative: false,
            sensitivity: "case",
            style: "foobarfoo" // doesn't exist
        });

        test.ok(typeof(col) !== "undefined");

        // should use the default standard latin collation
        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("a < Ä", col.compare("a", "Ä") < 0);
        test.ok("Ä < ä", col.compare("Ä", "ä") < 0);
        test.ok("ä < B", col.compare("ä", "B") < 0);
        test.done();
    },
    testJSCollatorCompareAsciiPunctuationTer: function(test) {
        test.expect(47);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.ok("\\t < \\n", col.compare("\t", "\n") < 0);
        test.ok("\\n < \\u000C", col.compare("\n", "\u000C") < 0);
        test.ok("\\u000C < ' '", col.compare("\u000C", " ") < 0);
        test.ok("' '  < !", col.compare(" ", "!") < 0);
        test.ok("! < \"", col.compare("!", "\"") < 0);
        test.ok("\" < #", col.compare("\"", "#") < 0);
        test.ok("# < $", col.compare("#", "$") < 0);
        test.ok("$ < %", col.compare("$", "%") < 0);
        test.ok("% < &", col.compare("%", "&") < 0);
        test.ok("& < '", col.compare("&", "'") < 0);
        test.ok("' < (", col.compare("'", "(") < 0);
        test.ok("( < )", col.compare("(", ")") < 0);
        test.ok(") < *", col.compare(")", "*") < 0);
        test.ok("* < +", col.compare("*", "+") < 0);
        test.ok("+ < ,", col.compare("+", ",") < 0);
        test.ok(", < -", col.compare(",", "-") < 0);
        test.ok("- < .", col.compare("-", ".") < 0);
        test.ok(". < /", col.compare(".", "/") < 0);
        test.ok("/ < 0", col.compare("/", "0") < 0);
        test.ok("0 < 1", col.compare("0", "1") < 0);
        test.ok("1 < 2", col.compare("1", "2") < 0);
        test.ok("2 < 3", col.compare("2", "3") < 0);
        test.ok("3 < 4", col.compare("3", "4") < 0);
        test.ok("4 < 5", col.compare("4", "5") < 0);
        test.ok("5 < 6", col.compare("5", "6") < 0);
        test.ok("6 < 7", col.compare("6", "7") < 0);
        test.ok("7 < 8", col.compare("7", "8") < 0);
        test.ok("8 < 9", col.compare("8", "9") < 0);
        test.ok("9 < :", col.compare("9", ":") < 0);
        test.ok(": < ;", col.compare(":", ";") < 0);
        test.ok("; < <", col.compare(";", "<") < 0);
        test.ok("< < =", col.compare("<", "=") < 0);
        test.ok("= < >", col.compare("=", ">") < 0);
        test.ok("> < ?", col.compare(">", "?") < 0);
        test.ok("? < @", col.compare("?", "@") < 0);
        test.ok("@ < [", col.compare("@", "[") < 0);
        test.ok("[ < \\", col.compare("[", "\\") < 0);
        test.ok("\\ < ]", col.compare("\\", "]") < 0);
        test.ok("] < ^", col.compare("]", "^") < 0);
        test.ok("^ < _", col.compare("^", "_") < 0);
        test.ok("_ < `", col.compare("_", "`") < 0);
        test.ok("` < {", col.compare("`", "{") < 0);
        test.ok("{ < |", col.compare("{", "|") < 0);
        test.ok("| < }", col.compare("|", "}") < 0);
        test.ok("} < ~", col.compare("}", "~") < 0);
        test.ok("~ < ", col.compare("~", "") < 0);
        test.done();
    },
    testJSCollatorCompareAsciiPunctuationSec: function(test) {
        test.expect(47);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.ok("\\t < \\n", col.compare("\t", "\n") < 0);
        test.ok("\\n < \\u000C", col.compare("\n", "\u000C") < 0);
        test.ok("\\u000C < ' '", col.compare("\u000C", " ") < 0);
        test.ok("' '  < !", col.compare(" ", "!") < 0);
        test.ok("! < \"", col.compare("!", "\"") < 0);
        test.ok("\" < #", col.compare("\"", "#") < 0);
        test.ok("# < $", col.compare("#", "$") < 0);
        test.ok("$ < %", col.compare("$", "%") < 0);
        test.ok("% < &", col.compare("%", "&") < 0);
        test.ok("& < '", col.compare("&", "'") < 0);
        test.ok("' < (", col.compare("'", "(") < 0);
        test.ok("( < )", col.compare("(", ")") < 0);
        test.ok(") < *", col.compare(")", "*") < 0);
        test.ok("* < +", col.compare("*", "+") < 0);
        test.ok("+ < ,", col.compare("+", ",") < 0);
        test.ok(", < -", col.compare(",", "-") < 0);
        test.ok("- < .", col.compare("-", ".") < 0);
        test.ok(". < /", col.compare(".", "/") < 0);
        test.ok("/ < 0", col.compare("/", "0") < 0);
        test.ok("0 < 1", col.compare("0", "1") < 0);
        test.ok("1 < 2", col.compare("1", "2") < 0);
        test.ok("2 < 3", col.compare("2", "3") < 0);
        test.ok("3 < 4", col.compare("3", "4") < 0);
        test.ok("4 < 5", col.compare("4", "5") < 0);
        test.ok("5 < 6", col.compare("5", "6") < 0);
        test.ok("6 < 7", col.compare("6", "7") < 0);
        test.ok("7 < 8", col.compare("7", "8") < 0);
        test.ok("8 < 9", col.compare("8", "9") < 0);
        test.ok("9 < :", col.compare("9", ":") < 0);
        test.ok(": < ;", col.compare(":", ";") < 0);
        test.ok("; < <", col.compare(";", "<") < 0);
        test.ok("< < =", col.compare("<", "=") < 0);
        test.ok("= < >", col.compare("=", ">") < 0);
        test.ok("> < ?", col.compare(">", "?") < 0);
        test.ok("? < @", col.compare("?", "@") < 0);
        test.ok("@ < [", col.compare("@", "[") < 0);
        test.ok("[ < \\", col.compare("[", "\\") < 0);
        test.ok("\\ < ]", col.compare("\\", "]") < 0);
        test.ok("] < ^", col.compare("]", "^") < 0);
        test.ok("^ < _", col.compare("^", "_") < 0);
        test.ok("_ < `", col.compare("_", "`") < 0);
        test.ok("` < {", col.compare("`", "{") < 0);
        test.ok("{ < |", col.compare("{", "|") < 0);
        test.ok("| < }", col.compare("|", "}") < 0);
        test.ok("} < ~", col.compare("}", "~") < 0);
        test.ok("~ < ", col.compare("~", "") < 0);
        test.done();
    },
    testJSCollatorCompareAsciiPunctuationPri: function(test) {
        test.expect(47);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.ok("\\t = \\n", col.compare("\t", "\n") === 0);
        test.ok("\\n = \\u000C", col.compare("\n", "\u000C") === 0);
        test.ok("\\u000C = ' '", col.compare("\u000C", " ") === 0);
        test.ok("' '  < !", col.compare(" ", "!") < 0);
        test.ok("! < \"", col.compare("!", "\"") < 0);
        test.ok("\" < #", col.compare("\"", "#") < 0);
        test.ok("# < $", col.compare("#", "$") < 0);
        test.ok("$ < %", col.compare("$", "%") < 0);
        test.ok("% < &", col.compare("%", "&") < 0);
        test.ok("& < '", col.compare("&", "'") < 0);
        test.ok("' < (", col.compare("'", "(") < 0);
        test.ok("( < )", col.compare("(", ")") < 0);
        test.ok(") < *", col.compare(")", "*") < 0);
        test.ok("* < +", col.compare("*", "+") < 0);
        test.ok("+ < ,", col.compare("+", ",") < 0);
        test.ok(", < -", col.compare(",", "-") < 0);
        test.ok("- < .", col.compare("-", ".") < 0);
        test.ok(". < /", col.compare(".", "/") < 0);
        test.ok("/ < 0", col.compare("/", "0") < 0);
        test.ok("0 < 1", col.compare("0", "1") < 0);
        test.ok("1 < 2", col.compare("1", "2") < 0);
        test.ok("2 < 3", col.compare("2", "3") < 0);
        test.ok("3 < 4", col.compare("3", "4") < 0);
        test.ok("4 < 5", col.compare("4", "5") < 0);
        test.ok("5 < 6", col.compare("5", "6") < 0);
        test.ok("6 < 7", col.compare("6", "7") < 0);
        test.ok("7 < 8", col.compare("7", "8") < 0);
        test.ok("8 < 9", col.compare("8", "9") < 0);
        test.ok("9 < :", col.compare("9", ":") < 0);
        test.ok(": < ;", col.compare(":", ";") < 0);
        test.ok("; < <", col.compare(";", "<") < 0);
        test.ok("< < =", col.compare("<", "=") < 0);
        test.ok("= < >", col.compare("=", ">") < 0);
        test.ok("> < ?", col.compare(">", "?") < 0);
        test.ok("? < @", col.compare("?", "@") < 0);
        test.ok("@ < [", col.compare("@", "[") < 0);
        test.ok("[ < \\", col.compare("[", "\\") < 0);
        test.ok("\\ < ]", col.compare("\\", "]") < 0);
        test.ok("] < ^", col.compare("]", "^") < 0);
        test.ok("^ < _", col.compare("^", "_") < 0);
        test.ok("_ < `", col.compare("_", "`") < 0);
        test.ok("` < {", col.compare("`", "{") < 0);
        test.ok("{ < |", col.compare("{", "|") < 0);
        test.ok("| < }", col.compare("|", "}") < 0);
        test.ok("} < ~", col.compare("}", "~") < 0);
        test.ok("~ < ", col.compare("~", "") < 0);
        test.done();
    },
    testJSCollatorCompareLatinPunctuationTer: function(test) {
        test.expect(56);
        var col = new Collator({
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.ok("? < @", col.compare("?", "@") < 0);
        test.ok("@ < A", col.compare("@", "A") < 0);
        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("a < B", col.compare("a", "B") < 0);
        test.ok("B < b", col.compare("B", "b") < 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C < c", col.compare("C", "c") < 0);
        test.ok("c < D", col.compare("c", "D") < 0);
        test.ok("D < d", col.compare("D", "d") < 0);
        test.ok("d < E", col.compare("d", "E") < 0);
        test.ok("E < e", col.compare("E", "e") < 0);
        test.ok("e < F", col.compare("e", "F") < 0);
        test.ok("F < f", col.compare("F", "f") < 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G < g", col.compare("G", "g") < 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H < h", col.compare("H", "h") < 0);
        test.ok("h < I", col.compare("h", "I") < 0);
        test.ok("I < i", col.compare("I", "i") < 0);
        test.ok("i < J", col.compare("i", "J") < 0);
        test.ok("J < j", col.compare("J", "j") < 0);
        test.ok("j < K", col.compare("j", "K") < 0);
        test.ok("K < k", col.compare("K", "k") < 0);
        test.ok("k < L", col.compare("k", "L") < 0);
        test.ok("L < l", col.compare("L", "l") < 0);
        test.ok("l < M", col.compare("l", "M") < 0);
        test.ok("M < m", col.compare("M", "m") < 0);
        test.ok("m < N", col.compare("m", "N") < 0);
        test.ok("N < n", col.compare("N", "n") < 0);
        test.ok("n < O", col.compare("n", "O") < 0);
        test.ok("O < o", col.compare("O", "o") < 0);
        test.ok("o < P", col.compare("o", "P") < 0);
        test.ok("P < p", col.compare("P", "p") < 0);
        test.ok("p < Q", col.compare("p", "Q") < 0);
        test.ok("Q < q", col.compare("Q", "q") < 0);
        test.ok("q < R", col.compare("q", "R") < 0);
        test.ok("R < r", col.compare("R", "r") < 0);
        test.ok("r < S", col.compare("r", "S") < 0);
        test.ok("S < s", col.compare("S", "s") < 0);
        test.ok("s < T", col.compare("s", "T") < 0);
        test.ok("T < t", col.compare("T", "t") < 0);
        test.ok("t < U", col.compare("t", "U") < 0);
        test.ok("U < u", col.compare("U", "u") < 0);
        test.ok("u < V", col.compare("u", "V") < 0);
        test.ok("V < v", col.compare("V", "v") < 0);
        test.ok("v < W", col.compare("v", "W") < 0);
        test.ok("W < w", col.compare("W", "w") < 0);
        test.ok("w < X", col.compare("w", "X") < 0);
        test.ok("X < x", col.compare("X", "x") < 0);
        test.ok("x < Y", col.compare("x", "Y") < 0);
        test.ok("Y < y", col.compare("Y", "y") < 0);
        test.ok("y < Z", col.compare("y", "Z") < 0);
        test.ok("Z < z", col.compare("Z", "z") < 0);
        test.ok("z < [", col.compare("z", "[") < 0);
        test.ok("[ < \\", col.compare("[", "\\") < 0);
        test.done();
    },
    testJSCollatorCompareLatinPunctuationSec: function(test) {
        test.expect(56);
        var col = new Collator({
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.ok("? < @", col.compare("?", "@") < 0);
        test.ok("@ < A", col.compare("@", "A") < 0);
        test.ok("A = a", col.compare("A", "a") === 0);
        test.ok("a < B", col.compare("a", "B") < 0);
        test.ok("B = b", col.compare("B", "b") === 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C = c", col.compare("C", "c") === 0);
        test.ok("c < D", col.compare("c", "D") < 0);
        test.ok("D = d", col.compare("D", "d") === 0);
        test.ok("d < E", col.compare("d", "E") < 0);
        test.ok("E = e", col.compare("E", "e") === 0);
        test.ok("e < F", col.compare("e", "F") < 0);
        test.ok("F = f", col.compare("F", "f") === 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G = g", col.compare("G", "g") === 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H = h", col.compare("H", "h") === 0);
        test.ok("h < I", col.compare("h", "I") < 0);
        test.ok("I = i", col.compare("I", "i") === 0);
        test.ok("i < J", col.compare("i", "J") < 0);
        test.ok("J = j", col.compare("J", "j") === 0);
        test.ok("j < K", col.compare("j", "K") < 0);
        test.ok("K = k", col.compare("K", "k") === 0);
        test.ok("k < L", col.compare("k", "L") < 0);
        test.ok("L = l", col.compare("L", "l") === 0);
        test.ok("l < M", col.compare("l", "M") < 0);
        test.ok("M = m", col.compare("M", "m") === 0);
        test.ok("m < N", col.compare("m", "N") < 0);
        test.ok("N = n", col.compare("N", "n") === 0);
        test.ok("n < O", col.compare("n", "O") < 0);
        test.ok("O = o", col.compare("O", "o") === 0);
        test.ok("o < P", col.compare("o", "P") < 0);
        test.ok("P = p", col.compare("P", "p") === 0);
        test.ok("p < Q", col.compare("p", "Q") < 0);
        test.ok("Q = q", col.compare("Q", "q") === 0);
        test.ok("q < R", col.compare("q", "R") < 0);
        test.ok("R = r", col.compare("R", "r") === 0);
        test.ok("r < S", col.compare("r", "S") < 0);
        test.ok("S = s", col.compare("S", "s") === 0);
        test.ok("s < T", col.compare("s", "T") < 0);
        test.ok("T = t", col.compare("T", "t") === 0);
        test.ok("t < U", col.compare("t", "U") < 0);
        test.ok("U = u", col.compare("U", "u") === 0);
        test.ok("u < V", col.compare("u", "V") < 0);
        test.ok("V = v", col.compare("V", "v") === 0);
        test.ok("v < W", col.compare("v", "W") < 0);
        test.ok("W = w", col.compare("W", "w") === 0);
        test.ok("w < X", col.compare("w", "X") < 0);
        test.ok("X = x", col.compare("X", "x") === 0);
        test.ok("x < Y", col.compare("x", "Y") < 0);
        test.ok("Y = y", col.compare("Y", "y") === 0);
        test.ok("y < Z", col.compare("y", "Z") < 0);
        test.ok("Z = z", col.compare("Z", "z") === 0);
        test.ok("z < [", col.compare("z", "[") < 0);
        test.ok("[ < \\", col.compare("[", "\\") < 0);
        test.done();
    },
    testJSCollatorCompareLatinPunctuationPri: function(test) {
        test.expect(56);
        var col = new Collator({
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        test.ok("? < @", col.compare("?", "@") < 0);
        test.ok("@ < A", col.compare("@", "A") < 0);
        test.ok("A = a", col.compare("A", "a") === 0);
        test.ok("a < B", col.compare("a", "B") < 0);
        test.ok("B = b", col.compare("B", "b") === 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C = c", col.compare("C", "c") === 0);
        test.ok("c < D", col.compare("c", "D") < 0);
        test.ok("D = d", col.compare("D", "d") === 0);
        test.ok("d < E", col.compare("d", "E") < 0);
        test.ok("E = e", col.compare("E", "e") === 0);
        test.ok("e < F", col.compare("e", "F") < 0);
        test.ok("F = f", col.compare("F", "f") === 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G = g", col.compare("G", "g") === 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H = h", col.compare("H", "h") === 0);
        test.ok("h < I", col.compare("h", "I") < 0);
        test.ok("I = i", col.compare("I", "i") === 0);
        test.ok("i < J", col.compare("i", "J") < 0);
        test.ok("J = j", col.compare("J", "j") === 0);
        test.ok("j < K", col.compare("j", "K") < 0);
        test.ok("K = k", col.compare("K", "k") === 0);
        test.ok("k < L", col.compare("k", "L") < 0);
        test.ok("L = l", col.compare("L", "l") === 0);
        test.ok("l < M", col.compare("l", "M") < 0);
        test.ok("M = m", col.compare("M", "m") === 0);
        test.ok("m < N", col.compare("m", "N") < 0);
        test.ok("N = n", col.compare("N", "n") === 0);
        test.ok("n < O", col.compare("n", "O") < 0);
        test.ok("O = o", col.compare("O", "o") === 0);
        test.ok("o < P", col.compare("o", "P") < 0);
        test.ok("P = p", col.compare("P", "p") === 0);
        test.ok("p < Q", col.compare("p", "Q") < 0);
        test.ok("Q = q", col.compare("Q", "q") === 0);
        test.ok("q < R", col.compare("q", "R") < 0);
        test.ok("R = r", col.compare("R", "r") === 0);
        test.ok("r < S", col.compare("r", "S") < 0);
        test.ok("S = s", col.compare("S", "s") === 0);
        test.ok("s < T", col.compare("s", "T") < 0);
        test.ok("T = t", col.compare("T", "t") === 0);
        test.ok("t < U", col.compare("t", "U") < 0);
        test.ok("U = u", col.compare("U", "u") === 0);
        test.ok("u < V", col.compare("u", "V") < 0);
        test.ok("V = v", col.compare("V", "v") === 0);
        test.ok("v < W", col.compare("v", "W") < 0);
        test.ok("W = w", col.compare("W", "w") === 0);
        test.ok("w < X", col.compare("w", "X") < 0);
        test.ok("X = x", col.compare("X", "x") === 0);
        test.ok("x < Y", col.compare("x", "Y") < 0);
        test.ok("Y = y", col.compare("Y", "y") === 0);
        test.ok("y < Z", col.compare("y", "Z") < 0);
        test.ok("Z = z", col.compare("Z", "z") === 0);
        test.ok("z < [", col.compare("z", "[") < 0);
        test.ok("[ < \\", col.compare("[", "\\") < 0);
        test.done();
    }
};