/*
 * teststrings.js - test the String object
 * 
 * Copyright © 2012, JEDLSoft
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

function testStringConstructor() {
    var str = new ilib.String();
    
    assertNotNull(str);
}

function testStringConstructorEmpty() {
    var str = new ilib.String();
    
    assertNotNull(str);
    
    assertEquals(0, str.length);
    assertEquals("", str.toString());
}

function testStringConstructorFull() {
    var str = new ilib.String("test test test");
    
    assertNotNull(str);

    assertEquals(14, str.length);
    assertEquals("test test test", str.toString());
}

function testStringFormatNoArgs() {
    var str = new ilib.String("Format this string.");
    
    assertNotNull(str);
    
    assertEquals("Format this string.", str.format());
}

function testStringFormatEmpty() {
    var str = new ilib.String();
    
    assertNotNull(str);
    
    assertEquals("", str.format());
}

function testStringFormatEmptyWithArgs() {
    var str = new ilib.String();
    
    assertNotNull(str);
    
    assertEquals("", str.format({test: "Foo"}));
}

function testStringFormatWithArg() {
    var str = new ilib.String("Format {size} string.");
    
    assertNotNull(str);
    
    assertEquals("Format medium string.", str.format({size: "medium"}));
}

function testStringFormatWithMultipleArgs() {
    var str = new ilib.String("Format {size} {object}.");
    
    assertNotNull(str);
    
    assertEquals("Format medium string.", str.format({
        size: "medium",
        object: "string"
    }));
}

function testStringFormatWithMissingArgs() {
    var str = new ilib.String("Format {size} {object}.");
    
    assertNotNull(str);
    
    assertEquals("Format {size} string.", str.format({
        object: "string"
    }));
}

function testStringFormatWithEmptyArg() {
    var str = new ilib.String("Format {size} string.");
    
    assertNotNull(str);
    
    assertEquals("Format  string.", str.format({size: ""}));
}

function testStringFormatHandleNonAsciiParam() {
    var str = new ilib.String("Format {size} string.");
    
    assertNotNull(str);
    
    assertEquals("Format médïûm string.", str.format({size: "médïûm"}));
}

function testStringFormatHandleNonAsciiReplacement() {
    var str = new ilib.String("Format {sïzé} string.");
    
    assertNotNull(str);
    
    assertEquals("Format medium string.", str.format({"sïzé": "medium"}));
}

function testStringFormatMultipleReplacements() {
    var str = new ilib.String("User {user} has {num} objects in their {container}.");
    
    assertNotNull(str);
    
    assertEquals("User edwin has 2 objects in their locker.", str.format({
        user: "edwin",
        num: 2,
        container: "locker"
    }));
}


function testStringFormatChoiceSimple1() {
    var str = new ilib.String("1#first string|2#second string");
    
    assertNotNull(str);
    
    assertEquals("first string", str.formatChoice(1));
}

function testStringFormatChoiceSimple2() {
    var str = new ilib.String("1#first string|2#second string");
    
    assertNotNull(str);
    
    assertEquals("second string", str.formatChoice(2));
}

function testStringFormatChoiceOnlyOneChoicePositive() {
    var str = new ilib.String("1#first string");
    
    assertNotNull(str);
    
    assertEquals("first string", str.formatChoice(1));
}

function testStringFormatChoiceOnlyOneChoiceNegative() {
    var str = new ilib.String("1#first string");
    
    assertNotNull(str);
    
    assertEquals("", str.formatChoice(2));
}

function testStringFormatChoiceNoString() {
    var str = new ilib.String("");
    
    assertNotNull(str);
    
    assertEquals("", str.formatChoice(2));
}

function testStringFormatChoiceSimpleNoMatch() {
    var str = new ilib.String("1#first string|2#second string");
    
    assertNotNull(str);
    
    assertEquals("", str.formatChoice(3));
}

function testStringFormatChoiceSimpleDefault() {
    var str = new ilib.String("1#first string|2#second string|#other string");
    
    assertNotNull(str);
    
    assertEquals("other string", str.formatChoice(3));
}

function testStringFormatChoiceLessThanOrEqualPositive() {
    var str = new ilib.String("<=2#first string|3#second string|#other string");
    
    assertNotNull(str);
    
    assertEquals("first string", str.formatChoice(1));
}

function testStringFormatChoiceLessThanOrEqualEqual() {
    var str = new ilib.String("<=2#first string|3#second string|#other string");
    
    assertNotNull(str);
    
    assertEquals("first string", str.formatChoice(2));
}

function testStringFormatChoiceLessThanOrEqualNotLessThan() {
    var str = new ilib.String("<=2#first string|3#second string|#other string");
    
    assertNotNull(str);
    
    assertEquals("second string", str.formatChoice(3));
}

function testStringFormatChoiceGreaterThanOrEqualPositive() {
    var str = new ilib.String(">=2#first string|1#second string|#other string");
    
    assertNotNull(str);
    
    assertEquals("first string", str.formatChoice(4));
}

function testStringFormatChoiceGreaterThanOrEqualEqual() {
    var str = new ilib.String(">=2#first string|1#second string|#other string");
    
    assertNotNull(str);
    
    assertEquals("first string", str.formatChoice(2));
}

function testStringFormatChoiceGreaterThanOrEqualNotLessThan() {
    var str = new ilib.String(">=2#first string|1#second string|#other string");
    
    assertNotNull(str);
    
    assertEquals("second string", str.formatChoice(1));
}

function testStringFormatChoiceLessThanPositive() {
    var str = new ilib.String("<2#first string|3#second string|#other string");
    
    assertNotNull(str);
    
    assertEquals("first string", str.formatChoice(1));
}

function testStringFormatChoiceLessThanEqual() {
    var str = new ilib.String("<2#first string|3#second string|#other string");
    
    assertNotNull(str);
    
    assertEquals("other string", str.formatChoice(2));
}

function testStringFormatChoiceLessThanNotLessThan() {
    var str = new ilib.String("<2#first string|3#second string|#other string");
    
    assertNotNull(str);
    
    assertEquals("second string", str.formatChoice(3));
}

function testStringFormatChoiceGreaterThanPositive() {
    var str = new ilib.String(">2#first string|1#second string|#other string");
    
    assertNotNull(str);
    
    assertEquals("first string", str.formatChoice(4));
}

function testStringFormatChoiceGreaterThanEqual() {
    var str = new ilib.String(">2#first string|1#second string|#other string");
    
    assertNotNull(str);
    
    assertEquals("other string", str.formatChoice(2));
}

function testStringFormatChoiceGreaterThanNotLessThan() {
    var str = new ilib.String(">2#first string|1#second string|#other string");
    
    assertNotNull(str);
    
    assertEquals("second string", str.formatChoice(1));
}

function testStringFormatRange1() {
    var str = new ilib.String("0-2#first string {num}|3-5#second string {num}|#other string {num}");
    
    assertNotNull(str);
    
    assertEquals("first string 1", str.formatChoice(1, {num: 1}));
}

function testStringFormatRange4() {
    var str = new ilib.String("0-2#first string {num}|3-5#second string {num}|#other string {num}");
    
    assertNotNull(str);
    
    assertEquals("second string 4", str.formatChoice(4, {num: 4}));
}

function testStringFormatRange7() {
    var str = new ilib.String("0-2#first string {num}|3-5#second string {num}|#other string {num}");
    
    assertNotNull(str);
    
    assertEquals("other string 7", str.formatChoice(7, {num: 7}));
}

function testStringFormatChoiceBooleanTrue() {
    var str = new ilib.String("true#first string|false#second string");
    
    assertNotNull(str);
    
    assertEquals("first string", str.formatChoice(true));
}

function testStringFormatChoiceBooleanFalse() {
    var str = new ilib.String("true#first string|false#second string");
    
    assertNotNull(str);
    
    assertEquals("second string", str.formatChoice(false));
}

function testStringFormatChoiceBooleanMissing() {
    var str = new ilib.String("true#first string");
    
    assertNotNull(str);
    
    assertEquals("", str.formatChoice(false));
}

function testStringFormatChoiceStringStaticA() {
    var str = new ilib.String("a#first string|b#second string|c#third string");
    
    assertNotNull(str);
    
    assertEquals("first string", str.formatChoice("a"));
}

function testStringFormatChoiceStringStaticB() {
    var str = new ilib.String("a#first string|b#second string|c#third string");
    
    assertNotNull(str);
    
    assertEquals("second string", str.formatChoice("b"));
}

function testStringFormatChoiceStringStaticC() {
    var str = new ilib.String("a#first string|b#second string|c#third string");
    
    assertNotNull(str);
    
    assertEquals("third string", str.formatChoice("c"));
}

function testStringFormatChoiceStringIgnoreCase() {
    var str = new ilib.String("a#first string|b#second string|c#third string");
    
    assertNotNull(str);
    
    assertEquals("second string", str.formatChoice("B"));
}

function testStringFormatChoiceRegExpA() {
    var str = new ilib.String("a.*b#first string|b.*c#second string|c+d#third string");
    
    assertNotNull(str);
    
    assertEquals("first string", str.formatChoice("acccb"));
}

function testStringFormatChoiceRegExpB() {
    var str = new ilib.String("a.*b#first string|b.*c#second string|c+d#third string");
    
    assertNotNull(str);
    
    assertEquals("second string", str.formatChoice("bbccc"));
}

function testStringFormatChoiceRegExpC() {
    var str = new ilib.String("a.*b#first string|b.*c#second string|c+d#third string");
    
    assertNotNull(str);
    
    assertEquals("third string", str.formatChoice("ccccd"));
}

function testStringFormatChoiceRegExpDefault() {
    var str = new ilib.String("a.*b#first string|b.*c#second string|#third string");
    
    assertNotNull(str);
    
    assertEquals("third string", str.formatChoice("ccccd"));
}

function testStringFormatChoiceRegExpMissing() {
    var str = new ilib.String("a.*b#first string|b.*c#second string|c+d#third string");
    
    assertNotNull(str);
    
    assertEquals("", str.formatChoice("efff"));
}

function testStringFormatChoiceWithReplacement0() {
    var str = new ilib.String("0#There are no strings.|1#There is one string.|#There are {num} strings.");
    
    assertNotNull(str);
    
    assertEquals("There are no strings.", str.formatChoice(0, {num: 0}));
}

function testStringFormatChoiceWithReplacement1() {
    var str = new ilib.String("0#There are no strings.|1#There is one string.|#There are {num} strings.");
    
    assertNotNull(str);
    
    assertEquals("There is one string.", str.formatChoice(1, {num: 1}));
}

function testStringFormatChoiceWithReplacement2() {
    var str = new ilib.String("0#There are no strings.|1#There is one string.|#There are {num} strings.");
    
    assertNotNull(str);
    
    assertEquals("There are 2 strings.", str.formatChoice(2, {num: 2}));
}

function testStringFormatChoiceWithMultipleReplacement0() {
    var str = new ilib.String("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");
    
    assertNotNull(str);
    
    assertEquals("User johndoe has no items.", str.formatChoice(0, {
        name: "johndoe",
        num: 0
    }));
}

function testStringFormatChoiceWithMultipleReplacement1() {
    var str = new ilib.String("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");
    
    assertNotNull(str);
    
    assertEquals("User johndoe has 1 item.", str.formatChoice(1, {
        name: "johndoe",
        num: 1
    }));
}

function testStringFormatChoiceWithMultipleReplacement2() {
    var str = new ilib.String("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");
    
    assertNotNull(str);
    
    assertEquals("User johndoe has 2 items.", str.formatChoice(2, {
        name: "johndoe",
        num: 2
    }));
}

function testStringDelegateCharAt() {
    var str = new ilib.String("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");
    
    assertNotNull(str);
    
    assertEquals("{", str.charAt(7).toString());
}

function testStringDelegateCharCodeAt() {
    var str = new ilib.String("0#User {name} has no items.|1#User {name} has {num} item.|#User {name} has {num} items.");
    
    assertNotNull(str);
    
    assertEquals(123, str.charCodeAt(7));
}

function testStringDelegateConcat() {
    var str = new ilib.String("abc");
    
    assertNotNull(str);
    
    assertEquals("abcdef", str.concat("def").toString());
}

function testStringDelegateIndexOf() {
    var str = new ilib.String("abcdefghijklmnopqrstuvwxyz");
    
    assertNotNull(str);
    
    assertEquals(11, str.indexOf("lmno"));
}

function testStringDelegateIndexOf() {
    var str = new ilib.String("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");
    
    assertNotNull(str);
    
    assertEquals(26, str.lastIndexOf("lmno"));
}

function testStringDelegateMatch() {
    var str = new ilib.String("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");
    
    assertNotNull(str);
    
    var m = str.match(/lmno/g);
    assertEquals(2, m.length);
    assertEquals("lmno", m[0]);
    assertEquals("lmno", m[1]);
}

function testStringDelegateReplace() {
    var str = new ilib.String("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");
    
    assertNotNull(str);
    
    assertEquals("abcdefghijkxxxpqrstuvwxyzlmnopqrstuv", str.replace(/lmno/, "xxx").toString()); 
}

function testStringDelegateSearch() {
    var str = new ilib.String("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");
    
    assertNotNull(str);
    
    assertEquals(11, str.search(/lmno/));
}

function testStringDelegateSplit() {
    var str = new ilib.String("abcdefghijklmnopqrstuvwxyz");
    
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
    var str = new ilib.String("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");
    
    assertNotNull(str);
    
    assertEquals("lmnopqrstuv", str.substr(26).toString());
}

function testStringDelegateSubstring() {
    var str = new ilib.String("abcdefghijklmnopqrstuvwxyzlmnopqrstuv");
    
    assertNotNull(str);
    
    assertEquals("bcde", str.substring(1,5));
}

function testStringDelegateToLowerCase() {
    var str = new ilib.String("ABCDEF");
    
    assertNotNull(str);
    
    assertEquals("abcdef", str.toLowerCase());
}

function testStringDelegateToLowerCase() {
    var str = new ilib.String("abcdef");
    
    assertNotNull(str);
    
    assertEquals("ABCDEF", str.toUpperCase());
}

function testCodePointToUTF() {
    var str = ilib.String.fromCodePoint(0x10302);
    
    assertEquals(2, str.length);
    assertEquals(0xD800, str.charCodeAt(0));
    assertEquals(0xDF02, str.charCodeAt(1));
}

function testCodePointToUTFLast() {
    var str = ilib.String.fromCodePoint(0x10FFFD);
    
    assertEquals(2, str.length);
    assertEquals(0xDBFF, str.charCodeAt(0));
    assertEquals(0xDFFD, str.charCodeAt(1));
}

function testCodePointToUTFFirst() {
    var str = ilib.String.fromCodePoint(0x10000);
    
    assertEquals(2, str.length);
    assertEquals(0xD800, str.charCodeAt(0));
    assertEquals(0xDC00, str.charCodeAt(1));
}

function testCodePointToUTFBeforeFirst() {
    var str = ilib.String.fromCodePoint(0xFFFF);
    
    assertEquals(1, str.length);
    assertEquals(0xFFFF, str.charCodeAt(0));
}

function testCodePointToUTFNotSupplementary() {
    var str = ilib.String.fromCodePoint(0x0302);
    
    assertEquals(1, str.length);
    assertEquals(0x0302, str.charCodeAt(0));
}

function testIteratorSimple() {
    var str = new ilib.String("abcd");

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
    var str = new ilib.String("a\uD800\uDF02b\uD800\uDC00");

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
    var str = new ilib.String("");

    var it = str.iterator();
    assertFalse(it.hasNext());
    assertEquals(-1, it.next());
}

function testCharIteratorSimple() {
    var str = new ilib.String("abcd");

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
    var str = new ilib.String("a\uD800\uDF02b\uD800\uDC00");

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
    var str = new ilib.String("");

    var it = str.charIterator();
    assertFalse(it.hasNext());
    assertEquals(undefined, it.next());
}

function testCodePointLengthUCS2() {
    var str = new ilib.String("abcd");

    assertEquals(4, str.codePointLength());
    assertEquals(4, str.length);
}

function testCodePointLengthWithSurrogates() {
    var str = new ilib.String("a\uD800\uDF02b\uD800\uDC00");

    assertEquals(4, str.codePointLength());
    assertEquals(6, str.length);
}

function testCodePointLengthEmpty() {
    var str = new ilib.String("");

    assertEquals(0, str.codePointLength());
    assertEquals(0, str.length);
}

function testCodePointAtUCS2() {
    var str = new ilib.String("abcd");

    assertEquals(0x61, str.codePointAt(0));
    assertEquals(0x62, str.codePointAt(1));
    assertEquals(0x63, str.codePointAt(2));
    assertEquals(0x64, str.codePointAt(3));
}

function testCodePointAtWithSurrogates() {
    var str = new ilib.String("a\uD800\uDF02b\uD800\uDC00");

    assertEquals(0x61, str.codePointAt(0));
    assertEquals(0x10302, str.codePointAt(1));
    assertEquals(0x62, str.codePointAt(2));
    assertEquals(0x10000, str.codePointAt(3));
}

function testCodePointAtEmpty() {
    var str = new ilib.String("");

    assertEquals(-1, str.codePointAt(0));
}

function testCodePointAtPastEndUCS2() {
    var str = new ilib.String("abcd");

    assertEquals(-1, str.codePointAt(4));
}

function testCodePointAtNegUCS2() {
    var str = new ilib.String("abcd");

    assertEquals(-1, str.codePointAt(-234));
}

function testCodePointAtPastEndWithSurrogates() {
    var str = new ilib.String("a\uD800\uDF02b\uD800\uDC00");

    assertEquals(-1, str.codePointAt(4));
}

function testCodePointAtNegWithSurrogates() {
    var str = new ilib.String("a\uD800\uDF02b\uD800\uDC00");

    assertEquals(-1, str.codePointAt(-234));
}
