/*
 * testcollation_fr.js - test the Collator object in French
 *
 * Copyright © 2013-2014, 2017-2018, JEDLSoft
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
if (typeof(Collator) === "undefined") {
    var Collator = require("../../lib/Collator.js");
}

module.exports.testcollation_fr = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testCollatorNativefrFRCase: function(test) {
        // only test on platforms that support the new Intl class natively
        if (typeof(Intl) === 'undefined') {
            test.done();
            return;
        }
        var col = new Collator({
            locale: "fr-FR",
            sensitivity: "case"
        });
        test.expect(2);
        test.ok(typeof(col) !== "undefined");

        var input = [
            "déjà",
            "Meme",
            "deja",
            "même",
            "dejà",
            "bpef",
            "bœg",
            "Boef",
            "Mémé",
            "boef",
            "bnef",
            "pêche",
            "pèché",
            "pêché",
            "pêche",
            "pêché"
        ];

        input.sort(col.getComparator());

        var expected = [
            "bnef",
            "Boef",
            "boef",
            "bœg",
            "bpef",
            "déjà",
            "deja",
            "dejà",
            "Meme",
            "Mémé",
            "même",
            "pêche",
            "pèché",
            "pêché",
            "pêche",
            "pêché"
        ];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorNativefrFRVariant: function(test) {
        // only test on platforms that support the new Intl class natively
        if (typeof(Intl) === 'undefined') {
            test.done();
            return;
        }

        var col = new Collator({
            locale: "fr-FR",
            sensitivity: "variant",
            frenchAccents: true
        });
        test.expect(2);
        test.ok(typeof(col) !== "undefined");

        var input = [
            "déjà",
            "Meme",
            "pèche",
            "deja",
            "même",
            "dejà",
            "pêche",
            "bpef",
            "bœg",
            "pèché",
            "Boef",
            "Mémé",
            "bœf",
            "pêchê",
            "boef",
            "bnef",
            "pêché"
        ];

        input.sort(col.getComparator());

        // does not deal with french accents properly yet
        var expected = [
            "bnef",
            "Boef",
            "boef",
            "bœf",
            "bœg",
            "bpef",
            "deja",
            "dejà",
            "déjà",
            "Meme",
            "Mémé",
            "même",
            "pèche",
            "pèché",
            "pêche",
            "pêché",
            "pêchê"
        ];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorNativefrCACase: function(test) {
        // only test on platforms that support the new Intl class natively
        if (typeof(Intl) === 'undefined') {
            test.done();
            return;
        }
        var col = new Collator({
            locale: "fr-CA",
            sensitivity: "case"
        });
        test.expect(2);
        test.ok(typeof(col) !== "undefined");

        var input = [
            "déjà",
            "Meme",
            "deja",
            "même",
            "dejà",
            "bpef",
            "bœg",
            "Boef",
            "Mémé",
            "boef",
            "bnef",
            "pêche",
            "pèché",
            "pêché",
            "pêche",
            "pêché"
        ];

        input.sort(col.getComparator());

        var expected = [
            "bnef",
            "Boef",
            "boef",
            "bœg",
            "bpef",
            "déjà",
            "deja",
            "dejà",
            "Meme",
            "Mémé",
            "même",
            "pêche",
            "pèché",
            "pêché",
            "pêche",
            "pêché"
        ];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorNativefrCAVariant: function(test) {
        // only test on platforms that support the new Intl class natively and the French sorting rules
        if (typeof(Intl) === 'undefined' || Intl.Collator.supportedLocalesOf(["fr"]).indexOf("fr") === -1) {
            test.done();
            return;
        }
        var col = new Collator({
            locale: "fr-CA",
            sensitivity: "variant"
        });
        test.expect(2);
        test.ok(typeof(col) !== "undefined");

        var input = [
            "déjà",
            "Meme",
            "deja",
            "même",
            "dejà",
            "bpef",
            "bœg",
            "Boef",
            "Mémé",
            "bœf",
            "boef",
            "bnef",
            "pêche",
            "pèché",
            "pêché",
            "pêche",
            "pêché"
        ];

        input.sort(col.getComparator());

        var expected = [
            "bnef",
            "Boef",
            "boef",
            "bœf",
            "bœg",
            "bpef",
            "deja",
            "dejà",
            "déjà",
            "Meme",
            "même",
            "Mémé",
            "pêche",
            "pêche",
            "pèché",
            "pêché",
            "pêché"
        ];

        test.deepEqual(input, expected);
        test.done();
    }
};