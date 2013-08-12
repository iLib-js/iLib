/*
 * testname_sr_Cyrl_RS.js - test the name object in Serbian
 * 
 * Copyright © 2013, JEгосподинSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testParseSimpleName_sr_Cyrl_RS() {
	var parsed = new ilib.Name("Александар Дероко", {locale: 'sr-Cyrl-RS'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Александар",
		familyName: "Дероко"
	};
	
	assertObjectContains(expected, parsed);
};





function testParseTitle_sr_Cyrl_RS() {
	var parsed = new ilib.Name("Александар Дероко млађи", {locale: 'sr-Cyrl-RS'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "млађи",
		givenName: "Александар",
		familyName: "Дероко"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_sr_Cyrl_RS() {
	var parsed = new ilib.Name("господин. Дероко", {locale: 'sr-Cyrl-RS'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "господин.",
		familyName: "Дероко"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_sr_Cyrl_RS() {
	var parsed = new ilib.Name("господин. и госпођа. Дероко", {locale: 'sr-Cyrl-RS'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "господин. и госпођа.",
		familyName: "Дероко"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_sr_Cyrl_RS() {
	var parsed = new ilib.Name("господин. Александар Дероко", {locale: 'sr-Cyrl-RS'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "господин.",
		givenName: "Александар",
		familyName: "Дероко"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefixAndSuffix_sr_Cyrl_RS() {
	var parsed = new ilib.Name("заменик председника Александар Дероко млађи", {locale: 'sr-Cyrl-RS'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "заменик председника",
		givenName: "Александар",
		familyName: "Дероко",
		suffix:"млађи"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_sr_Cyrl_RS() {
	var name = new ilib.Name({
		givenName: "Александар",
		familyName: "Дероко"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'sr-Cyrl-RS'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Александар Дероко";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_sr_Cyrl_RS() {
	var name = new ilib.Name({
		givenName: "Александар",
		
		familyName: "Дероко"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'sr-Cyrl-RS'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Александар Дероко";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_sr_Cyrl_RS() {
	var name = new ilib.Name({
		givenName: "Александар",
		
		familyName: "Дероко",
		suffix: "asdf"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'sr-Cyrl-RS'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Александар Дероко";
	
	assertEquals(expected, formatted);
};



function testFormatSurname_sr_Cyrl_RS() {
	var name = new ilib.Name({
		prefix: "господин. и госпођа.",
		
		familyName: "Дероко"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'sr-Cyrl-RS'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "господин. и госпођа. Дероко";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_sr_Cyrl_RS() {
	var name = new ilib.Name({
		prefix: "председавајућа",
		givenName: "Александар",
		
		familyName: "Дероко",
		suffix: "млађи"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'sr-Cyrl-RS'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "председавајућа Александар Дероко млађи";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_sr_Cyrl_RS() {
	var name = new ilib.Name({
		prefix: "председавајућа",
		givenName: "Александар",
		familyName: "Дероко"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'sr-Cyrl-RS'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Александар Дероко";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_sr_Cyrl_RS() {
	var name = new ilib.Name({
		prefix: "председавајућа",
		givenName: "Александар",
		familyName: "Дероко"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'sr-Cyrl-RS'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Александар Дероко";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_sr_Cyrl_RS() {
	var name = new ilib.Name({
		prefix: "председавајућа",
		givenName: "Александар",
		familyName: "Дероко"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'sr-Cyrl-RS'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "председавајућа Александар Дероко";
	
	assertEquals(expected, formatted);
};


