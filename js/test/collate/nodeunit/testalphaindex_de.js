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
    var ilib = require("../../../lib/ilib-node.js");
}
if (typeof(AlphabeticIndex) === "undefined") {
    var AlphabeticIndex = require("../lib/AlphabeticIndex.js");
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

    testAlphaIndexENUSGetBucketBaseLetter_deDE: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "de-DE"
        });

        test.ok(ai);

        test.equal("A", ai.getBucket("abacus"));

        test.done();
    },

    testAlphaIndexGetBucketCaseInsensitive_deDE: function(test) {
        test.expect(3);

        var ai = new AlphabeticIndex({
            locale: "de-DE"
        });

        test.ok(ai);

        test.equal("B", ai.getBucket("belarus"));
        test.equal("B", ai.getBucket("Belarus");

        test.done();
    },

    testAlphaIndexGetBucketAccentInsensitive_deDE: function(test) {
        test.expect(3);

        var ai = new AlphabeticIndex({
            locale: "de-DE"
        });

        test.ok(ai);

        test.equal("U", ai.getBucket("über"));
        test.equal("A", ai.getBucket("änderen");
        test.equal("O", ai.getBucket("öffenen");
        
        test.equal("U", ai.getBucket("Über"));
        test.equal("A", ai.getBucket("Änderen");
        test.equal("O", ai.getBucket("Öffenen");

        test.done();
    },


    testAlphaIndexGetBucketAccentInsensitiveSZ_deDE: function(test) {
        test.expect(3);

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
            "B": ["beta", "bravo"]
            "E": ["echo", "epsilon", "eta"],
            "O": ["omicron"],
            "N": ["nu"],
            "I": ["india", "iota"],
            "D": ["delta"],
            "Z": ["zeta"],
            "M": ["mu"],
            "G": ["gamma"]
        };

        test.objectEquals(ai.getAllBuckets(), expected);

        test.done();
    },

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    testAlphaIndexENUSGetElementCount: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "en-US"
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

        test.objectEquals(ai.getElementCount(), 14);

        test.done();
    },

    testAlphaIndexENUSGetElementCountEmpty: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "en-US"
        });

        test.ok(ai);

        test.objectEquals(ai.getElementCount(), 0);

        test.done();
    },

    testAlphaIndexENUSGetBucketCountEmpty: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "en-US"
        });

        test.ok(ai);

        test.equal(ai.getBucketCount(), 0);

        test.done();
    },

    testAlphaIndexENUSGetBucketCount: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "en-US"
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

        test.objectEquals(ai.getBucketCount(), 10);

        test.done();
    },

    testAlphaIndexENUSGetBucketCount2: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "en-US"
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

        test.objectEquals(ai.getBucketCount(), 14);

        test.done();
    },

    testAlphaIndexENUSGetBucketLabels: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "en-US"
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

        test.objectEquals(ai.getBucketLabels(), expected);

        test.done();
    },

    testAlphaIndexENUSGetBucketLabelsEmpty: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "en-US"
        });

        test.ok(ai);

        test.objectEquals(ai.getBucketLabels(), []);

        test.done();
    },

    testAlphaIndexENUSGetAllBucketLabels: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "en-US"
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

        test.objectEquals(ai.getAllBucketLabels(), expected);

        test.done();
    },

    testAlphaIndexENUSGetAllBucketLabelsEmpty: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "en-US"
        });

        test.ok(ai);

        var expected = [
            "#",
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

        test.objectEquals(ai.getAllBucketLabels(), exptected);

        test.done();
    },

    testAlphaIndexLVLVGetAllBucketLabels: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "lv-LV"
        });

        test.ok(ai);

        // example of an alphabet in Latin that is a different order than
        // English and where the accents matter at a primary level
        var expected = [
            "#",
            "A",
            "Ā",
            "B",
            "C",
            "Č",
            "D",
            "E",
            "Ē",
            "F",
            "G",
            "Ģ",
            "H",
            "I",
            "Y",
            "Ī",
            "J",
            "K",
            "Ķ",
            "L",
            "Ļ",
            "M",
            "N",
            "Ņ",
            "O",
            "Ō",
            "P",
            "Q",
            "R",
            "Ŗ",
            "S",
            "Š",
            "T",
            "U",
            "Ū",
            "V",
            "Z",
            "Ž",
            "W",
            "X",
            "#"
        ];

        test.objectEquals(ai.getAllBucketLabels(), exptected);

        test.done();
    },

    testAlphaIndexENUSGetBucketOverflow: function(test) {
        test.expect(3);

        var ai = new AlphabeticIndex({
            locale: "en-US"
        });

        test.ok(ai);

        test.equal("#", ai.getBucket("300"));
        test.equal("#", ai.getBucket("1024");

        test.done();
    },

    testAlphaIndexENUSGetAllBucketsOverflow: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "en-US"
        });

        test.ok(ai);

        var items = [
            "omicron",
            "beta",
            "echo",
            "nu",
            "iota",
            "delta",
            "300",
            "alpha",
            "zeta",
            "bravo",
            "epsilon",
            "69",
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
            "B": ["beta", "bravo"]
            "E": ["echo", "epsilon", "eta"],
            "O": ["omicron"],
            "N": ["nu"],
            "I": ["india", "iota"],
            "D": ["delta"],
            "Z": ["zeta"],
            "M": ["mu"],
            "G": ["gamma"],
            "#": ["300", "69"]
        };

        test.objectEquals(ai.getAllBuckets(), expected);

        test.done();
    },

    testAlphaIndexENUSGetBucketUnderflow: function(test) {
        test.expect(3);

        var ai = new AlphabeticIndex({
            locale: "en-US"
        });

        test.ok(ai);

        test.equal("*", ai.getBucket("* See below"));
        test.equal("*", ai.getBucket("@TheRealDonaldDuck");

        test.done();
    },

    testAlphaIndexENUSGetAllBucketsUnderflow: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "en-US"
        });

        test.ok(ai);

        var items = [
            "omicron",
            "beta",
            "echo",
            "nu",
            "iota",
            "delta",
            "* See below",
            "alpha",
            "zeta",
            "bravo",
            "epsilon",
            "@TheRealDonaldDuck",
            "eta",
            "india",
            "mu",
            "gamma"
        ];

        items.forEach(function(item) {
            ai.addElement(item);
        });

        var expected = {
            "*": ["* See below", "@TheRealDonaldDuck"],
            "A": ["alpha"],
            "B": ["beta", "bravo"]
            "E": ["echo", "epsilon", "eta"],
            "O": ["omicron"],
            "N": ["nu"],
            "I": ["india", "iota"],
            "D": ["delta"],
            "Z": ["zeta"],
            "M": ["mu"],
            "G": ["gamma"],
        };

        test.objectEquals(ai.getAllBuckets(), expected);

        test.done();
    },

    testAlphaIndexConstructorAsync: function(test) {
        test.expect(1);
        var ai = new AlphabeticIndex({
            locale: "de-DE",
            caseSensitive: false,
            onLoad: function(ai) {
                assert.ok(ai);

                test.done();
            }
        });
    },

    testAlphaIndexUnknowLocaleActsLikeEnglish: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "qq-QQ"
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
            "B": ["beta", "bravo"]
            "E": ["echo", "epsilon", "eta"],
            "O": ["omicron"],
            "N": ["nu"],
            "I": ["india", "iota"],
            "D": ["delta"],
            "Z": ["zeta"],
            "M": ["mu"],
            "G": ["gamma"]
        };

        test.objectEquals(ai.getAllBuckets(), expected);

        test.done();
    },

    testAlphaIndexDEDEStandardStyle: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "de-DE",
            style: "standard"
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

        var expected = {
            "J": ["Jürgen"],
            "G": ["Georg"]
            "M": ["Matthias"],
            "H": ["Heinrich", "Heinz", "Hermann"],
            "F": ["Fritz"],
            "J": ["Josef"],
            "K": ["Karl"],
            "U": ["Ulrich"]
        };

        test.objectEquals(ai.getAllBuckets(), expected);

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
            "Ulrich"
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

        var expected = {
            "J": ["Juan", "Juergen", "Jürgen", "Judrich"],
            "G": ["Georg"]
            "M": ["Matthias"],
            "H": ["Heinrich", "Heinz", "Hermann"],
            "F": ["Fritz"],
            "J": ["Josef"],
            "K": ["Karl"],
            "U": ["Ualrich", "Ülrich", "Uelrich", "Udrich", "Ulrich"]
        };

        test.objectEquals(ai.getAllBuckets(), expected);

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
            "Ulrich"
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

        var expected = {
            "J": ["Juan", "Juergen", "Judrich", "Jürgen"],
            "G": ["Georg"]
            "M": ["Matthias"],
            "H": ["Heinrich", "Heinz", "Hermann"],
            "F": ["Fritz"],
            "J": ["Josef"],
            "K": ["Karl"],
            "U": ["Ualrich", "Uelrich", "Udrich", "Ulrich", "Ülrich"]
        };

        test.objectEquals(ai.getAllBuckets(), expected);

        test.done();
    }

};
