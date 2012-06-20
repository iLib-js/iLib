/*
 * testctype.js - test the character type information functions
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

function testIsAlnumTrue() {
    assertTrue(ilib.CType.isAlnum('a'));
    assertTrue(ilib.CType.isAlnum('m'));
    assertTrue(ilib.CType.isAlnum('z'));
    assertTrue(ilib.CType.isAlnum('A'));
    assertTrue(ilib.CType.isAlnum('Q'));
    assertTrue(ilib.CType.isAlnum('0'));
    assertTrue(ilib.CType.isAlnum('1'));
    assertTrue(ilib.CType.isAlnum('8'));
}

function testIsAlnumFalse() {
    assertFalse(ilib.CType.isAlnum(' '));
    assertFalse(ilib.CType.isAlnum('$'));
}

function testIsAlnumOnlyFirstChar() {
    assertFalse(ilib.CType.isAlnum(' a'));
}

function testIsAlnumEmpty() {
    assertFalse(ilib.CType.isAlnum(''));
}

function testIsAlnumUndefined() {
    assertFalse(ilib.CType.isAlnum());
}

function testIsAlphaTrue() {
    assertTrue(ilib.CType.isAlpha('a'));
    assertTrue(ilib.CType.isAlpha('m'));
    assertTrue(ilib.CType.isAlpha('z'));
    assertTrue(ilib.CType.isAlpha('A'));
    assertTrue(ilib.CType.isAlpha('Q'));
}

function testIsAlphaFalse() {
    assertFalse(ilib.CType.isAlpha(' '));
    assertFalse(ilib.CType.isAlpha('$'));
    assertFalse(ilib.CType.isAlpha('0'));
    assertFalse(ilib.CType.isAlpha('1'));
    assertFalse(ilib.CType.isAlpha('8'));
}

function testIsAlphaOnlyFirstChar() {
    assertFalse(ilib.CType.isAlpha(' a'));
}

function testIsAlphaEmpty() {
    assertFalse(ilib.CType.isAlpha(''));
}

function testIsAlphaUndefined() {
    assertFalse(ilib.CType.isAlpha());
}

function testIsLowerTrue() {
    assertTrue(ilib.CType.isLower('a'));
    assertTrue(ilib.CType.isLower('m'));
    assertTrue(ilib.CType.isLower('щ'));
    assertTrue(ilib.CType.isLower('λ'));
}

function testIsLowerFalse() {
    assertFalse(ilib.CType.isLower(' '));
    assertFalse(ilib.CType.isLower('$'));
    assertFalse(ilib.CType.isLower('A'));
    assertFalse(ilib.CType.isLower('M'));
    assertFalse(ilib.CType.isLower('0'));
    assertFalse(ilib.CType.isLower('Щ'));
    assertFalse(ilib.CType.isLower('Λ'));
}

function testIsLowerOnlyFirstChar() {
    assertFalse(ilib.CType.isLower(' a'));
}

function testIsLowerEmpty() {
    assertFalse(ilib.CType.isLower(''));
}

function testIsLowerUndefined() {
    assertFalse(ilib.CType.isLower());
}

function testIsUpperTrue() {
	assertTrue(ilib.CType.isUpper('A'));
	assertTrue(ilib.CType.isUpper('M'));
	assertTrue(ilib.CType.isUpper('Щ'));
	assertTrue(ilib.CType.isUpper('Λ'));
}

function testIsUpperFalse() {
    assertFalse(ilib.CType.isUpper(' '));
    assertFalse(ilib.CType.isUpper('$'));
    assertFalse(ilib.CType.isUpper('a'));
    assertFalse(ilib.CType.isUpper('m'));
    assertFalse(ilib.CType.isUpper('щ'));
    assertFalse(ilib.CType.isUpper('λ'));
    assertFalse(ilib.CType.isUpper('0'));
}

function testIsUpperOnlyFirstChar() {
    assertFalse(ilib.CType.isUpper(' A'));
}

function testIsUpperEmpty() {
    assertFalse(ilib.CType.isUpper(''));
}

function testIsUpperUndefined() {
    assertFalse(ilib.CType.isUpper());
}

function testIsPrintTrue() {
	assertTrue(ilib.CType.isPrint(' '));
    assertTrue(ilib.CType.isPrint('A'));
	assertTrue(ilib.CType.isPrint('M'));
	assertTrue(ilib.CType.isPrint('Щ'));
	assertTrue(ilib.CType.isPrint('Λ'));
}

function testIsPrintFalse() {
    assertFalse(ilib.CType.isPrint('\u0001'));
    assertFalse(ilib.CType.isPrint('\u0085'));
}

function testIsPrintOnlyFirstChar() {
    assertFalse(ilib.CType.isPrint('\u0001X'));
}

function testIsPrintEmpty() {
    assertFalse(ilib.CType.isPrint(''));
}

function testIsPrintUndefined() {
    assertFalse(ilib.CType.isPrint());
}

function testIsAsciiTrue() {
    assertTrue(ilib.CType.isAscii('a'));
    assertTrue(ilib.CType.isAscii('m'));
    assertTrue(ilib.CType.isAscii('z'));
    assertTrue(ilib.CType.isAscii('A'));
    assertTrue(ilib.CType.isAscii('Q'));
    assertTrue(ilib.CType.isAscii(' '));
    assertTrue(ilib.CType.isAscii('$'));
    assertTrue(ilib.CType.isAscii('0'));
    assertTrue(ilib.CType.isAscii('1'));
    assertTrue(ilib.CType.isAscii('8'));
}

function testIsAsciiFalse() {
    assertFalse(ilib.CType.isAscii('ü'));
    assertFalse(ilib.CType.isAscii('ó'));
    assertFalse(ilib.CType.isAscii('Д'));
}

function testIsAsciiOnlyFirstChar() {
    assertFalse(ilib.CType.isAscii('Дa'));
}

function testIsAsciiEmpty() {
    assertFalse(ilib.CType.isAscii(''));
}

function testIsAsciiUndefined() {
    assertFalse(ilib.CType.isAscii());
}

function testIsBlankTrue() {
    assertTrue(ilib.CType.isBlank(' '));
}

function testIsBlankFalse() {
    assertFalse(ilib.CType.isBlank('a'));
    assertFalse(ilib.CType.isBlank('m'));
    assertFalse(ilib.CType.isBlank('z'));
    assertFalse(ilib.CType.isBlank('A'));
    assertFalse(ilib.CType.isBlank('Q'));
    assertFalse(ilib.CType.isBlank('$'));
    assertFalse(ilib.CType.isBlank('0'));
    assertFalse(ilib.CType.isBlank('1'));
    assertFalse(ilib.CType.isBlank('8'));
    assertFalse(ilib.CType.isBlank('ü'));
    assertFalse(ilib.CType.isBlank('ó'));
    assertFalse(ilib.CType.isBlank('Д'));
}

function testIsBlankOnlyFirstChar() {
    assertFalse(ilib.CType.isBlank('a '));
}

function testIsBlankEmpty() {
    assertFalse(ilib.CType.isBlank(''));
}

function testIsBlankUndefined() {
    assertFalse(ilib.CType.isBlank());
}

function testIsSpaceTrue() {
	assertTrue(ilib.CType.isSpace(' '));
    assertTrue(ilib.CType.isSpace('\t'));
    assertTrue(ilib.CType.isSpace('\n'));
    assertTrue(ilib.CType.isSpace('\u2000'));
}

function testIsSpaceFalse() {
    assertFalse(ilib.CType.isSpace('a'));
    assertFalse(ilib.CType.isSpace('A'));
    assertFalse(ilib.CType.isSpace('$'));
    assertFalse(ilib.CType.isSpace('0'));
    assertFalse(ilib.CType.isSpace('ü'));
    assertFalse(ilib.CType.isSpace('ó'));
    assertFalse(ilib.CType.isSpace('Д'));
}

function testIsSpaceOnlyFirstChar() {
    assertFalse(ilib.CType.isSpace('a '));
}

function testIsSpaceEmpty() {
    assertFalse(ilib.CType.isSpace(''));
}

function testIsSpaceUndefined() {
    assertFalse(ilib.CType.isSpace());
}

function testIsPunctTrue() {
    assertTrue(ilib.CType.isPunct('?'));
    assertTrue(ilib.CType.isPunct('.'));
    assertTrue(ilib.CType.isPunct('\u2010')); // hyphen
    assertTrue(ilib.CType.isPunct('\u037E')); // Greek question mark
    assertTrue(ilib.CType.isPunct('\u3001')); // ideographic comma
}

function testIsPunctFalse() {
    assertFalse(ilib.CType.isPunct('a'));
    assertFalse(ilib.CType.isPunct('m'));
    assertFalse(ilib.CType.isPunct('z'));
    assertFalse(ilib.CType.isPunct('A'));
    assertFalse(ilib.CType.isPunct('Q'));
    assertFalse(ilib.CType.isPunct(' '));
    assertFalse(ilib.CType.isPunct('0'));
    assertFalse(ilib.CType.isPunct('1'));
    assertFalse(ilib.CType.isPunct('8'));
    assertFalse(ilib.CType.isPunct('ü'));
    assertFalse(ilib.CType.isPunct('ó'));
    assertFalse(ilib.CType.isPunct('Д'));
}

function testIsPunctOnlyFirstChar() {
    assertFalse(ilib.CType.isPunct(' ,'));
}

function testIsPunctEmpty() {
    assertFalse(ilib.CType.isPunct(''));
}

function testIsPunctUndefined() {
    assertFalse(ilib.CType.isPunct());
}

function testIsGraphTrue() {
    assertTrue(ilib.CType.isGraph('A'));
    assertTrue(ilib.CType.isGraph('Q'));
    assertTrue(ilib.CType.isGraph('碗'));
}

function testIsGraphFalse() {
    assertFalse(ilib.CType.isGraph(' '));
    assertFalse(ilib.CType.isGraph('\u0002'));
}

function testIsGraphOnlyFirstChar() {
    assertFalse(ilib.CType.isGraph(' A'));
}

function testIsGraphEmpty() {
    assertFalse(ilib.CType.isGraph(''));
}

function testIsGraphUndefined() {
    assertFalse(ilib.CType.isGraph());
}

function testIsIdeoTrue() {
    assertTrue(ilib.CType.isIdeo('碗'));
    assertTrue(ilib.CType.isIdeo('人'));
}

function testIsIdeoFalse() {
    assertFalse(ilib.CType.isIdeo(' '));
    assertFalse(ilib.CType.isIdeo('$'));
    assertFalse(ilib.CType.isIdeo('a'));
    assertFalse(ilib.CType.isIdeo('m'));
    assertFalse(ilib.CType.isIdeo('z'));
    assertFalse(ilib.CType.isIdeo('0'));
    assertFalse(ilib.CType.isIdeo('1'));
    assertFalse(ilib.CType.isIdeo('8'));
}

function testIsIdeoOnlyFirstChar() {
    assertFalse(ilib.CType.isIdeo(' 人'));
}

function testIsIdeoEmpty() {
    assertFalse(ilib.CType.isIdeo(''));
}

function testIsIdeoUndefined() {
    assertFalse(ilib.CType.isIdeo());
}

function testIsCntrlTrue() {
    assertTrue(ilib.CType.isCntrl('\u0001'));
    assertTrue(ilib.CType.isCntrl('\u0085'));
}

function testIsCntrlFalse() {
    assertFalse(ilib.CType.isCntrl(' '));
    assertFalse(ilib.CType.isCntrl('$'));
    assertFalse(ilib.CType.isCntrl('a'));
    assertFalse(ilib.CType.isCntrl('m'));
    assertFalse(ilib.CType.isCntrl('z'));
    assertFalse(ilib.CType.isCntrl('0'));
    assertFalse(ilib.CType.isCntrl('1'));
    assertFalse(ilib.CType.isCntrl('8'));
}

function testIsCntrlOnlyFirstChar() {
    assertFalse(ilib.CType.isCntrl(' \u0001'));
}

function testIsCntrlEmpty() {
    assertFalse(ilib.CType.isCntrl(''));
}

function testIsCntrlUndefined() {
    assertFalse(ilib.CType.isCntrl());
}

function testIsDigitTrue() {
    assertTrue(ilib.CType.isDigit('0'));
    assertTrue(ilib.CType.isDigit('1'));
    assertTrue(ilib.CType.isDigit('2'));
    assertTrue(ilib.CType.isDigit('3'));
    assertTrue(ilib.CType.isDigit('4'));
    assertTrue(ilib.CType.isDigit('5'));
    assertTrue(ilib.CType.isDigit('6'));
    assertTrue(ilib.CType.isDigit('7'));
    assertTrue(ilib.CType.isDigit('8'));
    assertTrue(ilib.CType.isDigit('9'));
}

function testIsDigitFalse() {
    assertFalse(ilib.CType.isDigit(' '));
    assertFalse(ilib.CType.isDigit('a'));
    assertFalse(ilib.CType.isDigit('m'));
    assertFalse(ilib.CType.isDigit('z'));
    assertFalse(ilib.CType.isDigit('A'));
    assertFalse(ilib.CType.isDigit('Q'));
    assertFalse(ilib.CType.isDigit('$'));
    assertFalse(ilib.CType.isDigit('ü'));
    assertFalse(ilib.CType.isDigit('ó'));
    assertFalse(ilib.CType.isDigit('Д'));
}

function testIsDigitOnlyFirstChar() {
    assertFalse(ilib.CType.isDigit('a4'));
}

function testIsDigitEmpty() {
    assertFalse(ilib.CType.isDigit(''));
}

function testIsDigitUndefined() {
    assertFalse(ilib.CType.isDigit());
}

function testIsXdigitTrue() {
    assertTrue(ilib.CType.isXdigit('0'));
    assertTrue(ilib.CType.isXdigit('1'));
    assertTrue(ilib.CType.isXdigit('2'));
    assertTrue(ilib.CType.isXdigit('3'));
    assertTrue(ilib.CType.isXdigit('4'));
    assertTrue(ilib.CType.isXdigit('5'));
    assertTrue(ilib.CType.isXdigit('6'));
    assertTrue(ilib.CType.isXdigit('7'));
    assertTrue(ilib.CType.isXdigit('8'));
    assertTrue(ilib.CType.isXdigit('9'));
    assertTrue(ilib.CType.isXdigit('A'));
    assertTrue(ilib.CType.isXdigit('B'));
    assertTrue(ilib.CType.isXdigit('C'));
    assertTrue(ilib.CType.isXdigit('D'));
    assertTrue(ilib.CType.isXdigit('E'));
    assertTrue(ilib.CType.isXdigit('F'));
    assertTrue(ilib.CType.isXdigit('a'));
    assertTrue(ilib.CType.isXdigit('b'));
    assertTrue(ilib.CType.isXdigit('c'));
    assertTrue(ilib.CType.isXdigit('d'));
    assertTrue(ilib.CType.isXdigit('e'));
    assertTrue(ilib.CType.isXdigit('f'));
}

function testIsXdigitFalse() {
	assertFalse(ilib.CType.isXdigit('G'));
    assertFalse(ilib.CType.isXdigit('g'));
    assertFalse(ilib.CType.isXdigit(' '));
    assertFalse(ilib.CType.isXdigit('m'));
    assertFalse(ilib.CType.isXdigit('z'));
    assertFalse(ilib.CType.isXdigit('Q'));
    assertFalse(ilib.CType.isXdigit('$'));
    assertFalse(ilib.CType.isXdigit('ü'));
    assertFalse(ilib.CType.isXdigit('ó'));
    assertFalse(ilib.CType.isXdigit('Д'));
}

function testIsXdigitOnlyFirstChar() {
    assertFalse(ilib.CType.isXdigit('ta'));
}

function testIsXdigitEmpty() {
    assertFalse(ilib.CType.isXdigit(''));
}

function testIsXdigitUndefined() {
    assertFalse(ilib.CType.isXdigit());
}

/*
isIdeo: function (ch) {
withinRange: function(ch, rangeName) {
*/

function testWithinRangeTrue() {
    assertTrue(ilib.CType.withinRange('a', 'ascii'));
}

function testWithinRangeOnlyFirstChar() {
    assertFalse(ilib.CType.withinRange('\u2000a', 'ascii'));
}

function testWithinRangeLowerCaseTheRangeName() {
    assertTrue(ilib.CType.withinRange('a', 'ASCII'));
}

function testWithinRangeFalse() {
	assertFalse(ilib.CType.withinRange('G', 'arabic'));
}

function testWithinRangeMultirange1() {
    assertTrue(ilib.CType.withinRange('a', 'latin'));
}

function testWithinRangeMultirange2() {
    assertTrue(ilib.CType.withinRange('\u1E0F', 'latin'));
}

function testWithinRangeMultirange3() {
    assertTrue(ilib.CType.withinRange('\u2C61', 'latin'));
}

function testWithinRangeMultirange4() {
    assertTrue(ilib.CType.withinRange('\uA720', 'latin'));
}

function testWithinRangeMultirangeFalse() {
    assertFalse(ilib.CType.withinRange('\u2190', 'latin'));
}

function testWithinRangeEmpty() {
    assertFalse(ilib.CType.withinRange('', 'latin'));
}

function testWithinRangeUndefined() {
    assertFalse(ilib.CType.withinRange());
}


/* test each range */

function testWithinRangeLatin1() {
	assertTrue(ilib.CType.withinRange("\u000A", "Latin"));
}

function testWithinRangeLatin2() {
	assertTrue(ilib.CType.withinRange("\u1E0A", "Latin"));
}

function testWithinRangeLatin3() {
	assertTrue(ilib.CType.withinRange("\u2C6A", "Latin"));
}

function testWithinRangeLatin4() {
	assertTrue(ilib.CType.withinRange("\uA72A", "Latin"));
}

function testWithinRangeIPA1() {
	assertTrue(ilib.CType.withinRange("\u025A", "IPA"));
}

function testWithinRangeIPA2() {
	assertTrue(ilib.CType.withinRange("\u1D0A", "IPA"));
}

function testWithinRangeIPA3() {
	assertTrue(ilib.CType.withinRange("\u1D8A", "IPA"));
}

function testWithinRangeOperators1() {
	assertTrue(ilib.CType.withinRange("\u220A", "Operators"));
}

function testWithinRangeOperators2() {
	assertTrue(ilib.CType.withinRange("\u2A0A", "Operators"));
}

function testWithinRangeGreek1() {
	assertTrue(ilib.CType.withinRange("\u037A", "Greek"));
}

function testWithinRangeGreek2() {
	assertTrue(ilib.CType.withinRange("\u1F0A", "Greek"));
}

function testWithinRangeCyrillic1() {
	assertTrue(ilib.CType.withinRange("\u040A", "Cyrillic"));
}

function testWithinRangeCyrillic2() {
	assertTrue(ilib.CType.withinRange("\u2DEA", "Cyrillic"));
}

function testWithinRangeCyrillic3() {
	assertTrue(ilib.CType.withinRange("\uA64A", "Cyrillic"));
}

function testWithinRangeArabic1() {
	assertTrue(ilib.CType.withinRange("\u060A", "Arabic"));
}

function testWithinRangeArabic2() {
	assertTrue(ilib.CType.withinRange("\u075A", "Arabic"));
}

function testWithinRangeArabic3() {
	assertTrue(ilib.CType.withinRange("\uFB5A", "Arabic"));
}

function testWithinRangeArabic4() {
	assertTrue(ilib.CType.withinRange("\uFE7A", "Arabic"));
}

function testWithinRangeDevanagari1() {
	assertTrue(ilib.CType.withinRange("\u090A", "Devanagari"));
}

function testWithinRangeDevanagari2() {
	assertTrue(ilib.CType.withinRange("\uA8EA", "Devanagari"));
}

function testWithinRangeMyanmar1() {
	assertTrue(ilib.CType.withinRange("\u100A", "Myanmar"));
}

function testWithinRangeMyanmar2() {
	assertTrue(ilib.CType.withinRange("\uAA6A", "Myanmar"));
}

function testWithinRangeHangul1() {
	assertTrue(ilib.CType.withinRange("\u110A", "Hangul"));
}

function testWithinRangeHangul2() {
	assertTrue(ilib.CType.withinRange("\uAC0A", "Hangul"));
}

function testWithinRangeHangul3() {
	assertTrue(ilib.CType.withinRange("\uA96A", "Hangul"));
}

function testWithinRangeHangul4() {
	assertTrue(ilib.CType.withinRange("\uD7BA", "Hangul"));
}

function testWithinRangeHangul5() {
	assertTrue(ilib.CType.withinRange("\u313A", "Hangul"));
}

function testWithinRangeEthiopic1() {
	assertTrue(ilib.CType.withinRange("\u120A", "Ethiopic"));
}

function testWithinRangeEthiopic2() {
	assertTrue(ilib.CType.withinRange("\u2D8A", "Ethiopic"));
}

function testWithinRangeEthiopic3() {
	assertTrue(ilib.CType.withinRange("\uAB0A", "Ethiopic"));
}

function testWithinRangeCanadian1() {
	assertTrue(ilib.CType.withinRange("\u140A", "Canadian"));
}

function testWithinRangeCanadian2() {
	assertTrue(ilib.CType.withinRange("\u18BA", "Canadian"));
}

function testWithinRangeCombining1() {
	assertTrue(ilib.CType.withinRange("\u030A", "Combining"));
}

function testWithinRangeCombining2() {
	assertTrue(ilib.CType.withinRange("\u1DCA", "Combining"));
}

function testWithinRangeCombining3() {
	assertTrue(ilib.CType.withinRange("\u20DA", "Combining"));
}

function testWithinRangeArrows1() {
	assertTrue(ilib.CType.withinRange("\u219A", "Arrows"));
}

function testWithinRangeArrows2() {
	assertTrue(ilib.CType.withinRange("\u2B0A", "Arrows"));
}

function testWithinRangeArrows3() {
	assertTrue(ilib.CType.withinRange("\u27FA", "Arrows"));
}

function testWithinRangeArrows4() {
	assertTrue(ilib.CType.withinRange("\u290A", "Arrows"));
}

function testWithinRangeCJK1() {
	assertTrue(ilib.CType.withinRange("\u4E0A", "CJK"));
}

function testWithinRangeCJK2() {
	assertTrue(ilib.CType.withinRange("\u340A", "CJK"));
}

function testWithinRangeCJK3() {
	assertTrue(ilib.CType.withinRange("\u2FFA", "CJK"));
}

function testWithinRangeCJKCompatibility1() {
	assertTrue(ilib.CType.withinRange("\u330A", "CJKCompatibility"));
}

function testWithinRangeCJKCompatibility2() {
	assertTrue(ilib.CType.withinRange("\uF90A", "CJKCompatibility"));
}

function testWithinRangeCJKCompatibility3() {
	assertTrue(ilib.CType.withinRange("\uFE3A", "CJKCompatibility"));
}

function testWithinRangeMathematical1() {
	assertTrue(ilib.CType.withinRange("\u27CA", "Mathematical"));
}

function testWithinRangeMathematical2() {
	assertTrue(ilib.CType.withinRange("\u298A", "Mathematical"));
}

function testWithinRangePrivateUse() {
	assertTrue(ilib.CType.withinRange("\uE00A", "PrivateUse"));
}

function testWithinRangeVariations() {
	assertTrue(ilib.CType.withinRange("\uFE0A", "Variations"));
}

function testWithinRangeBamum() {
	assertTrue(ilib.CType.withinRange("\uA6AA", "Bamum"));
}

function testWithinRangeGeorgian() {
	assertTrue(ilib.CType.withinRange("\u10AA", "Georgian"));
}

function testWithinRangeGeorgian() {
	assertTrue(ilib.CType.withinRange("\u2D0A", "Georgian"));
}

function testWithinRangePunctuation1() {
	assertTrue(ilib.CType.withinRange("\u200A", "Punctuation"));
}

function testWithinRangePunctuation2() {
	assertTrue(ilib.CType.withinRange("\u2E0A", "Punctuation"));
}

function testWithinRangeKatakana1() {
	assertTrue(ilib.CType.withinRange("\u30AA", "Katakana"));
}

function testWithinRangeKatakana2() {
	assertTrue(ilib.CType.withinRange("\u31FA", "Katakana"));
}

function testWithinRangeBopomofo1() {
	assertTrue(ilib.CType.withinRange("\u310A", "Bopomofo"));
}

function testWithinRangeBopomofo2() {
	assertTrue(ilib.CType.withinRange("\u31AA", "Bopomofo"));
}

function testWithinRangeEnclosedAlpha() {
	assertTrue(ilib.CType.withinRange("\u246A", "EnclosedAlpha"));
}

function testWithinRangeCJKRadicals1() {
	assertTrue(ilib.CType.withinRange("\u2E8A", "CJKRadicals"));
}

function testWithinRangeCJKRadicals2() {
	assertTrue(ilib.CType.withinRange("\u2F0A", "CJKRadicals"));
}

function testWithinRangeYi1() {
	assertTrue(ilib.CType.withinRange("\uA00A", "Yi"));
}

function testWithinRangeYi2() {
	assertTrue(ilib.CType.withinRange("\uA49A", "Yi"));
}

function testWithinRangeHighSurrogates1() {
	assertTrue(ilib.CType.withinRange("\uD80A", "HighSurrogates"));
}

function testWithinRangeHighSurrogates2() {
	assertTrue(ilib.CType.withinRange("\uDB8A", "HighSurrogates"));
}

function testWithinRangeEnclosedCJK() {
	assertTrue(ilib.CType.withinRange("\u320A", "EnclosedCJK"));
}

function testWithinRangeSpacing() {
	assertTrue(ilib.CType.withinRange("\u02BA", "Spacing"));
}

function testWithinRangeArmenian() {
	assertTrue(ilib.CType.withinRange("\u053A", "Armenian"));
}

function testWithinRangeHebrew() {
	assertTrue(ilib.CType.withinRange("\u059A", "Hebrew"));
}

function testWithinRangeSyriac() {
	assertTrue(ilib.CType.withinRange("\u070A", "Syriac"));
}

function testWithinRangeThaana() {
	assertTrue(ilib.CType.withinRange("\u078A", "Thaana"));
}

function testWithinRangeNKo() {
	assertTrue(ilib.CType.withinRange("\u07CA", "NKo"));
}

function testWithinRangeSamaritan() {
	assertTrue(ilib.CType.withinRange("\u080A", "Samaritan"));
}

function testWithinRangeMandaic() {
	assertTrue(ilib.CType.withinRange("\u084A", "Mandaic"));
}

function testWithinRangeBengali() {
	assertTrue(ilib.CType.withinRange("\u098A", "Bengali"));
}

function testWithinRangeGurmukhi() {
	assertTrue(ilib.CType.withinRange("\u0A0A", "Gurmukhi"));
}

function testWithinRangeGujarati() {
	assertTrue(ilib.CType.withinRange("\u0A8A", "Gujarati"));
}

function testWithinRangeOriya() {
	assertTrue(ilib.CType.withinRange("\u0B0A", "Oriya"));
}

function testWithinRangeTamil() {
	assertTrue(ilib.CType.withinRange("\u0B8A", "Tamil"));
}

function testWithinRangeTelugu() {
	assertTrue(ilib.CType.withinRange("\u0C0A", "Telugu"));
}

function testWithinRangeKannada() {
	assertTrue(ilib.CType.withinRange("\u0C8A", "Kannada"));
}

function testWithinRangeMalayalam() {
	assertTrue(ilib.CType.withinRange("\u0D0A", "Malayalam"));
}

function testWithinRangeSinhala() {
	assertTrue(ilib.CType.withinRange("\u0D8A", "Sinhala"));
}

function testWithinRangeThai() {
	assertTrue(ilib.CType.withinRange("\u0E0A", "Thai"));
}

function testWithinRangeLao() {
	assertTrue(ilib.CType.withinRange("\u0E8A", "Lao"));
}

function testWithinRangeTibetan() {
	assertTrue(ilib.CType.withinRange("\u0F0A", "Tibetan"));
}

function testWithinRangeCherokee() {
	assertTrue(ilib.CType.withinRange("\u13AA", "Cherokee"));
}

function testWithinRangeOgham() {
	assertTrue(ilib.CType.withinRange("\u168A", "Ogham"));
}

function testWithinRangeRunic() {
	assertTrue(ilib.CType.withinRange("\u16AA", "Runic"));
}

function testWithinRangeTagalog() {
	assertTrue(ilib.CType.withinRange("\u170A", "Tagalog"));
}

function testWithinRangeHanunoo() {
	assertTrue(ilib.CType.withinRange("\u172A", "Hanunoo"));
}

function testWithinRangeBuhid() {
	assertTrue(ilib.CType.withinRange("\u174A", "Buhid"));
}

function testWithinRangeTagbanwa() {
	assertTrue(ilib.CType.withinRange("\u176A", "Tagbanwa"));
}

function testWithinRangeKhmer() {
	assertTrue(ilib.CType.withinRange("\u178A", "Khmer"));
}

function testWithinRangeMongolian() {
	assertTrue(ilib.CType.withinRange("\u180A", "Mongolian"));
}

function testWithinRangeLimbu() {
	assertTrue(ilib.CType.withinRange("\u190A", "Limbu"));
}

function testWithinRangeTaiLe() {
	assertTrue(ilib.CType.withinRange("\u195A", "TaiLe"));
}

function testWithinRangeNewTaiLue() {
	assertTrue(ilib.CType.withinRange("\u198A", "NewTaiLue"));
}

function testWithinRangeKhmerSymbols() {
	assertTrue(ilib.CType.withinRange("\u19EA", "KhmerSymbols"));
}

function testWithinRangeBuginese() {
	assertTrue(ilib.CType.withinRange("\u1A0A", "Buginese"));
}

function testWithinRangeTaiTham() {
	assertTrue(ilib.CType.withinRange("\u1A2A", "TaiTham"));
}

function testWithinRangeBalinese() {
	assertTrue(ilib.CType.withinRange("\u1B0A", "Balinese"));
}

function testWithinRangeSundanese() {
	assertTrue(ilib.CType.withinRange("\u1B8A", "Sundanese"));
}

function testWithinRangeBatak() {
	assertTrue(ilib.CType.withinRange("\u1BCA", "Batak"));
}

function testWithinRangeLepcha() {
	assertTrue(ilib.CType.withinRange("\u1C0A", "Lepcha"));
}

function testWithinRangeOlChiki() {
	assertTrue(ilib.CType.withinRange("\u1C5A", "OlChiki"));
}

function testWithinRangeVedic() {
	assertTrue(ilib.CType.withinRange("\u1CDA", "Vedic"));
}

function testWithinRangeSuperSub() {
	assertTrue(ilib.CType.withinRange("\u207A", "SuperSub"));
}

function testWithinRangeCurrency() {
	assertTrue(ilib.CType.withinRange("\u20AA", "Currency"));
}

function testWithinRangeLetterlike() {
	assertTrue(ilib.CType.withinRange("\u210A", "Letterlike"));
}

function testWithinRangeNumbers() {
	assertTrue(ilib.CType.withinRange("\u215A", "Numbers"));
}

function testWithinRangeMisc() {
	assertTrue(ilib.CType.withinRange("\u230A", "Misc"));
}

function testWithinRangeControlPictures() {
	assertTrue(ilib.CType.withinRange("\u240A", "ControlPictures"));
}

function testWithinRangeOCR() {
	assertTrue(ilib.CType.withinRange("\u244A", "OCR"));
}

function testWithinRangeBox() {
	assertTrue(ilib.CType.withinRange("\u250A", "Box"));
}

function testWithinRangeBlock() {
	assertTrue(ilib.CType.withinRange("\u258A", "Block"));
}

function testWithinRangeGeometric() {
	assertTrue(ilib.CType.withinRange("\u25AA", "Geometric"));
}

function testWithinRangeMiscSymbols() {
	assertTrue(ilib.CType.withinRange("\u260A", "MiscSymbols"));
}

function testWithinRangeDingbats() {
	assertTrue(ilib.CType.withinRange("\u270A", "Dingbats"));
}

function testWithinRangeBraille() {
	assertTrue(ilib.CType.withinRange("\u280A", "Braille"));
}

function testWithinRangeGlagolitic() {
	assertTrue(ilib.CType.withinRange("\u2C0A", "Glagolitic"));
}

function testWithinRangeCoptic() {
	assertTrue(ilib.CType.withinRange("\u2C8A", "Coptic"));
}

function testWithinRangeTifinagh() {
	assertTrue(ilib.CType.withinRange("\u2D3A", "Tifinagh"));
}

function testWithinRangeCJKPunct() {
	assertTrue(ilib.CType.withinRange("\u300A", "CJKPunct"));
}

function testWithinRangeHiragana() {
	assertTrue(ilib.CType.withinRange("\u304A", "Hiragana"));
}

function testWithinRangeKanbun() {
	assertTrue(ilib.CType.withinRange("\u319A", "Kanbun"));
}

function testWithinRangeYijing() {
	assertTrue(ilib.CType.withinRange("\u4DCA", "Yijing"));
}

function testWithinRangeCJKStrokes() {
	assertTrue(ilib.CType.withinRange("\u31CA", "CJKStrokes"));
}

function testWithinRangeLisu() {
	assertTrue(ilib.CType.withinRange("\uA4DA", "Lisu"));
}

function testWithinRangeVai() {
	assertTrue(ilib.CType.withinRange("\uA50A", "Vai"));
}

function testWithinRangeModifierTone() {
	assertTrue(ilib.CType.withinRange("\uA70A", "ModifierTone"));
}

function testWithinRangeSylotiNagri() {
	assertTrue(ilib.CType.withinRange("\uA80A", "SylotiNagri"));
}

function testWithinRangeIndicNumber() {
	assertTrue(ilib.CType.withinRange("\uA83A", "IndicNumber"));
}

function testWithinRangePhagspa() {
	assertTrue(ilib.CType.withinRange("\uA84A", "Phagspa"));
}

function testWithinRangeSaurashtra() {
	assertTrue(ilib.CType.withinRange("\uA88A", "Saurashtra"));
}

function testWithinRangeKayahLi() {
	assertTrue(ilib.CType.withinRange("\uA90A", "KayahLi"));
}

function testWithinRangeRejang() {
	assertTrue(ilib.CType.withinRange("\uA93A", "Rejang"));
}

function testWithinRangeJavanese() {
	assertTrue(ilib.CType.withinRange("\uA98A", "Javanese"));
}

function testWithinRangeCham() {
	assertTrue(ilib.CType.withinRange("\uAA0A", "Cham"));
}

function testWithinRangeTaiViet() {
	assertTrue(ilib.CType.withinRange("\uAA8A", "TaiViet"));
}

function testWithinRangeMeeteiMayek() {
	assertTrue(ilib.CType.withinRange("\uABCA", "MeeteiMayek"));
}

function testWithinRangeLowSurrogates() {
	assertTrue(ilib.CType.withinRange("\uDC0A", "LowSurrogates"));
}

function testWithinRangePresentation() {
	assertTrue(ilib.CType.withinRange("\uFB0A", "Presentation"));
}

function testWithinRangeVertical() {
	assertTrue(ilib.CType.withinRange("\uFE1A", "Vertical"));
}

function testWithinRangeHalfMarks() {
	assertTrue(ilib.CType.withinRange("\uFE2A", "HalfMarks"));
}

function testWithinRangeSmall() {
	assertTrue(ilib.CType.withinRange("\uFE5A", "Small"));
}

function testWithinRangeWidth() {
	assertTrue(ilib.CType.withinRange("\uFF0A", "Width"));
}

function testWithinRangeSpecials() {
	assertTrue(ilib.CType.withinRange("\uFFFA", "Specials"));
}
