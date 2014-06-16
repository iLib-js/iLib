/*
 * testcollation_es.js - test the Collator object in Spanish
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

function testJSCollatorTraditionalQuatCH_es() {
	var col = new ilib.Collator({
		locale: "es-ES",
		useNative: false,
		sensitivity: "quaternary",
		style: "traditional"
	});

	assertNotUndefined(col);

	// a b c ch d
	assertTrue("a < b",  col.compare("a", "b") < 0);
	assertTrue("b < c",  col.compare("b", "c") < 0);
	assertTrue("ca < ch", col.compare("ca", "ch") < 0);
	assertTrue("cz < ch",  col.compare("cz", "ch") < 0);
	assertTrue("ch < d",  col.compare("ch", "d") < 0);
}

function testJSCollatorTraditionalQuatLL_es() {
	var col = new ilib.Collator({
		locale: "es-ES",
		useNative: false,
		sensitivity: "quaternary",
		style: "traditional"
	});

	assertNotUndefined(col);

	// k l ll m
	assertTrue("k < l",  col.compare("k", "l") < 0);
	assertTrue("l < ll",  col.compare("l", "ll") < 0);
	assertTrue("la < ll", col.compare("la", "ll") < 0);
	assertTrue("lz < ll",  col.compare("lz", "ll") < 0);
	assertTrue("ll < m",  col.compare("ll", "m") < 0);
}

function testJSCollatorTraditionalQuatEnye_es() {
	var col = new ilib.Collator({
		locale: "es-ES",
		useNative: false,
		sensitivity: "quaternary",
		style: "traditional"
	});

	assertNotUndefined(col);

	// m n ñ o
	assertTrue("m < n",  col.compare("m", "n") < 0);
	assertTrue("n < ñ",  col.compare("n", "ñ") < 0);
	assertTrue("ñ < ñ (combining)",  col.compare("ñ", "ñ") < 0);
	assertTrue("ñ (combining) < o", col.compare("ñ", "o") < 0);
	assertTrue("ñ < o", col.compare("ñ", "o") < 0);
}

// differences in ch rr ll and ñ should be primary differences

function testJSCollatorTraditionalPrimaryCH_es() {
	var col = new ilib.Collator({
		locale: "es-ES",
		useNative: false,
		sensitivity: "primary",
		style: "traditional"
	});

	assertNotUndefined(col);

	// a b c ch d
	assertTrue("a < b",  col.compare("a", "b") < 0);
	assertTrue("b < c",  col.compare("b", "c") < 0);
	assertTrue("ca < ch", col.compare("ca", "ch") < 0);
	assertTrue("cz < ch",  col.compare("cz", "ch") < 0);
	assertTrue("ch < d",  col.compare("ch", "d") < 0);
}

function testJSCollatorTraditionalPrimaryLL_es() {
	var col = new ilib.Collator({
		locale: "es-ES",
		useNative: false,
		sensitivity: "primary",
		style: "traditional",
		usage: "search"
	});

	assertNotUndefined(col);

	// k l ll m
	assertTrue("k < l",  col.compare("k", "l") < 0);
	assertTrue("l < ll",  col.compare("l", "ll") < 0);
	assertTrue("la < ll", col.compare("la", "ll") < 0);
	assertTrue("lz < ll",  col.compare("lz", "ll") < 0);
	assertTrue("ll < m",  col.compare("ll", "m") < 0);
}

function testJSCollatorTraditionalPrimaryEnye_es() {
	var col = new ilib.Collator({
		locale: "es-ES",
		useNative: false,
		sensitivity: "primary",
		style: "traditional",
		usage: "search"
	});

	assertNotUndefined(col);

	// m n ñ o
	assertTrue("m < n",  col.compare("m", "n") < 0);
	assertTrue("n < ñ",  col.compare("n", "ñ") < 0);
	assertTrue("ñ = ñ (combining)",  col.compare("ñ", "ñ") === 0);
	assertTrue("ñ < o", col.compare("ñ", "o") < 0);
}

function testCollatorSortWithCase_es() {
	var col = new ilib.Collator({
		locale: "es-ES",
		sensitivity: "tertiary",
		usage: "sort",
		style: "traditional",
		useNative: false
	});
    assertNotUndefined(col);

    var input = [
        "nortenado",
        "chicharones",
        "lave",
        "lugar",
        "calle",
        "mestizo",
        "calabria",
        "czeke",
        "baila",
        "Navidad",
        "norteña",
        "Mestizo",
        "nortenudo",
        "color",
        "llave",
        "calsificasion"
	];

    input.sort(col.getComparator());

    var expected = [
		"baila",
		"calabria",
		"calsificasion",
		"calle",
		"color",
		"czeke",
		"chicharones",
		"lave",
		"lugar",
		"llave",
		"Mestizo",
		"mestizo",
		"Navidad",
		"nortenado",
		"nortenudo",
		"norteña"
	];

    assertArrayEquals(expected, input);
}

function testCollatorWithVariants_es() {
	var col = new ilib.Collator({
		locale: "es-ES",
		sensitivity: "tertiary",
		usage: "sort",
		style: "traditional",
		useNative: false
	});
    assertNotUndefined(col);

    var input = [
        "nortenado",
        "chicharones",
        "lugar",
        "calle",
        "mestizo",
        "calabria",
        "czeke",
        "baila",
        "Navidad",
        "norteña",
        "Mestizo",
        "nortenudo",
        "color",
        "llave",
        "norteña",
        "lave",
        "calsificasion"
	];

    input.sort(col.getComparator());

    var expected = [
		"baila",
		"calabria",
		"calsificasion",
		"calle",
		"color",
		"czeke",
		"chicharones",
		"lave",
		"lugar",
		"llave",
		"Mestizo",
		"mestizo",
		"Navidad",
		"nortenado",
		"nortenudo",
		"norteña",
        "norteña"
	];

    assertArrayEquals(expected, input);
}