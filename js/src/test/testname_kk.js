/*
 * testname_kk.js - test the name object in Kazahk
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

function testParseSimpleName_kk() {
	var parsed = new ilib.Name("Y", {locale: 'kk-KZ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		givenName: "",
		familyName: ""
	};
	
	assertObjectContains(expected, parsed);
};


function testParseAdjunctNames_kk() {
	var parsed = new ilib.Name("Y", {locale: 'kk-KZ'});
	assertNotUndefined(parsed);
	
	var expected =  {
		givenName: "",
		familyName: ""
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSingleNameWithPrefixAndAdjunct_kk() {
	var parsed = new ilib.Name("Y", {locale: 'kk-KZ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "",
		familyName: ""
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_kk() {
	var parsed = new ilib.Name("Y", {locale: 'kk-KZ'});
	assertNotUndefined(parsed);
	
	var expected =    {
		suffix: "",
		givenName: "",
		familyName: ""
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_kk() {
	var parsed = new ilib.Name("Y", {locale: 'kk-KZ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "",
		familyName: ""
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_kk() {
	var parsed = new ilib.Name("Y", {locale: 'kk-KZ'});
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

function testFormatSimpleNameShort_kk() {
	var name = new ilib.Name({
		givenName: "",
		familyName: ""
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'kk-KZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_kk() {
	var name = new ilib.Name({
		givenName: "",
		familyName: ""
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'kk-KZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_kk() {
	var name = new ilib.Name({
		givenName: "",
		
		familyName: "",
		suffix: ""
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'kk-KZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_kk() {
	var name = new ilib.Name({
		prefix: "",
		givenName: "",
		familyName: "",
		suffix: ""
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'kk-KZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_kk() {
	var name = new ilib.Name({
		prefix: "",
		givenName: "",
		familyName: ""
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'kk-KZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_kk() {
	var name = new ilib.Name({
		prefix: "",
		givenName: "",
		familyName: ""
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'kk-KZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_kk() {
	var name = new ilib.Name({
		prefix: "",
		givenName: "",
		familyName: ""
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'kk-KZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameShort_kk() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'kk-KZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameMedium_kk() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'kk-KZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameLong_kk() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'kk-KZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};





