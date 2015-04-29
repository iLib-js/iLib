/*
 * testname_nl.js - test the name object in Dutch
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

function testNLParseSimpleName() {
	var parsed = new ilib.Name("Jan Hoogeboom", {locale: 'nl-NL'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jan",
		familyName: "Hoogeboom"
	};
	
	assertObjectContains(expected, parsed);
};

function testNLParseTripleName() {
	var parsed = new ilib.Name("Jan Michael Hoogeboom", {locale: 'nl-NL'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jan",
		middleName: "Michael",
		familyName: "Hoogeboom"
	};
	
	assertObjectContains(expected, parsed);
};

function testNLParseAdjunctNames() {
	var parsed = new ilib.Name("Ludwig Klaus von Beethoven", {locale: 'nl-NL'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Ludwig",
		middleName: "Klaus",
		familyName: "von Beethoven"
	};
	
	assertObjectContains(expected, parsed);
};

function testNLParseMultiAdjunctNames() {
	var parsed = new ilib.Name("Geertje van den Bosch", {locale: 'nl-NL'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Geertje",
		familyName: "van den Bosch"
	};
	
	assertObjectContains(expected, parsed);
};

function testNLParseHypenatedName() {
	var parsed = new ilib.Name("Jan Michael Bergische-Hoogeboom", {locale: 'nl-NL'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jan",
		middleName: "Michael",
		familyName: "Bergische-Hoogeboom"
	};
	
	assertObjectContains(expected, parsed);
};

function testNLParseQuadrupleName() {
	var parsed = new ilib.Name("Jan Michael Jürgen Hoogeboom", {locale: 'nl-NL'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jan",
		middleName: "Michael Jürgen",
		familyName: "Hoogeboom"
	};
	
	assertObjectContains(expected, parsed);
};

function testNLParseTitle() {
	var parsed = new ilib.Name("Dr. Jan Hoogeboom", {locale: 'nl-NL'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Dr.",
		givenName: "Jan",
		familyName: "Hoogeboom"
	};
	
	assertObjectContains(expected, parsed);
};

function testNLParseHonorific() {
	var parsed = new ilib.Name("Mvw. Julia Maier", {locale: 'nl-NL'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Mvw.",
		givenName: "Julia",
		familyName: "Maier"
	};
	
	assertObjectContains(expected, parsed);
};

function testNLParseEverything() {
	var parsed = new ilib.Name("President Jan Michael Jürgen Hoogeboom Jr.", {locale: 'nl-NL'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "President",
		givenName: "Jan",
		middleName: "Michael Jürgen",
		familyName: "Hoogeboom",
		suffix: "Jr."
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testNLFormatSimpleNameShort() {
	var name = new ilib.Name({
		givenName: "Jan",
		middleName: "Michael",
		familyName: "Hoogeboom"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'nl-NL'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Jan Hoogeboom";
	
	assertEquals(expected, formatted);
};

function testNLFormatSimpleNameMedium() {
	var name = new ilib.Name({
		givenName: "Jan",
		middleName: "Michael",
		familyName: "Hoogeboom"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'nl-NL'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Jan Michael Hoogeboom";
	
	assertEquals(expected, formatted);
};

function testNLFormatSimpleNameLong() {
	var name = new ilib.Name({
		givenName: "Jan",
		middleName: "Michael",
		familyName: "Hoogeboom"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'nl-NL'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Jan Michael Hoogeboom";
	
	assertEquals(expected, formatted);
};

function testNLFormatSimpleNameFull() {
	var name = new ilib.Name({
		givenName: "Jan",
		middleName: "Michael",
		familyName: "Hoogeboom"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'nl-NL'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Jan Michael Hoogeboom";
	
	assertEquals(expected, formatted);
};

function testNLFormatComplexNameShort() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "Jan",
		middleName: "Michael Pieter",
		familyName: "van der Smits",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'nl-NL'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Jan van der Smits";
	
	assertEquals(expected, formatted);
};

function testNLFormatComplexNameMedium() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "Jan",
		middleName: "Michael Pieter",
		familyName: "van der Smits",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'nl-NL'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Jan Michael Pieter van der Smits";
	
	assertEquals(expected, formatted);
};

function testNLFormatComplexNameLong() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "Jan",
		middleName: "Michael Pieter",
		familyName: "van der Smits",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'nl-NL'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. Jan Michael Pieter van der Smits";
	
	assertEquals(expected, formatted);
};

function testNLFormatComplexNameFull() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "Jan",
		middleName: "Michael Pieter",
		familyName: "van der Smits",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'nl-NL'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. Jan Michael Pieter van der Smits III";
	
	assertEquals(expected, formatted);
};

function testNLFormatAsianNameShort() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'nl-NL'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testNLFormatAsianNameMedium() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'nl-NL'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testNLFormatAsianNameLong() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'nl-NL'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸";
	
	assertEquals(expected, formatted);
};

function testNLFormatAsianNameFull() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'nl-NL'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};
