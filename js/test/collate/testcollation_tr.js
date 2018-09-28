/*
 * testcollation_tr.js - test the Collator object in Turkish
 * 
 * Copyright © 2015, 2017-2018, JEDLSoft
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

module.exports.testcollation_tr = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJSCollatorQuat_tr: function(test) {
        test.expect(51);
        var col = new Collator({
            locale: "tr-TR",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
        test.ok("A < a",  col.compare("A", "a") < 0);
        test.ok("a < Â",  col.compare("a", "Â") < 0);
        test.ok("Â < Â",  col.compare("Â", "Â") < 0);
        test.ok("Â < â",  col.compare("Â", "â") < 0);
        test.ok("â < â",  col.compare("â", "â") < 0);
        test.ok("â < B",  col.compare("â", "B") < 0);
        test.ok("C < c",  col.compare("C", "c") < 0);
        test.ok("c < Ç",  col.compare("c", "Ç") < 0);
        test.ok("Ç < Ç",  col.compare("Ç", "Ç") < 0);
        test.ok("Ç < ç",  col.compare("Ç", "ç") < 0);
        test.ok("ç < ç",  col.compare("ç", "ç") < 0);
        test.ok("ç < D",  col.compare("ç", "D") < 0);
        test.ok("G < g",  col.compare("G", "g") < 0);
        test.ok("g < Ğ",  col.compare("g", "Ğ") < 0);
        test.ok("Ğ < Ğ",  col.compare("Ğ", "Ğ") < 0);
        test.ok("Ğ < ğ",  col.compare("Ğ", "ğ") < 0);
        test.ok("ğ < ğ",  col.compare("ğ", "ğ") < 0);
        test.ok("ğ < H",  col.compare("ğ", "H") < 0);
        test.ok("H < h",  col.compare("H", "h") < 0);
        test.ok("h < I",  col.compare("h", "I") < 0);
        test.ok("I < ı",  col.compare("I", "ı") < 0);
        test.ok("ı < Î",  col.compare("ı", "Î") < 0);
        test.ok("Î < Î",  col.compare("Î", "Î") < 0);
        test.ok("Î < î",  col.compare("Î", "î") < 0);
        test.ok("î < î",  col.compare("î", "î") < 0);
        test.ok("î < İ",  col.compare("î", "İ") < 0);
        test.ok("İ < i",  col.compare("İ", "i") < 0);
        test.ok("i < J",  col.compare("i", "J") < 0);
        test.ok("O < o",  col.compare("O", "o") < 0);
        test.ok("o < Ö",  col.compare("o", "Ö") < 0);
        test.ok("Ö < Ö",  col.compare("Ö", "Ö") < 0);
        test.ok("Ö < ö",  col.compare("Ö", "ö") < 0);
        test.ok("ö < ö",  col.compare("ö", "ö") < 0);
        test.ok("ö < P",  col.compare("ö", "P") < 0);
        test.ok("S < s",  col.compare("S", "s") < 0);
        test.ok("s < Ş",  col.compare("s", "Ş") < 0);
        test.ok("Ş < Ş",  col.compare("Ş", "Ş") < 0);
        test.ok("Ş < ş",  col.compare("Ş", "ş") < 0);
        test.ok("ş < ş",  col.compare("ş", "ş") < 0);
        test.ok("ş < T",  col.compare("ş", "T") < 0);
        test.ok("U < u",  col.compare("U", "u") < 0);
        test.ok("u < Û",  col.compare("u", "Û") < 0);
        test.ok("Û < Û",  col.compare("Û", "Û") < 0);
        test.ok("Û < û",  col.compare("Û", "û") < 0);
        test.ok("û < û",  col.compare("û", "û") < 0);
        test.ok("û < Ü",  col.compare("û", "Ü") < 0);
        test.ok("Ü < Ü",  col.compare("Ü", "Ü") < 0);
        test.ok("Ü < ü",  col.compare("Ü", "ü") < 0);
        test.ok("ü < ü",  col.compare("ü", "ü") < 0);
        test.ok("ü < V",  col.compare("ü", "V") < 0);
        test.done();
    },
    
    testJSCollatorTer_tr: function(test) {
        test.expect(51);
        var col = new Collator({
            locale: "tr-TR",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
        test.ok("A < a",  col.compare("A", "a") < 0);
        test.ok("a < Â",  col.compare("a", "Â") < 0);
        test.ok("Â = Â",  col.compare("Â", "Â") === 0);
        test.ok("Â < â",  col.compare("Â", "â") < 0);
        test.ok("â = â",  col.compare("â", "â") === 0);
        test.ok("â < B",  col.compare("â", "B") < 0);
        test.ok("C < c",  col.compare("C", "c") < 0);
        test.ok("c < Ç",  col.compare("c", "Ç") < 0);
        test.ok("Ç = Ç",  col.compare("Ç", "Ç") === 0);
        test.ok("Ç < ç",  col.compare("Ç", "ç") < 0);
        test.ok("ç = ç",  col.compare("ç", "ç") === 0);
        test.ok("ç < D",  col.compare("ç", "D") < 0);
        test.ok("G < g",  col.compare("G", "g") < 0);
        test.ok("g < Ğ",  col.compare("g", "Ğ") < 0);
        test.ok("Ğ = Ğ",  col.compare("Ğ", "Ğ") === 0);
        test.ok("Ğ < ğ",  col.compare("Ğ", "ğ") < 0);
        test.ok("ğ = ğ",  col.compare("ğ", "ğ") === 0);
        test.ok("ğ < H",  col.compare("ğ", "H") < 0);
        test.ok("H < h",  col.compare("H", "h") < 0);
        test.ok("h < I",  col.compare("h", "I") < 0);
        test.ok("I < ı",  col.compare("I", "ı") < 0);
        test.ok("ı < Î",  col.compare("ı", "Î") < 0);
        test.ok("Î = Î",  col.compare("Î", "Î") === 0);
        test.ok("Î < î",  col.compare("Î", "î") < 0);
        test.ok("î = î",  col.compare("î", "î") === 0);
        test.ok("î < İ",  col.compare("î", "İ") < 0);
        test.ok("İ < i",  col.compare("İ", "i") < 0);
        test.ok("i < J",  col.compare("i", "J") < 0);
        test.ok("O < o",  col.compare("O", "o") < 0);
        test.ok("o < Ö",  col.compare("o", "Ö") < 0);
        test.ok("Ö = Ö",  col.compare("Ö", "Ö") === 0);
        test.ok("Ö < ö",  col.compare("Ö", "ö") < 0);
        test.ok("ö = ö",  col.compare("ö", "ö") === 0);
        test.ok("ö < P",  col.compare("ö", "P") < 0);
        test.ok("S < s",  col.compare("S", "s") < 0);
        test.ok("s < Ş",  col.compare("s", "Ş") < 0);
        test.ok("Ş = Ş",  col.compare("Ş", "Ş") === 0);
        test.ok("Ş < ş",  col.compare("Ş", "ş") < 0);
        test.ok("ş = ş",  col.compare("ş", "ş") === 0);
        test.ok("ş < T",  col.compare("ş", "T") < 0);
        test.ok("U < u",  col.compare("U", "u") < 0);
        test.ok("u < Û",  col.compare("u", "Û") < 0);
        test.ok("Û = Û",  col.compare("Û", "Û") === 0);
        test.ok("Û < û",  col.compare("Û", "û") < 0);
        test.ok("û = û",  col.compare("û", "û") === 0);
        test.ok("û < Ü",  col.compare("û", "Ü") < 0);
        test.ok("Ü = Ü",  col.compare("Ü", "Ü") === 0);
        test.ok("Ü < ü",  col.compare("Ü", "ü") < 0);
        test.ok("ü = ü",  col.compare("ü", "ü") === 0);
        test.ok("ü < V",  col.compare("ü", "V") < 0);
        test.done();
    },
    
    testJSCollatorSec_tr: function(test) {
        test.expect(51);
        var col = new Collator({
            locale: "tr-TR",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
        test.ok("A = a",  col.compare("A", "a") === 0);
        test.ok("a < Â",  col.compare("a", "Â") < 0);
        test.ok("Â = Â",  col.compare("Â", "Â") === 0);
        test.ok("Â = â",  col.compare("Â", "â") === 0);
        test.ok("â = â",  col.compare("â", "â") === 0);
        test.ok("â < B",  col.compare("â", "B") < 0);
        test.ok("C = c",  col.compare("C", "c") === 0);
        test.ok("c < Ç",  col.compare("c", "Ç") < 0);
        test.ok("Ç = Ç",  col.compare("Ç", "Ç") === 0);
        test.ok("Ç = ç",  col.compare("Ç", "ç") === 0);
        test.ok("ç = ç",  col.compare("ç", "ç") === 0);
        test.ok("ç < D",  col.compare("ç", "D") < 0);
        test.ok("G = g",  col.compare("G", "g") === 0);
        test.ok("g < Ğ",  col.compare("g", "Ğ") < 0);
        test.ok("Ğ = Ğ",  col.compare("Ğ", "Ğ") === 0);
        test.ok("Ğ = ğ",  col.compare("Ğ", "ğ") === 0);
        test.ok("ğ = ğ",  col.compare("ğ", "ğ") === 0);
        test.ok("ğ < H",  col.compare("ğ", "H") < 0);
        test.ok("H = h",  col.compare("H", "h") === 0);
        test.ok("h < I",  col.compare("h", "I") < 0);
        test.ok("I = ı",  col.compare("I", "ı") === 0);
        test.ok("ı < Î",  col.compare("ı", "Î") < 0);
        test.ok("Î = Î",  col.compare("Î", "Î") === 0);
        test.ok("Î = î",  col.compare("Î", "î") === 0);
        test.ok("î = î",  col.compare("î", "î") === 0);
        test.ok("î < İ",  col.compare("î", "İ") < 0);
        test.ok("İ = i",  col.compare("İ", "i") === 0);
        test.ok("i < J",  col.compare("i", "J") < 0);
        test.ok("O = o",  col.compare("O", "o") === 0);
        test.ok("o < Ö",  col.compare("o", "Ö") < 0);
        test.ok("Ö = Ö",  col.compare("Ö", "Ö") === 0);
        test.ok("Ö = ö",  col.compare("Ö", "ö") === 0);
        test.ok("ö = ö",  col.compare("ö", "ö") === 0);
        test.ok("ö < P",  col.compare("ö", "P") < 0);
        test.ok("S = s",  col.compare("S", "s") === 0);
        test.ok("s < Ş",  col.compare("s", "Ş") < 0);
        test.ok("Ş = Ş",  col.compare("Ş", "Ş") === 0);
        test.ok("Ş = ş",  col.compare("Ş", "ş") === 0);
        test.ok("ş = ş",  col.compare("ş", "ş") === 0);
        test.ok("ş < T",  col.compare("ş", "T") < 0);
        test.ok("U = u",  col.compare("U", "u") === 0);
        test.ok("u < Û",  col.compare("u", "Û") < 0);
        test.ok("Û = Û",  col.compare("Û", "Û") === 0);
        test.ok("Û = û",  col.compare("Û", "û") === 0);
        test.ok("û = û",  col.compare("û", "û") === 0);
        test.ok("û < Ü",  col.compare("û", "Ü") < 0);
        test.ok("Ü = Ü",  col.compare("Ü", "Ü") === 0);
        test.ok("Ü = ü",  col.compare("Ü", "ü") === 0);
        test.ok("ü = ü",  col.compare("ü", "ü") === 0);
        test.ok("ü < V",  col.compare("ü", "V") < 0);
        test.done();
    },
    
    testJSCollatorPri_tr: function(test) {
        test.expect(51);
        var col = new Collator({
            locale: "tr-TR",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
        test.ok("A = a",  col.compare("A", "a") === 0);
        test.ok("a = Â",  col.compare("a", "Â") === 0);
        test.ok("Â = Â",  col.compare("Â", "Â") === 0);
        test.ok("Â = â",  col.compare("Â", "â") === 0);
        test.ok("â = â",  col.compare("â", "â") === 0);
        test.ok("â < B",  col.compare("â", "B") < 0);
        test.ok("C = c",  col.compare("C", "c") === 0);
        test.ok("c < Ç",  col.compare("c", "Ç") < 0);
        test.ok("Ç = Ç",  col.compare("Ç", "Ç") === 0);
        test.ok("Ç = ç",  col.compare("Ç", "ç") === 0);
        test.ok("ç = ç",  col.compare("ç", "ç") === 0);
        test.ok("ç < D",  col.compare("ç", "D") < 0);
        test.ok("G = g",  col.compare("G", "g") === 0);
        test.ok("g < Ğ",  col.compare("g", "Ğ") < 0);
        test.ok("Ğ = Ğ",  col.compare("Ğ", "Ğ") === 0);
        test.ok("Ğ = ğ",  col.compare("Ğ", "ğ") === 0);
        test.ok("ğ = ğ",  col.compare("ğ", "ğ") === 0);
        test.ok("ğ < H",  col.compare("ğ", "H") < 0);
        test.ok("H = h",  col.compare("H", "h") === 0);
        test.ok("h < I",  col.compare("h", "I") < 0);
        test.ok("I = ı",  col.compare("I", "ı") === 0);
        test.ok("ı = Î",  col.compare("ı", "Î") === 0);
        test.ok("Î = Î",  col.compare("Î", "Î") === 0);
        test.ok("Î = î",  col.compare("Î", "î") === 0);
        test.ok("î = î",  col.compare("î", "î") === 0);
        test.ok("î < İ",  col.compare("î", "İ") < 0);
        test.ok("İ = i",  col.compare("İ", "i") === 0);
        test.ok("i < J",  col.compare("i", "J") < 0);
        test.ok("O = o",  col.compare("O", "o") === 0);
        test.ok("o < Ö",  col.compare("o", "Ö") < 0);
        test.ok("Ö = Ö",  col.compare("Ö", "Ö") === 0);
        test.ok("Ö = ö",  col.compare("Ö", "ö") === 0);
        test.ok("ö = ö",  col.compare("ö", "ö") === 0);
        test.ok("ö < P",  col.compare("ö", "P") < 0);
        test.ok("S = s",  col.compare("S", "s") === 0);
        test.ok("s < Ş",  col.compare("s", "Ş") < 0);
        test.ok("Ş = Ş",  col.compare("Ş", "Ş") === 0);
        test.ok("Ş = ş",  col.compare("Ş", "ş") === 0);
        test.ok("ş = ş",  col.compare("ş", "ş") === 0);
        test.ok("ş < T",  col.compare("ş", "T") < 0);
        test.ok("U = u",  col.compare("U", "u") === 0);
        test.ok("u = Û",  col.compare("u", "Û") === 0);
        test.ok("Û = Û",  col.compare("Û", "Û") === 0);
        test.ok("Û = û",  col.compare("Û", "û") === 0);
        test.ok("û = û",  col.compare("û", "û") === 0);
        test.ok("û < Ü",  col.compare("û", "Ü") < 0);
        test.ok("Ü = Ü",  col.compare("Ü", "Ü") === 0);
        test.ok("Ü = ü",  col.compare("Ü", "ü") === 0);
        test.ok("ü = ü",  col.compare("ü", "ü") === 0);
        test.ok("ü < V",  col.compare("ü", "V") < 0);
        test.done();
    },
    
    testJSCollatorSortQuat_tr: function(test) {
        test.expect(51);
        var col = new Collator({
            locale: "tr-TR",
            useNative: false,
            sensitivity: "quaternary",
            usage: "sort"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
        test.ok("A < a",  col.compare("A", "a") < 0);
        test.ok("a < Â",  col.compare("a", "Â") < 0);
        test.ok("Â < Â",  col.compare("Â", "Â") < 0);
        test.ok("Â < â",  col.compare("Â", "â") < 0);
        test.ok("â < â",  col.compare("â", "â") < 0);
        test.ok("â < B",  col.compare("â", "B") < 0);
        test.ok("C < c",  col.compare("C", "c") < 0);
        test.ok("c < Ç",  col.compare("c", "Ç") < 0);
        test.ok("Ç < Ç",  col.compare("Ç", "Ç") < 0);
        test.ok("Ç < ç",  col.compare("Ç", "ç") < 0);
        test.ok("ç < ç",  col.compare("ç", "ç") < 0);
        test.ok("ç < D",  col.compare("ç", "D") < 0);
        test.ok("G < g",  col.compare("G", "g") < 0);
        test.ok("g < Ğ",  col.compare("g", "Ğ") < 0);
        test.ok("Ğ < Ğ",  col.compare("Ğ", "Ğ") < 0);
        test.ok("Ğ < ğ",  col.compare("Ğ", "ğ") < 0);
        test.ok("ğ < ğ",  col.compare("ğ", "ğ") < 0);
        test.ok("ğ < H",  col.compare("ğ", "H") < 0);
        test.ok("H < h",  col.compare("H", "h") < 0);
        test.ok("h < I",  col.compare("h", "I") < 0);
        test.ok("I < ı",  col.compare("I", "ı") < 0);
        test.ok("ı < Î",  col.compare("ı", "Î") < 0);
        test.ok("Î < Î",  col.compare("Î", "Î") < 0);
        test.ok("Î < î",  col.compare("Î", "î") < 0);
        test.ok("î < î",  col.compare("î", "î") < 0);
        test.ok("î < İ",  col.compare("î", "İ") < 0);
        test.ok("İ < i",  col.compare("İ", "i") < 0);
        test.ok("i < J",  col.compare("i", "J") < 0);
        test.ok("O < o",  col.compare("O", "o") < 0);
        test.ok("o < Ö",  col.compare("o", "Ö") < 0);
        test.ok("Ö < Ö",  col.compare("Ö", "Ö") < 0);
        test.ok("Ö < ö",  col.compare("Ö", "ö") < 0);
        test.ok("ö < ö",  col.compare("ö", "ö") < 0);
        test.ok("ö < P",  col.compare("ö", "P") < 0);
        test.ok("S < s",  col.compare("S", "s") < 0);
        test.ok("s < Ş",  col.compare("s", "Ş") < 0);
        test.ok("Ş < Ş",  col.compare("Ş", "Ş") < 0);
        test.ok("Ş < ş",  col.compare("Ş", "ş") < 0);
        test.ok("ş < ş",  col.compare("ş", "ş") < 0);
        test.ok("ş < T",  col.compare("ş", "T") < 0);
        test.ok("U < u",  col.compare("U", "u") < 0);
        test.ok("u < Û",  col.compare("u", "Û") < 0);
        test.ok("Û < Û",  col.compare("Û", "Û") < 0);
        test.ok("Û < û",  col.compare("Û", "û") < 0);
        test.ok("û < û",  col.compare("û", "û") < 0);
        test.ok("û < Ü",  col.compare("û", "Ü") < 0);
        test.ok("Ü < Ü",  col.compare("Ü", "Ü") < 0);
        test.ok("Ü < ü",  col.compare("Ü", "ü") < 0);
        test.ok("ü < ü",  col.compare("ü", "ü") < 0);
        test.ok("ü < V",  col.compare("ü", "V") < 0);
        test.done();
    },
    
    testJSCollatorSortTer_tr: function(test) {
        test.expect(51);
        var col = new Collator({
            locale: "tr-TR",
            useNative: false,
            sensitivity: "tertiary",
            usage: "sort"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
        test.ok("A < a",  col.compare("A", "a") < 0);
        test.ok("a < Â",  col.compare("a", "Â") < 0);
        test.ok("Â < Â",  col.compare("Â", "Â") < 0);
        test.ok("Â < â",  col.compare("Â", "â") < 0);
        test.ok("â < â",  col.compare("â", "â") < 0);
        test.ok("â < B",  col.compare("â", "B") < 0);
        test.ok("C < c",  col.compare("C", "c") < 0);
        test.ok("c < Ç",  col.compare("c", "Ç") < 0);
        test.ok("Ç < Ç",  col.compare("Ç", "Ç") < 0);
        test.ok("Ç < ç",  col.compare("Ç", "ç") < 0);
        test.ok("ç < ç",  col.compare("ç", "ç") < 0);
        test.ok("ç < D",  col.compare("ç", "D") < 0);
        test.ok("G < g",  col.compare("G", "g") < 0);
        test.ok("g < Ğ",  col.compare("g", "Ğ") < 0);
        test.ok("Ğ < Ğ",  col.compare("Ğ", "Ğ") < 0);
        test.ok("Ğ < ğ",  col.compare("Ğ", "ğ") < 0);
        test.ok("ğ < ğ",  col.compare("ğ", "ğ") < 0);
        test.ok("ğ < H",  col.compare("ğ", "H") < 0);
        test.ok("H < h",  col.compare("H", "h") < 0);
        test.ok("h < I",  col.compare("h", "I") < 0);
        test.ok("I < ı",  col.compare("I", "ı") < 0);
        test.ok("ı < Î",  col.compare("ı", "Î") < 0);
        test.ok("Î < Î",  col.compare("Î", "Î") < 0);
        test.ok("Î < î",  col.compare("Î", "î") < 0);
        test.ok("î < î",  col.compare("î", "î") < 0);
        test.ok("î < İ",  col.compare("î", "İ") < 0);
        test.ok("İ < i",  col.compare("İ", "i") < 0);
        test.ok("i < J",  col.compare("i", "J") < 0);
        test.ok("O < o",  col.compare("O", "o") < 0);
        test.ok("o < Ö",  col.compare("o", "Ö") < 0);
        test.ok("Ö < Ö",  col.compare("Ö", "Ö") < 0);
        test.ok("Ö < ö",  col.compare("Ö", "ö") < 0);
        test.ok("ö < ö",  col.compare("ö", "ö") < 0);
        test.ok("ö < P",  col.compare("ö", "P") < 0);
        test.ok("S < s",  col.compare("S", "s") < 0);
        test.ok("s < Ş",  col.compare("s", "Ş") < 0);
        test.ok("Ş < Ş",  col.compare("Ş", "Ş") < 0);
        test.ok("Ş < ş",  col.compare("Ş", "ş") < 0);
        test.ok("ş < ş",  col.compare("ş", "ş") < 0);
        test.ok("ş < T",  col.compare("ş", "T") < 0);
        test.ok("U < u",  col.compare("U", "u") < 0);
        test.ok("u < Û",  col.compare("u", "Û") < 0);
        test.ok("Û < Û",  col.compare("Û", "Û") < 0);
        test.ok("Û < û",  col.compare("Û", "û") < 0);
        test.ok("û < û",  col.compare("û", "û") < 0);
        test.ok("û < Ü",  col.compare("û", "Ü") < 0);
        test.ok("Ü < Ü",  col.compare("Ü", "Ü") < 0);
        test.ok("Ü < ü",  col.compare("Ü", "ü") < 0);
        test.ok("ü < ü",  col.compare("ü", "ü") < 0);
        test.ok("ü < V",  col.compare("ü", "V") < 0);
        test.done();
    },
    
    testJSCollatorSortSec_tr: function(test) {
        test.expect(51);
        var col = new Collator({
            locale: "tr-TR",
            useNative: false,
            sensitivity: "secondary",
            usage: "sort"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
        test.ok("A < a",  col.compare("A", "a") < 0);
        test.ok("a < Â",  col.compare("a", "Â") < 0);
        test.ok("Â < Â",  col.compare("Â", "Â") < 0);
        test.ok("Â < â",  col.compare("Â", "â") < 0);
        test.ok("â < â",  col.compare("â", "â") < 0);
        test.ok("â < B",  col.compare("â", "B") < 0);
        test.ok("C < c",  col.compare("C", "c") < 0);
        test.ok("c < Ç",  col.compare("c", "Ç") < 0);
        test.ok("Ç < Ç",  col.compare("Ç", "Ç") < 0);
        test.ok("Ç < ç",  col.compare("Ç", "ç") < 0);
        test.ok("ç < ç",  col.compare("ç", "ç") < 0);
        test.ok("ç < D",  col.compare("ç", "D") < 0);
        test.ok("G < g",  col.compare("G", "g") < 0);
        test.ok("g < Ğ",  col.compare("g", "Ğ") < 0);
        test.ok("Ğ < Ğ",  col.compare("Ğ", "Ğ") < 0);
        test.ok("Ğ < ğ",  col.compare("Ğ", "ğ") < 0);
        test.ok("ğ < ğ",  col.compare("ğ", "ğ") < 0);
        test.ok("ğ < H",  col.compare("ğ", "H") < 0);
        test.ok("H < h",  col.compare("H", "h") < 0);
        test.ok("h < I",  col.compare("h", "I") < 0);
        test.ok("I < ı",  col.compare("I", "ı") < 0);
        test.ok("ı < Î",  col.compare("ı", "Î") < 0);
        test.ok("Î < Î",  col.compare("Î", "Î") < 0);
        test.ok("Î < î",  col.compare("Î", "î") < 0);
        test.ok("î < î",  col.compare("î", "î") < 0);
        test.ok("î < İ",  col.compare("î", "İ") < 0);
        test.ok("İ < i",  col.compare("İ", "i") < 0);
        test.ok("i < J",  col.compare("i", "J") < 0);
        test.ok("O < o",  col.compare("O", "o") < 0);
        test.ok("o < Ö",  col.compare("o", "Ö") < 0);
        test.ok("Ö < Ö",  col.compare("Ö", "Ö") < 0);
        test.ok("Ö < ö",  col.compare("Ö", "ö") < 0);
        test.ok("ö < ö",  col.compare("ö", "ö") < 0);
        test.ok("ö < P",  col.compare("ö", "P") < 0);
        test.ok("S < s",  col.compare("S", "s") < 0);
        test.ok("s < Ş",  col.compare("s", "Ş") < 0);
        test.ok("Ş < Ş",  col.compare("Ş", "Ş") < 0);
        test.ok("Ş < ş",  col.compare("Ş", "ş") < 0);
        test.ok("ş < ş",  col.compare("ş", "ş") < 0);
        test.ok("ş < T",  col.compare("ş", "T") < 0);
        test.ok("U < u",  col.compare("U", "u") < 0);
        test.ok("u < Û",  col.compare("u", "Û") < 0);
        test.ok("Û < Û",  col.compare("Û", "Û") < 0);
        test.ok("Û < û",  col.compare("Û", "û") < 0);
        test.ok("û < û",  col.compare("û", "û") < 0);
        test.ok("û < Ü",  col.compare("û", "Ü") < 0);
        test.ok("Ü < Ü",  col.compare("Ü", "Ü") < 0);
        test.ok("Ü < ü",  col.compare("Ü", "ü") < 0);
        test.ok("ü < ü",  col.compare("ü", "ü") < 0);
        test.ok("ü < V",  col.compare("ü", "V") < 0);
        test.done();
    },
    
    testJSCollatorSortPri_tr: function(test) {
        test.expect(51);
        var col = new Collator({
            locale: "tr-TR",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
        test.ok("A < a",  col.compare("A", "a") < 0);
        test.ok("a < Â",  col.compare("a", "Â") < 0);
        test.ok("Â < Â",  col.compare("Â", "Â") < 0);
        test.ok("Â < â",  col.compare("Â", "â") < 0);
        test.ok("â < â",  col.compare("â", "â") < 0);
        test.ok("â < B",  col.compare("â", "B") < 0);
        test.ok("C < c",  col.compare("C", "c") < 0);
        test.ok("c < Ç",  col.compare("c", "Ç") < 0);
        test.ok("Ç < Ç",  col.compare("Ç", "Ç") < 0);
        test.ok("Ç < ç",  col.compare("Ç", "ç") < 0);
        test.ok("ç < ç",  col.compare("ç", "ç") < 0);
        test.ok("ç < D",  col.compare("ç", "D") < 0);
        test.ok("G < g",  col.compare("G", "g") < 0);
        test.ok("g < Ğ",  col.compare("g", "Ğ") < 0);
        test.ok("Ğ < Ğ",  col.compare("Ğ", "Ğ") < 0);
        test.ok("Ğ < ğ",  col.compare("Ğ", "ğ") < 0);
        test.ok("ğ < ğ",  col.compare("ğ", "ğ") < 0);
        test.ok("ğ < H",  col.compare("ğ", "H") < 0);
        test.ok("H < h",  col.compare("H", "h") < 0);
        test.ok("h < I",  col.compare("h", "I") < 0);
        test.ok("I < ı",  col.compare("I", "ı") < 0);
        test.ok("ı < Î",  col.compare("ı", "Î") < 0);
        test.ok("Î < Î",  col.compare("Î", "Î") < 0);
        test.ok("Î < î",  col.compare("Î", "î") < 0);
        test.ok("î < î",  col.compare("î", "î") < 0);
        test.ok("î < İ",  col.compare("î", "İ") < 0);
        test.ok("İ < i",  col.compare("İ", "i") < 0);
        test.ok("i < J",  col.compare("i", "J") < 0);
        test.ok("O < o",  col.compare("O", "o") < 0);
        test.ok("o < Ö",  col.compare("o", "Ö") < 0);
        test.ok("Ö < Ö",  col.compare("Ö", "Ö") < 0);
        test.ok("Ö < ö",  col.compare("Ö", "ö") < 0);
        test.ok("ö < ö",  col.compare("ö", "ö") < 0);
        test.ok("ö < P",  col.compare("ö", "P") < 0);
        test.ok("S < s",  col.compare("S", "s") < 0);
        test.ok("s < Ş",  col.compare("s", "Ş") < 0);
        test.ok("Ş < Ş",  col.compare("Ş", "Ş") < 0);
        test.ok("Ş < ş",  col.compare("Ş", "ş") < 0);
        test.ok("ş < ş",  col.compare("ş", "ş") < 0);
        test.ok("ş < T",  col.compare("ş", "T") < 0);
        test.ok("U < u",  col.compare("U", "u") < 0);
        test.ok("u < Û",  col.compare("u", "Û") < 0);
        test.ok("Û < Û",  col.compare("Û", "Û") < 0);
        test.ok("Û < û",  col.compare("Û", "û") < 0);
        test.ok("û < û",  col.compare("û", "û") < 0);
        test.ok("û < Ü",  col.compare("û", "Ü") < 0);
        test.ok("Ü < Ü",  col.compare("Ü", "Ü") < 0);
        test.ok("Ü < ü",  col.compare("Ü", "ü") < 0);
        test.ok("ü < ü",  col.compare("ü", "ü") < 0);
        test.ok("ü < V",  col.compare("ü", "V") < 0);
        test.done();
    },
    
    testCollatorWithSortCase_tr: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "tr-TR",
            useNative: false,
            sensitivity: "case",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
    
        var input = [
             "ügur",
            "Çolasan",
            "Cumali",
            "Çolaşan",
            "uğur",
            "ıpekçi",
            "Coskun",
            "ugur",
            "çakar",
            "Üğur",
            "Çonaşan",
            "Cumalı",
            "Uğur",
            "Eroğlu",
            "cakar",
            "Coşkun",
            "ipekçi",
            "Eroglu",
            "Çulaşan",
            "Çölaşan",
            "Cakar",
            "Ugur",
            "coskun",
            "Ipekçi",
            "Çakar",
            "üğur",
            "coşkun",
            "İpekçi",
            "Ügur"
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
            "Cakar",
            "Coskun",
            "Coşkun",
            "Cumalı",
            "Cumali",
            "cakar",
            "coskun",
            "coşkun",
            "Çakar",
            "Çolasan",
            "Çolaşan",
            "Çonaşan",
            "Çölaşan",
            "Çulaşan",
            "çakar",
            "Eroglu",
            "Eroğlu",
            "Ipekçi",
            "ıpekçi",
            "İpekçi",
            "ipekçi",
            "Ugur",
            "Uğur",
            "ugur",
            "uğur",
            "Ügur",
            "Üğur",
            "ügur",
            "üğur"
        ];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorWithSortVariant_tr: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "tr-TR",
            useNative: false,
            sensitivity: "variant",
            upperFirst: true,
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
    
        var input = [
            "ügur",
            "Çolasan",
            "Cumali",
            "Çolaşan",
            "uğur",
            "ıpekçi",
            "Coskun",
            "ugur",
            "çakar",
            "Üğur",
            "Çonaşan",
            "Cumalı",
            "Uğur",
            "Eroğlu",
            "cakar",
            "Coşkun",
            "ipekçi",
            "Eroglu",
            "Çulaşan",
            "Çölaşan",
            "Cakar",
            "Ugur",
            "coskun",
            "Ipekçi",
            "Çakar",
            "üğur",
            "coşkun",
            "İpekçi",
            "Ügur"
        ];
    
        input.sort(col.getComparator());
        
        var expected = [
            "Cakar",
            "Coskun",
            "Coşkun",
            "Cumalı",
            "Cumali",
            "cakar",
            "coskun",
            "coşkun",
            "Çakar",
            "Çolasan",
            "Çolaşan",
            "Çonaşan",
            "Çölaşan",
            "Çulaşan",
            "çakar",
            "Eroglu",
            "Eroğlu",
            "Ipekçi",
            "ıpekçi",
            "İpekçi",
            "ipekçi",
            "Ugur",
            "Uğur",
            "ugur",
            "uğur",
            "Ügur",
            "Üğur",
            "ügur",
            "üğur"
        ];
    
        test.deepEqual(input, expected);
        test.done();
    }
    
    
};