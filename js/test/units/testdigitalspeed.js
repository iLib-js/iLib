/*
 * testdigitalspeed.js - test the digital speed object
 *
 * Copyright © 2018, JEDLSoft
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

if (typeof(DigitalSpeedUnit) === "undefined") {
    var DigitalSpeedUnit = require("../../lib/DigitalSpeedUnit.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testdigitalspeed = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDSDSConstructor: function(test) {
        test.expect(1);

        var m = new DigitalSpeedUnit({
            unit: "mbps",
            amount: 2
        });

        test.ok(m !== null);
        test.done();
    },
    testDSDSConvertKbToMb: function(test) {
        test.expect(3);
        var m1 = new DigitalSpeedUnit({
            unit: "kbps",
            amount: 102400
        });
        var m2 = new DigitalSpeedUnit({
            unit: "mbps",
            amount: m1
        });

        test.ok(m1 !== null);
        test.ok(m2 !== null);

        test.roughlyEqual(m2.getAmount(), 100, 1e-7);
        test.done();
    },
    testDSStaticConvert1: function(test) {
        test.expect(1);
        var m = DigitalSpeedUnit.convert("bit/s", "kilobits/s", 12024);

        test.roughlyEqual(m, 12312576, 0.01);
        test.done();
    },
    testDSStaticConvertWithString: function(test) {
        test.expect(1);
        var m = DigitalSpeedUnit.convert("gigabyte/s", "petabyte/s", "1");

        test.roughlyEqual(m, 1048576, 0.001);
        test.done();
    },
    testDSStaticConvert2: function(test) {
        test.expect(1);
        var m = DigitalSpeedUnit.convert("tBps", "gBps", 10240);

        test.roughlyEqual(m, 10, 1e-8);
        test.done();
    },
    testDSStaticConvert3: function(test) {
        test.expect(1);
        var m = DigitalSpeedUnit.convert("mbps", "byte/s", 1048576);

        test.roughlyEqual(m, 8, 1e-9);
        test.done();
    },
    testDSStaticConvert4: function(test) {
        test.expect(1);
        var m = DigitalSpeedUnit.convert("Pbps", "tbps", 1024);

        test.roughlyEqual(m, 1, 1e-9);
        test.done();
    },
    testDSStaticConvert5: function(test) {
        test.expect(1);
        var m = DigitalSpeedUnit.convert("megabyte/s", "byte/s", 10);

        test.roughlyEqual(m, 9.536743164e-6, 1e-15);
        test.done();
    },
    testDSStaticConvert6: function(test) {
        test.expect(1);
        var m = DigitalSpeedUnit.convert("megabyte/s", "megabyte/h", 10);

        test.roughlyEqual(m, 36000, 1e-15);
        test.done();
    },
    testDSStaticConvert7: function(test) {
        test.expect(1);
        var m = DigitalSpeedUnit.convert( "megabyte/h", "gigabit/s", 10);

        test.roughlyEqual(m, 4500000, 1e-15);
        test.done();
    },
    testDSStaticConvert8: function(test) {
        test.expect(1);
        var m = DigitalSpeedUnit.convert("byte/h", "gigabyte/h", 1);

        test.roughlyEqual(m, 1073741824, 1e-15);
        test.done();
    },
    testDSStaticConvert9: function(test) {
        test.expect(1);
        var m = DigitalSpeedUnit.convert("gigabyte/h", "kilobyte/h", 1);

        test.roughlyEqual(m, 9.536743164e-7, 1e-15);
        test.done();
    },
    testDSScale1: function(test) {
        test.expect(2);
        var m = new DigitalSpeedUnit({
            unit: "bit/s",
            amount: 1024
        });

        m = m.scale();

        test.equal(m.amount, 1);
        test.equal(m.unit, "kilobit-per-second");
        test.done();
    },
    testDSScale2: function(test) {
        test.expect(2);
        var m = new DigitalSpeedUnit({
            unit: "kilobit-per-second",
            amount: 0.125
        });

        m = m.scale();

        // stays in the bit system
        test.equal(m.amount, 128);
        test.equal(m.unit, "bit-per-second");
        test.done();
    },
    testDSScale3: function(test) {
        test.expect(2);
        var m = new DigitalSpeedUnit({
            unit: "bit-per-second",
            amount: 1048576000
        });

        m = m.scale();

        // stays in the bit system
        test.roughlyEqual(m.amount, 1000, 0.1);
        test.equal(m.unit, "megabit-per-second");
        test.done();
    },
    testDSScale4: function(test) {
        test.expect(2);
        var m = new DigitalSpeedUnit({
            unit: "kilobit/s",
            amount: 10000000
        });

        m = m.scale();

        test.roughlyEqual(m.amount, 9.536743163, 0.001);
        test.equal(m.unit, "gigabit-per-second");
        test.done();
    },
    testDSScale5: function(test) {
        test.expect(2);
        var m = new DigitalSpeedUnit({
            unit: "petabyte/s",
            amount: 9.3132e-8
        });

        m = m.scale();

        test.roughlyEqual(m.amount, 100, 0.001);
        test.equal(m.unit, "megabyte-per-second");
        test.done();
    },
    testDSScale6: function(test) {
        test.expect(2);
        var m = new DigitalSpeedUnit({
            unit: "MBps",
            amount: 100
        });

        m = m.scale();

        test.equal(m.amount, 100);
        test.equal(m.unit, "megabyte-per-second");
        test.done();
    },
    testDSScale7: function(test) {
        test.expect(2);
        // This test case is the most likely scenario. That is, the OS will
        // give you bytes, and it is up to the autoscaler to scale to the
        // right size
        var m = new DigitalSpeedUnit({
            unit: "byte/s",
            amount: 1200
        });

        m = m.scale();

        test.equal(m.amount, 1.171875);
        test.equal(m.unit, "kilobyte-per-second");
        test.done();
    },
    testDSScale8: function(test) {
        test.expect(2);
        // This test case is the most likely scenario. That is, the OS will
        // give you bytes, and it is up to the autoscaler to scale to the
        // right size
        var m = new DigitalSpeedUnit({
            unit: "byte/s",
            amount: 123456789
        });

        m = m.scale();

        test.roughlyEqual(m.amount, 117.73756885528564, 0.000000001);
        test.equal(m.unit, "megabyte-per-second");
        test.done();
    },
    testDSScaleScaleDown: function(test) {
        test.expect(2);
        var m = new DigitalSpeedUnit({
            unit: "megabyte-per-second",
            amount: 0.002
        });

        m = m.scale();

        test.equal(m.amount, 2.048);
        test.equal(m.unit, "kilobyte-per-second");
        test.done();
    },
    testDSScaleNoScale: function(test) {
        test.expect(2);
        var m = new DigitalSpeedUnit({
            unit: "byte/s",
            amount: 123
        });

        m = m.scale();

        test.equal(m.amount, 123);
        test.equal(m.unit, "byte-per-second");
        test.done();
    },
    testDSaLocalize1: function(test) {
        test.expect(2);
        var m = new DigitalSpeedUnit({
            unit: "petaByte/s",
            amount: 1000
        });

        m = m.localize("en-IN");

        test.roughlyEqual(m.amount, 1000, 0.01);
        test.equal(m.unit, "petabyte-per-second");
        test.done();
    },
    testDSLocalize2: function(test) {
        test.expect(2);
        var m = new DigitalSpeedUnit({
            unit: "Kilobit/s",
            amount: 1000
        });

        m = m.localize("en-US");

        test.roughlyEqual(m.amount, 1000, 0.001);
        test.equal(m.unit, "kilobit-per-second");
        test.done();
    },
    testDSLocalize3: function(test) {
        test.expect(2);
        var m = new DigitalSpeedUnit({
            unit: "Mbps",
            amount: 1000
        });

        m = m.localize("en-US");

        test.roughlyEqual(m.amount, 1000, 0.001);
        test.equal(m.unit, "megabit-per-second");
        test.done();
    },
    testDSGetMeasures: function(test) {
        test.expect(1);
        var measures = DigitalSpeedUnit.getMeasures();
        var expected = [
            "bit-per-second",
            "byte-per-second",
            "kilobit-per-second",
            "kilobyte-per-second",
            "megabit-per-second",
            "megabyte-per-second",
            "gigabit-per-second",
            "gigabyte-per-second",
            "terabit-per-second",
            "terabyte-per-second",
            "petabit-per-second",
            "petabyte-per-second",
            "byte-per-hour",
            "kilobyte-per-hour",
            "megabyte-per-hour",
            "gigabyte-per-hour",
            "terabyte-per-hour",
            "petabyte-per-hour"
        ];

        test.equalIgnoringOrder(measures, expected);
        test.done();
    }
};
