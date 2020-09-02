 /*
 * testnumfmt2.js - test the number formatter object
 *
 * Copyright © 2019-2020, JEDLSoft
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

if (typeof(NumFmt) === "undefined") {
    var NumFmt = require("../../lib/NumFmt.js");
}

module.exports.testnumfmt2 = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    }, 
    testNumFmt_ar_EG: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-EG");
        var fmt = new NumFmt({locale:"ar-EG", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"ar-EG", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n}٪؜"); //// CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), '؜-{n}٪؜'); //// CLDR 34 change
        test.equal(pctfmt.format(34), "34٪؜"); //// CLDR 34 change

        var curfmt = new NumFmt({locale: "ar-EG", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "؜-{n} {s}");
        test.equal(curfmt.format(57.05), "57٫05 E£"); //EGP
        test.done();
    },
    testNumFmt_ar_IQ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-IQ");
        var fmt = new NumFmt({locale:"ar-IQ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"ar-IQ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n}٪؜"); //// CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), '؜-{n}٪؜'); //// CLDR 34 change
        test.equal(pctfmt.format(34), "34٪؜"); //// CLDR 34 change

        var curfmt = new NumFmt({locale: "ar-IQ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "؜-{n} {s}");
        test.equal(curfmt.format(57.05), "57 ﺩ.ﻉ.");  //IQD
        test.done();
    },
    testNumFmt_ar_MA: function(test) {
        
        test.expect(9);
        var li = new LocaleInfo("ar-MA");
        var fmt = new NumFmt({locale:"ar-MA", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"ar-MA", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), '{n}‎%‎');
        test.equal(li.getNegativePercentageFormat(), '‎-{n}‎%‎');
        test.equal(pctfmt.format(34), '34‎%‎');

        var curfmt = new NumFmt({locale: "ar-MA", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, '{s} {n}');
        test.equal(li.getCurrencyFormats().commonNegative, '‎-{s} {n}');
        test.equal(curfmt.format(57.05),  'د.م. 57,05');//MAD
        test.done();
    },
    testNumFmt_as_IN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("as-IN");
        var fmt = new NumFmt({locale:"as-IN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "12,34,56,789.45");

        var pctfmt = new NumFmt({locale:"as-IN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "as-IN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.equal(curfmt.format(57.05), "₹ 57.05"); //INR
        test.done();
    },
    testNumFmt_bg_BG: function(test) {
        test.expect(9);
        var li = new LocaleInfo("bg-BG");
        var fmt = new NumFmt({locale:"bg-BG", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"bg-BG", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "bg-BG", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 лв"); // BGN
        test.done();
    },
    testNumFmt_bn_IN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("bn-IN");
        var fmt = new NumFmt({locale:"bn-IN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "12,34,56,789.45");

        var pctfmt = new NumFmt({locale:"bn-IN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "bn-IN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n}{s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n}{s}");
        test.equal(curfmt.format(57.05), "57.05₹"); //INR
        test.done();
    },
    testNumFmt_bs_Latn_BA: function(test) {
        test.expect(9);
        var li = new LocaleInfo("bs-Latn-BA");
        var fmt = new NumFmt({locale:"bs-Latn-BA", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"bs-Latn-BA", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "bs-Latn-BA", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 KM");  //BAM
        test.done();
    },
    testNumFmt_bs_Latn_ME: function(test) {
        test.expect(9);
        var li = new LocaleInfo("bs-Latn-ME");
        var fmt = new NumFmt({locale:"bs-Latn-ME", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"bs-Latn-ME", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "bs-Latn-ME", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €"); //EUR
        test.done();
    },
    testNumFmt_cs_CZ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("cs-CZ");
        var fmt = new NumFmt({locale:"cs-CZ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), '123 456 789,45');

        var pctfmt = new NumFmt({locale:"cs-CZ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "cs-CZ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 Kč"); //CZK
        test.done();
    },
    testNumFmt_da_DK: function(test) {
        test.expect(9);
        var li = new LocaleInfo("da-DK");
        var fmt = new NumFmt({locale:"da-DK", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"da-DK", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "da-DK", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 kr"); // //DKK
        test.done();
    },
    testNumFmt_de_AT: function(test) {
        test.expect(9);
        var li = new LocaleInfo("de-AT");
        var fmt = new NumFmt({locale:"de-AT", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"de-AT", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "de-AT", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.equal(curfmt.format(57.05), "€ 57,05"); //EUR
        test.done();
    },
    testNumFmt_de_CH: function(test) {
        test.expect(9);
        var li = new LocaleInfo("de-CH");
        var fmt = new NumFmt({locale:"de-CH", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(),  "’");
        test.equal(fmt.format(123456789.45), "123’456’789.45");

        var pctfmt = new NumFmt({locale:"de-CH", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "de-CH", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "{s}-{n}");
        test.equal(curfmt.format(57.05), "Fr 57.05"); //CHF
        test.done();
    },
    testNumFmt_de_DE: function(test) {
        test.expect(9);
        var li = new LocaleInfo("de-DE");
        var fmt = new NumFmt({locale:"de-DE", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"de-DE", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "de-DE", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €"); //EUR
        test.done();
    },
    testNumFmt_de_LU: function(test) {
        test.expect(9);
        var li = new LocaleInfo("de-LU");
        var fmt = new NumFmt({locale:"de-LU", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"de-LU", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "de-LU", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €"); //EUR
        test.done();
    },
    testNumFmt_el_CY: function(test) {
        test.expect(9);
        var li = new LocaleInfo("el-CY");
        var fmt = new NumFmt({locale:"el-CY", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"el-CY", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "el-CY", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €"); //EUR
        test.done();
    },
    testNumFmt_el_GR: function(test) {
        test.expect(9);
        var li = new LocaleInfo("el-GR");
        var fmt = new NumFmt({locale:"el-GR", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"el-GR", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "el-GR", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.0545), "57,05 €"); //EUR
        test.done();
    },
    testNumFmt_en_AM: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-AM");
        var fmt = new NumFmt({locale:"en-AM", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-AM", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-AM", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "դր.57.05"); //AMD (decimals:0)
        test.done();
    },
    testNumFmt_en_AU: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-AU");
        var fmt = new NumFmt({locale:"en-AU", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-AU", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-AU", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); //AUD
        test.done();
    },
    testNumFmt_en_AZ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-AZ");
        var fmt = new NumFmt({locale:"en-AZ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-AZ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-AZ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "AZN57.05"); //AZN
        test.done();
    },
    testNumFmt_en_CA: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-CA");
        var fmt = new NumFmt({locale:"en-CA", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-CA", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-CA", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); //CAD
        test.done();
    },
    testNumFmt_en_GB: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-GB");
        var fmt = new NumFmt({locale:"en-GB", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-GB", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-GB", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "£57.05"); //GBP
        test.done();
    },
    testNumFmt_en_GH: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-GH");
        var fmt = new NumFmt({locale:"en-GH", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-GH", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-GH", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "₵57.05"); //GHS
        test.done();
    },
    testNumFmt_en_HK: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-HK");
        var fmt = new NumFmt({locale:"en-HK", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-HK", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-HK", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); //HKD
        test.done();
    },
    testNumFmt_en_IE: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-IE");
        var fmt = new NumFmt({locale:"en-IE", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-IE", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-IE", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "€57.05"); //INR
        test.done();
    },
    testNumFmt_en_IN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-IN");
        var fmt = new NumFmt({locale:"en-IN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "12,34,56,789.45");

        var pctfmt = new NumFmt({locale:"en-IN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-IN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "₹57.05"); //INR
        test.done();
    },
    testNumFmt_en_IS: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-IS");
        var fmt = new NumFmt({locale:"en-IS", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-IS", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-IS", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "kr57"); //ISK decimals:0
        test.done();
    },
    testNumFmt_en_JP: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-JP");
        var fmt = new NumFmt({locale:"en-JP", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-JP", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-JP", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "¥57"); //JPY decimals:0
        test.done();
    },
    testNumFmt_en_KE: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-KE");
        var fmt = new NumFmt({locale:"en-KE", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-KE", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-KE", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "Sh57.05"); //KES
        test.done();
    },
    testNumFmt_en_KR: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-KR");
        var fmt = new NumFmt({locale:"en-KR", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-KR", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-KR", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), '₩57'); //KRW decimals:0
        test.done();
    },
    testNumFmt_en_LK: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-LK");
        var fmt = new NumFmt({locale:"en-LK", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-LK", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-LK", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "Rs57.05"); //LKR
        test.done();
    },
    testNumFmt_en_MM: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-MM");
        var fmt = new NumFmt({locale:"en-MM", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-MM", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-MM", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "K57"); //MMK decimals:0
        test.done();
    },
    testNumFmt_en_MW: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-MW");
        var fmt = new NumFmt({locale:"en-MW", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-MW", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-MW", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "MK57.05"); //MWK

        test.done();
    },
    testNumFmt_en_MY: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-MY");
        var fmt = new NumFmt({locale:"en-MY", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-MY", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-MY", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "RM57.05"); //MYR

        test.done();
    },
    testNumFmt_en_NG: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-NG");
        var fmt = new NumFmt({locale:"en-NG", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-NG", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-NG", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "₦57.05"); //NGN
        
        test.done();
    },
    testNumFmt_en_NZ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-NZ");
        var fmt = new NumFmt({locale:"en-NZ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-NZ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-NZ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); //NZD
        
        test.done();
    },
    testNumFmt_en_PH: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-PH");
        var fmt = new NumFmt({locale:"en-PH", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-PH", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-PH", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "₱57.05"); //PHP
        
        test.done();
    },
    testNumFmt_en_PR: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-PR");
        var fmt = new NumFmt({locale:"en-PR", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-PR", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-PR", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); //USD
        
        test.done();
    },
    testNumFmt_en_SG: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-SG");
        var fmt = new NumFmt({locale:"en-SG", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-SG", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-SG", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); //SGD
        
        test.done();
    },
    testNumFmt_en_US: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-US");
        var fmt = new NumFmt({locale:"en-US", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-US", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-US", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); //USD
        
        test.done();
    },
    testNumFmt_en_UG: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-UG");
        var fmt = new NumFmt({locale:"en-UG", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-UG", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-UG", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "Sh57"); //UGX decimals:0
        
        test.done();
    },
    testNumFmt_en_ZA: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-ZA");
        var fmt = new NumFmt({locale:"en-ZA", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"en-ZA", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-ZA", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "R57,05"); //ZAR
        
        test.done();
    },
    testNumFmt_en_ZM: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-ZM");
        var fmt = new NumFmt({locale:"en-ZM", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-ZM", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-ZM", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "ZK57.05"); //ZMW
        
        test.done();
    },
    testNumFmt_es_AR: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-AR");
        var fmt = new NumFmt({locale:"es-AR", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"es-AR", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-AR", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.equal(curfmt.format(57.05), "$ 57,05"); //ARS
        
        test.done();
    },
    testNumFmt_es_BO: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-BO");
        var fmt = new NumFmt({locale:"es-BO", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"es-BO", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-BO", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "Bs57,05"); //BOB
        
        test.done();
    },
    testNumFmt_es_CL: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-CL");
        var fmt = new NumFmt({locale:"es-CL", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"es-CL", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-CL", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "{s}-{n}");
        test.equal(curfmt.format(57.05), "$57"); //CLP
        
        test.done();
    },
    testNumFmt_es_CO: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-CO");
        var fmt = new NumFmt({locale:"es-CO", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"es-CO", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-CO", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.equal(curfmt.format(57.05), "$ 57,05"); //COP
        
        test.done();
    },
    testNumFmt_es_DO: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-DO");
        var fmt = new NumFmt({locale:"es-DO", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"es-DO", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-DO", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); //DOP
        
        test.done();
    },
    testNumFmt_es_EC: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-EC");
        var fmt = new NumFmt({locale:"es-EC", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"es-EC", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-EC", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "{s}-{n}");
        test.equal(curfmt.format(57.05), "$57,05"); //USD
        
        test.done();
    },
    testNumFmt_es_ES: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-ES");
        var fmt = new NumFmt({locale:"es-ES", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"es-ES", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-ES", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €");//EUR
        
        test.done();
    },
    testNumFmt_es_GT: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-GT");
        var fmt = new NumFmt({locale:"es-GT", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"es-GT", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-GT", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "Q57.05"); //GTQ
        
        test.done();
    },
    testNumFmt_es_HN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-HN");
        var fmt = new NumFmt({locale:"es-HN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"es-HN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-HN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "L57.05"); //HNL
        
        test.done();
    },
    testNumFmt_es_MX: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-MX");
        var fmt = new NumFmt({locale:"es-MX", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"es-MX", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-MX", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); //MXN
        
        test.done();
    },
    testNumFmt_es_NI: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-NI");
        var fmt = new NumFmt({locale:"es-NI", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"es-NI", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-NI", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "C$57.05"); //NIO
        
        test.done();
    },
    testNumFmt_es_PA: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-PA");
        var fmt = new NumFmt({locale:"es-PA", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"es-PA", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-PA", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); //USD
        
        test.done();
    },
    testNumFmt_es_PE: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-PE");
        var fmt = new NumFmt({locale:"es-PE", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"es-PE", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-PE", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.equal(curfmt.format(57.05), "S/. 57.05"); //PEN
        
        test.done();
    },
    testNumFmt_es_PR: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-PR");
        var fmt = new NumFmt({locale:"es-PR", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"es-PR", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-PR", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); //USD
        
        test.done();
    },
    testNumFmt_es_PY: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-PY");
        var fmt = new NumFmt({locale:"es-PY", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"es-PY", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-PY", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "{s} -{n}");
        test.equal(curfmt.format(57.05), "₲ 57"); //PYG
        
        test.done();
    },
    testNumFmt_es_SV: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-SV");
        var fmt = new NumFmt({locale:"es-SV", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"es-SV", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-SV", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); //USD
        
        test.done();
    },
    testNumFmt_es_US: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-US");
        var fmt = new NumFmt({locale:"es-US", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"es-US", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-US", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); 
        test.done();
    },
    testNumFmt_es_UY: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-UY");
        var fmt = new NumFmt({locale:"es-UY", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"es-UY", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-UY", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.equal(curfmt.format(57.05), "$ 57,05"); //UYU
        
        test.done();
    },
    testNumFmt_es_VE: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-VE");
        var fmt = new NumFmt({locale:"es-VE", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"es-VE", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-VE", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "{s}-{n}");
        test.equal(curfmt.format(57.05), "VES57,05"); //VES
        
        test.done();
    },
    testNumFmt_et_EE: function(test) {
        test.expect(9);
        var li = new LocaleInfo("et-EE");
        var fmt = new NumFmt({locale:"et-EE", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"et-EE", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "−{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "et-EE", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "−{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €"); //EUR
        
        test.done();
    },
    testNumFmt_fa_AF: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fa-AF");
        var fmt = new NumFmt({locale:"fa-AF", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"fa-AF", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), '{n}٪');
        test.equal(li.getNegativePercentageFormat(), '‎−{n}٪');
        test.equal(pctfmt.format(34), '34٪');

        var curfmt = new NumFmt({locale: "fa-AF", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, '{s} {n}');
        test.equal(li.getCurrencyFormats().commonNegative, '‎−{s} {n}');
        test.equal(curfmt.format(57.05), '؋ 57'); //AFN
        
        test.done();
    },
    testNumFmt_fa_IR: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fa-IR");
        var fmt = new NumFmt({locale:"fa-IR", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"fa-IR", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), '{n}٪');
        test.equal(li.getNegativePercentageFormat(), '‎−{n}٪');
        test.equal(pctfmt.format(34), '34٪');

        var curfmt = new NumFmt({locale: "fa-IR", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, '‎{s}{n}');
        test.equal(li.getCurrencyFormats().commonNegative, '‎−‎{s}{n}');
        test.equal(curfmt.format(57.05), '‎﷼57');  //IRR
        
        test.done();
    },
    testNumFmt_fi_FI: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fi-FI");
        var fmt = new NumFmt({locale:"fi-FI", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fi-FI", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "−{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fi-FI", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "−{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €"); //EUR
        
        test.done();
    }, 
    testNumFmt_fr_BE: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-BE");
        var fmt = new NumFmt({locale:"fr-BE", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), '123 456 789,45');

        var pctfmt = new NumFmt({locale:"fr-BE", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-BE", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €"); //EUR
        
        test.done();
    },
    testNumFmt_fr_CA: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-CA");
        var fmt = new NumFmt({locale:"fr-CA", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), '123 456 789,45');

        var pctfmt = new NumFmt({locale:"fr-CA", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-CA", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 $"); //CAD
        
        test.done();
    },
    testNumFmt_fr_CH: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-CH");
        var fmt = new NumFmt({locale:"fr-CH", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), '123 456 789,45');

        var pctfmt = new NumFmt({locale:"fr-CH", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "fr-CH", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 Fr"); //CHF
        
        test.done();
    },
    testNumFmt_fr_FR: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-FR");
        var fmt = new NumFmt({locale:"fr-FR", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-FR", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-FR", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €"); //EUR
        
        test.done();
    },
    testNumFmt_fr_LU: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-LU");
        var fmt = new NumFmt({locale:"fr-LU", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), '.');
        test.equal(fmt.format(123456789.45), '123.456.789,45');

        var pctfmt = new NumFmt({locale:"fr-LU", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-LU", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €"); //EUR
        
        test.done();
    },
    testNumFmt_ga_IE: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ga-IE");
        var fmt = new NumFmt({locale:"ga-IE", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"ga-IE", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "ga-IE", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "€57.05"); //EUR
        
        test.done();
    },
    testNumFmt_gu_IN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("gu-IN");
        var fmt = new NumFmt({locale:"gu-IN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "12,34,56,789.45");

        var pctfmt = new NumFmt({locale:"gu-IN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "gu-IN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "₹57.05"); //INR
        
        test.done();
    },
    testNumFmt_he_IL: function(test) {
        test.expect(9);
        var li = new LocaleInfo("he-IL");
        var fmt = new NumFmt({locale:"he-IL", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"he-IL", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "‎-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "he-IL", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "‏{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "‏-{n} {s}");
        test.equal(curfmt.format(57.05), "‏57.05 ₪"); //ILS
        
        test.done();
    },
    testNumFmt_hi_IN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("hi-IN");
        var fmt = new NumFmt({locale:"hi-IN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "12,34,56,789.45");

        var pctfmt = new NumFmt({locale:"hi-IN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "hi-IN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "₹57.05"); //INR
        
        test.done();
    },
    testNumFmt_hr_HR: function(test) {
        test.expect(9);
        var li = new LocaleInfo("hr-HR");
        var fmt = new NumFmt({locale:"hr-HR", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"hr-HR", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n} %"); // CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), "-{n} %"); // CLDR 34 change
        test.equal(pctfmt.format(34), "34 %"); // CLDR 34 change

        var curfmt = new NumFmt({locale: "hr-HR", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common,  "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 kn"); //HRK
        
        test.done();
    },
    testNumFmt_hr_ME: function(test) {
        test.expect(9);
        var li = new LocaleInfo("hr-ME");
        var fmt = new NumFmt({locale:"hr-ME", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"hr-ME", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n} %"); // CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), "-{n} %"); // CLDR 34 change
        test.equal(pctfmt.format(34), "34 %"); // CLDR 34 change

        var curfmt = new NumFmt({locale: "hr-ME", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common,  "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €");//EUR
        
        test.done();
    },
    testNumFmt_hr_HU: function(test) {
        test.expect(9);
        var li = new LocaleInfo("hr-HU");
        var fmt = new NumFmt({locale:"hr-HU", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"hr-HU", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n} %"); // CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), "-{n} %"); // CLDR 34 change
        test.equal(pctfmt.format(34), "34 %"); // CLDR 34 change

        var curfmt = new NumFmt({locale: "hr-HU", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common,  "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 Ft");//HUF
        
        test.done();
    },
    testNumFmt_id_ID: function(test) {
        test.expect(9);
        var li = new LocaleInfo("id-ID");
        var fmt = new NumFmt({locale:"id-ID", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"id-ID", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "id-ID", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "Rp57,05"); //IDR
        
        test.done();
    },
    testNumFmt_is_IS: function(test) {
        test.expect(9);
        var li = new LocaleInfo("is-IS");
        var fmt = new NumFmt({locale:"is-IS", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"is-IS", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "is-IS", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 kr"); //ISK
        
        test.done();
    },
    testNumFmt_it_CH: function(test) {
        test.expect(9);
        var li = new LocaleInfo("it-CH");
        var fmt = new NumFmt({locale:"it-CH", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), "’");
        test.equal(fmt.format(123456789.45), "123’456’789.45");

        var pctfmt = new NumFmt({locale:"it-CH", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "it-CH", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "{s}-{n}");
        test.equal(curfmt.format(57.05), "Fr 57.05"); //CHF
        
        test.done();
    },
    testNumFmt_it_IT: function(test) {
        test.expect(9);
        var li = new LocaleInfo("it-IT");
        var fmt = new NumFmt({locale:"it-IT", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"it-IT", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "it-IT", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €"); //EUR
        
        test.done();
    },
    testNumFmt_ja_JP: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ja-JP");
        var fmt = new NumFmt({locale:"ja-JP", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"ja-JP", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "ja-JP", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "¥57"); //JPY
        
        test.done();
    },
    testNumFmt_kk_KZ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("kk-KZ");
        var fmt = new NumFmt({locale:"kk-KZ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"kk-KZ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "kk-KZ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 ₸"); //KZT
        
        test.done();
    },
    testNumFmt_kn_IN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("kn-IN");
        var fmt = new NumFmt({locale:"kn-IN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"kn-IN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "kn-IN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "₹57.05"); //INR
        
        test.done();
    },
    testNumFmt_ko_KR: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ko-KR");
        var fmt = new NumFmt({locale:"ko-KR", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"ko-KR", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "ko-KR", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "₩57"); //KRW
        
        test.done();
    },
    testNumFmt_ku_IQ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ku-IQ");
        var fmt = new NumFmt({locale:"ku-IQ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");
        var pctfmt = new NumFmt({locale:"ku-IQ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), '{n} ٪');
        test.equal(li.getNegativePercentageFormat(), '‏-{n} ٪');
        test.equal(pctfmt.format(34), '34 ٪');

        var curfmt = new NumFmt({locale: "ku-IQ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, '{n} {s}');
        test.equal(li.getCurrencyFormats().commonNegative, '‏-{n} {s}');
        test.equal(curfmt.format(57.05), '57 ﺩ.ﻉ.'); //IQD
        
        test.done();
    },
    testNumFmt_lt_LT: function(test) {
        test.expect(9);
        var li = new LocaleInfo("lt-LT");
        var fmt = new NumFmt({locale:"lt-LT", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"lt-LT", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "−{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "lt-LT", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "−{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €"); //EUR
        test.done();
    },
    testNumFmt_lv_LV: function(test) {
        test.expect(9);
        var li = new LocaleInfo("lv-LV");
        var fmt = new NumFmt({locale:"lv-LV", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"lv-LV", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "lv-LV", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €"); //EUR
        test.done();
    },
    testNumFmt_mk_MK: function(test) {
        test.expect(9);
        var li = new LocaleInfo("mk-MK");
        var fmt = new NumFmt({locale:"mk-MK", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"mk-MK", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "mk-MK", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 ден"); //MKD
        test.done();
    },
    testNumFmt_ml_IN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ml-IN");
        var fmt = new NumFmt({locale:"ml-IN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "12,34,56,789.45");

        var pctfmt = new NumFmt({locale:"ml-IN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "ml-IN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "₹57.05"); //INR
        test.done();
    },
    testNumFmt_mr_IN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("mr-IN");
        var fmt = new NumFmt({locale:"mr-IN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "12,34,56,789.45");

        var pctfmt = new NumFmt({locale:"mr-IN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "mr-IN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "₹57.05"); //INR
        test.done();
    },
    testNumFmt_ms_MY: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ms-MY");
        var fmt = new NumFmt({locale:"ms-MY", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"ms-MY", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "ms-MY", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "RM57.05"); //MYR
        test.done();
    },
    testNumFmt_nb_NO: function(test) {
        test.expect(9);
        var li = new LocaleInfo("nb-NO");
        var fmt = new NumFmt({locale:"nb-NO", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"nb-NO", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "−{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "nb-NO", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "−{s} {n}");
        test.equal(curfmt.format(57.05), "kr 57,05"); //NOK
        test.done();
    },
    testNumFmt_nl_BE: function(test) {
        test.expect(9);
        var li = new LocaleInfo("nl-BE");
        var fmt = new NumFmt({locale:"nl-BE", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"nl-BE", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "nl-BE", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "{s} -{n}");
        test.equal(curfmt.format(57.05), "€ 57,05"); //EUR
        test.done();
    },
    testNumFmt_nl_NL: function(test) {
        test.expect(9);
        var li = new LocaleInfo("nl-NL");
        var fmt = new NumFmt({locale:"nl-NL", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"nl-NL", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "nl-NL", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "{s} -{n}");
        test.equal(curfmt.format(57.05), "€ 57,05"); //EUR
        test.done();
    },
    testNumFmt_pa_Guru_IN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("pa-Guru-IN");
        var fmt = new NumFmt({locale:"pa-Guru-IN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "12,34,56,789.45");

        var pctfmt = new NumFmt({locale:"pa-Guru-IN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "pa-Guru-IN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.equal(curfmt.format(57.05), "₹ 57.05"); //INR
        test.done();
    },
    testNumFmt_pl_PL: function(test) {
        test.expect(9);
        var li = new LocaleInfo("pl-PL");
        var fmt = new NumFmt({locale:"pl-PL", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"pl-PL", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "pl-PL", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 zł"); //PLN
        test.done();
    },
    testNumFmt_pt_BR: function(test) {
        test.expect(9);
        var li = new LocaleInfo("pt-BR");
        var fmt = new NumFmt({locale:"pt-BR", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"pt-BR", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "pt-BR", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.equal(curfmt.format(57.05), "R$ 57,05"); //BRL
        test.done();
    },
    testNumFmt_pt_PT: function(test) {
        test.expect(9);
        var li = new LocaleInfo("pt-PT");
        var fmt = new NumFmt({locale:"pt-PT", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"pt-PT", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "pt-PT", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €");  //EUR
        test.done();
    },
    testNumFmt_ro_RO: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ro-RO");
        var fmt = new NumFmt({locale:"ro-RO", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"ro-RO", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "ro-RO", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 lei"); //RON
        test.done();
    },
    testNumFmt_sr_Cyrl_RS: function(test) {
        test.expect(9);
        var li = new LocaleInfo("sr-Cyrl-RS");
        var fmt = new NumFmt({locale:"sr-Cyrl-RS", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"sr-Cyrl-RS", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "sr-Cyrl-RS", type: "currency", useNative:false, currency:li.getCurrency()});
       test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 дин."); //RSD
        test.done();
    },
    testNumFmt_sr_Latn_RS: function(test) {
        test.expect(9);
        var li = new LocaleInfo("sr-Latn-RS");
        var fmt = new NumFmt({locale:"sr-Latn-RS", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"sr-Latn-RS", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "sr-Latn-RS", type: "currency", useNative:false, currency:li.getCurrency()});
       test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 дин.");//RSD
        test.done();
    },
    testNumFmt_ru_BY: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ru-BY");
        var fmt = new NumFmt({locale:"ru-BY", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"ru-BY", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "ru-BY", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 р."); //BYN
        test.done();
    },
    testNumFmt_ru_KG: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ru-KG");
        var fmt = new NumFmt({locale:"ru-KG", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"ru-KG", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "ru-KG", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 лв"); //KGS
        test.done();
    },
    testNumFmt_ru_KZ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ru-KZ");
        var fmt = new NumFmt({locale:"ru-KZ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"ru-KZ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "ru-KZ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 ₸"); //KZT
        test.done();
    },
    testNumFmt_ru_GE: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ru-GE");
        var fmt = new NumFmt({locale:"ru-GE", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"ru-GE", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "ru-GE", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 ₾"); //GEL
        test.done();
    },
    testNumFmt_ru_RU: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ru-RU");
        var fmt = new NumFmt({locale:"ru-RU", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"ru-RU", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "ru-RU", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 ₽"); //RUB
        test.done();
    },
    testNumFmt_ru_UA: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ru-UA");
        var fmt = new NumFmt({locale:"ru-UA", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"ru-UA", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "ru-UA", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 ₴"); //UAH
        test.done();
    },
    testNumFmt_sk_SK: function(test) {
        test.expect(9);
        var li = new LocaleInfo("sk-SK");
        var fmt = new NumFmt({locale:"sk-SK", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"sk-SK", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "sk-SK", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €");//EUR
        test.done();
    },
    testNumFmt_sl_SI: function(test) {
        test.expect(7);
        var li = new LocaleInfo("sl-SI");
        var fmt = new NumFmt({locale:"sl-SI", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"sl-SI", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        //test.equal(li.getNegativePercentageFormat(), "–{n} %"); //CLDR 34 'minus symbol change
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "sl-SI", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        //test.equal(li.getCurrencyFormats().commonNegative, "–{n} {s}"); //CLDR 34 'minus symbol change
        test.equal(curfmt.format(57.05), "57,05 €");//EUR
        test.done();
    },
    testNumFmt_sq_AL: function(test) {
        test.expect(9);
        var li = new LocaleInfo("sq-AL");
        var fmt = new NumFmt({locale:"sq-AL", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"sq-AL", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "sq-AL", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 L"); //ALL
        test.done();
    },
    testNumFmt_sq_ME: function(test) {
        test.expect(9);
        var li = new LocaleInfo("sq-ME");
        var fmt = new NumFmt({locale:"sq-ME", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"sq-ME", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "sq-ME", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €"); //EUR
        test.done();
    },
    testNumFmt_sv_FI: function(test) {
        test.expect(9);
        var li = new LocaleInfo("sq-FI");
        var fmt = new NumFmt({locale:"sq-FI", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"sq-FI", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "sq-FI", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €"); //EUR
        test.done();
    },
    testNumFmt_sv_SE: function(test) {
        test.expect(9);
        var li = new LocaleInfo("sq-SE");
        var fmt = new NumFmt({locale:"sq-SE", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"sq-SE", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "sq-SE", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 kr"); //SEK
        test.done();
    },
    testNumFmt_ta_IN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ta-IN");
        var fmt = new NumFmt({locale:"ta-IN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "12,34,56,789.45");

        var pctfmt = new NumFmt({locale:"ta-IN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "ta-IN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.equal(curfmt.format(57.05), "₹ 57.05"); //INR
        test.done();
    },
    testNumFmt_te_IN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("te-IN");
        var fmt = new NumFmt({locale:"te-IN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "12,34,56,789.45");

        var pctfmt = new NumFmt({locale:"te-IN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "te-IN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "₹57.05"); //INR
        test.done();
    },
    testNumFmt_th_TH: function(test) {
        test.expect(9);
        var li = new LocaleInfo("th-TH");
        var fmt = new NumFmt({locale:"th-TH", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"th-TH", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "th-TH", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "฿57.05"); //THB
        test.done();
    },
    testNumFmt_tr_AM: function(test) {
        test.expect(9);
        var li = new LocaleInfo("tr-AM");
        var fmt = new NumFmt({locale:"tr-AM", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"tr-AM", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "%{n}");
        test.equal(li.getNegativePercentageFormat(), "-%{n}");
        test.equal(pctfmt.format(34), "%34");

        var curfmt = new NumFmt({locale: "tr-AM", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "դր.57,05"); //AMD
        test.done();
    },
    testNumFmt_tr_AZ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("tr-AZ");
        var fmt = new NumFmt({locale:"tr-AZ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"tr-AZ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "%{n}");
        test.equal(li.getNegativePercentageFormat(), "-%{n}");
        test.equal(pctfmt.format(34), "%34");

        var curfmt = new NumFmt({locale: "tr-AZ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "AZN57,05"); //AZN
        test.done();
    },
    testNumFmt_tr_CY: function(test) {
        test.expect(9);
        var li = new LocaleInfo("tr-CY");
        var fmt = new NumFmt({locale:"tr-CY", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"tr-CY", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "%{n}");
        test.equal(li.getNegativePercentageFormat(), "-%{n}");
        test.equal(pctfmt.format(34), "%34");

        var curfmt = new NumFmt({locale: "tr-CY", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "€57,05"); //EUR
        test.done();
    },
    testNumFmt_tr_TR: function(test) {
        test.expect(9);
        var li = new LocaleInfo("tr-TR");
        var fmt = new NumFmt({locale:"tr-TR", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"tr-TR", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "%{n}");
        test.equal(li.getNegativePercentageFormat(), "-%{n}");
        test.equal(pctfmt.format(34), "%34");

        var curfmt = new NumFmt({locale: "tr-TR", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "₺57,05");//TRY
        test.done();
    },
    testNumFmt_uk_UA: function(test) {
        test.expect(9);
        var li = new LocaleInfo("uk-UA");
        var fmt = new NumFmt({locale:"uk-UA", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"uk-UA", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "uk-UA", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 ₴"); //UAH
        test.done();
    },
    testNumFmt_ur_IN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ur-IN");
        var fmt = new NumFmt({locale:"ur-IN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"ur-IN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "‎-‎{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "ur-IN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "‎-‎{s} {n}");
        test.equal(curfmt.format(57.05), "₹ 57٫05"); //INR
        test.done();
    },
    testNumFmt_uz_Latn_UZ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("uz-Latn-UZ");
        var fmt = new NumFmt({locale:"uz-Latn-UZ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"uz-Latn-UZ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "uz-Latn-UZ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 лв"); //UZS
        test.done();
    },
    testNumFmt_vi_VN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("vi-VN");
        var fmt = new NumFmt({locale:"vi-VN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"vi-VN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "vi-VN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 ₫"); //VND
        test.done();
    },
    testNumFmt_zh_Hans_CN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("zh-Hans-CN");
        var fmt = new NumFmt({locale:"zh-Hans-CN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"zh-Hans-CN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "zh-Hans-CN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "¥57.05"); //CNY
        test.done();
    },
    testNumFmt_zh_Hant_HK: function(test) {
        test.expect(9);
        var li = new LocaleInfo("zh-Hant-HK");
        var fmt = new NumFmt({locale:"zh-Hant-HK", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"zh-Hant-HK", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "zh-Hant-HK", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); //HKD
        test.done();
    },
    testNumFmt_zh_Hant_TW: function(test) {
        test.expect(9);
        var li = new LocaleInfo("zh-Hant-TW");
        var fmt = new NumFmt({locale:"zh-Hant-TW", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"zh-Hant-TW", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "zh-Hant-TW", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05");//TWD
        test.done();
    },
    testNumFmt_en_GE: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-GE");
        var fmt = new NumFmt({locale:"en-GE", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-GE", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-GE", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "₾57.05"); //GEL
        test.done();
    },
    testNumFmt_en_CN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-CN");
        var fmt = new NumFmt({locale:"en-CN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-CN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-CN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "¥57.05"); //CNY
        test.done();
    },
    testNumFmt_en_MX: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-MX");
        var fmt = new NumFmt({locale:"en-MX", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-MX", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-MX", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); //MXN
        test.done();
    },
    testNumFmt_en_TW: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-TW");
        var fmt = new NumFmt({locale:"en-TW", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-TW", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-TW", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); //TWD
        test.done();
    },
    testNumFmt_mn_MN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("mn-MN");
        var fmt = new NumFmt({locale:"mn-MN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"mn-MN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "mn-MN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.equal(curfmt.format(57.05), "₮ 57.05"); //MNT
        test.done();
    },
    testNumFmt_es_CA: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-CA");
        var fmt = new NumFmt({locale:"es-CA", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"es-CA", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-CA", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 $"); //CAD
        test.done();
    },
    testNumFmt_af_ZA: function(test) {
        test.expect(9);
        var li = new LocaleInfo("af-ZA");
        var fmt = new NumFmt({locale:"af-ZA", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"af-ZA", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "af-ZA", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "R57,05"); //ZAR
        test.done();
    },
    testNumFmt_am_ET: function(test) {
        test.expect(9);
        var li = new LocaleInfo("am-ET");
        var fmt = new NumFmt({locale:"am-ET", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"am-ET", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "am-ET", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "Br57.05"); //ETB
        test.done();
    },
    testNumFmt_ha_Latn_NG: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ha-Latn-NG");
        var fmt = new NumFmt({locale:"ha-Latn-NG", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"ha-Latn-NG", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "ha-Latn-NG", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.equal(curfmt.format(57.05), "₦ 57.05"); //NGN
        test.done();
    },
    testNumFmt_or_IN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("or-IN");
        var fmt = new NumFmt({locale:"or-IN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "12,34,56,789.45");

        var pctfmt = new NumFmt({locale:"or-IN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "or-IN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");  //// CLDR 34 change
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}"); //// CLDR 34 change
        test.equal(curfmt.format(57.05), "₹57.05"); //INR  //// CLDR 34 change
        test.done();
    },
    testNumFmt_az_Latn_AZ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("az-Latn-AZ");
        var fmt = new NumFmt({locale:"az-Latn-AZ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"az-Latn-AZ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "az-Latn-AZ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}"); //// CLDR 34 change
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}"); //// CLDR 34 change
        test.equal(curfmt.format(57.05), "57,05 AZN"); //AZN 
        test.done();
    },
    testNumFmt_km_KH: function(test) {
        test.expect(9);
        var li = new LocaleInfo("km-KH");
        var fmt = new NumFmt({locale:"km-KH", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"km-KH", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "km-KH", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n}{s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n}{s}");
        test.equal(curfmt.format(57.05), "57,05៛"); //KHR
        test.done();
    },
    testNumFmt_si_LK: function(test) {
        test.expect(9);
        var li = new LocaleInfo("si-LK");
        var fmt = new NumFmt({locale:"si-LK", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"si-LK", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "si-LK", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "Rs57.05"); //LKR
        test.done();
    },
    testNumFmt_ar_AE: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-AE");
        var fmt = new NumFmt({locale:"ar-AE", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"ar-AE", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n}٪؜"); //// CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), '؜-{n}٪؜'); //// CLDR 34 change
        test.equal(pctfmt.format(34), "34٪؜"); //// CLDR 34 change

        var curfmt = new NumFmt({locale: "ar-AE", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "؜-{n} {s}");
        test.equal(curfmt.format(57.05), '57٫05 د.إ'); //AED
        test.done();
    },
    testNumFmt_ar_BH: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-BH");
        var fmt = new NumFmt({locale:"ar-BH", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"ar-BH", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n}٪؜"); //// CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), '؜-{n}٪؜'); //// CLDR 34 change
        test.equal(pctfmt.format(34), "34٪؜"); //// CLDR 34 change

        var curfmt = new NumFmt({locale: "ar-BH", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "؜-{n} {s}");
        test.equal(curfmt.format(57.05), '57٫050 .د.ب'); //BHD
        test.done();
    },
    testNumFmt_ar_DJ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-DJ");
        var fmt = new NumFmt({locale:"ar-DJ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"ar-DJ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n}٪؜"); //// CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), '؜-{n}٪؜'); //// CLDR 34 change
        test.equal(pctfmt.format(34), "34٪؜"); //// CLDR 34 change

        var curfmt = new NumFmt({locale: "ar-DJ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "؜-{n} {s}");
        test.equal(curfmt.format(57.05), '57 Fr');//DJF
        test.done();
    },
    testNumFmt_ar_DZ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-DZ");
        var fmt = new NumFmt({locale:"ar-DZ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"ar-DZ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  '{n}‎%‎');
        test.equal(li.getNegativePercentageFormat(), '‎-{n}‎%‎');
        test.equal(pctfmt.format(34), '34‎%‎');

        var curfmt = new NumFmt({locale: "ar-DZ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, '‎-{s} {n}');
        test.equal(curfmt.format(57.05), 'د.ج 57,05'); //DZD
        test.done();
    },
    testNumFmt_ar_JO: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-JO");
        var fmt = new NumFmt({locale:"ar-JO", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"ar-JO", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n}٪؜"); //// CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), '؜-{n}٪؜'); //// CLDR 34 change
        test.equal(pctfmt.format(34), "34٪؜"); //// CLDR 34 change

        var curfmt = new NumFmt({locale: "ar-JO", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "؜-{n} {s}");
        test.equal(curfmt.format(57.05), '57٫050 د.ا'); //JOD
        test.done();
    },
    testNumFmt_ar_KW: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-KW");
        var fmt = new NumFmt({locale:"ar-KW", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"ar-KW", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n}٪؜"); //// CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), '؜-{n}٪؜'); //// CLDR 34 change
        test.equal(pctfmt.format(34), "34٪؜"); //// CLDR 34 change

        var curfmt = new NumFmt({locale: "ar-KW", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "؜-{n} {s}");
        test.equal(curfmt.format(57.05), '57٫050 د.ك'); //KWD
        test.done();
    },
    testNumFmt_ar_LB: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-LB");
        var fmt = new NumFmt({locale:"ar-LB", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"ar-LB", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n}٪؜"); //// CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), '؜-{n}٪؜'); //// CLDR 34 change
        test.equal(pctfmt.format(34), "34٪؜"); //// CLDR 34 change

        var curfmt = new NumFmt({locale: "ar-LB", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "؜-{n} {s}");
        test.equal(curfmt.format(57.05), '57 L£'); //LBP
        test.done();
    },
    testNumFmt_ar_LY: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-LY");
        var fmt = new NumFmt({locale:"ar-LY", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"ar-LY", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  '{n}‎%‎');
        test.equal(li.getNegativePercentageFormat(), '‎-{n}‎%‎');
        test.equal(pctfmt.format(34),'34‎%‎');

        var curfmt = new NumFmt({locale: "ar-LY", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, '{s} {n}');
        test.equal(li.getCurrencyFormats().commonNegative,  '‎-{s} {n}');
        test.equal(curfmt.format(57.05),  'ل.د 57,050'); //LYD
        test.done();
    },
    testNumFmt_ar_MR: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-MR");
        var fmt = new NumFmt({locale:"ar-MR", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"ar-MR", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n}٪؜"); //// CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), '؜-{n}٪؜'); //// CLDR 34 change
        test.equal(pctfmt.format(34), "34٪؜"); //// CLDR 34 change

        var curfmt = new NumFmt({locale: "ar-MR", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "؜-{n} {s}");
        test.equal(curfmt.format(57.05), "57٫05 MRU"); //MRU
        test.done();
    },
    testNumFmt_ar_OM: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-OM");
        var fmt = new NumFmt({locale:"ar-OM", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"ar-OM", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n}٪؜"); //// CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), '؜-{n}٪؜'); //// CLDR 34 change
        test.equal(pctfmt.format(34), "34٪؜"); //// CLDR 34 change

        var curfmt = new NumFmt({locale: "ar-OM", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "؜-{n} {s}");
        test.equal(curfmt.format(57.05), '57٫050 ر.ع.'); //OMR
        test.done();
    },
    testNumFmt_ar_QA: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-QA");
        var fmt = new NumFmt({locale:"ar-QA", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"ar-QA", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n}٪؜"); //// CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), '؜-{n}٪؜'); //// CLDR 34 change
        test.equal(pctfmt.format(34), "34٪؜"); //// CLDR 34 change

        var curfmt = new NumFmt({locale: "ar-QA", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "؜-{n} {s}");
        test.equal(curfmt.format(57.05), '57٫05 ر.ق'); //QAR
        test.done();
    },
    testNumFmt_ar_SA: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-SA");
        var fmt = new NumFmt({locale:"ar-SA", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"ar-SA", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n}٪؜"); //// CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), '؜-{n}٪؜'); //// CLDR 34 change
        test.equal(pctfmt.format(34), "34٪؜"); //// CLDR 34 change

        var curfmt = new NumFmt({locale: "ar-SA", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "؜-{n} {s}");
        test.equal(curfmt.format(57.05), '57٫05 ر.س');//SAR
        test.done();
    },
    testNumFmt_ar_SD: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-SD");
        var fmt = new NumFmt({locale:"ar-SD", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"ar-SD", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n}٪؜"); //// CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), '؜-{n}٪؜'); //// CLDR 34 change
        test.equal(pctfmt.format(34), "34٪؜"); //// CLDR 34 change

        var curfmt = new NumFmt({locale: "ar-SD", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "؜-{n} {s}");
        test.equal(curfmt.format(57.05), '57٫05 £');//SDG
        test.done();
    },
    testNumFmt_ar_SY: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-SY");
        var fmt = new NumFmt({locale:"ar-SY", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"ar-SY", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n}٪؜"); //// CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), '؜-{n}٪؜'); //// CLDR 34 change
        test.equal(pctfmt.format(34), "34٪؜"); //// CLDR 34 change

        var curfmt = new NumFmt({locale: "ar-SY", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "؜-{n} {s}");
        test.equal(curfmt.format(57.05), '57 £'); //SYP
        test.done();
    },
    testNumFmt_ar_TN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-TN");
        var fmt = new NumFmt({locale:"ar-TN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"ar-TN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  '{n}‎%‎');
        test.equal(li.getNegativePercentageFormat(), '‎-{n}‎%‎');
        test.equal(pctfmt.format(34), '34‎%‎');

        var curfmt = new NumFmt({locale: "ar-TN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common,  '{s} {n}');
        test.equal(li.getCurrencyFormats().commonNegative, '‎-{s} {n}');
        test.equal(curfmt.format(57.05), 'د.ت 57,050'); //TND
        test.done();
    },
    testNumFmt_ar_YE: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ar-YE");
        var fmt = new NumFmt({locale:"ar-YE", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), "٫");
        test.equal(li.getGroupingSeparator(), "٬");
        test.equal(fmt.format(123456789.45), "123٬456٬789٫45");

        var pctfmt = new NumFmt({locale:"ar-YE", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(),  "{n}٪؜"); //// CLDR 34 change
        test.equal(li.getNegativePercentageFormat(), '؜-{n}٪؜'); //// CLDR 34 change
        test.equal(pctfmt.format(34), "34٪؜"); //// CLDR 34 change

        var curfmt = new NumFmt({locale: "ar-YE", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "؜-{n} {s}");
        test.equal(curfmt.format(57.05), '57 ﷼'); //YER
        test.done();
    },
    testNumFmt_en_ET: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-ET");
        var fmt = new NumFmt({locale:"en-ET", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-ET", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-ET", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "Br57.05"); //ETB
        test.done();
    },
    testNumFmt_en_GM: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-GM");
        var fmt = new NumFmt({locale:"en-GM", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-GM", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-GM", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "D57.05"); //GMD
        test.done();
    },
    testNumFmt_en_LR: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-LR");
        var fmt = new NumFmt({locale:"en-LR", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-LR", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-LR", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); //LRD
        test.done();
    },
    testNumFmt_en_PK: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-PK");
        var fmt = new NumFmt({locale:"en-PK", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-PK", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-PK", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "Rs57.05"); //PKR
        test.done();
    },
    testNumFmt_en_RW: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-RW");
        var fmt = new NumFmt({locale:"en-RW", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-RW", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-RW", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "RF57"); //RWF
        test.done();
    },
    testNumFmt_en_SD: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-SD");
        var fmt = new NumFmt({locale:"en-SD", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-SD", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-SD", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "£57.05"); //SDG
        test.done();
    },
    testNumFmt_en_SL: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-SL");
        var fmt = new NumFmt({locale:"en-SL", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-SL", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-SL", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "Le57"); //SLL
        test.done();
    },
    testNumFmt_en_TZ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("en-TZ");
        var fmt = new NumFmt({locale:"en-TZ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"en-TZ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "en-TZ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "Sh57.05"); //TZS
        test.done();
    },
    testNumFmt_es_CR: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-CR");
        var fmt = new NumFmt({locale:"es-CR", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"es-CR", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-CR", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "₡57,05"); //CRC
        test.done();
    },
    testNumFmt_es_GQ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-GQ");
        var fmt = new NumFmt({locale:"es-GQ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"es-GQ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-GQ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "Fr57"); //XAF
        test.done();
    },
    testNumFmt_es_PH: function(test) {
        test.expect(9);
        var li = new LocaleInfo("es-PH");
        var fmt = new NumFmt({locale:"es-PH", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"es-PH", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "es-PH", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 ₱");  //PHP
        test.done();
    },
    testNumFmt_fr_BF: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-BF");
        var fmt = new NumFmt({locale:"fr-BF", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-BF", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-BF", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 Fr"); //XOF
        test.done();
    },
    testNumFmt_fr_BJ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-BJ");
        var fmt = new NumFmt({locale:"fr-BJ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-BJ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-BJ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 Fr"); //XOF
        test.done();
    },
    testNumFmt_fr_CD: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-CD");
        var fmt = new NumFmt({locale:"fr-CD", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-CD", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-CD", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 Fr");//CDF
        test.done();
    },
    testNumFmt_fr_CF: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-CF");
        var fmt = new NumFmt({locale:"fr-CF", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-CF", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-CF", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 Fr"); //XAF
        test.done();
    },
    testNumFmt_fr_CG: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-CG");
        var fmt = new NumFmt({locale:"fr-CG", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-CG", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-CG", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 Fr");//XAF
        test.done();
    },
    testNumFmt_fr_CI: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-CI");
        var fmt = new NumFmt({locale:"fr-CI", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-CI", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-CI", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 Fr");//XOF
        test.done();
    },
    testNumFmt_fr_CM: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-CM");
        var fmt = new NumFmt({locale:"fr-CM", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-CM", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-CM", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 Fr"); //XAF
        test.done();
    },
    testNumFmt_fr_GQ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-GQ");
        var fmt = new NumFmt({locale:"fr-GQ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-GQ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-GQ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 Fr"); //XAF
        test.done();
    },
    testNumFmt_fr_DJ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-DJ");
        var fmt = new NumFmt({locale:"fr-DJ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-DJ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-DJ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 Fr"); //DJF
        test.done();
    },
    testNumFmt_fr_DZ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-DZ");
        var fmt = new NumFmt({locale:"fr-DZ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-DZ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-DZ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 د.ج"); //DZD
        test.done();
    },
    testNumFmt_fr_GA: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-GA");
        var fmt = new NumFmt({locale:"fr-GA", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-GA", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-GA", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 Fr");//XAF
        test.done();
    },
    testNumFmt_fr_GN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-GN");
        var fmt = new NumFmt({locale:"fr-GN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-GN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-GN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 FG"); //GNF
        test.done();
    },
    testNumFmt_fr_LB: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-LB");
        var fmt = new NumFmt({locale:"fr-LB", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-LB", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-LB", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 L£"); //LBP
        test.done();
    },
    testNumFmt_fr_ML: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-ML");
        var fmt = new NumFmt({locale:"fr-ML", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-ML", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-ML", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 Fr"); //XOF
        test.done();
    },
    testNumFmt_fr_RW: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-RW");
        var fmt = new NumFmt({locale:"fr-RW", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-RW", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-RW", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 RF"); //RWF
        test.done();
    },
    testNumFmt_fr_SN: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-SN");
        var fmt = new NumFmt({locale:"fr-SN", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-SN", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-SN", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 Fr"); //XOF
        test.done();
    },
    testNumFmt_fr_TG: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-TG");
        var fmt = new NumFmt({locale:"fr-TG", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-TG", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-TG", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 Fr"); //XOF
        test.done();
    },
    testNumFmt_ms_SG: function(test) {
        test.expect(9);
        var li = new LocaleInfo("fr-SG");
        var fmt = new NumFmt({locale:"fr-SG", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ' ');
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"fr-SG", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "fr-SG", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 $"); //SGD
        test.done();
    },
    testNumFmt_pa_PK: function(test) {
        test.expect(9);
        var li = new LocaleInfo("pa-PK");
        var fmt = new NumFmt({locale:"pa-PK", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "12,34,56,789.45");

        var pctfmt = new NumFmt({locale:"pa-PK", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "pa-PK", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.equal(curfmt.format(57.05), "Rs 57.05"); //PKR
        test.done();
    },
    testNumFmt_pt_AO: function(test) {
        test.expect(9);
        var li = new LocaleInfo("pt-AO");
        var fmt = new NumFmt({locale:"pt-AO", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"pt-AO", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "pt-AO", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 Kz"); //AOA
        test.done();
    },
    testNumFmt_pt_GQ: function(test) {
        test.expect(9);
        var li = new LocaleInfo("pt-GQ");
        var fmt = new NumFmt({locale:"pt-GQ", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"pt-GQ", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "pt-GQ", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 Fr"); //XAF
        test.done();
    },
    testNumFmt_pt_CV: function(test) {
        test.expect(9);
        var li = new LocaleInfo("pt-CV");
        var fmt = new NumFmt({locale:"pt-CV", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"pt-CV", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "pt-CV", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 $"); //CVE
        test.done();
    },
    testNumFmt_ur_PK: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ur-PK");
        var fmt = new NumFmt({locale:"ur-PK", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"ur-PK", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), '‎-{n}%');
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "ur-PK", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, '‎-{s} {n}');
        test.equal(curfmt.format(57.05), 'Rs 57.05'); //PKR
        test.done();
    },
    testNumFmt_zh_Hans_SG: function(test) {
        test.expect(9);
        var li = new LocaleInfo("zh-Hans-SG");
        var fmt = new NumFmt({locale:"zh-Hans-SG", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"zh-Hans-SG", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "zh-Hans-SG", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "$57.05"); //SGD
        test.done();
    },
    testNumFmt_zh_Hans_MY: function(test) {
        test.expect(9);
        var li = new LocaleInfo("zh-Hans-MY");
        var fmt = new NumFmt({locale:"zh-Hans-MY", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"zh-Hans-MY", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "zh-Hans-MY", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s}{n}");
        test.equal(curfmt.format(57.05), "RM57.05"); //MYR
        test.done();
    },
    testNumFmt_ka_GE: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ka-GE");
        var fmt = new NumFmt({locale:"ka-GE", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"ka-GE", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "ka-GE", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 ₾"); //GEL
        test.done();
    },
    testNumFmt_be_BY: function(test) {
        test.expect(9);
        var li = new LocaleInfo("be-BY");
        var fmt = new NumFmt({locale:"be-BY", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"be-BY", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "be-BY", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 р."); //BYN
        test.done();
    },
    testNumFmt_lo_LA: function(test) {
        test.expect(9);
        var li = new LocaleInfo("lo-LA");
        var fmt = new NumFmt({locale:"lo-LA", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");
        var pctfmt = new NumFmt({locale:"lo-LA", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "lo-LA", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s}{n}");
        test.equal(li.getCurrencyFormats().commonNegative, "{s}-{n}");
        test.equal(curfmt.format(57.05), "₭57"); //LAK
        test.done();
    },
    testNumFmt_ky_KG: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ky-KG");
        var fmt = new NumFmt({locale:"ky-KG", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"ky-KG", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "ky-KG", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 лв"); //KGS
        test.done();
    },
    testNumFmt_ca_AD: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ca-AD");
        var fmt = new NumFmt({locale:"ca-AD", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"ca-AD", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");
        var curfmt = new NumFmt({locale: "ca-AD", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €"); //EUR
        test.done();
    },
    testNumFmt_ca_ES: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ca-ES");
        var fmt = new NumFmt({locale:"ca-ES", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");
        var pctfmt = new NumFmt({locale:"ca-ES", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "ca-ES", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €"); //EUR
        test.done();
    },
    testNumFmt_hy_AM: function(test) {
        test.expect(9);
        var li = new LocaleInfo("hy-AM");
        var fmt = new NumFmt({locale:"hy-AM", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), " ");
        test.equal(fmt.format(123456789.45), "123 456 789,45");

        var pctfmt = new NumFmt({locale:"hy-AM", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "hy-AM", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 դր.");
        test.done();
    },
    testNumFmt_gl_ES: function(test) {
        test.expect(9);
        var li = new LocaleInfo("gl-ES");
        var fmt = new NumFmt({locale:"gl-ES", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"gl-ES", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n} %");
        test.equal(li.getNegativePercentageFormat(), "-{n} %");
        test.equal(pctfmt.format(34), "34 %");

        var curfmt = new NumFmt({locale: "gl-ES", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57,05 €");
        test.done();
    },
    testNumFmt_eu_ES: function(test) {
        test.expect(9);
        var li = new LocaleInfo("eu-ES");
        var fmt = new NumFmt({locale:"eu-ES", type:"standard", useNative:false});

        test.equal(li.getDecimalSeparator(), ",");
        test.equal(li.getGroupingSeparator(), ".");
        test.equal(fmt.format(123456789.45), "123.456.789,45");

        var pctfmt = new NumFmt({locale:"eu-ES", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "% {n}");
        test.equal(li.getNegativePercentageFormat(), "−% {n}");
        test.equal(pctfmt.format(34), "% 34");

        var curfmt = new NumFmt({locale: "eu-ES", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "−{n} {s}");

        test.equal(curfmt.format(57.05), "57,05 €");

        test.done();
    },
    testNumFmt_ne_NP: function(test) {
        test.expect(9);
        var li = new LocaleInfo("ne-NP");
        var fmt = new NumFmt({locale:"ne-NP", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"ne-NP", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "ne-NP", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{s} {n}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{s} {n}");
        test.equal(curfmt.format(57.05), "Rs 57.05"); //NPR
        test.done();
    },
    testNumFmt_my_MM: function(test) {
        test.expect(9);
        var li = new LocaleInfo("my-MM");
        var fmt = new NumFmt({locale:"my-MM", type:"standard", useNative:false});
        test.equal(li.getDecimalSeparator(), ".");
        test.equal(li.getGroupingSeparator(), ",");
        test.equal(fmt.format(123456789.45), "123,456,789.45");

        var pctfmt = new NumFmt({locale:"my-MM", type:"percentage", useNative:false});
        test.equal(li.getPercentageFormat(), "{n}%");
        test.equal(li.getNegativePercentageFormat(), "-{n}%");
        test.equal(pctfmt.format(34), "34%");

        var curfmt = new NumFmt({locale: "my-MM", type: "currency", useNative:false, currency:li.getCurrency()});
        test.equal(li.getCurrencyFormats().common, "{n} {s}");
        test.equal(li.getCurrencyFormats().commonNegative, "-{n} {s}");
        test.equal(curfmt.format(57.05), "57 K");
        test.done();
    }
}