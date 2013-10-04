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

    assertEquals("string!111111!000000!000000", col.sortKey("string"));
}

function testCollatorGetSortKeyEmpty() {
    var col = new ilib.Collator();
    
    assertNotUndefined(col);

    assertEquals("", col.sortKey(""));
}

function testCollatorGetSortKeyUndefined() {
    var col = new ilib.Collator();
    
    assertNotUndefined(col);

    assertEquals("", col.sortKey(undefined));
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
    assertEquals("a < o", -1, col.compare("a", "o"));
    assertEquals("A < o", -1, col.compare("A", "o"));
    assertEquals("ã < o", -1, col.compare("ã", "o"));
    assertEquals("Ã < o", -1, col.compare("Ã", "o"));

    assertEquals("a < õ", -1, col.compare("a", "õ"));
    assertEquals("A < õ", -1, col.compare("A", "õ"));
    assertEquals("ã < õ", -1, col.compare("ã", "õ"));
    assertEquals("Ã < õ", -1, col.compare("Ã", "õ"));

    assertEquals("a < O", -1, col.compare("a", "O"));
    assertEquals("A < O", -1, col.compare("A", "O"));
    assertEquals("ã < O", -1, col.compare("ã", "O"));
    assertEquals("Ã < O", -1, col.compare("Ã", "O"));

    assertEquals("a < Õ", -1, col.compare("a", "Õ"));
    assertEquals("A < Õ", -1, col.compare("A", "Õ"));
    assertEquals("ã < Õ", -1, col.compare("ã", "Õ"));
    assertEquals("Ã < Õ", -1, col.compare("Ã", "Õ"));
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
    assertEquals("a < à", -1, col.compare("a", "à"));
    assertEquals("à < à (combining)", -1, col.compare("à", "à"));
    assertEquals("à (combining) < å", -1, col.compare("à", "å"));
}

function testJSCollatorPrimaryCase() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "primary"
    });
    
    assertNotUndefined(col);

    // should compare base, then accent, then case, then variant
    // A a À à À à Å å O o Õ õ
    // (second set of "a" with grave is two characters: "a" character with a combining grave character)
    assertEquals("A < a", -1, col.compare("A", "a"));
    assertEquals("a < À", -1, col.compare("a", "À"));
    assertEquals("À < à", -1, col.compare("À", "à"));
    assertEquals("à < À (combining)", -1, col.compare("à", "À"));
    assertEquals("À (combining) < à (combining)", -1, col.compare("À", "à"));
    assertEquals("à (combining) < Å", -1, col.compare("à", "Å"));
    assertEquals("Å < å", -1, col.compare("Å", "å"));
    assertEquals("ã < O", -1, col.compare("ã", "O"));
    assertEquals("O < o", -1, col.compare("O", "o"));
    assertEquals("o < Õ", -1, col.compare("o", "Õ"));
    assertEquals("Õ < õ", -1, col.compare("Õ", "õ"));
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
    
    // A a À à À à Å å O o Õ õ
    // (second set of "a" with grave is two characters: "a" character with a combining grave character)
    assertEquals("A < a", -1, func("A", "a"));
    assertEquals("a < À", -1, func("a", "À"));
    assertEquals("À < à", -1, func("À", "à"));
    assertEquals("à < À (combining)", -1, func("à", "À"));
    assertEquals("À (combining) < à (combining)", -1, func("À", "à"));
    assertEquals("à (combining) < Å", -1, func("à", "Å"));
    assertEquals("Å < å", -1, func("Å", "å"));
    assertEquals("ã < O", -1, func("ã", "O"));
    assertEquals("O < o", -1, func("O", "o"));
    assertEquals("o < Õ", -1, func("o", "Õ"));
    assertEquals("Õ < õ", -1, func("Õ", "õ"));
}

function testJSCollatorGetSortKeyPrimary() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "primary"
    });
    
    assertNotUndefined(col);

    assertEquals("string!111111!000000!000000", col.sortKey("string"));
}

function testJSCollatorGetSortKeyPrimaryWithAccentsAndCase() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "primary"
    });
    
    assertNotUndefined(col);

    assertEquals("string!011111!000400!000400", col.sortKey("Strïng"));
}

function testJSCollatorGetSortKeyPrimaryWorks() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "primary"
    });
    
    assertNotUndefined(col);

    assertEquals("string", col.sortKey("string"), col.sortKey("string"));
    // A a À à À à Å å O o Õ õ
    assertTrue("A < a", col.sortKey("A") < col.sortKey("a"));
    assertTrue("a < À", col.sortKey("a") < col.sortKey("À"));
    assertTrue("À < à", col.sortKey("À") < col.sortKey("à"));
    assertTrue("à < À (combining)", col.sortKey("à") < col.sortKey("À"));
    assertTrue("À (combining) < à (combining)", col.sortKey("À") < col.sortKey("à"));
    assertTrue("à (combining) < Å", col.sortKey("à") < col.sortKey("Å"));
    assertTrue("Å < å", col.sortKey("Å") < col.sortKey("å"));
    assertTrue("ã < O", col.sortKey("ã") < col.sortKey("O"));
    assertTrue("O < o", col.sortKey("O") < col.sortKey("o"));
    assertTrue("o < Õ", col.sortKey("o") < col.sortKey("Õ"));
    assertTrue("Õ < õ", col.sortKey("Õ") < col.sortKey("õ"));
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
    assertEquals("a < o", -1, col.compare("a", "o"));
    assertEquals("A < o", -1, col.compare("A", "o"));
    assertEquals("ã < o", -1, col.compare("ã", "o"));
    assertEquals("Ã < o", -1, col.compare("Ã", "o"));

    assertEquals("a < õ", -1, col.compare("a", "õ"));
    assertEquals("A < õ", -1, col.compare("A", "õ"));
    assertEquals("ã < õ", -1, col.compare("ã", "õ"));
    assertEquals("Ã < õ", -1, col.compare("Ã", "õ"));

    assertEquals("a < O", -1, col.compare("a", "O"));
    assertEquals("A < O", -1, col.compare("A", "O"));
    assertEquals("ã < O", -1, col.compare("ã", "O"));
    assertEquals("Ã < O", -1, col.compare("Ã", "O"));

    assertEquals("a < Õ", -1, col.compare("a", "Õ"));
    assertEquals("A < Õ", -1, col.compare("A", "Õ"));
    assertEquals("ã < Õ", -1, col.compare("ã", "Õ"));
    assertEquals("Ã < Õ", -1, col.compare("Ã", "Õ"));
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
    assertEquals("a < à", -1, col.compare("a", "à"));
    assertEquals("à < à (combining)", -1, col.compare("à", "à"));
    assertEquals("à (combining) < å", -1, col.compare("à", "å"));
}

function testJSCollatorSecondaryCase() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "secondary"
    });
    
    assertNotUndefined(col);

    // should compare base, then case, then accent, then variant
    // A À À Å a à à å O Õ o õ
    assertEquals("A < À", -1, col.compare("A", "À"));
    assertEquals("À < À (combining)", -1, col.compare("À", "À"));
    assertEquals("À (combining) < Å", -1, col.compare("À", "Å"));
    assertEquals("Å < a", -1, col.compare("Å", "a"));
    assertEquals("a < à", -1, col.compare("a", "à"));
    assertEquals("à < à (combining)", -1, col.compare("à", "à"));
    assertEquals("à (combining) < å", -1, col.compare("à", "å"));
    assertEquals("å < O", -1, col.compare("å", "O"));
    assertEquals("O < Õ", -1, col.compare("O", "Õ"));
    assertEquals("Õ < o", -1, col.compare("Õ", "o"));
    assertEquals("o < õ", -1, col.compare("o", "õ"));
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
    assertEquals("A < À", -1, func("A", "À"));
    assertEquals("À < À (combining)", -1, func("À", "À"));
    assertEquals("À (combining) < Å", -1, func("À", "Å"));
    assertEquals("Å < a", -1, func("Å", "a"));
    assertEquals("a < à", -1, func("a", "à"));
    assertEquals("à < à (combining)", -1, func("à", "à"));
    assertEquals("à (combining) < å", -1, func("à", "å"));
    assertEquals("å < O", -1, func("å", "O"));
    assertEquals("O < Õ", -1, func("O", "Õ"));
    assertEquals("Õ < o", -1, func("Õ", "o"));
    assertEquals("o < õ", -1, func("o", "õ"));
}

function testJSCollatorGetSortKeySecondary() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "secondary"
    });
    
    assertNotUndefined(col);

    assertEquals("string!111111!000000!000000", col.sortKey("string"));
}

function testJSCollatorGetSortKeySecondaryWithAccentsAndCase() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "secondary"
    });
    
    assertNotUndefined(col);

    assertEquals("string!011111!000400!000400", col.sortKey("Strïng"));
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
    assertTrue("A < a", col.sortKey("Å") < col.sortKey("a"));
    assertTrue("a < à", col.sortKey("a") < col.sortKey("à"));
    assertTrue("à < à (combining)", col.sortKey("à") < col.sortKey("à"));
    assertTrue("à (combining) < å", col.sortKey("à") < col.sortKey("å"));
    assertTrue("å < O", col.sortKey("å") < col.sortKey("O"));
    assertTrue("O < Õ", col.sortKey("O") < col.sortKey("Õ"));
    assertTrue("Õ < o", col.sortKey("Õ") < col.sortKey("o"));
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
    assertEquals("a < o", -1, col.compare("a", "o"));
    assertEquals("A < o", -1, col.compare("A", "o"));
    assertEquals("ã < o", -1, col.compare("ã", "o"));
    assertEquals("Ã < o", -1, col.compare("Ã", "o"));

    assertEquals("a < õ", -1, col.compare("a", "õ"));
    assertEquals("A < õ", -1, col.compare("A", "õ"));
    assertEquals("ã < õ", -1, col.compare("ã", "õ"));
    assertEquals("Ã < õ", -1, col.compare("Ã", "õ"));

    assertEquals("a < O", -1, col.compare("a", "O"));
    assertEquals("A < O", -1, col.compare("A", "O"));
    assertEquals("ã < O", -1, col.compare("ã", "O"));
    assertEquals("Ã < O", -1, col.compare("Ã", "O"));

    assertEquals("a < Õ", -1, col.compare("a", "Õ"));
    assertEquals("A < Õ", -1, col.compare("A", "Õ"));
    assertEquals("ã < Õ", -1, col.compare("ã", "Õ"));
    assertEquals("Ã < Õ", -1, col.compare("Ã", "Õ"));
}

function testJSCollatorTertiaryAccent() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "tertiary"
    });
    
    assertNotUndefined(col);

    // should compare base, then accent
    // (second "a" with grave is two characters: "a" character with a combining grave character)
    assertEquals("a < à", -1, col.compare("a", "à"));
    assertEquals("à < à (combining)", -1, col.compare("à", "à"));
    assertEquals("à (combining) < å", -1, col.compare("à", "å"));
}

function testJSCollatorTertiaryCase() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "tertiary"
    });
    
    assertNotUndefined(col);

    // should compare base, then case, then accent, then variant
    // A À À Å a à à å O Õ o õ
    assertEquals("A < À", -1, col.compare("A", "À"));
    assertEquals("À < À (combining)", -1, col.compare("À", "À"));
    assertEquals("À (combining) < Å", -1, col.compare("À", "Å"));
    assertEquals("Å < a", -1, col.compare("Å", "a"));
    assertEquals("a < à", -1, col.compare("a", "à"));
    assertEquals("à < à (combining)", -1, col.compare("à", "à"));
    assertEquals("à (combining) < å", -1, col.compare("à", "å"));
    assertEquals("å < O", -1, col.compare("å", "O"));
    assertEquals("O < Õ", -1, col.compare("O", "Õ"));
    assertEquals("Õ < o", -1, col.compare("Õ", "o"));
    assertEquals("o < õ", -1, col.compare("o", "õ"));
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
    assertEquals("A < À", -1, func("A", "À"));
    assertEquals("À < À (combining)", -1, func("À", "À"));
    assertEquals("À (combining) < Å", -1, func("À", "Å"));
    assertEquals("Å < a", -1, func("Å", "a"));
    assertEquals("a < à", -1, func("a", "à"));
    assertEquals("à < à (combining)", -1, func("à", "à"));
    assertEquals("à (combining) < å", -1, func("à", "å"));
    assertEquals("å < O", -1, func("å", "O"));
    assertEquals("O < Õ", -1, func("O", "Õ"));
    assertEquals("Õ < o", -1, func("Õ", "o"));
    assertEquals("o < õ", -1, func("o", "õ"));
}

function testJSCollatorGetSortKeyTertiary() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "tertiary"
    });
    
    assertNotUndefined(col);

    assertEquals("string!111111!000000!000000", col.sortKey("string"));
}

function testJSCollatorGetSortKeyTertiaryWithAccentsAndCase() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "tertiary"
    });
    
    assertNotUndefined(col);

    assertEquals("string!011111!000400!000400", col.sortKey("Strïng"));
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
    assertTrue("A < a", col.sortKey("Å") < col.sortKey("a"));
    assertTrue("a < à", col.sortKey("a") < col.sortKey("à"));
    assertTrue("à < à (combining)", col.sortKey("à") < col.sortKey("à"));
    assertTrue("à (combining) < å", col.sortKey("à") < col.sortKey("å"));
    assertTrue("å < O", col.sortKey("å") < col.sortKey("O"));
    assertTrue("O < Õ", col.sortKey("O") < col.sortKey("Õ"));
    assertTrue("Õ < o", col.sortKey("Õ") < col.sortKey("o"));
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
    assertEquals("a < o", -1, col.compare("a", "o"));
    assertEquals("A < o", -1, col.compare("A", "o"));
    assertEquals("ã < o", -1, col.compare("ã", "o"));
    assertEquals("Ã < o", -1, col.compare("Ã", "o"));

    assertEquals("a < õ", -1, col.compare("a", "õ"));
    assertEquals("A < õ", -1, col.compare("A", "õ"));
    assertEquals("ã < õ", -1, col.compare("ã", "õ"));
    assertEquals("Ã < õ", -1, col.compare("Ã", "õ"));

    assertEquals("a < O", -1, col.compare("a", "O"));
    assertEquals("A < O", -1, col.compare("A", "O"));
    assertEquals("ã < O", -1, col.compare("ã", "O"));
    assertEquals("Ã < O", -1, col.compare("Ã", "O"));

    assertEquals("a < Õ", -1, col.compare("a", "Õ"));
    assertEquals("A < Õ", -1, col.compare("A", "Õ"));
    assertEquals("ã < Õ", -1, col.compare("ã", "Õ"));
    assertEquals("Ã < Õ", -1, col.compare("Ã", "Õ"));
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
    assertEquals("ã < O", -1, col.compare("ã", "O"));
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
    assertEquals("ã < O", -1, func("ã", "O"));
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

    assertEquals("string", col.sortKey("string"));
}

function testJSCollatorSearchGetSortKeyPrimaryWithAccentsAndCase() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "primary",
    	usage: "search"
    });
    
    assertNotUndefined(col);

    assertEquals("string", col.sortKey("Strïng"));
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
    assertEquals("a < o", -1, col.compare("a", "o"));
    assertEquals("A < o", -1, col.compare("A", "o"));
    assertEquals("ã < o", -1, col.compare("ã", "o"));
    assertEquals("Ã < o", -1, col.compare("Ã", "o"));

    assertEquals("a < õ", -1, col.compare("a", "õ"));
    assertEquals("A < õ", -1, col.compare("A", "õ"));
    assertEquals("ã < õ", -1, col.compare("ã", "õ"));
    assertEquals("Ã < õ", -1, col.compare("Ã", "õ"));

    assertEquals("a < O", -1, col.compare("a", "O"));
    assertEquals("A < O", -1, col.compare("A", "O"));
    assertEquals("ã < O", -1, col.compare("ã", "O"));
    assertEquals("Ã < O", -1, col.compare("Ã", "O"));

    assertEquals("a < Õ", -1, col.compare("a", "Õ"));
    assertEquals("A < Õ", -1, col.compare("A", "Õ"));
    assertEquals("ã < Õ", -1, col.compare("ã", "Õ"));
    assertEquals("Ã < Õ", -1, col.compare("Ã", "Õ"));
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
    assertEquals("a = à", 0, col.compare("a", "à"));
    assertEquals("à = à (combining)", 0, col.compare("à", "à"));
    assertEquals("à (combining) = å", 0, col.compare("à", "å"));
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
    assertEquals("A = À",  0, col.compare("A", "À"));
    assertEquals("À = À (combining)",  0, col.compare("À", "À"));
    assertEquals("À (combining) = Å",  0, col.compare("À", "Å"));
    assertEquals("Å < a", -1, col.compare("Å", "a"));
    assertEquals("a = à",  0, col.compare("a", "à"));
    assertEquals("à = à (combining)",  0, col.compare("à", "à"));
    assertEquals("à (combining) = å",  0, col.compare("à", "å"));
    assertEquals("å < O", -1, col.compare("å", "O"));
    assertEquals("O = Õ",  0, col.compare("O", "Õ"));
    assertEquals("Õ < o", -1, col.compare("Õ", "o"));
    assertEquals("o = õ",  0, col.compare("o", "õ"));
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
    assertEquals("A = À",  0, func("A", "À"));
    assertEquals("À = À (combining)",  0, func("À", "À"));
    assertEquals("À (combining) = Å",  0, func("À", "Å"));
    assertEquals("Å < a", -1, func("Å", "a"));
    assertEquals("a = à",  0, func("a", "à"));
    assertEquals("à = à (combining)",  0, func("à", "à"));
    assertEquals("à (combining) = å",  0, func("à", "å"));
    assertEquals("å < O", -1, func("å", "O"));
    assertEquals("O = Õ",  0, func("O", "Õ"));
    assertEquals("Õ < o", -1, func("Õ", "o"));
    assertEquals("o = õ",  0, func("o", "õ"));
}

function testJSCollatorSearchGetSortKeySecondary() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "secondary",
    	usage: "search"
    });
    
    assertNotUndefined(col);

    assertEquals("string!111111", col.sortKey("string"));
}

function testJSCollatorSearchGetSortKeySecondaryWithAccentsAndCase() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "secondary",
    	usage: "search"
    });
    
    assertNotUndefined(col);

    assertEquals("string!011111", col.sortKey("Strïng"));
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
    assertTrue("A = À", col.sortKey("A") === col.sortKey("À"));
    assertTrue("À = À (combining)", col.sortKey("À") === col.sortKey("À"));
    assertTrue("À (combining) = Å", col.sortKey("À") === col.sortKey("Å"));
    assertTrue("A < a", col.sortKey("Å") < col.sortKey("a"));
    assertTrue("a = à", col.sortKey("a") === col.sortKey("à"));
    assertTrue("à = à (combining)", col.sortKey("à") === col.sortKey("à"));
    assertTrue("à (combining) = å", col.sortKey("à") === col.sortKey("å"));
    assertTrue("å < O", col.sortKey("å") < col.sortKey("O"));
    assertTrue("O = Õ", col.sortKey("O") === col.sortKey("Õ"));
    assertTrue("Õ < o", col.sortKey("Õ") === col.sortKey("o"));
    assertTrue("o = õ", col.sortKey("o") === col.sortKey("õ"));
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
    assertEquals("a < o", -1, col.compare("a", "o"));
    assertEquals("A < o", -1, col.compare("A", "o"));
    assertEquals("ã < o", -1, col.compare("ã", "o"));
    assertEquals("Ã < o", -1, col.compare("Ã", "o"));

    assertEquals("a < õ", -1, col.compare("a", "õ"));
    assertEquals("A < õ", -1, col.compare("A", "õ"));
    assertEquals("ã < õ", -1, col.compare("ã", "õ"));
    assertEquals("Ã < õ", -1, col.compare("Ã", "õ"));

    assertEquals("a < O", -1, col.compare("a", "O"));
    assertEquals("A < O", -1, col.compare("A", "O"));
    assertEquals("ã < O", -1, col.compare("ã", "O"));
    assertEquals("Ã < O", -1, col.compare("Ã", "O"));

    assertEquals("a < Õ", -1, col.compare("a", "Õ"));
    assertEquals("A < Õ", -1, col.compare("A", "Õ"));
    assertEquals("ã < Õ", -1, col.compare("ã", "Õ"));
    assertEquals("Ã < Õ", -1, col.compare("Ã", "Õ"));
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
    assertEquals("a < à", -1, col.compare("a", "à"));
    assertEquals("à = à (combining)", 0, col.compare("à", "à"));
    assertEquals("à (combining) < å", -1, col.compare("à", "å"));
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
    assertEquals("A < À", -1, col.compare("A", "À"));
    assertEquals("À = À (combining)",  0, col.compare("À", "À"));
    assertEquals("À (combining) < Å", -1, col.compare("À", "Å"));
    assertEquals("Å < a", -1, col.compare("Å", "a"));
    assertEquals("a < à", -1, col.compare("a", "à"));
    assertEquals("à = à (combining)",  0, col.compare("à", "à"));
    assertEquals("à (combining) < å", -1, col.compare("à", "å"));
    assertEquals("å < O", -1, col.compare("å", "O"));
    assertEquals("O < Õ", -1, col.compare("O", "Õ"));
    assertEquals("Õ < o", -1, col.compare("Õ", "o"));
    assertEquals("o < õ", -1, col.compare("o", "õ"));
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
    assertEquals("A < À", -1, func("A", "À"));
    assertEquals("À = À (combining)",  0, func("À", "À"));
    assertEquals("À (combining) < Å", -1, func("À", "Å"));
    assertEquals("Å < a", -1, func("Å", "a"));
    assertEquals("a < à", -1, func("a", "à"));
    assertEquals("à = à (combining)",  0, func("à", "à"));
    assertEquals("à (combining) < å", -1, func("à", "å"));
    assertEquals("å < O", -1, func("å", "O"));
    assertEquals("O < Õ", -1, func("O", "Õ"));
    assertEquals("Õ < o", -1, func("Õ", "o"));
    assertEquals("o < õ", -1, func("o", "õ"));
}

function testJSCollatorSearchGetSortKeyTertiary() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "tertiary",
    	usage: "search"
    });
    
    assertNotUndefined(col);

    assertEquals("string!111111!      ", col.sortKey("string"));
}

function testJSCollatorSearchGetSortKeyTertiaryWithAccentsAndCase() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "tertiary",
    	usage: "search"
    });
    
    assertNotUndefined(col);

    assertEquals("string!011111!   3  ", col.sortKey("Strïng"));
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
    assertTrue("A < a", col.sortKey("Å") < col.sortKey("a"));
    assertTrue("a < à", col.sortKey("a") < col.sortKey("à"));
    assertTrue("à = à (combining)", col.sortKey("à") === col.sortKey("à"));
    assertTrue("à (combining) < å", col.sortKey("à") < col.sortKey("å"));
    assertTrue("å < O", col.sortKey("å") < col.sortKey("O"));
    assertTrue("O < Õ", col.sortKey("O") < col.sortKey("Õ"));
    assertTrue("Õ < o", col.sortKey("Õ") < col.sortKey("o"));
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
    assertEquals("a < o", -1, col.compare("a", "o"));
    assertEquals("A < o", -1, col.compare("A", "o"));
    assertEquals("ã < o", -1, col.compare("ã", "o"));
    assertEquals("Ã < o", -1, col.compare("Ã", "o"));

    assertEquals("a < õ", -1, col.compare("a", "õ"));
    assertEquals("A < õ", -1, col.compare("A", "õ"));
    assertEquals("ã < õ", -1, col.compare("ã", "õ"));
    assertEquals("Ã < õ", -1, col.compare("Ã", "õ"));

    assertEquals("a < O", -1, col.compare("a", "O"));
    assertEquals("A < O", -1, col.compare("A", "O"));
    assertEquals("ã < O", -1, col.compare("ã", "O"));
    assertEquals("Ã < O", -1, col.compare("Ã", "O"));

    assertEquals("a < Õ", -1, col.compare("a", "Õ"));
    assertEquals("A < Õ", -1, col.compare("A", "Õ"));
    assertEquals("ã < Õ", -1, col.compare("ã", "Õ"));
    assertEquals("Ã < Õ", -1, col.compare("Ã", "Õ"));
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
    assertEquals("a < à", -1, col.compare("a", "à"));
    assertEquals("à < à (combining)", -1, col.compare("à", "à"));
    assertEquals("à (combining) < å", -1, col.compare("à", "å"));
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
    assertEquals("A < À", -1, col.compare("A", "À"));
    assertEquals("À < À (combining)", -1, col.compare("À", "À"));
    assertEquals("À (combining) < Å", -1, col.compare("À", "Å"));
    assertEquals("Å < a", -1, col.compare("Å", "a"));
    assertEquals("a < à", -1, col.compare("a", "à"));
    assertEquals("à < à (combining)", -1, col.compare("à", "à"));
    assertEquals("à (combining) < å", -1, col.compare("à", "å"));
    assertEquals("å < O", -1, col.compare("å", "O"));
    assertEquals("O < Õ", -1, col.compare("O", "Õ"));
    assertEquals("Õ < o", -1, col.compare("Õ", "o"));
    assertEquals("o < õ", -1, col.compare("o", "õ"));
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
    assertEquals("A < À", -1, func("A", "À"));
    assertEquals("À < À (combining)", -1, func("À", "À"));
    assertEquals("À (combining) < Å", -1, func("À", "Å"));
    assertEquals("Å < a", -1, func("Å", "a"));
    assertEquals("a < à", -1, func("a", "à"));
    assertEquals("à < à (combining)", -1, func("à", "à"));
    assertEquals("à (combining) < å", -1, func("à", "å"));
    assertEquals("å < O", -1, func("å", "O"));
    assertEquals("O < Õ", -1, func("O", "Õ"));
    assertEquals("Õ < o", -1, func("Õ", "o"));
    assertEquals("o < õ", -1, func("o", "õ"));
}

function testJSCollatorSearchGetSortKeyQuaternary() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "quaternary",
    	usage: "search"
    });
    
    assertNotUndefined(col);

    assertEquals("string!111111!000000!000000", col.sortKey("string"));
}

function testJSCollatorSearchGetSortKeyQuaternaryWithAccentsAndCase() {
    var col = new ilib.Collator({
    	useNative: false,
    	sensitivity: "quaternary",
    	usage: "search"
    });
    
    assertNotUndefined(col);

    assertEquals("string!011111!000400!000400", col.sortKey("Strïng"));
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
    assertTrue("A < a", col.sortKey("Å") < col.sortKey("a"));
    assertTrue("a < à", col.sortKey("a") < col.sortKey("à"));
    assertTrue("à < à (combining)", col.sortKey("à") < col.sortKey("à"));
    assertTrue("à (combining) < å", col.sortKey("à") < col.sortKey("å"));
    assertTrue("å < O", col.sortKey("å") < col.sortKey("O"));
    assertTrue("O < Õ", col.sortKey("O") < col.sortKey("Õ"));
    assertTrue("Õ < o", col.sortKey("Õ") < col.sortKey("o"));
    assertTrue("o < õ", col.sortKey("o") < col.sortKey("õ"));
}


function testCollatorWithSortPrimary() {
    var col = new ilib.Collator({
    	sensitivity: "primary"
    });
    assertNotUndefined(col);
    
    var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];
    
    input.sort(col.getComparator());
    
    var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];
    
    assertArrayEquals(expected, input);
}

function testCollatorWithSortPrimaryStable() {
    var col = new ilib.Collator({
    	sensitivity: "primary"
    });
    assertNotUndefined(col);
    
    // input array order should not matter
    var input = ["strïng", "Strïng", "StrinG", "Strïng", "str", "String", "strïng", "strïnG", "string"];
    
    input.sort(col.getComparator());
    
    var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];
    
    assertArrayEquals(expected, input);
}

function testCollatorWithSortPrimaryLowerFirst() {
    var col = new ilib.Collator({
    	sensitivity: "primary",
    	upperFirst: false
    });
    assertNotUndefined(col);
    
    var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];
    
    input.sort(col.getComparator());
    
    var expected = ["str", "string", "strïnG", "strïng", "strïng", "StrinG", "String", "Strïng", "Strïng"];
    
    assertArrayEquals(expected, input);
}

function testCollatorWithSortPrimaryReverse() {
    var col = new ilib.Collator({
    	sensitivity: "primary",
    	reverse: true
    });
    assertNotUndefined(col);
    
    var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];
    
    input.sort(col.getComparator());
    
    var expected = ["strïng", "strïng", "strïnG", "string", "str", "Strïng", "Strïng", "String", "StrinG"];
    
    assertArrayEquals(expected, input);
}

function testCollatorWithSortPrimaryReverseLowerFirst() {
    var col = new ilib.Collator({
    	sensitivity: "primary",
    	reverse: true,
    	upperFirst: false
    });
    assertNotUndefined(col);
    
    var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];
    
    input.sort(col.getComparator());
    
    var expected = ["Strïng", "Strïng", "String", "StrinG", "strïng", "strïng", "strïnG", "string", "str"];
    
    assertArrayEquals(expected, input);
}

function testCollatorWithSortSecondary() {
    var col = new ilib.Collator({
    	sensitivity: "secondary"
    });
    assertNotUndefined(col);
    
    var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];
    
    input.sort(col.getComparator());
    
    // no change from primary
    var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];
    
    assertArrayEquals(expected, input);
}

function testCollatorWithSortTertiary() {
    var col = new ilib.Collator({
    	sensitivity: "tertiary"
    });
    assertNotUndefined(col);
    
    var input = ["Strïng", "strïng", "String", "StrinG", "Strïng", "string", "str", "strïng", "strïnG"];
    
    input.sort(col.getComparator());
    
    // no change from primary
    var expected = ["StrinG", "String", "Strïng", "Strïng", "str", "string", "strïnG", "strïng", "strïng"];
    
    assertArrayEquals(expected, input);
}


function testCollatorWithSortWithSortKeys() {
    var col = new ilib.Collator({
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
        col.sortKey("strïng"), 
        col.sortKey("strïng")
    ];
    
    assertArrayEquals(expected, input);
}
