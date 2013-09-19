/*
 * testname_zh_Hant.js - test the name object in traditional Chinese
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

function testParseSimpleName_zh_Hant() {
	var parsed = new ilib.Name("仇鬆鴉", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "鬆鴉",
		familyName: "仇"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseOnePlusTwo_zh_Hant() {
	var parsed = new ilib.Name("Jay Chóu", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jay",
		familyName: "Chóu"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTwoPlusOne_zh_Hant() {
	var parsed = new ilib.Name("褚师迪", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "迪",
		familyName: "褚师"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTwoPlusTwo_zh_Hant() {
	var parsed = new ilib.Name("褚师鬆鴉", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "鬆鴉",
		familyName: "褚师"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseMaidenPlusMarriedName_zh_Hant() {
	var parsed = new ilib.Name("錢林慧君", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "慧君",
		familyName: "錢林"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitle_zh_Hant() {
	var parsed = new ilib.Name("老錢慧君", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "老",
		givenName: "慧君",
		familyName: "錢"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseMultipleTitles_zh_Hant() {
	var parsed = new ilib.Name("錢首席執行官", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		familyName: "錢",
		suffix: "首席執行官"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseEuroName_zh_Hant() {
	var parsed = new ilib.Name("Jackie Chan", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Jackie",
		familyName: "Chan"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseSuffix_zh_Hant() {
	var parsed = new ilib.Name("王媽媽", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "媽媽",
		familyName: "王"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseTitleSuffix_zh_Hant() {
	var parsed = new ilib.Name("李老師", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		suffix: "老師",
		familyName: "李"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseEverything_zh_Hant() {
	var parsed = new ilib.Name("老錢林慧君外公", {locale: 'zh-Hant-TW'});
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

function testFormatNameShort_zh_Hant() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "short", locale: 'zh-Hant-TW'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatNameMedium_zh_Hant() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'zh-Hant-TW'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testFormatNameLong_zh_Hant() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "long", locale: 'zh-Hant-TW'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸";
	
	assertEquals(expected, formatted);
};

function testFormatNameFull_zh_Hant() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({style: "full", locale: 'zh-Hant-TW'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};

function testFormatEuroNameShort_zh_Hant() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "John",
		middleName: "Robert",
		familyName: "Goffin",
		suffix: "Jr."
	}, {locale: 'zh-Hant-TW'});
	var fmt = new ilib.NameFmt({style: "short", locale: 'zh-Hant-TW'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "John Goffin";
	
	assertEquals(expected, formatted);
};



function testFormatEuroNameMedium_zh_Hant() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "John",
		middleName: "Robert",
		familyName: "Goffin",
		suffix: "Jr."
	}, {locale: 'zh-Hant-TW'});
	var fmt = new ilib.NameFmt({style: "medium", locale: 'zh-Hant-TW'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "John Robert Goffin";
	
	assertEquals(expected, formatted);
};


function testFormatEuroNameLong_zh_Hant() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "John",
		middleName: "Robert",
		familyName: "Goffin",
		suffix: "Jr."
	}, {locale: 'zh-Hant-TW'});
	var fmt = new ilib.NameFmt({style: "long", locale: 'zh-Hant-TW'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. John Robert Goffin";
	
	assertEquals(expected, formatted);
};

function testFormatEuroNameFull_zh_Hant() {
	var name = new ilib.Name({
		prefix: "Dr.",
		givenName: "John",
		middleName: "Robert",
		familyName: "Goffin",
		suffix: "Jr."
	}, {locale: 'zh-Hant-TW'});
	var fmt = new ilib.NameFmt({style: "full", locale: 'zh-Hant-TW'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. John Robert Goffin Jr.";
	
	assertEquals(expected, formatted);
};

function testFormatEuroNameWithStringLong_zh_Hant() {
	var name = new ilib.Name("Dr. John Robert Goffin", {locale: 'zh-Hant-TW'});
	var fmt = new ilib.NameFmt({style: "long", locale: 'zh-Hant-TW'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. John Robert Goffin";
	
	assertEquals(expected, formatted);
};

function testFormatEuroNameWithStringFull_zh_Hant() {
	var name = new ilib.Name("Dr. John Robert Goffin Jr.", {locale: 'zh-Hant-TW'});
	var fmt = new ilib.NameFmt({style: "full", locale: 'zh-Hant-TW'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dr. John Robert Goffin Jr.";
	
	assertEquals(expected, formatted);
};

function testParseParenSuffixName_zh_Hant() {
	var parsed = new ilib.Name("王永慶(Division A)", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "永慶",
		familyName: "王",
		suffix: "(Division A)"
	};
	
	assertObjectContains(expected, parsed);
};
function testParseParenSuffixName2_zh_Hant() {
	var parsed = new ilib.Name("王永慶 (Division A)", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "永慶",
		familyName: "王",
		suffix: " (Division A)"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseParenSuffixNameWithOtherSuffix_zh_Hant() {
	var parsed = new ilib.Name("王永慶外公(Division A)", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "永慶",
		familyName: "王",
		suffix: "外公(Division A)"
	};
	
	assertObjectContains(expected, parsed);
};
function testParseParenSuffixNameWithOtherSuffix2_zh_Hant() {
	var parsed = new ilib.Name("王永慶外公 (Division A)", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "永慶",
		familyName: "王",
		suffix: "外公 (Division A)"
	};
	
	assertObjectContains(expected, parsed);
};
function testFormatParenSuffixNameShort_zh_Hant() {
	var name = new ilib.Name({
		prefix: null,
		givenName: "永慶",
		middleName: null,
		familyName: "王",
		suffix: "(Division A)"
	});
	
	var fmt = new ilib.NameFmt({style: "short", locale: 'zh-Hant-TW'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "王永慶";
	
	assertEquals(expected, formatted);
};
function testFormatParenSuffixNameLong_zh_Hant() {
	var name = new ilib.Name({
		prefix: null,
		givenName: "永慶",
		middleName: null,
		familyName: "王",
		suffix: "(Division A)"
	});
	
	var fmt = new ilib.NameFmt({style: "long", locale: 'zh-Hant-TW'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "王永慶";
	
	assertEquals(expected, formatted);
};

function testFormatParenSuffixNameFull_zh_Hant() {
	var name = new ilib.Name({
		prefix: null,
		givenName: "永慶",
		middleName: null,
		familyName: "王",
		suffix: "(Division A)"
	});
	
	var fmt = new ilib.NameFmt({style: "full", locale: 'zh-Hant-TW'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "王永慶(Division A)";
	
	assertEquals(expected, formatted);
};

function testFormatParenSuffixNameLong2_zh_Hant() {
	var name = new ilib.Name({
		prefix: null,
		givenName: "永慶",
		middleName: null,
		familyName: "王",
		suffix: " (Division A)"
	});
	
	var fmt = new ilib.NameFmt({style: "long", locale: 'zh-Hant-TW'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "王永慶";
	
	assertEquals(expected, formatted);
};

function testFormatParenSuffixNameFull2_zh_Hant() {
	var name = new ilib.Name({
		prefix: null,
		givenName: "永慶",
		middleName: null,
		familyName: "王",
		suffix: " (Division A)"
	});
	
	var fmt = new ilib.NameFmt({style: "full", locale: 'zh-Hant-TW'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "王永慶 (Division A)";
	
	assertEquals(expected, formatted);
};

function testFormatParenSuffixNameShortMultiple_zh_Hant() {
	var name = new ilib.Name({
		prefix: null,
		givenName: "永慶",
		middleName: null,
		familyName: "王",
		suffix: "外公(Division A)"
	});
	
	var fmt = new ilib.NameFmt({style: "short", locale: 'zh-Hant-TW'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "王永慶";
	
	assertEquals(expected, formatted);
};
function testFormatParenSuffixNameLongMultiple_zh_Hant() {
	var name = new ilib.Name({
		prefix: null,
		givenName: "永慶",
		middleName: null,
		familyName: "王",
		suffix: "外公(Division A)"
	});
	
	var fmt = new ilib.NameFmt({style: "full", locale: 'zh-Hant-TW'});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "王永慶外公(Division A)";
	
	assertEquals(expected, formatted);
};

function testParseParenSuffixNameWithSpace_zh_Hant() {
	var parsed = new ilib.Name("徐小凤 (Division A)", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "小凤",
		familyName: "徐",
		suffix: " (Division A)"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseCompoundFamilyName3_zh_Hant() {
	var parsed = new ilib.Name("司马小凤", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "小凤",
		familyName: "司马"
	};
	
	assertObjectContains(expected, parsed);
};
function testParseCompoundFamilyName4_zh_Hant() {
	var parsed = new ilib.Name("段干小凤", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "小凤",
		familyName: "段干"
	};
	
	assertObjectContains(expected, parsed);
};


function testParseAmbiguousLengthFamilyName1_zh_Hant() {
	var parsed = new ilib.Name("鍾小凤", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "小凤",
		familyName: "鍾"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseAmbiguousLengthFamilyName2_zh_Hant() {
	var parsed = new ilib.Name("鐘離小凤", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "小凤",
		familyName: "鐘離"
	};
	
	assertObjectContains(expected, parsed);
};

function testParseMissingNames1_zh_Hant() {
	var parsed = new ilib.Name("曲小凤", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "小凤",
		familyName: "曲"
	};
	
	assertObjectContains(expected, parsed);
};
function testParseMissingNames2_zh_Hant() {
	var parsed = new ilib.Name("揭小凤", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "小凤",
		familyName: "揭"
	};
	
	assertObjectContains(expected, parsed);
};
function testParseMissingNames3_zh_Hant() {
	var parsed = new ilib.Name("关小凤", {locale: 'zh-Hant-TW'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "小凤",
		familyName: "关"
	};
	
	assertObjectContains(expected, parsed);
};
