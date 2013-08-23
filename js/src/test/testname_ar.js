/*
 * testname_ar.js - test the name object in Arabic
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

function testParseSimpleName_ar() {
	var parsed = new ilib.Name("Y", {locale: 'ar-SA'});
	assertNotUndefined(parsed);
	
	var expected =   {
		givenName: "",
		familyName: ""
	};
	
	assertObjectContains(expected, parsed);
};


function testParseAdjunctNames_ar() {
	var parsed = new ilib.Name("Y", {locale: 'ar-SA'});
	assertNotUndefined(parsed);
	
	var expected =  {
		givenName: "",
		familyName: ""
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSingleNameWithPrefixAndAdjunct_ar() {
	var parsed = new ilib.Name("Y", {locale: 'ar-SA'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "",
		familyName: ""
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_ar() {
	var parsed = new ilib.Name("Y", {locale: 'ar-SA'});
	assertNotUndefined(parsed);
	
	var expected =    {
		suffix: "",
		givenName: "",
		familyName: ""
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_ar() {
	var parsed = new ilib.Name("Y", {locale: 'ar-SA'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "",
		familyName: ""
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_ar() {
	var parsed = new ilib.Name("Y", {locale: 'ar-SA'});
	assertNotUndefined(parsed);
	
	var expected =    {
		prefix: "",
		givenName: "",
		familyName: ""
	};
	
	assertObjectContains(expected, parsed);
};


/*
 * Format Tests
 */

function testFormatSimpleNameShort_ar() {
	var name = new ilib.Name({
		givenName: "",
		familyName: ""
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_ar() {
	var name = new ilib.Name({
		givenName: "",
		familyName: ""
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_ar() {
	var name = new ilib.Name({
		givenName: "",
		
		familyName: "",
		suffix: ""
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_ar() {
	var name = new ilib.Name({
		prefix: "",
		givenName: "",
		familyName: "",
		suffix: ""
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_ar() {
	var name = new ilib.Name({
		prefix: "",
		givenName: "",
		familyName: ""
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_ar() {
	var name = new ilib.Name({
		prefix: "",
		givenName: "",
		familyName: ""
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_ar() {
	var name = new ilib.Name({
		prefix: "",
		givenName: "",
		familyName: ""
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameShort_ar() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameMedium_ar() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameLong_ar() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};





