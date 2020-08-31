/*
 * testunitfmt_be_BY.js - test the unitfmt for be-BY
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

module.exports.testunitfmt_be_BY = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testUnitFormatGetLocale_be_BY: function(test) {
        test.expect(2);
        var uf = new UnitFmt({
            locale: "be-BY"
        });
        test.ok(uf.getLocale());
        test.equal(uf.getLocale().getSpec(), "be-BY");
        test.done();
    },
    testGetMeasurementSystem_be_BY: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("be-BY"), "metric");
        test.done();
    },
    testUnitFormatTemperature1_be_BY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "be-BY",
            length: "short",
            autoConvert: true,
            maxFractionDigits: 2,
            roundingMode: "down"
        });
        var str = uf.format(m1);
        test.equal(str, "-16,66 °C");
        test.done();
    },
    testUnitFormatTemperature2_be_BY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "be-BY",
            autoConvert: true,
            autoScale: true,
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "-16,666666666666668 градусы Цэльсія");
        test.done();
    },
    testUnitFormatArea1_be_BY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "be-BY", 
            autoConvert:true,
            length:"short"
        });

        var str = uf.format(m1);
        test.equal(str, "2 см²");
        test.done();
    },
    testUnitFormatArea2_be_BY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "be-BY", 
            autoConvert: true,
            length: "long"
        });

        var str = uf.format(m1);
        test.equal(str, "2 квадратныя сантыметры");
        test.done();
    },
    testUnitFormatArea3_be_BY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 1000
        });

        var uf = new UnitFmt({
            locale: "be-BY", 
            autoConvert: true,
            length: "short"
        });

        var str = uf.format(m1);
        test.equal(str, "10 км²");
        test.done();
    },
    testUnitFormatArea4_be_BY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 1000
        });

        var uf = new UnitFmt({
            locale: "be-BY", 
            autoConvert: true,
            length: "long"
        });

        var str = uf.format(m1);
        test.equal(str, "10 квадратных кіламетраў");
        test.done();
    },
    testUnitFormatFuelConsumption1_be_BY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "be-BY",
            autoConvert: true,
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "2 км/л");
        test.done();
    },
    testUnitFormatFuelConsumption2_be_BY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "be-BY",
            autoConvert: true,
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "2 кіламетра на літр");
        test.done();
    },
    testUnitFormatLength1_be_BY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 2000
        });

        var uf = new UnitFmt({
            locale: "be-BY",
            autoConvert: true,
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "2 км");
        test.done();
    },
    testUnitFormatLength2_be_BY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 2000
        });

        var uf = new UnitFmt({
            locale: "be-BY",
            autoConvert: true,
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "2 кіламетры");
        test.done();
    },
    testUnitFormatWithUsageVehicleDistance1_be_BY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            locale: "be-BY",
            usage: "vehicleDistance",
            length: "short",
            autoConvert: true,
        });
        var str = uf.format(m1);
        test.equal(str, "10 км");
        test.done();
    },
    testUnitFormatWithUsageVehicleDistance2_be_BY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            locale: "be-BY",
            usage: "vehicleDistance",
            length: "long",
            autoConvert: true
        });
        var str = uf.format(m1);
        test.equal(str, "10 кіламетраў");
        test.done();
    },
    testUnitFormatWithUsageFuelVolume1_be_BY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial gallon",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "be-BY",
            usage: "fuelVolume",
            length: "short",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "9,09 л");
        test.done();
    },
    testUnitFormatWithUsageFuelVolume2_be_BY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial gallon",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "be-BY",
            usage: "fuelVolume",
            length: "long",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "9,09 літра");
        test.done();
    },
    testUnitFormatWithUsageOverrideSignificantDigits1_be_BY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kWh",
            amount: 102.338322234
        });

        var uf = new UnitFmt({
            locale: "be-BY",
            usage: "electricalEnergy",
            length: "short",
            significantDigits: "6",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "102,338 кВт·г");
        test.done();
    },
    testUnitFormatWithUsageOverrideSignificantDigits2_be_BY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kWh",
            amount: 102.338322234
        });

        var uf = new UnitFmt({
            locale: "be-BY",
            usage: "electricalEnergy",
            length: "long",
            significantDigits: "6",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "102,338 кілават-гадзіны");
        test.done();
    }
}