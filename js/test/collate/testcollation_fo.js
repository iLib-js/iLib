/*
 * testcollation_fo.js - test the Collator object in Faroese
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

module.exports.testcollation_fo = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testCollatorConstructorNative_fo: function(test) {
        test.expect(1);
        var col = new Collator({useNative: false, locale: "fo-FO"});

        test.ok(typeof(col) !== "undefined");
        test.done();
    },

    testCollatorDefaultLowerPrimary_fo: function(test) {
        test.expect(21);
        var col = new Collator({
            locale: "fo-FO",
            usage: "search",
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        // The Faroese alphabet also has some of the Danish, Norwegian, and Swedish
        // extra letters, namely Æ and Ø. Furthermore, the Faroese alphabet uses the Icelandic
        // eth, which follows the D. Five of the six vowels A, I, O, U and Y can get accents
        // and are after that considered separate letters. The consonants C, Q, X, W and Z are
        // not found, but are in the search order anyways to take care of loanwords from other
        // languages.
        // a á b [c] d ð e f g h i í j k l m n o ó p [q] r s t u ú v [w] [x] y ý [z] æ ø
        test.ok("a < á", col.compare("a", "á") < 0);
        test.ok("á < b", col.compare("á", "b") < 0);
        test.ok("b < c", col.compare("b", "c") < 0);
        test.ok("c < d", col.compare("c", "d") < 0);
        test.ok("d < ð", col.compare("d", "ð") < 0);
        test.ok("ð < e", col.compare("ð", "e") < 0);
        test.ok("e < f", col.compare("e", "f") < 0);
        test.ok("h < i", col.compare("h", "i") < 0);
        test.ok("i < í", col.compare("i", "í") < 0);
        test.ok("í < j", col.compare("í", "j") < 0);
        test.ok("n < o", col.compare("n", "o") < 0);
        test.ok("o < ó", col.compare("o", "ó") < 0);
        test.ok("ó < p", col.compare("ó", "p") < 0);
        test.ok("t < u", col.compare("t", "u") < 0);
        test.ok("u < ú", col.compare("u", "ú") < 0);
        test.ok("ú < v", col.compare("ú", "v") < 0);
        test.ok("v < y", col.compare("v", "y") < 0);
        test.ok("y < ý", col.compare("y", "ý") < 0);
        test.ok("ý < æ", col.compare("ý", "æ") < 0);
        test.ok("æ < ø", col.compare("æ", "ø") < 0);
        test.done();
    },

    testCollatorDefaultUpperPrimary_fo: function(test) {
        test.expect(21);
        var col = new Collator({
            locale: "fo-FO",
            usage: "search",
            useNative: false,
            sensitivity: "primary"
        });

        test.ok(typeof(col) !== "undefined");

        // The Faroese alphabet also has some of the Danish, Norwegian, and Swedish
        // extra letters, namely Æ and Ø. Furthermore, the Faroese alphabet uses the Icelandic
        // eth, which follows the D. Five of the six vowels A, I, O, U and Y can get accents
        // and are after that considered separate letters. The consonants C, Q, X, W and Z are
        // not found, but are in the search order anyways to take care of loanwords from other
        // languages.
        // A Á B [C] D Ð E F G H I Í J K L M N O Ó P [Q] R S T U Ú V [W] [X] Y Ý [Z] Æ Ø
        test.ok("A < Á", col.compare("A", "Á") < 0);
        test.ok("Á < B", col.compare("Á", "B") < 0);
        test.ok("B < C", col.compare("B", "C") < 0);
        test.ok("C < D", col.compare("C", "D") < 0);
        test.ok("D < Ð", col.compare("D", "Ð") < 0);
        test.ok("Ð < E", col.compare("Ð", "E") < 0);
        test.ok("E < F", col.compare("E", "F") < 0);
        test.ok("H < I", col.compare("H", "I") < 0);
        test.ok("I < Í", col.compare("I", "Í") < 0);
        test.ok("Í < J", col.compare("Í", "J") < 0);
        test.ok("N < O", col.compare("N", "O") < 0);
        test.ok("O < Ó", col.compare("O", "Ó") < 0);
        test.ok("Ó < P", col.compare("Ó", "P") < 0);
        test.ok("T < U", col.compare("T", "U") < 0);
        test.ok("U < Ú", col.compare("U", "Ú") < 0);
        test.ok("Ú < V", col.compare("Ú", "V") < 0);
        test.ok("V < Y", col.compare("V", "Y") < 0);
        test.ok("Y < Ý", col.compare("Y", "Ý") < 0);
        test.ok("Ý < Æ", col.compare("Ý", "Æ") < 0);
        test.ok("Æ < Ø", col.compare("Æ", "Ø") < 0);
        test.done();
    },

    testCollatorDefaultLowerSecondary_fo: function(test) {
        test.expect(21);
        var col = new Collator({
            locale: "fo-FO",
            usage: "search",
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        // the accents are primary differences, so this is the same order as
        // the primary alphabet
        // a á b [c] d ð e f g h i í j k l m n o ó p [q] r s t u ú v [w] [x] y ý [z] æ ø
        test.ok("a < á", col.compare("a", "á") < 0);
        test.ok("á < b", col.compare("á", "b") < 0);
        test.ok("b < c", col.compare("b", "c") < 0);
        test.ok("c < d", col.compare("c", "d") < 0);
        test.ok("d < ð", col.compare("d", "ð") < 0);
        test.ok("ð < e", col.compare("ð", "e") < 0);
        test.ok("e < f", col.compare("e", "f") < 0);
        test.ok("h < i", col.compare("h", "i") < 0);
        test.ok("i < í", col.compare("i", "í") < 0);
        test.ok("í < j", col.compare("í", "j") < 0);
        test.ok("n < o", col.compare("n", "o") < 0);
        test.ok("o < ó", col.compare("o", "ó") < 0);
        test.ok("ó < p", col.compare("ó", "p") < 0);
        test.ok("t < u", col.compare("t", "u") < 0);
        test.ok("u < ú", col.compare("u", "ú") < 0);
        test.ok("ú < v", col.compare("ú", "v") < 0);
        test.ok("v < y", col.compare("v", "y") < 0);
        test.ok("y < ý", col.compare("y", "ý") < 0);
        test.ok("ý < æ", col.compare("ý", "æ") < 0);
        test.ok("æ < ø", col.compare("æ", "ø") < 0);
        test.done();
    },

    testCollatorDefaultCaseSecondary_fo: function(test) {
        test.expect(10);
        var col = new Collator({
            locale: "fo-FO",
            usage: "search",
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        // the accents are primary differences, so this is the same order as
        // the primary alphabet
        // a á b [c] d ð e f g h i í j k l m n o ó p [q] r s t u ú v [w] [x] y ý [z] æ ø

        // case is a tertiary difference, so no difference here
        test.ok("a = A", col.compare("a", "A") === 0);
        test.ok("á = Á", col.compare("á", "Á") === 0);
        test.ok("ð = Ð", col.compare("ð", "Ð") === 0);
        test.ok("í = Í", col.compare("í", "Í") === 0);
        test.ok("ó = Ó", col.compare("ó", "Ó") === 0);
        test.ok("ú = Ú", col.compare("ú", "Ú") === 0);
        test.ok("ý = Ý", col.compare("ý", "Ý") === 0);
        test.ok("æ = Æ", col.compare("æ", "Æ") === 0);
        test.ok("ø = Ø", col.compare("ø", "Ø") === 0);
        test.done();
    },

    testCollatorDefaultVariantsSecondary_fo: function(test) {
        test.expect(11);
        var col = new Collator({
            locale: "fo-FO",
            usage: "search",
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        // the accents are primary differences, so this is the same order as
        // the primary alphabet
        // a á b [c] d ð e f g h i í j k l m n o ó p [q] r s t u ú v [w] [x] y ý [z] æ ø

        // variants are a quaternary difference, so no difference here
        test.ok("á = á", col.compare("á", "á") === 0);
        test.ok("í = í", col.compare("í", "í") === 0);
        test.ok("ó = ó", col.compare("ó", "ó") === 0);
        test.ok("ú = ú", col.compare("ú", "ú") === 0);
        test.ok("ý = ý", col.compare("ý", "ý") === 0);
        test.ok("Á = Á", col.compare("Á", "Á") === 0);
        test.ok("Í = Í", col.compare("Í", "Í") === 0);
        test.ok("Ó = Ó", col.compare("Ó", "Ó") === 0);
        test.ok("Ú = Ú", col.compare("Ú", "Ú") === 0);
        test.ok("Ý = Ý", col.compare("Ý", "Ý") === 0);
        test.done();
    },

    testCollatorDefaultUpperSecondary_fo: function(test) {
        test.expect(21);
        var col = new Collator({
            locale: "fo-FO",
            usage: "search",
            useNative: false,
            sensitivity: "secondary"
        });

        test.ok(typeof(col) !== "undefined");

        // the accents are primary differences, so this is the same order as
        // the primary alphabet
        // A Á B [C] D Ð E F G H I Í J K L M N O Ó P [Q] R S T U Ú V [W] [X] Y Ý [Z] Æ Ø
        test.ok("A < Á", col.compare("A", "Á") < 0);
        test.ok("Á < B", col.compare("Á", "B") < 0);
        test.ok("B < C", col.compare("B", "C") < 0);
        test.ok("C < D", col.compare("C", "D") < 0);
        test.ok("D < Ð", col.compare("D", "Ð") < 0);
        test.ok("Ð < E", col.compare("Ð", "E") < 0);
        test.ok("E < F", col.compare("E", "F") < 0);
        test.ok("H < I", col.compare("H", "I") < 0);
        test.ok("I < Í", col.compare("I", "Í") < 0);
        test.ok("Í < J", col.compare("Í", "J") < 0);
        test.ok("N < O", col.compare("N", "O") < 0);
        test.ok("O < Ó", col.compare("O", "Ó") < 0);
        test.ok("Ó < P", col.compare("Ó", "P") < 0);
        test.ok("T < U", col.compare("T", "U") < 0);
        test.ok("U < Ú", col.compare("U", "Ú") < 0);
        test.ok("Ú < V", col.compare("Ú", "V") < 0);
        test.ok("V < Y", col.compare("V", "Y") < 0);
        test.ok("Y < Ý", col.compare("Y", "Ý") < 0);
        test.ok("Ý < Æ", col.compare("Ý", "Æ") < 0);
        test.ok("Æ < Ø", col.compare("Æ", "Ø") < 0);
        test.done();
    },

    testCollatorDefaultLowerTertiary_fo: function(test) {
        test.expect(25);
        var col = new Collator({
            locale: "fo-FO",
            usage: "search",
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        // a á b [c] d ð e f g h i í j k l m n o ó p [q] r s t u ú v [w] [x] y ý [z] æ ø
        // case is a tertiary difference, so now sort based on case
        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("a < á", col.compare("a", "á") < 0);
        test.ok("a < Á", col.compare("a", "Á") < 0);
        test.ok("á < b", col.compare("á", "b") < 0);
        test.ok("B < b", col.compare("B", "b") < 0);
        test.ok("d < ð", col.compare("d", "ð") < 0);
        test.ok("Ð < ð", col.compare("Ð", "ð") < 0);
        test.ok("ð < e", col.compare("ð", "e") < 0);
        test.ok("i < í", col.compare("i", "í") < 0);
        test.ok("Í < í", col.compare("Í", "í") < 0);
        test.ok("í < j", col.compare("í", "j") < 0);
        test.ok("o < ó", col.compare("o", "ó") < 0);
        test.ok("Ó < ó", col.compare("Ó", "ó") < 0);
        test.ok("ó < p", col.compare("ó", "p") < 0);
        test.ok("u < ú", col.compare("u", "ú") < 0);
        test.ok("Ú < ú", col.compare("Ú", "ú") < 0);
        test.ok("ú < v", col.compare("ú", "v") < 0);
        test.ok("v < y", col.compare("v", "y") < 0);
        test.ok("y < ý", col.compare("y", "ý") < 0);
        test.ok("Ý < ý", col.compare("Ý", "ý") < 0);
        test.ok("ý < æ", col.compare("ý", "æ") < 0);
        test.ok("Æ < æ", col.compare("Æ", "æ") < 0);
        test.ok("æ < ø", col.compare("æ", "ø") < 0);
        test.ok("Ø < ø", col.compare("Ø", "ø") < 0);
        test.done();
    },

    testCollatorDefaultVariantsTertiary_fo: function(test) {
        test.expect(11);
        var col = new Collator({
            locale: "fo-FO",
            usage: "search",
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        // the accents are primary differences, so this is the same order as
        // the primary alphabet
        // a á b [c] d ð e f g h i í j k l m n o ó p [q] r s t u ú v [w] [x] y ý [z] æ ø

        // variants are a quaternary difference, so no difference here
        test.ok("á = á", col.compare("á", "á") === 0);
        test.ok("í = í", col.compare("í", "í") === 0);
        test.ok("ó = ó", col.compare("ó", "ó") === 0);
        test.ok("ú = ú", col.compare("ú", "ú") === 0);
        test.ok("ý = ý", col.compare("ý", "ý") === 0);
        test.ok("Á = Á", col.compare("Á", "Á") === 0);
        test.ok("Í = Í", col.compare("Í", "Í") === 0);
        test.ok("Ó = Ó", col.compare("Ó", "Ó") === 0);
        test.ok("Ú = Ú", col.compare("Ú", "Ú") === 0);
        test.ok("Ý = Ý", col.compare("Ý", "Ý") === 0);
        test.done();
    },

    testCollatorDefaultUpperTertiary_fo: function(test) {
        test.expect(21);
        var col = new Collator({
            locale: "fo-FO",
            usage: "search",
            useNative: false,
            sensitivity: "tertiary"
        });

        test.ok(typeof(col) !== "undefined");

        // the accents are primary differences, so this is the same order as
        // the primary alphabet
        // A Á B [C] D Ð E F G H I Í J K L M N O Ó P [Q] R S T U Ú V [W] [X] Y Ý [Z] Æ Ø
        test.ok("A < Á", col.compare("A", "Á") < 0);
        test.ok("Á < B", col.compare("Á", "B") < 0);
        test.ok("B < C", col.compare("B", "C") < 0);
        test.ok("C < D", col.compare("C", "D") < 0);
        test.ok("D < Ð", col.compare("D", "Ð") < 0);
        test.ok("Ð < E", col.compare("Ð", "E") < 0);
        test.ok("E < F", col.compare("E", "F") < 0);
        test.ok("H < I", col.compare("H", "I") < 0);
        test.ok("I < Í", col.compare("I", "Í") < 0);
        test.ok("Í < J", col.compare("Í", "J") < 0);
        test.ok("N < O", col.compare("N", "O") < 0);
        test.ok("O < Ó", col.compare("O", "Ó") < 0);
        test.ok("Ó < P", col.compare("Ó", "P") < 0);
        test.ok("T < U", col.compare("T", "U") < 0);
        test.ok("U < Ú", col.compare("U", "Ú") < 0);
        test.ok("Ú < V", col.compare("Ú", "V") < 0);
        test.ok("V < Y", col.compare("V", "Y") < 0);
        test.ok("Y < Ý", col.compare("Y", "Ý") < 0);
        test.ok("Ý < Æ", col.compare("Ý", "Æ") < 0);
        test.ok("Æ < Ø", col.compare("Æ", "Ø") < 0);
        test.done();
    },

    testCollatorDefaultLowerQuaternary_fo: function(test) {
        test.expect(25);
        var col = new Collator({
            locale: "fo-FO",
            usage: "search",
            useNative: false,
            sensitivity: "quaternary"
        });

        test.ok(typeof(col) !== "undefined");

        // a á b [c] d ð e f g h i í j k l m n o ó p [q] r s t u ú v [w] [x] y ý [z] æ ø
        // case is a tertiary difference, so now sort based on case
        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("a < á", col.compare("a", "á") < 0);
        test.ok("a < Á", col.compare("a", "Á") < 0);
        test.ok("á < b", col.compare("á", "b") < 0);
        test.ok("B < b", col.compare("B", "b") < 0);
        test.ok("d < ð", col.compare("d", "ð") < 0);
        test.ok("Ð < ð", col.compare("Ð", "ð") < 0);
        test.ok("ð < e", col.compare("ð", "e") < 0);
        test.ok("i < í", col.compare("i", "í") < 0);
        test.ok("Í < í", col.compare("Í", "í") < 0);
        test.ok("í < j", col.compare("í", "j") < 0);
        test.ok("o < ó", col.compare("o", "ó") < 0);
        test.ok("Ó < ó", col.compare("Ó", "ó") < 0);
        test.ok("ó < p", col.compare("ó", "p") < 0);
        test.ok("u < ú", col.compare("u", "ú") < 0);
        test.ok("Ú < ú", col.compare("Ú", "ú") < 0);
        test.ok("ú < v", col.compare("ú", "v") < 0);
        test.ok("v < y", col.compare("v", "y") < 0);
        test.ok("y < ý", col.compare("y", "ý") < 0);
        test.ok("Ý < ý", col.compare("Ý", "ý") < 0);
        test.ok("ý < æ", col.compare("ý", "æ") < 0);
        test.ok("Æ < æ", col.compare("Æ", "æ") < 0);
        test.ok("æ < ø", col.compare("æ", "ø") < 0);
        test.ok("Ø < ø", col.compare("Ø", "ø") < 0);
        test.done();
    },

    testCollatorDefaultVariantsQuaternary_fo: function(test) {
        test.expect(11);
        var col = new Collator({
            locale: "fo-FO",
            usage: "search",
            useNative: false,
            sensitivity: "quaternary"
        });

        test.ok(typeof(col) !== "undefined");

        // the accents are primary differences, so this is the same order as
        // the primary alphabet
        // a á b [c] d ð e f g h i í j k l m n o ó p [q] r s t u ú v [w] [x] y ý [z] æ ø

        // variants are a quaternary difference, so now sort these variants properly
        test.ok("á < á", col.compare("á", "á") < 0);
        test.ok("í < í", col.compare("í", "í") < 0);
        test.ok("ó < ó", col.compare("ó", "ó") < 0);
        test.ok("ú < ú", col.compare("ú", "ú") < 0);
        test.ok("ý < ý", col.compare("ý", "ý") < 0);
        test.ok("Á < Á", col.compare("Á", "Á") < 0);
        test.ok("Í < Í", col.compare("Í", "Í") < 0);
        test.ok("Ó < Ó", col.compare("Ó", "Ó") < 0);
        test.ok("Ú < Ú", col.compare("Ú", "Ú") < 0);
        test.ok("Ý < Ý", col.compare("Ý", "Ý") < 0);
        test.done();
    },

    testCollatorDefaultUpperQuaternary_fo: function(test) {
        test.expect(21);
        var col = new Collator({
            locale: "fo-FO",
            usage: "search",
            useNative: false,
            sensitivity: "quaternary"
        });

        test.ok(typeof(col) !== "undefined");

        // the accents are primary differences, so this is the same order as
        // the primary alphabet
        // A Á B [C] D Ð E F G H I Í J K L M N O Ó P [Q] R S T U Ú V [W] [X] Y Ý [Z] Æ Ø
        test.ok("A < Á", col.compare("A", "Á") < 0);
        test.ok("Á < B", col.compare("Á", "B") < 0);
        test.ok("B < C", col.compare("B", "C") < 0);
        test.ok("C < D", col.compare("C", "D") < 0);
        test.ok("D < Ð", col.compare("D", "Ð") < 0);
        test.ok("Ð < E", col.compare("Ð", "E") < 0);
        test.ok("E < F", col.compare("E", "F") < 0);
        test.ok("H < I", col.compare("H", "I") < 0);
        test.ok("I < Í", col.compare("I", "Í") < 0);
        test.ok("Í < J", col.compare("Í", "J") < 0);
        test.ok("N < O", col.compare("N", "O") < 0);
        test.ok("O < Ó", col.compare("O", "Ó") < 0);
        test.ok("Ó < P", col.compare("Ó", "P") < 0);
        test.ok("T < U", col.compare("T", "U") < 0);
        test.ok("U < Ú", col.compare("U", "Ú") < 0);
        test.ok("Ú < V", col.compare("Ú", "V") < 0);
        test.ok("V < Y", col.compare("V", "Y") < 0);
        test.ok("Y < Ý", col.compare("Y", "Ý") < 0);
        test.ok("Ý < Æ", col.compare("Ý", "Æ") < 0);
        test.ok("Æ < Ø", col.compare("Æ", "Ø") < 0);
        test.done();
    },

    testCollatorGetSortKeySimpleUpper_fo: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "fo-FO",
            useNative: false
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("AÁBCDÐE"), "0000200400600800a00c0");
        test.done();
    },
    testCollatorGetSortKeySimpleLower_fo: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "fo-FO",
            useNative: false
        });

        test.ok(typeof(col) !== "undefined");

        test.equal(col.sortKey("aábcdðe"), "0020220420620820a20c2");
        test.done();
    },


    testCollatorWithSort_fo: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "fo-FO",
            useNative: false,
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");

        var input = [ "æ", "p", "b", "w", "d", "ý", "h", "ú", "x", "ø", "í", "j",
                "v", "z", "ð", "m", "á", "o", "ó", "q", "g", "a", "r", "f", "s",
                "e", "c", "t", "k", "u", "y", "i", "n", "l" ];

        input.sort(col.getComparator());

        var expected = ["a", "á", "b", "c", "d", "ð", "e", "f", "g",
                        "h", "i", "í", "j", "k", "l", "m", "n", "o",
                        "ó", "p", "q", "r", "s", "t", "u", "ú", "v",
                        "w", "x", "y", "ý", "z", "æ", "ø"];

        test.deepEqual(input, expected);
        test.done();
    },


    testCollatorGetAvailableScripts_fo: function(test) {
        test.expect(1);
        test.deepEqual(Collator.getAvailableScripts(), ["Latn"]);
        test.done();
    },

    testCollatorGetAvailableStyles_fo: function(test) {
        test.expect(1);
        test.deepEqual(Collator.getAvailableStyles(), ["standard"]);
        test.done();
    },


    testJSCollatorNumeric_fo: function(test) {
        test.expect(4);
        var col = new Collator({
            locale: "fo-FO",
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