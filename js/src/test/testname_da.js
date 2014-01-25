/*
 * testname_da.js - test the name object in Danish
 * 
 * Copyright © 2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Udaess required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testDKParseSimpleName() {
	var parsed = new ilib.Name("Maren Jensdatter", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Maren",
		familyName: "Jensdatter"
	};
	
	assertObjectContains(expected, parsed);
};

function testDKParseTripleName() {
	var parsed = new ilib.Name("Jan Michael Jensdatter", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jan",
		middleName: "Michael",
		familyName: "Jensdatter"
	};
	
	assertObjectContains(expected, parsed);
};

function testDKParseAdjunctNames() {
	var parsed = new ilib.Name("Jan Michael Jensdatter", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jan",
		middleName: "Michael",
		familyName: "Jensdatter"
	};
	
	assertObjectContains(expected, parsed);
};

function testDKParseMultiAdjunctNames() {
	var parsed = new ilib.Name("Jan Michael Jensdatter", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jan",
		familyName: "Jensdatter"
	};
	
	assertObjectContains(expected, parsed);
};

function testDKParseHypenatedName() {
	var parsed = new ilib.Name("Jan Michael Bergische-Jensdatter", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jan",
		middleName: "Michael",
		familyName: "Bergische-Jensdatter"
	};
	
	assertObjectContains(expected, parsed);
};

function testDKParseQuadrupleName() {
	var parsed = new ilib.Name("Jan Michael Jürgen Jensdatter", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jan",
		middleName: "Michael Jürgen",
		familyName: "Jensdatter"
	};
	
	assertObjectContains(expected, parsed);
};

function testDKParseTitle() {
	var parsed = new ilib.Name("Dr. Jan Jensdatter", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Dr.",
		givenName: "Jan",
		familyName: "Jensdatter"
	};
	
	assertObjectContains(expected, parsed);
};

function testDKParseHonorific() {
	var parsed = new ilib.Name("Fru Julia Jensdatter", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Fru",
		givenName: "Julia",
		familyName: "Jensdatter"
	};
	
	assertObjectContains(expected, parsed);
};

function testDKParseEverything() {
	var parsed = new ilib.Name("President Jan Michael Jürgen Jensdatter Jr.", {locale: 'da-DK'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "President",
		givenName: "Jan",
		middleName: "Michael Jürgen",
		familyName: "Jensdatter",
		suffix: "Jr."
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testDKFormatSimpleNameShort() {
	var name = new ilib.Name({
		givenName: "Jan",
		middleName: "Michael",
		familyName: "Jensdatter"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'da-DK'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Jan Jensdatter";
	
	assertEquals(expected, formatted);
};

function testDKFormatSimpleNameMedium() {
	var name = new ilib.Name({
		givenName: "Jan",
		middleName: "Michael",
		familyName: "Jensdatter"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'da-DK'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Jan Michael Jensdatter";
	
	assertEquals(expected, formatted);
};

function testDKFormatSimpleNameLong() {
	var name = new ilib.Name({
		givenName: "Jan",
		middleName: "Michael",
		familyName: "Jensdatter"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'da-DK'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Jan Michael Jensdatter";
	
	assertEquals(expected, formatted);
};

function testDKFormatSimpleNameFull() {
	var name = new ilib.Name({
		givenName: "Jan",
		middleName: "Michael",
		familyName: "Jensdatter"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'da-DK'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Jan Michael Jensdatter";
	
	assertEquals(expected, formatted);
};

function testDKFormatComplexNameShort() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "Jan",
		middleName: "Michael Pieter",
		familyName: "Jensdatter",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'da-DK'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Jan Jensdatter";
	
	assertEquals(expected, formatted);
};

function testDKFormatComplexNameMedium() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "Jan",
		middleName: "Michael Pieter",
		familyName: "Jensdatter",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'da-DK'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Jan Michael Pieter Jensdatter";
	
	assertEquals(expected, formatted);
};

function testDKFormatComplexNameLong() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "Jan",
		middleName: "Michael Pieter",
		familyName: "Jensdatter",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'da-DK'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. Jan Michael Pieter Jensdatter";
	
	assertEquals(expected, formatted);
};

function testDKFormatComplexNameFull() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "Jan",
		middleName: "Michael Pieter",
		familyName: "Jensdatter",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'da-DK'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. Jan Michael Pieter Jensdatter III";
	
	assertEquals(expected, formatted);
};

function testDKFormatAsianNameShort() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'da-DK'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testDKFormatAsianNameMedium() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'da-DK'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testDKFormatAsianNameLong() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'da-DK'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸";
	
	assertEquals(expected, formatted);
};

function testDKFormatAsianNameFull() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'da-DK'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};
