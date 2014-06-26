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
	return result.toUpperCase();
}

function testNFD() {
    normtests.forEach(function (val, index, array) {
    	var source = new ilib.NormString(val[0]);
    	//console.log(index + ": Testing NFD normalization for " + source + " (" + toHexString(source) + ")");
    	
    	var nfd = source.normalize("nfd");
    	assertEquals("Test NFD for " + source + " (" + toHexString(source) + ")", toHexString(new ilib.NormString(val[2])), toHexString(nfd));
    });
}

function testNFKD() {
    normtests.forEach(function (val, index, array) {
    	var source = new ilib.NormString(val[0]);
    	//console.log(index + ": Testing NFKD normalization for " + source + " (" + toHexString(source) + ")");
    	
    	assertEquals("Test NFKD for " + source + " (" + toHexString(source) + ")", toHexString(new ilib.NormString(val[4])), toHexString(source.normalize("nfkd")));
    });
}

function testNFC() {
    normtests.forEach(function (val, index, array) {
    	var source = new ilib.NormString(val[0]);
    	// console.log(index + ": Testing NFC normalization for " + source + " (" + toHexString(source) + ")");
    	
    	assertEquals("Test NFC for " + source + " ("+ toHexString(source) + ")", toHexString(val[1]), toHexString(source.normalize("nfc")));
    });
}

function testNFKC() {
    normtests.forEach(function (val, index, array) {
    	var source = new ilib.NormString(val[0]);
    	// console.log(index + ": Testing NFKC normalization for " + source + " (" + toHexString(source) + ")");
    	
    	assertEquals("Test NFKC for " + source + " ("+ toHexString(source) + ")", toHexString(val[3]), toHexString(source.normalize("nfkc")));
    });
}

function testCharIteratorNormal() {
	var s = new ilib.NormString("aba");
	var it = s.charIterator();
	
	assertTrue(it.hasNext());
	assertEquals("a", it.next());
	assertTrue(it.hasNext());
	assertEquals("b", it.next());
	assertTrue(it.hasNext());
	assertEquals("a", it.next());
	assertFalse(it.hasNext());
	assertEquals(undefined, it.next());
}

function testCharIteratorDecomposed() {
	var s = new ilib.NormString("aÄa"); // the A umlaut is a decomposed char
	var it = s.charIterator();
	
	assertTrue(it.hasNext());
	assertEquals("a", it.next());
	assertTrue(it.hasNext());
	assertEquals("Ä", it.next());
	assertTrue(it.hasNext());
	assertEquals("a", it.next());
	assertFalse(it.hasNext());
	assertEquals(undefined, it.next());
}

function testCharIteratorEmpty() {
	var s = new ilib.NormString(""); // the A umlaut is a decomposed char
	var it = s.charIterator();
	
	assertFalse(it.hasNext());
	assertEquals(undefined, it.next());
}

function testCharIteratorWithSurrogates() {
    var str = new ilib.NormString("a\uD800\uDF02b\uD800\uDC00");

    var it = str.charIterator();
    assertTrue(it.hasNext());
    assertEquals("a", it.next());
    assertTrue(it.hasNext());
    assertEquals("\uD800\uDF02", it.next());
    assertTrue(it.hasNext());
    assertEquals("b", it.next());
    assertTrue(it.hasNext());
    assertEquals("\uD800\uDC00", it.next());
    assertFalse(it.hasNext());
    assertEquals(undefined, it.next());
}

function testCharIteratorWithSurrogatesAndDecomposedChars() {
    var str = new ilib.NormString("a\uD800\uDF02bï\uD800\uDC00"); // the ï is a decomposed i + umlaut

    var it = str.charIterator();
    assertTrue(it.hasNext());
    assertEquals("a", it.next());
    assertTrue(it.hasNext());
    assertEquals("\uD800\uDF02", it.next());
    assertTrue(it.hasNext());
    assertEquals("b", it.next());
    assertTrue(it.hasNext());
    assertEquals("ï", it.next());
    assertTrue(it.hasNext());
    assertEquals("\uD800\uDC00", it.next());
    assertFalse(it.hasNext());
    assertEquals(undefined, it.next());
}

function testCharIteratorMultipleDecomposed() {
	var s = new ilib.NormString("aẬa"); // the accented A is a decomposed char with 2 accents
	var it = s.charIterator();
	
	assertTrue(it.hasNext());
	assertEquals("a", it.next());
	assertTrue(it.hasNext());
	assertEquals("Ậ", it.next());
	assertTrue(it.hasNext());
	assertEquals("a", it.next());
	assertFalse(it.hasNext());
	assertEquals(undefined, it.next());
}

function testCharIteratorAgrave() {
	var s = new ilib.NormString("À"); // the accented A is a decomposed char
	var it = s.charIterator();
	
	assertTrue(it.hasNext());
	assertEquals("À", it.next());
	assertFalse(it.hasNext());
	assertEquals(undefined, it.next());
}
