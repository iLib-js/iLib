/*
 * testname_cs_CZ.js - test the name object in CZECH Republic
 * 
 * Copyright © 2013-2015, JEDLSoft
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


function testParseSimpleName_cs_CZ() {
	var parsed = new ilib.Name("Yana Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Yana",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTripleName_cs_CZ() {
	var parsed = new ilib.Name("Yana Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Yana",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseSingleNameWithPrefixAndAdjunct_cs_CZ() {
	var parsed = new ilib.Name("prezident Yana Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "prezident",
		givenName: "Yana",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseHypenatedName_cs_CZ() {
	var parsed = new ilib.Name("Yana Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Yana",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitle_cs_CZ() {
	var parsed = new ilib.Name("prezident Yana Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "prezident",
		givenName: "Yana",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_cs_CZ1() {
	var parsed = new ilib.Name("předsedkyně Yana Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "předsedkyně",
		givenName: "Yana",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnlyAndAdjunct_cs_CZ() {
	var parsed = new ilib.Name("viceprezident Yana Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "viceprezident",
		givenName: "Yana",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_cs_CZ() {
	var parsed = new ilib.Name("dáma Yana Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "dáma",
		givenName: "Yana",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseCompoundHonorific_cs_CZ() {
	var parsed = new ilib.Name("šéfkuchař Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "šéfkuchař",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseCompoundHonorific_cs_CZ1() {
	var parsed = new ilib.Name("Dr. Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Dr.",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};

function testParsewithFamilyCompoundHonorific_cs_CZ1() {
	var parsed = new ilib.Name("Pan a Paní Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Pan a Paní",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseCompoundHonorific_cs_CZZ() {
	var parsed = new ilib.Name("Paní Yana Synkova", {locale: 'cs-CZ'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Paní",
        givenName: "Yana",
		familyName: "Synkova"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_cs_CZ() {
	var name = new ilib.Name({
		givenName: "Yana",
		familyName: "Synkova"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Yana Synkova";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_cs_CZ() {
	var name = new ilib.Name({
		givenName: "Yana",
		familyName: "Synkova"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Yana Synkova";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_cs_CZ() {
	var name = new ilib.Name({
		givenName: "Yana",
		familyName: "Synkova",
		suffix: "asdf"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Yana Synkova";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull1_cs_CZ() {
	var name = new ilib.Name({
		prefix: "Pan",
		givenName: "Yana",
		familyName: "Synkova",
		suffix: "v důchodu"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Pan Yana Synkova v důchodu";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFullu_cs_CZ() {
	var name = new ilib.Name({
		prefix: "Paní",
		givenName: "Yana",
		familyName: "Synkova",
		suffix: "v důchodu"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Paní Yana Synkova v důchodu";
	
	assertEquals(expected, formatted);
};


function testFormatSimpleNameFull_cs_CZ() {
	var name = new ilib.Name({
		prefix: "prezidentí ministerský předseda",
		givenName: "Yana",
		familyName: "Synkova",
		suffix: "v důchodu"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "prezidentí ministerský předseda Yana Synkova v důchodu";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_cs_CZ() {
	var name = new ilib.Name({
		prefix: "prezidentí ministerský",
		givenName: "Yana",
		familyName: "von Synkova"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Yana von Synkova";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_cs_CZ() {
	var name = new ilib.Name({
		prefix: "prezidentí ministerský",
		givenName: "Yana",
		familyName: "von Synkova"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Yana von Synkova";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_cs_CZ() {
	var name = new ilib.Name({
		prefix: "prezidentí ministerský",
		givenName: "Yana",
		familyName: "von Synkova"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "prezidentí ministerský Yana von Synkova";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameShort_cs_CZ() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameMedium_cs_CZ() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameLong_cs_CZ() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'cs-CZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};
