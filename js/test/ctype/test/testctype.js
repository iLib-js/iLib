/*
 * testctype.js - test the character type information functions
 * 
 * Copyright © 2012-2015, JEDLSoft
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

var isXdigit = require("./../lib/isXdigit.js");
var isUpper = require("./../lib/isUpper.js");
var isSpace = require("./../lib/isSpace.js");
var isScript = require("./../lib/isScript.js");
var isPunct = require("./../lib/isPunct.js");
var isPrint = require("./../lib/isPrint.js");
var isLower = require("./../lib/isLower.js");
var isIdeo = require("./../lib/isIdeo.js");
var isGraph = require("./../lib/isGraph.js");
var isDigit = require("./../lib/isDigit.js");
var isCntrl = require("./../lib/isCntrl.js");
var isBlank = require("./../lib/isBlank.js");
var isAscii = require("./../lib/isAscii.js");
var isAlpha = require("./../lib/isAlpha.js");
var isAlnum = require("./../lib/isAlnum.js");
var ilib = require("./../lib/ilib.js");
var Currency = require("./../lib/Currency.js");
var CType = require("./../lib/CType.js");
var IString = require("./../lib/IString.js");

function setUp() {
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

function testIsAlnumTrue() {
    assertTrue(isAlnum('a'));
    assertTrue(isAlnum('m'));
    assertTrue(isAlnum('z'));
    assertTrue(isAlnum('A'));
    assertTrue(isAlnum('Q'));
    assertTrue(isAlnum('0'));
    assertTrue(isAlnum('1'));
    assertTrue(isAlnum('8'));
    assertTrue(isAlnum('Ꞛ'));
}

function testIsAlnumFalse() {
    assertFalse(isAlnum(' '));
    assertFalse(isAlnum('$'));

}

function testIsAlnumOnlyFirstChar() {
    assertFalse(isAlnum(' a'));
}

function testIsAlnumEmpty() {
    assertFalse(isAlnum(''));
}

function testIsAlnumUndefined() {
    assertFalse(isAlnum());
}

function testIsAlphaTrue() {
    assertTrue(isAlpha('a'));
    assertTrue(isAlpha('m'));
    assertTrue(isAlpha('z'));
    assertTrue(isAlpha('A'));
    assertTrue(isAlpha('Q'));
}

function testIsAlphaFalse() {
    assertFalse(isAlpha(' '));
    assertFalse(isAlpha('$'));
    assertFalse(isAlpha('0'));
    assertFalse(isAlpha('1'));
    assertFalse(isAlpha('8'));
}

function testIsAlphaOnlyFirstChar() {
    assertFalse(isAlpha(' a'));
}

function testIsAlphaEmpty() {
    assertFalse(isAlpha(''));
}

function testIsAlphaUndefined() {
    assertFalse(isAlpha());
}

function testIsLowerTrue() {
    assertTrue(isLower('a'));
    assertTrue(isLower('m'));
    assertTrue(isLower('щ'));
    assertTrue(isLower('λ'));
}

function testIsLowerFalse() {
    assertFalse(isLower(' '));
    assertFalse(isLower('$'));
    assertFalse(isLower('A'));
    assertFalse(isLower('M'));
    assertFalse(isLower('0'));
    assertFalse(isLower('Щ'));
    assertFalse(isLower('Λ'));
}

function testIsLowerOnlyFirstChar() {
    assertFalse(isLower(' a'));
}

function testIsLowerEmpty() {
    assertFalse(isLower(''));
}

function testIsLowerUndefined() {
    assertFalse(isLower());
}

function testIsUpperTrue() {
	assertTrue(isUpper('A'));
	assertTrue(isUpper('M'));
	assertTrue(isUpper('Щ'));
	assertTrue(isUpper('Λ'));
}

function testIsUpperFalse() {
    assertFalse(isUpper(' '));
    assertFalse(isUpper('$'));
    assertFalse(isUpper('a'));
    assertFalse(isUpper('m'));
    assertFalse(isUpper('щ'));
    assertFalse(isUpper('λ'));
    assertFalse(isUpper('0'));
}

function testIsUpperOnlyFirstChar() {
    assertFalse(isUpper(' A'));
}

function testIsUpperEmpty() {
    assertFalse(isUpper(''));
}

function testIsUpperUndefined() {
    assertFalse(isUpper());
}

function testIsPrintTrue() {
	assertTrue(isPrint(' '));
    assertTrue(isPrint('A'));
	assertTrue(isPrint('M'));
	assertTrue(isPrint('Щ'));
	assertTrue(isPrint('Λ'));
}

function testIsPrintFalse() {
    assertFalse(isPrint('\u0001'));
    assertFalse(isPrint('\u0085'));
}

function testIsPrintOnlyFirstChar() {
    assertFalse(isPrint('\u0001X'));
}

function testIsPrintEmpty() {
    assertFalse(isPrint(''));
}

function testIsPrintUndefined() {
    assertFalse(isPrint());
}

function testIsAsciiTrue() {
    assertTrue(isAscii('a'));
    assertTrue(isAscii('m'));
    assertTrue(isAscii('z'));
    assertTrue(isAscii('A'));
    assertTrue(isAscii('Q'));
    assertTrue(isAscii(' '));
    assertTrue(isAscii('$'));
    assertTrue(isAscii('0'));
    assertTrue(isAscii('1'));
    assertTrue(isAscii('8'));
}

function testIsAsciiFalse() {
    assertFalse(isAscii('ü'));
    assertFalse(isAscii('ó'));
    assertFalse(isAscii('Д'));
}

function testIsAsciiOnlyFirstChar() {
    assertFalse(isAscii('Дa'));
}

function testIsAsciiEmpty() {
    assertFalse(isAscii(''));
}

function testIsAsciiUndefined() {
    assertFalse(isAscii());
}

function testIsBlankTrue() {
    assertTrue(isBlank(' '));
}

function testIsBlankFalse() {
    assertFalse(isBlank('a'));
    assertFalse(isBlank('m'));
    assertFalse(isBlank('z'));
    assertFalse(isBlank('A'));
    assertFalse(isBlank('Q'));
    assertFalse(isBlank('$'));
    assertFalse(isBlank('0'));
    assertFalse(isBlank('1'));
    assertFalse(isBlank('8'));
    assertFalse(isBlank('ü'));
    assertFalse(isBlank('ó'));
    assertFalse(isBlank('Д'));
}

function testIsBlankOnlyFirstChar() {
    assertFalse(isBlank('a '));
}

function testIsBlankEmpty() {
    assertFalse(isBlank(''));
}

function testIsBlankUndefined() {
    assertFalse(isBlank());
}

function testIsSpaceTrue() {
	assertTrue(isSpace(' '));
    assertTrue(isSpace('\t'));
    assertTrue(isSpace('\n'));
    assertTrue(isSpace('\u2000'));
}

function testIsSpaceFalse() {
    assertFalse(isSpace('a'));
    assertFalse(isSpace('A'));
    assertFalse(isSpace('$'));
    assertFalse(isSpace('0'));
    assertFalse(isSpace('ü'));
    assertFalse(isSpace('ó'));
    assertFalse(isSpace('Д'));
}

function testIsSpaceOnlyFirstChar() {
    assertFalse(isSpace('a '));
}

function testIsSpaceEmpty() {
    assertFalse(isSpace(''));
}

function testIsSpaceUndefined() {
    assertFalse(isSpace());
}

function testIsPunctTrue() {
    assertTrue(isPunct('?'));
    assertTrue(isPunct('.'));
    assertTrue(isPunct('\u2010')); // hyphen
    assertTrue(isPunct('\u037E')); // Greek question mark
    assertTrue(isPunct('\u3001')); // ideographic comma
}

function testIsPunctFalse() {
    assertFalse(isPunct('a'));
    assertFalse(isPunct('m'));
    assertFalse(isPunct('z'));
    assertFalse(isPunct('A'));
    assertFalse(isPunct('Q'));
    assertFalse(isPunct(' '));
    assertFalse(isPunct('0'));
    assertFalse(isPunct('1'));
    assertFalse(isPunct('8'));
    assertFalse(isPunct('ü'));
    assertFalse(isPunct('ó'));
    assertFalse(isPunct('Д'));
}

function testIsPunctOnlyFirstChar() {
    assertFalse(isPunct(' ,'));
}

function testIsPunctEmpty() {
    assertFalse(isPunct(''));
}

function testIsPunctUndefined() {
    assertFalse(isPunct());
}

function testIsGraphTrue() {
    assertTrue(isGraph('A'));
    assertTrue(isGraph('Q'));
    assertTrue(isGraph('碗'));
}

function testIsGraphFalse() {
    assertFalse(isGraph(' '));
    assertFalse(isGraph('\u0002'));
}

function testIsGraphOnlyFirstChar() {
    assertFalse(isGraph(' A'));
}

function testIsGraphEmpty() {
    assertFalse(isGraph(''));
}

function testIsGraphUndefined() {
    assertFalse(isGraph());
}

function testIsIdeoTrue() {
    assertTrue(isIdeo('碗'));
    assertTrue(isIdeo('人'));
}

function testIsIdeoFalse() {
    assertFalse(isIdeo(' '));
    assertFalse(isIdeo('$'));
    assertFalse(isIdeo('a'));
    assertFalse(isIdeo('m'));
    assertFalse(isIdeo('z'));
    assertFalse(isIdeo('0'));
    assertFalse(isIdeo('1'));
    assertFalse(isIdeo('8'));
}

function testIsIdeoOnlyFirstChar() {
    assertFalse(isIdeo(' 人'));
}

function testIsIdeoEmpty() {
    assertFalse(isIdeo(''));
}

function testIsIdeoUndefined() {
    assertFalse(isIdeo());
}

function testIsCntrlTrue() {
    assertTrue(isCntrl('\u0001'));
    assertTrue(isCntrl('\u0085'));
}

function testIsCntrlFalse() {
    assertFalse(isCntrl(' '));
    assertFalse(isCntrl('$'));
    assertFalse(isCntrl('a'));
    assertFalse(isCntrl('m'));
    assertFalse(isCntrl('z'));
    assertFalse(isCntrl('0'));
    assertFalse(isCntrl('1'));
    assertFalse(isCntrl('8'));
}

function testIsCntrlOnlyFirstChar() {
    assertFalse(isCntrl(' \u0001'));
}

function testIsCntrlEmpty() {
    assertFalse(isCntrl(''));
}

function testIsCntrlUndefined() {
    assertFalse(isCntrl());
}

function testIsDigitTrue() {
    assertTrue(isDigit('0'));
    assertTrue(isDigit('1'));
    assertTrue(isDigit('2'));
    assertTrue(isDigit('3'));
    assertTrue(isDigit('4'));
    assertTrue(isDigit('5'));
    assertTrue(isDigit('6'));
    assertTrue(isDigit('7'));
    assertTrue(isDigit('8'));
    assertTrue(isDigit('9'));
}

function testIsDigitFalse() {
    assertFalse(isDigit(' '));
    assertFalse(isDigit('a'));
    assertFalse(isDigit('m'));
    assertFalse(isDigit('z'));
    assertFalse(isDigit('A'));
    assertFalse(isDigit('Q'));
    assertFalse(isDigit('$'));
    assertFalse(isDigit('ü'));
    assertFalse(isDigit('ó'));
    assertFalse(isDigit('Д'));
}

function testIsDigitOnlyFirstChar() {
    assertFalse(isDigit('a4'));
}

function testIsDigitEmpty() {
    assertFalse(isDigit(''));
}

function testIsDigitUndefined() {
    assertFalse(isDigit());
}

function testIsXdigitTrue() {
    assertTrue(isXdigit('0'));
    assertTrue(isXdigit('1'));
    assertTrue(isXdigit('2'));
    assertTrue(isXdigit('3'));
    assertTrue(isXdigit('4'));
    assertTrue(isXdigit('5'));
    assertTrue(isXdigit('6'));
    assertTrue(isXdigit('7'));
    assertTrue(isXdigit('8'));
    assertTrue(isXdigit('9'));
    assertTrue(isXdigit('A'));
    assertTrue(isXdigit('B'));
    assertTrue(isXdigit('C'));
    assertTrue(isXdigit('D'));
    assertTrue(isXdigit('E'));
    assertTrue(isXdigit('F'));
    assertTrue(isXdigit('a'));
    assertTrue(isXdigit('b'));
    assertTrue(isXdigit('c'));
    assertTrue(isXdigit('d'));
    assertTrue(isXdigit('e'));
    assertTrue(isXdigit('f'));
}

function testIsXdigitFalse() {
	assertFalse(isXdigit('G'));
    assertFalse(isXdigit('g'));
    assertFalse(isXdigit(' '));
    assertFalse(isXdigit('m'));
    assertFalse(isXdigit('z'));
    assertFalse(isXdigit('Q'));
    assertFalse(isXdigit('$'));
    assertFalse(isXdigit('ü'));
    assertFalse(isXdigit('ó'));
    assertFalse(isXdigit('Д'));
}

function testIsXdigitOnlyFirstChar() {
    assertFalse(isXdigit('ta'));
}

function testIsXdigitEmpty() {
    assertFalse(isXdigit(''));
}

function testIsXdigitUndefined() {
    assertFalse(isXdigit());
}

/*
isIdeo: function (ch) {
withinRange: function(ch, rangeName) {
*/

function testWithinRangeTrue() {
    assertTrue(CType.withinRange('a', 'ascii'));
}

function testWithinRangeOnlyFirstChar() {
    assertFalse(CType.withinRange('\u2000a', 'ascii'));
}

function testWithinRangeLowerCaseTheRangeName() {
    assertTrue(CType.withinRange('a', 'ASCII'));
}

function testWithinRangeFalse() {
	assertFalse(CType.withinRange('G', 'arabic'));
}

function testWithinRangeMultirange1() {
    assertTrue(CType.withinRange('a', 'latin'));
}

function testWithinRangeMultirange2() {
    assertTrue(CType.withinRange('\u1E0F', 'latin'));
}

function testWithinRangeMultirange3() {
    assertTrue(CType.withinRange('\u2C61', 'latin'));
}

function testWithinRangeMultirange4() {
    assertTrue(CType.withinRange('\uA720', 'latin'));
}

function testWithinRangeMultirangeFalse() {
    assertFalse(CType.withinRange('\u2190', 'latin'));
}

function testWithinRangeEmpty() {
    assertFalse(CType.withinRange('', 'latin'));
}

function testWithinRangeUndefined() {
    assertFalse(CType.withinRange());
}


/* test each range */

function testWithinRangeLatin1() {
	assertTrue(CType.withinRange("\u000A", "Latin"));
}

function testWithinRangeLatin2() {
	assertTrue(CType.withinRange("\u1E0A", "Latin"));
}

function testWithinRangeLatin3() {
	assertTrue(CType.withinRange("\u2C6A", "Latin"));
}

function testWithinRangeLatin4() {
	assertTrue(CType.withinRange("\uA72A", "Latin"));
}

function testWithinRangeIPA1() {
	assertTrue(CType.withinRange("\u025A", "IPA"));
}

function testWithinRangeIPA2() {
	assertTrue(CType.withinRange("\u1D0A", "IPA"));
}

function testWithinRangeIPA3() {
	assertTrue(CType.withinRange("\u1D8A", "IPA"));
}

function testWithinRangeOperators1() {
	assertTrue(CType.withinRange("\u220A", "Operators"));
}

function testWithinRangeOperators2() {
	assertTrue(CType.withinRange("\u2A0A", "Operators"));
}

function testWithinRangeGreek1() {
	assertTrue(CType.withinRange("\u037A", "Greek"));
}

function testWithinRangeGreek2() {
	assertTrue(CType.withinRange("\u1F0A", "Greek"));
}

function testWithinRangeCyrillic1() {
	assertTrue(CType.withinRange("\u040A", "Cyrillic"));
}

function testWithinRangeCyrillic2() {
	assertTrue(CType.withinRange("\u2DEA", "Cyrillic"));
}

function testWithinRangeCyrillic3() {
	assertTrue(CType.withinRange("\uA64A", "Cyrillic"));
}

function testWithinRangeArabic1() {
	assertTrue(CType.withinRange("\u060A", "Arabic"));
}

function testWithinRangeArabic2() {
	assertTrue(CType.withinRange("\u075A", "Arabic"));
}

function testWithinRangeArabic3() {
	assertTrue(CType.withinRange("\uFB5A", "Arabic"));
}

function testWithinRangeArabic4() {
	assertTrue(CType.withinRange("\uFE7A", "Arabic"));
}

function testWithinRangeDevanagari1() {
	assertTrue(CType.withinRange("\u090A", "Devanagari"));
}

function testWithinRangeDevanagari2() {
	assertTrue(CType.withinRange("\uA8EA", "Devanagari"));
}

function testWithinRangeMyanmar1() {
	assertTrue(CType.withinRange("\u100A", "Myanmar"));
}

function testWithinRangeMyanmar2() {
	assertTrue(CType.withinRange("\uAA6A", "Myanmar"));
}

function testWithinRangeHangul1() {
	assertTrue(CType.withinRange("\u110A", "Hangul"));
}

function testWithinRangeHangul2() {
	assertTrue(CType.withinRange("\uAC0A", "Hangul"));
}

function testWithinRangeHangul3() {
	assertTrue(CType.withinRange("\uA96A", "Hangul"));
}

function testWithinRangeHangul4() {
	assertTrue(CType.withinRange("\uD7BA", "Hangul"));
}

function testWithinRangeHangul5() {
	assertTrue(CType.withinRange("\u313A", "Hangul"));
}

function testWithinRangeEthiopic1() {
	assertTrue(CType.withinRange("\u120A", "Ethiopic"));
}

function testWithinRangeEthiopic2() {
	assertTrue(CType.withinRange("\u2D8A", "Ethiopic"));
}

function testWithinRangeEthiopic3() {
	assertTrue(CType.withinRange("\uAB0A", "Ethiopic"));
}

function testWithinRangeCanadian1() {
	assertTrue(CType.withinRange("\u140A", "Canadian"));
}

function testWithinRangeCanadian2() {
	assertTrue(CType.withinRange("\u18BA", "Canadian"));
}

function testWithinRangeCombining1() {
	assertTrue(CType.withinRange("\u030A", "Combining"));
}

function testWithinRangeCombining2() {
	assertTrue(CType.withinRange("\u1DCA", "Combining"));
}

function testWithinRangeCombining3() {
	assertTrue(CType.withinRange("\u20DA", "Combining"));
}

function testWithinRangeArrows1() {
	assertTrue(CType.withinRange("\u219A", "Arrows"));
}

function testWithinRangeArrows2() {
	assertTrue(CType.withinRange("\u2B0A", "Arrows"));
}

function testWithinRangeArrows3() {
	assertTrue(CType.withinRange("\u27FA", "Arrows"));
}

function testWithinRangeArrows4() {
	assertTrue(CType.withinRange("\u290A", "Arrows"));
}

function testWithinRangeCJK1() {
	assertTrue(CType.withinRange("\u4E0A", "CJK"));
}

function testWithinRangeCJK2() {
	assertTrue(CType.withinRange("\u340A", "CJK"));
}

function testWithinRangeCJK3() {
	assertTrue(CType.withinRange("\u2FFA", "CJK"));
}

function testWithinRangeCJKCompatibility1() {
	assertTrue(CType.withinRange("\u330A", "CJKCompatibility"));
}

function testWithinRangeCJKCompatibility2() {
	assertTrue(CType.withinRange("\uF90A", "CJKCompatibility"));
}

function testWithinRangeCJKCompatibility3() {
	assertTrue(CType.withinRange("\uFE3A", "CJKCompatibility"));
}

function testWithinRangeMathematical1() {
	assertTrue(CType.withinRange("\u27CA", "Mathematical"));
}

function testWithinRangeMathematical2() {
	assertTrue(CType.withinRange("\u298A", "Mathematical"));
}

function testWithinRangePrivateUse() {
	assertTrue(CType.withinRange("\uE00A", "PrivateUse"));
}

function testWithinRangeVariations() {
	assertTrue(CType.withinRange("\uFE0A", "Variations"));
}

function testWithinRangeBamum() {
	assertTrue(CType.withinRange("\uA6AA", "Bamum"));
}

function testWithinRangeGeorgian() {
	assertTrue(CType.withinRange("\u10AA", "Georgian"));
}

function testWithinRangeGeorgian() {
	assertTrue(CType.withinRange("\u2D0A", "Georgian"));
}

function testWithinRangePunctuation1() {
	assertTrue(CType.withinRange("\u200A", "Punctuation"));
}

function testWithinRangePunctuation2() {
	assertTrue(CType.withinRange("\u2E0A", "Punctuation"));
}

function testWithinRangeKatakana1() {
	assertTrue(CType.withinRange("\u30AA", "Katakana"));
}

function testWithinRangeKatakana2() {
	assertTrue(CType.withinRange("\u31FA", "Katakana"));
}

function testWithinRangeBopomofo1() {
	assertTrue(CType.withinRange("\u310A", "Bopomofo"));
}

function testWithinRangeBopomofo2() {
	assertTrue(CType.withinRange("\u31AA", "Bopomofo"));
}

function testWithinRangeEnclosedAlpha() {
	assertTrue(CType.withinRange("\u246A", "EnclosedAlpha"));
}

function testWithinRangeCJKRadicals1() {
	assertTrue(CType.withinRange("\u2E8A", "CJKRadicals"));
}

function testWithinRangeCJKRadicals2() {
	assertTrue(CType.withinRange("\u2F0A", "CJKRadicals"));
}

function testWithinRangeYi1() {
	assertTrue(CType.withinRange("\uA00A", "Yi"));
}

function testWithinRangeYi2() {
	assertTrue(CType.withinRange("\uA49A", "Yi"));
}

function testWithinRangeEnclosedCJK() {
	assertTrue(CType.withinRange("\u320A", "EnclosedCJK"));
}

function testWithinRangeSpacing() {
	assertTrue(CType.withinRange("\u02BA", "Spacing"));
}

function testWithinRangeArmenian() {
	assertTrue(CType.withinRange("\u053A", "Armenian"));
}

function testWithinRangeHebrew() {
	assertTrue(CType.withinRange("\u059A", "Hebrew"));
}

function testWithinRangeSyriac() {
	assertTrue(CType.withinRange("\u070A", "Syriac"));
}

function testWithinRangeThaana() {
	assertTrue(CType.withinRange("\u078A", "Thaana"));
}

function testWithinRangeNKo() {
	assertTrue(CType.withinRange("\u07CA", "NKo"));
}

function testWithinRangeSamaritan() {
	assertTrue(CType.withinRange("\u080A", "Samaritan"));
}

function testWithinRangeMandaic() {
	assertTrue(CType.withinRange("\u084A", "Mandaic"));
}

function testWithinRangeBengali() {
	assertTrue(CType.withinRange("\u098A", "Bengali"));
}

function testWithinRangeGurmukhi() {
	assertTrue(CType.withinRange("\u0A0A", "Gurmukhi"));
}

function testWithinRangeGujarati() {
	assertTrue(CType.withinRange("\u0A8A", "Gujarati"));
}

function testWithinRangeOriya() {
	assertTrue(CType.withinRange("\u0B0A", "Oriya"));
}

function testWithinRangeTamil() {
	assertTrue(CType.withinRange("\u0B8A", "Tamil"));
}

function testWithinRangeTelugu() {
	assertTrue(CType.withinRange("\u0C0A", "Telugu"));
}

function testWithinRangeKannada() {
	assertTrue(CType.withinRange("\u0C8A", "Kannada"));
}

function testWithinRangeMalayalam() {
	assertTrue(CType.withinRange("\u0D0A", "Malayalam"));
}

function testWithinRangeSinhala() {
	assertTrue(CType.withinRange("\u0D8A", "Sinhala"));
}

function testWithinRangeThai() {
	assertTrue(CType.withinRange("\u0E0A", "Thai"));
}

function testWithinRangeLao() {
	assertTrue(CType.withinRange("\u0E8A", "Lao"));
}

function testWithinRangeTibetan() {
	assertTrue(CType.withinRange("\u0F0A", "Tibetan"));
}

function testWithinRangeCherokee() {
	assertTrue(CType.withinRange("\u13AA", "Cherokee"));
}

function testWithinRangeOgham() {
	assertTrue(CType.withinRange("\u168A", "Ogham"));
}

function testWithinRangeRunic() {
	assertTrue(CType.withinRange("\u16AA", "Runic"));
}

function testWithinRangeTagalog() {
	assertTrue(CType.withinRange("\u170A", "Tagalog"));
}

function testWithinRangeHanunoo() {
	assertTrue(CType.withinRange("\u172A", "Hanunoo"));
}

function testWithinRangeBuhid() {
	assertTrue(CType.withinRange("\u174A", "Buhid"));
}

function testWithinRangeTagbanwa() {
	assertTrue(CType.withinRange("\u176A", "Tagbanwa"));
}

function testWithinRangeKhmer() {
	assertTrue(CType.withinRange("\u178A", "Khmer"));
}

function testWithinRangeMongolian() {
	assertTrue(CType.withinRange("\u180A", "Mongolian"));
}

function testWithinRangeLimbu() {
	assertTrue(CType.withinRange("\u190A", "Limbu"));
}

function testWithinRangeTaiLe() {
	assertTrue(CType.withinRange("\u195A", "TaiLe"));
}

function testWithinRangeNewTaiLue() {
	assertTrue(CType.withinRange("\u198A", "NewTaiLue"));
}

function testWithinRangeKhmerSymbols() {
	assertTrue(CType.withinRange("\u19EA", "KhmerSymbols"));
}

function testWithinRangeBuginese() {
	assertTrue(CType.withinRange("\u1A0A", "Buginese"));
}

function testWithinRangeTaiTham() {
	assertTrue(CType.withinRange("\u1A2A", "TaiTham"));
}

function testWithinRangeBalinese() {
	assertTrue(CType.withinRange("\u1B0A", "Balinese"));
}

function testWithinRangeSundanese() {
	assertTrue(CType.withinRange("\u1B8A", "Sundanese"));
}

function testWithinRangeBatak() {
	assertTrue(CType.withinRange("\u1BCA", "Batak"));
}

function testWithinRangeLepcha() {
	assertTrue(CType.withinRange("\u1C0A", "Lepcha"));
}

function testWithinRangeOlChiki() {
	assertTrue(CType.withinRange("\u1C5A", "OlChiki"));
}

function testWithinRangeVedic() {
	assertTrue(CType.withinRange("\u1CDA", "Vedic"));
}

function testWithinRangeSuperSub() {
	assertTrue(CType.withinRange("\u207A", "SuperSub"));
}

function testWithinRangeCurrency() {
	assertTrue(CType.withinRange("\u20AA", "Currency"));
}

function testWithinRangeLetterlike() {
	assertTrue(CType.withinRange("\u210A", "Letterlike"));
}

function testWithinRangeNumbers() {
	assertTrue(CType.withinRange("\u215A", "Numbers"));
}

function testWithinRangeMisc() {
	assertTrue(CType.withinRange("\u230A", "Misc"));
}

function testWithinRangeControlPictures() {
	assertTrue(CType.withinRange("\u240A", "ControlPictures"));
}

function testWithinRangeOCR() {
	assertTrue(CType.withinRange("\u244A", "OCR"));
}

function testWithinRangeBox() {
	assertTrue(CType.withinRange("\u250A", "Box"));
}

function testWithinRangeBlock() {
	assertTrue(CType.withinRange("\u258A", "Block"));
}

function testWithinRangeGeometric() {
	assertTrue(CType.withinRange("\u25AA", "Geometric"));
}

function testWithinRangeMiscSymbols() {
	assertTrue(CType.withinRange("\u260A", "MiscSymbols"));
}

function testWithinRangeDingbats() {
	assertTrue(CType.withinRange("\u270A", "Dingbats"));
}

function testWithinRangeBraille() {
	assertTrue(CType.withinRange("\u280A", "Braille"));
}

function testWithinRangeGlagolitic() {
	assertTrue(CType.withinRange("\u2C0A", "Glagolitic"));
}

function testWithinRangeCoptic() {
	assertTrue(CType.withinRange("\u2C8A", "Coptic"));
}

function testWithinRangeTifinagh() {
	assertTrue(CType.withinRange("\u2D3A", "Tifinagh"));
}

function testWithinRangeCJKPunct() {
	assertTrue(CType.withinRange("\u300A", "CJKPunct"));
}

function testWithinRangeHiragana() {
	assertTrue(CType.withinRange("\u304A", "Hiragana"));
}

function testWithinRangeKanbun() {
	assertTrue(CType.withinRange("\u319A", "Kanbun"));
}

function testWithinRangeYijing() {
	assertTrue(CType.withinRange("\u4DCA", "Yijing"));
}

function testWithinRangeCJKStrokes() {
	assertTrue(CType.withinRange("\u31CA", "CJKStrokes"));
}

function testWithinRangeLisu() {
	assertTrue(CType.withinRange("\uA4DA", "Lisu"));
}

function testWithinRangeVai() {
	assertTrue(CType.withinRange("\uA50A", "Vai"));
}

function testWithinRangeModifierTone() {
	assertTrue(CType.withinRange("\uA70A", "ModifierTone"));
}

function testWithinRangeSylotiNagri() {
	assertTrue(CType.withinRange("\uA80A", "SylotiNagri"));
}

function testWithinRangeIndicNumber() {
	assertTrue(CType.withinRange("\uA83A", "IndicNumber"));
}

function testWithinRangePhagspa() {
	assertTrue(CType.withinRange("\uA84A", "Phagspa"));
}

function testWithinRangeSaurashtra() {
	assertTrue(CType.withinRange("\uA88A", "Saurashtra"));
}

function testWithinRangeKayahLi() {
	assertTrue(CType.withinRange("\uA90A", "KayahLi"));
}

function testWithinRangeRejang() {
	assertTrue(CType.withinRange("\uA93A", "Rejang"));
}

function testWithinRangeJavanese() {
	assertTrue(CType.withinRange("\uA98A", "Javanese"));
}

function testWithinRangeCham() {
	assertTrue(CType.withinRange("\uAA0A", "Cham"));
}

function testWithinRangeTaiViet() {
	assertTrue(CType.withinRange("\uAA8A", "TaiViet"));
}

function testWithinRangeMeeteiMayek() {
	assertTrue(CType.withinRange("\uABCA", "MeeteiMayek"));
}

function testWithinRangePresentation() {
	assertTrue(CType.withinRange("\uFB0A", "Presentation"));
}

function testWithinRangeVertical() {
	assertTrue(CType.withinRange("\uFE1A", "Vertical"));
}

function testWithinRangeHalfMarks() {
	assertTrue(CType.withinRange("\uFE2A", "HalfMarks"));
}

function testWithinRangeSmall() {
	assertTrue(CType.withinRange("\uFE5A", "Small"));
}

function testWithinRangeWidth() {
	assertTrue(CType.withinRange("\uFF0A", "Width"));
}

function testWithinRangeSpecials() {
	assertTrue(CType.withinRange("\uFFFA", "Specials"));
}

function testWithinRangeCopticnumber() {    
    var str = IString.fromCodePoint(0x102e0);
    assertTrue(CType.withinRange(str, "copticnumber"));
}

function testWithinRangeOldpermic() {
    var str = IString.fromCodePoint(0x10350);
    assertTrue(CType.withinRange(str, "oldpermic"));
}

function testWithinRangeAlbanian() {
    var str = IString.fromCodePoint(0x10530);
    assertTrue(CType.withinRange(str, "albanian"));
}

function testWithinRangeLineara() {
    var str = IString.fromCodePoint(0x10600);
    assertTrue(CType.withinRange(str, "lineara"));
}

function testWithinRangeMeroitic() {
    var str = IString.fromCodePoint(0x109a0);
    assertTrue(CType.withinRange(str, "meroitic"));
}

function testWithinRangeLowsurrogates() {
    var str = IString.fromCodePoint(0xdc00);
    assertTrue(CType.withinRange(str, "lowsurrogates"));
}

function testWithinRangeOldhungarian() {
    var str = IString.fromCodePoint(0x10c80);
    assertTrue(CType.withinRange(str, "oldhungarian"));
}

function testWithinRangeSorasopeng() {
    var str = IString.fromCodePoint(0x110d0);
    assertTrue(CType.withinRange(str, "sorasompeng"));
}

function testWithinRangeWarangciti() {
    var str = IString.fromCodePoint(0x118a0);
    assertTrue(CType.withinRange(str, "warangciti"));
}

function testWithinRangePaucinhau() {
    var str = IString.fromCodePoint(0x11ac0);
    assertTrue(CType.withinRange(str, "paucinhau"));
}

function testWithinRangeBassavah() {
    var str = IString.fromCodePoint(0x16ad0);
    assertTrue(CType.withinRange(str, "bassavah"));
}

function testWithinRangePahawhhmong() {
    var str = IString.fromCodePoint(0x16b00);
    assertTrue(CType.withinRange(str, "pahawhhmong"));
}

function testWithinRangeShorthandformat() {
    var str = IString.fromCodePoint(0x1bca0);
    assertTrue(CType.withinRange(str, "shorthandformat"));
}

function testWithinRangeSurronsingwriting() {
    var str = IString.fromCodePoint(0x1d800);
    assertTrue(CType.withinRange(str, "suttonsignwriting"));
}

function testWithinRangePictographs1() {
    var str = IString.fromCodePoint(0x1f300);
    assertTrue(CType.withinRange(str, "pictographs"));
}

function testWithinRangePictographs2() {
    var str = IString.fromCodePoint(0x1f9ff);
    assertTrue(CType.withinRange(str, "pictographs"));
}

function testWithinRangeOrnamentaldingbats() {
    var str = IString.fromCodePoint(0x1f650);
    assertTrue(CType.withinRange(str, "ornamentaldingbats"));
}


function testIsScriptTrue() {
	assertTrue("testing Latn", isScript("a", "Latn"));
	assertTrue("testing Cyrl", isScript("Д", "Cyrl"));
	assertTrue("testing Grek", isScript("ώ", "Grek"));
	assertTrue("testing Hang", isScript("귋", "Hang"));
	assertTrue("testing Hani", isScript("㜴", "Hani"));
	assertTrue("testing Hebr", isScript("ש", "Hebr"));
	assertTrue("testing Arab", isScript("ش", "Arab"));
	assertTrue("testing Deva", isScript("झ", "Deva"));
}

function testIsScriptFalse() {
	assertFalse(isScript("a", "Cyrl"));
	assertFalse(isScript("Д", "Grek"));
	assertFalse(isScript("ώ", "Hang"));
	assertFalse(isScript("귋", "Hani"));
	assertFalse(isScript("㜴", "Hebr"));
	assertFalse(isScript("ש", "Arab"));
	assertFalse(isScript("ش", "Deva"));
	assertFalse(isScript("झ", "Latn"));
}

function testIsScriptEmptyScriptName() {
	assertFalse(isScript("a", ""));
}

function testIsScriptNoScriptName() {
	assertFalse(isScript("a"));
}

function testIsScriptEmptyChar() {
	assertFalse(isScript("", "Cyrl"));
}

function testIsScriptNoChar() {
	assertFalse(isScript(undefined, "Cyrl"));
}

function testIsScriptNoNothing() {
	assertFalse(isScript(undefined, undefined));
}
