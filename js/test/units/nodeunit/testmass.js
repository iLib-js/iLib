/*
 * testMasss.js - test the Mass object
 *
 * Copyright © 2014-2015,2017-2018 JEDLSoft
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

if (typeof(MassUnit) === "undefined") {
    var MassUnit = require("../../../lib/MassUnit.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testmass = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testMassMassConstructor: function(test) {
        test.expect(1);
        var m = new MassUnit({
            unit: "kg",
            amount: 2
        });

        test.ok(m !== null);
        test.done();
    },

    testMassMassConvertGramToKG: function(test) {
        test.expect(3);
        var m1 = new MassUnit({
            unit: "g",
            amount: 3000
        });
        var m2 = new MassUnit({
            unit: "kg",
            amount: m1
        });

        test.ok(m1 !== null);
        test.ok(m2 !== null);

        test.equal(m2.getAmount(), 3);
        test.done();
    },

    testMassStaticConvert1: function(test) {
        test.expect(1);
        var m = MassUnit.convert("long ton", "kg", 10000);

        test.roughlyEqual(m, 9.842065, 0.00001);
        test.done();
    },

    testMassStaticConvertWithString: function(test) {
        test.expect(1);
        var m = MassUnit.convert("tonne", "pound", "1000");

        test.equal(m, 0.453592);
        test.done();
    },

    testMassStaticConvert2: function(test) {
        test.expect(1);
        var m = MassUnit.convert("short ton", "ounce", 10000);

        test.equal(m, 0.3125);
        test.done();
    },

    testMassStaticConvert3: function(test) {
        test.expect(1);
        var m = MassUnit.convert("st", "gram", 10000);

        test.equal(m, 1.57473);
        test.done();
    },

    testMassStaticConvert4: function(test) {
        test.expect(1);
        var m = MassUnit.convert("kg", "mg", 1000000);

        test.equal(m, 1);
        test.done();
    },

    testMassStaticConvert5: function(test) {
        test.expect(1);
        var m = MassUnit.convert("lb", "mcg", 1000000000);

        test.roughlyEqual(m, 2.20462, 0.0001);
        test.done();
    },

    testMassScale1: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "mcg",
            amount: 10000000
        });

        m = m.scale("metric");

        test.equal(m.amount, 10);
        test.equal(m.unit, "gram");
        test.done();
    },

    testMassScale2: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "g",
            amount: 0.00001
        });

        m = m.scale("metric");

        test.equal(m.amount, 10);
        test.equal(m.unit, "microgram");
        test.done();
    },

    testMassScale3: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "mg",
            amount: 1000000
        });

        m = m.scale("metric");

        test.equal(m.amount, 1);
        test.equal(m.unit, "kilogram");
        test.done();
    },

    testMassScale4: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "t",
            amount: 0.0001
        });

        m = m.scale("metric");

        test.equal(m.amount, 100);
        test.equal(m.unit, "gram");
        test.done();
    },

    testMassScale5: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "oz",
            amount: 1000
        });

        m = m.scale("imperial");

        test.roughlyEqual(m.amount, 4.46429, 0.00001);
        test.equal(m.unit, "stone");
        test.done();
    },

    testMassScale6: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "st",
            amount: 0.1
        });

        m = m.scale("imperial");

        test.roughlyEqual(m.amount, 1.4, 0.01);
        test.equal(m.unit, "pound");
        test.done();
    },

    testMassScale7: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "oz",
            amount: 500000
        });

        m = m.scale("imperial");

        test.roughlyEqual(m.amount, 13.9508929, 0.001);
        test.equal(m.unit, "long-ton");
        test.done();
    },

    testMassScale8: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "lb",
            amount: 10
        });

        m = m.scale("imperial");

        test.equal(m.amount, 10);
        test.equal(m.unit, "pound");
        test.done();
    },

    testMassScale9: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "oz",
            amount: 100000
        });

        m = m.scale("uscustomary");

        test.roughlyEqual(m.amount, 3.125, 0.001);
        test.equal(m.unit, "short-ton");
        test.done();
    },

    testMassScale10: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "short ton",
            amount: 0.001
        });

        m = m.scale("uscustomary");

        test.roughlyEqual(m.amount, 2, 0.001);
        test.equal(m.unit, "pound");
        test.done();
    },

    testMassLocalize1: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "ounce",
            amount: 1000
        });

        m = m.localize("en-IN");

        test.roughlyEqual(m.amount, 28349.5, 0.01);
        test.equal(m.unit, "gram");
        test.done();
    },

    testMassLocalize2: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "gram",
            amount: 1000
        });

        m = m.localize("en-US");

        test.roughlyEqual(m.amount, 35.274, 0.001);
        test.equal(m.unit, "ounce");
        test.done();
    },

    testMassLocalize3: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "long ton",
            amount: 1000
        });

        m = m.localize("en-GB"); // no change -- long tons are imperial units

        test.equal(m.amount, 1000);
        test.equal(m.unit, "long-ton");
        test.done();
    },

    testMassLocalize4: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "short ton",
            amount: 1000
        });

        m = m.localize("en-GB");

        test.equal(m.amount, 892.857);
        test.equal(m.unit, "long-ton");
        test.done();
    },

    testMassLocalize5: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "metric ton",
            amount: 1000
        });

        m = m.localize("en-GB");

        test.roughlyEqual(m.amount, 984.207, 0.001);
        test.equal(m.unit, "long-ton");
        test.done();
    },

    testMassAliases1: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "lbs",
            amount: 1000
        });

        test.ok(m);
        test.equal(m.unit, "pound");
        test.done();
    },

    testMassAliases2: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "lb",
            amount: 1000
        });

        test.ok(m);
        test.equal(m.unit, "pound");
        test.done();
    },

    testMassAliases3: function(test) {
        test.expect(2);
        var m = new MassUnit({
            unit: "pound",
            amount: 1000
        });

        test.ok(m);
        test.equal(m.unit, "pound");
        test.done();
    },

    testMassGetMeasures: function(test) {
        test.expect(1);
        var measures = MassUnit.getMeasures();
        var expected = [
            "microgram",
            "milligram",
            "gram",
            "ounce",
            "pound",
            "kilogram",
            "stone",
            "short-ton",
            "metric-ton",
            "long-ton"
        ];
        test.equalIgnoringOrder(measures, expected);
        test.done();
    }

};
