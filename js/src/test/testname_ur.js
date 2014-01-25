/*
 * testname_ur_IN.js - test the name object in Urdu
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

function testParseSimpleName_ur_IN() {
	var parsed = new ilib.Name("موہن لال", {locale: 'ur-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "موہن",
		familyName: "لال"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitle_ur_IN() {
	var parsed = new ilib.Name("موہن لال میں", {locale: 'ur-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "میں",
		givenName: "موہن",
		familyName: "لال"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_ur_IN() {
	var parsed = new ilib.Name("مسٹر لال", {locale: 'ur-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "مسٹر",
		familyName: "لال"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_ur_IN() {
	var parsed = new ilib.Name("مسٹر اور مسز لال", {locale: 'ur-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "مسٹر اور مسز",
		familyName: "لال"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_ur_IN() {
	var parsed = new ilib.Name("مسٹر موہن لال", {locale: 'ur-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "مسٹر",
		givenName: "موہن",
		familyName: "لال"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_ur_IN() {
	var name = new ilib.Name({
		givenName: "موہن",
		familyName: "لال"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'ur-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "موہن لال";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_ur_IN() {
	var name = new ilib.Name({
		givenName: "موہن",
		familyName: "لال"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'ur-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "موہن لال";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_ur_IN() {
	var name = new ilib.Name({
		givenName: "موہن",
		familyName: "لال"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'ur-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "موہن لال";
	
	assertEquals(expected, formatted);
};

function testFormatSurname_ur_IN() {
	var name = new ilib.Name({
		prefix: "مسٹر اور مسز",
		familyName: "لال"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'ur-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "مسٹر اور مسز لال";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_ur_IN() {
	var name = new ilib.Name({
		prefix: "ڈاکٹر",
		givenName: "موہن",
		familyName: "لال",
		suffix: "میں"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'ur-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ڈاکٹر موہن لال میں";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_ur_IN() {
	var name = new ilib.Name({
		prefix: "ڈاکٹر",
		givenName: "موہن",
		familyName: "لال"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'ur-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "موہن لال";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_ur_IN() {
	var name = new ilib.Name({
		prefix: "ڈاکٹر",
		givenName: "موہن",
		familyName: "لال"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'ur-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "موہن لال";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_ur_IN() {
	var name = new ilib.Name({
		prefix: "ڈاکٹر",
		givenName: "موہن",
		familyName: "لال"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'ur-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ڈاکٹر موہن لال";
	
	assertEquals(expected, formatted);
};


