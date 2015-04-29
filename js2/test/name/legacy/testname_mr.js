/*
 * testname_mr_IN.js - test the name object in Hindi
 * 
 * Copyright © 2013-2015, JEDLSoft
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

function testParseSimpleName_mr_IN() {
	var parsed = new ilib.Name("सचिन तेंडुलकर", {locale: 'mr-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "सचिन",
		familyName: "तेंडुलकर"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitle_mr_IN() {
	var parsed = new ilib.Name("सचिन तेंडुलकर ज्येष्ठ", {locale: 'mr-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "ज्येष्ठ",
		givenName: "सचिन",
		familyName: "तेंडुलकर"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_mr_IN() {
	var parsed = new ilib.Name("श्रीयुत तेंडुलकर", {locale: 'mr-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "श्रीयुत",
		familyName: "तेंडुलकर"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_mr_IN() {
	var parsed = new ilib.Name("श्रीयुत आणि मिसेस तेंडुलकर", {locale: 'mr-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "श्रीयुत आणि मिसेस",
		familyName: "तेंडुलकर"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_mr_IN() {
	var parsed = new ilib.Name("श्रीयुत सचिन तेंडुलकर", {locale: 'mr-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "श्रीयुत",
		givenName: "सचिन",
		familyName: "तेंडुलकर"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_mr_IN() {
	var name = new ilib.Name({
		givenName: "सचिन",
		familyName: "तेंडुलकर"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'mr-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "सचिन तेंडुलकर";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_mr_IN() {
	var name = new ilib.Name({
		givenName: "सचिन",
		familyName: "तेंडुलकर"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'mr-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "सचिन तेंडुलकर";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_mr_IN() {
	var name = new ilib.Name({
		givenName: "सचिन",
		familyName: "तेंडुलकर"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'mr-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "सचिन तेंडुलकर";
	
	assertEquals(expected, formatted);
};

function testFormatSurname_mr_IN() {
	var name = new ilib.Name({
		prefix: "श्रीयुत आणि मिसेस",
		familyName: "तेंडुलकर"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'mr-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "श्रीयुत आणि मिसेस तेंडुलकर";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_mr_IN() {
	var name = new ilib.Name({
		prefix: "डॉक्टर",
		givenName: "सचिन",
		familyName: "तेंडुलकर",
		suffix: "वरिष्ठ"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'mr-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "डॉक्टर सचिन तेंडुलकर वरिष्ठ";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_mr_IN() {
	var name = new ilib.Name({
		prefix: "डॉक्टर",
		givenName: "सचिन",
		familyName: "तेंडुलकर"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'mr-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "सचिन तेंडुलकर";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_mr_IN() {
	var name = new ilib.Name({
		prefix: "डॉक्टर",
		givenName: "सचिन",
		familyName: "तेंडुलकर"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'mr-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "सचिन तेंडुलकर";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_mr_IN() {
	var name = new ilib.Name({
		prefix: "डॉक्टर",
		givenName: "सचिन",
		familyName: "तेंडुलकर"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'mr-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "डॉक्टर सचिन तेंडुलकर";
	
	assertEquals(expected, formatted);
};


