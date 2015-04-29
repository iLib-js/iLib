/*
 * testname_fr.js - test the name object in French
 * 
 * Copyright © 2013-2015, JEDLSoft
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

var NameFmt = require("./../lib/NameFmt.js");
var Name = require("./../lib/Name.js");
function testFRParseSimpleName() {
	var parsed = new Name("Isabelle Antena", {locale: 'fr-FR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Isabelle",
		familyName: "Antena"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseTripleName() {
	var parsed = new Name("Jean-Louis Aubert", {locale: 'fr-FR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jean-Louis",
		////middleName: "Michael",
		familyName: "Aubert"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseAdjunctNames() {
	var parsed = new Name("Jean-Marie Le Pen", {locale: 'fr-FR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jean-Marie",
		////middleName: "Klaus",
		familyName: "Le Pen"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseSingleName() {
	var parsed = new Name("Jean-Louis", {locale: 'fr-FR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jean-Louis",
	};
	
	assertObjectContains(expected, parsed);
};

/*function testFRParseSingleNameWithAdjunct() {
	var parsed = new Name("von Beethoven", {locale: 'fr-FR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "von",
		familyName: "Beethoven"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseSingleNameWithPrefixAndAdjunct() {
	var parsed = new Name("Monsieur von Beethoven", {locale: 'fr-FR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Monsieur",
		familyName: "von Beethoven"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseMultiAdjunctNames() {
	var parsed = new Name("Ludwig von frn Wiesthal", {locale: 'fr-FR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Ludwig",
		familyName: "von frn Wiesthal"
	};
	
	assertObjectContains(expected, parsed);
};*/

function testFRParseHypenatedName() {
	var parsed = new Name("Jean-Marie Le Pen", {locale: 'fr-FR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jean-Marie",
		//middleName: "Michael",
		familyName: "Le Pen"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseQuadrupleName() {
	var parsed = new Name("Emil Michael David Vallefois", {locale: 'fr-FR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Emil",
		middleName: "Michael David",
		familyName: "Vallefois"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseTitle() {
	var parsed = new Name("Monsieur Dr. Jean-Louis Aubert", {locale: 'fr-FR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Monsieur Dr.",
		givenName: "Jean-Louis",
		familyName: "Aubert"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseTitleWithFamilyOnly() {
	var parsed = new Name("Monsieur Jean-Louis", {locale: 'fr-FR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Monsieur",
		familyName: "Jean-Louis"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseTitleWithFamilyOnlyAndAdjunct() {
	var parsed = new Name("Monsieur Aubert", {locale: 'fr-FR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Monsieur",
		familyName: "Aubert"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseHonorific() {
	var parsed = new Name("Madame Isabelle Antena", {locale: 'fr-FR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Madame",
		givenName: "Isabelle",
		familyName: "Antena"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseEverything() {
	var parsed = new Name("Monsieur Président Jean-Louis Aubert", {locale: 'fr-FR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Monsieur Président",
		givenName: "Jean-Louis",
		//middleName: "Michael Jürgen",
		familyName: "Aubert",
		//suffix: "III"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseFamilyWithAuxillary() {
	var parsed = new Name("George Le Pen", {locale: 'fr-FR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "George",
		familyName: "Le Pen"
	};
	
	assertObjectContains(expected, parsed);
};

function testFRParseCompoundHonorific() {
	var parsed = new Name("Monsieur et Madame Maier", {locale: 'fr-FR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Monsieur et Madame",
		familyName: "Maier"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testFRFormatSimpleNameShort() {
	var name = new Name({
		givenName: "Emil",
		//middleName: "Michael",
		familyName: "Schmidt"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Emil Schmidt";
	
	assertEquals(expected, formatted);
};

function testFRFormatSimpleNameMedium() {
	var name = new Name({
		givenName: "Emil",
		middleName: "Michael",
		familyName: "Schmidt"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Emil Michael Schmidt";
	
	assertEquals(expected, formatted);
};

function testFRFormatSimpleNameLong() {
	var name = new Name({
		givenName: "Emil",
		middleName: "Michael",
		familyName: "Schmidt",
		suffix: "asdf"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Emil Michael Schmidt";
	
	assertEquals(expected, formatted);
};

function testFRFormatSimpleNameFull() {
	var name = new Name({
		prefix: "Monsieur Docteur",
		givenName: "Emil",
		middleName: "Michael",
		familyName: "Schmidt",
		suffix: " dem"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Monsieur Docteur Emil Michael Schmidt dem";
	
	assertEquals(expected, formatted);
};

function testFRFormatComplexNameShort() {
	var name = new Name({
		prefix: "Monsieur Docteur",
		givenName: "Emil",
		middleName: "Michael Francois",
		familyName: "de Rigeur",
		suffix: "III"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Emil de Rigeur";
	
	assertEquals(expected, formatted);
};

function testFRFormatComplexNameMedium() {
	var name = new Name({
		prefix: "Monsieur Docteur",
		givenName: "Emil",
		middleName: "Michael Francois",
		familyName: "de Rigeur",
		suffix: "III"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Emil Michael Francois de Rigeur";
	
	assertEquals(expected, formatted);
};

function testFRFormatComplexNameLong() {
	var name = new Name({
		prefix: "Monsieur Docteur",
		givenName: "Emil",
		middleName: "Michael Francois",
		familyName: "de Rigeur",
		suffix: "III"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Monsieur Docteur Emil Michael Francois de Rigeur III";
	
	assertEquals(expected, formatted);
};

function testFRFormatAsianNameShort() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFRFormatAsianNameMedium() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFRFormatAsianNameLong() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'fr-FR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};
