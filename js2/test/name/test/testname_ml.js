/*
 * testname_ml_IN.js - test the name object in Malalyam
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
function testParseSimpleName_ml_IN() {
	var parsed = new Name("മോഹന ലള", {locale: 'ml-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "മോഹന",
		familyName: "ലള"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitle_ml_IN() {
	var parsed = new Name("മോഹന ലള ജൂനിയര്‍", {locale: 'ml-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "ജൂനിയര്‍",
		givenName: "മോഹന",
		familyName: "ലള"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_ml_IN() {
	var parsed = new Name("മിസ്റ്റര്‍ ലള", {locale: 'ml-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "മിസ്റ്റര്‍",
		familyName: "ലള"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_ml_IN() {
	var parsed = new Name("മിസ്റ്റര്‍ ആന്‍ഡ് മാഡം ലള", {locale: 'ml-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "മിസ്റ്റര്‍ ആന്‍ഡ് മാഡം",
		familyName: "ലള"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_ml_IN() {
	var parsed = new Name("മിസ്റ്റര്‍ മോഹന ലള", {locale: 'ml-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "മിസ്റ്റര്‍",
		givenName: "മോഹന",
		familyName: "ലള"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_ml_IN() {
	var name = new Name({
		givenName: "മോഹന",
		familyName: "ലള"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'ml-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "മോഹന ലള";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_ml_IN() {
	var name = new Name({
		givenName: "മോഹന",
		familyName: "ലള"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'ml-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "മോഹന ലള";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_ml_IN() {
	var name = new Name({
		givenName: "മോഹന",
		familyName: "ലള"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'ml-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "മോഹന ലള";
	
	assertEquals(expected, formatted);
};

function testFormatSurname_ml_IN() {
	var name = new Name({
		prefix: "മിസ്റ്റര്‍ ആന്‍ഡ് മാഡം",
		familyName: "ലള"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'ml-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "മിസ്റ്റര്‍ ആന്‍ഡ് മാഡം ലള";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_ml_IN() {
	var name = new Name({
		prefix: "ഡോക്ടര്‍",
		givenName: "മോഹന",
		familyName: "ലള",
		suffix: "ജൂനിയര്‍"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'ml-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ഡോക്ടര്‍ മോഹന ലള ജൂനിയര്‍";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_ml_IN() {
	var name = new Name({
		prefix: "ഡോക്ടര്‍",
		givenName: "മോഹന",
		familyName: "ലള"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'ml-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "മോഹന ലള";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_ml_IN() {
	var name = new Name({
		prefix: "ഡോക്ടര്‍",
		givenName: "മോഹന",
		familyName: "ലള"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'ml-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "മോഹന ലള";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_ml_IN() {
	var name = new Name({
		prefix: "ഡോക്ടര്‍",
		givenName: "മോഹന",
		familyName: "ലള"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'ml-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ഡോക്ടര്‍ മോഹന ലള";
	
	assertEquals(expected, formatted);
};


