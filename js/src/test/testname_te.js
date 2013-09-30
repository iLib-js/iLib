/*
 * testname_te_IN.js - test the name object in Telgu
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

function testParseSimpleName_te_IN() {
	var parsed = new ilib.Name("రామ్ తేజ", {locale: 'te-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "రామ్",
		familyName: "తేజ"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitle_te_IN() {
	var parsed = new ilib.Name("రామ్ తేజ సీనియర్", {locale: 'te-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "సీనియర్",
		givenName: "రామ్",
		familyName: "తేజ"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseTitleWithFamilyOnly_te_IN() {
	var parsed = new ilib.Name("మిస్టర్ తేజ", {locale: 'te-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "మిస్టర్",
		familyName: "తేజ"
	};
	
	assertObjectContains(expected, parsed);
};



function testParseEverything_te_IN() {
	var parsed = new ilib.Name("మిస్టర్ మరియు మిస్ తేజ", {locale: 'te-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "మిస్టర్ మరియు మిస్",
		familyName: "తేజ"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseprefix_te_IN() {
	var parsed = new ilib.Name("మిస్టర్ రామ్ తేజ", {locale: 'te-IN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "మిస్టర్",
		givenName: "రామ్",
		familyName: "తేజ"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testFormatSimpleNameShort_te_IN() {
	var name = new ilib.Name({
		givenName: "రామ్",
		familyName: "తేజ"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'te-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "రామ్ తేజ";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_te_IN() {
	var name = new ilib.Name({
		givenName: "రామ్",
		
		familyName: "తేజ"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'te-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "రామ్ తేజ";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameLong_te_IN() {
	var name = new ilib.Name({
		givenName: "రామ్",
		
		familyName: "తేజ"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'te-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "రామ్ తేజ";
	
	assertEquals(expected, formatted);
};

function testFormatSurname_te_IN() {
	var name = new ilib.Name({
		prefix: "మిస్టర్ మరియు మిస్",
		
		familyName: "తేజ"
	});
	var fmt = new ilib.NameFmt({
		style: "long", 
		locale: 'te-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "మిస్టర్ మరియు మిస్ తేజ";
	
	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_te_IN() {
	var name = new ilib.Name({
		prefix: "డాక్టర్",
		givenName: "రామ్",
		
		familyName: "తేజ",
		suffix: "జూనియర్"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'te-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "డాక్టర్ రామ్ తేజ జూనియర్";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_te_IN() {
	var name = new ilib.Name({
		prefix: "డాక్టర్",
		givenName: "రామ్",
		familyName: "తేజ"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'te-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "రామ్ తేజ";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameMedium_te_IN() {
	var name = new ilib.Name({
		prefix: "డాక్టర్",
		givenName: "రామ్",
		familyName: "తేజ"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'te-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "రామ్ తేజ";
	
	assertEquals(expected, formatted);
};

function testFormatComplexNameLong_te_IN() {
	var name = new ilib.Name({
		prefix: "డాక్టర్",
		givenName: "రామ్",
		familyName: "తేజ"
	});
	var fmt = new ilib.NameFmt({
		style: "full",
		locale: 'te-IN'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "డాక్టర్ రామ్ తేజ";
	
	assertEquals(expected, formatted);
};


