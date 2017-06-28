/*
 * teststrings.js - test the String object
 *
 * Copyright © 2012-2017, JEDLSoft
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
    var ilib = require("../.././../lib/ilib.js");
}
if (typeof(NormString) === "undefined") {
    var NormString = require("../.././../lib/NormString.js");
}
if (typeof(Locale) === "undefined") {
    var Locale = require("../.././../lib/Locale.js");
}
if (typeof(IString) === "undefined") {
    var IString = require("../.././../lib/IString.js");
}

function setUp() {
    ilib.locale = undefined;
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.teststrings = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testStringConstructor: function(test) {
        var str = new IString();
    
        test.expect(1);
        test.ok(str !== null);
        test.done();
    },
    
    testStringConstructorEmpty: function(test) {
        var str = new IString();
    
        test.expect(3);
        test.ok(str !== null);
    
        test.equal(str.length, 0);
        test.equal(str.toString(), "");
        test.done();
    },
    
    testStringConstructorFull: function(test) {
        var str = new IString("test test test");
    
        test.expect(3);
        test.ok(str !== null);
    
        test.equal(str.length, 14);
        test.equal(str.toString(), "test test test");
        test.done();
    },
    
    testStringConstructorWithStringObj: function(test) {
        var str = new IString(new String("test test test"));
    
        test.expect(3);
        test.ok(str !== null);
    
        test.equal(str.length, 14);
        test.equal(str.toString(), "test test test");
        test.done();
    },
    
    testStringConstructorWithIlibStringObj: function(test) {
        var str = new IString(new IString("test test test"));
    
        test.expect(3);
        test.ok(str !== null);
    
        test.equal(str.length, 14);
        test.equal(str.toString(), "test test test");
        test.done();
    },
    
    testStringConstructorWithIlibNormStringObj: function(test) {
        var str = new IString(new NormString("test test test"));
    
        test.expect(3);
        test.ok(str !== null);
    
        test.equal(str.length, 14);
        test.equal(str.toString(), "test test test");
        test.done();
    },
    
    testStringFormatNoArgs: function(test) {
        var str = new IString("Format this string.");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.format(), "Format this string.");
        test.done();
    },
    
    testStringFormatEmpty: function(test) {
        var str = new IString();
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.format(), "");
        test.done();
    },
    
    testStringFormatEmptyWithArgs: function(test) {
        var str = new IString();
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.format({test: "Foo"}), "");
        test.done();
    },
    
    testStringFormatWithArg: function(test) {
        var str = new IString("Format {size} string.");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.format({size: "medium"}), "Format medium string.");
        test.done();
    },
    
    testStringFormatWithMultipleArgs: function(test) {
        var str = new IString("Format {size} {object}.");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.format({ size: "medium", object: "string" }), "Format medium string.");
        test.done();
    },
    
    testStringFormatWithSameArgMultipleTimes: function(test) {
        var str = new IString("Format {size} when {size} is at least {size} big.");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.format({ size: "medium" }), "Format medium when medium is at least medium big.");
        test.done();
    },
    
    testStringFormatWithMissingArgs: function(test) {
        var str = new IString("Format {size} {object}.");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.format({ object: "string" }), "Format {size} string.");
        test.done();
    },
    
    testStringFormatWithEmptyArg: function(test) {
        var str = new IString("Format {size} string.");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.format({size: ""}), "Format  string.");
        test.done();
    },
    
    testStringFormatHandleNonAsciiParam: function(test) {
        var str = new IString("Format {size} string.");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.format({size: "médïûm"}), "Format médïûm string.");
        test.done();
    },
    
    testStringFormatHandleNonAsciiReplacement: function(test) {
        var str = new IString("Format {sïzé} string.");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.format({"sïzé": "medium"}), "Format medium string.");
        test.done();
    },
    
    testStringFormatMultipleReplacements: function(test) {
        var str = new IString("User {user} has {num} objects in their {container}.");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.format({ user: "edwin", num: 2, container: "locker" }), "User edwin has 2 objects in their locker.");
        test.done();
    },
    
    
    testStringFormatChoiceSimple1: function(test) {
        var str = new IString("1#first string|2#second string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1), "first string");
        test.done();
    },
    
    testStringFormatChoiceSimple2: function(test) {
        var str = new IString("1#first string|2#second string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(2), "second string");
        test.done();
    },
    
    testStringFormatChoiceOnlyOneChoicePositive: function(test) {
        var str = new IString("1#first string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1), "first string");
        test.done();
    },
    
    testStringFormatChoiceOnlyOneChoiceNegative: function(test) {
        var str = new IString("1#first string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(2), "");
        test.done();
    },
    
    testStringFormatChoiceNoString: function(test) {
        var str = new IString("");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(2), "");
        test.done();
    },
    
    testStringFormatChoiceSimpleNoMatch: function(test) {
        var str = new IString("1#first string|2#second string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(3), "");
        test.done();
    },
    
    testStringFormatChoiceSimpleDefault: function(test) {
        var str = new IString("1#first string|2#second string|#other string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(3), "other string");
        test.done();
    },
    
    testStringFormatChoiceLessThanOrEqualPositive: function(test) {
        var str = new IString("<=2#first string|3#second string|#other string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1), "first string");
        test.done();
    },
    
    testStringFormatChoiceLessThanOrEqualEqual: function(test) {
        var str = new IString("<=2#first string|3#second string|#other string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(2), "first string");
        test.done();
    },
    
    testStringFormatChoiceLessThanOrEqualNotLessThan: function(test) {
        var str = new IString("<=2#first string|3#second string|#other string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(3), "second string");
        test.done();
    },
    
    testStringFormatChoiceGreaterThanOrEqualPositive: function(test) {
        var str = new IString(">=2#first string|1#second string|#other string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(4), "first string");
        test.done();
    },
    
    testStringFormatChoiceGreaterThanOrEqualEqual: function(test) {
        var str = new IString(">=2#first string|1#second string|#other string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(2), "first string");
        test.done();
    },
    
    testStringFormatChoiceGreaterThanOrEqualNotLessThan: function(test) {
        var str = new IString(">=2#first string|1#second string|#other string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1), "second string");
        test.done();
    },
    
    testStringFormatChoiceLessThanPositive: function(test) {
        var str = new IString("<2#first string|3#second string|#other string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1), "first string");
        test.done();
    },
    
    testStringFormatChoiceLessThanEqual: function(test) {
        var str = new IString("<2#first string|3#second string|#other string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(2), "other string");
        test.done();
    },
    
    testStringFormatChoiceLessThanNotLessThan: function(test) {
        var str = new IString("<2#first string|3#second string|#other string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(3), "second string");
        test.done();
    },
    
    testStringFormatChoiceGreaterThanPositive: function(test) {
        var str = new IString(">2#first string|1#second string|#other string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(4), "first string");
        test.done();
    },
    
    testStringFormatChoiceGreaterThanEqual: function(test) {
        var str = new IString(">2#first string|1#second string|#other string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(2), "other string");
        test.done();
    },
    
    testStringFormatChoiceGreaterThanNotLessThan: function(test) {
        var str = new IString(">2#first string|1#second string|#other string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1), "second string");
        test.done();
    },
    
    testStringFormatRange1: function(test) {
        var str = new IString("0-2#first string {num}|3-5#second string {num}|#other string {num}");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1, {num: 1}), "first string 1");
        test.done();
    },
    
    testStringFormatRange4: function(test) {
        var str = new IString("0-2#first string {num}|3-5#second string {num}|#other string {num}");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(4, {num: 4}), "second string 4");
        test.done();
    },
    
    testStringFormatRange7: function(test) {
        var str = new IString("0-2#first string {num}|3-5#second string {num}|#other string {num}");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(7, {num: 7}), "other string 7");
        test.done();
    },
    
    testStringFormatChoiceBooleanTrue: function(test) {
        var str = new IString("true#first string|false#second string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(true), "first string");
        test.done();
    },
    
    testStringFormatChoiceBooleanFalse: function(test) {
        var str = new IString("true#first string|false#second string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(false), "second string");
        test.done();
    },
    
    testStringFormatChoiceBooleanMissing: function(test) {
        var str = new IString("true#first string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(false), "");
        test.done();
    },
    
    testStringFormatChoiceStringStaticA: function(test) {
        var str = new IString("a#first string|b#second string|c#third string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice("a"), "first string");
        test.done();
    },
    
    testStringFormatChoiceStringStaticB: function(test) {
        var str = new IString("a#first string|b#second string|c#third string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice("b"), "second string");
        test.done();
    },
    
    testStringFormatChoiceStringStaticC: function(test) {
        var str = new IString("a#first string|b#second string|c#third string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice("c"), "third string");
        test.done();
    },
    
    testStringFormatChoiceStringIgnoreCase: function(test) {
        var str = new IString("a#first string|b#second string|c#third string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice("B"), "second string");
        test.done();
    },
    
    testStringFormatChoiceRegExpA: function(test) {
        var str = new IString("a.*b#first string|b.*c#second string|c+d#third string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice("acccb"), "first string");
        test.done();
    },
    
    testStringFormatChoiceRegExpB: function(test) {
        var str = new IString("a.*b#first string|b.*c#second string|c+d#third string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice("bbccc"), "second string");
        test.done();
    },
    
    testStringFormatChoiceRegExpC: function(test) {
        var str = new IString("a.*b#first string|b.*c#second string|c+d#third string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice("ccccd"), "third string");
        test.done();
    },
    
    testStringFormatChoiceRegExpDefault: function(test) {
        var str = new IString("a.*b#first string|b.*c#second string|#third string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice("ccccd"), "third string");
        test.done();
    },
    
    testStringFormatChoiceRegExpMissing: function(test) {
        var str = new IString("a.*b#first string|b.*c#second string|c+d#third string");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice("efff"), "");
        test.done();
    },
    
    testStringFormatChoiceWithReplacement0: function(test) {
        var str = new IString("0#There are no strings.|1#There is one string.|#There are {num} strings.");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(0, {num: 0}), "There are no strings.");
        test.done();
    },
    
    testStringFormatChoiceWithReplacement1: function(test) {
        var str = new IString("0#There are no strings.|1#There is one string.|#There are {num} strings.");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1, {num: 1}), "There is one string.");
        test.done();
    },
    
    testStringFormatChoiceWithReplacement2: function(test) {
        var str = new IString("0#There are no strings.|1#There is one string.|#There are {num} strings.");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(2, {num: 2}), "There are 2 strings.");
        test.done();
    },
    
    testStringFormatChoiceWithMultipleReplacement0: function(test) {
        var str = new IString("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(0, { name: "johndoe", num: 0 }), "User johndoe has no items.");
        test.done();
    },
    
    testStringFormatChoiceWithMultipleReplacement1: function(test) {
        var str = new IString("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1, { name: "johndoe", num: 1 }), "User johndoe has 1 item.");
        test.done();
    },
    
    testStringFormatChoiceWithMultipleReplacement2: function(test) {
        var str = new IString("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(2, { name: "johndoe", num: 2 }), "User johndoe has 2 items.");
        test.done();
    },
    
    testStringDelegateCharAt: function(test) {
        var str = new IString("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.charAt(7).toString(), "{");
        test.done();
    },
    
    testStringDelegateCharCodeAt: function(test) {
        var str = new IString("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.charCodeAt(7), 123);
        test.done();
    },
    
    testStringDelegateConcat: function(test) {
        var str = new IString("abc");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.concat("def").toString(), "abcdef");
        test.done();
    },
    
    testStringDelegateIndexOf: function(test) {
        var str = new IString("abcdefghijklmnopqrstuvwxyz");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.indexOf("lmno"), 11);
        test.done();
    },
    
    testStringDelegateIndexOf: function(test) {
        var str = new IString("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.lastIndexOf("lmno"), 26);
        test.done();
    },
    
    testStringDelegateMatch: function(test) {
        var str = new IString("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");
    
        test.expect(4);
        test.ok(str !== null);
    
        var m = str.match(/lmno/g);
        test.equal(m.length, 2);
        test.equal(m[0], "lmno");
        test.equal(m[1], "lmno");
        test.done();
    },
    
    testStringDelegateReplace: function(test) {
        var str = new IString("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.replace(/lmno/, "xxx").toString(), "abcdefghijkxxxpqrstuvwxyzlmnopqrstuv");
        test.done();
    },
    
    testStringDelegateSearch: function(test) {
        var str = new IString("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.search(/lmno/), 11);
        test.done();
    },
    
    testStringDelegateSplit: function(test) {
        var str = new IString("abcdefghijklmnopqrstuvwxyz");
    
        test.expect(8);
        test.ok(str !== null);
    
        var consonants = str.split(/[aeiou]/);
        test.equal(consonants.length, 6);
        test.equal(consonants[0], "");
        test.equal(consonants[1], "bcd");
        test.equal(consonants[2], "fgh");
        test.equal(consonants[3], "jklmn");
        test.equal(consonants[4], "pqrst");
        test.equal(consonants[5], "vwxyz");
        test.done();
    },
    
    testStringDelegateSubstr: function(test) {
        var str = new IString("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.substr(26).toString(), "lmnopqrstuv");
        test.done();
    },
    
    testStringDelegateSubstring: function(test) {
        var str = new IString("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.substring(1,5), "bcde");
        test.done();
    },
    
    testStringDelegateToLowerCase: function(test) {
        var str = new IString("ABCDEF");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.toLowerCase(), "abcdef");
        test.done();
    },
    
    testStringDelegateToLowerCase: function(test) {
        var str = new IString("abcdef");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.toUpperCase(), "ABCDEF");
        test.done();
    },
    
    testCodePointToUTF: function(test) {
        var str = IString.fromCodePoint(0x10302);
    
        test.expect(3);
        test.equal(str.length, 2);
        test.equal(str.charCodeAt(0), 0xD800);
        test.equal(str.charCodeAt(1), 0xDF02);
        test.done();
    },
    
    testCodePointToUTFLast: function(test) {
        var str = IString.fromCodePoint(0x10FFFD);
    
        test.expect(3);
        test.equal(str.length, 2);
        test.equal(str.charCodeAt(0), 0xDBFF);
        test.equal(str.charCodeAt(1), 0xDFFD);
        test.done();
    },
    
    testCodePointToUTFFirst: function(test) {
        var str = IString.fromCodePoint(0x10000);
    
        test.expect(3);
        test.equal(str.length, 2);
        test.equal(str.charCodeAt(0), 0xD800);
        test.equal(str.charCodeAt(1), 0xDC00);
        test.done();
    },
    
    testCodePointToUTFBeforeFirst: function(test) {
        var str = IString.fromCodePoint(0xFFFF);
    
        test.expect(2);
        test.equal(str.length, 1);
        test.equal(str.charCodeAt(0), 0xFFFF);
        test.done();
    },
    
    testCodePointToUTFNotSupplementary: function(test) {
        var str = IString.fromCodePoint(0x0302);
    
        test.expect(2);
        test.equal(str.length, 1);
        test.equal(str.charCodeAt(0), 0x0302);
        test.done();
    },
    
    testIteratorSimple: function(test) {
        var str = new IString("abcd");
    
        var it = str.iterator();
        test.expect(10);
        test.ok(it.hasNext());
        test.equal(it.next(), 0x0061);
        test.ok(it.hasNext());
        test.equal(it.next(), 0x0062);
        test.ok(it.hasNext());
        test.equal(it.next(), 0x0063);
        test.ok(it.hasNext());
        test.equal(it.next(), 0x0064);
        test.ok(!it.hasNext());
        test.equal(it.next(), -1);
        test.done();
    },
    
    testIteratorComplex: function(test) {
        var str = new IString("a\uD800\uDF02b\uD800\uDC00");
    
        var it = str.iterator();
        test.expect(10);
        test.ok(it.hasNext());
        test.equal(it.next(), 0x0061);
        test.ok(it.hasNext());
        test.equal(it.next(), 0x10302);
        test.ok(it.hasNext());
        test.equal(it.next(), 0x0062);
        test.ok(it.hasNext());
        test.equal(it.next(), 0x10000);
        test.ok(!it.hasNext());
        test.equal(it.next(), -1);
        test.done();
    },
    
    testIteratorEmpty: function(test) {
        var str = new IString("");
    
        var it = str.iterator();
        test.expect(2);
        test.ok(!it.hasNext());
        test.equal(it.next(), -1);
        test.done();
    },
    
    testForEachCodePointSimple: function(test) {
        var str = new IString("abcd");
    
        var expected = [0x0061, 0x0062, 0x0063, 0x0064];
        var i = 0;
    
        str.forEachCodePoint(function(ch) {
        test.expect(1);
            test.equal(ch, expected[i++]);
            test.done();
        });
    },
    
    testForEachCodePointComplex: function(test) {
        var str = new IString("a\uD800\uDF02b\uD800\uDC00");
    
        var expected = [0x0061, 0x10302, 0x0062, 0x10000];
        var i = 0;
    
        str.forEachCodePoint(function(ch) {
        test.expect(1);
            test.equal(ch, expected[i++]);
            test.done();
        });
    },
    
    testForEachCodePointEmpty: function(test) {
        var str = new IString("");
    
        str.forEachCodePoint(function(ch) {
            // should never call this callback
        test.expect(1);
        test.fail()
        test.done();
        });
    },
    
    testCharIteratorSimple: function(test) {
        var str = new IString("abcd");
    
        var it = str.charIterator();
        test.expect(10);
        test.ok(it.hasNext());
        test.equal(it.next(), "a");
        test.ok(it.hasNext());
        test.equal(it.next(), "b");
        test.ok(it.hasNext());
        test.equal(it.next(), "c");
        test.ok(it.hasNext());
        test.equal(it.next(), "d");
        test.ok(!it.hasNext());
        test.equal(it.next(), undefined);
        test.done();
    },
    
    testCharIteratorComplex: function(test) {
        var str = new IString("a\uD800\uDF02b\uD800\uDC00");
    
        var it = str.charIterator();
        test.expect(10);
        test.ok(it.hasNext());
        test.equal(it.next(), "a");
        test.ok(it.hasNext());
        test.equal(it.next(), "\uD800\uDF02");
        test.ok(it.hasNext());
        test.equal(it.next(), "b");
        test.ok(it.hasNext());
        test.equal(it.next(), "\uD800\uDC00");
        test.ok(!it.hasNext());
        test.equal(it.next(), undefined);
        test.done();
    },
    
    testCharIteratorEmpty: function(test) {
        var str = new IString("");
    
        var it = str.charIterator();
        test.expect(2);
        test.ok(!it.hasNext());
        test.equal(it.next(), undefined);
        test.done();
    },
    
    testForEachSimple: function(test) {
        var str = new IString("abcd");
    
        var expected = ["a", "b", "c", "d"];
        var i = 0;
    
        str.forEach(function(ch) {
            test.equal(ch, expected[i++]);
        });
        test.done();
    },
    
    testForEachComplex: function(test) {
        var str = new IString("a\uD800\uDF02b\uD800\uDC00");
    
        var expected = ["a", "\uD800\uDF02", "b", "\uD800\uDC00"];
        var i = 0;
    
        str.forEach(function(ch) {
            test.equal(ch, expected[i++]);
        });
        test.done();
    },
    
    testForEachEmpty: function(test) {
        var str = new IString("");
    
        str.forEach(function(ch) {
            // should never call this callback
        test.fail()
        });
        test.done();
    },
    
    testCodePointLengthUCS2: function(test) {
        var str = new IString("abcd");
    
        test.expect(2);
        test.equal(str.codePointLength(), 4);
        test.equal(str.length, 4);
        test.done();
    },
    
    testCodePointLengthWithSurrogates: function(test) {
        var str = new IString("a\uD800\uDF02b\uD800\uDC00");
    
        test.expect(2);
        test.equal(str.codePointLength(), 4);
        test.equal(str.length, 6);
        test.done();
    },
    
    testCodePointLengthEmpty: function(test) {
        var str = new IString("");
    
        test.expect(2);
        test.equal(str.codePointLength(), 0);
        test.equal(str.length, 0);
        test.done();
    },
    
    testCodePointAtUCS2: function(test) {
        var str = new IString("abcd");
    
        test.expect(4);
        test.equal(str.codePointAt(0), 0x61);
        test.equal(str.codePointAt(1), 0x62);
        test.equal(str.codePointAt(2), 0x63);
        test.equal(str.codePointAt(3), 0x64);
        test.done();
    },
    
    testCodePointAtWithSurrogates: function(test) {
        var str = new IString("a\uD800\uDF02b\uD800\uDC00");
    
        test.expect(4);
        test.equal(str.codePointAt(0), 0x61);
        test.equal(str.codePointAt(1), 0x10302);
        test.equal(str.codePointAt(2), 0x62);
        test.equal(str.codePointAt(3), 0x10000);
        test.done();
    },
    
    testCodePointAtEmpty: function(test) {
        var str = new IString("");
    
        test.expect(1);
        test.equal(str.codePointAt(0), -1);
        test.done();
    },
    
    testCodePointAtPastEndUCS2: function(test) {
        var str = new IString("abcd");
    
        test.expect(1);
        test.equal(str.codePointAt(4), -1);
        test.done();
    },
    
    testCodePointAtNegUCS2: function(test) {
        var str = new IString("abcd");
    
        test.expect(1);
        test.equal(str.codePointAt(-234), -1);
        test.done();
    },
    
    testCodePointAtPastEndWithSurrogates: function(test) {
        var str = new IString("a\uD800\uDF02b\uD800\uDC00");
    
        test.expect(1);
        test.equal(str.codePointAt(4), -1);
        test.done();
    },
    
    testCodePointAtNegWithSurrogates: function(test) {
        var str = new IString("a\uD800\uDF02b\uD800\uDC00");
    
        test.expect(1);
        test.equal(str.codePointAt(-234), -1);
        test.done();
    },
    
    testRuleGetValueN: function(test) {
        var rule = {
            n: []
        };
    
        test.expect(1);
        test.roughlyEqual(8.2), IString._fncs.getValue(rule, 0.01, 8.2);
        test.done();
    },
    
    testRuleGetValueIsTrue: function(test) {
        var rule = {
            is: [
                "n",
                2
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 2));
        test.done();
    },
    
    testRuleGetValueIsFalse: function(test) {
        var rule = {
            is: [
                "n",
                2
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 3));
        test.done();
    },
    
    testRuleGetValueIsNotTrue: function(test) {
        var rule = {
            isnot: [
                "n",
                2
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 3));
        test.done();
    },
    
    testRuleGetValueIsNotFalse: function(test) {
        var rule = {
            isnot: [
                "n",
                2
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 2));
        test.done();
    },
    
    testRuleGetValueInRangeTrueStart: function(test) {
        var rule = {
            inrange: [
                "n",
                [[0,2]]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 0));
        test.done();
    },
    
    testRuleGetValueInRangeTrueEnd: function(test) {
        var rule = {
            inrange: [
                "n",
                [[0,2]]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 2));
        test.done();
    },
    
    testRuleGetValueInRangeTrueBetween: function(test) {
        var rule = {
            inrange: [
                "n",
                [[0,2]]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 1));
        test.done();
    },
    
    testRuleGetValueInRangeFalse: function(test) {
        var rule = {
            inrange: [
                "n",
                [[0,2]]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 3));
        test.done();
    },
    
    testRuleGetValueInRangeFalseNotInteger: function(test) {
        var rule = {
            inrange: [
                "n",
                [[0,2]]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 0.5));
        test.done();
    },
    
    
    testRuleGetValueInRangeFalseIntegersAfter: function(test) {
        var rule = {
            inrange: [
                "n",
                [0,2]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 4));
        test.done();
    },
    
    testRuleGetValueInRangeFalseIntegersBefore: function(test) {
        var rule = {
            inrange: [
                "n",
                [1,3]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 0));
        test.done();
    },
    
    testRuleGetValueInRangeFalseIntegersBetween: function(test) {
        var rule = {
            inrange: [
                "n",
                [0,2]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 1));
        test.done();
    },
    
    testRuleGetValueInRangeIntegersTrue: function(test) {
        var rule = {
            inrange: [
                "n",
                [0,2]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 2));
        test.done();
    },
    
    testRuleGetValueInRangeIntegersTrueNotInteger: function(test) {
        var rule = {
            inrange: [
                "n",
                [0,2]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 0.5));
        test.done();
    },
    
    testRuleGetValueInRangeIntegersTrueMany: function(test) {
        var rule = {
            inrange: [
                "n",
                [0,2,4,6,8]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 6));
        test.done();
    },
    
    
    testRuleGetValueInRangeComplexTrue1: function(test) {
        var rule = {
            inrange: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 0));
        test.done();
    },
    
    testRuleGetValueInRangeComplexTrue2: function(test) {
        var rule = {
            inrange: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 2));
        test.done();
    },
    
    testRuleGetValueInRangeComplexTrue3: function(test) {
        var rule = {
            inrange: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 3));
        test.done();
    },
    
    testRuleGetValueInRangeComplexTrue4: function(test) {
        var rule = {
            inrange: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 4));
        test.done();
    },
    
    testRuleGetValueInRangeComplexTrue5: function(test) {
        var rule = {
            inrange: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 8));
        test.done();
    },
    
    testRuleGetValueInRangeComplexTrue6: function(test) {
        var rule = {
            inrange: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 9));
        test.done();
    },
    
    testRuleGetValueInRangeComplexFalse1: function(test) {
        var rule = {
            inrange: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 1));
        test.done();
    },
    
    testRuleGetValueInRangeComplexFalse2: function(test) {
        var rule = {
            inrange: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 5));
        test.done();
    },
    
    testRuleGetValueInRangeComplexFalse3: function(test) {
        var rule = {
            inrange: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 10));
        test.done();
    },
    
    testRuleGetValueNotInRangeTrueStart: function(test) {
        var rule = {
            notin: [
                "n",
                [[0,2]]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 0));
        test.done();
    },
    
    testRuleGetValueNotInRangeTrueEnd: function(test) {
        var rule = {
            notin: [
                "n",
                [[0,2]]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 2));
        test.done();
    },
    
    testRuleGetValueNotInRangeTrueBetween: function(test) {
        var rule = {
            notin: [
                "n",
                [[0,2]]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 1));
        test.done();
    },
    
    testRuleGetValueNotInRangeFalse: function(test) {
        var rule = {
            notin: [
                "n",
                [[0,2]]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 3));
        test.done();
    },
    
    testRuleGetValueNotInRangeFalseNotInteger: function(test) {
        var rule = {
            notin: [
                "n",
                [[0,2]]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 0.5));
        test.done();
    },
    
    
    testRuleGetValueNotInRangeFalseIntegersAfter: function(test) {
        var rule = {
            notin: [
                "n",
                [0,2]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 4));
        test.done();
    },
    
    testRuleGetValueNotInRangeFalseIntegersBefore: function(test) {
        var rule = {
            notin: [
                "n",
                [1,3]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 0));
        test.done();
    },
    
    testRuleGetValueNotInRangeFalseIntegersBetween: function(test) {
        var rule = {
            notin: [
                "n",
                [0,2]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 1));
        test.done();
    },
    
    testRuleGetValueNotInRangeIntegersTrue: function(test) {
        var rule = {
            notin: [
                "n",
                [0,2]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 2));
        test.done();
    },
    
    testRuleGetValueNotInRangeIntegersFalseNotInteger: function(test) {
        var rule = {
            notin: [
                "n",
                [0,2]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 0.5));
        test.done();
    },
    
    testRuleGetValueNotInRangeIntegersTrueMany: function(test) {
        var rule = {
            notin: [
                "n",
                [0,2,4,6,8]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 6));
        test.done();
    },
    
    
    testRuleGetValueNotInRangeComplexTrue1: function(test) {
        var rule = {
            notin: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 0));
        test.done();
    },
    
    testRuleGetValueNotInRangeComplexTrue2: function(test) {
        var rule = {
            notin: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 2));
        test.done();
    },
    
    testRuleGetValueNotInRangeComplexTrue3: function(test) {
        var rule = {
            notin: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 3));
        test.done();
    },
    
    testRuleGetValueNotInRangeComplexTrue4: function(test) {
        var rule = {
            notin: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 4));
        test.done();
    },
    
    testRuleGetValueNotInRangeComplexTrue5: function(test) {
        var rule = {
            notin: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 8));
        test.done();
    },
    
    testRuleGetValueNotInRangeComplexTrue6: function(test) {
        var rule = {
            notin: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 9));
        test.done();
    },
    
    testRuleGetValueNotInRangeComplexFalse1: function(test) {
        var rule = {
            notin: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 1));
        test.done();
    },
    
    testRuleGetValueNotInRangeComplexFalse2: function(test) {
        var rule = {
            notin: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 5));
        test.done();
    },
    
    testRuleGetValueNotInRangeComplexFalse3: function(test) {
        var rule = {
            notin: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 10));
        test.done();
    },
    
    testRuleGetValueWithinTrueStart: function(test) {
        var rule = {
            within: [
                "n",
                [[0,2]]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 0));
        test.done();
    },
    
    testRuleGetValueWithinTrueEnd: function(test) {
        var rule = {
            within: [
                "n",
                [[0,2]]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 2));
        test.done();
    },
    
    testRuleGetValueWithinTrueBetween: function(test) {
        var rule = {
            within: [
                "n",
                [[0,2]]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 1));
        test.done();
    },
    
    testRuleGetValueWithinFalse: function(test) {
        var rule = {
            within: [
                "n",
                [[0,2]]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 3));
        test.done();
    },
    
    testRuleGetValueWithinTrueNotInteger: function(test) {
        var rule = {
            within: [
                "n",
                [[0,2]]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 0.5));
        test.done();
    },
    
    
    testRuleGetValueWithinFalseAfter: function(test) {
        var rule = {
            within: [
                "n",
                [0,2]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 2.1));
        test.done();
    },
    
    testRuleGetValueWithinFalseBefore: function(test) {
        var rule = {
            within: [
                "n",
                [1,3]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 0.9));
        test.done();
    },
    
    testRuleGetValueWithinFalseBetween: function(test) {
        var rule = {
            within: [
                "n",
                [0,2]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 1.876));
        test.done();
    },
    
    testRuleGetValueWithinITrue: function(test) {
        var rule = {
            within: [
                "n",
                [0,2]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 2));
        test.done();
    },
    
    testRuleGetValueWithinIntegersTrueNotInteger: function(test) {
        var rule = {
            within: [
                "n",
                [0,2]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 0.5));
        test.done();
    },
    
    testRuleGetValueWithinIntegersTrueMany: function(test) {
        var rule = {
            within: [
                "n",
                [0,2,4,6,8]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 6));
        test.done();
    },
    
    
    testRuleGetValueWithinComplexTrue1: function(test) {
        var rule = {
            within: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 0));
        test.done();
    },
    
    testRuleGetValueWithinComplexTrue2: function(test) {
        var rule = {
            within: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 2.8));
        test.done();
    },
    
    testRuleGetValueWithinComplexTrue3: function(test) {
        var rule = {
            within: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 3));
        test.done();
    },
    
    testRuleGetValueWithinComplexTrue4: function(test) {
        var rule = {
            within: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 4));
        test.done();
    },
    
    testRuleGetValueWithinComplexTrue5: function(test) {
        var rule = {
            within: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 8));
        test.done();
    },
    
    testRuleGetValueWithinComplexTrue6: function(test) {
        var rule = {
            within: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 9));
        test.done();
    },
    
    testRuleGetValueWithinComplexFalse1: function(test) {
        var rule = {
            within: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 1));
        test.done();
    },
    
    testRuleGetValueWithinComplexFalse2: function(test) {
        var rule = {
            within: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 5));
        test.done();
    },
    
    testRuleGetValueWithinComplexFalse3: function(test) {
        var rule = {
            within: [
                "n",
                [0,[2,4],8,9]
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 10));
        test.done();
    },
    
    testRuleGetValueMod: function(test) {
        var rule = {
            mod: [
                "n",
                6
            ]
        };
    
        test.expect(1);
        test.equal(IString._fncs.getValue(rule, 10), 4);
        test.done();
    },
    
    testRuleGetValueModNonInteger: function(test) {
        var rule = {
            mod: [
                "n",
                6
            ]
        };
    
        test.expect(1);
        test.roughlyEqual(8.2), IString._fncs.getValue(rule, 0.01, 2.2);
        test.done();
    },
    
    testRuleGetValueModNegative: function(test) {
        var rule = {
            mod: [
                "n",
                6
            ]
        };
    
        test.expect(1);
        test.roughlyEqual(-11), IString._fncs.getValue(rule, 0.01, 1);
        test.done();
    },
    
    testRuleGetValueOrFalseFalse: function(test) {
        var rule = {
            or: [
                false,
                false
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 11));
        test.done();
    },
    
    testRuleGetValueOrFalseTrue: function(test) {
        var rule = {
            or: [
                false,
                true
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 11));
        test.done();
    },
    
    testRuleGetValueOrTrueFalse: function(test) {
        var rule = {
            or: [
                true,
                false
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 11));
        test.done();
    },
    
    testRuleGetValueOrTrueTrue: function(test) {
        var rule = {
            or: [
                true,
                true
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 11));
        test.done();
    },
    
    testRuleGetValueAndFalseFalse: function(test) {
        var rule = {
            and: [
                false,
                false
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 11));
        test.done();
    },
    
    testRuleGetValueAndFalseTrue: function(test) {
        var rule = {
            and: [
                false,
                true
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 11));
        test.done();
    },
    
    testRuleGetValueAndTrueFalse: function(test) {
        var rule = {
            and: [
                true,
                false
            ]
        };
    
        test.expect(1);
        test.ok(!IString._fncs.getValue(rule, 11));
        test.done();
    },
    
    testRuleGetValueAndTrueTrue: function(test) {
        var rule = {
            and: [
                true,
                true
            ]
        };
    
        test.expect(1);
        test.ok(IString._fncs.getValue(rule, 11));
        test.done();
    },
    
    testRuleComplex1: function(test) {
        var rule = {
            "and": [
                {
                    "inrange": [
                        {
                            "mod": [
                                "n",
                                10
                            ]
                        },
                        [0,[2,4]]
                    ]
                },
                {
                    "notin": [
                        {
                            "mod": [
                                "n",
                                100
                            ]
                        },
                        [[12,14]]
                    ]
                }
            ]
        };
    
        test.expect(6);
        test.ok(IString._fncs.getValue(rule, 3));
        test.ok(!IString._fncs.getValue(rule, 13));
        test.ok(IString._fncs.getValue(rule, 23));
        test.ok(IString._fncs.getValue(rule, 103));
        test.ok(!IString._fncs.getValue(rule, 113));
        test.ok(IString._fncs.getValue(rule, 123));
        test.done();
    },
    
    testRuleComplex2: function(test) {
        var rule = {
            "and": [
                {
                    "inrange": [
                        {
                            "mod": [
                                "n",
                                10
                            ]
                        },
                        [0,[2,4]]
                    ]
                },
                {
                    "notin": [
                        {
                            "mod": [
                                "n",
                                100
                            ]
                        },
                        [[12,14]]
                    ]
                }
            ]
        };
    
        test.expect(6);
        test.ok(!IString._fncs.getValue(rule, 1));
        test.ok(!IString._fncs.getValue(rule, 11));
        test.ok(!IString._fncs.getValue(rule, 21));
        test.ok(!IString._fncs.getValue(rule, 101));
        test.ok(!IString._fncs.getValue(rule, 111));
        test.ok(!IString._fncs.getValue(rule, 121));
        test.done();
    },
    
    testRuleComplex3: function(test) {
        var rule = {
            "and": [
                {
                    "inrange": [
                        {
                            "mod": [
                                "n",
                                10
                            ]
                        },
                        [0,[2,4]]
                    ]
                },
                {
                    "notin": [
                        {
                            "mod": [
                                "n",
                                100
                            ]
                        },
                        [[12,14]]
                    ]
                }
            ]
        };
    
        test.expect(6);
        test.ok(!IString._fncs.getValue(rule, 5));
        test.ok(!IString._fncs.getValue(rule, 15));
        test.ok(!IString._fncs.getValue(rule, 25));
        test.ok(!IString._fncs.getValue(rule, 105));
        test.ok(!IString._fncs.getValue(rule, 115));
        test.ok(!IString._fncs.getValue(rule, 125));
        test.done();
    },
    
    testRuleComplex4: function(test) {
        var rule = {
            "and": [
                {
                    "inrange": [
                        {
                            "mod": [
                                "n",
                                10
                            ]
                        },
                        [0,[2,4]]
                    ]
                },
                {
                    "notin": [
                        {
                            "mod": [
                                "n",
                                100
                            ]
                        },
                        [[12,14]]
                    ]
                }
            ]
        };
    
        test.expect(6);
        test.ok(IString._fncs.getValue(rule, 3.5));
        test.ok(!IString._fncs.getValue(rule, 13.5));
        test.ok(IString._fncs.getValue(rule, 23.5));
        test.ok(IString._fncs.getValue(rule, 103.5));
        test.ok(!IString._fncs.getValue(rule, 113.5));
        test.ok(IString._fncs.getValue(rule, 123.5));
        test.done();
    },
    
    testStringGetLocaleDefault: function(test) {
        var str = new IString("foo");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.getLocale(), "en-US");
        test.done();
    },
    
    testStringGetLocaleWithLocaleObj: function(test) {
        var str = new IString("foo");
        str.setLocale(new Locale("ja-JP"));
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.getLocale(), "ja-JP");
        test.done();
    },
    
    testStringGetLocaleWithLocaleSpec: function(test) {
        var str = new IString("foo");
        str.setLocale("ja-JP");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.getLocale(), "ja-JP");
        test.done();
    },
    
    testStringSetLocaleUndefined: function(test) {
        var str = new IString("foo");
        str.setLocale(undefined);
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.getLocale(), "en-US");
        test.done();
    },
    
    testStringFormatChoiceCharClasses1: function(test) {
        var str = new IString("0#There are no items.|one#The items end in one.|two#The items end in two|few#The items is few|#Default items");
        str.setLocale("sl-SL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(0), "There are no items.");
        test.done();
    },
    
    testStringFormatChoiceCharClasses2: function(test) {
        var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
        str.setLocale("sl-SL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1), "The items end in one");
        test.done();
    },
    
    testStringFormatChoiceCharClasses3: function(test) {
        var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
        str.setLocale("sl-SL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(11), "Default items");
        test.done();
    },
    
    testStringFormatChoiceCharClasses4: function(test) {
        var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
        str.setLocale("sl-SL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(101), "The items end in one");
        test.done();
    },
    
    testStringFormatChoiceCharClasses5: function(test) {
        var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
        str.setLocale("sl-SL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(2), "The items end in two");
        test.done();
    },
    
    testStringFormatChoiceCharClasses6: function(test) {
        var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
        str.setLocale("sl-SL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(102), "The items end in two");
        test.done();
    },
    
    testStringFormatChoiceCharClasses7: function(test) {
        var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
        str.setLocale("sl-SL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(12), "Default items");
        test.done();
    },
    
    testStringFormatChoiceCharClasses8: function(test) {
        var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
        str.setLocale("sl-SL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(3), "The items is few");
        test.done();
    },
    
    testStringFormatChoiceCharClasses9: function(test) {
        var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
        str.setLocale("sl-SL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(103), "The items is few");
        test.done();
    },
    
    testStringFormatChoiceCharClasses10: function(test) {
        var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
        str.setLocale("sl-SL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(4), "The items is few");
        test.done();
    },
    
    testStringFormatChoiceCharClasses11: function(test) {
        var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
        str.setLocale("sl-SL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(104), "The items is few");
        test.done();
    },
    
    testStringFormatChoiceCharClasses12: function(test) {
        var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
        str.setLocale("sl-SL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(5), "Default items");
        test.done();
    },
    
    testStringFormatChoiceCharClasses13: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("ar-SA");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(30), "The items are many");
        test.done();
    },
    
    testStringFormatChoiceCharClasses14: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("az-Latn-AZ");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(30), "Default items");
        test.done();
    },
    
    testStringFormatChoiceCharClasses15: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("az-Latn-AZ");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1), "There items are one");
        test.done();
    },
    
    testStringFormatChoiceCharClassesComplex1: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("pl-PL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1), "There items are one");
        test.done();
    },
    
    testStringFormatChoiceCharClassesComplex2: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("pl-PL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(2), "The items are few");
        test.done();
    },
    
    testStringFormatChoiceCharClassesComplex3: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("pl-PL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(12), "The items are many");
        test.done();
    },
    
    testStringFormatChoiceCharClassesComplex4: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("pl-PL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(22), "The items are few");
        test.done();
    },
    
    testStringFormatChoiceCharClassesComplex5: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("pl-PL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(102), "The items are few");
        test.done();
    },
    
    testStringFormatChoiceCharClassesComplex6: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("pl-PL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(112), "The items are many");
        test.done();
    },
    
    testStringFormatChoiceCharClassesComplex7: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("pl-PL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(122), "The items are few");
        test.done();
    },
    
    testStringFormatChoiceCharClassesComplex8: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("pl-PL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(5), "The items are many");
        test.done();
    },
    
    testStringFormatChoiceCharClassesComplex9: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("pl-PL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(112), "The items are many");
        test.done();
    },
    
    testStringFormatChoiceCharClassesComplex10: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("pl-PL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(10), "The items are many");
        test.done();
    },
    
    testStringFormatChoiceCharClassesComplex11: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("az-Latn-AZ");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(10), "Default items");
        test.done();
    },
    
    testStringFormatChoiceDecimal1: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("ar-EG");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(8.0), "The items are few");
        test.done();
    },
    
    testStringFormatChoiceDecimal2: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("hy-AM");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(3.5), "Default items");
        test.done();
    },
    
    testStringFormatChoiceDecimal3: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("hr-HR");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(2.3), "The items are few");
        test.done();
    },
    
    testStringFormatChoiceDecimal4: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("hr-HR");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(10.1), "There items are one");
        test.done();
    },
    
    testStringFormatChoiceDecimal5: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("hr-HR");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(2.5), "Default items");
        test.done();
    },
    
    testStringFormatChoiceDecimal6: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("he-IL");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(10.0), "Default items");
        test.done();
    },
    
    testStringFormatChoiceDecimal7: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("ga-IE");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1.6), "Default items");
        test.done();
    },
    
    testStringFormatChoiceDecimal8: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("ga-IE");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(5.2), "The items are few");
        test.done();
    },
    
    testStringFormatChoiceDecimal9: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("lv-LV");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1.9), "Default items");
        test.done();
    },
    
    testStringFormatChoiceDecimal10: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("lv-LV");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1.1), "There items are one");
        test.done();
    },
    
    testStringFormatChoiceDecimal11: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("lt-LT");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1.7), "The items are many");
        test.done();
    },
    
    testStringFormatChoiceDecimal12: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("fa-IR");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(2.6), "Default items");
        test.done();
    },
    
    testStringFormatChoiceDecimal13: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("fa-IR");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(0.04), "There items are one");
        test.done();
    },
    
    testStringFormatChoiceDecimal14: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("sk-KS");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1.5), "The items are many");
        test.done();
    },
    
    
    testStringFormatChoiceDecimal15: function(test) {
        var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
        str.setLocale("az-Latn-AZ");
    
        test.expect(2);
        test.ok(str !== null);
    
        test.equal(str.formatChoice(1.5), "Default items");
        test.done();
    }
    
};