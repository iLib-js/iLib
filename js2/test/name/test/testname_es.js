/*
 * testname_es.js - test the name object in Spanish
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

var NameFmt = require("./../lib/NameFmt.js");
var Name = require("./../lib/Name.js");
function testESParseSimpleName() {
	var parsed = new Name("Joaquin Cebolla", {locale: 'es-ES'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Joaquin",
		familyName: "Cebolla"
	};
	
	assertObjectContains(expected, parsed);
};

function testESParseTripleName() {
	var parsed = new Name("Joaquin Zaragoza Cebolla", {locale: 'es-ES'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Joaquin",
		familyName: "Zaragoza Cebolla"
	};
	
	assertObjectContains(expected, parsed);
};

function testESParseAdjunctNames() {
	var parsed = new Name("Mario de Sevilla", {locale: 'es-ES'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Mario",
		familyName: "de Sevilla"
	};
	
	assertObjectContains(expected, parsed);
};

function testESParseMultiAdjunctNames() {
	var parsed = new Name("Mario de las Pulgas", {locale: 'es-ES'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Mario",
		familyName: "de las Pulgas"
	};
	
	assertObjectContains(expected, parsed);
};

function testESParseHypenatedName() {
	var parsed = new Name("Joaquin Johnson-Cebolla", {locale: 'es-ES'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Joaquin",
		familyName: "Johnson-Cebolla"
	};
	
	assertObjectContains(expected, parsed);
};

function testESParseQuadrupleName() {
	var parsed = new Name("Joaquin Michael de los Cruzes Cebolla", {locale: 'es-ES'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Joaquin",
		middleName: "Michael",
		familyName: "de los Cruzes Cebolla"
	};
	
	assertObjectContains(expected, parsed);
};

function testESParseMultiMultiFamily() {
	var parsed = new Name("Joaquin Michael de los Cruzes de Namur", {locale: 'es-ES'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Joaquin",
		middleName: "Michael",
		familyName: "de los Cruzes de Namur"
	};
	
	assertObjectContains(expected, parsed);
};
function testESParseTitle() {
	var parsed = new Name("Dr. Joaquin Cebolla", {locale: 'es-ES'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Dr.",
		givenName: "Joaquin",
		familyName: "Cebolla"
	};
	
	assertObjectContains(expected, parsed);
};

function testESParseHonorific() {
	var parsed = new Name("Doña Julia Maria Lopez Ortiz", {locale: 'es-ES'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Doña",
		givenName: "Julia",
		middleName: "Maria",
		familyName: "Lopez Ortiz"
	};
	
	assertObjectContains(expected, parsed);
};

function testESParseEverything() {
	var parsed = new Name("Doña Julia Maria Consuela de las Piñas Ortiz III", {locale: 'es-ES'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Doña",
		givenName: "Julia",
		middleName: "Maria Consuela",
		familyName: "de las Piñas Ortiz",
		suffix: "III"
	};
	
	assertObjectContains(expected, parsed);
};

function testESParseConjunction1() {
	var parsed = new Name("Rodrigo y Gabriella", {locale: 'es-ES'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Rodrigo y Gabriella"
	};
	
	assertObjectContains(expected, parsed);
};

function testESParseConjunction2() {
	var parsed = new Name("Rodrigo y Gabriella Cortez", {locale: 'es-ES'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Rodrigo y Gabriella",
		familyName: "Cortez"
	};
	
	assertObjectContains(expected, parsed);
};

function testESParseConjunction3() {
	var parsed = new Name("Rodrigo y Gabriella Cortez Colón", {locale: 'es-ES'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Rodrigo y Gabriella",
		familyName: "Cortez Colón"
	};
	
	assertObjectContains(expected, parsed);
};

function testESParseConjunction4() {
	var parsed = new Name("Miguel, Rodrigo, y Gabriella Cortez Colón", {locale: 'es-ES'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Miguel, Rodrigo, y Gabriella",
		familyName: "Cortez Colón"
	};
	
	assertObjectContains(expected, parsed);
};

function testESParseFamily() {
	var parsed = new Name("Los Hernandez", {locale: 'es-ES'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Los",
		familyName: "Hernandez"
	};
	
	assertObjectContains(expected, parsed);
};

function testESParseCompoundHonorific() {
	var parsed = new Name("Sr. y Sra. Hernandez", {locale: 'es-ES'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Sr. y Sra.",
		familyName: "Hernandez"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testESFormatSimpleNameShort() {
	var name = new Name({
		givenName: "Joaquin",
		middleName: "Michael",
		familyName: "Cebolla"
	});
	var fmt = new NameFmt({style: "short", locale: 'es-ES'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Joaquin Cebolla";
	
	assertEquals(expected, formatted);
};

function testESFormatSimpleNameMedium() {
	var name = new Name({
		givenName: "Joaquin",
		middleName: "Michael",
		familyName: "Cebolla"
	});
	var fmt = new NameFmt({style: "medium", locale: 'es-ES'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Joaquin Michael Cebolla";
	
	assertEquals(expected, formatted);
};

function testESFormatSimpleNameLong() {
	var name = new Name({
		givenName: "Joaquin",
		middleName: "Michael",
		familyName: "Cebolla"
	});
	var fmt = new NameFmt({style: "long", locale: 'es-ES'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Joaquin Michael Cebolla";
	
	assertEquals(expected, formatted);
};

function testESFormatSimpleNameFull() {
	var name = new Name({
		givenName: "Joaquin",
		middleName: "Michael",
		familyName: "Cebolla"
	});
	var fmt = new NameFmt({style: "full", locale: 'es-ES'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Joaquin Michael Cebolla";
	
	assertEquals(expected, formatted);
};

function testESFormatComplexNameShort() {
	var name = new Name({
		prefix: "Doña",
		givenName: "Julia",
		middleName: "Maria Consuela",
		familyName: "de las Piñas Ortiz",
		suffix: "III"
	});
	var fmt = new NameFmt({style: "short", locale: 'es-ES'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Julia de las Piñas";
	
	assertEquals(expected, formatted);
};

function testESFormatComplexNameMedium() {
	var name = new Name({
		prefix: "Doña",
		givenName: "Julia",
		middleName: "Maria Consuela",
		familyName: "de las Piñas Ortiz",
		suffix: "III"
	});
	var fmt = new NameFmt({style: "medium", locale: 'es-ES'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Julia Maria Consuela de las Piñas";
	
	assertEquals(expected, formatted);
};

function testESFormatComplexNameLong() {
	var name = new Name({
		prefix: "Doña",
		givenName: "Julia",
		middleName: "Maria Consuela",
		familyName: "de las Piñas Ortiz",
		suffix: "III"
	});
	var fmt = new NameFmt({style: "long", locale: 'es-ES'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Doña Julia Maria Consuela de las Piñas Ortiz";
	
	assertEquals(expected, formatted);
};

function testESFormatComplexNameFull() {
	var name = new Name({
		prefix: "Doña",
		givenName: "Julia",
		middleName: "Maria Consuela",
		familyName: "de las Piñas Ortiz",
		suffix: "III"
	});
	var fmt = new NameFmt({style: "full", locale: 'es-ES'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Doña Julia Maria Consuela de las Piñas Ortiz III";
	
	assertEquals(expected, formatted);
};

function testESFormatAsianNameShort() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new NameFmt({style: "short", locale: 'es-MX'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testESFormatAsianNameMedium() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new NameFmt({style: "medium", locale: 'es-MX'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testESFormatAsianNameLong() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new NameFmt({style: "long", locale: 'es-MX'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸";
	
	assertEquals(expected, formatted);
};

function testESFormatAsianNameFull() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new NameFmt({style: "full", locale: 'es-MX'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};
