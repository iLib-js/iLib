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

function testJSCollatorQuat_cs() {
	var col = new ilib.Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	//  
	
	assertTrue("ώ < ώ", col.compare("ώ", "ώ") < 0);
}

function testJSCollatorTer_cs() {
	var col = new ilib.Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α < α", col.compare("Α", "α") < 0);
}

function testJSCollatorSec_cs() {
	var col = new ilib.Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α = α", col.compare("Α", "α") === 0);
}

function testJSCollatorPri_cs() {
	var col = new ilib.Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α = α", col.compare("Α", "α") === 0);
}

function testJSCollatorQuatSort_cs() {
	var col = new ilib.Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "quaternary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α < α", col.compare("Α", "α") < 0);
}

function testJSCollatorTerSort_cs() {
	var col = new ilib.Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "tertiary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α < α", col.compare("Α", "α") < 0);
}

function testJSCollatorSecSort_cs() {
	var col = new ilib.Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "secondary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α < α", col.compare("Α", "α") < 0);
}

function testJSCollatorPriSort_cs() {
	var col = new ilib.Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});

	assertNotUndefined(col);

	// Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ 
	
	assertTrue("Α < α", col.compare("Α", "α") < 0);
}

function testCollatorCase_cs() {
	var col = new ilib.Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "case",
		usage: "sort"
	});
    assertNotUndefined(col);
    
    var input = [
 	    "ΐ", 
	    "ί̈", 
 	    "Α", 
	    "ξ", 
	    "ΐ", 
	    "σ", 
	    "Η", 
	    "Κ", 
	    "ϊ", 
	    "ά", 
	    "ω", 
	    "ώ", 
	    "α", 
	    "Σ", 
	    "ϊ", 
	    "Δ", 
	    "ά", 
	    "ώ",
	    "Ή", 
	    "Ι", 
	    "ι", 
	    "ς",
	    "Ψ"
	];

    input.sort(col.getComparator());

    var expected = [
	    "Α", 
	    "α", 
	    "ά", 
	    "ά", 
	    "Δ", 
	    "Η", 
	    "Ή", 
	    "Ι", 
	    "ι", 
	    "ϊ", 
	    "ϊ", 
	    "ΐ", 
	    "ΐ", 
	    "ί̈", 
	    "Κ", 
	    "ξ", 
	    "Σ", 
	    "σ", 
	    "ς",
	    "Ψ", 
	    "ω", 
	    "ώ", 
	    "ώ"
	];

    assertArrayEquals(expected, input);
}

function testCollatorPrimary_cs() {
	var col = new ilib.Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});
    assertNotUndefined(col);

    var input = [
	    "ΐ", 
	    "ας",
	    "ί̈", 
 	    "Α", 
	    "ξ", 
	    "ΐ", 
	    "σ", 
	    "Η", 
	    "Κ", 
	    "αδ",
	    "ϊ", 
	    "ά", 
	    "ω", 
	    "ώ", 
	    "α", 
	    "Σ", 
	    "ϊ", 
	    "Δ", 
	    "ά", 
	    "ώ",
	    "Ή", 
	    "Ι", 
	    "ι", 
	    "ς",
	    "Ψ"
	];

    input.sort(col.getComparator());

    var expected = [
	    "Α", 
	    "α",
	    "αδ",
	    "ας",
	    "ά", 
	    "ά", 
	    "Δ", 
	    "Η", 
	    "Ή", 
	    "Ι", 
	    "ι", 
	    "ϊ", 
	    "ϊ", 
	    "ΐ", 
	    "ΐ", 
	    "ί̈", 
	    "Κ", 
	    "ξ", 
	    "Σ", 
	    "σ", 
	    "ς",
	    "Ψ", 
	    "ω", 
	    "ώ", 
	    "ώ"
    ];

    assertArrayEquals(expected, input);
}

function testCollatorIgnoreStressMarks_cs() {
	var col = new ilib.Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});
    assertNotUndefined(col);

    var comp = col.getComparator();
    
    // ignore stress marks
    assertEquals(0, comp("παϊδάκια", "παιδάκια"));
    assertEquals(0, comp("Αθηνά", "Αθήνα"));
}

function testJSCollatorQuatLatin_cs() {
	var col = new ilib.Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// all latin letters
	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("a < B", col.compare("a", "B") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("b < C", col.compare("b", "C") < 0);
	assertTrue("C < c", col.compare("C", "c") < 0);
	assertTrue("c < D", col.compare("c", "D") < 0);
	assertTrue("D < d", col.compare("D", "d") < 0);
	assertTrue("d < E", col.compare("d", "E") < 0);
	assertTrue("E < e", col.compare("E", "e") < 0);
	assertTrue("e < F", col.compare("e", "F") < 0);
	assertTrue("F < f", col.compare("F", "f") < 0);
	assertTrue("f < G", col.compare("f", "G") < 0);
	assertTrue("G < g", col.compare("G", "g") < 0);
	assertTrue("g < H", col.compare("g", "H") < 0);
	assertTrue("H < h", col.compare("H", "h") < 0);
	assertTrue("h < I", col.compare("h", "I") < 0);
	assertTrue("I < i", col.compare("I", "i") < 0);
}

function testCollatorPrimaryMixed_cs() {
	var col = new ilib.Collator({
		locale: "cs-CZ",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});
    assertNotUndefined(col);

    var input = [
 	    "ΐ", 
	    "ας",
	    "Σ", 
	    "ϊ", 
	    "Δ", 
        "orange",
	    "ί̈", 
        "peach",
	    "ΐ", 
	    "σ", 
	    "Η", 
	    "Κ", 
        "apple",
	    "αδ",
	    "ϊ", 
	    "ά", 
	    "ω", 
        "raspberry",
 	    "Α", 
	    "ξ", 
	    "ώ", 
	    "α", 
	    "Ή", 
	    "Ι", 
	    "ι", 
	    "ά", 
	    "ώ",
        "banana",
	    "ς",
	    "Ψ"
	];

    input.sort(col.getComparator());

    // Latin letters sort after the Cyrillic ones
    
    var expected = [
	    "Α", 
	    "α",
	    "αδ",
	    "ας",
	    "ά", 
	    "ά", 
	    "Δ", 
	    "Η", 
	    "Ή", 
	    "Ι", 
	    "ι", 
	    "ϊ", 
	    "ϊ", 
	    "ΐ", 
	    "ΐ", 
	    "ί̈", 
	    "Κ", 
	    "ξ", 
	    "Σ", 
	    "σ", 
	    "ς",
	    "Ψ", 
	    "ω", 
	    "ώ", 
	    "ώ",
        "apple",
        "banana",
        "orange",
        "peach",
        "raspberry"
	];

    assertArrayEquals(expected, input);
}
