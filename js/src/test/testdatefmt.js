/*
 * testdatefmt.js - test the date formatter object
 * 
 * Copyright © 2012, JEDL Software, Inc.
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
}

function testDateFmtConstructorDefaultLocale() {
    var fmt = new ilib.DateFmt();
    
    assertNotNull(fmt);
    
    assertEquals("en-US", fmt.getLocale().toString());
}

function testDateFmtGetCalendarDefault() {
    var fmt = new ilib.DateFmt();
    
    assertNotNull(fmt);
    var cal = fmt.getCalendar();
    assertNotNull(cal);
    
    assertEquals("gregorian", cal);
}

function testDateFmtGetCalendarExplicit() {
    var fmt = new ilib.DateFmt({calendar: "julian"});
    
    assertNotNull(fmt);
    var cal = fmt.getCalendar();
    assertNotNull(cal);
    
    assertEquals("julian", cal);
}

function testDateFmtGetCalendarExplicitDefault() {
    var fmt = new ilib.DateFmt({calendar: "gregorian"});
    
    assertNotNull(fmt);
    var cal = fmt.getCalendar();
    assertNotNull(cal);
    
    assertEquals("gregorian", cal);
}

function testDateFmtGetCalendarNotInThisLocale() {
	try {
    	var fmt = new ilib.DateFmt({calendar: "arabic", locale: 'en-US'});
    	fail();
	} catch (str) {
        assertEquals("string", typeof(str));
		assertEquals("No formats available for calendar arabic in locale en-US", str);
	}
}

function testDateFmtGetLength() {
    var fmt = new ilib.DateFmt({length: "full"});
    assertNotNull(fmt);
    
    assertEquals("full", fmt.getLength());
}

function testDateFmtGetLengthDefault() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("short", fmt.getLength());
}

function testDateFmtGetLengthBogus() {
    var fmt = new ilib.DateFmt({length: "asdf"});
    assertNotNull(fmt);
    
    assertEquals("short", fmt.getLength());
}


function testDateFmtGetType() {
    var fmt = new ilib.DateFmt({type: "time"});
    assertNotNull(fmt);
    
    assertEquals("time", fmt.getType());
}

function testDateFmtGetTypeDefault() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("date", fmt.getType());
}

function testDateFmtGetTypeBogus() {
    var fmt = new ilib.DateFmt({type: "asdf"});
    assertNotNull(fmt);
    
    assertEquals("date", fmt.getType());
}


function testDateFmtGetLocale() {
    var fmt = new ilib.DateFmt({locale: "de-DE"});
    assertNotNull(fmt);
    
    assertEquals("de-DE", fmt.getLocale().toString());
}

function testDateFmtGetLocaleDefault() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("en-US", fmt.getLocale().toString());
}

function testDateFmtGetLocaleBogus() {
    var fmt = new ilib.DateFmt({locale: "xx-XX"});
    assertNotNull(fmt);
    
    assertEquals("xx-XX", fmt.getLocale().toString());
}

function testDateFmtGetTimeComponentsDefault() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("ahm", fmt.getTimeComponents());
}

function testDateFmtGetTimeComponents() {
    var fmt = new ilib.DateFmt({time: "hmsaz"});
    assertNotNull(fmt);
    
    assertEquals("ahmsz", fmt.getTimeComponents());
}

function testDateFmtGetTimeComponentsReorder() {
    var fmt = new ilib.DateFmt({time: "zahms"});
    assertNotNull(fmt);
    
    assertEquals("ahmsz", fmt.getTimeComponents());
}

function testDateFmtGetTimeComponentsBogus() {
    var fmt = new ilib.DateFmt({time: "asdf"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("ahm", fmt.getTimeComponents());
}

function testDateFmtGetDateComponentsDefault() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("dmy", fmt.getDateComponents());
}

function testDateFmtGetDateComponents() {
    var fmt = new ilib.DateFmt({date: "dmwy"});
    assertNotNull(fmt);
    
    assertEquals("dmwy", fmt.getDateComponents());
}

function testDateFmtGetDateComponentsReorder() {
    var fmt = new ilib.DateFmt({date: "wmdy"});
    assertNotNull(fmt);
    
    assertEquals("dmwy", fmt.getDateComponents());
}

function testDateFmtGetDateComponentsBogus() {
    var fmt = new ilib.DateFmt({date: "asdf"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("dmy", fmt.getDateComponents());
}

function testDateFmtGetClockDefaultUS() {
    var fmt = new ilib.DateFmt({locale: "en-US"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("12", fmt.getClock());
}

function testDateFmtGetClockDefaultDE() {
    var fmt = new ilib.DateFmt({locale: "de-DE"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("24", fmt.getClock());
}

function testDateFmtGetClock() {
    var fmt = new ilib.DateFmt({locale: "en-US", clock: "24"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("24", fmt.getClock());
}

function testDateFmtGetClockBogus() {
    var fmt = new ilib.DateFmt({locale: "en-US", clock: "asdf"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("12", fmt.getClock());
}

function testDateFmtGetTimeZoneDefault() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("America/New_York", fmt.getTimeZone().getId());
}

function testDateFmtGetTimeZone() {
    var fmt = new ilib.DateFmt({timezone: "Europe/Paris"});
    assertNotNull(fmt);
    
    assertEquals("Europe/Paris", fmt.getTimeZone().getId());
}

function testDateFmtGetTemplateDefault() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("M/d/yy", fmt.getTemplate());
}

function testDateFmtGetTemplate() {
    var fmt = new ilib.DateFmt({template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("EEE 'the' DD 'of' MM, yyyy G", fmt.getTemplate());
}

function testDateFmtGetTemplateIgnoreProperties() {
    var fmt = new ilib.DateFmt({date: 'y', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("EEE 'the' DD 'of' MM, yyyy G", fmt.getTemplate());
}

function testDateFmtUseTemplateEmptyDateComponents() {
    var fmt = new ilib.DateFmt({date: 'y', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("", fmt.getDateComponents());
}

function testDateFmtUseTemplateEmptyTimeComponents() {
    var fmt = new ilib.DateFmt({time: 'h', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("", fmt.getTimeComponents());
}

function testDateFmtUseTemplateEmptyLength() {
    var fmt = new ilib.DateFmt({length: 'short', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("", fmt.getLength());
}

function testDateFmtUseTemplateNonEmptyCalendar() {
    var fmt = new ilib.DateFmt({calendar: 'julian', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("julian", fmt.getCalendar());
}

function testDateFmtUseTemplateNonEmptyLocale() {
    var fmt = new ilib.DateFmt({locale: 'de-DE', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("de-DE", fmt.getLocale().toString());
}

function testDateFmtUseTemplateNonEmptyClock() {
    var fmt = new ilib.DateFmt({clock: "24", template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("24", fmt.getClock());
}

function testDateFmtUseTemplateWithClockHH() {
    var fmt = new ilib.DateFmt({clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    assertEquals("HH:mm", fmt.getTemplate());
}

function testDateFmtUseTemplateWithClockKK() {
    var fmt = new ilib.DateFmt({clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    assertEquals("kk:mm", fmt.getTemplate());
}

function testDateFmtUseTemplateWithClockhh() {
    var fmt = new ilib.DateFmt({clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    assertEquals("hh:mm", fmt.getTemplate());
}

function testDateFmtUseTemplateWithClockkk() {
    var fmt = new ilib.DateFmt({clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    assertEquals("KK:mm", fmt.getTemplate());
}

function testDateFmtUseTemplateWithClockHHSkipEscapedStrings24() {
    var fmt = new ilib.DateFmt({clock: "24", template: "'hh' hh:mm"});
    assertNotNull(fmt);
    
    assertEquals("'hh' HH:mm", fmt.getTemplate());
}

function testDateFmtUseTemplateWithClockHHSkipEscapedStrings12() {
    var fmt = new ilib.DateFmt({clock: "12", template: "'HH' HH:mm"});
    assertNotNull(fmt);
    
    assertEquals("'HH' hh:mm", fmt.getTemplate());
}

/*
Still have to figure out how best to support time zones
function testDateFmtUseTemplateNonEmptyTimeZone() {
    var fmt = new ilib.DateFmt({timezone: 'Europe/Paris', template: "EEE 'the' DD 'of' MM, yyyy G"});
    assertNotNull(fmt);
    
    assertEquals("Europe/Paris", fmt.getTimeZone());
}
*/

function testDateFmtGetTemplateCalendar() {
    var fmt = new ilib.DateFmt({calendar: "julian"});
    assertNotNull(fmt);
    
    assertEquals("M/d/yy", fmt.getTemplate());
}

function testDateFmtGetTemplateLocale() {
    var fmt = new ilib.DateFmt({locale: "de-DE"});
    assertNotNull(fmt);
    
    assertEquals("dd.MM.yy", fmt.getTemplate());
}

function testDateFmtGetTemplateLength() {
    var fmt = new ilib.DateFmt({length: "long"});
    assertNotNull(fmt);
    
    assertEquals("MMM d, yyyy", fmt.getTemplate());
}

function testDateFmtGetTemplateTypeDateTime() {
    var fmt = new ilib.DateFmt({type: "datetime"});
    assertNotNull(fmt);
    
    assertEquals("M/d/yy h:mma", fmt.getTemplate());
}

function testDateFmtGetTemplateTypeTime() {
    var fmt = new ilib.DateFmt({type: "time"});
    assertNotNull(fmt);
    
    assertEquals("h:mma", fmt.getTemplate());
}

function testDateFmtGetTemplateDateComponents() {
    var fmt = new ilib.DateFmt({date: "wdm"});
    assertNotNull(fmt);
    
    assertEquals("EE M/d", fmt.getTemplate());
}

function testDateFmtGetTemplateTimeComponents() {
    var fmt = new ilib.DateFmt({type: "time", time: "hm"});
    assertNotNull(fmt);
    
    assertEquals("h:mm", fmt.getTemplate());
}

function testDateFmtGetTemplateTypeTime24() {
    var fmt = new ilib.DateFmt({type: "time", clock: "24"});
    assertNotNull(fmt);
    
    assertEquals("H:mm", fmt.getTemplate());
}

function testDateFmtPad2lt10() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("01", fmt._pad(1, 2));
}

function testDateFmtPad2gt10() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("11", fmt._pad(11, 2));
}

function testDateFmtPad2gt100() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("111", fmt._pad(111, 2));
}

function testDateFmtPad0() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("1", fmt._pad(1, 0));
    assertEquals("10", fmt._pad(10, 0));
}

function testDateFmtPad4_1() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("0006", fmt._pad(6, 4));
}

function testDateFmtPad4_2() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("0067", fmt._pad(67, 4));
}

function testDateFmtPad4_3() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("0679", fmt._pad(679, 4));
}

function testDateFmtPad4_4() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("6792", fmt._pad(6792, 4));
}

function testDateFmtPad4_5() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("67925", fmt._pad(67925, 4));
}

function testDateFmtPad2lt10String() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("01", fmt._pad("1", 2));
}

function testDateFmtPad2gt10String() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("11", fmt._pad("11", 2));
}

function testDateFmtPad2gt100String() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    
    assertEquals("111", fmt._pad("111", 2));
}

function testDateFmtTokenizeSimple() {
    var fmt = new ilib.DateFmt();
    assertNotNull(fmt);
    var expected = [
        "MMM",
        " ",
        "d"
    ];
    
    assertArrayEquals(expected, fmt._tokenize("MMM d"));
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

function testDateFmtFormatWithEscapes() {
    var fmt = new ilib.DateFmt({locale: 'es-MX', template: "'El' dd 'de' MMMM"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 5,
		day: 5,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("El 05 de mayo", fmt.format(date));
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

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
}

function testDateFmtWeekOfMonthUS() {
    var fmt = new ilib.DateFmt({template: "W", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 5,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
}

function testDateFmtWeekOfMonthDE() {
    var fmt = new ilib.DateFmt({template: "W", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 5,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("0", fmt.format(date));
}

function testDateFmtWeekOfMonthUSSept() {
    var fmt = new ilib.DateFmt({template: "W", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("0", fmt.format(date));
}

function testDateFmtWeekOfMonthUSOct() {
    var fmt = new ilib.DateFmt({template: "W", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("0", fmt.format(date));
}

function testDateFmtWeekOfMonthUSNov() {
    var fmt = new ilib.DateFmt({template: "W", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
}

function testDateFmtWeekOfMonthUSRegular() {
    var fmt = new ilib.DateFmt({template: "W", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 23,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("4", fmt.format(date));
}

function testDateFmtWeekOfMonthDERegular() {
    var fmt = new ilib.DateFmt({template: "W", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 23,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("3", fmt.format(date));
}

function testDateFmtOrdinalUS1() {
    var fmt = new ilib.DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("1st", fmt.format(date));
}

function testDateFmtOrdinalUS2() {
    var fmt = new ilib.DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 2,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("2nd", fmt.format(date));
}

function testDateFmtOrdinalUS3() {
    var fmt = new ilib.DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 3,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("3rd", fmt.format(date));
}

function testDateFmtOrdinalUS4() {
    var fmt = new ilib.DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 4,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("4th", fmt.format(date));
}

function testDateFmtOrdinalUS21() {
    var fmt = new ilib.DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 21,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("21st", fmt.format(date));
}

function testDateFmtOrdinalUSDefaultCase() {
    var fmt = new ilib.DateFmt({template: "O", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 27,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("27th", fmt.format(date));
}

function testDateFmtOrdinalDE1() {
    var fmt = new ilib.DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("1.", fmt.format(date));
}

function testDateFmtOrdinalDE2() {
    var fmt = new ilib.DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 2,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("2.", fmt.format(date));
}

function testDateFmtOrdinalDE3() {
    var fmt = new ilib.DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 3,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("3.", fmt.format(date));
}

function testDateFmtOrdinalDE4() {
    var fmt = new ilib.DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 4,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("4.", fmt.format(date));
}

function testDateFmtOrdinalDE21() {
    var fmt = new ilib.DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 21,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("21.", fmt.format(date));
}

function testDateFmtOrdinalDEDefaultCase() {
    var fmt = new ilib.DateFmt({template: "O", locale: "de-DE"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 27,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("27.", fmt.format(date));
}

function testDateFmtEraCE() {
    var fmt = new ilib.DateFmt({template: "G", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 27,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("CE", fmt.format(date));
}

function testDateFmtEraBCE() {
    var fmt = new ilib.DateFmt({template: "G", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: -46,
		month: 10,
		day: 27,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("BCE", fmt.format(date));
}

function testDateFmtEraCEBoundary() {
    var fmt = new ilib.DateFmt({template: "G", locale: "en-US"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 1,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    assertEquals("CE", fmt.format(date));
}

function testDateFmtEraBCEBoundary() {
    var fmt = new ilib.DateFmt({template: "G", locale: "en-US"});
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
    assertEquals("BCE", fmt.format(date));
}

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
}
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
}
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
}
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
}
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
}
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
}

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
}
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
}

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
}
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
}

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
}
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
}

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
}
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
}

