/*
 * testForce.js - test the Force object
 *
 * Copyright © 2021-2022 JEDLSoft
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

if (typeof(ForceUnit) === "undefined") {
    var ForceUnit = require("../../lib/ForceUnit.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testforce = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testForceForceConstructor: function(test) {
        test.expect(1);
        var m = new ForceUnit({
            unit: "N",
            amount: 2
        });

        test.ok(m !== null);
        test.done();
    },

    testForceForceConvertNtoHP: function(test) {
        test.expect(3);
        var m1 = new ForceUnit({
            unit: "N",
            amount: 2
        });
        var m2 = new ForceUnit({
            unit: "dyne",
            amount: m1
        });

        test.ok(m1 !== null);
        test.ok(m2 !== null);

        test.roughlyEqual(m2.getAmount(), 2e5, 1e-6);
        test.done();
    },

    testForceStaticConvert1: function(test) {
        test.expect(1);
        var m = ForceUnit.convert("newton", "poundal", 1);

        test.roughlyEqual(m, 1.38255e-1, 1e-5);
        test.done();
    },

    testForceStaticConvertWithString: function(test) {
        test.expect(1);
        var m = ForceUnit.convert("poundal", "newton", "100");

        test.roughlyEqual(m, 723.301, 1e-4);
        test.done();
    },

    testForceStaticConvert2: function(test) {
        test.expect(1);
        var m = ForceUnit.convert("pound-force", "N", 1);

        test.roughlyEqual(m, 0.224809, 1e-6);
        test.done();
    },

    testForceStaticConvert3: function(test) {
        test.expect(1);
        var m = ForceUnit.convert("pound-force", "poundal", 1);

        test.roughlyEqual(m, 0.031081, 1e-4);
        test.done();
    },

    testForceStaticConvert4: function(test) {
        test.expect(1);
        var m = ForceUnit.convert("N", "mN", 1);

        test.roughlyEqual(m, 1e-3, 1e-7);
        test.done();
    },

    testForceScale1: function(test) {
        test.expect(2);
        var m1 = new ForceUnit({
            unit: "millinewton",
            amount: 10000
        });
        var m2 = m1.scale("metric");

        test.equal(m2.amount, 10);
        test.equal(m2.unit, "newton");
        test.done();
    },

    testForceScale2: function(test) {
        test.expect(2);
        var m1 = new ForceUnit({
            unit: "newton",
            amount: 1233453
        });
        var m2 = m1.scale("metric");

        test.equal(m2.amount, 1.233453);
        test.equal(m2.unit, "meganewton");
        test.done();
    },

    testForceScale3: function(test) {
        test.expect(2);
        var m1 = new ForceUnit({
            unit: "dyne",
            amount: 525457893
        });
        var m2 = m1.scale("metric");

        test.roughlyEqual(m2.amount, 5.25457893, 1e-9);
        test.equal(m2.unit, "kilonewton");
        test.done();
    },

    testForceScale4: function(test) {
        test.expect(2);
        var m1 = new ForceUnit({
            unit: "N",
            amount: 5254578322
        });
        var m2 = m1.scale("metric");

        test.roughlyEqual(m2.amount, 5.254578322, 1e-9);
        test.equal(m2.unit, "giganewton");
        test.done();
    },

    testForceGetMeasures: function(test) {
        test.expect(1);
        var measures = ForceUnit.getMeasures();
        var expected = [
            "millinewton",
            "newton",
            "kilonewton",
            "meganewton",
            "giganewton",
            "dyne",
            "kilogram-force",
            "poundal",
            "pound-force"
        ];
        test.equalIgnoringOrder(measures, expected);
        test.done();
    }
};
