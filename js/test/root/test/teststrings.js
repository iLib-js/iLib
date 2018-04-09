/*
 * teststrings.js - test the String object
 *
 * Copyright © 2012-2016, JEDLSoft
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

var ilib = require("./../lib/ilib.js");
var NormString = require("./../lib/NormString.js");
var Locale = require("./../lib/Locale.js");
var IString = require("./../lib/IString.js");

function setUp() {
    ilib.locale = undefined;
}

function testStringConstructor() {
    var str = new IString();

    assertNotNull(str);
}

function testStringConstructorEmpty() {
    var str = new IString();

    assertNotNull(str);

    assertEquals(0, str.length);
    assertEquals("", str.toString());
}

function testStringConstructorFull() {
    var str = new IString("test test test");

    assertNotNull(str);

    assertEquals(14, str.length);
    assertEquals("test test test", str.toString());
}

function testStringConstructorWithStringObj() {
    var str = new IString(new String("test test test"));

    assertNotNull(str);

    assertEquals(14, str.length);
    assertEquals("test test test", str.toString());
}

function testStringConstructorWithIlibStringObj() {
    var str = new IString(new IString("test test test"));

    assertNotNull(str);

    assertEquals(14, str.length);
    assertEquals("test test test", str.toString());
}

function testStringConstructorWithIlibNormStringObj() {
    var str = new IString(new NormString("test test test"));

    assertNotNull(str);

    assertEquals(14, str.length);
    assertEquals("test test test", str.toString());
}

function testStringFormatNoArgs() {
    var str = new IString("Format this string.");

    assertNotNull(str);

    assertEquals("Format this string.", str.format());
}

function testStringFormatEmpty() {
    var str = new IString();

    assertNotNull(str);

    assertEquals("", str.format());
}

function testStringFormatEmptyWithArgs() {
    var str = new IString();

    assertNotNull(str);

    assertEquals("", str.format({test: "Foo"}));
}

function testStringFormatWithArg() {
    var str = new IString("Format {size} string.");

    assertNotNull(str);

    assertEquals("Format medium string.", str.format({size: "medium"}));
}

function testStringFormatWithMultipleArgs() {
    var str = new IString("Format {size} {object}.");

    assertNotNull(str);

    assertEquals("Format medium string.", str.format({ size: "medium", object: "string" }));
}

function testStringFormatWithSameArgMultipleTimes() {
    var str = new IString("Format {size} when {size} is at least {size} big.");

    assertNotNull(str);

    assertEquals("Format medium when medium is at least medium big.", str.format({ size: "medium" }));
}

function testStringFormatWithMissingArgs() {
    var str = new IString("Format {size} {object}.");

    assertNotNull(str);

    assertEquals("Format {size} string.", str.format({ object: "string" }));
}

function testStringFormatWithEmptyArg() {
    var str = new IString("Format {size} string.");

    assertNotNull(str);

    assertEquals("Format  string.", str.format({size: ""}));
}

function testStringFormatHandleNonAsciiParam() {
    var str = new IString("Format {size} string.");

    assertNotNull(str);

    assertEquals("Format médïûm string.", str.format({size: "médïûm"}));
}

function testStringFormatHandleNonAsciiReplacement() {
    var str = new IString("Format {sïzé} string.");

    assertNotNull(str);

    assertEquals("Format medium string.", str.format({"sïzé": "medium"}));
}

function testStringFormatMultipleReplacements() {
    var str = new IString("User {user} has {num} objects in their {container}.");

    assertNotNull(str);

    assertEquals("User edwin has 2 objects in their locker.", str.format({ user: "edwin", num: 2, container: "locker" }));
}


function testStringFormatChoiceSimple1() {
    var str = new IString("1#first string|2#second string");

    assertNotNull(str);

    assertEquals("first string", str.formatChoice(1));
}

function testStringFormatChoiceSimple2() {
    var str = new IString("1#first string|2#second string");

    assertNotNull(str);

    assertEquals("second string", str.formatChoice(2));
}

function testStringFormatChoiceOnlyOneChoicePositive() {
    var str = new IString("1#first string");

    assertNotNull(str);

    assertEquals("first string", str.formatChoice(1));
}

function testStringFormatChoiceOnlyOneChoiceNegative() {
    var str = new IString("1#first string");

    assertNotNull(str);

    assertEquals("", str.formatChoice(2));
}

function testStringFormatChoiceNoString() {
    var str = new IString("");

    assertNotNull(str);

    assertEquals("", str.formatChoice(2));
}

function testStringFormatChoiceSimpleNoMatch() {
    var str = new IString("1#first string|2#second string");

    assertNotNull(str);

    assertEquals("", str.formatChoice(3));
}

function testStringFormatChoiceSimpleDefault() {
    var str = new IString("1#first string|2#second string|#other string");

    assertNotNull(str);

    assertEquals("other string", str.formatChoice(3));
}

function testStringFormatChoiceLessThanOrEqualPositive() {
    var str = new IString("<=2#first string|3#second string|#other string");

    assertNotNull(str);

    assertEquals("first string", str.formatChoice(1));
}

function testStringFormatChoiceLessThanOrEqualEqual() {
    var str = new IString("<=2#first string|3#second string|#other string");

    assertNotNull(str);

    assertEquals("first string", str.formatChoice(2));
}

function testStringFormatChoiceLessThanOrEqualNotLessThan() {
    var str = new IString("<=2#first string|3#second string|#other string");

    assertNotNull(str);

    assertEquals("second string", str.formatChoice(3));
}

function testStringFormatChoiceGreaterThanOrEqualPositive() {
    var str = new IString(">=2#first string|1#second string|#other string");

    assertNotNull(str);

    assertEquals("first string", str.formatChoice(4));
}

function testStringFormatChoiceGreaterThanOrEqualEqual() {
    var str = new IString(">=2#first string|1#second string|#other string");

    assertNotNull(str);

    assertEquals("first string", str.formatChoice(2));
}

function testStringFormatChoiceGreaterThanOrEqualNotLessThan() {
    var str = new IString(">=2#first string|1#second string|#other string");

    assertNotNull(str);

    assertEquals("second string", str.formatChoice(1));
}

function testStringFormatChoiceLessThanPositive() {
    var str = new IString("<2#first string|3#second string|#other string");

    assertNotNull(str);

    assertEquals("first string", str.formatChoice(1));
}

function testStringFormatChoiceLessThanEqual() {
    var str = new IString("<2#first string|3#second string|#other string");

    assertNotNull(str);

    assertEquals("other string", str.formatChoice(2));
}

function testStringFormatChoiceLessThanNotLessThan() {
    var str = new IString("<2#first string|3#second string|#other string");

    assertNotNull(str);

    assertEquals("second string", str.formatChoice(3));
}

function testStringFormatChoiceGreaterThanPositive() {
    var str = new IString(">2#first string|1#second string|#other string");

    assertNotNull(str);

    assertEquals("first string", str.formatChoice(4));
}

function testStringFormatChoiceGreaterThanEqual() {
    var str = new IString(">2#first string|1#second string|#other string");

    assertNotNull(str);

    assertEquals("other string", str.formatChoice(2));
}

function testStringFormatChoiceGreaterThanNotLessThan() {
    var str = new IString(">2#first string|1#second string|#other string");

    assertNotNull(str);

    assertEquals("second string", str.formatChoice(1));
}

function testStringFormatRange1() {
    var str = new IString("0-2#first string {num}|3-5#second string {num}|#other string {num}");

    assertNotNull(str);

    assertEquals("first string 1", str.formatChoice(1, {num: 1}));
}

function testStringFormatRange4() {
    var str = new IString("0-2#first string {num}|3-5#second string {num}|#other string {num}");

    assertNotNull(str);

    assertEquals("second string 4", str.formatChoice(4, {num: 4}));
}

function testStringFormatRange7() {
    var str = new IString("0-2#first string {num}|3-5#second string {num}|#other string {num}");

    assertNotNull(str);

    assertEquals("other string 7", str.formatChoice(7, {num: 7}));
}

function testStringFormatChoiceBooleanTrue() {
    var str = new IString("true#first string|false#second string");

    assertNotNull(str);

    assertEquals("first string", str.formatChoice(true));
}

function testStringFormatChoiceBooleanFalse() {
    var str = new IString("true#first string|false#second string");

    assertNotNull(str);

    assertEquals("second string", str.formatChoice(false));
}

function testStringFormatChoiceBooleanMissing() {
    var str = new IString("true#first string");

    assertNotNull(str);

    assertEquals("", str.formatChoice(false));
}

function testStringFormatChoiceStringStaticA() {
    var str = new IString("a#first string|b#second string|c#third string");

    assertNotNull(str);

    assertEquals("first string", str.formatChoice("a"));
}

function testStringFormatChoiceStringStaticB() {
    var str = new IString("a#first string|b#second string|c#third string");

    assertNotNull(str);

    assertEquals("second string", str.formatChoice("b"));
}

function testStringFormatChoiceStringStaticC() {
    var str = new IString("a#first string|b#second string|c#third string");

    assertNotNull(str);

    assertEquals("third string", str.formatChoice("c"));
}

function testStringFormatChoiceStringIgnoreCase() {
    var str = new IString("a#first string|b#second string|c#third string");

    assertNotNull(str);

    assertEquals("second string", str.formatChoice("B"));
}

function testStringFormatChoiceRegExpA() {
    var str = new IString("a.*b#first string|b.*c#second string|c+d#third string");

    assertNotNull(str);

    assertEquals("first string", str.formatChoice("acccb"));
}

function testStringFormatChoiceRegExpB() {
    var str = new IString("a.*b#first string|b.*c#second string|c+d#third string");

    assertNotNull(str);

    assertEquals("second string", str.formatChoice("bbccc"));
}

function testStringFormatChoiceRegExpC() {
    var str = new IString("a.*b#first string|b.*c#second string|c+d#third string");

    assertNotNull(str);

    assertEquals("third string", str.formatChoice("ccccd"));
}

function testStringFormatChoiceRegExpDefault() {
    var str = new IString("a.*b#first string|b.*c#second string|#third string");

    assertNotNull(str);

    assertEquals("third string", str.formatChoice("ccccd"));
}

function testStringFormatChoiceRegExpMissing() {
    var str = new IString("a.*b#first string|b.*c#second string|c+d#third string");

    assertNotNull(str);

    assertEquals("", str.formatChoice("efff"));
}

function testStringFormatChoiceWithReplacement0() {
    var str = new IString("0#There are no strings.|1#There is one string.|#There are {num} strings.");

    assertNotNull(str);

    assertEquals("There are no strings.", str.formatChoice(0, {num: 0}));
}

function testStringFormatChoiceWithReplacement1() {
    var str = new IString("0#There are no strings.|1#There is one string.|#There are {num} strings.");

    assertNotNull(str);

    assertEquals("There is one string.", str.formatChoice(1, {num: 1}));
}

function testStringFormatChoiceWithReplacement2() {
    var str = new IString("0#There are no strings.|1#There is one string.|#There are {num} strings.");

    assertNotNull(str);

    assertEquals("There are 2 strings.", str.formatChoice(2, {num: 2}));
}

function testStringFormatChoiceWithMultipleReplacement0() {
    var str = new IString("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");

    assertNotNull(str);

    assertEquals("User johndoe has no items.", str.formatChoice(0, { name: "johndoe", num: 0 }));
}

function testStringFormatChoiceWithMultipleReplacement1() {
    var str = new IString("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");

    assertNotNull(str);

    assertEquals("User johndoe has 1 item.", str.formatChoice(1, { name: "johndoe", num: 1 }));
}

function testStringFormatChoiceWithMultipleReplacement2() {
    var str = new IString("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");

    assertNotNull(str);

    assertEquals("User johndoe has 2 items.", str.formatChoice(2, { name: "johndoe", num: 2 }));
}

function testStringDelegateCharAt() {
    var str = new IString("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");

    assertNotNull(str);

    assertEquals("{", str.charAt(7).toString());
}

function testStringDelegateCharCodeAt() {
    var str = new IString("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");

    assertNotNull(str);

    assertEquals(123, str.charCodeAt(7));
}

function testStringDelegateConcat() {
    var str = new IString("abc");

    assertNotNull(str);

    assertEquals("abcdef", str.concat("def").toString());
}

function testStringDelegateIndexOf() {
    var str = new IString("abcdefghijklmnopqrstuvwxyz");

    assertNotNull(str);

    assertEquals(11, str.indexOf("lmno"));
}

function testStringDelegateIndexOf() {
    var str = new IString("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");

    assertNotNull(str);

    assertEquals(26, str.lastIndexOf("lmno"));
}

function testStringDelegateMatch() {
    var str = new IString("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");

    assertNotNull(str);

    var m = str.match(/lmno/g);
    assertEquals(2, m.length);
    assertEquals("lmno", m[0]);
    assertEquals("lmno", m[1]);
}

function testStringDelegateReplace() {
    var str = new IString("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");

    assertNotNull(str);

    assertEquals("abcdefghijkxxxpqrstuvwxyzlmnopqrstuv", str.replace(/lmno/, "xxx").toString());
}

function testStringDelegateSearch() {
    var str = new IString("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");

    assertNotNull(str);

    assertEquals(11, str.search(/lmno/));
}

function testStringDelegateSplit() {
    var str = new IString("abcdefghijklmnopqrstuvwxyz");

    assertNotNull(str);

    var consonants = str.split(/[aeiou]/);
    assertEquals(6, consonants.length);
    assertEquals("", consonants[0]);
    assertEquals("bcd", consonants[1]);
    assertEquals("fgh", consonants[2]);
    assertEquals("jklmn", consonants[3]);
    assertEquals("pqrst", consonants[4]);
    assertEquals("vwxyz", consonants[5]);
}

function testStringDelegateSubstr() {
    var str = new IString("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");

    assertNotNull(str);

    assertEquals("lmnopqrstuv", str.substr(26).toString());
}

function testStringDelegateSubstring() {
    var str = new IString("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");

    assertNotNull(str);

    assertEquals("bcde", str.substring(1,5));
}

function testStringDelegateToLowerCase() {
    var str = new IString("ABCDEF");

    assertNotNull(str);

    assertEquals("abcdef", str.toLowerCase());
}

function testStringDelegateToLowerCase() {
    var str = new IString("abcdef");

    assertNotNull(str);

    assertEquals("ABCDEF", str.toUpperCase());
}

function testCodePointToUTF() {
    var str = IString.fromCodePoint(0x10302);

    assertEquals(2, str.length);
    assertEquals(0xD800, str.charCodeAt(0));
    assertEquals(0xDF02, str.charCodeAt(1));
}

function testCodePointToUTFLast() {
    var str = IString.fromCodePoint(0x10FFFD);

    assertEquals(2, str.length);
    assertEquals(0xDBFF, str.charCodeAt(0));
    assertEquals(0xDFFD, str.charCodeAt(1));
}

function testCodePointToUTFFirst() {
    var str = IString.fromCodePoint(0x10000);

    assertEquals(2, str.length);
    assertEquals(0xD800, str.charCodeAt(0));
    assertEquals(0xDC00, str.charCodeAt(1));
}

function testCodePointToUTFBeforeFirst() {
    var str = IString.fromCodePoint(0xFFFF);

    assertEquals(1, str.length);
    assertEquals(0xFFFF, str.charCodeAt(0));
}

function testCodePointToUTFNotSupplementary() {
    var str = IString.fromCodePoint(0x0302);

    assertEquals(1, str.length);
    assertEquals(0x0302, str.charCodeAt(0));
}

function testIteratorSimple() {
    var str = new IString("abcd");

    var it = str.iterator();
    assertTrue(it.hasNext());
    assertEquals(0x0061, it.next());
    assertTrue(it.hasNext());
    assertEquals(0x0062, it.next());
    assertTrue(it.hasNext());
    assertEquals(0x0063, it.next());
    assertTrue(it.hasNext());
    assertEquals(0x0064, it.next());
    assertFalse(it.hasNext());
    assertEquals(-1, it.next());
}

function testIteratorComplex() {
    var str = new IString("a\uD800\uDF02b\uD800\uDC00");

    var it = str.iterator();
    assertTrue(it.hasNext());
    assertEquals(0x0061, it.next());
    assertTrue(it.hasNext());
    assertEquals(0x10302, it.next());
    assertTrue(it.hasNext());
    assertEquals(0x0062, it.next());
    assertTrue(it.hasNext());
    assertEquals(0x10000, it.next());
    assertFalse(it.hasNext());
    assertEquals(-1, it.next());
}

function testIteratorEmpty() {
    var str = new IString("");

    var it = str.iterator();
    assertFalse(it.hasNext());
    assertEquals(-1, it.next());
}

function testForEachCodePointSimple() {
    var str = new IString("abcd");

    var expected = [0x0061, 0x0062, 0x0063, 0x0064];
    var i = 0;

    str.forEachCodePoint(function(ch) {
        assertEquals(expected[i++], ch);
    });
    
    assertEquals(4, i);
}

function testForEachCodePointComplex() {
    var str = new IString("a\uD800\uDF02b\uD800\uDC00");

    var expected = [0x0061, 0x10302, 0x0062, 0x10000];
    var i = 0;

    str.forEachCodePoint(function(ch) {
        assertEquals(expected[i++], ch);
    });
    assertEquals(4, i);
}

function testForEachCodePointEmpty() {
    var str = new IString("");
    var notcalled = true;
    
    str.forEachCodePoint(function(ch) {
        // should never call this callback
        notcalled = false;
        fail();
    });
    
    assertTrue(notcalled);
}

function testCharIteratorSimple() {
    var str = new IString("abcd");

    var it = str.charIterator();
    assertTrue(it.hasNext());
    assertEquals("a", it.next());
    assertTrue(it.hasNext());
    assertEquals("b", it.next());
    assertTrue(it.hasNext());
    assertEquals("c", it.next());
    assertTrue(it.hasNext());
    assertEquals("d", it.next());
    assertFalse(it.hasNext());
    assertEquals(undefined, it.next());
}

function testCharIteratorComplex() {
    var str = new IString("a\uD800\uDF02b\uD800\uDC00");

    var it = str.charIterator();
    assertTrue(it.hasNext());
    assertEquals("a", it.next());
    assertTrue(it.hasNext());
    assertEquals("\uD800\uDF02", it.next());
    assertTrue(it.hasNext());
    assertEquals("b", it.next());
    assertTrue(it.hasNext());
    assertEquals("\uD800\uDC00", it.next());
    assertFalse(it.hasNext());
    assertEquals(undefined, it.next());
}

function testCharIteratorEmpty() {
    var str = new IString("");

    var it = str.charIterator();
    assertFalse(it.hasNext());
    assertEquals(undefined, it.next());
}

function testForEachSimple() {
    var str = new IString("abcd");

    var expected = ["a", "b", "c", "d"];
    var i = 0;

    str.forEach(function(ch) {
        assertEquals(expected[i++], ch);
    });
    
    assertEquals(4, i);
}

function testForEachComplex() {
    var str = new IString("a\uD800\uDF02b\uD800\uDC00");

    var expected = ["a", "\uD800\uDF02", "b", "\uD800\uDC00"];
    var i = 0;

    str.forEach(function(ch) {
        assertEquals(expected[i++], ch);
    });
    
    assertEquals(4, i)
}

function testForEachEmpty() {
    var str = new IString("");
    var notcalled = true;
    
    str.forEach(function(ch) {
        // should never call this callback
        notcalled = false;
        fail();
    });
    
    assertTrue(notcalled);
}

function testCodePointLengthUCS2() {
    var str = new IString("abcd");

    assertEquals(4, str.codePointLength());
    assertEquals(4, str.length);
}

function testCodePointLengthWithSurrogates() {
    var str = new IString("a\uD800\uDF02b\uD800\uDC00");

    assertEquals(4, str.codePointLength());
    assertEquals(6, str.length);
}

function testCodePointLengthEmpty() {
    var str = new IString("");

    assertEquals(0, str.codePointLength());
    assertEquals(0, str.length);
}

function testCodePointAtUCS2() {
    var str = new IString("abcd");

    assertEquals(0x61, str.codePointAt(0));
    assertEquals(0x62, str.codePointAt(1));
    assertEquals(0x63, str.codePointAt(2));
    assertEquals(0x64, str.codePointAt(3));
}

function testCodePointAtWithSurrogates() {
    var str = new IString("a\uD800\uDF02b\uD800\uDC00");

    assertEquals(0x61, str.codePointAt(0));
    assertEquals(0x10302, str.codePointAt(1));
    assertEquals(0x62, str.codePointAt(2));
    assertEquals(0x10000, str.codePointAt(3));
}

function testCodePointAtEmpty() {
    var str = new IString("");

    assertEquals(-1, str.codePointAt(0));
}

function testCodePointAtPastEndUCS2() {
    var str = new IString("abcd");

    assertEquals(-1, str.codePointAt(4));
}

function testCodePointAtNegUCS2() {
    var str = new IString("abcd");

    assertEquals(-1, str.codePointAt(-234));
}

function testCodePointAtPastEndWithSurrogates() {
    var str = new IString("a\uD800\uDF02b\uD800\uDC00");

    assertEquals(-1, str.codePointAt(4));
}

function testCodePointAtNegWithSurrogates() {
    var str = new IString("a\uD800\uDF02b\uD800\uDC00");

    assertEquals(-1, str.codePointAt(-234));
}

function testRuleGetValueN() {
    var rule = {
        n: []
    };

    var actual = IString._fncs.getValue(rule, 8.2);
    assertRoughlyEquals(8.2, actual, 0.01);
}

function testRuleGetValueIsTrue() {
    var rule = {
        is: [
            "n",
            2
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 2));
}

function testRuleGetValueIsFalse() {
    var rule = {
        is: [
            "n",
            2
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 3));
}

function testRuleGetValueIsNotTrue() {
    var rule = {
        isnot: [
            "n",
            2
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 3));
}

function testRuleGetValueIsNotFalse() {
    var rule = {
        isnot: [
            "n",
            2
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 2));
}

function testRuleGetValueInRangeTrueStart() {
    var rule = {
        inrange: [
            "n",
            [[0,2]]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 0));
}

function testRuleGetValueInRangeTrueEnd() {
    var rule = {
        inrange: [
            "n",
            [[0,2]]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 2));
}

function testRuleGetValueInRangeTrueBetween() {
    var rule = {
        inrange: [
            "n",
            [[0,2]]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 1));
}

function testRuleGetValueInRangeFalse() {
    var rule = {
        inrange: [
            "n",
            [[0,2]]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 3));
}

function testRuleGetValueInRangeFalseNotInteger() {
    var rule = {
        inrange: [
            "n",
            [[0,2]]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 0.5));
}


function testRuleGetValueInRangeFalseIntegersAfter() {
    var rule = {
        inrange: [
            "n",
            [0,2]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 4));
}

function testRuleGetValueInRangeFalseIntegersBefore() {
    var rule = {
        inrange: [
            "n",
            [1,3]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 0));
}

function testRuleGetValueInRangeFalseIntegersBetween() {
    var rule = {
        inrange: [
            "n",
            [0,2]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 1));
}

function testRuleGetValueInRangeIntegersTrue() {
    var rule = {
        inrange: [
            "n",
            [0,2]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 2));
}

function testRuleGetValueInRangeIntegersTrueNotInteger() {
    var rule = {
        inrange: [
            "n",
            [0,2]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 0.5));
}

function testRuleGetValueInRangeIntegersTrueMany() {
    var rule = {
        inrange: [
            "n",
            [0,2,4,6,8]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 6));
}


function testRuleGetValueInRangeComplexTrue1() {
    var rule = {
        inrange: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 0));
}

function testRuleGetValueInRangeComplexTrue2() {
    var rule = {
        inrange: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 2));
}

function testRuleGetValueInRangeComplexTrue3() {
    var rule = {
        inrange: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 3));
}

function testRuleGetValueInRangeComplexTrue4() {
    var rule = {
        inrange: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 4));
}

function testRuleGetValueInRangeComplexTrue5() {
    var rule = {
        inrange: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 8));
}

function testRuleGetValueInRangeComplexTrue6() {
    var rule = {
        inrange: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 9));
}

function testRuleGetValueInRangeComplexFalse1() {
    var rule = {
        inrange: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 1));
}

function testRuleGetValueInRangeComplexFalse2() {
    var rule = {
        inrange: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 5));
}

function testRuleGetValueInRangeComplexFalse3() {
    var rule = {
        inrange: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 10));
}

function testRuleGetValueNotInRangeTrueStart() {
    var rule = {
        notin: [
            "n",
            [[0,2]]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 0));
}

function testRuleGetValueNotInRangeTrueEnd() {
    var rule = {
        notin: [
            "n",
            [[0,2]]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 2));
}

function testRuleGetValueNotInRangeTrueBetween() {
    var rule = {
        notin: [
            "n",
            [[0,2]]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 1));
}

function testRuleGetValueNotInRangeFalse() {
    var rule = {
        notin: [
            "n",
            [[0,2]]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 3));
}

function testRuleGetValueNotInRangeFalseNotInteger() {
    var rule = {
        notin: [
            "n",
            [[0,2]]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 0.5));
}


function testRuleGetValueNotInRangeFalseIntegersAfter() {
    var rule = {
        notin: [
            "n",
            [0,2]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 4));
}

function testRuleGetValueNotInRangeFalseIntegersBefore() {
    var rule = {
        notin: [
            "n",
            [1,3]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 0));
}

function testRuleGetValueNotInRangeFalseIntegersBetween() {
    var rule = {
        notin: [
            "n",
            [0,2]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 1));
}

function testRuleGetValueNotInRangeIntegersTrue() {
    var rule = {
        notin: [
            "n",
            [0,2]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 2));
}

function testRuleGetValueNotInRangeIntegersFalseNotInteger() {
    var rule = {
        notin: [
            "n",
            [0,2]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 0.5));
}

function testRuleGetValueNotInRangeIntegersTrueMany() {
    var rule = {
        notin: [
            "n",
            [0,2,4,6,8]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 6));
}


function testRuleGetValueNotInRangeComplexTrue1() {
    var rule = {
        notin: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 0));
}

function testRuleGetValueNotInRangeComplexTrue2() {
    var rule = {
        notin: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 2));
}

function testRuleGetValueNotInRangeComplexTrue3() {
    var rule = {
        notin: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 3));
}

function testRuleGetValueNotInRangeComplexTrue4() {
    var rule = {
        notin: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 4));
}

function testRuleGetValueNotInRangeComplexTrue5() {
    var rule = {
        notin: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 8));
}

function testRuleGetValueNotInRangeComplexTrue6() {
    var rule = {
        notin: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 9));
}

function testRuleGetValueNotInRangeComplexFalse1() {
    var rule = {
        notin: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 1));
}

function testRuleGetValueNotInRangeComplexFalse2() {
    var rule = {
        notin: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 5));
}

function testRuleGetValueNotInRangeComplexFalse3() {
    var rule = {
        notin: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 10));
}

function testRuleGetValueWithinTrueStart() {
    var rule = {
        within: [
            "n",
            [[0,2]]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 0));
}

function testRuleGetValueWithinTrueEnd() {
    var rule = {
        within: [
            "n",
            [[0,2]]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 2));
}

function testRuleGetValueWithinTrueBetween() {
    var rule = {
        within: [
            "n",
            [[0,2]]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 1));
}

function testRuleGetValueWithinFalse() {
    var rule = {
        within: [
            "n",
            [[0,2]]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 3));
}

function testRuleGetValueWithinTrueNotInteger() {
    var rule = {
        within: [
            "n",
            [[0,2]]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 0.5));
}


function testRuleGetValueWithinFalseAfter() {
    var rule = {
        within: [
            "n",
            [0,2]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 2.1));
}

function testRuleGetValueWithinFalseBefore() {
    var rule = {
        within: [
            "n",
            [1,3]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 0.9));
}

function testRuleGetValueWithinFalseBetween() {
    var rule = {
        within: [
            "n",
            [0,2]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 1.876));
}

function testRuleGetValueWithinITrue() {
    var rule = {
        within: [
            "n",
            [0,2]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 2));
}

function testRuleGetValueWithinIntegersTrueNotInteger() {
    var rule = {
        within: [
            "n",
            [0,2]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 0.5));
}

function testRuleGetValueWithinIntegersTrueMany() {
    var rule = {
        within: [
            "n",
            [0,2,4,6,8]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 6));
}


function testRuleGetValueWithinComplexTrue1() {
    var rule = {
        within: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 0));
}

function testRuleGetValueWithinComplexTrue2() {
    var rule = {
        within: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 2.8));
}

function testRuleGetValueWithinComplexTrue3() {
    var rule = {
        within: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 3));
}

function testRuleGetValueWithinComplexTrue4() {
    var rule = {
        within: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 4));
}

function testRuleGetValueWithinComplexTrue5() {
    var rule = {
        within: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 8));
}

function testRuleGetValueWithinComplexTrue6() {
    var rule = {
        within: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 9));
}

function testRuleGetValueWithinComplexFalse1() {
    var rule = {
        within: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 1));
}

function testRuleGetValueWithinComplexFalse2() {
    var rule = {
        within: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 5));
}

function testRuleGetValueWithinComplexFalse3() {
    var rule = {
        within: [
            "n",
            [0,[2,4],8,9]
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 10));
}

function testRuleGetValueMod() {
    var rule = {
        mod: [
            "n",
            6
        ]
    };

    assertEquals(4, IString._fncs.getValue(rule, 10));
}

function testRuleGetValueModNonInteger() {
    var rule = {
        mod: [
            "n",
            6
        ]
    };

    var actual = IString._fncs.getValue(rule, 8.2);
    assertRoughlyEquals(2.2, actual, 0.01);
}

function testRuleGetValueModNegative() {
    var rule = {
        mod: [
            "n",
            6
        ]
    };

    var actual = IString._fncs.getValue(rule, -11);
    assertRoughlyEquals(1, actual, 0.01);
}

function testRuleGetValueOrFalseFalse() {
    var rule = {
        or: [
            false,
            false
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 11));
}

function testRuleGetValueOrFalseTrue() {
    var rule = {
        or: [
            false,
            true
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 11));
}

function testRuleGetValueOrTrueFalse() {
    var rule = {
        or: [
            true,
            false
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 11));
}

function testRuleGetValueOrTrueTrue() {
    var rule = {
        or: [
            true,
            true
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 11));
}

function testRuleGetValueAndFalseFalse() {
    var rule = {
        and: [
            false,
            false
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 11));
}

function testRuleGetValueAndFalseTrue() {
    var rule = {
        and: [
            false,
            true
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 11));
}

function testRuleGetValueAndTrueFalse() {
    var rule = {
        and: [
            true,
            false
        ]
    };

    assertFalse(IString._fncs.getValue(rule, 11));
}

function testRuleGetValueAndTrueTrue() {
    var rule = {
        and: [
            true,
            true
        ]
    };

    assertTrue(IString._fncs.getValue(rule, 11));
}

function testRuleComplex1() {
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

    assertTrue(IString._fncs.getValue(rule, 3));
    assertFalse(IString._fncs.getValue(rule, 13));
    assertTrue(IString._fncs.getValue(rule, 23));
    assertTrue(IString._fncs.getValue(rule, 103));
    assertFalse(IString._fncs.getValue(rule, 113));
    assertTrue(IString._fncs.getValue(rule, 123));
}

function testRuleComplex2() {
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

    assertFalse(IString._fncs.getValue(rule, 1));
    assertFalse(IString._fncs.getValue(rule, 11));
    assertFalse(IString._fncs.getValue(rule, 21));
    assertFalse(IString._fncs.getValue(rule, 101));
    assertFalse(IString._fncs.getValue(rule, 111));
    assertFalse(IString._fncs.getValue(rule, 121));
}

function testRuleComplex3() {
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

    assertFalse(IString._fncs.getValue(rule, 5));
    assertFalse(IString._fncs.getValue(rule, 15));
    assertFalse(IString._fncs.getValue(rule, 25));
    assertFalse(IString._fncs.getValue(rule, 105));
    assertFalse(IString._fncs.getValue(rule, 115));
    assertFalse(IString._fncs.getValue(rule, 125));
}

function testRuleComplex4() {
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

    assertTrue(IString._fncs.getValue(rule, 3.5));
    assertFalse(IString._fncs.getValue(rule, 13.5));
    assertTrue(IString._fncs.getValue(rule, 23.5));
    assertTrue(IString._fncs.getValue(rule, 103.5));
    assertFalse(IString._fncs.getValue(rule, 113.5));
    assertTrue(IString._fncs.getValue(rule, 123.5));
}

function testStringGetLocaleDefault() {
    var str = new IString("foo");

    assertNotNull(str);

    assertEquals("en-US", str.getLocale());
}

function testStringGetLocaleWithLocaleObj() {
    var str = new IString("foo");
    str.setLocale(new Locale("ja-JP"));

    assertNotNull(str);

    assertEquals("ja-JP", str.getLocale());
}

function testStringGetLocaleWithLocaleSpec() {
    var str = new IString("foo");
    str.setLocale("ja-JP");

    assertNotNull(str);

    assertEquals("ja-JP", str.getLocale());
}

function testStringSetLocaleUndefined() {
    var str = new IString("foo");
    str.setLocale(undefined);

    assertNotNull(str);

    assertEquals("en-US", str.getLocale());
}

function testStringFormatChoiceCharClasses1() {
    var str = new IString("0#There are no items.|one#The items end in one.|two#The items end in two|few#The items is few|#Default items");
    str.setLocale("sl-SL");

    assertNotNull(str);

    assertEquals("There are no items.", str.formatChoice(0));
}

function testStringFormatChoiceCharClasses2() {
    var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
    str.setLocale("sl-SL");

    assertNotNull(str);

    assertEquals("The items end in one", str.formatChoice(1));
}

function testStringFormatChoiceCharClasses3() {
    var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
    str.setLocale("sl-SL");

    assertNotNull(str);

    assertEquals("Default items", str.formatChoice(11));
}

function testStringFormatChoiceCharClasses4() {
    var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
    str.setLocale("sl-SL");

    assertNotNull(str);

    assertEquals("The items end in one", str.formatChoice(101));
}

function testStringFormatChoiceCharClasses5() {
    var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
    str.setLocale("sl-SL");

    assertNotNull(str);

    assertEquals("The items end in two", str.formatChoice(2));
}

function testStringFormatChoiceCharClasses6() {
    var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
    str.setLocale("sl-SL");

    assertNotNull(str);

    assertEquals("The items end in two", str.formatChoice(102));
}

function testStringFormatChoiceCharClasses7() {
    var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
    str.setLocale("sl-SL");

    assertNotNull(str);

    assertEquals("Default items", str.formatChoice(12));
}

function testStringFormatChoiceCharClasses8() {
    var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
    str.setLocale("sl-SL");

    assertNotNull(str);

    assertEquals("The items is few", str.formatChoice(3));
}

function testStringFormatChoiceCharClasses9() {
    var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
    str.setLocale("sl-SL");

    assertNotNull(str);

    assertEquals("The items is few", str.formatChoice(103));
}

function testStringFormatChoiceCharClasses10() {
    var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
    str.setLocale("sl-SL");

    assertNotNull(str);

    assertEquals("The items is few", str.formatChoice(4));
}

function testStringFormatChoiceCharClasses11() {
    var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
    str.setLocale("sl-SL");

    assertNotNull(str);

    assertEquals("The items is few", str.formatChoice(104));
}

function testStringFormatChoiceCharClasses12() {
    var str = new IString("0#There are no items.|one#The items end in one|two#The items end in two|few#The items is few|#Default items");
    str.setLocale("sl-SL");

    assertNotNull(str);

    assertEquals("Default items", str.formatChoice(5));
}

function testStringFormatChoiceCharClasses13() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("ar-SA");

    assertNotNull(str);

    assertEquals("The items are many", str.formatChoice(30));
}

function testStringFormatChoiceCharClasses14() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("az-Latn-AZ");

    assertNotNull(str);

    assertEquals("Default items", str.formatChoice(30));
}

function testStringFormatChoiceCharClasses15() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("az-Latn-AZ");

    assertNotNull(str);

    assertEquals("There items are one", str.formatChoice(1));
}

function testStringFormatChoiceCharClassesComplex1() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("pl-PL");

    assertNotNull(str);

    assertEquals("There items are one", str.formatChoice(1));
}

function testStringFormatChoiceCharClassesComplex2() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("pl-PL");

    assertNotNull(str);

    assertEquals("The items are few", str.formatChoice(2));
}

function testStringFormatChoiceCharClassesComplex3() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("pl-PL");

    assertNotNull(str);

    assertEquals("The items are many", str.formatChoice(12));
}

function testStringFormatChoiceCharClassesComplex4() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("pl-PL");

    assertNotNull(str);

    assertEquals("The items are few", str.formatChoice(22));
}

function testStringFormatChoiceCharClassesComplex5() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("pl-PL");

    assertNotNull(str);

    assertEquals("The items are few", str.formatChoice(102));
}

function testStringFormatChoiceCharClassesComplex6() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("pl-PL");

    assertNotNull(str);

    assertEquals("The items are many", str.formatChoice(112));
}

function testStringFormatChoiceCharClassesComplex7() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("pl-PL");

    assertNotNull(str);

    assertEquals("The items are few", str.formatChoice(122));
}

function testStringFormatChoiceCharClassesComplex8() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("pl-PL");

    assertNotNull(str);

    assertEquals("The items are many", str.formatChoice(5));
}

function testStringFormatChoiceCharClassesComplex9() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("pl-PL");

    assertNotNull(str);

    assertEquals("The items are many", str.formatChoice(112));
}

function testStringFormatChoiceCharClassesComplex10() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("pl-PL");

    assertNotNull(str);

    assertEquals("The items are many", str.formatChoice(10));
}

function testStringFormatChoiceCharClassesComplex11() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("az-Latn-AZ");

    assertNotNull(str);

    assertEquals("Default items", str.formatChoice(10));
}

function testStringFormatChoiceDecimal1() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("ar-EG");

    assertNotNull(str);

    assertEquals("The items are few", str.formatChoice(8.0));
}

function testStringFormatChoiceDecimal2() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("hy-AM");

    assertNotNull(str);

    assertEquals("Default items", str.formatChoice(3.5));
}

function testStringFormatChoiceDecimal3() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("hr-HR");

    assertNotNull(str);

    assertEquals("The items are few", str.formatChoice(2.3));
}

function testStringFormatChoiceDecimal4() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("hr-HR");

    assertNotNull(str);

    assertEquals("There items are one", str.formatChoice(10.1));
}

function testStringFormatChoiceDecimal5() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("hr-HR");

    assertNotNull(str);

    assertEquals("Default items", str.formatChoice(2.5));
}

function testStringFormatChoiceDecimal6() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("he-IL");

    assertNotNull(str);

    assertEquals("Default items", str.formatChoice(10.0));
}

function testStringFormatChoiceDecimal7() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("ga-IE");

    assertNotNull(str);

    assertEquals("Default items", str.formatChoice(1.6));
}

function testStringFormatChoiceDecimal8() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("ga-IE");

    assertNotNull(str);

    assertEquals("The items are few", str.formatChoice(5.2));
}

function testStringFormatChoiceDecimal9() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("lv-LV");

    assertNotNull(str);

    assertEquals("Default items", str.formatChoice(1.9));
}

function testStringFormatChoiceDecimal10() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("lv-LV");

    assertNotNull(str);

    assertEquals("There items are one", str.formatChoice(1.1));
}

function testStringFormatChoiceDecimal11() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("lt-LT");

    assertNotNull(str);

    assertEquals("The items are many", str.formatChoice(1.7));
}

function testStringFormatChoiceDecimal12() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("fa-IR");

    assertNotNull(str);

    assertEquals("Default items", str.formatChoice(2.6));
}

function testStringFormatChoiceDecimal13() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("fa-IR");

    assertNotNull(str);

    assertEquals("There items are one", str.formatChoice(0.04));
}

function testStringFormatChoiceDecimal14() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("sk-KS");

    assertNotNull(str);

    assertEquals("The items are many", str.formatChoice(1.5));
}


function testStringFormatChoiceDecimal15() {
    var str = new IString("0#There are no items.|one#There items are one|few#The items are few|many#The items are many|#Default items");
    str.setLocale("az-Latn-AZ");

    assertNotNull(str);

    assertEquals("Default items", str.formatChoice(1.5));
}
