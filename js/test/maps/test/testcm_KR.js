/*
 * testcm_KR.js - Test the charset mapping routines for the various Korean 
 * character sets
 * 
 * Copyright © 2014-2015-2015, JEDLSoft
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

var aliasesKR = {
    "EUC-KR": [
        "CSEUCKR",
        "EUCKR",
        "EXTENDEDUNIXCODEKR"
    ],
 // ISO-2022 to be implemented later
    "ISO-2022-KR": [
        "CSISO2022KR",
        "ISO2022KR"
    ],
    "KSC5636": [
        "ISO646KR",
        "CSKSC5636",
        "ISO646KR",
        "KSC5636",
        "KSX1003"
    ],
    "KS_C_5601-1987": [
        "ISOIR149",
        "KOREAN",
        "CSKSC56011987",
        "KSC56011987",
        "OLD5601",
    ],
    "KS_C_5601-1992": [
        "KSC56011989",
        "KSC5601",
        "KSX1001"
    ],
    "Johab": [
        "CP1361",
        "JOHAB"
    ],
    "IBM949": [
        "CP949"
    ]
};

function testCharmapKRTestAliases() {
	for (var charset in aliasesKR) {
		for (var i = 0; i < aliasesKR[charset].length; i++) {
			var cs = new Charset({
				name: aliasesKR[charset][i]
			});
		    assertNotUndefined(cs);
		    assertEquals(charset, cs.getName());
		}
	}
}

var testDataKR = {
	"EUC-KR": {
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
	    "성항동": [
            0xbc, 0xba, // 성
            0xc7, 0xd7, // 항
            0xb5, 0xbf  // 동
	    ],
	    "ひらがなです": [
            0xaa, 0xd2, // ひ
            0xaa, 0xe9, // ら
            0xaa, 0xac, // が
            0xaa, 0xca, // な
            0xaa, 0xc7, // で
            0xaa, 0xb9  // す
	    ],
	    "カタカナです": [
			0xab, 0xab, // カ
			0xab, 0xbf, // タ
			0xab, 0xab, // カ
			0xab, 0xca, // ナ
			0xaa, 0xc7, // で
			0xaa, 0xb9  // す   
	    ],
	    "Ελλασ": [
			0xa5, 0xc5, // Ε
			0xa5, 0xeb, // λ
			0xa5, 0xeb, // λ
			0xa5, 0xe1, // α
			0xa5, 0xf2  // σ
	    ],
	    "Русский": [
			0xac, 0xb2, // Р
			0xac, 0xe5, // у
			0xac, 0xe3, // с
			0xac, 0xe3, // с
			0xac, 0xdc, // к
			0xac, 0xda, // и
			0xac, 0xdb  // й
	    ],
	    "下不亞价修儺": [
    	    0xf9, 0xbb, // 下
    	    0xdc, 0xf4, // 不
    	    0xe4, 0xac, // 亞
    	    0xcb, 0xc0, // 价
    	    0xe1, 0xf3, // 修
    	    0xd1, 0xd3  // 儺
	    ]
	},
    "Johab": {
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
        "성항동": [
			0xac,
			0xf7,
			0xd0,
			0x77,
			0x95,
			0xb7
        ],
        "ひらがなです": [
			0xdd,
			0xd2,
			0xdd,
			0xe9,
			0xdd,
			0xac,
			0xdd,
			0xca,
			0xdd,
			0xc7,
			0xdd,
			0xb9
        ],
        "カタカナです": [
			0xde,
			0x3b,
			0xde,
			0x4f,
			0xde,
			0x3b,
			0xde,
			0x5a,
			0xdd,
			0xc7,
			0xdd,
			0xb9
        ],
        "Ελλασ": [
			0xdb,
			0x55,
			0xdb,
			0x7b,
			0xdb,
			0x7b,
			0xdb,
			0x71,
			0xdb,
			0x94
        ],
        "Русский": [
			0xde,
			0xb2,
			0xde,
			0xe5,
			0xde,
			0xe3,
			0xde,
			0xe3,
			0xde,
			0xdc,
			0xde,
			0xda,
			0xde,
			0xdb
        ],
        "下不亞价修儺": [
			0xf7,
			0xbb,
			0xe9,
			0x96,
			0xed,
			0x3c,
			0xe0,
			0xc0,
			0xeb,
			0xf3,
			0xe3,
			0xd3
        ]
	},
    "IBM949": {
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
        "성항동": [
			0xbc,
			0xba,
			0xc7,
			0xd7,
			0xb5,
			0xbf
        ],
        "ひらがなです": [
			0xaa,
			0xd2,
			0xaa,
			0xe9,
			0xaa,
			0xac,
			0xaa,
			0xca,
			0xaa,
			0xc7,
			0xaa,
			0xb9
        ],
        "カタカナです": [
			0xab,
			0xab,
			0xab,
			0xbf,
			0xab,
			0xab,
			0xab,
			0xca,
			0xaa,
			0xc7,
			0xaa,
			0xb9
        ],
        "Ελλασ": [
			0xa5,
			0xc5,
			0xa5,
			0xeb,
			0xa5,
			0xeb,
			0xa5,
			0xe1,
			0xa5,
			0xf2
        ],
        "Русский": [
			0xac,
			0xb2,
			0xac,
			0xe5,
			0xac,
			0xe3,
			0xac,
			0xe3,
			0xac,
			0xdc,
			0xac,
			0xda,
			0xac,
			0xdb
        ],
        "下不亞价修儺": [
			0xf9,
			0xbb,
			0xdc,
			0xf4,
			0xe4,
			0xac,
			0xcb,
			0xc0,
			0xe1,
			0xf3,
			0xd1,
			0xd3
        ]
    }
};

function testCharmapKRMapToUnicode() {
	for (var charset in testDataKR) {
		var cm = CharmapFactory({
			name: charset
		});
	    assertNotUndefined(cm);
	    var data = testDataKR[charset];
	    for (var element in data) {
	    	// console.log("testing " + charset + " element " + element);
		    assertEquals("testing " + charset + " element " + element + "\n", element, cm.mapToUnicode(data[element]));
	    }
	}
}

function testCharmapKRMapToNative() {
	for (var charset in testDataKR) {
		var cm = CharmapFactory({
			name: charset
		});
	    assertNotUndefined(cm);
	    var data = testDataKR[charset];
	    for (var element in data) {
	    	var array = cm.mapToNative(element);
	    	// console.log("cm.mapToNative returned " + JSON.stringify(cm.mapToUnicode(array)));
		    
	        for (var i = 0; i < data[element].length; i++) {
	        	// console.log("testing " + charset + " element " + element + " array index " + i);
			    assertEquals("testing " + charset + " element " + element + " array index " + i + "\n", data[element][i], array[i]);
	        }
	    }
	}
}

