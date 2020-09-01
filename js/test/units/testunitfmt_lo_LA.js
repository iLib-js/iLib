/*
 * testunitfmt_lo_LA.js - test the unitfmt for lo-LA
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

module.exports.testunitfmt_lo_LA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testUnitFormatGetLocale_lo_LA: function(test) {
        test.expect(2);
        var uf = new UnitFmt({
            locale: "lo-LA"
        });
        test.ok(uf.getLocale());
        test.equal(uf.getLocale().getSpec(), "lo-LA");
        test.done();
    },
    testGetMeasurementSystem_lo_LA: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("lo-LA"), "metric");
        test.done();
    },
    testUnitFormatTemperature1_lo_LA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "lo-LA",
            length: "short",
            autoConvert: true,
            maxFractionDigits: 2,
            roundingMode: "down"
        });
        var str = uf.format(m1);
        test.equal(str, "-16,66 ອົງສາ ຊີ.");
        test.done();
    },
    testUnitFormatTemperature2_lo_LA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "lo-LA",
            autoConvert: true,
            autoScale: true,
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "-16,666666666666668 ອົງສາ ຊີ.");
        test.done();
    },

    testUnitFormatArea1_lo_LA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "lo-LA", 
            autoConvert:true,
            length:"short"
        });

        var str = uf.format(m1);
        test.equal(str, "2 ຊມ²");
        test.done();
    },
    testUnitFormatArea2_lo_LA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "lo-LA", 
            autoConvert: true,
            length: "long"
        });

        var str = uf.format(m1);
        test.equal(str, "2 ຊັງຕີຕາແມັດ");
        test.done();
    },
    testUnitFormatArea3_lo_LA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 1000
        });

        var uf = new UnitFmt({
            locale: "lo-LA", 
            autoConvert: true,
            length: "short"
        });

        var str = uf.format(m1);
        test.equal(str, "10 ກມ²");
        test.done();
    },
    testUnitFormatArea4_lo_LA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 1000
        });

        var uf = new UnitFmt({
            locale: "lo-LA", 
            autoConvert: true,
            length: "long"
        });

        var str = uf.format(m1);
        test.equal(str, "10 ກິໂລຕາແມັດ");
        test.done();
    },
    testUnitFormatFuelConsumption1_lo_LA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "lo-LA",
            autoConvert: true,
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "2 ກມ/l");
        test.done();
    },
    testUnitFormatFuelConsumption2_lo_LA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "lo-LA",
            autoConvert: true,
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "2 ກິໂລແມັດ ຕໍ່ລິດ");
        test.done();
    },
    testUnitFormatLength1_lo_LA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 2000
        });

        var uf = new UnitFmt({
            locale: "lo-LA",
            autoConvert: true,
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "2 ກມ");
        test.done();
    },
    testUnitFormatLength2_lo_LA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 2000
        });

        var uf = new UnitFmt({
            locale: "lo-LA",
            autoConvert: true,
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "2 ກິໂລແມັດ");
        test.done();
    },
    testUnitFormatWithUsageVehicleDistance1_lo_LA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            locale: "lo-LA",
            usage: "vehicleDistance",
            length: "short",
            autoConvert: true,
        });
        var str = uf.format(m1);
        test.equal(str, "10 ກມ");
        test.done();
    },
    testUnitFormatWithUsageVehicleDistance2_lo_LA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            locale: "lo-LA",
            usage: "vehicleDistance",
            length: "long",
            autoConvert: true
        });
        var str = uf.format(m1);
        test.equal(str, "10 ກິໂລແມັດ");
        test.done();
    },
    testUnitFormatWithUsageFuelVolume1_lo_LA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kg",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "lo-LA",
            usage: "fuelVolume",
            length: "short",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "2 ກິໂລ");
        test.done();
    },
    testUnitFormatWithUsageFuelVolume2_lo_LA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kg",
            amount: 2
        });

        var uf = new UnitFmt({
            locale: "lo-LA",
            usage: "fuelVolume",
            length: "long",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "2 ກິໂລກຣາມ");
        test.done();
    },
    testUnitFormatWithUsageFuelVolume3_lo_LA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gallon",
            amount: 102.338322234
        });

        var uf = new UnitFmt({
            locale: "lo-LA",
            usage: "electricalEnergy",
            length: "long",
            significantDigits: "6",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "387,393 ລິດ");
        test.done();
    },
    testUnitFormatWithUsageNauticalSpeed_lo_LA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "knots",
            amount: 103
        });

        var uf = new UnitFmt({
            locale: "lo-LA",
            usage: "nauticalSpeed",
            length: "short",
            autoConvert: true
        });

        var str = uf.format(m1);
        test.equal(str, "191 ກມ/ຊມ");
        test.done();
    },
    testUnitFormatWithUsageNauticalSpeed2_lo_LA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "knots",
            amount: 103
        });

        var uf = new UnitFmt({
            locale: "lo-LA",
            usage: "nauticalSpeed",
            length: "long",
            significantDigits: "4"
        });

        var str = uf.format(m1);
        test.equal(str, "191 ກິໂລແມັດຕໍ່ຊົ່ວໂມງ");
        test.done();
    }
}