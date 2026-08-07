/*
 * testistringfmt.js - test the formatting methods mixed into IString.prototype
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

module.exports.testistringfmt = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // --------- format ---------

    testIStringFmtFormatSubstitutesParam: function(test) {
        test.expect(1);
        var str = new IString("There are {num} objects.");
        test.equal(str.format({num: 12}).toString(), "There are 12 objects.");
        test.done();
    },

    testIStringFmtFormatLeavesMissingParamUntouched: function(test) {
        test.expect(1);
        var str = new IString("There are {num} objects in the {container}.");
        test.equal(str.format({num: 12}).toString(), "There are 12 objects in the {container}.");
        test.done();
    },

    testIStringFmtFormatCanBeAppliedTwice: function(test) {
        test.expect(1);
        var str = new IString("There are {num} objects in the {container}.");
        var partial = str.format({num: 12});
        var full = partial.format({container: "box"});
        test.equal(full.toString(), "There are 12 objects in the box.");
        test.done();
    },

    testIStringFmtFormatNoParams: function(test) {
        test.expect(1);
        var str = new IString("Nothing to replace.");
        test.equal(str.format().toString(), "Nothing to replace.");
        test.done();
    },

    // --------- formatChoice: single index ---------

    testIStringFmtFormatChoiceExactMatch: function(test) {
        test.expect(1);
        var str = new IString("0#There are no objects.|1#There is one object.|2#There are {number} objects.");
        test.equal(str.formatChoice(2, {number: 2}, false), "There are 2 objects.");
        test.done();
    },

    testIStringFmtFormatChoiceDefaultCase: function(test) {
        test.expect(1);
        var str = new IString("0#There are no objects.|1#There is one object.|#There are {number} objects.");
        test.equal(str.formatChoice(22, {number: 22}, false), "There are 22 objects.");
        test.done();
    },

    testIStringFmtFormatChoiceEmptyStringReturnsEmpty: function(test) {
        test.expect(1);
        var str = new IString("");
        test.equal(str.formatChoice(2, {number: 2}, false), "");
        test.done();
    },

    testIStringFmtFormatChoiceNoMatchNoDefaultReturnsEmpty: function(test) {
        test.expect(1);
        var str = new IString("0#There are no objects.|1#There is one object.");
        test.equal(str.formatChoice(5, {number: 5}, false), "");
        test.done();
    },

    testIStringFmtFormatChoiceThrowsOnSyntaxError: function(test) {
        test.expect(1);
        var str = new IString("this has no hash separator");
        test.throws(function() {
            str.formatChoice(1, {}, false);
        });
        test.done();
    },

    // --------- formatChoice: numeric range syntax ---------

    testIStringFmtFormatChoiceGreaterThan: function(test) {
        test.expect(1);
        var str = new IString(">10#big|#small");
        test.equal(str.formatChoice(11, {}, false), "big");
        test.done();
    },

    testIStringFmtFormatChoiceGreaterThanOrEqual: function(test) {
        test.expect(1);
        var str = new IString(">=10#big|#small");
        test.equal(str.formatChoice(10, {}, false), "big");
        test.done();
    },

    testIStringFmtFormatChoiceLessThan: function(test) {
        test.expect(1);
        var str = new IString("<10#small|#big");
        test.equal(str.formatChoice(5, {}, false), "small");
        test.done();
    },

    testIStringFmtFormatChoiceLessThanOrEqual: function(test) {
        test.expect(1);
        var str = new IString("<=10#small|#big");
        test.equal(str.formatChoice(10, {}, false), "small");
        test.done();
    },

    testIStringFmtFormatChoiceRange: function(test) {
        test.expect(1);
        var str = new IString("1-5#a few|#many");
        test.equal(str.formatChoice(3, {}, false), "a few");
        test.done();
    },

    // --------- formatChoice: multiple indices ---------

    testIStringFmtFormatChoiceMultipleIndices: function(test) {
        test.expect(1);
        var str = new IString("1,1#one and one|#other");
        test.equal(str.formatChoice([1, 1], {}, false), "one and one");
        test.done();
    },

    // --------- formatChoice: boolean and string index types ---------

    testIStringFmtFormatChoiceBooleanTrue: function(test) {
        test.expect(1);
        var str = new IString("true#yes|false#no");
        test.equal(str.formatChoice(true, {}, false), "yes");
        test.done();
    },

    testIStringFmtFormatChoiceBooleanFalse: function(test) {
        test.expect(1);
        var str = new IString("true#yes|false#no");
        test.equal(str.formatChoice(false, {}, false), "no");
        test.done();
    },

    testIStringFmtFormatChoiceStringRegexp: function(test) {
        test.expect(1);
        var str = new IString("^a.*#starts with a|#other");
        test.equal(str.formatChoice("apple", {}, false), "starts with a");
        test.done();
    },

    // --------- formatChoice: locale-dependent plural classes ---------

    testIStringFmtFormatChoicePluralClassOne: function(test) {
        test.expect(1);
        var str = new IString("one#singular|other#plural");
        str.setLocale("en-US", true);
        test.equal(str.formatChoice(1, {}, false), "singular");
        test.done();
    },

    testIStringFmtFormatChoicePluralClassOther: function(test) {
        test.expect(1);
        var str = new IString("one#singular|other#plural");
        str.setLocale("en-US", true);
        test.equal(str.formatChoice(5, {}, false), "plural");
        test.done();
    },

    // --------- setLocale / getLocale ---------

    testIStringFmtGetLocaleDefaultsToIlibLocale: function(test) {
        test.expect(1);
        var str = new IString("test");
        test.equal(str.getLocale(), ilib.getLocale());
        test.done();
    },

    testIStringFmtSetLocaleWithString: function(test) {
        test.expect(1);
        var str = new IString("test");
        str.setLocale("ko-KR", true);
        test.equal(str.getLocale(), "ko-KR");
        test.done();
    },

    testIStringFmtSetLocaleWithLocaleObject: function(test) {
        test.expect(1);
        var str = new IString("test");
        str.setLocale(new Locale("ja-JP"), true);
        test.equal(str.getLocale(), "ja-JP");
        test.done();
    },

    testIStringFmtSetLocaleThenFormatChoiceUsesNewLocale: function(test) {
        test.expect(1);
        var str = new IString("one#singular|other#plural");
        str.setLocale("ko-KR", true);
        // Korean has no plural distinction, so any number maps to "other"
        test.equal(str.formatChoice(1, {}, false), "plural");
        test.done();
    }
};
