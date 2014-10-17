/*
 * testhandate.js - test the Han Chinese Lunar date object
 * 
 * Copyright © 2014, JEDLSoft
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

function testHanDateConstructor() {
    var pd = new ilib.Date.HanDate();
    
    assertNotNull(pd);
}

function testHanDateCalcYearPositive1() {
    var pd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(1, pd._calcYear(1));
}

function testHanDateCalcYearPositive2() {
    var pd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(1, pd._calcYear(365));
}

function testHanDateCalcYearPositive3() {
    var pd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2, pd._calcYear(366));
}
function testHanDateCalcYearPositive4() {
    var pd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2, pd._calcYear(730));
}
function testHanDateCalcYearPositive5() {
    var pd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(3, pd._calcYear(731));
}
function testHanDateCalcYearPositive6() {
    var pd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(3, pd._calcYear(1095));
}
function testHanDateCalcYearPositive7() {
    var pd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(4, pd._calcYear(1096));
}
function testHanDateCalcYearPositive8() {
    var pd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(4, pd._calcYear(1461));
}
function testHanDateCalcYearPositive9() {
    var pd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(5, pd._calcYear(1462));
}
function testHanDateCalcYearPositive10() {
    var pd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(5, pd._calcYear(1826));
}
function testHanDateCalcYearPositive11() {
    var pd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(6, pd._calcYear(1827));
}

function testHanDateCalcYearNegative1() {
    var pd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-1, pd._calcYear(0));
}
function testHanDateCalcYearNegative2() {
    var pd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-1, pd._calcYear(-365));
}
function testHanDateCalcYearNegative3() {
    var pd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-2, pd._calcYear(-366));
}
function testHanDateCalcYearNegative4() {
    var pd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-2, pd._calcYear(-730));
}
function testHanDateCalcYearNegative5() {
    var pd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-3, pd._calcYear(-731));
}
function testHanDateCalcYearNegative6() {
    var pd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-1208, pd._calcYear(-441089));
}

function testHanRataDieConstructorFromDateComponents1() {
    var prd = new ilib.Date.HanRataDie({
    	year: 1,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(1, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents2() {
    var prd = new ilib.Date.HanRataDie({
    	year: -1,
    	month: 12,
    	day: 30,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(0, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents3() {
    var prd = new ilib.Date.HanRataDie({
    	year: 1,
    	month: 12,
    	day: 29,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(365, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents4() {
    var prd = new ilib.Date.HanRataDie({
    	year: 2,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(366, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents5() {
    var prd = new ilib.Date.HanRataDie({
    	year: 1,
    	month: 1,
    	day: 31,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(31, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents6() {
    var prd = new ilib.Date.HanRataDie({
    	year: 1,
    	month: 2,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(32, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents7() {
    var prd = new ilib.Date.HanRataDie({
    	year: 2,
    	month: 12,
    	day: 29,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(730, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents8() {
    var prd = new ilib.Date.HanRataDie({
    	year: 3,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(731, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents9() {
    var prd = new ilib.Date.HanRataDie({
    	year: 3,
    	month: 12,
    	day: 29,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(1095, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents10() {
    var prd = new ilib.Date.HanRataDie({
    	year: 4,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(1096, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents11() {
    var prd = new ilib.Date.HanRataDie({
    	year: 4,
    	month: 12,
    	day: 30,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(1461, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents12() {
    var prd = new ilib.Date.HanRataDie({
    	year: 5,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(1462, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents13() {
    var prd = new ilib.Date.HanRataDie({
    	year: 5,
    	month: 12,
    	day: 29,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(1826, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents14() {
    var prd = new ilib.Date.HanRataDie({
    	year: 6,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(1827, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents15() {
    var prd = new ilib.Date.HanRataDie({
    	year: -1208,
    	month: 5,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-441088, prd.getRataDie());
}

/* julian date is rd 366 + epoch */
function testHanDateConstructorFromJD() {
    var pd = new ilib.Date.HanDate({julianday: 1948685.5, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(pd));
    assertEquals(366, pd.getRataDie());
    assertEquals(2, pd.getYears());
    assertEquals(1, pd.getMonths());
    assertEquals(1, pd.getDays());
    assertEquals(0, pd.getHours());
    assertEquals(0, pd.getMinutes());
    assertEquals(0, pd.getSeconds());
    assertEquals(0, pd.getMilliseconds());
}

// year 4 was a leap year, so Esfand 0004 contains 30 days instead of 29, and 
// Farvardin 1 0005 is one day later than expected. RD is 1462
function testHanDateAfterLeapYear() {
    var pd = new ilib.Date.HanDate({julianday: 1949781.9, timezone: "Etc/UTC"});  // Far 1, 0005, 9:36am
    
    assertEquals('object', typeof(pd));
    assertEquals(1462.4, pd.getRataDie());
    assertEquals(5, pd.getYears());
    assertEquals(1, pd.getMonths());
    assertEquals(1, pd.getDays());
    assertEquals(9, pd.getHours());
    assertEquals(36, pd.getMinutes());
    assertEquals(0, pd.getSeconds());
    assertEquals(0, pd.getMilliseconds());
}

var testDatesHan = [
//   jd         year   month  day  hour  minute  second  millisecond  dayofweek
    [1507231.5, -1208, 5,     1,   0,    0,      0,      0,           0],
    [1660037.5, -790,  9,     14,  0,    0,      0,      0,           3],
    [1746893.5, -552,  7,     2,   0,    0,      0,      0,           3],
    [1770641.5, -487,  7,     9,   0,    0,      0,      0,           0],
    [1892731.5, -153,  10,    18,  0,    0,      0,      0,           3],
    [1931579.5, -46,   2,     30,  0,    0,      0,      0,           1],
    [1974851.5, 73,    8,     19,  0,    0,      0,      0,           6],
    [2091164.5, 392,   2,     5,   0,    0,      0,      0,           0],
    [2121509.5, 475,   3,     3,   0,    0,      0,      0,           0],
    [2155779.5, 569,   1,     3,   0,    0,      0,      0,           5],
    [2174029.5, 618,   12,    20,  0,    0,      0,      0,           6],
    [2191584.5, 667,   1,     14,  0,    0,      0,      0,           5],
    [2195261.5, 677,   2,     8,   0,    0,      0,      0,           0],
    [2229274.5, 770,   3,     22,  0,    0,      0,      0,           0],
    [2245580.5, 814,   11,    13,  0,    0,      0,      0,           3],
    [2266100.5, 871,   1,     21,  0,    0,      0,      0,           6],
    [2288542.5, 932,   6,     28,  0,    0,      0,      0,           6],
    [2290901.5, 938,   12,    14,  0,    0,      0,      0,           6],
    [2323140.5, 1027,  3,     21,  0,    0,      0,      0,           3],
    [2334848.5, 1059,  4,     10,  0,    0,      0,      0,           0],
    [2348020.5, 1095,  5,     2,   0,    0,      0,      0,           5],
    [2366978.5, 1147,  3,     30,  0,    0,      0,      0,           0],
    [2385648.5, 1198,  5,     10,  0,    0,      0,      0,           1],
    [2392825.5, 1218,  1,     7,   0,    0,      0,      0,           3],
    [2416223.5, 1282,  1,     29,  0,    0,      0,      0,           0],
    [2425848.5, 1308,  6,     3,   0,    0,      0,      0,           0],
    [2430266.5, 1320,  7,     7,   0,    0,      0,      0,           1],
    [2430833.5, 1322,  1,     29,  0,    0,      0,      0,           1],
    [2431004.5, 1322,  7,     14,  0,    0,      0,      0,           4],
    [2448698.5, 1370,  12,    27,  0,    0,      0,      0,           2],
    [2450138.5, 1374,  12,    6,   0,    0,      0,      0,           0],
    [2465737.5, 1417,  8,     19,  0,    0,      0,      0,           3],
    [2486076.5, 1473,  4,     28,  0,    0,      0,      0,           0]
];

function testHanDateConvert() {
    var pd;
    
    for (var i = 0; i < testDatesHan.length; i++) {
        pd = new ilib.Date.HanDate({julianday: testDatesHan[i][0], timezone: "Etc/UTC"});
    
        info("testing jd=" + testDatesHan[i][0]);
        
        assertEquals('object', typeof(pd));
        assertEquals("testing rd for " + testDatesHan[i][0], (testDatesHan[i][0] - 1948319.5), pd.getRataDie());
        assertEquals("testing year for " + testDatesHan[i][0], testDatesHan[i][1], pd.getYears());
        assertEquals("testing month for " + testDatesHan[i][0], testDatesHan[i][2], pd.getMonths());
        assertEquals("testing day for " + testDatesHan[i][0], testDatesHan[i][3], pd.getDays());
        assertEquals("testing hour for " + testDatesHan[i][0], testDatesHan[i][4], pd.getHours());
        assertEquals("testing minute for " + testDatesHan[i][0], testDatesHan[i][5], pd.getMinutes());
        assertEquals("testing second for " + testDatesHan[i][0], testDatesHan[i][6], pd.getSeconds());
        assertEquals("testing millisecond for " + testDatesHan[i][0], testDatesHan[i][7], pd.getMilliseconds());
        assertEquals("testing day of week for " + testDatesHan[i][0], testDatesHan[i][8], pd.getDayOfWeek());
    }
}

function testHanDateGetJulianDay() {
	var pd;
	
    for (var i = 0; i < testDatesHan.length; i++) {
        pd = new ilib.Date.HanDate({
            year: testDatesHan[i][1], 
            month: testDatesHan[i][2], 
            day: testDatesHan[i][3],
            hour: testDatesHan[i][4],
            minute: testDatesHan[i][5],
            second: testDatesHan[i][6],
            millisecond: testDatesHan[i][7],
            timezone: "Etc/UTC"
    	});
    
        info("testing jd=" + testDatesHan[i][0]);
        
        assertEquals('object', typeof(pd));
        assertEquals("testing row " + testDatesHan[i][0], testDatesHan[i][0], pd.getJulianDay());
        assertEquals(testDatesHan[i][8], pd.getDayOfWeek());
    }
}

function testHanDateConstructorFull() {
    var pd = new ilib.Date.HanDate({
		year: 1392,
		month: 9,
		day: 23,
		hour: 16,
		minute: 7,
		second: 12,
		millisecond: 123
	});
    
    assertNotNull(pd);
    
    assertEquals(1392, pd.getYears());
    assertEquals(9, pd.getMonths());
    assertEquals(23, pd.getDays());
    assertEquals(16, pd.getHours());
    assertEquals(7, pd.getMinutes());
    assertEquals(12, pd.getSeconds());
    assertEquals(123, pd.getMilliseconds());
}

function testHanDateConstructorFullWithStrings() {
    var pd = new ilib.Date.HanDate({
		year: "1392", 
		month: "9",
		day: "23", 
		hour: "16", 
		minute: "7", 
		second: "12", 
		millisecond: "123"
	});
    
    assertNotNull(pd);
    
    assertEquals(1392, pd.getYears());
    assertEquals(9, pd.getMonths());
    assertEquals(23, pd.getDays());
    assertEquals(16, pd.getHours());
    assertEquals(7, pd.getMinutes());
    assertEquals(12, pd.getSeconds());
    assertEquals(123, pd.getMilliseconds());
}

function testHanDateConstructorCopy() {
    var pd = new ilib.Date.HanDate({
        year: 1392, 
        month: 9, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123
    });
    
    assertNotNull(pd);
    
    assertEquals(1392, pd.getYears());
    assertEquals(9, pd.getMonths());
    assertEquals(23, pd.getDays());
    assertEquals(16, pd.getHours());
    assertEquals(7, pd.getMinutes());
    assertEquals(12, pd.getSeconds());
    assertEquals(123, pd.getMilliseconds());
}

function testHanDateSetYears() {
    var pd = new ilib.Date.HanDate();
    
    assertNotNull(pd);
    
    pd.setYears(123);
    
    assertEquals(123, pd.getYears());
}

function testHanDateSetMonths() {
    var pd = new ilib.Date.HanDate();
    
    assertNotNull(pd);
    
    pd.setMonths(7);
    
    assertEquals(7, pd.getMonths());
}

function testHanDateSetDays() {
    var pd = new ilib.Date.HanDate();
    
    assertNotNull(pd);
    
    pd.setDays(12);
    
    assertEquals(12, pd.getDays());
}

function testHanDateSetHours() {
    var pd = new ilib.Date.HanDate();
    
    assertNotNull(pd);
    
    pd.setHours(12);
    
    assertEquals(12, pd.getHours());
}

function testHanDateSetMinutes() {
    var pd = new ilib.Date.HanDate();
    
    assertNotNull(pd);
    
    pd.setMinutes(13);
    
    assertEquals(13, pd.getMinutes());
}

function testHanDateSetSeconds() {
    var pd = new ilib.Date.HanDate();
    
    assertNotNull(pd);
    
    pd.setSeconds(23);
    
    assertEquals(23, pd.getSeconds());
}

function testHanDateSetMilliseconds() {
    var pd = new ilib.Date.HanDate();
    
    assertNotNull(pd);
    
    pd.setMilliseconds(123);
    
    assertEquals(123, pd.getMilliseconds());
}

function testGetDayOfWeek1() {
    var pd = new ilib.Date.HanDate({
		year: 1393,
		month: 3,
		day: 16
	});
    
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek());
}

function testGetDayOfWeekWithTime() {
    var pd = new ilib.Date.HanDate({
		year: 1393,
		month: 3,
		day: 16,
		hour: 8,
		minute: 39,
		second: 34
	});
    
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek());
}

function testHanDateTestGetTimeZero() {
    var pd = new ilib.Date.HanDate({
		year: 1348,
		month: 10,
		day: 11,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getTime());
}

function testHanDateTestGetTimeZeroJD() {
    var pd = new ilib.Date.HanDate({julianday: 2440587.5});
    assertNotNull(pd);
    
    assertEquals(0, pd.getTime());
}

function testHanDateTestGetTime() {
    var pd = new ilib.Date.HanDate({
		year: 1348,
		month: 10,
		day: 11,
		hour: 8,
		minute: 30,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(30600000, pd.getTime());
}

function testHanDateTestGetTimeTooEarly() {
    var pd = new ilib.Date.HanDate({
		year: 1348,
		month: 10,
		day: 10
	});
    assertNotNull(pd);
    
    assertEquals(-1, pd.getTime());
}

function testHanDateTestGetTimeTooLate() {
    var pd = new ilib.Date.HanDate({
		year: 1416,
		month: 11,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(-1, pd.getTime());
}

// test some of the helper functions to make sure they are producing the right thing
function testHanDateOnOrBeforeSun() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    // Sunday on or before pd 5 days before 
    assertEquals(rd-5, pd.onOrBefore(0).getRataDie());
}

function testHanDateOnOrBeforeMon() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-4, pd.onOrBefore(1).getRataDie());
}

function testHanDateOnOrBeforeTue() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-3, pd.onOrBefore(2).getRataDie());
}

function testHanDateOnOrBeforeWed() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-2, pd.onOrBefore(3).getRataDie());
}

function testHanDateOnOrBeforeThu() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-1, pd.onOrBefore(4).getRataDie());
}

function testHanDateOnOrBeforeFri() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd, pd.onOrBefore(5).getRataDie());
}

function testHanDateOnOrBeforeSat() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-6, pd.onOrBefore(6).getRataDie());
}

function testHanDateOnOrAfterSun() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    // Sunday on or before pd 5 days before 
    assertEquals(rd+2, pd.onOrAfter(0).getRataDie());
}

function testHanDateOnOrAfterMon() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+3, pd.onOrAfter(1).getRataDie());
}

function testHanDateOnOrAfterTue() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+4, pd.onOrAfter(2).getRataDie());
}

function testHanDateOnOrAfterWed() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+5, pd.onOrAfter(3).getRataDie());
}

function testHanDateOnOrAfterThu() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+6, pd.onOrAfter(4).getRataDie());
}

function testHanDateOnOrAfterFri() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd, pd.onOrAfter(5).getRataDie());
}

function testHanDateOnOrAfterSat() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+1, pd.onOrAfter(6).getRataDie());
}

function testHanDateBeforeSun() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    // Sunday before pd 5 days before 
    assertEquals(rd-5, pd.before(0).getRataDie());
}

function testHanDateBeforeMon() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-4, pd.before(1).getRataDie());
}

function testHanDateBeforeTue() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-3, pd.before(2).getRataDie());
}

function testHanDateBeforeWed() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-2, pd.before(3).getRataDie());
}

function testHanDateBeforeThu() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-1, pd.before(4).getRataDie());
}

function testHanDateBeforeFri() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-7, pd.before(5).getRataDie());
}

function testHanDateBeforeSat() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-6, pd.before(6).getRataDie());
}

function testHanDateAfterSun() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    // Sunday on or before pd 5 days before 
    assertEquals(rd+2, pd.after(0).getRataDie());
}

function testHanDateAfterMon() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+3, pd.after(1).getRataDie());
}

function testHanDateAfterTue() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+4, pd.after(2).getRataDie());
}

function testHanDateAfterWed() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+5, pd.after(3).getRataDie());
}

function testHanDateAfterThu() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+6, pd.after(4).getRataDie());
}

function testHanDateAfterFri() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+7, pd.after(5).getRataDie());
}

function testHanDateAfterSat() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+1, pd.after(6).getRataDie());
}

function testHanDateTestGetWeekOfYearThisYear() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 2,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearThisYear2() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 19
	});
    assertNotNull(pd);
    
    assertEquals(12, pd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearThisYear3() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 12,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(52, pd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearThisYearWithTime() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 12,
		day: 29,
		hour: 16,
		minute: 13,
		second: 12,
		millisecond: 232
	});
    assertNotNull(pd);
    
    assertEquals(52, pd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearPreviousYear() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 1,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(53, pd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekLeap() {
    var pd = new ilib.Date.HanDate({
		year: 1383,
		month: 12,
		day: 30
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular1() {
    var pd = new ilib.Date.HanDate({
		year: 1389,
		month: 12,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular2() {
    var pd = new ilib.Date.HanDate({
		year: 1390,
		month: 12,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular3() {
    var pd = new ilib.Date.HanDate({
		year: 1391,
		month: 12,
		day: 30
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular4() {
    var pd = new ilib.Date.HanDate({
		year: 1392,
		month: 12,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(53, pd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular5() {
    var pd = new ilib.Date.HanDate({
		year: 1393,
		month: 12,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(52, pd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular6() {
    var pd = new ilib.Date.HanDate({
		year: 1394,
		month: 12,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(52, pd.getWeekOfYear());
}

function testHanDateGetDayOfYearFirstDay() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 1,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getDayOfYear());
}

function testHanDateGetDayOfYearMidYear() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 17
	});
    assertNotNull(pd);
    
    assertEquals(79, pd.getDayOfYear());
}

function testHanDateGetDayOfYearLastDay() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 12,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(365, pd.getDayOfYear());
}

function testHanDateGetDayOfYearLastDayLeapYear() {
    var pd = new ilib.Date.HanDate({
		year: 1387,
		month: 12,
		day: 30
	});
    assertNotNull(pd);
    
    assertEquals(366, pd.getDayOfYear());
}

function testHanDateGetWeekOfMonth0() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth1() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 4
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth2() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 11
	});
    assertNotNull(pd);
    
    assertEquals(2, pd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth3() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 20
	});
    assertNotNull(pd);
    
    assertEquals(3, pd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth4() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(4, pd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth5() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 31
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth6() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 4,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth7() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 5,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth8() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 6,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth9() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 7,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonthIR0() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testHanDateGetWeekOfMonthIR1() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 4
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testHanDateGetWeekOfMonthIR2() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 11
	});
    assertNotNull(pd);
    
    assertEquals(2, pd.getWeekOfMonth("fa-IR"));
}

function testHanDateGetWeekOfMonthIR3() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 20
	});
    assertNotNull(pd);
    
    assertEquals(3, pd.getWeekOfMonth("fa-IR"));
}

function testHanDateGetWeekOfMonthIR4() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(4, pd.getWeekOfMonth("fa-IR"));
}

function testHanDateGetWeekOfMonthIR5() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 31
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getWeekOfMonth("fa-IR"));
}

function testHanDateGetWeekOfMonthIR6() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 4,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testHanDateGetWeekOfMonthIR7() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 5,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testHanDateGetWeekOfMonthIR8() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 6,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testHanDateGetWeekOfMonthIR9() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 7,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testHanDateGetWeekOfMonthIR10() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 8,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testHanDateGetWeekOfMonthIR11() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testHanDateGetWeekOfMonthIR12() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 10,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testHanDateGetWeekOfMonthIR13() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 11,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testHanDateGetWeekOfMonthIR14() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 12,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testHanDateGetWeekOfMonthUS() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 8,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonthDE() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 8,
		day: 1
	});
    assertNotNull(pd);
    
    // weeks in Germany start on Monday, and 8/1 is a Sunday, so it is at the 
    // end of the preceding week.
    assertEquals(0, pd.getWeekOfMonth("de-DE"));
}

function testHanDateGetEraAP() {
    var pd = new ilib.Date.HanDate({
		year: 1388,
		month: 5,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getEra());
}

function testHanDateGetEraBAP() {
    var pd = new ilib.Date.HanDate({
		year: -46,
		month: 5,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0
		
	});
    assertNotNull(pd);
    
    assertEquals(-1, pd.getEra());
}

function testHanDateGetEraAPYear1() {
    var pd = new ilib.Date.HanDate({
		year: 1,
		month: 1,
		day: 1
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getEra());
}

function testHanDateGetEraBAPYear0() {
    var pd = new ilib.Date.HanDate({
		year: 0,
		month: 12,
		day: 29
	});
    assertNotNull(pd);
    
    assertEquals(-1, pd.getEra());
}

function testHanDateSetTimeZone() {
    var pd = new ilib.Date.HanDate({
    	year: 1433, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(pd);
    
    assertEquals("America/Los_Angeles", pd.getTimeZone());
    
    pd.setTimeZone("Asia/Tokyo");
    
    assertEquals("Asia/Tokyo", pd.getTimeZone());
}

function testHanDateSetTimeZoneNotString() {
    var pd = new ilib.Date.HanDate({
    	year: 1433, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(pd);
    
    assertEquals("America/Los_Angeles", pd.getTimeZone());
    
    pd.setTimeZone(345);
    
    assertEquals("America/Los_Angeles", pd.getTimeZone());
}

function testHanDateSetTimeZoneUndefined() {
    var pd = new ilib.Date.HanDate({
    	year: 1433, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(pd);
    
    assertEquals("America/Los_Angeles", pd.getTimeZone());

    // clears it out
    pd.setTimeZone(undefined);
    
    assertEquals("local", pd.getTimeZone());
}

function testHanDateSetTimeZoneEmpty() {
    var pd = new ilib.Date.HanDate({
    	year: 1433, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(pd);
    
    assertEquals("America/Los_Angeles", pd.getTimeZone());
    
    // clears it out
    pd.setTimeZone("");
    
    assertEquals("local", pd.getTimeZone());
}

function testHanDateInitWithUnixTimeRightTimeZone() {
    var pd = new ilib.Date.HanDate({
    	unixtime: 0
    });
    assertNotNull(pd);
    
    assertEquals("local", pd.getTimeZone());
}

function testHanDateInitWithJDRightTimeZone() {
    var pd = new ilib.Date.HanDate({
    	julianday: 0
    });
    assertNotNull(pd);
    
    assertEquals("local", pd.getTimeZone());
}

function testHanDateInitWithRDRightTimeZone() {
    var pd = new ilib.Date.HanDate({
    	rd: 0
    });
    assertNotNull(pd);
    
    assertEquals("local", pd.getTimeZone());
}

function testPersDateAlgoRoundTripConstruction() {
    var pd = new ilib.Date.HanDate({
    	year: 1393,
    	month: 8,
    	day: 12,
    	timezone: "local"
    });
    assertNotNull(pd);
    // console.log("pd is " + JSON.stringify(pd, undefined, 4));
    
    var u = pd.getTime();
    // console.log("unixtime is " + u);
    var pd2 = new ilib.Date.HanDate({
    	unixtime: u,
    	timezone: "local"
    });
    // console.log("pd2 is " + JSON.stringify(pd2, undefined, 4));
    assertEquals(pd.getTimeZone(), pd2.getTimeZone());
    assertEquals(pd.getYears(), pd2.getYears());
    assertEquals(pd.getMonths(), pd2.getMonths());
    assertEquals(pd.getDays(), pd2.getDays());
    assertEquals(pd.getHours(), pd2.getHours());
    assertEquals(pd.getMinutes(), pd2.getMinutes());
    assertEquals(pd.getSeconds(), pd2.getSeconds());
}

function testPersDateAlgoRoundTripConstruction2() {
    var pd = new ilib.Date.HanDate({
    	year: 1393,
    	month: 8,
    	day: 12,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(pd);
    // console.log("pd is " + JSON.stringify(pd, undefined, 4));
    
    var u = pd.getTime();
    // console.log("unixtime is " + u);
    var pd2 = new ilib.Date.HanDate({
    	unixtime: u,
    	timezone: "America/Los_Angeles"
    });
    // console.log("pd2 is " + JSON.stringify(pd2, undefined, 4));
    assertEquals(pd.getTimeZone(), pd2.getTimeZone());
    assertEquals(pd.getYears(), pd2.getYears());
    assertEquals(pd.getMonths(), pd2.getMonths());
    assertEquals(pd.getDays(), pd2.getDays());
    assertEquals(pd.getHours(), pd2.getHours());
    assertEquals(pd.getMinutes(), pd2.getMinutes());
    assertEquals(pd.getSeconds(), pd2.getSeconds());
}
