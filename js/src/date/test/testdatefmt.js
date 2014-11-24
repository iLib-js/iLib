/*
 * testdatefmt.js - test the date formatter object
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

function testDateFmtConstructorEmpty() {
	var fmt = new ilib.DateFmt();
    
    assertNotNull(fmt);
};

function testDateFmtConstructorDefaultLocale() {
    var fmt = new ilib.DateFmt();
    
    assertNotNull(fmt);
    
    assertEquals("en-US", fmt.getLocale().toString());
};

function testDateFmtGetCalendarDefault() {
    var fmt = new ilib.DateFmt();
    
    assertNotNull(fmt);
    var cal = fmt.getCalendar();
    assertNotNull(cal);
    
    assertEquals("gregorian", cal);
};

function testDateFmtGetCalendarExplicit() {
    var fmt = new ilib.DateFmt({calendar: "julian"});
    
    assertNotNull(fmt);
    var cal = fmt.getCalendar();
    assertNotNull(cal);
    
    assertEquals("julian", cal);
};

function testDateFmtGetCalendarExplicitDefault() {
    var fmt = new ilib.DateFmt({calendar: "gregorian"});
    
    assertNotNull(fmt);
    var cal = fmt.getCalendar();
    assertNotNull(cal);
    
    assertEquals("gregorian", cal);
};

function testDateFmtGetCalendarNotInThisLocale() {
	try {
    	new ilib.DateFmt({calendar: "arabic", locale: 'en-US'});
    	fail();
	} catch (str) {
        assertEquals("string", typeof(str));
		assertEquals("No formats available for calendar arabic in locale en-US", str);
	}
};

function testDateFmtGetLength() {
    var fmt = new ilib.DateFmt({length: "full"});
    assertNotNull(fmt);
    
    assertEquals("full", fmt.getLength());
};

function testDateFmtGetLengthDefault() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("short", fmt.getLength());
};

function testDateFmtGetLengthBogus() {
    var fmt = new ilib.DateFmt({length: "asdf"});
    assertNotNull(fmt);
    
    assertEquals("short", fmt.getLength());
};


function testDateFmtGetType() {
    var fmt = new ilib.DateFmt({type: "time"});
    assertNotNull(fmt);
    
    assertEquals("time", fmt.getType());
};

function testDateFmtGetTypeDefault() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("date", fmt.getType());
};

function testDateFmtGetTypeBogus() {
    var fmt = new ilib.DateFmt({type: "asdf"});
    assertNotNull(fmt);
    
    assertEquals("date", fmt.getType());
};


function testDateFmtGetLocale() {
    var fmt = new ilib.DateFmt({locale: "de-DE"});
    assertNotNull(fmt);
    
    assertEquals("de-DE", fmt.getLocale().toString());
};

function testDateFmtGetLocaleDefault() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("en-US", fmt.getLocale().toString());
};

function testDateFmtGetLocaleBogus() {
    var fmt = new ilib.DateFmt({locale: "zyy-XX"});
    assertNotNull(fmt);
    
    assertEquals("zyy-XX", fmt.getLocale().toString());
};

function testDateFmtGetTimeComponentsDefault() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("ahm", fmt.getTimeComponents());
};

function testDateFmtGetTimeComponents() {
    var fmt = new ilib.DateFmt({time: "hmsaz"});
    assertNotNull(fmt);
    
    assertEquals("ahmsz", fmt.getTimeComponents());
};

function testDateFmtGetTimeComponentsReorder() {
    var fmt = new ilib.DateFmt({time: "zahms"});
    assertNotNull(fmt);
    
    assertEquals("ahmsz", fmt.getTimeComponents());
};

function testDateFmtGetTimeComponentsBogus() {
    var fmt = new ilib.DateFmt({time: "asdf"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("ahm", fmt.getTimeComponents());
};

function testDateFmtGetDateComponentsDefault() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("dmy", fmt.getDateComponents());
};

function testDateFmtGetDateComponents() {
    var fmt = new ilib.DateFmt({date: "dmwy"});
    assertNotNull(fmt);
    
    assertEquals("dmwy", fmt.getDateComponents());
};

function testDateFmtGetDateComponentsReorder() {
    var fmt = new ilib.DateFmt({date: "wmdy"});
    assertNotNull(fmt);
    
    assertEquals("dmwy", fmt.getDateComponents());
};

function testDateFmtGetDateComponentsBogus() {
    var fmt = new ilib.DateFmt({date: "asdf"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("dmy", fmt.getDateComponents());
};

function testDateFmtGetClockDefaultUS() {
    var fmt = new ilib.DateFmt({locale: "en-US"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("12", fmt.getClock());
};

function testDateFmtGetClockDefaultDE() {
    var fmt = new ilib.DateFmt({locale: "de-DE"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("24", fmt.getClock());
};

function testDateFmtGetClockDefaultJP() {
    var fmt = new ilib.DateFmt({locale: "ja-JP"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("24", fmt.getClock());
};

function testDateFmtGetClock() {
    var fmt = new ilib.DateFmt({locale: "en-US", clock: "24"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("24", fmt.getClock());
};

function testDateFmtGetClockBogus() {
    var fmt = new ilib.DateFmt({locale: "en-US", clock: "asdf"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("12", fmt.getClock());
};

function testDateFmtGetTimeZoneDefault() {
	ilib.tz = undefined;	// just in case
    var fmt = new ilib.DateFmt();
    
    assertNotNull(fmt);
    
    assertEquals("local", fmt.getTimeZone().getId());
};

function testDateFmtGetTimeZone() {
    var fmt = new ilib.DateFmt({timezone: "Europe/Paris"});
    assertNotNull(fmt);
    
    assertEquals("Europe/Paris", fmt.getTimeZone().getId());
};

function testDateFmtGetTemplateDefault() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("M/d/yy", fmt.getTemplate());
};

function testDateFmtGetTemplate() {
    var fmt = new ilib.DateFmt({template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("EEE 'the' DD 'of' MM, yyyy G", fmt.getTemplate());
};

function testDateFmtGetTemplateIgnoreProperties() {
    var fmt = new ilib.DateFmt({date: 'y', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("EEE 'the' DD 'of' MM, yyyy G", fmt.getTemplate());
};

function testDateFmtUseTemplateEmptyDateComponents() {
    var fmt = new ilib.DateFmt({date: 'y', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("", fmt.getDateComponents());
};

function testDateFmtUseTemplateEmptyTimeComponents() {
    var fmt = new ilib.DateFmt({time: 'h', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("", fmt.getTimeComponents());
};

function testDateFmtUseTemplateEmptyLength() {
    var fmt = new ilib.DateFmt({length: 'short', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("", fmt.getLength());
};

function testDateFmtUseTemplateNonEmptyCalendar() {
    var fmt = new ilib.DateFmt({calendar: 'julian', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("julian", fmt.getCalendar());
};

function testDateFmtUseTemplateNonEmptyLocale() {
    var fmt = new ilib.DateFmt({locale: 'de-DE', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("de-DE", fmt.getLocale().toString());
};

function testDateFmtUseTemplateNonEmptyClock() {
    var fmt = new ilib.DateFmt({clock: "24", template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("24", fmt.getClock());
};

function testDateFmtUseTemplateWithClockHH() {
    var fmt = new ilib.DateFmt({clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    assertEquals("HH:mm", fmt.getTemplate());
};

function testDateFmtUseTemplateWithClockKK() {
    var fmt = new ilib.DateFmt({clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    assertEquals("kk:mm", fmt.getTemplate());
};

function testDateFmtUseTemplateWithClockhh() {
    var fmt = new ilib.DateFmt({clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    assertEquals("hh:mm", fmt.getTemplate());
};

function testDateFmtUseTemplateWithClockkk() {
    var fmt = new ilib.DateFmt({clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    assertEquals("KK:mm", fmt.getTemplate());
};

function testDateFmtUseTemplateWithClockHHSkipEscapedStrings24() {
    var fmt = new ilib.DateFmt({clock: "24", template: "'hh' hh:mm"});
    assertNotNull(fmt);
    
    assertEquals("'hh' HH:mm", fmt.getTemplate());
};

function testDateFmtUseTemplateWithClockHHSkipEscapedStrings12() {
    var fmt = new ilib.DateFmt({clock: "12", template: "'HH' HH:mm"});
    assertNotNull(fmt);
    
    assertEquals("'HH' hh:mm", fmt.getTemplate());
};

function testDateFmtUseTemplateNonEmptyTimeZone() {
    var fmt = new ilib.DateFmt({timezone: 'Europe/Paris', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    var tz = fmt.getTimeZone();
    assertNotUndefined(tz);
    assertEquals("Europe/Paris", tz.getId());
};

function testDateFmtGetTemplateCalendar() {
    var fmt = new ilib.DateFmt({calendar: "julian"});
    assertNotNull(fmt);
    
    assertEquals("M/d/yy", fmt.getTemplate());
};

function testDateFmtGetTemplateLocale() {
    var fmt = new ilib.DateFmt({locale: "de-DE"});
    assertNotNull(fmt);
    
    assertEquals("dd.MM.yy", fmt.getTemplate());
};

function testDateFmtGetTemplateLength() {
    var fmt = new ilib.DateFmt({length: "long"});
    assertNotNull(fmt);
    
    assertEquals("MMM d, yyyy", fmt.getTemplate());
};

function testDateFmtGetTemplateTypeDateTime() {
    var fmt = new ilib.DateFmt({type: "datetime"});
    assertNotNull(fmt);
    
    assertEquals("M/d/yy h:mma", fmt.getTemplate());
};

function testDateFmtGetTemplateTypeTime() {
    var fmt = new ilib.DateFmt({type: "time"});
    assertNotNull(fmt);
    
    assertEquals("h:mma", fmt.getTemplate());
};

function testDateFmtGetTemplateDateComponents() {
    var fmt = new ilib.DateFmt({date: "wdm"});
    assertNotNull(fmt);
    
    assertEquals("EE M/d", fmt.getTemplate());
};

function testDateFmtGetTemplateTimeComponents() {
    var fmt = new ilib.DateFmt({type: "time", time: "hm"});
    assertNotNull(fmt);
    
    assertEquals("h:mm", fmt.getTemplate());
};

function testDateFmtGetTemplateTypeTime24() {
    var fmt = new ilib.DateFmt({type: "time", clock: "24"});
    assertNotNull(fmt);
    
    assertEquals("H:mm", fmt.getTemplate());
};

function testDateFmtPad2lt10() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("01", fmt._pad(1, 2));
};

function testDateFmtPad2lt0() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("-01", fmt._pad(-1, 2));
};

function testDateFmtPad2gt10() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("11", fmt._pad(11, 2));
};

function testDateFmtPad2ltMinus10() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("-11", fmt._pad(-11, 2));
};

function testDateFmtPad2gt100() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("111", fmt._pad(111, 2));
};

function testDateFmtPad2ltMinus100() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("-111", fmt._pad(-111, 2));
};

function testDateFmtPad0() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("1", fmt._pad(1, 0));
    assertEquals("10", fmt._pad(10, 0));
};

function testDateFmtPad0Neg() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("-1", fmt._pad(-1, 0));
    assertEquals("-10", fmt._pad(-10, 0));
};

function testDateFmtPad4_1() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("0006", fmt._pad(6, 4));
};

function testDateFmtPad4_2() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("0067", fmt._pad(67, 4));
};

function testDateFmtPad4_3() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("0679", fmt._pad(679, 4));
};

function testDateFmtPad4_4() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("6792", fmt._pad(6792, 4));
};

function testDateFmtPad4_5() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("67925", fmt._pad(67925, 4));
};

function testDateFmtPad4_6() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("-0001", fmt._pad(-1, 4));
};

function testDateFmtPad4_7() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("-0010", fmt._pad(-10, 4));
};

function testDateFmtPad4_8() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("-0112", fmt._pad(-112, 4));
};

function testDateFmtPad4_9() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("-1123", fmt._pad(-1123, 4));
};

function testDateFmtPad4_10() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("-11233", fmt._pad(-11233, 4));
};

function testDateFmtPad2lt10String() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("01", fmt._pad("1", 2));
};

function testDateFmtPad2gt10String() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("11", fmt._pad("11", 2));
};

function testDateFmtPad2gt100String() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("111", fmt._pad("111", 2));
};

function testDateFmtTokenizeSimple() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    var expected = [
        "MMM",
        " ",
        "d"
    ];
    
    assertArrayEquals(expected, fmt._tokenize("MMM d"));
};

function testDateFmtTokenizeAdjacentParts() {
    var fmt = new ilib.DateFmt();
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
    var fmt = new ilib.DateFmt();
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
    var fmt = new ilib.DateFmt();
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
    var fmt = new ilib.DateFmt({
    	timezone: "Etc/UTC", 
    	template: "EEE, d MMM yyyy kk:mm:ss z"
    });
    assertNotNull(fmt);
    
    var datMyBday = new Date("Fri Aug 13 1982 13:37:35 GMT-0700 (PDT)");
    var ildMyBday = ilib.Date.newInstance({
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
};

function testDateFmtFormatJSDate1() {
    var fmt = new ilib.DateFmt({
    	type: "time",
    	length: "short",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    // test formatting a javascript date. It should be converted to 
    // an ilib date object automatically and then formatted
    var datMyBday = new Date("Fri Aug 13 1982 13:37:35 GMT-0700 (PDT)");
    assertEquals("1:37pm", fmt.format(datMyBday));
};

function testDateFmtFormatJSDateRightTimeZone1() {
    var fmt = new ilib.DateFmt({
    	type: "date",
    	length: "full",
    	date: "w",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    // test formatting a javascript date. It should be converted to 
    // an ilib date object automatically and then formatted
    var datMyBday = new Date("Wed May 14 2014 23:37:35 GMT-0700 (PDT)");
    assertEquals("Wednesday", fmt.format(datMyBday));
};

function testDateFmtFormatJSDateRightTimeZone2() {
    var fmt = new ilib.DateFmt({
    	type: "date",
    	length: "full",
    	date: "w",
    	timezone: "America/New_York"
    });
    assertNotNull(fmt);
    
    // test formatting a javascript date. It should be converted to 
    // an ilib date object automatically and then formatted
    var datMyBday = new Date("Wed May 14 2014 23:37:35 GMT-0700 (PDT)");
    assertEquals("Thursday", fmt.format(datMyBday));
};

function testDateFmtFormatJSDateRightTimeZone3() {
    var fmt = new ilib.DateFmt({
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
	if (d.getTimezoneOffset() > 180) {
	    var fmt = new ilib.DateFmt({
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
	}
};

function testDateFmtFormatJSDate2() {
    var fmt = new ilib.DateFmt({
    	type: "time",
    	length: "short",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    // test formatting a javascript date. It should be converted to 
    // an ilib date object automatically and then formatted
    assertEquals("1:37pm", fmt.format(398119055000));
};

function testDateFmtFormatJSDateRightTimeZone5() {
	var d = new Date();
	// test only works in north america
	if (d.getTimezoneOffset() > 180) {
	    var fmt = new ilib.DateFmt({
	    	type: "date",
	    	length: "full",
	    	date: "w",
	    	timezone: "local"
	    });
	    assertNotNull(fmt);
	    
	    // test formatting a javascript date. It should be converted to 
	    // an ilib date object automatically and then formatted
	    assertEquals("Monday", fmt.format(1399951068674));
	}
};

function testDateFmtFormatJSDate3() {
    var fmt = new ilib.DateFmt({
    	type: "time",
    	length: "short",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    // test formatting a javascript date. It should be converted to 
    // an ilib date object automatically and then formatted
    assertEquals("1:37pm", fmt.format("Fri Aug 13 1982 13:37:35 GMT-0700 (PDT)"));
};

function testDateFmtFormatJSDateRightTimeZone6() {
	var d = new Date();
	// test only works in north america
	if (d.getTimezoneOffset() > 180) {
	    var fmt = new ilib.DateFmt({
	    	type: "date",
	    	length: "full",
	    	date: "w",
	    	timezone: "local"
	    });
	    assertNotNull(fmt);
	    
	    // test formatting a javascript date. It should be converted to 
	    // an ilib date object automatically and then formatted
	    assertEquals("Wednesday", fmt.format("Wed May 14 2014 23:37:35 GMT-0700 (PDT)"));
	}
};

function testDateFmtGetMonthsOfYear1() {
    var fmt = new ilib.DateFmt({locale: "en-US"});
    assertNotNull(fmt);
    
    var arrMonths = fmt.getMonthsOfYear();
    assertArrayEquals([undefined, "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], arrMonths);
}

function testDateFmtGetMonthsOfYear2() {
    var fmt = new ilib.DateFmt({locale: "en-US"});
    assertNotNull(fmt);
    
    var arrMonths = fmt.getMonthsOfYear({length: "long"});
    assertArrayEquals([undefined, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], arrMonths);
}

function testDateFmtGetMonthsOfYearThai() {
	// uses ThaiSolar calendar
    var fmt = new ilib.DateFmt({locale: "th-TH"});
    assertNotNull(fmt);
    
    var arrMonths = fmt.getMonthsOfYear({length: "long"});
    
    assertArrayEquals([undefined, "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."], arrMonths);
}

function testDateFmtGetMonthsOfYearLeapYear() {
	var d = ilib.Date.newInstance({type: "hebrew", locale: "en-US", year: 5774, month: 1, day: 1});
    var fmt = new ilib.DateFmt({date: "en-US", calendar: "hebrew"});
    assertNotNull(fmt);
    
    var arrMonths = fmt.getMonthsOfYear({length: "long", date: d});

    assertArrayEquals([undefined, "Nis", "Iyy", "Siv", "Tam", "Av", "Elu", "Tis", "Ḥes", "Kis", "Tev", "She", "Ada", "Ad2"], arrMonths);
}

function testDateFmtGetMonthsOfYearNonLeapYear() {
	var d = ilib.Date.newInstance({type: "hebrew", locale: "en-US", year: 5775, month: 1, day: 1});
    var fmt = new ilib.DateFmt({date: "en-US", calendar: "hebrew"});
    assertNotNull(fmt);
    
    var arrMonths = fmt.getMonthsOfYear({length: "long", date: d});

    assertArrayEquals([undefined, "Nis", "Iyy", "Siv", "Tam", "Av", "Elu", "Tis", "Ḥes", "Kis", "Tev", "She", "Ada"], arrMonths);
}

function testDateFmtGetDaysOfWeek1() {
    var fmt = new ilib.DateFmt({locale: "en-US"});
    assertNotNull(fmt);
    
    var arrDays = fmt.getDaysOfWeek();
    assertArrayEquals(["S", "M", "T", "W", "T", "F", "S"], arrDays);
}

function testDateFmtGetDaysOfWeek2() {
    var fmt = new ilib.DateFmt({locale: "en-US"});
    assertNotNull(fmt);
    
    var arrDays = fmt.getDaysOfWeek({length: 'long'});
    assertArrayEquals(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], arrDays);
}

function testDateFmtGetDaysOfWeekOtherCalendar() {
    var fmt = new ilib.DateFmt({locale: "en-US", calendar: "hebrew"});
    assertNotNull(fmt);
    
    var arrDays = fmt.getDaysOfWeek({length: 'long'});

    assertArrayEquals(["ris", "she", "shl", "rvi", "ḥam", "shi", "sha"], arrDays);
}

function testDateFmtGetDaysOfWeekThai() {
    var fmt = new ilib.DateFmt({locale: "th-TH", calendar: "thaisolar"});
    assertNotNull(fmt);
    
    var arrDays = fmt.getDaysOfWeek({length: 'long'});

    assertArrayEquals(["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."], arrDays);
}

function testDateFmtGetDaysOfWeekThaiInEnglish() {
    var fmt = new ilib.DateFmt({locale: "en-US", calendar: "thaisolar"});
    assertNotNull(fmt);
    
    var arrDays = fmt.getDaysOfWeek({length: 'long'});
	
    assertArrayEquals(["ath", "cha", "ang", "phu", "phr", "suk", "sao"], arrDays);
}


function testDateFmtWeekYear1() {
    var fmt = new ilib.DateFmt({template: "w"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "w"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "w"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "w"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "w"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "w"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "ww"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({locale: 'es-MX', template: "'El' dd 'de' MMMM"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "D"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "DD"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "DDD"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "D"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "DD"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "D"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "DDD"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "D"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "DD"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "DDD"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "D"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "DD"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "DDD"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "W", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "W", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "W", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "W", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "W", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "W", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "W", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "yy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "yyyy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "yy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "yyyy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "yy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "yyyy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "G", locale: "en"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "G", locale: "en"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "G", locale: "en"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({template: "G", locale: "en"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

/*
exception does not happen any more because we always convert
the argument to the format method to an ilib.Date first now.
By default if a bogus argument is passed, this is treated as
an empty/undefined parameter, which means the current date/time

function testDateFmtNonDateObject() {
    var fmt = new ilib.DateFmt({
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
    	assertEquals("Wrong date type passed to ilib.DateFmt.format()", e);
    }
};
*/

function testDateFmtFormatRelativeWithinMinuteAfter() {
    var fmt = new ilib.DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({
    	length: "short",
    	type: "datetime",
    	timezone: "Europe/London",
    	locale: "en-GB",
    	time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    
    assertEquals("20/9/11 21:45 GMT/BST", fmt.format(date));
};

function testDateFmtConvertToOtherTimeZone() {
    var fmt = new ilib.DateFmt({
    	length: "short",
    	type: "datetime",
    	timezone: "Australia/Sydney",
    	locale: "en-AU",
    	time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    
    assertEquals("21/9/11 6:45AM AEST", fmt.format(date));
};

function testDateFmtForTZWithNonWholeOffset1() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "time",
    	locale: "en-CA",
    	timezone: "America/St_Johns"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
    	unixtime: 1394834293627,
    	timezone: "Etc/UTC"
	});
    
    assertEquals("7:28PM", fmt.format(date));
};

function testDateFmtForTZWithNonWholeOffset2() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "time",
    	locale: "en-CA",
    	timezone: "America/St_Johns"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    assertEquals("7:28PM", fmt.format(date));
};

function testDateFmtForTZWithNonWholeOffsetQuarterHour() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "time",
    	locale: "en-CA",
    	timezone: "Asia/Kathmandu"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
    	unixtime: 1394834293627,
    	timezone: "Etc/UTC"
	});

    // Kathmandu is 5:45 ahead of UTC, no DST
    assertEquals("3:43AM", fmt.format(date));
};

function testDateFmtForTZWithNonWholeOffsetQuarterHour2() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "time",
    	locale: "en-CA",
    	timezone: "Asia/Kathmandu"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    assertEquals("3:43AM", fmt.format(date));
};

// test locales that are tier 2 and below by doing a single test to see that it basically works
function testDateFmtenNG() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "en-NG",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-NG",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("Tuesday 20 September 2011 1:45PM", fmt.format(date));
};

function testDateFmtenPH() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "en-PH",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-PH",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("Tuesday 20 September 2011 1:45PM", fmt.format(date));
};

function testDateFmtenPK() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "en-PK",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-PK",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("Tuesday 20 September 2011 1:45PM", fmt.format(date));
};

function testDateFmtenAU() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "en-AU",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-AU",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("Tuesday 20 September 2011 1:45PM", fmt.format(date));
};

function testDateFmtenZA() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "en-ZA",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "en-ZA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("Tuesday 20 September 2011 1:45 PM", fmt.format(date));
};

function testDateFmtesES() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "es-ES",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "es-ES",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("martes 20 de septiembre 2011 13:45", fmt.format(date));
};

function testDateFmtesMX() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "es-MX",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "es-MX",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("martes 20 de septiembre 2011 13:45", fmt.format(date));
};

function testDateFmtesAR() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "es-AR",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "es-AR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("martes 20 de septiembre 2011 13h45", fmt.format(date));
};

function testDateFmttrTR() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "tr-TR",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "tr-TR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("20 eylül 2011 Salı 13:45", fmt.format(date));
};

function testDateFmttrSV() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "sv-SE",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "sv-SE",
		year: 2011,
		month: 10,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("torsdag, 2011 oktober 20 13:45", fmt.format(date));
};

function testDateFmttrNO() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "no-NO",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "datetime",
    	locale: "da-DK",
    	date: "dmwy",
    	time: "hma"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "da-DK",
		year: 2011,
		month: 10,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    
    assertEquals("torsdag den 20. oktober 2011 13.45", fmt.format(date));
};

function testDateFmtGetDefault() {
    var fmt = new ilib.DateFmt({locale: "zz-ZZ"});
    assertNotNull(fmt);
    
    assertEquals("zz-ZZ", fmt.getLocale().toString());
    assertEquals("gregorian", fmt.getCalendar());
    assertEquals("d/M/yy", fmt.getTemplate());
};

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

function testDateFmtLoadLocaleDataSynch() {
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.DateFmt.cache = {};
	ilib.setLoaderCallback(mockLoader);

	var fmt = new ilib.DateFmt({locale: "zz-ZZ"});
    assertNotNull(fmt);
    
    assertEquals("zz-ZZ", fmt.getLocale().toString());
    assertEquals("gregorian", fmt.getCalendar());
    assertEquals("dd.MM.yy", fmt.getTemplate());
    ilib.setLoaderCallback(undefined);
};

function testDateFmtLoadLocaleDataSynchCached() {
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);

	var fmt = new ilib.DateFmt({locale: "zz-ZZ"});
    assertNotNull(fmt);
    
    assertEquals("zz-ZZ", fmt.getLocale().toString());
    assertEquals("gregorian", fmt.getCalendar());
    assertEquals("dd.MM.yy", fmt.getTemplate());
    ilib.setLoaderCallback(undefined);
};

function testDateFmtLoadLocaleDataAsynch() {
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.DateFmt.cache = {};
	ilib.setLoaderCallback(mockLoader);
	var callbackCalled = false;
	
	new ilib.DateFmt({
		locale: "zz-ZZ",
		sync: false,
		onLoad: function (fmt) {
		    assertNotNull(fmt);
		    
		    assertEquals("zz-ZZ", fmt.getLocale().toString());
		    assertEquals("gregorian", fmt.getCalendar());
		    assertEquals("dd.MM.yy", fmt.getTemplate());
		    
		    callbackCalled = true;
		}
	});
	
	assertTrue(callbackCalled);
    ilib.setLoaderCallback(undefined);
};

function testDateFmtLoadLocaleDataAsynchCached() {
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	var callbackCalled = false;
	
	new ilib.DateFmt({
		locale: "zz-ZZ",
		sync: false,
		onLoad: function (fmt) {
		    assertNotNull(fmt);
		    
		    assertEquals("zz-ZZ", fmt.getLocale().toString());
		    assertEquals("gregorian", fmt.getCalendar());
		    assertEquals("dd.MM.yy", fmt.getTemplate());
		    
		    callbackCalled = true;
		}
	});
	
	assertTrue(callbackCalled);
    ilib.setLoaderCallback(undefined);
};


function testDateFmtTransitionToDSTRightBefore() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "time",
    	time: "hmaz",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		timezone: "Etc/UTC",
		unixtime: 1394359140000 // this is 3/9/2014 at 1:59am
	});
    
    assertEquals("1:59am PST", fmt.format(date));
};

function testDateFmtTransitionToDSTRightAfter() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "time",
    	time: "hmaz",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
    	timezone: "Etc/UTC",
		unixtime: 1394359260000
	});
    
    // 2 minutes later
    assertEquals("3:01am PDT", fmt.format(date));
};

function testDateFmtTransitionFromDSTDayBefore() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "time",
    	time: "hmaz",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
    	timezone: "Etc/UTC",
		unixtime: 1414828740000 // this is 11/1/2014 at 0:59am
	});
    
    assertEquals("12:59am PDT", fmt.format(date));
};

function testDateFmtTransitionFromDSTWellBefore() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "time",
    	time: "hmaz",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
    	timezone: "Etc/UTC",
		unixtime: 1414915140000 // this is 11/2/2014 at 0:59am
	});
    
    assertEquals("12:59am PDT", fmt.format(date));
};

function testDateFmtTransitionFromDSTRightBefore() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "time",
    	time: "hmaz",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
    	timezone: "Etc/UTC",
		unixtime: 1414918740000 // this is 11/2/2014 at 1:59am
	});
    
    assertEquals("1:59am PDT", fmt.format(date));
};

function testDateFmtTransitionFromDSTRightAfter() {
    var fmt = new ilib.DateFmt({
    	length: "full",
    	type: "time",
    	time: "hmaz",
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
    	timezone: "Etc/UTC",
		unixtime: 1414918860000
	});
    
    // 2 minutes later
    assertEquals("1:01am PST", fmt.format(date));
};


function testDateFmtAltCalThaiInEnglish() {
    var fmt = new ilib.DateFmt({
    	locale: "en-US",
    	length: "full",
    	type: "datetime",
    	timezone: "America/Los_Angeles",
    	calendar: "thaisolar"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.ThaiSolarDate({
    	timezone: "America/Los_Angeles",
    	unixtime: 1404445524043
	});
    
    assertEquals("Karakadakhom 3, 2557 8:45pm", fmt.format(date));
};

function testDateFmtAltCalHebrewInEnglish() {
    var fmt = new ilib.DateFmt({
    	locale: "en-US",
    	length: "full",
    	type: "datetime",
    	timezone: "America/Los_Angeles",
    	calendar: "hebrew"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.HebrewDate({
    	timezone: "America/Los_Angeles",
    	unixtime: 1404445524043
	});
    
    assertEquals("Tammuz 6, 5774 8:45pm", fmt.format(date));
};

function testDateFmtAltCalIslamicInEnglish() {
    var fmt = new ilib.DateFmt({
    	locale: "en-US",
    	length: "full",
    	type: "datetime",
    	timezone: "America/Los_Angeles",
    	calendar: "islamic"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.IslamicDate({
    	timezone: "America/Los_Angeles",
    	unixtime: 1404445524043
	});
    
    assertEquals("Ramaḍān 5, 1435 8:45pm", fmt.format(date));
};

function testDateFmtAltCalPersianInEnglish() {
    var fmt = new ilib.DateFmt({
    	locale: "en-US",
    	length: "full",
    	type: "datetime",
    	timezone: "America/Los_Angeles",
    	calendar: "persian"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.PersDate({
    	timezone: "America/Los_Angeles",
    	unixtime: 1404445524043
	});
    
    assertEquals("Tir 12, 1393 8:45pm", fmt.format(date));
};
