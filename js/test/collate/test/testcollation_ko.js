/*
 * testcollation_ko.js - test the Collator object in Korean
 * 
 * Copyright © 2014, JEDLSoft
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

var ilib = require("../lib/ilib.js");
var Collator = require("../lib/Collator.js");
function testJSCollatorPriL_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// 가까나다따
	assertTrue("가 < 까", col.compare("가", "까") < 0);
	assertTrue("까 < 나", col.compare("까", "나") < 0);
	assertTrue("나 < 다", col.compare("나", "다") < 0);
	assertTrue("다 < 따", col.compare("다", "따") < 0);
}

function testJSCollatorPriV_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// 가개갸걔거
	assertTrue("가 < 개", col.compare("가", "개") < 0);
	assertTrue("개 < 갸", col.compare("개", "갸") < 0);
	assertTrue("갸 < 걔", col.compare("갸", "걔") < 0);
	assertTrue("걔 < 거", col.compare("걔", "거") < 0);
}

function testJSCollatorPriT_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// 가각갂갃간
	assertTrue("가 < 각", col.compare("가", "각") < 0);
	assertTrue("각 < 갂", col.compare("각", "갂") < 0);
	assertTrue("갂 < 갃", col.compare("갂", "갃") < 0);
	assertTrue("갃 < 간", col.compare("갃", "간") < 0);
}

function testJSCollatorSecL_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// 가까나다따
	assertTrue("가 < 까", col.compare("가", "까") < 0);
	assertTrue("까 < 나", col.compare("까", "나") < 0);
	assertTrue("나 < 다", col.compare("나", "다") < 0);
	assertTrue("다 < 따", col.compare("다", "따") < 0);
}

function testJSCollatorSecV_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// 가개갸걔거
	assertTrue("가 < 개", col.compare("가", "개") < 0);
	assertTrue("개 < 갸", col.compare("개", "갸") < 0);
	assertTrue("갸 < 걔", col.compare("갸", "걔") < 0);
	assertTrue("걔 < 거", col.compare("걔", "거") < 0);
}

function testJSCollatorSecT_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// 가각갂갃간
	assertTrue("가 < 각", col.compare("가", "각") < 0);
	assertTrue("각 < 갂", col.compare("각", "갂") < 0);
	assertTrue("갂 < 갃", col.compare("갂", "갃") < 0);
	assertTrue("갃 < 간", col.compare("갃", "간") < 0);
}

function testJSCollatorTerL_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	// 가까나다따
	assertTrue("가 < 까", col.compare("가", "까") < 0);
	assertTrue("까 < 나", col.compare("까", "나") < 0);
	assertTrue("나 < 다", col.compare("나", "다") < 0);
	assertTrue("다 < 따", col.compare("다", "따") < 0);
}

function testJSCollatorTerV_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	// 가개갸걔거
	assertTrue("가 < 개", col.compare("가", "개") < 0);
	assertTrue("개 < 갸", col.compare("개", "갸") < 0);
	assertTrue("갸 < 걔", col.compare("갸", "걔") < 0);
	assertTrue("걔 < 거", col.compare("걔", "거") < 0);
}

function testJSCollatorTerT_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	// 가각갂갃간
	assertTrue("가 < 각", col.compare("가", "각") < 0);
	assertTrue("각 < 갂", col.compare("각", "갂") < 0);
	assertTrue("갂 < 갃", col.compare("갂", "갃") < 0);
	assertTrue("갃 < 간", col.compare("갃", "간") < 0);
}

function testJSCollatorQuatL_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// 가까나다따
	assertTrue("가 < 까", col.compare("가", "까") < 0);
	assertTrue("까 < 나", col.compare("까", "나") < 0);
	assertTrue("나 < 다", col.compare("나", "다") < 0);
	assertTrue("다 < 따", col.compare("다", "따") < 0);
}

function testJSCollatorQuatV_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// 가개갸걔거
	assertTrue("가 < 개", col.compare("가", "개") < 0);
	assertTrue("개 < 갸", col.compare("개", "갸") < 0);
	assertTrue("갸 < 걔", col.compare("갸", "걔") < 0);
	assertTrue("걔 < 거", col.compare("걔", "거") < 0);
}

function testJSCollatorQuatT_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// 가각갂갃간
	assertTrue("가 < 각", col.compare("가", "각") < 0);
	assertTrue("각 < 갂", col.compare("각", "갂") < 0);
	assertTrue("갂 < 갃", col.compare("갂", "갃") < 0);
	assertTrue("갃 < 간", col.compare("갃", "간") < 0);
}

function testJSCollatorJamoL_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// initial consonants ㄱ ㄲ ㄴ ㄷ ㄸ ㄹ ㅁ ㅂ ㅃ ㅅ ㅆ ㅇ ㅈ ㅉ ㅊ ㅋ ㅌ ㅍ ㅎ
	assertTrue("ㄱ < ㄲ", col.compare("ㄱ", "ㄲ") < 0);
	assertTrue("ㄲ < ㄴ", col.compare("ㄲ", "ㄴ") < 0);
	assertTrue("ㄴ < ㄷ", col.compare("ㄴ", "ㄷ") < 0);
	assertTrue("ㄷ < ㄸ", col.compare("ㄷ", "ㄸ") < 0);
	assertTrue("ㄸ < ㄹ", col.compare("ㄸ", "ㄹ") < 0);
	assertTrue("ㄹ < ㅁ", col.compare("ㄹ", "ㅁ") < 0);
	assertTrue("ㅁ < ㅂ", col.compare("ㅁ", "ㅂ") < 0);
	assertTrue("ㅂ < ㅃ", col.compare("ㅂ", "ㅃ") < 0);
	assertTrue("ㅃ < ㅅ", col.compare("ㅃ", "ㅅ") < 0);
	assertTrue("ㅅ < ㅆ", col.compare("ㅅ", "ㅆ") < 0);
	assertTrue("ㅆ < ㅇ", col.compare("ㅆ", "ㅇ") < 0);
	assertTrue("ㅇ < ㅈ", col.compare("ㅇ", "ㅈ") < 0);
	assertTrue("ㅈ < ㅉ", col.compare("ㅈ", "ㅉ") < 0);
	assertTrue("ㅉ < ㅊ", col.compare("ㅉ", "ㅊ") < 0);
	assertTrue("ㅊ < ㅋ", col.compare("ㅊ", "ㅋ") < 0);
	assertTrue("ㅋ < ㅌ", col.compare("ㅋ", "ㅌ") < 0);
	assertTrue("ㅌ < ㅍ", col.compare("ㅌ", "ㅍ") < 0);
	assertTrue("ㅍ < ㅎ", col.compare("ㅍ", "ㅎ") < 0);
}

function testJSCollatorJamoV_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// middle vowels ㅏ ㅐ ㅑ ㅒ ㅓ ㅔ ㅕ ㅖ ㅗ ㅘ ㅙ ㅚ ㅛ ㅜ ㅝ ㅞ ㅟ ㅠ ㅡ ㅢ ㅣ
	assertTrue("ㅏ < ㅐ", col.compare("ㅏ", "ㅐ") < 0);
	assertTrue("ㅐ < ㅑ", col.compare("ㅐ", "ㅑ") < 0);
	assertTrue("ㅑ < ㅒ", col.compare("ㅑ", "ㅒ") < 0);
	assertTrue("ㅒ < ㅓ", col.compare("ㅒ", "ㅓ") < 0);
	assertTrue("ㅓ < ㅔ", col.compare("ㅓ", "ㅔ") < 0);
	assertTrue("ㅔ < ㅕ", col.compare("ㅔ", "ㅕ") < 0);
	assertTrue("ㅕ < ㅖ", col.compare("ㅕ", "ㅖ") < 0);
	assertTrue("ㅖ < ㅗ", col.compare("ㅖ", "ㅗ") < 0);
	assertTrue("ㅗ < ㅘ", col.compare("ㅗ", "ㅘ") < 0);
	assertTrue("ㅘ < ㅙ", col.compare("ㅘ", "ㅙ") < 0);
	assertTrue("ㅙ < ㅚ", col.compare("ㅙ", "ㅚ") < 0);
	assertTrue("ㅚ < ㅛ", col.compare("ㅚ", "ㅛ") < 0);
	assertTrue("ㅛ < ㅜ", col.compare("ㅛ", "ㅜ") < 0);
	assertTrue("ㅜ < ㅝ", col.compare("ㅜ", "ㅝ") < 0);
	assertTrue("ㅝ < ㅞ", col.compare("ㅝ", "ㅞ") < 0);
	assertTrue("ㅞ < ㅟ", col.compare("ㅞ", "ㅟ") < 0);
	assertTrue("ㅟ < ㅠ", col.compare("ㅟ", "ㅠ") < 0);
	assertTrue("ㅠ < ㅡ", col.compare("ㅠ", "ㅡ") < 0);
	assertTrue("ㅡ < ㅢ", col.compare("ㅡ", "ㅢ") < 0);
	assertTrue("ㅢ < ㅣ", col.compare("ㅢ", "ㅣ") < 0);
}

function testJSCollatorJamoT_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// optional final consonants ㄱ ㄲ ㄳ ㄴ ㄵ ㄶ ㄷ ㄹ ㄺ ㄻ ㄼ ㄽ ㄾ ㄿ ㅀ ㅁ ㅂ ㅄ ㅅ ㅆ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ
	
	assertTrue("ᆨ < ᆩ", col.compare("ᆨ", "ᆩ") < 0);
	assertTrue("ᆩ < ᆪ", col.compare("ᆩ", "ᆪ") < 0);
	assertTrue("ᆪ < ᆫ", col.compare("ᆪ", "ᆫ") < 0);
	assertTrue("ᆫ < ᆬ", col.compare("ᆫ", "ᆬ") < 0);
	assertTrue("ᆬ < ᆭ", col.compare("ᆬ", "ᆭ") < 0);
	assertTrue("ᆭ < ᆮ", col.compare("ᆭ", "ᆮ") < 0);
	assertTrue("ᆮ < ᆯ", col.compare("ᆮ", "ᆯ") < 0);
	assertTrue("ᆯ < ᆰ", col.compare("ᆯ", "ᆰ") < 0);
	assertTrue("ᆰ < ᆱ", col.compare("ᆰ", "ᆱ") < 0);
	assertTrue("ᆱ < ᆲ", col.compare("ᆱ", "ᆲ") < 0);
	assertTrue("ᆲ < ᆳ", col.compare("ᆲ", "ᆳ") < 0);
	assertTrue("ᆳ < ᆴ", col.compare("ᆳ", "ᆴ") < 0);
	assertTrue("ᆴ < ᆵ", col.compare("ᆴ", "ᆵ") < 0);
	assertTrue("ᆵ < ᆶ", col.compare("ᆵ", "ᆶ") < 0);
	assertTrue("ᆶ < ᆷ", col.compare("ᆶ", "ᆷ") < 0);
	assertTrue("ᆷ < ᆸ", col.compare("ᆷ", "ᆸ") < 0);
	assertTrue("ᆸ < ᆹ", col.compare("ᆸ", "ᆹ") < 0);
	assertTrue("ᆹ < ᆺ", col.compare("ᆹ", "ᆺ") < 0);
	assertTrue("ᆺ < ᆻ", col.compare("ᆺ", "ᆻ") < 0);
	assertTrue("ᆻ < ᆼ", col.compare("ᆻ", "ᆼ") < 0);
	assertTrue("ᆼ < ᆽ", col.compare("ᆼ", "ᆽ") < 0);
	assertTrue("ᆽ < ᆾ", col.compare("ᆽ", "ᆾ") < 0);
	assertTrue("ᆾ < ᆿ", col.compare("ᆾ", "ᆿ") < 0);
	assertTrue("ᆿ < ᇀ", col.compare("ᆿ", "ᇀ") < 0);
	assertTrue("ᇀ < ᇁ", col.compare("ᇀ", "ᇁ") < 0);
	assertTrue("ᇁ < ᇂ", col.compare("ᇁ", "ᇂ") < 0);
}

function testJSCollatorJamoLHalfwidthPri_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("ᄀ = ﾡ", 0, col.compare("ᄀ", "ﾡ"));
	assertEquals("ﾡ = ㄱ", 0, col.compare("ﾡ", "ㄱ"));
	assertEquals("ᄁ = ﾢ", 0, col.compare("ᄁ", "ﾢ"));
	assertEquals("ﾢ = ㄲ", 0, col.compare("ﾢ", "ㄲ"));
    assertEquals("ᄂ = ﾤ", 0, col.compare("ᄂ", "ﾤ"));
	assertEquals("ﾤ = ㄴ", 0, col.compare("ﾤ", "ㄴ"));
    assertEquals("ᄃ = ﾧ", 0, col.compare("ᄃ", "ﾧ"));
	assertEquals("ﾧ = ㄷ", 0, col.compare("ﾧ", "ㄷ"));
    assertEquals("ᄄ = ﾨ", 0, col.compare("ᄄ", "ﾨ"));
	assertEquals("ﾨ = ㄸ", 0, col.compare("ﾨ", "ㄸ"));
    assertEquals("ᄅ = ﾩ", 0, col.compare("ᄅ", "ﾩ"));
	assertEquals("ﾩ = ㄹ", 0, col.compare("ﾩ", "ㄹ"));
    assertEquals("ᄆ = ﾱ", 0, col.compare("ᄆ", "ﾱ"));
	assertEquals("ﾱ = ㅁ", 0, col.compare("ﾱ", "ㅁ"));
    assertEquals("ᄇ = ﾲ", 0, col.compare("ᄇ", "ﾲ"));
	assertEquals("ﾲ = ㅂ", 0, col.compare("ﾲ", "ㅂ"));
    assertEquals("ᄈ = ﾳ", 0, col.compare("ᄈ", "ﾳ"));
	assertEquals("ﾳ = ㅃ", 0, col.compare("ﾳ", "ㅃ"));
    assertEquals("ᄉ = ﾵ", 0, col.compare("ᄉ", "ﾵ"));
	assertEquals("ﾵ = ㅅ", 0, col.compare("ﾵ", "ㅅ"));
    assertEquals("ᄊ = ﾶ", 0, col.compare("ᄊ", "ﾶ"));
	assertEquals("ﾶ = ㅆ", 0, col.compare("ﾶ", "ㅆ"));
    assertEquals("ᄋ = ﾷ", 0, col.compare("ᄋ", "ﾷ"));
	assertEquals("ﾷ = ㅇ", 0, col.compare("ﾷ", "ㅇ"));
    assertEquals("ᄌ = ﾸ", 0, col.compare("ᄌ", "ﾸ"));
	assertEquals("ﾸ = ㅈ", 0, col.compare("ﾸ", "ㅈ"));
    assertEquals("ᄍ = ﾹ", 0, col.compare("ᄍ", "ﾹ"));
	assertEquals("ﾹ = ㅉ", 0, col.compare("ﾹ", "ㅉ"));
    assertEquals("ᄎ = ﾺ", 0, col.compare("ᄎ", "ﾺ"));
	assertEquals("ﾺ = ㅊ", 0, col.compare("ﾺ", "ㅊ"));
    assertEquals("ᄏ = ﾻ", 0, col.compare("ᄏ", "ﾻ"));
	assertEquals("ﾻ = ㅋ", 0, col.compare("ﾻ", "ㅋ"));
    assertEquals("ᄐ = ﾼ", 0, col.compare("ᄐ", "ﾼ"));
	assertEquals("ﾼ = ㅌ", 0, col.compare("ﾼ", "ㅌ"));
    assertEquals("ᄑ = ﾽ", 0, col.compare("ᄑ", "ﾽ"));
	assertEquals("ﾽ = ㅍ", 0, col.compare("ﾽ", "ㅍ"));
    assertEquals("ᄒ = ﾾ", 0, col.compare("ᄒ", "ﾾ"));
	assertEquals("ﾾ = ㅎ", 0, col.compare("ﾾ", "ㅎ"));
    assertEquals("ᄚ = ﾰ", 0, col.compare("ᄚ", "ﾰ"));
	assertEquals("ﾰ = ㅀ", 0, col.compare("ﾰ", "ㅀ"));
    assertEquals("ᄡ = ﾴ", 0, col.compare("ᄡ", "ﾴ"));
	assertEquals("ﾴ = ㅄ", 0, col.compare("ﾴ", "ㅄ"));
    
    assertEquals("ᅡ = ￂ", 0, col.compare("ᅡ", "ￂ"));
	assertEquals("ￂ = ㅏ", 0, col.compare("ￂ", "ㅏ"));
    assertEquals("ᅢ = ￃ", 0, col.compare("ᅢ", "ￃ"));
	assertEquals("ￃ = ㅐ", 0, col.compare("ￃ", "ㅐ"));
    assertEquals("ᅣ = ￄ", 0, col.compare("ᅣ", "ￄ"));
	assertEquals("ￄ = ㅑ", 0, col.compare("ￄ", "ㅑ"));
    assertEquals("ᅤ = ￅ", 0, col.compare("ᅤ", "ￅ"));
	assertEquals("ￅ = ㅒ", 0, col.compare("ￅ", "ㅒ"));
    assertEquals("ᅥ = ￆ", 0, col.compare("ᅥ", "ￆ"));
	assertEquals("ￆ = ㅓ", 0, col.compare("ￆ", "ㅓ"));
    assertEquals("ᅦ = ￇ", 0, col.compare("ᅦ", "ￇ"));
	assertEquals("ￇ = ㅔ", 0, col.compare("ￇ", "ㅔ"));
    assertEquals("ᅧ = ￊ", 0, col.compare("ᅧ", "ￊ"));
	assertEquals("ￊ = ㅕ", 0, col.compare("ￊ", "ㅕ"));
    assertEquals("ᅨ = ￋ", 0, col.compare("ᅨ", "ￋ"));
	assertEquals("ￋ = ㅖ", 0, col.compare("ￋ", "ㅖ"));
    assertEquals("ᅩ = ￌ", 0, col.compare("ᅩ", "ￌ"));
	assertEquals("ￌ = ㅗ", 0, col.compare("ￌ", "ㅗ"));
    assertEquals("ᅪ = ￍ", 0, col.compare("ᅪ", "ￍ"));
	assertEquals("ￍ = ㅘ", 0, col.compare("ￍ", "ㅘ"));
    assertEquals("ᅫ = ￎ", 0, col.compare("ᅫ", "ￎ"));
	assertEquals("ￎ = ㅙ", 0, col.compare("ￎ", "ㅙ"));
    assertEquals("ᅬ = ￏ", 0, col.compare("ᅬ", "ￏ"));
	assertEquals("ￏ = ㅚ", 0, col.compare("ￏ", "ㅚ"));
    assertEquals("ᅭ = ￒ", 0, col.compare("ᅭ", "ￒ"));
	assertEquals("ￒ = ㅛ", 0, col.compare("ￒ", "ㅛ"));
    assertEquals("ᅮ = ￓ", 0, col.compare("ᅮ", "ￓ"));
	assertEquals("ￓ = ㅜ", 0, col.compare("ￓ", "ㅜ"));
    assertEquals("ᅯ = ￔ", 0, col.compare("ᅯ", "ￔ"));
	assertEquals("ￔ = ㅝ", 0, col.compare("ￔ", "ㅝ"));
    assertEquals("ᅰ = ￕ", 0, col.compare("ᅰ", "ￕ"));
	assertEquals("ￕ = ㅞ", 0, col.compare("ￕ", "ㅞ"));
    assertEquals("ᅱ = ￖ", 0, col.compare("ᅱ", "ￖ"));
	assertEquals("ￖ = ㅟ", 0, col.compare("ￖ", "ㅟ"));
    assertEquals("ᅲ = ￗ", 0, col.compare("ᅲ", "ￗ"));
	assertEquals("ￗ = ㅠ", 0, col.compare("ￗ", "ㅠ"));
    assertEquals("ᅳ = ￚ", 0, col.compare("ᅳ", "ￚ"));
	assertEquals("ￚ = ㅡ", 0, col.compare("ￚ", "ㅡ"));
    assertEquals("ᅴ = ￛ", 0, col.compare("ᅴ", "ￛ"));
	assertEquals("ￛ = ㅢ", 0, col.compare("ￛ", "ㅢ"));
    assertEquals("ᅵ = ￜ", 0, col.compare("ᅵ", "ￜ"));
	assertEquals("ￜ = ㅣ", 0, col.compare("ￜ", "ㅣ"));
    assertEquals("ᆪ = ﾣ", 0, col.compare("ᆪ", "ﾣ"));
	assertEquals("ﾣ = ㄳ", 0, col.compare("ﾣ", "ㄳ"));
    assertEquals("ᆬ = ﾥ", 0, col.compare("ᆬ", "ﾥ"));
	assertEquals("ﾥ = ㄵ", 0, col.compare("ﾥ", "ㄵ"));
    assertEquals("ᆭ = ﾦ", 0, col.compare("ᆭ", "ﾦ"));
	assertEquals("ﾦ = ㄶ", 0, col.compare("ﾦ", "ㄶ"));
    assertEquals("ᆰ = ﾪ", 0, col.compare("ᆰ", "ﾪ"));
	assertEquals("ﾪ = ㄺ", 0, col.compare("ﾪ", "ㄺ"));
    assertEquals("ᆱ = ﾫ", 0, col.compare("ᆱ", "ﾫ"));
	assertEquals("ﾫ = ㄻ", 0, col.compare("ﾫ", "ㄻ"));
    assertEquals("ᆲ = ﾬ", 0, col.compare("ᆲ", "ﾬ"));
	assertEquals("ﾬ = ㄼ", 0, col.compare("ﾬ", "ㄼ"));
    assertEquals("ᆳ = ﾭ", 0, col.compare("ᆳ", "ﾭ"));
	assertEquals("ﾭ = ㄽ", 0, col.compare("ﾭ", "ㄽ"));
    assertEquals("ᆴ = ﾮ", 0, col.compare("ᆴ", "ﾮ"));
	assertEquals("ﾮ = ㄾ", 0, col.compare("ﾮ", "ㄾ"));
    assertEquals("ᆵ = ﾯ", 0, col.compare("ᆵ", "ﾯ"));
	assertEquals("ﾯ = ㄿ", 0, col.compare("ﾯ", "ㄿ"));
    
	assertEquals("₩ = ￦", 0, col.compare("₩", "￦"));
}
function testJSCollatorJamoLHalfwidthSec_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("ᄀ = ﾡ", 0, col.compare("ᄀ", "ﾡ"));
	assertEquals("ﾡ = ㄱ", 0, col.compare("ﾡ", "ㄱ"));
	assertEquals("ᄁ = ﾢ", 0, col.compare("ᄁ", "ﾢ"));
	assertEquals("ﾢ = ㄲ", 0, col.compare("ﾢ", "ㄲ"));
    assertEquals("ᄂ = ﾤ", 0, col.compare("ᄂ", "ﾤ"));
	assertEquals("ﾤ = ㄴ", 0, col.compare("ﾤ", "ㄴ"));
    assertEquals("ᄃ = ﾧ", 0, col.compare("ᄃ", "ﾧ"));
	assertEquals("ﾧ = ㄷ", 0, col.compare("ﾧ", "ㄷ"));
    assertEquals("ᄄ = ﾨ", 0, col.compare("ᄄ", "ﾨ"));
	assertEquals("ﾨ = ㄸ", 0, col.compare("ﾨ", "ㄸ"));
    assertEquals("ᄅ = ﾩ", 0, col.compare("ᄅ", "ﾩ"));
	assertEquals("ﾩ = ㄹ", 0, col.compare("ﾩ", "ㄹ"));
    assertEquals("ᄆ = ﾱ", 0, col.compare("ᄆ", "ﾱ"));
	assertEquals("ﾱ = ㅁ", 0, col.compare("ﾱ", "ㅁ"));
    assertEquals("ᄇ = ﾲ", 0, col.compare("ᄇ", "ﾲ"));
	assertEquals("ﾲ = ㅂ", 0, col.compare("ﾲ", "ㅂ"));
    assertEquals("ᄈ = ﾳ", 0, col.compare("ᄈ", "ﾳ"));
	assertEquals("ﾳ = ㅃ", 0, col.compare("ﾳ", "ㅃ"));
    assertEquals("ᄉ = ﾵ", 0, col.compare("ᄉ", "ﾵ"));
	assertEquals("ﾵ = ㅅ", 0, col.compare("ﾵ", "ㅅ"));
    assertEquals("ᄊ = ﾶ", 0, col.compare("ᄊ", "ﾶ"));
	assertEquals("ﾶ = ㅆ", 0, col.compare("ﾶ", "ㅆ"));
    assertEquals("ᄋ = ﾷ", 0, col.compare("ᄋ", "ﾷ"));
	assertEquals("ﾷ = ㅇ", 0, col.compare("ﾷ", "ㅇ"));
    assertEquals("ᄌ = ﾸ", 0, col.compare("ᄌ", "ﾸ"));
	assertEquals("ﾸ = ㅈ", 0, col.compare("ﾸ", "ㅈ"));
    assertEquals("ᄍ = ﾹ", 0, col.compare("ᄍ", "ﾹ"));
	assertEquals("ﾹ = ㅉ", 0, col.compare("ﾹ", "ㅉ"));
    assertEquals("ᄎ = ﾺ", 0, col.compare("ᄎ", "ﾺ"));
	assertEquals("ﾺ = ㅊ", 0, col.compare("ﾺ", "ㅊ"));
    assertEquals("ᄏ = ﾻ", 0, col.compare("ᄏ", "ﾻ"));
	assertEquals("ﾻ = ㅋ", 0, col.compare("ﾻ", "ㅋ"));
    assertEquals("ᄐ = ﾼ", 0, col.compare("ᄐ", "ﾼ"));
	assertEquals("ﾼ = ㅌ", 0, col.compare("ﾼ", "ㅌ"));
    assertEquals("ᄑ = ﾽ", 0, col.compare("ᄑ", "ﾽ"));
	assertEquals("ﾽ = ㅍ", 0, col.compare("ﾽ", "ㅍ"));
    assertEquals("ᄒ = ﾾ", 0, col.compare("ᄒ", "ﾾ"));
	assertEquals("ﾾ = ㅎ", 0, col.compare("ﾾ", "ㅎ"));
    assertEquals("ᄚ = ﾰ", 0, col.compare("ᄚ", "ﾰ"));
	assertEquals("ﾰ = ㅀ", 0, col.compare("ﾰ", "ㅀ"));
    assertEquals("ᄡ = ﾴ", 0, col.compare("ᄡ", "ﾴ"));
	assertEquals("ﾴ = ㅄ", 0, col.compare("ﾴ", "ㅄ"));
    
    assertEquals("ᅡ = ￂ", 0, col.compare("ᅡ", "ￂ"));
	assertEquals("ￂ = ㅏ", 0, col.compare("ￂ", "ㅏ"));
    assertEquals("ᅢ = ￃ", 0, col.compare("ᅢ", "ￃ"));
	assertEquals("ￃ = ㅐ", 0, col.compare("ￃ", "ㅐ"));
    assertEquals("ᅣ = ￄ", 0, col.compare("ᅣ", "ￄ"));
	assertEquals("ￄ = ㅑ", 0, col.compare("ￄ", "ㅑ"));
    assertEquals("ᅤ = ￅ", 0, col.compare("ᅤ", "ￅ"));
	assertEquals("ￅ = ㅒ", 0, col.compare("ￅ", "ㅒ"));
    assertEquals("ᅥ = ￆ", 0, col.compare("ᅥ", "ￆ"));
	assertEquals("ￆ = ㅓ", 0, col.compare("ￆ", "ㅓ"));
    assertEquals("ᅦ = ￇ", 0, col.compare("ᅦ", "ￇ"));
	assertEquals("ￇ = ㅔ", 0, col.compare("ￇ", "ㅔ"));
    assertEquals("ᅧ = ￊ", 0, col.compare("ᅧ", "ￊ"));
	assertEquals("ￊ = ㅕ", 0, col.compare("ￊ", "ㅕ"));
    assertEquals("ᅨ = ￋ", 0, col.compare("ᅨ", "ￋ"));
	assertEquals("ￋ = ㅖ", 0, col.compare("ￋ", "ㅖ"));
    assertEquals("ᅩ = ￌ", 0, col.compare("ᅩ", "ￌ"));
	assertEquals("ￌ = ㅗ", 0, col.compare("ￌ", "ㅗ"));
    assertEquals("ᅪ = ￍ", 0, col.compare("ᅪ", "ￍ"));
	assertEquals("ￍ = ㅘ", 0, col.compare("ￍ", "ㅘ"));
    assertEquals("ᅫ = ￎ", 0, col.compare("ᅫ", "ￎ"));
	assertEquals("ￎ = ㅙ", 0, col.compare("ￎ", "ㅙ"));
    assertEquals("ᅬ = ￏ", 0, col.compare("ᅬ", "ￏ"));
	assertEquals("ￏ = ㅚ", 0, col.compare("ￏ", "ㅚ"));
    assertEquals("ᅭ = ￒ", 0, col.compare("ᅭ", "ￒ"));
	assertEquals("ￒ = ㅛ", 0, col.compare("ￒ", "ㅛ"));
    assertEquals("ᅮ = ￓ", 0, col.compare("ᅮ", "ￓ"));
	assertEquals("ￓ = ㅜ", 0, col.compare("ￓ", "ㅜ"));
    assertEquals("ᅯ = ￔ", 0, col.compare("ᅯ", "ￔ"));
	assertEquals("ￔ = ㅝ", 0, col.compare("ￔ", "ㅝ"));
    assertEquals("ᅰ = ￕ", 0, col.compare("ᅰ", "ￕ"));
	assertEquals("ￕ = ㅞ", 0, col.compare("ￕ", "ㅞ"));
    assertEquals("ᅱ = ￖ", 0, col.compare("ᅱ", "ￖ"));
	assertEquals("ￖ = ㅟ", 0, col.compare("ￖ", "ㅟ"));
    assertEquals("ᅲ = ￗ", 0, col.compare("ᅲ", "ￗ"));
	assertEquals("ￗ = ㅠ", 0, col.compare("ￗ", "ㅠ"));
    assertEquals("ᅳ = ￚ", 0, col.compare("ᅳ", "ￚ"));
	assertEquals("ￚ = ㅡ", 0, col.compare("ￚ", "ㅡ"));
    assertEquals("ᅴ = ￛ", 0, col.compare("ᅴ", "ￛ"));
	assertEquals("ￛ = ㅢ", 0, col.compare("ￛ", "ㅢ"));
    assertEquals("ᅵ = ￜ", 0, col.compare("ᅵ", "ￜ"));
	assertEquals("ￜ = ㅣ", 0, col.compare("ￜ", "ㅣ"));
    assertEquals("ᆪ = ﾣ", 0, col.compare("ᆪ", "ﾣ"));
	assertEquals("ﾣ = ㄳ", 0, col.compare("ﾣ", "ㄳ"));
    assertEquals("ᆬ = ﾥ", 0, col.compare("ᆬ", "ﾥ"));
	assertEquals("ﾥ = ㄵ", 0, col.compare("ﾥ", "ㄵ"));
    assertEquals("ᆭ = ﾦ", 0, col.compare("ᆭ", "ﾦ"));
	assertEquals("ﾦ = ㄶ", 0, col.compare("ﾦ", "ㄶ"));
    assertEquals("ᆰ = ﾪ", 0, col.compare("ᆰ", "ﾪ"));
	assertEquals("ﾪ = ㄺ", 0, col.compare("ﾪ", "ㄺ"));
    assertEquals("ᆱ = ﾫ", 0, col.compare("ᆱ", "ﾫ"));
	assertEquals("ﾫ = ㄻ", 0, col.compare("ﾫ", "ㄻ"));
    assertEquals("ᆲ = ﾬ", 0, col.compare("ᆲ", "ﾬ"));
	assertEquals("ﾬ = ㄼ", 0, col.compare("ﾬ", "ㄼ"));
    assertEquals("ᆳ = ﾭ", 0, col.compare("ᆳ", "ﾭ"));
	assertEquals("ﾭ = ㄽ", 0, col.compare("ﾭ", "ㄽ"));
    assertEquals("ᆴ = ﾮ", 0, col.compare("ᆴ", "ﾮ"));
	assertEquals("ﾮ = ㄾ", 0, col.compare("ﾮ", "ㄾ"));
    assertEquals("ᆵ = ﾯ", 0, col.compare("ᆵ", "ﾯ"));
	assertEquals("ﾯ = ㄿ", 0, col.compare("ﾯ", "ㄿ"));
    
	assertEquals("₩ = ￦", 0, col.compare("₩", "￦"));
}

function testJSCollatorJamoLHalfwidthTer_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertEquals("ᄀ = ﾡ", 0, col.compare("ᄀ", "ﾡ"));
	assertEquals("ﾡ = ㄱ", 0, col.compare("ﾡ", "ㄱ"));
	assertEquals("ᄁ = ﾢ", 0, col.compare("ᄁ", "ﾢ"));
	assertEquals("ﾢ = ㄲ", 0, col.compare("ﾢ", "ㄲ"));
    assertEquals("ᄂ = ﾤ", 0, col.compare("ᄂ", "ﾤ"));
	assertEquals("ﾤ = ㄴ", 0, col.compare("ﾤ", "ㄴ"));
    assertEquals("ᄃ = ﾧ", 0, col.compare("ᄃ", "ﾧ"));
	assertEquals("ﾧ = ㄷ", 0, col.compare("ﾧ", "ㄷ"));
    assertEquals("ᄄ = ﾨ", 0, col.compare("ᄄ", "ﾨ"));
	assertEquals("ﾨ = ㄸ", 0, col.compare("ﾨ", "ㄸ"));
    assertEquals("ᄅ = ﾩ", 0, col.compare("ᄅ", "ﾩ"));
	assertEquals("ﾩ = ㄹ", 0, col.compare("ﾩ", "ㄹ"));
    assertEquals("ᄆ = ﾱ", 0, col.compare("ᄆ", "ﾱ"));
	assertEquals("ﾱ = ㅁ", 0, col.compare("ﾱ", "ㅁ"));
    assertEquals("ᄇ = ﾲ", 0, col.compare("ᄇ", "ﾲ"));
	assertEquals("ﾲ = ㅂ", 0, col.compare("ﾲ", "ㅂ"));
    assertEquals("ᄈ = ﾳ", 0, col.compare("ᄈ", "ﾳ"));
	assertEquals("ﾳ = ㅃ", 0, col.compare("ﾳ", "ㅃ"));
    assertEquals("ᄉ = ﾵ", 0, col.compare("ᄉ", "ﾵ"));
	assertEquals("ﾵ = ㅅ", 0, col.compare("ﾵ", "ㅅ"));
    assertEquals("ᄊ = ﾶ", 0, col.compare("ᄊ", "ﾶ"));
	assertEquals("ﾶ = ㅆ", 0, col.compare("ﾶ", "ㅆ"));
    assertEquals("ᄋ = ﾷ", 0, col.compare("ᄋ", "ﾷ"));
	assertEquals("ﾷ = ㅇ", 0, col.compare("ﾷ", "ㅇ"));
    assertEquals("ᄌ = ﾸ", 0, col.compare("ᄌ", "ﾸ"));
	assertEquals("ﾸ = ㅈ", 0, col.compare("ﾸ", "ㅈ"));
    assertEquals("ᄍ = ﾹ", 0, col.compare("ᄍ", "ﾹ"));
	assertEquals("ﾹ = ㅉ", 0, col.compare("ﾹ", "ㅉ"));
    assertEquals("ᄎ = ﾺ", 0, col.compare("ᄎ", "ﾺ"));
	assertEquals("ﾺ = ㅊ", 0, col.compare("ﾺ", "ㅊ"));
    assertEquals("ᄏ = ﾻ", 0, col.compare("ᄏ", "ﾻ"));
	assertEquals("ﾻ = ㅋ", 0, col.compare("ﾻ", "ㅋ"));
    assertEquals("ᄐ = ﾼ", 0, col.compare("ᄐ", "ﾼ"));
	assertEquals("ﾼ = ㅌ", 0, col.compare("ﾼ", "ㅌ"));
    assertEquals("ᄑ = ﾽ", 0, col.compare("ᄑ", "ﾽ"));
	assertEquals("ﾽ = ㅍ", 0, col.compare("ﾽ", "ㅍ"));
    assertEquals("ᄒ = ﾾ", 0, col.compare("ᄒ", "ﾾ"));
	assertEquals("ﾾ = ㅎ", 0, col.compare("ﾾ", "ㅎ"));
    assertEquals("ᄚ = ﾰ", 0, col.compare("ᄚ", "ﾰ"));
	assertEquals("ﾰ = ㅀ", 0, col.compare("ﾰ", "ㅀ"));
    assertEquals("ᄡ = ﾴ", 0, col.compare("ᄡ", "ﾴ"));
	assertEquals("ﾴ = ㅄ", 0, col.compare("ﾴ", "ㅄ"));
    
    assertEquals("ᅡ = ￂ", 0, col.compare("ᅡ", "ￂ"));
	assertEquals("ￂ = ㅏ", 0, col.compare("ￂ", "ㅏ"));
    assertEquals("ᅢ = ￃ", 0, col.compare("ᅢ", "ￃ"));
	assertEquals("ￃ = ㅐ", 0, col.compare("ￃ", "ㅐ"));
    assertEquals("ᅣ = ￄ", 0, col.compare("ᅣ", "ￄ"));
	assertEquals("ￄ = ㅑ", 0, col.compare("ￄ", "ㅑ"));
    assertEquals("ᅤ = ￅ", 0, col.compare("ᅤ", "ￅ"));
	assertEquals("ￅ = ㅒ", 0, col.compare("ￅ", "ㅒ"));
    assertEquals("ᅥ = ￆ", 0, col.compare("ᅥ", "ￆ"));
	assertEquals("ￆ = ㅓ", 0, col.compare("ￆ", "ㅓ"));
    assertEquals("ᅦ = ￇ", 0, col.compare("ᅦ", "ￇ"));
	assertEquals("ￇ = ㅔ", 0, col.compare("ￇ", "ㅔ"));
    assertEquals("ᅧ = ￊ", 0, col.compare("ᅧ", "ￊ"));
	assertEquals("ￊ = ㅕ", 0, col.compare("ￊ", "ㅕ"));
    assertEquals("ᅨ = ￋ", 0, col.compare("ᅨ", "ￋ"));
	assertEquals("ￋ = ㅖ", 0, col.compare("ￋ", "ㅖ"));
    assertEquals("ᅩ = ￌ", 0, col.compare("ᅩ", "ￌ"));
	assertEquals("ￌ = ㅗ", 0, col.compare("ￌ", "ㅗ"));
    assertEquals("ᅪ = ￍ", 0, col.compare("ᅪ", "ￍ"));
	assertEquals("ￍ = ㅘ", 0, col.compare("ￍ", "ㅘ"));
    assertEquals("ᅫ = ￎ", 0, col.compare("ᅫ", "ￎ"));
	assertEquals("ￎ = ㅙ", 0, col.compare("ￎ", "ㅙ"));
    assertEquals("ᅬ = ￏ", 0, col.compare("ᅬ", "ￏ"));
	assertEquals("ￏ = ㅚ", 0, col.compare("ￏ", "ㅚ"));
    assertEquals("ᅭ = ￒ", 0, col.compare("ᅭ", "ￒ"));
	assertEquals("ￒ = ㅛ", 0, col.compare("ￒ", "ㅛ"));
    assertEquals("ᅮ = ￓ", 0, col.compare("ᅮ", "ￓ"));
	assertEquals("ￓ = ㅜ", 0, col.compare("ￓ", "ㅜ"));
    assertEquals("ᅯ = ￔ", 0, col.compare("ᅯ", "ￔ"));
	assertEquals("ￔ = ㅝ", 0, col.compare("ￔ", "ㅝ"));
    assertEquals("ᅰ = ￕ", 0, col.compare("ᅰ", "ￕ"));
	assertEquals("ￕ = ㅞ", 0, col.compare("ￕ", "ㅞ"));
    assertEquals("ᅱ = ￖ", 0, col.compare("ᅱ", "ￖ"));
	assertEquals("ￖ = ㅟ", 0, col.compare("ￖ", "ㅟ"));
    assertEquals("ᅲ = ￗ", 0, col.compare("ᅲ", "ￗ"));
	assertEquals("ￗ = ㅠ", 0, col.compare("ￗ", "ㅠ"));
    assertEquals("ᅳ = ￚ", 0, col.compare("ᅳ", "ￚ"));
	assertEquals("ￚ = ㅡ", 0, col.compare("ￚ", "ㅡ"));
    assertEquals("ᅴ = ￛ", 0, col.compare("ᅴ", "ￛ"));
	assertEquals("ￛ = ㅢ", 0, col.compare("ￛ", "ㅢ"));
    assertEquals("ᅵ = ￜ", 0, col.compare("ᅵ", "ￜ"));
	assertEquals("ￜ = ㅣ", 0, col.compare("ￜ", "ㅣ"));
    assertEquals("ᆪ = ﾣ", 0, col.compare("ᆪ", "ﾣ"));
	assertEquals("ﾣ = ㄳ", 0, col.compare("ﾣ", "ㄳ"));
    assertEquals("ᆬ = ﾥ", 0, col.compare("ᆬ", "ﾥ"));
	assertEquals("ﾥ = ㄵ", 0, col.compare("ﾥ", "ㄵ"));
    assertEquals("ᆭ = ﾦ", 0, col.compare("ᆭ", "ﾦ"));
	assertEquals("ﾦ = ㄶ", 0, col.compare("ﾦ", "ㄶ"));
    assertEquals("ᆰ = ﾪ", 0, col.compare("ᆰ", "ﾪ"));
	assertEquals("ﾪ = ㄺ", 0, col.compare("ﾪ", "ㄺ"));
    assertEquals("ᆱ = ﾫ", 0, col.compare("ᆱ", "ﾫ"));
	assertEquals("ﾫ = ㄻ", 0, col.compare("ﾫ", "ㄻ"));
    assertEquals("ᆲ = ﾬ", 0, col.compare("ᆲ", "ﾬ"));
	assertEquals("ﾬ = ㄼ", 0, col.compare("ﾬ", "ㄼ"));
    assertEquals("ᆳ = ﾭ", 0, col.compare("ᆳ", "ﾭ"));
	assertEquals("ﾭ = ㄽ", 0, col.compare("ﾭ", "ㄽ"));
    assertEquals("ᆴ = ﾮ", 0, col.compare("ᆴ", "ﾮ"));
	assertEquals("ﾮ = ㄾ", 0, col.compare("ﾮ", "ㄾ"));
    assertEquals("ᆵ = ﾯ", 0, col.compare("ᆵ", "ﾯ"));
	assertEquals("ﾯ = ㄿ", 0, col.compare("ﾯ", "ㄿ"));
    
	assertEquals("₩ = ￦", 0, col.compare("₩", "￦"));
}

function testJSCollatorJamoLHalfwidthTer_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	assertTrue("ᄀ < ﾡ", col.compare("ᄀ", "ﾡ") < 0);
	assertTrue("ﾡ < ㄱ", col.compare("ﾡ", "ㄱ") < 0);
	assertTrue("ᄁ < ﾢ", col.compare("ᄁ", "ﾢ") < 0);
	assertTrue("ﾢ < ㄲ", col.compare("ﾢ", "ㄲ") < 0);
    assertTrue("ᄂ < ﾤ", col.compare("ᄂ", "ﾤ") < 0);
	assertTrue("ﾤ < ㄴ", col.compare("ﾤ", "ㄴ") < 0);
    assertTrue("ᄃ < ﾧ", col.compare("ᄃ", "ﾧ") < 0);
	assertTrue("ﾧ < ㄷ", col.compare("ﾧ", "ㄷ") < 0);
    assertTrue("ᄄ < ﾨ", col.compare("ᄄ", "ﾨ") < 0);
	assertTrue("ﾨ < ㄸ", col.compare("ﾨ", "ㄸ") < 0);
    assertTrue("ᄅ < ﾩ", col.compare("ᄅ", "ﾩ") < 0);
	assertTrue("ﾩ < ㄹ", col.compare("ﾩ", "ㄹ") < 0);
    assertTrue("ᄆ < ﾱ", col.compare("ᄆ", "ﾱ") < 0);
	assertTrue("ﾱ < ㅁ", col.compare("ﾱ", "ㅁ") < 0);
    assertTrue("ᄇ < ﾲ", col.compare("ᄇ", "ﾲ") < 0);
	assertTrue("ﾲ < ㅂ", col.compare("ﾲ", "ㅂ") < 0);
    assertTrue("ᄈ < ﾳ", col.compare("ᄈ", "ﾳ") < 0);
	assertTrue("ﾳ < ㅃ", col.compare("ﾳ", "ㅃ") < 0);
    assertTrue("ᄉ < ﾵ", col.compare("ᄉ", "ﾵ") < 0);
	assertTrue("ﾵ < ㅅ", col.compare("ﾵ", "ㅅ") < 0);
    assertTrue("ᄊ < ﾶ", col.compare("ᄊ", "ﾶ") < 0);
	assertTrue("ﾶ < ㅆ", col.compare("ﾶ", "ㅆ") < 0);
    assertTrue("ᄋ < ﾷ", col.compare("ᄋ", "ﾷ") < 0);
	assertTrue("ﾷ < ㅇ", col.compare("ﾷ", "ㅇ") < 0);
    assertTrue("ᄌ < ﾸ", col.compare("ᄌ", "ﾸ") < 0);
	assertTrue("ﾸ < ㅈ", col.compare("ﾸ", "ㅈ") < 0);
    assertTrue("ᄍ < ﾹ", col.compare("ᄍ", "ﾹ") < 0);
	assertTrue("ﾹ < ㅉ", col.compare("ﾹ", "ㅉ") < 0);
    assertTrue("ᄎ < ﾺ", col.compare("ᄎ", "ﾺ") < 0);
	assertTrue("ﾺ < ㅊ", col.compare("ﾺ", "ㅊ") < 0);
    assertTrue("ᄏ < ﾻ", col.compare("ᄏ", "ﾻ") < 0);
	assertTrue("ﾻ < ㅋ", col.compare("ﾻ", "ㅋ") < 0);
    assertTrue("ᄐ < ﾼ", col.compare("ᄐ", "ﾼ") < 0);
	assertTrue("ﾼ < ㅌ", col.compare("ﾼ", "ㅌ") < 0);
    assertTrue("ᄑ < ﾽ", col.compare("ᄑ", "ﾽ") < 0);
	assertTrue("ﾽ < ㅍ", col.compare("ﾽ", "ㅍ") < 0);
    assertTrue("ᄒ < ﾾ", col.compare("ᄒ", "ﾾ") < 0);
	assertTrue("ﾾ < ㅎ", col.compare("ﾾ", "ㅎ") < 0);
    assertTrue("ᄚ < ﾰ", col.compare("ᄚ", "ﾰ") < 0);
	assertTrue("ﾰ < ㅀ", col.compare("ﾰ", "ㅀ") < 0);
    assertTrue("ᄡ < ﾴ", col.compare("ᄡ", "ﾴ") < 0);
	assertTrue("ﾴ < ㅄ", col.compare("ﾴ", "ㅄ") < 0);
    
    assertTrue("ᅡ < ￂ", col.compare("ᅡ", "ￂ") < 0);
	assertTrue("ￂ < ㅏ", col.compare("ￂ", "ㅏ") < 0);
    assertTrue("ᅢ < ￃ", col.compare("ᅢ", "ￃ") < 0);
	assertTrue("ￃ < ㅐ", col.compare("ￃ", "ㅐ") < 0);
    assertTrue("ᅣ < ￄ", col.compare("ᅣ", "ￄ") < 0);
	assertTrue("ￄ < ㅑ", col.compare("ￄ", "ㅑ") < 0);
    assertTrue("ᅤ < ￅ", col.compare("ᅤ", "ￅ") < 0);
	assertTrue("ￅ < ㅒ", col.compare("ￅ", "ㅒ") < 0);
    assertTrue("ᅥ < ￆ", col.compare("ᅥ", "ￆ") < 0);
	assertTrue("ￆ < ㅓ", col.compare("ￆ", "ㅓ") < 0);
    assertTrue("ᅦ < ￇ", col.compare("ᅦ", "ￇ") < 0);
	assertTrue("ￇ < ㅔ", col.compare("ￇ", "ㅔ") < 0);
    assertTrue("ᅧ < ￊ", col.compare("ᅧ", "ￊ") < 0);
	assertTrue("ￊ < ㅕ", col.compare("ￊ", "ㅕ") < 0);
    assertTrue("ᅨ < ￋ", col.compare("ᅨ", "ￋ") < 0);
	assertTrue("ￋ < ㅖ", col.compare("ￋ", "ㅖ") < 0);
    assertTrue("ᅩ < ￌ", col.compare("ᅩ", "ￌ") < 0);
	assertTrue("ￌ < ㅗ", col.compare("ￌ", "ㅗ") < 0);
    assertTrue("ᅪ < ￍ", col.compare("ᅪ", "ￍ") < 0);
	assertTrue("ￍ < ㅘ", col.compare("ￍ", "ㅘ") < 0);
    assertTrue("ᅫ < ￎ", col.compare("ᅫ", "ￎ") < 0);
	assertTrue("ￎ < ㅙ", col.compare("ￎ", "ㅙ") < 0);
    assertTrue("ᅬ < ￏ", col.compare("ᅬ", "ￏ") < 0);
	assertTrue("ￏ < ㅚ", col.compare("ￏ", "ㅚ") < 0);
    assertTrue("ᅭ < ￒ", col.compare("ᅭ", "ￒ") < 0);
	assertTrue("ￒ < ㅛ", col.compare("ￒ", "ㅛ") < 0);
    assertTrue("ᅮ < ￓ", col.compare("ᅮ", "ￓ") < 0);
	assertTrue("ￓ < ㅜ", col.compare("ￓ", "ㅜ") < 0);
    assertTrue("ᅯ < ￔ", col.compare("ᅯ", "ￔ") < 0);
	assertTrue("ￔ < ㅝ", col.compare("ￔ", "ㅝ") < 0);
    assertTrue("ᅰ < ￕ", col.compare("ᅰ", "ￕ") < 0);
	assertTrue("ￕ < ㅞ", col.compare("ￕ", "ㅞ") < 0);
    assertTrue("ᅱ < ￖ", col.compare("ᅱ", "ￖ") < 0);
	assertTrue("ￖ < ㅟ", col.compare("ￖ", "ㅟ") < 0);
    assertTrue("ᅲ < ￗ", col.compare("ᅲ", "ￗ") < 0);
	assertTrue("ￗ < ㅠ", col.compare("ￗ", "ㅠ") < 0);
    assertTrue("ᅳ < ￚ", col.compare("ᅳ", "ￚ") < 0);
	assertTrue("ￚ < ㅡ", col.compare("ￚ", "ㅡ") < 0);
    assertTrue("ᅴ < ￛ", col.compare("ᅴ", "ￛ") < 0);
	assertTrue("ￛ < ㅢ", col.compare("ￛ", "ㅢ") < 0);
    assertTrue("ᅵ < ￜ", col.compare("ᅵ", "ￜ") < 0);
	assertTrue("ￜ < ㅣ", col.compare("ￜ", "ㅣ") < 0);
    assertTrue("ᆪ < ﾣ", col.compare("ᆪ", "ﾣ") < 0);
	assertTrue("ﾣ < ㄳ", col.compare("ﾣ", "ㄳ") < 0);
    assertTrue("ᆬ < ﾥ", col.compare("ᆬ", "ﾥ") < 0);
	assertTrue("ﾥ < ㄵ", col.compare("ﾥ", "ㄵ") < 0);
    assertTrue("ᆭ < ﾦ", col.compare("ᆭ", "ﾦ") < 0);
	assertTrue("ﾦ < ㄶ", col.compare("ﾦ", "ㄶ") < 0);
    assertTrue("ᆰ < ﾪ", col.compare("ᆰ", "ﾪ") < 0);
	assertTrue("ﾪ < ㄺ", col.compare("ﾪ", "ㄺ") < 0);
    assertTrue("ᆱ < ﾫ", col.compare("ᆱ", "ﾫ") < 0);
	assertTrue("ﾫ < ㄻ", col.compare("ﾫ", "ㄻ") < 0);
    assertTrue("ᆲ < ﾬ", col.compare("ᆲ", "ﾬ") < 0);
	assertTrue("ﾬ < ㄼ", col.compare("ﾬ", "ㄼ") < 0);
    assertTrue("ᆳ < ﾭ", col.compare("ᆳ", "ﾭ") < 0);
	assertTrue("ﾭ < ㄽ", col.compare("ﾭ", "ㄽ") < 0);
    assertTrue("ᆴ < ﾮ", col.compare("ᆴ", "ﾮ") < 0);
	assertTrue("ﾮ < ㄾ", col.compare("ﾮ", "ㄾ") < 0);
    assertTrue("ᆵ < ﾯ", col.compare("ᆵ", "ﾯ") < 0);
	assertTrue("ﾯ < ㄿ", col.compare("ﾯ", "ㄿ") < 0);
    
	assertTrue("₩ < ￦", col.compare("₩", "￦") < 0);
}

function testCollatorPri_ko() {
	var col = new Collator({
		locale: "ko-KR",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});
    assertNotUndefined(col);

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

    assertArrayEquals(expected, input);
}
