/*
 * testPressure.js - test the Pressure object
 *
 * Copyright © 2021-2022 JEDLSoft
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

if (typeof(PressureUnit) === "undefined") {
    var PressureUnit = require("../../lib/PressureUnit.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testpressure = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testPressurePressureConstructor: function(test) {
        test.expect(1);
        var m = new PressureUnit({
            unit: "kPa",
            amount: 2
        });

        test.ok(m !== null);
        test.done();
    },

    testPressurePressureConvertkWtoHP: function(test) {
        test.expect(3);
        var m1 = new PressureUnit({
            unit: "kPa",
            amount: 2
        });
        var m2 = new PressureUnit({
            unit: "psi",
            amount: m1
        });

        test.ok(m1 !== null);
        test.ok(m2 !== null);

        test.roughlyEqual(m2.getAmount(), 0.290075, 1e-6);
        test.done();
    },

    testPressureStaticConvert1: function(test) {
        test.expect(1);
        var m = PressureUnit.convert("psi", "Pa", 1);

        test.roughlyEqual(m, 1.45038e-4, 1e-10);
        test.done();
    },

    testPressureStaticConvertWithString: function(test) {
        test.expect(1);
        var m = PressureUnit.convert("MPa", "Pa", "1e6");

        test.equal(m, 1);
        test.done();
    },

    testPressureStaticConvert2: function(test) {
        test.expect(1);
        var m = PressureUnit.convert("bar", "kPa", 1000);

        test.equal(m, 10);
        test.done();
    },

    testPressureStaticConvert3: function(test) {
        test.expect(1);
        var m = PressureUnit.convert("psi", "torr", 1);

        test.roughlyEqual(m, 1.93368e-2, 1e-5);
        test.done();
    },

    testPressureStaticConvert4: function(test) {
        test.expect(1);
        var m = PressureUnit.convert("pound-per-square-inch", "atmosphere", 1);

        test.roughlyEqual(m, 14.69594877, 1e-7);
        test.done();
    },

    testPressureScale1: function(test) {
        test.expect(2);
        var m1 = new PressureUnit({
            unit: "millipascal",
            amount: 430000
        });
        var m2 = m1.scale("metric");

        test.roughlyEqual(m2.amount, 4.3, 1e-8);
        test.equal(m2.unit, "hectopascal");
        test.done();
    },


    testPressureScale2: function(test) {
        test.expect(2);
        var m1 = new PressureUnit({
            unit: "millibar",
            amount: 0.0001
        });
        var m2 = m1.scale("metric");

        test.equal(m2.amount, 10);
        test.equal(m2.unit, "millipascal");
        test.done();
    },

/*
    testPressureScale3: function(test) {
        test.expect(2);
        var m1 = new PressureUnit({
            unit: "milli joule",
            amount: 5254578
        });
        var m2 = m1.scale("metric");

        test.roughlyEqual(m2.amount, 1.459605, 0.000001);
        test.equal(m2.unit, "watt-hour");
        test.done();
    },

    testPressureScale4: function(test) {
        test.expect(2);
        var m1 = new PressureUnit({
            unit: "mega joule",
            amount: 5254578
        });
        var m2 = m1.scale("metric");

        test.roughlyEqual(m2.amount, 1.4596, 0.00001);
        test.equal(m2.unit, "gigawatt-hour");
        test.done();
    },
*/
    testPressureGetMeasures: function(test) {
        test.expect(1);
        var measures = PressureUnit.getMeasures();
        var expected = [
            "millipascal",
            "pascal",
            "hectopascal",
            "millibar",
            "kilopascal",
            "bar",
            "megapascal",
            "gigapascal",
            "atmosphere",
            "torr",
            "pound-per-square-inch"
        ];
        test.equalIgnoringOrder(measures, expected);
        test.done();
    }
};
