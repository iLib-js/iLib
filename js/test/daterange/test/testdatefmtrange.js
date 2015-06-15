/*
 * testdatefmtrange.js - test the date range formatter object
 * 
 * Copyright © 2012-2015, JEDLSoft
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

var ilib = require("./../lib/ilib.js");
var LocaleInfo = require("./../lib/LocaleInfo.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
var DateFmt = require("./../lib/DateFmt.js");

function testDateRngFmtConstructorEmpty() {
    var fmt = new DateRngFmt();
    
    assertNotNull(fmt);
}

function testDateRngFmtConstructorDefaultLocale() {
    var fmt = new DateRngFmt();
    
    assertNotNull(fmt);
    
    assertEquals("en-US", fmt.getLocale().toString());
}

function testDateRngFmtGetCalendarDefault() {
    var fmt = new DateRngFmt();
    
    assertNotNull(fmt);
    var cal = fmt.getCalendar();
    assertNotNull(cal);
    
    assertEquals("gregorian", cal);
}

function testDateRngFmtGetCalendarExplicit() {
    var fmt = new DateRngFmt({calendar: "julian"});
    
    assertNotNull(fmt);
    var cal = fmt.getCalendar();
    assertNotNull(cal);
    
    assertEquals("julian", cal);
}

function testDateRngFmtGetCalendarExplicitDefault() {
    var fmt = new DateRngFmt({calendar: "gregorian"});
    
    assertNotNull(fmt);
    var cal = fmt.getCalendar();
    assertNotNull(cal);
    
    assertEquals("gregorian", cal);
}

function testDateRngFmtGetCalendarNotInThisLocale() {
    try {
        var fmt = new DateRngFmt({calendar: "arabic", locale: 'en-US'});
        fail();
    } catch (str) {
        assertEquals("string", typeof(str));
        assertEquals("No formats available for calendar arabic in locale en-US", str);
    }
}

function testDateRngFmtGetLength() {
    var fmt = new DateRngFmt({length: "full"});
    assertNotNull(fmt);
    
    assertEquals("full", fmt.getLength());
}

function testDateRngFmtGetLengthDefault() {
    var fmt = new DateRngFmt();
    assertNotNull(fmt);
    
    assertEquals("short", fmt.getLength());
}

function testDateRngFmtGetLengthBogus() {
    var fmt = new DateRngFmt({length: "asdf"});
    assertNotNull(fmt);
    
    assertEquals("short", fmt.getLength());
}

function testDateRngFmtGetLocale() {
    var fmt = new DateRngFmt({locale: "de-DE"});
    assertNotNull(fmt);
    
    assertEquals("de-DE", fmt.getLocale().toString());
}

function testDateRngFmtGetLocaleDefault() {
    var fmt = new DateRngFmt();
    assertNotNull(fmt);
    
    assertEquals("en-US", fmt.getLocale().toString());
}

function testDateRngFmtGetLocaleBogus() {
    var fmt = new DateRngFmt({locale: "zyy-XX"});
    assertNotNull(fmt);
    
    assertEquals("zyy-XX", fmt.getLocale().toString());
}

function testDateRngFmtGetClockDefaultUS() {
    var fmt = new DateRngFmt({locale: "en-US"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("12", fmt.getClock());
}

function testDateRngFmtGetClockDefaultDE() {
    var fmt = new DateRngFmt({locale: "de-DE"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("24", fmt.getClock());
}

function testDateRngFmtGetClock() {
    var fmt = new DateRngFmt({locale: "en-US", clock: "24"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("24", fmt.getClock());
}

function testDateRngFmtGetClockBogus() {
    var fmt = new DateRngFmt({locale: "en-US", clock: "asdf"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("12", fmt.getClock());
}

function testDateRngFmtGetTimeZoneDefault() {
	ilib.tz = undefined;	// just in case
    var fmt = new DateRngFmt();
    assertNotNull(fmt);
    
    var tz = fmt.getTimeZone();
    assertEquals("local", tz.getId());
}

function testDateRngFmtGetTimeZone() {
    var fmt = new DateRngFmt({timezone: "Europe/Paris"});
    assertNotNull(fmt);
    
    var tz = fmt.getTimeZone();
    assertEquals("Europe/Paris", tz.getId());
}

function testDateRngFmtGetDefaultLocale() {
    var fmt = new DateRngFmt({locale: "yy-YY"});
    assertNotNull(fmt);
    
    assertEquals("yy-YY", fmt.getLocale().toString());
}

function testDateRngFmtGetDefaultFormat() {
	DateFmt.cache = {};
	LocaleInfo.cache = {};
	var fmt = new DateRngFmt({locale: "yy-YY"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
    	year: 2013,
    	month: 2,
    	day: 20,
    	hour: 12,
    	minute: 20,
    	second: 0
    });
    
    var end = new GregorianDate({
    	year: 2013,
    	month: 2,
    	day: 20,
    	hour: 16,
    	minute: 35,
    	second: 0
    });
    
    assertEquals("12:20 - 16:35 20/2/13", fmt.format(start, end));
}


function mockLoader(paths, sync, params, callback) {
	var data = [];
	
	if (paths[0].indexOf("localeinfo") !== -1) {
		data.push(ilib.data.localeinfo); // for the generic, shared stuff
		data.push(ilib.data.localeinfo_en);
		data.push(ilib.data.localeinfo_US);
		data.push(ilib.data.localeinfo_en_US);
	} else {
		data.push(ilib.data.dateformats); // for the generic, shared stuff
		data.push(ilib.data.dateformats_en);
		data.push(ilib.data.dateformats_US);
		data.push(ilib.data.dateformats_en_US);
	}

	if (typeof(callback) !== 'undefined') {
		callback.call(this, data);	
	}
	return data;
}

function testDateRngFmtDynamicLoadSync() {
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	DateFmt.cache = {};
	LocaleInfo.cache = {};
	ilib.setLoaderCallback(mockLoader);
	
    var fmt = new DateRngFmt({
    	locale: "yy-YY"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
    	year: 2013,
    	month: 2,
    	day: 20,
    	hour: 12,
    	minute: 20,
    	second: 0
    });
    
    var end = new GregorianDate({
    	year: 2013,
    	month: 2,
    	day: 20,
    	hour: 16,
    	minute: 35,
    	second: 0
    });
    
    assertEquals("12:20 PM - 4:35 PM 2/20/13", fmt.format(start, end));
    ilib.setLoaderCallback(undefined);
}

function testDateRngFmtDynamicLoadSyncCached() {
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	
    var fmt = new DateRngFmt({
    	locale: "yy-YY"
	});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
    	year: 2013,
    	month: 2,
    	day: 20,
    	hour: 12,
    	minute: 20,
    	second: 0
    });
    
    var end = new GregorianDate({
    	year: 2013,
    	month: 2,
    	day: 20,
    	hour: 16,
    	minute: 35,
    	second: 0
    });
    
    assertEquals("12:20 PM - 4:35 PM 2/20/13", fmt.format(start, end));
    ilib.setLoaderCallback(undefined);
}

function testDateRngFmtDynamicLoadAsync() {
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	DateFmt.cache = {};
	LocaleInfo.cache = {};
	ilib.setLoaderCallback(mockLoader);

	var start = new GregorianDate({
    	year: 2013,
    	month: 2,
    	day: 20,
    	hour: 12,
    	minute: 20,
    	second: 0
    });
    
    var end = new GregorianDate({
    	year: 2013,
    	month: 2,
    	day: 20,
    	hour: 16,
    	minute: 35,
    	second: 0
    });
	
    new DateRngFmt({
    	locale: "yy-YY",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    assertEquals("12:20 PM - 4:35 PM 2/20/13", fmt.format(start, end));
    	}
    });
    ilib.setLoaderCallback(undefined);
}

function testDateRngFmtDynamicLoadAsyncCached() {
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);

	var start = new GregorianDate({
    	year: 2013,
    	month: 2,
    	day: 20,
    	hour: 12,
    	minute: 20,
    	second: 0
    });
    
    var end = new GregorianDate({
    	year: 2013,
    	month: 2,
    	day: 20,
    	hour: 16,
    	minute: 35,
    	second: 0
    });
	
    new DateRngFmt({
    	locale: "yy-YY",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    assertEquals("12:20 PM - 4:35 PM 2/20/13", fmt.format(start, end));
    	}
    });
    ilib.setLoaderCallback(undefined);
}
