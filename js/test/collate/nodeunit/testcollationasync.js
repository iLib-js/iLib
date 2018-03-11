/*
 * testcollationasync.js - test the Collator object asynchronously
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
if (typeof(ElementIterator) === "undefined") {
    var ElementIterator = require("../../../lib/ElementIterator.js");
}
if (typeof(Collator) === "undefined") {
    var Collator = require("../../../lib/Collator.js");
}
if (typeof(CodePointSource) === "undefined") {
    var CodePointSource = require("../../../lib/CodePointSource.js");
}

module.exports.testcollationasync = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testCollatorAsyncConstructorNative: function(test) {
        test.expect(1);
        var col = new Collator({
            sync: false,
            onLoad: function(col) {
                test.ok(typeof(col) !== "undefined");
                test.done();
            }
        });

    },

    testCollatorAsyncDefaultNative: function(test) {
        test.expect(5);
        var col = new Collator({
            sync: false,
            onLoad: function(col) {
                test.ok(typeof(col) !== "undefined");

                // should compare in English
                test.equal(0, col.compare("string", "string"), "equality");
                test.ok("a < b", col.compare("a", "b") < 0);
                test.ok("b < c", col.compare("b", "c") < 0);
                test.ok("c < z", col.compare("c", "z") < 0);
                test.done();
            }
        });

    },

    testCollatorAsyncDefaultCase: function(test) {
        test.expect(5);
        var col = new Collator({
            sync: false,
            onLoad: function(col) {
                test.ok(typeof(col) !== "undefined");
                // netscape and ie do not work properly on some platforms
                var browser = ilib._getBrowser();
                if ((browser === "firefox" &&
                    navigator &&
                    navigator.userAgent &&
                    navigator.userAgent.indexOf("Android")) ||
                    browser === "ie" || browser === "Edge" || browser === "iOS") {
                    // should compare lower-case first within a base character
                    test.ok("a < A", col.compare("a", "A") < 0);
                    test.ok("b < B", col.compare("b", "B") < 0);
                    test.ok("a < Z", col.compare("a", "Z") < 0);
                    test.ok("a < Á", col.compare("a", "Á") < 0);
                } else {
                    // should compare upper-case first within a base character
                    test.ok("A < a", col.compare("A", "a") < 0);
                    test.ok("B < b", col.compare("B", "b") < 0);
                    test.ok("a < Z", col.compare("a", "Z") < 0);
                    test.ok("Á < a", col.compare("A", "a") < 0); // accent is more important than case
                }
                test.done();
            }
        });
    },

    testCollatorAsyncGetComparator: function(test) {
        test.expect(3);
        var col = new Collator({
            sync: false,
            onLoad: function(col) {
                test.ok(typeof(col) !== "undefined");

                // should compare in English
                var func = col.getComparator();
                test.ok(typeof(func) !== "undefined");
                test.equal(typeof(func), "function");
                test.done();
            }
        });
    },


    testCollatorAsyncConstructorJS: function(test) {
        test.expect(1);
        var col = new Collator({
            useNative: false,
            sync: false,
            onLoad: function(col) {
                test.ok(typeof(col) !== "undefined");
                test.done();
            }
        });

    },

    testCollatorAsyncDefaultJS: function(test) {
        test.expect(5);
        var col = new Collator({
            useNative: false,
            sync: false,
            onLoad: function(col) {
                test.ok(typeof(col) !== "undefined");

                // should compare in English
                test.equal(0, col.compare("string", "string"), "equality");
                test.ok("a < b", col.compare("a", "b") < 0);
                test.ok("b < c", col.compare("b", "c") < 0);
                test.ok("c < z", col.compare("c", "z") < 0);
                test.done();
            }
        });

    },


    testCollatorAsyncGetComparatorWorksWithCaseJS: function(test) {
        test.expect(6);
        var col = new Collator({
            useNative: false,
            sync: false,
            onLoad: function(col) {
                test.ok(typeof(col) !== "undefined");

                var func = col.getComparator();
                test.ok(typeof(func) !== "undefined");

                // should compare upper-case first
                test.ok("A < a", func("A", "a") < 0);
                test.ok("B < b", func("B", "b") < 0);
                test.ok("a < Z", func("a", "Z") < 0);
                test.ok("Á < a", func("A", "a") < 0);
                test.done();
            }
        });

    },


    testCollatorAsyncGetSortKeyNative: function(test) {
        if (typeof(Intl) === 'undefined' && Intl) {
            test.done();
            return;
        }
        var col = new Collator({
            sync: false,
            onLoad: function(col) {
                test.expect(2);
                test.ok(typeof(col) !== "undefined");

                // no sort key available when using native...
                test.equal(col.sortKey("string"), "string");
                test.done();
            }
        });

    },

    testCollatorAsyncGetSortKeySimpleUpper: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sync: false,
            onLoad: function(col) {
                test.ok(typeof(col) !== "undefined");

                test.equal(col.sortKey("ABCDEF"), "4204404604804a04c0");
                test.done();
            }
        });

    },

    testCollatorAsyncGetSortKeyMixed: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sync: false,
            onLoad: function(col) {
                test.ok(typeof(col) !== "undefined");

                test.equal(col.sortKey("String"), "6606826425225c24e2");
                test.done();
            }
        });

    },

    testCollatorAsyncWithSort: function(test) {
        test.expect(2);
        var col = new Collator({
            sync: false,
            onLoad: function(col) {
                test.ok(typeof(col) !== "undefined");

                var input = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

                input.sort(col.getComparator());

                var expected = ["e", "i", "o", "p", "q", "r", "t", "u", "w", "y"];

                test.deepEqual(input, expected);
                test.done();
            }
        });
    },

    testCollatorAsyncWithSortJS: function(test) {
        test.expect(2);
        var col = new Collator({
            useNative: false,
            sync: false,
            onLoad: function(col) {
                test.ok(typeof(col) !== "undefined");

                var input = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

                input.sort(col.getComparator());

                var expected = ["e", "i", "o", "p", "q", "r", "t", "u", "w", "y"];

                test.deepEqual(input, expected);
                test.done();
            }
        });
    },

    testCollatorAsyncWithSortUpperFirstJS: function(test) {
        test.expect(2);
        var col = new Collator({
            upperFirst: true,
            useNative: false,
            sync: false,
            onLoad: function(col) {
                test.ok(typeof(col) !== "undefined");

                var input = ["q", "I", "e", "r", "T", "U", "i", "E", "o", "p"];

                input.sort(col.getComparator());

                var expected = ["E", "e", "I", "i", "o", "p", "q", "r", "T", "U"];

                test.deepEqual(input, expected);
                test.done();
            }
        });
    },

    testCollatorAsyncGetAvailableScripts: function(test) {
        test.expect(1);
        test.deepEqual(Collator.getAvailableScripts(), ["Latn"]);
        test.done();
    },

    testCollatorAsyncGetAvailableStyles: function(test) {
        test.expect(1);
        test.deepEqual(Collator.getAvailableStyles(), ["standard"]);
        test.done();
    },

    testCollatorAsyncPhonebookQuatAE_de: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "de-DE",
            useNative: false,
            sensitivity: "quaternary",
            style: "phonebook",
            usage: "search",
            sync: false,
            onLoad: function(col) {
                test.ok(typeof(col) !== "undefined");

                // aa ae äa äz af
                test.ok("aa < ae",  col.compare("aa", "ae") < 0);
                test.ok("ae < äa",  col.compare("ae", "äa") < 0);
                test.ok("äa < äz", col.compare("äa", "äz") < 0);
                test.ok("äz < af",  col.compare("äz", "af") < 0);
                test.done();
            }
        });

    },

    testCollatorAsyncQuat_el: function(test) {
        test.expect(91);
        var col = new Collator({
            locale: "el-GR",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search",
            sync: false,
            onLoad: function(col) {
                test.ok(typeof(col) !== "undefined");

                // Α α Ά Ά ά ά Β β Γ γ Δ δ Ε ε Έ Έ έ έ Ζ ζ Η η Ή Ή ή ή Θ θ Ι ι Ί Ί ί ί Ϊ Ϊ ϊ ϊ ΐ ΐ ί̈ Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Ό Ό ό ό Π π Ρ ρ Σ σ ς Τ τ Υ υ Ύ Ύ ύ ύ Ϋ Ϋ ϋ ϋ ΰ ΰ ύ̈ Φ φ Χ χ Ψ ψ Ω ω Ώ Ώ ώ ώ

                test.ok("Α < α", col.compare("Α", "α") < 0);
                test.ok("α < Ά", col.compare("α", "Ά") < 0);
                test.ok("Ά < Ά", col.compare("Ά", "Ά") < 0);
                test.ok("Ά < ά", col.compare("Ά", "ά") < 0);
                test.ok("ά < ά", col.compare("ά", "ά") < 0);
                test.ok("ά < Β", col.compare("ά", "Β") < 0);
                test.ok("Β < β", col.compare("Β", "β") < 0);
                test.ok("β < Γ", col.compare("β", "Γ") < 0);
                test.ok("Γ < γ", col.compare("Γ", "γ") < 0);
                test.ok("γ < Δ", col.compare("γ", "Δ") < 0);
                test.ok("Δ < δ", col.compare("Δ", "δ") < 0);
                test.ok("δ < Ε", col.compare("δ", "Ε") < 0);
                test.ok("Ε < ε", col.compare("Ε", "ε") < 0);
                test.ok("ε < Έ", col.compare("ε", "Έ") < 0);
                test.ok("Έ < Έ", col.compare("Έ", "Έ") < 0);
                test.ok("Έ < έ", col.compare("Έ", "έ") < 0);
                test.ok("έ < έ", col.compare("έ", "έ") < 0);
                test.ok("έ < Ζ", col.compare("έ", "Ζ") < 0);
                test.ok("Ζ < ζ", col.compare("Ζ", "ζ") < 0);
                test.ok("ζ < Η", col.compare("ζ", "Η") < 0);
                test.ok("Η < η", col.compare("Η", "η") < 0);
                test.ok("η < Ή", col.compare("η", "Ή") < 0);
                test.ok("Ή < Ή", col.compare("Ή", "Ή") < 0);
                test.ok("Ή < ή", col.compare("Ή", "ή") < 0);
                test.ok("ή < ή", col.compare("ή", "ή") < 0);
                test.ok("ή < Θ", col.compare("ή", "Θ") < 0);
                test.ok("Θ < θ", col.compare("Θ", "θ") < 0);
                test.ok("θ < Ι", col.compare("θ", "Ι") < 0);
                test.ok("Ι < ι", col.compare("Ι", "ι") < 0);
                test.ok("ι < Ί", col.compare("ι", "Ί") < 0);
                test.ok("Ί < Ί", col.compare("Ί", "Ί") < 0);
                test.ok("Ί < ί", col.compare("Ί", "ί") < 0);
                test.ok("ί < ί", col.compare("ί", "ί") < 0);
                test.ok("ί < Ϊ", col.compare("ί", "Ϊ") < 0);
                test.ok("Ϊ < Ϊ", col.compare("Ϊ", "Ϊ") < 0);
                test.ok("Ϊ < ϊ", col.compare("Ϊ", "ϊ") < 0);
                test.ok("ϊ < ϊ", col.compare("ϊ", "ϊ") < 0);
                test.ok("ϊ < ΐ", col.compare("ϊ", "ΐ") < 0);
                test.ok("ΐ < ΐ", col.compare("ΐ", "ΐ") < 0);
                test.ok("ΐ < ί̈", col.compare("ΐ", "ί̈") < 0);
                test.ok("ί̈ < Κ", col.compare("ί̈", "Κ") < 0);
                test.ok("Κ < κ", col.compare("Κ", "κ") < 0);
                test.ok("κ < Λ", col.compare("κ", "Λ") < 0);
                test.ok("Λ < λ", col.compare("Λ", "λ") < 0);
                test.ok("λ < Μ", col.compare("λ", "Μ") < 0);
                test.ok("Μ < μ", col.compare("Μ", "μ") < 0);
                test.ok("μ < Ν", col.compare("μ", "Ν") < 0);
                test.ok("Ν < ν", col.compare("Ν", "ν") < 0);
                test.ok("ν < Ξ", col.compare("ν", "Ξ") < 0);
                test.ok("Ξ < ξ", col.compare("Ξ", "ξ") < 0);
                test.ok("ξ < Ο", col.compare("ξ", "Ο") < 0);
                test.ok("Ο < ο", col.compare("Ο", "ο") < 0);
                test.ok("ο < Ό", col.compare("ο", "Ό") < 0);
                test.ok("Ό < Ό", col.compare("Ό", "Ό") < 0);
                test.ok("Ό < ό", col.compare("Ό", "ό") < 0);
                test.ok("ό < ό", col.compare("ό", "ό") < 0);
                test.ok("ό < Π", col.compare("ό", "Π") < 0);
                test.ok("Π < π", col.compare("Π", "π") < 0);
                test.ok("π < Ρ", col.compare("π", "Ρ") < 0);
                test.ok("Ρ < ρ", col.compare("Ρ", "ρ") < 0);
                test.ok("ρ < Σ", col.compare("ρ", "Σ") < 0);
                test.ok("Σ < σ", col.compare("Σ", "σ") < 0);
                test.ok("σ < ς", col.compare("σ", "ς") < 0);
                test.ok("ς < Τ", col.compare("ς", "Τ") < 0);
                test.ok("Τ < τ", col.compare("Τ", "τ") < 0);
                test.ok("τ < Υ", col.compare("τ", "Υ") < 0);
                test.ok("Υ < υ", col.compare("Υ", "υ") < 0);
                test.ok("υ < Ύ", col.compare("υ", "Ύ") < 0);
                test.ok("Ύ < Ύ", col.compare("Ύ", "Ύ") < 0);
                test.ok("Ύ < ύ", col.compare("Ύ", "ύ") < 0);
                test.ok("ύ < ύ", col.compare("ύ", "ύ") < 0);
                test.ok("ύ < Ϋ", col.compare("ύ", "Ϋ") < 0);
                test.ok("Ϋ < Ϋ", col.compare("Ϋ", "Ϋ") < 0);
                test.ok("Ϋ < ϋ", col.compare("Ϋ", "ϋ") < 0);
                test.ok("ϋ < ϋ", col.compare("ϋ", "ϋ") < 0);
                test.ok("ϋ < ΰ", col.compare("ϋ", "ΰ") < 0);
                test.ok("ΰ < ΰ", col.compare("ΰ", "ΰ") < 0);
                test.ok("ΰ < ύ̈", col.compare("ΰ", "ύ̈") < 0);
                test.ok("ύ̈ < Φ", col.compare("ύ̈", "Φ") < 0);
                test.ok("Φ < φ", col.compare("Φ", "φ") < 0);
                test.ok("φ < Χ", col.compare("φ", "Χ") < 0);
                test.ok("Χ < χ", col.compare("Χ", "χ") < 0);
                test.ok("χ < Ψ", col.compare("χ", "Ψ") < 0);
                test.ok("Ψ < ψ", col.compare("Ψ", "ψ") < 0);
                test.ok("ψ < Ω", col.compare("ψ", "Ω") < 0);
                test.ok("Ω < ω", col.compare("Ω", "ω") < 0);
                test.ok("ω < Ώ", col.compare("ω", "Ώ") < 0);
                test.ok("Ώ < Ώ", col.compare("Ώ", "Ώ") < 0);
                test.ok("Ώ < ώ", col.compare("Ώ", "ώ") < 0);
                test.ok("ώ < ώ", col.compare("ώ", "ώ") < 0);
                test.done();
            }
        });

    },

    testCollatorAsyncPriL_ko: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "primary",
            sync: false,
            onLoad: function(col) {
                test.ok(typeof(col) !== "undefined");

                // 가까나다따
                test.ok("가 < 까", col.compare("가", "까") < 0);
                test.ok("까 < 나", col.compare("까", "나") < 0);
                test.ok("나 < 다", col.compare("나", "다") < 0);
                test.ok("다 < 따", col.compare("다", "따") < 0);
                test.done();
            }
        });

    },

    testCollatorAsyncQuatHanzi_zh_Hans: function(test) {
        test.expect(21);
        var col = new Collator({
            locale: "zh-Hans-CN",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search",
            sync: false,
            onLoad: function(col) {
                // Hanzi are all primary differences from each other

                test.ok(typeof(col) !== "undefined");

                test.ok("阿 < 拜", col.compare("阿", "拜") < 0);
                test.ok("拜 < 𩑻", col.compare("拜", "𩑻") < 0);
                test.ok("𩑻 < 䯋", col.compare("𩑻", "䯋") < 0);
                test.ok("䯋 < 𧀱", col.compare("䯋", "𧀱") < 0);
                test.ok("𧀱 < 捶", col.compare("𧀱", "捶") < 0);
                test.ok("捶 < 峒", col.compare("捶", "峒") < 0);
                test.ok("峒 < 㶥", col.compare("峒", "㶥") < 0);
                test.ok("㶥 < 㜳", col.compare("㶥", "㜳") < 0);
                test.ok("㜳 < 䌸", col.compare("㜳", "䌸") < 0);
                test.ok("䌸 < 䢧", col.compare("䌸", "䢧") < 0);
                test.ok("䢧 < 苜", col.compare("䢧", "苜") < 0);
                test.ok("苜 < 肶", col.compare("苜", "肶") < 0);
                test.ok("肶 < 埁", col.compare("肶", "埁") < 0);
                test.ok("埁 < 泩", col.compare("埁", "泩") < 0);
                test.ok("泩 < 窱", col.compare("泩", "窱") < 0);
                test.ok("窱 < 扤", col.compare("窱", "扤") < 0);
                test.ok("扤 < 辥", col.compare("扤", "辥") < 0);
                test.ok("辥 < 䓰", col.compare("辥", "䓰") < 0);
                test.ok("䓰 < 赵", col.compare("䓰", "赵") < 0);
                test.ok("赵 < 蓙", col.compare("赵", "蓙") < 0);
                test.done();
            }
        });

    },

    testCollatorAsyncTraditionalQuatCH_es: function(test) {
        test.expect(6);
        var col = new Collator({
            locale: "es-ES",
            useNative: false,
            sensitivity: "quaternary",
            style: "traditional",
            sync: false,
            onLoad: function(col) {
                test.ok(typeof(col) !== "undefined");

                // a b c ch d
                test.ok("a < b",  col.compare("a", "b") < 0);
                test.ok("b < c",  col.compare("b", "c") < 0);
                test.ok("ca < ch", col.compare("ca", "ch") < 0);
                test.ok("cz < ch",  col.compare("cz", "ch") < 0);
                test.ok("ch < d",  col.compare("ch", "d") < 0);
                test.done();
            }
        });
    }
};