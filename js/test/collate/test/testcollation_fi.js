/*
 * testcollation_fi.js - test the Collator object in Finnish
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

var ilib = require("../lib/ilib.js");
var Collator = require("../lib/Collator.js");
function testCollatorConstructorNative_fi() {
	var col = new Collator({useNative: false, locale: "fi-FI"});

	assertNotUndefined(col);
}

function testCollatorDefaultLowerPrimary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// The Finnish alphabet also has some extra letters, namely Å and Ä and Ö which appear
	// at the end of the alphabet as separate letters. 
	// a b c d e f g h i j k l m n o p q r s t u v w x y z å ä ö
	assertTrue("a < b", col.compare("a", "b") < 0);
	assertTrue("b < c", col.compare("b", "c") < 0);
	assertTrue("c < d", col.compare("c", "d") < 0);
	assertTrue("d < e", col.compare("d", "e") < 0);
	assertTrue("z < å", col.compare("z", "å") < 0);
	assertTrue("å < ä", col.compare("å", "ä") < 0);
	assertTrue("ä < ö", col.compare("ä", "ö") < 0);
}

function testCollatorDefaultLowerAccentsPrimary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// some primary equivalences, mostly for foreign loanwords
	assertTrue("d = đ", col.compare("d", "đ") === 0);
	assertTrue("đ = ð", col.compare("đ", "ð") === 0);
	assertTrue("v = w", col.compare("v", "w") === 0);
	
	assertTrue("y = ü", col.compare("y", "ü") === 0);
	assertTrue("ü = ű", col.compare("ü", "ű") === 0);
	assertTrue("ä = æ", col.compare("ä", "æ") === 0);
	assertTrue("ö = ø", col.compare("ö", "ø") === 0);
	
	assertTrue("n̵ = ŋ", col.compare("n̵", "ŋ") === 0);
	assertTrue("g̵ = ǥ", col.compare("g̵", "ǥ") === 0);
	assertTrue("t̵ = ŧ", col.compare("t̵", "ŧ") === 0);
	assertTrue("z̵ = ʒ", col.compare("z̵", "ʒ") === 0);
	
	assertTrue("tg < Þ", col.compare("tg", "Þ") < 0);
	assertTrue("th = Þ", col.compare("th", "Þ") === 0);
	assertTrue("Þ < ti", col.compare("Þ", "ti") < 0);
}

function testCollatorDefaultCasePrimary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// case is a tertiary difference, so no difference here
	assertTrue("A = a", col.compare("A", "a") === 0);
	assertTrue("Z = z", col.compare("Z", "z") === 0);
	assertTrue("Å = å", col.compare("Å", "å") === 0);
	assertTrue("Ä = ä", col.compare("Ä", "ä") === 0);
	assertTrue("Ö = ö", col.compare("Ö", "ö") === 0);
}

function testCollatorDefaultVariantsPrimary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// variants are a quaternary difference, so no difference here
	assertTrue("Å = Å", col.compare("Å", "Å") === 0);
	assertTrue("å = å", col.compare("å", "å") === 0);
	assertTrue("Ä = Ä", col.compare("Ä", "Ä") === 0);
	assertTrue("ä = ä", col.compare("ä", "ä") === 0);
	assertTrue("Ö = Ö", col.compare("Ö", "Ö") === 0);
	assertTrue("ö = ö", col.compare("ö", "ö") === 0);
}

function testCollatorDefaultUpperPrimary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// The Finnish alphabet also has some extra letters, namely Å and Ä and Ö which appear
	// at the end of the alphabet as separate letters. 
	// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Å Ä Ö
	assertTrue("A < B", col.compare("A", "B") < 0);
	assertTrue("B < C", col.compare("B", "C") < 0);
	assertTrue("C < D", col.compare("C", "D") < 0);
	assertTrue("D < E", col.compare("D", "E") < 0);
	assertTrue("Z < Å", col.compare("Z", "Å") < 0);
	assertTrue("Å < Ä", col.compare("Å", "Ä") < 0);
	assertTrue("Ä < Ö", col.compare("Ä", "Ö") < 0);
}

function testCollatorDefaultUpperAccentsPrimary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// some primary equivalences, mostly for foreign loanwords
	assertTrue("D = Đ", col.compare("D", "Đ") === 0);
	assertTrue("Đ = Ð", col.compare("Đ", "Ð") === 0);
	assertTrue("V = W", col.compare("V", "W") === 0);
	
	assertTrue("Y = Ü", col.compare("Y", "Ü") === 0);
	assertTrue("Ü = Ű", col.compare("Ü", "Ű") === 0);
	assertTrue("Ä = Æ", col.compare("Ä", "Æ") === 0);
	assertTrue("Ö = Ø", col.compare("Ö", "Ø") === 0);
	
	assertTrue("N̵ = Ŋ", col.compare("N̵", "Ŋ") === 0);
	assertTrue("G̵ = Ǥ", col.compare("G̵", "Ǥ") === 0);
	assertTrue("T̵ = Ŧ", col.compare("T̵", "Ŧ") === 0);
	assertTrue("Z̵ = Ʒ", col.compare("Z̵", "Ʒ") === 0);

	assertTrue("TG < Þ", col.compare("TG", "Þ") < 0);
	assertTrue("TH = Þ", col.compare("TH", "Þ") === 0);
	assertTrue("Þ < TI", col.compare("Þ", "TI") < 0);
}

function testCollatorDefaultLowerSecondary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// the accents are primary differences, so this is the same order as
	// the primary alphabet
	// a b c d e f g h i j k l m n o p q r s t u v w x y z å ä ö
	assertTrue("a < b", col.compare("a", "b") < 0);
	assertTrue("b < c", col.compare("b", "c") < 0);
	assertTrue("c < d", col.compare("c", "d") < 0);
	assertTrue("d < e", col.compare("d", "e") < 0);
	assertTrue("z < å", col.compare("z", "å") < 0);
	assertTrue("å < ä", col.compare("å", "ä") < 0);
	assertTrue("ä < ö", col.compare("ä", "ö") < 0);
}

function testCollatorDefaultLowerAccentsSecondary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// some secondary differences, mostly for foreign loanwords
	assertTrue("d < đ", col.compare("d", "đ") < 0);
	assertTrue("đ < ð", col.compare("đ", "ð") < 0);
	assertTrue("v < w", col.compare("v", "w") < 0);
	
	assertTrue("y < ü", col.compare("y", "ü") < 0);
	assertTrue("ü < ű", col.compare("ü", "ű") < 0);
	assertTrue("ä < æ", col.compare("ä", "æ") < 0);
	assertTrue("ö < ø", col.compare("ö", "ø") < 0);
	
	assertTrue("n̵ < ŋ", col.compare("n̵", "ŋ") < 0);
	assertTrue("g̵ < ǥ", col.compare("g̵", "ǥ") < 0);
	assertTrue("t̵ < ŧ", col.compare("t̵", "ŧ") < 0);
	assertTrue("z̵ < ʒ", col.compare("z̵", "ʒ") < 0);
	
	assertTrue("th < Þ", col.compare("th", "Þ") < 0);
	assertTrue("Þ < ti", col.compare("Þ", "ti") < 0);
}

function testCollatorDefaultCaseSecondary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// case is a tertiary difference, so no difference here
	assertTrue("A = a", col.compare("A", "a") === 0);
	assertTrue("Z = z", col.compare("Z", "z") === 0);
	assertTrue("Å = å", col.compare("Å", "å") === 0);
	assertTrue("Ä = ä", col.compare("Ä", "ä") === 0);
	assertTrue("Ö = ö", col.compare("Ö", "ö") === 0);
}

function testCollatorDefaultVariantsSecondary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// variants are a quaternary difference, so no difference here
	assertTrue("Å = Å", col.compare("Å", "Å") === 0);
	assertTrue("å = å", col.compare("å", "å") === 0);
	assertTrue("Ä = Ä", col.compare("Ä", "Ä") === 0);
	assertTrue("ä = ä", col.compare("ä", "ä") === 0);
	assertTrue("Ö = Ö", col.compare("Ö", "Ö") === 0);
	assertTrue("ö = ö", col.compare("ö", "ö") === 0);
}

function testCollatorDefaultUpperSecondary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// the accents are primary differences, so this is the same order as
	// the primary alphabet
	// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Å Ä Å
	assertTrue("A < B", col.compare("A", "B") < 0);
	assertTrue("B < C", col.compare("B", "C") < 0);
	assertTrue("C < D", col.compare("C", "D") < 0);
	assertTrue("D < E", col.compare("D", "E") < 0);
	assertTrue("Z < Å", col.compare("Z", "Å") < 0);
	assertTrue("Å < Ä", col.compare("Å", "Ä") < 0);
	assertTrue("Ä < Ö", col.compare("Ä", "Ö") < 0);
}

function testCollatorDefaultUpperAccentsSecondary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "secondary"
	});

	assertNotUndefined(col);
	
	// some secondary differences, mostly for foreign loanwords
	assertTrue("D < đ", col.compare("D", "Đ") < 0);
	assertTrue("Đ < Ð", col.compare("Đ", "Ð") < 0);
	assertTrue("V < W", col.compare("V", "W") < 0);
	
	assertTrue("Y < Ü", col.compare("Y", "Ü") < 0);
	assertTrue("Ü < Ű", col.compare("Ü", "Ű") < 0);
	assertTrue("Ä < Æ", col.compare("Ä", "Æ") < 0);
	assertTrue("Ö < Ø", col.compare("Ö", "Ø") < 0);
	
	assertTrue("N̵ < Ŋ", col.compare("N̵", "Ŋ") < 0);
	assertTrue("G̵ < Ǥ", col.compare("G̵", "Ǥ") < 0);
	assertTrue("T̵ < Ŧ", col.compare("T̵", "Ŧ") < 0);
	assertTrue("Z̵ < Ʒ", col.compare("Z̵", "Ʒ") < 0);
	
	assertTrue("TH < Þ", col.compare("TH", "Þ") < 0);
	assertTrue("Þ < TI", col.compare("Þ", "TI") < 0);
}

function testCollatorDefaultLowerTertiary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	// case is a tertiary difference, so now sort based on case
	assertTrue("a < b", col.compare("a", "b") < 0);
	assertTrue("b < c", col.compare("b", "c") < 0);
	assertTrue("c < d", col.compare("c", "d") < 0);
	assertTrue("d < e", col.compare("d", "e") < 0);
	assertTrue("z < å", col.compare("z", "å") < 0);
	assertTrue("å < ä", col.compare("å", "ä") < 0);
	assertTrue("ä < ö", col.compare("ä", "ö") < 0);
	
	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("Z < z", col.compare("Z", "z") < 0);
	assertTrue("Å < å", col.compare("Å", "å") < 0);
	assertTrue("Ä < ä", col.compare("Ä", "ä") < 0);
	assertTrue("Å < å", col.compare("Å", "å") < 0);
}

function testCollatorDefaultLowerAccentsTertiary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	// some secondary differences, mostly for foreign loanwords
	assertTrue("d < đ", col.compare("d", "đ") < 0);
	assertTrue("đ < ð", col.compare("đ", "ð") < 0);
	assertTrue("v < w", col.compare("v", "w") < 0);
	
	assertTrue("y < ü", col.compare("y", "ü") < 0);
	assertTrue("ü < ű", col.compare("ü", "ű") < 0);
	assertTrue("ä < æ", col.compare("ä", "æ") < 0);
	assertTrue("ö < ø", col.compare("ö", "ø") < 0);
	
	assertTrue("n̵ < ŋ", col.compare("n̵", "ŋ") < 0);
	assertTrue("g̵ < ǥ", col.compare("g̵", "ǥ") < 0);
	assertTrue("t̵ < ŧ", col.compare("t̵", "ŧ") < 0);
	assertTrue("z̵ < ʒ", col.compare("z̵", "ʒ") < 0);
	
	assertTrue("th < þ", col.compare("th", "þ") < 0);
	assertTrue("þ < ti", col.compare("þ", "ti") < 0);
}


function testCollatorDefaultVariantsTertiary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	// variants are a quaternary difference, so no difference here
	assertTrue("Å = Å", col.compare("Å", "Å") === 0);
	assertTrue("å = å", col.compare("å", "å") === 0);
	assertTrue("Ä = Ä", col.compare("Ä", "Ä") === 0);
	assertTrue("ä = ä", col.compare("ä", "ä") === 0);
	assertTrue("Ö = Ö", col.compare("Ö", "Ö") === 0);
	assertTrue("ö = ö", col.compare("ö", "ö") === 0);
}

function testCollatorDefaultUpperTertiary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	// the accents are primary differences, so this is the same order as
	// the primary alphabet
	assertTrue("A < B", col.compare("A", "B") < 0);
	assertTrue("B < C", col.compare("B", "C") < 0);
	assertTrue("C < D", col.compare("C", "D") < 0);
	assertTrue("D < E", col.compare("D", "E") < 0);
	assertTrue("Z < Å", col.compare("Z", "Å") < 0);
	assertTrue("Å < Ä", col.compare("Å", "Ä") < 0);
	assertTrue("Ä < Ö", col.compare("Ä", "Ö") < 0);
}

function testCollatorDefaultUpperAccentsTertiary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);
	
	// some secondary differences, mostly for foreign loanwords
	assertTrue("D < đ", col.compare("D", "Đ") < 0);
	assertTrue("Đ < Ð", col.compare("Đ", "Ð") < 0);
	assertTrue("V < W", col.compare("V", "W") < 0);
	
	assertTrue("Y < Ü", col.compare("Y", "Ü") < 0);
	assertTrue("Ü < Ű", col.compare("Ü", "Ű") < 0);
	assertTrue("Ä < Æ", col.compare("Ä", "Æ") < 0);
	assertTrue("Ö < Ø", col.compare("Ö", "Ø") < 0);
	
	assertTrue("N̵ < Ŋ", col.compare("N̵", "Ŋ") < 0);
	assertTrue("G̵ < Ǥ", col.compare("G̵", "Ǥ") < 0);
	assertTrue("T̵ < Ŧ", col.compare("T̵", "Ŧ") < 0);
	assertTrue("Z̵ < Ʒ", col.compare("Z̵", "Ʒ") < 0);
	
	assertTrue("TH < Þ", col.compare("TH", "Þ") < 0);
	assertTrue("Þ < TI", col.compare("Þ", "TI") < 0);
}

function testCollatorDefaultLowerQuaternary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// case is a tertiary difference, so now sort based on case
	assertTrue("a < b", col.compare("a", "b") < 0);
	assertTrue("b < c", col.compare("b", "c") < 0);
	assertTrue("c < d", col.compare("c", "d") < 0);
	assertTrue("d < e", col.compare("d", "e") < 0);
	assertTrue("z < å", col.compare("z", "å") < 0);
	assertTrue("å < ä", col.compare("å", "ä") < 0);
	assertTrue("ä < ö", col.compare("ä", "ö") < 0);
	
	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("Z < z", col.compare("Z", "z") < 0);
	assertTrue("Å < å", col.compare("Å", "å") < 0);
	assertTrue("Ä < ä", col.compare("Ä", "ä") < 0);
	assertTrue("Å < å", col.compare("Å", "å") < 0);
}

function testCollatorDefaultVariantsQuaternary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// variants are a quaternary difference, so now sort these variants properly
	assertTrue("Å < Å", col.compare("Å", "Å") < 0);
	assertTrue("å < å", col.compare("å", "å") < 0);
	assertTrue("Ä < Ä", col.compare("Ä", "Ä") < 0);
	assertTrue("ä < ä", col.compare("ä", "ä") < 0);
	assertTrue("Ö < Ö", col.compare("Ö", "Ö") < 0);
	assertTrue("ö < ö", col.compare("ö", "ö") < 0);
}

function testCollatorDefaultUpperQuaternary_fi() {
	var col = new Collator({
		locale: "fi-FI",
		usage: "search",
		useNative: false, 
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	assertTrue("A < B", col.compare("A", "B") < 0);
	assertTrue("B < C", col.compare("B", "C") < 0);
	assertTrue("C < D", col.compare("C", "D") < 0);
	assertTrue("D < E", col.compare("D", "E") < 0);
	assertTrue("Z < Å", col.compare("Z", "Å") < 0);
	assertTrue("Å < Ä", col.compare("Å", "Ä") < 0);
	assertTrue("Ä < Ö", col.compare("Ä", "Ö") < 0);
}

function testCollatorGetSortKeySimpleUpper_fi() {
	var col = new Collator({
		locale: "fi-FI",
		useNative: false
	});

	assertNotUndefined(col);

	assertEquals("000020040320340360", col.sortKey("ABCÅÄÖ"));
}
function testCollatorGetSortKeySimpleLower_fi() {
	var col = new Collator({
		locale: "fi-FI",
		useNative: false
	});

	assertNotUndefined(col);

	assertEquals("002022042322342362", col.sortKey("abcåäö"));
}


function testCollatorWithSort_fi() {
	var col = new Collator({
		locale: "fi-FI",
		useNative: false,
		usage: "sort"
	});
	assertNotUndefined(col);

	var input = [ "å", "p", "b", "w", "d", "h", "x", "ä", "j", "v", "z",
			"m", "o", "q", "ö", "g", "a", "r", "f", "s", "e", "c", "t", "k",
			"u", "y", "i", "n", "l", ];

	input.sort(col.getComparator());

	var expected = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
			"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
			"y", "z", "å", "ä", "ö" ];

	assertArrayEquals(expected, input);
}


function testCollatorGetAvailableScripts_fi() {
	assertArrayEquals(["Latn"], Collator.getAvailableScripts());
}

function testCollatorGetAvailableStyles_fi() {
	assertArrayEquals(["standard"], Collator.getAvailableStyles());
}


function testJSCollatorNumeric_fi() {
	var col = new Collator({
		locale: "fi-FI",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	// period is the thousands separator and comma is the decimal separator
	assertEquals(0, col.compare("0.012.123,4", "12.123,4"));
	assertTrue(col.compare("00123,4", "123") > 0);
	assertTrue(col.compare("00123,4", "124") < 0);
}
