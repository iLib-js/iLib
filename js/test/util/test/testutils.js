/*
 * testutils.js - test the utility routines
 * 
 * Copyright © 2012-2015, JEDLSoft
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

function strcmp(left, right) {
    return left.localeCompare(right);
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
    var actual = SearchUtils.bisectionSearch(16, 0, 10, 1e-12, function linear(x) {
        return 2 * x + 5;
    });
    assertRoughlyEquals(5.5, actual, 1e-12);
}

function testBisectionSearchMoreComplex() {
    var actual = SearchUtils.bisectionSearch(16, 0, 10, 1e-12, function square(x) {
        return x * x;
    });
    assertRoughlyEquals(4, actual, 1e-12);
}

function testBisectionSearchTrig() {
    var actual = SearchUtils.bisectionSearch(0.5, 0, 90, 1e-11, function sinInDegrees(x) {
        return Math.sin(x * Math.PI / 180);
    });
    assertRoughlyEquals(30, actual, 1e-9);
}

function testBisectionSearchVeryComplex() {
    var actual = SearchUtils.bisectionSearch(0, -0.9, 0, 1e-13, function polynomial(x) {
        var coeff = [2, 5, 3];
        var xpow = 1;
        var ret = 0;
        for (var i = 0; i < coeff.length; i++) {
            ret += coeff[i] * xpow;
            xpow *= x;
        }
        return ret;
    });
    assertRoughlyEquals(-0.66666666666666, actual, 1e-13);
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
    
    var expected = {"a": "A", "b": "B", "c": "C", "d": "D"};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
}

function testMergeSimpleNoSideEffects() {
    var object1 = {"a": "A", "b": "B"},
        object2 = {"c": "C", "d": "D"};
    
    var x = JSUtils.merge(object1, object2);
    
    assertNotUndefined(x);
    var expected = {"a": "A", "b": "B"};
    assertObjectEquals(expected, object1);
}

function testMergeArrays() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": ["d"]};

    var expected = {"a": ["b", "c", "d"]};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
}

function testMergeArraysDups() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": ["c", "d"]};
    
    var expected = {"a": ["b", "c", "c", "d"]};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
}

function testMergeArraysEmptySource() {
    var object1 = {"a": []},
        object2 = {"a": ["d"]};
    
    var expected = {"a": ["d"]};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
}

function testMergeArraysEmptyTarget() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": []};
    
    var expected = {"a": ["b", "c"]};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
}

function testMergeArraysIncongruentTypes1() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": "d"};
    
    var expected = {"a": "d"};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
}

function testMergeArraysIncongruentTypes2() {
    var object1 = {"a": "b"},
        object2 = {"a": ["d"]};
    
    var expected = {"a": ["d"]};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
}

function testMergeSimpleProperty() {
    var object1 = {"a": "A", "b": "B"},
        object2 = {"b": "X"};
    
    var expected = {"a": "A", "b": "X"};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
}

function testMergeComplexProperty() {
    var object1 = {"a": "A", "b": {"x": "B"}},
        object2 = {"b": "X"};
    
    var expected = {"a": "A", "b": "X"};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
}

function testMergeSubobjects() {
    var object1 = {"b": {"x": "X", "y": "Y"}},
        object2 = {"b": {"x": "M", "y": "N"}};
    
    var expected = {"b": {"x": "M", "y": "N"}};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
}

function testMergeSubobjectsLeaveObj1PropsUntouched() {
    var object1 = {"a": "A", "b": {"x": "X", "y": "Y", "z": "Z"}},
        object2 = {"b": {"x": "M", "y": "N"}};
    
    var expected = {"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
}

function testMergeSubobjectsAddProps() {
    var object1 = {"a": "A", "b": {"x": "X", "y": "Y"}},
        object2 = {"b": {"x": "M", "y": "N", "z": "Z"}};
    
    var expected = {"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
}

function testMergeSubobjectsAddProps() {
    var object1 = {"a": "A", "b": {"x": "X", "y": "Y"}},
        object2 = {"b": {"x": "M", "y": "N", "z": "Z"}};
    
    var expected = {"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
}

function testMergeBooleans() {
    var object1 = {"a": true, "b": true},
        object2 = {"b": false};
    
    var expected = {"a": true, "b": false};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
}

function testMergeAddBooleans() {
    var object1 = {"a": true, "b": true},
        object2 = {"c": false};
    
    var expected = {"a": true, "b": true, "c": false};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
}

function testMergeNumbers() {
    var object1 = {"a": 1, "b": 2},
        object2 = {"b": 3};
    
    var expected = {"a": 1, "b": 3};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
}

function testMergeNumbersWithZero() {
    var object1 = {"a": 1, "b": 2},
        object2 = {"b": 0};
    
    var expected = {"a": 1, "b": 0};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
}

function testMergeNumbersAddZero() {
    var object1 = {"a": 1, "b": 2},
        object2 = {"c": 0};
    
    var expected = {"a": 1, "b": 2, "c": 0};
    assertObjectEquals(expected, JSUtils.merge(object1, object2));
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
    
    assertUndefined(tgt.a);
    
    JSUtils.shallowCopy(src, tgt);
    
    assertNotUndefined(tgt.a);
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
    
    assertUndefined(tgt.a);
    
    JSUtils.shallowCopy(src, tgt);
    
    assertEquals("b", tgt.a);
    assertEquals("e", tgt.c.d);
    assertEquals(23, tgt.c.f);
}

function testShallowCopyUndefined() {
    var src = undefined;
    var tgt = {};
    
    assertNotUndefined(tgt);
    assertTrue(JSUtils.isEmpty(tgt));
    
    JSUtils.shallowCopy(src, tgt);
    
    assertNotUndefined(tgt);
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
	assertNotUndefined(m);
	
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
	var expected = JSUtils.hashCode(function a() { return "a"; });
    assertEquals(expected, JSUtils.hashCode(function a() { return "a"; }));
}

function testHashCodeEqualFunctionDifferentSpacing() {
	var plat = ilib._getPlatform(); 
	if (plat === "qt" || plat === "rhino" || plat === "trireme") {
		// the qt javascript engine doesn't allow you to see the code of a function, so all 
		// functions should have the same hash. On Rhino, you can see the code, but the white
		// space is all normalized nicely to the same thing, so logically equivalent functions
		// that only differ in white space compare the same. (This seems the most logical to 
		// me out of all of these!)
	    var expected = JSUtils.hashCode(function a () { return "a"; });
		assertEquals(expected, JSUtils.hashCode(function a(){return "a";}));
	} else {
	    var expected = JSUtils.hashCode(function a () { return "a"; });
		assertNotEquals(expected, JSUtils.hashCode(function a(){return "a";}));
	}
}

function testHashCodeNotEqualFunctionDifferentNames() {
	if (ilib._getPlatform() === "qt") {
		// the qt javascript engine doesn't allow you to see the code of a function, so all 
		// functions should have the same hash
	    var expected = JSUtils.hashCode(function a() { return "a"; });
		assertEquals(expected, JSUtils.hashCode(function b() { return "a"; }));
	} else {
	    var expected = JSUtils.hashCode(function a() { return "a"; });
		assertNotEquals(expected, JSUtils.hashCode(function b() { return "a"; }));
	}
}
function testHashCodeNotEqualFunctionDifferentContents() {
	if (ilib._getPlatform() === "qt") {
		// the qt javascript engine doesn't allow you to see the code of a function, so all 
		// functions should have the same hash
	    var expected = JSUtils.hashCode(function a() { return "a"; });
		assertEquals(expected, JSUtils.hashCode(function a() { return "b"; }));
	} else {
	    var expected = JSUtils.hashCode(function a() { return "a"; });
		assertNotEquals(expected, JSUtils.hashCode(function a() { return "b"; }));
	}
}

function testHashCodeEqualObjects() {
	var expected = JSUtils.hashCode({name: "abcdef"});
    assertEquals(expected, JSUtils.hashCode({name: "abcdef"}));
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
	var expected = JSUtils.hashCode({name: "abcdef", num: 3, value: "asdf"});
    assertEquals(expected, JSUtils.hashCode({value: "asdf", name: "abcdef", num: 3}));
}

function testHashCodeNotEqualObjectValuesComplex() {
    var expected = JSUtils.hashCode({num: 3, apple: "jacks", type: false, name: "abcXdef"});
	assertNotEquals(expected, JSUtils.hashCode({name: "abcdef", apple: "jacks", num: 3, type: false}));
}

function testLoadDataCorrectType() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.json",
		object: "obj",
		locale: "en-US",
		type: "json",
		loadParams: {},
		sync: true,
		callback: function (results) {
	        ilib.setLoaderCallback(oldLoader);
			assertTrue(typeof(results) === 'object');
		}
	});
}

function testLoadDataCorrectItems() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.json",
		object: "obj",
		locale: "en-US",
		type: "json",
		loadParams: {},
		sync: true,
		callback: function (results) {
	        ilib.setLoaderCallback(oldLoader);
			var expected = {"a": "b", "c": "m", "e": "y"};
			assertObjectEquals(expected, results);
		}
	});
}

function testLoadDataWithLocale() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.json",
		object: "obj",
		locale: "de-DE",
		type: "json",
		loadParams: {},
		sync: true,
		callback: function (results) {
	        ilib.setLoaderCallback(oldLoader);
			var expected = {"a": "a1", "c": "de2", "e": "f"};
			assertObjectEquals(expected, results);
		}
	});
}

function testLoadDataWithLocaleMissingParts() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.json",
		object: "obj",
		locale: "fr-Latn-FR",
		type: "json",
		loadParams: {},
		sync: true,
		callback: function (results) {
	        ilib.setLoaderCallback(oldLoader);
			var expected = {"a": "b", "c": "fr1", "e": "f"};
			assertObjectEquals(expected, results);
		}
	});
}

function testLoadDataDefaultLocale() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.json",
		object: "obj",
		type: "json",
		loadParams: {},
		sync: true,
		callback: function (results) {
	        ilib.setLoaderCallback(oldLoader);
			var expected = {"a": "b", "c": "m", "e": "y"};
			assertObjectEquals(expected, results);
		}
	});
}


function testLoadDataNonJson() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.json",
		object: "obj",
		locale: "en-US",
		type: "other",
		loadParams: {},
		sync: true,
		callback: function (results) {
	        ilib.setLoaderCallback(oldLoader);
			var expected = {"e": "y"};
			assertObjectEquals(expected, results);
		}
	});
}

function testLoadDataCached() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.json",
		object: "obj",
		locale: "en-US",
		type: "json",
		loadParams: {},
		sync: true,
		callback: function (results) {
		    var cache = ilib.data.cache.obj;
			for (var o in cache) {
				if (cache.hasOwnProperty(o)) {
			        ilib.setLoaderCallback(oldLoader);
					var expected = {"a": "b", "c": "m", "e": "y"};
					assertObjectEquals(expected, cache[o]);
				}
			}
		}
	});
}

function testLoadDataCachedWithOtherName() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);

	Utils.loadData({
		name: "foo.json",
		object: "obj",
		locale: "en-US",
		type: "json",
		loadParams: {},
		sync: true,
		callback: function (results) {
			var expected = {"a": "b", "c": "m", "e": "y"};
			assertObjectEquals(expected, results);

			Utils.loadData({
		        name: "bar.json",
		        object: "obj",
		        locale: "en-US",
		        type: "json",
		        loadParams: {},
		        sync: true,
		        callback: function (results) {
		            ilib.setLoaderCallback(oldLoader);
		            var expected = {"a": "barb", "c": "barm", "e": "bary"};
		            assertObjectEquals(expected, results);
		        }
		    });
		}
	});
}

function testLoadDataCachedWithLoadParamsMultipleFiles() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.json",
		object: "obj",
		locale: "en-US",
		type: "json",
		loadParams: {},
		sync: true,
		callback: function (results) {
		    assertNotUndefined(results);

		    Utils.loadData({
	            name: "foo.json",
	            object: "obj",
	            locale: "en-US",
	            type: "json",
	            loadParams: {
	                // should cause it to load a different file
	                root: "/usr/share/localization/myapp"
	            },
	            sync: true,
	            callback: function (results) {
	                ilib.setLoaderCallback(oldLoader);
	                assertNotUndefined(results);

	                var count = 0;
	                var cache = ilib.data.cache.obj;
	                for (var o in cache) {
	                    if (cache.hasOwnProperty(o)) {
	                        count++;
	                    }
	                }
	                
	                assertEquals(2, count);
	            }
	        });
		}
	});
}

function testLoadDataCachedWithLoadParams() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.json",
		object: "obj",
		locale: "en-US",
		type: "json",
		loadParams: {},
		sync: true,
		callback: function (results) {
			var expected = {"a": "b", "c": "m", "e": "y"};
			assertObjectEquals(expected, results);
	        Utils.loadData({
	            name: "foo.json",
	            object: "obj",
	            locale: "en-US",
	            type: "json",
	            loadParams: {
	                // should cause it to load a different file
	                root: "/usr/share/localization/myapp"
	            },
	            sync: true,
	            callback: function (results) {
	                ilib.setLoaderCallback(oldLoader);
	                var expected = {"xxx": "yyy", "www": "xyz", "yyy": "vvv", "nnn": "mmm"};
	                assertObjectEquals(expected, results);
	            }
	        });
		}
	});
}

function testLoadDataNoCache() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.json",
		locale: "en-US",
		type: "json",
		loadParams: {},
		sync: true,
		callback: function (results) {
	        ilib.setLoaderCallback(oldLoader);
			// should not crash
			var expected = {"a": "b", "c": "m", "e": "y"};
			assertObjectEquals(expected, results);
		}
	});
}

function testLoadDataNotCachedWithLoadParams() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.json",
		locale: "en-US",
		type: "json",
		loadParams: {},
		sync: true,
		callback: function (results) {
			var expected = {"a": "b", "c": "m", "e": "y"};
			assertObjectEquals(expected, results);

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
	                ilib.setLoaderCallback(oldLoader);
	                var expected = {"xxx": "yyy", "www": "xyz", "yyy": "vvv", "nnn": "mmm"};
	                assertObjectEquals(expected, results);
	            }
	        });
		}
	});
}

function testLoadDataAsynch() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var obj = {};
	
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.json",
		object: "obj",
		locale: "en-US",
		type: "json",
		loadParams: {},
		sync: false,
		callback: function (results) {
	        ilib.setLoaderCallback(oldLoader);
			var expected = {"a": "b", "c": "m", "e": "y"};
			assertObjectEquals(expected, results);
		}
	});
}

function testLoadDataDefaults() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.json",
		callback: function (results) {
	        ilib.setLoaderCallback(oldLoader);
			var expected = {"a": "b", "c": "m", "e": "y"};
			assertObjectEquals(expected, results);
		}
	});
}

function testLoadDataNonJson_en_US() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.html",
		type: "html",
		callback: function (results) {
	        ilib.setLoaderCallback(oldLoader);
			assertObjectEquals("<html><body>This is the generic, shared foo.</body></html>", results);
		}
	});
}

function testLoadDataNonJson_de() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.html",
		type: "html",
		locale: "de",
		callback: function (results) {
	        ilib.setLoaderCallback(oldLoader);
			assertObjectEquals("<html><body>Diese ist Foo auf Deutsch.</body></html>", results);
		}
	});
}

function testLoadDataNonJson_de_DE() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.html",
		type: "html",
		locale: "de-DE",
		callback: function (results) {
	        ilib.setLoaderCallback(oldLoader);
			assertObjectEquals("<html><body>Diese ist Foo auf Deutsch fuer Deutschland.</body></html>", results);
		}
	});
}

function testLoadDataNonJson_DE() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.html",
		type: "html",
		locale: "DE",
		callback: function (results) {
	        ilib.setLoaderCallback(oldLoader);
			assertObjectEquals("<html><body>Diese ist Foo fuer Deutschland.</body></html>", results);
		}
	});
}

function testLoadDataNonJsonWithFallbackToLanguage() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
    var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);

	Utils.loadData({
		name: "foo.html",
		type: "html",
		locale: "fr-FR",
		callback: function (results) {
	        ilib.setLoaderCallback(oldLoader);
			assertObjectEquals("<html><body>Ceci est foo en francais.</body></html>", results);
		}
	});
}

function testLoadDataNonJsonWithFallbackToRoot() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.html",
		type: "html",
		locale: "es-ES",
		callback: function (results) {
	        ilib.setLoaderCallback(oldLoader);
			assertObjectEquals("<html><body>This is the generic, shared foo.</body></html>", results);
		}
	});
}

function testLoadDataNonJsonInferFileTypeFromExtension() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var oldLoader = ilib._load;
	ilib.setLoaderCallback(mockLoader);
	Utils.loadData({
		name: "foo.html",
		locale: "de",
		callback: function (results) {
	        ilib.setLoaderCallback(oldLoader);
			assertObjectEquals("<html><body>Diese ist Foo auf Deutsch.</body></html>", results);
		}
	});
}

function testLoadDataJsonInferFileTypeFromExtension() {
    if (ilib.isDynData()) {
        // don't need to test loading on the dynamic load version because we are testing
        // it via all the other tests already.
        return;
    }
    ilib.setLoaderCallback(mockLoader);
    Utils.loadData({
        name: "foo.json",
        locale: "de-DE",
        callback: function (results) {
            ilib.setLoaderCallback(oldLoader);
            var expected = {"a": "a1", "c": "de2", "e": "f"};
            assertObjectEquals(expected, results);
        }
    });
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

function testPad2lt10() {
    assertEquals("01", JSUtils.pad(1, 2));
};

function testPad2lt0() {
    assertEquals("-01", JSUtils.pad(-1, 2));
};

function testPad2gt10() {
    assertEquals("11", JSUtils.pad(11, 2));
};

function testPad2ltMinus10() {
    assertEquals("-11", JSUtils.pad(-11, 2));
};

function testPad2gt100() {
    assertEquals("111", JSUtils.pad(111, 2));
};

function testPad2ltMinus100() {
    assertEquals("-111", JSUtils.pad(-111, 2));
};

function testPad0() {
    assertEquals("1", JSUtils.pad(1, 0));
    assertEquals("10", JSUtils.pad(10, 0));
};

function testPad0Neg() {
    assertEquals("-1", JSUtils.pad(-1, 0));
    assertEquals("-10", JSUtils.pad(-10, 0));
};

function testPad4_1() {
    assertEquals("0006", JSUtils.pad(6, 4));
};

function testPad4_2() {
    assertEquals("0067", JSUtils.pad(67, 4));
};

function testPad4_3() {
    assertEquals("0679", JSUtils.pad(679, 4));
};

function testPad4_4() {
    assertEquals("6792", JSUtils.pad(6792, 4));
};

function testPad4_5() {
    assertEquals("67925", JSUtils.pad(67925, 4));
};

function testPad4_6() {
    assertEquals("-0001", JSUtils.pad(-1, 4));
};

function testPad4_7() {
    assertEquals("-0010", JSUtils.pad(-10, 4));
};

function testPad4_8() {
    assertEquals("-0112", JSUtils.pad(-112, 4));
};

function testPad4_9() {
    assertEquals("-1123", JSUtils.pad(-1123, 4));
};

function testPad4_10() {
    assertEquals("-11233", JSUtils.pad(-11233, 4));
};

function testPad2lt10String() {
    assertEquals("01", JSUtils.pad("1", 2));
};

function testPad2gt10String() {
    assertEquals("11", JSUtils.pad("11", 2));
};

function testPad2gt100String() {
    assertEquals("111", JSUtils.pad("111", 2));
};

function testPadRightSide4() {
    assertEquals("123000", JSUtils.pad("123", 6, true));
};

function testPadRightSide4Decimal() {
    assertEquals("1.0000", JSUtils.pad("1.0", 6, true));
};

function testPadRightSideEnough() {
    assertEquals("1.234323", JSUtils.pad("1.234323", 4, true));
};
