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

var ilib = require("./../lib/ilib.js");
var Utils = require("./../lib/Utils.js");
var SearchUtils = require("./../lib/SearchUtils.js");
var MathUtils = require("./../lib/MathUtils.js");
var Locale = require("./../lib/Locale.js");
var JSUtils = require("./../lib/JSUtils.js");

function testBsearch() {
    var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    assertEquals(5, SearchUtils.bsearch(10, array));
}

function testBsearchEmptyArray() {
    var array = [];
    
    assertEquals(0, SearchUtils.bsearch(10, array));
}

function testBsearchUndefinedArray() {
    assertEquals(-1, SearchUtils.bsearch(10, undefined));
}

function testBsearchUndefinedTarget() {
    var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    assertEquals(-1, SearchUtils.bsearch(undefined, array));
}

function testBsearchBefore() {
    var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    assertEquals(0, SearchUtils.bsearch(0, array));
}

function testBsearchAfter() {
    var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    assertEquals(10, SearchUtils.bsearch(20, array));
}

function testBsearchExact() {
    var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    // place it right after the exact match
    assertEquals(7, SearchUtils.bsearch(15, array));
}

function testBsearchExactBeginning() {
    var array = [0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    // place it right after the exact match
    assertEquals(0, SearchUtils.bsearch(0, array));
}

function testBsearchExactEnd() {
    var array = [0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    // place it right after the exact match
    assertEquals(10, SearchUtils.bsearch(19, array));
}

function testBsearchMonthEdge() {
    var array = [0,31,60,91,121,152,182,213,244,274,305,335,366];
    
    assertEquals(6, SearchUtils.bsearch(182, array));
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
    
    assertEquals(6, SearchUtils.bsearch("mango", array, strcmp));
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
    
    assertEquals(0, SearchUtils.bsearch("apple", array, strcmp));
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
    
    assertEquals(10, SearchUtils.bsearch("zucchini", array, strcmp));
}

function testBisectionSearchSimple() {
    assertRoughlyEquals(5.5, SearchUtils.bisectionSearch(16, 0, 10, 1e-12, function linear(x) {
    	return 2 * x + 5;
    }), 1e-12);
}

function testBisectionSearchMoreComplex() {
    assertRoughlyEquals(4, SearchUtils.bisectionSearch(16, 0, 10, 1e-12, function square(x) {
    	return x * x;
    }), 1e-12);
}

function testBisectionSearchTrig() {
    assertRoughlyEquals(30, SearchUtils.bisectionSearch(0.5, 0, 90, 1e-11, function sinInDegrees(x) {
    	return Math.sin(x * Math.PI / 180);
    }), 1e-9);
}

function testBisectionSearchVeryComplex() {
    assertRoughlyEquals(-0.66666666666666, SearchUtils.bisectionSearch(0, -0.9, 0, 1e-13, function polynomial(x) {
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
    assertObjectEquals(2, MathUtils.mod(2, 4));
}

function testModWrap() {
    assertObjectEquals(2, MathUtils.mod(6, 4));
}

function testModWrapNeg() {
    assertObjectEquals(2, MathUtils.mod(-6, 4));
}

function testModZeroModulus() {
    assertObjectEquals(0, MathUtils.mod(6, 0));
}

function testModZeroNum() {
    assertObjectEquals(0, MathUtils.mod(0, 6));
}

function testModReal() {
    assertRoughlyEquals(2.234231, MathUtils.mod(2.234231, 4), 0.0000001);
}
function testModRealWrap() {
    assertRoughlyEquals(2.234231, MathUtils.mod(6.234231, 4), 0.0000001);
}
function testModRealNeg() {
    assertRoughlyEquals(1.7, MathUtils.mod(-6.3, 4), 0.0000001);
}

function testAmodSimple() {
    assertObjectEquals(2, MathUtils.amod(2, 4));
}

function testAmodWrap() {
    assertObjectEquals(2, MathUtils.amod(6, 4));
}

function testAmodWrapNeg() {
    assertObjectEquals(2, MathUtils.amod(-6, 4));
}

function testAmodZeroModulus() {
    assertObjectEquals(0, MathUtils.amod(6, 0));
}

function testAmodZeroNum() {
    assertObjectEquals(6, MathUtils.amod(0, 6));
}

function testAmodReal() {
    assertRoughlyEquals(2.234231, MathUtils.amod(2.234231, 4), 0.0000001);
}
function testAmodRealWrap() {
    assertRoughlyEquals(2.234231, MathUtils.amod(6.234231, 4), 0.0000001);
}
function testAmodRealNeg() {
    assertRoughlyEquals(1.7, MathUtils.amod(-6.3, 4), 0.0000001);
}

function testMergeSimple() {
    var object1 = {"a": "A", "b": "B"},
        object2 = {"c": "C", "d": "D"};
    
    assertObjectEquals({"a": "A", "b": "B", "c": "C", "d": "D"}, JSUtils.merge(object1, object2));
}

function testMergeSimpleNoSideEffects() {
    var object1 = {"a": "A", "b": "B"},
        object2 = {"c": "C", "d": "D"};
    
    var x = JSUtils.merge(object1, object2);
    
    assertNotUndefined(x);
    assertObjectEquals({"a": "A", "b": "B"}, object1);
}

function testMergeArrays() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": ["d"]};

    assertObjectEquals({"a": ["b", "c", "d"]}, JSUtils.merge(object1, object2));
}

function testMergeArraysDups() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": ["c", "d"]};
    
    assertObjectEquals({"a": ["b", "c", "c", "d"]}, JSUtils.merge(object1, object2));
}

function testMergeArraysEmptySource() {
    var object1 = {"a": []},
        object2 = {"a": ["d"]};
    
    assertObjectEquals({"a": ["d"]}, JSUtils.merge(object1, object2));
}

function testMergeArraysEmptyTarget() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": []};
    
    assertObjectEquals({"a": ["b", "c"]}, JSUtils.merge(object1, object2));
}

function testMergeArraysIncongruentTypes1() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": "d"};
    
    assertObjectEquals({"a": "d"}, JSUtils.merge(object1, object2));
}

function testMergeArraysIncongruentTypes2() {
    var object1 = {"a": "b"},
        object2 = {"a": ["d"]};
    
    assertObjectEquals({"a": ["d"]}, JSUtils.merge(object1, object2));
}

function testMergeSimpleProperty() {
    var object1 = {"a": "A", "b": "B"},
        object2 = {"b": "X"};
    
    assertObjectEquals({"a": "A", "b": "X"}, JSUtils.merge(object1, object2));
}

function testMergeComplexProperty() {
    var object1 = {"a": "A", "b": {"x": "B"}},
        object2 = {"b": "X"};
    
    assertObjectEquals({"a": "A", "b": "X"}, JSUtils.merge(object1, object2));
}

function testMergeSubobjects() {
    var object1 = {"b": {"x": "X", "y": "Y"}},
        object2 = {"b": {"x": "M", "y": "N"}};
    
    assertObjectEquals({"b": {"x": "M", "y": "N"}}, JSUtils.merge(object1, object2));
}

function testMergeSubobjectsLeaveObj1PropsUntouched() {
    var object1 = {"a": "A", "b": {"x": "X", "y": "Y", "z": "Z"}},
        object2 = {"b": {"x": "M", "y": "N"}};
    
    assertObjectEquals({"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}}, JSUtils.merge(object1, object2));
}

function testMergeSubobjectsAddProps() {
    var object1 = {"a": "A", "b": {"x": "X", "y": "Y"}},
        object2 = {"b": {"x": "M", "y": "N", "z": "Z"}};
    
    assertObjectEquals({"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}}, JSUtils.merge(object1, object2));
}

function testMergeSubobjectsAddProps() {
    var object1 = {"a": "A", "b": {"x": "X", "y": "Y"}},
        object2 = {"b": {"x": "M", "y": "N", "z": "Z"}};
    
    assertObjectEquals({"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}}, JSUtils.merge(object1, object2));
}

function testMergeBooleans() {
    var object1 = {"a": true, "b": true},
        object2 = {"b": false};
    
    assertObjectEquals({"a": true, "b": false}, JSUtils.merge(object1, object2));
}

function testMergeAddBooleans() {
    var object1 = {"a": true, "b": true},
        object2 = {"c": false};
    
    assertObjectEquals({"a": true, "b": true, "c": false}, JSUtils.merge(object1, object2));
}

function testMergeNumbers() {
    var object1 = {"a": 1, "b": 2},
        object2 = {"b": 3};
    
    assertObjectEquals({"a": 1, "b": 3}, JSUtils.merge(object1, object2));
}

function testMergeNumbersWithZero() {
    var object1 = {"a": 1, "b": 2},
        object2 = {"b": 0};
    
    assertObjectEquals({"a": 1, "b": 0}, JSUtils.merge(object1, object2));
}

function testMergeNumbersAddZero() {
    var object1 = {"a": 1, "b": 2},
        object2 = {"c": 0};
    
    assertObjectEquals({"a": 1, "b": 2, "c": 0}, JSUtils.merge(object1, object2));
}

function testIsEmptyFalse() {
    var object = {"a": "A"};
    
    assertFalse(JSUtils.isEmpty(object));
}

function testIsEmptyTrue() {
    var object = {};
    
    assertTrue(JSUtils.isEmpty(object));
}

function testIsEmptyUndefined() {
    assertTrue(JSUtils.isEmpty(undefined));
}

function testIsEmptyUndefinedProperties() {
    var object = {"a": undefined};
    
    assertTrue(JSUtils.isEmpty(object));
}

function testIsEmptyFalsyValues() {
    var object = {"a": false, "b": 0};
    
    assertFalse(JSUtils.isEmpty(object));
}

function testShallowCopy() {
    var src = {"a": "b"};
    var tgt = {};
    
    assertTrue(typeof(tgt.a) === "undefined");
    
    JSUtils.shallowCopy(src, tgt);
    
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
    
    JSUtils.shallowCopy(src, tgt);
    
    assertEquals("b", tgt.a);
    assertEquals("e", tgt.c.d);
    assertEquals(23, tgt.c.f);
}

function testShallowCopyUndefined() {
    var src = undefined;
    var tgt = {};
    
    assertTrue(typeof(tgt) !== undefined);
    assertTrue(JSUtils.isEmpty(tgt));
    
    JSUtils.shallowCopy(src, tgt);
    
    assertTrue(typeof(tgt) !== undefined);
    assertTrue(JSUtils.isEmpty(tgt));
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
    	JSUtils.shallowCopy(src, tgt);
    	assertUndefined(tgt);
    } catch (e) {
    	fail();
    }
}

function testShallowCopyEmpty() {
    var src = {};
    var tgt = {};
    
    assertTrue(JSUtils.isEmpty(tgt));
    JSUtils.shallowCopy(src, tgt);
    assertTrue(JSUtils.isEmpty(tgt));
}

function testShallowCopyEmptyValues() {
    var src = {
    	"a": 0, 
    	"b": "",
    	"c": null,
    	"d": undefined
    };
    var tgt = {};
    
    JSUtils.shallowCopy(src, tgt);
    
    assertEquals(0, tgt.a);
    assertEquals("", tgt.b);
    assertEquals(null, tgt.c);
    assertEquals(undefined, tgt.d);
}

function testSignumPositive() {
    assertEquals(1, MathUtils.signum(1));
}

function testSignumPositiveLarge() {
    assertEquals(1, MathUtils.signum(1345234));
}

function testSignumNegative() {
    assertEquals(-1, MathUtils.signum(-1));
}

function testSignumPositiveLarge() {
    assertEquals(-1, MathUtils.signum(-13234));
}

function testSignumZero() {
    assertEquals(1, MathUtils.signum(0));
}

function testSignumStringNumberPositive() {
    assertEquals(1, MathUtils.signum("1345234"));
}

function testSignumStringNumberNegative() {
    assertEquals(-1, MathUtils.signum("-1345234"));
}

function testSignumUndefined() {
    assertEquals(1, MathUtils.signum());
}

function testSignumNull() {
    assertEquals(1, MathUtils.signum(null));
}

function testSignumStringNonNumber() {
    assertEquals(1, MathUtils.signum("rafgasdf"));
}

function testSignumBoolean() {
    assertEquals(1, MathUtils.signum(true));
    assertEquals(1, MathUtils.signum(false));
}

function testSignumFunction() {
    assertEquals(1, MathUtils.signum(function () { return -4; }));
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

	var locale = new Locale("de-DE-Latn-SAP");
	var m = Utils.mergeLocData("foobar", locale);
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

	var locale = new Locale("-");
	var m = Utils.mergeLocData("foobar", locale);
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

	var locale = new Locale("de-DE");
	var m = Utils.mergeLocData("foobar", locale);
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

	var locale = new Locale("de-DE-Latn-SAP");
	var m = Utils.mergeLocData("asdf", locale);
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

	var locale = new Locale("de-DE-Latn-SAP");
	var m = Utils.mergeLocData(undefined, locale);
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

	var m = Utils.mergeLocData("foobar"); // use the current locale -- en-US
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

	var locale = new Locale("de-DE-Latn-SAP");
	var m = Utils.mergeLocData("foobar", locale);
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

	var locale = new Locale("de-DE-Latn-SAP");
	var m = Utils.mergeLocData("asdf", locale);
	assertEquals("e", m.a);
	assertEquals("f", m.c);
	assertEquals("i", m.g);
	
	ilib.data.asdf_de = ilib.data.asdf_de_DE = ilib.data.asdf_de_Latn_DE = ilib.data.asdf_de_Latn_DE_SAP = undefined;
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

	var locale = new Locale("de-Latn");
	var m = Utils.mergeLocData("foobar", locale);
	assertEquals("e", m.a);
	assertEquals("d", m.c);
	assertEquals("i", m.g);
}

function testGetLocFilesLanguageOnly() {
	var locale = new Locale("en");
	var f = Utils.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"en/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesRegionOnly() {
	var locale = new Locale("US");
	var f = Utils.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"und/US/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesLangScript() {
	var locale = new Locale("en-Latn");
	var f = Utils.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"en/localeinfo.json",
		"en/Latn/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesLangRegion() {
	var locale = new Locale("en-US");
	var f = Utils.getLocFiles(locale, "localeinfo.json");
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
	var locale = new Locale("en-govt");
	var f = Utils.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"en/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesScriptRegion() {
	var locale = new Locale("Latn-US");
	var f = Utils.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"und/US/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesRegionVariant() {
	var locale = new Locale("US-govt");
	var f = Utils.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"und/US/localeinfo.json",
		"und/US/govt/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesLangScriptRegion() {
	var locale = new Locale("en-Latn-US");
	var f = Utils.getLocFiles(locale, "localeinfo.json");
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
	var locale = new Locale("en-Latn-govt");
	var f = Utils.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json",
		"en/localeinfo.json",
		"en/Latn/localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesLangRegionVariant() {
	var locale = new Locale("en-US-govt");
	var f = Utils.getLocFiles(locale, "localeinfo.json");
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
	var locale = new Locale("en-US-Latn-govt");
	var f = Utils.getLocFiles(locale, "localeinfo.json");
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
	var locale = new Locale("-");
	var f = Utils.getLocFiles(locale, "localeinfo.json");
	var expected = [
		"localeinfo.json"
	];
	
	assertEquals(expected.length, f.length);
	assertArrayEquals(expected, f);
}

function testGetLocFilesNoBasename() {
	var locale = new Locale("en-US-Latn-govt");
	var f = Utils.getLocFiles(locale, undefined);
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
	var f = Utils.getLocFiles(undefined, "localeinfo.json");
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
	assertEquals(0, JSUtils.hashCode(""));
}

function testHashCodeEmptyNumber() {
	assertEquals(48, JSUtils.hashCode(0));
}

function testHashCodeEmptyObject() {
	assertEquals(0, JSUtils.hashCode({}));
}

function testHashCodeEmptyBoolean() {
	assertEquals(0, JSUtils.hashCode(false));
}

function testHashCodeUndefined() {
	assertEquals(0, JSUtils.hashCode(undefined));
}

function testHashCodeNull() {
	assertEquals(0, JSUtils.hashCode(null));
}

function testHashCodeFunction() {
	assertTrue(0 < JSUtils.hashCode(function(asdf) { return asdf * 38; }));
}

function testHashCodeEqualStrings() {
	assertEquals(JSUtils.hashCode("abcdef"), JSUtils.hashCode("abcdef"));
}

function testHashCodeNotEqualStrings() {
	assertNotEquals(JSUtils.hashCode("abcdefg"), JSUtils.hashCode("abcdef"));
}

function testHashCodeEqualNumbers() {
	assertEquals(JSUtils.hashCode(23455), JSUtils.hashCode(23455));
}

function testHashCodeNotEqualNumbers() {
	assertNotEquals(JSUtils.hashCode(23455), JSUtils.hashCode(33455));
}

function testHashCodeEqualBoolean() {
	assertEquals(JSUtils.hashCode(true), JSUtils.hashCode(true));
}

function testHashCodeNotEqualBoolean() {
	assertNotEquals(JSUtils.hashCode(false), JSUtils.hashCode(true));
}

function testHashCodeEqualFunction() {
	assertEquals(JSUtils.hashCode(function a() { return "a"; }), JSUtils.hashCode(function a() { return "a"; }));
}

function testHashCodeEqualFunctionDifferentSpacing() {
	if (ilib._getPlatform() === "qt") {
		// the qt javascript engine doesn't allow you to see the code of a function, so all 
		// functions should have the same hash
		assertEquals(JSUtils.hashCode(function a () { 
			return "a"; 
		}), JSUtils.hashCode(function a(){return "a";}));
	} else {
		assertNotEquals(JSUtils.hashCode(function a () { 
			return "a"; 
		}), JSUtils.hashCode(function a(){return "a";}));
	}
}

function testHashCodeNotEqualFunctionDifferentNames() {
	if (ilib._getPlatform() === "qt") {
		// the qt javascript engine doesn't allow you to see the code of a function, so all 
		// functions should have the same hash
		assertEquals(JSUtils.hashCode(function a() { return "a"; }), JSUtils.hashCode(function b() { return "a"; }));
	} else {
		assertNotEquals(JSUtils.hashCode(function a() { return "a"; }), JSUtils.hashCode(function b() { return "a"; }));
	}
}
function testHashCodeNotEqualFunctionDifferentContents() {
	if (ilib._getPlatform() === "qt") {
		// the qt javascript engine doesn't allow you to see the code of a function, so all 
		// functions should have the same hash
		assertEquals(JSUtils.hashCode(function a() { return "a"; }), JSUtils.hashCode(function a() { return "b"; }));
	} else {
		assertNotEquals(JSUtils.hashCode(function a() { return "a"; }), JSUtils.hashCode(function a() { return "b"; }));
	}
}

function testHashCodeEqualObjects() {
	assertEquals(JSUtils.hashCode({name: "abcdef"}), JSUtils.hashCode({name: "abcdef"}));
}

function testHashCodeNotEqualObjectProperties() {
	assertNotEquals(JSUtils.hashCode({name: "abcdef"}), JSUtils.hashCode({value: "abcdef"}));
}

function testHashCodeNotEqualObjectOneEmpty() {
	assertNotEquals(JSUtils.hashCode({}), JSUtils.hashCode({value: "abcdef"}));
}

function testHashCodeNotEqualObjectValues() {
	assertNotEquals(JSUtils.hashCode({name: "abcXdef"}), JSUtils.hashCode({name: "abcdef"}));
}

function testHashCodeEqualObjectScrambledProperties() {
	assertEquals(JSUtils.hashCode({name: "abcdef", num: 3, value: "asdf"}), JSUtils.hashCode({value: "asdf", name: "abcdef", num: 3}));
}

function testHashCodeNotEqualObjectValuesComplex() {
	assertNotEquals(JSUtils.hashCode({num: 3, apple: "jacks", type: false, name: "abcXdef"}), JSUtils.hashCode({name: "abcdef", apple: "jacks", num: 3, type: false}));
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);

	try {
		Utils.loadData({
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
	
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
			name: "foo.json",
			object: obj,
			locale: "en-US",
			type: "json",
			loadParams: {},
			sync: true,
			callback: function (results) {
			}
		});
	
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);

	try {
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	try {
		Utils.loadData({
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
	
	assertEquals("jihgfedcba", JSUtils.mapString("9876543210", map));
}

function testMapStringDigitsUnknown() {
	var map = "abcde".split("");
	
	assertEquals("98765edcba", JSUtils.mapString("9876543210", map));
}

function testMapStringHash() {
	var map = {
		"a": "x",
		"b": "y",
		"c": "z"
	};
	
	assertEquals("xyzzy", JSUtils.mapString("abccb", map));
}

function testMapStringUndefined() {
	var map = {
		"a": "x",
		"b": "y",
		"c": "z"
	};
	
	assertUndefined(JSUtils.mapString(undefined, map));
}

function testMapStringUndefinedMap() {
	assertEquals("abccb", JSUtils.mapString("abccb", undefined));
}

function testMapStringHashUnknown() {
	var map = {
		"a": "x",
		"b": "y",
		"c": "z"
	};
	
	assertEquals("xyzdefxyz", JSUtils.mapString("abcdefabc", map));
}

function testMapStringHashMulti() {
	var map = {
		"a": "xm",
		"b": "yn",
		"c": "zo"
	};
	
	assertEquals("xmynzoxmynzo", JSUtils.mapString("abcabc", map));
}

function testIndexOf() {
	var arr = ["a", "b", "c"];
	assertEquals(1, JSUtils.indexOf(arr, "b"));
}

function testIndexOfNeg() {
	var arr = ["a", "b", "c"];
	assertEquals(-1, JSUtils.indexOf(arr, "d"));
}

function testIndexOfBeginning() {
	var arr = ["a", "b", "c"];
	assertEquals(0, JSUtils.indexOf(arr, "a"));
}

function testIndexOfEnd() {
	var arr = ["a", "b", "c"];
	assertEquals(2, JSUtils.indexOf(arr, "c"));
}

function testIndexOfCaseSensitive() {
	var arr = ["a", "b", "c"];
	assertEquals(-1, JSUtils.indexOf(arr, "C"));
}

function testIndexOfWrongObjectType() {
	var arr = ["a", "b", "c"];
	assertEquals(-1, JSUtils.indexOf(arr, 2));
}

function testIndexOfUndefinedSearchTerm() {
	var arr = ["a", "b", "c"];
	assertEquals(-1, JSUtils.indexOf(arr, undefined));
}

function testIndexOfUndefinedArray() {
	assertEquals(-1, JSUtils.indexOf(undefined, "a"));
}

function testToHexStringSimple() {
	assertEquals("0061", JSUtils.toHexString("a"));
}

function testToHexStringWithLengthLimit2() {
	assertEquals("61", JSUtils.toHexString("a", 2));
}

function testToHexStringWithLengthLimit8() {
	assertEquals("00000061", JSUtils.toHexString("a", 8));
}

function testToHexStringChinese() {
	assertEquals("35C0", JSUtils.toHexString("㗀"));
}

function testToHexStringComplex() {
	assertEquals("006135C00E080C13", JSUtils.toHexString("a㗀จఓ"));
}