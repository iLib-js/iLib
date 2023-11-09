/*
 * testnorm.js - test the Unicode Normalization Algorithm routines
 *
 * Copyright © 2012-2015,2017, JEDLSoft
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
    var ilib = require("../../lib/ilib.js");
}
if (typeof(NormString) === "undefined") {
    var NormString = require("../../lib/NormString.js");
}
if (typeof(normtests) === "undefined") {
    var normtests = require("./normdata.js");
}

if (ilib._getPlatform() === "qt" && typeof normtests === "undefined" ) {
    Qt.include("./normdata.js");
}

if (ilib.isDynData()) {
    NormString.init();
}

function toHexString(string) {
    var i, result = "";

    if (!string) {
        return "";
    }
    for (i = 0; i < string.length; i++) {
        var ch = string.charCodeAt(i).toString(16);
        result += "0000".substring(0, 4-ch.length) + ch;
        if (i < string.length - 1) {
            result += " ";
        }
    }
    return result.toUpperCase();
}

module.exports.testnorm = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testNFD: function(test) {
        normtests.forEach(function (val, index, array) {
            var source = new NormString(val[0]);
            //console.log(index + ": Testing NFD normalization for " + source + " (" + toHexString(source) + ")");

            var nfd = source.normalize("nfd");
            test.equal(toHexString(new NormString(val[2])), toHexString(nfd), "Test NFD for #" + index + " " + source + " (" + toHexString(source) + ")");
        });
        test.done();
    },
    testNFKD: function(test) {
        normtests.forEach(function (val, index, array) {
            var source = new NormString(val[0]);
            //console.log(index + ": Testing NFKD normalization for " + source + " (" + toHexString(source) + ")");

            test.equal(toHexString(new NormString(val[4])), toHexString(source.normalize("nfkd")), "Test NFKD for #" + index + " " + source + " (" + toHexString(source) + ")");
        });
        test.done();
    },
    testNFC: function(test) {
        normtests.forEach(function (val, index, array) {
            var source = new NormString(val[0]);
            //console.log(index + ": Testing NFC normalization for " + source + " (" + toHexString(source) + ")");

            test.equal(toHexString(val[1]), toHexString(source.normalize("nfc")), "Test NFC for #" + index + " " + source + " ("+ toHexString(source) + ")");
        });
        test.done();
    },
    testNFKC: function(test) {
        normtests.forEach(function (val, index, array) {
            var source = new NormString(val[0]);
            //console.log(index + ": Testing NFKC normalization for " + source + " (" + toHexString(source) + ")");

            test.equal(toHexString(val[3]), toHexString(source.normalize("nfkc")), "Test NFKC for #" + index + " " + source + " ("+ toHexString(source) + ")");
        });
        test.done();
    },
    testCharIteratorNormal: function(test) {
        test.expect(8);
        var s = new NormString("aba");
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
        var s = new NormString("aÄa"); // the A umlaut is a decomposed char
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
        var s = new NormString(""); // the A umlaut is a decomposed char
        var it = s.charIterator();

        test.ok(!it.hasNext());
        test.equal(it.next(), undefined);
        test.done();
    },
    testCharIteratorWithSurrogates: function(test) {
        test.expect(10);
        var str = new NormString("a\uD800\uDF02b\uD800\uDC00");

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
        var str = new NormString("a\uD800\uDF02bï\uD800\uDC00"); // the ï is a decomposed i + umlaut

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
        var s = new NormString("aẬa"); // the accented A is a decomposed char with 2 accents
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
        var s = new NormString("À"); // the accented A is a decomposed char
        var it = s.charIterator();

        test.ok(it.hasNext());
        test.equal(it.next(), "À");
        test.ok(!it.hasNext());
        test.equal(it.next(), undefined);
        test.done();
    }
};