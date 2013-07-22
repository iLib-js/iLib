/*
 * testname_en.js - test the name object in Japanese
 * 
 * Copyright © 2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICJASE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testJAJPParseSimpleName() {
	var parsed = new ilib.Name("Takuya Kimura", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Takuya",
		familyName: "Kimura"
	};
	
	assertObjectContains(expected, parsed);
};

function testJAJPParseTripleName() {
	var parsed = new ilib.Name("Takuya Kimura", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Takuya"
		familyName: "Kimura"
	};
	
	assertObjectContains(expected, parsed);
};

function testJAJPParseHypenatedName() {
	var parsed = new ilib.Name("Kojima Denki-san", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Kojima",
		familyName: "Denki-san"
	};
	
	assertObjectContains(expected, parsed);
};

/*function testJAJPParseQuadrupleName() {
	var parsed = new ilib.Name("John Michael Kevin Smith", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "John",
		middleName: "Michael Kevin",
		familyName: "Smith"
	};
	
	assertObjectContains(expected, parsed);
};*/

/*function testJAJPParseTitle() {
	var parsed = new ilib.Name("Dr. John Smith", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Dr.",
		givenName: "John",
		familyName: "Smith"
	};
	
	assertObjectContains(expected, parsed);
};

function testJAJPParseHonorific() {
	var parsed = new ilib.Name("Mr. John Smith", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Mr.",
		givenName: "John",
		familyName: "Smith"
	};
	
	assertObjectContains(expected, parsed);
};

function testJAJPParseSuffix() {
	var parsed = new ilib.Name("John Smith Jr. Esq.", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "John",
		familyName: "Smith",
		suffix: "Jr. Esq."
	};
	
	assertObjectContains(expected, parsed);
};

// for DFISH-25146
/*function testJAJPParseSuffixWithComma() {
	var parsed = new ilib.Name("John Smith, PhD", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "John",
		familyName: "Smith",
		suffix: ", PhD"
	};
	
	assertObjectContains(expected, parsed);
};

function testJAJPParseEuroMultiName() {
	var parsed = new ilib.Name("Pieter van der Meulen", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Pieter",
		familyName: "van der Meulen"
	};
	
	assertObjectContains(expected, parsed);
};

function testJABenStrong() {
	var parsed = new ilib.Name("Ben Strong", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Ben",
		familyName: "Strong"
	};
	
	assertObjectContains(expected, parsed);
};
 
function testJAJPParseEverything() {
	var parsed = new ilib.Name("The Right Honorable Governor General Dr. John Michael Kevin Smith III, DDM", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "The Right Honorable Governor General Dr.",
		givenName: "John",
		middleName: "Michael Kevin",
		familyName: "Smith",
		suffix: "III, DDM"
	};
	
	assertObjectContains(expected, parsed);
};*/

/*function testJASingleName() {
	var parsed = new ilib.Name("Sting", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Sting"
	};
	
	assertObjectContains(expected, parsed);
};

function testJALastNames() {
	var parsed = new ilib.Name("Dr. Roberts", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Dr.",
		familyName: "Roberts"
	};
	
	assertObjectContains(expected, parsed);
};

function testJACompoundNames() {
	var parsed = new ilib.Name("Mr. and Mrs. Smith", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Mr. and Mrs.",
		familyName: "Smith"
	};
	
	assertObjectContains(expected, parsed);
};

function testJACompoundFamily() {
	var parsed = new ilib.Name("John and Mary Smith", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "John and Mary",
		familyName: "Smith"
	};
	
	assertObjectContains(expected, parsed);
};

function testJAByFamily() {
	var parsed = new ilib.Name("The Robertsons", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "The",
		familyName: "Robertsons"
	};
	
	assertObjectContains(expected, parsed);
};

function testJAAuxDE() {
	var parsed = new ilib.Name("Herbert von Karajan", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Herbert",
		familyName: "von Karajan"
	};
	
	assertObjectContains(expected, parsed);
};

function testJAAuxNL() {
	var parsed = new ilib.Name("Jan van der Heiden", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jan",
		familyName: "van der Heiden"
	};
	
	assertObjectContains(expected, parsed);
};

function testJAAuxFR() {
	var parsed = new ilib.Name("Serges du Maurier", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Serges",
		familyName: "du Maurier"
	};
	
	assertObjectContains(expected, parsed);
};

function testJAAuxIT() {
	var parsed = new ilib.Name("Leonardo di Caprio", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Leonardo",
		familyName: "di Caprio"
	};
	
	assertObjectContains(expected, parsed);
};

function testJAAuxES() {
	var parsed = new ilib.Name("Jorge de las Cruces", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jorge",
		familyName: "de las Cruces"
	};
	
	assertObjectContains(expected, parsed);
};

function testJAGibberish() {
	var parsed = new ilib.Name("Géê ëī a d øö", {locale: 'ja-JP'});
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

/*function testJAFormatSimpleNameShort() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "John",
		middleName: "Michael",
		familyName: "Smith",
		suffix: ", PhD"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'ja-JP'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "John Smith";
	
	assertEquals(expected, formatted);
};

function testJAFormatSimpleNameMedium() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "John",
		middleName: "Michael",
		familyName: "Smith",
		suffix: ", PhD"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'ja-JP'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "John Michael Smith";
	
	assertEquals(expected, formatted);
};

function testJAFormatSimpleNameLong() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "John",
		middleName: "Michael",
		familyName: "Smith",
		suffix: ", PhD"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'ja-JP'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. John Michael Smith";
	
	assertEquals(expected, formatted);
};

function testJAFormatSimpleNameFull() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "John",
		middleName: "Michael",
		familyName: "Smith",
		suffix: ", PhD"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'ja-JP'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. John Michael Smith, PhD";
	
	assertEquals(expected, formatted);
};

function testJAFormatComplexNameShort() {
	var name = new ilib.Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Michael Kevin",
		familyName: "von Schmitt",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'ja-JP'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "John von Schmitt";
	
	assertEquals(expected, formatted);
};

function testJAFormatComplexNameMedium() {
	var name = new ilib.Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Michael Kevin",
		familyName: "von Schmitt",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'ja-JP'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "John Michael Kevin von Schmitt";
	
	assertEquals(expected, formatted);
};

function testJAFormatComplexNameLong() {
	var name = new ilib.Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Michael Kevin",
		familyName: "von Schmitt",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'ja-JP'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Mr. John Michael Kevin von Schmitt";
	
	assertEquals(expected, formatted);
};

function testJAFormatComplexNameFull() {
	var name = new ilib.Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Michael Kevin",
		familyName: "von Schmitt",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'ja-JP'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Mr. John Michael Kevin von Schmitt III";
	
	assertEquals(expected, formatted);
};

function testJAFormatCommasInSuffix() {
	var name = new ilib.Name({
		prefix: "Mr.",
		givenName: "John",
		middleName: "Michael Kevin",
		familyName: "von Schmitt",
		suffix: ", III, PhD"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'ja-JP'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Mr. John Michael Kevin von Schmitt, III, PhD";
	
	assertEquals(expected, formatted);
};*/

function testJAFormatAsianNameShort() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'ja-JP'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testJAFormatAsianNameMedium() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'ja-JP'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testJAFormatAsianNameLong() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'ja-JP'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸";
	
	assertEquals(expected, formatted);
};

function testJAFormatAsianNameFull() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'ja-JP'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};

function testJAFormatWithNulls() {
	var name = new ilib.Name({
		prefix: null,
		givenName: "John",
		middleName: null,
		familyName: "Doe",
		suffix: null
	});
	
	var fmt = new ilib.NameFmt({style: "long", locale: 'ja-JP'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "John Doe";
	
	assertEquals(expected, formatted);
};
