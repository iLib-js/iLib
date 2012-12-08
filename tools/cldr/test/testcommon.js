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
