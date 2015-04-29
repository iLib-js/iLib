/*
 * testname_uk_UA.js - test the name object in ukrainian
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

function testParseSimpleName_uk_UA() {
	var parsed = new ilib.Name("Міла Куніс", {locale: 'uk-UA'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Міла",
		familyName: "Куніс"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitle_uk_UA() {
	var parsed = new ilib.Name("Міла Куніс відставку", {locale: 'uk-UA'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "відставку",
		givenName: "Міла",
		familyName: "Куніс"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitleWithFamilyOnly_uk_UA() {
	var parsed = new ilib.Name("г-н Куніс", {locale: 'uk-UA'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "г-н",
		familyName: "Куніс"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_uk_UA() {
	var parsed = new ilib.Name("г-н і г-жа Куніс", {locale: 'uk-UA'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "г-н і г-жа",
		familyName: "Куніс"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_uk_UA() {
	var parsed = new ilib.Name("г-н Міла Куніс", {locale: 'uk-UA'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "г-н",
		givenName: "Міла",
		familyName: "Куніс"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefixAndSuffix_uk_UA() {
	var parsed = new ilib.Name("міністр Міла Куніс відставку", {locale: 'uk-UA'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "міністр",
		givenName: "Міла",
		familyName: "Куніс",
		suffix:"відставку"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_uk_UA() {
	var name = new ilib.Name({
		givenName: "Міла",
		familyName: "Куніс"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'uk-UA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Міла Куніс";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_uk_UA() {
	var name = new ilib.Name({
		givenName: "Міла",
		familyName: "Куніс"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'uk-UA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Міла Куніс";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_uk_UA() {
	var name = new ilib.Name({
		givenName: "Міла",
		familyName: "Куніс",
		suffix: "asdf"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'uk-UA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Міла Куніс";
	
	assertEquals(expected, formatted);
};



function testFormatSurname_uk_UA() {
	var name = new ilib.Name({
		prefix: "г-н i г-жа",
		familyName: "Куніс"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'uk-UA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "г-н i г-жа Куніс";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_uk_UA() {
	var name = new ilib.Name({
		prefix: "шеф-кухар",
		givenName: "Міла",
		familyName: "Куніс",
		suffix: "відставку"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'uk-UA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "шеф-кухар Міла Куніс відставку";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_uk_UA() {
	var name = new ilib.Name({
		prefix: "шеф-кухар",
		givenName: "Міла",
		familyName: "Куніс"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'uk-UA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Міла Куніс";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_uk_UA() {
	var name = new ilib.Name({
		prefix: "шеф-кухар",
		givenName: "Міла",
		familyName: "Куніс"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'uk-UA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Міла Куніс";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_uk_UA() {
	var name = new ilib.Name({
		prefix: "шеф-кухар",
		givenName: "Міла",
		familyName: "Куніс"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'uk-UA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "шеф-кухар Міла Куніс";
	
	assertEquals(expected, formatted);
};


