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

function testParseSimpleName_hr_HR() {
	var parsed = new ilib.Name("Antonio Pavlović", {locale: 'hr-HR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Antonio",
		familyName: "Pavlović"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSimpleName_hr_HR() {
	var parsed = new ilib.Name("G. Kertu Pavlović", {locale: 'hr-HR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "G.",
		givenName: "Kertu",
		familyName: "Pavlović"
               
	};
	
	assertObjectContains(expected, parsed);
};


function testParseSimpleName_hr_HR() {
	var parsed = new ilib.Name("Gospođa. Kertu Pavlović", {locale: 'hr-HR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "Gospođa.",
		givenName: "Kertu",
		familyName: "Pavlović"
               
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSingleNameWithPrefixAndAdjunct_hr_HR() {
	var parsed = new ilib.Name("Antonio Vesna Pavlović mlađi", {locale: 'hr-HR'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix : "mlađi",
		givenName: "Antonio",
	        middleName : "Vesna",
		familyName: "Pavlović"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_hr_HR1() {
	var parsed = new ilib.Name("predsjednik Antonio Vesna Pavlović", {locale: 'hr-HR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "predsjednik",
		givenName: "Antonio",
	        middleName : "Vesna",
		familyName: "Pavlović"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_hr_HR_second() {
	var parsed = new ilib.Name("G. i Gospođa. Pavlović", {locale: 'hr-HR'});
	assertNotUndefined(parsed);
	
	var expected = {
		familyName: "Pavlović"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitleWithFamilyOnlyAndAdjunct_hr_HR() {

	var name = new ilib.Name({
		prefix: "predsjednik",
		givenName: "Antonio",
	middleName : "Vesna",
		familyName: "Pavlović",
		suffix: "mirovini"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'hr-HR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "predsjednik Antonio Vesna Pavlović mirovini";
	
	assertEquals(expected, formatted);

};



function testParseCompoundHonorific_hr_HR() {
	var parsed = new ilib.Name("predsjednik Pavlović", {locale: 'hr-HR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "predsjednik",
		familyName: "Pavlović"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testFormatSimpleNameShort_hr_HR() {
	var name = new ilib.Name({
		givenName: "Antonio",
	middleName : "Vesna",
		familyName: "Pavlović"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'hr-HR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Antonio Pavlović";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_hr_HR() {
	var name = new ilib.Name({
		givenName: "Antonio",
	middleName : "Vesna",
		familyName: "Pavlović"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'hr-HR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Antonio Vesna Pavlović";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_hr_HR() {
	var name = new ilib.Name({
		
		givenName: "Antonio",
	middleName : "Vesna",
		familyName: "Pavlović",
		suffix: "mirovini"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'hr-HR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Antonio Vesna Pavlović mirovini";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_hr_HR() {
	var name = new ilib.Name({
		suffix: "mirovini",
		givenName: "Antonio",
	middleName : "Vesna",
		familyName: "Pavlović"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'hr-HR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Antonio Pavlović";
	
	assertEquals(expected, formatted);
};


function testFormatAsianNameMedium_hr_HR() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'hr-HR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameLong_hr_HR() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'hr-HR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};



