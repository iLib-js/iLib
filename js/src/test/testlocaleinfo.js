/*
 * testlocaleinfo.js - test the locale info object
 * 
 * Copyright © 2012, JEDLSoft
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

    assertEquals("Europe/London", info.getTimeZone());
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
    var info = new ilib.LocaleInfo("xx-XX");    
    assertNotNull(info);

    assertEquals("USD", info.getCurrency());
}

function testLocaleInfoGetRoundingModeDefault() {
    var info = new ilib.LocaleInfo();    
    assertNotNull(info);

    assertEquals("halfdown", info.getRoundingMode());
}

function testLocaleInfoGetRoundingModexx() {
    var info = new ilib.LocaleInfo("xx-XX");    
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

    assertEquals(3, info.getGroupingDigits());
}

function testLocaleInfoGetGroupingDigits2() {
    var info = new ilib.LocaleInfo("de-DE");    
    assertNotNull(info);

    assertEquals(3, info.getGroupingDigits());
}

function testLocaleInfoGetGroupingDigits3() {
    var info = new ilib.LocaleInfo("zh-CN");    
    assertNotNull(info);

    assertEquals(3, info.getGroupingDigits());
}

function testLocaleInfoGetPercentageFormat1() {
    var info = new ilib.LocaleInfo();    
    assertNotNull(info);

    assertEquals("{n}%", info.getPercentageFormat());
}

function testLocaleInfoGetPercentageFormat2() {
    var info = new ilib.LocaleInfo("fr-FR");    
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
