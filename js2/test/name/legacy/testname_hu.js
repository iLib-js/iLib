/*
 * testname_en.js - test the name object in Japanese
 * 
 * Copyright © 2013-2015, JEDLSoft
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

function testParseSimpleName_hu_HU() {
	var parsed = new ilib.Name("Halász Dorottya", {locale: 'hu-HU'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Dorottya",
		familyName: "Halász"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSimpleName_hu_HU1() {
	var parsed = new ilib.Name("úr. Halász Dorottya", {locale: 'hu-HU'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "úr.",
		givenName: "Dorottya",
		familyName: "Halász"
               
	};
	
	assertObjectContains(expected, parsed);
};


function testParseSimpleNameWom_hu_HU() {
	var parsed = new ilib.Name("Kisasszony. Kovács Lajos", {locale: 'hu-HU'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "Kisasszony.",
		givenName: "Lajos",
		familyName: "Kovács"
               
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSingleNameWithPrefixAndAdjunct_hu_HU() {
	var parsed = new ilib.Name("Halász Dorottya jr.", {locale: 'hu-HU'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix : "jr.",
		givenName: "Dorottya",
		familyName: "Halász"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_hu_HU1() {
	var parsed = new ilib.Name("alelnöke Halász Dorottya", {locale: 'hu-HU'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "alelnöke",
	        familyName: "Halász",
		givenName: "Dorottya"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_hu_HU_second() {
	var parsed = new ilib.Name("Úr. és Kisasszony. Halász", {locale: 'hu-HU'});
	assertNotUndefined(parsed);
	
	var expected = {
		familyName: "Halász",
		prefix: "Úr. és Kisasszony."
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitleWithFamilyOnlyAndAdjunct_hu_HU() {

	var name = new ilib.Name({
		prefix: "alelnöke",
		givenName: "Dorottya",
	
		familyName: "Halász",
		suffix: "idősebb"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'hu-HU'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "alelnöke Halász Dorottya idősebb";
	
	assertEquals(expected, formatted);

};



function testParseCompoundHonorific_hu_HU() {
	var parsed = new ilib.Name("alelnöke Halász", {locale: 'hu-HU'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "alelnöke",
		familyName: "Halász"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testFormatSimpleNameShort_hu_HU() {
	var name = new ilib.Name({
		givenName: "Dorottya",
		familyName: "Halász"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'hu-HU'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Halász Dorottya";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_hu_HU() {
	var name = new ilib.Name({
		givenName: "Dorottya",
		familyName: "Halász"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'hu-HU'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Halász Dorottya";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_hu_HU() {
	var name = new ilib.Name({
		givenName: "Dorottya",
		familyName: "Halász",
		suffix: "idősebb"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'hu-HU'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Halász Dorottya idősebb";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_hu_HU() {
	var name = new ilib.Name({
		suffix: "idősebb",
		givenName: "Dorottya",
		familyName: "Halász"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'hu-HU'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Halász Dorottya";
	
	assertEquals(expected, formatted);
};


function testFormatAsianNameMedium_hu_HU() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'hu-HU'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameLong_hu_HU() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'hu-HU'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};



