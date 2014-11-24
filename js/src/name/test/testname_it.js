/*
 * testname_it_IT.js - test the name object in Italian
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

function testParseSimpleName_it_IT() {
	var parsed = new ilib.Name("Leonardo DiCaprio", {locale: 'it-IT'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Leonardo",
		familyName: "DiCaprio"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitle_it_IT() {
	var parsed = new ilib.Name("Leonardo DiCaprio", {locale: 'it-IT'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Leonardo",
		familyName: "DiCaprio"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_it_IT() {
	var parsed = new ilib.Name("ingegnere. DiCaprio", {locale: 'it-IT'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "ingegnere.",
		familyName: "DiCaprio"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_it_IT() {
	var parsed = new ilib.Name("ingegnere Leonardo DiCaprio", {locale: 'it-IT'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "ingegnere",
		givenName: "Leonardo",
		familyName: "DiCaprio"
	};
	
	assertObjectContains(expected, parsed);
};


/*
 * Format Tests
 */

function testFormatSimpleNameShort_it_IT() {
	var name = new ilib.Name({
		givenName: "Leonardo",
		familyName: "DiCaprio"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'it-IT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Leonardo DiCaprio";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_it_IT() {
	var name = new ilib.Name({
		givenName: "Leonardo",
		
		familyName: "DiCaprio"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'it-IT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Leonardo DiCaprio";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_it_IT() {
	var name = new ilib.Name({
		givenName: "Leonardo",
		
		familyName: "DiCaprio",
		suffix: "asdf"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'it-IT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Leonardo DiCaprio";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_it_IT() {
	var name = new ilib.Name({
		prefix: "dottore",
		givenName: "Leonardo",
		
		familyName: "DiCaprio"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'it-IT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "dottore Leonardo DiCaprio";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_it_IT() {
	var name = new ilib.Name({
		prefix: "dottore",
		givenName: "Leonardo",
		familyName: "DiCaprio"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'it-IT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Leonardo DiCaprio";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_it_IT() {
	var name = new ilib.Name({
		prefix: "dottore",
		givenName: "Leonardo",
		familyName: "DiCaprio"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'it-IT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Leonardo DiCaprio";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_it_IT() {
	var name = new ilib.Name({
		prefix: "dottore",
		givenName: "Leonardo",
		familyName: "DiCaprio"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'it-IT'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "dottore Leonardo DiCaprio";
	
	assertEquals(expected, formatted);
};


