/*
 * testcollation_es.js - test the Collator object in Spanish
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
    var Collator = require("../../../lib/Collator.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testcollation_es = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJSCollatorTraditionalQuatCH_es: function(test) {
        var col = new Collator({
            locale: "es-ES",
            useNative: false,
            sensitivity: "quaternary",
            style: "traditional"
        });
    
        test.expect(6);
        test.ok(typeof(col) !== "undefined");
    
        // a b c ch d
        test.ok("a < b",  col.compare("a", "b") < 0);
        test.ok("b < c",  col.compare("b", "c") < 0);
        test.ok("ca < ch", col.compare("ca", "ch") < 0);
        test.ok("cz < ch",  col.compare("cz", "ch") < 0);
        test.ok("ch < d",  col.compare("ch", "d") < 0);
        test.done();
    },
    
    testJSCollatorTraditionalQuatLL_es: function(test) {
        var col = new Collator({
            locale: "es-ES",
            useNative: false,
            sensitivity: "quaternary",
            style: "traditional"
        });
    
        test.expect(6);
        test.ok(typeof(col) !== "undefined");
    
        // k l ll m
        test.ok("k < l",  col.compare("k", "l") < 0);
        test.ok("l < ll",  col.compare("l", "ll") < 0);
        test.ok("la < ll", col.compare("la", "ll") < 0);
        test.ok("lz < ll",  col.compare("lz", "ll") < 0);
        test.ok("ll < m",  col.compare("ll", "m") < 0);
        test.done();
    },
    
    testJSCollatorTraditionalQuatEnye_es: function(test) {
        var col = new Collator({
            locale: "es-ES",
            useNative: false,
            sensitivity: "quaternary",
            style: "traditional"
        });
    
        test.expect(6);
        test.ok(typeof(col) !== "undefined");
    
        // m n ñ o
        test.ok("m < n",  col.compare("m", "n") < 0);
        test.ok("n < ñ",  col.compare("n", "ñ") < 0);
        test.ok("ñ < ñ (combining)",  col.compare("ñ", "ñ") < 0);
        test.ok("ñ (combining) < o", col.compare("ñ", "o") < 0);
        test.ok("ñ < o", col.compare("ñ", "o") < 0);
        test.done();
    },
    
    // differences in ch rr ll and ñ should be primary differences
    
    testJSCollatorTraditionalPrimaryCH_es: function(test) {
        var col = new Collator({
            locale: "es-ES",
            useNative: false,
            sensitivity: "primary",
            style: "traditional",
            usage: "search"
        });
    
        test.expect(6);
        test.ok(typeof(col) !== "undefined");
    
        // a b c ch d
        test.ok("a < b",  col.compare("a", "b") < 0);
        test.ok("b < c",  col.compare("b", "c") < 0);
        test.ok("ca < ch", col.compare("ca", "ch") < 0);
        test.ok("cz < ch",  col.compare("cz", "ch") < 0);
        test.ok("ch < d",  col.compare("ch", "d") < 0);
        test.done();
    },
    
    testJSCollatorTraditionalPrimaryLL_es: function(test) {
        var col = new Collator({
            locale: "es-ES",
            useNative: false,
            sensitivity: "primary",
            style: "traditional",
            usage: "search"
        });
    
        test.expect(6);
        test.ok(typeof(col) !== "undefined");
    
        // k l ll m
        test.ok("k < l",  col.compare("k", "l") < 0);
        test.ok("l < ll",  col.compare("l", "ll") < 0);
        test.ok("la < ll", col.compare("la", "ll") < 0);
        test.ok("lz < ll",  col.compare("lz", "ll") < 0);
        test.ok("ll < m",  col.compare("ll", "m") < 0);
        test.done();
    },
    
    testJSCollatorTraditionalPrimaryEnye_es: function(test) {
        var col = new Collator({
            locale: "es-ES",
            useNative: false,
            sensitivity: "primary",
            style: "traditional",
            usage: "search"
        });
    
        test.expect(5);
        test.ok(typeof(col) !== "undefined");
    
        // m n ñ o
        test.ok("m < n",  col.compare("m", "n") < 0);
        test.ok("n < ñ",  col.compare("n", "ñ") < 0);
        test.ok("ñ = ñ (combining)",  col.compare("ñ", "ñ") === 0);
        test.ok("ñ < o", col.compare("ñ", "o") < 0);
        test.done();
    },
    
    testCollatorSortWithCase_es: function(test) {
        var col = new Collator({
            locale: "es-ES",
            sensitivity: "tertiary",
            usage: "sort",
            style: "traditional",
            useNative: false
        });
        test.expect(2);
        test.ok(typeof(col) !== "undefined");
    
        var input = [
            "nortenado",
            "chicharones",
            "lave",
            "lugar",
            "calle",
            "mestizo",
            "calabria",
            "czeke",
            "baila",
            "Navidad",
            "norteña",
            "Mestizo",
            "nortenudo",
            "color",
            "llave",
            "calsificasion"
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
            "baila",
            "calabria",
            "calsificasion",
            "calle",
            "color",
            "czeke",
            "chicharones",
            "lave",
            "lugar",
            "llave",
            "Mestizo",
            "mestizo",
            "Navidad",
            "nortenado",
            "nortenudo",
            "norteña"
        ];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorWithVariants_es: function(test) {
        var col = new Collator({
            locale: "es-ES",
            sensitivity: "tertiary",
            usage: "sort",
            style: "traditional",
            useNative: false
        });
        test.expect(2);
        test.ok(typeof(col) !== "undefined");
    
        var input = [
            "nortenado",
            "chicharones",
            "lugar",
            "calle",
            "mestizo",
            "calabria",
            "czeke",
            "baila",
            "Navidad",
            "norteña",
            "Mestizo",
            "nortenudo",
            "color",
            "llave",
            "norteña",
            "lave",
            "calsificasion"
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
            "baila",
            "calabria",
            "calsificasion",
            "calle",
            "color",
            "czeke",
            "chicharones",
            "lave",
            "lugar",
            "llave",
            "Mestizo",
            "mestizo",
            "Navidad",
            "nortenado",
            "nortenudo",
            "norteña",
            "norteña"
        ];
    
        test.deepEqual(input, expected);
        test.done();
    }
};