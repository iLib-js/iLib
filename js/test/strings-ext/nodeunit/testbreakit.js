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
        
        test.ok(it.hasNext());
        test.equal(it.next(), "a");
        test.ok(it.hasNext());
        test.equal(it.next(), "b");
        test.ok(it.hasNext());
        test.equal(it.next(), "c");
        test.ok(!it.hasNext());
        test.equal(it.next(), undefined);
        test.done();
    },

    testBreakIteratorGlyph: function(test) {
        test.expect(8);
        var bi = new BreakIterator("aÄa", { // the A umlaut is a decomposed char
            type: "glyph"
        });
        test.ok(bi);
        
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
    
    testBreakIteratorWord: function(test) {
        test.expect(19);
        var bi = new BreakIterator("This is a sentence.", {
            type: "word"
        });
        test.ok(bi);
        
        test.ok(it.hasNext());
        test.equal(it.next(), "This");
        test.ok(it.hasNext());
        test.equal(it.next(), " ");
        test.ok(it.hasNext());
        test.equal(it.next(), "is");
        test.ok(it.hasNext());
        test.equal(it.next(), " ");
        test.ok(it.hasNext());
        test.equal(it.next(), "a");
        test.ok(it.hasNext());
        test.equal(it.next(), " ");
        test.ok(it.hasNext());
        test.equal(it.next(), "sentence");
        test.ok(it.hasNext());
        test.equal(it.next(), ".");
        test.ok(!it.hasNext());
        test.equal(it.next(), undefined);
        test.done();
    },

    testBreakIteratorSentence: function(test) {
        test.expect(13);
        var bi = new BreakIterator("This is a sentence. This is another sentence! This is a third?", {
            type: "sentence"
        });
        test.ok(bi);
        
        test.ok(it.hasNext());
        test.equal(it.next(), "This is a sentence.");
        test.ok(it.hasNext());
        test.equal(it.next(), " ");
        test.ok(it.hasNext());
        test.equal(it.next(), "This is another sentence!");
        test.ok(it.hasNext());
        test.equal(it.next(), " ");
        test.ok(it.hasNext());
        test.equal(it.next(), "This is a third?");
        test.ok(!it.hasNext());
        test.equal(it.next(), undefined);
        test.done();
    },

    testBreakIteratorLine: function(test) {
        test.expect(13);
        var bi = new BreakIterator("This is a sentence. This is another sentence! This is a third?", {
            type: "line",
            maxLength: "22"
        });
        test.ok(bi);
        
        test.ok(it.hasNext());
        test.equal(it.next(), "This is a sentence. ");
        test.ok(it.hasNext());
        test.equal(it.next(), " ");
        test.ok(it.hasNext());
        test.equal(it.next(), "This is another ");
        test.ok(it.hasNext());
        test.equal(it.next(), "sentence! This is a ");
        test.ok(it.hasNext());
        test.equal(it.next(), "third?");
        test.ok(!it.hasNext());
        test.equal(it.next(), undefined);
        test.done();
    },
    
    testBreakIteratorEmptyNoNext: function(test) {
        test.expect(3);
        var bi = new BreakIterator("", {
            type: "word"
        });
        test.ok(bi);
        
        test.ok(!it.hasNext());
        test.ok(!it.next());
        test.done();
    },

    testBreakIteratorEmptyNoFirst: function(test) {
        test.expect(3);
        var bi = new BreakIterator("", {
            type: "word"
        });
        test.ok(bi);
        
        test.ok(!it.first());
        test.done();
    },

    testBreakIteratorEmptyNoLast: function(test) {
        test.expect(3);
        var bi = new BreakIterator("", {
            type: "word"
        });
        test.ok(bi);
        
        test.ok(!it.last());
        test.done();
    },

    testBreakIteratorEmptyNoPrevious: function(test) {
        test.expect(3);
        var bi = new BreakIterator("", {
            type: "word"
        });
        test.ok(bi);
        
        test.ok(!it.previous());
        test.done();
    },

    testBreakIteratorNoWords: function(test) {
        test.expect(3);
        var bi = new BreakIterator("", {
            type: "word"
        });
        test.ok(bi);
        
        test.ok(!it.hasNext());
        test.ok(!it.next());
        test.done();
    },

};
