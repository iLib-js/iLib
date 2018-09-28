/*
 * testnumprs.js - test the number parsing routines
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

if (typeof(INumber) === "undefined") {
    var INumber = require("../../lib/INumber.js");
}

if (typeof(LocaleInfo) === "undefined") {
    var LocaleInfo = require("../../lib/LocaleInfo.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testnumprs = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testNumberConstructorDefault: function(test) {
        test.expect(1);
        var num = new INumber("3.4");
        test.ok(num !== null);
        test.done();
    },

    testNumberConstructorWithPrimitiveNumber: function(test) {
        test.expect(1);
        var num = new INumber(3.4);
        test.ok(num !== null);
        test.done();
    },

    testNumberConstructorWithNumber: function(test) {
        test.expect(1);
        var num = new INumber(new Number(3.4));
        test.ok(num !== null);
        test.done();
    },

    testNumberConstructorWithIlibNumber: function(test) {
        test.expect(1);
        var num = new INumber(new INumber("3.4"));
        test.ok(num !== null);
        test.done();
    },

    testNumberGetLocaleDefault: function(test) {
        test.expect(2);
        var num = new INumber("3.4");
        test.ok(num !== null);

        test.equal(num.getLocale().getSpec(), "en-US");
        test.done();
    },

    testNumberGetLocaleOther: function(test) {
        test.expect(2);
        var num = new INumber("3.4", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.equal(num.getLocale().getSpec(), "de-DE");
        test.done();
    },

    testNumberFloat: function(test) {
        test.expect(2);
        var num = new INumber("3.4");
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.4);
        test.done();
    },

    testNumberFloatWithPrimitiveNumber: function(test) {
        test.expect(2);
        var num = new INumber(3.4);
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.4);
        test.done();
    },

    testNumberFloatWithNumberObject: function(test) {
        test.expect(2);
        var num = new INumber(new Number(3.4));
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.4);
        test.done();
    },

    testNumberFloatWithIlibNumberObject: function(test) {
        test.expect(2);
        var num = new INumber(new INumber(3.4));
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.4);
        test.done();
    },

    testNumberFloatThousands: function(test) {
        test.expect(2);
        var num = new INumber("1,233.4");
        test.ok(num !== null);

        test.equal(num.valueOf(), 1233.4);
        test.done();
    },

    testNumberFloatNegative: function(test) {
        test.expect(2);
        var num = new INumber("-1233.4");
        test.ok(num !== null);

        test.equal(num.valueOf(), -1233.4);
        test.done();
    },

    testNumberFloatIgnoreInternalDashes: function(test) {
        test.expect(2);
        var num = new INumber("123-33.4");
        test.ok(num !== null);

        test.equal(num.valueOf(), 12333.4);
        test.done();
    },

    testNumberFloatIgnoreInternalDashesNegative: function(test) {
        test.expect(2);
        var num = new INumber("-123-33.4");
        test.ok(num !== null);

        test.equal(num.valueOf(), -12333.4);
        test.done();
    },

    testNumberFloatThousandsNoFormatting: function(test) {
        test.expect(2);
        var num = new INumber("1233.4");
        test.ok(num !== null);

        test.equal(num.valueOf(), 1233.4);
        test.done();
    },

    testNumberFloatThousandsBogusFormatting: function(test) {
        test.expect(2);
        var num = new INumber("1,2,3,3,.4");
        test.ok(num !== null);

        test.equal(num.valueOf(), 1233.4);
        test.done();
    },

    testNumberFloatInvalid: function(test) {
        test.expect(2);
        var num = new INumber("1.A4");
        test.ok(num !== null);

        // just parse what you can and ignore the rest
        test.equal(num.valueOf(), 1.4);
        test.done();
    },

    testNumberFloatStartsWithDecimal: function(test) {
        test.expect(2);
        var num = new INumber(".4342");
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.4342);
        test.done();
    },

    testNumberFloatStartsWithZero: function(test) {
        test.expect(2);
        var num = new INumber("0.4342");
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.4342);
        test.done();
    },

    testNumberFloatStartsWithDecimalNegative: function(test) {
        test.expect(2);
        var num = new INumber("-.4342");
        test.ok(num !== null);

        test.equal(num.valueOf(), -0.4342);
        test.done();
    },

    testNumberFloatStartsWithZeroNegative: function(test) {
        test.expect(2);
        var num = new INumber("-0.4342");
        test.ok(num !== null);

        test.equal(num.valueOf(), -0.4342);
        test.done();
    },

    testNumberFloatLargerNumber: function(test) {
        test.expect(2);
        var num = new INumber('23224234.23423');
        test.ok(num !== null);

        test.equal(num.valueOf(), 23224234.23423);
        test.done();
    },

    testNumberFloatNoLocaleData: function(test) {
        test.expect(2);

        // make sure the Russian locale info is already 
        // loaded before we shut off the loader
        var li = new LocaleInfo("ru-RU");

        var temp = ilib._load;
        ilib._load = undefined;
        var ctypedata = ilib.data.ctype;
        ilib.data.ctype = undefined;
        var ctype_n = ilib.data.ctype_n;
        ilib.data.ctype_n = undefined;

        var num = new INumber('23224234,23423', {locale: "ru-RU"});
        test.ok(num !== null);

        test.equal(num.valueOf(), 23224234.23423);

        ilib._load = temp;
        ilib.data.ctype = ctypedata;
        ilib.data.ctype_n = ctype_n;

        test.done();
    },

    testNumberInt: function(test) {
        test.expect(2);
        var num = new INumber("123");
        test.ok(num !== null);

        test.equal(num.valueOf(), 123);
        test.done();
    },

    testNumberIntThousands: function(test) {
        test.expect(2);
        var num = new INumber("123,456");
        test.ok(num !== null);

        test.equal(num.valueOf(), 123456);
        test.done();
    },

    testNumberInvalid: function(test) {
        test.expect(2);
        var num = new INumber("123.234.234");
        test.ok(num !== null);

        test.equal(num.valueOf(), 123.234);
        test.done();
    },

    testNumberEmpty: function(test) {
        test.expect(2);
        var num = new INumber("");
        test.ok(num !== null);

        test.equal(num.valueOf(), 0);
        test.done();
    },

    testNumberPercentage: function(test) {
        test.expect(2);
        var num = new INumber("58.3%", {type: "percentage"});
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.583);
        test.done();
    },

    testNumberPercentageNegative: function(test) {
        test.expect(2);
        var num = new INumber("-58.3%", {type: "percentage"});
        test.ok(num !== null);

        test.equal(num.valueOf(), -0.583);
        test.done();
    },

    testNumberPercentageNoTypeSpecified: function(test) {
        test.expect(2);
        var num = new INumber("58.3%");
        test.ok(num !== null);

        test.equal(num.valueOf(), 58.3);
        test.done();
    },

    testNumberCurrencyValue: function(test) {
        test.expect(2);
        var num = new INumber("$5.80", {type: "currency"});
        test.ok(num !== null);

        test.equal(num.valueOf(), 5.80);
        test.done();
    },

    testNumberCurrencyValueNegative1: function(test) {
        test.expect(2);
        var num = new INumber("$-5.80", {type: "currency"});
        test.ok(num !== null);

        test.equal(num.valueOf(), -5.80);
        test.done();
    },

    testNumberCurrencyValueNegative2: function(test) {
        test.expect(2);
        var num = new INumber("-$5.80", {type: "currency"});
        test.ok(num !== null);

        test.equal(num.valueOf(), -5.80);
        test.done();
    },

    testNumberCurrencyType: function(test) {
        test.expect(3);
        var num = new INumber("$5.80", {type: "currency"});
        test.ok(num !== null);

        var cur = num.getCurrency();
        test.ok(typeof(cur) !== "undefined");
        test.equal(cur.getCode(), "USD");
        test.done();
    },

    testNumberCurrencyTypeUsingISOCode: function(test) {
        test.expect(3);
        var num = new INumber("USD 5.80", {type: "currency"});
        test.ok(num !== null);

        var cur = num.getCurrency();
        test.ok(typeof(cur) !== "undefined");
        test.equal(cur.getCode(), "USD");
        test.done();
    },

    testNumberCurrencyNotForLocale: function(test) {
        test.expect(3);
        var num = new INumber("£5.80", {type: "currency"});
        test.ok(num !== null);

        var cur = num.getCurrency();
        test.ok(typeof(cur) !== "undefined");
        test.equal(cur.getCode(), "GBP");
        test.done();
    },

    testNumberCurrencyForLocale: function(test) {
        test.expect(3);
        var num = new INumber("£5.80", {locale: "ar-EG", type: "currency"});
        test.ok(num !== null);

        var cur = num.getCurrency();
        test.ok(typeof(cur) !== "undefined");
        test.equal(cur.getCode(), "GBP");
        test.done();
    },

    testNumberFloatDE: function(test) {
        test.expect(2);
        var num = new INumber("3,4", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.4);
        test.done();
    },

    testNumberFloatDENegative: function(test) {
        test.expect(2);
        var num = new INumber("-3,4", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -3.4);
        test.done();
    },

    testNumberFloatDEThousands: function(test) {
        test.expect(2);
        var num = new INumber("1.233,4", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 1233.4);
        test.done();
    },

    testNumberFloatDEThousandsNegative: function(test) {
        test.expect(2);
        var num = new INumber("-1.233,4", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -1233.4);
        test.done();
    },

    testNumberFloatDEWithDashForZeros: function(test) {
        test.expect(2);
        var num = new INumber("3,-", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.0);
        test.done();
    },

    testNumberFloatDEStartsWithDecimal: function(test) {
        test.expect(2);
        var num = new INumber(",4342", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.4342);
        test.done();
    },

    testNumberFloatDEStartsWithZero: function(test) {
        test.expect(2);
        var num = new INumber("0,4342", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.4342);
        test.done();
    },

    testNumberFloatDEStartsWithDecimalNegative: function(test) {
        test.expect(2);
        var num = new INumber("-,4342", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -0.4342);
        test.done();
    },

    testNumberFloatDEStartsWithZeroNegative: function(test) {
        test.expect(2);
        var num = new INumber("-0,4342", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -0.4342);
        test.done();
    },

    testNumberFloatDEStartsWithPeriodIgnore: function(test) {
        test.expect(2);
        var num = new INumber(".4342", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 4342.0);
        test.done();
    },

    testNumberFloatDEWithMDashForZeros: function(test) {
        test.expect(2);
        var num = new INumber("3,—", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.0);
        test.done();
    },

    testNumberIntDE: function(test) {
        test.expect(2);
        var num = new INumber("123", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123);
        test.done();
    },

    testNumberIntDEThousands: function(test) {
        test.expect(2);
        var num = new INumber("123.456", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123456);
        test.done();
    },

    testNumberInvalidDE: function(test) {
        test.expect(2);
        var num = new INumber("123,234,234", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123.234);
        test.done();
    },

    testNumberEmptyDE: function(test) {
        test.expect(2);
        var num = new INumber("", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0);
        test.done();
    },

    testNumberPercentageDE: function(test) {
        test.expect(2);
        var num = new INumber("58,4 %", {
            locale: "de-DE",
            type: "percentage"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.584);
        test.done();
    },

    testNumberPercentageDENoTypeSpecified: function(test) {
        test.expect(2);
        var num = new INumber("58,4 %", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 58.4);
        test.done();
    },

    testNumberCurrencyDEValue: function(test) {
        test.expect(2);
        var num = new INumber("5,84 €", {
            locale: "de-DE",
            type: "currency"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 5.84);
        test.done();
    },

    testNumberCurrencyDEType: function(test) {
        test.expect(3);
        var num = new INumber("5,84 €", {
            locale: "de-DE",
            type: "currency"
        });
        test.ok(num !== null);

        var cur = num.getCurrency();
        test.ok(typeof(cur) !== "undefined");
        test.equal(cur.getCode(), "EUR");
        test.done();
    },

    testNumberCurrencyDENoTypeSpecified: function(test) {
        test.expect(2);
        var num = new INumber("5,84 €", {
            locale: "de-DE"
        });
        test.ok(num !== null);

        test.ok(typeof(num.getCurrency()) === "undefined");
        test.done();
    },

    testNumberCurrencyDETypeUsingISOCode: function(test) {
        test.expect(3);
        var num = new INumber("5,84 EUR", {
            locale: "de-DE",
            type: "currency"
        });
        test.ok(num !== null);

        var cur = num.getCurrency();
        test.ok(typeof(cur) !== "undefined");
        test.equal(cur.getCode(), "EUR");
        test.done();
    },

    testNumberZH: function(test) {
        test.expect(2);
        var num = new INumber("12,3234", {
            locale: "zh-CN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123234.0);
        test.done();
    },

    testNumberZHDecimal: function(test) {
        test.expect(2);
        var num = new INumber("12,3234.324", {
            locale: "zh-CN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123234.324);
        test.done();
    },


    testNumberParseAsync: function(test) {
        test.expect(2);
        new INumber("-0,4342", {
            locale: "de-DE",
            sync: false,
            onLoad: function (num) {
                test.ok(num !== null);

                test.equal(num.valueOf(), -0.4342);
                test.done();
            }
        });
    },

    testNumberParseAsyncCurrency: function(test) {
        test.expect(3);
        new INumber("5,84 EUR", {
            locale: "de-DE",
            type: "currency",
            sync: false,
            onLoad: function (num) {
                test.ok(num !== null);

                var cur = num.getCurrency();
                test.ok(typeof(cur) !== "undefined");
                test.equal(cur.getCode(), "EUR");
                test.done();
            }
        });
    },

    /*Test cases for Afrikaans*/
    testNumberFloatAF: function(test) {
        test.expect(2);
        var num = new INumber("3,4", {
            locale: "af-ZA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.4);
        test.done();
    },

    testNumberFloatAFNegative: function(test) {
        test.expect(2);
        var num = new INumber("-3,4", {
            locale: "af-ZA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -3.4);
        test.done();
    },

    testNumberFloatAFThousands: function(test) {
        test.expect(2);
        var num = new INumber("1.233,4", {
            locale: "af-ZA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 1233.4);
        test.done();
    },

    testNumberFloatAFThousandsNegative: function(test) {
        test.expect(2);
        var num = new INumber("-1.233,4", {
            locale: "af-ZA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -1233.4);
        test.done();
    },

    testNumberFloatAFWithDashForZeros: function(test) {
        test.expect(2);
        var num = new INumber("3,-", {
            locale: "af-ZA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.0);
        test.done();
    },

    testNumberFloatAFStartsWithDecimal: function(test) {
        test.expect(2);
        var num = new INumber(",4342", {
            locale: "af-ZA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.4342);
        test.done();
    },

    testNumberFloatAFStartsWithZero: function(test) {
        test.expect(2);
        var num = new INumber("0,4342", {
            locale: "af-ZA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.4342);
        test.done();
    },

    testNumberFloatAFStartsWithDecimalNegative: function(test) {
        test.expect(2);
        var num = new INumber("-,4342", {
            locale: "af-ZA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -0.4342);
        test.done();
    },

    testNumberFloatAFStartsWithZeroNegative: function(test) {
        test.expect(2);
        var num = new INumber("-0,4342", {
            locale: "af-ZA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -0.4342);
        test.done();
    },

    testNumberFloatAFStartsWithPeriodIgnore: function(test) {
        test.expect(2);
        var num = new INumber(".4342", {
            locale: "af-ZA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 4342.0);
        test.done();
    },

    testNumberFloatAFWithMDashForZeros: function(test) {
        test.expect(2);
        var num = new INumber("3,—", {
            locale: "af-ZA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.0);
        test.done();
    },

    testNumberIntAF: function(test) {
        test.expect(2);
        var num = new INumber("123", {
            locale: "af-ZA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123);
        test.done();
    },

    testNumberIntAFThousands: function(test) {
        test.expect(2);
        var num = new INumber("123.456", {
            locale: "af-ZA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123456);
        test.done();
    },

    testNumberInvalidAF: function(test) {
        test.expect(2);
        var num = new INumber("123,234,234", {
            locale: "af-ZA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123.234);
        test.done();
    },

    testNumberEmptyAF: function(test) {
        test.expect(2);
        var num = new INumber("", {
            locale: "af-ZA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0);
        test.done();
    },

    testNumberPercentageAF: function(test) {
        test.expect(2);
        var num = new INumber("58,4 %", {
            locale: "af-ZA",
            type: "percentage"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.584);
        test.done();
    },

    testNumberPercentageAFNoTypeSpecified: function(test) {
        test.expect(2);
        var num = new INumber("58,4 %", {
            locale: "af-ZA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 58.4);
        test.done();
    },

    testNumberCurrencyAFValue: function(test) {
        test.expect(2);
        var num = new INumber("R5,84", {
            locale: "af-ZA",
            type: "currency"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 5.84);
        test.done();
    },

    testNumberCurrencyAFType: function(test) {
        test.expect(3);
        var num = new INumber("R5,84", {
            locale: "af-ZA",
            type: "currency"
        });
        test.ok(num !== null);

        var cur = num.getCurrency();
        test.ok(typeof(cur) !== "undefined");
        test.equal(cur.getCode(), "ZAR");
        test.done();
    },

    testNumberCurrencyAFNoTypeSpecified: function(test) {
        test.expect(2);
        var num = new INumber("5,84 €", {
            locale: "af-ZA"
        });
        test.ok(num !== null);

        test.ok(typeof(num.getCurrency()) === "undefined");
        test.done();
    },

    testNumberCurrencyAFTypeUsingISOCode: function(test) {
        test.expect(3);
        var num = new INumber("5,84 ZAR", {
            locale: "af-ZA",
            type: "currency"
        });
        test.ok(num !== null);

        var cur = num.getCurrency();
        test.ok(typeof(cur) !== "undefined");
        test.equal(cur.getCode(), "ZAR");
        test.done();
    },
    /*Nambian*/
    /*Test cases for Afrikaans*/
    testNumberFloatNA: function(test) {
        test.expect(2);
        var num = new INumber("3,4", {
            locale: "af-NA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.4);
        test.done();
    },

    testNumberFloatNANegative: function(test) {
        test.expect(2);
        var num = new INumber("-3,4", {
            locale: "af-NA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -3.4);
        test.done();
    },

    testNumberFloatNAThousands: function(test) {
        test.expect(2);
        var num = new INumber("1.233,4", {
            locale: "af-NA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 1233.4);
        test.done();
    },

    testNumberFloatNAThousandsNegative: function(test) {
        test.expect(2);
        var num = new INumber("-1.233,4", {
            locale: "af-NA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -1233.4);
        test.done();
    },

    testNumberFloatNAWithDashForZeros: function(test) {
        test.expect(2);
        var num = new INumber("3,-", {
            locale: "af-NA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.0);
        test.done();
    },

    testNumberFloatNAStartsWithDecimal: function(test) {
        test.expect(2);
        var num = new INumber(",4342", {
            locale: "af-NA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.4342);
        test.done();
    },

    testNumberFloatNAStartsWithZero: function(test) {
        test.expect(2);
        var num = new INumber("0,4342", {
            locale: "af-NA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.4342);
        test.done();
    },

    testNumberFloatNAStartsWithDecimalNegative: function(test) {
        test.expect(2);
        var num = new INumber("-,4342", {
            locale: "af-NA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -0.4342);
        test.done();
    },

    testNumberFloatNAStartsWithZeroNegative: function(test) {
        test.expect(2);
        var num = new INumber("-0,4342", {
            locale: "af-NA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -0.4342);
        test.done();
    },

    testNumberFloatNAStartsWithPeriodIgnore: function(test) {
        test.expect(2);
        var num = new INumber(".4342", {
            locale: "af-NA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 4342.0);
        test.done();
    },

    testNumberFloatNAWithMDashForZeros: function(test) {
        test.expect(2);
        var num = new INumber("3,—", {
            locale: "af-NA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.0);
        test.done();
    },

    testNumberIntNA: function(test) {
        test.expect(2);
        var num = new INumber("123", {
            locale: "af-NA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123);
        test.done();
    },

    testNumberIntNAThousands: function(test) {
        test.expect(2);
        var num = new INumber("123.456", {
            locale: "af-NA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123456);
        test.done();
    },

    testNumberInvalidNA: function(test) {
        test.expect(2);
        var num = new INumber("123,234,234", {
            locale: "af-NA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123.234);
        test.done();
    },

    testNumberEmptyNA: function(test) {
        test.expect(2);
        var num = new INumber("", {
            locale: "af-NA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0);
        test.done();
    },

    testNumberPercentageNA: function(test) {
        test.expect(2);
        var num = new INumber("58,4 %", {
            locale: "af-NA",
            type: "percentage"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.584);
        test.done();
    },

    testNumberPercentageNANoTypeSpecified: function(test) {
        test.expect(2);
        var num = new INumber("58,4 %", {
            locale: "af-NA"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 58.4);
        test.done();
    },

    testNumberCurrencyNAValue: function(test) {
        test.expect(2);
        var num = new INumber("5,84 $", {
            locale: "af-NA",
            type: "currency"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 5.84);
        test.done();
    },

    testNumberCurrencyNAType: function(test) {
        test.expect(3);
        var num = new INumber("$5,84", {
            locale: "af-NA",
            type: "currency"
        });
        test.ok(num !== null);

        var cur = num.getCurrency();
        test.ok(typeof(cur) !== "undefined");
        test.equal(cur.getCode(), "NAD");
        test.done();
    },

    testNumberCurrencyNANoTypeSpecified: function(test) {
        test.expect(2);
        var num = new INumber("5,84 $", {
            locale: "af-NA"
        });
        test.ok(num !== null);

        test.ok(typeof(num.getCurrency()) === "undefined");
        test.done();
    },

    testNumberCurrencyNATypeUsingISOCode: function(test) {
        test.expect(3);
        var num = new INumber("5,84 NAD", {
            locale: "af-NA",
            type: "currency"
        });
        test.ok(num !== null);

        var cur = num.getCurrency();
        test.ok(typeof(cur) !== "undefined");
        test.equal(cur.getCode(), "NAD");
        test.done();
    },

    // number parsing test cases for Hausa
    testNumberFloat_ha_Latn_NG: function(test) {
        test.expect(2);
        var num = new INumber("3.4", {
            locale: "ha-Latn-NG"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.4);
        test.done();
    },

    testNumberFloat_ha_Latn_NG_Negative: function(test) {
        test.expect(2);
        var num = new INumber("-3.4", {
            locale: "ha-Latn-NG"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -3.4);
        test.done();
    },

    testNumberFloat_ha_Latn_NG_Thousands: function(test) {
        test.expect(2);
        var num = new INumber("1,233.4", {
            locale: "ha-Latn-NG"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 1233.4);
        test.done();
    },

    testNumberFloat_ha_Latn_NG_ThousandsNegative: function(test) {
        test.expect(2);
        var num = new INumber("-1,233.4", {
            locale: "ha-Latn-NG"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -1233.4);
        test.done();
    },

    testNumberFloat_ha_Latn_NG_WithDashForZeros: function(test) {
        test.expect(2);
        var num = new INumber("3.-", {
            locale: "ha-Latn-NG"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.0);
        test.done();
    },

    testNumberFloat_ha_Latn_NG_StartsWithDecimal: function(test) {
        test.expect(2);
        var num = new INumber(".4342", {
            locale: "ha-Latn-NG"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.4342);
        test.done();
    },

    testNumberFloat_ha_Latn_NG_StartsWithZero: function(test) {
        test.expect(2);
        var num = new INumber("0.4342", {
            locale: "ha-Latn-NG"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.4342);
        test.done();
    },

    testNumberFloat_ha_Latn_NG_StartsWithDecimalNegative: function(test) {
        test.expect(2);
        var num = new INumber("-.4342", {
            locale: "ha-Latn-NG"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -0.4342);
        test.done();
    },

    testNumberFloat_ha_Latn_NG_StartsWithZeroNegative: function(test) {
        test.expect(2);
        var num = new INumber("-0.4342", {
            locale: "ha-Latn-NG"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -0.4342);
        test.done();
    },

    testNumberFloat_ha_Latn_NG_StartsWithPeriodIgnore: function(test) {
        test.expect(2);
        var num = new INumber(",4342", {
            locale: "ha-Latn-NG"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 4342.0);
        test.done();
    },

    testNumberFloat_ha_Latn_NG_WithMDashForZeros: function(test) {
        test.expect(2);
        var num = new INumber("3.—", {
            locale: "ha-Latn-NG"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.0);
        test.done();
    },

    testNumberInt_ha_Latn_NG_: function(test) {
        test.expect(2);
        var num = new INumber("123", {
            locale: "ha-Latn-NG"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123);
        test.done();
    },

    testNumberInt_ha_Latn_NG_Thousands: function(test) {
        test.expect(2);
        var num = new INumber("123,456", {
            locale: "ha-Latn-NG"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123456);
        test.done();
    },

    testNumberInvalid_ha_Latn_NG_: function(test) {
        test.expect(2);
        var num = new INumber("123.234.234", {
            locale: "ha-Latn-NG"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123.234);
        test.done();
    },

    testNumberEmpty_ha_Latn_NG_: function(test) {
        test.expect(2);
        var num = new INumber("", {
            locale: "ha-Latn-NG"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0);
        test.done();
    },

    testNumberPercentage_ha_Latn_NG_: function(test) {
        test.expect(2);
        var num = new INumber("58.4 %", {
            locale: "ha-Latn-NG",
            type: "percentage"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.584);
        test.done();
    },

    testNumberPercentage_ha_Latn_NG_NoTypeSpecified: function(test) {
        test.expect(2);
        var num = new INumber("58.4 %", {
            locale: "ha-Latn-NG"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 58.4);
        test.done();
    },

    testNumberCurrency_ha_Latn_NG_Value: function(test) {
        test.expect(2);
        var num = new INumber("5.84 ₦", {
            locale: "ha-Latn-NG",
            type: "currency"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 5.84);
        test.done();
    },

    testNumberCurrency_ha_Latn_NG_Type: function(test) {
        test.expect(3);
        var num = new INumber("5.84 ₦", {
            locale: "ha-Latn-NG",
            type: "currency"
        });
        test.ok(num !== null);

        var cur = num.getCurrency();
        test.ok(typeof(cur) !== "undefined");
        test.equal(cur.getCode(), "NGN");
        test.done();
    },

    testNumberCurrency_ha_Latn_NG_NoTypeSpecified: function(test) {
        test.expect(2);
        var num = new INumber("5.84 ₦", {
            locale: "ha-Latn-NG"
        });
        test.ok(num !== null);

        test.ok(typeof(num.getCurrency()) === "undefined");
        test.done();
    },

    testNumberCurrency_ha_Latn_NG_TypeUsingISOCode: function(test) {
        test.expect(3);
        var num = new INumber("5.84 NGN", {
            locale: "ha-Latn-NG",
            type: "currency"
        });
        test.ok(num !== null);

        var cur = num.getCurrency();
        test.ok(typeof(cur) !== "undefined");
        test.equal(cur.getCode(), "NGN");
        test.done();
    },

    // number parsing test cases for Oriya
    testNumberFloat_or_IN: function(test) {
        test.expect(2);
        var num = new INumber("3.4", {
            locale: "or-IN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.4);
        test.done();
    },

    testNumberFloat_or_INNegative: function(test) {
        test.expect(2);
        var num = new INumber("-3.4", {
            locale: "or-IN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -3.4);
        test.done();
    },

    testNumberFloat_or_IN_Thousands: function(test) {
        test.expect(2);
        var num = new INumber("1,233.4", {
            locale: "or-IN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 1233.4);
        test.done();
    },

    testNumberFloat_or_IN_ThousandsNegative: function(test) {
        test.expect(2);
        var num = new INumber("-1,233.4", {
            locale: "or-IN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -1233.4);
        test.done();
    },

    testNumberFloat_or_IN_WithDashForZeros: function(test) {
        test.expect(2);
        var num = new INumber("3.-", {
            locale: "or-IN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.0);
        test.done();
    },

    testNumberFloat_or_IN_StartsWithDecimal: function(test) {
        test.expect(2);
        var num = new INumber(".4342", {
            locale: "or-IN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.4342);
        test.done();
    },

    testNumberFloat_or_IN_StartsWithZero: function(test) {
        test.expect(2);
        var num = new INumber("0.4342", {
            locale: "or-IN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.4342);
        test.done();
    },

    testNumberFloat_or_IN_StartsWithDecimalNegative: function(test) {
        test.expect(2);
        var num = new INumber("-.4342", {
            locale: "or-IN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -0.4342);
        test.done();
    },

    testNumberFloat_or_IN_StartsWithZeroNegative: function(test) {
        test.expect(2);
        var num = new INumber("-0.4342", {
            locale: "or-IN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -0.4342);
        test.done();
    },

    testNumberFloat_or_IN_StartsWithPeriodIgnore: function(test) {
        test.expect(2);
        var num = new INumber(",4342", {
            locale: "or-IN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 4342.0);
        test.done();
    },

    testNumberFloat_or_IN_WithMDashForZeros: function(test) {
        test.expect(2);
        var num = new INumber("3.—", {
            locale: "or-IN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.0);
        test.done();
    },

    testNumberInt_or_IN_: function(test) {
        test.expect(2);
        var num = new INumber("123", {
            locale: "or-IN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123);
        test.done();
    },

    testNumberInt_or_IN_Thousands: function(test) {
        test.expect(2);
        var num = new INumber("123,456", {
            locale: "or-IN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123456);
        test.done();
    },

    testNumberInvalid_or_IN_: function(test) {
        test.expect(2);
        var num = new INumber("123.234.234", {
            locale: "or-IN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123.234);
        test.done();
    },

    testNumberEmpty_or_IN_: function(test) {
        test.expect(2);
        var num = new INumber("", {
            locale: "or-IN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0);
        test.done();
    },

    testNumberPercentage_or_IN_: function(test) {
        test.expect(2);
        var num = new INumber("58.4 %", {
            locale: "or-IN",
            type: "percentage"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.584);
        test.done();
    },

    testNumberPercentage_or_IN_NoTypeSpecified: function(test) {
        test.expect(2);
        var num = new INumber("58.4 %", {
            locale: "or-IN"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 58.4);
        test.done();
    },

    testNumberCurrency_or_IN_Value: function(test) {
        test.expect(2);
        var num = new INumber("5.84 ₹", {
            locale: "or-IN",
            type: "currency"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 5.84);
        test.done();
    },

    testNumberCurrency_or_IN_Type: function(test) {
        test.expect(3);
        var num = new INumber("5.84 ₹", {
            locale: "or-IN",
            type: "currency"
        });
        test.ok(num !== null);

        var cur = num.getCurrency();
        test.ok(typeof(cur) !== "undefined");
        test.equal(cur.getCode(), "INR");
        test.done();
    },

    testNumberCurrency_or_IN_NoTypeSpecified: function(test) {
        test.expect(2);
        var num = new INumber("5.84 ₹", {
            locale: "or-IN"
        });
        test.ok(num !== null);

        test.ok(typeof(num.getCurrency()) === "undefined");
        test.done();
    },

    testNumberCurrency_or_IN_TypeUsingISOCode: function(test) {
        test.expect(3);
        var num = new INumber("5.84 IND", {
            locale: "or-IN",
            type: "currency"
        });
        test.ok(num !== null);

        var cur = num.getCurrency();
        test.ok(typeof(cur) !== "undefined");
        test.equal(cur.getCode(), "INR");
        test.done();
    },
    /*Amharic test cases */
    testNumberFloatET: function(test) {
        test.expect(2);
        var num = new INumber("3.4", {
            locale: "am-ET"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.4);
        test.done();
    },

    testNumberFloatETNegative: function(test) {
        test.expect(2);
        var num = new INumber("-3.4", {
            locale: "am-ET"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -3.4);
        test.done();
    },

    testNumberFloatETThousands: function(test) {
        test.expect(2);
        var num = new INumber("1.233.4", {
            locale: "am-ET"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 1.233);
        test.done();
    },

    testNumberFloatETThousandsNegative: function(test) {
        test.expect(2);
        var num = new INumber("-1.2334", {
            locale: "am-ET"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -1.2334);
        test.done();
    },

    testNumberFloatETWithDashForZeros: function(test) {
        test.expect(2);
        var num = new INumber("3.-", {
            locale: "am-ET"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.0);
        test.done();
    },

    testNumberFloatETStartsWithDecimal: function(test) {
        test.expect(2);
        var num = new INumber(".4342", {
            locale: "am-ET"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.4342);
        test.done();
    },

    testNumberFloatETStartsWithZero: function(test) {
        test.expect(2);
        var num = new INumber("0.4342", {
            locale: "am-ET"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.4342);
        test.done();
    },

    testNumberFloatETStartsWithDecimalNegative: function(test) {
        test.expect(2);
        var num = new INumber("-.4342", {
            locale: "am-ET"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -0.4342);
        test.done();
    },

    testNumberFloatETStartsWithZeroNegative: function(test) {
        test.expect(2);
        var num = new INumber("-0.4342", {
            locale: "am-ET"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), -0.4342);
        test.done();
    },

    testNumberFloatETStartsWithPeriodIgnore: function(test) {
        test.expect(2);
        var num = new INumber("4342", {
            locale: "am-ET"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 4342.0);
        test.done();
    },

    testNumberFloatETWithMDashForZeros: function(test) {
        test.expect(2);
        var num = new INumber("3.—", {
            locale: "am-ET"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 3.0);
        test.done();
    },

    testNumberIntET: function(test) {
        test.expect(2);
        var num = new INumber("123", {
            locale: "am-ET"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123);
        test.done();
    },

    testNumberIntETThousands: function(test) {
        test.expect(2);
        var num = new INumber("123,456", {
            locale: "am-ET"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123456);
        test.done();
    },

    testNumberInvalidET: function(test) {
        test.expect(2);
        var num = new INumber("123.234.234", {
            locale: "am-ET"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 123.234);
        test.done();
    },

    testNumberEmptyET: function(test) {
        test.expect(2);
        var num = new INumber("", {
            locale: "am-ET"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0);
        test.done();
    },

    testNumberPercentageET: function(test) {
        test.expect(2);
        var num = new INumber("58.4 %", {
            locale: "am-ET",
            type: "percentage"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 0.584);
        test.done();
    },

    testNumberPercentageETNoTypeSpecified: function(test) {
        test.expect(2);
        var num = new INumber("58.4 %", {
            locale: "am-ET"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 58.4);
        test.done();
    },

    testNumberCurrencyETValue: function(test) {
        test.expect(2);
        var num = new INumber("5.84 Br", {
            locale: "am-ET",
            type: "currency"
        });
        test.ok(num !== null);

        test.equal(num.valueOf(), 5.84);
        test.done();
    },

    testNumberCurrencyETType: function(test) {
        test.expect(3);
        var num = new INumber("Br 5.84", {
            locale: "am-ET",
            type: "currency"
        });
        test.ok(num !== null);

        var cur = num.getCurrency();
        test.ok(typeof(cur) !== "undefined");
        test.equal(cur.getCode(), "ETB");
        test.done();
    },

    testNumberCurrencyETNoTypeSpecified: function(test) {
        test.expect(2);
        var num = new INumber("5.84 €", {
            locale: "am-ET"
        });
        test.ok(num !== null);

        test.ok(typeof(num.getCurrency()) === "undefined");
        test.done();
    },

    testNumberCurrencyETTypeUsingISOCode: function(test) {
        test.expect(3);
        var num = new INumber("5.84 ETB", {
            locale: "am-ET",
            type: "currency"
        });
        test.ok(num !== null);

        var cur = num.getCurrency();
        test.ok(typeof(cur) !== "undefined");
        test.equal(cur.getCode(), "ETB");
        test.done();
    }

};