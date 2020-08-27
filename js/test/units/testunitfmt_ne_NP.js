/*
 * testunitfmt_ne_NP.js - test the unitfmt for ne-NP
 *
 * Copyright © 2020 JEDLSoft
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

if (typeof(UnitFmt) === "undefined") {
    var UnitFmt = require("../../lib/UnitFmt.js");
}
if (typeof(Measurement) === "undefined") {
    var Measurement = require("../../lib/Measurement.js");
}

if (typeof(MeasurementFactory) === "undefined") {
    var MeasurementFactory = require("../../lib/MeasurementFactory.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testunitfmt_ne_NP = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testUnitFormatGetLocale_ne_NP: function(test) {
        test.expect(2);
        var uf = new UnitFmt({
            locale: "ne-NP"
        });
        test.ok(uf.getLocale());
        test.equal(uf.getLocale().getSpec(), "ne-NP");
        test.done();
    },
    testGetMeasurementSystem_ne_NP: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("ne-NP"), "metric");
        test.done();
    },
    testUnitFormatTemperature1_ne_NP: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ne-NP",
            length: "short",
            autoConvert: true,
            maxFractionDigits: 2,
            roundingMode: "down",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str,'-16.66°से');
        test.done();
    },
    testUnitFormatTemperature2_ne_NP: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ne-NP",
            autoConvert: true,
            autoScale: true,
            length: "long",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '-16.666666666666668 डिग्री सेल्सियस्');
        test.done();
    },

    testUnitFormatArea1_ne_NP: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ne-NP", 
            autoConvert:true,
            length:"short",
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '2वर्ग सेन्टिमिटर');
        test.done();
    },
    testUnitFormatArea2_ne_NP: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ne-NP", 
            autoConvert: true,
            length: "long",
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '2वर्ग सेन्टिमिटर');
        test.done();
    },
    testUnitFormatArea3_ne_NP: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 1000
        });

        var uf = new UnitFmt({
            locale: "ne-NP", 
            autoConvert: true,
            length: "short",
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '10वर्ग किलोमिटर');
        test.done();
    },
    testUnitFormatArea4_ne_NP: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 1000
        });

        var uf = new UnitFmt({
            locale: "ne-NP", 
            autoConvert: true,
            length: "long",
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '10वर्ग किलोमिटर');
        test.done();
    },
    testUnitFormatFuelConsumption1_ne_NP: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ne-NP",
            autoConvert: true,
            length: "short",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '2कि.मि. प्रति लिटर');
        test.done();
    },
    testUnitFormatFuelConsumption2_ne_NP: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ne-NP",
            autoConvert: true,
            length: "long",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '2किलोमिटरप्रति लिटर');
        test.done();
    },
    testUnitFormatLength1_ne_NP: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 2000
        });

        var uf = new UnitFmt({
            locale: "ne-NP",
            autoConvert: true,
            length: "short",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '2कि.मि.');
        test.done();
    },
    testUnitFormatLength2_ne_NP: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 2000
        });

        var uf = new UnitFmt({
            locale: "ne-NP",
            autoConvert: true,
            length: "long",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '2किलोमिटर');
        test.done();
    },
    testUnitFormatWithUsageVehicleDistance1_ne_NP: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            locale: "ne-NP",
            usage: "vehicleDistance",
            length: "short",
            autoConvert: true,
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '10कि.मि.');
        test.done();
    },
    testUnitFormatWithUsageVehicleDistance2_ne_NP: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            locale: "ne-NP",
            usage: "vehicleDistance",
            length: "long",
            autoConvert: true,
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '10किलोमिटर');
        test.done();
    },
    testUnitFormatWithUsageFuelVolume1_ne_NP: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gallon",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ne-NP",
            usage: "fuelVolume",
            length: "short",
            autoConvert: true,
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '7.57 लि.');
        test.done();
    },
    testUnitFormatWithUsageFuelVolume2_ne_NP: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gallon",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ne-NP",
            usage: "fuelVolume",
            length: "long",
            autoConvert: true,
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '7.57 लिटर');
        test.done();
    },
    testUnitFormatWithUsageOverrideSignificantDigits_ne_NP: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kWh",
            amount: 102.338322234
        });

        var uf = new UnitFmt({
            locale: "ne-NP",
            usage: "electricalEnergy",
            length: "long",
            significantDigits: "6",
            autoConvert: true,
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '102.338किलोवाट-घण्टा');
        test.done();
    }
}