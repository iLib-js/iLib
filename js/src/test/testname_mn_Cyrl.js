/*
 * testname_mn_Cyrl.js - test the name object in Arabic
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

function testParseSimpleName_mn_Cyrl() {
	var parsed = new ilib.Name("Tsakhiagiin Elbegdorj", {locale: 'mn-Cyrl-MN'});
	assertNotUndefined(parsed);
	
	var expected =   {
		givenName: "Tsakhiagiin",
		familyName: "Elbegdorj"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseAdjunctNames_mn_Cyrl() {
	var parsed = new ilib.Name("Ноён ба Хатагтай Elbegdorj", {locale: 'mn-Cyrl-MN'});
	assertNotUndefined(parsed);
	
	var expected =  {
		givenName: "Ноён ба Хатагтай",
		familyName: "Elbegdorj"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSingleNameWithPrefixAndAdjunct_mn_Cyrl() {
	var parsed = new ilib.Name("xатагтай Elbegdorj", {locale: 'mn-Cyrl-MN'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "xатагтай",
		familyName: "Elbegdorj"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_mn_Cyrl() {
	var parsed = new ilib.Name("Tsakhiagiin Elbegdorj 9-р", {locale: 'mn-Cyrl-MN'});
	assertNotUndefined(parsed);
	
	var expected =    {
		suffix: "9-р",
		givenName: "Tsakhiagiin",
		familyName: "Elbegdorj"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_mn_Cyrl() {
	var parsed = new ilib.Name("mонгол yлсын eрөнхийлөгч Tsakhiagiin Elbegdorj", {locale: 'mn-Cyrl-MN'});
	assertNotUndefined(parsed);
	
	var expected =    {
		prefix: "mонгол yлсын eрөнхийлөгч",
		givenName: "Tsakhiagiin",
		familyName: "Elbegdorj"
	};
	
	assertObjectContains(expected, parsed);
};


/*
 * Format Tests
 */


function testFormatSimpleNameFull_mn_Cyrl() {
	var name = new ilib.Name({
		prefix: "mонгол Улсын Ерөнхийлөгч",
		givenName: "Tsakhiagiin",
		familyName: "Elbegdorj",
		suffix: "9-р"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'mn-Cyrl-MN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "mонгол Улсын Ерөнхийлөгч Tsakhiagiin Elbegdorj 9-р";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_mn_Cyrl() {
	var name = new ilib.Name({
		prefix: "mонгол Улсын Ерөнхийлөгч",
		givenName: "Tsakhiagiin",
		familyName: "Elbegdorj"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'mn-Cyrl-MN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Tsakhiagiin Elbegdorj";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_mn_Cyrl() {
	var name = new ilib.Name({
		prefix: "mонгол Улсын Ерөнхийлөгч",
		givenName: "Tsakhiagiin",
		familyName: "Elbegdorj"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'mn-Cyrl-MN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Tsakhiagiin Elbegdorj";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_mn_Cyrl() {
	var name = new ilib.Name({
		prefix: "mонгол Улсын Ерөнхийлөгч",
		givenName: "Tsakhiagiin",
		familyName: "Elbegdorj"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'mn-Cyrl-MN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "mонгол Улсын Ерөнхийлөгч Tsakhiagiin Elbegdorj";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameShort_mn_Cyrl() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'mn-Cyrl-MN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameMedium_mn_Cyrl() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'mn-Cyrl-MN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameLong_mn_Cyrl() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'mn-Cyrl-MN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸";
	
	assertEquals(expected, formatted);
};





