/*
 * testWeekdayTranslation.js - test the weekday's translation
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

if (typeof(DateFactory) === "undefined") {
    var DateFactory = require("../../lib/DateFactory.js");
}

if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../lib/DateFmt.js");
}

module.exports.testWeekdayTranslation = {
    setUp: function(callback) {
        callback();
    },
    testWeekdayTranslation_ar_EG: function(test) {
        test.expect(28);

        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow
        var fmt, value = [], i;

        fmt = new DateFmt({locale:"ar-EG", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-EG", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-EG", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-EG", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_ar_IQ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ar-IQ", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");
        fmt = new DateFmt({locale:"ar-IQ", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");
        fmt = new DateFmt({locale:"ar-IQ", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-IQ", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_ar_MA: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ar-MA", date:"w", length: "full", useNative:false, timezone:"local"});

        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-MA", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-MA", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-MA", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_as_IN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"as-IN", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "দেওবাৰ");
        test.equal(value[1], "সোমবাৰ");
        test.equal(value[2], "মঙ্গলবাৰ");
        test.equal(value[3], "বুধবাৰ");
        test.equal(value[4], "বৃহস্পতিবাৰ");
        test.equal(value[5], "শুক্ৰবাৰ");
        test.equal(value[6], "শনিবাৰ");

        fmt = new DateFmt({locale:"as-IN", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "দেও");
        test.equal(value[1], "সোম");
        test.equal(value[2], "মঙ্গল");
        test.equal(value[3], "বুধ");
        test.equal(value[4], "বৃহ");
        test.equal(value[5], "শুক্ৰ");
        test.equal(value[6], "শনি");

        fmt = new DateFmt({locale:"as-IN", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "দেও");
        test.equal(value[1], "সোম");
        test.equal(value[2], "মঙ্গল");
        test.equal(value[3], "বুধ");
        test.equal(value[4], "বৃহ");
        test.equal(value[5], "শুক্ৰ");
        test.equal(value[6], "শনি");

        fmt = new DateFmt({locale:"as-IN", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "দ");
        test.equal(value[1], "স");
        test.equal(value[2], "ম");
        test.equal(value[3], "ব");
        test.equal(value[4], "ব");
        test.equal(value[5], "শ");
        test.equal(value[6], "শ");

        test.done();
    },
    testWeekdayTranslation_bg_BG: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"bg-BG", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "неделя");
        test.equal(value[1], "понеделник");
        test.equal(value[2], "вторник");
        test.equal(value[3], "сряда");
        test.equal(value[4], "четвъртък");
        test.equal(value[5], "петък");
        test.equal(value[6], "събота");
        fmt = new DateFmt({locale:"bg-BG", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "нд");
        test.equal(value[1], "пн");
        test.equal(value[2], "вт");
        test.equal(value[3], "ср");
        test.equal(value[4], "чт");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");
        fmt = new DateFmt({locale:"bg-BG", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "нд");
        test.equal(value[1], "пн");
        test.equal(value[2], "вт");
        test.equal(value[3], "ср");
        test.equal(value[4], "чт");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");
        fmt = new DateFmt({locale:"bg-BG", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "н");
        test.equal(value[1], "п");
        test.equal(value[2], "в");
        test.equal(value[3], "с");
        test.equal(value[4], "ч");
        test.equal(value[5], "п");
        test.equal(value[6], "с");

        test.done();
    },
    testWeekdayTranslation_bn_IN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        fmt = new DateFmt({locale:"bn-IN", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "রবিবার");
        test.equal(value[1], "সোমবার");
        test.equal(value[2], "মঙ্গলবার");
        test.equal(value[3], "বুধবার");
        test.equal(value[4], "বৃহস্পতিবার");
        test.equal(value[5], "শুক্রবার");
        test.equal(value[6], "শনিবার");

        fmt = new DateFmt({locale:"bn-IN", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "রবি");
        test.equal(value[1], "সোম");
        test.equal(value[2], "মঙ্গল");
        test.equal(value[3], "বুধ");
        test.equal(value[4], "বৃহস্পতি");
        test.equal(value[5], "শুক্র");
        test.equal(value[6], "শনি");

        fmt = new DateFmt({locale:"bn-IN", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "রঃ");
        test.equal(value[1], "সোঃ");
        test.equal(value[2], "মঃ");
        test.equal(value[3], "বুঃ");
        test.equal(value[4], "বৃঃ");
        test.equal(value[5], "শুঃ");
        test.equal(value[6], "শনি");

        fmt = new DateFmt({locale:"bn-IN", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "র");
        test.equal(value[1], "সো");
        test.equal(value[2], "ম");
        test.equal(value[3], "বু");
        test.equal(value[4], "বৃ");
        test.equal(value[5], "শু");
        test.equal(value[6], "শ");

        test.done();
    },
    testWeekdayTranslation_bs_Latn_BA: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"bs-Latn-BA", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "nedjelja");
        test.equal(value[1], "ponedjeljak");
        test.equal(value[2], "utorak");
        test.equal(value[3], "srijeda");
        test.equal(value[4], "četvrtak");
        test.equal(value[5], "petak");
        test.equal(value[6], "subota");

        fmt = new DateFmt({locale:"bs-Latn-BA", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ned");
        test.equal(value[1], "pon");
        test.equal(value[2], "uto");
        test.equal(value[3], "sri");
        test.equal(value[4], "čet");
        test.equal(value[5], "pet");
        test.equal(value[6], "sub");

        fmt = new DateFmt({locale:"bs-Latn-BA", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ned");
        test.equal(value[1], "pon");
        test.equal(value[2], "uto");
        test.equal(value[3], "sri");
        test.equal(value[4], "čet");
        test.equal(value[5], "pet");
        test.equal(value[6], "sub");

        fmt = new DateFmt({locale:"bs-Latn-BA", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "n");
        test.equal(value[1], "p");
        test.equal(value[2], "u");
        test.equal(value[3], "s");
        test.equal(value[4], "č");
        test.equal(value[5], "p");
        test.equal(value[6], "s");

        test.done();
    },
    testWeekdayTranslation_bs_Latn_ME: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short

        fmt = new DateFmt({locale:"bs-Latn-ME", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "nedjelja");
        test.equal(value[1], "ponedjeljak");
        test.equal(value[2], "utorak");
        test.equal(value[3], "srijeda");
        test.equal(value[4], "četvrtak");
        test.equal(value[5], "petak");
        test.equal(value[6], "subota");

        fmt = new DateFmt({locale:"bs-Latn-ME", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ned");
        test.equal(value[1], "pon");
        test.equal(value[2], "uto");
        test.equal(value[3], "sri");
        test.equal(value[4], "čet");
        test.equal(value[5], "pet");
        test.equal(value[6], "sub");

        fmt = new DateFmt({locale:"bs-Latn-ME", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ned");
        test.equal(value[1], "pon");
        test.equal(value[2], "uto");
        test.equal(value[3], "sri");
        test.equal(value[4], "čet");
        test.equal(value[5], "pet");
        test.equal(value[6], "sub");

        fmt = new DateFmt({locale:"bs-Latn-ME", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "n");
        test.equal(value[1], "p");
        test.equal(value[2], "u");
        test.equal(value[3], "s");
        test.equal(value[4], "č");
        test.equal(value[5], "p");
        test.equal(value[6], "s");

        test.done();
    },
    testWeekdayTranslation_cs_CZ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate_ Exist StandAlone format.
        // medium: M
        // short: narrow

        fmt = new DateFmt({locale:"cs-CZ", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "neděle");
        test.equal(value[1], "pondělí");
        test.equal(value[2], "úterý");
        test.equal(value[3], "středa");
        test.equal(value[4], "čtvrtek");
        test.equal(value[5], "pátek");
        test.equal(value[6], "sobota");

        fmt = new DateFmt({locale:"cs-CZ", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ne");
        test.equal(value[1], "po");
        test.equal(value[2], "út");
        test.equal(value[3], "st");
        test.equal(value[4], "čt");
        test.equal(value[5], "pá");
        test.equal(value[6], "so");

        fmt = new DateFmt({locale:"cs-CZ", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ne");
        test.equal(value[1], "po");
        test.equal(value[2], "út");
        test.equal(value[3], "st");
        test.equal(value[4], "čt");
        test.equal(value[5], "pá");
        test.equal(value[6], "so");

        fmt = new DateFmt({locale:"cs-CZ", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "N");
        test.equal(value[1], "P");
        test.equal(value[2], "Ú");
        test.equal(value[3], "S");
        test.equal(value[4], "Č");
        test.equal(value[5], "P");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_da_DK: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"da-DK", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "søndag");
        test.equal(value[1], "mandag");
        test.equal(value[2], "tirsdag");
        test.equal(value[3], "onsdag");
        test.equal(value[4], "torsdag");
        test.equal(value[5], "fredag");
        test.equal(value[6], "lørdag");

        fmt = new DateFmt({locale:"da-DK", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "søn");
        test.equal(value[1], "man");
        test.equal(value[2], "tir");
        test.equal(value[3], "ons");
        test.equal(value[4], "tor");
        test.equal(value[5], "fre");
        test.equal(value[6], "lør");

        fmt = new DateFmt({locale:"da-DK", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "sø");
        test.equal(value[1], "ma");
        test.equal(value[2], "ti");
        test.equal(value[3], "on");
        test.equal(value[4], "to");
        test.equal(value[5], "fr");
        test.equal(value[6], "lø");

        fmt = new DateFmt({locale:"da-DK", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "O");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "L");

        test.done();
    },
    testWeekdayTranslation_de_AT: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"de-AT", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sonntag");
        test.equal(value[1], "Montag");
        test.equal(value[2], "Dienstag");
        test.equal(value[3], "Mittwoch");
        test.equal(value[4], "Donnerstag");
        test.equal(value[5], "Freitag");
        test.equal(value[6], "Samstag");

        fmt = new DateFmt({locale:"de-AT", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "So");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Di");
        test.equal(value[3], "Mi");
        test.equal(value[4], "Do");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"de-AT", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "So.");
        test.equal(value[1], "Mo.");
        test.equal(value[2], "Di.");
        test.equal(value[3], "Mi.");
        test.equal(value[4], "Do.");
        test.equal(value[5], "Fr.");
        test.equal(value[6], "Sa.");

        fmt = new DateFmt({locale:"de-AT", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "D");
        test.equal(value[3], "M");
        test.equal(value[4], "D");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_de_CH: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"de-CH", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sonntag");
        test.equal(value[1], "Montag");
        test.equal(value[2], "Dienstag");
        test.equal(value[3], "Mittwoch");
        test.equal(value[4], "Donnerstag");
        test.equal(value[5], "Freitag");
        test.equal(value[6], "Samstag");

        fmt = new DateFmt({locale:"de-CH", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "So");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Di");
        test.equal(value[3], "Mi");
        test.equal(value[4], "Do");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"de-CH", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "So"); //standAlone format
        test.equal(value[1], "Mo"); //standAlone format
        test.equal(value[2], "Di"); //standAlone format
        test.equal(value[3], "Mi"); //standAlone format
        test.equal(value[4], "Do"); //standAlone format
        test.equal(value[5], "Fr"); //standAlone format
        test.equal(value[6], "Sa"); //standAlone format

        fmt = new DateFmt({locale:"de-CH", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "D");
        test.equal(value[3], "M");
        test.equal(value[4], "D");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_de_DE: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"de-DE", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sonntag");
        test.equal(value[1], "Montag");
        test.equal(value[2], "Dienstag");
        test.equal(value[3], "Mittwoch");
        test.equal(value[4], "Donnerstag");
        test.equal(value[5], "Freitag");
        test.equal(value[6], "Samstag");

        fmt = new DateFmt({locale:"de-DE", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "So");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Di");
        test.equal(value[3], "Mi");
        test.equal(value[4], "Do");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"de-DE", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "So.");
        test.equal(value[1], "Mo.");
        test.equal(value[2], "Di.");
        test.equal(value[3], "Mi.");
        test.equal(value[4], "Do.");
        test.equal(value[5], "Fr.");
        test.equal(value[6], "Sa.");

        fmt = new DateFmt({locale:"de-DE", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "D");
        test.equal(value[3], "M");
        test.equal(value[4], "D");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_de_LU: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"de-LU", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sonntag");
        test.equal(value[1], "Montag");
        test.equal(value[2], "Dienstag");
        test.equal(value[3], "Mittwoch");
        test.equal(value[4], "Donnerstag");
        test.equal(value[5], "Freitag");
        test.equal(value[6], "Samstag");

        fmt = new DateFmt({locale:"de-LU", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "So");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Di");
        test.equal(value[3], "Mi");
        test.equal(value[4], "Do");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"de-LU", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "So.");
        test.equal(value[1], "Mo.");
        test.equal(value[2], "Di.");
        test.equal(value[3], "Mi.");
        test.equal(value[4], "Do.");
        test.equal(value[5], "Fr.");
        test.equal(value[6], "Sa.");

        fmt = new DateFmt({locale:"de-LU", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "D");
        test.equal(value[3], "M");
        test.equal(value[4], "D");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_el_CY: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate _standAlone format exist.
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"el-CY", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Κυριακή");
        test.equal(value[1], "Δευτέρα");
        test.equal(value[2], "Τρίτη");
        test.equal(value[3], "Τετάρτη");
        test.equal(value[4], "Πέμπτη");
        test.equal(value[5], "Παρασκευή");
        test.equal(value[6], "Σάββατο");

        fmt = new DateFmt({locale:"el-CY", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Κυρ");
        test.equal(value[1], "Δευ");
        test.equal(value[2], "Τρί");
        test.equal(value[3], "Τετ");
        test.equal(value[4], "Πέμ");
        test.equal(value[5], "Παρ");
        test.equal(value[6], "Σάβ");

        fmt = new DateFmt({locale:"el-CY", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Κυ");
        test.equal(value[1], "Δε");
        test.equal(value[2], "Τρ");
        test.equal(value[3], "Τε");
        test.equal(value[4], "Πέ");
        test.equal(value[5], "Πα");
        test.equal(value[6], "Σά");

        fmt = new DateFmt({locale:"el-CY", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Κ");
        test.equal(value[1], "Δ");
        test.equal(value[2], "Τ");
        test.equal(value[3], "Τ");
        test.equal(value[4], "Π");
        test.equal(value[5], "Π");
        test.equal(value[6], "Σ");

        test.done();
    },
    testWeekdayTranslation_el_GR: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate _standAlone format exist.
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"el-GR", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Κυριακή");
        test.equal(value[1], "Δευτέρα");
        test.equal(value[2], "Τρίτη");
        test.equal(value[3], "Τετάρτη");
        test.equal(value[4], "Πέμπτη");
        test.equal(value[5], "Παρασκευή");
        test.equal(value[6], "Σάββατο");

        fmt = new DateFmt({locale:"el-GR", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Κυρ");
        test.equal(value[1], "Δευ");
        test.equal(value[2], "Τρί");
        test.equal(value[3], "Τετ");
        test.equal(value[4], "Πέμ");
        test.equal(value[5], "Παρ");
        test.equal(value[6], "Σάβ");

        fmt = new DateFmt({locale:"el-GR", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Κυ");
        test.equal(value[1], "Δε");
        test.equal(value[2], "Τρ");
        test.equal(value[3], "Τε");
        test.equal(value[4], "Πέ");
        test.equal(value[5], "Πα");
        test.equal(value[6], "Σά");

        fmt = new DateFmt({locale:"el-GR", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Κ");
        test.equal(value[1], "Δ");
        test.equal(value[2], "Τ");
        test.equal(value[3], "Τ");
        test.equal(value[4], "Π");
        test.equal(value[5], "Π");
        test.equal(value[6], "Σ");

        test.done();
    },
    testWeekdayTranslation_en_AM: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"en-AM", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-AM", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-AM", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-AM", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_AU: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"en-AU", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-AU", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun"); //standAlone format
        test.equal(value[1], "Mon"); //standAlone format
        test.equal(value[2], "Tue"); //standAlone format
        test.equal(value[3], "Wed"); //standAlone format
        test.equal(value[4], "Thu"); //standAlone format
        test.equal(value[5], "Fri"); //standAlone format
        test.equal(value[6], "Sat"); //standAlone format

        fmt = new DateFmt({locale:"en-AU", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su"); //standAlone format
        test.equal(value[1], "Mo"); //standAlone format
        test.equal(value[2], "Tu"); //standAlone format
        test.equal(value[3], "We"); //standAlone format
        test.equal(value[4], "Th"); //standAlone format
        test.equal(value[5], "Fr"); //standAlone format
        test.equal(value[6], "Sa"); //standAlone format

        fmt = new DateFmt({locale:"en-AU", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_AZ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-AZ", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-AZ", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-AZ", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-AZ", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_CA: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"en-CA", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-CA", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-CA", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-CA", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_GB: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"en-GB", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-GB", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-GB", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-GB", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_GH: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"en-GH", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-GH", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-GH", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-GH", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_HK: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"en-HK", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-HK", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-HK", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-HK", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_IE: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"en-IE", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-IE", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-IE", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-IE", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_IN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"en-IN", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-IN", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-IN", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-IN", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_IS: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // Same as en-US
        fmt = new DateFmt({locale:"en-IS", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-IS", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-IS", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-IS", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_JP: function(test) {
        test.expect(28);

        // Same as en-US
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-JP", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-JP", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-JP", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-JP", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_KE: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"en-KE", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-KE", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-KE", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-KE", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_KR: function(test) {
        test.expect(28);

        // Same as en-US
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-KR", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-KR", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-KR", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-KR", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_LK: function(test) {
        test.expect(28);

        // Same as en-US
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-LK", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-LK", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-LK", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-LK", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_MM: function(test) {
        test.expect(28);

        // Same as en-US
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-MM", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-MM", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-MM", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-MM", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_MW: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"en-MW", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-MW", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-MW", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-MW", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_MY: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"en-MY", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-MY", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-MY", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-MY", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_NG: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"en-NG", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-NG", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-NG", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-NG", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_NZ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow
        fmt = new DateFmt({locale:"en-NZ", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-NZ", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-NZ", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-NZ", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_PH: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"en-PH", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-PH", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-PH", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-PH", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_PR: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"en-PR", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-PR", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-PR", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-PR", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_SG: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"en-SG", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-SG", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-SG", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-SG", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_US: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-US", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-US", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-US", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-US", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_UG: function(test) {
        test.expect(28);

        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-UG", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-UG", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-UG", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-UG", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_ZA: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"en-ZA", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-ZA", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-ZA", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-ZA", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_ZM: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"en-ZM", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-ZM", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-ZM", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-ZM", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_AR: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"es-AR", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-AR", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-AR", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-AR", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_BO: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"es-BO", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-BO", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-BO", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-BO", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");
        test.done();
    },
    testWeekdayTranslation_es_CL: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow
        fmt = new DateFmt({locale:"es-CL", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-CL", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-CL", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-CL", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_CO: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"es-CO", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-CO", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-CO", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-CO", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "d");
        test.equal(value[1], "l");
        test.equal(value[2], "m");
        test.equal(value[3], "m");
        test.equal(value[4], "j");
        test.equal(value[5], "v");
        test.equal(value[6], "s");

        test.done();
    },
    testWeekdayTranslation_es_DO: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"es-DO", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-DO", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-DO", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-DO", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_EC: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"es-EC", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-EC", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-EC", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-EC", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_ES: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"es-ES", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-ES", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-ES", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-ES", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "X");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_ES_Intl: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("es-ES")){
            test.done();
            return;
        }
        test.expect(7);
        var fmt, value = [], i;

        fmt = new DateFmt({locale:"es-ES", date:"w", length: "full", useNative:false, useIntl:true, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        test.done();
    },
    testWeekdayTranslation_es_GT: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"es-GT", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-GT", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-GT", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-GT", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_HN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"es-HN", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-HN", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-HN", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-HN", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_MX: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"es-MX", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-MX", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-MX", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], 'DO');
        test.equal(value[1], 'LU');
        test.equal(value[2], 'MA');
        test.equal(value[3], 'MI');
        test.equal(value[4], 'JU');
        test.equal(value[5], 'VI');
        test.equal(value[6], 'SA');

        fmt = new DateFmt({locale:"es-MX", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_NI: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"es-NI", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-NI", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-NI", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-NI", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_PA: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"es-PA", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-PA", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-PA", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-PA", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_PE: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate_ StandAlone Format
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"es-PE", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-PE", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-PE", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-PE", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_PR: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"es-PR", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-PR", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-PR", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-PR", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_PY: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"es-PY", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-PY", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-PY", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Do");
        test.equal(value[1], "Lu");
        test.equal(value[2], "Ma");
        test.equal(value[3], "Mi");
        test.equal(value[4], "Ju");
        test.equal(value[5], "Vi");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"es-PY", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_SV: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"es-SV", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-SV", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-SV", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-SV", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_US: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"es-US", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-US", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-US", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-US", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_UY: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate_StandAlone
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"es-UY", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-UY", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-UY", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-UY", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_VE: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"es-VE", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-VE", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-VE", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Do");
        test.equal(value[1], "Lu");
        test.equal(value[2], "Ma");
        test.equal(value[3], "Mi");
        test.equal(value[4], "Ju");
        test.equal(value[5], "Vi");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"es-VE", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_et_EE: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"et-EE", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "pühapäev");
        test.equal(value[1], "esmaspäev");
        test.equal(value[2], "teisipäev");
        test.equal(value[3], "kolmapäev");
        test.equal(value[4], "neljapäev");
        test.equal(value[5], "reede");
        test.equal(value[6], "laupäev");

        fmt = new DateFmt({locale:"et-EE", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "P");
        test.equal(value[1], "E");
        test.equal(value[2], "T");
        test.equal(value[3], "K");
        test.equal(value[4], "N");
        test.equal(value[5], "R");
        test.equal(value[6], "L");

        fmt = new DateFmt({locale:"et-EE", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "P");
        test.equal(value[1], "E");
        test.equal(value[2], "T");
        test.equal(value[3], "K");
        test.equal(value[4], "N");
        test.equal(value[5], "R");
        test.equal(value[6], "L");

        fmt = new DateFmt({locale:"et-EE", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "P");
        test.equal(value[1], "E");
        test.equal(value[2], "T");
        test.equal(value[3], "K");
        test.equal(value[4], "N");
        test.equal(value[5], "R");
        test.equal(value[6], "L");

        test.done();
    },
    testWeekdayTranslation_fa_AF: function(test) {
        test.expect(35);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"fa-AF", date:"w", length: "full", useNative:false, timezone: "Etc/UTC"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+1, type:"persian", timezone: "Etc/UTC"}));
        }
        test.equal(value[0], "یکشنبه");
        test.equal(value[1], "دوشنبه");
        test.equal(value[2], "سه‌شنبه");
        test.equal(value[3], "چهارشنبه");
        test.equal(value[4], "پنجشنبه");
        test.equal(value[5], "جمعه");
        test.equal(value[6], "شنبه");

        fmt = new DateFmt({locale:"fa-AF", date:"w", length: "full", useNative:false, timezone: "Etc/UTC"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"persian-algo", timezone: "Etc/UTC"}));
        }
        test.equal(value[0], "یکشنبه");
        test.equal(value[1], "دوشنبه");
        test.equal(value[2], "سه‌شنبه");
        test.equal(value[3], "چهارشنبه");
        test.equal(value[4], "پنجشنبه");
        test.equal(value[5], "جمعه");
        test.equal(value[6], "شنبه");

        fmt = new DateFmt({locale:"fa-AF", date:"w", length: "long", useNative:false, timezone: "Etc/UTC"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"persian-algo", timezone: "Etc/UTC"}));
        }
        test.equal(value[0], "یکشنبه");
        test.equal(value[1], "دوشنبه");
        test.equal(value[2], "سه‌شنبه");
        test.equal(value[3], "چهارشنبه");
        test.equal(value[4], "پنجشنبه");
        test.equal(value[5], "جمعه");
        test.equal(value[6], "شنبه");

        fmt = new DateFmt({locale:"fa-AF", date:"w", length: "medium", useNative:false, timezone: "Etc/UTC"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"persian-algo", timezone: "Etc/UTC"}));
        }
        test.equal(value[0], "۱ش");
        test.equal(value[1], "۲ش");
        test.equal(value[2], "۳ش");
        test.equal(value[3], "۴ش");
        test.equal(value[4], "۵ش");
        test.equal(value[5], "ج");
        test.equal(value[6], "ش");

        fmt = new DateFmt({locale:"fa-AF", date:"w", length: "short", useNative:false, timezone: "Etc/UTC"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"persian-algo", timezone: "Etc/UTC"}));
        }
        test.equal(value[0], "ی");
        test.equal(value[1], "د");
        test.equal(value[2], "س");
        test.equal(value[3], "چ");
        test.equal(value[4], "پ");
        test.equal(value[5], "ج");
        test.equal(value[6], "ش");

        test.done();
    },
    testWeekdayTranslation_fa_IR: function(test) {
        test.expect(35);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"fa-IR", date:"w", length: "full", useNative:false, timezone: "Etc/UTC"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+1, type:"persian", timezone: "Etc/UTC"}));
        }
        test.equal(value[0], "یکشنبه");
        test.equal(value[1], "دوشنبه");
        test.equal(value[2], "سه‌شنبه");
        test.equal(value[3], "چهارشنبه");
        test.equal(value[4], "پنجشنبه");
        test.equal(value[5], "جمعه");
        test.equal(value[6], "شنبه");

        /*
        * Between calendar 'persian' and 'persian-algo' They do calculate differently some times.
        * The leap year structure is different.  Sometimes, these two calendars differ by a day, and sometimes not.
        * It will take over 10,500 years before the two calendars are permanently off by one whole day.
        */
        fmt = new DateFmt({locale:"fa-IR", date:"w", length: "full", useNative:false, timezone: "Etc/UTC"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"persian-algo", timezone: "Etc/UTC"}));
        }
        test.equal(value[0], "یکشنبه");
        test.equal(value[1], "دوشنبه");
        test.equal(value[2], "سه‌شنبه");
        test.equal(value[3], "چهارشنبه");
        test.equal(value[4], "پنجشنبه");
        test.equal(value[5], "جمعه");
        test.equal(value[6], "شنبه");

        fmt = new DateFmt({locale:"fa-IR", date:"w", length: "long", useNative:false, timezone: "Etc/UTC"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"persian-algo", timezone: "Etc/UTC"}));
        }
        test.equal(value[0], "یکشنبه");
        test.equal(value[1], "دوشنبه");
        test.equal(value[2], "سه‌شنبه");
        test.equal(value[3], "چهارشنبه");
        test.equal(value[4], "پنجشنبه");
        test.equal(value[5], "جمعه");
        test.equal(value[6], "شنبه");

        fmt = new DateFmt({locale:"fa-IR", date:"w", length: "medium", useNative:false, timezone: "Etc/UTC"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"persian-algo", timezone: "Etc/UTC"}));
        }
        test.equal(value[0], "۱ش");
        test.equal(value[1], "۲ش");
        test.equal(value[2], "۳ش");
        test.equal(value[3], "۴ش");
        test.equal(value[4], "۵ش");
        test.equal(value[5], "ج");
        test.equal(value[6], "ش");

        fmt = new DateFmt({locale:"fa-IR", date:"w", length: "short", useNative:false, timezone: "Etc/UTC"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"persian-algo", timezone: "Etc/UTC"}));
        }

        test.equal(value[0], "ی");
        test.equal(value[1], "د");
        test.equal(value[2], "س");
        test.equal(value[3], "چ");
        test.equal(value[4], "پ");
        test.equal(value[5], "ج");
        test.equal(value[6], "ش");

        test.done();
    },
    testWeekdayTranslation_fi_FI: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate_ standAlone format exist.
        // medium: M
        // short: narrow

        fmt = new DateFmt({locale:"fi-FI", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        //standAlone
        test.equal(value[0], "sunnuntai");
        test.equal(value[1], "maanantai");
        test.equal(value[2], "tiistai");
        test.equal(value[3], "keskiviikko");
        test.equal(value[4], "torstai");
        test.equal(value[5], "perjantai");
        test.equal(value[6], "lauantai");

        fmt = new DateFmt({locale:"fi-FI", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "su");
        test.equal(value[1], "ma");
        test.equal(value[2], "ti");
        test.equal(value[3], "ke");
        test.equal(value[4], "to");
        test.equal(value[5], "pe");
        test.equal(value[6], "la");

        fmt = new DateFmt({locale:"fi-FI", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "su");
        test.equal(value[1], "ma");
        test.equal(value[2], "ti");
        test.equal(value[3], "ke");
        test.equal(value[4], "to");
        test.equal(value[5], "pe");
        test.equal(value[6], "la");

        fmt = new DateFmt({locale:"fi-FI", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "K");
        test.equal(value[4], "T");
        test.equal(value[5], "P");
        test.equal(value[6], "L");

        test.done();
    },
    testWeekdayTranslation_fr_BE: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"fr-BE", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-BE", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-BE", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-BE", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_CA: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"fr-CA", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-CA", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-CA", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-CA", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");
        test.done();
    },
    testWeekdayTranslation_fr_CH: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"fr-CA", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-CA", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-CA", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-CA", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_FR: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"fr-FR", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-FR", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-FR", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-FR", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_LU: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"fr-LU", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-LU", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-LU", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-LU", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_ga_IE: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"ga-IE", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Dé Domhnaigh");
        test.equal(value[1], "Dé Luain");
        test.equal(value[2], "Dé Máirt");
        test.equal(value[3], "Dé Céadaoin");
        test.equal(value[4], "Déardaoin");
        test.equal(value[5], "Dé hAoine");
        test.equal(value[6], "Dé Sathairn");

        fmt = new DateFmt({locale:"ga-IE", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Domh");
        test.equal(value[1], "Luan");
        test.equal(value[2], "Máirt");
        test.equal(value[3], "Céad");
        test.equal(value[4], "Déar");
        test.equal(value[5], "Aoine");
        test.equal(value[6], "Sath");

        fmt = new DateFmt({locale:"ga-IE", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Do");
        test.equal(value[1], "Lu");
        test.equal(value[2], "Má");
        test.equal(value[3], "Cé");
        test.equal(value[4], "Dé");
        test.equal(value[5], "Ao");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"ga-IE", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "C");
        test.equal(value[4], "D");
        test.equal(value[5], "A");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_gu_IN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"gu-IN", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "રવિવાર");
        test.equal(value[1], "સોમવાર");
        test.equal(value[2], "મંગળવાર");
        test.equal(value[3], "બુધવાર");
        test.equal(value[4], "ગુરુવાર");
        test.equal(value[5], "શુક્રવાર");
        test.equal(value[6], "શનિવાર");

        fmt = new DateFmt({locale:"gu-IN", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "રવિ");
        test.equal(value[1], "સોમ");
        test.equal(value[2], "મંગળ");
        test.equal(value[3], "બુધ");
        test.equal(value[4], "ગુરુ");
        test.equal(value[5], "શુક્ર");
        test.equal(value[6], "શનિ");

        fmt = new DateFmt({locale:"gu-IN", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ર");
        test.equal(value[1], "સો");
        test.equal(value[2], "મં");
        test.equal(value[3], "બુ");
        test.equal(value[4],  "ગુ");
        test.equal(value[5], "શુ");
        test.equal(value[6], "શ");

        fmt = new DateFmt({locale:"gu-IN", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ર");
        test.equal(value[1], "સો");
        test.equal(value[2], "મં");
        test.equal(value[3], "બુ");
        test.equal(value[4],  "ગુ");
        test.equal(value[5], "શુ");
        test.equal(value[6], "શ");

        test.done();
    },
    testWeekdayTranslation_he_IL: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"he-IL", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "יום ראשון");
        test.equal(value[1], "יום שני");
        test.equal(value[2], "יום שלישי");
        test.equal(value[3], "יום רביעי");
        test.equal(value[4], "יום חמישי");
        test.equal(value[5], "יום שישי");
        test.equal(value[6], "יום שבת");

        fmt = new DateFmt({locale:"he-IL", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "יום א׳");
        test.equal(value[1], "יום ב׳");
        test.equal(value[2], "יום ג׳");
        test.equal(value[3], "יום ד׳");
        test.equal(value[4], "יום ה׳");
        test.equal(value[5], "יום ו׳");
        test.equal(value[6], "שבת");

        fmt = new DateFmt({locale:"he-IL", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "א׳");
        test.equal(value[1], "ב׳");
        test.equal(value[2], "ג׳");
        test.equal(value[3], "ד׳");
        test.equal(value[4], "ה׳");
        test.equal(value[5], "ו׳");
        test.equal(value[6], "ש׳");

        fmt = new DateFmt({locale:"he-IL", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "א׳");
        test.equal(value[1], "ב׳");
        test.equal(value[2], "ג׳");
        test.equal(value[3], "ד׳");
        test.equal(value[4], "ה׳");
        test.equal(value[5], "ו׳");
        test.equal(value[6], "ש׳");

        test.done();
    },
    testWeekdayTranslation_hi_IN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"hi-IN", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "रविवार");
        test.equal(value[1], "सोमवार");
        test.equal(value[2], "मंगलवार");
        test.equal(value[3], "बुधवार");
        test.equal(value[4], "गुरुवार");
        test.equal(value[5], "शुक्रवार");
        test.equal(value[6], "शनिवार");

        fmt = new DateFmt({locale:"hi-IN", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "रवि");
        test.equal(value[1], "सोम");
        test.equal(value[2], "मंगल");
        test.equal(value[3], "बुध");
        test.equal(value[4], "गुरु");
        test.equal(value[5], "शुक्र");
        test.equal(value[6], "शनि");

        fmt = new DateFmt({locale:"hi-IN", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "र");
        test.equal(value[1], "सो");
        test.equal(value[2], "मं");
        test.equal(value[3], "बु");
        test.equal(value[4], "गु");
        test.equal(value[5], "शु");
        test.equal(value[6], "श");

        fmt = new DateFmt({locale:"hi-IN", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "र");
        test.equal(value[1], "सो");
        test.equal(value[2], "मं");
        test.equal(value[3], "बु");
        test.equal(value[4], "गु");
        test.equal(value[5], "शु");
        test.equal(value[6], "श");

        test.done();
    },
    testWeekdayTranslation_hr_HR: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate _standAlone Format Exist.
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"hr-HR", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "nedjelja");
        test.equal(value[1], "ponedjeljak");
        test.equal(value[2], "utorak");
        test.equal(value[3], "srijeda");
        test.equal(value[4], "četvrtak");
        test.equal(value[5], "petak");
        test.equal(value[6], "subota");

        fmt = new DateFmt({locale:"hr-HR", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ned");
        test.equal(value[1], "pon");
        test.equal(value[2], "uto");
        test.equal(value[3], "sri");
        test.equal(value[4], "čet");
        test.equal(value[5], "pet");
        test.equal(value[6], "sub");

        fmt = new DateFmt({locale:"hr-HR", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ned");
        test.equal(value[1], "pon");
        test.equal(value[2], "uto");
        test.equal(value[3], "sri");
        test.equal(value[4], "čet");
        test.equal(value[5], "pet");
        test.equal(value[6], "sub");

        fmt = new DateFmt({locale:"hr-HR", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "n");
        test.equal(value[1], "p");
        test.equal(value[2], "u");
        test.equal(value[3], "s");
        test.equal(value[4], "č");
        test.equal(value[5], "p");
        test.equal(value[6], "s");

        test.done();
    },
    testWeekdayTranslation_hr_ME: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // Same as hr-HR

        fmt = new DateFmt({locale:"hr-ME", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "nedjelja");
        test.equal(value[1], "ponedjeljak");
        test.equal(value[2], "utorak");
        test.equal(value[3], "srijeda");
        test.equal(value[4], "četvrtak");
        test.equal(value[5], "petak");
        test.equal(value[6], "subota");

        fmt = new DateFmt({locale:"hr-ME", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ned");
        test.equal(value[1], "pon");
        test.equal(value[2], "uto");
        test.equal(value[3], "sri");
        test.equal(value[4], "čet");
        test.equal(value[5], "pet");
        test.equal(value[6], "sub");

        fmt = new DateFmt({locale:"hr-ME", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ned");
        test.equal(value[1], "pon");
        test.equal(value[2], "uto");
        test.equal(value[3], "sri");
        test.equal(value[4], "čet");
        test.equal(value[5], "pet");
        test.equal(value[6], "sub");

        fmt = new DateFmt({locale:"hr-ME", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "n");
        test.equal(value[1], "p");
        test.equal(value[2], "u");
        test.equal(value[3], "s");
        test.equal(value[4], "č");
        test.equal(value[5], "p");
        test.equal(value[6], "s");

        test.done();
    },
    testWeekdayTranslation_hr_HU: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // Same as hr-HR

        fmt = new DateFmt({locale:"hr-HU", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "nedjelja");
        test.equal(value[1], "ponedjeljak");
        test.equal(value[2], "utorak");
        test.equal(value[3], "srijeda");
        test.equal(value[4], "četvrtak");
        test.equal(value[5], "petak");
        test.equal(value[6], "subota");

        fmt = new DateFmt({locale:"hr-HU", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ned");
        test.equal(value[1], "pon");
        test.equal(value[2], "uto");
        test.equal(value[3], "sri");
        test.equal(value[4], "čet");
        test.equal(value[5], "pet");
        test.equal(value[6], "sub");

        fmt = new DateFmt({locale:"hr-HU", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ned");
        test.equal(value[1], "pon");
        test.equal(value[2], "uto");
        test.equal(value[3], "sri");
        test.equal(value[4], "čet");
        test.equal(value[5], "pet");
        test.equal(value[6], "sub");

        fmt = new DateFmt({locale:"hr-HU", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "n");
        test.equal(value[1], "p");
        test.equal(value[2], "u");
        test.equal(value[3], "s");
        test.equal(value[4], "č");
        test.equal(value[5], "p");
        test.equal(value[6], "s");

        test.done();
    },
    testWeekdayTranslation_id_ID: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"id-ID", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Minggu");
        test.equal(value[1], "Senin");
        test.equal(value[2], "Selasa");
        test.equal(value[3], "Rabu");
        test.equal(value[4], "Kamis");
        test.equal(value[5], "Jumat");
        test.equal(value[6], "Sabtu");

        fmt = new DateFmt({locale:"id-ID", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Min");
        test.equal(value[1], "Sen");
        test.equal(value[2], "Sel");
        test.equal(value[3], "Rab");
        test.equal(value[4], "Kam");
        test.equal(value[5], "Jum");
        test.equal(value[6], "Sab");

        fmt = new DateFmt({locale:"id-ID", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Min");
        test.equal(value[1], "Sen");
        test.equal(value[2], "Sel");
        test.equal(value[3], "Rab");
        test.equal(value[4], "Kam");
        test.equal(value[5], "Jum");
        test.equal(value[6], "Sab");

        fmt = new DateFmt({locale:"id-ID", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "M");
        test.equal(value[1], "S");
        test.equal(value[2], "S");
        test.equal(value[3], "R");
        test.equal(value[4], "K");
        test.equal(value[5], "J");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_is_IS: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"is-IS", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "sunnudagur");
        test.equal(value[1], "mánudagur");
        test.equal(value[2], "þriðjudagur");
        test.equal(value[3], "miðvikudagur");
        test.equal(value[4], "fimmtudagur");
        test.equal(value[5], "föstudagur");
        test.equal(value[6], "laugardagur");

        fmt = new DateFmt({locale:"is-IS", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "sun.");
        test.equal(value[1], "mán.");
        test.equal(value[2], "þri.");
        test.equal(value[3], "mið.");
        test.equal(value[4], "fim.");
        test.equal(value[5], "fös.");
        test.equal(value[6], "lau.");

        fmt = new DateFmt({locale:"is-IS", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "su.");
        test.equal(value[1], "má.");
        test.equal(value[2], "þr.");
        test.equal(value[3], "mi.");
        test.equal(value[4], "fi.");
        test.equal(value[5], "fö.");
        test.equal(value[6], "la.");

        fmt = new DateFmt({locale:"is-IS", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "Þ");
        test.equal(value[3], "M");
        test.equal(value[4], "F");
        test.equal(value[5], "F");
        test.equal(value[6], "L");

        test.done();
    },
    testWeekdayTranslation_it_CH: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"it-CH", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domenica");
        test.equal(value[1], "lunedì");
        test.equal(value[2], "martedì");
        test.equal(value[3], "mercoledì");
        test.equal(value[4], "giovedì");
        test.equal(value[5], "venerdì");
        test.equal(value[6], "sabato");

        fmt = new DateFmt({locale:"it-CH", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mer");
        test.equal(value[4], "gio");
        test.equal(value[5], "ven");
        test.equal(value[6], "sab");

        fmt = new DateFmt({locale:"it-CH", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mer");
        test.equal(value[4], "gio");
        test.equal(value[5], "ven");
        test.equal(value[6], "sab");

        fmt = new DateFmt({locale:"it-CH", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "G");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_it_IT: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"it-IT", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domenica");
        test.equal(value[1], "lunedì");
        test.equal(value[2], "martedì");
        test.equal(value[3], "mercoledì");
        test.equal(value[4], "giovedì");
        test.equal(value[5], "venerdì");
        test.equal(value[6], "sabato");

        fmt = new DateFmt({locale:"it-IT", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mer");
        test.equal(value[4], "gio");
        test.equal(value[5], "ven");
        test.equal(value[6], "sab");

        fmt = new DateFmt({locale:"it-IT", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mer");
        test.equal(value[4], "gio");
        test.equal(value[5], "ven");
        test.equal(value[6], "sab");

        fmt = new DateFmt({locale:"it-IT", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "G");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_ja_JP: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ja-JP", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "日曜日");
        test.equal(value[1], "月曜日");
        test.equal(value[2], "火曜日");
        test.equal(value[3], "水曜日");
        test.equal(value[4], "木曜日");
        test.equal(value[5], "金曜日");
        test.equal(value[6], "土曜日");

        fmt = new DateFmt({locale:"ja-JP", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "日");
        test.equal(value[1], "月");
        test.equal(value[2], "火");
        test.equal(value[3], "水");
        test.equal(value[4], "木");
        test.equal(value[5], "金");
        test.equal(value[6], "土");

        fmt = new DateFmt({locale:"ja-JP", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "日");
        test.equal(value[1], "月");
        test.equal(value[2], "火");
        test.equal(value[3], "水");
        test.equal(value[4], "木");
        test.equal(value[5], "金");
        test.equal(value[6], "土");

        fmt = new DateFmt({locale:"ja-JP", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "日");
        test.equal(value[1], "月");
        test.equal(value[2], "火");
        test.equal(value[3], "水");
        test.equal(value[4], "木");
        test.equal(value[5], "金");
        test.equal(value[6], "土");

        test.done();
    },
    testWeekdayTranslation_kk_KZ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate_ StandAlone Format Exist.
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"kk-KZ", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "жексенбі");
        test.equal(value[1], "дүйсенбі");
        test.equal(value[2], "сейсенбі");
        test.equal(value[3], "сәрсенбі");
        test.equal(value[4], "бейсенбі");
        test.equal(value[5], "жұма");
        test.equal(value[6], "сенбі");

        fmt = new DateFmt({locale:"kk-KZ", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "жс");
        test.equal(value[1], "дс");
        test.equal(value[2], "сс");
        test.equal(value[3], "ср");
        test.equal(value[4], "бс");
        test.equal(value[5], "жм");
        test.equal(value[6], "сб");

        fmt = new DateFmt({locale:"kk-KZ", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "жс");
        test.equal(value[1], "дс");
        test.equal(value[2], "сс");
        test.equal(value[3], "ср");
        test.equal(value[4], "бс");
        test.equal(value[5], "жм");
        test.equal(value[6], "сб");

        fmt = new DateFmt({locale:"kk-KZ", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Ж");
        test.equal(value[1], "Д");
        test.equal(value[2], "С");
        test.equal(value[3], "С");
        test.equal(value[4], "Б");
        test.equal(value[5], "Ж");
        test.equal(value[6], "С");

        test.done();
    },
    testWeekdayTranslation_kn_IN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"kn-IN", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ಭಾನುವಾರ");
        test.equal(value[1], "ಸೋಮವಾರ");
        test.equal(value[2], "ಮಂಗಳವಾರ");
        test.equal(value[3], "ಬುಧವಾರ");
        test.equal(value[4], "ಗುರುವಾರ");
        test.equal(value[5], "ಶುಕ್ರವಾರ");
        test.equal(value[6], "ಶನಿವಾರ");

        fmt = new DateFmt({locale:"kn-IN", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ಭಾನು");
        test.equal(value[1], "ಸೋಮ");
        test.equal(value[2], "ಮಂಗಳ");
        test.equal(value[3], "ಬುಧ");
        test.equal(value[4], "ಗುರು");
        test.equal(value[5], "ಶುಕ್ರ");
        test.equal(value[6], "ಶನಿ");

        fmt = new DateFmt({locale:"kn-IN", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ಭಾನು");
        test.equal(value[1], "ಸೋಮ");
        test.equal(value[2], "ಮಂಗಳ");
        test.equal(value[3], "ಬುಧ");
        test.equal(value[4], "ಗುರು");
        test.equal(value[5], "ಶುಕ್ರ");
        test.equal(value[6], "ಶನಿ");

        fmt = new DateFmt({locale:"kn-IN", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ಭಾ");
        test.equal(value[1], "ಸೋ");
        test.equal(value[2], "ಮಂ");
        test.equal(value[3], "ಬು");
        test.equal(value[4], "ಗು");
        test.equal(value[5], "ಶು");
        test.equal(value[6], "ಶ");

        test.done();
    },
    testWeekdayTranslation_ko_KR: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow
        fmt = new DateFmt({locale:"ko-KR", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "일요일");
        test.equal(value[1], "월요일");
        test.equal(value[2], "화요일");
        test.equal(value[3], "수요일");
        test.equal(value[4], "목요일");
        test.equal(value[5], "금요일");
        test.equal(value[6], "토요일");

        fmt = new DateFmt({locale:"ko-KR", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "일");
        test.equal(value[1], "월");
        test.equal(value[2], "화");
        test.equal(value[3], "수");
        test.equal(value[4], "목");
        test.equal(value[5], "금");
        test.equal(value[6], "토");

        fmt = new DateFmt({locale:"ko-KR", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "일");
        test.equal(value[1], "월");
        test.equal(value[2], "화");
        test.equal(value[3], "수");
        test.equal(value[4], "목");
        test.equal(value[5], "금");
        test.equal(value[6], "토");

        fmt = new DateFmt({locale:"ko-KR", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "일");
        test.equal(value[1], "월");
        test.equal(value[2], "화");
        test.equal(value[3], "수");
        test.equal(value[4], "목");
        test.equal(value[5], "금");
        test.equal(value[6], "토");

        test.done();
    },
    testWeekdayTranslation_ko_KR_Intl: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("ko-KR")){
            test.done();
            return;
        }
        test.expect(7);
        var fmt, value = [], i;

        fmt = new DateFmt({locale:"ko-KR", date:"w", length: "full", useNative:false, useIntl: true, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "일요일");
        test.equal(value[1], "월요일");
        test.equal(value[2], "화요일");
        test.equal(value[3], "수요일");
        test.equal(value[4], "목요일");
        test.equal(value[5], "금요일");
        test.equal(value[6], "토요일");

        test.done();
    },
    testWeekdayTranslation_ku_Arab_IQ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"ku-Arab-IQ", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "یەکشەممە");
        test.equal(value[1], "دووشەممە");
        test.equal(value[2], "سێشەممە");
        test.equal(value[3], "چوارشەممە");
        test.equal(value[4], "پێنجشەممە");
        test.equal(value[5], "ھەینی");
        test.equal(value[6], "شەممە");

        fmt = new DateFmt({locale:"ku-Arab-IQ", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "یەکشەممە");
        test.equal(value[1], "دووشەممە");
        test.equal(value[2], "سێشەممە");
        test.equal(value[3], "چوارشەممە");
        test.equal(value[4], "پێنجشەممە");
        test.equal(value[5], "ھەینی");
        test.equal(value[6], "شەممە");

        fmt = new DateFmt({locale:"ku-Arab-IQ", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "١ش");
        test.equal(value[1], "٢ش");
        test.equal(value[2], "٣ش");
        test.equal(value[3], "٤ش");
        test.equal(value[4], "٥ش");
        test.equal(value[5], "ھ");
        test.equal(value[6], "ش");

        fmt = new DateFmt({locale:"ku-Arab-IQ", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ی");
        test.equal(value[1], "د");
        test.equal(value[2], "س");
        test.equal(value[3], "چ");
        test.equal(value[4], "پ");
        test.equal(value[5], "ھ");
        test.equal(value[6], "ش");

        test.done();
    },
    testWeekdayTranslation_lt_LT: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate_ StandAlone Format Exist
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"lt-LT", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "sekmadienis");
        test.equal(value[1], "pirmadienis");
        test.equal(value[2], "antradienis");
        test.equal(value[3], "trečiadienis");
        test.equal(value[4], "ketvirtadienis");
        test.equal(value[5], "penktadienis");
        test.equal(value[6], "šeštadienis");

        fmt = new DateFmt({locale:"lt-LT", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "sk");
        test.equal(value[1], "pr");
        test.equal(value[2], "an");
        test.equal(value[3], "tr");
        test.equal(value[4], "kt");
        test.equal(value[5], "pn");
        test.equal(value[6], "št");

        fmt = new DateFmt({locale:"lt-LT", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sk");
        test.equal(value[1], "Pr");
        test.equal(value[2], "An");
        test.equal(value[3], "Tr");
        test.equal(value[4], "Kt");
        test.equal(value[5], "Pn");
        test.equal(value[6], "Št");

        fmt = new DateFmt({locale:"lt-LT", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "S");
        test.equal(value[1], "P");
        test.equal(value[2], "A");
        test.equal(value[3], "T");
        test.equal(value[4], "K");
        test.equal(value[5], "P");
        test.equal(value[6], "Š");

        test.done();
    },
    testWeekdayTranslation_lv_LV: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"lv-LV", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Svētdiena");
        test.equal(value[1], "Pirmdiena");
        test.equal(value[2], "Otrdiena");
        test.equal(value[3], "Trešdiena");
        test.equal(value[4], "Ceturtdiena");
        test.equal(value[5], "Piektdiena");
        test.equal(value[6], "Sestdiena");

        fmt = new DateFmt({locale:"lv-LV", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Svētd.");
        test.equal(value[1], "Pirmd.");
        test.equal(value[2], "Otrd.");
        test.equal(value[3], "Trešd.");
        test.equal(value[4], "Ceturtd.");
        test.equal(value[5], "Piektd.");
        test.equal(value[6], "Sestd.");

        fmt = new DateFmt({locale:"lv-LV", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sv");
        test.equal(value[1], "Pr");
        test.equal(value[2], "Ot");
        test.equal(value[3], "Tr");
        test.equal(value[4], "Ce");
        test.equal(value[5], "Pk");
        test.equal(value[6], "Se");

        fmt = new DateFmt({locale:"lv-LV", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "S");
        test.equal(value[1], "P");
        test.equal(value[2], "O");
        test.equal(value[3], "T");
        test.equal(value[4], "C");
        test.equal(value[5], "P");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_mk_MK: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: M
        // short: narrow

        fmt = new DateFmt({locale:"mk-MK", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "недела");
        test.equal(value[1], "понеделник");
        test.equal(value[2], "вторник");
        test.equal(value[3], "среда");
        test.equal(value[4], "четврток");
        test.equal(value[5], "петок");
        test.equal(value[6], "сабота");

        fmt = new DateFmt({locale:"mk-MK", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "нед.");
        test.equal(value[1], "пон.");
        test.equal(value[2], "вто.");
        test.equal(value[3], "сре.");
        test.equal(value[4], "чет.");
        test.equal(value[5], "пет.");
        test.equal(value[6], "саб.");

        fmt = new DateFmt({locale:"mk-MK", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "нед.");
        test.equal(value[1], "пон.");
        test.equal(value[2], "вто."); //standAlone
        test.equal(value[3], "сре.");
        test.equal(value[4], "чет.");
        test.equal(value[5], "пет.");
        test.equal(value[6], "саб.");

        fmt = new DateFmt({locale:"mk-MK", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "н");
        test.equal(value[1], "п");
        test.equal(value[2], "в");
        test.equal(value[3], "с");
        test.equal(value[4], "ч");
        test.equal(value[5], "п");
        test.equal(value[6], "с");

        test.done();
    },
    testWeekdayTranslation_ml_IN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"ml-IN", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ഞായറാഴ്‌ച");
        test.equal(value[1], "തിങ്കളാഴ്‌ച");
        test.equal(value[2], "ചൊവ്വാഴ്‌ച");
        test.equal(value[3], "ബുധനാഴ്‌ച");
        test.equal(value[4], "വ്യാഴാഴ്‌ച");
        test.equal(value[5], "വെള്ളിയാഴ്‌ച");
        test.equal(value[6], "ശനിയാഴ്‌ച");

        fmt = new DateFmt({locale:"ml-IN", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ഞായർ");
        test.equal(value[1], "തിങ്കൾ");
        test.equal(value[2], "ചൊവ്വ");
        test.equal(value[3], "ബുധൻ");
        test.equal(value[4], "വ്യാഴം");
        test.equal(value[5], "വെള്ളി");
        test.equal(value[6], "ശനി");

        fmt = new DateFmt({locale:"ml-IN", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ഞാ");
        test.equal(value[1], "തി");
        test.equal(value[2], "ചൊ");
        test.equal(value[3], "ബു");
        test.equal(value[4], "വ്യാ");
        test.equal(value[5], "വെ");
        test.equal(value[6], "ശ");

        fmt = new DateFmt({locale:"ml-IN", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ഞാ");
        test.equal(value[1], "തി");
        test.equal(value[2], "ചൊ");
        test.equal(value[3], "ബു");
        test.equal(value[4], "വ്യാ");
        test.equal(value[5], "വെ");
        test.equal(value[6], "ശ");

        test.done();
    },
    testWeekdayTranslation_mr_IN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"mr-IN", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "रविवार");
        test.equal(value[1], "सोमवार");
        test.equal(value[2], "मंगळवार");
        test.equal(value[3], "बुधवार");
        test.equal(value[4], "गुरुवार");
        test.equal(value[5], "शुक्रवार");
        test.equal(value[6], "शनिवार");

        fmt = new DateFmt({locale:"mr-IN", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "रवि");
        test.equal(value[1], "सोम");
        test.equal(value[2], "मंगळ");
        test.equal(value[3], "बुध");
        test.equal(value[4], "गुरु");
        test.equal(value[5], "शुक्र");
        test.equal(value[6], "शनि");

        fmt = new DateFmt({locale:"mr-IN", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "र");
        test.equal(value[1], "सो");
        test.equal(value[2], "मं");
        test.equal(value[3], "बु");
        test.equal(value[4], "गु");
        test.equal(value[5], "शु");
        test.equal(value[6], "श");

        fmt = new DateFmt({locale:"mr-IN", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "र");
        test.equal(value[1], "सो");
        test.equal(value[2], "मं");
        test.equal(value[3], "बु");
        test.equal(value[4], "गु");
        test.equal(value[5], "शु");
        test.equal(value[6], "श");

        test.done();
    },
    testWeekdayTranslation_ms_MY: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"ms-MY", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Ahad");
        test.equal(value[1], "Isnin");
        test.equal(value[2], "Selasa");
        test.equal(value[3], "Rabu");
        test.equal(value[4], "Khamis");
        test.equal(value[5], "Jumaat");
        test.equal(value[6], "Sabtu");

        fmt = new DateFmt({locale:"ms-MY", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Ahd");
        test.equal(value[1], "Isn");
        test.equal(value[2], "Sel");
        test.equal(value[3], "Rab");
        test.equal(value[4], "Kha");
        test.equal(value[5], "Jum");
        test.equal(value[6], "Sab");

        fmt = new DateFmt({locale:"ms-MY", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Ah");
        test.equal(value[1], "Is");
        test.equal(value[2], "Se");
        test.equal(value[3], "Ra");
        test.equal(value[4], "Kh");
        test.equal(value[5], "Ju");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"ms-MY", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "A");
        test.equal(value[1], "I");
        test.equal(value[2], "S");
        test.equal(value[3], "R");
        test.equal(value[4], "K");
        test.equal(value[5], "J");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_nb_NO: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"nb-NO", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "søndag");
        test.equal(value[1], "mandag");
        test.equal(value[2], "tirsdag");
        test.equal(value[3], "onsdag");
        test.equal(value[4], "torsdag");
        test.equal(value[5], "fredag");
        test.equal(value[6], "lørdag");

        fmt = new DateFmt({locale:"nb-NO", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "søn.");
        test.equal(value[1], "man.");
        test.equal(value[2], "tir.");
        test.equal(value[3], "ons.");
        test.equal(value[4], "tor.");
        test.equal(value[5], "fre.");
        test.equal(value[6], "lør.");

        fmt = new DateFmt({locale:"nb-NO", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "sø.");
        test.equal(value[1], "ma.");
        test.equal(value[2], "ti.");
        test.equal(value[3], "on.");
        test.equal(value[4], "to.");
        test.equal(value[5], "fr.");
        test.equal(value[6], "lø.");

        fmt = new DateFmt({locale:"nb-NO", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "O");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "L");

        test.done();
    },
    testWeekdayTranslation_nl_BE: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"nl-BE", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "zondag");
        test.equal(value[1], "maandag");
        test.equal(value[2], "dinsdag");
        test.equal(value[3], "woensdag");
        test.equal(value[4], "donderdag");
        test.equal(value[5], "vrijdag");
        test.equal(value[6], "zaterdag");

        fmt = new DateFmt({locale:"nl-BE", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "zo");
        test.equal(value[1], "ma");
        test.equal(value[2], "di");
        test.equal(value[3], "wo");
        test.equal(value[4], "do");
        test.equal(value[5], "vr");
        test.equal(value[6], "za");

        fmt = new DateFmt({locale:"nl-BE", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "zo");
        test.equal(value[1], "ma");
        test.equal(value[2], "di");
        test.equal(value[3], "wo");
        test.equal(value[4], "do");
        test.equal(value[5], "vr");
        test.equal(value[6], "za");

        fmt = new DateFmt({locale:"nl-BE", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Z");
        test.equal(value[1], "M");
        test.equal(value[2], "D");
        test.equal(value[3], "W");
        test.equal(value[4], "D");
        test.equal(value[5], "V");
        test.equal(value[6], "Z");

        test.done();
    },
    testWeekdayTranslation_nl_NL: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"nl-NL", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "zondag");
        test.equal(value[1], "maandag");
        test.equal(value[2], "dinsdag");
        test.equal(value[3], "woensdag");
        test.equal(value[4], "donderdag");
        test.equal(value[5], "vrijdag");
        test.equal(value[6], "zaterdag");

        fmt = new DateFmt({locale:"nl-NL", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "zo");
        test.equal(value[1], "ma");
        test.equal(value[2], "di");
        test.equal(value[3], "wo");
        test.equal(value[4], "do");
        test.equal(value[5], "vr");
        test.equal(value[6], "za");

        fmt = new DateFmt({locale:"nl-NL", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "zo");
        test.equal(value[1], "ma");
        test.equal(value[2], "di");
        test.equal(value[3], "wo");
        test.equal(value[4], "do");
        test.equal(value[5], "vr");
        test.equal(value[6], "za");

        fmt = new DateFmt({locale:"nl-NL", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Z");
        test.equal(value[1], "M");
        test.equal(value[2], "D");
        test.equal(value[3], "W");
        test.equal(value[4], "D");
        test.equal(value[5], "V");
        test.equal(value[6], "Z");

        test.done();
    },
    testWeekdayTranslation_pa_Guru_IN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"pa-Guru-IN", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ਐਤਵਾਰ");
        test.equal(value[1], "ਸੋਮਵਾਰ");
        test.equal(value[2], "ਮੰਗਲਵਾਰ");
        test.equal(value[3], "ਬੁੱਧਵਾਰ");
        test.equal(value[4], "ਵੀਰਵਾਰ");
        test.equal(value[5], "ਸ਼ੁੱਕਰਵਾਰ");
        test.equal(value[6], "ਸ਼ਨਿੱਚਰਵਾਰ");

        fmt = new DateFmt({locale:"pa-Guru-IN", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ਐਤ");
        test.equal(value[1], "ਸੋਮ");
        test.equal(value[2], "ਮੰਗਲ");
        test.equal(value[3], "ਬੁੱਧ");
        test.equal(value[4], "ਵੀਰ");
        test.equal(value[5], "ਸ਼ੁੱਕਰ");
        test.equal(value[6], "ਸ਼ਨਿੱਚਰ");

        fmt = new DateFmt({locale:"pa-Guru-IN", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ਐਤ");
        test.equal(value[1], "ਸੋਮ");
        test.equal(value[2], "ਮੰਗ");
        test.equal(value[3], "ਬੁੱਧ");
        test.equal(value[4], "ਵੀਰ");
        test.equal(value[5], "ਸ਼ੁੱਕ");
        test.equal(value[6], "ਸ਼ਨਿੱ");

        fmt = new DateFmt({locale:"pa-Guru-IN", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ਐ");
        test.equal(value[1], "ਸੋ");
        test.equal(value[2], "ਮੰ");
        test.equal(value[3], "ਬੁੱ");
        test.equal(value[4], "ਵੀ");
        test.equal(value[5], "ਸ਼ੁੱ");
        test.equal(value[6], "ਸ਼");

        test.done();
    },
    testWeekdayTranslation_pl_PL: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate _ StandAlone Format Exist
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"pl-PL", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "niedziela");
        test.equal(value[1], "poniedziałek");
        test.equal(value[2], "wtorek");
        test.equal(value[3], "środa");
        test.equal(value[4], "czwartek");
        test.equal(value[5], "piątek");
        test.equal(value[6], "sobota");

        fmt = new DateFmt({locale:"pl-PL", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "niedz.");
        test.equal(value[1], "pon.");
        test.equal(value[2], "wt.");
        test.equal(value[3], "śr.");
        test.equal(value[4], "czw.");
        test.equal(value[5], "pt.");
        test.equal(value[6], "sob.");

        fmt = new DateFmt({locale:"pl-PL", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "nie");
        test.equal(value[1], "pon");
        test.equal(value[2], "wto");
        test.equal(value[3], "śro");
        test.equal(value[4], "czw");
        test.equal(value[5], "pią");
        test.equal(value[6], "sob");

        fmt = new DateFmt({locale:"pl-PL", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "N");
        test.equal(value[1], "P");
        test.equal(value[2], "W");
        test.equal(value[3], "Ś");
        test.equal(value[4], "C");
        test.equal(value[5], "P");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_pt_BR: function(test) {
        test.expect(28);

        // Same as pt-PT
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"pt-BR", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "segunda-feira");
        test.equal(value[2], "terça-feira");
        test.equal(value[3], "quarta-feira");
        test.equal(value[4], "quinta-feira");
        test.equal(value[5], "sexta-feira");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"pt-BR", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], 'dom.');
        test.equal(value[1], 'seg.');
        test.equal(value[2], 'ter.');
        test.equal(value[3], 'qua.');
        test.equal(value[4], 'qui.');
        test.equal(value[5], 'sex.');
        test.equal(value[6], 'sáb.');

        fmt = new DateFmt({locale:"pt-BR", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], 'dom.');
        test.equal(value[1], 'seg.');
        test.equal(value[2], 'ter.');
        test.equal(value[3], 'qua.');
        test.equal(value[4], 'qui.');
        test.equal(value[5], 'sex.');
        test.equal(value[6], 'sáb.');

        fmt = new DateFmt({locale:"pt-BR", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "S");
        test.equal(value[2], "T");
        test.equal(value[3], "Q");
        test.equal(value[4], "Q");
        test.equal(value[5], "S");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_pt_PT: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"pt-PT", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "segunda-feira");
        test.equal(value[2], "terça-feira");
        test.equal(value[3], "quarta-feira");
        test.equal(value[4], "quinta-feira");
        test.equal(value[5], "sexta-feira");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"pt-PT", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "segunda");
        test.equal(value[2], "terça");
        test.equal(value[3], "quarta");
        test.equal(value[4], "quinta");
        test.equal(value[5], "sexta");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"pt-PT", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], 'dom.');
        test.equal(value[1], 'seg.');
        test.equal(value[2], 'ter.');
        test.equal(value[3], 'qua.');
        test.equal(value[4], 'qui.');
        test.equal(value[5], 'sex.');
        test.equal(value[6], 'sáb.');

        fmt = new DateFmt({locale:"pt-PT", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "S");
        test.equal(value[2], "T");
        test.equal(value[3], "Q");
        test.equal(value[4], "Q");
        test.equal(value[5], "S");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_ro_RO: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"ro-RO", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "duminică");
        test.equal(value[1], "luni");
        test.equal(value[2], "marți");
        test.equal(value[3], "miercuri");
        test.equal(value[4], "joi");
        test.equal(value[5], "vineri");
        test.equal(value[6], "sâmbătă");

        fmt = new DateFmt({locale:"ro-RO", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dum.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mie.");
        test.equal(value[4], "joi");
        test.equal(value[5], "vin.");
        test.equal(value[6], "sâm.");

        fmt = new DateFmt({locale:"ro-RO", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "du.");
        test.equal(value[1], "lu.");
        test.equal(value[2], "ma.");
        test.equal(value[3], "mi.");
        test.equal(value[4], "joi");
        test.equal(value[5], "vi.");
        test.equal(value[6], "sâ.");

        fmt = new DateFmt({locale:"ro-RO", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_sr_Cyrl_RS: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"sr-Cyrl-RS", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "недеља");
        test.equal(value[1], "понедељак");
        test.equal(value[2], "уторак");
        test.equal(value[3], "среда");
        test.equal(value[4], "четвртак");
        test.equal(value[5], "петак");
        test.equal(value[6], "субота");

        fmt = new DateFmt({locale:"sr-Cyrl-RS", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "нед");
        test.equal(value[1], "пон");
        test.equal(value[2], "уто");
        test.equal(value[3], "сре");
        test.equal(value[4], "чет");
        test.equal(value[5], "пет");
        test.equal(value[6], "суб");

        fmt = new DateFmt({locale:"sr-Cyrl-RS", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "не");
        test.equal(value[1], "по");
        test.equal(value[2], "ут");
        test.equal(value[3], "ср");
        test.equal(value[4], "че");
        test.equal(value[5], "пе");
        test.equal(value[6], "су");

        fmt = new DateFmt({locale:"sr-Cyrl-RS", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "н");
        test.equal(value[1], "п");
        test.equal(value[2], "у");
        test.equal(value[3], "с");
        test.equal(value[4], "ч");
        test.equal(value[5], "п");
        test.equal(value[6], "с");

        test.done();
    },
    testWeekdayTranslation_sr_Latn_RS: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"sr-Latn-RS", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "nedelja");
        test.equal(value[1], "ponedeljak");
        test.equal(value[2], "utorak");
        test.equal(value[3], "sreda");
        test.equal(value[4], "četvrtak");
        test.equal(value[5], "petak");
        test.equal(value[6], "subota");

        fmt = new DateFmt({locale:"sr-Latn-RS", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ned");
        test.equal(value[1], "pon");
        test.equal(value[2], "uto");
        test.equal(value[3], "sre");
        test.equal(value[4], "čet");
        test.equal(value[5], "pet");
        test.equal(value[6], "sub");

        fmt = new DateFmt({locale:"sr-Latn-RS", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ne");
        test.equal(value[1], "po");
        test.equal(value[2], "ut");
        test.equal(value[3], "sr");
        test.equal(value[4], "če");
        test.equal(value[5], "pe");
        test.equal(value[6], "su");

        fmt = new DateFmt({locale:"sr-Latn-RS", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "n");
        test.equal(value[1], "p");
        test.equal(value[2], "u");
        test.equal(value[3], "s");
        test.equal(value[4], "č");
        test.equal(value[5], "p");
        test.equal(value[6], "s");

        test.done();
    },
    testWeekdayTranslation_ru_BY: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate _ standAlone Format Exist.
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"ru-BY", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "воскресенье");
        test.equal(value[1], "понедельник");
        test.equal(value[2], "вторник");
        test.equal(value[3], "среда");
        test.equal(value[4], "четверг");
        test.equal(value[5], "пятница");
        test.equal(value[6], "суббота");

        fmt = new DateFmt({locale:"ru-BY", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "вс");
        test.equal(value[1], "пн");
        test.equal(value[2], "вт");
        test.equal(value[3], "ср");
        test.equal(value[4], "чт");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");

        fmt = new DateFmt({locale:"ru-BY", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "вс");
        test.equal(value[1], "пн");
        test.equal(value[2], "вт");
        test.equal(value[3], "ср");
        test.equal(value[4], "чт");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");

        fmt = new DateFmt({locale:"ru-BY", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "В");
        test.equal(value[1], "П");
        test.equal(value[2], "В");
        test.equal(value[3], "С");
        test.equal(value[4], "Ч");
        test.equal(value[5], "П");
        test.equal(value[6], "С");

        test.done();
    },
    testWeekdayTranslation_ru_KG: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        var fmt, value = [], i;

        fmt = new DateFmt({locale:"ru-KG", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "воскресенье");
        test.equal(value[1], "понедельник");
        test.equal(value[2], "вторник");
        test.equal(value[3], "среда");
        test.equal(value[4], "четверг");
        test.equal(value[5], "пятница");
        test.equal(value[6], "суббота");

        fmt = new DateFmt({locale:"ru-KG", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "вс");
        test.equal(value[1], "пн");
        test.equal(value[2], "вт");
        test.equal(value[3], "ср");
        test.equal(value[4], "чт");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");

        fmt = new DateFmt({locale:"ru-KG", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "вс");
        test.equal(value[1], "пн");
        test.equal(value[2], "вт");
        test.equal(value[3], "ср");
        test.equal(value[4], "чт");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");

        fmt = new DateFmt({locale:"ru-KG", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "В");
        test.equal(value[1], "П");
        test.equal(value[2], "В");
        test.equal(value[3], "С");
        test.equal(value[4], "Ч");
        test.equal(value[5], "П");
        test.equal(value[6], "С");

        test.done();
    },
    testWeekdayTranslation_ru_KZ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"ru-KZ", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "воскресенье");
        test.equal(value[1], "понедельник");
        test.equal(value[2], "вторник");
        test.equal(value[3], "среда");
        test.equal(value[4], "четверг");
        test.equal(value[5], "пятница");
        test.equal(value[6], "суббота");

        fmt = new DateFmt({locale:"ru-KZ", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "вс");
        test.equal(value[1], "пн");
        test.equal(value[2], "вт");
        test.equal(value[3], "ср");
        test.equal(value[4], "чт");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");

        fmt = new DateFmt({locale:"ru-KZ", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "вс");
        test.equal(value[1], "пн");
        test.equal(value[2], "вт");
        test.equal(value[3], "ср");
        test.equal(value[4], "чт");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");

        fmt = new DateFmt({locale:"ru-KZ", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "В");
        test.equal(value[1], "П");
        test.equal(value[2], "В");
        test.equal(value[3], "С");
        test.equal(value[4], "Ч");
        test.equal(value[5], "П");
        test.equal(value[6], "С");

        test.done();
    },
    testWeekdayTranslation_ru_GE: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // Same as ru-RU

        fmt = new DateFmt({locale:"ru-GE", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "воскресенье");
        test.equal(value[1], "понедельник");
        test.equal(value[2], "вторник");
        test.equal(value[3], "среда");
        test.equal(value[4], "четверг");
        test.equal(value[5], "пятница");
        test.equal(value[6], "суббота");

        fmt = new DateFmt({locale:"ru-GE", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "вс");
        test.equal(value[1], "пн");
        test.equal(value[2], "вт");
        test.equal(value[3], "ср");
        test.equal(value[4], "чт");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");

        fmt = new DateFmt({locale:"ru-GE", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "вс");
        test.equal(value[1], "пн");
        test.equal(value[2], "вт");
        test.equal(value[3], "ср");
        test.equal(value[4], "чт");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");

        fmt = new DateFmt({locale:"ru-GE", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "В");
        test.equal(value[1], "П");
        test.equal(value[2], "В");
        test.equal(value[3], "С");
        test.equal(value[4], "Ч");
        test.equal(value[5], "П");
        test.equal(value[6], "С");

        test.done();
    },
    testWeekdayTranslation_ru_RU: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"ru-RU", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "воскресенье");
        test.equal(value[1], "понедельник");
        test.equal(value[2], "вторник");
        test.equal(value[3], "среда");
        test.equal(value[4], "четверг");
        test.equal(value[5], "пятница");
        test.equal(value[6], "суббота");

        fmt = new DateFmt({locale:"ru-RU", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "вс");
        test.equal(value[1], "пн");
        test.equal(value[2], "вт");
        test.equal(value[3], "ср");
        test.equal(value[4], "чт");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");

        fmt = new DateFmt({locale:"ru-RU", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "вс");
        test.equal(value[1], "пн");
        test.equal(value[2], "вт");
        test.equal(value[3], "ср");
        test.equal(value[4], "чт");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");

        fmt = new DateFmt({locale:"ru-RU", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "В");
        test.equal(value[1], "П");
        test.equal(value[2], "В");
        test.equal(value[3], "С");
        test.equal(value[4], "Ч");
        test.equal(value[5], "П");
        test.equal(value[6], "С");

        test.done();
    },
    testWeekdayTranslation_ru_UA: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"ru-UA", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "воскресенье");
        test.equal(value[1], "понедельник");
        test.equal(value[2], "вторник");
        test.equal(value[3], "среда");
        test.equal(value[4], "четверг");
        test.equal(value[5], "пятница");
        test.equal(value[6], "суббота");

        fmt = new DateFmt({locale:"ru-UA", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "вс");
        test.equal(value[1], "пн");
        test.equal(value[2], "вт");
        test.equal(value[3], "ср");
        test.equal(value[4], "чт");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");

        fmt = new DateFmt({locale:"ru-UA", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "вс");
        test.equal(value[1], "пн");
        test.equal(value[2], "вт");
        test.equal(value[3], "ср");
        test.equal(value[4], "чт");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");

        fmt = new DateFmt({locale:"ru-UA", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        //standAlone
        test.equal(value[0], "В");
        test.equal(value[1], "П");
        test.equal(value[2], "В");
        test.equal(value[3], "С");
        test.equal(value[4], "Ч");
        test.equal(value[5], "П");
        test.equal(value[6], "С");

        test.done();
    },
    testWeekdayTranslation_sk_SK: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate _ standAlone Format Exist.
        // medium: M
        // short: narrow

        fmt = new DateFmt({locale:"sk-SK", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "nedeľa");
        test.equal(value[1], "pondelok");
        test.equal(value[2], "utorok");
        test.equal(value[3], "streda");
        test.equal(value[4], "štvrtok");
        test.equal(value[5], "piatok");
        test.equal(value[6], "sobota");

        fmt = new DateFmt({locale:"sk-SK", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ne");
        test.equal(value[1], "po");
        test.equal(value[2], "ut");
        test.equal(value[3], "st");
        test.equal(value[4], "št");
        test.equal(value[5], "pi");
        test.equal(value[6], "so");

        fmt = new DateFmt({locale:"sk-SK", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ne");
        test.equal(value[1], "po");
        test.equal(value[2], "ut");
        test.equal(value[3], "st");
        test.equal(value[4], "št");
        test.equal(value[5], "pi");
        test.equal(value[6], "so");

        fmt = new DateFmt({locale:"sk-SK", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "n");
        test.equal(value[1], "p");
        test.equal(value[2], "u");
        test.equal(value[3], "s");
        test.equal(value[4], "š");
        test.equal(value[5], "p");
        test.equal(value[6], "s");

        test.done();
    },
    testWeekdayTranslation_sl_SI: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"sl-SI", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "nedelja");
        test.equal(value[1], "ponedeljek");
        test.equal(value[2], "torek");
        test.equal(value[3], "sreda");
        test.equal(value[4], "četrtek");
        test.equal(value[5], "petek");
        test.equal(value[6], "sobota");

        fmt = new DateFmt({locale:"sl-SI", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ned.");
        test.equal(value[1], "pon.");
        test.equal(value[2], "tor.");
        test.equal(value[3], "sre.");
        test.equal(value[4], "čet.");
        test.equal(value[5], "pet.");
        test.equal(value[6], "sob.");

        fmt = new DateFmt({locale:"sl-SI", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ned.");
        test.equal(value[1], "pon.");
        test.equal(value[2], "tor.");
        test.equal(value[3], "sre.");
        test.equal(value[4], "čet.");
        test.equal(value[5], "pet.");
        test.equal(value[6], "sob.");

        fmt = new DateFmt({locale:"sl-SI", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "n");
        test.equal(value[1], "p");
        test.equal(value[2], "t");
        test.equal(value[3], "s");
        test.equal(value[4], "č");
        test.equal(value[5], "p");
        test.equal(value[6], "s");

        test.done();
    },
    testWeekdayTranslation_sq_AL: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"sq-AL", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "e diel");
        test.equal(value[1], "e hënë");
        test.equal(value[2], "e martë");
        test.equal(value[3], "e mërkurë");
        test.equal(value[4], "e enjte");
        test.equal(value[5], "e premte");
        test.equal(value[6], "e shtunë");

        fmt = new DateFmt({locale:"sq-AL", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "die"); //Not standAlone
        test.equal(value[1], "hën"); //Not standAlone
        test.equal(value[2], "mar"); //Not standAlone
        test.equal(value[3], "mër"); //Not standAlone
        test.equal(value[4], "enj"); //Not standAlone
        test.equal(value[5], "pre"); //Not standAlone
        test.equal(value[6], "sht"); //Not standAlone

        fmt = new DateFmt({locale:"sq-AL", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "die");
        test.equal(value[1], "hën");
        test.equal(value[2], "mar");
        test.equal(value[3], "mër");
        test.equal(value[4], "enj");
        test.equal(value[5], "pre");
        test.equal(value[6], "sht");

        fmt = new DateFmt({locale:"sq-AL", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "d");
        test.equal(value[1], "h");
        test.equal(value[2], "m");
        test.equal(value[3], "m");
        test.equal(value[4], "e");
        test.equal(value[5], "p");
        test.equal(value[6], "sh");

        test.done();
    },
    testWeekdayTranslation_sq_ME: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // Same as sq-AL

        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"sq-ME", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "e diel");
        test.equal(value[1], "e hënë");
        test.equal(value[2], "e martë");
        test.equal(value[3], "e mërkurë");
        test.equal(value[4], "e enjte");
        test.equal(value[5], "e premte");
        test.equal(value[6], "e shtunë");

        fmt = new DateFmt({locale:"sq-ME", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "die"); //Not standAlone
        test.equal(value[1], "hën"); //Not standAlone
        test.equal(value[2], "mar"); //Not standAlone
        test.equal(value[3], "mër"); //Not standAlone
        test.equal(value[4], "enj"); //Not standAlone
        test.equal(value[5], "pre"); //Not standAlone
        test.equal(value[6], "sht"); //Not standAlone

        fmt = new DateFmt({locale:"sq-ME", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "die");
        test.equal(value[1], "hën");
        test.equal(value[2], "mar");
        test.equal(value[3], "mër");
        test.equal(value[4], "enj");
        test.equal(value[5], "pre");
        test.equal(value[6], "sht");

        fmt = new DateFmt({locale:"sq-ME", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "d");
        test.equal(value[1], "h");
        test.equal(value[2], "m");
        test.equal(value[3], "m");
        test.equal(value[4], "e");
        test.equal(value[5], "p");
        test.equal(value[6], "sh");

        test.done();
    },
    testWeekdayTranslation_sv_FI: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"sv-FI", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "söndag");
        test.equal(value[1], "måndag");
        test.equal(value[2], "tisdag");
        test.equal(value[3], "onsdag");
        test.equal(value[4], "torsdag");
        test.equal(value[5], "fredag");
        test.equal(value[6], "lördag");

        fmt = new DateFmt({locale:"sv-FI", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "sön");
        test.equal(value[1], "mån");
        test.equal(value[2], "tis");
        test.equal(value[3], "ons");
        test.equal(value[4], "tors");
        test.equal(value[5], "fre");
        test.equal(value[6], "lör");

        fmt = new DateFmt({locale:"sv-FI", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "sö");
        test.equal(value[1], "må");
        test.equal(value[2], "ti");
        test.equal(value[3], "on");
        test.equal(value[4], "to");
        test.equal(value[5], "fr");
        test.equal(value[6], "lö");

        fmt = new DateFmt({locale:"sv-FI", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "O");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "L");

        test.done();
    },
    testWeekdayTranslation_sv_SE: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"sv-SE", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "söndag");
        test.equal(value[1], "måndag");
        test.equal(value[2], "tisdag");
        test.equal(value[3], "onsdag");
        test.equal(value[4], "torsdag");
        test.equal(value[5], "fredag");
        test.equal(value[6], "lördag");

        fmt = new DateFmt({locale:"sv-SE", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "sön");
        test.equal(value[1], "mån");
        test.equal(value[2], "tis");
        test.equal(value[3], "ons");
        test.equal(value[4], "tors");
        test.equal(value[5], "fre");
        test.equal(value[6], "lör");

        fmt = new DateFmt({locale:"sv-SE", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "sö");
        test.equal(value[1], "må");
        test.equal(value[2], "ti");
        test.equal(value[3], "on");
        test.equal(value[4], "to");
        test.equal(value[5], "fr");
        test.equal(value[6], "lö");

        fmt = new DateFmt({locale:"sv-SE", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "O");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "L");
        test.done();
    },
    testWeekdayTranslation_ta_IN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"ta-IN", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ஞாயிறு");
        test.equal(value[1], "திங்கள்");
        test.equal(value[2], "செவ்வாய்");
        test.equal(value[3], "புதன்");
        test.equal(value[4], "வியாழன்");
        test.equal(value[5], "வெள்ளி");
        test.equal(value[6], "சனி");

        fmt = new DateFmt({locale:"ta-IN", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ஞாயி.");
        test.equal(value[1], "திங்.");
        test.equal(value[2], "செவ்.");
        test.equal(value[3], "புத.");
        test.equal(value[4], "வியா.");
        test.equal(value[5], "வெள்.");
        test.equal(value[6], "சனி");

        fmt = new DateFmt({locale:"ta-IN", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ஞா");
        test.equal(value[1], "தி");
        test.equal(value[2], "செ");
        test.equal(value[3], "பு");
        test.equal(value[4], "வி");
        test.equal(value[5], "வெ");
        test.equal(value[6], "ச");

        fmt = new DateFmt({locale:"ta-IN", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ஞா");
        test.equal(value[1], "தி");
        test.equal(value[2], "செ");
        test.equal(value[3], "பு");
        test.equal(value[4], "வி");
        test.equal(value[5], "வெ");
        test.equal(value[6], "ச");

        test.done();
    },
    testWeekdayTranslation_te_IN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"te-IN", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ఆదివారం");
        test.equal(value[1], "సోమవారం");
        test.equal(value[2], "మంగళవారం");
        test.equal(value[3], "బుధవారం");
        test.equal(value[4], "గురువారం");
        test.equal(value[5], "శుక్రవారం");
        test.equal(value[6], "శనివారం");

        fmt = new DateFmt({locale:"te-IN", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ఆది");
        test.equal(value[1], "సోమ");
        test.equal(value[2], "మంగళ");
        test.equal(value[3], "బుధ");
        test.equal(value[4], "గురు");
        test.equal(value[5], "శుక్ర");
        test.equal(value[6], "శని");

        fmt = new DateFmt({locale:"te-IN", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ఆది");
        test.equal(value[1], "సోమ");
        test.equal(value[2], "మం");
        test.equal(value[3], "బుధ");
        test.equal(value[4], "గురు");
        test.equal(value[5], "శుక్ర");
        test.equal(value[6], "శని");

        fmt = new DateFmt({locale:"te-IN", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ఆ");
        test.equal(value[1], "సో");
        test.equal(value[2], "మ");
        test.equal(value[3], "బు");
        test.equal(value[4], "గు");
        test.equal(value[5], "శు");
        test.equal(value[6], "శ");

        test.done();
    },
    testWeekdayTranslation_th_TH: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"th-TH", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+4, type:"thaisolar"}));
        }
        test.equal(value[0], "วันอาทิตย์");
        test.equal(value[1], "วันจันทร์");
        test.equal(value[2], "วันอังคาร");
        test.equal(value[3], "วันพุธ");
        test.equal(value[4], "วันพฤหัสบดี");
        test.equal(value[5], "วันศุกร์");
        test.equal(value[6], "วันเสาร์");

        fmt = new DateFmt({locale:"th-TH", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+4, type:"thaisolar"}));
        }
        test.equal(value[0], "อา.");
        test.equal(value[1], "จ.");
        test.equal(value[2], "อ.");
        test.equal(value[3], "พ.");
        test.equal(value[4], "พฤ.");
        test.equal(value[5], "ศ.");
        test.equal(value[6], "ส.");

        fmt = new DateFmt({locale:"th-TH", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+4, type:"thaisolar"}));
        }
        test.equal(value[0], "อา.");
        test.equal(value[1], "จ.");
        test.equal(value[2], "อ.");
        test.equal(value[3], "พ.");
        test.equal(value[4], "พฤ.");
        test.equal(value[5], "ศ.");
        test.equal(value[6], "ส.");

        fmt = new DateFmt({locale:"th-TH", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+4, type:"thaisolar"}));
        }
        test.equal(value[0], "อา");
        test.equal(value[1], "จ");
        test.equal(value[2], "อ");
        test.equal(value[3], "พ");
        test.equal(value[4], "พฤ");
        test.equal(value[5], "ศ");
        test.equal(value[6], "ส");

        test.done();
    },
    testWeekdayTranslation_tr_AM: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"tr-AM", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Pazar");
        test.equal(value[1], "Pazartesi");
        test.equal(value[2], "Salı");
        test.equal(value[3], "Çarşamba");
        test.equal(value[4], "Perşembe");
        test.equal(value[5], "Cuma");
        test.equal(value[6], "Cumartesi");

        fmt = new DateFmt({locale:"tr-AM", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Paz");
        test.equal(value[1], "Pzt");
        test.equal(value[2], "Sal");
        test.equal(value[3], "Çar");
        test.equal(value[4], "Per");
        test.equal(value[5], "Cum");
        test.equal(value[6], "Cmt");

        fmt = new DateFmt({locale:"tr-AM", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Pa");
        test.equal(value[1], "Pt");
        test.equal(value[2], "Sa");
        test.equal(value[3], "Ça");
        test.equal(value[4], "Pe");
        test.equal(value[5], "Cu");
        test.equal(value[6], "Ct");

        fmt = new DateFmt({locale:"tr-AM", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "P");
        test.equal(value[1], "P");
        test.equal(value[2], "S");
        test.equal(value[3], "Ç");
        test.equal(value[4], "P");
        test.equal(value[5], "C");
        test.equal(value[6], "C");

        test.done();
    },
    testWeekdayTranslation_tr_AZ: function(test) {
        test.expect(28);

        // Same as tr-TR
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"tr-AZ", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Pazar");
        test.equal(value[1], "Pazartesi");
        test.equal(value[2], "Salı");
        test.equal(value[3], "Çarşamba");
        test.equal(value[4], "Perşembe");
        test.equal(value[5], "Cuma");
        test.equal(value[6], "Cumartesi");

        fmt = new DateFmt({locale:"tr-AZ", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Paz");
        test.equal(value[1], "Pzt");
        test.equal(value[2], "Sal");
        test.equal(value[3], "Çar");
        test.equal(value[4], "Per");
        test.equal(value[5], "Cum");
        test.equal(value[6], "Cmt");

        fmt = new DateFmt({locale:"tr-AZ", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Pa");
        test.equal(value[1], "Pt");
        test.equal(value[2], "Sa");
        test.equal(value[3], "Ça");
        test.equal(value[4], "Pe");
        test.equal(value[5], "Cu");
        test.equal(value[6], "Ct");

        fmt = new DateFmt({locale:"tr-AZ", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "P");
        test.equal(value[1], "P");
        test.equal(value[2], "S");
        test.equal(value[3], "Ç");
        test.equal(value[4], "P");
        test.equal(value[5], "C");
        test.equal(value[6], "C");

        test.done();
    },
    testWeekdayTranslation_tr_CY: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"tr-CY", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Pazar");
        test.equal(value[1], "Pazartesi");
        test.equal(value[2], "Salı");
        test.equal(value[3], "Çarşamba");
        test.equal(value[4], "Perşembe");
        test.equal(value[5], "Cuma");
        test.equal(value[6], "Cumartesi");

        fmt = new DateFmt({locale:"tr-CY", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Paz");
        test.equal(value[1], "Pzt");
        test.equal(value[2], "Sal");
        test.equal(value[3], "Çar");
        test.equal(value[4], "Per");
        test.equal(value[5], "Cum");
        test.equal(value[6], "Cmt");

        fmt = new DateFmt({locale:"tr-CY", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Pa");
        test.equal(value[1], "Pt");
        test.equal(value[2], "Sa");
        test.equal(value[3], "Ça");
        test.equal(value[4], "Pe");
        test.equal(value[5], "Cu");
        test.equal(value[6], "Ct");

        fmt = new DateFmt({locale:"tr-CY", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "P");
        test.equal(value[1], "P");
        test.equal(value[2], "S");
        test.equal(value[3], "Ç");
        test.equal(value[4], "P");
        test.equal(value[5], "C");
        test.equal(value[6], "C");

        test.done();
    },
    testWeekdayTranslation_tr_TR: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"tr-TR", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Pazar");
        test.equal(value[1], "Pazartesi");
        test.equal(value[2], "Salı");
        test.equal(value[3], "Çarşamba");
        test.equal(value[4], "Perşembe");
        test.equal(value[5], "Cuma");
        test.equal(value[6], "Cumartesi");

        fmt = new DateFmt({locale:"tr-TR", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Paz");
        test.equal(value[1], "Pzt");
        test.equal(value[2], "Sal");
        test.equal(value[3], "Çar");
        test.equal(value[4], "Per");
        test.equal(value[5], "Cum");
        test.equal(value[6], "Cmt");

        fmt = new DateFmt({locale:"tr-TR", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Pa");
        test.equal(value[1], "Pt");
        test.equal(value[2], "Sa");
        test.equal(value[3], "Ça");
        test.equal(value[4], "Pe");
        test.equal(value[5], "Cu");
        test.equal(value[6], "Ct");

        fmt = new DateFmt({locale:"tr-TR", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "P");
        test.equal(value[1], "P");
        test.equal(value[2], "S");
        test.equal(value[3], "Ç");
        test.equal(value[4], "P");
        test.equal(value[5], "C");
        test.equal(value[6], "C");
        test.done();
    },
    testWeekdayTranslation_uk_UA: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate _ standAlone Format Exist
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"uk-UA", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "неділя");
        test.equal(value[1], "понеділок");
        test.equal(value[2], "вівторок");
        test.equal(value[3], "середа");
        test.equal(value[4], "четвер");
        test.equal(value[5], "пʼятниця");
        test.equal(value[6], "субота");

        fmt = new DateFmt({locale:"uk-UA", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "нд");
        test.equal(value[1], "пн");
        test.equal(value[2], "вт");
        test.equal(value[3], "ср");
        test.equal(value[4], "чт");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");

        fmt = new DateFmt({locale:"uk-UA", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "нд");
        test.equal(value[1], "пн");
        test.equal(value[2], "вт");
        test.equal(value[3], "ср");
        test.equal(value[4], "чт");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");

        fmt = new DateFmt({locale:"uk-UA", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Н");
        test.equal(value[1], "П");
        test.equal(value[2], "В");
        test.equal(value[3], "С");
        test.equal(value[4], "Ч");
        test.equal(value[5], "П");
        test.equal(value[6], "С");

        test.done();
    },
    testWeekdayTranslation_ur_IN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"ur-IN", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "اتوار");
        test.equal(value[1], "پیر");
        test.equal(value[2], "منگل");
        test.equal(value[3], "بدھ");
        test.equal(value[4], "جمعرات");
        test.equal(value[5], "جمعہ");
        test.equal(value[6], "ہفتہ");

        fmt = new DateFmt({locale:"ur-IN", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "اتوار");
        test.equal(value[1], "پیر");
        test.equal(value[2], "منگل");
        test.equal(value[3], "بدھ");
        test.equal(value[4], "جمعرات");
        test.equal(value[5], "جمعہ");
        test.equal(value[6], "ہفتہ");

        fmt = new DateFmt({locale:"ur-IN", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "اتوار");
        test.equal(value[1], "پیر");
        test.equal(value[2], "منگل");
        test.equal(value[3], "بدھ");
        test.equal(value[4], "جمعرات");
        test.equal(value[5], "جمعہ");
        test.equal(value[6], "ہفتہ");

        fmt = new DateFmt({locale:"ur-IN", date:"w", length: "short", useNative:false, timezone:"local"});

        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], 'S');
        test.equal(value[1], 'M');
        test.equal(value[2], 'T');
        test.equal(value[3], 'W');
        test.equal(value[4], 'T');
        test.equal(value[5], 'F');
        test.equal(value[6], 'S');

        test.done();
    },
    testWeekdayTranslation_uz_Latn_UZ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate_ StandAlone Format Exist.
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"uz-Latn-UZ", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "yakshanba");
        test.equal(value[1], "dushanba");
        test.equal(value[2], "seshanba");
        test.equal(value[3], "chorshanba");
        test.equal(value[4], "payshanba");
        test.equal(value[5], "juma");
        test.equal(value[6], "shanba");

        fmt = new DateFmt({locale:"uz-Latn-UZ", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Yak");
        test.equal(value[1], "Dush");
        test.equal(value[2], "Sesh");
        test.equal(value[3], "Chor");
        test.equal(value[4], "Pay");
        test.equal(value[5], "Jum");
        test.equal(value[6], "Shan");

        fmt = new DateFmt({locale:"uz-Latn-UZ", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Ya");
        test.equal(value[1], "Du");
        test.equal(value[2], "Se");
        test.equal(value[3], "Ch");
        test.equal(value[4], "Pa");
        test.equal(value[5], "Ju");
        test.equal(value[6], "Sh");

        fmt = new DateFmt({locale:"uz-Latn-UZ", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Y");
        test.equal(value[1], "D");
        test.equal(value[2], "S");
        test.equal(value[3], "C");
        test.equal(value[4], "P");
        test.equal(value[5], "J");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_vi_VN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate _ StandAlone Format Exist.
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"vi-VN", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Chủ Nhật");
        test.equal(value[1], "Thứ Hai");
        test.equal(value[2], "Thứ Ba");
        test.equal(value[3],  "Thứ Tư");
        test.equal(value[4], "Thứ Năm");
        test.equal(value[5], "Thứ Sáu");
        test.equal(value[6], "Thứ Bảy");

        fmt = new DateFmt({locale:"vi-VN", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "CN");
        test.equal(value[1], "Th 2");
        test.equal(value[2], "Th 3");
        test.equal(value[3], "Th 4");
        test.equal(value[4], "Th 5");
        test.equal(value[5], "Th 6");
        test.equal(value[6], "Th 7");

        fmt = new DateFmt({locale:"vi-VN", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "CN");
        test.equal(value[1], "T2");
        test.equal(value[2], "T3");
        test.equal(value[3], "T4");
        test.equal(value[4], "T5");
        test.equal(value[5], "T6");
        test.equal(value[6], "T7");

        fmt = new DateFmt({locale:"vi-VN", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "CN");
        test.equal(value[1], "T2");
        test.equal(value[2], "T3");
        test.equal(value[3], "T4");
        test.equal(value[4], "T5");
        test.equal(value[5], "T6");
        test.equal(value[6], "T7");

        test.done();
    },
    testWeekdayTranslation_zh_Hans_CN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"zh-Hans-CN", date:"w", length: "full", useNative:false, timezone:"local"})

        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "星期日");
        test.equal(value[1], "星期一");
        test.equal(value[2], "星期二");
        test.equal(value[3], "星期三");
        test.equal(value[4], "星期四");
        test.equal(value[5], "星期五");
        test.equal(value[6], "星期六");

        fmt = new DateFmt({locale:"zh-Hans-CN", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "周日");
        test.equal(value[1], "周一");
        test.equal(value[2], "周二");
        test.equal(value[3], "周三");
        test.equal(value[4], "周四");
        test.equal(value[5], "周五");
        test.equal(value[6], "周六");

        fmt = new DateFmt({locale:"zh-Hans-CN", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "周日");
        test.equal(value[1], "周一");
        test.equal(value[2], "周二");
        test.equal(value[3], "周三");
        test.equal(value[4], "周四");
        test.equal(value[5], "周五");
        test.equal(value[6], "周六");

        fmt = new DateFmt({locale:"zh-Hans-CN", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "日");
        test.equal(value[1], "一");
        test.equal(value[2], "二");
        test.equal(value[3], "三");
        test.equal(value[4], "四");
        test.equal(value[5], "五");
        test.equal(value[6], "六");

        test.done();
    },
    testWeekdayTranslation_zh_Hant_HK: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"zh-Hans-HK", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "星期日");
        test.equal(value[1], "星期一");
        test.equal(value[2], "星期二");
        test.equal(value[3], "星期三");
        test.equal(value[4], "星期四");
        test.equal(value[5], "星期五");
        test.equal(value[6], "星期六");

        fmt = new DateFmt({locale:"zh-Hans-HK", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "周日");
        test.equal(value[1], "周一");
        test.equal(value[2], "周二");
        test.equal(value[3], "周三");
        test.equal(value[4], "周四");
        test.equal(value[5], "周五");
        test.equal(value[6], "周六");

        fmt = new DateFmt({locale:"zh-Hans-HK", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "周日");
        test.equal(value[1], "周一");
        test.equal(value[2], "周二");
        test.equal(value[3], "周三");
        test.equal(value[4], "周四");
        test.equal(value[5], "周五");
        test.equal(value[6], "周六");

        fmt = new DateFmt({locale:"zh-Hans-HK", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "日");
        test.equal(value[1], "一");
        test.equal(value[2], "二");
        test.equal(value[3], "三");
        test.equal(value[4], "四");
        test.equal(value[5], "五");
        test.equal(value[6], "六");

        test.done();
    },
    testWeekdayTranslation_zh_Hant_TW: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"zh-Hant-TW", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "星期日");
        test.equal(value[1], "星期一");
        test.equal(value[2], "星期二");
        test.equal(value[3], "星期三");
        test.equal(value[4], "星期四");
        test.equal(value[5], "星期五");
        test.equal(value[6], "星期六");

        fmt = new DateFmt({locale:"zh-Hant-TW", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "週日");
        test.equal(value[1], "週一");
        test.equal(value[2], "週二");
        test.equal(value[3], "週三");
        test.equal(value[4], "週四");
        test.equal(value[5], "週五");
        test.equal(value[6], "週六");

        fmt = new DateFmt({locale:"zh-Hant-TW", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "日");
        test.equal(value[1], "一");
        test.equal(value[2], "二");
        test.equal(value[3], "三");
        test.equal(value[4], "四");
        test.equal(value[5], "五");
        test.equal(value[6], "六");

        fmt = new DateFmt({locale:"zh-Hant-TW", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "日");
        test.equal(value[1], "一");
        test.equal(value[2], "二");
        test.equal(value[3], "三");
        test.equal(value[4], "四");
        test.equal(value[5], "五");
        test.equal(value[6], "六");

        test.done();
    },
    testWeekdayTranslation_en_GE: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-GE", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-GE", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-GE", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-GE", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_CN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-CN", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-CN", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-CN", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-CN", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_MX: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-MX", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-MX", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-MX", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-MX", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_TW: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-TW", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-TW", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-TW", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-TW", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_mn_MN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"mn-MN", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Ням"); //standALone
        test.equal(value[1], "Даваа"); //standALone
        test.equal(value[2], "Мягмар"); //standALone
        test.equal(value[3], "Лхагва"); //standALone
        test.equal(value[4], "Пүрэв"); //standALone
        test.equal(value[5], "Баасан"); //standALone
        test.equal(value[6], "Бямба"); //standALone

        fmt = new DateFmt({locale:"mn-MN", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Ня");
        test.equal(value[1], "Да");
        test.equal(value[2], "Мя");
        test.equal(value[3], "Лх");
        test.equal(value[4], "Пү");
        test.equal(value[5], "Ба");
        test.equal(value[6], "Бя");

        fmt = new DateFmt({locale:"mn-MN", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Ня");
        test.equal(value[1], "Да");
        test.equal(value[2], "Мя");
        test.equal(value[3], "Лх");
        test.equal(value[4], "Пү");
        test.equal(value[5], "Ба");
        test.equal(value[6], "Бя");

        fmt = new DateFmt({locale:"mn-MN", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Ня");
        test.equal(value[1], "Да");
        test.equal(value[2], "Мя");
        test.equal(value[3], "Лх");
        test.equal(value[4], "Пү");
        test.equal(value[5], "Ба");
        test.equal(value[6], "Бя");

        test.done();
    },
    testWeekdayTranslation_es_CA: function(test) {
        test.expect(28);
        var fmt, value = [], i;

        // Same as es-ES

        fmt = new DateFmt({locale:"es-ES", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-ES", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-ES", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-ES", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "X");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_af_ZA: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"af-ZA", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sondag");
        test.equal(value[1], "Maandag");
        test.equal(value[2], "Dinsdag");
        test.equal(value[3], "Woensdag");
        test.equal(value[4], "Donderdag");
        test.equal(value[5], "Vrydag");
        test.equal(value[6], "Saterdag");

        fmt = new DateFmt({locale:"af-ZA", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "So.");
        test.equal(value[1], "Ma.");
        test.equal(value[2], "Di.");
        test.equal(value[3], "Wo.");
        test.equal(value[4], "Do.");
        test.equal(value[5], "Vr.");
        test.equal(value[6], "Sa.");

        fmt = new DateFmt({locale:"af-ZA", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "So.");
        test.equal(value[1], "Ma.");
        test.equal(value[2], "Di.");
        test.equal(value[3], "Wo.");
        test.equal(value[4], "Do.");
        test.equal(value[5], "Vr.");
        test.equal(value[6], "Sa.");

        fmt = new DateFmt({locale:"af-ZA", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "D");
        test.equal(value[3], "W");
        test.equal(value[4], "D");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_am_ET: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"am-ET", date:"w", length: "full", useNative:false, timezone: "Africa/Addis_Ababa"})
        for (i=0; i < 13; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+8, hour: 12, type:"ethiopic", timezone: "Africa/Addis_Ababa"}));
        }
        test.equal(value[0], "እሑድ");
        test.equal(value[1], "ሰኞ");
        test.equal(value[2], "ማክሰኞ");
        test.equal(value[3], "ረቡዕ");
        test.equal(value[4], "ሐሙስ");
        test.equal(value[5], "ዓርብ");
        test.equal(value[6], "ቅዳሜ");

        fmt = new DateFmt({locale:"am-ET", date:"w", length: "long", useNative:false, timezone: "Africa/Addis_Ababa"})
        for (i=0; i < 13; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+8, hour: 12, type:"ethiopic", timezone: "Africa/Addis_Ababa"}));
        }
        test.equal(value[0], "እሑድ");
        test.equal(value[1], "ሰኞ");
        test.equal(value[2], "ማክሰ");
        test.equal(value[3], "ረቡዕ");
        test.equal(value[4], "ሐሙስ");
        test.equal(value[5], "ዓርብ");
        test.equal(value[6], "ቅዳሜ");

        fmt = new DateFmt({locale:"am-ET", date:"w", length: "medium", useNative:false, timezone: "Africa/Addis_Ababa"})
        for (i=0; i < 13; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+8, hour: 12, type:"ethiopic", timezone: "Africa/Addis_Ababa"}));
        }
        test.equal(value[0], "እ");
        test.equal(value[1], "ሰ");
        test.equal(value[2], "ማ");
        test.equal(value[3], "ረ");
        test.equal(value[4], "ሐ");
        test.equal(value[5], "ዓ");
        test.equal(value[6], "ቅ");

        fmt = new DateFmt({locale:"am-ET", date:"w", length: "short", useNative:false, timezone: "Africa/Addis_Ababa"})
        for (i=0; i < 13; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+8, hour: 12, type:"ethiopic", timezone: "Africa/Addis_Ababa"}));
        }

        test.equal(value[0], "እ");
        test.equal(value[1], "ሰ");
        test.equal(value[2], "ማ");
        test.equal(value[3], "ረ");
        test.equal(value[4], "ሐ");
        test.equal(value[5], "ዓ");
        test.equal(value[6], "ቅ");

        test.done();
    },
    testWeekdayTranslation_ha_Latn_NG: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"ha-Latn-NG", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Lahadi");
        test.equal(value[1], "Litinin");
        test.equal(value[2], "Talata");
        test.equal(value[3], "Laraba");
        test.equal(value[4], "Alhamis");
        test.equal(value[5], "Jummaʼa");
        test.equal(value[6], "Asabar");

        fmt = new DateFmt({locale:"ha-Latn-NG", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Lah");
        test.equal(value[1], "Lit");
        test.equal(value[2], "Tal");
        test.equal(value[3], "Lar");
        test.equal(value[4], "Alh");
        test.equal(value[5], "Jum");
        test.equal(value[6], "Asa");

        fmt = new DateFmt({locale:"ha-Latn-NG", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Lh");
        test.equal(value[1], "Li");
        test.equal(value[2], "Ta");
        test.equal(value[3], "Lr");
        test.equal(value[4], "Al");
        test.equal(value[5], "Ju");
        test.equal(value[6], "As");

        fmt = new DateFmt({locale:"ha-Latn-NG", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "L");
        test.equal(value[1], "L");
        test.equal(value[2], "T");
        test.equal(value[3], "L");
        test.equal(value[4], "A");
        test.equal(value[5], "J");
        test.equal(value[6], "A");


        test.done();
    },
    testWeekdayTranslation_or_IN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow
        fmt = new DateFmt({locale:"or-IN", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ରବିବାର");
        test.equal(value[1], "ସୋମବାର");
        test.equal(value[2], "ମଙ୍ଗଳବାର");
        test.equal(value[3], "ବୁଧବାର");
        test.equal(value[4], "ଗୁରୁବାର");
        test.equal(value[5], "ଶୁକ୍ରବାର");
        test.equal(value[6], "ଶନିବାର");

        fmt = new DateFmt({locale:"or-IN", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ରବି");
        test.equal(value[1], "ସୋମ");
        test.equal(value[2], "ମଙ୍ଗଳ");
        test.equal(value[3], "ବୁଧ");
        test.equal(value[4], "ଗୁରୁ");
        test.equal(value[5], "ଶୁକ୍ର");
        test.equal(value[6], "ଶନି");

        fmt = new DateFmt({locale:"or-IN", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ରବି");
        test.equal(value[1], "ସୋମ");
        test.equal(value[2], "ମଙ୍ଗଳ");
        test.equal(value[3], "ବୁଧ");
        test.equal(value[4], "ଗୁରୁ");
        test.equal(value[5], "ଶୁକ୍ର");
        test.equal(value[6], "ଶନି");

        fmt = new DateFmt({locale:"or-IN", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ର");
        test.equal(value[1], "ସୋ");
        test.equal(value[2], "ମ");
        test.equal(value[3], "ବୁ");
        test.equal(value[4], "ଗୁ");
        test.equal(value[5], "ଶୁ");
        test.equal(value[6], "ଶ");

        test.done();
    },
    testWeekdayTranslation_az_Latn_AZ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"az-Latn-AZ", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "bazar");
        test.equal(value[1], "bazar ertəsi");
        test.equal(value[2], "çərşənbə axşamı");
        test.equal(value[3], "çərşənbə");
        test.equal(value[4], "cümə axşamı");
        test.equal(value[5], "cümə");
        test.equal(value[6], "şənbə");

        fmt = new DateFmt({locale:"az-Latn-AZ", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "B.");
        test.equal(value[1], "B.E.");
        test.equal(value[2], "Ç.A.");
        test.equal(value[3], "Ç.");
        test.equal(value[4], "C.A.");
        test.equal(value[5], "C.");
        test.equal(value[6], "Ş.");

        fmt = new DateFmt({locale:"az-Latn-AZ", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "B.");
        test.equal(value[1], "B.E.");
        test.equal(value[2], "Ç.A.");
        test.equal(value[3], "Ç.");
        test.equal(value[4], "C.A.");
        test.equal(value[5], "C.");
        test.equal(value[6], "Ş.");

        fmt = new DateFmt({locale:"az-Latn-AZ", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "7");
        test.equal(value[1], "1");
        test.equal(value[2], "2");
        test.equal(value[3], "3");
        test.equal(value[4], "4");
        test.equal(value[5], "5");
        test.equal(value[6], "6");

        test.done();
    },
    testWeekdayTranslation_km_KH: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"km-KH", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "អាទិត្យ");
        test.equal(value[1], "ចន្ទ");
        test.equal(value[2], "អង្គារ");
        test.equal(value[3], "ពុធ");
        test.equal(value[4], "ព្រហស្បតិ៍");
        test.equal(value[5], "សុក្រ");
        test.equal(value[6], "សៅរ៍");

        fmt = new DateFmt({locale:"km-KH", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "អាទិត្យ");
        test.equal(value[1], "ចន្ទ");
        test.equal(value[2], "អង្គារ");
        test.equal(value[3], "ពុធ");
        test.equal(value[4], "ព្រហ");
        test.equal(value[5], "សុក្រ");
        test.equal(value[6], "សៅរ៍");

        fmt = new DateFmt({locale:"km-KH", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "អា");
        test.equal(value[1], "ច");
        test.equal(value[2], "អ");
        test.equal(value[3], "ពុ");
        test.equal(value[4], "ព្រ");
        test.equal(value[5], "សុ");
        test.equal(value[6], "ស");

        fmt = new DateFmt({locale:"km-KH", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "អ");
        test.equal(value[1], "ច");
        test.equal(value[2], "អ");
        test.equal(value[3], "ព");
        test.equal(value[4], "ព");
        test.equal(value[5], "ស");
        test.equal(value[6], "ស");

        test.done();
    },
    testWeekdayTranslation_si_LK: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"si-LK", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ඉරිදා");
        test.equal(value[1], "සඳුදා");
        test.equal(value[2], "අඟහරුවාදා");
        test.equal(value[3], "බදාදා");
        test.equal(value[4], "බ්‍රහස්පතින්දා");
        test.equal(value[5], "සිකුරාදා");
        test.equal(value[6], "සෙනසුරාදා");

        fmt = new DateFmt({locale:"si-LK", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ඉරිදා");
        test.equal(value[1], "සඳුදා");
        test.equal(value[2], "අඟහ");
        test.equal(value[3], "බදාදා");
        test.equal(value[4], "බ්‍රහස්");
        test.equal(value[5], "සිකු");
        test.equal(value[6], "සෙන");

        fmt = new DateFmt({locale:"si-LK", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ඉරි");
        test.equal(value[1], "සඳු");
        test.equal(value[2], "අඟ");
        test.equal(value[3], "බදා");
        test.equal(value[4], "බ්‍රහ");
        test.equal(value[5], "සිකු");
        test.equal(value[6], "සෙන");

        fmt = new DateFmt({locale:"si-LK", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ඉ");
        test.equal(value[1], "ස");
        test.equal(value[2], "අ");
        test.equal(value[3], "බ");
        test.equal(value[4], "බ්‍ර");
        test.equal(value[5], "සි");
        test.equal(value[6], "සෙ");

        test.done();
    },
    testWeekdayTranslation_ar_AE: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow
        fmt = new DateFmt({locale:"ar-AE", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-AE", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-AE", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-AE", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_ar_BH: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"ar-BH", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-BH", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-BH", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-BH", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_ar_DJ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ar-DJ", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-DJ", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-DJ", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-DJ", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_ar_DZ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"ar-DZ", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-DZ", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-DJ", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-DJ", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_ar_JO: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"ar-JO", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-JO", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-JO", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-JO", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");
        test.done();
    },
    testWeekdayTranslation_ar_KW: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"ar-KW", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-KW", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-KW", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-KW", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_ar_LB: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"ar-LB", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-LB", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-LB", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-LB", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_ar_LY: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"ar-LY", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-LY", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-LY", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-LY", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_ar_MR: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow
        fmt = new DateFmt({locale:"ar-MR", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-MR", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-MR", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-MR", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_ar_OM: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow
        fmt = new DateFmt({locale:"ar-OM", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-OM", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-OM", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-OM", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_ar_QA: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"ar-QA", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-QA", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-QA", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-QA", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_ar_SA: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"ar-SA", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-SA", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-SA", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-SA", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_ar_SD: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"ar-SD", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-SD", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-SD", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-SD", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_ar_SY: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"ar-SY", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-SY", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-SY", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-SY", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_ar_TN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"ar-TN", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-TN", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-TN", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-TN", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_ar_YE: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"ar-YE", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-YE", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "الأحد");
        test.equal(value[1], "الاثنين");
        test.equal(value[2], "الثلاثاء");
        test.equal(value[3], "الأربعاء");
        test.equal(value[4], "الخميس");
        test.equal(value[5], "الجمعة");
        test.equal(value[6], "السبت");

        fmt = new DateFmt({locale:"ar-YE", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "أحد");
        test.equal(value[1], "إثنين");
        test.equal(value[2], "ثلاثاء");
        test.equal(value[3], "أربعاء");
        test.equal(value[4], "خميس");
        test.equal(value[5], "جمعة");
        test.equal(value[6], "سبت");

        fmt = new DateFmt({locale:"ar-YE", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "ح");
        test.equal(value[1], "ن");
        test.equal(value[2], "ث");
        test.equal(value[3], "ر");
        test.equal(value[4], "خ");
        test.equal(value[5], "ج");
        test.equal(value[6], "س");

        test.done();
    },
    testWeekdayTranslation_en_ET: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        //////////////  Note. No data in CLDR ?!?!?!?! /////////////
        fmt = new DateFmt({locale:"en-ET", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+8, hour: 12, type:"ethiopic"}));
        }
        test.equal(value[0], "Ihud");
        test.equal(value[1], "Sanyo");
        test.equal(value[2], "Maksanyo");
        test.equal(value[3], "Rob/Rabu'e");
        test.equal(value[4], "Hamus");
        test.equal(value[5], "Arb");
        test.equal(value[6], "Kidamme");

        fmt = new DateFmt({locale:"en-ET", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+8, hour: 12, type:"ethiopic"}));
        }
        test.equal(value[0], "Ihu");
        test.equal(value[1], "San");
        test.equal(value[2], "Mak");
        test.equal(value[3], "Rob");
        test.equal(value[4], "Ham");
        test.equal(value[5], "Arb");
        test.equal(value[6], "Kid");

        fmt = new DateFmt({locale:"en-ET", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+8, hour: 12, type:"ethiopic"}));
        }
        test.equal(value[0], "Ih");
        test.equal(value[1], "Sa");
        test.equal(value[2], "Ma");
        test.equal(value[3], "Ro");
        test.equal(value[4], "Ha");
        test.equal(value[5], "Ar");
        test.equal(value[6], "Ki");

        fmt = new DateFmt({locale:"en-ET", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+8, hour: 12, type:"ethiopic"}));
        }
        test.equal(value[0], "I");
        test.equal(value[1], "S");
        test.equal(value[2], "M");
        test.equal(value[3], "R");
        test.equal(value[4], "H");
        test.equal(value[5], "A");
        test.equal(value[6], "K");

        test.done();
    },
    testWeekdayTranslation_en_GM: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-GM", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-GM", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-GM", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-GM", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");
        test.done();
    },
    testWeekdayTranslation_en_LR: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-LR", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-LR", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-LR", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-LR", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");
        test.done();
    },
    testWeekdayTranslation_en_PK: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-PK", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-PK", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-PK", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-PK", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_RW: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-RW", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-RW", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-RW", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-RW", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_SD: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-SD", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-SD", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-SD", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-SD", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_SL: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-SL", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-SL", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-SL", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-SL", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_en_TZ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"en-TZ", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sunday");
        test.equal(value[1], "Monday");
        test.equal(value[2], "Tuesday");
        test.equal(value[3], "Wednesday");
        test.equal(value[4], "Thursday");
        test.equal(value[5], "Friday");
        test.equal(value[6], "Saturday");

        fmt = new DateFmt({locale:"en-TZ", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Sun");
        test.equal(value[1], "Mon");
        test.equal(value[2], "Tue");
        test.equal(value[3], "Wed");
        test.equal(value[4], "Thu");
        test.equal(value[5], "Fri");
        test.equal(value[6], "Sat");

        fmt = new DateFmt({locale:"en-TZ", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "Su");
        test.equal(value[1], "Mo");
        test.equal(value[2], "Tu");
        test.equal(value[3], "We");
        test.equal(value[4], "Th");
        test.equal(value[5], "Fr");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"en-TZ", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_CR: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"es-CR", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-CR", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-CR", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-CR", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_GQ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"es-GQ", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-GQ", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-GQ", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-GQ", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "X");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_es_PH: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"es-PH", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "lunes");
        test.equal(value[2], "martes");
        test.equal(value[3], "miércoles");
        test.equal(value[4], "jueves");
        test.equal(value[5], "viernes");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"es-PH", date:"w", length: "long", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "dom");
        test.equal(value[1], "lun");
        test.equal(value[2], "mar");
        test.equal(value[3], "mié");
        test.equal(value[4], "jue");
        test.equal(value[5], "vie");
        test.equal(value[6], "sáb");

        fmt = new DateFmt({locale:"es-PH", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "DO");
        test.equal(value[1], "LU");
        test.equal(value[2], "MA");
        test.equal(value[3], "MI");
        test.equal(value[4], "JU");
        test.equal(value[5], "VI");
        test.equal(value[6], "SA");

        fmt = new DateFmt({locale:"es-PH", date:"w", length: "short", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }

        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "X");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_BF: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"fr-BF", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-BF", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-BF", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-BF", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_BJ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"fr-BJ", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-BJ", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-BJ", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-BJ", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

         test.done();
    },
    testWeekdayTranslation_fr_CD: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"fr-CD", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-CD", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-CD", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-CD", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_CF: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"fr-CF", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-CF", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-CF", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-CF", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_CG: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"fr-CG", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-CG", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-CG", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-CG", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_CI: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"fr-CI", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-CI", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-CI", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-CI", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_CM: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"fr-CM", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-CM", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-CM", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-CM", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_GQ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"fr-GQ", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-GQ", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-GQ", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-GQ", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_DJ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"fr-DJ", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-DJ", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-DJ", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-DJ", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_DZ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"fr-DZ", date:"w", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-DZ", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-DZ", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-DZ", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_GA: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"fr-GA", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-GA", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-GA", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-GA", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_GN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"fr-GN", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-GN", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-GN", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-GN", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_LB: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"fr-LB", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-LB", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-LB", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-LB", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_ML: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"fr-ML", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-ML", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-ML", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-ML", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_RW: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"fr-RW", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-RW", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-RW", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-RW", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_SN: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"fr-SN", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-SN", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-SN", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-SN", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_fr_TG: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"fr-TG", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dimanche");
        test.equal(value[1], "lundi");
        test.equal(value[2], "mardi");
        test.equal(value[3], "mercredi");
        test.equal(value[4], "jeudi");
        test.equal(value[5], "vendredi");
        test.equal(value[6], "samedi");

        fmt = new DateFmt({locale:"fr-TG", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dim.");
        test.equal(value[1], "lun.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mer.");
        test.equal(value[4], "jeu.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sam.");

        fmt = new DateFmt({locale:"fr-TG", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "di");
        test.equal(value[1], "lu");
        test.equal(value[2], "ma");
        test.equal(value[3], "me");
        test.equal(value[4], "je");
        test.equal(value[5], "ve");
        test.equal(value[6], "sa");

        fmt = new DateFmt({locale:"fr-TG", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "J");
        test.equal(value[5], "V");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_ms_Latn_SG: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"ms-Latn-SG", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Ahad");
        test.equal(value[1], "Isnin");
        test.equal(value[2], "Selasa");
        test.equal(value[3], "Rabu");
        test.equal(value[4], "Khamis");
        test.equal(value[5], "Jumaat");
        test.equal(value[6], "Sabtu");

        fmt = new DateFmt({locale:"ms-Latn-SG", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Ahd");
        test.equal(value[1], "Isn");
        test.equal(value[2], "Sel");
        test.equal(value[3], "Rab");
        test.equal(value[4], "Kha");
        test.equal(value[5], "Jum");
        test.equal(value[6], "Sab");

        fmt = new DateFmt({locale:"ms-Latn-SG", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Ah");
        test.equal(value[1], "Is");
        test.equal(value[2], "Se");
        test.equal(value[3], "Ra");
        test.equal(value[4], "Kh");
        test.equal(value[5], "Ju");
        test.equal(value[6], "Sa");

        fmt = new DateFmt({locale:"ms-Latn-SG", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "A");
        test.equal(value[1], "I");
        test.equal(value[2], "S");
        test.equal(value[3], "R");
        test.equal(value[4], "K");
        test.equal(value[5], "J");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_pa_PK: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"pa-PK", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ਐਤਵਾਰ");
        test.equal(value[1], "ਸੋਮਵਾਰ");
        test.equal(value[2], "ਮੰਗਲਵਾਰ");
        test.equal(value[3], "ਬੁੱਧਵਾਰ");
        test.equal(value[4], "ਵੀਰਵਾਰ");
        test.equal(value[5], "ਸ਼ੁੱਕਰਵਾਰ");
        test.equal(value[6], "ਸ਼ਨਿੱਚਰਵਾਰ");

        fmt = new DateFmt({locale:"pa-PK", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ਐਤ");
        test.equal(value[1], "ਸੋਮ");
        test.equal(value[2], "ਮੰਗਲ");
        test.equal(value[3], "ਬੁੱਧ");
        test.equal(value[4], "ਵੀਰ");
        test.equal(value[5], "ਸ਼ੁੱਕਰ");
        test.equal(value[6], "ਸ਼ਨਿੱਚਰ");

        fmt = new DateFmt({locale:"pa-PK", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ਐਤ");
        test.equal(value[1], "ਸੋਮ");
        test.equal(value[2], "ਮੰਗ");
        test.equal(value[3], "ਬੁੱਧ");
        test.equal(value[4], "ਵੀਰ");
        test.equal(value[5], "ਸ਼ੁੱਕ");
        test.equal(value[6], "ਸ਼ਨਿੱ");

        fmt = new DateFmt({locale:"pa-PK", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ਐ");
        test.equal(value[1], "ਸੋ");
        test.equal(value[2], "ਮੰ");
        test.equal(value[3], "ਬੁੱ");
        test.equal(value[4], "ਵੀ");
        test.equal(value[5], "ਸ਼ੁੱ");
        test.equal(value[6], "ਸ਼");

        test.done();
    },
    testWeekdayTranslation_pt_AO: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow
        fmt = new DateFmt({locale:"pt-AO", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "segunda-feira");
        test.equal(value[2], "terça-feira");
        test.equal(value[3], "quarta-feira");
        test.equal(value[4], "quinta-feira");
        test.equal(value[5], "sexta-feira");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"pt-AO", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "segunda");
        test.equal(value[2], "terça");
        test.equal(value[3], "quarta");
        test.equal(value[4], "quinta");
        test.equal(value[5], "sexta");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"pt-AO", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], 'dom.');
        test.equal(value[1], 'seg.');
        test.equal(value[2], 'ter.');
        test.equal(value[3], 'qua.');
        test.equal(value[4], 'qui.');
        test.equal(value[5], 'sex.');
        test.equal(value[6], 'sáb.');

        fmt = new DateFmt({locale:"pt-AO", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "S");
        test.equal(value[2], "T");
        test.equal(value[3], "Q");
        test.equal(value[4], "Q");
        test.equal(value[5], "S");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_pt_GQ: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"pt-GQ", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "segunda-feira");
        test.equal(value[2], "terça-feira");
        test.equal(value[3], "quarta-feira");
        test.equal(value[4], "quinta-feira");
        test.equal(value[5], "sexta-feira");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"pt-GQ", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "segunda");
        test.equal(value[2], "terça");
        test.equal(value[3], "quarta");
        test.equal(value[4], "quinta");
        test.equal(value[5], "sexta");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"pt-GQ", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], 'dom.');
        test.equal(value[1], 'seg.');
        test.equal(value[2], 'ter.');
        test.equal(value[3], 'qua.');
        test.equal(value[4], 'qui.');
        test.equal(value[5], 'sex.');
        test.equal(value[6], 'sáb.');

        fmt = new DateFmt({locale:"pt-GQ", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "S");
        test.equal(value[2], "T");
        test.equal(value[3], "Q");
        test.equal(value[4], "Q");
        test.equal(value[5], "S");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_pt_CV: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium -> short
        // short: narrow

        fmt = new DateFmt({locale:"pt-CV", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "segunda-feira");
        test.equal(value[2], "terça-feira");
        test.equal(value[3], "quarta-feira");
        test.equal(value[4], "quinta-feira");
        test.equal(value[5], "sexta-feira");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"pt-CV", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "segunda");
        test.equal(value[2], "terça");
        test.equal(value[3], "quarta");
        test.equal(value[4], "quinta");
        test.equal(value[5], "sexta");
        test.equal(value[6], "sábado");

        fmt = new DateFmt({locale:"pt-CV", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], 'dom.');
        test.equal(value[1], 'seg.');
        test.equal(value[2], 'ter.');
        test.equal(value[3], 'qua.');
        test.equal(value[4], 'qui.');
        test.equal(value[5], 'sex.');
        test.equal(value[6], 'sáb.');

        fmt = new DateFmt({locale:"pt-CV", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "S");
        test.equal(value[2], "T");
        test.equal(value[3], "Q");
        test.equal(value[4], "Q");
        test.equal(value[5], "S");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslation_ur_PK: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        // full -> wide, long -> abbreviate
        // medium: short
        // short: narrow

        fmt = new DateFmt({locale:"ur-PK", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "اتوار");
        test.equal(value[1], "پیر");
        test.equal(value[2], "منگل");
        test.equal(value[3], "بدھ");
        test.equal(value[4], "جمعرات");
        test.equal(value[5], "جمعہ");
        test.equal(value[6], "ہفتہ");

        fmt = new DateFmt({locale:"ur-PK", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "اتوار");
        test.equal(value[1], "پیر");
        test.equal(value[2], "منگل");
        test.equal(value[3], "بدھ");
        test.equal(value[4], "جمعرات");
        test.equal(value[5], "جمعہ");
        test.equal(value[6], "ہفتہ");

        fmt = new DateFmt({locale:"ur-PK", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "اتوار");
        test.equal(value[1], "پیر");
        test.equal(value[2], "منگل");
        test.equal(value[3], "بدھ");
        test.equal(value[4], "جمعرات");
        test.equal(value[5], "جمعہ");
        test.equal(value[6], "ہفتہ");

        fmt = new DateFmt({locale:"ur-PK", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "S");
        test.equal(value[1], 'M');
        test.equal(value[2], 'T');
        test.equal(value[3], 'W');
        test.equal(value[4], 'T');
        test.equal(value[5], 'F');
        test.equal(value[6], 'S');

        test.done();
    },
    testWeekdayTranslation_zh_Hans_SG: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"zh-Hans-SG", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "星期日");
        test.equal(value[1], "星期一");
        test.equal(value[2], "星期二");
        test.equal(value[3], "星期三");
        test.equal(value[4], "星期四");
        test.equal(value[5], "星期五");
        test.equal(value[6], "星期六");

        fmt = new DateFmt({locale:"zh-Hans-SG", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "周日");
        test.equal(value[1], "周一");
        test.equal(value[2], "周二");
        test.equal(value[3], "周三");
        test.equal(value[4], "周四");
        test.equal(value[5], "周五");
        test.equal(value[6], "周六");

        fmt = new DateFmt({locale:"zh-Hans-SG", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "周日");
        test.equal(value[1], "周一");
        test.equal(value[2], "周二");
        test.equal(value[3], "周三");
        test.equal(value[4], "周四");
        test.equal(value[5], "周五");
        test.equal(value[6], "周六");

        fmt = new DateFmt({locale:"zh-Hans-SG", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "日");
        test.equal(value[1], "一");
        test.equal(value[2], "二");
        test.equal(value[3], "三");
        test.equal(value[4], "四");
        test.equal(value[5], "五");
        test.equal(value[6], "六");

        test.done();
    },
    testWeekdayTranslation_zh_Hans_MY: function(test) {
        test.expect(28);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"zh-Hans-MY", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "星期日");
        test.equal(value[1], "星期一");
        test.equal(value[2], "星期二");
        test.equal(value[3], "星期三");
        test.equal(value[4], "星期四");
        test.equal(value[5], "星期五");
        test.equal(value[6], "星期六");

        fmt = new DateFmt({locale:"zh-Hans-MY", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "周日");
        test.equal(value[1], "周一");
        test.equal(value[2], "周二");
        test.equal(value[3], "周三");
        test.equal(value[4], "周四");
        test.equal(value[5], "周五");
        test.equal(value[6], "周六");

        fmt = new DateFmt({locale:"zh-Hans-MY", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "周日");
        test.equal(value[1], "周一");
        test.equal(value[2], "周二");
        test.equal(value[3], "周三");
        test.equal(value[4], "周四");
        test.equal(value[5], "周五");
        test.equal(value[6], "周六");

        fmt = new DateFmt({locale:"zh-Hans-MY", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "日");
        test.equal(value[1], "一");
        test.equal(value[2], "二");
        test.equal(value[3], "三");
        test.equal(value[4], "四");
        test.equal(value[5], "五");
        test.equal(value[6], "六");

        test.done();
    },
    testWeekdayTranslationFull_ka_GE: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ka-GE", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "კვირა");
        test.equal(value[1], "ორშაბათი");
        test.equal(value[2], "სამშაბათი");
        test.equal(value[3], "ოთხშაბათი");
        test.equal(value[4], "ხუთშაბათი");
        test.equal(value[5], "პარასკევი");
        test.equal(value[6], "შაბათი");
        test.done();
    },
    testWeekdayTranslationLong_ka_GE: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ka-GE", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "კვი");
        test.equal(value[1], "ორშ");
        test.equal(value[2], "სამ");
        test.equal(value[3], "ოთხ");
        test.equal(value[4], "ხუთ");
        test.equal(value[5], "პარ");
        test.equal(value[6], "შაბ");

        test.done();
    },
    testWeekdayTranslationMedium_ka_GE: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ka-GE", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "კვ");
        test.equal(value[1], "ორ");
        test.equal(value[2], "სმ");
        test.equal(value[3], "ოთ");
        test.equal(value[4], "ხთ");
        test.equal(value[5], "პრ");
        test.equal(value[6], "შბ");

        test.done();
    },
    testWeekdayTranslationShort_ka_GE: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ka-GE", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "კ");
        test.equal(value[1], "ო");
        test.equal(value[2], "ს");
        test.equal(value[3], "ო");
        test.equal(value[4], "ხ");
        test.equal(value[5], "პ");
        test.equal(value[6], "შ");

        test.done();
    },
    testWeekdayTranslationFull_be_BY: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"be-BY", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "нядзеля");
        test.equal(value[1], "панядзелак");
        test.equal(value[2], "аўторак");
        test.equal(value[3], "серада");
        test.equal(value[4], "чацвер");
        test.equal(value[5], "пятніца");
        test.equal(value[6], "субота");
        test.done();
    },
    testWeekdayTranslationLong_be_BY: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"be-BY", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "нд");
        test.equal(value[1], "пн");
        test.equal(value[2], "аў");
        test.equal(value[3], "ср");
        test.equal(value[4], "чц");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");

        test.done();
    },
    testWeekdayTranslationMedium_be_BY: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"be-BY", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "нд");
        test.equal(value[1], "пн");
        test.equal(value[2], "аў");
        test.equal(value[3], "ср");
        test.equal(value[4], "чц");
        test.equal(value[5], "пт");
        test.equal(value[6], "сб");

        test.done();
    },
    testWeekdayTranslationShort_be_BY: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"be-BY", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "н");
        test.equal(value[1], "п");
        test.equal(value[2], "а");
        test.equal(value[3], "с");
        test.equal(value[4], "ч");
        test.equal(value[5], "п");
        test.equal(value[6], "с");
        test.done();
    },
    testWeekdayTranslationFull_lo_LA: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"lo-LA", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ວັນອາທິດ");
        test.equal(value[1], "ວັນຈັນ");
        test.equal(value[2], "ວັນອັງຄານ");
        test.equal(value[3], "ວັນພຸດ");
        test.equal(value[4], "ວັນພະຫັດ");
        test.equal(value[5], "ວັນສຸກ");
        test.equal(value[6], "ວັນເສົາ");
        test.done();
    },
    testWeekdayTranslationLong_lo_LA: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"lo-LA", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ອາທິດ");
        test.equal(value[1], "ຈັນ");
        test.equal(value[2], "ອັງຄານ");
        test.equal(value[3], "ພຸດ");
        test.equal(value[4], "ພະຫັດ");
        test.equal(value[5], "ສຸກ");
        test.equal(value[6], "ເສົາ");

        test.done();
    },
    testWeekdayTranslationMedium_lo_LA: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"lo-LA", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ອາ.");
        test.equal(value[1], "ຈ.");
        test.equal(value[2], "ອ.");
        test.equal(value[3], "ພ.");
        test.equal(value[4], "ພຫ.");
        test.equal(value[5], "ສຸ.");
        test.equal(value[6], "ສ.");

        test.done();
    },
    testWeekdayTranslationShort_lo_LA: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"lo-LA", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ອາ");
        test.equal(value[1], "ຈ");
        test.equal(value[2], "ອ");
        test.equal(value[3], "ພ");
        test.equal(value[4], "ພຫ");
        test.equal(value[5], "ສຸ");
        test.equal(value[6], "ສ");

        test.done();
    },
    testWeekdayTranslationFull_ky_KG: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ky-KG", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "жекшемби");
        test.equal(value[1], "дүйшөмбү");
        test.equal(value[2], "шейшемби");
        test.equal(value[3], "шаршемби");
        test.equal(value[4], "бейшемби");
        test.equal(value[5], "жума");
        test.equal(value[6], "ишемби");
        test.done();
    },
    testWeekdayTranslationLong_ky_KG: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ky-KG", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "жек.");
        test.equal(value[1], "дүй.");
        test.equal(value[2], "шейш.");
        test.equal(value[3], "шарш.");
        test.equal(value[4], "бейш.");
        test.equal(value[5], "жума");
        test.equal(value[6], "ишм.");

        test.done();
    },
    testWeekdayTranslationMedium_ky_KG: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ky-KG", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "жш.");
        test.equal(value[1], "дш.");
        test.equal(value[2], "шш.");
        test.equal(value[3], "шр.");
        test.equal(value[4], "бш.");
        test.equal(value[5], "жм.");
        test.equal(value[6], "иш.");

        test.done();
    },
    testWeekdayTranslationShort_ky_KG: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ky-KG", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Ж");
        test.equal(value[1], "Д");
        test.equal(value[2], "Ш");
        test.equal(value[3], "Ш");
        test.equal(value[4], "Б");
        test.equal(value[5], "Ж");
        test.equal(value[6], "И");

        test.done();
    },
    testWeekdayTranslationFull_ca_AD: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ca-AD", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "diumenge");
        test.equal(value[1], "dilluns");
        test.equal(value[2], "dimarts");
        test.equal(value[3], "dimecres");
        test.equal(value[4], "dijous");
        test.equal(value[5], "divendres");
        test.equal(value[6], "dissabte");
        test.done();
    },
    testWeekdayTranslationLong_ca_AD: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ca-AD", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dg.");
        test.equal(value[1], "dl.");
        test.equal(value[2], "dt.");
        test.equal(value[3], "dc.");
        test.equal(value[4], "dj.");
        test.equal(value[5], "dv.");
        test.equal(value[6], "ds.");

        test.done();
    },
    testWeekdayTranslationMedium_ca_AD: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ca-AD", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dg.");
        test.equal(value[1], "dl.");
        test.equal(value[2], "dt.");
        test.equal(value[3], "dc.");
        test.equal(value[4], "dj.");
        test.equal(value[5], "dv.");
        test.equal(value[6], "ds.");

        test.done();
    },
    testWeekdayTranslationShort_ca_AD: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ca-AD", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dg.");
        test.equal(value[1], "dl.");
        test.equal(value[2], "dt.");
        test.equal(value[3], "dc.");
        test.equal(value[4], "dj.");
        test.equal(value[5], "dv.");
        test.equal(value[6], "ds.");

        test.done();
    },
    testWeekdayTranslationFull_ca_ES: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ca-ES", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "diumenge");
        test.equal(value[1], "dilluns");
        test.equal(value[2], "dimarts");
        test.equal(value[3], "dimecres");
        test.equal(value[4], "dijous");
        test.equal(value[5], "divendres");
        test.equal(value[6], "dissabte");
        test.done();
    },
    testWeekdayTranslationLong_ca_ES: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ca-ES", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dg.");
        test.equal(value[1], "dl.");
        test.equal(value[2], "dt.");
        test.equal(value[3], "dc.");
        test.equal(value[4], "dj.");
        test.equal(value[5], "dv.");
        test.equal(value[6], "ds.");

        test.done();
    },
    testWeekdayTranslationMedium_ca_ES: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ca-ES", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dg.");
        test.equal(value[1], "dl.");
        test.equal(value[2], "dt.");
        test.equal(value[3], "dc.");
        test.equal(value[4], "dj.");
        test.equal(value[5], "dv.");
        test.equal(value[6], "ds.");

        test.done();
    },
    testWeekdayTranslationShort_ca_ES: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ca-ES", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dg.");
        test.equal(value[1], "dl.");
        test.equal(value[2], "dt.");
        test.equal(value[3], "dc.");
        test.equal(value[4], "dj.");
        test.equal(value[5], "dv.");
        test.equal(value[6], "ds.");
        test.done();
    },
    testWeekdayTranslationFull_hy_AM: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"hy-AM", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "կիրակի");
        test.equal(value[1], "երկուշաբթի");
        test.equal(value[2], "երեքշաբթի");
        test.equal(value[3], "չորեքշաբթի");
        test.equal(value[4], "հինգշաբթի");
        test.equal(value[5], "ուրբաթ");
        test.equal(value[6], "շաբաթ");
        test.done();
    },
    testWeekdayTranslationLong_hy_AM: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"hy-AM", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "կիր");
        test.equal(value[1], "երկ");
        test.equal(value[2], "երք");
        test.equal(value[3], "չրք");
        test.equal(value[4], "հնգ");
        test.equal(value[5], "ուր");
        test.equal(value[6], "շբթ");

        test.done();
    },
    testWeekdayTranslationMedium_hy_AM: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"hy-AM", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "կր");
        test.equal(value[1], "եկ");
        test.equal(value[2], "եք");
        test.equal(value[3], "չք");
        test.equal(value[4], "հգ");
        test.equal(value[5], "ու");
        test.equal(value[6], "շբ");

        test.done();
    },
    testWeekdayTranslationShort_hy_AM: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"hy-AM", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Կ");
        test.equal(value[1], "Ե");
        test.equal(value[2], "Ե");
        test.equal(value[3], "Չ");
        test.equal(value[4], "Հ");
        test.equal(value[5], "Ո");
        test.equal(value[6], "Շ");
        test.done();
    },
    testWeekdayTranslationFull_gl_ES: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"gl-ES", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "domingo");
        test.equal(value[1], "luns");
        test.equal(value[2], "martes");
        test.equal(value[3], "mércores");
        test.equal(value[4], "xoves");
        test.equal(value[5], "venres");
        test.equal(value[6], "sábado");
        test.done();
    },
    testWeekdayTranslationLong_gl_ES: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"gl-ES", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "dom.");
        test.equal(value[1], "luns");
        test.equal(value[2], "mar.");
        test.equal(value[3], "mér.");
        test.equal(value[4], "xov.");
        test.equal(value[5], "ven.");
        test.equal(value[6], "sáb.");

        test.done();
    },
    testWeekdayTranslationMedium_gl_ES: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"gl-ES", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "do.");
        test.equal(value[1], "lu.");
        test.equal(value[2], "ma.");
        test.equal(value[3], "mé.");
        test.equal(value[4], "xo.");
        test.equal(value[5], "ve.");
        test.equal(value[6], "sá.");

        test.done();
    },
    testWeekdayTranslationShort_gl_ES: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"gl-ES", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "D");
        test.equal(value[1], "L");
        test.equal(value[2], "M");
        test.equal(value[3], "M");
        test.equal(value[4], "X");
        test.equal(value[5], "V");
        test.equal(value[6], "S");
        test.done();
    },
    testWeekdayTranslationFull_eu_ES: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"eu-ES", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "igandea");
        test.equal(value[1], "astelehena");
        test.equal(value[2], "asteartea");
        test.equal(value[3], "asteazkena");
        test.equal(value[4], "osteguna");
        test.equal(value[5], "ostirala");
        test.equal(value[6], "larunbata");
        test.done();
    },
    testWeekdayTranslationLong_eu_ES: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"eu-ES", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ig.");
        test.equal(value[1], "al.");
        test.equal(value[2], "ar.");
        test.equal(value[3], "az.");
        test.equal(value[4], "og.");
        test.equal(value[5], "or.");
        test.equal(value[6], "lr.");

        test.done();
    },
    testWeekdayTranslationMedium_eu_ES: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"eu-ES", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ig.");
        test.equal(value[1], "al.");
        test.equal(value[2], "ar.");
        test.equal(value[3], "az.");
        test.equal(value[4], "og.");
        test.equal(value[5], "or.");
        test.equal(value[6], "lr.");

        test.done();
    },
    testWeekdayTranslationShort_eu_ES: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"eu-ES", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "I");
        test.equal(value[1], "A");
        test.equal(value[2], "A");
        test.equal(value[3], "A");
        test.equal(value[4], "O");
        test.equal(value[5], "O");
        test.equal(value[6], "L");
        test.done();
    },
    testWeekdayTranslationFull_ne_NP: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ne-NP", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "आइतबार");
        test.equal(value[1], "सोमबार");
        test.equal(value[2], "मङ्गलबार");
        test.equal(value[3], "बुधबार");
        test.equal(value[4], "बिहिबार");
        test.equal(value[5], "शुक्रबार");
        test.equal(value[6], "शनिबार");
        test.done();
    },
    testWeekdayTranslationLong_ne_NP: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ne-NP", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "आइत");
        test.equal(value[1], "सोम");
        test.equal(value[2], "मङ्गल");
        test.equal(value[3], "बुध");
        test.equal(value[4], "बिहि");
        test.equal(value[5], "शुक्र");
        test.equal(value[6], "शनि");

        test.done();
    },
    testWeekdayTranslationMedium_ne_NP: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ne-NP", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "आइत");
        test.equal(value[1], "सोम");
        test.equal(value[2], "मङ्गल");
        test.equal(value[3], "बुध");
        test.equal(value[4], "बिहि");
        test.equal(value[5], "शुक्र");
        test.equal(value[6], "शनि");

        test.done();
    },
    testWeekdayTranslationShort_ne_NP: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ne-NP", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "आ");
        test.equal(value[1], "सो");
        test.equal(value[2], "म");
        test.equal(value[3], "बु");
        test.equal(value[4], "बि");
        test.equal(value[5], "शु");
        test.equal(value[6], "श");

        test.done();
    },
    testWeekdayTranslationFull_my_MM: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"my-MM", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "တနင်္ဂနွေ");
        test.equal(value[1], "တနင်္လာ");
        test.equal(value[2], "အင်္ဂါ");
        test.equal(value[3], "ဗုဒ္ဓဟူး");
        test.equal(value[4], "ကြာသပတေး");
        test.equal(value[5], "သောကြာ");
        test.equal(value[6], "စနေ");
        test.done();
    },
    testWeekdayTranslationLong_my_MM: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"my-MM", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "တနင်္ဂနွေ");
        test.equal(value[1], "တနင်္လာ");
        test.equal(value[2], "အင်္ဂါ");
        test.equal(value[3], "ဗုဒ္ဓဟူး");
        test.equal(value[4], "ကြာသပတေး");
        test.equal(value[5], "သောကြာ");
        test.equal(value[6], "စနေ");

        test.done();
    },
    testWeekdayTranslationMedium_my_MM: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"my-MM", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], 'နွေ');
        test.equal(value[1], 'လာ');
        test.equal(value[2], 'ဂါ');
        test.equal(value[3], 'ဟူး');
        test.equal(value[4], 'တေး');
        test.equal(value[5], 'ကြာ');
        test.equal(value[6], 'နေ');

        test.done();
    },
    testWeekdayTranslationShort_my_MM: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"my-MM", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "တ");
        test.equal(value[1], "တ");
        test.equal(value[2], "အ");
        test.equal(value[3], "ဗ");
        test.equal(value[4], "က");
        test.equal(value[5], "သ");
        test.equal(value[6], "စ");

        test.done();
    },
    testWeekdayTranslationFull_wo_SN: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"wo-SN", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Dibéer");
        test.equal(value[1], "Altine");
        test.equal(value[2], "Talaata");
        test.equal(value[3], "Àlarba");
        test.equal(value[4], "Alxamis");
        test.equal(value[5], "Àjjuma");
        test.equal(value[6], "Aseer");
        test.done();
    },
    testWeekdayTranslationLong_wo_SN: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"wo-SN", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Dib");
        test.equal(value[1], "Alt");
        test.equal(value[2], "Tal");
        test.equal(value[3], "Àla");
        test.equal(value[4], "Alx");
        test.equal(value[5], "Àjj");
        test.equal(value[6], "Ase");

        test.done();
    },
    testWeekdayTranslationMedium_wo_SN: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"wo-SN", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Dib");
        test.equal(value[1], "Alt");
        test.equal(value[2], "Tal");
        test.equal(value[3], "Àla");
        test.equal(value[4], "Alx");
        test.equal(value[5], "Àjj");
        test.equal(value[6], "Ase");

        test.done();
    },
    testWeekdayTranslationShort_wo_SN: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"wo-SN", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Dib");
        test.equal(value[1], "Alt");
        test.equal(value[2], "Tal");
        test.equal(value[3], "Àla");
        test.equal(value[4], "Alx");
        test.equal(value[5], "Àjj");
        test.equal(value[6], "Ase");
        test.done();
    },
    testWeekdayTranslationFull_tk_TM: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"tk-TM", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], 'Ýekşenbe');
        test.equal(value[1], 'Duşenbe');
        test.equal(value[2], 'Sişenbe');
        test.equal(value[3], 'Çarşenbe');
        test.equal(value[4], 'Penşenbe');
        test.equal(value[5], 'Anna');
        test.equal(value[6], 'Şenbe');
        test.done();
    },
    testWeekdayTranslationLong_tk_TM: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"tk-TM", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], 'Ýek');
        test.equal(value[1], 'Duş');
        test.equal(value[2], 'Siş');
        test.equal(value[3], 'Çar');
        test.equal(value[4], 'Pen');
        test.equal(value[5], 'Ann');
        test.equal(value[6], 'Şen');

        test.done();
    },
    testWeekdayTranslationMedium_tk_TM: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"tk-TM", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], 'Ýb');
        test.equal(value[1], 'Db');
        test.equal(value[2], 'Sb');
        test.equal(value[3], 'Çb');
        test.equal(value[4], 'Pb');
        test.equal(value[5], 'An');
        test.equal(value[6], 'Şb');

        test.done();
    },
    testWeekdayTranslationShort_tk_TM: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"tk-TM", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], 'Ý');
        test.equal(value[1], 'D');
        test.equal(value[2], 'S');
        test.equal(value[3], 'Ç');
        test.equal(value[4], 'P');
        test.equal(value[5], 'A');
        test.equal(value[6], 'Ş');
        test.done();
    },
    testWeekdayTranslationFull_tg_TJ: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"tg-TJ", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], 'Якшанбе');
        test.equal(value[1], 'Душанбе');
        test.equal(value[2], 'Сешанбе');
        test.equal(value[3], 'Чоршанбе');
        test.equal(value[4], 'Панҷшанбе');
        test.equal(value[5], 'Ҷумъа');
        test.equal(value[6], 'Шанбе');
        test.done();
    },
    testWeekdayTranslationLong_tg_TJ: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"tg-TJ", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], 'Яшб');
        test.equal(value[1], 'Дшб');
        test.equal(value[2], 'Сшб');
        test.equal(value[3], 'Чшб');
        test.equal(value[4], 'Пшб');
        test.equal(value[5], 'Ҷмъ');
        test.equal(value[6], 'Шнб');

        test.done();
    },
    testWeekdayTranslationMedium_tg_TJ: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"tg-TJ", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], 'Яшб');
        test.equal(value[1], 'Дшб');
        test.equal(value[2], 'Сшб');
        test.equal(value[3], 'Чшб');
        test.equal(value[4], 'Пшб');
        test.equal(value[5], 'Ҷмъ');
        test.equal(value[6], 'Шнб');

        test.done();
    },
    testWeekdayTranslationShort_tg_TJ: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"tg-TJ", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], 'Я');
        test.equal(value[1], 'Д');
        test.equal(value[2], 'С');
        test.equal(value[3], 'Ч');
        test.equal(value[4], 'П');
        test.equal(value[5], 'Ҷ');
        test.equal(value[6], 'Ш');
      test.done();
    },
    testWeekdayTranslationFull_mt_MT: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"mt-MT", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Il-Ħadd");
        test.equal(value[1], "It-Tnejn");
        test.equal(value[2], "It-Tlieta");
        test.equal(value[3], "L-Erbgħa");
        test.equal(value[4], "Il-Ħamis");
        test.equal(value[5], "Il-Ġimgħa");
        test.equal(value[6], "Is-Sibt");
        test.done();
    },
    testWeekdayTranslationLong_mt_MT: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"mt-MT", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Ħad");
        test.equal(value[1], "Tne");
        test.equal(value[2], "Tli");
        test.equal(value[3], "Erb");
        test.equal(value[4], "Ħam");
        test.equal(value[5], "Ġim");
        test.equal(value[6], "Sib");

        test.done();
    },
    testWeekdayTranslationMedium_mt_MT: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"mt-MT", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Ħad");
        test.equal(value[1], "Tne");
        test.equal(value[2], "Tli");
        test.equal(value[3], "Erb");
        test.equal(value[4], "Ħam");
        test.equal(value[5], "Ġim");
        test.equal(value[6], "Sib");

        test.done();
    },
    testWeekdayTranslationShort_mt_MT: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"mt-MT", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Ħd");
        test.equal(value[1], "Tn");
        test.equal(value[2], "Tl");
        test.equal(value[3], "Er");
        test.equal(value[4], "Ħm");
        test.equal(value[5], "Ġm");
        test.equal(value[6], "Sb");

        test.done();
    },
    testWeekdayTranslationFull_zu_ZA: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"zu-ZA", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "ISonto");
        test.equal(value[1], "UMsombuluko");
        test.equal(value[2], "ULwesibili");
        test.equal(value[3], "ULwesithathu");
        test.equal(value[4], "ULwesine");
        test.equal(value[5], "ULwesihlanu");
        test.equal(value[6], "UMgqibelo");
        test.done();
    },
    testWeekdayTranslationLong_zu_ZA: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"zu-ZA", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Son");
        test.equal(value[1], "Mso");
        test.equal(value[2], "Bil");
        test.equal(value[3], "Tha");
        test.equal(value[4], "Sin");
        test.equal(value[5], "Hla");
        test.equal(value[6], "Mgq");

        test.done();
    },
    testWeekdayTranslationMedium_zu_ZA: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"zu-ZA", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Son");
        test.equal(value[1], "Mso");
        test.equal(value[2], "Bil");
        test.equal(value[3], "Tha");
        test.equal(value[4], "Sin");
        test.equal(value[5], "Hla");
        test.equal(value[6], "Mgq");

        test.done();
    },
    testWeekdayTranslationShort_zu_ZA: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"zu-ZA", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "B");
        test.equal(value[3], "T");
        test.equal(value[4], "S");
        test.equal(value[5], "H");
        test.equal(value[6], "M");

        test.done();
    },
    testWeekdayTranslationFull_lb_LU: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"lb-LU", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sonndeg");
        test.equal(value[1], "Méindeg");
        test.equal(value[2], "Dënschdeg");
        test.equal(value[3], "Mëttwoch");
        test.equal(value[4], "Donneschdeg");
        test.equal(value[5], "Freideg");
        test.equal(value[6], "Samschdeg");
        test.done();
    },
    testWeekdayTranslationLong_lb_LU: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"lb-LU", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Son");
        test.equal(value[1], "Méi");
        test.equal(value[2], "Dën");
        test.equal(value[3], "Mët");
        test.equal(value[4], "Don");
        test.equal(value[5], "Fre");
        test.equal(value[6], "Sam");

        test.done();
    },
    testWeekdayTranslationMedium_lb_LU: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"lb-LU", date:"w", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "So.");
        test.equal(value[1], "Mé.");
        test.equal(value[2], "Dë.");
        test.equal(value[3], "Më.");
        test.equal(value[4], "Do.");
        test.equal(value[5], "Fr.");
        test.equal(value[6], "Sa.");

        test.done();
    },
    testWeekdayTranslationShort_lb_LU: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"lb-LU", date:"w", length: "short", useNative:false, timezone:"local"});

        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "D");
        test.equal(value[3], "M");
        test.equal(value[4], "D");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslationFull_ig_NG: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ig-NG", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sọndee");
        test.equal(value[1], "Mọnde");
        test.equal(value[2], "Tiuzdee");
        test.equal(value[3], "Wenezdee");
        test.equal(value[4], "Tọọzdee");
        test.equal(value[5], "Fraịdee");
        test.equal(value[6], "Satọdee");
        test.done();
    },
    testWeekdayTranslationLong_ig_NG: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ig-NG", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sọn");
        test.equal(value[1], "Mọn");
        test.equal(value[2], "Tiu");
        test.equal(value[3], "Wen");
        test.equal(value[4], "Tọọ");
        test.equal(value[5], "Fraị");
        test.equal(value[6], "Sat");

        test.done();
    },
    testWeekdayTranslationMedium_ig_NG: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ig-NG", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Sọn");
        test.equal(value[1], "Mọn");
        test.equal(value[2], "Tiu");
        test.equal(value[3], "Wen");
        test.equal(value[4], "Tọọ");
        test.equal(value[5], "Fraị");
        test.equal(value[6], "Sat");
        test.done();
    },
    testWeekdayTranslationShort_ig_NG: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ig-NG", date:"w", length: "short", useNative:false, timezone:"local"})

        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "S");
        test.equal(value[1], "M");
        test.equal(value[2], "T");
        test.equal(value[3], "W");
        test.equal(value[4], "T");
        test.equal(value[5], "F");
        test.equal(value[6], "S");

        test.done();
    },
    testWeekdayTranslationFull_ps_AF: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ps-AF", date:"w", length: "full", useNative:false, timezone: "Etc/UTC"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+1, type:"persian", timezone: "Etc/UTC"}));
        }

        test.equal(value[0], "يونۍ");
        test.equal(value[1], "دونۍ");
        test.equal(value[2], "درېنۍ");
        test.equal(value[3], "څلرنۍ");
        test.equal(value[4], "پينځنۍ");
        test.equal(value[5], "جمعه");
        test.equal(value[6], "اونۍ");
        test.done();
    },
    testWeekdayTranslationLong_ps_AF: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ps-AF", date:"w", length: "long", useNative:false, timezone: "Etc/UTC"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+1, type:"persian", timezone: "Etc/UTC"}));
        }
        test.equal(value[0], "يونۍ");
        test.equal(value[1], "دونۍ");
        test.equal(value[2], "درېنۍ");
        test.equal(value[3], "څلرنۍ");
        test.equal(value[4], "پينځنۍ");
        test.equal(value[5], "جمعه");
        test.equal(value[6], "اونۍ");
        test.done();
    },
    testWeekdayTranslationMedium_ps_AF: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ps-AF", date:"w", length: "medium", useNative:false, timezone: "Etc/UTC"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+1, type:"persian", timezone: "Etc/UTC"}));
        }
        test.equal(value[0], "يونۍ");
        test.equal(value[1], "دونۍ");
        test.equal(value[2], "درېنۍ");
        test.equal(value[3], "څلرنۍ");
        test.equal(value[4], "پينځنۍ");
        test.equal(value[5], "جمعه");
        test.equal(value[6], "اونۍ");
        test.done();
    },
    testWeekdayTranslationShort_ps_AF: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ps-AF", date:"w", length: "short", useNative:false, timezone: "Etc/UTC"});
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+1, type:"persian", timezone: "Etc/UTC"}));
        }
        test.equal(value[0], 'S');
        test.equal(value[1], 'M');
        test.equal(value[2], 'T');
        test.equal(value[3], 'W');
        test.equal(value[4], 'T');
        test.equal(value[5], 'F');
        test.equal(value[6], 'S');
        test.done();
    },
    testWeekdayTranslationFull_ps_PK: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ps-PK", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "يونۍ");
        test.equal(value[1], "دونۍ");
        test.equal(value[2], "درېنۍ");
        test.equal(value[3], "څلرنۍ");
        test.equal(value[4], "پينځنۍ");
        test.equal(value[5], "جمعه");
        test.equal(value[6], "اونۍ");
        test.done();
    },
    testWeekdayTranslationLong_ps_PK: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ps-PK", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "يونۍ");
        test.equal(value[1], "دونۍ");
        test.equal(value[2], "درېنۍ");
        test.equal(value[3], "څلرنۍ");
        test.equal(value[4], "پينځنۍ");
        test.equal(value[5], "جمعه");
        test.equal(value[6], "اونۍ");

        test.done();
    },
    testWeekdayTranslationMedium_ps_PK: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ps-PK", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "يونۍ");
        test.equal(value[1], "دونۍ");
        test.equal(value[2], "درېنۍ");
        test.equal(value[3], "څلرنۍ");
        test.equal(value[4], "پينځنۍ");
        test.equal(value[5], "جمعه");
        test.equal(value[6], "اونۍ");
        test.done();
    },
    testWeekdayTranslationShort_ps_PK: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"ps-PK", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], 'S');
        test.equal(value[1], 'M');
        test.equal(value[2], 'T');
        test.equal(value[3], 'W');
        test.equal(value[4], 'T');
        test.equal(value[5], 'F');
        test.equal(value[6], 'S');
        test.done();
    },
    testWeekdayTranslationFull_yo_NG: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"yo-NG", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Àìkú");
        test.equal(value[1], "Ajé");
        test.equal(value[2], "Ìsẹ́gun");
        test.equal(value[3], "Ọjọ́rú");
        test.equal(value[4], "Ọjọ́bọ");
        test.equal(value[5], "Ẹtì");
        test.equal(value[6], "Àbámẹ́ta");
        test.done();
    },
    testWeekdayTranslationLong_yo_NG: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"yo-NG", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Àìk");
        test.equal(value[1], "Aj");
        test.equal(value[2], "Ìsẹ́g");
        test.equal(value[3], "Ọjọ́r");
        test.equal(value[4], "Ọjọ́b");
        test.equal(value[5], "Ẹt");
        test.equal(value[6], "Àbám");

        test.done();
    },
    testWeekdayTranslationMedium_yo_NG: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"yo-NG", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Àìk");
        test.equal(value[1], "Aj");
        test.equal(value[2], "Ìsẹ́g");
        test.equal(value[3], "Ọjọ́r");
        test.equal(value[4], "Ọjọ́b");
        test.equal(value[5], "Ẹt");
        test.equal(value[6], "Àbám");
        test.done();
    },
    testWeekdayTranslationShort_yo_NG: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"yo-NG", date:"w", length: "short", useNative:false, timezone:"local"})

        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "À");
        test.equal(value[1], "A");
        test.equal(value[2], "Ì");
        test.equal(value[3], "Ọ");
        test.equal(value[4], "Ọ");
        test.equal(value[5], "Ẹ");
        test.equal(value[6], "À");

        test.done();
    },
    testWeekdayTranslationFull_yo_BJ: function(test) {
        // full -> wide
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"yo-BJ", date:"w", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Àìkú");
        test.equal(value[1], "Ajé");
        test.equal(value[2], "Ìsɛ́gun");
        test.equal(value[3], "Ɔjɔ́rú");
        test.equal(value[4], "Ɔjɔ́bɔ");
        test.equal(value[5], "Ɛtì");
        test.equal(value[6], "Àbámɛ́ta");
        test.done();
    },
    testWeekdayTranslationLong_yo_BJ: function(test) {
        // long -> abbreviate
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"yo-BJ", date:"w", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Àìk");
        test.equal(value[1], "Aj");
        test.equal(value[2], "Ìsɛ́g");
        test.equal(value[3], "Ɔjɔ́r");
        test.equal(value[4], "Ɔjɔ́b");
        test.equal(value[5], "Ɛt");
        test.equal(value[6], "Àbám");

        test.done();
    },
    testWeekdayTranslationMedium_yo_BJ: function(test) {
        // medium -> short
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"yo-BJ", date:"w", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "Àìk");
        test.equal(value[1], "Aj");
        test.equal(value[2], "Ìsɛ́g");
        test.equal(value[3], "Ɔjɔ́r");
        test.equal(value[4], "Ɔjɔ́b");
        test.equal(value[5], "Ɛt");
        test.equal(value[6], "Àbám");
        test.done();
    },
    testWeekdayTranslationShort_yo_BJ: function(test) {
        // short: narrow
        test.expect(7);
        var fmt, value = [], i;
        fmt = new DateFmt({locale:"yo-NG", date:"w", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 7; i++) {
            value[i] = fmt.format(DateFactory({year: 2015, month: 8, day:i+2, type:"gregorian"}));
        }
        test.equal(value[0], "À");
        test.equal(value[1], "A");
        test.equal(value[2], "Ì");
        test.equal(value[3], "Ọ");
        test.equal(value[4], "Ọ");
        test.equal(value[5], "Ẹ");
        test.equal(value[6], "À");
        test.done();
    }
}
