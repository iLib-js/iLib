/*
 * testcountry.js - test the country routines
 *
 * Copyright © 2017, 2020 JEDLSoft
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
    testCountryLocale5: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "ko-KR"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("SZ"), "에스와티니");
        test.equal(ctry.getCode("에스와티니"), "SZ");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "ko-KR");
        test.done();
    },
    testCountryLocale6: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "af-NA"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("MK"), "Noord-Macedonië");
        test.equal(ctry.getCode("Noord-Macedonië"), "MK");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "af-NA");
        test.done();
    },
    testCountryLocale7: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "as-IN"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("SG"),"ছিংগাপুৰ" );
        test.equal(ctry.getCode("ছিংগাপুৰ"), "SG");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "as-IN");
        test.done();
    },
    testCountryLocale8: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "en-AU"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("MO"),"Macao SAR China" );
        test.equal(ctry.getCode("Macao SAR China"), "MO");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "en-AU");
        test.done();
    },
    testCountryLocale9: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "be-BY"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("MO"),"Макаа, САР (Кітай)" );
        test.equal(ctry.getCode("Макаа, САР (Кітай)"), "MO");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "be-BY");
        test.done();
    },
    testCountryLocale_lo_LA: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "lo-LA"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("MO"),"ມາກາວ ເຂດປົກຄອງພິເສດ ຈີນ" );
        test.equal(ctry.getCode("ມາກາວ ເຂດປົກຄອງພິເສດ ຈີນ"), "MO");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "lo-LA");
        test.done();
    },
    testCountryLocale_lo_LA2: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "lo-LA"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("KR"),"ເກົາຫລີໃຕ້" );
        test.equal(ctry.getCode("ເກົາຫລີໃຕ້"), "KR");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "lo-LA");
        test.done();
    },
    
    testCountryLocale_ky_KG: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "ky-KG"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("CH"),"Швейцария" );
        test.equal(ctry.getCode("Швейцария"), "CH");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "ky-KG");
        test.done();
    },
    testCountryLocale_ky_KG2: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "ky-KG"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("KR"),"Түштүк Корея" );
        test.equal(ctry.getCode("Түштүк Корея"), "KR");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "ky-KG");
        test.done();
    },
    testCountryLocale_ca_AD: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "ca-AD"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("MO"),"Macau (RAE Xina)");
        test.equal(ctry.getCode("Macau (RAE Xina)"), "MO");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "ca-AD");
        test.done();
    },
    testCountryLocale_ca_AD2: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "ca-AD"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("KR"),"Corea del Sud");
        test.equal(ctry.getCode("Corea del Sud"), "KR");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "ca-AD");
        test.done();
    },
    testCountryLocalehy_AM: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "hy-AM"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("MO"), "Չինաստանի Մակաո ՀՎՇ");
        test.equal(ctry.getCode("Չինաստանի Մակաո ՀՎՇ"), "MO");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "hy-AM");
        test.done();
    },
    testCountryLocalehy_AM2: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "hy-AM"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("KR"), 'Հարավային Կորեա');
        test.equal(ctry.getCode('Հարավային Կորեա'), "KR");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "hy-AM");
        test.done();
    },
    testCountryLocale10: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "eu-ES"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("MO"),"Macau Txinako AEB" );
        test.equal(ctry.getCode("Macau Txinako AEB"), "MO");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "eu-ES");
        test.done();
    },
    testCountryLocale_my_MM: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "my-MM"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("MO"),"မကာအို (တရုတ်ပြည်)");
        test.equal(ctry.getCode("မကာအို (တရုတ်ပြည်)"), "MO");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "my-MM");
        test.done();
    },
    testCountryLocale_my_MM2: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "my-MM"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("KR"),"တောင်ကိုရီးယား");
        test.equal(ctry.getCode('တောင်ကိုရီးယား'), "KR");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "my-MM");
        test.done();
    },
    
    testCountryLocale_ne_NP: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "ne-NP"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("MO"),"(मकाउ चिनियाँ विशेष प्रशासनिक क्षेत्र");
        test.equal(ctry.getCode("(मकाउ चिनियाँ विशेष प्रशासनिक क्षेत्र"), "MO");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "ne-NP");
        test.done();
    },
    testCountryLocale_ne_NP2: function(test) {
        test.expect(4);
        var ctry = new Country({
            locale: "ne-NP"
        });
        test.ok(ctry !== null);

        test.equal(ctry.getName("KR"), 'दक्षिण कोरिया');
        test.equal(ctry.getCode('दक्षिण कोरिया'), "KR");
        var locale = ctry.getLocale();
        test.equal(locale.toString(), "ne-NP");
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
