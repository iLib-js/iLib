/*
 * testname_ku_Arab.js - test the name object in Kurdish
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

function testParseSimpleName_ku_Arab() {
	var parsed = new ilib.Name("Y", {locale: 'ku-Arab-IQ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		givenName: "",
		familyName: ""
	};
	
	assertObjectContains(expected, parsed);
};


function testParseAdjunctNames_ku_Arab() {
	var parsed = new ilib.Name("Y", {locale: 'ku-Arab-IQ'});
	assertNotUndefined(parsed);
	
	var expected =  {
		givenName: "",
		familyName: ""
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSingleNameWithPrefixAndAdjunct_ku_Arab() {
	var parsed = new ilib.Name("Y", {locale: 'ku-Arab-IQ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "",
		familyName: ""
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_ku_Arab() {
	var parsed = new ilib.Name("Y", {locale: 'ku-Arab-IQ'});
	assertNotUndefined(parsed);
	
	var expected =    {
		suffix: "",
		givenName: "",
		familyName: ""
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_ku_Arab() {
	var parsed = new ilib.Name("Y", {locale: 'ku-Arab-IQ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "",
		familyName: ""
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_ku_Arab() {
	var parsed = new ilib.Name("Y", {locale: 'ku-Arab-IQ'});
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

function testFormatSimpleNameShort_ku_Arab() {
	var name = new ilib.Name({
		givenName: "",
		familyName: ""
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'ku-Arab-IQ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_ku_Arab() {
	var name = new ilib.Name({
		givenName: "",
		familyName: ""
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'ku-Arab-IQ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_ku_Arab() {
	var name = new ilib.Name({
		givenName: "",
		
		familyName: "",
		suffix: ""
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'ku-Arab-IQ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_ku_Arab() {
	var name = new ilib.Name({
		prefix: "",
		givenName: "",
		familyName: "",
		suffix: ""
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'ku-Arab-IQ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_ku_Arab() {
	var name = new ilib.Name({
		prefix: "",
		givenName: "",
		familyName: ""
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'ku-Arab-IQ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_ku_Arab() {
	var name = new ilib.Name({
		prefix: "",
		givenName: "",
		familyName: ""
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'ku-Arab-IQ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_ku_Arab() {
	var name = new ilib.Name({
		prefix: "",
		givenName: "",
		familyName: ""
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'ku-Arab-IQ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameShort_ku_Arab() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'ku-Arab-IQ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameMedium_ku_Arab() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'ku-Arab-IQ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameLong_ku_Arab() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'ku-Arab-IQ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "X";
	
	assertEquals(expected, formatted);
};





