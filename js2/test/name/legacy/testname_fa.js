/*
 * testname_fa.js - test the name object in Farsi
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

function testParseSimpleName_fa() {
	var parsed = new ilib.Name("لیلا میلانی", {locale: 'fa-IR'});
	assertNotUndefined(parsed);
	
	var expected =   {
		givenName: "لیلا",
		familyName: "میلانی"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseAdjunctNames_fa() {
	var parsed = new ilib.Name("لیلا میلانی", {locale: 'fa-IR'});
	assertNotUndefined(parsed);
	
	var expected =  {
		givenName: "لیلا",
		familyName: "میلانی"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSingleNameWithPrefixAndAdjunct_fa() {
	var parsed = new ilib.Name("آقای ﻭ خانم میلانی", {locale: 'fa-IR'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "آقای ﻭ خانم",
		familyName: "میلانی"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_fa() {
	var parsed = new ilib.Name("لیلا میلانی ﺙﺎﻠﺛﺍ", {locale: 'fa-IR'});
	assertNotUndefined(parsed);
	
	var expected =    {
		suffix: "ﺙﺎﻠﺛﺍ",
		givenName: "لیلا",
		familyName: "میلانی"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_fa() {
	var parsed = new ilib.Name("خانم میلانی", {locale: 'fa-IR'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "خانم",
		familyName: "میلانی"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_fa() {
	var parsed = new ilib.Name("خانم لیلا میلانی", {locale: 'fa-IR'});
	assertNotUndefined(parsed);
	
	var expected =    {
		prefix: "خانم",
		givenName: "لیلا",
		familyName: "میلانی"
	};
	
	assertObjectContains(expected, parsed);
};


/*
 * Format Tests
 */

function testFormatSimpleNameShort_fa() {
	var name = new ilib.Name({
		givenName: "لیلا",
		familyName: "میلانی"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'fa-IR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "لیلا میلانی";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_fa() {
	var name = new ilib.Name({
		givenName: "لیلا",
		familyName: "میلانی"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'fa-IR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "لیلا میلانی";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_fa() {
	var name = new ilib.Name({
		givenName: "لیلا",
		familyName: "میلانی",
		suffix: "ﺙﺎﻠﺛﺍ"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'fa-IR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "لیلا میلانی";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_fa() {
	var name = new ilib.Name({
		prefix: "خانم",
		givenName: "لیلا",
		familyName: "میلانی",
		suffix: "ﺙﺎﻠﺛﺍ"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'fa-IR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "خانم لیلا میلانی ﺙﺎﻠﺛﺍ";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_fa() {
	var name = new ilib.Name({
		prefix: "خانم",
		givenName: "لیلا",
		familyName: "میلانی"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'fa-IR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "لیلا میلانی";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_fa() {
	var name = new ilib.Name({
		prefix: "خانم",
		givenName: "لیلا",
		familyName: "میلانی"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'fa-IR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "لیلا میلانی";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_fa() {
	var name = new ilib.Name({
		prefix: "خانم",
		givenName: "لیلا",
		familyName: "میلانی"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'fa-IR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "خانم لیلا میلانی";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameShort_fa() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'fa-IR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameMedium_fa() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'fa-IR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameLong_fa() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'fa-IR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸";
	
	assertEquals(expected, formatted);
};





