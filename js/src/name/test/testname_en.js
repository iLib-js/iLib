/*
 * testname_en.js - test the name object in English
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

function testENUSParseSimpleName() {
	var parsed = new ilib.Name("John Smith", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "John",
		familyName: "Smith"
	};
	
	assertObjectContains(expected, parsed);
};

function testENUSParseTripleName() {
	var parsed = new ilib.Name("John Michael Smith", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "John",
		middleName: "Michael",
		familyName: "Smith"
	};
	
	assertObjectContains(expected, parsed);
};

function testENUSParseHypenatedName() {
	var parsed = new ilib.Name("John Michael Taylor-Smith", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "John",
		middleName: "Michael",
		familyName: "Taylor-Smith"
	};
	
	assertObjectContains(expected, parsed);
};

function testENUSParseQuadrupleName() {
	var parsed = new ilib.Name("John Michael Kevin Smith", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "John",
		middleName: "Michael Kevin",
		familyName: "Smith"
	};
	
	assertObjectContains(expected, parsed);
};

function testENUSParseTitle() {
	var parsed = new ilib.Name("Dr. John Smith", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Dr.",
		givenName: "John",
		familyName: "Smith"
	};
	
	assertObjectContains(expected, parsed);
};

function testENUSParseHonorific() {
	var parsed = new ilib.Name("Mr. John Smith", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Mr.",
		givenName: "John",
		familyName: "Smith"
	};
	
	assertObjectContains(expected, parsed);
};

function testENUSParseSuffix() {
	var parsed = new ilib.Name("John Smith Jr. Esq.", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "John",
		familyName: "Smith",
		suffix: "Jr. Esq."
	};
	
	assertObjectContains(expected, parsed);
};

// for DFISH-25146
function testENUSParseSuffixWithComma() {
	var parsed = new ilib.Name("John Smith, PhD", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "John",
		familyName: "Smith",
		suffix: ", PhD"
	};
	
	assertObjectContains(expected, parsed);
};

function testENUSParseEuroMultiName() {
	var parsed = new ilib.Name("Pieter van der Meulen", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Pieter",
		familyName: "van der Meulen"
	};
	
	assertObjectContains(expected, parsed);
};

function testENBenStrong() {
	var parsed = new ilib.Name("Ben Strong", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Ben",
		familyName: "Strong"
	};
	
	assertObjectContains(expected, parsed);
};
 
function testENUSParseEverything() {
	var parsed = new ilib.Name("The Right Honorable Governor General Dr. John Michael Kevin Smith III, DDM", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "The Right Honorable Governor General Dr.",
		givenName: "John",
		middleName: "Michael Kevin",
		familyName: "Smith",
		suffix: "III, DDM"
	};
	
	assertObjectContains(expected, parsed);
};

function testENSingleName() {
	var parsed = new ilib.Name("Sting", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Sting"
	};
	
	assertObjectContains(expected, parsed);
};

function testENLastNames() {
	var parsed = new ilib.Name("Dr. Roberts", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Dr.",
		familyName: "Roberts"
	};
	
	assertObjectContains(expected, parsed);
};

function testENCompoundNames() {
	var parsed = new ilib.Name("Mr. and Mrs. Smith", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Mr. and Mrs.",
		familyName: "Smith"
	};
	
	assertObjectContains(expected, parsed);
};

function testENCompoundFamily() {
	var parsed = new ilib.Name("John and Mary Smith", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "John and Mary",
		familyName: "Smith"
	};
	
	assertObjectContains(expected, parsed);
};

function testENByFamily() {
	var parsed = new ilib.Name("The Robertsons", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "The",
		familyName: "Robertsons"
	};
	
	assertObjectContains(expected, parsed);
};

function testENAuxDE() {
	var parsed = new ilib.Name("Herbert von Karajan", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Herbert",
		familyName: "von Karajan"
	};
	
	assertObjectContains(expected, parsed);
};

function testENAuxNL() {
	var parsed = new ilib.Name("Jan van der Heiden", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jan",
		familyName: "van der Heiden"
	};
	
	assertObjectContains(expected, parsed);
};

function testENAuxFR() {
	var parsed = new ilib.Name("Serges du Maurier", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Serges",
		familyName: "du Maurier"
	};
	
	assertObjectContains(expected, parsed);
};

function testENAuxIT() {
	var parsed = new ilib.Name("Leonardo di Caprio", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Leonardo",
		familyName: "di Caprio"
	};
	
	assertObjectContains(expected, parsed);
};

function testENAuxES() {
	var parsed = new ilib.Name("Jorge de las Cruces", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jorge",
		familyName: "de las Cruces"
	};
	
	assertObjectContains(expected, parsed);
};

function testENGibberish() {
	var parsed = new ilib.Name("Géê ëī a d øö", {locale: 'en-US'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Géê",
		middleName: "ëī a d",
		familyName: "øö"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format tests
 */

function testENFormatSimpleNameShort() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "John",
		middleName: "Michael",
		familyName: "Smith",
		suffix: ", PhD"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'en-US'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "John Smith";
	
	assertEquals(expected, formatted);
};

function testENFormatSimpleNameMedium() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "John",
		middleName: "Michael",
		familyName: "Smith",
		suffix: ", PhD"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'en-US'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "John Michael Smith";
	
	assertEquals(expected, formatted);
};

function testENFormatSimpleNameLong() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "John",
		middleName: "Michael",
		familyName: "Smith",
		suffix: ", PhD"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'en-US'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. John Michael Smith";
	
	assertEquals(expected, formatted);
};

function testENFormatSimpleNameFull() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "John",
		middleName: "Michael",
		familyName: "Smith",
		suffix: ", PhD"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'en-US'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. John Michael Smith, PhD";
	
	assertEquals(expected, formatted);
};

function testENFormatComplexNameShort() {
	var name = new ilib.Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Michael Kevin",
		familyName: "von Schmitt",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'en-US'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "John von Schmitt";
	
	assertEquals(expected, formatted);
};

function testENFormatComplexNameMedium() {
	var name = new ilib.Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Michael Kevin",
		familyName: "von Schmitt",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'en-US'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "John Michael Kevin von Schmitt";
	
	assertEquals(expected, formatted);
};

function testENFormatComplexNameLong() {
	var name = new ilib.Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Michael Kevin",
		familyName: "von Schmitt",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'en-US'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Mr. John Michael Kevin von Schmitt";
	
	assertEquals(expected, formatted);
};

function testENFormatComplexNameFull() {
	var name = new ilib.Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Michael Kevin",
		familyName: "von Schmitt",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'en-US'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Mr. John Michael Kevin von Schmitt III";
	
	assertEquals(expected, formatted);
};

function testENFormatCommasInSuffix() {
	var name = new ilib.Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Michael Kevin",
		familyName: "von Schmitt",
		suffix: ", III, PhD"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'en-US'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Mr. John Michael Kevin von Schmitt, III, PhD";
	
	assertEquals(expected, formatted);
};

function testENFormatAsianNameShort() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'en-US'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testENFormatAsianNameMedium() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'en-US'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testENFormatAsianNameLong() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'en-US'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸";
	
	assertEquals(expected, formatted);
};

function testENFormatAsianNameFull() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'en-US'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};

function testENFormatWithNulls() {
	var name = new ilib.Name({
		prefix: null,
		givenName: "John",
		middleName: null,
		familyName: "Doe",
		suffix: null
	});
	
	var fmt = new ilib.NameFmt({style: "long", locale: 'en-US'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "John Doe";
	
	assertEquals(expected, formatted);
};
