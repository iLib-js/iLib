/*
 * testglyphstr.js - test the glyph iteration routines
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

var GlyphString = require("./../lib/GlyphString.js");

function testCharIteratorNormal() {
	var s = new GlyphString("aba");
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
	var s = new GlyphString("aÄa"); // the A umlaut is a decomposed char
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
	var s = new GlyphString("");
	var it = s.charIterator();
	
	assertFalse(it.hasNext());
	assertEquals(undefined, it.next());
}

function testCharIteratorWithSurrogates() {
    var str = new GlyphString("a\uD800\uDF02b\uD800\uDC00");

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
    var str = new GlyphString("a\uD800\uDF02bï\uD800\uDC00"); // the ï is a decomposed i + umlaut

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
	var s = new GlyphString("aẬa"); // the accented A is a decomposed char with 2 accents
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
	var s = new GlyphString("À"); // the accented A is a decomposed char
	var it = s.charIterator();
	
	assertTrue(it.hasNext());
	assertEquals("À", it.next());
	assertFalse(it.hasNext());
	assertEquals(undefined, it.next());
}

function testForEachNormal() {
	var s = new GlyphString("aba");

    var expected = ["a", "b", "a"];
    var i = 0;
    
    s.forEach(function(ch) {
    	assertEquals(expected[i++], ch);
    });
}

function testForEachDecomposed() {
	var s = new GlyphString("aÄa"); // the A umlaut is a decomposed char
    
	var expected = ["a", "Ä", "a"];
    var i = 0;
    
    s.forEach(function(ch) {
    	assertEquals(expected[i++], ch);
    });
}

function testForEachEmpty() {
	var s = new GlyphString("");

    s.forEach(function(ch) {
    	// should never call this callback
    	fail();
    });
}

function testForEachWithSurrogates() {
    var s = new GlyphString("a\uD800\uDF02b\uD800\uDC00");
    
	var expected = ["a", "\uD800\uDF02", "b", "\uD800\uDC00"];
    var i = 0;
    
    s.forEach(function(ch) {
    	assertEquals(expected[i++], ch);
    });
}

function testForEachWithSurrogatesAndDecomposedChars() {
    var s = new GlyphString("a\uD800\uDF02bï\uD800\uDC00"); // the ï is a decomposed i + umlaut
    
	var expected = ["a", "\uD800\uDF02", "b", "ï", "\uD800\uDC00"];
    var i = 0;
    
    s.forEach(function(ch) {
    	assertEquals(expected[i++], ch);
    });
}

function testForEachMultipleDecomposed() {
	var s = new GlyphString("aẬa"); // the accented A is a decomposed char with 2 accents
    
	var expected = ["a", "Ậ", "a"];
    var i = 0;
    
    s.forEach(function(ch) {
    	assertEquals(expected[i++], ch);
    });
}

function testForEachAgrave() {
	var s = new GlyphString("À"); // the accented A is a decomposed char
    
	var expected = ["À"];
    var i = 0;
    
    s.forEach(function(ch) {
    	assertEquals(expected[i++], ch);
    });
}

function testGlyphStrTruncateSimple() {
	var s = new GlyphString("abcdefghijklmnop");
    
    assertEquals("abcdef", s.truncate(6));
}

function testGlyphStrTruncateWithCombiningAccentsmidGlyphs() {
	var s = new GlyphString("aẬbẬcẬdẬe"); // the accented A is a decomposed char with 2 accents
    
    assertEquals("aẬ", s.truncate(2));
}

function testGlyphStrTruncateWithCombiningAccentsWholeGlyphs() {
	var s = new GlyphString("aẬbẬcẬdẬe"); // the accented A is a decomposed char with 2 accents
    
    assertEquals("aẬbẬ", s.truncate(4));
}

function testGlyphStrTruncateThai() {
	var s = new GlyphString("สวัุสดีคุณเป็นอย่างไรบ้าง");
    
	// this tests non-spacing marks that are also non-combining
	
    assertEquals("สวัุสดี", s.truncate(4));
}

function testGlyphStrTruncateDevanagari1() {
	var s = new GlyphString("हैलो, आप कैसे हैं?");
    
	// if the 2nd base character has combining spacing accents on it,
	// then it will not fit in the two spaces available, so the base
	// and all its combining spacing accents have to be removed.
    assertEquals("है", s.truncate(2));
}

function testGlyphStrTruncateDevanagari2() {
	var s = new GlyphString("हैलो, आप कैसे हैं?");
    
    assertEquals("हैलो,", s.truncate(3));
}

function testGlyphStrTruncateTamil() {
	var s = new GlyphString("சொலிறுவெ");
    
    assertEquals("சொலி", s.truncate(3));
}

function testGlyphStrTruncateJapanese() {
	var s = new GlyphString("ェドイン");
    
    assertEquals("ェド", s.truncate(2));
}

function testGlyphStrTruncateKannadaNonSpacing() {
	var s = new GlyphString("ಭೆನಿಬೇನಿೇ");
    
    assertEquals("ಭೆನಿ", s.truncate(2));
}

function testGlyphStrTruncateKannadaSkipSpacing3() {
	var s = new GlyphString("ಭೆನಿಬೇನಿೇ");
    
    assertEquals("ಭೆನಿ", s.truncate(3));
}

function testGlyphStrTruncateKannadaSkipSpacing4() {
	var s = new GlyphString("ಭೆನಿಬೇನಿೇ");
    
    assertEquals("ಭೆನಿಬೇ", s.truncate(4));
}

function testGlyphStrTruncateMalayalamNonSpacing() {
	var s = new GlyphString("ടൢഡൣഖൊഭൈ");
    
    assertEquals("ടൢഡൣ", s.truncate(2));
}

function testGlyphStrTruncateMalayalamSkipSpacing3() {
	var s = new GlyphString("ടൢഡൣഖൊഭൈ");
    
    assertEquals("ടൢഡൣ", s.truncate(3));
}

function testGlyphStrTruncateMalayalamSkipSpacing4() {
	var s = new GlyphString("ടൢഡൣഖൊഭൈ");
    
    assertEquals("ടൢഡൣഖൊ", s.truncate(4));
}

function testGlyphStrTruncateSinhalaNonSpacing() {
	var s = new GlyphString("ච්ගුටෘඋෙ");
    
    assertEquals("ච්ගු", s.truncate(2));
}

function testGlyphStrTruncateSinhalaSkipSpacing3() {
	var s = new GlyphString("ච්ගුටෘඋෙ");
    
    assertEquals("ච්ගු", s.truncate(3));
}

function testGlyphStrTruncateSinhalaSkipSpacing4() {
	var s = new GlyphString("ච්ගුටෘඋෙ");
    
    assertEquals("ච්ගුටෘ", s.truncate(4));
}

function testGlyphStrTruncateTeluguNonSpacing() {
	var s = new GlyphString("ఠౕఌేకౄదూ");
    
    assertEquals("ఠౕఌే", s.truncate(2));
}

function testGlyphStrTruncateTeluguSkipSpacing3() {
	var s = new GlyphString("ఠౕఌేకౄదూ");
    
    assertEquals("ఠౕఌే", s.truncate(3));
}

function testGlyphStrTruncateTeluguSkipSpacing4() {
	var s = new GlyphString("ఠౕఌేకౄదూ");
    
    assertEquals("ఠౕఌేకౄ", s.truncate(4));
}

function testGlyphStrTruncateBengaliNonSpacing() {
	var s = new GlyphString("ঢূতুমৈবো");
    
    assertEquals("ঢূতু", s.truncate(2));
}

function testGlyphStrTruncateBengaliSkipSpacing3() {
	var s = new GlyphString("ঢূতুমৈবো");
    
    assertEquals("ঢূতু", s.truncate(3));
}

function testGlyphStrTruncateBengaliSkipSpacing4() {
	var s = new GlyphString("ঢূতুমৈবো");
    
    assertEquals("ঢূতুমৈ", s.truncate(4));
}

function testGlyphStrTruncateGujaratiNonSpacing() {
	var s = new GlyphString("ઑૄખેઊોઌૉ");
    
    assertEquals("ઑૄખે", s.truncate(2));
}

function testGlyphStrTruncateGujaratiSkipSpacing3() {
	var s = new GlyphString("ઑૄખેઊોઌૉ");
    
    assertEquals("ઑૄખે", s.truncate(3));
}

function testGlyphStrTruncateGujaratiSkipSpacing4() {
	var s = new GlyphString("ઑૄખેઊોઌૉ");
    
    assertEquals("ઑૄખેઊો", s.truncate(4));
}

function testGlyphStrTruncateGurmukhiNonSpacing() {
	var s = new GlyphString("ਕੇਙੋਡਿਜੀ");
    
    assertEquals("ਕੇਙੋ", s.truncate(2));
}

function testGlyphStrTruncateGurmukhiSkipSpacing3() {
	var s = new GlyphString("ਕੇਙੋਡਿਜੀ");
    
    assertEquals("ਕੇਙੋ", s.truncate(3));
}

function testGlyphStrTruncateGurmukhiSkipSpacing4() {
	var s = new GlyphString("ਕੇਙੋਡਿਜੀ");
    
    assertEquals("ਕੇਙੋਡਿ", s.truncate(4));
}

function testGlyphStrEllipsizeSimple() {
	var s = new GlyphString("abcdefghijklmnop");
    
    assertEquals("abcde…", s.ellipsize(6));
}

function testGlyphStrEllipsizeWithCombiningAccentsmidGlyphs() {
	var s = new GlyphString("aẬbẬcẬdẬe"); // the accented A is a decomposed char with 2 accents
    
    assertEquals("aẬ…", s.ellipsize(3));
}

function testGlyphStrEllipsizeWithCombiningAccentsWholeGlyphs() {
	var s = new GlyphString("aẬbẬcẬdẬe"); // the accented A is a decomposed char with 2 accents
    
    assertEquals("aẬb…", s.ellipsize(4));
}

function testGlyphStrEllipsizeThai() {
	var s = new GlyphString("สวัุสดีคุณเป็นอย่างไรบ้าง");
    
    assertEquals("สวัุสดี…", s.ellipsize(5));
}

function testGlyphStrEllipsizeDevanagari1() {
	var s = new GlyphString("हैलो, आप कैसे हैं?");
    
    assertEquals("है…", s.ellipsize(3));
}

function testGlyphStrEllipsizeDevanagari2() {
	var s = new GlyphString("हैलो, आप कैसे हैं?");
    
    assertEquals("हैलो, आप …", s.ellipsize(8));
}

function testGlyphStrEllipsizeJapanese() {
	var s = new GlyphString("ェドイン");
    
    assertEquals("ェド…", s.ellipsize(3));
}

function testGlyphStrEllipsizeKannadaNonSpacing() {
	var s = new GlyphString("ಭೆನಿಬೇನಿೇ");
    
    assertEquals("ಭೆನಿ…", s.ellipsize(4));
}

function testGlyphStrEllipsizeKannadaSkipSpacing5() {
	var s = new GlyphString("ಭೆನಿಬೇನಿೇ");
    
    assertEquals("ಭೆನಿ…", s.ellipsize(5));
}

function testGlyphStrEllipsizeKannadaSkipSpacing5() {
	var s = new GlyphString("ಭೆನಿಬೇನಿೇ");
    
    assertEquals("ಭೆನಿಬೇ…", s.ellipsize(5));
}

function testGlyphStrEllipsizeMalayalamNonSpacing() {
	var s = new GlyphString("ടൢഡൣഖൊഭൈ");
    
    assertEquals("ടൢഡൣ…", s.ellipsize(3));
}

function testGlyphStrEllipsizeMalayalamSkipSpacing4() {
	var s = new GlyphString("ടൢഡൣഖൊഭൈ");
    
    assertEquals("ടൢഡൣ…", s.ellipsize(4));
}

function testGlyphStrEllipsizeMalayalamSkipSpacing5() {
	var s = new GlyphString("ടൢഡൣഖൊഭൈ");
    
    assertEquals("ടൢഡൣഖൊ…", s.ellipsize(5));
}

function testGlyphStrEllipsizeSinhalaNonSpacing() {
	var s = new GlyphString("ච්ගුටෘඋෙ");
    
    assertEquals("ච්ගු…", s.ellipsize(3));
}

function testGlyphStrEllipsizeSinhalaSkipSpacing4() {
	var s = new GlyphString("ච්ගුටෘඋෙ");
    
    assertEquals("ච්ගු…", s.ellipsize(4));
}

function testGlyphStrEllipsizeSinhalaSkipSpacing5() {
	var s = new GlyphString("ච්ගුටෘඋෙ");
    
    assertEquals("ච්ගුටෘ…", s.ellipsize(5));
}

function testGlyphStrEllipsizeTeluguNonSpacing() {
	var s = new GlyphString("ఠౕఌేకౄదూ");
    
    assertEquals("ఠౕఌే…", s.ellipsize(3));
}

function testGlyphStrEllipsizeTeluguSkipSpacing4() {
	var s = new GlyphString("ఠౕఌేకౄదూ");
    
    assertEquals("ఠౕఌే…", s.ellipsize(4));
}

function testGlyphStrEllipsizeTeluguSkipSpacing5() {
	var s = new GlyphString("ఠౕఌేకౄదూ");
    
    assertEquals("ఠౕఌేకౄ…", s.ellipsize(5));
}

function testGlyphStrEllipsizeBengaliNonSpacing() {
	var s = new GlyphString("ঢূতুমৈবো");
    
    assertEquals("ঢূতু…", s.ellipsize(3));
}

function testGlyphStrEllipsizeBengaliSkipSpacing4() {
	var s = new GlyphString("ঢূতুমৈবো");
    
    assertEquals("ঢূতু…", s.ellipsize(4));
}

function testGlyphStrEllipsizeBengaliSkipSpacing5() {
	var s = new GlyphString("ঢূতুমৈবো");
    
    assertEquals("ঢূতুমৈ…", s.ellipsize(5));
}

function testGlyphStrEllipsizeGujaratiNonSpacing() {
	var s = new GlyphString("ઑૄખેઊોઌૉ");
    
    assertEquals("ઑૄખે…", s.ellipsize(3));
}

function testGlyphStrEllipsizeGujaratiSkipSpacing4() {
	var s = new GlyphString("ઑૄખેઊોઌૉ");
    
    assertEquals("ઑૄખે…", s.ellipsize(4));
}

function testGlyphStrEllipsizeGujaratiSkipSpacing5() {
	var s = new GlyphString("ઑૄખેઊોઌૉ");
    
    assertEquals("ઑૄખેઊો…", s.ellipsize(5));
}

function testGlyphStrEllipsizeGurmukhiNonSpacing() {
	var s = new GlyphString("ਕੇਙੋਡਿਜੀ");
    
    assertEquals("ਕੇਙੋ…", s.ellipsize(3));
}

function testGlyphStrEllipsizeGurmukhiSkipSpacing4() {
	var s = new GlyphString("ਕੇਙੋਡਿਜੀ");
    
    assertEquals("ਕੇਙੋ…", s.ellipsize(4));
}

function testGlyphStrEllipsizeGurmukhiSkipSpacing5() {
	var s = new GlyphString("ਕੇਙੋਡਿਜੀ");
    
    assertEquals("ਕੇਙੋਡਿ…", s.ellipsize(5));
}
