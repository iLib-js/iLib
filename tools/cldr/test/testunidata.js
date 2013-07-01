/*
 * testunidata.js - test the UnicodeData parsing routines
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

var common = require("../../../tools/cldr/common.js");
var unidata = require("../../../tools/cldr/uniData.js");

var sampleData =
	"0041;LATIN CAPITAL LETTER A;Lu;0;L;;;;;N;;;;0061;\n" +
	"00A8;DIAERESIS;Sk;0;ON;<compat> 0020 0308;;;;N;SPACING DIAERESIS;;;;\n" +
	"00C4;LATIN CAPITAL LETTER A WITH DIAERESIS;Lu;0;L;0041 0308;;;;N;LATIN CAPITAL LETTER A DIAERESIS;;;00E4;\n" +
	"0160;LATIN CAPITAL LETTER S WITH CARON;Lu;0;L;0053 030C;;;;N;LATIN CAPITAL LETTER S HACEK;;;0161;\n" +
	"01F3;LATIN SMALL LETTER DZ;Ll;0;L;<compat> 0064 007A;;;;N;;;01F1;;01F2\n" +
	"02E0;MODIFIER LETTER SMALL GAMMA;Lm;0;L;<super> 0263;;;;N;;;;;\n" +
	"0302;COMBINING CIRCUMFLEX ACCENT;Mn;230;NSM;;;;;N;NON-SPACING CIRCUMFLEX;;;;\n" +
	"0324;COMBINING DIAERESIS BELOW;Mn;220;NSM;;;;;N;NON-SPACING DOUBLE DOT BELOW;;;;\n" +
	"03A5;GREEK CAPITAL LETTER UPSILON;Lu;0;L;;;;;N;;;;03C5;\n" +
	"03AB;GREEK CAPITAL LETTER UPSILON WITH DIALYTIKA;Lu;0;L;03A5 0308;;;;N;GREEK CAPITAL LETTER UPSILON DIAERESIS;;;03CB;\n" +
	"1100;HANGUL CHOSEONG KIYEOK;Lo;0;L;;;;;N;;;;;\n   " +
	"3204;PARENTHESIZED HANGUL MIEUM;So;0;L;<compat> 0028 1106 0029;;;;N;;;;;\n" +
	"3260;CIRCLED HANGUL KIYEOK;So;0;L;<circle> 1100;;;;N;CIRCLED HANGUL GIYEOG;;;;\n" +
	"3319;SQUARE GURAMUTON;So;0;L;<square> 30B0 30E9 30E0 30C8 30F3;;;;N;SQUARED GURAMUTON;;;;\n" +
	"A8D3;SAURASHTRA DIGIT THREE;Nd;0;L;;3;3;3;N;;;;;\n" +
	"FB21;HEBREW LETTER WIDE ALEF;Lo;0;R;<font> 05D0;;;;N;;;;;\n" +
	"FB88;ARABIC LETTER DDAL ISOLATED FORM;Lo;0;AL;<isolated> 0688;;;;N;;;;;\n" +
	"FBD8;ARABIC LETTER U FINAL FORM;Lo;0;AL;<final> 06C7;;;;N;;;;\n" +
	"FD2F;ARABIC LIGATURE SHEEN WITH KHAH INITIAL FORM;Lo;0;AL;<initial> 0634 062E;;;;N;;;;;\n" +
	"FF08;FULLWIDTH LEFT PARENTHESIS;Ps;0;ON;<wide> 0028;;;;Y;FULLWIDTH OPENING PARENTHESIS;;;;\n" +
	"FF76;HALFWIDTH KATAKANA LETTER KA;Lo;0;L;<narrow> 30AB;;;;N;;;;;\n";

function testUDConstructor() {
    var ud = new unidata.UnicodeData({string: sampleData});
    assertNotNull(ud);
}

function testUDGetRow() {
	var ud = new unidata.UnicodeData({string: sampleData});
    assertNotNull(ud);
    
    var row = ud.get(2);
    assertNotNull(row);
}

function testUDGetRowRightData() {
	var ud = new unidata.UnicodeData({string: sampleData});
    assertNotNull(ud);
    
    var row = ud.get(2);
    assertNotNull(row);
    
    assertEquals("Ä", row.getCharacter());
    assertEquals("LATIN CAPITAL LETTER A WITH DIAERESIS", row.getName());
    assertEquals("Lu", row.getCategory());
    assertEquals(0, row.getCombiningClass());
    assertEquals("L", row.getBidiClass());
    assertEquals("canon", row.getDecompositionType());
    assertEquals("Ä", row.getDecomposition());
    assertEquals(false, row.getBidiMirrored());
    assertEquals("", row.getSimpleUppercase());
    assertEquals("ä", row.getSimpleLowercase());
    assertEquals("", row.getSimpleTitlecase());
}

function testUDGetRowRightData2() {
	var ud = new unidata.UnicodeData({string: sampleData});
    assertNotNull(ud);
    
    var row = ud.get(7);
    assertNotNull(row);
    
    assertEquals("̤", row.getCharacter());
    assertEquals("COMBINING DIAERESIS BELOW", row.getName());
    assertEquals("Mn", row.getCategory());
    assertEquals(220, row.getCombiningClass());
    assertEquals("NSM", row.getBidiClass());
    assertEquals("", row.getDecompositionType());
    assertEquals("̤", row.getDecomposition());
    assertEquals(false, row.getBidiMirrored());
    assertEquals("", row.getSimpleUppercase());
    assertEquals("", row.getSimpleLowercase());
    assertEquals("", row.getSimpleTitlecase());
}

function testUDGetRowRightNumberOfFields() {
	var ud = new unidata.UnicodeData({string: sampleData});
    assertNotNull(ud);
    
    assertEquals(21, ud.length());
}

function testUDGetOtherDecompType() {
	var ud = new unidata.UnicodeData({string: sampleData});
    assertNotNull(ud);
    
    var row = ud.get(4);
    assertNotNull(row);
    
    assertEquals("compat", row.getDecompositionType());
    assertEquals("dz", row.getDecomposition());
}
