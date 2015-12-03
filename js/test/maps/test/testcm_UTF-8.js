/*
 * testcm_UTF-8.js - Test the charset mapping routines for UTF-8
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

function testCharmapUTF8LoadMap() {
	var cm = CharmapFactory({
		name: "UTF-8"
	});
    assertNotUndefined(cm);
    assertEquals("UTF-8", cm.getName());
}

function testCharmapUTF8MapToUnicodeUint8Array() {
	var cm = CharmapFactory({
		name: "UTF-8"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array(14);
    var str = "This is a test";
    for (var i = 0; i < str.length; i++) {
    	input[i] = str.charCodeAt(i); 
    }
    
    assertEquals("This is a test", cm.mapToUnicode(input));
}

function testCharmapUTF8MapToUnicodeUint8ArrayExtended2() {
	var cm = CharmapFactory({
		name: "UTF-8"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array([
        0xC3, 0x80,
        0xC3, 0x81,
        0xC3, 0xA2,
        0xC3, 0xA3,
        0xD0, 0x98,
        0xD0, 0xAF,
        0xD0, 0x94
	]);
    
    assertEquals("ÀÁâãИЯД", cm.mapToUnicode(input));
}

function testCharmapUTF8MapToUnicodeUint8ArrayExtended3() {
	var cm = CharmapFactory({
		name: "UTF-8"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array([
        0xe4, 0xb8,	0x80,
		0xe4, 0xb8, 0x81,
		0xe4, 0xb8, 0x82,
		0xe5, 0x9c, 0x81,
		0xe5, 0x9c, 0x82,
		0xe5, 0x9c, 0x83
	]);
    
    assertEquals("一丁丂圁圂圃", cm.mapToUnicode(input));
}

function testCharmapUTF8MapToUnicodeUint8ArrayExtended4() {
	var cm = CharmapFactory({
		name: "UTF-8"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array([
        0xf0, 0xa0, 0x94, 0x89,
		0xf0, 0xa0, 0x98, 0xa8,
		0xf0, 0xa0, 0x9d, 0x8f,
		0xf0, 0xa0, 0xa0, 0xba
	]);
    
    assertEquals("𠔉𠘨𠝏𠠺", cm.mapToUnicode(input));
}

function testCharmapUTF8MapToUnicodeNumberArray() {
	var cm = CharmapFactory({
		name: "UTF-8"
	});
    assertNotUndefined(cm);
    var input = [];
    var str = "This is a test";
    for (var i = 0; i < str.length; i++) {
    	input.push(str.charCodeAt(i)); 
    }
    
    assertEquals("This is a test", cm.mapToUnicode(input));
}

function testCharmapUTF8MapToUnicodeNumberArrayExtended2() {
	var cm = CharmapFactory({
		name: "UTF-8"
	});
    assertNotUndefined(cm);
    var input = [
        0xC3, 0x80,
        0xC3, 0x81,
        0xC3, 0xA2,
        0xC3, 0xA3,
        0xD0, 0x98,
        0xD0, 0xAF,
        0xD0, 0x94
	];
    
    assertEquals("ÀÁâãИЯД", cm.mapToUnicode(input));
}

function testCharmapUTF8MapToUnicodeNumberArrayExtended3() {
	var cm = CharmapFactory({
		name: "UTF-8"
	});
    assertNotUndefined(cm);
    var input = [
        0xe4, 0xb8,	0x80,
		0xe4, 0xb8, 0x81,
		0xe4, 0xb8, 0x82,
		0xe5, 0x9c, 0x81,
		0xe5, 0x9c, 0x82,
		0xe5, 0x9c, 0x83
	];
    
    assertEquals("一丁丂圁圂圃", cm.mapToUnicode(input));
}

function testCharmapUTF8MapToUnicodeNumberArrayExtended4() {
	var cm = CharmapFactory({
		name: "UTF-8"
	});
    assertNotUndefined(cm);
    var input = [
        0xf0, 0xa0, 0x94, 0x89,
		0xf0, 0xa0, 0x98, 0xa8,
		0xf0, 0xa0, 0x9d, 0x8f,
		0xf0, 0xa0, 0xa0, 0xba
	];
    
    assertEquals("𠔉𠘨𠝏𠠺", cm.mapToUnicode(input));
}

function testCharmapUTF8MapToNative() {
	var cm = CharmapFactory({
		name: "utf-8"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("This is a test");
    var expected = [0x54, 0x68, 0x69, 0x73, 0x20, 
                    0x69, 0x73, 0x20, 0x61, 0x20, 
                    0x74, 0x65, 0x73, 0x74];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmapUTF8MapToNativeExtended2() {
	var cm = CharmapFactory({
		name: "utf-8"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("ÀÁâãИЯД");
    var expected = [
        0xC3, 0x80,
        0xC3, 0x81,
        0xC3, 0xA2,
        0xC3, 0xA3,
        0xD0, 0x98,
        0xD0, 0xAF,
        0xD0, 0x94
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmapUTF8MapToNativeExtended3() {
	var cm = CharmapFactory({
		name: "utf-8"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("一丁丂圁圂圃");
    var expected = [
        0xe4, 0xb8,	0x80,
		0xe4, 0xb8, 0x81,
		0xe4, 0xb8, 0x82,
		0xe5, 0x9c, 0x81,
		0xe5, 0x9c, 0x82,
		0xe5, 0x9c, 0x83
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmapUTF8MapToNativeExtended4() {
	var cm = CharmapFactory({
		name: "utf-8"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("𠔉𠘨𠝏𠠺");
    var expected = [
        0xf0, 0xa0, 0x94, 0x89,
		0xf0, 0xa0, 0x98, 0xa8,
		0xf0, 0xa0, 0x9d, 0x8f,
		0xf0, 0xa0, 0xa0, 0xba
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}
