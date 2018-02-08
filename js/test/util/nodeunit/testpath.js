/*
 * testpath.js - test the Path polyfill class
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

if (typeof(Path) === "undefined") {
    var Path = require("../../../lib/Path.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testpath = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDirnameSimple: function(test) {
        test.expect(1);
        test.equal(Path.dirname("a/b"), "a");
        test.done();
    },

    testDirnameComplex: function(test) {
        test.expect(1);
        test.equal(Path.dirname("a/b/c/foo.txt"), "a/b/c");
        test.done();
    },

    testDirnameNoParent: function(test) {
        test.expect(1);
        test.equal(Path.dirname("a"), ".");
        test.done();
    },

    testDirnameNormalizeToo: function(test) {
        test.expect(1);
        test.equal(Path.dirname("a/../b/c.txt"), "b");
        test.done();
    },
    
    testBasenameSimple: function(test) {
        test.expect(1);
        test.equal(Path.basename("c.txt"), "c.txt");
        test.done();
    },

    testBasenameWithExtension: function(test) {
        test.expect(1);
        test.equal(Path.basename("c.txt", "txt"), "c");
        test.done();
    },

    testBasenameWithExtensionAndDot: function(test) {
        test.expect(1);
        test.equal(Path.basename("c.txt", ".txt"), "c");
        test.done();
    },

    testBasenameWithDir: function(test) {
        test.expect(1);
        test.equal(Path.basename("a/b/c.txt"), "c.txt");
        test.done();
    },

    testBasenameWithDirAndExtension: function(test) {
        test.expect(1);
        test.equal(Path.basename("a/b/c.txt", "txt"), "c");
        test.done();
    },

    testBasenameWithDirAndExtensionWithDot: function(test) {
        test.expect(1);
        test.equal(Path.basename("a/b/c.txt", ".txt"), "c");
        test.done();
    },

    testNormalizeSimple: function(test) {
        test.expect(1);
        test.equal(Path.normalize("a/b/c.txt"), "a/b/c.txt");
        test.done();
    },

    testNormalizeRemoveDotDotSecondSpot: function(test) {
        test.expect(1);
        test.equal(Path.normalize("a/../b/c.txt"), "b/c.txt");
        test.done();
    },

    testNormalizeRemoveDotDotFurtherDown: function(test) {
        test.expect(1);
        test.equal(Path.normalize("a/b/../b/c.txt"), "a/b/c.txt");
        test.done();
    },

    testNormalizeRemoveDot: function(test) {
        test.expect(1);
        test.equal(Path.normalize("a/./b/c.txt"), "a/b/c.txt");
        test.done();
    },

    testNormalizeRemoveDotBeginning: function(test) {
        test.expect(1);
        test.equal(Path.normalize("./b/c.txt"), "b/c.txt");
        test.done();
    },

    testNormalizeRemoveDotEnd: function(test) {
        test.expect(1);
        test.equal(Path.normalize("a/b/."), "a/b");
        test.done();
    },
    
    testNormalizeRemoveDotsAmongstDotDots: function(test) {
        test.expect(1);
        test.equal(Path.normalize(".././../b/c.txt"), "../../b/c.txt");
        test.done();
    },

    testNormalizeDontRemoveInitialSlash: function(test) {
        test.expect(1);
        test.equal(Path.normalize("/b/c.txt"), "/b/c.txt");
        test.done();
    },

    testNormalizeRemoveDotButDontRemoveInitialSlash: function(test) {
        test.expect(1);
        test.equal(Path.normalize("/b/."), "/b");
        test.done();
    },

    testNormalizeRemoveMultipleSlashes: function(test) {
        test.expect(1);
        test.equal(Path.normalize("a//b//c.txt"), "a/b/c.txt");
        test.done();
    },
    
    testNormalizeConvertDOSToPosix: function(test) {
        test.expect(1);
        test.equal(Path.normalize("a\\b\\c.txt"), "a/b/c.txt");
        test.done();
    },

    testJoinSimple: function(test) {
        test.expect(1);
        test.equal(Path.join("b", "c.txt"), "b/c.txt");
        test.done();
    },

    testJoinMultiple: function(test) {
        test.expect(1);
        test.equal(Path.join("a", "b", "c", "d.txt"), "a/b/c/d.txt");
        test.done();
    },

    testJoinSingular: function(test) {
        test.expect(1);
        test.equal(Path.join("d.txt"), "d.txt");
        test.done();
    },

    testJoinNormalizeToo: function(test) {
        test.expect(1);
        test.equal(Path.join("a", "..", "./c.txt"), "c.txt");
        test.done();
    },

    testJoinNoDuplicateSlashes: function(test) {
        test.expect(1);
        test.equal(Path.join("b/", "/c.txt"), "b/c.txt");
        test.done();
    },
    
    testJoinUndefined: function(test) {
        test.expect(1);
        test.equal(Path.join(), "");
        test.done();
    }
};