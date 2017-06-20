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

if (typeof(DigitalStorageUnit) === "undefined") {
    var DigitalStorageUnit = require("../.././../lib/DigitalStorageUnit.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testdigitalstoreage = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDSDSConstructor: function(test) {
        test.expect(1);
    
        var m = new DigitalStorageUnit({
            unit: "mb",
            amount: 2
        });
    
        test.ok(m !== null);
        test.done();
    },
    
    testDSDSConvertKbToMb: function(test) {
        test.expect(3);
        var m1 = new DigitalStorageUnit({
            unit: "kb",
            amount: 102400
        });
        var m2 = new DigitalStorageUnit({
            unit: "mb",
            amount: m1
        });
    
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.roughlyEqual(1e-7, m2.getAmount(), 100);
        test.done();
    },
    
    testDSStaticConvert1: function(test) {
        test.expect(1);
        var m = DigitalStorageUnit.convert("bit", "kilobits", 12024);
    
        test.roughlyEqual(0.01, m, 12312576);
        test.done();
    },
    
    testDSStaticConvertWithString: function(test) {
        test.expect(1);
        var m = DigitalStorageUnit.convert("gigabyte", "petabyte", "1");
    
        test.roughlyEqual(0.001, m, 1048576);
        test.done();
    },
    
    testDSStaticConvert2: function(test) {
        test.expect(1);
        var m = DigitalStorageUnit.convert("tB", "gB", 10240);
    
        test.roughlyEqual(1e-8, m, 10);
        test.done();
    },
    
    testDSStaticConvert3: function(test) {
        test.expect(1);
        var m = DigitalStorageUnit.convert("mb", "byte", 1048576);
    
        test.roughlyEqual(1e-9, m, 8);
        test.done();
    },
    
    testDSStaticConvert4: function(test) {
        test.expect(1);
        var m = DigitalStorageUnit.convert("Pb", "tb", 1024);
    
        test.roughlyEqual(1e-9, m, 1);
        test.done();
    },
    
    testDSStaticConvert5: function(test) {
        test.expect(1);
        var m = DigitalStorageUnit.convert("megabyte", "byte", 10);
    
        test.roughlyEqual(1e-15, m, 9.536743164e-6);
        test.done();
    },
    
    testDSScale1: function(test) {
        test.expect(2);
        var m = new DigitalStorageUnit({
            unit: "bit",
            amount: 1024
        });
    
        m = m.scale();
    
        test.equal(m.amount, 1);
        test.equal(m.unit, "kilobit");
        test.done();
    },
    
    testDSScale2: function(test) {
        test.expect(2);
        var m = new DigitalStorageUnit({
            unit: "kilobit",
            amount: 0.125
        });
    
        m = m.scale();
    
        // stays in the bit system
        test.equal(m.amount, 128);
        test.equal(m.unit, "bit");
        test.done();
    },
    
    testDSScale3: function(test) {
        test.expect(2);
        var m = new DigitalStorageUnit({
            unit: "bit",
            amount: 1048576000
        });
    
        m = m.scale();
    
        // stays in the bit system
        test.roughlyEqual(0.1, m.amount, 1000);
        test.equal(m.unit, "megabit");
        test.done();
    },
    
    testDSScale4: function(test) {
        test.expect(2);
        var m = new DigitalStorageUnit({
            unit: "kilobit",
            amount: 10000000
        });
    
        m = m.scale();
    
        test.roughlyEqual(0.001, m.amount, 9.536743163);
        test.equal(m.unit, "gigabit");
        test.done();
    },
    
    testDSScale5: function(test) {
        test.expect(2);
        var m = new DigitalStorageUnit({
            unit: "petabyte",
            amount: 9.3132e-8
        });
    
        m = m.scale();
    
        test.roughlyEqual(0.001, m.amount, 100);
        test.equal(m.unit, "megabyte");
        test.done();
    },
    
    testDSScale6: function(test) {
        test.expect(2);
        var m = new DigitalStorageUnit({
            unit: "MB",
            amount: 100
        });
    
        m = m.scale();
    
        test.equal(m.amount, 100);
        test.equal(m.unit, "megabyte");
        test.done();
    },
    
    testDSScale7: function(test) {
        test.expect(2);
        // This test case is the most likely scenario. That is, the OS will 
        // give you bytes, and it is up to the autoscaler to scale to the 
        // right size
        var m = new DigitalStorageUnit({
            unit: "byte",
            amount: 1200
        });
    
        m = m.scale();
    
        test.equal(m.amount, 1.171875);
        test.equal(m.unit, "kilobyte");
        test.done();
    },
    
    testDSScale8: function(test) {
        test.expect(2);
        // This test case is the most likely scenario. That is, the OS will 
        // give you bytes, and it is up to the autoscaler to scale to the 
        // right size
        var m = new DigitalStorageUnit({
            unit: "byte",
            amount: 123456789
        });
    
        m = m.scale();
    
        test.roughlyEqual(0.000000001, m.amount, 117.73756885528564);
        test.equal(m.unit, "megabyte");
        test.done();
    },
    
    testDSScaleScaleDown: function(test) {
        test.expect(2);
        var m = new DigitalStorageUnit({
            unit: "megabyte",
            amount: 0.002
        });
    
        m = m.scale();
    
        test.equal(m.amount, 2.048);
        test.equal(m.unit, "kilobyte");
        test.done();
    },
    
    testDSScaleNoScale: function(test) {
        test.expect(2);
        var m = new DigitalStorageUnit({
            unit: "byte",
            amount: 123
        });
    
        m = m.scale();
    
        test.equal(m.amount, 123);
        test.equal(m.unit, "byte");
        test.done();
    },
    
    testDSaLocalize1: function(test) {
        test.expect(2);
        var m = new DigitalStorageUnit({
            unit: "petaByte",
            amount: 1000
        });
    
        m = m.localize("en-IN");
    
        test.roughlyEqual(0.01, m.amount, 1000);
        test.equal(m.unit, "petabyte");
        test.done();
    },
    
    testDSLocalize2: function(test) {
        test.expect(2);
        var m = new DigitalStorageUnit({
            unit: "Kilobit",
            amount: 1000
        });
    
        m = m.localize("en-US");
    
        test.roughlyEqual(0.001, m.amount, 1000);
        test.equal(m.unit, "kilobit");
        test.done();
    },
    
    testDSLocalize3: function(test) {
        test.expect(2);
        var m = new DigitalStorageUnit({
            unit: "Mb",
            amount: 1000
        });
    
        m = m.localize("en-US");
    
        test.roughlyEqual(0.001, m.amount, 1000);
        test.equal(m.unit, "megabit");
        test.done();
    },
    testDSGetMeasures: function(test) {
        test.expect(1);
        var measures = DigitalStorageUnit.getMeasures();
        var expected = [
            "bit",
            "byte",
            "kilobit",
            "kilobyte",
            "megabit",
            "megabyte",
            "gigabit",
            "gigabyte",
            "terabit",
            "terabyte",
            "petabit",
            "petabyte"
        ];
    
        test.equalIgnoringOrder(measures, expected);
        test.done();
    }
    
};