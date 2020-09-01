/*
 * testlistfmt_ne_NP.js - test the list formatter object
 *
 * Copyright © 2020, JEDLSoft
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

module.exports.testlistfmt_ne_NP = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmtneNPNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक"]), "एक");
        test.done();
    },
    testListFmtneNPNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "एक"]),'एक र एक' );
        test.done();
    },
    testListFmtneNPNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दुई", "तीन"]), 'एक,दुई र तीन');
        test.done();
    },
    testListFmtneNPNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दुई", "तीन", "चार"]), 'एक,दुई, तीन र चार');
        test.done();
    },
    testListFmtneNPNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दुई", "तीन", "चार", "पाँच"]), 'एक,दुई, तीन, चार र पाँच');
        test.done();
    },
    testListFmtUnitStyleneNPNumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक"]), "एक");
        test.done();
    },
    testListFmtUnitStyleneNPNumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दुई"]), 'एक दुई');
        test.done();
    },
    testListFmtUnitStyleneNPNumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दुई", "तीन"]), 'एक,दुई,तीन');
        test.done();
    },
    testListFmtUnitStyleneNPNumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दुई", "तीन", "चार"]), 'एक,दुई, तीन,चार');
        test.done();
    },
    testListFmtUnitStyleneNPNumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दुई", "तीन", "चार", "पाँच"]), 'एक,दुई, तीन, चार,पाँच');
        test.done();
    },
    testListFmtUnitStyleneNPNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक"]), "एक");
        test.done();
    },
    testListFmtUnitStyleneNPNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दुई"]), 'एक,दुई');
        test.done();
    },
    testListFmtUnitStyleneNPNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दुई", "तीन"]), 'एक,दुई,तीन');
        test.done();
    },
    testListFmtUnitStyleneNPNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दुई", "तीन", "चार"]), 'एक,दुई, तीन,चार');
        test.done();
    },
    testListFmtUnitStyleneNPNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दुई", "तीन", "चार", "पाँच"]), 'एक,दुई, तीन, चार,पाँच');
        test.done();
    },
    testListFmtORStyleneNPNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक"]), "एक");
        test.done();
    },
    testListFmtORStyleneNPNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दुई"]), 'एक वा दुई');
        test.done();
    },
    testListFmtORStyleneNPNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दुई", "तीन"]), 'एक, दुई, वा तीन');
        test.done();
    },
    testListFmtORStyleneNPNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दुई", "तीन", "चार"]), 'एक, दुई, तीन, वा चार');
        test.done();
    },
    testListFmtORStyleneNPNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "ne-NP",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दुई", "तीन", "चार", "पाँच"]), 'एक, दुई, तीन, चार, वा पाँच');
        test.done();
    }
};