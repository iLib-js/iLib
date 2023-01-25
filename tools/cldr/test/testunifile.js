/*
 * testunifile.js - test the Unicode file loading class
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

if (typeof(unifile) === "undefined") {
    var unifile = require("../unifile.js");
}

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


module.exports.testunifile = {
    testUFConstructor: function(test) {
        test.expect(1);
        var uf = new unifile.UnicodeFile({string: unifileData});
        test.ok(uf !== null);
        test.done()
    },
    testUFLength: function(test) {
        test.expect(2);
        var uf = new unifile.UnicodeFile({string: unifileData});
        test.ok(uf !== null);

        test.equal(5, uf.length());
        test.done()
    },
    testUFGetRow: function(test) {
        test.expect(2);
        var uf = new unifile.UnicodeFile({string: unifileData});
        test.ok(uf !== null);

        var row = uf.get(2);
        test.ok(row !== null);
        test.done()
    },
    testUFGetRowRightLength: function(test) {
        test.expect(3);
        var uf = new unifile.UnicodeFile({string: unifileData});
        test.ok(uf !== null);

        var row = uf.get(2);
        test.ok(row !== null);
        test.equal(15, row.length);
        test.done()
    },
    testUFGetRowRightData: function(test) {
        test.expect(17);
        var uf = new unifile.UnicodeFile({string: unifileData});
        test.ok(uf !== null);

        var row = uf.get(2);
        test.ok(row !== null);

        test.equal("00C4", row[0]);
        test.equal("LATIN CAPITAL LETTER A WITH DIAERESIS", row[1]);
        test.equal("Lu", row[2]);
        test.equal("0", row[3]);
        test.equal("L", row[4]);
        test.equal("0041 0308", row[5]);
        test.equal("", row[6]);
        test.equal("", row[7]);
        test.equal("", row[8]);
        test.equal("N", row[9]);
        test.equal("LATIN CAPITAL LETTER A DIAERESIS", row[10]);
        test.equal("", row[11]);
        test.equal("", row[12]);
        test.equal("00E4", row[13]);
        test.equal("", row[14]);
        test.done()
    },
    testUFSkipCommentsAndBlankLines: function(test) {
        test.expect(2);
        var uf = new unifile.UnicodeFile({string: unifileData2});
        test.ok(uf !== null);

        test.equal(5, uf.length());
        test.done()
    },
    testUFSkipTrailingComments: function(test) {
        test.expect(3);
        var uf = new unifile.UnicodeFile({string: unifileData2});
        test.ok(uf !== null);

        var row = uf.get(0);
        test.ok(row !== null);

        test.equal(15, row.length);
        test.done()
    },
    testUFSkipCommentsRightData: function(test) {
        test.expect(17);
        var uf = new unifile.UnicodeFile({string: unifileData2});
        test.ok(uf !== null);

        var row = uf.get(2);
        test.ok(row !== null);
        test.equal("00C4", row[0]);
        test.equal("LATIN CAPITAL LETTER A WITH DIAERESIS", row[1]);
        test.equal("Lu", row[2]);
        test.equal("0", row[3]);
        test.equal("L", row[4]);
        test.equal("0041 0308", row[5]);
        test.equal("", row[6]);
        test.equal("", row[7]);
        test.equal("", row[8]);
        test.equal("N", row[9]);
        test.equal("LATIN CAPITAL LETTER A DIAERESIS", row[10]);
        test.equal("", row[11]);
        test.equal("", row[12]);
        test.equal("00E4", row[13]);
        test.equal("", row[14]);
        test.done()
    }
}