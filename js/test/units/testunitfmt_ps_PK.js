/*
 * testunitfmt_ps_PK.js - test the unitfmt for ps-PK
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

module.exports.testunitfmt_ps_PK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testUnitFormatGetLocale_ps_PK: function(test) {
        test.expect(2);
        var uf = new UnitFmt({
            locale: "ps-PK",
            useNative: false
        });
        test.ok(uf.getLocale());
        test.equal(uf.getLocale().getSpec(), "ps-PK");
        test.done();
    },
    testGetMeasurementSystem_ps_PK: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("ps-PK"), "metric");
        test.done();
    },
    testUnitFormatTemperature1_ps_PK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2,
            useNative: false
        });

        var uf = new UnitFmt({
            locale: "ps-PK",
            length: "short",
            autoConvert: true,
            maxFractionDigits: 2,
            roundingMode: "down",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '‎-‎16٫66°C');
        test.done();
    },
    testUnitFormatTemperature2_ps_PK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ps-PK",
            autoConvert: true,
            autoScale: true,
            length: "long",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '‎-‎16٫666666666666668 درجے سيلسيس');
        test.done();
    },

    testUnitFormatArea1_ps_PK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ps-PK", 
            autoConvert:true,
            length:"short",
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '2 cm²');
        test.done();
    },
    testUnitFormatArea2_ps_PK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ps-PK", 
            autoConvert: true,
            length: "long",
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '2 مربع سنتي متر');
        test.done();
    },
    testUnitFormatArea3_ps_PK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 1000
        });

        var uf = new UnitFmt({
            locale: "ps-PK", 
            autoConvert: true,
            length: "short",
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '10 km²');
        test.done();
    },
    testUnitFormatArea4_ps_PK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 1000
        });

        var uf = new UnitFmt({
            locale: "ps-PK", 
            autoConvert: true,
            length: "long",
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '10 مربع کيلو متره');
        test.done();
    },
    testUnitFormatFuelConsumption1_ps_PK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ps-PK",
            autoConvert: true,
            length: "short",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '2 km/L');
        test.done();
    },
    testUnitFormatFuelConsumption2_ps_PK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ps-PK",
            autoConvert: true,
            length: "long",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '2 کيلومتره في ليټر');
        test.done();
    },
    testUnitFormatLength1_ps_PK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 2000
        });

        var uf = new UnitFmt({
            locale: "ps-PK",
            autoConvert: true,
            length: "short",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '2 km');
        test.done();
    },
    testUnitFormatLength2_ps_PK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 2000
        });

        var uf = new UnitFmt({
            locale: "ps-PK",
            autoConvert: true,
            length: "long",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '2 کيلومتره');
        test.done();
    },
    testUnitFormatWithUsageVehicleDistance1_ps_PK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            locale: "ps-PK",
            usage: "vehicleDistance",
            length: "short",
            autoConvert: true,
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '10 km');
        test.done();
    },
    testUnitFormatWithUsageVehicleDistance2_ps_PK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            locale: "ps-PK",
            usage: "vehicleDistance",
            length: "long",
            autoConvert: true,
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '10 کيلومتره');
        test.done();
    },
    testUnitFormatWithUsageFuelVolume1_ps_PK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial gallon",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ps-PK",
            usage: "fuelVolume",
            length: "short",
            autoConvert: true,
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '9٫09 L');
        test.done();
    },
    testUnitFormatWithUsageFuelVolume2_ps_PK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial gallon",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "ps-PK",
            usage: "fuelVolume",
            length: "long",
            autoConvert: true,
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '9٫09 ليټرز');
        test.done();
    },
    testUnitFormatWithUsageOverrideSignificantDigits1_ps_PK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kWh",
            amount: 102.338322234
        });

        var uf = new UnitFmt({
            locale: "ps-PK",
            usage: "electricalEnergy",
            length: "short",
            significantDigits: "6",
            autoConvert: true,
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '102٫338 kWh');
        test.done();
    },
    testUnitFormatWithUsageOverrideSignificantDigits2_ps_PK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kWh",
            amount: 102.338322234
        });

        var uf = new UnitFmt({
            locale: "ps-PK",
            usage: "electricalEnergy",
            length: "long",
            significantDigits: "6",
            autoConvert: true,
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str,  '102٫338 کيلو واټ ساعته');
        test.done();
    }
}