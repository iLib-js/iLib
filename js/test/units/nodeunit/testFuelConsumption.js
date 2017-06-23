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
    var FuelConsumptionUnit = require("../.././../lib/FuelConsumptionUnit.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testFuelConsumption = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testFuelConsumptionFuelConsumptionConstructor: function(test) {
    
        var m = new FuelConsumptionUnit({
            unit: "km/liter",
            amount: 2
        });
    
        test.expect(1);
        test.ok(m !== null);
        test.done();
    },
    
    testFuelConsumptionFuelConsumptionConvertKm2toMi2: function(test) {
        var m1 = new FuelConsumptionUnit({
            unit: "km/liter",
            amount:5000
        });
        var m2 = new FuelConsumptionUnit({
            unit: "liter/100km",
            amount: m1
        });
    
        test.expect(3);
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.roughlyEqual(0.1, m2.getAmount(), 0.02);
        test.done();
    },
    
    testFuelConsumptionStaticConvert1: function(test) {
        var m = FuelConsumptionUnit.convert("mpg","km/liter", 2.0);
        test.expect(1);
        test.roughlyEqual(0.01, m, 4.70429);
        test.done();
    },
    
    testFuelConsumptionStaticConvertWithString: function(test) {
        var m = FuelConsumptionUnit.convert("mpg(imp)","km/liter", 2.0);
    
        test.expect(1);
        test.equal(m, 5.64962);
        test.done();
    },
    
    testFuelConsumptionStaticConvert2: function(test) {
        var m = FuelConsumptionUnit.convert( "liter/100km","km/liter", 2.0);
    
        test.expect(1);
        test.equal(m, 50);
        test.done();
    },
    
    testFuelConsumptionStaticConvert3: function(test) {
        var m = FuelConsumptionUnit.convert("mpg", "liter/100km", 2.0);
    
        test.expect(1);
        test.roughlyEqual(0.01, m, 117.607);
        test.done();
    },
    
    testFuelConsumptionStaticConvert4: function(test) {
        var m = FuelConsumptionUnit.convert("km/liter", "liter/100km", 2.0);
    
        test.expect(1);
        test.equal(m, 50);
        test.done();
    },
    
    testFuelConsumptionStaticConvert5: function(test) {
        var m = FuelConsumptionUnit.convert("mpg(imp)", "liter/100km", 2.0);
    
        test.expect(1);
        test.roughlyEqual(0.001, m, 141.241);
        test.done();
    },
    
    testFuelConsumptionStaticConvert6: function(test) {
        var m = FuelConsumptionUnit.convert( "mpg","mpg(imp)", 2.0);
    
        test.expect(1);
        test.roughlyEqual(0.001, m, 1.66535);
        test.done();
    },
    testFuelConsumptionStaticConvert7: function(test) {
        var m = FuelConsumptionUnit.convert( "km/liter","mpg(imp)", 2.0);
    
        test.expect(1);
        test.roughlyEqual(0.01, m, 0.708012);
        test.done();
    },
    testFuelConsumptionStaticConvert8: function(test) {
        var m = FuelConsumptionUnit.convert( "liter/100km","mpg(imp)", 2.0);
    
        test.expect(1);
        test.roughlyEqual(0.01, m, 141.241);
        test.done();
    },
    
    testFuelConsumptionStaticConvert9: function(test) {
        var m = FuelConsumptionUnit.convert("km/liter", "mpg",2.0);
    
        test.expect(1);
        test.roughlyEqual(0.001, m, 0.850287);
        test.done();
    },
    
    
    testFuelConsumptionStaticConvert10: function(test) {
        var m = FuelConsumptionUnit.convert("mpg(imp)", "mpg",2.0);
    
        test.expect(1);
        test.roughlyEqual(0.001, m, 2.4019);
        test.done();
    },
    
    testFuelConsumptionStaticConvert11: function(test) {
        var m = FuelConsumptionUnit.convert("liter/100km", "mpg",2.0);
    
        test.expect(1);
        test.roughlyEqual(0.001, m, 117.607);
        test.done();
    
    },
    
    testFuelConsumptionLocalize4: function(test) {
        var m = new FuelConsumptionUnit({
            unit: "mpg(imp)",
            amount: 1000
        });
    
        m = m.localize("en-US");
    
        test.expect(2);
        test.equal(m.amount, 832.674);
        test.equal(m.unit, "mpg");
        test.done();
    },
    
    testFuelConsumptionLocalize1: function(test) {
        var m = new FuelConsumptionUnit({
            unit: "km/liter",
            amount: 1000
        });
    
        m = m.localize("en-IN");
    
        test.expect(2);
        test.roughlyEqual(0.01, m.amount, 1000);
        test.equal(m.unit, "km/liter");
        test.done();
    },
    
    testFuelConsumptionLocalize2: function(test) {
        var m = new FuelConsumptionUnit({
            unit: "km/liter",
            amount: 1000
        });
    
        m = m.localize("en-US");
    
        test.expect(2);
        test.roughlyEqual(0.001, m.amount, 2352.15);
        test.equal(m.unit, "mpg");
        test.done();
    },
    
    testFuelConsumptionLocalize3: function(test) {
        var m = new FuelConsumptionUnit({
            unit: "km/liter",
            amount: 1000
        });
    
        m = m.localize("en-GB");
    
        test.expect(2);
        test.equal(m.amount, 2824.81);
        test.equal(m.unit, "mpg(imp)");
        test.done();
    },
    
    testFuelConsumptionLocalize5: function(test) {
        var m = new FuelConsumptionUnit({
            unit: "km/liter",
            amount: 1000
        });
    
        m = m.localize("en-GB");
    
        test.expect(2);
        test.roughlyEqual(0.001, m.amount, 2824.81);
        test.equal(m.unit, "mpg(imp)");
        test.done();
    },
    
    testFuelConsumptionGetMeasures: function(test) {
        var measures = FuelConsumptionUnit.getMeasures();
        var expected = [
            "liter/100km",
            "mpg",
            "mpg(imp)",
            "km/liter",
        ];
    
        test.expect(1);
        test.equalIgnoringOrder(measures, expected);
        test.done();
    }
    
};