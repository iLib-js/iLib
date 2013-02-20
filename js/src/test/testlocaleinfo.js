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

function mockLoader(context, paths, callback) {
	var data = [];
	
	data.push(ilib.data.localeinfo); // for the generic, shared stuff
	paths.shift();
	paths.forEach(function (path) {
		data.push((path.indexOf('mm') === -1) ? undefined : {
			"clock": "24",
			"currencyFormats": {
				"common": "common {s} {n}",
				"iso": "iso {s} {n}"
			},
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
				"pctChar": "%"
			},
			"locale": "xx-XX"
		});
	});
	if (typeof(callback) === 'undefined') {
		return data;
	}
	callback.call(context, data);
};

function testLocaleInfoLoadMissingDataAsynch() {
	var callbackCalled = false;
	ilib.setLoaderCallback(mockLoader);
	ilib.data.localeInfo = {}; // empty the cache
    var info = new ilib.LocaleInfo("mm-MM", {
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
	ilib.data.localeInfo = {}; // empty the cache
	ilib.setLoaderCallback(undefined);
    var info = new ilib.LocaleInfo("mm-MM");
    assertNotNull(info);

    assertEquals("iso {s} {n}", info.getCurrencyFormats().iso);
    assertEquals(4, info.getFirstDayOfWeek());
    assertEquals("%", info.getPercentageSymbol());
}

function testLocaleInfoLoadMissingDataAsynchNoData() {
	var callbackCalled = false;
	ilib.data.localeInfo = {}; // empty the cache
	ilib.setLoaderCallback(mockLoader);
    var info = new ilib.LocaleInfo("qq-QQ", {
    	onLoad: function (li) {
    	    assertNotUndefined(li);
    	    callbackCalled = true;
    	    // should return the shared data only
    	    assertEquals("{s} {n}", li.getCurrencyFormats().iso);
    	    assertEquals(0, li.getFirstDayOfWeek());
    	    assertEquals("%", li.getPercentageSymbol());
    	}
    });
    assertNotNull(info);
    assertTrue(callbackCalled);
}

function testLocaleInfoLoadMissingDataSyncNoData() {
	ilib.data.localeInfo = {}; // empty the cache
    var li = new ilib.LocaleInfo("qq-QQ");
    ilib.setLoaderCallback(undefined);
    assertNotUndefined(li);
    // should return the shared data only
    assertEquals("{s} {n}", li.getCurrencyFormats().iso);
    assertEquals(0, li.getFirstDayOfWeek());
    assertEquals("%", li.getPercentageSymbol());
}

function testLocaleInfoLoadPreassembledDataAsynch() {
	var callbackCalled = false;
	ilib.data.localeInfo = {}; // empty the cache
	ilib.setLoaderCallback(mockLoader);
    var info = new ilib.LocaleInfo("fr-FR", {
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
	ilib.data.localeInfo = {}; // empty the cache
	var li = new ilib.LocaleInfo("fr-FR-overseas");
    assertNotUndefined(li);
    assertEquals("USD", li.getCurrency());
    assertEquals(1, li.getFirstDayOfWeek());
    assertEquals("fr-FR-overseas", li.info.locale);
    assertEquals("Pacific/Tahiti", li.getTimeZone());
}
