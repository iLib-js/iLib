/*
 * testname_uz_Latn.js - test the name object in Uzbek
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

function testParseSimpleName_uz_Latn() {
	var parsed = new ilib.Name("Anastasia Gimazetdinova", {locale: 'uz-Latn-UZ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		givenName: "Anastasia",
		familyName: "Gimazetdinova"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseAdjunctNames_uz_Latn() {
	var parsed = new ilib.Name("Anastasia Gimazetdinova", {locale: 'uz-Latn-UZ'});
	assertNotUndefined(parsed);
	
	var expected =  {
		givenName: "Anastasia",
		familyName: "Gimazetdinova"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSingleNameWithPrefixAndAdjunct_uz_Latn() {
	var parsed = new ilib.Name("Janob va xonim Gimazetdinova", {locale: 'uz-Latn-UZ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "Janob va xonim",
		familyName: "Gimazetdinova"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_uz_Latn() {
	var parsed = new ilib.Name("Anastasia Gimazetdinova katta", {locale: 'uz-Latn-UZ'});
	assertNotUndefined(parsed);
	
	var expected =    {
		suffix: "katta",
		givenName: "Anastasia",
		familyName: "Gimazetdinova"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_uz_Latn() {
	var parsed = new ilib.Name("janob Gimazetdinova", {locale: 'uz-Latn-UZ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "janob",
		familyName: "Gimazetdinova"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_uz_Latn() {
	var parsed = new ilib.Name("janob Anastasia Gimazetdinova", {locale: 'uz-Latn-UZ'});
	assertNotUndefined(parsed);
	
	var expected =    {
		prefix: "janob",
		givenName: "Anastasia",
		familyName: "Gimazetdinova"
	};
	
	assertObjectContains(expected, parsed);
};


/*
 * Format Tests
 */

function testFormatSimpleNameShort_uz_Latn() {
	var name = new ilib.Name({
		givenName: "Anastasia",
		familyName: "Gimazetdinova"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'uz-Latn-UZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Anastasia Gimazetdinova";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_uz_Latn() {
	var name = new ilib.Name({
		givenName: "Anastasia",
		familyName: "Gimazetdinova"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'uz-Latn-UZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Anastasia Gimazetdinova";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_uz_Latn() {
	var name = new ilib.Name({
		givenName: "Anastasia",
		
		familyName: "Gimazetdinova",
		suffix: "kichik"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'uz-Latn-UZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Anastasia Gimazetdinova";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_uz_Latn() {
	var name = new ilib.Name({
		prefix: "xonim",
		givenName: "Anastasia",
		familyName: "Gimazetdinova",
		suffix: "kichik"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'uz-Latn-UZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "xonim Anastasia Gimazetdinova kichik";
	
	assertEquals(expected, formatted);
};


