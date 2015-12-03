/*
 * testcm_UTF-16.js - Test the charset mapping routines for UTF-16
 * 
 * Copyright © 2014-2015, JEDLSoft
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

var CharmapFactory = require("./../lib/CharmapFactory.js");

function testCharmapUTF16LoadMap() {
	var cm = CharmapFactory({
		name: "UTF-16"
	});
    assertNotUndefined(cm);
    assertEquals("UTF-16LE", cm.getName());
}


function testCharmapUTF16MapToUnicode() {
	var cm = CharmapFactory({
		name: "UTF-16"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array(28);
    var str = "This is a test";
    for (var i = 0; i < str.length; i++) {
    	input[i*2] = str.charCodeAt(i); 
    }
    
    assertEquals("This is a test", cm.mapToUnicode(input));
}


function testCharmapUTF16MapToUnicodeExtended2() {
	var cm = CharmapFactory({
		name: "UTF-16"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array([
        0xC0, 0x00,
        0xC1, 0x00,
        0xE2, 0x00,
        0xE3, 0x00,
        0x18, 0x04,
        0x2F, 0x04,
        0x14, 0x04
	]);
    
    assertEquals("ÀÁâãИЯД", cm.mapToUnicode(input));
}

function testCharmapUTF16MapToUnicodeExtended3() {
	var cm = CharmapFactory({
		name: "UTF-16"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array([
        0x00, 0x4E,
		0x01, 0x4E,
		0x01, 0x57,
		0x02, 0x57
	]);
    
    assertEquals("一丁圁圂", cm.mapToUnicode(input));
}

function testCharmapUTF16MapToUnicodeExtended4() {
	var cm = CharmapFactory({
		name: "UTF-16"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array([
		0x41, 0xD8, 0x09, 0xDD,
		0x41, 0xD8, 0x28, 0xDE,
		0x41, 0xD8, 0x4F, 0xDF,
		0x42, 0xD8, 0x3A, 0xDC
	]);
    
    assertEquals("𠔉𠘨𠝏𠠺", cm.mapToUnicode(input));
}


function testCharmapUTF16MapToNative() {
	var cm = CharmapFactory({
		name: "UTF-16"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("This is a test");
    var expected = [
        0x54, 0x00, // T 
        0x68, 0x00, // h
        0x69, 0x00, // i
        0x73, 0x00, // s
        0x20, 0x00, // 
        0x69, 0x00, // i
        0x73, 0x00, // s
        0x20, 0x00, // 
        0x61, 0x00, // a
        0x20, 0x00, //
        0x74, 0x00, // t
        0x65, 0x00, // e
        0x73, 0x00, // s
        0x74, 0x00  // t
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmapUTF16MapToNativeExtended2() {
	var cm = CharmapFactory({
		name: "UTF-16"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("ÀÁâãИЯД");
    var expected = [
        0xC0, 0x00,
        0xC1, 0x00,
        0xE2, 0x00,
        0xE3, 0x00,
        0x18, 0x04,
        0x2F, 0x04,
        0x14, 0x04
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmapUTF16MapToNativeExtended3() {
	var cm = CharmapFactory({
		name: "UTF-16"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("一丁圁圂");
    var expected = [
        0x00, 0x4E,
		0x01, 0x4E,
		0x01, 0x57,
		0x02, 0x57
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmapUTF16MapToNativeExtended4() {
	var cm = CharmapFactory({
		name: "UTF-16"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("𠔉𠘨𠝏𠠺");
    var expected = [
		0x41, 0xD8, 0x09, 0xDD,
		0x41, 0xD8, 0x28, 0xDE,
		0x41, 0xD8, 0x4F, 0xDF,
		0x42, 0xD8, 0x3A, 0xDC
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmapUTF16BEMapToUnicode() {
	var cm = CharmapFactory({
		name: "UTF-16BE"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array(28);
    var str = "This is a test";
    for (var i = 0; i < str.length; i++) {
    	input[i*2+1] = str.charCodeAt(i); 
    }
    
    assertEquals("This is a test", cm.mapToUnicode(input));
}

function testCharmapUTF16BEMapToUnicodeExtended2() {
	var cm = CharmapFactory({
		name: "UTF-16BE"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array([
        0x00, 0xC0,
        0x00, 0xC1,
        0x00, 0xE2,
        0x00, 0xE3,
        0x04, 0x18,
        0x04, 0x2F,
        0x04, 0x14
	]);
    
    assertEquals("ÀÁâãИЯД", cm.mapToUnicode(input));
}

function testCharmapUTF16BEMapToUnicodeExtended3() {
	var cm = CharmapFactory({
		name: "UTF-16BE"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array([
        0x4E, 0x00,
		0x4E, 0x01,
		0x57, 0x01,
		0x57, 0x02
	]);
    
    assertEquals("一丁圁圂", cm.mapToUnicode(input));
}

function testCharmapUTF16BEMapToUnicodeExtended4() {
	var cm = CharmapFactory({
		name: "UTF-16BE"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array([
		0xd8, 0x41, 0xdd, 0x09,
		0xd8, 0x41, 0xde, 0x28,
		0xd8, 0x41, 0xdf, 0x4f,
		0xd8, 0x42, 0xdc, 0x3a
	]);
    
    assertEquals("𠔉𠘨𠝏𠠺", cm.mapToUnicode(input));
}


function testCharmapUTF16BEMapToNative() {
	var cm = CharmapFactory({
		name: "UTF-16BE"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("This is a test");
    var expected = [
        0x00, 0x54, // T 
        0x00, 0x68, // h
        0x00, 0x69, // i
        0x00, 0x73, // s
        0x00, 0x20, // 
        0x00, 0x69, // i
        0x00, 0x73, // s
        0x00, 0x20, // 
        0x00, 0x61, // a
        0x00, 0x20, //
        0x00, 0x74, // t
        0x00, 0x65, // e
        0x00, 0x73, // s
        0x00, 0x74  // t
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmapUTF16BEMapToNativeExtended2() {
	var cm = CharmapFactory({
		name: "UTF-16BE"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("ÀÁâãИЯД");
    var expected = [
        0x00, 0xC0,
        0x00, 0xC1,
        0x00, 0xE2,
        0x00, 0xE3,
        0x04, 0x18,
        0x04, 0x2F,
        0x04, 0x14
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmapUTF16BEMapToNativeExtended3() {
	var cm = CharmapFactory({
		name: "UTF-16BE"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("一丁圁圂");
    var expected = [
        0x4E, 0x00,
		0x4E, 0x01,
		0x57, 0x01,
		0x57, 0x02
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmapUTF16BEMapToNativeExtended4() {
	var cm = CharmapFactory({
		name: "UTF-16BE"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("𠔉𠘨𠝏𠠺");
    var expected = [
		0xD8, 0x41, 0xDD, 0x09,
		0xD8, 0x41, 0xDE, 0x28,
		0xD8, 0x41, 0xDF, 0x4F,
		0xD8, 0x42, 0xDC, 0x3A
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}
