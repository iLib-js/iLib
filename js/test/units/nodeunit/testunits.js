/*
 * testunits.js - test the String object
 * 
 * Copyright © 2012-2015,2017, JEDLSoft
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
    var MeasurementFactory = require("../.././../lib/MeasurementFactory.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testunits = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testMeasurementLength1: function(test) {
        test.expect(2);
        var measurement = MeasurementFactory({
            amount: 5,
            unit: "kilometers"
        });
    
        test.ok(measurement !== null);
        test.equal(measurement.getMeasure(), "length");
        test.done();
    },
    
    testMeasurementLength2: function(test) {
        test.expect(2);
        var measurement = MeasurementFactory({
            amount: 5,
            unit: "miles"
        });
    
        test.ok(measurement !== null);
        test.equal(measurement.getMeasure(), "length");
        test.done();
    },
    
    testMeasurementSpeed1: function(test) {
        test.expect(2);
        var measurement = MeasurementFactory({
            amount: 5,
            unit: "miles/hour"
        });
    
        test.ok(measurement !== null);
        test.equal(measurement.getMeasure(), "speed");
        test.done();
    },
    
    testMeasurementSpeed2: function(test) {
        test.expect(2);
        var measurement = MeasurementFactory({
            amount: 5,
            unit: "meters/s"
        });
    
        test.ok(measurement !== null);
        test.equal(measurement.getMeasure(), "speed");
        test.done();
    },
    
    testMeasurementTemperature1: function(test) {
        test.expect(2);
        var measurement = MeasurementFactory({
            amount: 5,
            unit: "C"
        });
    
        test.ok(measurement !== null);
        test.equal(measurement.getMeasure(), "temperature");
        test.done();
    },
    
    testMeasurementTemperature2: function(test) {
        test.expect(2);
        var measurement = MeasurementFactory({
            amount: 5,
            unit: "F"
        });
    
        test.ok(measurement !== null);
        test.equal(measurement.getMeasure(), "temperature");
        test.done();
    },
    
    testMeasurementDigitalStorage1: function(test) {
        test.expect(2);
        var measurement = MeasurementFactory({
            amount: 100,
            unit: "mb"
        });
    
        test.ok(measurement !== null);
        test.equal(measurement.getMeasure(), "digitalStorage");
        test.done();
    },
    
    testMeasurementDigitalStorage2: function(test) {
        test.expect(2);
        var measurement = MeasurementFactory({
            amount: 1204,
            unit: "tB"
        });
    
        test.ok(measurement !== null);
        test.equal(measurement.getMeasure(), "digitalStorage");
        test.done();
    },
    
    testMeasurementConstructorLengths: function(test) {
        var measures = [
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
    
        for (var measure in measures) {
            var measurement = MeasurementFactory({
                amount: 100,
                unit: measures[measure]
            });
        
            test.ok(typeof(measurement) !== "undefined");
            test.equal(measurement.getMeasure(), "length");
            test.equal(measurement.getAmount(), 100);
            test.equal(measurement.getUnit(), measures[measure]);
        }
        test.done();
    },
    
    testMeasurementConstructorSpeeds: function(test) {
        var measures = [
            "feet/second",
            "meters/second",
            "kilometer/hour",
            "miles/hour",
            "knot"        
        ];
    
        for (var measure in measures) {
            var measurement = MeasurementFactory({
                amount: 100,
                unit: measures[measure]
            });
        
            test.ok(typeof(measurement) !== "undefined");
            test.equal(measurement.getMeasure(), "speed");
            test.equal(measurement.getAmount(), 100);
            test.equal(measurement.getUnit(), measures[measure]);
        }
        test.done();
    },
    
    testMeasurementConstructorTemperature: function(test) {
        var measures = [
            "celsius",
            "kelvin",
            "fahrenheit"
        ];
    
        for (var measure in measures) {
            var measurement = MeasurementFactory({
                amount: 100,
                unit: measures[measure]
            });
        
            test.ok(typeof(measurement) !== "undefined");
            test.equal(measurement.getMeasure(), "temperature");
            test.equal(measurement.getAmount(), 100);
            test.equal(measurement.getUnit(), measures[measure]);
        }
        test.done();
    },
    
    testMeasurementConstructorDigitalStorage: function(test) {
        var measures = [
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
    
        for (var measure in measures) {
            var measurement = MeasurementFactory({
                amount: 100,
                unit: measures[measure]
            });
        
            test.ok(typeof(measurement) !== "undefined");
            test.equal(measurement.getMeasure(), "digitalStorage");
            test.equal(measurement.getAmount(), 100);
            test.equal(measurement.getUnit(), measures[measure]);
        }
        test.done();
    },
    
    testMeasurementConstructorDigitalStorageCaseInsensitive: function(test) {
        var measures = [
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
    
        for (var measure in measures) {
            var measurement = MeasurementFactory({
                amount: 100,
                unit: measures[measure]
            });
        
            test.ok(typeof(measurement) !== "undefined");
            test.equal(measurement.getMeasure(), "digitalStorage");
            test.equal(measurement.getAmount(), 100);
            test.equal(measurement.getUnit().toLowerCase(), measures[measure]);
        }
        test.done();
    }
    
};