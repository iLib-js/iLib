/*
 * testname_ar.js - test the name object in Arabic
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

var NameFmt = require("./../lib/NameFmt.js");
var Name = require("./../lib/Name.js");
function testParseSimpleName_ar() {
	var parsed = new Name("ابن سعود", {locale: 'ar-SA'});
	assertNotUndefined(parsed);
	
	var expected =   {
		givenName: "ابن",
		familyName: "سعود"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseAdjunctNames_ar() {
	var parsed = new Name("ابن سعود", {locale: 'ar-SA'});
	assertNotUndefined(parsed);
	
	var expected =  {
		givenName: "ابن",
		familyName: "سعود"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSingleNameWithPrefixAndAdjunct_ar() {
	var parsed = new Name("السيد و السيدة سعود", {locale: 'ar-SA'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "السيد و السيدة",
		familyName: "سعود"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_ar() {
	var parsed = new Name("ابن سعود كبار", {locale: 'ar-SA'});
	assertNotUndefined(parsed);
	
	var expected =    {
		suffix: "كبار",
		givenName: "ابن",
		familyName: "سعود"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_ar() {
	var parsed = new Name("الملك سعود", {locale: 'ar-SA'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "الملك",
		familyName: "سعود"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_ar() {
	var parsed = new Name("الملك ابن سعود", {locale: 'ar-SA'});
	assertNotUndefined(parsed);
	
	var expected =    {
		prefix: "الملك",
		givenName: "ابن",
		familyName: "سعود"
	};
	
	assertObjectContains(expected, parsed);
};


/*
 * Format Tests
 */

function testFormatSimpleNameShort_ar() {
	var name = new Name({
		givenName: "ابن",
		familyName: "سعود"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ابن سعود";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_ar() {
	var name = new Name({
		givenName: "ابن",
		familyName: "سعود"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ابن سعود";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_ar() {
	var name = new Name({
		givenName: "ابن",
		
		familyName: "سعود",
		suffix: "كبار"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ابن سعود";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_ar() {
	var name = new Name({
		prefix: "الملك",
		givenName: "ابن",
		familyName: "سعود",
		suffix: "كبار"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "الملك ابن سعود كبار";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_ar() {
	var name = new Name({
		prefix: "الملك",
		givenName: "ابن",
		familyName: "سعود"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ابن سعود";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_ar() {
	var name = new Name({
		prefix: "الملك",
		givenName: "ابن",
		familyName: "سعود"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ابن سعود";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_ar() {
	var name = new Name({
		prefix: "الملك",
		givenName: "ابن",
		familyName: "سعود"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "الملك ابن سعود";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameShort_ar() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameMedium_ar() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameLong_ar() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'ar-SA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸";
	
	assertEquals(expected, formatted);
};





