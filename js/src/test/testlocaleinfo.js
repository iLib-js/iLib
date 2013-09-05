/*
 * testlocaleinfo.js - test the locale info object
 *
 * Copyright © 2012-2013, JEDLSoft
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

function testLocaleInfoConstructor() {
	var loc = new ilib.LocaleInfo();

	assertNotNull(loc);
}

function testLocaleInfoConstructorCurrentLocale() {
	var loc, info = new ilib.LocaleInfo(); // gives locale of the host JS engine

	assertNotNull(info);

	loc = info.getLocale();

	assertEquals("en", loc.getLanguage());
	assertEquals("US", loc.getRegion());
	assertUndefined(loc.getVariant());
}

function testLocaleInfoConstructorGivenLocale() {
	var loc, info = new ilib.LocaleInfo("de-DE");

	assertNotNull(info);

	loc = info.getLocale();

	assertEquals("de", loc.getLanguage());
	assertEquals("DE", loc.getRegion());
	assertUndefined(loc.getVariant());
}

function testLocaleInfoGetClockUS() {
	var info = new ilib.LocaleInfo("en-US");
	assertNotNull(info);

	assertEquals("12", info.getClock());
}

function testLocaleInfoGetClockCA() {
	var info = new ilib.LocaleInfo("en-CA");
	assertNotNull(info);

	assertEquals("12", info.getClock());
}

function testLocaleInfoGetClockGB() {
	var info = new ilib.LocaleInfo("en-GB");
	assertNotNull(info);

	assertEquals("24", info.getClock());
}

function testLocaleInfoGetClockDE() {
	var info = new ilib.LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals("24", info.getClock());
}

function testLocaleInfoGetCalendarUS() {
	var info = new ilib.LocaleInfo("en-US");
	assertNotNull(info);

	assertEquals("gregorian", info.getCalendar());
}

function testLocaleInfoGetCalendarDE() {
	var info = new ilib.LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals("gregorian", info.getCalendar());
}

function testLocaleInfoGetUnitsUS() {
	var info = new ilib.LocaleInfo("en-US");
	assertNotNull(info);

	assertEquals("uscustomary", info.getUnits());
}

function testLocaleInfoGetUnitsCA() {
	var info = new ilib.LocaleInfo("en-CA");
	assertNotNull(info);

	assertEquals("metric", info.getUnits());
}

function testLocaleInfoGetUnitsGB() {
	var info = new ilib.LocaleInfo("en-GB");
	assertNotNull(info);

	assertEquals("imperial", info.getUnits());
}

function testLocaleInfoGetCalendarDE() {
	var info = new ilib.LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals("metric", info.getUnits());
}

function testLocaleInfoGetFirstDayOfWeekUS() {
	var info = new ilib.LocaleInfo("en-US");
	assertNotNull(info);

	assertEquals(0, info.getFirstDayOfWeek());
}

function testLocaleInfoGetFirstDayOfWeekDE() {
	var info = new ilib.LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals(1, info.getFirstDayOfWeek());
}

function testLocaleInfoGetFirstDayOfWeekFR() {
	var info = new ilib.LocaleInfo("fr-FR");
	assertNotNull(info);

	assertEquals(1, info.getFirstDayOfWeek());
}

function testLocaleInfoGetTimeZoneUS() {
	var info = new ilib.LocaleInfo("en-US");
	assertNotNull(info);

	assertEquals("America/Los_Angeles", info.getTimeZone());
}

function testLocaleInfoGetTimeZoneUS() {
	var info = new ilib.LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals("Europe/Berlin", info.getTimeZone());
}

function testLocaleInfoGetTimeZoneES() {
	var info = new ilib.LocaleInfo("es-ES");
	assertNotNull(info);

	assertEquals("Europe/Madrid", info.getTimeZone());
}

function testLocaleInfoGetTimeZoneDefault() {
	var info = new ilib.LocaleInfo("zz-ZZ");
	assertNotNull(info);

	assertEquals("Etc/UTC", info.getTimeZone());
}

function testLocaleInfoGetCurrency() {
	var info = new ilib.LocaleInfo("en-US");
	assertNotNull(info);

	assertEquals("USD", info.getCurrency());
}

function testLocaleInfoGetCurrencyDE() {
	var info = new ilib.LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals("EUR", info.getCurrency());
}

function testLocaleInfoGetCurrencyGB() {
	var info = new ilib.LocaleInfo("en-GB");
	assertNotNull(info);

	assertEquals("GBP", info.getCurrency());
}

function testLocaleInfoGetCurrencyUnknown() {
	var info = new ilib.LocaleInfo("zxx-XX");
	assertNotNull(info);

	assertEquals("USD", info.getCurrency());
}

function testLocaleInfoGetRoundingModeDefault() {
	var info = new ilib.LocaleInfo();
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

function testLocaleInfoGetRoundingModeyy() {
	var info = new ilib.LocaleInfo("yy-YY");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

function testLocaleInfoGetDecimalSeparator1() {
	var info = new ilib.LocaleInfo();
	assertNotNull(info);

	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetDecimalSeparator2() {
	var info = new ilib.LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals(",", info.getDecimalSeparator());
}
//*************************************************Added By Birendra 23/05**********************************************************

//test cases for en-GB number format

function testLocaleInfoGetDecimalSeparatorfor_en_GB() {
	var info = new ilib.LocaleInfo("en-GB");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_en_GB() {
	var info = new ilib.LocaleInfo("en-GB");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_en_GB() {
	var info = new ilib.LocaleInfo("en-GB");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_en_GB() {
	var info = new ilib.LocaleInfo("en-GB");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

//test cases for ko-KR number format

function testLocaleInfoGetDecimalSeparatorfor_ko_KR() {
	var info = new ilib.LocaleInfo("ko-KR");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ko_KR() {
	var info = new ilib.LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ko_KR() {
	var info = new ilib.LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ko_KR() {
	var info = new ilib.LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

//test cases for zh-CN-Hans number format

function testLocaleInfoGetDecimalSeparatorfor_zh_CN_Hans() {
	var info = new ilib.LocaleInfo("zh-CN-Hans");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_zh_CN_Hans() {
	var info = new ilib.LocaleInfo("zh-CN-Hans");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_zh_CN_Hans() {
	var info = new ilib.LocaleInfo("zh-CN-Hans");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_zh_CN_Hans() {
	var info = new ilib.LocaleInfo("zh-CN-Hans");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

//test cases for zh-HK-Hans

function testLocaleInfoGetDecimalSeparatorfor_zh_HK_Hans() {
	var info = new ilib.LocaleInfo("zh-HK-Hans");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_zh_HK_Hans() {
	var info = new ilib.LocaleInfo("zh-HK-Hans");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_zh_HK_Hans() {
	var info = new ilib.LocaleInfo("zh-HK-Hans");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_zh_HK_Hans() {
	var info = new ilib.LocaleInfo("zh-HK-Hans");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

//test cases fot zh-TW-Hant

function testLocaleInfoGetDecimalSeparatorfor_zh_TW_Hant() {
	var info = new ilib.LocaleInfo("zh-TW-Hant");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_zh_TW_Hant() {
	var info = new ilib.LocaleInfo("zh-TW-Hant");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_zh_TW_Hant() {
	var info = new ilib.LocaleInfo("zh-TW-Hant");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_zh_TW_Hant() {
	var info = new ilib.LocaleInfo("zh-TW-Hant");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

//test cases for fr-FR number format

function testLocaleInfoGetDecimalSeparatorfor_fr_FR() {
	var info = new ilib.LocaleInfo("fr-FR");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_FR() {
	var info = new ilib.LocaleInfo("fr-FR");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_FR() {
	var info = new ilib.LocaleInfo("fr-FR");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_FR() {
	var info = new ilib.LocaleInfo("fr-FR");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

//test cases for fr-CA unmber format

function testLocaleInfoGetDecimalSeparatorfor_fr_CA() {
	var info = new ilib.LocaleInfo("fr-CA");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_CA() {
	var info = new ilib.LocaleInfo("fr-CA");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_CA() {
	var info = new ilib.LocaleInfo("fr-CA");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_CA() {
	var info = new ilib.LocaleInfo("fr-CA");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

//test cases for pt_BR numberformat

function testLocaleInfoGetDecimalSeparatorfor_pt_BR() {
	var info = new ilib.LocaleInfo("pt-BR");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_BR() {
	var info = new ilib.LocaleInfo("pt-BR");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_BR() {
	var info = new ilib.LocaleInfo("pt-BR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_BR() {
	var info = new ilib.LocaleInfo("pt-BR");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

//test cases for pt_PT

function testLocaleInfoGetDecimalSeparatorfor_pt_PT() {
	var info = new ilib.LocaleInfo("pt-PT");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_PT() {
	var info = new ilib.LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_PT() {
	var info = new ilib.LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_PT() {
	var info = new ilib.LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

//test cases for es_ES number format

function testLocaleInfoGetDecimalSeparatorfor_es_ES() {
	var info = new ilib.LocaleInfo("es-ES");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_es_ES() {
	var info = new ilib.LocaleInfo("es-ES");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_es_ES() {
	var info = new ilib.LocaleInfo("es-ES");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_es_ES() {
	var info = new ilib.LocaleInfo("es-ES");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

//test case for es_Co

function testLocaleInfoGetDecimalSeparatorfor_es_CO() {
	var info = new ilib.LocaleInfo("es-CO");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_es_CO() {
	var info = new ilib.LocaleInfo("es-CO");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_es_CO() {
	var info = new ilib.LocaleInfo("es-CO");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_es_CO() {
	var info = new ilib.LocaleInfo("es-CO");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

//test cases for ja-JP

function testLocaleInfoGetDecimalSeparatorfor_ja_JP() {
	var info = new ilib.LocaleInfo("ja-JP");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ja_JP() {
	var info = new ilib.LocaleInfo("ja-JP");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ja_JP() {
	var info = new ilib.LocaleInfo("ja-JP");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ja_JP() {
	var info = new ilib.LocaleInfo("ja-JP");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

//test cases for de-DE

function testLocaleInfoGetDecimalSeparatorfor_de_DE() {
	var info = new ilib.LocaleInfo("de-DE");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_de_DE() {
	var info = new ilib.LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_de_DE() {
	var info = new ilib.LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_de_DE() {
	var info = new ilib.LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

//test cases for it-IT

function testLocaleInfoGetDecimalSeparatorfor_it_IT() {
	var info = new ilib.LocaleInfo("it-IT");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_it_IT() {
	var info = new ilib.LocaleInfo("it-IT");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_it_IT() {
	var info = new ilib.LocaleInfo("it-IT");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_it_IT() {
	var info = new ilib.LocaleInfo("it-IT");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

//test cases for sv-SE

function testLocaleInfoGetDecimalSeparatorfor_sv_SE() {
	var info = new ilib.LocaleInfo("sv-SE");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sv_SE() {
	var info = new ilib.LocaleInfo("sv-SE");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sv_SE() {
	var info = new ilib.LocaleInfo("sv-SE");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sv_SE() {
	var info = new ilib.LocaleInfo("sv-SE");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

//test cases for fi-FI

function testLocaleInfoGetDecimalSeparatorfor_fi_FI() {
	var info = new ilib.LocaleInfo("fi-FI");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fi_FI() {
	var info = new ilib.LocaleInfo("fi-FI");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fi_FI() {
	var info = new ilib.LocaleInfo("fi-FI");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fi_FI() {
	var info = new ilib.LocaleInfo("fi-FI");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

//test cases for cs_CZ 

function testLocaleInfoGetDecimalSeparatorfor_cs_CZ() {
	var info = new ilib.LocaleInfo("cs-CZ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_cs_CZ() {
	var info = new ilib.LocaleInfo("cs-CZ");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_cs_CZ() {
	var info = new ilib.LocaleInfo("cs-CZ");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_cs_CZ() {
	var info = new ilib.LocaleInfo("cs-CZ");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

//test cases for el_GR

function testLocaleInfoGetDecimalSeparatorfor_el_GR() {
	var info = new ilib.LocaleInfo("el-GR");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_el_GR() {
	var info = new ilib.LocaleInfo("el-GR");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_el_GR() {
	var info = new ilib.LocaleInfo("el-GR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_el_GR() {
	var info = new ilib.LocaleInfo("el-GR");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

//test cases for hu-HU

function testLocaleInfoGetDecimalSeparatorfor_hu_HU() {
	var info = new ilib.LocaleInfo("hu-HU");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_hu_HU() {
	var info = new ilib.LocaleInfo("hu-HU");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_hu_HU() {
	var info = new ilib.LocaleInfo("hu-HU");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_hu_HU() {
	var info = new ilib.LocaleInfo("hu-HU");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

//test cases for nl_NL

function testLocaleInfoGetDecimalSeparatorfor_nl_NL() {
	var info = new ilib.LocaleInfo("nl-NL");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nl_NL() {
	var info = new ilib.LocaleInfo("nl-NL");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nl_NL() {
	var info = new ilib.LocaleInfo("nl-NL");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nl_NL() {
	var info = new ilib.LocaleInfo("nl-NL");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

//test cases for pl_PL

function testLocaleInfoGetDecimalSeparatorfor_pl_PL() {
	var info = new ilib.LocaleInfo("pl-PL");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pl_PL() {
	var info = new ilib.LocaleInfo("pl-PL");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pl_PL() {
	var info = new ilib.LocaleInfo("pl-PL");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pl_PL() {
	var info = new ilib.LocaleInfo("pl-PL");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

//test cases for da-DK

function testLocaleInfoGetDecimalSeparatorfor_da_Dk() {
	var info = new ilib.LocaleInfo("da-DK");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_da_Dk() {
	var info = new ilib.LocaleInfo("da-DK");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_da_Dk() {
	var info = new ilib.LocaleInfo("da-DK");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_da_Dk() {
	var info = new ilib.LocaleInfo("da-DK");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

//test cases for roRO

function testLocaleInfoGetDecimalSeparatorfor_ro_RO() {
	var info = new ilib.LocaleInfo("ro-RO");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ro_RO() {
	var info = new ilib.LocaleInfo("ro-RO");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ro_RO() {
	var info = new ilib.LocaleInfo("ro-RO");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ro_RO() {
	var info = new ilib.LocaleInfo("ro-RO");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

//test cases for aa-DJ

function testLocaleInfoGetDecimalSeparatorfor_aa_DJ() {
	var info = new ilib.LocaleInfo("aa-DJ");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_aa_DJ() {
	var info = new ilib.LocaleInfo("aa-DJ");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_aa_DJ() {
	var info = new ilib.LocaleInfo("aa-DJ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_aa_DJ() {
	var info = new ilib.LocaleInfo("aa-DJ");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_aa_DJ() {
	var info = new ilib.LocaleInfo("aa-DJ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_aa_DJ() {
	var info = new ilib.LocaleInfo("aa-DJ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_aa_DJ() {
	var info = new ilib.LocaleInfo("aa-DJ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for af-NA

function testLocaleInfoGetDecimalSeparatorfor_af_NA() {
	var info = new ilib.LocaleInfo("af-NA");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_af_NA() {
	var info = new ilib.LocaleInfo("af-NA");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_af_NA() {
	var info = new ilib.LocaleInfo("af-NA");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_af_NA() {
	var info = new ilib.LocaleInfo("af-NA");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_af_NA() {
	var info = new ilib.LocaleInfo("af-NA");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_af_NA() {
	var info = new ilib.LocaleInfo("af-NA");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_af_NA() {
	var info = new ilib.LocaleInfo("af-NA");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for agq-CM

function testLocaleInfoGetDecimalSeparatorfor_agq_CM() {
	var info = new ilib.LocaleInfo("agq-CM");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_agq_CM() {
	var info = new ilib.LocaleInfo("agq-CM");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_agq_CM() {
	var info = new ilib.LocaleInfo("agq-CM");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_agq_CM() {
	var info = new ilib.LocaleInfo("agq-CM");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_agq_CM() {
	var info = new ilib.LocaleInfo("agq-CM");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_agq_CM() {
	var info = new ilib.LocaleInfo("agq-CM");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_agq_CM() {
	var info = new ilib.LocaleInfo("agq-CM");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ak-GH

function testLocaleInfoGetDecimalSeparatorfor_ak_GH() {
	var info = new ilib.LocaleInfo("ak-GH");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ak_GH() {
	var info = new ilib.LocaleInfo("ak-GH");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ak_GH() {
	var info = new ilib.LocaleInfo("ak-GH");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ak_GH() {
	var info = new ilib.LocaleInfo("ak-GH");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ak_GH() {
	var info = new ilib.LocaleInfo("ak-GH");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ak_GH() {
	var info = new ilib.LocaleInfo("ak-GH");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ak_GH() {
	var info = new ilib.LocaleInfo("ak-GH");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for am-ET

function testLocaleInfoGetDecimalSeparatorfor_am_ET() {
	var info = new ilib.LocaleInfo("am-ET");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_am_ET() {
	var info = new ilib.LocaleInfo("am-ET");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_am_ET() {
	var info = new ilib.LocaleInfo("am-ET");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_am_ET() {
	var info = new ilib.LocaleInfo("am-ET");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_am_ET() {
	var info = new ilib.LocaleInfo("am-ET");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_am_ET() {
	var info = new ilib.LocaleInfo("am-ET");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_am_ET() {
	var info = new ilib.LocaleInfo("am-ET");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test casess for ar-AE

function testLocaleInfoGetDecimalSeparatorfor_ar_AE() {
	var info = new ilib.LocaleInfo("ar-AE");
	assertNotNull(info);
	assertEquals("٫", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ar_AE() {
	var info = new ilib.LocaleInfo("ar-AE");
	assertNotNull(info);

	assertEquals("٬", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ar_AE() {
	var info = new ilib.LocaleInfo("ar-AE");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ar_AE() {
	var info = new ilib.LocaleInfo("ar-AE");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ar_AE() {
	var info = new ilib.LocaleInfo("ar-AE");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ar_AE() {
	var info = new ilib.LocaleInfo("ar-AE");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ar_AE() {
	var info = new ilib.LocaleInfo("ar-AE");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ar-DZ

function testLocaleInfoGetDecimalSeparatorfor_ar_DZ() {
	var info = new ilib.LocaleInfo("ar-DZ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ar_DZ() {
	var info = new ilib.LocaleInfo("ar-DZ");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ar_DZ() {
	var info = new ilib.LocaleInfo("ar-DZ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ar_DZ() {
	var info = new ilib.LocaleInfo("ar-DZ");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ar_DZ() {
	var info = new ilib.LocaleInfo("ar-DZ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ar_DZ() {
	var info = new ilib.LocaleInfo("ar-DZ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ar_DZ() {
	var info = new ilib.LocaleInfo("ar-DZ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ar-TN

function testLocaleInfoGetDecimalSeparatorfor_ar_TN() {
	var info = new ilib.LocaleInfo("ar-TN");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ar_TN() {
	var info = new ilib.LocaleInfo("ar-TN");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ar_TN() {
	var info = new ilib.LocaleInfo("ar-TN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ar_TN() {
	var info = new ilib.LocaleInfo("ar-TN");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ar_TN() {
	var info = new ilib.LocaleInfo("ar-TN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ar_TN() {
	var info = new ilib.LocaleInfo("ar-TN");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ar_TN() {
	var info = new ilib.LocaleInfo("ar-TN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for as-IN

function testLocaleInfoGetDecimalSeparatorfor_as_IN() {
	var info = new ilib.LocaleInfo("as-IN");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_as_IN() {
	var info = new ilib.LocaleInfo("as-IN");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_as_IN() {
	var info = new ilib.LocaleInfo("as-IN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_as_IN() {
	var info = new ilib.LocaleInfo("as-IN");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_as_IN() {
	var info = new ilib.LocaleInfo("as-IN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_as_IN() {
	var info = new ilib.LocaleInfo("as-IN");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_as_IN() {
	var info = new ilib.LocaleInfo("as-IN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for asa_TZ

function testLocaleInfoGetDecimalSeparatorfor_asa_TZ() {
	var info = new ilib.LocaleInfo("asa-TZ");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_asa_TZ() {
	var info = new ilib.LocaleInfo("asa-TZ");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_asa_TZ() {
	var info = new ilib.LocaleInfo("asa-TZ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_asa_TZ() {
	var info = new ilib.LocaleInfo("asa-TZ");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_asa_TZ() {
	var info = new ilib.LocaleInfo("asa-TZ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_asa_TZ() {
	var info = new ilib.LocaleInfo("asa-TZ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_asa_TZ() {
	var info = new ilib.LocaleInfo("asa-TZ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for az-AZ

function testLocaleInfoGetDecimalSeparatorfor_az_AZ() {
	var info = new ilib.LocaleInfo("az-AZ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_az_AZ() {
	var info = new ilib.LocaleInfo("az-AZ");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_az_AZ() {
	var info = new ilib.LocaleInfo("az-AZ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_az_AZ() {
	var info = new ilib.LocaleInfo("az-AZ");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_az_AZ() {
	var info = new ilib.LocaleInfo("az-AZ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_az_AZ() {
	var info = new ilib.LocaleInfo("az-AZ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_az_AZ() {
	var info = new ilib.LocaleInfo("az-AZ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for be-BY

function testLocaleInfoGetDecimalSeparatorfor_be_BY() {
	var info = new ilib.LocaleInfo("be-BY");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_be_BY() {
	var info = new ilib.LocaleInfo("be-BY");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_be_BY() {
	var info = new ilib.LocaleInfo("be-BY");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_be_BY() {
	var info = new ilib.LocaleInfo("be-BY");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_be_BY() {
	var info = new ilib.LocaleInfo("be-BY");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_be_BY() {
	var info = new ilib.LocaleInfo("be-BY");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_be_BY() {
	var info = new ilib.LocaleInfo("be-BY");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


function testLocaleInfoGetDecimalSeparatorfor_bg_BG() {
	var info = new ilib.LocaleInfo("bg-BG");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_bg_BG() {
	var info = new ilib.LocaleInfo("bg-BG");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_bg_BG() {
	var info = new ilib.LocaleInfo("bg-BG");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_bg_BG() {
	var info = new ilib.LocaleInfo("bg-BG");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_bg_BG() {
	var info = new ilib.LocaleInfo("bg-BG");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_bg_BG() {
	var info = new ilib.LocaleInfo("bg-BG");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}



function testLocaleInfoGetDecimalSeparatorfor_bm_ML() {
	var info = new ilib.LocaleInfo("bm-ML");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_bm_ML() {
	var info = new ilib.LocaleInfo("bm-ML");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_bm_ML() {
	var info = new ilib.LocaleInfo("bm-ML");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_bm_ML() {
	var info = new ilib.LocaleInfo("bm-ML");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_bm_ML() {
	var info = new ilib.LocaleInfo("bm-ML");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_bm_ML() {
	var info = new ilib.LocaleInfo("bm-ML");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_bm_ML() {
	var info = new ilib.LocaleInfo("bm-ML");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

function testLocaleInfoGetDecimalSeparatorfor_bn_IN() {
	var info = new ilib.LocaleInfo("bn-IN");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_bn_IN() {
	var info = new ilib.LocaleInfo("bn-IN");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_bn_IN() {
	var info = new ilib.LocaleInfo("bn-IN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_bn_IN() {
	var info = new ilib.LocaleInfo("bn-IN");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_bn_IN() {
	var info = new ilib.LocaleInfo("bn-IN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_bn_IN() {
	var info = new ilib.LocaleInfo("bn-IN");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_bn_IN() {
	var info = new ilib.LocaleInfo("bn-IN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for br-FR

function testLocaleInfoGetDecimalSeparatorfor_br_FR() {
	var info = new ilib.LocaleInfo("br-FR");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_br_FR() {
	var info = new ilib.LocaleInfo("br-FR");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_br_FR() {
	var info = new ilib.LocaleInfo("br-FR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_br_FR() {
	var info = new ilib.LocaleInfo("br-FR");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_br_FR() {
	var info = new ilib.LocaleInfo("br-FR");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_br_FR() {
	var info = new ilib.LocaleInfo("br-FR");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_br_FR() {
	var info = new ilib.LocaleInfo("br-FR");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for bs-BA-Cyrl

function testLocaleInfoGetDecimalSeparatorfor_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-BA-Cyrl");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-BA-Cyrl");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-BA-Cyrl");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-BA-Cyrl");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-BA-Cyrl");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-BA-Cyrl");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-BA-Cyrl");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

function testLocaleInfoGetDecimalSeparatorfor_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-BS");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-BS");
	assertNotNull(info);
	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-BS");
	assertNotNull(info);
	assertEquals("{n}%", info.getPercentageFormat());

}



function testLocaleInfoGetPrimaryGroupingDigits_bs_Cyrl_BA() {

	var info = new ilib.LocaleInfo("bs-BS");
	assertNotNull(info);
	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-BS");
	assertNotNull(info);
	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_bs_Cyrl_BA() {

	var info = new ilib.LocaleInfo("bs-BS");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());

}

//test cases for bs-ME

function testLocaleInfoGetDecimalSeparatorfor_bs_ME() {
	var info = new ilib.LocaleInfo("bs-ME");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_bs_ME() {
	var info = new ilib.LocaleInfo("bs-ME");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_bs_ME() {
	var info = new ilib.LocaleInfo("bs-ME");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_bs_ME() {
	var info = new ilib.LocaleInfo("bs-ME");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_bs_ME() {
	var info = new ilib.LocaleInfo("bs-ME");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_bs_ME() {
	var info = new ilib.LocaleInfo("bs-ME");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_bs_ME() {
	var info = new ilib.LocaleInfo("bs-ME");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for ca-FR

function testLocaleInfoGetDecimalSeparatorfor_ca_FR() {
	var info = new ilib.LocaleInfo("ca-FR");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ca_FR() {
	var info = new ilib.LocaleInfo("ca-FR");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ca_FR() {
	var info = new ilib.LocaleInfo("ca-FR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ca_FR() {
	var info = new ilib.LocaleInfo("ca-FR");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ca_FR() {
	var info = new ilib.LocaleInfo("ca-FR");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ca_FR() {
	var info = new ilib.LocaleInfo("ca-FR");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ca_FR() {
	var info = new ilib.LocaleInfo("ca-FR");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for de-AT

function testLocaleInfoGetDecimalSeparatorfor_de_AT() {
	var info = new ilib.LocaleInfo("de-AT");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_de_AT() {
	var info = new ilib.LocaleInfo("de-AT");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_de_AT() {
	var info = new ilib.LocaleInfo("de-AT");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_de_AT() {
	var info = new ilib.LocaleInfo("de-AT");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_de_AT() {
	var info = new ilib.LocaleInfo("de-AT");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_de_AT() {
	var info = new ilib.LocaleInfo("de-AT");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_de_AT() {
	var info = new ilib.LocaleInfo("de-AT");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for fa

function testLocaleInfoGetDecimalSeparatorfor_fa() {
	var info = new ilib.LocaleInfo("fa-IR");
	assertNotNull(info);
	assertEquals("٫", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fa() {
	var info = new ilib.LocaleInfo("fa-IR");
	assertNotNull(info);

	assertEquals("٬", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fa() {
	var info = new ilib.LocaleInfo("fa-IR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fa() {
	var info = new ilib.LocaleInfo("fa-IR");
	assertNotNull(info);

	assertEquals("‎{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_fa() {
	var info = new ilib.LocaleInfo("fa-IR");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fa() {
	var info = new ilib.LocaleInfo("fa-IR");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fa() {
	var info = new ilib.LocaleInfo("fa-IR");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fa-AF

function testLocaleInfoGetDecimalSeparatorfor_fa_AF() {
	var info = new ilib.LocaleInfo("fa-AF");
	assertNotNull(info);
	assertEquals("٫", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fa_AF() {
	var info = new ilib.LocaleInfo("fa-AF");
	assertNotNull(info);

	assertEquals("٬", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fa_AF() {
	var info = new ilib.LocaleInfo("fa-AF");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fa_AF() {
	var info = new ilib.LocaleInfo("fa-AF");
	assertNotNull(info);

	assertEquals("‎{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_fa_AF() {
	var info = new ilib.LocaleInfo("fa-AF");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fa_AF() {
	var info = new ilib.LocaleInfo("fa-AF");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fa_AF() {
	var info = new ilib.LocaleInfo("fa-AF");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}



//test cases for ff-SN

function testLocaleInfoGetDecimalSeparatorfor_ff_SN() {
	var info = new ilib.LocaleInfo("ff-SN");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ff_SN() {
	var info = new ilib.LocaleInfo("ff-SN");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ff_SN() {
	var info = new ilib.LocaleInfo("ff-SN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ff_SN() {
	var info = new ilib.LocaleInfo("ff-SN");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ff_SN() {
	var info = new ilib.LocaleInfo("ff-SN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ff_SN() {
	var info = new ilib.LocaleInfo("ff-SN");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ff_SN() {
	var info = new ilib.LocaleInfo("ff-SN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for fj-FJ

function testLocaleInfoGetDecimalSeparatorfor_fj_FJ() {
	var info = new ilib.LocaleInfo("fj-FJ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fj_FJ() {
	var info = new ilib.LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fj_FJ() {
	var info = new ilib.LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fj_FJ() {
	var info = new ilib.LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_fj_FJ() {
	var info = new ilib.LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fj_FJ() {
	var info = new ilib.LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fj_FJsss() {
	var info = new ilib.LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fo

function testLocaleInfoGetDecimalSeparatorfor_fo() {
	var info = new ilib.LocaleInfo("fo");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fo() {
	var info = new ilib.LocaleInfo("fo");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fo() {
	var info = new ilib.LocaleInfo("fo");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fo() {
	var info = new ilib.LocaleInfo("fo");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_fo() {
	var info = new ilib.LocaleInfo("fo");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fo() {
	var info = new ilib.LocaleInfo("fo");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fo() {
	var info = new ilib.LocaleInfo("fo");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for fr-AD

function testLocaleInfoGetDecimalSeparatorfor_fr_AD() {
	var info = new ilib.LocaleInfo("fr-AD");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_AD() {
	var info = new ilib.LocaleInfo("fr-AD");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_AD() {
	var info = new ilib.LocaleInfo("fr-AD");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_AD() {
	var info = new ilib.LocaleInfo("fr-AD");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_fr_AD() {
	var info = new ilib.LocaleInfo("fr-AD");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fr_AD() {
	var info = new ilib.LocaleInfo("fr-AD");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fr_AD() {
	var info = new ilib.LocaleInfo("fr-AD");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fr-BE

function testLocaleInfoGetDecimalSeparatorfor_fr_BE() {
	var info = new ilib.LocaleInfo("fr-BE");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_BE() {
	var info = new ilib.LocaleInfo("fr-BE");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_BE() {
	var info = new ilib.LocaleInfo("fr-BE");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_BE() {
	var info = new ilib.LocaleInfo("fr-BE");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_fr_BE() {
	var info = new ilib.LocaleInfo("fr-BE");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fr_BE() {
	var info = new ilib.LocaleInfo("fr-BE");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fr_BE() {
	var info = new ilib.LocaleInfo("fr-BE");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fr-CH

function testLocaleInfoGetDecimalSeparatorfor_fr_CH() {
	var info = new ilib.LocaleInfo("fr-CH");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_CH() {
	var info = new ilib.LocaleInfo("fr-CH");
	assertNotNull(info);

	assertEquals("'", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_CH() {
	var info = new ilib.LocaleInfo("fr-CH");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_CH() {
	var info = new ilib.LocaleInfo("fr-CH");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_fr_CH() {
	var info = new ilib.LocaleInfo("fr-CH");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fr_CH() {
	var info = new ilib.LocaleInfo("fr-CH");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fr_CH() {
	var info = new ilib.LocaleInfo("fr-CH");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fr-DZ

function testLocaleInfoGetDecimalSeparatorfor_fr_DZ() {
	var info = new ilib.LocaleInfo("fr-DZ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_DZ() {
	var info = new ilib.LocaleInfo("fr-DZ");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_DZ() {
	var info = new ilib.LocaleInfo("fr-DZ");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_DZ() {
	var info = new ilib.LocaleInfo("fr-DZ");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_fr_DZ() {
	var info = new ilib.LocaleInfo("fr-DZ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fr_DZ() {
	var info = new ilib.LocaleInfo("fr-DZ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fr_DZ() {
	var info = new ilib.LocaleInfo("fr-DZ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fr-LU

function testLocaleInfoGetDecimalSeparatorfor_fr_LU() {
	var info = new ilib.LocaleInfo("fr-LU");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_LU() {
	var info = new ilib.LocaleInfo("fr-LU");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_LU() {
	var info = new ilib.LocaleInfo("fr-LU");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_LU() {
	var info = new ilib.LocaleInfo("fr-LU");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_fr_LU() {
	var info = new ilib.LocaleInfo("fr-LU");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fr_LU() {
	var info = new ilib.LocaleInfo("fr-LU");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fr_LU() {
	var info = new ilib.LocaleInfo("fr-LU");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fr-MG

function testLocaleInfoGetDecimalSeparatorfor_fr_MG() {
	var info = new ilib.LocaleInfo("fr-MG");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_MG() {
	var info = new ilib.LocaleInfo("fr-MG");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_MG() {
	var info = new ilib.LocaleInfo("fr-MG");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_MG() {
	var info = new ilib.LocaleInfo("fr-MG");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_fr_MG() {
	var info = new ilib.LocaleInfo("fr-MG");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fr_MG() {
	var info = new ilib.LocaleInfo("fr-MG");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fr_MG() {
	var info = new ilib.LocaleInfo("fr-MG");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fr-SN

function testLocaleInfoGetDecimalSeparatorfor_fr_SN() {
	var info = new ilib.LocaleInfo("fr-SN");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_SN() {
	var info = new ilib.LocaleInfo("fr-SN");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_SN() {
	var info = new ilib.LocaleInfo("fr-SN");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_SN() {
	var info = new ilib.LocaleInfo("fr-SN");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_fr_SN() {
	var info = new ilib.LocaleInfo("fr-SN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fr_SN() {
	var info = new ilib.LocaleInfo("fr-SN");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fr_SN() {
	var info = new ilib.LocaleInfo("fr-SN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fr-YT

function testLocaleInfoGetDecimalSeparatorfor_fr_YT() {
	var info = new ilib.LocaleInfo("fr-YT");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_YT() {
	var info = new ilib.LocaleInfo("fr-YT");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_YT() {
	var info = new ilib.LocaleInfo("fr-YT");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_YT() {
	var info = new ilib.LocaleInfo("fr-YT");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_fr_YT() {
	var info = new ilib.LocaleInfo("fr-YT");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fr_YT() {
	var info = new ilib.LocaleInfo("fr-YT");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fr_YT() {
	var info = new ilib.LocaleInfo("fr-YT");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}



//test cases for ga-IE

function testLocaleInfoGetDecimalSeparatorfor_ga_IE() {
	var info = new ilib.LocaleInfo("ga-IE");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ga_IE() {
	var info = new ilib.LocaleInfo("ga-IE");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ga_IE() {
	var info = new ilib.LocaleInfo("ga-IE");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ga_IE() {
	var info = new ilib.LocaleInfo("ga-IE");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ga_IE() {
	var info = new ilib.LocaleInfo("ga-IE");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ga_IE() {
	var info = new ilib.LocaleInfo("ga-IE");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ga_IE() {
	var info = new ilib.LocaleInfo("ga-IE");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}



//test cases for gl-ES

function testLocaleInfoGetDecimalSeparatorfor_gl_ES() {
	var info = new ilib.LocaleInfo("gl-ES");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_gl_ES() {
	var info = new ilib.LocaleInfo("gl-ES");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_gl_ES() {
	var info = new ilib.LocaleInfo("gl-ES");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_gl_ES() {
	var info = new ilib.LocaleInfo("gl-ES");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_gl_ES() {
	var info = new ilib.LocaleInfo("gl-ES");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_gl_ES() {
	var info = new ilib.LocaleInfo("gl-ES");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_gl_ES() {
	var info = new ilib.LocaleInfo("gl-ES");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ha-NG-Latn

function testLocaleInfoGetDecimalSeparatorfor_ha_NG_Latn() {
	var info = new ilib.LocaleInfo("ha-NG-Latn");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ha_NG_Latn() {
	var info = new ilib.LocaleInfo("ha-NG-Latn");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ha_NG_Latn() {
	var info = new ilib.LocaleInfo("ha-NG-Latn");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ha_NG_Latn() {
	var info = new ilib.LocaleInfo("ha-NG-Latn");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ha_NG_Latn() {
	var info = new ilib.LocaleInfo("ha-NG-Latn");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ha_NG_Latn() {
	var info = new ilib.LocaleInfo("ha-NG-Latn");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ha_NG_Latn() {
	var info = new ilib.LocaleInfo("ha-NG-Latn");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for he-IL	

function testLocaleInfoGetDecimalSeparatorfor_he() {
	var info = new ilib.LocaleInfo("he-IL");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_he() {
	var info = new ilib.LocaleInfo("he-IL");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_he() {
	var info = new ilib.LocaleInfo("he-IL");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_he() {
	var info = new ilib.LocaleInfo("he-IL");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_he() {
	var info = new ilib.LocaleInfo("he-IL");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_he() {
	var info = new ilib.LocaleInfo("he-IL");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_he() {
	var info = new ilib.LocaleInfo("he-IL");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for hi-IN

function testLocaleInfoGetDecimalSeparatorfor_hi_IN() {
	var info = new ilib.LocaleInfo("hi-IN");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_hi_IN() {
	var info = new ilib.LocaleInfo("hi-IN");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_hi_IN() {
	var info = new ilib.LocaleInfo("hi-IN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_hi_IN() {
	var info = new ilib.LocaleInfo("hi-IN");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_hi_IN() {
	var info = new ilib.LocaleInfo("hi-IN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_hi_IN() {
	var info = new ilib.LocaleInfo("hi-IN");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_hi_IN() {
	var info = new ilib.LocaleInfo("hi-IN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for hr-HR

function testLocaleInfoGetDecimalSeparatorfor_hr_HR() {
	var info = new ilib.LocaleInfo("hr-HR");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_hr_HR() {
	var info = new ilib.LocaleInfo("hr-HR");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_hr_HR() {
	var info = new ilib.LocaleInfo("hr-HR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_hr_HR() {
	var info = new ilib.LocaleInfo("hr-HR");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_hr_HR() {
	var info = new ilib.LocaleInfo("hr-HR");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_hr_HR() {
	var info = new ilib.LocaleInfo("hr-HR");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_hr_HR() {
	var info = new ilib.LocaleInfo("hr-HR");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for hy-AZ

function testLocaleInfoGetDecimalSeparatorfor_hy_AZ() {
	var info = new ilib.LocaleInfo("hy-AZ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_hy_AZ() {
	var info = new ilib.LocaleInfo("hy-AZ");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_hy_AZ() {
	var info = new ilib.LocaleInfo("hy-AZ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_hy_AZ() {
	var info = new ilib.LocaleInfo("hy-AZ");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_hy_AZ() {
	var info = new ilib.LocaleInfo("hy-AZ");
	assertNotNull(info);

	assertEquals(2, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_hy_AZ() {
	var info = new ilib.LocaleInfo("hy-AZ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_hy_AZ() {
	var info = new ilib.LocaleInfo("hy-AZ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}




//test cases for id-MY

function testLocaleInfoGetDecimalSeparatorfor_id_MY() {
	var info = new ilib.LocaleInfo("id-MY");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_id_MY() {
	var info = new ilib.LocaleInfo("id-MY");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_id_MY() {
	var info = new ilib.LocaleInfo("id-MY");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_id_MY() {
	var info = new ilib.LocaleInfo("id-MY");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_id_MY() {
	var info = new ilib.LocaleInfo("id-MY");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_id_MY() {
	var info = new ilib.LocaleInfo("id-MY");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_id_MY() {
	var info = new ilib.LocaleInfo("id-MY");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for it-CH

function testLocaleInfoGetDecimalSeparatorfor_it_CH() {
	var info = new ilib.LocaleInfo("it-CH");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_it_CH() {
	var info = new ilib.LocaleInfo("it-CH");
	assertNotNull(info);

	assertEquals("'", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_it_CH() {
	var info = new ilib.LocaleInfo("it-CH");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_it_CH() {
	var info = new ilib.LocaleInfo("it-CH");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_it_CH() {
	var info = new ilib.LocaleInfo("it-CH");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_it_CH() {
	var info = new ilib.LocaleInfo("it-CH");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_it_CH() {
	var info = new ilib.LocaleInfo("it-CH");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for it-SM

function testLocaleInfoGetDecimalSeparatorfor_it_SM() {
	var info = new ilib.LocaleInfo("it-SM");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_it_SM() {
	var info = new ilib.LocaleInfo("it-SM");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_it_SM() {
	var info = new ilib.LocaleInfo("it-SM");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_it_SM() {
	var info = new ilib.LocaleInfo("it-SM");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_it_SM() {
	var info = new ilib.LocaleInfo("it-SM");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_it_SM() {
	var info = new ilib.LocaleInfo("it-SM");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_it_SM() {
	var info = new ilib.LocaleInfo("it-SM");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for ka-IR

function testLocaleInfoGetDecimalSeparatorfor_ka_IR() {
	var info = new ilib.LocaleInfo("ka-IR");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ka_IR() {
	var info = new ilib.LocaleInfo("ka-IR");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ka_IR() {
	var info = new ilib.LocaleInfo("ka-IR");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ka_IR() {
	var info = new ilib.LocaleInfo("ka-IR");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ka_IR() {
	var info = new ilib.LocaleInfo("ka-IR");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ka_IR() {
	var info = new ilib.LocaleInfo("ka-IR");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ka_IR() {
	var info = new ilib.LocaleInfo("ka-IR");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for kk-KZ-Cyrl

function testLocaleInfoGetDecimalSeparatorfor_kk_KZ_Cyrl() {
	var info = new ilib.LocaleInfo("kk-KZ-Cyrl");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_kk_KZ_Cyrl() {
	var info = new ilib.LocaleInfo("kk-KZ-Cyrl");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_kk_KZ_Cyrl() {
	var info = new ilib.LocaleInfo("kk-KZ-Cyrl");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_kk_KZ_Cyrl() {
	var info = new ilib.LocaleInfo("kk-KZ-Cyrl");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_kk_KZ_Cyrl() {
	var info = new ilib.LocaleInfo("kk-KZ-Cyrl");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_kk_KZ_Cyrl() {
	var info = new ilib.LocaleInfo("kk-KZ-Cyrl");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_kk_KZ_Cyrl() {
	var info = new ilib.LocaleInfo("kk-KZ-Cyrl");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for ko-KR

function testLocaleInfoGetDecimalSeparatorfor_ko_KR() {
	var info = new ilib.LocaleInfo("ko-KR");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ko_KR() {
	var info = new ilib.LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ko_KR() {
	var info = new ilib.LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ko_KR() {
	var info = new ilib.LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ko_KR() {
	var info = new ilib.LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ko_KR() {
	var info = new ilib.LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ko_KR() {
	var info = new ilib.LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for ks-IN-Arab

function testLocaleInfoGetDecimalSeparatorfor_ks_IN_Arab() {
	var info = new ilib.LocaleInfo("ks-IN-Arab");
	assertNotNull(info);
	assertEquals("٫", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ks_IN_Arab() {
	var info = new ilib.LocaleInfo("ks-IN-Arab");
	assertNotNull(info);

	assertEquals("٬", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ks_IN_Arab() {
	var info = new ilib.LocaleInfo("ks-IN-Arab");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ks_IN_Arab() {
	var info = new ilib.LocaleInfo("ks-IN-Arab");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ks_IN_Arab() {
	var info = new ilib.LocaleInfo("ks-IN-Arab");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ks_IN_Arab() {
	var info = new ilib.LocaleInfo("ks-IN-Arab");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ks_IN_Arab() {
	var info = new ilib.LocaleInfo("ks-IN-Arab");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}



//test cases for ku-IQ

function testLocaleInfoGetDecimalSeparatorfor_ku() {
	var info = new ilib.LocaleInfo("ku-IQ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ku() {
	var info = new ilib.LocaleInfo("ku-IQ");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ku() {
	var info = new ilib.LocaleInfo("ku-IQ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ku() {
	var info = new ilib.LocaleInfo("ku-IQ");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ku() {
	var info = new ilib.LocaleInfo("ku-IQ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ku() {
	var info = new ilib.LocaleInfo("ku-IQ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ku() {
	var info = new ilib.LocaleInfo("ku-IQ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ku-IR

function testLocaleInfoGetDecimalSeparatorfor_ku_IR() {
	var info = new ilib.LocaleInfo("ku-IR");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ku_IR() {
	var info = new ilib.LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ku_IR() {
	var info = new ilib.LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ku_IR() {
	var info = new ilib.LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ku_IR() {
	var info = new ilib.LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ku_IR() {
	var info = new ilib.LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ku_IR() {
	var info = new ilib.LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for lg-UG

function testLocaleInfoGetDecimalSeparatorfor_lg_UG() {
	var info = new ilib.LocaleInfo("lg-UG");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_lg_UG() {
	var info = new ilib.LocaleInfo("lg-UG");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_lg_UG() {
	var info = new ilib.LocaleInfo("lg-UG");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_lg_UG() {
	var info = new ilib.LocaleInfo("lg-UG");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_lg_UG() {
	var info = new ilib.LocaleInfo("lg-UG");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_lg_UG() {
	var info = new ilib.LocaleInfo("lg-UG");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_lg_UG() {
	var info = new ilib.LocaleInfo("lg-UG");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ln-CF

function testLocaleInfoGetDecimalSeparatorfor_ln_CF() {
	var info = new ilib.LocaleInfo("ln-CF");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ln_CF() {
	var info = new ilib.LocaleInfo("ln-CF");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ln_CF() {
	var info = new ilib.LocaleInfo("ln-CF");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ln_CF() {
	var info = new ilib.LocaleInfo("ln-CF");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ln_CF() {
	var info = new ilib.LocaleInfo("ln-CF");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ln_CF() {
	var info = new ilib.LocaleInfo("ln-CF");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ln_CF() {
	var info = new ilib.LocaleInfo("ln-CF");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for lt-LT

function testLocaleInfoGetDecimalSeparatorfor_lt() {
	var info = new ilib.LocaleInfo("lt-LT");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_lt() {
	var info = new ilib.LocaleInfo("lt-LT");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_lt() {
	var info = new ilib.LocaleInfo("lt-LT");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_lt() {
	var info = new ilib.LocaleInfo("lt-LT");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_lt() {
	var info = new ilib.LocaleInfo("lt-LT");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_lt() {
	var info = new ilib.LocaleInfo("lt-LT");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_lt() {
	var info = new ilib.LocaleInfo("lt-LT");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for mi-CK

function testLocaleInfoGetDecimalSeparatorfor_mi_CK() {
	var info = new ilib.LocaleInfo("mi-CK");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_mi_CK() {
	var info = new ilib.LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_mi_CK() {
	var info = new ilib.LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_mi_CK() {
	var info = new ilib.LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_mi_CK() {
	var info = new ilib.LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_mi_CK() {
	var info = new ilib.LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_mi_CK() {
	var info = new ilib.LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for mk-MK

function testLocaleInfoGetDecimalSeparatorfor_mk() {
	var info = new ilib.LocaleInfo("mk-MK");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_mk() {
	var info = new ilib.LocaleInfo("mk-MK");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_mk() {
	var info = new ilib.LocaleInfo("mk-MK");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_mk() {
	var info = new ilib.LocaleInfo("mk-MK");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_mk() {
	var info = new ilib.LocaleInfo("mk-MK");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_mk() {
	var info = new ilib.LocaleInfo("mk-MK");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_mk() {
	var info = new ilib.LocaleInfo("mk-MK");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for mn-CN

function testLocaleInfoGetDecimalSeparatorfor_mn_CN() {
	var info = new ilib.LocaleInfo("mn-CN");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_mn_CN() {
	var info = new ilib.LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_mn_CN() {
	var info = new ilib.LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_mn_CN() {
	var info = new ilib.LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_mn_CN() {
	var info = new ilib.LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_mn_CN() {
	var info = new ilib.LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_mn_CN() {
	var info = new ilib.LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ms-MY

function testLocaleInfoGetDecimalSeparatorfor_ms() {
	var info = new ilib.LocaleInfo("ms-MY");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ms() {
	var info = new ilib.LocaleInfo("ms-MY");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ms() {
	var info = new ilib.LocaleInfo("ms-MY");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ms() {
	var info = new ilib.LocaleInfo("ms-MY");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ms() {
	var info = new ilib.LocaleInfo("ms-MY");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ms() {
	var info = new ilib.LocaleInfo("ms-MY");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ms() {
	var info = new ilib.LocaleInfo("ms-MY");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ms-BN

function testLocaleInfoGetDecimalSeparatorfor_ms_BN() {
	var info = new ilib.LocaleInfo("ms-BN");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ms_BN() {
	var info = new ilib.LocaleInfo("ms-BN");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ms_BN() {
	var info = new ilib.LocaleInfo("ms-BN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ms_BN() {
	var info = new ilib.LocaleInfo("ms-BN");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ms_BN() {
	var info = new ilib.LocaleInfo("ms-BN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ms_BN() {
	var info = new ilib.LocaleInfo("ms-BN");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ms_BN() {
	var info = new ilib.LocaleInfo("ms-BN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ne-IN

function testLocaleInfoGetDecimalSeparatorfor_ne_IN() {
	var info = new ilib.LocaleInfo("ne-IN");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ne_IN() {
	var info = new ilib.LocaleInfo("ne-IN");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ne_IN() {
	var info = new ilib.LocaleInfo("ne-IN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ne_IN() {
	var info = new ilib.LocaleInfo("ne-IN");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ne_IN() {
	var info = new ilib.LocaleInfo("ne-IN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ne_IN() {
	var info = new ilib.LocaleInfo("ne-IN");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ne_IN() {
	var info = new ilib.LocaleInfo("ne-IN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for nl-BE

function testLocaleInfoGetDecimalSeparatorfor_nl_BE() {
	var info = new ilib.LocaleInfo("nl-BE");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nl_BE() {
	var info = new ilib.LocaleInfo("nl-BE");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nl_BE() {
	var info = new ilib.LocaleInfo("nl-BE");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nl_BE() {
	var info = new ilib.LocaleInfo("nl-BE");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_nl_BE() {
	var info = new ilib.LocaleInfo("nl-BE");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nl_BE() {
	var info = new ilib.LocaleInfo("nl-BE");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nl_BE() {
	var info = new ilib.LocaleInfo("nl-BE");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for nl-CW

function testLocaleInfoGetDecimalSeparatorfor_nl_CW() {
	var info = new ilib.LocaleInfo("nl-CW");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nl_CW() {
	var info = new ilib.LocaleInfo("nl-CW");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nl_CW() {
	var info = new ilib.LocaleInfo("nl-CW");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nl_CW() {
	var info = new ilib.LocaleInfo("nl-CW");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_nl_CW() {
	var info = new ilib.LocaleInfo("nl-CW");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nl_CW() {
	var info = new ilib.LocaleInfo("nl-CW");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nl_CW() {
	var info = new ilib.LocaleInfo("nl-CW");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for nl-GF

function testLocaleInfoGetDecimalSeparatorfor_nl_GF() {
	var info = new ilib.LocaleInfo("nl-GF");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nl_GF() {
	var info = new ilib.LocaleInfo("nl-GF");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nl_GF() {
	var info = new ilib.LocaleInfo("nl-GF");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nl_GF() {
	var info = new ilib.LocaleInfo("nl-GF");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_nl_GF() {
	var info = new ilib.LocaleInfo("nl-GF");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nl_GF() {
	var info = new ilib.LocaleInfo("nl-GF");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nl_GF() {
	var info = new ilib.LocaleInfo("nl-GF");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for nl-SR

function testLocaleInfoGetDecimalSeparatorfor_nl_SR() {
	var info = new ilib.LocaleInfo("nl-SR");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nl_SR() {
	var info = new ilib.LocaleInfo("nl-SR");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nl_SR() {
	var info = new ilib.LocaleInfo("nl-SR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nl_SR() {
	var info = new ilib.LocaleInfo("nl-SR");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_nl_SR() {
	var info = new ilib.LocaleInfo("nl-SR");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nl_SR() {
	var info = new ilib.LocaleInfo("nl-SR");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nl_SR() {
	var info = new ilib.LocaleInfo("nl-SR");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}



//test cases for no-BV

function testLocaleInfoGetDecimalSeparatorfor_no_BV() {
	var info = new ilib.LocaleInfo("no-BV");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_no_BV() {
	var info = new ilib.LocaleInfo("no-BV");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_no_BV() {
	var info = new ilib.LocaleInfo("no-BV");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_no_BV() {
	var info = new ilib.LocaleInfo("no-BV");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_no_BV() {
	var info = new ilib.LocaleInfo("no-BV");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_no_BV() {
	var info = new ilib.LocaleInfo("no-BV");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_no_BV() {
	var info = new ilib.LocaleInfo("no-BV");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for no-SJ

function testLocaleInfoGetDecimalSeparatorfor_no_SJ() {
	var info = new ilib.LocaleInfo("no-SJ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_no_SJ() {
	var info = new ilib.LocaleInfo("no-SJ");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_no_SJ() {
	var info = new ilib.LocaleInfo("no-SJ");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_no_SJ() {
	var info = new ilib.LocaleInfo("no-SJ");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_no_SJ() {
	var info = new ilib.LocaleInfo("no-SJ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_no_SJ() {
	var info = new ilib.LocaleInfo("no-SJ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_no_SJ() {
	var info = new ilib.LocaleInfo("no-SJ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for om-ET

function testLocaleInfoGetDecimalSeparatorfor_om_ET() {
	var info = new ilib.LocaleInfo("om-ET");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_om_ET() {
	var info = new ilib.LocaleInfo("om-ET");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_om_ET() {
	var info = new ilib.LocaleInfo("om-ET");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_om_ET() {
	var info = new ilib.LocaleInfo("om-ET");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_om_ET() {
	var info = new ilib.LocaleInfo("om-ET");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_om_ET() {
	var info = new ilib.LocaleInfo("om-ET");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_om_ET() {
	var info = new ilib.LocaleInfo("om-ET");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for os-RU

function testLocaleInfoGetDecimalSeparatorfor_os_RU() {
	var info = new ilib.LocaleInfo("os-RU");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_os_RU() {
	var info = new ilib.LocaleInfo("os-RU");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_os_RU() {
	var info = new ilib.LocaleInfo("os-RU");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_os_RU() {
	var info = new ilib.LocaleInfo("os-RU");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_os_RU() {
	var info = new ilib.LocaleInfo("os-RU");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_os_RU() {
	var info = new ilib.LocaleInfo("os-RU");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_os_RU() {
	var info = new ilib.LocaleInfo("os-RU");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for pa-PK-Arab

function testLocaleInfoGetDecimalSeparatorfor_pa() {
	var info = new ilib.LocaleInfo("pa-PK-Arab");
	assertNotNull(info);
	assertEquals("٫", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pa() {
	var info = new ilib.LocaleInfo("pa-PK-Arab");
	assertNotNull(info);

	assertEquals("٬", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pa() {
	var info = new ilib.LocaleInfo("pa-PK-Arab");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pa() {
	var info = new ilib.LocaleInfo("pa-PK-Arab");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_pa() {
	var info = new ilib.LocaleInfo("pa-PK-Arab");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pa() {
	var info = new ilib.LocaleInfo("pa-PK-Arab");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pa() {
	var info = new ilib.LocaleInfo("pa-PK-Arab");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for pt-AO

function testLocaleInfoGetDecimalSeparatorfor_pt_AO() {
	var info = new ilib.LocaleInfo("pt-AO");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_AO() {
	var info = new ilib.LocaleInfo("pt-AO");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_AO() {
	var info = new ilib.LocaleInfo("pt-AO");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_AO() {
	var info = new ilib.LocaleInfo("pt-AO");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_pt_AO() {
	var info = new ilib.LocaleInfo("pt-AO");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pt_AO() {
	var info = new ilib.LocaleInfo("pt-AO");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pt_AO() {
	var info = new ilib.LocaleInfo("pt-AO");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pt-CV

function testLocaleInfoGetDecimalSeparatorfor_pt_CV() {
	var info = new ilib.LocaleInfo("pt-CV");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_CV() {
	var info = new ilib.LocaleInfo("pt-CV");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_CV() {
	var info = new ilib.LocaleInfo("pt-CV");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_CV() {
	var info = new ilib.LocaleInfo("pt-CV");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_pt_CV() {
	var info = new ilib.LocaleInfo("pt-CV");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pt_CV() {
	var info = new ilib.LocaleInfo("pt-CV");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pt_CV() {
	var info = new ilib.LocaleInfo("pt-CV");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pt-GW

function testLocaleInfoGetDecimalSeparatorfor_pt_GW() {
	var info = new ilib.LocaleInfo("pt-GW");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_GW() {
	var info = new ilib.LocaleInfo("pt-GW");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_GW() {
	var info = new ilib.LocaleInfo("pt-GW");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_GW() {
	var info = new ilib.LocaleInfo("pt-GW");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_pt_GW() {
	var info = new ilib.LocaleInfo("pt-GW");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pt_GW() {
	var info = new ilib.LocaleInfo("pt-GW");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pt_GW() {
	var info = new ilib.LocaleInfo("pt-GW");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pt-MO

function testLocaleInfoGetDecimalSeparatorfor_pt_MO() {
	var info = new ilib.LocaleInfo("pt-MO");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_MO() {
	var info = new ilib.LocaleInfo("pt-MO");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_MO() {
	var info = new ilib.LocaleInfo("pt-MO");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_MO() {
	var info = new ilib.LocaleInfo("pt-MO");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_pt_MO() {
	var info = new ilib.LocaleInfo("pt-MO");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pt_MO() {
	var info = new ilib.LocaleInfo("pt-MO");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pt_MO() {
	var info = new ilib.LocaleInfo("pt-MO");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pt-MZ

function testLocaleInfoGetDecimalSeparatorfor_pt_MZ() {
	var info = new ilib.LocaleInfo("pt-MZ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_MZ() {
	var info = new ilib.LocaleInfo("pt-MZ");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_MZ() {
	var info = new ilib.LocaleInfo("pt-MZ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_MZ() {
	var info = new ilib.LocaleInfo("pt-MZ");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_pt_MZ() {
	var info = new ilib.LocaleInfo("pt-MZ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pt_MZ() {
	var info = new ilib.LocaleInfo("pt-MZ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pt_MZ() {
	var info = new ilib.LocaleInfo("pt-MZ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pt-PT

function testLocaleInfoGetDecimalSeparatorfor_pt_PT() {
	var info = new ilib.LocaleInfo("pt-PT");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_PT() {
	var info = new ilib.LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_PT() {
	var info = new ilib.LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_PT() {
	var info = new ilib.LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_pt_PT() {
	var info = new ilib.LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pt_PT() {
	var info = new ilib.LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pt_PT() {
	var info = new ilib.LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pt-ST

function testLocaleInfoGetDecimalSeparatorfor_pt_ST() {
	var info = new ilib.LocaleInfo("pt-ST");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_ST() {
	var info = new ilib.LocaleInfo("pt-ST");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_ST() {
	var info = new ilib.LocaleInfo("pt-ST");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_ST() {
	var info = new ilib.LocaleInfo("pt-ST");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_pt_ST() {
	var info = new ilib.LocaleInfo("pt-ST");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pt_ST() {
	var info = new ilib.LocaleInfo("pt-ST");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pt_ST() {
	var info = new ilib.LocaleInfo("pt-ST");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pt-TL

function testLocaleInfoGetDecimalSeparatorfor_pt_TL() {
	var info = new ilib.LocaleInfo("pt-TL");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_TL() {
	var info = new ilib.LocaleInfo("pt-TL");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_TL() {
	var info = new ilib.LocaleInfo("pt-TL");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_TL() {
	var info = new ilib.LocaleInfo("pt-TL");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_pt_TL() {
	var info = new ilib.LocaleInfo("pt-TL");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pt_TL() {
	var info = new ilib.LocaleInfo("pt-TL");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pt_TL() {
	var info = new ilib.LocaleInfo("pt-TL");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}



//test cases for ro-RS

function testLocaleInfoGetDecimalSeparatorfor_ro_RS() {
	var info = new ilib.LocaleInfo("ro-RS");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ro_RS() {
	var info = new ilib.LocaleInfo("ro-RS");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ro_RS() {
	var info = new ilib.LocaleInfo("ro-RS");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ro_RS() {
	var info = new ilib.LocaleInfo("ro-RS");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ro_RS() {
	var info = new ilib.LocaleInfo("ro-RS");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ro_RS() {
	var info = new ilib.LocaleInfo("ro-RS");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ro_RS() {
	var info = new ilib.LocaleInfo("ro-RS");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for ru-KZ

function testLocaleInfoGetDecimalSeparatorfor_ru_KZ() {
	var info = new ilib.LocaleInfo("ru-KZ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ru_KZ() {
	var info = new ilib.LocaleInfo("ru-KZ");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ru_KZ() {
	var info = new ilib.LocaleInfo("ru-KZ");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ru_KZ() {
	var info = new ilib.LocaleInfo("ru-KZ");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ru_KZ() {
	var info = new ilib.LocaleInfo("ru-KZ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ru_KZ() {
	var info = new ilib.LocaleInfo("ru-KZ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ru_KZ() {
	var info = new ilib.LocaleInfo("ru-KZ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ru-TM

function testLocaleInfoGetDecimalSeparatorfor_ru_TM() {
	var info = new ilib.LocaleInfo("ru-TM");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ru_TM() {
	var info = new ilib.LocaleInfo("ru-TM");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ru_TM() {
	var info = new ilib.LocaleInfo("ru-TM");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ru_TM() {
	var info = new ilib.LocaleInfo("ru-TM");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ru_TM() {
	var info = new ilib.LocaleInfo("ru-TM");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ru_TM() {
	var info = new ilib.LocaleInfo("ru-TM");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ru_TM() {
	var info = new ilib.LocaleInfo("ru-TM");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for shi-MA-Tfng

function testLocaleInfoGetDecimalSeparatorfor_shi_MA_Tfng() {
	var info = new ilib.LocaleInfo("shi-MA-Tfng");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_shi_MA_Tfng() {
	var info = new ilib.LocaleInfo("shi-MA-Tfng");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_shi_MA_Tfng() {
	var info = new ilib.LocaleInfo("shi-MA-Tfng");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_shi_MA_Tfng() {
	var info = new ilib.LocaleInfo("shi-MA-Tfng");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_shi_MA_Tfng() {
	var info = new ilib.LocaleInfo("shi-MA-Tfng");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_shi_MA_Tfng() {
	var info = new ilib.LocaleInfo("shi-MA-Tfng");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_shi_MA_Tfng() {
	var info = new ilib.LocaleInfo("shi-MA-Tfng");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for si

function testLocaleInfoGetDecimalSeparatorfor_si() {
	var info = new ilib.LocaleInfo("si");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_si() {
	var info = new ilib.LocaleInfo("si");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_si() {
	var info = new ilib.LocaleInfo("si");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_si() {
	var info = new ilib.LocaleInfo("si");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_si() {
	var info = new ilib.LocaleInfo("si");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_si() {
	var info = new ilib.LocaleInfo("si");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_si() {
	var info = new ilib.LocaleInfo("si");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for sk-SK

function testLocaleInfoGetDecimalSeparatorfor_sk_SK() {
	var info = new ilib.LocaleInfo("sk-SK");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sk_SK() {
	var info = new ilib.LocaleInfo("sk-SK");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sk_SK() {
	var info = new ilib.LocaleInfo("sk-SK");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sk_SK() {
	var info = new ilib.LocaleInfo("sk-SK");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sk_SK() {
	var info = new ilib.LocaleInfo("sk-SK");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sk_SK() {
	var info = new ilib.LocaleInfo("sk-SK");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sk_SK() {
	var info = new ilib.LocaleInfo("sk-SK");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sl-SI

function testLocaleInfoGetDecimalSeparatorfor_sl() {
	var info = new ilib.LocaleInfo("sl-SI");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sl() {
	var info = new ilib.LocaleInfo("sl-SI");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sl() {
	var info = new ilib.LocaleInfo("sl-SI");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sl() {
	var info = new ilib.LocaleInfo("sl-SI");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sl() {
	var info = new ilib.LocaleInfo("sl-SI");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sl() {
	var info = new ilib.LocaleInfo("sl-SI");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sl() {
	var info = new ilib.LocaleInfo("sl-SI");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}



function testLocaleInfoGetGroupingSeparatorfor_so_ET() {
	var info = new ilib.LocaleInfo("so-ET");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_so_ET() {
	var info = new ilib.LocaleInfo("so-ET");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_so_ET() {
	var info = new ilib.LocaleInfo("so-ET");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_so_ET() {
	var info = new ilib.LocaleInfo("so-ET");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_so_ET() {
	var info = new ilib.LocaleInfo("so-ET");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_so_ET() {
	var info = new ilib.LocaleInfo("so-ET");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for so-SO

function testLocaleInfoGetDecimalSeparatorfor_so_SO() {
	var info = new ilib.LocaleInfo("so-SO");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_so_SO() {
	var info = new ilib.LocaleInfo("so-SO");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_so_SO() {
	var info = new ilib.LocaleInfo("so-SO");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_so_SO() {
	var info = new ilib.LocaleInfo("so-SO");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_so_SO() {
	var info = new ilib.LocaleInfo("so-SO");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_so_SO() {
	var info = new ilib.LocaleInfo("so-SO");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_so_SO() {
	var info = new ilib.LocaleInfo("so-SO");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for sq-MK

function testLocaleInfoGetDecimalSeparatorfor_sq_MK() {
	var info = new ilib.LocaleInfo("sq-MK");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sq_MK() {
	var info = new ilib.LocaleInfo("sq-MK");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sq_MK() {
	var info = new ilib.LocaleInfo("sq-MK");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sq_MK() {
	var info = new ilib.LocaleInfo("sq-MK");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sq_MK() {
	var info = new ilib.LocaleInfo("sq-MK");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sq_MK() {
	var info = new ilib.LocaleInfo("sq-MK");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sq_MK() {
	var info = new ilib.LocaleInfo("sq-MK");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for sr-BA-Cyrl

function testLocaleInfoGetDecimalSeparatorfor_sr_BA_Cyrl() {
	var info = new ilib.LocaleInfo("sr-BA-Cyrl");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sr_BA_Cyrl() {
	var info = new ilib.LocaleInfo("sr-BA-Cyrl");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sr_BA_Cyrl() {
	var info = new ilib.LocaleInfo("sr-BA-Cyrl");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sr_BA_Cyrl() {
	var info = new ilib.LocaleInfo("sr-BA-Cyrl");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sr_BA_Cyrl() {
	var info = new ilib.LocaleInfo("sr-BA-Cyrl");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sr_BA_Cyrl() {
	var info = new ilib.LocaleInfo("sr-BA-Cyrl");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sr_BA_Cyrl() {
	var info = new ilib.LocaleInfo("sr-BA-Cyrl");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sr-BA-Latn

function testLocaleInfoGetDecimalSeparatorfor_sr_BA_Latn() {
	var info = new ilib.LocaleInfo("sr-BA-Latn");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sr_BA_Latn() {
	var info = new ilib.LocaleInfo("sr-BA-Latn");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sr_BA_Latn() {
	var info = new ilib.LocaleInfo("sr-BA-Latn");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sr_BA_Latn() {
	var info = new ilib.LocaleInfo("sr-BA-Latn");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sr_BA_Latn() {
	var info = new ilib.LocaleInfo("sr-BA-Latn");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sr_BA_Latn() {
	var info = new ilib.LocaleInfo("sr-BA-Latn");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sr_BA_Latn() {
	var info = new ilib.LocaleInfo("sr-BA-Latn");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sr-ME-Latn

function testLocaleInfoGetDecimalSeparatorfor_sr_ME_Latn() {
	var info = new ilib.LocaleInfo("sr-ME-Latn");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sr_ME_Latn() {
	var info = new ilib.LocaleInfo("sr-ME-Latn");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sr_ME_Latn() {
	var info = new ilib.LocaleInfo("sr-ME-Latn");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sr_ME_Latn() {
	var info = new ilib.LocaleInfo("sr-ME-Latn");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sr_ME_Latn() {
	var info = new ilib.LocaleInfo("sr-ME-Latn");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sr_ME_Latn() {
	var info = new ilib.LocaleInfo("sr-ME-Latn");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sr_ME_Latn() {
	var info = new ilib.LocaleInfo("sr-ME-Latn");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sr-RS-Latn

function testLocaleInfoGetDecimalSeparatorfor_sr_RS_Latn() {
	var info = new ilib.LocaleInfo("sr-RS-Latn");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sr_RS_Latn() {
	var info = new ilib.LocaleInfo("sr-RS-Latn");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sr_RS_Latn() {
	var info = new ilib.LocaleInfo("sr-RS-Latn");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sr_RS_Latn() {
	var info = new ilib.LocaleInfo("sr-RS-Latn");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sr_RS_Latn() {
	var info = new ilib.LocaleInfo("sr-RS-Latn");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sr_RS_Latn() {
	var info = new ilib.LocaleInfo("sr-RS-Latn");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sr_RS_Latn() {
	var info = new ilib.LocaleInfo("sr-RS-Latn");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sr-RS

function testLocaleInfoGetDecimalSeparatorfor_sr_RS() {
	var info = new ilib.LocaleInfo("sr-RS");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sr_RS() {
	var info = new ilib.LocaleInfo("sr-RS");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sr_RS() {
	var info = new ilib.LocaleInfo("sr-RS");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sr_RS() {
	var info = new ilib.LocaleInfo("sr-RS");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sr_RS() {
	var info = new ilib.LocaleInfo("sr-RS");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sr_RS() {
	var info = new ilib.LocaleInfo("sr-RS");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sr_RS() {
	var info = new ilib.LocaleInfo("sr-RS");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}



//test cases for ss-ZA

function testLocaleInfoGetDecimalSeparatorfor_ss_ZA() {
	var info = new ilib.LocaleInfo("ss-ZA");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ss_ZA() {
	var info = new ilib.LocaleInfo("ss-ZA");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ss_ZA() {
	var info = new ilib.LocaleInfo("ss-ZA");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ss_ZA() {
	var info = new ilib.LocaleInfo("ss-ZA");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ss_ZA() {
	var info = new ilib.LocaleInfo("ss-ZA");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ss_ZA() {
	var info = new ilib.LocaleInfo("ss-ZA");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ss_ZA() {
	var info = new ilib.LocaleInfo("ss-ZA");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for st-LS

function testLocaleInfoGetDecimalSeparatorfor_st_LS() {
	var info = new ilib.LocaleInfo("st-LS");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_st_LS() {
	var info = new ilib.LocaleInfo("st-LS");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_st_LS() {
	var info = new ilib.LocaleInfo("st-LS");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_st_LS() {
	var info = new ilib.LocaleInfo("st-LS");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_st_LS() {
	var info = new ilib.LocaleInfo("st-LS");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_st_LS() {
	var info = new ilib.LocaleInfo("st-LS");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_st_LS() {
	var info = new ilib.LocaleInfo("st-LS");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}



//test cases for sv-FI

function testLocaleInfoGetDecimalSeparatorfor_sv_FI() {
	var info = new ilib.LocaleInfo("sv-FI");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sv_FI() {
	var info = new ilib.LocaleInfo("sv-FI");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sv_FI() {
	var info = new ilib.LocaleInfo("sv-FI");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sv() {
	var info = new ilib.LocaleInfo("sv-FI");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sv_FI() {
	var info = new ilib.LocaleInfo("sv-FI");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sv_FI() {
	var info = new ilib.LocaleInfo("sv-FI");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sv_FI() {
	var info = new ilib.LocaleInfo("sv-FI");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for sw-UG

function testLocaleInfoGetDecimalSeparatorfor_sw_UG() {
	var info = new ilib.LocaleInfo("sw-UG");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sw_UG() {
	var info = new ilib.LocaleInfo("sw-UG");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sw_UG() {
	var info = new ilib.LocaleInfo("sw-UG");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sw_UG() {
	var info = new ilib.LocaleInfo("sw-UG");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sw_UG() {
	var info = new ilib.LocaleInfo("sw-UG");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sw_UG() {
	var info = new ilib.LocaleInfo("sw-UG");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sw_UG() {
	var info = new ilib.LocaleInfo("sw-UG");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}



//test cases for ta-LK

function testLocaleInfoGetDecimalSeparatorfor_ta_LK() {
	var info = new ilib.LocaleInfo("ta-LK");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ta_LK() {
	var info = new ilib.LocaleInfo("ta-LK");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ta_LK() {
	var info = new ilib.LocaleInfo("ta-LK");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ta_LK() {
	var info = new ilib.LocaleInfo("ta-LK");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ta_LK() {
	var info = new ilib.LocaleInfo("ta-LK");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ta_LK() {
	var info = new ilib.LocaleInfo("ta-LK");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ta_LK() {
	var info = new ilib.LocaleInfo("ta-LK");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ta-MY

function testLocaleInfoGetDecimalSeparatorfor_ta_MY() {
	var info = new ilib.LocaleInfo("ta-MY");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ta_MY() {
	var info = new ilib.LocaleInfo("ta-MY");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ta_MY() {
	var info = new ilib.LocaleInfo("ta-MY");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ta_MY() {
	var info = new ilib.LocaleInfo("ta-MY");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ta_MY() {
	var info = new ilib.LocaleInfo("ta-MY");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ta_MY() {
	var info = new ilib.LocaleInfo("ta-MY");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ta_MY() {
	var info = new ilib.LocaleInfo("ta-MY");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ta-SG

function testLocaleInfoGetDecimalSeparatorfor_ta_SG() {
	var info = new ilib.LocaleInfo("ta-SG");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ta_SG() {
	var info = new ilib.LocaleInfo("ta-SG");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ta_SG() {
	var info = new ilib.LocaleInfo("ta-SG");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ta_SG() {
	var info = new ilib.LocaleInfo("ta-SG");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ta_SG() {
	var info = new ilib.LocaleInfo("ta-SG");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ta_SG() {
	var info = new ilib.LocaleInfo("ta-SG");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ta_SG() {
	var info = new ilib.LocaleInfo("ta-SG");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for th-TH

function testLocaleInfoGetDecimalSeparatorfor_th() {
	var info = new ilib.LocaleInfo("th-TH");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_th() {
	var info = new ilib.LocaleInfo("th-TH");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_th() {
	var info = new ilib.LocaleInfo("th-TH");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_th() {
	var info = new ilib.LocaleInfo("th-TH");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_th() {
	var info = new ilib.LocaleInfo("th-TH");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_th() {
	var info = new ilib.LocaleInfo("th-TH");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_th() {
	var info = new ilib.LocaleInfo("th-TH");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}



//test cases for uk-UA

function testLocaleInfoGetDecimalSeparatorfor_uk_UA() {
	var info = new ilib.LocaleInfo("uk-UA");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_uk_UA() {
	var info = new ilib.LocaleInfo("uk-UA");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_uk_UA() {
	var info = new ilib.LocaleInfo("uk-UA");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_uk_UA() {
	var info = new ilib.LocaleInfo("uk-UA");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_uk_UA() {
	var info = new ilib.LocaleInfo("uk-UA");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_uk_UA() {
	var info = new ilib.LocaleInfo("uk-UA");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_uk_UA() {
	var info = new ilib.LocaleInfo("uk-UA");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ur

function testLocaleInfoGetDecimalSeparatorfor_ur() {
	var info = new ilib.LocaleInfo("ur");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ur() {
	var info = new ilib.LocaleInfo("ur");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ur() {
	var info = new ilib.LocaleInfo("ur");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ur() {
	var info = new ilib.LocaleInfo("ur");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ur() {
	var info = new ilib.LocaleInfo("ur");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ur() {
	var info = new ilib.LocaleInfo("ur");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ur() {
	var info = new ilib.LocaleInfo("ur");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ur-IN

function testLocaleInfoGetDecimalSeparatorfor_ur_IN() {
	var info = new ilib.LocaleInfo("ur-IN");
	assertNotNull(info);
	assertEquals("٫", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ur_IN() {
	var info = new ilib.LocaleInfo("ur-IN");
	assertNotNull(info);

	assertEquals("٬", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ur_IN() {
	var info = new ilib.LocaleInfo("ur-IN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ur_IN() {
	var info = new ilib.LocaleInfo("ur-IN");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ur_IN() {
	var info = new ilib.LocaleInfo("ur-IN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ur_IN() {
	var info = new ilib.LocaleInfo("ur-IN");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ur_IN() {
	var info = new ilib.LocaleInfo("ur-IN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ur-PK

function testLocaleInfoGetDecimalSeparatorfor_ur_PK() {
	var info = new ilib.LocaleInfo("ur-PK");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ur_PK() {
	var info = new ilib.LocaleInfo("ur-PK");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ur_PK() {
	var info = new ilib.LocaleInfo("ur-PK");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ur_PK() {
	var info = new ilib.LocaleInfo("ur-PK");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ur_PK() {
	var info = new ilib.LocaleInfo("ur-PK");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ur_PK() {
	var info = new ilib.LocaleInfo("ur-PK");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ur_PK() {
	var info = new ilib.LocaleInfo("ur-PK");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for uz-AF-Arab

function testLocaleInfoGetDecimalSeparatorfor_ur_AF_Arab() {
	var info = new ilib.LocaleInfo("uz-AF-Arab");
	assertNotNull(info);
	assertEquals("٫", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ur_AF_Arab() {
	var info = new ilib.LocaleInfo("uz-AF-Arab");
	assertNotNull(info);

	assertEquals("٬", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ur_AF_Arab() {
	var info = new ilib.LocaleInfo("uz-AF-Arab");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ur_AF_Arab() {
	var info = new ilib.LocaleInfo("uz-AF-Arab");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ur_AF_Arab() {
	var info = new ilib.LocaleInfo("uz-AF-Arab");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ur_AF_Arab() {
	var info = new ilib.LocaleInfo("uz-AF-Arab");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ur_AF_Arab() {
	var info = new ilib.LocaleInfo("uz-AF-Arab");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for uz-UZ

function testLocaleInfoGetDecimalSeparatorfor_uz_UZ_Latn() {
	var info = new ilib.LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_uz_UZ_Latn() {
	var info = new ilib.LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_uz_UZ_Latn() {
	var info = new ilib.LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_uz_UZ_Latn() {
	var info = new ilib.LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_uz_UZ_Latn() {
	var info = new ilib.LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_uz_UZ_Latn() {
	var info = new ilib.LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_uz_UZ_Latn() {
	var info = new ilib.LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for vai-LR-Latn

function testLocaleInfoGetDecimalSeparatorfor_vai_LR_Latn() {
	var info = new ilib.LocaleInfo("vai-LR-Latn");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_vai_LR_Latn() {
	var info = new ilib.LocaleInfo("vai-LR-Latn");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_vai_LR_Latn() {
	var info = new ilib.LocaleInfo("vai-LR-Latn");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_vai_LR_Latn() {
	var info = new ilib.LocaleInfo("vai-LR-Latn");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_vai_LR_Latn() {
	var info = new ilib.LocaleInfo("vai-LR-Latn");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_vai_LR_Latn() {
	var info = new ilib.LocaleInfo("vai-LR-Latn");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_vai_LR_Latn() {
	var info = new ilib.LocaleInfo("vai-LR-Latn");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for vi-VN

function testLocaleInfoGetDecimalSeparatorfor_vi() {
	var info = new ilib.LocaleInfo("vi-VN");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_vi() {
	var info = new ilib.LocaleInfo("vi-VN");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_vi() {
	var info = new ilib.LocaleInfo("vi-VN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_vi() {
	var info = new ilib.LocaleInfo("vi-VN");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_vi() {
	var info = new ilib.LocaleInfo("vi-VN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_vi() {
	var info = new ilib.LocaleInfo("vi-VN");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_vi() {
	var info = new ilib.LocaleInfo("vi-VN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for zh-SG-Hans

function testLocaleInfoGetDecimalSeparatorfor_zh_SG_Hans() {
	var info = new ilib.LocaleInfo("zh-SG-Hans");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_zh_SG_Hans() {
	var info = new ilib.LocaleInfo("zh-SG-Hans");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_zh_SG_Hans() {
	var info = new ilib.LocaleInfo("zh-SG-Hans");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_zh_SG_Hans() {
	var info = new ilib.LocaleInfo("zh-SG-Hans");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_zh_SG_Hans() {
	var info = new ilib.LocaleInfo("zh-SG-Hans");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_zh_SG_Hans() {
	var info = new ilib.LocaleInfo("zh-SG-Hans");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_zh_SG_Hans() {
	var info = new ilib.LocaleInfo("zh-SG-Hans");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for zh-MO-Hant

function testLocaleInfoGetDecimalSeparatorfor_zh_MO_Hant() {
	var info = new ilib.LocaleInfo("zh-MO-Hant");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_zh_MO_Hant() {
	var info = new ilib.LocaleInfo("zh-MO-Hant");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_zh_MO_Hant() {
	var info = new ilib.LocaleInfo("zh-MO-Hant");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_zh_MO_Hant() {
	var info = new ilib.LocaleInfo("zh-MO-Hant");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_zh_MO_Hant() {
	var info = new ilib.LocaleInfo("zh-MO-Hant");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_zh_MO_Hant() {
	var info = new ilib.LocaleInfo("zh-MO-Hant");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_zh_MO_Hant() {
	var info = new ilib.LocaleInfo("zh-MO-Hant");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for zh-US-Hant

function testLocaleInfoGetDecimalSeparatorfor_zh_US_Hant() {
	var info = new ilib.LocaleInfo("zh-US-Hant");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_zh_US_Hant() {
	var info = new ilib.LocaleInfo("zh-US-Hant");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_zh_US_Hant() {
	var info = new ilib.LocaleInfo("zh-US-Hant");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_zh_US_Hant() {
	var info = new ilib.LocaleInfo("zh-US-Hant");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_zh_US_Hant() {
	var info = new ilib.LocaleInfo("zh-US-Hant");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_zh_US_Hant() {
	var info = new ilib.LocaleInfo("zh-US-Hant");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_zh_US_Hant() {
	var info = new ilib.LocaleInfo("zh-US-Hant");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for zh-MY

function testLocaleInfoGetDecimalSeparatorfor_zh_MY() {
	var info = new ilib.LocaleInfo("zh-MY");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_zh_MY() {
	var info = new ilib.LocaleInfo("zh-MY");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_zh_MY() {
	var info = new ilib.LocaleInfo("zh-MY");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_zh_MY() {
	var info = new ilib.LocaleInfo("zh-MY");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_zh_MY() {
	var info = new ilib.LocaleInfo("zh-MY");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_zh_MY() {
	var info = new ilib.LocaleInfo("zh-MY");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_zh_MY() {
	var info = new ilib.LocaleInfo("zh-MY");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


/************************************************end 04-JUN-2013**********************************************************/

function testLocaleInfoGetGroupingSeparator1() {
	var info = new ilib.LocaleInfo();
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}
function testLocaleInfoGetGroupingSeparator2() {
	var info = new ilib.LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetGroupingSeparator3() {
	var info = new ilib.LocaleInfo("fr-FR");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetGroupingDigits1() {
	var info = new ilib.LocaleInfo();
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetGroupingDigits2() {
	var info = new ilib.LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetGroupingDigits3() {
	var info = new ilib.LocaleInfo("zh-CN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetPercentageFormat2() {
	var info = new ilib.LocaleInfo("fr-FR");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetPercentageFormat1() {
	var info = new ilib.LocaleInfo();
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetPercentageSymbol1() {
	var info = new ilib.LocaleInfo();
	assertNotNull(info);

	assertEquals("%", info.getPercentageSymbol());
}

function testLocaleInfoGetPercentageSymbol2() {
	var info = new ilib.LocaleInfo("fr-FR");
	assertNotNull(info);

	assertEquals("%", info.getPercentageSymbol());
}

function mockLoader(paths, sync, params, callback) {
	var data = [];
	data.push(ilib.data.localeinfo); // for the generic, shared stuff
	paths.shift();
	paths.forEach(function (path) {
		data.push((path.indexOf('zzz') === -1) ? undefined : {
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
			"locale": "zzz-ZZ"
		});
	});
	if (typeof (callback) !== 'undefined') {
		callback.call(this, data);
	}
	return data;
};

function testLocaleInfoLoadMissingDataAsynch() {
	var callbackCalled = false;
	ilib.setLoaderCallback(mockLoader);
	ilib.LocaleInfo.cache = {}; // empty the cache
	var info = new ilib.LocaleInfo("zzz-ZX", {
		sync: false,
		onLoad: function (li) {
			assertNotNull(li);

			assertEquals("iso {s} {n}", li.getCurrencyFormats().iso);
			assertEquals(4, li.getFirstDayOfWeek());
			assertEquals("%", li.getPercentageSymbol());
			callbackCalled = true;
		}
	});
	assertNotNull(info);
	assertTrue(callbackCalled);
}

function testLocaleInfoLoadMissingDataSync() {
	ilib.LocaleInfo.cache = {}; // empty the cache
	ilib.setLoaderCallback(mockLoader);
	var info = new ilib.LocaleInfo("zzz-ZX", {
		sync: true
	});

	ilib.setLoaderCallback(undefined);
	assertNotNull(info);

	assertEquals("iso {s} {n}", info.getCurrencyFormats().iso);
	assertEquals(4, info.getFirstDayOfWeek());
	assertEquals("%", info.getPercentageSymbol());
}

function testLocaleInfoLoadMissingDataAsynchNoData() {
	var callbackCalled = false;
	ilib.LocaleInfo.cache = {}; // empty the cache
	ilib.setLoaderCallback(mockLoader);
	var info = new ilib.LocaleInfo("qq-QQ", {
		sync: false,
		onLoad: function (li) {
			assertNotUndefined(li);
			callbackCalled = true;
			// should return the shared data only
			assertEquals("{s}{n}", li.getCurrencyFormats().common);
			assertEquals(1, li.getFirstDayOfWeek());
			assertEquals("%", li.getPercentageSymbol());
		}
	});
	assertNotNull(info);
	assertTrue(callbackCalled);
}

function testLocaleInfoLoadMissingDataSyncNoData() {
	ilib.LocaleInfo.cache = {}; // empty the cache
	ilib.setLoaderCallback(mockLoader);
	var li = new ilib.LocaleInfo("qq-QQ", {
		sync: true
	});
	ilib.setLoaderCallback(undefined);
	assertNotUndefined(li);
	// should return the shared data only
	assertEquals("{s}{n}", li.getCurrencyFormats().common);
	assertEquals(1, li.getFirstDayOfWeek());
	assertEquals("%", li.getPercentageSymbol());
}

function testLocaleInfoLoadPreassembledDataAsynch() {
	var callbackCalled = false;
	ilib.LocaleInfo.cache = {}; // empty the cache
	ilib.setLoaderCallback(mockLoader);
	var info = new ilib.LocaleInfo("fr-FR", {
		sync: false,
		onLoad: function (li) {
			assertNotUndefined(li);
			callbackCalled = true;
			// should return the shared data only
			assertEquals("EUR", li.getCurrency());
			assertEquals(1, li.getFirstDayOfWeek());
			assertEquals("FR", li.info.locale);
			assertEquals("Europe/Paris", li.getTimeZone());
		}
	});
	assertNotNull(info);
	assertTrue(callbackCalled);
}

// locale with no script
ilib.data.localeinfo_fr_FR_overseas = {
	"currency": "USD",
	"locale": "fr-FR-overseas",
	"timezone": "Pacific/Tahiti"
};

function testLocaleInfoLoadMissingLocaleParts() {
	ilib.LocaleInfo.cache = {}; // empty the cache
	var li = new ilib.LocaleInfo("fr-FR-overseas");
	assertNotUndefined(li);
	assertEquals("USD", li.getCurrency());
	assertEquals(1, li.getFirstDayOfWeek());
	assertEquals("fr-FR-overseas", li.info.locale);
	assertEquals("Pacific/Tahiti", li.getTimeZone());
}

function testLocaleInfoGetAllScriptsSingle() {
	var li = new ilib.LocaleInfo("nl-NL");
	assertNotUndefined(li);
	assertArrayEqualsIgnoringOrder(["Latn"], li.getAllScripts());
}

function testLocaleInfoGetAllScriptsMultiple1() {
	var li = new ilib.LocaleInfo("de-DE");
	assertNotUndefined(li);
	assertArrayEqualsIgnoringOrder(["Latn", "Runr"], li.getAllScripts());
}

function testLocaleInfoGetAllScriptsMultiple2() {
	var li = new ilib.LocaleInfo("uz-UZ");
	assertNotUndefined(li);
	assertArrayEqualsIgnoringOrder(["Arab", "Cyrl", "Latn"], li.getAllScripts());
}

function testLocaleInfoGetDefaultScriptSingle() {
	var li = new ilib.LocaleInfo("nl-NL");
	assertNotUndefined(li);
	assertEquals("Latn", li.getDefaultScript());
}

function testLocaleInfoGetDefaultScriptMultiple() {
	var li = new ilib.LocaleInfo("uz-UZ");
	assertNotUndefined(li);
	assertEquals("Arab", li.getDefaultScript());
}

function testLocaleInfoGetScriptSingle() {
	var li = new ilib.LocaleInfo("nl-NL");
	assertNotUndefined(li);
	assertEquals("Latn", li.getScript());
}

function testLocaleInfoGetScriptMultiple() {
	var li = new ilib.LocaleInfo("uz-UZ");
	assertNotUndefined(li);
	assertEquals("Arab", li.getScript());
}

function testLocaleInfoGetScriptMultipleLocaleOverride() {
	var li = new ilib.LocaleInfo("uz-Cyrl-UZ");
	assertNotUndefined(li);
	assertEquals("Cyrl", li.getScript());
}

function testLocaleInfoGetLikelyLocaleByLanguage() {
	var li = new ilib.LocaleInfo("uz");
	assertNotUndefined(li);
	var locale = li.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("uz-Cyrl-UZ", locale.getSpec());
}

function testLocaleInfoGetLikelyLocaleByRegion() {
	var li = new ilib.LocaleInfo("UZ");
	assertNotUndefined(li);
	var locale = li.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("uz-Cyrl-UZ", locale.getSpec());
}

function testLocaleInfoGetLikelyLocaleByScript() {
	var li = new ilib.LocaleInfo("Arab");
	assertNotUndefined(li);
	var locale = li.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("ar-Arab-EG", locale.getSpec());
}

function testLocaleInfoGetLikelyLocaleByLanguageAndScript() {
	var li = new ilib.LocaleInfo("pa-Arab");
	assertNotUndefined(li);
	var locale = li.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("pa-Arab-PK", locale.getSpec());
}

function testLocaleInfoGetLikelyLocaleByLanguageAndRegion() {
	var li = new ilib.LocaleInfo("uz-AF");
	assertNotUndefined(li);
	var locale = li.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("uz-Arab-AF", locale.getSpec());
}

function testLocaleInfoGetLikelyLocaleByRegionAndScript() {
	var li = new ilib.LocaleInfo("MA-Latn");
	assertNotUndefined(li);
	var locale = li.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("fr-Latn-MA", locale.getSpec());
}

function testLocaleInfoGetLikelyLocaleAlreadySpecified() {
	var li = new ilib.LocaleInfo("en-CA-Latn");
	assertNotUndefined(li);
	var locale = li.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("en-Latn-CA", locale.getSpec());
}

function testLocaleInfoGetLikelyLocaleByLanguageMissing() {
	var li = new ilib.LocaleInfo("zxx");
	assertNotUndefined(li);
	var locale = li.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("zxx", locale.getSpec());
}

function testLocaleInfoGetLikelyLocaleByLanguageAndRegionMissing() {
	var li = new ilib.LocaleInfo("en-GB");
	assertNotUndefined(li);
	var locale = li.getLikelyLocale();
	assertNotUndefined(locale);
	assertEquals("en-GB", locale.getSpec());
}


function testLocaleInfoGetLanguageName1() {
	var li = new ilib.LocaleInfo("he-IL");
	assertNotUndefined(li);
	assertEquals("Hebrew", li.getLanguageName());
}

function testLocaleInfoGetLanguageName2() {
	var li = new ilib.LocaleInfo("es-MX");
	assertNotUndefined(li);
	assertEquals("Spanish", li.getLanguageName());
}

function testLocaleInfoGetLanguageName3() {
	var li = new ilib.LocaleInfo("asa-TZ");
	assertNotUndefined(li);
	assertEquals("Asu", li.getLanguageName());
}

function testLocaleInfoGetRegionName1() {
	var li = new ilib.LocaleInfo("he-IL");
	assertNotUndefined(li);
	assertEquals("Israel", li.getRegionName());
}

function testLocaleInfoGetRegionName2() {
	var li = new ilib.LocaleInfo("es-MX");
	assertNotUndefined(li);
	assertEquals("Mexico", li.getRegionName());
}

function testLocaleInfoGetRegionName3() {
	var li = new ilib.LocaleInfo("asa-TZ");
	assertNotUndefined(li);
	assertEquals("Tanzania", li.getRegionName());
}
