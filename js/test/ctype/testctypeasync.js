/*
 * testctypeasync.js - test the character type information functions
 *
 * Copyright © 2018, JEDLSoft
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

if (typeof(isXdigit) === "undefined") {
    var isXdigit = require("../../lib/isXdigit.js");
}
if (typeof(isUpper) === "undefined") {
    var isUpper = require("../../lib/isUpper.js");
}
if (typeof(isSpace) === "undefined") {
    var isSpace = require("../../lib/isSpace.js");
}
if (typeof(isScript) === "undefined") {
    var isScript = require("../../lib/isScript.js");
}
if (typeof(isPunct) === "undefined") {
    var isPunct = require("../../lib/isPunct.js");
}
if (typeof(isPrint) === "undefined") {
    var isPrint = require("../../lib/isPrint.js");
}
if (typeof(isLower) === "undefined") {
    var isLower = require("../../lib/isLower.js");
}
if (typeof(isIdeo) === "undefined") {
    var isIdeo = require("../../lib/isIdeo.js");
}
if (typeof(isGraph) === "undefined") {
    var isGraph = require("../../lib/isGraph.js");
}
if (typeof(isDigit) === "undefined") {
    var isDigit = require("../../lib/isDigit.js");
}
if (typeof(isCntrl) === "undefined") {
    var isCntrl = require("../../lib/isCntrl.js");
}
if (typeof(isBlank) === "undefined") {
    var isBlank = require("../../lib/isBlank.js");
}
if (typeof(isAscii) === "undefined") {
    var isAscii = require("../../lib/isAscii.js");
}
if (typeof(isAlpha) === "undefined") {
    var isAlpha = require("../../lib/isAlpha.js");
}
if (typeof(isAlnum) === "undefined") {
    var isAlnum = require("../../lib/isAlnum.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}
if (typeof(Currency) === "undefined") {
    var Currency = require("../../lib/Currency.js");
}
if (typeof(CType) === "undefined") {
    var CType = require("../../lib/CType.js");
}
if (typeof(IString) === "undefined") {
    var IString = require("../../lib/IString.js");
}

module.exports.testctypeasync = {
    testIsAlphaTrue: function(test) {
        test.expect(5);
        isAlpha._init(false, undefined, function() {
            test.ok(isAlpha('a'));
            test.ok(isAlpha('m'));
            test.ok(isAlpha('z'));
            test.ok(isAlpha('A'));
            test.ok(isAlpha('Q'));
            test.done();
        });
    },
    testIsLowerTrue: function(test) {
        test.expect(11);
        isLower._init(false, undefined, function() {
            test.ok(isLower('a'));
            test.ok(isLower('m'));
            test.ok(isLower('щ'));
            test.ok(isLower('λ'));
            test.ok(!isLower(' '));
            test.ok(!isLower('$'));
            test.ok(!isLower('A'));
            test.ok(!isLower('M'));
            test.ok(!isLower('0'));
            test.ok(!isLower('Щ'));
            test.ok(!isLower('Λ'));
            test.done();
        });
    },
    testIsUpperTrue: function(test) {
        test.expect(11);
        isUpper._init(false, undefined, function() {
            test.ok(isUpper('A'));
            test.ok(isUpper('M'));
            test.ok(isUpper('Щ'));
            test.ok(isUpper('Λ'));
            test.ok(!isUpper(' '));
            test.ok(!isUpper('$'));
            test.ok(!isUpper('a'));
            test.ok(!isUpper('m'));
            test.ok(!isUpper('щ'));
            test.ok(!isUpper('λ'));
            test.ok(!isUpper('0'));
            test.done();
        });
    },
    testIsPrintTrue: function(test) {
        test.expect(7);
        isPrint._init(false, undefined, function() {
            test.ok(isPrint(' '));
            test.ok(isPrint('A'));
            test.ok(isPrint('M'));
            test.ok(isPrint('Щ'));
            test.ok(isPrint('Λ'));
            test.ok(!isPrint('\u0001'));
            test.ok(!isPrint('\u0085'));
            test.done();
        });
    },
    testIsAsciiTrue: function(test) {
        test.expect(13);
        isAscii._init(false, undefined, function() {
            test.ok(isAscii('a'));
            test.ok(isAscii('m'));
            test.ok(isAscii('z'));
            test.ok(isAscii('A'));
            test.ok(isAscii('Q'));
            test.ok(isAscii(' '));
            test.ok(isAscii('$'));
            test.ok(isAscii('0'));
            test.ok(isAscii('1'));
            test.ok(isAscii('8'));
            test.ok(!isAscii('ü'));
            test.ok(!isAscii('ó'));
            test.ok(!isAscii('Д'));
            test.done();
        });
    },
    testIsBlankTrue: function(test) {
        test.expect(13);
        isBlank._init(false, undefined, function() {
            test.ok(isBlank(' '));
            test.ok(!isBlank('a'));
            test.ok(!isBlank('m'));
            test.ok(!isBlank('z'));
            test.ok(!isBlank('A'));
            test.ok(!isBlank('Q'));
            test.ok(!isBlank('$'));
            test.ok(!isBlank('0'));
            test.ok(!isBlank('1'));
            test.ok(!isBlank('8'));
            test.ok(!isBlank('ü'));
            test.ok(!isBlank('ó'));
            test.ok(!isBlank('Д'));
            test.done();
        });
    },
    testIsSpaceTrue: function(test) {
        test.expect(11);
        isSpace._init(false, undefined, function() {
            test.ok(isSpace(' '));
            test.ok(isSpace('\t'));
            test.ok(isSpace('\n'));
            test.ok(isSpace('\u2000'));
            test.ok(!isSpace('a'));
            test.ok(!isSpace('A'));
            test.ok(!isSpace('$'));
            test.ok(!isSpace('0'));
            test.ok(!isSpace('ü'));
            test.ok(!isSpace('ó'));
            test.ok(!isSpace('Д'));
            test.done();
        });
    },
    testIsPunctTrue: function(test) {
        test.expect(17);
        isPunct._init(false, undefined, function() {
            test.ok(isPunct('?'));
            test.ok(isPunct('.'));
            test.ok(isPunct('\u2010')); // hyphen
            test.ok(isPunct('\u037E')); // Greek question mark
            test.ok(isPunct('\u3001')); // ideographic comma
            test.ok(!isPunct('a'));
            test.ok(!isPunct('m'));
            test.ok(!isPunct('z'));
            test.ok(!isPunct('A'));
            test.ok(!isPunct('Q'));
            test.ok(!isPunct(' '));
            test.ok(!isPunct('0'));
            test.ok(!isPunct('1'));
            test.ok(!isPunct('8'));
            test.ok(!isPunct('ü'));
            test.ok(!isPunct('ó'));
            test.ok(!isPunct('Д'));
            test.done();
        });
    },
    testIsIdeoTrue: function(test) {
        test.expect(10);
        isIdeo._init(false, undefined, function() {
            test.ok(isIdeo('碗'));
            test.ok(isIdeo('人'));
            test.ok(!isIdeo(' '));
            test.ok(!isIdeo('$'));
            test.ok(!isIdeo('a'));
            test.ok(!isIdeo('m'));
            test.ok(!isIdeo('z'));
            test.ok(!isIdeo('0'));
            test.ok(!isIdeo('1'));
            test.ok(!isIdeo('8'));
            test.done();
        });
    },
    testIsCntrlTrue: function(test) {
        test.expect(10);
        isCntrl._init(false, undefined, function() {
            test.ok(isCntrl('\u0001'));
            test.ok(isCntrl('\u0085'));
            test.ok(!isCntrl(' '));
            test.ok(!isCntrl('$'));
            test.ok(!isCntrl('a'));
            test.ok(!isCntrl('m'));
            test.ok(!isCntrl('z'));
            test.ok(!isCntrl('0'));
            test.ok(!isCntrl('1'));
            test.ok(!isCntrl('8'));
            test.done();
        });
    },
    testIsDigitTrue: function(test) {
        test.expect(20);
        isDigit._init(false, undefined, function() {
            test.ok(isDigit('0'));
            test.ok(isDigit('1'));
            test.ok(isDigit('2'));
            test.ok(isDigit('3'));
            test.ok(isDigit('4'));
            test.ok(isDigit('5'));
            test.ok(isDigit('6'));
            test.ok(isDigit('7'));
            test.ok(isDigit('8'));
            test.ok(isDigit('9'));
            test.ok(!isDigit(' '));
            test.ok(!isDigit('a'));
            test.ok(!isDigit('m'));
            test.ok(!isDigit('z'));
            test.ok(!isDigit('A'));
            test.ok(!isDigit('Q'));
            test.ok(!isDigit('$'));
            test.ok(!isDigit('ü'));
            test.ok(!isDigit('ó'));
            test.ok(!isDigit('Д'));
            test.done();
        });
    },
    testIsXdigitTrue: function(test) {
        test.expect(32);
        isXdigit._init(false, undefined, function() {
            test.ok(isXdigit('0'));
            test.ok(isXdigit('1'));
            test.ok(isXdigit('2'));
            test.ok(isXdigit('3'));
            test.ok(isXdigit('4'));
            test.ok(isXdigit('5'));
            test.ok(isXdigit('6'));
            test.ok(isXdigit('7'));
            test.ok(isXdigit('8'));
            test.ok(isXdigit('9'));
            test.ok(isXdigit('A'));
            test.ok(isXdigit('B'));
            test.ok(isXdigit('C'));
            test.ok(isXdigit('D'));
            test.ok(isXdigit('E'));
            test.ok(isXdigit('F'));
            test.ok(isXdigit('a'));
            test.ok(isXdigit('b'));
            test.ok(isXdigit('c'));
            test.ok(isXdigit('d'));
            test.ok(isXdigit('e'));
            test.ok(isXdigit('f'));
            test.ok(!isXdigit('G'));
            test.ok(!isXdigit('g'));
            test.ok(!isXdigit(' '));
            test.ok(!isXdigit('m'));
            test.ok(!isXdigit('z'));
            test.ok(!isXdigit('Q'));
            test.ok(!isXdigit('$'));
            test.ok(!isXdigit('ü'));
            test.ok(!isXdigit('ó'));
            test.ok(!isXdigit('Д'));
            test.done();
        });
    },
    testWithinRangeTrue: function(test) {
        test.expect(5);
        CType._init(false, undefined, function() {
            test.ok(CType.withinRange('a', 'ascii'));
            test.ok(!CType.withinRange('\u2000a', 'ascii'));
            test.ok(CType.withinRange('a', 'ASCII'));
            test.ok(!CType.withinRange('G', 'arabic'));
            test.ok(CType.withinRange('a', 'latin'));
            test.done();
        });
    },
    testIsScriptTrue: function(test) {
        test.expect(16);
        isScript._init(false, undefined, function() {
            test.ok("testing Latn", isScript("a", "Latn"));
            test.ok("testing Cyrl", isScript("Д", "Cyrl"));
            test.ok("testing Grek", isScript("ώ", "Grek"));
            test.ok("testing Hang", isScript("귋", "Hang"));
            test.ok("testing Hani", isScript("㜴", "Hani"));
            test.ok("testing Hebr", isScript("ש", "Hebr"));
            test.ok("testing Arab", isScript("ش", "Arab"));
            test.ok("testing Deva", isScript("झ", "Deva"));
            test.ok(!isScript("a", "Cyrl"));
            test.ok(!isScript("Д", "Grek"));
            test.ok(!isScript("ώ", "Hang"));
            test.ok(!isScript("귋", "Hani"));
            test.ok(!isScript("㜴", "Hebr"));
            test.ok(!isScript("ש", "Arab"));
            test.ok(!isScript("ش", "Deva"));
            test.ok(!isScript("झ", "Latn"));
            test.done();
        });
    },
    testIsAlnum: function(test) {
        test.expect(11);
        isAlnum._init(false, undefined, function() {
            test.ok(isAlnum('a'));
            test.ok(isAlnum('m'));
            test.ok(isAlnum('z'));
            test.ok(isAlnum('A'));
            test.ok(isAlnum('Q'));
            test.ok(isAlnum('0'));
            test.ok(isAlnum('1'));
            test.ok(isAlnum('8'));
            test.ok(isAlnum('Ꞛ'));
            test.ok(!isAlnum(' '));
            test.ok(!isAlnum('$'));
            test.done();
        });
    },
    testIsGraphTrue: function(test) {
        test.expect(5);
        isGraph._init(false, undefined, function() {
            test.ok(isGraph('A'));
            test.ok(isGraph('Q'));
            test.ok(isGraph('碗'));
            test.ok(!isGraph(' '));
            test.ok(!isGraph('\u0002'));
            test.done();
        });
    }
};