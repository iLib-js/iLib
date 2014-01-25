/*
 * testname_kk.js - test the name object in Kazahk
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

function testParseSimpleName_kk() {
	var parsed = new ilib.Name("Джордж Буш", {locale: 'kk-KZ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		givenName: "Джордж",
		familyName: "Буш"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseSingleNameWithPrefixAndAdjunct_kk() {
	var parsed = new ilib.Name("үлкен Буш", {locale: 'kk-KZ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "үлкен",
		familyName: "Буш"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_kk() {
	var parsed = new ilib.Name("Джордж Буш 2-ші", {locale: 'kk-KZ'});
	assertNotUndefined(parsed);
	
	var expected =    {
		suffix: "2-ші",
		givenName: "Джордж",
		familyName: "Буш"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseEverything_kk() {
	var parsed = new ilib.Name("үлкен Джордж Буш 2-ші", {locale: 'kk-KZ'});
	assertNotUndefined(parsed);
	
	var expected =    {
		prefix: "үлкен",
		givenName: "Джордж",
		familyName: "Буш",
        suffix: "2-ші"
	};
	
	assertObjectContains(expected, parsed);
};


/*
 * Format Tests
 */

function testFormatSimpleNameShort_kk() {
	var name = new ilib.Name({
		givenName: "Джордж",
		familyName: "Буш"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'kk-KZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Джордж Буш";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_kk() {
	var name = new ilib.Name({
		givenName: "Джордж",
		familyName: "Буш"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'kk-KZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Джордж Буш";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_kk() {
	var name = new ilib.Name({
		givenName: "Джордж",
		familyName: "Буш",
		suffix: "2-ші"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'kk-KZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Джордж Буш";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_kk() {
	var name = new ilib.Name({
		prefix: "үлкен",
		givenName: "Джордж",
		familyName: "Буш",
		suffix: "2-ші"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'kk-KZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "үлкен Джордж Буш 2-ші";
	
	assertEquals(expected, formatted);
};


