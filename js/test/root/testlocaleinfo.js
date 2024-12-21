/*
 * testlocaleinfo.js - test the locale info object
 *
 * Copyright © 2012-2017, 2020-2024 JEDLSoft
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

function mockLoaderLI(paths, sync, params, callback) {
    var data = [];
    // for the generic, shared stuff
    paths.forEach(function (path) {
        if (path.search("fr/localeinfo.json$") !== -1) {
            data.push({
                "language.name": "French",
                "numfmt": {
                    "groupChar": " ",
                    "currencyFormats": {
                        "common": "{n} {s}",
                        "commonNegative": "({n} {s})"
                    },
                    "pctFmt": "{n} %"
                },
                "paperSizes": {
                    "regular": "A4",
                    "photo": "4x6"
                },
                "scripts": [
                    "Latn"
                ],
                "locale": "fr"
            });
        } else if (path.search("FR/localeinfo.json$") !== -1) {
            data.push({
                "currency": "EUR",
                "firstDayOfWeek": 1,
                "region.name": "France",
                "timezone": "Europe/Paris",
                "locale": "FR"
            });
        } else if (path.search("yyy/localeinfo.json$") !== -1) {
            data.push((path.indexOf('yyy') === -1) ? undefined : {
                "clock": "24",
                "units": "metric",
                "calendar": "hebrew",
                "firstDayOfWeek": 4,
                "currency": "JPY",
                "timezone": "Asia/Tokyo",
                "numfmt": {
                    "decimalChar": ".",
                    "groupChar": ",",
                    "groupSize": 4,
                    "pctFmt": "{n} %",
                    "pctChar": "%",
                    "currencyFormats": {
                        "common": "common {s} {n}",
                        "iso": "iso {s} {n}"
                    }
                },
                "locale": "yyy-ZZ"
            });
        } else if (path === "qq/localeinfo.json") {
            data.push({
                "calendar": "gregorian",
                "clock": "24",
                "currency": "USD",
                "firstDayOfWeek": 1,
                "numfmt": {
                    "script": "Latn",
                    "decimalChar": ",",
                    "groupChar": ".",
                    "prigroupSize": 3,
                    "pctFmt": "{n}%",
                    "pctChar": "%",
                    "roundingMode": "halfdown",
                    "exponential": "e",
                    "currencyFormats": {
                        "common": "{s}{n}",
                        "commonNegative": "{s}-{n}"
                    }
                },
                "timezone": "Etc/UTC",
                "units": "metric"
            });
        } else {
            data.push(undefined);
        }
    });
    if (typeof (callback) !== 'undefined') {
        callback.call(this, data);
    }
    return data;
};

// locale with no script
ilib.data.localeinfo_fr_FR_overseas = {
    "currency": "USD",
    "locale": "fr-FR-overseas",
    "timezone": "Pacific/Tahiti"
};

var oldLoader = ilib._load;

module.exports.testlocaleinfo = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    tearDown: function(callback) {
        ilib._load = oldLoader;
        callback();
    },
    testLocaleInfoConstructor: function(test) {
        test.expect(1);
        var loc = new LocaleInfo();

        test.ok(loc !== null);
        test.done();
    },
    testLocaleInfoConstructorCurrentLocale: function(test) {
        test.expect(4);
        ilib.locale = undefined;
        var loc, info = new LocaleInfo(); // gives locale of the host JS engine

        test.ok(info !== null);

        loc = info.getLocale();

        test.equal(loc.getLanguage(), "en");
        test.equal(loc.getRegion(), "US");
        test.ok(typeof(loc.getVariant()) === "undefined");
        test.done();
    },
    testLocaleInfoConstructorGivenLocale: function(test) {
        test.expect(4);
        var loc, info = new LocaleInfo("de-DE");

        test.ok(info !== null);

        loc = info.getLocale();

        test.equal(loc.getLanguage(), "de");
        test.equal(loc.getRegion(), "DE");
        test.ok(typeof(loc.getVariant()) === "undefined");
        test.done();
    },
    testLocaleInfoGetClockUS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-US");
        test.ok(info !== null);

        test.equal(info.getClock(), "12");
        test.done();
    },
    testLocaleInfoGetClockCA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-CA");
        test.ok(info !== null);

        test.equal(info.getClock(), "12");
        test.done();
    },
    testLocaleInfoGetClockGB: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GB");
        test.ok(info !== null);

        test.equal(info.getClock(), "24");
        test.done();
    },
    testLocaleInfoGetClockDE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getClock(), "24");
        test.done();
    },
    testLocaleInfoGetCalendarUS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-US");
        test.ok(info !== null);

        test.equal(info.getCalendar(), "gregorian");
        test.done();
    },
    testLocaleInfoGetCalendarDE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getCalendar(), "gregorian");
        test.done();
    },
    testLocaleInfoGetUnitsUS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-US");
        test.ok(info !== null);

        test.equal(info.getUnits(), "uscustomary");
        test.done();
    },
    testLocaleInfoGetUnitsCA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-CA");
        test.ok(info !== null);

        test.equal(info.getUnits(), "metric");
        test.done();
    },
    testLocaleInfoGetUnitsGB: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GB");
        test.ok(info !== null);

        test.equal(info.getUnits(), "metric");
        test.done();
    },
    testLocaleInfoGetCalendarDE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getUnits(), "metric");
        test.done();
    },
    testLocaleInfoGetFirstDayOfWeekUS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-US");
        test.ok(info !== null);

        test.equal(info.getFirstDayOfWeek(), 0);
        test.done();
    },
    testLocaleInfoGetFirstDayOfWeekDE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getFirstDayOfWeek(), 1);
        test.done();
    },
    testLocaleInfoGetFirstDayOfWeekFR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-FR");
        test.ok(info !== null);

        test.equal(info.getFirstDayOfWeek(), 1);
        test.done();
    },
    testLocaleInfoGetTimeZoneUS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-US");
        test.ok(info !== null);

        test.equal(info.getTimeZone(), "America/New_York");
        test.done();
    },
    testLocaleInfoGetTimeZoneDE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getTimeZone(), "Europe/Berlin");
        test.done();
    },
    testLocaleInfoGetTimeZoneES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-ES");
        test.ok(info !== null);

        test.equal(info.getTimeZone(), "Europe/Madrid");
        test.done();
    },
    testLocaleInfoGetTimeZoneMM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("my-MM");
        test.ok(info !== null);
        test.equal(info.getTimeZone(), "Asia/Yangon");
        test.done();
    },
    testLocaleInfoGetTimeZoneCA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-CA");
        test.ok(info !== null);
        test.equal(info.getTimeZone(), "America/Toronto");
        test.done();
    },
    testLocaleInfoGetTimeZoneCH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-CH");
        test.ok(info !== null);
        test.equal(info.getTimeZone(), "Europe/Zurich");
        test.done();
    },
    testLocaleInfoGetTimeZoneKR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);
        test.equal(info.getTimeZone(), "Asia/Seoul");
        test.done();
    },
    testLocaleInfoGetTimeZoneBT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("dz-BT");
        test.ok(info !== null);
        test.equal(info.getTimeZone(), "Asia/Thimphu");
        test.done();
    },
    testLocaleInfoGetTimeZoneFO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fo-FO");
        test.ok(info !== null);
        test.equal(info.getTimeZone(), "Atlantic/Faroe");
        test.done();
    },
    testLocaleInfoGetTimeZoneFM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-FM");
        test.ok(info !== null);
        test.equal(info.getTimeZone(), "Pacific/Pohnpei");
        test.done();
    },
    testLocaleInfoGetTimeZoneDefault: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zz-ZZ");
        test.ok(info !== null);

        test.equal(info.getTimeZone(), "Etc/UTC");
        test.done();
    },
    testLocaleInfoGetCurrency: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-US");
        test.ok(info !== null);

        test.equal(info.getCurrency(), "USD");
        test.done();
    },
    testLocaleInfoGetCurrencyDE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getCurrency(), "EUR");
        test.done();
    },
    testLocaleInfoGetCurrencyGB: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GB");
        test.ok(info !== null);

        test.equal(info.getCurrency(), "GBP");
        test.done();
    },
    testLocaleInfoGetCurrencyUnknown: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zxx-XX");
        test.ok(info !== null);

        test.equal(info.getCurrency(), "USD");
        test.done();
    },
    testLocaleInfoGetRoundingModeDefault: function(test) {
        test.expect(2);
        var info = new LocaleInfo();
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    testLocaleInfoGetRoundingModeyy: function(test) {
        test.expect(2);
        var info = new LocaleInfo("yy-YY");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    testLocaleInfoGetDecimalSeparator1: function(test) {
        test.expect(2);
        var info = new LocaleInfo();
        test.ok(info !== null);

        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetDecimalSeparator2: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    //*************************************************Added By Birendra 23/05**********************************************************
    //test cases for en-GB number format
    testLocaleInfoGetDecimalSeparatorfor_en_GB: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GB");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_en_GB: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GB");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_en_GB: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GB");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_en_GB: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GB");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_en_GB: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GB");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_en_GB: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GB");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_en_GB: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-GB");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    //test cases for ko-KR number format
    testLocaleInfoGetDecimalSeparatorfor_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    //test cases for zh-CN-Hans number format
    testLocaleInfoGetDecimalSeparatorfor_zh_CN_Hans: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-CN-Hans");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_zh_CN_Hans: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-CN-Hans");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_zh_CN_Hans: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-CN-Hans");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_zh_CN_Hans: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-CN-Hans");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_zh_CN_Hans: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-CN-Hans");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_zh_CN_Hans: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-CN-Hans");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_zh_CN_Hans: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-CN-Hans");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    //test cases for zh-HK-Hans
    testLocaleInfoGetDecimalSeparatorfor_zh_HK_Hans: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-HK-Hans");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_zh_HK_Hans: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-HK-Hans");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_zh_HK_Hans: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-HK-Hans");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_zh_HK_Hans: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-HK-Hans");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_zh_HK_Hans: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-HK-Hans");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_zh_HK_Hans: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-HK-Hans");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_zh_HK_Hans: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-HK-Hans");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    //test cases fot zh-TW-Hant
    testLocaleInfoGetDecimalSeparatorfor_zh_TW_Hant: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-TW-Hant");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_zh_TW_Hant: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-TW-Hant");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_zh_TW_Hant: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-TW-Hant");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_zh_TW_Hant: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-TW-Hant");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_zh_TW_Hant: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-TW-Hant");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_zh_TW_Hant: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-TW-Hant");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_zh_TW_Hant: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-TW-Hant");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetDelimiter_zh_TW_Hant: function(test) {
        test.expect(3);
        var info = new LocaleInfo("zh-Hant-TW");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "「");
        test.equal(info.getDelimiterQuotationEnd(), "」");
        test.done();
    },
    testLocaleInfoGetDelimiter_zh_TW: function(test) {
        test.expect(3);
        var info = new LocaleInfo("zh-TW");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "「");
        test.equal(info.getDelimiterQuotationEnd(), "」");
        test.done();
    },
    //test cases for fr-FR number format
    testLocaleInfoGetDecimalSeparatorfor_fr_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-FR");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_fr_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-FR");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_fr_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-FR");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_fr_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-FR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_fr_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-FR");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_fr_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-FR");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_fr_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-FR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    //test cases for fr-CA nunmber format
    testLocaleInfoGetDecimalSeparatorfor_fr_CA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CA");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_fr_CA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CA");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_fr_CA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CA");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_fr_CA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CA");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_fr_CA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CA");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_fr_CA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CA");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_fr_CA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CA");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    //test cases for pt-BR number format
    testLocaleInfoGetDecimalSeparatorfor_pt_BR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-BR");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_pt_BR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-BR");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_pt_BR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-BR");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_pt_BR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-BR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_pt_BR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-BR");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_pt_BR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-BR");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_pt_BR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-BR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.done();
    },
    //test cases for pt_PT
    testLocaleInfoGetDecimalSeparatorfor_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    //test cases for es_ES number format
    testLocaleInfoGetDecimalSeparatorfor_es_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-ES");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_es_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-ES");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_es_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-ES");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_es_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-ES");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_es_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-ES");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_es_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-ES");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_es_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-ES");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    //test case for es_Co
    testLocaleInfoGetDecimalSeparatorfor_es_CO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-CO");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_es_CO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-CO");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_es_CO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-CO");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_es_CO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-CO");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_es_CO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-CO");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_es_CO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-CO");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_es_CO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-CO");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.done();
    },
    //test cases for ja-JP
    testLocaleInfoGetDecimalSeparatorfor_ja_JP: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ja-JP");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ja_JP: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ja-JP");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ja_JP: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ja-JP");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ja_JP: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ja-JP");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ja_JP: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ja-JP");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ja_JP: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ja-JP");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ja_JP: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ja-JP");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    //test cases for de-DE
    testLocaleInfoGetDecimalSeparatorfor_de_DE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_de_DE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_de_DE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_de_DE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_de_DE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_de_DE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_de_DE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    //test cases for it-IT
    testLocaleInfoGetDecimalSeparatorfor_it_IT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-IT");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_it_IT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-IT");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_it_IT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-IT");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_it_IT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-IT");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_it_IT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-IT");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_it_IT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-IT");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_it_IT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-IT");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    //test cases for sv-SE
    testLocaleInfoGetDecimalSeparatorfor_sv_SE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-SE");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_sv_SE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-SE");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_sv_SE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-SE");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_sv_SE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-SE");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_sv_SE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-SE");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "−{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_sv_SE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-SE");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "−{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_sv_SE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-SE");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "−{n} {s}");
        test.done();
    },
    //test cases for fi-FI
    testLocaleInfoGetDecimalSeparatorfor_fi_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fi-FI");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_fi_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fi-FI");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_fi_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fi-FI");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_fi_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fi-FI");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_fi_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fi-FI");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "−{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_fi_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fi-FI");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "−{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_fi_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fi-FI");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "−{n} {s}");
        test.done();
    },
    //test cases for cs_CZ
    testLocaleInfoGetDecimalSeparatorfor_cs_CZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("cs-CZ");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_cs_CZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("cs-CZ");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_cs_CZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("cs-CZ");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_cs_CZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("cs-CZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_cs_CZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("cs-CZ");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_cs_CZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("cs-CZ");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_cs_CZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("cs-CZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    //test cases for el_GR
    testLocaleInfoGetDecimalSeparatorfor_el_GR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("el-GR");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_el_GR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("el-GR");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_el_GR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("el-GR");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_el_GR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("el-GR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_el_GR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("el-GR");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_el_GR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("el-GR");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_el_GR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("el-GR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    //test cases for hu-HU
    testLocaleInfoGetDecimalSeparatorfor_hu_HU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hu-HU");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_hu_HU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hu-HU");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_hu_HU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hu-HU");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_hu_HU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hu-HU");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_hu_HU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hu-HU");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_hu_HU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hu-HU");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_hu_HU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hu-HU");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    //test cases for nl_NL
    testLocaleInfoGetDecimalSeparatorfor_nl_NL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-NL");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_nl_NL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-NL");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_nl_NL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-NL");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_nl_NL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-NL");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_nl_NL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-NL");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_nl_NL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-NL");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_nl_NL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-NL");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "{s} -{n}");
        test.done();
    },
    //test cases for pl_PL
    testLocaleInfoGetDecimalSeparatorfor_pl_PL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pl-PL");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_pl_PL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pl-PL");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_pl_PL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pl-PL");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_pl_PL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pl-PL");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_pl_PL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pl-PL");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_pl_PL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pl-PL");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_pl_PL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pl-PL");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    //test cases for da-DK
    testLocaleInfoGetDecimalSeparatorfor_da_Dk: function(test) {
        test.expect(2);
        var info = new LocaleInfo("da-DK");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_da_Dk: function(test) {
        test.expect(2);
        var info = new LocaleInfo("da-DK");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_da_Dk: function(test) {
        test.expect(2);
        var info = new LocaleInfo("da-DK");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_da_Dk: function(test) {
        test.expect(2);
        var info = new LocaleInfo("da-DK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_da_Dk: function(test) {
        test.expect(2);
        var info = new LocaleInfo("da-DK");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_da_Dk: function(test) {
        test.expect(2);
        var info = new LocaleInfo("da-DK");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_da_Dk: function(test) {
        test.expect(2);
        var info = new LocaleInfo("da-DK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    //test cases for roRO
    testLocaleInfoGetDecimalSeparatorfor_ro_RO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RO");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ro_RO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RO");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ro_RO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RO");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ro_RO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RO");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ro_RO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RO");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ro_RO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RO");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ro_RO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RO");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    //test cases for aa-DJ
    testLocaleInfoGetDecimalSeparatorfor_aa_DJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("aa-DJ");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_aa_DJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("aa-DJ");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_aa_DJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("aa-DJ");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_aa_DJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("aa-DJ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_aa_DJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("aa-DJ");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_aa_DJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("aa-DJ");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_aa_DJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("aa-DJ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_aa_DJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("aa-DJ");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_aa_DJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("aa-DJ");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_aa_DJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("aa-DJ");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for af-NA
    testLocaleInfoGetDecimalSeparatorfor_af_NA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("af-NA");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_af_NA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("af-NA");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_af_NA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("af-NA");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_af_NA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("af-NA");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_af_NA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("af-NA");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_af_NA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("af-NA");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_af_NA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("af-NA");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_af_NA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("af-NA");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_af_NA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("af-NA");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_af_NA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("af-NA");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for agq-CM
    testLocaleInfoGetDecimalSeparatorfor_agq_CM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("agq-CM");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_agq_CM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("agq-CM");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_agq_CM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("agq-CM");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_agq_CM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("agq-CM");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n}{s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_agq_CM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("agq-CM");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_agq_CM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("agq-CM");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_agq_CM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("agq-CM");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n}{s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_agq_CM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("agq-CM");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_agq_CM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("agq-CM");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_agq_CM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("agq-CM");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ak-GH
    testLocaleInfoGetDecimalSeparatorfor_ak_GH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ak-GH");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ak_GH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ak-GH");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ak_GH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ak-GH");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ak_GH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ak-GH");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ak_GH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ak-GH");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ak_GH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ak-GH");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ak_GH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ak-GH");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ak_GH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ak-GH");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ak_GH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ak-GH");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ak_GH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ak-GH");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for am-ET
    testLocaleInfoGetDecimalSeparatorfor_am_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("am-ET");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_am_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("am-ET");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_am_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("am-ET");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_am_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("am-ET");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_am_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("am-ET");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_am_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("am-ET");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_am_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("am-ET");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_am_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("am-ET");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_am_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("am-ET");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_am_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("am-ET");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test casess for ar-AE
    testLocaleInfoGetDecimalSeparatorfor_ar_AE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-AE");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ar_AE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-AE");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ar_AE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-AE");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), '{n}‎%‎');
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ar_AE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-AE");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, '‏{n} {s}');
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ar_AE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-AE");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), '‎-{n}');
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ar_AE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-AE");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), '‎-{n}‎%‎');
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ar_AE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-AE");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, '‏-{n} {s}');
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ar_AE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-AE");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ar_AE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-AE");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ar_AE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-AE");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ar-DZ
    testLocaleInfoGetDecimalSeparatorfor_ar_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-DZ");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ar_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-DZ");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ar_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-DZ");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}‎%‎");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ar_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-DZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, '‏{n} {s}');
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ar_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-DZ");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "‎-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ar_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-DZ");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "‎-{n}‎%‎");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ar_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-DZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, '‏-{n} {s}');
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ar_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-DZ");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ar_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-DZ");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ar_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-DZ");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ar-TN
    testLocaleInfoGetDecimalSeparatorfor_ar_TN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-TN");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ar_TN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-TN");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ar_TN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-TN");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}‎%‎");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ar_TN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-TN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, '‏{n} {s}');
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ar_TN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-TN");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "‎-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ar_TN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-TN");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "‎-{n}‎%‎");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ar_TN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-TN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, '‏-{n} {s}');
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ar_TN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-TN");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ar_TN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-TN");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ar_TN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ar-TN");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for as-IN
    testLocaleInfoGetDecimalSeparatorfor_as_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("as-IN");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_as_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("as-IN");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_as_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("as-IN");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_as_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("as-IN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_as_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("as-IN");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_as_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("as-IN");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_as_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("as-IN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_as_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("as-IN");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_as_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("as-IN");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 2);
        test.done();
    },
    testLocaleInfoRoundingMode_as_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("as-IN");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for asa_TZ
    testLocaleInfoGetDecimalSeparatorfor_asa_TZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("asa-TZ");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_asa_TZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("asa-TZ");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_asa_TZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("asa-TZ");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_asa_TZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("asa-TZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_asa_TZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("asa-TZ");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_asa_TZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("asa-TZ");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_asa_TZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("asa-TZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_asa_TZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("asa-TZ");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_asa_TZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("asa-TZ");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_asa_TZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("asa-TZ");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for az-AZ
    testLocaleInfoGetDecimalSeparatorfor_az_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-AZ");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_az_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-AZ");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_az_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-AZ");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_az_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-AZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, '{n} {s}');
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_az_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-AZ");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_az_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-AZ");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_az_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-AZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, '-{n} {s}');
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_az_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-AZ");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_az_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-AZ");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_az_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-AZ");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for be-BY
    testLocaleInfoGetDecimalSeparatorfor_be_BY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("be-BY");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_be_BY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("be-BY");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_be_BY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("be-BY");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_be_BY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("be-BY");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_be_BY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("be-BY");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_be_BY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("be-BY");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_be_BY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("be-BY");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_be_BY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("be-BY");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_be_BY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("be-BY");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_be_BY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("be-BY");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    testLocaleInfoGetDecimalSeparatorfor_bg_BG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bg-BG");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_bg_BG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bg-BG");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_bg_BG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bg-BG");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_bg_BG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bg-BG");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_bg_BG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bg-BG");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_bg_BG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bg-BG");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_bg_BG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bg-BG");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_bg_BG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bg-BG");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_bg_BG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bg-BG");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoGetDecimalSeparatorfor_bm_ML: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bm-ML");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_bm_ML: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bm-ML");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_bm_ML: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bm-ML");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_bm_ML: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bm-ML");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_bm_ML: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bm-ML");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_bm_ML: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bm-ML");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_bm_ML: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bm-ML");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_bm_ML: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bm-ML");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_bm_ML: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bm-ML");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_bm_ML: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bm-ML");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    testLocaleInfoQuotation_bm_ML: function(test) {
        test.expect(4);
        var info = new LocaleInfo("bm-ML");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "«");
        test.equal(info.getDelimiterQuotationEnd(), "»");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoGetDecimalSeparatorfor_bn_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bn-IN");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_bn_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bn-IN");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_bn_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bn-IN");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_bn_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bn-IN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, '{s}{n}');
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_bn_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bn-IN");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_bn_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bn-IN");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_bn_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bn-IN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, '-{s}{n}');
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_bn_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bn-IN");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_bn_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bn-IN");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 2);
        test.done();
    },
    testLocaleInfoRoundingMode_bn_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bn-IN");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for br-FR
    testLocaleInfoGetDecimalSeparatorfor_br_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("br-FR");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_br_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("br-FR");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_br_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("br-FR");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_br_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("br-FR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_br_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("br-FR");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_br_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("br-FR");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_br_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("br-FR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_br_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("br-FR");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_br_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("br-FR");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_br_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("br-FR");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for bs-BA-Cyrl
    testLocaleInfoGetDecimalSeparatorfor_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-BA-Cyrl");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-BA-Cyrl");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-BA-Cyrl");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-BA-Cyrl");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-BA-Cyrl");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-BA-Cyrl");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-BA-Cyrl");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-BA-Cyrl");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-BA-Cyrl");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_bs_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-BA-Cyrl");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    testLocaleInfoGetDecimalSeparatorfor_bs_BS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-BS");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_bs_BS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-BS");
        test.ok(info !== null);
        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_bs_BS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-BS");
        test.ok(info !== null);
        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_bs_BS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-BS");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_bs_BS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-BS");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_bs_BS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-BS");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_bs_BS: function(test) {
        test.expect(2);

        var info = new LocaleInfo("bs-BS");
        test.ok(info !== null);
        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_bs_BS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-BS");
        test.ok(info !== null);
        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_bs_BS: function(test) {
        test.expect(2);

        var info = new LocaleInfo("bs-BS");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();

    },
    //test cases for bs-ME
    testLocaleInfoGetDecimalSeparatorfor_bs_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-ME");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_bs_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-ME");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_bs_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-ME");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_bs_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-ME");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_bs_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-ME");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_bs_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-ME");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_bs_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-ME");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_bs_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-ME");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_bs_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-ME");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_bs_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("bs-ME");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ca-FR
    testLocaleInfoGetDecimalSeparatorfor_ca_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ca-FR");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ca_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ca-FR");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ca_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ca-FR");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), '{n} %');
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ca_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ca-FR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ca_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ca-FR");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ca_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ca-FR");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), '-{n} %');
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ca_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ca-FR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ca_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ca-FR");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ca_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ca-FR");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ca_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ca-FR");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for de-AT
    testLocaleInfoGetDecimalSeparatorfor_de_AT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-AT");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_de_AT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-AT");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_de_AT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-AT");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_de_AT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-AT");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_de_AT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-AT");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_de_AT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-AT");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_de_AT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-AT");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_de_AT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-AT");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_de_AT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-AT");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_de_AT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-AT");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for fa
    testLocaleInfoGetDecimalSeparatorfor_fa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-IR");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), "٫");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_fa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-IR");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), "٬");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_fa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-IR");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}٪");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_fa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-IR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "‎{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_fa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-IR");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "‎−{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_fa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-IR");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "‎−{n}٪");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_fa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-IR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "‎−‎{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_fa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-IR");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_fa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-IR");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_fa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-IR");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for fa-AF
    testLocaleInfoGetDecimalSeparatorfor_fa_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-AF");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), "٫");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_fa_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-AF");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), "٬");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_fa_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-AF");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}٪");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_fa_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-AF");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_fa_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-AF");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "‎−{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_fa_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-AF");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "‎−{n}٪");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_fa_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-AF");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "‎−{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_fa_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-AF");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_fa_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-AF");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_fa_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fa-AF");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ff-SN
    testLocaleInfoGetDecimalSeparatorfor_ff_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ff-SN");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ff_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ff-SN");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ff_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ff-SN");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ff_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ff-SN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ff_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ff-SN");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ff_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ff-SN");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ff_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ff-SN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ff_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ff-SN");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ff_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ff-SN");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ff_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ff-SN");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for fj-FJ
    testLocaleInfoGetDecimalSeparatorfor_fj_FJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fj-FJ");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_fj_FJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fj-FJ");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_fj_FJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fj-FJ");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_fj_FJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fj-FJ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_fj_FJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fj-FJ");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_fj_FJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fj-FJ");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_fj_FJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fj-FJ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_fj_FJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fj-FJ");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_fj_FJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fj-FJ");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_fj_FJsss: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fj-FJ");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for fo
    testLocaleInfoGetDecimalSeparatorfor_fo: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fo");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_fo: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fo");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_fo: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fo");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_fo: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fo");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_fo: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fo");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "−{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_fo: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fo");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "−{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_fo: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fo");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "−{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_fo: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fo");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_fo: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fo");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_fo: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fo");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for fr-AD
    testLocaleInfoGetDecimalSeparatorfor_fr_AD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-AD");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_fr_AD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-AD");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_fr_AD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-AD");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_fr_AD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-AD");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_fr_AD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-AD");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_fr_AD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-AD");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_fr_AD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-AD");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_fr_AD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-AD");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_fr_AD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-AD");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_fr_AD: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-AD");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for fr-BE
    testLocaleInfoGetDecimalSeparatorfor_fr_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-BE");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_fr_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-BE");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_fr_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-BE");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_fr_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-BE");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_fr_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-BE");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_fr_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-BE");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_fr_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-BE");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_fr_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-BE");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_fr_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-BE");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_fr_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-BE");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for fr-CH
    testLocaleInfoGetDecimalSeparatorfor_fr_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CH");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_fr_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CH");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_fr_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CH");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_fr_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CH");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_fr_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CH");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_fr_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CH");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_fr_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CH");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_fr_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CH");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_fr_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CH");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_fr_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-CH");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for fr-DZ
    testLocaleInfoGetDecimalSeparatorfor_fr_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-DZ");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_fr_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-DZ");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_fr_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-DZ");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_fr_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-DZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_fr_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-DZ");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_fr_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-DZ");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_fr_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-DZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_fr_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-DZ");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_fr_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-DZ");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_fr_DZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-DZ");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for fr-LU
    testLocaleInfoGetDecimalSeparatorfor_fr_LU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-LU");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_fr_LU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-LU");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_fr_LU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-LU");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_fr_LU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-LU");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_fr_LU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-LU");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_fr_LU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-LU");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_fr_LU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-LU");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_fr_LU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-LU");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_fr_LU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-LU");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_fr_LU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-LU");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for fr-MG
    testLocaleInfoGetDecimalSeparatorfor_fr_MG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-MG");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_fr_MG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-MG");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_fr_MG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-MG");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_fr_MG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-MG");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_fr_MG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-MG");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_fr_MG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-MG");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_fr_MG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-MG");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_fr_MG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-MG");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_fr_MG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-MG");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_fr_MG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-MG");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for fr-SN
    testLocaleInfoGetDecimalSeparatorfor_fr_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-SN");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_fr_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-SN");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_fr_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-SN");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_fr_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-SN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_fr_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-SN");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_fr_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-SN");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_fr_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-SN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_fr_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-SN");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_fr_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-SN");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_fr_SN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-SN");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for fr-YT
    testLocaleInfoGetDecimalSeparatorfor_fr_YT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-YT");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_fr_YT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-YT");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ' ');
        test.done();
    },
    testLocaleInfoGetPercentageFormat_fr_YT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-YT");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_fr_YT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-YT");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_fr_YT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-YT");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_fr_YT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-YT");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_fr_YT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-YT");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_fr_YT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-YT");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_fr_YT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-YT");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_fr_YT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-YT");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ga-IE
    testLocaleInfoGetDecimalSeparatorfor_ga_IE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ga-IE");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ga_IE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ga-IE");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ga_IE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ga-IE");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ga_IE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ga-IE");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ga_IE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ga-IE");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ga_IE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ga-IE");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ga_IE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ga-IE");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ga_IE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ga-IE");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ga_IE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ga-IE");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ga_IE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ga-IE");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for gl-ES
    testLocaleInfoGetDecimalSeparatorfor_gl_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("gl-ES");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_gl_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("gl-ES");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_gl_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("gl-ES");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_gl_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("gl-ES");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_gl_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("gl-ES");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_gl_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("gl-ES");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_gl_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("gl-ES");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_gl_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("gl-ES");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_gl_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("gl-ES");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_gl_ES: function(test) {
        test.expect(2);
        var info = new LocaleInfo("gl-ES");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ha-NG-Latn
    testLocaleInfoGetDecimalSeparatorfor_ha_NG_Latn: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ha-NG-Latn");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ha_NG_Latn: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ha-NG-Latn");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ha_NG_Latn: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ha-NG-Latn");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ha_NG_Latn: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ha-NG-Latn");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ha_NG_Latn: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ha-NG-Latn");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ha_NG_Latn: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ha-NG-Latn");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ha_NG_Latn: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ha-NG-Latn");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ha_NG_Latn: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ha-NG-Latn");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ha_NG_Latn: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ha-NG-Latn");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ha_NG_Latn: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ha-NG-Latn");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for he-IL
    testLocaleInfoGetDecimalSeparatorfor_he: function(test) {
        test.expect(2);
        var info = new LocaleInfo("he-IL");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_he: function(test) {
        test.expect(2);
        var info = new LocaleInfo("he-IL");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_he: function(test) {
        test.expect(2);
        var info = new LocaleInfo("he-IL");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_he: function(test) {
        test.expect(2);
        var info = new LocaleInfo("he-IL");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, '‏{n} ‏{s}');
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_he: function(test) {
        test.expect(2);
        var info = new LocaleInfo("he-IL");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "‎-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_he: function(test) {
        test.expect(2);
        var info = new LocaleInfo("he-IL");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "‎-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_he: function(test) {
        test.expect(2);
        var info = new LocaleInfo("he-IL");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, '‏-{n} ‏{s}');
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_he: function(test) {
        test.expect(2);
        var info = new LocaleInfo("he-IL");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_he: function(test) {
        test.expect(2);
        var info = new LocaleInfo("he-IL");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_he: function(test) {
        test.expect(2);
        var info = new LocaleInfo("he-IL");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for hi-IN
    testLocaleInfoGetDecimalSeparatorfor_hi_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hi-IN");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_hi_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hi-IN");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_hi_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hi-IN");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_hi_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hi-IN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_hi_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hi-IN");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_hi_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hi-IN");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_hi_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hi-IN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_hi_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hi-IN");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_hi_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hi-IN");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 2);
        test.done();
    },
    testLocaleInfoRoundingMode_hi_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hi-IN");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for hr-HR
    testLocaleInfoGetDecimalSeparatorfor_hr_HR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hr-HR");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_hr_HR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hr-HR");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_hr_HR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hr-HR");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), '{n} %');
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_hr_HR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hr-HR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_hr_HR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hr-HR");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), '−{n}');
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_hr_HR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hr-HR");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), '−{n} %');
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_hr_HR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hr-HR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "−{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_hr_HR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hr-HR");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_hr_HR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hr-HR");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_hr_HR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hr-HR");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for hy-AZ
    testLocaleInfoGetDecimalSeparatorfor_hy_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hy-AZ");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_hy_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hy-AZ");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_hy_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hy-AZ");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_hy_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hy-AZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_hy_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hy-AZ");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_hy_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hy-AZ");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_hy_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hy-AZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_hy_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hy-AZ");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_hy_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hy-AZ");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_hy_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("hy-AZ");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for id-MY
    testLocaleInfoGetDecimalSeparatorfor_id_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("id-MY");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_id_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("id-MY");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_id_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("id-MY");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_id_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("id-MY");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_id_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("id-MY");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_id_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("id-MY");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_id_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("id-MY");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_id_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("id-MY");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_id_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("id-MY");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_id_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("id-MY");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for it-CH

    testLocaleInfoGetDecimalSeparatorfor_it_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-CH");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_it_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-CH");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), "’");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_it_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-CH");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_it_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-CH");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_it_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-CH");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_it_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-CH");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_it_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-CH");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "{s}-{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_it_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-CH");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_it_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-CH");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_it_CH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-CH");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for it-SM
    testLocaleInfoGetDecimalSeparatorfor_it_SM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-SM");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_it_SM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-SM");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_it_SM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-SM");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_it_SM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-SM");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_it_SM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-SM");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_it_SM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-SM");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_it_SM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-SM");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_it_SM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-SM");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_it_SM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-SM");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_it_SM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-SM");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ka-IR
    testLocaleInfoGetDecimalSeparatorfor_ka_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ka-IR");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ka_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ka-IR");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ka_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ka-IR");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ka_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ka-IR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ka_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ka-IR");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ka_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ka-IR");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ka_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ka-IR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ka_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ka-IR");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ka_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ka-IR");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ka_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ka-IR");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for kk-KZ-Cyrl
    testLocaleInfoGetDecimalSeparatorfor_kk_KZ_Cyrl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("kk-KZ-Cyrl");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_kk_KZ_Cyrl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("kk-KZ-Cyrl");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_kk_KZ_Cyrl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("kk-KZ-Cyrl");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_kk_KZ_Cyrl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("kk-KZ-Cyrl");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_kk_KZ_Cyrl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("kk-KZ-Cyrl");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_kk_KZ_Cyrl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("kk-KZ-Cyrl");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_kk_KZ_Cyrl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("kk-KZ-Cyrl");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_kk_KZ_Cyrl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("kk-KZ-Cyrl");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_kk_KZ_Cyrl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("kk-KZ-Cyrl");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_kk_KZ_Cyrl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("kk-KZ-Cyrl");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ko-KR
    testLocaleInfoGetDecimalSeparatorfor_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ks-Arab-I
    testLocaleInfoGetDecimalSeparatorfor_ks_Arab_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ks-Arab-IN");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), "٫");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ks_Arab_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ks-Arab-IN");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), "٬");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ks_Arab_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ks-Arab-IN");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}٪");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ks_Arab_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ks-Arab-IN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, '{s}{n}');
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ks_Arab_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ks-Arab-IN");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "‎-‎{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ks_Arab_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ks-Arab-IN");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "‎-‎{n}٪");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ks_Arab_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ks-Arab-IN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, '‎-‎{s}{n}');
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ks_Arab_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ks-Arab-IN");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ks_Arab_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ks-Arab-IN");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ks_Arab_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ks-Arab-IN");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ku-IQ
    testLocaleInfoGetDecimalSeparatorfor_ku: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IQ");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(),  '٫');
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ku: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IQ");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), '٬');
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ku: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IQ");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), '{n} ٪');
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ku: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IQ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, '{n} {s}');
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ku: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IQ");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), '‏-{n}');
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ku: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IQ");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), '‏-{n} ٪');
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ku: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IQ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, '‏-{n} {s}');
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ku: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IQ");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ku: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IQ");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ku: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IQ");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ku-I
    testLocaleInfoGetDecimalSeparatorfor_ku_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IR");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), '٫');
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ku_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IR");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), '٬');
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ku_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IR");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), '{n} ٪');
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ku_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, '{n} {s}' );
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ku_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IR");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), '‏-{n}');
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ku_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IR");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), '‏-{n} ٪');
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ku_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, '‏-{n} {s}');
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ku_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IR");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ku_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IR");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ku_IR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ku-IR");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for lg-UG
    testLocaleInfoGetDecimalSeparatorfor_lg_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lg-UG");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_lg_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lg-UG");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_lg_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lg-UG");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_lg_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lg-UG");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n}{s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_lg_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lg-UG");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_lg_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lg-UG");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_lg_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lg-UG");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n}{s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_lg_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lg-UG");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_lg_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lg-UG");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_lg_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lg-UG");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ln-CF
    testLocaleInfoGetDecimalSeparatorfor_ln_CF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ln-CF");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ln_CF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ln-CF");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ln_CF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ln-CF");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ln_CF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ln-CF");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ln_CF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ln-CF");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ln_CF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ln-CF");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ln_CF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ln-CF");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ln_CF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ln-CF");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ln_CF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ln-CF");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ln_CF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ln-CF");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for lt-LT
    testLocaleInfoGetDecimalSeparatorfor_lt: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lt-LT");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_lt: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lt-LT");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_lt: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lt-LT");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_lt: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lt-LT");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_lt: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lt-LT");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "−{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_lt: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lt-LT");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "−{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_lt: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lt-LT");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "−{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_lt: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lt-LT");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_lt: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lt-LT");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_lt: function(test) {
        test.expect(2);
        var info = new LocaleInfo("lt-LT");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for mi-CK
    testLocaleInfoGetDecimalSeparatorfor_mi_CK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mi-CK");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_mi_CK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mi-CK");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_mi_CK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mi-CK");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_mi_CK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mi-CK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_mi_CK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mi-CK");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_mi_CK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mi-CK");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_mi_CK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mi-CK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_mi_CK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mi-CK");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_mi_CK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mi-CK");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_mi_CK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mi-CK");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for mk-MK
    testLocaleInfoGetDecimalSeparatorfor_mk: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mk-MK");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_mk: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mk-MK");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_mk: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mk-MK");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_mk: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mk-MK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_mk: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mk-MK");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_mk: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mk-MK");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_mk: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mk-MK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_mk: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mk-MK");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_mk: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mk-MK");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_mk: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mk-MK");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for mn-CN
    testLocaleInfoGetDecimalSeparatorfor_mn_CN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mn-CN");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_mn_CN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mn-CN");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_mn_CN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mn-CN");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_mn_CN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mn-CN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_mn_CN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mn-CN");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_mn_CN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mn-CN");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_mn_CN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mn-CN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_mn_CN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mn-CN");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_mn_CN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mn-CN");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_mn_CN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("mn-CN");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ms-MY
    testLocaleInfoGetDecimalSeparatorfor_ms: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-MY");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ms: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-MY");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ms: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-MY");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ms: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-MY");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ms: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-MY");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ms: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-MY");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ms: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-MY");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ms: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-MY");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ms: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-MY");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ms: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-MY");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ms-BN
    testLocaleInfoGetDecimalSeparatorfor_ms_BN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-BN");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ms_BN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-BN");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ms_BN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-BN");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ms_BN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-BN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ms_BN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-BN");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ms_BN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-BN");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ms_BN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-BN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ms_BN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-BN");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ms_BN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-BN");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ms_BN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ms-BN");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ne-IN
    testLocaleInfoGetDecimalSeparatorfor_ne_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ne-IN");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ne_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ne-IN");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ne_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ne-IN");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ne_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ne-IN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ne_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ne-IN");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ne_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ne-IN");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ne_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ne-IN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ne_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ne-IN");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ne_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ne-IN");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 2);
        test.done();
    },
    testLocaleInfoRoundingMode_ne_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ne-IN");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for nl-BE
    testLocaleInfoGetDecimalSeparatorfor_nl_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-BE");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_nl_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-BE");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_nl_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-BE");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_nl_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-BE");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_nl_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-BE");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_nl_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-BE");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_nl_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-BE");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "{s} -{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_nl_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-BE");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_nl_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-BE");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_nl_BE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-BE");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for nl-CW
    testLocaleInfoGetDecimalSeparatorfor_nl_CW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-CW");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_nl_CW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-CW");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_nl_CW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-CW");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_nl_CW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-CW");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_nl_CW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-CW");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_nl_CW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-CW");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_nl_CW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-CW");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "{s} -{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_nl_CW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-CW");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_nl_CW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-CW");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_nl_CW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-CW");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for nl-GF
    testLocaleInfoGetDecimalSeparatorfor_nl_GF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-GF");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_nl_GF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-GF");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_nl_GF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-GF");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_nl_GF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-GF");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_nl_GF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-GF");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_nl_GF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-GF");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_nl_GF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-GF");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "{s} -{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_nl_GF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-GF");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_nl_GF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-GF");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_nl_GF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-GF");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for nl-SR
    testLocaleInfoGetDecimalSeparatorfor_nl_SR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-SR");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_nl_SR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-SR");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_nl_SR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-SR");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_nl_SR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-SR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_nl_SR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-SR");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_nl_SR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-SR");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_nl_SR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-SR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "{s} -{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_nl_SR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-SR");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_nl_SR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-SR");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_nl_SR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("nl-SR");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for no-BV
    testLocaleInfoGetDecimalSeparatorfor_no_BV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-BV");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_no_BV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-BV");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_no_BV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-BV");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), '{n} %');
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_no_BV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-BV");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_no_BV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-BV");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "−{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_no_BV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-BV");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), '−{n} %');
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_no_BV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-BV");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, '-{n} {s}');
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_no_BV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-BV");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_no_BV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-BV");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_no_BV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-BV");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for no-SJ
    testLocaleInfoGetDecimalSeparatorfor_no_SJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-SJ");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_no_SJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-SJ");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ' ');
        test.done();
    },
    testLocaleInfoGetPercentageFormat_no_SJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-SJ");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), '{n} %');
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_no_SJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-SJ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_no_SJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-SJ");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "−{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_no_SJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-SJ");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), '−{n} %');
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_no_SJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-SJ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, '-{n} {s}');
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_no_SJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-SJ");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_no_SJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-SJ");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_no_SJ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("no-SJ");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for om-ET
    testLocaleInfoGetDecimalSeparatorfor_om_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("om-ET");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_om_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("om-ET");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_om_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("om-ET");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_om_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("om-ET");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_om_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("om-ET");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_om_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("om-ET");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_om_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("om-ET");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_om_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("om-ET");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_om_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("om-ET");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_om_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("om-ET");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for os-RU
    testLocaleInfoGetDecimalSeparatorfor_os_RU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("os-RU");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_os_RU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("os-RU");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_os_RU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("os-RU");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_os_RU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("os-RU");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_os_RU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("os-RU");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_os_RU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("os-RU");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_os_RU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("os-RU");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_os_RU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("os-RU");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_os_RU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("os-RU");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_os_RU: function(test) {
        test.expect(2);
        var info = new LocaleInfo("os-RU");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for pa-Arab-PK
    testLocaleInfoGetDecimalSeparatorfor_pa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pa-Arab-PK");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), "٫");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_pa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pa-Arab-PK");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), "٬");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_pa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pa-Arab-PK");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}٪");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_pa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pa-Arab-PK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_pa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pa-Arab-PK");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "‎-‎{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_pa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pa-Arab-PK");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "‎-‎{n}٪");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_pa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pa-Arab-PK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "‎-‎{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_pa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pa-Arab-PK");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_pa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pa-Arab-PK");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 2);
        test.done();
    },
    testLocaleInfoRoundingMode_pa: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pa-Arab-PK");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for pt-AO
    testLocaleInfoGetDecimalSeparatorfor_pt_AO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-AO");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_pt_AO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-AO");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_pt_AO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-AO");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_pt_AO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-AO");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_pt_AO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-AO");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_pt_AO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-AO");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_pt_AO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-AO");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_pt_AO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-AO");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_pt_AO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-AO");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_pt_AO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-AO");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for pt-CV
    testLocaleInfoGetDecimalSeparatorfor_pt_CV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-CV");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_pt_CV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-CV");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_pt_CV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-CV");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_pt_CV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-CV");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_pt_CV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-CV");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_pt_CV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-CV");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_pt_CV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-CV");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_pt_CV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-CV");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_pt_CV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-CV");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_pt_CV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-CV");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for pt-GW
    testLocaleInfoGetDecimalSeparatorfor_pt_GW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-GW");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_pt_GW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-GW");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_pt_GW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-GW");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_pt_GW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-GW");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_pt_GW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-GW");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_pt_GW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-GW");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_pt_GW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-GW");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_pt_GW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-GW");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_pt_GW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-GW");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_pt_GW: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-GW");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for pt-MO
    testLocaleInfoGetDecimalSeparatorfor_pt_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MO");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_pt_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MO");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_pt_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MO");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_pt_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MO");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_pt_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MO");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_pt_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MO");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_pt_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MO");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_pt_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MO");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_pt_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MO");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_pt_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MO");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for pt-MZ
    testLocaleInfoGetDecimalSeparatorfor_pt_MZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MZ");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_pt_MZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MZ");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_pt_MZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MZ");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_pt_MZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_pt_MZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MZ");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_pt_MZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MZ");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_pt_MZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_pt_MZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MZ");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_pt_MZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MZ");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_pt_MZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-MZ");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for pt-PT
    testLocaleInfoGetDecimalSeparatorfor_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_pt_PT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-PT");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for pt-ST
    testLocaleInfoGetDecimalSeparatorfor_pt_ST: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-ST");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_pt_ST: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-ST");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_pt_ST: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-ST");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_pt_ST: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-ST");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_pt_ST: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-ST");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_pt_ST: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-ST");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_pt_ST: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-ST");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_pt_ST: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-ST");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_pt_ST: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-ST");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_pt_ST: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-ST");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for pt-TL
    testLocaleInfoGetDecimalSeparatorfor_pt_TL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-TL");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_pt_TL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-TL");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_pt_TL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-TL");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_pt_TL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-TL");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_pt_TL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-TL");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_pt_TL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-TL");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_pt_TL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-TL");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_pt_TL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-TL");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_pt_TL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-TL");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_pt_TL: function(test) {
        test.expect(2);
        var info = new LocaleInfo("pt-TL");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ro-RS
    testLocaleInfoGetDecimalSeparatorfor_ro_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RS");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ro_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RS");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ro_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RS");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ro_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RS");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ro_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RS");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ro_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RS");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ro_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RS");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ro_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RS");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ro_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RS");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ro_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ro-RS");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ru-KZ
    testLocaleInfoGetDecimalSeparatorfor_ru_KZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-KZ");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ru_KZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-KZ");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ru_KZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-KZ");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ru_KZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-KZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ru_KZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-KZ");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ru_KZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-KZ");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ru_KZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-KZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ru_KZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-KZ");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ru_KZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-KZ");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ru_KZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-KZ");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ru-TM
    testLocaleInfoGetDecimalSeparatorfor_ru_TM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-TM");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ru_TM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-TM");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ru_TM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-TM");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ru_TM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-TM");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ru_TM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-TM");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ru_TM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-TM");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ru_TM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-TM");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ru_TM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-TM");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ru_TM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-TM");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ru_TM: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ru-TM");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for shi-Tfng-MA
    testLocaleInfoGetDecimalSeparatorfor_shi_Tfng_MA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("shi-Tfng-MA");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_shi_Tfng_MA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("shi-MA-Tfng");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_shi_Tfng_MA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("shi-Tfng-MA");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_shi_Tfng_MA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("shi-Tfng-MA");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n}{s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_shi_Tfng_MA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("shi-Tfng-MA");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_shi_Tfng_MA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("shi-Tfng-MA");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_shi_Tfng_MA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("shi-Tfng-MA");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n}{s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_shi_Tfng_MA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("shi-Tfng-MA");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_shi_Tfng_MA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("shi-Tfng-MA");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_shi_Tfng_MA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("shi-Tfng-MA");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for si
    testLocaleInfoGetDecimalSeparatorfor_si: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_si: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_si: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_si: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_si: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_si: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_si: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_si: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_si: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_si: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for sk-SK
    testLocaleInfoGetDecimalSeparatorfor_sk_SK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sk-SK");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_sk_SK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sk-SK");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_sk_SK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sk-SK");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_sk_SK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sk-SK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_sk_SK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sk-SK");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_sk_SK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sk-SK");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_sk_SK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sk-SK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_sk_SK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sk-SK");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_sk_SK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sk-SK");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_sk_SK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sk-SK");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for sl-SI
    testLocaleInfoGetDecimalSeparatorfor_sl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sl-SI");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_sl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sl-SI");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_sl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sl-SI");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_sl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sl-SI");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_sl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sl-SI");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "−{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_sl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sl-SI");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "−{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_sl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sl-SI");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "−{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_sl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sl-SI");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_sl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sl-SI");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_sl: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sl-SI");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_so_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-ET");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_so_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-ET");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_so_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-ET");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_so_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-ET");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_so_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-ET");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_so_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-ET");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_so_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-ET");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_so_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-ET");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_so_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-ET");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for so-SO
    testLocaleInfoGetDecimalSeparatorfor_so_SO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-SO");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_so_SO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-SO");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_so_SO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-SO");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_so_SO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-SO");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_so_SO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-SO");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_so_SO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-SO");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_so_SO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-SO");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_so_SO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-SO");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_so_SO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-SO");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_so_SO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("so-SO");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for sq-MK
    testLocaleInfoGetDecimalSeparatorfor_sq_MK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sq-MK");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_sq_MK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sq-MK");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_sq_MK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sq-MK");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_sq_MK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sq-MK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_sq_MK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sq-MK");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_sq_MK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sq-MK");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_sq_MK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sq-MK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_sq_MK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sq-MK");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_sq_MK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sq-MK");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_sq_MK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sq-MK");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for sr-Cyrl-BA
    testLocaleInfoGetDecimalSeparatorfor_sr_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Cyrl-BA");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_sr_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Cyrl-BA");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_sr_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Cyrl-BA");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_sr_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Cyrl-BA");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_sr_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Cyrl-BA");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_sr_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Cyrl-BA");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_sr_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Cyrl-BA");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_sr_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Cyrl-BA");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_sr_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Cyrl-BA");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_sr_Cyrl_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Cyrl-BA");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for sr-Latn-BA
    testLocaleInfoGetDecimalSeparatorfor_sr_Latn_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-BA");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_sr_Latn_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-BA");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_sr_Latn_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-BA");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_sr_Latn_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-BA");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_sr_Latn_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-BA");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_sr_Latn_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-BA");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_sr_Latn_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-BA");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_sr_Latn_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-BA");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_sr_Latn_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-BA");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_sr_Latn_BA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-BA");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for sr-ME-Latn
    testLocaleInfoGetDecimalSeparatorfor_sr_Latn_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-ME");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_sr_Latn_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-ME");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_sr_Latn_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-ME");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_sr_Latn_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-ME");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_sr_Latn_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-ME");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_sr_Latn_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-ME");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_sr_Latn_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-ME");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_sr_Latn_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-ME");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_sr_Latn_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-ME");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_sr_Latn_ME: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-ME");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for sr-Latn-RS
    testLocaleInfoGetDecimalSeparatorfor_sr_Latn_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-RS");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_sr_Latn_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-RS");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_sr_Latn_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-RS");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_sr_Latn_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-RS");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_sr_Latn_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-RS");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_sr_Latn_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-RS");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_sr_Latn_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-RS");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_sr_Latn_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-RS");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_sr_Latn_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-RS");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_sr_Latn_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-Latn-RS");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for sr-RS
    testLocaleInfoGetDecimalSeparatorfor_sr_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-RS");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_sr_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-RS");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_sr_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-RS");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_sr_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-RS");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_sr_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-RS");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_sr_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-RS");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_sr_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-RS");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_sr_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-RS");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_sr_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-RS");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_sr_RS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sr-RS");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ss-ZA
    testLocaleInfoGetDecimalSeparatorfor_ss_ZA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ss-ZA");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ss_ZA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ss-ZA");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ' ');
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ss_ZA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ss-ZA");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ss_ZA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ss-ZA");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ss_ZA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ss-ZA");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ss_ZA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ss-ZA");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ss_ZA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ss-ZA");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ss_ZA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ss-ZA");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ss_ZA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ss-ZA");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ss_ZA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ss-ZA");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for st-LS
    testLocaleInfoGetDecimalSeparatorfor_st_LS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("st-LS");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_st_LS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("st-LS");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ',');
        test.done();
    },
    testLocaleInfoGetPercentageFormat_st_LS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("st-LS");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_st_LS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("st-LS");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_st_LS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("st-LS");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_st_LS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("st-LS");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_st_LS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("st-LS");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_st_LS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("st-LS");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_st_LS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("st-LS");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_st_LS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("st-LS");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for sv-FI
    testLocaleInfoGetDecimalSeparatorfor_sv_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-FI");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_sv_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-FI");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_sv_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-FI");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_sv_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-FI");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_sv_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-FI");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "−{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_sv_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-FI");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "−{n} %");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_sv_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-FI");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "−{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_sv_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-FI");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_sv_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-FI");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_sv_FI: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sv-FI");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for sw-UG
    testLocaleInfoGetDecimalSeparatorfor_sw_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-UG");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_sw_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-UG");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_sw_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-UG");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_sw_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-UG");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_sw_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-UG");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_sw_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-UG");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_sw_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-UG");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_sw_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-UG");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_sw_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-UG");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_sw_UG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-UG");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ta-LK
    testLocaleInfoGetDecimalSeparatorfor_ta_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-LK");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ta_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-LK");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ta_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-LK");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ta_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-LK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ta_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-LK");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ta_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-LK");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ta_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-LK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ta_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-LK");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ta_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-LK");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 2);
        test.done();
    },
    testLocaleInfoRoundingMode_ta_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-LK");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ta-MY
    testLocaleInfoGetDecimalSeparatorfor_ta_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-MY");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ta_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-MY");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ta_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-MY");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ta_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-MY");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ta_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-MY");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ta_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-MY");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ta_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-MY");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ta_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-MY");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ta_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-MY");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 2);
        test.done();
    },
    testLocaleInfoRoundingMode_ta_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-MY");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ta-SG
    testLocaleInfoGetDecimalSeparatorfor_ta_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-SG");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ta_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-SG");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ta_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-SG");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ta_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-SG");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ta_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-SG");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ta_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-SG");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ta_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-SG");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ta_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-SG");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ta_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-SG");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 2);
        test.done();
    },
    testLocaleInfoRoundingMode_ta_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ta-SG");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for th-TH
    testLocaleInfoGetDecimalSeparatorfor_th: function(test) {
        test.expect(2);
        var info = new LocaleInfo("th-TH");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_th: function(test) {
        test.expect(2);
        var info = new LocaleInfo("th-TH");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_th: function(test) {
        test.expect(2);
        var info = new LocaleInfo("th-TH");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_th: function(test) {
        test.expect(2);
        var info = new LocaleInfo("th-TH");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_th: function(test) {
        test.expect(2);
        var info = new LocaleInfo("th-TH");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_th: function(test) {
        test.expect(2);
        var info = new LocaleInfo("th-TH");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_th: function(test) {
        test.expect(2);
        var info = new LocaleInfo("th-TH");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_th: function(test) {
        test.expect(2);
        var info = new LocaleInfo("th-TH");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_th: function(test) {
        test.expect(2);
        var info = new LocaleInfo("th-TH");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_th: function(test) {
        test.expect(2);
        var info = new LocaleInfo("th-TH");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for uk-UA
    testLocaleInfoGetDecimalSeparatorfor_uk_UA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uk-UA");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_uk_UA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uk-UA");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_uk_UA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uk-UA");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_uk_UA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uk-UA");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_uk_UA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uk-UA");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_uk_UA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uk-UA");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_uk_UA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uk-UA");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_uk_UA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uk-UA");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_uk_UA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uk-UA");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_uk_UA: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uk-UA");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ur
    testLocaleInfoGetDecimalSeparatorfor_ur: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ur: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ur: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ur: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ur: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "‎-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ur: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "‎-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ur: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "‎-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ur: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ur: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ur: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ur-IN
    testLocaleInfoGetDecimalSeparatorfor_ur_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-IN");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), "٫");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ur_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-IN");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), "٬");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ur_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-IN");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ur_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-IN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ur_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-IN");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "‎-‎{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ur_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-IN");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "‎-‎{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ur_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-IN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "‎-‎{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ur_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-IN");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ur_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-IN");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ur_IN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-IN");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for ur-PK
    testLocaleInfoGetDecimalSeparatorfor_ur_PK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-PK");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ur_PK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-PK");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ur_PK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-PK");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ur_PK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-PK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ur_PK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-PK");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "‎-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ur_PK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-PK");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "‎-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ur_PK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-PK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "‎-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ur_PK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-PK");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ur_PK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-PK");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ur_PK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ur-PK");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for uz-Arab-AF
    testLocaleInfoGetDecimalSeparatorfor_ur_Arab_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Arab-AF");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), "٫");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_ur_Arab_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Arab-AF");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), "٬");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_ur_Arab_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Arab-AF");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}٪");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_ur_Arab_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Arab-AF");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_ur_Arab_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Arab-AF");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "‎-‎{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_ur_Arab_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Arab-AF");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "‎-‎{n}٪");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_ur_Arab_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Arab-AF");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "‎-‎{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_ur_Arab_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Arab-AF");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_ur_Arab_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Arab-AF");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_ur_Arab_AF: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Arab-AF");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for uz-UZ
    testLocaleInfoGetDecimalSeparatorfor_uz_Latn_UZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Latn-UZ");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_uz_Latn_UZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Latn-UZ");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_uz_Latn_UZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Latn-UZ");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_uz_Latn_UZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Latn-UZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_uz_Latn_UZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Latn-UZ");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_uz_Latn_UZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Latn-UZ");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_uz_Latn_UZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Latn-UZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_uz_Latn_UZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Latn-UZ");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_uz_Latn_UZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Latn-UZ");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_uz_Latn_UZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("uz-Latn-UZ");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for vai-Latn-LR
    testLocaleInfoGetDecimalSeparatorfor_vai_Latn_LR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vai-Latn-LR");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_vai_Latn_LR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vai-Latn-LR");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_vai_Latn_LR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vai-Latn-LR");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_vai_Latn_LR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vai-Latn-LR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_vai_Latn_LR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vai-Latn-LR");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_vai_Latn_LR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vai-Latn-LR");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_vai_Latn_LR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vai-Latn-LR");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_vai_Latn_LR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vai-Latn-LR");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_vai_Latn_LR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vai-Latn-LR");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_vai_Latn_LR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vai-Latn-LR");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for vi-VN
    testLocaleInfoGetDecimalSeparatorfor_vi: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vi-VN");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_vi: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vi-VN");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_vi: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vi-VN");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_vi: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vi-VN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_vi: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vi-VN");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_vi: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vi-VN");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_vi: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vi-VN");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_vi: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vi-VN");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_vi: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vi-VN");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_vi: function(test) {
        test.expect(2);
        var info = new LocaleInfo("vi-VN");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for zh-Hans-SG
    testLocaleInfoGetDecimalSeparatorfor_zh_Hans_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-SG");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_zh_Hans_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-SG");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_zh_Hans_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-SG");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_zh_Hans_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-SG");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_zh_Hans_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-SG");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_zh_Hans_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-SG");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_zh_Hans_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-SG");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_zh_Hans_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-SG");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_zh_Hans_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-SG");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_zh_Hans_SG: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-SG");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for zh-Hant-MO
    testLocaleInfoGetDecimalSeparatorfor_zh_Hant_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-MO");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_zh_Hant_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-MO");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_zh_Hant_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-MO");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_zh_Hant_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-MO");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_zh_Hant_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-MO");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_zh_Hant_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-MO");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_zh_Hant_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-MO");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_zh_Hant_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-MO");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_zh_Hant_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-MO");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_zh_Hant_MO: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-MO");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for zh-Hant-US
    testLocaleInfoGetDecimalSeparatorfor_zh_Hant_US: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-US");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_zh_Hant_US: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-US");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_zh_Hant_US: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-US");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_zh_Hant_US: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-US");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_zh_Hant_US: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-US");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_zh_Hant_US: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-US");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_zh_Hant_US: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-US");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_zh_Hant_US: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-US");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_zh_Hant_US: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-US");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_zh_Hant_US: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hant-US");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for zh-MY
    testLocaleInfoGetDecimalSeparatorfor_zh_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-MY");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_zh_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-MY");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_zh_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-MY");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_zh_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-MY");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_zh_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-MY");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_zh_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-MY");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_zh_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-MY");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_zh_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-MY");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_zh_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-MY");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_zh_MY: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-MY");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for az-Latn-AZ
    testLocaleInfoGetDecimalSeparatorfor_az_Latn_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-Latn-AZ");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_az_Latn_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-Latn-AZ");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_az_Latn_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-Latn-AZ");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_az_Latn_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-Latn-AZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n} {s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_az_Latn_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-Latn-AZ");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_az_Latn_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-Latn-AZ");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_az_Latn_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-Latn-AZ");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_az_Latn_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-Latn-AZ");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_az_Latn_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-Latn-AZ");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_az_Latn_AZ: function(test) {
        test.expect(2);
        var info = new LocaleInfo("az-Latn-AZ");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for km-KH
    testLocaleInfoGetDecimalSeparatorfor_km_KH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("km-KH");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_km_KH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("km-KH");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_km_KH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("km-KH");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_km_KH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("km-KH");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{n}{s}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_km_KH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("km-KH");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_km_KH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("km-KH");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_km_KH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("km-KH");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{n}{s}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_km_KH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("km-KH");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_km_KH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("km-KH");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_km_KH: function(test) {
        test.expect(2);
        var info = new LocaleInfo("km-KH");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for si-LK
    testLocaleInfoGetDecimalSeparatorfor_si_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si-LK");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_si_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si-LK");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_si_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si-LK");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_si_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si-LK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s}{n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_si_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si-LK");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_si_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si-LK");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_si_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si-LK");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_si_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si-LK");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_si_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si-LK");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_si_LK: function(test) {
        test.expect(2);
        var info = new LocaleInfo("si-LK");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    //test cases for sw-KE
    testLocaleInfoGetDecimalSeparatorfor_sw_KE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-Latn-KE");
        test.ok(info !== null);
        test.equal(info.getDecimalSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparatorfor_sw_KE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-Latn-KE");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetPercentageFormat_sw_KE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-Latn-KE");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetCurrencyFormat_sw_KE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-Latn-KE");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().common, "{s} {n}");
        test.done();
    },
    testLocaleInfoGetNegativeNumberFormat_sw_KE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-Latn-KE");
        test.ok(info !== null);

        test.equal(info.getNegativeNumberFormat(), "-{n}");
        test.done();
    },
    testLocaleInfoGetNegativePercentageFormat_sw_KE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-Latn-KE");
        test.ok(info !== null);

        test.equal(info.getNegativePercentageFormat(), "-{n}%");
        test.done();
    },
    testLocaleInfoGetNegativeCurrencyFormat_sw_KE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-Latn-KE");
        test.ok(info !== null);

        test.equal(info.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.done();
    },
    testLocaleInfoGetPrimaryGroupingDigits_sw_KE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-Latn-KE");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetSecondaryGroupingDigits_sw_KE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-Latn-KE");
        test.ok(info !== null);

        test.equal(info.getSecondaryGroupingDigits(), 0);
        test.done();
    },
    testLocaleInfoRoundingMode_sw_KE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("sw-Latn-KE");
        test.ok(info !== null);

        test.equal(info.getRoundingMode(), "halfdown");
        test.done();
    },
    /************************************************end 04-JUN-2013**********************************************************/
    /** Add negative format test cases (08-NOV-2016) **/
    testLocaleInfoGetGroupingSeparator1: function(test) {
        test.expect(2);
        var info = new LocaleInfo();
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ",");
        test.done();
    },
    testLocaleInfoGetGroupingSeparator2: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), ".");
        test.done();
    },
    testLocaleInfoGetGroupingSeparator3: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-FR");
        test.ok(info !== null);

        test.equal(info.getGroupingSeparator(), " ");
        test.done();
    },
    testLocaleInfoGetGroupingDigits1: function(test) {
        test.expect(2);
        var info = new LocaleInfo();
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetGroupingDigits2: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetGroupingDigits3: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-CN");
        test.ok(info !== null);

        test.equal(info.getPrimaryGroupingDigits(), 3);
        test.done();
    },
    testLocaleInfoGetPercentageFormat2: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-FR");
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n} %");
        test.done();
    },
    testLocaleInfoGetPercentageFormat1: function(test) {
        test.expect(2);
        var info = new LocaleInfo();
        test.ok(info !== null);

        test.equal(info.getPercentageFormat(), "{n}%");
        test.done();
    },
    testLocaleInfoGetPercentageSymbol1: function(test) {
        test.expect(2);
        var info = new LocaleInfo();
        test.ok(info !== null);

        test.equal(info.getPercentageSymbol(), "%");
        test.done();
    },
    testLocaleInfoGetPercentageSymbol2: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-FR");
        test.ok(info !== null);

        test.equal(info.getPercentageSymbol(), "%");
        test.done();
    },
    testLocaleInfoLoadMissingDataAsynch: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.data.localeinfo_yyy = ilib.data.localeinfo_und_ZX = ilib.data.localeinfo_yyy_ZX = undefined;
        ilib.clearCache();
        ilib.setLoaderCallback(mockLoaderLI);
        var info = new LocaleInfo("yyy-ZX", {
            sync: false,
            onLoad: function (li) {
                test.expect(5);
                test.ok(li !== null);

                test.equal(li.getCurrencyFormats().iso, "iso {s} {n}");
                test.equal(li.getFirstDayOfWeek(), 4);
                test.equal(li.getPercentageSymbol(), "%");
            }
        });
        ilib.setLoaderCallback(oldLoader);
        test.ok(info !== null);
        test.done();
    },
    testLocaleInfoLoadMissingDataSync: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.data.localeinfo_yyy = ilib.data.localeinfo_und_ZX = ilib.data.localeinfo_yyy_ZX = undefined;
        ilib.clearCache();
        ilib.setLoaderCallback(mockLoaderLI);
        var info = new LocaleInfo("yyy-ZX", {
            sync: true
        });

        test.expect(4);
        test.ok(info !== null);

        ilib.setLoaderCallback(oldLoader);

        test.equal(info.getCurrencyFormats().iso, "iso {s} {n}");
        test.equal(info.getFirstDayOfWeek(), 4);
        test.equal(info.getPercentageSymbol(), "%");
        test.done();
    },
    testLocaleInfoLoadMissingDataAsynchNoData: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        test.expect(5);
        ilib.data.localeinfo_qq = ilib.data.localeinfo_und_QQ = ilib.data.localeinfo_qq_QQ = undefined;
        ilib.clearCache();
        ilib.setLoaderCallback(mockLoaderLI);
        var info = new LocaleInfo("qq-QQ", {
            sync: false,
            onLoad: function (li) {
                test.ok(typeof(li) !== "undefined");
                // should return the shared data only
                test.equal(li.getCurrencyFormats().common, "{s}{n}");
                test.equal(li.getFirstDayOfWeek(), 1);
                test.equal(li.getPercentageSymbol(), "%");
            }
        });
        ilib.setLoaderCallback(oldLoader);
        test.ok(info !== null);
        test.done();
    },
    testLocaleInfoMissingDataSynchNoDataNoLoader: function(test) {
        test.expect(5);
        var temp = ilib._load;

        ilib.data.localeinfo_xxx = ilib.data.localeinfo_und_QQ = ilib.data.localeinfo_xxx_QQ = undefined;
        ilib.clearCache();
        ilib.setLoaderCallback(undefined);
        var info = new LocaleInfo("xxx-QQ", {
            sync: true,
            onLoad: function (li) {
                test.ok(typeof(li) !== "undefined");
                // should return the shared data only
                test.equal(li.getCurrencyFormats().common, "{s} {n}");
                test.equal(li.getFirstDayOfWeek(), 1);
                test.equal(li.getPercentageSymbol(), "%");
            }
        });

        // clean up
        ilib.setLoaderCallback(oldLoader);

        test.ok(info !== null);
        test.done();
    },
    testLocaleInfoLoadMissingDataSyncNoData: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.data.localeinfo_qq = ilib.data.localeinfo_und_QQ = ilib.data.localeinfo_xxx_QQ = undefined;
        ilib.clearCache();
        ilib.setLoaderCallback(mockLoaderLI);
        var li = new LocaleInfo("qq-QQ", {
            sync: true
        });

        ilib.setLoaderCallback(oldLoader);

        test.expect(4);
        test.ok(typeof(li) !== "undefined");
        // should return the shared data only
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getFirstDayOfWeek(), 1);
        test.equal(li.getPercentageSymbol(), "%");
        test.done();
    },
    testLocaleInfoLoadPreassembledDataAsynch: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.setLoaderCallback(mockLoaderLI);
        var info = new LocaleInfo("fr-FR", {
            sync: false,
            onLoad: function (li) {
        test.expect(6);
                test.ok(typeof(li) !== "undefined");
                // should return the shared data only
                test.equal(li.getCurrency(), "EUR");
                test.equal(li.getFirstDayOfWeek(), 1);
                test.equal(li.info.locale, "FR");
                test.equal(li.getTimeZone(), "Europe/Paris");
            }
        });
        ilib.setLoaderCallback(oldLoader);
        test.ok(info !== null);
        test.done();
    },
    testLocaleInfoLoadMissingLocaleParts: function(test) {
        if (ilib.isDynData()) {
            // should not test mixed loading on the dynamic load version because it was not designed for it
            test.done();
            return;
        }
        var li = new LocaleInfo("fr-FR-overseas");
        test.expect(5);
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getCurrency(), "USD");
        test.equal(li.getFirstDayOfWeek(), 1);
        test.equal(li.info.locale, "fr-FR-overseas");
        test.equal(li.getTimeZone(), "Pacific/Tahiti");
        test.done();
    },
    testLocaleInfoGetAllScriptsSingle: function(test) {
        test.expect(2);
        var li = new LocaleInfo("nl-NL");
        test.ok(typeof(li) !== "undefined");
        test.equalIgnoringOrder(li.getAllScripts(), ["Latn"]);
        test.done();
    },
    testLocaleInfoGetAllScriptsMultiple1: function(test) {
        test.expect(2);
        var li = new LocaleInfo("de-DE");
        test.ok(typeof(li) !== "undefined");
        test.equalIgnoringOrder(li.getAllScripts(), ["Latn", "Runr"]);
        test.done();
    },
    testLocaleInfoGetAllScriptsMultiple2: function(test) {
        test.expect(2);
        var li = new LocaleInfo("uz-UZ");
        test.ok(typeof(li) !== "undefined");
        test.equalIgnoringOrder(li.getAllScripts(), ["Arab", "Cyrl", "Latn"]);
        test.done();
    },
    testLocaleInfoGetDefaultScriptSingle: function(test) {
        test.expect(2);
        var li = new LocaleInfo("nl-NL");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getDefaultScript(), "Latn");
        test.done();
    },
    testLocaleInfoGetDefaultScriptMultiple: function(test) {
        test.expect(2);
        var li = new LocaleInfo("uz-UZ");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getDefaultScript(), "Latn");
        test.done();
    },
    testLocaleInfoGetScriptSingle: function(test) {
        test.expect(2);
        var li = new LocaleInfo("nl-NL");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getScript(), "Latn");
        test.done();
    },
    testLocaleInfoGetScriptMultiple: function(test) {
        test.expect(2);
        var li = new LocaleInfo("uz-UZ");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getScript(), "Latn");
        test.done();
    },
    testLocaleInfoGetScriptMultipleLocaleOverride: function(test) {
        test.expect(2);
        var li = new LocaleInfo("uz-Cyrl-UZ");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getScript(), "Cyrl");
        test.done();
    },
    testLocaleInfoGetLanguageName1: function(test) {
        test.expect(2);
        var li = new LocaleInfo("he-IL");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getLanguageName(), "Hebrew");
        test.done();
    },
    testLocaleInfoGetLanguageName2: function(test) {
        test.expect(2);
        var li = new LocaleInfo("es-MX");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getLanguageName(), "Spanish");
        test.done();
    },
    testLocaleInfoGetLanguageName3: function(test) {
        test.expect(2);
        var li = new LocaleInfo("asa-TZ");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getLanguageName(), "Asu");
        test.done();
    },
    testLocaleInfoGetLanguageName4: function(test) {
        test.expect(2);
        var li = new LocaleInfo("mus");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getLanguageName(), "Muscogee");
        test.done();
    },
    testLocaleInfoGetLanguageName5: function(test) {
        test.expect(2);
        var li = new LocaleInfo("cic");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getLanguageName(), "Chickasaw");
        test.done();
    },
    testLocaleInfoGetLanguageName6: function(test) {
        test.expect(2);
        var li = new LocaleInfo("crh");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getLanguageName(), "Crimean Tatar");
        test.done();
    },
    testLocaleInfoGetLanguageName7: function(test) {
        test.expect(2);
        var li = new LocaleInfo("ojs");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getLanguageName(), "Oji-Cree");
        test.done();
    },
    testLocaleInfoGetLanguageName8: function(test) {
        test.expect(2);
        var li = new LocaleInfo("mic");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getLanguageName(), "Mi'kmaw");
        test.done();
    },
    testLocaleInfoGetLanguageName9: function(test) {
        test.expect(2);
        var li = new LocaleInfo("kxv");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getLanguageName(), "Kuvi");
        test.done();
    },
    testLocaleInfoGetRegionName1: function(test) {
        test.expect(2);
        var li = new LocaleInfo("he-IL");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getRegionName(), "Israel");
        test.done();
    },
    testLocaleInfoGetRegionName2: function(test) {
        test.expect(2);
        var li = new LocaleInfo("es-MX");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getRegionName(), "Mexico");
        test.done();
    },
    testLocaleInfoGetRegionName3: function(test) {
        test.expect(2);
        var li = new LocaleInfo("asa-TZ");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getRegionName(), "Tanzania");
        test.done();
    },
    testLocaleInfoGetRegionName4: function(test) {
        test.expect(2);
        var li = new LocaleInfo("MK");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getRegionName(), "North Macedonia");
        test.done();
    },
    testLocaleInfoGetRegionName5: function(test) {
        test.expect(2);
        var li = new LocaleInfo("MO");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getRegionName(), "Macao SAR China");
        test.done();
    },
    testLocaleInfoGetRegionName6: function(test) {
        test.expect(2);
        var li = new LocaleInfo("SZ");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getRegionName(), "Eswatini");
        test.done();
    },
    testLocaleInfoGetRegionName7: function(test) {
        test.expect(2);
        var li = new LocaleInfo("XX");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getRegionName(), "Unknown");
        test.done();
    },
    testLocaleInfoGetRegionName8: function(test) {
        test.expect(2);
        var li = new LocaleInfo("XA");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getRegionName(), "Pseudo-Accents");
        test.done();
    },
    testLocaleInfoGetRegionName9: function(test) {
        test.expect(2);
        var li = new LocaleInfo("XB");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getRegionName(), "Pseudo-Bidi");
        test.done();
    },
    testLocaleInfoGetRegionName10: function(test) {
        test.expect(2);
        var li = new LocaleInfo("TR");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getRegionName(), "Türkiye");
        test.done();
    },
    testGetDigitsWestern: function(test) {
        test.expect(2);
        var li = new LocaleInfo("en-US");
        test.ok(typeof(li) !== "undefined");
        test.ok(typeof(li.getDigits()) === "undefined");
        test.done();
    },
    testGetDigitsWesternNative: function(test) {
        test.expect(2);
        var li = new LocaleInfo("en-US");
        test.ok(typeof(li) !== "undefined");
        test.ok(typeof(li.getDigits()) === "undefined");
        test.done();
    },
    testGetDigitsNonWesternOptional: function(test) {
        test.expect(2);
        var li = new LocaleInfo("hi-IN");
        test.ok(typeof(li) !== "undefined");
        test.ok(typeof(li.getDigits()) === "undefined");
        test.done();
    },
    testGetDigitsNonWesternNative: function(test) {
        test.expect(2);
        var li = new LocaleInfo("hi-IN");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getNativeDigits(), "०१२३४५६७८९");
        test.done();
    },
    testGetDigitsNonWesternUsual: function(test) {
        test.expect(2);
        var li = new LocaleInfo("bn-IN");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getDigits(), "০১২৩৪৫৬৭৮৯");
        test.done();
    },
    testGetDigitsNonWesternUsualNative: function(test) {
        test.expect(2);
        var li = new LocaleInfo("bn-IN");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getNativeDigits(), "০১২৩৪৫৬৭৮৯");
        test.done();
    },
    testGetDigitsStyleWestern: function(test) {
        test.expect(2);
        var li = new LocaleInfo("en-US");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getDigitsStyle(), "western");
        test.done();
    },
    testGetDigitsStyleOptional: function(test) {
        test.expect(2);
        var li = new LocaleInfo("hi-IN");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getDigitsStyle(), "optional");
        test.done();
    },
    testGetDigitsStyleNative: function(test) {
        test.expect(2);
        var li = new LocaleInfo("bn-IN");
        test.ok(typeof(li) !== "undefined");
        test.equal(li.getDigitsStyle(), "native");
        test.done();
    },
    /*Get weekend Data*/
    testLocaleInfoGetWeekendUS: function(test) {
        test.expect(3);
        var info = new LocaleInfo("en-US");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 6);
        test.equal(info.getWeekEndEnd(), 0);
        test.done();
    },
    testLocaleInfoGetWeekendDE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 6);
        test.equal(info.getWeekEndEnd(), 0);
        test.done();
    },
    testLocaleInfoGetWeekendFR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-FR");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 6);
        test.equal(info.getWeekEndEnd(), 0);
        test.done();
    },
    testLocaleInfoGetWeekendAE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-AE");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 6);
        test.equal(info.getWeekEndEnd(), 0);
        test.done();
    },
    testLocaleInfoGetWeekendBH: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-BH");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 5);
        test.equal(info.getWeekEndEnd(), 6);
        test.done();
    },
    testLocaleInfoGetWeekendDZ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-DZ");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 5);
        test.equal(info.getWeekEndEnd(), 6);
        test.done();
    },
    testLocaleInfoGetWeekendEG: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-EG");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 5);
        test.equal(info.getWeekEndEnd(), 6);
        test.done();
    },
    testLocaleInfoGetWeekendIL: function(test) {
        test.expect(3);
        var info = new LocaleInfo("he-IL");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 5);
        test.equal(info.getWeekEndEnd(), 6);
        test.done();
    },
    testLocaleInfoGetWeekendIQ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-IQ");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 5);
        test.equal(info.getWeekEndEnd(), 6);
        test.done();
    },
    testLocaleInfoGetWeekendJO: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-JO");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 5);
        test.equal(info.getWeekEndEnd(), 6);
        test.done();
    },
    testLocaleInfoGetWeekendKW: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-KW");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 5);
        test.equal(info.getWeekEndEnd(), 6);
        test.done();
    },
    testLocaleInfoGetWeekendLY: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-LY");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 5);
        test.equal(info.getWeekEndEnd(), 6);
        test.done();
    },
    testLocaleInfoGetWeekendMA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-MA");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 6);
        test.equal(info.getWeekEndEnd(), 0);
        test.done();
    },
    testLocaleInfoGetWeekendOM: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-OM");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 5);
        test.equal(info.getWeekEndEnd(), 6);
        test.done();
    },
    testLocaleInfoGetWeekendQA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-QA");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 5);
        test.equal(info.getWeekEndEnd(), 6);
        test.done();
    },
    testLocaleInfoGetWeekendSA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-SA");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 5);
        test.equal(info.getWeekEndEnd(), 6);
        test.done();
    },
    testLocaleInfoGetWeekendSD: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-SD");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 5);
        test.equal(info.getWeekEndEnd(), 6);
        test.done();
    },
    testLocaleInfoGetWeekendSY: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-SY");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 5);
        test.equal(info.getWeekEndEnd(), 6);
        test.done();
    },
    testLocaleInfoGetWeekendTN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-TN");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 6);
        test.equal(info.getWeekEndEnd(), 0);
        test.done();
    },
    testLocaleInfoGetWeekendYE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ar-YE");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 5);
        test.equal(info.getWeekEndEnd(), 6);
        test.done();
    },
    testLocaleInfoGetWeekendAF: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ps-AF");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 4);
        test.equal(info.getWeekEndEnd(), 5);
        test.done();
    },
    testLocaleInfoGetWeekendIR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fa-IR");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 5);
        test.equal(info.getWeekEndEnd(), 5);
        test.done();
    },
    testLocaleInfoGetWeekendIN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("hi-IN");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 0);
        test.equal(info.getWeekEndEnd(), 0);
        test.done();
    },
    testLocaleInfoGetWeekendIN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("az-Latn-AZ");
        test.ok(info !== null);

        test.equal(info.getWeekEndStart(), 6);
        test.equal(info.getWeekEndEnd(), 0);
        test.done();
    },
    testLocaleInfoGetMeridiemsStyleDefault: function(test) {
        test.expect(2);
        var info = new LocaleInfo();
        test.ok(info !== null);

        test.equal(info.getMeridiemsStyle(), "gregorian");
        test.done();
    },
    testLocaleInfoGetMeridiemsStyleUS: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-US");
        test.ok(info !== null);

        test.equal(info.getMeridiemsStyle(), "gregorian");
        test.done();
    },
    testLocaleInfoGetMeridiemsStyle_am_ET: function(test) {
        test.expect(2);
        var info = new LocaleInfo("am-ET");
        test.ok(info !== null);

        test.equal(info.getMeridiemsStyle(), "ethiopic");
        test.done();
    },
    testLocaleInfoGetMeridiemsStyle_zh_Hans_CN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-Hans-CN");
        test.ok(info !== null);

        // Even for the Chinese locales, the default is
        // Gregorian style. To format with Chinese style,
        // you have to explicitly request it when constructing
        // the date formatter instance.
        test.equal(info.getMeridiemsStyle(), "gregorian");
        test.done();
    },
    testLocaleInfoPaperSizeDefault: function(test) {
        test.expect(2);
        var info = new LocaleInfo();
        test.ok(info !== null);

        // If locale is not specified, default locale would be return as "en-US".
        test.equal(info.getPaperSize(), "8x11");
        test.done();
    },
    testLocaleInfoPaperSize_en_US: function(test) {
        test.expect(2);
        var info = new LocaleInfo("en-US");
        test.ok(info !== null);

        test.equal(info.getPaperSize(), "8x11");
        test.done();
    },
    testLocaleInfoPaperSize_ko_KR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoPaperSize_es_MX: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-MX");
        test.ok(info !== null);

        test.equal(info.getPaperSize(), "8x11");
        test.done();
    },
    testLocaleInfoPaperSize_es_SV: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-SV");
        test.ok(info !== null);

        test.equal(info.getPaperSize(), "8x11");
        test.done();
    },
    testLocaleInfoPaperSize_es_PR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-PR");
        test.ok(info !== null);

        test.equal(info.getPaperSize(), "8x11");
        test.done();
    },
    testLocaleInfoPaperSize_es_VE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("es-VE");
        test.ok(info !== null);

        test.equal(info.getPaperSize(), "8x11");
        test.done();
    },
    testLocaleInfoPaperSize_fr_FR: function(test) {
        test.expect(2);
        var info = new LocaleInfo("fr-FR");
        test.ok(info !== null);

        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoPaperSize_de_DE: function(test) {
        test.expect(2);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoPaperSize_it_IT: function(test) {
        test.expect(2);
        var info = new LocaleInfo("it-IT");
        test.ok(info !== null);

        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoPaperSize_zh_CN: function(test) {
        test.expect(2);
        var info = new LocaleInfo("zh-CN");
        test.ok(info !== null);

        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_en_US: function(test) {
        test.expect(1);
        var info = new LocaleInfo("en-US");
        test.ok(info !== null);
        test.done();
    },
    testLocaleInfoQuotation_ko_KR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ko-KR");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.done();
    },
    testLocaleInfoQuotation_es_ES: function(test) {
        test.expect(3);
        var info = new LocaleInfo("es-ES");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.done();
    },
    testLocaleInfoQuotation_zh_CN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("zh-CN");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.done();
    },
    testLocaleInfoQuotation_fa_IR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fa-IR");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "«");
        test.equal(info.getDelimiterQuotationEnd(), "»");
        test.done();
    },
    testLocaleInfoQuotation_de_DE: function(test) {
        test.expect(3);
        var info = new LocaleInfo("de-DE");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "„");
        test.equal(info.getDelimiterQuotationEnd(), "“");
        test.done();
    },
    testLocaleInfoQuotation_pt_BR: function(test) {
        test.expect(3);
        var info = new LocaleInfo("pt-BR");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.done();
    },
    testLocaleInfoQuotation_hy_AM: function(test) {
        test.expect(3);
        var info = new LocaleInfo("hy-AM");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "«");
        test.equal(info.getDelimiterQuotationEnd(), "»");
        test.done();
    },
    testLocaleInfoQuotation_ur_IN: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ur-IN");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "”");
        test.equal(info.getDelimiterQuotationEnd(), "“");
        test.done();
    },
    testLocaleInfoQuotation_fr_CA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("fr-CA");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "«");
        test.equal(info.getDelimiterQuotationEnd(), "»");
        test.done();
    },
    testLocaleInfoQuotation_he_IL: function(test) {
        test.expect(3);
        var info = new LocaleInfo("he-IL");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "”");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.done();
    },
    testLocaleInfoQuotation_uz_Latn_UZ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("uz-Latn-UZ");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.done();
    },
    testLocaleInfoQuotation_ro_RO: function(test) {
        test.expect(3);
        var info = new LocaleInfo("ro-RO");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "„");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.done();
    },
    testLocaleInfoQuotation_bs_BA: function(test) {
        test.expect(3);
        var info = new LocaleInfo("bs-BA");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "„");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.done();
    },
    testLocaleInfoQuotation_el_CY: function(test) {
        test.expect(3);
        var info = new LocaleInfo("el-CY");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "«");
        test.equal(info.getDelimiterQuotationEnd(), "»");
        test.done();
    },
    testLocaleInfoQuotation_kk_KZ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("kk-KZ");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "«");
        test.equal(info.getDelimiterQuotationEnd(), "»");
        test.done();
    },
    testLocaleInfoQuotation_az_Latn_AZ: function(test) {
        test.expect(3);
        var info = new LocaleInfo("az-Latn-AZ");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.done();
    },
    testLocaleInfoQuotation_de_CH: function(test) {
        test.expect(3);
        var info = new LocaleInfo("de-CH");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "„");
        test.equal(info.getDelimiterQuotationEnd(), "“");
        test.done();
    },
    testLocaleInfoQuotation_ka_GE: function(test) {
        test.expect(4);
        var info = new LocaleInfo("ka-GE");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "„");
        test.equal(info.getDelimiterQuotationEnd(), "“");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_be_BY: function(test) {
        test.expect(4);
        var info = new LocaleInfo("be-BY");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "«");
        test.equal(info.getDelimiterQuotationEnd(), "»");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_lo_LA: function(test) {
        test.expect(4);
        var info = new LocaleInfo("lo-LA");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_ky_KG: function(test) {
        test.expect(4);
        var info = new LocaleInfo("ky-KG");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "«");
        test.equal(info.getDelimiterQuotationEnd(), "»");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_hy_AM: function(test) {
        test.expect(4);
        var info = new LocaleInfo("hy-AM");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "«");
        test.equal(info.getDelimiterQuotationEnd(), "»");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_gl_ES: function(test) {
        test.expect(4);
        var info = new LocaleInfo("gl-ES");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_eu_ES: function(test) {
        test.expect(4);
        var info = new LocaleInfo("eu-ES");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "«");
        test.equal(info.getDelimiterQuotationEnd(), "»");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_my_MM: function(test) {
        test.expect(4);
        var info = new LocaleInfo("my-MM");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_ne_NP: function(test) {
        test.expect(4);
        var info = new LocaleInfo("ne-NP");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_wo_SN: function(test) {
        test.expect(4);
        var info = new LocaleInfo("wo-SN");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_tk_TM: function(test) {
        test.expect(4);
        var info = new LocaleInfo("tk-TM");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_tg_TJ: function(test) {
        test.expect(4);
        var info = new LocaleInfo("tg-TJ");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), '“');
        test.equal(info.getDelimiterQuotationEnd(), '”');
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_mt_MT: function(test) {
        test.expect(4);
        var info = new LocaleInfo("mt-MT");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_zu_ZA: function(test) {
        test.expect(4);
        var info = new LocaleInfo("zu-ZA");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_lb_LU: function(test) {
        test.expect(4);
        var info = new LocaleInfo("lb-LU");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "„");
        test.equal(info.getDelimiterQuotationEnd(), "“");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_ig_NG: function(test) {
        test.expect(4);
        var info = new LocaleInfo("ig-NG");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_ps_AF: function(test) {
        test.expect(4);
        var info = new LocaleInfo("ps-AF");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_yo_BJ: function(test) {
        test.expect(4);
        var info = new LocaleInfo("yo-BJ");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_yo_NG: function(test) {
        test.expect(4);
        var info = new LocaleInfo("yo-NG");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), "“");
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_sr_Cyrl_BA: function(test) {
        test.expect(4);
        var info = new LocaleInfo("sr-Cyrl-BA");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), '„');
        test.equal(info.getDelimiterQuotationEnd(), '”');
        test.equal(info.getPaperSize(), "A4");
        test.done();
    },
    testLocaleInfoQuotation_sr_Latn_ME: function(test) {
        test.expect(4);
        var info = new LocaleInfo("sr-Latn-ME");
        test.ok(info !== null);

        test.equal(info.getDelimiterQuotationStart(), '„');
        test.equal(info.getDelimiterQuotationEnd(), "”");
        test.equal(info.getPaperSize(), "A4");
        test.done();
    }
};