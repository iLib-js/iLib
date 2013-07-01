/*
 * testunifile.js - test the Unicode file loading class
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
var unifile = require("../../../tools/cldr/unifile.js");

var unifileData =
	"0041;LATIN CAPITAL LETTER A;Lu;0;L;;;;;N;;;;0061;\n" +
	"00A8;DIAERESIS;Sk;0;ON;<compat> 0020 0308;;;;N;SPACING DIAERESIS;;;;\n" +
	"00C4;LATIN CAPITAL LETTER A WITH DIAERESIS;Lu;0;L;0041 0308;;;;N;LATIN CAPITAL LETTER A DIAERESIS;;;00E4;\n" +
	"0160;LATIN CAPITAL LETTER S WITH CARON;Lu;0;L;0053 030C;;;;N;LATIN CAPITAL LETTER S HACEK;;;0161;\n" +
	"FF76;HALFWIDTH KATAKANA LETTER KA;Lo;0;L;<narrow> 30AB;;;;N;;;;;\n";

var unifileData2 =
	"# this is a line with a comment on it\n" +
	"# and on the next line, there is a blank line\n" +
	"\n" +
	"0041;LATIN CAPITAL LETTER A;Lu;0;L;;;;;N;;;;0061; # fake ; fields ; here ; skip ; these\n" +
	"00A8;DIAERESIS;Sk;0;ON;<compat> 0020 0308;;;;N;SPACING DIAERESIS;;;; # this line ends with a comment \n" +
	"\n" +
	"@Part 2\n" +
	"\n" +
	"00C4;LATIN CAPITAL LETTER A WITH DIAERESIS;Lu;0;L;0041 0308;;;;N;LATIN CAPITAL LETTER A DIAERESIS;;;00E4;\n" +
	"0160;LATIN CAPITAL LETTER S WITH CARON;Lu;0;L;0053 030C;;;;N;LATIN CAPITAL LETTER S HACEK;;;0161;\n" +
	"     # indented comment\n" +
	"FF76;HALFWIDTH KATAKANA LETTER KA;Lo;0;L;<narrow> 30AB;;;;N;;;;;\n";

function testUFConstructor() {
    var uf = new unifile.UnicodeFile({string: unifileData});
    assertNotNull(uf);
}

function testUFLength() {
    var uf = new unifile.UnicodeFile({string: unifileData});
    assertNotNull(uf);
    
    assertEquals(5, uf.length());
}

function testUFGetRow() {
    var uf = new unifile.UnicodeFile({string: unifileData});
    assertNotNull(uf);
    
    var row = uf.get(2);
    assertNotNull(row);
}

function testUFGetRowRightLength() {
    var uf = new unifile.UnicodeFile({string: unifileData});
    assertNotNull(uf);
    
    var row = uf.get(2);
    assertNotNull(row);
    
    assertEquals(15, row.length);
}

function testUFGetRowRightData() {
    var uf = new unifile.UnicodeFile({string: unifileData});
    assertNotNull(uf);
    
    var row = uf.get(2);
    assertNotNull(row);
    
    assertEquals("00C4", row[0]);
    assertEquals("LATIN CAPITAL LETTER A WITH DIAERESIS", row[1]);
    assertEquals("Lu", row[2]);
    assertEquals("0", row[3]);
    assertEquals("L", row[4]);
    assertEquals("0041 0308", row[5]);
    assertEquals("", row[6]);
    assertEquals("", row[7]);
    assertEquals("", row[8]);
    assertEquals("N", row[9]);
    assertEquals("LATIN CAPITAL LETTER A DIAERESIS", row[10]);
    assertEquals("", row[11]);
    assertEquals("", row[12]);
    assertEquals("00E4", row[13]);
    assertEquals("", row[14]);
}

function testUFSkipCommentsAndBlankLines() {
    var uf = new unifile.UnicodeFile({string: unifileData2});
    assertNotNull(uf);
    
    assertEquals(5, uf.length());
}

function testUFSkipTrailingComments() {
    var uf = new unifile.UnicodeFile({string: unifileData2});
    assertNotNull(uf);
    
    var row = uf.get(0);
    assertNotNull(row);
    
    assertEquals(15, row.length);
}

function testUFSkipCommentsRightData() {
    var uf = new unifile.UnicodeFile({string: unifileData2});
    assertNotNull(uf);
    
    var row = uf.get(2);
    assertNotNull(row);
    
    assertEquals("00C4", row[0]);
    assertEquals("LATIN CAPITAL LETTER A WITH DIAERESIS", row[1]);
    assertEquals("Lu", row[2]);
    assertEquals("0", row[3]);
    assertEquals("L", row[4]);
    assertEquals("0041 0308", row[5]);
    assertEquals("", row[6]);
    assertEquals("", row[7]);
    assertEquals("", row[8]);
    assertEquals("N", row[9]);
    assertEquals("LATIN CAPITAL LETTER A DIAERESIS", row[10]);
    assertEquals("", row[11]);
    assertEquals("", row[12]);
    assertEquals("00E4", row[13]);
    assertEquals("", row[14]);
}

