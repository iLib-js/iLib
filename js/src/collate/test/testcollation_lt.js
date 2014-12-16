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

function testJSCollatorQuatCD_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
	// c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
	assertTrue("C < Č",  col.compare("C", "Č") < 0);
	assertTrue("Č < D",  col.compare("Č", "D") < 0);
	assertTrue("c < č", col.compare("c", "č") < 0);
	assertTrue("č < d",  col.compare("č", "d") < 0);
}

function testJSCollatorQuatEF_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
	// c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
	assertTrue("E < Ę",  col.compare("E", "Ę") < 0);
	assertTrue("Ę < Ė",  col.compare("Ę", "Ė") < 0);
	assertTrue("Ė < F",  col.compare("Ė", "F") < 0);
	assertTrue("e < ę",  col.compare("e", "ę") < 0);
	assertTrue("ę < ė", col.compare("ę", "ė") < 0);
	assertTrue("ė < f",  col.compare("ė", "f") < 0);
}

function testJSCollatorQuatIJ_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
	// c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
	assertTrue("I < Į",  col.compare("I", "Į") < 0);
	assertTrue("Į < Y",  col.compare("Į", "Y") < 0);
	assertTrue("Y < J",  col.compare("Y", "J") < 0);
	assertTrue("i < į",  col.compare("i", "į") < 0);
	assertTrue("į < y", col.compare("į", "y") < 0);
	assertTrue("y < j",  col.compare("y", "j") < 0);
}

function testJSCollatorQuatST_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
	// c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
	assertTrue("S < Š",  col.compare("S", "Š") < 0);
	assertTrue("Š < T",  col.compare("Š", "T") < 0);
	assertTrue("s < š", col.compare("s", "š") < 0);
	assertTrue("š < t",  col.compare("š", "t") < 0);
}

function testJSCollatorQuatUV_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
	// c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
	assertTrue("U < Ų",  col.compare("U", "Ų") < 0);
	assertTrue("Ų < Ū",  col.compare("Ų", "Ū") < 0);
	assertTrue("Ū < V",  col.compare("Ū", "V") < 0);
	assertTrue("u < ų",  col.compare("u", "ų") < 0);
	assertTrue("ų < ū", col.compare("ų", "ū") < 0);
	assertTrue("ū < v",  col.compare("ū", "v") < 0);
}

function testJSCollatorQuatZ_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
	// c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
	assertTrue("Z < Ž",  col.compare("Z", "Ž") < 0);
	assertTrue("z < ž",  col.compare("z", "ž") < 0);
}

// differences in accented characters should be primary differences

function testJSCollatorPrimaryCD_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
	// c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
	assertTrue("C < Č",  col.compare("C", "Č") < 0);
	assertTrue("Č < D",  col.compare("Č", "D") < 0);
	assertTrue("c < č", col.compare("c", "č") < 0);
	assertTrue("č < d",  col.compare("č", "d") < 0);
}

function testJSCollatorPrimaryEF_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
	// c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
	assertTrue("E < Ę",  col.compare("E", "Ę") < 0);
	assertTrue("Ę < Ė",  col.compare("Ę", "Ė") < 0);
	assertTrue("Ė < F",  col.compare("Ė", "F") < 0);
	assertTrue("e < ę",  col.compare("e", "ę") < 0);
	assertTrue("ę < ė", col.compare("ę", "ė") < 0);
	assertTrue("ė < f",  col.compare("ė", "f") < 0);
}

function testJSCollatorPrimaryIJ_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
	// c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
	assertTrue("I < Į",  col.compare("I", "Į") < 0);
	assertTrue("Į < Y",  col.compare("Į", "Y") < 0);
	assertTrue("Y < J",  col.compare("Y", "J") < 0);
	assertTrue("i < į",  col.compare("i", "į") < 0);
	assertTrue("į < y", col.compare("į", "y") < 0);
	assertTrue("y < j",  col.compare("y", "j") < 0);
}

function testJSCollatorPrimaryST_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
	// c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
	assertTrue("S < Š",  col.compare("S", "Š") < 0);
	assertTrue("Š < T",  col.compare("Š", "T") < 0);
	assertTrue("s < š", col.compare("s", "š") < 0);
	assertTrue("š < t",  col.compare("š", "t") < 0);
}

function testJSCollatorPrimaryUV_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
	// c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
	assertTrue("U < Ų",  col.compare("U", "Ų") < 0);
	assertTrue("Ų < Ū",  col.compare("Ų", "Ū") < 0);
	assertTrue("Ū < V",  col.compare("Ū", "V") < 0);
	assertTrue("u < ų",  col.compare("u", "ų") < 0);
	assertTrue("ų < ū", col.compare("ų", "ū") < 0);
	assertTrue("ū < v",  col.compare("ū", "v") < 0);
}

function testJSCollatorPrimaryZ_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
	// c č d e ę ė f .. i į y j .. s š t u ų ū v z ž
	assertTrue("Z < Ž",  col.compare("Z", "Ž") < 0);
	assertTrue("z < ž",  col.compare("z", "ž") < 0);
}

function testCollatorNativeCase_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "case",
		usage: "sort"
	});
    assertNotUndefined(col);

    var input = [
   		"eĖ",
		"ua",
		"ca",
		"Ža",
		"ųa",
		"Ūa",
		"Za",
		"Št",
		"ža",
		"ūa",
		"Va",
		"ča",
		"Da",
		"ee",
		"eę",
		"eF",
		"yo",
		"Tt",
		"Įo",
		"za",
		"Ua",
		"io",
		"va",
		"įo",
 		"Ca",
		"jo",
		"eĘ",
		"Ča",
		"St",
		"da",
		"ef",
		"Yo",
		"eE",
		"Ųa",
		"št",
		"Jo",
		"tt",
		"st",
		"eė",
		"Io"
	];

    input.sort(col.getComparator());

	// C Č D E Ę Ė F .. I Į Y J .. S Š T U Ų Ū V Z Ž
	// c č d e ę ė f .. i į y j .. s š t u ų ū v z ž

    var expected = [
		"Ca",
		"ca",
		"Ča",
		"ča",
		"Da",
		"da",
		"eE",
		"ee",
		"eĘ",
		"eę",
		"eĖ",
		"eė",
		"eF",
		"ef",
		"Io",
		"io",
		"Įo",
		"įo",
		"Yo",
		"yo",
		"Jo",
		"jo",
		"St",
		"st",
		"Št",
		"št",
		"Tt",
		"tt",
		"Ua",
		"ua",
		"Ųa",
		"ųa",
		"Ūa",
		"ūa",
		"Va",
		"va",
		"Za",
		"za",
		"Ža",
		"ža"
	];

    assertArrayEquals(expected, input);
}

function testCollatorNativeVariant_lt() {
	var col = new ilib.Collator({
		locale: "lt-LT",
		useNative: false,
		sensitivity: "variant",
		upperFirst: true,
		usage: "sort"
	});
    assertNotUndefined(col);

    var input = [
		"eĖ",
		"ua",
		"ca",
		"št",
		"ūa",
		"Ža",
		"ųa",
		"Ūa",
		"Za",
		"Št",
		"ža",
		"ūa",
		"Va",
		"ča",
		"Da",
		"ee",
		"eę",
		"Ža",
		"eF",
		"yo",
		"Ūa",
		"Tt",
		"Įo",
		"za",
		"Št",
		"Ua",
		"Ča",
		"io",
		"va",
		"įo",
		"Ca",
		"jo",
		"eĘ",
		"Ča",
		"ža",
		"St",
		"da",
		"ef",
		"Ųa",
		"Yo",
		"eE",
		"Ųa",
		"št",
		"Jo",
		"tt",
		"st",
		"ča",
		"eė",
		"Io"
	];

    input.sort(col.getComparator());

    var expected = [
		"Ca",
		"ca",
		"Ča",
		"Ča",
		"ča",
		"ča",
		"Da",
		"da",
		"eE",
		"ee",
		"eĘ",
		"eę",
		"eĖ",
		"eė",
		"eF",
		"ef",
		"Io",
		"io",
		"Įo",
		"įo",
		"Yo",
		"yo",
		"Jo",
		"jo",
		"St",
		"st",
		"Št",
		"Št",
		"št",
		"št",
		"Tt",
		"tt",
		"Ua",
		"ua",
		"Ųa",
		"Ųa",
		"ųa",
		"Ūa",
		"Ūa",
		"ūa",
		"ūa",
		"Va",
		"va",
		"Za",
		"za",
		"Ža",
		"Ža",
		"ža",
		"ža"
	];

    assertArrayEquals(expected, input);
}