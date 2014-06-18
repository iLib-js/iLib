/*
 * testcollation_lt.js - test the Collator object in Lithuanian
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

function testJSCollatorQuatUE_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// ua ue üa üz uf
	assertTrue("ua < ue",  col.compare("ua", "ue") < 0);
	assertTrue("ue < üa",  col.compare("ue", "üa") < 0);
	assertTrue("üa < üz", col.compare("üa", "üz") < 0);
	assertTrue("üz < uf",  col.compare("üz", "uf") < 0);
}

function testJSCollatorQuatOE_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// oa oe öa öz of
	assertTrue("oa < oe",  col.compare("oa", "oe") < 0);
	assertTrue("oe < öa",  col.compare("oe", "öa") < 0);
	assertTrue("öa < öz", col.compare("öa", "öz") < 0);
	assertTrue("öz < of",  col.compare("öz", "of") < 0);
}

function testJSCollatorQuatAE_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// aa ae äa äz af
	assertTrue("aa < ae",  col.compare("aa", "ae") < 0);
	assertTrue("ae < äa",  col.compare("ae", "äa") < 0);
	assertTrue("äa < äz", col.compare("äa", "äz") < 0);
	assertTrue("äz < af",  col.compare("äz", "af") < 0);
}

// differences in umlauted characters should be primary differences

function testJSCollatorPhonebookPrimaryAE_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// aa ae äa äz af
	assertTrue("aa < ae",  col.compare("aa", "ae") < 0);
	assertTrue("ae < äa",  col.compare("ae", "äa") < 0);
	assertTrue("äa < äz", col.compare("äa", "äz") < 0);
	assertTrue("äz < af",  col.compare("äz", "af") < 0);
}

function testJSCollatorPhonebookPrimaryOE_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// oa oe öa öz of
	assertTrue("oa < oe",  col.compare("oa", "oe") < 0);
	assertTrue("oe < öa",  col.compare("oe", "öa") < 0);
	assertTrue("öa < öz", col.compare("öa", "öz") < 0);
	assertTrue("öz < of",  col.compare("öz", "of") < 0);
}

function testJSCollatorPhonebookPrimaryUE_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// ua ue üa üz uf
	assertTrue("ua < ue",  col.compare("ua", "ue") < 0);
	assertTrue("ue < üa",  col.compare("ue", "üa") < 0);
	assertTrue("üa < üz", col.compare("üa", "üz") < 0);
	assertTrue("üz < uf",  col.compare("üz", "uf") < 0);
}

function testCollatorNativedeDECase() {
	var col = new ilib.Collator({
		locale: "lt-LT",
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

function testCollatorNativedeDEVariant() {
	var col = new ilib.Collator({
		locale: "lt-LT",
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