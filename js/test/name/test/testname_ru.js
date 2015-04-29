/*
 * testname_ru.js - test the name object in Russian
 * 
 * Copyright © 2013-2015, JEDLSoft
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

var NameFmt = require("./../lib/NameFmt.js");
var Name = require("./../lib/Name.js");
function testRUParseSimpleName() {
	var parsed = new Name("Андрей Николаевич", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Андрей",
		middleName: "Николаевич"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUParseTripleName() {
	var parsed = new Name("Андрей Микаэль Николаевич", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Микаэль",
		middleName: "Николаевич",
		familyName: "Андрей"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUParseQuadrupleName() {
	var parsed = new Name("Андрей Микаэль Григорий Николаевич", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Микаэль Григорий",
		middleName: "Николаевич",
		familyName: "Андрей"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUParseTitle() {
	var parsed = new Name("Доктор Андрей Николаевич", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Доктор",
		givenName: "Андрей",
		middleName: "Николаевич"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUParseHonorific() {
	var parsed = new Name("Г-жа Татьяна Ивановна", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Г-жа",
		givenName: "Татьяна",
		middleName: "Ивановна"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUFamilyName1() {
	var parsed = new Name("Pavel Яшкин", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Pavel",
		familyName: "Яшкин"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUFamilyName2() {
	var parsed = new Name("Абакумов Pavel", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Pavel",
		familyName: "Абакумов"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUFamilyName3() {
	var parsed = new Name("Pavel Андреевич", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Pavel",
		middleName: "Андреевич"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUName1() {
	var parsed = new Name("Иван Иванович Иванов", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Иван",
		middleName: "Иванович",
        familyName: "Иванов"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUName2() {
	var parsed = new Name("Иван Иванович", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Иван",
		middleName: "Иванович"
    };
	
	assertObjectContains(expected, parsed);
};

function testRUName3() {
	var parsed = new Name("Иван Иванов", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Иван",
	    familyName: "Иванов"
	};
	
	assertObjectContains(expected, parsed);
};

function testRUName4() {
	var parsed = new Name("Иванов Иван", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Иван",
	    familyName: "Иванов"
	};
	assertObjectContains(expected, parsed);
};

function testRUName5() {
	var parsed = new Name("Владимир Андреевич Филатов", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Владимир",
        middleName: "Андреевич",
        familyName: "Филатов"
	};
	assertObjectContains(expected, parsed);
};

function testRUName6() {
	var parsed = new Name("Владимир Андреевич", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Владимир",
        middleName: "Андреевич"
 	};
	assertObjectContains(expected, parsed);
};
function testRUName7() {
	var parsed = new Name("Владимир Филатов", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Владимир",
        familyName: "Филатов"
	};
	assertObjectContains(expected, parsed);
};
function testRUName8() {
	var parsed = new Name("Филатов Владимир", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Владимир",
        familyName: "Филатов"
	};
	assertObjectContains(expected, parsed);
};


function testRUName10() {
	var parsed = new Name("Филатов Андреевич", {locale: 'ru-RU'});
	assertNotUndefined(parsed);
	
	var expected = {
		middleName: "Андреевич",
        givenName: "Филатов"
	};
	assertObjectContains(expected, parsed);
};

function testRUName11() {
	var parsed = new Name("Владимир Андреевич Филатовa", {locale: 'ru-RU'});
	assertNotUndefined(parsed);

	var expected = {
		givenName: "Владимир",
		middleName: "Андреевич",
		familyName: "Филатовa"
	};
	assertObjectContains(expected, parsed);
};

function testRUName12() {
	var parsed = new Name("Владимир Андреевич", {locale: 'ru-RU'});
	assertNotUndefined(parsed);

	var expected = {
		givenName: "Владимир",
		middleName: "Андреевич"   
	};
	assertObjectContains(expected, parsed);
};
function testRUName13() {
	var parsed = new Name("Филатова Филатова", {locale: 'ru-RU'});
	assertNotUndefined(parsed);

	var expected = {
		givenName: "Филатова",
		familyName: "Филатова"   
	};
	assertObjectContains(expected, parsed);
};
function testRUName14() {
	var parsed = new Name("Филатова Филатова", {locale: 'ru-RU'});
	assertNotUndefined(parsed);

	var expected = {
		givenName: "Филатова",
		familyName: "Филатова"   
	};
	assertObjectContains(expected, parsed);
};

function testRUName15() {
	var parsed = new Name("Екатерина Таттар", {locale: 'ru-RU'});
	assertNotUndefined(parsed);

	var expected = {
		givenName: "Екатерина",
		familyName: "Таттар"   
	};
	assertObjectContains(expected, parsed);
};
function testRUName16() {
	var parsed = new Name("Таттар Екатерина", {locale: 'ru-RU'});
	assertNotUndefined(parsed);

	var expected = {
		givenName: "Екатерина",
		familyName: "Таттар"   
	};
	assertObjectContains(expected, parsed);
};

function testRUName17() {
	var parsed = new Name("Валерия Твардовскиая", {locale: 'ru-RU'});
	assertNotUndefined(parsed);

	var expected = {
		givenName: "Валерия",
		familyName: "Твардовскиая"   
	};
	assertObjectContains(expected, parsed);
};

function testRUName18() {
	var parsed = new Name("Твардовскиая Валерия", {locale: 'ru-RU'});
	assertNotUndefined(parsed);

	var expected = {
		givenName: "Валерия",
		familyName: "Твардовскиая"   
	};
	assertObjectContains(expected, parsed);
};

function testRUName19() {
	var parsed = new Name("Анатолы Полищук", {locale: 'ru-RU'});
	assertNotUndefined(parsed);

	var expected = {
		givenName: "Анатолы",
		familyName: "Полищук"   
	};
	assertObjectContains(expected, parsed);
};

function testRUName20() {
	var parsed = new Name("Полищук Анатолы", {locale: 'ru-RU'});
	assertNotUndefined(parsed);

	var expected = {
		givenName: "Анатолы",
		familyName: "Полищук"   
	};
	assertObjectContains(expected, parsed);
};
function testRUParseEverything() {
	var parsed = new Name("Pavel Андреевич", {locale: 'ru-RU'});
	assertNotUndefined(parsed);

	var expected = {
		givenName: "Pavel",
		middleName: "Андреевич"
	};

	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testRUFormatSimpleNameShort() {
	var name = new Name({
		givenName: "Андрей",
		familyName: "Николаевич"
	});
	var fmt = new NameFmt({style: "short", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);

	var expected = "Андрей Николаевич";

	assertEquals(expected, formatted);
};

function testRUFormatSimpleNameMedium() {
	var name = new Name({
		givenName: "Андрей",
		familyName: "Николаевич"
	});
	var fmt = new NameFmt({style: "medium", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);

	var expected = "Андрей Николаевич";

	assertEquals(expected, formatted);
};

function testRUFormatSimpleNameLong() {
	var name = new Name({
		givenName: "Андрей",
		familyName: "Николаевич"
	});
	var fmt = new NameFmt({style: "long", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);

	var expected = "Андрей Николаевич";

	assertEquals(expected, formatted);
};

function testRUFormatSimpleNameFull() {
	var name = new Name({
		givenName: "Андрей",
		//middleName: "Микаэль",
		familyName: "Николаевич"
	});
	var fmt = new NameFmt({style: "full", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);

	var expected = "Андрей Николаевич";

	assertEquals(expected, formatted);
};

function testRUFormatComplexNameShort() {
	var name = new Name({
		prefix: "Доктор",
		givenName: "Андрей",
		familyName: "Николаевич",
	});
	var fmt = new NameFmt({style: "short", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);

	var expected = "Андрей Николаевич";

	assertEquals(expected, formatted);
};

function testRUFormatComplexNameMedium() {
	var name = new Name({
		prefix: "Доктор",
		givenName: "Андрей",
		familyName: "Николаевич"
	});
	var fmt = new NameFmt({style: "medium", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);

	var expected = "Андрей Николаевич";

	assertEquals(expected, formatted);
};

function testRUFormatComplexNameLong() {
	var name = new Name({
		prefix: "Доктор",
		givenName: "Андрей",
		familyName: "Николаевич"
	});
	var fmt = new NameFmt({style: "long", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);

	var expected = "Доктор Андрей Николаевич";

	assertEquals(expected, formatted);
};

function testRUFormatComplexNameFull() {
	var name = new Name({
		prefix: "Доктор",
		givenName: "Андрей",
		familyName: "Николаевич"
	});
	var fmt = new NameFmt({style: "full", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);

	var expected = "Доктор Андрей Николаевич";

	assertEquals(expected, formatted);
};

function testRUFormatAsianNameShort() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new NameFmt({style: "short", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);

	var expected = "地獸";

	assertEquals(expected, formatted);
};

function testRUFormatAsianNameMedium() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new NameFmt({style: "medium", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);

	var expected = "地獸";

	assertEquals(expected, formatted);
};

function testRUFormatAsianNameLong() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new NameFmt({style: "long", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);

	var expected = "小地獸";

	assertEquals(expected, formatted);
};

function testRUFormatAsianNameFull() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new NameFmt({style: "full", locale: 'ru-RU'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);

	var expected = "小地獸太太";

	assertEquals(expected, formatted);
};
