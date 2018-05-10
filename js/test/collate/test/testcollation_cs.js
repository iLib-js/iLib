/*
 * testcollation_cs.js - test the Collator object in Czech
 * 
 * Copyright © 2015, JEDLSoft
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

var ilib = require("../lib/ilib.js");
var Collator = require("../lib/Collator.js");

function testJSCollatorQuat_cs() {
	var col = new Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("a < Á", col.compare("a", "Á") < 0);
	assertTrue("Á < Á", col.compare("Á", "Á") < 0);
	assertTrue("Á < á", col.compare("Á", "á") < 0);
	assertTrue("á < á", col.compare("á", "á") < 0);
	assertTrue("á < B", col.compare("á", "B") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("b < C", col.compare("b", "C") < 0);
	assertTrue("C < c", col.compare("C", "c") < 0);
	assertTrue("c < Č", col.compare("c", "Č") < 0);
	assertTrue("Č < Č", col.compare("Č", "Č") < 0);
	assertTrue("Č < č", col.compare("Č", "č") < 0);
	assertTrue("č < č", col.compare("č", "č") < 0);
	assertTrue("č < D", col.compare("č", "D") < 0);
	assertTrue("D < d", col.compare("D", "d") < 0);
	assertTrue("d < Ď", col.compare("d", "Ď") < 0);
	assertTrue("Ď < Ď", col.compare("Ď", "Ď") < 0);
	assertTrue("Ď < ď", col.compare("Ď", "ď") < 0);
	assertTrue("ď < ď", col.compare("ď", "ď") < 0);
	assertTrue("ď < E", col.compare("ď", "E") < 0);
	assertTrue("E < e", col.compare("E", "e") < 0);
	assertTrue("e < É", col.compare("e", "É") < 0);
	assertTrue("É < É", col.compare("É", "É") < 0);
	assertTrue("É < é", col.compare("É", "é") < 0);
	assertTrue("é < é", col.compare("é", "é") < 0);
	assertTrue("é < Ě", col.compare("é", "Ě") < 0);
	assertTrue("Ě < Ě", col.compare("Ě", "Ě") < 0);
	assertTrue("Ě < ě", col.compare("Ě", "ě") < 0);
	assertTrue("ě < ě", col.compare("ě", "ě") < 0);
	assertTrue("ě < F", col.compare("ě", "F") < 0);
	assertTrue("F < f", col.compare("F", "f") < 0);
	assertTrue("f < G", col.compare("f", "G") < 0);
	assertTrue("G < g", col.compare("G", "g") < 0);
	assertTrue("g < H", col.compare("g", "H") < 0);
	assertTrue("H < h", col.compare("H", "h") < 0);
	assertTrue("h < CH", col.compare("h", "CH") < 0);
	assertTrue("CH < Ch", col.compare("CH", "Ch") < 0);
	assertTrue("Ch < cH", col.compare("Ch", "cH") < 0);
	assertTrue("cH < ch", col.compare("cH", "ch") < 0);
	assertTrue("ch < I", col.compare("ch", "I") < 0);
	assertTrue("I < i", col.compare("I", "i") < 0);
	assertTrue("i < Í", col.compare("i", "Í") < 0);
	assertTrue("Í < Í", col.compare("Í", "Í") < 0);
	assertTrue("Í < í", col.compare("Í", "í") < 0);
	assertTrue("í < í", col.compare("í", "í") < 0);
	assertTrue("í < J", col.compare("í", "J") < 0);
	assertTrue("J < j", col.compare("J", "j") < 0);
	assertTrue("j < K", col.compare("j", "K") < 0);
	assertTrue("K < k", col.compare("K", "k") < 0);
	assertTrue("k < L", col.compare("k", "L") < 0);
	assertTrue("L < l", col.compare("L", "l") < 0);
	assertTrue("l < M", col.compare("l", "M") < 0);
	assertTrue("M < m", col.compare("M", "m") < 0);
	assertTrue("m < N", col.compare("m", "N") < 0);
	assertTrue("N < n", col.compare("N", "n") < 0);
	assertTrue("n < Ň", col.compare("n", "Ň") < 0);
	assertTrue("Ň < Ň", col.compare("Ň", "Ň") < 0);
	assertTrue("Ň < ň", col.compare("Ň", "ň") < 0);
	assertTrue("ň < ň", col.compare("ň", "ň") < 0);
	assertTrue("ň < O", col.compare("ň", "O") < 0);
	assertTrue("O < o", col.compare("O", "o") < 0);
	assertTrue("o < Ó", col.compare("o", "Ó") < 0);
	assertTrue("Ó < Ó", col.compare("Ó", "Ó") < 0);
	assertTrue("Ó < ó", col.compare("Ó", "ó") < 0);
	assertTrue("ó < ó", col.compare("ó", "ó") < 0);
	assertTrue("ó < P", col.compare("ó", "P") < 0);
	assertTrue("P < p", col.compare("P", "p") < 0);
	assertTrue("p < Q", col.compare("p", "Q") < 0);
	assertTrue("Q < q", col.compare("Q", "q") < 0);
	assertTrue("q < R", col.compare("q", "R") < 0);
	assertTrue("R < r", col.compare("R", "r") < 0);
	assertTrue("r < Ř", col.compare("r", "Ř") < 0);
	assertTrue("Ř < Ř", col.compare("Ř", "Ř") < 0);
	assertTrue("Ř < ř", col.compare("Ř", "ř") < 0);
	assertTrue("ř < ř", col.compare("ř", "ř") < 0);
	assertTrue("ř < S", col.compare("ř", "S") < 0);
	assertTrue("S < s", col.compare("S", "s") < 0);
	assertTrue("s < Š", col.compare("s", "Š") < 0);
	assertTrue("Š < Š", col.compare("Š", "Š") < 0);
	assertTrue("Š < š", col.compare("Š", "š") < 0);
	assertTrue("š < š", col.compare("š", "š") < 0);
	assertTrue("š < T", col.compare("š", "T") < 0);
	assertTrue("T < t", col.compare("T", "t") < 0);
	assertTrue("t < Ť", col.compare("t", "Ť") < 0);
	assertTrue("Ť < Ť", col.compare("Ť", "Ť") < 0);
	assertTrue("Ť < ť", col.compare("Ť", "ť") < 0);
	assertTrue("ť < ť", col.compare("ť", "ť") < 0);
	assertTrue("ť < U", col.compare("ť", "U") < 0);
	assertTrue("U < u", col.compare("U", "u") < 0);
	assertTrue("u < Ú", col.compare("u", "Ú") < 0);
	assertTrue("Ú < Ú", col.compare("Ú", "Ú") < 0);
	assertTrue("Ú < ú", col.compare("Ú", "ú") < 0);
	assertTrue("ú < ú", col.compare("ú", "ú") < 0);
	assertTrue("ú < Ů", col.compare("ú", "Ů") < 0);
	assertTrue("Ů < Ů", col.compare("Ů", "Ů") < 0);
	assertTrue("Ů < ů", col.compare("Ů", "ů") < 0);
	assertTrue("ů < ů", col.compare("ů", "ů") < 0);
	assertTrue("ů < V", col.compare("ů", "V") < 0);
	assertTrue("V < v", col.compare("V", "v") < 0);
	assertTrue("v < W", col.compare("v", "W") < 0);
	assertTrue("W < w", col.compare("W", "w") < 0);
	assertTrue("w < X", col.compare("w", "X") < 0);
	assertTrue("X < x", col.compare("X", "x") < 0);
	assertTrue("x < Y", col.compare("x", "Y") < 0);
	assertTrue("Y < y", col.compare("Y", "y") < 0);
	assertTrue("y < Ý", col.compare("y", "Ý") < 0);
	assertTrue("Ý < Ý", col.compare("Ý", "Ý") < 0);
	assertTrue("Ý < ý", col.compare("Ý", "ý") < 0);
	assertTrue("ý < ý", col.compare("ý", "ý") < 0);
	assertTrue("ý < Z", col.compare("ý", "Z") < 0);
	assertTrue("Z < z", col.compare("Z", "z") < 0);
	assertTrue("z < Ž", col.compare("z", "Ž") < 0);
	assertTrue("Ž < Ž", col.compare("Ž", "Ž") < 0);
	assertTrue("Ž < ž", col.compare("Ž", "ž") < 0);
	assertTrue("ž < ž", col.compare("ž", "ž") < 0);
}

function testJSCollatorTer_cs() {
	var col = new Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("a < Á", col.compare("a", "Á") < 0);
	assertTrue("Á = Á", col.compare("Á", "Á") === 0);
	assertTrue("Á < á", col.compare("Á", "á") < 0);
	assertTrue("á = á", col.compare("á", "á") === 0);
	assertTrue("á < B", col.compare("á", "B") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("b < C", col.compare("b", "C") < 0);
	assertTrue("C < c", col.compare("C", "c") < 0);
	assertTrue("c < Č", col.compare("c", "Č") < 0);
	assertTrue("Č = Č", col.compare("Č", "Č") === 0);
	assertTrue("Č < č", col.compare("Č", "č") < 0);
	assertTrue("č = č", col.compare("č", "č") === 0);
	assertTrue("č < D", col.compare("č", "D") < 0);
	assertTrue("D < d", col.compare("D", "d") < 0);
	assertTrue("d < Ď", col.compare("d", "Ď") < 0);
	assertTrue("Ď = Ď", col.compare("Ď", "Ď") === 0);
	assertTrue("Ď < ď", col.compare("Ď", "ď") < 0);
	assertTrue("ď = ď", col.compare("ď", "ď") === 0);
	assertTrue("ď < E", col.compare("ď", "E") < 0);
	assertTrue("E < e", col.compare("E", "e") < 0);
	assertTrue("e < É", col.compare("e", "É") < 0);
	assertTrue("É = É", col.compare("É", "É") === 0);
	assertTrue("É < é", col.compare("É", "é") < 0);
	assertTrue("é = é", col.compare("é", "é") === 0);
	assertTrue("é < Ě", col.compare("é", "Ě") < 0);
	assertTrue("Ě = Ě", col.compare("Ě", "Ě") === 0);
	assertTrue("Ě < ě", col.compare("Ě", "ě") < 0);
	assertTrue("ě = ě", col.compare("ě", "ě") === 0);
	assertTrue("ě < F", col.compare("ě", "F") < 0);
	assertTrue("F < f", col.compare("F", "f") < 0);
	assertTrue("f < G", col.compare("f", "G") < 0);
	assertTrue("G < g", col.compare("G", "g") < 0);
	assertTrue("g < H", col.compare("g", "H") < 0);
	assertTrue("H < h", col.compare("H", "h") < 0);
	assertTrue("h < CH", col.compare("h", "CH") < 0);
	assertTrue("CH < Ch", col.compare("CH", "Ch") < 0);
	assertTrue("Ch < cH", col.compare("Ch", "cH") < 0);
	assertTrue("cH < ch", col.compare("cH", "ch") < 0);
	assertTrue("ch < I", col.compare("ch", "I") < 0);
	assertTrue("I < i", col.compare("I", "i") < 0);
	assertTrue("i < Í", col.compare("i", "Í") < 0);
	assertTrue("Í = Í", col.compare("Í", "Í") === 0);
	assertTrue("Í < í", col.compare("Í", "í") < 0);
	assertTrue("í = í", col.compare("í", "í") === 0);
	assertTrue("í < J", col.compare("í", "J") < 0);
	assertTrue("J < j", col.compare("J", "j") < 0);
	assertTrue("j < K", col.compare("j", "K") < 0);
	assertTrue("K < k", col.compare("K", "k") < 0);
	assertTrue("k < L", col.compare("k", "L") < 0);
	assertTrue("L < l", col.compare("L", "l") < 0);
	assertTrue("l < M", col.compare("l", "M") < 0);
	assertTrue("M < m", col.compare("M", "m") < 0);
	assertTrue("m < N", col.compare("m", "N") < 0);
	assertTrue("N < n", col.compare("N", "n") < 0);
	assertTrue("n < Ň", col.compare("n", "Ň") < 0);
	assertTrue("Ň = Ň", col.compare("Ň", "Ň") === 0);
	assertTrue("Ň < ň", col.compare("Ň", "ň") < 0);
	assertTrue("ň = ň", col.compare("ň", "ň") === 0);
	assertTrue("ň < O", col.compare("ň", "O") < 0);
	assertTrue("O < o", col.compare("O", "o") < 0);
	assertTrue("o < Ó", col.compare("o", "Ó") < 0);
	assertTrue("Ó = Ó", col.compare("Ó", "Ó") === 0);
	assertTrue("Ó < ó", col.compare("Ó", "ó") < 0);
	assertTrue("ó = ó", col.compare("ó", "ó") === 0);
	assertTrue("ó < P", col.compare("ó", "P") < 0);
	assertTrue("P < p", col.compare("P", "p") < 0);
	assertTrue("p < Q", col.compare("p", "Q") < 0);
	assertTrue("Q < q", col.compare("Q", "q") < 0);
	assertTrue("q < R", col.compare("q", "R") < 0);
	assertTrue("R < r", col.compare("R", "r") < 0);
	assertTrue("r < Ř", col.compare("r", "Ř") < 0);
	assertTrue("Ř = Ř", col.compare("Ř", "Ř") === 0);
	assertTrue("Ř < ř", col.compare("Ř", "ř") < 0);
	assertTrue("ř = ř", col.compare("ř", "ř") === 0);
	assertTrue("ř < S", col.compare("ř", "S") < 0);
	assertTrue("S < s", col.compare("S", "s") < 0);
	assertTrue("s < Š", col.compare("s", "Š") < 0);
	assertTrue("Š = Š", col.compare("Š", "Š") === 0);
	assertTrue("Š < š", col.compare("Š", "š") < 0);
	assertTrue("š = š", col.compare("š", "š") === 0);
	assertTrue("š < T", col.compare("š", "T") < 0);
	assertTrue("T < t", col.compare("T", "t") < 0);
	assertTrue("t < Ť", col.compare("t", "Ť") < 0);
	assertTrue("Ť = Ť", col.compare("Ť", "Ť") === 0);
	assertTrue("Ť < ť", col.compare("Ť", "ť") < 0);
	assertTrue("ť = ť", col.compare("ť", "ť") === 0);
	assertTrue("ť < U", col.compare("ť", "U") < 0);
	assertTrue("U < u", col.compare("U", "u") < 0);
	assertTrue("u < Ú", col.compare("u", "Ú") < 0);
	assertTrue("Ú = Ú", col.compare("Ú", "Ú") === 0);
	assertTrue("Ú < ú", col.compare("Ú", "ú") < 0);
	assertTrue("ú = ú", col.compare("ú", "ú") === 0);
	assertTrue("ú < Ů", col.compare("ú", "Ů") < 0);
	assertTrue("Ů = Ů", col.compare("Ů", "Ů") === 0);
	assertTrue("Ů < ů", col.compare("Ů", "ů") < 0);
	assertTrue("ů = ů", col.compare("ů", "ů") === 0);
	assertTrue("ů < V", col.compare("ů", "V") < 0);
	assertTrue("V < v", col.compare("V", "v") < 0);
	assertTrue("v < W", col.compare("v", "W") < 0);
	assertTrue("W < w", col.compare("W", "w") < 0);
	assertTrue("w < X", col.compare("w", "X") < 0);
	assertTrue("X < x", col.compare("X", "x") < 0);
	assertTrue("x < Y", col.compare("x", "Y") < 0);
	assertTrue("Y < y", col.compare("Y", "y") < 0);
	assertTrue("y < Ý", col.compare("y", "Ý") < 0);
	assertTrue("Ý = Ý", col.compare("Ý", "Ý") === 0);
	assertTrue("Ý < ý", col.compare("Ý", "ý") < 0);
	assertTrue("ý = ý", col.compare("ý", "ý") === 0);
	assertTrue("ý < Z", col.compare("ý", "Z") < 0);
	assertTrue("Z < z", col.compare("Z", "z") < 0);
	assertTrue("z < Ž", col.compare("z", "Ž") < 0);
	assertTrue("Ž = Ž", col.compare("Ž", "Ž") === 0);
	assertTrue("Ž < ž", col.compare("Ž", "ž") < 0);
	assertTrue("ž = ž", col.compare("ž", "ž") === 0);
}

function testJSCollatorSec_cs() {
	var col = new Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

	assertTrue("A = a", col.compare("A", "a") === 0);
	assertTrue("a < Á", col.compare("a", "Á") < 0);
	assertTrue("Á = Á", col.compare("Á", "Á") === 0);
	assertTrue("Á = á", col.compare("Á", "á") === 0);
	assertTrue("á = á", col.compare("á", "á") === 0);
	assertTrue("á < B", col.compare("á", "B") < 0);
	assertTrue("B = b", col.compare("B", "b") === 0);
	assertTrue("b < C", col.compare("b", "C") < 0);
	assertTrue("C = c", col.compare("C", "c") === 0);
	assertTrue("c < Č", col.compare("c", "Č") < 0);
	assertTrue("Č = Č", col.compare("Č", "Č") === 0);
	assertTrue("Č = č", col.compare("Č", "č") === 0);
	assertTrue("č = č", col.compare("č", "č") === 0);
	assertTrue("č < D", col.compare("č", "D") < 0);
	assertTrue("D = d", col.compare("D", "d") === 0);
	assertTrue("d < Ď", col.compare("d", "Ď") < 0);
	assertTrue("Ď = Ď", col.compare("Ď", "Ď") === 0);
	assertTrue("Ď = ď", col.compare("Ď", "ď") === 0);
	assertTrue("ď = ď", col.compare("ď", "ď") === 0);
	assertTrue("ď < E", col.compare("ď", "E") < 0);
	assertTrue("E = e", col.compare("E", "e") === 0);
	assertTrue("e < É", col.compare("e", "É") < 0);
	assertTrue("É = É", col.compare("É", "É") === 0);
	assertTrue("É = é", col.compare("É", "é") === 0);
	assertTrue("é = é", col.compare("é", "é") === 0);
	assertTrue("é < Ě", col.compare("é", "Ě") < 0);
	assertTrue("Ě = Ě", col.compare("Ě", "Ě") === 0);
	assertTrue("Ě = ě", col.compare("Ě", "ě") === 0);
	assertTrue("ě = ě", col.compare("ě", "ě") === 0);
	assertTrue("ě < F", col.compare("ě", "F") < 0);
	assertTrue("F = f", col.compare("F", "f") === 0);
	assertTrue("f < G", col.compare("f", "G") < 0);
	assertTrue("G = g", col.compare("G", "g") === 0);
	assertTrue("g < H", col.compare("g", "H") < 0);
	assertTrue("H = h", col.compare("H", "h") === 0);
	assertTrue("h < CH", col.compare("h", "CH") < 0);
	assertTrue("CH = Ch", col.compare("CH", "Ch") === 0);
	assertTrue("Ch = cH", col.compare("Ch", "cH") === 0);
	assertTrue("cH = ch", col.compare("cH", "ch") === 0);
	assertTrue("ch < I", col.compare("ch", "I") < 0);
	assertTrue("I = i", col.compare("I", "i") === 0);
	assertTrue("i < Í", col.compare("i", "Í") < 0);
	assertTrue("Í = Í", col.compare("Í", "Í") === 0);
	assertTrue("Í = í", col.compare("Í", "í") === 0);
	assertTrue("í = í", col.compare("í", "í") === 0);
	assertTrue("í < J", col.compare("í", "J") < 0);
	assertTrue("J = j", col.compare("J", "j") === 0);
	assertTrue("j < K", col.compare("j", "K") < 0);
	assertTrue("K = k", col.compare("K", "k") === 0);
	assertTrue("k < L", col.compare("k", "L") < 0);
	assertTrue("L = l", col.compare("L", "l") === 0);
	assertTrue("l < M", col.compare("l", "M") < 0);
	assertTrue("M = m", col.compare("M", "m") === 0);
	assertTrue("m < N", col.compare("m", "N") < 0);
	assertTrue("N = n", col.compare("N", "n") === 0);
	assertTrue("n < Ň", col.compare("n", "Ň") < 0);
	assertTrue("Ň = Ň", col.compare("Ň", "Ň") === 0);
	assertTrue("Ň = ň", col.compare("Ň", "ň") === 0);
	assertTrue("ň = ň", col.compare("ň", "ň") === 0);
	assertTrue("ň < O", col.compare("ň", "O") < 0);
	assertTrue("O = o", col.compare("O", "o") === 0);
	assertTrue("o < Ó", col.compare("o", "Ó") < 0);
	assertTrue("Ó = Ó", col.compare("Ó", "Ó") === 0);
	assertTrue("Ó = ó", col.compare("Ó", "ó") === 0);
	assertTrue("ó = ó", col.compare("ó", "ó") === 0);
	assertTrue("ó < P", col.compare("ó", "P") < 0);
	assertTrue("P = p", col.compare("P", "p") === 0);
	assertTrue("p < Q", col.compare("p", "Q") < 0);
	assertTrue("Q = q", col.compare("Q", "q") === 0);
	assertTrue("q < R", col.compare("q", "R") < 0);
	assertTrue("R = r", col.compare("R", "r") === 0);
	assertTrue("r < Ř", col.compare("r", "Ř") < 0);
	assertTrue("Ř = Ř", col.compare("Ř", "Ř") === 0);
	assertTrue("Ř = ř", col.compare("Ř", "ř") === 0);
	assertTrue("ř = ř", col.compare("ř", "ř") === 0);
	assertTrue("ř < S", col.compare("ř", "S") < 0);
	assertTrue("S = s", col.compare("S", "s") === 0);
	assertTrue("s < Š", col.compare("s", "Š") < 0);
	assertTrue("Š = Š", col.compare("Š", "Š") === 0);
	assertTrue("Š = š", col.compare("Š", "š") === 0);
	assertTrue("š = š", col.compare("š", "š") === 0);
	assertTrue("š < T", col.compare("š", "T") < 0);
	assertTrue("T = t", col.compare("T", "t") === 0);
	assertTrue("t < Ť", col.compare("t", "Ť") < 0);
	assertTrue("Ť = Ť", col.compare("Ť", "Ť") === 0);
	assertTrue("Ť = ť", col.compare("Ť", "ť") === 0);
	assertTrue("ť = ť", col.compare("ť", "ť") === 0);
	assertTrue("ť < U", col.compare("ť", "U") < 0);
	assertTrue("U = u", col.compare("U", "u") === 0);
	assertTrue("u < Ú", col.compare("u", "Ú") < 0);
	assertTrue("Ú = Ú", col.compare("Ú", "Ú") === 0);
	assertTrue("Ú = ú", col.compare("Ú", "ú") === 0);
	assertTrue("ú = ú", col.compare("ú", "ú") === 0);
	assertTrue("ú < Ů", col.compare("ú", "Ů") < 0);
	assertTrue("Ů = Ů", col.compare("Ů", "Ů") === 0);
	assertTrue("Ů = ů", col.compare("Ů", "ů") === 0);
	assertTrue("ů = ů", col.compare("ů", "ů") === 0);
	assertTrue("ů < V", col.compare("ů", "V") < 0);
	assertTrue("V = v", col.compare("V", "v") === 0);
	assertTrue("v < W", col.compare("v", "W") < 0);
	assertTrue("W = w", col.compare("W", "w") === 0);
	assertTrue("w < X", col.compare("w", "X") < 0);
	assertTrue("X = x", col.compare("X", "x") === 0);
	assertTrue("x < Y", col.compare("x", "Y") < 0);
	assertTrue("Y = y", col.compare("Y", "y") === 0);
	assertTrue("y < Ý", col.compare("y", "Ý") < 0);
	assertTrue("Ý = Ý", col.compare("Ý", "Ý") === 0);
	assertTrue("Ý = ý", col.compare("Ý", "ý") === 0);
	assertTrue("ý = ý", col.compare("ý", "ý") === 0);
	assertTrue("ý < Z", col.compare("ý", "Z") < 0);
	assertTrue("Z = z", col.compare("Z", "z") === 0);
	assertTrue("z < Ž", col.compare("z", "Ž") < 0);
	assertTrue("Ž = Ž", col.compare("Ž", "Ž") === 0);
	assertTrue("Ž = ž", col.compare("Ž", "ž") === 0);
	assertTrue("ž = ž", col.compare("ž", "ž") === 0);
}

function testJSCollatorPri_cs() {
	var col = new Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

	assertTrue("A = a", col.compare("A", "a") === 0);
	assertTrue("a < Á", col.compare("a", "Á") < 0);
	assertTrue("Á = Á", col.compare("Á", "Á") === 0);
	assertTrue("Á = á", col.compare("Á", "á") === 0);
	assertTrue("á = á", col.compare("á", "á") === 0);
	assertTrue("á < B", col.compare("á", "B") < 0);
	assertTrue("B = b", col.compare("B", "b") === 0);
	assertTrue("b < C", col.compare("b", "C") < 0);
	assertTrue("C = c", col.compare("C", "c") === 0);
	assertTrue("c < Č", col.compare("c", "Č") < 0);
	assertTrue("Č = Č", col.compare("Č", "Č") === 0);
	assertTrue("Č = č", col.compare("Č", "č") === 0);
	assertTrue("č = č", col.compare("č", "č") === 0);
	assertTrue("č < D", col.compare("č", "D") < 0);
	assertTrue("D = d", col.compare("D", "d") === 0);
	assertTrue("d < Ď", col.compare("d", "Ď") < 0);
	assertTrue("Ď = Ď", col.compare("Ď", "Ď") === 0);
	assertTrue("Ď = ď", col.compare("Ď", "ď") === 0);
	assertTrue("ď = ď", col.compare("ď", "ď") === 0);
	assertTrue("ď < E", col.compare("ď", "E") < 0);
	assertTrue("E = e", col.compare("E", "e") === 0);
	assertTrue("e < É", col.compare("e", "É") < 0);
	assertTrue("É = É", col.compare("É", "É") === 0);
	assertTrue("É = é", col.compare("É", "é") === 0);
	assertTrue("é = é", col.compare("é", "é") === 0);
	assertTrue("é < Ě", col.compare("é", "Ě") < 0);
	assertTrue("Ě = Ě", col.compare("Ě", "Ě") === 0);
	assertTrue("Ě = ě", col.compare("Ě", "ě") === 0);
	assertTrue("ě = ě", col.compare("ě", "ě") === 0);
	assertTrue("ě < F", col.compare("ě", "F") < 0);
	assertTrue("F = f", col.compare("F", "f") === 0);
	assertTrue("f < G", col.compare("f", "G") < 0);
	assertTrue("G = g", col.compare("G", "g") === 0);
	assertTrue("g < H", col.compare("g", "H") < 0);
	assertTrue("H = h", col.compare("H", "h") === 0);
	assertTrue("h < CH", col.compare("h", "CH") < 0);
	assertTrue("CH = Ch", col.compare("CH", "Ch") === 0);
	assertTrue("Ch = cH", col.compare("Ch", "cH") === 0);
	assertTrue("cH = ch", col.compare("cH", "ch") === 0);
	assertTrue("ch < I", col.compare("ch", "I") < 0);
	assertTrue("I = i", col.compare("I", "i") === 0);
	assertTrue("i < Í", col.compare("i", "Í") < 0);
	assertTrue("Í = Í", col.compare("Í", "Í") === 0);
	assertTrue("Í = í", col.compare("Í", "í") === 0);
	assertTrue("í = í", col.compare("í", "í") === 0);
	assertTrue("í < J", col.compare("í", "J") < 0);
	assertTrue("J = j", col.compare("J", "j") === 0);
	assertTrue("j < K", col.compare("j", "K") < 0);
	assertTrue("K = k", col.compare("K", "k") === 0);
	assertTrue("k < L", col.compare("k", "L") < 0);
	assertTrue("L = l", col.compare("L", "l") === 0);
	assertTrue("l < M", col.compare("l", "M") < 0);
	assertTrue("M = m", col.compare("M", "m") === 0);
	assertTrue("m < N", col.compare("m", "N") < 0);
	assertTrue("N = n", col.compare("N", "n") === 0);
	assertTrue("n < Ň", col.compare("n", "Ň") < 0);
	assertTrue("Ň = Ň", col.compare("Ň", "Ň") === 0);
	assertTrue("Ň = ň", col.compare("Ň", "ň") === 0);
	assertTrue("ň = ň", col.compare("ň", "ň") === 0);
	assertTrue("ň < O", col.compare("ň", "O") < 0);
	assertTrue("O = o", col.compare("O", "o") === 0);
	assertTrue("o < Ó", col.compare("o", "Ó") < 0);
	assertTrue("Ó = Ó", col.compare("Ó", "Ó") === 0);
	assertTrue("Ó = ó", col.compare("Ó", "ó") === 0);
	assertTrue("ó = ó", col.compare("ó", "ó") === 0);
	assertTrue("ó < P", col.compare("ó", "P") < 0);
	assertTrue("P = p", col.compare("P", "p") === 0);
	assertTrue("p < Q", col.compare("p", "Q") < 0);
	assertTrue("Q = q", col.compare("Q", "q") === 0);
	assertTrue("q < R", col.compare("q", "R") < 0);
	assertTrue("R = r", col.compare("R", "r") === 0);
	assertTrue("r < Ř", col.compare("r", "Ř") < 0);
	assertTrue("Ř = Ř", col.compare("Ř", "Ř") === 0);
	assertTrue("Ř = ř", col.compare("Ř", "ř") === 0);
	assertTrue("ř = ř", col.compare("ř", "ř") === 0);
	assertTrue("ř < S", col.compare("ř", "S") < 0);
	assertTrue("S = s", col.compare("S", "s") === 0);
	assertTrue("s < Š", col.compare("s", "Š") < 0);
	assertTrue("Š = Š", col.compare("Š", "Š") === 0);
	assertTrue("Š = š", col.compare("Š", "š") === 0);
	assertTrue("š = š", col.compare("š", "š") === 0);
	assertTrue("š < T", col.compare("š", "T") < 0);
	assertTrue("T = t", col.compare("T", "t") === 0);
	assertTrue("t < Ť", col.compare("t", "Ť") < 0);
	assertTrue("Ť = Ť", col.compare("Ť", "Ť") === 0);
	assertTrue("Ť = ť", col.compare("Ť", "ť") === 0);
	assertTrue("ť = ť", col.compare("ť", "ť") === 0);
	assertTrue("ť < U", col.compare("ť", "U") < 0);
	assertTrue("U = u", col.compare("U", "u") === 0);
	assertTrue("u < Ú", col.compare("u", "Ú") < 0);
	assertTrue("Ú = Ú", col.compare("Ú", "Ú") === 0);
	assertTrue("Ú = ú", col.compare("Ú", "ú") === 0);
	assertTrue("ú = ú", col.compare("ú", "ú") === 0);
	assertTrue("ú < Ů", col.compare("ú", "Ů") < 0);
	assertTrue("Ů = Ů", col.compare("Ů", "Ů") === 0);
	assertTrue("Ů = ů", col.compare("Ů", "ů") === 0);
	assertTrue("ů = ů", col.compare("ů", "ů") === 0);
	assertTrue("ů < V", col.compare("ů", "V") < 0);
	assertTrue("V = v", col.compare("V", "v") === 0);
	assertTrue("v < W", col.compare("v", "W") < 0);
	assertTrue("W = w", col.compare("W", "w") === 0);
	assertTrue("w < X", col.compare("w", "X") < 0);
	assertTrue("X = x", col.compare("X", "x") === 0);
	assertTrue("x < Y", col.compare("x", "Y") < 0);
	assertTrue("Y = y", col.compare("Y", "y") === 0);
	assertTrue("y < Ý", col.compare("y", "Ý") < 0);
	assertTrue("Ý = Ý", col.compare("Ý", "Ý") === 0);
	assertTrue("Ý = ý", col.compare("Ý", "ý") === 0);
	assertTrue("ý = ý", col.compare("ý", "ý") === 0);
	assertTrue("ý < Z", col.compare("ý", "Z") < 0);
	assertTrue("Z = z", col.compare("Z", "z") === 0);
	assertTrue("z < Ž", col.compare("z", "Ž") < 0);
	assertTrue("Ž = Ž", col.compare("Ž", "Ž") === 0);
	assertTrue("Ž = ž", col.compare("Ž", "ž") === 0);
	assertTrue("ž = ž", col.compare("ž", "ž") === 0);
}

function testJSCollatorQuatSort_cs() {
	var col = new Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "quaternary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("a < Á", col.compare("a", "Á") < 0);
	assertTrue("Á < Á", col.compare("Á", "Á") < 0);
	assertTrue("Á < á", col.compare("Á", "á") < 0);
	assertTrue("á < á", col.compare("á", "á") < 0);
	assertTrue("á < B", col.compare("á", "B") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("b < C", col.compare("b", "C") < 0);
	assertTrue("C < c", col.compare("C", "c") < 0);
	assertTrue("c < Č", col.compare("c", "Č") < 0);
	assertTrue("Č < Č", col.compare("Č", "Č") < 0);
	assertTrue("Č < č", col.compare("Č", "č") < 0);
	assertTrue("č < č", col.compare("č", "č") < 0);
	assertTrue("č < D", col.compare("č", "D") < 0);
	assertTrue("D < d", col.compare("D", "d") < 0);
	assertTrue("d < Ď", col.compare("d", "Ď") < 0);
	assertTrue("Ď < Ď", col.compare("Ď", "Ď") < 0);
	assertTrue("Ď < ď", col.compare("Ď", "ď") < 0);
	assertTrue("ď < ď", col.compare("ď", "ď") < 0);
	assertTrue("ď < E", col.compare("ď", "E") < 0);
	assertTrue("E < e", col.compare("E", "e") < 0);
	assertTrue("e < É", col.compare("e", "É") < 0);
	assertTrue("É < É", col.compare("É", "É") < 0);
	assertTrue("É < é", col.compare("É", "é") < 0);
	assertTrue("é < é", col.compare("é", "é") < 0);
	assertTrue("é < Ě", col.compare("é", "Ě") < 0);
	assertTrue("Ě < Ě", col.compare("Ě", "Ě") < 0);
	assertTrue("Ě < ě", col.compare("Ě", "ě") < 0);
	assertTrue("ě < ě", col.compare("ě", "ě") < 0);
	assertTrue("ě < F", col.compare("ě", "F") < 0);
	assertTrue("F < f", col.compare("F", "f") < 0);
	assertTrue("f < G", col.compare("f", "G") < 0);
	assertTrue("G < g", col.compare("G", "g") < 0);
	assertTrue("g < H", col.compare("g", "H") < 0);
	assertTrue("H < h", col.compare("H", "h") < 0);
	assertTrue("h < CH", col.compare("h", "CH") < 0);
	assertTrue("CH < Ch", col.compare("CH", "Ch") < 0);
	assertTrue("Ch < cH", col.compare("Ch", "cH") < 0);
	assertTrue("cH < ch", col.compare("cH", "ch") < 0);
	assertTrue("ch < I", col.compare("ch", "I") < 0);
	assertTrue("I < i", col.compare("I", "i") < 0);
	assertTrue("i < Í", col.compare("i", "Í") < 0);
	assertTrue("Í < Í", col.compare("Í", "Í") < 0);
	assertTrue("Í < í", col.compare("Í", "í") < 0);
	assertTrue("í < í", col.compare("í", "í") < 0);
	assertTrue("í < J", col.compare("í", "J") < 0);
	assertTrue("J < j", col.compare("J", "j") < 0);
	assertTrue("j < K", col.compare("j", "K") < 0);
	assertTrue("K < k", col.compare("K", "k") < 0);
	assertTrue("k < L", col.compare("k", "L") < 0);
	assertTrue("L < l", col.compare("L", "l") < 0);
	assertTrue("l < M", col.compare("l", "M") < 0);
	assertTrue("M < m", col.compare("M", "m") < 0);
	assertTrue("m < N", col.compare("m", "N") < 0);
	assertTrue("N < n", col.compare("N", "n") < 0);
	assertTrue("n < Ň", col.compare("n", "Ň") < 0);
	assertTrue("Ň < Ň", col.compare("Ň", "Ň") < 0);
	assertTrue("Ň < ň", col.compare("Ň", "ň") < 0);
	assertTrue("ň < ň", col.compare("ň", "ň") < 0);
	assertTrue("ň < O", col.compare("ň", "O") < 0);
	assertTrue("O < o", col.compare("O", "o") < 0);
	assertTrue("o < Ó", col.compare("o", "Ó") < 0);
	assertTrue("Ó < Ó", col.compare("Ó", "Ó") < 0);
	assertTrue("Ó < ó", col.compare("Ó", "ó") < 0);
	assertTrue("ó < ó", col.compare("ó", "ó") < 0);
	assertTrue("ó < P", col.compare("ó", "P") < 0);
	assertTrue("P < p", col.compare("P", "p") < 0);
	assertTrue("p < Q", col.compare("p", "Q") < 0);
	assertTrue("Q < q", col.compare("Q", "q") < 0);
	assertTrue("q < R", col.compare("q", "R") < 0);
	assertTrue("R < r", col.compare("R", "r") < 0);
	assertTrue("r < Ř", col.compare("r", "Ř") < 0);
	assertTrue("Ř < Ř", col.compare("Ř", "Ř") < 0);
	assertTrue("Ř < ř", col.compare("Ř", "ř") < 0);
	assertTrue("ř < ř", col.compare("ř", "ř") < 0);
	assertTrue("ř < S", col.compare("ř", "S") < 0);
	assertTrue("S < s", col.compare("S", "s") < 0);
	assertTrue("s < Š", col.compare("s", "Š") < 0);
	assertTrue("Š < Š", col.compare("Š", "Š") < 0);
	assertTrue("Š < š", col.compare("Š", "š") < 0);
	assertTrue("š < š", col.compare("š", "š") < 0);
	assertTrue("š < T", col.compare("š", "T") < 0);
	assertTrue("T < t", col.compare("T", "t") < 0);
	assertTrue("t < Ť", col.compare("t", "Ť") < 0);
	assertTrue("Ť < Ť", col.compare("Ť", "Ť") < 0);
	assertTrue("Ť < ť", col.compare("Ť", "ť") < 0);
	assertTrue("ť < ť", col.compare("ť", "ť") < 0);
	assertTrue("ť < U", col.compare("ť", "U") < 0);
	assertTrue("U < u", col.compare("U", "u") < 0);
	assertTrue("u < Ú", col.compare("u", "Ú") < 0);
	assertTrue("Ú < Ú", col.compare("Ú", "Ú") < 0);
	assertTrue("Ú < ú", col.compare("Ú", "ú") < 0);
	assertTrue("ú < ú", col.compare("ú", "ú") < 0);
	assertTrue("ú < Ů", col.compare("ú", "Ů") < 0);
	assertTrue("Ů < Ů", col.compare("Ů", "Ů") < 0);
	assertTrue("Ů < ů", col.compare("Ů", "ů") < 0);
	assertTrue("ů < ů", col.compare("ů", "ů") < 0);
	assertTrue("ů < V", col.compare("ů", "V") < 0);
	assertTrue("V < v", col.compare("V", "v") < 0);
	assertTrue("v < W", col.compare("v", "W") < 0);
	assertTrue("W < w", col.compare("W", "w") < 0);
	assertTrue("w < X", col.compare("w", "X") < 0);
	assertTrue("X < x", col.compare("X", "x") < 0);
	assertTrue("x < Y", col.compare("x", "Y") < 0);
	assertTrue("Y < y", col.compare("Y", "y") < 0);
	assertTrue("y < Ý", col.compare("y", "Ý") < 0);
	assertTrue("Ý < Ý", col.compare("Ý", "Ý") < 0);
	assertTrue("Ý < ý", col.compare("Ý", "ý") < 0);
	assertTrue("ý < ý", col.compare("ý", "ý") < 0);
	assertTrue("ý < Z", col.compare("ý", "Z") < 0);
	assertTrue("Z < z", col.compare("Z", "z") < 0);
	assertTrue("z < Ž", col.compare("z", "Ž") < 0);
	assertTrue("Ž < Ž", col.compare("Ž", "Ž") < 0);
	assertTrue("Ž < ž", col.compare("Ž", "ž") < 0);
	assertTrue("ž < ž", col.compare("ž", "ž") < 0);
}

function testJSCollatorTerSort_cs() {
	var col = new Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "tertiary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("a < Á", col.compare("a", "Á") < 0);
	assertTrue("Á < Á", col.compare("Á", "Á") < 0);
	assertTrue("Á < á", col.compare("Á", "á") < 0);
	assertTrue("á < á", col.compare("á", "á") < 0);
	assertTrue("á < B", col.compare("á", "B") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("b < C", col.compare("b", "C") < 0);
	assertTrue("C < c", col.compare("C", "c") < 0);
	assertTrue("c < Č", col.compare("c", "Č") < 0);
	assertTrue("Č < Č", col.compare("Č", "Č") < 0);
	assertTrue("Č < č", col.compare("Č", "č") < 0);
	assertTrue("č < č", col.compare("č", "č") < 0);
	assertTrue("č < D", col.compare("č", "D") < 0);
	assertTrue("D < d", col.compare("D", "d") < 0);
	assertTrue("d < Ď", col.compare("d", "Ď") < 0);
	assertTrue("Ď < Ď", col.compare("Ď", "Ď") < 0);
	assertTrue("Ď < ď", col.compare("Ď", "ď") < 0);
	assertTrue("ď < ď", col.compare("ď", "ď") < 0);
	assertTrue("ď < E", col.compare("ď", "E") < 0);
	assertTrue("E < e", col.compare("E", "e") < 0);
	assertTrue("e < É", col.compare("e", "É") < 0);
	assertTrue("É < É", col.compare("É", "É") < 0);
	assertTrue("É < é", col.compare("É", "é") < 0);
	assertTrue("é < é", col.compare("é", "é") < 0);
	assertTrue("é < Ě", col.compare("é", "Ě") < 0);
	assertTrue("Ě < Ě", col.compare("Ě", "Ě") < 0);
	assertTrue("Ě < ě", col.compare("Ě", "ě") < 0);
	assertTrue("ě < ě", col.compare("ě", "ě") < 0);
	assertTrue("ě < F", col.compare("ě", "F") < 0);
	assertTrue("F < f", col.compare("F", "f") < 0);
	assertTrue("f < G", col.compare("f", "G") < 0);
	assertTrue("G < g", col.compare("G", "g") < 0);
	assertTrue("g < H", col.compare("g", "H") < 0);
	assertTrue("H < h", col.compare("H", "h") < 0);
	assertTrue("h < CH", col.compare("h", "CH") < 0);
	assertTrue("CH < Ch", col.compare("CH", "Ch") < 0);
	assertTrue("Ch < cH", col.compare("Ch", "cH") < 0);
	assertTrue("cH < ch", col.compare("cH", "ch") < 0);
	assertTrue("ch < I", col.compare("ch", "I") < 0);
	assertTrue("I < i", col.compare("I", "i") < 0);
	assertTrue("i < Í", col.compare("i", "Í") < 0);
	assertTrue("Í < Í", col.compare("Í", "Í") < 0);
	assertTrue("Í < í", col.compare("Í", "í") < 0);
	assertTrue("í < í", col.compare("í", "í") < 0);
	assertTrue("í < J", col.compare("í", "J") < 0);
	assertTrue("J < j", col.compare("J", "j") < 0);
	assertTrue("j < K", col.compare("j", "K") < 0);
	assertTrue("K < k", col.compare("K", "k") < 0);
	assertTrue("k < L", col.compare("k", "L") < 0);
	assertTrue("L < l", col.compare("L", "l") < 0);
	assertTrue("l < M", col.compare("l", "M") < 0);
	assertTrue("M < m", col.compare("M", "m") < 0);
	assertTrue("m < N", col.compare("m", "N") < 0);
	assertTrue("N < n", col.compare("N", "n") < 0);
	assertTrue("n < Ň", col.compare("n", "Ň") < 0);
	assertTrue("Ň < Ň", col.compare("Ň", "Ň") < 0);
	assertTrue("Ň < ň", col.compare("Ň", "ň") < 0);
	assertTrue("ň < ň", col.compare("ň", "ň") < 0);
	assertTrue("ň < O", col.compare("ň", "O") < 0);
	assertTrue("O < o", col.compare("O", "o") < 0);
	assertTrue("o < Ó", col.compare("o", "Ó") < 0);
	assertTrue("Ó < Ó", col.compare("Ó", "Ó") < 0);
	assertTrue("Ó < ó", col.compare("Ó", "ó") < 0);
	assertTrue("ó < ó", col.compare("ó", "ó") < 0);
	assertTrue("ó < P", col.compare("ó", "P") < 0);
	assertTrue("P < p", col.compare("P", "p") < 0);
	assertTrue("p < Q", col.compare("p", "Q") < 0);
	assertTrue("Q < q", col.compare("Q", "q") < 0);
	assertTrue("q < R", col.compare("q", "R") < 0);
	assertTrue("R < r", col.compare("R", "r") < 0);
	assertTrue("r < Ř", col.compare("r", "Ř") < 0);
	assertTrue("Ř < Ř", col.compare("Ř", "Ř") < 0);
	assertTrue("Ř < ř", col.compare("Ř", "ř") < 0);
	assertTrue("ř < ř", col.compare("ř", "ř") < 0);
	assertTrue("ř < S", col.compare("ř", "S") < 0);
	assertTrue("S < s", col.compare("S", "s") < 0);
	assertTrue("s < Š", col.compare("s", "Š") < 0);
	assertTrue("Š < Š", col.compare("Š", "Š") < 0);
	assertTrue("Š < š", col.compare("Š", "š") < 0);
	assertTrue("š < š", col.compare("š", "š") < 0);
	assertTrue("š < T", col.compare("š", "T") < 0);
	assertTrue("T < t", col.compare("T", "t") < 0);
	assertTrue("t < Ť", col.compare("t", "Ť") < 0);
	assertTrue("Ť < Ť", col.compare("Ť", "Ť") < 0);
	assertTrue("Ť < ť", col.compare("Ť", "ť") < 0);
	assertTrue("ť < ť", col.compare("ť", "ť") < 0);
	assertTrue("ť < U", col.compare("ť", "U") < 0);
	assertTrue("U < u", col.compare("U", "u") < 0);
	assertTrue("u < Ú", col.compare("u", "Ú") < 0);
	assertTrue("Ú < Ú", col.compare("Ú", "Ú") < 0);
	assertTrue("Ú < ú", col.compare("Ú", "ú") < 0);
	assertTrue("ú < ú", col.compare("ú", "ú") < 0);
	assertTrue("ú < Ů", col.compare("ú", "Ů") < 0);
	assertTrue("Ů < Ů", col.compare("Ů", "Ů") < 0);
	assertTrue("Ů < ů", col.compare("Ů", "ů") < 0);
	assertTrue("ů < ů", col.compare("ů", "ů") < 0);
	assertTrue("ů < V", col.compare("ů", "V") < 0);
	assertTrue("V < v", col.compare("V", "v") < 0);
	assertTrue("v < W", col.compare("v", "W") < 0);
	assertTrue("W < w", col.compare("W", "w") < 0);
	assertTrue("w < X", col.compare("w", "X") < 0);
	assertTrue("X < x", col.compare("X", "x") < 0);
	assertTrue("x < Y", col.compare("x", "Y") < 0);
	assertTrue("Y < y", col.compare("Y", "y") < 0);
	assertTrue("y < Ý", col.compare("y", "Ý") < 0);
	assertTrue("Ý < Ý", col.compare("Ý", "Ý") < 0);
	assertTrue("Ý < ý", col.compare("Ý", "ý") < 0);
	assertTrue("ý < ý", col.compare("ý", "ý") < 0);
	assertTrue("ý < Z", col.compare("ý", "Z") < 0);
	assertTrue("Z < z", col.compare("Z", "z") < 0);
	assertTrue("z < Ž", col.compare("z", "Ž") < 0);
	assertTrue("Ž < Ž", col.compare("Ž", "Ž") < 0);
	assertTrue("Ž < ž", col.compare("Ž", "ž") < 0);
	assertTrue("ž < ž", col.compare("ž", "ž") < 0);
}

function testJSCollatorSecSort_cs() {
	var col = new Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "secondary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("a < Á", col.compare("a", "Á") < 0);
	assertTrue("Á < Á", col.compare("Á", "Á") < 0);
	assertTrue("Á < á", col.compare("Á", "á") < 0);
	assertTrue("á < á", col.compare("á", "á") < 0);
	assertTrue("á < B", col.compare("á", "B") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("b < C", col.compare("b", "C") < 0);
	assertTrue("C < c", col.compare("C", "c") < 0);
	assertTrue("c < Č", col.compare("c", "Č") < 0);
	assertTrue("Č < Č", col.compare("Č", "Č") < 0);
	assertTrue("Č < č", col.compare("Č", "č") < 0);
	assertTrue("č < č", col.compare("č", "č") < 0);
	assertTrue("č < D", col.compare("č", "D") < 0);
	assertTrue("D < d", col.compare("D", "d") < 0);
	assertTrue("d < Ď", col.compare("d", "Ď") < 0);
	assertTrue("Ď < Ď", col.compare("Ď", "Ď") < 0);
	assertTrue("Ď < ď", col.compare("Ď", "ď") < 0);
	assertTrue("ď < ď", col.compare("ď", "ď") < 0);
	assertTrue("ď < E", col.compare("ď", "E") < 0);
	assertTrue("E < e", col.compare("E", "e") < 0);
	assertTrue("e < É", col.compare("e", "É") < 0);
	assertTrue("É < É", col.compare("É", "É") < 0);
	assertTrue("É < é", col.compare("É", "é") < 0);
	assertTrue("é < é", col.compare("é", "é") < 0);
	assertTrue("é < Ě", col.compare("é", "Ě") < 0);
	assertTrue("Ě < Ě", col.compare("Ě", "Ě") < 0);
	assertTrue("Ě < ě", col.compare("Ě", "ě") < 0);
	assertTrue("ě < ě", col.compare("ě", "ě") < 0);
	assertTrue("ě < F", col.compare("ě", "F") < 0);
	assertTrue("F < f", col.compare("F", "f") < 0);
	assertTrue("f < G", col.compare("f", "G") < 0);
	assertTrue("G < g", col.compare("G", "g") < 0);
	assertTrue("g < H", col.compare("g", "H") < 0);
	assertTrue("H < h", col.compare("H", "h") < 0);
	assertTrue("h < CH", col.compare("h", "CH") < 0);
	assertTrue("CH < Ch", col.compare("CH", "Ch") < 0);
	assertTrue("Ch < cH", col.compare("Ch", "cH") < 0);
	assertTrue("cH < ch", col.compare("cH", "ch") < 0);
	assertTrue("ch < I", col.compare("ch", "I") < 0);
	assertTrue("I < i", col.compare("I", "i") < 0);
	assertTrue("i < Í", col.compare("i", "Í") < 0);
	assertTrue("Í < Í", col.compare("Í", "Í") < 0);
	assertTrue("Í < í", col.compare("Í", "í") < 0);
	assertTrue("í < í", col.compare("í", "í") < 0);
	assertTrue("í < J", col.compare("í", "J") < 0);
	assertTrue("J < j", col.compare("J", "j") < 0);
	assertTrue("j < K", col.compare("j", "K") < 0);
	assertTrue("K < k", col.compare("K", "k") < 0);
	assertTrue("k < L", col.compare("k", "L") < 0);
	assertTrue("L < l", col.compare("L", "l") < 0);
	assertTrue("l < M", col.compare("l", "M") < 0);
	assertTrue("M < m", col.compare("M", "m") < 0);
	assertTrue("m < N", col.compare("m", "N") < 0);
	assertTrue("N < n", col.compare("N", "n") < 0);
	assertTrue("n < Ň", col.compare("n", "Ň") < 0);
	assertTrue("Ň < Ň", col.compare("Ň", "Ň") < 0);
	assertTrue("Ň < ň", col.compare("Ň", "ň") < 0);
	assertTrue("ň < ň", col.compare("ň", "ň") < 0);
	assertTrue("ň < O", col.compare("ň", "O") < 0);
	assertTrue("O < o", col.compare("O", "o") < 0);
	assertTrue("o < Ó", col.compare("o", "Ó") < 0);
	assertTrue("Ó < Ó", col.compare("Ó", "Ó") < 0);
	assertTrue("Ó < ó", col.compare("Ó", "ó") < 0);
	assertTrue("ó < ó", col.compare("ó", "ó") < 0);
	assertTrue("ó < P", col.compare("ó", "P") < 0);
	assertTrue("P < p", col.compare("P", "p") < 0);
	assertTrue("p < Q", col.compare("p", "Q") < 0);
	assertTrue("Q < q", col.compare("Q", "q") < 0);
	assertTrue("q < R", col.compare("q", "R") < 0);
	assertTrue("R < r", col.compare("R", "r") < 0);
	assertTrue("r < Ř", col.compare("r", "Ř") < 0);
	assertTrue("Ř < Ř", col.compare("Ř", "Ř") < 0);
	assertTrue("Ř < ř", col.compare("Ř", "ř") < 0);
	assertTrue("ř < ř", col.compare("ř", "ř") < 0);
	assertTrue("ř < S", col.compare("ř", "S") < 0);
	assertTrue("S < s", col.compare("S", "s") < 0);
	assertTrue("s < Š", col.compare("s", "Š") < 0);
	assertTrue("Š < Š", col.compare("Š", "Š") < 0);
	assertTrue("Š < š", col.compare("Š", "š") < 0);
	assertTrue("š < š", col.compare("š", "š") < 0);
	assertTrue("š < T", col.compare("š", "T") < 0);
	assertTrue("T < t", col.compare("T", "t") < 0);
	assertTrue("t < Ť", col.compare("t", "Ť") < 0);
	assertTrue("Ť < Ť", col.compare("Ť", "Ť") < 0);
	assertTrue("Ť < ť", col.compare("Ť", "ť") < 0);
	assertTrue("ť < ť", col.compare("ť", "ť") < 0);
	assertTrue("ť < U", col.compare("ť", "U") < 0);
	assertTrue("U < u", col.compare("U", "u") < 0);
	assertTrue("u < Ú", col.compare("u", "Ú") < 0);
	assertTrue("Ú < Ú", col.compare("Ú", "Ú") < 0);
	assertTrue("Ú < ú", col.compare("Ú", "ú") < 0);
	assertTrue("ú < ú", col.compare("ú", "ú") < 0);
	assertTrue("ú < Ů", col.compare("ú", "Ů") < 0);
	assertTrue("Ů < Ů", col.compare("Ů", "Ů") < 0);
	assertTrue("Ů < ů", col.compare("Ů", "ů") < 0);
	assertTrue("ů < ů", col.compare("ů", "ů") < 0);
	assertTrue("ů < V", col.compare("ů", "V") < 0);
	assertTrue("V < v", col.compare("V", "v") < 0);
	assertTrue("v < W", col.compare("v", "W") < 0);
	assertTrue("W < w", col.compare("W", "w") < 0);
	assertTrue("w < X", col.compare("w", "X") < 0);
	assertTrue("X < x", col.compare("X", "x") < 0);
	assertTrue("x < Y", col.compare("x", "Y") < 0);
	assertTrue("Y < y", col.compare("Y", "y") < 0);
	assertTrue("y < Ý", col.compare("y", "Ý") < 0);
	assertTrue("Ý < Ý", col.compare("Ý", "Ý") < 0);
	assertTrue("Ý < ý", col.compare("Ý", "ý") < 0);
	assertTrue("ý < ý", col.compare("ý", "ý") < 0);
	assertTrue("ý < Z", col.compare("ý", "Z") < 0);
	assertTrue("Z < z", col.compare("Z", "z") < 0);
	assertTrue("z < Ž", col.compare("z", "Ž") < 0);
	assertTrue("Ž < Ž", col.compare("Ž", "Ž") < 0);
	assertTrue("Ž < ž", col.compare("Ž", "ž") < 0);
	assertTrue("ž < ž", col.compare("ž", "ž") < 0);
}

function testJSCollatorPriSort_cs() {
	var col = new Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// A a Á Á á á B b C c Č Č č č D d Ď ď E e É É é é Ě Ě ě ě F f G g H h CH Ch cH ch I i Í Í í í J j K k L l M m N n Ň Ň ň ň O o Ó Ó ó ó P p Q q R r Ř Ř ř ř S s Š Š š š T t Ť Ť ť ť U u Ú Ú ú ú Ů Ů ů ů V v W w X x Y y Ý Ý ý ý Z z Ž Ž ž ž

	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("a < Á", col.compare("a", "Á") < 0);
	assertTrue("Á < Á", col.compare("Á", "Á") < 0);
	assertTrue("Á < á", col.compare("Á", "á") < 0);
	assertTrue("á < á", col.compare("á", "á") < 0);
	assertTrue("á < B", col.compare("á", "B") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("b < C", col.compare("b", "C") < 0);
	assertTrue("C < c", col.compare("C", "c") < 0);
	assertTrue("c < Č", col.compare("c", "Č") < 0);
	assertTrue("Č < Č", col.compare("Č", "Č") < 0);
	assertTrue("Č < č", col.compare("Č", "č") < 0);
	assertTrue("č < č", col.compare("č", "č") < 0);
	assertTrue("č < D", col.compare("č", "D") < 0);
	assertTrue("D < d", col.compare("D", "d") < 0);
	assertTrue("d < Ď", col.compare("d", "Ď") < 0);
	assertTrue("Ď < Ď", col.compare("Ď", "Ď") < 0);
	assertTrue("Ď < ď", col.compare("Ď", "ď") < 0);
	assertTrue("ď < ď", col.compare("ď", "ď") < 0);
	assertTrue("ď < E", col.compare("ď", "E") < 0);
	assertTrue("E < e", col.compare("E", "e") < 0);
	assertTrue("e < É", col.compare("e", "É") < 0);
	assertTrue("É < É", col.compare("É", "É") < 0);
	assertTrue("É < é", col.compare("É", "é") < 0);
	assertTrue("é < é", col.compare("é", "é") < 0);
	assertTrue("é < Ě", col.compare("é", "Ě") < 0);
	assertTrue("Ě < Ě", col.compare("Ě", "Ě") < 0);
	assertTrue("Ě < ě", col.compare("Ě", "ě") < 0);
	assertTrue("ě < ě", col.compare("ě", "ě") < 0);
	assertTrue("ě < F", col.compare("ě", "F") < 0);
	assertTrue("F < f", col.compare("F", "f") < 0);
	assertTrue("f < G", col.compare("f", "G") < 0);
	assertTrue("G < g", col.compare("G", "g") < 0);
	assertTrue("g < H", col.compare("g", "H") < 0);
	assertTrue("H < h", col.compare("H", "h") < 0);
	assertTrue("h < CH", col.compare("h", "CH") < 0);
	assertTrue("CH < Ch", col.compare("CH", "Ch") < 0);
	assertTrue("Ch < cH", col.compare("Ch", "cH") < 0);
	assertTrue("cH < ch", col.compare("cH", "ch") < 0);
	assertTrue("ch < I", col.compare("ch", "I") < 0);
	assertTrue("I < i", col.compare("I", "i") < 0);
	assertTrue("i < Í", col.compare("i", "Í") < 0);
	assertTrue("Í < Í", col.compare("Í", "Í") < 0);
	assertTrue("Í < í", col.compare("Í", "í") < 0);
	assertTrue("í < í", col.compare("í", "í") < 0);
	assertTrue("í < J", col.compare("í", "J") < 0);
	assertTrue("J < j", col.compare("J", "j") < 0);
	assertTrue("j < K", col.compare("j", "K") < 0);
	assertTrue("K < k", col.compare("K", "k") < 0);
	assertTrue("k < L", col.compare("k", "L") < 0);
	assertTrue("L < l", col.compare("L", "l") < 0);
	assertTrue("l < M", col.compare("l", "M") < 0);
	assertTrue("M < m", col.compare("M", "m") < 0);
	assertTrue("m < N", col.compare("m", "N") < 0);
	assertTrue("N < n", col.compare("N", "n") < 0);
	assertTrue("n < Ň", col.compare("n", "Ň") < 0);
	assertTrue("Ň < Ň", col.compare("Ň", "Ň") < 0);
	assertTrue("Ň < ň", col.compare("Ň", "ň") < 0);
	assertTrue("ň < ň", col.compare("ň", "ň") < 0);
	assertTrue("ň < O", col.compare("ň", "O") < 0);
	assertTrue("O < o", col.compare("O", "o") < 0);
	assertTrue("o < Ó", col.compare("o", "Ó") < 0);
	assertTrue("Ó < Ó", col.compare("Ó", "Ó") < 0);
	assertTrue("Ó < ó", col.compare("Ó", "ó") < 0);
	assertTrue("ó < ó", col.compare("ó", "ó") < 0);
	assertTrue("ó < P", col.compare("ó", "P") < 0);
	assertTrue("P < p", col.compare("P", "p") < 0);
	assertTrue("p < Q", col.compare("p", "Q") < 0);
	assertTrue("Q < q", col.compare("Q", "q") < 0);
	assertTrue("q < R", col.compare("q", "R") < 0);
	assertTrue("R < r", col.compare("R", "r") < 0);
	assertTrue("r < Ř", col.compare("r", "Ř") < 0);
	assertTrue("Ř < Ř", col.compare("Ř", "Ř") < 0);
	assertTrue("Ř < ř", col.compare("Ř", "ř") < 0);
	assertTrue("ř < ř", col.compare("ř", "ř") < 0);
	assertTrue("ř < S", col.compare("ř", "S") < 0);
	assertTrue("S < s", col.compare("S", "s") < 0);
	assertTrue("s < Š", col.compare("s", "Š") < 0);
	assertTrue("Š < Š", col.compare("Š", "Š") < 0);
	assertTrue("Š < š", col.compare("Š", "š") < 0);
	assertTrue("š < š", col.compare("š", "š") < 0);
	assertTrue("š < T", col.compare("š", "T") < 0);
	assertTrue("T < t", col.compare("T", "t") < 0);
	assertTrue("t < Ť", col.compare("t", "Ť") < 0);
	assertTrue("Ť < Ť", col.compare("Ť", "Ť") < 0);
	assertTrue("Ť < ť", col.compare("Ť", "ť") < 0);
	assertTrue("ť < ť", col.compare("ť", "ť") < 0);
	assertTrue("ť < U", col.compare("ť", "U") < 0);
	assertTrue("U < u", col.compare("U", "u") < 0);
	assertTrue("u < Ú", col.compare("u", "Ú") < 0);
	assertTrue("Ú < Ú", col.compare("Ú", "Ú") < 0);
	assertTrue("Ú < ú", col.compare("Ú", "ú") < 0);
	assertTrue("ú < ú", col.compare("ú", "ú") < 0);
	assertTrue("ú < Ů", col.compare("ú", "Ů") < 0);
	assertTrue("Ů < Ů", col.compare("Ů", "Ů") < 0);
	assertTrue("Ů < ů", col.compare("Ů", "ů") < 0);
	assertTrue("ů < ů", col.compare("ů", "ů") < 0);
	assertTrue("ů < V", col.compare("ů", "V") < 0);
	assertTrue("V < v", col.compare("V", "v") < 0);
	assertTrue("v < W", col.compare("v", "W") < 0);
	assertTrue("W < w", col.compare("W", "w") < 0);
	assertTrue("w < X", col.compare("w", "X") < 0);
	assertTrue("X < x", col.compare("X", "x") < 0);
	assertTrue("x < Y", col.compare("x", "Y") < 0);
	assertTrue("Y < y", col.compare("Y", "y") < 0);
	assertTrue("y < Ý", col.compare("y", "Ý") < 0);
	assertTrue("Ý < Ý", col.compare("Ý", "Ý") < 0);
	assertTrue("Ý < ý", col.compare("Ý", "ý") < 0);
	assertTrue("ý < ý", col.compare("ý", "ý") < 0);
	assertTrue("ý < Z", col.compare("ý", "Z") < 0);
	assertTrue("Z < z", col.compare("Z", "z") < 0);
	assertTrue("z < Ž", col.compare("z", "Ž") < 0);
	assertTrue("Ž < Ž", col.compare("Ž", "Ž") < 0);
	assertTrue("Ž < ž", col.compare("Ž", "ž") < 0);
	assertTrue("ž < ž", col.compare("ž", "ž") < 0);
}

function testCollatorCase_cs() {
	var col = new Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "case",
		usage: "sort"
	});
    assertNotUndefined(col);
    
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

    assertArrayEquals(expected, input);
}

function testCollatorPrimary_cs() {
	var col = new Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});
    assertNotUndefined(col);

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

    assertArrayEquals(expected, input);
}
