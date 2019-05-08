/*
 * testcountry.js - test the country routines
 *
 * Copyright © 2017, JEDLSoft
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
    var Country = require("../../lib/Country.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testcountry = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testCountryConstructorEmpty: function(test) {
        test.expect(1);
        var ctry = new Country();
    
        test.ok(ctry !== null);
        test.done();
    },
    
    testCountryDefaultLocale: function(test) {
        test.expect(3);
        var ctry = new Country();
        test.ok(ctry !== null);
    
        var locale = ctry.getLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.toString(), "en-US");
        test.done();
    },
    
    testCountryWrongLocale: function(test) {
        test.expect(5);
        var ctry = new Country({
            locale: "abc-YZ"
        });
        test.ok(ctry !== null);
    
        test.equal(ctry.getName("CD"), "Congo - Kinshasa");
        test.equal(ctry.getCode("Congo - Kinshasa"), "CD");
        var locale = ctry.getLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.toString(), "abc-YZ");
        test.done();
    },
    
    testCountryLocale1: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "ko-KR"
        });
        test.ok(ctry !== null);
    
        test.equal(ctry.getName("CD"), "콩고-킨샤사");
        test.equal(ctry.getCode("콩고-킨샤사"), "CD");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "ko-KR");
        test.done();
    },
    
    testCountryLocale2: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "en-US"
        });
        test.ok(ctry !== null);
    
        test.equal(ctry.getName("CD"), "Congo - Kinshasa");
        test.equal(ctry.getCode("Congo - Kinshasa"), "CD");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "en-US");
        test.done();
    },
    
    testCountryLocale3: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "zh-Hans-CN"
        });
        test.ok(ctry !== null);
    
        test.equal(ctry.getName("CD"), "刚果（金）");
        test.equal(ctry.getCode("刚果（金）"), "CD");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "zh-Hans-CN");
        test.done();
    },
    
    testCountryLocale4: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "ja-JP"
        });
        test.ok(ctry !== null);
    
        test.equal(ctry.getName("CD"), "コンゴ民主共和国(キンシャサ)");
        test.equal(ctry.getCode("コンゴ民主共和国(キンシャサ)"), "CD");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "ja-JP");
        test.done();
    },
    
    testCountryGetByCodeUnknown: function(test) {
        try {
            var ctry = new Country();
            ctry.getName('xxx');
        } catch (e) {
            test.equal(e, "Country xxx is unknown");
        }
        test.done();
    },
    
    testCountryGetByNameUnknown: function(test) {
        try {
            var ctry = new Country();
            ctry.getCode('xxx');
        } catch (e) {
            test.equal(e, "Country xxx is unknown");
        }
        test.done();
    },
    
    testCountryAsync: function(test) {
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
