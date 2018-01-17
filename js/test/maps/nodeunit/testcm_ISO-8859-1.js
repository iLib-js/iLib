/*
 * testcm_ISO-8859-1.js - Test the charset mapping routines for ISO-8859-1
 * 
 * Copyright © 2014-2015,2017, JEDLSoft
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

if (typeof(CharmapFactory) === "undefined") {
    var CharmapFactory = require("../.././../lib/CharmapFactory.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testcm_ISO_8859_1 = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testCharmap88591LoadMap: function(test) {
        test.expect(2);
        var cm = CharmapFactory({
            name: "ISO-8859-1"
        });
        test.ok(typeof(cm) !== "undefined");
        test.equal(cm.getName(), "ISO-8859-1");
        test.done();
    },
    
    testCharmap88591UseAliases1: function(test) {
        test.expect(2);
        var cm = CharmapFactory({
            name: "8859-1"
        });
        test.ok(typeof(cm) !== "undefined");
        test.equal(cm.getName(), "ISO-8859-1");
        test.done();
    },
    
    testCharmap88591UseAliases2: function(test) {
        test.expect(2);
        var cm = CharmapFactory({
            name: "iso_8859_1"
        });
        test.ok(typeof(cm) !== "undefined");
        test.equal(cm.getName(), "ISO-8859-1");
        test.done();
    },
    
    testCharmap88591MapToUnicodeUint8Array: function(test) {
        var cm = CharmapFactory({
            name: "ISO-8859-1"
        });
        test.ok(typeof(cm) !== "undefined");
        var input = new Uint8Array(14);
        var str = "This is a test";
        for (var i = 0; i < str.length; i++) {
            input[i] = str.charCodeAt(i); 
        }
        
        test.equal(cm.mapToUnicode(input), "This is a test");
        test.done();
    },
    
    testCharmap88591MapToUnicodeUint8ArrayExtended: function(test) {
        var cm = CharmapFactory({
            name: "ISO-8859-1"
        });
        test.ok(typeof(cm) !== "undefined");
        var input = new Uint8Array(14);
        var str = "\u00C0\u00C1\u00E2\u00E3";
        for (var i = 0; i < str.length; i++) {
            input[i] = str.charCodeAt(i); 
        }
        
        test.equal(cm.mapToUnicode(input), "ÀÁâã");
        test.done();
    },
    
    testCharmap88591MapToUnicodeNumberArray: function(test) {
        var cm = CharmapFactory({
            name: "ISO-8859-1"
        });
        test.ok(typeof(cm) !== "undefined");
        var input = [];
        var str = "This is a test";
        for (var i = 0; i < str.length; i++) {
            input.push(str.charCodeAt(i)); 
        }
        
        test.equal(cm.mapToUnicode(input), "This is a test");
        test.done();
    },
    
    testCharmap88591MapToUnicodeNumberArrayExtended: function(test) {
        var cm = CharmapFactory({
            name: "ISO-8859-1"
        });
        test.ok(typeof(cm) !== "undefined");
        var input = [];
        var str = "\u00C0\u00C1\u00E2\u00E3";
        for (var i = 0; i < str.length; i++) {
            input.push(str.charCodeAt(i)); 
        }
        
        test.equal(cm.mapToUnicode(input), "ÀÁâã");
        test.done();
    },
    
    testCharmap88591MapToNative: function(test) {
        var cm = CharmapFactory({
            name: "ISO-8859-1"
        });
        test.ok(typeof(cm) !== "undefined");
        
        var array = cm.mapToNative("This is a test");
        var expected = [0x54, 0x68, 0x69, 0x73, 0x20, 
                        0x69, 0x73, 0x20, 0x61, 0x20, 
                        0x74, 0x65, 0x73, 0x74];
       
        for (var i = 0; i < expected.length; i++) {
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmap88591MapToNativeExtended: function(test) {
        var cm = CharmapFactory({
            name: "ISO-8859-1"
        });
        test.ok(typeof(cm) !== "undefined");
        
        var array = cm.mapToNative("ÀÁâã");
        var expected = [0xC0, 0xC1, 0xE2, 0xE3];
        
        for (var i = 0; i < expected.length; i++) {
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmap88591MapToNativeMissingSkip: function(test) {
        var cm = CharmapFactory({
            name: "ISO-8859-1",
            missing: "skip"
        });
        test.ok(typeof(cm) !== "undefined");
        
        var array = cm.mapToNative("ÀČÁ𠠺âĂã");
        var expected = [0xC0, 0xC1, 0xE2, 0xE3];
       
        for (var i = 0; i < expected.length; i++) {
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmap88591MapToNativeMissingPlaceholderDefault: function(test) {
        var cm = CharmapFactory({
            name: "ISO-8859-1",
            missing: "placeholder"
        });
        test.ok(typeof(cm) !== "undefined");
        
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
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmap88591MapToNativeMissingPlaceholderWithChars: function(test) {
        var cm = CharmapFactory({
            name: "ISO-8859-1",
            missing: "placeholder",
            placeholder: "XXX"
        });
        test.ok(typeof(cm) !== "undefined");
        
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
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmap88591MapToNativeMissingEscapeDefault: function(test) {
        var cm = CharmapFactory({
            name: "ISO-8859-1",
            missing: "escape"
        });
        test.ok(typeof(cm) !== "undefined");
        
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
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmap88591MapToNativeMissingEscapeJS: function(test) {
        var cm = CharmapFactory({
            name: "ISO-8859-1",
            missing: "escape",
            escapeStyle: "js"
        });
        test.ok(typeof(cm) !== "undefined");
        
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
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmap88591MapToNativeMissingEscapeC: function(test) {
        var cm = CharmapFactory({
            name: "ISO-8859-1",
            missing: "escape",
            escapeStyle: "c"
        });
        test.ok(typeof(cm) !== "undefined");
        
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
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmap88591MapToNativeMissingEscapeCPP: function(test) {
        var cm = CharmapFactory({
            name: "ISO-8859-1",
            missing: "escape",
            escapeStyle: "c++"
        });
        test.ok(typeof(cm) !== "undefined");
        
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
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmap88591MapToNativeMissingEscapeJava: function(test) {
        var cm = CharmapFactory({
            name: "ISO-8859-1",
            missing: "escape",
            escapeStyle: "java"
        });
        test.ok(typeof(cm) !== "undefined");
        
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
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmap88591MapToNativeMissingEscapeRuby: function(test) {
        var cm = CharmapFactory({
            name: "ISO-8859-1",
            missing: "escape",
            escapeStyle: "ruby"
        });
        test.ok(typeof(cm) !== "undefined");
        
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
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmap88591MapToNativeMissingEscapeHtml: function(test) {
        var cm = CharmapFactory({
            name: "ISO-8859-1",
            missing: "escape",
            escapeStyle: "html"
        });
        test.ok(typeof(cm) !== "undefined");
        
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
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmap88591MapToNativeMissingEscapePerl: function(test) {
        var cm = CharmapFactory({
            name: "ISO-8859-1",
            missing: "escape",
            escapeStyle: "perl"
        });
        test.ok(typeof(cm) !== "undefined");
        
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
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    }
    
};