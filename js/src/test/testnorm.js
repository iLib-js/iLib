/*
 * testnorm.js - test the Unicode Normalization Algorithm routines
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

function toHexString(string) {
	var i, result = ""; 
	
	if (!string) {
		return "";
	}
	for (i = 0; i < string.length; i++) {
		var ch = string.charCodeAt(i).toString(16);
		result += "0000".substring(0, 4-ch.length) + ch;
		if (i < string.length - 1) {
			result += " ";
		}
	}
	return result;
}

function testNFD() {
    normtests.forEach(function (val, index, array) {
    	var source = new ilib.String(val[0]);
    	console.log(index + ": Testing NFD normalization for " + source + "(" + toHexString(source) + ")");
    	
    	var nfd = source.normalize("nfd");
    	assertEquals("Test NFD for " + source + "(" + toHexString(source) + ")", toHexString(new ilib.String(val[2])), toHexString(nfd));
    });
}

function testNFKD() {
    normtests.forEach(function (val, index, array) {
    	var source = new ilib.String(val[0]);
    	console.log(index + ": Testing NFKD normalization for " + source + "(" + toHexString(source) + ")");
    	
    	assertEquals("Test NFKD for " + source + "(" + toHexString(source) + ")", toHexString(new ilib.String(val[4])), toHexString(source.normalize("nfkd")));
    });
}

function testNFC() {
    normtests.forEach(function (val, index, array) {
    	var source = new ilib.String(val[0]);
    	console.log(index + ": Testing NFC normalization for " + source + "(" + toHexString(source) + ")");
    	
    	assertEquals("Test NFC for " + source, val[1], source.normalize("nfc").toString());
    });
}

function testNFKC() {
    normtests.forEach(function (val, index, array) {
    	var source = new ilib.String(val[0]);
    	console.log(index + ": Testing NFKC normalization for " + source + "(" + toHexString(source) + ")");
    	
    	assertEquals("Test NFKC for " + source, val[3], source.normalize("nfkc").toString());
    });
}
