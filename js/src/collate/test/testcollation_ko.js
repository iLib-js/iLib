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

function testJSCollatorPriL_ko() {
	var col = new ilib.Collator({
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
	var col = new ilib.Collator({
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
	var col = new ilib.Collator({
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
	var col = new ilib.Collator({
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
	var col = new ilib.Collator({
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
	var col = new ilib.Collator({
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
	var col = new ilib.Collator({
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
	var col = new ilib.Collator({
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
	var col = new ilib.Collator({
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
	var col = new ilib.Collator({
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
	var col = new ilib.Collator({
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
	var col = new ilib.Collator({
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


function testCollatorPri_ko() {
	var col = new ilib.Collator({
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
