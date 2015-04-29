/*
 * testname_he.js - test the name object in Hebrew
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

function testParseSimpleName_he() {
	var parsed = new ilib.Name("נטלי פורטמן", {locale: 'he-IL'});
	assertNotUndefined(parsed);
	
	var expected =   {
		givenName: "נטלי",
		familyName: "פורטמן"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseAdjunctNames_he() {
	var parsed = new ilib.Name("נטלי פורטמן", {locale: 'he-IL'});
	assertNotUndefined(parsed);
	
	var expected =  {
		givenName: "נטלי",
		familyName: "פורטמן"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseSingleNameWithPrefixAndAdjunct_he() {
	var parsed = new ilib.Name("מר ו - גברת פורטמן", {locale: 'he-IL'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "מר ו - גברת",
		familyName: "פורטמן"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseTitle_he() {
	var parsed = new ilib.Name("נטלי פורטמן דוקטור", {locale: 'he-IL'});
	assertNotUndefined(parsed);
	
	var expected =    {
		suffix: "דוקטור",
		givenName: "נטלי",
		familyName: "פורטמן"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_he() {
	var parsed = new ilib.Name("גברת פורטמן", {locale: 'he-IL'});
	assertNotUndefined(parsed);
	
	var expected =   {
		prefix: "גברת",
		familyName: "פורטמן"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_he() {
	var parsed = new ilib.Name("גברת נטלי פורטמן", {locale: 'he-IL'});
	assertNotUndefined(parsed);
	
	var expected =    {
		prefix: "גברת",
		givenName: "נטלי",
		familyName: "פורטמן"
	};
	
	assertObjectContains(expected, parsed);
};


/*
 * Format Tests
 */

function testFormatSimpleNameShort_he() {
	var name = new ilib.Name({
		givenName: "נטלי",
		familyName: "פורטמן"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'he-IL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "נטלי פורטמן";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_he() {
	var name = new ilib.Name({
		givenName: "נטלי",
		familyName: "פורטמן"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'he-IL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "נטלי פורטמן";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_he() {
	var name = new ilib.Name({
		givenName: "נטלי",
		familyName: "פורטמן",
		suffix: "דוקטור"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'he-IL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "נטלי פורטמן";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_he() {
	var name = new ilib.Name({
		prefix: "ראש הממשלה",
		givenName: "נטלי",
		
		familyName: "פורטמן",
		suffix: "לשעבר"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'he-IL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ראש הממשלה נטלי פורטמן לשעבר";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_he() {
	var name = new ilib.Name({
		prefix: "ראש הממשלה",
		givenName: "נטלי",
		
		familyName: "פורטמן",
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'he-IL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "נטלי פורטמן";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_he() {
	var name = new ilib.Name({
		prefix: "ראש הממשלה",
		givenName: "נטלי",
		
		familyName: "פורטמן",
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'he-IL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "נטלי פורטמן";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_he() {
	var name = new ilib.Name({
		prefix: "ראש הממשלה",
		givenName: "נטלי",
		
		familyName: "פורטמן",
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'he-IL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "ראש הממשלה נטלי פורטמן";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameShort_he() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'he-IL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameMedium_he() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'he-IL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatAsianNameLong_he() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'he-IL'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸";
	
	assertEquals(expected, formatted);
};





