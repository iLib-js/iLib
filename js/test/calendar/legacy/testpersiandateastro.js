/*
 * testpersiandateastro.js - test the persian date object
 * 
 * Copyright © 2014-2015, JEDLSoft
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

function testPersDateAstroConstructor() {
    var pd = new ilib.Date.PersDate();
    
    assertNotNull(pd);
}

function testPersDateAstroCalcYearPositive1() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(1, pd._calcYear(1));
}

function testPersDateAstroCalcYearPositive2() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(1, pd._calcYear(365));
}

function testPersDateAstroCalcYearPositive3() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2, pd._calcYear(366));
}
function testPersDateAstroCalcYearPositive4() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2, pd._calcYear(730));
}
function testPersDateAstroCalcYearPositive5() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(3, pd._calcYear(731));
}
function testPersDateAstroCalcYearPositive6() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(3, pd._calcYear(1095));
}
function testPersDateAstroCalcYearPositive7() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(4, pd._calcYear(1096));
}
function testPersDateAstroCalcYearPositive8() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(4, pd._calcYear(1461));
}
function testPersDateAstroCalcYearPositive9() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(5, pd._calcYear(1462));
}
function testPersDateAstroCalcYearPositive10() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(5, pd._calcYear(1826));
}
function testPersDateAstroCalcYearPositive11() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(6, pd._calcYear(1827));
}

function testPersDateAstroCalcYearNegative0() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(0, pd._calcYear(0));
}
function testPersDateAstroCalcYearNegative1() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(0, pd._calcYear(-1));
}
function testPersDateAstroCalcYearNegative2() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(0, pd._calcYear(-365));
}
function testPersDateAstroCalcYearNegative3() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-1, pd._calcYear(-366));
}
function testPersDateAstroCalcYearNegative4() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-1, pd._calcYear(-730));
}
function testPersDateAstroCalcYearNegative5() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-2, pd._calcYear(-731));
}
function testPersDateAstroCalcYearNegative6() {
    var pd = new ilib.Date.PersDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-1207, pd._calcYear(-441089));
}

function testPersRataDieAstroConstructorFromDateComponents1() {
    var prd = new ilib.Date.PersAstroRataDie({
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
function testPersRataDieAstroConstructorFromDateComponents2() {
    var prd = new ilib.Date.PersAstroRataDie({
    	year: 0,
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
function testPersRataDieAstroConstructorFromDateComponents3() {
    var prd = new ilib.Date.PersAstroRataDie({
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
function testPersRataDieAstroConstructorFromDateComponents4() {
    var prd = new ilib.Date.PersAstroRataDie({
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
function testPersRataDieAstroConstructorFromDateComponents5() {
    var prd = new ilib.Date.PersAstroRataDie({
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
function testPersRataDieAstroConstructorFromDateComponents6() {
    var prd = new ilib.Date.PersAstroRataDie({
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
function testPersRataDieAstroConstructorFromDateComponents7() {
    var prd = new ilib.Date.PersAstroRataDie({
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
function testPersRataDieAstroConstructorFromDateComponents8() {
    var prd = new ilib.Date.PersAstroRataDie({
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
function testPersRataDieAstroConstructorFromDateComponents9() {
    var prd = new ilib.Date.PersAstroRataDie({
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
function testPersRataDieAstroConstructorFromDateComponents10() {
    var prd = new ilib.Date.PersAstroRataDie({
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
function testPersRataDieAstroConstructorFromDateComponents11() {
    var prd = new ilib.Date.PersAstroRataDie({
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
function testPersRataDieAstroConstructorFromDateComponents12() {
    var prd = new ilib.Date.PersAstroRataDie({
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
function testPersRataDieAstroConstructorFromDateComponents13() {
    var prd = new ilib.Date.PersAstroRataDie({
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
function testPersRataDieAstroConstructorFromDateComponents14() {
    var prd = new ilib.Date.PersAstroRataDie({
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
function testPersRataDieAstroConstructorFromDateComponents15() {
    var prd = new ilib.Date.PersAstroRataDie({
    	year: -1207,
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
function testPersDateAstroConstructorFromJD() {
    var pd = new ilib.Date.PersDate({julianday: 1948685.5, timezone: "Etc/UTC"});
    
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
function testPersDateAstroAfterLeapYear() {
    var pd = new ilib.Date.PersDate({julianday: 1949781.9, timezone: "Etc/UTC"});  // Far 1, 0005, 9:36am
    
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

function testPersDateAstroLastDayOfLeapYear() {
    var pd = new ilib.Date.PersDate({julianday: 1949780.9, timezone: "Etc/UTC"});  // Esf 30, 0004, 9:36am
    
    assertEquals('object', typeof(pd));
    assertEquals(1461.4, pd.getRataDie());
    assertEquals(4, pd.getYears());
    assertEquals(12, pd.getMonths());
    assertEquals(30, pd.getDays());
    assertEquals(9, pd.getHours());
    assertEquals(36, pd.getMinutes());
    assertEquals(0, pd.getSeconds());
    assertEquals(0, pd.getMilliseconds());
}


var testDatesPersianPersianAstro = [
//   jd         year   month  day  hour  minute  second  millisecond  dayofweek
    [1507231.5, -1207, 5,     1,   0,    0,      0,      0,           0],
    [1660037.5, -789,  9,     14,  0,    0,      0,      0,           3],
    [1746893.5, -551,  7,     2,   0,    0,      0,      0,           3],
    [1770641.5, -486,  7,     9,   0,    0,      0,      0,           0],
    [1892731.5, -152,  10,    18,  0,    0,      0,      0,           3],
    [1931579.5, -45,   2,     31,  0,    0,      0,      0,           1],
    [1974851.5, 73,    8,     19,  0,    0,      0,      0,           6],
    [2091164.5, 392,   2,     5,   0,    0,      0,      0,           0],
    [2121509.5, 475,   3,     4,   0,    0,      0,      0,           0],
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

function testPersDateAstroConvert() {
    var pd;
    
    for (var i = 0; i < testDatesPersianPersianAstro.length; i++) {
        pd = new ilib.Date.PersDate({julianday: testDatesPersianPersianAstro[i][0], timezone: "Etc/UTC"});
    
        info("testing jd=" + testDatesPersianPersianAstro[i][0]);
        
        assertEquals('object', typeof(pd));
        assertEquals("testing rd for " + testDatesPersianPersianAstro[i][0], (testDatesPersianPersianAstro[i][0] - 1948319.5), pd.getRataDie());
        assertEquals("testing year for " + testDatesPersianPersianAstro[i][0], testDatesPersianPersianAstro[i][1], pd.getYears());
        assertEquals("testing month for " + testDatesPersianPersianAstro[i][0], testDatesPersianPersianAstro[i][2], pd.getMonths());
        assertEquals("testing day for " + testDatesPersianPersianAstro[i][0], testDatesPersianPersianAstro[i][3], pd.getDays());
        assertEquals("testing hour for " + testDatesPersianPersianAstro[i][0], testDatesPersianPersianAstro[i][4], pd.getHours());
        assertEquals("testing minute for " + testDatesPersianPersianAstro[i][0], testDatesPersianPersianAstro[i][5], pd.getMinutes());
        assertEquals("testing second for " + testDatesPersianPersianAstro[i][0], testDatesPersianPersianAstro[i][6], pd.getSeconds());
        assertEquals("testing millisecond for " + testDatesPersianPersianAstro[i][0], testDatesPersianPersianAstro[i][7], pd.getMilliseconds());
        assertEquals("testing day of week for " + testDatesPersianPersianAstro[i][0], testDatesPersianPersianAstro[i][8], pd.getDayOfWeek());
    }
}

function testPersDateAstroGetJulianDay() {
	var pd;
	
    for (var i = 0; i < testDatesPersianPersianAstro.length; i++) {
        pd = new ilib.Date.PersDate({
            year: testDatesPersianPersianAstro[i][1], 
            month: testDatesPersianPersianAstro[i][2], 
            day: testDatesPersianPersianAstro[i][3],
            hour: testDatesPersianPersianAstro[i][4],
            minute: testDatesPersianPersianAstro[i][5],
            second: testDatesPersianPersianAstro[i][6],
            millisecond: testDatesPersianPersianAstro[i][7],
            timezone: "Etc/UTC"
    	});
    
        info("testing jd=" + testDatesPersianPersianAstro[i][0]);
        
        assertEquals('object', typeof(pd));
        assertEquals("testing row " + testDatesPersianPersianAstro[i][0], testDatesPersianPersianAstro[i][0], pd.getJulianDay());
        assertEquals(testDatesPersianPersianAstro[i][8], pd.getDayOfWeek());
    }
}

function testPersDateAstroConstructorFull() {
    var pd = new ilib.Date.PersDate({
		year: 1392,
		month: 9,
		day: 23,
		hour: 16,
		minute: 7,
		second: 12,
		millisecond: 123,
		timezone: "Etc/UTC"
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

function testPersDateAstroConstructorFullWithStrings() {
    var pd = new ilib.Date.PersDate({
		year: "1392", 
		month: "9",
		day: "23", 
		hour: "16", 
		minute: "7", 
		second: "12", 
		millisecond: "123",
		timezone: "Etc/UTC"
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

function testPersDateAstroConstructorCopy() {
    var pd = new ilib.Date.PersDate({
        year: 1392, 
        month: 9, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123,
		timezone: "Etc/UTC"
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

function testPersDateAstroSetYears() {
    var pd = new ilib.Date.PersDate();
    
    assertNotNull(pd);
    
    pd.setYears(123);
    
    assertEquals(123, pd.getYears());
}

function testPersDateAstroSetMonths() {
    var pd = new ilib.Date.PersDate();
    
    assertNotNull(pd);
    
    pd.setMonths(7);
    
    assertEquals(7, pd.getMonths());
}

function testPersDateAstroSetDays() {
    var pd = new ilib.Date.PersDate();
    
    assertNotNull(pd);
    
    pd.setDays(12);
    
    assertEquals(12, pd.getDays());
}

function testPersDateAstroSetHours() {
    var pd = new ilib.Date.PersDate();
    
    assertNotNull(pd);
    
    pd.setHours(12);
    
    assertEquals(12, pd.getHours());
}

function testPersDateAstroSetMinutes() {
    var pd = new ilib.Date.PersDate();
    
    assertNotNull(pd);
    
    pd.setMinutes(13);
    
    assertEquals(13, pd.getMinutes());
}

function testPersDateAstroSetSeconds() {
    var pd = new ilib.Date.PersDate();
    
    assertNotNull(pd);
    
    pd.setSeconds(23);
    
    assertEquals(23, pd.getSeconds());
}

function testPersDateAstroSetMilliseconds() {
    var pd = new ilib.Date.PersDate();
    
    assertNotNull(pd);
    
    pd.setMilliseconds(123);
    
    assertEquals(123, pd.getMilliseconds());
}

function testGetDayOfWeek1() {
    var pd = new ilib.Date.PersDate({
		year: 1393,
		month: 3,
		day: 16,
		timezone: "Etc/UTC"
	});
    
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek());
}

function testGetDayOfWeekWithTime() {
    var pd = new ilib.Date.PersDate({
		year: 1393,
		month: 3,
		day: 16,
		hour: 8,
		minute: 39,
		second: 34,
		timezone: "Etc/UTC"
	});
    
    assertNotNull(pd);
    
    assertEquals(5, pd.getDayOfWeek());
}

function testPersDateAstroTestGetTimeZero() {
    var pd = new ilib.Date.PersDate({
		year: 1348,
		month: 10,
		day: 11,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getTime());
}

function testPersDateAstroTestGetTimeZeroJD() {
    var pd = new ilib.Date.PersDate({julianday: 2440587.5});
    assertNotNull(pd);
    
    assertEquals(0, pd.getTime());
}

function testPersDateAstroTestGetTime() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroTestGetTimeTooEarly() {
    var pd = new ilib.Date.PersDate({
		year: 1348,
		month: 10,
		day: 10,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(-1, pd.getTime());
}

function testPersDateAstroTestGetTimeTooLate() {
    var pd = new ilib.Date.PersDate({
		year: 1416,
		month: 11,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(-1, pd.getTime());
}

// test some of the helper functions to make sure they are producing the right thing
function testPersDateAstroOnOrBeforeSun() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroOnOrBeforeMon() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroOnOrBeforeTue() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroOnOrBeforeWed() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroOnOrBeforeThu() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroOnOrBeforeFri() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroOnOrBeforeSat() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroOnOrAfterSun() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroOnOrAfterMon() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroOnOrAfterTue() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroOnOrAfterWed() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroOnOrAfterThu() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroOnOrAfterFri() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroOnOrAfterSat() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroBeforeSun() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroBeforeMon() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroBeforeTue() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroBeforeWed() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroBeforeThu() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroBeforeFri() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroBeforeSat() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroAfterSun() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroAfterMon() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroAfterTue() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroAfterWed() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroAfterThu() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroAfterFri() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroAfterSat() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroTestGetWeekOfYearThisYear() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 2,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getWeekOfYear());
}

function testPersDateAstroTestGetWeekOfYearThisYear2() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 3,
		day: 19,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(12, pd.getWeekOfYear());
}

function testPersDateAstroTestGetWeekOfYearThisYear3() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 12,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(52, pd.getWeekOfYear());
}

function testPersDateAstroTestGetWeekOfYearThisYearWithTime() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 12,
		day: 29,
		hour: 16,
		minute: 13,
		second: 12,
		millisecond: 232,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(52, pd.getWeekOfYear());
}

function testPersDateAstroTestGetWeekOfYearPreviousYear() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 1,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(53, pd.getWeekOfYear());
}

function testPersDateAstroTestGetWeekOfYearLastWeekLeap() {
    var pd = new ilib.Date.PersDate({
		year: 1383,
		month: 12,
		day: 30,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfYear());
}

function testPersDateAstroTestGetWeekOfYearLastWeekRegular1() {
    var pd = new ilib.Date.PersDate({
		year: 1389,
		month: 12,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfYear());
}

function testPersDateAstroTestGetWeekOfYearLastWeekRegular2() {
    var pd = new ilib.Date.PersDate({
		year: 1390,
		month: 12,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfYear());
}

function testPersDateAstroTestGetWeekOfYearLastWeekRegular3() {
    var pd = new ilib.Date.PersDate({
		year: 1391,
		month: 12,
		day: 30,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfYear());
}

function testPersDateAstroTestGetWeekOfYearLastWeekRegular4() {
    var pd = new ilib.Date.PersDate({
		year: 1392,
		month: 12,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(53, pd.getWeekOfYear());
}

function testPersDateAstroTestGetWeekOfYearLastWeekRegular5() {
    var pd = new ilib.Date.PersDate({
		year: 1393,
		month: 12,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(52, pd.getWeekOfYear());
}

function testPersDateAstroTestGetWeekOfYearLastWeekRegular6() {
    var pd = new ilib.Date.PersDate({
		year: 1394,
		month: 12,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(52, pd.getWeekOfYear());
}

function testPersDateAstroGetDayOfYearFirstDay() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 1,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getDayOfYear());
}

function testPersDateAstroGetDayOfYearMidYear() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 3,
		day: 17,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(79, pd.getDayOfYear());
}

function testPersDateAstroGetDayOfYearLastDay() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 12,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(365, pd.getDayOfYear());
}

function testPersDateAstroGetDayOfYearLastDayLeapYear() {
    var pd = new ilib.Date.PersDate({
		year: 1387,
		month: 12,
		day: 30,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(366, pd.getDayOfYear());
}

function testPersDateAstroGetWeekOfMonth0() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 3,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("en-US"));
}

function testPersDateAstroGetWeekOfMonth1() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 3,
		day: 4,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("en-US"));
}

function testPersDateAstroGetWeekOfMonth2() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 3,
		day: 11,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(2, pd.getWeekOfMonth("en-US"));
}

function testPersDateAstroGetWeekOfMonth3() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 3,
		day: 20,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(3, pd.getWeekOfMonth("en-US"));
}

function testPersDateAstroGetWeekOfMonth4() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 3,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(4, pd.getWeekOfMonth("en-US"));
}

function testPersDateAstroGetWeekOfMonth5() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 3,
		day: 31,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getWeekOfMonth("en-US"));
}

function testPersDateAstroGetWeekOfMonth6() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 4,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("en-US"));
}

function testPersDateAstroGetWeekOfMonth7() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 5,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("en-US"));
}

function testPersDateAstroGetWeekOfMonth8() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 6,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("en-US"));
}

function testPersDateAstroGetWeekOfMonth9() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 7,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("en-US"));
}

function testPersDateAstroGetWeekOfMonthIR0() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 3,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateAstroGetWeekOfMonthIR1() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 3,
		day: 4,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateAstroGetWeekOfMonthIR2() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 3,
		day: 11,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(2, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateAstroGetWeekOfMonthIR3() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 3,
		day: 20,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(3, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateAstroGetWeekOfMonthIR4() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 3,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(4, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateAstroGetWeekOfMonthIR5() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 3,
		day: 31,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(5, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateAstroGetWeekOfMonthIR6() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 4,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateAstroGetWeekOfMonthIR7() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 5,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateAstroGetWeekOfMonthIR8() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 6,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateAstroGetWeekOfMonthIR9() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 7,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateAstroGetWeekOfMonthIR10() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 8,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateAstroGetWeekOfMonthIR11() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 9,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateAstroGetWeekOfMonthIR12() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 10,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateAstroGetWeekOfMonthIR13() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 11,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateAstroGetWeekOfMonthIR14() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 12,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getWeekOfMonth("fa-IR"));
}

function testPersDateAstroGetWeekOfMonthUS() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 8,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(0, pd.getWeekOfMonth("en-US"));
}

function testPersDateAstroGetWeekOfMonthDE() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroGetEraAP() {
    var pd = new ilib.Date.PersDate({
		year: 1388,
		month: 5,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getEra());
}

function testPersDateAstroGetEraBAP() {
    var pd = new ilib.Date.PersDate({
		year: -46,
		month: 5,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(-1, pd.getEra());
}

function testPersDateAstroGetEraAPYear1() {
    var pd = new ilib.Date.PersDate({
		year: 1,
		month: 1,
		day: 1,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(1, pd.getEra());
}

function testPersDateAstroGetEraBAPYear0() {
    var pd = new ilib.Date.PersDate({
		year: 0,
		month: 12,
		day: 29,
		timezone: "Etc/UTC"
	});
    assertNotNull(pd);
    
    assertEquals(-1, pd.getEra());
}

function testPersDateAstroSetTimeZone() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroSetTimeZoneNotString() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroSetTimeZoneUndefined() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroSetTimeZoneEmpty() {
    var pd = new ilib.Date.PersDate({
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

function testPersDateAstroInitWithUnixTimeRightTimeZone() {
    var pd = new ilib.Date.PersDate({
    	unixtime: 0
    });
    assertNotNull(pd);
    
    assertEquals("local", pd.getTimeZone());
}

function testPersDateAstroInitWithJDRightTimeZone() {
    var pd = new ilib.Date.PersDate({
    	julianday: 0
    });
    assertNotNull(pd);
    
    assertEquals("local", pd.getTimeZone());
}

function testPersDateAstroInitWithRDRightTimeZone() {
    var pd = new ilib.Date.PersDate({
    	rd: 0
    });
    assertNotNull(pd);
    
    assertEquals("local", pd.getTimeZone());
}

function testPersDateAstroRoundTripConstruction() {
    var pd = new ilib.Date.PersDate({
    	year: 1393,
    	month: 8,
    	day: 12,
    	timezone: "local"
    });
    assertNotNull(pd);
    // console.log("pd is " + JSON.stringify(pd, undefined, 4));
    
    var u = pd.getTime();
    // console.log("unixtime is " + u);
    var pd2 = new ilib.Date.PersDate({
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

function testPersDateAstroRoundTripConstruction2() {
    var pd = new ilib.Date.PersDate({
    	year: 1393,
    	month: 8,
    	day: 12,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(pd);
    // console.log("pd is " + JSON.stringify(pd, undefined, 4));
    
    var u = pd.getTime();
    // console.log("unixtime is " + u);
    var pd2 = new ilib.Date.PersDate({
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
