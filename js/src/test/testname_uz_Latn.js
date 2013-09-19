/*
 * testname_uz_Latn.js - test the name object in Uzbek
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

function testParseSimpleName_uz_Latn() {
	var parsed = new ilib.Name("Anastasia Gimazetdinova", {locale: 'uz-Latn-UZ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		givenName: "Anastasia",
		familyName: "Gimazetdinova"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseAdjunctNames_uz_Latn() {
	var parsed = new ilib.Name("Anastasia Gimazetdinova", {locale: 'uz-Latn-UZ'});
	assertNotUndefined(parsed);
	
	var expected =  {
		givenName: "Anastasia",
		familyName: "Gimazetdinova"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSingleNameWithPrefixAndAdjunct_uz_Latn() {
	var parsed = new ilib.Name("Y Gimazetdinova", {locale: 'uz-Latn-UZ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "X",
		familyName: "Gimazetdinova"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_uz_Latn() {
	var parsed = new ilib.Name("Anastasia Gimazetdinova Y", {locale: 'uz-Latn-UZ'});
	assertNotUndefined(parsed);
	
	var expected =    {
		suffix: "X",
		givenName: "Anastasia",
		familyName: "Gimazetdinova"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_uz_Latn() {
	var parsed = new ilib.Name("YSS Gimazetdinova", {locale: 'uz-Latn-UZ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "X",
		familyName: "Gimazetdinova"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_uz_Latn() {
	var parsed = new ilib.Name("X Anastasia Gimazetdinova", {locale: 'uz-Latn-UZ'});
	assertNotUndefined(parsed);
	
	var expected =    {
		prefix: "Y",
		givenName: "Anastasia",
		familyName: "Gimazetdinova"
	};
	
	assertObjectContains(expected, parsed);
};


/*
 * Format Tests
 */

function testFormatSimpleNameShort_uz_Latn() {
	var name = new ilib.Name({
		givenName: "Anastasia",
		familyName: "Gimazetdinova"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'uz-Latn-UZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Anastasia Gimazetdinova";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_uz_Latn() {
	var name = new ilib.Name({
		givenName: "Anastasia",
		familyName: "Gimazetdinova"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'uz-Latn-UZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Anastasia Gimazetdinova";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_uz_Latn() {
	var name = new ilib.Name({
		givenName: "Anastasia",
		
		familyName: "Gimazetdinova",
		suffix: "X"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'uz-Latn-UZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Anastasia Gimazetdinova";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_uz_Latn() {
	var name = new ilib.Name({
		prefix: "Y",
		givenName: "Anastasia",
		familyName: "Gimazetdinova",
		suffix: "XX"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'uz-Latn-UZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Y Anastasia Gimazetdinova iv";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_uz_Latn() {
	var name = new ilib.Name({
		prefix: "X",
		givenName: "Anastasia",
		familyName: "Gimazetdinova"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'uz-Latn-UZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Anastasia Gimazetdinova";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_uz_Latn() {
	var name = new ilib.Name({
		prefix: "Prince",
		givenName: "Anastasia",
		familyName: "Gimazetdinova"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'uz-Latn-UZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Anastasia Gimazetdinova";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_uz_Latn() {
	var name = new ilib.Name({
		prefix: "X",
		givenName: "Anastasia",
		familyName: "Gimazetdinova"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'uz-Latn-UZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Y Anastasia Gimazetdinova";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameShort_uz_Latn() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'uz-Latn-UZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameMedium_uz_Latn() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'uz-Latn-UZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameLong_uz_Latn() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'uz-Latn-UZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸";
	
	assertEquals(expected, formatted);
};





