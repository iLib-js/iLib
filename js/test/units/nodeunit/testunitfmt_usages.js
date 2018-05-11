/*
 * testunits_usages.js - test the units formatter object with various usages
 *
 * Copyright © 2018 JEDLSoft
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
    var UnitFmt = require("../.././../lib/UnitFmt.js");
}
if (typeof(MeasurementFactory) === "undefined") {
    var MeasurementFactory = require("../.././../lib/MeasurementFactory.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testunitfmt_usages = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testUnitFormatWithUsageAdultHeightUSRightMeasures: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "feet",
            amount: 6.166666666666666666
        });

        var uf = new UnitFmt({
            usage: "personHeight",
            length: "short",
            locale: "en-US"
        });
        var str = uf.format(m1);
        test.equal(str, "6 ft 2 in");
        test.done();
    },

    testUnitFormatWithUsageAdultHeightUSWithAutoScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "inch",
            amount: 74
        });

        var uf = new UnitFmt({
            usage: "personHeight",
            length: "short",
            locale: "en-US"
        });
        var str = uf.format(m1);
        test.equal(str, "6 ft 2 in");
        test.done();
    },

    testUnitFormatWithUsageAdultHeightUSConvertFromMetric: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cm",
            amount: 187.96
        });

        var uf = new UnitFmt({
            usage: "personHeight",
            length: "short",
            locale: "en-US"
        });
        var str = uf.format(m1);
        test.equal(str, "6 ft 2 in");
        test.done();
    },

    testUnitFormatWithUsageAdultHeightDE: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "m",
            amount: 1.87
        });

        var uf = new UnitFmt({
            usage: "personHeight",
            length: "short",
            locale: "de-DE"
        });
        var str = uf.format(m1);
        test.equal(str, "1 m, 87 cm");
        test.done();
    },

    testUnitFormatWithUsageAdultHeightDENumeric: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "m",
            amount: 1.87
        });

        var uf = new UnitFmt({
            usage: "personHeight",
            length: "short",
            locale: "de-DE",
            style: "numeric"
        });
        var str = uf.format(m1);
        test.equal(str, "1,87 m");
        test.done();
    },

    testUnitFormatWithUsageChildHeightDE: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "m",
            amount: 0.78
        });

        var uf = new UnitFmt({
            usage: "personHeight",
            length: "short",
            locale: "de-DE",
            style: "numeric"
        });
        var str = uf.format(m1);
        test.equal(str, "78 cm");
        test.done();
    },

    testUnitFormatWithUsageBabyLengthUSShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "in",
            amount: 14.2
        });

        var uf = new UnitFmt({
            usage: "babyHeight",
            length: "short",
            style: "numeric"
        });
        var str = uf.format(m1);
        test.equal(str, "14.2 in");
        test.done();
    },

    testUnitFormatWithUsageBabyLengthUSLong: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "in",
            amount: 14.2
        });

        var uf = new UnitFmt({
            usage: "babyHeight",
            length: "long",
            style: "numeric"
        });
        var str = uf.format(m1);
        test.equal(str, "14.2 inches");
        test.done();
    },

    testUnitFormatWithUsageBabyLengthDE: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "m",
            amount: 0.285
        });

        var uf = new UnitFmt({
            usage: "babyHeight",
            length: "short",
            locale: "de-DE",
            style: "numeric"
        });
        var str = uf.format(m1);
        test.equal(str, "28,5 cm");
        test.done();
    },

    testUnitFormatWithUsageFloorSpace: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square feet",
            amount: 200
        });

        var uf = new UnitFmt({
            usage: "floorSpace",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "200 square feet");
        test.done();
    },

    testUnitFormatWithUsageVehicleDistance: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "mile",
            amount: 10000
        });

        var uf = new UnitFmt({
            usage: "vehicleDistance",
            length: "long",
            locale: "en-US"
        });
        var str = uf.format(m1);
        test.equal(str, "10,000 miles");
        test.done();
    },

    testUnitFormatWithUsageVehicleDistanceShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "mile",
            amount: 10000
        });

        var uf = new UnitFmt({
            usage: "vehicleDistance",
            length: "short",
            locale: "en-US"
        });
        var str = uf.format(m1);
        test.equal(str, "10,000 mi");
        test.done();
    },

    testUnitFormatWithUsageVehicleDistanceScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "feet",
            amount: 10000
        });

        var uf = new UnitFmt({
            usage: "vehicleDistance",
            length: "long",
            locale: "en-US"
        });
        var str = uf.format(m1);
        test.equal(str, "1.89 miles");
        test.done();
    },

    testUnitFormatWithUsageVehicleDistanceScaleMetric: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 10000
        });

        var uf = new UnitFmt({
            usage: "vehicleDistance",
            length: "long",
            locale: "en-CA"
        });
        var str = uf.format(m1);
        test.equal(str, "10 kilometres");
        test.done();
    },

    testUnitFormatWithUsageVehicleDistanceConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            usage: "vehicleDistance",
            length: "long",
            locale: "en-US"
        });
        var str = uf.format(m1);
        test.equal(str, "6.21 miles");
        test.done();
    },

    testUnitFormatWithUsageVehicleDistanceIT: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10000
        });

        var uf = new UnitFmt({
            usage: "vehicleDistance",
            length: "long",
            locale: "it-IT"
        });
        var str = uf.format(m1);
        test.equal(str, "10.000 chilometri");
        test.done();
    },

    testUnitFormatWithUsageNauticalDistance: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "nautical miles",
            amount: 10000
        });

        var uf = new UnitFmt({
            usage: "nauticalDistance",
            length: "long",
            locale: "en-US"
        });
        var str = uf.format(m1);
        test.equal(str, "10,000 nautical miles");
        test.done();
    },

    testUnitFormatWithUsageNauticalDistanceShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "nautical miles",
            amount: 10000
        });

        var uf = new UnitFmt({
            usage: "nauticalDistance",
            length: "short",
            locale: "en-US"
        });
        var str = uf.format(m1);
        test.equal(str, "10,000 nmi");
        test.done();
    },

    testUnitFormatWithUsageNauticalDistanceScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "feet",
            amount: 10000
        });

        var uf = new UnitFmt({
            usage: "nauticalDistance",
            length: "long",
            locale: "en-US"
        });
        var str = uf.format(m1);
        test.equal(str, "1.65 nautical miles");
        test.done();
    },

    testUnitFormatWithUsageNauticalDistanceScaleMetric: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 10000
        });

        var uf = new UnitFmt({
            usage: "nauticalDistance",
            length: "long",
            locale: "en-CA"
        });
        var str = uf.format(m1);
        test.equal(str, "10 kilometres");
        test.done();
    },

    testUnitFormatWithUsageNauticalDistanceConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10
        });

        var uf = new UnitFmt({
            usage: "nauticalDistance",
            length: "long",
            locale: "en-US"
        });
        var str = uf.format(m1);
        test.equal(str, "5.4 nautical miles");
        test.done();
    },

    testUnitFormatWithUsageNauticalDistanceFI: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 10000.34
        });

        var uf = new UnitFmt({
            usage: "nauticalDistance",
            length: "long",
            locale: "fi-FI"
        });
        var str = uf.format(m1);
        test.equal(str, "10 000 kilometriä");
        test.done();
    },

    testUnitFormatWithUsageFloorSpaceConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square meters",
            amount: 10
        });

        var uf = new UnitFmt({
            usage: "floorSpace",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "107.64 square feet");
        test.done();
    },

    testUnitFormatWithUsageFloorSpaceScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square inches",
            amount: 20000
        });

        var uf = new UnitFmt({
            usage: "floorSpace",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "138.89 square feet");
        test.done();
    },

    testUnitFormatWithUsageFloorSpaceDEShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "m2",
            amount: 10.2
        });

        var uf = new UnitFmt({
            usage: "floorSpace",
            length: "short",
            locale: "de-DE"
        });
        var str = uf.format(m1);
        test.equal(str, "10,2 m²");
        test.done();
    },

    testUnitFormatWithUsageFloorSpaceDELong: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "m2",
            amount: 10.2
        });

        var uf = new UnitFmt({
            usage: "floorSpace",
            length: "long",
            locale: "de-DE"
        });
        var str = uf.format(m1);
        test.equal(str, "10,2 Quadratmeter");
        test.done();
    },

    testUnitFormatWithUsageLandArea: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "acres",
            amount: 2.3
        });

        var uf = new UnitFmt({
            usage: "landArea",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "2.3 acres");
        test.done();
    },

    testUnitFormatWithUsageLandAreaShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "acres",
            amount: 2.3
        });

        var uf = new UnitFmt({
            usage: "landArea",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "2.3 ac");
        test.done();
    },

    testUnitFormatWithUsageLandAreaConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "m2",
            amount: 5000
        });

        var uf = new UnitFmt({
            usage: "landArea",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "1.24 acres");
        test.done();
    },

    testUnitFormatWithUsageLandAreaScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square feet",
            amount: 80000
        });

        var uf = new UnitFmt({
            usage: "landArea",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "1.84 acres");
        test.done();
    },

    testUnitFormatWithUsageLandAreaJP: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square meter",
            amount: 5000
        });

        var uf = new UnitFmt({
            usage: "landArea",
            length: "long",
            locale: "ja-JP"
        });
        var str = uf.format(m1);
        test.equal(str, "5 ヘクタール");
        test.done();
    },

    testUnitFormatWithUsageLandAreaJPShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square meter",
            amount: 5000
        });

        var uf = new UnitFmt({
            usage: "landArea",
            length: "short",
            locale: "ja-JP"
        });
        var str = uf.format(m1);
        test.equal(str, "5 ha");
        test.done();
    },

    testUnitFormatWithUsageElectricalEnergy: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kWh",
            amount: 5
        });

        var uf = new UnitFmt({
            usage: "electricalEnergy",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "5 kilowatt hours");
        test.done();
    },

    testUnitFormatWithUsageElectricalEnergyShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kWh",
            amount: 5
        });

        var uf = new UnitFmt({
            usage: "electricalEnergy",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "5 kWh");
        test.done();
    },

    testUnitFormatWithUsageElectricalEnergyScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "Wh",
            amount: 5000
        });

        var uf = new UnitFmt({
            usage: "electricalEnergy",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "5 kWh");
        test.done();
    },

    testUnitFormatWithUsageElectricalEnergyConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kJ",
            amount: 4.320
        });

        var uf = new UnitFmt({
            usage: "electricalEnergy",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "1.2 kWh");
        test.done();
    },

    testUnitFormatWithUsageElectricalEnergyConvert2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "btu",
            amount: 4094.57
        });

        var uf = new UnitFmt({
            usage: "electricalEnergy",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "1.2 kWh");
        test.done();
    },

    testUnitFormatWithUsageElectricalEnergyCN: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kWh",
            amount: 5.4
        });

        var uf = new UnitFmt({
            usage: "electricalEnergy",
            length: "long",
            locale: "zh-Hans-CN"
        });
        var str = uf.format(m1);
        test.equal(str, "5.4千瓦时");
        test.done();
    },

    testUnitFormatWithUsageHeatingEnergy: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "BTU",
            amount: 5000
        });

        var uf = new UnitFmt({
            usage: "heatingEnergy",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "5,000 BTU");
        test.done();
    },

    testUnitFormatWithUsageHeatingEnergyConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kWh",
            amount: 5
        });

        var uf = new UnitFmt({
            usage: "heatingEnergy",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "17,060.7 BTU");
        test.done();
    },

    testUnitFormatWithUsageHeatingEnergyShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "BTU",
            amount: 5000
        });

        var uf = new UnitFmt({
            usage: "heatingEnergy",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "5,000 BTU");
        test.done();
    },

    testUnitFormatWithUsageHeatingEnergyScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "mJ",
            amount: 50000000
        });

        var uf = new UnitFmt({
            usage: "heatingEnergy",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "50 kJ");
        test.done();
    },

    testUnitFormatWithUsageHeatingEnergyConvert2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "btu",
            amount: 4094.57
        });

        var uf = new UnitFmt({
            usage: "heatingEnergy",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "4,320 kJ");
        test.done();
    },

    testUnitFormatWithUsageHeatingEnergyAR: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kJ",
            amount: 5
        });

        var uf = new UnitFmt({
            usage: "heatingEnergy",
            length: "long",
            locale: "ar-SA"
        });
        var str = uf.format(m1);
        test.equal(str, '۵ كيلو جول');
        test.done();
    },

    testUnitFormatWithUsageHeatingEnergyAR: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kJ",
            amount: 5
        });

        var uf = new UnitFmt({
            usage: "heatingEnergy",
            length: "long",
            locale: "ar-SA"
        });
        var str = uf.format(m1);
        test.equal(str, '۵ كيلو جول');
        test.done();
    },

    testUnitFormatWithUsagePersonWeight: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "lbs",
            amount: 150
        });

        var uf = new UnitFmt({
            usage: "personWeight",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "150 pounds");
        test.done();
    },

    testUnitFormatWithUsagePersonWeightConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kg",
            amount: 70
        });

        var uf = new UnitFmt({
            usage: "personWeight",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "154 pounds");
        test.done();
    },

    testUnitFormatWithUsagePersonWeightShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "lbs",
            amount: 150
        });

        var uf = new UnitFmt({
            usage: "personWeight",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "150 lbs");
        test.done();
    },

    testUnitFormatWithUsagePersonWeightScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ounce",
            amount: 2470
        });

        var uf = new UnitFmt({
            usage: "personWeight",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "154 lbs");
        test.done();
    },

    testUnitFormatWithUsagePersonWeightScaleMetric: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gram",
            amount: 80254
        });

        var uf = new UnitFmt({
            usage: "personWeight",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "80 kg");
        test.done();
    },

    testUnitFormatWithUsagePersonWeightConvert2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "lbs",
            amount: 150
        });

        var uf = new UnitFmt({
            usage: "personWeight",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "68 kg");
        test.done();
    },

    testUnitFormatWithUsagePersonWeightJP: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kg",
            amount: 58
        });

        var uf = new UnitFmt({
            usage: "personWeight",
            length: "long",
            locale: "ja-JP"
        });
        var str = uf.format(m1);
        test.equal(str, "58 キログラム");
        test.done();
    },

    testUnitFormatWithUsagePersonWeightRU: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kg",
            amount: 63.45
        });

        var uf = new UnitFmt({
            usage: "personWeight",
            length: "long",
            locale: "ru-RU"
        });
        var str = uf.format(m1);
        test.equal(str, "63 килограмма");
        test.done();
    },

    testUnitFormatWithUsageBabyWeight: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "lbs",
            amount: 6.25
        });

        var uf = new UnitFmt({
            usage: "babyWeight",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "6 pounds 4 ounces");
        test.done();
    },

    testUnitFormatWithUsageBabyWeightConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kg",
            amount: 3.2
        });

        var uf = new UnitFmt({
            usage: "babyWeight",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "7 pounds 7 ounces");
        test.done();
    },

    testUnitFormatWithUsageBabyWeightShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "lbs",
            amount: 150
        });

        var uf = new UnitFmt({
            usage: "babyWeight",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "150 lbs");
        test.done();
    },

    testUnitFormatWithUsageBabyWeightScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ounce",
            amount: 100
        });

        var uf = new UnitFmt({
            usage: "babyWeight",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "6 lbs 4 oz");
        test.done();
    },

    testUnitFormatWithUsageBabyWeightScaleMetric: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gram",
            amount: 3200
        });

        var uf = new UnitFmt({
            usage: "babyWeight",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "3.2 kg");
        test.done();
    },

    testUnitFormatWithUsageBabyWeightConvert2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ounce",
            amount: 100
        });

        var uf = new UnitFmt({
            usage: "babyWeight",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "2.83 kg");
        test.done();
    },

    testUnitFormatWithUsageBabyWeightGR: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kg",
            amount: 3.2
        });

        var uf = new UnitFmt({
            usage: "babyWeight",
            length: "long",
            locale: "el-GR"
        });
        var str = uf.format(m1);
        test.equal(str, "3,2 χιλιόγραμμα");
        test.done();
    },

    testUnitFormatWithUsageBabyWeightCO: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kg",
            amount: 3.45
        });

        var uf = new UnitFmt({
            usage: "babyWeight",
            length: "long",
            locale: "es-CO"
        });
        var str = uf.format(m1);
        test.equal(str, "3,45 kilogramos");
        test.done();
    },

    testUnitFormatWithUsageVehicleWeight: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ton",
            amount: 1.2
        });

        var uf = new UnitFmt({
            usage: "vehicleWeight",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "1.2 tons");
        test.done();
    },

    testUnitFormatWithUsageVehicleWeightConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "metric ton",
            amount: 1.5
        });

        var uf = new UnitFmt({
            usage: "vehicleWeight",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "1.654 tons");
        test.done();
    },

    testUnitFormatWithUsageVehicleWeightShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ton",
            amount: 15
        });

        var uf = new UnitFmt({
            usage: "vehicleWeight",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "15 tn");
        test.done();
    },

    testUnitFormatWithUsageVehicleWeightScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "lbs",
            amount: 5230
        });

        var uf = new UnitFmt({
            usage: "vehicleWeight",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "2.615 tn");
        test.done();
    },

    testUnitFormatWithUsageVehicleWeightScaleMetric: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gram",
            amount: 3200000
        });

        var uf = new UnitFmt({
            usage: "vehicleWeight",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "3.2 t");
        test.done();
    },

    testUnitFormatWithUsageVehicleWeightConvert2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "lbs",
            amount: 5230
        });

        var uf = new UnitFmt({
            usage: "vehicleWeight",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "2.372 t");
        test.done();
    },

    testUnitFormatWithUsageVehicleWeightBR: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "metric ton",
            amount: 3.2
        });

        var uf = new UnitFmt({
            usage: "vehicleWeight",
            length: "long",
            locale: "pt-BR"
        });
        var str = uf.format(m1);
        test.equal(str, "3,2 toneladas métricas");
        test.done();
    },

    testUnitFormatWithUsageVehicleWeightTH: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "metric ton",
            amount: 3.45
        });

        var uf = new UnitFmt({
            usage: "vehicleWeight",
            length: "long",
            locale: "th-TH"
        });
        var str = uf.format(m1);
        test.equal(str, "3.45 เมตริกตัน");
        test.done();
    },

    testUnitFormatWithUsageDrugWeight: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "oz",
            amount: 1.2
        });

        var uf = new UnitFmt({
            usage: "drugWeight",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "1.2 ounces");
        test.done();
    },

    testUnitFormatWithUsageDrugWeightConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "g",
            amount: 80
        });

        var uf = new UnitFmt({
            usage: "drugWeight",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "2.82192 ounces");
        test.done();
    },

    testUnitFormatWithUsageDrugWeightShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ounce",
            amount: 2
        });

        var uf = new UnitFmt({
            usage: "drugWeight",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "2 oz");
        test.done();
    },

    testUnitFormatWithUsageDrugWeightScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "milligram",
            amount: 34019.4
        });

        var uf = new UnitFmt({
            usage: "drugWeight",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "1.2 oz");
        test.done();
    },

    testUnitFormatWithUsageDrugWeightScaleMetric: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "milligram",
            amount: 3200000
        });

        var uf = new UnitFmt({
            usage: "drugWeight",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "3200 g");
        test.done();
    },

    testUnitFormatWithUsageDrugWeightConvert2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ounce",
            amount: 1
        });

        var uf = new UnitFmt({
            usage: "drugWeight",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "28.3495 g");
        test.done();
    },

    testUnitFormatWithUsageDrugWeightHA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "milligram",
            amount: 800
        });

        var uf = new UnitFmt({
            usage: "drugWeight",
            length: "long",
            locale: "ha-NG"
        });
        var str = uf.format(m1);
        test.equal(str, "800 mg");
        test.done();
    },

    testUnitFormatWithUsageDrugWeightTA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "g",
            amount: 33.2
        });

        var uf = new UnitFmt({
            usage: "drugWeight",
            length: "long",
            locale: "ta-IN"
        });
        var str = uf.format(m1);
        test.equal(str, "௩௩.௨ ராம்கள்");
        test.done();
    },

    testUnitFormatWithUsageVehicleSpeed: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "mph",
            amount: 23
        });

        var uf = new UnitFmt({
            usage: "vehicleSpeed",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "23 miles per hour");
        test.done();
    },

    testUnitFormatWithUsageVehicleSpeedConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kph",
            amount: 80
        });

        var uf = new UnitFmt({
            usage: "vehicleSpeed",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "49.7 miles per hour");
        test.done();
    },

    testUnitFormatWithUsageVehicleSpeedShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "mph",
            amount: 23.23
        });

        var uf = new UnitFmt({
            usage: "vehicleSpeed",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "23.23 mph");
        test.done();
    },

    testUnitFormatWithUsageVehicleSpeedScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "f/s",
            amount: 10
        });

        var uf = new UnitFmt({
            usage: "vehicleSpeed",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "6.8 mph");
        test.done();
    },

    testUnitFormatWithUsageVehicleSpeedScaleMetric: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "m/s",
            amount: 5
        });

        var uf = new UnitFmt({
            usage: "vehicleSpeed",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "18 kph");
        test.done();
    },

    testUnitFormatWithUsageVehicleSpeedConvert2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "mph",
            amount: 50
        });

        var uf = new UnitFmt({
            usage: "vehicleSpeed",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "80.4 kph");
        test.done();
    },

    testUnitFormatWithUsageVehicleSpeedAU: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kph",
            amount: 120
        });

        var uf = new UnitFmt({
            usage: "vehicleSpeed",
            length: "long",
            locale: "en-AU"
        });
        var str = uf.format(m1);
        test.equal(str, "120 kilometres per hour");
        test.done();
    },

    testUnitFormatWithUsageVehicleSpeedBG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kph",
            amount: 33.2
        });

        var uf = new UnitFmt({
            usage: "vehicleSpeed",
            length: "long",
            locale: "bg-BG"
        });
        var str = uf.format(m1);
        test.equal(str, "33,2 километра в час");
        test.done();
    },

    testUnitFormatWithUsageNauticalSpeed: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "knots",
            amount: 23
        });

        var uf = new UnitFmt({
            usage: "nauticalSpeed",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "23 knots");
        test.done();
    },

    testUnitFormatWithUsageNauticalSpeedConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kph",
            amount: 80
        });

        var uf = new UnitFmt({
            usage: "nauticalSpeed",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "43.2 knots");
        test.done();
    },

    testUnitFormatWithUsageNauticalSpeedShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "knot",
            amount: 23.23
        });

        var uf = new UnitFmt({
            usage: "nauticalSpeed",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "23.2 kt");
        test.done();
    },

    testUnitFormatWithUsageNauticalSpeedScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "f/s",
            amount: 100
        });

        var uf = new UnitFmt({
            usage: "nauticalSpeed",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "59.2 kt");
        test.done();
    },

    testUnitFormatWithUsageNauticalSpeedScaleMetric: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "m/s",
            amount: 5
        });

        var uf = new UnitFmt({
            usage: "nauticalSpeed",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "18 kph");
        test.done();
    },

    testUnitFormatWithUsageNauticalSpeedConvert2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "knot",
            amount: 50
        });

        var uf = new UnitFmt({
            usage: "nauticalSpeed",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "92.6 kph");
        test.done();
    },

    testUnitFormatWithUsageNauticalSpeedID: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kph",
            amount: 120.23
        });

        var uf = new UnitFmt({
            usage: "nauticalSpeed",
            length: "long",
            locale: "id-ID"
        });
        var str = uf.format(m1);
        test.equal(str, "120,2 kilometer per jam");
        test.done();
    },

    testUnitFormatWithUsageNauticalSpeedES: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kph",
            amount: 33.2
        });

        var uf = new UnitFmt({
            usage: "nauticalSpeed",
            length: "long",
            locale: "es-ES"
        });
        var str = uf.format(m1);
        test.equal(str, "33,2 kilómetros por hora");
        test.done();
    },
    
    testUnitFormatWithUsageLiquidFoodVolume: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "tsp",
            amount: 3.2
        });

        var uf = new UnitFmt({
            usage: "liquidFoodVolume",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "3.2 teaspoons");
        test.done();
    },

    testUnitFormatWithUsageLiquidFoodVolumeConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 10
        });

        var uf = new UnitFmt({
            usage: "liquidFoodVolume",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "2 teaspoons");
        test.done();
    },

    testUnitFormatWithUsageLiquidFoodVolumeShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "tbsp",
            amount: 10
        });

        var uf = new UnitFmt({
            usage: "liquidFoodVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "10 tablespoons");
        test.done();
    },

    testUnitFormatWithUsageLiquidFoodVolumeScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "teaspoon",
            amount: 105
        });

        var uf = new UnitFmt({
            usage: "liquidFoodVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "2 cups 1 ounce 1.6 teaspoons");
        test.done();
    },

    testUnitFormatWithUsageLiquidFoodVolumeScaleMetric: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 1234
        });

        var uf = new UnitFmt({
            usage: "liquidFoodVolume",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "1 liter 234 milliliters");
        test.done();
    },

    testUnitFormatWithUsageLiquidFoodVolumeConvert2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cups",
            amount: 1.25
        });

        var uf = new UnitFmt({
            usage: "liquidFoodVolume",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "300 ml");
        test.done();
    },

    testUnitFormatWithUsageLiquidFoodVolumeGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial tsp",
            amount: 3.2
        });

        var uf = new UnitFmt({
            usage: "liquidFoodVolume",
            length: "long",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "3.2 imperial teaspoons");
        test.done();
    },

    testUnitFormatWithUsageLiquidFoodVolumeConvertGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 10
        });

        var uf = new UnitFmt({
            usage: "liquidFoodVolume",
            length: "long",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "1.7 imperial teaspoons");
        test.done();
    },

    testUnitFormatWithUsageLiquidFoodVolumeShortGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial tbsp",
            amount: 10,
            locale: "en-GB"
        });

        var uf = new UnitFmt({
            usage: "liquidFoodVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "10 tbsp (imp)");
        test.done();
    },

    testUnitFormatWithUsageLiquidFoodVolumeScaleGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial teaspoon",
            amount: 105,
            locale: "en-GB"
        });

        var uf = new UnitFmt({
            usage: "liquidFoodVolume",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "2 imperial cups 1 imperial fluid ounce 1 imperial 0.64 imperial teaspoons");
        test.done();
    },

    testUnitFormatWithUsageLiquidFoodVolumeConvertGB2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cups",
            amount: 1.25
        });

        var uf = new UnitFmt({
            usage: "liquidFoodVolume",
            length: "short",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "1.055852 cup (imp) 2.7 fl oz (imp)");
        test.done();
    },

    testUnitFormatWithUsageLiquidFoodVolumeKO: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 240.34
        });

        var uf = new UnitFmt({
            usage: "liquidFoodVolume",
            length: "long",
            locale: "ko-KR"
        });
        var str = uf.format(m1);
        test.equal(str, "240.34밀리리터");
        test.done();
    },

    testUnitFormatWithUsageLiquidFoodVolumeNL: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 330.2
        });

        var uf = new UnitFmt({
            usage: "liquidFoodVolume",
            length: "long",
            locale: "nl-NL"
        });
        var str = uf.format(m1);
        test.equal(str, "330,2 milliliter");
        test.done();
    },
    
    testUnitFormatWithUsageDryFoodVolume: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "tsp",
            amount: 3.2
        });

        var uf = new UnitFmt({
            usage: "dryFoodVolume",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "3.2 teaspoons");
        test.done();
    },

    testUnitFormatWithUsageDryFoodVolumeConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 10
        });

        var uf = new UnitFmt({
            usage: "dryFoodVolume",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "2 teaspoons");
        test.done();
    },

    testUnitFormatWithUsageDryFoodVolumeShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "tbsp",
            amount: 10
        });

        var uf = new UnitFmt({
            usage: "dryFoodVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "10 tablespoons");
        test.done();
    },

    testUnitFormatWithUsageDryFoodVolumeScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "teaspoon",
            amount: 105
        });

        var uf = new UnitFmt({
            usage: "dryFoodVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "2 cups 2 tablespoons 1.6 teaspoons");
        test.done();
    },

    testUnitFormatWithUsageDryFoodVolumeScaleMetric: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 1234
        });

        var uf = new UnitFmt({
            usage: "dryFoodVolume",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "1 liter 234 milliliters");
        test.done();
    },

    testUnitFormatWithUsageDryFoodVolumeConvert2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cups",
            amount: 1.25
        });

        var uf = new UnitFmt({
            usage: "dryFoodVolume",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "300 ml");
        test.done();
    },

    testUnitFormatWithUsageDryFoodVolumeGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial tsp",
            amount: 3.2
        });

        var uf = new UnitFmt({
            usage: "dryFoodVolume",
            length: "long",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "3.2 imperial teaspoons");
        test.done();
    },

    testUnitFormatWithUsageDryFoodVolumeConvertGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 10
        });

        var uf = new UnitFmt({
            usage: "dryFoodVolume",
            length: "long",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "1.7 imperial teaspoons");
        test.done();
    },

    testUnitFormatWithUsageDryFoodVolumeShortGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial tbsp",
            amount: 10,
            locale: "en-GB"
        });

        var uf = new UnitFmt({
            usage: "dryFoodVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "10 tbsp (imp)");
        test.done();
    },

    testUnitFormatWithUsageDryFoodVolumeScaleGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial teaspoon",
            amount: 105,
            locale: "en-GB"
        });

        var uf = new UnitFmt({
            usage: "dryFoodVolume",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "2 imperial cups 3 tablespoons");
        test.done();
    },

    testUnitFormatWithUsageDryFoodVolumeConvertGB2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cups",
            amount: 1.25
        });

        var uf = new UnitFmt({
            usage: "dryFoodVolume",
            length: "short",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "1 cup (imp) 2.7 tsp (imp)");
        test.done();
    },

    testUnitFormatWithUsageDryFoodVolumeKO: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 240.34
        });

        var uf = new UnitFmt({
            usage: "dryFoodVolume",
            length: "long",
            locale: "ko-KR"
        });
        var str = uf.format(m1);
        test.equal(str, "240.34밀리리터");
        test.done();
    },

    testUnitFormatWithUsageDryFoodVolumeNL: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 330.2
        });

        var uf = new UnitFmt({
            usage: "dryFoodVolume",
            length: "long",
            locale: "nl-NL"
        });
        var str = uf.format(m1);
        test.equal(str, "330,2 milliliter");
        test.done();
    },

    testUnitFormatWithUsageDrinkVolume: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "pint",
            amount: 3.2
        });

        var uf = new UnitFmt({
            usage: "drinkVolume",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "3.2 pints");
        test.done();
    },

    testUnitFormatWithUsageDrinkVolumeConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 330
        });

        var uf = new UnitFmt({
            usage: "drinkVolume",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "1.375 cups");
        test.done();
    },

    testUnitFormatWithUsageDrinkVolumeShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "pint",
            amount: 2.2
        });

        var uf = new UnitFmt({
            usage: "drinkVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "2.2 pnt");
        test.done();
    },

    testUnitFormatWithUsageDrinkVolumeScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cup",
            amount: 8
        });

        var uf = new UnitFmt({
            usage: "drinkVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "2 quarts 0.11 cups");
        test.done();
    },

    testUnitFormatWithUsageDrinkVolumeScaleMetric: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 1234
        });

        var uf = new UnitFmt({
            usage: "drinkVolume",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "1 liter 234 milliliters");
        test.done();
    },

    testUnitFormatWithUsageDrinkVolumeConvert2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cups",
            amount: 2.5
        });

        var uf = new UnitFmt({
            usage: "drinkVolume",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "600 ml");
        test.done();
    },

    testUnitFormatWithUsageDrinkVolumeGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial pint",
            amount: 2
        });

        var uf = new UnitFmt({
            usage: "drinkVolume",
            length: "long",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "2 imperial pints");
        test.done();
    },

    testUnitFormatWithUsageDrinkVolumeConvertGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 568.26125
        });

        var uf = new UnitFmt({
            usage: "drinkVolume",
            length: "long",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "1 pint");
        test.done();
    },

    testUnitFormatWithUsageDrinkVolumeShortGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial pint",
            amount: 2,
            locale: "en-GB"
        });

        var uf = new UnitFmt({
            usage: "drinkVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "2 pnt (imp)");
        test.done();
    },

    testUnitFormatWithUsageDrinkVolumeScaleGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial cups",
            amount: 5,
            locale: "en-GB"
        });

        var uf = new UnitFmt({
            usage: "drinkVolume",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "2 pints 1 cup");
        test.done();
    },

    testUnitFormatWithUsageDrinkVolumeConvertGB2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cups",
            amount: 5
        });

        var uf = new UnitFmt({
            usage: "drinkVolume",
            length: "short",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "2 pnt (imp) 0.22 cup (imp)");
        test.done();
    },

    testUnitFormatWithUsageDrinkVolumeKO: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 0.24034
        });

        var uf = new UnitFmt({
            usage: "drinkVolume",
            length: "long",
            locale: "ko-KR"
        });
        var str = uf.format(m1);
        test.equal(str, "240.34밀리리터");
        test.done();
    },

    testUnitFormatWithUsageDrinkVolumeNL: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 0.330
        });

        var uf = new UnitFmt({
            usage: "drinkVolume",
            length: "long",
            locale: "nl-NL"
        });
        var str = uf.format(m1);
        test.equal(str, "330,2 milliliter");
        test.done();
    },

    testUnitFormatWithUsageFuelVolume: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gallon",
            amount: 3
        });

        var uf = new UnitFmt({
            usage: "fuelVolume",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "3 gallons");
        test.done();
    },

    testUnitFormatWithUsageFuelVolumeConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 330
        });

        var uf = new UnitFmt({
            usage: "fuelVolume",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "87.1768 gallons");
        test.done();
    },

    testUnitFormatWithUsageFuelVolumeShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gallon",
            amount: 228.4
        });

        var uf = new UnitFmt({
            usage: "fuelVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "28.4 gal");
        test.done();
    },

    testUnitFormatWithUsageFuelVolumeScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cup",
            amount: 803
        });

        var uf = new UnitFmt({
            usage: "fuelVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "50.9112 gal");
        test.done();
    },

    testUnitFormatWithUsageFuelVolumeScaleMetric: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 12343
        });

        var uf = new UnitFmt({
            usage: "fuelVolume",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "12.343 L");
        test.done();
    },

    testUnitFormatWithUsageFuelVolumeConvert2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gallon",
            amount: 2.5
        });

        var uf = new UnitFmt({
            usage: "fuelVolume",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "9.46353 L");
        test.done();
    },

    testUnitFormatWithUsageFuelVolumeGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial gallon",
            amount: 2
        });

        var uf = new UnitFmt({
            usage: "fuelVolume",
            length: "long",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "2 imperial gallons");
        test.done();
    },

    testUnitFormatWithUsageFuelVolumeConvertGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 56
        });

        var uf = new UnitFmt({
            usage: "fuelVolume",
            length: "long",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "12.3183 imperial gallons");
        test.done();
    },

    testUnitFormatWithUsageFuelVolumeShortGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial gallon",
            amount: 2
        });

        var uf = new UnitFmt({
            usage: "fuelVolume",
            length: "short",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "2 gal (imp)");
        test.done();
    },

    testUnitFormatWithUsageFuelVolumeScaleGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "imperial quarts",
            amount: 50
        });

        var uf = new UnitFmt({
            usage: "fuelVolume",
            length: "long",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "12.5 imperial gallons");
        test.done();
    },

    testUnitFormatWithUsageFuelVolumeConvertGB2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gallon",
            amount: 5
        });

        var uf = new UnitFmt({
            usage: "fuelVolume",
            length: "short",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "4.16337 gal (imp)");
        test.done();
    },

    testUnitFormatWithUsageFuelVolumeSE: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 24.034
        });

        var uf = new UnitFmt({
            usage: "fuelVolume",
            length: "long",
            locale: "sv-SE"
        });
        var str = uf.format(m1);
        test.equal(str, "24,034 liter");
        test.done();
    },

    testUnitFormatWithUsageFuelVolumeUZ: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 330.2
        });

        var uf = new UnitFmt({
            usage: "fuelVolume",
            length: "long",
            locale: "uz-UZ"
        });
        var str = uf.format(m1);
        test.equal(str, "330,2 litr");
        test.done();
    },

    testUnitFormatWithUsageEngineVolume: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cubic inches",
            amount: 30
        });

        var uf = new UnitFmt({
            usage: "engineVolume",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "30 cubic inches");
        test.done();
    },

    testUnitFormatWithUsageEngineVolumeConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cc",
            amount: 330
        });

        var uf = new UnitFmt({
            usage: "engineVolume",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "20.1378 cubic inches");
        test.done();
    },

    testUnitFormatWithUsageEngineVolumeShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cubic inches",
            amount: 22.4
        });

        var uf = new UnitFmt({
            usage: "engineVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "22.4 in³");
        test.done();
    },

    testUnitFormatWithUsageEngineVolumeScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fluid ounce",
            amount: 30
        });

        var uf = new UnitFmt({
            usage: "engineVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "54.1406 in³");
        test.done();
    },

    testUnitFormatWithUsageEngineVolumeScaleMetric: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 12343
        });

        var uf = new UnitFmt({
            usage: "engineVolume",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "12,343 cc");
        test.done();
    },

    testUnitFormatWithUsageEngineVolumeConvert2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cubic inch",
            amount: 45.76781
        });

        var uf = new UnitFmt({
            usage: "engineVolume",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "750 cc");
        test.done();
    },

    testUnitFormatWithUsageEngineVolumeHU: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 250
        });

        var uf = new UnitFmt({
            usage: "engineVolume",
            length: "long",
            locale: "hu-HU"
        });
        var str = uf.format(m1);
        test.equal(str, "250 köbcentiméter");
        test.done();
    },

    testUnitFormatWithUsageEngineVolumeKM: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ml",
            amount: 330.2
        });

        var uf = new UnitFmt({
            usage: "engineVolume",
            length: "long",
            locale: "km-KH"
        });
        var str = uf.format(m1);
        test.equal(str, "330,2 សង់ទីម៉ែត្រគូប");
        test.done();
    },

    testUnitFormatWithUsageStorageVolume: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cubic foot",
            amount: 30
        });

        var uf = new UnitFmt({
            usage: "storageVolume",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "30 cubic feet");
        test.done();
    },

    testUnitFormatWithUsageStorageVolumeConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cc",
            amount: 33000
        });

        var uf = new UnitFmt({
            usage: "storageVolume",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "1 cubic foot 1.24 gallons");
        test.done();
    },

    testUnitFormatWithUsageStorageVolumeConvertGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cc",
            amount: 33000
        });

        var uf = new UnitFmt({
            usage: "storageVolume",
            length: "long",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "1 cubic foot 1.04 imperial gallons");
        test.done();
    },

    testUnitFormatWithUsageStorageVolumeShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cubic feet",
            amount: 22.4
        });

        var uf = new UnitFmt({
            usage: "storageVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "22.4 ft³");
        test.done();
    },

    testUnitFormatWithUsageStorageVolumeScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fluid ounce",
            amount: 1000
        });

        var uf = new UnitFmt({
            usage: "storageVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "1 ft³ 0.332 gal");
        test.done();
    },

    testUnitFormatWithUsageStorageVolumeScaleGB: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fluid ounce",
            amount: 1000
        });

        var uf = new UnitFmt({
            usage: "storageVolume",
            length: "short",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "1 ft³ 0.276 gal");
        test.done();
    },

    testUnitFormatWithUsageStorageVolumeScaleMetric: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 12343
        });

        var uf = new UnitFmt({
            usage: "storageVolume",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "12,343 m³");
        test.done();
    },

    testUnitFormatWithUsageStorageVolumeConvert2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 45.76781
        });

        var uf = new UnitFmt({
            usage: "storageVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "1 ft³ 4.41 gal");
        test.done();
    },

    testUnitFormatWithUsageStorageVolumeConvertGB2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 45.76781
        });

        var uf = new UnitFmt({
            usage: "storageVolume",
            length: "short",
            locale: "en-GB"
        });
        var str = uf.format(m1);
        test.equal(str, "1 ft³ 3.672 gal");
        test.done();
    },

    testUnitFormatWithUsageStorageVolumeCA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 2500
        });

        var uf = new UnitFmt({
            usage: "storageVolume",
            length: "long",
            locale: "fr-CA"
        });
        var str = uf.format(m1);
        test.equal(str, "2 mètres cubes 500 litres");
        test.done();
    },

    testUnitFormatWithUsageStorageVolumeBY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cubic meter",
            amount: 3.2
        });

        var uf = new UnitFmt({
            usage: "storageVolume",
            length: "long",
            locale: "be-BY"
        });
        var str = uf.format(m1);
        test.equal(str, "3 кубічныя метры 200 літра");
        test.done();
    },

    testUnitFormatWithUsageGasVolume: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cubic foot",
            amount: 30
        });

        var uf = new UnitFmt({
            usage: "gasVolume",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "30 cubic feet");
        test.done();
    },

    testUnitFormatWithUsageGasVolumeConvert: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cc",
            amount: 33000
        });

        var uf = new UnitFmt({
            usage: "gasVolume",
            length: "long"
        });
        var str = uf.format(m1);
        test.equal(str, "1.165 cubic foot");
        test.done();
    },

    testUnitFormatWithUsageGasVolumeShort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cubic feet",
            amount: 22.4
        });

        var uf = new UnitFmt({
            usage: "gasVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "22.4 ft³");
        test.done();
    },

    testUnitFormatWithUsageGasVolumeScale: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fluid ounce",
            amount: 1000
        });

        var uf = new UnitFmt({
            usage: "gasVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "1.044 ft³");
        test.done();
    },

    testUnitFormatWithUsageGasVolumeScaleMetric: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 12343
        });

        var uf = new UnitFmt({
            usage: "gasVolume",
            length: "short",
            measurementSystem: "metric"
        });
        var str = uf.format(m1);
        test.equal(str, "12.343 m³");
        test.done();
    },

    testUnitFormatWithUsageGasVolumeConvert2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 45.76781
        });

        var uf = new UnitFmt({
            usage: "gasVolume",
            length: "short"
        });
        var str = uf.format(m1);
        test.equal(str, "1.616 ft³");
        test.done();
    },

    testUnitFormatWithUsageGasVolumeCA: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 2500
        });

        var uf = new UnitFmt({
            usage: "gasVolume",
            length: "long",
            locale: "fr-CA"
        });
        var str = uf.format(m1);
        test.equal(str, "2,5 mètres cubes");
        test.done();
    },

    testUnitFormatWithUsageGasVolumeBY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cubic meter",
            amount: 3.2
        });

        var uf = new UnitFmt({
            usage: "gasVolume",
            length: "long",
            locale: "be-BY"
        });
        var str = uf.format(m1);
        test.equal(str, "3,2 кубічныя метры");
        test.done();
    }
};
