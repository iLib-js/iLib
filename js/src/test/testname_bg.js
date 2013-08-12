/*
 * testname_bg_BG.js - test the name object in Bulgarian
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

function testParseSimpleName_bg_BG() {
	var parsed = new ilib.Name("Мария Георгиева", {locale: 'bg-BG'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Мария",
		familyName: "Георгиева"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseAdjunctNames_bg_BG() {
	var parsed = new ilib.Name("Стоян Драганов", {locale: 'bg-BG'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Стоян",
		familyName: "Драганов"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSingleNameWithPrefixAndAdjunct_bg_BG() {
	var parsed = new ilib.Name("сестра Драганов", {locale: 'bg-BG'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "сестра",
		familyName: "Драганов"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_bg_BG() {
	var parsed = new ilib.Name("Мария Георгиева младши", {locale: 'bg-BG'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "младши",
		givenName: "Мария",
		familyName: "Георгиева"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_bg_BG() {
	var parsed = new ilib.Name("сестра. Георгиева", {locale: 'bg-BG'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "сестра.",
		familyName: "Георгиева"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_bg_BG() {
	var parsed = new ilib.Name("баба Мария Георгиева", {locale: 'bg-BG'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "баба",
		givenName: "Мария",
		familyName: "Георгиева"
	};
	
	assertObjectContains(expected, parsed);
};


/*
 * Format Tests
 */

function testFormatSimpleNameShort_bg_BG() {
	var name = new ilib.Name({
		givenName: "Мария",
		familyName: "Георгиева"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Мария Георгиева";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_bg_BG() {
	var name = new ilib.Name({
		givenName: "Мария",
		
		familyName: "Георгиева"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Мария Георгиева";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_bg_BG() {
	var name = new ilib.Name({
		givenName: "Мария",
		
		familyName: "Георгиева",
		suffix: "asdf"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Мария Георгиева";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_bg_BG() {
	var name = new ilib.Name({
		prefix: "лекар",
		givenName: "Мария",
		
		familyName: "Георгиева",
		suffix: " MdB"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "лекар Мария Георгиева MdB";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_bg_BG() {
	var name = new ilib.Name({
		prefix: "лекар",
		givenName: "Мария",
		familyName: "Георгиева"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Мария Георгиева";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_bg_BG() {
	var name = new ilib.Name({
		prefix: "лекар",
		givenName: "Мария",
		familyName: "Георгиева"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Мария Георгиева";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_bg_BG() {
	var name = new ilib.Name({
		prefix: "лекар",
		givenName: "Мария",
		familyName: "Георгиева"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "лекар Мария Георгиева";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameShort_bg_BG() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameMedium_bg_BG() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameLong_bg_BG() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'bg-BG'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸";
	
	assertEquals(expected, formatted);
};





