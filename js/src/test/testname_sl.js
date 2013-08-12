/*
 * testname_sl_SI.js - test the name object in slovenian
 * 
 * Copyright © 2013, JEGSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testParseSimpleName_sl_SI() {
	var parsed = new ilib.Name("Melania Trump", {locale: 'sl-SI'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Melania",
		familyName: "Trump"
	};
	
	assertObjectContains(expected, parsed);
};





function testParseTitle_sl_SI() {
	var parsed = new ilib.Name("Melania Trump upokojil", {locale: 'sl-SI'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "upokojil",
		givenName: "Melania",
		familyName: "Trump"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_sl_SI() {
	var parsed = new ilib.Name("G. Trump", {locale: 'sl-SI'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "G.",
		familyName: "Trump"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_sl_SI() {
	var parsed = new ilib.Name("G. in Ga. Trump", {locale: 'sl-SI'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "G. in Ga.",
		familyName: "Trump"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_sl_SI() {
	var parsed = new ilib.Name("Ga. Melania Trump", {locale: 'sl-SI'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Ga.",
		givenName: "Melania",
		familyName: "Trump"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefixAndSuffix_sl_SI() {
	var parsed = new ilib.Name("Predsednik Melania Trump upokojil", {locale: 'sl-SI'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Predsednik",
		givenName: "Melania",
		familyName: "Trump",
		suffix:"upokojil"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_sl_SI() {
	var name = new ilib.Name({
		givenName: "Melania",
		familyName: "Trump"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'sl-SI'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Melania Trump";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_sl_SI() {
	var name = new ilib.Name({
		givenName: "Melania",
		
		familyName: "Trump"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'sl-SI'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Melania Trump";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_sl_SI() {
	var name = new ilib.Name({
		givenName: "Melania",
		
		familyName: "Trump",
		suffix: "asdf"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'sl-SI'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Melania Trump";
	
	assertEquals(expected, formatted);
};



function testFormatSurname_sl_SI() {
	var name = new ilib.Name({
		prefix: "G. in Ga.",
		
		familyName: "Trump"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'sl-SI'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "G. in Ga. Trump";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_sl_SI() {
	var name = new ilib.Name({
		prefix: "Princeska",
		givenName: "Melania",
		
		familyName: "Trump",
		suffix: "upokojil"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'sl-SI'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Princeska Melania Trump upokojil";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_sl_SI() {
	var name = new ilib.Name({
		prefix: "Princeska",
		givenName: "Melania",
		familyName: "Trump"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'sl-SI'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Melania Trump";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_sl_SI() {
	var name = new ilib.Name({
		prefix: "Princeska",
		givenName: "Melania",
		familyName: "Trump"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'sl-SI'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Melania Trump";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_sl_SI() {
	var name = new ilib.Name({
		prefix: "Princeska",
		givenName: "Melania",
		familyName: "Trump"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'sl-SI'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Princeska Melania Trump";
	
	assertEquals(expected, formatted);
};


