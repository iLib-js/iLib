/*
 * teststrings.js - test the String object
 * 
 * Copyright © 2012, JEDL Software, Inc.
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
    
    assertEquals(0, str.length());
    assertEquals("", str.toString());
}

function testStringConstructorFull() {
    var str = new ilib.String("test test test");
    
    assertNotNull(str);

    assertEquals(14, str.length());
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

