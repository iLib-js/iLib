/*
 * testthaisolardate.js - test the Thai solar date object
 * 
 * Copyright © 2556, JEDLSoft
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

function testThaiSolarDateConstructor() {
	var gd = new ilib.Date.ThaiSolarDate();
	
	assertNotNull(gd);
}

/* julian date is rd 366 + epoch */
function testThaiSolarDateConstructorFromJD() {
    var gd = new ilib.Date.ThaiSolarDate({julianday: 1721790.75});
    
    assertEquals('object', typeof(gd));
    assertEquals(545, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(6, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateAfterLeapYear() {
    var gd = new ilib.Date.ThaiSolarDate({julianday: 1723071.9});  // jul 5, 05, 9:36am
    
    assertEquals('object', typeof(gd));
    assertEquals(548, gd.getYears());
    assertEquals(7, gd.getMonths());
    assertEquals(5, gd.getDays());
    assertEquals(9, gd.getHours());
    assertEquals(36, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateJan31Midnight() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 932860});  // Jan 31, 2555 12:00am
    
    assertEquals('object', typeof(gd));
    assertEquals(2555, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateJan31Noon() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 932860.5});  // Jan 31, 2555 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2555, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateFeb1() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 932861.5});  // Feb 1, 2555 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2555, gd.getYears());
    assertEquals(2, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateFeb28LeapYear() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 932888.5});  // Feb 28, 2555 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2555, gd.getYears());
    assertEquals(2, gd.getMonths());
    assertEquals(28, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateFeb29LeapYear() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 932889.5});  // Feb 29, 2555 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2555, gd.getYears());
    assertEquals(2, gd.getMonths());
    assertEquals(29, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateMar1LeapYear() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 932890.5});  // Mar 1, 2555 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2555, gd.getYears());
    assertEquals(3, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateMar31LeapYear() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 932920.5});  // Mar 31, 2555 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2555, gd.getYears());
    assertEquals(3, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateApr1LeapYear() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 932921.5});  // Apr 1, 2555 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2555, gd.getYears());
    assertEquals(4, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateDec31LeapYear() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 933195.5});  // Dec 31, 2555 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2555, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateJan1NonLeapYear() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 933196.5});  // Jan 1, 2556 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2556, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateFeb28NonLeapYear() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 933254.5});  // Feb 28, 2556 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2556, gd.getYears());
    assertEquals(2, gd.getMonths());
    assertEquals(28, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateMar1NonLeapYear() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 933255.5});  // Mar 1, 2556 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2556, gd.getYears());
    assertEquals(3, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateMar31NonLeapYear() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 933285.5});  // Mar 31, 2556 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2556, gd.getYears());
    assertEquals(3, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateApr1NonLeapYear() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 933286.5});  // Apr 1, 2556 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2556, gd.getYears());
    assertEquals(4, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateAfterCentury() {
    var gd = new ilib.Date.ThaiSolarDate({julianday: 1758231.8}); // Oct 10, 101, 7:12am
    
    assertEquals('object', typeof(gd));
    assertEquals(644, gd.getYears());
    assertEquals(10, gd.getMonths());
    assertEquals(10, gd.getDays());
    assertEquals(7, gd.getHours());
    assertEquals(12, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateAfterQuadCentury() {
    var gd = new ilib.Date.ThaiSolarDate({julianday: 1867706.833333333333}); // Jul 4, 401, 8:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(944, gd.getYears());
    assertEquals(7, gd.getMonths());
    assertEquals(4, gd.getDays());
    assertEquals(8, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateEndOfYear() {
    var gd = new ilib.Date.ThaiSolarDate({julianday: 2455196.5});
    
    assertEquals('object', typeof(gd));
    assertEquals(2552, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateBeginningOfYear() {
    var gd = new ilib.Date.ThaiSolarDate({julianday: 2455197.5});
    
    assertEquals('object', typeof(gd));
    assertEquals(2553, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateEndOfYearLeapYear() {
    var gd = new ilib.Date.ThaiSolarDate({julianday: 2454831.5});
    
    assertEquals('object', typeof(gd));
    assertEquals(2551, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateBeginningOfYearAfterLeapYear() {
    var gd = new ilib.Date.ThaiSolarDate({julianday: 2454832.5});
    
    assertEquals('object', typeof(gd));
    assertEquals(2552, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateEndOfYear0Rd() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 0});
    
    assertEquals('object', typeof(gd));
    assertEquals(0, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateBeginningOfYearRd() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 1});
    
    assertEquals('object', typeof(gd));
    assertEquals(1, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateAlmostEndOfYearRd() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 364});
    
    assertEquals('object', typeof(gd));
    assertEquals(1, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(30, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateEndOfYearRd() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 365});
    
    assertEquals('object', typeof(gd));
    assertEquals(1, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testThaiSolarDateBeginningOfYear2Rd() {
    var gd = new ilib.Date.ThaiSolarDate({rd: 366});
    
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
	[1507231.5,  -43,  7,     24,  0,    0,      0,      0,           0],
	[1660037.5,  375,  12,     5,  0,    0,      0,      0,           3],
	[1746893.5,  613,  9,     24,  0,    0,      0,      0,           3],
	[1770641.5,  678,  10,     2,  0,    0,      0,      0,           0],
	[1892731.5, 1013,  1,      8,  0,    0,      0,      0,           3],
	[1931579.5, 1119,  5,     20,  0,    0,      0,      0,           1],
	[1974851.5, 1237,  11,    10,  0,    0,      0,      0,           6],
	[2091164.5, 1556,  4,     25,  0,    0,      0,      0,           0],
	[2121509.5, 1639,  5,     24,  0,    0,      0,      0,           0],
	[2155779.5, 1733,  3,     23,  0,    0,      0,      0,           5],
	[2174029.5, 1783,  3,     10,  0,    0,      0,      0,           6],
	[2191584.5, 1831,  4,     2,   0,    0,      0,      0,           5],
	[2195261.5, 1841,  4,     27,  0,    0,      0,      0,           0],
	[2229274.5, 1934,  6,     12,  0,    0,      0,      0,           0],
	[2245580.5, 1979,  2,     3,   0,    0,      0,      0,           3],
	[2266100.5, 2035,  4,     9,   0,    0,      0,      0,           6],  
	[2288542.5, 2096,  9,     19,  0,    0,      0,      0,           6],
	[2290901.5, 2103,  3,     5,   0,    0,      0,      0,           6],
	[2323140.5, 2191,  6,     10,  0,    0,      0,      0,           3],
	[2334848.5, 2223,  6,     30,  0,    0,      0,      0,           0],
	[2348020.5, 2259,  7,     24,  0,    0,      0,      0,           5],
	[2366978.5, 2311,  6,     19,  0,    0,      0,      0,           0],
	[2385648.5, 2362,  8,     2,   0,    0,      0,      0,           1],
	[2392825.5, 2382,  3,     27,  0,    0,      0,      0,           3],
	[2416223.5, 2446,  4,     19,  0,    0,      0,      0,           0],
	[2425848.5, 2472,  8,     25,  0,    0,      0,      0,           0],
	[2430266.5, 2484,  9,     29,  0,    0,      0,      0,           1],
	[2430833.5, 2486,  4,     19,  0,    0,      0,      0,           1],
	[2431004.5, 2486,  10,     7,  0,    0,      0,      0,           4],  
	[2448698.5, 2535,  3,     17,  0,    0,      0,      0,           2],
	[2450138.5, 2539,  2,     25,  0,    0,      0,      0,           0],
	[2465737.5, 2581,  11,    10,  0,    0,      0,      0,           3],
	[2486076.5, 2637,  7,     18,  0,    0,      0,      0,           0]
];

function testThaiSolarDateConvert() {
    var gd;
    
    for (var i = 0; i < testDates.length; i++) {
        gd = new ilib.Date.ThaiSolarDate({julianday: testDates[i][0]});
    
        info("testing jd=" + testDates[i][0]);
        
        assertEquals('object', typeof(gd));
        assertEquals(testDates[i][1], gd.getYears());
        assertEquals(testDates[i][2], gd.getMonths());
        assertEquals(testDates[i][3], gd.getDays());
        assertEquals(testDates[i][4], gd.getHours());
        assertEquals(testDates[i][5], gd.getMinutes());
        assertEquals(testDates[i][6], gd.getSeconds());
        assertEquals(testDates[i][7], gd.getMilliseconds());
        assertEquals(testDates[i][8], gd.getDayOfWeek());
    }
}

function testThaiSolarDateConstructorFull() {
	var gd = new ilib.Date.ThaiSolarDate({
		year: 2553, 
		month: 9, 
		day: 23, 
		hour: 16, 
		minute: 7, 
		second: 12, 
		millisecond: 123
	});
	
	assertNotNull(gd);
	
	assertEquals(2553, gd.getYears());
	assertEquals(9, gd.getMonths());
	assertEquals(23, gd.getDays());
	assertEquals(16, gd.getHours());
	assertEquals(7, gd.getMinutes());
	assertEquals(12, gd.getSeconds());
	assertEquals(123, gd.getMilliseconds());
}

function testThaiSolarDateConstructorFullWithStrings() {
	// often you get strings from a UI element instead of numbers... 
	// this constructor should work with numbers or strings
	var gd = new ilib.Date.ThaiSolarDate({
		year: "2553", 
		month: "9",
		day: "23", 
		hour: "16", 
		minute: "7", 
		second: "12", 
		millisecond: "123"
	});
	
	assertNotNull(gd);
	
	assertEquals(2553, gd.getYears());
	assertEquals(9, gd.getMonths());
	assertEquals(23, gd.getDays());
	assertEquals(16, gd.getHours());
	assertEquals(7, gd.getMinutes());
	assertEquals(12, gd.getSeconds());
	assertEquals(123, gd.getMilliseconds());
}

function testThaiSolarDateConstructorCopy() {
    var gd2 = new ilib.Date.ThaiSolarDate({
        year: 2553, 
        month: 9, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123
    });
    var gd = new ilib.Date.ThaiSolarDate(gd2);
    
    assertNotNull(gd);
    
    assertEquals(2553, gd.getYears());
    assertEquals(9, gd.getMonths());
    assertEquals(23, gd.getDays());
    assertEquals(16, gd.getHours());
    assertEquals(7, gd.getMinutes());
    assertEquals(12, gd.getSeconds());
    assertEquals(123, gd.getMilliseconds());
}

function testThaiSolarDateConstructorEmpty() {
    var gd = new ilib.Date.ThaiSolarDate();
    var now = new Date(gd.getTime()); // compare against the JS date
    assertNotNull(gd);
    
    assertEquals("year", now.getUTCFullYear()+543, gd.getYears());
    assertEquals("month", now.getUTCMonth()+1, gd.getMonths()); // js date months are 0-11 instead of 1-12 like gregorian dates
    assertEquals("day", now.getUTCDate(), gd.getDays());
    assertEquals("hour", now.getUTCHours(), gd.getHours());
    assertEquals("minute", now.getUTCMinutes(), gd.getMinutes());
    assertEquals("second", now.getUTCSeconds(), gd.getSeconds());
    assertEquals("millisecond", now.getUTCMilliseconds(), gd.getMilliseconds());
}

function testThaiSolarDateConstructorUnixTime() {
    var gd = new ilib.Date.ThaiSolarDate({
    	unixtime: 61000
    });
    assertNotNull(gd);
    
    assertEquals("year", 2513, gd.getYears());
    assertEquals("month", 1, gd.getMonths());
    assertEquals("day", 1, gd.getDays());
    assertEquals("hour", 0, gd.getHours());
    assertEquals("minute", 1, gd.getMinutes());
    assertEquals("second", 1, gd.getSeconds());
    assertEquals("millisecond", 0, gd.getMilliseconds());
}

function testThaiSolarDateGetJulianDay() {
    var gd;
    
    for (var i = 0; i < testDates.length; i++) {
        gd = new ilib.Date.ThaiSolarDate({
            year: testDates[i][1], 
            month: testDates[i][2], 
            day: testDates[i][3],
            hour: testDates[i][4],
            minute: testDates[i][5],
            second: testDates[i][6],
            millisecond: testDates[i][7]
        });
    
        info("testing jd=" + testDates[i][0]);
        
        assertEquals('object', typeof(gd));
        assertEquals(testDates[i][0], gd.getJulianDay());
        assertEquals(testDates[i][8], gd.getDayOfWeek());
    }
}

function testThaiSolarDateSetYears() {
	var gd = new ilib.Date.ThaiSolarDate();
	
	assertNotNull(gd);
	
	gd.setYears(123);
	
	assertEquals(123, gd.getYears());
}

function testThaiSolarDateSetMonths() {
	var gd = new ilib.Date.ThaiSolarDate();
	
	assertNotNull(gd);
	
	gd.setMonths(7);
	
	assertEquals(7, gd.getMonths());
}

function testThaiSolarDateSetDays() {
	var gd = new ilib.Date.ThaiSolarDate();
	
	assertNotNull(gd);
	
	gd.setDays(12);
	
	assertEquals(12, gd.getDays());
}

function testThaiSolarDateSetHours() {
	var gd = new ilib.Date.ThaiSolarDate();
	
	assertNotNull(gd);
	
	gd.setHours(12);
	
	assertEquals(12, gd.getHours());
}

function testThaiSolarDateSetMinutes() {
	var gd = new ilib.Date.ThaiSolarDate();
	
	assertNotNull(gd);
	
	gd.setMinutes(13);
	
	assertEquals(13, gd.getMinutes());
}

function testThaiSolarDateSetSeconds() {
	var gd = new ilib.Date.ThaiSolarDate();
	
	assertNotNull(gd);
	
	gd.setSeconds(23);
	
	assertEquals(23, gd.getSeconds());
}

function testThaiSolarDateSetMilliseconds() {
	var gd = new ilib.Date.ThaiSolarDate();
	
	assertNotNull(gd);
	
	gd.setMilliseconds(123);
	
	assertEquals(123, gd.getMilliseconds());
}

function testGetDayOfWeekSimple1() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 1, 
    	month: 1, 
    	day: 1
    });
    
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek());
}

function testGetDayOfWeekSimple2() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 0,
    	month: 12, 
    	day: 31
    });
    
    assertNotNull(gd);
    
    assertEquals(4, gd.getDayOfWeek());
}

function testGetDayOfWeekSimple3() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 1,
    	month: 1,
    	day: 2
    });
    
    assertNotNull(gd);
    
    assertEquals(6, gd.getDayOfWeek());
}

function testGetDayOfWeekSimple4() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 1,
    	month: 1,
    	day: 3
    });
    
    assertNotNull(gd);
    
    assertEquals(0, gd.getDayOfWeek());
}

function testGetDayOfWeekSimple5() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 1,
    	month: 1,
    	day: 4
    });
    
    assertNotNull(gd);
    
    assertEquals(1, gd.getDayOfWeek());
}

function testGetDayOfWeek1() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 9, 
    	day: 30
    });
    
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek());
}

function testGetDayOfWeekWithTime() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 9, 
    	day: 30, 
    	hour: 8, 
    	minute: 39, 
    	second: 34
    });
    
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek());
}

function testGetDayOfWeek2() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 1648, 
    	month: 6, 
    	day: 10
    });
    
    assertNotNull(gd);
    
    assertEquals(3, gd.getDayOfWeek());
}

function testGetDayOfWeek3() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 1190, 
    	month: 3, 
    	day: 23
    });
    
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek());
}

function testGetDayOfWeek4() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: -586, 
    	month: 7, 
    	day: 24
    });
    
    assertNotNull(gd);
    
    assertEquals(0, gd.getDayOfWeek());
}

function testThaiSolarDateTestGetTimeZero() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2513, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(0, gd.getTime());
}

function testThaiSolarDateTestGetTime() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2513, 
    	month: 1, 
    	day: 3,
	   	hour: 8,
	   	minute: 30
    });
    assertNotNull(gd);
    
    assertEquals(203400000, gd.getTime());
}

function testThaiSolarDateTestGetTimeTooEarly() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2512, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(-1, gd.getTime());
}

function testThaiSolarDateTestGetTimeTooLate() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2581, 
    	month: 1, 
    	day: 20
    });
    assertNotNull(gd);
    
    assertEquals(-1, gd.getTime());
}

function testThaiSolarDateTestSetTime1() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2513, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    assertEquals(0, gd.getTime());
    
    // set to Jan 4, 2513 at 8:30:03
    gd.setTime(86400000*3 + 3600000*8 + 60000*30 + 3000);
    
    assertEquals(2513, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(4, gd.getDays());
    assertEquals(8, gd.getHours());
    assertEquals(30, gd.getMinutes());
    assertEquals(3, gd.getSeconds());
}

function testThaiSolarDateTestSetTimeZero() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: -1, 
    	month: 1, 
    	day: 1,
	   	hour: 1,
	   	minute: 1,
	   	second: 1,
	   	millisecond: 1
    });
    assertNotNull(gd);
    
    gd.setTime(0);
    
    assertEquals(2513, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
}

// test some of the helper functions to make sure they are producing the right thing
function testThaiSolarDateOnOrBeforeSun() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    // Sunday on or before is 5 days before 
    assertEquals(rd-5, gd.onOrBeforeRd(rd, 0));
}

function testThaiSolarDateOnOrBeforeMon() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-4, gd.onOrBeforeRd(rd, 1));
}

function testThaiSolarDateOnOrBeforeTue() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-3, gd.onOrBeforeRd(rd, 2));
}

function testThaiSolarDateOnOrBeforeWed() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-2, gd.onOrBeforeRd(rd, 3));
}

function testThaiSolarDateOnOrBeforeThu() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-1, gd.onOrBeforeRd(rd, 4));
}

function testThaiSolarDateOnOrBeforeFri() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd, gd.onOrBeforeRd(rd, 5));
}

function testThaiSolarDateOnOrBeforeSat() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-6, gd.onOrBeforeRd(rd, 6));
}

function testThaiSolarDateOnOrBeforeSunWithTime() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1,
	   	hour: 8
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie(); // contains fractional time for the 8:00am part
    
    // Sunday on or before is 5 days before 
    // Should give an rd result that also contains the fractional time 
    assertEquals(rd-5, gd.onOrBeforeRd(rd, 0));
}

function testThaiSolarDateOnOrAfterSun() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    // Sunday on or before is 5 days before 
    assertEquals(rd+2, gd.onOrAfterRd(rd, 0));
}

function testThaiSolarDateOnOrAfterSunDate() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.onOrBefore(0);
    
    // Sunday on or before is 5 days before
    assertEquals(2551, date.year);
    assertEquals(12, date.month);
    assertEquals(27, date.day);
}

function testThaiSolarDateOnOrAfterMon() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+3, gd.onOrAfterRd(rd, 1));
}

function testThaiSolarDateOnOrAfterMonDate() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552,
    	month: 1,
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.onOrAfter(1);
    
    assertEquals(2552, date.year);
    assertEquals(1, date.month);
    assertEquals(4, date.day);
}

function testThaiSolarDateOnOrAfterTue() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+4, gd.onOrAfterRd(rd, 2));
}

function testThaiSolarDateOnOrAfterWed() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+5, gd.onOrAfterRd(rd, 3));
}

function testThaiSolarDateOnOrAfterThu() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+6, gd.onOrAfterRd(rd, 4));
}

function testThaiSolarDateOnOrAfterThuDate() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.onOrAfter(4);
    
    assertEquals(2552, date.year);
    assertEquals(1, date.month);
    assertEquals(7, date.day);
}

function testThaiSolarDateOnOrAfterFri() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd, gd.onOrAfterRd(rd, 5));
}

function testThaiSolarDateOnOrAfterFriDate() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.onOrAfter(5);
    
    assertEquals(2552, date.year);
    assertEquals(1, date.month);
    assertEquals(1, date.day);
}

function testThaiSolarDateOnOrAfterSat() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+1, gd.onOrAfterRd(rd, 6));
}

function testThaiSolarDateBeforeSun() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    // Sunday before is 5 days before 
    assertEquals(rd-5, gd.beforeRd(rd, 0));
}

function testThaiSolarDateBeforeSunDate() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.before(0);
    
    // Sunday before is 5 days before 
    assertEquals(2551, date.year);
    assertEquals(12, date.month);
    assertEquals(27, date.day);
}

function testThaiSolarDateBeforeMon() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-4, gd.beforeRd(rd, 1));
}

function testThaiSolarDateBeforeTue() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-3, gd.beforeRd(rd, 2));
}

function testThaiSolarDateBeforeWed() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-2, gd.beforeRd(rd, 3));
}

function testThaiSolarDateBeforeThu() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-1, gd.beforeRd(rd, 4));
}

function testThaiSolarDateBeforeThuDate() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.before(4);
    
    // Thursday before is 1 day before 
    assertEquals(2551, date.year);
    assertEquals(12, date.month);
    assertEquals(31, date.day);
}

function testThaiSolarDateBeforeFri() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-7, gd.beforeRd(rd, 5));
}

function testThaiSolarDateBeforeFriDate() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.before(5);
    
    // Friday before is 7 days before the current Friday
    assertEquals(2551, date.year);
    assertEquals(12, date.month);
    assertEquals(25, date.day);
}

function testThaiSolarDateBeforeSat() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-6, gd.beforeRd(rd, 6));
}

function testThaiSolarDateAfterSun() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    // Sunday after is 2 days after 
    assertEquals(rd+2, gd.afterRd(rd, 0));
}

function testThaiSolarDateAfterSunDate() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.after(0);
    
    // Sunday after is 2 days after 
    assertEquals(2552, date.year);
    assertEquals(1, date.month);
    assertEquals(3, date.day);
}

function testThaiSolarDateAfterMon() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+3, gd.afterRd(rd, 1));
}

function testThaiSolarDateAfterTue() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+4, gd.afterRd(rd, 2));
}

function testThaiSolarDateAfterWed() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+5, gd.afterRd(rd, 3));
}

function testThaiSolarDateAfterThu() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+6, gd.afterRd(rd, 4));
}

function testThaiSolarDateAfterFri() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+7, gd.afterRd(rd, 5));
}

function testThaiSolarDateAfterFriDate() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.after(5);
    
    // Friday after is 7 days after 
    assertEquals(2552, date.year);
    assertEquals(1, date.month);
    assertEquals(8, date.day);
}

function testThaiSolarDateAfterSat() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+1, gd.afterRd(rd, 6));
}

function testThaiSolarDateAfterSatDate() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.after(6);
    
    // Sat after is 1 day after 
    assertEquals(2552, date.year);
    assertEquals(1, date.month);
    assertEquals(2, date.day);
}

function testThaiSolarDateTestGetWeekOfYearThisYear() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 7
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearThisYear2() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 25
    });
    assertNotNull(gd);
    
    assertEquals(4, gd.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearThisYear3() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 10, 
    	day: 19
    });
    assertNotNull(gd);
    
    assertEquals(42, gd.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearThisYearWithTime() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: -1468, 
    	month: 10, 
    	day: 19,
	   	hour: 16,
	   	minute: 13,
	   	second: 12,
	   	millisecond: 232
    });
    assertNotNull(gd);
    
    assertEquals(42, gd.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearPreviousYear() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(52, gd.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearLastWeekLeap() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2551, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(53, gd.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearLastWeekRegular1() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(52, gd.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearLastWeekRegular2() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2550, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearLastWeekRegular3() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2549, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearLastWeekRegular4() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2548, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearLastWeekRegular5() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2547, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(52, gd.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearLastWeekRegular6() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(52, gd.getWeekOfYear());
}

function testThaiSolarDateGetDayOfYearFirstDay() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getDayOfYear());
}

function testThaiSolarDateGetDayOfYearPaddysDay() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 3, 
    	day: 17
    });
    assertNotNull(gd);
    
    assertEquals(76, gd.getDayOfYear());
}

function testThaiSolarDateGetDayOfYearPaddysDayLeapYear() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2550, 
    	month: 3, 
    	day: 17
    });
    assertNotNull(gd);
    
    assertEquals(77, gd.getDayOfYear());
}

function testThaiSolarDateGetDayOfYearLastDay() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(365, gd.getDayOfYear());
}

function testThaiSolarDateGetDayOfYearLastDayLeapYear() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2550, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(366, gd.getDayOfYear());
}

function testThaiSolarDateGetWeekOfMonth0() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 10, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(0, gd.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth1() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 10, 
    	day: 2
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth2() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 10, 
    	day: 11
    });
    assertNotNull(gd);
    
    assertEquals(2, gd.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth3() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 10, 
    	day: 20
    });
    assertNotNull(gd);
    
    assertEquals(3, gd.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth4() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 10, 
    	day: 29
    });
    assertNotNull(gd);
    
    assertEquals(4, gd.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth5() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 10, 
    	day: 30
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth6() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 9, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(0, gd.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth7() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 8, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth8() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 7, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(0, gd.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth9() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 6, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonthUS() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 5, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonthDE() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 5, 
    	day: 1
    });
    assertNotNull(gd);
    
    // weeks in Germany start on Monday, and May 1st is a Sunday, so it is at the 
    // end of the preceding week.
    assertEquals(0, gd.getWeekOfMonth("de-DE"));
}

function testThaiSolarDateGetEraCE() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 5, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getEra());
}

function testThaiSolarDateGetEraBCE() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: -46, 
    	month: 5, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(-1, gd.getEra());
}

function testThaiSolarDateGetEraCEYear1() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 1, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getEra());
}

function testThaiSolarDateGetEraCEYear0() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 0, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(-1, gd.getEra());
}

function testThaiSolarDateJan1Midnight() {
    var gd = new ilib.Date.ThaiSolarDate({julianday: 2455197.5});
    assertNotNull(gd);
    
    assertEquals(2553, gd.year);
    assertEquals(1, gd.month);
    assertEquals(1, gd.day);
    assertEquals(0, gd.hour);
    assertEquals(0, gd.minute);
    assertEquals(0, gd.second);
    assertEquals(0, gd.millisecond);
}

function testThaiSolarDateGetRataDie() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 3, 
    	day: 8
    });
    assertNotNull(gd);
    
    assertEquals(932531, gd.getRataDie());
}

function testThaiSolarDateGetTimeZone() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
}

function testThaiSolarDateGetTimeZoneDefault() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 3, 
    	day: 8
    });
    assertNotNull(gd);
    
    assertUndefined(gd.getTimeZone());
}

function testThaiSolarDateGetTimeZoneByLocale() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 3, 
    	day: 8,
    	locale: "de-DE"
    });
    assertNotNull(gd);
    
    assertEquals("Europe/Berlin", gd.getTimeZone());
}

function testThaiSolarDateGetTimeZoneByLocaleBogus() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 3, 
    	day: 8,
    	locale: "zz-ZZ"
    });
    assertNotNull(gd);
    
    assertEquals("Etc/UTC", gd.getTimeZone());
}

function testThaiSolarDateCurrentTimeWithTimeZone() {
    var gd = new ilib.Date.ThaiSolarDate({
    	timezone: "America/Los_Angeles"
    });
    var d = new Date();
    assertNotNull(gd);
    
    assertRoughlyEquals(d.getTime()-d.getTimezoneOffset()*60000, gd.getTime(), 30);
}

function testThaiSolarDateSetTimeZone() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
    
    gd.setTimeZone("Asia/Tokyo");
    
    assertEquals("Asia/Tokyo", gd.getTimeZone());
}

function testThaiSolarDateSetTimeZoneNotString() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
    
    gd.setTimeZone(345);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
}

function testThaiSolarDateSetTimeZoneUndefined() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());

    // clears it out
    gd.setTimeZone(undefined);
    
    assertUndefined(gd.getTimeZone());
}

function testThaiSolarDateSetTimeZoneEmpty() {
    var gd = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
    
    // clears it out
    gd.setTimeZone("");
    
    assertUndefined(gd.getTimeZone());
}

function testThaiSolarDateInitWithUnixTimeRightTimeZone() {
    var gd = new ilib.Date.ThaiSolarDate({
    	unixtime: 0
    });
    assertNotNull(gd);
    
    assertEquals("Etc/UTC", gd.getTimeZone());
}

function testThaiSolarDateInitWithJDRightTimeZone() {
    var gd = new ilib.Date.ThaiSolarDate({
    	julianday: 0
    });
    assertNotNull(gd);
    
    assertEquals("Etc/UTC", gd.getTimeZone());
}

function testThaiSolarDateInitWithRDRightTimeZone() {
    var gd = new ilib.Date.ThaiSolarDate({
    	rd: 0
    });
    assertNotNull(gd);
    
    assertEquals("Etc/UTC", gd.getTimeZone());
}
