/*
 * testalphaindex_ko.js - test the Alphabetic Index class
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
    var AlphabeticIndex = require("../../../lib/AlphabeticIndex.js");
}

if (typeof(isScript) === "undefined") {
    var isScript = require("../.././../lib/isScript.js");
}

module.exports.testalphaindex_ko = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testAlphaIndexKOKRConstructorWithParams: function(test) {
        test.expect(1);
        var ai = new AlphabeticIndex({
            locale: "ko-KR",
            caseSensitive: false
        });

        test.ok(ai);
        test.done();
    },

    testAlphaIndexKOKRgetDefaultIndexStyle: function(test) {
        test.expect(2);
        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);
        test.equal("korean", ai.getIndexStyle());
        test.done();
    },

    testAlphaIndexKOKRGetBucketBaseLetter: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);
        test.equal("ㄱ", ai.getBucket("김영희"));
        test.done();
    },

    testAlphaIndexKOKRGetBucket: function(test) {
        test.expect(3);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);
        test.equal("ㄱ", ai.getBucket("김영희"));
        test.equal("ㄱ", ai.getBucket("김철수"));

        test.done();
    },

    testAlphaIndexKOKRAddElementRightBucket: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);
        test.equal("ㄷ", ai.addElement("대한민국"));
        test.done();
    },

    testAlphaIndexKOKRAddElementActuallyAdded: function(test) {
        test.expect(6);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);
        test.equal("ㄷ", ai.addElement("대한민국"));

        var buckets = ai.getAllBuckets();

        test.ok(buckets);
        test.ok(buckets[0]);

        var a = buckets[0];

        test.equal(a.label, "ㄷ");
        test.equal(a.elements, "대한민국");
        test.done();
    },

    testAlphaIndexKOKRAddElementRightBucketCaseInsensitive: function(test) {
        test.expect(3);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);
        test.equal("ㄱ", ai.addElement("김영희"));
        test.equal("ㄱ", ai.addElement("김철수"));

        test.done();
    },

    testAlphaIndexKOKRGetAllBuckets: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);

        var items = [
            "김영희",
            "김철수",
            "대한민국",
            "오이",
            "사과",
            "딸기",
            "고구마",
            "도라지",
            "컵",
            "자석",
            "고무",
            "병원",
            "나무"
        ];

        items.forEach(function(item) {
            ai.addElement(item);
        });

        var expected = [
            {
                label: "ㄱ",
                elements: ["고구마", "고무", "김영희", "김철수"]
            },
            {
                label: "ㄴ",
                elements:  ["나무"]
            },
            {
                label: "ㄷ",
                elements: ["대한민국", "도라지"]
            },
            {
                label: "ㄸ",
                elements: ["딸기"]
            },
            {
                label: "ㅂ",
                elements: ["병원"]
            },
            {
                label: "ㅅ",
                elements: ["사과"]
            },
            {
                label: "ㅇ",
                elements: ["오이"]
            },
            {
                label: "ㅈ",
                elements: ["자석"]
            },
            {
                label: "ㅋ",
                elements: ["컵"]
            }
        ]

        test.deepEqual(ai.getAllBuckets(), expected);
        test.done();
    },

    testAlphaIndexKOKRGetElementCount: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);

        var items = [
            "김영희",
            "김철수",
            "대한민국",
            "오이",
            "사과",
            "딸기",
            "고구마",
            "도라지",
            "컵",
            "자석",
            "고무",
            "병원",
            "나무"
        ];

        items.forEach(function(item) {
            ai.addElement(item);
        });

        test.deepEqual(ai.getElementCount(), 13);
        test.done();
    },

    testAlphaIndexKOKRGetElementCountEmpty: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);
        test.deepEqual(ai.getElementCount(), 0);
        test.done();
    },

    testAlphaIndexKOKRGetBucketCountEmpty: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);
        test.equal(ai.getBucketCount(), 0);
        test.done();
    },

    testAlphaIndexKOKRGetBucketCount: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);

        var items = [
            "김영희",
            "김철수",
            "대한민국",
            "오이",
            "사과",
            "딸기",
            "고구마",
            "도라지",
            "컵",
            "자석",
            "고무",
            "병원",
            "나무"
        ];

        items.forEach(function(item) {
            ai.addElement(item);
        });

        test.deepEqual(ai.getBucketCount(), 9);

        test.done();
    },

    testAlphaIndexKOKRGetBucketCount2: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);

        var items = [
            "김영희",
            "김철수",
            "대한민국",
            "오이",
            "사과",
            "딸기",
            "고구마",
            "도라지",
            "고구마",
            "컵",
            "자석",
            "고무",
            "병원",
            "나무",
            "병",
            "커피"
        ];

        items.forEach(function(item) {
            ai.addElement(item);
        });

        test.deepEqual(ai.getBucketCount(), 9);
        test.done();
    },

    testAlphaIndexKOKRGetBucketLabels: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);

        var items = [
            "김영희",
            "김철수",
            "대한민국",
            "오이",
            "사과",
            "딸기",
            "고구마",
            "도라지",
	        "고구마",
            "컵",
            "자석",
            "고무",
            "병원",
            "나무",
            "병",
            "커피"
        ];

        items.forEach(function(item) {
            ai.addElement(item);
        });

        var expected = [
            "ㄱ",
            "ㄴ",
            "ㄷ",
            "ㄸ",
            "ㅂ",
            "ㅅ",
            "ㅇ",
            "ㅈ",
            "ㅋ"
        ];

        test.deepEqual(ai.getBucketLabels(), expected);
        test.done();
    },

    testAlphaIndexKOKRGetBucketLabelsEmpty: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);
        test.deepEqual(ai.getBucketLabels(), []);
        test.done();
    },

    testAlphaIndexKOKRGetAllBucketLabels: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);

        var items = [
            "김철수",
            "김영희",
            "송현경",
            "이영자",
            "정경자",
            "정미경",
            "서수빈",
            "최준호",
            "이영자", // doubled
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
            "주광수"
        ];

        items.forEach(function(item) {
            ai.addElement(item);
        });

        var expected = [
           "*",
            "ㄱ",
            "ㄲ",
            "ㄴ",
            "ㄷ",
            "ㄸ",
            "ㄹ",
            "ㅁ",
            "ㅂ",
            "ㅃ",
            "ㅅ",
            "ㅆ",
            "ㅇ",
            "ㅈ",
            "ㅉ",
            "ㅊ",
            "ㅋ",
            "ㅌ",
            "ㅍ",
            "ㅎ",
           "#"
        ];

        test.deepEqual(ai.getAllBucketLabels(), expected);
        test.done();
    },

    testAlphaIndexKOKRGetAllBucketLabelsEmpty: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);

        var expected = [
           "*",
            "ㄱ",
            "ㄲ",
            "ㄴ",
            "ㄷ",
            "ㄸ",
            "ㄹ",
            "ㅁ",
            "ㅂ",
            "ㅃ",
            "ㅅ",
            "ㅆ",
            "ㅇ",
            "ㅈ",
            "ㅉ",
            "ㅊ",
            "ㅋ",
            "ㅌ",
            "ㅍ",
            "ㅎ",
           "#"
        ];

        test.deepEqual(ai.getAllBucketLabels(), expected);
        test.done();
    },

    testAlphaIndexKOKRGetBucketOverflow: function(test) {
        test.expect(3);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);

        test.equal("A", ai.getBucket("Apple"));
        test.equal("B", ai.getBucket("Banana"));

        test.done();
    },

    testAlphaIndexKOKRGetAllBucketsOverflow: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

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
                elements: ["예지원","이영자", "임민성","임성훈"]
            },
            {
                label: "ㅈ",
                elements: ["장유진","장은경","정경자", "정미경", "주광수","진현주"]
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
    },

    testAlphaIndexKOKRGetBucketUnderflow: function(test) {
        test.expect(3);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);

        test.equal("S", ai.getBucket("See below"));
        test.equal("T", ai.getBucket("TheRealDonaldDuck"));

        test.done();
    },

    testAlphaIndexKOKRGetAllBucketsUnderflow: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

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
            "박세진",
            "μήλο",
            "فاحة",
            "úll"

        ];

        items.forEach(function(item) {
            ai.addElement(item);
        });

        var expected = [
            {
                label: "*",
                elements: ["μήλο", "فاحة"]
            },
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
                elements: ["예지원","이영자", "임민성","임성훈"]
            },
            {
                label: "ㅈ",
                elements: ["장유진","장은경","정경자", "정미경", "주광수","진현주"]
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
                label: "U",
                elements: ["úll"]
            }
        ]

        test.deepEqual(ai.getAllBuckets(), expected);
        test.done();
    },

    testAlphaIndexConstructorAsync: function(test) {
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
                elements: ["india", "iota"],
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
    },
    testAlphaIndexKOKRgetflowLabels: function(test) {
        test.expect(3);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);

        test.equal("#", ai.getOverflowLabel());
        test.equal("*", ai.getUnderflowLabel());
        
        test.done();
    },

    testAlphaIndexKOKRsetflowLabels: function(test) {
        test.expect(3);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);

        ai.setOverflowLabel("@");
        ai.setUnderflowLabel("^");

        test.equal("@", ai.getOverflowLabel());
        test.equal("^", ai.getUnderflowLabel());

        test.done();
    },

    testAlphaIndexKOKRgetCollator: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);
        test.ok(ai.getCollator());
        
        test.done();
    },

    testAlphaIndexKOKRaddLabels: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);

        var expected = [
            "*",
            "ㄱ",
            "ㄲ",
            "ㄴ",
            "ㄷ",
            "ㄸ",
            "ㄹ",
            "ㅁ",
            "ㅂ",
            "ㅃ",
            "ㅅ",
            "ㅆ",
            "ㅇ",
            "ㅈ",
            "ㅉ",
            "ㅊ",
            "ㅋ",
            "ㅌ",
            "ㅍ",
            "ㅎ",
            "#",
            "@@",
            "$$$"
        ];
        
        ai.addLabels(["@@","$$$"]);
        test.deepEqual(ai.getAllBucketLabels(), expected);
        test.done();
    },
    testAlphaIndexKOKRaddLabelswithPosition: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);

        var expected = [
           "*",
            "ㄱ",
            "ㄲ",
            "@@",
            "$$$", 
            "ㄴ",
            "ㄷ",
            "ㄸ",
            "ㄹ",
            "ㅁ",
            "ㅂ",
            "ㅃ",
            "ㅅ",
            "ㅆ",
            "ㅇ",
            "ㅈ",
            "ㅉ",
            "ㅊ",
            "ㅋ",
            "ㅌ",
            "ㅍ",
            "ㅎ",
            "#"
        ];
        
        ai.addLabels(["@@","$$$"], 3);
        test.deepEqual(ai.getAllBucketLabels(), expected);
        test.done();
    },

    testAlphaIndexKOKRMixedScriptTest1: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

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
    },

    testAlphaIndexKOKRMixedScriptTest2: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

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
                label: "*",
                elements: ["りんご"]
            },
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
            }
        ];

        test.deepEqual(ai.getAllBuckets(), expected);
        test.done();
    },

    testAlphaIndexKOKRMixedScriptTest3: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);

        var items = [
            "Apple",
            "Banana",
            "김철수",
            "りんご",
            "서수빈",
            "최준호",
            "香蕉",
            "芒果",
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
                label: "*",
                elements: ["りんご"]
            },
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
                elements: ["임민성"]
            },
            {
                label: "ㅈ",
                elements: ["장은경"]
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
                elements: ["芒果", "香蕉"]
            }

        ];
        
        test.deepEqual(ai.getAllBuckets(), expected);
        test.done();
    },

    testAlphaIndexKOKRMixedScriptTest4: function(test) {
        test.expect(2);

        var ai = new AlphabeticIndex({
            locale: "ko-KR"
        });

        test.ok(ai);

        var items = [
            "omicron",
            "beta",
            "echo",
            "nu",
            "eta",
            "india",
            "mu",
            "gamma",
            "ürgen",
            "Ötish",
            "김철수",
            "연구소",
            "четверг",
            "مخزن",
            "ßabcd"
        ];

        items.forEach(function(item) {
            ai.addElement(item);
        });

        var expected = [
            {
                label: "*",
                elements: ["четверг", "مخزن"]
            },
            {
                label: "ㄱ",
                elements: ["김철수"]
            },
            {
                label: "ㅇ",
                elements: ["연구소"]
            },
            {
                label: "B",
                elements: ["beta"]
            },
            {
                label: "E",
                elements: ["echo", "eta"]
            },
            {
                label: "G",
                elements: ["gamma"]
            },
            {
                label: "I",
                elements: ["india"]
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
                elements: ["omicron", "Ötish"]
            },
            {
                label: "S",
                elements: ["ßabcd"]
            },
            {
                label: "U",
                elements: ["ürgen"]
            }
        ];

        test.deepEqual(ai.getAllBuckets(), expected);
        test.done();
    }
};