/*
 * testdurfmt2.js - test the duration formatter object
 *
 * Copyright © 2019-2024, JEDLSoft
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

if (typeof(DurationFmt) === "undefined") {
    var DurationFmt = require("../../lib/DurationFmt.js");
}

function setVariable() {
    var obj = {};
    var length = ["full", "long", "medium", "short"];
    obj.fullLength = length;
    return obj;
}

module.exports.testdurfmt2 = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDurFmt_ar_EG: function(test) {
        test.expect(40);
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        // 1 2 3 11 100
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-EG", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');

        test.done();
    },
    testDurFmt_ar_IQ: function(test) {
        test.expect(40);
        // 1 2 3 11 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-IQ", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');

        test.done();
    },
    testDurFmt_ar_MA: function(test) {
        test.expect(40);
        // 1 2 3 11 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-US", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');

        test.done();
    },
    testDurFmt_as_IN: function(test) {
        test.expect(16);

        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "as-IN", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        // CLDR 34 change (all)

        test.equal(textformatted_1[0], '1 বছৰ, 1 মাহ, 1 সপ্তাহ, 1 দিন');
        test.equal(textformatted_1[1], '1 বছৰ, 1 মাহ, 1 সপ্তাহ, 1 দিন');
        test.equal(textformatted_1[2], '1 বছৰ 1 মাহ 1 সপ্তাহ 1 দিন');
        test.equal(textformatted_1[3], '1 বছৰ 1 মাহ 1 সপ্তাহ 1 দিন');

        test.equal(textformatted_2[0], '2 বছৰ, 2 মাহ, 2 সপ্তাহ, 2 দিন');
        test.equal(textformatted_2[1], '2 বছৰ, 2 মাহ, 2 সপ্তাহ, 2 দিন');
        test.equal(textformatted_2[2], '2 বছৰ 2 মাহ 2 সপ্তাহ 2 দিন');
        test.equal(textformatted_2[3], '2 বছৰ 2 মাহ 2 সপ্তাহ 2 দিন');

        test.equal(clockformatted_1[0], '1 ঘণ্টা, 1 মিনিট, 1 ছেকেণ্ড');
        test.equal(clockformatted_1[1], '1 ঘণ্টা, 1 মিনিট, 1 ছেকেণ্ড');
        test.equal(clockformatted_1[2], '1 ঘণ্টা 1 মিনিট 1 ছেকেণ্ড');
        test.equal(clockformatted_1[3], '1 ঘণ্টা 1 মিনিট 1 ছেকেণ্ড');

        test.equal(clockformatted_2[0], '2 ঘণ্টা, 2 মিনিট, 2 ছেকেণ্ড');
        test.equal(clockformatted_2[1], '2 ঘণ্টা, 2 মিনিট, 2 ছেকেণ্ড');
        test.equal(clockformatted_2[2], '2 ঘণ্টা 2 মিনিট 2 ছেকেণ্ড');
        test.equal(clockformatted_2[3], '2 ঘণ্টা 2 মিনিট 2 ছেকেণ্ড');

        test.done();
    },
    testDurFmt_bg_BG: function(test) {
        test.expect(16);

        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "bg-BG", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 година, 1 месец, 1 седмица и 1 ден');
        test.equal(textformatted_1[1], '1 год., 1 мес., 1 седм., 1 д');
        test.equal(textformatted_1[2], '1 г., 1 мес., 1 седм., 1 д');
        test.equal(textformatted_1[3], '1 г., 1 мес., 1 седм., 1 д');

        test.equal(textformatted_2[0], '2 години, 2 месеца, 2 седмици и 2 дни');
        test.equal(textformatted_2[1], '2 год., 2 мес., 2 седм., 2 д');
        test.equal(textformatted_2[2], '2 г., 2 мес., 2 седм., 2 д'); // CLDR 34 change (year, month)
        test.equal(textformatted_2[3], '2 г., 2 мес., 2 седм., 2 д'); // CLDR 34 change (year, month)

        test.equal(clockformatted_1[0], '1 час, 1 минута и 1 секунда');
        test.equal(clockformatted_1[1], '1 ч, 1 мин, 1 сек');
        test.equal(clockformatted_1[2], '1 ч, 1 мин, 1 с');
        test.equal(clockformatted_1[3], '1 ч, 1 мин, 1 с');

        test.equal(clockformatted_2[0], '2 часа, 2 минути и 2 секунди');
        test.equal(clockformatted_2[1], '2 ч, 2 мин, 2 сек');
        test.equal(clockformatted_2[2], '2 ч, 2 мин, 2 с'); // CLDR 34 change
        test.equal(clockformatted_2[3], '2 ч, 2 мин, 2 с'); // CLDR 34 change

        test.done();
    },
    testDurFmt_bn_IN: function(test) {
        test.expect(16);

        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_18 = [];
        var clockformatted_1 = [],clockformatted_18 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "bn-IN", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_18.push(textfmt.format({year: 18,month: 18,week: 18,day: 18}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_18.push(textfmt.format({hour: 18,minute: 18,second: 18}).toString());
        }

        test.equal(textformatted_1[0], '1 বছর, 1 মাস, 1 সপ্তাহ, 1 দিন');
        test.equal(textformatted_1[1], '1 বছর, 1 মাস, 1 সপ্তাহ, 1 দিন');
        test.equal(textformatted_1[2], '1 বছর, 1 মাস, 1 সপ্তাহ, 1 দিন');
        test.equal(textformatted_1[3], '1 বছর, 1 মাস, 1 সপ্তাহ, 1 দিন');

        test.equal(textformatted_18[0], '18 বছর, 18 মাস, 18 সপ্তাহ, 18 দিন');
        test.equal(textformatted_18[1], '18 বছর, 18 মাস, 18 সপ্তাহ, 18 দিন');
        test.equal(textformatted_18[2], '18 বছর, 18 মাস, 18 সপ্তাহ, 18 দিন');
        test.equal(textformatted_18[3], '18 বছর, 18 মাস, 18 সপ্তাহ, 18 দিন');

        test.equal(clockformatted_1[0], '1 ঘন্টা, 1 মিনিট, 1 সেকেন্ড');
        test.equal(clockformatted_1[1], '1 ঘন্টা, 1 মিনিট, 1 সেকেন্ড');
        test.equal(clockformatted_1[2], '1 ঘঃ, 1 মিঃ, 1 সেঃ');
        test.equal(clockformatted_1[3], '1 ঘঃ, 1 মিঃ, 1 সেঃ');

        test.equal(clockformatted_18[0], '18 ঘন্টা, 18 মিনিট, 18 সেকেন্ড');
        test.equal(clockformatted_18[1], '18 ঘন্টা, 18 মিনিট, 18 সেকেন্ড');
        test.equal(clockformatted_18[2], '18 ঘঃ, 18 মিঃ, 18 সেঃ');
        test.equal(clockformatted_18[3], '18 ঘঃ, 18 মিঃ, 18 সেঃ');

        test.done();
    },
    testDurFmt_bs_Latn_BA: function(test) {
        test.expect(24);
        //1,4,5

        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_4 = [], textformatted_5 = [];
        var clockformatted_1 = [],clockformatted_4 = [], clockformatted_5 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "bs-Latn-BA", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_4.push(textfmt.format({year: 4,month: 4,week: 4,day: 4}).toString());
            textformatted_5.push(textfmt.format({year: 5,month: 5,week: 5,day: 5}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_4.push(textfmt.format({hour: 4,minute: 4,second: 4}).toString());
            clockformatted_5.push(textfmt.format({hour: 5,minute: 5,second: 5}).toString());
        }

        test.equal(textformatted_1[0], '1 godina, 1 mjesec, 1 sedmica i 1 dan');
        test.equal(textformatted_1[1], '1 god., 1 mj., 1 sedm., 1 dan');
        test.equal(textformatted_1[2], '1 god., 1 mj., 1 sedm., 1 d.');
        test.equal(textformatted_1[3], '1 god., 1 mj., 1 sedm., 1 d.');

        test.equal(textformatted_4[0], '4 godine, 4 mjeseca, 4 sedmice i 4 dana');
        test.equal(textformatted_4[1], '4 god., 4 mj., 4 sedm., 4 dana');
        test.equal(textformatted_4[2], '4 god., 4 mj., 4 sedm., 4 d.');
        test.equal(textformatted_4[3], '4 god., 4 mj., 4 sedm., 4 d.');

        test.equal(textformatted_5[0], '5 godina, 5 mjeseci, 5 sedmica i 5 dana');
        test.equal(textformatted_5[1], '5 god., 5 mj., 5 sedm., 5 dana');
        test.equal(textformatted_5[2], '5 god., 5 mj., 5 sedm., 5 d.');
        test.equal(textformatted_5[3], '5 god., 5 mj., 5 sedm., 5 d.');

        test.equal(clockformatted_1[0], '1 sat, 1 minuta i 1 sekunda');
        test.equal(clockformatted_1[1], '1 h, 1 min., 1 sek.');
        test.equal(clockformatted_1[2], '1 h, 1 m, 1 s');
        test.equal(clockformatted_1[3], '1 h, 1 m, 1 s');

        test.equal(clockformatted_4[0], '4 sata, 4 minute i 4 sekunde');
        test.equal(clockformatted_4[1], '4 h, 4 min., 4 sek.');
        test.equal(clockformatted_4[2], '4 h, 4 m, 4 s');
        test.equal(clockformatted_4[3], '4 h, 4 m, 4 s');

        test.equal(clockformatted_5[0], '5 sati, 5 minuta i 5 sekundi');
        test.equal(clockformatted_5[1], '5 h, 5 min., 5 sek.');
        test.equal(clockformatted_5[2], '5 h, 5 m, 5 s');
        test.equal(clockformatted_5[3], '5 h, 5 m, 5 s');

        test.done();
    },
    testDurFmt_bs_Latn_ME: function(test) {
        test.expect(24);
        // 1,2,20
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [], textformatted_20 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_20 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "bs-Latn-ME", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_20.push(textfmt.format({year: 20,month: 20,week: 20,day: 20}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_20.push(textfmt.format({hour: 20,minute: 20,second: 20}).toString());
        }

        test.equal(textformatted_1[0], '1 godina, 1 mjesec, 1 sedmica i 1 dan');
        test.equal(textformatted_1[1], '1 god., 1 mj., 1 sedm., 1 dan');
        test.equal(textformatted_1[2], '1 god., 1 mj., 1 sedm., 1 d.');
        test.equal(textformatted_1[3], '1 god., 1 mj., 1 sedm., 1 d.');

        test.equal(textformatted_2[0], '2 godine, 2 mjeseca, 2 sedmice i 2 dana');
        test.equal(textformatted_2[1], '2 god., 2 mj., 2 sedm., 2 dana');
        test.equal(textformatted_2[2], '2 god., 2 mj., 2 sedm., 2 d.');
        test.equal(textformatted_2[3], '2 god., 2 mj., 2 sedm., 2 d.');

        test.equal(textformatted_20[0], '20 godina, 20 mjeseci, 20 sedmica i 20 dana');
        test.equal(textformatted_20[1], '20 god., 20 mj., 20 sedm., 20 dana');
        test.equal(textformatted_20[2], '20 god., 20 mj., 20 sedm., 20 d.');
        test.equal(textformatted_20[3], '20 god., 20 mj., 20 sedm., 20 d.');

        test.equal(clockformatted_1[0], '1 sat, 1 minuta i 1 sekunda');
        test.equal(clockformatted_1[1], '1 h, 1 min., 1 sek.');
        test.equal(clockformatted_1[2], '1 h, 1 m, 1 s');
        test.equal(clockformatted_1[3], '1 h, 1 m, 1 s');

        test.equal(clockformatted_2[0], '2 sata, 2 minute i 2 sekunde');
        test.equal(clockformatted_2[1], '2 h, 2 min., 2 sek.');
        test.equal(clockformatted_2[2], '2 h, 2 m, 2 s');
        test.equal(clockformatted_2[3], '2 h, 2 m, 2 s');

        test.equal(clockformatted_20[0], '20 sati, 20 minuta i 20 sekundi');
        test.equal(clockformatted_20[1], '20 h, 20 min., 20 sek.');
        test.equal(clockformatted_20[2], '20 h, 20 m, 20 s');
        test.equal(clockformatted_20[3], '20 h, 20 m, 20 s');

        test.done();
    },
    testDurFmt_cs_CZ: function(test) {
        test.expect(24);
        // 1,2,5
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [], textformatted_5 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_5 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "cs-CZ", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_5.push(textfmt.format({year: 5,month: 5,week: 5,day: 5}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_5.push(textfmt.format({hour: 5,minute: 5,second: 5}).toString());
        }

        test.equal(textformatted_1[0], '1 rok, 1 měsíc, 1 týden a 1 den');
        test.equal(textformatted_1[1], '1 rok, 1 měs., 1 týd., 1 den');
        test.equal(textformatted_1[2], '1 r., 1 m., 1 t., 1 d.');
        test.equal(textformatted_1[3], '1 r. 1 m. 1 t. 1 d.');

        test.equal(textformatted_2[0], '2 roky, 2 měsíce, 2 týdny a 2 dny');
        test.equal(textformatted_2[1], '2 roky, 2 měs., 2 týd., 2 dny');
        test.equal(textformatted_2[2], '2 r., 2 m., 2 t., 2 d.');
        test.equal(textformatted_2[3], '2 r. 2 m. 2 t. 2 d.');

        test.equal(textformatted_5[0], '5 let, 5 měsíců, 5 týdnů a 5 dnů');
        test.equal(textformatted_5[1], '5 let, 5 měs., 5 týd., 5 dnů');
        test.equal(textformatted_5[2], '5 l., 5 m., 5 t., 5 d.');
        test.equal(textformatted_5[3], '5 l. 5 m. 5 t. 5 d.');

        test.equal(clockformatted_1[0], '1 hodina, 1 minuta a 1 sekunda');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1 h, 1 m, 1 s');
        test.equal(clockformatted_1[3], '1 h 1 m 1 s');

        test.equal(clockformatted_2[0], '2 hodiny, 2 minuty a 2 sekundy');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2 h, 2 m, 2 s');
        test.equal(clockformatted_2[3], '2 h 2 m 2 s');

        test.equal(clockformatted_5[0], '5 hodin, 5 minut a 5 sekund');
        test.equal(clockformatted_5[1], '5 h, 5 min, 5 s');
        test.equal(clockformatted_5[2], '5 h, 5 m, 5 s');
        test.equal(clockformatted_5[3], '5 h 5 m 5 s');

        test.done();
    },
    testDurFmt_da_DK: function(test) {
        test.expect(16);
        // 1,2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "da-DK", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 år, 1 måned, 1 uge og 1 dag');
        test.equal(textformatted_1[1], '1 år, 1 md., 1 uge, 1 dag');
        test.equal(textformatted_1[2], '1 år, 1 m, 1 u, 1 d');
        test.equal(textformatted_1[3], '1 år, 1 m, 1 u, 1 d');

        test.equal(textformatted_2[0], '2 år, 2 måneder, 2 uger og 2 dage');
        test.equal(textformatted_2[1], '2 år, 2 mdr., 2 uger, 2 dage');
        test.equal(textformatted_2[2], '2 år, 2 m, 2 u, 2 d');
        test.equal(textformatted_2[3], '2 år, 2 m, 2 u, 2 d');

        test.equal(clockformatted_1[0], '1 time, 1 minut og 1 sekund');
        test.equal(clockformatted_1[1], '1 t., 1 min., 1 sek.');
        test.equal(clockformatted_1[2], '1 t, 1 m, 1 s');
        test.equal(clockformatted_1[3], '1 t, 1 m, 1 s');

        test.equal(clockformatted_2[0], '2 timer, 2 minutter og 2 sekunder');
        test.equal(clockformatted_2[1], '2 t., 2 min., 2 sek.');
        test.equal(clockformatted_2[2], '2 t, 2 m, 2 s');
        test.equal(clockformatted_2[3], '2 t, 2 m, 2 s');

        test.done();
    },
    testDurFmt_de_AT: function(test) {
        test.expect(16);
        // 1,2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "de-AT", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 Jahr, 1 Monat, 1 Woche und 1 Tag');
        test.equal(textformatted_1[1], '1 J, 1 Mon., 1 Wo., 1 Tg.');
        test.equal(textformatted_1[2], '1 J, 1 M, 1 W, 1 T');
        test.equal(textformatted_1[3], '1 J, 1 M, 1 W, 1 T');

        test.equal(textformatted_2[0], '2 Jahre, 2 Monate, 2 Wochen und 2 Tage');
        test.equal(textformatted_2[1], '2 J, 2 Mon., 2 Wo., 2 Tg.');
        test.equal(textformatted_2[2], '2 J, 2 M, 2 W, 2 T');
        test.equal(textformatted_2[3], '2 J, 2 M, 2 W, 2 T');

        test.equal(clockformatted_1[0], '1 Stunde, 1 Minute und 1 Sekunde');
        test.equal(clockformatted_1[1], '1 Std., 1 Min., 1 Sek.');
        test.equal(clockformatted_1[2], '1 Std., 1 Min., 1 Sek.');
        test.equal(clockformatted_1[3], '1 Std., 1 Min., 1 Sek.');

        test.equal(clockformatted_2[0], '2 Stunden, 2 Minuten und 2 Sekunden');
        test.equal(clockformatted_2[1], '2 Std., 2 Min., 2 Sek.');
        test.equal(clockformatted_2[2], '2 Std., 2 Min., 2 Sek.');
        test.equal(clockformatted_2[3], '2 Std., 2 Min., 2 Sek.');

        test.done();
    },
    testDurFmt_de_CH: function(test) {
        test.expect(16);
        // 1,2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "de-CH", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 Jahr, 1 Monat, 1 Woche und 1 Tag');
        test.equal(textformatted_1[1], '1 J, 1 Mon., 1 Wo., 1 Tg.');
        test.equal(textformatted_1[2], '1 J, 1 M, 1 W, 1 T');
        test.equal(textformatted_1[3], '1 J, 1 M, 1 W, 1 T');

        test.equal(textformatted_2[0], '2 Jahre, 2 Monate, 2 Wochen und 2 Tage');
        test.equal(textformatted_2[1], '2 J, 2 Mon., 2 Wo., 2 Tg.');
        test.equal(textformatted_2[2], '2 J, 2 M, 2 W, 2 T');
        test.equal(textformatted_2[3], '2 J, 2 M, 2 W, 2 T');

        test.equal(clockformatted_1[0], '1 Stunde, 1 Minute und 1 Sekunde');
        test.equal(clockformatted_1[1], '1 Std., 1 Min., 1 Sek.');
        test.equal(clockformatted_1[2], '1 Std., 1 Min., 1 Sek.');
        test.equal(clockformatted_1[3], '1 Std., 1 Min., 1 Sek.');

        test.equal(clockformatted_2[0], '2 Stunden, 2 Minuten und 2 Sekunden');
        test.equal(clockformatted_2[1], '2 Std., 2 Min., 2 Sek.');
        test.equal(clockformatted_2[2], '2 Std., 2 Min., 2 Sek.');
        test.equal(clockformatted_2[3], '2 Std., 2 Min., 2 Sek.');

        test.done();
    },
    testDurFmt_de_DE: function(test) {
        test.expect(16);
        // 1,16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "de-DE", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 Jahr, 1 Monat, 1 Woche und 1 Tag');
        test.equal(textformatted_1[1], '1 J, 1 Mon., 1 Wo., 1 Tg.');
        test.equal(textformatted_1[2], '1 J, 1 M, 1 W, 1 T');
        test.equal(textformatted_1[3], '1 J, 1 M, 1 W, 1 T');

        test.equal(textformatted_16[0], '16 Jahre, 16 Monate, 16 Wochen und 16 Tage');
        test.equal(textformatted_16[1], '16 J, 16 Mon., 16 Wo., 16 Tg.');
        test.equal(textformatted_16[2], '16 J, 16 M, 16 W, 16 T');
        test.equal(textformatted_16[3], '16 J, 16 M, 16 W, 16 T');

        test.equal(clockformatted_1[0], '1 Stunde, 1 Minute und 1 Sekunde');
        test.equal(clockformatted_1[1], '1 Std., 1 Min., 1 Sek.');
        test.equal(clockformatted_1[2], '1 Std., 1 Min., 1 Sek.');
        test.equal(clockformatted_1[3], '1 Std., 1 Min., 1 Sek.');

        test.equal(clockformatted_16[0], '16 Stunden, 16 Minuten und 16 Sekunden');
        test.equal(clockformatted_16[1], '16 Std., 16 Min., 16 Sek.');
        test.equal(clockformatted_16[2], '16 Std., 16 Min., 16 Sek.');
        test.equal(clockformatted_16[3], '16 Std., 16 Min., 16 Sek.');

        test.done();
    },
    testDurFmt_de_LU: function(test) {
        test.expect(16);
        // 1,17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "de-LU", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 Jahr, 1 Monat, 1 Woche und 1 Tag');
        test.equal(textformatted_1[1], '1 J, 1 Mon., 1 Wo., 1 Tg.');
        test.equal(textformatted_1[2], '1 J, 1 M, 1 W, 1 T');
        test.equal(textformatted_1[3], '1 J, 1 M, 1 W, 1 T');

        test.equal(textformatted_17[0], '17 Jahre, 17 Monate, 17 Wochen und 17 Tage');
        test.equal(textformatted_17[1], '17 J, 17 Mon., 17 Wo., 17 Tg.');
        test.equal(textformatted_17[2], '17 J, 17 M, 17 W, 17 T');
        test.equal(textformatted_17[3], '17 J, 17 M, 17 W, 17 T');

        test.equal(clockformatted_1[0], '1 Stunde, 1 Minute und 1 Sekunde');
        test.equal(clockformatted_1[1], '1 Std., 1 Min., 1 Sek.');
        test.equal(clockformatted_1[2], '1 Std., 1 Min., 1 Sek.');
        test.equal(clockformatted_1[3], '1 Std., 1 Min., 1 Sek.');

        test.equal(clockformatted_17[0], '17 Stunden, 17 Minuten und 17 Sekunden');
        test.equal(clockformatted_17[1], '17 Std., 17 Min., 17 Sek.');
        test.equal(clockformatted_17[2], '17 Std., 17 Min., 17 Sek.');
        test.equal(clockformatted_17[3], '17 Std., 17 Min., 17 Sek.');

        test.done();
    },
    testDurFmt_el_CY: function(test) {
        test.expect(16);
        // 1,2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "el-CY", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 έτος, 1 μήνας, 1 εβδομάδα, 1 ημέρα');
        test.equal(textformatted_1[1], '1 έτ., 1 μήν., 1 εβδ., 1 ημέρα');
        test.equal(textformatted_1[2], '1 έ, 1 μ, 1 ε, 1 η');
        test.equal(textformatted_1[3], '1 έ 1 μ 1 ε 1 η');

        test.equal(textformatted_2[0], '2 έτη, 2 μήνες, 2 εβδομάδες, 2 ημέρες');
        test.equal(textformatted_2[1], '2 έτ., 2 μήν., 2 εβδ., 2 ημέρες');
        test.equal(textformatted_2[2], '2 έ, 2 μ, 2 ε, 2 η');
        test.equal(textformatted_2[3], '2 έ 2 μ 2 ε 2 η');

        test.equal(clockformatted_1[0], '1 ώρα, 1 λεπτό, 1 δευτερόλεπτο');
        test.equal(clockformatted_1[1], '1 ώ., 1 λ., 1 δευτ.');
        test.equal(clockformatted_1[2], '1 ώ, 1 λ, 1 δ');
        test.equal(clockformatted_1[3], '1 ώ 1 λ 1 δ');

        test.equal(clockformatted_2[0], '2 ώρες, 2 λεπτά, 2 δευτερόλεπτα');
        test.equal(clockformatted_2[1], '2 ώ., 2 λ., 2 δευτ.');
        test.equal(clockformatted_2[2], '2 ώ, 2 λ, 2 δ');
        test.equal(clockformatted_2[3], '2 ώ 2 λ 2 δ');

        test.done();
    },
    testDurFmt_el_GR: function(test) {
        test.expect(16);
        // 1,17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "el-GR", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 έτος, 1 μήνας, 1 εβδομάδα, 1 ημέρα');
        test.equal(textformatted_1[1], '1 έτ., 1 μήν., 1 εβδ., 1 ημέρα');
        test.equal(textformatted_1[2], '1 έ, 1 μ, 1 ε, 1 η');
        test.equal(textformatted_1[3], '1 έ 1 μ 1 ε 1 η');

        test.equal(textformatted_17[0], '17 έτη, 17 μήνες, 17 εβδομάδες, 17 ημέρες');
        test.equal(textformatted_17[1], '17 έτ., 17 μήν., 17 εβδ., 17 ημέρες');
        test.equal(textformatted_17[2], '17 έ, 17 μ, 17 ε, 17 η');
        test.equal(textformatted_17[3], '17 έ 17 μ 17 ε 17 η');

        test.equal(clockformatted_1[0], '1 ώρα, 1 λεπτό, 1 δευτερόλεπτο');
        test.equal(clockformatted_1[1], '1 ώ., 1 λ., 1 δευτ.');
        test.equal(clockformatted_1[2], '1 ώ, 1 λ, 1 δ');
        test.equal(clockformatted_1[3], '1 ώ 1 λ 1 δ');

        test.equal(clockformatted_17[0], '17 ώρες, 17 λεπτά, 17 δευτερόλεπτα');
        test.equal(clockformatted_17[1], '17 ώ., 17 λ., 17 δευτ.');
        test.equal(clockformatted_17[2], '17 ώ, 17 λ, 17 δ');
        test.equal(clockformatted_17[3], '17 ώ 17 λ 17 δ');

        test.done();
    },
    testDurFmt_en_AM: function(test) {
        test.expect(16);
        // 1,2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-AM", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hr, 2 min, 2 sec');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_AU: function(test) {
        test.expect(16);
        // 1.16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-AU", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_16[0], '16 years, 16 months, 16 weeks, 16 days');
        test.equal(textformatted_16[1], '16 yrs, 16 mths, 16 wks, 16 days');
        test.equal(textformatted_16[2], '16y, 16m, 16w, 16d');
        test.equal(textformatted_16[3], '16y 16m 16w 16d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_16[0], '16 hours, 16 minutes, 16 seconds');
        test.equal(clockformatted_16[1], '16 hrs, 16 mins, 16 secs');
        test.equal(clockformatted_16[3], '16h 16m 16s');
        test.equal(clockformatted_16[3], '16h 16m 16s');

        test.done();
    },
    testDurFmt_en_AZ: function(test) {
        test.expect(16);
        // 1,17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-AZ", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_17[0], '17 years, 17 months, 17 weeks, 17 days');
        test.equal(textformatted_17[1], '17 yrs, 17 mths, 17 wks, 17 days');
        test.equal(textformatted_17[2], '17y, 17m, 17w, 17d');
        test.equal(textformatted_17[3], '17y 17m 17w 17d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_17[0], '17 hours, 17 minutes, 17 seconds');
        test.equal(clockformatted_17[1], '17 hr, 17 min, 17 sec');
        test.equal(clockformatted_17[2], '17h, 17m, 17s');
        test.equal(clockformatted_17[3], '17h 17m 17s');

        test.done();
    },
    testDurFmt_en_CA: function(test) {
        test.expect(16);
        // 1,2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-CA", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mo, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mos, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_en_GB: function(test) {
        test.expect(16);
        // 1,2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-GB", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_GH: function(test) {
        test.expect(16);
        // 1,2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-GH", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_HK: function(test) {
        test.expect(16);
        // 1,2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-HK", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_IE: function(test) {
        test.expect(16);
        // 1,2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-IE", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_IN: function(test) {
        test.expect(16);
        // 1,2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-IN", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_IS: function(test) {
        test.expect(16);
        // 1,2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-IS", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hr, 2 min, 2 sec');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_JP: function(test) {
        test.expect(16);
        // 1,2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-JP", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hr, 2 min, 2 sec');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_KE: function(test) {
        test.expect(16);
        // 1,2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-KE", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_KR: function(test) {
        test.expect(16);
        // 1,2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-KR", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hr, 2 min, 2 sec');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_LK: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-LK", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hr, 2 min, 2 sec');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_MM: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-MM", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hr, 2 min, 2 sec');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_MW: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-MW", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_MY: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-MY", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_NG: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-NG", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_NZ: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-NZ", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_PH: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-PH", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hr, 2 min, 2 sec');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_PR: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-PR", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hr, 2 min, 2 sec');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_SG: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-SG", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_US: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-US", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hr, 2 min, 2 sec');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_UG: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-UG", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_ZA: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-ZA", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_ZM: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-ZM", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_es_AR: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-AR", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 año, 1 m., 1 sem., 1 d.' );
         test.equal(textformatted_1[2], '1a., 1m., 1sem., 1d.');
        test.equal(textformatted_1[3], '1a. 1m. 1sem. 1d.');

        test.equal(textformatted_2[0], '2 años, 2 meses, 2 semanas y 2 días');
        test.equal(textformatted_2[1], '2 años, 2 mm., 2 sems., 2 dd.');
        test.equal(textformatted_2[2], '2a., 2mm., 2sems., 2dd.');
        test.equal(textformatted_2[3], '2a. 2mm. 2sems. 2dd.');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 seg.');
        test.equal(clockformatted_1[2], '1h, 1min, 1seg.');
        test.equal(clockformatted_1[3], '1h 1min 1seg.');

        test.equal(clockformatted_2[0], '2 horas, 2 minutos y 2 segundos');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 seg.');
        test.equal(clockformatted_2[2], '2h, 2min, 2seg.');
        test.equal(clockformatted_2[3], '2h 2min 2seg.');

        test.done();
    },
    testDurFmt_es_BO: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-BO", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a., 1 m., 1 sem., 1 d.');
        test.equal(textformatted_1[2], '1a., 1m., 1sem., 1d.');
        test.equal(textformatted_1[3], '1a. 1m. 1sem. 1d.');

        test.equal(textformatted_16[0], '2 años, 2 meses, 2 semanas y 2 días');
        test.equal(textformatted_16[1], '2 aa., 2 mm., 2 sems., 2 dd.');
        test.equal(textformatted_16[2], '2aa., 2mm., 2sems., 2dd.');
        test.equal(textformatted_16[3], '2aa. 2mm. 2sems. 2dd.');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_16[0], '2 horas, 2 minutos y 2 segundos');
        test.equal(clockformatted_16[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_16[2], '2h, 2min, 2s');
        test.equal(clockformatted_16[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_es_CL: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-CL", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a., 1 m., 1 sem., 1 d.');
        test.equal(textformatted_1[2], '1a., 1m., 1sem., 1d.');
        test.equal(textformatted_1[3], '1a. 1m. 1sem. 1d.');

        test.equal(textformatted_2[0], '2 años, 2 meses, 2 semanas y 2 días');
        test.equal(textformatted_2[1], '2 aa., 2 mm., 2 sems., 2 dd.');
        test.equal(textformatted_2[2], '2aa., 2mm., 2sems., 2dd.');
        test.equal(textformatted_2[3], '2aa. 2mm. 2sems. 2dd.');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 horas, 2 minutos y 2 segundos');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_es_CO: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-CO", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a., 1 mes, 1 sem., 1 día');
        test.equal(textformatted_1[2], '1 a., 1 mes, 1 sem., 1 día');
        test.equal(textformatted_1[3], '1 a. 1 mes 1 sem. 1 día');

        test.equal(textformatted_16[0], '16 años, 16 meses, 16 semanas y 16 días');
        test.equal(textformatted_16[1], '16 a., 16 meses, 16 sems., 16 días');
        test.equal(textformatted_16[2], '16 a., 16 meses, 16 sems., 16 días');
        test.equal(textformatted_16[3], '16 a. 16 meses 16 sems. 16 días');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 h 1 min 1 s');

        test.equal(clockformatted_16[0], '16 horas, 16 minutos y 16 segundos');
        test.equal(clockformatted_16[1], '16 h, 16 min, 16 s');
        test.equal(clockformatted_16[2], '16 h, 16 min, 16 s');
        test.equal(clockformatted_16[3], '16 h 16 min 16 s');

        test.done();
    },
    testDurFmt_es_DO: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-DO", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a., 1 m., 1 sem., 1 d.');
        test.equal(textformatted_1[2], '1a., 1m., 1sem., 1d.');
        test.equal(textformatted_1[3], '1a. 1m. 1sem. 1d.');

        test.equal(textformatted_2[0], '2 años, 2 meses, 2 semanas y 2 días');
        test.equal(textformatted_2[1], '2 aa., 2 mm., 2 sems., 2 dd.');
        test.equal(textformatted_2[2], '2aa., 2m., 2sems., 2d.');
        test.equal(textformatted_2[3], '2aa. 2m. 2sems. 2d.');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 seg.');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 horas, 2 minutos y 2 segundos');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 seg.');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_es_EC: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-EC", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a., 1 m., 1 sem., 1 d.');
        test.equal(textformatted_1[2], '1a., 1m., 1sem., 1d.');
        test.equal(textformatted_1[3], '1a. 1m. 1sem. 1d.');

        test.equal(textformatted_16[0], '16 años, 16 meses, 16 semanas y 16 días');
        test.equal(textformatted_16[1], '16 aa., 16 mm., 16 sems., 16 dd.');
        test.equal(textformatted_16[2], '16aa., 16mm., 16sems., 16dd.');
        test.equal(textformatted_16[3], '16aa. 16mm. 16sems. 16dd.');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_16[0], '16 horas, 16 minutos y 16 segundos');
        test.equal(clockformatted_16[1], '16 h, 16 min, 16 s');
        test.equal(clockformatted_16[2], '16h, 16min, 16s');
        test.equal(clockformatted_16[3], '16h 16min 16s');

        test.done();
    },
    testDurFmt_es_ES: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-ES", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a, 1 m., 1 sem., 1 d');
        test.equal(textformatted_1[2], '1a, 1m, 1sem, 1d');
        test.equal(textformatted_1[3], '1a 1m 1sem 1d');

        test.equal(textformatted_2[0], '2 años, 2 meses, 2 semanas y 2 días');
        test.equal(textformatted_2[1], '2 a, 2 m., 2 sem., 2 d');
        test.equal(textformatted_2[2], '2a, 2m, 2sem, 2d');
        test.equal(textformatted_2[3], '2a 2m 2sem 2d');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 horas, 2 minutos y 2 segundos');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_es_GT: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-GT", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a., 1 m., 1 sem., 1 d.');
        test.equal(textformatted_1[2], '1a., 1m., 1sem., 1d.');
        test.equal(textformatted_1[3], '1a. 1m. 1sem. 1d.');

        test.equal(textformatted_16[0], '16 años, 16 meses, 16 semanas y 16 días');
        test.equal(textformatted_16[1], '16 aa., 16 mm., 16 sems., 16 dd.');
        test.equal(textformatted_16[2], '16aa., 16mm., 16sems., 16dd.');
        test.equal(textformatted_16[3], '16aa. 16mm. 16sems. 16dd.');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_16[0], '16 horas, 16 minutos y 16 segundos');
        test.equal(clockformatted_16[1], '16 h, 16 min, 16 s');
        test.equal(clockformatted_16[2], '16h, 16min, 16s');
        test.equal(clockformatted_16[3], '16h 16min 16s');

        test.done();
    },
    testDurFmt_es_HN: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-HN", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a., 1 m., 1 sem., 1 d.');
        test.equal(textformatted_1[2], '1a., 1m., 1sem., 1d.');
        test.equal(textformatted_1[3], '1a. 1m. 1sem. 1d.');

        test.equal(textformatted_17[0], '17 años, 17 meses, 17 semanas y 17 días');
        test.equal(textformatted_17[1], '17 aa., 17 mm., 17 sems., 17 dd.');
        test.equal(textformatted_17[2], '17aa., 17mm., 17sems., 17dd.');
        test.equal(textformatted_17[3], '17aa. 17mm. 17sems. 17dd.');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_17[0], '17 horas, 17 minutos y 17 segundos');
        test.equal(clockformatted_17[1], '17 h, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17h, 17min, 17s');
        test.equal(clockformatted_17[3], '17h 17min 17s');

        test.done();
    },
    testDurFmt_es_MX: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-MX", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a, 1 m., 1 sem., 1 día');
        test.equal(textformatted_1[2], '1a, 1m, 1sem, 1d');
        test.equal(textformatted_1[3], '1a 1m 1sem 1d');

        test.equal(textformatted_2[0], '2 años, 2 meses, 2 semanas y 2 días');
        test.equal(textformatted_2[1], '2 a, 2 m, 2 sem, 2 días');
        test.equal(textformatted_2[2], '2a, 2m, 2sem, 2d');
        test.equal(textformatted_2[3], '2a 2m 2sem 2d');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 horas, 2 minutos y 2 segundos');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_es_NI: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-NI", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a., 1 m., 1 sem., 1 d.');
        test.equal(textformatted_1[2], '1a., 1m., 1sem., 1d.');
        test.equal(textformatted_1[3], '1a. 1m. 1sem. 1d.');

        test.equal(textformatted_16[0], '16 años, 16 meses, 16 semanas y 16 días');
        test.equal(textformatted_16[1], '16 aa., 16 mm., 16 sems., 16 dd.');
        test.equal(textformatted_16[2], '16aa., 16mm., 16sems., 16dd.');
        test.equal(textformatted_16[3], '16aa. 16mm. 16sems. 16dd.');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_16[0], '16 horas, 16 minutos y 16 segundos');
        test.equal(clockformatted_16[1], '16 h, 16 min, 16 s');
        test.equal(clockformatted_16[2], '16h, 16min, 16s');
        test.equal(clockformatted_16[3], '16h 16min 16s');

        test.done();
    },
    testDurFmt_es_PA: function(test) {
        test.expect(16);
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        // 1 17
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-PA", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a., 1 m., 1 sem., 1 d.');
        test.equal(textformatted_1[2], '1a., 1m., 1sem., 1d.');
        test.equal(textformatted_1[3], '1a. 1m. 1sem. 1d.');

        test.equal(textformatted_17[0], '17 años, 17 meses, 17 semanas y 17 días');
        test.equal(textformatted_17[1], '17 aa., 17 mm., 17 sems., 17 dd.');
        test.equal(textformatted_17[2], '17aa., 17mm., 17sems., 17dd.');
        test.equal(textformatted_17[3], '17aa. 17mm. 17sems. 17dd.');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_17[0], '17 horas, 17 minutos y 17 segundos');
        test.equal(clockformatted_17[1], '17 h, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17h, 17min, 17s');
        test.equal(clockformatted_17[3], '17h 17min 17s');

        test.done();
    },
    testDurFmt_es_PE: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-PE", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a., 1 m., 1 sem., 1 d.');
        test.equal(textformatted_1[2], '1a., 1m., 1sem., 1d.');
        test.equal(textformatted_1[3], '1a. 1m. 1sem. 1d.');

        test.equal(textformatted_16[0], '16 años, 16 meses, 16 semanas y 16 días');
        test.equal(textformatted_16[1], '16 aa., 16 mm., 16 sems., 16 dd.');
        test.equal(textformatted_16[2], '16aa., 16mm., 16sems., 16dd.');
        test.equal(textformatted_16[3], '16aa. 16mm. 16sems. 16dd.');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_16[0], '16 horas, 16 minutos y 16 segundos');
        test.equal(clockformatted_16[1], '16 h, 16 min, 16 s');
        test.equal(clockformatted_16[2], '16h, 16min, 16s');
        test.equal(clockformatted_16[3], '16h 16min 16s');

        test.done();
    },
    testDurFmt_es_PR: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-PR", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a., 1 m., 1 sem., 1 d.');
        test.equal(textformatted_1[2], '1a., 1m., 1sem., 1d.');
        test.equal(textformatted_1[3], '1a. 1m. 1sem. 1d.');

        test.equal(textformatted_2[0], '2 años, 2 meses, 2 semanas y 2 días');
        test.equal(textformatted_2[1], '2 aa., 2 mm., 2 sems., 2 dd.');
        test.equal(textformatted_2[2], '2aa., 2mm., 2sems., 2dd.');
        test.equal(textformatted_2[3], '2aa. 2mm. 2sems. 2dd.');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 horas, 2 minutos y 2 segundos');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_es_PY: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-PY", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 año, 1 mes, 1 sem., 1 día');
        test.equal(textformatted_1[2], '1a., 1m., 1sem., 1d.');
        test.equal(textformatted_1[3], '1a. 1m. 1sem. 1d.');

        test.equal(textformatted_2[0], '2 años, 2 meses, 2 semanas y 2 días');
        test.equal(textformatted_2[1], '2 años, 2 meses, 2 sems., 2 días');
        test.equal(textformatted_2[2], '2aa., 2mm., 2sems., 2dd.');
        test.equal(textformatted_2[3], '2aa. 2mm. 2sems. 2dd.');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 seg.');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 horas, 2 minutos y 2 segundos');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 seg.');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_es_SV: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-SV", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a., 1 m., 1 sem., 1 d.');
        test.equal(textformatted_1[2], '1a., 1m., 1sem., 1d.');
        test.equal(textformatted_1[3], '1a. 1m. 1sem. 1d.');

        test.equal(textformatted_17[0], '17 años, 17 meses, 17 semanas y 17 días');
        test.equal(textformatted_17[1], '17 aa., 17 mm., 17 sems., 17 dd.');
        test.equal(textformatted_17[2], '17aa., 17mm., 17sems., 17dd.');
        test.equal(textformatted_17[3], '17aa. 17mm. 17sems. 17dd.');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_17[0], '17 horas, 17 minutos y 17 segundos');
        test.equal(clockformatted_17[1], '17 h, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17h, 17min, 17s');
        test.equal(clockformatted_17[3], '17h 17min 17s');

        test.done();
    },
    testDurFmt_es_US: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-US", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a, 1 m, 1 sem., 1 día');
        test.equal(textformatted_1[2], '1a, 1m, 1sem., 1d');
        test.equal(textformatted_1[3], '1a 1m 1sem. 1d');

        test.equal(textformatted_17[0], '17 años, 17 meses, 17 semanas y 17 días');
        test.equal(textformatted_17[1], '17 aa., 17 mm., 17 sems., 17 días');
        test.equal(textformatted_17[2], '17a, 17m, 17sems., 17d');
        test.equal(textformatted_17[3], '17a 17m 17sems. 17d');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_17[0], '17 horas, 17 minutos y 17 segundos');
        test.equal(clockformatted_17[1], '17 h, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17h, 17min, 17s');
        test.equal(clockformatted_17[3], '17h 17min 17s');

        test.done();
    },
    testDurFmt_es_UY: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-UY", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a., 1 m., 1 sem., 1 d.');
        test.equal(textformatted_1[2], '1a., 1m., 1sem., 1d.');
        test.equal(textformatted_1[3], '1a. 1m. 1sem. 1d.');

        test.equal(textformatted_2[0], '2 años, 2 meses, 2 semanas y 2 días');
        test.equal(textformatted_2[1], '2 aa., 2 mm., 2 sems., 2 dd.');
        test.equal(textformatted_2[2], '2aa., 2mm., 2sems., 2dd.');
        test.equal(textformatted_2[3], '2aa. 2mm. 2sems. 2dd.');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 horas, 2 minutos y 2 segundos');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_es_VE: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-VE", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a., 1 m., 1 sem., 1 d.');
        test.equal(textformatted_1[2], '1a., 1m., 1sem., 1d.');
        test.equal(textformatted_1[3], '1a. 1m. 1sem. 1d.');

        test.equal(textformatted_16[0], '16 años, 16 meses, 16 semanas y 16 días');
        test.equal(textformatted_16[1], '16 aa., 16 mm., 16 sems., 16 dd.');
        test.equal(textformatted_16[2], '16aa., 16mm., 16sems., 16dd.');
        test.equal(textformatted_16[3], '16aa. 16mm. 16sems. 16dd.');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_16[0], '16 horas, 16 minutos y 16 segundos');
        test.equal(clockformatted_16[1], '16 h, 16 min, 16 s');
        test.equal(clockformatted_16[2], '16h, 16min, 16s');
        test.equal(clockformatted_16[3], '16h 16min 16s');

        test.done();
    },
    testDurFmt_et_EE: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "et-EE", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 aasta, 1 kuu, 1 nädal, 1 ööpäev');
        test.equal(textformatted_1[1], '1 a, 1 kuu, 1 näd, 1 päev');
        test.equal(textformatted_1[2], '1 a, 1 k, 1 n, 1 p');
        test.equal(textformatted_1[3], '1 a 1 k 1 n 1 p');

        test.equal(textformatted_2[0], '2 aastat, 2 kuud, 2 nädalat, 2 ööpäeva');
        test.equal(textformatted_2[1], '2 a, 2 kuud, 2 näd, 2 päeva');
        test.equal(textformatted_2[2], '2 a, 2 k, 2 n, 2 p');
        test.equal(textformatted_2[3], '2 a 2 k 2 n 2 p');

        test.equal(clockformatted_1[0], '1 tund, 1 minut, 1 sekund');
        test.equal(clockformatted_1[1], '1 t, 1 min, 1 sek');
        test.equal(clockformatted_1[2], '1 t, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 t 1 min 1 s');

        test.equal(clockformatted_2[0], '2 tundi, 2 minutit, 2 sekundit');
        test.equal(clockformatted_2[1], '2 t, 2 min, 2 sek');
        test.equal(clockformatted_2[2], '2 t, 2 min, 2 s');
        test.equal(clockformatted_2[3], '2 t 2 min 2 s');

        test.done();
    },
    testDurFmt_fa_AF: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fa-AF", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '‏1 سال،‏ 1 ماه،‏ 1 هفته، و 1 روز');
        test.equal(textformatted_1[1], '‏1 سال،‏ 1 ماه،‏ 1 هفته،‏ 1 روز');
        test.equal(textformatted_1[2], '‏1 سال 1 ماه 1 هفته 1 روز');
        test.equal(textformatted_1[3], '‏1 سال 1 ماه 1 هفته 1 روز');

        test.equal(textformatted_2[0], '‏2 سال،‏ 2 ماه،‏ 2 هفته، و 2 روز');
        test.equal(textformatted_2[1], '‏2 سال،‏ 2 ماه،‏ 2 هفته،‏ 2 روز');
        test.equal(textformatted_2[2], '‏2 سال 2 ماه 2 هفته 2 روز');
        test.equal(textformatted_2[3], '‏2 سال 2 ماه 2 هفته 2 روز');

        test.equal(clockformatted_1[0], '‏1 ساعت،‏ 1 دقیقه، و 1 ثانیه');
        test.equal(clockformatted_1[1], '‏1 ساعت،‏ 1 دقیقه،‏ 1 ثانیه');
        test.equal(clockformatted_1[2], '‏1 ساعت 1 دقیقه 1 ث');
        test.equal(clockformatted_1[3], '‏1 ساعت 1 دقیقه 1 ث');

        test.equal(clockformatted_2[0], '‏2 ساعت،‏ 2 دقیقه، و 2 ثانیه');
        test.equal(clockformatted_2[1], '‏2 ساعت،‏ 2 دقیقه،‏ 2 ثانیه');
        test.equal(clockformatted_2[2], '‏2 ساعت 2 دقیقه 2 ث');
        test.equal(clockformatted_2[3], '‏2 ساعت 2 دقیقه 2 ث');

        test.done();
    },
    testDurFmt_fa_IR: function(test) {
        test.expect(16);
        // 1 18
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_18 = [];
        var clockformatted_1 = [],clockformatted_18 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fa-IR", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_18.push(textfmt.format({year: 18,month: 18,week: 18,day: 18}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_18.push(textfmt.format({hour: 18,minute: 18,second: 18}).toString());
        }

        test.equal(textformatted_1[0], '‏1 سال،‏ 1 ماه،‏ 1 هفته، و 1 روز');
        test.equal(textformatted_1[1], '‏1 سال،‏ 1 ماه،‏ 1 هفته،‏ 1 روز');
        test.equal(textformatted_1[2], '‏1 سال 1 ماه 1 هفته 1 روز');
        test.equal(textformatted_1[3], '‏1 سال 1 ماه 1 هفته 1 روز');

        test.equal(textformatted_18[0], '‏18 سال،‏ 18 ماه،‏ 18 هفته، و 18 روز');
        test.equal(textformatted_18[1], '‏18 سال،‏ 18 ماه،‏ 18 هفته،‏ 18 روز');
        test.equal(textformatted_18[2], '‏18 سال 18 ماه 18 هفته 18 روز');
        test.equal(textformatted_18[3], '‏18 سال 18 ماه 18 هفته 18 روز');

        test.equal(clockformatted_1[0], '‏1 ساعت،‏ 1 دقیقه، و 1 ثانیه');
        test.equal(clockformatted_1[1], '‏1 ساعت،‏ 1 دقیقه،‏ 1 ثانیه');
        test.equal(clockformatted_1[2], '‏1 ساعت 1 دقیقه 1 ث');
        test.equal(clockformatted_1[3], '‏1 ساعت 1 دقیقه 1 ث');

        test.equal(clockformatted_18[0], '‏18 ساعت،‏ 18 دقیقه، و 18 ثانیه');
        test.equal(clockformatted_18[1], '‏18 ساعت،‏ 18 دقیقه،‏ 18 ثانیه');
        test.equal(clockformatted_18[2], '‏18 ساعت 18 دقیقه 18 ث');
        test.equal(clockformatted_18[3], '‏18 ساعت 18 دقیقه 18 ث');

        test.done();
    },
    testDurFmt_fi_FI: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fi-FI", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 vuosi, 1 kuukausi, 1 viikko ja 1 päivä');
        test.equal(textformatted_1[1], '1 v, 1 kk, 1 vk, 1 pv');
        test.equal(textformatted_1[2], '1v, 1kk, 1vk, 1pv');
        test.equal(textformatted_1[3], '1v 1kk 1vk 1pv')

        test.equal(textformatted_17[0], '17 vuotta, 17 kuukautta, 17 viikkoa ja 17 päivää');
        test.equal(textformatted_17[1], '17 v, 17 kk, 17 vk, 17 pv');
        test.equal(textformatted_17[2], '17v, 17kk, 17vk, 17pv');
        test.equal(textformatted_17[3], '17v 17kk 17vk 17pv');

        test.equal(clockformatted_1[0], '1 tunti, 1 minuutti ja 1 sekunti');
        test.equal(clockformatted_1[1], '1 t, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1t, 1min, 1s');
        test.equal(clockformatted_1[3], '1t 1min 1s');

        test.equal(clockformatted_17[0], '17 tuntia, 17 minuuttia ja 17 sekuntia');
        test.equal(clockformatted_17[1], '17 t, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17t, 17min, 17s');
        test.equal(clockformatted_17[3], '17t 17min 17s');

        test.done();
    },
    testDurFmt_fr_BE: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-BE", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_16[0], '16 ans, 16 mois, 16 semaines et 16 jours');
        test.equal(textformatted_16[1], '16 ans, 16 m., 16 sem., 16 j');
        test.equal(textformatted_16[2], '16a, 16m., 16sem., 16j');
        test.equal(textformatted_16[3], '16a 16m. 16sem. 16j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_16[0], '16 heures, 16 minutes et 16 secondes');
        test.equal(clockformatted_16[1], '16 h, 16 min, 16 s');
        test.equal(clockformatted_16[2], '16h, 16min, 16s');
        test.equal(clockformatted_16[3], '16h 16min 16s');

        test.done();
    },
    testDurFmt_fr_CA: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-CA", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m, 1sem, 1j');
        test.equal(textformatted_1[3], '1a 1m 1sem 1j');

        test.equal(textformatted_17[0], '17 ans, 17 mois, 17 semaines et 17 jours');
        test.equal(textformatted_17[1], '17 ans, 17 m., 17 sem., 17 j');
        test.equal(textformatted_17[2], '17a, 17m, 17sem, 17j');
        test.equal(textformatted_17[3], '17a 17m 17sem 17j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_17[0], '17 heures, 17 minutes et 17 secondes');
        test.equal(clockformatted_17[1], '17 h, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17h, 17m, 17s');
        test.equal(clockformatted_17[3], '17h 17m 17s');

        test.done();
    },
    testDurFmt_fr_CH: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-CH", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_17[0], '17 ans, 17 mois, 17 semaines et 17 jours');
        test.equal(textformatted_17[1], '17 ans, 17 m., 17 sem., 17 j');
        test.equal(textformatted_17[2], '17a, 17m., 17sem., 17j');
        test.equal(textformatted_17[3], '17a 17m. 17sem. 17j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_17[0], '17 heures, 17 minutes et 17 secondes');
        test.equal(clockformatted_17[1], '17 h, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17h, 17min, 17s');
        test.equal(clockformatted_17[3], '17h 17min 17s');

        test.done();
    },
    testDurFmt_fr_FR: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-FR", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        // CLDR 34 chang

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_17[0], '17 ans, 17 mois, 17 semaines et 17 jours');
        test.equal(textformatted_17[1], '17 ans, 17 m., 17 sem., 17 j');
        test.equal(textformatted_17[2], '17a, 17m., 17sem., 17j');
        test.equal(textformatted_17[3], '17a 17m. 17sem. 17j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_17[0], '17 heures, 17 minutes et 17 secondes');
        test.equal(clockformatted_17[1], '17 h, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17h, 17min, 17s');
        test.equal(clockformatted_17[3], '17h 17min 17s');

        test.done();
    },
    testDurFmt_fr_LU: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-LU", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }
        // CLDR 34 change

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_16[0], '16 ans, 16 mois, 16 semaines et 16 jours');
        test.equal(textformatted_16[1], '16 ans, 16 m., 16 sem., 16 j');
        test.equal(textformatted_16[2], '16a, 16m., 16sem., 16j');
        test.equal(textformatted_16[3], '16a 16m. 16sem. 16j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_16[0], '16 heures, 16 minutes et 16 secondes');
        test.equal(clockformatted_16[1], '16 h, 16 min, 16 s');
        test.equal(clockformatted_16[2], '16h, 16min, 16s');
        test.equal(clockformatted_16[3], '16h 16min 16s');

        test.done();
    },
    testDurFmt_ga_IE: function(test) {
        test.expect(40);
        // 1 2 3 7 11

        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [],textformatted_7 = [],textformatted_11 = [];
        var clockformatted_1 = [],clockformatted_2 = [],clockformatted_3 = [],clockformatted_7 = [],clockformatted_11 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ga-IE", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_7.push(textfmt.format({year: 7,month: 7,week: 7,day: 7}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_7.push(textfmt.format({hour: 7,minute: 7,second: 7}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
        }

        test.equal(textformatted_1[0], '1 bhliain, 1 mhí, 1 scht agus 1 lá');
        test.equal(textformatted_1[1], '1 bl, 1 mí, 1 scht, 1 lá');
        test.equal(textformatted_1[2], '1 bl, 1m, 1 scht, 1 lá');
        test.equal(textformatted_1[3], '1 bl 1m 1 scht 1 lá');

        test.equal(textformatted_2[0], '2 bhl, 2 mhí, 2 scht agus 2 lá');
        test.equal(textformatted_2[1], '2 bl, 2 mí, 2 scht, 2 lá');
        test.equal(textformatted_2[2], '2 bl, 2m, 2 scht, 2 lá');
        test.equal(textformatted_2[3], '2 bl 2m 2 scht 2 lá');

        test.equal(textformatted_3[0], '3 bl, 3 mhí, 3 scht agus 3 lá');
        test.equal(textformatted_3[1], '3 bl, 3 mí, 3 scht, 3 lá');
        test.equal(textformatted_3[2], '3 bl, 3m, 3 scht, 3 lá');
        test.equal(textformatted_3[3], '3 bl 3m 3 scht 3 lá');

        test.equal(textformatted_7[0], '7 mbl, 7 mí, 7 scht agus 7 lá');
        test.equal(textformatted_7[1], '7 bl, 7 mí, 7 scht, 7 lá');
        test.equal(textformatted_7[2], '7 bl, 7m, 7 scht, 7 lá');
        test.equal(textformatted_7[3], '7 bl 7m 7 scht 7 lá');

        test.equal(textformatted_11[0], '11 bl, 11 mí, 11 scht agus 11 lá');
        test.equal(textformatted_11[1], '11 bl, 11 m, 11 scht, 11 lá');
        test.equal(textformatted_11[2], '11 bl, 11 m, 11 scht, 11 lá');
        test.equal(textformatted_11[3], '11 bl 11 m 11 scht 11 lá');

        test.equal(clockformatted_1[0], '1 u, 1 nóim agus 1 soic');
        test.equal(clockformatted_1[1], '1 u, 1 nóim, 1 soic');
        test.equal(clockformatted_1[2], '1 u, 1 nóim, 1 soic' );
        test.equal(clockformatted_1[3], '1 u 1 nóim 1 soic');

        test.equal(clockformatted_2[0], '2 u, 2 nóim agus 2 shoic');
        test.equal(clockformatted_2[1], '2 u, 2 nóim, 2 soic');
        test.equal(clockformatted_2[2], '2 u, 2 nóim, 2 soic');
        test.equal(clockformatted_2[3], '2 u 2 nóim 2 soic');

        test.equal(clockformatted_3[0], '3 u, 3 nóim agus 3 shoic');
        test.equal(clockformatted_3[1], '3 u, 3 nóim, 3 soic');
        test.equal(clockformatted_3[2], '3 u, 3 nóim, 3 soic');
        test.equal(clockformatted_3[3], '3 u 3 nóim 3 soic');

        test.equal(clockformatted_7[0], '7 u, 7 nóim agus 7 soic');
        test.equal(clockformatted_7[1], '7 u, 7 nóim, 7 soic');
        test.equal(clockformatted_7[2], '7 u, 7n, 7 soic');
        test.equal(clockformatted_7[3], '7 u 7n 7 soic');

        test.equal(clockformatted_11[0], '11 u, 11 nóim agus 11 soic');
        test.equal(clockformatted_11[1], '11 u, 11 nóim, 11 soic');
        test.equal(clockformatted_11[2], '11 u, 11 nóim, 11 soic');
        test.equal(clockformatted_11[3], '11 u 11 nóim 11 soic');

        test.done();
    },
    testDurFmt_gu_IN: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "gu-IN", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 વર્ષ, 1 મહિનો, 1 અઠવાડિયું, 1 દિવસ');
        test.equal(textformatted_1[1], '1 વર્ષ, 1 મહિનો, 1 અઠ., 1 દિવસ');
        test.equal(textformatted_1[2], '1 વ, 1 મ, 1 અઠ., 1 દિ');
        test.equal(textformatted_1[3], '1 વ, 1 મ, 1 અઠ., 1 દિ');

        test.equal(textformatted_2[0], '2 વર્ષ, 2 મહિના, 2 અઠવાડિયા, 2 દિવસ');
        test.equal(textformatted_2[1], '2 વર્ષ, 2 મહિના, 2 અઠ., 2 દિવસ');
        test.equal(textformatted_2[2], '2 વ, 2 મ, 2 અઠ., 2 દિ');
        test.equal(textformatted_2[3], '2 વ, 2 મ, 2 અઠ., 2 દિ');

        test.equal(clockformatted_1[0], '1 કલાક, 1 મિનિટ, 1 સેકંડ');
        test.equal(clockformatted_1[1], '1 કલાક, 1 મિનિટ, 1 સેકંડ');
        test.equal(clockformatted_1[2], '1 ક, 1 મિ, 1 સે');
        test.equal(clockformatted_1[3], '1 ક, 1 મિ, 1 સે');

        test.equal(clockformatted_2[0], '2 કલાક, 2 મિનિટ, 2 સેકંડ');
        test.equal(clockformatted_2[1], '2 કલાક, 2 મિનિટ, 2 સેકંડ');
        test.equal(clockformatted_2[2], '2 ક, 2 મિ, 2 સે');
        test.equal(clockformatted_2[3], '2 ક, 2 મિ, 2 સે');

        test.done();
    },
    testDurFmt_he_IL: function(test) {
        test.expect(32);
        // 1 2 20 19
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_20 = [],textformatted_19 = [];
        var clockformatted_1 = [],clockformatted_2 = [],clockformatted_20 = [],clockformatted_19 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "he-IL", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_20.push(textfmt.format({year: 20,month: 20,week: 20,day: 20}).toString());
            textformatted_19.push(textfmt.format({year: 19,month: 19,week: 19,day: 19}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_20.push(textfmt.format({hour: 20,minute: 20,second: 20}).toString());
            clockformatted_19.push(textfmt.format({hour: 19,minute: 19,second: 19}).toString());
        }

        test.equal(textformatted_1[0], '‏1 שנה, 1 חודש, 1 שבוע ו-1 יום');
        test.equal(textformatted_1[1], '‏1 שנה, 1 ח׳, 1 שבוע, 1 יום');
        test.equal(textformatted_1[2], '‏1 ש′ 1 ח׳ 1 ש′ 1 י׳');
        test.equal(textformatted_1[3], '‏1 ש′ 1 ח׳ 1 ש′ 1 י׳');

        test.equal(textformatted_2[0], '‏2 שנים, חודשיים, שבועיים ו-יומיים');
        test.equal(textformatted_2[1], '‏2 שנים, 2 ח׳, שבועיים, יומיים');
        test.equal(textformatted_2[2], '‏2 ש′ 2 ח׳ 2 ש′ 2 י׳');
        test.equal(textformatted_2[3], '‏2 ש′ 2 ח׳ 2 ש′ 2 י׳');

        test.equal(textformatted_19[0], '‏19 שנים, 19 חודשים, 19 שבועות ו-19 ימים');
        test.equal(textformatted_19[1], '‏19 שנים, 19 ח׳, 19 שבועות, 19 ימ׳');
        test.equal(textformatted_19[2], '‏19 ש′ 19 ח׳ 19 ש′ 19 י׳');
        test.equal(textformatted_19[3], '‏19 ש′ 19 ח׳ 19 ש′ 19 י׳');

        test.equal(clockformatted_1[0], '‏1 שעה, 1 דקה ו-1 שניה');
        test.equal(clockformatted_1[1], '‏1 שעה, 1 דק׳, 1 שנ׳');
        test.equal(clockformatted_1[2], '‏1 שע׳ 1 דק׳ 1 שנ׳');
        test.equal(clockformatted_1[3], '‏1 שע׳ 1 דק׳ 1 שנ׳');

        test.equal(clockformatted_2[0], '‏שעתיים, שתי דקות ו-שתי שניות');
        test.equal(clockformatted_2[1], '‏שעתיים, 2 דק׳, 2 שנ׳');
        test.equal(clockformatted_2[2], '‏2 שע׳ 2 דק׳ 2 שנ׳');
        test.equal(clockformatted_2[3], '‏2 שע׳ 2 דק׳ 2 שנ׳');

        test.equal(clockformatted_19[0], '‏19 שעות, 19 דקות ו-19 שניות');
        test.equal(clockformatted_19[1], '‏19 שע׳, 19 דק׳, 19 שנ׳');
        test.equal(clockformatted_19[2], '‏19 שע׳ 19 דק׳ 19 שנ׳');
        test.equal(clockformatted_19[3], '‏19 שע׳ 19 דק׳ 19 שנ׳');

        // The `many` category has been removed since CLDR 42.
        var platform = ilib._getPlatform();
        if (platform === "nodejs") {
            var cldrVersion = Number(process.versions["cldr"]);
            if (Number(cldrVersion) < 36) { // Intl.PluralRules doesn't support this locale until this version.
                test.equal(textformatted_20[0], '‏20 שנים, 20 חודשים, 20 שבועות ו-20 ימים');
                test.equal(textformatted_20[1], '‏20 שנים, 20 ח׳, 20 שבועות, 20 ימ׳');
                test.equal(textformatted_20[2], '‏20 ש′ 20 ח׳ 20 ש′ 20 י׳');
                test.equal(textformatted_20[3], '‏20 ש′ 20 ח׳ 20 ש′ 20 י׳');

                test.equal(clockformatted_20[0], '‏20 שעות, 20 דקות ו-20 שניות');
                test.equal(clockformatted_20[1], '‏20 שע׳, 20 דק׳, 20 שנ׳');
                test.equal(clockformatted_20[2], '‏20 שע׳ 20 דק׳ 20 שנ׳');
                test.equal(clockformatted_20[3], '‏20 שע׳ 20 דק׳ 20 שנ׳');
            } else if (Number(cldrVersion) < 41) {
                //
                test.equal(textformatted_20[0], '‏20 שנים, 20 חודשים, 20 שבועות ו-20 יום');
                test.equal(textformatted_20[1], '‏20 שנים, 20 ח׳, 20 שבועות, 20 ימ׳');
                test.equal(textformatted_20[2], '‏20 ש′ 20 ח׳ 20 ש′ 20 י׳');
                test.equal(textformatted_20[3], '‏20 ש′ 20 ח׳ 20 ש′ 20 י׳');

                test.equal(clockformatted_20[0], '‏20 שעות, 20 דקות ו-‏20 שניות');
                test.equal(clockformatted_20[1], '‏20 שע׳, 20 דק׳, 20 שנ׳');
                test.equal(clockformatted_20[2], '‏20 שע׳ 20 דק׳ 20 שנ׳');
                test.equal(clockformatted_20[3], '‏20 שע׳ 20 דק׳ 20 שנ׳');
            
            } else if (Number(cldrVersion) < 42) { // The `many` category has been removed since CLDR 42.
                test.equal(textformatted_20[0], '‏20 שנים, 20 חודשים, 20 שבועות ו-20 יום');
                test.equal(textformatted_20[1], '‏20 שנים, 20 ח׳, 20 שבועות, 20 ימ׳');
                test.equal(textformatted_20[2], '‏20 ש′ 20 ח׳ 20 ש′ 20 י׳');
                test.equal(textformatted_20[3], '‏20 ש′ 20 ח׳ 20 ש′ 20 י׳');

                test.equal(clockformatted_20[0], '‏20 שעות, 20 דקות ו-‏20 שניות');
                test.equal(clockformatted_20[1], '‏20 שע׳, 20 דק׳, 20 שנ׳');
                test.equal(clockformatted_20[2], '‏20 שע׳ 20 דק׳ 20 שנ׳');
                test.equal(clockformatted_20[3], '‏20 שע׳ 20 דק׳ 20 שנ׳');
            } else {
                test.equal(textformatted_20[0], '‏20 שנים, 20 חודשים, 20 שבועות ו-20 ימים');
                test.equal(textformatted_20[1], '‏20 שנים, 20 ח׳, 20 שבועות, 20 ימ׳');
                test.equal(textformatted_20[2], '‏20 ש′ 20 ח׳ 20 ש′ 20 י׳');
                test.equal(textformatted_20[3], '‏20 ש′ 20 ח׳ 20 ש′ 20 י׳');

                test.equal(clockformatted_20[0], '‏20 שעות, 20 דקות ו-20 שניות');
                test.equal(clockformatted_20[1], '‏20 שע׳, 20 דק׳, 20 שנ׳');
                test.equal(clockformatted_20[2], '‏20 שע׳ 20 דק׳ 20 שנ׳');
                test.equal(clockformatted_20[3], '‏20 שע׳ 20 דק׳ 20 שנ׳');
            }
        } else if (platform === "browser") {
            var browser = ilib._getBrowser();
            if (browser === "chrome" && getChromeVersion() >= 110) {
                test.equal(textformatted_20[0], '‏20 שנים, 20 חודשים, 20 שבועות ו-20 ימים');
                test.equal(textformatted_20[1], '‏20 שנים, 20 ח׳, 20 שבועות, 20 ימ׳');
                test.equal(textformatted_20[2], '‏20 ש′ 20 ח׳ 20 ש′ 20 י׳');
                test.equal(textformatted_20[3], '‏20 ש′ 20 ח׳ 20 ש′ 20 י׳');

                test.equal(clockformatted_20[0], '‏20 שעות, 20 דקות ו-20 שניות');
                test.equal(clockformatted_20[1], '‏20 שע׳, 20 דק׳, 20 שנ׳');
                test.equal(clockformatted_20[2], '‏20 שע׳ 20 דק׳ 20 שנ׳');
                test.equal(clockformatted_20[3], '‏20 שע׳ 20 דק׳ 20 שנ׳');
            } else {
                test.equal(textformatted_20[0], '‏20 שנים, 20 חודשים, 20 שבועות ו-20 יום');
                test.equal(textformatted_20[1], '‏20 שנים, 20 ח׳, 20 שבועות, 20 ימ׳');
                test.equal(textformatted_20[2], '‏20 ש′ 20 ח׳ 20 ש′ 20 י׳');
                test.equal(textformatted_20[3], '‏20 ש′ 20 ח׳ 20 ש′ 20 י׳');

                test.equal(clockformatted_20[0], '‏20 שעות, 20 דקות ו-‏20 שניות');
                test.equal(clockformatted_20[1], '‏20 שע׳, 20 דק׳, 20 שנ׳');
                test.equal(clockformatted_20[2], '‏20 שע׳ 20 דק׳ 20 שנ׳');
                test.equal(clockformatted_20[3], '‏20 שע׳ 20 דק׳ 20 שנ׳');
            }
        } else {
            test.equal(textformatted_20[0], '‏20 שנים, 20 חודשים, 20 שבועות ו-20 ימים');
            test.equal(textformatted_20[1], '‏20 שנים, 20 ח׳, 20 שבועות, 20 ימ׳');
            test.equal(textformatted_20[2], '‏20 ש′ 20 ח׳ 20 ש′ 20 י׳');
            test.equal(textformatted_20[3], '‏20 ש′ 20 ח׳ 20 ש′ 20 י׳');

            test.equal(clockformatted_20[0], '‏20 שעות, 20 דקות ו-20 שניות');
            test.equal(clockformatted_20[1], '‏20 שע׳, 20 דק׳, 20 שנ׳');
            test.equal(clockformatted_20[2], '‏20 שע׳ 20 דק׳ 20 שנ׳');
            test.equal(clockformatted_20[3], '‏20 שע׳ 20 דק׳ 20 שנ׳');
        }
        test.done();
    },
    testDurFmt_hi_IN: function(test) {
        test.expect(16);
        // 1 2
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "hi-IN", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 वर्ष, 1 महीना, 1 सप्ताह, और 1 दिन');
        test.equal(textformatted_1[1], '1 वर्ष, 1 माह, 1 सप्ताह, 1 दिन');
        test.equal(textformatted_1[2], '1 व, 1 माह, 1 सप्ताह, 1 दि');
        test.equal(textformatted_1[3], '1 व, 1 माह, 1 सप्ताह, 1 दि');

        test.equal(textformatted_2[0], '2 वर्ष, 2 महीने, 2 सप्ताह, और 2 दिन');
        test.equal(textformatted_2[1], '2 वर्ष, 2 माह, 2 सप्ताह, 2 दिन');
        test.equal(textformatted_2[2], '2 व, 2 माह, 2 सप्ताह, 2 दि');
        test.equal(textformatted_2[3], '2 व, 2 माह, 2 सप्ताह, 2 दि');

        test.equal(clockformatted_1[0], '1 घंटा, 1 मिनट, और 1 सेकंड');
        test.equal(clockformatted_1[1], '1 घं॰, 1 मि॰, 1 से॰');
        test.equal(clockformatted_1[2], '1 घं, 1 मि, 1 से');
        test.equal(clockformatted_1[3], '1 घं, 1 मि, 1 से');

        test.equal(clockformatted_2[0], '2 घंटे, 2 मिनट, और 2 सेकंड');
        test.equal(clockformatted_2[1], '2 घं॰, 2 मि॰, 2 से॰');
        test.equal(clockformatted_2[2], '2 घं, 2 मि, 2 से');
        test.equal(clockformatted_2[3], '2 घं, 2 मि, 2 से');

        test.done();
    },
    testDurFmt_hr_HR: function(test) {
        test.expect(24);
        // 1 2 5
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [], textformatted_5 =[];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_5 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "hr-HR", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_5.push(textfmt.format({year: 5,month: 5,week: 5,day: 5}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_5.push(textfmt.format({hour: 5,minute: 5,second: 5}).toString());
        }

        test.equal(textformatted_1[0], '1 godina, 1 mjesec, 1 tjedan i 1 dan');
        test.equal(textformatted_1[1], '1 g., 1 mj., 1 tj., 1 dan');
        test.equal(textformatted_1[2], '1 g., 1 mj., 1 tj., 1 d.');
        test.equal(textformatted_1[3], '1 g. 1 mj. 1 tj. 1 d.');

        test.equal(textformatted_2[0], '2 godine, 2 mjeseca, 2 tjedna i 2 dana');
        test.equal(textformatted_2[1], '2 g., 2 mj., 2 tj., 2 dana');
        test.equal(textformatted_2[2], '2 g., 2 mj., 2 tj., 2 d.');
        test.equal(textformatted_2[3], '2 g. 2 mj. 2 tj. 2 d.');

        test.equal(textformatted_5[0], '5 godina, 5 mjeseci, 5 tjedana i 5 dana');
        test.equal(textformatted_5[1], '5 g., 5 mj., 5 tj., 5 dana');
        test.equal(textformatted_5[2], '5 g., 5 mj., 5 tj., 5 d.');
        test.equal(textformatted_5[3], '5 g. 5 mj. 5 tj. 5 d.');

        test.equal(clockformatted_1[0], '1 sat, 1 minuta i 1 sekunda');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1 h, 1 m, 1 s');
        test.equal(clockformatted_1[3], '1 h 1 m 1 s');

        test.equal(clockformatted_2[0], '2 sata, 2 minute i 2 sekunde');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2 h, 2 m, 2 s');
        test.equal(clockformatted_2[3], '2 h 2 m 2 s');

        test.equal(clockformatted_5[0], '5 sati, 5 minuta i 5 sekundi');
        test.equal(clockformatted_5[1], '5 h, 5 min, 5 s');
        test.equal(clockformatted_5[2], '5 h, 5 m, 5 s');
        test.equal(clockformatted_5[3], '5 h 5 m 5 s');

        test.done();
    },
    testDurFmt_hr_ME: function(test) {
        test.expect(24);
        // 1 4 19
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_4 = [], textformatted_19 = [];
        var clockformatted_1 = [],clockformatted_4 = [], clockformatted_19 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "hr-ME", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_4.push(textfmt.format({year: 4,month: 4,week: 4,day: 4}).toString());
            textformatted_19.push(textfmt.format({year: 19,month: 19,week: 19,day: 19}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_4.push(textfmt.format({hour: 4,minute: 4,second: 4}).toString());
            clockformatted_19.push(textfmt.format({hour: 19,minute: 19,second: 19}).toString());
        }

        test.equal(textformatted_1[0], '1 godina, 1 mjesec, 1 tjedan i 1 dan');
        test.equal(textformatted_1[1], '1 g., 1 mj., 1 tj., 1 dan');
        test.equal(textformatted_1[2], '1 g., 1 mj., 1 tj., 1 d.');
        test.equal(textformatted_1[3], '1 g. 1 mj. 1 tj. 1 d.');

        test.equal(textformatted_4[0], '4 godine, 4 mjeseca, 4 tjedna i 4 dana');
        test.equal(textformatted_4[1], '4 g., 4 mj., 4 tj., 4 dana');
        test.equal(textformatted_4[2], '4 g., 4 mj., 4 tj., 4 d.');
        test.equal(textformatted_4[3], '4 g. 4 mj. 4 tj. 4 d.');

        test.equal(textformatted_19[0], '19 godina, 19 mjeseci, 19 tjedana i 19 dana');
        test.equal(textformatted_19[1], '19 g., 19 mj., 19 tj., 19 dana');
        test.equal(textformatted_19[2], '19 g., 19 mj., 19 tj., 19 d.');
        test.equal(textformatted_19[3], '19 g. 19 mj. 19 tj. 19 d.');

        test.equal(clockformatted_1[0], '1 sat, 1 minuta i 1 sekunda');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1 h, 1 m, 1 s');
        test.equal(clockformatted_1[3], '1 h 1 m 1 s');

        test.equal(clockformatted_4[0], '4 sata, 4 minute i 4 sekunde');
        test.equal(clockformatted_4[1], '4 h, 4 min, 4 s');
        test.equal(clockformatted_4[2], '4 h, 4 m, 4 s');
        test.equal(clockformatted_4[3], '4 h 4 m 4 s');

        test.equal(clockformatted_19[0], '19 sati, 19 minuta i 19 sekundi');
        test.equal(clockformatted_19[1], '19 h, 19 min, 19 s');
        test.equal(clockformatted_19[2], '19 h, 19 m, 19 s');
        test.equal(clockformatted_19[3], '19 h 19 m 19 s');

        test.done();
    },
    testDurFmt_hr_HU: function(test) {
        test.expect(24);
        // 1 2 5
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [], textformatted_5 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_5 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "hr-HU", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_5.push(textfmt.format({year: 5,month: 5,week: 5,day: 5}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_5.push(textfmt.format({hour: 5,minute: 5,second: 5}).toString());
        }

        test.equal(textformatted_1[0], '1 godina, 1 mjesec, 1 tjedan i 1 dan');
        test.equal(textformatted_1[1], '1 g., 1 mj., 1 tj., 1 dan');
        test.equal(textformatted_1[2], '1 g., 1 mj., 1 tj., 1 d.');
        test.equal(textformatted_1[3], '1 g. 1 mj. 1 tj. 1 d.');

        test.equal(textformatted_2[0], '2 godine, 2 mjeseca, 2 tjedna i 2 dana');
        test.equal(textformatted_2[1], '2 g., 2 mj., 2 tj., 2 dana');
        test.equal(textformatted_2[2], '2 g., 2 mj., 2 tj., 2 d.');
        test.equal(textformatted_2[3], '2 g. 2 mj. 2 tj. 2 d.');

        test.equal(textformatted_5[0], '5 godina, 5 mjeseci, 5 tjedana i 5 dana');
        test.equal(textformatted_5[1], '5 g., 5 mj., 5 tj., 5 dana');
        test.equal(textformatted_5[2], '5 g., 5 mj., 5 tj., 5 d.');
        test.equal(textformatted_5[3], '5 g. 5 mj. 5 tj. 5 d.');

        test.equal(clockformatted_1[0], '1 sat, 1 minuta i 1 sekunda');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1 h, 1 m, 1 s');
        test.equal(clockformatted_1[3], '1 h 1 m 1 s');

        test.equal(clockformatted_2[0], '2 sata, 2 minute i 2 sekunde');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2 h, 2 m, 2 s');
        test.equal(clockformatted_2[3], '2 h 2 m 2 s');

        test.equal(clockformatted_5[0], '5 sati, 5 minuta i 5 sekundi');
        test.equal(clockformatted_5[1], '5 h, 5 min, 5 s');
        test.equal(clockformatted_5[2], '5 h, 5 m, 5 s');
        test.equal(clockformatted_5[3], '5 h 5 m 5 s');

        test.done();
    },
    testDurFmt_id_ID: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "id-ID", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 tahun, 1 bulan, 1 minggu, 1 hari');
        test.equal(textformatted_1[1], '1 thn, 1 bln, 1 mgg, 1 hr');
        test.equal(textformatted_1[2], '1 thn, 1 bln, 1 mgg, 1 hr');
        test.equal(textformatted_1[3], '1 thn, 1 bln, 1 mgg, 1 hr');

        test.equal(textformatted_2[0], '2 tahun, 2 bulan, 2 minggu, 2 hari');
        test.equal(textformatted_2[1], '2 thn, 2 bln, 2 mgg, 2 hr');
        test.equal(textformatted_2[2], '2 thn, 2 bln, 2 mgg, 2 hr');
        test.equal(textformatted_2[3], '2 thn, 2 bln, 2 mgg, 2 hr');

        test.equal(clockformatted_1[0], '1 jam, 1 menit, 1 detik');
        test.equal(clockformatted_1[1], '1 j, 1 mnt, 1 dtk');
        test.equal(clockformatted_1[2], '1 j, 1 mnt, 1 dtk');
        test.equal(clockformatted_1[3], '1 j, 1 mnt, 1 dtk');

        test.equal(clockformatted_2[0], '2 jam, 2 menit, 2 detik');
        test.equal(clockformatted_2[1], '2 j, 2 mnt, 2 dtk');
        test.equal(clockformatted_2[2], '2 j, 2 mnt, 2 dtk');
        test.equal(clockformatted_2[3], '2 j, 2 mnt, 2 dtk');

        test.done();
    },
    testDurFmt_is_IS: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "is-IS", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 ár, 1 mánuður, 1 vika og 1 dagur');
        test.equal(textformatted_1[1], '1 ár, 1 mán., 1 vika, 1 dagur');
        test.equal(textformatted_1[2], '1á, 1 mán., 1 v., 1 d.');
        test.equal(textformatted_1[3], '1á 1 mán. 1 v. 1 d.');

        test.equal(textformatted_17[0], '17 ár, 17 mánuðir, 17 vikur og 17 dagar');
        test.equal(textformatted_17[1], '17 ár, 17 mán., 17 vikur, 17 dagar');
        test.equal(textformatted_17[2], '17á, 17 mán., 17 v., 17 d.');
        test.equal(textformatted_17[3], '17á 17 mán. 17 v. 17 d.');

        test.equal(clockformatted_1[0], '1 klukkustund, 1 mínúta og 1 sekúnda');
        test.equal(clockformatted_1[1], '1 klst., 1 mín., 1 sek.');
        test.equal(clockformatted_1[2], '1 klst., 1 mín., 1 sek.');
        test.equal(clockformatted_1[3], '1 klst. 1 mín. 1 sek.');

        test.equal(clockformatted_17[0], '17 klukkustundir, 17 mínútur og 17 sekúndur');
        test.equal(clockformatted_17[1], '17 klst., 17 mín., 17 sek.');
        test.equal(clockformatted_17[2], '17 klst., 17 mín., 17 sek.');
        test.equal(clockformatted_17[3], '17 klst. 17 mín. 17 sek.');

        test.done();
    },
    testDurFmt_it_CH: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "it-CH", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 anno, 1 mese, 1 settimana e 1 giorno');
        test.equal(textformatted_1[1], '1 anno, 1 mese, 1 sett., 1 giorno');
        test.equal(textformatted_1[2], '1anno, 1 mese, 1sett., 1g');
        test.equal(textformatted_1[3], '1anno 1 mese 1sett. 1g');

        test.equal(textformatted_17[0], '17 anni, 17 mesi, 17 settimane e 17 giorni');
        test.equal(textformatted_17[1], '17 anni, 17 mesi, 17 sett., 17 giorni' );
        test.equal(textformatted_17[2], '17anni, 17 mesi, 17sett., 17gg');
        test.equal(textformatted_17[3], '17anni 17 mesi 17sett. 17gg');

        test.equal(clockformatted_1[0], '1 ora, 1 minuto e 1 secondo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_17[0], '17 ore, 17 minuti e 17 secondi');
        test.equal(clockformatted_17[1], '17 h, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17h, 17min, 17s');
        test.equal(clockformatted_17[3], '17h 17min 17s');

        test.done();
    },
    testDurFmt_it_IT: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "it-IT", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 anno, 1 mese, 1 settimana e 1 giorno');
        test.equal(textformatted_1[1], '1 anno, 1 mese, 1 sett., 1 giorno');
        test.equal(textformatted_1[2], '1anno, 1 mese, 1sett., 1g');
        test.equal(textformatted_1[3], '1anno 1 mese 1sett. 1g');

        test.equal(textformatted_2[0], '2 anni, 2 mesi, 2 settimane e 2 giorni');
        test.equal(textformatted_2[1], '2 anni, 2 mesi, 2 sett., 2 giorni');
        test.equal(textformatted_2[2], '2anni, 2 mesi, 2sett., 2gg');
        test.equal(textformatted_2[3], '2anni 2 mesi 2sett. 2gg');

        test.equal(clockformatted_1[0], '1 ora, 1 minuto e 1 secondo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 ore, 2 minuti e 2 secondi');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_ja_JP: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ja-JP", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 年 1 か月 1 週間 1 日');
        test.equal(textformatted_1[1], '1 年 1 か月 1 週間 1 日');
        test.equal(textformatted_1[2], '1y1m1w1d');
        test.equal(textformatted_1[3], '1y1m1w1d');

        test.equal(textformatted_16[0], '16 年 16 か月 16 週間 16 日');
        test.equal(textformatted_16[1], '16 年 16 か月 16 週間 16 日');
        test.equal(textformatted_16[2], '16y16m16w16d');
        test.equal(textformatted_16[3], '16y16m16w16d');

        test.equal(clockformatted_1[0], '1 時間 1 分 1 秒');
        test.equal(clockformatted_1[1], '1 時間 1 分 1 秒');
        test.equal(clockformatted_1[2], '1h1m1s');
        test.equal(clockformatted_1[3], '1h1m1s');

        test.equal(clockformatted_16[0], '16 時間 16 分 16 秒');
        test.equal(clockformatted_16[1], '16 時間 16 分 16 秒');
        test.equal(clockformatted_16[2], '16h16m16s');
        test.equal(clockformatted_16[3], '16h16m16s');

        test.done();
    },
    testDurFmt_kk_KZ: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "kk-KZ", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 жыл 1 ай 1 апта 1 күн');
        test.equal(textformatted_1[1], '1 ж. 1 ай 1 ап. 1 күн');
        test.equal(textformatted_1[2], '1 ж. 1 ай 1 ап. 1 к.');
        test.equal(textformatted_1[3], '1 ж. 1 ай 1 ап. 1 к.');

        test.equal(textformatted_2[0], '2 жыл 2 ай 2 апта 2 күн');
        test.equal(textformatted_2[1], '2 ж. 2 ай 2 ап. 2 күн');
        test.equal(textformatted_2[2], '2 ж. 2 ай 2 ап. 2 к.');
        test.equal(textformatted_2[3], '2 ж. 2 ай 2 ап. 2 к.');

        test.equal(clockformatted_1[0], '1 сағат 1 минут 1 секунд');
        test.equal(clockformatted_1[1], '1 сағ 1 мин 1 с');
        test.equal(clockformatted_1[2], '1 сағ 1 мин 1 с');
        test.equal(clockformatted_1[3], '1 сағ 1 мин 1 с');

        test.equal(clockformatted_2[0], '2 сағат 2 минут 2 секунд')
        test.equal(clockformatted_2[1], '2 сағ 2 мин 2 с');
        test.equal(clockformatted_2[2], '2 сағ 2 мин 2 с');
        test.equal(clockformatted_2[3], '2 сағ 2 мин 2 с');

        test.done();
    },
    testDurFmt_kn_IN: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "kn-IN", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 ವರ್ಷವು, 1 ತಿಂಗಳು, 1 ವಾರವು, 1 ದಿನವು');
        test.equal(textformatted_1[1], '1 ವರ್ಷ, 1 ತಿಂ., 1 ವಾರ, 1 ದಿನ');
        test.equal(textformatted_1[2], '1ವ, 1ತಿಂ., 1ವಾ, 1ದಿ');
        test.equal(textformatted_1[3], '1ವ, 1ತಿಂ., 1ವಾ, 1ದಿ');

        test.equal(textformatted_2[0], '2 ವರ್ಷಗಳು, 2 ತಿಂಗಳು, 2 ವಾರಗಳು, 2 ದಿನಗಳು');
        test.equal(textformatted_2[1], '2 ವರ್ಷಗಳು, 2 ತಿಂ.ಗಳು, 2 ವಾರಗಳು, 2 ದಿನಗಳು');
        test.equal(textformatted_2[2], '2ವ, 2ತಿಂ., 2ವಾ, 2ದಿ');
        test.equal(textformatted_2[3], '2ವ, 2ತಿಂ., 2ವಾ, 2ದಿ');

        test.equal(clockformatted_1[0], '1 ಗಂಟೆಯು, 1 ನಿಮಿಷವು, 1 ಸೆಕೆಂಡ್');
        test.equal(clockformatted_1[1], '1 ಗಂ., 1 ನಿಮಿ, 1 ಸೆಕೆಂ');
        test.equal(clockformatted_1[2], '1ಗಂ., 1ನಿಮಿ, 1ಸೆಕೆಂ');
        test.equal(clockformatted_1[3], '1ಗಂ., 1ನಿಮಿ, 1ಸೆಕೆಂ');

        test.equal(clockformatted_2[0], '2 ಗಂಟೆಗಳು, 2 ನಿಮಿಷಗಳು, 2 ಸೆಕೆಂಡುಗಳು');
        test.equal(clockformatted_2[1], '2 ಗಂ., 2 ನಿಮಿ, 2 ಸೆಕೆಂ');
        test.equal(clockformatted_2[2], '2ಗಂ., 2ನಿಮಿ, 2 ಸೆಕೆಂ');
        test.equal(clockformatted_2[3], '2ಗಂ., 2ನಿಮಿ, 2 ಸೆಕೆಂ');

        test.done();
    },
    testDurFmt_ko_KR: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ko-KR", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1년 1개월 1주 1일');
        test.equal(textformatted_1[1], '1년 1개월 1주 1일');
        test.equal(textformatted_1[2], '1년 1개월 1주 1일');
        test.equal(textformatted_1[3], '1년 1개월 1주 1일');

        test.equal(textformatted_2[0], '2년 2개월 2주 2일');
        test.equal(textformatted_2[1], '2년 2개월 2주 2일');
        test.equal(textformatted_2[2], '2년 2개월 2주 2일');
        test.equal(textformatted_2[3], '2년 2개월 2주 2일');

        test.equal(clockformatted_1[0], '1시간 1분 1초');
        test.equal(clockformatted_1[1], '1시간 1분 1초');
        test.equal(clockformatted_1[2], '1시간 1분 1초');
        test.equal(clockformatted_1[3], '1시간 1분 1초');

        test.equal(clockformatted_2[0], '2시간 2분 2초');
        test.equal(clockformatted_2[1], '2시간 2분 2초');
        test.equal(clockformatted_2[2], '2시간 2분 2초');
        test.equal(clockformatted_2[3], '2시간 2분 2초');

        test.done();
    },
    testDurFmt_ku_IQ: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ku-IQ", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '‏1 ساڵ, 1 مانگ, 1 هەفتە,  1 رۆژ');
        test.equal(textformatted_1[1], '‏1 ساڵ 1 مانگ 1 هەفتە 1 رۆژ');
        test.equal(textformatted_1[2], '‏1س 1م 1ﻪـ 1ر');
        test.equal(textformatted_1[3], '‏1س 1م 1ﻪـ 1ر');

        test.equal(textformatted_2[0], '‏2 ساڵ, 2 مانگ, 2 هەفتە,  2 رۆژ');
        test.equal(textformatted_2[1], '‏2 ساڵ 2 مانگ 2 هەفتە 2 رۆژ');
        test.equal(textformatted_2[2], '‏2س 2م 2ﻪـ 2ر');
        test.equal(textformatted_2[3], '‏2س 2م 2ﻪـ 2ر');

        test.equal(clockformatted_1[0], '‏1 کاتژمێر, 1 خولەک,  1 چرکە');
        test.equal(clockformatted_1[1], '‏1 کاتژ 1 خول 1 چرک');
        test.equal(clockformatted_1[2], '‏1ک 1خ 1چ');
        test.equal(clockformatted_1[3], '‏1ک 1خ 1چ');

        test.equal(clockformatted_2[0], '‏2 کاتژمێر, 2 خولەک,  2 چرکە');
        test.equal(clockformatted_2[1], '‏2 کاتژ 2 خول 2 چرک');
        test.equal(clockformatted_2[2], '‏2ک 2خ 2چ' );
        test.equal(clockformatted_2[3], '‏2ک 2خ 2چ' );

        test.done();
    },
    testDurFmt_lt_LT: function(test) {
        test.expect(24);
        // 21 9 11
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_21 = [],textformatted_9 = [],textformatted_11 = [];
        var clockformatted_21 = [],clockformatted_9 = [],clockformatted_11 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "lt-LT", style:"text", length:length[i]});

            textformatted_21.push(textfmt.format({year: 21,month: 21,week: 21,day: 21}).toString());
            textformatted_9.push(textfmt.format({year: 9,month: 9,week: 9,day: 9}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());

            clockformatted_21.push(textfmt.format({hour: 21,minute: 21,second: 21}).toString());
            clockformatted_9.push(textfmt.format({hour: 9,minute: 9,second: 9}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
        }

        test.equal(textformatted_21[0], '21 metai 21 mėnuo 21 savaitė ir 21 diena');
        test.equal(textformatted_21[1], '21 m. 21 mėn. 21 sav. 21 d.');
        test.equal(textformatted_21[2], '21 m. 21 mėn. 21 sav. 21 d.');
        test.equal(textformatted_21[3], '21 m. 21 mėn. 21 sav. 21 d.');

        test.equal(textformatted_9[0], '9 metai 9 mėnesiai 9 savaitės ir 9 dienos');
        test.equal(textformatted_9[1], '9 m. 9 mėn. 9 sav. 9 d.');
        test.equal(textformatted_9[2], '9 m. 9 mėn. 9 sav. 9 d.');
        test.equal(textformatted_9[3], '9 m. 9 mėn. 9 sav. 9 d.');

        test.equal(textformatted_11[0], '11 metų 11 mėnesių 11 savaičių ir 11 dienų');
        test.equal(textformatted_11[1], '11 m. 11 mėn. 11 sav. 11 d.');
        test.equal(textformatted_11[2], '11 m. 11 mėn. 11 sav. 11 d.');
        test.equal(textformatted_11[3], '11 m. 11 mėn. 11 sav. 11 d.');

        test.equal(clockformatted_21[0], '21 valanda 21 minutė ir 21 sekundė');
        test.equal(clockformatted_21[1], '21 val. 21 min. 21 sek.');
        test.equal(clockformatted_21[2], '21 h 21 min. 21 s');
        test.equal(clockformatted_21[3], '21 h 21 min. 21 s');

        test.equal(clockformatted_9[0], '9 valandos 9 minutės ir 9 sekundės');
        test.equal(clockformatted_9[1], '9 val. 9 min. 9 sek.');
        test.equal(clockformatted_9[2], '9 h 9 min. 9 s');
        test.equal(clockformatted_9[3], '9 h 9 min. 9 s');

        test.equal(clockformatted_11[0], '11 valandų 11 minučių ir 11 sekundžių');
        test.equal(clockformatted_11[1], '11 val. 11 min. 11 sek.');
        test.equal(clockformatted_11[2], '11 h 11 min. 11 s');
        test.equal(clockformatted_11[3], '11 h 11 min. 11 s');

        test.done();
    },
    testDurFmt_lv_LV: function(test) {
        test.expect(16);
        // 21 9
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_21 = [],textformatted_9 = [];
        var clockformatted_21 = [],clockformatted_9 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "lv-LV", style:"text", length:length[i]});

            textformatted_21.push(textfmt.format({year: 21,month: 21,week: 21,day: 21}).toString());
            textformatted_9.push(textfmt.format({year: 9,month: 9,week: 9,day: 9}).toString());

            clockformatted_21.push(textfmt.format({hour: 21,minute: 21,second: 21}).toString());
            clockformatted_9.push(textfmt.format({hour: 9,minute: 9,second: 9}).toString());
        }

        test.equal(textformatted_21[0], '21 gads, 21 mēnesis, 21 nedēļa un 21 diena');
        test.equal(textformatted_21[1], '21 g., 21 mēn., 21 ned., 21 d.');
        test.equal(textformatted_21[2], '21 g., 21 m., 21 n., 21 d.');
        test.equal(textformatted_21[3], '21 g. 21 m. 21 n. 21 d.'); // CLDR 34 change (year, month, week)

        test.equal(textformatted_9[0], '9 gadi, 9 mēneši, 9 nedēļas un 9 dienas');
        test.equal(textformatted_9[1], '9 g., 9 mēn., 9 ned., 9 d.');
        test.equal(textformatted_9[2], '9 g., 9 m., 9 n., 9 d.');
        test.equal(textformatted_9[3], '9 g. 9 m. 9 n. 9 d.');

        test.equal(clockformatted_21[0], '21 stunda, 21 minūte un 21 sekunde');
        test.equal(clockformatted_21[1], '21 st., 21 min, 21 sek.');
        test.equal(clockformatted_21[2], '21 h, 21 min, 21 s');
        test.equal(clockformatted_21[3], '21 h 21 min 21 s');

        test.equal(clockformatted_9[0], '9 stundas, 9 minūtes un 9 sekundes');
        test.equal(clockformatted_9[1], '9 st., 9 min, 9 sek.');
        test.equal(clockformatted_9[2], '9 h, 9 min, 9 s');
        test.equal(clockformatted_9[3], '9 h 9 min 9 s');

        test.done();
    },
    testDurFmt_mk_MK: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "mk-MK", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        // CLDR 34 change (hour,minute, second: short)

        test.equal(textformatted_1[0], '1 година, 1 месец, 1 седмица и 1 ден');
        test.equal(textformatted_1[1], '1 год., 1 мес., 1 сед., 1 ден');
        test.equal(textformatted_1[2], '1 г., 1 м., 1 с., 1 д.');
        test.equal(textformatted_1[3], '1 г., 1 м., 1 с., 1 д.');

        test.equal(textformatted_2[0], '2 години, 2 месеци, 2 седмици и 2 дена');
        test.equal(textformatted_2[1], '2 год., 2 мес., 2 сед., 2 дена');
        test.equal(textformatted_2[2], '2 г., 2 м., 2 с., 2 д.');
        test.equal(textformatted_2[3], '2 г., 2 м., 2 с., 2 д.');

        test.equal(clockformatted_1[0], '1 час, 1 минута и 1 секунда');
        test.equal(clockformatted_1[1], '1 ч., 1 мин., 1 сек.');
        test.equal(clockformatted_1[2], '1 ч., 1 м., 1 с.');
        test.equal(clockformatted_1[3], '1 ч., 1 м., 1 с.');

        test.equal(clockformatted_2[0], '2 часа, 2 минути и 2 секунди');
        test.equal(clockformatted_2[1], '2 ч., 2 мин., 2 сек.');
        test.equal(clockformatted_2[2], '2 ч., 2 м., 2 с.');
        test.equal(clockformatted_2[3], '2 ч., 2 м., 2 с.');

        test.done();
    },
    testDurFmt_ml_IN: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ml-IN", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 വർഷം, 1 മാസം, 1 ആഴ്ച, 1 ദിവസം');
        test.equal(textformatted_1[1], '1 വ, 1 മാസം, 1 ആ, 1 ദിവസം‌');
        test.equal(textformatted_1[2], '1 വ 1 മാ 1 ആ 1 ദി');
        test.equal(textformatted_1[3], '1 വ 1 മാ 1 ആ 1 ദി');

        test.equal(textformatted_2[0], '2 വർഷം, 2 മാസം, 2 ആഴ്ച, 2 ദിവസം');
        test.equal(textformatted_2[1], '2 വ, 2 മാസം, 2 ആ, 2 ദിവസം‌');
        test.equal(textformatted_2[2], '2 വ 2 മാ 2 ആ 2 ദി');
        test.equal(textformatted_2[3], '2 വ 2 മാ 2 ആ 2 ദി');

        test.equal(clockformatted_1[0], '1 മണിക്കൂർ, 1 മിനിറ്റ്, 1 സെക്കൻഡ്');
        test.equal(clockformatted_1[1], '1 മ, 1 മി., 1 സെ.');
        test.equal(clockformatted_1[2], '1 മ 1 മി. 1 സെ.');
        test.equal(clockformatted_1[3], '1 മ 1 മി. 1 സെ.');

        test.equal(clockformatted_2[0], '2 മണിക്കൂർ, 2 മിനിറ്റ്, 2 സെക്കൻഡ്');
        test.equal(clockformatted_2[1], '2 മ, 2 മി., 2 സെ.');
        test.equal(clockformatted_2[2], '2 മ 2 മി. 2 സെ.');
        test.equal(clockformatted_2[3], '2 മ 2 മി. 2 സെ.');

        test.done();
    },
    testDurFmt_mr_IN: function(test) {
        test.expect(16);
        // 1 18
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_18 = [];
        var clockformatted_1 = [],clockformatted_18 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "mr-IN", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_18.push(textfmt.format({year: 18,month: 18,week: 18,day: 18}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_18.push(textfmt.format({hour: 18,minute: 18,second: 18}).toString());
        }

        test.equal(textformatted_1[0], '1 वर्ष, 1 महिना, 1 आठवडा, 1 दिवस');
        test.equal(textformatted_1[1], '1 वर्ष, 1 महिना, 1 आ, 1 दिवस');
        test.equal(textformatted_1[2], '1व 1म 1आ 1दि');
        test.equal(textformatted_1[3], '1व 1म 1आ 1दि');

        test.equal(textformatted_18[0], '18 वर्षे, 18 महिने, 18 आठवडे, 18 दिवस');
        test.equal(textformatted_18[1], '18 वर्षे, 18 महिने, 18 आ, 18 दिवस');
        test.equal(textformatted_18[2], '18व 18म 18आ 18दि');
        test.equal(textformatted_18[3], '18व 18म 18आ 18दि');

        test.equal(clockformatted_1[0], '1 तास, 1 मिनिट, 1 सेकंद');
        test.equal(clockformatted_1[1], '1 ता, 1 मिनि, 1 से');
        test.equal(clockformatted_1[2], '1ता 1मि 1से');
        test.equal(clockformatted_1[3], '1ता 1मि 1से');

        test.equal(clockformatted_18[0], '18 तास, 18 मिनिटे, 18 सेकंद');
        test.equal(clockformatted_18[1], '18 ता, 18 मिनि, 18 से');
        test.equal(clockformatted_18[2], '18ता 18मि 18से');
        test.equal(clockformatted_18[3], '18ता 18मि 18से');

        test.done();
    },
    testDurFmt_ms_MY: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ms-MY", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 tahun, 1 bulan, 1 minggu, 1 hari');
        test.equal(textformatted_1[1], '1 thn, 1 bln, 1 mgu, 1 hari');
        test.equal(textformatted_1[2], '1 thn, 1 bln, 1 mgu, 1 h');
        test.equal(textformatted_1[3], '1 thn 1 bln 1 mgu 1 h');

        test.equal(textformatted_2[0], '2 tahun, 2 bulan, 2 minggu, 2 hari');
        test.equal(textformatted_2[1], '2 thn, 2 bln, 2 mgu, 2 hari');
        test.equal(textformatted_2[2], '2 thn, 2 bln, 2 mgu, 2 h');
        test.equal(textformatted_2[3], '2 thn 2 bln 2 mgu 2 h');

        test.equal(clockformatted_1[0], '1 jam, 1 minit, 1 saat');
        test.equal(clockformatted_1[1], '1 j, 1 min, 1 saat');
        test.equal(clockformatted_1[2], '1 j, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 j 1 min 1 s');

        test.equal(clockformatted_2[0], '2 jam, 2 minit, 2 saat');
        test.equal(clockformatted_2[1], '2 j, 2 min, 2 saat');
        test.equal(clockformatted_2[2], '2 j, 2 min, 2 s');
        test.equal(clockformatted_2[3], '2 j 2 min 2 s');

        test.done();
    },
    testDurFmt_nb_NO: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "nb-NO", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 år, 1 måned, 1 uke og 1 døgn');
        test.equal(textformatted_1[1], '1 år, 1 md., 1 u, 1 d');
        test.equal(textformatted_1[2], '1å, 1 m, 1u, 1d');
        test.equal(textformatted_1[3], '1å, 1 m, 1u, 1d');

        test.equal(textformatted_2[0], '2 år, 2 måneder, 2 uker og 2 døgn');
        test.equal(textformatted_2[1], '2 år, 2 md., 2 u, 2 d');
        test.equal(textformatted_2[2], '2å, 2 m, 2u, 2d');
        test.equal(textformatted_2[3], '2å, 2 m, 2u, 2d');

        test.equal(clockformatted_1[0], '1 time, 1 minutt og 1 sekund');
        test.equal(clockformatted_1[1], '1 t, 1 min, 1 sek');
        test.equal(clockformatted_1[2], '1t, 1m, 1s');
        test.equal(clockformatted_1[3], '1t, 1m, 1s');

        test.equal(clockformatted_2[0], '2 timer, 2 minutter og 2 sekunder');
        test.equal(clockformatted_2[1], '2 t, 2 min, 2 sek');
        test.equal(clockformatted_2[2], '2t, 2m, 2s');
        test.equal(clockformatted_2[3], '2t, 2m, 2s');

        test.done();
    },
    testDurFmt_nl_BE: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "nl-BE", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 jaar, 1 maand, 1 week en 1 dag');
        test.equal(textformatted_1[1], '1 jr, 1 mnd, 1 wk, 1 dag');
        test.equal(textformatted_1[2], '1 jr, 1 m, 1 w, 1 d');
        test.equal(textformatted_1[3], '1 jr, 1 m, 1 w, 1 d');

        test.equal(textformatted_2[0], '2 jaar, 2 maanden, 2 weken en 2 dagen');
        test.equal(textformatted_2[1], '2 jr, 2 mnd, 2 wkn, 2 dagen');
        test.equal(textformatted_2[2], '2 jr, 2 m, 2 w, 2 d');
        test.equal(textformatted_2[3], '2 jr, 2 m, 2 w, 2 d');

        test.equal(clockformatted_1[0], '1 uur, 1 minuut en 1 seconde');
        test.equal(clockformatted_1[1], '1 uur, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1 u, 1 m, 1 s');
        test.equal(clockformatted_1[3], '1 u, 1 m, 1 s');

        test.equal(clockformatted_2[0], '2 uur, 2 minuten en 2 seconden');
        test.equal(clockformatted_2[1], '2 uur, 2 min, 2 sec');
        test.equal(clockformatted_2[2], '2 u, 2 m, 2 s');
        test.equal(clockformatted_2[3], '2 u, 2 m, 2 s');

        test.done();
    },
    testDurFmt_nl_NL: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "nl-NL", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 jaar, 1 maand, 1 week en 1 dag');
        test.equal(textformatted_1[1], '1 jr, 1 mnd, 1 wk, 1 dag');
        test.equal(textformatted_1[2], '1 jr, 1 m, 1 w, 1 d');
        test.equal(textformatted_1[3], '1 jr, 1 m, 1 w, 1 d');

        test.equal(textformatted_2[0], '2 jaar, 2 maanden, 2 weken en 2 dagen');
        test.equal(textformatted_2[1], '2 jr, 2 mnd, 2 wkn, 2 dagen');
        test.equal(textformatted_2[2], '2 jr, 2 m, 2 w, 2 d');
        test.equal(textformatted_2[3], '2 jr, 2 m, 2 w, 2 d');

        test.equal(clockformatted_1[0], '1 uur, 1 minuut en 1 seconde');
        test.equal(clockformatted_1[1], '1 uur, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1 u, 1 m, 1 s');
        test.equal(clockformatted_1[3], '1 u, 1 m, 1 s');

        test.equal(clockformatted_2[0], '2 uur, 2 minuten en 2 seconden');
        test.equal(clockformatted_2[1], '2 uur, 2 min, 2 sec');
        test.equal(clockformatted_2[2], '2 u, 2 m, 2 s');
        test.equal(clockformatted_2[3], '2 u, 2 m, 2 s');

        test.done();
    },
    testDurFmt_pa_Guru_IN: function(test) {
        test.expect(24);
        // 1 2 18
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_18 = [];
        var clockformatted_1 = [],clockformatted_2 = [],clockformatted_18 = [];;


        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "pa-Guru-IN", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_18.push(textfmt.format({year: 18,month: 18,week: 18,day: 18}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_18.push(textfmt.format({hour: 18,minute: 18,second: 18}).toString());
        }

        test.equal(textformatted_1[0], '1 ਸਾਲ, 1 ਮਹੀਨਾ, 1 ਹਫ਼ਤਾ, 1 ਦਿਨ');
        test.equal(textformatted_1[1], '1 ਸਾਲ, 1 ਮਹੀਨਾ, 1 ਹਫ਼ਤਾ, 1 ਦਿਨ');
        test.equal(textformatted_1[2], '1 ਸਾਲ 1 ਮਹੀਨਾ 1 ਹਫ਼ਤਾ 1 ਦਿਨ');
        test.equal(textformatted_1[3], '1 ਸਾਲ 1 ਮਹੀਨਾ 1 ਹਫ਼ਤਾ 1 ਦਿਨ');

        test.equal(textformatted_2[0], '2 ਸਾਲ, 2 ਮਹੀਨੇ, 2 ਹਫ਼ਤੇ, 2 ਦਿਨ');
        test.equal(textformatted_2[1], '2 ਸਾਲ, 2 ਮਹੀਨੇ, 2 ਹਫ਼ਤੇ, 2 ਦਿਨ');
        test.equal(textformatted_2[2], '2 ਸਾਲ 2 ਮਹੀਨੇ 2 ਹਫ਼ਤੇ 2 ਦਿਨ');
        test.equal(textformatted_2[3], '2 ਸਾਲ 2 ਮਹੀਨੇ 2 ਹਫ਼ਤੇ 2 ਦਿਨ');

        test.equal(textformatted_18[0], '18 ਸਾਲ, 18 ਮਹੀਨੇ, 18 ਹਫ਼ਤੇ, 18 ਦਿਨ');
        test.equal(textformatted_18[1], '18 ਸਾਲ, 18 ਮਹੀਨੇ, 18 ਹਫ਼ਤੇ, 18 ਦਿਨ');
        test.equal(textformatted_18[2], '18 ਸਾਲ 18 ਮਹੀਨੇ 18 ਹਫ਼ਤੇ 18 ਦਿਨ');
        test.equal(textformatted_18[3], '18 ਸਾਲ 18 ਮਹੀਨੇ 18 ਹਫ਼ਤੇ 18 ਦਿਨ');

        test.equal(clockformatted_1[0], '1 ਘੰਟਾ, 1 ਮਿੰਟ, 1 ਸਕਿੰਟ');
        test.equal(clockformatted_1[1], '1 ਘੰਟਾ, 1 ਮਿੰਟ, 1 ਸਕਿੰਟ');
        test.equal(clockformatted_1[2], '1 ਘੰਟਾ 1 ਮਿੰਟ 1 ਸਕਿੰਟ');
        test.equal(clockformatted_1[3], '1 ਘੰਟਾ 1 ਮਿੰਟ 1 ਸਕਿੰਟ');

        test.equal(clockformatted_2[0], '2 ਘੰਟੇ, 2 ਮਿੰਟ, 2 ਸਕਿੰਟ');
        test.equal(clockformatted_2[1], '2 ਘੰਟੇ, 2 ਮਿੰਟ, 2 ਸਕਿੰਟ');
        test.equal(clockformatted_2[2], '2 ਘੰਟੇ 2 ਮਿੰਟ 2 ਸਕਿੰਟ');
        test.equal(clockformatted_2[3], '2 ਘੰਟੇ 2 ਮਿੰਟ 2 ਸਕਿੰਟ');

        test.equal(clockformatted_18[0], '18 ਘੰਟੇ, 18 ਮਿੰਟ, 18 ਸਕਿੰਟ');
        test.equal(clockformatted_18[1], '18 ਘੰਟੇ, 18 ਮਿੰਟ, 18 ਸਕਿੰਟ');
        test.equal(clockformatted_18[2], '18 ਘੰਟੇ 18 ਮਿੰਟ 18 ਸਕਿੰਟ');
        test.equal(clockformatted_18[3], '18 ਘੰਟੇ 18 ਮਿੰਟ 18 ਸਕਿੰਟ');

        test.done();
    },
    testDurFmt_pl_PL: function(test) {
        test.expect(24);
        // 1 2 5
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [], textformatted_5 =[];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_5 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "pl-PL", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_5.push(textfmt.format({year: 5,month: 5,week: 5,day: 5}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_5.push(textfmt.format({hour: 5,minute: 5,second: 5}).toString());
        }

        test.equal(textformatted_1[0], '1 rok, 1 miesiąc, 1 tydzień i 1 dzień');
        test.equal(textformatted_1[1], '1 rok, 1 mies., 1 tydz., 1 dzień');
        test.equal(textformatted_1[2], '1 r., 1 m-c, 1 t., 1 d.');
        test.equal(textformatted_1[3], '1 r., 1 m-c, 1 t., 1 d.');

        test.equal(textformatted_2[0], '2 lata, 2 miesiące, 2 tygodnie i 2 dni');
        test.equal(textformatted_2[1], '2 lata, 2 mies., 2 tyg., 2 dni');
        test.equal(textformatted_2[2], '2 l., 2 m-ce, 2 t., 2 d.');
        test.equal(textformatted_2[3], '2 l., 2 m-ce, 2 t., 2 d.');

        test.equal(textformatted_5[0], '5 lat, 5 miesięcy, 5 tygodni i 5 dni');
        test.equal(textformatted_5[1], '5 lat, 5 mies., 5 tyg., 5 dni');
        test.equal(textformatted_5[2], '5 l., 5 m-cy, 5 t., 5 d.');
        test.equal(textformatted_5[3], '5 l., 5 m-cy, 5 t., 5 d.');

        test.equal(clockformatted_1[0], '1 godzina, 1 minuta i 1 sekunda');
        test.equal(clockformatted_1[1], '1 godz., 1 min, 1 sek.');
        test.equal(clockformatted_1[2], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 h, 1 min, 1 s');

        test.equal(clockformatted_2[0], '2 godziny, 2 minuty i 2 sekundy');
        test.equal(clockformatted_2[1], '2 godz., 2 min, 2 sek.');
        test.equal(clockformatted_2[2], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[3], '2 h, 2 min, 2 s');

        test.equal(clockformatted_5[0], '5 godzin, 5 minut i 5 sekund');
        test.equal(clockformatted_5[1], '5 godz., 5 min, 5 sek.');
        test.equal(clockformatted_5[2], '5 h, 5 min, 5 s');
        test.equal(clockformatted_5[3], '5 h, 5 min, 5 s');

        test.done();
    },
    testDurFmt_pt_BR: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "pt-BR", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 ano, 1 mês, 1 semana e 1 dia');
        test.equal(textformatted_1[1], '1 ano, 1 mês, 1 sem., 1 dia');
        test.equal(textformatted_1[2], '1 ano, 1 mês, 1 sem., 1 dia');
        test.equal(textformatted_1[3], '1 ano 1 mês 1 sem. 1 dia');

        test.equal(textformatted_2[0], '2 anos, 2 meses, 2 semanas e 2 dias');
        test.equal(textformatted_2[1], '2 anos, 2 meses, 2 sem., 2 dias');
        test.equal(textformatted_2[2], '2 anos, 2 meses, 2 sem., 2 dias');
        test.equal(textformatted_2[3], '2 anos 2 meses 2 sem. 2 dias');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto e 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 h 1 min 1 s');

        test.equal(clockformatted_2[0], '2 horas, 2 minutos e 2 segundos');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[3], '2 h 2 min 2 s');

        test.done();
    },
    testDurFmt_pt_PT: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "pt-PT", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 ano, 1 mês, 1 semana e 1 dia');
        test.equal(textformatted_1[1], '1 ano, 1 mês, 1 sem., 1 dia');
        test.equal(textformatted_1[2], '1 ano, 1 mês, 1 sem., 1 dia');
        test.equal(textformatted_1[3], '1 ano, 1 mês, 1 sem., 1 dia');

        test.equal(textformatted_17[0], '17 anos, 17 meses, 17 semanas e 17 dias');
        test.equal(textformatted_17[1], '17 anos, 17 meses, 17 sem., 17 dias');
        test.equal(textformatted_17[2], '17 anos, 17 meses, 17 sem., 17 dias');
        test.equal(textformatted_17[3], '17 anos, 17 meses, 17 sem., 17 dias');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto e 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 h, 1 min, 1 s');

        test.equal(clockformatted_17[0], '17 horas, 17 minutos e 17 segundos');
        test.equal(clockformatted_17[1], '17 h, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17 h, 17 min, 17 s');
        test.equal(clockformatted_17[3], '17 h, 17 min, 17 s');

        test.done();
    },
    testDurFmt_ro_RO: function(test) {
        test.expect(24);
        // 1 2 20
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [], textformatted_20 =[];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_20 =[];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ro-RO", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_20.push(textfmt.format({year: 20,month: 20,week: 20,day: 20}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_20.push(textfmt.format({hour: 20,minute: 20,second: 20}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 lună, 1 săptămână, 1 zi');
        test.equal(textformatted_1[1], '1 an, 1 lună, 1 săpt., 1 zi');
        test.equal(textformatted_1[2], '1 a, 1 l, 1 săpt., 1 z');
        test.equal(textformatted_1[3], '1 a, 1 l, 1 săpt., 1 z');

        test.equal(textformatted_2[0], '2 ani, 2 luni, 2 săptămâni, 2 zile');
        test.equal(textformatted_2[1], '2 ani, 2 luni, 2 săpt., 2 zile');
        test.equal(textformatted_2[2], '2 a, 2 l, 2 săpt., 2 z');
        test.equal(textformatted_2[3], '2 a, 2 l, 2 săpt., 2 z');

        test.equal(textformatted_20[0], '20 de ani, 20 de luni, 20 de săptămâni, 20 de zile');
        test.equal(textformatted_20[1], '20 ani, 20 luni, 20 săpt., 20 zile');
        test.equal(textformatted_20[2], '20 a, 20 l, 20 săpt., 20 z');
        test.equal(textformatted_20[3], '20 a, 20 l, 20 săpt., 20 z');

        test.equal(clockformatted_1[0], '1 oră, 1 minut, 1 secundă');
        test.equal(clockformatted_1[1], '1 oră, 1 min., 1 s');
        test.equal(clockformatted_1[2], '1 h, 1 m, 1 s');
        test.equal(clockformatted_1[3], '1 h, 1 m, 1 s');

        test.equal(clockformatted_2[0], '2 ore, 2 minute, 2 secunde');
        test.equal(clockformatted_2[1], '2 ore, 2 min., 2 s');
        test.equal(clockformatted_2[2], '2 h, 2 m, 2 s');
        test.equal(clockformatted_2[3], '2 h, 2 m, 2 s');

        test.equal(clockformatted_20[0], '20 de ore, 20 de minute, 20 de secunde');
        test.equal(clockformatted_20[1], '20 ore, 20 min., 20 s');
        test.equal(clockformatted_20[2], '20 h, 20 m, 20 s');
        test.equal(clockformatted_20[3], '20 h, 20 m, 20 s');

        test.done();
    },
    testDurFmt_sr_Cyrl_RS: function(test) {
        test.expect(24);
        // 1 4 20

        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_4 = [], textformatted_20 = [];
        var clockformatted_1 = [],clockformatted_4 = [], clockformatted_20 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "sr-Cyrl-RS", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_4.push(textfmt.format({year: 4,month: 4,week: 4,day: 4}).toString());
            textformatted_20.push(textfmt.format({year: 20,month: 20,week: 20,day: 20}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_4.push(textfmt.format({hour: 4,minute: 4,second: 4}).toString());
            clockformatted_20.push(textfmt.format({hour: 20,minute: 20,second: 20}).toString());
        }

        test.equal(textformatted_1[0], '1 година, 1 месец, 1 недеља и 1 дан');
        test.equal(textformatted_1[1], '1 год, 1 мес., 1 нед., 1 дан');
        test.equal(textformatted_1[2], '1 г, 1 м, 1 н, 1 д');
        test.equal(textformatted_1[3], '1 г, 1 м, 1 н, 1 д');

        test.equal(textformatted_4[0], '4 године, 4 месеца, 4 недеље и 4 дана');
        test.equal(textformatted_4[1], '4 год., 4 мес., 4 нед., 4 дана');
        test.equal(textformatted_4[2], '4 г, 4 м, 4 н, 4 д');
        test.equal(textformatted_4[3], '4 г, 4 м, 4 н, 4 д');

        test.equal(textformatted_20[0], '20 година, 20 месеци, 20 недеља и 20 дана');
        test.equal(textformatted_20[1], '20 год., 20 мес., 20 нед., 20 дана');
        test.equal(textformatted_20[2], '20 г, 20 м, 20 н, 20 д');
        test.equal(textformatted_20[3], '20 г, 20 м, 20 н, 20 д');

        test.equal(clockformatted_1[0], '1 сат, 1 минут и 1 секунда');
        test.equal(clockformatted_1[1], '1 сат, 1 мин, 1 сек');
        test.equal(clockformatted_1[2], '1 ч, 1 м, 1 с');
        test.equal(clockformatted_1[3], '1 ч, 1 м, 1 с');

        test.equal(clockformatted_4[0], '4 сата, 4 минута и 4 секунде');
        test.equal(clockformatted_4[1], '4 сата, 4 мин, 4 сек');
        test.equal(clockformatted_4[2], '4 ч, 4 м, 4 с');
        test.equal(clockformatted_4[3], '4 ч, 4 м, 4 с');

        test.equal(clockformatted_20[0], '20 сати, 20 минута и 20 секунди');
        test.equal(clockformatted_20[1], '20 сати, 20 мин, 20 сек');
        test.equal(clockformatted_20[2], '20 ч, 20 м, 20 с');
        test.equal(clockformatted_20[3], '20 ч, 20 м, 20 с');

        test.done();
    },
    testDurFmt_sr_Latn_RS: function(test) {
        test.expect(24);
        // 1 2 5
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [], textformatted_5 =[];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_5 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "sr-Latn-RS", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_5.push(textfmt.format({year: 5,month: 5,week: 5,day: 5}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_5.push(textfmt.format({hour: 5,minute: 5,second: 5}).toString());
        }

        test.equal(textformatted_1[0], '1 godina, 1 mesec, 1 nedelja i 1 dan');
        test.equal(textformatted_1[1], '1 god, 1 mes., 1 ned., 1 dan');
        test.equal(textformatted_1[2], '1 g, 1 m, 1 n, 1 d');
        test.equal(textformatted_1[3], '1 g, 1 m, 1 n, 1 d');

        test.equal(textformatted_2[0], '2 godine, 2 meseca, 2 nedelje i 2 dana');
        test.equal(textformatted_2[1], '2 god., 2 mes., 2 ned., 2 dana');
        test.equal(textformatted_2[2], '2 g, 2 m, 2 n, 2 d');
        test.equal(textformatted_2[3], '2 g, 2 m, 2 n, 2 d');

        test.equal(textformatted_5[0], '5 godina, 5 meseci, 5 nedelja i 5 dana');
        test.equal(textformatted_5[1], '5 god., 5 mes., 5 ned., 5 dana');
        test.equal(textformatted_5[2], '5 g, 5 m, 5 n, 5 d');
        test.equal(textformatted_5[3], '5 g, 5 m, 5 n, 5 d');

        test.equal(clockformatted_1[0], '1 sat, 1 minut i 1 sekunda');
        test.equal(clockformatted_1[1], '1 sat, 1 min, 1 sek');
        test.equal(clockformatted_1[2], '1 č, 1 m, 1 s');
        test.equal(clockformatted_1[3], '1 č, 1 m, 1 s');

        test.equal(clockformatted_2[0], '2 sata, 2 minuta i 2 sekunde');
        test.equal(clockformatted_2[1], '2 sata, 2 min, 2 sek');
        test.equal(clockformatted_2[2], '2 č, 2 m, 2 s');
        test.equal(clockformatted_2[3], '2 č, 2 m, 2 s');

        test.equal(clockformatted_5[0], '5 sati, 5 minuta i 5 sekundi');
        test.equal(clockformatted_5[1], '5 sati, 5 min, 5 sek');
        test.equal(clockformatted_5[2], '5 č, 5 m, 5 s');
        test.equal(clockformatted_5[3], '5 č, 5 m, 5 s');

        test.done();
    },
    testDurFmt_ru_BY: function(test) {
        test.expect(24);
        // 1 2 5
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [], textformatted_5 =[];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_5 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ru-BY", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_5.push(textfmt.format({year: 5,month: 5,week: 5,day: 5}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_5.push(textfmt.format({hour: 5,minute: 5,second: 5}).toString());
        }

        test.equal(textformatted_1[0], '1 год 1 месяц 1 неделя 1 день');
        test.equal(textformatted_1[1], '1 г. 1 мес. 1 нед. 1 дн.');
        test.equal(textformatted_1[2], '1 г. 1 м. 1 н. 1 д.');
        test.equal(textformatted_1[3], '1 г. 1 м. 1 н. 1 д.');

        test.equal(textformatted_2[0], '2 года 2 месяца 2 недели 2 дня');
        test.equal(textformatted_2[1], '2 г. 2 мес. 2 нед. 2 дн.');
        test.equal(textformatted_2[2], '2 г. 2 м. 2 н. 2 д.');
        test.equal(textformatted_2[3], '2 г. 2 м. 2 н. 2 д.');

        test.equal(textformatted_5[0], '5 лет 5 месяцев 5 недель 5 дней');
        test.equal(textformatted_5[1], '5 л. 5 мес. 5 нед. 5 дн.');
        test.equal(textformatted_5[2], '5 л. 5 м. 5 н. 5 д.');
        test.equal(textformatted_5[3], '5 л. 5 м. 5 н. 5 д.');

        test.equal(clockformatted_1[0], '1 час 1 минута 1 секунда');
        test.equal(clockformatted_1[1], '1 ч 1 мин 1 с');
        test.equal(clockformatted_1[2], '1 ч 1 мин 1 с');
        test.equal(clockformatted_1[3], '1 ч 1 мин 1 с');

        test.equal(clockformatted_2[0], '2 часа 2 минуты 2 секунды');
        test.equal(clockformatted_2[1], '2 ч 2 мин 2 с');
        test.equal(clockformatted_2[2], '2 ч 2 мин 2 с');
        test.equal(clockformatted_2[3], '2 ч 2 мин 2 с');

        test.equal(clockformatted_5[0], '5 часов 5 минут 5 секунд');
        test.equal(clockformatted_5[1], '5 ч 5 мин 5 с');
        test.equal(clockformatted_5[2], '5 ч 5 мин 5 с');
        test.equal(clockformatted_5[3], '5 ч 5 мин 5 с');

        test.done();
    },
    testDurFmt_ru_KG: function(test) {
        test.expect(24);
        // 41 24 25
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_41 = [],textformatted_24 = [], textformatted_25 =[];
        var clockformatted_41 = [],clockformatted_24 = [], clockformatted_25 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ru-KG", style:"text", length:length[i]});

            textformatted_41.push(textfmt.format({year: 41,month: 41,week: 41,day: 41}).toString());
            textformatted_24.push(textfmt.format({year: 24,month: 24,week: 24,day: 24}).toString());
            textformatted_25.push(textfmt.format({year: 25,month: 25,week: 25,day: 25}).toString());

            clockformatted_41.push(textfmt.format({hour: 41,minute: 41,second: 41}).toString());
            clockformatted_24.push(textfmt.format({hour: 24,minute: 24,second: 24}).toString());
            clockformatted_25.push(textfmt.format({hour: 25,minute: 25,second: 25}).toString());
        }

        test.equal(textformatted_41[0], '41 год 41 месяц 41 неделя 41 день');
        test.equal(textformatted_41[1], '41 г. 41 мес. 41 нед. 41 дн.');
        test.equal(textformatted_41[2], '41 г. 41 м. 41 н. 41 д.');
        test.equal(textformatted_41[3], '41 г. 41 м. 41 н. 41 д.');

        test.equal(textformatted_24[0], '24 года 24 месяца 24 недели 24 дня');
        test.equal(textformatted_24[1], '24 г. 24 мес. 24 нед. 24 дн.');
        test.equal(textformatted_24[2], '24 г. 24 м. 24 н. 24 д.');
        test.equal(textformatted_24[3], '24 г. 24 м. 24 н. 24 д.');

        test.equal(textformatted_25[0], '25 лет 25 месяцев 25 недель 25 дней');
        test.equal(textformatted_25[1], '25 л. 25 мес. 25 нед. 25 дн.');
        test.equal(textformatted_25[2], '25 л. 25 м. 25 н. 25 д.');
        test.equal(textformatted_25[3], '25 л. 25 м. 25 н. 25 д.');

        test.equal(clockformatted_41[0], '41 час 41 минута 41 секунда');
        test.equal(clockformatted_41[1], '41 ч 41 мин 41 с');
        test.equal(clockformatted_41[2], '41 ч 41 мин 41 с');
        test.equal(clockformatted_41[3], '41 ч 41 мин 41 с');

        test.equal(clockformatted_24[0], '24 часа 24 минуты 24 секунды');
        test.equal(clockformatted_24[1], '24 ч 24 мин 24 с');
        test.equal(clockformatted_24[2], '24 ч 24 мин 24 с');
        test.equal(clockformatted_24[3], '24 ч 24 мин 24 с');

        test.equal(clockformatted_25[0], '25 часов 25 минут 25 секунд');
        test.equal(clockformatted_25[1], '25 ч 25 мин 25 с');
        test.equal(clockformatted_25[2], '25 ч 25 мин 25 с');
        test.equal(clockformatted_25[3], '25 ч 25 мин 25 с');

        test.done();
    },
    testDurFmt_ru_KZ: function(test) {
        test.expect(24);
        // 31 22 20
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_31 = [],textformatted_22 = [], textformatted_20 =[];
        var clockformatted_31 = [],clockformatted_22 = [], clockformatted_20 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ru-KZ", style:"text", length:length[i]});

            textformatted_31.push(textfmt.format({year: 31,month: 31,week: 31,day: 31}).toString());
            textformatted_22.push(textfmt.format({year: 22,month: 22,week: 22,day: 22}).toString());
            textformatted_20.push(textfmt.format({year: 20,month: 20,week: 20,day: 20}).toString());

            clockformatted_31.push(textfmt.format({hour: 31,minute: 31,second: 31}).toString());
            clockformatted_22.push(textfmt.format({hour: 22,minute: 22,second: 22}).toString());
            clockformatted_20.push(textfmt.format({hour: 20,minute: 20,second: 20}).toString());
        }

        test.equal(textformatted_31[0], '31 год 31 месяц 31 неделя 31 день');
        test.equal(textformatted_31[1], '31 г. 31 мес. 31 нед. 31 дн.');
        test.equal(textformatted_31[2], '31 г. 31 м. 31 н. 31 д.');
        test.equal(textformatted_31[3], '31 г. 31 м. 31 н. 31 д.');

        test.equal(textformatted_22[0], '22 года 22 месяца 22 недели 22 дня');
        test.equal(textformatted_22[1], '22 г. 22 мес. 22 нед. 22 дн.');
        test.equal(textformatted_22[2], '22 г. 22 м. 22 н. 22 д.');
        test.equal(textformatted_22[3], '22 г. 22 м. 22 н. 22 д.');

        test.equal(textformatted_20[0], '20 лет 20 месяцев 20 недель 20 дней');
        test.equal(textformatted_20[1], '20 л. 20 мес. 20 нед. 20 дн.');
        test.equal(textformatted_20[2], '20 л. 20 м. 20 н. 20 д.');
        test.equal(textformatted_20[3], '20 л. 20 м. 20 н. 20 д.');

        test.equal(clockformatted_31[0], '31 час 31 минута 31 секунда');
        test.equal(clockformatted_31[1], '31 ч 31 мин 31 с');
        test.equal(clockformatted_31[2], '31 ч 31 мин 31 с');
        test.equal(clockformatted_31[3], '31 ч 31 мин 31 с');

        test.equal(clockformatted_22[0], '22 часа 22 минуты 22 секунды');
        test.equal(clockformatted_22[1], '22 ч 22 мин 22 с');
        test.equal(clockformatted_22[2], '22 ч 22 мин 22 с');
        test.equal(clockformatted_22[3], '22 ч 22 мин 22 с');

        test.equal(clockformatted_20[0], '20 часов 20 минут 20 секунд');
        test.equal(clockformatted_20[1], '20 ч 20 мин 20 с');
        test.equal(clockformatted_20[2], '20 ч 20 мин 20 с');
        test.equal(clockformatted_20[3], '20 ч 20 мин 20 с');


        test.done();
    },
    testDurFmt_ru_GE: function(test) {
        test.expect(24);
        // 21 4 19
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_21 = [],textformatted_4 = [], textformatted_19 =[];
        var clockformatted_21 = [],clockformatted_4 = [], clockformatted_19 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ru-GE", style:"text", length:length[i]});

            textformatted_21.push(textfmt.format({year: 21,month: 21,week: 21,day: 21}).toString());
            textformatted_4.push(textfmt.format({year: 4,month: 4,week: 4,day: 4}).toString());
            textformatted_19.push(textfmt.format({year: 19,month: 19,week: 19,day: 19}).toString());

            clockformatted_21.push(textfmt.format({hour: 21,minute: 21,second: 21}).toString());
            clockformatted_4.push(textfmt.format({hour: 4,minute: 4,second: 4}).toString());
            clockformatted_19.push(textfmt.format({hour: 19,minute: 19,second: 19}).toString());
        }

        test.equal(textformatted_21[0], '21 год 21 месяц 21 неделя 21 день');
        test.equal(textformatted_21[1], '21 г. 21 мес. 21 нед. 21 дн.');
        test.equal(textformatted_21[2], '21 г. 21 м. 21 н. 21 д.');
        test.equal(textformatted_21[3], '21 г. 21 м. 21 н. 21 д.');

        test.equal(textformatted_4[0], '4 года 4 месяца 4 недели 4 дня');
        test.equal(textformatted_4[1], '4 г. 4 мес. 4 нед. 4 дн.');
        test.equal(textformatted_4[2], '4 г. 4 м. 4 н. 4 д.');
        test.equal(textformatted_4[3], '4 г. 4 м. 4 н. 4 д.');

        test.equal(textformatted_19[0], '19 лет 19 месяцев 19 недель 19 дней');
        test.equal(textformatted_19[1], '19 л. 19 мес. 19 нед. 19 дн.');
        test.equal(textformatted_19[2], '19 л. 19 м. 19 н. 19 д.');
        test.equal(textformatted_19[3], '19 л. 19 м. 19 н. 19 д.');

        test.equal(clockformatted_21[0], '21 час 21 минута 21 секунда');
        test.equal(clockformatted_21[1], '21 ч 21 мин 21 с');
        test.equal(clockformatted_21[2], '21 ч 21 мин 21 с');
        test.equal(clockformatted_21[3], '21 ч 21 мин 21 с');

        test.equal(clockformatted_4[0], '4 часа 4 минуты 4 секунды');
        test.equal(clockformatted_4[1], '4 ч 4 мин 4 с');
        test.equal(clockformatted_4[2], '4 ч 4 мин 4 с');
        test.equal(clockformatted_4[3], '4 ч 4 мин 4 с');

        test.equal(clockformatted_19[0], '19 часов 19 минут 19 секунд');
        test.equal(clockformatted_19[1], '19 ч 19 мин 19 с');
        test.equal(clockformatted_19[2], '19 ч 19 мин 19 с');
        test.equal(clockformatted_19[3], '19 ч 19 мин 19 с');

        test.done();
    },
    testDurFmt_ru_RU: function(test) {
        test.expect(24);
        // 31 32 19
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_31 = [],textformatted_32 = [], textformatted_19 =[];
        var clockformatted_31 = [],clockformatted_32 = [], clockformatted_19 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ru-RU", style:"text", length:length[i]});

            textformatted_31.push(textfmt.format({year: 31,month: 31,week: 31,day: 31}).toString());
            textformatted_32.push(textfmt.format({year: 32,month: 32,week: 32,day: 32}).toString());
            textformatted_19.push(textfmt.format({year: 19,month: 19,week: 19,day: 19}).toString());

            clockformatted_31.push(textfmt.format({hour: 31,minute: 31,second: 31}).toString());
            clockformatted_32.push(textfmt.format({hour: 32,minute: 32,second: 32}).toString());
            clockformatted_19.push(textfmt.format({hour: 19,minute: 19,second: 19}).toString());
        }

        test.equal(textformatted_31[0], '31 год 31 месяц 31 неделя 31 день');
        test.equal(textformatted_31[1], '31 г. 31 мес. 31 нед. 31 дн.');
        test.equal(textformatted_31[2], '31 г. 31 м. 31 н. 31 д.');
        test.equal(textformatted_31[3], '31 г. 31 м. 31 н. 31 д.');

        test.equal(textformatted_32[0], '32 года 32 месяца 32 недели 32 дня');
        test.equal(textformatted_32[1], '32 г. 32 мес. 32 нед. 32 дн.');
        test.equal(textformatted_32[2], '32 г. 32 м. 32 н. 32 д.');
        test.equal(textformatted_32[3], '32 г. 32 м. 32 н. 32 д.');

        test.equal(textformatted_19[0], '19 лет 19 месяцев 19 недель 19 дней');
        test.equal(textformatted_19[1], '19 л. 19 мес. 19 нед. 19 дн.');
        test.equal(textformatted_19[2], '19 л. 19 м. 19 н. 19 д.');
        test.equal(textformatted_19[3], '19 л. 19 м. 19 н. 19 д.');

        test.equal(clockformatted_31[0], '31 час 31 минута 31 секунда');
        test.equal(clockformatted_31[1], '31 ч 31 мин 31 с');
        test.equal(clockformatted_31[2], '31 ч 31 мин 31 с');
        test.equal(clockformatted_31[3], '31 ч 31 мин 31 с');

        test.equal(clockformatted_32[0], '32 часа 32 минуты 32 секунды');
        test.equal(clockformatted_32[1], '32 ч 32 мин 32 с');
        test.equal(clockformatted_32[2], '32 ч 32 мин 32 с');
        test.equal(clockformatted_32[3], '32 ч 32 мин 32 с');

        test.equal(clockformatted_19[0], '19 часов 19 минут 19 секунд');
        test.equal(clockformatted_19[1], '19 ч 19 мин 19 с');
        test.equal(clockformatted_19[2], '19 ч 19 мин 19 с');
        test.equal(clockformatted_19[3], '19 ч 19 мин 19 с');

        test.done();
    },
    testDurFmt_ru_UA: function(test) {
        test.expect(24);
        // 1 2 5
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [], textformatted_5 =[];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_5 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ru-UA", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_5.push(textfmt.format({year: 5,month: 5,week: 5,day: 5}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_5.push(textfmt.format({hour: 5,minute: 5,second: 5}).toString());
        }

        test.equal(textformatted_1[0], '1 год 1 месяц 1 неделя 1 день');
        test.equal(textformatted_1[1], '1 г. 1 мес. 1 нед. 1 дн.');
        test.equal(textformatted_1[2], '1 г. 1 м. 1 н. 1 д.');
        test.equal(textformatted_1[3], '1 г. 1 м. 1 н. 1 д.');

        test.equal(textformatted_2[0], '2 года 2 месяца 2 недели 2 дня');
        test.equal(textformatted_2[1], '2 г. 2 мес. 2 нед. 2 дн.');
        test.equal(textformatted_2[2], '2 г. 2 м. 2 н. 2 д.');
        test.equal(textformatted_2[3], '2 г. 2 м. 2 н. 2 д.');

        test.equal(textformatted_5[0], '5 лет 5 месяцев 5 недель 5 дней');
        test.equal(textformatted_5[1], '5 л. 5 мес. 5 нед. 5 дн.');
        test.equal(textformatted_5[2], '5 л. 5 м. 5 н. 5 д.');
        test.equal(textformatted_5[3], '5 л. 5 м. 5 н. 5 д.');

        test.equal(clockformatted_1[0], '1 час 1 минута 1 секунда');
        test.equal(clockformatted_1[1], '1 ч 1 мин 1 с');
        test.equal(clockformatted_1[2], '1 ч 1 мин 1 с');
        test.equal(clockformatted_1[3], '1 ч 1 мин 1 с');

        test.equal(clockformatted_2[0], '2 часа 2 минуты 2 секунды');
        test.equal(clockformatted_2[1], '2 ч 2 мин 2 с');
        test.equal(clockformatted_2[2], '2 ч 2 мин 2 с');
        test.equal(clockformatted_2[3], '2 ч 2 мин 2 с');

        test.equal(clockformatted_5[0], '5 часов 5 минут 5 секунд');
        test.equal(clockformatted_5[1], '5 ч 5 мин 5 с');
        test.equal(clockformatted_5[2], '5 ч 5 мин 5 с');
        test.equal(clockformatted_5[3], '5 ч 5 мин 5 с');

        test.done();
    },
    testDurFmt_sk_SK: function(test) {
        test.expect(24);
        // 1 2 5
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [], textformatted_5 =[];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_5 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "sk-SK", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_5.push(textfmt.format({year: 5,month: 5,week: 5,day: 5}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_5.push(textfmt.format({hour: 5,minute: 5,second: 5}).toString());
        }

        test.equal(textformatted_1[0], '1 rok, 1 mesiac, 1 týždeň, 1 deň');
        test.equal(textformatted_1[1], '1 r., 1 mes., 1 týž., 1 deň');
        test.equal(textformatted_1[2], '1 r., 1 m., 1 t., 1 d.');
        test.equal(textformatted_1[3], '1 r., 1 m., 1 t., 1 d.');

        test.equal(textformatted_2[0], '2 roky, 2 mesiace, 2 týždne, 2 dni');
        test.equal(textformatted_2[1], '2 r., 2 mes., 2 týž., 2 dni');
        test.equal(textformatted_2[2], '2 r., 2 m., 2 t., 2 d.');
        test.equal(textformatted_2[3], '2 r., 2 m., 2 t., 2 d.');

        test.equal(textformatted_5[0], '5 rokov, 5 mesiacov, 5 týždňov, 5 dní');
        test.equal(textformatted_5[1], '5 r., 5 mes., 5 týž., 5 dní');
        test.equal(textformatted_5[2], '5 r., 5 m., 5 t., 5 d.');
        test.equal(textformatted_5[3], '5 r., 5 m., 5 t., 5 d.');

        test.equal(clockformatted_1[0], '1 hodina, 1 minúta, 1 sekunda');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 h, 1 min, 1 s');

        test.equal(clockformatted_2[0], '2 hodiny, 2 minúty, 2 sekundy');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[3], '2 h, 2 min, 2 s');

        test.equal(clockformatted_5[0], '5 hodín, 5 minút, 5 sekúnd');
        test.equal(clockformatted_5[1], '5 h, 5 min, 5 s');
        test.equal(clockformatted_5[2], '5 h, 5 min, 5 s');
        test.equal(clockformatted_5[3], '5 h, 5 min, 5 s');

        test.done();
    },
    testDurFmt_sl_SI: function(test) {
        test.expect(32);
        // 1 2 3 5
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [], textformatted_3 = [],textformatted_5 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [],clockformatted_5 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "sl-SI", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_5.push(textfmt.format({year: 5,month: 5,week: 5,day: 5}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_5.push(textfmt.format({hour: 5,minute: 5,second: 5}).toString());
        }

        test.equal(textformatted_1[0], '1 leto, 1 mesec, 1 teden in 1 dan');
        test.equal(textformatted_1[1], '1 l, 1 m, 1 t, 1 d');
        test.equal(textformatted_1[2], '1 l, 1 m, 1 t, 1 d');
        test.equal(textformatted_1[3], '1 l, 1 m, 1 t, 1 d');

        test.equal(textformatted_2[0], '2 leti, 2 meseca, 2 tedna in 2 dneva');
        test.equal(textformatted_2[1], '2 l, 2 m, 2 t, 2 d');
        test.equal(textformatted_2[2], '2 l, 2 m, 2 t, 2 d');
        test.equal(textformatted_2[3], '2 l, 2 m, 2 t, 2 d');

        test.equal(textformatted_3[0], '3 let, 3 meseci, 3 tedni in 3 dni');
        test.equal(textformatted_3[1], '3 l, 3 m, 3 t, 3 d');
        test.equal(textformatted_3[2], '3 l, 3 m, 3 t, 3 d');
        test.equal(textformatted_3[3], '3 l, 3 m, 3 t, 3 d');

        test.equal(textformatted_5[0], '5 let, 5 mesecev, 5 tednov in 5 dni');
        test.equal(textformatted_5[1], '5 l, 5 m, 5 t, 5 d');
        test.equal(textformatted_5[2], '5 l, 5 m, 5 t, 5 d');
        test.equal(textformatted_5[3], '5 l, 5 m, 5 t, 5 d');

        test.equal(clockformatted_1[0], '1 ura, 1 minuta in 1 sekunda');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 sek.');
        test.equal(clockformatted_1[2], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 h, 1 min, 1 s');

        test.equal(clockformatted_2[0], '2 uri, 2 minuti in 2 sekundi');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 sek.');
        test.equal(clockformatted_2[2], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[3], '2 h, 2 min, 2 s');

        test.equal(clockformatted_3[0], '3 ure, 3 minute in 3 sekunde');
        test.equal(clockformatted_3[1], '3 h, 3 min, 3 sek.');
        test.equal(clockformatted_3[2], '3 h, 3 min, 3 s');
        test.equal(clockformatted_3[3], '3 h, 3 min, 3 s');

        test.equal(clockformatted_5[0], '5 ur, 5 minut in 5 sekund');
        test.equal(clockformatted_5[1], '5 h, 5 min, 5 sek.');
        test.equal(clockformatted_5[2], '5 h, 5 min, 5 s');
        test.equal(clockformatted_5[3], '5 h, 5 min, 5 s');

        test.done();
    },
    testDurFmt_sq_AL: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "sq-AL", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 vit, 1 muaj, 1 javë e 1 ditë');
        test.equal(textformatted_1[1], '1 vit, 1 muaj, 1 javë, 1 ditë');
        test.equal(textformatted_1[2], '1 vit, 1 muaj, 1 javë, 1 ditë');
        test.equal(textformatted_1[3], '1 vit, 1 muaj, 1 javë, 1 ditë');

        test.equal(textformatted_16[0], '16 vjet, 16 muaj, 16 javë e 16 ditë');
        test.equal(textformatted_16[1], '16 vjet, 16 muaj, 16 javë, 16 ditë');
        test.equal(textformatted_16[2], '16 vjet, 16 muaj, 16 javë, 16 ditë');
        test.equal(textformatted_16[3], '16 vjet, 16 muaj, 16 javë, 16 ditë');

        test.equal(clockformatted_1[0], '1 orë, 1 minutë e 1 sekondë');
        test.equal(clockformatted_1[1], '1 orë, 1 min., 1 sek.');
        test.equal(clockformatted_1[2], '1 orë, 1 min., 1 sek.');
        test.equal(clockformatted_1[3], '1 orë, 1 min., 1 sek.');

        test.equal(clockformatted_16[0], '16 orë, 16 minuta e 16 sekonda');
        test.equal(clockformatted_16[1], '16 orë, 16 min., 16 sek.');
        test.equal(clockformatted_16[2], '16 orë, 16 min., 16 sek.');
        test.equal(clockformatted_16[3], '16 orë, 16 min., 16 sek.');

        test.done();
    },
    testDurFmt_sq_ME: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "sq-ME", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 vit, 1 muaj, 1 javë e 1 ditë');
        test.equal(textformatted_1[1], '1 vit, 1 muaj, 1 javë, 1 ditë');
        test.equal(textformatted_1[2], '1 vit, 1 muaj, 1 javë, 1 ditë');
        test.equal(textformatted_1[3], '1 vit, 1 muaj, 1 javë, 1 ditë');

        test.equal(textformatted_17[0], '17 vjet, 17 muaj, 17 javë e 17 ditë');
        test.equal(textformatted_17[1], '17 vjet, 17 muaj, 17 javë, 17 ditë');
        test.equal(textformatted_17[2], '17 vjet, 17 muaj, 17 javë, 17 ditë');
        test.equal(textformatted_17[3], '17 vjet, 17 muaj, 17 javë, 17 ditë');

        test.equal(clockformatted_1[0], '1 orë, 1 minutë e 1 sekondë');
        test.equal(clockformatted_1[1], '1 orë, 1 min., 1 sek.');
        test.equal(clockformatted_1[2], '1 orë, 1 min., 1 sek.');
        test.equal(clockformatted_1[3], '1 orë, 1 min., 1 sek.');

        test.equal(clockformatted_17[0], '17 orë, 17 minuta e 17 sekonda');
        test.equal(clockformatted_17[1], '17 orë, 17 min., 17 sek.');
        test.equal(clockformatted_17[2], '17 orë, 17 min., 17 sek.');
        test.equal(clockformatted_17[3], '17 orë, 17 min., 17 sek.');

        test.done();
    },
    testDurFmt_sv_FI: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "sv-FI", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 år, 1 månad, 1 vecka, 1 dygn');
        test.equal(textformatted_1[1], '1 år, 1 mån, 1 v, 1 d');
        test.equal(textformatted_1[2], '1å, 1m, 1v, 1d');
        test.equal(textformatted_1[3], '1å 1m 1v 1d');

        test.equal(textformatted_2[0], '2 år, 2 månader, 2 veckor, 2 dygn');
        test.equal(textformatted_2[1], '2 år, 2 mån, 2 v, 2 d');
        test.equal(textformatted_2[2], '2å, 2m, 2v, 2d');
        test.equal(textformatted_2[3], '2å 2m 2v 2d');

        test.equal(clockformatted_1[0], '1 timme, 1 minut, 1 sekund');
        test.equal(clockformatted_1[1], '1 tim, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 timmar, 2 minuter, 2 sekunder');
        test.equal(clockformatted_2[1], '2 tim, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_sv_SE: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "sv-SE", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 år, 1 månad, 1 vecka, 1 dygn');
        test.equal(textformatted_1[1], '1 år, 1 mån, 1 v, 1 d');
        test.equal(textformatted_1[2], '1å, 1m, 1v, 1d');
        test.equal(textformatted_1[3], '1å 1m 1v 1d');

        test.equal(textformatted_17[0], '17 år, 17 månader, 17 veckor, 17 dygn');
        test.equal(textformatted_17[1], '17 år, 17 mån, 17 v, 17 d');
        test.equal(textformatted_17[2], '17å, 17m, 17v, 17d');
        test.equal(textformatted_17[3], '17å 17m 17v 17d');

        test.equal(clockformatted_1[0], '1 timme, 1 minut, 1 sekund');
        test.equal(clockformatted_1[1], '1 tim, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_17[0], '17 timmar, 17 minuter, 17 sekunder');
        test.equal(clockformatted_17[1], '17 tim, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17h, 17m, 17s');
        test.equal(clockformatted_17[3], '17h 17m 17s');

        test.done();
    },
    testDurFmt_ta_IN: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ta-IN", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 ஆண்டு, 1 மாதம், 1 வாரம், 1 நாள்');
        test.equal(textformatted_1[1], '1 ஆண்டு, 1 மாதம், 1 வாரம், 1 நாள்');
        test.equal(textformatted_1[2], '1 ஆ 1 மா 1 வா 1 நா');
        test.equal(textformatted_1[3], '1 ஆ 1 மா 1 வா 1 நா');

        test.equal(textformatted_2[0], '2 ஆண்டுகள், 2 மாதங்கள், 2 வாரங்கள், 2 நாட்கள்');
        test.equal(textformatted_2[1], '2 ஆண்டு., 2 மாத., 2 வார., 2 நாட்கள்');
        test.equal(textformatted_2[2], '2 ஆ 2 மா 2 வா 2 நா');
        test.equal(textformatted_2[3], '2 ஆ 2 மா 2 வா 2 நா');

        test.equal(clockformatted_1[0], '1 மணிநேரம், 1 நிமிடம், 1 விநாடி');
        test.equal(clockformatted_1[1], '1 மணிநேரம், 1 நிமிடம், 1 விநாடி');
        test.equal(clockformatted_1[2], '1 ம.நே. 1 நிமி. 1 வி.');
        test.equal(clockformatted_1[3], '1 ம.நே. 1 நிமி. 1 வி.');

        test.equal(clockformatted_2[0], '2 மணிநேரங்கள், 2 நிமிடங்கள், 2 விநாடிகள்');
        test.equal(clockformatted_2[1], '2 மணிநேரம், 2 நிமிட, 2 விநாடி');
        test.equal(clockformatted_2[2], '2 ம.நே. 2 நிமி. 2 வி.');
        test.equal(clockformatted_2[3], '2 ம.நே. 2 நிமி. 2 வி.');

        test.done();
    },
    testDurFmt_te_IN: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "te-IN", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 సంవత్సరం, 1 నెల, 1 వారం, 1 రోజు');
        test.equal(textformatted_1[1], '1 సం., 1 నె., 1 వా., 1 రోజు');
        test.equal(textformatted_1[2], '1సం, 1నె, 1వా, 1రో');
        test.equal(textformatted_1[3], '1సం, 1నె, 1వా, 1రో');

        test.equal(textformatted_16[0], '16 సంవత్సరాలు, 16 నెలలు, 16 వారాలు, 16 రోజులు');
        test.equal(textformatted_16[1], '16 సం., 16 నె., 16 వా., 16 రోజులు');
        test.equal(textformatted_16[2], '16సం, 16నె, 16వా, 16రో');
        test.equal(textformatted_16[3], '16సం, 16నె, 16వా, 16రో');

        test.equal(clockformatted_1[0], '1 గంట, 1 నిమిషం, 1 సెకను');
        test.equal(clockformatted_1[1], '1 గం., 1 నిమి., 1 సె.');
        test.equal(clockformatted_1[2], '1గం, 1ని, 1సె');
        test.equal(clockformatted_1[3], '1గం, 1ని, 1సె');

        test.equal(clockformatted_16[0], '16 గంటలు, 16 నిమిషాలు, 16 సెకన్లు');
        test.equal(clockformatted_16[1], '16 గం., 16 నిమి., 16 సెక.');
        test.equal(clockformatted_16[2], '16గం, 16ని, 16సె');
        test.equal(clockformatted_16[3], '16గం, 16ని, 16సె');

        test.done();
    },
    testDurFmt_th_TH: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "th-TH", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 ปี 1 เดือน 1 สัปดาห์ และ 1 วัน');
        test.equal(textformatted_1[1], '1 ปี 1 เดือน 1 สัปดาห์ 1 วัน');
        test.equal(textformatted_1[2], '1ปี 1เดือน 1สัปดาห์ 1วัน');
        test.equal(textformatted_1[3], '1ปี 1เดือน 1สัปดาห์ 1วัน');

        test.equal(textformatted_16[0], '16 ปี 16 เดือน 16 สัปดาห์ และ 16 วัน');
        test.equal(textformatted_16[1], '16 ปี 16 เดือน 16 สัปดาห์ 16 วัน');
        test.equal(textformatted_16[2], '16ปี 16เดือน 16สัปดาห์ 16วัน');
        test.equal(textformatted_16[3], '16ปี 16เดือน 16สัปดาห์ 16วัน');

        test.equal(clockformatted_1[0], '1 ชั่วโมง 1 นาที และ 1 วินาที');
        test.equal(clockformatted_1[1], '1 ชม. 1 นาที 1 วิ');
        test.equal(clockformatted_1[2], '1ชม. 1นาที 1วิ');
        test.equal(clockformatted_1[3], '1ชม. 1นาที 1วิ');

        test.equal(clockformatted_16[0], '16 ชั่วโมง 16 นาที และ 16 วินาที');
        test.equal(clockformatted_16[1], '16 ชม. 16 นาที 16 วิ');
        test.equal(clockformatted_16[2], '16ชม. 16นาที 16วิ');
        test.equal(clockformatted_16[3], '16ชม. 16นาที 16วิ');

        test.done();
    },
    testDurFmt_tr_AM: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "tr-AM", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 yıl 1 ay 1 hafta 1 gün');
        test.equal(textformatted_1[1], '1 yıl 1 ay 1 hf. 1 gün');
        test.equal(textformatted_1[2], '1y 1a 1h 1g');
        test.equal(textformatted_1[3], '1y 1a 1h 1g');

        test.equal(textformatted_2[0], '2 yıl 2 ay 2 hafta 2 gün');
        test.equal(textformatted_2[1], '2 yıl 2 ay 2 hf. 2 gün');
        test.equal(textformatted_2[2], '2y 2a 2h 2g');
        test.equal(textformatted_2[3], '2y 2a 2h 2g');

        test.equal(clockformatted_1[0], '1 saat 1 dakika 1 saniye');
        test.equal(clockformatted_1[1], '1 sa. 1 dk. 1 sn.');
        test.equal(clockformatted_1[2], '1 sa 1d 1sn');
        test.equal(clockformatted_1[3], '1 sa 1d 1sn');

        test.equal(clockformatted_2[0], '2 saat 2 dakika 2 saniye');
        test.equal(clockformatted_2[1], '2 sa. 2 dk. 2 sn.');
        test.equal(clockformatted_2[2], '2s 2d 2sn');
        test.equal(clockformatted_2[3], '2s 2d 2sn');

        test.done();
    },
    testDurFmt_tr_AZ: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "tr-AZ", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 yıl 1 ay 1 hafta 1 gün');
        test.equal(textformatted_1[1], '1 yıl 1 ay 1 hf. 1 gün');
        test.equal(textformatted_1[2], '1y 1a 1h 1g');
        test.equal(textformatted_1[3], '1y 1a 1h 1g');

        test.equal(textformatted_16[0], '16 yıl 16 ay 16 hafta 16 gün');
        test.equal(textformatted_16[1], '16 yıl 16 ay 16 hf. 16 gün');
        test.equal(textformatted_16[2], '16y 16a 16h 16g');
        test.equal(textformatted_16[3], '16y 16a 16h 16g');

        test.equal(clockformatted_1[0], '1 saat 1 dakika 1 saniye');
        test.equal(clockformatted_1[1], '1 sa. 1 dk. 1 sn.');
        test.equal(clockformatted_1[2], '1 sa 1d 1sn');
        test.equal(clockformatted_1[3], '1 sa 1d 1sn');

        test.equal(clockformatted_16[0], '16 saat 16 dakika 16 saniye');
        test.equal(clockformatted_16[1], '16 sa. 16 dk. 16 sn.');
        test.equal(clockformatted_16[2], '16s 16d 16sn');
        test.equal(clockformatted_16[3], '16s 16d 16sn');

        test.done();
    },
    testDurFmt_tr_CY: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "tr-CY", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 yıl 1 ay 1 hafta 1 gün');
        test.equal(textformatted_1[1], '1 yıl 1 ay 1 hf. 1 gün');
        test.equal(textformatted_1[2], '1y 1a 1h 1g');
        test.equal(textformatted_1[3], '1y 1a 1h 1g');

        test.equal(textformatted_17[0], '17 yıl 17 ay 17 hafta 17 gün');
        test.equal(textformatted_17[1], '17 yıl 17 ay 17 hf. 17 gün');
        test.equal(textformatted_17[2], '17y 17a 17h 17g');
        test.equal(textformatted_17[3], '17y 17a 17h 17g');

        test.equal(clockformatted_1[0], '1 saat 1 dakika 1 saniye');
        test.equal(clockformatted_1[1], '1 sa. 1 dk. 1 sn.');
        test.equal(clockformatted_1[2], '1 sa 1d 1sn');
        test.equal(clockformatted_1[3], '1 sa 1d 1sn');

        test.equal(clockformatted_17[0], '17 saat 17 dakika 17 saniye');
        test.equal(clockformatted_17[1], '17 sa. 17 dk. 17 sn.');
        test.equal(clockformatted_17[2], '17s 17d 17sn');
        test.equal(clockformatted_17[3], '17s 17d 17sn');

        test.done();
    },
    testDurFmt_tr_TR: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "tr-TR", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 yıl 1 ay 1 hafta 1 gün');
        test.equal(textformatted_1[1], '1 yıl 1 ay 1 hf. 1 gün');
        test.equal(textformatted_1[2], '1y 1a 1h 1g');
        test.equal(textformatted_1[3], '1y 1a 1h 1g');

        test.equal(textformatted_2[0], '2 yıl 2 ay 2 hafta 2 gün');
        test.equal(textformatted_2[1], '2 yıl 2 ay 2 hf. 2 gün');
        test.equal(textformatted_2[2], '2y 2a 2h 2g');
        test.equal(textformatted_2[3], '2y 2a 2h 2g');

        test.equal(clockformatted_1[0], '1 saat 1 dakika 1 saniye');
        test.equal(clockformatted_1[1], '1 sa. 1 dk. 1 sn.');
        test.equal(clockformatted_1[2], '1 sa 1d 1sn');
        test.equal(clockformatted_1[3], '1 sa 1d 1sn');

        test.equal(clockformatted_2[0], '2 saat 2 dakika 2 saniye');
        test.equal(clockformatted_2[1], '2 sa. 2 dk. 2 sn.');
        test.equal(clockformatted_2[2], '2s 2d 2sn');
        test.equal(clockformatted_2[3], '2s 2d 2sn');

        test.done();
    },
    testDurFmt_uk_UA: function(test) {
        test.expect(24);
        // 1 2 5
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [], textformatted_5 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_5 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "uk-UA", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_5.push(textfmt.format({year: 5,month: 5,week: 5,day: 5}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_5.push(textfmt.format({hour: 5,minute: 5,second: 5}).toString());
        }

        test.equal(textformatted_1[0], '1 рік, 1 місяць, 1 тиждень і 1 день');
        test.equal(textformatted_1[1], '1 р., 1 міс., 1 тиж., 1 дн.');
        test.equal(textformatted_1[2], '1р, 1м, 1т, 1д');
        test.equal(textformatted_1[3], '1р, 1м, 1т, 1д');

        test.equal(textformatted_2[0], '2 роки, 2 місяці, 2 тижні і 2 дні');
        test.equal(textformatted_2[1], '2 р., 2 міс., 2 тиж., 2 дн.');
        test.equal(textformatted_2[2], '2р, 2м, 2т, 2д');
        test.equal(textformatted_2[3], '2р, 2м, 2т, 2д');

        test.equal(textformatted_5[0], '5 років, 5 місяців, 5 тижнів і 5 днів');
        test.equal(textformatted_5[1], '5 р., 5 міс., 5 тиж., 5 дн.');
        test.equal(textformatted_5[2], '5р, 5м, 5т, 5д');
        test.equal(textformatted_5[3], '5р, 5м, 5т, 5д');

        test.equal(clockformatted_1[0], '1 година, 1 хвилина і 1 секунда');
        test.equal(clockformatted_1[1], '1 год, 1 хв, 1 с');
        test.equal(clockformatted_1[2], '1г, 1х, 1с');
        test.equal(clockformatted_1[3], '1г, 1х, 1с');

        test.equal(clockformatted_2[0], '2 години, 2 хвилини і 2 секунди');
        test.equal(clockformatted_2[1], '2 год, 2 хв, 2 с');
        test.equal(clockformatted_2[2], '2г, 2х, 2с');
        test.equal(clockformatted_2[3], '2г, 2х, 2с');

        test.equal(clockformatted_5[0], '5 годин, 5 хвилин і 5 секунд');
        test.equal(clockformatted_5[1], '5 год, 5 хв, 5 с');
        test.equal(clockformatted_5[2], '5г, 5х, 5с');
        test.equal(clockformatted_5[3], '5г, 5х, 5с');

        test.done();
    },
    testDurFmt_ur_IN: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ur-IN", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '‏1 سال, 1 مہینہ, 1 ہفتہ، اور 1 دن');
        test.equal(textformatted_1[1], '‏1 سال، 1 مہینہ، 1 ہفتہ، 1 دن');
        test.equal(textformatted_1[2], '‏1 سال، 1 مہینہ، 1 ہفتہ، 1 دن');
        test.equal(textformatted_1[3], '‏1 سال، 1 مہینہ، 1 ہفتہ، 1 دن');

        test.equal(textformatted_2[0], '‏2 سال, 2 مہینے, 2 ہفتے، اور 2 دن');
        test.equal(textformatted_2[1], '‏2 سال، 2 مہینے، 2 ہفتے، 2 دن');
        test.equal(textformatted_2[2], '‏2 سال، 2 مہینے، 2 ہفتے، 2 دن');
        test.equal(textformatted_2[3], '‏2 سال، 2 مہینے، 2 ہفتے، 2 دن');

        test.equal(clockformatted_1[0], '‏1 گھنٹہ, 1 منٹ، اور 1 سیکنڈ');
        test.equal(clockformatted_1[1], '‏1 گھنٹہ، 1 منٹ، 1 سیکنڈ');
        test.equal(clockformatted_1[2], '‏1 گھنٹہ، 1 منٹ، 1 سیکنڈ');
        test.equal(clockformatted_1[3], '‏1 گھنٹہ، 1 منٹ، 1 سیکنڈ');

        test.equal(clockformatted_2[0], '‏2 گھنٹے, 2 منٹ، اور 2 سیکنڈ');
        test.equal(clockformatted_2[1], '‏2 گھنٹے، 2 منٹ، 2 سیکنڈ');
        test.equal(clockformatted_2[2], '‏2 گھنٹے، 2 منٹ، 2 سیکنڈ');
        test.equal(clockformatted_2[3], '‏2 گھنٹے، 2 منٹ، 2 سیکنڈ');

        test.done();
    },
    testDurFmt_uz_Latn_UZ: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "uz-Latn-UZ", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 yil 1 oy 1 hafta 1 kun');
        test.equal(textformatted_1[1], '1 yil 1 oy 1 hafta 1 kun');
        test.equal(textformatted_1[2], '1 yil 1 oy 1 hafta 1 kun');
        test.equal(textformatted_1[3], '1 yil 1 oy 1 hafta 1 kun');

        test.equal(textformatted_2[0], '2 yil 2 oy 2 hafta 2 kun');
        test.equal(textformatted_2[1], '2 yil 2 oy 2 hafta 2 kun');
        test.equal(textformatted_2[2], '2 yil 2 oy 2 hafta 2 kun');
        test.equal(textformatted_2[3], '2 yil 2 oy 2 hafta 2 kun');

        test.equal(clockformatted_1[0], '1 soat 1 daqiqa 1 soniya');
        test.equal(clockformatted_1[1], '1 soat 1 daq. 1 son.');
        test.equal(clockformatted_1[2], '1 soat 1 daq. 1 s');
        test.equal(clockformatted_1[3], '1 soat 1 daq. 1 s');

        test.equal(clockformatted_2[0], '2 soat 2 daqiqa 2 soniya');
        test.equal(clockformatted_2[1], '2 soat 2 daq. 2 son.');
        test.equal(clockformatted_2[2], '2 soat 2 daq. 2 s');
        test.equal(clockformatted_2[3], '2 soat 2 daq. 2 s');

        test.done();
    },
    testDurFmt_vi_VN: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "vi-VN", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 năm, 1 tháng, 1 tuần, 1 ngày');
        test.equal(textformatted_1[1], '1 năm, 1 tháng, 1 tuần, 1 ngày');
        test.equal(textformatted_1[2], '1 năm, 1 tháng, 1 tuần, 1 ngày');
        test.equal(textformatted_1[3], '1 năm 1 tháng 1 tuần 1 ngày');

        test.equal(textformatted_2[0], '2 năm, 2 tháng, 2 tuần, 2 ngày');
        test.equal(textformatted_2[1], '2 năm, 2 tháng, 2 tuần, 2 ngày');
        test.equal(textformatted_2[2], '2 năm, 2 tháng, 2 tuần, 2 ngày');
        test.equal(textformatted_2[3], '2 năm 2 tháng 2 tuần 2 ngày');

        test.equal(clockformatted_1[0], '1 giờ, 1 phút, 1 giây');
        test.equal(clockformatted_1[1], '1 giờ, 1 phút, 1 giây');
        test.equal(clockformatted_1[2], '1 giờ, 1 phút, 1 giây');
        test.equal(clockformatted_1[3], '1 giờ 1 phút 1 giây');

        test.equal(clockformatted_2[0], '2 giờ, 2 phút, 2 giây');
        test.equal(clockformatted_2[1], '2 giờ, 2 phút, 2 giây');
        test.equal(clockformatted_2[2], '2 giờ, 2 phút, 2 giây');
        test.equal(clockformatted_2[3], '2 giờ 2 phút 2 giây');

        test.done();
    },
    testDurFmt_zh_Hans_CN: function(test) {
        test.expect(8);;
        // 1
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [];
        var clockformatted_1 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "zh-Hans-CN", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
        }

        test.equal(textformatted_1[0], '1年1个月1周1天');
        test.equal(textformatted_1[1], '1年1个月1周1天');
        test.equal(textformatted_1[2], '1年1个月1周1天');
        test.equal(textformatted_1[3], '1年1个月1周1天');

        test.equal(clockformatted_1[0], '1小时1分钟1秒钟');
        test.equal(clockformatted_1[1], '1小时1分钟1秒');
        test.equal(clockformatted_1[2], '1小时1分钟1秒');
        test.equal(clockformatted_1[3], '1小时1分钟1秒');

        test.done();
    },
    testDurFmt_zh_Hant_HK: function(test) {
        test.expect(8);;
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_2 = [];
        var clockformatted_2 = [];

        // 2
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "zh-Hant-HK", style:"text", length:length[i]});

            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_2[0], '2 年 2 個月 2 星期 2 日');
        test.equal(textformatted_2[1], '2 年 2 個月 2 星期 2 日');
        test.equal(textformatted_2[2], '2年2個月2週2日');
        test.equal(textformatted_2[3], '2年2個月2週2日');

        test.equal(clockformatted_2[0], '2 小時 2 分鐘 2 秒');
        test.equal(clockformatted_2[1], '2 小時 2 分鐘 2 秒');
        test.equal(clockformatted_2[2], '2小時2分2秒');
        test.equal(clockformatted_2[3], '2小時2分2秒');

        test.done();
    },
    testDurFmt_zh_Hant_TW: function(test) {
        test.expect(8);;
        // 1
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [];
        var clockformatted_1 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "zh-Hant-TW", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
        }

        test.equal(textformatted_1[0], '1 年 1 個月 1 週 1 天');
        test.equal(textformatted_1[1], '1 年 1 個月 1 週 1 天');
        test.equal(textformatted_1[2], '1 年1 個月1 週1 天');
        test.equal(textformatted_1[3], '1 年1 個月1 週1 天');

        test.equal(clockformatted_1[0], '1 小時 1 分鐘 1 秒');
        test.equal(clockformatted_1[1], '1 小時 1 分鐘 1 秒');
        test.equal(clockformatted_1[2], '1 小時1 分鐘1 秒');
        test.equal(clockformatted_1[3], '1 小時1 分鐘1 秒');

        test.done();
    },
    testDurFmt_en_GE: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-GE", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hr, 2 min, 2 sec');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_CN: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-CN", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hr, 2 min, 2 sec');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_MX: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-MX", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hr, 2 min, 2 sec');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_TW: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-TW", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hr, 2 min, 2 sec');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_mn_MN: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "mn-MN", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 жил 1 сар 1 долоо хоног 1 хоног');
        test.equal(textformatted_1[1], '1 жил 1 сар 1 д.х 1 хоног');
        test.equal(textformatted_1[2], '1ж 1с 1 д.х 1 хоног');
        test.equal(textformatted_1[3], '1ж 1с 1 д.х 1 хоног');

        test.equal(textformatted_2[0], '2 жил 2 сар 2 долоо хоног 2 хоног');
        test.equal(textformatted_2[1], '2 жил 2 сар 2 д.х 2 хоног');
        test.equal(textformatted_2[2], '2ж 2с 2 д.х 2 хоног');
        test.equal(textformatted_2[3], '2ж 2с 2 д.х 2 хоног');

        test.equal(clockformatted_1[0], '1 цаг 1 минут 1 секунд');
        test.equal(clockformatted_1[1], '1 цаг 1 мин 1 сек');
        test.equal(clockformatted_1[2], '1 ц 1 мин 1 сек');
        test.equal(clockformatted_1[3], '1 ц 1 мин 1 сек');

        test.equal(clockformatted_2[0], '2 цаг 2 минут 2 секунд');
        test.equal(clockformatted_2[1], '2 цаг 2 мин 2 сек');
        test.equal(clockformatted_2[2], '2 ц 2 мин 2 сек');
        test.equal(clockformatted_2[3], '2 ц 2 мин 2 сек');

        test.done();
    },
    testDurFmt_es_CA: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-CA", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a, 1 m., 1 sem., 1 d');
        test.equal(textformatted_1[2], '1a, 1m, 1sem, 1d');
        test.equal(textformatted_1[3], '1a 1m 1sem 1d');

        test.equal(textformatted_17[0], '17 años, 17 meses, 17 semanas y 17 días');
        test.equal(textformatted_17[1], '17 a, 17 m., 17 sem., 17 d');
        test.equal(textformatted_17[2], '17a, 17m, 17sem, 17d');
        test.equal(textformatted_17[3], '17a 17m 17sem 17d');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_17[0], '17 horas, 17 minutos y 17 segundos');
        test.equal(clockformatted_17[1], '17 h, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17h, 17min, 17s');
        test.equal(clockformatted_17[3], '17h 17min 17s');

        test.done();
    },
    testDurFmt_af_ZA: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "af-ZA", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 jaar, 1 maand, 1 week, 1 dag');
        test.equal(textformatted_1[1], '1 j., 1 md., 1 w., 1 dag');
        test.equal(textformatted_1[2], '1 j., 1 md., 1 w., 1 d.');
        test.equal(textformatted_1[3], '1 j. 1 md. 1 w. 1 d.');

        test.equal(textformatted_2[0], '2 jaar, 2 maande, 2 weke, 2 dae');
        test.equal(textformatted_2[1], '2 j., 2 md., 2 w., 2 dae');
        test.equal(textformatted_2[2], '2 j., 2 md., 2 w., 2 d.');
        test.equal(textformatted_2[3], '2 j. 2 md. 2 w. 2 d.');

        test.equal(clockformatted_1[0], '1 uur, 1 minuut, 1 sekonde');
        test.equal(clockformatted_1[1], '1 u., 1 min., 1 s.');
        test.equal(clockformatted_1[2], '1 u., 1 min., 1 s.');
        test.equal(clockformatted_1[3], '1 u. 1 min. 1 s.');

        test.equal(clockformatted_2[0], '2 uur, 2 minute, 2 sekondes');
        test.equal(clockformatted_2[1], '2 u., 2 min., 2 s.');
        test.equal(clockformatted_2[2], '2 u., 2 min., 2 s.');
        test.equal(clockformatted_2[3], '2 u. 2 min. 2 s.');

        test.done();
    },
    testDurFmt_am_ET: function(test) {
        test.expect(16);
        // 1 18
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_18 = [];
        var clockformatted_1 = [],clockformatted_18 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "am-ET", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_18.push(textfmt.format({year: 18,month: 18,week: 18,day: 18}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_18.push(textfmt.format({hour: 18,minute: 18,second: 18}).toString());
        }

        test.equal(textformatted_1[0], '1 ዓመት፣ 1 ወር፣ 1 ሳምንት እና 1 ቀናት');
        test.equal(textformatted_1[1], '1 ዓመት፣ 1 ወራት፣ 1 ሳምንት፣ 1 ቀናት');
        test.equal(textformatted_1[2], '1 ዓመት፣ 1 ወር፣ 1 ሳምንት፣ 1 ቀ');
        test.equal(textformatted_1[3], '1 ዓመት፣ 1 ወር፣ 1 ሳምንት፣ 1 ቀ');

        test.equal(textformatted_18[0], '18 ዓመታት፣ 18 ወራት፣ 18 ሳምንታት እና 18 ቀናት');
        test.equal(textformatted_18[1], '18 ዓመታት፣ 18 ወራት፣ 18 ሳምንታት፣ 18 ቀናት');
        test.equal(textformatted_18[2], '18 ዓ፣ 18 ወር፣ 18 ሳምንት፣ 18 ቀ');
        test.equal(textformatted_18[3], '18 ዓ፣ 18 ወር፣ 18 ሳምንት፣ 18 ቀ');

        test.equal(clockformatted_1[0], '1 ሰዓት፣ 1 ደቂቃ እና 1 ሰከንድ');
        test.equal(clockformatted_1[1], '1 ሰዓ፣ 1 ደቂ፣ 1 ሰከ');
        test.equal(clockformatted_1[2], '1 ሰ፣ 1 ደ፣ 1 ሰ');
        test.equal(clockformatted_1[3], '1 ሰ፣ 1 ደ፣ 1 ሰ');

        test.equal(clockformatted_18[0], '18 ሰዓቶች፣ 18 ደቂቃዎች እና 18 ሰከንዶች');
        test.equal(clockformatted_18[1], '18 ሰዓ፣ 18 ደቂቃ፣ 18 ሰከ');
        test.equal(clockformatted_18[2], '18 ሰ፣ 18 ደ፣ 18 ሰ');
        test.equal(clockformatted_18[3], '18 ሰ፣ 18 ደ፣ 18 ሰ');

        test.done();
    },
    testDurFmt_ha_Latn_NG: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ha-Latn-NG", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], 'shekara 1, wata 1, mako 1, rana 1');
        test.equal(textformatted_1[1], 'shkr 1, wat 1, mk 1, rana 1');
        test.equal(textformatted_1[2], 'shkr 1, w1, m1, r1');
        test.equal(textformatted_1[3], 'shkr 1, w1, m1, r1');

        test.equal(textformatted_2[0], 'shekaru 2, watanni 2, makonni 2, ranaku 2');
        test.equal(textformatted_2[1], 'shkru 2, wtnn 2, mkn 2, Rnk. 2');
        test.equal(textformatted_2[2], 's2, w2, m2, r2');
        test.equal(textformatted_2[3], 's2, w2, m2, r2');

        test.equal(clockformatted_1[0], 'sa′a 1, minti 1, daƙiƙa 1');
        test.equal(clockformatted_1[1], 's 1, mnt 1, d 1');
        test.equal(clockformatted_1[2], 's1, minti1, d 1');
        test.equal(clockformatted_1[3], 's1, minti1, d 1');

        test.equal(clockformatted_2[0], 'sa′o′i 2, mintoci 2, daƙiƙoƙi 2');
        test.equal(clockformatted_2[1], 's 2, mnt 2, d 2');
        test.equal(clockformatted_2[2], 's2, minti 2, d 2');
        test.equal(clockformatted_2[3], 's2, minti 2, d 2');

        test.done();
    },
    testDurFmt_or_IN: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "or-IN", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        //// CLDR 34 change (all)

        test.equal(textformatted_1[0], '1 ବର୍ଷ, 1 ମାସ, 1 ସପ୍ତାହ, 1 ଦିନ');
        test.equal(textformatted_1[1], '1 ବର୍ଷ, 1 ମାସ, 1 ସପ୍ତାହ, 1 ଦିନ');
        test.equal(textformatted_1[2], '1ବର୍ଷ 1ମାସ 1ସପ୍ 1ଦିନ');
        test.equal(textformatted_1[3], '1ବର୍ଷ 1ମାସ 1ସପ୍ 1ଦିନ');

        test.equal(textformatted_17[0], '17 ବର୍ଷ, 17 ମାସ, 17 ସପ୍ତାହ, 17 ଦିନ');
        test.equal(textformatted_17[1], '17 ବର୍ଷ, 17 ମାସ, 17 ସପ୍ତାହ, 17 ଦିନ');
        test.equal(textformatted_17[2], '17ବର୍ଷ 17ମାସ 17 ସପ୍ 17ଦିନ');
        test.equal(textformatted_17[3], '17ବର୍ଷ 17ମାସ 17 ସପ୍ 17ଦିନ');

        test.equal(clockformatted_1[0], '1 ଘଣ୍ଟା, 1 ମିନିଟ୍‌, 1 ସେକେଣ୍ଡ');
        test.equal(clockformatted_1[1], '1 ଘଣ୍ଟା, 1 ମିନିଟ୍‌, 1 ସେକେଣ୍ଡ');
        test.equal(clockformatted_1[2], '1ଘଣ୍ଟା 1ମିନିଟ୍‌ 1ସେକ୍');
        test.equal(clockformatted_1[3], '1ଘଣ୍ଟା 1ମିନିଟ୍‌ 1ସେକ୍');

        test.equal(clockformatted_17[0], '17 ଘଣ୍ଟା, 17 ମିନିଟ୍, 17 ସେକେଣ୍ଡ');
        test.equal(clockformatted_17[1], '17 ଘଣ୍ଟା, 17 ମିନିଟ୍‌, 17 ସେକେଣ୍ଡ');
        test.equal(clockformatted_17[2], '17ଘଣ୍ଟା 17ମିନିଟ୍‌ 17ସେକ୍');
        test.equal(clockformatted_17[3], '17ଘଣ୍ଟା 17ମିନିଟ୍‌ 17ସେକ୍');

        test.done();
    },
    testDurFmt_az_Latn_AZ: function(test) {
        test.expect(16);
        // 1 19
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_19 = [];
        var clockformatted_1 = [],clockformatted_19 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "az-Latn-AZ", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_19.push(textfmt.format({year: 19,month: 19,week: 19,day: 19}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_19.push(textfmt.format({hour: 19,minute: 19,second: 19}).toString());
        }

        test.equal(textformatted_1[0], '1 il, 1 ay, 1 həftə, 1 gün');
        test.equal(textformatted_1[1], '1 il, 1 ay, 1 hft, 1 gün');
        test.equal(textformatted_1[2], '1 il, 1 ay, 1 hft, 1 gün');
        test.equal(textformatted_1[3], '1 il, 1 ay, 1 hft, 1 gün');

        test.equal(textformatted_19[0], '19 il, 19 ay, 19 həftə, 19 gün');
        test.equal(textformatted_19[1], '19 il, 19 ay, 19 hft, 19 gün');
        test.equal(textformatted_19[2], '19 il, 19 ay, 19 hft, 19 gün');
        test.equal(textformatted_19[3], '19 il, 19 ay, 19 hft, 19 gün');

        test.equal(clockformatted_1[0], '1 saat, 1 dəqiqə, 1 saniyə');
        test.equal(clockformatted_1[1], '1 saat, 1 dəq, 1 san');
        test.equal(clockformatted_1[2], '1 saat, 1 dəq, 1 san');
        test.equal(clockformatted_1[3], '1 saat, 1 dəq, 1 san');

        test.equal(clockformatted_19[0], '19 saat, 19 dəqiqə, 19 saniyə');
        test.equal(clockformatted_19[1], '19 saat, 19 dəq, 19 san');
        test.equal(clockformatted_19[2], '19 saat, 19 dəq, 19 san');
        test.equal(clockformatted_19[3], '19 saat, 19 dəq, 19 san');

        test.done();
    },
    testDurFmt_km_KH: function(test) {
        test.expect(16);
        // 1 23
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_23 = [];
        var clockformatted_1 = [],clockformatted_23 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "km-KH", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_23.push(textfmt.format({year: 23,month: 23,week: 23,day: 23}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_23.push(textfmt.format({hour: 23,minute: 23,second: 23}).toString());
        }

        test.equal(textformatted_1[0], '1 ឆ្នាំ 1 ខែ 1 សប្ដាហ៍ 1 ថ្ងៃ');
        test.equal(textformatted_1[1], '1 ឆ្នាំ 1 ខែ 1 សប្ដាហ៍ 1 ថ្ងៃ');
        test.equal(textformatted_1[2], '1 ឆ្នាំ 1 ខែ 1 សប្ដាហ៍ 1 ថ្ងៃ');
        test.equal(textformatted_1[3], '1 ឆ្នាំ 1 ខែ 1 សប្ដាហ៍ 1 ថ្ងៃ');

        test.equal(textformatted_23[0], '23 ឆ្នាំ 23 ខែ 23 សប្ដាហ៍ 23 ថ្ងៃ');
        test.equal(textformatted_23[1], '23 ឆ្នាំ 23 ខែ 23 សប្ដាហ៍ 23 ថ្ងៃ');
        test.equal(textformatted_23[2], '23 ឆ្នាំ 23 ខែ 23 សប្ដាហ៍ 23 ថ្ងៃ');
        test.equal(textformatted_23[3], '23 ឆ្នាំ 23 ខែ 23 សប្ដាហ៍ 23 ថ្ងៃ');

        test.equal(clockformatted_1[0], '1 ម៉ោង 1 នាទី 1 វិនាទី');
        test.equal(clockformatted_1[1], '1 ម៉ោង 1 នាទី 1 វិនាទី');
        test.equal(clockformatted_1[2], '1 ម៉ោង 1 នាទី 1 វិនាទី');
        test.equal(clockformatted_1[3], '1 ម៉ោង 1 នាទី 1 វិនាទី');

        test.equal(clockformatted_23[0], '23 ម៉ោង 23 នាទី 23 វិនាទី');
        test.equal(clockformatted_23[1], '23 ម៉ោង 23 នាទី 23 វិនាទី');
        test.equal(clockformatted_23[2], '23 ម៉ោង 23 នាទី 23 វិនាទី');
        test.equal(clockformatted_23[3], '23 ម៉ោង 23 នាទី 23 វិនាទី');


        test.done();
    },
    testDurFmt_si_LK: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "si-LK", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], 'වසර 1, මාස 1, සති 1, සහ දින 1');
        test.equal(textformatted_1[1], 'වසර 1, මාස 1, සති 1, දින 1');
        test.equal(textformatted_1[2], 'ව 1, මා 1, ස 1, දි 1');
        test.equal(textformatted_1[3], 'ව 1, මා 1, ස 1, දි 1');

        test.equal(textformatted_2[0], 'වසර 2, මාස 2, සති 2, සහ දින 2');
        test.equal(textformatted_2[1], 'වසර 2, මාස 2, සති 2, දින 2');
        test.equal(textformatted_2[2], 'ව 2, මා 2, ස 2, දි 2');
        test.equal(textformatted_2[3], 'ව 2, මා 2, ස 2, දි 2');

        test.equal(clockformatted_1[0], 'පැය 1, මිනිත්තු 1, සහ තත්පර 1');
        test.equal(clockformatted_1[1], 'පැය 1, මිනි 1, තත් 1');
        test.equal(clockformatted_1[2], 'පැය 1, මි 1, ත 1');
        test.equal(clockformatted_1[3], 'පැය 1, මි 1, ත 1');

        test.equal(clockformatted_2[0], 'පැය 2, මිනිත්තු 2, සහ තත්පර 2');
        test.equal(clockformatted_2[1], 'පැය 2, මිනි 2, තත් 2');
        test.equal(clockformatted_2[2], 'පැය 2, මි 2, ත 2'); // CLDR 34 change (hour)
        test.equal(clockformatted_2[3], 'පැය 2, මි 2, ත 2'); // CLDR 34 change (hour)
        test.done();
    },
    testDurFmt_ar_AE: function(test) {
        test.expect(40);
        // 1 2 3 11 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-AE", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');

        test.done();
    },
    testDurFmt_ar_BH: function(test) {
        test.expect(40);
        // 1 2 3 11 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-BH", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');

        test.done();
    },
    testDurFmt_ar_DJ: function(test) {
        test.expect(40);
        // 1 2 3 11 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-DJ", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');


        test.done();
    },
    testDurFmt_ar_DZ: function(test) {
        test.expect(40);
        // 1 2 3 11 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-DZ", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');


        test.done();
    },
    testDurFmt_ar_JO: function(test) {
        test.expect(40);

        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-JO", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');

        test.done();
    },
    testDurFmt_ar_KW: function(test) {
        test.expect(40);
        // 1 2 3 11 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-KW", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');


        test.done();
    },
    testDurFmt_ar_LB: function(test) {
        test.expect(40);
        // 1 2 3 11 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-LB", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');


        test.done();
    },
    testDurFmt_ar_LY: function(test) {
        test.expect(40);
        // 1 2 3 11 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-LY", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');

        test.done();
    },
    testDurFmt_ar_MR: function(test) {
        test.expect(40);
        // 1 2 3 11 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-MR", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');

        test.done();
    },
    testDurFmt_ar_OM: function(test) {
        test.expect(40);
        // 1 2 3 11 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-OM", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');

        test.done();
    },
    testDurFmt_ar_QA: function(test) {
        test.expect(40);
        // 1 2 3 11 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-QA", style:"text", length:length[i],useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');

        test.done();
    },
    testDurFmt_ar_SA: function(test) {
        test.expect(40);
        // 1 2 3 11 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-SA", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏سنتان وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏سنتان وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنوات و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنوات و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوانٍ');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');

        test.done();
    },
    testDurFmt_ar_SD: function(test) {
        test.expect(40);
        // 1 2 3 11 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-SD", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');

        test.done();
    },
    testDurFmt_ar_SY: function(test) {
        test.expect(40);
        // 1 2 3 11 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-SY", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');

        test.done();
    },
    testDurFmt_ar_TN: function(test) {
        test.expect(40);
        // 1 2 3 11 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-TN", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');

        test.done();
    },
    testDurFmt_ar_YE: function(test) {
        test.expect(40);
        // 1 2 3 11 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [],textformatted_3 = [], textformatted_11 = [], textformatted_100 = [];
        var clockformatted_1 = [],clockformatted_2 = [], clockformatted_3 = [], clockformatted_11 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ar-YE", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '‏سنة، وشهر، وأسبوع، ويوم' );
        test.equal(textformatted_1[1], '‏سنة واحدة، وشهر، وأسبوع، ويوم');
        test.equal(textformatted_1[2], '‏1 سنة وشهر و1 أ و1 ي');
        test.equal(textformatted_1[3], '‏1 سنة وشهر و1 أ و1 ي');

        test.equal(textformatted_2[0], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[1], '‏سنتان، وشهران، وأسبوعان، ويومان');
        test.equal(textformatted_2[2], '‏2 سنة وشهران و2 أ و2 ي');
        test.equal(textformatted_2[3], '‏2 سنة وشهران و2 أ و2 ي');

        test.equal(textformatted_3[0], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[1], '‏3 سنوات، و3 أشهر، و3 أسابيع، و3 أيام');
        test.equal(textformatted_3[2], '‏3 سنة و3 أشهر و3 أ و3 ي');
        test.equal(textformatted_3[3], '‏3 سنة و3 أشهر و3 أ و3 ي');

        test.equal(textformatted_11[0], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[1], '‏11 سنة، و11 شهرًا، و11 أسبوعًا، و11 يومًا');
        test.equal(textformatted_11[2], '‏11 سنة و11 شهرًا و11 أ و11 ي');
        test.equal(textformatted_11[3], '‏11 سنة و11 شهرًا و11 أ و11 ي');

        test.equal(textformatted_100[0], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[1], '‏100 سنة، و100 شهر، و100 أسبوع، و100 يوم');
        test.equal(textformatted_100[2], '‏100 سنة و100 شهر و100 أ و100 ي');
        test.equal(textformatted_100[3], '‏100 سنة و100 شهر و100 أ و100 ي');

        test.equal(clockformatted_1[0], '‏ساعة، ودقيقة، وثانية');
        test.equal(clockformatted_1[1], '‏1 س، و1 د، و1 ث');
        test.equal(clockformatted_1[2], '‏1 س و1 د و1 ث');
        test.equal(clockformatted_1[3], '‏1 س و1 د و1 ث');

        test.equal(clockformatted_2[0], '‏ساعتان، ودقيقتان، وثانيتان');
        test.equal(clockformatted_2[1], '‏2 س، و2 د، و2 ث');
        test.equal(clockformatted_2[2], '‏2 س و2 د و2 ث');
        test.equal(clockformatted_2[3], '‏2 س و2 د و2 ث');

        test.equal(clockformatted_3[0], '‏3 ساعات، و3 دقائق، و3 ثوان');
        test.equal(clockformatted_3[1], '‏3 س، و3 د، و3 ث');
        test.equal(clockformatted_3[2], '‏3 س و3 د و3 ث');
        test.equal(clockformatted_3[3], '‏3 س و3 د و3 ث');

        test.equal(clockformatted_11[0], '‏11 ساعة، و11 دقيقة، و11 ثانية');
        test.equal(clockformatted_11[1], '‏11 س، و11 د، و11 ث');
        test.equal(clockformatted_11[2], '‏11 س و11 د و11 ث');
        test.equal(clockformatted_11[3], '‏11 س و11 د و11 ث');

        test.equal(clockformatted_100[0], '‏100 ساعة، و100 دقيقة، و100 ثانية');
        test.equal(clockformatted_100[1], '‏100 س، و100 د، و100 ث');
        test.equal(clockformatted_100[2], '‏100 س و100 د و100 ث');
        test.equal(clockformatted_100[3], '‏100 س و100 د و100 ث');

        test.done();
    },
    testDurFmt_en_ET: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-ET", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hr, 2 min, 2 sec');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_GM: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-GM", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_LR: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-LR", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_PK: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-PK", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_RW: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-RW", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_SD: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-SD", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_SL: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-SL", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_en_TZ: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "en-TZ", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 year, 1 month, 1 week, 1 day');
        test.equal(textformatted_1[1], '1 yr, 1 mth, 1 wk, 1 day');
        test.equal(textformatted_1[2], '1y, 1m, 1w, 1d');
        test.equal(textformatted_1[3], '1y 1m 1w 1d');

        test.equal(textformatted_2[0], '2 years, 2 months, 2 weeks, 2 days');
        test.equal(textformatted_2[1], '2 yrs, 2 mths, 2 wks, 2 days');
        test.equal(textformatted_2[2], '2y, 2m, 2w, 2d');
        test.equal(textformatted_2[3], '2y 2m 2w 2d');

        test.equal(clockformatted_1[0], '1 hour, 1 minute, 1 second');
        test.equal(clockformatted_1[1], '1 hr, 1 min, 1 sec');
        test.equal(clockformatted_1[2], '1h, 1m, 1s');
        test.equal(clockformatted_1[3], '1h 1m 1s');

        test.equal(clockformatted_2[0], '2 hours, 2 minutes, 2 seconds');
        test.equal(clockformatted_2[1], '2 hrs, 2 mins, 2 secs');
        test.equal(clockformatted_2[2], '2h, 2m, 2s');
        test.equal(clockformatted_2[3], '2h 2m 2s');

        test.done();
    },
    testDurFmt_es_CR: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-CR", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a., 1 m., 1 sem., 1 d.');
        test.equal(textformatted_1[2], '1a., 1m., 1sem., 1d.');
        test.equal(textformatted_1[3], '1a. 1m. 1sem. 1d.');

        test.equal(textformatted_17[0], '17 años, 17 meses, 17 semanas y 17 días');
        test.equal(textformatted_17[1], '17 aa., 17 mm., 17 sems., 17 dd.');
        test.equal(textformatted_17[2], '17aa., 17mm., 17sems., 17dd.');
        test.equal(textformatted_17[3], '17aa. 17mm. 17sems. 17dd.');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_17[0], '17 horas, 17 minutos y 17 segundos');
        test.equal(clockformatted_17[1], '17 h, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17h, 17min, 17s');
        test.equal(clockformatted_17[3], '17h 17min 17s');

        test.done();
    },
    testDurFmt_es_GQ: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-GQ", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a, 1 m., 1 sem., 1 d' );
        test.equal(textformatted_1[2], '1a, 1m, 1sem, 1d');
        test.equal(textformatted_1[3], '1a 1m 1sem 1d');

        test.equal(textformatted_2[0], '2 años, 2 meses, 2 semanas y 2 días');
        test.equal(textformatted_2[1], '2 a, 2 m., 2 sem., 2 d');
        test.equal(textformatted_2[2], '2a, 2m, 2sem, 2d');
        test.equal(textformatted_2[3], '2a 2m 2sem 2d');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 horas, 2 minutos y 2 segundos');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_es_PH: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "es-PH", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 año, 1 mes, 1 semana y 1 día');
        test.equal(textformatted_1[1], '1 a, 1 m., 1 sem., 1 d');
        test.equal(textformatted_1[2], '1a, 1m, 1sem, 1d');
        test.equal(textformatted_1[3], '1a 1m 1sem 1d');

        test.equal(textformatted_17[0], '17 años, 17 meses, 17 semanas y 17 días');
        test.equal(textformatted_17[1], '17 a, 17 m., 17 sem., 17 d');
        test.equal(textformatted_17[2], '17a, 17m, 17sem, 17d');
        test.equal(textformatted_17[3], '17a 17m 17sem 17d');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto y 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_17[0], '17 horas, 17 minutos y 17 segundos');
        test.equal(clockformatted_17[1], '17 h, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17h, 17min, 17s');
        test.equal(clockformatted_17[3], '17h 17min 17s');

        test.done();
    },
    testDurFmt_fr_BF: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-BF", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        // CLDR 34 chang

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_2[0], '2 ans, 2 mois, 2 semaines et 2 jours');
        test.equal(textformatted_2[1], '2 ans, 2 m., 2 sem., 2 j');
        test.equal(textformatted_2[2], '2a, 2m., 2sem., 2j');
        test.equal(textformatted_2[3], '2a 2m. 2sem. 2j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 heures, 2 minutes et 2 secondes');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_fr_BJ: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-BJ", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_17[0], '17 ans, 17 mois, 17 semaines et 17 jours');
        test.equal(textformatted_17[1], '17 ans, 17 m., 17 sem., 17 j');
        test.equal(textformatted_17[2], '17a, 17m., 17sem., 17j');
        test.equal(textformatted_17[3], '17a 17m. 17sem. 17j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_17[0], '17 heures, 17 minutes et 17 secondes');
        test.equal(clockformatted_17[1], '17 h, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17h, 17min, 17s');
        test.equal(clockformatted_17[3], '17h 17min 17s');

        test.done();
    },
    testDurFmt_fr_CD: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-CD", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_17[0], '17 ans, 17 mois, 17 semaines et 17 jours');
        test.equal(textformatted_17[1], '17 ans, 17 m., 17 sem., 17 j');
        test.equal(textformatted_17[2], '17a, 17m., 17sem., 17j');
        test.equal(textformatted_17[3], '17a 17m. 17sem. 17j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_17[0], '17 heures, 17 minutes et 17 secondes');
        test.equal(clockformatted_17[1], '17 h, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17h, 17min, 17s');
        test.equal(clockformatted_17[3], '17h 17min 17s');

        test.done();
    },
    testDurFmt_fr_CF: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-CF", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_2[0], '2 ans, 2 mois, 2 semaines et 2 jours');
        test.equal(textformatted_2[1], '2 ans, 2 m., 2 sem., 2 j');
        test.equal(textformatted_2[2], '2a, 2m., 2sem., 2j');
        test.equal(textformatted_2[3], '2a 2m. 2sem. 2j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 heures, 2 minutes et 2 secondes');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_fr_CG: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-CG", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_16[0], '16 ans, 16 mois, 16 semaines et 16 jours');
        test.equal(textformatted_16[1], '16 ans, 16 m., 16 sem., 16 j');
        test.equal(textformatted_16[2], '16a, 16m., 16sem., 16j');
        test.equal(textformatted_16[3], '16a 16m. 16sem. 16j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_16[0], '16 heures, 16 minutes et 16 secondes');
        test.equal(clockformatted_16[1], '16 h, 16 min, 16 s');
        test.equal(clockformatted_16[2], '16h, 16min, 16s');
        test.equal(clockformatted_16[3], '16h 16min 16s');

        test.done();
    },
    testDurFmt_fr_CI: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-CI", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_17[0], '17 ans, 17 mois, 17 semaines et 17 jours');
        test.equal(textformatted_17[1], '17 ans, 17 m., 17 sem., 17 j');
        test.equal(textformatted_17[2], '17a, 17m., 17sem., 17j');
        test.equal(textformatted_17[3], '17a 17m. 17sem. 17j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_17[0], '17 heures, 17 minutes et 17 secondes');
        test.equal(clockformatted_17[1], '17 h, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17h, 17min, 17s');
        test.equal(clockformatted_17[3], '17h 17min 17s');

        test.done();
    },
    testDurFmt_fr_CM: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-CM", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_16[0], '16 ans, 16 mois, 16 semaines et 16 jours');
        test.equal(textformatted_16[1], '16 ans, 16 m., 16 sem., 16 j');
        test.equal(textformatted_16[2], '16a, 16m., 16sem., 16j');
        test.equal(textformatted_16[3], '16a 16m. 16sem. 16j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_16[0], '16 heures, 16 minutes et 16 secondes');
        test.equal(clockformatted_16[1], '16 h, 16 min, 16 s');
        test.equal(clockformatted_16[2], '16h, 16min, 16s');
        test.equal(clockformatted_16[3], '16h 16min 16s');

        test.done();
    },
    testDurFmt_fr_GQ: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-GQ", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_16[0], '16 ans, 16 mois, 16 semaines et 16 jours');
        test.equal(textformatted_16[1], '16 ans, 16 m., 16 sem., 16 j');
        test.equal(textformatted_16[2], '16a, 16m., 16sem., 16j');
        test.equal(textformatted_16[3], '16a 16m. 16sem. 16j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_16[0], '16 heures, 16 minutes et 16 secondes');
        test.equal(clockformatted_16[1], '16 h, 16 min, 16 s');
        test.equal(clockformatted_16[2], '16h, 16min, 16s');
        test.equal(clockformatted_16[3], '16h 16min 16s');

        test.done();
    },
    testDurFmt_fr_DJ: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-DJ", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_2[0], '2 ans, 2 mois, 2 semaines et 2 jours');
        test.equal(textformatted_2[1], '2 ans, 2 m., 2 sem., 2 j');
        test.equal(textformatted_2[2], '2a, 2m., 2sem., 2j');
        test.equal(textformatted_2[3], '2a 2m. 2sem. 2j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 heures, 2 minutes et 2 secondes');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_fr_DZ: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-DZ", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_2[0], '2 ans, 2 mois, 2 semaines et 2 jours');
        test.equal(textformatted_2[1], '2 ans, 2 m., 2 sem., 2 j');
        test.equal(textformatted_2[2], '2a, 2m., 2sem., 2j');
        test.equal(textformatted_2[3], '2a 2m. 2sem. 2j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 heures, 2 minutes et 2 secondes');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_fr_GA: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-GA", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_2[0], '2 ans, 2 mois, 2 semaines et 2 jours');
        test.equal(textformatted_2[1], '2 ans, 2 m., 2 sem., 2 j');
        test.equal(textformatted_2[2], '2a, 2m., 2sem., 2j');
        test.equal(textformatted_2[3], '2a 2m. 2sem. 2j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 heures, 2 minutes et 2 secondes');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_fr_GN: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-GN", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_16[0], '16 ans, 16 mois, 16 semaines et 16 jours');
        test.equal(textformatted_16[1], '16 ans, 16 m., 16 sem., 16 j');
        test.equal(textformatted_16[2], '16a, 16m., 16sem., 16j');
        test.equal(textformatted_16[3], '16a 16m. 16sem. 16j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_16[0], '16 heures, 16 minutes et 16 secondes');
        test.equal(clockformatted_16[1], '16 h, 16 min, 16 s');
        test.equal(clockformatted_16[2], '16h, 16min, 16s');
        test.equal(clockformatted_16[3], '16h 16min 16s');

        test.done();
    },
    testDurFmt_fr_LB: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-LB", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_2[0], '2 ans, 2 mois, 2 semaines et 2 jours');
        test.equal(textformatted_2[1], '2 ans, 2 m., 2 sem., 2 j');
        test.equal(textformatted_2[2], '2a, 2m., 2sem., 2j');
        test.equal(textformatted_2[3], '2a 2m. 2sem. 2j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 heures, 2 minutes et 2 secondes');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_fr_ML: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-ML", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_17[0], '17 ans, 17 mois, 17 semaines et 17 jours');
        test.equal(textformatted_17[1], '17 ans, 17 m., 17 sem., 17 j');
        test.equal(textformatted_17[2], '17a, 17m., 17sem., 17j');
        test.equal(textformatted_17[3], '17a 17m. 17sem. 17j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_17[0], '17 heures, 17 minutes et 17 secondes');
        test.equal(clockformatted_17[1], '17 h, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17h, 17min, 17s');
        test.equal(clockformatted_17[3], '17h 17min 17s');

        test.done();
    },
    testDurFmt_fr_RW: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-RW", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_2[0], '2 ans, 2 mois, 2 semaines et 2 jours');
        test.equal(textformatted_2[1], '2 ans, 2 m., 2 sem., 2 j');
        test.equal(textformatted_2[2], '2a, 2m., 2sem., 2j');
        test.equal(textformatted_2[3], '2a 2m. 2sem. 2j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 heures, 2 minutes et 2 secondes');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_fr_SN: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_16 = [];
        var clockformatted_1 = [],clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-SN", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_16[0], '16 ans, 16 mois, 16 semaines et 16 jours');
        test.equal(textformatted_16[1], '16 ans, 16 m., 16 sem., 16 j');
        test.equal(textformatted_16[2], '16a, 16m., 16sem., 16j');
        test.equal(textformatted_16[3], '16a 16m. 16sem. 16j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_16[0], '16 heures, 16 minutes et 16 secondes');
        test.equal(clockformatted_16[1], '16 h, 16 min, 16 s');
        test.equal(clockformatted_16[2], '16h, 16min, 16s');
        test.equal(clockformatted_16[3], '16h 16min 16s');

        test.done();
    },
    testDurFmt_fr_TG: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "fr-TG", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 an, 1 mois, 1 semaine et 1 jour');
        test.equal(textformatted_1[1], '1 an, 1 m., 1 sem., 1 j');
        test.equal(textformatted_1[2], '1a, 1m., 1sem., 1j');
        test.equal(textformatted_1[3], '1a 1m. 1sem. 1j');

        test.equal(textformatted_2[0], '2 ans, 2 mois, 2 semaines et 2 jours');
        test.equal(textformatted_2[1], '2 ans, 2 m., 2 sem., 2 j');
        test.equal(textformatted_2[2], '2a, 2m., 2sem., 2j');
        test.equal(textformatted_2[3], '2a 2m. 2sem. 2j');

        test.equal(clockformatted_1[0], '1 heure, 1 minute et 1 seconde');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1h, 1min, 1s');
        test.equal(clockformatted_1[3], '1h 1min 1s');

        test.equal(clockformatted_2[0], '2 heures, 2 minutes et 2 secondes');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2h, 2min, 2s');
        test.equal(clockformatted_2[3], '2h 2min 2s');

        test.done();
    },
    testDurFmt_ms_SG: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ms-SG", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 tahun, 1 bulan, 1 minggu, 1 hari');
        test.equal(textformatted_1[1], '1 thn, 1 bln, 1 mgu, 1 hari');
        test.equal(textformatted_1[2], '1 thn, 1 bln, 1 mgu, 1 h');
        test.equal(textformatted_1[3], '1 thn 1 bln 1 mgu 1 h');

        test.equal(textformatted_2[0], '2 tahun, 2 bulan, 2 minggu, 2 hari');
        test.equal(textformatted_2[1], '2 thn, 2 bln, 2 mgu, 2 hari');
        test.equal(textformatted_2[2], '2 thn, 2 bln, 2 mgu, 2 h');
        test.equal(textformatted_2[3], '2 thn 2 bln 2 mgu 2 h');

        test.equal(clockformatted_1[0], '1 jam, 1 minit, 1 saat');
        test.equal(clockformatted_1[1], '1 j, 1 min, 1 saat');
        test.equal(clockformatted_1[2], '1 j, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 j 1 min 1 s');

        test.equal(clockformatted_2[0], '2 jam, 2 minit, 2 saat');
        test.equal(clockformatted_2[1], '2 j, 2 min, 2 saat');
        test.equal(clockformatted_2[2], '2 j, 2 min, 2 s');
        test.equal(clockformatted_2[3], '2 j 2 min 2 s');

        test.done();
    },
    testDurFmt_pa_Arab_PK: function(test) {
        test.expect(16);
        // 1 18
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_18 = [];
        var clockformatted_1 = [],clockformatted_18 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "pa-Arab-PK", style:"text", length:length[i], useNative:false});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_18.push(textfmt.format({year: 18,month: 18,week: 18,day: 18}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_18.push(textfmt.format({hour: 18,minute: 18,second: 18}).toString());
        }

        test.equal(textformatted_1[0], '‏1 y, 1 m, 1 w, 1 d');
        test.equal(textformatted_1[1], '‏1 y, 1 m, 1 w, 1 d');
        test.equal(textformatted_1[2], '‏1 y, 1 m, 1 w, 1 d');
        test.equal(textformatted_1[3], '‏1 y, 1 m, 1 w, 1 d');

        test.equal(textformatted_18[0], '‏18 y, 18 m, 18 w, 18 d');
        test.equal(textformatted_18[1], '‏18 y, 18 m, 18 w, 18 d');
        test.equal(textformatted_18[2], '‏18 y, 18 m, 18 w, 18 d');
        test.equal(textformatted_18[3], '‏18 y, 18 m, 18 w, 18 d');

        test.equal(clockformatted_1[0], '‏1 h, 1 min, 1 s');
        test.equal(clockformatted_1[1], '‏1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '‏1 h, 1 min, 1 s');
        test.equal(clockformatted_1[3], '‏1 h, 1 min, 1 s');

        test.equal(clockformatted_18[0], '‏18 h, 18 min, 18 s');
        test.equal(clockformatted_18[1], '‏18 h, 18 min, 18 s');
        test.equal(clockformatted_18[2], '‏18 h, 18 min, 18 s');
        test.equal(clockformatted_18[3], '‏18 h, 18 min, 18 s');

        test.done();
    },
    testDurFmt_pt_AO: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "pt-AO", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 ano, 1 mês, 1 semana e 1 dia');
        test.equal(textformatted_1[1], '1 ano, 1 mês, 1 sem., 1 dia');
        test.equal(textformatted_1[2], '1 ano, 1 mês, 1 sem., 1 dia');
        test.equal(textformatted_1[3], '1 ano, 1 mês, 1 sem., 1 dia');

        test.equal(textformatted_2[0], '2 anos, 2 meses, 2 semanas e 2 dias');
        test.equal(textformatted_2[1], '2 anos, 2 meses, 2 sem., 2 dias');
        test.equal(textformatted_2[2], '2 anos, 2 meses, 2 sem., 2 dias');
        test.equal(textformatted_2[3], '2 anos, 2 meses, 2 sem., 2 dias');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto e 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 h, 1 min, 1 s');

        test.equal(clockformatted_2[0], '2 horas, 2 minutos e 2 segundos');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[3], '2 h, 2 min, 2 s');

        test.done();
    },
    testDurFmt_pt_GQ: function(test) {
        test.expect(16);
        // 1 2
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_2 = [];
        var clockformatted_1 = [],clockformatted_2 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "pt-GQ", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_2.push(textfmt.format({year: 2,month: 2,week: 2,day: 2}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_2.push(textfmt.format({hour: 2,minute: 2,second: 2}).toString());
        }

        test.equal(textformatted_1[0], '1 ano, 1 mês, 1 semana e 1 dia');
        test.equal(textformatted_1[1], '1 ano, 1 mês, 1 sem., 1 dia');
        test.equal(textformatted_1[2], '1 ano, 1 mês, 1 sem., 1 dia');
        test.equal(textformatted_1[3], '1 ano, 1 mês, 1 sem., 1 dia');

        test.equal(textformatted_2[0], '2 anos, 2 meses, 2 semanas e 2 dias');
        test.equal(textformatted_2[1], '2 anos, 2 meses, 2 sem., 2 dias');
        test.equal(textformatted_2[2], '2 anos, 2 meses, 2 sem., 2 dias');
        test.equal(textformatted_2[3], '2 anos, 2 meses, 2 sem., 2 dias');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto e 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 h, 1 min, 1 s');

        test.equal(clockformatted_2[0], '2 horas, 2 minutos e 2 segundos');
        test.equal(clockformatted_2[1], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[2], '2 h, 2 min, 2 s');
        test.equal(clockformatted_2[3], '2 h, 2 min, 2 s');

        test.done();
    },
    testDurFmt_pt_CV: function(test) {
        test.expect(16);
        // 1 18
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_18 = [];
        var clockformatted_1 = [],clockformatted_18 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "pt-CV", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_18.push(textfmt.format({year: 18,month: 18,week: 18,day: 18}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_18.push(textfmt.format({hour: 18,minute: 18,second: 18}).toString());
        }

        test.equal(textformatted_1[0], '1 ano, 1 mês, 1 semana e 1 dia');
        test.equal(textformatted_1[1], '1 ano, 1 mês, 1 sem., 1 dia');
        test.equal(textformatted_1[2], '1 ano, 1 mês, 1 sem., 1 dia');
        test.equal(textformatted_1[3], '1 ano, 1 mês, 1 sem., 1 dia');

        test.equal(textformatted_18[0], '18 anos, 18 meses, 18 semanas e 18 dias');
        test.equal(textformatted_18[1], '18 anos, 18 meses, 18 sem., 18 dias');
        test.equal(textformatted_18[2], '18 anos, 18 meses, 18 sem., 18 dias');
        test.equal(textformatted_18[3], '18 anos, 18 meses, 18 sem., 18 dias');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto e 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 h, 1 min, 1 s');

        test.equal(clockformatted_18[0], '18 horas, 18 minutos e 18 segundos');
        test.equal(clockformatted_18[1], '18 h, 18 min, 18 s');
        test.equal(clockformatted_18[2], '18 h, 18 min, 18 s');
        test.equal(clockformatted_18[3], '18 h, 18 min, 18 s');

        test.done();
    },
    testDurFmt_ur_PK: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_17 = [];
        var clockformatted_1 = [],clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ur-PK", style:"text", length:length[i]});

            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17,month: 17,week: 17,day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17,minute: 17,second: 17}).toString());
        }

        test.equal(textformatted_1[0], '‏1 سال, 1 مہینہ, 1 ہفتہ، اور 1 دن');
        test.equal(textformatted_1[1], '‏1 سال، 1 مہینہ، 1 ہفتہ، 1 دن');
        test.equal(textformatted_1[2], '‏1 سال، 1 مہینہ، 1 ہفتہ، 1 دن');
        test.equal(textformatted_1[3], '‏1 سال، 1 مہینہ، 1 ہفتہ، 1 دن');

        test.equal(textformatted_17[0], '‏17 سال, 17 مہینے, 17 ہفتے، اور 17 دن');
        test.equal(textformatted_17[1], '‏17 سال، 17 مہینے، 17 ہفتے، 17 دن');
        test.equal(textformatted_17[2], '‏17 سال، 17 مہینے، 17 ہفتے، 17 دن');
        test.equal(textformatted_17[3], '‏17 سال، 17 مہینے، 17 ہفتے، 17 دن');

        test.equal(clockformatted_1[0], '‏1 گھنٹہ, 1 منٹ، اور 1 سیکنڈ');
        test.equal(clockformatted_1[1], '‏1 گھنٹہ، 1 منٹ، 1 سیکنڈ');
        test.equal(clockformatted_1[2], '‏1 گھنٹہ، 1 منٹ، 1 سیکنڈ'); // CLDR 34 change(second)
        test.equal(clockformatted_1[3], '‏1 گھنٹہ، 1 منٹ، 1 سیکنڈ'); // CLDR 34 change(second)

        test.equal(clockformatted_17[0], '‏17 گھنٹے, 17 منٹ، اور 17 سیکنڈ');
        test.equal(clockformatted_17[1], '‏17 گھنٹے، 17 منٹ، 17 سیکنڈ');
        test.equal(clockformatted_17[2], '‏17 گھنٹے، 17 منٹ، 17 سیکنڈ'); // CLDR 34 change(second)
        test.equal(clockformatted_17[3], '‏17 گھنٹے، 17 منٹ، 17 سیکنڈ'); // CLDR 34 change(second)
        test.done();
    },
    testDurFmt_zh_Hans_SG: function(test) {
        test.expect(8);;
        // 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_16 = [];
        var clockformatted_16 = [];
        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "zh-Hans-SG", style:"text", length:length[i]});

            textformatted_16.push(textfmt.format({year: 16,month: 16,week: 16,day: 16}).toString());
            clockformatted_16.push(textfmt.format({hour: 16,minute: 16,second: 16}).toString());
        }

        test.equal(textformatted_16[0], '16年16个月16周16天');
        test.equal(textformatted_16[1], '16年16个月16周16天');
        test.equal(textformatted_16[2], '16年16个月16周16天');
        test.equal(textformatted_16[3], '16年16个月16周16天');

        test.equal(clockformatted_16[0], '16小时16分钟16秒');
        test.equal(clockformatted_16[1], '16小时16分钟16秒');
        test.equal(clockformatted_16[2], '16小时16分钟16秒');
        test.equal(clockformatted_16[3], '16小时16分钟16秒');

        test.done();
    },
    testDurFmt_zh_Hans_MY: function(test) {
        test.expect(8);;
        // 15
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_15 = [];
        var clockformatted_15 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "zh-Hans-MY", style:"text", length:length[i]});

            textformatted_15.push(textfmt.format({year: 15,month: 15,week: 15,day: 15}).toString());
            clockformatted_15.push(textfmt.format({hour: 15,minute: 15,second: 15}).toString());
        }

        test.equal(textformatted_15[0], '15年15个月15周15天');
        test.equal(textformatted_15[1], '15年15个月15周15天');
        test.equal(textformatted_15[2], '15年15个月15周15天');
        test.equal(textformatted_15[3], '15年15个月15周15天');

        test.equal(clockformatted_15[0], '15小时15分钟15秒钟');
        test.equal(clockformatted_15[1], '15小时15分钟15秒');
        test.equal(clockformatted_15[2], '15小时15分钟15秒');
        test.equal(clockformatted_15[3], '15小时15分钟15秒')

        test.done();
    },
    testDurFmt_ka_GE: function(test) {
        test.expect(16);
        // 1 18
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [],textformatted_18 = [];
        var clockformatted_1 = [],clockformatted_18 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ka-GE", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_18.push(textfmt.format({year: 18,month: 18,week: 18,day: 18}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_18.push(textfmt.format({hour: 18,minute: 18,second: 18}).toString());
        }

        test.equal(textformatted_1[0], '1 წელი, 1 თვე, 1 კვირა, 1 დღე');
        test.equal(textformatted_1[1], '1 წ, 1 თვე, 1 კვრ, 1 დღე');
        test.equal(textformatted_1[2], '1 წ, 1 თვე, 1 კვრ, 1 დღე');
        test.equal(textformatted_1[3], '1 წ, 1 თვე, 1 კვრ, 1 დღე');

        test.equal(textformatted_18[0], '18 წელი, 18 თვე, 18 კვირა, 18 დღე');
        test.equal(textformatted_18[1], '18 წ, 18 თვე, 18 კვრ, 18 დღე');
        test.equal(textformatted_18[2], '18 წ, 18 თვე, 18 კვრ, 18 დღე');
        test.equal(textformatted_18[3], '18 წ, 18 თვე, 18 კვრ, 18 დღე');

        test.equal(clockformatted_1[0], '1 საათი, 1 წუთი, 1 წამი');
        test.equal(clockformatted_1[1], '1 სთ, 1 წთ, 1 წმ');
        test.equal(clockformatted_1[2], '1სთ, 1წთ, 1წმ');
        test.equal(clockformatted_1[3], '1სთ, 1წთ, 1წმ');

        test.equal(clockformatted_18[0], '18 საათი, 18 წუთი, 18 წამი');
        test.equal(clockformatted_18[1], '18 სთ, 18 წთ, 18 წმ');
        test.equal(clockformatted_18[2], '18სთ, 18წთ, 18წმ');
        test.equal(clockformatted_18[3], '18სთ, 18წთ, 18წმ');

        test.done();
    },
    testDurFmt_be_BY: function(test) {
        test.expect(24);
        // 1 3 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [], textformatted_3 = [], textformatted_100 = [];
        var clockformatted_1 = [], clockformatted_3 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "be-BY", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_3.push(textfmt.format({year: 3,month: 3,week: 3,day: 3}).toString());
            textformatted_100.push(textfmt.format({year: 100,month: 100,week: 100,day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_3.push(textfmt.format({hour: 3,minute: 3,second: 3}).toString());
            clockformatted_100.push(textfmt.format({hour: 100,minute: 100,second: 100}).toString());
        }

        test.equal(textformatted_1[0], '1 год 1 месяц 1 тыдзень 1 суткі');
        test.equal(textformatted_1[1], '1 г. 1 мес. 1 тыдз 1 сут');
        test.equal(textformatted_1[2], '1 г. 1 мес. 1 тыдз 1 сут');
        test.equal(textformatted_1[3], '1 г. 1 мес. 1 тыдз 1 сут');

        test.equal(textformatted_3[0], '3 гады 3 месяца 3 тыдні 3 сутак');
        test.equal(textformatted_3[1], '3 г. 3 мес. 3 тыдз 3 сут');
        test.equal(textformatted_3[2], '3 г. 3 мес. 3 тыдз 3 сут');
        test.equal(textformatted_3[3], '3 г. 3 мес. 3 тыдз 3 сут');

        test.equal(textformatted_100[0], '100 гадоў 100 месяцаў 100 тыдняў 100 сутак');
        test.equal(textformatted_100[1], '100 г. 100 мес. 100 тыдз 100 сут');
        test.equal(textformatted_100[2], '100 г. 100 мес. 100 тыдз 100 сут');
        test.equal(textformatted_100[3], '100 г. 100 мес. 100 тыдз 100 сут');

        test.equal(clockformatted_1[0], '1 гадзіна 1 хвіліна 1 секунда');
        test.equal(clockformatted_1[1], '1 гадз 1 хв 1 с');
        test.equal(clockformatted_1[2], '1 гадз 1 хв 1 с');
        test.equal(clockformatted_1[3], '1 гадз 1 хв 1 с');

        test.equal(clockformatted_3[0], '3 гадзіны 3 хвіліны 3 секунды');
        test.equal(clockformatted_3[1], '3 гадз 3 хв 3 с');
        test.equal(clockformatted_3[2], '3 гадз 3 хв 3 с');
        test.equal(clockformatted_3[3], '3 гадз 3 хв 3 с');

        test.equal(clockformatted_100[0], '100 гадзін 100 хвілін 100 секунд');
        test.equal(clockformatted_100[1], '100 гадз 100 хв 100 с');
        test.equal(clockformatted_100[2], '100 гадз 100 хв 100 с');
        test.equal(clockformatted_100[3], '100 гадз 100 хв 100 с');
        test.done();
    },
    testDurFmt_lo_LA: function(test) {
        test.expect(16);
        // 1 18
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];
        var textformatted_1 = [],textformatted_13 = [];
        var clockformatted_1 = [],clockformatted_13 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "lo-LA", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_13.push(textfmt.format({year: 13,month: 13,week: 13,day: 13}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_13.push(textfmt.format({hour: 13,minute: 13,second: 13}).toString());
        }

        test.equal(textformatted_1[0], '1 ປີ, 1 ເດືອນ, 1 ອາທິດ, 1 ມື້');
        test.equal(textformatted_1[1], '1 ປີ, 1 ດ., 1 ອທ., 1 ມື້');
        test.equal(textformatted_1[2], '1 ປ 1 ດ. 1 ອທ. 1 ມ.');
        test.equal(textformatted_1[3], '1 ປ 1 ດ. 1 ອທ. 1 ມ.');

        test.equal(textformatted_13[0], '13 ປີ, 13 ເດືອນ, 13 ອາທິດ, 13 ມື້');
        test.equal(textformatted_13[1], '13 ປີ, 13 ດ., 13 ອທ., 13 ມື້');
        test.equal(textformatted_13[2], '13 ປ 13 ດ. 13 ອທ. 13 ມ.');
        test.equal(textformatted_13[3], '13 ປ 13 ດ. 13 ອທ. 13 ມ.');

        test.equal(clockformatted_1[0], '1 ຊົ່ວໂມງ, 1 ນາທີ, 1 ວິນາທີ');
        test.equal(clockformatted_1[1], '1 ຊມ, 1 ນທ, 1 ວິ');
        test.equal(clockformatted_1[2], '1 ຊມ 1 ນທ 1 ວິ');
        test.equal(clockformatted_1[3], '1 ຊມ 1 ນທ 1 ວິ');

        test.equal(clockformatted_13[0], '13 ຊົ່ວໂມງ, 13 ນາທີ, 13 ວິນາທີ');
        test.equal(clockformatted_13[1], '13 ຊມ, 13 ນທ, 13 ວິ');
        test.equal(clockformatted_13[2], '13 ຊມ 13 ນທ 13 ວິ');
        test.equal(clockformatted_13[3], '13 ຊມ 13 ນທ 13 ວິ');

        test.done();
    },
    testDurFmt_ky_KG: function(test) {
        test.expect(16);
        // 1 18
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];
        var textformatted_1 = [],textformatted_18 = [];
        var clockformatted_1 = [],clockformatted_18 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ky-KG", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_18.push(textfmt.format({year: 18,month: 18,week: 18,day: 18}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_18.push(textfmt.format({hour: 18,minute: 18,second: 18}).toString());
        }
        test.equal(textformatted_1[0], '1 жыл, 1 ай, 1 апта, 1 күн');
        test.equal(textformatted_1[1], '1-ж., 1 ай, 1 апт, 1 күн');
        test.equal(textformatted_1[2], '1 ж., 1 ай, 1 ап, 1 кн');
        test.equal(textformatted_1[3], '1 ж. 1 ай 1 ап 1 кн');

        test.equal(textformatted_18[0], '18 жыл, 18 ай, 18 апта, 18 күн');
        test.equal(textformatted_18[1], '18 ж., 18 ай, 18 апт, 18 күн');
        test.equal(textformatted_18[2], '18 ж., 18 ай, 18 ап, 18 кн');
        test.equal(textformatted_18[3], '18 ж. 18 ай 18 ап 18 кн');

        test.equal(clockformatted_1[0], '1 саат, 1 мүнөт, 1 секунд');
        test.equal(clockformatted_1[1], '1 ст, 1 мүн, 1 сек');
        test.equal(clockformatted_1[2], '1 ст, 1 мүн, 1 сек');
        test.equal(clockformatted_1[3], '1 ст 1 мүн 1 сек');

        test.equal(clockformatted_18[0], '18 саат, 18 мүнөт, 18 секунд');
        test.equal(clockformatted_18[1], '18 ст, 18 мүн, 18 сек');
        test.equal(clockformatted_18[2], '18 ст, 18 мүн, 18 сек');
        test.equal(clockformatted_18[3], '18 ст 18 мүн 18 сек');
        test.done();
    },
    testDurFmt_ca_AD: function(test) {
        test.expect(16);
        // 1 11
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];
        var textformatted_1 = [],textformatted_11 = [];
        var clockformatted_1 = [],clockformatted_11 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ca-AD", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
        }
        test.equal(textformatted_1[0], '1 any, 1 mes, 1 setmana i 1 dia');
        test.equal(textformatted_1[1], '1 any, 1 mes, 1 setm., 1 dia');
        test.equal(textformatted_1[2], '1 any, 1 m, 1 setm., 1 d');
        test.equal(textformatted_1[3], '1 any, 1 m, 1 setm., 1 d');

        test.equal(textformatted_11[0], '11 anys, 11 mesos, 11 setmanes i 11 dies');
        test.equal(textformatted_11[1], '11 anys, 11 m, 11 setm., 11 dies');
        test.equal(textformatted_11[2], '11 anys, 11 m, 11 setm., 11 d');
        test.equal(textformatted_11[3], '11 anys, 11 m, 11 setm., 11 d');

        test.equal(clockformatted_1[0], '1 hora, 1 minut i 1 segon');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 h, 1 min, 1 s');

        test.equal(clockformatted_11[0], '11 hores, 11 minuts i 11 segons');
        test.equal(clockformatted_11[1], '11 h, 11 min, 11 s');
        test.equal(clockformatted_11[2], '11 h, 11 min, 11 s');
        test.equal(clockformatted_11[3], '11 h, 11 min, 11 s');

        test.done();
    },
    testDurFmt_ca_ES: function(test) {
        test.expect(16);
        // 1 18
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];
        var textformatted_1 = [],textformatted_18 = [];
        var clockformatted_1 = [],clockformatted_18 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ca-ES", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_18.push(textfmt.format({year: 18,month: 18,week: 18,day: 18}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_18.push(textfmt.format({hour: 18,minute: 18,second: 18}).toString());
        }

        test.equal(textformatted_1[0], '1 any, 1 mes, 1 setmana i 1 dia');
        test.equal(textformatted_1[1], '1 any, 1 mes, 1 setm., 1 dia');
        test.equal(textformatted_1[2], '1 any, 1 m, 1 setm., 1 d');
        test.equal(textformatted_1[3], '1 any, 1 m, 1 setm., 1 d');

        test.equal(textformatted_18[0], '18 anys, 18 mesos, 18 setmanes i 18 dies');
        test.equal(textformatted_18[1], '18 anys, 18 m, 18 setm., 18 dies');
        test.equal(textformatted_18[2], '18 anys, 18 m, 18 setm., 18 d');
        test.equal(textformatted_18[3], '18 anys, 18 m, 18 setm., 18 d');

        test.equal(clockformatted_1[0], '1 hora, 1 minut i 1 segon');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 h, 1 min, 1 s');

        test.equal(clockformatted_18[0], '18 hores, 18 minuts i 18 segons');
        test.equal(clockformatted_18[1], '18 h, 18 min, 18 s');
        test.equal(clockformatted_18[2], '18 h, 18 min, 18 s');
        test.equal(clockformatted_18[3], '18 h, 18 min, 18 s');
        test.done();
    },
    testDurFmt_hy_AM: function(test) {
        test.expect(16);
        // 1 18
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];
        var textformatted_1 = [],textformatted_15 = [];
        var clockformatted_1 = [],clockformatted_15 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "hy-AM", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_15.push(textfmt.format({year: 15,month: 15,week: 15,day: 15}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_15.push(textfmt.format({hour: 15,minute: 15,second: 15}).toString());
        }

        test.equal(textformatted_1[0], '1 տարի, 1 ամիս, 1 շաբաթ և 1 օր');
        test.equal(textformatted_1[1], '1 տ 1 ամս 1 շաբ 1 օր');
        test.equal(textformatted_1[2], '1 տ 1ա 1 շ 1 օ');
        test.equal(textformatted_1[3], '1 տ 1ա 1 շ 1 օ');

        test.equal(textformatted_15[0], '15 տարի, 15 ամիս, 15 շաբաթ և 15 օր');
        test.equal(textformatted_15[1], '15 տ 15 ամս 15 շաբ 15 օր');
        test.equal(textformatted_15[2], '15 տ 15ա 15 շ 15 օ');
        test.equal(textformatted_15[3], '15 տ 15ա 15 շ 15 օ');

        test.equal(clockformatted_1[0], '1 ժամ, 1 րոպե և 1 վայրկյան');
        test.equal(clockformatted_1[1], '1 ժ 1 ր 1 վրկ');
        test.equal(clockformatted_1[2], '1ժ 1ր 1 վ');
        test.equal(clockformatted_1[3], '1ժ 1ր 1 վ');

        test.equal(clockformatted_15[0], '15 ժամ, 15 րոպե և 15 վայրկյան');
        test.equal(clockformatted_15[1], '15 ժ 15 ր 15 վրկ');
        test.equal(clockformatted_15[2], '15ժ 15ր 15 վ');
        test.equal(clockformatted_15[3], '15ժ 15ր 15 վ');
        test.done();
    },
    testDurFmt_gl_ES: function(test) {
        test.expect(16);
        // 1 11
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];
        var textformatted_1 = [],textformatted_11 = [];
        var clockformatted_1 = [],clockformatted_11 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "gl-ES", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
        }
        test.equal(textformatted_1[0], '1 ano, 1 mes, 1 semana e 1 día');
        test.equal(textformatted_1[1], '1 ano, 1 mes, 1 sem., 1 día');
        test.equal(textformatted_1[2], '1 a., 1 m., 1 sem., 1 d');
        test.equal(textformatted_1[3], '1 a., 1 m., 1 sem., 1 d');

        test.equal(textformatted_11[0], '11 anos, 11 meses, 11 semanas e 11 días');
        test.equal(textformatted_11[1], '11 anos, 11 meses, 11 sem., 11 días');
        test.equal(textformatted_11[2], '11 a., 11 m., 11 sem., 11 d');
        test.equal(textformatted_11[3], '11 a., 11 m., 11 sem., 11 d');

        test.equal(clockformatted_1[0], '1 hora, 1 minuto e 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 h, 1 min, 1 s');

        test.equal(clockformatted_11[0], '11 horas, 11 minutos e 11 segundos');
        test.equal(clockformatted_11[1], '11 h, 11 min, 11 s');
        test.equal(clockformatted_11[2], '11 h, 11 min, 11 s');
        test.equal(clockformatted_11[3], '11 h, 11 min, 11 s');

            test.done();
    },
    testDurFmt_eu_ES: function(test) {
        test.expect(16);
        // 1 11
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [], textformatted_11 = [];
        var clockformatted_1 = [], clockformatted_11 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "eu-ES", style:"text", length:length[i]});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_11.push(textfmt.format({year: 11,month: 11,week: 11,day: 11}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_11.push(textfmt.format({hour: 11,minute: 11,second: 11}).toString());
        }

        test.equal(textformatted_1[0], '1 urte, 1 hilabete, 1 aste eta 1 egun');
        test.equal(textformatted_1[1], '1 urte, 1 hilabete, 1 aste, 1 egun');
        test.equal(textformatted_1[2], '1 u., 1 hil, 1 aste, 1 e.');
        test.equal(textformatted_1[3], '1 u., 1 hil, 1 aste, 1 e.');

        test.equal(textformatted_11[0], '11 urte, 11 hilabete, 11 aste eta 11 egun');
        test.equal(textformatted_11[1], '11 urte, 11 hilabete, 11 aste, 11 egun');
        test.equal(textformatted_11[2], '11 u., 11 hil, 11 aste, 11 e.');
        test.equal(textformatted_11[3], '11 u., 11 hil, 11 aste, 11 e.');

        test.equal(clockformatted_1[0], '1 ordu, 1 minutu eta 1 segundo');
        test.equal(clockformatted_1[1], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1 h, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 h, 1 min, 1 s');

        test.equal(clockformatted_11[0], '11 ordu, 11 minutu eta 11 segundo');
        test.equal(clockformatted_11[1], '11 h, 11 min, 11 s');
        test.equal(clockformatted_11[2], '11 h, 11 min, 11 s');
        test.equal(clockformatted_11[3], '11 h, 11 min, 11 s');
        test.done();
    },
    testDurFmt_ne_NP: function(test) {
        test.expect(16);
        // 1 11
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [], textformatted_9 = [];
        var clockformatted_1 = [], clockformatted_9 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ne-NP", style:"text", length:length[i], useNative: false});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_9.push(textfmt.format({year: 9,month: 9,week: 9,day: 9}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_9.push(textfmt.format({hour: 9,minute: 9,second: 9}).toString());
        }

        test.equal(textformatted_1[0], '1 वर्ष, 1 महिना, 1 हप्ता,1 दिन');
        test.equal(textformatted_1[1], '1 वर्ष, 1 महिना, 1 हप्ता, 1 दिन');
        test.equal(textformatted_1[2], '1 वर्ष1 महिना1 हप्ता1 दिन');
        test.equal(textformatted_1[3], '1 वर्ष1 महिना1 हप्ता1 दिन');

        test.equal(textformatted_9[0], '9 वर्ष, 9 महिना, 9 हप्ता,9 दिन');
        test.equal(textformatted_9[1], '9 वर्ष, 9 महिना, 9 हप्ता, 9 दिन');
        test.equal(textformatted_9[2], '9 वर्ष9 महिना9 हप्ता9 दिन');
        test.equal(textformatted_9[3], '9 वर्ष9 महिना9 हप्ता9 दिन');

        test.equal(clockformatted_1[0], '1 घण्टा, 1 मिनेट,1 सेकेन्ड');
        test.equal(clockformatted_1[1], '1 घण्टा, 1 मिनेट, 1 सेकेन्ड');
        test.equal(clockformatted_1[2], '1 घण्टा1 मिनेट1 सेकेन्ड');
        test.equal(clockformatted_1[3], '1 घण्टा1 मिनेट1 सेकेन्ड');

        test.equal(clockformatted_9[0], '9 घण्टा, 9 मिनेट,9 सेकेन्ड');
        test.equal(clockformatted_9[1], '9 घण्टा, 9 मिनेट, 9 सेकेन्ड');
        test.equal(clockformatted_9[2], '9 घण्टा9 मिनेट9 सेकेन्ड');
        test.equal(clockformatted_9[3], '9 घण्टा9 मिनेट9 सेकेन्ड');

        test.done();
    },
    testDurFmt_my_MM: function(test) {
        test.expect(16);
        // 1 14
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [], textformatted_14 = [];
        var clockformatted_1 = [], clockformatted_14 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "my-MM", style:"text", length:length[i], useNative: false});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_14.push(textfmt.format({year: 14,month: 14,week: 14,day: 14}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_14.push(textfmt.format({hour: 14,minute: 14,second: 14}).toString());
        }

        test.equal(textformatted_1[0], '1 နှစ်- 1 လ- 1 ပတ်နှင့် 1 ရက်');
        test.equal(textformatted_1[1], '1 နှစ် - 1 လ - 1 ပတ် - 1 ရက်');
        test.equal(textformatted_1[2], '1 နှစ် 1 လ 1 ပတ် 1 ရက်');
        test.equal(textformatted_1[3], '1 နှစ် 1 လ 1 ပတ် 1 ရက်');

        test.equal(textformatted_14[0], '14 နှစ်- 14 လ- 14 ပတ်နှင့် 14 ရက်');
        test.equal(textformatted_14[1], '14 နှစ် - 14 လ - 14 ပတ် - 14 ရက်');
        test.equal(textformatted_14[2], '14 နှစ် 14 လ 14 ပတ် 14 ရက်');
        test.equal(textformatted_14[3], '14 နှစ် 14 လ 14 ပတ် 14 ရက်');

        test.equal(clockformatted_1[0], '1 နာရီ- 1 မိနစ်နှင့် 1 စက္ကန့်');
        test.equal(clockformatted_1[1], '1 နာရီ - 1 မိနစ် - 1 စက္ကန့်');
        test.equal(clockformatted_1[2], '1 နာရီ 1 မိနစ် 1 s');
        test.equal(clockformatted_1[3], '1 နာရီ 1 မိနစ် 1 s');

        test.equal(clockformatted_14[0], '14 နာရီ- 14 မိနစ်နှင့် 14 စက္ကန့်');
        test.equal(clockformatted_14[1], '14 နာရီ - 14 မိနစ် - 14 စက္ကန့်');
        test.equal(clockformatted_14[2], '14 နာရီ 14 မိနစ် 14 s');
        test.equal(clockformatted_14[3], '14 နာရီ 14 မိနစ် 14 s');

        test.done();
    },
    testDurFmt_tk_TM: function(test) {
        test.expect(16);
        // 1 5
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];
        var textformatted_1 = [], textformatted_5 = [];
        var clockformatted_1 = [], clockformatted_5 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "tk-TM", style:"text", length:length[i], useNative: false});
            textformatted_1.push(textfmt.format({year: 1, month: 1, week: 1, day: 1}).toString());
            textformatted_5.push(textfmt.format({year: 5, month: 5, week: 5, day: 5}).toString());

            clockformatted_1.push(textfmt.format({hour: 1, minute: 1, second: 1}).toString());
            clockformatted_5.push(textfmt.format({hour: 5, minute: 5, second: 5}).toString());
        }

        test.equal(textformatted_1[0], '1 ýyl, 1 aý, 1 hepde, 1 gün');
        test.equal(textformatted_1[1], '1 ý., 1 a, 1 hep, 1 gün');
        test.equal(textformatted_1[2], '1ý, 1a, 1h, 1g');
        test.equal(textformatted_1[3], '1ý 1a 1h 1g');

        test.equal(textformatted_5[0], '5 ýyl, 5 aý, 5 hepde, 5 gün');
        test.equal(textformatted_5[1], '5 ý., 5 a, 5 hep, 5 gün');
        test.equal(textformatted_5[2], '5ý, 5a, 5h, 5g');
        test.equal(textformatted_5[3], '5ý 5a 5h 5g');

        test.equal(clockformatted_1[0], '1 sagat, 1 minut, 1 sekunt');
        test.equal(clockformatted_1[1], '1 sag, 1 min, 1 sek');
        test.equal(clockformatted_1[2], '1sg, 1m, 1se');
        test.equal(clockformatted_1[3], '1sg 1m 1se');

        test.equal(clockformatted_5[0], '5 sagat, 5 minut, 5 sekunt');
        test.equal(clockformatted_5[1], '5 sag, 5 min, 5 sek');
        test.equal(clockformatted_5[2], '5sg, 5m, 5se');
        test.equal(clockformatted_5[3], '5sg 5m 5se');
        test.done();
    },
    testDurFmt_tg_TJ: function(test) {
        test.expect(16);
        // 1 5
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];
        var textformatted_1 = [], textformatted_5 = [];
        var clockformatted_1 = [], clockformatted_5 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "tg-TJ", style:"text", length:length[i], useNative: false});
            textformatted_1.push(textfmt.format({year: 1,month: 1,week: 1,day: 1}).toString());
            textformatted_5.push(textfmt.format({year: 5,month: 5,week: 5,day: 5}).toString());

            clockformatted_1.push(textfmt.format({hour: 1,minute: 1,second: 1}).toString());
            clockformatted_5.push(textfmt.format({hour: 5,minute: 5,second: 5}).toString());
        }

        test.equal(textformatted_1[0], '1 сол, 1 моҳ, 1 ҳафта, 1 рӯз');
        test.equal(textformatted_1[1], '1 сол, 1 моҳ, 1 ҳаф, 1 рӯз');
        test.equal(textformatted_1[2], '1 со, 1 мо, 1 ҳа, 1 рӯ');
        test.equal(textformatted_1[3], '1 с 1 м 1 ҳ 1 р');

        test.equal(textformatted_5[0], '5 сол, 5 моҳ, 5 ҳафта, 5 рӯз');
        test.equal(textformatted_5[1], '5 сол, 5 моҳ, 5 ҳаф, 5 рӯз');
        test.equal(textformatted_5[2], '5 со, 5 мо, 5 ҳа, 5 рӯ');
        test.equal(textformatted_5[3], '5 с 5 м 5 ҳ 5 р');

        test.equal(clockformatted_1[0], '1 соат, 1 дақиқа, 1 сония');
        test.equal(clockformatted_1[1], '1 соа, 1 дақ, 1 сон');
        test.equal(clockformatted_1[2], '1 со, 1 да, 1 со');
        test.equal(clockformatted_1[3], '1 с 1 д 1 с');

        test.equal(clockformatted_5[0], '5 соат, 5 дақиқа, 5 сония');
        test.equal(clockformatted_5[1], '5 соа, 5 дақ, 5 сон');
        test.equal(clockformatted_5[2], '5 со, 5 да, 5 со');
        test.equal(clockformatted_5[3], '5 с 5 д 5 с');
        test.done();
    },
    testDurFmt_mt_MT: function(test) {
        test.expect(32);
        // 1 5 14 100
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [], textformatted_5 = [], textformatted_14 = [], textformatted_100 = [];
        var clockformatted_1 = [], clockformatted_5 = [], clockformatted_14 = [], clockformatted_100 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "mt-MT", style:"text", length:length[i], useNative: false});
            textformatted_1.push(textfmt.format({year: 1, month: 1, week: 1, day: 1}).toString());
            textformatted_5.push(textfmt.format({year: 5, month: 5, week: 5, day: 5}).toString());
            textformatted_14.push(textfmt.format({year: 14,month: 14,week: 14,day: 14}).toString());
            textformatted_100.push(textfmt.format({year: 100, month: 100, week: 100, day: 100}).toString());

            clockformatted_1.push(textfmt.format({hour: 1, minute: 1, second: 1}).toString());
            clockformatted_5.push(textfmt.format({hour: 5, minute: 5, second: 5}).toString());
            clockformatted_14.push(textfmt.format({hour: 14, minute: 14, second: 14}).toString());
            clockformatted_100.push(textfmt.format({hour: 100, minute: 100, second: 100}).toString());
        }

        test.equal(textformatted_1[0], 'Sena, Xahar, Ġimgħa, u 1 jum');
        test.equal(textformatted_1[1], 'Sen., Xah., Ġim., 1 jum');
        test.equal(textformatted_1[2], 'Se., Xa., Ġi., 1 ju.');
        test.equal(textformatted_1[3], '1 s, 1 x, 1 g, 1 j');

        test.equal(textformatted_5[0], '5 snin, 5 xhur, 5 ġimgħat, u 5 ijiem');
        test.equal(textformatted_5[1], '5 sni., 5 xhu., 5 ġim., 5 iji.');
        test.equal(textformatted_5[2], '5 sn., 5 xh., 5 ġi., 5 ij.');
        test.equal(textformatted_5[3], '5 s, 5 x, 5 g, 5 j');

        test.equal(textformatted_14[0], '14-il sena, 14-il xahar, 14-il ġimgħa, u 14-il jum');
        test.equal(textformatted_14[1], '14-il sen., 14-il xah., 14-il ġim., 14-il jum');
        test.equal(textformatted_14[2], '14-il se., 14-il xa., 14-il ġi., 14-il ju.');
        test.equal(textformatted_14[3], '14 s, 14 x, 14 g, 14 j');

        test.equal(textformatted_100[0], '100 sena, 100 xahar, 100 ġimgħa, u 100 jum');
        test.equal(textformatted_100[1], '100 sen., 100 xah., 100 ġim., 100 jum');
        test.equal(textformatted_100[2], '100 se., 100 xa., 100 ġi., 100 ju.');
        test.equal(textformatted_100[3], '100 s, 100 x, 100 g, 100 j');

        test.equal(clockformatted_1[0], '1 siegħa, 1 minuta, u 1 sekonda');
        test.equal(clockformatted_1[1], '1 sie., 1 min., 1 sek.');
        test.equal(clockformatted_1[2], '1 si., 1 mi., 1 se.');
        test.equal(clockformatted_1[3], '1 s, 1 m, 1 s');

        test.equal(clockformatted_5[0], '5 sigħat, 5 minuti, u 5 sekondi');
        test.equal(clockformatted_5[1], '5 sig., 5 min., 5 sek.');
        test.equal(clockformatted_5[2], '5 si., 5 mi., 5 se.');
        test.equal(clockformatted_5[3], '5 s, 5 m, 5 s');

        test.equal(clockformatted_14[0], '14-il siegħa, 14-il minuta, u 14-il sekonda');
        test.equal(clockformatted_14[1], '14-il sie., 14-il min., 14-il sek.');
        test.equal(clockformatted_14[2], '14-il si., 14-il mi., 14-il se.');
        test.equal(clockformatted_14[3], '14 s, 14 m, 14 s');

        test.equal(clockformatted_100[0], '100 siegħa, 100 minuta, u 100 sekonda');
        test.equal(clockformatted_100[1], '100 sie., 100 min., 100 sek.');
        test.equal(clockformatted_100[2], '100 si., 100 mi., 100 se.');
        test.equal(clockformatted_100[3], '100 s, 100 m, 100 s');

        test.done();
    },
    testDurFmt_zu_ZA: function(test) {
        test.expect(16);
        // 1 17
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];
        var textformatted_1 = [], textformatted_17 = [];
        var clockformatted_1 = [], clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "zu-ZA", style:"text", length:length[i], useNative: false});
            textformatted_1.push(textfmt.format({year: 1, month: 1, week: 1, day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17, month: 17, week: 17, day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1, minute: 1, second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17, minute: 17, second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 unyaka, 1 inyanga, 1 iviki, 1 usuku');
        test.equal(textformatted_1[1], '1 nyk, 1 nyanga, 1 viki, 1 usuku');
        test.equal(textformatted_1[2], '1 nk, 1 ng, 1 v, 1 suku');
        test.equal(textformatted_1[3], '1 nk, 1 ng, 1 v, 1 suku');

        test.equal(textformatted_17[0], '17 iminyaka, 17 izinyanga, 17 amaviki, 17 izinsuku');
        test.equal(textformatted_17[1], '17 nyk, 17 izinyanga, 17 amaviki, 17 izinsuku');
        test.equal(textformatted_17[2], '17 nk, 17 ng, 17 v, 17 suku');
        test.equal(textformatted_17[3], '17 nk, 17 ng, 17 v, 17 suku');

        test.equal(clockformatted_1[0], '1 ihora, 1 iminithi, 1 isekhondi');
        test.equal(clockformatted_1[1], '1 hora, 1 iminithi, 1 sekhondi');
        test.equal(clockformatted_1[2], '1 hora, 1 umzuzu, 1 s');
        test.equal(clockformatted_1[3], '1 hora, 1 umzuzu, 1 s');

        test.equal(clockformatted_17[0], '17 amahora, 17 amaminithi, 17 amasekhondi');
        test.equal(clockformatted_17[1], '17 hr, 17 iminithi, 17 sec');
        test.equal(clockformatted_17[2], '17 hora, 17 umzuzu, 17 s');
        test.equal(clockformatted_17[3], '17 hora, 17 umzuzu, 17 s');
        test.done();
    },

    testDurFmt_wo_SN: function(test) {
        test.expect(16);
        // 1 3
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [], textformatted_3 = [];
        var clockformatted_1 = [], clockformatted_3 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "wo-SN", style:"text", length:length[i], useNative: false});
            textformatted_1.push(textfmt.format({year: 1, month: 1, week: 1, day: 1}).toString());
            textformatted_3.push(textfmt.format({year: 3, month: 3, week: 3, day: 3}).toString());

            clockformatted_1.push(textfmt.format({hour: 1, minute: 1, second: 1}).toString());
            clockformatted_3.push(textfmt.format({hour: 3, minute: 3, second: 3}).toString());
        }

        test.equal(textformatted_1[0], '1 at, 1 weer, 1 ayubés, 1 bés');
        test.equal(textformatted_1[1], '1 at, 1 wee, 1 ayu, 1 bés');
        test.equal(textformatted_1[2], '1 at, 1 we, 1 ay, 1 bé');
        test.equal(textformatted_1[3], '1 at 1 we 1 ay 1 b');

        test.equal(textformatted_3[0], '3 at, 3 weer, 3 ayubés, 3 bés');
        test.equal(textformatted_3[1], '3 at, 3 wee, 3 ayu, 3 bés');
        test.equal(textformatted_3[2], '3 at, 3 we, 3 ay, 3 bé');
        test.equal(textformatted_3[3], '3 at 3 we 3 ay 3 b');

        test.equal(clockformatted_1[0], '1 waxtu, 1 simili, 1 saa');
        test.equal(clockformatted_1[1], '1 wax, 1 sim, 1 saa');
        test.equal(clockformatted_1[2], '1 wa, 1 si, 1 sa');
        test.equal(clockformatted_1[3], '1 wa 1 si 1 sa');

        test.equal(clockformatted_3[0], '3 waxtu, 3 simili, 3 saa');
        test.equal(clockformatted_3[1], '3 wax, 3 sim, 3 saa');
        test.equal(clockformatted_3[2], '3 wa, 3 si, 3 sa');
        test.equal(clockformatted_3[3], '3 wa 3 si 3 sa');
        test.done();
    },
    testDurFmt_lb_LU: function(test) {
        test.expect(16);
        // 1 18
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];
        var textformatted_1 = [], textformatted_18 = [];
        var clockformatted_1 = [], clockformatted_18 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "lb-LU", style:"text", length:length[i], useNative: false});
            textformatted_1.push(textfmt.format({year: 1, month: 1, week: 1, day: 1}).toString());
            textformatted_18.push(textfmt.format({year: 18, month: 18, week: 18, day: 18}).toString());

            clockformatted_1.push(textfmt.format({hour: 1, minute: 1, second: 1}).toString());
            clockformatted_18.push(textfmt.format({hour: 18, minute: 18, second: 18}).toString());
        }

        test.equal(textformatted_1[0], '1 Joer, 1 Mount, 1 Woch, 1 Dag');
        test.equal(textformatted_1[1], '1 J, 1 Mnt, 1 W, 1 D');
        test.equal(textformatted_1[2], '1 J, 1 M, 1 W, 1 D');
        test.equal(textformatted_1[3], '1 J 1 M 1 W 1 D');

        test.equal(textformatted_18[0], '18 Joer, 18 Méint, 18 Wochen, 18 Deeg');
        test.equal(textformatted_18[1], '18 J, 18 Mnt, 18 W, 18 D');
        test.equal(textformatted_18[2], '18 J, 18 M, 18 W, 18 D');
        test.equal(textformatted_18[3], '18 J 18 M 18 W 18 D');

        test.equal(clockformatted_1[0], '1 Stonn, 1 Minutt, 1 Sekonn');
        test.equal(clockformatted_1[1], '1 St., 1 Min., 1 Sek.');
        test.equal(clockformatted_1[2], '1 st, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 st 1 min 1 s');

        test.equal(clockformatted_18[0], '18 Stonnen, 18 Minutten, 18 Sekonnen');
        test.equal(clockformatted_18[1], '18 St., 18 Min., 18 Sek.');
        test.equal(clockformatted_18[2], '18 st, 18 min, 18 s');
        test.equal(clockformatted_18[3], '18 st 18 min 18 s');
        test.done();
    },
    testDurFmt_ig_NG: function(test) {
        test.expect(16);
        // 1 3
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];

        var textformatted_1 = [], textformatted_17 = [];
        var clockformatted_1 = [], clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ig-NG", style:"text", length:length[i], useNative: false});
            textformatted_1.push(textfmt.format({year: 1, month: 1, week: 1, day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17, month: 17, week: 17, day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1, minute: 1, second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17, minute: 17, second: 17}).toString());
        }

        test.equal(textformatted_1[0], 'Afọ 1, Ọnwa 1, Izu 1, Ụbọchị 1');
        test.equal(textformatted_1[1], '1 y, 1 mths, 1 wks, 1 Ọtụtụ Ubochi');
        test.equal(textformatted_1[2], '1 y, 1 mths, 1 wks, 1 Ọtụtụ Ubochi');
        test.equal(textformatted_1[3], '1 y, 1 mths, 1 wks, 1 Ọtụtụ Ubochi');

        test.equal(textformatted_17[0], 'Afọ 17, Ọnwa 17, Izu 17, Ụbọchị 17');
        test.equal(textformatted_17[1], '17 y, 17 mths, 17 wks, 17 Ọtụtụ Ubochi');
        test.equal(textformatted_17[2], '17 y, 17 mths, 17 wks, 17 Ọtụtụ Ubochi');
        test.equal(textformatted_17[3], '17 y, 17 mths, 17 wks, 17 Ọtụtụ Ubochi');

        test.equal(clockformatted_1[0], 'awa 1, 1 Nkeji, 1 sekọnd');
        test.equal(clockformatted_1[1], '1 awa, 1 min, 1 s');
        test.equal(clockformatted_1[2], '1 awa, 1 min, 1 s');
        test.equal(clockformatted_1[3], '1 awa, 1 min, 1 s');

        test.equal(clockformatted_17[0], 'awa 17, 17 Nkeji, 17 sekọnd');
        test.equal(clockformatted_17[1], '17 awa, 17 min, 17 s');
        test.equal(clockformatted_17[2], '17 awa, 17 min, 17 s');
        test.equal(clockformatted_17[3], '17 awa, 17 min, 17 s');
        test.done();
    },
    testDurFmt_ps_AF: function(test) {
        test.expect(16);
        // 1 16
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];
        var textformatted_1 = [], textformatted_16 = [];
        var clockformatted_1 = [], clockformatted_16 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ps-AF", style:"text", length:length[i], useNative: false});
            textformatted_1.push(textfmt.format({year: 1, month: 1, week: 1, day: 1}).toString());
            textformatted_16.push(textfmt.format({year: 16, month: 16, week: 16, day: 16}).toString());

            clockformatted_1.push(textfmt.format({hour: 1, minute: 1, second: 1}).toString());
            clockformatted_16.push(textfmt.format({hour: 16, minute: 16, second: 16}).toString());
        }

        test.equal(textformatted_1[0], '‏1 کال, 1 مياشت, 1 اونۍ, 1 ورځ');
        test.equal(textformatted_1[1], '‏1/کال, 1 m, 1 w, 1 ورځ');
        test.equal(textformatted_1[2], '‏1 y 1 m 1 w 1 ورځ');
        test.equal(textformatted_1[3], '‏1 y 1 m 1 w 1 ورځ');

        test.equal(textformatted_16[0], '‏16 کالونه, 16 مياشتې, 16 اونۍ, 16 ورځې');
        test.equal(textformatted_16[1], '‏16 کالونه, 16 mths, 16 wks, 16 ورځې');
        test.equal(textformatted_16[2], '‏16 y 16 m 16 w 16d');
        test.equal(textformatted_16[3], '‏16 y 16 m 16 w 16d');

        test.equal(clockformatted_1[0], '‏1 ساعت, 1 دقیقه, 1 ثانیه');
        test.equal(clockformatted_1[1], '‏1 h, 1 دقیقه, 1 sec');
        test.equal(clockformatted_1[2], '‏1 h 1m 1 s');
        test.equal(clockformatted_1[3], '‏1 h 1m 1 s');

        test.equal(clockformatted_16[0], '‏16 h, 16 دقیقې, 16 ثانیې');
        test.equal(clockformatted_16[1], '‏16 h, 16 دقیقه, 16 sec');
        test.equal(clockformatted_16[2], '‏16 h 16m 16 s');
        test.equal(clockformatted_16[3], '‏16 h 16m 16 s');
        test.done();
    },
    testDurFmt_ps_PK: function(test) {
        test.expect(16);
        // 1 11
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];
        var textformatted_1 = [], textformatted_11 = [];
        var clockformatted_1 = [], clockformatted_11 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "ps-PK", style:"text", length:length[i], useNative: false});
            textformatted_1.push(textfmt.format({year: 1, month: 1, week: 1, day: 1}).toString());
            textformatted_11.push(textfmt.format({year: 11, month: 11, week: 11, day: 11}).toString());

            clockformatted_1.push(textfmt.format({hour: 1, minute: 1, second: 1}).toString());
            clockformatted_11.push(textfmt.format({hour: 11, minute: 11, second: 11}).toString());
        }

        test.equal(textformatted_1[0], '‏1 کال, 1 مياشت, 1 اونۍ, 1 ورځ');
        test.equal(textformatted_1[1], '‏1/کال, 1 m, 1 w, 1 ورځ');
        test.equal(textformatted_1[2], '‏1 y 1 m 1 w 1 ورځ');
        test.equal(textformatted_1[3], '‏1 y 1 m 1 w 1 ورځ');

        test.equal(textformatted_11[0], '‏11 کالونه, 11 مياشتے, 11 اونۍ, 11 ورځے');
        test.equal(textformatted_11[1], '‏11 کالونه, 11 mths, 11 wks, 11 ورځے');
        test.equal(textformatted_11[2], '‏11 y 11 m 11 w 11d');
        test.equal(textformatted_11[3], '‏11 y 11 m 11 w 11d');

        test.equal(clockformatted_1[0], '‏1 ساعت, 1 دقیقه, 1 ثانیه');
        test.equal(clockformatted_1[1], '‏1 h, 1 دقیقه, 1 sec');
        test.equal(clockformatted_1[2], '‏1 h 1m 1 s');
        test.equal(clockformatted_1[3], '‏1 h 1m 1 s');

        test.equal(clockformatted_11[0], '‏11 h, 11 دقیقې, 11 ثانیې');
        test.equal(clockformatted_11[1], '‏11 h, 11 دقیقه, 11 sec');
        test.equal(clockformatted_11[2], '‏11 h 11m 11 s');
        test.equal(clockformatted_11[3], '‏11 h 11m 11 s');
        test.done();
      },
    testDurFmt_yo_NG: function(test) {
        test.expect(16);
        // 1 3
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];
        var textformatted_1 = [], textformatted_5 = [];
        var clockformatted_1 = [], clockformatted_5 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "yo-NG", style:"text", length:length[i], useNative: false});
            textformatted_1.push(textfmt.format({year: 1, month: 1, week: 1, day: 1}).toString());
            textformatted_5.push(textfmt.format({year: 5, month: 5, week: 5, day: 5}).toString());

            clockformatted_1.push(textfmt.format({hour: 1, minute: 1, second: 1}).toString());
            clockformatted_5.push(textfmt.format({hour: 5, minute: 5, second: 5}).toString());
        }

        test.equal(textformatted_1[0], '1 ọ̀dún, 1 oṣù, 1 ọṣ, ọj 1');
        test.equal(textformatted_1[1], '1 ọd, 1 oṣù, 1 ọṣ, 1 ọj');
        test.equal(textformatted_1[2], '1 ọd, 1 oṣù, 1 ọṣ, ọj 1');
        test.equal(textformatted_1[3], '1 ọd 1 oṣù 1 ọṣ ọj 1');

        test.equal(textformatted_5[0], '5 ọ̀dún, 5 oṣù, 5 ọṣ, ọj 5');
        test.equal(textformatted_5[1], '5 ọd, 5 oṣù, 5 ọṣ, 5 ọj');
        test.equal(textformatted_5[2], '5 ọd, 5 oṣù, 5 ọṣ, ọj 5');
        test.equal(textformatted_5[3], '5 ọd 5 oṣù 5 ọṣ ọj 5');

        test.equal(clockformatted_1[0], '1 wkt, 1 ìṣ, 1ìṣ àáy');
        test.equal(clockformatted_1[1], '1 wkt, 1 ìṣ, 1 ìṣ àáy');
        test.equal(clockformatted_1[2], '1 wkt, 1/ìṣ, 1 ìṣ àáy');
        test.equal(clockformatted_1[3], '1 wkt 1/ìṣ 1 ìṣ àáy');

        test.equal(clockformatted_5[0], '5 wkt, 5 ìṣ, 5ìṣ àáy');
        test.equal(clockformatted_5[1], '5 wkt, 5 ìṣ, 5 ìṣ àáy');
        test.equal(clockformatted_5[2], '5 wkt, 5/ìṣ, 5 ìṣ àáy');
        test.equal(clockformatted_5[3], '5 wkt 5/ìṣ 5 ìṣ àáy');
        test.done();
    },
    testDurFmt_yo_BJ: function(test) {
        test.expect(16);
        // 1 3
        var textfmt;
        var data = setVariable();
        var length = data["fullLength"];
        var textformatted_1 = [], textformatted_17 = [];
        var clockformatted_1 = [], clockformatted_17 = [];

        for (var i=0; i<4; i++) {
            textfmt = new DurationFmt({locale: "yo-BJ", style:"text", length:length[i], useNative: false});
            textformatted_1.push(textfmt.format({year: 1, month: 1, week: 1, day: 1}).toString());
            textformatted_17.push(textfmt.format({year: 17, month: 17, week: 17, day: 17}).toString());

            clockformatted_1.push(textfmt.format({hour: 1, minute: 1, second: 1}).toString());
            clockformatted_17.push(textfmt.format({hour: 17, minute: 17, second: 17}).toString());
        }

        test.equal(textformatted_1[0], '1 ọ̀dún, 1 oshù, 1 ɔsh, ɔj 1');
        test.equal(textformatted_1[1], '1 ɔd, 1 oshù, 1 ɔsh, 1 ɔj');
        test.equal(textformatted_1[2], '1 ọd, 1 oshù, 1 ɔsh, ɔj 1');
        test.equal(textformatted_1[3], '1 ọd 1 oshù 1 ɔsh ɔj 1');

        test.equal(textformatted_17[0], '17 ọ̀dún, 17 oshù, 17 ɔsh, ɔj 17');
        test.equal(textformatted_17[1], '17 ɔd, 17 oshù, 17 ɔsh, 17 ɔj');
        test.equal(textformatted_17[2], '17 ọd, 17 oshù, 17 ɔsh, ɔj 17');
        test.equal(textformatted_17[3], '17 ọd 17 oshù 17 ɔsh ɔj 17');

        test.equal(clockformatted_1[0], '1 wkt, 1 ìsh, 1ìsh àáy');
        test.equal(clockformatted_1[1], '1 wkt, 1 ìsh, 1 ìsh àáy');
        test.equal(clockformatted_1[2], '1 wkt, 1/ìsh, 1 ìsh àáy');
        test.equal(clockformatted_1[3], '1 wkt 1/ìsh 1 ìsh àáy');

        test.equal(clockformatted_17[0], '17 wkt, 17 ìsh, 17ìsh àáy');
        test.equal(clockformatted_17[1], '17 wkt, 17 ìsh, 17 ìsh àáy');
        test.equal(clockformatted_17[2], '17 wkt, 17/ìsh, 17 ìsh àáy');
        test.equal(clockformatted_17[3], '17 wkt 17/ìsh 17 ìsh àáy');
        test.done();
    }
}
