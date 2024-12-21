/*
 * testlistfmt_am_ET.js - test the list formatter object
 *
 * Copyright © 2017, 2020, 2024 JEDLSoft
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

module.exports.testlistfmt_am_ET = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmtamETNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "am-ET"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["አንድ"]), "አንድ");
        test.done();
    },
    testListFmtamETNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "am-ET"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["አንድ", "ሁለት"]), "አንድ እና ሁለት");
        test.done();
    },
    testListFmtamETNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "am-ET"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["አንድ", "ሁለት", "ሶስት"]), 'አንድ፣ ሁለት እና ሶስት');
        test.done();
    },
    testListFmtamETNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "am-ET"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["አንድ", "ሁለት", "ሶስት", "አራት"]), 'አንድ፣ ሁለት፣ ሶስት እና አራት');
        test.done();
    },
    testListFmtUnitStyleamETNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "am-ET",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["አንድ"]), "አንድ");
        test.done();
    },
    testListFmtUnitStyleamETNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "am-ET",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["አንድ", "ሁለት"]), 'አንድ እና ሁለት');
        test.done();
    },
    testListFmtUnitStyleamETNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "am-ET",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["አንድ", "ሁለት", "ሶስት"]), 'አንድ፣ ሁለት እና ሶስት');
        test.done();
    },
    testListFmtUnitStyleamETNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "am-ET",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["አንድ", "ሁለት", "ሶስት", "አራት"]), 'አንድ፣ ሁለት፣ ሶስት እና አራት');
        test.done();
    }
};
