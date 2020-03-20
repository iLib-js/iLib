/*
 * testunidata.js - test the UnicodeData parsing routines
 * 
 * Copyright © 2012, 2020 JEDLSoft
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

if (typeof(common) === "undefined") {
    var common = require("../common.js");
}

if (typeof(unidata) === "undefined") {
    var unidata = require("../uniData.js");
}

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

module.exports.testunidata = {
    testUDConstructor: function(test) {
        test.expect(1);
        var ud = new unidata.UnicodeData({string: sampleData});
        test.ok(ud !== null);
        test.done();
    },
    testUDGetRow: function(test) {
        test.expect(2);
        var ud = new unidata.UnicodeData({string: sampleData});
        test.ok(ud !== null);

        var row = ud.get(2);
        test.ok(row !== null);
        test.done();
    },
    /*testUDGetRowRightData: function(test) {
        test.expect(13);
        var ud = new unidata.UnicodeData({string: sampleData});
        test.ok(ud !== null);

        var row = ud.get(2);
        test.ok(row !== null);

        test.ok("Ä", row.getCharacter());
        test.ok("LATIN CAPITAL LETTER A WITH DIAERESIS", row.getName());
        test.ok("Lu", row.getCategory());
        test.ok(0, row.getCombiningClass());
        test.ok("L", row.getBidiClass());
        test.ok("canon", row.getDecompositionType());
        test.ok("Ä", row.getDecomposition());
        test.ok(false, row.getBidiMirrored());
        test.ok("", row.getSimpleUppercase());
        test.ok("ä", row.getSimpleLowercase());
        test.ok("", row.getSimpleTitlecase());
        test.done();
    },*/
    /*testUDGetRowRightData2: function(test) {
        test.expect(13);
        var ud = new unidata.UnicodeData({string: sampleData});
        test.ok(ud !== null);

        var row = ud.get(7);
        test.ok(row !== null);

        test.ok("̤", row.getCharacter());
        test.ok("COMBINING DIAERESIS BELOW", row.getName());
        test.ok("Mn", row.getCategory());
        test.ok(220, row.getCombiningClass());
        test.ok("NSM", row.getBidiClass());
        test.ok("", row.getDecompositionType());
        test.ok("̤", row.getDecomposition());
        test.ok(false, row.getBidiMirrored());
        test.ok("", row.getSimpleUppercase());
        test.ok("", row.getSimpleLowercase());
        test.ok("", row.getSimpleTitlecase());
        test.done();
    },*/
    testUDGetRowRightNumberOfFields: function(test) {
        test.expect(2);
        var ud = new unidata.UnicodeData({string: sampleData});
        test.ok(ud !== null);

        test.ok(21, ud.length());
        test.done();
    },
    testUDGetOtherDecompType: function(test) {
        test.expect(4);
        var ud = new unidata.UnicodeData({string: sampleData});
        test.ok(ud !== null);

        var row = ud.get(4);
        test.ok(row !== null);

        test.ok("compat", row.getDecompositionType());
        test.ok("dz", row.getDecomposition());
        test.done();
    }
}