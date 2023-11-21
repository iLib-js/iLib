/*
 * testcollation_ru.js - test the Collator object in Russian
 *
 * Copyright © 2015, 2017-2018, JEDLSoft
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
if (typeof(Collator) === "undefined") {
    var Collator = require("../../lib/Collator.js");
}

module.exports.testcollation_ru = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testJSCollatorQuat_ru: function(test) {
        test.expect(32);
        var col = new Collator({
            locale: "ru-RU",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // А А́ а а́ Ӑ Ӑ ӑ ӑ Ӓ Ӓ ӓ ӓ Б б В в Г г Ґ ґ Ғ ғ Ӻ ӻ Ҕ ҕ Ӷ ӷ Ѓ Ѓ ѓ ѓ
        test.ok("А < А́", col.compare("А", "А́") < 0);
        test.ok("А́ < а", col.compare("А́", "а") < 0);
        test.ok("а < а́", col.compare("а", "а́") < 0);
        test.ok("а́ < Ӑ", col.compare("а́", "Ӑ") < 0);
        test.ok("Ӑ < Ӑ", col.compare("Ӑ", "Ӑ") < 0);
        test.ok("Ӑ < ӑ", col.compare("Ӑ", "ӑ") < 0);
        test.ok("ӑ < ӑ", col.compare("ӑ", "ӑ") < 0);
        test.ok("ӑ < Ӓ", col.compare("ӑ", "Ӓ") < 0);
        test.ok("Ӓ < Ӓ", col.compare("Ӓ", "Ӓ") < 0);
        test.ok("Ӓ < ӓ", col.compare("Ӓ", "ӓ") < 0);
        test.ok("ӓ < ӓ", col.compare("ӓ", "ӓ") < 0);
        test.ok("ӓ < Б", col.compare("ӓ", "Б") < 0);
        test.ok("Б < б", col.compare("Б", "б") < 0);
        test.ok("б < В", col.compare("б", "В") < 0);
        test.ok("В < в", col.compare("В", "в") < 0);
        test.ok("в < Г", col.compare("в", "Г") < 0);
        test.ok("Г < г", col.compare("Г", "г") < 0);
        test.ok("г < Ґ", col.compare("г", "Ґ") < 0);
        test.ok("Ґ < ґ", col.compare("Ґ", "ґ") < 0);
        test.ok("ґ < Ғ", col.compare("ґ", "Ғ") < 0);
        test.ok("Ғ < ғ", col.compare("Ғ", "ғ") < 0);
        test.ok("ғ < Ӻ", col.compare("ғ", "Ӻ") < 0);
        test.ok("Ӻ < ӻ", col.compare("Ӻ", "ӻ") < 0);
        test.ok("ӻ < Ҕ", col.compare("ӻ", "Ҕ") < 0);
        test.ok("Ҕ < ҕ", col.compare("Ҕ", "ҕ") < 0);
        test.ok("ҕ < Ӷ", col.compare("ҕ", "Ӷ") < 0);
        test.ok("Ӷ < ӷ", col.compare("Ӷ", "ӷ") < 0);
        test.ok("ӷ < Ѓ", col.compare("ӷ", "Ѓ") < 0);
        test.ok("Ѓ < Ѓ", col.compare("Ѓ", "Ѓ") < 0);
        test.ok("Ѓ < ѓ", col.compare("Ѓ", "ѓ") < 0);
        test.ok("ѓ < ѓ", col.compare("ѓ", "ѓ") < 0);
        test.done();
    },
    testJSCollatorTer_ru: function(test) {
        test.expect(32);
        var col = new Collator({
            locale: "ru-RU",
            useNative: false,
            sensitivity: "tertiary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // А А́ а а́ Ӑ Ӑ ӑ ӑ Ӓ Ӓ ӓ ӓ Б б В в Г г Ґ ґ Ғ ғ Ӻ ӻ Ҕ ҕ Ӷ ӷ Ѓ Ѓ ѓ ѓ
        test.ok("А = А́", col.compare("А", "А́") === 0);
        test.ok("А́ < а", col.compare("А́", "а") < 0);
        test.ok("а = а́", col.compare("а", "а́") === 0);
        test.ok("а́ < Ӑ", col.compare("а́", "Ӑ") < 0);
        test.ok("Ӑ = Ӑ", col.compare("Ӑ", "Ӑ") === 0);
        test.ok("Ӑ < ӑ", col.compare("Ӑ", "ӑ") < 0);
        test.ok("ӑ = ӑ", col.compare("ӑ", "ӑ") === 0);
        test.ok("ӑ < Ӓ", col.compare("ӑ", "Ӓ") < 0);
        test.ok("Ӓ = Ӓ", col.compare("Ӓ", "Ӓ") === 0);
        test.ok("Ӓ < ӓ", col.compare("Ӓ", "ӓ") < 0);
        test.ok("ӓ = ӓ", col.compare("ӓ", "ӓ") === 0);
        test.ok("ӓ < Б", col.compare("ӓ", "Б") < 0);
        test.ok("Б < б", col.compare("Б", "б") < 0);
        test.ok("б < В", col.compare("б", "В") < 0);
        test.ok("В < в", col.compare("В", "в") < 0);
        test.ok("в < Г", col.compare("в", "Г") < 0);
        test.ok("Г < г", col.compare("Г", "г") < 0);
        test.ok("г < Ґ", col.compare("г", "Ґ") < 0);
        test.ok("Ґ < ґ", col.compare("Ґ", "ґ") < 0);
        test.ok("ґ < Ғ", col.compare("ґ", "Ғ") < 0);
        test.ok("Ғ < ғ", col.compare("Ғ", "ғ") < 0);
        test.ok("ғ < Ӻ", col.compare("ғ", "Ӻ") < 0);
        test.ok("Ӻ < ӻ", col.compare("Ӻ", "ӻ") < 0);
        test.ok("ӻ < Ҕ", col.compare("ӻ", "Ҕ") < 0);
        test.ok("Ҕ < ҕ", col.compare("Ҕ", "ҕ") < 0);
        test.ok("ҕ < Ӷ", col.compare("ҕ", "Ӷ") < 0);
        test.ok("Ӷ < ӷ", col.compare("Ӷ", "ӷ") < 0);
        test.ok("ӷ < Ѓ", col.compare("ӷ", "Ѓ") < 0);
        test.ok("Ѓ = Ѓ", col.compare("Ѓ", "Ѓ") === 0);
        test.ok("Ѓ < ѓ", col.compare("Ѓ", "ѓ") < 0);
        test.ok("ѓ = ѓ", col.compare("ѓ", "ѓ") === 0);
        test.done();
    },
    testJSCollatorSec_ru: function(test) {
        test.expect(32);
        var col = new Collator({
            locale: "ru-RU",
            useNative: false,
            sensitivity: "secondary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // А А́ а а́ Ӑ Ӑ ӑ ӑ Ӓ Ӓ ӓ ӓ Б б В в Г г Ґ ґ Ғ ғ Ӻ ӻ Ҕ ҕ Ӷ ӷ Ѓ Ѓ ѓ ѓ
        test.ok("А = А́", col.compare("А", "А́") === 0);
        test.ok("А́ = а", col.compare("А́", "а") === 0);
        test.ok("а = а́", col.compare("а", "а́") === 0);
        test.ok("а́ < Ӑ", col.compare("а́", "Ӑ") < 0);
        test.ok("Ӑ = Ӑ", col.compare("Ӑ", "Ӑ") === 0);
        test.ok("Ӑ = ӑ", col.compare("Ӑ", "ӑ") === 0);
        test.ok("ӑ = ӑ", col.compare("ӑ", "ӑ") === 0);
        test.ok("ӑ < Ӓ", col.compare("ӑ", "Ӓ") < 0);
        test.ok("Ӓ = Ӓ", col.compare("Ӓ", "Ӓ") === 0);
        test.ok("Ӓ = ӓ", col.compare("Ӓ", "ӓ") === 0);
        test.ok("ӓ = ӓ", col.compare("ӓ", "ӓ") === 0);
        test.ok("ӓ < Б", col.compare("ӓ", "Б") < 0);
        test.ok("Б = б", col.compare("Б", "б") === 0);
        test.ok("б < В", col.compare("б", "В") < 0);
        test.ok("В = в", col.compare("В", "в") === 0);
        test.ok("в < Г", col.compare("в", "Г") < 0);
        test.ok("Г = г", col.compare("Г", "г") === 0);
        test.ok("г < Ґ", col.compare("г", "Ґ") < 0);
        test.ok("Ґ = ґ", col.compare("Ґ", "ґ") === 0);
        test.ok("ґ < Ғ", col.compare("ґ", "Ғ") < 0);
        test.ok("Ғ = ғ", col.compare("Ғ", "ғ") === 0);
        test.ok("ғ < Ӻ", col.compare("ғ", "Ӻ") < 0);
        test.ok("Ӻ = ӻ", col.compare("Ӻ", "ӻ") === 0);
        test.ok("ӻ < Ҕ", col.compare("ӻ", "Ҕ") < 0);
        test.ok("Ҕ = ҕ", col.compare("Ҕ", "ҕ") === 0);
        test.ok("ҕ < Ӷ", col.compare("ҕ", "Ӷ") < 0);
        test.ok("Ӷ = ӷ", col.compare("Ӷ", "ӷ") === 0);
        test.ok("ӷ < Ѓ", col.compare("ӷ", "Ѓ") < 0);
        test.ok("Ѓ = Ѓ", col.compare("Ѓ", "Ѓ") === 0);
        test.ok("Ѓ = ѓ", col.compare("Ѓ", "ѓ") === 0);
        test.ok("ѓ = ѓ", col.compare("ѓ", "ѓ") === 0);
        test.done();
    },
    testJSCollatorPri_ru: function(test) {
        test.expect(32);
        var col = new Collator({
            locale: "ru-RU",
            useNative: false,
            sensitivity: "primary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // А А́ а а́ Ӑ Ӑ ӑ ӑ Ӓ Ӓ ӓ ӓ Б б В в Г г Ґ ґ Ғ ғ Ӻ ӻ Ҕ ҕ Ӷ ӷ Ѓ Ѓ ѓ ѓ
        test.ok("А = А́", col.compare("А", "А́") === 0);
        test.ok("А́ = а", col.compare("А́", "а") === 0);
        test.ok("а = а́", col.compare("а", "а́") === 0);
        test.ok("а́ = Ӑ", col.compare("а́", "Ӑ") === 0);
        test.ok("Ӑ = Ӑ", col.compare("Ӑ", "Ӑ") === 0);
        test.ok("Ӑ = ӑ", col.compare("Ӑ", "ӑ") === 0);
        test.ok("ӑ = ӑ", col.compare("ӑ", "ӑ") === 0);
        test.ok("ӑ = Ӓ", col.compare("ӑ", "Ӓ") === 0);
        test.ok("Ӓ = Ӓ", col.compare("Ӓ", "Ӓ") === 0);
        test.ok("Ӓ = ӓ", col.compare("Ӓ", "ӓ") === 0);
        test.ok("ӓ = ӓ", col.compare("ӓ", "ӓ") === 0);
        test.ok("ӓ < Б", col.compare("ӓ", "Б") < 0);
        test.ok("Б = б", col.compare("Б", "б") === 0);
        test.ok("б < В", col.compare("б", "В") < 0);
        test.ok("В = в", col.compare("В", "в") === 0);
        test.ok("в < Г", col.compare("в", "Г") < 0);
        test.ok("Г = г", col.compare("Г", "г") === 0);
        test.ok("г = Ґ", col.compare("г", "Ґ") === 0);
        test.ok("Ґ = ґ", col.compare("Ґ", "ґ") === 0);
        test.ok("ґ = Ғ", col.compare("ґ", "Ғ") === 0);
        test.ok("Ғ = ғ", col.compare("Ғ", "ғ") === 0);
        test.ok("ғ = Ӻ", col.compare("ғ", "Ӻ") === 0);
        test.ok("Ӻ = ӻ", col.compare("Ӻ", "ӻ") === 0);
        test.ok("ӻ = Ҕ", col.compare("ӻ", "Ҕ") === 0);
        test.ok("Ҕ = ҕ", col.compare("Ҕ", "ҕ") === 0);
        test.ok("ҕ = Ӷ", col.compare("ҕ", "Ӷ") === 0);
        test.ok("Ӷ = ӷ", col.compare("Ӷ", "ӷ") === 0);
        test.ok("ӷ = Ѓ", col.compare("ӷ", "Ѓ") === 0);
        test.ok("Ѓ = Ѓ", col.compare("Ѓ", "Ѓ") === 0);
        test.ok("Ѓ = ѓ", col.compare("Ѓ", "ѓ") === 0);
        test.ok("ѓ = ѓ", col.compare("ѓ", "ѓ") === 0);
        test.done();
    },
    testJSCollatorQuatSort_ru: function(test) {
        test.expect(32);
        var col = new Collator({
            locale: "ru-RU",
            useNative: false,
            sensitivity: "quaternary",
            usage: "sort"
        });

        test.ok(typeof(col) !== "undefined");

        // А А́ а а́ Ӑ Ӑ ӑ ӑ Ӓ Ӓ ӓ ӓ Б б В в Г г Ґ ґ Ғ ғ Ӻ ӻ Ҕ ҕ Ӷ ӷ Ѓ Ѓ ѓ ѓ
        test.ok("А < А́", col.compare("А", "А́") < 0);
        test.ok("А́ < а", col.compare("А́", "а") < 0);
        test.ok("а < а́", col.compare("а", "а́") < 0);
        test.ok("а́ < Ӑ", col.compare("а́", "Ӑ") < 0);
        test.ok("Ӑ < Ӑ", col.compare("Ӑ", "Ӑ") < 0);
        test.ok("Ӑ < ӑ", col.compare("Ӑ", "ӑ") < 0);
        test.ok("ӑ < ӑ", col.compare("ӑ", "ӑ") < 0);
        test.ok("ӑ < Ӓ", col.compare("ӑ", "Ӓ") < 0);
        test.ok("Ӓ < Ӓ", col.compare("Ӓ", "Ӓ") < 0);
        test.ok("Ӓ < ӓ", col.compare("Ӓ", "ӓ") < 0);
        test.ok("ӓ < ӓ", col.compare("ӓ", "ӓ") < 0);
        test.ok("ӓ < Б", col.compare("ӓ", "Б") < 0);
        test.ok("Б < б", col.compare("Б", "б") < 0);
        test.ok("б < В", col.compare("б", "В") < 0);
        test.ok("В < в", col.compare("В", "в") < 0);
        test.ok("в < Г", col.compare("в", "Г") < 0);
        test.ok("Г < г", col.compare("Г", "г") < 0);
        test.ok("г < Ґ", col.compare("г", "Ґ") < 0);
        test.ok("Ґ < ґ", col.compare("Ґ", "ґ") < 0);
        test.ok("ґ < Ғ", col.compare("ґ", "Ғ") < 0);
        test.ok("Ғ < ғ", col.compare("Ғ", "ғ") < 0);
        test.ok("ғ < Ӻ", col.compare("ғ", "Ӻ") < 0);
        test.ok("Ӻ < ӻ", col.compare("Ӻ", "ӻ") < 0);
        test.ok("ӻ < Ҕ", col.compare("ӻ", "Ҕ") < 0);
        test.ok("Ҕ < ҕ", col.compare("Ҕ", "ҕ") < 0);
        test.ok("ҕ < Ӷ", col.compare("ҕ", "Ӷ") < 0);
        test.ok("Ӷ < ӷ", col.compare("Ӷ", "ӷ") < 0);
        test.ok("ӷ < Ѓ", col.compare("ӷ", "Ѓ") < 0);
        test.ok("Ѓ < Ѓ", col.compare("Ѓ", "Ѓ") < 0);
        test.ok("Ѓ < ѓ", col.compare("Ѓ", "ѓ") < 0);
        test.ok("ѓ < ѓ", col.compare("ѓ", "ѓ") < 0);
        test.done();
    },
    testJSCollatorTerSort_ru: function(test) {
        test.expect(32);
        var col = new Collator({
            locale: "ru-RU",
            useNative: false,
            sensitivity: "tertiary",
            usage: "sort"
        });

        test.ok(typeof(col) !== "undefined");

        // А А́ а а́ Ӑ Ӑ ӑ ӑ Ӓ Ӓ ӓ ӓ Б б В в Г г Ґ ґ Ғ ғ Ӻ ӻ Ҕ ҕ Ӷ ӷ Ѓ Ѓ ѓ ѓ
        test.ok("А < А́", col.compare("А", "А́") < 0);
        test.ok("А́ < а", col.compare("А́", "а") < 0);
        test.ok("а < а́", col.compare("а", "а́") < 0);
        test.ok("а́ < Ӑ", col.compare("а́", "Ӑ") < 0);
        test.ok("Ӑ < Ӑ", col.compare("Ӑ", "Ӑ") < 0);
        test.ok("Ӑ < ӑ", col.compare("Ӑ", "ӑ") < 0);
        test.ok("ӑ < ӑ", col.compare("ӑ", "ӑ") < 0);
        test.ok("ӑ < Ӓ", col.compare("ӑ", "Ӓ") < 0);
        test.ok("Ӓ < Ӓ", col.compare("Ӓ", "Ӓ") < 0);
        test.ok("Ӓ < ӓ", col.compare("Ӓ", "ӓ") < 0);
        test.ok("ӓ < ӓ", col.compare("ӓ", "ӓ") < 0);
        test.ok("ӓ < Б", col.compare("ӓ", "Б") < 0);
        test.ok("Б < б", col.compare("Б", "б") < 0);
        test.ok("б < В", col.compare("б", "В") < 0);
        test.ok("В < в", col.compare("В", "в") < 0);
        test.ok("в < Г", col.compare("в", "Г") < 0);
        test.ok("Г < г", col.compare("Г", "г") < 0);
        test.ok("г < Ґ", col.compare("г", "Ґ") < 0);
        test.ok("Ґ < ґ", col.compare("Ґ", "ґ") < 0);
        test.ok("ґ < Ғ", col.compare("ґ", "Ғ") < 0);
        test.ok("Ғ < ғ", col.compare("Ғ", "ғ") < 0);
        test.ok("ғ < Ӻ", col.compare("ғ", "Ӻ") < 0);
        test.ok("Ӻ < ӻ", col.compare("Ӻ", "ӻ") < 0);
        test.ok("ӻ < Ҕ", col.compare("ӻ", "Ҕ") < 0);
        test.ok("Ҕ < ҕ", col.compare("Ҕ", "ҕ") < 0);
        test.ok("ҕ < Ӷ", col.compare("ҕ", "Ӷ") < 0);
        test.ok("Ӷ < ӷ", col.compare("Ӷ", "ӷ") < 0);
        test.ok("ӷ < Ѓ", col.compare("ӷ", "Ѓ") < 0);
        test.ok("Ѓ < Ѓ", col.compare("Ѓ", "Ѓ") < 0);
        test.ok("Ѓ < ѓ", col.compare("Ѓ", "ѓ") < 0);
        test.ok("ѓ < ѓ", col.compare("ѓ", "ѓ") < 0);
        test.done();
    },
    testJSCollatorSecSort_ru: function(test) {
        test.expect(32);
        var col = new Collator({
            locale: "ru-RU",
            useNative: false,
            sensitivity: "secondary",
            usage: "sort"
        });

        test.ok(typeof(col) !== "undefined");

        // А А́ а а́ Ӑ Ӑ ӑ ӑ Ӓ Ӓ ӓ ӓ Б б В в Г г Ґ ґ Ғ ғ Ӻ ӻ Ҕ ҕ Ӷ ӷ Ѓ Ѓ ѓ ѓ
        test.ok("А < А́", col.compare("А", "А́") < 0);
        test.ok("А́ < а", col.compare("А́", "а") < 0);
        test.ok("а < а́", col.compare("а", "а́") < 0);
        test.ok("а́ < Ӑ", col.compare("а́", "Ӑ") < 0);
        test.ok("Ӑ < Ӑ", col.compare("Ӑ", "Ӑ") < 0);
        test.ok("Ӑ < ӑ", col.compare("Ӑ", "ӑ") < 0);
        test.ok("ӑ < ӑ", col.compare("ӑ", "ӑ") < 0);
        test.ok("ӑ < Ӓ", col.compare("ӑ", "Ӓ") < 0);
        test.ok("Ӓ < Ӓ", col.compare("Ӓ", "Ӓ") < 0);
        test.ok("Ӓ < ӓ", col.compare("Ӓ", "ӓ") < 0);
        test.ok("ӓ < ӓ", col.compare("ӓ", "ӓ") < 0);
        test.ok("ӓ < Б", col.compare("ӓ", "Б") < 0);
        test.ok("Б < б", col.compare("Б", "б") < 0);
        test.ok("б < В", col.compare("б", "В") < 0);
        test.ok("В < в", col.compare("В", "в") < 0);
        test.ok("в < Г", col.compare("в", "Г") < 0);
        test.ok("Г < г", col.compare("Г", "г") < 0);
        test.ok("г < Ґ", col.compare("г", "Ґ") < 0);
        test.ok("Ґ < ґ", col.compare("Ґ", "ґ") < 0);
        test.ok("ґ < Ғ", col.compare("ґ", "Ғ") < 0);
        test.ok("Ғ < ғ", col.compare("Ғ", "ғ") < 0);
        test.ok("ғ < Ӻ", col.compare("ғ", "Ӻ") < 0);
        test.ok("Ӻ < ӻ", col.compare("Ӻ", "ӻ") < 0);
        test.ok("ӻ < Ҕ", col.compare("ӻ", "Ҕ") < 0);
        test.ok("Ҕ < ҕ", col.compare("Ҕ", "ҕ") < 0);
        test.ok("ҕ < Ӷ", col.compare("ҕ", "Ӷ") < 0);
        test.ok("Ӷ < ӷ", col.compare("Ӷ", "ӷ") < 0);
        test.ok("ӷ < Ѓ", col.compare("ӷ", "Ѓ") < 0);
        test.ok("Ѓ < Ѓ", col.compare("Ѓ", "Ѓ") < 0);
        test.ok("Ѓ < ѓ", col.compare("Ѓ", "ѓ") < 0);
        test.ok("ѓ < ѓ", col.compare("ѓ", "ѓ") < 0);
        test.done();
    },
    testJSCollatorPriSort_ru: function(test) {
        test.expect(32);
        var col = new Collator({
            locale: "ru-RU",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });

        test.ok(typeof(col) !== "undefined");

        // А А́ а а́ Ӑ Ӑ ӑ ӑ Ӓ Ӓ ӓ ӓ Б б В в Г г Ґ ґ Ғ ғ Ӻ ӻ Ҕ ҕ Ӷ ӷ Ѓ Ѓ ѓ ѓ
        test.ok("А < А́", col.compare("А", "А́") < 0);
        test.ok("А́ < а", col.compare("А́", "а") < 0);
        test.ok("а < а́", col.compare("а", "а́") < 0);
        test.ok("а́ < Ӑ", col.compare("а́", "Ӑ") < 0);
        test.ok("Ӑ < Ӑ", col.compare("Ӑ", "Ӑ") < 0);
        test.ok("Ӑ < ӑ", col.compare("Ӑ", "ӑ") < 0);
        test.ok("ӑ < ӑ", col.compare("ӑ", "ӑ") < 0);
        test.ok("ӑ < Ӓ", col.compare("ӑ", "Ӓ") < 0);
        test.ok("Ӓ < Ӓ", col.compare("Ӓ", "Ӓ") < 0);
        test.ok("Ӓ < ӓ", col.compare("Ӓ", "ӓ") < 0);
        test.ok("ӓ < ӓ", col.compare("ӓ", "ӓ") < 0);
        test.ok("ӓ < Б", col.compare("ӓ", "Б") < 0);
        test.ok("Б < б", col.compare("Б", "б") < 0);
        test.ok("б < В", col.compare("б", "В") < 0);
        test.ok("В < в", col.compare("В", "в") < 0);
        test.ok("в < Г", col.compare("в", "Г") < 0);
        test.ok("Г < г", col.compare("Г", "г") < 0);
        test.ok("г < Ґ", col.compare("г", "Ґ") < 0);
        test.ok("Ґ < ґ", col.compare("Ґ", "ґ") < 0);
        test.ok("ґ < Ғ", col.compare("ґ", "Ғ") < 0);
        test.ok("Ғ < ғ", col.compare("Ғ", "ғ") < 0);
        test.ok("ғ < Ӻ", col.compare("ғ", "Ӻ") < 0);
        test.ok("Ӻ < ӻ", col.compare("Ӻ", "ӻ") < 0);
        test.ok("ӻ < Ҕ", col.compare("ӻ", "Ҕ") < 0);
        test.ok("Ҕ < ҕ", col.compare("Ҕ", "ҕ") < 0);
        test.ok("ҕ < Ӷ", col.compare("ҕ", "Ӷ") < 0);
        test.ok("Ӷ < ӷ", col.compare("Ӷ", "ӷ") < 0);
        test.ok("ӷ < Ѓ", col.compare("ӷ", "Ѓ") < 0);
        test.ok("Ѓ < Ѓ", col.compare("Ѓ", "Ѓ") < 0);
        test.ok("Ѓ < ѓ", col.compare("Ѓ", "ѓ") < 0);
        test.ok("ѓ < ѓ", col.compare("ѓ", "ѓ") < 0);
        test.done();
    },
    testCollatorCase_ru: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ru-RU",
            useNative: false,
            sensitivity: "case",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");

        var input = [
            "У",
            "Ё",
            "ГУ",
            "Й",
            "Е́",
            "А́А",
            "Ѐ",
            "Ю",
            "аа",
            "ё",
            "Ꙕ",
            "И",
            "Е",
            "Гж",
            "е",
            "Ў",
            "Ё"
        ];

        input.sort(col.getComparator());

        var expected = [
            "А́А",
            "аа",
            "Гж",
            "ГУ",
            "Е",
            "Е́",
            "е",
            "Ѐ",
            "Ё",
            "Ё",
            "ё",
            "И",
            "Й",
            "У",
            "Ў",
            "Ю",
            "Ꙕ"
        ];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorPrimary_ru: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ru-RU",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");

        var input = [
            "У",
            "Ё",
            "ГУ",
            "Й",
            "Е́",
            "А́А",
            "Ѐ",
            "Ю",
            "аа",
            "ё",
            "Ꙕ",
            "И",
            "Е",
            "Гж",
            "е",
            "Ў",
            "Ё"
        ];

        input.sort(col.getComparator());

        var expected = [
            "А́А",
            "аа",
            "Гж",
            "ГУ",
            "Е",
            "Е́",
            "е",
            "Ѐ",
            "Ё",
            "Ё",
            "ё",
            "И",
            "Й",
            "У",
            "Ў",
            "Ю",
            "Ꙕ"
        ];

        test.deepEqual(input, expected);
        test.done();
    },
    testCollatorIgnoreStressMarks_ru: function(test) {
        test.expect(9);
        var col = new Collator({
            locale: "ru-RU",
            useNative: false,
            sensitivity: "case",
            usage: "search"
        });
        test.ok(typeof(col) !== "undefined");

        var comp = col.getComparator();

        // ignore stress marks
        test.equal(comp("за́мок", "замо́к"), 0);
        test.equal(comp("сто́ящий", "стоя́щий"), 0);
        test.equal(comp("чудно́", "чу́дно"), 0);
        test.equal(comp("молоде́ц", "мо́лодец"), 0);
        test.equal(comp("узна́ю", "узнаю́"), 0);
        test.equal(comp("отреза́ть", "отре́зать"), 0);
        test.equal(comp("Ты́ съел печенье?", "Ты съе́л печенье?"), 0);

        test.equal(comp("ЗА́МОК", "ЗАМО́К"), 0);
        test.done();
    },
    testJSCollatorQuatLatin_ru: function(test) {
        test.expect(18);
        var col = new Collator({
            locale: "ru-RU",
            useNative: false,
            sensitivity: "quaternary",
            usage: "search"
        });

        test.ok(typeof(col) !== "undefined");

        // all latin letters
        test.ok("A < a", col.compare("A", "a") < 0);
        test.ok("a < B", col.compare("a", "B") < 0);
        test.ok("B < b", col.compare("B", "b") < 0);
        test.ok("b < C", col.compare("b", "C") < 0);
        test.ok("C < c", col.compare("C", "c") < 0);
        test.ok("c < D", col.compare("c", "D") < 0);
        test.ok("D < d", col.compare("D", "d") < 0);
        test.ok("d < E", col.compare("d", "E") < 0);
        test.ok("E < e", col.compare("E", "e") < 0);
        test.ok("e < F", col.compare("e", "F") < 0);
        test.ok("F < f", col.compare("F", "f") < 0);
        test.ok("f < G", col.compare("f", "G") < 0);
        test.ok("G < g", col.compare("G", "g") < 0);
        test.ok("g < H", col.compare("g", "H") < 0);
        test.ok("H < h", col.compare("H", "h") < 0);
        test.ok("h < I", col.compare("h", "I") < 0);
        test.ok("I < i", col.compare("I", "i") < 0);
        test.done();
    },
    testCollatorPrimaryMixed_ru: function(test) {
        test.expect(2);
        var col = new Collator({
            locale: "ru-RU",
            useNative: false,
            sensitivity: "primary",
            usage: "sort"
        });
        test.ok(typeof(col) !== "undefined");

        var input = [
            "У",
            "Ё",
            "ГУ",
            "banana",
            "Й",
            "Е́",
            "А́А",
            "Ѐ",
            "peach",
            "apple",
            "Ю",
            "аа",
            "ё",
            "Ꙕ",
            "И",
            "Е",
            "Гж",
            "orange",
            "е",
            "Ў",
            "raspberry",
            "Ё"
        ];

        input.sort(col.getComparator());

        // Latin letters sort before the Cyrillic ones

        var expected = [
            "apple",
            "banana",
            "orange",
            "peach",
            "raspberry",
            "А́А",
            "аа",
            "Гж",
            "ГУ",
            "Е",
            "Е́",
            "е",
            "Ѐ",
            "Ё",
            "Ё",
            "ё",
            "И",
            "Й",
            "У",
            "Ў",
            "Ю",
            "Ꙕ"
        ];

        test.deepEqual(input, expected);
        test.done();
    }
};