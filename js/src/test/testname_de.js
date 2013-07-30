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

function testParseSimpleName_de_DE() {
	var parsed = new ilib.Name("Johan Schmidt", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Johan",
		familyName: "Schmidt"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTripleName_de_DE() {
	var parsed = new ilib.Name("Johan Michael Schmidt", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Johan",
		middleName: "Michael",
		familyName: "Schmidt"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseAdjunctNames_de_DE() {
	var parsed = new ilib.Name("Ludwig Klaus von Beethoven", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Ludwig",
		middleName: "Klaus",
		familyName: "von Beethoven"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseSingleName_de_DE() {
	var parsed = new ilib.Name("Ludwig", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Ludwig",
	};
	
	assertObjectContains(expected, parsed);
};

function testParseSingleNameWithAdjunct_de_DE() {
	var parsed = new ilib.Name("von Beethoven", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "von",
		familyName: "Beethoven"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseSingleNameWithPrefixAndAdjunct_de_DE() {
	var parsed = new ilib.Name("Herr von Beethoven", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Herr",
		familyName: "von Beethoven"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseMultiAdjunctNames_de_DE() {
	var parsed = new ilib.Name("Ludwig von den Wiesthal", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Ludwig",
		familyName: "von den Wiesthal"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseHypenatedName_de_DE() {
	var parsed = new ilib.Name("Johan Michael Bergische-Schmidt", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Johan",
		middleName: "Michael",
		familyName: "Bergische-Schmidt"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseQuadrupleName_de_DE() {
	var parsed = new ilib.Name("Johan Michael Jürgen Schmidt", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Johan",
		middleName: "Michael Jürgen",
		familyName: "Schmidt"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitle_de_DE() {
	var parsed = new ilib.Name("Herr Dr. Johan Schmidt", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Herr Dr.",
		givenName: "Johan",
		familyName: "Schmidt"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitleWithFamilyOnly_de_DE() {
	var parsed = new ilib.Name("Herr Schmidt", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Herr",
		familyName: "Schmidt"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitleWithFamilyOnlyAndAdjunct_de_DE() {
	var parsed = new ilib.Name("Herr von Schmidt", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Herr",
		familyName: "von Schmidt"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseHonorific_de_DE() {
	var parsed = new ilib.Name("Fr. Julia Maier", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Fr.",
		givenName: "Julia",
		familyName: "Maier"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseEverything_de_DE() {
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

function testParseFamily_de_DE() {
	var parsed = new ilib.Name("Die Maiers", {locale: 'de-DE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Die",
		familyName: "Maiers"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseCompoundHonorific_de_DE() {
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

function testFormatSimpleNameShort_de_DE() {
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

function testFormatSimpleNameMedium_de_DE() {
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

function testFormatSimpleNameLong_de_DE() {
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

function testFormatSimpleNameFull_de_DE() {
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

function testFormatComplexNameShort_de_DE() {
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

function testFormatComplexNameMedium_de_DE() {
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

function testFormatComplexNameLong_de_DE() {
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

function testFormatAsianNameShort_de_DE() {
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

function testFormatAsianNameMedium_de_DE() {
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

function testFormatAsianNameLong_de_DE() {
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
