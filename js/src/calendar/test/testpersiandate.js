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

function testPersDateConstructor() {
	var gd = new ilib.Date.PersDate();
	
	assertNotNull(gd);
}

/* julian date is rd 366 + epoch */
function testPersDateConstructorFromJD() {
    var gd = new ilib.Date.PersDate({julianday: 1721790.75});
    
    assertEquals('object', typeof(gd));
    assertEquals(2, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(6, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateAfterLeapYear() {
    var gd = new ilib.Date.PersDate({julianday: 1723071.9});  // jul 5, 05, 9:36am
    
    assertEquals('object', typeof(gd));
    assertEquals(5, gd.getYears());
    assertEquals(7, gd.getMonths());
    assertEquals(5, gd.getDays());
    assertEquals(9, gd.getHours());
    assertEquals(36, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateJan31Midnight() {
    var gd = new ilib.Date.PersDate({rd: 734533});  // Jan 31, 2012 12:00am
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateJan31Noon() {
    var gd = new ilib.Date.PersDate({rd: 734533.5});  // Jan 31, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateFeb1() {
    var gd = new ilib.Date.PersDate({rd: 734534.5});  // Feb 1, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(2, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateFeb28LeapYear() {
    var gd = new ilib.Date.PersDate({rd: 734561.5});  // Feb 28, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(2, gd.getMonths());
    assertEquals(28, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateFeb29LeapYear() {
    var gd = new ilib.Date.PersDate({rd: 734562.5});  // Feb 29, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(2, gd.getMonths());
    assertEquals(29, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateMar1LeapYear() {
    var gd = new ilib.Date.PersDate({rd: 734563.5});  // Mar 1, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(3, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateMar31LeapYear() {
    var gd = new ilib.Date.PersDate({rd: 734593.5});  // Mar 31, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(3, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateApr1LeapYear() {
    var gd = new ilib.Date.PersDate({rd: 734594.5});  // Apr 1, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(4, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateDec31LeapYear() {
    var gd = new ilib.Date.PersDate({rd: 734868.5});  // Dec 31, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateJan1NonLeapYear() {
    var gd = new ilib.Date.PersDate({rd: 734869.5});  // Jan 1, 2013 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2013, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateFeb28NonLeapYear() {
    var gd = new ilib.Date.PersDate({rd: 734927.5});  // Feb 28, 2013 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2013, gd.getYears());
    assertEquals(2, gd.getMonths());
    assertEquals(28, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateMar1NonLeapYear() {
    var gd = new ilib.Date.PersDate({rd: 734928.5});  // Mar 1, 2013 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2013, gd.getYears());
    assertEquals(3, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateMar31NonLeapYear() {
    var gd = new ilib.Date.PersDate({rd: 734958.5});  // Mar 31, 2013 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2013, gd.getYears());
    assertEquals(3, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateApr1NonLeapYear() {
    var gd = new ilib.Date.PersDate({rd: 734959.5});  // Apr 1, 2013 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2013, gd.getYears());
    assertEquals(4, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateAfterCentury() {
    var gd = new ilib.Date.PersDate({julianday: 1758231.8}); // Oct 10, 101, 7:12am
    
    assertEquals('object', typeof(gd));
    assertEquals(101, gd.getYears());
    assertEquals(10, gd.getMonths());
    assertEquals(10, gd.getDays());
    assertEquals(7, gd.getHours());
    assertEquals(12, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateAfterQuadCentury() {
    var gd = new ilib.Date.PersDate({julianday: 1867706.833333333333}); // Jul 4, 401, 8:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(401, gd.getYears());
    assertEquals(7, gd.getMonths());
    assertEquals(4, gd.getDays());
    assertEquals(8, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateEndOfYear() {
    var gd = new ilib.Date.PersDate({julianday: 2455196.5});
    
    assertEquals('object', typeof(gd));
    assertEquals(2009, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateBeginningOfYear() {
    var gd = new ilib.Date.PersDate({julianday: 2455197.5});
    
    assertEquals('object', typeof(gd));
    assertEquals(2010, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateEndOfYearLeapYear() {
    var gd = new ilib.Date.PersDate({julianday: 2454831.5});
    
    assertEquals('object', typeof(gd));
    assertEquals(2008, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateBeginningOfYearAfterLeapYear() {
    var gd = new ilib.Date.PersDate({julianday: 2454832.5});
    
    assertEquals('object', typeof(gd));
    assertEquals(2009, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateEndOfYear0RJd() {
    var gd = new ilib.Date.PersDate({julianday: 1721424.5});
    
    assertEquals('object', typeof(gd));
    assertEquals(0, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateEndOfYear0Rd() {
    var gd = new ilib.Date.PersDate({rd: 0});
    
    assertEquals('object', typeof(gd));
    assertEquals(0, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateBeginningOfYearRd() {
    var gd = new ilib.Date.PersDate({rd: 1});
    
    assertEquals('object', typeof(gd));
    assertEquals(1, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateAlmostEndOfYearRd() {
    var gd = new ilib.Date.PersDate({rd: 364});
    
    assertEquals('object', typeof(gd));
    assertEquals(1, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(30, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateEndOfYearRd() {
    var gd = new ilib.Date.PersDate({rd: 365});
    
    assertEquals('object', typeof(gd));
    assertEquals(1, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testPersDateBeginningOfYear2Rd() {
    var gd = new ilib.Date.PersDate({rd: 366});
    
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
    [1507231.5, -586,  7,     24,  0,    0,      0,      0,           0],
    [1660037.5, -168,  12,    5,   0,    0,      0,      0,           3],
    [1746893.5, 70,    9,     24,  0,    0,      0,      0,           3],
    [1770641.5, 135,   10,    2,   0,    0,      0,      0,           0],
    [1892731.5, 470,   1,     8,   0,    0,      0,      0,           3],
    [1931579.5, 576,   5,     20,  0,    0,      0,      0,           1],
    [1974851.5, 694,   11,    10,  0,    0,      0,      0,           6],
    [2091164.5, 1013,  4,     25,  0,    0,      0,      0,           0],
    [2121509.5, 1096,  5,     24,  0,    0,      0,      0,           0],
    [2155779.5, 1190,  3,     23,  0,    0,      0,      0,           5],
    [2174029.5, 1240,  3,     10,  0,    0,      0,      0,           6],
    [2191584.5, 1288,  4,     2,   0,    0,      0,      0,           5],
    [2195261.5, 1298,  4,     27,  0,    0,      0,      0,           0],
    [2229274.5, 1391,  6,     12,  0,    0,      0,      0,           0],
    [2245580.5, 1436,  2,     3,   0,    0,      0,      0,           3],
    [2266100.5, 1492,  4,     9,   0,    0,      0,      0,           6],
    [2288542.5, 1553,  9,     19,  0,    0,      0,      0,           6],
    [2290901.5, 1560,  3,     5,   0,    0,      0,      0,           6],
    [2323140.5, 1648,  6,     10,  0,    0,      0,      0,           3],
    [2334848.5, 1680,  6,     30,  0,    0,      0,      0,           0],
    [2348020.5, 1716,  7,     24,  0,    0,      0,      0,           5],
    [2366978.5, 1768,  6,     19,  0,    0,      0,      0,           0],
    [2385648.5, 1819,  8,     2,   0,    0,      0,      0,           1],
    [2392825.5, 1839,  3,     27,  0,    0,      0,      0,           3],
    [2416223.5, 1903,  4,     19,  0,    0,      0,      0,           0],
    [2425848.5, 1929,  8,     25,  0,    0,      0,      0,           0],
    [2430266.5, 1941,  9,     29,  0,    0,      0,      0,           1],
    [2430833.5, 1943,  4,     19,  0,    0,      0,      0,           1],
    [2431004.5, 1943,  10,    7,   0,    0,      0,      0,           4],
    [2448698.5, 1992,  3,     17,  0,    0,      0,      0,           2],
    [2450138.5, 1996,  2,     25,  0,    0,      0,      0,           0],
    [2465737.5, 2038,  11,    10,  0,    0,      0,      0,           3],
    [2486076.5, 2094,  7,     18,  0,    0,      0,      0,           0]
];

function testPersDateConvert() {
    var gd;
    
    for (var i = 0; i < testDates.length; i++) {
        gd = new ilib.Date.PersDate({julianday: testDates[i][0]});
    
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

function testPersDateConstructorFull() {
	var gd = new ilib.Date.PersDate({
		year: 2011, 
		month: 9, 
		day: 23, 
		hour: 16, 
		minute: 7, 
		second: 12, 
		millisecond: 123
	});
	
	assertNotNull(gd);
	
	assertEquals(2011, gd.getYears());
	assertEquals(9, gd.getMonths());
	assertEquals(23, gd.getDays());
	assertEquals(16, gd.getHours());
	assertEquals(7, gd.getMinutes());
	assertEquals(12, gd.getSeconds());
	assertEquals(123, gd.getMilliseconds());
}

function testPersDateConstructorFullWithStrings() {
	// often you get strings from a UI element instead of numbers... 
	// this constructor should work with numbers or strings
	var gd = new ilib.Date.PersDate({
		year: "2011", 
		month: "9",
		day: "23", 
		hour: "16", 
		minute: "7", 
		second: "12", 
		millisecond: "123"
	});
	
	assertNotNull(gd);
	
	assertEquals(2011, gd.getYears());
	assertEquals(9, gd.getMonths());
	assertEquals(23, gd.getDays());
	assertEquals(16, gd.getHours());
	assertEquals(7, gd.getMinutes());
	assertEquals(12, gd.getSeconds());
	assertEquals(123, gd.getMilliseconds());
}

function testPersDateConstructorCopy() {
    var gd2 = new ilib.Date.PersDate({
        year: 2011, 
        month: 9, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123
    });
    var gd = new ilib.Date.PersDate(gd2);
    
    assertNotNull(gd);
    
    assertEquals(2011, gd.getYears());
    assertEquals(9, gd.getMonths());
    assertEquals(23, gd.getDays());
    assertEquals(16, gd.getHours());
    assertEquals(7, gd.getMinutes());
    assertEquals(12, gd.getSeconds());
    assertEquals(123, gd.getMilliseconds());
}

function testPersDateConstructorEmpty() {
    var gd = new ilib.Date.PersDate();
    var now = new Date(gd.getTime()); // compare against the JS date
    assertNotNull(gd);
    
    assertEquals("year", now.getUTCFullYear(), gd.getYears());
    assertEquals("month", now.getUTCMonth()+1, gd.getMonths()); // js date months are 0-11 instead of 1-12 like persian dates
    assertEquals("day", now.getUTCDate(), gd.getDays());
    assertEquals("hour", now.getUTCHours(), gd.getHours());
    assertEquals("minute", now.getUTCMinutes(), gd.getMinutes());
    assertEquals("second", now.getUTCSeconds(), gd.getSeconds());
    assertEquals("millisecond", now.getUTCMilliseconds(), gd.getMilliseconds());
}

function testPersDateConstructorUnixTime() {
    var gd = new ilib.Date.PersDate({
    	unixtime: 61000
    });
    assertNotNull(gd);
    
    assertEquals("year", 1970, gd.getYears());
    assertEquals("month", 1, gd.getMonths());
    assertEquals("day", 1, gd.getDays());
    assertEquals("hour", 0, gd.getHours());
    assertEquals("minute", 1, gd.getMinutes());
    assertEquals("second", 1, gd.getSeconds());
    assertEquals("millisecond", 0, gd.getMilliseconds());
}

function testPersDateGetJulianDay() {
    var gd;
    
    for (var i = 0; i < testDates.length; i++) {
        gd = new ilib.Date.PersDate({
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

function testPersDateSetYears() {
	var gd = new ilib.Date.PersDate();
	
	assertNotNull(gd);
	
	gd.setYears(123);
	
	assertEquals(123, gd.getYears());
}

function testPersDateSetMonths() {
	var gd = new ilib.Date.PersDate();
	
	assertNotNull(gd);
	
	gd.setMonths(7);
	
	assertEquals(7, gd.getMonths());
}

function testPersDateSetDays() {
	var gd = new ilib.Date.PersDate();
	
	assertNotNull(gd);
	
	gd.setDays(12);
	
	assertEquals(12, gd.getDays());
}

function testPersDateSetHours() {
	var gd = new ilib.Date.PersDate();
	
	assertNotNull(gd);
	
	gd.setHours(12);
	
	assertEquals(12, gd.getHours());
}

function testPersDateSetMinutes() {
	var gd = new ilib.Date.PersDate();
	
	assertNotNull(gd);
	
	gd.setMinutes(13);
	
	assertEquals(13, gd.getMinutes());
}

function testPersDateSetSeconds() {
	var gd = new ilib.Date.PersDate();
	
	assertNotNull(gd);
	
	gd.setSeconds(23);
	
	assertEquals(23, gd.getSeconds());
}

function testPersDateSetMilliseconds() {
	var gd = new ilib.Date.PersDate();
	
	assertNotNull(gd);
	
	gd.setMilliseconds(123);
	
	assertEquals(123, gd.getMilliseconds());
}

function testGetDayOfWeek1() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 9, 
    	day: 30
    });
    
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek());
}

function testGetDayOfWeekWithTime() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
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
    var gd = new ilib.Date.PersDate({
    	year: 1648, 
    	month: 6, 
    	day: 10
    });
    
    assertNotNull(gd);
    
    assertEquals(3, gd.getDayOfWeek());
}

function testGetDayOfWeek3() {
    var gd = new ilib.Date.PersDate({
    	year: 1190, 
    	month: 3, 
    	day: 23
    });
    
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek());
}

function testGetDayOfWeek4() {
    var gd = new ilib.Date.PersDate({
    	year: -586, 
    	month: 7, 
    	day: 24
    });
    
    assertNotNull(gd);
    
    assertEquals(0, gd.getDayOfWeek());
}

function testPersDateTestGetTimeZero() {
    var gd = new ilib.Date.PersDate({
    	year: 1970, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(0, gd.getTime());
}

function testPersDateTestGetTime() {
    var gd = new ilib.Date.PersDate({
    	year: 1970, 
    	month: 1, 
    	day: 3,
	   	hour: 8,
	   	minute: 30
    });
    assertNotNull(gd);
    
    assertEquals(203400000, gd.getTime());
}

function testPersDateTestGetTimeTooEarly() {
    var gd = new ilib.Date.PersDate({
    	year: 1969, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(-1, gd.getTime());
}

function testPersDateTestGetTimeTooLate() {
    var gd = new ilib.Date.PersDate({
    	year: 2038, 
    	month: 1, 
    	day: 20
    });
    assertNotNull(gd);
    
    assertEquals(-1, gd.getTime());
}

function testPersDateTestSetTime1() {
    var gd = new ilib.Date.PersDate({
    	year: 1970, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    assertEquals(0, gd.getTime());
    
    // set to Jan 4, 1970 at 8:30:03
    gd.setTime(86400000*3 + 3600000*8 + 60000*30 + 3000);
    
    assertEquals(1970, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(4, gd.getDays());
    assertEquals(8, gd.getHours());
    assertEquals(30, gd.getMinutes());
    assertEquals(3, gd.getSeconds());
}

function testPersDateTestSetTimeZero() {
    var gd = new ilib.Date.PersDate({
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
    
    assertEquals(1970, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
}

// test some of the helper functions to make sure they are producing the right thing
function testPersDateOnOrBeforeSun() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    // Sunday on or before is 5 days before 
    assertEquals(rd-5, gd.onOrBeforeRd(rd, 0));
}

function testPersDateOnOrBeforeMon() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-4, gd.onOrBeforeRd(rd, 1));
}

function testPersDateOnOrBeforeTue() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-3, gd.onOrBeforeRd(rd, 2));
}

function testPersDateOnOrBeforeWed() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-2, gd.onOrBeforeRd(rd, 3));
}

function testPersDateOnOrBeforeThu() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-1, gd.onOrBeforeRd(rd, 4));
}

function testPersDateOnOrBeforeFri() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd, gd.onOrBeforeRd(rd, 5));
}

function testPersDateOnOrBeforeSat() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-6, gd.onOrBeforeRd(rd, 6));
}

function testPersDateOnOrBeforeSunWithTime() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
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

function testPersDateOnOrAfterSun() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    // Sunday on or before is 5 days before 
    assertEquals(rd+2, gd.onOrAfterRd(rd, 0));
}

function testPersDateOnOrAfterSunDate() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.onOrBefore(0);
    
    // Sunday on or before is 5 days before
    assertEquals(2009, date.year);
    assertEquals(12, date.month);
    assertEquals(27, date.day);
}

function testPersDateOnOrAfterMon() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+3, gd.onOrAfterRd(rd, 1));
}

function testPersDateOnOrAfterMonDate() {
    var gd = new ilib.Date.PersDate({
    	year: 2010,
    	month: 1,
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.onOrAfter(1);
    
    assertEquals(2010, date.year);
    assertEquals(1, date.month);
    assertEquals(4, date.day);
}

function testPersDateOnOrAfterTue() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+4, gd.onOrAfterRd(rd, 2));
}

function testPersDateOnOrAfterWed() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+5, gd.onOrAfterRd(rd, 3));
}

function testPersDateOnOrAfterThu() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+6, gd.onOrAfterRd(rd, 4));
}

function testPersDateOnOrAfterThuDate() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.onOrAfter(4);
    
    assertEquals(2010, date.year);
    assertEquals(1, date.month);
    assertEquals(7, date.day);
}

function testPersDateOnOrAfterFri() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd, gd.onOrAfterRd(rd, 5));
}

function testPersDateOnOrAfterFriDate() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.onOrAfter(5);
    
    assertEquals(2010, date.year);
    assertEquals(1, date.month);
    assertEquals(1, date.day);
}

function testPersDateOnOrAfterSat() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+1, gd.onOrAfterRd(rd, 6));
}

function testPersDateBeforeSun() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    // Sunday before is 5 days before 
    assertEquals(rd-5, gd.beforeRd(rd, 0));
}

function testPersDateBeforeSunDate() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.before(0);
    
    // Sunday before is 5 days before 
    assertEquals(2009, date.year);
    assertEquals(12, date.month);
    assertEquals(27, date.day);
}

function testPersDateBeforeMon() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-4, gd.beforeRd(rd, 1));
}

function testPersDateBeforeTue() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-3, gd.beforeRd(rd, 2));
}

function testPersDateBeforeWed() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-2, gd.beforeRd(rd, 3));
}

function testPersDateBeforeThu() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-1, gd.beforeRd(rd, 4));
}

function testPersDateBeforeThuDate() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.before(4);
    
    // Thursday before is 1 day before 
    assertEquals(2009, date.year);
    assertEquals(12, date.month);
    assertEquals(31, date.day);
}

function testPersDateBeforeFri() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-7, gd.beforeRd(rd, 5));
}

function testPersDateBeforeFriDate() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.before(5);
    
    // Friday before is 7 days before the current Friday
    assertEquals(2009, date.year);
    assertEquals(12, date.month);
    assertEquals(25, date.day);
}

function testPersDateBeforeSat() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-6, gd.beforeRd(rd, 6));
}

function testPersDateAfterSun() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    // Sunday after is 2 days after 
    assertEquals(rd+2, gd.afterRd(rd, 0));
}

function testPersDateAfterSunDate() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.after(0);
    
    // Sunday after is 2 days after 
    assertEquals(2010, date.year);
    assertEquals(1, date.month);
    assertEquals(3, date.day);
}

function testPersDateAfterMon() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+3, gd.afterRd(rd, 1));
}

function testPersDateAfterTue() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+4, gd.afterRd(rd, 2));
}

function testPersDateAfterWed() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+5, gd.afterRd(rd, 3));
}

function testPersDateAfterThu() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+6, gd.afterRd(rd, 4));
}

function testPersDateAfterFri() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+7, gd.afterRd(rd, 5));
}

function testPersDateAfterFriDate() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.after(5);
    
    // Friday after is 7 days after 
    assertEquals(2010, date.year);
    assertEquals(1, date.month);
    assertEquals(8, date.day);
}

function testPersDateAfterSat() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+1, gd.afterRd(rd, 6));
}

function testPersDateAfterSatDate() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var date = gd.after(6);
    
    // Sat after is 1 day after 
    assertEquals(2010, date.year);
    assertEquals(1, date.month);
    assertEquals(2, date.day);
}

function testPersDateTestGetWeekOfYearThisYear() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 1, 
    	day: 7
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearThisYear2() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 1, 
    	day: 25
    });
    assertNotNull(gd);
    
    assertEquals(4, gd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearThisYear3() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 10, 
    	day: 19
    });
    assertNotNull(gd);
    
    assertEquals(42, gd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearThisYearWithTime() {
    var gd = new ilib.Date.PersDate({
    	year: -2011, 
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

function testPersDateTestGetWeekOfYearPreviousYear() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(52, gd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearLastWeekLeap() {
    var gd = new ilib.Date.PersDate({
    	year: 2009, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(53, gd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearLastWeekRegular1() {
    var gd = new ilib.Date.PersDate({
    	year: 2010, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(52, gd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearLastWeekRegular2() {
    var gd = new ilib.Date.PersDate({
    	year: 2008, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearLastWeekRegular3() {
    var gd = new ilib.Date.PersDate({
    	year: 2007, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearLastWeekRegular4() {
    var gd = new ilib.Date.PersDate({
    	year: 2006, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearLastWeekRegular5() {
    var gd = new ilib.Date.PersDate({
    	year: 2005, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(52, gd.getWeekOfYear());
}

function testPersDateTestGetWeekOfYearLastWeekRegular6() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(52, gd.getWeekOfYear());
}

function testPersDateGetDayOfYearFirstDay() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getDayOfYear());
}

function testPersDateGetDayOfYearPaddysDay() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 3, 
    	day: 17
    });
    assertNotNull(gd);
    
    assertEquals(76, gd.getDayOfYear());
}

function testPersDateGetDayOfYearPaddysDayLeapYear() {
    var gd = new ilib.Date.PersDate({
    	year: 2008, 
    	month: 3, 
    	day: 17
    });
    assertNotNull(gd);
    
    assertEquals(77, gd.getDayOfYear());
}

function testPersDateGetDayOfYearLastDay() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(365, gd.getDayOfYear());
}

function testPersDateGetDayOfYearLastDayLeapYear() {
    var gd = new ilib.Date.PersDate({
    	year: 2008, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(366, gd.getDayOfYear());
}

function testPersDateGetWeekOfMonth0() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 10, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(0, gd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth1() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 10, 
    	day: 2
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth2() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 10, 
    	day: 11
    });
    assertNotNull(gd);
    
    assertEquals(2, gd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth3() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 10, 
    	day: 20
    });
    assertNotNull(gd);
    
    assertEquals(3, gd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth4() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 10, 
    	day: 29
    });
    assertNotNull(gd);
    
    assertEquals(4, gd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth5() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 10, 
    	day: 30
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth6() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 9, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(0, gd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth7() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 8, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth8() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 7, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(0, gd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonth9() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 6, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonthUS() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 5, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfMonth("en-US"));
}

function testPersDateGetWeekOfMonthDE() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 5, 
    	day: 1
    });
    assertNotNull(gd);
    
    // weeks in Germany start on Monday, and May 1st is a Sunday, so it is at the 
    // end of the preceding week.
    assertEquals(0, gd.getWeekOfMonth("de-DE"));
}

function testPersDateGetEraCE() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 5, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getEra());
}

function testPersDateGetEraBCE() {
    var gd = new ilib.Date.PersDate({
    	year: -46, 
    	month: 5, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(-1, gd.getEra());
}

function testPersDateGetEraCEYear1() {
    var gd = new ilib.Date.PersDate({
    	year: 1, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getEra());
}

function testPersDateGetEraCEYear0() {
    var gd = new ilib.Date.PersDate({
    	year: 0, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(-1, gd.getEra());
}

function testPersDateJan1Midnight() {
    var gd = new ilib.Date.PersDate({julianday: 2455197.5});
    assertNotNull(gd);
    
    assertEquals(2010, gd.year);
    assertEquals(1, gd.month);
    assertEquals(1, gd.day);
    assertEquals(0, gd.hour);
    assertEquals(0, gd.minute);
    assertEquals(0, gd.second);
    assertEquals(0, gd.millisecond);
}

function testPersDateGetRataDie() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 3, 
    	day: 8
    });
    assertNotNull(gd);
    
    assertEquals(734204, gd.getRataDie());
}

function testPersDateGetTimeZone() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
}

function testPersDateGetTimeZoneDefault() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 3, 
    	day: 8
    });
    assertNotNull(gd);
    
    assertEquals("local", gd.getTimeZone());
}

function testPersDateGetTimeZoneByLocale() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	locale: "de-DE"
    });
    assertNotNull(gd);
    
    assertEquals("Europe/Berlin", gd.getTimeZone());
}

function testPersDateGetTimeZoneByLocaleBogus() {
    var gd = new ilib.Date.PersDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	locale: "zz-ZZ"
    });
    assertNotNull(gd);
    
    assertEquals("Etc/UTC", gd.getTimeZone());
}

function testPersDateCurrentTimeWithTimeZone() {
    var gd = new ilib.Date.PersDate({
    	timezone: "America/Los_Angeles"
    });
    var d = new Date();
    assertNotNull(gd);
    
    assertRoughlyEquals(d.getTime()-d.getTimezoneOffset()*60000, gd.getTime(), 30);
}

function testPersDateSetTimeZone() {
    var gd = new ilib.Date.PersDate({
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

function testPersDateSetTimeZoneNotString() {
    var gd = new ilib.Date.PersDate({
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

function testPersDateSetTimeZoneUndefined() {
    var gd = new ilib.Date.PersDate({
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

function testPersDateSetTimeZoneEmpty() {
    var gd = new ilib.Date.PersDate({
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

function testPersDateInitWithUnixTimeRightTimeZone() {
    var gd = new ilib.Date.PersDate({
    	unixtime: 0
    });
    assertNotNull(gd);
    
    assertEquals("local", gd.getTimeZone());
}

function testPersDateInitWithJDRightTimeZone() {
    var gd = new ilib.Date.PersDate({
    	julianday: 0
    });
    assertNotNull(gd);
    
    assertEquals("Etc/UTC", gd.getTimeZone());
}

function testPersDateInitWithRDRightTimeZone() {
    var gd = new ilib.Date.PersDate({
    	rd: 0
    });
    assertNotNull(gd);
    
    assertEquals("local", gd.getTimeZone());
}

// for GF-33596
function testPersDateGetTimeWithUnixTime() {
	var d = new Date(2011, 2, 8, 0, 0, 0, 0);
    var gd = new ilib.Date.PersDate({
    	year: 2011,
    	month: 3, 
    	day: 8,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    assertNotNull(gd);
    
    assertEquals(d.getTime(), gd.getTime());
}

function testPersDateGetTimeWithUTC() {
	var utc = Date.UTC(2013, 10, 1);
	var d = new Date(utc);
    var gd = new ilib.Date.PersDate({
    	unixtime: utc
    });
    assertNotNull(gd);
    
    assertEquals(d.getTime(), gd.getTime());
}

function testPersDateGetTimeWithDefaultTime() {
	var d = new Date();
    var gd = new ilib.Date.PersDate();
    
    assertNotNull(gd);
    
    assertRoughlyEquals(d.getTime(), gd.getTime(), 100);
}
