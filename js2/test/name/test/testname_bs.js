/*
 * testname_bs.js - test the name object in Bulgarian
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
function testParseSimpleName_bs() {
	var parsed = new Name("Derviš Sušić", {locale: 'bs-BA'});
	assertNotUndefined(parsed);
	
	var expected =   {
		givenName: "Derviš",
		familyName: "Sušić"  
	};
	
	assertObjectContains(expected, parsed);
};


function testParseAdjunctNames_bs() {
	var parsed = new Name("Derviš Sušić", {locale: 'bs-BA'});
	assertNotUndefined(parsed);
	
	var expected =  {
		givenName: "Derviš",
		familyName: "Sušić"  
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSingleNameWithPrefixAndAdjunct_bs() {
	var parsed = new Name("Gospodin i Gospođica Sušić", {locale: 'bs-BA'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "Gospodin i Gospođica",
		familyName: "Sušić"  
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_bs() {
	var parsed = new Name("Derviš Sušić viši", {locale: 'bs-BA'});
	assertNotUndefined(parsed);
	
	var expected =    {
		suffix: "viši",
		givenName: "Derviš",
		familyName: "Sušić"  
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_bs() {
	var parsed = new Name("predsjednik Sušić", {locale: 'bs-BA'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "predsjednik",
		familyName: "Sušić"  
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_bs() {
	var parsed = new Name("predsjednik Derviš Sušić", {locale: 'bs-BA'});
	assertNotUndefined(parsed);
	
	var expected =    {
		prefix: "predsjednik",
		givenName: "Derviš",
		familyName: "Sušić"  
	};
	
	assertObjectContains(expected, parsed);
};


/*
 * Format Tests
 */

function testFormatSimpleNameShort_bs() {
	var name = new Name({
		givenName: "Derviš",
		familyName: "Sušić"  
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'bs-BA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Derviš Sušić";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_bs() {
	var name = new Name({
		givenName: "Derviš",
		familyName: "Sušić"  
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'bs-BA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Derviš Sušić";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_bs() {
	var name = new Name({
		givenName: "Derviš",
		
		familyName: "Sušić"  ,
		suffix: "viši"
	});
	var fmt = new NameFmt({
		style: "long", 
		locale: 'bs-BA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Derviš Sušić";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_bs() {
	var name = new Name({
		prefix: "Gospodin",
		givenName: "Derviš",
		familyName: "Sušić"  ,
		suffix: "viši"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'bs-BA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Gospodin Derviš Sušić viši";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_bs() {
	var name = new Name({
		prefix: "Gospodin",
		givenName: "Derviš",
		familyName: "Sušić"  
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'bs-BA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Derviš Sušić";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_bs() {
	var name = new Name({
		prefix: "Gospodin",
		givenName: "Derviš",
		familyName: "Sušić"  
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'bs-BA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Derviš Sušić";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_bs() {
	var name = new Name({
		prefix: "Gospodin",
		givenName: "Derviš",
		familyName: "Sušić"  
	});
	var fmt = new NameFmt({
		style: "full",
		locale: 'bs-BA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Gospodin Derviš Sušić";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameShort_bs() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new NameFmt({
		style: "short", 
		locale: 'bs-BA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameMedium_bs() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new NameFmt({
		style: "medium", 
		locale: 'bs-BA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameLong_bs() {
	var name = new Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new NameFmt({
		style: "full", 
		locale: 'bs-BA'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸";
	
	assertEquals(expected, formatted);
};





