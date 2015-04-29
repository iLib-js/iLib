/*
 * testname_sq_Al.js - test the name object in Albanian
 * 
 * Copyright © 2013-2015, JEZotiSoft
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
function testParseSimpleName_sq_Al() {
	var parsed = new Name("James Belushi", {locale: 'sq-Al'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "James",
		familyName: "Belushi"
	};
	
	assertObjectContains(expected, parsed);
};





function testParseTitle_sq_Al() {
	var parsed = new Name("James Belushi njom", {locale: 'sq-Al'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "njom",
		givenName: "James",
		familyName: "Belushi"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_sq_Al() {
	var parsed = new Name("Zoti. Belushi", {locale: 'sq-Al'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Zoti.",
		familyName: "Belushi"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_sq_Al() {
	var parsed = new Name("Zoti. dhe Zonja. Belushi", {locale: 'sq-Al'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Zoti. dhe Zonja.",
		familyName: "Belushi"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_sq_Al() {
	var parsed = new Name("Zoti. James Belushi", {locale: 'sq-Al'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Zoti.",
		givenName: "James",
		familyName: "Belushi"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefixAndSuffix_sq_Al() {
	var parsed = new Name("Zëvendëspresident James Belushi njom", {locale: 'sq-Al'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Zëvendëspresident",
		givenName: "James",
		familyName: "Belushi",
		suffix:"njom"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_sq_Al() {
	var name = new Name({
		givenName: "James",
		familyName: "Belushi"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'sq-Al'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "James Belushi";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_sq_Al() {
	var name = new Name({
		givenName: "James",
		familyName: "Belushi"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'sq-Al'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "James Belushi";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_sq_Al() {
	var name = new Name({
		givenName: "James",
		familyName: "Belushi",
		suffix: "asdf"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'sq-Al'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "James Belushi";
	
	assertEquals(expected, formatted);
};



function testFormatSurname_sq_Al() {
	var name = new Name({
		prefix: "Zoti. dhe Zonja.",
		familyName: "Belushi"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'sq-Al'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Zoti. dhe Zonja. Belushi";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_sq_Al() {
	var name = new Name({
		prefix: "Guvernator",
		givenName: "James",
		familyName: "Belushi",
		suffix: "njom"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'sq-Al'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Guvernator James Belushi njom";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_sq_Al() {
	var name = new Name({
		prefix: "Guvernator",
		givenName: "James",
		familyName: "Belushi"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'sq-Al'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "James Belushi";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_sq_Al() {
	var name = new Name({
		prefix: "Guvernator",
		givenName: "James",
		familyName: "Belushi"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'sq-Al'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "James Belushi";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_sq_Al() {
	var name = new Name({
		prefix: "Guvernator",
		givenName: "James",
		familyName: "Belushi"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'sq-Al'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Guvernator James Belushi";
	
	assertEquals(expected, formatted);
};


