/*
 * testname_zh_Hans.js - test the name object in simplified Chinese
 * 
 * Copyright © 2013-2015,2017, JEDLSoft
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

if (typeof(NameFmt) === "undefined") {
    var NameFmt = require("../.././../lib/NameFmt.js");
}
if (typeof(Name) === "undefined") {
    var Name = require("../.././../lib/Name.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testname_zh_Hans = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseSimpleName_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("蔡良", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "良",
            familyName: "蔡"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseOnePlusTwo_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("王良会", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "良会",
            familyName: "王"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTwoPlusOne_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("歐陽良", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "良",
            familyName: "歐陽"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTwoPlusTwo_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("司徒良会", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "良会",
            familyName: "司徒"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseMaidenPlusMarriedName_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("錢林慧君", {locale: 'zh-Hans-CN', compoundFamilyName: true});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "慧君",
            familyName: "錢林"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitle_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("老錢慧君", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "老",
            givenName: "慧君",
            familyName: "錢"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseMultipleTitles_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("錢總理先生", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            familyName: "錢",
            suffix: "總理先生"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseEuroName_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("Johan Schmidt", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "Johan",
            familyName: "Schmidt"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseSuffix_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("王媽媽", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix: "媽媽",
            familyName: "王"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseTitleSuffix_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("李老師", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            suffix: "老師",
            familyName: "李"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseEverything_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("老錢林慧君外公", {locale: 'zh-Hans-CN', compoundFamilyName: true});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            prefix: "老",
            givenName: "慧君",
            familyName: "錢林",
            suffix: "外公"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    /*
     * Format Tests
     */
    
    testFormatNameShort_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({style: "short", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatNameMedium_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({style: "medium", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatNameLong_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({style: "long", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "小地獸";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatNameFull_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        var fmt = new NameFmt({style: "full", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "小地獸太太";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatEuroNameShort_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Dr.",
            givenName: "John",
            middleName: "Robert",
            familyName: "Goffin",
            suffix: "Jr."
        }, {locale: 'zh-Hans-CN'});
        var fmt = new NameFmt({style: "short", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "John Goffin";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatEuroNameWithStringShort_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name("Dr. John Robert Goffin Jr.", {locale: 'zh-Hans-CN'});
        var fmt = new NameFmt({style: "short", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "John Goffin";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatEuroNameMedium_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Dr.",
            givenName: "John",
            middleName: "Robert",
            familyName: "Goffin",
            suffix: "Jr."
        }, {locale: 'zh-Hans-CN'});
        var fmt = new NameFmt({style: "medium", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "John Robert Goffin";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatEuroNameWithStringMedium_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name("Dr. John Robert Goffin Jr.", {locale: 'zh-Hans-CN'});
        var fmt = new NameFmt({style: "medium", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "John Robert Goffin";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatEuroNameLong_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Dr.",
            givenName: "John",
            middleName: "Robert",
            familyName: "Goffin",
            suffix: "Jr."
        }, {locale: 'zh-Hans-CN'});
        var fmt = new NameFmt({style: "long", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Dr. John Robert Goffin";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatEuroNameFull_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: "Dr.",
            givenName: "John",
            middleName: "Robert",
            familyName: "Goffin",
            suffix: "Jr."
        }, {locale: 'zh-Hans-CN'});
        var fmt = new NameFmt({style: "full", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Dr. John Robert Goffin Jr.";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatEuroNameWithStringLong_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name("Dr. John Robert Goffin Jr.", {locale: 'zh-Hans-CN'});
        var fmt = new NameFmt({style: "long", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Dr. John Robert Goffin";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatEuroNameWithStringFull_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name("Dr. John Robert Goffin Jr.", {locale: 'zh-Hans-CN'});
        var fmt = new NameFmt({style: "full", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "Dr. John Robert Goffin Jr.";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testParseParenSuffixName_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("王永慶(Division A)", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "永慶",
            familyName: "王",
            suffix: "(Division A)"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    testParseParenSuffixName2_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("王永慶 (Division A)", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "永慶",
            familyName: "王",
            suffix: " (Division A)"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseParenSuffixNameWithOtherSuffix_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("王永慶外公(Division A)", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "永慶",
            familyName: "王",
            suffix: "外公(Division A)"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    testParseParenSuffixNameWithOtherSuffix2_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("王永慶外公 (Division A)", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "永慶",
            familyName: "王",
            suffix: "外公 (Division A)"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    testFormatParenSuffixNameShort_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: null,
            givenName: "永慶",
            middleName: null,
            familyName: "王",
            suffix: "(Division A)"
        });
        
        var fmt = new NameFmt({style: "short", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "王永慶";
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatParenSuffixNameLong_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: null,
            givenName: "永慶",
            middleName: null,
            familyName: "王",
            suffix: "(Division A)"
        });
        
        var fmt = new NameFmt({style: "long", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "王永慶";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatParenSuffixNameFull_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: null,
            givenName: "永慶",
            middleName: null,
            familyName: "王",
            suffix: "(Division A)"
        });
        
        var fmt = new NameFmt({style: "full", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "王永慶(Division A)";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatParenSuffixNameLong2_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: null,
            givenName: "永慶",
            middleName: null,
            familyName: "王",
            suffix: " (Division A)"
        });
        
        var fmt = new NameFmt({style: "long", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "王永慶";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatParenSuffixNameFull2_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: null,
            givenName: "永慶",
            middleName: null,
            familyName: "王",
            suffix: " (Division A)"
        });
        
        var fmt = new NameFmt({style: "full", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "王永慶 (Division A)";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatParenSuffixNameShortMultiple_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: null,
            givenName: "永慶",
            middleName: null,
            familyName: "王",
            suffix: "外公(Division A)"
        });
        
        var fmt = new NameFmt({style: "short", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "王永慶";
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatParenSuffixNameLongMultiple_zh_Hans: function(test) {
        test.expect(2);
        var name = new Name({
            prefix: null,
            givenName: "永慶",
            middleName: null,
            familyName: "王",
            suffix: "外公(Division A)"
        });
        
        var fmt = new NameFmt({style: "full", locale: 'zh-Hans-CN'});
        var formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");
        
        var expected = "王永慶外公(Division A)";
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testParseParenSuffixNameWithSpace_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("徐小凤 (Division A)", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "小凤",
            familyName: "徐",
            suffix: " (Division A)"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseCompoundFamilyName3_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("司马小凤", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "小凤",
            familyName: "司马"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    testParseCompoundFamilyName4_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("段干小凤", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "小凤",
            familyName: "段干"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    
    testParseAmbiguousLengthFamilyName1_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("鍾小凤", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "小凤",
            familyName: "鍾"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseAmbiguousLengthFamilyName2_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("鐘離小凤", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "小凤",
            familyName: "鐘離"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseMissingNames1_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("曲小凤", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "小凤",
            familyName: "曲"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    testParseMissingNames2_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("揭小凤", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "小凤",
            familyName: "揭"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    testParseMissingNames3_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("关小凤", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "小凤",
            familyName: "关"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseDentistName_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("关小凤牙科医生", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "小凤",
            familyName: "关",
            suffix: "牙科医生"
        };
        
        test.contains(parsed, expected);
        test.done();
    },
    
    testParseDentalHygienistName_zh_Hans: function(test) {
        test.expect(2);
        var parsed = new Name("关小凤牙齿卫生员", {locale: 'zh-Hans-CN'});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = {
            givenName: "小凤",
            familyName: "关",
            suffix: "牙齿卫生员"
        };
        
        test.contains(parsed, expected);
        test.done();
    }
};
