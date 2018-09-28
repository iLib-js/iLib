/*
 * testcollation_general.js - test the Collator object in any languages that
 * uses the general rules
 * 
 * Copyright © 2014, 2017-2018, JEDLSoft
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
if (typeof(Collator) === "undefined") {
    var Collator = require("../../lib/Collator.js");
}

module.exports.testcollation_general = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testCollatorConstructorNative_it: function(test) {
        test.expect(1);
        var col = new Collator({useNative: false, locale: "it-IT"});
    
        test.ok(typeof(col) !== "undefined");
        test.done();
    },
    
    testCollatorDefaultNative_it: function(test) {
        test.expect(5);
        var col = new Collator({useNative: false, locale: "it-IT"});
    
        test.ok(typeof(col) !== "undefined");
    
        // should compare in English
        test.equal(0, col.compare("string", "string"), "equality");
        test.ok("a < b", col.compare("a", "b") < 0);
        test.ok("b < c", col.compare("b", "c") < 0);
        test.ok("c < z", col.compare("c", "z") < 0);
        test.done();
    },
    
    testCollatorDefaultCase_it: function(test) {
        test.expect(5);
        var col = new Collator({useNative: false, locale: "it-IT"});
    
        test.ok(typeof(col) !== "undefined");
    
        // should compare upper-case first within a base character
        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("B < b", col.compare("B", "b") < 0);
        test.ok("a < Z", col.compare("a", "Z") < 0);
        test.ok("Á < a", col.compare("A", "a") < 0);
        test.done();
    },
    
    testCollatorGetComparator_it: function(test) {
        test.expect(3);
        var col = new Collator({useNative: false, locale: "it-IT"});
    
        test.ok(typeof(col) !== "undefined");
    
        // should compare in English
        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.equal(typeof(func), "function");
        test.done();
    },
    
    testCollatorGetComparatorWorks_it: function(test) {
        test.expect(6);
        var col = new Collator({useNative: false, locale: "it-IT"});
    
        test.ok(typeof(col) !== "undefined");
    
        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
    
        test.equal(0, func("string", "string"), "equality");
        test.ok("a < b", func("a", "b") < 0);
        test.ok("b < c", func("b", "c") < 0);
        test.ok("c < z", func("c", "z") < 0);
        test.done();
    },
    
    testCollatorGetComparatorWorksWithCase_it: function(test) {
        test.expect(6);
        var col = new Collator({useNative: false, locale: "it-IT"});
    
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
    
    
    testCollatorConstructorJS_it: function(test) {
        test.expect(1);
        var col = new Collator({useNative: false});
    
        test.ok(typeof(col) !== "undefined");
        test.done();
    },
    
    testCollatorDefaultJS_it: function(test) {
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
    
    testCollatorDefaultCaseJS_it: function(test) {
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
    
    testCollatorGetComparatorJS_it: function(test) {
        test.expect(3);
        var col = new Collator({useNative: false});
    
        test.ok(typeof(col) !== "undefined");
    
        // should compare in English
        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.equal(typeof(func), "function");
        test.done();
    },
    
    testCollatorGetComparatorWorksJS_it: function(test) {
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
    
    testCollatorGetComparatorWorksWithCaseJS_it: function(test) {
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
    
    
    testCollatorGetSortKeyNative_it: function(test) {
        if (typeof(Intl) === 'undefined' && Intl) {
            test.done();
            return;
        }
        var col = new Collator({locale: "it-IT"});
    
        test.expect(2);
        test.ok(typeof(col) !== "undefined");
    
        // no sort key available when using native...
        test.equal(col.sortKey("string"), "string");
        test.done();
    },
    
    testCollatorGetSortKeySimpleUpper_it: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("ABCDEF"), "4204404604804a04c0");
        test.done();
    },
    testCollatorGetSortKeySimpleLower_it: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("abcdef"), "4224424624824a24c2");
        test.done();
    },
    
    testCollatorGetSortKeyMixed_it: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("String"), "6606826425225c24e2");
        test.done();
    },
    
    testCollatorGetSortKeyWithExpansion_it: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});
    
        test.ok(typeof(col) !== "undefined");
    
        // has 2 collation elements for "a" and "e"
        test.equal(col.sortKey("æ"), "43e4a2");
        test.done();
    },
    
    testCollatorGetSortKeyWithContraction_it: function(test) {
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
    
    testCollatorGetSortKeyEmpty_it: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey(""), "");
        test.done();
    },
    
    testCollatorGetSortKeyUndefined_it: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey(undefined), "");
        test.done();
    },
    
    testCollatorGetSortKeyDeterministic_it: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});
    
        test.ok(typeof(col) !== "undefined");
    
        // should be equal always
        test.ok(col.sortKey("string") === col.sortKey("string"));
        test.done();
    },
    testCollatorGetSortKeyWorks_it: function(test) {
        test.expect(4);
        var col = new Collator({useNative: false});
    
        test.ok(typeof(col) !== "undefined");
    
        // should compare in English
        test.ok("a < b", col.sortKey("a") < col.sortKey("b"));
        test.ok("b < c", col.sortKey("b") < col.sortKey("c"));
        test.ok("c < z", col.sortKey("c") < col.sortKey("z"));
        test.done();
    },
    
    
    testCollatorWithSort_it: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});
        test.ok(typeof(col) !== "undefined");
    
        var input = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    
        input.sort(col.getComparator());
    
        var expected = ["e", "i", "o", "p", "q", "r", "t", "u", "w", "y"];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorWithSortUpperFirst_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
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
    
    testCollatorWithSortUpperNotFirst_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
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
    
    testCollatorWithSortJS_it: function(test) {
        test.expect(2);
        var col = new Collator({useNative: false});
        test.ok(typeof(col) !== "undefined");
    
        var input = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    
        input.sort(col.getComparator());
    
        var expected = ["e", "i", "o", "p", "q", "r", "t", "u", "w", "y"];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorWithSortUpperFirstJS_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
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
    
    testCollatorWithSortUpperNotFirstJS_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
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
    
    testCollatorGetAvailableScripts_it: function(test) {
        test.expect(1);
        test.deepEqual(Collator.getAvailableScripts(), ["Latn"]);
        test.done();
    },
    
    testCollatorGetAvailableStyles_it: function(test) {
        test.expect(1);
        test.deepEqual(Collator.getAvailableStyles(), ["standard"]);
        test.done();
    },
    
    testCollatorDefaultExtendedChars_it: function(test) {
        // only test on platforms that support the new Intl class natively
        if (typeof(Intl) === 'undefined') {
            test.done();
            return;
        }
        var col = new Collator({locale: "it-IT"});
    
        test.expect(3);
        test.ok(typeof(col) !== "undefined");
    
        // should compare in English
        test.ok("e < ë", col.compare("e", "ë") < 0);
        test.ok("o < ø", col.compare("o", "ø") < 0);
        test.done();
    },
    
    testCollatorPrimaryExtendedChars_it: function(test) {
        // only test on platforms that support the new Intl class natively
        if (typeof(Intl) === 'undefined') {
            test.done();
            return;
        }
        var col = new Collator({
            locale: "it-IT",
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
    
    testCollatorDefaultExtendedCharsJS_it: function(test) {
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
    
    testCollatorPrimaryExtendedCharsJS_it: function(test) {
        // only test on platforms that support the new Intl class natively
        if (typeof(Intl) === 'undefined') {
            test.done();
            return;
        }
        var col = new Collator({
        locale: "it-IT",
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
    
    testCollatorNativeIsNative_it: function(test) {
        // only test on platforms that support the new Intl class natively
        if (typeof(Intl) === 'undefined') {
            test.done();
            return;
        }
        var col = new Collator({locale: "it-IT"});
        test.expect(2);
        test.ok(typeof(col) !== "undefined");
        test.ok(typeof(col.collator) !== "undefined");
        test.done();
    },
    
    testJSCollatorPrimaryEqual_it: function(test) {
        test.expect(6);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorPrimaryBase_it: function(test) {
        test.expect(17);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorPrimaryAccent_it: function(test) {
        test.expect(4);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorPrimaryCase_it: function(test) {
        test.expect(12);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorGetComparatorPrimary_it: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "primary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.equal(typeof(func), "function");
        test.done();
    },
    
    testJSCollatorGetComparatorPrimaryWorks_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "primary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.done();
    
    },
    
    testJSCollatorGetComparatorPrimaryWorksWithCase_it: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorGetSortKeyPrimary_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "primary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("string"), "6626826425225c24e2");
        test.done();
    },
    
    testJSCollatorGetSortKeyPrimaryWithAccentsAndCase_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "primary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("Strïng"), "6606826425335c24e2");
        test.done();
    },
    
    testJSCollatorGetSortKeyPrimaryWorks_it: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "it-IT",
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
    
    
    testJSCollatorSecondaryEqual_it: function(test) {
        test.expect(6);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSecondaryBase_it: function(test) {
        test.expect(17);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSecondaryAccent_it: function(test) {
        test.expect(4);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSecondaryCase_it: function(test) {
        test.expect(12);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorGetComparatorSecondary_it: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "secondary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.equal(typeof(func), "function");
        test.done();
    },
    
    testJSCollatorGetComparatorSecondaryWorks_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "secondary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.done();
    
    },
    
    testJSCollatorGetComparatorSecondaryWorksWithCase_it: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorGetSortKeySecondary_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "secondary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("string"), "6626826425225c24e2");
        test.done();
    },
    
    testJSCollatorGetSortKeySecondaryWithAccentsAndCase_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "secondary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("Strïng"), "6606826425335c24e2");
        test.done();
    },
    
    testJSCollatorGetSortKeySecondaryWorks_it: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "it-IT",
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
    
    
    testJSCollatorTertiaryEqual_it: function(test) {
        test.expect(6);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorTertiaryBase_it: function(test) {
        test.expect(17);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorTertiaryAccent_it: function(test) {
        test.expect(4);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorTertiaryCase_it: function(test) {
        test.expect(12);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorGetComparatorTertiary_it: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "tertiary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.equal(typeof(func), "function");
        test.done();
    },
    
    testJSCollatorGetComparatorTertiaryWorks_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "tertiary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.done();
    
    },
    
    testJSCollatorGetComparatorTertiaryWorksWithCase_it: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorGetSortKeyTertiary_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "tertiary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("string"), "6626826425225c24e2");
        test.done();
    },
    
    testJSCollatorGetSortKeyTertiaryWithAccentsAndCase_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "tertiary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("Strïng"), "6606826425335c24e2");
        test.done();
    },
    
    testJSCollatorGetSortKeyTertiaryWorks_it: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "it-IT",
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
    
    
    testJSCollatorSearchPrimaryEqual_it: function(test) {
        test.expect(6);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchPrimaryBase_it: function(test) {
        test.expect(17);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchPrimaryAccent_it: function(test) {
        test.expect(4);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchPrimaryCase_it: function(test) {
        test.expect(12);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchGetComparatorPrimary_it: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchGetComparatorPrimaryWorks_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.done();
    
    },
    
    testJSCollatorSearchGetComparatorPrimaryWorksWithCase_it: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchGetSortKeyPrimary_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("string"), "333432292e27");
        test.done();
    },
    
    testJSCollatorSearchGetSortKeyPrimaryWithAccentsAndCase_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("Strïng"), "333432292e27");
        test.done();
    },
    
    testJSCollatorSearchGetSortKeyPrimaryWorks_it: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "it-IT",
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
    
    
    testJSCollatorSearchSecondaryEqual_it: function(test) {
        test.expect(6);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchSecondaryBase_it: function(test) {
        test.expect(17);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchSecondaryAccent_it: function(test) {
        test.expect(4);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchSecondaryCase_it: function(test) {
        test.expect(12);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchGetComparatorSecondary_it: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchGetComparatorSecondaryWorks_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.done();
    
    },
    
    testJSCollatorSearchGetComparatorSecondaryWorksWithCase_it: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchGetSortKeySecondary_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("string"), "1981a0190148170138");
        test.done();
    },
    
    testJSCollatorSearchGetSortKeySecondaryWithAccentsAndCase_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("Strïng"), "1981a019014c170138");
        test.done();
    },
    
    testJSCollatorSearchGetSortKeySecondaryWorks_it: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "it-IT",
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
    
    
    testJSCollatorSearchTertiaryEqual_it: function(test) {
        test.expect(6);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchTertiaryBase_it: function(test) {
        test.expect(17);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchTertiaryAccent_it: function(test) {
        test.expect(4);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchTertiaryCase_it: function(test) {
        test.expect(12);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchGetComparatorTertiary_it: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchGetComparatorTertiaryWorks_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.done();
    
    },
    
    testJSCollatorSearchGetComparatorTertiaryWorksWithCase_it: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchGetSortKeyTertiary_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("string"), "3313413212912e1271");
        test.done();
    },
    
    testJSCollatorSearchGetSortKeyTertiaryWithAccentsAndCase_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("Strïng"), "3303413212992e1271");
        test.done();
    },
    
    testJSCollatorSearchGetSortKeyTertiaryWorks_it: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "it-IT",
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
    
    
    testJSCollatorSearchQuaternaryEqual_it: function(test) {
        test.expect(6);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchQuaternaryBase_it: function(test) {
        test.expect(17);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchQuaternaryAccent_it: function(test) {
        test.expect(4);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchQuaternaryCase_it: function(test) {
        test.expect(12);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchGetComparatorQuaternary_it: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchGetComparatorQuaternaryWorks_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        var func = col.getComparator();
        test.ok(typeof(func) !== "undefined");
        test.done();
    
    },
    
    testJSCollatorSearchGetComparatorQuaternaryWorksWithCase_it: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSearchGetSortKeyQuaternary_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("string"), "6626826425225c24e2");
        test.done();
    },
    
    testJSCollatorSearchGetSortKeyQuaternaryWithAccentsAndCase_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("Strïng"), "6606826425335c24e2");
        test.done();
    },
    
    testJSCollatorSearchGetSortKeyQuaternaryWorks_it: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "it-IT",
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
    
    
    testCollatorJSWithSortPrimary_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
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
    
    testCollatorJSWithSortPrimaryStable_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
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
    
    testCollatorJSWithSortPrimaryLowerFirst_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
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
    
    testCollatorJSWithSortPrimaryReverse_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
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
    
    testCollatorJSWithSortPrimaryReverseLowerFirst_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
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
    
    testCollatorJSWithSortSecondary_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
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
    
    testCollatorJSWithSortTertiary_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
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
    
    
    testCollatorJSWithSortWithSortKeys_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
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
    
    testCollatorJSWithSortUpperFirst_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
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
    
    testCollatorJSWithSortUpperNotFirst_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
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
    
    testJSCollatorSortGetSortKeyReversePrimary_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            usage: "search",
            reverse: true,
            sensitivity: "primary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("string"), "cdccced7d2d9");
        test.done();
    },
    
    testJSCollatorSortGetSortKeyReverseQuaternary_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            usage: "search",
            reverse: true,
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("string"), "99e97e9beadea3eb1e");
        test.done();
    },
    
    testCollatorJSWithSortWithSortKeysReverse_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
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
    
    
    testJSCollatorIgnorePunctuation_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            ignorePunctuation: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.compare("string", "'st,ri-ng"), 0);
        test.done();
    },
    
    testJSCollatorIgnorePunctuationNoPunct_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            ignorePunctuation: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.compare("string", "string"), 0);
        test.done();
    },
    
    testJSCollatorIgnorePunctuationSortKey_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            ignorePunctuation: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("-@#%St-ring-#@%"), "6606826425225c24e2");
        test.done();
    },
    
    testJSCollatorNumeric_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            numeric: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.compare("00123.4", "123.4"), 0);
        test.done();
    },
    
    testJSCollatorNumericNoNumbers_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            numeric: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.ok(col.compare("asdf", "fooo") < 0);
        test.done();
    },
    
    testJSCollatorNumericLeftNumber_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            numeric: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.ok(col.compare("1", "fooo") < 0);
        test.done();
    },
    
    testJSCollatorNumericRightNumber_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            numeric: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.ok(col.compare("asdf", "231234") > 0);
        test.done();
    },
    
    testJSCollatorWithThousandsSeparator_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            numeric: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.compare("12.454.454,4", "0.012.454.454,4"), 0);
        test.done();
    },
    
    testJSCollatorNumeric1_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            numeric: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.ok(col.compare("10", "1") > 0);
        test.done();
    },
    
    testJSCollatorNumeric2_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            numeric: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.ok(col.compare("100", "10") > 0);
        test.done();
    },
    
    testJSCollatorNumeric3_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            numeric: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.ok(col.compare("100", "99") > 0);
        test.done();
    },
    
    testJSCollatorNumeric4_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            numeric: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.ok(col.compare("100", "99,9") > 0);
        test.done();
    },
    
    testJSCollatorNumericWithText_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            numeric: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.ok(col.compare("1 box", "2 boxes") < 0);
        test.done();
    },
    
    testJSCollatorNumericWithText_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            numeric: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.ok(col.compare("20 boxes", "2 boxes") > 0);
        test.done();
    },
    
    testJSCollatorNumericWithText2_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            numeric: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.ok(col.compare("20,1 boxes", "201 boxes") < 0);
        test.done();
    },
    
    testJSCollatorNumericSortKey1_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            numeric: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("1"), "0000000000000001");
        test.done();
    },
    
    testJSCollatorNumericSortKey255_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            numeric: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("255"), "00000000000000ff");
        test.done();
    },
    
    testJSCollatorNumericSortKeyBig_it: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "it-IT",
            useNative: false,
            sensitivity: "case",
            numeric: true
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(col.sortKey("17238562365345"), "00000fadaa62dfa1");
        test.done();
    },
    
    
    testCollatorJSWithSortPrimary_af: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "af-ZA",
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
    
    testCollatorJSWithSortPrimaryStable_af: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "af-ZA",
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
    
    testCollatorJSWithSortPrimaryLowerFirst_af: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "af-ZA",
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
    
    testCollatorJSWithSortPrimaryReverse_af: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "af-ZA",
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
    
    testCollatorJSWithSortPrimaryReverseLowerFirst_af: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "af-ZA",
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
    
    testCollatorJSWithSortSecondary_af: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "af-ZA",
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
    
    testCollatorJSWithSortTertiary_af: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "af-ZA",
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
    
    
    testCollatorJSWithSortPrimary_eu: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "eu-ES",
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
    
    testCollatorJSWithSortPrimaryStable_eu: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "eu-ES",
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
    
    testCollatorJSWithSortPrimaryLowerFirst_eu: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "eu-ES",
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
    
    testCollatorJSWithSortPrimaryReverse_eu: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "eu-ES",
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
    
    testCollatorJSWithSortPrimaryReverseLowerFirst_eu: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "eu-ES",
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
    
    testCollatorJSWithSortSecondary_eu: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "eu-ES",
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
    
    testCollatorJSWithSortTertiary_eu: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "eu-ES",
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
    
    
    testCollatorJSWithSortPrimary_ca: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ca-ES",
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
    
    testCollatorJSWithSortPrimaryStable_ca: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ca-ES",
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
    
    testCollatorJSWithSortPrimaryLowerFirst_ca: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ca-ES",
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
    
    testCollatorJSWithSortPrimaryReverse_ca: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ca-ES",
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
    
    testCollatorJSWithSortPrimaryReverseLowerFirst_ca: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ca-ES",
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
    
    testCollatorJSWithSortSecondary_ca: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ca-ES",
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
    
    testCollatorJSWithSortTertiary_ca: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ca-ES",
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
    
    
    testCollatorJSWithSortPrimary_nl: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "nl-NL",
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
    
    testCollatorJSWithSortPrimaryStable_nl: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "nl-NL",
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
    
    testCollatorJSWithSortPrimaryLowerFirst_nl: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "nl-NL",
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
    
    testCollatorJSWithSortPrimaryReverse_nl: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "nl-NL",
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
    
    testCollatorJSWithSortPrimaryReverseLowerFirst_nl: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "nl-NL",
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
    
    testCollatorJSWithSortSecondary_nl: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "nl-NL",
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
    
    testCollatorJSWithSortTertiary_nl: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "nl-NL",
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
    
    
    testCollatorJSWithSortPrimary_gl: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "gl-ES",
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
    
    testCollatorJSWithSortPrimaryStable_gl: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "gl-ES",
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
    
    testCollatorJSWithSortPrimaryLowerFirst_gl: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "gl-ES",
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
    
    testCollatorJSWithSortPrimaryReverse_gl: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "gl-ES",
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
    
    testCollatorJSWithSortPrimaryReverseLowerFirst_gl: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "gl-ES",
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
    
    testCollatorJSWithSortSecondary_gl: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "gl-ES",
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
    
    testCollatorJSWithSortTertiary_gl: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "gl-ES",
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
    
    
    testCollatorJSWithSortPrimary_id: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "id-ID",
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
    
    testCollatorJSWithSortPrimaryStable_id: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "id-ID",
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
    
    testCollatorJSWithSortPrimaryLowerFirst_id: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "id-ID",
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
    
    testCollatorJSWithSortPrimaryReverse_id: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "id-ID",
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
    
    testCollatorJSWithSortPrimaryReverseLowerFirst_id: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "id-ID",
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
    
    testCollatorJSWithSortSecondary_id: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "id-ID",
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
    
    testCollatorJSWithSortTertiary_id: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "id-ID",
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
    
    
    testCollatorJSWithSortPrimary_ms: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ms-MY",
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
    
    testCollatorJSWithSortPrimaryStable_ms: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ms-MY",
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
    
    testCollatorJSWithSortPrimaryLowerFirst_ms: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ms-MY",
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
    
    testCollatorJSWithSortPrimaryReverse_ms: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ms-MY",
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
    
    testCollatorJSWithSortPrimaryReverseLowerFirst_ms: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ms-MY",
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
    
    testCollatorJSWithSortSecondary_ms: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ms-MY",
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
    
    testCollatorJSWithSortTertiary_ms: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ms-MY",
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
    
    
    testCollatorJSWithSortPrimary_pt: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "pt-BR",
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
    
    testCollatorJSWithSortPrimaryStable_pt: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "pt-BR",
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
    
    testCollatorJSWithSortPrimaryLowerFirst_pt: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "pt-BR",
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
    
    testCollatorJSWithSortPrimaryReverse_pt: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "pt-BR",
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
    
    testCollatorJSWithSortPrimaryReverseLowerFirst_pt: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "pt-BR",
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
    
    testCollatorJSWithSortSecondary_pt: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "pt-BR",
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
    
    testCollatorJSWithSortTertiary_pt: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "pt-BR",
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
    
    
    testCollatorJSWithSortPrimary_sw: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "sw-TZ",
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
    
    testCollatorJSWithSortPrimaryStable_sw: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "sw-TZ",
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
    
    testCollatorJSWithSortPrimaryLowerFirst_sw: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "sw-TZ",
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
    
    testCollatorJSWithSortPrimaryReverse_sw: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "sw-TZ",
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
    
    testCollatorJSWithSortPrimaryReverseLowerFirst_sw: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "sw-TZ",
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
    
    testCollatorJSWithSortSecondary_sw: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "sw-TZ",
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
    
    testCollatorJSWithSortTertiary_sw: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "sw-TZ",
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
    }
    
    
    
};