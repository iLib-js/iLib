/*
 * testname_lv_LV.js - test the name object in Latvian
 * 
 * Copyright © 2013-2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var NameFmt = require("./../lib/NameFmt.js");
var Name = require("./../lib/Name.js");
function testParseSimpleName_lv_LV() {
	var parsed = new Name("Mikhail Baryshnikov", {locale: 'lv-LV'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Mikhail",
		familyName: "Baryshnikov"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseSimpleWithMiddleName_lv_LV() {
	var parsed = new Name("Sergei M. Eisenstein", {locale: 'lv-LV'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Sergei",
		middleName: "M.",
		familyName: "Eisenstein"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitle_lv_LV() {
	var parsed = new Name("Mikhail Baryshnikov vecākais", {locale: 'lv-LV'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "vecākais",
		givenName: "Mikhail",
		familyName: "Baryshnikov"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_lv_LV() {
	var parsed = new Name("priekšsēdētāja Baryshnikov", {locale: 'lv-LV'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "priekšsēdētāja",
		familyName: "Baryshnikov"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_lv_LV() {
	var parsed = new Name("kungs un kundze Baryshnikov", {locale: 'lv-LV'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "kungs un kundze",
		familyName: "Baryshnikov"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_lv_LV() {
	var parsed = new Name("kungs Mikhail Baryshnikov", {locale: 'lv-LV'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "kungs",
		givenName: "Mikhail",
		familyName: "Baryshnikov"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_lv_LV() {
	var name = new Name({
		givenName: "Mikhail",
		familyName: "Baryshnikov"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'lv-LV'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Mikhail Baryshnikov";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_lv_LV() {
	var name = new Name({
		givenName: "Mikhail",
		familyName: "Baryshnikov"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'lv-LV'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Mikhail Baryshnikov";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_lv_LV() {
	var name = new Name({
		givenName: "Mikhail",
		familyName: "Baryshnikov",
		suffix: "asdf"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'lv-LV'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Mikhail Baryshnikov";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameWithMiddleNameFull_lv_LV() {
	var name = new Name({
		givenName: "Sergei",
		middleName: "M.",
		familyName: "Eisenstein",
		suffix: "pūt"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'lv-LV'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Sergei M. Eisenstein pūt";
	
	assertEquals(expected, formatted);
};

function testFormatSurname_lv_LV() {
	var name = new Name({
		prefix: "kungs un kundze",
		familyName: "Baryshnikov"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'lv-LV'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "kungs un kundze Baryshnikov";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_lv_LV() {
	var name = new Name({
		prefix: "priekšsēdētājs",
		givenName: "Mikhail",
		familyName: "Baryshnikov",
		suffix: "jaunākais"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'lv-LV'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "priekšsēdētājs Mikhail Baryshnikov jaunākais";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_lv_LV() {
	var name = new Name({
		prefix: "priekšsēdētājs",
		givenName: "Mikhail",
		familyName: "Baryshnikov"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'lv-LV'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Mikhail Baryshnikov";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_lv_LV() {
	var name = new Name({
		prefix: "priekšsēdētājs",
		givenName: "Mikhail",
		familyName: "Baryshnikov"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'lv-LV'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Mikhail Baryshnikov";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_lv_LV() {
	var name = new Name({
		prefix: "priekšsēdētājs",
		givenName: "Mikhail",
		familyName: "Baryshnikov"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'lv-LV'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "priekšsēdētājs Mikhail Baryshnikov";
	
	assertEquals(expected, formatted);
};


