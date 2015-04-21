/*
 * testname_bn_IN.js - test the name object in Hindi
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
function testParseSimpleName_bn_IN() {
	var parsed = new Name("শশী ব্যানার্জী", {locale: 'bn-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "শশী",
		familyName: "ব্যানার্জী"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitle_bn_IN() {
	var parsed = new Name("শশী ব্যানার্জী কনিষ্ঠ", {locale: 'bn-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "কনিষ্ঠ",
		givenName: "শশী",
		familyName: "ব্যানার্জী"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_bn_IN() {
	var parsed = new Name("এমএস ব্যানার্জী", {locale: 'bn-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "এমএস",
		familyName: "ব্যানার্জী"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_bn_IN() {
	var parsed = new Name("মিঃ এবং মিসেস ব্যানার্জী", {locale: 'bn-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "মিঃ এবং মিসেস",
		familyName: "ব্যানার্জী"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_bn_IN() {
	var parsed = new Name("মিঃ শশী ব্যানার্জী", {locale: 'bn-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "মিঃ",
		givenName: "শশী",
		familyName: "ব্যানার্জী"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_bn_IN() {
	var name = new Name({
		givenName: "শশী",
		familyName: "ব্যানার্জী"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'bn-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "শশী ব্যানার্জী";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_bn_IN() {
	var name = new Name({
		givenName: "শশী",
		
		familyName: "ব্যানার্জী"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'bn-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "শশী ব্যানার্জী";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_bn_IN() {
	var name = new Name({
		givenName: "শশী",
		
		familyName: "ব্যানার্জী",
		suffix: "asdf"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'bn-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "শশী ব্যানার্জী";
	
	assertEquals(expected, formatted);
};

function testFormatSurname_bn_IN() {
	var name = new Name({
		prefix: "মিঃ এবং মিসেস",
		
		familyName: "ব্যানার্জী"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'bn-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "মিঃ এবং মিসেস ব্যানার্জী";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_bn_IN() {
	var name = new Name({
		prefix: "ডাক্তার",
		givenName: "শশী",
		
		familyName: "ব্যানার্জী",
		suffix: " वरिष्ठ"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'bn-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ডাক্তার শশী ব্যানার্জী वरिष्ठ";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_bn_IN() {
	var name = new Name({
		prefix: "ডাক্তার",
		givenName: "শশী",
		familyName: "ব্যানার্জী"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'bn-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "শশী ব্যানার্জী";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_bn_IN() {
	var name = new Name({
		prefix: "ডাক্তার",
		givenName: "শশী",
		familyName: "ব্যানার্জী"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'bn-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "শশী ব্যানার্জী";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_bn_IN() {
	var name = new Name({
		prefix: "ডাক্তার",
		givenName: "শশী",
		familyName: "ব্যানার্জী"
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'bn-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ডাক্তার শশী ব্যানার্জী";
	
	assertEquals(expected, formatted);
};


