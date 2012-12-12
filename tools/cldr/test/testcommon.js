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

function testUTFToCodePoint() {
    var str = String.fromCharCode(0xD800) + String.fromCharCode(0xDF02); 

    assertEquals(0x10302, exports.UTF16ToCodePoint(str));
}

function testUTFToCodePointLast() {
    var str = String.fromCharCode(0xDBFF) + String.fromCharCode(0xDFFD); 

    assertEquals(0x10FFFD, exports.UTF16ToCodePoint(str));
}

function testUTFToCodePointFirst() {
    var str = String.fromCharCode(0xD800) + String.fromCharCode(0xDC00); 

    assertEquals(0x10000, exports.UTF16ToCodePoint(str));
}

function testUTFToCodePointBeforeFirst() {
    var str = String.fromCharCode(0xFFFF); 

    assertEquals(0xFFFF, exports.UTF16ToCodePoint(str));
}

function testUTFToCodePointNotSupplementary() {
    var str = String.fromCharCode(0x0302); 

    assertEquals(0x0302, exports.UTF16ToCodePoint(str));
}
function testCodePointToUTF() {
    var str = exports.codePointToUTF16(0x10302);
    
    assertEquals(2, str.length);
    assertEquals(0xD800, str.charCodeAt(0));
    assertEquals(0xDF02, str.charCodeAt(1));
}

function testCodePointToUTFLast() {
    var str = exports.codePointToUTF16(0x10FFFD);
    
    assertEquals(2, str.length);
    assertEquals(0xDBFF, str.charCodeAt(0));
    assertEquals(0xDFFD, str.charCodeAt(1));
}

function testCodePointToUTFFirst() {
    var str = exports.codePointToUTF16(0x10000);
    
    assertEquals(2, str.length);
    assertEquals(0xD800, str.charCodeAt(0));
    assertEquals(0xDC00, str.charCodeAt(1));
}

function testCodePointToUTFBeforeFirst() {
    var str = exports.codePointToUTF16(0xFFFF);
    
    assertEquals(1, str.length);
    assertEquals(0xFFFF, str.charCodeAt(0));
}

function testCodePointToUTFNotSupplementary() {
    var str = exports.codePointToUTF16(0x0302);
    
    assertEquals(1, str.length);
    assertEquals(0x0302, str.charCodeAt(0));
}

function testUTFToCodePoint() {
    var str = String.fromCharCode(0xD800) + String.fromCharCode(0xDF02); 

    assertEquals(0x10302, exports.UTF16ToCodePoint(str));
}

function testUTFToCodePointLast() {
    var str = String.fromCharCode(0xDBFF) + String.fromCharCode(0xDFFD); 

    assertEquals(0x10FFFD, exports.UTF16ToCodePoint(str));
}

function testUTFToCodePointFirst() {
    var str = String.fromCharCode(0xD800) + String.fromCharCode(0xDC00); 

    assertEquals(0x10000, exports.UTF16ToCodePoint(str));
}

function testUTFToCodePointBeforeFirst() {
    var str = String.fromCharCode(0xFFFF); 

    assertEquals(0xFFFF, exports.UTF16ToCodePoint(str));
}

function testUTFToCodePointNotSupplementary() {
    var str = String.fromCharCode(0x0302); 

    assertEquals(0x0302, exports.UTF16ToCodePoint(str));
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
	assertTrue(exports.isMember(memberTest1, 2));
	assertTrue(exports.isMember(memberTest1, 4));
	assertTrue(exports.isMember(memberTest1, 6));
	assertTrue(exports.isMember(memberTest1, 8));
}

function testIsMemberFalse() {
	assertFalse(exports.isMember(memberTest1, 1));
	assertFalse(exports.isMember(memberTest1, 3));
	assertFalse(exports.isMember(memberTest1, 5));
	assertFalse(exports.isMember(memberTest1, 7));
	assertFalse(exports.isMember(memberTest1, 9));
}

function testIsMemberEmpty() {
	assertFalse(exports.isMember(memberTest2, 2));
	assertFalse(exports.isMember(memberTest2, 4));
	assertFalse(exports.isMember(memberTest2, 6));
	assertFalse(exports.isMember(memberTest2, 8));
}

function testIsMemberRange() {
	assertTrue(exports.isMember(memberTest3, 2));
	assertTrue(exports.isMember(memberTest3, 4));
	assertTrue(exports.isMember(memberTest3, 5));
	assertTrue(exports.isMember(memberTest3, 6));
	assertTrue(exports.isMember(memberTest3, 7));
	assertTrue(exports.isMember(memberTest3, 8));
	assertTrue(exports.isMember(memberTest3, 10));
}

function testIsMemberOutsideRange() {
	assertFalse(exports.isMember(memberTest3, 1));
	assertFalse(exports.isMember(memberTest3, 3));
	assertFalse(exports.isMember(memberTest3, 9));
	assertFalse(exports.isMember(memberTest3, 11));
}

function testIsMemberWithNegativeRanges() {
	assertTrue(exports.isMember(memberTest4, -8));
	assertTrue(exports.isMember(memberTest4, -4));
	assertTrue(exports.isMember(memberTest4, -3));
	assertTrue(exports.isMember(memberTest4, -2));
	assertTrue(exports.isMember(memberTest4, 0));
	assertTrue(exports.isMember(memberTest4, 1));
	assertTrue(exports.isMember(memberTest4, 4));
	assertTrue(exports.isMember(memberTest4, 5));
	assertTrue(exports.isMember(memberTest4, 6));
	assertTrue(exports.isMember(memberTest4, 8));
}

function testIsMemberOutsideRange() {
	assertFalse(exports.isMember(memberTest4, -9));
	assertFalse(exports.isMember(memberTest4, -7));
	assertFalse(exports.isMember(memberTest4, -5));
	assertFalse(exports.isMember(memberTest4, -1));
	assertFalse(exports.isMember(memberTest4, 2));
	assertFalse(exports.isMember(memberTest4, 3));
	assertFalse(exports.isMember(memberTest4, 7));
	assertFalse(exports.isMember(memberTest4, 9));
}

function testCoelesceCase1RightLength() {
	var a = [[1], [2], [4], [5], [7]];
	
	var b = exports.coelesce(a, 0);
	
	assertEquals(3, b.length);
	assertEquals(2, b[0].length);
	assertEquals(2, b[1].length);
	assertEquals(1, b[2].length);
}

function testCoelesceCase1RightContent() {
	var a = [[1], [2], [4], [5], [7]];
	
	var b = exports.coelesce(a, 0);
	
	assertEquals(1, b[0][0]);
	assertEquals(2, b[0][1]);
	assertEquals(4, b[1][0]);
	assertEquals(5, b[1][1]);
	assertEquals(7, b[2][0]);
}

function testCoelesceCase2RightLength() {
	var a = [[1], [2,3], [5], [6,10], [12]];
	
	var b = exports.coelesce(a, 0);
	
	assertEquals(3, b.length);
	assertEquals(2, b[0].length);
	assertEquals(2, b[1].length);
	assertEquals(1, b[2].length);
}

function testCoelesceCase2RightContent() {
	var a = [[1], [2,3], [5], [6,10], [12]];
	
	var b = exports.coelesce(a, 0);
	
	assertEquals(1, b[0][0]);
	assertEquals(3, b[0][1]);
	assertEquals(5, b[1][0]);
	assertEquals(10, b[1][1]);
	assertEquals(12, b[2][0]);
}

function testCoelesceCase3RightLength() {
	var a = [[1,3], [4], [6,9], [10], [12]];
	
	var b = exports.coelesce(a, 0);
	
	assertEquals(3, b.length);
	assertEquals(2, b[0].length);
	assertEquals(2, b[1].length);
	assertEquals(1, b[2].length);
}

function testCoelesceCase3RightContent() {
	var a = [[1,3], [4], [6,9], [10], [12]];
	
	var b = exports.coelesce(a, 0);
	
	assertEquals(1, b[0][0]);
	assertEquals(4, b[0][1]);
	assertEquals(6, b[1][0]);
	assertEquals(10, b[1][1]);
	assertEquals(12, b[2][0]);
}

function testCoelesceCase4RightLength() {
	var a = [[1,3], [4,6], [10,12], [13,15], [17]];
	
	var b = exports.coelesce(a, 0);
	
	assertEquals(3, b.length);
	assertEquals(2, b[0].length);
	assertEquals(2, b[1].length);
	assertEquals(1, b[2].length);
}

function testCoelesceCase4RightContent() {
	var a = [[1,3], [4,6], [10,12], [13,15], [17]];
	
	var b = exports.coelesce(a, 0);
	
	assertEquals(1, b[0][0]);
	assertEquals(6, b[0][1]);
	assertEquals(10, b[1][0]);
	assertEquals(15, b[1][1]);
	assertEquals(17, b[2][0]);
}

function testCoelesceMultipleCasesLength() {
	var a = [[1], [2,3], [4], [5], [6,10], [11,15]];
	
	var b = exports.coelesce(a, 0);
	
	assertEquals(1, b.length);
}

function testCoelesceMultipleCasesContent() {
	var a = [[1], [2,3], [4], [5], [6,10], [11,15]];
	
	var b = exports.coelesce(a, 0);
	
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
	
	var b = exports.coelesce(a, 1);
	
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
	
	var b = exports.coelesce(a, 1);
	
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
	
	var b = exports.coelesce(a, 0);
	assertNotUndefined(b);
	assertEquals(0, b.length);
}
