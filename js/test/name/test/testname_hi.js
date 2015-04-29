/*
 * testname_hi_IN.js - test the name object in Hindi
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

var NameFmt = require("./../lib/NameFmt.js");
var Name = require("./../lib/Name.js");
function testParseSimpleName_hi_IN() {
	var parsed = new Name("आदित्य मित्तल", {locale: 'hi-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "आदित्य",
		familyName: "मित्तल"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitle_hi_IN() {
	var parsed = new Name("आदित्य मित्तल जूनियर", {locale: 'hi-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "जूनियर",
		givenName: "आदित्य",
		familyName: "मित्तल"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_hi_IN() {
	var parsed = new Name("राज्यपाल मित्तल", {locale: 'hi-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "राज्यपाल",
		familyName: "मित्तल"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_hi_IN() {
	var parsed = new Name("श्री और श्रीमती मित्तल", {locale: 'hi-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "श्री और श्रीमती",
		familyName: "मित्तल"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_hi_IN() {
	var parsed = new Name("श्री आदित्य मित्तल", {locale: 'hi-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "श्री",
		givenName: "आदित्य",
		familyName: "मित्तल"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_hi_IN() {
	var name = new Name({
		givenName: "आदित्य",
		familyName: "मित्तल"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'hi-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "आदित्य मित्तल";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_hi_IN() {
	var name = new Name({
		givenName: "आदित्य",
		
		familyName: "मित्तल"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'hi-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "आदित्य मित्तल";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_hi_IN() {
	var name = new Name({
		givenName: "आदित्य",
		
		familyName: "मित्तल",
		suffix: "asdf"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'hi-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "आदित्य मित्तल";
	
	assertEquals(expected, formatted);
};

function testFormatSurname_hi_IN() {
	var name = new Name({
		prefix: "श्री और श्रीमती",
		
		familyName: "मित्तल"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'hi-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "श्री और श्रीमती मित्तल";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_hi_IN() {
	var name = new Name({
		prefix: "प्रोफेसर",
		givenName: "आदित्य",
		
		familyName: "मित्तल",
		suffix: " वरिष्ठ"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'hi-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "प्रोफेसर आदित्य मित्तल वरिष्ठ";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_hi_IN() {
	var name = new Name({
		prefix: "प्रोफेसर",
		givenName: "आदित्य",
		familyName: "मित्तल"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'hi-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "आदित्य मित्तल";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_hi_IN() {
	var name = new Name({
		prefix: "प्रोफेसर",
		givenName: "आदित्य",
		familyName: "मित्तल"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'hi-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "आदित्य मित्तल";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_hi_IN() {
	var name = new Name({
		prefix: "प्रोफेसर",
		givenName: "आदित्य",
		familyName: "मित्तल"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'hi-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "प्रोफेसर आदित्य मित्तल";
	
	assertEquals(expected, formatted);
};


