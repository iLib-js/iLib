/*
 * testcommon.js - test the common routines
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

var common = require("../../../tools/cldr/common.js");
var util = require("util");

function testUTFToCodePoint() {
    var str = String.fromCharCode(0xD800) + String.fromCharCode(0xDF02); 

    assertEquals(0x10302, common.UTF16ToCodePoint(str));
}

function testUTFToCodePointLast() {
    var str = String.fromCharCode(0xDBFF) + String.fromCharCode(0xDFFD); 

    assertEquals(0x10FFFD, common.UTF16ToCodePoint(str));
}

function testUTFToCodePointFirst() {
    var str = String.fromCharCode(0xD800) + String.fromCharCode(0xDC00); 

    assertEquals(0x10000, common.UTF16ToCodePoint(str));
}

function testUTFToCodePointBeforeFirst() {
    var str = String.fromCharCode(0xFFFF); 

    assertEquals(0xFFFF, common.UTF16ToCodePoint(str));
}

function testUTFToCodePointNotSupplementary() {
    var str = String.fromCharCode(0x0302); 

    assertEquals(0x0302, common.UTF16ToCodePoint(str));
}
function testCodePointToUTF() {
    var str = common.codePointToUTF16(0x10302);
    
    assertEquals(2, str.length);
    assertEquals(0xD800, str.charCodeAt(0));
    assertEquals(0xDF02, str.charCodeAt(1));
}

function testCodePointToUTFLast() {
    var str = common.codePointToUTF16(0x10FFFD);
    
    assertEquals(2, str.length);
    assertEquals(0xDBFF, str.charCodeAt(0));
    assertEquals(0xDFFD, str.charCodeAt(1));
}

function testCodePointToUTFFirst() {
    var str = common.codePointToUTF16(0x10000);
    
    assertEquals(2, str.length);
    assertEquals(0xD800, str.charCodeAt(0));
    assertEquals(0xDC00, str.charCodeAt(1));
}

function testCodePointToUTFBeforeFirst() {
    var str = common.codePointToUTF16(0xFFFF);
    
    assertEquals(1, str.length);
    assertEquals(0xFFFF, str.charCodeAt(0));
}

function testCodePointToUTFNotSupplementary() {
    var str = common.codePointToUTF16(0x0302);
    
    assertEquals(1, str.length);
    assertEquals(0x0302, str.charCodeAt(0));
}

function testUTFToCodePoint() {
    var str = String.fromCharCode(0xD800) + String.fromCharCode(0xDF02); 

    assertEquals(0x10302, common.UTF16ToCodePoint(str));
}

function testUTFToCodePointLast() {
    var str = String.fromCharCode(0xDBFF) + String.fromCharCode(0xDFFD); 

    assertEquals(0x10FFFD, common.UTF16ToCodePoint(str));
}

function testUTFToCodePointFirst() {
    var str = String.fromCharCode(0xD800) + String.fromCharCode(0xDC00); 

    assertEquals(0x10000, common.UTF16ToCodePoint(str));
}

function testUTFToCodePointBeforeFirst() {
    var str = String.fromCharCode(0xFFFF); 

    assertEquals(0xFFFF, common.UTF16ToCodePoint(str));
}

function testUTFToCodePointNotSupplementary() {
    var str = String.fromCharCode(0x0302); 

    assertEquals(0x0302, common.UTF16ToCodePoint(str));
}

var memberTest1 = [
	2,
	4,
	6,
	8
];

var memberTest2 = [];

/* @type Array.<object> */
var memberTest3 = [
	2,
	[4,8],
	10
];

var memberTest4 = [
	-8,
	[-4,-2],
	0,
	1,
	[4,6],
	8,
];


function testIsMemberTrue() {
	assertTrue(common.isMember(memberTest1, 2));
	assertTrue(common.isMember(memberTest1, 4));
	assertTrue(common.isMember(memberTest1, 6));
	assertTrue(common.isMember(memberTest1, 8));
}

function testIsMemberFalse() {
	assertFalse(common.isMember(memberTest1, 1));
	assertFalse(common.isMember(memberTest1, 3));
	assertFalse(common.isMember(memberTest1, 5));
	assertFalse(common.isMember(memberTest1, 7));
	assertFalse(common.isMember(memberTest1, 9));
}

function testIsMemberEmpty() {
	assertFalse(common.isMember(memberTest2, 2));
	assertFalse(common.isMember(memberTest2, 4));
	assertFalse(common.isMember(memberTest2, 6));
	assertFalse(common.isMember(memberTest2, 8));
}

function testIsMemberRange() {
	assertTrue(common.isMember(memberTest3, 2));
	assertTrue(common.isMember(memberTest3, 4));
	assertTrue(common.isMember(memberTest3, 5));
	assertTrue(common.isMember(memberTest3, 6));
	assertTrue(common.isMember(memberTest3, 7));
	assertTrue(common.isMember(memberTest3, 8));
	assertTrue(common.isMember(memberTest3, 10));
}

function testIsMemberOutsideRange() {
	assertFalse(common.isMember(memberTest3, 1));
	assertFalse(common.isMember(memberTest3, 3));
	assertFalse(common.isMember(memberTest3, 9));
	assertFalse(common.isMember(memberTest3, 11));
}

function testIsMemberWithNegativeRanges() {
	assertTrue(common.isMember(memberTest4, -8));
	assertTrue(common.isMember(memberTest4, -4));
	assertTrue(common.isMember(memberTest4, -3));
	assertTrue(common.isMember(memberTest4, -2));
	assertTrue(common.isMember(memberTest4, 0));
	assertTrue(common.isMember(memberTest4, 1));
	assertTrue(common.isMember(memberTest4, 4));
	assertTrue(common.isMember(memberTest4, 5));
	assertTrue(common.isMember(memberTest4, 6));
	assertTrue(common.isMember(memberTest4, 8));
}

function testIsMemberOutsideRange() {
	assertFalse(common.isMember(memberTest4, -9));
	assertFalse(common.isMember(memberTest4, -7));
	assertFalse(common.isMember(memberTest4, -5));
	assertFalse(common.isMember(memberTest4, -1));
	assertFalse(common.isMember(memberTest4, 2));
	assertFalse(common.isMember(memberTest4, 3));
	assertFalse(common.isMember(memberTest4, 7));
	assertFalse(common.isMember(memberTest4, 9));
}

function testCoelesceCase1RightLength() {
	var a = [[1], [2], [4], [5], [7]];
	
	var b = common.coelesce(a, 0);
	
	assertEquals(3, b.length);
	assertEquals(2, b[0].length);
	assertEquals(2, b[1].length);
	assertEquals(1, b[2].length);
}

function testCoelesceCase1RightContent() {
	var a = [[1], [2], [4], [5], [7]];
	
	var b = common.coelesce(a, 0);
	
	assertEquals(1, b[0][0]);
	assertEquals(2, b[0][1]);
	assertEquals(4, b[1][0]);
	assertEquals(5, b[1][1]);
	assertEquals(7, b[2][0]);
}

function testCoelesceCase2RightLength() {
	var a = [[1], [2,3], [5], [6,10], [12]];
	
	var b = common.coelesce(a, 0);
	
	assertEquals(3, b.length);
	assertEquals(2, b[0].length);
	assertEquals(2, b[1].length);
	assertEquals(1, b[2].length);
}

function testCoelesceCase2RightContent() {
	var a = [[1], [2,3], [5], [6,10], [12]];
	
	var b = common.coelesce(a, 0);
	
	assertEquals(1, b[0][0]);
	assertEquals(3, b[0][1]);
	assertEquals(5, b[1][0]);
	assertEquals(10, b[1][1]);
	assertEquals(12, b[2][0]);
}

function testCoelesceCase3RightLength() {
	var a = [[1,3], [4], [6,9], [10], [12]];
	
	var b = common.coelesce(a, 0);
	
	assertEquals(3, b.length);
	assertEquals(2, b[0].length);
	assertEquals(2, b[1].length);
	assertEquals(1, b[2].length);
}

function testCoelesceCase3RightContent() {
	var a = [[1,3], [4], [6,9], [10], [12]];
	
	var b = common.coelesce(a, 0);
	
	assertEquals(1, b[0][0]);
	assertEquals(4, b[0][1]);
	assertEquals(6, b[1][0]);
	assertEquals(10, b[1][1]);
	assertEquals(12, b[2][0]);
}

function testCoelesceCase4RightLength() {
	var a = [[1,3], [4,6], [10,12], [13,15], [17]];
	
	var b = common.coelesce(a, 0);
	
	assertEquals(3, b.length);
	assertEquals(2, b[0].length);
	assertEquals(2, b[1].length);
	assertEquals(1, b[2].length);
}

function testCoelesceCase4RightContent() {
	var a = [[1,3], [4,6], [10,12], [13,15], [17]];
	
	var b = common.coelesce(a, 0);
	
	assertEquals(1, b[0][0]);
	assertEquals(6, b[0][1]);
	assertEquals(10, b[1][0]);
	assertEquals(15, b[1][1]);
	assertEquals(17, b[2][0]);
}

function testCoelesceMultipleCasesLength() {
	var a = [[1], [2,3], [4], [5], [6,10], [11,15]];
	
	var b = common.coelesce(a, 0);
	
	assertEquals(1, b.length);
}

function testCoelesceMultipleCasesContent() {
	var a = [[1], [2,3], [4], [5], [6,10], [11,15]];
	
	var b = common.coelesce(a, 0);
	
	assertEquals(1, b[0][0]);
	assertEquals(15, b[0][1]);
}

function testCoelesceMultipleCasesWithSkipLength() {
	var a = [
	    ["foo", 1], 
	    ["foo", 2, 3], 
	    ["foo", 4], 
	    ["foo", 5], 
	    ["bar", 6], 
	    ["bar", 7], 
	    ["bar", 8, 12], 
	    ["bar", 13, 16],
	    ["bar", 17],
	    ["foo", 26, 30], 
	    ["foo", 31, 35]
    ];
	
	var b = common.coelesce(a, 1);
	
	assertEquals(3, b.length);
	assertEquals(3, b[0].length);
	assertEquals(3, b[1].length);
	assertEquals(3, b[2].length);
}

function testCoelesceMultipleCasesWithSkipContent() {
	var a = [
	    ["foo", 1], 
	    ["foo", 2, 3], 
	    ["foo", 4], 
	    ["foo", 5], 
	    ["bar", 6], 
	    ["bar", 7], 
	    ["bar", 8, 12], 
	    ["bar", 13, 16],
	    ["bar", 17],
	    ["foo", 26, 30], 
	    ["foo", 31, 35]
    ];
	
	var b = common.coelesce(a, 1);
	
	assertEquals("foo", b[0][0]);
	assertEquals(1, b[0][1]);
	assertEquals(5, b[0][2]);
	assertEquals("bar", b[1][0]);
	assertEquals(6, b[1][1]);
	assertEquals(17, b[1][2]);
	assertEquals("foo", b[2][0]);
	assertEquals(26, b[2][1]);
	assertEquals(35, b[2][2]);
}

function testCoelesceEmpty() {
	var a = [];
	
	var b = common.coelesce(a, 0);
	assertNotUndefined(b);
	assertEquals(0, b.length);
}

function testPrune() {
	var parent = {
		"a": 0,
		"b": 1,
		"c": 2,
		"d": 3
	};
	var child = {
		"a": 0,
		"b": 1,
		"c": 4,
		"d": 5,
		"e": 6
	};
	
	var expected = {
		"c": 4,
		"d": 5,
		"e": 6
	};
	var pruned = common.prune(parent, child);
	assertObjectEquals(expected, pruned);
}

function testPruneWithSubobjects() {
	var parent = {
		"a": 0,
		"b": 1,
		"c": 2,
		"d": 3,
		"m": {
			"x": 1,
			"y": 2
		}
	};
	var child = {
		"a": 0,
		"b": 1,
		"c": 4,
		"d": 5,
		"e": 6,
		"m": {
			"x": 1,
			"y": 3,
			"z": 4
		}
	};
	
	var expected = {
		"c": 4,
		"d": 5,
		"e": 6,
		"m": {
			"y": 3,
			"z": 4
		}
	};
	var pruned = common.prune(parent, child);
	assertObjectEquals(expected, pruned);
}

function testPruneMissingChildValues() {
	var parent = {
		"a": 0,
		"b": 1,
		"c": 2,
		"d": 3
	};
	var child = {
		"a": 0,
		"b": 2
	};
	
	var expected = {
		"b": 2
	};
	var pruned = common.prune(parent, child);
	assertObjectEquals(expected, pruned);
}

function testMergeAndPruneAllSame() {
	var data = {
		data: {
			"sun": 0,
			"mon": 1,
			"tue": 2,
			"wed": 3,
			"thu": 4,
			"fri": 5,
			"sat": 6,
			"east": "west",
			"west": "east"
		},
		a: {
			data: {
				"sun": 0,
				"mon": 1,
				"tue": 2,
				"wed": 3,
				"thu": 4,
				"fri": 5,
				"sat": 6
			},
			n: {
				data: {
					"days": 7
				}
			},
			m: {
				data: {
					"days": 7,
					"sun": 1,
					"mon": 2,
					"tue": 3
				}
			}
		},
		b: {
			data: {
				"sun": 100,
				"mon": 101,
				"tue": 102,
				"wed": 103,
				"thu": 104,
				"fri": 105,
				"sat": 106
			},
			x: {
				data: {
					foo: "bar",
					"sun": 0,
					"fri": 5,
					"sat": 106,
					"mon": 101
				}
			},
			y: {
				data: {
					foo: "asdf",
					"mon": 1,
					"sat": 6
				}
			}
		}
	};
	
	common.mergeAndPrune(data);
	var adata = {
	};
	assertObjectEquals(adata, data.a.data);
	
	var adatamerged = {
		"sun": 0,
		"mon": 1,
		"tue": 2,
		"wed": 3,
		"thu": 4,
		"fri": 5,
		"sat": 6,
		"east": "west",
		"west": "east"
	};
	assertObjectEquals(adatamerged, data.a.merged);
}

function testMergeAndPruneAddProps() {
	var data = {
		data: {
			"sun": 0,
			"mon": 1,
			"tue": 2,
			"wed": 3,
			"thu": 4,
			"fri": 5,
			"sat": 6,
			"east": "west",
			"west": "east"
		},
		a: {
			data: {
				"sun": 0,
				"mon": 1,
				"tue": 2,
				"wed": 3,
				"thu": 4,
				"fri": 5,
				"sat": 6
			},
			n: {
				data: {
					"days": 7
				}
			}
		}
	};
	
	common.mergeAndPrune(data);
	var andata = {
		days: 7   // add property that ancestors don't have
	};
	assertObjectEquals(andata, data.a.n.data);
	var andatamerged = {
		"sun": 0,
		"mon": 1,
		"tue": 2,
		"wed": 3,
		"thu": 4,
		"fri": 5,
		"sat": 6,
		"east": "west",
		"west": "east",
		"days": 7
	};
	assertObjectEquals(andatamerged, data.a.n.merged);
}

function testMergeAndPruneDontAddSame() {
	var data = {
		data: {
			"sun": 0,
			"mon": 1,
			"tue": 2,
			"wed": 3,
			"thu": 4,
			"fri": 5,
			"sat": 6,
			"east": "west",
			"west": "east"
		},
		a: {
			data: {
				"sun": 0,
				"mon": 1,
				"tue": 2,
				"wed": 3,
				"thu": 4,
				"fri": 5,
				"sat": 6
			},
			m: {
				data: {
					"days": 7,
					"sun": 0,
					"mon": 2,
					"tue": 2
				}
			}
		}
	};
	
	common.mergeAndPrune(data);
	var amdata = {
		"days": 7,
		"mon": 2    // sun and tue were same as parent
	};
	assertObjectEquals(amdata, data.a.m.data);
	var amdatamerged = {
		"sun": 0,
		"mon": 2,
		"tue": 2,
		"wed": 3,
		"thu": 4,
		"fri": 5,
		"sat": 6,
		"east": "west",
		"west": "east",
		"days": 7
	};
	assertObjectEquals(amdatamerged, data.a.m.merged);
}

function testMergeAndPruneDontOverrideGrandParent() {
	var data = {
		data: {
			"sun": 0,
			"mon": 1,
			"tue": 2,
			"wed": 3,
			"thu": 4,
			"fri": 5,
			"sat": 6,
			"east": "west",
			"west": "east"
		},
		b: {
			data: {
				"sun": 100,
				"mon": 101,
				"tue": 102,
				"wed": 103,
				"thu": 104,
				"fri": 105,
				"sat": 106
			},
			y: {
				data: {
					foo: "asdf",
					"mon": 1,
					"sat": 6,
					"east": "west"
				}
			}
		}
	};
	
	common.mergeAndPrune(data);
	var bydata = {
		foo: "asdf",
		"mon": 1,
		"sat": 6 // should not contain east: west from the grandparent
	};
	assertObjectEquals(bydata, data.b.y.data);
	var bydatamerged = {
		"sun": 100,
		"mon": 1,
		"tue": 102,
		"wed": 103,
		"thu": 104,
		"fri": 105,
		"sat": 6,
		"east": "west",
		"west": "east",
		"foo": "asdf"
	};
	assertObjectEquals(bydatamerged, data.b.y.merged);
}

function testMergeAndPruneOverrideGrandparentOnly() {
	var data = {
		data: {
			"sun": 0,
			"mon": 1,
			"tue": 2,
			"wed": 3,
			"thu": 4,
			"fri": 5,
			"sat": 6,
			"east": "west",
			"west": "east"
		},
		a: {
			data: {
				"sun": 0,
				"mon": 1,
				"tue": 2,
				"wed": 3,
				"thu": 4,
				"fri": 5,
				"sat": 6
			},
			m: {
				data: {
					"east": "north"
				}
			}
		}
	};
	
	common.mergeAndPrune(data);
	var amdata = {
		"east": "north"
	};
	assertObjectEquals(amdata, data.a.m.data);
	var amdatamerged = {
		"sun": 0,
		"mon": 1,
		"tue": 2,
		"wed": 3,
		"thu": 4,
		"fri": 5,
		"sat": 6,
		"east": "north",
		"west": "east"
	};
	assertObjectEquals(amdatamerged, data.a.m.merged);
}

function testMergeAndPruneComplexObject() {
	var data = {
		data: {
			"sun": 0,
			"mon": 1,
			"tue": 2,
			"wed": 3,
			"thu": 4,
			"fri": 5,
			"sat": 6,
			"cardinaldirections" : {
				"east": "west",
				"west": "east"
			}
		},
		a: {
			data: {
				"sun": 0,
				"mon": 1,
				"tue": 2,
				"wed": 3,
				"thu": 4,
				"fri": 5,
				"sat": 6,
				"cardinaldirections" : {
					"east": "north"
				}
			},
			m: {
				data: {
					"cardinaldirections" : {
						"east": "north"
					}
				}
			}
		}
	};
	
	common.mergeAndPrune(data);
	util.print("data.a.m.data is " + JSON.stringify(data.a.m.data) + "\n");
	assertTrue(common.isEmpty(data.a.m.data));
}
