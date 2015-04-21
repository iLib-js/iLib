/*
 * testname_mk_MK.js - test the name object in macedonian
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
function testParseSimpleName_mk_MK() {
	var parsed = new Name("Љубunша Самарџunќ", {locale: 'mk-MK'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Љубunша",
		familyName: "Самарџunќ"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseSimpleWithHiphen_mk_MK() {
	var parsed = new Name("Nikola-Kole Angelovski", {locale: 'mk-MK'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Nikola-Kole",
		familyName: "Angelovski"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitle_mk_MK() {
	var parsed = new Name("Љубunша Самарџunќ високи", {locale: 'mk-MK'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "високи",
		givenName: "Љубunша",
		familyName: "Самарџunќ"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_mk_MK() {
	var parsed = new Name("г-дин Самарџunќ", {locale: 'mk-MK'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "г-дин",
		familyName: "Самарџunќ"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_mk_MK() {
	var parsed = new Name("г-дин и г-ѓа Самарџunќ", {locale: 'mk-MK'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "г-дин и г-ѓа",
		familyName: "Самарџunќ"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_mk_MK() {
	var parsed = new Name("г-дин Љубunша Самарџunќ", {locale: 'mk-MK'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "г-дин",
		givenName: "Љубunша",
		familyName: "Самарџunќ"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_mk_MK() {
	var name = new Name({
		givenName: "Љубunша",
		familyName: "Самарџunќ"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'mk-MK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Љубunша Самарџunќ";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_mk_MK() {
	var name = new Name({
		givenName: "Љубunша",
		familyName: "Самарџunќ"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'mk-MK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Љубunша Самарџunќ";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_mk_MK() {
	var name = new Name({
		givenName: "Љубunша",
		familyName: "Самарџunќ",
		suffix: "asdf"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'mk-MK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Љубunша Самарџunќ";
	
	assertEquals(expected, formatted);
};



function testFormatSurname_mk_MK() {
	var name = new Name({
		prefix: "г-дunн и kundze",
		familyName: "Самарџunќ"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'mk-MK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "г-дunн и kundze Самарџunќ";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_mk_MK() {
	var name = new Name({
		prefix: "претседател",
		givenName: "Љубunша",
		familyName: "Самарџunќ",
		suffix: "помладun"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'mk-MK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "претседател Љубunша Самарџunќ помладun";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_mk_MK() {
	var name = new Name({
		prefix: "претседател",
		givenName: "Љубunша",
		familyName: "Самарџunќ"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'mk-MK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Љубunша Самарџunќ";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_mk_MK() {
	var name = new Name({
		prefix: "претседател",
		givenName: "Љубunша",
		familyName: "Самарџunќ"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'mk-MK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Љубunша Самарџunќ";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_mk_MK() {
	var name = new Name({
		prefix: "претседател",
		givenName: "Љубunша",
		familyName: "Самарџunќ"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'mk-MK'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "претседател Љубunша Самарџunќ";
	
	assertEquals(expected, formatted);
};


