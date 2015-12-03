/*
 * testcm_CN.js - Test the charset mapping routines for the various Chinese 
 * character sets
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

var Charset = require("./../lib/Charset.js");
var CharmapFactory = require("./../lib/CharmapFactory.js");

var aliasesCN = {
    "ISO-2022-CN-EXT": [
      	"ISO2022CNEXT",
    	"ISO_2022_CN_EXT",
    	"iso-2022-CN-ext"
	],
	"ISO-2022-CN": [
      	"ISO2022CN",
    	"ISO_2022_CN",
    	"iso-2022-CN"
    ],
    "Big5": [
		"big5",
		"Big-5"
    ],
    "GB18030": [
        "GB-18030",
        "gb18030",
        "GB",
        "GB-18030:2005"
    ],
    "GB2312": [
        "GB-2312",
        "gb2312"
    ],
    "GB_2312-80": [
       "GB-2312-80",
       "gb231280"
    ],
    "GBK": [
        "gbk"
    ]
};

function testCharmapCNTestAliases() {
	for (var charset in aliasesCN) {
		for (var i = 0; i < aliasesCN[charset].length; i++) {
			var cs = new Charset({
				name: aliasesCN[charset][i]
			});
		    assertNotUndefined(cs);
		    assertEquals(charset, cs.getName());
		}
	}
}

var testDataCN = {
	"Big5": {
		// ASCII
	    "This is a test": [
			0x54, // T
		    0x68, // h
		    0x69, // i
		    0x73, // s
		    0x20, // 
		    0x69, // i
		    0x73, // s
		    0x20, // 
		    0x61, // a
		    0x20, //
		    0x74, // t
		    0x65, // e
		    0x73, // s
		    0x74  // t
	    ],
	    // bopomofo
	    "ㄌㄞㄓㄡㄕㄣ": [
    	    0xa3, 0x7b, // ㄌ
    	    0xa3, 0xaf, // ㄞ 
    	    0xa3, 0xa4, // ㄓ 
    	    0xa3, 0xb2, // ㄡ 
    	    0xa3, 0xa6, // ㄕ 
    	    0xa3, 0xb4  // ㄣ 
	    ],
	    // han
	    "仃人埋朋娛": [
            0xa4, 0xb1, // 仃
            0xa4, 0x48, // 人
            0xae, 0x49, // 埋
            0xaa, 0x42, // 朋
            0xae, 0x54  // 娛 
	    ],
	    // greek
	    "Ελλασ": [
			0xa3, 0x48, // Ε
			0xa3, 0x66, // λ
			0xa3, 0x66, // λ
			0xa3, 0x5c, // α
			0xa3, 0x6d  // σ
	    ]
	},
	"GB18030": {
		// ASCII
	    "This is a test": [
			0x54, // T
		    0x68, // h
		    0x69, // i
		    0x73, // s
		    0x20, // 
		    0x69, // i
		    0x73, // s
		    0x20, // 
		    0x61, // a
		    0x20, //
		    0x74, // t
		    0x65, // e
		    0x73, // s
		    0x74  // t
	    ],
	    // bopomofo
	    "ㄌㄞㄓㄡㄕㄣ": [
           	0xa8, 0xcc,  // ㄌ
           	0xa8, 0xde,  // ㄞ 
           	0xa8, 0xd3,  // ㄓ 
           	0xa8, 0xe1,  // ㄡ 
           	0xa8, 0xd5, // ㄕ 
           	0xa8, 0xe3  // ㄣ 
	    ],
	    // han
	    "仃人埋朋娛": [
            0xd8, 0xea, // 仃 
            0xc8, 0xcb, // 人
            0xc2, 0xf1, // 埋
            0xc5, 0xf3, // 朋 
            0x8a, 0xca  // 娛
	    ],
	    // greek
	    "Ελλασ": [
			0xa6, 0xa5, // Ε 
			0xa6, 0xcb, // λ
			0xa6, 0xcb, // λ
			0xa6, 0xc1, // α
			0xa6, 0xd2  // σ
	    ]
	},
	"GB2312": {
		// ASCII
	    "This is a test": [
			0x54, // T
		    0x68, // h
		    0x69, // i
		    0x73, // s
		    0x20, // 
		    0x69, // i
		    0x73, // s
		    0x20, // 
		    0x61, // a
		    0x20, //
		    0x74, // t
		    0x65, // e
		    0x73, // s
		    0x74  // t
	    ],
	    // bopomofo
	    "ㄌㄞㄓㄡㄕㄣ": [
    	    0xa8, 0xcc, // ㄌ
            0xa8, 0xde, // ㄞ 
            0xa8, 0xd3, // ㄓ 
            0xa8, 0xe1, // ㄡ 
            0xa8, 0xd5, // ㄕ 
            0xa8, 0xe3  // ㄣ 
	    ],
	    // han
	    "仃人埋朋": [
            0xd8, 0xea, // 仃
            0xc8, 0xcb, // 人
            0xc2, 0xf1, // 埋
            0xc5, 0xf3  // 朋
	    ]
	},
	"GBK": {
		// ASCII
	    "This is a test": [
			0x54, // T
		    0x68, // h
		    0x69, // i
		    0x73, // s
		    0x20, // 
		    0x69, // i
		    0x73, // s
		    0x20, // 
		    0x61, // a
		    0x20, //
		    0x74, // t
		    0x65, // e
		    0x73, // s
		    0x74  // t
	    ],
	    // bopomofo
	    "ㄌㄞㄓㄡㄕㄣ": [
            0xa8, 0xcc, // ㄌ
            0xa8, 0xde, // ㄞ
            0xa8, 0xd3, // ㄓ
            0xa8, 0xe1, // ㄡ
            0xa8, 0xd5, // ㄕ
            0xa8, 0xe3  // ㄣ
	    ],
	    // han
	    "仃人埋朋娛": [
            0xd8, 0xea, // 仃
            0xc8, 0xcb, // 人
            0xc2, 0xf1, // 埋
            0xc5, 0xf3, // 朋
            0x8a, 0xca  // 娛 
	    ],
	    // greek
	    "Ελλασ": [
            0xa6, 0xa5, // Ε
            0xa6, 0xcb, // λ
            0xa6, 0xcb, // λ
            0xa6, 0xc1, // α
            0xa6, 0xd2  // σ
	    ]
	}
};

function testCharmapCNMapToUnicode() {
	for (var charset in testDataCN) {
		var cm = CharmapFactory({
			name: charset
		});
	    assertNotUndefined(cm);
	    var data = testDataCN[charset];
	    for (var element in data) {
	    	// console.log("testing " + charset + " element " + element);
		    assertEquals("testing " + charset + " element " + element + "\n", element, cm.mapToUnicode(data[element]));
	    }
	}
}

function testCharmapCNMapToNative() {
	// console.log("testCharmapCNMapToNative: called");
	for (var charset in testDataCN) {
		// console.log("testCharmapCNMapToNative: testing charset " + charset);
		var cm = CharmapFactory({
			name: charset
		});
	    assertNotUndefined(cm);
	    // console.log("testCharmapCNMapToNative: charmap created successfully. Mapping is: ");
	    // console.dir(cm.map.from["ㄌ"]);
	    
	    var data = testDataCN[charset];
	    for (var element in data) {
	    	// console.log("testCharmapCNMapToNative: now testing element " + element);
	    	var array = cm.mapToNative(element);
	    	// console.log("testCharmapCNMapToNative: cm.mapToNative returned " + JSON.stringify(array));
		    
	        for (var i = 0; i < data[element].length; i++) {
	        	// console.log("testCharmapCNMapToNative: testing " + charset + " element " + element + " array index " + i);
			    assertEquals("testing " + charset + " element " + element + " array index " + i + "\n", data[element][i], array[i]);
	        }
	    }
	}
}

