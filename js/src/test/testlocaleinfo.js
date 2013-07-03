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

	assertEquals("halfeven", info.getRoundingMode());
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

	assertEquals(0, info.getPrimaryGroupingDigits());
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

	assertEquals("", info.getGroupingSeparator());
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
//test cases for bas-CM

function testLocaleInfoGetDecimalSeparatorfor_bas_CM() {
	var info = new ilib.LocaleInfo("bas-CM");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_bas_CM() {
	var info = new ilib.LocaleInfo("bas-CM");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_bas_CM() {
	var info = new ilib.LocaleInfo("bas-CM");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_bas_CM() {
	var info = new ilib.LocaleInfo("bas-CM");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_bas_CM() {
	var info = new ilib.LocaleInfo("bas-CM");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_bas_CM() {
	var info = new ilib.LocaleInfo("bas-CM");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_bas_CM() {
	var info = new ilib.LocaleInfo("bas-CM");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for BB number format

function testLocaleInfoGetDecimalSeparatorfor_BB() {
	var info = new ilib.LocaleInfo("BB");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_BB() {
	var info = new ilib.LocaleInfo("BB");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_BB() {
	var info = new ilib.LocaleInfo("BB");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_BB() {
	var info = new ilib.LocaleInfo("BB");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_BB() {
	var info = new ilib.LocaleInfo("BB");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_BB() {
	var info = new ilib.LocaleInfo("BB");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_BB() {
	var info = new ilib.LocaleInfo("BB");
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

	assertEquals(" ", info.getGroupingSeparator());
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
//test cases for bem-ZM

function testLocaleInfoGetDecimalSeparatorfor_bem_ZM() {
	var info = new ilib.LocaleInfo("bem-ZM");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_bem_ZM() {
	var info = new ilib.LocaleInfo("bem-ZM");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_bem_ZM() {
	var info = new ilib.LocaleInfo("bem-ZM");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_bem_ZM() {
	var info = new ilib.LocaleInfo("bem-ZM");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_bem_ZM() {
	var info = new ilib.LocaleInfo("bem-ZM");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_bem_ZM() {
	var info = new ilib.LocaleInfo("bem-ZM");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_bem_ZM() {
	var info = new ilib.LocaleInfo("bem-ZM");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

function testLocaleInfoGetDecimalSeparatorfor_bez_TZ() {
	var info = new ilib.LocaleInfo("bez-TZ");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_bez_TZ() {
	var info = new ilib.LocaleInfo("bez-TZ");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_bez_TZ() {
	var info = new ilib.LocaleInfo("bez-TZ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_bez_TZ() {
	var info = new ilib.LocaleInfo("bez-TZ");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_bez_TZ() {
	var info = new ilib.LocaleInfo("bez-TZ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_bez_TZ() {
	var info = new ilib.LocaleInfo("bez-TZ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_bez_TZ() {
	var info = new ilib.LocaleInfo("bez-TZ");
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

//test cases for bh-IN

function testLocaleInfoGetDecimalSeparatorfor_bh_IN() {
	var info = new ilib.LocaleInfo("bh-IN");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_bh_IN() {
	var info = new ilib.LocaleInfo("bh-IN");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_bh_IN() {
	var info = new ilib.LocaleInfo("bh-IN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_bh_IN() {
	var info = new ilib.LocaleInfo("bh-IN");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_bh_IN() {
	var info = new ilib.LocaleInfo("bh-IN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_bh_IN() {
	var info = new ilib.LocaleInfo("bh-IN");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_bh_IN() {
	var info = new ilib.LocaleInfo("bh-IN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
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

function testLocaleInfoGetDecimalSeparatorfor_brx_IN() {
	var info = new ilib.LocaleInfo("brx-IN");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_brx_IN() {
	var info = new ilib.LocaleInfo("brx-IN");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_brx_IN() {
	var info = new ilib.LocaleInfo("brx-IN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_brx_IN() {
	var info = new ilib.LocaleInfo("brx-IN");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_brx_IN() {
	var info = new ilib.LocaleInfo("brx-IN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_brx_IN() {
	var info = new ilib.LocaleInfo("brx-IN");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_brx_IN() {
	var info = new ilib.LocaleInfo("brx-IN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for bs-Cyrl-BA

function testLocaleInfoGetDecimalSeparatorfor_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-Cyrl-BA");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-Cyrl-BA");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-Cyrl-BA");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-Cyrl-BA");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-Cyrl-BA");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-Cyrl-BA");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_bs_Cyrl_BA() {
	var info = new ilib.LocaleInfo("bs-Cyrl-BA");
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

function testLocaleInfoGetCurrencyFormat_bs_Cyrl_BA() {

	var info = new ilib.LocaleInfo("bs-BS");
	assertNotNull(info);
	assertEquals("{n} {s}", info.getCurrencyFormats().common);
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

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
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

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_de_AT() {
	var info = new ilib.LocaleInfo("de-AT");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
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

//************************************************End 23/05/2013**********************************************************
//****************************Added by kariyappa 28-May-2013***************************************************************/

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

//test cases for ff

function testLocaleInfoGetDecimalSeparatorfor_ff() {
	var info = new ilib.LocaleInfo("ff");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ff() {
	var info = new ilib.LocaleInfo("ff");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ff() {
	var info = new ilib.LocaleInfo("ff");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ff() {
	var info = new ilib.LocaleInfo("ff");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ff() {
	var info = new ilib.LocaleInfo("ff");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ff() {
	var info = new ilib.LocaleInfo("ff");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ff() {
	var info = new ilib.LocaleInfo("ff");
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

//test cases for fil

function testLocaleInfoGetDecimalSeparatorfor_fil() {
	var info = new ilib.LocaleInfo("fil");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fil() {
	var info = new ilib.LocaleInfo("fil");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fil() {
	var info = new ilib.LocaleInfo("fil");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fil() {
	var info = new ilib.LocaleInfo("fil");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_fil() {
	var info = new ilib.LocaleInfo("fil");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fil() {
	var info = new ilib.LocaleInfo("fil");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fil() {
	var info = new ilib.LocaleInfo("fil");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fj-FJ

function testLocaleInfoGetDecimalSeparatorfor_fj_FJ() {
	var info = new ilib.LocaleInfo("fj-FJ");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fj_FJ() {
	var info = new ilib.LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fj_FJ() {
	var info = new ilib.LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fj_FJ() {
	var info = new ilib.LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
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

	assertEquals("{n} %", info.getPercentageFormat());
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

//test cases for fr

function testLocaleInfoGetDecimalSeparatorfor_fr() {
	var info = new ilib.LocaleInfo("fr");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr() {
	var info = new ilib.LocaleInfo("fr");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr() {
	var info = new ilib.LocaleInfo("fr");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr() {
	var info = new ilib.LocaleInfo("fr");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_fr() {
	var info = new ilib.LocaleInfo("fr");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fr() {
	var info = new ilib.LocaleInfo("fr");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fr() {
	var info = new ilib.LocaleInfo("fr");
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

//test cases for fy

function testLocaleInfoGetDecimalSeparatorfor_fy() {
	var info = new ilib.LocaleInfo("fy");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fy() {
	var info = new ilib.LocaleInfo("fy");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fy() {
	var info = new ilib.LocaleInfo("fy");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fy() {
	var info = new ilib.LocaleInfo("fy");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_fy() {
	var info = new ilib.LocaleInfo("fy");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fy() {
	var info = new ilib.LocaleInfo("fy");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fy() {
	var info = new ilib.LocaleInfo("fy");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ga

function testLocaleInfoGetDecimalSeparatorfor_ga() {
	var info = new ilib.LocaleInfo("ga");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ga() {
	var info = new ilib.LocaleInfo("ga");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ga() {
	var info = new ilib.LocaleInfo("ga");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ga() {
	var info = new ilib.LocaleInfo("ga");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ga() {
	var info = new ilib.LocaleInfo("ga");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ga() {
	var info = new ilib.LocaleInfo("ga");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ga() {
	var info = new ilib.LocaleInfo("ga");
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

//test cases for gd

function testLocaleInfoGetDecimalSeparatorfor_gd() {
	var info = new ilib.LocaleInfo("gd");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_gd() {
	var info = new ilib.LocaleInfo("gd");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_gd() {
	var info = new ilib.LocaleInfo("gd");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_gd() {
	var info = new ilib.LocaleInfo("gd");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_gd() {
	var info = new ilib.LocaleInfo("gd");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_gd() {
	var info = new ilib.LocaleInfo("gd");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_gd() {
	var info = new ilib.LocaleInfo("gd");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for gl

function testLocaleInfoGetDecimalSeparatorfor_gl() {
	var info = new ilib.LocaleInfo("gl");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_gl() {
	var info = new ilib.LocaleInfo("gl");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_gl() {
	var info = new ilib.LocaleInfo("gl");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_gl() {
	var info = new ilib.LocaleInfo("gl");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_gl() {
	var info = new ilib.LocaleInfo("gl");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_gl() {
	var info = new ilib.LocaleInfo("gl");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_gl() {
	var info = new ilib.LocaleInfo("gl");
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

//test cases for gn

function testLocaleInfoGetDecimalSeparatorfor_gn() {
	var info = new ilib.LocaleInfo("gn");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_gn() {
	var info = new ilib.LocaleInfo("gn");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_gn() {
	var info = new ilib.LocaleInfo("gn");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_gn() {
	var info = new ilib.LocaleInfo("gn");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_gn() {
	var info = new ilib.LocaleInfo("gn");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_gn() {
	var info = new ilib.LocaleInfo("gn");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_gn() {
	var info = new ilib.LocaleInfo("gn");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for gsw

function testLocaleInfoGetDecimalSeparatorfor_gsw() {
	var info = new ilib.LocaleInfo("gsw");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_gsw() {
	var info = new ilib.LocaleInfo("gsw");
	assertNotNull(info);

	assertEquals("’", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_gsw() {
	var info = new ilib.LocaleInfo("gsw");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_gsw() {
	var info = new ilib.LocaleInfo("gsw");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_gsw() {
	var info = new ilib.LocaleInfo("gsw");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_gsw() {
	var info = new ilib.LocaleInfo("gsw");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_gsw() {
	var info = new ilib.LocaleInfo("gsw");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for gu

function testLocaleInfoGetDecimalSeparatorfor_gu() {
	var info = new ilib.LocaleInfo("gu");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_gu() {
	var info = new ilib.LocaleInfo("gu");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_gu() {
	var info = new ilib.LocaleInfo("gu");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_gu() {
	var info = new ilib.LocaleInfo("gu");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_gu() {
	var info = new ilib.LocaleInfo("gu");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_gu() {
	var info = new ilib.LocaleInfo("gu");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_gu() {
	var info = new ilib.LocaleInfo("gu");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for guz

function testLocaleInfoGetDecimalSeparatorfor_guz() {
	var info = new ilib.LocaleInfo("guz");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_guz() {
	var info = new ilib.LocaleInfo("guz");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_guz() {
	var info = new ilib.LocaleInfo("guz");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_guz() {
	var info = new ilib.LocaleInfo("guz");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_guz() {
	var info = new ilib.LocaleInfo("guz");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_guz() {
	var info = new ilib.LocaleInfo("guz");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_guz() {
	var info = new ilib.LocaleInfo("guz");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for gv

function testLocaleInfoGetDecimalSeparatorfor_gv() {
	var info = new ilib.LocaleInfo("gv");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_gv() {
	var info = new ilib.LocaleInfo("gv");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_gv() {
	var info = new ilib.LocaleInfo("gv");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_gv() {
	var info = new ilib.LocaleInfo("gv");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_gv() {
	var info = new ilib.LocaleInfo("gv");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_gv() {
	var info = new ilib.LocaleInfo("gv");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_gv() {
	var info = new ilib.LocaleInfo("gv");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//************************************************End 28-May-2013**********************************************************
//*******************Date 29-May-2013 *********************************************************************************************

//test cases for ha

function testLocaleInfoGetDecimalSeparatorfor_ha() {
	var info = new ilib.LocaleInfo("ha");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ha() {
	var info = new ilib.LocaleInfo("ha");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ha() {
	var info = new ilib.LocaleInfo("ha");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ha() {
	var info = new ilib.LocaleInfo("ha");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ha() {
	var info = new ilib.LocaleInfo("ha");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ha() {
	var info = new ilib.LocaleInfo("ha");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ha() {
	var info = new ilib.LocaleInfo("ha");
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

//test cases for haw

function testLocaleInfoGetDecimalSeparatorfor_haw() {
	var info = new ilib.LocaleInfo("haw");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_haw() {
	var info = new ilib.LocaleInfo("haw");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_haw() {
	var info = new ilib.LocaleInfo("haw");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_haw() {
	var info = new ilib.LocaleInfo("haw");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_haw() {
	var info = new ilib.LocaleInfo("haw");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_haw() {
	var info = new ilib.LocaleInfo("haw");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_haw() {
	var info = new ilib.LocaleInfo("haw");
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

//test cases for hi

function testLocaleInfoGetDecimalSeparatorfor_hi() {
	var info = new ilib.LocaleInfo("hi");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_hi() {
	var info = new ilib.LocaleInfo("hi");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_hi() {
	var info = new ilib.LocaleInfo("hi");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_hi() {
	var info = new ilib.LocaleInfo("hi");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_hi() {
	var info = new ilib.LocaleInfo("hi");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_hi() {
	var info = new ilib.LocaleInfo("hi");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_hi() {
	var info = new ilib.LocaleInfo("hi");
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

//test cases for ho

function testLocaleInfoGetDecimalSeparatorfor_ho() {
	var info = new ilib.LocaleInfo("ho");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ho() {
	var info = new ilib.LocaleInfo("ho");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ho() {
	var info = new ilib.LocaleInfo("ho");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ho() {
	var info = new ilib.LocaleInfo("ho");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ho() {
	var info = new ilib.LocaleInfo("ho");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ho() {
	var info = new ilib.LocaleInfo("ho");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ho() {
	var info = new ilib.LocaleInfo("ho");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for hr

function testLocaleInfoGetDecimalSeparatorfor_hr() {
	var info = new ilib.LocaleInfo("hr");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_hr() {
	var info = new ilib.LocaleInfo("hr");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_hr() {
	var info = new ilib.LocaleInfo("hr");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_hr() {
	var info = new ilib.LocaleInfo("hr");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_hr() {
	var info = new ilib.LocaleInfo("hr");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_hr() {
	var info = new ilib.LocaleInfo("hr");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_hr() {
	var info = new ilib.LocaleInfo("hr");
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

//test cases for ht

function testLocaleInfoGetDecimalSeparatorfor_ht() {
	var info = new ilib.LocaleInfo("ht");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ht() {
	var info = new ilib.LocaleInfo("ht");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ht() {
	var info = new ilib.LocaleInfo("ht");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ht() {
	var info = new ilib.LocaleInfo("ht");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ht() {
	var info = new ilib.LocaleInfo("ht");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ht() {
	var info = new ilib.LocaleInfo("ht");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ht() {
	var info = new ilib.LocaleInfo("ht");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for hu

function testLocaleInfoGetDecimalSeparatorfor_hu() {
	var info = new ilib.LocaleInfo("hu");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_hu() {
	var info = new ilib.LocaleInfo("hu");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_hu() {
	var info = new ilib.LocaleInfo("hu");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_hu() {
	var info = new ilib.LocaleInfo("hu");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_hu() {
	var info = new ilib.LocaleInfo("hu");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_hu() {
	var info = new ilib.LocaleInfo("hu");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_hu() {
	var info = new ilib.LocaleInfo("hu");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for hy

function testLocaleInfoGetDecimalSeparatorfor_hy() {
	var info = new ilib.LocaleInfo("hy");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_hy() {
	var info = new ilib.LocaleInfo("hy");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_hy() {
	var info = new ilib.LocaleInfo("hy");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_hy() {
	var info = new ilib.LocaleInfo("hy");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_hy() {
	var info = new ilib.LocaleInfo("hy");
	assertNotNull(info);

	assertEquals(0, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_hy() {
	var info = new ilib.LocaleInfo("hy");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_hy() {
	var info = new ilib.LocaleInfo("hy");
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

	assertEquals(0, info.getPrimaryGroupingDigits());
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

//test cases for hz

function testLocaleInfoGetDecimalSeparatorfor_hz() {
	var info = new ilib.LocaleInfo("hz");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_hz() {
	var info = new ilib.LocaleInfo("hz");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_hz() {
	var info = new ilib.LocaleInfo("hz");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_hz() {
	var info = new ilib.LocaleInfo("hz");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_hz() {
	var info = new ilib.LocaleInfo("hz");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_hz() {
	var info = new ilib.LocaleInfo("hz");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_hz() {
	var info = new ilib.LocaleInfo("hz");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ia

function testLocaleInfoGetDecimalSeparatorfor_ia() {
	var info = new ilib.LocaleInfo("ia");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ia() {
	var info = new ilib.LocaleInfo("ia");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ia() {
	var info = new ilib.LocaleInfo("ia");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ia() {
	var info = new ilib.LocaleInfo("ia");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ia() {
	var info = new ilib.LocaleInfo("ia");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ia() {
	var info = new ilib.LocaleInfo("ia");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ia() {
	var info = new ilib.LocaleInfo("ia");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for id

function testLocaleInfoGetDecimalSeparatorfor_id() {
	var info = new ilib.LocaleInfo("id-ID");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_id() {
	var info = new ilib.LocaleInfo("id-ID");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_id() {
	var info = new ilib.LocaleInfo("id-ID");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_id() {
	var info = new ilib.LocaleInfo("id-ID");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_id() {
	var info = new ilib.LocaleInfo("id-ID");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_id() {
	var info = new ilib.LocaleInfo("id-ID");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ib() {
	var info = new ilib.LocaleInfo("id-ID");
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

//test cases for ig

function testLocaleInfoGetDecimalSeparatorfor_ig() {
	var info = new ilib.LocaleInfo("ig");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ig() {
	var info = new ilib.LocaleInfo("ig");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ig() {
	var info = new ilib.LocaleInfo("ig");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ig() {
	var info = new ilib.LocaleInfo("ig");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ig() {
	var info = new ilib.LocaleInfo("ig");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ig() {
	var info = new ilib.LocaleInfo("ig");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ig() {
	var info = new ilib.LocaleInfo("ig");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ii

function testLocaleInfoGetDecimalSeparatorfor_ii() {
	var info = new ilib.LocaleInfo("ii");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ii() {
	var info = new ilib.LocaleInfo("ii");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ii() {
	var info = new ilib.LocaleInfo("ii");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ii() {
	var info = new ilib.LocaleInfo("ii");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ii() {
	var info = new ilib.LocaleInfo("ii");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ii() {
	var info = new ilib.LocaleInfo("ii");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ii() {
	var info = new ilib.LocaleInfo("ii");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ik

function testLocaleInfoGetDecimalSeparatorfor_ik() {
	var info = new ilib.LocaleInfo("ik");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ik() {
	var info = new ilib.LocaleInfo("ik");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ik() {
	var info = new ilib.LocaleInfo("ik");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ik() {
	var info = new ilib.LocaleInfo("ik");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ik() {
	var info = new ilib.LocaleInfo("ik");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ik() {
	var info = new ilib.LocaleInfo("ik");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ik() {
	var info = new ilib.LocaleInfo("ik");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for is

function testLocaleInfoGetDecimalSeparatorfor_is() {
	var info = new ilib.LocaleInfo("is");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_is() {
	var info = new ilib.LocaleInfo("is");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_is() {
	var info = new ilib.LocaleInfo("is");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_is() {
	var info = new ilib.LocaleInfo("is");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_is() {
	var info = new ilib.LocaleInfo("is");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_is() {
	var info = new ilib.LocaleInfo("is");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_is() {
	var info = new ilib.LocaleInfo("is");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for it

function testLocaleInfoGetDecimalSeparatorfor_it() {
	var info = new ilib.LocaleInfo("it");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_it() {
	var info = new ilib.LocaleInfo("it");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_it() {
	var info = new ilib.LocaleInfo("it");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_it() {
	var info = new ilib.LocaleInfo("it");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_it() {
	var info = new ilib.LocaleInfo("it");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_it() {
	var info = new ilib.LocaleInfo("it");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_it() {
	var info = new ilib.LocaleInfo("it");
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

//test cases for iu

function testLocaleInfoGetDecimalSeparatorfor_iu() {
	var info = new ilib.LocaleInfo("iu");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_iu() {
	var info = new ilib.LocaleInfo("iu");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_iu() {
	var info = new ilib.LocaleInfo("iu");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_iu() {
	var info = new ilib.LocaleInfo("iu");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_iu() {
	var info = new ilib.LocaleInfo("iu");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_iu() {
	var info = new ilib.LocaleInfo("iu");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_iu() {
	var info = new ilib.LocaleInfo("iu");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ja

function testLocaleInfoGetDecimalSeparatorfor_ja() {
	var info = new ilib.LocaleInfo("ja");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ja() {
	var info = new ilib.LocaleInfo("ja");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ja() {
	var info = new ilib.LocaleInfo("ja");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ja() {
	var info = new ilib.LocaleInfo("ja");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ja() {
	var info = new ilib.LocaleInfo("ja");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ja() {
	var info = new ilib.LocaleInfo("ja");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ja() {
	var info = new ilib.LocaleInfo("ja");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for jgo

function testLocaleInfoGetDecimalSeparatorfor_jgo() {
	var info = new ilib.LocaleInfo("jgo");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_jgo() {
	var info = new ilib.LocaleInfo("jgo");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_jgo() {
	var info = new ilib.LocaleInfo("jgo");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_jgo() {
	var info = new ilib.LocaleInfo("jgo");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_jgo() {
	var info = new ilib.LocaleInfo("jgo");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_jgo() {
	var info = new ilib.LocaleInfo("jgo");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_jgo() {
	var info = new ilib.LocaleInfo("jgo");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for jmc

function testLocaleInfoGetDecimalSeparatorfor_jmc() {
	var info = new ilib.LocaleInfo("jmc");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_jmc() {
	var info = new ilib.LocaleInfo("jmc");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_jmc() {
	var info = new ilib.LocaleInfo("jmc");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_jmc() {
	var info = new ilib.LocaleInfo("jmc");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_jmc() {
	var info = new ilib.LocaleInfo("jmc");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_jmc() {
	var info = new ilib.LocaleInfo("jmc");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_jmc() {
	var info = new ilib.LocaleInfo("jmc");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for jv

function testLocaleInfoGetDecimalSeparatorfor_jv() {
	var info = new ilib.LocaleInfo("jv");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_jv() {
	var info = new ilib.LocaleInfo("jv");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_jv() {
	var info = new ilib.LocaleInfo("jv");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_jv() {
	var info = new ilib.LocaleInfo("jv");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_jv() {
	var info = new ilib.LocaleInfo("jv");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_jv() {
	var info = new ilib.LocaleInfo("jv");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_jv() {
	var info = new ilib.LocaleInfo("jv");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ka

function testLocaleInfoGetDecimalSeparatorfor_ka() {
	var info = new ilib.LocaleInfo("ka");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ka() {
	var info = new ilib.LocaleInfo("ka");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ka() {
	var info = new ilib.LocaleInfo("ka");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ka() {
	var info = new ilib.LocaleInfo("ka");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ka() {
	var info = new ilib.LocaleInfo("ka");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ka() {
	var info = new ilib.LocaleInfo("ka");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ka() {
	var info = new ilib.LocaleInfo("ka");
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

//test cases for kab

function testLocaleInfoGetDecimalSeparatorfor_kab() {
	var info = new ilib.LocaleInfo("kab");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_kab() {
	var info = new ilib.LocaleInfo("kab");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_kab() {
	var info = new ilib.LocaleInfo("kab");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_kab() {
	var info = new ilib.LocaleInfo("kab");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_kab() {
	var info = new ilib.LocaleInfo("kab");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_kab() {
	var info = new ilib.LocaleInfo("kab");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_kab() {
	var info = new ilib.LocaleInfo("kab");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for kam

function testLocaleInfoGetDecimalSeparatorfor_kam() {
	var info = new ilib.LocaleInfo("kam");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_kam() {
	var info = new ilib.LocaleInfo("kam");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_kam() {
	var info = new ilib.LocaleInfo("kam");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_kam() {
	var info = new ilib.LocaleInfo("kam");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_kam() {
	var info = new ilib.LocaleInfo("kam");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_kam() {
	var info = new ilib.LocaleInfo("kam");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_kam() {
	var info = new ilib.LocaleInfo("kam");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for kde

function testLocaleInfoGetDecimalSeparatorfor_kde() {
	var info = new ilib.LocaleInfo("kde");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_kde() {
	var info = new ilib.LocaleInfo("kde");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_kde() {
	var info = new ilib.LocaleInfo("kde");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_kde() {
	var info = new ilib.LocaleInfo("kde");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_kde() {
	var info = new ilib.LocaleInfo("kde");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_kde() {
	var info = new ilib.LocaleInfo("kde");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_kde() {
	var info = new ilib.LocaleInfo("kde");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for kea

function testLocaleInfoGetDecimalSeparatorfor_kea() {
	var info = new ilib.LocaleInfo("kea");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_kea() {
	var info = new ilib.LocaleInfo("kea");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_kea() {
	var info = new ilib.LocaleInfo("kea");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_kea() {
	var info = new ilib.LocaleInfo("kea");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_kea() {
	var info = new ilib.LocaleInfo("kea");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_kea() {
	var info = new ilib.LocaleInfo("kea");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_kea() {
	var info = new ilib.LocaleInfo("kea");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for kg

function testLocaleInfoGetDecimalSeparatorfor_kg() {
	var info = new ilib.LocaleInfo("kg");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_kg() {
	var info = new ilib.LocaleInfo("kg");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_kg() {
	var info = new ilib.LocaleInfo("kg");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_kg() {
	var info = new ilib.LocaleInfo("kg");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_kg() {
	var info = new ilib.LocaleInfo("kg");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_kg() {
	var info = new ilib.LocaleInfo("kg");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_kg() {
	var info = new ilib.LocaleInfo("kg");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for khq

function testLocaleInfoGetDecimalSeparatorfor_khq() {
	var info = new ilib.LocaleInfo("khq");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_khq() {
	var info = new ilib.LocaleInfo("khq");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_khq() {
	var info = new ilib.LocaleInfo("khq");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_khq() {
	var info = new ilib.LocaleInfo("khq");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_khq() {
	var info = new ilib.LocaleInfo("khq");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_khq() {
	var info = new ilib.LocaleInfo("khq");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_khq() {
	var info = new ilib.LocaleInfo("khq");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ki

function testLocaleInfoGetDecimalSeparatorfor_ki() {
	var info = new ilib.LocaleInfo("ki");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ki() {
	var info = new ilib.LocaleInfo("ki");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ki() {
	var info = new ilib.LocaleInfo("ki");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ki() {
	var info = new ilib.LocaleInfo("ki");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ki() {
	var info = new ilib.LocaleInfo("ki");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ki() {
	var info = new ilib.LocaleInfo("ki");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ki() {
	var info = new ilib.LocaleInfo("ki");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for kj

function testLocaleInfoGetDecimalSeparatorfor_kj() {
	var info = new ilib.LocaleInfo("kj");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_kj() {
	var info = new ilib.LocaleInfo("kj");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_kj() {
	var info = new ilib.LocaleInfo("kj");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_kj() {
	var info = new ilib.LocaleInfo("kj");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_kj() {
	var info = new ilib.LocaleInfo("kj");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_kj() {
	var info = new ilib.LocaleInfo("kj");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_kj() {
	var info = new ilib.LocaleInfo("kj");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for kk

function testLocaleInfoGetDecimalSeparatorfor_kk() {
	var info = new ilib.LocaleInfo("kk");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_kk() {
	var info = new ilib.LocaleInfo("kk");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_kk() {
	var info = new ilib.LocaleInfo("kk");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_kk() {
	var info = new ilib.LocaleInfo("kk");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_kk() {
	var info = new ilib.LocaleInfo("kk");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_kk() {
	var info = new ilib.LocaleInfo("kk");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_kk() {
	var info = new ilib.LocaleInfo("kk");
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

//test cases for kkj

function testLocaleInfoGetDecimalSeparatorfor_kkj() {
	var info = new ilib.LocaleInfo("kkj");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_kkj() {
	var info = new ilib.LocaleInfo("kkj");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_kkj() {
	var info = new ilib.LocaleInfo("kkj");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_kkj() {
	var info = new ilib.LocaleInfo("kkj");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_kkj() {
	var info = new ilib.LocaleInfo("kkj");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_kkj() {
	var info = new ilib.LocaleInfo("kkj");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_kkj() {
	var info = new ilib.LocaleInfo("kkj");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for kl

function testLocaleInfoGetDecimalSeparatorfor_kl() {
	var info = new ilib.LocaleInfo("kl");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_kl() {
	var info = new ilib.LocaleInfo("kl");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_kl() {
	var info = new ilib.LocaleInfo("kl");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_kl() {
	var info = new ilib.LocaleInfo("kl");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_kl() {
	var info = new ilib.LocaleInfo("kl");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_kl() {
	var info = new ilib.LocaleInfo("kl");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_kl() {
	var info = new ilib.LocaleInfo("kl");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for kln

function testLocaleInfoGetDecimalSeparatorfor_kln() {
	var info = new ilib.LocaleInfo("kln");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_kln() {
	var info = new ilib.LocaleInfo("kln");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_kln() {
	var info = new ilib.LocaleInfo("kln");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_kln() {
	var info = new ilib.LocaleInfo("kln");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_kln() {
	var info = new ilib.LocaleInfo("kln");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_kln() {
	var info = new ilib.LocaleInfo("kln");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_kln() {
	var info = new ilib.LocaleInfo("kln");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for km

function testLocaleInfoGetDecimalSeparatorfor_km() {
	var info = new ilib.LocaleInfo("km");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_km() {
	var info = new ilib.LocaleInfo("km");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_km() {
	var info = new ilib.LocaleInfo("km");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_km() {
	var info = new ilib.LocaleInfo("km");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_km() {
	var info = new ilib.LocaleInfo("km");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_km() {
	var info = new ilib.LocaleInfo("km");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_km() {
	var info = new ilib.LocaleInfo("km");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for kn

function testLocaleInfoGetDecimalSeparatorfor_kn() {
	var info = new ilib.LocaleInfo("kn");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_kn() {
	var info = new ilib.LocaleInfo("kn");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_kn() {
	var info = new ilib.LocaleInfo("kn");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_kn() {
	var info = new ilib.LocaleInfo("kn");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_kn() {
	var info = new ilib.LocaleInfo("kn");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_kn() {
	var info = new ilib.LocaleInfo("kn");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_kn() {
	var info = new ilib.LocaleInfo("kn");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ko

function testLocaleInfoGetDecimalSeparatorfor_ko() {
	var info = new ilib.LocaleInfo("ko");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ko() {
	var info = new ilib.LocaleInfo("ko");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ko() {
	var info = new ilib.LocaleInfo("ko");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ko() {
	var info = new ilib.LocaleInfo("ko");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ko() {
	var info = new ilib.LocaleInfo("ko");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ko() {
	var info = new ilib.LocaleInfo("ko");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ko() {
	var info = new ilib.LocaleInfo("ko");
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

//test cases for kok

function testLocaleInfoGetDecimalSeparatorfor_kok() {
	var info = new ilib.LocaleInfo("kok");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_kok() {
	var info = new ilib.LocaleInfo("kok");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_kok() {
	var info = new ilib.LocaleInfo("kok");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_kok() {
	var info = new ilib.LocaleInfo("kok");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_kok() {
	var info = new ilib.LocaleInfo("kok");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_kok() {
	var info = new ilib.LocaleInfo("kok");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_kok() {
	var info = new ilib.LocaleInfo("kok");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for kr

function testLocaleInfoGetDecimalSeparatorfor_kr() {
	var info = new ilib.LocaleInfo("kr");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_kr() {
	var info = new ilib.LocaleInfo("kr");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_kr() {
	var info = new ilib.LocaleInfo("kr");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_kr() {
	var info = new ilib.LocaleInfo("kr");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_kr() {
	var info = new ilib.LocaleInfo("kr");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_kr() {
	var info = new ilib.LocaleInfo("kr");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_kr() {
	var info = new ilib.LocaleInfo("kr");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ks

function testLocaleInfoGetDecimalSeparatorfor_ks() {
	var info = new ilib.LocaleInfo("ks");
	assertNotNull(info);
	assertEquals("٫", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ks() {
	var info = new ilib.LocaleInfo("ks");
	assertNotNull(info);

	assertEquals("٬", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ks() {
	var info = new ilib.LocaleInfo("ks");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ks() {
	var info = new ilib.LocaleInfo("ks");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ks() {
	var info = new ilib.LocaleInfo("ks");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ks() {
	var info = new ilib.LocaleInfo("ks");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ks() {
	var info = new ilib.LocaleInfo("ks");
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

//test cases for ksb

function testLocaleInfoGetDecimalSeparatorfor_ksb() {
	var info = new ilib.LocaleInfo("ksb");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ksb() {
	var info = new ilib.LocaleInfo("ksb");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ksb() {
	var info = new ilib.LocaleInfo("ksb");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ksb() {
	var info = new ilib.LocaleInfo("ksb");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ksb() {
	var info = new ilib.LocaleInfo("ksb");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ksb() {
	var info = new ilib.LocaleInfo("ksb");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ksb() {
	var info = new ilib.LocaleInfo("ksb");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ksf

function testLocaleInfoGetDecimalSeparatorfor_ksf() {
	var info = new ilib.LocaleInfo("ksf");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ksf() {
	var info = new ilib.LocaleInfo("ksf");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ksf() {
	var info = new ilib.LocaleInfo("ksf");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ksf() {
	var info = new ilib.LocaleInfo("ksf");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ksf() {
	var info = new ilib.LocaleInfo("ksf");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ksf() {
	var info = new ilib.LocaleInfo("ksf");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ksf() {
	var info = new ilib.LocaleInfo("ksf");
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

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
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
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ku_IR() {
	var info = new ilib.LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ku_IR() {
	var info = new ilib.LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ku_IR() {
	var info = new ilib.LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
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

//test cases for kv

function testLocaleInfoGetDecimalSeparatorfor_kv() {
	var info = new ilib.LocaleInfo("kv");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_kv() {
	var info = new ilib.LocaleInfo("kv");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_kv() {
	var info = new ilib.LocaleInfo("kv");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_kv() {
	var info = new ilib.LocaleInfo("kv");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_kv() {
	var info = new ilib.LocaleInfo("kv");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_kv() {
	var info = new ilib.LocaleInfo("kv");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_kv() {
	var info = new ilib.LocaleInfo("kv");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for kw

function testLocaleInfoGetDecimalSeparatorfor_kw() {
	var info = new ilib.LocaleInfo("kw");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_kw() {
	var info = new ilib.LocaleInfo("kw");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_kw() {
	var info = new ilib.LocaleInfo("kw");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_kw() {
	var info = new ilib.LocaleInfo("kw");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_kw() {
	var info = new ilib.LocaleInfo("kw");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_kw() {
	var info = new ilib.LocaleInfo("kw");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_kw() {
	var info = new ilib.LocaleInfo("kw");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ky

function testLocaleInfoGetDecimalSeparatorfor_ky() {
	var info = new ilib.LocaleInfo("ky");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ky() {
	var info = new ilib.LocaleInfo("ky");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ky() {
	var info = new ilib.LocaleInfo("ky");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ky() {
	var info = new ilib.LocaleInfo("ky");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ky() {
	var info = new ilib.LocaleInfo("ky");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ky() {
	var info = new ilib.LocaleInfo("ky");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ky() {
	var info = new ilib.LocaleInfo("ky");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//************************************************End 29-May-2013**********************************************************
//************************************************start 31-May-2013**********************************************************
//test cases for la

function testLocaleInfoGetDecimalSeparatorfor_la() {
	var info = new ilib.LocaleInfo("la");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_la() {
	var info = new ilib.LocaleInfo("la");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_la() {
	var info = new ilib.LocaleInfo("la");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_la() {
	var info = new ilib.LocaleInfo("la");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_la() {
	var info = new ilib.LocaleInfo("la");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_la() {
	var info = new ilib.LocaleInfo("la");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_la() {
	var info = new ilib.LocaleInfo("la");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for lb

function testLocaleInfoGetDecimalSeparatorfor_lb() {
	var info = new ilib.LocaleInfo("lb");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_lb() {
	var info = new ilib.LocaleInfo("lb");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_lb() {
	var info = new ilib.LocaleInfo("lb");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_lb() {
	var info = new ilib.LocaleInfo("lb");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_lb() {
	var info = new ilib.LocaleInfo("lb");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_lb() {
	var info = new ilib.LocaleInfo("lb");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_lb() {
	var info = new ilib.LocaleInfo("lb");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for lg

function testLocaleInfoGetDecimalSeparatorfor_lg() {
	var info = new ilib.LocaleInfo("lg");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_lg() {
	var info = new ilib.LocaleInfo("lg");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_lg() {
	var info = new ilib.LocaleInfo("lg");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_lg() {
	var info = new ilib.LocaleInfo("lg");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_lg() {
	var info = new ilib.LocaleInfo("lg");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_lg() {
	var info = new ilib.LocaleInfo("lg");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_lg() {
	var info = new ilib.LocaleInfo("lg");
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
//test cases for li

function testLocaleInfoGetDecimalSeparatorfor_li() {
	var info = new ilib.LocaleInfo("li");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_li() {
	var info = new ilib.LocaleInfo("li");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_li() {
	var info = new ilib.LocaleInfo("li");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_li() {
	var info = new ilib.LocaleInfo("li");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_li() {
	var info = new ilib.LocaleInfo("li");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_li() {
	var info = new ilib.LocaleInfo("li");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_li() {
	var info = new ilib.LocaleInfo("li");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for ln

function testLocaleInfoGetDecimalSeparatorfor_ln() {
	var info = new ilib.LocaleInfo("ln");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ln() {
	var info = new ilib.LocaleInfo("ln");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ln() {
	var info = new ilib.LocaleInfo("ln");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ln() {
	var info = new ilib.LocaleInfo("ln");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ln() {
	var info = new ilib.LocaleInfo("ln");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ln() {
	var info = new ilib.LocaleInfo("ln");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ln() {
	var info = new ilib.LocaleInfo("ln");
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

//test cases for lo

function testLocaleInfoGetDecimalSeparatorfor_lo() {
	var info = new ilib.LocaleInfo("lo");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_lo() {
	var info = new ilib.LocaleInfo("lo");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_lo() {
	var info = new ilib.LocaleInfo("lo");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_lo() {
	var info = new ilib.LocaleInfo("lo");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_lo() {
	var info = new ilib.LocaleInfo("lo");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_lo() {
	var info = new ilib.LocaleInfo("lo");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_lo() {
	var info = new ilib.LocaleInfo("lo");
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

//test cases for lu

function testLocaleInfoGetDecimalSeparatorfor_lu() {
	var info = new ilib.LocaleInfo("lu");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_lu() {
	var info = new ilib.LocaleInfo("lu");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_lu() {
	var info = new ilib.LocaleInfo("lu");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_lu() {
	var info = new ilib.LocaleInfo("lu");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_lu() {
	var info = new ilib.LocaleInfo("lu");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_lu() {
	var info = new ilib.LocaleInfo("lu");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_lu() {
	var info = new ilib.LocaleInfo("lu");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for luo

function testLocaleInfoGetDecimalSeparatorfor_luo() {
	var info = new ilib.LocaleInfo("luo");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_luo() {
	var info = new ilib.LocaleInfo("luo");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_luo() {
	var info = new ilib.LocaleInfo("luo");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_luo() {
	var info = new ilib.LocaleInfo("luo");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_luo() {
	var info = new ilib.LocaleInfo("luo");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_luo() {
	var info = new ilib.LocaleInfo("luo");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_luo() {
	var info = new ilib.LocaleInfo("luo");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for luy

function testLocaleInfoGetDecimalSeparatorfor_luy() {
	var info = new ilib.LocaleInfo("luy");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_luy() {
	var info = new ilib.LocaleInfo("luy");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_luy() {
	var info = new ilib.LocaleInfo("luy");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_luy() {
	var info = new ilib.LocaleInfo("luy");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_luy() {
	var info = new ilib.LocaleInfo("luy");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_luy() {
	var info = new ilib.LocaleInfo("luy");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_luy() {
	var info = new ilib.LocaleInfo("luy");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for lv-LV

function testLocaleInfoGetDecimalSeparatorfor_lv() {
	var info = new ilib.LocaleInfo("lv-LV");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_lv() {
	var info = new ilib.LocaleInfo("lv-LV");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_lv() {
	var info = new ilib.LocaleInfo("lv-LV");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_lv() {
	var info = new ilib.LocaleInfo("lv-LV");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_lv() {
	var info = new ilib.LocaleInfo("lv-LV");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_lv() {
	var info = new ilib.LocaleInfo("lv-LV");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_lv() {
	var info = new ilib.LocaleInfo("lv-LV");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for mas

function testLocaleInfoGetDecimalSeparatorfor_mas() {
	var info = new ilib.LocaleInfo("mas");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_mas() {
	var info = new ilib.LocaleInfo("mas");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_mas() {
	var info = new ilib.LocaleInfo("mas");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_mas() {
	var info = new ilib.LocaleInfo("mas");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_mas() {
	var info = new ilib.LocaleInfo("mas");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_mas() {
	var info = new ilib.LocaleInfo("mas");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_mas() {
	var info = new ilib.LocaleInfo("mas");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for mer

function testLocaleInfoGetDecimalSeparatorfor_mer() {
	var info = new ilib.LocaleInfo("mer");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_mer() {
	var info = new ilib.LocaleInfo("mer");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_mer() {
	var info = new ilib.LocaleInfo("mer");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_mer() {
	var info = new ilib.LocaleInfo("mer");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_mer() {
	var info = new ilib.LocaleInfo("mer");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_mer() {
	var info = new ilib.LocaleInfo("mer");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_mer() {
	var info = new ilib.LocaleInfo("mer");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for mfe

function testLocaleInfoGetDecimalSeparatorfor_mfe() {
	var info = new ilib.LocaleInfo("mfe");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_mfe() {
	var info = new ilib.LocaleInfo("mfe");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_mfe() {
	var info = new ilib.LocaleInfo("mfe");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_mfe() {
	var info = new ilib.LocaleInfo("mfe");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_mfe() {
	var info = new ilib.LocaleInfo("mfe");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_mfe() {
	var info = new ilib.LocaleInfo("mfe");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_mfe() {
	var info = new ilib.LocaleInfo("mfe");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for mg

function testLocaleInfoGetDecimalSeparatorfor_mg() {
	var info = new ilib.LocaleInfo("mg");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_mg() {
	var info = new ilib.LocaleInfo("mg");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_mg() {
	var info = new ilib.LocaleInfo("mg");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_mg() {
	var info = new ilib.LocaleInfo("mg");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_mg() {
	var info = new ilib.LocaleInfo("mg");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_mg() {
	var info = new ilib.LocaleInfo("mg");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_mg() {
	var info = new ilib.LocaleInfo("mg");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for mgh

function testLocaleInfoGetDecimalSeparatorfor_mgh() {
	var info = new ilib.LocaleInfo("mgh");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_mgh() {
	var info = new ilib.LocaleInfo("mgh");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_mgh() {
	var info = new ilib.LocaleInfo("mgh");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_mgh() {
	var info = new ilib.LocaleInfo("mgh");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_mgh() {
	var info = new ilib.LocaleInfo("mgh");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_mgh() {
	var info = new ilib.LocaleInfo("mgh");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_mgh() {
	var info = new ilib.LocaleInfo("mgh");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for mh

function testLocaleInfoGetDecimalSeparatorfor_mh() {
	var info = new ilib.LocaleInfo("mh");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_mh() {
	var info = new ilib.LocaleInfo("mh");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_mh() {
	var info = new ilib.LocaleInfo("mh");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_mh() {
	var info = new ilib.LocaleInfo("mh");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_mh() {
	var info = new ilib.LocaleInfo("mh");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_mh() {
	var info = new ilib.LocaleInfo("mh");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_mh() {
	var info = new ilib.LocaleInfo("mh");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for mi-CK

function testLocaleInfoGetDecimalSeparatorfor_mi_CK() {
	var info = new ilib.LocaleInfo("mi-CK");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_mi_CK() {
	var info = new ilib.LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_mi_CK() {
	var info = new ilib.LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_mi_CK() {
	var info = new ilib.LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
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

//test cases for ml

function testLocaleInfoGetDecimalSeparatorfor_ml() {
	var info = new ilib.LocaleInfo("ml");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ml() {
	var info = new ilib.LocaleInfo("ml");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ml() {
	var info = new ilib.LocaleInfo("ml");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ml() {
	var info = new ilib.LocaleInfo("ml");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ml() {
	var info = new ilib.LocaleInfo("ml");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ml() {
	var info = new ilib.LocaleInfo("ml");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ml() {
	var info = new ilib.LocaleInfo("ml");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for mn-CN

function testLocaleInfoGetDecimalSeparatorfor_mn_CN() {
	var info = new ilib.LocaleInfo("mn-CN");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_mn_CN() {
	var info = new ilib.LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_mn_CN() {
	var info = new ilib.LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_mn_CN() {
	var info = new ilib.LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
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
//test cases for mr

function testLocaleInfoGetDecimalSeparatorfor_mr() {
	var info = new ilib.LocaleInfo("mr");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_mr() {
	var info = new ilib.LocaleInfo("mr");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_mr() {
	var info = new ilib.LocaleInfo("mr");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_mr() {
	var info = new ilib.LocaleInfo("mr");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_mr() {
	var info = new ilib.LocaleInfo("mr");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_mr() {
	var info = new ilib.LocaleInfo("mr");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_mr() {
	var info = new ilib.LocaleInfo("mr");
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
//test cases for mt

function testLocaleInfoGetDecimalSeparatorfor_mt() {
	var info = new ilib.LocaleInfo("mt");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_mt() {
	var info = new ilib.LocaleInfo("mt");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_mt() {
	var info = new ilib.LocaleInfo("mt");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_mt() {
	var info = new ilib.LocaleInfo("mt");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_mt() {
	var info = new ilib.LocaleInfo("mt");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_mt() {
	var info = new ilib.LocaleInfo("mt");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_mt() {
	var info = new ilib.LocaleInfo("mt");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for mua

function testLocaleInfoGetDecimalSeparatorfor_mua() {
	var info = new ilib.LocaleInfo("mua");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_mua() {
	var info = new ilib.LocaleInfo("mua");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_mua() {
	var info = new ilib.LocaleInfo("mua");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_mua() {
	var info = new ilib.LocaleInfo("mua");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_mua() {
	var info = new ilib.LocaleInfo("mua");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_mua() {
	var info = new ilib.LocaleInfo("mua");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_mua() {
	var info = new ilib.LocaleInfo("mua");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//************************************************end 31-May-2013**********************************************************

//************************************************start Date 03-JUN-2013****************************************************

//test cases for na

function testLocaleInfoGetDecimalSeparatorfor_na() {
	var info = new ilib.LocaleInfo("na");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_na() {
	var info = new ilib.LocaleInfo("na");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_na() {
	var info = new ilib.LocaleInfo("na");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_na() {
	var info = new ilib.LocaleInfo("na");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_na() {
	var info = new ilib.LocaleInfo("na");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_na() {
	var info = new ilib.LocaleInfo("na");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_na() {
	var info = new ilib.LocaleInfo("na");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for naq

function testLocaleInfoGetDecimalSeparatorfor_naq() {
	var info = new ilib.LocaleInfo("naq");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_naq() {
	var info = new ilib.LocaleInfo("naq");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_naq() {
	var info = new ilib.LocaleInfo("naq");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_naq() {
	var info = new ilib.LocaleInfo("naq");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_naq() {
	var info = new ilib.LocaleInfo("naq");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_naq() {
	var info = new ilib.LocaleInfo("naq");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_naq() {
	var info = new ilib.LocaleInfo("naq");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for nb

function testLocaleInfoGetDecimalSeparatorfor_nb() {
	var info = new ilib.LocaleInfo("nb");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nb() {
	var info = new ilib.LocaleInfo("nb");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nb() {
	var info = new ilib.LocaleInfo("nb");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nb() {
	var info = new ilib.LocaleInfo("nb");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_nb() {
	var info = new ilib.LocaleInfo("nb");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nb() {
	var info = new ilib.LocaleInfo("nb");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nb() {
	var info = new ilib.LocaleInfo("nb");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for nd

function testLocaleInfoGetDecimalSeparatorfor_nd() {
	var info = new ilib.LocaleInfo("nd");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nd() {
	var info = new ilib.LocaleInfo("nd");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nd() {
	var info = new ilib.LocaleInfo("nd");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nd() {
	var info = new ilib.LocaleInfo("nd");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_nd() {
	var info = new ilib.LocaleInfo("nd");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nd() {
	var info = new ilib.LocaleInfo("nd");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nd() {
	var info = new ilib.LocaleInfo("nd");
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

//test cases for ng

function testLocaleInfoGetDecimalSeparatorfor_ng() {
	var info = new ilib.LocaleInfo("ng");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ng() {
	var info = new ilib.LocaleInfo("ng");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ng() {
	var info = new ilib.LocaleInfo("ng");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ng() {
	var info = new ilib.LocaleInfo("ng");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ng() {
	var info = new ilib.LocaleInfo("ng");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ng() {
	var info = new ilib.LocaleInfo("ng");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ng() {
	var info = new ilib.LocaleInfo("ng");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for nl

function testLocaleInfoGetDecimalSeparatorfor_nl() {
	var info = new ilib.LocaleInfo("nl");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nl() {
	var info = new ilib.LocaleInfo("nl");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nl() {
	var info = new ilib.LocaleInfo("nl");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nl() {
	var info = new ilib.LocaleInfo("nl");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_nl() {
	var info = new ilib.LocaleInfo("nl");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nl() {
	var info = new ilib.LocaleInfo("nl");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nl() {
	var info = new ilib.LocaleInfo("nl");
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

//test cases for nmg

function testLocaleInfoGetDecimalSeparatorfor_nmg() {
	var info = new ilib.LocaleInfo("nmg");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nmg() {
	var info = new ilib.LocaleInfo("nmg");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nmg() {
	var info = new ilib.LocaleInfo("nmg");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nmg() {
	var info = new ilib.LocaleInfo("nmg");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_nmg() {
	var info = new ilib.LocaleInfo("nmg");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nmg() {
	var info = new ilib.LocaleInfo("nmg");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nmg() {
	var info = new ilib.LocaleInfo("nmg");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for nn

function testLocaleInfoGetDecimalSeparatorfor_nn() {
	var info = new ilib.LocaleInfo("nn");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nn() {
	var info = new ilib.LocaleInfo("nn");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nn() {
	var info = new ilib.LocaleInfo("nn");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nn() {
	var info = new ilib.LocaleInfo("nn");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_nn() {
	var info = new ilib.LocaleInfo("nn");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nn() {
	var info = new ilib.LocaleInfo("nn");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nn() {
	var info = new ilib.LocaleInfo("nn");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for nnh

function testLocaleInfoGetDecimalSeparatorfor_nnh() {
	var info = new ilib.LocaleInfo("nnh");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nnh() {
	var info = new ilib.LocaleInfo("nnh");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nnh() {
	var info = new ilib.LocaleInfo("nnh");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nnh() {
	var info = new ilib.LocaleInfo("nnh");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_nnh() {
	var info = new ilib.LocaleInfo("nnh");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nnh() {
	var info = new ilib.LocaleInfo("nnh");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nnh() {
	var info = new ilib.LocaleInfo("nnh");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for no-BV

function testLocaleInfoGetDecimalSeparatorfor_no_BV() {
	var info = new ilib.LocaleInfo("no-BV");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_no_BV() {
	var info = new ilib.LocaleInfo("no-BV");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_no_BV() {
	var info = new ilib.LocaleInfo("no-BV");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
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
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_no_SJ() {
	var info = new ilib.LocaleInfo("no-SJ");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_no_SJ() {
	var info = new ilib.LocaleInfo("no-SJ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
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

//test cases for nr

function testLocaleInfoGetDecimalSeparatorfor_nr() {
	var info = new ilib.LocaleInfo("nr");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nr() {
	var info = new ilib.LocaleInfo("nr");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nr() {
	var info = new ilib.LocaleInfo("nr");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nr() {
	var info = new ilib.LocaleInfo("nr");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_nr() {
	var info = new ilib.LocaleInfo("nr");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nr() {
	var info = new ilib.LocaleInfo("nr");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nr() {
	var info = new ilib.LocaleInfo("nr");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for nso

function testLocaleInfoGetDecimalSeparatorfor_nso() {
	var info = new ilib.LocaleInfo("nso");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nso() {
	var info = new ilib.LocaleInfo("nso");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nso() {
	var info = new ilib.LocaleInfo("nso");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nso() {
	var info = new ilib.LocaleInfo("nso");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_nso() {
	var info = new ilib.LocaleInfo("nso");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nso() {
	var info = new ilib.LocaleInfo("nso");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nso() {
	var info = new ilib.LocaleInfo("nso");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for nus

function testLocaleInfoGetDecimalSeparatorfor_nus() {
	var info = new ilib.LocaleInfo("nus");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nus() {
	var info = new ilib.LocaleInfo("nus");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nus() {
	var info = new ilib.LocaleInfo("nus");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nus() {
	var info = new ilib.LocaleInfo("nus");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_nus() {
	var info = new ilib.LocaleInfo("nus");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nus() {
	var info = new ilib.LocaleInfo("nus");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nus() {
	var info = new ilib.LocaleInfo("nus");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for nv

function testLocaleInfoGetDecimalSeparatorfor_nv() {
	var info = new ilib.LocaleInfo("nv");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nv() {
	var info = new ilib.LocaleInfo("nv");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nv() {
	var info = new ilib.LocaleInfo("nv");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nv() {
	var info = new ilib.LocaleInfo("nv");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_nv() {
	var info = new ilib.LocaleInfo("nv");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nv() {
	var info = new ilib.LocaleInfo("nv");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nv() {
	var info = new ilib.LocaleInfo("nv");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ny

function testLocaleInfoGetDecimalSeparatorfor_ny() {
	var info = new ilib.LocaleInfo("ny");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ny() {
	var info = new ilib.LocaleInfo("ny");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ny() {
	var info = new ilib.LocaleInfo("ny");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ny() {
	var info = new ilib.LocaleInfo("ny");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ny() {
	var info = new ilib.LocaleInfo("ny");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ny() {
	var info = new ilib.LocaleInfo("ny");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ny() {
	var info = new ilib.LocaleInfo("ny");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for nyn

function testLocaleInfoGetDecimalSeparatorfor_nyn() {
	var info = new ilib.LocaleInfo("nyn");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nyn() {
	var info = new ilib.LocaleInfo("nyn");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nyn() {
	var info = new ilib.LocaleInfo("nyn");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nyn() {
	var info = new ilib.LocaleInfo("nyn");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_nyn() {
	var info = new ilib.LocaleInfo("nyn");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nyn() {
	var info = new ilib.LocaleInfo("nyn");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nyn() {
	var info = new ilib.LocaleInfo("nyn");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for oc

function testLocaleInfoGetDecimalSeparatorfor_oc() {
	var info = new ilib.LocaleInfo("oc");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_oc() {
	var info = new ilib.LocaleInfo("oc");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_oc() {
	var info = new ilib.LocaleInfo("oc");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_oc() {
	var info = new ilib.LocaleInfo("oc");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_oc() {
	var info = new ilib.LocaleInfo("ny");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ny() {
	var info = new ilib.LocaleInfo("oc");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_oc() {
	var info = new ilib.LocaleInfo("oc");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for oj

function testLocaleInfoGetDecimalSeparatorfor_oj() {
	var info = new ilib.LocaleInfo("oj");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_oj() {
	var info = new ilib.LocaleInfo("oj");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_oj() {
	var info = new ilib.LocaleInfo("oj");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_oj() {
	var info = new ilib.LocaleInfo("oj");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_oj() {
	var info = new ilib.LocaleInfo("oj");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_oj() {
	var info = new ilib.LocaleInfo("oj");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_oj() {
	var info = new ilib.LocaleInfo("oj");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for om

function testLocaleInfoGetDecimalSeparatorfor_om() {
	var info = new ilib.LocaleInfo("om");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_om() {
	var info = new ilib.LocaleInfo("om");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_om() {
	var info = new ilib.LocaleInfo("om");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_om() {
	var info = new ilib.LocaleInfo("om");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_om() {
	var info = new ilib.LocaleInfo("om");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_om() {
	var info = new ilib.LocaleInfo("om");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_om() {
	var info = new ilib.LocaleInfo("om");
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

//test cases for or

function testLocaleInfoGetDecimalSeparatorfor_or() {
	var info = new ilib.LocaleInfo("or");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_or() {
	var info = new ilib.LocaleInfo("or");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_or() {
	var info = new ilib.LocaleInfo("or");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_or() {
	var info = new ilib.LocaleInfo("or");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_or() {
	var info = new ilib.LocaleInfo("or");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_or() {
	var info = new ilib.LocaleInfo("or");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_or() {
	var info = new ilib.LocaleInfo("or");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for os

function testLocaleInfoGetDecimalSeparatorfor_os() {
	var info = new ilib.LocaleInfo("os");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_os() {
	var info = new ilib.LocaleInfo("os");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_os() {
	var info = new ilib.LocaleInfo("os");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_os() {
	var info = new ilib.LocaleInfo("os");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_os() {
	var info = new ilib.LocaleInfo("os");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_os() {
	var info = new ilib.LocaleInfo("os");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_os() {
	var info = new ilib.LocaleInfo("os");
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

//test cases for pa

function testLocaleInfoGetDecimalSeparatorfor_pa() {
	var info = new ilib.LocaleInfo("pa");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pa() {
	var info = new ilib.LocaleInfo("pa");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pa() {
	var info = new ilib.LocaleInfo("pa");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pa() {
	var info = new ilib.LocaleInfo("pa");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_pa() {
	var info = new ilib.LocaleInfo("pa");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pa() {
	var info = new ilib.LocaleInfo("pa");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pa() {
	var info = new ilib.LocaleInfo("pa");
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

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pa() {
	var info = new ilib.LocaleInfo("pa-PK-Arab");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pi

function testLocaleInfoGetDecimalSeparatorfor_pi() {
	var info = new ilib.LocaleInfo("pi");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pi() {
	var info = new ilib.LocaleInfo("pi");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pi() {
	var info = new ilib.LocaleInfo("pi");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pi() {
	var info = new ilib.LocaleInfo("pi");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_pi() {
	var info = new ilib.LocaleInfo("pi");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pi() {
	var info = new ilib.LocaleInfo("pi");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pi() {
	var info = new ilib.LocaleInfo("pi");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pl

function testLocaleInfoGetDecimalSeparatorfor_pl() {
	var info = new ilib.LocaleInfo("pl");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pl() {
	var info = new ilib.LocaleInfo("pl");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pl() {
	var info = new ilib.LocaleInfo("pl");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pl() {
	var info = new ilib.LocaleInfo("pl");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_pl() {
	var info = new ilib.LocaleInfo("pl");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pl() {
	var info = new ilib.LocaleInfo("pl");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pl() {
	var info = new ilib.LocaleInfo("pl");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ps

function testLocaleInfoGetDecimalSeparatorfor_ps() {
	var info = new ilib.LocaleInfo("ps");
	assertNotNull(info);
	assertEquals("٫", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ps() {
	var info = new ilib.LocaleInfo("ps");
	assertNotNull(info);

	assertEquals("٬", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ps() {
	var info = new ilib.LocaleInfo("ps");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ps() {
	var info = new ilib.LocaleInfo("ps");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ps() {
	var info = new ilib.LocaleInfo("ps");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ps() {
	var info = new ilib.LocaleInfo("ps");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ps() {
	var info = new ilib.LocaleInfo("ps");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pt

function testLocaleInfoGetDecimalSeparatorfor_pt() {
	var info = new ilib.LocaleInfo("pt");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt() {
	var info = new ilib.LocaleInfo("pt");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt() {
	var info = new ilib.LocaleInfo("pt");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt() {
	var info = new ilib.LocaleInfo("pt");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_pt() {
	var info = new ilib.LocaleInfo("pt");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pt() {
	var info = new ilib.LocaleInfo("pt");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pt() {
	var info = new ilib.LocaleInfo("pt");
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

//test cases for qu

function testLocaleInfoGetDecimalSeparatorfor_qu() {
	var info = new ilib.LocaleInfo("qu");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_qu() {
	var info = new ilib.LocaleInfo("qu");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_qu() {
	var info = new ilib.LocaleInfo("qu");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_qu() {
	var info = new ilib.LocaleInfo("qu");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_qu() {
	var info = new ilib.LocaleInfo("qu");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_qu() {
	var info = new ilib.LocaleInfo("qu");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_qu() {
	var info = new ilib.LocaleInfo("qu");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for rm

function testLocaleInfoGetDecimalSeparatorfor_rm() {
	var info = new ilib.LocaleInfo("rm");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_rm() {
	var info = new ilib.LocaleInfo("rm");
	assertNotNull(info);

	assertEquals("’", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_rm() {
	var info = new ilib.LocaleInfo("rm");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_rm() {
	var info = new ilib.LocaleInfo("rm");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_rm() {
	var info = new ilib.LocaleInfo("rm");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_rm() {
	var info = new ilib.LocaleInfo("rm");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_rm() {
	var info = new ilib.LocaleInfo("rm");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for rn

function testLocaleInfoGetDecimalSeparatorfor_rn() {
	var info = new ilib.LocaleInfo("rn");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_rn() {
	var info = new ilib.LocaleInfo("rn");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_rn() {
	var info = new ilib.LocaleInfo("rn");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_rn() {
	var info = new ilib.LocaleInfo("rn");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_rn() {
	var info = new ilib.LocaleInfo("rn");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_rn() {
	var info = new ilib.LocaleInfo("rn");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_rn() {
	var info = new ilib.LocaleInfo("rn");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ro

function testLocaleInfoGetDecimalSeparatorfor_ro() {
	var info = new ilib.LocaleInfo("ro");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ro() {
	var info = new ilib.LocaleInfo("ro");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ro() {
	var info = new ilib.LocaleInfo("ro");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ro() {
	var info = new ilib.LocaleInfo("ro");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ro() {
	var info = new ilib.LocaleInfo("ro");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ro() {
	var info = new ilib.LocaleInfo("ro");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ro() {
	var info = new ilib.LocaleInfo("ro");
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

//test cases for rof

function testLocaleInfoGetDecimalSeparatorfor_rof() {
	var info = new ilib.LocaleInfo("rof");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_rof() {
	var info = new ilib.LocaleInfo("rof");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_rof() {
	var info = new ilib.LocaleInfo("rof");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_rof() {
	var info = new ilib.LocaleInfo("rof");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_rof() {
	var info = new ilib.LocaleInfo("rof");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_rof() {
	var info = new ilib.LocaleInfo("rof");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_rof() {
	var info = new ilib.LocaleInfo("rof");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ru

function testLocaleInfoGetDecimalSeparatorfor_ru() {
	var info = new ilib.LocaleInfo("ru");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ru() {
	var info = new ilib.LocaleInfo("ru");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ru() {
	var info = new ilib.LocaleInfo("ru");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ru() {
	var info = new ilib.LocaleInfo("ru");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ru() {
	var info = new ilib.LocaleInfo("ru");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ru() {
	var info = new ilib.LocaleInfo("ru");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ru() {
	var info = new ilib.LocaleInfo("ru");
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

//test cases for rw

function testLocaleInfoGetDecimalSeparatorfor_rw() {
	var info = new ilib.LocaleInfo("rw");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_rw() {
	var info = new ilib.LocaleInfo("rw");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_rw() {
	var info = new ilib.LocaleInfo("rw");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_rw() {
	var info = new ilib.LocaleInfo("rw");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_rw() {
	var info = new ilib.LocaleInfo("rw");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_rw() {
	var info = new ilib.LocaleInfo("rw");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_rw() {
	var info = new ilib.LocaleInfo("rw");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for rwk

function testLocaleInfoGetDecimalSeparatorfor_rwk() {
	var info = new ilib.LocaleInfo("rwk");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_rwk() {
	var info = new ilib.LocaleInfo("rwk");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_rwk() {
	var info = new ilib.LocaleInfo("rwk");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_rwk() {
	var info = new ilib.LocaleInfo("rwk");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_rwk() {
	var info = new ilib.LocaleInfo("rwk");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_rwk() {
	var info = new ilib.LocaleInfo("rwk");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_rwk() {
	var info = new ilib.LocaleInfo("rwk");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//************************************************end 03-JUN-2013**********************************************************
//************************************************start 04-JUN-2013********************************************************

//test cases for sa

function testLocaleInfoGetDecimalSeparatorfor_sa() {
	var info = new ilib.LocaleInfo("sa");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sa() {
	var info = new ilib.LocaleInfo("sa");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sa() {
	var info = new ilib.LocaleInfo("sa");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sa() {
	var info = new ilib.LocaleInfo("sa");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sa() {
	var info = new ilib.LocaleInfo("sa");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sa() {
	var info = new ilib.LocaleInfo("sa");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sa() {
	var info = new ilib.LocaleInfo("sa");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for saq

function testLocaleInfoGetDecimalSeparatorfor_saq() {
	var info = new ilib.LocaleInfo("saq");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_saq() {
	var info = new ilib.LocaleInfo("saq");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_saq() {
	var info = new ilib.LocaleInfo("saq");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_saq() {
	var info = new ilib.LocaleInfo("saq");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_saq() {
	var info = new ilib.LocaleInfo("saq");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_saq() {
	var info = new ilib.LocaleInfo("saq");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_saq() {
	var info = new ilib.LocaleInfo("saq");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sbp

function testLocaleInfoGetDecimalSeparatorfor_sbp() {
	var info = new ilib.LocaleInfo("sbp");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sbp() {
	var info = new ilib.LocaleInfo("sbp");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sbp() {
	var info = new ilib.LocaleInfo("sbp");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sbp() {
	var info = new ilib.LocaleInfo("sbp");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sbp() {
	var info = new ilib.LocaleInfo("sbp");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sbp() {
	var info = new ilib.LocaleInfo("sbp");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sbp() {
	var info = new ilib.LocaleInfo("sbp");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sc

function testLocaleInfoGetDecimalSeparatorfor_sc() {
	var info = new ilib.LocaleInfo("sc");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sc() {
	var info = new ilib.LocaleInfo("sc");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sc() {
	var info = new ilib.LocaleInfo("sc");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sc() {
	var info = new ilib.LocaleInfo("sc");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sc() {
	var info = new ilib.LocaleInfo("sc");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sc() {
	var info = new ilib.LocaleInfo("sc");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sc() {
	var info = new ilib.LocaleInfo("sc");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sd

function testLocaleInfoGetDecimalSeparatorfor_sd() {
	var info = new ilib.LocaleInfo("sd");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sd() {
	var info = new ilib.LocaleInfo("sd");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sd() {
	var info = new ilib.LocaleInfo("sd");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sd() {
	var info = new ilib.LocaleInfo("sd");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sd() {
	var info = new ilib.LocaleInfo("sd");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sd() {
	var info = new ilib.LocaleInfo("sd");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sd() {
	var info = new ilib.LocaleInfo("sd");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for se

function testLocaleInfoGetDecimalSeparatorfor_se() {
	var info = new ilib.LocaleInfo("se");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_se() {
	var info = new ilib.LocaleInfo("se");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_se() {
	var info = new ilib.LocaleInfo("se");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_se() {
	var info = new ilib.LocaleInfo("se");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_se() {
	var info = new ilib.LocaleInfo("se");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_se() {
	var info = new ilib.LocaleInfo("se");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_se() {
	var info = new ilib.LocaleInfo("se");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for seh

function testLocaleInfoGetDecimalSeparatorfor_seh() {
	var info = new ilib.LocaleInfo("seh");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_seh() {
	var info = new ilib.LocaleInfo("seh");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_seh() {
	var info = new ilib.LocaleInfo("seh");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_seh() {
	var info = new ilib.LocaleInfo("seh");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_seh() {
	var info = new ilib.LocaleInfo("seh");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_seh() {
	var info = new ilib.LocaleInfo("seh");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_seh() {
	var info = new ilib.LocaleInfo("seh");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ses

function testLocaleInfoGetDecimalSeparatorfor_ses() {
	var info = new ilib.LocaleInfo("ses");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ses() {
	var info = new ilib.LocaleInfo("ses");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ses() {
	var info = new ilib.LocaleInfo("ses");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ses() {
	var info = new ilib.LocaleInfo("ses");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ses() {
	var info = new ilib.LocaleInfo("ses");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ses() {
	var info = new ilib.LocaleInfo("ses");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ses() {
	var info = new ilib.LocaleInfo("ses");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sg

function testLocaleInfoGetDecimalSeparatorfor_sg() {
	var info = new ilib.LocaleInfo("sg");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sg() {
	var info = new ilib.LocaleInfo("sg");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sg() {
	var info = new ilib.LocaleInfo("sg");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sg() {
	var info = new ilib.LocaleInfo("sg");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sg() {
	var info = new ilib.LocaleInfo("sg");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sg() {
	var info = new ilib.LocaleInfo("sg");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sg() {
	var info = new ilib.LocaleInfo("sg");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for shi

function testLocaleInfoGetDecimalSeparatorfor_shi() {
	var info = new ilib.LocaleInfo("shi");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_shi() {
	var info = new ilib.LocaleInfo("shi");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_shi() {
	var info = new ilib.LocaleInfo("shi");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_shi() {
	var info = new ilib.LocaleInfo("shi");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_shi() {
	var info = new ilib.LocaleInfo("shi");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_shi() {
	var info = new ilib.LocaleInfo("shi");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_shi() {
	var info = new ilib.LocaleInfo("shi");
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

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_shi_MA_Tfng() {
	var info = new ilib.LocaleInfo("shi-MA-Tfng");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_shi_MA_Tfng() {
	var info = new ilib.LocaleInfo("shi-MA-Tfng");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
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

//test cases for sk

function testLocaleInfoGetDecimalSeparatorfor_sk() {
	var info = new ilib.LocaleInfo("sk");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sk() {
	var info = new ilib.LocaleInfo("sk");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sk() {
	var info = new ilib.LocaleInfo("sk");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sk() {
	var info = new ilib.LocaleInfo("sk");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sk() {
	var info = new ilib.LocaleInfo("sk");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sk() {
	var info = new ilib.LocaleInfo("sk");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sk() {
	var info = new ilib.LocaleInfo("sk");
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

//test cases for sm

function testLocaleInfoGetDecimalSeparatorfor_sm() {
	var info = new ilib.LocaleInfo("sm");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sm() {
	var info = new ilib.LocaleInfo("sm");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sm() {
	var info = new ilib.LocaleInfo("sm");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sm() {
	var info = new ilib.LocaleInfo("sm");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sm() {
	var info = new ilib.LocaleInfo("sm");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sm() {
	var info = new ilib.LocaleInfo("sm");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sm() {
	var info = new ilib.LocaleInfo("sm");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sn

function testLocaleInfoGetDecimalSeparatorfor_sn() {
	var info = new ilib.LocaleInfo("sn");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sn() {
	var info = new ilib.LocaleInfo("sn");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sn() {
	var info = new ilib.LocaleInfo("sn");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sn() {
	var info = new ilib.LocaleInfo("sn");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sn() {
	var info = new ilib.LocaleInfo("sn");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sn() {
	var info = new ilib.LocaleInfo("sn");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sn() {
	var info = new ilib.LocaleInfo("sn");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for so

function testLocaleInfoGetDecimalSeparatorfor_so() {
	var info = new ilib.LocaleInfo("so");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_so() {
	var info = new ilib.LocaleInfo("so");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_so() {
	var info = new ilib.LocaleInfo("so");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_so() {
	var info = new ilib.LocaleInfo("so");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_so() {
	var info = new ilib.LocaleInfo("so");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_so() {
	var info = new ilib.LocaleInfo("so");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_so() {
	var info = new ilib.LocaleInfo("so");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for so-ET

function testLocaleInfoGetDecimalSeparatorfor_so_ET() {
	var info = new ilib.LocaleInfo("so-ET");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
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

//test cases for sq

function testLocaleInfoGetDecimalSeparatorfor_sq() {
	var info = new ilib.LocaleInfo("sq");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sq() {
	var info = new ilib.LocaleInfo("sq");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sq() {
	var info = new ilib.LocaleInfo("sq");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sq() {
	var info = new ilib.LocaleInfo("sq");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sq() {
	var info = new ilib.LocaleInfo("sq");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sq() {
	var info = new ilib.LocaleInfo("sq");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sq() {
	var info = new ilib.LocaleInfo("sq");
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

//test cases for sr

function testLocaleInfoGetDecimalSeparatorfor_sr() {
	var info = new ilib.LocaleInfo("sr");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sr() {
	var info = new ilib.LocaleInfo("sr");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sr() {
	var info = new ilib.LocaleInfo("sr");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sr() {
	var info = new ilib.LocaleInfo("sr");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sr() {
	var info = new ilib.LocaleInfo("sr");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sr() {
	var info = new ilib.LocaleInfo("sr");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sr() {
	var info = new ilib.LocaleInfo("sr");
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

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
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

//test cases for ss

function testLocaleInfoGetDecimalSeparatorfor_ss() {
	var info = new ilib.LocaleInfo("ss");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ss() {
	var info = new ilib.LocaleInfo("ss");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ss() {
	var info = new ilib.LocaleInfo("ss");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ss() {
	var info = new ilib.LocaleInfo("ss");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ss() {
	var info = new ilib.LocaleInfo("ss");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ss() {
	var info = new ilib.LocaleInfo("ss");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ss() {
	var info = new ilib.LocaleInfo("ss");
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

//test cases for st

function testLocaleInfoGetDecimalSeparatorfor_st() {
	var info = new ilib.LocaleInfo("st");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_st() {
	var info = new ilib.LocaleInfo("st");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_st() {
	var info = new ilib.LocaleInfo("st");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_st() {
	var info = new ilib.LocaleInfo("st");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_st() {
	var info = new ilib.LocaleInfo("st");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_st() {
	var info = new ilib.LocaleInfo("st");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_st() {
	var info = new ilib.LocaleInfo("st");
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

//test cases for su

function testLocaleInfoGetDecimalSeparatorfor_su() {
	var info = new ilib.LocaleInfo("su");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_su() {
	var info = new ilib.LocaleInfo("su");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_su() {
	var info = new ilib.LocaleInfo("su");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_su() {
	var info = new ilib.LocaleInfo("su");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_su() {
	var info = new ilib.LocaleInfo("su");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_su() {
	var info = new ilib.LocaleInfo("su");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_su() {
	var info = new ilib.LocaleInfo("su");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sv

function testLocaleInfoGetDecimalSeparatorfor_sv() {
	var info = new ilib.LocaleInfo("sv");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sv() {
	var info = new ilib.LocaleInfo("sv");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sv() {
	var info = new ilib.LocaleInfo("sv");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sv() {
	var info = new ilib.LocaleInfo("sv");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sv() {
	var info = new ilib.LocaleInfo("sv");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sv() {
	var info = new ilib.LocaleInfo("sv");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sv() {
	var info = new ilib.LocaleInfo("sv");
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

//test cases for sw

function testLocaleInfoGetDecimalSeparatorfor_sw() {
	var info = new ilib.LocaleInfo("sw");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sw() {
	var info = new ilib.LocaleInfo("sw");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sw() {
	var info = new ilib.LocaleInfo("sw");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sw() {
	var info = new ilib.LocaleInfo("sw");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_sw() {
	var info = new ilib.LocaleInfo("sw");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sw() {
	var info = new ilib.LocaleInfo("sw");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sw() {
	var info = new ilib.LocaleInfo("sw");
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

//test cases for swc

function testLocaleInfoGetDecimalSeparatorfor_swc() {
	var info = new ilib.LocaleInfo("swc");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_swc() {
	var info = new ilib.LocaleInfo("swc");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_swc() {
	var info = new ilib.LocaleInfo("swc");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_swc() {
	var info = new ilib.LocaleInfo("swc");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_swc() {
	var info = new ilib.LocaleInfo("swc");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_swc() {
	var info = new ilib.LocaleInfo("swc");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_swc() {
	var info = new ilib.LocaleInfo("swc");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ta

function testLocaleInfoGetDecimalSeparatorfor_ta() {
	var info = new ilib.LocaleInfo("ta");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ta() {
	var info = new ilib.LocaleInfo("ta");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ta() {
	var info = new ilib.LocaleInfo("ta");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ta() {
	var info = new ilib.LocaleInfo("ta");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ta() {
	var info = new ilib.LocaleInfo("ta");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ta() {
	var info = new ilib.LocaleInfo("ta");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ta() {
	var info = new ilib.LocaleInfo("ta");
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

	assertEquals(0, info.getSecondaryGroupingDigits());
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

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ta_SG() {
	var info = new ilib.LocaleInfo("ta-SG");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for te

function testLocaleInfoGetDecimalSeparatorfor_te() {
	var info = new ilib.LocaleInfo("te");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_te() {
	var info = new ilib.LocaleInfo("te");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_te() {
	var info = new ilib.LocaleInfo("te");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_te() {
	var info = new ilib.LocaleInfo("te");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_te() {
	var info = new ilib.LocaleInfo("te");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_te() {
	var info = new ilib.LocaleInfo("te");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_te() {
	var info = new ilib.LocaleInfo("te");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for teo

function testLocaleInfoGetDecimalSeparatorfor_teo() {
	var info = new ilib.LocaleInfo("teo");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_teo() {
	var info = new ilib.LocaleInfo("teo");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_teo() {
	var info = new ilib.LocaleInfo("teo");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_teo() {
	var info = new ilib.LocaleInfo("teo");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_teo() {
	var info = new ilib.LocaleInfo("teo");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_teo() {
	var info = new ilib.LocaleInfo("teo");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_teo() {
	var info = new ilib.LocaleInfo("teo");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for tg

function testLocaleInfoGetDecimalSeparatorfor_tg() {
	var info = new ilib.LocaleInfo("tg");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_tg() {
	var info = new ilib.LocaleInfo("tg");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_tg() {
	var info = new ilib.LocaleInfo("tg");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_tg() {
	var info = new ilib.LocaleInfo("tg");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_tg() {
	var info = new ilib.LocaleInfo("tg");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_tg() {
	var info = new ilib.LocaleInfo("tg");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_tg() {
	var info = new ilib.LocaleInfo("tg");
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

//test cases for ti

function testLocaleInfoGetDecimalSeparatorfor_ti() {
	var info = new ilib.LocaleInfo("ti");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ti() {
	var info = new ilib.LocaleInfo("ti");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ti() {
	var info = new ilib.LocaleInfo("ti");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ti() {
	var info = new ilib.LocaleInfo("ti");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ti() {
	var info = new ilib.LocaleInfo("ti");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ti() {
	var info = new ilib.LocaleInfo("ti");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ti() {
	var info = new ilib.LocaleInfo("ti");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for tk

function testLocaleInfoGetDecimalSeparatorfor_tk() {
	var info = new ilib.LocaleInfo("tk");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_tk() {
	var info = new ilib.LocaleInfo("tk");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_tk() {
	var info = new ilib.LocaleInfo("tk");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_tk() {
	var info = new ilib.LocaleInfo("tk");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_tk() {
	var info = new ilib.LocaleInfo("tk");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_tk() {
	var info = new ilib.LocaleInfo("tk");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_tk() {
	var info = new ilib.LocaleInfo("tk");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for tl

function testLocaleInfoGetDecimalSeparatorfor_tl() {
	var info = new ilib.LocaleInfo("tl");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_tl() {
	var info = new ilib.LocaleInfo("tl");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_tl() {
	var info = new ilib.LocaleInfo("tl");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_tl() {
	var info = new ilib.LocaleInfo("tl");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_tl() {
	var info = new ilib.LocaleInfo("tl");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_tl() {
	var info = new ilib.LocaleInfo("tl");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_tl() {
	var info = new ilib.LocaleInfo("tl");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for tn

function testLocaleInfoGetDecimalSeparatorfor_tn() {
	var info = new ilib.LocaleInfo("tn");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_tn() {
	var info = new ilib.LocaleInfo("tn");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_tn() {
	var info = new ilib.LocaleInfo("tn");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_tn() {
	var info = new ilib.LocaleInfo("tn");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_tn() {
	var info = new ilib.LocaleInfo("tn");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_tn() {
	var info = new ilib.LocaleInfo("tn");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_tn() {
	var info = new ilib.LocaleInfo("tn");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for to

function testLocaleInfoGetDecimalSeparatorfor_to() {
	var info = new ilib.LocaleInfo("to");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_to() {
	var info = new ilib.LocaleInfo("to");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_to() {
	var info = new ilib.LocaleInfo("to");
	assertNotNull(info);

	assertEquals("‎{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_to() {
	var info = new ilib.LocaleInfo("to");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_to() {
	var info = new ilib.LocaleInfo("to");
	assertNotNull(info);

	assertEquals(0, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_to() {
	var info = new ilib.LocaleInfo("to");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_to() {
	var info = new ilib.LocaleInfo("to");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for tr

function testLocaleInfoGetDecimalSeparatorfor_tr() {
	var info = new ilib.LocaleInfo("tr");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_tr() {
	var info = new ilib.LocaleInfo("tr");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_tr() {
	var info = new ilib.LocaleInfo("tr");
	assertNotNull(info);

	assertEquals("%{n}", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_tr() {
	var info = new ilib.LocaleInfo("tr");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_tr() {
	var info = new ilib.LocaleInfo("tr");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_tr() {
	var info = new ilib.LocaleInfo("tr");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_tr() {
	var info = new ilib.LocaleInfo("tr");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ts

function testLocaleInfoGetDecimalSeparatorfor_ts() {
	var info = new ilib.LocaleInfo("ts");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ts() {
	var info = new ilib.LocaleInfo("ts");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ts() {
	var info = new ilib.LocaleInfo("ts");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ts() {
	var info = new ilib.LocaleInfo("ts");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ts() {
	var info = new ilib.LocaleInfo("ts");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ts() {
	var info = new ilib.LocaleInfo("ts");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ts() {
	var info = new ilib.LocaleInfo("ts");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for tt

function testLocaleInfoGetDecimalSeparatorfor_tt() {
	var info = new ilib.LocaleInfo("tt");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_tt() {
	var info = new ilib.LocaleInfo("tt");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_tt() {
	var info = new ilib.LocaleInfo("tt");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_tt() {
	var info = new ilib.LocaleInfo("tt");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_tt() {
	var info = new ilib.LocaleInfo("tt");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_tt() {
	var info = new ilib.LocaleInfo("tt");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_tt() {
	var info = new ilib.LocaleInfo("tt");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for twq

function testLocaleInfoGetDecimalSeparatorfor_twq() {
	var info = new ilib.LocaleInfo("twq");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_twq() {
	var info = new ilib.LocaleInfo("twq");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_twq() {
	var info = new ilib.LocaleInfo("twq");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_twq() {
	var info = new ilib.LocaleInfo("twq");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_twq() {
	var info = new ilib.LocaleInfo("twq");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_twq() {
	var info = new ilib.LocaleInfo("twq");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_twq() {
	var info = new ilib.LocaleInfo("twq");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ty

function testLocaleInfoGetDecimalSeparatorfor_ty() {
	var info = new ilib.LocaleInfo("ty");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ty() {
	var info = new ilib.LocaleInfo("ty");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ty() {
	var info = new ilib.LocaleInfo("ty");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ty() {
	var info = new ilib.LocaleInfo("ty");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ty() {
	var info = new ilib.LocaleInfo("ty");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ty() {
	var info = new ilib.LocaleInfo("ty");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ty() {
	var info = new ilib.LocaleInfo("ty");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for tzm

function testLocaleInfoGetDecimalSeparatorfor_tzm() {
	var info = new ilib.LocaleInfo("tzm");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_tzm() {
	var info = new ilib.LocaleInfo("tzm");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_tzm() {
	var info = new ilib.LocaleInfo("tzm");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_tzm() {
	var info = new ilib.LocaleInfo("tzm");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_tzm() {
	var info = new ilib.LocaleInfo("tzm");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_tzm() {
	var info = new ilib.LocaleInfo("tzm");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_tzm() {
	var info = new ilib.LocaleInfo("tzm");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ug

function testLocaleInfoGetDecimalSeparatorfor_ug() {
	var info = new ilib.LocaleInfo("ug");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ug() {
	var info = new ilib.LocaleInfo("ug");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ug() {
	var info = new ilib.LocaleInfo("ug");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ug() {
	var info = new ilib.LocaleInfo("ug");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ug() {
	var info = new ilib.LocaleInfo("ug");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ug() {
	var info = new ilib.LocaleInfo("ug");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ug() {
	var info = new ilib.LocaleInfo("ug");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for uk

function testLocaleInfoGetDecimalSeparatorfor_uk() {
	var info = new ilib.LocaleInfo("uk");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_uk() {
	var info = new ilib.LocaleInfo("uk");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_uk() {
	var info = new ilib.LocaleInfo("uk");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_uk() {
	var info = new ilib.LocaleInfo("uk");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_uk() {
	var info = new ilib.LocaleInfo("uk");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_uk() {
	var info = new ilib.LocaleInfo("uk");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_uk() {
	var info = new ilib.LocaleInfo("uk");
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

//test cases for vai

function testLocaleInfoGetDecimalSeparatorfor_vai() {
	var info = new ilib.LocaleInfo("vai");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_vai() {
	var info = new ilib.LocaleInfo("vai");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_vai() {
	var info = new ilib.LocaleInfo("vai");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_vai() {
	var info = new ilib.LocaleInfo("vai");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_vai() {
	var info = new ilib.LocaleInfo("vai");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_vai() {
	var info = new ilib.LocaleInfo("vai");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_vai() {
	var info = new ilib.LocaleInfo("vai");
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

//test cases for ve

function testLocaleInfoGetDecimalSeparatorfor_ve() {
	var info = new ilib.LocaleInfo("ve");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ve() {
	var info = new ilib.LocaleInfo("ve");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ve() {
	var info = new ilib.LocaleInfo("ve");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ve() {
	var info = new ilib.LocaleInfo("ve");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_ve() {
	var info = new ilib.LocaleInfo("ve");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ve() {
	var info = new ilib.LocaleInfo("ve");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ve() {
	var info = new ilib.LocaleInfo("ve");
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

//test cases for vo

function testLocaleInfoGetDecimalSeparatorfor_vo() {
	var info = new ilib.LocaleInfo("vo");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_vo() {
	var info = new ilib.LocaleInfo("vo");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_vo() {
	var info = new ilib.LocaleInfo("vo");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_vo() {
	var info = new ilib.LocaleInfo("vo");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_vo() {
	var info = new ilib.LocaleInfo("vo");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_vo() {
	var info = new ilib.LocaleInfo("vo");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_vo() {
	var info = new ilib.LocaleInfo("vo");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for vun

function testLocaleInfoGetDecimalSeparatorfor_vun() {
	var info = new ilib.LocaleInfo("vun");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_vun() {
	var info = new ilib.LocaleInfo("vun");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_vun() {
	var info = new ilib.LocaleInfo("vun");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_vun() {
	var info = new ilib.LocaleInfo("vun");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_vun() {
	var info = new ilib.LocaleInfo("vun");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_vun() {
	var info = new ilib.LocaleInfo("vun");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_vun() {
	var info = new ilib.LocaleInfo("vun");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for wa

function testLocaleInfoGetDecimalSeparatorfor_wa() {
	var info = new ilib.LocaleInfo("wa");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_wa() {
	var info = new ilib.LocaleInfo("wa");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_wa() {
	var info = new ilib.LocaleInfo("wa");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_wa() {
	var info = new ilib.LocaleInfo("wa");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_wa() {
	var info = new ilib.LocaleInfo("wa");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_wa() {
	var info = new ilib.LocaleInfo("wa");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_wa() {
	var info = new ilib.LocaleInfo("wa");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for wo

function testLocaleInfoGetDecimalSeparatorfor_wo() {
	var info = new ilib.LocaleInfo("wo");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_wo() {
	var info = new ilib.LocaleInfo("wo");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_wo() {
	var info = new ilib.LocaleInfo("wo");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_wo() {
	var info = new ilib.LocaleInfo("wo");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_wo() {
	var info = new ilib.LocaleInfo("wo");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_wo() {
	var info = new ilib.LocaleInfo("wo");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_wo() {
	var info = new ilib.LocaleInfo("wo");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for xh

function testLocaleInfoGetDecimalSeparatorfor_xh() {
	var info = new ilib.LocaleInfo("xh");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_xh() {
	var info = new ilib.LocaleInfo("xh");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_xh() {
	var info = new ilib.LocaleInfo("xh");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_xh() {
	var info = new ilib.LocaleInfo("xh");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_xh() {
	var info = new ilib.LocaleInfo("xh");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_xh() {
	var info = new ilib.LocaleInfo("xh");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_xh() {
	var info = new ilib.LocaleInfo("xh");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for xog

function testLocaleInfoGetDecimalSeparatorfor_xog() {
	var info = new ilib.LocaleInfo("xog");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_xog() {
	var info = new ilib.LocaleInfo("xog");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_xog() {
	var info = new ilib.LocaleInfo("xog");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_xog() {
	var info = new ilib.LocaleInfo("xog");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_xog() {
	var info = new ilib.LocaleInfo("xog");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_xog() {
	var info = new ilib.LocaleInfo("xog");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_xog() {
	var info = new ilib.LocaleInfo("xog");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for xx

function testLocaleInfoGetDecimalSeparatorfor_xx() {
	var info = new ilib.LocaleInfo("xx");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_xx() {
	var info = new ilib.LocaleInfo("xx");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_xx() {
	var info = new ilib.LocaleInfo("xx");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_xx() {
	var info = new ilib.LocaleInfo("xx");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_xx() {
	var info = new ilib.LocaleInfo("xx");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_xx() {
	var info = new ilib.LocaleInfo("xx");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_xx() {
	var info = new ilib.LocaleInfo("xx");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for yav

function testLocaleInfoGetDecimalSeparatorfor_yav() {
	var info = new ilib.LocaleInfo("yav");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_yav() {
	var info = new ilib.LocaleInfo("yav");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_yav() {
	var info = new ilib.LocaleInfo("yav");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_yav() {
	var info = new ilib.LocaleInfo("yav");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_yav() {
	var info = new ilib.LocaleInfo("yav");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_yav() {
	var info = new ilib.LocaleInfo("yav");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_yav() {
	var info = new ilib.LocaleInfo("yav");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for yi

function testLocaleInfoGetDecimalSeparatorfor_yi() {
	var info = new ilib.LocaleInfo("yi");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_yi() {
	var info = new ilib.LocaleInfo("yi");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_yi() {
	var info = new ilib.LocaleInfo("yi");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_yi() {
	var info = new ilib.LocaleInfo("yi");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_yi() {
	var info = new ilib.LocaleInfo("yi");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_yi() {
	var info = new ilib.LocaleInfo("yi");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_yi() {
	var info = new ilib.LocaleInfo("yi");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for yo

function testLocaleInfoGetDecimalSeparatorfor_yo() {
	var info = new ilib.LocaleInfo("yo");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_yo() {
	var info = new ilib.LocaleInfo("yo");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_yo() {
	var info = new ilib.LocaleInfo("yo");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_yo() {
	var info = new ilib.LocaleInfo("yo");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_yo() {
	var info = new ilib.LocaleInfo("yo");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_yo() {
	var info = new ilib.LocaleInfo("yo");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_yo() {
	var info = new ilib.LocaleInfo("yo");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for za

function testLocaleInfoGetDecimalSeparatorfor_za() {
	var info = new ilib.LocaleInfo("za");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_za() {
	var info = new ilib.LocaleInfo("za");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_za() {
	var info = new ilib.LocaleInfo("za");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_za() {
	var info = new ilib.LocaleInfo("za");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_za() {
	var info = new ilib.LocaleInfo("za");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_za() {
	var info = new ilib.LocaleInfo("za");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_za() {
	var info = new ilib.LocaleInfo("za");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for zh

function testLocaleInfoGetDecimalSeparatorfor_zh() {
	var info = new ilib.LocaleInfo("zh");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_zh() {
	var info = new ilib.LocaleInfo("zh");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_zh() {
	var info = new ilib.LocaleInfo("zh");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_zh() {
	var info = new ilib.LocaleInfo("zh");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_zh() {
	var info = new ilib.LocaleInfo("zh");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_zh() {
	var info = new ilib.LocaleInfo("zh");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_zh() {
	var info = new ilib.LocaleInfo("zh");
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

//test cases for zu

function testLocaleInfoGetDecimalSeparatorfor_zu() {
	var info = new ilib.LocaleInfo("zu");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_zu() {
	var info = new ilib.LocaleInfo("zu");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_zu() {
	var info = new ilib.LocaleInfo("zu");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_zu() {
	var info = new ilib.LocaleInfo("zu");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_zu() {
	var info = new ilib.LocaleInfo("zu");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_zu() {
	var info = new ilib.LocaleInfo("zu");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_zu() {
	var info = new ilib.LocaleInfo("zu");
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

	assertEquals(" ", info.getGroupingSeparator());
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

	assertEquals("{n}%", info.getPercentageFormat());
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
			assertEquals("fr-FR", li.info.locale);
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