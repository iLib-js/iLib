/*
 * testcm_ISO-8859-1.js - Test the charset mapping routines for ISO-8859-1
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

function testCharmap88591LoadMap() {
	var cm = CharmapFactory({
		name: "ISO-8859-1"
	});
    assertNotUndefined(cm);
    assertEquals("ISO-8859-1", cm.getName());
}

function testCharmap88591UseAliases1() {
	var cm = CharmapFactory({
		name: "8859-1"
	});
    assertNotUndefined(cm);
    assertEquals("ISO-8859-1", cm.getName());
}

function testCharmap88591UseAliases2() {
	var cm = CharmapFactory({
		name: "iso_8859_1"
	});
    assertNotUndefined(cm);
    assertEquals("ISO-8859-1", cm.getName());
}

function testCharmap88591MapToUnicodeUint8Array() {
	var cm = CharmapFactory({
		name: "ISO-8859-1"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array(14);
    var str = "This is a test";
    for (var i = 0; i < str.length; i++) {
    	input[i] = str.charCodeAt(i); 
    }
    
    assertEquals("This is a test", cm.mapToUnicode(input));
}

function testCharmap88591MapToUnicodeUint8ArrayExtended() {
	var cm = CharmapFactory({
		name: "ISO-8859-1"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array(14);
    var str = "\u00C0\u00C1\u00E2\u00E3";
    for (var i = 0; i < str.length; i++) {
    	input[i] = str.charCodeAt(i); 
    }
    
    assertEquals("ÀÁâã", cm.mapToUnicode(input));
}

function testCharmap88591MapToUnicodeNumberArray() {
	var cm = CharmapFactory({
		name: "ISO-8859-1"
	});
    assertNotUndefined(cm);
    var input = [];
    var str = "This is a test";
    for (var i = 0; i < str.length; i++) {
    	input.push(str.charCodeAt(i)); 
    }
    
    assertEquals("This is a test", cm.mapToUnicode(input));
}

function testCharmap88591MapToUnicodeNumberArrayExtended() {
	var cm = CharmapFactory({
		name: "ISO-8859-1"
	});
    assertNotUndefined(cm);
    var input = [];
    var str = "\u00C0\u00C1\u00E2\u00E3";
    for (var i = 0; i < str.length; i++) {
    	input.push(str.charCodeAt(i)); 
    }
    
    assertEquals("ÀÁâã", cm.mapToUnicode(input));
}

function testCharmap88591MapToNative() {
	var cm = CharmapFactory({
		name: "ISO-8859-1"
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

function testCharmap88591MapToNativeExtended() {
	var cm = CharmapFactory({
		name: "ISO-8859-1"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("ÀÁâã");
    var expected = [0xC0, 0xC1, 0xE2, 0xE3];
    
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmap88591MapToNativeMissingSkip() {
	var cm = CharmapFactory({
		name: "ISO-8859-1",
		missing: "skip"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("ÀČÁ𠠺âĂã");
    var expected = [0xC0, 0xC1, 0xE2, 0xE3];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmap88591MapToNativeMissingPlaceholderDefault() {
	var cm = CharmapFactory({
		name: "ISO-8859-1",
		missing: "placeholder"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("ÀČÁ𠠺âĂã");
    var expected = [0xC0,
                    0x3F,
                    0xC1,
                    0x3F,
                    0x3F,
                    0xE2,
                    0x3F,
                    0xE3];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmap88591MapToNativeMissingPlaceholderWithChars() {
	var cm = CharmapFactory({
		name: "ISO-8859-1",
		missing: "placeholder",
		placeholder: "XXX"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("ÀČÁ𠠺âĂã");
    var expected = [0xC0,
                    0x58, 0x58, 0x58,
                    0xC1,
                    0x58, 0x58, 0x58,
                    0x58, 0x58, 0x58,
                    0xE2,
                    0x58, 0x58, 0x58,
                    0xE3];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmap88591MapToNativeMissingEscapeDefault() {
	var cm = CharmapFactory({
		name: "ISO-8859-1",
		missing: "escape"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("ÀČÁ𠠺âĂã");
    // maps to \uXXXX where the X's are hex digits for the Unicode char
    var expected = [0xC0,
                    0x5C, 0x75, 0x30, 0x31, 0x30, 0x43,
                    0xC1,
                    0x5C, 0x75, 0x44, 0x38, 0x34, 0x32,
                    0x5C, 0x75, 0x44, 0x43, 0x33, 0x41,
                    0xE2,
                    0x5C, 0x75, 0x30, 0x31, 0x30, 0x32,
                    0xE3];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmap88591MapToNativeMissingEscapeJS() {
	var cm = CharmapFactory({
		name: "ISO-8859-1",
		missing: "escape",
		escapeStyle: "js"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("ÀČÁ𠠺âĂã");
    // maps to \uXXXX where the X's are hex digits for the Unicode char
    var expected = [0xC0,
                    0x5C, 0x75, 0x30, 0x31, 0x30, 0x43,
                    0xC1,
                    0x5C, 0x75, 0x44, 0x38, 0x34, 0x32,
                    0x5C, 0x75, 0x44, 0x43, 0x33, 0x41,
                    0xE2,
                    0x5C, 0x75, 0x30, 0x31, 0x30, 0x32,
                    0xE3];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmap88591MapToNativeMissingEscapeC() {
	var cm = CharmapFactory({
		name: "ISO-8859-1",
		missing: "escape",
		escapeStyle: "c"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("ÀČÁ𠠺âĂã");
    // maps to \xXXXX where the X's are hex digits for the Unicode char
    var expected = [0xC0,
                    0x5C, 0x78, 0x30, 0x31, 0x30, 0x43,
                    0xC1,
                    0x5C, 0x78, 0x44, 0x38, 0x34, 0x32,
                    0x5C, 0x78, 0x44, 0x43, 0x33, 0x41,
                    0xE2,
                    0x5C, 0x78, 0x30, 0x31, 0x30, 0x32,
                    0xE3];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmap88591MapToNativeMissingEscapeCPP() {
	var cm = CharmapFactory({
		name: "ISO-8859-1",
		missing: "escape",
		escapeStyle: "c++"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("ÀČÁ𠠺âĂã");
    // maps to \xXXXX where the X's are hex digits for the Unicode char
    var expected = [0xC0,
                    0x5C, 0x78, 0x30, 0x31, 0x30, 0x43,
                    0xC1,
                    0x5C, 0x78, 0x44, 0x38, 0x34, 0x32,
                    0x5C, 0x78, 0x44, 0x43, 0x33, 0x41,
                    0xE2,
                    0x5C, 0x78, 0x30, 0x31, 0x30, 0x32,
                    0xE3];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmap88591MapToNativeMissingEscapeJava() {
	var cm = CharmapFactory({
		name: "ISO-8859-1",
		missing: "escape",
		escapeStyle: "java"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("ÀČÁ𠠺âĂã");
    // maps to \\uXXXX where the X's are hex digits for the Unicode char
    var expected = [0xC0,
                    0x5C, 0x5C, 0x75, 0x30, 0x31, 0x30, 0x43,
                    0xC1,
                    0x5C, 0x5C, 0x75, 0x44, 0x38, 0x34, 0x32,
                    0x5C, 0x5C, 0x75, 0x44, 0x43, 0x33, 0x41,
                    0xE2,
                    0x5C, 0x5C, 0x75, 0x30, 0x31, 0x30, 0x32,
                    0xE3];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmap88591MapToNativeMissingEscapeRuby() {
	var cm = CharmapFactory({
		name: "ISO-8859-1",
		missing: "escape",
		escapeStyle: "ruby"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("ÀČÁ𠠺âĂã");
    // maps to \\uXXXX where the X's are hex digits for the Unicode char
    var expected = [0xC0,
                    0x5C, 0x5C, 0x75, 0x30, 0x31, 0x30, 0x43,
                    0xC1,
                    0x5C, 0x5C, 0x75, 0x44, 0x38, 0x34, 0x32,
                    0x5C, 0x5C, 0x75, 0x44, 0x43, 0x33, 0x41,
                    0xE2,
                    0x5C, 0x5C, 0x75, 0x30, 0x31, 0x30, 0x32,
                    0xE3];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmap88591MapToNativeMissingEscapeHtml() {
	var cm = CharmapFactory({
		name: "ISO-8859-1",
		missing: "escape",
		escapeStyle: "html"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("ÀČÁ𠠺âĂã");
    // maps to &#xXXXX; where the X's are hex digits for the Unicode char
    var expected = [0xC0,
                    0x26, 0x23, 0x78, 0x30, 0x31, 0x30, 0x43, 0x3B,
                    0xC1,
                    0x26, 0x23, 0x78, 0x44, 0x38, 0x34, 0x32, 0x3B,
                    0x26, 0x23, 0x78, 0x44, 0x43, 0x33, 0x41, 0x3B,
                    0xE2,
                    0x26, 0x23, 0x78, 0x30, 0x31, 0x30, 0x32, 0x3B,
                    0xE3];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmap88591MapToNativeMissingEscapePerl() {
	var cm = CharmapFactory({
		name: "ISO-8859-1",
		missing: "escape",
		escapeStyle: "perl"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("ÀČÁ𠠺âĂã");
    // maps to \xXXXX where the X's are hex digits for the Unicode char
    var expected = [0xC0,
                    0x5C, 0x4E, 0x7B, 0x55, 0x2B, 0x30, 0x31, 0x30, 0x43, 0x7D,
                    0xC1,
                    0x5C, 0x4E, 0x7B, 0x55, 0x2B, 0x44, 0x38, 0x34, 0x32, 0x7D,
                    0x5C, 0x4E, 0x7B, 0x55, 0x2B, 0x44, 0x43, 0x33, 0x41, 0x7D,
                    0xE2,
                    0x5C, 0x4E, 0x7B, 0x55, 0x2B, 0x30, 0x31, 0x30, 0x32, 0x7D,
                    0xE3];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}
