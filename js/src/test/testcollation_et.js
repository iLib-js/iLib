/*
 * testcollation_et.js - test the Collator object in Estonian
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

function testJSCollatorQuatS_et() {
	var col = new ilib.Collator({
		locale: "et-EE",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// S Š Z Ž T U V W Õ Ä Ö Ü X Y
	assertTrue("S < Š",  col.compare("S", "Š") < 0);
	assertTrue("Š < Z",  col.compare("Š", "Z") < 0);
}

function testJSCollatorQuatZ_et() {
	var col = new ilib.Collator({
		locale: "et-EE",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// S Š Z Ž T U V W Õ Ä Ö Ü X Y
	assertTrue("Z < Ž",  col.compare("Z", "Ž") < 0);
	assertTrue("Ž < T",  col.compare("Ž", "T") < 0);
}

function testJSCollatorQuatOAOU_et() {
	var col = new ilib.Collator({
		locale: "et-EE",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// S Š Z Ž T U V W Õ Ä Ö Ü X Y
	assertTrue("O < Õ",  col.compare("O", "Õ") < 0);
	assertTrue("Õ < Ä",  col.compare("Õ", "Ä") < 0);
	assertTrue("Ä < Ö",  col.compare("Ä", "Ö") < 0);
	assertTrue("Ö < Ü",  col.compare("Ö", "Ü") < 0);
	assertTrue("Ü < X",  col.compare("Ü", "X") < 0);
	assertTrue("X < Y",  col.compare("X", "Y") < 0);
}

function testJSCollatorPrimaryS_et() {
	var col = new ilib.Collator({
		locale: "et-EE",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// S Š Z Ž T U V W Õ Ä Ö Ü X Y
	assertTrue("S < Š",  col.compare("S", "Š") < 0);
	assertTrue("Š < Z",  col.compare("Š", "Z") < 0);
}

function testJSCollatorPrimaryZ_et() {
	var col = new ilib.Collator({
		locale: "et-EE",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// S Š Z Ž T U V W Õ Ä Ö Ü X Y
	assertTrue("Z < Ž",  col.compare("Z", "Ž") < 0);
	assertTrue("Ž < T",  col.compare("Ž", "T") < 0);
}

function testJSCollatorPrimaryOAOU_et() {
	var col = new ilib.Collator({
		locale: "et-EE",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// S Š Z Ž T U V W Õ Ä Ö Ü X Y
	assertTrue("O < Õ",  col.compare("O", "Õ") < 0);
	assertTrue("Õ < Ä",  col.compare("Õ", "Ä") < 0);
	assertTrue("Ä < Ö",  col.compare("Ä", "Ö") < 0);
	assertTrue("Ö < Ü",  col.compare("Ö", "Ü") < 0);
	assertTrue("Ü < X",  col.compare("Ü", "X") < 0);
	assertTrue("X < Y",  col.compare("X", "Y") < 0);
}

function testJSCollatorQuatLowerS_et() {
	var col = new ilib.Collator({
		locale: "et-EE",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// s š z ž t u v w õ ä ö ü x y
	assertTrue("s < š",  col.compare("s", "š") < 0);
	assertTrue("š < z",  col.compare("š", "z") < 0);
}

function testJSCollatorQuatLowerZ_et() {
	var col = new ilib.Collator({
		locale: "et-EE",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// s š z ž t u v w õ ä ö ü x y
	assertTrue("z < ž",  col.compare("z", "ž") < 0);
	assertTrue("ž < t",  col.compare("ž", "t") < 0);
}

function testJSCollatorQuatoLowerOAOU_et() {
	var col = new ilib.Collator({
		locale: "et-EE",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// s š z ž t u v w õ ä ö ü x y
	assertTrue("o < õ",  col.compare("o", "õ") < 0);
	assertTrue("õ < ä",  col.compare("õ", "ä") < 0);
	assertTrue("ä < ö",  col.compare("ä", "ö") < 0);
	assertTrue("ö < ü",  col.compare("ö", "ü") < 0);
	assertTrue("ü < x",  col.compare("ü", "x") < 0);
	assertTrue("x < y",  col.compare("x", "y") < 0);
}

function testJSCollatorPrimaryLowerS_et() {
	var col = new ilib.Collator({
		locale: "et-EE",
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// s š z ž t u v w õ ä ö ü x y
	assertTrue("s < š",  col.compare("s", "š") < 0);
	assertTrue("š < z",  col.compare("š", "z") < 0);
}

function testJSCollatorPrimaryLowerZ_et() {
	var col = new ilib.Collator({
		locale: "et-EE",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// s š z ž t u v w õ ä ö ü x y
	assertTrue("z < ž",  col.compare("z", "ž") < 0);
	assertTrue("ž < t",  col.compare("ž", "t") < 0);
}

function testJSCollatorPrimaryLowerOAOU_et() {
	var col = new ilib.Collator({
		locale: "et-EE",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// s š z ž t u v w õ ä ö ü x y
	assertTrue("o < õ",  col.compare("o", "õ") < 0);
	assertTrue("õ < ä",  col.compare("õ", "ä") < 0);
	assertTrue("ä < ö",  col.compare("ä", "ö") < 0);
	assertTrue("ö < ü",  col.compare("ö", "ü") < 0);
	assertTrue("ü < x",  col.compare("ü", "x") < 0);
	assertTrue("x < y",  col.compare("x", "y") < 0);
}

function testCollatorNativeCase_et() {
	var col = new ilib.Collator({
		locale: "et-EE",
		useNative: false,
		sensitivity: "case",
		usage: "sort"
	});
    assertNotUndefined(col);

    var input = [
        "zu",
        "Šu",
        "aw",
        "žu",
        "šu",
        "aö",
        "ax",
        "za",
        "su",
        "ža",
        "Su",
        "žž",
        "ao",
        "zz",
        "aÖ",
        "Žo"
	];

    input.sort(col.getComparator());

    var expected = [
        "ao",
        "aw",
        "aÖ",
        "aö",
        "ax",
        "Su",
        "su",
        "Šu",
        "šu",
        "za",
        "zz",
        "zu",
        "Žo",
        "ža",
        "žž",
        "žu"
	];

    assertArrayEquals(expected, input);
}

function testCollatorNativeVariant_et() {
	var col = new ilib.Collator({
		locale: "et-EE",
		useNative: false,
		sensitivity: "variant",
		upperFirst: true,
		usage: "sort"
	});
    assertNotUndefined(col);

    var input = [
		"zu",
		"Šu",
		"aw",
		"žu",
		"šu",
		"aö",
		"ax",
		"za",
		"su",
		"ža",
		"Su",
		"žž",
		"ao",
		"zz",
        "šu",
		"aÖ",
		"Žo"
	];

    input.sort(col.getComparator());

    var expected = [
		"ao",
		"aw",
		"aÖ",
		"aö",
		"ax",
		"Su",
		"su",
		"Šu",
        "šu",
		"šu",
		"za",
		"zz",
		"zu",
		"Žo",
		"žž",
		"ža",
		"žu"
	];

    assertArrayEquals(expected, input);
}

