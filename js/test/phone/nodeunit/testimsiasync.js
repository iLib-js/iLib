/*
 * testimsiasync.js - Test the parseImsi() function.
 *
 * Copyright © 2018, JEDLSoft
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../.././../lib/ilib.js");
}
if (typeof(PhoneNumber) === "undefined") {
    var PhoneNumber = require("../.././../lib/PhoneNumber.js");
}

module.exports.imsiasync = {
    testRegularImsi3DigitMNC: function(test) {
        test.expect(1);
        var imsi = "31003014084567890"
        var expected = {
            mcc: "310",
            mnc: "030",
            msin: "14084567890"
        };

        PhoneNumber.parseImsi(imsi, {
            sync: false,
            onLoad: function(actual) {
                test.deepEqual(actual, expected);
                test.done();
            }
        })
    },

    testSpecialImsi1: function(test) {
        test.expect(1);
        var imsi = "31000201234567"
        var expected = {
            mcc: "310",
            mnc: "00",
            msin: "201234567"
        };

        PhoneNumber.parseImsi(imsi, {
            sync: false,
            onLoad: function(actual) {
                test.deepEqual(actual, expected);
                test.done();
            }
        });
    },

    testBrokenMCC: function(test) {
        test.expect(1);
        var imsi = "32000414084567890"
        var expected = {
            mcc: "320",
            mnc: "004",
            msin: "14084567890"
        };

        // should default to a 3 digit mnc
        PhoneNumber.parseImsi(imsi, {
            sync: false,
            onLoad: function(actual) {
                test.deepEqual(actual, expected);
                test.done();
            }
        });
    },

    testBrokenMNC: function(test) {
        test.expect(1);
        var imsi = "31014114084567890"
        var expected = {
            mcc: "310",
            mnc: "141",
            msin: "14084567890"
        };

        // should default to a 3 digit mnc
        PhoneNumber.parseImsi(imsi, {
            sync: false,
            onLoad: function(actual) {
                test.deepEqual(actual, expected);
                test.done();
            }
        });
    },

    testTooShort: function(test) {
        test.expect(1);
        var imsi = "31";
        PhoneNumber.parseImsi(imsi, {
            sync: false,
            onLoad: function(actual) {
                test.ok(!actual);
                test.done();
            }
        });
    },

    testUndefined: function(test) {
        test.expect(1);
        PhoneNumber.parseImsi(undefined, {
            sync: false,
            onLoad: function(actual) {
                test.ok(!actual);
                test.done();
            }
        });
    }
};
