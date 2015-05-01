/*
 * testname_tr_TR.js - test the name object in Turkish
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
function testParseSimpleName_tr_TR() {
	var parsed = new Name("Kemal Sunal", {locale: 'tr-TR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Kemal",
		familyName: "Sunal"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitle_tr_TR() {
	var parsed = new Name("Kemal Sunal kıdemli", {locale: 'tr-TR'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "kıdemli",
		givenName: "Kemal",
		familyName: "Sunal"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitleWithFamilyOnly_tr_TR() {
	var parsed = new Name("Bay Sunal", {locale: 'tr-TR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Bay",
		familyName: "Sunal"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_tr_TR() {
	var parsed = new Name("Bay ve Bayan Sunal", {locale: 'tr-TR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Bay ve Bayan",
		familyName: "Sunal"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_tr_TR() {
	var parsed = new Name("Bay Kemal Sunal", {locale: 'tr-TR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Bay",
		givenName: "Kemal",
		familyName: "Sunal"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefixAndSuffix_tr_TR() {
	var parsed = new Name("belediye başkanı Kemal Sunal kıdemli", {locale: 'tr-TR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "belediye başkanı",
		givenName: "Kemal",
		familyName: "Sunal",
		suffix:"kıdemli"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_tr_TR() {
	var name = new Name({
		givenName: "Kemal",
		familyName: "Sunal"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'tr-TR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Kemal Sunal";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_tr_TR() {
	var name = new Name({
		givenName: "Kemal",
		familyName: "Sunal"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'tr-TR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Kemal Sunal";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_tr_TR() {
	var name = new Name({
		givenName: "Kemal",
		familyName: "Sunal",
		suffix: "asdf"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'tr-TR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Kemal Sunal";
	
	assertEquals(expected, formatted);
};

function testFormatSurname_tr_TR() {
	var name = new Name({
		prefix: "Bay ve Bayan",
		familyName: "Sunal"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'tr-TR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Bay ve Bayan Sunal";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_tr_TR() {
	var name = new Name({
		prefix: "Bakan",
		givenName: "Kemal",
		familyName: "Sunal",
		suffix: "kıdemli"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'tr-TR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Bakan Kemal Sunal kıdemli";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_tr_TR() {
	var name = new Name({
		prefix: "Bakan",
		givenName: "Kemal",
		familyName: "Sunal"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'tr-TR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Kemal Sunal";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_tr_TR() {
	var name = new Name({
		prefix: "Bakan",
		givenName: "Kemal",
		familyName: "Sunal"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'tr-TR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Kemal Sunal";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_tr_TR() {
	var name = new Name({
		prefix: "Bakan",
		givenName: "Kemal",
		familyName: "Sunal"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'tr-TR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Bakan Kemal Sunal";
	
	assertEquals(expected, formatted);
};


