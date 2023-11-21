/*
 * testSpeeds.js - test the Speed object
 *
 * Copyright © 2014-2015,2017, 2021 JEDLSoft
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

if (typeof(VelocityUnit) === "undefined") {
    var VelocityUnit = require("../../lib/VelocityUnit.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testspeeds = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testSpeedSpeedConstructor: function(test) {
        test.expect(1);
        var m = new VelocityUnit({
            unit: "meters/sec",
            amount: 2
        });

        test.ok(m !== null);
        test.done();
    },
    testSpeedSpeedConvertMetersPerSecToMilesPerHour: function(test) {
        test.expect(3);
        var m1 = new VelocityUnit({
            unit: "meters/sec",
            amount: 5000
        });
        var m2 = new VelocityUnit({
            unit: "miles/hour",
            amount: m1
        });

        test.ok(m1 !== null);
        test.ok(m2 !== null);

        test.equal(m2.getAmount(), 11184.68);
        test.done();
    },
    testSpeedStaticConvert1: function(test) {
        test.expect(1);
        var m = VelocityUnit.convert("feet/sec", "meters/sec", 2.0);

        test.equal(m, 6.56168);
        test.done();
    },
    testSpeedStaticConvertWithString: function(test) {
        test.expect(1);
        var m = VelocityUnit.convert("feet/sec", "meters/sec", "2");

        test.equal(m, 6.56168);
        test.done();
    },
    testSpeedStaticConvert2: function(test) {
        test.expect(1);
        var m = VelocityUnit.convert("meters/sec", "km/hour", 720);

        test.roughlyEqual(m, 200.00016, 0.00001);
        test.done();
    },
    testSpeedStaticConvert3: function(test) {
        test.expect(1);
        var m = VelocityUnit.convert("mile/hour", "knot", 200);

        test.roughlyEqual(m, 230.156, 0.001);
        test.done();
    },
    testSpeedStaticConvert4: function(test) {
        test.expect(1);
        var m = VelocityUnit.convert("kn", "feet/sec", 200.0);

        test.roughlyEqual(m, 118.4968, 0.0001);
        test.done();
    },
    testSpeedScale1: function(test) {
        test.expect(2);
        var m = new VelocityUnit({
            unit: "m/sec",
            amount: 0.277778
        });

        m = m.scale("metric");

        test.roughlyEqual(m.amount, 1, 0.1);
        test.equal(m.unit, "kilometer-per-hour");
        test.done();
    },
    testSpeedScale2: function(test) {
        test.expect(2);
        var m = new VelocityUnit({
            unit: "feet/sec",
            amount: 60
        });

        m = m.scale("imperial");

        test.roughlyEqual(m.amount, 35.54904, 0.0001);
        test.equal(m.unit, "knot");
        test.done();
    },
    testSpeedScale3: function(test) {
        test.expect(2);
        var m = new VelocityUnit({
            unit: "feet/sec",
            amount: 1000
        });

        m = m.scale("imperial");

        test.roughlyEqual(m.amount, 592.484, 0.001);
        test.equal(m.unit, "knot");
        test.done();
    },
    testSpeedScale4: function(test) {
        test.expect(2);
        var m = new VelocityUnit({
            unit: "feet/sec",
            amount: 1000
        });

        m = m.scale("imperial");

        test.roughlyEqual(m.amount, 592.484, 0.001);
        test.equal(m.unit, "knot");
        test.done();
    },
    testSpeedLocalize1: function(test) {
        test.expect(2);
        var m = new VelocityUnit({
            unit: "miles/hour",
            amount: 1000
        });

        m = m.localize("en-IN");

        test.roughlyEqual(m.amount, 1609.34, 0.01);
        test.equal(m.unit, "kilometer-per-hour");
        test.done();
    },
    testSpeedLocalize2: function(test) {
        test.expect(2);
        var m = new VelocityUnit({
            unit: "kilometer/hour",
            amount: 1000
        });

        m = m.localize("en-US");

        test.roughlyEqual(m.amount, 621.371, 0.001);
        test.equal(m.unit, "mile-per-hour");
        test.done();
    },
    testSpeedLocalize3: function(test) {
        test.expect(2);
        var m = new VelocityUnit({
            unit: "miles/hour",
            amount: 1000
        });

        m = m.localize("en-GB");

        test.equal(m.amount, 1609.34);
        test.equal(m.unit, "kilometer-per-hour");
        test.done();
    },
    testSpeedGetMeasures: function(test) {
        test.expect(1);
        var measures = VelocityUnit.getMeasures();
        var expected = [
            "kilometer-per-hour",
            "foot-per-second",
            "mile-per-hour",
            "knot",
            "meter-per-second",
            "kilometer-per-second",
            "mile-per-second"
        ];
        test.equalIgnoringOrder(measures, expected);
        test.done();
    }
};