/*
 * testPower.js - test the Power object
 *
 * Copyright © 2019 JEDLSoft
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

if (typeof(PowerUnit) === "undefined") {
    var PowerUnit = require("../../lib/PowerUnit.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testpower = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testPowerPowerConstructor: function(test) {
        test.expect(1);
        var m = new PowerUnit({
            unit: "kW",
            amount: 2
        });

        test.ok(m !== null);
        test.done();
    },

    testPowerPowerConvertkWtoHP: function(test) {
        test.expect(3);
        var m1 = new PowerUnit({
            unit: "kW",
            amount: 2
        });
        var m2 = new PowerUnit({
            unit: "horsepower",
            amount: m1
        });

        test.ok(m1 !== null);
        test.ok(m2 !== null);

        test.roughlyEqual(m2.getAmount(), 2.68204, 1e-5);
        test.done();
    },
    
    testPowerStaticConvert1: function(test) {
        test.expect(1);
        var m = PowerUnit.convert("gW", "hp", 1);

        test.roughlyEqual(m, 7.45701033e-7, 1e-10);
        test.done();
    },

    testPowerStaticConvertWithString: function(test) {
        test.expect(1);
        var m = PowerUnit.convert("MW", "W", "1e6");

        test.equal(m, 1);
        test.done();
    },

    testPowerStaticConvert2: function(test) {
        test.expect(1);
        var m = PowerUnit.convert("mW", "kW", 1000);

        test.equal(m, 1);
        test.done();
    },

    testPowerStaticConvert3: function(test) {
        test.expect(1);
        var m = PowerUnit.convert("ft lb/h", "W", 1);

        test.roughlyEqual(m, 0.737562149277, 1e-8);
        test.done();
    },

    testPowerStaticConvert4: function(test) {
        test.expect(1);
        var m = PowerUnit.convert("hp", "btu/h", 1);

        test.roughlyEqual(m, 3.93014685e-4, 1e-7);
        test.done();
    },

    testPowerStaticConvert5: function(test) {
        test.expect(1);
        var m = PowerUnit.convert("kW", "HP", 1);

        test.roughlyEqual(m, 0.7457010335416, 1e-8);
        test.done();
    },

    testPowerStaticConvert6: function(test) {
        test.expect(1);
        var m = PowerUnit.convert("MW", "BTU/h", 1);

        test.equal(m, 2.93071e-6);
        test.done();
    },
/*
    testPowerScale1: function(test) {
        test.expect(2);
        var m1 = new PowerUnit({
            unit: "watt hour",
            amount: 10000
        });
        var m2 = m1.scale("metric");

        test.equal(m2.amount, 10);
        test.equal(m2.unit, "kilowatt-hour");
        test.done();
    },

    testPowerScale2: function(test) {
        test.expect(2);
        var m1 = new PowerUnit({
            unit: "kilowatt hour",
            amount: 1233453
        });
        var m2 = m1.scale("metric");

        test.equal(m2.amount, 1.233453);
        test.equal(m2.unit, "gigawatt-hour");
        test.done();
    },

    testPowerScale3: function(test) {
        test.expect(2);
        var m1 = new PowerUnit({
            unit: "milli joule",
            amount: 5254578
        });
        var m2 = m1.scale("metric");

        test.roughlyEqual(m2.amount, 1.459605, 0.000001);
        test.equal(m2.unit, "watt-hour");
        test.done();
    },

    testPowerScale4: function(test) {
        test.expect(2);
        var m1 = new PowerUnit({
            unit: "mega joule",
            amount: 5254578
        });
        var m2 = m1.scale("metric");

        test.roughlyEqual(m2.amount, 1.4596, 0.00001);
        test.equal(m2.unit, "gigawatt-hour");
        test.done();
    },

    testPowerGetMeasures: function(test) {
        test.expect(1);
        var measures = PowerUnit.getMeasures();
        var expected = [
            "millijoule",
            "joule",
            "BTU",
            "kilojoule",
            "watt-hour",
            "foodcalorie",
            "megajoule",
            "kilowatt-hour",
            "gigajoule",
            "megawatt-hour",
            "gigawatt-hour"

        ];
        test.equalIgnoringOrder(measures, expected);
        test.done();
    }
*/
};
