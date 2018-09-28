/*
 * testphonelocasync.js - Test the phoneloc class.
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
    var ilib = require("../../lib/ilib.js");
}
if (typeof(PhoneLocale) === "undefined") {
    var PhoneLocale = require("../../lib/PhoneLocale.js");
}

module.exports.phonelocasync = {
    testPhoneLocAsyncMCCUS: function(test) {
        test.expect(2);
        new PhoneLocale({
            mcc: "310",
            sync: false,
            onLoad: function(loc) {
                test.ok(typeof(loc) !== "undefined");
                test.equal(loc.getRegion(), "US");
                test.done();
            }
        });
    },

    testPhoneLocAsyncMCCUnknownMCC: function(test) {
        test.expect(2);
        new PhoneLocale({
            mcc: "31",
            sync: false,
            onLoad: function(loc) {
                test.ok(typeof(loc) !== "undefined");
                test.equal(loc.getRegion(), "XX");
                test.done();
            }
        });
    },

    testPhoneLocAsyncCC1: function(test) {
        test.expect(2);
        new PhoneLocale({
            countryCode: "1",
            sync: false,
            onLoad: function(loc) {
                test.ok(typeof(loc) !== "undefined");
                test.equal(loc.getRegion(), "US");
                test.done();
            }
        });
    },

    testPhoneLocAsyncCC1: function(test) {
        test.expect(2);
        new PhoneLocale({
            countryCode: "44",
            sync: false,
            onLoad: function(loc) {
                test.ok(typeof(loc) !== "undefined");
                test.equal(loc.getRegion(), "GB");
                test.done();
            }
        });
    },

    testPhoneLocAsyncCCUnknownCC: function(test) {
        test.expect(2);
        new PhoneLocale({
            countryCode: "0",
            sync: false,
            onLoad: function(loc) {
                test.ok(typeof(loc) !== "undefined");
                test.equal(loc.getRegion(), "XX");
                test.done();
            }
        });
    },

    testPhoneLocAsyncLocaleUS: function(test) {
        test.expect(2);
        new PhoneLocale({
            locale: "en-US",
            sync: false,
            onLoad: function(loc) {
                test.ok(typeof(loc) !== "undefined");
                test.equal(loc.getRegion(), "US");
                test.done();
            }
        });
    },

    testPhoneLocAsyncLocaleDE: function(test) {
        test.expect(2);
        new PhoneLocale({locale: "de-DE",
            sync: false,
            onLoad: function(loc) {
                test.ok(typeof(loc) !== "undefined");
                test.equal(loc.getRegion(), "DE");
                test.done();
            }
        });
    },

    testPhoneLocAsyncDefault: function(test) {
        test.expect(2);
        new PhoneLocale({
            sync: false,
            onLoad: function(loc) {
                test.ok(typeof(loc) !== "undefined");
                test.equal(loc.region, "US");
                test.done();
            }
        });
    },

    testPhoneLocAsyncDefaultEmpty: function(test) {
        test.expect(2);
        new PhoneLocale({
            sync: false,
            onLoad: function(loc) {
                test.ok(typeof(loc) !== "undefined");
                test.equal(loc.region, "US");
                test.done();
            }
        });
    }
};
