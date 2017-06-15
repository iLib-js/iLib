/*
 * testdatefmtrange_en_SG.js - test the date range formatter object in Singapore English
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

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtSGInDayShort() {
    var fmt = new DateRngFmt({length: "short",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("31/12/11, 1:45 PM – 2:30 PM", fmt.format(start, end));
}
function testDateRngFmtSGInDayMedium() {
    var fmt = new DateRngFmt({length: "medium",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("31 Dec 2011, 1:45 PM – 2:30 PM", fmt.format(start, end));
}
function testDateRngFmtSGInDayLong() {
    var fmt = new DateRngFmt({length: "long",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("31 December 2011 at 1:45 PM – 2:30 PM", fmt.format(start, end));
}
function testDateRngFmtSGInDayFull() {
    var fmt = new DateRngFmt({length: "full",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("31 December 2011 at 1:45 PM – 2:30 PM", fmt.format(start, end));
}

function testDateRngFmtSGNextDayShort() {
    var fmt = new DateRngFmt({length: "short",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("30/12/11, 1:45 PM – 31/12/11, 2:30 PM", fmt.format(start, end));
}
function testDateRngFmtSGNextDayMedium() {
    var fmt = new DateRngFmt({length: "medium",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("30 Dec 2011, 1:45 PM – 31 Dec 2011, 2:30 PM", fmt.format(start, end));
}
function testDateRngFmtSGNextDayLong() {
    var fmt = new DateRngFmt({length: "long",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("30 December 2011 at 1:45 PM – 31 December 2011 at 2:30 PM", fmt.format(start, end));
}
function testDateRngFmtSGNextDayFull() {
    var fmt = new DateRngFmt({length: "full",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("30 December 2011 at 1:45 PM – 31 December 2011 at 2:30 PM", fmt.format(start, end));
}

function testDateRngFmtSGMultiDayShort() {
    var fmt = new DateRngFmt({length: "short",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtSGMultiDayMedium() {
    var fmt = new DateRngFmt({length: "medium",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 – 31 Dec 2011", fmt.format(start, end));
}
function testDateRngFmtSGMultiDayLong() {
    var fmt = new DateRngFmt({length: "long",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 – 31 December 2011", fmt.format(start, end));
}
function testDateRngFmtSGMultiDayFull() {
    var fmt = new DateRngFmt({length: "full",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 – 31 December 2011", fmt.format(start, end));
}

function testDateRngFmtSGNextMonthShort() {
    var fmt = new DateRngFmt({length: "short",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11 – 31/12/11", fmt.format(start, end));
}
function testDateRngFmtSGNextMonthMedium() {
    var fmt = new DateRngFmt({length: "medium",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 Nov – 31 Dec 2011", fmt.format(start, end));
}
function testDateRngFmtSGNextMonthLong() {
    var fmt = new DateRngFmt({length: "long",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 November – 31 December 2011", fmt.format(start, end));
}
function testDateRngFmtSGNextMonthFull() {
    var fmt = new DateRngFmt({length: "full",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 November – 31 December 2011", fmt.format(start, end));
}

function testDateRngFmtSGNextYearShort() {
    var fmt = new DateRngFmt({length: "short",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20/11/11 – 31/1/12", fmt.format(start, end));
}
function testDateRngFmtSGNextYearMedium() {
    var fmt = new DateRngFmt({length: "medium",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 Nov 2011 – 31 Jan 2012", fmt.format(start, end));
}
function testDateRngFmtSGNextYearLong() {
    var fmt = new DateRngFmt({length: "long",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 November 2011 – 31 January 2012", fmt.format(start, end));
}
function testDateRngFmtSGNextYearFull() {
    var fmt = new DateRngFmt({length: "full",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("20 November 2011 – 31 January 2012", fmt.format(start, end));
}

function testDateRngFmtSGMultiYearShort() {
    var fmt = new DateRngFmt({length: "short",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("11/11 – 1/14", fmt.format(start, end));
}
function testDateRngFmtSGMultiYearMedium() {
    var fmt = new DateRngFmt({length: "medium",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("Nov 2011 – Jan 2014", fmt.format(start, end));
}
function testDateRngFmtSGMultiYearLong() {
    var fmt = new DateRngFmt({length: "long",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("November 2011 – January 2014", fmt.format(start, end));
}
function testDateRngFmtMultiYearFull() {
    var fmt = new DateRngFmt({length: "full",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("November 2011 – January 2014", fmt.format(start, end));
}
function testDateRngFmtSGManyYearsFull() {
    var fmt = new DateRngFmt({length: "full",locale: "en-SG"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2064,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011 – 2064", fmt.format(start, end));
}

/*
function testDateRngFmtSGRangeShortWithinDay() {
    var fmt = new DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 34,
		second: 12,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 17,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("2:34PM – 5:00PM 11/18/2011");    
}

function testDateRngFmtSGRangeShortWithinMonth() {
    var fmt = new DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
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

function testDateRngFmtSGRangeShortConsecutiveDays() {
    var fmt = new DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("2:00PM 11/18 – 8:00am 11/19, 2011");    
}

function testDateRngFmtSGRangeShortWithinYear() {
    var fmt = new DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 5,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("5/2 – 11/19, 2011");    
}

function testDateRngFmtSGRangeShortWithinDecade() {
    var fmt = new DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2001,
		month: 9,
		day: 11,
		hour: 8,
		minute: 36,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2010,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("9/2001 – 12/2010");
}

function testDateRngFmtSGRangeShortLongTime() {
    var fmt = new DateRngFmt();
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 1776,
		month: 7,
		day: 4,
		hour: 11,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2008,
		month: 1,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("1776 – 2008");
}

function testDateRngFmtSGRangeLongWithinDay() {
    var fmt = new DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 34,
		second: 12,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 17,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("2:34PM – 5:00PM Nov 18, 2011");    
}

function testDateRngFmtSGRangeLongConsecutiveDays() {
    var fmt = new DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("2:00PM Nov 18 – 8:00am Nov 19, 2011");    
}

function testDateRngFmtRangeLongWithinMonth() {
    var fmt = new DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
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
    var fmt = new DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 5,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("May 2 – Nov 19, 2011");    
}

function testDateRngFmtRangeLongWithinDecade() {
    var fmt = new DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2001,
		month: 9,
		day: 11,
		hour: 8,
		minute: 36,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2010,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("Sep 2001 – Dec 2010");
}

function testDateRngFmtRangeLongLongTime() {
    var fmt = new DateRngFmt({
        length: "long"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 1776,
		month: 7,
		day: 4,
		hour: 11,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2008,
		month: 1,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("1776 – 2008");
}

function testDateRngFmtRangeFullWithinDay() {
    var fmt = new DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 34,
		second: 12,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 17,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("2:34PM – 5:00PM November 18, 2011");    
}

function testDateRngFmtRangeFullConsecutiveDays() {
    var fmt = new DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 18,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("2:00PM November 18 – 8:00am November 19, 2011");    
}

function testDateRngFmtRangeFullWithinMonth() {
    var fmt = new DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
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
    var fmt = new DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2011,
		month: 5,
		day: 2,
		hour: 14,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2011,
		month: 11,
		day: 19,
		hour: 8,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("May 2 – November 19, 2011");    
}

function testDateRngFmtRangeFullWithinDecade() {
    var fmt = new DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 2001,
		month: 9,
		day: 11,
		hour: 8,
		minute: 36,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2010,
		month: 12,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("September 2001 – December 2010");
}

function testDateRngFmtRangeFullLongTime() {
    var fmt = new DateRngFmt({
        length: "full"
    });
    assertNotNull(fmt);
    
    var date1 = new GregorianDate({
		year: 1776,
		month: 7,
		day: 4,
		hour: 11,
		minute: 0,
		second: 0,
		millisecond: 0
	});
    var date2 = new GregorianDate({
		year: 2008,
		month: 1,
		day: 31,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});

    assertEquals("1776 – 2008");
}
*/

