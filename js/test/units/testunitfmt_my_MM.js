/*
 * testunitfmt_my_MM.js - test the unitfmt for my-MM
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

module.exports.testunitfmt_my_MM = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testUnitFormatGetLocale_my_MM: function(test) {
        test.expect(2);
        var uf = new UnitFmt({
            locale: "my-MM",
            useNative: false
        });
        test.ok(uf.getLocale());
        test.equal(uf.getLocale().getSpec(), "my-MM");
        test.done();
    },
    testGetMeasurementSystem_my_MM: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("my-MM"), "imperial");
        test.done();
    },
    testUnitFormatTemperature1_my_MM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "my-MM",
            length: "short",
            autoConvert: true,
            maxFractionDigits: 2,
            roundingMode: "down",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '2°F');
        test.done();
    },
    testUnitFormatTemperature2_my_MM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "my-MM",
            autoConvert: true,
            autoScale: true,
            length: "long",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '2 ဒီဂရီ ဖာရင်ဟိုက်');
        test.done();
    },

    testUnitFormatArea1_my_MM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square meter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "my-MM", 
            autoConvert:true,
            length:"short",
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '2.39198 yd²');
        test.done();
    },
    testUnitFormatArea2_my_MM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square inch",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "my-MM", 
            autoConvert: true,
            length: "long",
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '2 စတုရန်းလက်မ');
        test.done();
    },
    testUnitFormatArea3_my_MM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 1000
        });

        var uf = new UnitFmt({
            locale: "my-MM", 
            autoConvert: true,
            length: "short",
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '3.8610156250000003 mi²');
        test.done();
    },
    testUnitFormatArea4_my_MM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 1000
        });

        var uf = new UnitFmt({
            locale: "my-MM", 
            autoConvert: true,
            length: "long",
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '3.8610156250000003 စတုရန်းမိုင်');
        test.done();
    },
    testUnitFormatFuelConsumption1_my_MM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gallon",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "my-MM",
            autoConvert: true,
            length: "short",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '1.665348 ယူကဂေါလံ');
        test.done();
    },
    testUnitFormatFuelConsumption2_my_MM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gallon",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "my-MM",
            autoConvert: true,
            length: "long",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '1.665348 ယူကေ ဂါလံ');
        test.done();
    },
    testUnitFormatLength1_my_MM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "mile",
            amount: 20
        });

        var uf = new UnitFmt({
            locale: "my-MM",
            autoConvert: true,
            length: "long",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, "17.37952 ရေမိုင်");
        test.done();
    },
    testUnitFormatLength2_my_MM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 2000
        });

        var uf = new UnitFmt({
            locale: "my-MM",
            autoConvert: true,
            length: "long",
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '1.0799114411399997 ရေမိုင်');
        test.done();
    },
    testUnitFormatWithUsageVehicleDistance1_my_MM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            locale: "my-MM",
            usage: "vehicleDistance",
            length: "short",
            autoConvert: true,
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '6.21 မိုင်');
        test.done();
    },
    testUnitFormatWithUsageVehicleDistance2_my_MM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            locale: "my-MM",
            usage: "vehicleDistance",
            length: "long",
            autoConvert: true,
            useNative: false
        });
        var str = uf.format(m1);
        test.equal(str, '6.21 မိုင်');
        test.done();
    },
    testUnitFormatWithUsageFuelVolume1_my_MM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial gallon",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "my-MM",
            usage: "fuelVolume",
            length: "short",
            autoConvert: true,
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '2 ယူကဂေါလံ');
        test.done();
    },
    testUnitFormatWithUsageFuelVolume2_my_MM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "megawatt",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "my-MM",
            usage: "fuelVolume",
            length: "long",
            autoConvert: true,
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '2 မီဂါဝပ်');
        test.done();
    },
    testUnitFormatWithUsageOverrideSignificantDigits1_my_MM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 102.338322234
        });

        var uf = new UnitFmt({
            locale: "my-MM",
            usage: "electricalEnergy",
            length: "short",
            significantDigits: "6",
            autoConvert: true,
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '22.5113 ယူကဂေါလံ');
        test.done();
    },
    testUnitFormatWithUsageOverrideSignificantDigits2_my_MM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kWh",
            amount: 102.338322234
        });

        var uf = new UnitFmt({
            locale: "my-MM",
            usage: "electricalEnergy",
            length: "long",
            significantDigits: "6",
            autoConvert: true,
            useNative: false
        });

        var str = uf.format(m1);
        test.equal(str, '102.338 ကီလိုဝပ်-နာရီ');
        test.done();
    }
}