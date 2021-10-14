/*
 * testunits.js - test the units formatter object
 *
 * Copyright © 2014-2015, 2017-2018 JEDLSoft
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
if (typeof(MeasurementFactory) === "undefined") {
    var MeasurementFactory = require("../../lib/MeasurementFactory.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testunitfmt = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testUnitFormatGetLocaleDefault: function(test) {
        test.expect(2);
        var uf = new UnitFmt();
        test.ok(uf.getLocale());
        test.equal(uf.getLocale().getSpec(), "en-US");
        test.done();
    },

    testUnitFormatGetLocale: function(test) {
        test.expect(2);
        var uf = new UnitFmt({
            locale: "de-DE"
        });
        test.ok(uf.getLocale());
        test.equal(uf.getLocale().getSpec(), "de-DE");
        test.done();
    },

    testUnitFormatGetScaleDefault: function(test) {
        test.expect(1);
        var uf = new UnitFmt();
        test.ok(uf.getScale());
        test.done();
    },

    testUnitFormatGetScale: function(test) {
        test.expect(1);
        var uf = new UnitFmt({
            autoScale: false
        });
        test.ok(!uf.getScale());
        test.done();
    },

    testUnitFormatGetScaleBooleanOnly: function(test) {
        test.expect(1);
        var uf = new UnitFmt({
            autoScale: "false"
        });
        test.ok(uf.getScale());
        test.done();
    },

    testUnitFormat1: function(test) {
        test.expect(1);
        var m = MeasurementFactory({
            amount: 10,
            unit: "micrometer"
        });
        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m);
        test.equal(str, "10 micrometers");
        test.done();
    },

    testUnitFormatGetScaleDefault: function(test) {
        test.expect(1);
        var uf = new UnitFmt();
        test.ok(uf.getScale());
        test.done();
    },

    testUnitFormatWithScale1: function(test) {
        test.expect(1);
        var m = MeasurementFactory({
            amount: 3000,
            unit: "meter"
        });
        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m);
        test.equal(str, "3 kilometers");
        test.done();
    },

    testUnitFormatWithoutScale1: function(test) {
        test.expect(1);
        var m = MeasurementFactory({
            amount: 3000,
            unit: "meter"
        });
        var uf = new UnitFmt({autoScale: false, autoConvert:false});
        var str = uf.format(m);
        test.equal(str, "3,000 meters");
        test.done();
    },

    testUnitFormatWithScale2: function(test) {
        test.expect(1);
        var m = MeasurementFactory({
            unit: "bit",
            amount: 1024
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m);
        test.equal(str, "1 kilobit");
        test.done();
    },

    testUnitFormatWithoutScale2: function(test) {
        test.expect(1);
        var m = MeasurementFactory({
            unit: "bit",
            amount: 1048576000
        });

        var uf = new UnitFmt({autoScale: false,autoConvert:false});
        var str = uf.format(m);
        test.equal(str, "1,048,576,000 bits");
        test.done();
    },

    testUnitFormatWithScale3: function(test) {
        test.expect(1);
        var m = MeasurementFactory({
            unit: "mcg",
            amount: 10000000
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m);
        test.equal(str, "10 grams");
        test.done();
    },

    testUnitFormatWithoutScale3: function(test) {
        test.expect(1);
        var m = MeasurementFactory({
            unit: "mcg",
            amount: 10000000
        });

        var uf = new UnitFmt({autoScale: false,autoConvert:false});
        var str = uf.format(m);
        test.equal(str, "10,000,000 micrograms");
        test.done();
    },

    testUnitFormatWithMeasurementSystem3: function(test) {
        test.expect(1);
        var m = MeasurementFactory({
            unit: "mcg",
            amount: 10000000
        });

        var uf = new UnitFmt({
            autoScale: true,
            measurementSystem: "metric",
            autoConvert:false
        });
        var str = uf.format(m);
        test.equal(str, "10 grams");
        test.done();
    },

    testUnitFormatWithScale4: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 100
        });
        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "1 square kilometer");
        test.done();
    },

    testUnitFormatWithoutScale4: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 100
        });

        var uf = new UnitFmt({autoScale: false, autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "100 hectares");
        test.done();
    },

    testUnitFormatWithMeasurementSystem4: function(test) {
        test.expect(1);
        var m = MeasurementFactory({
            unit: "square meter",
            amount: 10000
        });

        var uf = new UnitFmt({
            autoScale: true,
            measurementSystem: "metric",
            autoConvert:false
        });
        var str = uf.format(m);
        test.equal(str, "1 hectare");
        test.done();
    },

    testUnitFormatWithScale5: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "watt hour",
            amount: 10000
        });
        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "10 kilowatt-hours");
        test.done();
    },

    testUnitFormatWithoutScale5: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilowatt hour",
            amount: 1233453
        });

        var uf = new UnitFmt({autoScale: false, autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "1,233,453 kilowatt-hours");
        test.done();
    },

    testUnitFormatWithMeasurementSystem5: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilowatt hour",
            amount: 1233453
        });

        var uf = new UnitFmt({
            autoScale: true,
            measurementSystem: "metric",
            autoConvert:false
        });
        var str = uf.format(m1);
        test.equal(str, "1.233453 gigawatt hours");
        test.done();
    },

    testUnitFormatWithScale6: function(test) {
        test.expect(1);
        var m = MeasurementFactory({
            unit: "km/h",
            amount: 6000
        });
        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m);
        test.equal(str, "1.666668 kilometers per second");
        test.done();
    },

    testUnitFormatWithoutScale6: function(test) {
        test.expect(1);
        var m = MeasurementFactory({
            unit: "km/h",
            amount: 36
        });

        var uf = new UnitFmt({autoScale: false, autoConvert:false});
        var str = uf.format(m);
        test.equal(str, "36 kilometers per hour");
        test.done();
    },

    testUnitFormatWithMeasurementSystem6: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "feet/sec",
            amount: 10
        });

        var uf = new UnitFmt({
            autoScale: true,
            measurementSystem: "imperial",
            autoConvert:false
        });
        var str = uf.format(m1);
        test.equal(str, "5.92484 knots");
        test.done();
    },

    testUnitFormatWithScale7: function(test) {
        test.expect(1);
        var m = MeasurementFactory({
            unit: "ms",
            amount: 12000
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m);
        test.equal(str, "12 seconds");
        test.done();
    },

    testUnitFormatWithoutScale7: function(test) {
        test.expect(1);
        var m = MeasurementFactory({
            unit: "ms",
            amount: 12000
        });

        var uf = new UnitFmt({autoScale: false,autoConvert:false});
        var str = uf.format(m);
        test.equal(str, "12,000 milliseconds");
        test.done();
    },

    testUnitFormatWithScale8: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "Milliliter",
            amount: 1500
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "1.5 liters");
        test.done();
    },

    testUnitFormatWithoutScale8: function(test) {
        test.expect(1);
        var m = MeasurementFactory({
            unit: "Milliliter",
            amount: 1500
        });

        var uf = new UnitFmt({autoScale: false,autoConvert:false});
        var str = uf.format(m);
        test.equal(str, "1,500 milliliters");
        test.done();
    },

    testUnitFormatWithMeasurementSystem8: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ounce",
            amount: 100
        });

        var uf = new UnitFmt({
            autoScale: true,
            measurementSystem: "imperial",
            autoConvert:false
        });
        var str = uf.format(m1);
        test.equal(str, "6.25 pounds");
        test.done();
    },

    testUnitFormatWithScale9: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount:5000
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "5,000 kilometers per liter");
        test.done();
    },

    testUnitFormatWithScale10: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kelvin",
            amount: 285.3
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "285.3 kelvins");
        test.done();
    },

    testUnitFormatWithScale11: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "krunghoonfoop",
            amount: 2
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 krunghoonfoop");
        test.done();
    },
    /*Area*/

    testUnitFormatArea1: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 2
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 square centimeters");
        test.done();
    },

    testUnitFormatArea2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 2
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 квадратных сантиметра");
        test.done();
    },

    testUnitFormatArea3: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 квадратных сантиметров");
        test.done();
    },

    testUnitFormatArea4: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "1,000제곱센티미터");
        test.done();
    },

    testUnitFormatArea5: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 centimètres carrés");

        test.done();
    },

    testUnitFormatArea5DE: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"de-DE",autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "1.000 Quadratzentimeter");
        test.done();
    },

    testUnitFormatArea6: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "acre",
            amount: 2
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 acres");
        test.done();
    },

    testUnitFormatArea7: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 2
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "2 квадратных сантиметра");
        test.done();
    },

    testUnitFormatArea8: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 гектаров");
        test.done();
    },

    testUnitFormatArea9: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square yard",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "1,000제곱야드");
        test.done();
    },

    testUnitFormatArea10: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square yard",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 yards carrés");
        test.done();
    },


    /*DigitalStorage*/
    testUnitFormatDigitalStorage1: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilobyte",
            amount: 2
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 kilobytes");
        test.done();
    },

    testUnitFormatDigitalStorage2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilobyte",
            amount: 2
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 килобайта");
        test.done();
    },

    testUnitFormatDigitalStorage4: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilobyte",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1,000킬로바이트");
        test.done();
    },

    testUnitFormatDigitalStorage5: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilobyte",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 kilooctets");
        test.done();
    },

    testUnitFormatDigitalStorage5DE: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilobyte",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"de-DE",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1.000 Kilobytes");
        test.done();
    },

    testUnitFormatDigitalStorage6: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gigabit",
            amount: 2
        });

        var uf = new UnitFmt({autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "2 gigabits");
        test.done();
    },

    testUnitFormatDigitalStorage7: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gigabit",
            amount: 2
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "2 гигабита");
        test.done();
    },

    testUnitFormatDigitalStorage8: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "bit",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 бит");
        test.done();
    },

    testUnitFormatDigitalStorage9: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gigabit",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1,000기가비트");
        test.done();
    },

    testUnitFormatDigitalStorage10: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gigabit",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 gigabits");;
        test.done();
    },


    testUnitFormatEnergy1: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "joule",
            amount: 2
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 joules");
        test.done();
    },

    testUnitFormatEnergy2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "joule",
            amount: 2
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 джоуля");
        test.done();
    },

    testUnitFormatEnergy3: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "joule",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:true});
        var str = uf.format(m1);
        test.equal(str, "1 килоджоуль");
        test.done();
    },

    testUnitFormatEnergy4: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "joule",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false,autoScale:true});
        var str = uf.format(m1);
        test.equal(str, "1킬로줄");
        test.done();
    },

    testUnitFormatEnergy5: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "joule",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 joules");
        test.done();
    },

    testUnitFormatEnergy6: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilowatt hour",
            amount: 2
        });

        var uf = new UnitFmt({autoConvert:false,autoScale:false,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "2 kWh");
        test.done();
    },

    testUnitFormatEnergy7: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilowatt hour",
            amount: 2
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "2 киловатт-часа");
        test.done();
    },

    testUnitFormatEnergy8: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "calorie",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 калорий");
        test.done();
    },

    testUnitFormatEnergy9: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gigabit",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1,000기가비트");
        test.done();
    },

    testUnitFormatEnergy10: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "joule",
            amount: 2000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:true});
        var str = uf.format(m1);
        test.equal(str, "2 kilojoules");;
        test.done();
    },


    testUnitFormatFuelConsumption1: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 2
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 kilometers per liter");
        test.done();
    },

    testUnitFormatFuelConsumption2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "mpg",
            amount: 2
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 мили на галлон");
        test.done();
    },

    testUnitFormatFuelConsumption3: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "mpg",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:true,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "0,235215 л/100 км");
        test.done();
    },

    testUnitFormatFuelConsumption4: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false,autoScale:true});
        var str = uf.format(m1);
        test.equal(str, "리터당 1,000킬로미터");
        test.done();
    },

    testUnitFormatFuelConsumption5: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "mpg",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 miles par gallon");
        test.done();
    },

    testUnitFormatFuelConsumption5DE: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "mpg",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"de-DE",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1.000 Meilen pro Gallone");
        test.done();
    },

    testUnitFormatLength1: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "inch",
            amount: 2
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 inches");
        test.done();
    },

    testUnitFormatLength2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "inch",
            amount: 2
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 дюйма");
        test.done();
    },

    testUnitFormatLength3: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:true,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "1 км");
        test.done();
    },

    testUnitFormatLength4: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false,autoScale:true});
        var str = uf.format(m1);
        test.equal(str, "1킬로미터");
        test.done();
    },

    testUnitFormatLength5: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 mètres");
        test.done();
    },

    testUnitFormatLength5DE: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 1234.45
        });

        var uf = new UnitFmt({locale:"de-DE",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1.234,45 Meter");
        test.done();
    },

    testUnitFormatLength6: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "mile",
            amount: 2000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:true,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "3,21868 Mm");
        test.done();
    },

    testUnitFormatLength7: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "mile",
            amount: 2
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "2 мили");
        test.done();
    },

    testUnitFormatLength8: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "centimeter",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 сантиметров");
        test.done();
    },

    testUnitFormatLength9: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "centimeter",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1,000센티미터");
        test.done();
    },

    testUnitFormatLength10: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "centimeter",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 centimètres");
        test.done();
    },

    testUnitFormatMass1: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "microgram",
            amount: 2
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 micrograms");
        test.done();
    },

    testUnitFormatMass2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "microgram",
            amount: 2
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 микрограмма");
        test.done();
    },

    testUnitFormatMass3: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "microgram",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:true,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "1 мг");
        test.done();
    },

    testUnitFormatMass4: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "microgram",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false,autoScale:true});
        var str = uf.format(m1);
        test.equal(str, "1밀리그램");
        test.done();
    },

    testUnitFormatMass5: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "microgram",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 microgrammes");
        test.done();
    },

    testUnitFormatMass6: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "pound",
            amount: 2000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "2 000 lb");
        test.done();
    },

    testUnitFormatMass5DE: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "microgram",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"de-DE",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1.000 Mikrogramm");
        test.done();
    },

    testUnitFormatMass6DE: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "pound",
            amount: 2000
        });

        var uf = new UnitFmt({locale:"de-DE",autoConvert:false,autoScale:false,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "2.000 lb");
        test.done();
    },

    testUnitFormatMass7: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "stone",
            amount: 2
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "2 стоуна");
        test.done();
    },

    testUnitFormatMass8: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "metric ton",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 тонн");
        test.done();
    },

    testUnitFormatMass9: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "metric ton",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1,000메트릭 톤");
        test.done();
    },

    testUnitFormatMass10: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gram",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:true});
        var str = uf.format(m1);
        test.equal(str, "1 kilogramme");
        test.done();
    },


    testUnitFormatSpeed1: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilometer/hour",
            amount: 2
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 kilometers per hour");
        test.done();
    },

    testUnitFormatSpeed2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilometer/hour",
            amount: 2
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 километра в час");
        test.done();
    },

    testUnitFormatSpeed3: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilometer/hour",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:true,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "277,778 м/с");
        test.done();
    },

    testUnitFormatSpeed4: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "feet/second",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "초당 1,000피트");
        test.done();
    },

    testUnitFormatSpeed5: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "miles/hour",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 miles par heure");
        test.done();
    },

    testUnitFormatSpeed5DE: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "miles/hour",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"de-DE",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1.000 Meilen pro Stunde");
        test.done();
    },

    testUnitFormatSpeed6: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meters/second",
            amount: 2000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:true,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "2 km/s");
        test.done();
    },

    testUnitFormatSpeed7: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "miles/hour",
            amount: 2
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "2 мили в час");
        test.done();
    },

    testUnitFormatSpeed8: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "knot",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "1 000 уз");
        test.done();
    },

    testUnitFormatSpeed9: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "miles/hour",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "시속 1,000마일");
        test.done();
    },

    testUnitFormatSpeed10: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "miles/hour",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:true,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "447,03924652 m/s");
        test.done();
    },

    testUnitFormatSpeed10DE: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "miles/hour",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"de-DE",autoConvert:true,autoScale:true,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "447,03924652 m/s");
        test.done();
    },

    testUnitFormatTemperature1: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "celsius",
            amount: 2
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 degrees Celsius");
        test.done();
    },

    testUnitFormatTemperature1a: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "celsius",
            amount: 2
        });

        var uf = new UnitFmt({locale:"en-AU"});
        var str = uf.format(m1);
        test.equal(str, "2 degrees Celsius");
        test.done();
    },

    testUnitFormatTemperature2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "Celsius",
            amount: 2
        });

        var uf = new UnitFmt({autoConvert:false,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "2°C");
        test.done();
    },

    testUnitFormatTemperature3: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "Celsius",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:true,length:"long"});
        var str = uf.format(m1);
        test.equal(str, "1 000 градусов Цельсия");
        test.done();
    },

    testUnitFormatTemperature4: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kelvin",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1,000켈빈");
        test.done();
    },

    testUnitFormatTemperature5: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kelvin",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"en-US",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1,000 kelvins");
        test.done();
    },

    testUnitFormatTemperature6: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:true,length:"short",maxFractionDigits: 9});
        var str = uf.format(m1);

        test.equal(str, "1 093,333333333 °C");
        test.done();
    },

    testUnitFormatTemperature7: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 2
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "2 °F");
        test.done();
    },

    testUnitFormatTemperature8: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kelvin",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "1 000 K");
        test.done();
    },

    testUnitFormatTemperature9: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "화씨 1,000도");
        test.done();
    },
    testUnitFormatTemperatureKR: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:true,autoScale:false, length:"short", maxFractionDigits: 2});
        var str = uf.format(m1);
        test.equal(str, "537.78°C");
        test.done();
    },
    testUnitFormatTemperatureKR2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:true,autoScale:false, length:"long"});
        var str = uf.format(m1);
        test.equal(str, "섭씨 537.7777777777778도");
        test.done();
    },

    testUnitFormatTemperature10: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "celsius",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"fr-FR",length:"long"});
        var str = uf.format(m1);
        test.equal(str, "1 000 degrés Celsius");
        test.done();
    },

    testUnitFormatTime1: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "nanosecond",
            amount: 2
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 nanoseconds");
        test.done();
    },

    testUnitFormatTime2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "nanoseconds",
            amount: 2
        });

        var uf = new UnitFmt({autoConvert:false,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "2 ns");
        test.done();
    },

    testUnitFormatTime3: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "nanoseconds",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:true,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "1 мкс");
        test.done();
    },

    testUnitFormatTime4: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "millisecond",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1,000밀리초");
        test.done();
    },

    testUnitFormatTime5: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "millisecond",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 millisecondes");
        test.done();
    },

    testUnitFormatTime6: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "week",
            amount: 2000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:true,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "3,83308 décennies");
        test.done();
    },

    testUnitFormatTime7: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "year",
            amount: 2
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "2 г.");
        test.done();
    },

    testUnitFormatTime8: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "minute",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "1 000 мин.");
        test.done();
    },

    testUnitFormatTime9: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "minute",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1,000분");
        test.done();
    },

    testUnitFormatTime10: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "month",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"fr-FR",length:"long",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 mois");
        test.done();
    },

    testUnitFormatVolume1: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "tsp",
            amount: 2
        });

        var uf = new UnitFmt({autoConvert:false});
        var str = uf.format(m1);
        test.equal(str, "2 teaspoons");
        test.done();
    },

    testUnitFormatVolume2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "tsp",
            amount: 2
        });

        var uf = new UnitFmt({autoConvert:false,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "2 tsp");
        test.done();
    },

    testUnitFormatVolume3: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "ounce",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "1 000 унц.");
        test.done();
    },

    testUnitFormatVolume4: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "millisecond",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1,000밀리초");
        test.done();
    },

    testUnitFormatVolume5: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1 000 litres");
        test.done();
    },

    testUnitFormatVolume6: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "liter",
            amount: 2000
        });

        var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:true,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "2 m³");
        test.done();
    },

    testUnitFormatVolume7: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gallon",
            amount: 1
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false,length:"long"});
        var str = uf.format(m1);
        test.equal(str, "1 галлон");
        test.done();
    },

    testUnitFormatVolume8: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "gallon",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false,length:"short"});
        var str = uf.format(m1);
        test.equal(str, "1 000 гал.");
        test.done();
    },

    testUnitFormatVolume9: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cubic foot",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"ko-KR",autoConvert:false,autoScale:false});
        var str = uf.format(m1);
        test.equal(str, "1,000세제곱피트");
        test.done();
    },

    testUnitFormatVolume10: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cubic foot",
            amount: 1000
        });

        var uf = new UnitFmt({locale:"fr-FR",length:"long"});
        var str = uf.format(m1);
        test.equal(str, "28,3168 mètres cubes");
        test.done();
    },

    testUnitFormatVolume11: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cubic foot",
            amount: 1000
        });

        var uf = new UnitFmt({length:"long"});
        var str = uf.format(m1);
        test.equal(str, "1,000 cubic feet");
        test.done();
    },

    testUnitFormatVolume12: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cubic foot",
            amount: 1000
        });

        var uf = new UnitFmt({length:"short"});
        var str = uf.format(m1);
        test.equal(str, "1,000 ft³");
        test.done();
    },

    testUnitFormatArea11: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 1000
        });

        var uf = new UnitFmt({length:"long",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000 square centimeters");
        test.done();
    },

    testUnitFormatArea12: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "square centimeter",
            amount: 1000
        });

        var uf = new UnitFmt({length:"short",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000 cm²");
        test.done();
    },

    testUnitFormatDigitalStorage11: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilobyte",
            amount: 1000
        });

        var uf = new UnitFmt({length:"long",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000 kilobytes");
        test.done();
    },

    testUnitFormatDigitalStorage12: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilobyte",
            amount: 1000
        });

        var uf = new UnitFmt({length:"short",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000 kB");
        test.done();
    },

    testUnitFormatDigitalSpeed1: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilobyte/h",
            amount: 1000
        });

        var uf = new UnitFmt({length:"long",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000 kilobytes per hour");
        test.done();
    },

    testUnitFormatDigitalSpeed2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilobyte/h",
            amount: 1000
        });

        var uf = new UnitFmt({length:"short",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000 kB/h");
        test.done();
    },

    testUnitFormatDigitalSpeed3: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "megabyte/s",
            amount: 1000
        });

        var uf = new UnitFmt({locale: "fr-FR",length:"long",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1 000 mégaoctets par seconde");
        test.done();
    },

    testUnitFormatDigitalSpeed3short: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "megabyte/s",
            amount: 1000
        });

        var uf = new UnitFmt({locale: "fr-FR",length:"short",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1 000 Mo/s");
        test.done();
    },

    testUnitFormatDigitalSpeed4: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "megabyte/s",
            amount: 1000
        });

        var uf = new UnitFmt({locale: "zh-Hans-CN",length:"long",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000兆字节/秒");
        test.done();
    },
    testUnitFormatDigitalSpeed5: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "megabyte/s",
            amount: 1000
        });

        var uf = new UnitFmt({locale: "be-BY",length:"long",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1 000 мегабайта у секунду");
        test.done();
    },
    testUnitFormatDigitalSpeed6: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "megabyte/s",
            amount: 1000
        });

        var uf = new UnitFmt({locale: "be-BY",length:"short",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1 000 МБ/с");
        test.done();
    },

    testUnitFormatEnergy11: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilowatt hour",
            amount: 1000
        });

        var uf = new UnitFmt({length:"long",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000 kilowatt-hours");
        test.done();
    },

    testUnitFormatEnergy12: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilowatt hour",
            amount: 1000
        });

        var uf = new UnitFmt({length:"short",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000 kWh");
        test.done();
    },

    testUnitFormatFuelConsumption11: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 1000
        });

        var uf = new UnitFmt({length:"long",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000 kilometers per liter");
        test.done();
    },

    testUnitFormatFuelConsumption12: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km/liter",
            amount: 1000
        });

        var uf = new UnitFmt({length:"short",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000 km/L");
        test.done();
    },
    testUnitFormatLength11: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "decimeter",
            amount: 1000
        });

        var uf = new UnitFmt({length:"long",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000 decimeters");
        test.done();
    },

    testUnitFormatLength12: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "decimeter",
            amount: 1000
        });

        var uf = new UnitFmt({length:"short",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000 dm");
        test.done();
    },
    testUnitFormatSpeed11: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilometer/second",
            amount: 1000
        });

        var uf = new UnitFmt({length:"long",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000 kilometers per second");
        test.done();
    },

    testUnitFormatSpeed12: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kilometer/second",
            amount: 1000
        });

        var uf = new UnitFmt({length:"short",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000 km/s");
        test.done();
    },
    testUnitFormatTemperature11: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 1000
        });

        var uf = new UnitFmt({length:"long",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000 degrees Fahrenheit");
        test.done();
    },

    testUnitFormatTemperature12: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fahrenheit",
            amount: 1000
        });

        var uf = new UnitFmt({length:"short",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000°F");
        test.done();
    },
    testUnitFormatTime11: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "millisecond",
            amount: 1000
        });

        var uf = new UnitFmt({length:"long",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000 milliseconds");
        test.done();
    },

    testUnitFormatTime12: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "millisecond",
            amount: 1000
        });

        var uf = new UnitFmt({length:"short",autoConvert:false,autoScale: false});
        var str = uf.format(m1);
        test.equal(str, "1,000 ms");
        test.done();
    },

    testUnitFormatLength13: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 12345000000000000000000000000.0
        });

        var uf = new UnitFmt({
            length:"short",
            autoConvert:false,
            autoScale: false,
            maxFractionDigits: 3,
            roundingMode: "halfdown"
        });
        var str = uf.format(m1);
        test.equal(str, "1.2345e+28 km");
        test.done();
    },

    testUnitFormatLength14: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "km",
            amount: 1.7453
        });

        var uf = new UnitFmt({
            length:"short",
            autoConvert:false,
            autoScale: false,
            maxFractionDigits: 2
        });
        var str = uf.format(m1);
        test.equal(str, "1.75 km");
        test.done();
    },

    testUnitFormatLength15: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "m",
            amount: 1.74475
        });

        var uf = new UnitFmt({
            autoConvert:false,
            autoScale: false,
        maxFractionDigits: 2,
        roundingMode: "up"
        });
        var str = uf.format(m1);
        test.equal(str, "1.75 meters");
        test.done();
    },

    testUnitFormatLength16: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "m",
            amount: 1.74475
        });

        var uf = new UnitFmt({
            autoConvert:false,
            autoScale: false,
            maxFractionDigits: 2,
        roundingMode: "down"
        });
        var str = uf.format(m1);
        test.equal(str, "1.74 meters");
        test.done();
    },

    testUnitFormatLength17: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "m",
            amount: 1.74475
        });

        var uf = new UnitFmt({
            autoConvert:false,
            autoScale: false,
            minFractionDigits: 3,
        maxFractionDigits: 3
        });
        var str = uf.format(m1);
        test.equal(str, "1.745 meters");
        test.done();
    },

    testUnitFormatUseNativeFalse: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cm",
            amount: 1000
        });

        var uf = new UnitFmt({autoScale:false,locale: "bn-IN",useNative:false});
        var str = uf.format(m1);
        test.equal(str, "1,000 সেন্টিমিটার");
        test.done();
    },

    testUnitFormatUseNativeTrue: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cm",
            amount: 1000
        });

        var uf = new UnitFmt({autoScale:false,locale: "bn-IN",useNative:true});
        var str = uf.format(m1);
        test.equal(str, "১,০০০ সেন্টিমিটার");
        test.done();
    },

    testUnitFormatUseNativeDefault: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cm",
            amount: 1000
        });

        var uf = new UnitFmt({autoScale:false,locale: "bn-IN"});
        var str = uf.format(m1);
        test.equal(str, "১,০০০ সেন্টিমিটার");
        test.done();
    },

    /*Zh units*/


    testUnitFormatzhHansCN: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cm",
            amount: 1000
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hans-CN",useNative:true});
        var str = uf.format(m1);
        test.equal(str, "一,〇〇〇厘米");
        test.done();
    },

    testUnitFormatUseNativezhHansHK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cm",
            amount: 1000
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hans-HK"});
        var str = uf.format(m1);
        test.equal(str, "1,000厘米");
        test.done();
    },


    testUnitFormatzhHansSG: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cm",
            amount: 1000
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hans-SG",useNative:true});
        var str = uf.format(m1);
        test.equal(str, "一,〇〇〇厘米");
        test.done();
    },

    testUnitFormatUseNativezhHansMO: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cm",
            amount: 1000
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hans-MO"});
        var str = uf.format(m1);
        test.equal(str, "1,000厘米");
        test.done();
    },

    testUnitFormatzhHantHK: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cm",
            amount: 1000
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hant-HK",useNative:true});
        var str = uf.format(m1);
        test.equal(str, "一,〇〇〇 厘米");
        test.done();
    },

    testUnitFormatUseNativezhHantMO: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cm",
            amount: 1000
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hant-MO"});
        var str = uf.format(m1);
        test.equal(str, "1,000 厘米");
        test.done();
    },


    testUnitFormatzhHantMY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cm",
            amount: 1000
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hant-MY",useNative:true});
        var str = uf.format(m1);
        test.equal(str, "一,〇〇〇 公分");
        test.done();
    },

    testUnitFormatUseNativezhHantTW: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cm",
            amount: 1000
        });

        var uf = new UnitFmt({
            autoScale:false,
            locale: "zh-Hant-TW"
        });
        var str = uf.format(m1);
        test.equal(str, "1,000 公分");
        test.done();
    },

    testUnitFormatUseNativezhHantUS: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "cm",
            amount: 1000
        });

        var uf = new UnitFmt({
            autoScale: false,
            autoConvert: false,
            locale: "zh-Hant-US"
        });
        var str = uf.format(m1);
        test.equal(str, "1,000 公分");
        test.done();
    },

    /*Kelvin*/


    testUnitFormatzhHansCNKelvin: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
               unit: "kelvin",
               amount: 285.3
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hans-CN",useNative:true});
        var str = uf.format(m1);
        test.equal(str, "二八五.三开尔文");
        test.done();
    },

    testUnitFormatUseNativezhHansHKKelvin: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kelvin",
            amount: 285.3
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hans-HK"});
        var str = uf.format(m1);
        test.equal(str, "285.3开氏度");
        test.done();
    },


    testUnitFormatzhHansSGKelvin: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kelvin",
            amount: 285.3
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hans-SG",useNative:true});
        var str = uf.format(m1);
        test.equal(str, "二八五.三开氏度");
        test.done();
    },

    testUnitFormatUseNativezhHansMOKelvin: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kelvin",
            amount: 285.3
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hans-MO"});
        var str = uf.format(m1);
        test.equal(str, "285.3开氏度");
        test.done();
    },

    testUnitFormatzhHantHKKelvin: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kelvin",
            amount: 285.3
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hant-HK",useNative:true});
        var str = uf.format(m1);
        test.equal(str, "二八五.三 開爾文");
        test.done();
    },

    testUnitFormatUseNativezhHantMOKelvin: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kelvin",
            amount: 285.3
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hant-MO"});
        var str = uf.format(m1);
        test.equal(str, "285.3 開爾文");
        test.done();
    },


    testUnitFormatzhHantMYKelvin: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kelvin",
            amount: 285.3
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hant-MY",useNative:true});
        var str = uf.format(m1);
        test.equal(str, "二八五.三 克耳文");
        test.done();
    },

    testUnitFormatUseNativezhHantTWKelvin: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kelvin",
            amount: 285.3
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hant-TW"});
        var str = uf.format(m1);
        test.equal(str, "285.3 克耳文");
        test.done();
    },

    testUnitFormatUseNativezhHantUSKelvin: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "kelvin",
            amount: 285.3
        });

        // should convert to fahrenheit because it's in the US
        var uf = new UnitFmt({
            autoScale:false,
            locale: "zh-Hant-US",
            maxFractionDigits: 4
        });
        var str = uf.format(m1);
        test.equal(str, "華氏 53.87 度");
        test.done();
    },

    /*hectare*/

    testUnitFormatzhHansCNHectare: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 100
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hans-CN",useNative:true});
        var str = uf.format(m1);
        test.equal(str, "一〇〇公顷");
        test.done();
    },

    testUnitFormatzhHansHKHectare: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 100
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hans-HK"});
        var str = uf.format(m1);
        test.equal(str, "100公顷");
        test.done();
    },


    testUnitFormatzhHansSGHectare: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 100
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hans-SG",useNative:true});
        var str = uf.format(m1);
        test.equal(str, "一〇〇公顷");
        test.done();
    },

    testUnitFormatUseNativezhHansMOHectare: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 100
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hans-MO"});
        var str = uf.format(m1);
        test.equal(str, "100公顷");
        test.done();
    },

    testUnitFormatzhHantHKHectare: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 100
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hant-HK",useNative:true});
        var str = uf.format(m1);
        test.equal(str, "一〇〇 公頃");
        test.done();
    },

    testUnitFormatUsezhHantMOHectare: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 100
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hant-MO"});
        var str = uf.format(m1);
        test.equal(str, "100 公頃");
        test.done();
    },


    testUnitFormatUsezhHantMOHectare: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 100
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hant-MY"});
        var str = uf.format(m1);
        test.equal(str, "100 公頃");
        test.done();
    },

    testUnitFormatUseNativezhHantTWHectare: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 100
        });

        var uf = new UnitFmt({autoScale:false,locale: "zh-Hant-TW"});
        var str = uf.format(m1);
        test.equal(str, "100 公頃");
        test.done();
    },

    testUnitFormatUseNativezhHantUSHectare: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "hectare",
            amount: 100
        });

        var uf = new UnitFmt({
            autoScale: false,
            autoConvert: false,
            locale: "zh-Hant-US"
        });
        var str = uf.format(m1);
        test.equal(str, "100 公頃");
        test.done();
    },

    testUnitFormatWithNumericStyleUS: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "feet",
            amount: 6.2
        });

        var uf = new UnitFmt({
            autoScale: false,
            style: "numeric",
            length: "long",
            locale: "en-US"
        });
        var str = uf.format(m1);
        test.equal(str, "6.2 feet");
        test.done();
    },

    testUnitFormatWithListStyleUS: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "feet",
            amount: 6.2
        });

        var uf = new UnitFmt({
            autoScale: false,
            style: "list",
            length: "long",
            locale: "en-US",
            maxFractionDigits: 4
        });
        var str = uf.format(m1);
        test.equal(str, "6 feet, 2.4 inches");
        test.done();
    },

    testUnitFormatWithNumericStyleUSshort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "feet",
            amount: 6.2
        });

        var uf = new UnitFmt({
            autoScale: false,
            style: "numeric",
            length: "short",
            locale: "en-US",
            maxFractionDigits: 4
        });
        var str = uf.format(m1);
        test.equal(str, "6.2 ft");
        test.done();
    },

    testUnitFormatWithListStyleUSshort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "feet",
            amount: 6.2
        });

        var uf = new UnitFmt({
            autoScale: false,
            style: "list",
            length: "short",
            locale: "en-US",
            maxFractionDigits: 4
        });
        var str = uf.format(m1);
        test.equal(str, "6 ft, 2.4 in");
        test.done();
    },

    testUnitFormatWithListStyleUS2: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "fluid ounces",
            amount: 143
        });

        var uf = new UnitFmt({
            autoScale: true,
            style: "list",
            length: "long",
            locale: "en-US"
        });
        var str = uf.format(m1);
        test.equal(str, "1 gallon, 1 cup, 7 fluid ounces");
        test.done();
    },

    testUnitFormatWithNumericStyleDE: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 1.865
        });

        var uf = new UnitFmt({
            autoScale: false,
            style: "numeric",
            length: "long",
            locale: "de-DE"
        });
        var str = uf.format(m1);
        test.equal(str, "1,865 Meter");
        test.done();
    },

    testUnitFormatWithListStyleDE: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 1.865
        });

        var uf = new UnitFmt({
            autoScale: false,
            style: "list",
            length: "long",
            locale: "de-DE"
        });
        var str = uf.format(m1);
        test.equal(str, "1 Meter, 8 Dezimeter, 6 Zentimeter und 5 Millimeter");
        test.done();
    },

    testUnitFormatWithNumericStyleDEshort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 1.865
        });

        var uf = new UnitFmt({
            autoScale: false,
            style: "numeric",
            length: "short",
            locale: "de-DE"
        });
        var str = uf.format(m1);
        test.equal(str, "1,865 m");
        test.done();
    },

    testUnitFormatWithListStyleDEshort: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "meter",
            amount: 1.865
        });

        var uf = new UnitFmt({
            autoScale: false,
            style: "list",
            length: "short",
            locale: "de-DE"
        });
        var str = uf.format(m1);
        test.equal(str, "1 m, 8 dm, 6 cm und 5 mm");
        test.done();
    },
    testUnitFormatWithNumericStyleShortMY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "feet",
            amount: 6.2
        });

        var uf = new UnitFmt({
            autoScale: false,
            style: "numeric",
            length: "short",
            locale: "ms-MY"
        });
        var str = uf.format(m1);
        test.equal(str, "188.9759938 cm");
        test.done();
    },
    testUnitFormatWithNumericStyleLongMY: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "feet",
            amount: 6.2
        });

        var uf = new UnitFmt({
            autoScale: false,
            style: "numeric",
            length: "long",
            locale: "ms-MY"
        });
        var str = uf.format(m1);
        test.equal(str, "188.9759938 sentimeter");
        test.done();
    },
    testUnitFormatWithNumericStyleShortteIN: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "feet",
            amount: 6.2
        });

        var uf = new UnitFmt({
            autoScale: false,
            style: "numeric",
            length: "short",
            locale: "te-IN"
        });
        var str = uf.format(m1);
        test.equal(str, "188.9759938 సెం.మీ.");
        test.done();
    },
    testUnitFormatWithNumericStyleLongteIN: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "feet",
            amount: 6.2
        });

        var uf = new UnitFmt({
            autoScale: false,
            style: "numeric",
            length: "long",
            locale: "te-IN"
        });
        var str = uf.format(m1);
        test.equal(str, "188.9759938 సెంటీమీటర్లు");
        test.done();
    },
    testUnitFormatWithNumericStyleShortamET: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "feet",
            amount: 6.2
        });

        var uf = new UnitFmt({
            autoScale: false,
            style: "numeric",
            length: "short",
            locale: "am-ET"
        });
        var str = uf.format(m1);
        test.equal(str, "188.9759938 ሴሜ");
        test.done();
    },
    testUnitFormatWithNumericStyleLongamET: function(test) {
        test.expect(1);
        var m1 = MeasurementFactory({
            unit: "feet",
            amount: 6.2
        });

        var uf = new UnitFmt({
            autoScale: false,
            style: "numeric",
            length: "long",
            locale: "am-ET"
        });
        var str = uf.format(m1);
        test.equal(str, "188.9759938 ሴንቲሜትር");
        test.done();
    },
};
