/*
 * testlistfmt_te_IN.js - test the list formatter object
 *
 * Copyright © 2017, 2020 JEDLSoft
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
    var ListFmt = require("../../lib/ListFmt.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testlistfmt_te_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmtteINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "te-IN"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ఒకటి"]), "ఒకటి");
        test.done();
    },
    testListFmtteINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "te-IN"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ఒకటి", "రెండు"]), "ఒకటి మరియు రెండు");
        test.done();
    },
    testListFmtteINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "te-IN"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ఒకటి", "రెండు", "మూడు"]), "ఒకటి, రెండు మరియు మూడు");
        test.done();
    },
    testListFmtteINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "te-IN"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ఒకటి", "రెండు", "మూడు", "నాలుగు"]), "ఒకటి, రెండు, మూడు మరియు నాలుగు");
        test.done();
    },
    testListFmtUnitStyleteINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "te-IN",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ఒకటి"]), "ఒకటి");
        test.done();
    },
    testListFmtUnitStyleteINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "te-IN",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ఒకటి", "రెండు"]), "ఒకటి, రెండు");
        test.done();
    },
    testListFmtUnitStyleteINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "te-IN",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ఒకటి", "రెండు", "మూడు"]), "ఒకటి, రెండు, మూడు");
        test.done();
    },
    testListFmtUnitStyleteINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "te-IN",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ఒకటి", "రెండు", "మూడు", "నాలుగు"]), "ఒకటి, రెండు, మూడు, నాలుగు");
        test.done();
    }
};
