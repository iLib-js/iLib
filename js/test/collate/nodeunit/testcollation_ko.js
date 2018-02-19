/*
 * testcollation_ko.js - test the Collator object in Korean
 * 
 * Copyright © 2014,2017, JEDLSoft
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
if (typeof(Collator) === "undefined") {
    var Collator = require("../../../lib/Collator.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testcollation_ko = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJSCollatorPriL_ko: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "primary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // 가까나다따
        test.ok("가 < 까", col.compare("가", "까") < 0);
        test.ok("까 < 나", col.compare("까", "나") < 0);
        test.ok("나 < 다", col.compare("나", "다") < 0);
        test.ok("다 < 따", col.compare("다", "따") < 0);
        test.done();
    },
    
    testJSCollatorPriV_ko: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "primary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // 가개갸걔거
        test.ok("가 < 개", col.compare("가", "개") < 0);
        test.ok("개 < 갸", col.compare("개", "갸") < 0);
        test.ok("갸 < 걔", col.compare("갸", "걔") < 0);
        test.ok("걔 < 거", col.compare("걔", "거") < 0);
        test.done();
    },
    
    testJSCollatorPriT_ko: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "primary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // 가각갂갃간
        test.ok("가 < 각", col.compare("가", "각") < 0);
        test.ok("각 < 갂", col.compare("각", "갂") < 0);
        test.ok("갂 < 갃", col.compare("갂", "갃") < 0);
        test.ok("갃 < 간", col.compare("갃", "간") < 0);
        test.done();
    },
    
    testJSCollatorSecL_ko: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "secondary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // 가까나다따
        test.ok("가 < 까", col.compare("가", "까") < 0);
        test.ok("까 < 나", col.compare("까", "나") < 0);
        test.ok("나 < 다", col.compare("나", "다") < 0);
        test.ok("다 < 따", col.compare("다", "따") < 0);
        test.done();
    },
    
    testJSCollatorSecV_ko: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "secondary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // 가개갸걔거
        test.ok("가 < 개", col.compare("가", "개") < 0);
        test.ok("개 < 갸", col.compare("개", "갸") < 0);
        test.ok("갸 < 걔", col.compare("갸", "걔") < 0);
        test.ok("걔 < 거", col.compare("걔", "거") < 0);
        test.done();
    },
    
    testJSCollatorSecT_ko: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "secondary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // 가각갂갃간
        test.ok("가 < 각", col.compare("가", "각") < 0);
        test.ok("각 < 갂", col.compare("각", "갂") < 0);
        test.ok("갂 < 갃", col.compare("갂", "갃") < 0);
        test.ok("갃 < 간", col.compare("갃", "간") < 0);
        test.done();
    },
    
    testJSCollatorTerL_ko: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "tertiary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // 가까나다따
        test.ok("가 < 까", col.compare("가", "까") < 0);
        test.ok("까 < 나", col.compare("까", "나") < 0);
        test.ok("나 < 다", col.compare("나", "다") < 0);
        test.ok("다 < 따", col.compare("다", "따") < 0);
        test.done();
    },
    
    testJSCollatorTerV_ko: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "tertiary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // 가개갸걔거
        test.ok("가 < 개", col.compare("가", "개") < 0);
        test.ok("개 < 갸", col.compare("개", "갸") < 0);
        test.ok("갸 < 걔", col.compare("갸", "걔") < 0);
        test.ok("걔 < 거", col.compare("걔", "거") < 0);
        test.done();
    },
    
    testJSCollatorTerT_ko: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "tertiary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // 가각갂갃간
        test.ok("가 < 각", col.compare("가", "각") < 0);
        test.ok("각 < 갂", col.compare("각", "갂") < 0);
        test.ok("갂 < 갃", col.compare("갂", "갃") < 0);
        test.ok("갃 < 간", col.compare("갃", "간") < 0);
        test.done();
    },
    
    testJSCollatorQuatL_ko: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // 가까나다따
        test.ok("가 < 까", col.compare("가", "까") < 0);
        test.ok("까 < 나", col.compare("까", "나") < 0);
        test.ok("나 < 다", col.compare("나", "다") < 0);
        test.ok("다 < 따", col.compare("다", "따") < 0);
        test.done();
    },
    
    testJSCollatorQuatV_ko: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // 가개갸걔거
        test.ok("가 < 개", col.compare("가", "개") < 0);
        test.ok("개 < 갸", col.compare("개", "갸") < 0);
        test.ok("갸 < 걔", col.compare("갸", "걔") < 0);
        test.ok("걔 < 거", col.compare("걔", "거") < 0);
        test.done();
    },
    
    testJSCollatorQuatT_ko: function(test) {
        test.expect(5);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // 가각갂갃간
        test.ok("가 < 각", col.compare("가", "각") < 0);
        test.ok("각 < 갂", col.compare("각", "갂") < 0);
        test.ok("갂 < 갃", col.compare("갂", "갃") < 0);
        test.ok("갃 < 간", col.compare("갃", "간") < 0);
        test.done();
    },
    
    testJSCollatorJamoL_ko: function(test) {
        test.expect(19);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // initial consonants ㄱ ㄲ ㄴ ㄷ ㄸ ㄹ ㅁ ㅂ ㅃ ㅅ ㅆ ㅇ ㅈ ㅉ ㅊ ㅋ ㅌ ㅍ ㅎ
        test.ok("ㄱ < ㄲ", col.compare("ㄱ", "ㄲ") < 0);
        test.ok("ㄲ < ㄴ", col.compare("ㄲ", "ㄴ") < 0);
        test.ok("ㄴ < ㄷ", col.compare("ㄴ", "ㄷ") < 0);
        test.ok("ㄷ < ㄸ", col.compare("ㄷ", "ㄸ") < 0);
        test.ok("ㄸ < ㄹ", col.compare("ㄸ", "ㄹ") < 0);
        test.ok("ㄹ < ㅁ", col.compare("ㄹ", "ㅁ") < 0);
        test.ok("ㅁ < ㅂ", col.compare("ㅁ", "ㅂ") < 0);
        test.ok("ㅂ < ㅃ", col.compare("ㅂ", "ㅃ") < 0);
        test.ok("ㅃ < ㅅ", col.compare("ㅃ", "ㅅ") < 0);
        test.ok("ㅅ < ㅆ", col.compare("ㅅ", "ㅆ") < 0);
        test.ok("ㅆ < ㅇ", col.compare("ㅆ", "ㅇ") < 0);
        test.ok("ㅇ < ㅈ", col.compare("ㅇ", "ㅈ") < 0);
        test.ok("ㅈ < ㅉ", col.compare("ㅈ", "ㅉ") < 0);
        test.ok("ㅉ < ㅊ", col.compare("ㅉ", "ㅊ") < 0);
        test.ok("ㅊ < ㅋ", col.compare("ㅊ", "ㅋ") < 0);
        test.ok("ㅋ < ㅌ", col.compare("ㅋ", "ㅌ") < 0);
        test.ok("ㅌ < ㅍ", col.compare("ㅌ", "ㅍ") < 0);
        test.ok("ㅍ < ㅎ", col.compare("ㅍ", "ㅎ") < 0);
        test.done();
    },
    
    testJSCollatorJamoV_ko: function(test) {
        test.expect(21);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // middle vowels ㅏ ㅐ ㅑ ㅒ ㅓ ㅔ ㅕ ㅖ ㅗ ㅘ ㅙ ㅚ ㅛ ㅜ ㅝ ㅞ ㅟ ㅠ ㅡ ㅢ ㅣ
        test.ok("ㅏ < ㅐ", col.compare("ㅏ", "ㅐ") < 0);
        test.ok("ㅐ < ㅑ", col.compare("ㅐ", "ㅑ") < 0);
        test.ok("ㅑ < ㅒ", col.compare("ㅑ", "ㅒ") < 0);
        test.ok("ㅒ < ㅓ", col.compare("ㅒ", "ㅓ") < 0);
        test.ok("ㅓ < ㅔ", col.compare("ㅓ", "ㅔ") < 0);
        test.ok("ㅔ < ㅕ", col.compare("ㅔ", "ㅕ") < 0);
        test.ok("ㅕ < ㅖ", col.compare("ㅕ", "ㅖ") < 0);
        test.ok("ㅖ < ㅗ", col.compare("ㅖ", "ㅗ") < 0);
        test.ok("ㅗ < ㅘ", col.compare("ㅗ", "ㅘ") < 0);
        test.ok("ㅘ < ㅙ", col.compare("ㅘ", "ㅙ") < 0);
        test.ok("ㅙ < ㅚ", col.compare("ㅙ", "ㅚ") < 0);
        test.ok("ㅚ < ㅛ", col.compare("ㅚ", "ㅛ") < 0);
        test.ok("ㅛ < ㅜ", col.compare("ㅛ", "ㅜ") < 0);
        test.ok("ㅜ < ㅝ", col.compare("ㅜ", "ㅝ") < 0);
        test.ok("ㅝ < ㅞ", col.compare("ㅝ", "ㅞ") < 0);
        test.ok("ㅞ < ㅟ", col.compare("ㅞ", "ㅟ") < 0);
        test.ok("ㅟ < ㅠ", col.compare("ㅟ", "ㅠ") < 0);
        test.ok("ㅠ < ㅡ", col.compare("ㅠ", "ㅡ") < 0);
        test.ok("ㅡ < ㅢ", col.compare("ㅡ", "ㅢ") < 0);
        test.ok("ㅢ < ㅣ", col.compare("ㅢ", "ㅣ") < 0);
        test.done();
    },
    
    testJSCollatorJamoT_ko: function(test) {
        test.expect(27);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "quaternary"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        // optional final consonants ㄱ ㄲ ㄳ ㄴ ㄵ ㄶ ㄷ ㄹ ㄺ ㄻ ㄼ ㄽ ㄾ ㄿ ㅀ ㅁ ㅂ ㅄ ㅅ ㅆ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ
        
        test.ok("ᆨ < ᆩ", col.compare("ᆨ", "ᆩ") < 0);
        test.ok("ᆩ < ᆪ", col.compare("ᆩ", "ᆪ") < 0);
        test.ok("ᆪ < ᆫ", col.compare("ᆪ", "ᆫ") < 0);
        test.ok("ᆫ < ᆬ", col.compare("ᆫ", "ᆬ") < 0);
        test.ok("ᆬ < ᆭ", col.compare("ᆬ", "ᆭ") < 0);
        test.ok("ᆭ < ᆮ", col.compare("ᆭ", "ᆮ") < 0);
        test.ok("ᆮ < ᆯ", col.compare("ᆮ", "ᆯ") < 0);
        test.ok("ᆯ < ᆰ", col.compare("ᆯ", "ᆰ") < 0);
        test.ok("ᆰ < ᆱ", col.compare("ᆰ", "ᆱ") < 0);
        test.ok("ᆱ < ᆲ", col.compare("ᆱ", "ᆲ") < 0);
        test.ok("ᆲ < ᆳ", col.compare("ᆲ", "ᆳ") < 0);
        test.ok("ᆳ < ᆴ", col.compare("ᆳ", "ᆴ") < 0);
        test.ok("ᆴ < ᆵ", col.compare("ᆴ", "ᆵ") < 0);
        test.ok("ᆵ < ᆶ", col.compare("ᆵ", "ᆶ") < 0);
        test.ok("ᆶ < ᆷ", col.compare("ᆶ", "ᆷ") < 0);
        test.ok("ᆷ < ᆸ", col.compare("ᆷ", "ᆸ") < 0);
        test.ok("ᆸ < ᆹ", col.compare("ᆸ", "ᆹ") < 0);
        test.ok("ᆹ < ᆺ", col.compare("ᆹ", "ᆺ") < 0);
        test.ok("ᆺ < ᆻ", col.compare("ᆺ", "ᆻ") < 0);
        test.ok("ᆻ < ᆼ", col.compare("ᆻ", "ᆼ") < 0);
        test.ok("ᆼ < ᆽ", col.compare("ᆼ", "ᆽ") < 0);
        test.ok("ᆽ < ᆾ", col.compare("ᆽ", "ᆾ") < 0);
        test.ok("ᆾ < ᆿ", col.compare("ᆾ", "ᆿ") < 0);
        test.ok("ᆿ < ᇀ", col.compare("ᆿ", "ᇀ") < 0);
        test.ok("ᇀ < ᇁ", col.compare("ᇀ", "ᇁ") < 0);
        test.ok("ᇁ < ᇂ", col.compare("ᇁ", "ᇂ") < 0);
        test.done();
    },
    
    testJSCollatorJamoLHalfwidthPri_ko: function(test) {
        test.expect(104);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(0, col.compare("ᄀ", "ﾡ"), "ᄀ = ﾡ");
        test.equal(0, col.compare("ﾡ", "ㄱ"), "ﾡ = ㄱ");
        test.equal(0, col.compare("ᄁ", "ﾢ"), "ᄁ = ﾢ");
        test.equal(0, col.compare("ﾢ", "ㄲ"), "ﾢ = ㄲ");
        test.equal(0, col.compare("ᄂ", "ﾤ"), "ᄂ = ﾤ");
        test.equal(0, col.compare("ﾤ", "ㄴ"), "ﾤ = ㄴ");
        test.equal(0, col.compare("ᄃ", "ﾧ"), "ᄃ = ﾧ");
        test.equal(0, col.compare("ﾧ", "ㄷ"), "ﾧ = ㄷ");
        test.equal(0, col.compare("ᄄ", "ﾨ"), "ᄄ = ﾨ");
        test.equal(0, col.compare("ﾨ", "ㄸ"), "ﾨ = ㄸ");
        test.equal(0, col.compare("ᄅ", "ﾩ"), "ᄅ = ﾩ");
        test.equal(0, col.compare("ﾩ", "ㄹ"), "ﾩ = ㄹ");
        test.equal(0, col.compare("ᄆ", "ﾱ"), "ᄆ = ﾱ");
        test.equal(0, col.compare("ﾱ", "ㅁ"), "ﾱ = ㅁ");
        test.equal(0, col.compare("ᄇ", "ﾲ"), "ᄇ = ﾲ");
        test.equal(0, col.compare("ﾲ", "ㅂ"), "ﾲ = ㅂ");
        test.equal(0, col.compare("ᄈ", "ﾳ"), "ᄈ = ﾳ");
        test.equal(0, col.compare("ﾳ", "ㅃ"), "ﾳ = ㅃ");
        test.equal(0, col.compare("ᄉ", "ﾵ"), "ᄉ = ﾵ");
        test.equal(0, col.compare("ﾵ", "ㅅ"), "ﾵ = ㅅ");
        test.equal(0, col.compare("ᄊ", "ﾶ"), "ᄊ = ﾶ");
        test.equal(0, col.compare("ﾶ", "ㅆ"), "ﾶ = ㅆ");
        test.equal(0, col.compare("ᄋ", "ﾷ"), "ᄋ = ﾷ");
        test.equal(0, col.compare("ﾷ", "ㅇ"), "ﾷ = ㅇ");
        test.equal(0, col.compare("ᄌ", "ﾸ"), "ᄌ = ﾸ");
        test.equal(0, col.compare("ﾸ", "ㅈ"), "ﾸ = ㅈ");
        test.equal(0, col.compare("ᄍ", "ﾹ"), "ᄍ = ﾹ");
        test.equal(0, col.compare("ﾹ", "ㅉ"), "ﾹ = ㅉ");
        test.equal(0, col.compare("ᄎ", "ﾺ"), "ᄎ = ﾺ");
        test.equal(0, col.compare("ﾺ", "ㅊ"), "ﾺ = ㅊ");
        test.equal(0, col.compare("ᄏ", "ﾻ"), "ᄏ = ﾻ");
        test.equal(0, col.compare("ﾻ", "ㅋ"), "ﾻ = ㅋ");
        test.equal(0, col.compare("ᄐ", "ﾼ"), "ᄐ = ﾼ");
        test.equal(0, col.compare("ﾼ", "ㅌ"), "ﾼ = ㅌ");
        test.equal(0, col.compare("ᄑ", "ﾽ"), "ᄑ = ﾽ");
        test.equal(0, col.compare("ﾽ", "ㅍ"), "ﾽ = ㅍ");
        test.equal(0, col.compare("ᄒ", "ﾾ"), "ᄒ = ﾾ");
        test.equal(0, col.compare("ﾾ", "ㅎ"), "ﾾ = ㅎ");
        test.equal(0, col.compare("ᄚ", "ﾰ"), "ᄚ = ﾰ");
        test.equal(0, col.compare("ﾰ", "ㅀ"), "ﾰ = ㅀ");
        test.equal(0, col.compare("ᄡ", "ﾴ"), "ᄡ = ﾴ");
        test.equal(0, col.compare("ﾴ", "ㅄ"), "ﾴ = ㅄ");
        
        test.equal(0, col.compare("ᅡ", "ￂ"), "ᅡ = ￂ");
        test.equal(0, col.compare("ￂ", "ㅏ"), "ￂ = ㅏ");
        test.equal(0, col.compare("ᅢ", "ￃ"), "ᅢ = ￃ");
        test.equal(0, col.compare("ￃ", "ㅐ"), "ￃ = ㅐ");
        test.equal(0, col.compare("ᅣ", "ￄ"), "ᅣ = ￄ");
        test.equal(0, col.compare("ￄ", "ㅑ"), "ￄ = ㅑ");
        test.equal(0, col.compare("ᅤ", "ￅ"), "ᅤ = ￅ");
        test.equal(0, col.compare("ￅ", "ㅒ"), "ￅ = ㅒ");
        test.equal(0, col.compare("ᅥ", "ￆ"), "ᅥ = ￆ");
        test.equal(0, col.compare("ￆ", "ㅓ"), "ￆ = ㅓ");
        test.equal(0, col.compare("ᅦ", "ￇ"), "ᅦ = ￇ");
        test.equal(0, col.compare("ￇ", "ㅔ"), "ￇ = ㅔ");
        test.equal(0, col.compare("ᅧ", "ￊ"), "ᅧ = ￊ");
        test.equal(0, col.compare("ￊ", "ㅕ"), "ￊ = ㅕ");
        test.equal(0, col.compare("ᅨ", "ￋ"), "ᅨ = ￋ");
        test.equal(0, col.compare("ￋ", "ㅖ"), "ￋ = ㅖ");
        test.equal(0, col.compare("ᅩ", "ￌ"), "ᅩ = ￌ");
        test.equal(0, col.compare("ￌ", "ㅗ"), "ￌ = ㅗ");
        test.equal(0, col.compare("ᅪ", "ￍ"), "ᅪ = ￍ");
        test.equal(0, col.compare("ￍ", "ㅘ"), "ￍ = ㅘ");
        test.equal(0, col.compare("ᅫ", "ￎ"), "ᅫ = ￎ");
        test.equal(0, col.compare("ￎ", "ㅙ"), "ￎ = ㅙ");
        test.equal(0, col.compare("ᅬ", "ￏ"), "ᅬ = ￏ");
        test.equal(0, col.compare("ￏ", "ㅚ"), "ￏ = ㅚ");
        test.equal(0, col.compare("ᅭ", "ￒ"), "ᅭ = ￒ");
        test.equal(0, col.compare("ￒ", "ㅛ"), "ￒ = ㅛ");
        test.equal(0, col.compare("ᅮ", "ￓ"), "ᅮ = ￓ");
        test.equal(0, col.compare("ￓ", "ㅜ"), "ￓ = ㅜ");
        test.equal(0, col.compare("ᅯ", "ￔ"), "ᅯ = ￔ");
        test.equal(0, col.compare("ￔ", "ㅝ"), "ￔ = ㅝ");
        test.equal(0, col.compare("ᅰ", "ￕ"), "ᅰ = ￕ");
        test.equal(0, col.compare("ￕ", "ㅞ"), "ￕ = ㅞ");
        test.equal(0, col.compare("ᅱ", "ￖ"), "ᅱ = ￖ");
        test.equal(0, col.compare("ￖ", "ㅟ"), "ￖ = ㅟ");
        test.equal(0, col.compare("ᅲ", "ￗ"), "ᅲ = ￗ");
        test.equal(0, col.compare("ￗ", "ㅠ"), "ￗ = ㅠ");
        test.equal(0, col.compare("ᅳ", "ￚ"), "ᅳ = ￚ");
        test.equal(0, col.compare("ￚ", "ㅡ"), "ￚ = ㅡ");
        test.equal(0, col.compare("ᅴ", "ￛ"), "ᅴ = ￛ");
        test.equal(0, col.compare("ￛ", "ㅢ"), "ￛ = ㅢ");
        test.equal(0, col.compare("ᅵ", "ￜ"), "ᅵ = ￜ");
        test.equal(0, col.compare("ￜ", "ㅣ"), "ￜ = ㅣ");
        test.equal(0, col.compare("ᆪ", "ﾣ"), "ᆪ = ﾣ");
        test.equal(0, col.compare("ﾣ", "ㄳ"), "ﾣ = ㄳ");
        test.equal(0, col.compare("ᆬ", "ﾥ"), "ᆬ = ﾥ");
        test.equal(0, col.compare("ﾥ", "ㄵ"), "ﾥ = ㄵ");
        test.equal(0, col.compare("ᆭ", "ﾦ"), "ᆭ = ﾦ");
        test.equal(0, col.compare("ﾦ", "ㄶ"), "ﾦ = ㄶ");
        test.equal(0, col.compare("ᆰ", "ﾪ"), "ᆰ = ﾪ");
        test.equal(0, col.compare("ﾪ", "ㄺ"), "ﾪ = ㄺ");
        test.equal(0, col.compare("ᆱ", "ﾫ"), "ᆱ = ﾫ");
        test.equal(0, col.compare("ﾫ", "ㄻ"), "ﾫ = ㄻ");
        test.equal(0, col.compare("ᆲ", "ﾬ"), "ᆲ = ﾬ");
        test.equal(0, col.compare("ﾬ", "ㄼ"), "ﾬ = ㄼ");
        test.equal(0, col.compare("ᆳ", "ﾭ"), "ᆳ = ﾭ");
        test.equal(0, col.compare("ﾭ", "ㄽ"), "ﾭ = ㄽ");
        test.equal(0, col.compare("ᆴ", "ﾮ"), "ᆴ = ﾮ");
        test.equal(0, col.compare("ﾮ", "ㄾ"), "ﾮ = ㄾ");
        test.equal(0, col.compare("ᆵ", "ﾯ"), "ᆵ = ﾯ");
        test.equal(0, col.compare("ﾯ", "ㄿ"), "ﾯ = ㄿ");
        
        test.equal(0, col.compare("₩", "￦"), "₩ = ￦");
        test.done();
    },
    testJSCollatorJamoLHalfwidthSec_ko: function(test) {
        test.expect(104);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(0, col.compare("ᄀ", "ﾡ"), "ᄀ = ﾡ");
        test.equal(0, col.compare("ﾡ", "ㄱ"), "ﾡ = ㄱ");
        test.equal(0, col.compare("ᄁ", "ﾢ"), "ᄁ = ﾢ");
        test.equal(0, col.compare("ﾢ", "ㄲ"), "ﾢ = ㄲ");
        test.equal(0, col.compare("ᄂ", "ﾤ"), "ᄂ = ﾤ");
        test.equal(0, col.compare("ﾤ", "ㄴ"), "ﾤ = ㄴ");
        test.equal(0, col.compare("ᄃ", "ﾧ"), "ᄃ = ﾧ");
        test.equal(0, col.compare("ﾧ", "ㄷ"), "ﾧ = ㄷ");
        test.equal(0, col.compare("ᄄ", "ﾨ"), "ᄄ = ﾨ");
        test.equal(0, col.compare("ﾨ", "ㄸ"), "ﾨ = ㄸ");
        test.equal(0, col.compare("ᄅ", "ﾩ"), "ᄅ = ﾩ");
        test.equal(0, col.compare("ﾩ", "ㄹ"), "ﾩ = ㄹ");
        test.equal(0, col.compare("ᄆ", "ﾱ"), "ᄆ = ﾱ");
        test.equal(0, col.compare("ﾱ", "ㅁ"), "ﾱ = ㅁ");
        test.equal(0, col.compare("ᄇ", "ﾲ"), "ᄇ = ﾲ");
        test.equal(0, col.compare("ﾲ", "ㅂ"), "ﾲ = ㅂ");
        test.equal(0, col.compare("ᄈ", "ﾳ"), "ᄈ = ﾳ");
        test.equal(0, col.compare("ﾳ", "ㅃ"), "ﾳ = ㅃ");
        test.equal(0, col.compare("ᄉ", "ﾵ"), "ᄉ = ﾵ");
        test.equal(0, col.compare("ﾵ", "ㅅ"), "ﾵ = ㅅ");
        test.equal(0, col.compare("ᄊ", "ﾶ"), "ᄊ = ﾶ");
        test.equal(0, col.compare("ﾶ", "ㅆ"), "ﾶ = ㅆ");
        test.equal(0, col.compare("ᄋ", "ﾷ"), "ᄋ = ﾷ");
        test.equal(0, col.compare("ﾷ", "ㅇ"), "ﾷ = ㅇ");
        test.equal(0, col.compare("ᄌ", "ﾸ"), "ᄌ = ﾸ");
        test.equal(0, col.compare("ﾸ", "ㅈ"), "ﾸ = ㅈ");
        test.equal(0, col.compare("ᄍ", "ﾹ"), "ᄍ = ﾹ");
        test.equal(0, col.compare("ﾹ", "ㅉ"), "ﾹ = ㅉ");
        test.equal(0, col.compare("ᄎ", "ﾺ"), "ᄎ = ﾺ");
        test.equal(0, col.compare("ﾺ", "ㅊ"), "ﾺ = ㅊ");
        test.equal(0, col.compare("ᄏ", "ﾻ"), "ᄏ = ﾻ");
        test.equal(0, col.compare("ﾻ", "ㅋ"), "ﾻ = ㅋ");
        test.equal(0, col.compare("ᄐ", "ﾼ"), "ᄐ = ﾼ");
        test.equal(0, col.compare("ﾼ", "ㅌ"), "ﾼ = ㅌ");
        test.equal(0, col.compare("ᄑ", "ﾽ"), "ᄑ = ﾽ");
        test.equal(0, col.compare("ﾽ", "ㅍ"), "ﾽ = ㅍ");
        test.equal(0, col.compare("ᄒ", "ﾾ"), "ᄒ = ﾾ");
        test.equal(0, col.compare("ﾾ", "ㅎ"), "ﾾ = ㅎ");
        test.equal(0, col.compare("ᄚ", "ﾰ"), "ᄚ = ﾰ");
        test.equal(0, col.compare("ﾰ", "ㅀ"), "ﾰ = ㅀ");
        test.equal(0, col.compare("ᄡ", "ﾴ"), "ᄡ = ﾴ");
        test.equal(0, col.compare("ﾴ", "ㅄ"), "ﾴ = ㅄ");
        
        test.equal(0, col.compare("ᅡ", "ￂ"), "ᅡ = ￂ");
        test.equal(0, col.compare("ￂ", "ㅏ"), "ￂ = ㅏ");
        test.equal(0, col.compare("ᅢ", "ￃ"), "ᅢ = ￃ");
        test.equal(0, col.compare("ￃ", "ㅐ"), "ￃ = ㅐ");
        test.equal(0, col.compare("ᅣ", "ￄ"), "ᅣ = ￄ");
        test.equal(0, col.compare("ￄ", "ㅑ"), "ￄ = ㅑ");
        test.equal(0, col.compare("ᅤ", "ￅ"), "ᅤ = ￅ");
        test.equal(0, col.compare("ￅ", "ㅒ"), "ￅ = ㅒ");
        test.equal(0, col.compare("ᅥ", "ￆ"), "ᅥ = ￆ");
        test.equal(0, col.compare("ￆ", "ㅓ"), "ￆ = ㅓ");
        test.equal(0, col.compare("ᅦ", "ￇ"), "ᅦ = ￇ");
        test.equal(0, col.compare("ￇ", "ㅔ"), "ￇ = ㅔ");
        test.equal(0, col.compare("ᅧ", "ￊ"), "ᅧ = ￊ");
        test.equal(0, col.compare("ￊ", "ㅕ"), "ￊ = ㅕ");
        test.equal(0, col.compare("ᅨ", "ￋ"), "ᅨ = ￋ");
        test.equal(0, col.compare("ￋ", "ㅖ"), "ￋ = ㅖ");
        test.equal(0, col.compare("ᅩ", "ￌ"), "ᅩ = ￌ");
        test.equal(0, col.compare("ￌ", "ㅗ"), "ￌ = ㅗ");
        test.equal(0, col.compare("ᅪ", "ￍ"), "ᅪ = ￍ");
        test.equal(0, col.compare("ￍ", "ㅘ"), "ￍ = ㅘ");
        test.equal(0, col.compare("ᅫ", "ￎ"), "ᅫ = ￎ");
        test.equal(0, col.compare("ￎ", "ㅙ"), "ￎ = ㅙ");
        test.equal(0, col.compare("ᅬ", "ￏ"), "ᅬ = ￏ");
        test.equal(0, col.compare("ￏ", "ㅚ"), "ￏ = ㅚ");
        test.equal(0, col.compare("ᅭ", "ￒ"), "ᅭ = ￒ");
        test.equal(0, col.compare("ￒ", "ㅛ"), "ￒ = ㅛ");
        test.equal(0, col.compare("ᅮ", "ￓ"), "ᅮ = ￓ");
        test.equal(0, col.compare("ￓ", "ㅜ"), "ￓ = ㅜ");
        test.equal(0, col.compare("ᅯ", "ￔ"), "ᅯ = ￔ");
        test.equal(0, col.compare("ￔ", "ㅝ"), "ￔ = ㅝ");
        test.equal(0, col.compare("ᅰ", "ￕ"), "ᅰ = ￕ");
        test.equal(0, col.compare("ￕ", "ㅞ"), "ￕ = ㅞ");
        test.equal(0, col.compare("ᅱ", "ￖ"), "ᅱ = ￖ");
        test.equal(0, col.compare("ￖ", "ㅟ"), "ￖ = ㅟ");
        test.equal(0, col.compare("ᅲ", "ￗ"), "ᅲ = ￗ");
        test.equal(0, col.compare("ￗ", "ㅠ"), "ￗ = ㅠ");
        test.equal(0, col.compare("ᅳ", "ￚ"), "ᅳ = ￚ");
        test.equal(0, col.compare("ￚ", "ㅡ"), "ￚ = ㅡ");
        test.equal(0, col.compare("ᅴ", "ￛ"), "ᅴ = ￛ");
        test.equal(0, col.compare("ￛ", "ㅢ"), "ￛ = ㅢ");
        test.equal(0, col.compare("ᅵ", "ￜ"), "ᅵ = ￜ");
        test.equal(0, col.compare("ￜ", "ㅣ"), "ￜ = ㅣ");
        test.equal(0, col.compare("ᆪ", "ﾣ"), "ᆪ = ﾣ");
        test.equal(0, col.compare("ﾣ", "ㄳ"), "ﾣ = ㄳ");
        test.equal(0, col.compare("ᆬ", "ﾥ"), "ᆬ = ﾥ");
        test.equal(0, col.compare("ﾥ", "ㄵ"), "ﾥ = ㄵ");
        test.equal(0, col.compare("ᆭ", "ﾦ"), "ᆭ = ﾦ");
        test.equal(0, col.compare("ﾦ", "ㄶ"), "ﾦ = ㄶ");
        test.equal(0, col.compare("ᆰ", "ﾪ"), "ᆰ = ﾪ");
        test.equal(0, col.compare("ﾪ", "ㄺ"), "ﾪ = ㄺ");
        test.equal(0, col.compare("ᆱ", "ﾫ"), "ᆱ = ﾫ");
        test.equal(0, col.compare("ﾫ", "ㄻ"), "ﾫ = ㄻ");
        test.equal(0, col.compare("ᆲ", "ﾬ"), "ᆲ = ﾬ");
        test.equal(0, col.compare("ﾬ", "ㄼ"), "ﾬ = ㄼ");
        test.equal(0, col.compare("ᆳ", "ﾭ"), "ᆳ = ﾭ");
        test.equal(0, col.compare("ﾭ", "ㄽ"), "ﾭ = ㄽ");
        test.equal(0, col.compare("ᆴ", "ﾮ"), "ᆴ = ﾮ");
        test.equal(0, col.compare("ﾮ", "ㄾ"), "ﾮ = ㄾ");
        test.equal(0, col.compare("ᆵ", "ﾯ"), "ᆵ = ﾯ");
        test.equal(0, col.compare("ﾯ", "ㄿ"), "ﾯ = ㄿ");
        
        test.equal(0, col.compare("₩", "￦"), "₩ = ￦");
        test.done();
    },
    
    testJSCollatorJamoLHalfwidthTer_ko: function(test) {
        test.expect(104);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.equal(0, col.compare("ᄀ", "ﾡ"), "ᄀ = ﾡ");
        test.equal(0, col.compare("ﾡ", "ㄱ"), "ﾡ = ㄱ");
        test.equal(0, col.compare("ᄁ", "ﾢ"), "ᄁ = ﾢ");
        test.equal(0, col.compare("ﾢ", "ㄲ"), "ﾢ = ㄲ");
        test.equal(0, col.compare("ᄂ", "ﾤ"), "ᄂ = ﾤ");
        test.equal(0, col.compare("ﾤ", "ㄴ"), "ﾤ = ㄴ");
        test.equal(0, col.compare("ᄃ", "ﾧ"), "ᄃ = ﾧ");
        test.equal(0, col.compare("ﾧ", "ㄷ"), "ﾧ = ㄷ");
        test.equal(0, col.compare("ᄄ", "ﾨ"), "ᄄ = ﾨ");
        test.equal(0, col.compare("ﾨ", "ㄸ"), "ﾨ = ㄸ");
        test.equal(0, col.compare("ᄅ", "ﾩ"), "ᄅ = ﾩ");
        test.equal(0, col.compare("ﾩ", "ㄹ"), "ﾩ = ㄹ");
        test.equal(0, col.compare("ᄆ", "ﾱ"), "ᄆ = ﾱ");
        test.equal(0, col.compare("ﾱ", "ㅁ"), "ﾱ = ㅁ");
        test.equal(0, col.compare("ᄇ", "ﾲ"), "ᄇ = ﾲ");
        test.equal(0, col.compare("ﾲ", "ㅂ"), "ﾲ = ㅂ");
        test.equal(0, col.compare("ᄈ", "ﾳ"), "ᄈ = ﾳ");
        test.equal(0, col.compare("ﾳ", "ㅃ"), "ﾳ = ㅃ");
        test.equal(0, col.compare("ᄉ", "ﾵ"), "ᄉ = ﾵ");
        test.equal(0, col.compare("ﾵ", "ㅅ"), "ﾵ = ㅅ");
        test.equal(0, col.compare("ᄊ", "ﾶ"), "ᄊ = ﾶ");
        test.equal(0, col.compare("ﾶ", "ㅆ"), "ﾶ = ㅆ");
        test.equal(0, col.compare("ᄋ", "ﾷ"), "ᄋ = ﾷ");
        test.equal(0, col.compare("ﾷ", "ㅇ"), "ﾷ = ㅇ");
        test.equal(0, col.compare("ᄌ", "ﾸ"), "ᄌ = ﾸ");
        test.equal(0, col.compare("ﾸ", "ㅈ"), "ﾸ = ㅈ");
        test.equal(0, col.compare("ᄍ", "ﾹ"), "ᄍ = ﾹ");
        test.equal(0, col.compare("ﾹ", "ㅉ"), "ﾹ = ㅉ");
        test.equal(0, col.compare("ᄎ", "ﾺ"), "ᄎ = ﾺ");
        test.equal(0, col.compare("ﾺ", "ㅊ"), "ﾺ = ㅊ");
        test.equal(0, col.compare("ᄏ", "ﾻ"), "ᄏ = ﾻ");
        test.equal(0, col.compare("ﾻ", "ㅋ"), "ﾻ = ㅋ");
        test.equal(0, col.compare("ᄐ", "ﾼ"), "ᄐ = ﾼ");
        test.equal(0, col.compare("ﾼ", "ㅌ"), "ﾼ = ㅌ");
        test.equal(0, col.compare("ᄑ", "ﾽ"), "ᄑ = ﾽ");
        test.equal(0, col.compare("ﾽ", "ㅍ"), "ﾽ = ㅍ");
        test.equal(0, col.compare("ᄒ", "ﾾ"), "ᄒ = ﾾ");
        test.equal(0, col.compare("ﾾ", "ㅎ"), "ﾾ = ㅎ");
        test.equal(0, col.compare("ᄚ", "ﾰ"), "ᄚ = ﾰ");
        test.equal(0, col.compare("ﾰ", "ㅀ"), "ﾰ = ㅀ");
        test.equal(0, col.compare("ᄡ", "ﾴ"), "ᄡ = ﾴ");
        test.equal(0, col.compare("ﾴ", "ㅄ"), "ﾴ = ㅄ");
        
        test.equal(0, col.compare("ᅡ", "ￂ"), "ᅡ = ￂ");
        test.equal(0, col.compare("ￂ", "ㅏ"), "ￂ = ㅏ");
        test.equal(0, col.compare("ᅢ", "ￃ"), "ᅢ = ￃ");
        test.equal(0, col.compare("ￃ", "ㅐ"), "ￃ = ㅐ");
        test.equal(0, col.compare("ᅣ", "ￄ"), "ᅣ = ￄ");
        test.equal(0, col.compare("ￄ", "ㅑ"), "ￄ = ㅑ");
        test.equal(0, col.compare("ᅤ", "ￅ"), "ᅤ = ￅ");
        test.equal(0, col.compare("ￅ", "ㅒ"), "ￅ = ㅒ");
        test.equal(0, col.compare("ᅥ", "ￆ"), "ᅥ = ￆ");
        test.equal(0, col.compare("ￆ", "ㅓ"), "ￆ = ㅓ");
        test.equal(0, col.compare("ᅦ", "ￇ"), "ᅦ = ￇ");
        test.equal(0, col.compare("ￇ", "ㅔ"), "ￇ = ㅔ");
        test.equal(0, col.compare("ᅧ", "ￊ"), "ᅧ = ￊ");
        test.equal(0, col.compare("ￊ", "ㅕ"), "ￊ = ㅕ");
        test.equal(0, col.compare("ᅨ", "ￋ"), "ᅨ = ￋ");
        test.equal(0, col.compare("ￋ", "ㅖ"), "ￋ = ㅖ");
        test.equal(0, col.compare("ᅩ", "ￌ"), "ᅩ = ￌ");
        test.equal(0, col.compare("ￌ", "ㅗ"), "ￌ = ㅗ");
        test.equal(0, col.compare("ᅪ", "ￍ"), "ᅪ = ￍ");
        test.equal(0, col.compare("ￍ", "ㅘ"), "ￍ = ㅘ");
        test.equal(0, col.compare("ᅫ", "ￎ"), "ᅫ = ￎ");
        test.equal(0, col.compare("ￎ", "ㅙ"), "ￎ = ㅙ");
        test.equal(0, col.compare("ᅬ", "ￏ"), "ᅬ = ￏ");
        test.equal(0, col.compare("ￏ", "ㅚ"), "ￏ = ㅚ");
        test.equal(0, col.compare("ᅭ", "ￒ"), "ᅭ = ￒ");
        test.equal(0, col.compare("ￒ", "ㅛ"), "ￒ = ㅛ");
        test.equal(0, col.compare("ᅮ", "ￓ"), "ᅮ = ￓ");
        test.equal(0, col.compare("ￓ", "ㅜ"), "ￓ = ㅜ");
        test.equal(0, col.compare("ᅯ", "ￔ"), "ᅯ = ￔ");
        test.equal(0, col.compare("ￔ", "ㅝ"), "ￔ = ㅝ");
        test.equal(0, col.compare("ᅰ", "ￕ"), "ᅰ = ￕ");
        test.equal(0, col.compare("ￕ", "ㅞ"), "ￕ = ㅞ");
        test.equal(0, col.compare("ᅱ", "ￖ"), "ᅱ = ￖ");
        test.equal(0, col.compare("ￖ", "ㅟ"), "ￖ = ㅟ");
        test.equal(0, col.compare("ᅲ", "ￗ"), "ᅲ = ￗ");
        test.equal(0, col.compare("ￗ", "ㅠ"), "ￗ = ㅠ");
        test.equal(0, col.compare("ᅳ", "ￚ"), "ᅳ = ￚ");
        test.equal(0, col.compare("ￚ", "ㅡ"), "ￚ = ㅡ");
        test.equal(0, col.compare("ᅴ", "ￛ"), "ᅴ = ￛ");
        test.equal(0, col.compare("ￛ", "ㅢ"), "ￛ = ㅢ");
        test.equal(0, col.compare("ᅵ", "ￜ"), "ᅵ = ￜ");
        test.equal(0, col.compare("ￜ", "ㅣ"), "ￜ = ㅣ");
        test.equal(0, col.compare("ᆪ", "ﾣ"), "ᆪ = ﾣ");
        test.equal(0, col.compare("ﾣ", "ㄳ"), "ﾣ = ㄳ");
        test.equal(0, col.compare("ᆬ", "ﾥ"), "ᆬ = ﾥ");
        test.equal(0, col.compare("ﾥ", "ㄵ"), "ﾥ = ㄵ");
        test.equal(0, col.compare("ᆭ", "ﾦ"), "ᆭ = ﾦ");
        test.equal(0, col.compare("ﾦ", "ㄶ"), "ﾦ = ㄶ");
        test.equal(0, col.compare("ᆰ", "ﾪ"), "ᆰ = ﾪ");
        test.equal(0, col.compare("ﾪ", "ㄺ"), "ﾪ = ㄺ");
        test.equal(0, col.compare("ᆱ", "ﾫ"), "ᆱ = ﾫ");
        test.equal(0, col.compare("ﾫ", "ㄻ"), "ﾫ = ㄻ");
        test.equal(0, col.compare("ᆲ", "ﾬ"), "ᆲ = ﾬ");
        test.equal(0, col.compare("ﾬ", "ㄼ"), "ﾬ = ㄼ");
        test.equal(0, col.compare("ᆳ", "ﾭ"), "ᆳ = ﾭ");
        test.equal(0, col.compare("ﾭ", "ㄽ"), "ﾭ = ㄽ");
        test.equal(0, col.compare("ᆴ", "ﾮ"), "ᆴ = ﾮ");
        test.equal(0, col.compare("ﾮ", "ㄾ"), "ﾮ = ㄾ");
        test.equal(0, col.compare("ᆵ", "ﾯ"), "ᆵ = ﾯ");
        test.equal(0, col.compare("ﾯ", "ㄿ"), "ﾯ = ㄿ");
        
        test.equal(0, col.compare("₩", "￦"), "₩ = ￦");
        test.done();
    },
    
    testJSCollatorJamoLHalfwidthTer_ko: function(test) {
        test.expect(104);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });
    
        test.ok(typeof(col) !== "undefined");
    
        test.ok("ᄀ < ﾡ", col.compare("ᄀ", "ﾡ") < 0);
        test.ok("ﾡ < ㄱ", col.compare("ﾡ", "ㄱ") < 0);
        test.ok("ᄁ < ﾢ", col.compare("ᄁ", "ﾢ") < 0);
        test.ok("ﾢ < ㄲ", col.compare("ﾢ", "ㄲ") < 0);
        test.ok("ᄂ < ﾤ", col.compare("ᄂ", "ﾤ") < 0);
        test.ok("ﾤ < ㄴ", col.compare("ﾤ", "ㄴ") < 0);
        test.ok("ᄃ < ﾧ", col.compare("ᄃ", "ﾧ") < 0);
        test.ok("ﾧ < ㄷ", col.compare("ﾧ", "ㄷ") < 0);
        test.ok("ᄄ < ﾨ", col.compare("ᄄ", "ﾨ") < 0);
        test.ok("ﾨ < ㄸ", col.compare("ﾨ", "ㄸ") < 0);
        test.ok("ᄅ < ﾩ", col.compare("ᄅ", "ﾩ") < 0);
        test.ok("ﾩ < ㄹ", col.compare("ﾩ", "ㄹ") < 0);
        test.ok("ᄆ < ﾱ", col.compare("ᄆ", "ﾱ") < 0);
        test.ok("ﾱ < ㅁ", col.compare("ﾱ", "ㅁ") < 0);
        test.ok("ᄇ < ﾲ", col.compare("ᄇ", "ﾲ") < 0);
        test.ok("ﾲ < ㅂ", col.compare("ﾲ", "ㅂ") < 0);
        test.ok("ᄈ < ﾳ", col.compare("ᄈ", "ﾳ") < 0);
        test.ok("ﾳ < ㅃ", col.compare("ﾳ", "ㅃ") < 0);
        test.ok("ᄉ < ﾵ", col.compare("ᄉ", "ﾵ") < 0);
        test.ok("ﾵ < ㅅ", col.compare("ﾵ", "ㅅ") < 0);
        test.ok("ᄊ < ﾶ", col.compare("ᄊ", "ﾶ") < 0);
        test.ok("ﾶ < ㅆ", col.compare("ﾶ", "ㅆ") < 0);
        test.ok("ᄋ < ﾷ", col.compare("ᄋ", "ﾷ") < 0);
        test.ok("ﾷ < ㅇ", col.compare("ﾷ", "ㅇ") < 0);
        test.ok("ᄌ < ﾸ", col.compare("ᄌ", "ﾸ") < 0);
        test.ok("ﾸ < ㅈ", col.compare("ﾸ", "ㅈ") < 0);
        test.ok("ᄍ < ﾹ", col.compare("ᄍ", "ﾹ") < 0);
        test.ok("ﾹ < ㅉ", col.compare("ﾹ", "ㅉ") < 0);
        test.ok("ᄎ < ﾺ", col.compare("ᄎ", "ﾺ") < 0);
        test.ok("ﾺ < ㅊ", col.compare("ﾺ", "ㅊ") < 0);
        test.ok("ᄏ < ﾻ", col.compare("ᄏ", "ﾻ") < 0);
        test.ok("ﾻ < ㅋ", col.compare("ﾻ", "ㅋ") < 0);
        test.ok("ᄐ < ﾼ", col.compare("ᄐ", "ﾼ") < 0);
        test.ok("ﾼ < ㅌ", col.compare("ﾼ", "ㅌ") < 0);
        test.ok("ᄑ < ﾽ", col.compare("ᄑ", "ﾽ") < 0);
        test.ok("ﾽ < ㅍ", col.compare("ﾽ", "ㅍ") < 0);
        test.ok("ᄒ < ﾾ", col.compare("ᄒ", "ﾾ") < 0);
        test.ok("ﾾ < ㅎ", col.compare("ﾾ", "ㅎ") < 0);
        test.ok("ᄚ < ﾰ", col.compare("ᄚ", "ﾰ") < 0);
        test.ok("ﾰ < ㅀ", col.compare("ﾰ", "ㅀ") < 0);
        test.ok("ᄡ < ﾴ", col.compare("ᄡ", "ﾴ") < 0);
        test.ok("ﾴ < ㅄ", col.compare("ﾴ", "ㅄ") < 0);
        
        test.ok("ᅡ < ￂ", col.compare("ᅡ", "ￂ") < 0);
        test.ok("ￂ < ㅏ", col.compare("ￂ", "ㅏ") < 0);
        test.ok("ᅢ < ￃ", col.compare("ᅢ", "ￃ") < 0);
        test.ok("ￃ < ㅐ", col.compare("ￃ", "ㅐ") < 0);
        test.ok("ᅣ < ￄ", col.compare("ᅣ", "ￄ") < 0);
        test.ok("ￄ < ㅑ", col.compare("ￄ", "ㅑ") < 0);
        test.ok("ᅤ < ￅ", col.compare("ᅤ", "ￅ") < 0);
        test.ok("ￅ < ㅒ", col.compare("ￅ", "ㅒ") < 0);
        test.ok("ᅥ < ￆ", col.compare("ᅥ", "ￆ") < 0);
        test.ok("ￆ < ㅓ", col.compare("ￆ", "ㅓ") < 0);
        test.ok("ᅦ < ￇ", col.compare("ᅦ", "ￇ") < 0);
        test.ok("ￇ < ㅔ", col.compare("ￇ", "ㅔ") < 0);
        test.ok("ᅧ < ￊ", col.compare("ᅧ", "ￊ") < 0);
        test.ok("ￊ < ㅕ", col.compare("ￊ", "ㅕ") < 0);
        test.ok("ᅨ < ￋ", col.compare("ᅨ", "ￋ") < 0);
        test.ok("ￋ < ㅖ", col.compare("ￋ", "ㅖ") < 0);
        test.ok("ᅩ < ￌ", col.compare("ᅩ", "ￌ") < 0);
        test.ok("ￌ < ㅗ", col.compare("ￌ", "ㅗ") < 0);
        test.ok("ᅪ < ￍ", col.compare("ᅪ", "ￍ") < 0);
        test.ok("ￍ < ㅘ", col.compare("ￍ", "ㅘ") < 0);
        test.ok("ᅫ < ￎ", col.compare("ᅫ", "ￎ") < 0);
        test.ok("ￎ < ㅙ", col.compare("ￎ", "ㅙ") < 0);
        test.ok("ᅬ < ￏ", col.compare("ᅬ", "ￏ") < 0);
        test.ok("ￏ < ㅚ", col.compare("ￏ", "ㅚ") < 0);
        test.ok("ᅭ < ￒ", col.compare("ᅭ", "ￒ") < 0);
        test.ok("ￒ < ㅛ", col.compare("ￒ", "ㅛ") < 0);
        test.ok("ᅮ < ￓ", col.compare("ᅮ", "ￓ") < 0);
        test.ok("ￓ < ㅜ", col.compare("ￓ", "ㅜ") < 0);
        test.ok("ᅯ < ￔ", col.compare("ᅯ", "ￔ") < 0);
        test.ok("ￔ < ㅝ", col.compare("ￔ", "ㅝ") < 0);
        test.ok("ᅰ < ￕ", col.compare("ᅰ", "ￕ") < 0);
        test.ok("ￕ < ㅞ", col.compare("ￕ", "ㅞ") < 0);
        test.ok("ᅱ < ￖ", col.compare("ᅱ", "ￖ") < 0);
        test.ok("ￖ < ㅟ", col.compare("ￖ", "ㅟ") < 0);
        test.ok("ᅲ < ￗ", col.compare("ᅲ", "ￗ") < 0);
        test.ok("ￗ < ㅠ", col.compare("ￗ", "ㅠ") < 0);
        test.ok("ᅳ < ￚ", col.compare("ᅳ", "ￚ") < 0);
        test.ok("ￚ < ㅡ", col.compare("ￚ", "ㅡ") < 0);
        test.ok("ᅴ < ￛ", col.compare("ᅴ", "ￛ") < 0);
        test.ok("ￛ < ㅢ", col.compare("ￛ", "ㅢ") < 0);
        test.ok("ᅵ < ￜ", col.compare("ᅵ", "ￜ") < 0);
        test.ok("ￜ < ㅣ", col.compare("ￜ", "ㅣ") < 0);
        test.ok("ᆪ < ﾣ", col.compare("ᆪ", "ﾣ") < 0);
        test.ok("ﾣ < ㄳ", col.compare("ﾣ", "ㄳ") < 0);
        test.ok("ᆬ < ﾥ", col.compare("ᆬ", "ﾥ") < 0);
        test.ok("ﾥ < ㄵ", col.compare("ﾥ", "ㄵ") < 0);
        test.ok("ᆭ < ﾦ", col.compare("ᆭ", "ﾦ") < 0);
        test.ok("ﾦ < ㄶ", col.compare("ﾦ", "ㄶ") < 0);
        test.ok("ᆰ < ﾪ", col.compare("ᆰ", "ﾪ") < 0);
        test.ok("ﾪ < ㄺ", col.compare("ﾪ", "ㄺ") < 0);
        test.ok("ᆱ < ﾫ", col.compare("ᆱ", "ﾫ") < 0);
        test.ok("ﾫ < ㄻ", col.compare("ﾫ", "ㄻ") < 0);
        test.ok("ᆲ < ﾬ", col.compare("ᆲ", "ﾬ") < 0);
        test.ok("ﾬ < ㄼ", col.compare("ﾬ", "ㄼ") < 0);
        test.ok("ᆳ < ﾭ", col.compare("ᆳ", "ﾭ") < 0);
        test.ok("ﾭ < ㄽ", col.compare("ﾭ", "ㄽ") < 0);
        test.ok("ᆴ < ﾮ", col.compare("ᆴ", "ﾮ") < 0);
        test.ok("ﾮ < ㄾ", col.compare("ﾮ", "ㄾ") < 0);
        test.ok("ᆵ < ﾯ", col.compare("ᆵ", "ﾯ") < 0);
        test.ok("ﾯ < ㄿ", col.compare("ﾯ", "ㄿ") < 0);
        
        test.ok("₩ < ￦", col.compare("₩", "￦") < 0);
        test.done();
    },
    
    testCollatorPri_ko: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ko-KR",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");
    
        var input = [
             "성항동",
            "한명숙",
            "김유리",
            "최순길",
            "한덕수",
            "손형호",
            "정홍원",
            "김황식",
            "정운찬",
            "한승수",
            "이해찬",
            "고건",
            "김석수"
        ];
    
        input.sort(col.getComparator());
    
        var expected = [
            "고건",
            "김석수",
            "김유리",
            "김황식",
            "성항동",
            "손형호",
            "이해찬",
            "정운찬",
            "정홍원",
            "최순길",
            "한덕수",
            "한명숙",
            "한승수"                    
        ];
    
        test.deepEqual(input, expected);
        test.done();
    }
    
};
