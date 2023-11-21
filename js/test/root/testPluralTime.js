/*
 * testPluralTime.js - compare the performance between iLib and Intl Object usage
 *
 * Copyright © 2022, JEDLSoft
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
if (typeof(NormString) === "undefined") {
    var NormString = require("../../lib/NormString.js");
}
if (typeof(Locale) === "undefined") {
    var Locale = require("../../lib/Locale.js");
}
if (typeof(IString) === "undefined") {
    var IString = require("../../lib/IString.js");
}

module.exports.teststrings = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testStringFormatChoice_ru_RU_iLib: function(test) {
        test.expect(2);
        console.log("\n");
        var str = new IString("0#There are no items.|one#The items end in one.|two#The items end in two|few#The items is few|#Default items");
        str.setLocale("ru-RU");

        test.ok(str !== null);
        console.time("iLib-Time-ru-RU");
        for(var i = 0; i <= 10000; i++){
            str.formatChoice(i, undefined, false);
        }
        console.timeEnd("iLib-Time-ru-RU");

        test.equal(str.formatChoice(2), "The items is few");
        test.done();
    },
    testStringFormatChoice_ru_RU_intl: function(test) {
        test.expect(2);
        var str = new IString("0#There are no items.|one#The items end in one.|two#The items end in two|few#The items is few|#Default items");
        test.ok(str !== null);

        str.setLocale("ru-RU");

        console.time("Intl-Time-ru-RU");
        for(var i = 0; i <= 10000; i++){
            str.formatChoice(i);
        }
        console.timeEnd("Intl-Time-ru-RU");

        test.equal(str.formatChoice(2), "The items is few");
        test.done();
    },
    testStringFormatChoice_ar_SA_iLib: function(test) {
        test.expect(2);
        var str = new IString("0#There are no items.|one#The item is one|few#The items are few|many#The items are many|#Default items");
        test.ok(str !== null);

        str.setLocale("ar-SA");
        console.time("iLib-Time-ar-SA");
        for(var i=0;i<=10000;i++){
            str.formatChoice(i, undefined, false);
        }
        console.timeEnd("iLib-Time-ar-SA");

        test.equal(str.formatChoice(30), "The items are many");
        test.done();
    },
    testStringFormatChoice_ar_SA_intl: function(test) {
        test.expect(2);
        var str = new IString("0#There are no items.|one#The item is one|few#The items are few|many#The items are many|#Default items");
        test.ok(str !== null);

        str.setLocale("ar-SA");
        console.time("intl-Time-ar-SA");
        for(var i=0;i<=10000;i++){
            str.formatChoice(i);
        }
        console.timeEnd("intl-Time-ar-SA");

        test.equal(str.formatChoice(30), "The items are many");
        test.done();
    },
    testStringFormatChoice_be_BY_iLib: function(test) {
        test.expect(2);
        var str = new IString("0#There are no items.|one#The item is one|few#The items are few|many#The items are many|#Default items");
        test.ok(str !== null);

        str.setLocale("be-BY");
        console.time("iLib-Time-be-BY");
        for(var i=0;i<=10000;i++){
            str.formatChoice(i, undefined, false);
        }
        console.timeEnd("iLib-Time-be-BY");

        test.equal(str.formatChoice(8), "The items are many");
        test.done();
    },
    testStringFormatChoice_be_BY_intl: function(test) {
        test.expect(2);
        var str = new IString("0#There are no items.|one#The item is one|few#The items are few|many#The items are many|#Default items");
        test.ok(str !== null);

        str.setLocale("be-BY");
        console.time("intl-Time-be-BY");
        for(var i=0;i<=10000;i++){
            str.formatChoice(i);
        }
        console.timeEnd("intl-Time-be-BY");

        test.equal(str.formatChoice(8), "The items are many");
        test.done();
    },
    testStringFormatChoice_ko_KR_iLib: function(test) {
        test.expect(2);
        var str = new IString("0#There are no items.|one#The items end in one.|two#The items end in two|few#The items is few|#Default items");
        str.setLocale("ko-KR");

        test.ok(str !== null);
        console.time("iLib-Time-ko-KR");
        for(var i=0;i<=10000;i++){
            str.formatChoice(i, undefined, false);
        }
        console.timeEnd("iLib-Time-ko-KR");
        test.equal(str.formatChoice(2), "Default items");
        test.done();
    },
    testStringFormatChoice_ko_KR_intl: function(test) {
        test.expect(2);
        var str = new IString("0#There are no items.|one#The items end in one.|two#The items end in two|few#The items is few|#Default items");
        str.setLocale("ko-KR");

        test.ok(str !== null);
        console.time("intl-Time-ko-KR");
        for(var i=0;i<=10000;i++){
            str.formatChoice(i);
        }
        console.timeEnd("intl-Time-ko-KR");

        test.equal(str.formatChoice(2), "Default items");
        test.done();
    },
    testStringFormatChoiceWithMultipleIndexes2: function(test) {
        test.expect(2);
        var str = new IString("0,0#{num} items on {pages} pages.|1,1#{num} item on {pages} page.|other,1#{num} items on {pages} page.|#{num} items on {pages} pages.");
        test.ok(str !== null);

        var params = {
            num: 10,
            pages: 1
        };

        test.equal(str.formatChoice([params.num,params.pages], params), "10 items on 1 page.");
        test.done();
    },
    testStringFormatChoiceWithMultipleIndexes_useIntl: function(test) {
        test.expect(2);
        var str = new IString("one,one#{num} item on {pages} page.|other,one#{num} items on {pages} page.|#{num} items on {pages} pages.");
        str.setLocale("en-US", true, undefined, undefined, true);
        test.ok(str !== null);

        var params = {
            num: 10,
            pages: 1
        };

        test.equal(str.formatChoice([params.num,params.pages], params), "10 items on 1 page.");
        test.done();
    },
    testStringFormatChoiceWithMultipleIndexes_useIntl2: function(test) {
        test.expect(2);
        var str = new IString("0,0#{num} items on {pages} pages.|one ,one#{num} item on {pages} page.|few, one#{num} items (few) on {pages} page.|many,one#{num} items (many) on {pages} page.|one,few#{num} item (one) on {pages} pages (few).|few,few#{num} items (few) on {pages} pages (few).|many,few#{num} items (many) on {pages} pages (few).|one,many#{num} item (one) on {pages} pages (many).|few , many#{num} items (few) on {pages} pages (many).|many,many#{num} items (many) on {pages} pages (many).");
        str.setLocale("ru-RU", true, undefined, undefined, true);
        test.ok(str !== null);

        var params = {
            num: 22,
            pages: 5
        };

        test.equal(str.formatChoice([params.num,params.pages], params), "22 items (few) on 5 pages (many).");
        test.done();
    },
    testStringFormatChoiceWithMultipleIndexes_useIntl3: function(test) {
        test.expect(2);
        var str = new IString("0,0#{num} items on {pages} pages.|one,one#{num} item on {pages} page.|few, one#{num} items (few) on {pages} page.|many,one#{num} items (many) on {pages} page.|one,few#{num} item (one) on {pages} pages (few).|few,few#{num} items (few) on {pages} pages (few).|many,few#{num} items (many) on {pages} pages (few).|one,many#{num} item (one) on {pages} pages (many).|few , many#{num} items (few) on {pages} pages (many).|many,many#{num} items (many) on {pages} pages (many).");
        str.setLocale("ru-RU", true, undefined, undefined, true);
        test.ok(str !== null);

        var params = {
            num: 22,
            pages: 5
        };

        test.equal(str.formatChoice([params.num,params.pages, 10], params), "22 items (few) on 5 pages (many).");
        test.done();
    },
}