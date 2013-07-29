/*
 * testname_en.js - test the name object in Japanese
 * 
 * Copyright © 2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICJASE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testJAJPParseSimpleName_ja_JP() {
	var parsed = new ilib.Name("Takuya Kimura", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Takuya",
		familyName: "Kimura"
	};
	
	assertObjectContains(expected, parsed);
};



function testDEParseSimpleName_ja_JP() {
	var parsed = new ilib.Name("高橋 拓海", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "拓海",
		familyName: "高橋"
               
	};
	
	assertObjectContains(expected, parsed);
};



function testDEParseSingleNameWithPrefixAndAdjunct_ja_JP() {
	var parsed = new ilib.Name("高橋 拓海 総裁", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		 suffix : "総裁",
		givenName: "拓海",
		familyName: "高橋"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseTitle_ja_JP1() {
	var parsed = new ilib.Name("高橋 拓海 知事", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "知事",
		givenName: "拓海",
		familyName: "高橋"
	};
	
	assertObjectContains(expected, parsed);
};



function testDEParseTitleWithFamilyOnlyAndAdjunct_ja_JP() {
	var parsed = new ilib.Name("高橋 拓海 教授", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "教授",
		givenName: "拓海",
		familyName: "高橋"
	};
	
	assertObjectContains(expected, parsed);
};




function testDEParseCompoundHonorific_ja_JP() {
	var parsed = new ilib.Name("高橋 教授", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "教授",
		familyName: "高橋"
	};
	
	assertObjectContains(expected, parsed);
};

function testDEParseCompoundHonorific_ja_JP1() {
	var parsed = new ilib.Name("高橋 総裁.", {locale: 'ja-JP'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix : "総裁.",
		familyName: "高橋"
	};
	
	assertObjectContains(expected, parsed);
};
/*
 * Format Tests
 */

function testDEFormatSimpleNameShort_ja_JP() {
	var name = new ilib.Name({
		givenName: "拓海",
		familyName: "高橋"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'ja-JP'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "高橋拓海";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameMedium_ja_JP() {
	var name = new ilib.Name({
		givenName: "拓海",
		familyName: "高橋"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'ja-JP'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "高橋拓海";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameFull_ja_JP() {
	var name = new ilib.Name({
		
		givenName: "拓海",
		familyName: "高橋",
		suffix: "副大統領 ご"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'ja-JP'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "高橋拓海副大統領 ご";
	
	assertEquals(expected, formatted);
};

function testDEFormatComplexNameShort_ja_JP() {
	var name = new ilib.Name({
		suffix: "きゅう",
		givenName: "拓海",
		familyName: "高橋"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'ja-JP'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "高橋拓海";
	
	assertEquals(expected, formatted);
};


function testDEFormatAsianNameMedium_ja_JP() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'ja-JP'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testDEFormatAsianNameLong_ja_JP() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'ja-JP'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};



