/*
 * testcollation.js - test the Collator object
 * 
 * Copyright © 2013-2015, JEDLSoft
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

function testCodePointSourceConstructor() {
	var cps = new ilib.CodePointSource("abc");

	assertNotUndefined(cps);
}

function testCodePointSourcePeek4() {
	var cps = new ilib.CodePointSource("abcdefghi");

	assertNotUndefined(cps);

	assertEquals("abcd", cps.peek(4));
}
function testCodePointSourcePeek3() {
	var cps = new ilib.CodePointSource("abcdefghi");

	assertNotUndefined(cps);

	assertEquals("abc", cps.peek(3));
}
function testCodePointSourcePeek2() {
	var cps = new ilib.CodePointSource("abcdefghi");

	assertNotUndefined(cps);

	assertEquals("ab", cps.peek(2));
}
function testCodePointSourcePeek1() {
	var cps = new ilib.CodePointSource("abcdefghi");

	assertNotUndefined(cps);

	assertEquals("a", cps.peek(1));
}
function testCodePointSourceConsume1() {
	var cps = new ilib.CodePointSource("abcdefghi");

	assertNotUndefined(cps);

	assertEquals("a", cps.peek(1));
	cps.consume(1);
	assertEquals("b", cps.peek(1));
}
function testCodePointSourceConsume2() {
	var cps = new ilib.CodePointSource("abcdefghi");

	assertNotUndefined(cps);

	assertEquals("ab", cps.peek(2));
	cps.consume(2);
	assertEquals("cd", cps.peek(2));
}
function testCodePointSourceConsume3() {
	var cps = new ilib.CodePointSource("abcdefghi");

	assertNotUndefined(cps);

	assertEquals("abc", cps.peek(3));
	cps.consume(3);
	assertEquals("def", cps.peek(3));
}
function testCodePointSourceConsume4() {
	var cps = new ilib.CodePointSource("abcdefghi");

	assertNotUndefined(cps);

	assertEquals("abcd", cps.peek(4));
	cps.consume(4);
	assertEquals("efgh", cps.peek(4));
}

function testCodePointSourcePeekWithSurrogates() {
	var cps = new ilib.CodePointSource("a\uD800\uDF02b\uD800\uDC00");

	assertNotUndefined(cps);

	assertEquals("a\uD800\uDF02", cps.peek(2));
}
function testCodePointSourceConsumeWithSurrogates() {
	var cps = new ilib.CodePointSource("a\uD800\uDF02b\uD800\uDC00");

	assertNotUndefined(cps);

	assertEquals("a\uD800\uDF02", cps.peek(2));
	cps.consume(2);
	assertEquals("b\uD800\uDC00", cps.peek(2));
}
function testCodePointSourcePeekWithCombiningAccents() {
	// this is A with 2 combining accents
	var cps = new ilib.CodePointSource("aẬa");

	assertNotUndefined(cps);

	// this A is precomposed with one of the accents and is combined
	// with the other
	assertEquals("aẬa", cps.peek(3));
}
function testCodePointSourceConsumeWithCombiningAccents() {
	// this is A with 2 combining accents
	var cps = new ilib.CodePointSource("aẬaẬaa");

	assertNotUndefined(cps);

	// this A is precomposed with one of the accents and is combined
	// with the other
	assertEquals("aẬa", cps.peek(3));
	cps.consume(3);
	assertEquals("Ậaa", cps.peek(3));
}

function testCodePointSourcePeekNotEnough() {
	var cps = new ilib.CodePointSource("abc");

	assertNotUndefined(cps);

	assertUndefined(cps.peek(4));
}
function testCodePointSourcePeekJustEnough() {
	var cps = new ilib.CodePointSource("abc");

	assertNotUndefined(cps);

	assertEquals("abc", cps.peek(3));
}
function testCodePointSourceIterateToEmpty() {
	var cps = new ilib.CodePointSource("abcdef");

	assertNotUndefined(cps);
	assertEquals("abc", cps.peek(3));
	cps.consume(3);
	assertEquals("de", cps.peek(2));
	cps.consume(2);
	assertUndefined(cps.peek(4));
	assertUndefined(cps.peek(3));
	assertUndefined(cps.peek(2));
	assertEquals("f", cps.peek(1));
	cps.consume(1);
	assertUndefined(cps.peek(4));
	assertUndefined(cps.peek(3));
	assertUndefined(cps.peek(2));
	assertUndefined(cps.peek(1));
}
function testCodePointSourcePeekZero() {
	var cps = new ilib.CodePointSource("abc");

	assertNotUndefined(cps);

	assertUndefined(cps.peek(0));
}
function testCodePointSourceConsumeZero() {
	var cps = new ilib.CodePointSource("abc");

	assertNotUndefined(cps);

	assertEquals("a", cps.peek(1));
	cps.consume(0);
	assertEquals("a", cps.peek(1));
}
function testCodePointSourceConsumeAllRemaining() {
	var cps = new ilib.CodePointSource("abc");

	assertNotUndefined(cps);

	assertEquals("abc", cps.peek(3));
	cps.consume(4);
	assertUndefined(cps.peek(4));
	assertUndefined(cps.peek(3));
	assertUndefined(cps.peek(2));
	assertUndefined(cps.peek(1));
}
function testCodePointSourceConsumeWithoutPeek() {
	var cps = new ilib.CodePointSource("abcdef");

	assertNotUndefined(cps);
	cps.consume(3);
	assertEquals("def", cps.peek(3));
}


function testElementIteratorConstructor() {
	var cps = new ilib.CodePointSource("abcdef");
	var map = {
			"a": [0],
			"b": [1],
			"c": [2],
			"d": [3],
			"e": [4],
			"f": [5]
	};
	var ei = new ilib.ElementIterator(cps, map, 3);

	assertNotUndefined(ei);
}

function testElementIteratorHasNext() {
	var cps = new ilib.CodePointSource("abcdef");
	var map = {
			"a": [0],
			"b": [1],
			"c": [2],
			"d": [3],
			"e": [4],
			"f": [5]
	};
	var ei = new ilib.ElementIterator(cps, map, 3);
	assertNotUndefined(ei);

	assertTrue(ei.hasNext());
}
function testElementIteratorHasNextStringDone() {
	var cps = new ilib.CodePointSource("abc");
	var map = {
			"a": [0],
			"b": [1],
			"c": [2],
			"d": [3],
			"e": [4],
			"f": [5]
	};
	cps.consume(3);
	var ei = new ilib.ElementIterator(cps, map, 3);
	assertNotUndefined(ei);

	assertFalse(ei.hasNext());
}
function testElementIteratorNext() {
	var cps = new ilib.CodePointSource("abc");
	var map = {
			"a": [0],
			"b": [1],
			"c": [2],
			"d": [3],
			"e": [4],
			"f": [5]
	};
	var ei = new ilib.ElementIterator(cps, map, 3);
	assertNotUndefined(ei);

	assertTrue(ei.hasNext());
	assertEquals(0, ei.next());
	assertTrue(ei.hasNext());
	assertEquals(1, ei.next());
	assertTrue(ei.hasNext());
	assertEquals(2, ei.next());
	assertFalse(ei.hasNext());
}
function testElementIteratorNextExhaustCodePoints() {
	var cps = new ilib.CodePointSource("abc");
	var map = {
			"a": [0],
			"b": [1],
			"c": [2],
			"d": [3],
			"e": [4],
			"f": [5]
	};
	var ei = new ilib.ElementIterator(cps, map, 3);
	assertNotUndefined(ei);

	assertTrue(ei.hasNext());
	assertEquals(0, ei.next());
	assertEquals(1, ei.next());
	assertEquals(2, ei.next());
	assertFalse(ei.hasNext());
	assertUndefined(ei.next());
}

function testElementIteratorExpansions() {
	var cps = new ilib.CodePointSource("abc");
	var map = {
			"a": [0,1],
			"b": [1],
			"c": [2,1],
			"d": [3],
			"e": [4],
			"f": [5]
	};
	var ei = new ilib.ElementIterator(cps, map, 3);
	assertNotUndefined(ei);

	assertTrue(ei.hasNext());
	assertEquals(0, ei.next());
	assertEquals(1, ei.next());
	assertEquals(1, ei.next());
	assertEquals(2, ei.next());
	assertEquals(1, ei.next());
	assertFalse(ei.hasNext());
	assertUndefined(ei.next());
}
function testElementIteratorContractions() {
	var cps = new ilib.CodePointSource("abc");
	var map = {
			"ab": [0],
			"b": [1],  // ab should take precendence over plain b
			"c": [2],
			"d": [3],
			"e": [4],
			"f": [5]
	};
	var ei = new ilib.ElementIterator(cps, map, 3);
	assertNotUndefined(ei);

	assertTrue(ei.hasNext());
	assertEquals(0, ei.next());
	assertEquals(2, ei.next());
	assertFalse(ei.hasNext());
	assertUndefined(ei.next());
}
function testElementIteratorContractions2() {
	var cps = new ilib.CodePointSource("aẬbAÂaa");
	var map = {
			"a": [0],
			"A": [4],
			"Â": [5],
			"Ậ": [6],  // actually an A with circumflex character plus a combining dot blow character
			"b": [8],
			"c": [16],
			"d": [24],
			"e": [32],
			"f": [40]
	};
	var ei = new ilib.ElementIterator(cps, map, 6);
	assertNotUndefined(ei);

	assertTrue(ei.hasNext());
	assertEquals(0, ei.next());
	assertEquals(6, ei.next());
	assertEquals(8, ei.next());
	assertEquals(4, ei.next());
	assertEquals(5, ei.next());
	assertEquals(0, ei.next());
	assertEquals(0, ei.next());
	assertFalse(ei.hasNext());
	assertUndefined(ei.next());
}

function testElementIteratorHasNextEmptyString() {
	var cps = new ilib.CodePointSource("");
	var map = {
			"a": [0],
			"b": [1],
			"c": [2],
			"d": [3],
			"e": [4],
			"f": [5]
	};
	var ei = new ilib.ElementIterator(cps, map, 3);
	assertNotUndefined(ei);

	assertFalse(ei.hasNext());
}
function testElementIteratorNextEmptyString() {
	var cps = new ilib.CodePointSource("");
	var map = {
			"a": [0],
			"b": [1],
			"c": [2],
			"d": [3],
			"e": [4],
			"f": [5]
	};
	var ei = new ilib.ElementIterator(cps, map, 3);
	assertNotUndefined(ei);

	assertUndefined(ei.next());
}

function testElementIteratorNonMapCharacter() {
	var cps = new ilib.CodePointSource("abcq");
	var map = {
			"a": [0],
			"b": [1],
			"c": [2],
			"d": [3],
			"e": [4],
			"f": [5]
	};
	var ei = new ilib.ElementIterator(cps, map, 3);
	assertNotUndefined(ei);

	assertTrue(ei.hasNext());
	assertEquals(0, ei.next());
	assertEquals(1, ei.next());
	assertEquals(2, ei.next());
	assertEquals(904, ei.next());
	assertFalse(ei.hasNext());
	assertUndefined(ei.next());
}



function testCollatorConstructorNative() {
	var col = new ilib.Collator();

	assertNotUndefined(col);
}

function testCollatorDefaultNative() {
	var col = new ilib.Collator();

	assertNotUndefined(col);

	// should compare in English
	assertEquals("equality", 0, col.compare("string", "string"));
	assertTrue("a < b", col.compare("a", "b") < 0);
	assertTrue("b < c", col.compare("b", "c") < 0);
	assertTrue("c < z", col.compare("c", "z") < 0);
}

function testCollatorDefaultCase() {
	var col = new ilib.Collator();

	assertNotUndefined(col);

	// netscape and ie do not work properly
	var browser = ilib._getBrowser();
	if (browser === "firefox" || browser === "ie") {
		// should compare lower-case first within a base character
		assertTrue("a < A", col.compare("a", "A") < 0);
		assertTrue("b < B", col.compare("b", "B") < 0);
		assertTrue("a < Z", col.compare("a", "Z") < 0);
		assertTrue("a < Á", col.compare("a", "Á") < 0);
	} else {
		// should compare upper-case first within a base character
		assertTrue("A < a", col.compare("A", "a") < 0);
		assertTrue("B < b", col.compare("B", "b") < 0);
		assertTrue("a < Z", col.compare("a", "Z") < 0);
		assertTrue("a < Á", col.compare("a", "Á") < 0); // accent is more important than case
	}
}

function testCollatorGetComparator() {
	var col = new ilib.Collator();

	assertNotUndefined(col);

	// should compare in English
	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testCollatorGetComparatorWorks() {
	var col = new ilib.Collator();

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

	// should compare in English
	assertEquals("equality", 0, func("string", "string"));
	assertTrue("a < b", func("a", "b") < 0);
	assertTrue("b < c", func("b", "c") < 0);
	assertTrue("c < z", func("c", "z") < 0);
}

function testCollatorGetComparatorWorksWithCase() {
	var col = new ilib.Collator();

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

	// netscape and ie do not work properly
	var browser = ilib._getBrowser();
	if (browser === "firefox" || browser === "ie") {
		// should compare lower-case first within a base character
		assertTrue("a < A", func("a", "A") < 0);
		assertTrue("b < B", func("b", "B") < 0);
		assertTrue("a < Z", func("a", "Z") < 0);
		assertTrue("a < Á", func("a", "Á") < 0);
	} else {
		// should compare upper-case first
		assertTrue("A < a", func("A", "a") < 0);
		assertTrue("B < b", func("B", "b") < 0);
		assertTrue("a < Z", func("a", "Z") < 0);
		assertTrue("a < Á", func("a", "Á") < 0); // accent is more important than case
	}
}

function testCollatorConstructorJS() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);
}

function testCollatorDefaultJS() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	// should compare in English
	assertEquals("equality", 0, col.compare("string", "string"));
	assertTrue("a < b", col.compare("a", "b") < 0);
	assertTrue("b < c", col.compare("b", "c") < 0);
	assertTrue("c < z", col.compare("c", "z") < 0);
}

function testCollatorDefaultCaseJS() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	// should compare upper-case first within a base character
	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("a < Z", col.compare("a", "Z") < 0);
	assertTrue("Á < a", col.compare("A", "a") < 0);
}

function testCollatorGetComparatorJS() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	// should compare in English
	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testCollatorGetComparatorWorksJS() {
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

function testCollatorGetComparatorWorksWithCaseJS() {
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


function testCollatorGetSortKeyNative() {
	if (typeof(Intl) !== 'undefined' && Intl) {
		var col = new ilib.Collator();

		assertNotUndefined(col);

		// no sort key available when using native...
		assertEquals("string", col.sortKey("string"));
	}
}

function testCollatorGetSortKeySimpleUpper() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	assertEquals("0000200400600800a0", col.sortKey("ABCDEF"));
}
function testCollatorGetSortKeySimpleLower() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	assertEquals("0020220420620820a2", col.sortKey("abcdef"));
}

function testCollatorGetSortKeyMixed() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	assertEquals("2402622221021a20c2", col.sortKey("String"));
}

function testCollatorGetSortKeyWithExpansion() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	// has 2 collation elements for "a" and "e"
	assertEquals("01e082", col.sortKey("æ"));
}

function testCollatorGetSortKeyWithContraction() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	// The à is actually an "a" with a second combining grave 
	// accent character. Together, they should have only 1 
	// collation element because they are normalized to an 
	// a-grave character first.
	assertEquals("007", col.sortKey("à"));
}

function testCollatorGetSortKeyEmpty() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	assertEquals("", col.sortKey(""));
}

function testCollatorGetSortKeyUndefined() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	assertEquals("", col.sortKey(undefined));
}

function testCollatorGetSortKeyDeterministic() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	// should be equal always
	assertTrue(col.sortKey("string") === col.sortKey("string"));
}
function testCollatorGetSortKeyWorks() {
	var col = new ilib.Collator({useNative: false});

	assertNotUndefined(col);

	// should compare in English
	assertTrue("a < b", col.sortKey("a") < col.sortKey("b"));
	assertTrue("b < c", col.sortKey("b") < col.sortKey("c"));
	assertTrue("c < z", col.sortKey("c") < col.sortKey("z"));
}


function testCollatorWithSort() {
	var col = new ilib.Collator();
	assertNotUndefined(col);

	var input = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

	input.sort(col.getComparator());

	var expected = ["e", "i", "o", "p", "q", "r", "t", "u", "w", "y"];

	assertArrayEquals(expected, input);
}

function testCollatorWithSortUpperFirst() {
	var col = new ilib.Collator({
		upperFirst: true
	});
	assertNotUndefined(col);

	var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

	input.sort(col.getComparator());

	var expected;
	// netscape and ie do not work properly
	var browser = ilib._getBrowser();
	if (browser === "firefox" || browser === "ie") {
		// should compare lower-case first within a base character
		expected = ["e", "E", "i", "I", "o", "p", "q", "r", "T", "U"];
	} else {
		expected = ["E", "e", "I", "i", "o", "p", "q", "r", "T", "U"];
	}

	assertArrayEquals(expected, input);
}

function testCollatorWithSortUpperNotFirst() {
	var col = new ilib.Collator({
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

	input.sort(col.getComparator());

	// netscape happens to give the right result here, but not on purpose!
	var expected = ["e", "E", "i", "I", "o", "p", "q", "r", "T", "U"];

	assertArrayEquals(expected, input);
}

function testCollatorWithSortJS() {
	var col = new ilib.Collator({useNative: false});
	assertNotUndefined(col);

	var input = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

	input.sort(col.getComparator());

	var expected = ["e", "i", "o", "p", "q", "r", "t", "u", "w", "y"];

	assertArrayEquals(expected, input);
}

function testCollatorWithSortUpperFirstJS() {
	var col = new ilib.Collator({
		upperFirst: true,
		useNative: false
	});
	assertNotUndefined(col);

	var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

	input.sort(col.getComparator());

	var expected = ["E", "e", "I", "i", "o", "p", "q", "r", "T", "U"];

	assertArrayEquals(expected, input);
}

function testCollatorWithSortUpperNotFirstJS() {
	var col = new ilib.Collator({
		upperFirst: false,
		useNative: false
	});
	assertNotUndefined(col);

	var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

	input.sort(col.getComparator());

	var expected = ["e", "E", "i", "I", "o", "p", "q", "r", "T", "U"];

	assertArrayEquals(expected, input);
}

function testCollatorGetAvailableScripts() {
	assertArrayEquals(["Latn"], ilib.Collator.getAvailableScripts());
}

function testCollatorGetAvailableStyles() {
	assertArrayEquals(["standard"], ilib.Collator.getAvailableStyles());
}

function testCollatorDefaultExtendedChars() {
	// only test on platforms that support the new Intl class natively
	if (typeof(Intl) !== 'undefined') {
		var col = new ilib.Collator();

		assertNotUndefined(col);

		// should compare in English
		assertTrue("e < ë", col.compare("e", "ë") < 0);
		assertTrue("o < ø", col.compare("o", "ø") < 0);
	}
}

function testCollatorPrimaryExtendedChars() {
	// only test on platforms that support the new Intl class natively
	if (typeof(Intl) !== 'undefined') {
		var col = new ilib.Collator({
			sensitivity: "primary",
			usage: "search"
		});

		assertNotUndefined(col);

		// should compare in English
		assertEquals("e = ë", 0, col.compare("e", "ë"));
		assertEquals("o = ø", 0, col.compare("o", "ø"));
	}
}

function testCollatorDefaultExtendedCharsJS() {
	// only test on platforms that support the new Intl class natively
	if (typeof(Intl) !== 'undefined') {
		var col = new ilib.Collator({useNative: false});

		assertNotUndefined(col);

		// should compare in English
		assertTrue("e < ë", col.compare("e", "ë") < 0);
		assertTrue("o < ø", col.compare("o", "ø") < 0);
	}
}

function testCollatorPrimaryExtendedCharsJS() {
	// only test on platforms that support the new Intl class natively
	if (typeof(Intl) !== 'undefined') {
		var col = new ilib.Collator({
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

function testCollatorNativeIsNative() {
	// only test on platforms that support the new Intl class natively
	if (typeof(Intl) !== 'undefined') {
		var col = new ilib.Collator();
		assertNotUndefined(col);
		assertNotUndefined(col.collator);
	}
}

/*
function testCollatorNativefrFRCase() {
	// only test on platforms that support the new Intl class natively
	if (typeof(Intl) !== 'undefined') {
		var col = new ilib.Collator({
			locale: "fr-FR",
			sensitivity: "case"
		});
	    assertNotUndefined(col);

	    var input = [
	        "déjà",
			"Meme",
			"deja",
			"même",
			"dejà",
			"bpef",
			"bœg",
			"Boef",
			"Mémé",
			"boef",
			"bnef",
			"pêche",
			"pèché",
			"pêché",
			"pêche",
			"pêché"
		];

	    input.sort(col.getComparator());

	    var expected = [
			"bnef",
			"Boef",
			"boef",
			"bœg",
			"bpef",
			"déjà",
			"deja",
			"dejà",
			"Meme",
			"Mémé",
			"même",
			"pêche",
			"pèché",
			"pêché",
			"pêche",
			"pêché"
		];

	    assertArrayEquals(expected, input);
	}
}

function testCollatorNativefrFRVariant() {
	// only test on platforms that support the new Intl class natively
	if (typeof(Intl) !== 'undefined') {
		var col = new ilib.Collator({
			locale: "fr-FR",
			sensitivity: "variant",
			frenchAccents: true
		});
	    assertNotUndefined(col);

	    var input = [
	        "déjà",
			"Meme",
			"pèche",
			"deja",
			"même",
			"dejà",
			"pêche",
			"bpef",
			"bœg",
			"pèché",
			"Boef",
			"Mémé",
			"bœf",
			"pêchê",
			"boef",
			"bnef",
			"pêché"
		];

	    input.sort(col.getComparator());

	    // does not deal with french accents properly yet
	    var expected = [
			"bnef",
			"Boef",
			"boef",
			"bœf",
			"bœg",
			"bpef",
			"deja",
			"dejà",
			"déjà",
			"Meme",
			"Mémé",
			"même",
			"pèche",
			"pèché",
			"pêche",
			"pêché",
			"pêchê"
		];

	    assertArrayEquals(expected, input);
	}
}

function testCollatorNativefrCACase() {
	// only test on platforms that support the new Intl class natively
	if (typeof(Intl) !== 'undefined') {
		var col = new ilib.Collator({
			locale: "fr-CA",
			sensitivity: "case"
		});
	    assertNotUndefined(col);

	    var input = [
	        "déjà",
			"Meme",
			"deja",
			"même",
			"dejà",
			"bpef",
			"bœg",
			"Boef",
			"Mémé",
			"boef",
			"bnef",
			"pêche",
			"pèché",
			"pêché",
			"pêche",
			"pêché"
		];

	    input.sort(col.getComparator());

	    var expected = [
			"bnef",
			"Boef",
			"boef",
			"bœg",
			"bpef",
			"déjà",
			"deja",
			"dejà",
			"Meme",
			"Mémé",
			"même",
			"pêche",
			"pèché",
			"pêché",
			"pêche",
			"pêché"
		];

	    assertArrayEquals(expected, input);
	}
}

function testCollatorNativefrCAVariant() {
	// only test on platforms that support the new Intl class natively
	if (typeof(Intl) !== 'undefined') {
		var col = new ilib.Collator({
			locale: "fr-CA",
			sensitivity: "variant"
		});
	    assertNotUndefined(col);

	    var input = [
	        "déjà",
			"Meme",
			"deja",
			"même",
			"dejà",
			"bpef",
			"bœg",
			"Boef",
			"Mémé",
			"bœf",
			"boef",
			"bnef",
			"pêche",
			"pèché",
			"pêché",
			"pêche",
			"pêché"
		];

	    input.sort(col.getComparator());

	    var expected = [
			"bnef",
			"Boef",
			"boef",
			"bœf",
			"bœg",
			"bpef",
			"deja",
			"dejà",
			"déjà",
			"Meme",
			"même",
			"Mémé",
			"pêche",
			"pêche",
			"pèché",
			"pêché",
			"pêché"
		];

	    assertArrayEquals(expected, input);
	}
}

function testCollatorNativedeDECase() {
	// only test on platforms that support the new Intl class natively
	if (typeof(Intl) !== 'undefined') {
		var col = new ilib.Collator({
			locale: "de-DE",
			sensitivity: "case"
		});
	    assertNotUndefined(col);

	    var input = [
	        "Montags",
  			"Sonntag",
  			"Flüsse",
  			"fuße",
 			"Montag",
 			"Dienstag",
 			"Januar",
 			"Februar",
 			"März",
 			"Fuße",
 			"Flusse",
 			"flusse",
 			"flüsse"
 		];

	    input.sort(col.getComparator());

	    var expected = [
			"Dienstag",
			"Februar",
			"flusse",
			"Flusse",
			"flüsse",
			"Flüsse",
			"fuße",
			"Fuße",
			"Januar",
			"März",
			"Montag",
			"Montags",
			"Sonntag"	                    
		];

	    assertArrayEquals(expected, input);
	}
}

function testCollatorNativedeDEVariant() {
	// only test on platforms that support the new Intl class natively
	if (typeof(Intl) !== 'undefined') {
		var col = new ilib.Collator({
			locale: "de-DE",
			sensitivity: "variant",
			upperFirst: true
		});
	    assertNotUndefined(col);

	    var input = [
  			"Sonntag",
 			"Montags",
 			"Dienstag",
 			"Januar",
 			"Februar",
 			"März",
 			"Fuße",
 			"Fluße",
 			"Flusse",
 			"flusse",
 			"Montag",
 			"fluße",
 			"flüße",
 			"flüsse"
 		];

	    input.sort(col.getComparator());

	    var expected = [
			"Dienstag",
			"Februar",
			"Flusse",
			"Fluße",
			"flusse",
			"fluße",
			"flüsse",
			"flüße",
			"Fuße",
			"Januar",
			"März",
			"Montag",
 			"Montags",
			"Sonntag"	                    
		];

	    assertArrayEquals(expected, input);
	}
}
 */

function testJSCollatorPrimaryEqual() {
	var col = new ilib.Collator({
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

function testJSCollatorPrimaryBase() {
	var col = new ilib.Collator({
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

function testJSCollatorPrimaryAccent() {
	var col = new ilib.Collator({
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

function testJSCollatorPrimaryCase() {
	var col = new ilib.Collator({
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

function testJSCollatorGetComparatorPrimary() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testJSCollatorGetComparatorPrimaryWorks() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

}

function testJSCollatorGetComparatorPrimaryWorksWithCase() {
	var col = new ilib.Collator({
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

function testJSCollatorGetSortKeyPrimary() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	assertEquals("2422622221021a20c2", col.sortKey("string"));
}

function testJSCollatorGetSortKeyPrimaryWithAccentsAndCase() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	assertEquals("2402622221131a20c2", col.sortKey("Strïng"));
}

function testJSCollatorGetSortKeyPrimaryWorks() {
	var col = new ilib.Collator({
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


function testJSCollatorSecondaryEqual() {
	var col = new ilib.Collator({
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

function testJSCollatorSecondaryBase() {
	var col = new ilib.Collator({
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

function testJSCollatorSecondaryAccent() {
	var col = new ilib.Collator({
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

function testJSCollatorSecondaryCase() {
	var col = new ilib.Collator({
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

function testJSCollatorGetComparatorSecondary() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testJSCollatorGetComparatorSecondaryWorks() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

}

function testJSCollatorGetComparatorSecondaryWorksWithCase() {
	var col = new ilib.Collator({
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

function testJSCollatorGetSortKeySecondary() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	assertEquals("2422622221021a20c2", col.sortKey("string"));
}

function testJSCollatorGetSortKeySecondaryWithAccentsAndCase() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	assertEquals("2402622221131a20c2", col.sortKey("Strïng"));
}

function testJSCollatorGetSortKeySecondaryWorks() {
	var col = new ilib.Collator({
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


function testJSCollatorTertiaryEqual() {
	var col = new ilib.Collator({
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

function testJSCollatorTertiaryBase() {
	var col = new ilib.Collator({
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

function testJSCollatorTertiaryAccent() {
	var col = new ilib.Collator({
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

function testJSCollatorTertiaryCase() {
	var col = new ilib.Collator({
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

function testJSCollatorGetComparatorTertiary() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testJSCollatorGetComparatorTertiaryWorks() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

}

function testJSCollatorGetComparatorTertiaryWorksWithCase() {
	var col = new ilib.Collator({
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

function testJSCollatorGetSortKeyTertiary() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	assertEquals("2422622221021a20c2", col.sortKey("string"));
}

function testJSCollatorGetSortKeyTertiaryWithAccentsAndCase() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	assertEquals("2402622221131a20c2", col.sortKey("Strïng"));
}

function testJSCollatorGetSortKeyTertiaryWorks() {
	var col = new ilib.Collator({
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


function testJSCollatorSearchPrimaryEqual() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchPrimaryBase() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchPrimaryAccent() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchPrimaryCase() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchGetComparatorPrimary() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testJSCollatorSearchGetComparatorPrimaryWorks() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

}

function testJSCollatorSearchGetComparatorPrimaryWorksWithCase() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchGetSortKeyPrimary() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("121311080d06", col.sortKey("string"));
}

function testJSCollatorSearchGetSortKeyPrimaryWithAccentsAndCase() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("121311080d06", col.sortKey("Strïng"));
}

function testJSCollatorSearchGetSortKeyPrimaryWorks() {
	var col = new ilib.Collator({
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


function testJSCollatorSearchSecondaryEqual() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchSecondaryBase() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchSecondaryAccent() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchSecondaryCase() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchGetComparatorSecondary() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testJSCollatorSearchGetComparatorSecondaryWorks() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

}

function testJSCollatorSearchGetComparatorSecondaryWorksWithCase() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchGetSortKeySecondary() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("909888406830", col.sortKey("string"));
}

function testJSCollatorSearchGetSortKeySecondaryWithAccentsAndCase() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("909888446830", col.sortKey("Strïng"));
}

function testJSCollatorSearchGetSortKeySecondaryWorks() {
	var col = new ilib.Collator({
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


function testJSCollatorSearchTertiaryEqual() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchTertiaryBase() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchTertiaryAccent() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchTertiaryCase() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchGetComparatorTertiary() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testJSCollatorSearchGetComparatorTertiaryWorks() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

}

function testJSCollatorSearchGetComparatorTertiaryWorksWithCase() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchGetSortKeyTertiary() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("1211311110810d1061", col.sortKey("string"));
}

function testJSCollatorSearchGetSortKeyTertiaryWithAccentsAndCase() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("1201311110890d1061", col.sortKey("Strïng"));
}

function testJSCollatorSearchGetSortKeyTertiaryWorks() {
	var col = new ilib.Collator({
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


function testJSCollatorSearchQuaternaryEqual() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchQuaternaryBase() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchQuaternaryAccent() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchQuaternaryCase() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchGetComparatorQuaternary() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);
	assertEquals("function", typeof(func));
}

function testJSCollatorSearchGetComparatorQuaternaryWorks() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	var func = col.getComparator();
	assertNotUndefined(func);

}

function testJSCollatorSearchGetComparatorQuaternaryWorksWithCase() {
	var col = new ilib.Collator({
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

function testJSCollatorSearchGetSortKeyQuaternary() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("2422622221021a20c2", col.sortKey("string"));
}

function testJSCollatorSearchGetSortKeyQuaternaryWithAccentsAndCase() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("2402622221131a20c2", col.sortKey("Strïng"));
}

function testJSCollatorSearchGetSortKeyQuaternaryWorks() {
	var col = new ilib.Collator({
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


function testCollatorJSWithSortPrimary() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "primary"
	});
	assertNotUndefined(col);

	var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];

	input.sort(col.getComparator());

	var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortPrimaryStable() {
	var col = new ilib.Collator({
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

function testCollatorJSWithSortPrimaryLowerFirst() {
	var col = new ilib.Collator({
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

function testCollatorJSWithSortPrimaryReverse() {
	var col = new ilib.Collator({
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

function testCollatorJSWithSortPrimaryReverseLowerFirst() {
	var col = new ilib.Collator({
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

function testCollatorJSWithSortSecondary() {
	var col = new ilib.Collator({
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

function testCollatorJSWithSortTertiary() {
	var col = new ilib.Collator({
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


function testCollatorJSWithSortWithSortKeys() {
	var col = new ilib.Collator({
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

function testCollatorJSWithSortUpperFirst() {
	var col = new ilib.Collator({
		useNative: false,
		upperFirst: true
	});
	assertNotUndefined(col);

	var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

	input.sort(col.getComparator());

	var expected = ["E", "e", "I", "i", "o", "p", "q", "r", "T", "U"];

	assertArrayEquals(expected, input);
}

function testCollatorJSWithSortUpperNotFirst() {
	var col = new ilib.Collator({
		useNative: false,
		upperFirst: false
	});
	assertNotUndefined(col);

	var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

	input.sort(col.getComparator());

	var expected = ["e", "E", "i", "I", "o", "p", "q", "r", "T", "U"];

	assertArrayEquals(expected, input);
}

function testJSCollatorSortGetSortKeyReversePrimary() {
	var col = new ilib.Collator({
		useNative: false,
		usage: "search",
		reverse: true,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	assertEquals("eeedeff8f3fa", col.sortKey("string"));
}

function testJSCollatorSortGetSortKeyReverseQuaternary() {
	var col = new ilib.Collator({
		useNative: false,
		usage: "search",
		reverse: true,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	assertEquals("dbed9eddeefee5ef3e", col.sortKey("string"));
}

function testCollatorJSWithSortWithSortKeysReverse() {
	var col = new ilib.Collator({
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


function testJSCollatorIgnorePunctuation() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		ignorePunctuation: true
	});

	assertNotUndefined(col);

	assertEquals(0, col.compare("string", "'st,ri-ng"));
}

function testJSCollatorIgnorePunctuationNoPunct() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		ignorePunctuation: true
	});

	assertNotUndefined(col);

	assertEquals(0, col.compare("string", "string"));
}

function testJSCollatorIgnorePunctuationSortKey() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		ignorePunctuation: true
	});

	assertNotUndefined(col);

	assertEquals("2402622221021a20c2", col.sortKey("-@#%St-ring-#@%"));
}

function testJSCollatorNumeric() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertEquals(0, col.compare("00123.4", "123.4"));
}

function testJSCollatorNumericNoNumbers() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertEquals(0, col.compare("asdf", "fooo"));
}

function testJSCollatorNumericLeftNumber() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("1", "fooo") < 0);
}

function testJSCollatorNumericRightNumber() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("asdf", "231234") > 0);
}

function testJSCollatorWithThousandsSeparator() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertEquals(0, col.compare("12,454,454.4", "0,012,454,454.4"));
}

function testJSCollatorWithThousandsSeparatorDE() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		locale: "de-DE",
		numeric: true
	});

	assertNotUndefined(col);

	assertEquals(0, col.compare("12.454.454,4", "0.012.454.454,4"));
}

function testJSCollatorNumeric1() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("10", "1") > 0);
}

function testJSCollatorNumeric2() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("100", "10") > 0);
}

function testJSCollatorNumeric3() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("100", "99") > 0);
}

function testJSCollatorNumeric4() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("100", "99.9") > 0);
}

function testJSCollatorNumericWithText() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("1 box", "2 boxes") < 0);
}

function testJSCollatorNumericWithText() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("20 boxes", "2 boxes") > 0);
}

function testJSCollatorNumericWithText2() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertTrue(col.compare("20.1 boxes", "201 boxes") < 0);
}

function testJSCollatorNumericSortKey1() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertEquals("0000000000000001", col.sortKey("1"));
}

function testJSCollatorNumericSortKey255() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertEquals("00000000000000ff", col.sortKey("255"));
}

function testJSCollatorNumericSortKeyBig() {
	var col = new ilib.Collator({
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	assertEquals("00000fadaa62dfa1", col.sortKey("17238562365345"));
}