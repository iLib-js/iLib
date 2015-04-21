/*
 * testname_ms_MY.js - test the name object in Malaysian
 * 
 * Copyright © 2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var NameFmt = require("./../lib/NameFmt.js");
var Name = require("./../lib/Name.js");
function testParseSimpleName_ms_MY() {
	var parsed = new Name("Carmen Soo", {locale: 'ms-MY'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Carmen",
		familyName: "Soo"
	};
	
	assertObjectContains(expected, parsed);
};




function testParseTitle_ms_MY() {
	var parsed = new Name("Carmen Soo bersara", {locale: 'ms-MY'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "bersara",
		givenName: "Carmen",
		familyName: "Soo"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_ms_MY() {
	var parsed = new Name("cik Soo", {locale: 'ms-MY'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "cik",
		familyName: "Soo"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_ms_MY() {
	var parsed = new Name("encik dan cik Soo", {locale: 'ms-MY'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "encik dan cik",
		familyName: "Soo"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_ms_MY() {
	var parsed = new Name("cik Carmen Soo", {locale: 'ms-MY'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "cik",
		givenName: "Carmen",
		familyName: "Soo"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_ms_MY() {
	var name = new Name({
		givenName: "Carmen",
		familyName: "Soo"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'ms-MY'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Carmen Soo";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_ms_MY() {
	var name = new Name({
		givenName: "Carmen",
		familyName: "Soo"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'ms-MY'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Carmen Soo";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_ms_MY() {
	var name = new Name({
		givenName: "Carmen",
		familyName: "Soo",
		suffix: "asdf"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'ms-MY'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Carmen Soo";
	
	assertEquals(expected, formatted);
};



function testFormatSurname_ms_MY() {
	var name = new Name({
		prefix: "encik dan cik",
		familyName: "Soo"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'ms-MY'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "encik dan cik Soo";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_ms_MY() {
	var name = new Name({
		prefix: "pesuruhjaya",
		givenName: "Carmen",
		familyName: "Soo",
		suffix: "bersara"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'ms-MY'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "pesuruhjaya Carmen Soo bersara";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_ms_MY() {
	var name = new Name({
		prefix: "pesuruhjaya",
		givenName: "Carmen",
		familyName: "Soo"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'ms-MY'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Carmen Soo";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_ms_MY() {
	var name = new Name({
		prefix: "pesuruhjaya",
		givenName: "Carmen",
		familyName: "Soo"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'ms-MY'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Carmen Soo";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_ms_MY() {
	var name = new Name({
		prefix: "pesuruhjaya",
		givenName: "Carmen",
		familyName: "Soo"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'ms-MY'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "pesuruhjaya Carmen Soo";
	
	assertEquals(expected, formatted);
};


