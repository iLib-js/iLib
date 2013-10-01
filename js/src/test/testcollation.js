/*
 * testcollation.js - test the Collator object
 * 
 * Copyright © 2013, JEDLSoft
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

function testCollatorConstructor() {
    var col = new ilib.Collator();
    
    assertNotUndefined(col);
}

function testCollatorDefault() {
    var col = new ilib.Collator();
    
    assertNotUndefined(col);

    // should compare in English
    assertEquals("equality", 0, col.compare("string", "string"));
    assertEquals("a < b", -1, col.compare("a", "b"));
    assertEquals("b < c", -1, col.compare("b", "c"));
    assertEquals("c < z", -1, col.compare("c", "z"));
}

function testCollatorDefaultCase() {
    var col = new ilib.Collator();
    
    assertNotUndefined(col);

    // should compare upper-case first
    assertEquals("A < a", -1, col.compare("A", "a"));
    assertEquals("B < b", -1, col.compare("B", "b"));
    assertEquals("Z < a", 1, col.compare("a", "Z"));
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
    assertEquals("a < b", -1, func("a", "b"));
    assertEquals("b < c", -1, func("b", "c"));
    assertEquals("c < z", -1, func("c", "z"));
}

function testCollatorGetComparatorWorksWithCase() {
    var col = new ilib.Collator();
    
    assertNotUndefined(col);
    
    var func = col.getComparator();
    assertNotUndefined(func);
    
    // should compare upper-case first
    assertEquals("A < a", -1, func("A", "a"));
    assertEquals("B < b", -1, func("B", "b"));
    assertEquals("Z < a", -1, func("Z", "a"));
}

function testCollatorGetSortKey() {
    var col = new ilib.Collator();
    
    assertNotUndefined(col);

    assertEquals("string", typeof(col.sortKey("string")));
}

function testCollatorGetSortKeyWorks() {
    var col = new ilib.Collator();
    
    assertNotUndefined(col);

    // should compare in English
    assertTrue("string", col.sortKey("string") === col.sortKey("string"));
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
    
    var expected = ["E", "I", "T", "U", "e", "i", "o", "p", "q", "r"];
    
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
	    assertEquals("e = ë", 0, col.compare("e", "ë"));
	    assertEquals("o = ø", 0, col.compare("o","ø"));
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

function testCollatorNativefrFRVariant() {
	// only test on platforms that support the new Intl class natively
	if (typeof(Intl) !== 'undefined') {
		var col = new ilib.Collator({
			locale: "fr-FR",
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
  			"Sonntag",
  			"Flüsse",
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
			"Flusse",
			"flusse",
			"Flüsse",
			"flüsse",
			"Fuße",
			"Januar",
			"März",
			"Montag",
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
			sensitivity: "variant"
		});
	    assertNotUndefined(col);
	    
	    var input = [
  			"Sonntag",
 			"Montag",
 			"Dienstag",
 			"Januar",
 			"Februar",
 			"März",
 			"Fuße",
 			"Fluße",
 			"Flusse",
 			"flusse",
 			"fluße",
 			"flüße",
 			"flüsse"
 		];
	    
	    input.sort(col.getComparator());
	    
	    var expected = [
			"Dienstag",
			"Februar",
			"Flusse",
			"flusse",
			"Fluße",
			"fluße",
			"flüsse",
			"flüße",
			"Fuße",
			"Januar",
			"März",
			"Montag",
			"Sonntag"	                    
		];
	    
	    assertArrayEquals(expected, input);
	}
}
