/*
 * testname_en.js - test the name object in Japanese
 * 
 * Copyright © 2013-2015, JEDLSoft
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

function testParseSimpleNameEuro_ja_JP() {
	var parsed = new ilib.Name("Takuya Kimura", {locale: 'ja-JP'});
	assertNotUndefined(parsed);

	var expected = {
		givenName: "Takuya",
		familyName: "Kimura"
	};

	assertObjectContains(expected, parsed);
};

function testParseSimpleNameAsian_ja_JP() {
	var parsed = new ilib.Name("高橋弘樹", {locale: 'ja-JP'});
	assertNotUndefined(parsed);

	var expected = {
		givenName: "弘樹",
		familyName: "高橋"
	};

	assertObjectContains(expected, parsed);
};

function testParseSingleNameWithPrefixAndAdjunct_ja_JP() {
	var parsed = new ilib.Name("高橋弘樹さん", {locale: 'ja-JP'});
	assertNotUndefined(parsed);

	var expected = {
		suffix : "さん",
		givenName: "弘樹",
		familyName: "高橋"
	};

	assertObjectContains(expected, parsed);
};

function testParseTitle_ja_JP1() {
	var parsed = new ilib.Name("高橋弘樹知事", {locale: 'ja-JP'});
	assertNotUndefined(parsed);

	var expected = {
		suffix: "知事",
		givenName: "弘樹",
		familyName: "高橋"
	};

	assertObjectContains(expected, parsed);
};

function testParseTitleWithFamilyOnlyAndAdjunct_ja_JP() {
	var parsed = new ilib.Name("高橋弘樹教授", {locale: 'ja-JP'});
	assertNotUndefined(parsed);

	var expected = {
		suffix: "教授",
		givenName: "弘樹",
		familyName: "高橋"
	};

	assertObjectContains(expected, parsed);
};

function testParseCompoundHonorific_ja_JP() {
	var parsed = new ilib.Name("高橋教授", {locale: 'ja-JP'});
	assertNotUndefined(parsed);

	var expected = {
		suffix: "教授",
		familyName: "高橋"
	};

	assertObjectContains(expected, parsed);
};

function testParseCompoundHonorific_ja_JP1() {
	var parsed = new ilib.Name("高橋総裁", {locale: 'ja-JP'});
	assertNotUndefined(parsed);

	var expected = {
		suffix : "総裁",
		familyName: "高橋"
	};

	assertObjectContains(expected, parsed);
};

function testParseFamilyName_ja_JP1() {
	var parsed = new ilib.Name("佐々木主浩", {locale: 'ja-JP'});
	assertNotUndefined(parsed);

	var expected = {
		givenName : "主浩",
		familyName: "佐々木"
	};

	assertObjectContains(expected, parsed);
};


function testParseWithLongMixedName_ja_JP() {
	var parsed = new ilib.Name("佐々木主浩/Software Engineer", {locale: "ja-JP"});
	assertNotUndefined(parsed);	
	var expected = {
		givenName : "主浩",
		familyName: "佐々木",
		suffix: "/Software Engineer"
	};
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testFormatSimpleNameShort_ja_JP() {
	var name = new ilib.Name({
		givenName: "弘樹",
		familyName: "高橋"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'ja-JP'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);

	var expected = "高橋弘樹";

	assertEquals(expected, formatted);
};

function testFormatSimpleNameMedium_ja_JP() {
	var name = new ilib.Name({
		givenName: "弘樹",
		familyName: "高橋"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'ja-JP'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);

	var expected = "高橋弘樹";

	assertEquals(expected, formatted);
};

function testFormatSimpleNameFull_ja_JP() {
	var name = new ilib.Name({
		givenName: "弘樹",
		familyName: "高橋",
		suffix: "副大統領ご"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'ja-JP'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);

	var expected = "高橋弘樹副大統領ご";

	assertEquals(expected, formatted);
};

function testFormatComplexNameShort_ja_JP() {
	var name = new ilib.Name({
		suffix: "きゅう",
		givenName: "弘樹",
		familyName: "高橋"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'ja-JP'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);

	var expected = "高橋弘樹";

	assertEquals(expected, formatted);
};


function testFormatAsianNameMedium_ja_JP() {
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

function testFormatAsianNameLong_ja_JP() {
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
