/*
 * testglyphstr.js - test the glyph iteration routines
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

if (typeof(GlyphString) === "undefined") {
    var GlyphString = require("../../../lib/GlyphString.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testglyphstr = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testCharIteratorNormal: function(test) {
        test.expect(8);
        var s = new GlyphString("aba");
        var it = s.charIterator();
        
        test.ok(it.hasNext());
        test.equal(it.next(), "a");
        test.ok(it.hasNext());
        test.equal(it.next(), "b");
        test.ok(it.hasNext());
        test.equal(it.next(), "a");
        test.ok(!it.hasNext());
        test.equal(it.next(), undefined);
        test.done();
    },
    
    testCharIteratorDecomposed: function(test) {
        test.expect(8);
        var s = new GlyphString("aÄa"); // the A umlaut is a decomposed char
        var it = s.charIterator();
        
        test.ok(it.hasNext());
        test.equal(it.next(), "a");
        test.ok(it.hasNext());
        test.equal(it.next(), "Ä");
        test.ok(it.hasNext());
        test.equal(it.next(), "a");
        test.ok(!it.hasNext());
        test.equal(it.next(), undefined);
        test.done();
    },
    
    testCharIteratorEmpty: function(test) {
        test.expect(2);
        var s = new GlyphString("");
        var it = s.charIterator();
        
        test.ok(!it.hasNext());
        test.equal(it.next(), undefined);
        test.done();
    },
    
    testCharIteratorWithSurrogates: function(test) {
        test.expect(10);
        var str = new GlyphString("a\uD800\uDF02b\uD800\uDC00");
    
        var it = str.charIterator();
        test.ok(it.hasNext());
        test.equal(it.next(), "a");
        test.ok(it.hasNext());
        test.equal(it.next(), "\uD800\uDF02");
        test.ok(it.hasNext());
        test.equal(it.next(), "b");
        test.ok(it.hasNext());
        test.equal(it.next(), "\uD800\uDC00");
        test.ok(!it.hasNext());
        test.equal(it.next(), undefined);
        test.done();
    },
    
    testCharIteratorWithSurrogatesAndDecomposedChars: function(test) {
        test.expect(12);
        var str = new GlyphString("a\uD800\uDF02bï\uD800\uDC00"); // the ï is a decomposed i + umlaut
    
        var it = str.charIterator();
        test.ok(it.hasNext());
        test.equal(it.next(), "a");
        test.ok(it.hasNext());
        test.equal(it.next(), "\uD800\uDF02");
        test.ok(it.hasNext());
        test.equal(it.next(), "b");
        test.ok(it.hasNext());
        test.equal(it.next(), "ï");
        test.ok(it.hasNext());
        test.equal(it.next(), "\uD800\uDC00");
        test.ok(!it.hasNext());
        test.equal(it.next(), undefined);
        test.done();
    },
    
    testCharIteratorMultipleDecomposed: function(test) {
        test.expect(8);
        var s = new GlyphString("aẬa"); // the accented A is a decomposed char with 2 accents
        var it = s.charIterator();
        
        test.ok(it.hasNext());
        test.equal(it.next(), "a");
        test.ok(it.hasNext());
        test.equal(it.next(), "Ậ");
        test.ok(it.hasNext());
        test.equal(it.next(), "a");
        test.ok(!it.hasNext());
        test.equal(it.next(), undefined);
        test.done();
    },
    
    testCharIteratorAgrave: function(test) {
        test.expect(4);
        var s = new GlyphString("À"); // the accented A is a decomposed char
        var it = s.charIterator();
        
        test.ok(it.hasNext());
        test.equal(it.next(), "À");
        test.ok(!it.hasNext());
        test.equal(it.next(), undefined);
        test.done();
    },
    
    testForEachNormal: function(test) {
        var s = new GlyphString("aba");
    
        var expected = ["a", "b", "a"];
        var i = 0;
        
        s.forEach(function(ch) {
            test.equal(ch, expected[i++]);
        });
        test.done();
    },
    
    testForEachDecomposed: function(test) {
        var s = new GlyphString("aÄa"); // the A umlaut is a decomposed char
        
        var expected = ["a", "Ä", "a"];
        var i = 0;
        
        s.forEach(function(ch) {
            test.equal(ch, expected[i++]);
        });
        test.done();
    },
    
    testForEachEmpty: function(test) {
        var s = new GlyphString("");
    
        s.forEach(function(ch) {
            // should never call this callback
            test.fail();
        });
        test.done();
    },
    
    testForEachWithSurrogates: function(test) {
        var s = new GlyphString("a\uD800\uDF02b\uD800\uDC00");
        
        var expected = ["a", "\uD800\uDF02", "b", "\uD800\uDC00"];
        var i = 0;
        
        s.forEach(function(ch) {
            test.equal(ch, expected[i++]);
        });
        test.done();
    },
    
    testForEachWithSurrogatesAndDecomposedChars: function(test) {
        var s = new GlyphString("a\uD800\uDF02bï\uD800\uDC00"); // the ï is a decomposed i + umlaut
        
        var expected = ["a", "\uD800\uDF02", "b", "ï", "\uD800\uDC00"];
        var i = 0;
        
        s.forEach(function(ch) {
            test.equal(ch, expected[i++]);
        });
        test.done();
    },
    
    testForEachMultipleDecomposed: function(test) {
        var s = new GlyphString("aẬa"); // the accented A is a decomposed char with 2 accents
        
        var expected = ["a", "Ậ", "a"];
        var i = 0;
        
        s.forEach(function(ch) {
            test.equal(ch, expected[i++]);
        });
        test.done();
    },
    
    testForEachAgrave: function(test) {
        var s = new GlyphString("À"); // the accented A is a decomposed char
        
        var expected = ["À"];
        var i = 0;
        
        s.forEach(function(ch) {
            test.equal(ch, expected[i++]);
        });
        test.done();
    },
    
    testGlyphStrTruncateSimple: function(test) {
        test.expect(1);
        var s = new GlyphString("abcdefghijklmnop");
        
        test.equal(s.truncate(6), "abcdef");
        test.done();
    },
    
    testGlyphStrTruncateWithCombiningAccentsmidGlyphs: function(test) {
        test.expect(1);
        var s = new GlyphString("aẬbẬcẬdẬe"); // the accented A is a decomposed char with 2 accents
        
        test.equal(s.truncate(2), "aẬ");
        test.done();
    },
    
    testGlyphStrTruncateWithCombiningAccentsWholeGlyphs: function(test) {
        test.expect(1);
        var s = new GlyphString("aẬbẬcẬdẬe"); // the accented A is a decomposed char with 2 accents
        
        test.equal(s.truncate(4), "aẬbẬ");
        test.done();
    },
    
    testGlyphStrTruncateThai: function(test) {
        test.expect(1);
        var s = new GlyphString("สวัุสดีคุณเป็นอย่างไรบ้าง");
        
        // this tests non-spacing marks that are also non-combining
        
        test.equal(s.truncate(4), "สวัุสดี");
        test.done();
    },
    
    testGlyphStrTruncateDevanagari1: function(test) {
        test.expect(1);
        var s = new GlyphString("हैलो, आप कैसे हैं?");
        
        // if the 2nd base character has combining spacing accents on it,
        // then it will not fit in the two spaces available, so the base
        // and all its combining spacing accents have to be removed.
        test.equal(s.truncate(2), "है");
        test.done();
    },
    
    testGlyphStrTruncateDevanagari2: function(test) {
        test.expect(1);
        var s = new GlyphString("हैलो, आप कैसे हैं?");
        
        test.equal(s.truncate(3), "हैलो,");
        test.done();
    },
    
    testGlyphStrTruncateTamil: function(test) {
        test.expect(1);
        var s = new GlyphString("சொலிறுவெ");
        
        test.equal(s.truncate(3), "சொலி");
        test.done();
    },
    
    testGlyphStrTruncateJapanese: function(test) {
        test.expect(1);
        var s = new GlyphString("ェドイン");
        
        test.equal(s.truncate(2), "ェド");
        test.done();
    },
    
    testGlyphStrTruncateKannadaNonSpacing: function(test) {
        test.expect(1);
        var s = new GlyphString("ಭೆನಿಬೇನಿೇ");
        
        test.equal(s.truncate(2), "ಭೆನಿ");
        test.done();
    },
    
    testGlyphStrTruncateKannadaSkipSpacing3: function(test) {
        test.expect(1);
        var s = new GlyphString("ಭೆನಿಬೇನಿೇ");
        
        test.equal(s.truncate(3), "ಭೆನಿ");
        test.done();
    },
    
    testGlyphStrTruncateKannadaSkipSpacing4: function(test) {
        test.expect(1);
        var s = new GlyphString("ಭೆನಿಬೇನಿೇ");
        
        test.equal(s.truncate(4), "ಭೆನಿಬೇ");
        test.done();
    },
    
    testGlyphStrTruncateMalayalamNonSpacing: function(test) {
        test.expect(1);
        var s = new GlyphString("ടൢഡൣഖൊഭൈ");
        
        test.equal(s.truncate(2), "ടൢഡൣ");
        test.done();
    },
    
    testGlyphStrTruncateMalayalamSkipSpacing3: function(test) {
        test.expect(1);
        var s = new GlyphString("ടൢഡൣഖൊഭൈ");
        
        test.equal(s.truncate(3), "ടൢഡൣ");
        test.done();
    },
    
    testGlyphStrTruncateMalayalamSkipSpacing4: function(test) {
        test.expect(1);
        var s = new GlyphString("ടൢഡൣഖൊഭൈ");
        
        test.equal(s.truncate(4), "ടൢഡൣഖൊ");
        test.done();
    },
    
    testGlyphStrTruncateSinhalaNonSpacing: function(test) {
        test.expect(1);
        var s = new GlyphString("ච්ගුටෘඋෙ");
        
        test.equal(s.truncate(2), "ච්ගු");
        test.done();
    },
    
    testGlyphStrTruncateSinhalaSkipSpacing3: function(test) {
        test.expect(1);
        var s = new GlyphString("ච්ගුටෘඋෙ");
        
        test.equal(s.truncate(3), "ච්ගු");
        test.done();
    },
    
    testGlyphStrTruncateSinhalaSkipSpacing4: function(test) {
        test.expect(1);
        var s = new GlyphString("ච්ගුටෘඋෙ");
        
        test.equal(s.truncate(4), "ච්ගුටෘ");
        test.done();
    },
    
    testGlyphStrTruncateTeluguNonSpacing: function(test) {
        test.expect(1);
        var s = new GlyphString("ఠౕఌేకౄదూ");
        
        test.equal(s.truncate(2), "ఠౕఌే");
        test.done();
    },
    
    testGlyphStrTruncateTeluguSkipSpacing3: function(test) {
        test.expect(1);
        var s = new GlyphString("ఠౕఌేకౄదూ");
        
        test.equal(s.truncate(3), "ఠౕఌే");
        test.done();
    },
    
    testGlyphStrTruncateTeluguSkipSpacing4: function(test) {
        test.expect(1);
        var s = new GlyphString("ఠౕఌేకౄదూ");
        
        test.equal(s.truncate(4), "ఠౕఌేకౄ");
        test.done();
    },
    
    testGlyphStrTruncateBengaliNonSpacing: function(test) {
        test.expect(1);
        var s = new GlyphString("ঢূতুমৈবো");
        
        test.equal(s.truncate(2), "ঢূতু");
        test.done();
    },
    
    testGlyphStrTruncateBengaliSkipSpacing3: function(test) {
        test.expect(1);
        var s = new GlyphString("ঢূতুমৈবো");
        
        test.equal(s.truncate(3), "ঢূতু");
        test.done();
    },
    
    testGlyphStrTruncateBengaliSkipSpacing4: function(test) {
        test.expect(1);
        var s = new GlyphString("ঢূতুমৈবো");
        
        test.equal(s.truncate(4), "ঢূতুমৈ");
        test.done();
    },
    
    testGlyphStrTruncateGujaratiNonSpacing: function(test) {
        test.expect(1);
        var s = new GlyphString("ઑૄખેઊોઌૉ");
        
        test.equal(s.truncate(2), "ઑૄખે");
        test.done();
    },
    
    testGlyphStrTruncateGujaratiSkipSpacing3: function(test) {
        test.expect(1);
        var s = new GlyphString("ઑૄખેઊોઌૉ");
        
        test.equal(s.truncate(3), "ઑૄખે");
        test.done();
    },
    
    testGlyphStrTruncateGujaratiSkipSpacing4: function(test) {
        test.expect(1);
        var s = new GlyphString("ઑૄખેઊોઌૉ");
        
        test.equal(s.truncate(4), "ઑૄખેઊો");
        test.done();
    },
    
    testGlyphStrTruncateGurmukhiNonSpacing: function(test) {
        test.expect(1);
        var s = new GlyphString("ਕੇਙੋਡਿਜੀ");
        
        test.equal(s.truncate(2), "ਕੇਙੋ");
        test.done();
    },
    
    testGlyphStrTruncateGurmukhiSkipSpacing3: function(test) {
        test.expect(1);
        var s = new GlyphString("ਕੇਙੋਡਿਜੀ");
        
        test.equal(s.truncate(3), "ਕੇਙੋ");
        test.done();
    },
    
    testGlyphStrTruncateGurmukhiSkipSpacing4: function(test) {
        test.expect(1);
        var s = new GlyphString("ਕੇਙੋਡਿਜੀ");
        
        test.equal(s.truncate(4), "ਕੇਙੋਡਿ");
        test.done();
    },
    
    testGlyphStrEllipsizeSimple: function(test) {
        test.expect(1);
        var s = new GlyphString("abcdefghijklmnop");
        
        test.equal(s.ellipsize(6), "abcde…");
        test.done();
    },
    
    testGlyphStrEllipsizeWithCombiningAccentsmidGlyphs: function(test) {
        test.expect(1);
        var s = new GlyphString("aẬbẬcẬdẬe"); // the accented A is a decomposed char with 2 accents
        
        test.equal(s.ellipsize(3), "aẬ…");
        test.done();
    },
    
    testGlyphStrEllipsizeWithCombiningAccentsWholeGlyphs: function(test) {
        test.expect(1);
        var s = new GlyphString("aẬbẬcẬdẬe"); // the accented A is a decomposed char with 2 accents
        
        test.equal(s.ellipsize(4), "aẬb…");
        test.done();
    },
    
    testGlyphStrEllipsizeThai: function(test) {
        test.expect(1);
        var s = new GlyphString("สวัุสดีคุณเป็นอย่างไรบ้าง");
        
        test.equal(s.ellipsize(5), "สวัุสดี…");
        test.done();
    },
    
    testGlyphStrEllipsizeDevanagari1: function(test) {
        test.expect(1);
        var s = new GlyphString("हैलो, आप कैसे हैं?");
        
        test.equal(s.ellipsize(3), "है…");
        test.done();
    },
    
    testGlyphStrEllipsizeDevanagari2: function(test) {
        test.expect(1);
        var s = new GlyphString("हैलो, आप कैसे हैं?");
        
        test.equal(s.ellipsize(8), "हैलो, आप …");
        test.done();
    },
    
    testGlyphStrEllipsizeJapanese: function(test) {
        test.expect(1);
        var s = new GlyphString("ェドイン");
        
        test.equal(s.ellipsize(3), "ェド…");
        test.done();
    },
    
    testGlyphStrEllipsizeKannadaNonSpacing: function(test) {
        test.expect(1);
        var s = new GlyphString("ಭೆನಿಬೇನಿೇ");
        
        test.equal(s.ellipsize(4), "ಭೆನಿ…");
        test.done();
    },
    
    testGlyphStrEllipsizeKannadaSkipSpacing5: function(test) {
        test.expect(1);
        var s = new GlyphString("ಭೆನಿಬೇನಿೇ");
        
        test.equal(s.ellipsize(5), "ಭೆನಿ…");
        test.done();
    },
    
    testGlyphStrEllipsizeKannadaSkipSpacing5: function(test) {
        test.expect(1);
        var s = new GlyphString("ಭೆನಿಬೇನಿೇ");
        
        test.equal(s.ellipsize(5), "ಭೆನಿಬೇ…");
        test.done();
    },
    
    testGlyphStrEllipsizeMalayalamNonSpacing: function(test) {
        test.expect(1);
        var s = new GlyphString("ടൢഡൣഖൊഭൈ");
        
        test.equal(s.ellipsize(3), "ടൢഡൣ…");
        test.done();
    },
    
    testGlyphStrEllipsizeMalayalamSkipSpacing4: function(test) {
        test.expect(1);
        var s = new GlyphString("ടൢഡൣഖൊഭൈ");
        
        test.equal(s.ellipsize(4), "ടൢഡൣ…");
        test.done();
    },
    
    testGlyphStrEllipsizeMalayalamSkipSpacing5: function(test) {
        test.expect(1);
        var s = new GlyphString("ടൢഡൣഖൊഭൈ");
        
        test.equal(s.ellipsize(5), "ടൢഡൣഖൊ…");
        test.done();
    },
    
    testGlyphStrEllipsizeSinhalaNonSpacing: function(test) {
        test.expect(1);
        var s = new GlyphString("ච්ගුටෘඋෙ");
        
        test.equal(s.ellipsize(3), "ච්ගු…");
        test.done();
    },
    
    testGlyphStrEllipsizeSinhalaSkipSpacing4: function(test) {
        test.expect(1);
        var s = new GlyphString("ච්ගුටෘඋෙ");
        
        test.equal(s.ellipsize(4), "ච්ගු…");
        test.done();
    },
    
    testGlyphStrEllipsizeSinhalaSkipSpacing5: function(test) {
        test.expect(1);
        var s = new GlyphString("ච්ගුටෘඋෙ");
        
        test.equal(s.ellipsize(5), "ච්ගුටෘ…");
        test.done();
    },
    
    testGlyphStrEllipsizeTeluguNonSpacing: function(test) {
        test.expect(1);
        var s = new GlyphString("ఠౕఌేకౄదూ");
        
        test.equal(s.ellipsize(3), "ఠౕఌే…");
        test.done();
    },
    
    testGlyphStrEllipsizeTeluguSkipSpacing4: function(test) {
        test.expect(1);
        var s = new GlyphString("ఠౕఌేకౄదూ");
        
        test.equal(s.ellipsize(4), "ఠౕఌే…");
        test.done();
    },
    
    testGlyphStrEllipsizeTeluguSkipSpacing5: function(test) {
        test.expect(1);
        var s = new GlyphString("ఠౕఌేకౄదూ");
        
        test.equal(s.ellipsize(5), "ఠౕఌేకౄ…");
        test.done();
    },
    
    testGlyphStrEllipsizeBengaliNonSpacing: function(test) {
        test.expect(1);
        var s = new GlyphString("ঢূতুমৈবো");
        
        test.equal(s.ellipsize(3), "ঢূতু…");
        test.done();
    },
    
    testGlyphStrEllipsizeBengaliSkipSpacing4: function(test) {
        test.expect(1);
        var s = new GlyphString("ঢূতুমৈবো");
        
        test.equal(s.ellipsize(4), "ঢূতু…");
        test.done();
    },
    
    testGlyphStrEllipsizeBengaliSkipSpacing5: function(test) {
        test.expect(1);
        var s = new GlyphString("ঢূতুমৈবো");
        
        test.equal(s.ellipsize(5), "ঢূতুমৈ…");
        test.done();
    },
    
    testGlyphStrEllipsizeGujaratiNonSpacing: function(test) {
        test.expect(1);
        var s = new GlyphString("ઑૄખેઊોઌૉ");
        
        test.equal(s.ellipsize(3), "ઑૄખે…");
        test.done();
    },
    
    testGlyphStrEllipsizeGujaratiSkipSpacing4: function(test) {
        test.expect(1);
        var s = new GlyphString("ઑૄખેઊોઌૉ");
        
        test.equal(s.ellipsize(4), "ઑૄખે…");
        test.done();
    },
    
    testGlyphStrEllipsizeGujaratiSkipSpacing5: function(test) {
        test.expect(1);
        var s = new GlyphString("ઑૄખેઊોઌૉ");
        
        test.equal(s.ellipsize(5), "ઑૄખેઊો…");
        test.done();
    },
    
    testGlyphStrEllipsizeGurmukhiNonSpacing: function(test) {
        test.expect(1);
        var s = new GlyphString("ਕੇਙੋਡਿਜੀ");
        
        test.equal(s.ellipsize(3), "ਕੇਙੋ…");
        test.done();
    },
    
    testGlyphStrEllipsizeGurmukhiSkipSpacing4: function(test) {
        test.expect(1);
        var s = new GlyphString("ਕੇਙੋਡਿਜੀ");
        
        test.equal(s.ellipsize(4), "ਕੇਙੋ…");
        test.done();
    },
    
    testGlyphStrEllipsizeGurmukhiSkipSpacing5: function(test) {
        test.expect(1);
        var s = new GlyphString("ਕੇਙੋਡਿਜੀ");
        
        test.equal(s.ellipsize(5), "ਕੇਙੋਡਿ…");
        test.done();
    }
    
};