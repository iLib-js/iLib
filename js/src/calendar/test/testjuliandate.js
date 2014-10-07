/*
 * testjuliandate.js - test the julian date object
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

function testJulDateConstructor() {
	var jul = new ilib.Date.JulDate();
	
	assertNotNull(jul);
}

/* julian date is rd 366 + epoch */
function testJulDateConstructorFromJD() {
    var jul = new ilib.Date.JulDate({
		julianday: 1721790.75,
		timezone: "Etc/UTC"
	});
    
    assertEquals('object', typeof(jul));
    assertEquals(2, jul.getYears());
    assertEquals(1, jul.getMonths());
    assertEquals(3, jul.getDays());
    assertEquals(6, jul.getHours());
    assertEquals(0, jul.getMinutes());
    assertEquals(0, jul.getSeconds());
    assertEquals(0, jul.getMilliseconds());
}

function testJulDateConstructorUnixTime() {
    var gd = new ilib.Date.JulDate({
    	unixtime: 61000,
		timezone: "Etc/UTC"
    });
    assertNotNull(gd);
    
    assertEquals("year", 1969, gd.getYears());
    assertEquals("month", 12, gd.getMonths());
    assertEquals("day", 19, gd.getDays());
    assertEquals("hour", 0, gd.getHours());
    assertEquals("minute", 1, gd.getMinutes());
    assertEquals("second", 1, gd.getSeconds());
    assertEquals("millisecond", 0, gd.getMilliseconds());
}

function testJulDateAfterLeapYear() {
    var jul = new ilib.Date.JulDate({
		julianday: 1723071.9,
		timezone: "Etc/UTC"
	});
    
    assertEquals('object', typeof(jul));
    assertEquals(5, jul.getYears());
    assertEquals(7, jul.getMonths());
    assertEquals(7, jul.getDays());
    assertEquals(9, jul.getHours());
    assertEquals(36, jul.getMinutes());
    assertEquals(0, jul.getSeconds());
    assertEquals(0, jul.getMilliseconds());
}

function testJulDateJan31Midnight() {
    var gd = new ilib.Date.JulDate({rd: 734548,	timezone: "Etc/UTC"});  // Jan 31, 2012 12:00am
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateJan31Noon() {
    var gd = new ilib.Date.JulDate({rd: 734548.5, timezone: "Etc/UTC"});  // Jan 31, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateFeb1() {
    var gd = new ilib.Date.JulDate({rd: 734549.5, timezone: "Etc/UTC"});  // Feb 1, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(2, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateFeb28LeapYear() {
    var gd = new ilib.Date.JulDate({rd: 734576.5, timezone: "Etc/UTC"});  // Feb 28, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(2, gd.getMonths());
    assertEquals(28, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateFeb29LeapYear() {
    var gd = new ilib.Date.JulDate({rd: 734577.5, timezone: "Etc/UTC"});  // Feb 29, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(2, gd.getMonths());
    assertEquals(29, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateMar1LeapYear() {
    var gd = new ilib.Date.JulDate({rd: 734578.5, timezone: "Etc/UTC"});  // Mar 1, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(3, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateMar31LeapYear() {
    var gd = new ilib.Date.JulDate({rd: 734608.5, timezone: "Etc/UTC"});  // Mar 31, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(3, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateApr1LeapYear() {
    var gd = new ilib.Date.JulDate({rd: 734609.5, timezone: "Etc/UTC"});  // Apr 1, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(4, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateDec31LeapYear() {
    var gd = new ilib.Date.JulDate({rd: 734883.5, timezone: "Etc/UTC"});  // Dec 31, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateJan1NonLeapYear() {
    var gd = new ilib.Date.JulDate({rd: 734884.5, timezone: "Etc/UTC"});  // Jan 1, 2013 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2013, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateFeb28NonLeapYear() {
    var gd = new ilib.Date.JulDate({rd: 734942.5, timezone: "Etc/UTC"});  // Feb 28, 2013 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2013, gd.getYears());
    assertEquals(2, gd.getMonths());
    assertEquals(28, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateMar1NonLeapYear() {
    var gd = new ilib.Date.JulDate({rd: 734943.5, timezone: "Etc/UTC"});  // Mar 1, 2013 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2013, gd.getYears());
    assertEquals(3, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateMar31NonLeapYear() {
    var gd = new ilib.Date.JulDate({rd: 734973.5, timezone: "Etc/UTC"});  // Mar 31, 2013 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2013, gd.getYears());
    assertEquals(3, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateApr1NonLeapYear() {
    var gd = new ilib.Date.JulDate({rd: 734974.5, timezone: "Etc/UTC"});  // Apr 1, 2013 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2013, gd.getYears());
    assertEquals(4, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateAfterCentury() {
    var jul = new ilib.Date.JulDate({
		julianday: 1758231.8, 
		timezone: "Etc/UTC"
	});
    
    assertEquals('object', typeof(jul));
    assertEquals(101, jul.getYears());
    assertEquals(10, jul.getMonths());
    assertEquals(11, jul.getDays());
    assertEquals(7, jul.getHours());
    assertEquals(12, jul.getMinutes());
    assertEquals(0, jul.getSeconds());
    assertEquals(0, jul.getMilliseconds());
}

function testJulDateAfterQuadCentury() {
    var jul = new ilib.Date.JulDate({
		julianday: 1867706.833333333333, 
		timezone: "Etc/UTC"
	});
    
    assertEquals('object', typeof(jul));
    assertEquals(401, jul.getYears());
    assertEquals(7, jul.getMonths());
    assertEquals(3, jul.getDays());
    assertEquals(8, jul.getHours());
    assertEquals(0, jul.getMinutes());
    assertEquals(0, jul.getSeconds());
    assertEquals(0, jul.getMilliseconds());
}

function testJulDateEndOfYearMinus1Rd() {
    var gd = new ilib.Date.JulDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(gd));
    assertEquals(-1, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateBeginningOfYearRd() {
    var gd = new ilib.Date.JulDate({rd: 1, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(gd));
    assertEquals(1, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateAlmostEndOfYearRd() {
    var gd = new ilib.Date.JulDate({rd: 364, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(gd));
    assertEquals(1, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(30, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateEndOfYearRd() {
    var gd = new ilib.Date.JulDate({rd: 365, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(gd));
    assertEquals(1, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testJulDateBeginningOfYear2Rd() {
    var gd = new ilib.Date.JulDate({rd: 366, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(gd));
    assertEquals(2, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

var testDates = [
//   jd         year   month  day  hour  minute  second  millisecond  dayofweek
    [1507231.5, -587,  7,     30,  0,    0,      0,      0,           0],
    [1660037.5, -169,  12,    8,   0,    0,      0,      0,           3],
    [1746893.5, 70,    9,     26,  0,    0,      0,      0,           3],
    [1770641.5, 135,   10,    3,   0,    0,      0,      0,           0],
    [1892731.5, 470,   1,     7,   0,    0,      0,      0,           3],
    [1931579.5, 576,   5,     18,  0,    0,      0,      0,           1],
    [1974851.5, 694,   11,    7,   0,    0,      0,      0,           6],
    [2091164.5, 1013,  4,     19,  0,    0,      0,      0,           0],
    [2121509.5, 1096,  5,     18,  0,    0,      0,      0,           0],
    [2155779.5, 1190,  3,     16,  0,    0,      0,      0,           5],
    [2174029.5, 1240,  3,     3,   0,    0,      0,      0,           6],
    [2191584.5, 1288,  3,     26,  0,    0,      0,      0,           5],
    [2195261.5, 1298,  4,     20,  0,    0,      0,      0,           0],
    [2229274.5, 1391,  6,     4,   0,    0,      0,      0,           0],
    [2245580.5, 1436,  1,     25,  0,    0,      0,      0,           3],
    [2266100.5, 1492,  3,     31,  0,    0,      0,      0,           6],
    [2288542.5, 1553,  9,     9,   0,    0,      0,      0,           6],
    [2290901.5, 1560,  2,     24,  0,    0,      0,      0,           6],
    [2323140.5, 1648,  5,     31,  0,    0,      0,      0,           3],
    [2334848.5, 1680,  6,     20,  0,    0,      0,      0,           0],
    [2348020.5, 1716,  7,     13,  0,    0,      0,      0,           5],
    [2366978.5, 1768,  6,     8,   0,    0,      0,      0,           0],
    [2385648.5, 1819,  7,     21,  0,    0,      0,      0,           1],
    [2392825.5, 1839,  3,     15,  0,    0,      0,      0,           3],
    [2416223.5, 1903,  4,     6,   0,    0,      0,      0,           0],
    [2425848.5, 1929,  8,     12,  0,    0,      0,      0,           0],
    [2430266.5, 1941,  9,     16,  0,    0,      0,      0,           1],
    [2430833.5, 1943,  4,     6,   0,    0,      0,      0,           1],
    [2431004.5, 1943,  9,     24,  0,    0,      0,      0,           4],
    [2448698.5, 1992,  3,     4,   0,    0,      0,      0,           2],
    [2450138.5, 1996,  2,     12,  0,    0,      0,      0,           0],
    [2465737.5, 2038,  10,    28,  0,    0,      0,      0,           3],
    [2486076.5, 2094,  7,     5,   0,    0,      0,      0,           0]
];

function testJulDateConvert() {
    var jul;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date of " + JSON.stringify(jul));
        
        jul = new ilib.Date.JulDate({
        	julianday: testDates[i][0], 
        	timezone: "Etc/UTC"
        });
    
        assertEquals('object', typeof(jul));
        assertEquals(testDates[i][1], jul.getYears());
        assertEquals(testDates[i][2], jul.getMonths());
        assertEquals(testDates[i][3], jul.getDays());
        assertEquals(testDates[i][4], jul.getHours());
        assertEquals(testDates[i][5], jul.getMinutes());
        assertEquals(testDates[i][6], jul.getSeconds());
        assertEquals(testDates[i][7], jul.getMilliseconds());
        assertEquals(testDates[i][8], jul.getDayOfWeek());
    }
}

function testJulDateConstructorFull() {
	var jul = new ilib.Date.JulDate({
		year: 2011,
		month: 9,
		day: 23,
		hour: 16,
		minute: 7,
		second: 12,
		millisecond: 123
	});
	
	assertNotNull(jul);
	
	assertEquals(2011, jul.getYears());
	assertEquals(9, jul.getMonths());
	assertEquals(23, jul.getDays());
	assertEquals(16, jul.getHours());
	assertEquals(7, jul.getMinutes());
	assertEquals(12, jul.getSeconds());
	assertEquals(123, jul.getMilliseconds());
}

function testJulDateConstructorFullWithStrings() {
	var jul = new ilib.Date.JulDate({
		year: "2011", 
		month: "9",
		day: "23", 
		hour: "16", 
		minute: "7", 
		second: "12", 
		millisecond: "123"
	});
	
	assertNotNull(jul);
	
	assertEquals(2011, jul.getYears());
	assertEquals(9, jul.getMonths());
	assertEquals(23, jul.getDays());
	assertEquals(16, jul.getHours());
	assertEquals(7, jul.getMinutes());
	assertEquals(12, jul.getSeconds());
	assertEquals(123, jul.getMilliseconds());
}

function testJulDateConstructorCopy() {
    var jul = new ilib.Date.JulDate({
        year: 2011, 
        month: 9, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123
    });
    
    assertNotNull(jul);
    
    assertEquals(2011, jul.getYears());
    assertEquals(9, jul.getMonths());
    assertEquals(23, jul.getDays());
    assertEquals(16, jul.getHours());
    assertEquals(7, jul.getMinutes());
    assertEquals(12, jul.getSeconds());
    assertEquals(123, jul.getMilliseconds());
}

function testJulDateGetJulianDay() {
    var jul;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date " + JSON.stringify(jul));
        
        jul = new ilib.Date.JulDate({
            year: testDates[i][1], 
            month: testDates[i][2], 
            day: testDates[i][3],
            hour: testDates[i][4],
            minute: testDates[i][5],
            second: testDates[i][6],
            millisecond: testDates[i][7],
            timezone: "Etc/UTC"
        });
    
        assertEquals('object', typeof(jul));
        info("calculated julian day is " + jul.getJulianDay());
        assertEquals(testDates[i][0], jul.getJulianDay());
        assertEquals(testDates[i][8], jul.getDayOfWeek());
    }
}

function testJulDateSetYears() {
	var jul = new ilib.Date.JulDate();
	
	assertNotNull(jul);
	
	jul.setYears(123);
	
	assertEquals(123, jul.getYears());
}

function testJulDateSetMonths() {
	var jul = new ilib.Date.JulDate();
	
	assertNotNull(jul);
	
	jul.setMonths(7);
	
	assertEquals(7, jul.getMonths());
}

function testJulDateSetDays() {
	var jul = new ilib.Date.JulDate();
	
	assertNotNull(jul);
	
	jul.setDays(12);
	
	assertEquals(12, jul.getDays());
}

function testJulDateSetHours() {
	var jul = new ilib.Date.JulDate();
	
	assertNotNull(jul);
	
	jul.setHours(12);
	
	assertEquals(12, jul.getHours());
}

function testJulDateSetMinutes() {
	var jul = new ilib.Date.JulDate();
	
	assertNotNull(jul);
	
	jul.setMinutes(13);
	
	assertEquals(13, jul.getMinutes());
}

function testJulDateSetSeconds() {
	var jul = new ilib.Date.JulDate();
	
	assertNotNull(jul);
	
	jul.setSeconds(23);
	
	assertEquals(23, jul.getSeconds());
}

function testJulDateSetMilliseconds() {
	var jul = new ilib.Date.JulDate();
	
	assertNotNull(jul);
	
	jul.setMilliseconds(123);
	
	assertEquals(123, jul.getMilliseconds());
}

function testJulDateTestGetTimeZero() {
    var jul = new ilib.Date.JulDate({
		year: 1969,
		month: 12,
		day: 19,
        timezone: "Etc/UTC"
	});
    assertNotNull(jul);
    
    assertEquals(0, jul.getTime());
}

function testJulDateTestGetTime() {
    var jul = new ilib.Date.JulDate({
		year: 1969,
		month: 12,
		day: 21,
		hour: 8,
		minute: 30,
        timezone: "Etc/UTC"
	});
    assertNotNull(jul);
    
    assertEquals(203400000, jul.getTime());
}

function testJulDateTestGetTimeTooEarly() {
    var jul = new ilib.Date.JulDate({
		year: 1960,
		month: 1,
		day: 1
	});
    assertNotNull(jul);
    
    assertEquals(-1, jul.getTime());
}

function testJulDateTestGetTimeTooLate() {
    var jul = new ilib.Date.JulDate({
		year: 2040,
		month: 1,
		day: 1
	});
    assertNotNull(jul);
    
    assertEquals(-1, jul.getTime());
}

function testJulDateTestSetTime1() {
    var jul = new ilib.Date.JulDate({
    	year: 1969, 
    	month: 12, 
    	day: 19,
        timezone: "Etc/UTC"
    });
    assertNotNull(jul);
    assertEquals(0, jul.getTime());
    
    jul.setTime(86400000*3 + 3600000*8 + 60000*30 + 3000);
    
    assertEquals(1969, jul.getYears());
    assertEquals(12, jul.getMonths());
    assertEquals(22, jul.getDays());
    assertEquals(8, jul.getHours());
    assertEquals(30, jul.getMinutes());
    assertEquals(3, jul.getSeconds());
}

function testJulDateTestSetTimeZero() {
    var jul = new ilib.Date.JulDate({
    	timezone: "Etc/UTC",
    	year: -1, 
    	month: 1, 
    	day: 1,
	   	hour: 1,
	   	minute: 1,
	   	second: 1,
	   	millisecond: 1
    });
    assertNotNull(jul);
    
    jul.setTime(0);
    
    assertEquals(1969, jul.getYears());
    assertEquals(12, jul.getMonths());
    assertEquals(19, jul.getDays());
    assertEquals(0, jul.getHours());
    assertEquals(0, jul.getMinutes());
    assertEquals(0, jul.getSeconds());
}

function testJulDateGetTimeZone() {
    var jul = new ilib.Date.JulDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(jul);
    
    assertEquals("America/Los_Angeles", jul.getTimeZone());
}

function testJulDateGetTimeZoneDefault() {
    var jul = new ilib.Date.JulDate({
    	year: 2011, 
    	month: 3, 
    	day: 8
    });
    assertNotNull(jul);
    
    assertEquals("local", jul.getTimeZone());
}

function testJulDateGetTimeZoneByLocaleDE() {
    var jul = new ilib.Date.JulDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	locale: "de-DE"
    });
    assertNotNull(jul);
    
    assertEquals("Europe/Berlin", jul.getTimeZone());
}

function testJulDateGetTimeZoneByLocaleJP() {
    var jul = new ilib.Date.JulDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	locale: "ja-JP"
    });
    assertNotNull(jul);
    
    assertEquals("Asia/Tokyo", jul.getTimeZone());
}

function testJulDateGetTimeZoneByLocaleBogus() {
    var jul = new ilib.Date.JulDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	locale: "zz-ZZ"
    });
    assertNotNull(jul);
    
    assertEquals("Etc/UTC", jul.getTimeZone());
}

function testJulDateCurrentTimeWithTimeZone() {
    var jul = new ilib.Date.JulDate({
    	timezone: "America/Los_Angeles"
    });
    var d = new Date();
    assertNotNull(jul);
    
    assertRoughlyEquals(d.getTime(), jul.getTime(), 50);
}

function testJulDateSetTimeZone() {
    var gd = new ilib.Date.JulDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
    
    gd.setTimeZone("Asia/Tokyo");
    
    assertEquals("Asia/Tokyo", gd.getTimeZone());
}

function testJulDateSetTimeZoneNotString() {
    var gd = new ilib.Date.JulDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
    
    gd.setTimeZone(345);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
}

function testJulDateSetTimeZoneUndefined() {
    var gd = new ilib.Date.JulDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());

    // clears it out
    gd.setTimeZone(undefined);
    
    assertEquals("local", gd.getTimeZone());
}

function testJulDateSetTimeZoneEmpty() {
    var gd = new ilib.Date.JulDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
    
    // clears it out
    gd.setTimeZone("");
    
    assertEquals("local", gd.getTimeZone());
}

function testJulDateInitWithUnixTimeRightTimeZone() {
    var gd = new ilib.Date.JulDate({
    	unixtime: 0
    });
    assertNotNull(gd);
    
    assertEquals("local", gd.getTimeZone());
}

function testJulDateInitWithJDRightTimeZone() {
    var gd = new ilib.Date.JulDate({
    	julianday: 0
    });
    assertNotNull(gd);
    
    assertEquals("local", gd.getTimeZone());
}

function testJulDateInitWithRDRightTimeZone() {
    var gd = new ilib.Date.JulDate({
    	rd: 0
    });
    assertNotNull(gd);
    
    assertEquals("local", gd.getTimeZone());
}

function testJulianDateRoundTripConstruction() {
    var jd = new ilib.Date.JulDate({
    	year: 2014,
    	month: 10,
    	day: 20,
    	timezone: "local"
    });
    assertNotNull(jd);
    // console.log("jd is " + JSON.stringify(jd, undefined, 4));
    
    var u = jd.getTime();
    // console.log("unixtime is " + u);
    var jd2 = new ilib.Date.JulDate({
    	unixtime: u,
    	timezone: "local"
    });
    // console.log("jd2 is " + JSON.stringify(jd2, undefined, 4));
    assertEquals(jd.getTimeZone(), jd2.getTimeZone());
    assertEquals(jd.getYears(), jd2.getYears());
    assertEquals(jd.getMonths(), jd2.getMonths());
    assertEquals(jd.getDays(), jd2.getDays());
    assertEquals(jd.getHours(), jd2.getHours());
    assertEquals(jd.getMinutes(), jd2.getMinutes());
    assertEquals(jd.getSeconds(), jd2.getSeconds());
}

function testJulianDateRoundTripConstruction2() {
    var jd = new ilib.Date.JulDate({
    	year: 2014,
    	month: 10,
    	day: 20,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(jd);
    // console.log("jd is " + JSON.stringify(jd, undefined, 4));
    
    var u = jd.getTime();
    // console.log("unixtime is " + u);
    var jd2 = new ilib.Date.JulDate({
    	unixtime: u,
    	timezone: "America/Los_Angeles"
    });
    // console.log("jd2 is " + JSON.stringify(jd2, undefined, 4));
    assertEquals(jd.getTimeZone(), jd2.getTimeZone());
    assertEquals(jd.getYears(), jd2.getYears());
    assertEquals(jd.getMonths(), jd2.getMonths());
    assertEquals(jd.getDays(), jd2.getDays());
    assertEquals(jd.getHours(), jd2.getHours());
    assertEquals(jd.getMinutes(), jd2.getMinutes());
    assertEquals(jd.getSeconds(), jd2.getSeconds());
}
