/*
 * testname_ku_Arab.js - test the name object in Kurdish
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

function testParseSimpleName_ku_Arab() {
	var parsed = new ilib.Name("جەلال تاڵەبانی", {locale: 'ku-Arab-IQ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		givenName: "جەلال",
		familyName: "تاڵەبانی"
	};
	
	assertObjectContains(expected, parsed);
};





function testParseSingleNameWithPrefixAndAdjunct_ku_Arab() {
	var parsed = new ilib.Name("بەڕێز و خاتوو تاڵەبانی", {locale: 'ku-Arab-IQ'});
	assertNotUndefined(parsed);
	
	var expected =  {
		prefix: "بەڕێز و خاتوو",
		familyName: "تاڵەبانی"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_ku_Arab() {
	var parsed = new ilib.Name("جەلال تاڵەبانی کوڕ", {locale: 'ku-Arab-IQ'});
	assertNotUndefined(parsed);
	
	var expected =    {
		suffix: "کوڕ",
		givenName: "جەلال",
		familyName: "تاڵەبانی"
	};
	
	assertObjectContains(expected, parsed);
};





function testParseEverything_ku_Arab() {
	var parsed = new ilib.Name("بەڕێز جەلال تاڵەبانی", {locale: 'ku-Arab-IQ'});
	assertNotUndefined(parsed);
	
	var expected =    {
		prefix: "بەڕێز",
		givenName: "جەلال",
		familyName: "تاڵەبانی"
	};
	
	assertObjectContains(expected, parsed);
};


/*
 * Format Tests
 */

function testFormatSimpleNameShort_ku_Arab() {
	var name = new ilib.Name({
		givenName: "جەلال",
		familyName: "تاڵەبانی"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'ku-Arab-IQ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "جەلال تاڵەبانی";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_ku_Arab() {
	var name = new ilib.Name({
		givenName: "جەلال",
		familyName: "تاڵەبانی"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'ku-Arab-IQ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "جەلال تاڵەبانی";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_ku_Arab() {
	var name = new ilib.Name({
		givenName: "جەلال",
		
		familyName: "تاڵەبانی",
		suffix: "کوڕ"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'ku-Arab-IQ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "جەلال تاڵەبانی کوڕ";
	
	assertEquals(expected, formatted);
};







