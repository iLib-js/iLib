/*
 * testcm_UTF-16.js - Test the charset mapping routines for UTF-16
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

module.exports.testcm_UTF_16 = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testCharmapUTF16LoadMap: function(test) {
        var cm = CharmapFactory({
            name: "UTF-16"
        });
        test.expect(2);
        test.ok(typeof(cm) !== "undefined");
        test.equal(cm.getName(), "UTF-16LE");
        test.done();
    },
    
    
    testCharmapUTF16MapToUnicode: function(test) {
        var cm = CharmapFactory({
            name: "UTF-16"
        });
        test.ok(typeof(cm) !== "undefined");
        var input = new Uint8Array(28);
        var str = "This is a test";
        for (var i = 0; i < str.length; i++) {
            input[i*2] = str.charCodeAt(i); 
        }
        
        test.equal(cm.mapToUnicode(input), "This is a test");
        test.done();
    },
    
    
    testCharmapUTF16MapToUnicodeExtended2: function(test) {
        var cm = CharmapFactory({
            name: "UTF-16"
        });
        test.expect(2);
        test.ok(typeof(cm) !== "undefined");
        var input = new Uint8Array([
            0xC0, 0x00,
            0xC1, 0x00,
            0xE2, 0x00,
            0xE3, 0x00,
            0x18, 0x04,
            0x2F, 0x04,
            0x14, 0x04
        ]);
        
        test.equal(cm.mapToUnicode(input), "ÀÁâãИЯД");
        test.done();
    },
    
    testCharmapUTF16MapToUnicodeExtended3: function(test) {
        var cm = CharmapFactory({
            name: "UTF-16"
        });
        test.expect(2);
        test.ok(typeof(cm) !== "undefined");
        var input = new Uint8Array([
            0x00, 0x4E,
            0x01, 0x4E,
            0x01, 0x57,
            0x02, 0x57
        ]);
        
        test.equal(cm.mapToUnicode(input), "一丁圁圂");
        test.done();
    },
    
    testCharmapUTF16MapToUnicodeExtended4: function(test) {
        var cm = CharmapFactory({
            name: "UTF-16"
        });
        test.expect(2);
        test.ok(typeof(cm) !== "undefined");
        var input = new Uint8Array([
            0x41, 0xD8, 0x09, 0xDD,
            0x41, 0xD8, 0x28, 0xDE,
            0x41, 0xD8, 0x4F, 0xDF,
            0x42, 0xD8, 0x3A, 0xDC
        ]);
        
        test.equal(cm.mapToUnicode(input), "𠔉𠘨𠝏𠠺");
        test.done();
    },
    
    
    testCharmapUTF16MapToNative: function(test) {
        var cm = CharmapFactory({
            name: "UTF-16"
        });
        test.ok(typeof(cm) !== "undefined");
        
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
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmapUTF16MapToNativeExtended2: function(test) {
        var cm = CharmapFactory({
            name: "UTF-16"
        });
        test.ok(typeof(cm) !== "undefined");
        
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
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmapUTF16MapToNativeExtended3: function(test) {
        var cm = CharmapFactory({
            name: "UTF-16"
        });
        test.ok(typeof(cm) !== "undefined");
        
        var array = cm.mapToNative("一丁圁圂");
        var expected = [
            0x00, 0x4E,
            0x01, 0x4E,
            0x01, 0x57,
            0x02, 0x57
        ];
       
        for (var i = 0; i < expected.length; i++) {
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmapUTF16MapToNativeExtended4: function(test) {
        var cm = CharmapFactory({
            name: "UTF-16"
        });
        test.ok(typeof(cm) !== "undefined");
        
        var array = cm.mapToNative("𠔉𠘨𠝏𠠺");
        var expected = [
            0x41, 0xD8, 0x09, 0xDD,
            0x41, 0xD8, 0x28, 0xDE,
            0x41, 0xD8, 0x4F, 0xDF,
            0x42, 0xD8, 0x3A, 0xDC
        ];
       
        for (var i = 0; i < expected.length; i++) {
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmapUTF16BEMapToUnicode: function(test) {
        var cm = CharmapFactory({
            name: "UTF-16BE"
        });
        test.ok(typeof(cm) !== "undefined");
        var input = new Uint8Array(28);
        var str = "This is a test";
        for (var i = 0; i < str.length; i++) {
            input[i*2+1] = str.charCodeAt(i); 
        }
        
        test.equal(cm.mapToUnicode(input), "This is a test");
        test.done();
    },
    
    testCharmapUTF16BEMapToUnicodeExtended2: function(test) {
        var cm = CharmapFactory({
            name: "UTF-16BE"
        });
        test.expect(2);
        test.ok(typeof(cm) !== "undefined");
        var input = new Uint8Array([
            0x00, 0xC0,
            0x00, 0xC1,
            0x00, 0xE2,
            0x00, 0xE3,
            0x04, 0x18,
            0x04, 0x2F,
            0x04, 0x14
        ]);
        
        test.equal(cm.mapToUnicode(input), "ÀÁâãИЯД");
        test.done();
    },
    
    testCharmapUTF16BEMapToUnicodeExtended3: function(test) {
        var cm = CharmapFactory({
            name: "UTF-16BE"
        });
        test.expect(2);
        test.ok(typeof(cm) !== "undefined");
        var input = new Uint8Array([
            0x4E, 0x00,
            0x4E, 0x01,
            0x57, 0x01,
            0x57, 0x02
        ]);
        
        test.equal(cm.mapToUnicode(input), "一丁圁圂");
        test.done();
    },
    
    testCharmapUTF16BEMapToUnicodeExtended4: function(test) {
        var cm = CharmapFactory({
            name: "UTF-16BE"
        });
        test.expect(2);
        test.ok(typeof(cm) !== "undefined");
        var input = new Uint8Array([
            0xd8, 0x41, 0xdd, 0x09,
            0xd8, 0x41, 0xde, 0x28,
            0xd8, 0x41, 0xdf, 0x4f,
            0xd8, 0x42, 0xdc, 0x3a
        ]);
        
        test.equal(cm.mapToUnicode(input), "𠔉𠘨𠝏𠠺");
        test.done();
    },
    
    
    testCharmapUTF16BEMapToNative: function(test) {
        var cm = CharmapFactory({
            name: "UTF-16BE"
        });
        test.ok(typeof(cm) !== "undefined");
        
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
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmapUTF16BEMapToNativeExtended2: function(test) {
        var cm = CharmapFactory({
            name: "UTF-16BE"
        });
        test.ok(typeof(cm) !== "undefined");
        
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
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmapUTF16BEMapToNativeExtended3: function(test) {
        var cm = CharmapFactory({
            name: "UTF-16BE"
        });
        test.ok(typeof(cm) !== "undefined");
        
        var array = cm.mapToNative("一丁圁圂");
        var expected = [
            0x4E, 0x00,
            0x4E, 0x01,
            0x57, 0x01,
            0x57, 0x02
        ];
       
        for (var i = 0; i < expected.length; i++) {
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmapUTF16BEMapToNativeExtended4: function(test) {
        var cm = CharmapFactory({
            name: "UTF-16BE"
        });
        test.ok(typeof(cm) !== "undefined");
        
        var array = cm.mapToNative("𠔉𠘨𠝏𠠺");
        var expected = [
            0xD8, 0x41, 0xDD, 0x09,
            0xD8, 0x41, 0xDE, 0x28,
            0xD8, 0x41, 0xDF, 0x4F,
            0xD8, 0x42, 0xDC, 0x3A
        ];
       
        for (var i = 0; i < expected.length; i++) {
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    }
    
};