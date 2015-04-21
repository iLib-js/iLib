/*
 * testname_pl_PL.js - test the name object in Polish
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
function testParseSimpleName_pl_PL() {
	var parsed = new Name("Szymon Askenazy", {locale: 'pl-PL'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Szymon",
		familyName: "Askenazy"
	};
	
	assertObjectContains(expected, parsed);
};




function testParseTitle_pl_PL() {
	var parsed = new Name("Szymon Askenazy emeryturę", {locale: 'pl-PL'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "emeryturę",
		givenName: "Szymon",
		familyName: "Askenazy"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_pl_PL() {
	var parsed = new Name("Pan. Askenazy", {locale: 'pl-PL'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Pan.",
		familyName: "Askenazy"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_pl_PL() {
	var parsed = new Name("Pan. i Pani. Askenazy", {locale: 'pl-PL'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Pan. i Pani.",
		familyName: "Askenazy"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_pl_PL() {
	var parsed = new Name("Pan. Szymon Askenazy", {locale: 'pl-PL'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Pan.",
		givenName: "Szymon",
		familyName: "Askenazy"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_pl_PL() {
	var name = new Name({
		givenName: "Szymon",
		familyName: "Askenazy"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'pl-PL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Szymon Askenazy";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_pl_PL() {
	var name = new Name({
		givenName: "Szymon",
		familyName: "Askenazy"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'pl-PL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Szymon Askenazy";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_pl_PL() {
	var name = new Name({
		givenName: "Szymon",
		familyName: "Askenazy",
		suffix: "asdf"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'pl-PL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Szymon Askenazy";
	
	assertEquals(expected, formatted);
};



function testFormatSurname_pl_PL() {
	var name = new Name({
		prefix: "Pan. i Pani.",
		familyName: "Askenazy"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'pl-PL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Pan. i Pani. Askenazy";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_pl_PL() {
	var name = new Name({
		prefix: "prezydent",
		givenName: "Szymon",
		familyName: "Askenazy",
		suffix: "emeryturę"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'pl-PL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "prezydent Szymon Askenazy emeryturę";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_pl_PL() {
	var name = new Name({
		prefix: "prezydent",
		givenName: "Szymon",
		familyName: "Askenazy"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'pl-PL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Szymon Askenazy";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_pl_PL() {
	var name = new Name({
		prefix: "prezydent",
		givenName: "Szymon",
		familyName: "Askenazy"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'pl-PL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Szymon Askenazy";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_pl_PL() {
	var name = new Name({
		prefix: "prezydent",
		givenName: "Szymon",
		familyName: "Askenazy"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'pl-PL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "prezydent Szymon Askenazy";
	
	assertEquals(expected, formatted);
};


