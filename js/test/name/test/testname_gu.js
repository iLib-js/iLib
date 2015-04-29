/*
 * testname_gu_IN.js - test the name object in Hindi
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
function testParseSimpleName_gu_IN() {
	var parsed = new Name("જેઠાલાલ મોદી", {locale: 'gu-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "જેઠાલાલ",
		familyName: "મોદી"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitle_gu_IN() {
	var parsed = new Name("જેઠાલાલ મોદી વરિષ્ઠ", {locale: 'gu-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "વરિષ્ઠ",
		givenName: "જેઠાલાલ",
		familyName: "મોદી"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_gu_IN() {
	var parsed = new Name("મિસ્ટર અને શ્રીમતી મોદી", {locale: 'gu-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "મિસ્ટર અને શ્રીમતી",
		familyName: "મોદી"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_gu_IN() {
	var parsed = new Name("મિસ્ટર જેઠાલાલ મોદી", {locale: 'gu-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "મિસ્ટર",
		givenName: "જેઠાલાલ",
		familyName: "મોદી"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_gu_IN() {
	var name = new Name({
		givenName: "જેઠાલાલ",
		familyName: "મોદી"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'gu-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "જેઠાલાલ મોદી";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_gu_IN() {
	var name = new Name({
		givenName: "જેઠાલાલ",
		
		familyName: "મોદી"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'gu-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "જેઠાલાલ મોદી";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_gu_IN() {
	var name = new Name({
		givenName: "જેઠાલાલ",
		
		familyName: "મોદી",
		suffix: "asdf"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'gu-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "જેઠાલાલ મોદી";
	
	assertEquals(expected, formatted);
};

function testFormatSurname_gu_IN() {
	var name = new Name({
		prefix: "મિસ્ટર અને શ્રીમતી",
		
		familyName: "મોદી"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'gu-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "મિસ્ટર અને શ્રીમતી મોદી";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_gu_IN() {
	var name = new Name({
		prefix: "ગુમાવે છે",
		givenName: "જેઠાલાલ",
		
		familyName: "મોદી",
		suffix: "વરિષ્ઠ"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'gu-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ગુમાવે છે જેઠાલાલ મોદી વરિષ્ઠ";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_gu_IN() {
	var name = new Name({
		prefix: "ગુમાવે છે",
		givenName: "જેઠાલાલ",
		familyName: "મોદી"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'gu-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "જેઠાલાલ મોદી";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_gu_IN() {
	var name = new Name({
		prefix: "ગુમાવે છે",
		givenName: "જેઠાલાલ",
		familyName: "મોદી"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'gu-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "જેઠાલાલ મોદી";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_gu_IN() {
	var name = new Name({
		prefix: "ગુમાવે છે",
		givenName: "જેઠાલાલ",
		familyName: "મોદી"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'gu-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ગુમાવે છે જેઠાલાલ મોદી";
	
	assertEquals(expected, formatted);
};


