/*
 * testcollation_fo.js - test the Collator object in Faroese
 * 
 * Copyright © 2014, JEDLSoft
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

function testCollatorConstructorNative_fo() {
	var col = new ilib.Collator({useNative: false, locale: "fo-FO"});

	assertNotUndefined(col);
}

function testCollatorDefaultNativeLowerPrimary_fo() {
	var col = new ilib.Collator({
		locale: "fo-FO",
		usage: "search",
		useNative: false, 
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// The Faroese alphabet also has some of the Danish, Norwegian, and Swedish 
	// extra letters, namely Æ and Ø. Furthermore, the Faroese alphabet uses the Icelandic 
	// eth, which follows the D. Five of the six vowels A, I, O, U and Y can get accents 
	// and are after that considered separate letters. The consonants C, Q, X, W and Z are
	// not found, but are in the search order anyways to take care of loanwords from other
	// languages. 
	// a á b [c] d ð e f g h i í j k l m n o ó p [q] r s t u ú v [w] [x] y ý [z] æ ø
	assertTrue("a < á", col.compare("a", "á") < 0);
	assertTrue("á < b", col.compare("á", "b") < 0);
	assertTrue("b < c", col.compare("b", "c") < 0);
	assertTrue("c < d", col.compare("c", "d") < 0);
	assertTrue("d < ð", col.compare("d", "ð") < 0);
	assertTrue("ð < e", col.compare("ð", "e") < 0);
	assertTrue("e < f", col.compare("e", "f") < 0);
	assertTrue("h < i", col.compare("h", "i") < 0);
	assertTrue("i < í", col.compare("i", "í") < 0);
	assertTrue("í < j", col.compare("í", "j") < 0);
	assertTrue("n < o", col.compare("n", "o") < 0);
	assertTrue("o < ó", col.compare("o", "ó") < 0);
	assertTrue("ó < p", col.compare("ó", "p") < 0);
	assertTrue("t < u", col.compare("t", "u") < 0);
	assertTrue("u < ú", col.compare("u", "ú") < 0);
	assertTrue("ú < v", col.compare("ú", "v") < 0);
	assertTrue("v < y", col.compare("v", "y") < 0);
	assertTrue("y < ý", col.compare("y", "ý") < 0);
	assertTrue("ý < æ", col.compare("ý", "æ") < 0);
	assertTrue("æ < ø", col.compare("æ", "ø") < 0);
}

function testCollatorDefaultNativeUpperPrimary_fo() {
	var col = new ilib.Collator({
		locale: "fo-FO",
		usage: "search",
		useNative: false, 
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// The Faroese alphabet also has some of the Danish, Norwegian, and Swedish 
	// extra letters, namely Æ and Ø. Furthermore, the Faroese alphabet uses the Icelandic 
	// eth, which follows the D. Five of the six vowels A, I, O, U and Y can get accents 
	// and are after that considered separate letters. The consonants C, Q, X, W and Z are
	// not found, but are in the search order anyways to take care of loanwords from other
	// languages. 
	// A Á B [C] D Ð E F G H I Í J K L M N O Ó P [Q] R S T U Ú V [W] [X] Y Ý [Z] Æ Ø
	assertTrue("A < Á", col.compare("A", "Á") < 0);
	assertTrue("Á < B", col.compare("Á", "B") < 0);
	assertTrue("B < C", col.compare("B", "C") < 0);
	assertTrue("C < D", col.compare("C", "D") < 0);
	assertTrue("D < Ð", col.compare("D", "Ð") < 0);
	assertTrue("Ð < E", col.compare("Ð", "E") < 0);
	assertTrue("E < F", col.compare("E", "F") < 0);
	assertTrue("H < I", col.compare("H", "I") < 0);
	assertTrue("I < Í", col.compare("I", "Í") < 0);
	assertTrue("Í < J", col.compare("Í", "J") < 0);
	assertTrue("N < O", col.compare("N", "O") < 0);
	assertTrue("O < Ó", col.compare("O", "Ó") < 0);
	assertTrue("Ó < P", col.compare("Ó", "P") < 0);
	assertTrue("T < U", col.compare("T", "U") < 0);
	assertTrue("U < Ú", col.compare("U", "Ú") < 0);
	assertTrue("Ú < V", col.compare("Ú", "V") < 0);
	assertTrue("V < Y", col.compare("V", "Y") < 0);
	assertTrue("Y < Ý", col.compare("Y", "Ý") < 0);
	assertTrue("Ý < Æ", col.compare("Ý", "Æ") < 0);
	assertTrue("Æ < Ø", col.compare("Æ", "Ø") < 0);
}

function testCollatorDefaultNativeLowerSecondary_fo() {
	var col = new ilib.Collator({
		locale: "fo-FO",
		usage: "search",
		useNative: false, 
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// the accents are primary differences, so this is the same order as
	// the primary alphabet
	// a á b [c] d ð e f g h i í j k l m n o ó p [q] r s t u ú v [w] [x] y ý [z] æ ø
	assertTrue("a < á", col.compare("a", "á") < 0);
	assertTrue("á < b", col.compare("á", "b") < 0);
	assertTrue("b < c", col.compare("b", "c") < 0);
	assertTrue("c < d", col.compare("c", "d") < 0);
	assertTrue("d < ð", col.compare("d", "ð") < 0);
	assertTrue("ð < e", col.compare("ð", "e") < 0);
	assertTrue("e < f", col.compare("e", "f") < 0);
	assertTrue("h < i", col.compare("h", "i") < 0);
	assertTrue("i < í", col.compare("i", "í") < 0);
	assertTrue("í < j", col.compare("í", "j") < 0);
	assertTrue("n < o", col.compare("n", "o") < 0);
	assertTrue("o < ó", col.compare("o", "ó") < 0);
	assertTrue("ó < p", col.compare("ó", "p") < 0);
	assertTrue("t < u", col.compare("t", "u") < 0);
	assertTrue("u < ú", col.compare("u", "ú") < 0);
	assertTrue("ú < v", col.compare("ú", "v") < 0);
	assertTrue("v < y", col.compare("v", "y") < 0);
	assertTrue("y < ý", col.compare("y", "ý") < 0);
	assertTrue("ý < æ", col.compare("ý", "æ") < 0);
	assertTrue("æ < ø", col.compare("æ", "ø") < 0);
}

function testCollatorDefaultNativeCaseSecondary_fo() {
	var col = new ilib.Collator({
		locale: "fo-FO",
		usage: "search",
		useNative: false, 
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// the accents are primary differences, so this is the same order as
	// the primary alphabet
	// a á b [c] d ð e f g h i í j k l m n o ó p [q] r s t u ú v [w] [x] y ý [z] æ ø
	
	// case is a tertiary difference, so no difference here
	assertTrue("a = A", col.compare("a", "A") === 0);
	assertTrue("á = Á", col.compare("á", "Á") === 0);
	assertTrue("ð = Ð", col.compare("ð", "Ð") === 0);
	assertTrue("í = Í", col.compare("í", "Í") === 0);
	assertTrue("ó = Ó", col.compare("ó", "Ó") === 0);
	assertTrue("ú = Ú", col.compare("ú", "Ú") === 0);
	assertTrue("ý = Ý", col.compare("ý", "Ý") === 0);
	assertTrue("æ = Æ", col.compare("æ", "Æ") === 0);
	assertTrue("ø = Ø", col.compare("ø", "Ø") === 0);
}

function testCollatorDefaultNativeVariantsSecondary_fo() {
	var col = new ilib.Collator({
		locale: "fo-FO",
		usage: "search",
		useNative: false, 
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// the accents are primary differences, so this is the same order as
	// the primary alphabet
	// a á b [c] d ð e f g h i í j k l m n o ó p [q] r s t u ú v [w] [x] y ý [z] æ ø
	
	// variants are a quaternary difference, so no difference here
	assertTrue("á = á", col.compare("á", "á") === 0);
	assertTrue("í = í", col.compare("í", "í") === 0);
	assertTrue("ó = ó", col.compare("ó", "ó") === 0);
	assertTrue("ú = ú", col.compare("ú", "ú") === 0);
	assertTrue("ý = ý", col.compare("ý", "ý") === 0);
	assertTrue("Á = Á", col.compare("Á", "Á") === 0);
	assertTrue("Í = Í", col.compare("Í", "Í") === 0);
	assertTrue("Ó = Ó", col.compare("Ó", "Ó") === 0);
	assertTrue("Ú = Ú", col.compare("Ú", "Ú") === 0);
	assertTrue("Ý = Ý", col.compare("Ý", "Ý") === 0);
}

function testCollatorDefaultNativeUpperSecondary_fo() {
	var col = new ilib.Collator({
		locale: "fo-FO",
		usage: "search",
		useNative: false, 
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// the accents are primary differences, so this is the same order as
	// the primary alphabet
	// A Á B [C] D Ð E F G H I Í J K L M N O Ó P [Q] R S T U Ú V [W] [X] Y Ý [Z] Æ Ø
	assertTrue("A < Á", col.compare("A", "Á") < 0);
	assertTrue("Á < B", col.compare("Á", "B") < 0);
	assertTrue("B < C", col.compare("B", "C") < 0);
	assertTrue("C < D", col.compare("C", "D") < 0);
	assertTrue("D < Ð", col.compare("D", "Ð") < 0);
	assertTrue("Ð < E", col.compare("Ð", "E") < 0);
	assertTrue("E < F", col.compare("E", "F") < 0);
	assertTrue("H < I", col.compare("H", "I") < 0);
	assertTrue("I < Í", col.compare("I", "Í") < 0);
	assertTrue("Í < J", col.compare("Í", "J") < 0);
	assertTrue("N < O", col.compare("N", "O") < 0);
	assertTrue("O < Ó", col.compare("O", "Ó") < 0);
	assertTrue("Ó < P", col.compare("Ó", "P") < 0);
	assertTrue("T < U", col.compare("T", "U") < 0);
	assertTrue("U < Ú", col.compare("U", "Ú") < 0);
	assertTrue("Ú < V", col.compare("Ú", "V") < 0);
	assertTrue("V < Y", col.compare("V", "Y") < 0);
	assertTrue("Y < Ý", col.compare("Y", "Ý") < 0);
	assertTrue("Ý < Æ", col.compare("Ý", "Æ") < 0);
	assertTrue("Æ < Ø", col.compare("Æ", "Ø") < 0);
}

function testCollatorDefaultNativeLowerTertiary_fo() {
	var col = new ilib.Collator({
		locale: "fo-FO",
		usage: "search",
		useNative: false, 
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	// a á b [c] d ð e f g h i í j k l m n o ó p [q] r s t u ú v [w] [x] y ý [z] æ ø
	// case is a tertiary difference, so now sort based on case
	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("a < á", col.compare("a", "á") < 0);
	assertTrue("a < Á", col.compare("a", "Á") < 0);
	assertTrue("á < b", col.compare("á", "b") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("d < ð", col.compare("d", "ð") < 0);
	assertTrue("Ð < ð", col.compare("Ð", "ð") < 0);
	assertTrue("ð < e", col.compare("ð", "e") < 0);
	assertTrue("i < í", col.compare("i", "í") < 0);
	assertTrue("Í < í", col.compare("Í", "í") < 0);
	assertTrue("í < j", col.compare("í", "j") < 0);
	assertTrue("o < ó", col.compare("o", "ó") < 0);
	assertTrue("Ó < ó", col.compare("Ó", "ó") < 0);
	assertTrue("ó < p", col.compare("ó", "p") < 0);
	assertTrue("u < ú", col.compare("u", "ú") < 0);
	assertTrue("Ú < ú", col.compare("Ú", "ú") < 0);
	assertTrue("ú < v", col.compare("ú", "v") < 0);
	assertTrue("v < y", col.compare("v", "y") < 0);
	assertTrue("y < ý", col.compare("y", "ý") < 0);
	assertTrue("Ý < ý", col.compare("Ý", "ý") < 0);
	assertTrue("ý < æ", col.compare("ý", "æ") < 0);
	assertTrue("Æ < æ", col.compare("Æ", "æ") < 0);
	assertTrue("æ < ø", col.compare("æ", "ø") < 0);
	assertTrue("Ø < ø", col.compare("Ø", "ø") < 0);
}

function testCollatorDefaultNativeVariantsTertiary_fo() {
	var col = new ilib.Collator({
		locale: "fo-FO",
		usage: "search",
		useNative: false, 
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	// the accents are primary differences, so this is the same order as
	// the primary alphabet
	// a á b [c] d ð e f g h i í j k l m n o ó p [q] r s t u ú v [w] [x] y ý [z] æ ø
	
	// variants are a quaternary difference, so no difference here
	assertTrue("á = á", col.compare("á", "á") === 0);
	assertTrue("í = í", col.compare("í", "í") === 0);
	assertTrue("ó = ó", col.compare("ó", "ó") === 0);
	assertTrue("ú = ú", col.compare("ú", "ú") === 0);
	assertTrue("ý = ý", col.compare("ý", "ý") === 0);
	assertTrue("Á = Á", col.compare("Á", "Á") === 0);
	assertTrue("Í = Í", col.compare("Í", "Í") === 0);
	assertTrue("Ó = Ó", col.compare("Ó", "Ó") === 0);
	assertTrue("Ú = Ú", col.compare("Ú", "Ú") === 0);
	assertTrue("Ý = Ý", col.compare("Ý", "Ý") === 0);
}

function testCollatorDefaultNativeUpperTertiary_fo() {
	var col = new ilib.Collator({
		locale: "fo-FO",
		usage: "search",
		useNative: false, 
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	// the accents are primary differences, so this is the same order as
	// the primary alphabet
	// A Á B [C] D Ð E F G H I Í J K L M N O Ó P [Q] R S T U Ú V [W] [X] Y Ý [Z] Æ Ø
	assertTrue("A < Á", col.compare("A", "Á") < 0);
	assertTrue("Á < B", col.compare("Á", "B") < 0);
	assertTrue("B < C", col.compare("B", "C") < 0);
	assertTrue("C < D", col.compare("C", "D") < 0);
	assertTrue("D < Ð", col.compare("D", "Ð") < 0);
	assertTrue("Ð < E", col.compare("Ð", "E") < 0);
	assertTrue("E < F", col.compare("E", "F") < 0);
	assertTrue("H < I", col.compare("H", "I") < 0);
	assertTrue("I < Í", col.compare("I", "Í") < 0);
	assertTrue("Í < J", col.compare("Í", "J") < 0);
	assertTrue("N < O", col.compare("N", "O") < 0);
	assertTrue("O < Ó", col.compare("O", "Ó") < 0);
	assertTrue("Ó < P", col.compare("Ó", "P") < 0);
	assertTrue("T < U", col.compare("T", "U") < 0);
	assertTrue("U < Ú", col.compare("U", "Ú") < 0);
	assertTrue("Ú < V", col.compare("Ú", "V") < 0);
	assertTrue("V < Y", col.compare("V", "Y") < 0);
	assertTrue("Y < Ý", col.compare("Y", "Ý") < 0);
	assertTrue("Ý < Æ", col.compare("Ý", "Æ") < 0);
	assertTrue("Æ < Ø", col.compare("Æ", "Ø") < 0);
}

function testCollatorDefaultNativeLowerQuaternary_fo() {
	var col = new ilib.Collator({
		locale: "fo-FO",
		usage: "search",
		useNative: false, 
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// a á b [c] d ð e f g h i í j k l m n o ó p [q] r s t u ú v [w] [x] y ý [z] æ ø
	// case is a tertiary difference, so now sort based on case
	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("a < á", col.compare("a", "á") < 0);
	assertTrue("a < Á", col.compare("a", "Á") < 0);
	assertTrue("á < b", col.compare("á", "b") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("d < ð", col.compare("d", "ð") < 0);
	assertTrue("Ð < ð", col.compare("Ð", "ð") < 0);
	assertTrue("ð < e", col.compare("ð", "e") < 0);
	assertTrue("i < í", col.compare("i", "í") < 0);
	assertTrue("Í < í", col.compare("Í", "í") < 0);
	assertTrue("í < j", col.compare("í", "j") < 0);
	assertTrue("o < ó", col.compare("o", "ó") < 0);
	assertTrue("Ó < ó", col.compare("Ó", "ó") < 0);
	assertTrue("ó < p", col.compare("ó", "p") < 0);
	assertTrue("u < ú", col.compare("u", "ú") < 0);
	assertTrue("Ú < ú", col.compare("Ú", "ú") < 0);
	assertTrue("ú < v", col.compare("ú", "v") < 0);
	assertTrue("v < y", col.compare("v", "y") < 0);
	assertTrue("y < ý", col.compare("y", "ý") < 0);
	assertTrue("Ý < ý", col.compare("Ý", "ý") < 0);
	assertTrue("ý < æ", col.compare("ý", "æ") < 0);
	assertTrue("Æ < æ", col.compare("Æ", "æ") < 0);
	assertTrue("æ < ø", col.compare("æ", "ø") < 0);
	assertTrue("Ø < ø", col.compare("Ø", "ø") < 0);
}

function testCollatorDefaultNativeVariantsQuaternary_fo() {
	var col = new ilib.Collator({
		locale: "fo-FO",
		usage: "search",
		useNative: false, 
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// the accents are primary differences, so this is the same order as
	// the primary alphabet
	// a á b [c] d ð e f g h i í j k l m n o ó p [q] r s t u ú v [w] [x] y ý [z] æ ø
	
	// variants are a quaternary difference, so now sort these variants properly
	assertTrue("á < á", col.compare("á", "á") < 0);
	assertTrue("í < í", col.compare("í", "í") < 0);
	assertTrue("ó < ó", col.compare("ó", "ó") < 0);
	assertTrue("ú < ú", col.compare("ú", "ú") < 0);
	assertTrue("ý < ý", col.compare("ý", "ý") < 0);
	assertTrue("Á < Á", col.compare("Á", "Á") < 0);
	assertTrue("Í < Í", col.compare("Í", "Í") < 0);
	assertTrue("Ó < Ó", col.compare("Ó", "Ó") < 0);
	assertTrue("Ú < Ú", col.compare("Ú", "Ú") < 0);
	assertTrue("Ý < Ý", col.compare("Ý", "Ý") < 0);
}

function testCollatorDefaultNativeUpperQuaternary_fo() {
	var col = new ilib.Collator({
		locale: "fo-FO",
		usage: "search",
		useNative: false, 
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// the accents are primary differences, so this is the same order as
	// the primary alphabet
	// A Á B [C] D Ð E F G H I Í J K L M N O Ó P [Q] R S T U Ú V [W] [X] Y Ý [Z] Æ Ø
	assertTrue("A < Á", col.compare("A", "Á") < 0);
	assertTrue("Á < B", col.compare("Á", "B") < 0);
	assertTrue("B < C", col.compare("B", "C") < 0);
	assertTrue("C < D", col.compare("C", "D") < 0);
	assertTrue("D < Ð", col.compare("D", "Ð") < 0);
	assertTrue("Ð < E", col.compare("Ð", "E") < 0);
	assertTrue("E < F", col.compare("E", "F") < 0);
	assertTrue("H < I", col.compare("H", "I") < 0);
	assertTrue("I < Í", col.compare("I", "Í") < 0);
	assertTrue("Í < J", col.compare("Í", "J") < 0);
	assertTrue("N < O", col.compare("N", "O") < 0);
	assertTrue("O < Ó", col.compare("O", "Ó") < 0);
	assertTrue("Ó < P", col.compare("Ó", "P") < 0);
	assertTrue("T < U", col.compare("T", "U") < 0);
	assertTrue("U < Ú", col.compare("U", "Ú") < 0);
	assertTrue("Ú < V", col.compare("Ú", "V") < 0);
	assertTrue("V < Y", col.compare("V", "Y") < 0);
	assertTrue("Y < Ý", col.compare("Y", "Ý") < 0);
	assertTrue("Ý < Æ", col.compare("Ý", "Æ") < 0);
	assertTrue("Æ < Ø", col.compare("Æ", "Ø") < 0);
}

function testCollatorGetSortKeySimpleUpper_fo() {
	var col = new ilib.Collator({
		locale: "fo-FO",
		useNative: false
	});

	assertNotUndefined(col);

	assertEquals("0000200400600800a00c0", col.sortKey("AÁBCDÐE"));
}
function testCollatorGetSortKeySimpleLower_fo() {
	var col = new ilib.Collator({
		locale: "fo-FO",
		useNative: false
	});

	assertNotUndefined(col);

	assertEquals("0020220420620820a20c2", col.sortKey("aábcdðe"));
}


function testCollatorWithSort_fo() {
	var col = new ilib.Collator({
		locale: "fo-FO",
		useNative: false,
		usage: "sort"
	});
	assertNotUndefined(col);

	var input = [ "æ", "p", "b", "w", "d", "ý", "h", "ú", "x", "ø", "í", "j",
			"v", "z", "ð", "m", "á", "o", "ó", "q", "g", "a", "r", "f", "s",
			"e", "c", "t", "k", "u", "y", "i", "n", "l" ];

	input.sort(col.getComparator());

	var expected = ["a", "á", "b", "c", "d", "ð", "e", "f", "g", 
	                "h", "i", "í", "j", "k", "l", "m", "n", "o", 
	                "ó", "p", "q", "r", "s", "t", "u", "ú", "v", 
	                "w", "x", "y", "ý", "z", "æ", "ø"];

	assertArrayEquals(expected, input);
}


function testCollatorGetAvailableScripts_fo() {
	assertArrayEquals(["Latn"], ilib.Collator.getAvailableScripts());
}

function testCollatorGetAvailableStyles_fo() {
	assertArrayEquals(["standard"], ilib.Collator.getAvailableStyles());
}


function testJSCollatorNumeric_fo() {
	var col = new ilib.Collator({
		locale: "fo-FO",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	// period is the thousands separtor and comma is the decimal separator
	assertEquals(0, col.compare("0.012.123,4", "12.123,4"));
	assertTrue(col.compare("00123,4", "123") > 0);
	assertTrue(col.compare("00123,4", "124") < 0);
}
