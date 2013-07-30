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

function testJAJPParseSimpleName_fi_FI() {
	var parsed = new ilib.Name("Pihla Viitala Mikkeli", {locale: 'fi-FI'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Pihla",
	middleName : "Viitala",
		familyName: "Mikkeli"
	};
	
	assertObjectContains(expected, parsed);
};



function testDEParseSimpleName_fi_FI() {
	var parsed = new ilib.Name("Herra Kertu Mikkeli", {locale: 'fi-FI'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "Herra",
		givenName: "Kertu",
		familyName: "Mikkeli"
               
	};
	
	assertObjectContains(expected, parsed);
};



function testDEParseSingleNameWithPrefixAndAdjunct_fi_FI() {
	var parsed = new ilib.Name("Pihla Viitala Mikkeli nuorempi", {locale: 'fi-FI'});
	assertNotUndefined(parsed);
	
	var expected = {
		 suffix : "nuorempi",
		givenName: "Pihla",
	middleName : "Viitala",
		familyName: "Mikkeli"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseTitle_fi_FI1() {
	var parsed = new ilib.Name("presidentti Pihla Viitala Mikkeli", {locale: 'fi-FI'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "presidentti",
		givenName: "Pihla",
	middleName : "Viitala",
		familyName: "Mikkeli"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseTitle_fi_FI_second() {
	var parsed = new ilib.Name("Herra ja Neiti Mikkeli", {locale: 'fi-FI'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "Herra ja Neiti",
		familyName: "Mikkeli"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseTitleWithFamilyOnlyAndAdjunct_fi_FI() {

	var name = new ilib.Name({
		prefix: "presidentti",
		givenName: "Pihla",
	middleName : "Viitala",
		familyName: "Mikkeli",
		suffix: "vanhempi"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'fi-FI'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "presidentti Pihla Viitala Mikkeli vanhempi";
	
	assertEquals(expected, formatted);

};



function testDEParseCompoundHonorific_fi_FI() {
	var parsed = new ilib.Name("presidentti Mikkeli", {locale: 'fi-FI'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "presidentti",
		familyName: "Mikkeli"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testDEFormatSimpleNameShort_fi_FI() {
	var name = new ilib.Name({
		givenName: "Pihla",
	middleName : "Viitala",
		familyName: "Mikkeli"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'fi-FI'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Pihla Mikkeli";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameMedium_fi_FI() {
	var name = new ilib.Name({
		givenName: "Pihla",
	middleName : "Viitala",
		familyName: "Mikkeli"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'fi-FI'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Pihla Viitala Mikkeli";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameFull_fi_FI() {
	var name = new ilib.Name({
		
		givenName: "Pihla",
	middleName : "Viitala",
		familyName: "Mikkeli",
		suffix: "vanhempi"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'fi-FI'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Pihla Viitala Mikkeli vanhempi";
	
	assertEquals(expected, formatted);
};

function testDEFormatComplexNameShort_fi_FI() {
	var name = new ilib.Name({
		suffix: "vanhempi",
		givenName: "Pihla",
	middleName : "Viitala",
		familyName: "Mikkeli"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'fi-FI'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Pihla Mikkeli";
	
	assertEquals(expected, formatted);
};


function testDEFormatAsianNameMedium_fi_FI() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'fi-FI'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testDEFormatAsianNameLong_fi_FI() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'fi-FI'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};



