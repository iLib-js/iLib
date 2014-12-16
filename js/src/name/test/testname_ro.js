/*
 * testname_ro_RO.js - test the name object in Romanian
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

function testParseSimpleName_ro_RO() {
	var parsed = new ilib.Name("Sebastian Stan", {locale: 'ro-RO'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Sebastian",
		familyName: "Stan"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseSimpleNameWithMiddleName_ro_RO() {
	var parsed = new ilib.Name("Alexandra Maria Lara", {locale: 'ro-RO'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Alexandra",
		middleName: "Maria",
		familyName: "Lara"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitle_ro_RO() {
	var parsed = new ilib.Name("Sebastian Stan doctorand", {locale: 'ro-RO'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "doctorand",
		givenName: "Sebastian",
		familyName: "Stan"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitleWithFamilyOnly_ro_RO() {
	var parsed = new ilib.Name("Dl. Stan", {locale: 'ro-RO'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Dl.",
		familyName: "Stan"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_ro_RO() {
	var parsed = new ilib.Name("Dl. și D-na. Stan", {locale: 'ro-RO'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Dl. și D-na.",
		familyName: "Stan"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_ro_RO() {
	var parsed = new ilib.Name("Dl. Sebastian Stan", {locale: 'ro-RO'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Dl.",
		givenName: "Sebastian",
		familyName: "Stan"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefixAndSuffix_ro_RO() {
	var parsed = new ilib.Name("Vice-presedinte Sebastian Stan retras", {locale: 'ro-RO'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Vice-presedinte",
		givenName: "Sebastian",
		familyName: "Stan",
		suffix:"retras"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_ro_RO() {
	var name = new ilib.Name({
		givenName: "Sebastian",
		familyName: "Stan"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'ro-RO'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Sebastian Stan";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_ro_RO() {
	var name = new ilib.Name({
		givenName: "Sebastian",
		
		familyName: "Stan"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'ro-RO'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Sebastian Stan";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_ro_RO() {
	var name = new ilib.Name({
		givenName: "Sebastian",
		
		familyName: "Stan",
		suffix: "asdf"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'ro-RO'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Sebastian Stan";
	
	assertEquals(expected, formatted);
};



function testFormatSurname_ro_RO() {
	var name = new ilib.Name({
		prefix: "Dl. i D-na.",
		
		familyName: "Stan"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'ro-RO'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dl. i D-na. Stan";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_ro_RO() {
	var name = new ilib.Name({
		prefix: "Administrator",
		givenName: "Sebastian",
		
		familyName: "Stan",
		suffix: "doctorand"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'ro-RO'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Administrator Sebastian Stan doctorand";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_ro_RO() {
	var name = new ilib.Name({
		prefix: "Administrator",
		givenName: "Sebastian",
		familyName: "Stan"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'ro-RO'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Sebastian Stan";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_ro_RO() {
	var name = new ilib.Name({
		prefix: "Administrator",
		givenName: "Sebastian",
		familyName: "Stan"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'ro-RO'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Sebastian Stan";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_ro_RO() {
	var name = new ilib.Name({
		prefix: "Administrator",
		givenName: "Sebastian",
		familyName: "Stan"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'ro-RO'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Administrator Sebastian Stan";
	
	assertEquals(expected, formatted);
};


