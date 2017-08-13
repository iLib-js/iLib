/*
 * testalphaindex.js - test the Alphabetic Index class
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

module.exports.testalphaindex = {
        setUp: function(callback) {
            ilib.clearCache();
            callback();
        },

        testAlphaIndexConstructor: function(test) {
            test.expect(1);
            var ai = new AlphabeticIndex();

            test.ok(ai);

            test.done();
        },

        testAlphaIndexConstructorWithParams: function(test) {
            test.expect(1);
            var ai = new AlphabeticIndex({
                locale: "de-DE",
                caseSensitive: false
            });

            assert.ok(ai);

            test.done();
        },

        testAlphaIndexENUSGetBucketBaseLetter: function(test) {
            test.expect(2);

            var ai = new AlphabeticIndex({
                locale: "en-US"
            });

            test.ok(ai);

            test.equal("A", ai.getBucket("abacus"));

            test.done();
        },

        testAlphaIndexENUSGetBucketCaseInsensitive: function(test) {
            test.expect(3);

            var ai = new AlphabeticIndex({
                locale: "en-US"
            });

            test.ok(ai);

            test.equal("B", ai.getBucket("belarus"));
            test.equal("B", ai.getBucket("Belarus");

            test.done();
        },

        testAlphaIndexENUSGetBucketAccentInsensitive: function(test) {
            test.expect(3);

            var ai = new AlphabeticIndex({
                locale: "en-US"
            });

            test.ok(ai);

            test.equal("E", ai.getBucket("Élan"));
            test.equal("E", ai.getBucket("ëieasdf");

            test.done();
        },


        testAlphaIndexENUSAddElementRightBucket: function(test) {
            test.expect(2);

            var ai = new AlphabeticIndex({
                locale: "en-US"
            });

            test.ok(ai);

            test.equal("A", ai.addElement("abacus"));

            test.done();
        },

        testAlphaIndexENUSAddElementActuallyAdded: function(test) {
            test.expect(6);

            var ai = new AlphabeticIndex({
                locale: "en-US"
            });

            test.ok(ai);

            test.equal("A", ai.addElement("abacus"));

            var buckets = ai.getAllBuckets();

            test.ok(buckets);
            test.ok(buckets.A);

            var a = buckets.A;

            test.equal(a.length, 1);

            test.equal(a[0], "abacus");

            test.done();
        },


        testAlphaIndexENUSAddElementRightBucketCaseInsensitive: function(test) {
            test.expect(3);

            var ai = new AlphabeticIndex({
                locale: "en-US"
            });

            test.ok(ai);

            test.equal("B", ai.addElement("belarus"));
            test.equal("B", ai.addElement("Belarus");

            test.done();
        },

        testAlphaIndexENUSAddElementRightBucketAccentInsensitive: function(test) {
            test.expect(3);

            var ai = new AlphabeticIndex({
                locale: "en-US"
            });

            test.ok(ai);

            test.equal("E", ai.addElement("Élan"));
            test.equal("E", ai.addElement("ëieasdf");

            test.done();
        },

        testAlphaIndexENUSGetAllBuckets: function(test) {
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

};
