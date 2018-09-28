/*
 * testcollation_de.js - test the Collator object in German
 * 
 * Copyright © 2014-2015,2017, JEDLSoft
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

if (typeof(Collator) === "undefined") {
    var Collator = require("../../lib/Collator.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testcollation_de = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJSCollatorPhonebookQuatAE_de: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "de-DE",
            useNative: false,
            sensitivity: "quaternary",
            style: "phonebook",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // aa ae äa äz af
        test.ok("aa < ae",  col.compare("aa", "ae") < 0);
        test.ok("ae < äa",  col.compare("ae", "äa") < 0);
        test.ok("äa < äz", col.compare("äa", "äz") < 0);
        test.ok("äz < af",  col.compare("äz", "af") < 0);
        test.done();
    },
    
    testJSCollatorPhonebookQuatOE_de: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "de-DE",
            useNative: false,
            sensitivity: "quaternary",
            style: "phonebook",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // oa oe öa öz of
        test.ok("oa < oe",  col.compare("oa", "oe") < 0);
        test.ok("oe < öa",  col.compare("oe", "öa") < 0);
        test.ok("öa < öz", col.compare("öa", "öz") < 0);
        test.ok("öz < of",  col.compare("öz", "of") < 0);
        test.done();
    },
    
    testJSCollatorPhonebookQuatUE_de: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "de-DE",
            useNative: false,
            sensitivity: "quaternary",
            style: "phonebook",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // ua ue üa üz uf
        test.ok("ua < ue",  col.compare("ua", "ue") < 0);
        test.ok("ue < üa",  col.compare("ue", "üa") < 0);
        test.ok("üa < üz", col.compare("üa", "üz") < 0);
        test.ok("üz < uf",  col.compare("üz", "uf") < 0);
        test.done();
    },
    
    // differences in umlauted characters should be primary differences
    
    testJSCollatorPhonebookPrimaryAE_de: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "de-DE",
            useNative: false,
            sensitivity: "primary",
            style: "phonebook",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // aa ae äa äz af
        test.ok("aa < ae",  col.compare("aa", "ae") < 0);
        test.ok("ae < äa",  col.compare("ae", "äa") < 0);
        test.ok("äa < äz", col.compare("äa", "äz") < 0);
        test.ok("äz < af",  col.compare("äz", "af") < 0);
        test.done();
    },
    
    testJSCollatorPhonebookPrimaryOE_de: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "de-DE",
            useNative: false,
            sensitivity: "primary",
            style: "phonebook",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // oa oe öa öz of
        test.ok("oa < oe",  col.compare("oa", "oe") < 0);
        test.ok("oe < öa",  col.compare("oe", "öa") < 0);
        test.ok("öa < öz", col.compare("öa", "öz") < 0);
        test.ok("öz < of",  col.compare("öz", "of") < 0);
        test.done();
    },
    
    testJSCollatorPhonebookPrimaryUE_de: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "de-DE",
            useNative: false,
            sensitivity: "primary",
            style: "phonebook",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // ua ue üa üz uf
        test.ok("ua < ue",  col.compare("ua", "ue") < 0);
        test.ok("ue < üa",  col.compare("ue", "üa") < 0);
        test.ok("üa < üz", col.compare("üa", "üz") < 0);
        test.ok("üz < uf",  col.compare("üz", "uf") < 0);
        test.done();
    },
    
    testCollatorPhonebookdeDECase: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "de-DE",
            useNative: false,
            sensitivity: "case",
            usage: "sort",
            style: "phonebook"
        });
        test.ok(typeof(col) !== "undefined");
    
        var input = [
            "Flüße",
            "Montags",
            "Sonntag",
            "Flüsse",
            "fuße",
            "flüße",
            "Montag",
            "Dienstag",
            "Januar",
            "Februar",
            "März",
            "Fuße",
            "Flusse",
            "flusse",
            "flüsse",
            "Fluße",
            "Fuß"
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
            "Dienstag",
            "Februar",
            "Flüsse",
            "Flüße",
            "Flusse",
            "Fluße",
            "Fuß",
            "Fuße",
            "flüsse",
            "flüße",
            "flusse",
            "fuße",
            "Januar",
            "März",
            "Montag",
            "Montags",
            "Sonntag"                        
        ];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorPhonebookdeDEVariant: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "de-DE",
            useNative: false,
            sensitivity: "variant",
            upperFirst: true,
            usage: "sort",
            style: "phonebook"
        });
        test.ok(typeof(col) !== "undefined");
    
        var input = [
            "Sonntag",
            "Montags",
            "Dienstag",
            "Januar",
            "Februar",
            "März",
            "Fuße",
            "Fluße",
            "Flusse",
            "flusse",
            "Montag",
            "fluße",
            "flüße",
            "flüsse"
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
            "Dienstag",
            "Februar",
            "Flusse",
            "Fluße",
            "Fuße",
            "flüsse",
            "flüße",
            "flusse",
            "fluße",
            "Januar",
            "März",
            "Montag",
            "Montags",
            "Sonntag"                        
        ];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testJSCollatorDictionaryQuatAE_de: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "de-DE",
            useNative: false,
            sensitivity: "quaternary",
            style: "dictionary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // aa ae af az äa äz
        test.ok("aa < ae",  col.compare("aa", "ae") < 0);
        test.ok("ae < af",  col.compare("ae", "af") < 0);
        test.ok("af < az",  col.compare("af", "az") < 0);
        test.ok("az < äa",  col.compare("az", "äa") < 0);
        test.ok("aa < äa",  col.compare("aa", "äa") < 0);
        test.ok("äa < äz", col.compare("äa", "äz") < 0);
        test.done();
    },
    
    testJSCollatorDictionaryQuatOE_de: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "de-DE",
            useNative: false,
            sensitivity: "quaternary",
            style: "dictionary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // oa oe of oz öa öz 
        test.ok("oa < oe",  col.compare("oa", "oe") < 0);
        test.ok("oe < of",  col.compare("oe", "of") < 0);
        test.ok("of < oz",  col.compare("of", "oz") < 0);
        test.ok("oz < öa",  col.compare("oz", "öa") < 0);
        test.ok("oa < öa",  col.compare("oa", "öa") < 0);
        test.ok("öa < öz", col.compare("öa", "öz") < 0);
        test.done();
    },
    
    testJSCollatorDictionaryQuatUE_de: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "de-DE",
            useNative: false,
            sensitivity: "quaternary",
            style: "dictionary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // ua ue uf uz üa üz 
        test.ok("ua < ue",  col.compare("ua", "ue") < 0);
        test.ok("ua < uf",  col.compare("ua", "uf") < 0);
        test.ok("uf < uz",  col.compare("uf", "uz") < 0);
        test.ok("uz < üa",  col.compare("uz", "üa") < 0);
        test.ok("ua < üa",  col.compare("ua", "üa") < 0);
        test.ok("üa < üz", col.compare("üa", "üz") < 0);
        test.done();
    },
    
    testJSCollatorDictionaryPrimaryAE_de: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "de-DE",
            useNative: false,
            sensitivity: "primary",
            style: "dictionary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // aa ae af az äa äz
        test.ok("aa < ae",  col.compare("aa", "ae") < 0);
        test.ok("ae < af",  col.compare("ae", "af") < 0);
        test.ok("af < az",  col.compare("af", "az") < 0);
        test.ok("az > äa",  col.compare("az", "äa") > 0);
        test.ok("aa = äa",  col.compare("aa", "äa") === 0);
        test.ok("äa < äz", col.compare("äa", "äz") < 0);
        test.done();
    },
    
    testJSCollatorDictionaryPrimaryOE_de: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "de-DE",
            useNative: false,
            sensitivity: "primary",
            style: "dictionary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // oa oe of oz öa öz 
        test.ok("oa < oe",  col.compare("oa", "oe") < 0);
        test.ok("oe < of",  col.compare("oe", "of") < 0);
        test.ok("of < oz",  col.compare("of", "oz") < 0);
        test.ok("oz > öa",  col.compare("oz", "öa") > 0);
        test.ok("oa = öa",  col.compare("oa", "öa") === 0);
        test.ok("öa < öz", col.compare("öa", "öz") < 0);
        test.done();
    },
    
    testJSCollatorDictionaryPrimaryUE_de: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "de-DE",
            useNative: false,
            sensitivity: "primary",
            style: "dictionary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // ua ue uf uz üa üz 
        test.ok("ua < ue",  col.compare("ua", "ue") < 0);
        test.ok("ua < uf",  col.compare("ua", "uf") < 0);
        test.ok("uf < uz",  col.compare("uf", "uz") < 0);
        test.ok("uz > üa",  col.compare("uz", "üa") > 0);
        test.ok("ua = üa",  col.compare("ua", "üa") === 0);
        test.ok("üa < üz", col.compare("üa", "üz") < 0);
        test.done();
    },
    
    testCollatorDictionarydeDECase: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "de-DE",
            useNative: false,
            sensitivity: "case",
            usage: "sort",
            style: "dictionary"
        });
        test.ok(typeof(col) !== "undefined");
    
        var input = [
            "Flüße",
            "Montags",
            "Sonntag",
            "Flüsse",
            "fuße",
            "flüße",
            "Montag",
            "Dienstag",
            "Januar",
            "Februar",
            "März",
            "Fuße",
            "Flusse",
            "flusse",
            "flüsse",
            "Fluße",
            "Fuß"
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
            "Dienstag",
            "Februar",
            "Flusse",
            "Fluße",
            "Flüsse",
            "Flüße",
            "Fuß",
            "Fuße",
            "flusse",
            "flüsse",
            "flüße",
            "fuße",
            "Januar",
            "März",
            "Montag",
            "Montags",
            "Sonntag"                        
        ];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorDictionarydeDEPrimary: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "de-DE",
            useNative: false,
            sensitivity: "primary",
            upperFirst: true,
            usage: "sort",
            style: "dictionary"
        });
        test.ok(typeof(col) !== "undefined");
    
        var input = [
            "Sonntag",
            "Montags",
            "Dienstag",
            "Januar",
            "Februar",
            "März",
            "Fuße",
            "Fluße",
            "Flusse",
            "flusse",
            "Montag",
            "fluße",
            "flüße",
            "flüsse"
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
            "Dienstag",
            "Februar",
            "Flusse",
            "Fluße",
            "Fuße",
            "flusse",
            "fluße",
            "flüsse",
            "flüße",
            "Januar",
            "März",
            "Montag",
            "Montags",
            "Sonntag"                        
        ];
    
        test.deepEqual(input, expected);
        test.done();
    }
};
