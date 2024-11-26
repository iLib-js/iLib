/*
 * testMonthTranslation.js - test the month's translation
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

/*
    Asian Language : zh, ko, ja -> M+ --> M
*/

module.exports.testmonthtranslation = {
    setUp: function(callback) {
        callback();
    },
    testMonthTranslate_ar_EG: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M
        var value = [],i;
        var fmt = new DateFmt({locale:"ar-EG", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "يناير");
        test.equal(value[1],"فبراير");
        test.equal(value[2],"مارس");
        test.equal(value[3],"أبريل");
        test.equal(value[4],"مايو");
        test.equal(value[5],"يونيو");
        test.equal(value[6],"يوليو");
        test.equal(value[7],"أغسطس");
        test.equal(value[8],"سبتمبر");
        test.equal(value[9],"أكتوبر");
        test.equal(value[10],"نوفمبر");
        test.equal(value[11], "ديسمبر");

        test.done();
    },
    testMonthTranslate_ar_IQ: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M
        var fmt = new DateFmt({locale:"ar-IQ", date:"m", length: "full", useNative:false, timezone:"local"});
        var value = [], i;
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "كانون الثاني");
        test.equal(value[1],"شباط");
        test.equal(value[2],"آذار");
        test.equal(value[3],"نيسان");
        test.equal(value[4],"أيار");
        test.equal(value[5],"حزيران");
        test.equal(value[6],"تموز");
        test.equal(value[7],"آب");
        test.equal(value[8],"أيلول");
        test.equal(value[9],"تشرين الأول");
        test.equal(value[10],"تشرين الثاني");
        test.equal(value[11], "كانون الأول");

        test.done();
    },
    testMonthTranslate_ar_MA: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M
        var fmt = new DateFmt({locale:"ar-MA", date:"m", length: "full", useNative:false, timezone:"local"})
        var value = [], i;
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "يناير");
        test.equal(value[1], "فبراير");
        test.equal(value[2], "مارس");
        test.equal(value[3], "أبريل");
        test.equal(value[4], "ماي");
        test.equal(value[5], "يونيو");
        test.equal(value[6], "يوليوز");
        test.equal(value[7], "غشت");
        test.equal(value[8], "شتنبر");
        test.equal(value[9], "أكتوبر");
        test.equal(value[10], "نونبر");
        test.equal(value[11], "دجنبر");

        test.done();
    },
    testMonthTranslate_as_IN: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M
        var fmt = new DateFmt({locale:"as-IN", date:"m", length: "full", useNative:false, timezone:"local"});
        var value = [], i;
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "জানুৱাৰী");
        test.equal(value[1], "ফেব্ৰুৱাৰী");
        test.equal(value[2], "মাৰ্চ");
        test.equal(value[3], "এপ্ৰিল");
        test.equal(value[4], "মে’");
        test.equal(value[5], "জুন");
        test.equal(value[6], "জুলাই");
        test.equal(value[7], "আগষ্ট");
        test.equal(value[8], "ছেপ্তেম্বৰ");
        test.equal(value[9], "অক্টোবৰ");
        test.equal(value[10], "নৱেম্বৰ");
        test.equal(value[11], "ডিচেম্বৰ");

        test.done();
    },
    testMonthTranslate_bg_BG: function(test) {
        test.expect(12);

        var fmt = new DateFmt({locale:"bg-BG", date:"m", length: "full", useNative:false, timezone:"local"})
        var value = [], i;
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "януари");
        test.equal(value[1], "февруари");
        test.equal(value[2], "март");
        test.equal(value[3], "април");
        test.equal(value[4], "май");
        test.equal(value[5], "юни");
        test.equal(value[6], "юли");
        test.equal(value[7], "август");
        test.equal(value[8], "септември");
        test.equal(value[9], "октомври");
        test.equal(value[10], "ноември");
        test.equal(value[11], "декември");

        test.done();
    },
    testMonthTranslate_bn_IN: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        var fmt = new DateFmt({locale:"bn-IN", date:"m", length: "full", useNative:false, timezone:"local"});
        var value = [], i;
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "জানুয়ারী");
        test.equal(value[1], "ফেব্রুয়ারী");
        test.equal(value[2], "মার্চ");
        test.equal(value[3], "এপ্রিল");
        test.equal(value[4], "মে");
        test.equal(value[5], "জুন");
        test.equal(value[6], "জুলাই");
        test.equal(value[7], "আগস্ট");
        test.equal(value[8], "সেপ্টেম্বর");
        test.equal(value[9], "অক্টোবর");
        test.equal(value[10], "নভেম্বর");
        test.equal(value[11], "ডিসেম্বর");

        var fmt = new DateFmt({locale:"bn-IN", date:"m", length: "medium", useNative:false, timezone:"local"});

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], 'জানু');
        test.equal(value[1], 'ফেব');
        test.equal(value[2], "মার্চ");
        test.equal(value[3], "এপ্রিল");
        test.equal(value[4], "মে");
        test.equal(value[5], "জুন");
        test.equal(value[6], "জুলাই");
        test.equal(value[7], "আগস্ট");
        test.equal(value[8], 'সেপ্টেঃ');
        test.equal(value[9], 'অক্টোঃ');
        test.equal(value[10], 'নভেঃ');
        test.equal(value[11], 'ডিসেঃ');

        test.done();
    },
    testMonthTranslate_bs_Latn_BA: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM

        var value = [], i;
        var fmt = new DateFmt({locale:"bs-Latn-BA", date:"m", length: "full", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "januar");
        test.equal(value[1], "februar");
        test.equal(value[2], "mart");
        test.equal(value[3], "april");
        test.equal(value[4], "maj");
        test.equal(value[5], "juni");
        test.equal(value[6], "juli");
        test.equal(value[7], "august");
        test.equal(value[8], "septembar");
        test.equal(value[9], "oktobar");
        test.equal(value[10], "novembar");
        test.equal(value[11], "decembar");

        var fmt = new DateFmt({locale:"bs-Latn-BA", date:"m", length: "medium", useNative:false, timezone:"local"});

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "jan");
        test.equal(value[1], "feb");
        test.equal(value[2], "mar");
        test.equal(value[3], "apr");
        test.equal(value[4], "maj");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "aug");
        test.equal(value[8], "sep");
        test.equal(value[9], "okt");
        test.equal(value[10], "nov");
        test.equal(value[11], "dec");

        test.done();
    },
    testMonthTranslate_bs_Latn_ME: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM

        var value = [], i;
        var fmt = new DateFmt({locale:"bs-Latn-ME", date:"m", length: "full", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "januar");
        test.equal(value[1], "februar");
        test.equal(value[2], "mart");
        test.equal(value[3], "april");
        test.equal(value[4], "maj");
        test.equal(value[5], "juni");
        test.equal(value[6], "juli");
        test.equal(value[7], "august");
        test.equal(value[8], "septembar");
        test.equal(value[9], "oktobar");
        test.equal(value[10], "novembar");
        test.equal(value[11], "decembar");

        var fmt = new DateFmt({locale:"bs-Latn-ME", date:"m", length: "medium", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "jan");
        test.equal(value[1], "feb");
        test.equal(value[2], "mar");
        test.equal(value[3], "apr");
        test.equal(value[4], "maj");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "aug");
        test.equal(value[8], "sep");
        test.equal(value[9], "okt");
        test.equal(value[10], "nov");
        test.equal(value[11], "dec");

        test.done();
    },
    testMonthTranslate_cs_CZ: function(test) {
        test.expect(12);

        // full, long: MMMM_ Exist StandAlone format.
        // medium: M
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"cs-CZ", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "leden"); //standAlone
        test.equal(value[1], "únor");
        test.equal(value[2], "březen");
        test.equal(value[3], "duben");
        test.equal(value[4], "květen");
        test.equal(value[5], "červen");
        test.equal(value[6], "červenec");
        test.equal(value[7], "srpen");
        test.equal(value[8], "září");
        test.equal(value[9], "říjen");
        test.equal(value[10], "listopad");
        test.equal(value[11], "prosinec");

        test.done();
    },
    testMonthTranslate_da_DK: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"da-DK", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "januar");
        test.equal(value[1], "februar");
        test.equal(value[2], "marts");
        test.equal(value[3], "april");
        test.equal(value[4], "maj");
        test.equal(value[5], "juni");
        test.equal(value[6], "juli");
        test.equal(value[7], "august");
        test.equal(value[8], "september");
        test.equal(value[9], "oktober");
        test.equal(value[10], "november");
        test.equal(value[11], "december");

        var fmt = new DateFmt({locale:"da-DK", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "jan.");
        test.equal(value[1], "feb.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "apr.");
        test.equal(value[4], "maj");
        test.equal(value[5], "jun.");
        test.equal(value[6], "jul.");
        test.equal(value[7], "aug.");
        test.equal(value[8], "sep.");
        test.equal(value[9], "okt.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "dec.");

        test.done();
    },
    testMonthTranslate_de_AT: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"de-AT", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Jänner");
        test.equal(value[1], "Februar");
        test.equal(value[2], "März");
        test.equal(value[3], "April");
        test.equal(value[4], "Mai");
        test.equal(value[5], "Juni");
        test.equal(value[6], "Juli");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "Oktober");
        test.equal(value[10], "November");
        test.equal(value[11], "Dezember");

        test.done();
    },
    testMonthTranslate_de_CH: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"de-CH", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Januar");
        test.equal(value[1], "Februar");
        test.equal(value[2], "März");
        test.equal(value[3], "April");
        test.equal(value[4], "Mai");
        test.equal(value[5], "Juni");
        test.equal(value[6], "Juli");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "Oktober");
        test.equal(value[10], "November");
        test.equal(value[11], "Dezember");

        test.done();
    },
    testMonthTranslate_de_DE: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"de-DE", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Januar");
        test.equal(value[1], "Februar");
        test.equal(value[2], "März");
        test.equal(value[3], "April");
        test.equal(value[4], "Mai");
        test.equal(value[5], "Juni");
        test.equal(value[6], "Juli");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "Oktober");
        test.equal(value[10], "November");
        test.equal(value[11], "Dezember");

        test.done();
    },
    testMonthTranslate_de_LU: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"de-LU", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Januar");
        test.equal(value[1], "Februar");
        test.equal(value[2], "März");
        test.equal(value[3], "April");
        test.equal(value[4], "Mai");
        test.equal(value[5], "Juni");
        test.equal(value[6], "Juli");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "Oktober");
        test.equal(value[10], "November");
        test.equal(value[11], "Dezember");

        test.done();
    },
    testMonthTranslate_el_CY: function(test) {
        test.expect(24);

        // full, long: MMMM _standAlone format exist.
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"el-CY", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Ιανουαρίου"); //standAlone
        test.equal(value[1], "Φεβρουαρίου");
        test.equal(value[2], "Μαρτίου");
        test.equal(value[3], "Απριλίου");
        test.equal(value[4], "Μαΐου");
        test.equal(value[5], "Ιουνίου");
        test.equal(value[6], "Ιουλίου");
        test.equal(value[7], "Αυγούστου");
        test.equal(value[8], "Σεπτεμβρίου");
        test.equal(value[9], "Οκτωβρίου");
        test.equal(value[10], "Νοεμβρίου");
        test.equal(value[11], "Δεκεμβρίου");

        var fmt = new DateFmt({locale:"el-CY", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Ιαν");
        test.equal(value[1], "Φεβ");
        test.equal(value[2], "Μαρ");
        test.equal(value[3], "Απρ");
        test.equal(value[4], "Μαΐ");
        test.equal(value[5], "Ιουν");
        test.equal(value[6], "Ιουλ");
        test.equal(value[7], "Αυγ");
        test.equal(value[8], "Σεπ");
        test.equal(value[9], "Οκτ");
        test.equal(value[10], "Νοε");
        test.equal(value[11], "Δεκ");

        test.done();
    },
    testMonthTranslate_el_GR: function(test) {
        test.expect(24);

        // full, long: MMMM _standAlone format exist.
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"el-GR", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Ιανουαρίου"); //standAlone
        test.equal(value[1], "Φεβρουαρίου");
        test.equal(value[2], "Μαρτίου");
        test.equal(value[3], "Απριλίου");
        test.equal(value[4], "Μαΐου");
        test.equal(value[5], "Ιουνίου");
        test.equal(value[6], "Ιουλίου");
        test.equal(value[7], "Αυγούστου");
        test.equal(value[8], "Σεπτεμβρίου");
        test.equal(value[9], "Οκτωβρίου");
        test.equal(value[10], "Νοεμβρίου");
        test.equal(value[11], "Δεκεμβρίου");

        var fmt = new DateFmt({locale:"el-GR", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Ιαν");
        test.equal(value[1], "Φεβ");
        test.equal(value[2], "Μαρ");
        test.equal(value[3], "Απρ");
        test.equal(value[4], "Μαΐ");
        test.equal(value[5], "Ιουν");
        test.equal(value[6], "Ιουλ");
        test.equal(value[7], "Αυγ");
        test.equal(value[8], "Σεπ");
        test.equal(value[9], "Οκτ");
        test.equal(value[10], "Νοε");
        test.equal(value[11], "Δεκ");

        test.done();
    },
    testMonthTranslate_en_AM: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"en-AM", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-AM", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sep");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_AU: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"en-AU", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-AU", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sept");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_AZ: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"en-AZ", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-AZ", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sep");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_CA: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"en-CA", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-CA", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sep");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_GB: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"en-GB", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-GB", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sept");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_GH: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"en-GH", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-GH", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sept");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_HK: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"en-HK", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-HK", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sept");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_IE: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"en-IE", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-IE", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sept");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_IN: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"en-IN", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-IN", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sept");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_IS: function(test) {
        test.expect(12);

        // Same as en-US

        var value = [], i;
        var fmt = new DateFmt({locale:"en-IS", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        test.done();
    },
    testMonthTranslate_en_JP: function(test) {
        test.expect(12);

        // Same as en-US

        var value = [], i;
        var fmt = new DateFmt({locale:"en-JP", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        test.done();
    },
    testMonthTranslate_en_KE: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"en-KE", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-KE", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sept");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_KR: function(test) {
        test.expect(12);

        // Same as en-US

        var value = [], i;
        var fmt = new DateFmt({locale:"en-KR", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        test.done();
    },
    testMonthTranslate_en_LK: function(test) {
        test.expect(12);

        // Same as en-US

        var value = [], i;
        var fmt = new DateFmt({locale:"en-LK", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        test.done();
    },
    testMonthTranslate_en_MM: function(test) {
        test.expect(12);

        // Same as en-US

        var value = [], i;
        var fmt = new DateFmt({locale:"en-MM", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        test.done();
    },
    testMonthTranslate_en_MW: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"en-MW", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-MW", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sept");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_MY: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"en-MY", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-MY", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sept");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_NG: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"en-NG", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-NG", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sept");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_NZ: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"en-NZ", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        test.done();
    },
    testMonthTranslate_en_PH: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"en-PH", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-PH", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sep");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_PR: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"en-PR", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-PR", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sep");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_SG: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"en-SG", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-SG", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sept");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_US: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"en-US", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-US", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sep");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_UG: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"en-UG", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-UG", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sept");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_ZA: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"en-ZA", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-ZA", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sept");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_en_ZM: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"en-ZM", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        var fmt = new DateFmt({locale:"en-ZM", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Aug");
        test.equal(value[8], "Sept");
        test.equal(value[9], "Oct");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dec");

        test.done();
    },
    testMonthTranslate_es_AR: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"es-AR", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        var fmt = new DateFmt({locale:"es-AR", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ene");
        test.equal(value[1], "feb");
        test.equal(value[2], "mar");
        test.equal(value[3], "abr");
        test.equal(value[4], "may");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "ago");
        test.equal(value[8], "sept");
        test.equal(value[9], "oct");
        test.equal(value[10], "nov");
        test.equal(value[11], "dic");

        test.done();
    },
    testMonthTranslate_es_BO: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"es-BO", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        var fmt = new DateFmt({locale:"es-BO", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "ene");
        test.equal(value[1], "feb");
        test.equal(value[2], "mar");
        test.equal(value[3], "abr");
        test.equal(value[4], "may");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "ago");
        test.equal(value[8], "sept");
        test.equal(value[9], "oct");
        test.equal(value[10], "nov");
        test.equal(value[11], "dic");

        test.done();
    },
    testMonthTranslate_es_CL: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"es-CL", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        test.done();
    },
    testMonthTranslate_es_CO: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: MM

        var value = [], i;
        for (i=0; i < 12; i++) {
            var fmt = new DateFmt({locale:"es-CO", date:"m", length: "full", useNative:false, timezone:"local"})
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        test.done();
    },
    testMonthTranslate_es_DO: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"es-DO", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        var fmt = new DateFmt({locale:"es-DO", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "ene");
        test.equal(value[1], "feb");
        test.equal(value[2], "mar");
        test.equal(value[3], "abr");
        test.equal(value[4], "may");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "ago");
        test.equal(value[8], "sept");
        test.equal(value[9], "oct");
        test.equal(value[10], "nov");
        test.equal(value[11], "dic");

        test.done();
    },
    testMonthTranslate_es_EC: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"es-EC", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        var fmt = new DateFmt({locale:"es-EC", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "ene");
        test.equal(value[1], "feb");
        test.equal(value[2], "mar");
        test.equal(value[3], "abr");
        test.equal(value[4], "may");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "ago");
        test.equal(value[8], "sept");
        test.equal(value[9], "oct");
        test.equal(value[10], "nov");
        test.equal(value[11], "dic");
        test.done();
    },
    testMonthTranslate_es_ES: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"es-ES", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        var fmt = new DateFmt({locale:"es-ES", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "ene");
        test.equal(value[1], "feb");
        test.equal(value[2], "mar");
        test.equal(value[3], "abr");
        test.equal(value[4], "may");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "ago");
        test.equal(value[8], "sept");
        test.equal(value[9], "oct");
        test.equal(value[10], "nov");
        test.equal(value[11], "dic");

        test.done();
    },
    testMonthTranslate_es_ES_Intl: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("es-ES")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(12);

        var value = [], i;
        var fmt = new DateFmt({locale:"es-ES", date:"m", length: "full", useNative:false, useIntl: true, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        test.done();
    },
    testMonthTranslate_es_GT: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"es-GT", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        test.done();
    },
    testMonthTranslate_es_HN: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"es-HN", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        var fmt = new DateFmt({locale:"es-HN", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ene");
        test.equal(value[1], "feb");
        test.equal(value[2], "mar");
        test.equal(value[3], "abr");
        test.equal(value[4], "may");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "ago");
        test.equal(value[8], "sept");
        test.equal(value[9], "oct");
        test.equal(value[10], "nov");
        test.equal(value[11], "dic");

        test.done();
    },
    testMonthTranslate_es_MX: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"es-MX", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        var fmt = new DateFmt({locale:"es-MX", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'ene');
        test.equal(value[1], 'feb');
        test.equal(value[2], 'mar');
        test.equal(value[3], 'abr');
        test.equal(value[4], 'may');
        test.equal(value[5], 'jun');
        test.equal(value[6], 'jul');
        test.equal(value[7], 'ago');
        test.equal(value[8], 'sep');
        test.equal(value[9], 'oct');
        test.equal(value[10], 'nov');
        test.equal(value[11], 'dic');

        test.done();
    },
    testMonthTranslate_es_NI: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"es-NI", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        var fmt = new DateFmt({locale:"es-NI", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ene");
        test.equal(value[1], "feb");
        test.equal(value[2], "mar");
        test.equal(value[3], "abr");
        test.equal(value[4], "may");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "ago");
        test.equal(value[8], "sept");
        test.equal(value[9], "oct");
        test.equal(value[10], "nov");
        test.equal(value[11], "dic");

        test.done();
    },
    testMonthTranslate_es_PA: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"es-PA", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        test.done();
    },
    testMonthTranslate_es_PE: function(test) {
        test.expect(24);

        // full, long: MMMM_ StandAlone Format
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"es-PE", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Enero");
        test.equal(value[1], "Febrero");
        test.equal(value[2], "Marzo");
        test.equal(value[3], "Abril");
        test.equal(value[4], "Mayo");
        test.equal(value[5], "Junio");
        test.equal(value[6], "Julio");
        test.equal(value[7], "Agosto");
        test.equal(value[8], "Setiembre");
        test.equal(value[9], "Octubre");
        test.equal(value[10], "Noviembre");
        test.equal(value[11], "Diciembre");

        var fmt = new DateFmt({locale:"es-PE", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Ene.");
        test.equal(value[1], "Feb.");
        test.equal(value[2], "Mar.");
        test.equal(value[3], "Abr.");
        test.equal(value[4], "May.");
        test.equal(value[5], "Jun.");
        test.equal(value[6], "Jul.");
        test.equal(value[7], "Ago.");
        test.equal(value[8], "Set.");
        test.equal(value[9], "Oct.");
        test.equal(value[10], "Nov.");
        test.equal(value[11], "Dic.");

        test.done();
    },
    testMonthTranslate_es_PR: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"es-PR", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        test.done();
    },
    testMonthTranslate_es_PY: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"es-PY", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        var fmt = new DateFmt({locale:"es-PY", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ene.");
        test.equal(value[1], "feb.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "abr.");
        test.equal(value[4], "may.");
        test.equal(value[5], "jun.");
        test.equal(value[6], "jul.");
        test.equal(value[7], "ago.");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "dic.");

        test.done();
    },
    testMonthTranslate_es_SV: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"es-SV", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        var fmt = new DateFmt({locale:"es-SV", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ene");
        test.equal(value[1], "feb");
        test.equal(value[2], "mar");
        test.equal(value[3], "abr");
        test.equal(value[4], "may");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "ago");
        test.equal(value[8], "sept");
        test.equal(value[9], "oct");
        test.equal(value[10], "nov");
        test.equal(value[11], "dic");

        test.done();
    },
    testMonthTranslate_es_US: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"es-US", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        var fmt = new DateFmt({locale:"es-US", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ene");
        test.equal(value[1], "feb");
        test.equal(value[2], "mar");
        test.equal(value[3], "abr");
        test.equal(value[4], "may");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "ago");
        test.equal(value[8], "sept");
        test.equal(value[9], "oct");
        test.equal(value[10], "nov");
        test.equal(value[11], "dic");

        test.done();
    },
    testMonthTranslate_es_UY: function(test) {
        test.expect(24);

        // full, long: MMMM_StandAlone
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"es-UY", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Enero");
        test.equal(value[1], "Febrero");
        test.equal(value[2], "Marzo");
        test.equal(value[3], "Abril");
        test.equal(value[4], "Mayo");
        test.equal(value[5], "Junio");
        test.equal(value[6], "Julio");
        test.equal(value[7], "Agosto");
        test.equal(value[8], "Setiembre");
        test.equal(value[9], "Octubre");
        test.equal(value[10], "Noviembre");
        test.equal(value[11], "Diciembre");

        var fmt = new DateFmt({locale:"es-UY", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Ene.");
        test.equal(value[1], "Feb.");
        test.equal(value[2], "Mar.");
        test.equal(value[3], "Abr.");
        test.equal(value[4], "May.");
        test.equal(value[5], "Jun.");
        test.equal(value[6], "Jul.");
        test.equal(value[7], "Ago.");
        test.equal(value[8], "Set.");
        test.equal(value[9], "Oct.");
        test.equal(value[10], "Nov.");
        test.equal(value[11], "Dic.");

        test.done();
    },
    testMonthTranslate_es_VE: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"es-VE", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        var fmt = new DateFmt({locale:"es-VE", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ene.");
        test.equal(value[1], "feb.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "abr.");
        test.equal(value[4], "may.");
        test.equal(value[5], "jun.");
        test.equal(value[6], "jul.");
        test.equal(value[7], "ago.");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "dic.");

        test.done();
    },
    testMonthTranslate_et_EE: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"et-EE", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "jaanuar");
        test.equal(value[1], "veebruar");
        test.equal(value[2], "märts");
        test.equal(value[3], "aprill");
        test.equal(value[4], "mai");
        test.equal(value[5], "juuni");
        test.equal(value[6], "juuli");
        test.equal(value[7], "august");
        test.equal(value[8], "september");
        test.equal(value[9], "oktoober");
        test.equal(value[10], "november");
        test.equal(value[11], "detsember");

        var fmt = new DateFmt({locale:"et-EE", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "jaan");
        test.equal(value[1], "veebr");
        test.equal(value[2], "märts");
        test.equal(value[3], "apr");
        test.equal(value[4], "mai");
        test.equal(value[5], "juuni");
        test.equal(value[6], "juuli");
        test.equal(value[7], "aug");
        test.equal(value[8], "sept");
        test.equal(value[9], "okt");
        test.equal(value[10], "nov");
        test.equal(value[11], "dets");

        test.done();
    },
    testMonthTranslate_fa_AF: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"fa-AF", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"persian"}));
        }
        // full/long length: standAlone Format _ LLLL*

        test.equal(value[0], 'حمل');
        test.equal(value[1], 'ثور');
        test.equal(value[2], 'جوزا');
        test.equal(value[3], 'سرطان');
        test.equal(value[4], 'اسد');
        test.equal(value[5], 'سنبلهٔ');
        test.equal(value[6], 'میزان');
        test.equal(value[7], 'عقرب');
        test.equal(value[8], 'قوس');
        test.equal(value[9], 'جدی');
        test.equal(value[10], 'دلو');
        test.equal(value[11], 'حوت');

        var fmt = new DateFmt({locale:"fa-AF", date:"m", length: "medium", useNative:false, timezone:"local"});

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"persian"}));
        }
        test.equal(value[0], 'حمل');
        test.equal(value[1], 'ثور');
        test.equal(value[2], 'جوزا');
        test.equal(value[3], 'سرطان');
        test.equal(value[4], 'اسد');
        test.equal(value[5], 'سنبلهٔ');
        test.equal(value[6], 'میزان');
        test.equal(value[7], 'عقرب');
        test.equal(value[8], 'قوس');
        test.equal(value[9], 'جدی');
        test.equal(value[10], 'دلو');
        test.equal(value[11], 'حوت');

        test.done();
    },
    testMonthTranslate_fa_IR: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"fa-IR", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"persian"}));
        }
        test.equal(value[0], "فروردین");
        test.equal(value[1], "اردیبهشت");
        test.equal(value[2], "خرداد");
        test.equal(value[3], "تیر");
        test.equal(value[4], "مرداد");
        test.equal(value[5], "شهریور");
        test.equal(value[6], "مهر");
        test.equal(value[7], "آبان");
        test.equal(value[8], "آذر");
        test.equal(value[9], "دی");
        test.equal(value[10], "بهمن");
        test.equal(value[11], "اسفند");

        var fmt = new DateFmt({locale:"fa-IR", date:"m", length: "medium", useNative:false, timezone:"local"});

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"persian"}));
        }
        test.equal(value[0], "فروردین");
        test.equal(value[1], "اردیبهشت");
        test.equal(value[2], "خرداد");
        test.equal(value[3], "تیر");
        test.equal(value[4], "مرداد");
        test.equal(value[5], "شهریور");
        test.equal(value[6], "مهر");
        test.equal(value[7], "آبان");
        test.equal(value[8], "آذر");
        test.equal(value[9], "دی");
        test.equal(value[10], "بهمن");
        test.equal(value[11], "اسفند");

        test.done();
    },
    testMonthTranslate_fi_FI: function(test) {
        test.expect(12);

        // full, long: MMMM_ standAlone format exist.
        // medium: M
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"fi-FI", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "tammikuu");
        test.equal(value[1], "helmikuu");
        test.equal(value[2], "maaliskuu");
        test.equal(value[3], "huhtikuu");
        test.equal(value[4], "toukokuu");
        test.equal(value[5], "kesäkuu");
        test.equal(value[6], "heinäkuu");
        test.equal(value[7], "elokuu");
        test.equal(value[8], "syyskuu");
        test.equal(value[9], "lokakuu");
        test.equal(value[10], "marraskuu");
        test.equal(value[11], "joulukuu");

        test.done();
    },
    testMonthTranslate_fr_BE: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-BE", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-BE", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_CA: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-CA", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-CA", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juill.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");
        test.done();
    },
    testMonthTranslate_fr_CH: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-CH", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-CH", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_FR: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-FR", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-FR", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_LU: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-LU", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-LU", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_ga_IE: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"ga-IE", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Eanáir");
        test.equal(value[1], "Feabhra");
        test.equal(value[2], "Márta");
        test.equal(value[3], "Aibreán");
        test.equal(value[4], "Bealtaine");
        test.equal(value[5], "Meitheamh");
        test.equal(value[6], "Iúil");
        test.equal(value[7], "Lúnasa");
        test.equal(value[8], "Meán Fómhair");
        test.equal(value[9], "Deireadh Fómhair");
        test.equal(value[10], "Samhain");
        test.equal(value[11], "Nollaig");

        var fmt = new DateFmt({locale:"ga-IE", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Ean");
        test.equal(value[1], "Feabh");
        test.equal(value[2], "Márta");
        test.equal(value[3], "Aib");
        test.equal(value[4], "Beal");
        test.equal(value[5], "Meith");
        test.equal(value[6], "Iúil");
        test.equal(value[7], "Lún");
        test.equal(value[8], "MFómh");
        test.equal(value[9], "DFómh");
        test.equal(value[10], "Samh");
        test.equal(value[11], "Noll");

        test.done();
    },
    testMonthTranslate_gu_IN: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"gu-IN", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "જાન્યુઆરી");
        test.equal(value[1], "ફેબ્રુઆરી");
        test.equal(value[2], "માર્ચ");
        test.equal(value[3], "એપ્રિલ");
        test.equal(value[4], "મે");
        test.equal(value[5], "જૂન");
        test.equal(value[6], "જુલાઈ");
        test.equal(value[7], "ઑગસ્ટ");
        test.equal(value[8], "સપ્ટેમ્બર");
        test.equal(value[9], "ઑક્ટોબર");
        test.equal(value[10], "નવેમ્બર");
        test.equal(value[11], "ડિસેમ્બર");

        var fmt = new DateFmt({locale:"gu-IN", date:"m", length: "medium", useNative:false, timezone:"local"});

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "જાન્યુ");
        test.equal(value[1], "ફેબ્રુ");
        test.equal(value[2], "માર્ચ");
        test.equal(value[3], "એપ્રિલ");
        test.equal(value[4], "મે");
        test.equal(value[5], "જૂન");
        test.equal(value[6], "જુલાઈ");
        test.equal(value[7], "ઑગસ્ટ");
        test.equal(value[8], "સપ્ટે");
        test.equal(value[9], "ઑક્ટો");
        test.equal(value[10], "નવે");
        test.equal(value[11], "ડિસે");

        test.done();
    },
    testMonthTranslate_he_IL: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"he-IL", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ינואר");
        test.equal(value[1], "פברואר");
        test.equal(value[2], "מרץ");
        test.equal(value[3], "אפריל");
        test.equal(value[4], "מאי");
        test.equal(value[5], "יוני");
        test.equal(value[6], "יולי");
        test.equal(value[7], "אוגוסט");
        test.equal(value[8], "ספטמבר");
        test.equal(value[9], "אוקטובר");
        test.equal(value[10], "נובמבר");
        test.equal(value[11], "דצמבר");

        var fmt = new DateFmt({locale:"he-IL", date:"m", length: "medium", useNative:false, timezone:"local"});

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ינו׳");
        test.equal(value[1], "פבר׳");
        test.equal(value[2], "מרץ");
        test.equal(value[3], "אפר׳");
        test.equal(value[4], "מאי" );
        test.equal(value[5], "יוני");
        test.equal(value[6], "יולי");
        test.equal(value[7], "אוג׳");
        test.equal(value[8], "ספט׳");
        test.equal(value[9], "אוק׳");
        test.equal(value[10], "נוב׳");
        test.equal(value[11],"דצמ׳");

        test.done();
    },
    testMonthTranslate_hi_IN: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"hi-IN", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "जनवरी");
        test.equal(value[1], "फ़रवरी");
        test.equal(value[2], "मार्च");
        test.equal(value[3], "अप्रैल");
        test.equal(value[4], "मई");
        test.equal(value[5], "जून");
        test.equal(value[6], "जुलाई");
        test.equal(value[7], "अगस्त");
        test.equal(value[8], "सितंबर");
        test.equal(value[9], "अक्तूबर");
        test.equal(value[10], "नवंबर");
        test.equal(value[11], "दिसंबर");

        var fmt = new DateFmt({locale:"hi-IN", date:"m", length: "medium", useNative:false, timezone:"local"});

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "जन॰");
        test.equal(value[1], "फ़र॰");
        test.equal(value[2], "मार्च");
        test.equal(value[3], "अप्रैल");
        test.equal(value[4], "मई");
        test.equal(value[5], "जून");
        test.equal(value[6], "जुल॰");
        test.equal(value[7], "अग॰");
        test.equal(value[8], "सित॰");
        test.equal(value[9], "अक्तू॰");
        test.equal(value[10], "नव॰");
        test.equal(value[11], "दिस॰");

        test.done();
    },
        testMonthTranslate_hr_HR: function(test) {
        test.expect(24);

        // full, long: MMMM _standAlone Format Exist.
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"hr-HR", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "siječanj");
        test.equal(value[1], "veljača");
        test.equal(value[2], "ožujak");
        test.equal(value[3], "travanj");
        test.equal(value[4], "svibanj");
        test.equal(value[5], "lipanj");
        test.equal(value[6], "srpanj");
        test.equal(value[7], "kolovoz");
        test.equal(value[8], "rujan");
        test.equal(value[9], "listopad");
        test.equal(value[10], "studeni");
        test.equal(value[11], "prosinac");

        var fmt = new DateFmt({locale:"hr-HR", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "sij");
        test.equal(value[1], "velj");
        test.equal(value[2], "ožu");
        test.equal(value[3], "tra");
        test.equal(value[4], "svi");
        test.equal(value[5], "lip");
        test.equal(value[6], "srp");
        test.equal(value[7], "kol");
        test.equal(value[8], "ruj");
        test.equal(value[9], "lis");
        test.equal(value[10], "stu");
        test.equal(value[11], "pro");

        test.done();
    },
    testMonthTranslate_hr_ME: function(test) {
        test.expect(12);

        // Same as hr-HR

        var value = [], i;
        var fmt = new DateFmt({locale:"hr-ME", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "siječanj");
        test.equal(value[1], "veljača");
        test.equal(value[2], "ožujak");
        test.equal(value[3], "travanj");
        test.equal(value[4], "svibanj");
        test.equal(value[5], "lipanj");
        test.equal(value[6], "srpanj");
        test.equal(value[7], "kolovoz");
        test.equal(value[8], "rujan");
        test.equal(value[9], "listopad");
        test.equal(value[10], "studeni");
        test.equal(value[11], "prosinac");

        test.done();
    },
    testMonthTranslate_hr_HU: function(test) {
        test.expect(12);

        // Same as hr-HR

        var value = [], i;
        var fmt = new DateFmt({locale:"hr-HU", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "siječanj");
        test.equal(value[1], "veljača");
        test.equal(value[2], "ožujak");
        test.equal(value[3], "travanj");
        test.equal(value[4], "svibanj");
        test.equal(value[5], "lipanj");
        test.equal(value[6], "srpanj");
        test.equal(value[7], "kolovoz");
        test.equal(value[8], "rujan");
        test.equal(value[9], "listopad");
        test.equal(value[10], "studeni");
        test.equal(value[11], "prosinac");

        test.done();
    },
    testMonthTranslate_id_ID: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"id-ID", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Januari");
        test.equal(value[1], "Februari");
        test.equal(value[2], "Maret");
        test.equal(value[3], "April");
        test.equal(value[4], "Mei");
        test.equal(value[5], "Juni");
        test.equal(value[6], "Juli");
        test.equal(value[7], "Agustus");
        test.equal(value[8], "September");
        test.equal(value[9], "Oktober");
        test.equal(value[10], "November");
        test.equal(value[11], "Desember");

        var fmt = new DateFmt({locale:"id-ID", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "Mei");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Agu");
        test.equal(value[8], "Sep");
        test.equal(value[9], "Okt");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Des");

        test.done();
    },
    testMonthTranslate_is_IS: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"is-IS", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janúar");
        test.equal(value[1], "febrúar");
        test.equal(value[2], "mars");
        test.equal(value[3], "apríl");
        test.equal(value[4], "maí");
        test.equal(value[5], "júní");
        test.equal(value[6], "júlí");
        test.equal(value[7], "ágúst");
        test.equal(value[8], "september");
        test.equal(value[9], "október");
        test.equal(value[10], "nóvember");
        test.equal(value[11], "desember");

        var fmt = new DateFmt({locale:"is-IS", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "jan.");
        test.equal(value[1], "feb.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "apr.");
        test.equal(value[4], "maí");
        test.equal(value[5], "jún.");
        test.equal(value[6], "júl.");
        test.equal(value[7], "ágú.");
        test.equal(value[8], "sep.");
        test.equal(value[9], "okt.");
        test.equal(value[10], "nóv.");
        test.equal(value[11], "des.");

        test.done();
    },
    testMonthTranslate_it_CH: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"it-CH", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "gennaio");
        test.equal(value[1], "febbraio");
        test.equal(value[2], "marzo");
        test.equal(value[3], "aprile");
        test.equal(value[4], "maggio");
        test.equal(value[5], "giugno");
        test.equal(value[6], "luglio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "settembre");
        test.equal(value[9], "ottobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "dicembre");

        var fmt = new DateFmt({locale:"it-CH", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "gen");
        test.equal(value[1], "feb");
        test.equal(value[2], "mar");
        test.equal(value[3], "apr");
        test.equal(value[4], "mag");
        test.equal(value[5], "giu");
        test.equal(value[6], "lug");
        test.equal(value[7], "ago");
        test.equal(value[8], "set");
        test.equal(value[9], "ott");
        test.equal(value[10], "nov");
        test.equal(value[11], "dic");

        test.done();
    },
    testMonthTranslate_it_IT: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"it-IT", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "gennaio");
        test.equal(value[1], "febbraio");
        test.equal(value[2], "marzo");
        test.equal(value[3], "aprile");
        test.equal(value[4], "maggio");
        test.equal(value[5], "giugno");
        test.equal(value[6], "luglio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "settembre");
        test.equal(value[9], "ottobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "dicembre");

        var fmt = new DateFmt({locale:"it-IT", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "gen");
        test.equal(value[1], "feb");
        test.equal(value[2], "mar");
        test.equal(value[3], "apr");
        test.equal(value[4], "mag");
        test.equal(value[5], "giu");
        test.equal(value[6], "lug");
        test.equal(value[7], "ago");
        test.equal(value[8], "set");
        test.equal(value[9], "ott");
        test.equal(value[10], "nov");
        test.equal(value[11], "dic");

        test.done();
    },
    testMonthTranslate_ja_JP: function(test) {
        test.expect(12);

        var value = [], i;
        var fmt = new DateFmt({locale:"ja-JP", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "1月");
        test.equal(value[1], "2月");
        test.equal(value[2], "3月");
        test.equal(value[3], "4月");
        test.equal(value[4], "5月");
        test.equal(value[5], "6月");
        test.equal(value[6], "7月");
        test.equal(value[7], "8月");
        test.equal(value[8], "9月");
        test.equal(value[9], "10月");
        test.equal(value[10], "11月");
        test.equal(value[11], "12月");

        test.done();
    },
    testMonthTranslate_kk_KZ: function(test) {
        test.expect(24);

        // full, long: MMMM_ StandAlone Format Exist.
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"kk-KZ", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Қаңтар");
        test.equal(value[1], "Ақпан");
        test.equal(value[2], "Наурыз");
        test.equal(value[3], "Сәуір");
        test.equal(value[4], "Мамыр");
        test.equal(value[5], "Маусым");
        test.equal(value[6], "Шілде");
        test.equal(value[7], "Тамыз");
        test.equal(value[8], "Қыркүйек");
        test.equal(value[9], "Қазан");
        test.equal(value[10], "Қараша");
        test.equal(value[11], "Желтоқсан");

        var fmt = new DateFmt({locale:"kk-KZ", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "қаң.");
        test.equal(value[1], "ақп.");
        test.equal(value[2], "нау.");
        test.equal(value[3], "сәу.");
        test.equal(value[4], "мам.");
        test.equal(value[5], "мау.");
        test.equal(value[6], "шіл.");
        test.equal(value[7], "там.");
        test.equal(value[8], "қыр.");
        test.equal(value[9], "қаз.");
        test.equal(value[10], "қар.");
        test.equal(value[11], "жел.");

        test.done();
    },
    testMonthTranslate_kn_IN: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"kn-IN", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "ಜನವರಿ" );
        test.equal(value[1], "ಫೆಬ್ರವರಿ");
        test.equal(value[2], "ಮಾರ್ಚ್" );
        test.equal(value[3], "ಏಪ್ರಿಲ್");
        test.equal(value[4], "ಮೇ");
        test.equal(value[5], "ಜೂನ್");
        test.equal(value[6], "ಜುಲೈ" );
        test.equal(value[7], "ಆಗಸ್ಟ್");
        test.equal(value[8], "ಸೆಪ್ಟೆಂಬರ್");
        test.equal(value[9], "ಅಕ್ಟೋಬರ್");
        test.equal(value[10], "ನವೆಂಬರ್");
        test.equal(value[11], "ಡಿಸೆಂಬರ್");

        var fmt = new DateFmt({locale:"kn-IN", date:"m", length: "medium", useNative:false, timezone:"local"});

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "ಜನ" );
        test.equal(value[1], "ಫೆಬ್ರ");
        test.equal(value[2], "ಮಾರ್ಚ್"  );
        test.equal(value[3], "ಏಪ್ರಿ");
        test.equal(value[4], "ಮೇ" );
        test.equal(value[5], "ಜೂನ್" );
        test.equal(value[6], "ಜುಲೈ" );
        test.equal(value[7], "ಆಗ");
        test.equal(value[8], "ಸೆಪ್ಟೆಂ");
        test.equal(value[9], "ಅಕ್ಟೋ");
        test.equal(value[10], "ನವೆಂ");
        test.equal(value[11], "ಡಿಸೆಂ");

        test.done();
    },
    testMonthTranslate_ko_KR: function(test) {
        test.expect(12);

        var value = [], i;
        var fmt = new DateFmt({locale:"ko-KR", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "1월");
        test.equal(value[1], "2월");
        test.equal(value[2], "3월");
        test.equal(value[3], "4월");
        test.equal(value[4], "5월");
        test.equal(value[5], "6월");
        test.equal(value[6], "7월");
        test.equal(value[7], "8월");
        test.equal(value[8], "9월");
        test.equal(value[9], "10월");
        test.equal(value[10], "11월");
        test.equal(value[11], "12월");

        test.done();
    },
    testMonthTranslate_ko_KR_Intl: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("ko-KR")){
            test.done();
            return;
        }
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"ko-KR", date:"m", length: "full", useNative:false, useIntl:true, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "1월");
        test.equal(value[1], "2월");
        test.equal(value[2], "3월");
        test.equal(value[3], "4월");
        test.equal(value[4], "5월");
        test.equal(value[5], "6월");
        test.equal(value[6], "7월");
        test.equal(value[7], "8월");
        test.equal(value[8], "9월");
        test.equal(value[9], "10월");
        test.equal(value[10], "11월");
        test.equal(value[11], "12월");

        test.done();
    },
    testMonthTranslate_ku_IQ: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"ku-IQ", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "کانوونی دووەم");
        test.equal(value[1], "شوبات");
        test.equal(value[2], "ئازار");
        test.equal(value[3], "نیسان");
        test.equal(value[4], "ئایار");
        test.equal(value[5], "حوزەیران");
        test.equal(value[6], "تەمووز");
        test.equal(value[7], "ئاب");
        test.equal(value[8], "ئەیلوول");
        test.equal(value[9], "تشرینی یەکەم");
        test.equal(value[10], "تشرینی دووەم");
        test.equal(value[11], "کانونی یەکەم");

        var fmt = new DateFmt({locale:"ku-IQ", date:"m", length: "medium", useNative:false, timezone:"local"});

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "کانوونی دووەم");
        test.equal(value[1], "شوبات");
        test.equal(value[2], "ئازار");
        test.equal(value[3], "نیسان");
        test.equal(value[4], "ئایار");
        test.equal(value[5], "حوزەیران");
        test.equal(value[6], "تەمووز");
        test.equal(value[7], "ئاب");
        test.equal(value[8], "ئەیلوول");
        test.equal(value[9], "تشرینی یەکەم");
        test.equal(value[10], "تشرینی دووەم");
        test.equal(value[11], "کانونی یەکەم");

        test.done();
    },
    testMonthTranslate_lt_LT: function(test) {
        test.expect(12);

        // full, long: MMMM_ StandAlone Format Exist
        // medium: MM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"lt-LT", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "sausis");
        test.equal(value[1], "vasaris");
        test.equal(value[2], "kovas");
        test.equal(value[3], "balandis");
        test.equal(value[4], "gegužė");
        test.equal(value[5], "birželis");
        test.equal(value[6], "liepa");
        test.equal(value[7], "rugpjūtis");
        test.equal(value[8], "rugsėjis");
        test.equal(value[9], "spalis");
        test.equal(value[10], "lapkritis");
        test.equal(value[11], "gruodis");

        test.done();
    },
    testMonthTranslate_lv_LV: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"lv-LV", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvāris");
        test.equal(value[1], "februāris");
        test.equal(value[2], "marts");
        test.equal(value[3], "aprīlis");
        test.equal(value[4], "maijs");
        test.equal(value[5], "jūnijs");
        test.equal(value[6], "jūlijs");
        test.equal(value[7], "augusts");
        test.equal(value[8], "septembris");
        test.equal(value[9], "oktobris");
        test.equal(value[10], "novembris");
        test.equal(value[11], "decembris");

        var fmt = new DateFmt({locale:"lv-LV", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "febr.");
        test.equal(value[2], "marts");
        test.equal(value[3], "apr.");
        test.equal(value[4], "maijs");
        test.equal(value[5], "jūn.");
        test.equal(value[6], "jūl.");
        test.equal(value[7], "aug.");
        test.equal(value[8], "sept.");
        test.equal(value[9], "okt.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "dec.");

        test.done();
    },
    testMonthTranslate_mk_MK: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: M
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"mk-MK", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "јануари");
        test.equal(value[1], "февруари");
        test.equal(value[2], "март");
        test.equal(value[3], "април");
        test.equal(value[4], "мај");
        test.equal(value[5], "јуни");
        test.equal(value[6], "јули");
        test.equal(value[7], "август");
        test.equal(value[8], "септември");
        test.equal(value[9], "октомври");
        test.equal(value[10], "ноември");
        test.equal(value[11], "декември");

        test.done();
    },
    testMonthTranslate_ml_IN: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ml-IN", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ജനുവരി");
        test.equal(value[1], "ഫെബ്രുവരി");
        test.equal(value[2], "മാർച്ച്");
        test.equal(value[3], "ഏപ്രിൽ");
        test.equal(value[4],"മേയ്");
        test.equal(value[5], "ജൂൺ");
        test.equal(value[6], "ജൂലൈ");
        test.equal(value[7], "ഓഗസ്റ്റ്");
        test.equal(value[8],"സെപ്റ്റംബർ");
        test.equal(value[9],  "ഒക്‌ടോബർ");
        test.equal(value[10],"നവംബർ");
        test.equal(value[11],"ഡിസംബർ");

        var fmt = new DateFmt({locale:"ml-IN", date:"m", length: "medium", useNative:false, timezone:"local"});

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ജനു");
        test.equal(value[1], "ഫെബ്രു");
        test.equal(value[2], "മാർ");
        test.equal(value[3], "ഏപ്രി");
        test.equal(value[4], "മേയ്");
        test.equal(value[5], "ജൂൺ");
        test.equal(value[6], "ജൂലൈ");
        test.equal(value[7], "ഓഗ");
        test.equal(value[8], "സെപ്റ്റം");
        test.equal(value[9], "ഒക്ടോ");
        test.equal(value[10], "നവം");
        test.equal(value[11], "ഡിസം");

        test.done();
    },
    testMonthTranslate_mr_IN: function(test) {
        test.expect(12);

        var value = [], i;
        var fmt = new DateFmt({locale:"mr-IN", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0],"जानेवारी");
        test.equal(value[1], "फेब्रुवारी");
        test.equal(value[2], "मार्च");
        test.equal(value[3],"एप्रिल");
        test.equal(value[4], "मे");
        test.equal(value[5],"जून");
        test.equal(value[6], "जुलै");
        test.equal(value[7], "ऑगस्ट");
        test.equal(value[8],"सप्टेंबर");
        test.equal(value[9],"ऑक्टोबर");
        test.equal(value[10],"नोव्हेंबर");
        test.equal(value[11], "डिसेंबर");

        test.done();
    },
    testMonthTranslate_ms_MY: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"ms-MY", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Januari");
        test.equal(value[1], "Februari");
        test.equal(value[2], "Mac");
        test.equal(value[3], "April");
        test.equal(value[4], "Mei");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Julai");
        test.equal(value[7], "Ogos");
        test.equal(value[8], "September");
        test.equal(value[9], "Oktober");
        test.equal(value[10], "November");
        test.equal(value[11], "Disember");

        var fmt = new DateFmt({locale:"ms-MY", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mac");
        test.equal(value[3], "Apr");
        test.equal(value[4], "Mei");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Ogo");
        test.equal(value[8], "Sep");
        test.equal(value[9], "Okt");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dis");

        test.done();
    },
    testMonthTranslate_nb_NO: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"nb-NO", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "januar");
        test.equal(value[1], "februar");
        test.equal(value[2], "mars");
        test.equal(value[3], "april");
        test.equal(value[4], "mai");
        test.equal(value[5], "juni");
        test.equal(value[6], "juli");
        test.equal(value[7], "august");
        test.equal(value[8], "september");
        test.equal(value[9], "oktober");
        test.equal(value[10], "november");
        test.equal(value[11], "desember");

        var fmt = new DateFmt({locale:"nb-NO", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "jan");
        test.equal(value[1], "feb");
        test.equal(value[2], "mar");
        test.equal(value[3], "apr");
        test.equal(value[4], "mai");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "aug");
        test.equal(value[8], "sep");
        test.equal(value[9], "okt");
        test.equal(value[10], "nov");
        test.equal(value[11], "des");

        test.done();
    },
    testMonthTranslate_nl_BE: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"nl-BE", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "januari");
        test.equal(value[1], "februari");
        test.equal(value[2], "maart");
        test.equal(value[3], "april");
        test.equal(value[4], "mei");
        test.equal(value[5], "juni");
        test.equal(value[6], "juli");
        test.equal(value[7], "augustus");
        test.equal(value[8], "september");
        test.equal(value[9], "oktober");
        test.equal(value[10], "november");
        test.equal(value[11], "december");

        var fmt = new DateFmt({locale:"nl-BE", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "jan");
        test.equal(value[1], "feb");
        test.equal(value[2], "mrt");
        test.equal(value[3], "apr");
        test.equal(value[4], "mei");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "aug");
        test.equal(value[8], "sep");
        test.equal(value[9], "okt");
        test.equal(value[10], "nov");
        test.equal(value[11], "dec");

        test.done();
    },
    testMonthTranslate_nl_NL: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"nl-NL", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "januari");
        test.equal(value[1], "februari");
        test.equal(value[2], "maart");
        test.equal(value[3], "april");
        test.equal(value[4], "mei");
        test.equal(value[5], "juni");
        test.equal(value[6], "juli");
        test.equal(value[7], "augustus");
        test.equal(value[8], "september");
        test.equal(value[9], "oktober");
        test.equal(value[10], "november");
        test.equal(value[11], "december");

        var fmt = new DateFmt({locale:"nl-NL", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "jan");
        test.equal(value[1], "feb");
        test.equal(value[2], "mrt");
        test.equal(value[3], "apr");
        test.equal(value[4], "mei");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "aug");
        test.equal(value[8], "sep");
        test.equal(value[9], "okt");
        test.equal(value[10], "nov");
        test.equal(value[11], "dec");

        test.done();
    },
    testMonthTranslate_pa_Guru_IN: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"pa-Guru-IN", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ਜਨਵਰੀ");
        test.equal(value[1], "ਫ਼ਰਵਰੀ");
        test.equal(value[2], "ਮਾਰਚ");
        test.equal(value[3], "ਅਪ੍ਰੈਲ");
        test.equal(value[4], "ਮਈ");
        test.equal(value[5], "ਜੂਨ");
        test.equal(value[6], "ਜੁਲਾਈ");
        test.equal(value[7], "ਅਗਸਤ");
        test.equal(value[8], "ਸਤੰਬਰ");
        test.equal(value[9], "ਅਕਤੂਬਰ");
        test.equal(value[10], "ਨਵੰਬਰ");
        test.equal(value[11], "ਦਸੰਬਰ");

        var fmt = new DateFmt({locale:"pa-Guru-IN", date:"m", length: "medium", useNative:false, timezone:"local"});

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ਜਨ");
        test.equal(value[1], "ਫ਼ਰ");
        test.equal(value[2], "ਮਾਰਚ");
        test.equal(value[3], "ਅਪ੍ਰੈ");
        test.equal(value[4], "ਮਈ");
        test.equal(value[5], "ਜੂਨ");
        test.equal(value[6], "ਜੁਲਾ");
        test.equal(value[7], "ਅਗ");
        test.equal(value[8],"ਸਤੰ");
        test.equal(value[9],  "ਅਕਤੂ");
        test.equal(value[10],"ਨਵੰ");
        test.equal(value[11],"ਦਸੰ");

        test.done();
    },
    testMonthTranslate_pl_PL: function(test) {
        test.expect(24);

        // full, long: MMMM _ StandAlone Format Exist
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"pl-PL", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "styczeń");
        test.equal(value[1], "luty");
        test.equal(value[2], "marzec");
        test.equal(value[3], "kwiecień");
        test.equal(value[4], "maj");
        test.equal(value[5], "czerwiec");
        test.equal(value[6], "lipiec");
        test.equal(value[7], "sierpień");
        test.equal(value[8], "wrzesień");
        test.equal(value[9], "październik");
        test.equal(value[10], "listopad");
        test.equal(value[11], "grudzień");

        var fmt = new DateFmt({locale:"pl-PL", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "sty");
        test.equal(value[1], "lut");
        test.equal(value[2], "mar");
        test.equal(value[3], "kwi");
        test.equal(value[4], "maj");
        test.equal(value[5], "cze");
        test.equal(value[6], "lip");
        test.equal(value[7], "sie");
        test.equal(value[8], "wrz");
        test.equal(value[9], "paź");
        test.equal(value[10], "lis");
        test.equal(value[11], "gru");

        test.done();
    },
    testMonthTranslate_pt_BR: function(test) {
        test.expect(12);

        // Same as pt-PT

        var value = [], i;
        var fmt = new DateFmt({locale:"pt-BR", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janeiro");
        test.equal(value[1], "fevereiro");
        test.equal(value[2], "março");
        test.equal(value[3], "abril");
        test.equal(value[4], "maio");
        test.equal(value[5], "junho");
        test.equal(value[6], "julho");
        test.equal(value[7], "agosto");
        test.equal(value[8], "setembro");
        test.equal(value[9], "outubro");
        test.equal(value[10], "novembro");
        test.equal(value[11], "dezembro");

        test.done();
    },
    testMonthTranslate_pt_PT: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"pt-PT", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janeiro");
        test.equal(value[1], "fevereiro");
        test.equal(value[2], "março");
        test.equal(value[3], "abril");
        test.equal(value[4], "maio");
        test.equal(value[5], "junho");
        test.equal(value[6], "julho");
        test.equal(value[7], "agosto");
        test.equal(value[8], "setembro");
        test.equal(value[9], "outubro");
        test.equal(value[10], "novembro");
        test.equal(value[11], "dezembro");

        test.done();
    },
    testMonthTranslate_ro_RO: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"ro-RO", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ianuarie");
        test.equal(value[1], "februarie");
        test.equal(value[2], "martie");
        test.equal(value[3], "aprilie");
        test.equal(value[4], "mai");
        test.equal(value[5], "iunie");
        test.equal(value[6], "iulie");
        test.equal(value[7], "august");
        test.equal(value[8], "septembrie");
        test.equal(value[9], "octombrie");
        test.equal(value[10], "noiembrie");
        test.equal(value[11], "decembrie");

        var fmt = new DateFmt({locale:"ro-RO", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ian.");
        test.equal(value[1], "feb.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "apr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "iun.");
        test.equal(value[6], "iul.");
        test.equal(value[7], "aug.");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "dec.");

        test.done();
    },
    testMonthTranslate_sr_Cyrl_RS: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"sr-Cyrl-RS", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "јануар");
        test.equal(value[1], "фебруар");
        test.equal(value[2], "март");
        test.equal(value[3], "април");
        test.equal(value[4], "мај");
        test.equal(value[5], "јун");
        test.equal(value[6], "јул");
        test.equal(value[7], "август");
        test.equal(value[8], "септембар");
        test.equal(value[9], "октобар");
        test.equal(value[10], "новембар");
        test.equal(value[11], "децембар");

        test.done();
    },
    testMonthTranslate_sr_Latn_RS: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"sr-Latn-RS", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "januar");
        test.equal(value[1], "februar");
        test.equal(value[2], "mart");
        test.equal(value[3], "april");
        test.equal(value[4], "maj");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "avgust");
        test.equal(value[8], "septembar");
        test.equal(value[9], "oktobar");
        test.equal(value[10], "novembar");
        test.equal(value[11], "decembar");

        test.done();
    },
    testMonthTranslate_ru_BY: function(test) {
        test.expect(24);

        // full, long: MMMM _ standAlone Format Exist.
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"ru-BY", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "январь");
        test.equal(value[1], "февраль");
        test.equal(value[2], "март");
        test.equal(value[3], "апрель");
        test.equal(value[4], "май");
        test.equal(value[5], "июнь");
        test.equal(value[6], "июль");
        test.equal(value[7], "август");
        test.equal(value[8], "сентябрь");
        test.equal(value[9], "октябрь");
        test.equal(value[10], "ноябрь");
        test.equal(value[11], "декабрь");

        var fmt = new DateFmt({locale:"ru-BY", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "янв.");
        test.equal(value[1], "февр.");
        test.equal(value[2], "март");
        test.equal(value[3], "апр.");
        test.equal(value[4], "май");
        test.equal(value[5], "июнь");
        test.equal(value[6], "июль");
        test.equal(value[7], "авг.");
        test.equal(value[8], "сент.");
        test.equal(value[9], "окт.");
        test.equal(value[10], "нояб.");
        test.equal(value[11], "дек.");

        test.done();
    },
    testMonthTranslate_ru_KG: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"ru-KG", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "январь");
        test.equal(value[1], "февраль");
        test.equal(value[2], "март");
        test.equal(value[3], "апрель");
        test.equal(value[4], "май");
        test.equal(value[5], "июнь");
        test.equal(value[6], "июль");
        test.equal(value[7], "август");
        test.equal(value[8], "сентябрь");
        test.equal(value[9], "октябрь");
        test.equal(value[10], "ноябрь");
        test.equal(value[11], "декабрь");

        var fmt = new DateFmt({locale:"ru-KG", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "янв.");
        test.equal(value[1], "февр.");
        test.equal(value[2], "март");
        test.equal(value[3], "апр.");
        test.equal(value[4], "май");
        test.equal(value[5], "июнь");
        test.equal(value[6], "июль");
        test.equal(value[7], "авг.");
        test.equal(value[8], "сент.");
        test.equal(value[9], "окт.");
        test.equal(value[10], "нояб.");
        test.equal(value[11], "дек.");

        test.done();
    },
    testMonthTranslate_ru_KZ: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"ru-KZ", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "январь");
        test.equal(value[1], "февраль");
        test.equal(value[2], "март");
        test.equal(value[3], "апрель");
        test.equal(value[4], "май");
        test.equal(value[5], "июнь");
        test.equal(value[6], "июль");
        test.equal(value[7], "август");
        test.equal(value[8], "сентябрь");
        test.equal(value[9], "октябрь");
        test.equal(value[10], "ноябрь");
        test.equal(value[11], "декабрь");

        var fmt = new DateFmt({locale:"ru-KZ", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "янв.");
        test.equal(value[1], "февр.");
        test.equal(value[2], "март");
        test.equal(value[3], "апр.");
        test.equal(value[4], "май");
        test.equal(value[5], "июнь");
        test.equal(value[6], "июль");
        test.equal(value[7], "авг.");
        test.equal(value[8], "сент.");
        test.equal(value[9], "окт.");
        test.equal(value[10], "нояб.");
        test.equal(value[11], "дек.");

        test.done();
    },
    testMonthTranslate_ru_GE: function(test) {
        test.expect(12);

        // Same as ru-RU

        var value = [], i;
        var fmt = new DateFmt({locale:"ru-GE", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "январь");
        test.equal(value[1], "февраль");
        test.equal(value[2], "март");
        test.equal(value[3], "апрель");
        test.equal(value[4], "май");
        test.equal(value[5], "июнь");
        test.equal(value[6], "июль");
        test.equal(value[7], "август");
        test.equal(value[8], "сентябрь");
        test.equal(value[9], "октябрь");
        test.equal(value[10], "ноябрь");
        test.equal(value[11], "декабрь");

        test.done();
    },
    testMonthTranslate_ru_RU: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"ru-RU", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "январь");
        test.equal(value[1], "февраль");
        test.equal(value[2], "март");
        test.equal(value[3], "апрель");
        test.equal(value[4], "май");
        test.equal(value[5], "июнь");
        test.equal(value[6], "июль");
        test.equal(value[7], "август");
        test.equal(value[8], "сентябрь");
        test.equal(value[9], "октябрь");
        test.equal(value[10], "ноябрь");
        test.equal(value[11], "декабрь");

        var fmt = new DateFmt({locale:"ru-RU", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "янв.");
        test.equal(value[1], "февр.");
        test.equal(value[2], "март");
        test.equal(value[3], "апр.");
        test.equal(value[4], "май");
        test.equal(value[5], "июнь");
        test.equal(value[6], "июль");
        test.equal(value[7], "авг.");
        test.equal(value[8], "сент.");
        test.equal(value[9], "окт.");
        test.equal(value[10], "нояб.");
        test.equal(value[11], "дек.");

        test.done();
    },
    testMonthTranslate_ru_UA: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"ru-UA", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "январь");
        test.equal(value[1], "февраль");
        test.equal(value[2], "март");
        test.equal(value[3], "апрель");
        test.equal(value[4], "май");
        test.equal(value[5], "июнь");
        test.equal(value[6], "июль");
        test.equal(value[7], "август");
        test.equal(value[8], "сентябрь");
        test.equal(value[9], "октябрь");
        test.equal(value[10], "ноябрь");
        test.equal(value[11], "декабрь");

        var fmt = new DateFmt({locale:"ru-UA", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "янв.");
        test.equal(value[1], "февр.");
        test.equal(value[2], "март");
        test.equal(value[3], "апр.");
        test.equal(value[4], "май");
        test.equal(value[5], "июнь");
        test.equal(value[6], "июль");
        test.equal(value[7], "авг.");
        test.equal(value[8], "сент.");
        test.equal(value[9], "окт.");
        test.equal(value[10], "нояб.");
        test.equal(value[11], "дек.");

        test.done();
    },
    testMonthTranslate_sk_SK: function(test) {
        test.expect(12);

        // full, long: MMMM _ standAlone Format Exist.
        // medium: M
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"sk-SK", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "január");
        test.equal(value[1], "február");
        test.equal(value[2], "marec");
        test.equal(value[3], "apríl");
        test.equal(value[4], "máj");
        test.equal(value[5], "jún");
        test.equal(value[6], "júl");
        test.equal(value[7], "august");
        test.equal(value[8], "september");
        test.equal(value[9], "október");
        test.equal(value[10], "november");
        test.equal(value[11], "december");

        test.done();
    },
    testMonthTranslate_sl_SI: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"sl-SI", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "januar");
        test.equal(value[1], "februar");
        test.equal(value[2], "marec");
        test.equal(value[3], "april");
        test.equal(value[4], "maj");
        test.equal(value[5], "junij");
        test.equal(value[6], "julij");
        test.equal(value[7], "avgust");
        test.equal(value[8], "september");
        test.equal(value[9], "oktober");
        test.equal(value[10], "november");
        test.equal(value[11], "december");

        var fmt = new DateFmt({locale:"sl-SI", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "jan.");
        test.equal(value[1], "feb.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "apr.");
        test.equal(value[4], "maj");
        test.equal(value[5], "jun.");
        test.equal(value[6], "jul.");
        test.equal(value[7], "avg.");
        test.equal(value[8], "sep.");
        test.equal(value[9], "okt.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "dec.");

        test.done();
    },
    testMonthTranslate_sq_AL: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"sq-AL", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janar");
        test.equal(value[1], "shkurt");
        test.equal(value[2], "mars");
        test.equal(value[3], "prill");
        test.equal(value[4], "maj");
        test.equal(value[5], "qershor");
        test.equal(value[6], "korrik");
        test.equal(value[7], "gusht");
        test.equal(value[8], "shtator");
        test.equal(value[9], "tetor");
        test.equal(value[10], "nëntor");
        test.equal(value[11], "dhjetor");

        var fmt = new DateFmt({locale:"sq-AL", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "jan");
        test.equal(value[1], "shk");
        test.equal(value[2], "mar");
        test.equal(value[3], "pri");
        test.equal(value[4], "maj");
        test.equal(value[5], "qer");
        test.equal(value[6], "korr");
        test.equal(value[7], "gush");
        test.equal(value[8], "sht");
        test.equal(value[9], "tet");
        test.equal(value[10], "nën");
        test.equal(value[11], "dhj");

        test.done();
    },
    testMonthTranslate_sq_ME: function(test) {
        test.expect(24);

        // Same as sq-AL

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"sq-ME", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janar");
        test.equal(value[1], "shkurt");
        test.equal(value[2], "mars");
        test.equal(value[3], "prill");
        test.equal(value[4], "maj");
        test.equal(value[5], "qershor");
        test.equal(value[6], "korrik");
        test.equal(value[7], "gusht");
        test.equal(value[8], "shtator");
        test.equal(value[9], "tetor");
        test.equal(value[10], "nëntor");
        test.equal(value[11], "dhjetor");

        var fmt = new DateFmt({locale:"sq-ME", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "jan");
        test.equal(value[1], "shk");
        test.equal(value[2], "mar");
        test.equal(value[3], "pri");
        test.equal(value[4], "maj");
        test.equal(value[5], "qer");
        test.equal(value[6], "korr");
        test.equal(value[7], "gush");
        test.equal(value[8], "sht");
        test.equal(value[9], "tet");
        test.equal(value[10], "nën");
        test.equal(value[11], "dhj");

        test.done();
    },
    testMonthTranslate_sv_FI: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"sv-FI", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "januari");
        test.equal(value[1], "februari");
        test.equal(value[2], "mars");
        test.equal(value[3], "april");
        test.equal(value[4], "maj");
        test.equal(value[5], "juni");
        test.equal(value[6], "juli");
        test.equal(value[7], "augusti");
        test.equal(value[8], "september");
        test.equal(value[9], "oktober");
        test.equal(value[10], "november");
        test.equal(value[11], "december");

        var fmt = new DateFmt({locale:"sv-FI", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "jan.");
        test.equal(value[1], "feb.");
        test.equal(value[2], "mars");
        test.equal(value[3], "apr.");
        test.equal(value[4], "maj");
        test.equal(value[5], "juni");
        test.equal(value[6], "juli");
        test.equal(value[7], "aug.");
        test.equal(value[8], "sep.");
        test.equal(value[9], "okt.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "dec.");

        test.done();
    },
    testMonthTranslate_sv_SE: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"sv-SE", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "januari");
        test.equal(value[1], "februari");
        test.equal(value[2], "mars");
        test.equal(value[3], "april");
        test.equal(value[4], "maj");
        test.equal(value[5], "juni");
        test.equal(value[6], "juli");
        test.equal(value[7], "augusti");
        test.equal(value[8], "september");
        test.equal(value[9], "oktober");
        test.equal(value[10], "november");
        test.equal(value[11], "december");

        var fmt = new DateFmt({locale:"sv-SE", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "jan.");
        test.equal(value[1], "feb.");
        test.equal(value[2], "mars");
        test.equal(value[3], "apr.");
        test.equal(value[4], "maj");
        test.equal(value[5], "juni");
        test.equal(value[6], "juli");
        test.equal(value[7], "aug.");
        test.equal(value[8], "sep.");
        test.equal(value[9], "okt.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "dec.");

        test.done();
    },
    testMonthTranslate_ta_IN: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ta-IN", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0],"ஜனவரி" );
        test.equal(value[1], "பிப்ரவரி");
        test.equal(value[2], "மார்ச்");
        test.equal(value[3], "ஏப்ரல்");
        test.equal(value[4], "மே");
        test.equal(value[5], "ஜூன்");
        test.equal(value[6], "ஜூலை");
        test.equal(value[7], "ஆகஸ்ட்");
        test.equal(value[8], "செப்டம்பர்");
        test.equal(value[9], "அக்டோபர்");
        test.equal(value[10], "நவம்பர்");
        test.equal(value[11], "டிசம்பர்");

        var fmt = new DateFmt({locale:"ta-IN", date:"m", length: "medium", useNative:false, timezone:"local"});

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0],"ஜன.");
        test.equal(value[1],"பிப்.");
        test.equal(value[2], "மார்.");
        test.equal(value[3], "ஏப்.");
        test.equal(value[4], "மே");
        test.equal(value[5], "ஜூன்");
        test.equal(value[6], "ஜூலை");
        test.equal(value[7], "ஆக.");
        test.equal(value[8], "செப்.");
        test.equal(value[9], "அக்.");
        test.equal(value[10],"நவ.");
        test.equal(value[11], "டிச.");

        test.done();
    },
    testMonthTranslate_te_IN: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"te-IN", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0],"జనవరి");
        test.equal(value[1], "ఫిబ్రవరి");
        test.equal(value[2],"మార్చి");
        test.equal(value[3], "ఏప్రిల్");
        test.equal(value[4], "మే");
        test.equal(value[5], "జూన్");
        test.equal(value[6], "జులై");
        test.equal(value[7], "ఆగస్టు");
        test.equal(value[8],"సెప్టెంబర్");
        test.equal(value[9], "అక్టోబర్");
        test.equal(value[10], "నవంబర్");
        test.equal(value[11], "డిసెంబర్");

        var fmt = new DateFmt({locale:"te-IN", date:"m", length: "medium", useNative:false, timezone:"local"});

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0],"జన");
        test.equal(value[1],"ఫిబ్ర");
        test.equal(value[2], "మార్చి");
        test.equal(value[3],"ఏప్రి");
        test.equal(value[4], "మే");
        test.equal(value[5], "జూన్");
        test.equal(value[6],"జులై");
        test.equal(value[7],  "ఆగ");
        test.equal(value[8], "సెప్టెం");
        test.equal(value[9], "అక్టో");
        test.equal(value[10],"నవం");
        test.equal(value[11],"డిసెం" );
        test.done();
    },
    testMonthTranslate_th_TH: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"th-TH", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"thaisolar"}));
        }
        test.equal(value[0], "มกราคม");
        test.equal(value[1], "กุมภาพันธ์");
        test.equal(value[2], "มีนาคม");
        test.equal(value[3], "เมษายน");
        test.equal(value[4], "พฤษภาคม");
        test.equal(value[5], "มิถุนายน");
        test.equal(value[6], "กรกฎาคม");
        test.equal(value[7], "สิงหาคม");
        test.equal(value[8], "กันยายน");
        test.equal(value[9], "ตุลาคม");
        test.equal(value[10], "พฤศจิกายน");
        test.equal(value[11], "ธันวาคม");

        var fmt = new DateFmt({locale:"th-TH", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"thaisolar"}));
        }
        test.equal(value[0], "ม.ค.");
        test.equal(value[1], "ก.พ.");
        test.equal(value[2], "มี.ค.");
        test.equal(value[3], "เม.ย.");
        test.equal(value[4], "พ.ค.");
        test.equal(value[5], "มิ.ย.");
        test.equal(value[6], "ก.ค.");
        test.equal(value[7], "ส.ค.");
        test.equal(value[8], "ก.ย.");
        test.equal(value[9], "ต.ค.");
        test.equal(value[10], "พ.ย.");
        test.equal(value[11], "ธ.ค.");
        test.done();
    },
    testMonthTranslate_tr_AM: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"tr-AM", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Ocak");
        test.equal(value[1], "Şubat");
        test.equal(value[2], "Mart");
        test.equal(value[3], "Nisan");
        test.equal(value[4], "Mayıs");
        test.equal(value[5], "Haziran");
        test.equal(value[6], "Temmuz");
        test.equal(value[7], "Ağustos");
        test.equal(value[8], "Eylül");
        test.equal(value[9], "Ekim");
        test.equal(value[10], "Kasım");
        test.equal(value[11], "Aralık");

        var fmt = new DateFmt({locale:"tr-AM", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Oca");
        test.equal(value[1], "Şub");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Nis");
        test.equal(value[4], "May");
        test.equal(value[5], "Haz");
        test.equal(value[6], "Tem");
        test.equal(value[7], "Ağu");
        test.equal(value[8], "Eyl");
        test.equal(value[9], "Eki");
        test.equal(value[10], "Kas");
        test.equal(value[11], "Ara");

        test.done();
    },
    testMonthTranslate_tr_AZ: function(test) {
        test.expect(12);

        // Same as tr-TR

        var value = [], i;
        var fmt = new DateFmt({locale:"tr-AZ", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Ocak");
        test.equal(value[1], "Şubat");
        test.equal(value[2], "Mart");
        test.equal(value[3], "Nisan");
        test.equal(value[4], "Mayıs");
        test.equal(value[5], "Haziran");
        test.equal(value[6], "Temmuz");
        test.equal(value[7], "Ağustos");
        test.equal(value[8], "Eylül");
        test.equal(value[9], "Ekim");
        test.equal(value[10], "Kasım");
        test.equal(value[11], "Aralık");

        test.done();
    },
    testMonthTranslate_tr_CY: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"tr-CY", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Ocak");
        test.equal(value[1], "Şubat");
        test.equal(value[2], "Mart");
        test.equal(value[3], "Nisan");
        test.equal(value[4], "Mayıs");
        test.equal(value[5], "Haziran");
        test.equal(value[6], "Temmuz");
        test.equal(value[7], "Ağustos");
        test.equal(value[8], "Eylül");
        test.equal(value[9], "Ekim");
        test.equal(value[10], "Kasım");
        test.equal(value[11], "Aralık");

        var fmt = new DateFmt({locale:"tr-CY", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Oca");
        test.equal(value[1], "Şub");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Nis");
        test.equal(value[4], "May");
        test.equal(value[5], "Haz");
        test.equal(value[6], "Tem");
        test.equal(value[7], "Ağu");
        test.equal(value[8], "Eyl");
        test.equal(value[9], "Eki");
        test.equal(value[10], "Kas");
        test.equal(value[11], "Ara");

        test.done();
    },
    testMonthTranslate_tr_TR: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"tr-TR", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Ocak");
        test.equal(value[1], "Şubat");
        test.equal(value[2], "Mart");
        test.equal(value[3], "Nisan");
        test.equal(value[4], "Mayıs");
        test.equal(value[5], "Haziran");
        test.equal(value[6], "Temmuz");
        test.equal(value[7], "Ağustos");
        test.equal(value[8], "Eylül");
        test.equal(value[9], "Ekim");
        test.equal(value[10], "Kasım");
        test.equal(value[11], "Aralık");

        var fmt = new DateFmt({locale:"tr-TR", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Oca");
        test.equal(value[1], "Şub");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Nis");
        test.equal(value[4], "May");
        test.equal(value[5], "Haz");
        test.equal(value[6], "Tem");
        test.equal(value[7], "Ağu");
        test.equal(value[8], "Eyl");
        test.equal(value[9], "Eki");
        test.equal(value[10], "Kas");
        test.equal(value[11], "Ara");

        test.done();
    },
    testMonthTranslate_uk_UA: function(test) {
        test.expect(24);

        // full, long: MMMM _ standAlone Format Exist
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"uk-UA", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "січень");
        test.equal(value[1], "лютий");
        test.equal(value[2], "березень");
        test.equal(value[3], "квітень");
        test.equal(value[4], "травень");
        test.equal(value[5], "червень");
        test.equal(value[6], "липень");
        test.equal(value[7], "серпень");
        test.equal(value[8], "вересень");
        test.equal(value[9], "жовтень");
        test.equal(value[10], "листопад");
        test.equal(value[11], "грудень");

        var fmt = new DateFmt({locale:"uk-UA", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "січ.");
        test.equal(value[1], "лют.");
        test.equal(value[2], "бер.");
        test.equal(value[3], "квіт.");
        test.equal(value[4], "трав.");
        test.equal(value[5], "черв.");
        test.equal(value[6], "лип.");
        test.equal(value[7], "серп.");
        test.equal(value[8], "вер.");
        test.equal(value[9], "жовт.");
        test.equal(value[10], "лист.");
        test.equal(value[11], "груд.");

        test.done();
    },
    testMonthTranslate_ur_IN: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ur-IN", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "جنوری");
        test.equal(value[1],"فروری" );
        test.equal(value[2], "مارچ");
        test.equal(value[3],"اپریل");
        test.equal(value[4], "مئی");
        test.equal(value[5],"جون");
        test.equal(value[6],"جولائی");
        test.equal(value[7],"اگست");
        test.equal(value[8],"ستمبر");
        test.equal(value[9],"اکتوبر");
        test.equal(value[10],"نومبر");
        test.equal(value[11],"دسمبر");

        var fmt = new DateFmt({locale:"ur-IN", date:"m", length: "medium", useNative:false, timezone:"local"});

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0],"جنوری");
        test.equal(value[1], "فروری");
        test.equal(value[2], "مارچ");
        test.equal(value[3],"اپریل");
        test.equal(value[4], "مئی" );
        test.equal(value[5],"جون");
        test.equal(value[6], "جولائی");
        test.equal(value[7],"اگست" );
        test.equal(value[8],"ستمبر");
        test.equal(value[9],"اکتوبر");
        test.equal(value[10],"نومبر");
        test.equal(value[11],"دسمبر");

        test.done();
    },
    testMonthTranslate_uz_Latn_UZ: function(test) {
        test.expect(24);

        // full, long: MMMM_ StandAlone Format Exist.
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"uz-Latn-UZ", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Yanvar");
        test.equal(value[1], "Fevral");
        test.equal(value[2], "Mart");
        test.equal(value[3], "Aprel");
        test.equal(value[4], "May");
        test.equal(value[5], "Iyun");
        test.equal(value[6], "Iyul");
        test.equal(value[7], "Avgust");
        test.equal(value[8], "Sentabr");
        test.equal(value[9], "Oktabr");
        test.equal(value[10], "Noyabr");
        test.equal(value[11], "Dekabr");

        var fmt = new DateFmt({locale:"uz-Latn-UZ", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Yan");
        test.equal(value[1], "Fev");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Apr");
        test.equal(value[4], "May");
        test.equal(value[5], "Iyn");
        test.equal(value[6], "Iyl");
        test.equal(value[7], "Avg");
        test.equal(value[8], "Sen");
        test.equal(value[9], "Okt");
        test.equal(value[10], "Noy");
        test.equal(value[11], "Dek");

        test.done();
    },
    testMonthTranslate_vi_VN: function(test) {
        test.expect(24);

        // full, long: MMMM _ StandAlone Format Exist.
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"vi-VN", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Tháng 1");
        test.equal(value[1], "Tháng 2");
        test.equal(value[2], "Tháng 3");
        test.equal(value[3], "Tháng 4");
        test.equal(value[4], "Tháng 5");
        test.equal(value[5], "Tháng 6");
        test.equal(value[6], "Tháng 7");
        test.equal(value[7], "Tháng 8");
        test.equal(value[8], "Tháng 9");
        test.equal(value[9], "Tháng 10");
        test.equal(value[10], "Tháng 11");
        test.equal(value[11], "Tháng 12");

        var fmt = new DateFmt({locale:"vi-VN", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Tháng 1");
        test.equal(value[1], "Tháng 2");
        test.equal(value[2], "Tháng 3");
        test.equal(value[3], "Tháng 4");
        test.equal(value[4], "Tháng 5");
        test.equal(value[5], "Tháng 6");
        test.equal(value[6], "Tháng 7");
        test.equal(value[7], "Tháng 8");
        test.equal(value[8], "Tháng 9");
        test.equal(value[9], "Tháng 10");
        test.equal(value[10], "Tháng 11");
        test.equal(value[11], "Tháng 12");
        test.done();
    },
    testMonthTranslate_zh_Hans_CN: function(test) {
        test.expect(12);

        var value = [], i;
        for (i=0; i < 12; i++) {
            var fmt = new DateFmt({locale:"zh-Hans-CN", date:"m", length: "full", useNative:false, timezone:"local"})
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "1月");
        test.equal(value[1], "2月");
        test.equal(value[2], "3月");
        test.equal(value[3], "4月");
        test.equal(value[4], "5月");
        test.equal(value[5], "6月");
        test.equal(value[6], "7月");
        test.equal(value[7], "8月");
        test.equal(value[8], "9月");
        test.equal(value[9], "10月");
        test.equal(value[10], "11月");
        test.equal(value[11], "12月");

        test.done();
    },
    testMonthTranslate_zh_Hant_HK: function(test) {
        test.expect(12);

        var value = [], i;
        var fmt = new DateFmt({locale:"zh-Hant-HK", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "1月");
        test.equal(value[1], "2月");
        test.equal(value[2], "3月");
        test.equal(value[3], "4月");
        test.equal(value[4], "5月");
        test.equal(value[5], "6月");
        test.equal(value[6], "7月");
        test.equal(value[7], "8月");
        test.equal(value[8], "9月");
        test.equal(value[9], "10月");
        test.equal(value[10], "11月");
        test.equal(value[11], "12月");

        test.done();
    },
    testMonthTranslate_zh_Hant_TW: function(test) {
        test.expect(12);

        var value = [], i;
        var fmt = new DateFmt({locale:"zh-Hant-TW", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "1月");
        test.equal(value[1], "2月");
        test.equal(value[2], "3月");
        test.equal(value[3], "4月");
        test.equal(value[4], "5月");
        test.equal(value[5], "6月");
        test.equal(value[6], "7月");
        test.equal(value[7], "8月");
        test.equal(value[8], "9月");
        test.equal(value[9], "10月");
        test.equal(value[10], "11月");
        test.equal(value[11], "12月");

        test.done();
    },
    testMonthTranslate_en_GE: function(test) {
        test.expect(12);

        // Same as en-US

        var value = [], i;
        var fmt = new DateFmt({locale:"en-GE", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        test.done();
    },
    testMonthTranslate_en_CN: function(test) {
        test.expect(12);

        // Same as en-US

        var value = [], i;
        var fmt = new DateFmt({locale:"en-CN", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        test.done();
    },
    testMonthTranslate_en_MX: function(test) {
        test.expect(12);

        // Same as en-US

        var value = [], i;
        var fmt = new DateFmt({locale:"en-MX", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        test.done();
    },
    testMonthTranslate_en_TW: function(test) {
        test.expect(12);

        // Same as en-US

        var value = [], i;
        var fmt = new DateFmt({locale:"en-TW", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        test.done();
    },
    testMonthTranslate_mn_MN: function(test) {
        test.expect(12);

        // full, long: MM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"mn-MN", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "1-р сар");
        test.equal(value[1], "2-р сар");
        test.equal(value[2], "3-р сар");
        test.equal(value[3], "4-р сар");
        test.equal(value[4], "5-р сар");
        test.equal(value[5], "6-р сар");
        test.equal(value[6], "7-р сар");
        test.equal(value[7], "8-р сар");
        test.equal(value[8], "9-р сар");
        test.equal(value[9], "10-р сар");
        test.equal(value[10], "11-р сар");
        test.equal(value[11], "12-р сар");

        test.done();
    },
    testMonthTranslate_es_CA: function(test) {
        test.expect(12);

        // Same as es-ES

        var value = [], i;
        var fmt = new DateFmt({locale:"es-CA", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        test.done();
    },
    testMonthTranslate_af_ZA: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"af-ZA", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Januarie");
        test.equal(value[1], "Februarie");
        test.equal(value[2], "Maart");
        test.equal(value[3], "April");
        test.equal(value[4], "Mei");
        test.equal(value[5], "Junie");
        test.equal(value[6], "Julie");
        test.equal(value[7], "Augustus");
        test.equal(value[8], "September");
        test.equal(value[9], "Oktober");
        test.equal(value[10], "November");
        test.equal(value[11], "Desember");

        var fmt = new DateFmt({locale:"af-ZA", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Jan.");
        test.equal(value[1], "Feb.");
        test.equal(value[2], "Mrt.");
        test.equal(value[3], "Apr.");
        test.equal(value[4], "Mei");
        test.equal(value[5], "Jun.");
        test.equal(value[6], "Jul.");
        test.equal(value[7], "Aug.");
        test.equal(value[8], "Sep.");
        test.equal(value[9], "Okt.");
        test.equal(value[10], "Nov.");
        test.equal(value[11], "Des.");

        test.done();
    },
    testMonthTranslate_am_ET: function(test) {
        test.expect(26);

        // full, long: MMMM
        // medium: MMM
        // short: MM
        var value = [], i;
        var fmt = new DateFmt({locale:"am-ET", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 13; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"ethiopic"}));
        }
        test.equal(value[0], "መስከረም");
        test.equal(value[1], "ጥቅምት");
        test.equal(value[2], "ኅዳር");
        test.equal(value[3], "ታኅሣሥ");
        test.equal(value[4], "ጥር");
        test.equal(value[5], "የካቲት");
        test.equal(value[6], "መጋቢት");
        test.equal(value[7], "ሚያዝያ");
        test.equal(value[8], "ግንቦት");
        test.equal(value[9], "ሰኔ");
        test.equal(value[10], "ሐምሌ");
        test.equal(value[11], "ነሐሴ");
        test.equal(value[12], "ጳጉሜን");

        var fmt = new DateFmt({locale:"am-ET", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 13; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"ethiopic"}));
        }
        test.equal(value[0], "መስከረም");
        test.equal(value[1], "ጥቅምት");
        test.equal(value[2], "ኅዳር");
        test.equal(value[3], "ታኅሣሥ");
        test.equal(value[4], "ጥር");
        test.equal(value[5], "የካቲት");
        test.equal(value[6], "መጋቢት");
        test.equal(value[7], "ሚያዝያ");
        test.equal(value[8], "ግንቦት");
        test.equal(value[9], "ሰኔ");
        test.equal(value[10], "ሐምሌ");
        test.equal(value[11], "ነሐሴ");
        test.equal(value[12], "ጳጉሜን");
        test.done();
    },
    testMonthTranslate_ha_Latn_NG: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ha-Latn-NG", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Janairu");
        test.equal(value[1], "Faburairu");
        test.equal(value[2], "Maris");
        test.equal(value[3], "Afirilu");
        test.equal(value[4], "Mayu");
        test.equal(value[5], "Yuni");
        test.equal(value[6], "Yuli");
        test.equal(value[7], "Agusta");
        test.equal(value[8], "Satumba");
        test.equal(value[9], "Oktoba");
        test.equal(value[10], "Nuwamba");
        test.equal(value[11], "Disamba");

        var fmt = new DateFmt({locale:"ha-Latn-NG", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Jan");
        test.equal(value[1], "Fab");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Afi");
        test.equal(value[4], "May");
        test.equal(value[5], "Yun");
        test.equal(value[6], "Yul");
        test.equal(value[7], "Agu");
        test.equal(value[8], "Sat");
        test.equal(value[9], "Okt");
        test.equal(value[10], "Nuw");
        test.equal(value[11], "Dis");

        test.done();
    },
    testMonthTranslate_or_IN: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"or-IN", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ଜାନୁଆରୀ");
        test.equal(value[1], "ଫେବୃଆରୀ");
        test.equal(value[2], "ମାର୍ଚ୍ଚ");
        test.equal(value[3], "ଅପ୍ରେଲ");
        test.equal(value[4],"ମଇ");
        test.equal(value[5], "ଜୁନ");
        test.equal(value[6], "ଜୁଲାଇ");
        test.equal(value[7], "ଅଗଷ୍ଟ");
        test.equal(value[8], "ସେପ୍ଟେମ୍ବର");
        test.equal(value[9], "ଅକ୍ଟୋବର");
        test.equal(value[10], "ନଭେମ୍ବର");
        test.equal(value[11], "ଡିସେମ୍ବର");

        var fmt = new DateFmt({locale:"or-IN", date:"m", length: "medium", useNative:false, timezone:"local"});

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0],"ଜାନୁଆରୀ");
        test.equal(value[1], "ଫେବୃଆରୀ");
        test.equal(value[2],"ମାର୍ଚ୍ଚ");
        test.equal(value[3],"ଅପ୍ରେଲ");
        test.equal(value[4], "ମଇ");
        test.equal(value[5],"ଜୁନ");
        test.equal(value[6], "ଜୁଲାଇ");
        test.equal(value[7],"ଅଗଷ୍ଟ");
        test.equal(value[8], "ସେପ୍ଟେମ୍ବର");
        test.equal(value[9],"ଅକ୍ଟୋବର");
        test.equal(value[10], "ନଭେମ୍ବର");
        test.equal(value[11],"ଡିସେମ୍ବର");

        test.done();
    },
    testMonthTranslate_az_Latn_AZ: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"az-Latn-AZ", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'yanvar');
        test.equal(value[1], "fevral");
        test.equal(value[2], 'mart');
        test.equal(value[3], "aprel");
        test.equal(value[4], "may");
        test.equal(value[5], "iyun");
        test.equal(value[6], "iyul");
        test.equal(value[7], "avqust");
        test.equal(value[8], "sentyabr");
        test.equal(value[9], "oktyabr");
        test.equal(value[10], "noyabr");
        test.equal(value[11], 'dekabr');

        var fmt = new DateFmt({locale:"az-Latn-AZ", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "yan");
        test.equal(value[1], "fev");
        test.equal(value[2], "mar");
        test.equal(value[3], "apr");
        test.equal(value[4], "may");
        test.equal(value[5], "iyn");
        test.equal(value[6], "iyl");
        test.equal(value[7], "avq");
        test.equal(value[8], "sen");
        test.equal(value[9], "okt");
        test.equal(value[10], "noy");
        test.equal(value[11], "dek");

        test.done();
    },
    testMonthTranslate_km_KH: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"km-KH", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "មករា");
        test.equal(value[1], "កុម្ភៈ");
        test.equal(value[2], "មីនា");
        test.equal(value[3], "មេសា");
        test.equal(value[4], "ឧសភា");
        test.equal(value[5], "មិថុនា");
        test.equal(value[6], "កក្កដា");
        test.equal(value[7], "សីហា");
        test.equal(value[8], "កញ្ញា");
        test.equal(value[9], "តុលា");
        test.equal(value[10], "វិច្ឆិកា");
        test.equal(value[11], "ធ្នូ");

        var fmt = new DateFmt({locale:"km-KH", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "មករា");
        test.equal(value[1], "កុម្ភៈ");
        test.equal(value[2], "មីនា");
        test.equal(value[3], "មេសា");
        test.equal(value[4], "ឧសភា");
        test.equal(value[5], "មិថុនា");
        test.equal(value[6], "កក្កដា");
        test.equal(value[7], "សីហា");
        test.equal(value[8], "កញ្ញា");
        test.equal(value[9], "តុលា");
        test.equal(value[10], "វិច្ឆិកា");
        test.equal(value[11], "ធ្នូ");

        test.done();
    },
    testMonthTranslate_si_LK: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"si-LK", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ජනවාරි");
        test.equal(value[1], "පෙබරවාරි");
        test.equal(value[2], "මාර්තු");
        test.equal(value[3], "අප්‍රේල්");
        test.equal(value[4], "මැයි");
        test.equal(value[5], "ජූනි");
        test.equal(value[6], "ජූලි");
        test.equal(value[7], "අගෝස්තු");
        test.equal(value[8], "සැප්තැම්බර්");
        test.equal(value[9],"ඔක්තෝබර්");
        test.equal(value[10], "නොවැම්බර්");
        test.equal(value[11], "දෙසැම්බර්");

        var fmt = new DateFmt({locale:"si-LK", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ජන");
        test.equal(value[1], "පෙබ");
        test.equal(value[2], "මාර්");
        test.equal(value[3], "අප්‍රේල්");
        test.equal(value[4], "මැයි");
        test.equal(value[5], "ජූනි");
        test.equal(value[6], "ජූලි");
        test.equal(value[7], "අගෝ");
        test.equal(value[8], "සැප්");
        test.equal(value[9], "ඔක්");
        test.equal(value[10], "නොවැ");
        test.equal(value[11], "දෙසැ");

        test.done();
    },
    testMonthTranslate_ar_AE: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ar-AE", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "يناير");
        test.equal(value[1], "فبراير");
        test.equal(value[2], "مارس");
        test.equal(value[3], "أبريل");
        test.equal(value[4], "مايو");
        test.equal(value[5], "يونيو");
        test.equal(value[6], "يوليو");
        test.equal(value[7], "أغسطس");
        test.equal(value[8], "سبتمبر");
        test.equal(value[9], "أكتوبر");
        test.equal(value[10], "نوفمبر");
        test.equal(value[11], "ديسمبر");

        test.done();
    },
    testMonthTranslate_ar_BH: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ar-BH", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "يناير");
        test.equal(value[1], "فبراير");
        test.equal(value[2], "مارس");
        test.equal(value[3], "أبريل");
        test.equal(value[4], "مايو");
        test.equal(value[5], "يونيو");
        test.equal(value[6], "يوليو");
        test.equal(value[7], "أغسطس");
        test.equal(value[8], "سبتمبر");
        test.equal(value[9], "أكتوبر");
        test.equal(value[10], "نوفمبر");
        test.equal(value[11], "ديسمبر");

        test.done();
    },
    testMonthTranslate_ar_DJ: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ar-DJ", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "يناير");
        test.equal(value[1], "فبراير");
        test.equal(value[2], "مارس");
        test.equal(value[3], "أبريل");
        test.equal(value[4], "مايو");
        test.equal(value[5], "يونيو");
        test.equal(value[6], "يوليو");
        test.equal(value[7], "أغسطس");
        test.equal(value[8], "سبتمبر");
        test.equal(value[9], "أكتوبر");
        test.equal(value[10], "نوفمبر");
        test.equal(value[11], "ديسمبر");

        test.done();
    },
    testMonthTranslate_ar_DZ: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ar-DZ", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "جانفي");
        test.equal(value[1], "فيفري");
        test.equal(value[2], "مارس");
        test.equal(value[3], "أفريل");
        test.equal(value[4], "ماي");
        test.equal(value[5], "جوان");
        test.equal(value[6], "جويلية");
        test.equal(value[7], "أوت");
        test.equal(value[8], "سبتمبر");
        test.equal(value[9], "أكتوبر");
        test.equal(value[10], "نوفمبر");
        test.equal(value[11], "ديسمبر");

        test.done();
    },
    testMonthTranslate_ar_JO: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ar-JO", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "كانون الثاني");
        test.equal(value[1], "شباط");
        test.equal(value[2], "آذار");
        test.equal(value[3], "نيسان");
        test.equal(value[4], "أيار");
        test.equal(value[5], "حزيران");
        test.equal(value[6], "تموز");
        test.equal(value[7], "آب");
        test.equal(value[8], "أيلول");
        test.equal(value[9], "تشرين الأول");
        test.equal(value[10], "تشرين الثاني");
        test.equal(value[11], "كانون الأول");

        test.done();
    },
    testMonthTranslate_ar_KW: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ar-KW", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "يناير");
        test.equal(value[1], "فبراير");
        test.equal(value[2], "مارس");
        test.equal(value[3], "أبريل");
        test.equal(value[4], "مايو");
        test.equal(value[5], "يونيو");
        test.equal(value[6], "يوليو");
        test.equal(value[7], "أغسطس");
        test.equal(value[8], "سبتمبر");
        test.equal(value[9], "أكتوبر");
        test.equal(value[10], "نوفمبر");
        test.equal(value[11], "ديسمبر");

        test.done();
    },
    testMonthTranslate_ar_LB: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ar-LB", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "كانون الثاني");
        test.equal(value[1], "شباط");
        test.equal(value[2], "آذار");
        test.equal(value[3], "نيسان");
        test.equal(value[4], "أيار");
        test.equal(value[5], "حزيران");
        test.equal(value[6], "تموز");
        test.equal(value[7], "آب");
        test.equal(value[8], "أيلول");
        test.equal(value[9], "تشرين الأول");
        test.equal(value[10], "تشرين الثاني");
        test.equal(value[11],"كانون الأول");

        test.done();
    },
    testMonthTranslate_ar_LY: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ar-LY", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "يناير");
        test.equal(value[1], "فبراير");
        test.equal(value[2], "مارس");
        test.equal(value[3], "أبريل");
        test.equal(value[4], "مايو");
        test.equal(value[5], "يونيو");
        test.equal(value[6], "يوليو");
        test.equal(value[7], "أغسطس");
        test.equal(value[8], "سبتمبر");
        test.equal(value[9], "أكتوبر");
        test.equal(value[10], "نوفمبر");
        test.equal(value[11], "ديسمبر");

        test.done();
    },
    testMonthTranslate_ar_MR: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ar-MR", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "يناير");
        test.equal(value[1], "فبراير");
        test.equal(value[2], "مارس");
        test.equal(value[3], "إبريل");
        test.equal(value[4], "مايو");
        test.equal(value[5], "يونيو");
        test.equal(value[6], "يوليو");
        test.equal(value[7], "أغشت");
        test.equal(value[8], "شتمبر");
        test.equal(value[9], "أكتوبر");
        test.equal(value[10], "نوفمبر");
        test.equal(value[11], "دجمبر");

        test.done();
    },
    testMonthTranslate_ar_OM: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ar-OM", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "يناير");
        test.equal(value[1], "فبراير");
        test.equal(value[2], "مارس");
        test.equal(value[3], "أبريل");
        test.equal(value[4], "مايو");
        test.equal(value[5], "يونيو");
        test.equal(value[6], "يوليو");
        test.equal(value[7], "أغسطس");
        test.equal(value[8], "سبتمبر");
        test.equal(value[9], "أكتوبر");
        test.equal(value[10], "نوفمبر");
        test.equal(value[11], "ديسمبر");

        test.done();
    },
    testMonthTranslate_ar_QA: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ar-QA", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "يناير");
        test.equal(value[1], "فبراير");
        test.equal(value[2], "مارس");
        test.equal(value[3], "أبريل");
        test.equal(value[4], "مايو");
        test.equal(value[5], "يونيو");
        test.equal(value[6], "يوليو");
        test.equal(value[7], "أغسطس");
        test.equal(value[8], "سبتمبر");
        test.equal(value[9], "أكتوبر");
        test.equal(value[10], "نوفمبر");
        test.equal(value[11], "ديسمبر");

        test.done();
    },
    testMonthTranslate_ar_SA: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ar-SA", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "يناير");
        test.equal(value[1], "فبراير");
        test.equal(value[2], "مارس");
        test.equal(value[3], "أبريل");
        test.equal(value[4], "مايو");
        test.equal(value[5], "يونيو");
        test.equal(value[6], "يوليو");
        test.equal(value[7], "أغسطس");
        test.equal(value[8], "سبتمبر");
        test.equal(value[9], "أكتوبر");
        test.equal(value[10], "نوفمبر");
        test.equal(value[11], "ديسمبر");

        test.done();
    },
    testMonthTranslate_ar_SD: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ar-SD", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "يناير");
        test.equal(value[1], "فبراير");
        test.equal(value[2], "مارس");
        test.equal(value[3], "أبريل");
        test.equal(value[4], "مايو");
        test.equal(value[5], "يونيو");
        test.equal(value[6], "يوليو");
        test.equal(value[7], "أغسطس");
        test.equal(value[8], "سبتمبر");
        test.equal(value[9], "أكتوبر");
        test.equal(value[10], "نوفمبر");
        test.equal(value[11], "ديسمبر");

        test.done();
    },
    testMonthTranslate_ar_SY: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ar-SY", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "كانون الثاني");
        test.equal(value[1], "شباط");
        test.equal(value[2], "آذار");
        test.equal(value[3], "نيسان");
        test.equal(value[4], "أيار");
        test.equal(value[5], "حزيران");
        test.equal(value[6], "تموز");
        test.equal(value[7], "آب");
        test.equal(value[8], "أيلول");
        test.equal(value[9], "تشرين الأول");
        test.equal(value[10], "تشرين الثاني");
        test.equal(value[11], "كانون الأول");

        test.done();
    },
    testMonthTranslate_ar_TN: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ar-TN", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "جانفي");
        test.equal(value[1], "فيفري");
        test.equal(value[2], "مارس");
        test.equal(value[3], "أفريل");
        test.equal(value[4], "ماي");
        test.equal(value[5], "جوان");
        test.equal(value[6], "جويلية");
        test.equal(value[7], "أوت");
        test.equal(value[8], "سبتمبر");
        test.equal(value[9], "أكتوبر");
        test.equal(value[10], "نوفمبر");
        test.equal(value[11], "ديسمبر");

        test.done();
    },
    testMonthTranslate_ar_YE: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ar-YE", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "يناير");
        test.equal(value[1], "فبراير");
        test.equal(value[2], "مارس");
        test.equal(value[3], "أبريل");
        test.equal(value[4], "مايو");
        test.equal(value[5], "يونيو");
        test.equal(value[6], "يوليو");
        test.equal(value[7], "أغسطس");
        test.equal(value[8], "سبتمبر");
        test.equal(value[9], "أكتوبر");
        test.equal(value[10], "نوفمبر");
        test.equal(value[11], "ديسمبر");

        test.done();
    },
    testMonthTranslate_en_ET: function(test) {
        test.expect(26);

        // full, long: MMMM
        // medium: MMM
        // short: M
        var value = [], i;
        var fmt = new DateFmt({locale:"en-ET", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 13; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"ethiopic"}));
        }
        test.equal(value[0], "Meskerem");
        test.equal(value[1], "Tekemt");
        test.equal(value[2], "Hedar");
        test.equal(value[3], "Tahsas");
        test.equal(value[4], "Ter");
        test.equal(value[5], "Yekatit");
        test.equal(value[6], "Megabit");
        test.equal(value[7], "Miazia");
        test.equal(value[8], "Genbot");
        test.equal(value[9], "Sene");
        test.equal(value[10], "Hamle");
        test.equal(value[11], "Nehasse");
        test.equal(value[12], "Pagumen");

        var fmt = new DateFmt({locale:"en-ET", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 13; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"ethiopic"}));
        }
        test.equal(value[0], "Meskerem");
        test.equal(value[1], "Tekemt");
        test.equal(value[2], "Hedar");
        test.equal(value[3], "Tahsas");
        test.equal(value[4], "Ter");
        test.equal(value[5], "Yekatit");
        test.equal(value[6], "Megabit");
        test.equal(value[7], "Miazia");
        test.equal(value[8], "Genbot");
        test.equal(value[9], "Sene");
        test.equal(value[10], "Hamle");
        test.equal(value[11], "Nehasse");
        test.equal(value[12], "Pagumen");

        test.done();
    },
    testMonthTranslate_en_GM: function(test) {
        test.expect(12);

        var value = [], i;
        var fmt = new DateFmt({locale:"en-GM", date:"m", length: "full", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        test.done();
    },
    testMonthTranslate_en_LR: function(test) {
        test.expect(12);

        var value = [], i;
        var fmt = new DateFmt({locale:"en-LR", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        test.done();
    },
    testMonthTranslate_en_PK: function(test) {
        test.expect(12);

        var value = [], i;
        var fmt = new DateFmt({locale:"en-PK", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        test.done();
    },
    testMonthTranslate_en_RW: function(test) {
        test.expect(12);

        var value = [], i;
        var fmt = new DateFmt({locale:"en-RW", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        test.done();
    },
    testMonthTranslate_en_SD: function(test) {
        test.expect(12);

        var value = [], i;
        var fmt = new DateFmt({locale:"en-SD", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        test.done();
    },
    testMonthTranslate_en_SL: function(test) {
        test.expect(12);

        var value = [], i;
        var fmt = new DateFmt({locale:"en-SL", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        test.done();
    },
    testMonthTranslate_en_TZ: function(test) {
        test.expect(12);

        var value = [], i;
        var fmt = new DateFmt({locale:"en-TZ", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "January");
        test.equal(value[1], "February");
        test.equal(value[2], "March");
        test.equal(value[3], "April");
        test.equal(value[4], "May");
        test.equal(value[5], "June");
        test.equal(value[6], "July");
        test.equal(value[7], "August");
        test.equal(value[8], "September");
        test.equal(value[9], "October");
        test.equal(value[10], "November");
        test.equal(value[11], "December");

        test.done();
    },
    testMonthTranslate_es_CR: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"es-CR", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        var fmt = new DateFmt({locale:"es-CR", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ene");
        test.equal(value[1], "feb");
        test.equal(value[2], "mar");
        test.equal(value[3], "abr");
        test.equal(value[4], "may");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "ago");
        test.equal(value[8], "sept");
        test.equal(value[9], "oct");
        test.equal(value[10], "nov");
        test.equal(value[11], "dic");

        test.done();
    },
    testMonthTranslate_es_GQ: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"es-GQ", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        var fmt = new DateFmt({locale:"es-GQ", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ene");
        test.equal(value[1], "feb");
        test.equal(value[2], "mar");
        test.equal(value[3], "abr");
        test.equal(value[4], "may");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "ago");
        test.equal(value[8], "sept");
        test.equal(value[9], "oct");
        test.equal(value[10], "nov");
        test.equal(value[11], "dic");

        test.done();
    },
    testMonthTranslate_es_PH: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"es-PH", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "enero");
        test.equal(value[1], "febrero");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "mayo");
        test.equal(value[5], "junio");
        test.equal(value[6], "julio");
        test.equal(value[7], "agosto");
        test.equal(value[8], "septiembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "noviembre");
        test.equal(value[11], "diciembre");

        var fmt = new DateFmt({locale:"es-PH", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ene");
        test.equal(value[1], "feb");
        test.equal(value[2], "mar");
        test.equal(value[3], "abr");
        test.equal(value[4], "may");
        test.equal(value[5], "jun");
        test.equal(value[6], "jul");
        test.equal(value[7], "ago");
        test.equal(value[8], "sept");
        test.equal(value[9], "oct");
        test.equal(value[10], "nov");
        test.equal(value[11], "dic");

        test.done();
    },
    testMonthTranslate_fr_BF: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-BF", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-BF", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_BJ: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-BJ", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-BJ", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");
        test.done();
    },
    testMonthTranslate_fr_CD: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-CD", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-CD", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_CF: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-CF", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-CF", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_CG: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-CG", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-CG", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_CI: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-CI", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-CI", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_CM: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-CM", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-CM", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_GQ: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-GQ", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-GQ", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_DJ: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-DJ", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-DJ", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_DZ: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-DZ", date:"m", length: "full", useNative:false, timezone:"local"});
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-DZ", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_GA: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-GA", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-GA", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_GN: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-GN", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-GN", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_LB: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-LB", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-LB", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_ML: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-ML", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-ML", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_RW: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-RW", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-RW", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_SN: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-SN", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-SN", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_fr_TG: function(test) {
        test.expect(24);

        var value = [], i;
        var fmt = new DateFmt({locale:"fr-TG", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janvier");
        test.equal(value[1], "février");
        test.equal(value[2], "mars");
        test.equal(value[3], "avril");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juillet");
        test.equal(value[7], "août");
        test.equal(value[8], "septembre");
        test.equal(value[9], "octobre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "décembre");

        var fmt = new DateFmt({locale:"fr-TG", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janv.");
        test.equal(value[1], "févr.");
        test.equal(value[2], "mars");
        test.equal(value[3], "avr.");
        test.equal(value[4], "mai");
        test.equal(value[5], "juin");
        test.equal(value[6], "juil.");
        test.equal(value[7], "août");
        test.equal(value[8], "sept.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "déc.");

        test.done();
    },
    testMonthTranslate_ms_Latn_SG: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"ms-Latn-SG", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Januari");
        test.equal(value[1], "Februari");
        test.equal(value[2], "Mac");
        test.equal(value[3], "April");
        test.equal(value[4], "Mei");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Julai");
        test.equal(value[7], "Ogos");
        test.equal(value[8], "September");
        test.equal(value[9], "Oktober");
        test.equal(value[10], "November");
        test.equal(value[11], "Disember");

        var fmt = new DateFmt({locale:"ms-Latn-SG", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Jan");
        test.equal(value[1], "Feb");
        test.equal(value[2], "Mac");
        test.equal(value[3], "Apr");
        test.equal(value[4], "Mei");
        test.equal(value[5], "Jun");
        test.equal(value[6], "Jul");
        test.equal(value[7], "Ogo");
        test.equal(value[8], "Sep");
        test.equal(value[9], "Okt");
        test.equal(value[10], "Nov");
        test.equal(value[11], "Dis");

        test.done();
    },
    testMonthTranslate_pa_PK: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"pa-PK", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ਜਨਵਰੀ");
        test.equal(value[1], "ਫ਼ਰਵਰੀ");
        test.equal(value[2], "ਮਾਰਚ");
        test.equal(value[3], "ਅਪ੍ਰੈਲ");
        test.equal(value[4], "ਮਈ");
        test.equal(value[5], "ਜੂਨ");
        test.equal(value[6], "ਜੁਲਾਈ");
        test.equal(value[7], "ਅਗਸਤ");
        test.equal(value[8], "ਸਤੰਬਰ");
        test.equal(value[9], "ਅਕਤੂਬਰ");
        test.equal(value[10], "ਨਵੰਬਰ");
        test.equal(value[11], "ਦਸੰਬਰ");

        var fmt = new DateFmt({locale:"pa-PK", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ਜਨ");
        test.equal(value[1], "ਫ਼ਰ");
        test.equal(value[2], "ਮਾਰਚ");
        test.equal(value[3], "ਅਪ੍ਰੈ");
        test.equal(value[4], "ਮਈ");
        test.equal(value[5], "ਜੂਨ");
        test.equal(value[6], "ਜੁਲਾ");
        test.equal(value[7], "ਅਗ");
        test.equal(value[8], "ਸਤੰ");
        test.equal(value[9], "ਅਕਤੂ");
        test.equal(value[10], "ਨਵੰ");
        test.equal(value[11], "ਦਸੰ");

        test.done();
    },
    testMonthTranslate_pt_AO: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"pt-AO", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janeiro");
        test.equal(value[1], "fevereiro");
        test.equal(value[2], "março");
        test.equal(value[3], "abril");
        test.equal(value[4], "maio");
        test.equal(value[5], "junho");
        test.equal(value[6], "julho");
        test.equal(value[7], "agosto");
        test.equal(value[8], "setembro");
        test.equal(value[9], "outubro");
        test.equal(value[10], "novembro");
        test.equal(value[11], "dezembro");

        test.done();
    },
    testMonthTranslate_pt_GQ: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"pt-GQ", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janeiro");
        test.equal(value[1], "fevereiro");
        test.equal(value[2], "março");
        test.equal(value[3], "abril");
        test.equal(value[4], "maio");
        test.equal(value[5], "junho");
        test.equal(value[6], "julho");
        test.equal(value[7], "agosto");
        test.equal(value[8], "setembro");
        test.equal(value[9], "outubro");
        test.equal(value[10], "novembro");
        test.equal(value[11], "dezembro");

        test.done();
    },
    testMonthTranslate_pt_CV: function(test) {
        test.expect(12);

        // full, long: MMMM
        // medium: MM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"pt-CV", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "janeiro");
        test.equal(value[1], "fevereiro");
        test.equal(value[2], "março");
        test.equal(value[3], "abril");
        test.equal(value[4], "maio");
        test.equal(value[5], "junho");
        test.equal(value[6], "julho");
        test.equal(value[7], "agosto");
        test.equal(value[8], "setembro");
        test.equal(value[9], "outubro");
        test.equal(value[10], "novembro");
        test.equal(value[11], "dezembro");

        test.done();
    },
    testMonthTranslate_ur_PK: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ur-PK", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "جنوری");
        test.equal(value[1], "فروری");
        test.equal(value[2], "مارچ");
        test.equal(value[3], "اپریل");
        test.equal(value[4], "مئی");
        test.equal(value[5], "جون");
        test.equal(value[6], "جولائی");
        test.equal(value[7], "اگست");
        test.equal(value[8], "ستمبر");
        test.equal(value[9], "اکتوبر");
        test.equal(value[10], "نومبر");
        test.equal(value[11], "دسمبر");

        var fmt = new DateFmt({locale:"ur-PK", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "جنوری");
        test.equal(value[1], "فروری");
        test.equal(value[2], "مارچ");
        test.equal(value[3], "اپریل");
        test.equal(value[4], "مئی");
        test.equal(value[5], "جون");
        test.equal(value[6], "جولائی");
        test.equal(value[7], "اگست");
        test.equal(value[8], "ستمبر");
        test.equal(value[9], "اکتوبر");
        test.equal(value[10], "نومبر");
        test.equal(value[11], "دسمبر");

        test.done();
    },
    testMonthTranslate_zh_Hans_SG: function(test) {
        test.expect(12);

        var value = [], i;
        var fmt = new DateFmt({locale:"zh-Hans-SG", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "1月");
        test.equal(value[1], "2月");
        test.equal(value[2], "3月");
        test.equal(value[3], "4月");
        test.equal(value[4], "5月");
        test.equal(value[5], "6月");
        test.equal(value[6], "7月");
        test.equal(value[7], "8月");
        test.equal(value[8], "9月");
        test.equal(value[9], "10月");
        test.equal(value[10], "11月");
        test.equal(value[11], "12月");

        test.done();
    },
    testMonthTranslate_zh_Hans_MY: function(test) {
        test.expect(12);

        var value = [], i;
        var fmt = new DateFmt({locale:"zh-Hans-MY", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "1月");
        test.equal(value[1], "2月");
        test.equal(value[2], "3月");
        test.equal(value[3], "4月");
        test.equal(value[4], "5月");
        test.equal(value[5], "6月");
        test.equal(value[6], "7月");
        test.equal(value[7], "8月");
        test.equal(value[8], "9月");
        test.equal(value[9], "10月");
        test.equal(value[10], "11月");
        test.equal(value[11], "12月");

        test.done();
    },
    testMonthTranslate_ka_GE: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"ka-GE", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "იანვარი");
        test.equal(value[1], "თებერვალი");
        test.equal(value[2], "მარტი");
        test.equal(value[3], "აპრილი");
        test.equal(value[4], "მაისი");
        test.equal(value[5], "ივნისი");
        test.equal(value[6], "ივლისი");
        test.equal(value[7], "აგვისტო");
        test.equal(value[8], "სექტემბერი");
        test.equal(value[9], "ოქტომბერი");
        test.equal(value[10], "ნოემბერი");
        test.equal(value[11], "დეკემბერი");

        var fmt = new DateFmt({locale:"ka-GE", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "იან");
        test.equal(value[1], "თებ");
        test.equal(value[2], "მარ");
        test.equal(value[3], "აპრ");
        test.equal(value[4], "მაი");
        test.equal(value[5], "ივნ");
        test.equal(value[6], "ივლ");
        test.equal(value[7], "აგვ");
        test.equal(value[8], "სექ");
        test.equal(value[9], "ოქტ");
        test.equal(value[10], "ნოე");
        test.equal(value[11], "დეკ");

        test.done();
    },
    testMonthTranslate_be_BY: function(test) {
        test.expect(12);

        // full, long: MMMM
        // short, medium: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"be-BY", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "студзень");
        test.equal(value[1], "люты");
        test.equal(value[2], "сакавік");
        test.equal(value[3], "красавік");
        test.equal(value[4], "май");
        test.equal(value[5], "чэрвень");
        test.equal(value[6], "ліпень");
        test.equal(value[7], "жнівень");
        test.equal(value[8], "верасень");
        test.equal(value[9], "кастрычнік");
        test.equal(value[10], "лістапад");
        test.equal(value[11], "снежань");
        test.done();
    },
    testMonthTranslate_lo_LA: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"lo-LA", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ມັງກອນ");
        test.equal(value[1], "ກຸມພາ");
        test.equal(value[2], "ມີນາ");
        test.equal(value[3], "ເມສາ");
        test.equal(value[4], "ພຶດສະພາ");
        test.equal(value[5], "ມິຖຸນາ");
        test.equal(value[6], "ກໍລະກົດ");
        test.equal(value[7], "ສິງຫາ");
        test.equal(value[8], "ກັນຍາ");
        test.equal(value[9], "ຕຸລາ");
        test.equal(value[10], "ພະຈິກ");
        test.equal(value[11], "ທັນວາ");

        var fmt = new DateFmt({locale:"lo-LA", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ມ.ກ.");
        test.equal(value[1], "ກ.ພ.");
        test.equal(value[2], "ມ.ນ.");
        test.equal(value[3], "ມ.ສ.");
        test.equal(value[4], "ພ.ພ.");
        test.equal(value[5], "ມິ.ຖ.");
        test.equal(value[6], "ກ.ລ.");
        test.equal(value[7], "ສ.ຫ.");
        test.equal(value[8], "ກ.ຍ.");
        test.equal(value[9], "ຕ.ລ.");
        test.equal(value[10], "ພ.ຈ.");
        test.equal(value[11], "ທ.ວ.");
        test.done();
    },
    testMonthTranslate_ky_KG: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ky-KG", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Январь");
        test.equal(value[1], "Февраль");
        test.equal(value[2], "Март");
        test.equal(value[3], "Апрель");
        test.equal(value[4], "Май");
        test.equal(value[5], "Июнь");
        test.equal(value[6], "Июль");
        test.equal(value[7], "Август");
        test.equal(value[8], "Сентябрь");
        test.equal(value[9], "Октябрь");
        test.equal(value[10], "Ноябрь");
        test.equal(value[11], "Декабрь");

        var fmt = new DateFmt({locale:"ky-KG", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "Янв");
        test.equal(value[1], "Фев");
        test.equal(value[2], "Мар");
        test.equal(value[3], "Апр");
        test.equal(value[4], "Май");
        test.equal(value[5], "Июн");
        test.equal(value[6], "Июл");
        test.equal(value[7], "Авг");
        test.equal(value[8], "Сен");
        test.equal(value[9], "Окт");
        test.equal(value[10], "Ноя");
        test.equal(value[11], "Дек");
        test.done();
    },
    testMonthTranslate_ca_AD: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ca-AD", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "gener");
        test.equal(value[1], "febrer");
        test.equal(value[2], "març");
        test.equal(value[3], "abril");
        test.equal(value[4], "maig");
        test.equal(value[5], "juny");
        test.equal(value[6], "juliol");
        test.equal(value[7], "agost");
        test.equal(value[8], "setembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "desembre");

        var fmt = new DateFmt({locale:"ca-AD", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "gen.");
        test.equal(value[1], "febr.");
        test.equal(value[2], "març");
        test.equal(value[3], "abr.");
        test.equal(value[4], "maig");
        test.equal(value[5], "juny");
        test.equal(value[6], "jul.");
        test.equal(value[7], "ag.");
        test.equal(value[8], "set.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "des.");

        test.done();
    },
    testMonthTranslate_ca_ES: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ca-ES", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "gener");
        test.equal(value[1], "febrer");
        test.equal(value[2], "març");
        test.equal(value[3], "abril");
        test.equal(value[4], "maig");
        test.equal(value[5], "juny");
        test.equal(value[6], "juliol");
        test.equal(value[7], "agost");
        test.equal(value[8], "setembre");
        test.equal(value[9], "octubre");
        test.equal(value[10], "novembre");
        test.equal(value[11], "desembre");

        var fmt = new DateFmt({locale:"ca-AD", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "gen.");
        test.equal(value[1], "febr.");
        test.equal(value[2], "març");
        test.equal(value[3], "abr.");
        test.equal(value[4], "maig");
        test.equal(value[5], "juny");
        test.equal(value[6], "jul.");
        test.equal(value[7], "ag.");
        test.equal(value[8], "set.");
        test.equal(value[9], "oct.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "des.");
        test.done();
    },
    testMonthTranslate_hy_AM: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"hy-AM", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "հունվար");
        test.equal(value[1], "փետրվար");
        test.equal(value[2], "մարտ");
        test.equal(value[3], "ապրիլ");
        test.equal(value[4], "մայիս");
        test.equal(value[5], "հունիս");
        test.equal(value[6], "հուլիս");
        test.equal(value[7], "օգոստոս");
        test.equal(value[8], "սեպտեմբեր");
        test.equal(value[9], "հոկտեմբեր");
        test.equal(value[10], "նոյեմբեր");
        test.equal(value[11], "դեկտեմբեր");

        var fmt = new DateFmt({locale:"hy-AM", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "հնվ");
        test.equal(value[1], "փտվ");
        test.equal(value[2], "մրտ");
        test.equal(value[3], "ապր");
        test.equal(value[4], "մյս");
        test.equal(value[5], "հնս");
        test.equal(value[6], "հլս");
        test.equal(value[7], "օգս");
        test.equal(value[8], "սեպ");
        test.equal(value[9], "հոկ");
        test.equal(value[10], "նոյ");
        test.equal(value[11], "դեկ");
        test.done();
    },
    testMonthTranslate_gl_ES: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"gl-ES", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "xaneiro");
        test.equal(value[1], "febreiro");
        test.equal(value[2], "marzo");
        test.equal(value[3], "abril");
        test.equal(value[4], "maio");
        test.equal(value[5], "xuño");
        test.equal(value[6], "xullo");
        test.equal(value[7], "agosto");
        test.equal(value[8], "setembro");
        test.equal(value[9], "outubro");
        test.equal(value[10], "novembro");
        test.equal(value[11], "decembro");

        var fmt = new DateFmt({locale:"gl-ES", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "xan.");
        test.equal(value[1], "feb.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "abr.");
        test.equal(value[4], "maio");
        test.equal(value[5], "xuño");
        test.equal(value[6], "xul.");
        test.equal(value[7], "ago.");
        test.equal(value[8], "set.");
        test.equal(value[9], "out.");
        test.equal(value[10], "nov.");
        test.equal(value[11], "dec.");
        test.done();
    },
    testMonthTranslate_eu_ES: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"eu-ES", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "urtarrila");
        test.equal(value[1], "otsaila");
        test.equal(value[2], "martxoa");
        test.equal(value[3], "apirila");
        test.equal(value[4], "maiatza");
        test.equal(value[5], "ekaina");
        test.equal(value[6], "uztaila");
        test.equal(value[7], "abuztua");
        test.equal(value[8], "iraila");
        test.equal(value[9], "urria");
        test.equal(value[10], "azaroa");
        test.equal(value[11], "abendua");

        var fmt = new DateFmt({locale:"eu-ES", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "urt.");
        test.equal(value[1], "ots.");
        test.equal(value[2], "mar.");
        test.equal(value[3], "api.");
        test.equal(value[4], "mai.");
        test.equal(value[5], "eka.");
        test.equal(value[6], "uzt.");
        test.equal(value[7], "abu.");
        test.equal(value[8], "ira.");
        test.equal(value[9], "urr.");
        test.equal(value[10], "aza.");
        test.equal(value[11], "abe.");
        test.done();
    },
    testMonthTranslate_ne_NP: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ne-NP", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "जनवरी");
        test.equal(value[1], "फेब्रुअरी");
        test.equal(value[2], "मार्च");
        test.equal(value[3], "अप्रिल");
        test.equal(value[4], "मे");
        test.equal(value[5], "जुन");
        test.equal(value[6], "जुलाई");
        test.equal(value[7], "अगस्ट");
        test.equal(value[8], "सेप्टेम्बर");
        test.equal(value[9], "अक्टोबर");
        test.equal(value[10], "नोभेम्बर");
        test.equal(value[11], "डिसेम्बर");

        var fmt = new DateFmt({locale:"ne-NP", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "जनवरी");
        test.equal(value[1], "फेब्रुअरी");
        test.equal(value[2], "मार्च");
        test.equal(value[3], "अप्रिल");
        test.equal(value[4], "मे");
        test.equal(value[5], "जुन");
        test.equal(value[6], "जुलाई");
        test.equal(value[7], "अगस्ट");
        test.equal(value[8], "सेप्टेम्बर");
        test.equal(value[9], "अक्टोबर");
        test.equal(value[10], "नोभेम्बर");
        test.equal(value[11], "डिसेम्बर");

        test.done();
    },
    testMonthTranslate_my_MM: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"my-MM", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "ဇန်နဝါရီ");
        test.equal(value[1], "ဖေဖော်ဝါရီ");
        test.equal(value[2], "မတ်");
        test.equal(value[3], "ဧပြီ");
        test.equal(value[4], "မေ");
        test.equal(value[5], "ဇွန်");
        test.equal(value[6], "ဇူလိုင်");
        test.equal(value[7], "ဩဂုတ်");
        test.equal(value[8], "စက်တင်ဘာ");
        test.equal(value[9], "အောက်တိုဘာ");
        test.equal(value[10], "နိုဝင်ဘာ");
        test.equal(value[11], "ဒီဇင်ဘာ");

        var fmt = new DateFmt({locale:"my-MM", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], "ဇန်");
        test.equal(value[1], "ဖေ");
        test.equal(value[2], "မတ်");
        test.equal(value[3], "ဧ");
        test.equal(value[4], "မေ");
        test.equal(value[5], "ဇွန်");
        test.equal(value[6], "ဇူ");
        test.equal(value[7], "ဩ");
        test.equal(value[8], "စက်");
        test.equal(value[9], "အောက်");
        test.equal(value[10], "နို");
        test.equal(value[11], "ဒီ");

        test.done();
    },
    testMonthTranslate_wo_SN: function(test) {
        test.expect(24);

        // full, medium: MMM
        // long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"wo-SN", date:"m", length: "long", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Samwiyee");
        test.equal(value[1], "Fewriyee");
        test.equal(value[2], "Mars");
        test.equal(value[3], "Awril");
        test.equal(value[4], "Mee");
        test.equal(value[5], "Suwe");
        test.equal(value[6], "Sulet");
        test.equal(value[7], "Ut");
        test.equal(value[8], "Sàttumbar");
        test.equal(value[9], "Oktoobar");
        test.equal(value[10], "Nowàmbar");
        test.equal(value[11], "Desàmbar");

        var fmt = new DateFmt({locale:"wo-SN", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], "Sam");
        test.equal(value[1], "Few");
        test.equal(value[2], "Mar");
        test.equal(value[3], "Awr");
        test.equal(value[4], "Mee");
        test.equal(value[5], "Suw");
        test.equal(value[6], "Sul");
        test.equal(value[7], "Ut");
        test.equal(value[8], "Sàt");
        test.equal(value[9], "Okt");
        test.equal(value[10], "Now");
        test.equal(value[11], "Des");
        test.done();
    },
    testMonthTranslate_tk_TM: function(test) {
        test.expect(36);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;

        var fmt = new DateFmt({locale:"tk-TM", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'Ýanwar');
        test.equal(value[1], 'Fewral');
        test.equal(value[2], 'Mart');
        test.equal(value[3], 'Aprel');
        test.equal(value[4], 'Maý');
        test.equal(value[5], 'Iýun');
        test.equal(value[6], 'Iýul');
        test.equal(value[7], 'Awgust');
        test.equal(value[8], 'Sentýabr');
        test.equal(value[9], 'Oktýabr');
        test.equal(value[10], 'Noýabr');
        test.equal(value[11], 'Dekabr');

        var fmt = new DateFmt({locale:"tk-TM", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }

        test.equal(value[0], 'Ýan');
        test.equal(value[1], 'Few');
        test.equal(value[2], 'Mar');
        test.equal(value[3], 'Apr');
        test.equal(value[4], 'Maý');
        test.equal(value[5], 'Iýun');
        test.equal(value[6], 'Iýul');
        test.equal(value[7], 'Awg');
        test.equal(value[8], 'Sen');
        test.equal(value[9], 'Okt');
        test.equal(value[10], 'Noý');
        test.equal(value[11], 'Dek');

        var fmt = new DateFmt({locale:"tk-TM", date:"m", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'Ýa');
        test.equal(value[1], 'Fe');
        test.equal(value[2], 'Ma');
        test.equal(value[3], 'Ap');
        test.equal(value[4], 'Ma');
        test.equal(value[5], 'Iý');
        test.equal(value[6], 'Iý');
        test.equal(value[7], 'Aw');
        test.equal(value[8], 'Se');
        test.equal(value[9], 'Ok');
        test.equal(value[10], 'No');
        test.equal(value[11], 'De');
        test.done();
    },
    testMonthTranslate_tg_TJ: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"tg-TJ", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'Январ');
        test.equal(value[1], 'Феврал');
        test.equal(value[2], 'Март');
        test.equal(value[3], 'Апрел');
        test.equal(value[4], 'Май');
        test.equal(value[5], 'Июн');
        test.equal(value[6], 'Июл');
        test.equal(value[7], 'Август');
        test.equal(value[8], 'Сентябр');
        test.equal(value[9], 'Октябр');
        test.equal(value[10], 'Ноябр');
        test.equal(value[11], 'Декабр');

        var fmt = new DateFmt({locale:"tg-TJ", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'Янв');
        test.equal(value[1], 'Фев');
        test.equal(value[2], 'Мар');
        test.equal(value[3], 'Апр');
        test.equal(value[4], 'Май');
        test.equal(value[5], 'Июн');
        test.equal(value[6], 'Июл');
        test.equal(value[7], 'Авг');
        test.equal(value[8], 'Сен');
        test.equal(value[9], 'Окт');
        test.equal(value[10], 'Ноя');
        test.equal(value[11], 'Дек');
        test.done();
    },
    testMonthTranslate_mt_MT: function(test) {
        test.expect(36);

        // full, long: MMMM
        // medium: MMM
        // short: MM

        var value = [], i;
        var fmt = new DateFmt({locale:"mt-MT", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'Jannar');
        test.equal(value[1], 'Frar');
        test.equal(value[2], 'Marzu');
        test.equal(value[3], 'April');
        test.equal(value[4], 'Mejju');
        test.equal(value[5], 'Ġunju');
        test.equal(value[6], 'Lulju');
        test.equal(value[7], 'Awwissu');
        test.equal(value[8], 'Settembru');
        test.equal(value[9], 'Ottubru');
        test.equal(value[10], 'Novembru');
        test.equal(value[11], 'Diċembru');

        var fmt = new DateFmt({locale:"mt-MT", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'Jan');
        test.equal(value[1], 'Fra');
        test.equal(value[2], 'Mar');
        test.equal(value[3], 'Apr');
        test.equal(value[4], 'Mej');
        test.equal(value[5], 'Ġun');
        test.equal(value[6], 'Lul');
        test.equal(value[7], 'Aww');
        test.equal(value[8], 'Set');
        test.equal(value[9], 'Ott');
        test.equal(value[10], 'Nov');
        test.equal(value[11], 'Diċ');

        var fmt = new DateFmt({locale:"mt-MT", date:"m", length: "short", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'Ja');
        test.equal(value[1], 'Fr');
        test.equal(value[2], 'Ma');
        test.equal(value[3], 'Ap');
        test.equal(value[4], 'Me');
        test.equal(value[5], 'Ġu');
        test.equal(value[6], 'Lu');
        test.equal(value[7], 'Aw');
        test.equal(value[8], 'Se');
        test.equal(value[9], 'Ot');
        test.equal(value[10], 'No');
        test.equal(value[11], 'Di');
        test.done();
    },
    testMonthTranslate_zu_ZA: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"zu-ZA", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'Januwari');
        test.equal(value[1], 'Februwari');
        test.equal(value[2], 'Mashi');
        test.equal(value[3], 'Ephreli');
        test.equal(value[4], 'Meyi');
        test.equal(value[5], 'Juni');
        test.equal(value[6], 'Julayi');
        test.equal(value[7], 'Agasti');
        test.equal(value[8], 'Septhemba');
        test.equal(value[9], 'Okthoba');
        test.equal(value[10], 'Novemba');
        test.equal(value[11], 'Disemba');

        var fmt = new DateFmt({locale:"zu-ZA", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'Jan');
        test.equal(value[1], 'Feb');
        test.equal(value[2], 'Mas');
        test.equal(value[3], 'Eph');
        test.equal(value[4], 'Mey');
        test.equal(value[5], 'Jun');
        test.equal(value[6], 'Jul');
        test.equal(value[7], 'Aga');
        test.equal(value[8], 'Sep');
        test.equal(value[9], 'Okt');
        test.equal(value[10], 'Nov');
        test.equal(value[11], 'Dis');
        test.done();
    },
    testMonthTranslate_lb_LU: function(test) {
        test.expect(24);

        // full : MMMM
        // lonh, medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"lb-LU", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'Januar');
        test.equal(value[1], 'Februar');
        test.equal(value[2], 'Mäerz');
        test.equal(value[3], 'Abrëll');
        test.equal(value[4], 'Mee');
        test.equal(value[5], 'Juni');
        test.equal(value[6], 'Juli');
        test.equal(value[7], 'August');
        test.equal(value[8], 'September');
        test.equal(value[9], 'Oktober');
        test.equal(value[10], 'November');
        test.equal(value[11], 'Dezember');

        var fmt = new DateFmt({locale:"lb-LU", date:"m", length: "medium", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'Jan');
        test.equal(value[1], 'Feb');
        test.equal(value[2], 'Mäe');
        test.equal(value[3], 'Abr');
        test.equal(value[4], 'Mee');
        test.equal(value[5], 'Jun');
        test.equal(value[6], 'Jul');
        test.equal(value[7], 'Aug');
        test.equal(value[8], 'Sep');
        test.equal(value[9], 'Okt');
        test.equal(value[10], 'Nov');
        test.equal(value[11], 'Dez');
        test.done();
    },
    testMonthTranslate_ig_NG: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ig-NG", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'Jenụwarị');
        test.equal(value[1], 'Febrụwarị');
        test.equal(value[2], 'Maachị');
        test.equal(value[3], 'Epreel');
        test.equal(value[4], 'Mee');
        test.equal(value[5], 'Jun');
        test.equal(value[6], 'Julaị');
        test.equal(value[7], 'Ọgọọst');
        test.equal(value[8], 'Septemba');
        test.equal(value[9], 'Ọktoba');
        test.equal(value[10], 'Novemba');
        test.equal(value[11], 'Disemba');

        var fmt = new DateFmt({locale:"ig-NG", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'Jen');
        test.equal(value[1], 'Feb');
        test.equal(value[2], 'Maa');
        test.equal(value[3], 'Epr');
        test.equal(value[4], 'Mee');
        test.equal(value[5], 'Juu');
        test.equal(value[6], 'Jul');
        test.equal(value[7], 'Ọgọ');
        test.equal(value[8], 'Sep');
        test.equal(value[9], 'Ọkt');
        test.equal(value[10], 'Nov');
        test.equal(value[11], 'Dis');
        test.done();
    },
    testMonthTranslate_ps_AF: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ps-AF", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"persian"}));
        }
        test.equal(value[0], 'وری');
        test.equal(value[1], 'غویی');
        test.equal(value[2], 'غبرگولی');
        test.equal(value[3], 'چنگاښ');
        test.equal(value[4], 'زمری');
        test.equal(value[5], 'وږی');
        test.equal(value[6], 'تله');
        test.equal(value[7], 'لړم');
        test.equal(value[8], 'لیندۍ');
        test.equal(value[9], 'مرغومی');
        test.equal(value[10], 'سلواغه');
        test.equal(value[11], 'کب');

        var fmt = new DateFmt({locale:"ps-AF", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"persian"}));
        }
        test.equal(value[0], 'وری');
        test.equal(value[1], 'غویی');
        test.equal(value[2], 'غبرگولی');
        test.equal(value[3], 'چنگاښ');
        test.equal(value[4], 'زمری');
        test.equal(value[5], 'وږی');
        test.equal(value[6], 'تله');
        test.equal(value[7], 'لړم');
        test.equal(value[8], 'لیندۍ');
        test.equal(value[9], 'مرغومی');
        test.equal(value[10], 'سلواغه');
        test.equal(value[11], 'کب');
        test.done();
    },
    testMonthTranslate_ps_PK: function(test) {
        test.expect(24);

        // full, long: MMMM
        // medium: MMM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"ps-PK", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'جنوري');
        test.equal(value[1], 'فېبروري');
        test.equal(value[2], 'مارچ');
        test.equal(value[3], 'اپریل');
        test.equal(value[4], 'مۍ');
        test.equal(value[5], 'جون');
        test.equal(value[6], 'جولای');
        test.equal(value[7], 'اګست');
        test.equal(value[8], 'سپتمبر');
        test.equal(value[9], 'اکتوبر');
        test.equal(value[10], 'نومبر');
        test.equal(value[11], 'دسمبر');

        var fmt = new DateFmt({locale:"ps-PK", date:"m", length: "medium", useNative:false, timezone:"local"})

        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'جنوري');
        test.equal(value[1], 'فبروري');
        test.equal(value[2], 'مارچ');
        test.equal(value[3], 'اپریل');
        test.equal(value[4], 'مۍ');
        test.equal(value[5], 'جون');
        test.equal(value[6], 'جولای');
        test.equal(value[7], 'اګست');
        test.equal(value[8], 'سپتمبر');
        test.equal(value[9], 'اکتوبر');
        test.equal(value[10], 'نومبر');
        test.equal(value[11], 'دسمبر');

        test.done();
    },
    testMonthTranslate_yo_NG: function(test) {
        test.expect(12);

        // full, long: MMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"yo-NG", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'Oṣù Ṣẹ́rẹ́');
        test.equal(value[1], 'Oṣù Èrèlè');
        test.equal(value[2], 'Oṣù Ẹrẹ̀nà');
        test.equal(value[3], 'Oṣù Ìgbé');
        test.equal(value[4], 'Oṣù Ẹ̀bibi');
        test.equal(value[5], 'Oṣù Òkúdu');
        test.equal(value[6], 'Oṣù Agẹmọ');
        test.equal(value[7], 'Oṣù Ògún');
        test.equal(value[8], 'Oṣù Owewe');
        test.equal(value[9], 'Oṣù Ọ̀wàrà');
        test.equal(value[10], 'Oṣù Bélú');
        test.equal(value[11], 'Oṣù Ọ̀pẹ̀');
        test.done();
    },
    testMonthTranslate_yo_BJ: function(test) {
        test.expect(12);

        // full, long: MMM
        // medium: MM
        // short: M

        var value = [], i;
        var fmt = new DateFmt({locale:"yo-BJ", date:"m", length: "full", useNative:false, timezone:"local"})
        for (i=0; i < 12; i++) {
            value[i] = fmt.format(DateFactory({month:i+1, type:"gregorian"}));
        }
        test.equal(value[0], 'Oshù Shɛ́rɛ́');
        test.equal(value[1], 'Oshù Èrèlè');
        test.equal(value[2], 'Oshù Ɛrɛ̀nà');
        test.equal(value[3], 'Oshù Ìgbé');
        test.equal(value[4], 'Oshù Ɛ̀bibi');
        test.equal(value[5], 'Oshù Òkúdu');
        test.equal(value[6], 'Oshù Agɛmɔ');
        test.equal(value[7], 'Oshù Ògún');
        test.equal(value[8], 'Oshù Owewe');
        test.equal(value[9], 'Oshù Ɔ̀wàrà');
        test.equal(value[10], 'Oshù Bélú');
        test.equal(value[11], 'Oshù Ɔ̀pɛ̀');
       test.done();
    }
}
