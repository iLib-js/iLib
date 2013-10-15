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

function mockLoader(paths, sync, params, callback) {
	var data = [];

	var returnValues = {
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
		"foo.html": "<html><body>This is the generic, shared foo.</body></html>",
		"de/foo.html": "<html><body>Diese ist Foo auf Deutsch.</body></html>",
		"de/DE/foo.html": "<html><body>Diese ist Foo auf Deutsch fuer Deutschland.</body></html>",
		"und/DE/foo.html": "<html><body>Diese ist Foo fuer Deutschland.</body></html>",
		"fr/foo.html": "<html><body>Ceci est foo en francais.</body></html>"
	};
	
	for (var i = 0; i < paths.length; i++) {
		data.push(returnValues[paths[i]]);
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
	ilib.setLoaderCallback(undefined);
}

function testLoadDataCorrectItems() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);

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
	ilib.setLoaderCallback(undefined);
}

function testLoadDataWithLocale() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);

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
	ilib.setLoaderCallback(undefined);
}

function testLoadDataWithLocaleMissingParts() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);

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
	ilib.setLoaderCallback(undefined);
}

function testLoadDataDefaultLocale() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);

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
	ilib.setLoaderCallback(undefined);
}


function testLoadDataNonJson() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);

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
	ilib.setLoaderCallback(undefined);
}

function testLoadDataCached() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);

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
			}, obj.cache["en_US"]);
		}
	});
	ilib.setLoaderCallback(undefined);
}

function testLoadDataNoCache() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);

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
	ilib.setLoaderCallback(undefined);
}

function testLoadDataAsynch() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);

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
	ilib.setLoaderCallback(undefined);
}

function testLoadDataDefaults() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);

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
	ilib.setLoaderCallback(undefined);
}

function testLoadDataNonJson_en_US() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);

	ilib.loadData({
		name: "foo.html",
		type: "html",
		callback: function (results) {
			assertObjectEquals("<html><body>This is the generic, shared foo.</body></html>", results);
		}
	});
	
	ilib.setLoaderCallback(undefined);
}

function testLoadDataNonJson_de() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);

	ilib.loadData({
		name: "foo.html",
		type: "html",
		locale: "de",
		callback: function (results) {
			assertObjectEquals("<html><body>Diese ist Foo auf Deutsch.</body></html>", results);
		}
	});
	
	ilib.setLoaderCallback(undefined);
}

function testLoadDataNonJson_de_DE() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);

	ilib.loadData({
		name: "foo.html",
		type: "html",
		locale: "de-DE",
		callback: function (results) {
			assertObjectEquals("<html><body>Diese ist Foo auf Deutsch fuer Deutschland.</body></html>", results);
		}
	});
	
	ilib.setLoaderCallback(undefined);
}

function testLoadDataNonJson_DE() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);

	ilib.loadData({
		name: "foo.html",
		type: "html",
		locale: "DE",
		callback: function (results) {
			assertObjectEquals("<html><body>Diese ist Foo fuer Deutschland.</body></html>", results);
		}
	});
	
	ilib.setLoaderCallback(undefined);
}

function testLoadDataNonJsonWithFallbackToLanguage() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);

	ilib.loadData({
		name: "foo.html",
		type: "html",
		locale: "fr-FR",
		callback: function (results) {
			assertObjectEquals("<html><body>Ceci est foo en francais.</body></html>", results);
		}
	});
	
	ilib.setLoaderCallback(undefined);
}

function testLoadDataNonJsonWithFallbackToRoot() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);

	ilib.loadData({
		name: "foo.html",
		type: "html",
		locale: "es-ES",
		callback: function (results) {
			assertObjectEquals("<html><body>This is the generic, shared foo.</body></html>", results);
		}
	});
	
	ilib.setLoaderCallback(undefined);
}

function testLoadDataNonJsonInferFileTypeFromExtension() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);

	ilib.loadData({
		name: "foo.html",
		locale: "de",
		callback: function (results) {
			assertObjectEquals("<html><body>Diese ist Foo auf Deutsch.</body></html>", results);
		}
	});
	
	ilib.setLoaderCallback(undefined);
}

function testLoadDataJsonInferFileTypeFromExtension() {
	if (typeof(ilib._load) === 'function') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	
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
	
	ilib.setLoaderCallback(undefined);
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

function testDateToIlibDate() {
    var datMyBday = new Date("Fri Aug 13 1982 13:37:35 GMT-0700 (PDT)");
    var ildMyBday = new ilib.Date.newInstance({
        year: 1982,
        month: 8,
        day: 13,
        hour: 13,
        minute: 31,
        second: 35
    });
    var fmt = new ilib.DateFmt({length: "full"});
    assertEquals(fmt.format(ildMyBday), fmt.format(ilib.dateToIlib(datMyBday)));
}
function testDateToIlibString() {
    var strMyBday = "Fri Aug 13 1982 13:37:35 GMT-0700 (PDT)";
    var ildMyBday = new ilib.Date.newInstance({
        year: 1982,
        month: 8,
        day: 13,
        hour: 13,
        minute: 31,
        second: 35
    });
    var fmt = new ilib.DateFmt({length: "full"});
    assertEquals(fmt.format(ildMyBday), fmt.format(ilib.dateToIlib(strMyBday)));
}
function testDateToIlibInteger() {
    var intMyBday = 1234657890000;
    var ildMyBday = new ilib.Date.newInstance({unixtime: 1234657890000});
    var fmt = new ilib.DateFmt({length: "full"});
    assertEquals(fmt.format(ildMyBday), fmt.format(ilib.dateToIlib(intMyBday)));
}
function testDateToIlibIlibDate() {
    var ildMyBday = new ilib.Date.newInstance({unixtime: 1234657890000});
    assertObjectEquals(ildMyBday, ilib.dateToIlib(ildMyBday));
}
function testDateToIlibNull() {
    assertUndefined(ilib.dateToIlib(null));
    assertUndefined(ilib.dateToIlib(undefined));
    assertUndefined(ilib.dateToIlib());
}
