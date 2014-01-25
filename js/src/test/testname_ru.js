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
	var parsed = new ilib.Name("Андрей Николаевич", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Андрей",
		familyName: "Николаевич"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUParseTripleName() {
	var parsed = new ilib.Name("Андрей Микаэль Николаевич", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Андрей",
		middleName: "Микаэль",
		familyName: "Николаевич"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUParseQuadrupleName() {
	var parsed = new ilib.Name("Андрей Микаэль Григорий Николаевич", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Андрей",
		middleName: "Микаэль Григорий",
		familyName: "Николаевич"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUParseTitle() {
	var parsed = new ilib.Name("Доктор Андрей Николаевич", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Доктор",
		givenName: "Андрей",
		familyName: "Николаевич"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUParseHonorific() {
	var parsed = new ilib.Name("Г-жа Татьяна Ивановна", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Г-жа",
		givenName: "Татьяна",
		familyName: "Ивановна"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUParseEverything() {
	var parsed = new ilib.Name("Президент Владимир Путин младший", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Президент",
		givenName: "Владимир",
		familyName: "Путин",
		suffix: "младший"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testRUFormatSimpleNameShort() {
	var name = new ilib.Name({
		givenName: "Андрей",
		familyName: "Николаевич"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Андрей Николаевич";
	
	assertEquals(expected, formatted);
};

function testRUFormatSimpleNameMedium() {
	var name = new ilib.Name({
		givenName: "Андрей",
		familyName: "Николаевич"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Андрей Николаевич";
	
	assertEquals(expected, formatted);
};

function testRUFormatSimpleNameLong() {
	var name = new ilib.Name({
		givenName: "Андрей",
		familyName: "Николаевич"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Андрей Николаевич";
	
	assertEquals(expected, formatted);
};

function testRUFormatSimpleNameFull() {
	var name = new ilib.Name({
		givenName: "Андрей",
		//middleName: "Микаэль",
		familyName: "Николаевич"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Андрей Николаевич";
	
	assertEquals(expected, formatted);
};

function testRUFormatComplexNameShort() {
	var name = new ilib.Name({
		prefix: "Доктор",
		givenName: "Андрей",
		familyName: "Николаевич",
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Андрей Николаевич";
	
	assertEquals(expected, formatted);
};

function testRUFormatComplexNameMedium() {
	var name = new ilib.Name({
		prefix: "Доктор",
		givenName: "Андрей",
		familyName: "Николаевич"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Андрей Николаевич";
	
	assertEquals(expected, formatted);
};

function testRUFormatComplexNameLong() {
	var name = new ilib.Name({
		prefix: "Доктор",
		givenName: "Андрей",
		familyName: "Николаевич"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Доктор Андрей Николаевич";
	
	assertEquals(expected, formatted);
};

function testRUFormatComplexNameFull() {
	var name = new ilib.Name({
		prefix: "Доктор",
		givenName: "Андрей",
		familyName: "Николаевич"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Доктор Андрей Николаевич";
	
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
