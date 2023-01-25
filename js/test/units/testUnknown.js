/*
 * testUnknown.js - test the unknown object
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

if (typeof(UnknownUnit) === "undefined") {
    var UnknownUnit = require("../../lib/UnknownUnit.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testUnknown = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testMeasurementUnknownEmpty: function(test) {
        test.expect(1);
        var m = new UnknownUnit();

        test.ok(m !== null);
        test.done();
    },

    testMeasurementUnknownUnitPreserved: function(test) {
        test.expect(3);
        var m = new UnknownUnit({
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
        var m = new UnknownUnit({
            unit: "krunghoonfoop",
            amount: 2
        });

        test.ok(m !== null);

        test.equal(m.getMeasure(), "unknown");
        test.done();
    }

};
