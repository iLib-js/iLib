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
		sensitivity: "primary"
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
		sensitivity: "primary"
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
		sensitivity: "primary"
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

/*
function testCollatorNativeCase_et() {
	var col = new ilib.Collator({
		locale: "et-EE",
		useNative: false,
		sensitivity: "case",
		usage: "sort"
	});
    assertNotUndefined(col);

    var input = [
        "Flüße",
        "Montags",
		"Sonntag",
		"Flüsse",
		"fuße",
		"flüße",
		"Montag",
		"Dienstag",
		"Januar",
		"Februar",
		"März",
		"Fuße",
		"Flusse",
		"flusse",
		"flüsse",
		"Fluße",
		"Fuß"
	];

    input.sort(col.getComparator());

    var expected = [
		"Dienstag",
		"Februar",
		"Flüsse",
		"Flüße",
		"Flusse",
		"Fluße",
		"Fuß",
		"Fuße",
		"flüsse",
		"flüße",
		"flusse",
		"fuße",
		"Januar",
		"März",
		"Montag",
		"Montags",
		"Sonntag"	                    
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
		"Fuße",
		"flüsse",
		"flüße",
		"flusse",
		"fluße",
		"Januar",
		"März",
		"Montag",
		"Montags",
		"Sonntag"	                    
	];

    assertArrayEquals(expected, input);
}
*/