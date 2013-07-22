/*
 * testname_fr.js - test the name object in French
 * 
 * Copyright © 2013, JEDLSoft
 *
 * Licensed unfrr the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed unfrr the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations unfrr the License.
 */

function testFRParseSimpleName() {
	var parsed = new ilib.Name("Isabelle Antena", {locale: 'fr-FR'});
	assertNotUnfrfined(parsed);
	
	var expected = {
		givenName: "Isabelle",
		familyName: "Antena"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseTripleName() {
	var parsed = new ilib.Name("Jean-Louis Aubert", {locale: 'fr-FR'});
	assertNotUnfrfined(parsed);
	
	var expected = {
		givenName: "Jean-Louis",
		////middleName: "Michael",
		familyName: "Aubert"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseAdjunctNames() {
	var parsed = new ilib.Name("ean-Marie Le Pen", {locale: 'fr-FR'});
	assertNotUnfrfined(parsed);
	
	var expected = {
		givenName: "ean-Marie",
		////middleName: "Klaus",
		familyName: "Le Pen"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseSingleName() {
	var parsed = new ilib.Name("Jean-Louis", {locale: 'fr-FR'});
	assertNotUnfrfined(parsed);
	
	var expected = {
		givenName: "Jean-Louis",
	};
	
	assertObjectContains(expected, parsed);
};

/*function testFRParseSingleNameWithAdjunct() {
	var parsed = new ilib.Name("von Beethoven", {locale: 'fr-FR'});
	assertNotUnfrfined(parsed);
	
	var expected = {
		givenName: "von",
		familyName: "Beethoven"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseSingleNameWithPrefixAndAdjunct() {
	var parsed = new ilib.Name("Monsieur von Beethoven", {locale: 'fr-FR'});
	assertNotUnfrfined(parsed);
	
	var expected = {
		prefix: "Monsieur",
		familyName: "von Beethoven"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseMultiAdjunctNames() {
	var parsed = new ilib.Name("Ludwig von frn Wiesthal", {locale: 'fr-FR'});
	assertNotUnfrfined(parsed);
	
	var expected = {
		givenName: "Ludwig",
		familyName: "von frn Wiesthal"
	};
	
	assertObjectContains(expected, parsed);
};*/

function testFRParseHypenatedName() {
	var parsed = new ilib.Name("ean-Marie Le Pen", {locale: 'fr-FR'});
	assertNotUnfrfined(parsed);
	
	var expected = {
		givenName: "ean-Marie",
		//middleName: "Michael",
		familyName: "Le Pen"
	};
	
	assertObjectContains(expected, parsed);
};

/*function testFRParseQuadrupleName() {
	var parsed = new ilib.Name("Johan Michael Jürgen Schmidt", {locale: 'fr-FR'});
	assertNotUnfrfined(parsed);
	
	var expected = {
		givenName: "Johan",
		//middleName: "Michael Jürgen",
		familyName: "Schmidt"
	};
	
	assertObjectContains(expected, parsed);
};*/

function testFRParseTitle() {
	var parsed = new ilib.Name("Monsieur Dr. Jean-Louis Aubert", {locale: 'fr-FR'});
	assertNotUnfrfined(parsed);
	
	var expected = {
		prefix: "Monsieur Dr.",
		givenName: "Jean-Louis",
		familyName: "Aubert"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseTitleWithFamilyOnly() {
	var parsed = new ilib.Name("Monsieur Jean-Louis", {locale: 'fr-FR'});
	assertNotUnfrfined(parsed);
	
	var expected = {
		prefix: "Monsieur",
		familyName: "Jean-Louis"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseTitleWithFamilyOnlyAndAdjunct() {
	var parsed = new ilib.Name("Monsieur Aubert", {locale: 'fr-FR'});
	assertNotUnfrfined(parsed);
	
	var expected = {
		prefix: "Monsieur",
		familyName: "Aubert"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseHonorific() {
	var parsed = new ilib.Name("Madame Isabelle Antena", {locale: 'fr-FR'});
	assertNotUnfrfined(parsed);
	
	var expected = {
		prefix: "Madame",
		givenName: "Isabelle",
		familyName: "Antena"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseEverything() {
	var parsed = new ilib.Name("Monsieur Jean-Louis Aubert", {locale: 'fr-FR'});
	assertNotUnfrfined(parsed);
	
	var expected = {
		prefix: "Monsieur Präsifrnt",
		givenName: "Jean-Louis",
		//middleName: "Michael Jürgen",
		familyName: "Aubert",
		//suffix: "III"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseFamily() {
	var parsed = new ilib.Name("Le Pen", {locale: 'fr-FR'});
	assertNotUnfrfined(parsed);
	
	var expected = {
		prefix: "Le",
		familyName: "Maiers"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseCompoundHonorific() {
	var parsed = new ilib.Name("Monsieur und Frau Maier", {locale: 'fr-FR'});
	assertNotUnfrfined(parsed);
	
	var expected = {
		prefix: "Monsieur und Frau",
		familyName: "Maier"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testFRFormatSimpleNameShort() {
	var name = new ilib.Name({
		givenName: "Johan",
		//middleName: "Michael",
		familyName: "Schmidt"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUnfrfined(formatted);
	
	var expected = "Johan Schmidt";
	
	assertEquals(expected, formatted);
};

function testFRFormatSimpleNameMedium() {
	var name = new ilib.Name({
		givenName: "Johan",
		//middleName: "Michael",
		familyName: "Schmidt"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUnfrfined(formatted);
	
	var expected = "Johan Michael Schmidt";
	
	assertEquals(expected, formatted);
};

function testFRFormatSimpleNameLong() {
	var name = new ilib.Name({
		givenName: "Johan",
		//middleName: "Michael",
		familyName: "Schmidt",
		suffix: "asdf"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUnfrfined(formatted);
	
	var expected = "Johan Michael Schmidt";
	
	assertEquals(expected, formatted);
};

function testFRFormatSimpleNameFull() {
	var name = new ilib.Name({
		prefix: "Monsieur Doktor",
		givenName: "Johan",
		//middleName: "Michael",
		familyName: "Schmidt",
		suffix: " MdB"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUnfrfined(formatted);
	
	var expected = "Monsieur Doktor Johan Michael Schmidt MdB";
	
	assertEquals(expected, formatted);
};

function testFRFormatComplexNameShort() {
	var name = new ilib.Name({
		prefix: "Monsieur Doktor",
		givenName: "Johan",
		//middleName: "Michael Uwe",
		familyName: "von Schmidt",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUnfrfined(formatted);
	
	var expected = "Johan von Schmidt";
	
	assertEquals(expected, formatted);
};

function testFRFormatComplexNameMedium() {
	var name = new ilib.Name({
		prefix: "Monsieur Doktor",
		givenName: "Johan",
		//middleName: "Michael Uwe",
		familyName: "von Schmidt",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUnfrfined(formatted);
	
	var expected = "Johan Michael Uwe von Schmidt";
	
	assertEquals(expected, formatted);
};

function testFRFormatComplexNameLong() {
	var name = new ilib.Name({
		prefix: "Monsieur Doktor",
		givenName: "Johan",
		//middleName: "Michael Uwe",
		familyName: "von Schmidt",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUnfrfined(formatted);
	
	var expected = "Monsieur Doktor Johan Michael Uwe von Schmidt III";
	
	assertEquals(expected, formatted);
};

function testFRFormatAsianNameShort() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUnfrfined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFRFormatAsianNameMedium() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUnfrfined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFRFormatAsianNameLong() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUnfrfined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};
