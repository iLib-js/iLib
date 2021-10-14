/*
 * testglyphstr.js - test the break iteration routines
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

module.exports.testbreakit = {
    testBreakIteratorConstructorDefault: function(test) {
        test.expect(1);
        var bi = new BreakIterator("abc");
        test.ok(bi);
        test.done();
    },
    
    testBreakIteratorCharacterDefault: function(test) {
        test.expect(8);
        var bi = new BreakIterator("abc");
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.next(), "a");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "b");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "c");
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },

    testBreakIteratorGlyph: function(test) {
        test.expect(8);
        var bi = new BreakIterator("aÄa", { // the A umlaut is a decomposed char
            type: "glyph"
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
    
    testBreakIteratorWord: function(test) {
        test.expect(19);
        var bi = new BreakIterator("This is a sentence.", {
            type: "word"
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

    testBreakIteratorSentence: function(test) {
        test.expect(13);
        var bi = new BreakIterator("This is a sentence. This is another sentence! This is a third?", {
            type: "sentence"
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

    testBreakIteratorLine: function(test) {
        test.expect(13);
        var bi = new BreakIterator("This is a sentence. This is another sentence! This is a third?", {
            type: "line",
            maxLength: "22"
        });
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.next(), "This is a sentence. ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), " ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "This is another ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "sentence! This is a ");
        test.ok(bi.hasNext());
        test.equal(bi.next(), "third?");
        test.ok(!bi.hasNext());
        test.equal(bi.next(), undefined);
        test.done();
    },
    
    testBreakIteratorEmptyNoNext: function(test) {
        test.expect(3);
        var bi = new BreakIterator("", {
            type: "word"
        });
        test.ok(bi);
        
        test.ok(!bi.hasNext());
        test.ok(!bi.next());
        test.done();
    },

    testBreakIteratorEmptyNoFirst: function(test) {
        test.expect(3);
        var bi = new BreakIterator("", {
            type: "word"
        });
        test.ok(bi);
        
        test.ok(!bi.first());
        test.done();
    },

    testBreakIteratorEmptyNoLast: function(test) {
        test.expect(3);
        var bi = new BreakIterator("", {
            type: "word"
        });
        test.ok(bi);
        
        test.ok(!bi.last());
        test.done();
    },

    testBreakIteratorEmptyNoPrevious: function(test) {
        test.expect(3);
        var bi = new BreakIterator("", {
            type: "word"
        });
        test.ok(bi);
        
        test.ok(!bi.previous());
        test.done();
    },

    testBreakIteratorPrevious: function(test) {
        test.expect(8);
        var bi = new BreakIterator("This is a sentence.", {
            type: "word"
        });
        test.ok(bi);
        
        test.equal(bi.next(), "This");
        test.equal(bi.next(), " ");
        test.equal(bi.next(), "is");
        test.equal(bi.previous(), "is");
        test.equal(bi.previous(), " ");
        test.equal(bi.previous(), "This");
        test.equal(bi.previous(), undefined);
        test.done();
    },

    testBreakIteratorStartHasNoPrevious: function(test) {
        test.expect(8);
        var bi = new BreakIterator("This is a sentence.", {
            type: "word"
        });
        test.ok(bi);
        
        test.ok(bi.hasNext());
        test.equal(bi.previous(), undefined);
        test.done();
    },

    testBreakIteratorFirst: function(test) {
        test.expect(7);
        var bi = new BreakIterator("This is a sentence.", {
            type: "word"
        });
        test.ok(bi);
        
        test.equal(bi.next(), "This");
        test.equal(bi.next(), " ");
        test.equal(bi.next(), "is");
        test.equal(bi.next(), " ");
        test.equal(bi.next(), "a");
        test.equal(bi.first(), "This");
        test.done();
    },

    testBreakIteratorFirstNoPrevious: function(test) {
        test.expect(8);
        var bi = new BreakIterator("This is a sentence.", {
            type: "word"
        });
        test.ok(bi);
        
        test.equal(bi.next(), "This");
        test.equal(bi.next(), " ");
        test.equal(bi.next(), "is");
        test.equal(bi.next(), " ");
        test.equal(bi.next(), "a");
        test.equal(bi.first(), "This");
        test.ok(!bi.previous());
        
        test.done();
    },

    testBreakIteratorLast: function(test) {
        test.expect(5);
        var bi = new BreakIterator("This is a sentence.", {
            type: "word"
        });
        test.ok(bi);
        
        test.equal(bi.next(), "This");
        test.equal(bi.next(), " ");
        test.equal(bi.next(), "is");
        test.equal(bi.last(), ".");
        test.done();
    },

    testBreakIteratorLastNoNext: function(test) {
        test.expect(4);
        var bi = new BreakIterator("This is a sentence.", {
            type: "word"
        });
        test.ok(bi);
        
        test.equal(bi.last(), ".");
        test.ok(!bi.hasNext());
        test.ok(!bi.next());
        
        test.done();
    }
};
