/*
 * testlocalematchasync.js - test the locale matcher object
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

if (typeof(LocaleMatcher) === "undefined") {
    var LocaleMatcher = require("../.././../lib/LocaleMatcher.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testlocalematchasync = {
    testLocaleMatcherAsyncConstructor: function(test) {
        test.expect(1);
        var loc = new LocaleMatcher({
            sync: false,
            onLoad: function(lm) {
                test.ok(lm !== null);
                test.done();
            }
        });
    },

    testLocaleMatcherAsyncGetLikelyLocaleByLanguage1: function(test) {
        test.expect(3);
        new LocaleMatcher({
            locale: "uz",
            sync: false,
            onLoad: function(lm) {
                test.ok(typeof(lm) !== "undefined");
                var locale = lm.getLikelyLocale();
                test.ok(typeof(locale) !== "undefined");
                test.equal(locale.getSpec(), "uz-Latn-UZ");
                test.done();
            }
        });
    },

    testLocaleMatcherAsyncGetLikelyLocaleByRegion: function(test) {
        test.expect(3);
        new LocaleMatcher({
            locale: "UZ",
            sync: false,
            onLoad: function(lm) {
                test.ok(typeof(lm) !== "undefined");
                var locale = lm.getLikelyLocale();
                test.ok(typeof(locale) !== "undefined");
                test.equal(locale.getSpec(), "uz-Latn-UZ");
                test.done();
            }
        });
    },

    testLocaleMatcherAsyncGetLikelyLocaleByScript: function(test) {
        test.expect(3);
        new LocaleMatcher({
            locale: "Arab",
            sync: false,
            onLoad: function(lm) {
                test.ok(typeof(lm) !== "undefined");
                var locale = lm.getLikelyLocale();
                test.ok(typeof(locale) !== "undefined");
                test.equal(locale.getSpec(), "ar-Arab-EG");
                test.done();
            }
        });
    }
};
