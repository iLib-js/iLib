 /*
 * datetimefmt.js - test the date formatter template
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

if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../lib/DateFmt.js");
}

module.exports.testdatetimeformat = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateTimeFormat_ar_EG: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-EG", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-EG", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-EG", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-EG", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-EG", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-EG", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, 'EEEE، d MMMM yyyy في ‏h:mm a');
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-EG", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "‏h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ar_IQ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-IQ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-IQ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-IQ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-IQ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-IQ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-IQ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy في ‏h:mm a");
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-IQ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ar_MA: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-MA", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-MA", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-MA", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-MA", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-MA", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-MA", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, 'EEEE، d MMMM yyyy في ‏HH:mm');
        test.equal(result2, 'E، d/M/yyyy، ‏HH:mm');

        result1 = new DateFmt({locale:"ar-MA", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_as_IN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"as-IN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"as-IN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"as-IN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"as-IN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM, yyyy");
        test.equal(result2, "EEE, d MMMM, yyyy");
        test.equal(result3, "EE, dd-MM-yyyy");
        test.equal(result4, "E, d-M-yyyy");

        result1 = new DateFmt({locale:"as-IN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"as-IN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM, yyyy 'at' a h.mm");
        test.equal(result2, "E, d-M-yyyy, a h.mm");

        result1 = new DateFmt({locale:"as-IN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;;
        test.equal(result1, "a h.mm.ss z");

        test.done();
    },
    testDateTimeFormat_bg_BG: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"bg-BG", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"bg-BG", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"bg-BG", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"bg-BG", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'.");
        test.equal(result2, "EEE, d MMMM yyyy 'г'.");
        test.equal(result3, "EE, d.MM.yyyy 'г'.");
        test.equal(result4, "E, d.MM.yy 'г'.");

        result1 = new DateFmt({locale:"bg-BG", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"bg-BG", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'. 'в' H:mm");
        test.equal(result2, "E, d.MM.yy 'г'., H:mm");

        result1 = new DateFmt({locale:"bg-BG", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'H:mm:ss z');

        test.done();
    },
    testDateTimeFormat_bn_IN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"bn-IN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"bn-IN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"bn-IN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"bn-IN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM, yyyy");
        test.equal(result2, "EEE, d MMMM, yyyy");
        test.equal(result3, "EE, d MMM, yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"bn-IN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"bn-IN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM, yyyy এ h:mm a");
        test.equal(result2, "E, d/M/yy, h:mm a");

        result1 = new DateFmt({locale:"bn-IN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_bs_Latn_BA: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"bs-Latn-BA", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"bs-Latn-BA", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"bs-Latn-BA", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"bs-Latn-BA", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy.");
        test.equal(result2, "EEE, d. MMMM yyyy.");
        test.equal(result3, "EE, d. MMM yyyy.");
        test.equal(result4, "E, d. M. yyyy.");

        result1 = new DateFmt({locale:"bs-Latn-BA", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"bs-Latn-BA", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy. 'u' HH:mm");
        test.equal(result2, "E, d. M. yyyy. 'u' HH:mm");

        result1 = new DateFmt({locale:"bs-Latn-BA", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_bs_Latn_ME: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"bs-Latn-ME", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"bs-Latn-ME", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"bs-Latn-ME", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"bs-Latn-ME", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy.");
        test.equal(result2, "EEE, d. MMMM yyyy.");
        test.equal(result3, "EE, d. MMM yyyy.");
        test.equal(result4, "E, d. M. yyyy.");

        result1 = new DateFmt({locale:"bs-Latn-ME", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"bs-Latn-ME", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy. 'u' HH:mm");
        test.equal(result2, "E, d. M. yyyy. 'u' HH:mm");

        result1 = new DateFmt({locale:"bs-Latn-ME", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_cs_CZ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"cs-CZ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"cs-CZ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"cs-CZ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"cs-CZ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d. MMMM yyyy");
        test.equal(result2, "EEE d. MMMM yyyy");
        test.equal(result3, "EE d. M. yyyy");
        test.equal(result4, "E dd.MM.yy");

        result1 = new DateFmt({locale:"cs-CZ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"cs-CZ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d. MMMM yyyy 'v' H:mm");
        test.equal(result2, "E dd.MM.yy H:mm");

        result1 = new DateFmt({locale:"cs-CZ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "H:mm:ss z");

        test.done();
    },
    testDateTimeFormat_da_DK: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"da-DK", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"da-DK", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"da-DK", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"da-DK", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE 'den' d. MMMM yyyy");
        test.equal(result2, "EEE 'den' d. MMMM yyyy"); // Bug
        test.equal(result3, "EE 'den' d. MMM yyyy"); //
        test.equal(result4, "E 'den' dd.MM.yyyy");

        result1 = new DateFmt({locale:"da-DK", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"da-DK", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE 'den' d. MMMM yyyy 'kl'. HH.mm");
        test.equal(result2, "E 'den' dd.MM.yyyy, HH.mm");

        result1 = new DateFmt({locale:"da-DK", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH.mm.ss z");

        test.done();
    },
    testDateTimeFormat_de_AT: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"de-AT", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"de-AT", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"de-AT", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"de-AT", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy");
        test.equal(result2, "EEE, d. MMMM yyyy");
        test.equal(result3, "EE, dd.MM.yyyy");
        test.equal(result4, "E, dd.MM.yy");

        result1 = new DateFmt({locale:"de-AT", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"de-AT", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy 'um' HH:mm");
        test.equal(result2, "E, dd.MM.yy, HH:mm");

        result1 = new DateFmt({locale:"de-AT", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_de_CH: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"de-CH", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"de-CH", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"de-CH", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"de-CH", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy");
        test.equal(result2, "EEE, d. MMMM yyyy");
        test.equal(result3, "EE, dd.MM.yyyy");
        test.equal(result4, "E, dd.MM.yy");

        result1 = new DateFmt({locale:"de-CH", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"de-CH", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy 'um' HH:mm");
        test.equal(result2, "E, dd.MM.yy, HH:mm");

        result1 = new DateFmt({locale:"de-CH", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_de_DE: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"de-DE", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"de-DE", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"de-DE", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"de-DE", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy");
        test.equal(result2, "EEE, d. MMMM yyyy");
        test.equal(result3, "EE, dd.MM.yyyy");
        test.equal(result4, "E, dd.MM.yy");

        result1 = new DateFmt({locale:"de-DE", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"de-DE", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy 'um' HH:mm");
        test.equal(result2, "E, dd.MM.yy, HH:mm");

        result1 = new DateFmt({locale:"de-DE", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_de_LU: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"de-LU", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"de-LU", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"de-LU", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"de-LU", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy");
        test.equal(result2, "EEE, d. MMMM yyyy");
        test.equal(result3, "EE, dd.MM.yyyy");
        test.equal(result4, "E, dd.MM.yy");

        result1 = new DateFmt({locale:"de-LU", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"de-LU", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy 'um' HH:mm");
        test.equal(result2, "E, dd.MM.yy, HH:mm");

        result1 = new DateFmt({locale:"de-LU", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_el_CY: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"el-CY", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"el-CY", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"el-CY", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"el-CY", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E d/M/yy");

        result1 = new DateFmt({locale:"el-CY", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"el-CY", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, 'EEEE d MMMM yyyy στις h:mm a');
        test.equal(result2, "E d/M/yy, h:mm a");

        result1 = new DateFmt({locale:"el-CY", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_el_GR: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"el-GR", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"el-GR", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"el-GR", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"el-GR", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E d/M/yy");

        result1 = new DateFmt({locale:"el-GR", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"el-GR", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, 'EEEE d MMMM yyyy στις h:mm a');
        test.equal(result2, "E d/M/yy, h:mm a");

        result1 = new DateFmt({locale:"el-GR", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_en_AM: function(test) {
        test.expect(7);
        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-AM", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-AM", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-AM", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-AM", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, M/d/yy");

        result1 = new DateFmt({locale:"en-AM", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-AM", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy 'at' HH:mm");
        test.equal(result2, "E, M/d/yy, HH:mm");

        result1 = new DateFmt({locale:"en-AM", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_en_AU: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-AU", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-AU", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-AU", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-AU", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"en-AU", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-AU", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' h:mm a");
        test.equal(result2, "E, d/M/yy, h:mm a");

        result1 = new DateFmt({locale:"en-AU", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_en_AZ: function(test) {
        test.expect(7);
        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-AZ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-AZ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-AZ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-AZ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, M/d/yy");

        result1 = new DateFmt({locale:"en-AZ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-AZ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy 'at' HH:mm");
        test.equal(result2, "E, M/d/yy, HH:mm");

        result1 = new DateFmt({locale:"en-AZ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_en_CA: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-CA", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-CA", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-CA", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-CA", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, yyyy-MM-dd");

        result1 = new DateFmt({locale:"en-CA", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-CA", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy 'at' h:mm a");
        test.equal(result2, "E, yyyy-MM-dd, h:mm a");

        result1 = new DateFmt({locale:"en-CA", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_en_GB: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-GB", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-GB", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-GB", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-GB", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"en-GB", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-GB", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' HH:mm");
        test.equal(result2, "E, dd/MM/yyyy, HH:mm");

        result1 = new DateFmt({locale:"en-GB", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_en_GH: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-GH", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-GH", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-GH", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-GH", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"en-GH", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-GH", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' h:mm a");
        test.equal(result2, "E, dd/MM/yyyy, h:mm a");

        result1 = new DateFmt({locale:"en-GH", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_en_HK: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-HK", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-HK", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-HK", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-HK", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yyyy");

        result1 = new DateFmt({locale:"en-HK", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-HK", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' h:mm a");
        test.equal(result2, "E, d/M/yyyy, h:mm a");

        result1 = new DateFmt({locale:"en-HK", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_en_IE: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-IE", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-IE", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-IE", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-IE", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"en-IE", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-IE", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'at' HH:mm")
        test.equal(result2, "E dd/MM/yyyy, HH:mm");

        result1 = new DateFmt({locale:"en-IE", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_en_IN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-IN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-IN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-IN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-IN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yy");

        result1 = new DateFmt({locale:"en-IN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-IN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' h:mm a");
        test.equal(result2, "E, dd/MM/yy, h:mm a");

        result1 = new DateFmt({locale:"en-IN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_en_IS: function(test) {
        test.expect(7);
        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-IS", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-IS", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-IS", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-IS", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, M/d/yy");

        result1 = new DateFmt({locale:"en-IS", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-IS", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy 'at' HH:mm");
        test.equal(result2, "E, M/d/yy, HH:mm");

        result1 = new DateFmt({locale:"en-IS", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_en_JP: function(test) {
        test.expect(7);
        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-JP", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-JP", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-JP", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-JP", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, M/d/yy");

        result1 = new DateFmt({locale:"en-JP", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-JP", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy 'at' HH:mm");
        test.equal(result2, "E, M/d/yy, HH:mm");

        result1 = new DateFmt({locale:"en-JP", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_en_KE: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-KE", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-KE", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-KE", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-KE", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"en-KE", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-KE", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' HH:mm");
        test.equal(result2, "E, dd/MM/yyyy, HH:mm");

        result1 = new DateFmt({locale:"en-KE", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_en_KR: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-KR", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-KR", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-KR", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-KR", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, M/d/yy");

        result1 = new DateFmt({locale:"en-KR", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-KR", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy 'at' h:mm a");
        test.equal(result2, "E, M/d/yy, h:mm a");

        result1 = new DateFmt({locale:"en-KR", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_en_LK: function(test) {
        test.expect(7);
        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-LK", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-LK", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-LK", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-LK", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, M/d/yy");

        result1 = new DateFmt({locale:"en-LK", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-LK", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy 'at' HH:mm");
        test.equal(result2, "E, M/d/yy, HH:mm");

        result1 = new DateFmt({locale:"en-LK", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_en_MM: function(test) {
        test.expect(7);
        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-MM", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-MM", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-MM", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-MM", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, M/d/yy");

        result1 = new DateFmt({locale:"en-MM", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-MM", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy 'at' HH:mm");
        test.equal(result2, "E, M/d/yy, HH:mm");

        result1 = new DateFmt({locale:"en-MM", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_en_MW: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-MW", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-MW", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-MW", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-MW", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"en-MW", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-MW", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' h:mm a")
        test.equal(result2, "E, dd/MM/yyyy, h:mm a");

        result1 = new DateFmt({locale:"en-MW", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_en_MY: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-MY", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-MY", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-MY", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-MY", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"en-MY", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-MY", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' h:mm a");
        test.equal(result2, "E, dd/MM/yyyy, h:mm a");

        result1 = new DateFmt({locale:"en-MY", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_en_NG: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-NG", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-NG", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-NG", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-NG", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"en-NG", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-NG", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' HH:mm");
        test.equal(result2, "E, dd/MM/yyyy, HH:mm");

        result1 = new DateFmt({locale:"en-NG", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_en_NZ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-NZ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-NZ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-NZ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-NZ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"en-NZ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-NZ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' h:mm a");
        test.equal(result2, "E, dd/MM/yyyy, h:mm a");

        result1 = new DateFmt({locale:"en-NZ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_en_PH: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-PH", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-PH", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-PH", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-PH", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, M/d/yy");

        result1 = new DateFmt({locale:"en-PH", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-PH", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy 'at' h:mm a");
        test.equal(result2, "E, M/d/yy, h:mm a");

        result1 = new DateFmt({locale:"en-PH", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_en_PR: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-PR", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-PR", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-PR", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-PR", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, M/d/yy");

        result1 = new DateFmt({locale:"en-PR", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-PR", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy 'at' h:mm a");
        test.equal(result2, "E, M/d/yy, h:mm a");

        result1 = new DateFmt({locale:"en-PR", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_en_SG: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-SG", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-SG", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-SG", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-SG", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"en-SG", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-SG", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' h:mm a");
        test.equal(result2, 'E, d/M/yy, h:mm a');

        result1 = new DateFmt({locale:"en-SG", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_en_US: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-US", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-US", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-US", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-US", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, M/d/yy");

        result1 = new DateFmt({locale:"en-US", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-US", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy 'at' h:mm a");
        test.equal(result2, 'E, M/d/yy, h:mm a');

        result1 = new DateFmt({locale:"en-US", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_en_UG: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-UG", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-UG", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-UG", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-UG", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"en-UG", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-UG", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' HH:mm");
        test.equal(result2, "E, dd/MM/yyyy, HH:mm");

        result1 = new DateFmt({locale:"en-UG", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_en_ZA: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-ZA", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-ZA", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-ZA", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-ZA", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, dd MMMM yyyy");
        test.equal(result2, "EEE, dd MMMM yyyy");
        test.equal(result3, "EE, dd MMM yyyy");
        test.equal(result4, "E, yyyy/MM/dd");

        result1 = new DateFmt({locale:"en-ZA", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-ZA", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, dd MMMM yyyy 'at' HH:mm" );
        test.equal(result2, "E, yyyy/MM/dd, HH:mm");

        result1 = new DateFmt({locale:"en-ZA", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_en_ZM: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-ZM", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-ZM", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-ZM", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-ZM", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"en-ZM", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-ZM", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' h:mm a");
        test.equal(result2, 'E, dd/MM/yyyy, h:mm a');

        result1 = new DateFmt({locale:"en-ZM", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_es_AR: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-AR", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-AR", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-AR", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-AR", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"es-AR", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-AR", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E, d/M/yy, h:mm a');

        result1 = new DateFmt({locale:"es-AR", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_es_BO: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-BO", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-BO", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-BO", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-BO", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d MMM 'de' yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"es-BO", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-BO", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E, d/M/yy, h:mm a');

        result1 = new DateFmt({locale:"es-BO", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_es_CL: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-CL", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-CL", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-CL", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-CL", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, dd-MM-yyyy");
        test.equal(result4, "E, dd-MM-yy");

        result1 = new DateFmt({locale:"es-CL", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-CL", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E, dd-MM-yy, h:mm a');

        result1 = new DateFmt({locale:"es-CL", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_es_CO: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-CO", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-CO", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-CO", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-CO", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d/MM/yyyy");
        test.equal(result4, "E, d/MM/yy");

        result1 = new DateFmt({locale:"es-CO", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-CO", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E, d/MM/yy, h:mm a');

        result1 = new DateFmt({locale:"es-CO", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_es_DO: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-DO", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-DO", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-DO", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-DO", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"es-DO", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-DO", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E, d/M/yy, h:mm a');

        result1 = new DateFmt({locale:"es-DO", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_es_EC: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-EC", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-EC", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-EC", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-EC", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"es-EC", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-EC", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E, d/M/yy, h:mm a');

        result1 = new DateFmt({locale:"es-EC", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_es_ES: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-ES", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-ES", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-ES", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-ES", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"es-ES", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-ES", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, H:mm");
        test.equal(result2, "E, d/M/yy, H:mm");

        result1 = new DateFmt({locale:"es-ES", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "H:mm:ss z");

        test.done();
    },
    testDateTimeFormat_es_GT: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-GT", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-GT", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-GT", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-GT", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d/MM/yyyy");
        test.equal(result4, "E, d/MM/yy");

        result1 = new DateFmt({locale:"es-GT", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-GT", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E, d/MM/yy, h:mm a');

        result1 = new DateFmt({locale:"es-GT", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_es_HN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-HN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-HN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-HN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-HN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE dd 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE dd 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E d/M/yy");

        result1 = new DateFmt({locale:"es-HN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-HN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE dd 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E d/M/yy, h:mm a');

        result1 = new DateFmt({locale:"es-HN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_es_MX: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-MX", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-MX", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-MX", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-MX", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yy");

        result1 = new DateFmt({locale:"es-MX", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-MX", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E, dd/MM/yy, h:mm a');

        result1 = new DateFmt({locale:"es-MX", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_es_NI: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-NI", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-NI", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-NI", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-NI", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"es-NI", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-NI", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E, d/M/yy, h:mm a');

        result1 = new DateFmt({locale:"es-NI", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_es_PA: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-PA", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-PA", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-PA", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-PA", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, MM/dd/yyyy");
        test.equal(result4, "E, MM/dd/yy");

        result1 = new DateFmt({locale:"es-PA", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-PA", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E, MM/dd/yy, h:mm a');

        result1 = new DateFmt({locale:"es-PA", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');
        test.done();
    },
    testDateTimeFormat_es_PE: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-PE", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-PE", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-PE", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-PE", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/MM/yy");

        result1 = new DateFmt({locale:"es-PE", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-PE", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E, d/MM/yy, h:mm a');

        result1 = new DateFmt({locale:"es-PE", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_es_PR: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-PR", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-PR", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-PR", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-PR", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, MM/dd/yyyy");
        test.equal(result4, "E, MM/dd/yy");

        result1 = new DateFmt({locale:"es-PR", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-PR", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E, MM/dd/yy, h:mm a');

        result1 = new DateFmt({locale:"es-PR", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_es_PY: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-PY", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-PY", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-PY", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-PY", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"es-PY", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-PY", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E, d/M/yy, h:mm a');

        result1 = new DateFmt({locale:"es-PY", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_es_SV: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-SV", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-SV", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-SV", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-SV", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"es-SV", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-SV", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E, d/M/yy, h:mm a');

        result1 = new DateFmt({locale:"es-SV", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_es_US: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-US", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-US", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-US", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-US", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yyyy");

        result1 = new DateFmt({locale:"es-US", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-US", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E, d/M/yyyy, h:mm a');

        result1 = new DateFmt({locale:"es-US", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_es_UY: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-UY", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-UY", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-UY", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-UY", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"es-UY", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-UY", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E, d/M/yy, h:mm a');

        result1 = new DateFmt({locale:"es-UY", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_es_VE: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-VE", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-VE", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-VE", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-VE", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"es-VE", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-VE", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, "E, d/M/yy, h:mm a");

        result1 = new DateFmt({locale:"es-VE", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_et_EE: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"et-EE", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"et-EE", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"et-EE", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"et-EE", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy");
        test.equal(result2, "EEE, d. MMMM yyyy");
        test.equal(result3, "EE, d. MMM yyyy");
        test.equal(result4, "E, dd.MM.yy");

        result1 = new DateFmt({locale:"et-EE", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"et-EE", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy, 'kell' HH:mm");
        test.equal(result2, 'E, dd.MM.yy, HH:mm');

        result1 = new DateFmt({locale:"et-EE", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_fa_AF: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fa-AF", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fa-AF", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fa-AF", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fa-AF", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, '‏yyyy MMMM d, EEEE');
        test.equal(result2, '‏d MMMM yyyy, EEE');
        test.equal(result3, '‏d MMM yyyy, EE');
        test.equal(result4, '‏yyyy/M/d, E');

        result1 = new DateFmt({locale:"fa-AF", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fa-AF", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, '‏yyyy MMMM d, EEEE، ساعت ‏H:mm');
        test.equal(result2, '‏yyyy/M/d, E،‏ ‏H:mm');

        result1 = new DateFmt({locale:"fa-AF", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, '‏H:mm:ss (z)');

        test.done();
    },
    testDateTimeFormat_fa_IR: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fa-IR", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fa-IR", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fa-IR", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fa-IR", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, '‏yyyy MMMM d, EEEE');
        test.equal(result2, '‏d MMMM yyyy, EEE');
        test.equal(result3, '‏d MMM yyyy, EE');
        test.equal(result4, '‏yyyy/M/d, E');

        result1 = new DateFmt({locale:"fa-IR", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fa-IR", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, '‏yyyy MMMM d, EEEE، ساعت ‏H:mm');
        test.equal(result2, '‏yyyy/M/d, E،‏ ‏H:mm');

        result1 = new DateFmt({locale:"fa-IR", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, '‏H:mm:ss (z)');

        test.done();
    },
    testDateTimeFormat_fi_FI: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fi-FI", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fi-FI", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fi-FI", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fi-FI", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "cccc d. MMMM yyyy");
        test.equal(result2, "ccc d. MMMM yyyy");
        test.equal(result3, "cc d.M.yyyy");
        test.equal(result4, "c d.M.yyyy");

        result1 = new DateFmt({locale:"fi-FI", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fi-FI", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "cccc d. MMMM yyyy 'klo' H.mm");
        test.equal(result2, "c d.M.yyyy 'klo' H.mm");

        result1 = new DateFmt({locale:"fi-FI", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "H.mm.ss z");

        test.done();
    },
    testDateTimeFormat_fr_BE: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-BE", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-BE", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-BE", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-BE", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E d/MM/yy");

        result1 = new DateFmt({locale:"fr-BE", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-BE", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E d/MM/yy HH:mm");

        result1 = new DateFmt({locale:"fr-BE", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_fr_CA: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-CA", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-CA", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-CA", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-CA", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, 'E yyyy-MM-dd');

        result1 = new DateFmt({locale:"fr-CA", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-CA", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH 'h' mm");
        test.equal(result2, 'E yyyy-MM-dd HH \'h\' mm');

        result1 = new DateFmt({locale:"fr-CA", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH 'h' mm 'min' ss 's' z");

        test.done();
    },
    testDateTimeFormat_fr_CH: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-CH", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-CH", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-CH", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-CH", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd.MM.yy");

        result1 = new DateFmt({locale:"fr-CH", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-CH", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E, dd.MM.yy HH:mm");

        result1 = new DateFmt({locale:"fr-CH", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_fr_FR: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-FR", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-FR", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-FR", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-FR", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-FR", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-FR", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E dd/MM/yyyy HH:mm");

        result1 = new DateFmt({locale:"fr-FR", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_fr_LU: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-LU", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-LU", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-LU", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-LU", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-LU", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-LU", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E dd/MM/yyyy HH:mm");

        result1 = new DateFmt({locale:"fr-LU", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_ga_IE: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ga-IE", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ga-IE", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ga-IE", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ga-IE", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"ga-IE", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ga-IE", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'ag' HH:mm");
        test.equal(result2, 'E dd/MM/yyyy, HH:mm');

        result1 = new DateFmt({locale:"ga-IE", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_gu_IN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"gu-IN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"gu-IN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"gu-IN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"gu-IN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM, yyyy");
        test.equal(result2, "EEE, d MMMM, yyyy");
        test.equal(result3, "EE, d MMM, yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"gu-IN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"gu-IN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, 'EEEE, d MMMM, yyyy એ hh:mm a વાગ્યે');
        test.equal(result2, "E, d/M/yy hh:mm a");

        result1 = new DateFmt({locale:"gu-IN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "hh:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_he_IL: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"he-IL", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"he-IL", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"he-IL", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"he-IL", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, 'EEEE, d בMMMM yyyy');
        test.equal(result2, 'EEE, d בMMMM yyyy');
        test.equal(result3, 'EE, d בMMM yyyy');
        test.equal(result4, 'E, d.M.yyyy');

        result1 = new DateFmt({locale:"he-IL", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"he-IL", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, 'EEEE, d בMMMM yyyy בשעה ‏H:mm');
        test.equal(result2, 'E, d.M.yyyy, ‏H:mm');

        result1 = new DateFmt({locale:"he-IL", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, '‏H:mm:ss z');

        test.done();
    },
    testDateTimeFormat_hi_IN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"hi-IN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"hi-IN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"hi-IN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"hi-IN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"hi-IN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"hi-IN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, 'EEEE, d MMMM yyyy को h:mm a बजे');
        test.equal(result2, "E, d/M/yy, h:mm a");

        result1 = new DateFmt({locale:"hi-IN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_hr_HR: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"hr-HR", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"hr-HR", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"hr-HR", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"hr-HR", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy.");
        test.equal(result2, "EEE, d. MMMM yyyy.");
        test.equal(result3, "EE, d. MMM yyyy.");
        test.equal(result4, "E, dd. MM. yyyy.");

        result1 = new DateFmt({locale:"hr-HR", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"hr-HR", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy. 'u' HH:mm");
        test.equal(result2, "E, dd. MM. yyyy. HH:mm");

        result1 = new DateFmt({locale:"hr-HR", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_hr_ME: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"hr-ME", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"hr-ME", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"hr-ME", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"hr-ME", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy.");
        test.equal(result2, "EEE, d. MMMM yyyy.");
        test.equal(result3, "EE, d. MMM yyyy.");
        test.equal(result4, "E, dd. MM. yyyy.");

        result1 = new DateFmt({locale:"hr-ME", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"hr-ME", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy. 'u' HH:mm");
        test.equal(result2, "E, dd. MM. yyyy. HH:mm");

        result1 = new DateFmt({locale:"hr-ME", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_hr_HU: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"hr-HU", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"hr-HU", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"hr-HU", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"hr-HU", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy.");
        test.equal(result2, "EEE, d. MMMM yyyy.");
        test.equal(result3, "EE, d. MMM yyyy.");
        test.equal(result4, "E, dd. MM. yyyy.");

        result1 = new DateFmt({locale:"hr-HU", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"hr-HU", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy. 'u' HH:mm");
        test.equal(result2, "E, dd. MM. yyyy. HH:mm");

        result1 = new DateFmt({locale:"hr-HU", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_id_ID: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"id-ID", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"id-ID", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"id-ID", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"id-ID", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, dd MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yy");

        result1 = new DateFmt({locale:"id-ID", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"id-ID", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, dd MMMM yyyy 'pukul' HH.mm");
        test.equal(result2, 'E, dd/MM/yy, HH.mm');

        result1 = new DateFmt({locale:"id-ID", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH.mm.ss z");

        test.done();
    },
    testDateTimeFormat_is_IS: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"is-IS", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"is-IS", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"is-IS", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"is-IS", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy");
        test.equal(result2, "EEE, d. MMMM yyyy");
        test.equal(result3, "EE, d. MMM yyyy");
        test.equal(result4, "E, d.M.yyyy");

        result1 = new DateFmt({locale:"is-IS", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"is-IS", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy 'kl'. HH:mm");
        test.equal(result2, "E, d.M.yyyy, HH:mm");

        result1 = new DateFmt({locale:"is-IS", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_it_CH: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"it-CH", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"it-CH", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"it-CH", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"it-CH", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd.MM.yy");

        result1 = new DateFmt({locale:"it-CH", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"it-CH", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'alle' 'ore' HH:mm");
        test.equal(result2, "E, dd.MM.yy, HH:mm");

        result1 = new DateFmt({locale:"it-CH", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_it_IT: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"it-IT", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"it-IT", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"it-IT", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"it-IT", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yy");

        result1 = new DateFmt({locale:"it-IT", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"it-IT", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'alle' 'ore' HH:mm");
        test.equal(result2, "E dd/MM/yy, HH:mm");

        result1 = new DateFmt({locale:"it-IT", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_ja_JP: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ja-JP", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ja-JP", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ja-JP", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ja-JP", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy年M月d日EEEE");
        test.equal(result2, "yyyy年M月d日EEE");
        test.equal(result3, "yyyy/MM/ddEE");
        test.equal(result4, "yyyy/MM/ddE");

        result1 = new DateFmt({locale:"ja-JP", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ja-JP", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy年M月d日EEEE H:mm");
        test.equal(result2, "yyyy/MM/ddE H:mm");

        result1 = new DateFmt({locale:"ja-JP", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "H:mm:ss z");

        test.done();
    },
    testDateTimeFormat_kk_KZ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"kk-KZ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"kk-KZ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"kk-KZ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"kk-KZ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy 'ж'. d MMMM, EEEE");
        test.equal(result2, "yyyy 'ж'. d MMMM, EEE");
        test.equal(result3, "yyyy 'ж'. dd MMM, EE");
        test.equal(result4, "dd.MM.yy, E");

        result1 = new DateFmt({locale:"kk-KZ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"kk-KZ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy 'ж'. d MMMM, EEEE, HH:mm");
        test.equal(result2, "dd.MM.yy, E, HH:mm");

        result1 = new DateFmt({locale:"kk-KZ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_kn_IN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"kn-IN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"kn-IN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"kn-IN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"kn-IN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"kn-IN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"kn-IN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, 'EEEE, MMMM d, yyyy ರಂದು hh:mm a ಸಮಯಕ್ಕೆ');
        test.equal(result2, 'E, d/M/yy, hh:mm a');

        result1 = new DateFmt({locale:"kn-IN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "hh:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ko_KR: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ko-KR", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ko-KR", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ko-KR", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ko-KR", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy년 MMMM d일 EEEE");
        test.equal(result2, "yyyy년 MMMM d일 EEE");
        test.equal(result3, "yyyy. M. d. EE");
        test.equal(result4, "yy. M. d. E");

        result1 = new DateFmt({locale:"ko-KR", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ko-KR", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy년 MMMM d일 EEEE a h:mm");
        test.equal(result2, "yy. M. d. E a h:mm");

        result1 = new DateFmt({locale:"ko-KR", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "a h:mm:ss z");

        test.done();
    },
    testDateTimeFormat_ku_IQ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ku-IQ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ku-IQ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ku-IQ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ku-IQ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, '‏yyyy MMMM d, EEEE');
        test.equal(result2, '‏dی MMMMی yyyy, EEE');
        test.equal(result3, '‏yyyy MMM d, EE');
        test.equal(result4, '‏yyyy-MM-dd, E');

        result1 = new DateFmt({locale:"ku-IQ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ku-IQ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, '‏yyyy MMMM d, EEEE ‏h:mm a');
        test.equal(result2, '‏yyyy-MM-dd, E ‏h:mm a');

        result1 = new DateFmt({locale:"ku-IQ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, '‏h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_lt_LT: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"lt-LT", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"lt-LT", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"lt-LT", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"lt-LT", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy 'm'. MMMM d 'd'., EEEE");
        test.equal(result2, "yyyy 'm'. MMMM d 'd'., EEE");
        test.equal(result3, "yyyy-MM-dd, EE");
        test.equal(result4, "yyyy-MM-dd, E");

        result1 = new DateFmt({locale:"lt-LT", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"lt-LT", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy 'm'. MMMM d 'd'., EEEE HH:mm");
        test.equal(result2, "yyyy-MM-dd, E HH:mm");

        result1 = new DateFmt({locale:"lt-LT", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_lv_LV: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"lv-LV", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"lv-LV", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"lv-LV", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"lv-LV", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, yyyy. 'gada' d. MMMM");
        test.equal(result2, "EEE, yyyy. 'gada' d. MMMM");
        test.equal(result3, "EE, yyyy. 'gada' d. MMM");
        test.equal(result4, "E, dd.MM.yy");

        result1 = new DateFmt({locale:"lv-LV", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"lv-LV", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, yyyy. 'gada' d. MMMM HH:mm");
        test.equal(result2, "E, dd.MM.yy HH:mm");

        result1 = new DateFmt({locale:"lv-LV", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_mk_MK: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"mk-MK", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"mk-MK", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"mk-MK", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"mk-MK", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'.");
        test.equal(result2, "EEE, d MMMM yyyy 'г'.");
        test.equal(result3, "EE, d.M.yyyy 'г'.");
        test.equal(result4, 'E, d.M.yy');

        result1 = new DateFmt({locale:"mk-MK", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"mk-MK", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'., 'во' HH:mm");
        test.equal(result2, "E, d.M.yy, 'во' HH:mm");

        result1 = new DateFmt({locale:"mk-MK", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_ml_IN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ml-IN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ml-IN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ml-IN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ml-IN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy, MMMM d, EEEE");
        test.equal(result2, "yyyy, MMMM d, EEE");
        test.equal(result3, "yyyy, MMM d, EE");
        test.equal(result4, "d/M/yy, E");

        result1 = new DateFmt({locale:"ml-IN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ml-IN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy, MMMM d, EEEE h:mm a");
        test.equal(result2, "d/M/yy, E h:mm a");

        result1 = new DateFmt({locale:"ml-IN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_mr_IN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"mr-IN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"mr-IN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"mr-IN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"mr-IN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM, yyyy");
        test.equal(result2, "EEE, d MMMM, yyyy");
        test.equal(result3, "EE, d MMM, yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"mr-IN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"mr-IN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM, yyyy रोजी h:mm a");
        test.equal(result2, "E, d/M/yy, h:mm a");

        result1 = new DateFmt({locale:"mr-IN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ms_MY: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ms-MY", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ms-MY", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ms-MY", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ms-MY", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/MM/yy");

        result1 = new DateFmt({locale:"ms-MY", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ms-MY", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'pada' h:mm a");
        test.equal(result2, "E, d/MM/yy, h:mm a");

        result1 = new DateFmt({locale:"ms-MY", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ms_BN: function(test) {
        test.expect(15);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ms-BN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ms-BN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ms-BN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ms-BN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE dd MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E d/MM/yy");

        result1 = new DateFmt({locale:"ms-BN", type:"date", date:"dmw", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ms-BN", type:"date", date:"dmw", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ms-BN", type:"date", date:"dmw", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ms-BN", type:"date", date:"dmw", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE dd MMMM");
        test.equal(result2, "EEE d MMMM");
        test.equal(result3, "EE d MMM");
        test.equal(result4, "E d/MM");

        result1 = new DateFmt({locale:"ms-BN", type:"date", date:"dw", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ms-BN", type:"date", date:"dw", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ms-BN", type:"date", date:"dw", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ms-BN", type:"date", date:"dw", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE dd");
        test.equal(result2, "EEE d");
        test.equal(result3, "EE d");
        test.equal(result4, "E d");

        result1 = new DateFmt({locale:"ms-BN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ms-BN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE dd MMMM yyyy 'pada' h:mm a");
        test.equal(result2, "E d/MM/yy, h:mm a");

        result1 = new DateFmt({locale:"ms-BN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_nb_NO: function(test) {
        test.expect(8);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"nb-NO", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"nb-NO", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"nb-NO", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"nb-NO", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d. MMMM yyyy");
        test.equal(result2, "EEE d. MMMM yyyy");
        test.equal(result3, "EE d. MMM yyyy");
        test.equal(result4, "E dd.MM.yyyy");

        result1 = new DateFmt({locale:"nb-NO", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"nb-NO", type:"datetime", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"nb-NO", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d. MMMM yyyy 'kl'. HH:mm");
        test.equal(result2, "EEE d. MMMM yyyy 'kl'. HH:mm");
        test.equal(result3, "E dd.MM.yyyy, HH:mm");

        result1 = new DateFmt({locale:"nb-NO", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_nl_BE: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"nl-BE", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"nl-BE", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"nl-BE", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"nl-BE", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E d/MM/yyyy");

        result1 = new DateFmt({locale:"nl-BE", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"nl-BE", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'om' HH:mm");
        test.equal(result2, "E d/MM/yyyy, HH:mm");

        result1 = new DateFmt({locale:"nl-BE", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_nl_NL: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"nl-NL", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"nl-NL", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"nl-NL", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"nl-NL", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd-MM-yyyy");

        result1 = new DateFmt({locale:"nl-NL", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"nl-NL", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'om' HH:mm");
        test.equal(result2, "E dd-MM-yyyy, HH:mm");

        result1 = new DateFmt({locale:"nl-NL", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_pa_Guru_IN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"pa-Guru-IN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"pa-Guru-IN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"pa-Guru-IN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"pa-Guru-IN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"pa-Guru-IN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"pa-Guru-IN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy h:mm a");
        test.equal(result2, "E, d/M/yy, h:mm a");

        result1 = new DateFmt({locale:"pa-Guru-IN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_pl_PL: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"pl-PL", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"pl-PL", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"pl-PL", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"pl-PL", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d.MM.yyyy");

        result1 = new DateFmt({locale:"pl-PL", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"pl-PL", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy HH:mm");
        test.equal(result2, "E, d.MM.yyyy, HH:mm");

        result1 = new DateFmt({locale:"pl-PL", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_pt_BR: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"pt-BR", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"pt-BR", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"pt-BR", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"pt-BR", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d 'de' MMM 'de' yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"pt-BR", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"pt-BR", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy 'às' HH:mm");
        test.equal(result2, "E, dd/MM/yyyy, HH:mm");

        result1 = new DateFmt({locale:"pt-BR", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_pt_PT: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"pt-PT", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"pt-PT", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"pt-PT", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"pt-PT", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, dd/MM/yyyy");
        test.equal(result4, "E, dd/MM/yy");

        result1 = new DateFmt({locale:"pt-PT", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"pt-PT", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy 'às' HH:mm");
        test.equal(result2, "E, dd/MM/yy, HH:mm");

        result1 = new DateFmt({locale:"pt-PT", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_ro_RO: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ro-RO", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ro-RO", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ro-RO", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ro-RO", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd.MM.yyyy");

        result1 = new DateFmt({locale:"ro-RO", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ro-RO", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'la' HH:mm");
        test.equal(result2, "E, dd.MM.yyyy, HH:mm");

        result1 = new DateFmt({locale:"ro-RO", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_sr_Cyrl_RS: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"sr-Cyrl-RS", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"sr-Cyrl-RS", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"sr-Cyrl-RS", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"sr-Cyrl-RS", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy.");
        test.equal(result2, "EEE, d. MMMM yyyy.");
        test.equal(result3, "EE, d. M. yyyy.");
        test.equal(result4, "E, d. M. yyyy.");

        result1 = new DateFmt({locale:"sr-Cyrl-RS", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"sr-Cyrl-RS", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy. HH:mm");
        test.equal(result2, "E, d. M. yyyy. HH:mm");

        result1 = new DateFmt({locale:"sr-Cyrl-RS", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_sr_Latn_RS: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"sr-Latn-RS", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"sr-Latn-RS", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"sr-Latn-RS", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"sr-Latn-RS", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy.");
        test.equal(result2, "EEE, d. MMMM yyyy.");
        test.equal(result3, "EE, d. M. yyyy.");
        test.equal(result4, "E, d. M. yyyy.");

        result1 = new DateFmt({locale:"sr-Latn-RS", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"sr-Latn-RS", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy. HH:mm");
        test.equal(result2, "E, d. M. yyyy. HH:mm");

        result1 = new DateFmt({locale:"sr-Latn-RS", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_ru_BY: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ru-BY", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ru-BY", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ru-BY", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ru-BY", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'.");
        test.equal(result2, "EEE, d MMMM yyyy 'г'.");
        test.equal(result3, "EE, d MMM yyyy 'г'.");
        test.equal(result4, "E, dd.MM.yyyy");

        result1 = new DateFmt({locale:"ru-BY", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ru-BY", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'. 'в' HH:mm");
        test.equal(result2, "E, dd.MM.yyyy, HH:mm");

        result1 = new DateFmt({locale:"ru-BY", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_ru_KG: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ru-KG", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ru-KG", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ru-KG", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ru-KG", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'.");
        test.equal(result2, "EEE, d MMMM yyyy 'г'.");
        test.equal(result3, "EE, d MMM yyyy 'г'.");
        test.equal(result4, "E, dd.MM.yyyy");

        result1 = new DateFmt({locale:"ru-KG", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ru-KG", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'. 'в' HH:mm");
        test.equal(result2, "E, dd.MM.yyyy, HH:mm");

        result1 = new DateFmt({locale:"ru-KG", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_ru_KZ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ru-KZ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ru-KZ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ru-KZ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ru-KZ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'.");
        test.equal(result2, "EEE, d MMMM yyyy 'г'.");
        test.equal(result3, "EE, d MMM yyyy 'г'.");
        test.equal(result4, "E, dd.MM.yyyy");

        result1 = new DateFmt({locale:"ru-KZ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ru-KZ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'. 'в' HH:mm");
        test.equal(result2, "E, dd.MM.yyyy, HH:mm");

        result1 = new DateFmt({locale:"ru-KZ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_ru_GE: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ru-GE", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ru-GE", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ru-GE", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ru-GE", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'.");
        test.equal(result2, "EEE, d MMMM yyyy 'г'.");
        test.equal(result3, "EE, d MMM yyyy 'г'.");
        test.equal(result4, "E, dd.MM.yyyy");

        result1 = new DateFmt({locale:"ru-GE", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ru-GE", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'. 'в' HH:mm");
        test.equal(result2, "E, dd.MM.yyyy, HH:mm");

        result1 = new DateFmt({locale:"ru-GE", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_ru_RU: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ru-RU", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ru-RU", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ru-RU", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ru-RU", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'.");
        test.equal(result2, "EEE, d MMMM yyyy 'г'.");
        test.equal(result3, "EE, d MMM yyyy 'г'.");
        test.equal(result4, "E, dd.MM.yyyy");

        result1 = new DateFmt({locale:"ru-RU", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ru-RU", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'. 'в' HH:mm");
        test.equal(result2, "E, dd.MM.yyyy, HH:mm");

        result1 = new DateFmt({locale:"ru-RU", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_ru_UA: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ru-UA", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ru-UA", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ru-UA", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ru-UA", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'.");
        test.equal(result2, "EEE, d MMMM yyyy 'г'.");
        test.equal(result3, "EE, d MMM yyyy 'г'.");
        test.equal(result4, "E, dd.MM.yyyy");

        result1 = new DateFmt({locale:"ru-UA", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ru-UA", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'. 'в' HH:mm");
        test.equal(result2, "E, dd.MM.yyyy, HH:mm");

        result1 = new DateFmt({locale:"ru-UA", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");


        test.done();
    },
    testDateTimeFormat_sk_SK: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"sk-SK", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"sk-SK", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"sk-SK", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"sk-SK", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d. MMMM yyyy");
        test.equal(result2, "EEE d. MMMM yyyy");
        test.equal(result3, "EE d. M. yyyy");
        test.equal(result4, "E d. M. yyyy");

        result1 = new DateFmt({locale:"sk-SK", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"sk-SK", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d. MMMM yyyy 'o' H:mm");
        test.equal(result2, "E d. M. yyyy H:mm");

        result1 = new DateFmt({locale:"sk-SK", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "H:mm:ss z");

        test.done();
    },
    testDateTimeFormat_sl_SI: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"sl-SI", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"sl-SI", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"sl-SI", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"sl-SI", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy");
        test.equal(result2, "EEE, d. MMMM yyyy");
        test.equal(result3, "EE, d. MMM yyyy");
        test.equal(result4, "E, d. M. yy");

        result1 = new DateFmt({locale:"sl-SI", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"sl-SI", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy 'ob' HH:mm");
        test.equal(result2, "E, d. M. yy, HH:mm");

        result1 = new DateFmt({locale:"sl-SI", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_sq_AL: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"sq-AL", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"sq-AL", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"sq-AL", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"sq-AL", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d.M.yy");

        result1 = new DateFmt({locale:"sq-AL", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"sq-AL", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'në' h:mm a");
        test.equal(result2, "E, d.M.yy, h:mm a");

        result1 = new DateFmt({locale:"sq-AL", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_sq_ME: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"sq-ME", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"sq-ME", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"sq-ME", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"sq-ME", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d.M.yy");

        result1 = new DateFmt({locale:"sq-ME", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"sq-ME", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'në' HH:mm");
        test.equal(result2, "E, d.M.yy, HH:mm");

        result1 = new DateFmt({locale:"sq-ME", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_sv_FI: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"sv-FI", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"sv-FI", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"sv-FI", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"sv-FI", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, 'EEEE d MMMM yyyy');
        test.equal(result2, 'EEE d MMMM yyyy');
        test.equal(result3, 'EE d MMM yyyy');
        test.equal(result4, 'E yyyy-MM-dd');

        result1 = new DateFmt({locale:"sv-FI", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"sv-FI", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'kl'. HH:mm");
        test.equal(result2, 'E yyyy-MM-dd HH:mm');

        result1 = new DateFmt({locale:"sv-FI", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_sv_SE: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"sv-SE", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"sv-SE", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"sv-SE", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"sv-SE", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E yyyy-MM-dd");

        result1 = new DateFmt({locale:"sv-SE", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"sv-SE", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'kl'. HH:mm");
        test.equal(result2, "E yyyy-MM-dd HH:mm");

        result1 = new DateFmt({locale:"sv-SE", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");


        test.done();
    },
    testDateTimeFormat_ta_IN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ta-IN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ta-IN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ta-IN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ta-IN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM, yyyy");
        test.equal(result2, "EEE, d MMMM, yyyy");
        test.equal(result3, "EE, d MMM, yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"ta-IN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ta-IN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM, yyyy அன்று h:mm a");
        test.equal(result2, "E, d/M/yy, h:mm a");

        result1 = new DateFmt({locale:"ta-IN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_te_IN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"te-IN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"te-IN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"te-IN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"te-IN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "d, MMMM yyyy, EEEE");
        test.equal(result2, "d MMMM, yyyy, EEE");
        test.equal(result3, "d MMM, yyyy, EE");
        test.equal(result4, "dd-MM-yy, E");

        result1 = new DateFmt({locale:"te-IN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"te-IN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "d, MMMM yyyy, EEEE h:mm aకి");
        test.equal(result2, "dd-MM-yy, E h:mm a");

        result1 = new DateFmt({locale:"te-IN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_th_TH: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"th-TH", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"th-TH", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"th-TH", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"th-TH", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEEที่ d MMMM yyyy");
        test.equal(result2, "EEEที่ d MMMM yyyy");
        test.equal(result3, "EEที่ d MMM yyyy");
        test.equal(result4, "Eที่ d/M/yy");

        result1 = new DateFmt({locale:"th-TH", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"th-TH", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEEที่ d MMMM yyyy เวลา HH:mm");
        test.equal(result2, "Eที่ d/M/yy HH:mm");

        result1 = new DateFmt({locale:"th-TH", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_tr_AM: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"tr-AM", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"tr-AM", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"tr-AM", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"tr-AM", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "d MMMM yyyy EEEE");
        test.equal(result2, "d MMMM yyyy EEE");
        test.equal(result3, "d MMM yyyy EE");
        test.equal(result4, "d.MM.yyyy E");

        result1 = new DateFmt({locale:"tr-AM", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"tr-AM", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "d MMMM yyyy EEEE HH:mm");
        test.equal(result2, "d.MM.yyyy E HH:mm");

        result1 = new DateFmt({locale:"tr-AM", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_tr_AZ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"tr-AZ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"tr-AZ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"tr-AZ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"tr-AZ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "d MMMM yyyy EEEE");
        test.equal(result2, "d MMMM yyyy EEE");
        test.equal(result3, "d MMM yyyy EE");
        test.equal(result4, "d.MM.yyyy E");

        result1 = new DateFmt({locale:"tr-AZ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"tr-AZ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "d MMMM yyyy EEEE HH:mm");
        test.equal(result2, "d.MM.yyyy E HH:mm");

        result1 = new DateFmt({locale:"tr-AZ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_tr_CY: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"tr-CY", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"tr-CY", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"tr-CY", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"tr-CY", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "d MMMM yyyy EEEE");
        test.equal(result2, "d MMMM yyyy EEE");
        test.equal(result3, "d MMM yyyy EE");
        test.equal(result4, "d.MM.yyyy E");

        result1 = new DateFmt({locale:"tr-CY", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"tr-CY", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "d MMMM yyyy EEEE h:mm a");
        test.equal(result2, "d.MM.yyyy E h:mm a");

        result1 = new DateFmt({locale:"tr-CY", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_tr_TR: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"tr-TR", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"tr-TR", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"tr-TR", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"tr-TR", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "d MMMM yyyy EEEE");
        test.equal(result2, "d MMMM yyyy EEE");
        test.equal(result3, "d MMM yyyy EE");
        test.equal(result4, "d.MM.yyyy E");

        result1 = new DateFmt({locale:"tr-TR", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"tr-TR", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "d MMMM yyyy EEEE HH:mm");
        test.equal(result2, "d.MM.yyyy E HH:mm");

        result1 = new DateFmt({locale:"tr-TR", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_uk_UA: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"uk-UA", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"uk-UA", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"uk-UA", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"uk-UA", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'р'.");
        test.equal(result2, "EEE, d MMMM yyyy 'р'.");
        test.equal(result3, "EE, d MMM yyyy 'р'.");
        test.equal(result4, "E, dd.MM.yy");

        result1 = new DateFmt({locale:"uk-UA", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"uk-UA", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'р'. 'о' HH:mm");
        test.equal(result2, "E, dd.MM.yy, HH:mm");

        result1 = new DateFmt({locale:"uk-UA", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_ur_IN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ur-IN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ur-IN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ur-IN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ur-IN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM، yyyy");
        test.equal(result2, "EEE، d MMMM، yyyy");
        test.equal(result3, 'EE، d MMM، yyyy');
        test.equal(result4, 'E، d/M/yy');

        result1 = new DateFmt({locale:"ur-IN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ur-IN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, 'EEEE، d MMMM، yyyy کو ‏h:mm a');
        test.equal(result2, 'E، d/M/yy، ‏h:mm a');

        result1 = new DateFmt({locale:"ur-IN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, '‏h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_uz_Latn_UZ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"uz-Latn-UZ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"uz-Latn-UZ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"uz-Latn-UZ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"uz-Latn-UZ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d-MMMM, yyyy");
        test.equal(result2, "EEE, d-MMMM, yyyy");
        test.equal(result3, "EE, d-MMM, yyyy");
        test.equal(result4, "E, dd/MM/yy");

        result1 = new DateFmt({locale:"uz-Latn-UZ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"uz-Latn-UZ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d-MMMM, yyyy, HH:mm");
        test.equal(result2, "E, dd/MM/yy, HH:mm");

        result1 = new DateFmt({locale:"uz-Latn-UZ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss (z)");

        test.done();
    },
    testDateTimeFormat_vi_VN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"vi-VN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"vi-VN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"vi-VN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"vi-VN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM, yyyy");
        test.equal(result2, "EEE, d MMMM, yyyy");
        test.equal(result3, "EE, d MMM, yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"vi-VN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"vi-VN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "'lúc' HH:mm EEEE, d MMMM, yyyy");
        test.equal(result2, "HH:mm E, d/M/yy");

        result1 = new DateFmt({locale:"vi-VN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_zh_Hans_CN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"zh-Hans-CN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"zh-Hans-CN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"zh-Hans-CN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"zh-Hans-CN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy年M月d日EEEE");
        test.equal(result2, "yyyy年M月d日EEE");
        test.equal(result3, "yyyy年M月d日EE");
        test.equal(result4, "yyyy/M/dE");

        result1 = new DateFmt({locale:"zh-Hans-CN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"zh-Hans-CN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy年M月d日EEEE HH:mm");
        test.equal(result2, "yyyy/M/dE HH:mm");

        result1 = new DateFmt({locale:"zh-Hans-CN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;;
        test.equal(result1, "z HH:mm:ss");

        test.done();
    },
    testDateTimeFormat_zh_Hant_HK: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"zh-Hant-HK", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"zh-Hant-HK", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"zh-Hant-HK", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"zh-Hant-HK", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy年M月d日EEEE");
        test.equal(result2, "yyyy年M月d日EEE");
        test.equal(result3, "yyyy年M月d日EE");
        test.equal(result4, "d/M/yyyyE");

        result1 = new DateFmt({locale:"zh-Hant-HK", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"zh-Hant-HK", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy年M月d日EEEE ah:mm");
        test.equal(result2, "d/M/yyyyE ah:mm");

        result1 = new DateFmt({locale:"zh-Hant-HK", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "ah:mm:ss [z]");

        test.done();
    },
    testDateTimeFormat_zh_Hant_TW: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"zh-Hant-TW", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"zh-Hant-TW", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"zh-Hant-TW", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"zh-Hant-TW", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy年M月d日 EEEE");
        test.equal(result2, "yyyy年M月d日 EEE");
        test.equal(result3, "yyyy年M月d日 EE");
        test.equal(result4, "yyyy/M/d E");

        result1 = new DateFmt({locale:"zh-Hant-TW", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"zh-Hant-TW", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy年M月d日 EEEE Bh:mm");
        test.equal(result2, "yyyy/M/d E Bh:mm");

        result1 = new DateFmt({locale:"zh-Hant-TW", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "Bh:mm:ss [z]");

        test.done();
    },
    testDateTimeFormat_en_GE: function(test) {
        test.expect(7);
        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-GE", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-GE", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-GE", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-GE", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, M/d/yy");

        result1 = new DateFmt({locale:"en-GE", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-GE", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy 'at' HH:mm");
        test.equal(result2, "E, M/d/yy, HH:mm");

        result1 = new DateFmt({locale:"en-GE", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_en_CN: function(test) {
        test.expect(7);
        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-CN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-CN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-CN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-CN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, M/d/yy");

        result1 = new DateFmt({locale:"en-CN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-CN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy 'at' HH:mm");
        test.equal(result2, "E, M/d/yy, HH:mm");

        result1 = new DateFmt({locale:"en-CN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_en_MX: function(test) {
        test.expect(7);
        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-MX", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-MX", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-MX", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-MX", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, M/d/yy");

        result1 = new DateFmt({locale:"en-MX", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-MX", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy 'at' h:mm a");
        test.equal(result2, 'E, M/d/yy, h:mm a');

        result1 = new DateFmt({locale:"en-MX", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_en_TW: function(test) {
        test.expect(7);
        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-TW", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-TW", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-TW", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-TW", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, M/d/yy");

        result1 = new DateFmt({locale:"en-TW", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-TW", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy 'at' h:mm a");
        test.equal(result2, 'E, M/d/yy, h:mm a');

        result1 = new DateFmt({locale:"en-TW", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_mn_MN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"mn-Cyrl-MN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"mn-Cyrl-MN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"mn-Cyrl-MN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"mn-Cyrl-MN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy 'оны' MMMM'ын' d, EEEE 'гараг'");
        test.equal(result2, "yyyy 'оны' MMMM'ын' d, EEE 'гараг'");
        test.equal(result3, "yyyy 'оны' MMM'ын' d, EE 'гараг'");
        test.equal(result4, 'yyyy.MM.dd, E \'гараг\'');

        result1 = new DateFmt({locale:"mn-Cyrl-MN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"mn-Cyrl-MN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy 'оны' MMMM'ын' d, EEEE 'гараг' HH:mm");
        test.equal(result2, 'yyyy.MM.dd, E \'гараг\' HH:mm');

        result1 = new DateFmt({locale:"mn-Cyrl-MN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "HH:mm:ss (z)");

        test.done();
    },
    testDateTimeFormat_es_CA: function(test) {
        test.expect(7);
        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-CA", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-CA", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-CA", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-CA", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"es-CA", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-CA", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, 'E, d/M/yy, h:mm a');

        result1 = new DateFmt({locale:"es-CA", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, 'h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_af_ZA: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"af-ZA", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"af-ZA", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"af-ZA", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"af-ZA", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE dd MMMM yyyy");
        test.equal(result2, "EEE dd MMMM yyyy");
        test.equal(result3, "EE dd MMM yyyy");
        test.equal(result4, "E yyyy-MM-dd");

        result1 = new DateFmt({locale:"af-ZA", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"af-ZA", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE dd MMMM yyyy 'om' HH:mm");
        test.equal(result2, "E yyyy-MM-dd HH:mm");

        result1 = new DateFmt({locale:"af-ZA", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_am_ET: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"am-ET", type:"date", date:"dmwy", length: "full", calendar:"ethiopic", useNative:false, timezone:"local"})
        result2 = new DateFmt({locale:"am-ET", type:"date", date:"dmwy", length: "long", calendar:"ethiopic", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"am-ET", type:"date", date:"dmwy", length: "medium", calendar:"ethiopic", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"am-ET", type:"date", date:"dmwy", length: "short", calendar:"ethiopic", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE፣ d MMMM yyyy");
        test.equal(result2, "EEE፣ d MMMM yyyy");
        test.equal(result3, "EE፣ d MMM yyyy");
        test.equal(result4, "E፣ dd/MM/yyyy");

        result1 = new DateFmt({locale:"am-ET", type:"datetime", date:"dmwy", length: "full", calendar:"ethiopic", useNative:false, timezone:"local"})
        result2 = new DateFmt({locale:"am-ET", type:"datetime", date:"dmwy", length: "short", calendar:"ethiopic", useNative:false, timezone:"local"})

        test.equal(result1, "EEEE፣ d MMMM yyyy h:mm a");
        test.equal(result2, "E፣ dd/MM/yyyy h:mm a");

        result1 = new DateFmt({locale:"am-ET", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ha_Latn_NG: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ha-Latn-NG", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ha-Latn-NG", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ha-Latn-NG", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ha-Latn-NG", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, 'EEEE d MMMM, yyyy');
        test.equal(result2, 'EEE d MMMM, yyyy');
        test.equal(result3, 'EE d MMM, yyyy');
        test.equal(result4, 'E d/M/yy');

        result1 = new DateFmt({locale:"ha-Latn-NG", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ha-Latn-NG", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM, yyyy 'da' HH:mm");
        test.equal(result2, 'E d/M/yy, HH:mm');

        result1 = new DateFmt({locale:"ha-Latn-NG", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_or_IN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"or-IN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"or-IN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"or-IN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"or-IN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, M/d/yy");

        result1 = new DateFmt({locale:"or-IN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"or-IN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, 'h:mm a ଠାରେ EEEE, MMMM d, yyyy');
        test.equal(result2, "E, M/d/yy, h:mm a");

        result1 = new DateFmt({locale:"or-IN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_az_Latn_AZ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"az-Latn-AZ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"az-Latn-AZ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"az-Latn-AZ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"az-Latn-AZ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "d MMMM yyyy, EEEE");
        test.equal(result2, "d MMMM yyyy, EEE");
        test.equal(result3, "d MMM yyyy, EE");
        test.equal(result4, "dd.MM.yy, E");

        result1 = new DateFmt({locale:"az-Latn-AZ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"az-Latn-AZ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "d MMMM yyyy, EEEE/HH:mm");
        test.equal(result2, "dd.MM.yy, E, HH:mm");

        result1 = new DateFmt({locale:"az-Latn-AZ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_km_KH: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"km-KH", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"km-KH", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"km-KH", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"km-KH", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E d/M/yy");

        result1 = new DateFmt({locale:"km-KH", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"km-KH", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1,'EEEE d MMMM yyyy នៅ​ម៉ោង h:mm a');
        test.equal(result2, "E d/M/yy, h:mm a");

        result1 = new DateFmt({locale:"km-KH", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_si_LK: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"si-LK", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"si-LK", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"si-LK", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"si-LK", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy MMMM d, EEEE");
        test.equal(result2, "yyyy MMMM d, EEE");
        test.equal(result3, "yyyy MMM d, EE");
        test.equal(result4, "yyyy-MM-dd, E");

        result1 = new DateFmt({locale:"si-LK", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"si-LK", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy MMMM d, EEEE දින HH.mm");
        test.equal(result2, "yyyy-MM-dd, E, HH.mm");

        result1 = new DateFmt({locale:"si-LK", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH.mm.ss z");

        test.done();
    },
    testDateTimeFormat_ar_AE: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-AE", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-AE", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-AE", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-AE", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-AE", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-AE", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy في ‏h:mm a");
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-AE", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ar_BH: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-BH", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-BH", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-BH", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-BH", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-BH", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-BH", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy في ‏h:mm a");
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-BH", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ar_DJ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-DJ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-DJ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-DJ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-DJ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-DJ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-DJ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy في ‏h:mm a");
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-DJ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ar_DZ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-DZ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-DZ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-DZ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-DZ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-DZ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-DZ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy في ‏h:mm a");
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-DZ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏h:mm:ss a z");
        test.done();
    },
    testDateTimeFormat_ar_JO: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-JO", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-JO", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-JO", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-JO", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-JO", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-JO", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy في ‏h:mm a");
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-JO", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ar_KW: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-KW", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-KW", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-KW", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-KW", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-KW", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-KW", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy في ‏h:mm a");
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-KW", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ar_LB: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-LB", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-LB", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-LB", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-LB", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-LB", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-LB", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy في ‏h:mm a");
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-LB", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ar_LY: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-LY", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-LY", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-LY", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-LY", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-LY", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-LY", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy في ‏h:mm a");
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-LY", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏h:mm:ss a z");
        test.done();
    },
    testDateTimeFormat_ar_MR: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-MR", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-MR", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-MR", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-MR", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-MR", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-MR", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy في ‏h:mm a");
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-MR", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ar_OM: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-OM", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-OM", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-OM", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-OM", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-OM", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-OM", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy في ‏h:mm a");
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-OM", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ar_QA: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-QA", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-QA", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-QA", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-QA", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-QA", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-QA", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy في ‏h:mm a");
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-QA", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ar_SA: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-SA", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-SA", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-SA", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-SA", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-SA", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-SA", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy في ‏h:mm a");
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-SA", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ar_SD: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-SD", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-SD", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-SD", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-SD", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-SD", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-SD", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy في ‏h:mm a");
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-SD", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ar_SY: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-SY", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-SY", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-SY", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-SY", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-SY", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-SY", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy في ‏h:mm a");
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-SY", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ar_TN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-TN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-TN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-TN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-TN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-TN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-TN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy في ‏h:mm a");
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-TN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_ar_YE: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ar-YE", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-YE", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ar-YE", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ar-YE", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy");
        test.equal(result2, "EEE، d MMMM yyyy");
        test.equal(result3, 'EE، dd/MM/yyyy');
        test.equal(result4, 'E، d/M/yyyy');

        result1 = new DateFmt({locale:"ar-YE", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ar-YE", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM yyyy في ‏h:mm a");
        test.equal(result2, 'E، d/M/yyyy، ‏h:mm a');

        result1 = new DateFmt({locale:"ar-YE", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"‏h:mm:ss a z");
        test.done();
    },
    testDateTimeFormat_en_ET: function(test) {
        test.expect(7);

        // CLDR data from en/ca-ethiopic.json
        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-ET", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-ET", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-ET", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-ET", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, M/d/yyyy");

        result1 = new DateFmt({locale:"en-ET", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-ET", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy 'at' h:mm a");
        test.equal(result2, "E, M/d/yyyy, h:mm a");

        result1 = new DateFmt({locale:"en-ET", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_en_GM: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-GM", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-GM", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-GM", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-GM", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"en-GM", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-GM", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' h:mm a");
        test.equal(result2, "E, dd/MM/yyyy, h:mm a");

        result1 = new DateFmt({locale:"en-GM", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_en_LR: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-LR", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-LR", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-LR", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-LR", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"en-LR", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-LR", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' h:mm a");
        test.equal(result2, "E, dd/MM/yyyy, h:mm a");

        result1 = new DateFmt({locale:"en-LR", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_en_PK: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-PK", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-PK", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-PK", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-PK", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, dd-MMM-yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"en-PK", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-PK", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' h:mm a");
        test.equal(result2, "E, dd/MM/yyyy, h:mm a");

        result1 = new DateFmt({locale:"en-PK", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_en_RW: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-RW", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-RW", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-RW", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-RW", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"en-RW", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-RW", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' HH:mm");
        test.equal(result2, "E, dd/MM/yyyy, HH:mm");

        result1 = new DateFmt({locale:"en-RW", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_en_SD: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-SD", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-SD", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-SD", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-SD", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"en-SD", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-SD", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' h:mm a");
        test.equal(result2, "E, dd/MM/yyyy, h:mm a");

        result1 = new DateFmt({locale:"en-SD", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_en_SL: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-SL", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-SL", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-SL", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-SL", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"en-SL", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-SL", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' h:mm a");
        test.equal(result2, "E, dd/MM/yyyy, h:mm a");

        result1 = new DateFmt({locale:"en-SL", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,"h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_en_TZ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"en-TZ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-TZ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"en-TZ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"en-TZ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"en-TZ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"en-TZ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'at' HH:mm");
        test.equal(result2, "E, dd/MM/yyyy, HH:mm");

        result1 = new DateFmt({locale:"en-TZ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_es_CR: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-CR", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-CR", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-CR", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-CR", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"es-CR", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-CR", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, "E, d/M/yy, h:mm a");

        result1 = new DateFmt({locale:"es-CR", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_es_GQ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-GQ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-GQ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-GQ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-GQ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"es-GQ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-GQ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, H:mm");
        test.equal(result2, "E, d/M/yy, H:mm");

        result1 = new DateFmt({locale:"es-GQ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "H:mm:ss z");

        test.done();
    },
    testDateTimeFormat_es_PH: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"es-PH", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-PH", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"es-PH", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"es-PH", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"es-PH", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"es-PH", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy, h:mm a");
        test.equal(result2, "E, d/M/yy, h:mm a");

        result1 = new DateFmt({locale:"es-PH", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_fr_BF: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-BF", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-BF", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-BF", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-BF", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-BF", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-BF", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E dd/MM/yyyy HH:mm");

        result1 = new DateFmt({locale:"fr-BF", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_fr_BJ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-BJ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-BJ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-BJ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-BJ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-BJ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-BJ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E dd/MM/yyyy HH:mm");

        result1 = new DateFmt({locale:"fr-BJ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_fr_CD: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-CD", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-CD", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-CD", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-CD", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-CD", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-CD", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E dd/MM/yyyy HH:mm");

        result1 = new DateFmt({locale:"fr-CD", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_fr_CF: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-CF", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-CF", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-CF", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-CF", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-CF", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-CF", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E dd/MM/yyyy HH:mm");

        result1 = new DateFmt({locale:"fr-CF", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_fr_CG: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-CG", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-CG", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-CG", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-CG", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-CG", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-CG", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E dd/MM/yyyy HH:mm");

        result1 = new DateFmt({locale:"fr-CG", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_fr_CI: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-CI", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-CI", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-CI", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-CI", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-CI", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-CI", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E dd/MM/yyyy HH:mm");

        result1 = new DateFmt({locale:"fr-CI", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_fr_CM: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-CM", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-CM", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-CM", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-CM", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-CM", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-CM", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E dd/MM/yyyy HH:mm");

        result1 = new DateFmt({locale:"fr-CM", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_fr_GQ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-GQ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-GQ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-GQ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-GQ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-GQ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-GQ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E dd/MM/yyyy HH:mm");

        result1 = new DateFmt({locale:"fr-GQ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_fr_DJ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-DJ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-DJ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-DJ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-DJ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-DJ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-DJ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' h:mm a");
        test.equal(result2, "E dd/MM/yyyy h:mm a");

        result1 = new DateFmt({locale:"fr-DJ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_fr_DZ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-DZ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-DZ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-DZ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-DZ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-DZ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-DZ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' h:mm a");
        test.equal(result2, "E dd/MM/yyyy h:mm a");

        result1 = new DateFmt({locale:"fr-DZ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_fr_GA: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-GA", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-GA", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-GA", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-GA", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-GA", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-GA", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E dd/MM/yyyy HH:mm");

        result1 = new DateFmt({locale:"fr-GA", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_fr_GN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-GN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-GN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-GN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-GN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-GN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-GN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E dd/MM/yyyy HH:mm");

        result1 = new DateFmt({locale:"fr-GN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_fr_LB: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-LB", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-LB", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-LB", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-LB", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-LB", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-LB", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' h:mm a");
        test.equal(result2, "E dd/MM/yyyy h:mm a");

        result1 = new DateFmt({locale:"fr-LB", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_fr_ML: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-ML", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-ML", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-ML", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-ML", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-ML", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-ML", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E dd/MM/yyyy, HH:mm");

        result1 = new DateFmt({locale:"fr-ML", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_fr_RW: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-RW", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-RW", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-RW", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-RW", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-RW", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-RW", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E dd/MM/yyyy HH:mm");

        result1 = new DateFmt({locale:"fr-RW", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_fr_SN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-SN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-SN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-SN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-SN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-SN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-SN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E dd/MM/yyyy HH:mm");

        result1 = new DateFmt({locale:"fr-SN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_fr_TG: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"fr-TG", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-TG", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"fr-TG", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"fr-TG", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy");
        test.equal(result2, "EEE d MMMM yyyy");
        test.equal(result3, "EE d MMM yyyy");
        test.equal(result4, "E dd/MM/yyyy");

        result1 = new DateFmt({locale:"fr-TG", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"fr-TG", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE d MMMM yyyy 'à' HH:mm");
        test.equal(result2, "E dd/MM/yyyy HH:mm");

        result1 = new DateFmt({locale:"fr-TG", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_ms_SG: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ms-SG", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ms-SG", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ms-SG", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ms-SG", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/MM/yy");

        result1 = new DateFmt({locale:"ms-SG", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ms-SG", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'pada' h:mm a");
        test.equal(result2, "E, d/MM/yy, h:mm a");

        result1 = new DateFmt({locale:"ms-SG", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_pa_PK: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"pa-PK", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"pa-PK", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"pa-PK", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"pa-PK", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"pa-PK", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"pa-PK", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy h:mm a");
        test.equal(result2, "E, d/M/yy, h:mm a");

        result1 = new DateFmt({locale:"pa-PK", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "h:mm:ss a z");

        test.done();
    },
    testDateTimeFormat_pt_AO: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"pt-AO", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"pt-AO", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"pt-AO", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"pt-AO", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, dd/MM/yyyy");
        test.equal(result4, "E, dd/MM/yy");

        result1 = new DateFmt({locale:"pt-AO", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"pt-AO", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy 'às' HH:mm");
        test.equal(result2, "E, dd/MM/yy, HH:mm");

        result1 = new DateFmt({locale:"pt-AO", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_pt_GQ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"pt-GQ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"pt-GQ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"pt-GQ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"pt-GQ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, dd/MM/yyyy");
        test.equal(result4, "E, dd/MM/yy");

        result1 = new DateFmt({locale:"pt-GQ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"pt-GQ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy 'às' HH:mm");
        test.equal(result2, "E, dd/MM/yy, HH:mm");

        result1 = new DateFmt({locale:"pt-GQ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_pt_CV: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"pt-CV", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"pt-CV", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"pt-CV", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"pt-CV", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy");
        test.equal(result2, "EEE, d 'de' MMMM 'de' yyyy");
        test.equal(result3, "EE, dd/MM/yyyy");
        test.equal(result4, "E, dd/MM/yy");

        result1 = new DateFmt({locale:"pt-CV", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"pt-CV", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'de' MMMM 'de' yyyy 'às' HH:mm");
        test.equal(result2, "E, dd/MM/yy, HH:mm");

        result1 = new DateFmt({locale:"pt-CV", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_ur_PK: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ur-PK", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ur-PK", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ur-PK", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ur-PK", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE، d MMMM، yyyy");
        test.equal(result2, 'EEE، d MMMM، yyyy');
        test.equal(result3, 'EE، d MMM، yyyy');
        test.equal(result4, 'E، d/M/yy');

        result1 = new DateFmt({locale:"ur-PK", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ur-PK", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, 'EEEE، d MMMM، yyyy کو ‏h:mm a');
        test.equal(result2, 'E، d/M/yy، ‏h:mm a');

        result1 = new DateFmt({locale:"ur-PK", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, '‏h:mm:ss a z');

        test.done();
    },
    testDateTimeFormat_zh_Hans_SG: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"zh-Hans-SG", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"zh-Hans-SG", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"zh-Hans-SG", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"zh-Hans-SG", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy年M月d日EEEE");
        test.equal(result2, "yyyy年M月d日EEE");
        test.equal(result3, "yyyy年M月d日EE");
        test.equal(result4, "dd/MM/yyE");

        result1 = new DateFmt({locale:"zh-Hans-SG", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"zh-Hans-SG", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy年M月d日EEEE ah:mm");
        test.equal(result2, "dd/MM/yyE ah:mm");

        result1 = new DateFmt({locale:"zh-Hans-SG", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "z ah:mm:ss");

        test.done();
    },
    testDateTimeFormat_zh_Hans_MY: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"zh-Hans-MY", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"zh-Hans-MY", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"zh-Hans-MY", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"zh-Hans-MY", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy年M月d日EEEE");
        test.equal(result2, "yyyy年M月d日EEE");
        test.equal(result3, "yyyy年M月d日EE");
        test.equal(result4, "yyyy/M/dE");

        result1 = new DateFmt({locale:"zh-Hans-MY", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"zh-Hans-MY", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy年M月d日EEEE ah:mm");
        test.equal(result2, "yyyy/M/dE ah:mm");

        result1 = new DateFmt({locale:"zh-Hans-MY", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "z ah:mm:ss");

        test.done();
    },
    testDateTimeFormat_ka_GE: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ka-GE", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ka-GE", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ka-GE", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ka-GE", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, dd MMMM, yyyy");
        test.equal(result2, "EEE, d MMMM, yyyy");
        test.equal(result3, "EE, d MMM. yyyy");
        test.equal(result4, "E, dd.MM.yy");

        result1 = new DateFmt({locale:"ka-GE", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ka-GE", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, dd MMMM, yyyy, HH:mm");
        test.equal(result2, "E, dd.MM.yy, HH:mm");

        result1 = new DateFmt({locale:"ka-GE", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_be_BY: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;
        result1 = new DateFmt({locale:"be-BY", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"be-BY", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"be-BY", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"be-BY", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'.");
        test.equal(result2, "EEE, d MMMM yyyy 'г'.");
        test.equal(result3, "EE, d MMM yyyy 'г'.");
        test.equal(result4, "E, d.MM.yy");

        result1 = new DateFmt({locale:"be-BY", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"be-BY", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy 'г'. 'у' HH:mm");
        test.equal(result2, "E, d.MM.yy, HH:mm");

        result1 = new DateFmt({locale:"be-BY", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_lo_LA: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"lo-LA", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"lo-LA", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"lo-LA", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"lo-LA", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy");
        test.equal(result2, "EEE, d MMMM yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yyyy");

        result1 = new DateFmt({locale:"lo-LA", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"lo-LA", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM yyyy, H:mm");
        test.equal(result2, "E, d/M/yyyy, H:mm");

        result1 = new DateFmt({locale:"lo-LA", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "H:mm:ss z");
        test.done();
    },
    testDateTimeFormat_ky_KG: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;
        result1 = new DateFmt({locale:"ky-KG", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ky-KG", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ky-KG", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ky-KG", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy-\'ж\'., d-MMMM, EEEE");
        test.equal(result2, "yyyy-\'ж\'., d-MMMM, EEE");
        test.equal(result3, "yyyy-\'ж\'., d-MMM, EE");
        test.equal(result4, "d/M/yy, E");

        result1 = new DateFmt({locale:"ky-KG", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ky-KG", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy-\'ж\'., d-MMMM, EEEE HH:mm");
        test.equal(result2, "d/M/yy, E HH:mm");

        result1 = new DateFmt({locale:"ky-KG", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1, "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_ca_AD: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ca-AD", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ca-AD", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ca-AD", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ca-AD", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM 'del' yyyy");
        test.equal(result2, "EEE, d MMMM 'del' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"ca-AD", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ca-AD", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM 'del' yyyy, 'a' 'les' H:mm");
        test.equal(result2, "E, d/M/yy H:mm");

        result1 = new DateFmt({locale:"ca-AD", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "H:mm:ss z");

        test.done();
    },
    testDateTimeFormat_ca_ES: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;
        result1 = new DateFmt({locale:"ca-ES", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ca-ES", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ca-ES", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ca-ES", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM 'del' yyyy");
        test.equal(result2, "EEE, d MMMM 'del' yyyy");
        test.equal(result3, "EE, d MMM yyyy");
        test.equal(result4, "E, d/M/yy");

        result1 = new DateFmt({locale:"ca-ES", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ca-ES", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMMM 'del' yyyy, 'a' 'les' H:mm");
        test.equal(result2, "E, d/M/yy H:mm");

        result1 = new DateFmt({locale:"ca-ES", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "H:mm:ss z");
        test.done();
    },
    testDateTimeFormat_hy_AM: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;
        result1 = new DateFmt({locale:"hy-AM", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"hy-AM", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"hy-AM", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"hy-AM", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy թ. MMMM d, EEEE");
        test.equal(result2, "dd MMMM, yyyy թ., EEE");
        test.equal(result3, "dd MMM, yyyy թ., EE");
        test.equal(result4, "dd.MM.yy, E");

        result1 = new DateFmt({locale:"hy-AM", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"hy-AM", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy թ. MMMM d, EEEE, HH:mm");
        test.equal(result2, "dd.MM.yy, E, HH:mm");

        result1 = new DateFmt({locale:"hy-AM", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "HH:mm:ss z");
        test.done();
    },
    testDateTimeFormat_eu_ES: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;
        result1 = new DateFmt({locale:"eu-ES", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"eu-ES", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"eu-ES", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"eu-ES", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy(\'e\')\'ko\' MMMM\'ren\' d(\'a\'), EEEE");
        test.equal(result2, "yyyy(\'e\')\'ko\' MMMM\'ren\' d(\'a\'), EEE");
        test.equal(result3, "yyyy(\'e\')\'ko\' MMM d(\'a\'), EE");
        test.equal(result4, "yy/M/d, E");

        result1 = new DateFmt({locale:"eu-ES", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"eu-ES", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy('e')'ko' MMMM'ren' d('a'), EEEE (HH:mm)");
        test.equal(result2, "yy/M/d, E (HH:mm)");

        result1 = new DateFmt({locale:"eu-ES", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "HH:mm:ss (z)");
        test.done();
    },
    testDateTimeFormat_ne_NP: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"ne-NP", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ne-NP", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"ne-NP", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"ne-NP", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy MMMM d, EEEE");
        test.equal(result2, "yyyy MMMM d, EEE");
        test.equal(result3, "yyyy MMM d, EE");
        test.equal(result4, "yy/M/d, E");

        result1 = new DateFmt({locale:"ne-NP", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"ne-NP", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy MMMM d, EEEE: HH:mm");
        test.equal(result2, "yy/M/d, E, HH:mm");

        result1 = new DateFmt({locale:"ne-NP", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_my_MM: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"my-MM", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"my-MM", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"my-MM", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"my-MM", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy MMMM d EEEE");
        test.equal(result2, "yyyy MMMM d EEE");
        test.equal(result3, "yyyy MMM d EE");
        test.equal(result4, "d/M/yy E");

        result1 = new DateFmt({locale:"my-MM", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"my-MM", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "yyyy MMMM d EEEE H:mm");
        test.equal(result2, "d/M/yy E H:mm");

        result1 = new DateFmt({locale:"my-MM", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "z H:mm:ss");

        test.done();
    },
    testDateTimeFormat_wo_SN: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;
        result1 = new DateFmt({locale:"wo-SN", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"wo-SN", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"wo-SN", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"wo-SN", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMM, yyyy");
        test.equal(result2, "EEE, d MMMM, yyyy");
        test.equal(result3, "EE, d MMM, yyyy");
        test.equal(result4, "E, dd-MM-yyyy");

        result1 = new DateFmt({locale:"wo-SN", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"wo-SN", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMM, yyyy 'ci' HH:mm");
        test.equal(result2, "E, dd-MM-yyyy - HH:mm");

        result1 = new DateFmt({locale:"wo-SN", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_tk_TM: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"tk-TM", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"tk-TM", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"tk-TM", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"tk-TM", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "d MMMM yyyy EEEE");
        test.equal(result2, "d MMMM yyyy EEE");
        test.equal(result3, "d MMM yyyy EE");
        test.equal(result4, "dd.MM.yyyy E");

        result1 = new DateFmt({locale:"tk-TM", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"tk-TM", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "d MMMM yyyy EEEE 'sagat' HH:mm");
        test.equal(result2, "dd.MM.yyyy E, HH:mm");

        result1 = new DateFmt({locale:"tk-TM", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_tg_TJ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;
        result1 = new DateFmt({locale:"tg-TJ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"tg-TJ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"tg-TJ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"tg-TJ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, dd MMMM yyyy");
        test.equal(result2, "EEE, dd MMMM yyyy");
        test.equal(result3, "EE, dd MMM yyyy");
        test.equal(result4, "E, dd/MM/yy");

        result1 = new DateFmt({locale:"tg-TJ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"tg-TJ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, dd MMMM yyyy 'соати' HH:mm");
        test.equal(result2, "E, dd/MM/yy, HH:mm");

        result1 = new DateFmt({locale:"tg-TJ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_mt_MT: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"mt-MT", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"mt-MT", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"mt-MT", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"mt-MT", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'ta'’ MMMM yyyy");
        test.equal(result2, "EEE, d 'ta'’ MMMM yyyy");
        test.equal(result3, "EE, dd MMM yyyy");
        test.equal(result4, "E, dd/MM/yyyy");

        result1 = new DateFmt({locale:"mt-MT", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"mt-MT", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d 'ta'’ MMMM yyyy HH:mm");
        test.equal(result2, "E, dd/MM/yyyy HH:mm");

        result1 = new DateFmt({locale:"mt-MT", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_zu_ZA: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"zu-ZA", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"zu-ZA", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"zu-ZA", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"zu-ZA", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy");
        test.equal(result2, "EEE, MMMM d, yyyy");
        test.equal(result3, "EE, MMM d, yyyy");
        test.equal(result4, "E, M/d/yy");

        result1 = new DateFmt({locale:"zu-ZA", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"zu-ZA", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, MMMM d, yyyy HH:mm");
        test.equal(result2, "E, M/d/yy HH:mm");

        result1 = new DateFmt({locale:"zu-ZA", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_lb_LU: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"lb-LU", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"lb-LU", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"lb-LU", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"lb-LU", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy");
        test.equal(result2, "EEE, d. MMMM yyyy");
        test.equal(result3, "EE, d. MMM yyyy");
        test.equal(result4, "E, dd.MM.yy");

        result1 = new DateFmt({locale:"lb-LU", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"lb-LU", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d. MMMM yyyy HH:mm");
        test.equal(result2, "E, dd.MM.yy HH:mm");

        result1 = new DateFmt({locale:"lb-LU", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "HH:mm:ss z");

        test.done();
    },
    testDateTimeFormat_yo_NG: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"yo-NG", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"yo-NG", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"yo-NG", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"yo-NG", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMM yyyy");
        test.equal(result2, "EEE, d MMM yyyy");
        test.equal(result3, "EE, d MM yyyy");
        test.equal(result4, "E, d/M/yyyy");

        result1 = new DateFmt({locale:"yo-NG", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"yo-NG", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMM yyyy 'ní' H:m");
        test.equal(result2, "E, d/M/yyyy, H:m");

        result1 = new DateFmt({locale:"yo-NG", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "H:m:s z");

        test.done();
    },
    testDateTimeFormat_yo_BJ: function(test) {
        test.expect(7);

        var result1, result2, result3, result4;

        result1 = new DateFmt({locale:"yo-BJ", type:"date", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"yo-BJ", type:"date", date:"dmwy", length: "long", useNative:false, timezone:"local"}).template;
        result3 = new DateFmt({locale:"yo-BJ", type:"date", date:"dmwy", length: "medium", useNative:false, timezone:"local"}).template;
        result4 = new DateFmt({locale:"yo-BJ", type:"date", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMM yyyy");
        test.equal(result2, "EEE, d MMM yyyy");
        test.equal(result3, "EE, d MM yyyy");
        test.equal(result4, "E, d/M/yyyy");

        result1 = new DateFmt({locale:"yo-BJ", type:"datetime", date:"dmwy", length: "full", useNative:false, timezone:"local"}).template;
        result2 = new DateFmt({locale:"yo-BJ", type:"datetime", date:"dmwy", length: "short", useNative:false, timezone:"local"}).template;

        test.equal(result1, "EEEE, d MMM yyyy 'ní' H:m");
        test.equal(result2, "E, d/M/yyyy, H:m");

        result1 = new DateFmt({locale:"yo-BJ", type:"time", time:"ahmsz", length:"full", useNative:false, timezone:"local"}).template;
        test.equal(result1,  "H:m:s z");

        test.done();
    }
}