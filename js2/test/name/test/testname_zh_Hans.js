/*
 * testname_zh_Hans.js - test the name object in simplified Chinese
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

function testParseSimpleName_zh_Hans() {
	var parsed = new ilib.Name("蔡良", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "良",
		familyName: "蔡"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseOnePlusTwo_zh_Hans() {
	var parsed = new ilib.Name("王良会", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "良会",
		familyName: "王"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTwoPlusOne_zh_Hans() {
	var parsed = new ilib.Name("歐陽良", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "良",
		familyName: "歐陽"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTwoPlusTwo_zh_Hans() {
	var parsed = new ilib.Name("司徒良会", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "良会",
		familyName: "司徒"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseMaidenPlusMarriedName_zh_Hans() {
	var parsed = new ilib.Name("錢林慧君", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "慧君",
		familyName: "錢林"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitle_zh_Hans() {
	var parsed = new ilib.Name("老錢慧君", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "老",
		givenName: "慧君",
		familyName: "錢"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseMultipleTitles_zh_Hans() {
	var parsed = new ilib.Name("錢總理先生", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		familyName: "錢",
		suffix: "總理先生"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseEuroName_zh_Hans() {
	var parsed = new ilib.Name("Johan Schmidt", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Johan",
		familyName: "Schmidt"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseSuffix_zh_Hans() {
	var parsed = new ilib.Name("王媽媽", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "媽媽",
		familyName: "王"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitleSuffix_zh_Hans() {
	var parsed = new ilib.Name("李老師", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "老師",
		familyName: "李"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseEverything_zh_Hans() {
	var parsed = new ilib.Name("老錢林慧君外公", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "老",
		givenName: "慧君",
		familyName: "錢林",
		suffix: "外公"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testFormatNameShort_zh_Hans() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatNameMedium_zh_Hans() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatNameLong_zh_Hans() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸";
	
	assertEquals(expected, formatted);
};

function testFormatNameFull_zh_Hans() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};

function testFormatEuroNameShort_zh_Hans() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "John",
		middleName: "Robert",
		familyName: "Goffin",
		suffix: "Jr."
	}, {locale: 'zh-Hans-CN'});
	var fmt = new ilib.NameFmt({style: "short", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "John Goffin";
	
	assertEquals(expected, formatted);
};

function testFormatEuroNameWithStringShort_zh_Hans() {
	var name = new ilib.Name("Dr. John Robert Goffin Jr.", {locale: 'zh-Hans-CN'});
	var fmt = new ilib.NameFmt({style: "short", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "John Goffin";
	
	assertEquals(expected, formatted);
};

function testFormatEuroNameMedium_zh_Hans() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "John",
		middleName: "Robert",
		familyName: "Goffin",
		suffix: "Jr."
	}, {locale: 'zh-Hans-CN'});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "John Robert Goffin";
	
	assertEquals(expected, formatted);
};

function testFormatEuroNameWithStringMedium_zh_Hans() {
	var name = new ilib.Name("Dr. John Robert Goffin Jr.", {locale: 'zh-Hans-CN'});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "John Robert Goffin";
	
	assertEquals(expected, formatted);
};

function testFormatEuroNameLong_zh_Hans() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "John",
		middleName: "Robert",
		familyName: "Goffin",
		suffix: "Jr."
	}, {locale: 'zh-Hans-CN'});
	var fmt = new ilib.NameFmt({style: "long", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. John Robert Goffin";
	
	assertEquals(expected, formatted);
};

function testFormatEuroNameFull_zh_Hans() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "John",
		middleName: "Robert",
		familyName: "Goffin",
		suffix: "Jr."
	}, {locale: 'zh-Hans-CN'});
	var fmt = new ilib.NameFmt({style: "full", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. John Robert Goffin Jr.";
	
	assertEquals(expected, formatted);
};

function testFormatEuroNameWithStringLong_zh_Hans() {
	var name = new ilib.Name("Dr. John Robert Goffin Jr.", {locale: 'zh-Hans-CN'});
	var fmt = new ilib.NameFmt({style: "long", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. John Robert Goffin";
	
	assertEquals(expected, formatted);
};

function testFormatEuroNameWithStringFull_zh_Hans() {
	var name = new ilib.Name("Dr. John Robert Goffin Jr.", {locale: 'zh-Hans-CN'});
	var fmt = new ilib.NameFmt({style: "full", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. John Robert Goffin Jr.";
	
	assertEquals(expected, formatted);
};

function testParseParenSuffixName_zh_Hans() {
	var parsed = new ilib.Name("王永慶(Division A)", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "永慶",
		familyName: "王",
		suffix: "(Division A)"
	};
	
	assertObjectContains(expected, parsed);
};
function testParseParenSuffixName2_zh_Hans() {
	var parsed = new ilib.Name("王永慶 (Division A)", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "永慶",
		familyName: "王",
		suffix: " (Division A)"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseParenSuffixNameWithOtherSuffix_zh_Hans() {
	var parsed = new ilib.Name("王永慶外公(Division A)", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "永慶",
		familyName: "王",
		suffix: "外公(Division A)"
	};
	
	assertObjectContains(expected, parsed);
};
function testParseParenSuffixNameWithOtherSuffix2_zh_Hans() {
	var parsed = new ilib.Name("王永慶外公 (Division A)", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "永慶",
		familyName: "王",
		suffix: "外公 (Division A)"
	};
	
	assertObjectContains(expected, parsed);
};
function testFormatParenSuffixNameShort_zh_Hans() {
	var name = new ilib.Name({
		prefix: null,
		givenName: "永慶",
		middleName: null,
		familyName: "王",
		suffix: "(Division A)"
	});
	
	var fmt = new ilib.NameFmt({style: "short", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "王永慶";
	
	assertEquals(expected, formatted);
};
function testFormatParenSuffixNameLong_zh_Hans() {
	var name = new ilib.Name({
		prefix: null,
		givenName: "永慶",
		middleName: null,
		familyName: "王",
		suffix: "(Division A)"
	});
	
	var fmt = new ilib.NameFmt({style: "long", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "王永慶";
	
	assertEquals(expected, formatted);
};

function testFormatParenSuffixNameFull_zh_Hans() {
	var name = new ilib.Name({
		prefix: null,
		givenName: "永慶",
		middleName: null,
		familyName: "王",
		suffix: "(Division A)"
	});
	
	var fmt = new ilib.NameFmt({style: "full", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "王永慶(Division A)";
	
	assertEquals(expected, formatted);
};

function testFormatParenSuffixNameLong2_zh_Hans() {
	var name = new ilib.Name({
		prefix: null,
		givenName: "永慶",
		middleName: null,
		familyName: "王",
		suffix: " (Division A)"
	});
	
	var fmt = new ilib.NameFmt({style: "long", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "王永慶";
	
	assertEquals(expected, formatted);
};

function testFormatParenSuffixNameFull2_zh_Hans() {
	var name = new ilib.Name({
		prefix: null,
		givenName: "永慶",
		middleName: null,
		familyName: "王",
		suffix: " (Division A)"
	});
	
	var fmt = new ilib.NameFmt({style: "full", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "王永慶 (Division A)";
	
	assertEquals(expected, formatted);
};

function testFormatParenSuffixNameShortMultiple_zh_Hans() {
	var name = new ilib.Name({
		prefix: null,
		givenName: "永慶",
		middleName: null,
		familyName: "王",
		suffix: "外公(Division A)"
	});
	
	var fmt = new ilib.NameFmt({style: "short", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "王永慶";
	
	assertEquals(expected, formatted);
};
function testFormatParenSuffixNameLongMultiple_zh_Hans() {
	var name = new ilib.Name({
		prefix: null,
		givenName: "永慶",
		middleName: null,
		familyName: "王",
		suffix: "外公(Division A)"
	});
	
	var fmt = new ilib.NameFmt({style: "full", locale: 'zh-Hans-CN'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "王永慶外公(Division A)";
	
	assertEquals(expected, formatted);
};

function testParseParenSuffixNameWithSpace_zh_Hans() {
	var parsed = new ilib.Name("徐小凤 (Division A)", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "小凤",
		familyName: "徐",
		suffix: " (Division A)"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseCompoundFamilyName3_zh_Hans() {
	var parsed = new ilib.Name("司马小凤", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "小凤",
		familyName: "司马"
	};
	
	assertObjectContains(expected, parsed);
};
function testParseCompoundFamilyName4_zh_Hans() {
	var parsed = new ilib.Name("段干小凤", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "小凤",
		familyName: "段干"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseAmbiguousLengthFamilyName1_zh_Hans() {
	var parsed = new ilib.Name("鍾小凤", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "小凤",
		familyName: "鍾"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseAmbiguousLengthFamilyName2_zh_Hans() {
	var parsed = new ilib.Name("鐘離小凤", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "小凤",
		familyName: "鐘離"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseMissingNames1_zh_Hans() {
	var parsed = new ilib.Name("曲小凤", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "小凤",
		familyName: "曲"
	};
	
	assertObjectContains(expected, parsed);
};
function testParseMissingNames2_zh_Hans() {
	var parsed = new ilib.Name("揭小凤", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "小凤",
		familyName: "揭"
	};
	
	assertObjectContains(expected, parsed);
};
function testParseMissingNames3_zh_Hans() {
	var parsed = new ilib.Name("关小凤", {locale: 'zh-Hans-CN'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "小凤",
		familyName: "关"
	};
	
	assertObjectContains(expected, parsed);
};
