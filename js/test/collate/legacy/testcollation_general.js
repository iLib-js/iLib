/*
 * testcollation_general.js - test the Collator object in any languages that
 * uses the general rules
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

function testCollatorConstructorNative_it() {
	var col = new ilib.Collator({useNative: false, locale: "it-IT"});

	assertNotUndefined(col);
}

function testCollatorDefaultNative_it() {
	var col = new ilib.Collator({useNative: false, locale: "it-IT"});

	assertNotUndefined(col);

	// should compare in English
	assertEquals("equality", 0, col.compare("string", "string"));
	assertTrue("a < b", col.compare("a", "b") < 0);
	assertTrue("b < c", col.compare("b", "c") < 0);
	assertTrue("c < z", col.compare("c", "z") < 0);
}

function testCollatorDefaultCase_it() {
	var col = new ilib.Collator({useNative: false, locale: "it-IT"});

	assertNotUndefined(col);

	// should compare upper-case first within a base character
	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("a < Z", col.compare("a", "Z") < 0);
	assertTrue("Á < a", col.compare("A", "a") < 0);
}

function testCollatorGetComparator_it() {
	var col = new ilib.Collator({useNative: false, locale: "it-IT"});

	assertNotUndefined(col);

	// should compare in English
	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testCollatorGetComparatorWorks_it() {
	var col = new ilib.Collator({useNative: false, locale: "it-IT"});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

	assertEquals("equality", 0, func("string", "string"));
	assertTrue("a < b", func("a", "b") < 0);
	assertTrue("b < c", func("b", "c") < 0);
	assertTrue("c < z", func("c", "z") < 0);
}

function testCollatorGetComparatorWorksWithCase_it() {
	var col = new ilib.Collator({useNative: false, locale: "it-IT"});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

	// should compare upper-case first
	assertTrue("A < a", func("A", "a") < 0);
	assertTrue("B < b", func("B", "b") < 0);
	assertTrue("a < Z", func("a", "Z") < 0);
	assertTrue("Á < a", func("A", "a") < 0);
}


function testCollatorConstructorJS_it() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);
}

function testCollatorDefaultJS_it() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	// should compare in English
	assertEquals("equality", 0, col.compare("string", "string"));
	assertTrue("a < b", col.compare("a", "b") < 0);
	assertTrue("b < c", col.compare("b", "c") < 0);
	assertTrue("c < z", col.compare("c", "z") < 0);
}

function testCollatorDefaultCaseJS_it() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	// should compare upper-case first within a base character
	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("a < Z", col.compare("a", "Z") < 0);
	assertTrue("Á < a", col.compare("A", "a") < 0);
}

function testCollatorGetComparatorJS_it() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	// should compare in English
	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testCollatorGetComparatorWorksJS_it() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

	// should compare in English
	assertEquals("equality", 0, func("string", "string"));
	assertTrue("a < b", func("a", "b") < 0);
	assertTrue("b < c", func("b", "c") < 0);
	assertTrue("c < z", func("c", "z") < 0);
}

function testCollatorGetComparatorWorksWithCaseJS_it() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

	// should compare upper-case first
	assertTrue("A < a", func("A", "a") < 0);
	assertTrue("B < b", func("B", "b") < 0);
	assertTrue("a < Z", func("a", "Z") < 0);
	assertTrue("Á < a", func("A", "a") < 0);
}


function testCollatorGetSortKeyNative_it() {
	if (typeof(Intl) !== 'undefined' && Intl) {
		var col = new ilib.Collator({locale: "it-IT"});

		assertNotUndefined(col);

		// no sort key available when using native...
		assertEquals("string", col.sortKey("string"));
	}
}

function testCollatorGetSortKeySimpleUpper_it() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	assertEquals("4204404604804a04c0", col.sortKey("ABCDEF"));
}
function testCollatorGetSortKeySimpleLower_it() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	assertEquals("4224424624824a24c2", col.sortKey("abcdef"));
}

function testCollatorGetSortKeyMixed_it() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	assertEquals("6606826425225c24e2", col.sortKey("String"));
}

function testCollatorGetSortKeyWithExpansion_it() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	// has 2 collation elements for "a" and "e"
	assertEquals("43e4a2", col.sortKey("æ"));
}

function testCollatorGetSortKeyWithContraction_it() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	// The à is actually an "a" with a second combining grave 
	// accent character. Together, they should have only 1 
	// collation element because they are normalized to an 
	// a-grave character first.
	assertEquals("427", col.sortKey("à"));
}

function testCollatorGetSortKeyEmpty_it() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	assertEquals("", col.sortKey(""));
}

function testCollatorGetSortKeyUndefined_it() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	assertEquals("", col.sortKey(undefined));
}

function testCollatorGetSortKeyDeterministic_it() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	// should be equal always
	assertTrue(col.sortKey("string") === col.sortKey("string"));
}
function testCollatorGetSortKeyWorks_it() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	// should compare in English
	assertTrue("a < b", col.sortKey("a") < col.sortKey("b"));
	assertTrue("b < c", col.sortKey("b") < col.sortKey("c"));
	assertTrue("c < z", col.sortKey("c") < col.sortKey("z"));
}


function testCollatorWithSort_it() {
	var col = new ilib.Collator({useNative: false});
	assertNotUndefined(col);

	var input = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

	input.sort(col.getComparator());

	var expected = ["e", "i", "o", "p", "q", "r", "t", "u", "w", "y"];

	assertArrayEquals(expected, input);
}

function testCollatorWithSortUpperFirst_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		upperFirst: true, 
		useNative: false
	});
	assertNotUndefined(col);

	var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

	input.sort(col.getComparator());

	var expected = ["E", "e", "I", "i", "o", "p", "q", "r", "T", "U"];

	assertArrayEquals(expected, input);
}

function testCollatorWithSortUpperNotFirst_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		upperFirst: false, 
		useNative: false
	});
	assertNotUndefined(col);

	var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

	input.sort(col.getComparator());

	var expected = ["e", "E", "i", "I", "o", "p", "q", "r", "T", "U"];

	assertArrayEquals(expected, input);
}

function testCollatorWithSortJS_it() {
	var col = new ilib.Collator({useNative: false});
	assertNotUndefined(col);

	var input = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

	input.sort(col.getComparator());

	var expected = ["e", "i", "o", "p", "q", "r", "t", "u", "w", "y"];

	assertArrayEquals(expected, input);
}

function testCollatorWithSortUpperFirstJS_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		upperFirst: true,
		useNative: false
	});
	assertNotUndefined(col);

	var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

	input.sort(col.getComparator());

	var expected = ["E", "e", "I", "i", "o", "p", "q", "r", "T", "U"];

	assertArrayEquals(expected, input);
}

function testCollatorWithSortUpperNotFirstJS_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		upperFirst: false,
		useNative: false
	});
	assertNotUndefined(col);

	var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

	input.sort(col.getComparator());

	var expected = ["e", "E", "i", "I", "o", "p", "q", "r", "T", "U"];

	assertArrayEquals(expected, input);
}

function testCollatorGetAvailableScripts_it() {
	assertArrayEquals(["Latn"], ilib.Collator.getAvailableScripts());
}

function testCollatorGetAvailableStyles_it() {
	assertArrayEquals(["standard"], ilib.Collator.getAvailableStyles());
}

function testCollatorDefaultExtendedChars_it() {
	// only test on platforms that support the new Intl class natively
	if (typeof(Intl) !== 'undefined') {
		var col = new ilib.Collator({locale: "it-IT"});

		assertNotUndefined(col);

		// should compare in English
		assertTrue("e < ë", col.compare("e", "ë") < 0);
		assertTrue("o < ø", col.compare("o", "ø") < 0);
	}
}

function testCollatorPrimaryExtendedChars_it() {
	// only test on platforms that support the new Intl class natively
	if (typeof(Intl) !== 'undefined') {
		var col = new ilib.Collator({
			locale: "it-IT",
			sensitivity: "primary",
			usage: "search"
		});

		assertNotUndefined(col);

		// should compare in English
		assertEquals("e = ë", 0, col.compare("e", "ë"));
		assertEquals("o = ø", 0, col.compare("o", "ø"));
	}
}

function testCollatorDefaultExtendedCharsJS_it() {
	// only test on platforms that support the new Intl class natively
	if (typeof(Intl) !== 'undefined') {
		var col = new ilib.Collator({useNative: false});

		assertNotUndefined(col);

		// should compare in English
		assertTrue("e < ë", col.compare("e", "ë") < 0);
		assertTrue("o < ø", col.compare("o", "ø") < 0);
	}
}

function testCollatorPrimaryExtendedCharsJS_it() {
	// only test on platforms that support the new Intl class natively
	if (typeof(Intl) !== 'undefined') {
		var col = new ilib.Collator({
		locale: "it-IT",
			sensitivity: "primary",
			usage: "search",
			useNative: false
		});

		assertNotUndefined(col);

		// should compare in English
		assertEquals("e = ë", 0, col.compare("e", "ë"));
		assertEquals("o = ø", 0, col.compare("o", "ø"));
	}
}

function testCollatorNativeIsNative_it() {
	// only test on platforms that support the new Intl class natively
	if (typeof(Intl) !== 'undefined') {
		var col = new ilib.Collator({locale: "it-IT"});
		assertNotUndefined(col);
		assertNotUndefined(col.collator);
	}
}

function testJSCollatorPrimaryEqual_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// should compare base first
	assertEquals("a = a", 0, col.compare("a", "a"));
	assertEquals("å = å", 0, col.compare("å", "å"));
	assertEquals("A = A", 0, col.compare("A", "A"));
	assertEquals("Ã = Ã", 0, col.compare("Ã", "Ã"));
	assertEquals("à = à", 0, col.compare("à", "à"));
}

function testJSCollatorPrimaryBase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// should compare base first
	// A a Ã ã O o Õ õ
	assertTrue("a < o", col.compare("a", "o") < 0);
	assertTrue("A < o", col.compare("A", "o") < 0);
	assertTrue("ã < o", col.compare("ã", "o") < 0);
	assertTrue("Ã < o", col.compare("Ã", "o") < 0);

	assertTrue("a < õ", col.compare("a", "õ") < 0);
	assertTrue("A < õ", col.compare("A", "õ") < 0);
	assertTrue("ã < õ", col.compare("ã", "õ") < 0);
	assertTrue("Ã < õ", col.compare("Ã", "õ") < 0);

	assertTrue("a < O", col.compare("a", "O") < 0);
	assertTrue("A < O", col.compare("A", "O") < 0);
	assertTrue("ã < O", col.compare("ã", "O") < 0);
	assertTrue("Ã < O", col.compare("Ã", "O") < 0);

	assertTrue("a < Õ", col.compare("a", "Õ") < 0);
	assertTrue("A < Õ", col.compare("A", "Õ") < 0);
	assertTrue("ã < Õ", col.compare("ã", "Õ") < 0);
	assertTrue("Ã < Õ", col.compare("Ã", "Õ") < 0);
}

function testJSCollatorPrimaryAccent_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// should compare base, then accent, then case, then variant
	// a à à å
	// (second "a" with grave is two characters: "a" character with a combining grave character)
	assertTrue("a < à", col.compare("a", "à") < 0);

	assertTrue("à < à  (combining)", col.compare("à", "à") < 0);
	assertTrue("à  (combining) < å", col.compare("à", "å") < 0);
}

function testJSCollatorPrimaryCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// should compare base, then accent, then case, then variant
	// A À À Å a à à å O Õ o õ
	// (second set of "a" with grave is two characters: "a" character with a combining grave character)
	assertTrue("A < À", col.compare("A", "À") < 0);
	assertTrue("À < À  (combining)", col.compare("À", "À") < 0);
	assertTrue("À  (combining) < Å", col.compare("À", "Å") < 0);
	assertTrue("Å > a", col.compare("Å", "a") > 0);
	assertTrue("a < à", col.compare("a", "à") < 0);
	assertTrue("à < à  (combining)", col.compare("à", "à") < 0);
	assertTrue("à  (combining) < å", col.compare("à", "å") < 0);
	assertTrue("å < O", col.compare("å", "O") < 0);
	assertTrue("O < Õ", col.compare("O", "Õ") < 0);
	assertTrue("Õ > o", col.compare("Õ", "o") > 0);
	assertTrue("o < õ", col.compare("o", "õ") < 0);
}

function testJSCollatorGetComparatorPrimary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testJSCollatorGetComparatorPrimaryWorks_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

}

function testJSCollatorGetComparatorPrimaryWorksWithCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

	// A À À Å a à à å O Õ o õ
	// (second set of "a" with grave is two characters: "a" character with a combining grave character)
	assertTrue("A < À", func("A", "À") < 0);
	assertTrue("À < À  (combining)", func("À", "À") < 0);
	assertTrue("À  (combining) < Å", func("À", "Å") < 0);
	assertTrue("Å > a", func("Å", "a") > 0);
	assertTrue("a < à", func("a", "à") < 0);
	assertTrue("à < à  (combining)", func("à", "à") < 0);
	assertTrue("à  (combining) < å", func("à", "å") < 0);
	assertTrue("å < O", func("å", "O") < 0);
	assertTrue("O < Õ", func("O", "Õ") < 0);
	assertTrue("Õ > o", func("Õ", "o") > 0);
	assertTrue("o < õ", func("o", "õ") < 0);
}

function testJSCollatorGetSortKeyPrimary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	assertEquals("6626826425225c24e2", col.sortKey("string"));
}

function testJSCollatorGetSortKeyPrimaryWithAccentsAndCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	assertEquals("6606826425335c24e2", col.sortKey("Strïng"));
}

function testJSCollatorGetSortKeyPrimaryWorks_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	assertEquals("string", col.sortKey("string"), col.sortKey("string"));
	// A À À Å a à à å O Õ o õ
	assertTrue("A < À", col.sortKey("A") < col.sortKey("À"));
	assertTrue("À < À  (combining)", col.sortKey("À") < col.sortKey("À"));
	assertTrue("À (combining) < Å", col.sortKey("À") < col.sortKey("Å"));
	assertTrue("Å > a", col.sortKey("Å") > col.sortKey("a"));
	assertTrue("a < à", col.sortKey("a") < col.sortKey("à"));
	assertTrue("à < à (combining)", col.sortKey("à") < col.sortKey("à"));
	assertTrue("à (combining) < å", col.sortKey("à") < col.sortKey("å"));
	assertTrue("å < O", col.sortKey("å") < col.sortKey("O"));
	assertTrue("O < Õ", col.sortKey("O") < col.sortKey("Õ"));
	assertTrue("Õ > o", col.sortKey("Õ") > col.sortKey("o"));
	assertTrue("o < õ", col.sortKey("o") < col.sortKey("õ"));
}


function testJSCollatorSecondaryEqual_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// should compare base first
	assertEquals("a = a", 0, col.compare("a", "a"));
	assertEquals("å = å", 0, col.compare("å", "å"));
	assertEquals("A = A", 0, col.compare("A", "A"));
	assertEquals("Ã = Ã", 0, col.compare("Ã", "Ã"));
	assertEquals("à = à", 0, col.compare("à", "à"));
}

function testJSCollatorSecondaryBase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// should compare base first
	// A Ã a ã O Õ o õ
	assertTrue("a < o", col.compare("a", "o") < 0);
	assertTrue("A < o", col.compare("A", "o") < 0);
	assertTrue("ã < o", col.compare("ã", "o") < 0);
	assertTrue("Ã < o", col.compare("Ã", "o") < 0);

	assertTrue("a < õ", col.compare("a", "õ") < 0);
	assertTrue("A < õ", col.compare("A", "õ") < 0);
	assertTrue("ã < õ", col.compare("ã", "õ") < 0);
	assertTrue("Ã < õ", col.compare("Ã", "õ") < 0);

	assertTrue("a < O", col.compare("a", "O") < 0);
	assertTrue("A < O", col.compare("A", "O") < 0);
	assertTrue("ã < O", col.compare("ã", "O") < 0);
	assertTrue("Ã < O", col.compare("Ã", "O") < 0);

	assertTrue("a < Õ", col.compare("a", "Õ") < 0);
	assertTrue("A < Õ", col.compare("A", "Õ") < 0);
	assertTrue("ã < Õ", col.compare("ã", "Õ") < 0);
	assertTrue("Ã < Õ", col.compare("Ã", "Õ") < 0);
}

function testJSCollatorSecondaryAccent_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// should compare base, then accent, then case, then variant
	// a à à å
	// (second "a" with grave is two characters: "a" character with a combining grave character)
	assertTrue("a < à", col.compare("a", "à") < 0);
	assertTrue("à < à (combining)", col.compare("à", "à") < 0);
	assertTrue("à (combining) < å", col.compare("à", "å") < 0);
}

function testJSCollatorSecondaryCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// should compare base, then case, then accent, then variant
	// A À À Å a à à å O Õ o õ
	assertTrue("A < À", col.compare("A", "À") < 0);
	assertTrue("À < À (combining)", col.compare("À", "À") < 0);
	assertTrue("À (combining) < Å", col.compare("À", "Å") < 0);
	assertTrue("Å > a", col.compare("Å", "a") > 0);
	assertTrue("a < à", col.compare("a", "à") < 0);
	assertTrue("à < à (combining)", col.compare("à", "à") < 0);
	assertTrue("à (combining) < å", col.compare("à", "å") < 0);
	assertTrue("å < O", col.compare("å", "O") < 0);
	assertTrue("O < Õ", col.compare("O", "Õ") < 0);
	assertTrue("Õ > o", col.compare("Õ", "o") > 0);
	assertTrue("o < õ", col.compare("o", "õ") < 0);
}

function testJSCollatorGetComparatorSecondary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testJSCollatorGetComparatorSecondaryWorks_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

}

function testJSCollatorGetComparatorSecondaryWorksWithCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

	// A À À Å a à à å O Õ o õ
	assertTrue("A < À", func("A", "À") < 0);
	assertTrue("À < À (combining)", func("À", "À") < 0);
	assertTrue("À (combining) < Å", func("À", "Å") < 0);
	assertTrue("Å > a", func("Å", "a") > 0);
	assertTrue("a < à", func("a", "à") < 0);
	assertTrue("à < à (combining)", func("à", "à") < 0);
	assertTrue("à (combining) < å", func("à", "å") < 0);
	assertTrue("å < O", func("å", "O") < 0);
	assertTrue("O < Õ", func("O", "Õ") < 0);
	assertTrue("Õ > o", func("Õ", "o") > 0);
	assertTrue("o < õ", func("o", "õ") < 0);
}

function testJSCollatorGetSortKeySecondary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	assertEquals("6626826425225c24e2", col.sortKey("string"));
}

function testJSCollatorGetSortKeySecondaryWithAccentsAndCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	assertEquals("6606826425335c24e2", col.sortKey("Strïng"));
}

function testJSCollatorGetSortKeySecondaryWorks_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	assertEquals("string", col.sortKey("string"), col.sortKey("string"));
	// A À À Å a à à å O Õ o õ
	assertTrue("A < À", col.sortKey("A") < col.sortKey("À"));
	assertTrue("À < À (combining)", col.sortKey("À") < col.sortKey("À"));
	assertTrue("À (combining) < Å", col.sortKey("À") < col.sortKey("Å"));
	assertTrue("Å > a", col.sortKey("Å") > col.sortKey("a"));
	assertTrue("a < à", col.sortKey("a") < col.sortKey("à"));
	assertTrue("à < à (combining)", col.sortKey("à") < col.sortKey("à"));
	assertTrue("à (combining) < å", col.sortKey("à") < col.sortKey("å"));
	assertTrue("å < O", col.sortKey("å") < col.sortKey("O"));
	assertTrue("O < Õ", col.sortKey("O") < col.sortKey("Õ"));
	assertTrue("Õ > o", col.sortKey("Õ") > col.sortKey("o"));
	assertTrue("o < õ", col.sortKey("o") < col.sortKey("õ"));
}


function testJSCollatorTertiaryEqual_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	// should compare base first
	assertEquals("a = a", 0, col.compare("a", "a"));
	assertEquals("å = å", 0, col.compare("å", "å"));
	assertEquals("A = A", 0, col.compare("A", "A"));
	assertEquals("Ã = Ã", 0, col.compare("Ã", "Ã"));
	assertEquals("à = à", 0, col.compare("à", "à"));
}

function testJSCollatorTertiaryBase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	// should compare base first
	// A Ã a ã O Õ o õ
	assertTrue("a < o", col.compare("a", "o") < 0);
	assertTrue("A < o", col.compare("A", "o") < 0);
	assertTrue("ã < o", col.compare("ã", "o") < 0);
	assertTrue("Ã < o", col.compare("Ã", "o") < 0);

	assertTrue("a < õ", col.compare("a", "õ") < 0);
	assertTrue("A < õ", col.compare("A", "õ") < 0);
	assertTrue("ã < õ", col.compare("ã", "õ") < 0);
	assertTrue("Ã < õ", col.compare("Ã", "õ") < 0);

	assertTrue("a < O", col.compare("a", "O") < 0);
	assertTrue("A < O", col.compare("A", "O") < 0);
	assertTrue("ã < O", col.compare("ã", "O") < 0);
	assertTrue("Ã < O", col.compare("Ã", "O") < 0);

	assertTrue("a < Õ", col.compare("a", "Õ") < 0);
	assertTrue("A < Õ", col.compare("A", "Õ") < 0);
	assertTrue("ã < Õ", col.compare("ã", "Õ") < 0);
	assertTrue("Ã < Õ", col.compare("Ã", "Õ") < 0);
}

function testJSCollatorTertiaryAccent_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	// should compare base, then accent
	// (second "a" with grave is two characters: "a" character with a combining grave character)
	assertTrue("a < à", col.compare("a", "à") < 0);
	assertTrue("à < à (combining)", col.compare("à", "à") < 0);
	assertTrue("à (combining) < å", col.compare("à", "å") < 0);
}

function testJSCollatorTertiaryCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	// should compare base, then case, then accent, then variant
	// A À À Å a à à å O Õ o õ
	assertTrue("A < À", col.compare("A", "À") < 0);
	assertTrue("À < À (combining)", col.compare("À", "À") < 0);
	assertTrue("À (combining) < Å", col.compare("À", "Å") < 0);
	assertTrue("Å > a", col.compare("Å", "a") > 0);
	assertTrue("a < à", col.compare("a", "à") < 0);
	assertTrue("à < à (combining)", col.compare("à", "à") < 0);
	assertTrue("à (combining) < å", col.compare("à", "å") < 0);
	assertTrue("å < O", col.compare("å", "O") < 0);
	assertTrue("O < Õ", col.compare("O", "Õ") < 0);
	assertTrue("Õ > o", col.compare("Õ", "o") > 0);
	assertTrue("o < õ", col.compare("o", "õ") < 0);
}

function testJSCollatorGetComparatorTertiary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testJSCollatorGetComparatorTertiaryWorks_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

}

function testJSCollatorGetComparatorTertiaryWorksWithCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

	// A À À Å a à à å O Õ o õ
	assertTrue("A < À", func("A", "À") < 0);
	assertTrue("À < À (combining)", func("À", "À") < 0);
	assertTrue("À (combining) < Å", func("À", "Å") < 0);
	assertTrue("Å > a", func("Å", "a") > 0);
	assertTrue("a < à", func("a", "à") < 0);
	assertTrue("à < à (combining)", func("à", "à") < 0);
	assertTrue("à (combining) < å", func("à", "å") < 0);
	assertTrue("å < O", func("å", "O") < 0);
	assertTrue("O < Õ", func("O", "Õ") < 0);
	assertTrue("Õ > o", func("Õ", "o") > 0);
	assertTrue("o < õ", func("o", "õ") < 0);
}

function testJSCollatorGetSortKeyTertiary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	assertEquals("6626826425225c24e2", col.sortKey("string"));
}

function testJSCollatorGetSortKeyTertiaryWithAccentsAndCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	assertEquals("6606826425335c24e2", col.sortKey("Strïng"));
}

function testJSCollatorGetSortKeyTertiaryWorks_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	assertEquals("string", col.sortKey("string"), col.sortKey("string"));
	// A À À Å a à à å O Õ o õ
	assertTrue("A < À", col.sortKey("A") < col.sortKey("À"));
	assertTrue("À < À (combining)", col.sortKey("À") < col.sortKey("À"));
	assertTrue("À (combining) < Å", col.sortKey("À") < col.sortKey("Å"));
	assertTrue("Å > a", col.sortKey("Å") > col.sortKey("a"));
	assertTrue("a < à", col.sortKey("a") < col.sortKey("à"));
	assertTrue("à < à (combining)", col.sortKey("à") < col.sortKey("à"));
	assertTrue("à (combining) < å", col.sortKey("à") < col.sortKey("å"));
	assertTrue("å < O", col.sortKey("å") < col.sortKey("O"));
	assertTrue("O < Õ", col.sortKey("O") < col.sortKey("Õ"));
	assertTrue("Õ > o", col.sortKey("Õ") > col.sortKey("o"));
	assertTrue("o < õ", col.sortKey("o") < col.sortKey("õ"));
}


function testJSCollatorSearchPrimaryEqual_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// should compare base first
	assertEquals("a = a", 0, col.compare("a", "a"));
	assertEquals("å = å", 0, col.compare("å", "å"));
	assertEquals("A = A", 0, col.compare("A", "A"));
	assertEquals("Ã = Ã", 0, col.compare("Ã", "Ã"));
	assertEquals("à = à", 0, col.compare("à", "à"));
}

function testJSCollatorSearchPrimaryBase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// should compare base first
	// A a Ã ã O o Õ õ
	assertTrue("a < o", col.compare("a", "o") < 0);
	assertTrue("A < o", col.compare("A", "o") < 0);
	assertTrue("ã < o", col.compare("ã", "o") < 0);
	assertTrue("Ã < o", col.compare("Ã", "o") < 0);

	assertTrue("a < õ", col.compare("a", "õ") < 0);
	assertTrue("A < õ", col.compare("A", "õ") < 0);
	assertTrue("ã < õ", col.compare("ã", "õ") < 0);
	assertTrue("Ã < õ", col.compare("Ã", "õ") < 0);

	assertTrue("a < O", col.compare("a", "O") < 0);
	assertTrue("A < O", col.compare("A", "O") < 0);
	assertTrue("ã < O", col.compare("ã", "O") < 0);
	assertTrue("Ã < O", col.compare("Ã", "O") < 0);

	assertTrue("a < Õ", col.compare("a", "Õ") < 0);
	assertTrue("A < Õ", col.compare("A", "Õ") < 0);
	assertTrue("ã < Õ", col.compare("ã", "Õ") < 0);
	assertTrue("Ã < Õ", col.compare("Ã", "Õ") < 0);
}

function testJSCollatorSearchPrimaryAccent_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// should compare base, then accent, then case, then variant
	// a à à å
	// (second "a" with grave is two characters: "a" character with a combining grave character)
	assertEquals("a = à", 0, col.compare("a", "à"));
	assertEquals("à = à (combining)", 0, col.compare("à", "à"));
	assertEquals("à (combining) = å", 0, col.compare("à", "å"));
}

function testJSCollatorSearchPrimaryCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// should compare base, then accent, then case, then variant
	// A a À à À à Å å O o Õ õ
	// (second set of "a" with grave is two characters: "a" character with a combining grave character)
	assertEquals("A = a", 0, col.compare("A", "a"));
	assertEquals("a = À", 0, col.compare("a", "À"));
	assertEquals("À = à", 0, col.compare("À", "à"));
	assertEquals("à = À (combining)", 0, col.compare("à", "À"));
	assertEquals("À (combining) = à (combining)", 0, col.compare("À", "à"));
	assertEquals("à (combining) = Å", 0, col.compare("à", "Å"));
	assertEquals("Å = å", 0, col.compare("Å", "å"));
	assertTrue("ã < O", col.compare("ã", "O") < 0);
	assertEquals("O = o", 0, col.compare("O", "o"));
	assertEquals("o = Õ", 0, col.compare("o", "Õ"));
	assertEquals("Õ = õ", 0, col.compare("Õ", "õ"));
}

function testJSCollatorSearchGetComparatorPrimary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testJSCollatorSearchGetComparatorPrimaryWorks_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

}

function testJSCollatorSearchGetComparatorPrimaryWorksWithCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

	// A a À à À à Å å O o Õ õ
	// (second set of "a" with grave is two characters: "a" character with a combining grave character)
	assertEquals("A = a", 0, func("A", "a"));
	assertEquals("a = À", 0, func("a", "À"));
	assertEquals("À = à", 0, func("À", "à"));
	assertEquals("à = À (combining)", 0, func("à", "À"));
	assertEquals("À (combining) = à (combining)", 0, func("À", "à"));
	assertEquals("à (combining) = Å", 0, func("à", "Å"));
	assertEquals("Å = å", 0, func("Å", "å"));
	assertTrue("ã < O", func("ã", "O") < 0);
	assertEquals("O = o", 0, func("O", "o"));
	assertEquals("o = Õ", 0, func("o", "Õ"));
	assertEquals("Õ = õ", 0, func("Õ", "õ"));
}

function testJSCollatorSearchGetSortKeyPrimary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("333432292e27", col.sortKey("string"));
}

function testJSCollatorSearchGetSortKeyPrimaryWithAccentsAndCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("333432292e27", col.sortKey("Strïng"));
}

function testJSCollatorSearchGetSortKeyPrimaryWorks_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("string", col.sortKey("string"), col.sortKey("string"));
	// A a À à À à Å å O o Õ õ
	assertEquals("A = a", col.sortKey("A"), col.sortKey("a"));
	assertEquals("a = À", col.sortKey("a"), col.sortKey("À"));
	assertEquals("À = à", col.sortKey("À"), col.sortKey("à"));
	assertEquals("à = À (combining)", col.sortKey("à"), col.sortKey("À"));
	assertEquals("À (combining) = à (combining)", col.sortKey("À"), col.sortKey("à"));
	assertEquals("à (combining) = Å", col.sortKey("à"), col.sortKey("Å"));
	assertEquals("Å = å", col.sortKey("Å"), col.sortKey("å"));
	assertTrue("ã < O", col.sortKey("ã") < col.sortKey("O"));
	assertEquals("O = o", col.sortKey("O"), col.sortKey("o"));
	assertEquals("o = Õ", col.sortKey("o"), col.sortKey("Õ"));
	assertEquals("Õ = õ", col.sortKey("Õ"), col.sortKey("õ"));
}


function testJSCollatorSearchSecondaryEqual_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// should compare base first
	assertEquals("a = a", 0, col.compare("a", "a"));
	assertEquals("å = å", 0, col.compare("å", "å"));
	assertEquals("A = A", 0, col.compare("A", "A"));
	assertEquals("Ã = Ã", 0, col.compare("Ã", "Ã"));
	assertEquals("à = à", 0, col.compare("à", "à"));
}

function testJSCollatorSearchSecondaryBase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// should compare base first, then case
	// A Ã a ã O Õ o õ
	assertTrue("a < o", col.compare("a", "o") < 0);
	assertTrue("A < o", col.compare("A", "o") < 0);
	assertTrue("ã < o", col.compare("ã", "o") < 0);
	assertTrue("Ã < o", col.compare("Ã", "o") < 0);

	assertTrue("a < õ", col.compare("a", "õ") < 0);
	assertTrue("A < õ", col.compare("A", "õ") < 0);
	assertTrue("ã < õ", col.compare("ã", "õ") < 0);
	assertTrue("Ã < õ", col.compare("Ã", "õ") < 0);

	assertTrue("a < O", col.compare("a", "O") < 0);
	assertTrue("A < O", col.compare("A", "O") < 0);
	assertTrue("ã < O", col.compare("ã", "O") < 0);
	assertTrue("Ã < O", col.compare("Ã", "O") < 0);

	assertTrue("a < Õ", col.compare("a", "Õ") < 0);
	assertTrue("A < Õ", col.compare("A", "Õ") < 0);
	assertTrue("ã < Õ", col.compare("ã", "Õ") < 0);
	assertTrue("Ã < Õ", col.compare("Ã", "Õ") < 0);
}

function testJSCollatorSearchSecondaryAccent_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// should compare base, then case
	// a à à å
	// (second "a" with grave is two characters: "a" character with a combining grave character)
	assertTrue("a < à", col.compare("a", "à") < 0);
	assertEquals("à = à (combining)", 0, col.compare("à", "à"));
	assertEquals("à (combining) = À", 0, col.compare("à", "À"));
}

function testJSCollatorSearchSecondaryCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// should compare base, then case
	// A À À Å a à à å O Õ o õ
	// (second set of "a" with grave is two characters: "a" character with a combining grave character)
	assertTrue("A < À",  col.compare("A", "À") < 0);
	assertEquals("À = À (combining)",  0, col.compare("À", "À"));
	assertTrue("À (combining) < Å",  col.compare("À", "Å") < 0);
	assertTrue("Å > a", col.compare("Å", "a") > 0);
	assertTrue("a < à",  col.compare("a", "à") < 0);
	assertEquals("à = à (combining)",  0, col.compare("à", "à"));
	assertTrue("à (combining) < å",  col.compare("à", "å") < 0);
	assertTrue("å < O", col.compare("å", "O") < 0);
	assertTrue("O < Õ",  col.compare("O", "Õ") < 0);
	assertTrue("Õ > o", col.compare("Õ", "o") > 0);
	assertTrue("o < õ",  col.compare("o", "õ") < 0);
}

function testJSCollatorSearchGetComparatorSecondary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testJSCollatorSearchGetComparatorSecondaryWorks_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

}

function testJSCollatorSearchGetComparatorSecondaryWorksWithCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

	// should compare base, then case
	// A À À Å a à à å O Õ o õ
	// (second set of "a" with grave is two characters: "a" character with a combining grave character)
	assertTrue("A < À",  func("A", "À") < 0);
	assertEquals("À = À (combining)",  0, func("À", "À"));
	assertTrue("À (combining) < Å",  func("À", "Å") < 0);
	assertTrue("Å > a", func("Å", "a") > 0);
	assertTrue("a < à",  func("a", "à") < 0);
	assertEquals("à = à (combining)",  0, func("à", "à"));
	assertTrue("à (combining) < å",  func("à", "å") < 0);
	assertTrue("å < O", func("å", "O") < 0);
	assertTrue("O < Õ", func("O", "Õ") < 0);
	assertTrue("Õ > o", func("Õ", "o") > 0);
	assertTrue("o < õ", func("o", "õ") < 0);
}

function testJSCollatorSearchGetSortKeySecondary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("1981a0190148170138", col.sortKey("string"));
}

function testJSCollatorSearchGetSortKeySecondaryWithAccentsAndCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("1981a019014c170138", col.sortKey("Strïng"));
}

function testJSCollatorSearchGetSortKeySecondaryWorks_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("string", col.sortKey("string"), col.sortKey("string"));
	// A À À Å a à à å O Õ o õ
	assertTrue("A < À", col.sortKey("A") < col.sortKey("À"));
	assertTrue("À = À (combining)", col.sortKey("À") === col.sortKey("À"));
	assertTrue("À (combining) < Å", col.sortKey("À") < col.sortKey("Å"));
	assertTrue("Å > a", col.sortKey("Å") > col.sortKey("a"));
	assertTrue("a < à", col.sortKey("a") < col.sortKey("à"));
	assertTrue("à = à (combining)", col.sortKey("à") === col.sortKey("à"));
	assertTrue("à (combining) < å", col.sortKey("à") < col.sortKey("å"));
	assertTrue("å < O", col.sortKey("å") < col.sortKey("O"));
	assertTrue("O < Õ", col.sortKey("O") < col.sortKey("Õ"));
	assertTrue("Õ > o", col.sortKey("Õ") > col.sortKey("o"));
	assertTrue("o < õ", col.sortKey("o") < col.sortKey("õ"));
}


function testJSCollatorSearchTertiaryEqual_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// should compare base first
	assertEquals("a = a", 0, col.compare("a", "a"));
	assertEquals("å = å", 0, col.compare("å", "å"));
	assertEquals("A = A", 0, col.compare("A", "A"));
	assertEquals("Ã = Ã", 0, col.compare("Ã", "Ã"));
	assertEquals("à = à", 0, col.compare("à", "à"));
}

function testJSCollatorSearchTertiaryBase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// should compare base first
	// A Ã a ã O Õ o õ
	assertTrue("a < o", col.compare("a", "o") < 0);
	assertTrue("A < o", col.compare("A", "o") < 0);
	assertTrue("ã < o", col.compare("ã", "o") < 0);
	assertTrue("Ã < o", col.compare("Ã", "o") < 0);

	assertTrue("a < õ", col.compare("a", "õ") < 0);
	assertTrue("A < õ", col.compare("A", "õ") < 0);
	assertTrue("ã < õ", col.compare("ã", "õ") < 0);
	assertTrue("Ã < õ", col.compare("Ã", "õ") < 0);

	assertTrue("a < O", col.compare("a", "O") < 0);
	assertTrue("A < O", col.compare("A", "O") < 0);
	assertTrue("ã < O", col.compare("ã", "O") < 0);
	assertTrue("Ã < O", col.compare("Ã", "O") < 0);

	assertTrue("a < Õ", col.compare("a", "Õ") < 0);
	assertTrue("A < Õ", col.compare("A", "Õ") < 0);
	assertTrue("ã < Õ", col.compare("ã", "Õ") < 0);
	assertTrue("Ã < Õ", col.compare("Ã", "Õ") < 0);
}

function testJSCollatorSearchTertiaryAccent_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// should compare base, then accent
	// a à à å
	// (second "a" with grave is two characters: "a" character with a combining grave character)
	assertTrue("a < à", col.compare("a", "à") < 0);
	assertEquals("à = à (combining)", 0, col.compare("à", "à"));
	assertTrue("à (combining) < å", col.compare("à", "å") < 0);
}

function testJSCollatorSearchTertiaryCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// should compare base, then case, then accent
	// A À À Å a à à å O Õ o õ
	// (second set of "a" with grave is two characters: "a" character with a combining grave character)
	assertTrue("A < À", col.compare("A", "À") < 0);
	assertEquals("À = À (combining)",  0, col.compare("À", "À"));
	assertTrue("À (combining) < Å", col.compare("À", "Å") < 0);
	assertTrue("Å > a", col.compare("Å", "a") > 0);
	assertTrue("a < à", col.compare("a", "à") < 0);
	assertEquals("à = à (combining)",  0, col.compare("à", "à"));
	assertTrue("à (combining) < å", col.compare("à", "å") < 0);
	assertTrue("å < O", col.compare("å", "O") < 0);
	assertTrue("O < Õ", col.compare("O", "Õ") < 0);
	assertTrue("Õ > o", col.compare("Õ", "o") > 0);
	assertTrue("o < õ", col.compare("o", "õ") < 0);
}

function testJSCollatorSearchGetComparatorTertiary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testJSCollatorSearchGetComparatorTertiaryWorks_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

}

function testJSCollatorSearchGetComparatorTertiaryWorksWithCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

	// should compare base, then case, then accent
	// A À À Å a à à å O Õ o õ
	// (second set of "a" with grave is two characters: "a" character with a combining grave character)
	assertTrue("A < À", func("A", "À") < 0);
	assertEquals("À = À (combining)",  0, func("À", "À"));
	assertTrue("À (combining) < Å", func("À", "Å") < 0);
	assertTrue("Å > a", func("Å", "a") > 0);
	assertTrue("a < à", func("a", "à") < 0);
	assertEquals("à = à (combining)",  0, func("à", "à"));
	assertTrue("à (combining) < å", func("à", "å") < 0);
	assertTrue("å < O", func("å", "O") < 0);
	assertTrue("O < Õ", func("O", "Õ") < 0);
	assertTrue("Õ > o", func("Õ", "o") > 0);
	assertTrue("o < õ", func("o", "õ") < 0);
}

function testJSCollatorSearchGetSortKeyTertiary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("3313413212912e1271", col.sortKey("string"));
}

function testJSCollatorSearchGetSortKeyTertiaryWithAccentsAndCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("3303413212992e1271", col.sortKey("Strïng"));
}

function testJSCollatorSearchGetSortKeyTertiaryWorks_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("string", col.sortKey("string"), col.sortKey("string"));
	// A À À Å a à à å O Õ o õ
	assertTrue("A < À", col.sortKey("A") < col.sortKey("À"));
	assertTrue("À = À (combining)", col.sortKey("À") === col.sortKey("À"));
	assertTrue("À (combining) < Å", col.sortKey("À") < col.sortKey("Å"));
	assertTrue("Å > a", col.sortKey("Å") > col.sortKey("a"));
	assertTrue("a < à", col.sortKey("a") < col.sortKey("à"));
	assertTrue("à = à (combining)", col.sortKey("à") === col.sortKey("à"));
	assertTrue("à (combining) < å", col.sortKey("à") < col.sortKey("å"));
	assertTrue("å < O", col.sortKey("å") < col.sortKey("O"));
	assertTrue("O < Õ", col.sortKey("O") < col.sortKey("Õ"));
	assertTrue("Õ > o", col.sortKey("Õ") > col.sortKey("o"));
	assertTrue("o < õ", col.sortKey("o") < col.sortKey("õ"));
}


function testJSCollatorSearchQuaternaryEqual_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// should compare base first
	assertEquals("a = a", 0, col.compare("a", "a"));
	assertEquals("å = å", 0, col.compare("å", "å"));
	assertEquals("A = A", 0, col.compare("A", "A"));
	assertEquals("Ã = Ã", 0, col.compare("Ã", "Ã"));
	assertEquals("à = à", 0, col.compare("à", "à"));
}

function testJSCollatorSearchQuaternaryBase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// should compare base first
	// A Ã a ã O Õ o õ
	assertTrue("a < o", col.compare("a", "o") < 0);
	assertTrue("A < o", col.compare("A", "o") < 0);
	assertTrue("ã < o", col.compare("ã", "o") < 0);
	assertTrue("Ã < o", col.compare("Ã", "o") < 0);

	assertTrue("a < õ", col.compare("a", "õ") < 0);
	assertTrue("A < õ", col.compare("A", "õ") < 0);
	assertTrue("ã < õ", col.compare("ã", "õ") < 0);
	assertTrue("Ã < õ", col.compare("Ã", "õ") < 0);

	assertTrue("a < O", col.compare("a", "O") < 0);
	assertTrue("A < O", col.compare("A", "O") < 0);
	assertTrue("ã < O", col.compare("ã", "O") < 0);
	assertTrue("Ã < O", col.compare("Ã", "O") < 0);

	assertTrue("a < Õ", col.compare("a", "Õ") < 0);
	assertTrue("A < Õ", col.compare("A", "Õ") < 0);
	assertTrue("ã < Õ", col.compare("ã", "Õ") < 0);
	assertTrue("Ã < Õ", col.compare("Ã", "Õ") < 0);
}

function testJSCollatorSearchQuaternaryAccent_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// should compare base, then accent
	// a à à å
	// (second "a" with grave is two characters: "a" character with a combining grave character)
	assertTrue("a < à", col.compare("a", "à") < 0);
	assertTrue("à < à (combining)", col.compare("à", "à") < 0);
	assertTrue("à (combining) < å", col.compare("à", "å") < 0);
}

function testJSCollatorSearchQuaternaryCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// should compare base, then case, then accent
	// A À À Å a à à å O Õ o õ
	// (second set of "a" with grave is two characters: "a" character with a combining grave character)
	assertTrue("A < À", col.compare("A", "À") < 0);
	assertTrue("À < À (combining)", col.compare("À", "À") < 0);
	assertTrue("À (combining) < Å", col.compare("À", "Å") < 0);
	assertTrue("Å > a", col.compare("Å", "a") > 0);
	assertTrue("a < à", col.compare("a", "à") < 0);
	assertTrue("à < à (combining)", col.compare("à", "à") < 0);
	assertTrue("à (combining) < å", col.compare("à", "å") < 0);
	assertTrue("å < O", col.compare("å", "O") < 0);
	assertTrue("O < Õ", col.compare("O", "Õ") < 0);
	assertTrue("Õ > o", col.compare("Õ", "o") > 0);
	assertTrue("o < õ", col.compare("o", "õ") < 0);
}

function testJSCollatorSearchGetComparatorQuaternary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testJSCollatorSearchGetComparatorQuaternaryWorks_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

}

function testJSCollatorSearchGetComparatorQuaternaryWorksWithCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

	// should compare base, then case, then accent
	// A À À Å a à à å O Õ o õ
	// (second set of "a" with grave is two characters: "a" character with a combining grave character)
	assertTrue("A < À", func("A", "À") < 0);
	assertTrue("À < À (combining)", func("À", "À") < 0);
	assertTrue("À (combining) < Å", func("À", "Å") < 0);
	assertTrue("Å > a", func("Å", "a") > 0);
	assertTrue("a < à", func("a", "à") < 0);
	assertTrue("à < à (combining)", func("à", "à") < 0);
	assertTrue("à (combining) < å", func("à", "å") < 0);
	assertTrue("å < O", func("å", "O") < 0);
	assertTrue("O < Õ", func("O", "Õ") < 0);
	assertTrue("Õ > o", func("Õ", "o") > 0);
	assertTrue("o < õ", func("o", "õ") < 0);
}

function testJSCollatorSearchGetSortKeyQuaternary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("6626826425225c24e2", col.sortKey("string"));
}

function testJSCollatorSearchGetSortKeyQuaternaryWithAccentsAndCase_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("6606826425335c24e2", col.sortKey("Strïng"));
}

function testJSCollatorSearchGetSortKeyQuaternaryWorks_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("string", col.sortKey("string"), col.sortKey("string"));
	// A À À Å a à à å O Õ o õ
	assertTrue("A < À", col.sortKey("A") < col.sortKey("À"));
	assertTrue("À < À (combining)", col.sortKey("À") < col.sortKey("À"));
	assertTrue("À (combining) < Å", col.sortKey("À") < col.sortKey("Å"));
	assertTrue("Å > a", col.sortKey("Å") > col.sortKey("a"));
	assertTrue("a < à", col.sortKey("a") < col.sortKey("à"));
	assertTrue("à < à (combining)", col.sortKey("à") < col.sortKey("à"));
	assertTrue("à (combining) < å", col.sortKey("à") < col.sortKey("å"));
	assertTrue("å < O", col.sortKey("å") < col.sortKey("O"));
	assertTrue("O < Õ", col.sortKey("O") < col.sortKey("Õ"));
	assertTrue("Õ > o", col.sortKey("Õ") > col.sortKey("o"));
	assertTrue("o < õ", col.sortKey("o") < col.sortKey("õ"));
}


function testCollatorJSWithSortPrimary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryStable_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	// input array order should not matter
	var input = ["strïng", "Strïng", "StrinG", "Strïng", "str", "String", "strïng", "strïnG", "string"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryLowerFirst_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary",
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["str", "string", "strïng", "strïnG", "strïng", "String", "StrinG", "Strïng", "Strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverse_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary",
		reverse: true
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["strïng", "strïng", "strïnG", "string", "str", "Strïng", "Strïng", "String", "StrinG"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverseLowerFirst_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary",
		reverse: true,
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["Strïng", "Strïng", "StrinG", "String", "strïng", "strïnG", "strïng", "string", "str"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortSecondary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "secondary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortTertiary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "tertiary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}


function testCollatorJSWithSortWithSortKeys_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

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

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortUpperFirst_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		upperFirst: true
	});
	assertNotUndefined(col);

	var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

	input.sort(col.getComparator());

	var expected = ["E", "e", "I", "i", "o", "p", "q", "r", "T", "U"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortUpperNotFirst_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

	input.sort(col.getComparator());

	var expected = ["e", "E", "i", "I", "o", "p", "q", "r", "T", "U"];

	assertArrayEquals(expected, input);
}

function testJSCollatorSortGetSortKeyReversePrimary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		usage: "search",
		reverse: true,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	assertEquals("cdccced7d2d9", col.sortKey("string"));
}

function testJSCollatorSortGetSortKeyReverseQuaternary_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		usage: "search",
		reverse: true,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	assertEquals("99e97e9beadea3eb1e", col.sortKey("string"));
}

function testCollatorJSWithSortWithSortKeysReverse_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "primary",
		reverse: true
	});
	assertNotUndefined(col);

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

	assertArrayEquals(expected, input);
}


function testJSCollatorIgnorePunctuation_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		ignorePunctuation: true
	});

	assertNotUndefined(col);

	assertEquals(0, col.compare("string", "'st,ri-ng"));
}

function testJSCollatorIgnorePunctuationNoPunct_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		ignorePunctuation: true
	});

	assertNotUndefined(col);

	assertEquals(0, col.compare("string", "string"));
}

function testJSCollatorIgnorePunctuationSortKey_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		ignorePunctuation: true
	});

	assertNotUndefined(col);

	assertEquals("6606826425225c24e2", col.sortKey("-@#%St-ring-#@%"));
}

function testJSCollatorNumeric_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertEquals(0, col.compare("00123.4", "123.4"));
}

function testJSCollatorNumericNoNumbers_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("asdf", "fooo") < 0);
}

function testJSCollatorNumericLeftNumber_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("1", "fooo") < 0);
}

function testJSCollatorNumericRightNumber_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("asdf", "231234") > 0);
}

function testJSCollatorWithThousandsSeparator_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertEquals(0, col.compare("12.454.454,4", "0.012.454.454,4"));
}

function testJSCollatorNumeric1_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("10", "1") > 0);
}

function testJSCollatorNumeric2_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("100", "10") > 0);
}

function testJSCollatorNumeric3_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("100", "99") > 0);
}

function testJSCollatorNumeric4_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("100", "99,9") > 0);
}

function testJSCollatorNumericWithText_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("1 box", "2 boxes") < 0);
}

function testJSCollatorNumericWithText_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("20 boxes", "2 boxes") > 0);
}

function testJSCollatorNumericWithText2_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("20,1 boxes", "201 boxes") < 0);
}

function testJSCollatorNumericSortKey1_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertEquals("0000000000000001", col.sortKey("1"));
}

function testJSCollatorNumericSortKey255_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertEquals("00000000000000ff", col.sortKey("255"));
}

function testJSCollatorNumericSortKeyBig_it() {
	var col = new ilib.Collator({
		locale: "it-IT",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertEquals("00000fadaa62dfa1", col.sortKey("17238562365345"));
}


function testCollatorJSWithSortPrimary_af() {
	var col = new ilib.Collator({
		locale: "af-ZA",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryStable_af() {
	var col = new ilib.Collator({
		locale: "af-ZA",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	// input array order should not matter
	var input = ["strïng", "Strïng", "StrinG", "Strïng", "str", "String", "strïng", "strïnG", "string"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryLowerFirst_af() {
	var col = new ilib.Collator({
		locale: "af-ZA",
		useNative: false,
		sensitivity: "primary",
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["str", "string", "strïng", "strïnG", "strïng", "String", "StrinG", "Strïng", "Strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverse_af() {
	var col = new ilib.Collator({
		locale: "af-ZA",
		useNative: false,
		sensitivity: "primary",
		reverse: true
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["strïng", "strïng", "strïnG", "string", "str", "Strïng", "Strïng", "String", "StrinG"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverseLowerFirst_af() {
	var col = new ilib.Collator({
		locale: "af-ZA",
		useNative: false,
		sensitivity: "primary",
		reverse: true,
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["Strïng", "Strïng", "StrinG", "String", "strïng", "strïnG", "strïng", "string", "str"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortSecondary_af() {
	var col = new ilib.Collator({
		locale: "af-ZA",
		useNative: false,
		sensitivity: "secondary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortTertiary_af() {
	var col = new ilib.Collator({
		locale: "af-ZA",
		useNative: false,
		sensitivity: "tertiary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}


function testCollatorJSWithSortPrimary_eu() {
	var col = new ilib.Collator({
		locale: "eu-ES",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryStable_eu() {
	var col = new ilib.Collator({
		locale: "eu-ES",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	// input array order should not matter
	var input = ["strïng", "Strïng", "StrinG", "Strïng", "str", "String", "strïng", "strïnG", "string"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryLowerFirst_eu() {
	var col = new ilib.Collator({
		locale: "eu-ES",
		useNative: false,
		sensitivity: "primary",
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["str", "string", "strïng", "strïnG", "strïng", "String", "StrinG", "Strïng", "Strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverse_eu() {
	var col = new ilib.Collator({
		locale: "eu-ES",
		useNative: false,
		sensitivity: "primary",
		reverse: true
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["strïng", "strïng", "strïnG", "string", "str", "Strïng", "Strïng", "String", "StrinG"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverseLowerFirst_eu() {
	var col = new ilib.Collator({
		locale: "eu-ES",
		useNative: false,
		sensitivity: "primary",
		reverse: true,
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["Strïng", "Strïng", "StrinG", "String", "strïng", "strïnG", "strïng", "string", "str"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortSecondary_eu() {
	var col = new ilib.Collator({
		locale: "eu-ES",
		useNative: false,
		sensitivity: "secondary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortTertiary_eu() {
	var col = new ilib.Collator({
		locale: "eu-ES",
		useNative: false,
		sensitivity: "tertiary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}


function testCollatorJSWithSortPrimary_ca() {
	var col = new ilib.Collator({
		locale: "ca-ES",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryStable_ca() {
	var col = new ilib.Collator({
		locale: "ca-ES",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	// input array order should not matter
	var input = ["strïng", "Strïng", "StrinG", "Strïng", "str", "String", "strïng", "strïnG", "string"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryLowerFirst_ca() {
	var col = new ilib.Collator({
		locale: "ca-ES",
		useNative: false,
		sensitivity: "primary",
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["str", "string", "strïng", "strïnG", "strïng", "String", "StrinG", "Strïng", "Strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverse_ca() {
	var col = new ilib.Collator({
		locale: "ca-ES",
		useNative: false,
		sensitivity: "primary",
		reverse: true
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["strïng", "strïng", "strïnG", "string", "str", "Strïng", "Strïng", "String", "StrinG"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverseLowerFirst_ca() {
	var col = new ilib.Collator({
		locale: "ca-ES",
		useNative: false,
		sensitivity: "primary",
		reverse: true,
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["Strïng", "Strïng", "StrinG", "String", "strïng", "strïnG", "strïng", "string", "str"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortSecondary_ca() {
	var col = new ilib.Collator({
		locale: "ca-ES",
		useNative: false,
		sensitivity: "secondary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortTertiary_ca() {
	var col = new ilib.Collator({
		locale: "ca-ES",
		useNative: false,
		sensitivity: "tertiary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}


function testCollatorJSWithSortPrimary_nl() {
	var col = new ilib.Collator({
		locale: "nl-NL",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryStable_nl() {
	var col = new ilib.Collator({
		locale: "nl-NL",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	// input array order should not matter
	var input = ["strïng", "Strïng", "StrinG", "Strïng", "str", "String", "strïng", "strïnG", "string"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryLowerFirst_nl() {
	var col = new ilib.Collator({
		locale: "nl-NL",
		useNative: false,
		sensitivity: "primary",
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["str", "string", "strïng", "strïnG", "strïng", "String", "StrinG", "Strïng", "Strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverse_nl() {
	var col = new ilib.Collator({
		locale: "nl-NL",
		useNative: false,
		sensitivity: "primary",
		reverse: true
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["strïng", "strïng", "strïnG", "string", "str", "Strïng", "Strïng", "String", "StrinG"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverseLowerFirst_nl() {
	var col = new ilib.Collator({
		locale: "nl-NL",
		useNative: false,
		sensitivity: "primary",
		reverse: true,
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["Strïng", "Strïng", "StrinG", "String", "strïng", "strïnG", "strïng", "string", "str"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortSecondary_nl() {
	var col = new ilib.Collator({
		locale: "nl-NL",
		useNative: false,
		sensitivity: "secondary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortTertiary_nl() {
	var col = new ilib.Collator({
		locale: "nl-NL",
		useNative: false,
		sensitivity: "tertiary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}


function testCollatorJSWithSortPrimary_gl() {
	var col = new ilib.Collator({
		locale: "gl-ES",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryStable_gl() {
	var col = new ilib.Collator({
		locale: "gl-ES",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	// input array order should not matter
	var input = ["strïng", "Strïng", "StrinG", "Strïng", "str", "String", "strïng", "strïnG", "string"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryLowerFirst_gl() {
	var col = new ilib.Collator({
		locale: "gl-ES",
		useNative: false,
		sensitivity: "primary",
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["str", "string", "strïng", "strïnG", "strïng", "String", "StrinG", "Strïng", "Strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverse_gl() {
	var col = new ilib.Collator({
		locale: "gl-ES",
		useNative: false,
		sensitivity: "primary",
		reverse: true
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["strïng", "strïng", "strïnG", "string", "str", "Strïng", "Strïng", "String", "StrinG"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverseLowerFirst_gl() {
	var col = new ilib.Collator({
		locale: "gl-ES",
		useNative: false,
		sensitivity: "primary",
		reverse: true,
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["Strïng", "Strïng", "StrinG", "String", "strïng", "strïnG", "strïng", "string", "str"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortSecondary_gl() {
	var col = new ilib.Collator({
		locale: "gl-ES",
		useNative: false,
		sensitivity: "secondary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortTertiary_gl() {
	var col = new ilib.Collator({
		locale: "gl-ES",
		useNative: false,
		sensitivity: "tertiary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}


function testCollatorJSWithSortPrimary_id() {
	var col = new ilib.Collator({
		locale: "id-ID",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryStable_id() {
	var col = new ilib.Collator({
		locale: "id-ID",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	// input array order should not matter
	var input = ["strïng", "Strïng", "StrinG", "Strïng", "str", "String", "strïng", "strïnG", "string"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryLowerFirst_id() {
	var col = new ilib.Collator({
		locale: "id-ID",
		useNative: false,
		sensitivity: "primary",
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["str", "string", "strïng", "strïnG", "strïng", "String", "StrinG", "Strïng", "Strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverse_id() {
	var col = new ilib.Collator({
		locale: "id-ID",
		useNative: false,
		sensitivity: "primary",
		reverse: true
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["strïng", "strïng", "strïnG", "string", "str", "Strïng", "Strïng", "String", "StrinG"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverseLowerFirst_id() {
	var col = new ilib.Collator({
		locale: "id-ID",
		useNative: false,
		sensitivity: "primary",
		reverse: true,
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["Strïng", "Strïng", "StrinG", "String", "strïng", "strïnG", "strïng", "string", "str"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortSecondary_id() {
	var col = new ilib.Collator({
		locale: "id-ID",
		useNative: false,
		sensitivity: "secondary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortTertiary_id() {
	var col = new ilib.Collator({
		locale: "id-ID",
		useNative: false,
		sensitivity: "tertiary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}


function testCollatorJSWithSortPrimary_ms() {
	var col = new ilib.Collator({
		locale: "ms-MY",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryStable_ms() {
	var col = new ilib.Collator({
		locale: "ms-MY",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	// input array order should not matter
	var input = ["strïng", "Strïng", "StrinG", "Strïng", "str", "String", "strïng", "strïnG", "string"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryLowerFirst_ms() {
	var col = new ilib.Collator({
		locale: "ms-MY",
		useNative: false,
		sensitivity: "primary",
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["str", "string", "strïng", "strïnG", "strïng", "String", "StrinG", "Strïng", "Strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverse_ms() {
	var col = new ilib.Collator({
		locale: "ms-MY",
		useNative: false,
		sensitivity: "primary",
		reverse: true
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["strïng", "strïng", "strïnG", "string", "str", "Strïng", "Strïng", "String", "StrinG"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverseLowerFirst_ms() {
	var col = new ilib.Collator({
		locale: "ms-MY",
		useNative: false,
		sensitivity: "primary",
		reverse: true,
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["Strïng", "Strïng", "StrinG", "String", "strïng", "strïnG", "strïng", "string", "str"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortSecondary_ms() {
	var col = new ilib.Collator({
		locale: "ms-MY",
		useNative: false,
		sensitivity: "secondary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortTertiary_ms() {
	var col = new ilib.Collator({
		locale: "ms-MY",
		useNative: false,
		sensitivity: "tertiary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}


function testCollatorJSWithSortPrimary_pt() {
	var col = new ilib.Collator({
		locale: "pt-BR",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryStable_pt() {
	var col = new ilib.Collator({
		locale: "pt-BR",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	// input array order should not matter
	var input = ["strïng", "Strïng", "StrinG", "Strïng", "str", "String", "strïng", "strïnG", "string"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryLowerFirst_pt() {
	var col = new ilib.Collator({
		locale: "pt-BR",
		useNative: false,
		sensitivity: "primary",
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["str", "string", "strïng", "strïnG", "strïng", "String", "StrinG", "Strïng", "Strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverse_pt() {
	var col = new ilib.Collator({
		locale: "pt-BR",
		useNative: false,
		sensitivity: "primary",
		reverse: true
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["strïng", "strïng", "strïnG", "string", "str", "Strïng", "Strïng", "String", "StrinG"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverseLowerFirst_pt() {
	var col = new ilib.Collator({
		locale: "pt-BR",
		useNative: false,
		sensitivity: "primary",
		reverse: true,
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["Strïng", "Strïng", "StrinG", "String", "strïng", "strïnG", "strïng", "string", "str"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortSecondary_pt() {
	var col = new ilib.Collator({
		locale: "pt-BR",
		useNative: false,
		sensitivity: "secondary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortTertiary_pt() {
	var col = new ilib.Collator({
		locale: "pt-BR",
		useNative: false,
		sensitivity: "tertiary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}


function testCollatorJSWithSortPrimary_sw() {
	var col = new ilib.Collator({
		locale: "sw-TZ",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryStable_sw() {
	var col = new ilib.Collator({
		locale: "sw-TZ",
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	// input array order should not matter
	var input = ["strïng", "Strïng", "StrinG", "Strïng", "str", "String", "strïng", "strïnG", "string"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryLowerFirst_sw() {
	var col = new ilib.Collator({
		locale: "sw-TZ",
		useNative: false,
		sensitivity: "primary",
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["str", "string", "strïng", "strïnG", "strïng", "String", "StrinG", "Strïng", "Strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverse_sw() {
	var col = new ilib.Collator({
		locale: "sw-TZ",
		useNative: false,
		sensitivity: "primary",
		reverse: true
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["strïng", "strïng", "strïnG", "string", "str", "Strïng", "Strïng", "String", "StrinG"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryReverseLowerFirst_sw() {
	var col = new ilib.Collator({
		locale: "sw-TZ",
		useNative: false,
		sensitivity: "primary",
		reverse: true,
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["Strïng", "Strïng", "StrinG", "String", "strïng", "strïnG", "strïng", "string", "str"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortSecondary_sw() {
	var col = new ilib.Collator({
		locale: "sw-TZ",
		useNative: false,
		sensitivity: "secondary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortTertiary_sw() {
	var col = new ilib.Collator({
		locale: "sw-TZ",
		useNative: false,
		sensitivity: "tertiary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	// no change from primary
	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}


