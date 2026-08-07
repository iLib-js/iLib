/*
 * teststringfmt.js - test the formatting methods mixed into IString.prototype
 * from IStringFmt.js (format, formatChoice, _testChoice, setLocale, getLocale)
 *
 * Copyright © 2026, JEDLSoft
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}
if (typeof(Locale) === "undefined") {
    var Locale = require("../../lib/Locale.js");
}
if (typeof(IString) === "undefined") {
    var IString = require("../../lib/IString.js");
}

module.exports.teststringfmt = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // --------- format ---------

    testStringFmtFormatSubstitutesParam: function(test) {
        test.expect(1);
        var str = new IString("There are {num} objects.");
        test.equal(str.format({num: 12}).toString(), "There are 12 objects.");
        test.done();
    },

    testStringFmtFormatLeavesMissingParamUntouched: function(test) {
        test.expect(1);
        var str = new IString("There are {num} objects in the {container}.");
        test.equal(str.format({num: 12}).toString(), "There are 12 objects in the {container}.");
        test.done();
    },

    testStringFmtFormatCanBeAppliedTwice: function(test) {
        test.expect(1);
        var str = new IString("There are {num} objects in the {container}.");
        var partial = new IString(str.format({num: 12}));
        var full = partial.format({container: "box"});
        test.equal(full.toString(), "There are 12 objects in the box.");
        test.done();
    },

    testStringFmtFormatNoParams: function(test) {
        test.expect(1);
        var str = new IString("Nothing to replace.");
        test.equal(str.format().toString(), "Nothing to replace.");
        test.done();
    },

    testStringFmtFormatValueWithDollarSignsNotTreatedAsReplacementPattern: function(test) {
        test.expect(1);
        var str = new IString("Code: {code}");
        test.equal(str.format({code: "SAVE$$10"}).toString(), "Code: SAVE$$10");
        test.done();
    },

    testStringFmtFormatParamNameNotTreatedAsRegex: function(test) {
        test.expect(1);
        var str = new IString("{a.b} and {aXb}");
        var params = {};
        params["a.b"] = "MATCHED";
        test.equal(str.format(params).toString(), "MATCHED and {aXb}");
        test.done();
    },

    // --------- formatChoice: single index ---------

    testStringFmtFormatChoiceExactMatch: function(test) {
        test.expect(1);
        var str = new IString("0#There are no objects.|1#There is one object.|2#There are {number} objects.");
        test.equal(str.formatChoice(2, {number: 2}, false), "There are 2 objects.");
        test.done();
    },

    testStringFmtFormatChoiceDefaultCase: function(test) {
        test.expect(1);
        var str = new IString("0#There are no objects.|1#There is one object.|#There are {number} objects.");
        test.equal(str.formatChoice(22, {number: 22}, false), "There are 22 objects.");
        test.done();
    },

    testStringFmtFormatChoiceEmptyStringReturnsEmpty: function(test) {
        test.expect(1);
        var str = new IString("");
        test.equal(str.formatChoice(2, {number: 2}, false), "");
        test.done();
    },

    testStringFmtFormatChoiceNoMatchNoDefaultReturnsEmpty: function(test) {
        test.expect(1);
        var str = new IString("0#There are no objects.|1#There is one object.");
        test.equal(str.formatChoice(5, {number: 5}, false), "");
        test.done();
    },

    testStringFmtFormatChoiceThrowsOnSyntaxError: function(test) {
        test.expect(1);
        var str = new IString("this has no hash separator");
        test.throws(function() {
            str.formatChoice(1, {}, false);
        });
        test.done();
    },

    testStringFmtFormatChoiceReplacementTextContainingHash: function(test) {
        test.expect(1);
        var str = new IString("1#Rated #1 by critics|#other");
        test.equal(str.formatChoice(1, {}, false), "Rated #1 by critics");
        test.done();
    },

    // --------- formatChoice: numeric range syntax ---------

    testStringFmtFormatChoiceGreaterThan: function(test) {
        test.expect(1);
        var str = new IString(">10#big|#small");
        test.equal(str.formatChoice(11, {}, false), "big");
        test.done();
    },

    testStringFmtFormatChoiceGreaterThanOrEqual: function(test) {
        test.expect(1);
        var str = new IString(">=10#big|#small");
        test.equal(str.formatChoice(10, {}, false), "big");
        test.done();
    },

    testStringFmtFormatChoiceLessThan: function(test) {
        test.expect(1);
        var str = new IString("<10#small|#big");
        test.equal(str.formatChoice(5, {}, false), "small");
        test.done();
    },

    testStringFmtFormatChoiceLessThanOrEqual: function(test) {
        test.expect(1);
        var str = new IString("<=10#small|#big");
        test.equal(str.formatChoice(10, {}, false), "small");
        test.done();
    },

    testStringFmtFormatChoiceRange: function(test) {
        test.expect(1);
        var str = new IString("1-5#a few|#many");
        test.equal(str.formatChoice(3, {}, false), "a few");
        test.done();
    },

    // --------- formatChoice: multiple indices ---------

    testStringFmtFormatChoiceMultipleIndices: function(test) {
        test.expect(1);
        var str = new IString("1,1#one and one|#other");
        test.equal(str.formatChoice([1, 1], {}, false), "one and one");
        test.done();
    },

    testStringFmtFormatChoiceMultiIndexIntlFirstMatchWins: function(test) {
        test.expect(1);
        var str = new IString("one,one#First match|one,one#Second match");
        str.setLocale("en-US", true);
        test.equal(str.formatChoice([1, 1], {}, true), "First match");
        test.done();
    },

    testStringFmtFormatChoiceMultiIndexIntlNumberResetsAcrossCalls: function(test) {
        test.expect(2);
        var str = new IString("one,one#Matched|#");
        str.setLocale("en-US", true);
        test.equal(str.formatChoice([1, 1], {}, true), "Matched");
        // reusing the same instance with args that no longer match "one,one"
        // must not leak the previous call's match index
        test.equal(str.formatChoice([2, 2], {}, true), "");
        test.done();
    },

    testStringFmtFormatChoiceMultiIndexIntlCateArrNotTruncatedAcrossPatterns: function(test) {
        test.expect(1);
        var str = new IString("one,many#neverMatches|one,one,other#fullMatch|#default");
        str.setLocale("en-US", true);
        test.equal(str.formatChoice([1, 1, 2], {}, true), "fullMatch");
        test.done();
    },

    // --------- formatChoice: boolean and string index types ---------

    testStringFmtFormatChoiceBooleanTrue: function(test) {
        test.expect(1);
        var str = new IString("true#yes|false#no");
        test.equal(str.formatChoice(true, {}, false), "yes");
        test.done();
    },

    testStringFmtFormatChoiceBooleanFalse: function(test) {
        test.expect(1);
        var str = new IString("true#yes|false#no");
        test.equal(str.formatChoice(false, {}, false), "no");
        test.done();
    },

    testStringFmtFormatChoiceStringRegexp: function(test) {
        test.expect(1);
        var str = new IString("^a.*#starts with a|#other");
        test.equal(str.formatChoice("apple", {}, false), "starts with a");
        test.done();
    },

    // --------- formatChoice: locale-dependent plural classes ---------

    testStringFmtFormatChoicePluralClassOne: function(test) {
        test.expect(1);
        var str = new IString("one#singular|other#plural");
        str.setLocale("en-US", true);
        test.equal(str.formatChoice(1, {}, false), "singular");
        test.done();
    },

    testStringFmtFormatChoicePluralClassOther: function(test) {
        test.expect(1);
        var str = new IString("one#singular|other#plural");
        str.setLocale("en-US", true);
        test.equal(str.formatChoice(5, {}, false), "plural");
        test.done();
    },

    // --------- formatChoice: numeric-range patterns still work after setLocale ---------
    // Intl.PluralRules only ever resolves a number to a CLDR category name
    // (one/other/etc.), so it has no way to match numeric-range limits like
    // ">10" or "1-5". formatChoice must fall back to _testChoice's own
    // parsing for those, even when useIntlPlural defaults to true and
    // this.intlPlural has been set via setLocale().

    testStringFmtFormatChoiceNumericRangeStillWorksAfterSetLocale: function(test) {
        test.expect(2);
        var str = new IString(">10#big|#small");
        str.setLocale("en-US", true);
        test.equal(str.formatChoice(11, {}), "big");
        test.equal(str.formatChoice(5, {}), "small");
        test.done();
    },

    testStringFmtFormatChoiceMultiIndexMixedNumericRangeAndCategoryAfterSetLocale: function(test) {
        test.expect(1);
        var str = new IString("1-5,one#smallRangeOne|#default");
        str.setLocale("en-US", true);
        test.equal(str.formatChoice([3, 1], {}), "smallRangeOne");
        test.done();
    },

    // --------- setLocale / getLocale ---------

    testStringFmtGetLocaleDefaultsToIlibLocale: function(test) {
        test.expect(1);
        var str = new IString("test");
        test.equal(str.getLocale(), ilib.getLocale());
        test.done();
    },

    testStringFmtSetLocaleWithString: function(test) {
        test.expect(1);
        var str = new IString("test");
        str.setLocale("ko-KR", true);
        test.equal(str.getLocale(), "ko-KR");
        test.done();
    },

    testStringFmtSetLocaleWithLocaleObject: function(test) {
        test.expect(1);
        var str = new IString("test");
        str.setLocale(new Locale("ja-JP"), true);
        test.equal(str.getLocale(), "ja-JP");
        test.done();
    },

    testStringFmtSetLocaleThenFormatChoiceUsesNewLocale: function(test) {
        test.expect(1);
        var str = new IString("one#singular|other#plural");
        str.setLocale("ko-KR", true);
        // Korean has no plural distinction, so any number maps to "other"
        test.equal(str.formatChoice(1, {}, false), "plural");
        test.done();
    }
};
