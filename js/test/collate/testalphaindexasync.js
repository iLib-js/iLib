/*
 * testalphaindexasync.js - test the Alphabetic Index class asynchronously
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
    var ilib = require("../../lib/ilib.js");
}
if (typeof(AlphabeticIndex) === "undefined") {
    var AlphabeticIndex = require("../../lib/AlphabeticIndex.js");
}

module.exports.testalphaindexasync = {
    testAlphaIndexAsyncConstructor: function(test) {
        test.expect(1);
        new AlphabeticIndex({
            sync: false,
            onLoad: function(ai) {
                test.ok(ai);
                test.done();
            }
        });
    },
    testAlphaIndexAsyncConstructorWithParams: function(test) {
        test.expect(1);
        new AlphabeticIndex({
            locale: "en-US",
            sync: false,
            onLoad: function(ai) {
                test.ok(ai);
                test.done();
            }
        });
    },
    testAlphaIndexAsyncgetDefaultIndexStyle: function(test) {
        test.expect(2);
        new AlphabeticIndex({
            locale: "en-US",
            sync: false,
            onLoad: function(ai) {
                test.ok(ai);
                test.equal("latin", ai.getIndexStyle());
                test.done();
            }
        });
    },
    testAlphaIndexAsyncConstructorWithUnknownLocale: function(test) {
        test.expect(1);
        new AlphabeticIndex({
            locale: "qq-QQ",
            sync: false,
            onLoad: function(ai) {
                test.ok(ai);
                test.done();
            }
        });
    },
    testAlphaIndexAsyncENUSGetBucket: function(test) {
        test.expect(3);

        new AlphabeticIndex({
            locale: "en-US",
            sync: false,
            onLoad: function(ai) {
                test.ok(ai);
                test.equal("B", ai.getBucket("belarus"));
                test.equal("B", ai.getBucket("Belarus"));

                test.done();
            }
        });
    },
    testAlphaIndexAsyncENUSGetBucket2: function(test) {
        test.expect(3);

        new AlphabeticIndex({
            locale: "en-US",
            sync: false,
            onLoad: function(ai) {
                test.ok(ai);

                test.equal("E", ai.getBucket("Élan"));
                test.equal("E", ai.getBucket("ëieasdf"));

                test.done();
            }
        });
    },
    testAlphaIndexAsyncENUSGetAllBuckets: function(test) {
        test.expect(2);

        new AlphabeticIndex({
            locale: "en-US",
            sync: false,
            onLoad: function(ai) {
                test.ok(ai);

                var items = [
                    "omicron",
                    "beta",
                    "epsilon",
                    "echo",
                    "nu",
                    "iota",
                    "delta",
                    "alpha",
                    "zeta",
                    "Bravo",
                    "eta",
                    "india",
                    "mu",
                    "gamma"
                    ];

                items.forEach(function(item) {
                    ai.addElement(item);
                });

                var expected = [
                    {
                        label: "A",
                        elements: ["alpha"]
                    },
                    {
                        label: "B",
                        elements: ["beta", "Bravo"]
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
                    ]

                test.deepEqual(ai.getAllBuckets(), expected);
                test.done();
            }
        });
    },
    testAlphaIndexAsyncENUSGetBucketLabels: function(test) {
        test.expect(2);

        new AlphabeticIndex({
            locale: "en-US",
            sync: false,
            onLoad: function(ai) {
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
            }
        });

    },
    testAlphaIndexAsyncUnknowLocaleActsLikeEnglish: function(test) {
        test.expect(2);

        new AlphabeticIndex({
            locale: "qq-QQ",
            sync: false,
            onLoad: function(ai) {
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
                    "gamma",
                    "ürgen"
                    ];

                items.forEach(function(item) {
                    ai.addElement(item);
                });

                var expected = [
                    {
                        label: "A",
                        elements: ["alpha"]
                    },
                    {
                        label: "B",
                        elements:["beta", "bravo"]
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
                        label: "U",
                        elements: ["ürgen"]
                    },
                    {
                        label: "Z",
                        elements: ["zeta"]
                    }
                    ]

                test.deepEqual(ai.getAllBuckets(), expected);
                test.done();
            }
        });
    },
    testAlphaIndexAsyncConstructorAsync_deDE: function(test) {
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
    testAlphaIndexAsyncGetBucket_deDE2: function(test) {
        test.expect(7);

        var ai = new AlphabeticIndex({
            locale: "de-DE",
            sync: false,
            onLoad: function(ai) {
                test.ok(ai);

                test.equal("U", ai.getBucket("über"));
                test.equal("A", ai.getBucket("änderen"));
                test.equal("O", ai.getBucket("öffenen"));

                test.equal("U", ai.getBucket("Über"));
                test.equal("A", ai.getBucket("Änderen"));
                test.equal("O", ai.getBucket("Öffenen"));

                test.done();
            }
        });
    },
    testAlphaIndexAsyncGetBucketAccentInsensitiveSZ_deDE: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "de-DE",
            sync: false,
            onLoad: function(ai) {
                test.ok(ai);
                // no words start with sz, but handle this just in case
                test.equal("S", ai.getBucket("ß"));
                test.done();
            }
        });
    },
    testAlphaIndexAsyncDEDEPhonebookStyle: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "de-DE",
            style: "phonebook",
            sync: false,
            onLoad: function(ai) {
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
                        elements: ["Ualrich", "Udrich", "Uelrich", "Ülrich", "Ulrich"]
                    }
                    ];

                test.deepEqual(ai.getAllBuckets(), expected);
                test.done();
            }
        });

    },
    testAlphaIndexAsyncDEDEDictionaryStyle: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "de-DE",
            style: "dictionary",
            sync: false,
            onLoad: function(ai) {
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
                        elements: ["Ualrich", "Udrich", "Uelrich", "Ülrich", "Ulrich"]
                    }
                    ];

                test.deepEqual(ai.getAllBuckets(), expected);
                test.done();
            }
        });
    },
    testAlphaIndexAsyncConstructorAsync: function(test) {
        test.expect(1);
        var ai = new AlphabeticIndex({
            locale: "ko-KR",
            sync: false,
            onLoad: function(ai) {
                test.ok(ai);
                test.done();
            }
        });
    },
    testAlphaIndexAsyncKOKRMixedScriptTest1: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR",
            sync: false,
            onLoad: function(ai) {
                test.ok(ai);

                var items = [
                    "Apple",
                    "Banana",
                    "김철수",
                    "김영희",
                    "송현경",
                    "이영자",
                    "정경자",
                    "정미경",
                    "서수빈",
                    "최준호",
                    "진현주",
                    "예지원",
                    "장유진",
                    "성수민",
                    "민예은",
                    "하춘자",
                    "강성진",
                    "임성훈",
                    "장은경",
                    "임민성",
                    "주광수",
                    "박세진"
                    ];

                items.forEach(function(item) {
                    ai.addElement(item);
                });

                var expected = [
                    {
                        label: "ㄱ",
                        elements: ["강성진","김영희","김철수"]
                    },
                    {
                        label: "ㅁ",
                        elements: ["민예은"]
                    },
                    {
                        label: "ㅂ",
                        elements: ["박세진"]
                    },
                    {
                        label: "ㅅ",
                        elements: ["서수빈", "성수민", "송현경"]
                    },
                    {
                        label: "ㅇ",
                        elements: ["예지원","이영자", "임민성", "임성훈"]
                    },
                    {
                        label: "ㅈ",
                        elements: ["장유진", "장은경","정경자", "정미경", "주광수","진현주"]
                    },
                    {
                        label: "ㅊ",
                        elements: ["최준호"]
                    },
                    {
                        label: "ㅎ",
                        elements: ["하춘자"]
                    },
                    {
                        label: "A",
                        elements: ["Apple"]
                    },
                    {
                        label: "B",
                        elements: ["Banana"]
                    }
                    ]

                test.deepEqual(ai.getAllBuckets(), expected);
                test.done();
            }
        });

    },
    testAlphaIndexAsyncKOKRMixedScriptTest2: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR",
            sync: false,
            onLoad: function(ai) {
                test.ok(ai);

                var items = [
                    "Apple",
                    "Banana",
                    "김철수",
                    "りんご",
                    "서수빈",
                    "최준호",
                    "예지원",
                    "장유진",
                    "성수민",
                    "민예은",
                    "하춘자",
                    "강성진",
                    "장은경",
                    "임민성",
                    "박세진"
                    ];

                items.forEach(function(item) {
                    ai.addElement(item);
                });

                var expected = [
                    {
                        label: "ㄱ",
                        elements: ["강성진", "김철수"]
                    },
                    {
                        label: "ㅁ",
                        elements: ["민예은"]
                    },
                    {
                        label: "ㅂ",
                        elements: ["박세진"]
                    },
                    {
                        label: "ㅅ",
                        elements: ["서수빈", "성수민"]
                    },
                    {
                        label: "ㅇ",
                        elements: ["예지원", "임민성"]
                    },
                    {
                        label: "ㅈ",
                        elements: ["장유진", "장은경"]
                    },
                    {
                        label: "ㅊ",
                        elements: ["최준호"]
                    },
                    {
                        label: "ㅎ",
                        elements: ["하춘자"]
                    },
                    {
                        label: "A",
                        elements: ["Apple"]
                    },
                    {
                        label: "B",
                        elements: ["Banana"]
                    },
                    {
                        label: "#",
                        elements: ["りんご"]
                    }
                    ];

                test.deepEqual(ai.getAllBuckets(), expected);
                test.done();
            }
        });
    }
};