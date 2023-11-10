/*
 * testTimes.js - test the Time object
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

if (typeof(TimeUnit) === "undefined") {
    var TimeUnit = require("../../lib/TimeUnit.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testtime = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testTimeTimeConstructor: function(test) {
        test.expect(1);
        var m = new TimeUnit({
            unit: "sec",
            amount: 2
        });

        test.ok(m !== null);
        test.done();
    },
    testTimeTimeConvertSecondToHour: function(test) {
        test.expect(3);
        var m1 = new TimeUnit({
            unit: "sec",
            amount: 3600
        });
        var m2 = new TimeUnit({
            unit: "hour",
            amount: m1
        });

        test.ok(m1 !== null);
        test.ok(m2 !== null);

        test.roughlyEqual(m2.getAmount(), 1.0, 0.1);
        test.done();
    },
    testTimeStaticConvert1: function(test) {
        test.expect(1);
        var m = TimeUnit.convert("second", "ns", 1000000000);

        test.equal(m, 1);
        test.done();
    },
    testTimeStaticConvertWithString: function(test) {
        test.expect(1);
        var m = TimeUnit.convert("hour", "decade", "5");

        test.equal(m, 438290.5);
        test.done();
    },
    testTimeStaticConvert2: function(test) {
        test.expect(1);
        var m = TimeUnit.convert("hour", "day", 10);

        test.equal(m, 240);
        test.done();
    },
    testTimeStaticConvert3: function(test) {
        test.expect(1);
        var m = TimeUnit.convert("min", "month", 2);

        test.equal(m, 87658.2);
        test.done();
    },
    testTimeStaticConvert4: function(test) {
        test.expect(1);
        var m = TimeUnit.convert("day", "week", 10);

        test.equal(m, 70);
        test.done();
    },
    testTimeScaling1: function(test) {
        test.expect(2);
        var m = new TimeUnit({
            unit: "ns",
            amount: 1024
        });

        var m1 = m.scale();

        test.equal(m1.amount, 1.024);
        test.equal(m1.unit, "microsecond");
        test.done();
    },
    testTimeScaling2: function(test) {
        test.expect(2);
        var m = new TimeUnit({
            unit: "ms",
            amount: 12000
        });

        m = m.scale();

        test.equal(m.amount, 12);
        test.equal(m.unit, "second");
        test.done();
    },
    testTimeScaling3: function(test) {
        test.expect(2);
        var m = new TimeUnit({
            unit: "day",
            amount: 10485
        });

        m = m.scale();

        test.roughlyEqual(m.amount, 2.8706979, 0.1);
        test.equal(m.unit, "decade");
        test.done();
    },
    testTimeScaling4: function(test) {
        test.expect(2);
        var m = new TimeUnit({
            unit: "year",
            amount: 1000
        });

        m = m.scale();

        test.roughlyEqual(m.amount, 10, 0.001);
        test.equal(m.unit, "century");
        test.done();
    },
    testTimeScaling5: function(test) {
        test.expect(2);
        var m = new TimeUnit({
            unit: "h",
            amount: 120
        });

        m = m.scale();

        test.roughlyEqual(m.amount, 5, 0.001);
        test.equal(m.unit, "day");
        test.done();
    },
    testTimeGetMeasures: function(test) {
        test.expect(1);
        var measures = TimeUnit.getMeasures();
        var expected = [
            "nanosecond",
            "microsecond",
            "millisecond",
            "second",
            "minute",
            "hour",
            "day",
            "week",
            "month",
            "year",
            "decade",
            "century"
        ];
        test.equalIgnoringOrder(measures, expected);
        test.done();
    }


};
