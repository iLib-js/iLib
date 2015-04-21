/*
 * testname_ta_IN.js - test the name object in Tamil
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

var NameFmt = require("./../lib/NameFmt.js");
var Name = require("./../lib/Name.js");
function testParseSimpleName_ta_IN() {
	var parsed = new Name("மஹிலா ஜெயவர்த்தனே", {locale: 'ta-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "மஹிலா",
		familyName: "ஜெயவர்த்தனே"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitle_ta_IN() {
	var parsed = new Name("மஹிலா ஜெயவர்த்தனே மூத்த", {locale: 'ta-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "மூத்த",
		givenName: "மஹிலா",
		familyName: "ஜெயவர்த்தனே"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitleWithFamilyOnly_ta_IN() {
	var parsed = new Name("திரு ஜெயவர்த்தனே", {locale: 'ta-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "திரு",
		familyName: "ஜெயவர்த்தனே"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseEverything_ta_IN() {
	var parsed = new Name("திரு மற்றும் திருமதி ஜெயவர்த்தனே", {locale: 'ta-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "திரு மற்றும் திருமதி",
		familyName: "ஜெயவர்த்தனே"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_ta_IN() {
	var parsed = new Name("திரு மஹிலா ஜெயவர்த்தனே", {locale: 'ta-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "திரு",
		givenName: "மஹிலா",
		familyName: "ஜெயவர்த்தனே"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_ta_IN() {
	var name = new Name({
		givenName: "மஹிலா",
		familyName: "ஜெயவர்த்தனே"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'ta-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "மஹிலா ஜெயவர்த்தனே";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_ta_IN() {
	var name = new Name({
		givenName: "மஹிலா",
		familyName: "ஜெயவர்த்தனே"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'ta-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "மஹிலா ஜெயவர்த்தனே";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_ta_IN() {
	var name = new Name({
		givenName: "மஹிலா",
		familyName: "ஜெயவர்த்தனே"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'ta-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "மஹிலா ஜெயவர்த்தனே";
	
	assertEquals(expected, formatted);
};

function testFormatSurname_ta_IN() {
	var name = new Name({
		prefix: "திரு மற்றும் திருமதி",
		familyName: "ஜெயவர்த்தனே"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'ta-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "திரு மற்றும் திருமதி ஜெயவர்த்தனே";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_ta_IN() {
	var name = new Name({
		prefix: "வைத்தியர்",
		givenName: "மஹிலா",
		familyName: "ஜெயவர்த்தனே",
		suffix: "மிஸ்"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'ta-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "வைத்தியர் மஹிலா ஜெயவர்த்தனே மிஸ்";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_ta_IN() {
	var name = new Name({
		prefix: "வைத்தியர்",
		givenName: "மஹிலா",
		familyName: "ஜெயவர்த்தனே"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'ta-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "மஹிலா ஜெயவர்த்தனே";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_ta_IN() {
	var name = new Name({
		prefix: "வைத்தியர்",
		givenName: "மஹிலா",
		familyName: "ஜெயவர்த்தனே"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'ta-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "மஹிலா ஜெயவர்த்தனே";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_ta_IN() {
	var name = new Name({
		prefix: "வைத்தியர்",
		givenName: "மஹிலா",
		familyName: "ஜெயவர்த்தனே"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'ta-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "வைத்தியர் மஹிலா ஜெயவர்த்தனே";
	
	assertEquals(expected, formatted);
};


