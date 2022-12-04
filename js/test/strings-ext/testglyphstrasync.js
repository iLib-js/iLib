/*
 * testglyphstrasync.js - test the glyph iteration routines
 *
 * Copyright © 2018, JEDLSoft
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
    var GlyphString = require("../../lib/GlyphString.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testglyphstrasync = {
    testGlyphStrAsyncCharIteratorNormal: function(test) {
        test.expect(8);
        new GlyphString("aÄa", { // the A umlaut is a decomposed char
            sync: false,
            onLoad: function(s) {
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
            }
        });
    },

    testGlyphStrAsyncCharIteratorEmpty: function(test) {
        test.expect(2);
        var s = new GlyphString("", {
            sync: false,
            onLoad: function(s) {
                var it = s.charIterator();

                test.ok(!it.hasNext());
                test.equal(it.next(), undefined);
                test.done();
            }
        });
    },

    testGlyphStrAsyncCharIteratorMultipleDecomposed: function(test) {
        test.expect(8);
        var s = new GlyphString("aẬa", { // the accented A is a decomposed char with 2 accents
            sync: false,
            onLoad: function(s) {
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
            }
        });
    },

    testGlyphStrAsyncTruncateWithCombiningAccentsWholeGlyphs: function(test) {
        test.expect(1);
        var s = new GlyphString("aẬbẬcẬdẬe", { // the accented A is a decomposed char with 2 accents
            sync: false,
            onLoad: function(s) {
                test.equal(s.truncate(4), "aẬbẬ");
                test.done();
            }
        });
    },

    testGlyphStrAsyncTruncateThai: function(test) {
        test.expect(1);
        var s = new GlyphString("สวัุสดีคุณเป็นอย่างไรบ้าง", {
            sync: false,
            onLoad: function(s) {
                // this tests non-spacing marks that are also non-combining

                test.equal(s.truncate(4), "สวัุสดี");
                test.done();
            }
        });
    },

    testGlyphStrAsyncTruncateDevanagari1: function(test) {
        test.expect(1);
        var s = new GlyphString("हैलो, आप कैसे हैं?", {
            sync: false,
            onLoad: function(s) {
                // if the 2nd base character has combining spacing accents on it,
                // then it will not fit in the two spaces available, so the base
                // and all its combining spacing accents have to be removed.
                test.equal(s.truncate(2), "है");
                test.done();
            }
        });
    },

    testGlyphStrAsyncEllipsizeDevanagari2: function(test) {
        test.expect(1);
        var s = new GlyphString("हैलो, आप कैसे हैं?", {
            sync: false,
            onLoad: function(s) {
                test.equal(s.ellipsize(8), "हैलो, आप …");
                test.done();
            }
        });
    },

    testGlyphStrAsyncEllipsizeJapanese: function(test) {
        test.expect(1);
        var s = new GlyphString("ェドイン", {
            sync: false,
            onLoad: function(s) {
                test.equal(s.ellipsize(3), "ェド…");
                test.done();
            }
        });
    }
};
