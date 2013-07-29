/*
 * testname_en.js - test the name object in Japanese
 * 
 * Copyright © 2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICJASE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testJAJPParseSimpleName_ga_IE() {
	var parsed = new ilib.Name("Daniel O'Reilly", {locale: 'ga-IE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Daniel",
		familyName: "O'Reilly"
	};
	
	assertObjectContains(expected, parsed);
};



function testDEParseSimpleName_ga_IE() {
	var parsed = new ilib.Name("An tUasal. Kertu O'Reilly", {locale: 'ga-IE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "An tUasal.",
		givenName: "Kertu",
		familyName: "O'Reilly"
               
	};
	
	assertObjectContains(expected, parsed);
};



function testDEParseSingleNameWithPrefixAndAdjunct_ga_IE() {
	var parsed = new ilib.Name("Daniel O'Reilly sóisearach", {locale: 'ga-IE'});
	assertNotUndefined(parsed);
	
	var expected = {
		 suffix : "sóisearach",
		givenName: "Daniel",
		familyName: "O'Reilly"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseTitle_ga_IE1() {
	var parsed = new ilib.Name("príomh-aire Daniel O'Reilly", {locale: 'ga-IE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "príomh-aire",
		givenName: "Daniel",
		familyName: "O'Reilly"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseTitle_ga_IE_second() {
	var parsed = new ilib.Name("An tUasal. agus Mrs. O'Reilly", {locale: 'ga-IE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "An tUasal. agus Mrs.",
		familyName: "O'Reilly"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseTitleWithFamilyOnlyAndAdjunct_ga_IE() {

	var name = new ilib.Name({
		prefix: "príomh-aire",
		givenName: "Daniel",
		familyName: "O'Reilly",
		suffix: "scor"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'ga-IE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "príomh-aire Daniel O'Reilly scor";
	
	assertEquals(expected, formatted);

};



function testDEParseCompoundHonorific_ga_IE() {
	var parsed = new ilib.Name("príomh-aire O'Reilly", {locale: 'ga-IE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "príomh-aire",
		familyName: "O'Reilly"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testDEFormatSimpleNameShort_ga_IE() {
	var name = new ilib.Name({
		givenName: "Daniel",
		familyName: "O'Reilly"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'ga-IE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Daniel O'Reilly";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameMedium_ga_IE() {
	var name = new ilib.Name({
		givenName: "Daniel",
		familyName: "O'Reilly"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'ga-IE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Daniel O'Reilly";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameFull_ga_IE() {
	var name = new ilib.Name({
		
		givenName: "Daniel",
		familyName: "O'Reilly",
		suffix: "scor"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'ga-IE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Daniel O'Reilly scor";
	
	assertEquals(expected, formatted);
};

function testDEFormatComplexNameShort_ga_IE() {
	var name = new ilib.Name({
		suffix: "scor",
		givenName: "Daniel",
		familyName: "O'Reilly"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'ga-IE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Daniel O'Reilly";
	
	assertEquals(expected, formatted);
};


function testDEFormatAsianNameMedium_ga_IE() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'ga-IE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testDEFormatAsianNameLong_ga_IE() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'ga-IE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};



