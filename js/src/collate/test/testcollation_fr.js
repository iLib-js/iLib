/*
 * testcollation_fr.js - test the Collator object in French
 * 
 * Copyright © 2013-2014, JEDLSoft
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

