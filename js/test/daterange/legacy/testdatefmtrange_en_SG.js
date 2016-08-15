/*
 * testdatefmtrange_en_SG.js - test the date range formatter object in Singapore English
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

function testDateRngFmtInDayShort() {
    var fmt = new ilib.DateRngFmt({length: "short",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("31/12/11, 1:45 pm - 2:30 pm", fmt.format(start, end));
}
function testDateRngFmtInDayMedium() {
    var fmt = new ilib.DateRngFmt({length: "medium",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("31 Dec 2011, 1:45 pm - 2:30 pm", fmt.format(start, end));
}
function testDateRngFmtInDayLong() {
    var fmt = new ilib.DateRngFmt({length: "long",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("31 December 2011 at 1:45 pm - 2:30 pm", fmt.format(start, end));
}
function testDateRngFmtInDayFull() {
    var fmt = new ilib.DateRngFmt({length: "full",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("31 December 2011 at 1:45 pm - 2:30 pm", fmt.format(start, end));
}

function testDateRngFmtNextDayShort() {
    var fmt = new ilib.DateRngFmt({length: "short",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("30/12/11, 1:45 pm - 31/12/11, 2:30 pm", fmt.format(start, end));
}
function testDateRngFmtNextDayMedium() {
    var fmt = new ilib.DateRngFmt({length: "medium",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("30 Dec 2011, 1:45 pm - 31 Dec 2011, 2:30 pm", fmt.format(start, end));
}
function testDateRngFmtNextDayLong() {
    var fmt = new ilib.DateRngFmt({length: "long",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("30 December 2011 at 1:45 pm - 31 December 2011 at 2:30 pm", fmt.format(start, end));
}
function testDateRngFmtNextDayFull() {
    var fmt = new ilib.DateRngFmt({length: "full",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("30 December 2011 at 1:45 pm - 31 December 2011 at 2:30 pm", fmt.format(start, end));
}

function testDateRngFmtMultiDayShort() {
    var fmt = new ilib.DateRngFmt({length: "short",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20-31/12/11", fmt.format(start, end));
}
function testDateRngFmtMultiDayMedium() {
    var fmt = new ilib.DateRngFmt({length: "medium",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20-31 Dec 2011", fmt.format(start, end));
}
function testDateRngFmtMultiDayLong() {
    var fmt = new ilib.DateRngFmt({length: "long",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20-31 December 2011", fmt.format(start, end));
}
function testDateRngFmtMultiDayFull() {
    var fmt = new ilib.DateRngFmt({length: "full",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20-31 December 2011", fmt.format(start, end));
}

function testDateRngFmtNextMonthShort() {
    var fmt = new ilib.DateRngFmt({length: "short",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11-31/12 11", fmt.format(start, end));
}
function testDateRngFmtNextMonthMedium() {
    var fmt = new ilib.DateRngFmt({length: "medium",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 Nov - 31 Dec 2011", fmt.format(start, end));
}
function testDateRngFmtNextMonthLong() {
    var fmt = new ilib.DateRngFmt({length: "long",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 November - 31 December 2011", fmt.format(start, end));
}
function testDateRngFmtNextMonthFull() {
    var fmt = new ilib.DateRngFmt({length: "full",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 November - 31 December 2011", fmt.format(start, end));
}

function testDateRngFmtNextYearShort() {
    var fmt = new ilib.DateRngFmt({length: "short",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11-31/1/12", fmt.format(start, end));
}
function testDateRngFmtNextYearMedium() {
    var fmt = new ilib.DateRngFmt({length: "medium",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 Nov 2011 - 31 Jan 2012", fmt.format(start, end));
}
function testDateRngFmtNextYearLong() {
    var fmt = new ilib.DateRngFmt({length: "long",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 November 2011 - 31 January 2012", fmt.format(start, end));
}
function testDateRngFmtNextYearFull() {
    var fmt = new ilib.DateRngFmt({length: "full",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 November 2011 - 31 January 2012", fmt.format(start, end));
}

function testDateRngFmtMultiYearShort() {
    var fmt = new ilib.DateRngFmt({length: "short",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/11-1/14", fmt.format(start, end));
}
function testDateRngFmtMultiYearMedium() {
    var fmt = new ilib.DateRngFmt({length: "medium",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("Nov 2011 - Jan 2014", fmt.format(start, end));
}
function testDateRngFmtMultiYearLong() {
    var fmt = new ilib.DateRngFmt({length: "long",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("November 2011 - January 2014", fmt.format(start, end));
}
function testDateRngFmtMultiYearFull() {
    var fmt = new ilib.DateRngFmt({length: "full",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("November 2011 - January 2014", fmt.format(start, end));
}
function testDateRngFmtManyYearsFull() {
    var fmt = new ilib.DateRngFmt({length: "full",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new ilib.Date.GregDate({
		year: 2064,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 - 2064", fmt.format(start, end));
}

/*
function testDateRngFmtRangeShortWithinDay() {
    var fmt = new ilib.DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 34,
		second: 12,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 17,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("2:34pm - 5:00pm 11/18/2011");    
}

function testDateRngFmtRangeShortWithinMonth() {
    var fmt = new ilib.DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("11/2-19, 2011");    
}

function testDateRngFmtRangeShortConsecutiveDays() {
    var fmt = new ilib.DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("2:00pm 11/18 - 8:00am 11/19, 2011");    
}

function testDateRngFmtRangeShortWithinYear() {
    var fmt = new ilib.DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 2011,
		month: 5,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("5/2 - 11/19, 2011");    
}

function testDateRngFmtRangeShortWithinDecade() {
    var fmt = new ilib.DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 2001,
		month: 9,
		day: 11,
		hour: 8,
		minute: 36,
		second: 0,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2010,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("9/2001 - 12/2010");
}

function testDateRngFmtRangeShortLongTime() {
    var fmt = new ilib.DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 1776,
		month: 7,
		day: 4,
		hour: 11,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2008,
		month: 1,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("1776 - 2008");
}

function testDateRngFmtRangeLongWithinDay() {
    var fmt = new ilib.DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 34,
		second: 12,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 17,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("2:34pm - 5:00pm Nov 18, 2011");    
}

function testDateRngFmtRangeLongConsecutiveDays() {
    var fmt = new ilib.DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("2:00pm Nov 18 - 8:00am Nov 19, 2011");    
}

function testDateRngFmtRangeLongWithinMonth() {
    var fmt = new ilib.DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("Nov 2-19, 2011");    
}

function testDateRngFmtRangeLongWithinYear() {
    var fmt = new ilib.DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 2011,
		month: 5,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("May 2 - Nov 19, 2011");    
}

function testDateRngFmtRangeLongWithinDecade() {
    var fmt = new ilib.DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 2001,
		month: 9,
		day: 11,
		hour: 8,
		minute: 36,
		second: 0,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2010,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("Sep 2001 - Dec 2010");
}

function testDateRngFmtRangeLongLongTime() {
    var fmt = new ilib.DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 1776,
		month: 7,
		day: 4,
		hour: 11,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2008,
		month: 1,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("1776 - 2008");
}

function testDateRngFmtRangeFullWithinDay() {
    var fmt = new ilib.DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 34,
		second: 12,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 17,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("2:34pm - 5:00pm November 18, 2011");    
}

function testDateRngFmtRangeFullConsecutiveDays() {
    var fmt = new ilib.DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("2:00pm November 18 - 8:00am November 19, 2011");    
}

function testDateRngFmtRangeFullWithinMonth() {
    var fmt = new ilib.DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("November 2-19, 2011");    
}

function testDateRngFmtRangeFullWithinYear() {
    var fmt = new ilib.DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 2011,
		month: 5,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("May 2 - November 19, 2011");    
}

function testDateRngFmtRangeFullWithinDecade() {
    var fmt = new ilib.DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 2001,
		month: 9,
		day: 11,
		hour: 8,
		minute: 36,
		second: 0,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2010,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("September 2001 - December 2010");
}

function testDateRngFmtRangeFullLongTime() {
    var fmt = new ilib.DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new ilib.Date.GregDate({
		year: 1776,
		month: 7,
		day: 4,
		hour: 11,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new ilib.Date.GregDate({
		year: 2008,
		month: 1,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("1776 - 2008");
}
*/
