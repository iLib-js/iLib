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

}