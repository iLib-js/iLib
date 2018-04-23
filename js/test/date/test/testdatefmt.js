/*
 * testdatefmt.js - test the date formatter object
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
var ThaiSolarDate = require("./../lib/ThaiSolarDate.js");
var PersianDate = require("./../lib/PersianDate.js");
var IslamicDate = require("./../lib/IslamicDate.js");
var HebrewDate = require("./../lib/HebrewDate.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var JulianDate = require("./../lib/JulianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
var DateFactory = require("./../lib/DateFactory.js");

function mockLoader(paths, sync, params, callback) {
    var data = [];
    
    if (paths[0].indexOf("localeinfo") !== -1) {
        data.push(ilib.data.localeinfo); // for the generic, shared stuff
        data.push(ilib.data.localeinfo_de);
    } else {
        data.push(ilib.data.dateformats); // for the generic, shared stuff
        data.push(ilib.data.dateformats_de);
    }

    if (typeof(callback) !== 'undefined') {
        callback.call(this, data);  
    }
    return data;
}

var oldLoader = ilib._load;


function testDateFmtConstructorEmpty() {
	var fmt = new DateFmt();
    
    assertNotNull(fmt);
};

function testDateFmtConstructorDefaultLocale() {
    var fmt = new DateFmt();
    
    assertNotNull(fmt);
    
    assertEquals("en-US", fmt.getLocale().toString());
};

function testDateFmtGetCalendarDefault() {
    var fmt = new DateFmt();
    
    assertNotNull(fmt);
    var cal = fmt.getCalendar();
    assertNotNull(cal);
    
    assertEquals("gregorian", cal);
};

function testDateFmtGetCalendarExplicit() {
    var fmt = new DateFmt({calendar: "julian"});
    
    assertNotNull(fmt);
    var cal = fmt.getCalendar();
    assertNotNull(cal);
    
    assertEquals("julian", cal);
};

function testDateFmtGetCalendarExplicitDefault() {
    var fmt = new DateFmt({calendar: "gregorian"});
    
    assertNotNull(fmt);
    var cal = fmt.getCalendar();
    assertNotNull(cal);
    
    assertEquals("gregorian", cal);
};

function testDateFmtGetCalendarNotInThisLocale() {
	try {
    	new DateFmt({calendar: "arabic", locale: 'en-US'});
    	fail();
	} catch (str) {
        assertEquals("string", typeof(str));
		assertEquals("No formats available for calendar arabic in locale en-US", str);
	}
};

function testDateFmtGetLength() {
    var fmt = new DateFmt({length: "full"});
    assertNotNull(fmt);
    
    assertEquals("full", fmt.getLength());
};

function testDateFmtGetLengthDefault() {
    var fmt = new DateFmt();
    assertNotNull(fmt);
    
    assertEquals("short", fmt.getLength());
};

function testDateFmtGetLengthBogus() {
    var fmt = new DateFmt({length: "asdf"});
    assertNotNull(fmt);
    
    assertEquals("short", fmt.getLength());
};


function testDateFmtGetType() {
    var fmt = new DateFmt({type: "time"});
    assertNotNull(fmt);
    
    assertEquals("time", fmt.getType());
};

function testDateFmtGetTypeDefault() {
    var fmt = new DateFmt();
    assertNotNull(fmt);
    
    assertEquals("date", fmt.getType());
};

function testDateFmtGetTypeBogus() {
    var fmt = new DateFmt({type: "asdf"});
    assertNotNull(fmt);
    
    assertEquals("date", fmt.getType());
};


function testDateFmtGetLocale() {
    var fmt = new DateFmt({locale: "de-DE"});
    assertNotNull(fmt);
    
    assertEquals("de-DE", fmt.getLocale().toString());
};

function testDateFmtGetLocaleDefault() {
    var fmt = new DateFmt();
    assertNotNull(fmt);
    
    assertEquals("en-US", fmt.getLocale().toString());
};

function testDateFmtGetLocaleBogus() {
    var fmt = new DateFmt({locale: "zyy-XX"});
    assertNotNull(fmt);
    
    assertEquals("zyy-XX", fmt.getLocale().toString());
};

function testDateFmtGetTimeComponentsDefault() {
    var fmt = new DateFmt();
    assertNotNull(fmt);
    
    assertEquals("ahm", fmt.getTimeComponents());
};

function testDateFmtGetTimeComponents() {
    var fmt = new DateFmt({time: "hmsaz"});
    assertNotNull(fmt);
    
    assertEquals("ahmsz", fmt.getTimeComponents());
};

function testDateFmtGetTimeComponentsReorder() {
    var fmt = new DateFmt({time: "zahms"});
    assertNotNull(fmt);
    
    assertEquals("ahmsz", fmt.getTimeComponents());
};

function testDateFmtGetTimeComponentsBogus() {
    var fmt = new DateFmt({time: "asdf"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("ahm", fmt.getTimeComponents());
};

function testDateFmtGetTimeComponentsICUSkeleton1() {
    var fmt = new DateFmt({time: "EHm"});
    assertNotNull(fmt);
    
    assertEquals("hm", fmt.getTimeComponents());
};

function testDateFmtGetTimeComponentsICUSkeleton2() {
    var fmt = new DateFmt({time: "Hms"});
    assertNotNull(fmt);
    
    assertEquals("hms", fmt.getTimeComponents());
};

function testDateFmtGetTimeComponentsICUSkeleton3() {
    var fmt = new DateFmt({time: "Ehms"});
    assertNotNull(fmt);
    
    // ignore the non-time components
    assertEquals("hms", fmt.getTimeComponents());
};

function testDateFmtGetTimeComponentsICUSkeleton3() {
    var fmt = new DateFmt({time: "yMdhms"});
    assertNotNull(fmt);
    
    // ignore the non-time components
    assertEquals("hms", fmt.getTimeComponents());
};

function testDateFmtGetDateComponentsDefault() {
    var fmt = new DateFmt();
    assertNotNull(fmt);
    
    assertEquals("dmy", fmt.getDateComponents());
};

function testDateFmtGetDateComponents() {
    var fmt = new DateFmt({date: "dmwy"});
    assertNotNull(fmt);
    
    assertEquals("dmwy", fmt.getDateComponents());
};

function testDateFmtGetDateComponentsReorder() {
    var fmt = new DateFmt({date: "wmdy"});
    assertNotNull(fmt);
    
    assertEquals("dmwy", fmt.getDateComponents());
};

function testDateFmtGetDateComponentsBogus() {
    var fmt = new DateFmt({date: "asdf"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("dmy", fmt.getDateComponents());
};

function testDateFmtGetDateComponentsICUSkeleton1() {
    var fmt = new DateFmt({date: "yMMMMd"});
    assertNotNull(fmt);
    
    assertEquals("dmy", fmt.getDateComponents());
};

function testDateFmtGetDateComponentsICUSkeleton2() {
    var fmt = new DateFmt({date: "yMMd"});
    assertNotNull(fmt);
    
    assertEquals("dmy", fmt.getDateComponents());
};

function testDateFmtGetDateComponentsICUSkeleton3() {
    var fmt = new DateFmt({date: "yMMMM"});
    assertNotNull(fmt);
    
    assertEquals("my", fmt.getDateComponents());
};

function testDateFmtGetDateComponentsICUSkeleton4() {
    var fmt = new DateFmt({date: "MMMEd"});
    assertNotNull(fmt);
    
    assertEquals("dmw", fmt.getDateComponents());
};

function testDateFmtGetDateComponentsICUSkeleton5() {
    var fmt = new DateFmt({date: "GyMMMEd"});
    assertNotNull(fmt);
    
    // ignore the era
    assertEquals("dmwy", fmt.getDateComponents());
};

function testDateFmtGetDateComponentsICUSkeleton6() {
    var fmt = new DateFmt({date: "MMddhms"});
    assertNotNull(fmt);
    
    // ignore the time components
    assertEquals("dm", fmt.getDateComponents());
};

function testDateFmtGetClockDefaultUS() {
    var fmt = new DateFmt({locale: "en-US"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("12", fmt.getClock());
};

function testDateFmtGetClockDefaultDE() {
    var fmt = new DateFmt({locale: "de-DE"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("24", fmt.getClock());
};

function testDateFmtGetClockDefaultJP() {
    var fmt = new DateFmt({locale: "ja-JP"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("24", fmt.getClock());
};

function testDateFmtGetClock() {
    var fmt = new DateFmt({locale: "en-US", clock: "24"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("24", fmt.getClock());
};

function testDateFmtGetClockBogus() {
    var fmt = new DateFmt({locale: "en-US", clock: "asdf"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("12", fmt.getClock());
};

function testDateFmtGetTimeZoneDefault() {
	ilib.tz = undefined;	// just in case
    var fmt = new DateFmt();
    if (ilib._getPlatform() === "nodejs") {
        process.env.TZ = "";
    }
    
    assertNotNull(fmt);
    
    assertEquals("local", fmt.getTimeZone().getId());
};

function testDateFmtGetTimeZone() {
    var fmt = new DateFmt({timezone: "Europe/Paris"});
    assertNotNull(fmt);
    
    assertEquals("Europe/Paris", fmt.getTimeZone().getId());
};

function testDateFmtGetTemplateDefault() {
    var fmt = new DateFmt();
    assertNotNull(fmt);
    
    assertEquals("M/d/yy", fmt.getTemplate());
};

function testDateFmtGetTemplate() {
    var fmt = new DateFmt({template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("EEE 'the' DD 'of' MM, yyyy G", fmt.getTemplate());
};

function testDateFmtGetTemplateIgnoreProperties() {
    var fmt = new DateFmt({date: 'y', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("EEE 'the' DD 'of' MM, yyyy G", fmt.getTemplate());
};

function testDateFmtUseTemplateEmptyDateComponents() {
    var fmt = new DateFmt({date: 'y', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("", fmt.getDateComponents());
};

function testDateFmtUseTemplateEmptyTimeComponents() {
    var fmt = new DateFmt({time: 'h', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("", fmt.getTimeComponents());
};

function testDateFmtUseTemplateEmptyLength() {
    var fmt = new DateFmt({length: 'short', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("", fmt.getLength());
};

function testDateFmtUseTemplateNonEmptyCalendar() {
    var fmt = new DateFmt({calendar: 'julian', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("julian", fmt.getCalendar());
};

function testDateFmtUseTemplateNonEmptyLocale() {
    var fmt = new DateFmt({locale: 'de-DE', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("de-DE", fmt.getLocale().toString());
};

function testDateFmtUseTemplateNonEmptyClock() {
    var fmt = new DateFmt({clock: "24", template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("24", fmt.getClock());
};

function testDateFmtUseTemplateWithClockHH() {
    var fmt = new DateFmt({clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    assertEquals("HH:mm", fmt.getTemplate());
};

function testDateFmtUseTemplateWithClockKK() {
    var fmt = new DateFmt({clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    assertEquals("kk:mm", fmt.getTemplate());
};

function testDateFmtUseTemplateWithClockhh() {
    var fmt = new DateFmt({clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    assertEquals("hh:mm", fmt.getTemplate());
};

function testDateFmtUseTemplateWithClockkk() {
    var fmt = new DateFmt({clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    assertEquals("KK:mm", fmt.getTemplate());
};

function testDateFmtUseTemplateWithClockHHSkipEscapedStrings24() {
    var fmt = new DateFmt({clock: "24", template: "'hh' hh:mm"});
    assertNotNull(fmt);
    
    assertEquals("'hh' HH:mm", fmt.getTemplate());
};

function testDateFmtUseTemplateWithClockHHSkipEscapedStrings12() {
    var fmt = new DateFmt({clock: "12", template: "'HH' HH:mm"});
    assertNotNull(fmt);
    
    assertEquals("'HH' hh:mm", fmt.getTemplate());
};

function testDateFmtUseTemplateNonEmptyTimeZone() {
    var fmt = new DateFmt({timezone: 'Europe/Paris', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    var tz = fmt.getTimeZone();
    assertNotUndefined(tz);
    assertEquals("Europe/Paris", tz.getId());
};

function testDateFmtGetTemplateCalendar() {
    var fmt = new DateFmt({calendar: "julian"});
    assertNotNull(fmt);
    
    assertEquals("M/d/yy", fmt.getTemplate());
};

function testDateFmtGetTemplateLocale() {
    var fmt = new DateFmt({locale: "de-DE"});
    assertNotNull(fmt);
    
    assertEquals("dd.MM.yy", fmt.getTemplate());
};

function testDateFmtGetTemplateLength() {
    var fmt = new DateFmt({length: "long"});
    assertNotNull(fmt);
    
    assertEquals("MMMM d, yyyy", fmt.getTemplate());
};

function testDateFmtGetTemplateTypeDateTime() {
    var fmt = new DateFmt({type: "datetime"});
    assertNotNull(fmt);
    
    assertEquals("M/d/yy, h:mm a", fmt.getTemplate());
};

function testDateFmtGetTemplateTypeTime() {
    var fmt = new DateFmt({type: "time"});
    assertNotNull(fmt);
    
    assertEquals("h:mm a", fmt.getTemplate());
};

function testDateFmtGetTemplateDateComponents() {
    var fmt = new DateFmt({date: "wdm"});
    assertNotNull(fmt);
    
    assertEquals("E, M/d", fmt.getTemplate());
};

function testDateFmtGetTemplateDateComponentsWithICUSkeleton() {
    var fmt = new DateFmt({date: "MMMEd"});
    assertNotNull(fmt);
    
    assertEquals("E, M/d", fmt.getTemplate());
};

function testDateFmtGetTemplateTimeComponents() {
    var fmt = new DateFmt({type: "time", time: "hm"});
    assertNotNull(fmt);
    
    assertEquals("h:mm", fmt.getTemplate());
};

function testDateFmtGetTemplateTimeComponentsWithICUSkeleton() {
    var fmt = new DateFmt({type: "time", time: "Hm"});
    assertNotNull(fmt);
    
    assertEquals("h:mm", fmt.getTemplate());
};

function testDateFmtGetTemplateTypeTime24() {
    var fmt = new DateFmt({type: "time", clock: "24"});
    assertNotNull(fmt);
    
    assertEquals("HH:mm", fmt.getTemplate());
};

function testDateFmtTokenizeSimple() {
    var fmt = new DateFmt();
    assertNotNull(fmt);
    var expected = [
        "MMM",
        " ",
        "d"
    ];
    
    assertArrayEquals(expected, fmt._tokenize("MMM d"));
};

function testDateFmtTokenizeAdjacentParts() {
    var fmt = new DateFmt();
    assertNotNull(fmt);
    var expected = [
        "hh",
        ":",
        "mm",
        "a"
    ];
    
    assertArrayEquals(expected, fmt._tokenize("hh:mma"));
};

function testDateFmtTokenizeComplex() {
    var fmt = new DateFmt();
    assertNotNull(fmt);
    var expected = [
        "dd",
        "/",
        "MM",
        "/",
        "yyyy",
        ", ",
        "h",
        ":",
        "mm",
        ":",
        "ss",
        "a",
        " ",
        "z"
    ];
    
    assertArrayEquals(expected, fmt._tokenize("dd/MM/yyyy, h:mm:ssa z"));
};

function testDateFmtTokenizeWithEscapes() {
    var fmt = new DateFmt();
    assertNotNull(fmt);
    var expected = [
        "'El'",
        " ",
        "d",
        " ",
        "'de'",
        " ",
        "MMMM",
        ", ",
        "yyyy"
    ];
    
    assertArrayEquals(expected, fmt._tokenize("'El' d 'de' MMMM, yyyy"));
};

function testDateFmtAlternateInputs1() {
	// toUTCString doesn't work properly on qt, so we can't do this test
	if (ilib._getPlatform() !== "qt") {
	    var fmt = new DateFmt({
	    	timezone: "Etc/UTC", 
	    	template: "EEE, d MMM yyyy kk:mm:ss z"
	    });
	    assertNotNull(fmt);
	    
	    var datMyBday = new Date("Fri Aug 13 1982 13:37:35 GMT-0700");
	    var ildMyBday = DateFactory({
	    	timezone: "Etc/UTC",
	        year: 1982,
	        month: 8,
	        day: 13,
	        hour: 20,
	        minute: 37,
	        second: 35
	    });
	    var strFormattedDate1 = datMyBday.toUTCString();
	    var strFormattedDate2 = fmt.format(ildMyBday);
	    strFormattedDate1 = strFormattedDate1.replace(/ \w{3}$/, '');
	    strFormattedDate2 = strFormattedDate2.replace(/ \w{3}$/, '');
	
	    assertEquals(strFormattedDate1, strFormattedDate2);
	}
};

function testDateFmtFormatJSDate1() {
    var fmt = new DateFmt({
    	type: "time",
    	length: "short",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    // test formatting a javascript date. It should be converted to 
    // an ilib date object automatically and then formatted
    var datMyBday = new Date("Fri Aug 13 1982 13:37:35 GMT-0700");
    assertEquals("1:37 PM", fmt.format(datMyBday));
};

function testDateFmtFormatJSDateRightTimeZone1() {
    var fmt = new DateFmt({
    	type: "date",
    	length: "full",
    	date: "w",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    // test formatting a javascript date. It should be converted to 
    // an ilib date object automatically and then formatted
    var datMyBday = new Date("Wed May 14 2014 23:37:35 GMT-0700");
    assertEquals("Wednesday", fmt.format(datMyBday));
};

function testDateFmtFormatJSDateRightTimeZone2() {
    var fmt = new DateFmt({
    	type: "date",
    	length: "full",
    	date: "w",
    	timezone: "America/New_York"
    });
    assertNotNull(fmt);
    
    // test formatting a javascript date. It should be converted to 
    // an ilib date object automatically and then formatted
    var datMyBday = new Date("Wed May 14 2014 23:37:35 GMT-0700");
    assertEquals("Thursday", fmt.format(datMyBday));
};

function testDateFmtFormatJSDateRightTimeZone3() {
    var fmt = new DateFmt({
    	type: "date",
    	length: "full",
    	date: "w",
    	timezone: "Australia/Perth"
    });
    assertNotNull(fmt);
    
    // test formatting a javascript date. It should be converted to 
    // an ilib date object automatically and then formatted
    var datMyBday = new Date("Wed May 14 2014 20:37:35 GMT");
    assertEquals("Thursday", fmt.format(datMyBday));
};

function testDateFmtFormatJSDateRightTimeZone4() {
	var d = new Date();
	// test only works in north america
	if (ilib._getPlatform() !== "unknown" && d.getTimezoneOffset() < 180) {
	    return;
	}
    var fmt = new DateFmt({
    	type: "date",
    	length: "full",
    	date: "w",
    	timezone: "local"
    });
    assertNotNull(fmt);
    
    // test formatting a javascript date. It should be converted to 
    // an ilib date object automatically and then formatted
    var datMyBday = new Date('2014-05-13T03:17:48.674Z');
    assertEquals("Monday", fmt.format(datMyBday));
};

function testDateFmtFormatJSDate2() {
    var fmt = new DateFmt({
    	type: "time",
    	length: "short",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    // test formatting a javascript date. It should be converted to 
    // an ilib date object automatically and then formatted
    assertEquals("1:37 PM", fmt.format(398119055000));
};

function testDateFmtFormatJSDateRightTimeZone5() {
	var d = new Date();
	// test only works in north america
	if (ilib._getPlatform() !== "unknown" && d.getTimezoneOffset() < 180) {
	    return;
	}
    var fmt = new DateFmt({
    	type: "date",
    	length: "full",
    	date: "w",
    	timezone: "local"
    });
    assertNotNull(fmt);
    
    // test formatting a javascript date. It should be converted to 
    // an ilib date object automatically and then formatted
    assertEquals("Monday", fmt.format(1399951068674));
};

function testDateFmtFormatJSDate3() {
    var fmt = new DateFmt({
    	type: "time",
    	length: "short",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    // test formatting a javascript date. It should be converted to 
    // an ilib date object automatically and then formatted
    assertEquals("1:37 PM", fmt.format("Fri Aug 13 1982 13:37:35 GMT-0700"));
};

function testDateFmtFormatJSDateRightTimeZone6() {
	var d = new Date();
	// test only works in north america
	if (ilib._getPlatform() !== "unknown" && d.getTimezoneOffset() < 180) {
	    return;
	}
    var fmt = new DateFmt({
    	type: "date",
    	length: "full",
    	date: "w",
    	timezone: "local"
    });
    assertNotNull(fmt);
    
    // test formatting a javascript date. It should be converted to 
    // an ilib date object automatically and then formatted
    assertEquals("Wednesday", fmt.format("Wed May 14 2014 23:37:35 GMT-0700"));
};

function testDateFmtGetMonthsOfYear1() {
    var fmt = new DateFmt({locale: "en-US"});
    assertNotNull(fmt);
    
    var arrMonths = fmt.getMonthsOfYear();
    var expected = [undefined, "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    assertArrayEquals(expected, arrMonths);
}

function testDateFmtGetMonthsOfYear2() {
    var fmt = new DateFmt({locale: "en-US"});
    assertNotNull(fmt);
    
    var arrMonths = fmt.getMonthsOfYear({length: "long"});
    var expected = [undefined, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    assertArrayEquals(expected, arrMonths);
}

function testDateFmtGetMonthsOfYearThai() {
	// uses ThaiSolar calendar
    var fmt = new DateFmt({locale: "th-TH"});
    assertNotNull(fmt);
    
    var arrMonths = fmt.getMonthsOfYear({length: "long"});
    
    var expected = [undefined, "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
    assertArrayEquals(expected, arrMonths);
}

function testDateFmtGetMonthsOfYearLeapYear() {
	var d = DateFactory({type: "hebrew", locale: "en-US", year: 5774, month: 1, day: 1});
    var fmt = new DateFmt({date: "en-US", calendar: "hebrew"});
    assertNotNull(fmt);
    
    var arrMonths = fmt.getMonthsOfYear({length: "long", date: d});

    var expected = [undefined, "Nis", "Iyy", "Siv", "Tam", "Av", "Elu", "Tis", "Ḥes", "Kis", "Tev", "She", "Ada", "Ad2"];
    assertArrayEquals(expected, arrMonths);
}

function testDateFmtGetMonthsOfYearNonLeapYear() {
	var d = DateFactory({type: "hebrew", locale: "en-US", year: 5775, month: 1, day: 1});
    var fmt = new DateFmt({date: "en-US", calendar: "hebrew"});
    assertNotNull(fmt);
    
    var arrMonths = fmt.getMonthsOfYear({length: "long", date: d});

    var expected = [undefined, "Nis", "Iyy", "Siv", "Tam", "Av", "Elu", "Tis", "Ḥes", "Kis", "Tev", "She", "Ada"];
    assertArrayEquals(expected, arrMonths);
}

function testDateFmtGetDaysOfWeek1() {
    var fmt = new DateFmt({locale: "en-US"});
    assertNotNull(fmt);
    
    var arrDays = fmt.getDaysOfWeek();
    
    var expected = ["S", "M", "T", "W", "T", "F", "S"];
    assertArrayEquals(expected, arrDays);
}

function testDateFmtGetDaysOfWeek2() {
    var fmt = new DateFmt({locale: "en-US"});
    assertNotNull(fmt);
    
    var arrDays = fmt.getDaysOfWeek({length: 'long'});
    var expected = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    assertArrayEquals(expected, arrDays);
}

function testDateFmtGetDaysOfWeekOtherCalendar() {
    var fmt = new DateFmt({locale: "en-US", calendar: "hebrew"});
    assertNotNull(fmt);
    
    var arrDays = fmt.getDaysOfWeek({length: 'long'});

    var expected = ["ris", "she", "shl", "rvi", "ḥam", "shi", "sha"];
    assertArrayEquals(expected, arrDays);
}

function testDateFmtGetDaysOfWeekThai() {
    var fmt = new DateFmt({locale: "th-TH", calendar: "thaisolar"});
    assertNotNull(fmt);
    
    var arrDays = fmt.getDaysOfWeek({length: 'long'});

    var expected = ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."];
    assertArrayEquals(expected, arrDays);
}

function testDateFmtGetDaysOfWeekThaiInEnglish() {
    var fmt = new DateFmt({locale: "en-US", calendar: "thaisolar"});
    assertNotNull(fmt);
    
    var arrDays = fmt.getDaysOfWeek({length: 'long'});
	
    var expected = ["ath", "cha", "ang", "phu", "phr", "suk", "sao"];
    assertArrayEquals(expected, arrDays);
}


function testDateFmtWeekYear1() {
    var fmt = new DateFmt({template: "w"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2011,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("52", fmt.format(date));
};

function testDateFmtWeekYear2() {
    var fmt = new DateFmt({template: "w"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2011,
		month: 1,
		day: 7,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
};

function testDateFmtWeekYear3() {
    var fmt = new DateFmt({template: "w"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2010,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("52", fmt.format(date));
};

function testDateFmtWeekYear4() {
    var fmt = new DateFmt({template: "w"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2009,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("53", fmt.format(date));
};

function testDateFmtWeekYear5() {
    var fmt = new DateFmt({template: "w"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2008,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
};

function testDateFmtWeekYear6() {
    var fmt = new DateFmt({template: "w"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2007,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
};

function testDateFmtWeekYearPad() {
    var fmt = new DateFmt({template: "ww"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2011,
		month: 1,
		day: 7,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("01", fmt.format(date));
};

function testDateFmtFormatWithEscapes() {
    var fmt = new DateFmt({locale: 'es-MX', template: "'El' dd 'de' MMMM"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-MX",
		year: 2011,
		month: 5,
		day: 5,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("El 05 de mayo", fmt.format(date));
};

function testDateFmtDayOfYearFirstD() {
    var fmt = new DateFmt({template: "D"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2011,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
};

function testDateFmtDayOfYearFirstDD() {
    var fmt = new DateFmt({template: "DD"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2011,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("01", fmt.format(date));
};

function testDateFmtDayOfYearFirstDDD() {
    var fmt = new DateFmt({template: "DDD"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2011,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("001", fmt.format(date));
};

function testDateFmtDayOfYearLastD() {
    var fmt = new DateFmt({template: "D"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("365", fmt.format(date));
};

function testDateFmtDayOfYearLastDD() {
    var fmt = new DateFmt({template: "DD"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("365", fmt.format(date));
};

function testDateFmtDayOfYearLastDLeap() {
    var fmt = new DateFmt({template: "D"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2008,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("366", fmt.format(date));
};

function testDateFmtDayOfYearLastDDD() {
    var fmt = new DateFmt({template: "DDD"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("365", fmt.format(date));
};

function testDateFmtDayOfYearPaddysDayD() {
    var fmt = new DateFmt({template: "D"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2011,
		month: 3,
		day: 17,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("76", fmt.format(date));
};

function testDateFmtDayOfYearPaddysDayDD() {
    var fmt = new DateFmt({template: "DD"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2011,
		month: 3,
		day: 17,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("76", fmt.format(date));
};

function testDateFmtDayOfYearPaddysDayDDD() {
    var fmt = new DateFmt({template: "DDD"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2011,
		month: 3,
		day: 17,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("076", fmt.format(date));
};

function testDateFmtDayOfYearPaddysDayDLeap() {
    var fmt = new DateFmt({template: "D"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2008,
		month: 3,
		day: 17,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("77", fmt.format(date));
};

function testDateFmtDayOfYearPaddysDayDDLeap() {
    var fmt = new DateFmt({template: "DD"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2008,
		month: 3,
		day: 17,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("77", fmt.format(date));
};

function testDateFmtDayOfYearPaddysDayDDDLeap() {
    var fmt = new DateFmt({template: "DDD"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2008,
		month: 3,
		day: 17,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("077", fmt.format(date));
};

function testDateFmtWeekOfMonthUS() {
    var fmt = new DateFmt({template: "W", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-US",
		year: 2011,
		month: 5,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
};

function testDateFmtWeekOfMonthDE() {
    var fmt = new DateFmt({template: "W", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 5,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("0", fmt.format(date));
};

function testDateFmtWeekOfMonthUSSept() {
    var fmt = new DateFmt({template: "W", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-US",
		year: 2011,
		month: 9,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("0", fmt.format(date));
};

function testDateFmtWeekOfMonthUSOct() {
    var fmt = new DateFmt({template: "W", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-US",
		year: 2011,
		month: 10,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("0", fmt.format(date));
};

function testDateFmtWeekOfMonthUSNov() {
    var fmt = new DateFmt({template: "W", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-US",
		year: 2011,
		month: 11,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
};

function testDateFmtWeekOfMonthUSRegular() {
    var fmt = new DateFmt({template: "W", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-US",
		year: 2011,
		month: 10,
		day: 23,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("4", fmt.format(date));
};

function testDateFmtWeekOfMonthDERegular() {
    var fmt = new DateFmt({template: "W", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 10,
		day: 23,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("3", fmt.format(date));
};

function testDateFmtYear0YY() {
    var fmt = new DateFmt({template: "yy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 0,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("00", fmt.format(date));
};

function testDateFmtYear0YYYY() {
    var fmt = new DateFmt({template: "yyyy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 0,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("0000", fmt.format(date));
};

function testDateFmtYear1YY() {
    var fmt = new DateFmt({template: "yy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 1,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("01", fmt.format(date));
};

function testDateFmtYear1YYYY() {
    var fmt = new DateFmt({template: "yyyy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 1,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("0001", fmt.format(date));
};

function testDateFmtYearMinus1YY() {
    var fmt = new DateFmt({template: "yy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: -1,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("-01", fmt.format(date));
};

function testDateFmtYearMinus1YYYY() {
    var fmt = new DateFmt({template: "yyyy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: -1,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("-0001", fmt.format(date));
};

function testDateFmtOrdinalUS1() {
    var fmt = new DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-US",
		year: 2011,
		month: 10,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("1st", fmt.format(date));
};

function testDateFmtOrdinalUS2() {
    var fmt = new DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-US",
		year: 2011,
		month: 10,
		day: 2,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("2nd", fmt.format(date));
};

function testDateFmtOrdinalUS3() {
    var fmt = new DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-US",
		year: 2011,
		month: 10,
		day: 3,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("3rd", fmt.format(date));
};

function testDateFmtOrdinalUS4() {
    var fmt = new DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-US",
		year: 2011,
		month: 10,
		day: 4,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("4th", fmt.format(date));
};

function testDateFmtOrdinalUS21() {
    var fmt = new DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-US",
		year: 2011,
		month: 10,
		day: 21,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("21st", fmt.format(date));
};

function testDateFmtOrdinalUSDefaultCase() {
    var fmt = new DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-US",
		year: 2011,
		month: 10,
		day: 27,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("27th", fmt.format(date));
};

function testDateFmtOrdinalDE1() {
    var fmt = new DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 10,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("1.", fmt.format(date));
};

function testDateFmtOrdinalDE2() {
    var fmt = new DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 10,
		day: 2,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("2.", fmt.format(date));
};

function testDateFmtOrdinalDE3() {
    var fmt = new DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 10,
		day: 3,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("3.", fmt.format(date));
};

function testDateFmtOrdinalDE4() {
    var fmt = new DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 10,
		day: 4,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("4.", fmt.format(date));
};

function testDateFmtOrdinalDE21() {
    var fmt = new DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 10,
		day: 21,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("21.", fmt.format(date));
};

function testDateFmtOrdinalDEDefaultCase() {
    var fmt = new DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "de-DE",
		year: 2011,
		month: 10,
		day: 27,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("27.", fmt.format(date));
};

function testDateFmtEraCE() {
    var fmt = new DateFmt({template: "G", locale: "en"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en",
		year: 2011,
		month: 10,
		day: 27,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("CE", fmt.format(date));
};

function testDateFmtEraBCE() {
    var fmt = new DateFmt({template: "G", locale: "en"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en",
		year: -46,
		month: 10,
		day: 27,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("BCE", fmt.format(date));
};

function testDateFmtEraCEBoundary() {
    var fmt = new DateFmt({template: "G", locale: "en"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en",
		year: 1,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("CE", fmt.format(date));
};

function testDateFmtEraBCEBoundary() {
    var fmt = new DateFmt({template: "G", locale: "en"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en",
		year: 0,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("BCE", fmt.format(date));
};

function testDateFmtStandAloneMonthFull() {
    var fmt = new DateFmt({template: "LLLL", locale: "fi-FI"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fi-FI",
		year: 0,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("joulukuu", fmt.format(date));
};

function testDateFmtStandAloneMonthLong() {
    var fmt = new DateFmt({template: "LLL", locale: "fi-FI"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fi-FI",
		year: 0,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("joulu", fmt.format(date));
};

function testDateFmtStandAloneMonthMedium() {
    var fmt = new DateFmt({template: "LL", locale: "fi-FI"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fi-FI",
		year: 0,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("jo", fmt.format(date));
};

function testDateFmtInFormatMonthFull() {
    var fmt = new DateFmt({template: "MMMM", locale: "fi-FI"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fi-FI",
		year: 0,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("joulukuuta", fmt.format(date));
};

function testDateFmtInFormatMonthMedium() {
    var fmt = new DateFmt({template: "MM", locale: "fi-FI"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "fi-FI",
		year: 0,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("12", fmt.format(date));
};

/*
exception does not happen any more because we always convert
the argument to the format method to an DateFactory first now.
By default if a bogus argument is passed, this is treated as
an empty/undefined parameter, which means the current date/time

function testDateFmtNonDateObject() {
    var fmt = new DateFmt({
    	locale: "en-US", 
    	type: "time", 
    	length: "short",
    	time: "hm"
    });
    assertNotNull(fmt);
   
    try {
	    fmt.format({
	    	locale: "en-US",
			year: 0,
			month: 12,
			day: 31,
			hour: 9
		});
	    fail();
    } catch (e) {
    	assertEquals("Wrong date type passed to DateFmt.format()", e);
    }
};
*/

function testDateFmtFormatRelativeWithinMinuteAfter() {
    var fmt = new DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("in 30 seconds", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinMinuteBefore() {
    var fmt = new DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 seconds ago", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinHourAfter() {
    var fmt = new DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 10 minutes", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinHourBefore() {
    var fmt = new DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 minutes ago", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinDayAfter() {
    var fmt = new DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 4 hours", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinDayBefore() {
    var fmt = new DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 hours ago", fmt.formatRelative(reference, date));
};

function testDateFmtFormatRelativeWithinFortnightAfter() {
    var fmt = new DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 4 days", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinFortnightBefore() {
    var fmt = new DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 days ago", fmt.formatRelative(reference, date));
};

function testDateFmtFormatRelativeWithinQuarterAfter() {
    var fmt = new DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 9 weeks", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinQuarterBefore() {
    var fmt = new DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 weeks ago", fmt.formatRelative(reference, date));
};

function testDateFmtFormatRelativeWithinTwoYearsAfter() {
    var fmt = new DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 16 months", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinTwoYearsBefore() {
    var fmt = new DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 months ago", fmt.formatRelative(reference, date));
};

function testDateFmtFormatRelativeYearsAfter() {
    var fmt = new DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("in 14 years", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeYearsBefore() {
    var fmt = new DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 years ago", fmt.formatRelative(reference, date));
};

function testDateFmtConvertToGMT() {
    var fmt = new DateFmt({
    	length: "short",
    	type: "datetime",
    	timezone: "Europe/London",
    	locale: "en-GB",
    	time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0,
		timezone: "America/Los_Angeles",
		locale: "en-US"
	});
    
    assertEquals("20/09/2011, 21:45 GMT/BST", fmt.format(date));
};

function testDateFmtConvertToOtherTimeZone() {
    var fmt = new DateFmt({
    	length: "short",
    	type: "datetime",
    	timezone: "Australia/Sydney",
    	locale: "en-AU",
    	time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0,
		timezone: "America/Los_Angeles",
		locale: "en-US"
	});
    
    assertEquals("21/9/11, 6:45 am AEST", fmt.format(date));
};

function testDateFmtForTZWithNonWholeOffset1() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "time",
    	locale: "en-CA",
    	timezone: "America/St_Johns"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
    	unixtime: 1394834293627,
    	timezone: "Etc/UTC"
	});
    
    assertEquals("7:28 PM", fmt.format(date));
};

function testDateFmtForTZWithNonWholeOffset2() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "time",
    	locale: "en-CA",
    	timezone: "America/St_Johns"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "Etc/UTC",
		year: 2014,
		month: 3,
		day: 14,
		hour: 21,
		minute: 58,
		second: 13,
		millisecond: 627
	});
    
    // St. John's is -3:30 from UTC, plus 1 hour DST
    assertEquals("7:28 PM", fmt.format(date));
};

function testDateFmtForTZWithNonWholeOffsetQuarterHour() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "time",
    	locale: "en-CA",
    	timezone: "Asia/Kathmandu"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
    	unixtime: 1394834293627,
    	timezone: "Etc/UTC"
	});

    // Kathmandu is 5:45 ahead of UTC, no DST
    assertEquals("3:43 AM", fmt.format(date));
};

function testDateFmtForTZWithNonWholeOffsetQuarterHour2() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "time",
    	locale: "en-CA",
    	timezone: "Asia/Kathmandu"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "Etc/UTC",
		year: 2014,
		month: 3,
		day: 14,
		hour: 21,
		minute: 58,
		second: 13,
		millisecond: 627
	});
    
    // Kathmandu is 5:45 ahead of UTC, no DST
    assertEquals("3:43 AM", fmt.format(date));
};

// test locales that are tier 2 and below by doing a single test to see that it basically works
function testDateFmtenNG() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "en-NG",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-NG",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("Tuesday, 20 September 2011 at 1:45 PM", fmt.format(date));
};

function testDateFmtenPH() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "en-PH",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-PH",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("Tuesday, 20 September 2011 at 1:45 PM", fmt.format(date));
};

function testDateFmtenPK() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "en-PK",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-PK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("Tuesday, 20 September 2011 at 1:45 PM", fmt.format(date));
};

function testDateFmtenAU() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "en-AU",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-AU",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("Tuesday, 20 September 2011 at 1:45 pm", fmt.format(date));
};

function testDateFmtenZA() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "en-ZA",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "en-ZA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("Tuesday, 20 September 2011 at 13:45", fmt.format(date));
};

function testDateFmtesES() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "es-ES",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-ES",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("martes, 20 de septiembre de 2011, 13:45", fmt.format(date));
};

function testDateFmtesMX() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "es-MX",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-MX",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("martes, 20 de septiembre de 2011, 13:45", fmt.format(date));
};

function testDateFmtesAR() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "es-AR",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-AR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("martes, 20 de septiembre de 2011, 13:45", fmt.format(date));
                  
};

function testDateFmttrTR() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "tr-TR",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "tr-TR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("20 Eylül 2011 Salı 13:45", fmt.format(date));
};

function testDateFmttrSV() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "sv-SE",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "sv-SE",
		year: 2011,
		month: 10,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("torsdag 20 oktober 2011 13:45", fmt.format(date));
};

function testDateFmttrNO() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "no-NO",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "no-NO",
		year: 2011,
		month: 10,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("Torsdag 20. oktober 2011 13.45", fmt.format(date));
};

function testDateFmttrDA() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "da-DK",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "da-DK",
		year: 2011,
		month: 10,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("torsdag den 20. oktober 2011 kl. 13.45", fmt.format(date));
};

function testDateFmtGetDefault() {
	var fmt = new DateFmt({locale: "zz-ZZ"});
    assertNotNull(fmt);
    
    assertEquals("zz-ZZ", fmt.getLocale().toString());
    assertEquals("gregorian", fmt.getCalendar());
    assertEquals("d/M/yy", fmt.getTemplate());
};

function testDateFmtLoadLocaleDataSynch() {
    // don't need to test loading on the dynamic load version because we are testing
    // it via all the other tests already.
	if (ilib.isDynData()) {
		return;
	}
	ilib.setLoaderCallback(mockLoader);

    var fmt = new DateFmt({locale: "zz-ZZ"});
	assertNotNull(fmt);
	
	assertEquals("zz-ZZ", fmt.getLocale().toString());
	assertEquals("gregorian", fmt.getCalendar());
	assertEquals("dd.MM.yy", fmt.getTemplate());
};

function testDateFmtLoadLocaleDataSynchCached() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
    ilib.setLoaderCallback(mockLoader);

	var fmt = new DateFmt({locale: "zz-ZZ"});
    assertNotNull(fmt);
    
    assertEquals("zz-ZZ", fmt.getLocale().toString());
    assertEquals("gregorian", fmt.getCalendar());
    assertEquals("dd.MM.yy", fmt.getTemplate());
};

function testDateFmtLoadLocaleDataAsynch() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
    ilib.setLoaderCallback(mockLoader);
	
	new DateFmt({
		locale: "zz-ZZ",
		sync: false,
		onLoad: function (fmt) {
		    assertNotNull(fmt);
		    
		    assertEquals("zz-ZZ", fmt.getLocale().toString());
		    assertEquals("gregorian", fmt.getCalendar());
		    assertEquals("dd.MM.yy", fmt.getTemplate());
		}
	});
};

function testDateFmtLoadLocaleDataAsynchCached() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
    ilib.setLoaderCallback(mockLoader);
	
	new DateFmt({
		locale: "zz-ZZ",
		sync: false,
		onLoad: function (fmt) {
            assertNotNull(fmt);
		    
		    assertEquals("zz-ZZ", fmt.getLocale().toString());
		    assertEquals("gregorian", fmt.getCalendar());
		    assertEquals("dd.MM.yy", fmt.getTemplate());
		}
	});
};


function testDateFmtTransitionToDSTRightBefore() {
    ilib.setLoaderCallback(oldLoader);
    var fmt = new DateFmt({
    	length: "full",
    	type: "time",
    	time: "hmaz",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		timezone: "Etc/UTC",
		unixtime: 1394359140000 // this is 3/9/2014 at 1:59am
	});
    
    assertEquals("1:59 AM PST", fmt.format(date));
};

function testDateFmtTransitionToDSTRightAfter() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "time",
    	time: "hmaz",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
    	timezone: "Etc/UTC",
		unixtime: 1394359260000
	});
    
    // 2 minutes later
    assertEquals("3:01 AM PDT", fmt.format(date));
};

function testDateFmtTransitionFromDSTDayBefore() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "time",
    	time: "hmaz",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
    	timezone: "Etc/UTC",
		unixtime: 1414828740000 // this is 11/1/2014 at 0:59am
	});
    
    assertEquals("12:59 AM PDT", fmt.format(date));
};

function testDateFmtTransitionFromDSTWellBefore() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "time",
    	time: "hmaz",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
    	timezone: "Etc/UTC",
		unixtime: 1414915140000 // this is 11/2/2014 at 0:59am
	});
    
    assertEquals("12:59 AM PDT", fmt.format(date));
};

function testDateFmtTransitionFromDSTRightBefore() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "time",
    	time: "hmaz",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
    	timezone: "Etc/UTC",
		unixtime: 1414918740000 // this is 11/2/2014 at 1:59am
	});
    
    assertEquals("1:59 AM PDT", fmt.format(date));
};

function testDateFmtTransitionFromDSTRightAfter() {
    var fmt = new DateFmt({
    	length: "full",
    	type: "time",
    	time: "hmaz",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
    	timezone: "Etc/UTC",
		unixtime: 1414918860000
	});
    
    // 2 minutes later
    assertEquals("1:01 AM PST", fmt.format(date));
};


function testDateFmtAltCalThaiInEnglish() {
    var fmt = new DateFmt({
    	locale: "en-US",
    	length: "full",
    	type: "datetime",
    	timezone: "America/Los_Angeles",
    	calendar: "thaisolar"
    });
    assertNotNull(fmt);
    
    var date = new ThaiSolarDate({
    	timezone: "America/Los_Angeles",
    	unixtime: 1404445524043
	});
    
    assertEquals("Karakadakhom 3, 2557 at 8:45 PM", fmt.format(date));
};

function testDateFmtAltCalHebrewInEnglish() {
    var fmt = new DateFmt({
    	locale: "en-US",
    	length: "full",
    	type: "datetime",
    	timezone: "America/Los_Angeles",
    	calendar: "hebrew"
    });
    assertNotNull(fmt);
    
    var date = new HebrewDate({
    	timezone: "America/Los_Angeles",
    	unixtime: 1404445524043
	});
    
    assertEquals("Tammuz 6, 5774 at 8:45 PM", fmt.format(date));
};

function testDateFmtAltCalIslamicInEnglish() {
    var fmt = new DateFmt({
    	locale: "en-US",
    	length: "full",
    	type: "datetime",
    	timezone: "America/Los_Angeles",
    	calendar: "islamic"
    });
    assertNotNull(fmt);
    
    var date = new IslamicDate({
    	timezone: "America/Los_Angeles",
    	unixtime: 1404445524043
	});
    
    assertEquals("Ramaḍān 5, 1435 at 8:45 PM", fmt.format(date));
};

function testDateFmtAltCalPersianInEnglish() {
    var fmt = new DateFmt({
    	locale: "en-US",
    	length: "full",
    	type: "datetime",
    	timezone: "America/Los_Angeles",
    	calendar: "persian"
    });
    assertNotNull(fmt);
    
    var date = new PersianDate({
    	timezone: "America/Los_Angeles",
    	unixtime: 1404445524043
	});
    
    assertEquals("Tir 12, 1393 at 8:45 PM", fmt.format(date));
};

function testDateFmtGetMeridiemsRangeLength_with_am_ET_locale() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET"});
    assertNotNull(fmt);

    assertEquals(5, fmt.length);
};

function testDateFmtGetMeridiemsRangeName_with_am_ET_locale() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET"});
    assertNotNull(fmt);

    assertEquals("ጥዋት", fmt[0].name);
};

function testDateFmtGetMeridiemsRangeStart_with_am_ET_locale() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET"});
    assertNotNull(fmt);

    assertEquals("00:00", fmt[0].start);
};

function testDateFmtGetMeridiemsRangeEnd_with_am_ET_locale() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET"});
    assertNotNull(fmt);

    assertEquals("05:59", fmt[0].end);
};

function testDateFmtGetMeridiemsRangeLength_with_am_ET_locale_gregorian_meridiems() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET", meridiems: "gregorian"});
    assertNotNull(fmt);

    assertEquals(2, fmt.length);
}

function testDateFmtGetMeridiemsRangeName_with_am_ET_locale_gregorian_meridiems() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET", meridiems: "gregorian"});
    assertNotNull(fmt);

    assertEquals("ጥዋት", fmt[0].name);
}

function testDateFmtGetMeridiemsRangeStart_with_am_ET_locale_gregorian_meridiems() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET", meridiems: "gregorian"});
    assertNotNull(fmt);

    assertEquals("00:00", fmt[0].start);
}

function testDateFmtGetMeridiemsRangeEnd_with_am_ET_locale_gregorian_meridiems() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET", meridiems: "gregorian"});
    assertNotNull(fmt);

    assertEquals("11:59", fmt[0].end);
}

function testDateFmtGetMeridiemsRangeLength_with_am_ET_locale_ethiopic_meridiems() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET", meridiems: "ethiopic"});
    assertNotNull(fmt);

    assertEquals(5, fmt.length);
}

function testDateFmtGetMeridiemsRangeName_with_am_ET_locale_ethiopic_meridiems() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET", meridiems: "ethiopic"});
    assertNotNull(fmt);

    assertEquals("ጥዋት", fmt[0].name);
}

function testDateFmtGetMeridiemsRangeStart_with_am_ET_locale_ethiopic_meridiems() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET", meridiems: "ethiopic"});
    assertNotNull(fmt);

    assertEquals("00:00", fmt[0].start);
}

function testDateFmtGetMeridiemsRangeEnd_with_am_ET_locale_ethiopic_meridiems() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "am-ET", meridiems: "ethiopic"});
    assertNotNull(fmt);

    assertEquals("05:59", fmt[0].end);
}

function testDateFmtGetMeridiemsRangeLength_with_zh_CN_locale() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN"});
    assertNotNull(fmt);

    assertEquals(2, fmt.length);
};

function testDateFmtGetMeridiemsRangeName_with_zh_CN_locale() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN"});
    assertNotNull(fmt);

    assertEquals("上午", fmt[0].name);
};

function testDateFmtGetMeridiemsRangeStart_with_zh_CN_locale() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN"});
    assertNotNull(fmt);

    assertEquals("00:00", fmt[0].start);
};

function testDateFmtGetMeridiemsRangeEnd_with_zh_CN_locale() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN"});
    assertNotNull(fmt);

    assertEquals("11:59", fmt[0].end);
};

function testDateFmtGetMeridiemsRangeLength_with_zh_CN_locale_gregorian_meridiems() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN", meridiems: "gregorian"});
    assertNotNull(fmt);

    assertEquals(2, fmt.length);
}

function testDateFmtGetMeridiemsRangeName_with_zh_CN_locale_gregorian_meridiems() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN", meridiems: "gregorian"});
    assertNotNull(fmt);

    assertEquals("上午", fmt[0].name);
}

function testDateFmtGetMeridiemsRangeStart_with_zh_CN_locale_gregorian_meridiems() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN", meridiems: "gregorian"});
    assertNotNull(fmt);

    assertEquals("00:00", fmt[0].start);
}

function testDateFmtGetMeridiemsRangeEnd_with_zh_CN_locale_gregorian_meridiems() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN", meridiems: "gregorian"});
    assertNotNull(fmt);

    assertEquals("11:59", fmt[0].end);
}

function testDateFmtGetMeridiemsRangeLength_with_zh_CN_locale_chinese_meridiems() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN", meridiems: "chinese"});
    assertNotNull(fmt);

    assertEquals(7, fmt.length);
}

function testDateFmtGetMeridiemsRangeName_with_zh_CN_locale_chinese_meridiems() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN", meridiems: "chinese"});
    assertNotNull(fmt);

    assertEquals("凌晨", fmt[0].name);
}

function testDateFmtGetMeridiemsRangeStart_with_zh_CN_locale_chinese_meridiems() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN", meridiems: "chinese"});
    assertNotNull(fmt);

    assertEquals("00:00", fmt[0].start);
}

function testDateFmtGetMeridiemsRangeEnd_with_zh_CN_locale_chinese_meridiems() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "zh-CN", meridiems: "chinese"});
    assertNotNull(fmt);

    assertEquals("05:59", fmt[0].end);
}

function testDateFmtGetMeridiemsRangeLength_with_en_US_locale() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "en-US"});
    assertNotNull(fmt);

    assertEquals(2, fmt.length);
};

function testDateFmtGetMeridiemsRangeName_with_en_US_locale() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "en-US"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
};

function testDateFmtGetMeridiemsRangeStart_with_en_US_locale() {
    var fmt = DateFmt.getMeridiemsRange({ locale: "en-US"});
    assertNotNull(fmt);

    assertEquals("00:00", fmt[0].start);
};

function testDateFmtGetMeridiemsRangeEnd_with_en_US_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "en-US"});
    assertNotNull(fmt);

    assertEquals("11:59", fmt[0].end);
};

function testDateFmtGetMeridiemsRangeName_with_bn_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "bn-IN"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};

function testDateFmtGetMeridiemsRangeName_with_gu_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "gu-IN"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};
function testDateFmtGetMeridiemsRangeName_with_kn_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "kn-IN"});
    assertNotNull(fmt);

    assertEquals("ಪೂರ್ವಾಹ್ನ", fmt[0].name);
    assertEquals("ಅಪರಾಹ್ನ", fmt[1].name);
};
function testDateFmtGetMeridiemsRangeName_with_ml_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "ml-IN"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};
function testDateFmtGetMeridiemsRangeName_with_mr_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "mr-IN"});
    assertNotNull(fmt);

    assertEquals("म.पू.", fmt[0].name);
    assertEquals("म.उ.", fmt[1].name);
};
function testDateFmtGetMeridiemsRangeName_with_or_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "or-IN"});
    assertNotNull(fmt);

    assertEquals("am", fmt[0].name);
    assertEquals("pm", fmt[1].name);
};
function testDateFmtGetMeridiemsRangeName_with_pa_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "pa-IN"});
    assertNotNull(fmt);

    assertEquals("ਪੂ.ਦੁ.", fmt[0].name);
    assertEquals("ਬਾ.ਦੁ.", fmt[1].name);
};
function testDateFmtGetMeridiemsRangeName_with_ta_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "ta-IN"});
    assertNotNull(fmt);

    assertEquals("முற்பகல்", fmt[0].name);
    assertEquals("பிற்பகல்", fmt[1].name);
};
function testDateFmtGetMeridiemsRangeName_with_te_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "te-IN"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};
function testDateFmtGetMeridiemsRangeName_with_ur_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "ur-IN"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};
function testDateFmtGetMeridiemsRangeName_with_as_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "as-IN"});
    assertNotNull(fmt);

    assertEquals("পূৰ্বাহ্ণ", fmt[0].name);
    assertEquals("অপৰাহ্ণ", fmt[1].name);
};
function testDateFmtGetMeridiemsRangeName_with_hi_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "hi-IN"});
    assertNotNull(fmt);

    assertEquals("पूर्वाह्न", fmt[0].name);
    assertEquals("अपराह्न", fmt[1].name);
};

function testDateFmtGetMeridiemsRangeName_with_ur_PK_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "ur-PK"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};

function testDateFmtGetMeridiemsRange_with_noArgument() {
    var fmt = new DateFmt();
    assertNotNull(fmt);

    var mdRange = fmt.getMeridiemsRange();
    // if locale is not specified, DateFmt takes default locale.
    assertTrue("getMeridiemsRange should return length value greater than 0", mdRange.length > 0);
};

function testDateFmtGetMeridiemsRange_with_undefined_locale() {
    var fmt = new DateFmt({ locale: undefined });
    assertNotNull(fmt);

    var mdRange = fmt.getMeridiemsRange();
    // if locale is not specified, DateFmt takes default locale.
    assertTrue("getMeridiemsRange should return length value greater than 0", mdRange.length > 0);
};

function testDateFmtGetMeridiemsRange_with_wrong_locale() {
    var fmt = new DateFmt({ locale: "wrong" });
    assertNotNull(fmt);

    var mdRange = fmt.getMeridiemsRange();
    // if locale is specified wrong value, DateFmt takes default locale.
    assertTrue("getMeridiemsRange should return length value greater than 0", mdRange.length > 0);
};

function testDateFmtTimeTemplate_mms() {
    var fmt = new DateFmt({clock: "24", template: "mm:s"});
    assertNotNull(fmt);

    assertEquals("00:9", fmt.format({minute: 0, second: 9}).toString());
};
