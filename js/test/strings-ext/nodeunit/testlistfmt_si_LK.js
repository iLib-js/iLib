/*
 * testlistfmt_si_LK.js - test the list formatter object
 *
 * Copyright © 2017,2017, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSe-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if (typeof(ListFmt) === "undefined") {
    var ListFmt = require("../../../lib/ListFmt.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testlistfmt_si_LK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // si-LK
    
    testListFmtsiLKNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "si-LK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["එක"]), "එක");
        test.done();
    },
    
    testListFmtsiLKNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "si-LK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["එක", "දෙක"]), "එක සහ දෙක");
        test.done();
    },
    
    testListFmtsiLKNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "si-LK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["එක", "දෙක", "තුන්"]), "එක, දෙක, සහ තුන්");
        test.done();
    },
    
    testListFmtsiLKNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "si-LK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["එක", "දෙක", "තුන්", "සිව්"]), "එක, දෙක, තුන්, සහ සිව්");
        test.done();
    },
    testListFmtUnitStylesiLKNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "si-LK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["එක"]), "එක");
        test.done();
    },
    
    testListFmtUnitStylesiLKNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "si-LK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["එක", "දෙක"]), "එක සහ දෙක");
        test.done();
    },
    
    testListFmtUnitStylesiLKNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "si-LK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["එක", "දෙක", "තුන්"]), "එක, දෙක, සහ තුන්");
        test.done();
    },
    
    testListFmtUnitStylesiLKNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "si-LK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["එක", "දෙක", "තුන්", "සිව්"]), "එක, දෙක, තුන්, සහ සිව්");
        test.done();
    }
};
