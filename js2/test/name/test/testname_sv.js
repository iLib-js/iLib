/*
 * testname_sv_SE.js - test the name object in Swedish
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
function testParseSimpleName_sv_SE() {
	var parsed = new Name("Maud Adams", {locale: 'sv-SE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Maud",
		familyName: "Adams"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitle_sv_SE() {
	var parsed = new Name("Maud Adams pension", {locale: 'sv-SE'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "pension",
		givenName: "Maud",
		familyName: "Adams"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitleWithFamilyOnly_sv_SE() {
	var parsed = new Name("herr Adams", {locale: 'sv-SE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "herr",
		familyName: "Adams"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseEverything_sv_SE() {
	var parsed = new Name("herr och fru Adams", {locale: 'sv-SE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "herr och fru",
		familyName: "Adams"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_sv_SE() {
	var parsed = new Name("herr Maud Adams", {locale: 'sv-SE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "herr",
		givenName: "Maud",
		familyName: "Adams"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefixAndSuffix_sv_SE() {
	var parsed = new Name("premiärminister Maud Adams pension", {locale: 'sv-SE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "premiärminister",
		givenName: "Maud",
		familyName: "Adams",
		suffix:"pension"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testFormatSimpleNameShort_sv_SE() {
	var name = new Name({
		givenName: "Maud",
		familyName: "Adams"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'sv-SE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Maud Adams";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_sv_SE() {
	var name = new Name({
		givenName: "Maud",
		familyName: "Adams"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'sv-SE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Maud Adams";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_sv_SE() {
	var name = new Name({
		givenName: "Maud",
		familyName: "Adams",
		suffix: "asdf"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'sv-SE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Maud Adams";
	
	assertEquals(expected, formatted);
};

function testFormatSurname_sv_SE() {
	var name = new Name({
		prefix: "herr och fru",
		familyName: "Adams"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'sv-SE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "herr och fru Adams";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_sv_SE() {
	var name = new Name({
		prefix: "guvernör",
		givenName: "Maud",
		familyName: "Adams",
		suffix: "pension"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'sv-SE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "guvernör Maud Adams pension";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_sv_SE() {
	var name = new Name({
		prefix: "guvernör",
		givenName: "Maud",
		familyName: "Adams"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'sv-SE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Maud Adams";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_sv_SE() {
	var name = new Name({
		prefix: "guvernör",
		givenName: "Maud",
		familyName: "Adams"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'sv-SE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Maud Adams";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_sv_SE() {
	var name = new Name({
		prefix: "guvernör",
		givenName: "Maud",
		familyName: "Adams"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'sv-SE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "guvernör Maud Adams";
	
	assertEquals(expected, formatted);
};


