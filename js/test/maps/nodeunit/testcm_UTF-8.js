/*
 * testcm_UTF-8.js - Test the charset mapping routines for UTF-8
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

module.exports.testcm_UTF_8 = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testCharmapUTF8LoadMap: function(test) {
        test.expect(2);
        var cm = CharmapFactory({
            name: "UTF-8"
        });
        test.ok(typeof(cm) !== "undefined");
        test.equal(cm.getName(), "UTF-8");
        test.done();
    },
    
    testCharmapUTF8MapToUnicodeUint8Array: function(test) {
        var cm = CharmapFactory({
            name: "UTF-8"
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
    
    testCharmapUTF8MapToUnicodeUint8ArrayExtended2: function(test) {
        test.expect(2);
        var cm = CharmapFactory({
            name: "UTF-8"
        });
        test.ok(typeof(cm) !== "undefined");
        var input = new Uint8Array([
            0xC3, 0x80,
            0xC3, 0x81,
            0xC3, 0xA2,
            0xC3, 0xA3,
            0xD0, 0x98,
            0xD0, 0xAF,
            0xD0, 0x94
        ]);
        
        test.equal(cm.mapToUnicode(input), "ÀÁâãИЯД");
        test.done();
    },
    
    testCharmapUTF8MapToUnicodeUint8ArrayExtended3: function(test) {
        test.expect(2);
        var cm = CharmapFactory({
            name: "UTF-8"
        });
        test.ok(typeof(cm) !== "undefined");
        var input = new Uint8Array([
            0xe4, 0xb8,    0x80,
            0xe4, 0xb8, 0x81,
            0xe4, 0xb8, 0x82,
            0xe5, 0x9c, 0x81,
            0xe5, 0x9c, 0x82,
            0xe5, 0x9c, 0x83
        ]);
        
        test.equal(cm.mapToUnicode(input), "一丁丂圁圂圃");
        test.done();
    },
    
    testCharmapUTF8MapToUnicodeUint8ArrayExtended4: function(test) {
        test.expect(2);
        var cm = CharmapFactory({
            name: "UTF-8"
        });
        test.ok(typeof(cm) !== "undefined");
        var input = new Uint8Array([
            0xf0, 0xa0, 0x94, 0x89,
            0xf0, 0xa0, 0x98, 0xa8,
            0xf0, 0xa0, 0x9d, 0x8f,
            0xf0, 0xa0, 0xa0, 0xba
        ]);
        
        test.equal(cm.mapToUnicode(input), "𠔉𠘨𠝏𠠺");
        test.done();
    },
    
    testCharmapUTF8MapToUnicodeNumberArray: function(test) {
        var cm = CharmapFactory({
            name: "UTF-8"
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
    
    testCharmapUTF8MapToUnicodeNumberArrayExtended2: function(test) {
        test.expect(2);
        var cm = CharmapFactory({
            name: "UTF-8"
        });
        test.ok(typeof(cm) !== "undefined");
        var input = [
            0xC3, 0x80,
            0xC3, 0x81,
            0xC3, 0xA2,
            0xC3, 0xA3,
            0xD0, 0x98,
            0xD0, 0xAF,
            0xD0, 0x94
        ];
        
        test.equal(cm.mapToUnicode(input), "ÀÁâãИЯД");
        test.done();
    },
    
    testCharmapUTF8MapToUnicodeNumberArrayExtended3: function(test) {
        test.expect(2);
        var cm = CharmapFactory({
            name: "UTF-8"
        });
        test.ok(typeof(cm) !== "undefined");
        var input = [
            0xe4, 0xb8,    0x80,
            0xe4, 0xb8, 0x81,
            0xe4, 0xb8, 0x82,
            0xe5, 0x9c, 0x81,
            0xe5, 0x9c, 0x82,
            0xe5, 0x9c, 0x83
        ];
        
        test.equal(cm.mapToUnicode(input), "一丁丂圁圂圃");
        test.done();
    },
    
    testCharmapUTF8MapToUnicodeNumberArrayExtended4: function(test) {
        test.expect(2);
        var cm = CharmapFactory({
            name: "UTF-8"
        });
        test.ok(typeof(cm) !== "undefined");
        var input = [
            0xf0, 0xa0, 0x94, 0x89,
            0xf0, 0xa0, 0x98, 0xa8,
            0xf0, 0xa0, 0x9d, 0x8f,
            0xf0, 0xa0, 0xa0, 0xba
        ];
        
        test.equal(cm.mapToUnicode(input), "𠔉𠘨𠝏𠠺");
        test.done();
    },
    
    testCharmapUTF8MapToNative: function(test) {
        var cm = CharmapFactory({
            name: "utf-8"
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
    
    testCharmapUTF8MapToNativeExtended2: function(test) {
        var cm = CharmapFactory({
            name: "utf-8"
        });
        test.ok(typeof(cm) !== "undefined");
        
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
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmapUTF8MapToNativeExtended3: function(test) {
        var cm = CharmapFactory({
            name: "utf-8"
        });
        test.ok(typeof(cm) !== "undefined");
        
        var array = cm.mapToNative("一丁丂圁圂圃");
        var expected = [
            0xe4, 0xb8,    0x80,
            0xe4, 0xb8, 0x81,
            0xe4, 0xb8, 0x82,
            0xe5, 0x9c, 0x81,
            0xe5, 0x9c, 0x82,
            0xe5, 0x9c, 0x83
        ];
       
        for (var i = 0; i < expected.length; i++) {
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    },
    
    testCharmapUTF8MapToNativeExtended4: function(test) {
        var cm = CharmapFactory({
            name: "utf-8"
        });
        test.ok(typeof(cm) !== "undefined");
        
        var array = cm.mapToNative("𠔉𠘨𠝏𠠺");
        var expected = [
            0xf0, 0xa0, 0x94, 0x89,
            0xf0, 0xa0, 0x98, 0xa8,
            0xf0, 0xa0, 0x9d, 0x8f,
            0xf0, 0xa0, 0xa0, 0xba
        ];
       
        for (var i = 0; i < expected.length; i++) {
            test.equal(expected[i], array[i], "testing index " + i);
        }
        test.done();
    }
    
};