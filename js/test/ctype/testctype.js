/*
 * testctype.js - test the character type information functions
 *
 * Copyright © 2012-2015, 2017-2018, 2020 JEDLSoft
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

if (ilib.isDynData()) {
    // now load the data
    isAlnum._init(true);
    isAlpha._init(true);
    isAscii._init(true);
    isBlank._init(true);
    isCntrl._init(true);
    isDigit._init(true);
    isGraph._init(true);
    isIdeo._init(true);
    isLower._init(true);
    isPunct._init(true);
    isScript._init(true);
    isSpace._init(true);
    isUpper._init(true);
    isXdigit._init(true);
}

module.exports.testctype = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testIsAlnumTrue: function(test) {
        test.expect(9);
        test.ok(isAlnum('a'));
        test.ok(isAlnum('m'));
        test.ok(isAlnum('z'));
        test.ok(isAlnum('A'));
        test.ok(isAlnum('Q'));
        test.ok(isAlnum('0'));
        test.ok(isAlnum('1'));
        test.ok(isAlnum('8'));
        test.ok(isAlnum('Ꞛ'));
        test.done();
    },
    testIsAlnumFalse: function(test) {
        test.expect(2);
        test.ok(!isAlnum(' '));
        test.ok(!isAlnum('$'));
        test.done();

    },
    testIsAlnumOnlyFirstChar: function(test) {
        test.expect(1);
        test.ok(!isAlnum(' a'));
        test.done();
    },
    testIsAlnumEmpty: function(test) {
        test.expect(1);
        test.ok(!isAlnum(''));
        test.done();
    },
    testIsAlnumUndefined: function(test) {
        test.expect(1);
        test.ok(!isAlnum());
        test.done();
    },
    testIsAlphaTrue: function(test) {
        test.expect(5);
        test.ok(isAlpha('a'));
        test.ok(isAlpha('m'));
        test.ok(isAlpha('z'));
        test.ok(isAlpha('A'));
        test.ok(isAlpha('Q'));
        test.done();
    },
    testIsAlphaFalse: function(test) {
        test.expect(5);
        test.ok(!isAlpha(' '));
        test.ok(!isAlpha('$'));
        test.ok(!isAlpha('0'));
        test.ok(!isAlpha('1'));
        test.ok(!isAlpha('8'));
        test.done();
    },
    testIsAlphaOnlyFirstChar: function(test) {
        test.expect(1);
        test.ok(!isAlpha(' a'));
        test.done();
    },
    testIsAlphaEmpty: function(test) {
        test.expect(1);
        test.ok(!isAlpha(''));
        test.done();
    },
    testIsAlphaUndefined: function(test) {
        test.expect(1);
        test.ok(!isAlpha());
        test.done();
    },
    testIsLowerTrue: function(test) {
        test.expect(4);
        test.ok(isLower('a'));
        test.ok(isLower('m'));
        test.ok(isLower('щ'));
        test.ok(isLower('λ'));
        test.done();
    },
    testIsLowerFalse: function(test) {
        test.expect(7);
        test.ok(!isLower(' '));
        test.ok(!isLower('$'));
        test.ok(!isLower('A'));
        test.ok(!isLower('M'));
        test.ok(!isLower('0'));
        test.ok(!isLower('Щ'));
        test.ok(!isLower('Λ'));
        test.done();
    },
    testIsLowerOnlyFirstChar: function(test) {
        test.expect(1);
        test.ok(!isLower(' a'));
        test.done();
    },
    testIsLowerEmpty: function(test) {
        test.expect(1);
        test.ok(!isLower(''));
        test.done();
    },
    testIsLowerUndefined: function(test) {
        test.expect(1);
        test.ok(!isLower());
        test.done();
    },
    testIsUpperTrue: function(test) {
        test.expect(4);
        test.ok(isUpper('A'));
        test.ok(isUpper('M'));
        test.ok(isUpper('Щ'));
        test.ok(isUpper('Λ'));
        test.done();
    },
    testIsUpperFalse: function(test) {
        test.expect(7);
        test.ok(!isUpper(' '));
        test.ok(!isUpper('$'));
        test.ok(!isUpper('a'));
        test.ok(!isUpper('m'));
        test.ok(!isUpper('щ'));
        test.ok(!isUpper('λ'));
        test.ok(!isUpper('0'));
        test.done();
    },
    testIsUpperOnlyFirstChar: function(test) {
        test.expect(1);
        test.ok(!isUpper(' A'));
        test.done();
    },
    testIsUpperEmpty: function(test) {
        test.expect(1);
        test.ok(!isUpper(''));
        test.done();
    },
    testIsUpperUndefined: function(test) {
        test.expect(1);
        test.ok(!isUpper());
        test.done();
    },
    testIsPrintTrue: function(test) {
        test.expect(5);
        test.ok(isPrint(' '));
        test.ok(isPrint('A'));
        test.ok(isPrint('M'));
        test.ok(isPrint('Щ'));
        test.ok(isPrint('Λ'));
        test.done();
    },
    testIsPrintFalse: function(test) {
        test.expect(2);
        test.ok(!isPrint('\u0001'));
        test.ok(!isPrint('\u0085'));
        test.done();
    },
    testIsPrintOnlyFirstChar: function(test) {
        test.expect(1);
        test.ok(!isPrint('\u0001X'));
        test.done();
    },
    testIsPrintEmpty: function(test) {
        test.expect(1);
        test.ok(!isPrint(''));
        test.done();
    },
    testIsPrintUndefined: function(test) {
        test.expect(1);
        test.ok(!isPrint());
        test.done();
    },
    testIsAsciiTrue: function(test) {
        test.expect(10);
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
        test.done();
    },
    testIsAsciiFalse: function(test) {
        test.expect(3);
        test.ok(!isAscii('ü'));
        test.ok(!isAscii('ó'));
        test.ok(!isAscii('Д'));
        test.done();
    },
    testIsAsciiOnlyFirstChar: function(test) {
        test.expect(1);
        test.ok(!isAscii('Дa'));
        test.done();
    },
    testIsAsciiEmpty: function(test) {
        test.expect(1);
        test.ok(!isAscii(''));
        test.done();
    },
    testIsAsciiUndefined: function(test) {
        test.expect(1);
        test.ok(!isAscii());
        test.done();
    },
    testIsBlankTrue: function(test) {
        test.expect(1);
        test.ok(isBlank(' '));
        test.done();
    },
    testIsBlankFalse: function(test) {
        test.expect(12);
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
    },
    testIsBlankOnlyFirstChar: function(test) {
        test.expect(1);
        test.ok(!isBlank('a '));
        test.done();
    },
    testIsBlankEmpty: function(test) {
        test.expect(1);
        test.ok(!isBlank(''));
        test.done();
    },
    testIsBlankUndefined: function(test) {
        test.expect(1);
        test.ok(!isBlank());
        test.done();
    },
    testIsSpaceTrue: function(test) {
        test.expect(4);
        test.ok(isSpace(' '));
        test.ok(isSpace('\t'));
        test.ok(isSpace('\n'));
        test.ok(isSpace('\u2000'));
        test.done();
    },
    testIsSpaceFalse: function(test) {
        test.expect(7);
        test.ok(!isSpace('a'));
        test.ok(!isSpace('A'));
        test.ok(!isSpace('$'));
        test.ok(!isSpace('0'));
        test.ok(!isSpace('ü'));
        test.ok(!isSpace('ó'));
        test.ok(!isSpace('Д'));
        test.done();
    },
    testIsSpaceOnlyFirstChar: function(test) {
        test.expect(1);
        test.ok(!isSpace('a '));
        test.done();
    },
    testIsSpaceEmpty: function(test) {
        test.expect(1);
        test.ok(!isSpace(''));
        test.done();
    },
    testIsSpaceUndefined: function(test) {
        test.expect(1);
        test.ok(!isSpace());
        test.done();
    },
    testIsPunctTrue: function(test) {
        test.expect(5);
        test.ok(isPunct('?'));
        test.ok(isPunct('.'));
        test.ok(isPunct('\u2010')); // hyphen
        test.ok(isPunct('\u037E')); // Greek question mark
        test.ok(isPunct('\u3001')); // ideographic comma
        test.done();
    },
    testIsPunctFalse: function(test) {
        test.expect(12);
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
    },
    testIsPunctOnlyFirstChar: function(test) {
        test.expect(1);
        test.ok(!isPunct(' ,'));
        test.done();
    },
    testIsPunctEmpty: function(test) {
        test.expect(1);
        test.ok(!isPunct(''));
        test.done();
    },
    testIsPunctUndefined: function(test) {
        test.expect(1);
        test.ok(!isPunct());
        test.done();
    },
    testIsGraphTrue: function(test) {
        test.expect(3);
        test.ok(isGraph('A'));
        test.ok(isGraph('Q'));
        test.ok(isGraph('碗'));
        test.done();
    },
    testIsGraphFalse: function(test) {
        test.expect(2);
        test.ok(!isGraph(' '));
        test.ok(!isGraph('\u0002'));
        test.done();
    },
    testIsGraphOnlyFirstChar: function(test) {
        test.expect(1);
        test.ok(!isGraph(' A'));
        test.done();
    },
    testIsGraphEmpty: function(test) {
        test.expect(1);
        test.ok(!isGraph(''));
        test.done();
    },
    testIsGraphUndefined: function(test) {
        test.expect(1);
        test.ok(!isGraph());
        test.done();
    },
    testIsIdeoTrue: function(test) {
        test.expect(2);
        test.ok(isIdeo('碗'));
        test.ok(isIdeo('人'));
        test.done();
    },
    testIsIdeoFalse: function(test) {
        test.expect(8);
        test.ok(!isIdeo(' '));
        test.ok(!isIdeo('$'));
        test.ok(!isIdeo('a'));
        test.ok(!isIdeo('m'));
        test.ok(!isIdeo('z'));
        test.ok(!isIdeo('0'));
        test.ok(!isIdeo('1'));
        test.ok(!isIdeo('8'));
        test.done();
    },
    testIsIdeoOnlyFirstChar: function(test) {
        test.expect(1);
        test.ok(!isIdeo(' 人'));
        test.done();
    },
    testIsIdeoEmpty: function(test) {
        test.expect(1);
        test.ok(!isIdeo(''));
        test.done();
    },
    testIsIdeoUndefined: function(test) {
        test.expect(1);
        test.ok(!isIdeo());
        test.done();
    },
    testIsCntrlTrue: function(test) {
        test.expect(2);
        test.ok(isCntrl('\u0001'));
        test.ok(isCntrl('\u0085'));
        test.done();
    },
    testIsCntrlFalse: function(test) {
        test.expect(8);
        test.ok(!isCntrl(' '));
        test.ok(!isCntrl('$'));
        test.ok(!isCntrl('a'));
        test.ok(!isCntrl('m'));
        test.ok(!isCntrl('z'));
        test.ok(!isCntrl('0'));
        test.ok(!isCntrl('1'));
        test.ok(!isCntrl('8'));
        test.done();
    },
    testIsCntrlOnlyFirstChar: function(test) {
        test.expect(1);
        test.ok(!isCntrl(' \u0001'));
        test.done();
    },
    testIsCntrlEmpty: function(test) {
        test.expect(1);
        test.ok(!isCntrl(''));
        test.done();
    },
    testIsCntrlUndefined: function(test) {
        test.expect(1);
        test.ok(!isCntrl());
        test.done();
    },
    testIsDigitTrue: function(test) {
        test.expect(10);
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
        test.done();
    },
    testIsDigitFalse: function(test) {
        test.expect(10);
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
    },
    testIsDigitOnlyFirstChar: function(test) {
        test.expect(1);
        test.ok(!isDigit('a4'));
        test.done();
    },
    testIsDigitEmpty: function(test) {
        test.expect(1);
        test.ok(!isDigit(''));
        test.done();
    },
    testIsDigitUndefined: function(test) {
        test.expect(1);
        test.ok(!isDigit());
        test.done();
    },
    testIsXdigitTrue: function(test) {
        test.expect(22);
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
        test.done();
    },
    testIsXdigitFalse: function(test) {
        test.expect(10);
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
    },
    testIsXdigitOnlyFirstChar: function(test) {
        test.expect(1);
        test.ok(!isXdigit('ta'));
        test.done();
    },
    testIsXdigitEmpty: function(test) {
        test.expect(1);
        test.ok(!isXdigit(''));
        test.done();
    },
    testIsXdigitUndefined: function(test) {
        test.expect(1);
        test.ok(!isXdigit());
        test.done();
    },
    /*
    isIdeo: function (ch) {
    withinRange: function(ch, rangeName) {
    */

    testWithinRangeTrue: function(test) {
        test.expect(1);
        test.ok(CType.withinRange('a', 'ascii'));
        test.done();
    },
    testWithinRangeOnlyFirstChar: function(test) {
        test.expect(1);
        test.ok(!CType.withinRange('\u2000a', 'ascii'));
        test.done();
    },
    testWithinRangeLowerCaseTheRangeName: function(test) {
        test.expect(1);
        test.ok(CType.withinRange('a', 'ASCII'));
        test.done();
    },
    testWithinRangeFalse: function(test) {
        test.expect(1);
        test.ok(!CType.withinRange('G', 'arabic'));
        test.done();
    },
    testWithinRangeMultirange1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange('a', 'latin'));
        test.done();
    },
    testWithinRangeMultirange2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange('\u1E0F', 'latin'));
        test.done();
    },
    testWithinRangeMultirange3: function(test) {
        test.expect(1);
        test.ok(CType.withinRange('\u2C61', 'latin'));
        test.done();
    },
    testWithinRangeMultirange4: function(test) {
        test.expect(1);
        test.ok(CType.withinRange('\uA720', 'latin'));
        test.done();
    },
    testWithinRangeMultirangeFalse: function(test) {
        test.expect(1);
        test.ok(!CType.withinRange('\u2190', 'latin'));
        test.done();
    },
    testWithinRangeEmpty: function(test) {
        test.expect(1);
        test.ok(!CType.withinRange('', 'latin'));
        test.done();
    },
    testWithinRangeUndefined: function(test) {
        test.expect(1);
        test.ok(!CType.withinRange());
        test.done();
    },


    /* test each range */

    testWithinRangeLatin1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u000A", "Latin"));
        test.done();
    },
    testWithinRangeLatin2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u1E0A", "Latin"));
        test.done();
    },
    testWithinRangeLatin3: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u2C6A", "Latin"));
        test.done();
    },
    testWithinRangeLatin4: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uA72A", "Latin"));
        test.done();
    },
    testWithinRangeIPA1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u025A", "IPA"));
        test.done();
    },
    testWithinRangeIPA2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u1D0A", "IPA"));
        test.done();
    },
    testWithinRangeIPA3: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u1D8A", "IPA"));
        test.done();
    },
    testWithinRangeOperators1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u220A", "Operators"));
        test.done();
    },
    testWithinRangeOperators2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u2A0A", "Operators"));
        test.done();
    },
    testWithinRangeGreek1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u037A", "Greek"));
        test.done();
    },
    testWithinRangeGreek2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u1F0A", "Greek"));
        test.done();
    },
    testWithinRangeCyrillic1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u040A", "Cyrillic"));
        test.done();
    },
    testWithinRangeCyrillic2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u2DEA", "Cyrillic"));
        test.done();
    },
    testWithinRangeCyrillic3: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uA64A", "Cyrillic"));
        test.done();
    },
    testWithinRangeArabic1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u060A", "Arabic"));
        test.done();
    },
    testWithinRangeArabic2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u075A", "Arabic"));
        test.done();
    },
    testWithinRangeArabic3: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uFB5A", "Arabic"));
        test.done();
    },
    testWithinRangeArabic4: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uFE7A", "Arabic"));
        test.done();
    },
    testWithinRangeDevanagari1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u090A", "Devanagari"));
        test.done();
    },
    testWithinRangeDevanagari2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uA8EA", "Devanagari"));
        test.done();
    },
    testWithinRangeMyanmar1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u100A", "Myanmar"));
        test.done();
    },
    testWithinRangeMyanmar2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uAA6A", "Myanmar"));
        test.done();
    },
    testWithinRangeHangul1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u110A", "Hangul"));
        test.done();
    },
    testWithinRangeHangul2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uAC0A", "Hangul"));
        test.done();
    },
    testWithinRangeHangul3: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uA96A", "Hangul"));
        test.done();
    },
    testWithinRangeHangul4: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uD7BA", "Hangul"));
        test.done();
    },
    testWithinRangeHangul5: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u313A", "Hangul"));
        test.done();
    },
    testWithinRangeEthiopic1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u120A", "Ethiopic"));
        test.done();
    },
    testWithinRangeEthiopic2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u2D8A", "Ethiopic"));
        test.done();
    },
    testWithinRangeEthiopic3: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uAB0A", "Ethiopic"));
        test.done();
    },
    testWithinRangeCanadian1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u140A", "Canadian"));
        test.done();
    },
    testWithinRangeCanadian2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u18BA", "Canadian"));
        test.done();
    },
    testWithinRangeCombining1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u030A", "Combining"));
        test.done();
    },
    testWithinRangeCombining2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u1DCA", "Combining"));
        test.done();
    },
    testWithinRangeCombining3: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u20DA", "Combining"));
        test.done();
    },
    testWithinRangeArrows1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u219A", "Arrows"));
        test.done();
    },
    testWithinRangeArrows2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u2B0A", "Arrows"));
        test.done();
    },
    testWithinRangeArrows3: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u27FA", "Arrows"));
        test.done();
    },
    testWithinRangeArrows4: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u290A", "Arrows"));
        test.done();
    },
    testWithinRangeCJK1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u4E0A", "CJK"));
        test.done();
    },
    testWithinRangeCJK2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u340A", "CJK"));
        test.done();
    },
    testWithinRangeCJK3: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u2FFA", "CJK"));
        test.done();
    },
    testWithinRangeCJKCompatibility1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u330A", "CJKCompatibility"));
        test.done();
    },
    testWithinRangeCJKCompatibility2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uF90A", "CJKCompatibility"));
        test.done();
    },
    testWithinRangeCJKCompatibility3: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uFE3A", "CJKCompatibility"));
        test.done();
    },
    testWithinRangeMathematical1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u27CA", "Mathematical"));
        test.done();
    },
    testWithinRangeMathematical2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u298A", "Mathematical"));
        test.done();
    },
    testWithinRangePrivateUse: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uE00A", "PrivateUse"));
        test.done();
    },
    testWithinRangeVariations: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uFE0A", "Variations"));
        test.done();
    },
    testWithinRangeBamum: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uA6AA", "Bamum"));
        test.done();
    },
    testWithinRangeGeorgian: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u10AA", "Georgian"));
        test.done();
    },
    testWithinRangeGeorgian: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u2D0A", "Georgian"));
        test.done();
    },
    testWithinRangePunctuation1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u200A", "Punctuation"));
        test.done();
    },
    testWithinRangePunctuation2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u2E0A", "Punctuation"));
        test.done();
    },
    testWithinRangeKatakana1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u30AA", "Katakana"));
        test.done();
    },
    testWithinRangeKatakana2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u31FA", "Katakana"));
        test.done();
    },
    testWithinRangeBopomofo1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u310A", "Bopomofo"));
        test.done();
    },
    testWithinRangeBopomofo2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u31AA", "Bopomofo"));
        test.done();
    },
    testWithinRangeEnclosedAlpha: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u246A", "EnclosedAlpha"));
        test.done();
    },
    testWithinRangeCJKRadicals1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u2E8A", "CJKRadicals"));
        test.done();
    },
    testWithinRangeCJKRadicals2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u2F0A", "CJKRadicals"));
        test.done();
    },
    testWithinRangeYi1: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uA00A", "Yi"));
        test.done();
    },
    testWithinRangeYi2: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uA49A", "Yi"));
        test.done();
    },
    testWithinRangeEnclosedCJK: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u320A", "EnclosedCJK"));
        test.done();
    },
    testWithinRangeSpacing: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u02BA", "Spacing"));
        test.done();
    },
    testWithinRangeArmenian: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u053A", "Armenian"));
        test.done();
    },
    testWithinRangeHebrew: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u059A", "Hebrew"));
        test.done();
    },
    testWithinRangeSyriac: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u070A", "Syriac"));
        test.done();
    },
    testWithinRangeThaana: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u078A", "Thaana"));
        test.done();
    },
    testWithinRangeNKo: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u07CA", "NKo"));
        test.done();
    },
    testWithinRangeSamaritan: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u080A", "Samaritan"));
        test.done();
    },
    testWithinRangeMandaic: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u084A", "Mandaic"));
        test.done();
    },
    testWithinRangeBengali: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u098A", "Bengali"));
        test.done();
    },
    testWithinRangeGurmukhi: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u0A0A", "Gurmukhi"));
        test.done();
    },
    testWithinRangeGujarati: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u0A8A", "Gujarati"));
        test.done();
    },
    testWithinRangeOriya: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u0B0A", "Oriya"));
        test.done();
    },
    testWithinRangeTamil: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u0B8A", "Tamil"));
        test.done();
    },
    testWithinRangeTelugu: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u0C0A", "Telugu"));
        test.done();
    },
    testWithinRangeKannada: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u0C8A", "Kannada"));
        test.done();
    },
    testWithinRangeMalayalam: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u0D0A", "Malayalam"));
        test.done();
    },
    testWithinRangeSinhala: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u0D8A", "Sinhala"));
        test.done();
    },
    testWithinRangeThai: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u0E0A", "Thai"));
        test.done();
    },
    testWithinRangeLao: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u0E8A", "Lao"));
        test.done();
    },
    testWithinRangeTibetan: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u0F0A", "Tibetan"));
        test.done();
    },
    testWithinRangeCherokee: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u13AA", "Cherokee"));
        test.done();
    },
    testWithinRangeOgham: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u168A", "Ogham"));
        test.done();
    },
    testWithinRangeRunic: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u16AA", "Runic"));
        test.done();
    },
    testWithinRangeTagalog: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u170A", "Tagalog"));
        test.done();
    },
    testWithinRangeHanunoo: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u172A", "Hanunoo"));
        test.done();
    },
    testWithinRangeBuhid: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u174A", "Buhid"));
        test.done();
    },
    testWithinRangeTagbanwa: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u176A", "Tagbanwa"));
        test.done();
    },
    testWithinRangeKhmer: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u178A", "Khmer"));
        test.done();
    },
    testWithinRangeMongolian: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u180A", "Mongolian"));
        test.done();
    },
    testWithinRangeLimbu: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u190A", "Limbu"));
        test.done();
    },
    testWithinRangeTaiLe: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u195A", "TaiLe"));
        test.done();
    },
    testWithinRangeNewTaiLue: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u198A", "NewTaiLue"));
        test.done();
    },
    testWithinRangeKhmerSymbols: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u19EA", "KhmerSymbols"));
        test.done();
    },
    testWithinRangeBuginese: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u1A0A", "Buginese"));
        test.done();
    },
    testWithinRangeTaiTham: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u1A2A", "TaiTham"));
        test.done();
    },
    testWithinRangeBalinese: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u1B0A", "Balinese"));
        test.done();
    },
    testWithinRangeSundanese: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u1B8A", "Sundanese"));
        test.done();
    },
    testWithinRangeBatak: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u1BCA", "Batak"));
        test.done();
    },
    testWithinRangeLepcha: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u1C0A", "Lepcha"));
        test.done();
    },
    testWithinRangeOlChiki: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u1C5A", "OlChiki"));
        test.done();
    },
    testWithinRangeVedic: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u1CDA", "Vedic"));
        test.done();
    },
    testWithinRangeSuperSub: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u207A", "SuperSub"));
        test.done();
    },
    testWithinRangeCurrency: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u20AA", "Currency"));
        test.done();
    },
    testWithinRangeLetterlike: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u210A", "Letterlike"));
        test.done();
    },
    testWithinRangeNumbers: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u215A", "Numbers"));
        test.done();
    },
    testWithinRangeMisc: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u230A", "Misc"));
        test.done();
    },
    testWithinRangeControlPictures: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u240A", "ControlPictures"));
        test.done();
    },
    testWithinRangeOCR: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u244A", "OCR"));
        test.done();
    },
    testWithinRangeBox: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u250A", "Box"));
        test.done();
    },
    testWithinRangeBlock: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u258A", "Block"));
        test.done();
    },
    testWithinRangeGeometric: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u25AA", "Geometric"));
        test.done();
    },
    testWithinRangeMiscSymbols: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u260A", "MiscSymbols"));
        test.done();
    },
    testWithinRangeDingbats: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u270A", "Dingbats"));
        test.done();
    },
    testWithinRangeBraille: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u280A", "Braille"));
        test.done();
    },
    testWithinRangeGlagolitic: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u2C0A", "Glagolitic"));
        test.done();
    },
    testWithinRangeCoptic: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u2C8A", "Coptic"));
        test.done();
    },
    testWithinRangeTifinagh: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u2D3A", "Tifinagh"));
        test.done();
    },
    testWithinRangeCJKPunct: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u300A", "CJKPunct"));
        test.done();
    },
    testWithinRangeHiragana: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u304A", "Hiragana"));
        test.done();
    },
    testWithinRangeKanbun: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u319A", "Kanbun"));
        test.done();
    },
    testWithinRangeYijing: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u4DCA", "Yijing"));
        test.done();
    },
    testWithinRangeCJKStrokes: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\u31CA", "CJKStrokes"));
        test.done();
    },
    testWithinRangeLisu: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uA4DA", "Lisu"));
        test.done();
    },
    testWithinRangeVai: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uA50A", "Vai"));
        test.done();
    },
    testWithinRangeModifierTone: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uA70A", "ModifierTone"));
        test.done();
    },
    testWithinRangeSylotiNagri: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uA80A", "SylotiNagri"));
        test.done();
    },
    testWithinRangeIndicNumber: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uA83A", "IndicNumber"));
        test.done();
    },
    testWithinRangePhagspa: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uA84A", "Phagspa"));
        test.done();
    },
    testWithinRangeSaurashtra: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uA88A", "Saurashtra"));
        test.done();
    },
    testWithinRangeKayahLi: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uA90A", "KayahLi"));
        test.done();
    },
    testWithinRangeRejang: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uA93A", "Rejang"));
        test.done();
    },
    testWithinRangeJavanese: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uA98A", "Javanese"));
        test.done();
    },
    testWithinRangeCham: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uAA0A", "Cham"));
        test.done();
    },
    testWithinRangeTaiViet: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uAA8A", "TaiViet"));
        test.done();
    },
    testWithinRangeMeeteiMayek: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uABCA", "MeeteiMayek"));
        test.done();
    },
    testWithinRangePresentation: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uFB0A", "Presentation"));
        test.done();
    },
    testWithinRangeVertical: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uFE1A", "Vertical"));
        test.done();
    },
    testWithinRangeHalfMarks: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uFE2A", "HalfMarks"));
        test.done();
    },
    testWithinRangeSmall: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uFE5A", "Small"));
        test.done();
    },
    testWithinRangeWidth: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uFF0A", "Width"));
        test.done();
    },
    testWithinRangeSpecials: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uFFFA", "Specials"));
        test.done();
    },
    testWithinRangedivesakuru: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uD806\uDD10", "dives akuru"));
        test.done();
    },
    testWithinRangeegyptianhieroglyphcontrols: function(test) {
        test.expect(1);
        test.ok(CType.withinRange("\uD80D\uDC32", "egyptian hieroglyph format controls"));
        test.done();
    },
    testWithinRangeCopticnumber: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x102e0);
        test.ok(CType.withinRange(str, "copticnumber"));
        test.done();
    },
    testWithinRangeOldpermic: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x10350);
        test.ok(CType.withinRange(str, "oldpermic"));
        test.done();
    },
    testWithinRangeAlbanian: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x10530);
        test.ok(CType.withinRange(str, "albanian"));
        test.done();
    },
    testWithinRangeLineara: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x10600);
        test.ok(CType.withinRange(str, "lineara"));
        test.done();
    },
    testWithinRangeMeroitic: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x109a0);
        test.ok(CType.withinRange(str, "meroitic"));
        test.done();
    },
    testWithinRangeLowsurrogates: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0xdc00);
        test.ok(CType.withinRange(str, "lowsurrogates"));
        test.done();
    },
    testWithinRangeOldhungarian: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x10c80);
        test.ok(CType.withinRange(str, "oldhungarian"));
        test.done();
    },
    testWithinRangeSorasopeng: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x110d0);
        test.ok(CType.withinRange(str, "sorasompeng"));
        test.done();
    },
    testWithinRangeWarangciti: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x118a0);
        test.ok(CType.withinRange(str, "warangciti"));
        test.done();
    },
    testWithinRangePaucinhau: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x11ac0);
        test.ok(CType.withinRange(str, "paucinhau"));
        test.done();
    },
    testWithinRangeBassavah: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x16ad0);
        test.ok(CType.withinRange(str, "bassavah"));
        test.done();
    },
    testWithinRangePahawhhmong: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x16b00);
        test.ok(CType.withinRange(str, "pahawhhmong"));
        test.done();
    },
    testWithinRangeShorthandformat: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x1bca0);
        test.ok(CType.withinRange(str, "shorthandformat"));
        test.done();
    },
    testWithinRangeSurronsingwriting: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x1d800);
        test.ok(CType.withinRange(str, "suttonsignwriting"));
        test.done();
    },
    testWithinRangePictographs1: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x1f300);
        test.ok(CType.withinRange(str, "pictographs"));
        test.done();
    },
    testWithinRangePictographs2: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x1f9ff);
        test.ok(CType.withinRange(str, "pictographs"));
        test.done();
    },
    testWithinRangeOrnamentaldingbats: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x1f650);
        test.ok(CType.withinRange(str, "ornamentaldingbats"));
        test.done();
    },
    testWithinRangeCyrillic: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x1c80);
        test.ok(CType.withinRange(str, "cyrillic"));
        test.done();
    },
    testWithinRangeMongolian: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x11660);
        test.ok(CType.withinRange(str, "mongolian"));
        test.done();
    },
    testWithinRangeTangut1: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x16fe0);
        test.ok(CType.withinRange(str, "tangut"));
        test.done();
    },
    testWithinRangeTangut2: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x17000);
        test.ok(CType.withinRange(str, "tangut"));
        test.done();
    },
    testWithinRangeTangut3: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x18800);
        test.ok(CType.withinRange(str, "tangut"));
        test.done();
    },
    testWithinRangeGlagolitic: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x1e000);
        test.ok(CType.withinRange(str, "glagolitic"));
        test.done();
    },
    testWithinRangeElymaic: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x10feb);
        test.ok(CType.withinRange(str, "elymaic"));
        test.done();
    },
    testWithinRangechorasmian: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x10fb3);
        test.ok(CType.withinRange(str, "chorasmian"));
        test.done();
    },
    testWithinRangedivesAkuru: function(test) {
        test.expect(1);
        var str = IString.fromCodePoint(0x11911);
        test.ok(CType.withinRange(str, "dives akuru"));
        test.done();
    },
    testIsScriptTrue: function(test) {
        test.expect(8);
        test.ok("testing Latn", isScript("a", "Latn"));
        test.ok("testing Cyrl", isScript("Д", "Cyrl"));
        test.ok("testing Grek", isScript("ώ", "Grek"));
        test.ok("testing Hang", isScript("귋", "Hang"));
        test.ok("testing Hani", isScript("㜴", "Hani"));
        test.ok("testing Hebr", isScript("ש", "Hebr"));
        test.ok("testing Arab", isScript("ش", "Arab"));
        test.ok("testing Deva", isScript("झ", "Deva"));
        test.done();
    },
    testIsScriptFalse: function(test) {
        test.expect(8);
        test.ok(!isScript("a", "Cyrl"));
        test.ok(!isScript("Д", "Grek"));
        test.ok(!isScript("ώ", "Hang"));
        test.ok(!isScript("귋", "Hani"));
        test.ok(!isScript("㜴", "Hebr"));
        test.ok(!isScript("ש", "Arab"));
        test.ok(!isScript("ش", "Deva"));
        test.ok(!isScript("झ", "Latn"));
        test.done();
    },
    testIsScriptEmptyScriptName: function(test) {
        test.expect(1);
        test.ok(!isScript("a", ""));
        test.done();
    },
    testIsScriptNoScriptName: function(test) {
        test.expect(1);
        test.ok(!isScript("a"));
        test.done();
    },
    testIsScriptEmptyChar: function(test) {
        test.expect(1);
        test.ok(!isScript("", "Cyrl"));
        test.done();
    },
    testIsScriptNoChar: function(test) {
        test.expect(1);
        test.ok(!isScript(undefined, "Cyrl"));
        test.done();
    },
    testIsScriptNoNothing: function(test) {
        test.expect(1);
        test.ok(!isScript(undefined, undefined));
        test.done();
    },
    testNoDataIsAlpha: function(test) {
        test.expect(5);

        var temp = ilib._load;
        ilib._load = undefined;
        var ct = ilib.data.ctype;
        ilib.data.ctype = undefined;

        // should default to ASCII
        test.ok(isAlpha("a"));
        test.ok(isAlpha("z"));
        test.ok(isAlpha("A"));
        test.ok(isAlpha("Z"));
        test.ok(!isAlpha("#"));

        ilib._load = temp;
        ilib.data.ctype = ct;

        test.done();
    },
    testNoDataIsDigit: function(test) {
        test.expect(5);

        var temp = ilib._load;
        ilib._load = undefined;
        var ct = ilib.data.ctype;
        ilib.data.ctype = undefined;

        // should default to ASCII
        test.ok(isDigit("1"));
        test.ok(isDigit("5"));
        test.ok(isDigit("9"));
        test.ok(!isDigit("#"));
        test.ok(!isDigit("A"));

        ilib._load = temp;
        ilib.data.ctype = ct;

        test.done();
    },
    testNoDataIsBlank: function(test) {
        test.expect(4);

        var temp = ilib._load;
        ilib._load = undefined;
        var ct = ilib.data.ctype;
        ilib.data.ctype = undefined;

        // should default to ASCII
        test.ok(isBlank(" "));
        test.ok(isBlank("\t"));
        test.ok(!isBlank("#"));
        test.ok(!isBlank("A"));

        ilib._load = temp;
        ilib.data.ctype = ct;

        test.done();
    },
    testNoDataIsLower: function(test) {
        test.expect(4);

        var temp = ilib._load;
        ilib._load = undefined;
        var ct = ilib.data.ctype_l;
        ilib.data.ctype_l = undefined;

        // should default to ASCII
        test.ok(isLower("a"));
        test.ok(isLower("z"));
        test.ok(!isLower("#"));
        test.ok(!isLower("A"));

        ilib._load = temp;
        ilib.data.ctype_l = ct;

        test.done();
    },
    testNoDataIsUpper: function(test) {
        test.expect(4);

        var temp = ilib._load;
        ilib._load = undefined;
        var ct = ilib.data.ctype_l;
        ilib.data.ctype_l = undefined;

        // should default to ASCII
        test.ok(isUpper("A"));
        test.ok(isUpper("Z"));
        test.ok(!isUpper("#"));
        test.ok(!isUpper("a"));

        ilib._load = temp;
        ilib.data.ctype_l = ct;

        test.done();
    },
    testNoDataIsPunct: function(test) {
        test.expect(4);

        var temp = ilib._load;
        ilib._load = undefined;
        var ct = ilib.data.ctype_p;
        ilib.data.ctype_p = undefined;

        // should default to ASCII
        test.ok(isPunct("@"));
        test.ok(isPunct(","));
        test.ok(!isPunct("A"));
        test.ok(!isPunct("3"));

        ilib._load = temp;
        ilib.data.ctype_p = ct;

        test.done();
    },
    testNoDataIsSpace: function(test) {
        test.expect(4);

        var temp = ilib._load;
        ilib._load = undefined;
        var ct = ilib.data.ctype;
        ilib.data.ctype = undefined;
        var ctz = ilib.data.ctype_z;
        ilib.data.ctype_z = undefined;

        // should default to ASCII
        test.ok(isSpace(" "));
        test.ok(isSpace("\t"));
        test.ok(!isSpace("A"));
        test.ok(!isSpace("3"));

        ilib._load = temp;
        ilib.data.ctype_z = ctz;
        ilib.data.ctype = ct;

        test.done();
    },
    testNoDataIsAscii: function(test) {
        test.expect(6);

        var temp = ilib._load;
        ilib._load = undefined;
        var ct = ilib.data.ctype;
        ilib.data.ctype = undefined;

        // should default to ASCII
        test.ok(isAscii(" "));
        test.ok(isAscii("A"));
        test.ok(isAscii("a"));
        test.ok(isAscii("["));
        test.ok(!isAscii("ë"));
        test.ok(!isAscii("\u2030"));

        ilib._load = temp;
        ilib.data.ctype = ct;

        test.done();
    },
    testNoDataIsXdigit: function(test) {
        test.expect(5);

        var temp = ilib._load;
        ilib._load = undefined;
        var ct = ilib.data.ctype;
        ilib.data.ctype = undefined;

        // should default to ASCII
        test.ok(isXdigit("4"));
        test.ok(isXdigit("F"));
        test.ok(isXdigit("f"));
        test.ok(!isXdigit("G"));
        test.ok(!isXdigit("@"));

        ilib._load = temp;
        ilib.data.ctype = ct;

        test.done();
    }
};