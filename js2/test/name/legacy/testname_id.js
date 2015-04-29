/*
 * testname_ID.js - test the name object in Indonesian
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

function testParseSimpleName_id_ID() {
	var parsed = new ilib.Name("Mahyadi Panggabean", {locale: 'id-ID'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Mahyadi",
		middleName: "Panggabean"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSimpleName_id_ID1() {
	var parsed = new ilib.Name("Bapak. Abdul Panggabean", {locale: 'id-ID'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "Bapak.",
		givenName: "Abdul",
		middleName: "Panggabean"
    };
	
	assertObjectContains(expected, parsed);
};


function testParseSimpleName_id_ID2() {
	var parsed = new ilib.Name("Ibu. Mahyadi Panggabean", {locale: 'id-ID'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "Ibu.",
		givenName: "Mahyadi",
		middleName: "Panggabean"
    };
	
	assertObjectContains(expected, parsed);
};



function testParseSingleNameWithPrefixAndAdjunct_id_ID() {
	var parsed = new ilib.Name("Mahyadi Krupuk muda", {locale: 'id-ID'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix : "muda",
		givenName: "Mahyadi",
	    middleName : "Krupuk"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_id_ID1() {
	var parsed = new ilib.Name("perdana menteri Mahyadi Krupuk", {locale: 'id-ID'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "perdana menteri",
		givenName: "Mahyadi",
	    middleName : "Krupuk"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_id_ID_second() {
	var parsed = new ilib.Name("Ibu. dan Bapak. Panggabean", {locale: 'id-ID'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "Ibu. dan Bapak.",
		givenName: "Panggabean"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitleWithFamilyOnlyAndAdjunct_id_ID() {

	var name = new ilib.Name({
		prefix: "presiden",
		givenName: "Mahyadi",
		middleName : "Krupuk",
		suffix: "mundur"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'id-ID'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "presiden Mahyadi Krupuk mundur";
	
	assertEquals(expected, formatted);

};



function testParseCompoundHonorific_id_ID() {
	var parsed = new ilib.Name("melayani Panggabean", {locale: 'id-ID'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "melayani",
		givenName: "Panggabean"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testFormatSimpleNameShort_id_ID() {
	var name = new ilib.Name({
		givenName: "Mahyadi",
		middleName : "Krupuk"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'id-ID'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Mahyadi";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_id_ID() {
	var name = new ilib.Name({
		givenName: "Mahyadi",
		middleName : "Krupuk"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'id-ID'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Mahyadi Krupuk";
	
	assertEquals(expected, formatted);
};


function testFormatComplexNameShort_id_ID() {
	var name = new ilib.Name({
		suffix: "mirovini",
		givenName: "Mahyadi",
		middleName: "Panggabean"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'id-ID'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Mahyadi Panggabean";
	
	assertEquals(expected, formatted);
};


function testFormatAsianNameMedium_id_ID() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		middleName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'id-ID'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "獸地";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameLong_id_ID() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		middleName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'id-ID'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小獸地太太";
	
	assertEquals(expected, formatted);
};



