/*
 * testalphaindex_de.js - test the Alphabetic Index class in German
 *
 * Copyright © 2017, JEDLSoft
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
if (typeof(AlphabeticIndex) === "undefined") {
    var AlphabeticIndex = require("../../../lib/AlphabeticIndex.js");
}

module.exports.testalphaindex_de = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testAlphaIndexConstructor_deDE: function(test) {
        test.expect(3);
        var ai = new AlphabeticIndex({
            locale: "de-DE"
        });

        test.ok(ai);
        test.ok(ai.getLocale());
        test.equal(ai.getLocale().getSpec(), "de-DE");

        test.done();
    },

    testAlphaIndexConstructorWithParams_deDE: function(test) {
        test.expect(1);
        var ai = new AlphabeticIndex({
            locale: "de-DE"
        });

        test.ok(ai);
        test.done();
    },

    testAlphaIndexConstructorAsync_deDE: function(test) {
        test.expect(1);
        var ai = new AlphabeticIndex({
            locale: "de-DE",
            sync: false,
            onLoad: function(ai) {
                test.ok(ai);
                test.done();
            }
        });
    },
    
    testAlphaIndexgetDefaultIndexStyle_deDE: function(test) {
        test.expect(2);
        var ai = new AlphabeticIndex({
            locale: "de-DE"
        });

        test.ok(ai);
        test.equal("latin", ai.getIndexStyle());
        test.done();
    },

    testAlphaIndexENUSGetBucketBaseLetter_deDE: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "de-DE"
        });

        test.ok(ai);
        test.equal("A", ai.getBucket("abacus"));
        test.done();
    },

    testAlphaIndexGetBucket_deDE: function(test) {
        test.expect(3);

        var ai = new AlphabeticIndex({
            locale: "de-DE"
        });

        test.ok(ai);
        test.equal("B", ai.getBucket("belarus"));
        test.equal("B", ai.getBucket("Belarus"));

        test.done();
    },

    testAlphaIndexGetBucket_deDE2: function(test) {
        test.expect(7);

        var ai = new AlphabeticIndex({
            locale: "de-DE"
        });

        test.ok(ai);

        test.equal("U", ai.getBucket("über"));
        test.equal("A", ai.getBucket("änderen"));
        test.equal("O", ai.getBucket("öffenen"));
          
        test.equal("U", ai.getBucket("Über"));
        test.equal("A", ai.getBucket("Änderen"));
        test.equal("O", ai.getBucket("Öffenen"));

        test.done();
    },

    testAlphaIndexGetBucketAccentInsensitiveSZ_deDE: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "de-DE"
        });

        test.ok(ai);
        // no words start with sz, but handle this just in case
        test.equal("S", ai.getBucket("ß"));
        test.done();
    },

    testAlphaIndexGetAllBuckets_deDE: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "de-DE"
        });

        test.ok(ai);

        var items = [
            "omicron",
            "beta",
            "echo",
            "nu",
            "iota",
            "delta",
            "alpha",
            "zeta",
            "bravo",
            "epsilon",
            "eta",
            "india",
            "mu",
            "gamma"
        ];

        items.forEach(function(item) {
            ai.addElement(item);
        });

        var expected = {
            "A": ["alpha"],
            "B": ["beta", "bravo"],
            "E": ["echo", "epsilon", "eta"],
            "O": ["omicron"],
            "N": ["nu"],
            "I": ["india", "iota"],
            "D": ["delta"],
            "Z": ["zeta"],
            "M": ["mu"],
            "G": ["gamma"]
        };

        var expected = [
            {
                label: "A",
                elements: ["alpha"]
            },
            {
                label: "B",
                elements: ["beta", "bravo"]
            },
            {
                label: "D",
                elements: ["delta"]
            },
            {
                label: "E",
                elements: ["echo", "epsilon", "eta"]
            },
            {
                label: "G",
                elements: ["gamma"]
            },
            {
                label: "I",
                elements: ["india", "iota"]
            },
            {
                label: "M",
                elements: ["mu"]
            },
            {
                label: "N",
                elements: ["nu"]
            },
            {
                label: "O",
                elements: ["omicron"]
            },
            {
                label: "Z",
                elements: ["zeta"]
            }
        ];

        test.deepEqual(ai.getAllBuckets(), expected);
        test.done();
    },

    testAlphaIndexGetBucketLabels_deDE: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "de-DE"
        });

        test.ok(ai);

        var items = [
            "omicron",
            "beta",
            "echo",
            "nu",
            "iota",
            "delta",
            "alpha",
            "lambda",
            "alpha", // doubled
            "theta",
            "kappa",
            "chi",
            "phi",
            "zeta",
            "bravo",
            "epsilon",
            "eta",
            "india",
            "mu",
            "gamma"
        ];

        items.forEach(function(item) {
            ai.addElement(item);
        });

        var expected = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "G",
            "I",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "T",
            "Z"
        ];

        test.deepEqual(ai.getBucketLabels(), expected);
        test.done();
    },

    testAlphaIndexGetAllBucketLabels_deDE: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "de-DE"
        });

        test.ok(ai);

        var items = [
            "omicron",
            "beta",
            "echo",
            "nu",
            "iota",
            "delta",
            "alpha",
            "lambda",
            "alpha", // doubled
            "theta",
            "kappa",
            "chi",
            "phi",
            "zeta",
            "bravo",
            "epsilon",
            "eta",
            "india",
            "mu",
            "gamma"
        ];

        var expected = [
            "*",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            "#"
        ];

        test.deepEqual(ai.getAllBucketLabels(), expected);
        test.done();
    },

    testAlphaIndexDEDEStandardStyle: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "de-DE",
            style: "standard" //"latin"
        });

        test.ok(ai);

        var items = [
            "Jürgen",
            "Georg",
            "Matthias",
            "Heinz",
            "Fritz",
            "Hermann",
            "Josef",
            "Karl",
            "Heinrich",
            "Ulrich"
        ];

        items.forEach(function(item) {
            ai.addElement(item);
        });

        var expected = [
            {
                label: "F",
                elements: ["Fritz"]
            },
            {
                label: "G",
                elements: ["Georg"]
            },
            {
                label: "H",
                elements: ["Heinrich", "Heinz", "Hermann"]
            },
            {
                label: "J",
                elements: ["Josef", "Jürgen"]
            },
            {
                label: "K",
                elements: ["Karl"]
            },
            {
                label: "M",
                elements: ["Matthias"]
            },
            {
                label: "U",
                elements: ["Ulrich"]
            }
        ];

        test.deepEqual(ai.getAllBuckets(), expected);
        test.done();
    },

    testAlphaIndexDEDEPhonebookStyle: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "de-DE",
            style: "phonebook"
        });

        test.ok(ai);

        var items = [
            "Jürgen",
            "Georg",
            "Matthias",
            "Heinz",
            "Uelrich",
            "Fritz",
            "Hermann",
            "Josef",
            "Karl",
            "Heinrich",
            "Ülrich",
            "Ulrich",
            "Julia",
            "Juan",
            "Udrich",
            "Juergen",
            "Ualrich",
            "Judrich"
        ];

        items.forEach(function(item) {
            ai.addElement(item);
        });

        var expected = [
            {
                label: "F",
                elements: ["Fritz"]
            },
            {
                label: "G",
                elements: ["Georg"]
            },
            {
                label: "H",
                elements: ["Heinrich", "Heinz", "Hermann"]
            },
            {
                label: "J",
                elements: ["Josef", "Juan", "Judrich", "Juergen", "Julia", "Jürgen"]
            },
            {
                label: "K",
                elements: ["Karl"]
            },
            {
                label: "M",
                elements: ["Matthias"]
            },
            {
                label: "U",
                elements: ["Ualrich", "Udrich", "Uelrich", "Ulrich", "Ülrich"]
            }
        ];

        test.deepEqual(ai.getAllBuckets(), expected);
        test.done();
    },

    testAlphaIndexDEDEDictionaryStyle: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "de-DE",
            style: "dictionary"
        });

        test.ok(ai);

        var items = [
            "Jürgen",
            "Georg",
            "Matthias",
            "Heinz",
            "Uelrich",
            "Fritz",
            "Hermann",
            "Josef",
            "Karl",
            "Heinrich",
            "Ülrich",
            "Ulrich",
            "Julia",
            "Juan",
            "Udrich",
            "Juergen",
            "Ualrich",
            "Judrich"
        ];

        items.forEach(function(item) {
            ai.addElement(item);
        });

        var expected = [
            {
                label: "F",
                elements: ["Fritz"]
            },
            {
                label: "G",
                elements: ["Georg"]
            },
            {
                label: "H",
                elements: ["Heinrich", "Heinz", "Hermann"]
            },
            {
                label: "J",
                elements: ["Josef", "Juan", "Judrich", "Juergen", "Julia","Jürgen"]
            },
            {
                label: "K",
                elements: ["Karl"]
            },
            {
                label: "M",
                elements: ["Matthias"]
            },
            {
                label: "U",
                elements: ["Ualrich", "Udrich", "Uelrich", "Ulrich", "Ülrich"]
            }
        ];

        test.deepEqual(ai.getAllBuckets(), expected);
        test.done();
    },

    testAlphaIndexDEDEMixedScriptTest1: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "de-DE",
            style:"phonebook"
        });

        test.ok(ai);

        var items = [
            "Jürgen",
            "Georg",
            "Matthias",
            "Heinz",
            "Uelrich",
            "مخزن",
            "ßabcd",
            "четверг",
            "연구소",
            "김철수"
        ];

        items.forEach(function(item) {
            ai.addElement(item);
        });

        var expected = [
            {
                label: "G",
                elements: ["Georg"]
            },
            {
                label: "H",
                elements: ["Heinz"]
            },
            {
                label: "J",
                elements: ["Jürgen"]
            },
            {
                label: "M",
                elements: ["Matthias"]
            },
            {
                label: "S",
                elements: ["ßabcd"]
            },
            {
                label: "U",
                elements: ["Uelrich"]
            },
            {
                label: "#",
                elements: ["четверг", "مخزن", "김철수", "연구소"]
            }
        ];

        test.deepEqual(ai.getAllBuckets(), expected);
        test.done();
    },

    testAlphaIndexDEDEMixedScriptTest2: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "de-DE",
            style:"dictionary"
        });

        test.ok(ai);

        var items = [
            "Jürgen",
            "Georg",
            "Matthias",
            "Heinz",
            "Uelrich",
            "مخزن",
            "ßabcd",
            "четверг",
            "연구소",
            "김철수"
        ];

        items.forEach(function(item) {
            ai.addElement(item);
        });

        var expected = [
            {
                label: "G",
                elements: ["Georg"]
            },
            {
                label: "H",
                elements: ["Heinz"]
            },
            {
                label: "J",
                elements: ["Jürgen"]
            },
            {
                label: "M",
                elements: ["Matthias"]
            },
            {
                label: "S",
                elements: ["ßabcd"]
            },
            {
                label: "U",
                elements: ["Uelrich"]
            },
            {
                label: "#",
                elements: ["четверг", "مخزن", "김철수", "연구소"]
            }
        ];

        test.deepEqual(ai.getAllBuckets(), expected);
        test.done();
    }

};
