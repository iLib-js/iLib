/*
 * testname_uz_Cyrl.js - test the name object in Uzbek
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

function testParseSimpleName_uz_Cyrl() {
	var parsed = new ilib.Name("Бобур Мирзаев", {locale: 'uz-Cyrl-UZ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		givenName:"Бобур",
		familyName: "Мирзаев"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseSingleNameWithPrefixAndAdjunct_uz_Cyrl() {
	var parsed = new ilib.Name("жаноб ва хоним Мирзаев", {locale: 'uz-Cyrl-UZ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "жаноб ва хоним",
		familyName: "Мирзаев"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitle_uz_Cyrl() {
	var parsed = new ilib.Name("Бобур Мирзаев кичик", {locale: 'uz-Cyrl-UZ'});
	assertNotUndefined(parsed);
	
	var expected =    {
		suffix: "кичик",
		givenName:"Бобур",
		familyName: "Мирзаев"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitleWithFamilyOnly_uz_Cyrl() {
	var parsed = new ilib.Name("доктор Мирзаев", {locale: 'uz-Cyrl-UZ'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "доктор",
		familyName: "Мирзаев"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseEverything_uz_Cyrl() {
	var parsed = new ilib.Name("доктор Бобур Мирзаев", {locale: 'uz-Cyrl-UZ'});
	assertNotUndefined(parsed);
	
	var expected =    {
		prefix: "доктор",
		givenName: "Бобур",
		familyName: "Мирзаев"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testFormatSimpleNameShort_uz_Cyrl() {
	var name = new ilib.Name({
		givenName: "Бобур",
		familyName: "Мирзаев"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'uz-Cyrl-UZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Бобур Мирзаев";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_uz_Cyrl() {
	var name = new ilib.Name({
		givenName: "Бобур",
		familyName: "Мирзаев"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'uz-Cyrl-UZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Бобур Мирзаев";
	
	assertEquals(expected, formatted);
};



function testFormatSimpleNameFull_uz_Cyrl() {
	var name = new ilib.Name({
		prefix: "доктор",
		givenName: "Бобур",
		familyName: "Мирзаев",
		suffix: "2-чи"
       });
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'uz-Cyrl-UZ'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "доктор Бобур Мирзаев 2-чи";
	
	assertEquals(expected, formatted);
};



