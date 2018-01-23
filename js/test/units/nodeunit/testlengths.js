/*
 * testlengths.js - test the lengths object
 * 
 * Copyright © 2014-2015,2017, JEDLSoft
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

if (typeof(LengthUnit) === "undefined") {
    var LengthUnit = require("../../../lib/LengthUnit.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testlengths = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testLengthLengthConstructor: function(test) {
        test.expect(1);
    
        var m = new LengthUnit({
            unit: "meter",
            amount: 2
        });
    
        test.ok(m !== null);
        test.done();
    },
    
    testLengthLengthConvertMetersToMiles: function(test) {
        test.expect(3);
        var m1 = new LengthUnit({
            unit: "meter",
            amount: 5000
        });
        var m2 = new LengthUnit({
            unit: "mile",
            amount: m1
        });
    
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.equal(m2.getAmount(), 3.106856);
        test.done();
    },
    
    testLengthStaticConvert1: function(test) {
        test.expect(1);
        var m = LengthUnit.convert("feet", "meter", 2.0);
    
        test.equal(m, 6.56168);
        test.done();
    },
    
    testLengthStaticConvertWithString: function(test) {
        test.expect(1);
        var m = LengthUnit.convert("feet", "meter", "2");
    
        test.equal(m, 6.56168);
        test.done();
    },
    
    testLengthStaticConvert2: function(test) {
        test.expect(1);
        var m = LengthUnit.convert("meter", "millimeter", 200000);
    
        test.equal(m, 200);
        test.done();
    },
    
    testLengthStaticConvert3: function(test) {
        test.expect(1);
        var m = LengthUnit.convert("mile", "yard", 7495);
    
        test.equal(m, 4.25852409);
        test.done();
    },
    
    testLengthStaticConvert4: function(test) {
        test.expect(1);
        var m = LengthUnit.convert("millimeter", "meter", 2.0);
    
        test.equal(m, 2000);
        test.done();
    },
    
    testLengthStaticConvert5: function(test) {
        test.expect(1);
        var m = LengthUnit.convert("inch", "micrometer", 200000);
    
        test.roughlyEqual(m, 7.87402, 0.00001)
        test.done();
    },
    
    testLengthStaticConvert6: function(test) {
        test.expect(1);
        var m = LengthUnit.convert("yard", "cm", 100);
    
        test.equal(m, 1.09361);
        test.done();
    },
    
    testLengthStaticConvert7: function(test) {
        test.expect(1);
        var m = LengthUnit.convert("mile", "decimeter", 100000);
    
        test.roughlyEqual(m, 6.21373, 0.00001);
        test.done();
    },
    
    testLengthStaticConvert8: function(test) {
        test.expect(1);
        var m = LengthUnit.convert("nauticalmile", "meter", 1000);
    
        test.equal(m, 0.539957);
        test.done();
    },
    
    testLengthStaticConvert9: function(test) {
        test.expect(1);
        var m = LengthUnit.convert("inch", "yard", 1000);
    
        test.equal(m, 36000);
        test.done();
    },
    
    testLengthStaticConvert10: function(test) {
        test.expect(1);
        var m = LengthUnit.convert("nauticalmile", "feet", 100000);
    
        test.roughlyEqual(m, 16.4579, 0.0001);
        test.done();
    },
    
    testLengthStaticConvert11: function(test) {
        test.expect(1);
        var m = LengthUnit.convert("mm", "feet", 500);
    
        test.roughlyEqual(m, 152400, 0.1);
        test.done();
    },
    
    testLengthScale1: function(test) {
        test.expect(2);
        var m = new LengthUnit({
            unit: "mm",
            amount: 1000
        });
    
        m = m.scale("metric");
    
        test.equal(m.amount, 1);
        test.equal(m.unit, "meter");
        test.done();
    },
    
    testLengthScale2: function(test) {
        test.expect(2);
        var m = new LengthUnit({
            unit: "m",
            amount: 0.001
        });
    
        m = m.scale("metric");
    
        test.equal(m.amount, 1);
        test.equal(m.unit, "millimeter");
        test.done();
    },
    
    testLengthScale3: function(test) {
        test.expect(2);
        var m = new LengthUnit({
            unit: "inch",
            amount: 2000
        });
    
        m = m.scale("imperial");
    
        test.roughlyEqual(m.amount, 55.55556, 0.00001);
        test.equal(m.unit, "yard");
        test.done();
    },
    
    testLengthScale4: function(test) {
        test.expect(2);
        var m = new LengthUnit({
            unit: "miles",
            amount: 0.003
        });
    
        m = m.scale("imperial");
    
        test.equal(m.amount, 5.28);
        test.equal(m.unit, "yard");
        test.done();
    },
    
    testLengthScale5: function(test) {
        test.expect(2);
        var m = new LengthUnit({
            unit: "inch",
            amount: 200000
        });
    
        m = m.scale("uscustomary");
    
        test.roughlyEqual(m.amount, 2.743, 0.001)
        test.equal(m.unit, "nauticalmile");
        test.done();
    },
    
    testLengthScale6: function(test) {
        test.expect(2);
        var m = new LengthUnit({
            unit: "nauticalmile",
            amount: 0.00002
        });
    
        m = m.scale("uscustomary");
    
        test.roughlyEqual(m.amount, 1.458268, 0.000001)
        test.equal(m.unit, "inch");
        test.done();
    },
    
    testLengthScale7: function(test) {
        test.expect(2);
        var m = new LengthUnit({
            unit: "decimeter",
            amount: 8
        });
    
        m = m.scale("metric");
    
        test.equal(m.amount, 8);
        test.equal(m.unit, "decimeter");
        test.done();
    },
    
    testLengthScale8: function(test) {
        test.expect(2);
        var m = new LengthUnit({
            unit: "mm",
            amount: 1000
        });
    
        m = m.scale();
    
        test.equal(m.amount, 1);
        test.equal(m.unit, "meter");
        test.done();
    },
    
    testLengthScale9: function(test) {
        test.expect(2);
        var m = new LengthUnit({
            unit: "m",
            amount: 0.001
        });
    
        m = m.scale();
    
        test.equal(m.amount, 1);
        test.equal(m.unit, "millimeter");
        test.done();
    },
    
    testLengthScale10: function(test) {
        test.expect(2);
        var m = new LengthUnit({
            unit: "inch",
            amount: 200000
        });
    
        m = m.scale();
    
        test.roughlyEqual(m.amount, 2.743, 0.001)
        test.equal(m.unit, "nauticalmile");
        test.done();
    },
    
    testLengthScale11: function(test) {
        test.expect(2);
        var m = new LengthUnit({
            unit: "nauticalmile",
            amount: 0.00002
        });
    
        m = m.scale();
    
        test.roughlyEqual(m.amount, 1.458268, 0.000001)
        test.equal(m.unit, "inch");
        test.done();
    },
    
    testLengthLocalize1: function(test) {
        test.expect(2);
        var m = new LengthUnit({
            unit: "miles",
            amount: 1000
        });
    
        m = m.localize("en-IN");
    
        test.roughlyEqual(m.amount, 1609.34, 0.01);
        test.equal(m.unit, "kilometer");
        test.done();
    },
    
    testLengthLocalize2: function(test) {
        test.expect(2);
        var m = new LengthUnit({
            unit: "kilometer",
            amount: 1000
        });
    
        m = m.localize("en-US");
    
        test.roughlyEqual(m.amount, 621.371, 0.01);
        test.equal(m.unit, "mile");
        test.done();
    },
    
    testLengthLocalize3: function(test) {
        test.expect(2);
        var m = new LengthUnit({
            unit: "mile",
            amount: 1000
        });
    
        m = m.localize("en-GB");
    
        test.equal(m.amount, 1000);
        test.equal(m.unit, "mile");
        test.done();
    },
    
    testLengthGetMeasures: function(test) {
        test.expect(1);
        var measures = LengthUnit.getMeasures();
        var expected = [
            "micrometer",
            "millimeter",
            "centimeter",
            "decimeter",
            "meter",
            "decameter",
            "hectometer",
            "kilometer",
            "megameter",
            "gigameter",
            "nauticalmile",
            "mile",
            "yard",
            "foot",
            "inch"
        ];
    
        test.equalIgnoringOrder(measures, expected);
        test.done();
    }
    
};