/*
 * testcurrency.js - test the currency routines
 *
 * Copyright © 2012-2017, JEDLSoft
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

if (typeof(Currency) === "undefined") {
    var Currency = require("../.././../lib/Currency.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testcurrency = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testCurrencyConstructorEmpty: function(test) {
        var cur = new Currency();
    
        test.expect(1);
        test.ok(cur !== null);
        test.done();
    },
    
    testCurrencyDefaults: function(test) {
        var cur = new Currency();
        test.expect(7);
        test.ok(cur !== null);
    
        test.equal(cur.getCode(), "USD");
        test.equal(cur.getFractionDigits(), 2);
        test.equal(cur.getSign(), "$");
        test.equal(cur.getName(), "US Dollar");
        var locale = cur.getLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.toString(), "en-US");
        test.done();
    },
    
    testCurrencyGetByCode1: function(test) {
        var cur = new Currency({
            code: "EUR"
        });
        test.expect(6);
        test.ok(cur !== null);
    
        test.equal(cur.getCode(), "EUR");
        test.equal(cur.getFractionDigits(), 2);
        test.equal(cur.getSign(), "€");
        test.equal(cur.getName(), "Euro");
        var locale = cur.getLocale();
        test.equal(locale.toString(), "en-US");
        test.done();
    },
    
    testCurrencyGetByCode2: function(test) {
        var cur = new Currency({
            code: "JPY"
        });
        test.expect(6);
        test.ok(cur !== null);
    
        test.equal(cur.getCode(), "JPY");
        test.equal(cur.getFractionDigits(), 0);
        test.equal(cur.getSign(), "¥");
        test.equal(cur.getName(), "Japanese Yen");
        var locale = cur.getLocale();
        test.equal(locale.toString(), "en-US");
        test.done();
    },
    
    testCurrencyGetByCodeUnknown: function(test) {
        try {
            var cur = new Currency({
                code: "xxx"
            });
        test.fail()
        } catch (e) {
            test.equal(e, "currency xxx is unknown");
        }
        test.done();
    },
    
    testCurrencyGetBySignUnambiguous: function(test) {
        var cur = new Currency({
            sign: "€"
        });
        test.expect(6);
        test.ok(cur !== null);
    
        test.equal(cur.getCode(), "EUR");
        test.equal(cur.getFractionDigits(), 2);
        test.equal(cur.getSign(), "€");
        test.equal(cur.getName(), "Euro");
        var locale = cur.getLocale();
        test.equal(locale.toString(), "en-US");
        test.done();
    },
    
    testCurrencyGetBySignAmbiguousCurrentLocale: function(test) {
        var cur = new Currency({
            locale: "en-CA",
            sign: "$"
        });
        test.expect(6);
        test.ok(cur !== null);
    
        test.equal(cur.getCode(), "CAD");
        test.equal(cur.getFractionDigits(), 2);
        test.equal(cur.getSign(), "$");
        test.equal(cur.getName(), "Canadian Dollar");
        var locale = cur.getLocale();
        test.equal(locale.toString(), "en-CA");
        test.done();
    },
    
    testCurrencyGetBySignAmbiguousNotCurrentLocale: function(test) {
        var cur = new Currency({
            locale: "en-GB",
            sign: "$"
        });
        test.expect(6);
        test.ok(cur !== null);
    
        test.equal(cur.getCode(), "USD");
        test.equal(cur.getFractionDigits(), 2);
        test.equal(cur.getSign(), "$");
        test.equal(cur.getName(), "US Dollar");
        var locale = cur.getLocale();
        test.equal(locale.toString(), "en-GB");
        test.done();
    },
    
    testCurrencyAsync: function(test) {
        new Currency({
            locale: "en-GB",
            sign: "$",
            sync: false,
            onLoad: function (cur) {
        test.expect(6);
                test.ok(cur !== null);
    
                test.equal(cur.getCode(), "USD");
                test.equal(cur.getFractionDigits(), 2);
                test.equal(cur.getSign(), "$");
                test.equal(cur.getName(), "US Dollar");
                var locale = cur.getLocale();
                test.equal(locale.toString(), "en-GB");
                test.done();
            }
        });
    }
    
};