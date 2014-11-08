/*
 * testutils.js - test the utility routines
 * 
 * Copyright © 2012, JEDLSoft
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

function testBsearch() {
    var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    assertEquals(5, ilib.bsearch(10, array));
}

function testBsearchEmptyArray() {
    var array = [];
    
    assertEquals(0, ilib.bsearch(10, array));
}

function testBsearchUndefinedArray() {
    assertEquals(-1, ilib.bsearch(10, undefined));
}

function testBsearchUndefinedTarget() {
    var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    assertEquals(-1, ilib.bsearch(undefined, array));
}

function testBsearchBefore() {
    var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    assertEquals(0, ilib.bsearch(0, array));
}

function testBsearchAfter() {
    var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    assertEquals(10, ilib.bsearch(20, array));
}

function testBsearchExact() {
    var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    // place it right after the exact match
    assertEquals(7, ilib.bsearch(15, array));
}

function testBsearchExactBeginning() {
    var array = [0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    // place it right after the exact match
    assertEquals(0, ilib.bsearch(0, array));
}

function testBsearchExactEnd() {
    var array = [0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    // place it right after the exact match
    assertEquals(10, ilib.bsearch(19, array));
}

function testBsearchMonthEdge() {
    var array = [0,31,60,91,121,152,182,213,244,274,305,335,366];
    
    assertEquals(6, ilib.bsearch(182, array));
}

function strcmp(left, right) {
    return left.localeCompare(right);
}
   
function testBsearchStrings() {
    var array = [
        "barley", 
        "cardomum", 
        "eggs", 
        "garlic", 
        "jackfruit", 
        "limes", 
        "orange", 
        "quince", 
        "spaghetti", 
        "veal"
    ];
    
    assertEquals(6, ilib.bsearch("mango", array, strcmp));
}

function testBsearchStringsBefore() {
    var array = [
        "barley", 
        "cardomum", 
        "eggs", 
        "garlic", 
        "jackfruit", 
        "limes", 
        "orange", 
        "quince", 
        "spaghetti", 
        "veal"
    ];
    
    assertEquals(0, ilib.bsearch("apple", array, strcmp));
}

function testBsearchStringsAfter() {
    var array = [
        "barley", 
        "cardomum", 
        "eggs", 
        "garlic", 
        "jackfruit", 
        "limes", 
        "orange", 
        "quince", 
        "spaghetti", 
        "veal"
    ];
    
    assertEquals(10, ilib.bsearch("zucchini", array, strcmp));
}

function testBisectionSearchSimple() {
    assertRoughlyEquals(5.5, ilib.bisectionSearch(16, 0, 10, 1e-12, function linear(x) {
    	return 2 * x + 5;
    }), 1e-12);
}

function testBisectionSearchMoreComplex() {
    assertRoughlyEquals(4, ilib.bisectionSearch(16, 0, 10, 1e-12, function square(x) {
    	return x * x;
    }), 1e-12);
}

function testBisectionSearchTrig() {
    assertRoughlyEquals(30, ilib.bisectionSearch(0.5, 0, 90, 1e-11, function sinInDegrees(x) {
    	return Math.sin(x * Math.PI / 180);
    }), 1e-9);
}

function testBisectionSearchVeryComplex() {
    assertRoughlyEquals(-0.66666666666666, ilib.bisectionSearch(0, -0.9, 0, 1e-13, function polynomial(x) {
    	var coeff = [2, 5, 3];
    	var xpow = 1;
    	var ret = 0;
    	for (var i = 0; i < coeff.length; i++) {
    		ret += coeff[i] * xpow;
    		xpow *= x;
    	}
    	return ret;
    }), 1e-13);
}

function testModSimple() {
    assertObjectEquals(2, ilib.mod(2, 4));
}

function testModWrap() {
    assertObjectEquals(2, ilib.mod(6, 4));
}

function testModWrapNeg() {
    assertObjectEquals(2, ilib.mod(-6, 4));
}

function testModZeroModulus() {
    assertObjectEquals(0, ilib.mod(6, 0));
}

function testModZeroNum() {
    assertObjectEquals(0, ilib.mod(0, 6));
}

function testModReal() {
    assertRoughlyEquals(2.234231, ilib.mod(2.234231, 4), 0.0000001);
}
function testModRealWrap() {
    assertRoughlyEquals(2.234231, ilib.mod(6.234231, 4), 0.0000001);
}
function testModRealNeg() {
    assertRoughlyEquals(1.7, ilib.mod(-6.3, 4), 0.0000001);
}

function testAmodSimple() {
    assertObjectEquals(2, ilib.amod(2, 4));
}

function testAmodWrap() {
    assertObjectEquals(2, ilib.amod(6, 4));
}

function testAmodWrapNeg() {
    assertObjectEquals(2, ilib.amod(-6, 4));
}

function testAmodZeroModulus() {
    assertObjectEquals(0, ilib.amod(6, 0));
}

function testAmodZeroNum() {
    assertObjectEquals(6, ilib.amod(0, 6));
}

function testAmodReal() {
    assertRoughlyEquals(2.234231, ilib.amod(2.234231, 4), 0.0000001);
}
function testAmodRealWrap() {
    assertRoughlyEquals(2.234231, ilib.amod(6.234231, 4), 0.0000001);
}
function testAmodRealNeg() {
    assertRoughlyEquals(1.7, ilib.amod(-6.3, 4), 0.0000001);
}

function testMergeSimple() {
    var object1 = {"a": "A", "b": "B"},
        object2 = {"c": "C", "d": "D"};
    
    assertObjectEquals({"a": "A", "b": "B", "c": "C", "d": "D"}, ilib.merge(object1, object2));
}

function testMergeSimpleNoSideEffects() {
    var object1 = {"a": "A", "b": "B"},
        object2 = {"c": "C", "d": "D"};
    
    var x = ilib.merge(object1, object2);
    
    assertNotUndefined(x);
    assertObjectEquals({"a": "A", "b": "B"}, object1);
}

function testMergeArrays() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": ["d"]};
    assertObjectEquals({"a": ["b", "c", "d"]}, ilib.merge(object1, object2));
}

function testMergeArraysDups() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": ["c", "d"]};
    
    assertObjectEquals({"a": ["b", "c", "c", "d"]}, ilib.merge(object1, object2));
}

function testMergeArraysEmptySource() {
    var object1 = {"a": []},
        object2 = {"a": ["d"]};
    
    assertObjectEquals({"a": ["d"]}, ilib.merge(object1, object2));
}

function testMergeArraysEmptyTarget() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": []};
    
    assertObjectEquals({"a": ["b", "c"]}, ilib.merge(object1, object2));
}

function testMergeArraysIncongruentTypes1() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": "d"};
    
    assertObjectEquals({"a": "d"}, ilib.merge(object1, object2));
}

function testMergeArraysIncongruentTypes2() {
    var object1 = {"a": "b"},
        object2 = {"a": ["d"]};
    
    assertObjectEquals({"a": ["d"]}, ilib.merge(object1, object2));
}

function testMergeSimpleProperty() {
    var object1 = {"a": "A", "b": "B"},
        object2 = {"b": "X"};
    
    assertObjectEquals({"a": "A", "b": "X"}, ilib.merge(object1, object2));
}

function testMergeComplexProperty() {
    var object1 = {"a": "A", "b": {"x": "B"}},
        object2 = {"b": "X"};
    
    assertObjectEquals({"a": "A", "b": "X"}, ilib.merge(object1, object2));
}

function testMergeSubobjects() {
    var object1 = {"b": {"x": "X", "y": "Y"}},
        object2 = {"b": {"x": "M", "y": "N"}};
    
    assertObjectEquals({"b": {"x": "M", "y": "N"}}, ilib.merge(object1, object2));
}

function testMergeSubobjectsLeaveObj1PropsUntouched() {
    var object1 = {"a": "A", "b": {"x": "X", "y": "Y", "z": "Z"}},
        object2 = {"b": {"x": "M", "y": "N"}};
    
    assertObjectEquals({"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}}, ilib.merge(object1, object2));
}

function testMergeSubobjectsAddProps() {
    var object1 = {"a": "A", "b": {"x": "X", "y": "Y"}},
        object2 = {"b": {"x": "M", "y": "N", "z": "Z"}};
    
    assertObjectEquals({"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}}, ilib.merge(object1, object2));
}

function testMergeSubobjectsAddProps() {
    var object1 = {"a": "A", "b": {"x": "X", "y": "Y"}},
        object2 = {"b": {"x": "M", "y": "N", "z": "Z"}};
    
    assertObjectEquals({"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}}, ilib.merge(object1, object2));
}

function testMergeBooleans() {
    var object1 = {"a": true, "b": true},
        object2 = {"b": false};
    
    assertObjectEquals({"a": true, "b": false}, ilib.merge(object1, object2));
}

function testMergeAddBooleans() {
    var object1 = {"a": true, "b": true},
        object2 = {"c": false};
    
    assertObjectEquals({"a": true, "b": true, "c": false}, ilib.merge(object1, object2));
}

function testMergeNumbers() {
    var object1 = {"a": 1, "b": 2},
        object2 = {"b": 3};
    
    assertObjectEquals({"a": 1, "b": 3}, ilib.merge(object1, object2));
}

function testMergeNumbersWithZero() {
    var object1 = {"a": 1, "b": 2},
        object2 = {"b": 0};
    
    assertObjectEquals({"a": 1, "b": 0}, ilib.merge(object1, object2));
}

function testMergeNumbersAddZero() {
    var object1 = {"a": 1, "b": 2},
        object2 = {"c": 0};
    
    assertObjectEquals({"a": 1, "b": 2, "c": 0}, ilib.merge(object1, object2));
}

function testIsEmptyFalse() {
    var object = {"a": "A"};
    
    assertFalse(ilib.isEmpty(object));
}

function testIsEmptyTrue() {
    var object = {};
    
    assertTrue(ilib.isEmpty(object));
}

function testIsEmptyUndefined() {
    assertTrue(ilib.isEmpty(undefined));
}

function testIsEmptyUndefinedProperties() {
    var object = {"a": undefined};
    
    assertTrue(ilib.isEmpty(object));
}

function testIsEmptyFalsyValues() {
    var object = {"a": false, "b": 0};
    
    assertFalse(ilib.isEmpty(object));
}

function testShallowCopy() {
    var src = {"a": "b"};
    var tgt = {};
    
    assertTrue(typeof(tgt.a) === "undefined");
    
    ilib.shallowCopy(src, tgt);
    
    assertFalse(typeof(tgt.a) === "undefined");
}

function testShallowCopyRightValues() {
    var src = {
    	"a": "b", 
    	"c": {
    		"d": "e", 
    		"f": 23
    	}
    };
    var tgt = {};
    
    assertTrue(typeof(tgt.a) === "undefined");
    
    ilib.shallowCopy(src, tgt);
    
    assertEquals("b", tgt.a);
    assertEquals("e", tgt.c.d);
    assertEquals(23, tgt.c.f);
}

function testShallowCopyUndefined() {
    var src = undefined;
    var tgt = {};
    
    assertTrue(typeof(tgt) !== undefined);
    assertTrue(ilib.isEmpty(tgt));
    
    ilib.shallowCopy(src, tgt);
    
    assertTrue(typeof(tgt) !== undefined);
    assertTrue(ilib.isEmpty(tgt));
}

function testShallowCopyToUndefined() {
    var src = {
    	"a": "b", 
    	"c": {
    		"d": "e", 
    		"f": 23
    	}
    };
    var tgt = undefined;
    
    assertUndefined(tgt);
    
    try {
    	ilib.shallowCopy(src, tgt);
    	assertUndefined(tgt);
    } catch (e) {
    	fail();
    }
}

function testShallowCopyEmpty() {
    var src = {};
    var tgt = {};
    
    assertTrue(ilib.isEmpty(tgt));
    ilib.shallowCopy(src, tgt);
    assertTrue(ilib.isEmpty(tgt));
}

function testShallowCopyEmptyValues() {
    var src = {
    	"a": 0, 
    	"b": "",
    	"c": null,
    	"d": undefined
    };
    var tgt = {};
    
    ilib.shallowCopy(src, tgt);
    
    assertEquals(0, tgt.a);
    assertEquals("", tgt.b);
    assertEquals(null, tgt.c);
    assertEquals(undefined, tgt.d);
}

function testSignumPositive() {
    assertEquals(1, ilib.signum(1));
}

function testSignumPositiveLarge() {
    assertEquals(1, ilib.signum(1345234));
}

function testSignumNegative() {
    assertEquals(-1, ilib.signum(-1));
}

function testSignumPositiveLarge() {
    assertEquals(-1, ilib.signum(-13234));
}

function testSignumZero() {
    assertEquals(1, ilib.signum(0));
}

function testSignumStringNumberPositive() {
    assertEquals(1, ilib.signum("1345234"));
}

function testSignumStringNumberNegative() {
    assertEquals(-1, ilib.signum("-1345234"));
}

function testSignumUndefined() {
    assertEquals(1, ilib.signum());
}

function testSignumNull() {
    assertEquals(1, ilib.signum(null));
}

function testSignumStringNonNumber() {
    assertEquals(1, ilib.signum("rafgasdf"));
}

function testSignumBoolean() {
    assertEquals(1, ilib.signum(true));
    assertEquals(1, ilib.signum(false));
}

function testSignumFunction() {
    assertEquals(1, ilib.signum(function () { return -4; }));
}

function testMergeLocData() {
	ilib.data.foobar = {
		a: "b",
		c: "d"
	};
	ilib.data.foobar_de = {
		a: "e"
	};
	ilib.data.foobar_de_DE = {
   		c: "f"
   	};
	ilib.data.foobar_de_Latn_DE = {
		g: "h"
	};
	ilib.data.foobar_de_Latn_DE_SAP = {
   		g: "i"
   	};

	var locale = new ilib.Locale("de-DE-Latn-SAP");
	var m = ilib.mergeLocData("foobar", locale);
	assertEquals("e", m.a);
	assertEquals("f", m.c);
	assertEquals("i", m.g);
}

function testMergeLocDataNoLocale() {
	ilib.data.foobar = {
		a: "b",
		c: "d"
	};
	ilib.data.foobar_de = {
		a: "e"
	};
	ilib.data.foobar_de_DE = {
   		c: "f"
   	};
	ilib.data.foobar_de_Latn_DE = {
		g: "h"
	};
	ilib.data.foobar_de_Latn_DE_SAP = {
   		g: "i"
   	};

	var locale = new ilib.Locale("-");
	var m = ilib.mergeLocData("foobar", locale);
	assertEquals("b", m.a);
	assertEquals("d", m.c);
	assertUndefined(m.g);
}

function testMergeLocDataNonLeafLocale() {
	ilib.data.foobar = {
		a: "b",
		c: "d"
	};
	ilib.data.foobar_de = {
		a: "e"
	};
	ilib.data.foobar_de_DE = {
   		c: "f"
   	};
	ilib.data.foobar_de_Latn_DE = {
		g: "h"
	};
	ilib.data.foobar_de_Latn_DE_SAP = {
   		g: "i"
   	};

	var locale = new ilib.Locale("de-DE");
	var m = ilib.mergeLocData("foobar", locale);
	assertEquals("e", m.a);
	assertEquals("f", m.c);
	assertUndefined(m.g);
}

function testMergeLocDataMissingData() {
	ilib.data.foobar = {
		a: "b",
		c: "d"
	};
	ilib.data.foobar_de = {
		a: "e"
	};
	ilib.data.foobar_de_DE = {
   		c: "f"
   	};
	ilib.data.foobar_de_Latn_DE = {
		g: "h"
	};
	ilib.data.foobar_de_Latn_DE_SAP = {
   		g: "i"
   	};

	var locale = new ilib.Locale("de-DE-Latn-SAP");
	var m = ilib.mergeLocData("asdf", locale);
	assertUndefined(m);
}

function testMergeLocDataNoName() {
	ilib.data.foobar = {
		a: "b",
		c: "d"
	};
	ilib.data.foobar_de = {
		a: "e"
	};
	ilib.data.foobar_de_DE = {
   		c: "f"
   	};
	ilib.data.foobar_de_Latn_DE = {
		g: "h"
	};
	ilib.data.foobar_de_Latn_DE_SAP = {
   		g: "i"
   	};

	var locale = new ilib.Locale("de-DE-Latn-SAP");
	var m = ilib.mergeLocData(undefined, locale);
	assertUndefined(m);
}

function testMergeLocDataNoLocale() {
	ilib.data.foobar = {
		a: "b",
		c: "d"
	};
	ilib.data.foobar_en = {
		a: "e"
	};
	ilib.data.foobar_en_US = {
   		c: "f"
   	};
	ilib.data.foobar_en_Latn_US = {
		g: "h"
	};
	ilib.data.foobar_en_Latn_US_SAP = {
   		g: "i"
   	};

	var m = ilib.mergeLocData("foobar"); // use the current locale -- en-US
	assertTrue(typeof(m) !== 'undefined');
	
	assertEquals("e", m.a);
	assertEquals("f", m.c);
	assertUndefined(m.g);
}

function testMergeLocDataNoSideEffects() {
	ilib.data.foobar = {
		a: "b",
		c: "d"
	};
	ilib.data.foobar_de = {
		a: "e"
	};
	ilib.data.foobar_de_DE = {
   		c: "f"
   	};
	ilib.data.foobar_de_Latn_DE = {
		g: "h"
	};
	ilib.data.foobar_de_Latn_DE_SAP = {
   		g: "i"
   	};

	var locale = new ilib.Locale("de-DE-Latn-SAP");
	var m = ilib.mergeLocData("foobar", locale);
	assertNotUndefined(m);
	assertEquals("b", ilib.data.foobar.a);
	assertEquals("d", ilib.data.foobar.c);
	assertUndefined(ilib.data.foobar.g);
}

function testMergeLocDataNoBase() {
	ilib.data.asdf_de = {
		a: "e"
	};
	ilib.data.asdf_de_DE = {
   		c: "f"
   	};
	ilib.data.asdf_de_Latn_DE = {
		g: "h"
	};
	ilib.data.asdf_de_Latn_DE_SAP = {
   		g: "i"
   	};

	var locale = new ilib.Locale("de-DE-Latn-SAP");
	var m = ilib.mergeLocData("asdf", locale);
	assertEquals("e", m.a);
	assertEquals("f", m.c);
	assertEquals("i", m.g);
}

function testMergeLocDataMissingLocaleParts() {
	ilib.data.foobar = {
		a: "b",
		c: "d"
	};
	ilib.data.foobar_de = {
		a: "e"
	};
	ilib.data.foobar_de_Latn = {
   		g: "i"
   	};

	var locale = new ilib.Locale("de-Latn");
	var m = ilib.mergeLocData("foobar", locale);
	assertEquals("e", m.a);
	assertEquals("d", m.c);
	assertEquals("i", m.g);
}

function testGetLocFilesLanguageOnly() {
	var locale = new ilib.Locale("en");
	var f = ilib.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"en/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesRegionOnly() {
	var locale = new ilib.Locale("US");
	var f = ilib.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"und/US/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesLangScript() {
	var locale = new ilib.Locale("en-Latn");
	var f = ilib.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"en/localeinfo.json",
		"en/Latn/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesLangRegion() {
	var locale = new ilib.Locale("en-US");
	var f = ilib.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"en/localeinfo.json",
		"und/US/localeinfo.json",
		"en/US/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesLangVariant() {
	var locale = new ilib.Locale("en-govt");
	var f = ilib.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"en/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesScriptRegion() {
	var locale = new ilib.Locale("Latn-US");
	var f = ilib.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"und/US/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesRegionVariant() {
	var locale = new ilib.Locale("US-govt");
	var f = ilib.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"und/US/localeinfo.json",
		"und/US/govt/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesLangScriptRegion() {
	var locale = new ilib.Locale("en-Latn-US");
	var f = ilib.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"en/localeinfo.json",
		"und/US/localeinfo.json",
		"en/Latn/localeinfo.json",
		"en/US/localeinfo.json",
		"en/Latn/US/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesLangScriptVariant() {
	var locale = new ilib.Locale("en-Latn-govt");
	var f = ilib.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"en/localeinfo.json",
		"en/Latn/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesLangRegionVariant() {
	var locale = new ilib.Locale("en-US-govt");
	var f = ilib.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"en/localeinfo.json",
		"und/US/localeinfo.json",
		"en/US/localeinfo.json",
		"und/US/govt/localeinfo.json",
		"en/US/govt/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesAll() {
	var locale = new ilib.Locale("en-US-Latn-govt");
	var f = ilib.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"en/localeinfo.json",
		"und/US/localeinfo.json",
		"en/Latn/localeinfo.json",
		"en/US/localeinfo.json",
		"und/US/govt/localeinfo.json",
		"en/Latn/US/localeinfo.json",
		"en/US/govt/localeinfo.json",
		"en/Latn/US/govt/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesNoLocale() {
	var locale = new ilib.Locale("-");
	var f = ilib.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesNoBasename() {
	var locale = new ilib.Locale("en-US-Latn-govt");
	var f = ilib.getLocFiles(locale, undefined);
	var expected = [
		"resources.json",
		"en/resources.json",
		"und/US/resources.json",
		"en/Latn/resources.json",
		"en/US/resources.json",
		"und/US/govt/resources.json",
		"en/Latn/US/resources.json",
		"en/US/govt/resources.json",
		"en/Latn/US/govt/resources.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesDefaultLocale() {
	var f = ilib.getLocFiles(undefined, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"en/localeinfo.json",
		"und/US/localeinfo.json",
		"en/US/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testHashCodeEmptyString() {
	assertEquals(0, ilib.hashCode(""));
}

function testHashCodeEmptyNumber() {
	assertEquals(48, ilib.hashCode(0));
}

function testHashCodeEmptyObject() {
	assertEquals(0, ilib.hashCode({}));
}

function testHashCodeEmptyBoolean() {
	assertEquals(0, ilib.hashCode(false));
}

function testHashCodeUndefined() {
	assertEquals(0, ilib.hashCode(undefined));
}

function testHashCodeNull() {
	assertEquals(0, ilib.hashCode(null));
}

function testHashCodeFunction() {
	assertTrue(0 < ilib.hashCode(function(asdf) { return asdf * 38; }));
}

function testHashCodeEqualStrings() {
	assertEquals(ilib.hashCode("abcdef"), ilib.hashCode("abcdef"));
}

function testHashCodeNotEqualStrings() {
	assertNotEquals(ilib.hashCode("abcdefg"), ilib.hashCode("abcdef"));
}

function testHashCodeEqualNumbers() {
	assertEquals(ilib.hashCode(23455), ilib.hashCode(23455));
}

function testHashCodeNotEqualNumbers() {
	assertNotEquals(ilib.hashCode(23455), ilib.hashCode(33455));
}

function testHashCodeEqualBoolean() {
	assertEquals(ilib.hashCode(true), ilib.hashCode(true));
}

function testHashCodeNotEqualBoolean() {
	assertNotEquals(ilib.hashCode(false), ilib.hashCode(true));
}

function testHashCodeEqualFunction() {
	assertEquals(ilib.hashCode(function a() { return "a"; }), ilib.hashCode(function a() { return "a"; }));
}

function testHashCodeEqualFunctionDifferentSpacing() {
	assertNotEquals(ilib.hashCode(function a () { 
		return "a"; 
	}), ilib.hashCode(function a(){return "a";}));
}

function testHashCodeNotEqualFunctionDifferentNames() {
	assertNotEquals(ilib.hashCode(function a() { return "a"; }), ilib.hashCode(function b() { return "a"; }));
}
function testHashCodeNotEqualFunctionDifferentContents() {
	assertNotEquals(ilib.hashCode(function a() { return "a"; }), ilib.hashCode(function a() { return "b"; }));
}

function testHashCodeEqualObjects() {
	assertEquals(ilib.hashCode({name: "abcdef"}), ilib.hashCode({name: "abcdef"}));
}

function testHashCodeNotEqualObjectProperties() {
	assertNotEquals(ilib.hashCode({name: "abcdef"}), ilib.hashCode({value: "abcdef"}));
}

function testHashCodeNotEqualObjectOneEmpty() {
	assertNotEquals(ilib.hashCode({}), ilib.hashCode({value: "abcdef"}));
}

function testHashCodeNotEqualObjectValues() {
	assertNotEquals(ilib.hashCode({name: "abcXdef"}), ilib.hashCode({name: "abcdef"}));
}

function testHashCodeEqualObjectScrambledProperties() {
	assertEquals(ilib.hashCode({name: "abcdef", num: 3, value: "asdf"}), ilib.hashCode({value: "asdf", name: "abcdef", num: 3}));
}

function testHashCodeNotEqualObjectValuesComplex() {
	assertNotEquals(ilib.hashCode({num: 3, apple: "jacks", type: false, name: "abcXdef"}), ilib.hashCode({name: "abcdef", apple: "jacks", num: 3, type: false}));
}


function mockLoader(paths, sync, params, callback) {
	var data = [];

	var returnValues = {
		"none": {
			"foo.json": {
				"a": "b",
				"c": "d",
				"e": "f"
			},
			"en/foo.json": {
				"c": "x"
			},
			"en/US/foo.json": {
				"e": "y"
			},
			"und/US/foo.json": {
				"c": "m"
			},
			"de/foo.json": {
				"c": "de1"
			},
			"de/DE/foo.json": {
				"a": "a1"
			},
			"und/DE/foo.json": {
				"c": "de2"
			},
			"fr/foo.json": {
				"c": "fr1"
			},
			"bar.json": {
				"a": "barb",
				"c": "bard",
				"e": "barf"
			},
			"en/bar.json": {
				"c": "barx"
			},
			"en/US/bar.json": {
				"e": "bary"
			},
			"und/US/bar.json": {
				"c": "barm"
			},
			"foo.html": "<html><body>This is the generic, shared foo.</body></html>",
			"de/foo.html": "<html><body>Diese ist Foo auf Deutsch.</body></html>",
			"de/DE/foo.html": "<html><body>Diese ist Foo auf Deutsch fuer Deutschland.</body></html>",
			"und/DE/foo.html": "<html><body>Diese ist Foo fuer Deutschland.</body></html>",
			"fr/foo.html": "<html><body>Ceci est foo en francais.</body></html>"
		},
		"/usr/share/localization/myapp": {
			"foo.json": {
				"xxx": "yyy",
				"www": "zzz"
			},
			"en/foo.json": {
				"yyy": "vvv"
			},
			"en/US/foo.json": {
				"www": "xyz"
			},
			"und/US/foo.json": {
				"nnn": "mmm"
			}
		}
	};
	
	var root = (params && params.root) || "none";
	for (var i = 0; i < paths.length; i++) {
		data.push(returnValues[root][paths[i]]);
	}

	if (typeof(callback) !== 'undefined') {
		callback.call(this, data);	
	}
	
	return data;
}

function testLoadDataCorrectType() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.json",
			object: obj,
			locale: "en-US",
			type: "json",
			loadParams: {},
			sync: true,
			callback: function (results) {
				assertTrue(typeof(results) === 'object');
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataCorrectItems() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.json",
			object: obj,
			locale: "en-US",
			type: "json",
			loadParams: {},
			sync: true,
			callback: function (results) {
				assertObjectEquals({
					"a": "b",
					"c": "m",
					"e": "y"
				}, results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataWithLocale() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.json",
			object: obj,
			locale: "de-DE",
			type: "json",
			loadParams: {},
			sync: true,
			callback: function (results) {
				assertObjectEquals({
					"a": "a1",
					"c": "de2",
					"e": "f"
				}, results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataWithLocaleMissingParts() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.json",
			object: obj,
			locale: "fr-Latn-FR",
			type: "json",
			loadParams: {},
			sync: true,
			callback: function (results) {
				assertObjectEquals({
					"a": "b",
					"c": "fr1",
					"e": "f"
				}, results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataDefaultLocale() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.json",
			object: obj,
			type: "json",
			loadParams: {},
			sync: true,
			callback: function (results) {
				assertObjectEquals({
					"a": "b",
					"c": "m",
					"e": "y"
				}, results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}


function testLoadDataNonJson() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.json",
			object: obj,
			locale: "en-US",
			type: "other",
			loadParams: {},
			sync: true,
			callback: function (results) {
				assertObjectEquals({
					"e": "y"
				}, results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataCached() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.json",
			object: obj,
			locale: "en-US",
			type: "json",
			loadParams: {},
			sync: true,
			callback: function (results) {
				for (var o in obj.cache) {
					if (obj.cache.hasOwnProperty(o)) {
						assertObjectEquals({
							"a": "b",
							"c": "m",
							"e": "y"
						}, obj.cache[o]);
					}
				}
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataCachedWithOtherName() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);

	try {
		ilib.loadData({
			name: "foo.json",
			object: obj,
			locale: "en-US",
			type: "json",
			loadParams: {},
			sync: true,
			callback: function (results) {
				assertObjectEquals({
					"a": "b",
					"c": "m",
					"e": "y"
				}, results);
			}
		});
	
		ilib.loadData({
			name: "bar.json",
			object: obj,
			locale: "en-US",
			type: "json",
			loadParams: {},
			sync: true,
			callback: function (results) {
				assertObjectEquals({
					"a": "barb",
					"c": "barm",
					"e": "bary"
				}, results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataCachedWithLoadParamsMultipleFiles() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.json",
			object: obj,
			locale: "en-US",
			type: "json",
			loadParams: {},
			sync: true,
			callback: function (results) {
			}
		});
	
		ilib.loadData({
			name: "foo.json",
			object: obj,
			locale: "en-US",
			type: "json",
			loadParams: {
				// should cause it to load a different file
				root: "/usr/share/localization/myapp"
			},
			sync: true,
			callback: function (results) {
			}
		});
		
		var count = 0;
		for (var o in obj.cache) {
			if (obj.cache.hasOwnProperty(o)) {
				count++;
			}
		}
		
		assertEquals(2, count);
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataCachedWithLoadParams() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.json",
			object: obj,
			locale: "en-US",
			type: "json",
			loadParams: {},
			sync: true,
			callback: function (results) {
				assertObjectEquals({
					"a": "b",
					"c": "m",
					"e": "y"
				}, results);
			}
		});
	
		ilib.loadData({
			name: "foo.json",
			object: obj,
			locale: "en-US",
			type: "json",
			loadParams: {
				// should cause it to load a different file
				root: "/usr/share/localization/myapp"
			},
			sync: true,
			callback: function (results) {
				assertObjectEquals({
					"xxx": "yyy",
					"www": "xyz",
					"yyy": "vvv",
					"nnn": "mmm"
				}, results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataNoCache() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.json",
			locale: "en-US",
			type: "json",
			loadParams: {},
			sync: true,
			callback: function (results) {
				// should not crash
				assertObjectEquals({
					"a": "b",
					"c": "m",
					"e": "y"
				}, results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataNotCachedWithLoadParams() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.json",
			locale: "en-US",
			type: "json",
			loadParams: {},
			sync: true,
			callback: function (results) {
				assertObjectEquals({
					"a": "b",
					"c": "m",
					"e": "y"
				}, results);
			}
		});
	
		ilib.loadData({
			name: "foo.json",
			locale: "en-US",
			type: "json",
			loadParams: {
				// should cause it to load a different file
				root: "/usr/share/localization/myapp"
			},
			sync: true,
			callback: function (results) {
				assertObjectEquals({
					"xxx": "yyy",
					"www": "xyz",
					"yyy": "vvv",
					"nnn": "mmm"
				}, results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataAsynch() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.json",
			object: obj,
			locale: "en-US",
			type: "json",
			loadParams: {},
			sync: false,
			callback: function (results) {
				assertObjectEquals({
					"a": "b",
					"c": "m",
					"e": "y"
				}, results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataDefaults() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.json",
			callback: function (results) {
				assertObjectEquals({
					"a": "b",
					"c": "m",
					"e": "y"
				}, results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataNonJson_en_US() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.html",
			type: "html",
			callback: function (results) {
				assertObjectEquals("<html><body>This is the generic, shared foo.</body></html>", results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataNonJson_de() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.html",
			type: "html",
			locale: "de",
			callback: function (results) {
				assertObjectEquals("<html><body>Diese ist Foo auf Deutsch.</body></html>", results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataNonJson_de_DE() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.html",
			type: "html",
			locale: "de-DE",
			callback: function (results) {
				assertObjectEquals("<html><body>Diese ist Foo auf Deutsch fuer Deutschland.</body></html>", results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataNonJson_DE() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.html",
			type: "html",
			locale: "DE",
			callback: function (results) {
				assertObjectEquals("<html><body>Diese ist Foo fuer Deutschland.</body></html>", results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataNonJsonWithFallbackToLanguage() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);

	try {
		ilib.loadData({
			name: "foo.html",
			type: "html",
			locale: "fr-FR",
			callback: function (results) {
				assertObjectEquals("<html><body>Ceci est foo en francais.</body></html>", results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataNonJsonWithFallbackToRoot() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.html",
			type: "html",
			locale: "es-ES",
			callback: function (results) {
				assertObjectEquals("<html><body>This is the generic, shared foo.</body></html>", results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataNonJsonInferFileTypeFromExtension() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.html",
			locale: "de",
			callback: function (results) {
				assertObjectEquals("<html><body>Diese ist Foo auf Deutsch.</body></html>", results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testLoadDataJsonInferFileTypeFromExtension() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		ilib.loadData({
			name: "foo.json",
			locale: "de-DE",
			callback: function (results) {
				assertObjectEquals({
					"a": "a1",
					"c": "de2",
					"e": "f"
				}, results);
			}
		});
	} finally {
		ilib.setLoaderCallback(undefined);
	}
}

function testMapStringDigits() {
	var map = "abcdefghij".split("");
	
	assertEquals("jihgfedcba", ilib.mapString("9876543210", map));
}

function testMapStringDigitsUnknown() {
	var map = "abcde".split("");
	
	assertEquals("98765edcba", ilib.mapString("9876543210", map));
}

function testMapStringHash() {
	var map = {
		"a": "x",
		"b": "y",
		"c": "z"
	};
	
	assertEquals("xyzzy", ilib.mapString("abccb", map));
}

function testMapStringUndefined() {
	var map = {
		"a": "x",
		"b": "y",
		"c": "z"
	};
	
	assertUndefined(ilib.mapString(undefined, map));
}

function testMapStringUndefinedMap() {
	assertEquals("abccb", ilib.mapString("abccb", undefined));
}

function testMapStringHashUnknown() {
	var map = {
		"a": "x",
		"b": "y",
		"c": "z"
	};
	
	assertEquals("xyzdefxyz", ilib.mapString("abcdefabc", map));
}

function testMapStringHashMulti() {
	var map = {
		"a": "xm",
		"b": "yn",
		"c": "zo"
	};
	
	assertEquals("xmynzoxmynzo", ilib.mapString("abcabc", map));
}

function testIndexOf() {
	var arr = ["a", "b", "c"];
	assertEquals(1, ilib.indexOf(arr, "b"));
}

function testIndexOfNeg() {
	var arr = ["a", "b", "c"];
	assertEquals(-1, ilib.indexOf(arr, "d"));
}

function testIndexOfBeginning() {
	var arr = ["a", "b", "c"];
	assertEquals(0, ilib.indexOf(arr, "a"));
}

function testIndexOfEnd() {
	var arr = ["a", "b", "c"];
	assertEquals(2, ilib.indexOf(arr, "c"));
}

function testIndexOfCaseSensitive() {
	var arr = ["a", "b", "c"];
	assertEquals(-1, ilib.indexOf(arr, "C"));
}

function testIndexOfWrongObjectType() {
	var arr = ["a", "b", "c"];
	assertEquals(-1, ilib.indexOf(arr, 2));
}

function testIndexOfUndefinedSearchTerm() {
	var arr = ["a", "b", "c"];
	assertEquals(-1, ilib.indexOf(arr, undefined));
}

function testIndexOfUndefinedArray() {
	assertEquals(-1, ilib.indexOf(undefined, "a"));
}

function testToHexStringSimple() {
	assertEquals("0061", ilib.toHexString("a"));
}

function testToHexStringWithLengthLimit2() {
	assertEquals("61", ilib.toHexString("a", 2));
}

function testToHexStringWithLengthLimit8() {
	assertEquals("00000061", ilib.toHexString("a", 8));
}

function testToHexStringChinese() {
	assertEquals("35C0", ilib.toHexString("㗀"));
}

function testToHexStringComplex() {
	assertEquals("006135C00E080C13", ilib.toHexString("a㗀จఓ"));
}