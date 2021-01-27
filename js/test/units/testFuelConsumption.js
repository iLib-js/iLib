/*
 * testfuelConsumption.js - test the fuelConsumption object
 *
 * Copyright © 2014-2015,2017, JEDLSoft
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

if (typeof(FuelConsumptionUnit) === "undefined") {
    var FuelConsumptionUnit = require("../../lib/FuelConsumptionUnit.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testFuelConsumption = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testFuelConsumptionFuelConsumptionConstructor: function(test) {
        test.expect(1);

        var m = new FuelConsumptionUnit({
            unit: "km/liter",
            amount: 2
        });

        test.ok(m !== null);
        test.done();
    },

    testFuelConsumptionFuelConsumptionConvertKmpltoLip100km: function(test) {
        test.expect(3);
        var m1 = new FuelConsumptionUnit({
            unit: "km/liter",
            amount:5000
        });
        var m2 = new FuelConsumptionUnit({
            unit: "liter/100km",
            amount: m1
        });

        test.ok(m1 !== null);
        test.ok(m2 !== null);

        test.roughlyEqual(m2.getAmount(), 0.02, 0.01);
        test.done();
    },

    testFuelConsumptionStaticConvert1: function(test) {
        test.expect(1);
        var m = FuelConsumptionUnit.convert("mpg","km/liter", 2.0);
        test.roughlyEqual(m, 4.70429, 0.01);
        test.done();
    },

    testFuelConsumptionStaticConvertWithString: function(test) {
        test.expect(1);
        var m = FuelConsumptionUnit.convert("mpg(imp)","km/liter", 2.0);

        test.equal(m, 5.64962);
        test.done();
    },

    testFuelConsumptionStaticConvert2: function(test) {
        test.expect(1);
        var m = FuelConsumptionUnit.convert( "liter/100km","km/liter", 2.0);

        test.equal(m, 50);
        test.done();
    },

    testFuelConsumptionStaticConvert3: function(test) {
        test.expect(1);
        var m = FuelConsumptionUnit.convert("mpg", "liter/100km", 2.0);

        test.roughlyEqual(m, 117.607, 0.01);
        test.done();
    },

    testFuelConsumptionStaticConvert4: function(test) {
        test.expect(1);
        var m = FuelConsumptionUnit.convert("km/liter", "liter/100km", 2.0);

        test.equal(m, 50);
        test.done();
    },

    testFuelConsumptionStaticConvert5: function(test) {
        test.expect(1);
        var m = FuelConsumptionUnit.convert("mpg(imp)", "liter/100km", 2.0);

        test.roughlyEqual(m, 141.241, 0.001);
        test.done();
    },

    testFuelConsumptionStaticConvert6: function(test) {
        test.expect(1);
        var m = FuelConsumptionUnit.convert( "mpg","mpg(imp)", 2.0);

        test.roughlyEqual(m, 1.66535, 0.001);
        test.done();
    },
    testFuelConsumptionStaticConvert7: function(test) {
        test.expect(1);
        var m = FuelConsumptionUnit.convert( "km/liter","mpg(imp)", 2.0);

        test.roughlyEqual(m, 0.708012, 0.01);
        test.done();
    },
    testFuelConsumptionStaticConvert8: function(test) {
        test.expect(1);
        var m = FuelConsumptionUnit.convert( "liter/100km","mpg(imp)", 2.0);

        test.roughlyEqual(m, 141.241, 0.01);
        test.done();
    },

    testFuelConsumptionStaticConvert9: function(test) {
        test.expect(1);
        var m = FuelConsumptionUnit.convert("km/liter", "mpg",2.0);

        test.roughlyEqual(m, 0.850287, 0.001);
        test.done();
    },


    testFuelConsumptionStaticConvert10: function(test) {
        test.expect(1);
        var m = FuelConsumptionUnit.convert("mpg(imp)", "mpg",2.0);

        test.roughlyEqual(m, 2.4019, 0.001);
        test.done();
    },

    testFuelConsumptionStaticConvert11: function(test) {
        test.expect(1);
        var m = FuelConsumptionUnit.convert("liter/100km", "mpg",2.0);

        test.roughlyEqual(m, 117.607, 0.001);
        test.done();

    },

    testFuelConsumptionLocalize4: function(test) {
        test.expect(2);
        var m = new FuelConsumptionUnit({
            unit: "mpg(imp)",
            amount: 1000
        });

        m = m.localize("en-US");

        test.equal(m.amount, 832.6741);
        test.equal(m.unit, "mile-per-gallon");
        test.done();
    },

    testFuelConsumptionLocalize1: function(test) {
        test.expect(2);
        var m = new FuelConsumptionUnit({
            unit: "km/liter",
            amount: 1000
        });

        m = m.localize("en-IN");

        test.roughlyEqual(m.amount, 1000, 0.01);
        test.equal(m.unit, "kilometer-per-liter");
        test.done();
    },

    testFuelConsumptionLocalize2: function(test) {
        test.expect(2);
        var m = new FuelConsumptionUnit({
            unit: "km/liter",
            amount: 1000
        });

        m = m.localize("en-US");

        test.roughlyEqual(m.amount, 2352.15, 0.001);
        test.equal(m.unit, "mile-per-gallon");
        test.done();
    },

    testFuelConsumptionLocalize3: function(test) {
        test.expect(2);
        var m = new FuelConsumptionUnit({
            unit: "km/liter",
            amount: 1000
        });

        m = m.localize("en-GB");

        test.equal(m.amount, 2824.81);
        test.equal(m.unit, "mile-per-gallon-imperial");
        test.done();
    },

    testFuelConsumptionLocalize5: function(test) {
        test.expect(2);
        var m = new FuelConsumptionUnit({
            unit: "km/liter",
            amount: 1000
        });

        m = m.localize("en-GB");

        test.roughlyEqual(m.amount, 2824.81, 0.001);
        test.equal(m.unit, "mile-per-gallon-imperial");
        test.done();
    },

    testFuelConsumptionGetMeasures: function(test) {
        test.expect(1);
        var measures = FuelConsumptionUnit.getMeasures();
        var expected = [
            "liter-per-100-kilometer",
            "mile-per-gallon",
            "mile-per-gallon-imperial",
            "kilometer-per-liter",
            "liter-per-kilometer"
        ];

        test.equalIgnoringOrder(measures, expected);
        test.done();
    }

};
