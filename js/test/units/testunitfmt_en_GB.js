/*
 * testunitfmt_en_GB.js - test the unitfmt for en-GB
 *
 * Copyright © 2021 JEDLSoft
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

if (typeof(TemperatureUnit) === "undefined") {
    var TemperatureUnit = require("../../lib/TemperatureUnit.js");
}

module.exports.testunitfmt_en_GB = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testUnitFormatGetLocale_en_GB: function(test) {
        test.expect(2);
        var uf = new UnitFmt({
            locale: "en-GB"
        });
        test.ok(uf.getLocale());
        test.equal(uf.getLocale().getSpec(), "en-GB");
        test.done();
    },
    testGetMeasurementSystem_en_GB: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("en-GB"), "metric");
        test.done();
    },
    testGetTemperatureUnit_en_GB: function(test) {
        test.expect(2);
        
        var tu = new TemperatureUnit();
        test.ok(tu);
        var unit = tu.localize("en-GB").getUnit();

        test.equal(unit, "celsius");
        test.done();
    },
    testUnitFormatTemperature1_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "en-GB",
            length: "short",
            autoConvert: true,
            maxFractionDigits: 2,
            roundingMode: "down"
        });
        var str = uf.format(m1);
        test.equal(str, "-16.66°C");
        test.done();
    },
    testUnitFormatTemperature2_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "en-GB",
            autoConvert: true,
            autoScale: true,
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "-16.666666666666668 degrees Celsius");
        test.done();
    },
    testUnitFormatArea1_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "en-GB",
            autoConvert:true,
            length:"short"
        });

        var str = uf.format(m1);
        test.equal(str, "2 cm²");
        test.done();
    },
    testUnitFormatArea2_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "en-GB",
            autoConvert: true,
            length: "long"
        });

        var str = uf.format(m1);
        test.equal(str, "2 square centimetres");
        test.done();
    },
    testUnitFormatArea3_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 1000
        });

        var uf = new UnitFmt({
            locale: "en-GB",
            autoConvert: true,
            length: "short"
        });

        var str = uf.format(m1);
        test.equal(str, "10 km²");
        test.done();
    },
    testUnitFormatArea4_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 1000
        });

        var uf = new UnitFmt({
            locale: "en-GB",
            autoConvert: true,
            length: "long"
        });

        var str = uf.format(m1);
        test.equal(str, "10 square kilometres");
        test.done();
    },
    testUnitFormatFuelConsumption1_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "en-GB",
            autoConvert: true,
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "2 km/l");
        test.done();
    },
    testUnitFormatFuelConsumption2_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "en-GB",
            autoConvert: true,
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "2 kilometres per litre");
        test.done();
    },
    testUnitFormatLength1_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "mile",
            amount: 2000
        });

        var uf = new UnitFmt({
            locale: "en-GB",
            autoConvert: true,
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "3.21868 Mm");
        test.done();
    },
    testUnitFormatLength2_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "mile",
            amount: 2000
        });

        var uf = new UnitFmt({
            locale: "en-GB",
            autoConvert: true,
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "3.21868 megameters");
        test.done();
    },
    testUnitFormatWithUsageVehicleDistance1_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            locale: "en-GB",
            usage: "vehicleDistance",
            length: "short",
            autoConvert: true,
        });
        var str = uf.format(m1);
        test.equal(str, "10 km");
        test.done();
    },
    testUnitFormatWithUsageVehicleDistance2_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            locale: "en-GB",
            usage: "vehicleDistance",
            length: "long",
            autoConvert: true
        });
        var str = uf.format(m1);
        test.equal(str, "10 kilometres");
        test.done();
    },
    testUnitFormatWithUsageFuelVolume1_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial gallon",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "en-GB",
            usage: "fuelVolume",
            length: "short",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "9.09 l");
        test.done();
    },
    testUnitFormatWithUsageFuelVolume2_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial gallon",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "en-GB",
            usage: "fuelVolume",
            length: "long",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "9.09 litres");
        test.done();
    },
    testUnitFormatWithUsageOverrideSignificantDigits1_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kWh",
            amount: 102.338322234
        });

        var uf = new UnitFmt({
            locale: "en-GB",
            usage: "electricalEnergy",
            length: "short",
            significantDigits: "6",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "102.338 kWh");
        test.done();
    },
    testUnitFormatWithUsageOverrideSignificantDigits2_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kWh",
            amount: 102.338322234
        });

        var uf = new UnitFmt({
            locale: "en-GB",
            usage: "electricalEnergy",
            length: "long",
            significantDigits: "6",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "102.338 kilowatt-hours");
        test.done();
    },
    testUnitFormatWithUsagePersonWeight_Short_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kg",
            amount: 58
        });

        var uf = new UnitFmt({
            usage: "personWeight",
            length: "short",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "128 lb");
        test.done();
    },
    testUnitFormatWithUsagePersonWeight_Long_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kg",
            amount: 58
        });

        var uf = new UnitFmt({
            usage: "personWeight",
            length: "long",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "128 pounds");
        test.done();
    },
    testUnitFormatWithUsagePersonHeight_Short_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cm",
            amount: 178
        });

        var uf = new UnitFmt({
            usage: "personHeight",
            length: "short",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "5 ft, 10 in");
        test.done();
    },
    testUnitFormatWithUsagePersonHeight_Long_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cm",
            amount: 178
        });

        var uf = new UnitFmt({
            usage: "personHeight",
            length: "long",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "5 feet, 10 inches");
        test.done();
    },
    testUnitFormatWithUsageBabyHeight_Short_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cm",
            amount: 40
        });

        var uf = new UnitFmt({
            usage: "babyHeight",
            length: "short",
            locale: "en-GB",
            style: "numeric"
        });
        var str = uf.format(m1);
        test.equal(str, "15.7 in");
        test.done();
    },
    testUnitFormatWithUsageBabyHeight_Long_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cm",
            amount: 40
        });

        var uf = new UnitFmt({
            usage: "babyHeight",
            length: "long",
            locale: "en-GB",
            style: "numeric"
        });
        var str = uf.format(m1);
        test.equal(str, "15.7 inches");
        test.done();
    },
    testUnitFormatWithUsageBabyWeight_Short_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kg",
            amount: 2.5
        });

        var uf = new UnitFmt({
            usage: "babyWeight",
            length: "short",
            locale: "en-GB",
            style: "numeric"
        });
        var str = uf.format(m1);
        test.equal(str, "5 lb, 8 oz");
        test.done();
    },
    testUnitFormatWithUsageBabyWeight_Long_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kg",
            amount: 2.5
        });

        var uf = new UnitFmt({
            usage: "babyWeight",
            length: "long",
            locale: "en-GB",
            style: "numeric"
        });
        var str = uf.format(m1);
        test.equal(str, "5 pounds, 8 ounces");
        test.done();
    },
    testUnitFormatWithUsageDrinkVolume_short_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 569
        });

        var uf = new UnitFmt({
            usage: "drinkVolume",
            length: "short",
        });
        var str = uf.format(m1);
        test.equal(str, "1 pt(i)");
        test.done();
    },
    testUnitFormatWithUsageDrinkVolume_Long_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 569
        });

        var uf = new UnitFmt({
            usage: "drinkVolume",
            length: "long",
        });
        var str = uf.format(m1);
        test.equal(str, "1 imperial pint");
        test.done();
    },
    testUnitFormatWithUsageGasVolume_short_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 2500
        });

        var uf = new UnitFmt({
            usage: "gasVolume",
            length: "short",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "2.5 m³");
        test.done();
    },
    testUnitFormatWithUsageGasVolume_long_en_GB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 2500
        });

        var uf = new UnitFmt({
            usage: "gasVolume",
            length: "long",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "2.5 cubic metres");
        test.done();
    },
}