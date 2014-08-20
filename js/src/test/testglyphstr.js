/*
 * testglyphstr.js - test the glyph iteration routines
 * 
 * Copyright © 2014, JEDLSoft
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

function testCharIteratorNormal() {
	var s = new ilib.GlyphString("aba");
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
	var s = new ilib.GlyphString("aÄa"); // the A umlaut is a decomposed char
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
	var s = new ilib.GlyphString("");
	var it = s.charIterator();
	
	assertFalse(it.hasNext());
	assertEquals(undefined, it.next());
}

function testCharIteratorWithSurrogates() {
    var str = new ilib.GlyphString("a\uD800\uDF02b\uD800\uDC00");

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
    var str = new ilib.GlyphString("a\uD800\uDF02bï\uD800\uDC00"); // the ï is a decomposed i + umlaut

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
	var s = new ilib.GlyphString("aẬa"); // the accented A is a decomposed char with 2 accents
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
	var s = new ilib.GlyphString("À"); // the accented A is a decomposed char
	var it = s.charIterator();
	
	assertTrue(it.hasNext());
	assertEquals("À", it.next());
	assertFalse(it.hasNext());
	assertEquals(undefined, it.next());
}

function testForEachNormal() {
	var s = new ilib.GlyphString("aba");

    var expected = ["a", "b", "a"];
    var i = 0;
    
    s.forEach(function(ch) {
    	assertEquals(expected[i++], ch);
    });
}

function testForEachDecomposed() {
	var s = new ilib.GlyphString("aÄa"); // the A umlaut is a decomposed char
    
	var expected = ["a", "Ä", "a"];
    var i = 0;
    
    s.forEach(function(ch) {
    	assertEquals(expected[i++], ch);
    });
}

function testForEachEmpty() {
	var s = new ilib.GlyphString("");

    s.forEach(function(ch) {
    	// should never call this callback
    	fail();
    });
}

function testForEachWithSurrogates() {
    var s = new ilib.GlyphString("a\uD800\uDF02b\uD800\uDC00");
    
	var expected = ["a", "\uD800\uDF02", "b", "\uD800\uDC00"];
    var i = 0;
    
    s.forEach(function(ch) {
    	assertEquals(expected[i++], ch);
    });
}

function testForEachWithSurrogatesAndDecomposedChars() {
    var s = new ilib.GlyphString("a\uD800\uDF02bï\uD800\uDC00"); // the ï is a decomposed i + umlaut
    
	var expected = ["a", "\uD800\uDF02", "b", "ï", "\uD800\uDC00"];
    var i = 0;
    
    s.forEach(function(ch) {
    	assertEquals(expected[i++], ch);
    });
}

function testForEachMultipleDecomposed() {
	var s = new ilib.GlyphString("aẬa"); // the accented A is a decomposed char with 2 accents
    
	var expected = ["a", "Ậ", "a"];
    var i = 0;
    
    s.forEach(function(ch) {
    	assertEquals(expected[i++], ch);
    });
}

function testForEachAgrave() {
	var s = new ilib.GlyphString("À"); // the accented A is a decomposed char
    
	var expected = ["À"];
    var i = 0;
    
    s.forEach(function(ch) {
    	assertEquals(expected[i++], ch);
    });
}
