/*
 * testnormalizeasync.js - test phonenumber normalize function()
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

if (typeof(PhoneNumber) === "undefined") {
    var PhoneNumber = require("../.././../lib/PhoneNumber.js");
}
if (typeof(PhoneLocale) === "undefined") {
    var PhoneLocale = require("../.././../lib/PhoneLocale.js");
}
if (typeof(NumberingPlan) === "undefined") {
    var NumberingPlan = require("../.././../lib/NumberingPlan.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.normalizeasync = {
    testNormalizeAsyncIDDPrefix: function(test) {
        test.expect(1);
        new PhoneNumber("011 31 456 3453434", {
            locale: 'en-US',
            sync: false,
            onLoad: function(parsed) {
                parsed.normalize({
                    locale: 'en-US',
                    sync: false,
                    onLoad: function(normalized) {
                        var expected = "+314563453434";
                        test.equal(normalized, expected);
                        test.done();
                    }
                });
            }
        });
    },

    testNormalizeAsyncLDNumberUsingDEMCC: function(test) {
        test.expect(1);
        new PhoneNumber("02302 654321", {
            locale: 'de-DE',
            sync: false,
            onLoad: function(parsed) {
                parsed.normalize({
                    mcc: "262",
                    locale: 'en-US',
                    sync: false,
                    onLoad: function(normalized) {
                        var expected = "+492302654321";

                        test.equal(normalized, expected); // 'de-DE'
                        test.done();
                    }
                });
            }
        });
    },

    testNormalizeAsyncLDNumberUsingUSSpanishLocale: function(test) {
        test.expect(1);
        new PhoneNumber("650 7654321", {
            locale: 'es-US',
            sync: false,
            onLoad: function(parsed) {
                parsed.normalize({
                    locale: 'en-US',
                    sync: false,
                    onLoad: function(normalized) {
                        var expected = "+16507654321";

                        test.equal(normalized, expected); // 'es-US'
                        test.done();
                    }
                });
            }
        });
    }
};
