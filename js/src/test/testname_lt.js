/*
 * testname_lt_LT.js - test the name object in Lithunaian
 * 
 * Copyright © 2013, JEDLSoft
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

function testParseSimpleName_lt_LT() {
	var parsed = new ilib.Name("Gediminas Baravykas", {locale: 'lt-LT'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Gediminas",
		familyName: "Baravykas"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitle_lt_LT() {
	var parsed = new ilib.Name("Gediminas Baravykas jaunesnysis", {locale: 'lt-LT'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "jaunesnysis",
		givenName: "Gediminas",
		familyName: "Baravykas"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_lt_LT() {
	var parsed = new ilib.Name("inspektorius Baravykas", {locale: 'lt-LT'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "inspektorius",
		familyName: "Baravykas"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_lt_LT() {
	var parsed = new ilib.Name("ponas ir ponia Baravykas", {locale: 'lt-LT'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "ponas ir ponia",
		familyName: "Baravykas"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_lt_LT() {
	var parsed = new ilib.Name("ponas Gediminas Baravykas", {locale: 'lt-LT'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "ponas",
		givenName: "Gediminas",
		familyName: "Baravykas"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_lt_LT() {
	var name = new ilib.Name({
		givenName: "Gediminas",
		familyName: "Baravykas"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'lt-LT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Gediminas Baravykas";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_lt_LT() {
	var name = new ilib.Name({
		givenName: "Gediminas",
		
		familyName: "Baravykas"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'lt-LT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Gediminas Baravykas";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_lt_LT() {
	var name = new ilib.Name({
		givenName: "Gediminas",
		
		familyName: "Baravykas",
		suffix: "asdf"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'lt-LT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Gediminas Baravykas";
	
	assertEquals(expected, formatted);
};

function testFormatSurname_lt_LT() {
	var name = new ilib.Name({
		prefix: "ponas ir ponia",
		
		familyName: "Baravykas"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'lt-LT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ponas ir ponia Baravykas";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_lt_LT() {
	var name = new ilib.Name({
		prefix: "profesorius",
		givenName: "Gediminas",
		
		familyName: "Baravykas",
		suffix: "daktaro"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'lt-LT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "profesorius Gediminas Baravykas daktaro";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_lt_LT() {
	var name = new ilib.Name({
		prefix: "profesorius",
		givenName: "Gediminas",
		familyName: "Baravykas"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'lt-LT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Gediminas Baravykas";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_lt_LT() {
	var name = new ilib.Name({
		prefix: "profesorius",
		givenName: "Gediminas",
		familyName: "Baravykas"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'lt-LT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Gediminas Baravykas";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_lt_LT() {
	var name = new ilib.Name({
		prefix: "profesorius",
		givenName: "Gediminas",
		familyName: "Baravykas"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'lt-LT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "profesorius Gediminas Baravykas";
	
	assertEquals(expected, formatted);
};


