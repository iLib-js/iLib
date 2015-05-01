/*
 * testname_pt_PT.js - test the name object in Portugese
 * 
 * Copyright © 2013-2015, JEDLSoft
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
function testParseSimpleName_pt_PT() {
	var parsed = new Name("Cristiano Ronaldo", {locale: 'pt-PT'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Cristiano",
		familyName: "Ronaldo"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseSimpleNameWithTwoFamilyName_pt_PT() {
	var parsed = new Name("José Eduardo Tavares Silva", {locale: 'pt-PT'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "José",
		middleName: "Eduardo",
		familyName: "Tavares Silva"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_pt_PT() {
	var parsed = new Name("Cristiano Ronaldo aposentados", {locale: 'pt-PT'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "aposentados",
		givenName: "Cristiano",
		familyName: "Ronaldo"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_pt_PT() {
	var parsed = new Name("Senhor Ronaldo", {locale: 'pt-PT'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Senhor",
		familyName: "Ronaldo"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_pt_PT() {
	var parsed = new Name("Senhor e Senhora Ronaldo", {locale: 'pt-PT'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Senhor e Senhora",
		familyName: "Ronaldo"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_pt_PT() {
	var parsed = new Name("Senhor Cristiano Ronaldo", {locale: 'pt-PT'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Senhor",
		givenName: "Cristiano",
		familyName: "Ronaldo"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_pt_PT() {
	var name = new Name({
		givenName: "Cristiano",
		familyName: "Ronaldo"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'pt-PT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Cristiano Ronaldo";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_pt_PT() {
	var name = new Name({
		givenName: "Cristiano",
		familyName: "Ronaldo"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'pt-PT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Cristiano Ronaldo";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_pt_PT() {
	var name = new Name({
		givenName: "Cristiano",
		familyName: "Ronaldo",
		suffix: "asdf"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'pt-PT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Cristiano Ronaldo";
	
	assertEquals(expected, formatted);
};



function testFormatSurname_pt_PT() {
	var name = new Name({
		prefix: "Senhor e Senhori",
		familyName: "Ronaldo"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'pt-PT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Senhor e Senhori Ronaldo";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_pt_PT() {
	var name = new Name({
		prefix: "presidente",
		givenName: "Cristiano",
		familyName: "Ronaldo",
		suffix: "aposentados"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'pt-PT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "presidente Cristiano Ronaldo aposentados";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_pt_PT() {
	var name = new Name({
		prefix: "presidente",
		givenName: "Cristiano",
		familyName: "Ronaldo"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'pt-PT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Cristiano Ronaldo";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_pt_PT() {
	var name = new Name({
		prefix: "presidente",
		givenName: "Cristiano",
		familyName: "Ronaldo"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'pt-PT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Cristiano Ronaldo";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_pt_PT() {
	var name = new Name({
		prefix: "presidente",
		givenName: "Cristiano",
		familyName: "Ronaldo"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'pt-PT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "presidente Cristiano Ronaldo";
	
	assertEquals(expected, formatted);
};


