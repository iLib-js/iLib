/*
 * testname_en.js - test the name object in English
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

function testENUSParseSimpleName_ko_KR() {
	var parsed = new ilib.Name("경 김", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "경",
		familyName: "김"
	};
	
	assertObjectContains(expected, parsed);
};

function testENUSParseTripleName_ko_KR() {
	var parsed = new ilib.Name("경 동 김", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "경",
		middleName: "동",
		familyName: "김"
	};
	
	assertObjectContains(expected, parsed);
};

function testENUSParseHypenatedName_ko_KR() {
	var parsed = new ilib.Name("경 동 김", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "경",
		middleName: "동",
		familyName: "김"
	};
	
	assertObjectContains(expected, parsed);
};

function testENUSParseQuadrupleName_ko_KR() {
	var parsed = new ilib.Name("경 동 김", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "경",
		middleName: "동",
		familyName: "김"
	};
	
	assertObjectContains(expected, parsed);
};

function testENUSParseTitle_ko_KR() {
	var parsed = new ilib.Name("박사. 경 김", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "박사.",
		givenName: "경",
		familyName: "김"
	};
	
	assertObjectContains(expected, parsed);
};

function testENUSParseHonorific_ko_KR() {
	var parsed = new ilib.Name("씨. 경 김", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "씨.",
		givenName: "경",
		familyName: "김"
	};
	
	assertObjectContains(expected, parsed);
};

function testENUSParseSuffix_ko_KR() {
	var parsed = new ilib.Name("경 김 주니어.", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "경",
		familyName: "김",
		suffix: "주니어."
	};
	
	assertObjectContains(expected, parsed);
};

// for DFISH-25146
function testENUSParseSuffixWithComma_ko_KR() {
	var parsed = new ilib.Name("경 김, 박사", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "경",
		familyName: "김",
		suffix: ", 박사"
	};
	
	assertObjectContains(expected, parsed);
};



function testENSingleName_ko_KR() {
	var parsed = new ilib.Name("Sting", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Sting"
	};
	
	assertObjectContains(expected, parsed);
};

function testENLastNames_ko_KR() {
	var parsed = new ilib.Name("박사. 강", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "박사.",
		familyName: "강"
	};
	
	assertObjectContains(expected, parsed);
};

function testENCompoundNames_ko_KR() {
	var parsed = new ilib.Name("씨. and 부인. 김", {locale: 'ko-KR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "씨. 과 부인.",
		familyName: "김"
	};
	
	assertObjectContains(expected, parsed);
};



/*
 * Format tests
 */

function testENFormatSimpleNameShort_ko_KR() {
	var name = new ilib.Name({
		prefix: "박사.",
		givenName: "경",
		middleName: "동",
		familyName: "김",
		suffix: ", 박사"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'ko-KR'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "경 김";
	
	assertEquals(expected, formatted);
};

function testENFormatSimpleNameMedium_ko_KR() {
	var name = new ilib.Name({
		prefix: "박사.",
		givenName: "경",
		middleName: "동",
		familyName: "김",
		suffix: ", 박사"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'ko-KR'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "경 동 김";
	
	assertEquals(expected, formatted);
};

function testENFormatSimpleNameLong_ko_KR() {
	var name = new ilib.Name({
		prefix: "박사.",
		givenName: "경",
		middleName: "동",
		familyName: "김",
		suffix: ", 박사"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'ko-KR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "박사. 경 동 김";
	
	assertEquals(expected, formatted);
};

function testENFormatSimpleNameFull_ko_KR() {
	var name = new ilib.Name({
		prefix: "박사.",
		givenName: "경",
		middleName: "동",
		familyName: "김",
		suffix: ", 박사"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'ko-KR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "박사. 경 동 김, 박사";
	
	assertEquals(expected, formatted);
};

function testENFormatComplexNameShort_ko_KR() {
	var name = new ilib.Name({
		prefix: "씨.",
		givenName: "경",
		middleName: "동",
		familyName: "정강이",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'ko-KR'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "경 정강이";
	
	assertEquals(expected, formatted);
};

function testENFormatComplexNameMedium_ko_KR() {
	var name = new ilib.Name({
		prefix: "씨.",
		givenName: "경",
		middleName: "동",
		familyName: "정강이",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'ko-KR'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "경 동 정강이";
	
	assertEquals(expected, formatted);
};

function testENFormatComplexNameLong_ko_KR() {
	var name = new ilib.Name({
		prefix: "씨.",
		givenName: "경",
		middleName: "동",
		familyName: "정강이",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'ko-KR'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "씨. 경 동 정강이";
	
	assertEquals(expected, formatted);
};

function testENFormatComplexNameFull_ko_KR() {
	var name = new ilib.Name({
		prefix: "씨.",
		givenName: "경",
		middleName: "동",
		familyName: "정강이",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'ko-KR'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "씨. 경 동 정강이 III";
	
	assertEquals(expected, formatted);
};

function testENFormatCommasInSuffix_ko_KR() {
	var name = new ilib.Name({
		prefix: "씨.",
		givenName: "경",
		middleName: "동",
		familyName: "정강이",
		suffix: ", III, 박사"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'ko-KR'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "씨. 경 동 정강이, III, 박사";
	
	assertEquals(expected, formatted);
};



function testENFormatWithNulls_ko_KR() {
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
	
	var expected = "경 김";
	
	assertEquals(expected, formatted);
};
