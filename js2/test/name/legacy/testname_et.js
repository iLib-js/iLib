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

function testParseSimpleName_et_EE() {
	var parsed = new ilib.Name("Kertu-Triin Sepp", {locale: 'et-EE'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Kertu-Triin",
		familyName: "Sepp"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSimpleName_et_EE() {
	var parsed = new ilib.Name("professor Kertu Sepp", {locale: 'et-EE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "professor",
		givenName: "Kertu",
		familyName: "Sepp"
               
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSingleNameWithPrefixAndAdjunct_et_EE() {
	var parsed = new ilib.Name("Kertu-Triin Sepp jr.", {locale: 'et-EE'});
	assertNotUndefined(parsed);
	
	var expected = {
		 suffix : "jr.",
		givenName: "Kertu-Triin",
		familyName: "Sepp"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_et_EE1() {
	var parsed = new ilib.Name("Hr. Kertu-Triin Sepp", {locale: 'et-EE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "Hr.",
		givenName: "Kertu-Triin",
		familyName: "Sepp"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_et_EE_second() {
	var parsed = new ilib.Name("Prl. Kertu-Triin Sepp", {locale: 'et-EE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "Prl.",
		givenName: "Kertu-Triin",
		familyName: "Sepp"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitleWithFamilyOnlyAndAdjunct_et_EE() {

	var name = new ilib.Name({
		prefix: "Hr.",
		givenName: "Kertu-Triin",
		familyName: "Sepp",
		suffix: "pensionile"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'et-EE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Hr. Kertu-Triin Sepp pensionile";
	
	assertEquals(expected, formatted);

};


function testParseTitleWithFamilyOnlyAndAdjunctex_et_EE() {
	var parsed = new ilib.Name("inspektor Kertu-Triin Sepp pensionile", {locale: 'et-EE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "inspektor",
		givenName: "Kertu-Triin",
		familyName: "Sepp",
		suffix : "pensionile"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseCompoundHonorific_et_EE() {
	var parsed = new ilib.Name("Hr. Sepp", {locale: 'et-EE'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Hr.",
		familyName: "Sepp"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testFormatSimpleNameShort_et_EE() {
	var name = new ilib.Name({
		givenName: "Kertu-Triin",
		familyName: "Sepp"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'et-EE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Kertu-Triin Sepp";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_et_EE() {
	var name = new ilib.Name({
		givenName: "Kertu-Triin",
		familyName: "Sepp"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'et-EE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Kertu-Triin Sepp";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_et_EE() {
	var name = new ilib.Name({
		
		givenName: "Kertu-Triin",
		familyName: "Sepp",
		suffix: "pensionile"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'et-EE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Kertu-Triin Sepp pensionile";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_et_EE() {
	var name = new ilib.Name({
		suffix: "pensionile",
		givenName: "Kertu-Triin",
		familyName: "Sepp"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'et-EE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Kertu-Triin Sepp";
	
	assertEquals(expected, formatted);
};


function testFormatAsianNameMedium_et_EE() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'et-EE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameLong_et_EE() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'et-EE'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};



