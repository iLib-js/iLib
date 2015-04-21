/*
 * testname_nb_NO.js - test the name object in Norweign
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
function testParseSimpleName_nb_NO() {
	var parsed = new Name("Maria Bonnevie", {locale: 'nb-NO'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Maria",
		familyName: "Bonnevie"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_nb_NO() {
	var parsed = new Name("Maria Bonnevie pensjonert", {locale: 'nb-NO'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "pensjonert",
		givenName: "Maria",
		familyName: "Bonnevie"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_nb_NO() {
	var parsed = new Name("Mrs. Bonnevie", {locale: 'nb-NO'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Mrs.",
		familyName: "Bonnevie"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_nb_NO() {
	var parsed = new Name("Mr. og Mrs. Bonnevie", {locale: 'nb-NO'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Mr. og Mrs.",
		familyName: "Bonnevie"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_nb_NO() {
	var parsed = new Name("Mrs. Maria Bonnevie", {locale: 'nb-NO'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Mrs.",
		givenName: "Maria",
		familyName: "Bonnevie"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_nb_NO() {
	var name = new Name({
		givenName: "Maria",
		familyName: "Bonnevie"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'nb-NO'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Maria Bonnevie";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_nb_NO() {
	var name = new Name({
		givenName: "Maria",
		familyName: "Bonnevie"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'nb-NO'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Maria Bonnevie";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_nb_NO() {
	var name = new Name({
		givenName: "Maria",
		familyName: "Bonnevie",
		suffix: "asdf"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'nb-NO'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Maria Bonnevie";
	
	assertEquals(expected, formatted);
};



function testFormatSurname_nb_NO() {
	var name = new Name({
		prefix: "Mr. og Mrs.",
		familyName: "Bonnevie"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'nb-NO'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Mr. og Mrs. Bonnevie";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_nb_NO() {
	var name = new Name({
		prefix: "vice president",
		givenName: "Maria",
		familyName: "Bonnevie",
		suffix: "pensjonert"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'nb-NO'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "vice president Maria Bonnevie pensjonert";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_nb_NO() {
	var name = new Name({
		prefix: "vice president",
		givenName: "Maria",
		familyName: "Bonnevie"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'nb-NO'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Maria Bonnevie";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_nb_NO() {
	var name = new Name({
		prefix: "vice president",
		givenName: "Maria",
		familyName: "Bonnevie"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'nb-NO'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Maria Bonnevie";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_nb_NO() {
	var name = new Name({
		prefix: "vice president",
		givenName: "Maria",
		familyName: "Bonnevie"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'nb-NO'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "vice president Maria Bonnevie";
	
	assertEquals(expected, formatted);
};


