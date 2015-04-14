/*
 * testpersiandate.js - test the persian date object
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

function testPersAlgoDateConstructor() {
    var pd = new ilib.Date.PersAlgoDate();
    
    assertNotNull(pd);
}

function testPersAlgoDateCalcYearPositive1() {
    var pd = new ilib.Date.PersAlgoDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(1, pd._calcYear(1));
}

function testPersAlgoDateCalcYearPositive2() {
    var pd = new ilib.Date.PersAlgoDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(1, pd._calcYear(365));
}

function testPersAlgoDateCalcYearPositive3() {
    var pd = new ilib.Date.PersAlgoDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2, pd._calcYear(366));
}
function testPersAlgoDateCalcYearPositive4() {
    var pd = new ilib.Date.PersAlgoDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2, pd._calcYear(730));
}
function testPersAlgoDateCalcYearPositive5() {
    var pd = new ilib.Date.PersAlgoDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(3, pd._calcYear(731));
}
function testPersAlgoDateCalcYearPositive6() {
    var pd = new ilib.Date.PersAlgoDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(3, pd._calcYear(1095));
}
function testPersAlgoDateCalcYearPositive7() {
    var pd = new ilib.Date.PersAlgoDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(4, pd._calcYear(1096));
}
function testPersAlgoDateCalcYearPositive8() {
    var pd = new ilib.Date.PersAlgoDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(4, pd._calcYear(1461));
}
function testPersAlgoDateCalcYearPositive9() {
    var pd = new ilib.Date.PersAlgoDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(5, pd._calcYear(1462));
}
function testPersAlgoDateCalcYearPositive10() {
    var pd = new ilib.Date.PersAlgoDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(5, pd._calcYear(1826));
}
function testPersAlgoDateCalcYearPositive11() {
    var pd = new ilib.Date.PersAlgoDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(6, pd._calcYear(1827));
}

function testPersAlgoDateCalcYearNegative1() {
    var pd = new ilib.Date.PersAlgoDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-1, pd._calcYear(0));
}
function testPersAlgoDateCalcYearNegative2() {
    var pd = new ilib.Date.PersAlgoDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-1, pd._calcYear(-365));
}
function testPersAlgoDateCalcYearNegative3() {
    var pd = new ilib.Date.PersAlgoDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-2, pd._calcYear(-366));
}
function testPersAlgoDateCalcYearNegative4() {
    var pd = new ilib.Date.PersAlgoDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-2, pd._calcYear(-730));
}
function testPersAlgoDateCalcYearNegative5() {
    var pd = new ilib.Date.PersAlgoDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-3, pd._calcYear(-731));
}
function testPersAlgoDateCalcYearNegative6() {
    var pd = new ilib.Date.PersAlgoDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-1208, pd._calcYear(-441089));
}

function testPersAlgoRataDieConstructorFromDateComponents1() {
    var prd = new ilib.Date.PersAlgoRataDie({
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
function testPersAlgoRataDieConstructorFromDateComponents2() {
    var prd = new ilib.Date.PersAlgoRataDie({
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
function testPersAlgoRataDieConstructorFromDateComponents3() {
    var prd = new ilib.Date.PersAlgoRataDie({
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
function testPersAlgoRataDieConstructorFromDateComponents4() {
    var prd = new ilib.Date.PersAlgoRataDie({
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
function testPersAlgoRataDieConstructorFromDateComponents5() {
    var prd = new ilib.Date.PersAlgoRataDie({
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
function testPersAlgoRataDieConstructorFromDateComponents6() {
    var prd = new ilib.Date.PersAlgoRataDie({
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
function testPersAlgoRataDieConstructorFromDateComponents7() {
    var prd = new ilib.Date.PersAlgoRataDie({
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
function testPersAlgoRataDieConstructorFromDateComponents8() {
    var prd = new ilib.Date.PersAlgoRataDie({
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
function testPersAlgoRataDieConstructorFromDateComponents9() {
    var prd = new ilib.Date.PersAlgoRataDie({
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
function testPersAlgoRataDieConstructorFromDateComponents10() {
    var prd = new ilib.Date.PersAlgoRataDie({
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
function testPersAlgoRataDieConstructorFromDateComponents11() {
    var prd = new ilib.Date.PersAlgoRataDie({
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
function testPersAlgoRataDieConstructorFromDateComponents12() {
    var prd = new ilib.Date.PersAlgoRataDie({
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
function testPersAlgoRataDieConstructorFromDateComponents13() {
    var prd = new ilib.Date.PersAlgoRataDie({
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
function testPersAlgoRataDieConstructorFromDateComponents14() {
    var prd = new ilib.Date.PersAlgoRataDie({
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
function testPersAlgoRataDieConstructorFromDateComponents15() {
    var prd = new ilib.Date.PersAlgoRataDie({
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
function testPersAlgoDateConstructorFromJD() {
    var pd = new ilib.Date.PersAlgoDate({julianday: 1948685.5, timezone: "Etc/UTC"});
    
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
function testPersAlgoDateAfterLeapYear() {
    var pd = new ilib.Date.PersAlgoDate({julianday: 1949781.9, timezone: "Etc/UTC"});  // Far 1, 0005, 9:36am
    
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

var testDatesPersian = [
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

function testPersAlgoDateConvert() {
    var pd;
    
    for (var i = 0; i < testDatesPersian.length; i++) {
        pd = new ilib.Date.PersAlgoDate({julianday: testDatesPersian[i][0], timezone: "Etc/UTC"});
    
        info("testing jd=" + testDatesPersian[i][0]);
        
        assertEquals('object', typeof(pd));
        assertEquals("testing rd for " + testDatesPersian[i][0], (testDatesPersian[i][0] - 1948319.5), pd.getRataDie());
        assertEquals("testing year for " + testDatesPersian[i][0], testDatesPersian[i][1], pd.getYears());
        assertEquals("testing month for " + testDatesPersian[i][0], testDatesPersian[i][2], pd.getMonths());
        assertEquals("testing day for " + testDatesPersian[i][0], testDatesPersian[i][3], pd.getDays());
        assertEquals("testing hour for " + testDatesPersian[i][0], testDatesPersian[i][4], pd.getHours());
        assertEquals("testing minute for " + testDatesPersian[i][0], testDatesPersian[i][5], pd.getMinutes());
        assertEquals("testing second for " + testDatesPersian[i][0], testDatesPersian[i][6], pd.getSeconds());
        assertEquals("testing millisecond for " + testDatesPersian[i][0], testDatesPersian[i][7], pd.getMilliseconds());
        assertEquals("testing day of week for " + testDatesPersian[i][0], testDatesPersian[i][8], pd.getDayOfWeek());
    }
}

function testPersAlgoDateGetJulianDay() {
	var pd;
	
    for (var i = 0; i < testDatesPersian.length; i++) {
        pd = new ilib.Date.PersAlgoDate({
            year: testDatesPersian[i][1], 
            month: testDatesPersian[i][2], 
            day: testDatesPersian[i][3],
            hour: testDatesPersian[i][4],
            minute: testDatesPersian[i][5],
            second: testDatesPersian[i][6],
            millisecond: testDatesPersian[i][7],
            timezone: "Etc/UTC"
    	});
    
        info("testing jd=" + testDatesPersian[i][0]);
        
        assertEquals('object', typeof(pd));
        assertEquals("testing row " + testDatesPersian[i][0], testDatesPersian[i][0], pd.getJulianDay());
        assertEquals(testDatesPersian[i][8], pd.getDayOfWeek());
    }
}

function testPersAlgoDateConstructorFull() {
    var pd = new ilib.Date.PersAlgoDate({
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

function testPersAlgoDateConstructorFullWithStrings() {
    var pd = new ilib.Date.PersAlgoDate({
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

function testPersAlgoDateConstructorCopy() {
    var pd = new ilib.Date.PersAlgoDate({
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

function testPersAlgoDateSetYears() {
    var pd = new ilib.Date.PersAlgoDate();
    
    assertNotNull(pd);
    
    pd.setYears(123);
    
    assertEquals(123, pd.getYears());
}

function testPersAlgoDateSetMonths() {
    var pd = new ilib.Date.PersAlgoDate();
    
    assertNotNull(pd);
    
    pd.setMonths(7);
    
    assertEquals(7, pd.getMonths());
}

function testPersAlgoDateSetDays() {
    var pd = new ilib.Date.PersAlgoDate();
    
    assertNotNull(pd);
    
    pd.setDays(12);
    
    assertEquals(12, pd.getDays());
}

function testPersAlgoDateSetHours() {
    var pd = new ilib.Date.PersAlgoDate();
    
    assertNotNull(pd);
    
    pd.setHours(12);
    
    assertEquals(12, pd.getHours());
}

function testPersAlgoDateSetMinutes() {
    var pd = new ilib.Date.PersAlgoDate();
    
    assertNotNull(pd);
    
    pd.setMinutes(13);
    
    assertEquals(13, pd.getMinutes());
}

function testPersAlgoDateSetSeconds() {
    var pd = new ilib.Date.PersAlgoDate();
    
    assertNotNull(pd);
    
    pd.setSeconds(23);
    
    assertEquals(23, pd.getSeconds());
}

function testPersAlgoDateSetMilliseconds() {
    var pd = new ilib.Date.PersAlgoDate();
    
    assertNotNull(pd);
    
    pd.setMilliseconds(123);
    
    assertEquals(123, pd.getMilliseconds());
}

function testGetDayOfWeek1() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1393,
		month: 3,
		day: 16,
		timezone: "Etc/UTC"
	});
    
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek());
}

function testGetDayOfWeekWithTime() {
    var pd = new ilib.Date.PersAlgoDate({
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

function testPersAlgoDateTestGetTimeZero() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1348,
		month: 10,
		day: 11,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getTime());
}

function testPersAlgoDateTestGetTimeZeroJD() {
    var pd = new ilib.Date.PersAlgoDate({julianday: 2440587.5});
    assertNotNull(pd);
    
    assertEquals(0, pd.getTime());
}

function testPersAlgoDateTestGetTime() {
    var pd = new ilib.Date.PersAlgoDate({
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

function testPersAlgoDateTestGetTimeTooEarly() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1348,
		month: 10,
		day: 10,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(-1, pd.getTime());
}

function testPersAlgoDateTestGetTimeTooLate() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1416,
		month: 11,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(-1, pd.getTime());
}

// test some of the helper functions to make sure they are producing the right thing
function testPersAlgoDateOnOrBeforeSun() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    // Sunday on or before pd 5 days before 
    assertEquals(rd-5, pd.onOrBefore(0).getRataDie());
}

function testPersAlgoDateOnOrBeforeMon() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-4, pd.onOrBefore(1).getRataDie());
}

function testPersAlgoDateOnOrBeforeTue() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-3, pd.onOrBefore(2).getRataDie());
}

function testPersAlgoDateOnOrBeforeWed() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-2, pd.onOrBefore(3).getRataDie());
}

function testPersAlgoDateOnOrBeforeThu() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-1, pd.onOrBefore(4).getRataDie());
}

function testPersAlgoDateOnOrBeforeFri() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd, pd.onOrBefore(5).getRataDie());
}

function testPersAlgoDateOnOrBeforeSat() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-6, pd.onOrBefore(6).getRataDie());
}

function testPersAlgoDateOnOrAfterSun() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    // Sunday on or before pd 5 days before 
    assertEquals(rd+2, pd.onOrAfter(0).getRataDie());
}

function testPersAlgoDateOnOrAfterMon() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+3, pd.onOrAfter(1).getRataDie());
}

function testPersAlgoDateOnOrAfterTue() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+4, pd.onOrAfter(2).getRataDie());
}

function testPersAlgoDateOnOrAfterWed() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+5, pd.onOrAfter(3).getRataDie());
}

function testPersAlgoDateOnOrAfterThu() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+6, pd.onOrAfter(4).getRataDie());
}

function testPersAlgoDateOnOrAfterFri() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd, pd.onOrAfter(5).getRataDie());
}

function testPersAlgoDateOnOrAfterSat() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+1, pd.onOrAfter(6).getRataDie());
}

function testPersAlgoDateBeforeSun() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    // Sunday before pd 5 days before 
    assertEquals(rd-5, pd.before(0).getRataDie());
}

function testPersAlgoDateBeforeMon() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-4, pd.before(1).getRataDie());
}

function testPersAlgoDateBeforeTue() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-3, pd.before(2).getRataDie());
}

function testPersAlgoDateBeforeWed() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-2, pd.before(3).getRataDie());
}

function testPersAlgoDateBeforeThu() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-1, pd.before(4).getRataDie());
}

function testPersAlgoDateBeforeFri() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-7, pd.before(5).getRataDie());
}

function testPersAlgoDateBeforeSat() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd-6, pd.before(6).getRataDie());
}

function testPersAlgoDateAfterSun() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    // Sunday on or before pd 5 days before 
    assertEquals(rd+2, pd.after(0).getRataDie());
}

function testPersAlgoDateAfterMon() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+3, pd.after(1).getRataDie());
}

function testPersAlgoDateAfterTue() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+4, pd.after(2).getRataDie());
}

function testPersAlgoDateAfterWed() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+5, pd.after(3).getRataDie());
}

function testPersAlgoDateAfterThu() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+6, pd.after(4).getRataDie());
}

function testPersAlgoDateAfterFri() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+7, pd.after(5).getRataDie());
}

function testPersAlgoDateAfterSat() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 27,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek()); // Friday
    var rd = pd.getRataDie();
    
    assertEquals(rd+1, pd.after(6).getRataDie());
}

function testPersAlgoDateTestGetWeekOfYearThisYear() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 2,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getWeekOfYear());
}

function testPersAlgoDateTestGetWeekOfYearThisYear2() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 3,
		day: 19,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(12, pd.getWeekOfYear());
}

function testPersAlgoDateTestGetWeekOfYearThisYear3() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 12,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(52, pd.getWeekOfYear());
}

function testPersAlgoDateTestGetWeekOfYearThisYearWithTime() {
    var pd = new ilib.Date.PersAlgoDate({
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

function testPersAlgoDateTestGetWeekOfYearPreviousYear() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 1,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(53, pd.getWeekOfYear());
}

function testPersAlgoDateTestGetWeekOfYearLastWeekLeap() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1383,
		month: 12,
		day: 30,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfYear());
}

function testPersAlgoDateTestGetWeekOfYearLastWeekRegular1() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1389,
		month: 12,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfYear());
}

function testPersAlgoDateTestGetWeekOfYearLastWeekRegular2() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1390,
		month: 12,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfYear());
}

function testPersAlgoDateTestGetWeekOfYearLastWeekRegular3() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1391,
		month: 12,
		day: 30,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfYear());
}

function testPersAlgoDateTestGetWeekOfYearLastWeekRegular4() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1392,
		month: 12,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(53, pd.getWeekOfYear());
}

function testPersAlgoDateTestGetWeekOfYearLastWeekRegular5() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1393,
		month: 12,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(52, pd.getWeekOfYear());
}

function testPersAlgoDateTestGetWeekOfYearLastWeekRegular6() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1394,
		month: 12,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(52, pd.getWeekOfYear());
}

function testPersAlgoDateGetDayOfYearFirstDay() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 1,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getDayOfYear());
}

function testPersAlgoDateGetDayOfYearMidYear() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 3,
		day: 17,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(79, pd.getDayOfYear());
}

function testPersAlgoDateGetDayOfYearLastDay() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 12,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(365, pd.getDayOfYear());
}

function testPersAlgoDateGetDayOfYearLastDayLeapYear() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1387,
		month: 12,
		day: 30,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(366, pd.getDayOfYear());
}

function testPersAlgoDateGetWeekOfMonth0() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 3,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("en-US"));
}

function testPersAlgoDateGetWeekOfMonth1() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 3,
		day: 4,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("en-US"));
}

function testPersAlgoDateGetWeekOfMonth2() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 3,
		day: 11,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(2, pd.getWeekOfMonth("en-US"));
}

function testPersAlgoDateGetWeekOfMonth3() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 3,
		day: 20,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(3, pd.getWeekOfMonth("en-US"));
}

function testPersAlgoDateGetWeekOfMonth4() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 3,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(4, pd.getWeekOfMonth("en-US"));
}

function testPersAlgoDateGetWeekOfMonth5() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 3,
		day: 31,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getWeekOfMonth("en-US"));
}

function testPersAlgoDateGetWeekOfMonth6() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 4,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("en-US"));
}

function testPersAlgoDateGetWeekOfMonth7() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 5,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("en-US"));
}

function testPersAlgoDateGetWeekOfMonth8() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 6,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("en-US"));
}

function testPersAlgoDateGetWeekOfMonth9() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 7,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("en-US"));
}

function testPersAlgoDateGetWeekOfMonthIR0() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 3,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testPersAlgoDateGetWeekOfMonthIR1() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 3,
		day: 4,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersAlgoDateGetWeekOfMonthIR2() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 3,
		day: 11,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(2, pd.getWeekOfMonth("fa-IR"));
}

function testPersAlgoDateGetWeekOfMonthIR3() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 3,
		day: 20,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(3, pd.getWeekOfMonth("fa-IR"));
}

function testPersAlgoDateGetWeekOfMonthIR4() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 3,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(4, pd.getWeekOfMonth("fa-IR"));
}

function testPersAlgoDateGetWeekOfMonthIR5() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 3,
		day: 31,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getWeekOfMonth("fa-IR"));
}

function testPersAlgoDateGetWeekOfMonthIR6() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 4,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersAlgoDateGetWeekOfMonthIR7() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 5,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testPersAlgoDateGetWeekOfMonthIR8() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 6,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersAlgoDateGetWeekOfMonthIR9() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 7,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testPersAlgoDateGetWeekOfMonthIR10() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 8,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testPersAlgoDateGetWeekOfMonthIR11() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 9,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersAlgoDateGetWeekOfMonthIR12() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 10,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersAlgoDateGetWeekOfMonthIR13() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 11,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testPersAlgoDateGetWeekOfMonthIR14() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 12,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersAlgoDateGetWeekOfMonthUS() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 8,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("en-US"));
}

function testPersAlgoDateGetWeekOfMonthDE() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 8,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    // weeks in Germany start on Monday, and 8/1 is a Sunday, so it is at the 
    // end of the preceding week.
    assertEquals(0, pd.getWeekOfMonth("de-DE"));
}

function testPersAlgoDateGetEraAP() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1388,
		month: 5,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getEra());
}

function testPersAlgoDateGetEraBAP() {
    var pd = new ilib.Date.PersAlgoDate({
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

function testPersAlgoDateGetEraAPYear1() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 1,
		month: 1,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getEra());
}

function testPersAlgoDateGetEraBAPYear0() {
    var pd = new ilib.Date.PersAlgoDate({
		year: 0,
		month: 12,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(-1, pd.getEra());
}

function testPersAlgoDateSetTimeZone() {
    var pd = new ilib.Date.PersAlgoDate({
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

function testPersAlgoDateSetTimeZoneNotString() {
    var pd = new ilib.Date.PersAlgoDate({
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

function testPersAlgoDateSetTimeZoneUndefined() {
    var pd = new ilib.Date.PersAlgoDate({
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

function testPersAlgoDateSetTimeZoneEmpty() {
    var pd = new ilib.Date.PersAlgoDate({
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

function testPersAlgoDateInitWithUnixTimeRightTimeZone() {
    var pd = new ilib.Date.PersAlgoDate({
    	unixtime: 0
    });
    assertNotNull(pd);
    
    assertEquals("local", pd.getTimeZone());
}

function testPersAlgoDateInitWithJDRightTimeZone() {
    var pd = new ilib.Date.PersAlgoDate({
    	julianday: 0
    });
    assertNotNull(pd);
    
    assertEquals("local", pd.getTimeZone());
}

function testPersAlgoDateInitWithRDRightTimeZone() {
    var pd = new ilib.Date.PersAlgoDate({
    	rd: 0
    });
    assertNotNull(pd);
    
    assertEquals("local", pd.getTimeZone());
}

function testPersDateAlgoRoundTripConstruction() {
    var pd = new ilib.Date.PersAlgoDate({
    	year: 1393,
    	month: 8,
    	day: 12,
    	timezone: "local"
    });
    assertNotNull(pd);
    // console.log("pd is " + JSON.stringify(pd, undefined, 4));
    
    var u = pd.getTime();
    // console.log("unixtime is " + u);
    var pd2 = new ilib.Date.PersAlgoDate({
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
    var pd = new ilib.Date.PersAlgoDate({
    	year: 1393,
    	month: 8,
    	day: 12,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(pd);
    // console.log("pd is " + JSON.stringify(pd, undefined, 4));
    
    var u = pd.getTime();
    // console.log("unixtime is " + u);
    var pd2 = new ilib.Date.PersAlgoDate({
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
