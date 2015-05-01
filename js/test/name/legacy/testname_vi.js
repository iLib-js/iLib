/*
 * testname_vi.js - test the name object in Vietnamese
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

function testParseSimpleName_vi() {
	var parsed = new ilib.Name("Chau-Giang Thi Nguyen", {locale: 'vi-VN'});
	assertNotUndefined(parsed);
	
	var expected =   {
		givenName: "Chau-Giang",
		middleName: "Thi",
		familyName: "Nguyen"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseAdjunctNames_vi() {
	var parsed = new ilib.Name("Chau-Giang Thi Nguyen", {locale: 'vi-VN'});
	assertNotUndefined(parsed);
	
	var expected =  {
		givenName: "Chau-Giang",
		middleName: "Thi",
		familyName: "Nguyen"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSingleNameWithPrefixAndAdjunct_vi() {
	var parsed = new ilib.Name("Ông và Bà Nguyen", {locale: 'vi-VN'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "Ông và Bà",
		familyName: "Nguyen"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_vi() {
	var parsed = new ilib.Name("Chau-Giang Nguyen Cao cấp", {locale: 'vi-VN'});
	assertNotUndefined(parsed);
	
	var expected =    {
		suffix: "Cao cấp",
		givenName: "Chau-Giang",
		familyName: "Nguyen"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_vi() {
	var parsed = new ilib.Name("Thị trưởng Nguyen", {locale: 'vi-VN'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "Thị trưởng",
		familyName: "Nguyen"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_vi() {
	var parsed = new ilib.Name("Ông Chau-Giang Thi Nguyen", {locale: 'vi-VN'});
	assertNotUndefined(parsed);
	
	var expected =    {
		prefix: "Ông",
		givenName: "Chau-Giang",
		middleName: "Thi",
		familyName: "Nguyen"
	};
	
	assertObjectContains(expected, parsed);
};


/*
 * Format Tests
 */

function testFormatSimpleNameShort_vi() {
	var name = new ilib.Name({
		givenName: "Chau-Giang",
		middleName: "Thi",
		familyName: "Nguyen"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'vi-VN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Chau-Giang Nguyen";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_vi() {
	var name = new ilib.Name({
		givenName: "Chau-Giang",
		middleName: "Thi",
		familyName: "Nguyen"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'vi-VN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Chau-Giang Thi Nguyen";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_vi() {
	var name = new ilib.Name({
		givenName: "Chau-Giang",
		middleName: "Thi",
		familyName: "Nguyen",
		suffix: "Cao cấp"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'vi-VN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Chau-Giang Thi Nguyen";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_vi() {
	var name = new ilib.Name({
		prefix: "Ông",
		givenName: "Chau-Giang",
		middleName: "Thi",
		familyName: "Nguyen",
		suffix: "Cao cấp"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'vi-VN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Ông Chau-Giang Thi Nguyen Cao cấp";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_vi() {
	var name = new ilib.Name({
		prefix: "Ông",
		givenName: "Chau-Giang",
		middleName: "Thi",
		familyName: "Nguyen"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'vi-VN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Chau-Giang Nguyen";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_vi() {
	var name = new ilib.Name({
		prefix: "Ông",
		givenName: "Chau-Giang",
		middleName: "Thi",
		familyName: "Nguyen"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'vi-VN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Chau-Giang Thi Nguyen";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_vi() {
	var name = new ilib.Name({
		prefix: "Ông",
		givenName: "Chau-Giang",
		middleName: "Thi",
		familyName: "Nguyen"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'vi-VN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Ông Chau-Giang Thi Nguyen";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameShort_vi() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'vi-VN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameMedium_vi() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'vi-VN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameLong_vi() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'vi-VN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸";
	
	assertEquals(expected, formatted);
};





