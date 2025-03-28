/*
 * testcollation_fi.js - test the Collator object in Finnish
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

module.exports.testcollation_fi = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testCollatorConstructorNative_fi: function(test) {
        test.expect(1);
        var col = new Collator({useNative: false, locale: "fi-FI"});

        test.ok(typeof(col) !== "undefined");
        test.done();
    },
    testCollatorDefaultLowerPrimary_fi: function(test) {
        test.expect(8);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        // The Finnish alphabet also has some extra letters, namely Å and Ä and Ö which appear
        // at the end of the alphabet as separate letters.
        // a b c d e f g h i j k l m n o p q r s t u v w x y z å ä ö
        test.ok("a < b", col.compare("a", "b") < 0);
        test.ok("b < c", col.compare("b", "c") < 0);
        test.ok("c < d", col.compare("c", "d") < 0);
        test.ok("d < e", col.compare("d", "e") < 0);
        test.ok("z < å", col.compare("z", "å") < 0);
        test.ok("å < ä", col.compare("å", "ä") < 0);
        test.ok("ä < ö", col.compare("ä", "ö") < 0);
        test.done();
    },
    testCollatorDefaultLowerAccentsPrimary_fi: function(test) {
        test.expect(15);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        // some primary equivalences, mostly for foreign loanwords
        test.ok("d = đ", col.compare("d", "đ") === 0);
        test.ok("đ = ð", col.compare("đ", "ð") === 0);
        test.ok("v = w", col.compare("v", "w") === 0);

        test.ok("y = ü", col.compare("y", "ü") === 0);
        test.ok("ü = ű", col.compare("ü", "ű") === 0);
        test.ok("ä = æ", col.compare("ä", "æ") === 0);
        test.ok("ö = ø", col.compare("ö", "ø") === 0);

        test.ok("n̵ = ŋ", col.compare("n̵", "ŋ") === 0);
        test.ok("g̵ = ǥ", col.compare("g̵", "ǥ") === 0);
        test.ok("t̵ = ŧ", col.compare("t̵", "ŧ") === 0);
        test.ok("z̵ = ʒ", col.compare("z̵", "ʒ") === 0);

        test.ok("tg < Þ", col.compare("tg", "Þ") < 0);
        test.ok("th = Þ", col.compare("th", "Þ") === 0);
        test.ok("Þ < ti", col.compare("Þ", "ti") < 0);
        test.done();
    },
    testCollatorDefaultCasePrimary_fi: function(test) {
        test.expect(6);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        // case is a tertiary difference, so no difference here
        test.ok("A = a", col.compare("A", "a") === 0);
        test.ok("Z = z", col.compare("Z", "z") === 0);
        test.ok("Å = å", col.compare("Å", "å") === 0);
        test.ok("Ä = ä", col.compare("Ä", "ä") === 0);
        test.ok("Ö = ö", col.compare("Ö", "ö") === 0);
        test.done();
    },
    testCollatorDefaultVariantsPrimary_fi: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        // variants are a quaternary difference, so no difference here
        test.ok("Å = Å", col.compare("Å", "Å") === 0);
        test.ok("å = å", col.compare("å", "å") === 0);
        test.ok("Ä = Ä", col.compare("Ä", "Ä") === 0);
        test.ok("ä = ä", col.compare("ä", "ä") === 0);
        test.ok("Ö = Ö", col.compare("Ö", "Ö") === 0);
        test.ok("ö = ö", col.compare("ö", "ö") === 0);
        test.done();
    },
    testCollatorDefaultUpperPrimary_fi: function(test) {
        test.expect(8);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        // The Finnish alphabet also has some extra letters, namely Å and Ä and Ö which appear
        // at the end of the alphabet as separate letters.
        // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Å Ä Ö
        test.ok("A < B", col.compare("A", "B") < 0);
        test.ok("B < C", col.compare("B", "C") < 0);
        test.ok("C < D", col.compare("C", "D") < 0);
        test.ok("D < E", col.compare("D", "E") < 0);
        test.ok("Z < Å", col.compare("Z", "Å") < 0);
        test.ok("Å < Ä", col.compare("Å", "Ä") < 0);
        test.ok("Ä < Ö", col.compare("Ä", "Ö") < 0);
        test.done();
    },
    testCollatorDefaultUpperAccentsPrimary_fi: function(test) {
        test.expect(15);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        // some primary equivalences, mostly for foreign loanwords
        test.ok("D = Đ", col.compare("D", "Đ") === 0);
        test.ok("Đ = Ð", col.compare("Đ", "Ð") === 0);
        test.ok("V = W", col.compare("V", "W") === 0);

        test.ok("Y = Ü", col.compare("Y", "Ü") === 0);
        test.ok("Ü = Ű", col.compare("Ü", "Ű") === 0);
        test.ok("Ä = Æ", col.compare("Ä", "Æ") === 0);
        test.ok("Ö = Ø", col.compare("Ö", "Ø") === 0);

        test.ok("N̵ = Ŋ", col.compare("N̵", "Ŋ") === 0);
        test.ok("G̵ = Ǥ", col.compare("G̵", "Ǥ") === 0);
        test.ok("T̵ = Ŧ", col.compare("T̵", "Ŧ") === 0);
        test.ok("Z̵ = Ʒ", col.compare("Z̵", "Ʒ") === 0);

        test.ok("TG < Þ", col.compare("TG", "Þ") < 0);
        test.ok("TH = Þ", col.compare("TH", "Þ") === 0);
        test.ok("Þ < TI", col.compare("Þ", "TI") < 0);
        test.done();
    },
    testCollatorDefaultLowerSecondary_fi: function(test) {
        test.expect(8);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        // the accents are primary differences, so this is the same order as
        // the primary alphabet
        // a b c d e f g h i j k l m n o p q r s t u v w x y z å ä ö
        test.ok("a < b", col.compare("a", "b") < 0);
        test.ok("b < c", col.compare("b", "c") < 0);
        test.ok("c < d", col.compare("c", "d") < 0);
        test.ok("d < e", col.compare("d", "e") < 0);
        test.ok("z < å", col.compare("z", "å") < 0);
        test.ok("å < ä", col.compare("å", "ä") < 0);
        test.ok("ä < ö", col.compare("ä", "ö") < 0);
        test.done();
    },
    testCollatorDefaultLowerAccentsSecondary_fi: function(test) {
        test.expect(14);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        // some secondary differences, mostly for foreign loanwords
        test.ok("d < đ", col.compare("d", "đ") < 0);
        test.ok("đ < ð", col.compare("đ", "ð") < 0);
        test.ok("v < w", col.compare("v", "w") < 0);

        test.ok("y < ü", col.compare("y", "ü") < 0);
        test.ok("ü < ű", col.compare("ü", "ű") < 0);
        test.ok("ä < æ", col.compare("ä", "æ") < 0);
        test.ok("ö < ø", col.compare("ö", "ø") < 0);

        test.ok("n̵ < ŋ", col.compare("n̵", "ŋ") < 0);
        test.ok("g̵ < ǥ", col.compare("g̵", "ǥ") < 0);
        test.ok("t̵ < ŧ", col.compare("t̵", "ŧ") < 0);
        test.ok("z̵ < ʒ", col.compare("z̵", "ʒ") < 0);

        test.ok("th < Þ", col.compare("th", "Þ") < 0);
        test.ok("Þ < ti", col.compare("Þ", "ti") < 0);
        test.done();
    },
    testCollatorDefaultCaseSecondary_fi: function(test) {
        test.expect(6);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        // case is a tertiary difference, so no difference here
        test.ok("A = a", col.compare("A", "a") === 0);
        test.ok("Z = z", col.compare("Z", "z") === 0);
        test.ok("Å = å", col.compare("Å", "å") === 0);
        test.ok("Ä = ä", col.compare("Ä", "ä") === 0);
        test.ok("Ö = ö", col.compare("Ö", "ö") === 0);
        test.done();
    },
    testCollatorDefaultVariantsSecondary_fi: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        // variants are a quaternary difference, so no difference here
        test.ok("Å = Å", col.compare("Å", "Å") === 0);
        test.ok("å = å", col.compare("å", "å") === 0);
        test.ok("Ä = Ä", col.compare("Ä", "Ä") === 0);
        test.ok("ä = ä", col.compare("ä", "ä") === 0);
        test.ok("Ö = Ö", col.compare("Ö", "Ö") === 0);
        test.ok("ö = ö", col.compare("ö", "ö") === 0);
        test.done();
    },
    testCollatorDefaultUpperSecondary_fi: function(test) {
        test.expect(8);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        // the accents are primary differences, so this is the same order as
        // the primary alphabet
        // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Å Ä Å
        test.ok("A < B", col.compare("A", "B") < 0);
        test.ok("B < C", col.compare("B", "C") < 0);
        test.ok("C < D", col.compare("C", "D") < 0);
        test.ok("D < E", col.compare("D", "E") < 0);
        test.ok("Z < Å", col.compare("Z", "Å") < 0);
        test.ok("Å < Ä", col.compare("Å", "Ä") < 0);
        test.ok("Ä < Ö", col.compare("Ä", "Ö") < 0);
        test.done();
    },
    testCollatorDefaultUpperAccentsSecondary_fi: function(test) {
        test.expect(14);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        // some secondary differences, mostly for foreign loanwords
        test.ok("D < đ", col.compare("D", "Đ") < 0);
        test.ok("Đ < Ð", col.compare("Đ", "Ð") < 0);
        test.ok("V < W", col.compare("V", "W") < 0);

        test.ok("Y < Ü", col.compare("Y", "Ü") < 0);
        test.ok("Ü < Ű", col.compare("Ü", "Ű") < 0);
        test.ok("Ä < Æ", col.compare("Ä", "Æ") < 0);
        test.ok("Ö < Ø", col.compare("Ö", "Ø") < 0);

        test.ok("N̵ < Ŋ", col.compare("N̵", "Ŋ") < 0);
        test.ok("G̵ < Ǥ", col.compare("G̵", "Ǥ") < 0);
        test.ok("T̵ < Ŧ", col.compare("T̵", "Ŧ") < 0);
        test.ok("Z̵ < Ʒ", col.compare("Z̵", "Ʒ") < 0);

        test.ok("TH < Þ", col.compare("TH", "Þ") < 0);
        test.ok("Þ < TI", col.compare("Þ", "TI") < 0);
        test.done();
    },
    testCollatorDefaultLowerTertiary_fi: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        // case is a tertiary difference, so now sort based on case
        test.ok("a < b", col.compare("a", "b") < 0);
        test.ok("b < c", col.compare("b", "c") < 0);
        test.ok("c < d", col.compare("c", "d") < 0);
        test.ok("d < e", col.compare("d", "e") < 0);
        test.ok("z < å", col.compare("z", "å") < 0);
        test.ok("å < ä", col.compare("å", "ä") < 0);
        test.ok("ä < ö", col.compare("ä", "ö") < 0);

        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("Z < z", col.compare("Z", "z") < 0);
        test.ok("Å < å", col.compare("Å", "å") < 0);
        test.ok("Ä < ä", col.compare("Ä", "ä") < 0);
        test.ok("Å < å", col.compare("Å", "å") < 0);
        test.done();
    },
    testCollatorDefaultLowerAccentsTertiary_fi: function(test) {
        test.expect(14);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        // some secondary differences, mostly for foreign loanwords
        test.ok("d < đ", col.compare("d", "đ") < 0);
        test.ok("đ < ð", col.compare("đ", "ð") < 0);
        test.ok("v < w", col.compare("v", "w") < 0);

        test.ok("y < ü", col.compare("y", "ü") < 0);
        test.ok("ü < ű", col.compare("ü", "ű") < 0);
        test.ok("ä < æ", col.compare("ä", "æ") < 0);
        test.ok("ö < ø", col.compare("ö", "ø") < 0);

        test.ok("n̵ < ŋ", col.compare("n̵", "ŋ") < 0);
        test.ok("g̵ < ǥ", col.compare("g̵", "ǥ") < 0);
        test.ok("t̵ < ŧ", col.compare("t̵", "ŧ") < 0);
        test.ok("z̵ < ʒ", col.compare("z̵", "ʒ") < 0);

        test.ok("th < þ", col.compare("th", "þ") < 0);
        test.ok("þ < ti", col.compare("þ", "ti") < 0);
        test.done();
    },


    testCollatorDefaultVariantsTertiary_fi: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        // variants are a quaternary difference, so no difference here
        test.ok("Å = Å", col.compare("Å", "Å") === 0);
        test.ok("å = å", col.compare("å", "å") === 0);
        test.ok("Ä = Ä", col.compare("Ä", "Ä") === 0);
        test.ok("ä = ä", col.compare("ä", "ä") === 0);
        test.ok("Ö = Ö", col.compare("Ö", "Ö") === 0);
        test.ok("ö = ö", col.compare("ö", "ö") === 0);
        test.done();
    },
    testCollatorDefaultUpperTertiary_fi: function(test) {
        test.expect(8);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        // the accents are primary differences, so this is the same order as
        // the primary alphabet
        test.ok("A < B", col.compare("A", "B") < 0);
        test.ok("B < C", col.compare("B", "C") < 0);
        test.ok("C < D", col.compare("C", "D") < 0);
        test.ok("D < E", col.compare("D", "E") < 0);
        test.ok("Z < Å", col.compare("Z", "Å") < 0);
        test.ok("Å < Ä", col.compare("Å", "Ä") < 0);
        test.ok("Ä < Ö", col.compare("Ä", "Ö") < 0);
        test.done();
    },
    testCollatorDefaultUpperAccentsTertiary_fi: function(test) {
        test.expect(14);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        // some secondary differences, mostly for foreign loanwords
        test.ok("D < đ", col.compare("D", "Đ") < 0);
        test.ok("Đ < Ð", col.compare("Đ", "Ð") < 0);
        test.ok("V < W", col.compare("V", "W") < 0);

        test.ok("Y < Ü", col.compare("Y", "Ü") < 0);
        test.ok("Ü < Ű", col.compare("Ü", "Ű") < 0);
        test.ok("Ä < Æ", col.compare("Ä", "Æ") < 0);
        test.ok("Ö < Ø", col.compare("Ö", "Ø") < 0);

        test.ok("N̵ < Ŋ", col.compare("N̵", "Ŋ") < 0);
        test.ok("G̵ < Ǥ", col.compare("G̵", "Ǥ") < 0);
        test.ok("T̵ < Ŧ", col.compare("T̵", "Ŧ") < 0);
        test.ok("Z̵ < Ʒ", col.compare("Z̵", "Ʒ") < 0);

        test.ok("TH < Þ", col.compare("TH", "Þ") < 0);
        test.ok("Þ < TI", col.compare("Þ", "TI") < 0);
        test.done();
    },
    testCollatorDefaultLowerQuaternary_fi: function(test) {
        test.expect(13);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "quaternary"
        });

        test.ok(typeof(col) !== "undefined");

        // case is a tertiary difference, so now sort based on case
        test.ok("a < b", col.compare("a", "b") < 0);
        test.ok("b < c", col.compare("b", "c") < 0);
        test.ok("c < d", col.compare("c", "d") < 0);
        test.ok("d < e", col.compare("d", "e") < 0);
        test.ok("z < å", col.compare("z", "å") < 0);
        test.ok("å < ä", col.compare("å", "ä") < 0);
        test.ok("ä < ö", col.compare("ä", "ö") < 0);

        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("Z < z", col.compare("Z", "z") < 0);
        test.ok("Å < å", col.compare("Å", "å") < 0);
        test.ok("Ä < ä", col.compare("Ä", "ä") < 0);
        test.ok("Å < å", col.compare("Å", "å") < 0);
        test.done();
    },
    testCollatorDefaultVariantsQuaternary_fi: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "quaternary"
        });

        test.ok(typeof(col) !== "undefined");

        // variants are a quaternary difference, so now sort these variants properly
        test.ok("Å < Å", col.compare("Å", "Å") < 0);
        test.ok("å < å", col.compare("å", "å") < 0);
        test.ok("Ä < Ä", col.compare("Ä", "Ä") < 0);
        test.ok("ä < ä", col.compare("ä", "ä") < 0);
        test.ok("Ö < Ö", col.compare("Ö", "Ö") < 0);
        test.ok("ö < ö", col.compare("ö", "ö") < 0);
        test.done();
    },
    testCollatorDefaultUpperQuaternary_fi: function(test) {
        test.expect(8);
        var col = new Collator({
            locale: "fi-FI",
            usage: "search",
            useNative: false,
            sensitivity: "quaternary"
        });

        test.ok(typeof(col) !== "undefined");

        test.ok("A < B", col.compare("A", "B") < 0);
        test.ok("B < C", col.compare("B", "C") < 0);
        test.ok("C < D", col.compare("C", "D") < 0);
        test.ok("D < E", col.compare("D", "E") < 0);
        test.ok("Z < Å", col.compare("Z", "Å") < 0);
        test.ok("Å < Ä", col.compare("Å", "Ä") < 0);
        test.ok("Ä < Ö", col.compare("Ä", "Ö") < 0);
        test.done();
    },
    testCollatorGetSortKeySimpleUpper_fi: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "fi-FI",
            useNative: false
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("ABCÅÄÖ"), "000020040320340360");
        test.done();
    },
    testCollatorGetSortKeySimpleLower_fi: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "fi-FI",
            useNative: false
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("abcåäö"), "002022042322342362");
        test.done();
    },
    testCollatorWithSort_fi: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "fi-FI",
            useNative: false,
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");

        var input = [ "å", "p", "b", "w", "d", "h", "x", "ä", "j", "v", "z",
                "m", "o", "q", "ö", "g", "a", "r", "f", "s", "e", "c", "t", "k",
                "u", "y", "i", "n", "l", ];

        input.sort(col.getComparator());

        var expected = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
                "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
                "y", "z", "å", "ä", "ö" ];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorGetAvailableScripts_fi: function(test) {
        test.expect(1);
        test.deepEqual(Collator.getAvailableScripts(), ["Latn"]);
        test.done();
    },
    testCollatorGetAvailableStyles_fi: function(test) {
        test.expect(1);
        test.deepEqual(Collator.getAvailableStyles(), ["standard"]);
        test.done();
    },
    testJSCollatorNumeric_fi: function(test) {
        test.expect(4);
        var col = new Collator({
            locale: "fi-FI",
            useNative: false,
            sensitivity: "case",
            numeric: true
        });

        test.ok(typeof(col) !== "undefined");

        // period is the thousands separator and comma is the decimal separator
        test.equal(col.compare("0.012.123,4", "12.123,4"), 0);
        test.ok(col.compare("00123,4", "123") > 0);
        test.ok(col.compare("00123,4", "124") < 0);
        test.done();
    }
};