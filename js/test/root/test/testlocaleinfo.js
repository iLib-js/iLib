/*
 * testlocaleinfo.js - test the locale info object
 *
 * Copyright © 2012-2016, JEDLSoft
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

var ilib = require("../lib/ilib.js")
var LocaleInfo = require("./../lib/LocaleInfo.js");

function testLocaleInfoConstructor() {
	var loc = new LocaleInfo();

	assertNotNull(loc);
}

function testLocaleInfoConstructorCurrentLocale() {
	var loc, info = new LocaleInfo(); // gives locale of the host JS engine

	assertNotNull(info);

	loc = info.getLocale();

	assertEquals("en", loc.getLanguage());
	assertEquals("US", loc.getRegion());
	assertUndefined(loc.getVariant());
}

function testLocaleInfoConstructorGivenLocale() {
	var loc, info = new LocaleInfo("de-DE");

	assertNotNull(info);

	loc = info.getLocale();

	assertEquals("de", loc.getLanguage());
	assertEquals("DE", loc.getRegion());
	assertUndefined(loc.getVariant());
}

function testLocaleInfoGetClockUS() {
	var info = new LocaleInfo("en-US");
	assertNotNull(info);

	assertEquals("12", info.getClock());
}

function testLocaleInfoGetClockCA() {
	var info = new LocaleInfo("en-CA");
	assertNotNull(info);

	assertEquals("12", info.getClock());
}

function testLocaleInfoGetClockGB() {
	var info = new LocaleInfo("en-GB");
	assertNotNull(info);

	assertEquals("24", info.getClock());
}

function testLocaleInfoGetClockDE() {
	var info = new LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals("24", info.getClock());
}

function testLocaleInfoGetCalendarUS() {
	var info = new LocaleInfo("en-US");
	assertNotNull(info);

	assertEquals("gregorian", info.getCalendar());
}

function testLocaleInfoGetCalendarDE() {
	var info = new LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals("gregorian", info.getCalendar());
}

function testLocaleInfoGetUnitsUS() {
	var info = new LocaleInfo("en-US");
	assertNotNull(info);

	assertEquals("uscustomary", info.getUnits());
}

function testLocaleInfoGetUnitsCA() {
	var info = new LocaleInfo("en-CA");
	assertNotNull(info);

	assertEquals("metric", info.getUnits());
}

function testLocaleInfoGetUnitsGB() {
	var info = new LocaleInfo("en-GB");
	assertNotNull(info);

	assertEquals("imperial", info.getUnits());
}

function testLocaleInfoGetCalendarDE() {
	var info = new LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals("metric", info.getUnits());
}

function testLocaleInfoGetFirstDayOfWeekUS() {
	var info = new LocaleInfo("en-US");
	assertNotNull(info);

	assertEquals(0, info.getFirstDayOfWeek());
}

function testLocaleInfoGetFirstDayOfWeekDE() {
	var info = new LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals(1, info.getFirstDayOfWeek());
}

function testLocaleInfoGetFirstDayOfWeekFR() {
	var info = new LocaleInfo("fr-FR");
	assertNotNull(info);

	assertEquals(1, info.getFirstDayOfWeek());
}

function testLocaleInfoGetTimeZoneUS() {
	var info = new LocaleInfo("en-US");
	assertNotNull(info);

	assertEquals("America/Los_Angeles", info.getTimeZone());
}

function testLocaleInfoGetTimeZoneUS() {
	var info = new LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals("Europe/Berlin", info.getTimeZone());
}

function testLocaleInfoGetTimeZoneES() {
	var info = new LocaleInfo("es-ES");
	assertNotNull(info);

	assertEquals("Europe/Madrid", info.getTimeZone());
}

function testLocaleInfoGetTimeZoneDefault() {
	var info = new LocaleInfo("zz-ZZ");
	assertNotNull(info);

	assertEquals("Etc/UTC", info.getTimeZone());
}

function testLocaleInfoGetCurrency() {
	var info = new LocaleInfo("en-US");
	assertNotNull(info);

	assertEquals("USD", info.getCurrency());
}

function testLocaleInfoGetCurrencyDE() {
	var info = new LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals("EUR", info.getCurrency());
}

function testLocaleInfoGetCurrencyGB() {
	var info = new LocaleInfo("en-GB");
	assertNotNull(info);

	assertEquals("GBP", info.getCurrency());
}

function testLocaleInfoGetCurrencyUnknown() {
	var info = new LocaleInfo("zxx-XX");
	assertNotNull(info);

	assertEquals("USD", info.getCurrency());
}

function testLocaleInfoGetRoundingModeDefault() {
	var info = new LocaleInfo();
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

function testLocaleInfoGetRoundingModeyy() {
	var info = new LocaleInfo("yy-YY");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

function testLocaleInfoGetDecimalSeparator1() {
	var info = new LocaleInfo();
	assertNotNull(info);

	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetDecimalSeparator2() {
	var info = new LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals(",", info.getDecimalSeparator());
}
//*************************************************Added By Birendra 23/05**********************************************************

//test cases for en-GB number format

function testLocaleInfoGetDecimalSeparatorfor_en_GB() {
	var info = new LocaleInfo("en-GB");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_en_GB() {
	var info = new LocaleInfo("en-GB");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_en_GB() {
	var info = new LocaleInfo("en-GB");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_en_GB() {
	var info = new LocaleInfo("en-GB");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_en_GB() {
	var info = new LocaleInfo("en-GB");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_en_GB() {
	var info = new LocaleInfo("en-GB");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_en_GB() {
	var info = new LocaleInfo("en-GB");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

//test cases for ko-KR number format

function testLocaleInfoGetDecimalSeparatorfor_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

//test cases for zh-CN-Hans number format

function testLocaleInfoGetDecimalSeparatorfor_zh_CN_Hans() {
	var info = new LocaleInfo("zh-CN-Hans");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_zh_CN_Hans() {
	var info = new LocaleInfo("zh-CN-Hans");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_zh_CN_Hans() {
	var info = new LocaleInfo("zh-CN-Hans");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_zh_CN_Hans() {
	var info = new LocaleInfo("zh-CN-Hans");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_zh_CN_Hans() {
	var info = new LocaleInfo("zh-CN-Hans");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_zh_CN_Hans() {
	var info = new LocaleInfo("zh-CN-Hans");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_zh_CN_Hans() {
	var info = new LocaleInfo("zh-CN-Hans");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

//test cases for zh-HK-Hans

function testLocaleInfoGetDecimalSeparatorfor_zh_HK_Hans() {
	var info = new LocaleInfo("zh-HK-Hans");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_zh_HK_Hans() {
	var info = new LocaleInfo("zh-HK-Hans");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_zh_HK_Hans() {
	var info = new LocaleInfo("zh-HK-Hans");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_zh_HK_Hans() {
	var info = new LocaleInfo("zh-HK-Hans");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_zh_HK_Hans() {
	var info = new LocaleInfo("zh-HK-Hans");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_zh_HK_Hans() {
	var info = new LocaleInfo("zh-HK-Hans");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}
function testLocaleInfoGetNegativeCurrencyFormat_zh_HK_Hans() {
	var info = new LocaleInfo("zh-HK-Hans");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

//test cases fot zh-TW-Hant

function testLocaleInfoGetDecimalSeparatorfor_zh_TW_Hant() {
	var info = new LocaleInfo("zh-TW-Hant");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_zh_TW_Hant() {
	var info = new LocaleInfo("zh-TW-Hant");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_zh_TW_Hant() {
	var info = new LocaleInfo("zh-TW-Hant");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_zh_TW_Hant() {
	var info = new LocaleInfo("zh-TW-Hant");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_zh_TW_Hant() {
	var info = new LocaleInfo("zh-TW-Hant");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_zh_TW_Hant() {
	var info = new LocaleInfo("zh-TW-Hant");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_zh_TW_Hant() {
	var info = new LocaleInfo("zh-TW-Hant");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

//test cases for fr-FR number format

function testLocaleInfoGetDecimalSeparatorfor_fr_FR() {
	var info = new LocaleInfo("fr-FR");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_FR() {
	var info = new LocaleInfo("fr-FR");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_FR() {
	var info = new LocaleInfo("fr-FR");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_FR() {
	var info = new LocaleInfo("fr-FR");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_fr_FR() {
	var info = new LocaleInfo("fr-FR");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_fr_FR() {
	var info = new LocaleInfo("fr-FR");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_fr_FR() {
	var info = new LocaleInfo("fr-FR");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

//test cases for fr-CA unmber format

function testLocaleInfoGetDecimalSeparatorfor_fr_CA() {
	var info = new LocaleInfo("fr-CA");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_CA() {
	var info = new LocaleInfo("fr-CA");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_CA() {
	var info = new LocaleInfo("fr-CA");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_CA() {
	var info = new LocaleInfo("fr-CA");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_fr_CA() {
	var info = new LocaleInfo("fr-CA");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_fr_CA() {
	var info = new LocaleInfo("fr-CA");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_fr_CA() {
	var info = new LocaleInfo("fr-CA");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

//test cases for pt_BR numberformat

function testLocaleInfoGetDecimalSeparatorfor_pt_BR() {
	var info = new LocaleInfo("pt-BR");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_BR() {
	var info = new LocaleInfo("pt-BR");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_BR() {
	var info = new LocaleInfo("pt-BR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_BR() {
	var info = new LocaleInfo("pt-BR");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_pt_BR() {
	var info = new LocaleInfo("pt-BR");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_pt_BR() {
	var info = new LocaleInfo("pt-BR");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_pt_BR() {
	var info = new LocaleInfo("pt-BR");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}
//test cases for pt_PT

function testLocaleInfoGetDecimalSeparatorfor_pt_PT() {
	var info = new LocaleInfo("pt-PT");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_PT() {
	var info = new LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_PT() {
	var info = new LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_PT() {
	var info = new LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_pt_PT() {
	var info = new LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_pt_PT() {
	var info = new LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_pt_PT() {
	var info = new LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

//test cases for es_ES number format

function testLocaleInfoGetDecimalSeparatorfor_es_ES() {
	var info = new LocaleInfo("es-ES");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_es_ES() {
	var info = new LocaleInfo("es-ES");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_es_ES() {
	var info = new LocaleInfo("es-ES");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_es_ES() {
	var info = new LocaleInfo("es-ES");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_es_ES() {
	var info = new LocaleInfo("es-ES");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_es_ES() {
	var info = new LocaleInfo("es-ES");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_es_ES() {
	var info = new LocaleInfo("es-ES");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

//test case for es_Co

function testLocaleInfoGetDecimalSeparatorfor_es_CO() {
	var info = new LocaleInfo("es-CO");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_es_CO() {
	var info = new LocaleInfo("es-CO");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_es_CO() {
	var info = new LocaleInfo("es-CO");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_es_CO() {
	var info = new LocaleInfo("es-CO");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_es_CO() {
	var info = new LocaleInfo("es-CO");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_es_CO() {
	var info = new LocaleInfo("es-CO");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_es_CO() {
	var info = new LocaleInfo("es-CO");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

//test cases for ja-JP

function testLocaleInfoGetDecimalSeparatorfor_ja_JP() {
	var info = new LocaleInfo("ja-JP");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ja_JP() {
	var info = new LocaleInfo("ja-JP");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ja_JP() {
	var info = new LocaleInfo("ja-JP");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ja_JP() {
	var info = new LocaleInfo("ja-JP");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ja_JP() {
	var info = new LocaleInfo("ja-JP");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ja_JP() {
	var info = new LocaleInfo("ja-JP");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ja_JP() {
	var info = new LocaleInfo("ja-JP");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}
//test cases for de-DE

function testLocaleInfoGetDecimalSeparatorfor_de_DE() {
	var info = new LocaleInfo("de-DE");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_de_DE() {
	var info = new LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_de_DE() {
	var info = new LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_de_DE() {
	var info = new LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_de_DE() {
	var info = new LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_de_DE() {
	var info = new LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_de_DE() {
	var info = new LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

//test cases for it-IT

function testLocaleInfoGetDecimalSeparatorfor_it_IT() {
	var info = new LocaleInfo("it-IT");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_it_IT() {
	var info = new LocaleInfo("it-IT");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_it_IT() {
	var info = new LocaleInfo("it-IT");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_it_IT() {
	var info = new LocaleInfo("it-IT");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_it_IT() {
	var info = new LocaleInfo("it-IT");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_it_IT() {
	var info = new LocaleInfo("it-IT");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_it_IT() {
	var info = new LocaleInfo("it-IT");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

//test cases for sv-SE

function testLocaleInfoGetDecimalSeparatorfor_sv_SE() {
	var info = new LocaleInfo("sv-SE");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sv_SE() {
	var info = new LocaleInfo("sv-SE");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sv_SE() {
	var info = new LocaleInfo("sv-SE");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sv_SE() {
	var info = new LocaleInfo("sv-SE");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_sv_SE() {
	var info = new LocaleInfo("sv-SE");
	assertNotNull(info);

	assertEquals("−{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_sv_SE() {
	var info = new LocaleInfo("sv-SE");
	assertNotNull(info);

	assertEquals("−{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_sv_SE() {
	var info = new LocaleInfo("sv-SE");
	assertNotNull(info);

	assertEquals("−{n} {s}", info.getCurrencyFormats().commonNegative);
}

//test cases for fi-FI

function testLocaleInfoGetDecimalSeparatorfor_fi_FI() {
	var info = new LocaleInfo("fi-FI");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fi_FI() {
	var info = new LocaleInfo("fi-FI");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fi_FI() {
	var info = new LocaleInfo("fi-FI");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fi_FI() {
	var info = new LocaleInfo("fi-FI");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_fi_FI() {
	var info = new LocaleInfo("fi-FI");
	assertNotNull(info);

	assertEquals("−{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_fi_FI() {
	var info = new LocaleInfo("fi-FI");
	assertNotNull(info);

	assertEquals("−{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_fi_FI() {
	var info = new LocaleInfo("fi-FI");
	assertNotNull(info);

	assertEquals("−{n} {s}", info.getCurrencyFormats().commonNegative);
}

//test cases for cs_CZ

function testLocaleInfoGetDecimalSeparatorfor_cs_CZ() {
	var info = new LocaleInfo("cs-CZ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_cs_CZ() {
	var info = new LocaleInfo("cs-CZ");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_cs_CZ() {
	var info = new LocaleInfo("cs-CZ");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_cs_CZ() {
	var info = new LocaleInfo("cs-CZ");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_cs_CZ() {
	var info = new LocaleInfo("cs-CZ");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_cs_CZ() {
	var info = new LocaleInfo("cs-CZ");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_cs_CZ() {
	var info = new LocaleInfo("cs-CZ");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

//test cases for el_GR

function testLocaleInfoGetDecimalSeparatorfor_el_GR() {
	var info = new LocaleInfo("el-GR");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_el_GR() {
	var info = new LocaleInfo("el-GR");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_el_GR() {
	var info = new LocaleInfo("el-GR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_el_GR() {
	var info = new LocaleInfo("el-GR");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_el_GR() {
	var info = new LocaleInfo("el-GR");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_el_GR() {
	var info = new LocaleInfo("el-GR");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_el_GR() {
	var info = new LocaleInfo("el-GR");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

//test cases for hu-HU

function testLocaleInfoGetDecimalSeparatorfor_hu_HU() {
	var info = new LocaleInfo("hu-HU");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_hu_HU() {
	var info = new LocaleInfo("hu-HU");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_hu_HU() {
	var info = new LocaleInfo("hu-HU");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_hu_HU() {
	var info = new LocaleInfo("hu-HU");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_hu_HU() {
	var info = new LocaleInfo("hu-HU");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_hu_HU() {
	var info = new LocaleInfo("hu-HU");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_hu_HU() {
	var info = new LocaleInfo("hu-HU");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

//test cases for nl_NL

function testLocaleInfoGetDecimalSeparatorfor_nl_NL() {
	var info = new LocaleInfo("nl-NL");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nl_NL() {
	var info = new LocaleInfo("nl-NL");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nl_NL() {
	var info = new LocaleInfo("nl-NL");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nl_NL() {
	var info = new LocaleInfo("nl-NL");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_nl_NL() {
	var info = new LocaleInfo("nl-NL");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_nl_NL() {
	var info = new LocaleInfo("nl-NL");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_nl_NL() {
	var info = new LocaleInfo("nl-NL");
	assertNotNull(info);

	assertEquals("{s} -{n}", info.getCurrencyFormats().commonNegative);
}

//test cases for pl_PL

function testLocaleInfoGetDecimalSeparatorfor_pl_PL() {
	var info = new LocaleInfo("pl-PL");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pl_PL() {
	var info = new LocaleInfo("pl-PL");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pl_PL() {
	var info = new LocaleInfo("pl-PL");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pl_PL() {
	var info = new LocaleInfo("pl-PL");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_pl_PL() {
	var info = new LocaleInfo("pl-PL");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_pl_PL() {
	var info = new LocaleInfo("pl-PL");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_pl_PL() {
	var info = new LocaleInfo("pl-PL");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

//test cases for da-DK

function testLocaleInfoGetDecimalSeparatorfor_da_Dk() {
	var info = new LocaleInfo("da-DK");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_da_Dk() {
	var info = new LocaleInfo("da-DK");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_da_Dk() {
	var info = new LocaleInfo("da-DK");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_da_Dk() {
	var info = new LocaleInfo("da-DK");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_da_Dk() {
	var info = new LocaleInfo("da-DK");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_da_Dk() {
	var info = new LocaleInfo("da-DK");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_da_Dk() {
	var info = new LocaleInfo("da-DK");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

//test cases for roRO

function testLocaleInfoGetDecimalSeparatorfor_ro_RO() {
	var info = new LocaleInfo("ro-RO");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ro_RO() {
	var info = new LocaleInfo("ro-RO");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ro_RO() {
	var info = new LocaleInfo("ro-RO");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ro_RO() {
	var info = new LocaleInfo("ro-RO");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ro_RO() {
	var info = new LocaleInfo("ro-RO");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ro_RO() {
	var info = new LocaleInfo("ro-RO");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ro_RO() {
	var info = new LocaleInfo("ro-RO");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

//test cases for aa-DJ

function testLocaleInfoGetDecimalSeparatorfor_aa_DJ() {
	var info = new LocaleInfo("aa-DJ");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_aa_DJ() {
	var info = new LocaleInfo("aa-DJ");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_aa_DJ() {
	var info = new LocaleInfo("aa-DJ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_aa_DJ() {
	var info = new LocaleInfo("aa-DJ");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_aa_DJ() {
	var info = new LocaleInfo("aa-DJ");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_aa_DJ() {
	var info = new LocaleInfo("aa-DJ");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_aa_DJ() {
	var info = new LocaleInfo("aa-DJ");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_aa_DJ() {
	var info = new LocaleInfo("aa-DJ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_aa_DJ() {
	var info = new LocaleInfo("aa-DJ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_aa_DJ() {
	var info = new LocaleInfo("aa-DJ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for af-NA

function testLocaleInfoGetDecimalSeparatorfor_af_NA() {
	var info = new LocaleInfo("af-NA");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_af_NA() {
	var info = new LocaleInfo("af-NA");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_af_NA() {
	var info = new LocaleInfo("af-NA");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_af_NA() {
	var info = new LocaleInfo("af-NA");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_af_NA() {
	var info = new LocaleInfo("af-NA");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_af_NA() {
	var info = new LocaleInfo("af-NA");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_af_NA() {
	var info = new LocaleInfo("af-NA");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_af_NA() {
	var info = new LocaleInfo("af-NA");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_af_NA() {
	var info = new LocaleInfo("af-NA");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_af_NA() {
	var info = new LocaleInfo("af-NA");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for agq-CM

function testLocaleInfoGetDecimalSeparatorfor_agq_CM() {
	var info = new LocaleInfo("agq-CM");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_agq_CM() {
	var info = new LocaleInfo("agq-CM");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_agq_CM() {
	var info = new LocaleInfo("agq-CM");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_agq_CM() {
	var info = new LocaleInfo("agq-CM");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_agq_CM() {
	var info = new LocaleInfo("agq-CM");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_agq_CM() {
	var info = new LocaleInfo("agq-CM");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_agq_CM() {
	var info = new LocaleInfo("agq-CM");
	assertNotNull(info);

	assertEquals("-{n}{s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_agq_CM() {
	var info = new LocaleInfo("agq-CM");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_agq_CM() {
	var info = new LocaleInfo("agq-CM");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_agq_CM() {
	var info = new LocaleInfo("agq-CM");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ak-GH

function testLocaleInfoGetDecimalSeparatorfor_ak_GH() {
	var info = new LocaleInfo("ak-GH");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ak_GH() {
	var info = new LocaleInfo("ak-GH");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ak_GH() {
	var info = new LocaleInfo("ak-GH");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ak_GH() {
	var info = new LocaleInfo("ak-GH");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ak_GH() {
	var info = new LocaleInfo("ak-GH");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ak_GH() {
	var info = new LocaleInfo("ak-GH");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ak_GH() {
	var info = new LocaleInfo("ak-GH");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ak_GH() {
	var info = new LocaleInfo("ak-GH");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ak_GH() {
	var info = new LocaleInfo("ak-GH");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ak_GH() {
	var info = new LocaleInfo("ak-GH");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for am-ET

function testLocaleInfoGetDecimalSeparatorfor_am_ET() {
	var info = new LocaleInfo("am-ET");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_am_ET() {
	var info = new LocaleInfo("am-ET");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_am_ET() {
	var info = new LocaleInfo("am-ET");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_am_ET() {
	var info = new LocaleInfo("am-ET");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_am_ET() {
	var info = new LocaleInfo("am-ET");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_am_ET() {
	var info = new LocaleInfo("am-ET");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_am_ET() {
	var info = new LocaleInfo("am-ET");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_am_ET() {
	var info = new LocaleInfo("am-ET");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_am_ET() {
	var info = new LocaleInfo("am-ET");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_am_ET() {
	var info = new LocaleInfo("am-ET");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test casess for ar-AE

function testLocaleInfoGetDecimalSeparatorfor_ar_AE() {
	var info = new LocaleInfo("ar-AE");
	assertNotNull(info);
	assertEquals("٫", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ar_AE() {
	var info = new LocaleInfo("ar-AE");
	assertNotNull(info);

	assertEquals("٬", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ar_AE() {
	var info = new LocaleInfo("ar-AE");
	assertNotNull(info);

	assertEquals("{n} ٪؜", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ar_AE() {
	var info = new LocaleInfo("ar-AE");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ar_AE() {
	var info = new LocaleInfo("ar-AE");
	assertNotNull(info);

	assertEquals("؜-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ar_AE() {
	var info = new LocaleInfo("ar-AE");
	assertNotNull(info);

	assertEquals("؜-{n} ٪؜", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ar_AE() {
	var info = new LocaleInfo("ar-AE");
	assertNotNull(info);

	assertEquals("؜-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ar_AE() {
	var info = new LocaleInfo("ar-AE");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ar_AE() {
	var info = new LocaleInfo("ar-AE");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ar_AE() {
	var info = new LocaleInfo("ar-AE");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ar-DZ

function testLocaleInfoGetDecimalSeparatorfor_ar_DZ() {
	var info = new LocaleInfo("ar-DZ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ar_DZ() {
	var info = new LocaleInfo("ar-DZ");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ar_DZ() {
	var info = new LocaleInfo("ar-DZ");
	assertNotNull(info);

	assertEquals("{n}‎%‎", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ar_DZ() {
	var info = new LocaleInfo("ar-DZ");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ar_DZ() {
	var info = new LocaleInfo("ar-DZ");
	assertNotNull(info);

	assertEquals("‎-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ar_DZ() {
	var info = new LocaleInfo("ar-DZ");
	assertNotNull(info);

	assertEquals("‎-{n}‎%‎", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ar_DZ() {
	var info = new LocaleInfo("ar-DZ");
	assertNotNull(info);

	assertEquals("‎-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ar_DZ() {
	var info = new LocaleInfo("ar-DZ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ar_DZ() {
	var info = new LocaleInfo("ar-DZ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ar_DZ() {
	var info = new LocaleInfo("ar-DZ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ar-TN

function testLocaleInfoGetDecimalSeparatorfor_ar_TN() {
	var info = new LocaleInfo("ar-TN");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ar_TN() {
	var info = new LocaleInfo("ar-TN");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ar_TN() {
	var info = new LocaleInfo("ar-TN");
	assertNotNull(info);

	assertEquals("{n}‎%‎", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ar_TN() {
	var info = new LocaleInfo("ar-TN");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ar_TN() {
	var info = new LocaleInfo("ar-TN");
	assertNotNull(info);

	assertEquals("‎-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ar_TN() {
	var info = new LocaleInfo("ar-TN");
	assertNotNull(info);

	assertEquals("‎-{n}‎%‎", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ar_TN() {
	var info = new LocaleInfo("ar-TN");
	assertNotNull(info);

	assertEquals("‎-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ar_TN() {
	var info = new LocaleInfo("ar-TN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ar_TN() {
	var info = new LocaleInfo("ar-TN");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ar_TN() {
	var info = new LocaleInfo("ar-TN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for as-IN

function testLocaleInfoGetDecimalSeparatorfor_as_IN() {
	var info = new LocaleInfo("as-IN");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_as_IN() {
	var info = new LocaleInfo("as-IN");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_as_IN() {
	var info = new LocaleInfo("as-IN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_as_IN() {
	var info = new LocaleInfo("as-IN");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_as_IN() {
	var info = new LocaleInfo("as-IN");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_as_IN() {
	var info = new LocaleInfo("as-IN");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_as_IN() {
	var info = new LocaleInfo("as-IN");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_as_IN() {
	var info = new LocaleInfo("as-IN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_as_IN() {
	var info = new LocaleInfo("as-IN");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_as_IN() {
	var info = new LocaleInfo("as-IN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for asa_TZ

function testLocaleInfoGetDecimalSeparatorfor_asa_TZ() {
	var info = new LocaleInfo("asa-TZ");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_asa_TZ() {
	var info = new LocaleInfo("asa-TZ");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_asa_TZ() {
	var info = new LocaleInfo("asa-TZ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_asa_TZ() {
	var info = new LocaleInfo("asa-TZ");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_asa_TZ() {
	var info = new LocaleInfo("asa-TZ");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_asa_TZ() {
	var info = new LocaleInfo("asa-TZ");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_asa_TZ() {
	var info = new LocaleInfo("asa-TZ");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_asa_TZ() {
	var info = new LocaleInfo("asa-TZ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_asa_TZ() {
	var info = new LocaleInfo("asa-TZ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_asa_TZ() {
	var info = new LocaleInfo("asa-TZ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for az-AZ

function testLocaleInfoGetDecimalSeparatorfor_az_AZ() {
	var info = new LocaleInfo("az-AZ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_az_AZ() {
	var info = new LocaleInfo("az-AZ");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_az_AZ() {
	var info = new LocaleInfo("az-AZ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_az_AZ() {
	var info = new LocaleInfo("az-AZ");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_az_AZ() {
	var info = new LocaleInfo("az-AZ");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_az_AZ() {
	var info = new LocaleInfo("az-AZ");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_az_AZ() {
	var info = new LocaleInfo("az-AZ");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_az_AZ() {
	var info = new LocaleInfo("az-AZ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_az_AZ() {
	var info = new LocaleInfo("az-AZ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_az_AZ() {
	var info = new LocaleInfo("az-AZ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for be-BY

function testLocaleInfoGetDecimalSeparatorfor_be_BY() {
	var info = new LocaleInfo("be-BY");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_be_BY() {
	var info = new LocaleInfo("be-BY");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_be_BY() {
	var info = new LocaleInfo("be-BY");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_be_BY() {
	var info = new LocaleInfo("be-BY");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_be_BY() {
	var info = new LocaleInfo("be-BY");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_be_BY() {
	var info = new LocaleInfo("be-BY");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_be_BY() {
	var info = new LocaleInfo("be-BY");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_be_BY() {
	var info = new LocaleInfo("be-BY");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_be_BY() {
	var info = new LocaleInfo("be-BY");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_be_BY() {
	var info = new LocaleInfo("be-BY");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


function testLocaleInfoGetDecimalSeparatorfor_bg_BG() {
	var info = new LocaleInfo("bg-BG");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_bg_BG() {
	var info = new LocaleInfo("bg-BG");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_bg_BG() {
	var info = new LocaleInfo("bg-BG");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_bg_BG() {
	var info = new LocaleInfo("bg-BG");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_bg_BG() {
	var info = new LocaleInfo("bg-BG");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_bg_BG() {
	var info = new LocaleInfo("bg-BG");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_bg_BG() {
	var info = new LocaleInfo("bg-BG");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_bg_BG() {
	var info = new LocaleInfo("bg-BG");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_bg_BG() {
	var info = new LocaleInfo("bg-BG");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}



function testLocaleInfoGetDecimalSeparatorfor_bm_ML() {
	var info = new LocaleInfo("bm-ML");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_bm_ML() {
	var info = new LocaleInfo("bm-ML");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_bm_ML() {
	var info = new LocaleInfo("bm-ML");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_bm_ML() {
	var info = new LocaleInfo("bm-ML");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_bm_ML() {
	var info = new LocaleInfo("bm-ML");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_bm_ML() {
	var info = new LocaleInfo("bm-ML");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_bm_ML() {
	var info = new LocaleInfo("bm-ML");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_bm_ML() {
	var info = new LocaleInfo("bm-ML");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_bm_ML() {
	var info = new LocaleInfo("bm-ML");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_bm_ML() {
	var info = new LocaleInfo("bm-ML");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

function testLocaleInfoGetDecimalSeparatorfor_bn_IN() {
	var info = new LocaleInfo("bn-IN");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_bn_IN() {
	var info = new LocaleInfo("bn-IN");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_bn_IN() {
	var info = new LocaleInfo("bn-IN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_bn_IN() {
	var info = new LocaleInfo("bn-IN");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_bn_IN() {
	var info = new LocaleInfo("bn-IN");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_bn_IN() {
	var info = new LocaleInfo("bn-IN");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_bn_IN() {
	var info = new LocaleInfo("bn-IN");
	assertNotNull(info);

	assertEquals("-{n}{s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_bn_IN() {
	var info = new LocaleInfo("bn-IN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_bn_IN() {
	var info = new LocaleInfo("bn-IN");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_bn_IN() {
	var info = new LocaleInfo("bn-IN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for br-FR

function testLocaleInfoGetDecimalSeparatorfor_br_FR() {
	var info = new LocaleInfo("br-FR");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_br_FR() {
	var info = new LocaleInfo("br-FR");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_br_FR() {
	var info = new LocaleInfo("br-FR");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_br_FR() {
	var info = new LocaleInfo("br-FR");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_br_FR() {
	var info = new LocaleInfo("br-FR");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_br_FR() {
	var info = new LocaleInfo("br-FR");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_br_FR() {
	var info = new LocaleInfo("br-FR");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_br_FR() {
	var info = new LocaleInfo("br-FR");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_br_FR() {
	var info = new LocaleInfo("br-FR");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_br_FR() {
	var info = new LocaleInfo("br-FR");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for bs-BA-Cyrl

function testLocaleInfoGetDecimalSeparatorfor_bs_Cyrl_BA() {
	var info = new LocaleInfo("bs-BA-Cyrl");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_bs_Cyrl_BA() {
	var info = new LocaleInfo("bs-BA-Cyrl");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_bs_Cyrl_BA() {
	var info = new LocaleInfo("bs-BA-Cyrl");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_bs_Cyrl_BA() {
	var info = new LocaleInfo("bs-BA-Cyrl");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_bs_Cyrl_BA() {
	var info = new LocaleInfo("bs-BA-Cyrl");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_bs_Cyrl_BA() {
	var info = new LocaleInfo("bs-BA-Cyrl");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_bs_Cyrl_BA() {
	var info = new LocaleInfo("bs-BA-Cyrl");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_bs_Cyrl_BA() {
	var info = new LocaleInfo("bs-BA-Cyrl");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_bs_Cyrl_BA() {
	var info = new LocaleInfo("bs-BA-Cyrl");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_bs_Cyrl_BA() {
	var info = new LocaleInfo("bs-BA-Cyrl");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

function testLocaleInfoGetDecimalSeparatorfor_bs_BS() {
	var info = new LocaleInfo("bs-BS");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_bs_BS() {
	var info = new LocaleInfo("bs-BS");
	assertNotNull(info);
	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_bs_BS() {
	var info = new LocaleInfo("bs-BS");
	assertNotNull(info);
	assertEquals("{n} %", info.getPercentageFormat());

}

function testLocaleInfoGetNegativeNumberFormat_bs_BS() {
	var info = new LocaleInfo("bs-BS");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_bs_BS() {
	var info = new LocaleInfo("bs-BS");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_bs_BS() {
	var info = new LocaleInfo("bs-BS");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_bs_BS() {

	var info = new LocaleInfo("bs-BS");
	assertNotNull(info);
	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_bs_BS() {
	var info = new LocaleInfo("bs-BS");
	assertNotNull(info);
	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_bs_BS() {

	var info = new LocaleInfo("bs-BS");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());

}

//test cases for bs-ME

function testLocaleInfoGetDecimalSeparatorfor_bs_ME() {
	var info = new LocaleInfo("bs-ME");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_bs_ME() {
	var info = new LocaleInfo("bs-ME");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_bs_ME() {
	var info = new LocaleInfo("bs-ME");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_bs_ME() {
	var info = new LocaleInfo("bs-ME");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_bs_ME() {
	var info = new LocaleInfo("bs-ME");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_bs_ME() {
	var info = new LocaleInfo("bs-ME");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_bs_ME() {
	var info = new LocaleInfo("bs-ME");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}
function testLocaleInfoGetPrimaryGroupingDigits_bs_ME() {
	var info = new LocaleInfo("bs-ME");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_bs_ME() {
	var info = new LocaleInfo("bs-ME");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_bs_ME() {
	var info = new LocaleInfo("bs-ME");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for ca-FR

function testLocaleInfoGetDecimalSeparatorfor_ca_FR() {
	var info = new LocaleInfo("ca-FR");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ca_FR() {
	var info = new LocaleInfo("ca-FR");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ca_FR() {
	var info = new LocaleInfo("ca-FR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ca_FR() {
	var info = new LocaleInfo("ca-FR");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ca_FR() {
	var info = new LocaleInfo("ca-FR");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ca_FR() {
	var info = new LocaleInfo("ca-FR");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ca_FR() {
	var info = new LocaleInfo("ca-FR");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}
function testLocaleInfoGetPrimaryGroupingDigits_ca_FR() {
	var info = new LocaleInfo("ca-FR");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ca_FR() {
	var info = new LocaleInfo("ca-FR");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ca_FR() {
	var info = new LocaleInfo("ca-FR");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}
//test cases for de-AT

function testLocaleInfoGetDecimalSeparatorfor_de_AT() {
	var info = new LocaleInfo("de-AT");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_de_AT() {
	var info = new LocaleInfo("de-AT");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_de_AT() {
	var info = new LocaleInfo("de-AT");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_de_AT() {
	var info = new LocaleInfo("de-AT");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_de_AT() {
	var info = new LocaleInfo("de-AT");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_de_AT() {
	var info = new LocaleInfo("de-AT");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_de_AT() {
	var info = new LocaleInfo("de-AT");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}
function testLocaleInfoGetPrimaryGroupingDigits_de_AT() {
	var info = new LocaleInfo("de-AT");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_de_AT() {
	var info = new LocaleInfo("de-AT");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_de_AT() {
	var info = new LocaleInfo("de-AT");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for fa

function testLocaleInfoGetDecimalSeparatorfor_fa() {
	var info = new LocaleInfo("fa-IR");
	assertNotNull(info);
	assertEquals("٫", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fa() {
	var info = new LocaleInfo("fa-IR");
	assertNotNull(info);

	assertEquals("٬", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fa() {
	var info = new LocaleInfo("fa-IR");
	assertNotNull(info);

	assertEquals("‎٪ {n}", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fa() {
	var info = new LocaleInfo("fa-IR");
	assertNotNull(info);

	assertEquals("{n} ؜{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_fa() {
	var info = new LocaleInfo("fa-IR");
	assertNotNull(info);

	assertEquals("‎−{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_fa() {
	var info = new LocaleInfo("fa-IR");
	assertNotNull(info);

	assertEquals("‎٪ -{n}", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_fa() {
	var info = new LocaleInfo("fa-IR");
	assertNotNull(info);

	assertEquals("؜-{n} ؜{s}", info.getCurrencyFormats().commonNegative);
}
function testLocaleInfoGetPrimaryGroupingDigits_fa() {
	var info = new LocaleInfo("fa-IR");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fa() {
	var info = new LocaleInfo("fa-IR");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fa() {
	var info = new LocaleInfo("fa-IR");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fa-AF

function testLocaleInfoGetDecimalSeparatorfor_fa_AF() {
	var info = new LocaleInfo("fa-AF");
	assertNotNull(info);
	assertEquals("٫", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fa_AF() {
	var info = new LocaleInfo("fa-AF");
	assertNotNull(info);

	assertEquals("٬", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fa_AF() {
	var info = new LocaleInfo("fa-AF");
	assertNotNull(info);

	assertEquals("‎٪ {n}", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fa_AF() {
	var info = new LocaleInfo("fa-AF");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_fa_AF() {
	var info = new LocaleInfo("fa-AF");
	assertNotNull(info);

	assertEquals("‎−{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_fa_AF() {
	var info = new LocaleInfo("fa-AF");
	assertNotNull(info);

	assertEquals("‎٪ -{n}", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_fa_AF() {
	var info = new LocaleInfo("fa-AF");
	assertNotNull(info);

	assertEquals("‎−{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_fa_AF() {
	var info = new LocaleInfo("fa-AF");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fa_AF() {
	var info = new LocaleInfo("fa-AF");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fa_AF() {
	var info = new LocaleInfo("fa-AF");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}



//test cases for ff-SN

function testLocaleInfoGetDecimalSeparatorfor_ff_SN() {
	var info = new LocaleInfo("ff-SN");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ff_SN() {
	var info = new LocaleInfo("ff-SN");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ff_SN() {
	var info = new LocaleInfo("ff-SN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ff_SN() {
	var info = new LocaleInfo("ff-SN");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}
function testLocaleInfoGetNegativeNumberFormat_ff_SN() {
	var info = new LocaleInfo("ff-SN");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ff_SN() {
	var info = new LocaleInfo("ff-SN");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ff_SN() {
	var info = new LocaleInfo("ff-SN");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}


function testLocaleInfoGetPrimaryGroupingDigits_ff_SN() {
	var info = new LocaleInfo("ff-SN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ff_SN() {
	var info = new LocaleInfo("ff-SN");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ff_SN() {
	var info = new LocaleInfo("ff-SN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for fj-FJ

function testLocaleInfoGetDecimalSeparatorfor_fj_FJ() {
	var info = new LocaleInfo("fj-FJ");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fj_FJ() {
	var info = new LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fj_FJ() {
	var info = new LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fj_FJ() {
	var info = new LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_fj_FJ() {
	var info = new LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_fj_FJ() {
	var info = new LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_fj_FJ() {
	var info = new LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_fj_FJ() {
	var info = new LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fj_FJ() {
	var info = new LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fj_FJsss() {
	var info = new LocaleInfo("fj-FJ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fo

function testLocaleInfoGetDecimalSeparatorfor_fo() {
	var info = new LocaleInfo("fo");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fo() {
	var info = new LocaleInfo("fo");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fo() {
	var info = new LocaleInfo("fo");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fo() {
	var info = new LocaleInfo("fo");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_fo() {
	var info = new LocaleInfo("fo");
	assertNotNull(info);

	assertEquals("−{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_fo() {
	var info = new LocaleInfo("fo");
	assertNotNull(info);

	assertEquals("−{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_fo() {
	var info = new LocaleInfo("fo");
	assertNotNull(info);

	assertEquals("−{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_fo() {
	var info = new LocaleInfo("fo");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fo() {
	var info = new LocaleInfo("fo");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fo() {
	var info = new LocaleInfo("fo");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for fr-AD

function testLocaleInfoGetDecimalSeparatorfor_fr_AD() {
	var info = new LocaleInfo("fr-AD");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_AD() {
	var info = new LocaleInfo("fr-AD");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_AD() {
	var info = new LocaleInfo("fr-AD");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_AD() {
	var info = new LocaleInfo("fr-AD");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_fr_AD() {
	var info = new LocaleInfo("fr-AD");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_fr_AD() {
	var info = new LocaleInfo("fr-AD");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_fr_AD() {
	var info = new LocaleInfo("fr-AD");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_fr_AD() {
	var info = new LocaleInfo("fr-AD");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fr_AD() {
	var info = new LocaleInfo("fr-AD");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fr_AD() {
	var info = new LocaleInfo("fr-AD");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fr-BE

function testLocaleInfoGetDecimalSeparatorfor_fr_BE() {
	var info = new LocaleInfo("fr-BE");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_BE() {
	var info = new LocaleInfo("fr-BE");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_BE() {
	var info = new LocaleInfo("fr-BE");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_BE() {
	var info = new LocaleInfo("fr-BE");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}
function testLocaleInfoGetNegativeNumberFormat_fr_BE() {
	var info = new LocaleInfo("fr-BE");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_fr_BE() {
	var info = new LocaleInfo("fr-BE");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_fr_BE() {
	var info = new LocaleInfo("fr-BE");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}


function testLocaleInfoGetPrimaryGroupingDigits_fr_BE() {
	var info = new LocaleInfo("fr-BE");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fr_BE() {
	var info = new LocaleInfo("fr-BE");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fr_BE() {
	var info = new LocaleInfo("fr-BE");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fr-CH

function testLocaleInfoGetDecimalSeparatorfor_fr_CH() {
	var info = new LocaleInfo("fr-CH");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_CH() {
	var info = new LocaleInfo("fr-CH");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetNegativeNumberFormat_fr_CH() {
	var info = new LocaleInfo("fr-CH");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_fr_CH() {
	var info = new LocaleInfo("fr-CH");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_fr_CH() {
	var info = new LocaleInfo("fr-CH");
	assertNotNull(info);

	assertEquals("{s}-{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPercentageFormat_fr_CH() {
	var info = new LocaleInfo("fr-CH");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_CH() {
	var info = new LocaleInfo("fr-CH");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_fr_CH() {
	var info = new LocaleInfo("fr-CH");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fr_CH() {
	var info = new LocaleInfo("fr-CH");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fr_CH() {
	var info = new LocaleInfo("fr-CH");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fr-DZ

function testLocaleInfoGetDecimalSeparatorfor_fr_DZ() {
	var info = new LocaleInfo("fr-DZ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_DZ() {
	var info = new LocaleInfo("fr-DZ");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_DZ() {
	var info = new LocaleInfo("fr-DZ");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_DZ() {
	var info = new LocaleInfo("fr-DZ");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_fr_DZ() {
	var info = new LocaleInfo("fr-DZ");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_fr_DZ() {
	var info = new LocaleInfo("fr-DZ");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_fr_DZ() {
	var info = new LocaleInfo("fr-DZ");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_fr_DZ() {
	var info = new LocaleInfo("fr-DZ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fr_DZ() {
	var info = new LocaleInfo("fr-DZ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fr_DZ() {
	var info = new LocaleInfo("fr-DZ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fr-LU

function testLocaleInfoGetDecimalSeparatorfor_fr_LU() {
	var info = new LocaleInfo("fr-LU");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_LU() {
	var info = new LocaleInfo("fr-LU");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_LU() {
	var info = new LocaleInfo("fr-LU");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_LU() {
	var info = new LocaleInfo("fr-LU");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_fr_LU() {
	var info = new LocaleInfo("fr-LU");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_fr_LU() {
	var info = new LocaleInfo("fr-LU");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_fr_LU() {
	var info = new LocaleInfo("fr-LU");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_fr_LU() {
	var info = new LocaleInfo("fr-LU");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fr_LU() {
	var info = new LocaleInfo("fr-LU");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fr_LU() {
	var info = new LocaleInfo("fr-LU");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fr-MG

function testLocaleInfoGetDecimalSeparatorfor_fr_MG() {
	var info = new LocaleInfo("fr-MG");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_MG() {
	var info = new LocaleInfo("fr-MG");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_MG() {
	var info = new LocaleInfo("fr-MG");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_MG() {
	var info = new LocaleInfo("fr-MG");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_fr_MG() {
	var info = new LocaleInfo("fr-MG");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_fr_MG() {
	var info = new LocaleInfo("fr-MG");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_fr_MG() {
	var info = new LocaleInfo("fr-MG");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_fr_MG() {
	var info = new LocaleInfo("fr-MG");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fr_MG() {
	var info = new LocaleInfo("fr-MG");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fr_MG() {
	var info = new LocaleInfo("fr-MG");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fr-SN

function testLocaleInfoGetDecimalSeparatorfor_fr_SN() {
	var info = new LocaleInfo("fr-SN");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_SN() {
	var info = new LocaleInfo("fr-SN");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_SN() {
	var info = new LocaleInfo("fr-SN");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_SN() {
	var info = new LocaleInfo("fr-SN");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_fr_SN() {
	var info = new LocaleInfo("fr-SN");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_fr_SN() {
	var info = new LocaleInfo("fr-SN");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_fr_SN() {
	var info = new LocaleInfo("fr-SN");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_fr_SN() {
	var info = new LocaleInfo("fr-SN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fr_SN() {
	var info = new LocaleInfo("fr-SN");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fr_SN() {
	var info = new LocaleInfo("fr-SN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for fr-YT

function testLocaleInfoGetDecimalSeparatorfor_fr_YT() {
	var info = new LocaleInfo("fr-YT");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_fr_YT() {
	var info = new LocaleInfo("fr-YT");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_fr_YT() {
	var info = new LocaleInfo("fr-YT");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_fr_YT() {
	var info = new LocaleInfo("fr-YT");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_fr_YT() {
	var info = new LocaleInfo("fr-YT");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_fr_YT() {
	var info = new LocaleInfo("fr-YT");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_fr_YT() {
	var info = new LocaleInfo("fr-YT");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_fr_YT() {
	var info = new LocaleInfo("fr-YT");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_fr_YT() {
	var info = new LocaleInfo("fr-YT");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_fr_YT() {
	var info = new LocaleInfo("fr-YT");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}



//test cases for ga-IE

function testLocaleInfoGetDecimalSeparatorfor_ga_IE() {
	var info = new LocaleInfo("ga-IE");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ga_IE() {
	var info = new LocaleInfo("ga-IE");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ga_IE() {
	var info = new LocaleInfo("ga-IE");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ga_IE() {
	var info = new LocaleInfo("ga-IE");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ga_IE() {
	var info = new LocaleInfo("ga-IE");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ga_IE() {
	var info = new LocaleInfo("ga-IE");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ga_IE() {
	var info = new LocaleInfo("ga-IE");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ga_IE() {
	var info = new LocaleInfo("ga-IE");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ga_IE() {
	var info = new LocaleInfo("ga-IE");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ga_IE() {
	var info = new LocaleInfo("ga-IE");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}



//test cases for gl-ES

function testLocaleInfoGetDecimalSeparatorfor_gl_ES() {
	var info = new LocaleInfo("gl-ES");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_gl_ES() {
	var info = new LocaleInfo("gl-ES");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_gl_ES() {
	var info = new LocaleInfo("gl-ES");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_gl_ES() {
	var info = new LocaleInfo("gl-ES");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_gl_ES() {
	var info = new LocaleInfo("gl-ES");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_gl_ES() {
	var info = new LocaleInfo("gl-ES");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_gl_ES() {
	var info = new LocaleInfo("gl-ES");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_gl_ES() {
	var info = new LocaleInfo("gl-ES");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_gl_ES() {
	var info = new LocaleInfo("gl-ES");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_gl_ES() {
	var info = new LocaleInfo("gl-ES");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ha-NG-Latn

function testLocaleInfoGetDecimalSeparatorfor_ha_NG_Latn() {
	var info = new LocaleInfo("ha-NG-Latn");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ha_NG_Latn() {
	var info = new LocaleInfo("ha-NG-Latn");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ha_NG_Latn() {
	var info = new LocaleInfo("ha-NG-Latn");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ha_NG_Latn() {
	var info = new LocaleInfo("ha-NG-Latn");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ha_NG_Latn() {
	var info = new LocaleInfo("ha-NG-Latn");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ha_NG_Latn() {
	var info = new LocaleInfo("ha-NG-Latn");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ha_NG_Latn() {
	var info = new LocaleInfo("ha-NG-Latn");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ha_NG_Latn() {
	var info = new LocaleInfo("ha-NG-Latn");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ha_NG_Latn() {
	var info = new LocaleInfo("ha-NG-Latn");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ha_NG_Latn() {
	var info = new LocaleInfo("ha-NG-Latn");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for he-IL

function testLocaleInfoGetDecimalSeparatorfor_he() {
	var info = new LocaleInfo("he-IL");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_he() {
	var info = new LocaleInfo("he-IL");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_he() {
	var info = new LocaleInfo("he-IL");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_he() {
	var info = new LocaleInfo("he-IL");
	assertNotNull(info);

	assertEquals("‏{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_he() {
	var info = new LocaleInfo("he-IL");
	assertNotNull(info);

	assertEquals("‎-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_he() {
	var info = new LocaleInfo("he-IL");
	assertNotNull(info);

	assertEquals("‎-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_he() {
	var info = new LocaleInfo("he-IL");
	assertNotNull(info);

	assertEquals("‏-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_he() {
	var info = new LocaleInfo("he-IL");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_he() {
	var info = new LocaleInfo("he-IL");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_he() {
	var info = new LocaleInfo("he-IL");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for hi-IN

function testLocaleInfoGetDecimalSeparatorfor_hi_IN() {
	var info = new LocaleInfo("hi-IN");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_hi_IN() {
	var info = new LocaleInfo("hi-IN");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_hi_IN() {
	var info = new LocaleInfo("hi-IN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_hi_IN() {
	var info = new LocaleInfo("hi-IN");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_hi_IN() {
	var info = new LocaleInfo("hi-IN");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_hi_IN() {
	var info = new LocaleInfo("hi-IN");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_hi_IN() {
	var info = new LocaleInfo("hi-IN");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_hi_IN() {
	var info = new LocaleInfo("hi-IN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_hi_IN() {
	var info = new LocaleInfo("hi-IN");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_hi_IN() {
	var info = new LocaleInfo("hi-IN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for hr-HR

function testLocaleInfoGetDecimalSeparatorfor_hr_HR() {
	var info = new LocaleInfo("hr-HR");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_hr_HR() {
	var info = new LocaleInfo("hr-HR");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_hr_HR() {
	var info = new LocaleInfo("hr-HR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_hr_HR() {
	var info = new LocaleInfo("hr-HR");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_hr_HR() {
	var info = new LocaleInfo("hr-HR");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_hr_HR() {
	var info = new LocaleInfo("hr-HR");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_hr_HR() {
	var info = new LocaleInfo("hr-HR");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_hr_HR() {
	var info = new LocaleInfo("hr-HR");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_hr_HR() {
	var info = new LocaleInfo("hr-HR");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_hr_HR() {
	var info = new LocaleInfo("hr-HR");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for hy-AZ

function testLocaleInfoGetDecimalSeparatorfor_hy_AZ() {
	var info = new LocaleInfo("hy-AZ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_hy_AZ() {
	var info = new LocaleInfo("hy-AZ");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_hy_AZ() {
	var info = new LocaleInfo("hy-AZ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_hy_AZ() {
	var info = new LocaleInfo("hy-AZ");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_hy_AZ() {
	var info = new LocaleInfo("hy-AZ");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_hy_AZ() {
	var info = new LocaleInfo("hy-AZ");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_hy_AZ() {
	var info = new LocaleInfo("hy-AZ");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_hy_AZ() {
	var info = new LocaleInfo("hy-AZ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_hy_AZ() {
	var info = new LocaleInfo("hy-AZ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_hy_AZ() {
	var info = new LocaleInfo("hy-AZ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}




//test cases for id-MY

function testLocaleInfoGetDecimalSeparatorfor_id_MY() {
	var info = new LocaleInfo("id-MY");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_id_MY() {
	var info = new LocaleInfo("id-MY");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_id_MY() {
	var info = new LocaleInfo("id-MY");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_id_MY() {
	var info = new LocaleInfo("id-MY");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_id_MY() {
	var info = new LocaleInfo("id-MY");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_id_MY() {
	var info = new LocaleInfo("id-MY");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_id_MY() {
	var info = new LocaleInfo("id-MY");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_id_MY() {
	var info = new LocaleInfo("id-MY");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_id_MY() {
	var info = new LocaleInfo("id-MY");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_id_MY() {
	var info = new LocaleInfo("id-MY");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for it-CH

function testLocaleInfoGetDecimalSeparatorfor_it_CH() {
	var info = new LocaleInfo("it-CH");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_it_CH() {
	var info = new LocaleInfo("it-CH");
	assertNotNull(info);

	assertEquals("'", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_it_CH() {
	var info = new LocaleInfo("it-CH");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_it_CH() {
	var info = new LocaleInfo("it-CH");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_it_CH() {
	var info = new LocaleInfo("it-CH");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_it_CH() {
	var info = new LocaleInfo("it-CH");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_it_CH() {
	var info = new LocaleInfo("it-CH");
	assertNotNull(info);

	assertEquals("{s}-{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_it_CH() {
	var info = new LocaleInfo("it-CH");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_it_CH() {
	var info = new LocaleInfo("it-CH");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_it_CH() {
	var info = new LocaleInfo("it-CH");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for it-SM

function testLocaleInfoGetDecimalSeparatorfor_it_SM() {
	var info = new LocaleInfo("it-SM");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_it_SM() {
	var info = new LocaleInfo("it-SM");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_it_SM() {
	var info = new LocaleInfo("it-SM");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_it_SM() {
	var info = new LocaleInfo("it-SM");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_it_SM() {
	var info = new LocaleInfo("it-SM");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_it_SM() {
	var info = new LocaleInfo("it-SM");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_it_SM() {
	var info = new LocaleInfo("it-SM");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_it_SM() {
	var info = new LocaleInfo("it-SM");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_it_SM() {
	var info = new LocaleInfo("it-SM");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_it_SM() {
	var info = new LocaleInfo("it-SM");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for ka-IR

function testLocaleInfoGetDecimalSeparatorfor_ka_IR() {
	var info = new LocaleInfo("ka-IR");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ka_IR() {
	var info = new LocaleInfo("ka-IR");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ka_IR() {
	var info = new LocaleInfo("ka-IR");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ka_IR() {
	var info = new LocaleInfo("ka-IR");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ka_IR() {
	var info = new LocaleInfo("ka-IR");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ka_IR() {
	var info = new LocaleInfo("ka-IR");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ka_IR() {
	var info = new LocaleInfo("ka-IR");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ka_IR() {
	var info = new LocaleInfo("ka-IR");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ka_IR() {
	var info = new LocaleInfo("ka-IR");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ka_IR() {
	var info = new LocaleInfo("ka-IR");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for kk-KZ-Cyrl

function testLocaleInfoGetDecimalSeparatorfor_kk_KZ_Cyrl() {
	var info = new LocaleInfo("kk-KZ-Cyrl");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_kk_KZ_Cyrl() {
	var info = new LocaleInfo("kk-KZ-Cyrl");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_kk_KZ_Cyrl() {
	var info = new LocaleInfo("kk-KZ-Cyrl");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_kk_KZ_Cyrl() {
	var info = new LocaleInfo("kk-KZ-Cyrl");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_kk_KZ_Cyrl() {
	var info = new LocaleInfo("kk-KZ-Cyrl");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_kk_KZ_Cyrl() {
	var info = new LocaleInfo("kk-KZ-Cyrl");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_kk_KZ_Cyrl() {
	var info = new LocaleInfo("kk-KZ-Cyrl");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_kk_KZ_Cyrl() {
	var info = new LocaleInfo("kk-KZ-Cyrl");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_kk_KZ_Cyrl() {
	var info = new LocaleInfo("kk-KZ-Cyrl");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_kk_KZ_Cyrl() {
	var info = new LocaleInfo("kk-KZ-Cyrl");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for ko-KR

function testLocaleInfoGetDecimalSeparatorfor_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for ks-Arab-IN

function testLocaleInfoGetDecimalSeparatorfor_ks_Arab_IN() {
	var info = new LocaleInfo("ks-Arab-IN");
	assertNotNull(info);
	assertEquals("٫", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ks_Arab_IN() {
	var info = new LocaleInfo("ks-Arab-IN");
	assertNotNull(info);

	assertEquals("٬", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ks_Arab_IN() {
	var info = new LocaleInfo("ks-Arab-IN");
	assertNotNull(info);

	assertEquals("{n}٪", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ks_Arab_IN() {
	var info = new LocaleInfo("ks-Arab-IN");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ks_Arab_IN() {
	var info = new LocaleInfo("ks-Arab-IN");
	assertNotNull(info);

	assertEquals("‎-‎{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ks_Arab_IN() {
	var info = new LocaleInfo("ks-Arab-IN");
	assertNotNull(info);

	assertEquals("‎-‎{n}٪", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ks_Arab_IN() {
	var info = new LocaleInfo("ks-Arab-IN");
	assertNotNull(info);

	assertEquals("‎-‎{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ks_Arab_IN() {
	var info = new LocaleInfo("ks-Arab-IN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ks_Arab_IN() {
	var info = new LocaleInfo("ks-Arab-IN");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ks_Arab_IN() {
	var info = new LocaleInfo("ks-Arab-IN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ku-IQ

function testLocaleInfoGetDecimalSeparatorfor_ku() {
	var info = new LocaleInfo("ku-IQ");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ku() {
	var info = new LocaleInfo("ku-IQ");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ku() {
	var info = new LocaleInfo("ku-IQ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ku() {
	var info = new LocaleInfo("ku-IQ");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ku() {
	var info = new LocaleInfo("ku-IQ");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ku() {
	var info = new LocaleInfo("ku-IQ");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ku() {
	var info = new LocaleInfo("ku-IQ");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ku() {
	var info = new LocaleInfo("ku-IQ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ku() {
	var info = new LocaleInfo("ku-IQ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ku() {
	var info = new LocaleInfo("ku-IQ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ku-IR

function testLocaleInfoGetDecimalSeparatorfor_ku_IR() {
	var info = new LocaleInfo("ku-IR");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ku_IR() {
	var info = new LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ku_IR() {
	var info = new LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ku_IR() {
	var info = new LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ku_IR() {
	var info = new LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ku_IR() {
	var info = new LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ku_IR() {
	var info = new LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ku_IR() {
	var info = new LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ku_IR() {
	var info = new LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ku_IR() {
	var info = new LocaleInfo("ku-IR");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for lg-UG

function testLocaleInfoGetDecimalSeparatorfor_lg_UG() {
	var info = new LocaleInfo("lg-UG");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_lg_UG() {
	var info = new LocaleInfo("lg-UG");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_lg_UG() {
	var info = new LocaleInfo("lg-UG");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_lg_UG() {
	var info = new LocaleInfo("lg-UG");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_lg_UG() {
	var info = new LocaleInfo("lg-UG");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_lg_UG() {
	var info = new LocaleInfo("lg-UG");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_lg_UG() {
	var info = new LocaleInfo("lg-UG");
	assertNotNull(info);

	assertEquals("-{n}{s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_lg_UG() {
	var info = new LocaleInfo("lg-UG");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_lg_UG() {
	var info = new LocaleInfo("lg-UG");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_lg_UG() {
	var info = new LocaleInfo("lg-UG");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ln-CF

function testLocaleInfoGetDecimalSeparatorfor_ln_CF() {
	var info = new LocaleInfo("ln-CF");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ln_CF() {
	var info = new LocaleInfo("ln-CF");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ln_CF() {
	var info = new LocaleInfo("ln-CF");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ln_CF() {
	var info = new LocaleInfo("ln-CF");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ln_CF() {
	var info = new LocaleInfo("ln-CF");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ln_CF() {
	var info = new LocaleInfo("ln-CF");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ln_CF() {
	var info = new LocaleInfo("ln-CF");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ln_CF() {
	var info = new LocaleInfo("ln-CF");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ln_CF() {
	var info = new LocaleInfo("ln-CF");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ln_CF() {
	var info = new LocaleInfo("ln-CF");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for lt-LT

function testLocaleInfoGetDecimalSeparatorfor_lt() {
	var info = new LocaleInfo("lt-LT");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_lt() {
	var info = new LocaleInfo("lt-LT");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_lt() {
	var info = new LocaleInfo("lt-LT");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_lt() {
	var info = new LocaleInfo("lt-LT");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_lt() {
	var info = new LocaleInfo("lt-LT");
	assertNotNull(info);

	assertEquals("−{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_lt() {
	var info = new LocaleInfo("lt-LT");
	assertNotNull(info);

	assertEquals("−{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_lt() {
	var info = new LocaleInfo("lt-LT");
	assertNotNull(info);

	assertEquals("−{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_lt() {
	var info = new LocaleInfo("lt-LT");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_lt() {
	var info = new LocaleInfo("lt-LT");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_lt() {
	var info = new LocaleInfo("lt-LT");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for mi-CK

function testLocaleInfoGetDecimalSeparatorfor_mi_CK() {
	var info = new LocaleInfo("mi-CK");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_mi_CK() {
	var info = new LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_mi_CK() {
	var info = new LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_mi_CK() {
	var info = new LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_mi_CK() {
	var info = new LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_mi_CK() {
	var info = new LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_mi_CK() {
	var info = new LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_mi_CK() {
	var info = new LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_mi_CK() {
	var info = new LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_mi_CK() {
	var info = new LocaleInfo("mi-CK");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for mk-MK

function testLocaleInfoGetDecimalSeparatorfor_mk() {
	var info = new LocaleInfo("mk-MK");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_mk() {
	var info = new LocaleInfo("mk-MK");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_mk() {
	var info = new LocaleInfo("mk-MK");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_mk() {
	var info = new LocaleInfo("mk-MK");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_mk() {
	var info = new LocaleInfo("mk-MK");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_mk() {
	var info = new LocaleInfo("mk-MK");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_mk() {
	var info = new LocaleInfo("mk-MK");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_mk() {
	var info = new LocaleInfo("mk-MK");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_mk() {
	var info = new LocaleInfo("mk-MK");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_mk() {
	var info = new LocaleInfo("mk-MK");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for mn-CN

function testLocaleInfoGetDecimalSeparatorfor_mn_CN() {
	var info = new LocaleInfo("mn-CN");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_mn_CN() {
	var info = new LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_mn_CN() {
	var info = new LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_mn_CN() {
	var info = new LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_mn_CN() {
	var info = new LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_mn_CN() {
	var info = new LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_mn_CN() {
	var info = new LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_mn_CN() {
	var info = new LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_mn_CN() {
	var info = new LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_mn_CN() {
	var info = new LocaleInfo("mn-CN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ms-MY

function testLocaleInfoGetDecimalSeparatorfor_ms() {
	var info = new LocaleInfo("ms-MY");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ms() {
	var info = new LocaleInfo("ms-MY");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ms() {
	var info = new LocaleInfo("ms-MY");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ms() {
	var info = new LocaleInfo("ms-MY");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ms() {
	var info = new LocaleInfo("ms-MY");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ms() {
	var info = new LocaleInfo("ms-MY");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ms() {
	var info = new LocaleInfo("ms-MY");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ms() {
	var info = new LocaleInfo("ms-MY");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ms() {
	var info = new LocaleInfo("ms-MY");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ms() {
	var info = new LocaleInfo("ms-MY");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ms-BN

function testLocaleInfoGetDecimalSeparatorfor_ms_BN() {
	var info = new LocaleInfo("ms-BN");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ms_BN() {
	var info = new LocaleInfo("ms-BN");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ms_BN() {
	var info = new LocaleInfo("ms-BN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ms_BN() {
	var info = new LocaleInfo("ms-BN");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ms_BN() {
	var info = new LocaleInfo("ms-BN");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ms_BN() {
	var info = new LocaleInfo("ms-BN");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ms_BN() {
	var info = new LocaleInfo("ms-BN");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ms_BN() {
	var info = new LocaleInfo("ms-BN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ms_BN() {
	var info = new LocaleInfo("ms-BN");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ms_BN() {
	var info = new LocaleInfo("ms-BN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ne-IN

function testLocaleInfoGetDecimalSeparatorfor_ne_IN() {
	var info = new LocaleInfo("ne-IN");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ne_IN() {
	var info = new LocaleInfo("ne-IN");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ne_IN() {
	var info = new LocaleInfo("ne-IN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ne_IN() {
	var info = new LocaleInfo("ne-IN");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ne_IN() {
	var info = new LocaleInfo("ne-IN");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ne_IN() {
	var info = new LocaleInfo("ne-IN");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ne_IN() {
	var info = new LocaleInfo("ne-IN");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ne_IN() {
	var info = new LocaleInfo("ne-IN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ne_IN() {
	var info = new LocaleInfo("ne-IN");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ne_IN() {
	var info = new LocaleInfo("ne-IN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for nl-BE

function testLocaleInfoGetDecimalSeparatorfor_nl_BE() {
	var info = new LocaleInfo("nl-BE");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nl_BE() {
	var info = new LocaleInfo("nl-BE");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nl_BE() {
	var info = new LocaleInfo("nl-BE");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nl_BE() {
	var info = new LocaleInfo("nl-BE");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_nl_BE() {
	var info = new LocaleInfo("nl-BE");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_nl_BE() {
	var info = new LocaleInfo("nl-BE");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_nl_BE() {
	var info = new LocaleInfo("nl-BE");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_nl_BE() {
	var info = new LocaleInfo("nl-BE");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nl_BE() {
	var info = new LocaleInfo("nl-BE");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nl_BE() {
	var info = new LocaleInfo("nl-BE");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for nl-CW

function testLocaleInfoGetDecimalSeparatorfor_nl_CW() {
	var info = new LocaleInfo("nl-CW");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nl_CW() {
	var info = new LocaleInfo("nl-CW");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nl_CW() {
	var info = new LocaleInfo("nl-CW");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nl_CW() {
	var info = new LocaleInfo("nl-CW");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_nl_CW() {
	var info = new LocaleInfo("nl-CW");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_nl_CW() {
	var info = new LocaleInfo("nl-CW");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_nl_CW() {
	var info = new LocaleInfo("nl-CW");
	assertNotNull(info);

	assertEquals("{s} -{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_nl_CW() {
	var info = new LocaleInfo("nl-CW");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nl_CW() {
	var info = new LocaleInfo("nl-CW");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nl_CW() {
	var info = new LocaleInfo("nl-CW");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for nl-GF

function testLocaleInfoGetDecimalSeparatorfor_nl_GF() {
	var info = new LocaleInfo("nl-GF");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nl_GF() {
	var info = new LocaleInfo("nl-GF");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nl_GF() {
	var info = new LocaleInfo("nl-GF");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nl_GF() {
	var info = new LocaleInfo("nl-GF");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_nl_GF() {
	var info = new LocaleInfo("nl-GF");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_nl_GF() {
	var info = new LocaleInfo("nl-GF");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_nl_GF() {
	var info = new LocaleInfo("nl-GF");
	assertNotNull(info);

	assertEquals("{s} -{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_nl_GF() {
	var info = new LocaleInfo("nl-GF");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nl_GF() {
	var info = new LocaleInfo("nl-GF");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nl_GF() {
	var info = new LocaleInfo("nl-GF");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for nl-SR

function testLocaleInfoGetDecimalSeparatorfor_nl_SR() {
	var info = new LocaleInfo("nl-SR");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_nl_SR() {
	var info = new LocaleInfo("nl-SR");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_nl_SR() {
	var info = new LocaleInfo("nl-SR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_nl_SR() {
	var info = new LocaleInfo("nl-SR");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_nl_SR() {
	var info = new LocaleInfo("nl-SR");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_nl_SR() {
	var info = new LocaleInfo("nl-SR");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_nl_SR() {
	var info = new LocaleInfo("nl-SR");
	assertNotNull(info);

	assertEquals("{s} -{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_nl_SR() {
	var info = new LocaleInfo("nl-SR");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_nl_SR() {
	var info = new LocaleInfo("nl-SR");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_nl_SR() {
	var info = new LocaleInfo("nl-SR");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}



//test cases for no-BV

function testLocaleInfoGetDecimalSeparatorfor_no_BV() {
	var info = new LocaleInfo("no-BV");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_no_BV() {
	var info = new LocaleInfo("no-BV");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_no_BV() {
	var info = new LocaleInfo("no-BV");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_no_BV() {
	var info = new LocaleInfo("no-BV");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_no_BV() {
	var info = new LocaleInfo("no-BV");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_no_BV() {
	var info = new LocaleInfo("no-BV");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_no_BV() {
	var info = new LocaleInfo("no-BV");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_no_BV() {
	var info = new LocaleInfo("no-BV");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_no_BV() {
	var info = new LocaleInfo("no-BV");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_no_BV() {
	var info = new LocaleInfo("no-BV");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for no-SJ

function testLocaleInfoGetDecimalSeparatorfor_no_SJ() {
	var info = new LocaleInfo("no-SJ");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_no_SJ() {
	var info = new LocaleInfo("no-SJ");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_no_SJ() {
	var info = new LocaleInfo("no-SJ");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_no_SJ() {
	var info = new LocaleInfo("no-SJ");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_no_SJ() {
	var info = new LocaleInfo("no-SJ");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_no_SJ() {
	var info = new LocaleInfo("no-SJ");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_no_SJ() {
	var info = new LocaleInfo("no-SJ");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_no_SJ() {
	var info = new LocaleInfo("no-SJ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_no_SJ() {
	var info = new LocaleInfo("no-SJ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_no_SJ() {
	var info = new LocaleInfo("no-SJ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for om-ET

function testLocaleInfoGetDecimalSeparatorfor_om_ET() {
	var info = new LocaleInfo("om-ET");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_om_ET() {
	var info = new LocaleInfo("om-ET");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetNegativeNumberFormat_om_ET() {
	var info = new LocaleInfo("om-ET");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_om_ET() {
	var info = new LocaleInfo("om-ET");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_om_ET() {
	var info = new LocaleInfo("om-ET");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPercentageFormat_om_ET() {
	var info = new LocaleInfo("om-ET");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_om_ET() {
	var info = new LocaleInfo("om-ET");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetPrimaryGroupingDigits_om_ET() {
	var info = new LocaleInfo("om-ET");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_om_ET() {
	var info = new LocaleInfo("om-ET");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_om_ET() {
	var info = new LocaleInfo("om-ET");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for os-RU

function testLocaleInfoGetDecimalSeparatorfor_os_RU() {
	var info = new LocaleInfo("os-RU");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_os_RU() {
	var info = new LocaleInfo("os-RU");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_os_RU() {
	var info = new LocaleInfo("os-RU");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_os_RU() {
	var info = new LocaleInfo("os-RU");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_os_RU() {
	var info = new LocaleInfo("os-RU");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_os_RU() {
	var info = new LocaleInfo("os-RU");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_os_RU() {
	var info = new LocaleInfo("os-RU");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_os_RU() {
	var info = new LocaleInfo("os-RU");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_os_RU() {
	var info = new LocaleInfo("os-RU");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_os_RU() {
	var info = new LocaleInfo("os-RU");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for pa-Arab-PK

function testLocaleInfoGetDecimalSeparatorfor_pa() {
	var info = new LocaleInfo("pa-Arab-PK");
	assertNotNull(info);
	assertEquals("٫", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pa() {
	var info = new LocaleInfo("pa-Arab-PK");
	assertNotNull(info);

	assertEquals("٬", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pa() {
	var info = new LocaleInfo("pa-Arab-PK");
	assertNotNull(info);

	assertEquals("{n}٪", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pa() {
	var info = new LocaleInfo("pa-Arab-PK");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_pa() {
	var info = new LocaleInfo("pa-Arab-PK");
	assertNotNull(info);

	assertEquals("‎-‎{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_pa() {
	var info = new LocaleInfo("pa-Arab-PK");
	assertNotNull(info);

	assertEquals("‎-‎{n}٪", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_pa() {
	var info = new LocaleInfo("pa-Arab-PK");
	assertNotNull(info);

	assertEquals("‎-‎{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_pa() {
	var info = new LocaleInfo("pa-Arab-PK");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pa() {
	var info = new LocaleInfo("pa-Arab-PK");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pa() {
	var info = new LocaleInfo("pa-Arab-PK");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pt-AO

function testLocaleInfoGetDecimalSeparatorfor_pt_AO() {
	var info = new LocaleInfo("pt-AO");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_AO() {
	var info = new LocaleInfo("pt-AO");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_AO() {
	var info = new LocaleInfo("pt-AO");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_AO() {
	var info = new LocaleInfo("pt-AO");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_pt_AO() {
	var info = new LocaleInfo("pt-AO");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_pt_AO() {
	var info = new LocaleInfo("pt-AO");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_pt_AO() {
	var info = new LocaleInfo("pt-AO");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_pt_AO() {
	var info = new LocaleInfo("pt-AO");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pt_AO() {
	var info = new LocaleInfo("pt-AO");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pt_AO() {
	var info = new LocaleInfo("pt-AO");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pt-CV

function testLocaleInfoGetDecimalSeparatorfor_pt_CV() {
	var info = new LocaleInfo("pt-CV");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_CV() {
	var info = new LocaleInfo("pt-CV");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_CV() {
	var info = new LocaleInfo("pt-CV");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_CV() {
	var info = new LocaleInfo("pt-CV");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_pt_CV() {
	var info = new LocaleInfo("pt-CV");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_pt_CV() {
	var info = new LocaleInfo("pt-CV");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_pt_CV() {
	var info = new LocaleInfo("pt-CV");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_pt_CV() {
	var info = new LocaleInfo("pt-CV");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pt_CV() {
	var info = new LocaleInfo("pt-CV");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pt_CV() {
	var info = new LocaleInfo("pt-CV");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pt-GW

function testLocaleInfoGetDecimalSeparatorfor_pt_GW() {
	var info = new LocaleInfo("pt-GW");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_GW() {
	var info = new LocaleInfo("pt-GW");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_GW() {
	var info = new LocaleInfo("pt-GW");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_GW() {
	var info = new LocaleInfo("pt-GW");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_pt_GW() {
	var info = new LocaleInfo("pt-GW");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_pt_GW() {
	var info = new LocaleInfo("pt-GW");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_pt_GW() {
	var info = new LocaleInfo("pt-GW");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_pt_GW() {
	var info = new LocaleInfo("pt-GW");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pt_GW() {
	var info = new LocaleInfo("pt-GW");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pt_GW() {
	var info = new LocaleInfo("pt-GW");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pt-MO

function testLocaleInfoGetDecimalSeparatorfor_pt_MO() {
	var info = new LocaleInfo("pt-MO");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_MO() {
	var info = new LocaleInfo("pt-MO");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_MO() {
	var info = new LocaleInfo("pt-MO");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_MO() {
	var info = new LocaleInfo("pt-MO");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_pt_MO() {
	var info = new LocaleInfo("pt-MO");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_pt_MO() {
	var info = new LocaleInfo("pt-MO");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_pt_MO() {
	var info = new LocaleInfo("pt-MO");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_pt_MO() {
	var info = new LocaleInfo("pt-MO");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pt_MO() {
	var info = new LocaleInfo("pt-MO");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pt_MO() {
	var info = new LocaleInfo("pt-MO");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pt-MZ

function testLocaleInfoGetDecimalSeparatorfor_pt_MZ() {
	var info = new LocaleInfo("pt-MZ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_MZ() {
	var info = new LocaleInfo("pt-MZ");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_MZ() {
	var info = new LocaleInfo("pt-MZ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_MZ() {
	var info = new LocaleInfo("pt-MZ");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_pt_MZ() {
	var info = new LocaleInfo("pt-MZ");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_pt_MZ() {
	var info = new LocaleInfo("pt-MZ");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_pt_MZ() {
	var info = new LocaleInfo("pt-MZ");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_pt_MZ() {
	var info = new LocaleInfo("pt-MZ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pt_MZ() {
	var info = new LocaleInfo("pt-MZ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pt_MZ() {
	var info = new LocaleInfo("pt-MZ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pt-PT

function testLocaleInfoGetDecimalSeparatorfor_pt_PT() {
	var info = new LocaleInfo("pt-PT");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_PT() {
	var info = new LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_PT() {
	var info = new LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_PT() {
	var info = new LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_pt_PT() {
	var info = new LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_pt_PT() {
	var info = new LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_pt_PT() {
	var info = new LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_pt_PT() {
	var info = new LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pt_PT() {
	var info = new LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pt_PT() {
	var info = new LocaleInfo("pt-PT");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pt-ST

function testLocaleInfoGetDecimalSeparatorfor_pt_ST() {
	var info = new LocaleInfo("pt-ST");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_ST() {
	var info = new LocaleInfo("pt-ST");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_ST() {
	var info = new LocaleInfo("pt-ST");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_ST() {
	var info = new LocaleInfo("pt-ST");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_pt_ST() {
	var info = new LocaleInfo("pt-ST");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_pt_ST() {
	var info = new LocaleInfo("pt-ST");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_pt_ST() {
	var info = new LocaleInfo("pt-ST");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_pt_ST() {
	var info = new LocaleInfo("pt-ST");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pt_ST() {
	var info = new LocaleInfo("pt-ST");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pt_ST() {
	var info = new LocaleInfo("pt-ST");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for pt-TL

function testLocaleInfoGetDecimalSeparatorfor_pt_TL() {
	var info = new LocaleInfo("pt-TL");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_pt_TL() {
	var info = new LocaleInfo("pt-TL");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_pt_TL() {
	var info = new LocaleInfo("pt-TL");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_pt_TL() {
	var info = new LocaleInfo("pt-TL");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_pt_TL() {
	var info = new LocaleInfo("pt-TL");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_pt_TL() {
	var info = new LocaleInfo("pt-TL");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_pt_TL() {
	var info = new LocaleInfo("pt-TL");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_pt_TL() {
	var info = new LocaleInfo("pt-TL");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_pt_TL() {
	var info = new LocaleInfo("pt-TL");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_pt_TL() {
	var info = new LocaleInfo("pt-TL");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}



//test cases for ro-RS

function testLocaleInfoGetDecimalSeparatorfor_ro_RS() {
	var info = new LocaleInfo("ro-RS");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ro_RS() {
	var info = new LocaleInfo("ro-RS");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ro_RS() {
	var info = new LocaleInfo("ro-RS");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ro_RS() {
	var info = new LocaleInfo("ro-RS");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ro_RS() {
	var info = new LocaleInfo("ro-RS");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ro_RS() {
	var info = new LocaleInfo("ro-RS");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ro_RS() {
	var info = new LocaleInfo("ro-RS");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ro_RS() {
	var info = new LocaleInfo("ro-RS");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ro_RS() {
	var info = new LocaleInfo("ro-RS");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ro_RS() {
	var info = new LocaleInfo("ro-RS");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for ru-KZ

function testLocaleInfoGetDecimalSeparatorfor_ru_KZ() {
	var info = new LocaleInfo("ru-KZ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ru_KZ() {
	var info = new LocaleInfo("ru-KZ");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ru_KZ() {
	var info = new LocaleInfo("ru-KZ");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ru_KZ() {
	var info = new LocaleInfo("ru-KZ");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ru_KZ() {
	var info = new LocaleInfo("ru-KZ");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ru_KZ() {
	var info = new LocaleInfo("ru-KZ");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ru_KZ() {
	var info = new LocaleInfo("ru-KZ");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ru_KZ() {
	var info = new LocaleInfo("ru-KZ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ru_KZ() {
	var info = new LocaleInfo("ru-KZ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ru_KZ() {
	var info = new LocaleInfo("ru-KZ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ru-TM

function testLocaleInfoGetDecimalSeparatorfor_ru_TM() {
	var info = new LocaleInfo("ru-TM");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ru_TM() {
	var info = new LocaleInfo("ru-TM");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ru_TM() {
	var info = new LocaleInfo("ru-TM");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ru_TM() {
	var info = new LocaleInfo("ru-TM");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ru_TM() {
	var info = new LocaleInfo("ru-TM");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ru_TM() {
	var info = new LocaleInfo("ru-TM");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ru_TM() {
	var info = new LocaleInfo("ru-TM");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ru_TM() {
	var info = new LocaleInfo("ru-TM");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ru_TM() {
	var info = new LocaleInfo("ru-TM");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ru_TM() {
	var info = new LocaleInfo("ru-TM");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for shi-Tfng-MA

function testLocaleInfoGetDecimalSeparatorfor_shi_Tfng_MA() {
	var info = new LocaleInfo("shi-Tfng-MA");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_shi_Tfng_MA() {
	var info = new LocaleInfo("shi-MA-Tfng");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_shi_Tfng_MA() {
	var info = new LocaleInfo("shi-Tfng-MA");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_shi_Tfng_MA() {
	var info = new LocaleInfo("shi-Tfng-MA");
	assertNotNull(info);

	assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_shi_Tfng_MA() {
	var info = new LocaleInfo("shi-Tfng-MA");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_shi_Tfng_MA() {
	var info = new LocaleInfo("shi-Tfng-MA");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_shi_Tfng_MA() {
	var info = new LocaleInfo("shi-Tfng-MA");
	assertNotNull(info);

	assertEquals("-{n}{s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_shi_Tfng_MA() {
	var info = new LocaleInfo("shi-Tfng-MA");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_shi_Tfng_MA() {
	var info = new LocaleInfo("shi-Tfng-MA");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_shi_Tfng_MA() {
	var info = new LocaleInfo("shi-Tfng-MA");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for si

function testLocaleInfoGetDecimalSeparatorfor_si() {
	var info = new LocaleInfo("si");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_si() {
	var info = new LocaleInfo("si");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_si() {
	var info = new LocaleInfo("si");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_si() {
	var info = new LocaleInfo("si");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_si() {
	var info = new LocaleInfo("si");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_si() {
	var info = new LocaleInfo("si");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_si() {
	var info = new LocaleInfo("si");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_si() {
	var info = new LocaleInfo("si");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_si() {
	var info = new LocaleInfo("si");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_si() {
	var info = new LocaleInfo("si");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for sk-SK

function testLocaleInfoGetDecimalSeparatorfor_sk_SK() {
	var info = new LocaleInfo("sk-SK");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sk_SK() {
	var info = new LocaleInfo("sk-SK");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sk_SK() {
	var info = new LocaleInfo("sk-SK");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sk_SK() {
	var info = new LocaleInfo("sk-SK");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_sk_SK() {
	var info = new LocaleInfo("sk-SK");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_sk_SK() {
	var info = new LocaleInfo("sk-SK");
	assertNotNull(info);

	assertEquals("-{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_sk_SK() {
	var info = new LocaleInfo("sk-SK");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_sk_SK() {
	var info = new LocaleInfo("sk-SK");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sk_SK() {
	var info = new LocaleInfo("sk-SK");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sk_SK() {
	var info = new LocaleInfo("sk-SK");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sl-SI

function testLocaleInfoGetDecimalSeparatorfor_sl() {
	var info = new LocaleInfo("sl-SI");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sl() {
	var info = new LocaleInfo("sl-SI");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sl() {
	var info = new LocaleInfo("sl-SI");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sl() {
	var info = new LocaleInfo("sl-SI");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_sl() {
	var info = new LocaleInfo("sl-SI");
	assertNotNull(info);

	assertEquals("–{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_sl() {
	var info = new LocaleInfo("sl-SI");
	assertNotNull(info);

	assertEquals("–{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_sl() {
	var info = new LocaleInfo("sl-SI");
	assertNotNull(info);

	assertEquals("–{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_sl() {
	var info = new LocaleInfo("sl-SI");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sl() {
	var info = new LocaleInfo("sl-SI");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sl() {
	var info = new LocaleInfo("sl-SI");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

function testLocaleInfoGetGroupingSeparatorfor_so_ET() {
	var info = new LocaleInfo("so-ET");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_so_ET() {
	var info = new LocaleInfo("so-ET");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_so_ET() {
	var info = new LocaleInfo("so-ET");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_so_ET() {
	var info = new LocaleInfo("so-ET");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_so_ET() {
	var info = new LocaleInfo("so-ET");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_so_ET() {
	var info = new LocaleInfo("so-ET");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_so_ET() {
	var info = new LocaleInfo("so-ET");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_so_ET() {
	var info = new LocaleInfo("so-ET");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_so_ET() {
	var info = new LocaleInfo("so-ET");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for so-SO

function testLocaleInfoGetDecimalSeparatorfor_so_SO() {
	var info = new LocaleInfo("so-SO");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_so_SO() {
	var info = new LocaleInfo("so-SO");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_so_SO() {
	var info = new LocaleInfo("so-SO");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_so_SO() {
	var info = new LocaleInfo("so-SO");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_so_SO() {
	var info = new LocaleInfo("so-SO");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_so_SO() {
	var info = new LocaleInfo("so-SO");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_so_SO() {
	var info = new LocaleInfo("so-SO");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_so_SO() {
	var info = new LocaleInfo("so-SO");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_so_SO() {
	var info = new LocaleInfo("so-SO");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_so_SO() {
	var info = new LocaleInfo("so-SO");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for sq-MK

function testLocaleInfoGetDecimalSeparatorfor_sq_MK() {
	var info = new LocaleInfo("sq-MK");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sq_MK() {
	var info = new LocaleInfo("sq-MK");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sq_MK() {
	var info = new LocaleInfo("sq-MK");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sq_MK() {
	var info = new LocaleInfo("sq-MK");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_sq_MK() {
	var info = new LocaleInfo("sq-MK");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_sq_MK() {
	var info = new LocaleInfo("sq-MK");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_sq_MK() {
	var info = new LocaleInfo("sq-MK");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_sq_MK() {
	var info = new LocaleInfo("sq-MK");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sq_MK() {
	var info = new LocaleInfo("sq-MK");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sq_MK() {
	var info = new LocaleInfo("sq-MK");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for sr-Cyrl-BA

function testLocaleInfoGetDecimalSeparatorfor_sr_Cyrl_BA() {
	var info = new LocaleInfo("sr-Cyrl-BA");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sr_Cyrl_BA() {
	var info = new LocaleInfo("sr-Cyrl-BA");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sr_Cyrl_BA() {
	var info = new LocaleInfo("sr-Cyrl-BA");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sr_Cyrl_BA() {
	var info = new LocaleInfo("sr-Cyrl-BA");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_sr_Cyrl_BA() {
	var info = new LocaleInfo("sr-Cyrl-BA");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_sr_Cyrl_BA() {
	var info = new LocaleInfo("sr-Cyrl-BA");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_sr_Cyrl_BA() {
	var info = new LocaleInfo("sr-Cyrl-BA");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_sr_Cyrl_BA() {
	var info = new LocaleInfo("sr-Cyrl-BA");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sr_Cyrl_BA() {
	var info = new LocaleInfo("sr-Cyrl-BA");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sr_Cyrl_BA() {
	var info = new LocaleInfo("sr-Cyrl-BA");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sr-Latn-BA

function testLocaleInfoGetDecimalSeparatorfor_sr_Latn_BA() {
	var info = new LocaleInfo("sr-Latn-BA");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sr_Latn_BA() {
	var info = new LocaleInfo("sr-Latn-BA");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sr_Latn_BA() {
	var info = new LocaleInfo("sr-Latn-BA");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sr_Latn_BA() {
	var info = new LocaleInfo("sr-Latn-BA");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_sr_Latn_BA() {
	var info = new LocaleInfo("sr-Latn-BA");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_sr_Latn_BA() {
	var info = new LocaleInfo("sr-Latn-BA");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_sr_Latn_BA() {
	var info = new LocaleInfo("sr-Latn-BA");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_sr_Latn_BA() {
	var info = new LocaleInfo("sr-Latn-BA");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sr_Latn_BA() {
	var info = new LocaleInfo("sr-Latn-BA");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sr_Latn_BA() {
	var info = new LocaleInfo("sr-Latn-BA");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sr-ME-Latn

function testLocaleInfoGetDecimalSeparatorfor_sr_Latn_ME() {
	var info = new LocaleInfo("sr-Latn-ME");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sr_Latn_ME() {
	var info = new LocaleInfo("sr-Latn-ME");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sr_Latn_ME() {
	var info = new LocaleInfo("sr-Latn-ME");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sr_Latn_ME() {
	var info = new LocaleInfo("sr-Latn-ME");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_sr_Latn_ME() {
	var info = new LocaleInfo("sr-Latn-ME");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_sr_Latn_ME() {
	var info = new LocaleInfo("sr-Latn-ME");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_sr_Latn_ME() {
	var info = new LocaleInfo("sr-Latn-ME");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_sr_Latn_ME() {
	var info = new LocaleInfo("sr-Latn-ME");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sr_Latn_ME() {
	var info = new LocaleInfo("sr-Latn-ME");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sr_Latn_ME() {
	var info = new LocaleInfo("sr-Latn-ME");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sr-Latn-RS

function testLocaleInfoGetDecimalSeparatorfor_sr_Latn_RS() {
	var info = new LocaleInfo("sr-Latn-RS");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sr_Latn_RS() {
	var info = new LocaleInfo("sr-Latn-RS");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sr_Latn_RS() {
	var info = new LocaleInfo("sr-Latn-RS");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sr_Latn_RS() {
	var info = new LocaleInfo("sr-Latn-RS");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_sr_Latn_RS() {
	var info = new LocaleInfo("sr-Latn-RS");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_sr_Latn_RS() {
	var info = new LocaleInfo("sr-Latn-RS");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_sr_Latn_RS() {
	var info = new LocaleInfo("sr-Latn-RS");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_sr_Latn_RS() {
	var info = new LocaleInfo("sr-Latn-RS");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sr_Latn_RS() {
	var info = new LocaleInfo("sr-Latn-RS");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sr_Latn_RS() {
	var info = new LocaleInfo("sr-Latn-RS");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sr-RS

function testLocaleInfoGetDecimalSeparatorfor_sr_RS() {
	var info = new LocaleInfo("sr-RS");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sr_RS() {
	var info = new LocaleInfo("sr-RS");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sr_RS() {
	var info = new LocaleInfo("sr-RS");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sr_RS() {
	var info = new LocaleInfo("sr-RS");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_sr_RS() {
	var info = new LocaleInfo("sr-RS");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_sr_RS() {
	var info = new LocaleInfo("sr-RS");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_sr_RS() {
	var info = new LocaleInfo("sr-RS");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_sr_RS() {
	var info = new LocaleInfo("sr-RS");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sr_RS() {
	var info = new LocaleInfo("sr-RS");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sr_RS() {
	var info = new LocaleInfo("sr-RS");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ss-ZA

function testLocaleInfoGetDecimalSeparatorfor_ss_ZA() {
	var info = new LocaleInfo("ss-ZA");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ss_ZA() {
	var info = new LocaleInfo("ss-ZA");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ss_ZA() {
	var info = new LocaleInfo("ss-ZA");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ss_ZA() {
	var info = new LocaleInfo("ss-ZA");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ss_ZA() {
	var info = new LocaleInfo("ss-ZA");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ss_ZA() {
	var info = new LocaleInfo("ss-ZA");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ss_ZA() {
	var info = new LocaleInfo("ss-ZA");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ss_ZA() {
	var info = new LocaleInfo("ss-ZA");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ss_ZA() {
	var info = new LocaleInfo("ss-ZA");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ss_ZA() {
	var info = new LocaleInfo("ss-ZA");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for st-LS

function testLocaleInfoGetDecimalSeparatorfor_st_LS() {
	var info = new LocaleInfo("st-LS");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_st_LS() {
	var info = new LocaleInfo("st-LS");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_st_LS() {
	var info = new LocaleInfo("st-LS");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_st_LS() {
	var info = new LocaleInfo("st-LS");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_st_LS() {
	var info = new LocaleInfo("st-LS");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_st_LS() {
	var info = new LocaleInfo("st-LS");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_st_LS() {
	var info = new LocaleInfo("st-LS");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_st_LS() {
	var info = new LocaleInfo("st-LS");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_st_LS() {
	var info = new LocaleInfo("st-LS");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_st_LS() {
	var info = new LocaleInfo("st-LS");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sv-FI

function testLocaleInfoGetDecimalSeparatorfor_sv_FI() {
	var info = new LocaleInfo("sv-FI");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sv_FI() {
	var info = new LocaleInfo("sv-FI");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sv_FI() {
	var info = new LocaleInfo("sv-FI");
	assertNotNull(info);

	assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sv_FI() {
	var info = new LocaleInfo("sv-FI");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_sv_FI() {
	var info = new LocaleInfo("sv-FI");
	assertNotNull(info);

	assertEquals("−{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_sv_FI() {
	var info = new LocaleInfo("sv-FI");
	assertNotNull(info);

	assertEquals("−{n} %", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_sv_FI() {
	var info = new LocaleInfo("sv-FI");
	assertNotNull(info);

	assertEquals("−{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_sv_FI() {
	var info = new LocaleInfo("sv-FI");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sv_FI() {
	var info = new LocaleInfo("sv-FI");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sv_FI() {
	var info = new LocaleInfo("sv-FI");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for sw-UG

function testLocaleInfoGetDecimalSeparatorfor_sw_UG() {
	var info = new LocaleInfo("sw-UG");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sw_UG() {
	var info = new LocaleInfo("sw-UG");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sw_UG() {
	var info = new LocaleInfo("sw-UG");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sw_UG() {
	var info = new LocaleInfo("sw-UG");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_sw_UG() {
	var info = new LocaleInfo("sw-UG");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_sw_UG() {
	var info = new LocaleInfo("sw-UG");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_sw_UG() {
	var info = new LocaleInfo("sw-UG");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_sw_UG() {
	var info = new LocaleInfo("sw-UG");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sw_UG() {
	var info = new LocaleInfo("sw-UG");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sw_UG() {
	var info = new LocaleInfo("sw-UG");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}



//test cases for ta-LK

function testLocaleInfoGetDecimalSeparatorfor_ta_LK() {
	var info = new LocaleInfo("ta-LK");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ta_LK() {
	var info = new LocaleInfo("ta-LK");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ta_LK() {
	var info = new LocaleInfo("ta-LK");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ta_LK() {
	var info = new LocaleInfo("ta-LK");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ta_LK() {
	var info = new LocaleInfo("ta-LK");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ta_LK() {
	var info = new LocaleInfo("ta-LK");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ta_LK() {
	var info = new LocaleInfo("ta-LK");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ta_LK() {
	var info = new LocaleInfo("ta-LK");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ta_LK() {
	var info = new LocaleInfo("ta-LK");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ta_LK() {
	var info = new LocaleInfo("ta-LK");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ta-MY

function testLocaleInfoGetDecimalSeparatorfor_ta_MY() {
	var info = new LocaleInfo("ta-MY");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ta_MY() {
	var info = new LocaleInfo("ta-MY");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ta_MY() {
	var info = new LocaleInfo("ta-MY");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ta_MY() {
	var info = new LocaleInfo("ta-MY");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ta_MY() {
	var info = new LocaleInfo("ta-MY");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ta_MY() {
	var info = new LocaleInfo("ta-MY");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ta_MY() {
	var info = new LocaleInfo("ta-MY");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ta_MY() {
	var info = new LocaleInfo("ta-MY");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ta_MY() {
	var info = new LocaleInfo("ta-MY");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ta_MY() {
	var info = new LocaleInfo("ta-MY");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ta-SG

function testLocaleInfoGetDecimalSeparatorfor_ta_SG() {
	var info = new LocaleInfo("ta-SG");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ta_SG() {
	var info = new LocaleInfo("ta-SG");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ta_SG() {
	var info = new LocaleInfo("ta-SG");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ta_SG() {
	var info = new LocaleInfo("ta-SG");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ta_SG() {
	var info = new LocaleInfo("ta-SG");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ta_SG() {
	var info = new LocaleInfo("ta-SG");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ta_SG() {
	var info = new LocaleInfo("ta-SG");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ta_SG() {
	var info = new LocaleInfo("ta-SG");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ta_SG() {
	var info = new LocaleInfo("ta-SG");
	assertNotNull(info);

	assertEquals(2, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ta_SG() {
	var info = new LocaleInfo("ta-SG");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for th-TH

function testLocaleInfoGetDecimalSeparatorfor_th() {
	var info = new LocaleInfo("th-TH");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_th() {
	var info = new LocaleInfo("th-TH");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_th() {
	var info = new LocaleInfo("th-TH");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_th() {
	var info = new LocaleInfo("th-TH");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_th() {
	var info = new LocaleInfo("th-TH");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_th() {
	var info = new LocaleInfo("th-TH");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_th() {
	var info = new LocaleInfo("th-TH");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_th() {
	var info = new LocaleInfo("th-TH");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_th() {
	var info = new LocaleInfo("th-TH");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_th() {
	var info = new LocaleInfo("th-TH");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for uk-UA

function testLocaleInfoGetDecimalSeparatorfor_uk_UA() {
	var info = new LocaleInfo("uk-UA");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_uk_UA() {
	var info = new LocaleInfo("uk-UA");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_uk_UA() {
	var info = new LocaleInfo("uk-UA");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_uk_UA() {
	var info = new LocaleInfo("uk-UA");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_uk_UA() {
	var info = new LocaleInfo("uk-UA");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_uk_UA() {
	var info = new LocaleInfo("uk-UA");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_uk_UA() {
	var info = new LocaleInfo("uk-UA");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_uk_UA() {
	var info = new LocaleInfo("uk-UA");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_uk_UA() {
	var info = new LocaleInfo("uk-UA");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_uk_UA() {
	var info = new LocaleInfo("uk-UA");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ur

function testLocaleInfoGetDecimalSeparatorfor_ur() {
	var info = new LocaleInfo("ur");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ur() {
	var info = new LocaleInfo("ur");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ur() {
	var info = new LocaleInfo("ur");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ur() {
	var info = new LocaleInfo("ur");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ur() {
	var info = new LocaleInfo("ur");
	assertNotNull(info);

	assertEquals("‎-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ur() {
	var info = new LocaleInfo("ur");
	assertNotNull(info);

	assertEquals("‎-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ur() {
	var info = new LocaleInfo("ur");
	assertNotNull(info);

	assertEquals("‎-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ur() {
	var info = new LocaleInfo("ur");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ur() {
	var info = new LocaleInfo("ur");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ur() {
	var info = new LocaleInfo("ur");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ur-IN

function testLocaleInfoGetDecimalSeparatorfor_ur_IN() {
	var info = new LocaleInfo("ur-IN");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ur_IN() {
	var info = new LocaleInfo("ur-IN");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ur_IN() {
	var info = new LocaleInfo("ur-IN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ur_IN() {
	var info = new LocaleInfo("ur-IN");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ur_IN() {
	var info = new LocaleInfo("ur-IN");
	assertNotNull(info);

	assertEquals("‎-‎{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ur_IN() {
	var info = new LocaleInfo("ur-IN");
	assertNotNull(info);

	assertEquals("‎-‎{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ur_IN() {
	var info = new LocaleInfo("ur-IN");
	assertNotNull(info);

	assertEquals("‎-‎{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ur_IN() {
	var info = new LocaleInfo("ur-IN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ur_IN() {
	var info = new LocaleInfo("ur-IN");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ur_IN() {
	var info = new LocaleInfo("ur-IN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for ur-PK

function testLocaleInfoGetDecimalSeparatorfor_ur_PK() {
	var info = new LocaleInfo("ur-PK");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ur_PK() {
	var info = new LocaleInfo("ur-PK");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ur_PK() {
	var info = new LocaleInfo("ur-PK");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ur_PK() {
	var info = new LocaleInfo("ur-PK");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ur_PK() {
	var info = new LocaleInfo("ur-PK");
	assertNotNull(info);

	assertEquals("‎-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ur_PK() {
	var info = new LocaleInfo("ur-PK");
	assertNotNull(info);

	assertEquals("‎-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ur_PK() {
	var info = new LocaleInfo("ur-PK");
	assertNotNull(info);

	assertEquals("‎-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ur_PK() {
	var info = new LocaleInfo("ur-PK");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ur_PK() {
	var info = new LocaleInfo("ur-PK");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ur_PK() {
	var info = new LocaleInfo("ur-PK");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for uz-Arab-AF

function testLocaleInfoGetDecimalSeparatorfor_ur_Arab_AF() {
	var info = new LocaleInfo("uz-Arab-AF");
	assertNotNull(info);
	assertEquals("٫", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_ur_Arab_AF() {
	var info = new LocaleInfo("uz-Arab-AF");
	assertNotNull(info);

	assertEquals("٬", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_ur_Arab_AF() {
	var info = new LocaleInfo("uz-Arab-AF");
	assertNotNull(info);

	assertEquals("{n}٪", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_ur_Arab_AF() {
	var info = new LocaleInfo("uz-Arab-AF");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_ur_Arab_AF() {
	var info = new LocaleInfo("uz-Arab-AF");
	assertNotNull(info);

	assertEquals("‎-‎{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_ur_Arab_AF() {
	var info = new LocaleInfo("uz-Arab-AF");
	assertNotNull(info);

	assertEquals("‎-‎{n}٪", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_ur_Arab_AF() {
	var info = new LocaleInfo("uz-Arab-AF");
	assertNotNull(info);

	assertEquals("‎-‎{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_ur_Arab_AF() {
	var info = new LocaleInfo("uz-Arab-AF");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_ur_Arab_AF() {
	var info = new LocaleInfo("uz-Arab-AF");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_ur_Arab_AF() {
	var info = new LocaleInfo("uz-Arab-AF");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for uz-UZ

function testLocaleInfoGetDecimalSeparatorfor_uz_Latn_UZ() {
	var info = new LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_uz_Latn_UZ() {
	var info = new LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_uz_Latn_UZ() {
	var info = new LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_uz_Latn_UZ() {
	var info = new LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);

	assertEquals("{n} {s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_uz_Latn_UZ() {
	var info = new LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_uz_Latn_UZ() {
	var info = new LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_uz_Latn_UZ() {
	var info = new LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);

	assertEquals("-{n} {s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_uz_Latn_UZ() {
	var info = new LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_uz_Latn_UZ() {
	var info = new LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_uz_Latn_UZ() {
	var info = new LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for vai-Latn-LR

function testLocaleInfoGetDecimalSeparatorfor_vai_Latn_LR() {
	var info = new LocaleInfo("vai-Latn-LR");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_vai_Latn_LR() {
	var info = new LocaleInfo("vai-Latn-LR");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_vai_Latn_LR() {
	var info = new LocaleInfo("vai-Latn-LR");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_vai_Latn_LR() {
	var info = new LocaleInfo("vai-Latn-LR");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_vai_Latn_LR() {
	var info = new LocaleInfo("vai-Latn-LR");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_vai_Latn_LR() {
	var info = new LocaleInfo("vai-Latn-LR");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_vai_Latn_LR() {
	var info = new LocaleInfo("vai-Latn-LR");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_vai_Latn_LR() {
	var info = new LocaleInfo("vai-Latn-LR");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_vai_Latn_LR() {
	var info = new LocaleInfo("vai-Latn-LR");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_vai_Latn_LR() {
	var info = new LocaleInfo("vai-Latn-LR");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for vi-VN

function testLocaleInfoGetDecimalSeparatorfor_vi() {
	var info = new LocaleInfo("vi-VN");
	assertNotNull(info);
	assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_vi() {
	var info = new LocaleInfo("vi-VN");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_vi() {
	var info = new LocaleInfo("vi-VN");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_vi() {
	var info = new LocaleInfo("vi-VN");
	assertNotNull(info);

	assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_vi() {
	var info = new LocaleInfo("vi-VN");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_vi() {
	var info = new LocaleInfo("vi-VN");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_vi() {
	var info = new LocaleInfo("vi-VN");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_vi() {
	var info = new LocaleInfo("vi-VN");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_vi() {
	var info = new LocaleInfo("vi-VN");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_vi() {
	var info = new LocaleInfo("vi-VN");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}


//test cases for zh-Hans-SG

function testLocaleInfoGetDecimalSeparatorfor_zh_Hans_SG() {
	var info = new LocaleInfo("zh-Hans-SG");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_zh_Hans_SG() {
	var info = new LocaleInfo("zh-Hans-SG");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_zh_Hans_SG() {
	var info = new LocaleInfo("zh-Hans-SG");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_zh_Hans_SG() {
	var info = new LocaleInfo("zh-Hans-SG");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_zh_Hans_SG() {
	var info = new LocaleInfo("zh-Hans-SG");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_zh_Hans_SG() {
	var info = new LocaleInfo("zh-Hans-SG");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_zh_Hans_SG() {
	var info = new LocaleInfo("zh-Hans-SG");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_zh_Hans_SG() {
	var info = new LocaleInfo("zh-Hans-SG");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_zh_Hans_SG() {
	var info = new LocaleInfo("zh-Hans-SG");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_zh_Hans_SG() {
	var info = new LocaleInfo("zh-Hans-SG");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for zh-Hant-MO

function testLocaleInfoGetDecimalSeparatorfor_zh_Hant_MO() {
	var info = new LocaleInfo("zh-Hant-MO");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_zh_Hant_MO() {
	var info = new LocaleInfo("zh-Hant-MO");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_zh_Hant_MO() {
	var info = new LocaleInfo("zh-Hant-MO");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_zh_Hant_MO() {
	var info = new LocaleInfo("zh-Hant-MO");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_zh_Hant_MO() {
	var info = new LocaleInfo("zh-Hant-MO");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_zh_Hant_MO() {
	var info = new LocaleInfo("zh-Hant-MO");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_zh_Hant_MO() {
	var info = new LocaleInfo("zh-Hant-MO");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_zh_Hant_MO() {
	var info = new LocaleInfo("zh-Hant-MO");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_zh_Hant_MO() {
	var info = new LocaleInfo("zh-Hant-MO");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_zh_Hant_MO() {
	var info = new LocaleInfo("zh-Hant-MO");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for zh-Hant-US

function testLocaleInfoGetDecimalSeparatorfor_zh_Hant_US() {
	var info = new LocaleInfo("zh-Hant-US");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_zh_Hant_US() {
	var info = new LocaleInfo("zh-Hant-US");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_zh_Hant_US() {
	var info = new LocaleInfo("zh-Hant-US");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_zh_Hant_US() {
	var info = new LocaleInfo("zh-Hant-US");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_zh_Hant_US() {
	var info = new LocaleInfo("zh-Hant-US");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_zh_Hant_US() {
	var info = new LocaleInfo("zh-Hant-US");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_zh_Hant_US() {
	var info = new LocaleInfo("zh-Hant-US");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_zh_Hant_US() {
	var info = new LocaleInfo("zh-Hant-US");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_zh_Hant_US() {
	var info = new LocaleInfo("zh-Hant-US");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_zh_Hant_US() {
	var info = new LocaleInfo("zh-Hant-US");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for zh-MY

function testLocaleInfoGetDecimalSeparatorfor_zh_MY() {
	var info = new LocaleInfo("zh-MY");
	assertNotNull(info);
	assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_zh_MY() {
	var info = new LocaleInfo("zh-MY");
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_zh_MY() {
	var info = new LocaleInfo("zh-MY");
	assertNotNull(info);

	assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_zh_MY() {
	var info = new LocaleInfo("zh-MY");
	assertNotNull(info);

	assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_zh_MY() {
	var info = new LocaleInfo("zh-MY");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_zh_MY() {
	var info = new LocaleInfo("zh-MY");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_zh_MY() {
	var info = new LocaleInfo("zh-MY");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_zh_MY() {
	var info = new LocaleInfo("zh-MY");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_zh_MY() {
	var info = new LocaleInfo("zh-MY");
	assertNotNull(info);

	assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_zh_MY() {
	var info = new LocaleInfo("zh-MY");
	assertNotNull(info);

	assertEquals("halfdown", info.getRoundingMode());
}

//test cases for az-Latn-AZ

function testLocaleInfoGetDecimalSeparatorfor_az_Latn_AZ() {
    var info = new LocaleInfo("az-Latn-AZ");
    assertNotNull(info);
    assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_az_Latn_AZ() {
    var info = new LocaleInfo("az-Latn-AZ");
    assertNotNull(info);

    assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_az_Latn_AZ() {
    var info = new LocaleInfo("az-Latn-AZ");
    assertNotNull(info);

    assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_az_Latn_AZ() {
    var info = new LocaleInfo("az-Latn-AZ");
    assertNotNull(info);

    assertEquals("{s} {n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_az_Latn_AZ() {
	var info = new LocaleInfo("az-Latn-AZ");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_az_Latn_AZ() {
	var info = new LocaleInfo("az-Latn-AZ");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_az_Latn_AZ() {
	var info = new LocaleInfo("az-Latn-AZ");
	assertNotNull(info);

	assertEquals("-{s} {n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_az_Latn_AZ() {
    var info = new LocaleInfo("az-Latn-AZ");
    assertNotNull(info);

    assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_az_Latn_AZ() {
    var info = new LocaleInfo("az-Latn-AZ");
    assertNotNull(info);

    assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_az_Latn_AZ() {
    var info = new LocaleInfo("az-Latn-AZ");
    assertNotNull(info);

    assertEquals("halfdown", info.getRoundingMode());
}

//test cases for km-KH

function testLocaleInfoGetDecimalSeparatorfor_km_KH() {
    var info = new LocaleInfo("km-KH");
    assertNotNull(info);
    assertEquals(",", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_km_KH() {
    var info = new LocaleInfo("km-KH");
    assertNotNull(info);

    assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_km_KH() {
    var info = new LocaleInfo("km-KH");
    assertNotNull(info);

    assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_km_KH() {
    var info = new LocaleInfo("km-KH");
    assertNotNull(info);

    assertEquals("{n}{s}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_km_KH() {
	var info = new LocaleInfo("km-KH");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_km_KH() {
	var info = new LocaleInfo("km-KH");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_km_KH() {
	var info = new LocaleInfo("km-KH");
	assertNotNull(info);

	assertEquals("-{n}{s}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_km_KH() {
    var info = new LocaleInfo("km-KH");
    assertNotNull(info);

    assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_km_KH() {
    var info = new LocaleInfo("km-KH");
    assertNotNull(info);

    assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_km_KH() {
    var info = new LocaleInfo("km-KH");
    assertNotNull(info);

    assertEquals("halfdown", info.getRoundingMode());
}

//test cases for si-LK

function testLocaleInfoGetDecimalSeparatorfor_si_LK() {
    var info = new LocaleInfo("si-LK");
    assertNotNull(info);
    assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_si_LK() {
    var info = new LocaleInfo("si-LK");
    assertNotNull(info);

    assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_si_LK() {
    var info = new LocaleInfo("si-LK");
    assertNotNull(info);

    assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_si_LK() {
    var info = new LocaleInfo("si-LK");
    assertNotNull(info);

    assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_si_LK() {
	var info = new LocaleInfo("si-LK");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_si_LK() {
	var info = new LocaleInfo("si-LK");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_si_LK() {
	var info = new LocaleInfo("si-LK");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_si_LK() {
    var info = new LocaleInfo("si-LK");
    assertNotNull(info);

    assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_si_LK() {
    var info = new LocaleInfo("si-LK");
    assertNotNull(info);

    assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_si_LK() {
    var info = new LocaleInfo("si-LK");
    assertNotNull(info);

    assertEquals("halfdown", info.getRoundingMode());
}

//test cases for sw-KE

function testLocaleInfoGetDecimalSeparatorfor_sw_KE() {
    var info = new LocaleInfo("sw-Latn-KE");
    assertNotNull(info);
    assertEquals(".", info.getDecimalSeparator());
}

function testLocaleInfoGetGroupingSeparatorfor_sw_KE() {
    var info = new LocaleInfo("sw-Latn-KE");
    assertNotNull(info);

    assertEquals(",", info.getGroupingSeparator());
}

function testLocaleInfoGetPercentageFormat_sw_KE() {
    var info = new LocaleInfo("sw-Latn-KE");
    assertNotNull(info);

    assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetCurrencyFormat_sw_KE() {
    var info = new LocaleInfo("sw-Latn-KE");
    assertNotNull(info);

    assertEquals("{s}{n}", info.getCurrencyFormats().common);
}

function testLocaleInfoGetNegativeNumberFormat_sw_KE() {
	var info = new LocaleInfo("sw-Latn-KE");
	assertNotNull(info);

	assertEquals("-{n}", info.getNegativeNumberFormat());
}

function testLocaleInfoGetNegativePercentageFormat_sw_KE() {
	var info = new LocaleInfo("sw-Latn-KE");
	assertNotNull(info);

	assertEquals("-{n}%", info.getNegativePercentageFormat());
}

function testLocaleInfoGetNegativeCurrencyFormat_sw_KE() {
	var info = new LocaleInfo("sw-Latn-KE");
	assertNotNull(info);

	assertEquals("-{s}{n}", info.getCurrencyFormats().commonNegative);
}

function testLocaleInfoGetPrimaryGroupingDigits_sw_KE() {
    var info = new LocaleInfo("sw-Latn-KE");
    assertNotNull(info);

    assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetSecondaryGroupingDigits_sw_KE() {
    var info = new LocaleInfo("sw-Latn-KE");
    assertNotNull(info);

    assertEquals(0, info.getSecondaryGroupingDigits());
}

function testLocaleInfoRoundingMode_sw_KE() {
    var info = new LocaleInfo("sw-Latn-KE");
    assertNotNull(info);

    assertEquals("halfdown", info.getRoundingMode());
}

/************************************************end 04-JUN-2013**********************************************************/
/** Add negative format test cases (08-NOV-2016) **/

function testLocaleInfoGetGroupingSeparator1() {
	var info = new LocaleInfo();
	assertNotNull(info);

	assertEquals(",", info.getGroupingSeparator());
}
function testLocaleInfoGetGroupingSeparator2() {
	var info = new LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals(".", info.getGroupingSeparator());
}

function testLocaleInfoGetGroupingSeparator3() {
	var info = new LocaleInfo("fr-FR");
	assertNotNull(info);

	assertEquals(" ", info.getGroupingSeparator());
}

function testLocaleInfoGetGroupingDigits1() {
	var info = new LocaleInfo();
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetGroupingDigits2() {
	var info = new LocaleInfo("de-DE");
	assertNotNull(info);

	assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetGroupingDigits3() {
	var info = new LocaleInfo("zh-Hans-CN");
	assertNotNull(info);

    assertEquals(3, info.getPrimaryGroupingDigits());
}

function testLocaleInfoGetPercentageFormat2() {
    var info = new LocaleInfo("fr-FR");
    assertNotNull(info);

    assertEquals("{n} %", info.getPercentageFormat());
}

function testLocaleInfoGetPercentageFormat1() {
    var info = new LocaleInfo();
    assertNotNull(info);

    assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetPercentageSymbol1() {
    var info = new LocaleInfo();
    assertNotNull(info);

    assertEquals("%", info.getPercentageSymbol());
}

function testLocaleInfoGetPercentageSymbol2() {
    var info = new LocaleInfo("fr-FR");
    assertNotNull(info);

    assertEquals("%", info.getPercentageSymbol());
}

function mockLoader(paths, sync, params, callback) {
    var data = [];
    // for the generic, shared stuff
    data.push(ilib.data.localeinfo || {
        "calendar": "gregorian",
        "clock": "24",
        "currency": "USD",
        "firstDayOfWeek": 1,
        "numfmt": {
            "script": "Latn",
            "decimalChar": ",",
            "groupChar": ".",
            "prigroupSize": 3,
            "pctFmt": "{n}%",
            "pctChar": "%",
            "roundingMode": "halfdown",
            "exponential": "e",
            "currencyFormats": {
                "common": "{s}{n}",
                "commonNegative": "{s}-{n}"
            }
        },
        "timezone": "Etc/UTC",
        "units": "metric"
    });
    paths.shift();
    paths.forEach(function (path) {
        if (path.search("fr/localeinfo.json$") !== -1) {
            data.push({
                "language.name": "French",
                "numfmt": {
                    "groupChar": " ",
                    "currencyFormats": {
                        "common": "{n} {s}",
                        "commonNegative": "({n} {s})"
                    },
                    "pctFmt": "{n} %"
                },
                "paperSizes": {
                    "regular": "A4",
                    "photo": "4x6"
                },
                "scripts": [
                    "Latn"
                ],
                "locale": "fr"
            });
        } else if (path.search("FR/localeinfo.json$") !== -1) {
            data.push({
                "currency": "EUR",
                "firstDayOfWeek": 1,
                "region.name": "France",
                "timezone": "Europe/Paris",
                "locale": "FR"
            });
        } else {
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
        }
    });
    if (typeof (callback) !== 'undefined') {
        callback.call(this, data);
    }
    return data;
};

function testLocaleInfoLoadMissingDataAsynch() {
    if (ilib.isDynData()) {
        // don't need to test loading on the dynamic load version because we are testing
        // it via all the other tests already.
        return;
    }
    ilib.setLoaderCallback(mockLoader);
    var info = new LocaleInfo("zzz-ZX", {
        sync: false,
        onLoad: function (li) {
            assertNotNull(li);

            assertEquals("iso {s} {n}", li.getCurrencyFormats().iso);
            assertEquals(4, li.getFirstDayOfWeek());
            assertEquals("%", li.getPercentageSymbol());
        }
    });
    assertNotNull(info);
    ilib.setLoaderCallback(undefined);
}

function testLocaleInfoLoadMissingDataSync() {
    if (ilib.isDynData()) {
        // don't need to test loading on the dynamic load version because we are testing
        // it via all the other tests already.
        return;
    }
    ilib.setLoaderCallback(mockLoader);
    var info = new LocaleInfo("zzz-ZX", {
        sync: true
    });

    assertNotNull(info);

    assertEquals("iso {s} {n}", info.getCurrencyFormats().iso);
    assertEquals(4, info.getFirstDayOfWeek());
    assertEquals("%", info.getPercentageSymbol());
    ilib.setLoaderCallback(undefined);
}

function testLocaleInfoLoadMissingDataAsynchNoData() {
    if (ilib.isDynData()) {
        // don't need to test loading on the dynamic load version because we are testing
        // it via all the other tests already.
        return;
    }
    ilib.setLoaderCallback(mockLoader);
    var info = new LocaleInfo("qq-QQ", {
        sync: false,
        onLoad: function (li) {
            assertNotUndefined(li);
            // should return the shared data only
            assertEquals("{s} {n}", li.getCurrencyFormats().common);
            assertEquals(1, li.getFirstDayOfWeek());
            assertEquals("%", li.getPercentageSymbol());
        }
    });
    assertNotNull(info);
    ilib.setLoaderCallback(undefined);
}

function testLocaleInfoMissingDataSynchNoDataNoLoader() {
    var temp = ilib._load;

    ilib._load = undefined;  // no loader
    var info = new LocaleInfo("xxx-QQ", {
        sync: true,
        onLoad: function (li) {
            assertNotUndefined(li);
            // should return the shared data only
            assertEquals("{s} {n}", li.getCurrencyFormats().common);
            assertEquals(1, li.getFirstDayOfWeek());
            assertEquals("%", li.getPercentageSymbol());
        }
    });
    assertNotNull(info);

    // clean up
    ilib._load = undefined;  // no loader
    ilib._load = temp;
}

function testLocaleInfoLoadMissingDataSyncNoData() {
    if (ilib.isDynData()) {
        // don't need to test loading on the dynamic load version because we are testing
        // it via all the other tests already.
        return;
    }
    ilib.setLoaderCallback(mockLoader);
    var li = new LocaleInfo("qq-QQ", {
        sync: true
    });

    assertNotUndefined(li);
    // should return the shared data only
    assertEquals("{s} {n}", li.getCurrencyFormats().common);
    assertEquals(1, li.getFirstDayOfWeek());
    assertEquals("%", li.getPercentageSymbol());
    ilib.setLoaderCallback(undefined);
}

function testLocaleInfoLoadPreassembledDataAsynch() {
    if (ilib.isDynData()) {
        // don't need to test loading on the dynamic load version because we are testing
        // it via all the other tests already.
        return;
    }
    ilib.setLoaderCallback(mockLoader);
    var info = new LocaleInfo("fr-FR", {
        sync: false,
        onLoad: function (li) {
            assertNotUndefined(li);
            // should return the shared data only
            assertEquals("EUR", li.getCurrency());
            assertEquals(1, li.getFirstDayOfWeek());
            assertEquals("FR", li.info.locale);
            assertEquals("Europe/Paris", li.getTimeZone());
        }
    });
    assertNotNull(info);
    ilib.setLoaderCallback(undefined);
}

// locale with no script
ilib.data.localeinfo_fr_FR_overseas = {
    "currency": "USD",
    "locale": "fr-FR-overseas",
    "timezone": "Pacific/Tahiti"
};

function testLocaleInfoLoadMissingLocaleParts() {
    if (ilib.isDynData()) {
        // should not test mixed loading on the dynamic load version because it was not designed for it
        return;
    }
    var li = new LocaleInfo("fr-FR-overseas");
    assertNotUndefined(li);
    assertEquals("USD", li.getCurrency());
    assertEquals(1, li.getFirstDayOfWeek());
    assertEquals("fr-FR-overseas", li.info.locale);
    assertEquals("Pacific/Tahiti", li.getTimeZone());
}

function testLocaleInfoGetAllScriptsSingle() {
    var li = new LocaleInfo("nl-NL");
    assertNotUndefined(li);
    assertArrayEqualsIgnoringOrder(["Latn"], li.getAllScripts());
}

function testLocaleInfoGetAllScriptsMultiple1() {
    var li = new LocaleInfo("de-DE");
    assertNotUndefined(li);
    assertArrayEqualsIgnoringOrder(["Latn", "Runr"], li.getAllScripts());
}

function testLocaleInfoGetAllScriptsMultiple2() {
    var li = new LocaleInfo("uz-UZ");
    assertNotUndefined(li);
    assertArrayEqualsIgnoringOrder(["Arab", "Cyrl", "Latn"], li.getAllScripts());
}

function testLocaleInfoGetDefaultScriptSingle() {
    var li = new LocaleInfo("nl-NL");
    assertNotUndefined(li);
    assertEquals("Latn", li.getDefaultScript());
}

function testLocaleInfoGetDefaultScriptMultiple() {
    var li = new LocaleInfo("uz-UZ");
    assertNotUndefined(li);
    assertEquals("Arab", li.getDefaultScript());
}

function testLocaleInfoGetScriptSingle() {
    var li = new LocaleInfo("nl-NL");
    assertNotUndefined(li);
    assertEquals("Latn", li.getScript());
}

function testLocaleInfoGetScriptMultiple() {
    var li = new LocaleInfo("uz-UZ");
    assertNotUndefined(li);
    assertEquals("Arab", li.getScript());
}

function testLocaleInfoGetScriptMultipleLocaleOverride() {
    var li = new LocaleInfo("uz-Cyrl-UZ");
    assertNotUndefined(li);
    assertEquals("Cyrl", li.getScript());
}

function testLocaleInfoGetLanguageName1() {
    var li = new LocaleInfo("he-IL");
    assertNotUndefined(li);
    assertEquals("Hebrew", li.getLanguageName());
}

function testLocaleInfoGetLanguageName2() {
    var li = new LocaleInfo("es-MX");
    assertNotUndefined(li);
    assertEquals("Spanish", li.getLanguageName());
}

function testLocaleInfoGetLanguageName3() {
    var li = new LocaleInfo("asa-TZ");
    assertNotUndefined(li);
    assertEquals("Asu", li.getLanguageName());
}

function testLocaleInfoGetRegionName1() {
    var li = new LocaleInfo("he-IL");
    assertNotUndefined(li);
    assertEquals("Israel", li.getRegionName());
}

function testLocaleInfoGetRegionName2() {
    var li = new LocaleInfo("es-MX");
    assertNotUndefined(li);
    assertEquals("Mexico", li.getRegionName());
}

function testLocaleInfoGetRegionName3() {
    var li = new LocaleInfo("asa-TZ");
    assertNotUndefined(li);
    assertEquals("Tanzania", li.getRegionName());
}

function testGetDigitsWestern() {
    var li = new LocaleInfo("en-US");
    assertNotUndefined(li);
    assertUndefined(li.getDigits());
}

function testGetDigitsWesternNative() {
    var li = new LocaleInfo("en-US");
    assertNotUndefined(li);
    assertUndefined(li.getDigits());
}

function testGetDigitsNonWesternOptional() {
    var li = new LocaleInfo("hi-IN");
    assertNotUndefined(li);
    assertUndefined(li.getDigits());
}

function testGetDigitsNonWesternNative() {
    var li = new LocaleInfo("hi-IN");
    assertNotUndefined(li);
    assertEquals("०१२३४५६७८९", li.getNativeDigits());
}

function testGetDigitsNonWesternUsual() {
    var li = new LocaleInfo("bn-IN");
    assertNotUndefined(li);
    assertEquals("০১২৩৪৫৬৭৮৯", li.getDigits());
}

function testGetDigitsNonWesternUsualNative() {
    var li = new LocaleInfo("bn-IN");
    assertNotUndefined(li);
    assertEquals("০১২৩৪৫৬৭৮৯", li.getNativeDigits());
}

function testGetDigitsStyleWestern() {
    var li = new LocaleInfo("en-US");
    assertNotUndefined(li);
    assertEquals("western", li.getDigitsStyle());
}

function testGetDigitsStyleOptional() {
    var li = new LocaleInfo("hi-IN");
    assertNotUndefined(li);
    assertEquals("optional", li.getDigitsStyle());
}

function testGetDigitsStyleNative() {
    var li = new LocaleInfo("bn-IN");
    assertNotUndefined(li);
    assertEquals("native", li.getDigitsStyle());
}
/*Get weekend Data*/
function testLocaleInfoGetWeekendUS() {
    var info = new LocaleInfo("en-US");
    assertNotNull(info);

    assertEquals(6, info.getWeekEndStart());
    assertEquals(0, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendDE() {
    var info = new LocaleInfo("de-DE");
    assertNotNull(info);

    assertEquals(6, info.getWeekEndStart());
    assertEquals(0, info.getWeekEndEnd());
}


function testLocaleInfoGetWeekendFR() {
    var info = new LocaleInfo("fr-FR");
    assertNotNull(info);

    assertEquals(6, info.getWeekEndStart());
    assertEquals(0, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendAE() {
    var info = new LocaleInfo("ar-AE");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(6, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendBH() {
    var info = new LocaleInfo("ar-BH");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(6, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendDZ() {
    var info = new LocaleInfo("ar-DZ");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(6, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendEG() {
    var info = new LocaleInfo("ar-EG");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(6, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendIL() {
    var info = new LocaleInfo("he-IL");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(6, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendIQ() {
    var info = new LocaleInfo("ar-IQ");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(6, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendJO() {
    var info = new LocaleInfo("ar-JO");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(6, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendKW() {
    var info = new LocaleInfo("ar-KW");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(6, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendLY() {
    var info = new LocaleInfo("ar-LY");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(6, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendMA() {
    var info = new LocaleInfo("ar-MA");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(6, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendOM() {
    var info = new LocaleInfo("ar-OM");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(6, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendQA() {
    var info = new LocaleInfo("ar-QA");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(6, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendSA() {
    var info = new LocaleInfo("ar-SA");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(6, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendSD() {
    var info = new LocaleInfo("ar-SD");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(6, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendSY() {
    var info = new LocaleInfo("ar-SY");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(6, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendTN() {
    var info = new LocaleInfo("ar-TN");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(6, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendYE() {
    var info = new LocaleInfo("ar-YE");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(6, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendAF() {
    var info = new LocaleInfo("ps-AF");
    assertNotNull(info);

    assertEquals(4, info.getWeekEndStart());
    assertEquals(5, info.getWeekEndEnd());
}

function testLocaleInfoGetWeekendIR() {
    var info = new LocaleInfo("fa-IR");
    assertNotNull(info);

    assertEquals(5, info.getWeekEndStart());
    assertEquals(5, info.getWeekEndEnd());
}
function testLocaleInfoGetWeekendIN() {
    var info = new LocaleInfo("hi-IN");
    assertNotNull(info);

    assertEquals(0, info.getWeekEndStart());
    assertEquals(0, info.getWeekEndEnd());
}
function testLocaleInfoGetWeekendIN() {
    var info = new LocaleInfo("az-Latn-AZ");
    assertNotNull(info);

    assertEquals(6, info.getWeekEndStart());
    assertEquals(0, info.getWeekEndEnd());
}

function testLocaleInfoGetMeridiemsStyleDefault() {
    var info = new LocaleInfo();
    assertNotNull(info);

    assertEquals("gregorian", info.getMeridiemsStyle());
}
function testLocaleInfoGetMeridiemsStyleUS() {
    var info = new LocaleInfo("en-US");
    assertNotNull(info);

    assertEquals("gregorian", info.getMeridiemsStyle());
}
function testLocaleInfoGetMeridiemsStyle_am_ET() {
    var info = new LocaleInfo("am-ET");
    assertNotNull(info);

    assertEquals("ethiopic", info.getMeridiemsStyle());
}
function testLocaleInfoGetMeridiemsStyle_zh_Hans_CN() {
    var info = new LocaleInfo("zh-Hans-CN");
    assertNotNull(info);

    // Even for the Chinese locales, the default is
    // Gregorian style. To format with Chinese style,
    // you have to explicitly request it when constructing
    // the date formatter instance.
    assertEquals("gregorian", info.getMeridiemsStyle());
}

function testLocaleInfoPaperSizeDefault() {
    var info = new LocaleInfo();
    assertNotNull(info);

    // If locale is not specified, default locale would be return as "en-US".
    assertEquals("8x11", info.getPaperSize());
}

function testLocaleInfoPaperSize_en_US() {
    var info = new LocaleInfo("en-US");
    assertNotNull(info);

    assertEquals("8x11", info.getPaperSize());
}

function testLocaleInfoPaperSize_ko_KR() {
    var info = new LocaleInfo("ko-KR");
    assertNotNull(info);

    assertEquals("A4", info.getPaperSize());
}

function testLocaleInfoPaperSize_es_MX() {
    var info = new LocaleInfo("es-MX");
    assertNotNull(info);

    assertEquals("8x11", info.getPaperSize());
}

function testLocaleInfoPaperSize_es_SV() {
    var info = new LocaleInfo("es-SV");
    assertNotNull(info);

    assertEquals("8x11", info.getPaperSize());
}

function testLocaleInfoPaperSize_es_PR() {
    var info = new LocaleInfo("es-PR");
    assertNotNull(info);

    assertEquals("8x11", info.getPaperSize());
}

function testLocaleInfoPaperSize_es_VE() {
    var info = new LocaleInfo("es-VE");
    assertNotNull(info);

    assertEquals("8x11", info.getPaperSize());
}

function testLocaleInfoPaperSize_fr_FR() {
    var info = new LocaleInfo("fr-FR");
    assertNotNull(info);

    assertEquals("A4", info.getPaperSize());
}

function testLocaleInfoPaperSize_de_DE() {
    var info = new LocaleInfo("de-DE");
    assertNotNull(info);

    assertEquals("A4", info.getPaperSize());
}

function testLocaleInfoPaperSize_it_IT() {
    var info = new LocaleInfo("it-IT");
    assertNotNull(info);

    assertEquals("A4", info.getPaperSize());
}

function testLocaleInfoPaperSize_zh_CN() {
    var info = new LocaleInfo("zh-CN");
    assertNotNull(info);

    assertEquals("A4", info.getPaperSize());
}

function testLocaleInfoQuotation_en_US() {
    var info = new LocaleInfo("en-US");
    assertNotNull(info);
}

function testLocaleInfoQuotation_ko_KR() {
	var info = new LocaleInfo("ko-KR");
	assertNotNull(info);
	
	assertEquals("“", info.getDelimiterQuotationStart());
	assertEquals("”", info.getDelimiterQuotationEnd());
}

function testLocaleInfoQuotation_es_ES() {
	var info = new LocaleInfo("es-ES");
	assertNotNull(info);
	
	assertEquals("«", info.getDelimiterQuotationStart());
	assertEquals("»", info.getDelimiterQuotationEnd());
}

function testLocaleInfoQuotation_zh_CN() {
	var info = new LocaleInfo("zh-CN");
	assertNotNull(info);
	
	assertEquals("“", info.getDelimiterQuotationStart());
	assertEquals("”", info.getDelimiterQuotationEnd());
}

function testLocaleInfoQuotation_fa_IR() {
	var info = new LocaleInfo("fa-IR");
	assertNotNull(info);
	
	assertEquals("«", info.getDelimiterQuotationStart());
	assertEquals("»", info.getDelimiterQuotationEnd());
}

function testLocaleInfoQuotation_de_DE() {
	var info = new LocaleInfo("de-DE");
	assertNotNull(info);
	
	assertEquals("„", info.getDelimiterQuotationStart());
	assertEquals("“", info.getDelimiterQuotationEnd());
}

function testLocaleInfoQuotation_pt_BR() {
	var info = new LocaleInfo("pt-BR");
	assertNotNull(info);
	
	assertEquals("“", info.getDelimiterQuotationStart());
	assertEquals("”", info.getDelimiterQuotationEnd());
}

function testLocaleInfoQuotation_hy_AM() {
	var info = new LocaleInfo("hy-AM");
	assertNotNull(info);
	
	assertEquals("«", info.getDelimiterQuotationStart());
	assertEquals("»", info.getDelimiterQuotationEnd());
}

function testLocaleInfoQuotation_ur_IN() {
	var info = new LocaleInfo("ur-IN");
	assertNotNull(info);
	
	assertEquals("”", info.getDelimiterQuotationStart());
	assertEquals("“", info.getDelimiterQuotationEnd());
}

function testLocaleInfoQuotation_fr_CA() {
	var info = new LocaleInfo("fr-CA");
	assertNotNull(info);
	
	assertEquals("«", info.getDelimiterQuotationStart());
	assertEquals("»", info.getDelimiterQuotationEnd());
}

function testLocaleInfoQuotation_he_IL() {
	var info = new LocaleInfo("he-IL");
	assertNotNull(info);
	
	assertEquals("”", info.getDelimiterQuotationStart());
	assertEquals("”", info.getDelimiterQuotationEnd());
}

function testLocaleInfoQuotation_uz_Latn_UZ() {
	var info = new LocaleInfo("uz-Latn-UZ");
	assertNotNull(info);
	
	assertEquals("“", info.getDelimiterQuotationStart());
	assertEquals("”", info.getDelimiterQuotationEnd());
}

function testLocaleInfoQuotation_ro_RO() {
	var info = new LocaleInfo("ro-RO");
	assertNotNull(info);
	
	assertEquals("„", info.getDelimiterQuotationStart());
	assertEquals("”", info.getDelimiterQuotationEnd());
}

function testLocaleInfoQuotation_bs_BA() {
	var info = new LocaleInfo("bs-BA");
	assertNotNull(info);
	
	assertEquals("„", info.getDelimiterQuotationStart());
	assertEquals("”", info.getDelimiterQuotationEnd());
}

function testLocaleInfoQuotation_el_CY() {
	var info = new LocaleInfo("el-CY");
	assertNotNull(info);
	
	assertEquals("«", info.getDelimiterQuotationStart());
	assertEquals("»", info.getDelimiterQuotationEnd());
}

function testLocaleInfoQuotation_kk_KZ() {
	var info = new LocaleInfo("kk-KZ");
	assertNotNull(info);
	
	assertEquals("«", info.getDelimiterQuotationStart());
	assertEquals("»", info.getDelimiterQuotationEnd());
}

function testLocaleInfoQuotation_az_Latn_AZ() {
	var info = new LocaleInfo("az-Latn-AZ");
	assertNotNull(info);

	assertEquals("“", info.getDelimiterQuotationStart());
	assertEquals("”", info.getDelimiterQuotationEnd());
}

function testLocaleInfoQuotation_de_CH() {
	var info = new LocaleInfo("de-CH");
	assertNotNull(info);

	assertEquals("„", info.getDelimiterQuotationStart());
	assertEquals("“", info.getDelimiterQuotationEnd());
}
