/*
 * testlocaleinfoasync.js - test the locale info object
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
if (typeof(LocaleInfo) === "undefined") {
    var LocaleInfo = require("../../lib/LocaleInfo.js");
}

module.exports.testlocaleinfoasync = {
    testLocaleInfoAsyncConstructor: function(test) {
        test.expect(5);
        new LocaleInfo(undefined, {
            sync: false,
            onLoad: function(info) {
                test.ok(info !== null);

                var loc = info.getLocale();
                test.ok(loc !== null);

                test.equal(loc.getLanguage(), "en");
                test.equal(loc.getRegion(), "US");
                test.ok(typeof(loc.getVariant()) === "undefined");
                test.done();
            }
        });
    },

    testLocaleInfoAsyncConstructorGivenLocale: function(test) {
        test.expect(4);
        new LocaleInfo("de-DE", {
            sync: false,
            onLoad: function(info) {
                test.ok(info !== null);

                var loc = info.getLocale();

                test.equal(loc.getLanguage(), "de");
                test.equal(loc.getRegion(), "DE");
                test.ok(typeof(loc.getVariant()) === "undefined");
                test.done();
            }
        });
    },

    testLocaleInfoAsyncGetTimeZoneDefault: function(test) {
        test.expect(2);
        new LocaleInfo("zz-ZZ", {
            sync: false,
            onLoad: function(info) {
                test.ok(info !== null);

                test.equal(info.getTimeZone(), "Etc/UTC");
                test.done();
            }
        });
    },

    testLocaleInfoAsyncGetCurrencyUnknown: function(test) {
        test.expect(2);
        new LocaleInfo("zxx-XX", {
            sync: false,
            onLoad: function(info) {
                test.ok(info !== null);

                test.equal(info.getCurrency(), "USD");
                test.done();
            }
        });
    },

    testLocaleInfoAsyncGetDecimalSeparatorfor_ko_KR: function(test) {
        test.expect(5);
        new LocaleInfo("ko-KR", {
            sync: false,
            onLoad: function(info) {
                test.ok(info !== null);
                test.equal(info.getDecimalSeparator(), ".");
                test.equal(info.getGroupingSeparator(), ",");
                test.equal(info.getPercentageFormat(), "{n}%");
                test.equal(info.getCurrencyFormats().common, "{s}{n}");
                test.done();
            }
        });
    },

    testLocaleInfoAsyncGetDecimalSeparatorfor_fr_FR: function(test) {
        test.expect(5);
        new LocaleInfo("fr-FR", {
            sync: false,
            onLoad: function(info) {
                test.ok(info !== null);
                test.equal(info.getDecimalSeparator(), ",");
                test.equal(info.getGroupingSeparator(), ' ');
                test.equal(info.getPercentageFormat(), "{n} %");
                test.equal(info.getCurrencyFormats().common, "{n} {s}");
                test.done();
            }
        });
    },

    testLocaleInfoAsyncGetDecimalSeparatorfor_zh_Hant_US: function(test) {
        test.expect(5);
        // test mixing locale parts for a non-standard locale
        new LocaleInfo("zh-Hant-US", {
            sync: false,
            onLoad: function(info) {
                test.ok(info !== null);
                test.equal(info.getDecimalSeparator(), ".");
                test.equal(info.getGroupingSeparator(), ",");
                test.equal(info.getRoundingMode(), "halfdown");
                test.equal(info.getCurrency(), "USD");
                test.done();
            }
        });
    }
};
