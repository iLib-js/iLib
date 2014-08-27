/*
 * testname_ko.js - test the name object in Korean
 * 
 * Copyright © 2013, JEDLSoft
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

function testParseSimpleName_ko_KR() {
	var parsed = new ilib.Name("정훈교", {locale: 'ko-KR', order:"fmg"});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "훈교",
		familyName: "정"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseSimpleNameBogusOrder_ko_KR() {
	var parsed = new ilib.Name("정훈교", {locale: 'ko-KR', order:"xcfa"});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "훈교",
		familyName: "정"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseWithHonorific_ko_KR() {
	var parsed = new ilib.Name("정훈교씨", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "훈교",
		familyName: "정",
		suffix: "씨"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseNameWithPrefix_ko_KR1() {
	var parsed = new ilib.Name("시장김근면", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "시장",
		givenName: "근면",
		familyName: "김"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseLatinName_ko_KR() {
	// written with western style when in Latin
	var parsed = new ilib.Name("Byeongsub Kim", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Byeongsub",
		familyName: "Kim"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitle_ko_KR() {
	var parsed = new ilib.Name("장관김동경", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "장관",
		givenName: "동경",
		familyName: "김"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseHonorific_ko_KR() {
	var parsed = new ilib.Name("여왕김동경", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "여왕",
		givenName: "동경",
		familyName: "김"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseSuffix_ko_KR() {
	var parsed = new ilib.Name("김동경주니어", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "동경",
		familyName: "김",
		suffix: "주니어"
	};
	
	assertObjectContains(expected, parsed);
};

// for DFISH-25146
function testParseSuffixWithComma_ko_KR() {
	var parsed = new ilib.Name("김동경, 박사", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "동경",
		familyName: "김",
		suffix: ", 박사"
	};
	
	assertObjectContains(expected, parsed);
};



function testLastNames_ko_KR() {
	var parsed = new ilib.Name("여왕강", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "여왕",
		familyName: "강"
	};
	
	assertObjectContains(expected, parsed);
};


/*
 * Format tests
 */

function testFormatSimpleNameShort_ko_KR() {
	var name = new ilib.Name({
		prefix: "박사.",
		givenName: "동경",
		familyName: "김",
		suffix: ", 박사"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'ko-KR'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "김동경";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_ko_KR() {
	var name = new ilib.Name({
		prefix: "박사.",
		givenName: "동경",
		familyName: "김",
		suffix: ", 박사"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'ko-KR'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "김동경";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_ko_KR() {
	var name = new ilib.Name({
		prefix: "박사.",
		givenName: "동경",
		familyName: "김",
		suffix: ", 박사"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'ko-KR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "박사.김동경";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_ko_KR() {
	var name = new ilib.Name({
		prefix: "박사.",
		givenName: "동경",
		familyName: "김",
		suffix: ", 박사"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'ko-KR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "박사.김동경, 박사";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_ko_KR() {
	var name = new ilib.Name({
		prefix: "여왕",
		givenName: "경",
		familyName: "정강이",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'ko-KR'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "정강이경";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_ko_KR() {
	var name = new ilib.Name({
		prefix: "여왕",
		givenName: "동경",
		familyName: "정강이",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'ko-KR'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "정강이동경";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_ko_KR() {
	var name = new ilib.Name({
		prefix: "여왕",
		givenName: "동경",
		familyName: "정강이",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'ko-KR'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "여왕정강이동경";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameFull_ko_KR() {
	var name = new ilib.Name({
		prefix: "여왕",
		givenName: "동경",
		familyName: "정강이",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'ko-KR'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "여왕정강이동경III";
	
	assertEquals(expected, formatted);
};

function testFormatCommasInSuffix_ko_KR() {
	var name = new ilib.Name({
		prefix: "여왕",
		givenName: "동경",
		familyName: "정강이",
		suffix: ", III, 박사"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'ko-KR'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "여왕정강이동경, III, 박사";
	
	assertEquals(expected, formatted);
};



function testFormatWithNulls_ko_KR() {
	var name = new ilib.Name({
		prefix: null,
		givenName: "경",
		middleName: null,
		familyName: "김",
		suffix: null
	});
	
	var fmt = new ilib.NameFmt({style: "long", locale: 'ko-KR'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "김경";
	
	assertEquals(expected, formatted);
};
