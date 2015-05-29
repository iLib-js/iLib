/*
 * testcollation_lv.js - test the Collator object in Latvian
 * 
 * Copyright © 2014-2015, JEDLSoft
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

var Collator = require("../lib/Collator.js");

function testJSCollatorQuatUpper_lv() {
	var col = new Collator({
		locale: "lv-LV",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// AĀBCČDEĒFGĢHIYĪJKĶLĻMNŅO..RŖSŠTUŪVZŽ
	// aābcčdeēfgģhiyījkķlļmnņo..rŗsštuūvzž

	assertTrue("A < Ā",  col.compare("A", "Ā") < 0);
	assertTrue("Ā < B",  col.compare("Ā", "B") < 0);
	assertTrue("B < C",  col.compare("B", "C") < 0);
	assertTrue("C < Č",  col.compare("C", "Č") < 0);
	assertTrue("Č < D",  col.compare("Č", "D") < 0);
	assertTrue("D < E",  col.compare("D", "E") < 0);
	assertTrue("E < Ē",  col.compare("E", "Ē") < 0);
	assertTrue("Ē < F",  col.compare("Ē", "F") < 0);
	assertTrue("F < G",  col.compare("F", "G") < 0);
	assertTrue("G < Ģ",  col.compare("G", "Ģ") < 0);
	assertTrue("Ģ < H",  col.compare("Ģ", "H") < 0);
	assertTrue("H < I",  col.compare("H", "I") < 0);
	assertTrue("I < Y",  col.compare("I", "Y") < 0);
	assertTrue("Y < Ī",  col.compare("Y", "Ī") < 0);
	assertTrue("Ī < J",  col.compare("Ī", "J") < 0);
	assertTrue("J < K",  col.compare("J", "K") < 0);
	assertTrue("K < Ķ",  col.compare("K", "Ķ") < 0);
	assertTrue("Ķ < L",  col.compare("Ķ", "L") < 0);
	assertTrue("L < Ļ",  col.compare("L", "Ļ") < 0);
	assertTrue("Ļ < M",  col.compare("Ļ", "M") < 0);
	assertTrue("M < N",  col.compare("M", "N") < 0);
	assertTrue("Ņ < O",  col.compare("Ņ", "O") < 0);
	assertTrue("O < R",  col.compare("O", "R") < 0);
	assertTrue("R < Ŗ",  col.compare("R", "Ŗ") < 0);
	assertTrue("Ŗ < S",  col.compare("Ŗ", "S") < 0);
	assertTrue("S < Š",  col.compare("S", "Š") < 0);
	assertTrue("Š < T",  col.compare("Š", "T") < 0);
	assertTrue("T < U",  col.compare("T", "U") < 0);
	assertTrue("U < Ū",  col.compare("U", "Ū") < 0);
	assertTrue("Ū < V",  col.compare("Ū", "V") < 0);
	assertTrue("V < Z",  col.compare("V", "Z") < 0);
	assertTrue("Z < Ž",  col.compare("Z", "Ž") < 0);
}

function testJSCollatorQuatLower_lv() {
	var col = new Collator({
		locale: "lv-LV",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// AĀBCČDEĒFGĢHIYĪJKĶLĻMNŅO..RŖSŠTUŪVZŽ
	// aābcčdeēfgģhiyījkķlļmnņo..rŗsštuūvzž

	assertTrue("a < ā",  col.compare("a", "ā") < 0);
	assertTrue("ā < b",  col.compare("ā", "b") < 0);
	assertTrue("b < c",  col.compare("b", "c") < 0);
	assertTrue("č < d",  col.compare("č", "d") < 0);
	assertTrue("d < e",  col.compare("d", "e") < 0);
	assertTrue("e < ē",  col.compare("e", "ē") < 0);
	assertTrue("ē < f",  col.compare("ē", "f") < 0);
	assertTrue("f < g",  col.compare("f", "g") < 0);
	assertTrue("g < ģ",  col.compare("g", "ģ") < 0);
	assertTrue("ģ < h",  col.compare("ģ", "h") < 0);
	assertTrue("h < i",  col.compare("h", "i") < 0);
	assertTrue("i < y",  col.compare("i", "y") < 0);
	assertTrue("y < ī",  col.compare("y", "ī") < 0);
	assertTrue("ī < j",  col.compare("ī", "j") < 0);
	assertTrue("j < k",  col.compare("j", "k") < 0);
	assertTrue("k < ķ",  col.compare("k", "ķ") < 0);
	assertTrue("ķ < l",  col.compare("ķ", "l") < 0);
	assertTrue("l < ļ",  col.compare("l", "ļ") < 0);
	assertTrue("ļ < m",  col.compare("ļ", "m") < 0);
	assertTrue("m < n",  col.compare("m", "n") < 0);
	assertTrue("n < ņ",  col.compare("n", "ņ") < 0);
	assertTrue("ņ < o",  col.compare("ņ", "o") < 0);
	assertTrue("o < r",  col.compare("o", "r") < 0);
	assertTrue("r < ŗ",  col.compare("r", "ŗ") < 0);
	assertTrue("ŗ < s",  col.compare("ŗ", "s") < 0);
	assertTrue("s < š",  col.compare("s", "š") < 0);
	assertTrue("š < t",  col.compare("š", "t") < 0);
	assertTrue("t < u",  col.compare("t", "u") < 0);
	assertTrue("u < ū",  col.compare("u", "ū") < 0);
	assertTrue("ū < v",  col.compare("ū", "v") < 0);
	assertTrue("v < z",  col.compare("v", "z") < 0);
	assertTrue("z < ž",  col.compare("z", "ž") < 0);	
}

// differences in umlauted characters should be primary differences

function testJSCollatorPrimaryUpper_lv() {
	var col = new Collator({
		locale: "lv-LV",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertTrue("A < Ā",  col.compare("A", "Ā") < 0);
	assertTrue("Ā < B",  col.compare("Ā", "B") < 0);
	assertTrue("B < C",  col.compare("B", "C") < 0);
	assertTrue("C < Č",  col.compare("C", "Č") < 0);
	assertTrue("Č < D",  col.compare("Č", "D") < 0);
	assertTrue("D < E",  col.compare("D", "E") < 0);
	assertTrue("E < Ē",  col.compare("E", "Ē") < 0);
	assertTrue("Ē < F",  col.compare("Ē", "F") < 0);
	assertTrue("F < G",  col.compare("F", "G") < 0);
	assertTrue("G < Ģ",  col.compare("G", "Ģ") < 0);
	assertTrue("Ģ < H",  col.compare("Ģ", "H") < 0);
	assertTrue("H < I",  col.compare("H", "I") < 0);
	assertTrue("I = Y",  col.compare("I", "Y") === 0);
	assertTrue("Y < Ī",  col.compare("Y", "Ī") < 0);
	assertTrue("Ī < J",  col.compare("Ī", "J") < 0);
	assertTrue("J < K",  col.compare("J", "K") < 0);
	assertTrue("K < Ķ",  col.compare("K", "Ķ") < 0);
	assertTrue("Ķ < L",  col.compare("Ķ", "L") < 0);
	assertTrue("L < Ļ",  col.compare("L", "Ļ") < 0);
	assertTrue("Ļ < M",  col.compare("Ļ", "M") < 0);
	assertTrue("M < N",  col.compare("M", "N") < 0);
	assertTrue("Ņ < O",  col.compare("Ņ", "O") < 0);
	assertTrue("O < R",  col.compare("O", "R") < 0);
	assertTrue("R < Ŗ",  col.compare("R", "Ŗ") < 0);
	assertTrue("Ŗ < S",  col.compare("Ŗ", "S") < 0);
	assertTrue("S < Š",  col.compare("S", "Š") < 0);
	assertTrue("Š < T",  col.compare("Š", "T") < 0);
	assertTrue("T < U",  col.compare("T", "U") < 0);
	assertTrue("U < Ū",  col.compare("U", "Ū") < 0);
	assertTrue("Ū < V",  col.compare("Ū", "V") < 0);
	assertTrue("V < Z",  col.compare("V", "Z") < 0);
	assertTrue("Z < Ž",  col.compare("Z", "Ž") < 0);
}

function testJSCollatorPrimaryOE_lv() {
	var col = new Collator({
		locale: "lv-LV",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertTrue("a < ā",  col.compare("a", "ā") < 0);
	assertTrue("ā < b",  col.compare("ā", "b") < 0);
	assertTrue("b < c",  col.compare("b", "c") < 0);
	assertTrue("č < d",  col.compare("č", "d") < 0);
	assertTrue("d < e",  col.compare("d", "e") < 0);
	assertTrue("e < ē",  col.compare("e", "ē") < 0);
	assertTrue("ē < f",  col.compare("ē", "f") < 0);
	assertTrue("f < g",  col.compare("f", "g") < 0);
	assertTrue("g < ģ",  col.compare("g", "ģ") < 0);
	assertTrue("ģ < h",  col.compare("ģ", "h") < 0);
	assertTrue("h < i",  col.compare("h", "i") < 0);
	assertTrue("i = y",  col.compare("i", "y") === 0);
	assertTrue("y < ī",  col.compare("y", "ī") < 0);
	assertTrue("ī < j",  col.compare("ī", "j") < 0);
	assertTrue("j < k",  col.compare("j", "k") < 0);
	assertTrue("k < ķ",  col.compare("k", "ķ") < 0);
	assertTrue("ķ < l",  col.compare("ķ", "l") < 0);
	assertTrue("l < ļ",  col.compare("l", "ļ") < 0);
	assertTrue("ļ < m",  col.compare("ļ", "m") < 0);
	assertTrue("m < n",  col.compare("m", "n") < 0);
	assertTrue("n < ņ",  col.compare("n", "ņ") < 0);
	assertTrue("ņ < o",  col.compare("ņ", "o") < 0);
	assertTrue("o < r",  col.compare("o", "r") < 0);
	assertTrue("r < ŗ",  col.compare("r", "ŗ") < 0);
	assertTrue("ŗ < s",  col.compare("ŗ", "s") < 0);
	assertTrue("s < š",  col.compare("s", "š") < 0);
	assertTrue("š < t",  col.compare("š", "t") < 0);
	assertTrue("t < u",  col.compare("t", "u") < 0);
	assertTrue("u < ū",  col.compare("u", "ū") < 0);
	assertTrue("ū < v",  col.compare("ū", "v") < 0);
	assertTrue("v < z",  col.compare("v", "z") < 0);
	assertTrue("z < ž",  col.compare("z", "ž") < 0);	
}

function testCollatorNativeCase_lv() {
	var col = new Collator({
		locale: "lv-LV",
		useNative: false,
		sensitivity: "case",
		usage: "sort"
	});
    assertNotUndefined(col);

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

    assertArrayEquals(expected, input);
}

function testCollatorNativeVariant_lv() {
	var col = new Collator({
		locale: "lv-LV",
		useNative: false,
		sensitivity: "variant",
		upperFirst: true,
		usage: "sort"
	});
    assertNotUndefined(col);

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

    assertArrayEquals(expected, input);
}