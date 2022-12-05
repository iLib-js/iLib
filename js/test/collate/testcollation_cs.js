/*
 * testcollation_cs.js - test the Collator object in Czech
 *
 * Copyright © 2015,2017, JEDLSoft
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

module.exports.testcollation_cs = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJSCollatorQuat_cs: function(test) {
        test.expect(116);
        var col = new Collator({
            locale: "cs-CZ",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("a < Á", col.compare("a", "Á") < 0);
        test.ok("Á < Á", col.compare("Á", "Á") < 0);
        test.ok("Á < á", col.compare("Á", "á") < 0);
        test.ok("á < á", col.compare("á", "á") < 0);
        test.ok("á < B", col.compare("á", "B") < 0);
        test.ok("B < b", col.compare("B", "b") < 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C < c", col.compare("C", "c") < 0);
        test.ok("c < Č", col.compare("c", "Č") < 0);
        test.ok("Č < Č", col.compare("Č", "Č") < 0);
        test.ok("Č < č", col.compare("Č", "č") < 0);
        test.ok("č < č", col.compare("č", "č") < 0);
        test.ok("č < D", col.compare("č", "D") < 0);
        test.ok("D < d", col.compare("D", "d") < 0);
        test.ok("d < Ď", col.compare("d", "Ď") < 0);
        test.ok("Ď < Ď", col.compare("Ď", "Ď") < 0);
        test.ok("Ď < ď", col.compare("Ď", "ď") < 0);
        test.ok("ď < ď", col.compare("ď", "ď") < 0);
        test.ok("ď < E", col.compare("ď", "E") < 0);
        test.ok("E < e", col.compare("E", "e") < 0);
        test.ok("e < É", col.compare("e", "É") < 0);
        test.ok("É < É", col.compare("É", "É") < 0);
        test.ok("É < é", col.compare("É", "é") < 0);
        test.ok("é < é", col.compare("é", "é") < 0);
        test.ok("é < Ě", col.compare("é", "Ě") < 0);
        test.ok("Ě < Ě", col.compare("Ě", "Ě") < 0);
        test.ok("Ě < ě", col.compare("Ě", "ě") < 0);
        test.ok("ě < ě", col.compare("ě", "ě") < 0);
        test.ok("ě < F", col.compare("ě", "F") < 0);
        test.ok("F < f", col.compare("F", "f") < 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G < g", col.compare("G", "g") < 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H < h", col.compare("H", "h") < 0);
        test.ok("h < CH", col.compare("h", "CH") < 0);
        test.ok("CH < Ch", col.compare("CH", "Ch") < 0);
        test.ok("Ch < cH", col.compare("Ch", "cH") < 0);
        test.ok("cH < ch", col.compare("cH", "ch") < 0);
        test.ok("ch < I", col.compare("ch", "I") < 0);
        test.ok("I < i", col.compare("I", "i") < 0);
        test.ok("i < Í", col.compare("i", "Í") < 0);
        test.ok("Í < Í", col.compare("Í", "Í") < 0);
        test.ok("Í < í", col.compare("Í", "í") < 0);
        test.ok("í < í", col.compare("í", "í") < 0);
        test.ok("í < J", col.compare("í", "J") < 0);
        test.ok("J < j", col.compare("J", "j") < 0);
        test.ok("j < K", col.compare("j", "K") < 0);
        test.ok("K < k", col.compare("K", "k") < 0);
        test.ok("k < L", col.compare("k", "L") < 0);
        test.ok("L < l", col.compare("L", "l") < 0);
        test.ok("l < M", col.compare("l", "M") < 0);
        test.ok("M < m", col.compare("M", "m") < 0);
        test.ok("m < N", col.compare("m", "N") < 0);
        test.ok("N < n", col.compare("N", "n") < 0);
        test.ok("n < Ň", col.compare("n", "Ň") < 0);
        test.ok("Ň < Ň", col.compare("Ň", "Ň") < 0);
        test.ok("Ň < ň", col.compare("Ň", "ň") < 0);
        test.ok("ň < ň", col.compare("ň", "ň") < 0);
        test.ok("ň < O", col.compare("ň", "O") < 0);
        test.ok("O < o", col.compare("O", "o") < 0);
        test.ok("o < Ó", col.compare("o", "Ó") < 0);
        test.ok("Ó < Ó", col.compare("Ó", "Ó") < 0);
        test.ok("Ó < ó", col.compare("Ó", "ó") < 0);
        test.ok("ó < ó", col.compare("ó", "ó") < 0);
        test.ok("ó < P", col.compare("ó", "P") < 0);
        test.ok("P < p", col.compare("P", "p") < 0);
        test.ok("p < Q", col.compare("p", "Q") < 0);
        test.ok("Q < q", col.compare("Q", "q") < 0);
        test.ok("q < R", col.compare("q", "R") < 0);
        test.ok("R < r", col.compare("R", "r") < 0);
        test.ok("r < Ř", col.compare("r", "Ř") < 0);
        test.ok("Ř < Ř", col.compare("Ř", "Ř") < 0);
        test.ok("Ř < ř", col.compare("Ř", "ř") < 0);
        test.ok("ř < ř", col.compare("ř", "ř") < 0);
        test.ok("ř < S", col.compare("ř", "S") < 0);
        test.ok("S < s", col.compare("S", "s") < 0);
        test.ok("s < Š", col.compare("s", "Š") < 0);
        test.ok("Š < Š", col.compare("Š", "Š") < 0);
        test.ok("Š < š", col.compare("Š", "š") < 0);
        test.ok("š < š", col.compare("š", "š") < 0);
        test.ok("š < T", col.compare("š", "T") < 0);
        test.ok("T < t", col.compare("T", "t") < 0);
        test.ok("t < Ť", col.compare("t", "Ť") < 0);
        test.ok("Ť < Ť", col.compare("Ť", "Ť") < 0);
        test.ok("Ť < ť", col.compare("Ť", "ť") < 0);
        test.ok("ť < ť", col.compare("ť", "ť") < 0);
        test.ok("ť < U", col.compare("ť", "U") < 0);
        test.ok("U < u", col.compare("U", "u") < 0);
        test.ok("u < Ú", col.compare("u", "Ú") < 0);
        test.ok("Ú < Ú", col.compare("Ú", "Ú") < 0);
        test.ok("Ú < ú", col.compare("Ú", "ú") < 0);
        test.ok("ú < ú", col.compare("ú", "ú") < 0);
        test.ok("ú < Ů", col.compare("ú", "Ů") < 0);
        test.ok("Ů < Ů", col.compare("Ů", "Ů") < 0);
        test.ok("Ů < ů", col.compare("Ů", "ů") < 0);
        test.ok("ů < ů", col.compare("ů", "ů") < 0);
        test.ok("ů < V", col.compare("ů", "V") < 0);
        test.ok("V < v", col.compare("V", "v") < 0);
        test.ok("v < W", col.compare("v", "W") < 0);
        test.ok("W < w", col.compare("W", "w") < 0);
        test.ok("w < X", col.compare("w", "X") < 0);
        test.ok("X < x", col.compare("X", "x") < 0);
        test.ok("x < Y", col.compare("x", "Y") < 0);
        test.ok("Y < y", col.compare("Y", "y") < 0);
        test.ok("y < Ý", col.compare("y", "Ý") < 0);
        test.ok("Ý < Ý", col.compare("Ý", "Ý") < 0);
        test.ok("Ý < ý", col.compare("Ý", "ý") < 0);
        test.ok("ý < ý", col.compare("ý", "ý") < 0);
        test.ok("ý < Z", col.compare("ý", "Z") < 0);
        test.ok("Z < z", col.compare("Z", "z") < 0);
        test.ok("z < Ž", col.compare("z", "Ž") < 0);
        test.ok("Ž < Ž", col.compare("Ž", "Ž") < 0);
        test.ok("Ž < ž", col.compare("Ž", "ž") < 0);
        test.ok("ž < ž", col.compare("ž", "ž") < 0);
        test.done();
    },

    testJSCollatorTer_cs: function(test) {
        test.expect(116);
        var col = new Collator({
            locale: "cs-CZ",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("a < Á", col.compare("a", "Á") < 0);
        test.ok("Á = Á", col.compare("Á", "Á") === 0);
        test.ok("Á < á", col.compare("Á", "á") < 0);
        test.ok("á = á", col.compare("á", "á") === 0);
        test.ok("á < B", col.compare("á", "B") < 0);
        test.ok("B < b", col.compare("B", "b") < 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C < c", col.compare("C", "c") < 0);
        test.ok("c < Č", col.compare("c", "Č") < 0);
        test.ok("Č = Č", col.compare("Č", "Č") === 0);
        test.ok("Č < č", col.compare("Č", "č") < 0);
        test.ok("č = č", col.compare("č", "č") === 0);
        test.ok("č < D", col.compare("č", "D") < 0);
        test.ok("D < d", col.compare("D", "d") < 0);
        test.ok("d < Ď", col.compare("d", "Ď") < 0);
        test.ok("Ď = Ď", col.compare("Ď", "Ď") === 0);
        test.ok("Ď < ď", col.compare("Ď", "ď") < 0);
        test.ok("ď = ď", col.compare("ď", "ď") === 0);
        test.ok("ď < E", col.compare("ď", "E") < 0);
        test.ok("E < e", col.compare("E", "e") < 0);
        test.ok("e < É", col.compare("e", "É") < 0);
        test.ok("É = É", col.compare("É", "É") === 0);
        test.ok("É < é", col.compare("É", "é") < 0);
        test.ok("é = é", col.compare("é", "é") === 0);
        test.ok("é < Ě", col.compare("é", "Ě") < 0);
        test.ok("Ě = Ě", col.compare("Ě", "Ě") === 0);
        test.ok("Ě < ě", col.compare("Ě", "ě") < 0);
        test.ok("ě = ě", col.compare("ě", "ě") === 0);
        test.ok("ě < F", col.compare("ě", "F") < 0);
        test.ok("F < f", col.compare("F", "f") < 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G < g", col.compare("G", "g") < 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H < h", col.compare("H", "h") < 0);
        test.ok("h < CH", col.compare("h", "CH") < 0);
        test.ok("CH < Ch", col.compare("CH", "Ch") < 0);
        test.ok("Ch < cH", col.compare("Ch", "cH") < 0);
        test.ok("cH < ch", col.compare("cH", "ch") < 0);
        test.ok("ch < I", col.compare("ch", "I") < 0);
        test.ok("I < i", col.compare("I", "i") < 0);
        test.ok("i < Í", col.compare("i", "Í") < 0);
        test.ok("Í = Í", col.compare("Í", "Í") === 0);
        test.ok("Í < í", col.compare("Í", "í") < 0);
        test.ok("í = í", col.compare("í", "í") === 0);
        test.ok("í < J", col.compare("í", "J") < 0);
        test.ok("J < j", col.compare("J", "j") < 0);
        test.ok("j < K", col.compare("j", "K") < 0);
        test.ok("K < k", col.compare("K", "k") < 0);
        test.ok("k < L", col.compare("k", "L") < 0);
        test.ok("L < l", col.compare("L", "l") < 0);
        test.ok("l < M", col.compare("l", "M") < 0);
        test.ok("M < m", col.compare("M", "m") < 0);
        test.ok("m < N", col.compare("m", "N") < 0);
        test.ok("N < n", col.compare("N", "n") < 0);
        test.ok("n < Ň", col.compare("n", "Ň") < 0);
        test.ok("Ň = Ň", col.compare("Ň", "Ň") === 0);
        test.ok("Ň < ň", col.compare("Ň", "ň") < 0);
        test.ok("ň = ň", col.compare("ň", "ň") === 0);
        test.ok("ň < O", col.compare("ň", "O") < 0);
        test.ok("O < o", col.compare("O", "o") < 0);
        test.ok("o < Ó", col.compare("o", "Ó") < 0);
        test.ok("Ó = Ó", col.compare("Ó", "Ó") === 0);
        test.ok("Ó < ó", col.compare("Ó", "ó") < 0);
        test.ok("ó = ó", col.compare("ó", "ó") === 0);
        test.ok("ó < P", col.compare("ó", "P") < 0);
        test.ok("P < p", col.compare("P", "p") < 0);
        test.ok("p < Q", col.compare("p", "Q") < 0);
        test.ok("Q < q", col.compare("Q", "q") < 0);
        test.ok("q < R", col.compare("q", "R") < 0);
        test.ok("R < r", col.compare("R", "r") < 0);
        test.ok("r < Ř", col.compare("r", "Ř") < 0);
        test.ok("Ř = Ř", col.compare("Ř", "Ř") === 0);
        test.ok("Ř < ř", col.compare("Ř", "ř") < 0);
        test.ok("ř = ř", col.compare("ř", "ř") === 0);
        test.ok("ř < S", col.compare("ř", "S") < 0);
        test.ok("S < s", col.compare("S", "s") < 0);
        test.ok("s < Š", col.compare("s", "Š") < 0);
        test.ok("Š = Š", col.compare("Š", "Š") === 0);
        test.ok("Š < š", col.compare("Š", "š") < 0);
        test.ok("š = š", col.compare("š", "š") === 0);
        test.ok("š < T", col.compare("š", "T") < 0);
        test.ok("T < t", col.compare("T", "t") < 0);
        test.ok("t < Ť", col.compare("t", "Ť") < 0);
        test.ok("Ť = Ť", col.compare("Ť", "Ť") === 0);
        test.ok("Ť < ť", col.compare("Ť", "ť") < 0);
        test.ok("ť = ť", col.compare("ť", "ť") === 0);
        test.ok("ť < U", col.compare("ť", "U") < 0);
        test.ok("U < u", col.compare("U", "u") < 0);
        test.ok("u < Ú", col.compare("u", "Ú") < 0);
        test.ok("Ú = Ú", col.compare("Ú", "Ú") === 0);
        test.ok("Ú < ú", col.compare("Ú", "ú") < 0);
        test.ok("ú = ú", col.compare("ú", "ú") === 0);
        test.ok("ú < Ů", col.compare("ú", "Ů") < 0);
        test.ok("Ů = Ů", col.compare("Ů", "Ů") === 0);
        test.ok("Ů < ů", col.compare("Ů", "ů") < 0);
        test.ok("ů = ů", col.compare("ů", "ů") === 0);
        test.ok("ů < V", col.compare("ů", "V") < 0);
        test.ok("V < v", col.compare("V", "v") < 0);
        test.ok("v < W", col.compare("v", "W") < 0);
        test.ok("W < w", col.compare("W", "w") < 0);
        test.ok("w < X", col.compare("w", "X") < 0);
        test.ok("X < x", col.compare("X", "x") < 0);
        test.ok("x < Y", col.compare("x", "Y") < 0);
        test.ok("Y < y", col.compare("Y", "y") < 0);
        test.ok("y < Ý", col.compare("y", "Ý") < 0);
        test.ok("Ý = Ý", col.compare("Ý", "Ý") === 0);
        test.ok("Ý < ý", col.compare("Ý", "ý") < 0);
        test.ok("ý = ý", col.compare("ý", "ý") === 0);
        test.ok("ý < Z", col.compare("ý", "Z") < 0);
        test.ok("Z < z", col.compare("Z", "z") < 0);
        test.ok("z < Ž", col.compare("z", "Ž") < 0);
        test.ok("Ž = Ž", col.compare("Ž", "Ž") === 0);
        test.ok("Ž < ž", col.compare("Ž", "ž") < 0);
        test.ok("ž = ž", col.compare("ž", "ž") === 0);
        test.done();
    },

    testJSCollatorSec_cs: function(test) {
        test.expect(116);
        var col = new Collator({
            locale: "cs-CZ",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

        test.ok("A = a", col.compare("A", "a") === 0);
        test.ok("a < Á", col.compare("a", "Á") < 0);
        test.ok("Á = Á", col.compare("Á", "Á") === 0);
        test.ok("Á = á", col.compare("Á", "á") === 0);
        test.ok("á = á", col.compare("á", "á") === 0);
        test.ok("á < B", col.compare("á", "B") < 0);
        test.ok("B = b", col.compare("B", "b") === 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C = c", col.compare("C", "c") === 0);
        test.ok("c < Č", col.compare("c", "Č") < 0);
        test.ok("Č = Č", col.compare("Č", "Č") === 0);
        test.ok("Č = č", col.compare("Č", "č") === 0);
        test.ok("č = č", col.compare("č", "č") === 0);
        test.ok("č < D", col.compare("č", "D") < 0);
        test.ok("D = d", col.compare("D", "d") === 0);
        test.ok("d < Ď", col.compare("d", "Ď") < 0);
        test.ok("Ď = Ď", col.compare("Ď", "Ď") === 0);
        test.ok("Ď = ď", col.compare("Ď", "ď") === 0);
        test.ok("ď = ď", col.compare("ď", "ď") === 0);
        test.ok("ď < E", col.compare("ď", "E") < 0);
        test.ok("E = e", col.compare("E", "e") === 0);
        test.ok("e < É", col.compare("e", "É") < 0);
        test.ok("É = É", col.compare("É", "É") === 0);
        test.ok("É = é", col.compare("É", "é") === 0);
        test.ok("é = é", col.compare("é", "é") === 0);
        test.ok("é < Ě", col.compare("é", "Ě") < 0);
        test.ok("Ě = Ě", col.compare("Ě", "Ě") === 0);
        test.ok("Ě = ě", col.compare("Ě", "ě") === 0);
        test.ok("ě = ě", col.compare("ě", "ě") === 0);
        test.ok("ě < F", col.compare("ě", "F") < 0);
        test.ok("F = f", col.compare("F", "f") === 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G = g", col.compare("G", "g") === 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H = h", col.compare("H", "h") === 0);
        test.ok("h < CH", col.compare("h", "CH") < 0);
        test.ok("CH = Ch", col.compare("CH", "Ch") === 0);
        test.ok("Ch = cH", col.compare("Ch", "cH") === 0);
        test.ok("cH = ch", col.compare("cH", "ch") === 0);
        test.ok("ch < I", col.compare("ch", "I") < 0);
        test.ok("I = i", col.compare("I", "i") === 0);
        test.ok("i < Í", col.compare("i", "Í") < 0);
        test.ok("Í = Í", col.compare("Í", "Í") === 0);
        test.ok("Í = í", col.compare("Í", "í") === 0);
        test.ok("í = í", col.compare("í", "í") === 0);
        test.ok("í < J", col.compare("í", "J") < 0);
        test.ok("J = j", col.compare("J", "j") === 0);
        test.ok("j < K", col.compare("j", "K") < 0);
        test.ok("K = k", col.compare("K", "k") === 0);
        test.ok("k < L", col.compare("k", "L") < 0);
        test.ok("L = l", col.compare("L", "l") === 0);
        test.ok("l < M", col.compare("l", "M") < 0);
        test.ok("M = m", col.compare("M", "m") === 0);
        test.ok("m < N", col.compare("m", "N") < 0);
        test.ok("N = n", col.compare("N", "n") === 0);
        test.ok("n < Ň", col.compare("n", "Ň") < 0);
        test.ok("Ň = Ň", col.compare("Ň", "Ň") === 0);
        test.ok("Ň = ň", col.compare("Ň", "ň") === 0);
        test.ok("ň = ň", col.compare("ň", "ň") === 0);
        test.ok("ň < O", col.compare("ň", "O") < 0);
        test.ok("O = o", col.compare("O", "o") === 0);
        test.ok("o < Ó", col.compare("o", "Ó") < 0);
        test.ok("Ó = Ó", col.compare("Ó", "Ó") === 0);
        test.ok("Ó = ó", col.compare("Ó", "ó") === 0);
        test.ok("ó = ó", col.compare("ó", "ó") === 0);
        test.ok("ó < P", col.compare("ó", "P") < 0);
        test.ok("P = p", col.compare("P", "p") === 0);
        test.ok("p < Q", col.compare("p", "Q") < 0);
        test.ok("Q = q", col.compare("Q", "q") === 0);
        test.ok("q < R", col.compare("q", "R") < 0);
        test.ok("R = r", col.compare("R", "r") === 0);
        test.ok("r < Ř", col.compare("r", "Ř") < 0);
        test.ok("Ř = Ř", col.compare("Ř", "Ř") === 0);
        test.ok("Ř = ř", col.compare("Ř", "ř") === 0);
        test.ok("ř = ř", col.compare("ř", "ř") === 0);
        test.ok("ř < S", col.compare("ř", "S") < 0);
        test.ok("S = s", col.compare("S", "s") === 0);
        test.ok("s < Š", col.compare("s", "Š") < 0);
        test.ok("Š = Š", col.compare("Š", "Š") === 0);
        test.ok("Š = š", col.compare("Š", "š") === 0);
        test.ok("š = š", col.compare("š", "š") === 0);
        test.ok("š < T", col.compare("š", "T") < 0);
        test.ok("T = t", col.compare("T", "t") === 0);
        test.ok("t < Ť", col.compare("t", "Ť") < 0);
        test.ok("Ť = Ť", col.compare("Ť", "Ť") === 0);
        test.ok("Ť = ť", col.compare("Ť", "ť") === 0);
        test.ok("ť = ť", col.compare("ť", "ť") === 0);
        test.ok("ť < U", col.compare("ť", "U") < 0);
        test.ok("U = u", col.compare("U", "u") === 0);
        test.ok("u < Ú", col.compare("u", "Ú") < 0);
        test.ok("Ú = Ú", col.compare("Ú", "Ú") === 0);
        test.ok("Ú = ú", col.compare("Ú", "ú") === 0);
        test.ok("ú = ú", col.compare("ú", "ú") === 0);
        test.ok("ú < Ů", col.compare("ú", "Ů") < 0);
        test.ok("Ů = Ů", col.compare("Ů", "Ů") === 0);
        test.ok("Ů = ů", col.compare("Ů", "ů") === 0);
        test.ok("ů = ů", col.compare("ů", "ů") === 0);
        test.ok("ů < V", col.compare("ů", "V") < 0);
        test.ok("V = v", col.compare("V", "v") === 0);
        test.ok("v < W", col.compare("v", "W") < 0);
        test.ok("W = w", col.compare("W", "w") === 0);
        test.ok("w < X", col.compare("w", "X") < 0);
        test.ok("X = x", col.compare("X", "x") === 0);
        test.ok("x < Y", col.compare("x", "Y") < 0);
        test.ok("Y = y", col.compare("Y", "y") === 0);
        test.ok("y < Ý", col.compare("y", "Ý") < 0);
        test.ok("Ý = Ý", col.compare("Ý", "Ý") === 0);
        test.ok("Ý = ý", col.compare("Ý", "ý") === 0);
        test.ok("ý = ý", col.compare("ý", "ý") === 0);
        test.ok("ý < Z", col.compare("ý", "Z") < 0);
        test.ok("Z = z", col.compare("Z", "z") === 0);
        test.ok("z < Ž", col.compare("z", "Ž") < 0);
        test.ok("Ž = Ž", col.compare("Ž", "Ž") === 0);
        test.ok("Ž = ž", col.compare("Ž", "ž") === 0);
        test.ok("ž = ž", col.compare("ž", "ž") === 0);
        test.done();
    },

    testJSCollatorPri_cs: function(test) {
        test.expect(116);
        var col = new Collator({
            locale: "cs-CZ",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

        test.ok("A = a", col.compare("A", "a") === 0);
        test.ok("a < Á", col.compare("a", "Á") < 0);
        test.ok("Á = Á", col.compare("Á", "Á") === 0);
        test.ok("Á = á", col.compare("Á", "á") === 0);
        test.ok("á = á", col.compare("á", "á") === 0);
        test.ok("á < B", col.compare("á", "B") < 0);
        test.ok("B = b", col.compare("B", "b") === 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C = c", col.compare("C", "c") === 0);
        test.ok("c < Č", col.compare("c", "Č") < 0);
        test.ok("Č = Č", col.compare("Č", "Č") === 0);
        test.ok("Č = č", col.compare("Č", "č") === 0);
        test.ok("č = č", col.compare("č", "č") === 0);
        test.ok("č < D", col.compare("č", "D") < 0);
        test.ok("D = d", col.compare("D", "d") === 0);
        test.ok("d < Ď", col.compare("d", "Ď") < 0);
        test.ok("Ď = Ď", col.compare("Ď", "Ď") === 0);
        test.ok("Ď = ď", col.compare("Ď", "ď") === 0);
        test.ok("ď = ď", col.compare("ď", "ď") === 0);
        test.ok("ď < E", col.compare("ď", "E") < 0);
        test.ok("E = e", col.compare("E", "e") === 0);
        test.ok("e < É", col.compare("e", "É") < 0);
        test.ok("É = É", col.compare("É", "É") === 0);
        test.ok("É = é", col.compare("É", "é") === 0);
        test.ok("é = é", col.compare("é", "é") === 0);
        test.ok("é < Ě", col.compare("é", "Ě") < 0);
        test.ok("Ě = Ě", col.compare("Ě", "Ě") === 0);
        test.ok("Ě = ě", col.compare("Ě", "ě") === 0);
        test.ok("ě = ě", col.compare("ě", "ě") === 0);
        test.ok("ě < F", col.compare("ě", "F") < 0);
        test.ok("F = f", col.compare("F", "f") === 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G = g", col.compare("G", "g") === 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H = h", col.compare("H", "h") === 0);
        test.ok("h < CH", col.compare("h", "CH") < 0);
        test.ok("CH = Ch", col.compare("CH", "Ch") === 0);
        test.ok("Ch = cH", col.compare("Ch", "cH") === 0);
        test.ok("cH = ch", col.compare("cH", "ch") === 0);
        test.ok("ch < I", col.compare("ch", "I") < 0);
        test.ok("I = i", col.compare("I", "i") === 0);
        test.ok("i < Í", col.compare("i", "Í") < 0);
        test.ok("Í = Í", col.compare("Í", "Í") === 0);
        test.ok("Í = í", col.compare("Í", "í") === 0);
        test.ok("í = í", col.compare("í", "í") === 0);
        test.ok("í < J", col.compare("í", "J") < 0);
        test.ok("J = j", col.compare("J", "j") === 0);
        test.ok("j < K", col.compare("j", "K") < 0);
        test.ok("K = k", col.compare("K", "k") === 0);
        test.ok("k < L", col.compare("k", "L") < 0);
        test.ok("L = l", col.compare("L", "l") === 0);
        test.ok("l < M", col.compare("l", "M") < 0);
        test.ok("M = m", col.compare("M", "m") === 0);
        test.ok("m < N", col.compare("m", "N") < 0);
        test.ok("N = n", col.compare("N", "n") === 0);
        test.ok("n < Ň", col.compare("n", "Ň") < 0);
        test.ok("Ň = Ň", col.compare("Ň", "Ň") === 0);
        test.ok("Ň = ň", col.compare("Ň", "ň") === 0);
        test.ok("ň = ň", col.compare("ň", "ň") === 0);
        test.ok("ň < O", col.compare("ň", "O") < 0);
        test.ok("O = o", col.compare("O", "o") === 0);
        test.ok("o < Ó", col.compare("o", "Ó") < 0);
        test.ok("Ó = Ó", col.compare("Ó", "Ó") === 0);
        test.ok("Ó = ó", col.compare("Ó", "ó") === 0);
        test.ok("ó = ó", col.compare("ó", "ó") === 0);
        test.ok("ó < P", col.compare("ó", "P") < 0);
        test.ok("P = p", col.compare("P", "p") === 0);
        test.ok("p < Q", col.compare("p", "Q") < 0);
        test.ok("Q = q", col.compare("Q", "q") === 0);
        test.ok("q < R", col.compare("q", "R") < 0);
        test.ok("R = r", col.compare("R", "r") === 0);
        test.ok("r < Ř", col.compare("r", "Ř") < 0);
        test.ok("Ř = Ř", col.compare("Ř", "Ř") === 0);
        test.ok("Ř = ř", col.compare("Ř", "ř") === 0);
        test.ok("ř = ř", col.compare("ř", "ř") === 0);
        test.ok("ř < S", col.compare("ř", "S") < 0);
        test.ok("S = s", col.compare("S", "s") === 0);
        test.ok("s < Š", col.compare("s", "Š") < 0);
        test.ok("Š = Š", col.compare("Š", "Š") === 0);
        test.ok("Š = š", col.compare("Š", "š") === 0);
        test.ok("š = š", col.compare("š", "š") === 0);
        test.ok("š < T", col.compare("š", "T") < 0);
        test.ok("T = t", col.compare("T", "t") === 0);
        test.ok("t < Ť", col.compare("t", "Ť") < 0);
        test.ok("Ť = Ť", col.compare("Ť", "Ť") === 0);
        test.ok("Ť = ť", col.compare("Ť", "ť") === 0);
        test.ok("ť = ť", col.compare("ť", "ť") === 0);
        test.ok("ť < U", col.compare("ť", "U") < 0);
        test.ok("U = u", col.compare("U", "u") === 0);
        test.ok("u < Ú", col.compare("u", "Ú") < 0);
        test.ok("Ú = Ú", col.compare("Ú", "Ú") === 0);
        test.ok("Ú = ú", col.compare("Ú", "ú") === 0);
        test.ok("ú = ú", col.compare("ú", "ú") === 0);
        test.ok("ú < Ů", col.compare("ú", "Ů") < 0);
        test.ok("Ů = Ů", col.compare("Ů", "Ů") === 0);
        test.ok("Ů = ů", col.compare("Ů", "ů") === 0);
        test.ok("ů = ů", col.compare("ů", "ů") === 0);
        test.ok("ů < V", col.compare("ů", "V") < 0);
        test.ok("V = v", col.compare("V", "v") === 0);
        test.ok("v < W", col.compare("v", "W") < 0);
        test.ok("W = w", col.compare("W", "w") === 0);
        test.ok("w < X", col.compare("w", "X") < 0);
        test.ok("X = x", col.compare("X", "x") === 0);
        test.ok("x < Y", col.compare("x", "Y") < 0);
        test.ok("Y = y", col.compare("Y", "y") === 0);
        test.ok("y < Ý", col.compare("y", "Ý") < 0);
        test.ok("Ý = Ý", col.compare("Ý", "Ý") === 0);
        test.ok("Ý = ý", col.compare("Ý", "ý") === 0);
        test.ok("ý = ý", col.compare("ý", "ý") === 0);
        test.ok("ý < Z", col.compare("ý", "Z") < 0);
        test.ok("Z = z", col.compare("Z", "z") === 0);
        test.ok("z < Ž", col.compare("z", "Ž") < 0);
        test.ok("Ž = Ž", col.compare("Ž", "Ž") === 0);
        test.ok("Ž = ž", col.compare("Ž", "ž") === 0);
        test.ok("ž = ž", col.compare("ž", "ž") === 0);
        test.done();
    },

    testJSCollatorQuatSort_cs: function(test) {
        test.expect(116);
        var col = new Collator({
            locale: "cs-CZ",
            useNative: false,
            sensitivity: "quaternary",
            usage: "sort"
        });

        test.ok(typeof(col) !== "undefined");

        // A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("a < Á", col.compare("a", "Á") < 0);
        test.ok("Á < Á", col.compare("Á", "Á") < 0);
        test.ok("Á < á", col.compare("Á", "á") < 0);
        test.ok("á < á", col.compare("á", "á") < 0);
        test.ok("á < B", col.compare("á", "B") < 0);
        test.ok("B < b", col.compare("B", "b") < 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C < c", col.compare("C", "c") < 0);
        test.ok("c < Č", col.compare("c", "Č") < 0);
        test.ok("Č < Č", col.compare("Č", "Č") < 0);
        test.ok("Č < č", col.compare("Č", "č") < 0);
        test.ok("č < č", col.compare("č", "č") < 0);
        test.ok("č < D", col.compare("č", "D") < 0);
        test.ok("D < d", col.compare("D", "d") < 0);
        test.ok("d < Ď", col.compare("d", "Ď") < 0);
        test.ok("Ď < Ď", col.compare("Ď", "Ď") < 0);
        test.ok("Ď < ď", col.compare("Ď", "ď") < 0);
        test.ok("ď < ď", col.compare("ď", "ď") < 0);
        test.ok("ď < E", col.compare("ď", "E") < 0);
        test.ok("E < e", col.compare("E", "e") < 0);
        test.ok("e < É", col.compare("e", "É") < 0);
        test.ok("É < É", col.compare("É", "É") < 0);
        test.ok("É < é", col.compare("É", "é") < 0);
        test.ok("é < é", col.compare("é", "é") < 0);
        test.ok("é < Ě", col.compare("é", "Ě") < 0);
        test.ok("Ě < Ě", col.compare("Ě", "Ě") < 0);
        test.ok("Ě < ě", col.compare("Ě", "ě") < 0);
        test.ok("ě < ě", col.compare("ě", "ě") < 0);
        test.ok("ě < F", col.compare("ě", "F") < 0);
        test.ok("F < f", col.compare("F", "f") < 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G < g", col.compare("G", "g") < 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H < h", col.compare("H", "h") < 0);
        test.ok("h < CH", col.compare("h", "CH") < 0);
        test.ok("CH < Ch", col.compare("CH", "Ch") < 0);
        test.ok("Ch < cH", col.compare("Ch", "cH") < 0);
        test.ok("cH < ch", col.compare("cH", "ch") < 0);
        test.ok("ch < I", col.compare("ch", "I") < 0);
        test.ok("I < i", col.compare("I", "i") < 0);
        test.ok("i < Í", col.compare("i", "Í") < 0);
        test.ok("Í < Í", col.compare("Í", "Í") < 0);
        test.ok("Í < í", col.compare("Í", "í") < 0);
        test.ok("í < í", col.compare("í", "í") < 0);
        test.ok("í < J", col.compare("í", "J") < 0);
        test.ok("J < j", col.compare("J", "j") < 0);
        test.ok("j < K", col.compare("j", "K") < 0);
        test.ok("K < k", col.compare("K", "k") < 0);
        test.ok("k < L", col.compare("k", "L") < 0);
        test.ok("L < l", col.compare("L", "l") < 0);
        test.ok("l < M", col.compare("l", "M") < 0);
        test.ok("M < m", col.compare("M", "m") < 0);
        test.ok("m < N", col.compare("m", "N") < 0);
        test.ok("N < n", col.compare("N", "n") < 0);
        test.ok("n < Ň", col.compare("n", "Ň") < 0);
        test.ok("Ň < Ň", col.compare("Ň", "Ň") < 0);
        test.ok("Ň < ň", col.compare("Ň", "ň") < 0);
        test.ok("ň < ň", col.compare("ň", "ň") < 0);
        test.ok("ň < O", col.compare("ň", "O") < 0);
        test.ok("O < o", col.compare("O", "o") < 0);
        test.ok("o < Ó", col.compare("o", "Ó") < 0);
        test.ok("Ó < Ó", col.compare("Ó", "Ó") < 0);
        test.ok("Ó < ó", col.compare("Ó", "ó") < 0);
        test.ok("ó < ó", col.compare("ó", "ó") < 0);
        test.ok("ó < P", col.compare("ó", "P") < 0);
        test.ok("P < p", col.compare("P", "p") < 0);
        test.ok("p < Q", col.compare("p", "Q") < 0);
        test.ok("Q < q", col.compare("Q", "q") < 0);
        test.ok("q < R", col.compare("q", "R") < 0);
        test.ok("R < r", col.compare("R", "r") < 0);
        test.ok("r < Ř", col.compare("r", "Ř") < 0);
        test.ok("Ř < Ř", col.compare("Ř", "Ř") < 0);
        test.ok("Ř < ř", col.compare("Ř", "ř") < 0);
        test.ok("ř < ř", col.compare("ř", "ř") < 0);
        test.ok("ř < S", col.compare("ř", "S") < 0);
        test.ok("S < s", col.compare("S", "s") < 0);
        test.ok("s < Š", col.compare("s", "Š") < 0);
        test.ok("Š < Š", col.compare("Š", "Š") < 0);
        test.ok("Š < š", col.compare("Š", "š") < 0);
        test.ok("š < š", col.compare("š", "š") < 0);
        test.ok("š < T", col.compare("š", "T") < 0);
        test.ok("T < t", col.compare("T", "t") < 0);
        test.ok("t < Ť", col.compare("t", "Ť") < 0);
        test.ok("Ť < Ť", col.compare("Ť", "Ť") < 0);
        test.ok("Ť < ť", col.compare("Ť", "ť") < 0);
        test.ok("ť < ť", col.compare("ť", "ť") < 0);
        test.ok("ť < U", col.compare("ť", "U") < 0);
        test.ok("U < u", col.compare("U", "u") < 0);
        test.ok("u < Ú", col.compare("u", "Ú") < 0);
        test.ok("Ú < Ú", col.compare("Ú", "Ú") < 0);
        test.ok("Ú < ú", col.compare("Ú", "ú") < 0);
        test.ok("ú < ú", col.compare("ú", "ú") < 0);
        test.ok("ú < Ů", col.compare("ú", "Ů") < 0);
        test.ok("Ů < Ů", col.compare("Ů", "Ů") < 0);
        test.ok("Ů < ů", col.compare("Ů", "ů") < 0);
        test.ok("ů < ů", col.compare("ů", "ů") < 0);
        test.ok("ů < V", col.compare("ů", "V") < 0);
        test.ok("V < v", col.compare("V", "v") < 0);
        test.ok("v < W", col.compare("v", "W") < 0);
        test.ok("W < w", col.compare("W", "w") < 0);
        test.ok("w < X", col.compare("w", "X") < 0);
        test.ok("X < x", col.compare("X", "x") < 0);
        test.ok("x < Y", col.compare("x", "Y") < 0);
        test.ok("Y < y", col.compare("Y", "y") < 0);
        test.ok("y < Ý", col.compare("y", "Ý") < 0);
        test.ok("Ý < Ý", col.compare("Ý", "Ý") < 0);
        test.ok("Ý < ý", col.compare("Ý", "ý") < 0);
        test.ok("ý < ý", col.compare("ý", "ý") < 0);
        test.ok("ý < Z", col.compare("ý", "Z") < 0);
        test.ok("Z < z", col.compare("Z", "z") < 0);
        test.ok("z < Ž", col.compare("z", "Ž") < 0);
        test.ok("Ž < Ž", col.compare("Ž", "Ž") < 0);
        test.ok("Ž < ž", col.compare("Ž", "ž") < 0);
        test.ok("ž < ž", col.compare("ž", "ž") < 0);
        test.done();
    },

    testJSCollatorTerSort_cs: function(test) {
        test.expect(116);
        var col = new Collator({
            locale: "cs-CZ",
            useNative: false,
            sensitivity: "tertiary",
            usage: "sort"
        });

        test.ok(typeof(col) !== "undefined");

        // A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("a < Á", col.compare("a", "Á") < 0);
        test.ok("Á < Á", col.compare("Á", "Á") < 0);
        test.ok("Á < á", col.compare("Á", "á") < 0);
        test.ok("á < á", col.compare("á", "á") < 0);
        test.ok("á < B", col.compare("á", "B") < 0);
        test.ok("B < b", col.compare("B", "b") < 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C < c", col.compare("C", "c") < 0);
        test.ok("c < Č", col.compare("c", "Č") < 0);
        test.ok("Č < Č", col.compare("Č", "Č") < 0);
        test.ok("Č < č", col.compare("Č", "č") < 0);
        test.ok("č < č", col.compare("č", "č") < 0);
        test.ok("č < D", col.compare("č", "D") < 0);
        test.ok("D < d", col.compare("D", "d") < 0);
        test.ok("d < Ď", col.compare("d", "Ď") < 0);
        test.ok("Ď < Ď", col.compare("Ď", "Ď") < 0);
        test.ok("Ď < ď", col.compare("Ď", "ď") < 0);
        test.ok("ď < ď", col.compare("ď", "ď") < 0);
        test.ok("ď < E", col.compare("ď", "E") < 0);
        test.ok("E < e", col.compare("E", "e") < 0);
        test.ok("e < É", col.compare("e", "É") < 0);
        test.ok("É < É", col.compare("É", "É") < 0);
        test.ok("É < é", col.compare("É", "é") < 0);
        test.ok("é < é", col.compare("é", "é") < 0);
        test.ok("é < Ě", col.compare("é", "Ě") < 0);
        test.ok("Ě < Ě", col.compare("Ě", "Ě") < 0);
        test.ok("Ě < ě", col.compare("Ě", "ě") < 0);
        test.ok("ě < ě", col.compare("ě", "ě") < 0);
        test.ok("ě < F", col.compare("ě", "F") < 0);
        test.ok("F < f", col.compare("F", "f") < 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G < g", col.compare("G", "g") < 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H < h", col.compare("H", "h") < 0);
        test.ok("h < CH", col.compare("h", "CH") < 0);
        test.ok("CH < Ch", col.compare("CH", "Ch") < 0);
        test.ok("Ch < cH", col.compare("Ch", "cH") < 0);
        test.ok("cH < ch", col.compare("cH", "ch") < 0);
        test.ok("ch < I", col.compare("ch", "I") < 0);
        test.ok("I < i", col.compare("I", "i") < 0);
        test.ok("i < Í", col.compare("i", "Í") < 0);
        test.ok("Í < Í", col.compare("Í", "Í") < 0);
        test.ok("Í < í", col.compare("Í", "í") < 0);
        test.ok("í < í", col.compare("í", "í") < 0);
        test.ok("í < J", col.compare("í", "J") < 0);
        test.ok("J < j", col.compare("J", "j") < 0);
        test.ok("j < K", col.compare("j", "K") < 0);
        test.ok("K < k", col.compare("K", "k") < 0);
        test.ok("k < L", col.compare("k", "L") < 0);
        test.ok("L < l", col.compare("L", "l") < 0);
        test.ok("l < M", col.compare("l", "M") < 0);
        test.ok("M < m", col.compare("M", "m") < 0);
        test.ok("m < N", col.compare("m", "N") < 0);
        test.ok("N < n", col.compare("N", "n") < 0);
        test.ok("n < Ň", col.compare("n", "Ň") < 0);
        test.ok("Ň < Ň", col.compare("Ň", "Ň") < 0);
        test.ok("Ň < ň", col.compare("Ň", "ň") < 0);
        test.ok("ň < ň", col.compare("ň", "ň") < 0);
        test.ok("ň < O", col.compare("ň", "O") < 0);
        test.ok("O < o", col.compare("O", "o") < 0);
        test.ok("o < Ó", col.compare("o", "Ó") < 0);
        test.ok("Ó < Ó", col.compare("Ó", "Ó") < 0);
        test.ok("Ó < ó", col.compare("Ó", "ó") < 0);
        test.ok("ó < ó", col.compare("ó", "ó") < 0);
        test.ok("ó < P", col.compare("ó", "P") < 0);
        test.ok("P < p", col.compare("P", "p") < 0);
        test.ok("p < Q", col.compare("p", "Q") < 0);
        test.ok("Q < q", col.compare("Q", "q") < 0);
        test.ok("q < R", col.compare("q", "R") < 0);
        test.ok("R < r", col.compare("R", "r") < 0);
        test.ok("r < Ř", col.compare("r", "Ř") < 0);
        test.ok("Ř < Ř", col.compare("Ř", "Ř") < 0);
        test.ok("Ř < ř", col.compare("Ř", "ř") < 0);
        test.ok("ř < ř", col.compare("ř", "ř") < 0);
        test.ok("ř < S", col.compare("ř", "S") < 0);
        test.ok("S < s", col.compare("S", "s") < 0);
        test.ok("s < Š", col.compare("s", "Š") < 0);
        test.ok("Š < Š", col.compare("Š", "Š") < 0);
        test.ok("Š < š", col.compare("Š", "š") < 0);
        test.ok("š < š", col.compare("š", "š") < 0);
        test.ok("š < T", col.compare("š", "T") < 0);
        test.ok("T < t", col.compare("T", "t") < 0);
        test.ok("t < Ť", col.compare("t", "Ť") < 0);
        test.ok("Ť < Ť", col.compare("Ť", "Ť") < 0);
        test.ok("Ť < ť", col.compare("Ť", "ť") < 0);
        test.ok("ť < ť", col.compare("ť", "ť") < 0);
        test.ok("ť < U", col.compare("ť", "U") < 0);
        test.ok("U < u", col.compare("U", "u") < 0);
        test.ok("u < Ú", col.compare("u", "Ú") < 0);
        test.ok("Ú < Ú", col.compare("Ú", "Ú") < 0);
        test.ok("Ú < ú", col.compare("Ú", "ú") < 0);
        test.ok("ú < ú", col.compare("ú", "ú") < 0);
        test.ok("ú < Ů", col.compare("ú", "Ů") < 0);
        test.ok("Ů < Ů", col.compare("Ů", "Ů") < 0);
        test.ok("Ů < ů", col.compare("Ů", "ů") < 0);
        test.ok("ů < ů", col.compare("ů", "ů") < 0);
        test.ok("ů < V", col.compare("ů", "V") < 0);
        test.ok("V < v", col.compare("V", "v") < 0);
        test.ok("v < W", col.compare("v", "W") < 0);
        test.ok("W < w", col.compare("W", "w") < 0);
        test.ok("w < X", col.compare("w", "X") < 0);
        test.ok("X < x", col.compare("X", "x") < 0);
        test.ok("x < Y", col.compare("x", "Y") < 0);
        test.ok("Y < y", col.compare("Y", "y") < 0);
        test.ok("y < Ý", col.compare("y", "Ý") < 0);
        test.ok("Ý < Ý", col.compare("Ý", "Ý") < 0);
        test.ok("Ý < ý", col.compare("Ý", "ý") < 0);
        test.ok("ý < ý", col.compare("ý", "ý") < 0);
        test.ok("ý < Z", col.compare("ý", "Z") < 0);
        test.ok("Z < z", col.compare("Z", "z") < 0);
        test.ok("z < Ž", col.compare("z", "Ž") < 0);
        test.ok("Ž < Ž", col.compare("Ž", "Ž") < 0);
        test.ok("Ž < ž", col.compare("Ž", "ž") < 0);
        test.ok("ž < ž", col.compare("ž", "ž") < 0);
        test.done();
    },

    testJSCollatorSecSort_cs: function(test) {
        test.expect(116);
        var col = new Collator({
            locale: "cs-CZ",
            useNative: false,
            sensitivity: "secondary",
            usage: "sort"
        });

        test.ok(typeof(col) !== "undefined");

        // A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("a < Á", col.compare("a", "Á") < 0);
        test.ok("Á < Á", col.compare("Á", "Á") < 0);
        test.ok("Á < á", col.compare("Á", "á") < 0);
        test.ok("á < á", col.compare("á", "á") < 0);
        test.ok("á < B", col.compare("á", "B") < 0);
        test.ok("B < b", col.compare("B", "b") < 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C < c", col.compare("C", "c") < 0);
        test.ok("c < Č", col.compare("c", "Č") < 0);
        test.ok("Č < Č", col.compare("Č", "Č") < 0);
        test.ok("Č < č", col.compare("Č", "č") < 0);
        test.ok("č < č", col.compare("č", "č") < 0);
        test.ok("č < D", col.compare("č", "D") < 0);
        test.ok("D < d", col.compare("D", "d") < 0);
        test.ok("d < Ď", col.compare("d", "Ď") < 0);
        test.ok("Ď < Ď", col.compare("Ď", "Ď") < 0);
        test.ok("Ď < ď", col.compare("Ď", "ď") < 0);
        test.ok("ď < ď", col.compare("ď", "ď") < 0);
        test.ok("ď < E", col.compare("ď", "E") < 0);
        test.ok("E < e", col.compare("E", "e") < 0);
        test.ok("e < É", col.compare("e", "É") < 0);
        test.ok("É < É", col.compare("É", "É") < 0);
        test.ok("É < é", col.compare("É", "é") < 0);
        test.ok("é < é", col.compare("é", "é") < 0);
        test.ok("é < Ě", col.compare("é", "Ě") < 0);
        test.ok("Ě < Ě", col.compare("Ě", "Ě") < 0);
        test.ok("Ě < ě", col.compare("Ě", "ě") < 0);
        test.ok("ě < ě", col.compare("ě", "ě") < 0);
        test.ok("ě < F", col.compare("ě", "F") < 0);
        test.ok("F < f", col.compare("F", "f") < 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G < g", col.compare("G", "g") < 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H < h", col.compare("H", "h") < 0);
        test.ok("h < CH", col.compare("h", "CH") < 0);
        test.ok("CH < Ch", col.compare("CH", "Ch") < 0);
        test.ok("Ch < cH", col.compare("Ch", "cH") < 0);
        test.ok("cH < ch", col.compare("cH", "ch") < 0);
        test.ok("ch < I", col.compare("ch", "I") < 0);
        test.ok("I < i", col.compare("I", "i") < 0);
        test.ok("i < Í", col.compare("i", "Í") < 0);
        test.ok("Í < Í", col.compare("Í", "Í") < 0);
        test.ok("Í < í", col.compare("Í", "í") < 0);
        test.ok("í < í", col.compare("í", "í") < 0);
        test.ok("í < J", col.compare("í", "J") < 0);
        test.ok("J < j", col.compare("J", "j") < 0);
        test.ok("j < K", col.compare("j", "K") < 0);
        test.ok("K < k", col.compare("K", "k") < 0);
        test.ok("k < L", col.compare("k", "L") < 0);
        test.ok("L < l", col.compare("L", "l") < 0);
        test.ok("l < M", col.compare("l", "M") < 0);
        test.ok("M < m", col.compare("M", "m") < 0);
        test.ok("m < N", col.compare("m", "N") < 0);
        test.ok("N < n", col.compare("N", "n") < 0);
        test.ok("n < Ň", col.compare("n", "Ň") < 0);
        test.ok("Ň < Ň", col.compare("Ň", "Ň") < 0);
        test.ok("Ň < ň", col.compare("Ň", "ň") < 0);
        test.ok("ň < ň", col.compare("ň", "ň") < 0);
        test.ok("ň < O", col.compare("ň", "O") < 0);
        test.ok("O < o", col.compare("O", "o") < 0);
        test.ok("o < Ó", col.compare("o", "Ó") < 0);
        test.ok("Ó < Ó", col.compare("Ó", "Ó") < 0);
        test.ok("Ó < ó", col.compare("Ó", "ó") < 0);
        test.ok("ó < ó", col.compare("ó", "ó") < 0);
        test.ok("ó < P", col.compare("ó", "P") < 0);
        test.ok("P < p", col.compare("P", "p") < 0);
        test.ok("p < Q", col.compare("p", "Q") < 0);
        test.ok("Q < q", col.compare("Q", "q") < 0);
        test.ok("q < R", col.compare("q", "R") < 0);
        test.ok("R < r", col.compare("R", "r") < 0);
        test.ok("r < Ř", col.compare("r", "Ř") < 0);
        test.ok("Ř < Ř", col.compare("Ř", "Ř") < 0);
        test.ok("Ř < ř", col.compare("Ř", "ř") < 0);
        test.ok("ř < ř", col.compare("ř", "ř") < 0);
        test.ok("ř < S", col.compare("ř", "S") < 0);
        test.ok("S < s", col.compare("S", "s") < 0);
        test.ok("s < Š", col.compare("s", "Š") < 0);
        test.ok("Š < Š", col.compare("Š", "Š") < 0);
        test.ok("Š < š", col.compare("Š", "š") < 0);
        test.ok("š < š", col.compare("š", "š") < 0);
        test.ok("š < T", col.compare("š", "T") < 0);
        test.ok("T < t", col.compare("T", "t") < 0);
        test.ok("t < Ť", col.compare("t", "Ť") < 0);
        test.ok("Ť < Ť", col.compare("Ť", "Ť") < 0);
        test.ok("Ť < ť", col.compare("Ť", "ť") < 0);
        test.ok("ť < ť", col.compare("ť", "ť") < 0);
        test.ok("ť < U", col.compare("ť", "U") < 0);
        test.ok("U < u", col.compare("U", "u") < 0);
        test.ok("u < Ú", col.compare("u", "Ú") < 0);
        test.ok("Ú < Ú", col.compare("Ú", "Ú") < 0);
        test.ok("Ú < ú", col.compare("Ú", "ú") < 0);
        test.ok("ú < ú", col.compare("ú", "ú") < 0);
        test.ok("ú < Ů", col.compare("ú", "Ů") < 0);
        test.ok("Ů < Ů", col.compare("Ů", "Ů") < 0);
        test.ok("Ů < ů", col.compare("Ů", "ů") < 0);
        test.ok("ů < ů", col.compare("ů", "ů") < 0);
        test.ok("ů < V", col.compare("ů", "V") < 0);
        test.ok("V < v", col.compare("V", "v") < 0);
        test.ok("v < W", col.compare("v", "W") < 0);
        test.ok("W < w", col.compare("W", "w") < 0);
        test.ok("w < X", col.compare("w", "X") < 0);
        test.ok("X < x", col.compare("X", "x") < 0);
        test.ok("x < Y", col.compare("x", "Y") < 0);
        test.ok("Y < y", col.compare("Y", "y") < 0);
        test.ok("y < Ý", col.compare("y", "Ý") < 0);
        test.ok("Ý < Ý", col.compare("Ý", "Ý") < 0);
        test.ok("Ý < ý", col.compare("Ý", "ý") < 0);
        test.ok("ý < ý", col.compare("ý", "ý") < 0);
        test.ok("ý < Z", col.compare("ý", "Z") < 0);
        test.ok("Z < z", col.compare("Z", "z") < 0);
        test.ok("z < Ž", col.compare("z", "Ž") < 0);
        test.ok("Ž < Ž", col.compare("Ž", "Ž") < 0);
        test.ok("Ž < ž", col.compare("Ž", "ž") < 0);
        test.ok("ž < ž", col.compare("ž", "ž") < 0);
        test.done();
    },

    testJSCollatorPriSort_cs: function(test) {
        test.expect(116);
        var col = new Collator({
            locale: "cs-CZ",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });

        test.ok(typeof(col) !== "undefined");

        // A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("a < Á", col.compare("a", "Á") < 0);
        test.ok("Á < Á", col.compare("Á", "Á") < 0);
        test.ok("Á < á", col.compare("Á", "á") < 0);
        test.ok("á < á", col.compare("á", "á") < 0);
        test.ok("á < B", col.compare("á", "B") < 0);
        test.ok("B < b", col.compare("B", "b") < 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C < c", col.compare("C", "c") < 0);
        test.ok("c < Č", col.compare("c", "Č") < 0);
        test.ok("Č < Č", col.compare("Č", "Č") < 0);
        test.ok("Č < č", col.compare("Č", "č") < 0);
        test.ok("č < č", col.compare("č", "č") < 0);
        test.ok("č < D", col.compare("č", "D") < 0);
        test.ok("D < d", col.compare("D", "d") < 0);
        test.ok("d < Ď", col.compare("d", "Ď") < 0);
        test.ok("Ď < Ď", col.compare("Ď", "Ď") < 0);
        test.ok("Ď < ď", col.compare("Ď", "ď") < 0);
        test.ok("ď < ď", col.compare("ď", "ď") < 0);
        test.ok("ď < E", col.compare("ď", "E") < 0);
        test.ok("E < e", col.compare("E", "e") < 0);
        test.ok("e < É", col.compare("e", "É") < 0);
        test.ok("É < É", col.compare("É", "É") < 0);
        test.ok("É < é", col.compare("É", "é") < 0);
        test.ok("é < é", col.compare("é", "é") < 0);
        test.ok("é < Ě", col.compare("é", "Ě") < 0);
        test.ok("Ě < Ě", col.compare("Ě", "Ě") < 0);
        test.ok("Ě < ě", col.compare("Ě", "ě") < 0);
        test.ok("ě < ě", col.compare("ě", "ě") < 0);
        test.ok("ě < F", col.compare("ě", "F") < 0);
        test.ok("F < f", col.compare("F", "f") < 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G < g", col.compare("G", "g") < 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H < h", col.compare("H", "h") < 0);
        test.ok("h < CH", col.compare("h", "CH") < 0);
        test.ok("CH < Ch", col.compare("CH", "Ch") < 0);
        test.ok("Ch < cH", col.compare("Ch", "cH") < 0);
        test.ok("cH < ch", col.compare("cH", "ch") < 0);
        test.ok("ch < I", col.compare("ch", "I") < 0);
        test.ok("I < i", col.compare("I", "i") < 0);
        test.ok("i < Í", col.compare("i", "Í") < 0);
        test.ok("Í < Í", col.compare("Í", "Í") < 0);
        test.ok("Í < í", col.compare("Í", "í") < 0);
        test.ok("í < í", col.compare("í", "í") < 0);
        test.ok("í < J", col.compare("í", "J") < 0);
        test.ok("J < j", col.compare("J", "j") < 0);
        test.ok("j < K", col.compare("j", "K") < 0);
        test.ok("K < k", col.compare("K", "k") < 0);
        test.ok("k < L", col.compare("k", "L") < 0);
        test.ok("L < l", col.compare("L", "l") < 0);
        test.ok("l < M", col.compare("l", "M") < 0);
        test.ok("M < m", col.compare("M", "m") < 0);
        test.ok("m < N", col.compare("m", "N") < 0);
        test.ok("N < n", col.compare("N", "n") < 0);
        test.ok("n < Ň", col.compare("n", "Ň") < 0);
        test.ok("Ň < Ň", col.compare("Ň", "Ň") < 0);
        test.ok("Ň < ň", col.compare("Ň", "ň") < 0);
        test.ok("ň < ň", col.compare("ň", "ň") < 0);
        test.ok("ň < O", col.compare("ň", "O") < 0);
        test.ok("O < o", col.compare("O", "o") < 0);
        test.ok("o < Ó", col.compare("o", "Ó") < 0);
        test.ok("Ó < Ó", col.compare("Ó", "Ó") < 0);
        test.ok("Ó < ó", col.compare("Ó", "ó") < 0);
        test.ok("ó < ó", col.compare("ó", "ó") < 0);
        test.ok("ó < P", col.compare("ó", "P") < 0);
        test.ok("P < p", col.compare("P", "p") < 0);
        test.ok("p < Q", col.compare("p", "Q") < 0);
        test.ok("Q < q", col.compare("Q", "q") < 0);
        test.ok("q < R", col.compare("q", "R") < 0);
        test.ok("R < r", col.compare("R", "r") < 0);
        test.ok("r < Ř", col.compare("r", "Ř") < 0);
        test.ok("Ř < Ř", col.compare("Ř", "Ř") < 0);
        test.ok("Ř < ř", col.compare("Ř", "ř") < 0);
        test.ok("ř < ř", col.compare("ř", "ř") < 0);
        test.ok("ř < S", col.compare("ř", "S") < 0);
        test.ok("S < s", col.compare("S", "s") < 0);
        test.ok("s < Š", col.compare("s", "Š") < 0);
        test.ok("Š < Š", col.compare("Š", "Š") < 0);
        test.ok("Š < š", col.compare("Š", "š") < 0);
        test.ok("š < š", col.compare("š", "š") < 0);
        test.ok("š < T", col.compare("š", "T") < 0);
        test.ok("T < t", col.compare("T", "t") < 0);
        test.ok("t < Ť", col.compare("t", "Ť") < 0);
        test.ok("Ť < Ť", col.compare("Ť", "Ť") < 0);
        test.ok("Ť < ť", col.compare("Ť", "ť") < 0);
        test.ok("ť < ť", col.compare("ť", "ť") < 0);
        test.ok("ť < U", col.compare("ť", "U") < 0);
        test.ok("U < u", col.compare("U", "u") < 0);
        test.ok("u < Ú", col.compare("u", "Ú") < 0);
        test.ok("Ú < Ú", col.compare("Ú", "Ú") < 0);
        test.ok("Ú < ú", col.compare("Ú", "ú") < 0);
        test.ok("ú < ú", col.compare("ú", "ú") < 0);
        test.ok("ú < Ů", col.compare("ú", "Ů") < 0);
        test.ok("Ů < Ů", col.compare("Ů", "Ů") < 0);
        test.ok("Ů < ů", col.compare("Ů", "ů") < 0);
        test.ok("ů < ů", col.compare("ů", "ů") < 0);
        test.ok("ů < V", col.compare("ů", "V") < 0);
        test.ok("V < v", col.compare("V", "v") < 0);
        test.ok("v < W", col.compare("v", "W") < 0);
        test.ok("W < w", col.compare("W", "w") < 0);
        test.ok("w < X", col.compare("w", "X") < 0);
        test.ok("X < x", col.compare("X", "x") < 0);
        test.ok("x < Y", col.compare("x", "Y") < 0);
        test.ok("Y < y", col.compare("Y", "y") < 0);
        test.ok("y < Ý", col.compare("y", "Ý") < 0);
        test.ok("Ý < Ý", col.compare("Ý", "Ý") < 0);
        test.ok("Ý < ý", col.compare("Ý", "ý") < 0);
        test.ok("ý < ý", col.compare("ý", "ý") < 0);
        test.ok("ý < Z", col.compare("ý", "Z") < 0);
        test.ok("Z < z", col.compare("Z", "z") < 0);
        test.ok("z < Ž", col.compare("z", "Ž") < 0);
        test.ok("Ž < Ž", col.compare("Ž", "Ž") < 0);
        test.ok("Ž < ž", col.compare("Ž", "ž") < 0);
        test.ok("ž < ž", col.compare("ž", "ž") < 0);
        test.done();
    },

    testCollatorCase_cs: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "cs-CZ",
            useNative: false,
            sensitivity: "case",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");

        var input = [
            "úber",
            "ček",
            "aaa",
            "ůber",
             "á",
            "Ďud",
            "izzy",
            "é",
            "czech",
            "uzbek",
            "Ě",
            "car",
            "ůlaru",
            "ě",
            "aa",
            "church",
            "a",
            "island",
            "uber",
            "ísland",
            "áa",
            "drum",
            "az",
            "hzzzzz",
            "e",
            "Church",
            "úzo",
            "Bilbao"
        ];

        input.sort(col.getComparator());

     // A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

        var expected = [
            "a",
            "aa",
            "aaa",
            "az",
            "á",
            "áa",
            "Bilbao",
            "car",
            "czech",
            "ček",
            "drum",
            "Ďud",
            "e",
            "é",
            "Ě",
            "ě",
            "hzzzzz",
            "Church",
            "church",
            "island",
            "izzy",
            "ísland",
            "uber",
            "uzbek",
            "úber",
            "úzo",
            "ůber",
            "ůlaru"
        ];

        test.deepEqual(input, expected);
        test.done();
    },

    testCollatorPrimary_cs: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "cs-CZ",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");

        var input = [
            "úber",
            "ček",
            "aaa",
            "ůber",
            "á",
            "Ďud",
            "izzy",
            "é",
            "czech",
            "uzbek",
            "Ě",
            "car",
            "ůlaru",
            "ě",
            "aa",
            "church",
            "a",
            "island",
            "uber",
            "ísland",
            "áa",
            "drum",
            "az",
            "hzzzzz",
            "e",
            "Church",
            "úzo",
            "Bilbao"
         ];

        input.sort(col.getComparator());

      // A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

        var expected = [
            "a",
            "aa",
            "aaa",
            "az",
            "á",
            "áa",
            "Bilbao",
            "car",
            "czech",
            "ček",
            "drum",
            "Ďud",
            "e",
            "é",
            "Ě",
            "ě",
            "hzzzzz",
            "Church",
            "church",
            "island",
            "izzy",
            "ísland",
            "uber",
            "uzbek",
            "úber",
            "úzo",
            "ůber",
            "ůlaru"
         ];

        test.deepEqual(input, expected);
        test.done();
    }

};