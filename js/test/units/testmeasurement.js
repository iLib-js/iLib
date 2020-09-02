/*
 * testmeasurement.js - test the measurement and measurement factory objects
 * 
 * Copyright © 2014-2015,2017-2018 JEDLSoft
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

if (typeof(MeasurementFactory) === "undefined") {
    var MeasurementFactory = require("../../lib/MeasurementFactory.js");
    var Measurement = require("../../lib/Measurement.js");
    var Locale = require("../../lib/Locale.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testmeasurement = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testMeasurementConstructor: function(test) {
        test.expect(1);
        var m = MeasurementFactory();

        test.ok(m !== null);
        test.done();
    },

    testMeasurementNoAmount: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "meter"
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "meter");
        test.equal(m.getAmount(), 0);
        test.done();
    },

    testMeasurementRightMeasureType: function(test) {
        test.expect(2);
        var m = MeasurementFactory({
            unit: "meter",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getMeasure(), "length");
        test.done();
    },

    testMeasurementUnknownUnitPreserved: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "krunghoonfoop",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "krunghoonfoop");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementUnknownUnitUnknownMeasureType: function(test) {
        test.expect(2);
        var m = MeasurementFactory({
            unit: "krunghoonfoop",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getMeasure(), "unknown");
        test.done();
    },

    testMeasurementMetricScaleMicro: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "micrometer",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "micrometer");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementMetricScaleMilli: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "millimeter",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "millimeter");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementMetricScaleCenti: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "centimeter",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "centimeter");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementMetricScaleDeca: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "decameter",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "decameter");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementMetricScaleHecto: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "hectometer",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "hectometer");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementMetricScaleKilo: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "kilometer",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "kilometer");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementMetricScaleMega: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "megameter",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "megameter");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementMetricScaleGiga: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "gigameter",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "gigameter");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementMetricScaleSymbolMicro: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "µm",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "micrometer");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementMetricScaleSymbolMilli: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "mm",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "millimeter");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementMetricScaleSymbolCenti: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "cm",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "centimeter");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementMetricScaleSymbolNone: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "m",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "meter");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementMetricScaleSymbolDeca: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "dam",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "decameter");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementMetricScaleSymbolHecto: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "hm",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "hectometer");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementMetricScaleSymbolKilo: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "km",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "kilometer");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementMetricScaleSymbolMega: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "Mm",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "megameter");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementMetricScaleSymbolGiga: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "Gm",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "gigameter");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementMetricScaleOriginalUnit: function(test) {
        test.expect(2);
        var m = MeasurementFactory({
            unit: "kilometer",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getOriginalUnit(), "kilometer");
        test.done();
    },

    testMeasurementAliases1: function(test) {
        test.expect(3);
        var m = MeasurementFactory({
            unit: "miles",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getUnit(), "mile");
        test.equal(m.getAmount(), 2);
        test.done();
    },

    testMeasurementAliases1OriginalUnit: function(test) {
        test.expect(2);
        var m = MeasurementFactory({
            unit: "meters",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getOriginalUnit(), "meters");
        test.done();
    },

    testMeasurementAliasesMetric: function(test) {
        var expected = [
            "meters",
            "meter",
            "metre",
            "metres",
            "m"
            ];

        for (var i = 0; i < expected.length; i++) {
            var m = MeasurementFactory({
                unit: expected[i],
                amount: 2
            });

            test.ok(m !== null);

            test.equal(m.getUnit(), "meter");
            test.equal(m.getOriginalUnit(), expected[i]);
        }
        test.done();
    },

    testMeasurementAliasesUS: function(test) {
        var expected = [
            {alias: "miles", normalized: "mile"},
            {alias: "yards", normalized: "yard"},
            {alias: "feet", normalized: "foot"},
            {alias: "inches", normalized: "inch"}
            ];

        for (var i = 0; i < expected.length; i++) {
            var m = MeasurementFactory({
                unit: expected[i].alias,
                amount: 2
            });

            test.ok(m !== null);

            test.equal(m.getUnit(), expected[i].normalized);
        }
        test.done();
    },

    testMeasurementConvert: function(test) {
        test.expect(4);
        var m1 = MeasurementFactory({
            unit: "mile",
            amount: 2
        });
        var m2 = MeasurementFactory({
            unit: "meter",
            amount: m1
        });

        test.ok(m1 !== null);
        test.ok(m2 !== null);

        test.equal(m2.getUnit(), "meter");
        test.equal(m2.getAmount(), 3218.68);
        test.done();
    },

    testMeasurementConvertToMetricScale: function(test) {
        test.expect(4);
        var m1 = MeasurementFactory({
            unit: "mile",
            amount: 2
        });
        var m2 = MeasurementFactory({
            unit: "kilometer",
            amount: m1
        });

        test.ok(m1 !== null);
        test.ok(m2 !== null);

        test.equal(m2.getUnit(), "kilometer");
        test.equal(m2.getAmount(), 3.21868);
        test.done();
    },

    testMeasurementConvertToMetricScaleWithAlias: function(test) {
        test.expect(4);
        var m1 = MeasurementFactory({
            unit: "mile",
            amount: 2
        });
        var m2 = MeasurementFactory({
            unit: "km",
            amount: m1
        });

        test.ok(m1 !== null);
        test.ok(m2 !== null);

        test.equal(m2.getUnit(), "kilometer");
        test.equal(m2.getAmount(), 3.21868);
        test.done();
    },

    testMeasurementConvertFromMetric: function(test) {
        test.expect(4);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 2000
        });
        var m2 = MeasurementFactory({
            unit: "mile",
            amount: m1
        });

        test.ok(m1 !== null);
        test.ok(m2 !== null);

        test.equal(m2.getUnit(), "mile");
        test.equal(m2.getAmount(), 1.2427424);
        test.done();
    },

    testMeasurementConvertFromMetricWithScale: function(test) {
        test.expect(4);
        var m1 = MeasurementFactory({
            unit: "kilometer",
            amount: 2
        });
        var m2 = MeasurementFactory({
            unit: "mile",
            amount: m1
        });

        test.ok(m1 !== null);
        test.ok(m2 !== null);

        test.equal(m2.getUnit(), "mile");
        test.equal(m2.getAmount(), 1.242746);
        test.done();
    },

    testMeasurementConvertFromMetricWithScaleAndAlias: function(test) {
        test.expect(4);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 2
        });
        var m2 = MeasurementFactory({
            unit: "mile",
            amount: m1
        });

        test.ok(m1 !== null);
        test.ok(m2 !== null);

        test.equal(m2.getUnit(), "mile");
        test.equal(m2.getAmount(), 1.242746);
        test.done();
    },

    testMeasurementCannotConvertBetweenMeasureTypes: function(test) {
        try {
            var m1 = MeasurementFactory({
                unit: "meter",
                amount: 2
            });
            var m2 = MeasurementFactory({
                unit: "celsius",
                amount: m1
            });
            test.fail();
        } catch (e) {
            test.equal(e, "Cannot convert unit meter to a temperature");
        }
        test.done();
    },

    testMeasurementGetMeasurementSystemDefault: function(test) {
        test.expect(1);
        test.equal(Measurement.getMeasurementSystemForLocale(), "uscustomary");
        test.done();
    },

    testMeasurementGetMeasurementSystemUS: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("en-US"), "uscustomary");
        test.done();
    },

    testMeasurementGetMeasurementSystemUSWithFlavor: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("en-US-ASDF"), "uscustomary");
        test.done();
    },

    testMeasurementGetMeasurementSystemUSNonEnglish1: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("es-US"), "uscustomary");
        test.done();
    },

    testMeasurementGetMeasurementSystemUSNonEnglish1WithLocaleObj: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale(new Locale("es-US")), "uscustomary");
        test.done();
    },

    testMeasurementGetMeasurementSystemUSNonEnglish2: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("zh-Hant-US"), "uscustomary");
        test.done();
    },

    testMeasurementGetMeasurementSystemLR: function(test) {
        test.expect(1);

        // will be metric soon
        test.equal(Measurement.getMeasurementSystemForLocale("en-LR"), "uscustomary");
        test.done();
    },

    testMeasurementGetMeasurementSystemPW: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("pau-PW"), "uscustomary");
        test.done();
    },

    testMeasurementGetMeasurementSystemMH: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("mh-MH"), "uscustomary");
        test.done();
    },

    testMeasurementGetMeasurementSystemFM: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("en-FM"), "uscustomary");
        test.done();
    },

    testMeasurementGetMeasurementSystemWS: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("sm-WS"), "uscustomary");
        test.done();
    },

    testMeasurementGetMeasurementSystemAS: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("en-AS"), "uscustomary");
        test.done();
    },

    testMeasurementGetMeasurementSystemPR: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("es-PR"), "uscustomary");
        test.done();
    },

    testMeasurementGetMeasurementSystemENPR: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("en-PR"), "uscustomary");
        test.done();
    },

    testMeasurementGetMeasurementSystemGU: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("en-GU"), "uscustomary");
        test.done();
    },

    testMeasurementGetMeasurementSystemMP: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("en-MP"), "uscustomary");
        test.done();
    },

    testMeasurementGetMeasurementSystemVI: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("en-VI"), "uscustomary");
        test.done();
    },

    testMeasurementGetMeasurementSystemMM: function(test) {
        test.expect(1);

        // will be changing to metric very soon
        test.equal(Measurement.getMeasurementSystemForLocale("my-MM"), "imperial");
        test.done();
    },

    testMeasurementGetMeasurementSystemGB: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("en-GB"), "imperial");
        test.done();
    },

    testMeasurementGetMeasurementSystemGBWithLocaleObj: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale(new Locale("en-GB")), "imperial");
        test.done();
    },

    testMeasurementGetMeasurementSystemGBWithFlavor: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("en-GB-ASDF"), "imperial");
        test.done();
    },

    testMeasurementGetMeasurementSystemOther1: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("ja-JP"), "metric");
        test.done();
    },

    testMeasurementGetMeasurementSystemOther2: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("da-DK"), "metric");
        test.done();
    },

    testMeasurementGetMeasurementSystemOther3: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("zu-ZA"), "metric");
        test.done();
    },
    testMeasurementGetMeasurementSystemOther4: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale("be-BY"), "metric");
        test.done();
    },

    testMeasurementGetMeasurementSystemOtherWithLocaleObj: function(test) {
        test.expect(1);

        test.equal(Measurement.getMeasurementSystemForLocale(new Locale("da-DK")), "metric");
        test.done();
    },

};
