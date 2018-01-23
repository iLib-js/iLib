/*
 * testcollation_et.js - test the Collator object in Estonian
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
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testcollation_et = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJSCollatorQuatS_et: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "et-EE",
            useNative: false,
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // S Š Z Ž T U V W Õ Ä Ö Ü X Y
        test.ok("S < Š",  col.compare("S", "Š") < 0);
        test.ok("Š < Z",  col.compare("Š", "Z") < 0);
        test.done();
    },
    
    testJSCollatorQuatZ_et: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "et-EE",
            useNative: false,
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // S Š Z Ž T U V W Õ Ä Ö Ü X Y
        test.ok("Z < Ž",  col.compare("Z", "Ž") < 0);
        test.ok("Ž < T",  col.compare("Ž", "T") < 0);
        test.done();
    },
    
    testJSCollatorQuatOAOU_et: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "et-EE",
            useNative: false,
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // S Š Z Ž T U V W Õ Ä Ö Ü X Y
        test.ok("O < Õ",  col.compare("O", "Õ") < 0);
        test.ok("Õ < Ä",  col.compare("Õ", "Ä") < 0);
        test.ok("Ä < Ö",  col.compare("Ä", "Ö") < 0);
        test.ok("Ö < Ü",  col.compare("Ö", "Ü") < 0);
        test.ok("Ü < X",  col.compare("Ü", "X") < 0);
        test.ok("X < Y",  col.compare("X", "Y") < 0);
        test.done();
    },
    
    testJSCollatorPrimaryS_et: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "et-EE",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // S Š Z Ž T U V W Õ Ä Ö Ü X Y
        test.ok("S < Š",  col.compare("S", "Š") < 0);
        test.ok("Š < Z",  col.compare("Š", "Z") < 0);
        test.done();
    },
    
    testJSCollatorPrimaryZ_et: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "et-EE",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // S Š Z Ž T U V W Õ Ä Ö Ü X Y
        test.ok("Z < Ž",  col.compare("Z", "Ž") < 0);
        test.ok("Ž < T",  col.compare("Ž", "T") < 0);
        test.done();
    },
    
    testJSCollatorPrimaryOAOU_et: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "et-EE",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // S Š Z Ž T U V W Õ Ä Ö Ü X Y
        test.ok("O < Õ",  col.compare("O", "Õ") < 0);
        test.ok("Õ < Ä",  col.compare("Õ", "Ä") < 0);
        test.ok("Ä < Ö",  col.compare("Ä", "Ö") < 0);
        test.ok("Ö < Ü",  col.compare("Ö", "Ü") < 0);
        test.ok("Ü < X",  col.compare("Ü", "X") < 0);
        test.ok("X < Y",  col.compare("X", "Y") < 0);
        test.done();
    },
    
    testJSCollatorQuatLowerS_et: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "et-EE",
            useNative: false,
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // s š z ž t u v w õ ä ö ü x y
        test.ok("s < š",  col.compare("s", "š") < 0);
        test.ok("š < z",  col.compare("š", "z") < 0);
        test.done();
    },
    
    testJSCollatorQuatLowerZ_et: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "et-EE",
            useNative: false,
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // s š z ž t u v w õ ä ö ü x y
        test.ok("z < ž",  col.compare("z", "ž") < 0);
        test.ok("ž < t",  col.compare("ž", "t") < 0);
        test.done();
    },
    
    testJSCollatorQuatoLowerOAOU_et: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "et-EE",
            useNative: false,
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // s š z ž t u v w õ ä ö ü x y
        test.ok("o < õ",  col.compare("o", "õ") < 0);
        test.ok("õ < ä",  col.compare("õ", "ä") < 0);
        test.ok("ä < ö",  col.compare("ä", "ö") < 0);
        test.ok("ö < ü",  col.compare("ö", "ü") < 0);
        test.ok("ü < x",  col.compare("ü", "x") < 0);
        test.ok("x < y",  col.compare("x", "y") < 0);
        test.done();
    },
    
    testJSCollatorPrimaryLowerS_et: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "et-EE",
            useNative: false,
            sensitivity: "primary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // s š z ž t u v w õ ä ö ü x y
        test.ok("s < š",  col.compare("s", "š") < 0);
        test.ok("š < z",  col.compare("š", "z") < 0);
        test.done();
    },
    
    testJSCollatorPrimaryLowerZ_et: function(test) {
        test.expect(3);
        var col = new Collator({
            locale: "et-EE",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // s š z ž t u v w õ ä ö ü x y
        test.ok("z < ž",  col.compare("z", "ž") < 0);
        test.ok("ž < t",  col.compare("ž", "t") < 0);
        test.done();
    },
    
    testJSCollatorPrimaryLowerOAOU_et: function(test) {
        test.expect(7);
        var col = new Collator({
            locale: "et-EE",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // s š z ž t u v w õ ä ö ü x y
        test.ok("o < õ",  col.compare("o", "õ") < 0);
        test.ok("õ < ä",  col.compare("õ", "ä") < 0);
        test.ok("ä < ö",  col.compare("ä", "ö") < 0);
        test.ok("ö < ü",  col.compare("ö", "ü") < 0);
        test.ok("ü < x",  col.compare("ü", "x") < 0);
        test.ok("x < y",  col.compare("x", "y") < 0);
        test.done();
    },
    
    testCollatorNativeCase_et: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "et-EE",
            useNative: false,
            sensitivity: "case",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
    
        var input = [
            "zu",
            "Šu",
            "aw",
            "žu",
            "šu",
            "aö",
            "ax",
            "za",
            "su",
            "ža",
            "Su",
            "žž",
            "ao",
            "zz",
            "aÖ",
            "Žo"
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
            "ao",
            "aw",
            "aÖ",
            "aö",
            "ax",
            "Su",
            "su",
            "Šu",
            "šu",
            "za",
            "zz",
            "zu",
            "Žo",
            "ža",
            "žž",
            "žu"
        ];
    
        test.deepEqual(input, expected);
        test.done();
    },
    
    testCollatorNativeVariant_et: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "et-EE",
            useNative: false,
            sensitivity: "variant",
            upperFirst: true,
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
    
        var input = [
            "zu",
            "Šu",
            "aw",
            "žu",
            "šu",
            "aö",
            "ax",
            "za",
            "su",
            "ža",
            "Su",
            "žž",
            "ao",
            "zz",
            "šu",
            "aÖ",
            "Žo"
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
            "ao",
            "aw",
            "aÖ",
            "aö",
            "ax",
            "Su",
            "su",
            "Šu",
            "šu",
            "šu",
            "za",
            "zz",
            "zu",
            "Žo",
            "žž",
            "ža",
            "žu"
        ];
    
        test.deepEqual(input, expected);
        test.done();
    }
    
    
};