/*
 * testbreakit_en.js - test the break iteration routines in English
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

if (typeof(BreakIterator) === "undefined") {
    var BreakIterator = require("../.././../lib/BreakIterator.js");
}

if (typeof(wordBreakData) === "undefined") {
    var wordBreakData = require("./wordBreakData.js");
}

module.exports.testbreakit_en = {
    testBreakIteratorENConstructorDefault: function(test) {
        test.expect(1);
        var bi = new BreakIterator("abc", {
            locale: "en-US"
        });
        test.ok(bi);
        test.done();
    },
    
    testBreakIteratorENCharacterDefault: function(test) {
        test.expect(8);
        // take surrogate characters together
        var bi = new BreakIterator("a\uD800\uDF02b\uD800\uDC00", {
            type: "character",
            locale: "en-US"
        });
    
        test.ok(bi.hasNext());
        test.equal(bi.next(), "a");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "\uD800\uDF02");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "b");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "\uD800\uDC00");
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },

    testBreakIteratorENGlyph: function(test) {
        test.expect(8);
        var bi = new BreakIterator("aÄa", { // the A umlaut is a decomposed char
            type: "glyph",
            locale: "en-US"
        });
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.next(), "a");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "Ä");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "a");
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },
    
    testBreakIteratorENWordSimple: function(test) {
        test.expect(19);
        var bi = new BreakIterator("This is a sentence.", {
            type: "word",
            locale: "en-US"
        });
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.next(), "This");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "is");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "a");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "sentence");
        test.ok(bi.hasNext());
        test.equal(bi.next(), ".");
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },

    testBreakIteratorENWordWithPunctuation: function(test) {
        test.expect(31);
        var bi = new BreakIterator('He said, "Gidyup thar, horse!"', {
            type: "word",
            locale: "en-US"
        });
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.next(), "He");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "said");
        test.ok(bi.hasNext());
        test.equal(bi.next(), ",");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), '"');
        test.ok(bi.hasNext());
        test.equal(bi.next(), "Gidyup");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "thar");
        test.ok(bi.hasNext());
        test.equal(bi.next(), ",");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "horse");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "!");
        test.ok(bi.hasNext());
        test.equal(bi.next(), '"');
        test.ok(bi.hasNext());
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },
    
    testBreakIteratorENWordWithHyphensAndDashes: function(test) {
        test.expect(31);
        var bi = new BreakIterator('Wilkins-Smith re-iterated over-the-line regular‑hyphen', {
            type: "word",
            locale: "en-US"
        });
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.next(), "Wilkins");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "-");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "Smith");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "re-iterated");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "over");
        test.ok(bi.hasNext());
        test.equal(bi.next(), '-');
        test.ok(bi.hasNext());
        test.equal(bi.next(), "the");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "-");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "line");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "regular‑hyphen");
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },

    testBreakIteratorENWordWithNonBreakingHyphens: function(test) {
        test.expect(31);
        var bi = new BreakIterator('non‑breaking‑hyphen word', {
            type: "word",
            locale: "en-US"
        });
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.next(), "non‑breaking‑hyphen");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "word");
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },

    testBreakIteratorENWordWithEnDashes: function(test) {
        test.expect(31);
        var bi = new BreakIterator('no break on n‑dash', {
            type: "word",
            locale: "en-US"
        });
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.next(), "no");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "break");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "on");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "n‑dash");
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },

    testBreakIteratorENWordWithEmDashes: function(test) {
        test.expect(31);
        var bi = new BreakIterator('He said—and I quote—everything.', {
            type: "word",
            locale: "en-US"
        });
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.next(), "He");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "said");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "—");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "and");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "I");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "quote");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "—");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "everything");
        test.ok(bi.hasNext());
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },

    testBreakIteratorENWordWithApostrophes: function(test) {
        test.expect(31);
        var bi = new BreakIterator("He can’t forget Kaua’i in Hawai’i.", {
            type: "word",
            locale: "en-US"
        });
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.next(), "He");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "can’t");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "forget");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "Kaua’i");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "in");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "Hawai’i");
        test.ok(bi.hasNext());
        test.equal(bi.next(), ".");
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },

    testBreakIteratorENWordWithEmbeddedSingleQuotes: function(test) {
        test.expect(31);
        var bi = new BreakIterator("He can't forget Kaua'i in Hawai'i.", {
            type: "word",
            locale: "en-US"
        });
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.next(), "He");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "can't");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "forget");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "Kaua'i");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "in");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "Hawai'i");
        test.ok(bi.hasNext());
        test.equal(bi.next(), ".");
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },

    testBreakIteratorENWordWholeAbbreviations: function(test) {
        test.expect(31);
        var bi = new BreakIterator("Dr. McMurdach, Ph.D.", {
            type: "word",
            locale: "en-US"
        });
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.next(), "Dr.");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "McMurdach");
        test.ok(bi.hasNext());
        test.equal(bi.next(), ",");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "Ph.D.");
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },


    testBreakIteratorENSentence: function(test) {
        test.expect(13);
        var bi = new BreakIterator("This is a sentence. This is another sentence! This is a third?", {
            type: "sentence",
            locale: "en-US"
        });
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.next(), "This is a sentence.");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "This is another sentence!");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "This is a third?");
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },

    testBreakIteratorENSentenceIgnoreSuppressions: function(test) {
        test.expect(13);
        var bi = new BreakIterator("Dr. McMurdach, Ph.D. has worked in the U.S.A. since Aug. 21, 2016. He works with Capt. Jack on toxocology research.", {
            type: "sentence",
            locale: "en-US"
        });
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.next(), "Dr. McMurdach, Ph.D. has worked in the U.S.A. since Aug. 21, 2016.");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "He works with Capt. Jack on toxocology research.");
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },
    
    testBreakIteratorENSentenceDealWithQuotesProperly: function(test) {
        test.expect(13);
        var bi = new BreakIterator('He said, "Man, that comedian was a riot! They should put him on every night!"', {
            type: "sentence",
            locale: "en-US"
        });
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.next(), 'He said, "Man, that comedian was a riot!');
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), 'They should put him on every night!"');
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },
    
    testBreakIteratorENSentence: function(test) {
        test.expect(13);
        var bi = new BreakIterator('He said, "Man, that comedian was a riot! They should put him on every night!"', {
            type: "line",
            maxLength: 30,
            locale: "en-US"
        });
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.next(), 'He said, "Man, that comedian ');
        test.ok(bi.hasNext());
        test.equal(bi.next(), 'was a riot! They should put ');
        test.ok(bi.hasNext());
        test.equal(bi.next(), 'him on every night!"');
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },
    
    testBreakIteratorENSentenceSoftHyphen: function(test) {
        test.expect(13);
        var bi = new BreakIterator('He said, "Man, that co­me­di­an was a riot! They should put him on ev­er­y night!"', {
            type: "line",
            maxLength: 24,
            locale: "en-US"
        });
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.next(), 'He said, "Man, that co­me-');
        test.ok(bi.hasNext());
        test.equal(bi.next(), '­di­an was a riot! They ');
        test.ok(bi.hasNext());
        test.equal(bi.next(), 'should put him on ev­er­y ');
        test.ok(!bi.hasNext());
        test.equal(bi.next(), 'night!"');
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },
    
    testBreakIteratorENUnicodeTest: function(test) {
        // there is no text.expect here, because there are a 
        // variable number of tests in the Unicode data.
        
        for (var text in wordBreakData) {
            var bi = new BreakIterator(text, {
                type: "word",
                locale: "en-US"
            });
            test.ok(bi);
            
            var result = [];
            while (bi.hasNext()) {
                result.push(bi.next());
            }
            
            test.deepEqual(result, wordBreakData[text]);
        }

        test.done();
    }

};
