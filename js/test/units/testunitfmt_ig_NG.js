/*
 * testunitfmt_ig_NG.js - test the unitfmt for Igbo - Nigeria
 *
 * Copyright © 2022 JEDLSoft
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

module.exports.testunitfmt_ig_NG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testUnitFormatGetLocale_ig_NG: function(test) {
        test.expect(2);
        var uf = new UnitFmt({
            locale: "ig-NG"
        });
        test.ok(uf.getLocale());
        test.equal(uf.getLocale().getSpec(), "ig-NG");
        test.done();
    },
    testGetMeasurementSystem_ig_NG: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("ig-NG"), "metric");
        test.done();
    },
    testUnitFormatTemperature1_ig_NG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ig-NG",
            length: "short",
            autoConvert: true,
            maxFractionDigits: 2,
            roundingMode: "down"
        });
        var str = uf.format(m1);
        test.equal(str, "-16.66°C");
        test.done();
    },
    testUnitFormatTemperature2_ig_NG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ig-NG",
            autoConvert: true,
            autoScale: true,
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "-16.666666666666668°C");
        test.done();
    },
    testUnitFormatArea1_ig_NG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ig-NG",
            autoConvert:true,
            length:"short"
        });

        var str = uf.format(m1);
        test.equal(str, "2 cm²");
        test.done();
    },
    testUnitFormatArea2_ig_NG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ig-NG",
            autoConvert: true,
            length: "long"
        });

        var str = uf.format(m1);
        test.equal(str, "2 square sentimita");
        test.done();
    },
    testUnitFormatArea3_ig_NG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 1000
        });

        var uf = new UnitFmt({
            locale: "ig-NG",
            autoConvert: true,
            length: "short"
        });

        var str = uf.format(m1);
        test.equal(str, "10 km²");
        test.done();
    },
    testUnitFormatArea4_ig_NG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 1000
        });

        var uf = new UnitFmt({
            locale: "ig-NG",
            autoConvert: true,
            length: "long"
        });

        var str = uf.format(m1);
        test.equal(str, "10 square-kilomita");
        test.done();
    },
    testUnitFormatFuelConsumption1_ig_NG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ig-NG",
            autoConvert: true,
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "2 km/l");
        test.done();
    },
    testUnitFormatFuelConsumption2_ig_NG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ig-NG",
            autoConvert: true,
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "2 kilomita kwa lita");
        test.done();
    },
    testUnitFormatLength1_ig_NG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "mile",
            amount: 2000
        });

        var uf = new UnitFmt({
            locale: "ig-NG",
            autoConvert: true,
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "3.21868 Mm");
        test.done();
    },
    testUnitFormatLength2_ig_NG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "mile",
            amount: 2000
        });

        var uf = new UnitFmt({
            locale: "ig-NG",
            autoConvert: true,
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "3.21868 megameters");
        test.done();
    },
    testUnitFormatWithUsageVehicleDistance1_ig_NG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            locale: "ig-NG",
            usage: "vehicleDistance",
            length: "short",
            autoConvert: true,
        });
        var str = uf.format(m1);
        test.equal(str, "10 km");
        test.done();
    },
    testUnitFormatWithUsageVehicleDistance2_ig_NG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            locale: "ig-NG",
            usage: "vehicleDistance",
            length: "long",
            autoConvert: true
        });
        var str = uf.format(m1);
        test.equal(str, "10 kilomita");
        test.done();
    },
    testUnitFormatWithUsageFuelVolume1_ig_NG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial gallon",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ig-NG",
            usage: "fuelVolume",
            length: "short",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "9.09 l");
        test.done();
    },
    testUnitFormatWithUsageFuelVolume2_ig_NG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial gallon",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ig-NG",
            usage: "fuelVolume",
            length: "long",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "9.09 lita");
        test.done();
    },
    testUnitFormatWithUsageOverrideSignificantDigits1_ig_NG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kWh",
            amount: 102.338322234
        });

        var uf = new UnitFmt({
            locale: "ig-NG",
            usage: "electricalEnergy",
            length: "short",
            significantDigits: "6",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "102.338 kWh");
        test.done();
    },
    testUnitFormatWithUsageOverrideSignificantDigits2_ig_NG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kWh",
            amount: 102.338322234
        });

        var uf = new UnitFmt({
            locale: "ig-NG",
            usage: "electricalEnergy",
            length: "long",
            significantDigits: "6",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "102.338 kilowatt awa");
        test.done();
    }
}