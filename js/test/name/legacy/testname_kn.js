/*
 * testname_kn_IN.js - test the name object in Hindi
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

function testParseSimpleName_kn_IN() {
	var parsed = new ilib.Name("ಮಂಜುನಾಥ ಗೌಡ", {locale: 'kn-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "ಮಂಜುನಾಥ",
		familyName: "ಗೌಡ"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitle_kn_IN() {
	var parsed = new ilib.Name("ಮಂಜುನಾಥ ಗೌಡ ಹಿರಿಯ", {locale: 'kn-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "ಹಿರಿಯ",
		givenName: "ಮಂಜುನಾಥ",
		familyName: "ಗೌಡ"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_kn_IN() {
	var parsed = new ilib.Name("ವೈದ್ಯರು ಗೌಡ", {locale: 'kn-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "ವೈದ್ಯರು",
		familyName: "ಗೌಡ"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_kn_IN() {
	var parsed = new ilib.Name("ಶ್ರೀ ಮತ್ತು ಶ್ರೀಮತಿ ಗೌಡ", {locale: 'kn-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "ಶ್ರೀ ಮತ್ತು ಶ್ರೀಮತಿ",
		familyName: "ಗೌಡ"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_kn_IN() {
	var parsed = new ilib.Name("ಶ್ರೀ ಮಂಜುನಾಥ ಗೌಡ", {locale: 'kn-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "ಶ್ರೀ",
		givenName: "ಮಂಜುನಾಥ",
		familyName: "ಗೌಡ"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_kn_IN() {
	var name = new ilib.Name({
		givenName: "ಮಂಜುನಾಥ",
		familyName: "ಗೌಡ"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'kn-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ಮಂಜುನಾಥ ಗೌಡ";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_kn_IN() {
	var name = new ilib.Name({
		givenName: "ಮಂಜುನಾಥ",
		
		familyName: "ಗೌಡ"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'kn-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ಮಂಜುನಾಥ ಗೌಡ";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_kn_IN() {
	var name = new ilib.Name({
		givenName: "ಮಂಜುನಾಥ",
		
		familyName: "ಗೌಡ"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'kn-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ಮಂಜುನಾಥ ಗೌಡ";
	
	assertEquals(expected, formatted);
};

function testFormatSurname_kn_IN() {
	var name = new ilib.Name({
		prefix: "ಶ್ರೀ ಮತ್ತು ಶ್ರೀಮತಿ",
		familyName: "ಗೌಡ"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'kn-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ಶ್ರೀ ಮತ್ತು ಶ್ರೀಮತಿ ಗೌಡ";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_kn_IN() {
	var name = new ilib.Name({
		prefix: "ವೈದ್ಯರು",
		givenName: "ಮಂಜುನಾಥ",
		
		familyName: "ಗೌಡ",
		suffix: "ಕಿರಿಯ"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'kn-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ವೈದ್ಯರು ಮಂಜುನಾಥ ಗೌಡ ಕಿರಿಯ";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_kn_IN() {
	var name = new ilib.Name({
		prefix: "ವೈದ್ಯರು",
		givenName: "ಮಂಜುನಾಥ",
		familyName: "ಗೌಡ"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'kn-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ಮಂಜುನಾಥ ಗೌಡ";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_kn_IN() {
	var name = new ilib.Name({
		prefix: "ವೈದ್ಯರು",
		givenName: "ಮಂಜುನಾಥ",
		familyName: "ಗೌಡ"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'kn-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ಮಂಜುನಾಥ ಗೌಡ";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_kn_IN() {
	var name = new ilib.Name({
		prefix: "ವೈದ್ಯರು",
		givenName: "ಮಂಜುನಾಥ",
		familyName: "ಗೌಡ"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'kn-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ವೈದ್ಯರು ಮಂಜುನಾಥ ಗೌಡ";
	
	assertEquals(expected, formatted);
};


