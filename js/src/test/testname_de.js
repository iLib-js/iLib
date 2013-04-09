/*
 * testname_de.js - test the name object in German
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

function testDEParseSimpleName() {
	var parsed = new ilib.Name("Johan Schmidt", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Johan",
		familyName: "Schmidt"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseTripleName() {
	var parsed = new ilib.Name("Johan Michael Schmidt", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Johan",
		middleName: "Michael",
		familyName: "Schmidt"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseAdjunctNames() {
	var parsed = new ilib.Name("Ludwig Klaus von Beethoven", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Ludwig",
		middleName: "Klaus",
		familyName: "von Beethoven"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseSingleName() {
	var parsed = new ilib.Name("Ludwig", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Ludwig",
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseSingleNameWithAdjunct() {
	var parsed = new ilib.Name("von Beethoven", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "von",
		familyName: "Beethoven"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseSingleNameWithPrefixAndAdjunct() {
	var parsed = new ilib.Name("Herr von Beethoven", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Herr",
		familyName: "von Beethoven"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseMultiAdjunctNames() {
	var parsed = new ilib.Name("Ludwig von den Wiesthal", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Ludwig",
		familyName: "von den Wiesthal"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseHypenatedName() {
	var parsed = new ilib.Name("Johan Michael Bergische-Schmidt", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Johan",
		middleName: "Michael",
		familyName: "Bergische-Schmidt"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseQuadrupleName() {
	var parsed = new ilib.Name("Johan Michael Jürgen Schmidt", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Johan",
		middleName: "Michael Jürgen",
		familyName: "Schmidt"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseTitle() {
	var parsed = new ilib.Name("Herr Dr. Johan Schmidt", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Herr Dr.",
		givenName: "Johan",
		familyName: "Schmidt"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseTitleWithFamilyOnly() {
	var parsed = new ilib.Name("Herr Schmidt", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Herr",
		familyName: "Schmidt"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseTitleWithFamilyOnlyAndAdjunct() {
	var parsed = new ilib.Name("Herr von Schmidt", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Herr",
		familyName: "von Schmidt"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseHonorific() {
	var parsed = new ilib.Name("Fr. Julia Maier", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Fr.",
		givenName: "Julia",
		familyName: "Maier"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseEverything() {
	var parsed = new ilib.Name("Herr Präsident Johan Michael Jürgen Schmidt III", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Herr Präsident",
		givenName: "Johan",
		middleName: "Michael Jürgen",
		familyName: "Schmidt",
		suffix: "III"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseFamily() {
	var parsed = new ilib.Name("Die Maiers", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Die",
		familyName: "Maiers"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseCompoundHonorific() {
	var parsed = new ilib.Name("Herr und Frau Maier", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Herr und Frau",
		familyName: "Maier"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testDEFormatSimpleNameShort() {
	var name = new ilib.Name({
		givenName: "Johan",
		middleName: "Michael",
		familyName: "Schmidt"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'de-DE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Johan Schmidt";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameMedium() {
	var name = new ilib.Name({
		givenName: "Johan",
		middleName: "Michael",
		familyName: "Schmidt"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'de-DE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Johan Michael Schmidt";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameLong() {
	var name = new ilib.Name({
		givenName: "Johan",
		middleName: "Michael",
		familyName: "Schmidt",
		suffix: "asdf"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'de-DE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Johan Michael Schmidt";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameFull() {
	var name = new ilib.Name({
		prefix: "Herr Doktor",
		givenName: "Johan",
		middleName: "Michael",
		familyName: "Schmidt",
		suffix: " MdB"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'de-DE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Herr Doktor Johan Michael Schmidt MdB";
	
	assertEquals(expected, formatted);
};

function testDEFormatComplexNameShort() {
	var name = new ilib.Name({
		prefix: "Herr Doktor",
		givenName: "Johan",
		middleName: "Michael Uwe",
		familyName: "von Schmidt",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'de-DE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Johan von Schmidt";
	
	assertEquals(expected, formatted);
};

function testDEFormatComplexNameMedium() {
	var name = new ilib.Name({
		prefix: "Herr Doktor",
		givenName: "Johan",
		middleName: "Michael Uwe",
		familyName: "von Schmidt",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'de-DE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Johan Michael Uwe von Schmidt";
	
	assertEquals(expected, formatted);
};

function testDEFormatComplexNameLong() {
	var name = new ilib.Name({
		prefix: "Herr Doktor",
		givenName: "Johan",
		middleName: "Michael Uwe",
		familyName: "von Schmidt",
		suffix: "III"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'de-DE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Herr Doktor Johan Michael Uwe von Schmidt III";
	
	assertEquals(expected, formatted);
};

function testDEFormatAsianNameShort() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'de-DE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testDEFormatAsianNameMedium() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'de-DE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testDEFormatAsianNameLong() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'de-DE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};
