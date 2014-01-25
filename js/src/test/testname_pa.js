/*
 * testname_pa_IN.js - test the name object in Hindi
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

function testParseSimpleName_pa_IN() {
	var parsed = new ilib.Name("ਹਰਭਜਨ ਸਿੰਘ", {locale: 'pa-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "ਹਰਭਜਨ",
		familyName: "ਸਿੰਘ"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitle_pa_IN() {
	var parsed = new ilib.Name("ਹਰਭਜਨ ਸਿੰਘ ਸੇਨਿਓਰ", {locale: 'pa-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "ਸੇਨਿਓਰ",
		givenName: "ਹਰਭਜਨ",
		familyName: "ਸਿੰਘ"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_pa_IN() {
	var parsed = new ilib.Name("ਦਰ ਸਿੰਘ", {locale: 'pa-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "ਦਰ",
		familyName: "ਸਿੰਘ"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_pa_IN() {
	var parsed = new ilib.Name("ਦਰ ਏੰਡ ਮਰ ਸਿੰਘ", {locale: 'pa-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "ਦਰ ਏੰਡ ਮਰ",
		familyName: "ਸਿੰਘ"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_pa_IN() {
	var parsed = new ilib.Name("ਦਰ ਹਰਭਜਨ ਸਿੰਘ", {locale: 'pa-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "ਦਰ",
		givenName: "ਹਰਭਜਨ",
		familyName: "ਸਿੰਘ"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_pa_IN() {
	var name = new ilib.Name({
		givenName: "ਹਰਭਜਨ",
		familyName: "ਸਿੰਘ"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'pa-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ਹਰਭਜਨ ਸਿੰਘ";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_pa_IN() {
	var name = new ilib.Name({
		givenName: "ਹਰਭਜਨ",
		familyName: "ਸਿੰਘ"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'pa-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ਹਰਭਜਨ ਸਿੰਘ";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_pa_IN() {
	var name = new ilib.Name({
		givenName: "ਹਰਭਜਨ",
		familyName: "ਸਿੰਘ"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'pa-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ਹਰਭਜਨ ਸਿੰਘ";
	
	assertEquals(expected, formatted);
};

function testFormatSurname_pa_IN() {
	var name = new ilib.Name({
		prefix: "ਦਰ ਏੰਡ ਮਰ",
		familyName: "ਸਿੰਘ"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'pa-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ਦਰ ਏੰਡ ਮਰ ਸਿੰਘ";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_pa_IN() {
	var name = new ilib.Name({
		prefix: "ਡਾਕ੍ਟਰ",
		givenName: "ਹਰਭਜਨ",
		familyName: "ਸਿੰਘ",
		suffix: "ਸੇਨਿਓਰ"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'pa-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ਡਾਕ੍ਟਰ ਹਰਭਜਨ ਸਿੰਘ ਸੇਨਿਓਰ";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_pa_IN() {
	var name = new ilib.Name({
		prefix: "ਡਾਕ੍ਟਰ",
		givenName: "ਹਰਭਜਨ",
		familyName: "ਸਿੰਘ"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'pa-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ਹਰਭਜਨ ਸਿੰਘ";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_pa_IN() {
	var name = new ilib.Name({
		prefix: "ਡਾਕ੍ਟਰ",
		givenName: "ਹਰਭਜਨ",
		familyName: "ਸਿੰਘ"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'pa-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ਹਰਭਜਨ ਸਿੰਘ";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_pa_IN() {
	var name = new ilib.Name({
		prefix: "ਡਾਕ੍ਟਰ",
		givenName: "ਹਰਭਜਨ",
		familyName: "ਸਿੰਘ"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'pa-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ਡਾਕ੍ਟਰ ਹਰਭਜਨ ਸਿੰਘ";
	
	assertEquals(expected, formatted);
};


