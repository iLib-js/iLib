/*
 * testcountryasync.js - test the country routines
 *
 * Copyright © 2018, LGE
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

if (typeof(Country) === "undefined") {
    var Country = require("../.././../lib/Country.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testcountryasync = {
    testCountryAsyncConstructorEmpty: function(test) {
        test.expect(1);
        new Country({
            sync: false,
            onLoad: function(ctry) {
                test.ok(ctry !== null);
                test.done();
            }
        });
    },

    testCountryAsyncLocale1: function(test) {
        test.expect(4);
        new Country({
            locale: "ko-KR",
            sync: false,
            onLoad: function(ctry) {
                test.ok(ctry !== null);

                test.equal(ctry.getName("CD"), "콩고-킨샤사");
                test.equal(ctry.getCode("콩고-킨샤사"), "CD");
                var locale = ctry.getLocale();
                test.equal(locale.toString(), "ko-KR");
                test.done();
            }
        });
    },

    testCountryAsyncLocale2: function(test) {
        test.expect(4);
        new Country({
            locale: "en-US",
            sync: false,
            onLoad: function(ctry) {
                test.ok(ctry !== null);

                test.equal(ctry.getName("CD"), "Congo - Kinshasa");
                test.equal(ctry.getCode("Congo - Kinshasa"), "CD");
                var locale = ctry.getLocale();
                test.equal(locale.toString(), "en-US");
                test.done();
            }
        });
    },

    testCountryAsyncGetByCodeUnknown: function(test) {
        new Country({
            locale: "en-US",
            sync: false,
            onLoad: function(ctry) {
                try {
                    ctry.getName('xxx');
                    test.fail();
                } catch (e) {
                    test.equal(e, "Country xxx is unknown");
                }
                test.done();
            }
        });
    },

    testCountryAsyncJP: function(test) {
        test.expect(4);
        new Country({
            locale: "ja-JP",
            sync: false,
            onLoad: function (ctry) {
                test.ok(ctry !== null);

                test.equal(ctry.getName("JP"), "日本");
                test.equal(ctry.getCode("日本"), "JP");
                var locale = ctry.getLocale();
                test.equal(locale.toString(), "ja-JP");
                test.done();
            }
        });
    }
};
