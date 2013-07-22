/*
 * testname_ru.js - test the name object in Russian
 * 
 * Copyright © 2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Uruess required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testRUParseSimpleName() {
	var parsed = new ilib.Name("Andrei Nikolaevich", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Andrei",
		familyName: "Nikolaevich"
	};
	
	assertObjectContains(expected, parsed);
};

/*function testRUParseTripleName() {
	var parsed = new ilib.Name("Andrei Michael Nikolaevich", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Andrei",
		middleName: "Michael",
		familyName: "Nikolaevich"
	};
	
	assertObjectContains(expected, parsed);
};*/

/*function testRUParseAdjunctNames() {
	var parsed = new ilib.Name("Ludwig Klaus von Beethoven", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Ludwig",
		middleName: "Klaus",
		familyName: "von Beethoven"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUParseMultiAdjunctNames() {
	var parsed = new ilib.Name("Geertje van den Bosch", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Geertje",
		familyName: "van den Bosch"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUParseHypenatedName() {
	var parsed = new ilib.Name("Andrei Michael Bergische-Nikolaevich", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Andrei",
		middleName: "Michael",
		familyName: "Bergische-Nikolaevich"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUParseQuadrupleName() {
	var parsed = new ilib.Name("Andrei Michael Jürgen Nikolaevich", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Andrei",
		middleName: "Michael Jürgen",
		familyName: "Nikolaevich"
	};
	
	assertObjectContains(expected, parsed);
};*/

function testRUParseTitle() {
	var parsed = new ilib.Name("Dr. Andrei Nikolaevich", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Dr.",
		givenName: "Andrei",
		familyName: "Nikolaevich"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUParseHonorific() {
	var parsed = new ilib.Name("Mvw. Tatyana  Ivanovna ", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Mvw.",
		givenName: "Tatyana ",
		familyName: "Ivanovna "
	};
	
	assertObjectContains(expected, parsed);
};

function testRUParseEverything() {
	var parsed = new ilib.Name("President Andrei ", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "President",
		givenName: "Andrei",
		familyName: "Nikolaevich",
		//suffix: "Jr."
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testRUFormatSimpleNameShort() {
	var name = new ilib.Name({
		givenName: "Andrei",
		familyName: "Nikolaevich"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Andrei Nikolaevich";
	
	assertEquals(expected, formatted);
};

function testRUFormatSimpleNameMedium() {
	var name = new ilib.Name({
		givenName: "Andrei",
		familyName: "Nikolaevich"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Andrei Nikolaevich";
	
	assertEquals(expected, formatted);
};

function testRUFormatSimpleNameLong() {
	var name = new ilib.Name({
		givenName: "Andrei",
		familyName: "Nikolaevich"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Andrei Nikolaevich";
	
	assertEquals(expected, formatted);
};

function testRUFormatSimpleNameFull() {
	var name = new ilib.Name({
		givenName: "Andrei",
		//middleName: "Michael",
		familyName: "Nikolaevich"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Andrei Michael Nikolaevich";
	
	assertEquals(expected, formatted);
};

function testRUFormatComplexNameShort() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "Andrei",
		//middleName: "Michael Pieter",
		familyName: "Nikolaevich",
		//suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Andrei Nikolaevich";
	
	assertEquals(expected, formatted);
};

function testRUFormatComplexNameMedium() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "Andrei",
		//middleName: "Michael Pieter",
		familyName: "Nikolaevich",
		//suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Andrei Nikolaevich";
	
	assertEquals(expected, formatted);
};

function testRUFormatComplexNameLong() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "Andrei",
		//middleName: "Michael Pieter",
		familyName: "Nikolaevich",
		//suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. Andrei Nikolaevich";
	
	assertEquals(expected, formatted);
};

function testRUFormatComplexNameFull() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "Andrei",
		//middleName: "Michael Pieter",
		familyName: "Nikolaevich",
		//suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. Andrei Nikolaevich";
	
	assertEquals(expected, formatted);
};

function testRUFormatAsianNameShort() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testRUFormatAsianNameMedium() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testRUFormatAsianNameLong() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸";
	
	assertEquals(expected, formatted);
};

function testRUFormatAsianNameFull() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};
