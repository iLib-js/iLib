/*
 * testscriptinfo.js - test the script info object
 *
 * Copyright © 2013-2017, 2019-2022, 2024 JEDLSoft
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

if (typeof(ScriptInfo) === "undefined") {
    var ScriptInfo = require("../../lib/ScriptInfo.js");
}

if (typeof(LocaleInfo) === "undefined") {
    var LocaleInfo = require("../../lib/LocaleInfo.js");
}

module.exports.testscriptinfo = {
    testScriptConstructor: function(test) {
        test.expect(1);
        var si = new ScriptInfo();
        test.ok(si !== null);
        test.done();
    },
    testScriptGet1: function(test) {
        test.expect(8);
        var si = new ScriptInfo("Latn");
        test.ok(si !== null);

        test.equal(si.getCode(), "Latn");
        test.equal(si.getCodeNumber(), 215);
        test.equal(si.getName(), "Latin");
        test.equal(si.getLongCode(), "Latin");
        test.equal(si.getScriptDirection(), "ltr");
        test.ok(!si.getNeedsIME());
        test.ok(si.getCasing());
        test.done();
    },
    testScriptGet2: function(test) {
        test.expect(8);
        var si = new ScriptInfo("Phag");
        test.ok(si !== null);

        test.equal(si.getCode(), "Phag");
        test.equal(si.getCodeNumber(), 331);
        test.equal(si.getName(), "Phags-pa");
        test.equal(si.getLongCode(), "Phags_Pa");
        test.equal(si.getScriptDirection(), "ltr");
        test.ok(!si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    testScriptGet3: function(test) {
        test.expect(8);
        var si = new ScriptInfo("Hebr");
        test.ok(si !== null);

        test.equal(si.getCode(), "Hebr");
        test.equal(si.getCodeNumber(), 125);
        test.equal(si.getName(), "Hebrew");
        test.equal(si.getLongCode(), "Hebrew");
        test.equal(si.getScriptDirection(), "rtl");
        test.ok(!si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    testScriptGet4: function(test) {
        test.expect(8);
        var si = new ScriptInfo("Hans");
        test.ok(si !== null);

        test.equal(si.getCode(), "Hans");
        test.equal(si.getCodeNumber(), 501);
        test.equal(si.getName(), "Han (Simplified variant)");
        test.equal(si.getLongCode(), "Han_(Simplified_variant)");
        test.equal(si.getScriptDirection(), "ltr");
        test.ok(si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    testScriptGetDefaultLongCode: function(test) {
        test.expect(5);
        var si = new ScriptInfo("Sara");
        test.ok(si !== null);

        test.equal(si.getCode(), "Sara");
        test.equal(si.getCodeNumber(), 292);
        test.equal(si.getName(), "Sarati");
        test.equal(si.getLongCode(), "Sarati");
        test.done();
    },
    testScriptGetDefaultLongCodeOrya: function(test) {
        test.expect(8);
        var si = new ScriptInfo("Orya");
        test.ok(si !== null);

        test.equal(si.getCode(), "Orya");
        test.equal(si.getCodeNumber(), 327);
        test.equal(si.getName(), "Oriya (Odia)");
        test.equal(si.getLongCode(), "Oriya");
        test.equal(si.getScriptDirection(), "ltr");
        test.ok(!si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    testScriptGetDefaultLongCodeAmharic: function(test) {
        test.expect(8);
        var si = new ScriptInfo("Ethi");
        test.ok(si !== null);

        test.equal(si.getCode(), "Ethi");
        test.equal(si.getCodeNumber(), 430);
        test.equal(si.getName(), "Ethiopic (Geʻez)");
        test.equal(si.getLongCode(), "Ethiopic");
        test.equal(si.getScriptDirection(), "ltr");
        test.ok(si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    testScriptGetDefaultLongCodeWithSpaces: function(test) {
        test.expect(8);
        var si = new ScriptInfo("Kore");
        test.ok(si !== null);

        test.equal(si.getCode(), "Kore");
        test.equal(si.getCodeNumber(), 287);
        test.equal(si.getName(), "Korean (alias for Hangul + Han)");
        test.equal(si.getLongCode(), "Korean_(alias_for_Hangul_+_Han)");
        test.equal(si.getScriptDirection(), "ltr");
        test.ok(si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    testScriptGetDefaultLongCodeArab: function(test) {
        test.expect(8);
        var si = new ScriptInfo("Arab");
        test.ok(si !== null);

        test.equal(si.getCode(), "Arab");
        test.equal(si.getCodeNumber(), 160);
        test.equal(si.getName(), "Arabic");
        test.equal(si.getLongCode(), "Arabic");
        test.equal(si.getScriptDirection(), "rtl");
        test.ok(!si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    testScriptGetUnknown: function(test) {
        test.expect(5);
        var si = new ScriptInfo("Fooo");
        test.ok(si !== null);

        test.equal(si.getCode(), undefined);
        test.equal(si.getCodeNumber(), 0);
        test.equal(si.getName(), undefined);
        test.equal(si.getLongCode(), undefined);
        test.done();
    },
    testScriptGetAllScripts: function(test) {
        test.expect(7);
        var scripts = ScriptInfo.getAllScripts();
        test.ok(scripts !== null);

        test.equal(scripts.length, 223);
        test.equal(scripts[0], "Adlm");
        test.equal(scripts[1], "Afak");
        test.equal(scripts[2], "Aghb");
        test.equal(scripts[4], "Arab");
        test.equal(scripts[scripts.length-1], "Zzzz");
        test.done();
    },
    testScriptGetDefaultLongCodeKits: function(test) {
        test.expect(8);
        var si = new ScriptInfo("Kits");
        test.ok(si !== null);

        test.equal(si.getCode(), "Kits");
        test.equal(si.getCodeNumber(), 288);
        test.equal(si.getName(), "Khitan small script");
        test.equal(si.getLongCode(), "Khitan_Small_Script");
        test.equal(si.getScriptDirection(), "ltr");
        test.ok(si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    testScriptGetDefaultLongCodePauc: function(test) {
        test.expect(8);
        var si = new ScriptInfo("Pauc");
        test.ok(si !== null);

        test.equal(si.getCode(), "Pauc");
        test.equal(si.getCodeNumber(), 263);
        test.equal(si.getName(), "Pau Cin Hau");
        test.equal(si.getLongCode(), "Pau_Cin_Hau");
        test.equal(si.getScriptDirection(), "ltr");
        test.ok(!si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    testScriptGetDefaultLongCodeMend: function(test) {
        test.expect(8);
        var si = new ScriptInfo("Mend");
        test.ok(si !== null);

        test.equal(si.getCode(), "Mend");
        test.equal(si.getCodeNumber(), 438);
        test.equal(si.getName(), "Mende Kikakui");
        test.equal(si.getLongCode(), "Mende_Kikakui");
        test.equal(si.getScriptDirection(), "rtl");
        test.ok(si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    testScriptGetDefaultLongCode_Gara: function(test) {
        test.expect(8);
        var si = new ScriptInfo("Gara");
        test.ok(si !== null);

        test.equal(si.getCode(), "Gara");
        test.equal(si.getCodeNumber(), 164);
        test.equal(si.getName(), "Garay");
        test.equal(si.getLongCode(), "Garay");
        test.equal(si.getScriptDirection(), "rtl");
        test.ok(!si.getNeedsIME());
        test.ok(si.getCasing());
        test.done();
    },
    testScriptGetDefaultLongCode_Tols: function(test) {
        test.expect(8);
        var si = new ScriptInfo("Tols");
        test.ok(si !== null);

        test.equal(si.getCode(), "Tols");
        test.equal(si.getCodeNumber(), 299);
        test.equal(si.getName(), "Tolong Siki");
        test.equal(si.getLongCode(), "Tolong_Siki");
        test.equal(si.getScriptDirection(), "ltr");
        test.ok(!si.getNeedsIME());
        test.ok(!si.getCasing());
        test.done();
    },
    testScriptInfo_ar_EG: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-EG");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ar_IQ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-IQ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ar_MA: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-MA");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_as_IN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("as-IN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Beng");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_bg_BG: function(test) {
        test.expect(4);
        var li = new LocaleInfo("bg-BG");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Cyrl");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_bn_IN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("bn-IN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Beng");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_bs_Latn_BA: function(test) {
        test.expect(4);
        var li = new LocaleInfo("bs-Latn-BA");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_bs_Latn_ME: function(test) {
        test.expect(4);
        var li = new LocaleInfo("bs-Latn-ME");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_cs_CZ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("cs-CZ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_da_DK: function(test) {
        test.expect(4);
        var li = new LocaleInfo("da-DK");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_de_AT: function(test) {
        test.expect(4);
        var li = new LocaleInfo("de-AT");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_de_CH: function(test) {
        test.expect(4);
        var li = new LocaleInfo("de-CH");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_de_DE: function(test) {
        test.expect(4);
        var li = new LocaleInfo("de-DE");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_de_LU: function(test) {
        test.expect(4);
        var li = new LocaleInfo("de-LU");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_el_CY: function(test) {
        test.expect(4);
        var li = new LocaleInfo("el-CY");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Grek");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_el_GR: function(test) {
        test.expect(4);
        var li = new LocaleInfo("el-GR");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Grek");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_AM: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-AM");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_AU: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-AU");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_AZ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-AZ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_CA: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-CA");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_GB: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-GB");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_GH: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-GH");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_HK: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-HK");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_IE: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-IE");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_IN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-IN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_IS: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-IS");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_JP: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-JP");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_KE: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-KE");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_KR: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-KR");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_LK: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-LK");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_MM: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-MM");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_MW: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-MW");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_MY: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-MY");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_NG: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-NG");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_NZ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-NZ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_PH: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-PH");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_PR: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-PR");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_SG: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-SG");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_US: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-US");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_UG: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-UG");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_ZA: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-ZA");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_ZM: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-ZM");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_AR: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-AR");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_BO: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-BO");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_CL: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-CL");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_CO: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-CO");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_DO: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-DO");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_EC: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-EC");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_ES: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-ES");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_GT: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-GT");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_HN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-HN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_MX: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-MX");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_NI: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-NI");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_PA: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-PA");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_PE: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-PE");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_PR: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-PR");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_PY: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-PY");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_SV: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-SV");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_US: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-US");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_UY: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-UY");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_VE: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-VE");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_et_EE: function(test) {
        test.expect(4);
        var li = new LocaleInfo("et-EE");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fa_AF: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fa-AF");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_fa_IR: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fa-IR");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_fi_FI: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fi-FI");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_BE: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-BE");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_CA: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-CA");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_CH: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-CH");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_FR: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-FR");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_LU: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-LU");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ga_IE: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ga-IE");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_gu_IN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("gu-IN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Gujr");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_he_IL: function(test) {
        test.expect(4);
        var li = new LocaleInfo("he-IL");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Hebr");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_hi_IN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("hi-IN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Deva");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_hr_HR: function(test) {
        test.expect(4);
        var li = new LocaleInfo("hr-HR");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_hr_ME: function(test) {
        test.expect(4);
        var li = new LocaleInfo("hr-ME");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_hr_HU: function(test) {
        test.expect(4);
        var li = new LocaleInfo("hr-HU");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_id_ID: function(test) {
        test.expect(4);
        var li = new LocaleInfo("id-ID");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_is_IS: function(test) {
        test.expect(4);
        var li = new LocaleInfo("is-IS");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_it_CH: function(test) {
        test.expect(4);
        var li = new LocaleInfo("it-CH");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_it_IT: function(test) {
        test.expect(4);
        var li = new LocaleInfo("it-IT");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ja_JP: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ja-JP");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Jpan");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_kk_KZ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("kk-KZ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Cyrl");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_kn_IN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("kn-IN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Knda");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ko_KR: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ko-KR");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Kore");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ku_IQ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ku-IQ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_lt_LT: function(test) {
        test.expect(4);
        var li = new LocaleInfo("lt-LT");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_lv_LV: function(test) {
        test.expect(4);
        var li = new LocaleInfo("lv-LV");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_mk_MK: function(test) {
        test.expect(4);
        var li = new LocaleInfo("mk-MK");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Cyrl");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ml_IN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ml-IN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Mlym");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_mr_IN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("mr-IN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Deva");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ms_MY: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ms-MY");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_nb_NO: function(test) {
        test.expect(4);
        var li = new LocaleInfo("nb-NO");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_nl_BE: function(test) {
        test.expect(4);
        var li = new LocaleInfo("nl-BE");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_nl_NL: function(test) {
        test.expect(4);
        var li = new LocaleInfo("nl-NL");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_pa_IN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("pa-IN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Guru");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_pa_Guru_IN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("pa-Guru-IN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Guru");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_pa: function(test) {
        test.expect(4);
        var li = new LocaleInfo("pa");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Guru");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_pa_PK: function(test) {
        test.expect(4);
        var li = new LocaleInfo("pa-PK");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_pl_PL: function(test) {
        test.expect(4);
        var li = new LocaleInfo("pl-PL");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_pt_BR: function(test) {
        test.expect(4);
        var li = new LocaleInfo("pt-BR");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_pt_PT: function(test) {
        test.expect(4);
        var li = new LocaleInfo("pt-PT");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ro_RO: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ro-RO");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_sr_Cyrl_RS: function(test) {
        test.expect(4);
        var li = new LocaleInfo("sr-Cyrl-RS");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Cyrl");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_sr_Latn_RS: function(test) {
        test.expect(4);
        var li = new LocaleInfo("sr-Latn-RS");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ru_BY: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ru-BY");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Cyrl");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ru_KG: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ru-KG");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Cyrl");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ru_KZ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ru-KZ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Cyrl");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ru_GE: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ru-GE");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Cyrl");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ru_RU: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ru-RU");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Cyrl");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ru_UA: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ru-UA");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Cyrl");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_sk_SK: function(test) {
        test.expect(4);
        var li = new LocaleInfo("sk-SK");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_sl_SI: function(test) {
        test.expect(4);
        var li = new LocaleInfo("sl-SI");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_sq_AL: function(test) {
        test.expect(4);
        var li = new LocaleInfo("sq-AL");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_sq_ME: function(test) {
        test.expect(4);
        var li = new LocaleInfo("sq-ME");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_sv_FI: function(test) {
        test.expect(4);
        var li = new LocaleInfo("sv-FI");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_sv_SE: function(test) {
        test.expect(4);
        var li = new LocaleInfo("sv-SE");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ta_IN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ta-IN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Taml");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_te_IN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("te-IN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Telu");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_th_TH: function(test) {
        test.expect(4);
        var li = new LocaleInfo("th-TH");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Thai");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_tr_AM: function(test) {
        test.expect(4);
        var li = new LocaleInfo("tr-AM");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_tr_AZ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("tr-AZ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_tr_CY: function(test) {
        test.expect(4);
        var li = new LocaleInfo("tr-CY");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_tr_TR: function(test) {
        test.expect(4);
        var li = new LocaleInfo("tr-TR");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_uk_UA: function(test) {
        test.expect(4);
        var li = new LocaleInfo("uk-UA");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Cyrl");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ur_IN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ur-IN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_uz_Latn_UZ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("uz-Latn-UZ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_vi_VN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("vi-VN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_zh_Hans_CN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("zh-Hans-CN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Hans");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_zh_Hant_HK: function(test) {
        test.expect(4);
        var li = new LocaleInfo("zh-Hant-HK");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Hant");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_zh_Hant_TW: function(test) {
        test.expect(4);
        var li = new LocaleInfo("zh-Hant-TW");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Hant");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_GE: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-GE");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_CN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-CN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_MX: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-MX");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_TW: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-TW");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_mn_MN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("mn-MN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Cyrl");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_CA: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-CA");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_af_ZA: function(test) {
        test.expect(4);
        var li = new LocaleInfo("af-ZA");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_am_ET: function(test) {
        test.expect(4);
        var li = new LocaleInfo("am-ET");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Ethi");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ha_Latn_NG: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ha-Latn-NG");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ha: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ha");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_az: function(test) {
        test.expect(4);
        var li = new LocaleInfo("az");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ha_NG: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ha-NG");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ha_CM: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ha-CM");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ha_SD: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ha-SD");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_or_IN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("or-IN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Orya");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_az_AZ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("az-AZ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_az_Latn_AZ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("az-Latn-AZ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_km_KH: function(test) {
        test.expect(4);
        var li = new LocaleInfo("km-KH");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Khmr");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_si_LK: function(test) {
        test.expect(4);
        var li = new LocaleInfo("si-LK");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Sinh");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ar_AE: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-AE");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ar_BH: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-BH");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ar_DJ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-DJ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ar_DZ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-DZ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ar_JO: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-JO");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ar_KW: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-KW");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ar_LB: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-LB");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ar_LY: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-LY");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ar_MR: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-MR");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ar_OM: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-OM");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ar_QA: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-QA");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ar_SA: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-SA");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ar_SD: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-SD");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ar_SY: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-SY");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ar_TN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-TN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ar_YE: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ar-YE");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_en_ET: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-ET");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_GM: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-GM");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_LR: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-LR");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_PK: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-PK");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_RW: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-RW");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_SD: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-SD");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_SL: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-SL");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_en_TZ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("en-TZ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_CR: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-CR");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_GQ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-GQ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_PH: function(test) {
        test.expect(4);
        var li = new LocaleInfo("es-PH");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_BF: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-BF");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_BJ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-BJ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_CD: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-CD");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_CF: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-CF");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_CG: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-CG");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_CI: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-CI");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_CM: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-CM");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_GQ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-GQ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_DJ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-DJ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_DZ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-DZ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_GA: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-GA");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_GN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-GN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_LB: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-LB");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_ML: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-ML");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_RW: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-RW");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_SN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-SN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_fr_TG: function(test) {
        test.expect(4);
        var li = new LocaleInfo("fr-TG");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ms_SG: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ms-SG");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_pa_Arab_PK: function(test) {
        test.expect(4);
        var li = new LocaleInfo("pa-Arab-PK");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_pt_AO: function(test) {
        test.expect(4);
        var li = new LocaleInfo("pt-AO");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_pt_GQ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("pt-GQ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_pt_CV: function(test) {
        test.expect(4);
        var li = new LocaleInfo("pt-CV");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ur_PK: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ur-PK");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_zh_Hans_SG: function(test) {
        test.expect(4);
        var li = new LocaleInfo("zh-Hans-SG");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Hans");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_zh_Hans_MY: function(test) {
        test.expect(4);
        var li = new LocaleInfo("zh-Hans-MY");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Hans");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ka_GE: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ka-GE");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Geor");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_be_BY: function(test) {
        test.expect(4);
        var li = new LocaleInfo("be-BY");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Cyrl");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_lo_LA: function(test) {
        test.expect(4);
        var li = new LocaleInfo("lo-LA");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Laoo");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ky_KG: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ky-KG");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Cyrl");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ca_AD: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ca-AD");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_es_ES: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ca-ES");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_hy_AM: function(test) {
        test.expect(4);
        var li = new LocaleInfo("hy-AM");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Armn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_gl_ES: function(test) {
        test.expect(4);
        var li = new LocaleInfo("gl-ES");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_eu_ES: function(test) {
        test.expect(4);
        var li = new LocaleInfo("eu-ES");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_my_MM: function(test) {
        test.expect(4);
        var li = new LocaleInfo("my-MM");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Mymr");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ne_NP: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ne-NP");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Deva");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_wo_SN: function(test) {
        test.expect(4);
        var li = new LocaleInfo("wo-SN");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_tk_TM: function(test) {
        test.expect(4);
        var li = new LocaleInfo("tk-TM");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_tg_TJ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("tg-TJ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Cyrl");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_mt_MT: function(test) {
        test.expect(4);
        var li = new LocaleInfo("mt-MT");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_zu_ZA: function(test) {
        test.expect(4);
        var li = new LocaleInfo("zu-ZA");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ha: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ha");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_lb: function(test) {
        test.expect(4);
        var li = new LocaleInfo("lb-LU");
      var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ig: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ig");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ig_NG: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ig-NG");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_ps_AF: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ps-AF");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_ps_PK: function(test) {
        test.expect(4);
        var li = new LocaleInfo("ps-PK");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Arab");
        test.equal(scinfo.getScriptDirection(), "rtl");
        test.done();
    },
    testScriptInfo_yo_BJ: function(test) {
        test.expect(4);
        var li = new LocaleInfo("yo-BJ");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    },
    testScriptInfo_yo_NG: function(test) {
        test.expect(4);
        var li = new LocaleInfo("yo-NG");
        var scinfo = new ScriptInfo(li.getScript());
        test.ok(li !== null);
        test.ok(scinfo !== null);
        test.equal(li.getScript(), "Latn");
        test.equal(scinfo.getScriptDirection(), "ltr");
        test.done();
    }
};