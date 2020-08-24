/*
 * testunitfmt_hy_AM.js - test the unitfmt for hy-AM
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

module.exports.testunitfmt_hy_AM = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testUnitFormatGetLocale_hy_AM: function(test) {
        test.expect(2);
        var uf = new UnitFmt({
            locale: "hy-AM"
        });
        test.ok(uf.getLocale());
        test.equal(uf.getLocale().getSpec(), "hy-AM");
        test.done();
    },
    testGetMeasurementSystem_hy_AM: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("hy-AM"), "metric");
        test.done();
    },
    testUnitFormatTemperature1_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "hy-AM",
            length: "short",
            autoConvert: true,
            maxFractionDigits: 2,
            roundingMode: "down"
        });
        var str = uf.format(m1);
        test.equal(str, "-16,66 °C");
        test.done();
    },
    testUnitFormatTemperature2_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "hy-AM",
            autoConvert: true,
            autoScale: true,
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "-16,666666666666668 աստիճան ըստ Ցելսիուսի");
        test.done();
    },

    testUnitFormatArea1_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "hy-AM", 
            autoConvert:true,
            length:"short"
        });

        var str = uf.format(m1);
        test.equal(str, "2 սմ²");
        test.done();
    },
    testUnitFormatArea2_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "hy-AM", 
            autoConvert: true,
            length: "long"
        });

        var str = uf.format(m1);
        test.equal(str, "2 քառակուսի սանտիմետր");
        test.done();
    },
    testUnitFormatArea3_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 1000
        });

        var uf = new UnitFmt({
            locale: "hy-AM", 
            autoConvert: true,
            length: "short"
        });

        var str = uf.format(m1);
        test.equal(str, "10 կմ²");
        test.done();
    },
    testUnitFormatArea4_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 1000
        });

        var uf = new UnitFmt({
            locale: "hy-AM", 
            autoConvert: true,
            length: "long"
        });

        var str = uf.format(m1);
        test.equal(str, "10 քառակուսի կիլոմետր");
        test.done();
    },
    testUnitFormatFuelConsumption1_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "hy-AM",
            autoConvert: true,
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "2 կմ/լ");
        test.done();
    },
    testUnitFormatFuelConsumption2_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "hy-AM",
            autoConvert: true,
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "2 կիլոմետր լիտրի վրա");
        test.done();
    },
    testUnitFormatLength1_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "inch",
            amount: 32
        });

        var uf = new UnitFmt({
            locale: "hy-AM",
            autoConvert: true,
            length: "short",
            maxFractionDigits: 2,
            roundingMode: "half"
        });
        var str = uf.format(m1);
        test.equal(str, "8,13 դմ");
        test.done();
    },
    testUnitFormatLength2_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "inch",
            amount: 32
        });

        var uf = new UnitFmt({
            locale: "hy-AM",
            autoConvert: true,
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "8,12799552 դեցիմետր");
        test.done();
    },
    testUnitFormatLength3_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 2000
        });

        var uf = new UnitFmt({
            locale: "hy-AM",
            autoConvert: true,
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "2 կմ");
        test.done();
    },
    testUnitFormatLength4_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 2000
        });

        var uf = new UnitFmt({
            locale: "hy-AM",
            autoConvert: true,
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "2 կիլոմետր");
        test.done();
    },
    testUnitFormatWithUsageVehicleDistance1_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            locale: "hy-AM",
            usage: "vehicleDistance",
            length: "short",
            autoConvert: true,
        });
        var str = uf.format(m1);
        test.equal(str, "10 կմ");
        test.done();
    },
    testUnitFormatWithUsageVehicleDistance2_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            locale: "hy-AM",
            usage: "vehicleDistance",
            length: "long",
            autoConvert: true
        });
        var str = uf.format(m1);
        test.equal(str, "10 կիլոմետր");
        test.done();
    },
    testUnitFormatWithUsageFuelVolume1_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial gallon",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "hy-AM",
            usage: "fuelVolume",
            length: "short",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "9,09 լ");
        test.done();
    },
    testUnitFormatWithUsageFuelVolume2_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial gallon",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "hy-AM",
            usage: "fuelVolume",
            length: "long",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "9,09 լիտր");
        test.done();
    },
    testUnitFormatWithUsageOverrideSignificantDigits1_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kWh",
            amount: 102.338322234
        });

        var uf = new UnitFmt({
            locale: "hy-AM",
            usage: "electricalEnergy",
            length: "short",
            significantDigits: "6",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "102,338 կՎտ·ժ");
        test.done();
    },
    testUnitFormatWithUsageOverrideSignificantDigits2_hy_AM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kWh",
            amount: 102.338322234
        });

        var uf = new UnitFmt({
            locale: "hy-AM",
            usage: "electricalEnergy",
            length: "long",
            significantDigits: "6",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "102,338 կիլովատտ-ժամ");
        test.done();
    }
}