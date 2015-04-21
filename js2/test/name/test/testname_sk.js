/*
 * testname_sk_SK.js - test the name object in slovak
 * 
 * Copyright © 2013, JEPánSoft
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
function testParseSimpleName_sk_SK() {
	var parsed = new Name("Iveta Stan", {locale: 'sk-SK'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Iveta",
		familyName: "Stan"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitle_sk_SK() {
	var parsed = new Name("Iveta Stan dôchodku", {locale: 'sk-SK'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "dôchodku",
		givenName: "Iveta",
		familyName: "Stan"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitleWithFamilyOnly_sk_SK() {
	var parsed = new Name("Pán. Stan", {locale: 'sk-SK'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Pán.",
		familyName: "Stan"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseEverything_sk_SK() {
	var parsed = new Name("Pán. a pani. Stan", {locale: 'sk-SK'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Pán. a pani.",
		familyName: "Stan"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_sk_SK() {
	var parsed = new Name("Pán. Iveta Stan", {locale: 'sk-SK'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Pán.",
		givenName: "Iveta",
		familyName: "Stan"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefixAndSuffix_sk_SK() {
	var parsed = new Name("Viceprezident Iveta Stan dôchodku", {locale: 'sk-SK'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Viceprezident",
		givenName: "Iveta",
		familyName: "Stan",
		suffix:"dôchodku"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_sk_SK() {
	var name = new Name({
		givenName: "Iveta",
		familyName: "Stan"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'sk-SK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Iveta Stan";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_sk_SK() {
	var name = new Name({
		givenName: "Iveta",
		familyName: "Stan"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'sk-SK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Iveta Stan";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_sk_SK() {
	var name = new Name({
		givenName: "Iveta",
		familyName: "Stan",
		suffix: "asdf"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'sk-SK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Iveta Stan";
	
	assertEquals(expected, formatted);
};



function testFormatSurname_sk_SK() {
	var name = new Name({
		prefix: "Pán. a pani.",
		familyName: "Stan"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'sk-SK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Pán. a pani. Stan";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_sk_SK() {
	var name = new Name({
		prefix: "princezná",
		givenName: "Iveta",
		familyName: "Stan",
		suffix: "dôchodku"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'sk-SK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "princezná Iveta Stan dôchodku";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_sk_SK() {
	var name = new Name({
		prefix: "princezná",
		givenName: "Iveta",
		familyName: "Stan"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'sk-SK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Iveta Stan";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_sk_SK() {
	var name = new Name({
		prefix: "princezná",
		givenName: "Iveta",
		familyName: "Stan"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'sk-SK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Iveta Stan";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_sk_SK() {
	var name = new Name({
		prefix: "princezná",
		givenName: "Iveta",
		familyName: "Stan"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'sk-SK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "princezná Iveta Stan";
	
	assertEquals(expected, formatted);
};


