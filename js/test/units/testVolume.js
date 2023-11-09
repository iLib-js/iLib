/*
 * testvolumes.js - test the volumes object
 *
 * Copyright © 2014-2015,2017, 2021 JEDLSoft
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

if (typeof(VolumeUnit) === "undefined") {
    var VolumeUnit = require("../../lib/VolumeUnit.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testVolume = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testVolumeVolumeConstructor: function(test) {
        test.expect(1);
        var m = new VolumeUnit({
            unit: "m3",
            amount: 2
        });

        test.ok(m !== null);
        test.done();
    },
    testVolumeVolumeConvertGallontoQuart: function(test) {
        test.expect(3);
        var m1 = new VolumeUnit({
            unit: "gallon",
            amount: 5000
        });
        var m2 = new VolumeUnit({
            unit: "quart",
            amount: m1
        });

        test.ok(m1 !== null);
        test.ok(m2 !== null);

        test.equal(m2.getAmount(), 20000);
        test.done();
    },
    testVolumeStaticConvert1: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("quart", "gallon", 2.0);

        test.equal(m, 8);
        test.done();
    },
    testVolumeStaticConvert2: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("pint", "gallon", 2.0);

        test.equal(m, 16);
        test.done();
    },
    testVolumeStaticConvert3: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cup", "gallon", 2.0);

        test.equal(m, 32);
        test.done();
    },
    testVolumeStaticConvert4: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("us ounce", "gallon", 2.0);

        test.equal(m, 256);
        test.done();
    },
    testVolumeStaticConvert5: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("tbsp", "gallon", 2.0);

        test.equal(m, 512);
        test.done();
    },
    testVolumeStaticConvert6: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("tsp", "gallon", 2.0);

        test.equal(m, 1536);
        test.done();
    },
    testVolumeStaticConvert7: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic meter", "gallon", 2.0);

        test.roughlyEqual(m, 0.00757082, 0.0001);
        test.done();
    },
    testVolumeStaticConvert8: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("liter", "gallon", 2.0);

        test.roughlyEqual(m, 7.57082, 0.0001);
        test.done();
    },
    testVolumeStaticConvert9: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("milliliter", "gallon", 2.0);

        test.roughlyEqual(m, 7570.82, 0.01);
        test.done();
    },
    testVolumeStaticConvert10: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial gallon", "gallon", 2.0);

        test.roughlyEqual(m, 1.66535, 0.0001);
        test.done();
    },
    testVolumeStaticConvert11: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial quart", "gallon", 2.0);

        test.roughlyEqual(m, 6.66139, 0.001);
        test.done();
    },
    testVolumeStaticConvert12: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial pint", "gallon", 2.0);

        test.roughlyEqual(m, 13.3228, 0.001);
        test.done();
    },
    testVolumeStaticConvert13: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial ounce", "gallon", 2.0);

        test.roughlyEqual(m, 266.456, 0.01);
        test.done();
    },
    testVolumeStaticConvert14: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial tbsp", "gallon", 2.0);

        test.roughlyEqual(m, 426.329, 0.01);
        test.done();
    },
    testVolumeStaticConvert15: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial tsp", "gallon", 2.0);

        test.roughlyEqual(m, 1278.99, 0.01);
        test.done();
    },
    testVolumeStaticConvert16: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic foot", "gallon", 2.0);

        test.roughlyEqual(m, 0.267361, 0.0001);
        test.done();
    },
    testVolumeStaticConvert17: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic inch", "gallon", 2.0);

        test.equal(m, 462);
        test.done();
    },
    testVolumeStaticConvert18: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("in^3", "gallon", 2.0);

        test.equal(m, 462);
        test.done();
    },
    testVolumeStaticConvert19: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("gallon", "quart", 2.0);

        test.equal(m, 0.5);
        test.done();
    },
    testVolumeStaticConvert20: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("pint", "quart", 2.0);

        test.equal(m, 4);
        test.done();
    },
    testVolumeStaticConvert21: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cup", "quart", 2.0);

        test.equal(m, 8);
        test.done();
    },
    testVolumeStaticConvert22: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("us ounce", "quart", 2.0);

        test.equal(m, 64);
        test.done();
    },
    testVolumeStaticConvert23: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("tbsp", "quart", 2.0);

        test.equal(m, 128);
        test.done();
    },
    testVolumeStaticConvert24: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("tsp", "quart", 2.0);

        test.equal(m, 384);
        test.done();
    },
    testVolumeStaticConvert25: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic meter", "quart", 2.0);

        test.roughlyEqual(m, 0.00189271, 0.0001);
        test.done();
    },
    testVolumeStaticConvert26: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("liter", "quart", 2.0);

        test.roughlyEqual(m, 1.89271, 0.0001);
        test.done();
    },
    testVolumeStaticConvert27: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("milliliter", "quart", 2.0);

        test.roughlyEqual(m, 1892.71, 0.01);
        test.done();
    },
    testVolumeStaticConvert28: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial gallon", "quart", 2.0);

        test.roughlyEqual(m, 0.416337, 0.0001);
        test.done();
    },
    testVolumeStaticConvert29: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial quart", "quart", 2.0);

        test.roughlyEqual(m, 1.66535, 0.0001);
        test.done();
    },
    testVolumeStaticConvert30: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial pint", "quart", 2.0);

        test.roughlyEqual(m, 3.3307, 0.001);
        test.done();
    },
    testVolumeStaticConvert31: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial ounce", "quart", 2.0);

        test.roughlyEqual(m, 66.6139, 0.001);
        test.done();
    },
    testVolumeStaticConvert32: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial tbsp", "quart", 2.0);

        test.roughlyEqual(m, 106.582, 0.01);
        test.done();
    },
    testVolumeStaticConvert33: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial tsp", "quart", 2.0);

        test.roughlyEqual(m, 319.747, 0.01);
        test.done();
    },
    testVolumeStaticConvert34: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic foot", "quart", 2.0);

        test.roughlyEqual(m, 0.0668403, 0.0001);
        test.done();
    },
    testVolumeStaticConvert35: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic inch", "quart", 2.0);

        test.roughlyEqual(m, 115.5, 0.0001);
        test.done();
    },
    testVolumeStaticConvert36: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("in^3", "quart", 2.0);

        test.roughlyEqual(m, 115.5, 0.1);
        test.done();
    },
    testVolumeStaticConvert37: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("gallon", "pint", 2.0);

        test.equal(m, 0.25);
        test.done();
    },
    testVolumeStaticConvert38: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("quart", "pint", 2.0);

        test.equal(m, 1);
        test.done();
    },
    testVolumeStaticConvert39: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cup", "pint", 2.0);

        test.equal(m, 4);
        test.done();
    },
    testVolumeStaticConvert40: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("us ounce", "pint", 2.0);

        test.equal(m, 32);
        test.done();
    },
    testVolumeStaticConvert41: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("tbsp", "pint", 2.0);

        test.equal(m, 64);
        test.done();
    },
    testVolumeStaticConvert42: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("tsp", "pint", 2.0);

        test.equal(m, 192);
        test.done();
    },
    testVolumeStaticConvert43: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic meter", "pint", 2.0);

        test.roughlyEqual(m, 0.000946353, 0.0001);
        test.done();
    },
    testVolumeStaticConvert44: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("liter", "pint", 2.0);

        test.roughlyEqual(m, 0.946353, 0.0001);
        test.done();
    },
    testVolumeStaticConvert45: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("milliliter", "pint", 2.0);

        test.roughlyEqual(m, 946.353, 0.01);
        test.done();
    },
    testVolumeStaticConvert46: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial gallon", "pint", 2.0);

        test.roughlyEqual(m, 0.208168, 0.0001);
        test.done();
    },
    testVolumeStaticConvert47: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial quart", "pint", 2.0);

        test.roughlyEqual(m, 0.832674, 0.0001);
        test.done();
    },
    testVolumeStaticConvert48: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial pint", "pint", 2.0);

        test.roughlyEqual(m, 1.66535, 0.001);
        test.done();
    },
    testVolumeStaticConvert49: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial ounce", "pint", 2.0);

        test.roughlyEqual(m, 33.307, 0.001);
        test.done();
    },
    testVolumeStaticConvert50: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial tbsp", "pint", 2.0);

        test.roughlyEqual(m, 53.2911, 0.01);
        test.done();
    },
    testVolumeStaticConvert51: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial tsp", "pint", 2.0);

        test.roughlyEqual(m, 159.873, 0.01);
        test.done();
    },
    testVolumeStaticConvert52: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic foot", "pint", 2.0);

        test.roughlyEqual(m, 0.0334201, 0.0001);
        test.done();
    },
    testVolumeStaticConvert53: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic inch", "pint", 2.0);

        test.roughlyEqual(m, 57.75, 0.0001);
        test.done();
    },
    testVolumeStaticConvert54: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("in^3", "pint", 2.0);

        test.roughlyEqual(m, 57.75, 0.1);
        test.done();
    },
    testVolumeStaticConvert61: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("gallon", "cup", 2.0);

        test.roughlyEqual(m, 0.125, 0.01);
        test.done();
    },
    testVolumeStaticConvert62: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic meter", "cup", 2.0);

        test.roughlyEqual(m, 0.000473176, 0.0001);
        test.done();
    },
    testVolumeStaticConvert63: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial pint", "cup", 2.0);

        test.roughlyEqual(m, 0.832674, 0.0001);
        test.done();
    },
    testVolumeStaticConvert64: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("in^3", "cup", 2.0);

        test.roughlyEqual(m, 28.875, 0.1);
        test.done();
    },
    testVolumeStaticConvert65: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic inch", "cup", 2.0);

        test.roughlyEqual(m, 28.875, 0.1);
        test.done();
    },
    testVolumeStaticConvert91: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("gallon", "us ounce", 2.0);

        test.roughlyEqual(m, 0.015625, 0.01);
        test.done();
    },
    testVolumeStaticConvert92: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic meter", "us ounce", 2.0);

        test.roughlyEqual(m, 5.9147e-5, 0.0001);
        test.done();
    },
    testVolumeStaticConvert93: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial pint", "us ounce", 2.0);

        test.roughlyEqual(m, 0.104084, 0.0001);
        test.done();
    },
    testVolumeStaticConvert94: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("in^3", "us ounce", 2.0);

        test.roughlyEqual(m, 3.60938, 0.1);
        test.done();
    },
    testVolumeStaticConvert95: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic inch", "us ounce", 2.0);

        test.roughlyEqual(m, 3.60938, 0.1);
        test.done();
    },
    testVolumeStaticConvert121: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("gallon", "tbsp", 2.0);

        test.roughlyEqual(m, 0.0078125, 0.01);
        test.done();
    },
    testVolumeStaticConvert122: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic meter", "tbsp", 2.0);

        test.roughlyEqual(m, 2.9574e-5, 0.0001);
        test.done();
    },
    testVolumeStaticConvert123: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial pint", "tbsp", 2.0);

        test.roughlyEqual(m, 0.0520421, 0.0001);
        test.done();
    },
    testVolumeStaticConvert124: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("in^3", "tbsp", 2.0);

        test.roughlyEqual(m, 1.80469, 0.1);
        test.done();
    },
    testVolumeStaticConvert125: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic inch", "tbsp", 2.0);

        test.roughlyEqual(m, 1.80469, 0.1);
        test.done();
    },
    testVolumeStaticConvert151: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("gallon", "tsp", 2.0);

        test.roughlyEqual(m, 0.00260417, 0.01);
        test.done();
    },
    testVolumeStaticConvert152: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic meter", "tsp", 2.0);

        test.roughlyEqual(m, 9.8578e-6, 0.0001);
        test.done();
    },
    testVolumeStaticConvert153: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial pint", "tsp", 2.0);

        test.roughlyEqual(m, 0.0173474, 0.0001);
        test.done();
    },
    testVolumeStaticConvert154: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("in^3", "tsp", 2.0);

        test.roughlyEqual(m, 0.601563, 0.1);
        test.done();
    },
    testVolumeStaticConvert155: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic inch", "tsp", 2.0);

        test.roughlyEqual(m, 0.601563, 0.1);
        test.done();
    },
    testVolumeStaticConvert181: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("gallon", "cubic meter", 2.0);

        test.roughlyEqual(m, 528.344, 0.01);
        test.done();
    },
    testVolumeStaticConvert182: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic meter", "cubic meter", 2.0);

        test.equal(m, 2);
        test.done();
    },
    testVolumeStaticConvert183: function(test) {
        test.expect(1);
        var m = VolumeUnit
            .convert("imperial pint", "cubic meter", 2.0);

        test.roughlyEqual(m, 3519.51, 0.1);
        test.done();
    },
    testVolumeStaticConvert184: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("in^3", "cubic meter", 2.0);

        test.roughlyEqual(m, 122047, 1);
        test.done();
    },
    testVolumeStaticConvert185: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic inch", "cubic meter", 2.0);

        test.roughlyEqual(m, 122047, 1);
        test.done();
    },
    testVolumeStaticConvert201: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("gallon", "liter", 2.0);

        test.roughlyEqual(m, 0.528344, 0.01);
        test.done();
    },
    testVolumeStaticConvert202: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic meter", "liter", 2.0);

        test.roughlyEqual(m, 0.002, 0.0001);
        test.done();
    },
    testVolumeStaticConvert203: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial pint", "liter", 2.0);

        test.roughlyEqual(m, 3.51951, 0.0001);
        test.done();
    },
    testVolumeStaticConvert204: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("in^3", "liter", 2.0);

        test.roughlyEqual(m, 122.047, 0.1);
        test.done();
    },
    testVolumeStaticConvert205: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic inch", "liter", 2.0);

        test.roughlyEqual(m, 122.047, 0.1);
        test.done();
    },
    testVolumeStaticConvert231: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("gallon", "milliliter", 2.0);

        test.roughlyEqual(m, 0.000528344, 0.01);
        test.done();
    },
    testVolumeStaticConvert232: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("milliliter", "milliliter", 2.0);

        test.equal(m, 2);
        test.done();
    },
    testVolumeStaticConvert233: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial pint", "milliliter", 2.0);

        test.roughlyEqual(m, 0.00351951, 0.0001);
        test.done();
    },
    testVolumeStaticConvert234: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("in^3", "milliliter", 2.0);

        test.roughlyEqual(m, 0.122047, 0.1);
        test.done();
    },
    testVolumeStaticConvert235: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic inch", "milliliter", 2.0);

        test.roughlyEqual(m, 0.122047, 0.1);
        test.done();
    },
    testVolumeStaticConvert261: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("gallon", "imperial gallon", 2.0);

        test.roughlyEqual(m, 2.4019, 0.01);
        test.done();
    },
    testVolumeStaticConvert262: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("milliliter", "imperial gallon",
            2.0);

        test.roughlyEqual(m, 9092.18, 0.0001);
        test.done();
    },
    testVolumeStaticConvert263: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial pint", "imperial gallon",
            2.0);

        test.equal(m, 16);
        test.done();
    },
    testVolumeStaticConvert264: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("in^3", "imperial gallon", 2.0);

        test.roughlyEqual(m, 554.839, 0.1);
        test.done();
    },
    testVolumeStaticConvert265: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic inch", "imperial gallon",
            2.0);

        test.roughlyEqual(m, 554.839, 0.1);
        test.done();
    },
    testVolumeStaticConvert291: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("gallon", "imperial quart", 2.0);

        test.roughlyEqual(m, 0.600475, 0.01);
        test.done();
    },
    testVolumeStaticConvert292: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic meter", "imperial quart",
            2.0);

        test.roughlyEqual(m, 0.00227305, 0.0001);
        test.done();
    },
    testVolumeStaticConvert293: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial pint", "imperial quart",
            2.0);

        test.roughlyEqual(m, 4, 0.0001);
        test.done();
    },
    testVolumeStaticConvert294: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("in^3", "imperial quart", 2.0);

        test.roughlyEqual(m, 138.71, 0.1);
        test.done();
    },
    testVolumeStaticConvert295: function(test) {
        test.expect(1);
        var m = VolumeUnit
            .convert("cubic inch", "imperial quart", 2.0);

        test.roughlyEqual(m, 138.71, 0.1);
        test.done();
    },
    testVolumeStaticConvert311: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("gallon", "imperial pint", 2.0);

        test.roughlyEqual(m, 0.300238, 0.01);
        test.done();
    },
    testVolumeStaticConvert312: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("milliliter", "imperial pint", 2.0);

        test.roughlyEqual(m, 1136.52, 0.01);
        test.done();
    },
    testVolumeStaticConvert313: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial pint", "imperial pint",
            2.0);

        test.equal(m, 2);
        test.done();
    },
    testVolumeStaticConvert314: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("in^3", "imperial pint", 2.0);

        test.roughlyEqual(m, 69.3549, 0.1);
        test.done();
    },
    testVolumeStaticConvert315: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("cubic inch", "imperial pint", 2.0);

        test.roughlyEqual(m, 69.3549, 0.1);
        test.done();
    },
    testVolumeStaticConvert331: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("gallon", "imperial ounce", 2.0);

        test.roughlyEqual(m, 0.0150119, 0.01);
        test.done();
    },
    testVolumeStaticConvert332: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("imperial pint", "imperial ounce",
            2.0);

        test.roughlyEqual(m, 0.1, 0.1);
        test.done();
    },
    testVolumeStaticConvert333: function(test) {
        test.expect(1);
        var m = VolumeUnit
            .convert("milliliter", "imperial ounce", 2.0);

        test.roughlyEqual(m, 56.8261, 0.001);
        test.done();
    },
    testVolumeStaticConvert334: function(test) {
        test.expect(1);
        var m = VolumeUnit.convert("in^3", "imperial ounce", 2.0);

        test.roughlyEqual(m, 3.46774, 0.1);
        test.done();
    },
    testVolumeStaticConvert335: function(test) {
        test.expect(1);
        var m = VolumeUnit
            .convert("cubic inch", "imperial ounce", 2.0);

        test.roughlyEqual(m, 3.46774, 0.1);
        test.done();
    },
    testVolumeScale1: function(test) {
        test.expect(2);
        var m1 = new VolumeUnit({
            unit: "tsp",
            amount: 1000
        });
        var m2 = m1.scale("uscustomary");

        test.roughlyEqual(m2.amount, 1.30208, 0.00001);
        test.equal(m2.unit, "gallon");
        test.done();
    },
    testVolumeScale2: function(test) {
        test.expect(2);
        var m1 = new VolumeUnit({
            unit: "Milliliter",
            amount: 1500
        });
        var m2 = m1.scale("metric");

        test.equal(m2.amount, 1.5);
        test.equal(m2.unit, "liter");
        test.done();
    },
    testVolumeScale3: function(test) {
        test.expect(2);
        var m1 = new VolumeUnit({
            unit: "imperial ounce",
            amount: 1500
        });
        var m2 = m1.scale("imperial");

        test.roughlyEqual(m2.amount, 9.375, 0.01);
        test.equal(m2.unit, "gallon-imperial");
        test.done();
    },
    testVolumeScale4: function(test) {
        test.expect(2);
        var m1 = new VolumeUnit({
            unit: "imperial gallon",
            amount: 100
        });
        var m2 = m1.scale("imperial");

        test.roughlyEqual(m2.amount, 100, 0.01);
        test.equal(m2.unit, "gallon-imperial");
        test.done();
    },
    testVolumeScale5: function(test) {
        test.expect(2);
        var m1 = new VolumeUnit({
            unit: "us ounce",
            amount: 1500
        });
        var m2 = m1.scale("uscustomary");

        test.roughlyEqual(m2.amount, 1.566569, 0.000001);
        test.equal(m2.unit, "cubic-foot");
        test.done();
    },
    testVolumeScale6: function(test) {
        test.expect(2);
        var m1 = new VolumeUnit({
            unit: "liter",
            amount: 1570
        });
        var m2 = m1.scale("metric");

        test.roughlyEqual(m2.amount, 1.57, 0.01);
        test.equal(m2.unit, "cubic-meter");
        test.done();
    },
    testVolumeLocalize1: function(test) {
        test.expect(2);
        var m = new VolumeUnit({
            unit: "tsp",
            amount: 1000
        });

        m = m.localize("en-IN");

        test.roughlyEqual(m.amount, 4928.92, 0.01);
        test.equal(m.unit, "milliliter");
        test.done();
    },
    testVolumeLocalize2: function(test) {
        test.expect(2);
        var m = new VolumeUnit({
            unit: "liter",
            amount: 1000
        });

        m = m.localize("en-US");

        test.roughlyEqual(m.amount, 1056.69, 0.001);
        test.equal(m.unit, "quart");
        test.done();
    },
    testVolumeLocalize3: function(test) {
        test.expect(2);
        var m = new VolumeUnit({
            unit: "liter",
            amount: 1000
        });

        m = m.localize("en-GB");

        test.equal(m.amount, 1000);
        test.equal(m.unit, "liter");
        test.done();
    },
    testVolumeLocalize5: function(test) {
        test.expect(2);
        var m = new VolumeUnit({
            unit: "us ounce",
            amount: 1000
        });

        m = m.localize("en-GB");

        test.equal(m.amount, 29573.5, 0.001);
        test.equal(m.unit, "milliliter");
        test.done();
    },
    testVolumeGetMeasures: function(test) {
        test.expect(1);
        var measures = VolumeUnit.getMeasures();
        var expected = [
            "gallon",
            "quart",
            "pint",
            "cup",
            "fluid-ounce",
            "tablespoon",
            "teaspoon",
            "cubic-meter",
            "liter",
            "milliliter",
            "gallon-imperial",
            "quart-imperial",
            "pint-imperial",
            "ounce-imperial",
            "tablespoon-imperial",
            "teaspoon-imperial",
            "cubic-foot",
            "cubic-inch"
        ];

        test.equalIgnoringOrder(measures, expected);
        test.done();
    }
};