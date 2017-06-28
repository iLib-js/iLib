/*
 * testcollation_lv.js - test the Collator object in Latvian
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
    var Collator = require("../../../lib/Collator.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testcollation_lv = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJSCollatorQuatUpper_lv: function(test) {
        var col = new Collator({
            locale: "lv-LV",
            useNative: false,
            sensitivity: "quaternary"
        });
    
        test.expect(33);
        test.ok(typeof(col) !== "undefined");
    
        // AĀBCČDEĒFGĢHIYĪJKĶLĻMNŅO..RŖSŠTUŪVZŽ
        // aābcčdeēfgģhiyījkķlļmnņo..rŗsštuūvzž
    
        test.ok("A < Ā",  col.compare("A", "Ā") < 0);
        test.ok("Ā < B",  col.compare("Ā", "B") < 0);
        test.ok("B < C",  col.compare("B", "C") < 0);
        test.ok("C < Č",  col.compare("C", "Č") < 0);
        test.ok("Č < D",  col.compare("Č", "D") < 0);
        test.ok("D < E",  col.compare("D", "E") < 0);
        test.ok("E < Ē",  col.compare("E", "Ē") < 0);
        test.ok("Ē < F",  col.compare("Ē", "F") < 0);
        test.ok("F < G",  col.compare("F", "G") < 0);
        test.ok("G < Ģ",  col.compare("G", "Ģ") < 0);
        test.ok("Ģ < H",  col.compare("Ģ", "H") < 0);
        test.ok("H < I",  col.compare("H", "I") < 0);
        test.ok("I < Y",  col.compare("I", "Y") < 0);
        test.ok("Y < Ī",  col.compare("Y", "Ī") < 0);
        test.ok("Ī < J",  col.compare("Ī", "J") < 0);
        test.ok("J < K",  col.compare("J", "K") < 0);
        test.ok("K < Ķ",  col.compare("K", "Ķ") < 0);
        test.ok("Ķ < L",  col.compare("Ķ", "L") < 0);
        test.ok("L < Ļ",  col.compare("L", "Ļ") < 0);
        test.ok("Ļ < M",  col.compare("Ļ", "M") < 0);
        test.ok("M < N",  col.compare("M", "N") < 0);
        test.ok("Ņ < O",  col.compare("Ņ", "O") < 0);
        test.ok("O < R",  col.compare("O", "R") < 0);
        test.ok("R < Ŗ",  col.compare("R", "Ŗ") < 0);
        test.ok("Ŗ < S",  col.compare("Ŗ", "S") < 0);
        test.ok("S < Š",  col.compare("S", "Š") < 0);
        test.ok("Š < T",  col.compare("Š", "T") < 0);
        test.ok("T < U",  col.compare("T", "U") < 0);
        test.ok("U < Ū",  col.compare("U", "Ū") < 0);
        test.ok("Ū < V",  col.compare("Ū", "V") < 0);
        test.ok("V < Z",  col.compare("V", "Z") < 0);
        test.ok("Z < Ž",  col.compare("Z", "Ž") < 0);
        test.done();
    },
    
    testJSCollatorQuatLower_lv: function(test) {
        var col = new Collator({
            locale: "lv-LV",
            useNative: false,
            sensitivity: "quaternary"
        });
    
        test.expect(33);
        test.ok(typeof(col) !== "undefined");
    
        // AĀBCČDEĒFGĢHIYĪJKĶLĻMNŅO..RŖSŠTUŪVZŽ
        // aābcčdeēfgģhiyījkķlļmnņo..rŗsštuūvzž
    
        test.ok("a < ā",  col.compare("a", "ā") < 0);
        test.ok("ā < b",  col.compare("ā", "b") < 0);
        test.ok("b < c",  col.compare("b", "c") < 0);
        test.ok("č < d",  col.compare("č", "d") < 0);
        test.ok("d < e",  col.compare("d", "e") < 0);
        test.ok("e < ē",  col.compare("e", "ē") < 0);
        test.ok("ē < f",  col.compare("ē", "f") < 0);
        test.ok("f < g",  col.compare("f", "g") < 0);
        test.ok("g < ģ",  col.compare("g", "ģ") < 0);
        test.ok("ģ < h",  col.compare("ģ", "h") < 0);
        test.ok("h < i",  col.compare("h", "i") < 0);
        test.ok("i < y",  col.compare("i", "y") < 0);
        test.ok("y < ī",  col.compare("y", "ī") < 0);
        test.ok("ī < j",  col.compare("ī", "j") < 0);
        test.ok("j < k",  col.compare("j", "k") < 0);
        test.ok("k < ķ",  col.compare("k", "ķ") < 0);
        test.ok("ķ < l",  col.compare("ķ", "l") < 0);
        test.ok("l < ļ",  col.compare("l", "ļ") < 0);
        test.ok("ļ < m",  col.compare("ļ", "m") < 0);
        test.ok("m < n",  col.compare("m", "n") < 0);
        test.ok("n < ņ",  col.compare("n", "ņ") < 0);
        test.ok("ņ < o",  col.compare("ņ", "o") < 0);
        test.ok("o < r",  col.compare("o", "r") < 0);
        test.ok("r < ŗ",  col.compare("r", "ŗ") < 0);
        test.ok("ŗ < s",  col.compare("ŗ", "s") < 0);
        test.ok("s < š",  col.compare("s", "š") < 0);
        test.ok("š < t",  col.compare("š", "t") < 0);
        test.ok("t < u",  col.compare("t", "u") < 0);
        test.ok("u < ū",  col.compare("u", "ū") < 0);
        test.ok("ū < v",  col.compare("ū", "v") < 0);
        test.ok("v < z",  col.compare("v", "z") < 0);
        test.ok("z < ž",  col.compare("z", "ž") < 0);    
        test.done();
    },
    
    // differences in umlauted characters should be primary differences
    
    testJSCollatorPrimaryUpper_lv: function(test) {
        var col = new Collator({
            locale: "lv-LV",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.expect(33);
        test.ok(typeof(col) !== "undefined");
    
        test.ok("A < Ā",  col.compare("A", "Ā") < 0);
        test.ok("Ā < B",  col.compare("Ā", "B") < 0);
        test.ok("B < C",  col.compare("B", "C") < 0);
        test.ok("C < Č",  col.compare("C", "Č") < 0);
        test.ok("Č < D",  col.compare("Č", "D") < 0);
        test.ok("D < E",  col.compare("D", "E") < 0);
        test.ok("E < Ē",  col.compare("E", "Ē") < 0);
        test.ok("Ē < F",  col.compare("Ē", "F") < 0);
        test.ok("F < G",  col.compare("F", "G") < 0);
        test.ok("G < Ģ",  col.compare("G", "Ģ") < 0);
        test.ok("Ģ < H",  col.compare("Ģ", "H") < 0);
        test.ok("H < I",  col.compare("H", "I") < 0);
        test.ok("I = Y",  col.compare("I", "Y") === 0);
        test.ok("Y < Ī",  col.compare("Y", "Ī") < 0);
        test.ok("Ī < J",  col.compare("Ī", "J") < 0);
        test.ok("J < K",  col.compare("J", "K") < 0);
        test.ok("K < Ķ",  col.compare("K", "Ķ") < 0);
        test.ok("Ķ < L",  col.compare("Ķ", "L") < 0);
        test.ok("L < Ļ",  col.compare("L", "Ļ") < 0);
        test.ok("Ļ < M",  col.compare("Ļ", "M") < 0);
        test.ok("M < N",  col.compare("M", "N") < 0);
        test.ok("Ņ < O",  col.compare("Ņ", "O") < 0);
        test.ok("O < R",  col.compare("O", "R") < 0);
        test.ok("R < Ŗ",  col.compare("R", "Ŗ") < 0);
        test.ok("Ŗ < S",  col.compare("Ŗ", "S") < 0);
        test.ok("S < Š",  col.compare("S", "Š") < 0);
        test.ok("Š < T",  col.compare("Š", "T") < 0);
        test.ok("T < U",  col.compare("T", "U") < 0);
        test.ok("U < Ū",  col.compare("U", "Ū") < 0);
        test.ok("Ū < V",  col.compare("Ū", "V") < 0);
        test.ok("V < Z",  col.compare("V", "Z") < 0);
        test.ok("Z < Ž",  col.compare("Z", "Ž") < 0);
        test.done();
    },
    
    testJSCollatorPrimaryOE_lv: function(test) {
        var col = new Collator({
            locale: "lv-LV",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.expect(33);
        test.ok(typeof(col) !== "undefined");
    
        test.ok("a < ā",  col.compare("a", "ā") < 0);
        test.ok("ā < b",  col.compare("ā", "b") < 0);
        test.ok("b < c",  col.compare("b", "c") < 0);
        test.ok("č < d",  col.compare("č", "d") < 0);
        test.ok("d < e",  col.compare("d", "e") < 0);
        test.ok("e < ē",  col.compare("e", "ē") < 0);
        test.ok("ē < f",  col.compare("ē", "f") < 0);
        test.ok("f < g",  col.compare("f", "g") < 0);
        test.ok("g < ģ",  col.compare("g", "ģ") < 0);
        test.ok("ģ < h",  col.compare("ģ", "h") < 0);
        test.ok("h < i",  col.compare("h", "i") < 0);
        test.ok("i = y",  col.compare("i", "y") === 0);
        test.ok("y < ī",  col.compare("y", "ī") < 0);
        test.ok("ī < j",  col.compare("ī", "j") < 0);
        test.ok("j < k",  col.compare("j", "k") < 0);
        test.ok("k < ķ",  col.compare("k", "ķ") < 0);
        test.ok("ķ < l",  col.compare("ķ", "l") < 0);
        test.ok("l < ļ",  col.compare("l", "ļ") < 0);
        test.ok("ļ < m",  col.compare("ļ", "m") < 0);
        test.ok("m < n",  col.compare("m", "n") < 0);
        test.ok("n < ņ",  col.compare("n", "ņ") < 0);
        test.ok("ņ < o",  col.compare("ņ", "o") < 0);
        test.ok("o < r",  col.compare("o", "r") < 0);
        test.ok("r < ŗ",  col.compare("r", "ŗ") < 0);
        test.ok("ŗ < s",  col.compare("ŗ", "s") < 0);
        test.ok("s < š",  col.compare("s", "š") < 0);
        test.ok("š < t",  col.compare("š", "t") < 0);
        test.ok("t < u",  col.compare("t", "u") < 0);
        test.ok("u < ū",  col.compare("u", "ū") < 0);
        test.ok("ū < v",  col.compare("ū", "v") < 0);
        test.ok("v < z",  col.compare("v", "z") < 0);
        test.ok("z < ž",  col.compare("z", "ž") < 0);    
        test.done();
    },
    
    testCollatorNativeCase_lv: function(test) {
        var col = new Collator({
            locale: "lv-LV",
            useNative: false,
            sensitivity: "case",
            usage: "sort"
        });
        test.expect(2);
        test.ok(typeof(col) !== "undefined");
    
        var input = [
            "Ēo",
            "fo",
            "Mo",
            "Go",
            "Āo",
            "ko",
            "zo",
            "so",
            "Žo",
            "Čo",
            "žo",
            "ņo",
            "go",
            "ģo",
            "ro",
            "ho",
            "Io",
            "Ao",
            "Šo",
            "Ģo",
            "čo",
            "ķo",
            "īo",
            "Ko",
            "io",
            "ēo",
            "Ķo",
            "oo",
            "Ļo",
            "Do",
            "ŗo",
            "Zo",
            "do",
            "Eo",
            "Ho",
            "Jo",
            "eo",
            "Yo",
            "Ro",
            "bo",
            "Īo",
            "ļo",
            "mo",
            "lo",
            "No",
            "So",
            "ao",
            "šo",
            "jo",
            "Lo",
            "To",
            "to",
            "co",
            "Uo",
            "uo",
            "Ūo",
            "Fo",
            "ūo",
            "Vo",
            "āo",
            "Bo",
            "Co",
            "vo",
            "no",
            "yo",
            "Ņo",
            "Oo",
            "Ŗo",
        ];
    
        input.sort(col.getComparator());
    
           // AĀBCČDEĒFGĢHIYĪJKĶLĻMNŅO..RŖSŠTUŪVZŽ
           // aābcčdeēfgģhiyījkķlļmnņo..rŗsštuūvzž
    
        var expected = [
               "Ao",
            "ao",
            "Āo",
            "āo",
            "Bo",
            "bo",
            "Co",
            "co",
            "Čo",
            "čo",
            "Do",
            "do",
            "Eo",
            "eo",
            "Ēo",
            "ēo",
            "Fo",
            "fo",
            "Go",
            "go",
            "Ģo",
            "ģo",
            "Ho",
            "ho",
            "Io",
            "io",
            "Yo",
            "yo",
            "Īo",
            "īo",
            "Jo",
            "jo",
            "Ko",
            "ko",
            "Ķo",
            "ķo",
            "Lo",
            "lo",
            "Ļo",
            "ļo",
            "Mo",
            "mo",
            "No",
            "no",
            "Ņo",
            "ņo",
            "Oo",
            "oo",
            "Ro",
            "ro",
            "Ŗo",
            "ŗo",
            "So",
            "so",
            "Šo",
            "šo",
            "To",
            "to",
            "Uo",
            "uo",
            "Ūo",
            "ūo",
            "Vo",
            "vo",
            "Zo",
            "zo",
            "Žo",
            "žo"
        ];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorNativeVariant_lv: function(test) {
        var col = new Collator({
            locale: "lv-LV",
            useNative: false,
            sensitivity: "variant",
            upperFirst: true,
            usage: "sort"
        });
        test.expect(2);
        test.ok(typeof(col) !== "undefined");
    
        var input = [
             "Ēo",
            "fo",
            "Mo",
            "žo",
            "Go",
            "Āo",
            "ko",
            "zo",
            "so",
            "Žo",
            "šo",
            "Čo",
            "īo",
            "žo",
            "ņo",
            "go",
            "ģo",
            "ro",
            "ho",
            "Io",
            "Ao",
            "Šo",
            "Ģo",
            "čo",
            "ķo",
            "īo",
            "Āo",
            "Ko",
            "io",
            "ēo",
            "Ķo",
            "oo",
            "Ļo",
            "Čo",
            "Do",
            "Ēo",
            "ŗo",
            "Ūo",
            "Zo",
            "do",
            "Eo",
            "Ho",
            "Šo",
            "Jo",
            "eo",
            "Yo",
            "Ro",
            "bo",
            "Īo",
            "ļo",
            "mo",
            "Žo",
            "lo",
            "No",
            "So",
            "ao",
            "šo",
            "jo",
            "Lo",
            "To",
            "to",
            "co",
            "ūo",
            "Uo",
            "uo",
            "Ūo",
            "Fo",
            "ūo",
            "ēo",
            "Vo",
            "āo",
            "čo",
            "āo",
            "Bo",
            "Co",
            "vo",
            "no",
            "Īo",
            "yo",
            "Ņo",
            "Oo",
            "Ŗo"
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
               "Ao",
            "ao",
            "Āo",
            "Āo",
            "āo",
            "āo",
            "Bo",
            "bo",
            "Co",
            "co",
            "Čo",
            "Čo",
            "čo",
            "čo",
            "Do",
            "do",
            "Eo",
            "eo",
            "Ēo",
            "Ēo",
            "ēo",
            "ēo",
            "Fo",
            "fo",
            "Go",
            "go",
            "Ģo",
            "ģo",
            "Ho",
            "ho",
            "Io",
            "io",
            "Yo",
            "yo",
            "Īo",
            "Īo",
            "īo",
            "īo",
            "Jo",
            "jo",
            "Ko",
            "ko",
            "Ķo",
            "ķo",
            "Lo",
            "lo",
            "Ļo",
            "ļo",
            "Mo",
            "mo",
            "No",
            "no",
            "Ņo",
            "ņo",
            "Oo",
            "oo",
            "Ro",
            "ro",
            "Ŗo",
            "ŗo",
            "So",
            "so",
            "Šo",
            "Šo",
            "šo",
            "šo",
            "To",
            "to",
            "Uo",
            "uo",
            "Ūo",
            "Ūo",
            "ūo",
            "ūo",
            "Vo",
            "vo",
            "Zo",
            "zo",
            "Žo",
            "Žo",
            "žo",
            "žo"
        ];
    
        test.deepEqual(input, expected);
        test.done();
    }
};