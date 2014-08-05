/*
 * testgregoriandate.js - test the gregorian date object
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

function testGregDateConstructor() {
	var gd = new ilib.Date.GregDate();
	
	assertNotNull(gd);
}

/* julian date is rd 366 + epoch */
function testGregDateConstructorFromJD() {
    var gd = new ilib.Date.GregDate({
    	julianday: 1721790.75,
    	timezone: "Etc/UTC"
    });
    
    assertEquals('object', typeof(gd));
    assertEquals(2, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(6, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateAfterLeapYear() {
    var gd = new ilib.Date.GregDate({julianday: 1723071.9, timezone: "Etc/UTC"});  // jul 5, 05, 9:36am
    
    assertEquals('object', typeof(gd));
    assertEquals(5, gd.getYears());
    assertEquals(7, gd.getMonths());
    assertEquals(5, gd.getDays());
    assertEquals(9, gd.getHours());
    assertEquals(36, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateJan31Midnight() {
    var gd = new ilib.Date.GregDate({rd: 734533, timezone: "Etc/UTC"});  // Jan 31, 2012 12:00am
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateJan31Noon() {
    var gd = new ilib.Date.GregDate({rd: 734533.5, timezone: "Etc/UTC"});  // Jan 31, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateFeb1() {
    var gd = new ilib.Date.GregDate({rd: 734534.5, timezone: "Etc/UTC"});  // Feb 1, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(2, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateFeb28LeapYear() {
    var gd = new ilib.Date.GregDate({rd: 734561.5, timezone: "Etc/UTC"});  // Feb 28, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(2, gd.getMonths());
    assertEquals(28, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateFeb29LeapYear() {
    var gd = new ilib.Date.GregDate({rd: 734562.5, timezone: "Etc/UTC"});  // Feb 29, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(2, gd.getMonths());
    assertEquals(29, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateMar1LeapYear() {
    var gd = new ilib.Date.GregDate({rd: 734563.5, timezone: "Etc/UTC"});  // Mar 1, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(3, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateMar31LeapYear() {
    var gd = new ilib.Date.GregDate({rd: 734593.5, timezone: "Etc/UTC"});  // Mar 31, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(3, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateApr1LeapYear() {
    var gd = new ilib.Date.GregDate({rd: 734594.5, timezone: "Etc/UTC"});  // Apr 1, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(4, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateDec31LeapYear() {
    var gd = new ilib.Date.GregDate({rd: 734868.5, timezone: "Etc/UTC"});  // Dec 31, 2012 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2012, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateJan1NonLeapYear() {
    var gd = new ilib.Date.GregDate({rd: 734869.5, timezone: "Etc/UTC"});  // Jan 1, 2013 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2013, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateFeb28NonLeapYear() {
    var gd = new ilib.Date.GregDate({rd: 734927.5, timezone: "Etc/UTC"});  // Feb 28, 2013 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2013, gd.getYears());
    assertEquals(2, gd.getMonths());
    assertEquals(28, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateMar1NonLeapYear() {
    var gd = new ilib.Date.GregDate({rd: 734928.5, timezone: "Etc/UTC"});  // Mar 1, 2013 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2013, gd.getYears());
    assertEquals(3, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateMar31NonLeapYear() {
    var gd = new ilib.Date.GregDate({rd: 734958.5, timezone: "Etc/UTC"});  // Mar 31, 2013 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2013, gd.getYears());
    assertEquals(3, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateApr1NonLeapYear() {
    var gd = new ilib.Date.GregDate({rd: 734959.5, timezone: "Etc/UTC"});  // Apr 1, 2013 12:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(2013, gd.getYears());
    assertEquals(4, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(12, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateAfterCentury() {
    var gd = new ilib.Date.GregDate({julianday: 1758231.8, timezone: "Etc/UTC"}); // Oct 10, 101, 7:12am
    
    assertEquals('object', typeof(gd));
    assertEquals(101, gd.getYears());
    assertEquals(10, gd.getMonths());
    assertEquals(10, gd.getDays());
    assertEquals(7, gd.getHours());
    assertEquals(12, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateAfterQuadCentury() {
    var gd = new ilib.Date.GregDate({julianday: 1867706.833333333333, timezone: "Etc/UTC"}); // Jul 4, 401, 8:00pm
    
    assertEquals('object', typeof(gd));
    assertEquals(401, gd.getYears());
    assertEquals(7, gd.getMonths());
    assertEquals(4, gd.getDays());
    assertEquals(8, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateEndOfYear() {
    var gd = new ilib.Date.GregDate({julianday: 2455196.5, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(gd));
    assertEquals(2009, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateBeginningOfYear() {
    var gd = new ilib.Date.GregDate({julianday: 2455197.5, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(gd));
    assertEquals(2010, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateEndOfYearLeapYear() {
    var gd = new ilib.Date.GregDate({julianday: 2454831.5, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(gd));
    assertEquals(2008, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateBeginningOfYearAfterLeapYear() {
    var gd = new ilib.Date.GregDate({julianday: 2454832.5, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(gd));
    assertEquals(2009, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateEndOfYear0RJd() {
    var gd = new ilib.Date.GregDate({julianday: 1721424.5, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(gd));
    assertEquals(0, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateEndOfYear0Rd() {
    var gd = new ilib.Date.GregDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(gd));
    assertEquals(0, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateBeginningOfYearRd() {
    var gd = new ilib.Date.GregDate({rd: 1, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(gd));
    assertEquals(1, gd.getYears());
    assertEquals(1, gd.getMonths());
    assertEquals(1, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateAlmostEndOfYearRd() {
    var gd = new ilib.Date.GregDate({rd: 364, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(gd));
    assertEquals(1, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(30, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateEndOfYearRd() {
    var gd = new ilib.Date.GregDate({rd: 365, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(gd));
    assertEquals(1, gd.getYears());
    assertEquals(12, gd.getMonths());
    assertEquals(31, gd.getDays());
    assertEquals(0, gd.getHours());
    assertEquals(0, gd.getMinutes());
    assertEquals(0, gd.getSeconds());
    assertEquals(0, gd.getMilliseconds());
}

function testGregDateBeginningOfYear2Rd() {
    var gd = new ilib.Date.GregDate({rd: 366, timezone: "Etc/UTC"});
    
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

function testGregDateConvert() {
    var gd;
    
    for (var i = 0; i < testDates.length; i++) {
        gd = new ilib.Date.GregDate({julianday: testDates[i][0], timezone: "Etc/UTC"});
    
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

function testGregDateConstructorFull() {
	var gd = new ilib.Date.GregDate({
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

function testGregDateConstructorFullWithStrings() {
	// often you get strings from a UI element instead of numbers... 
	// this constructor should work with numbers or strings
	var gd = new ilib.Date.GregDate({
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

function testGregDateConstructorCopy() {
    var gd2 = new ilib.Date.GregDate({
        year: 2011, 
        month: 9, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123
    });
    var gd = new ilib.Date.GregDate(gd2);
    
    assertNotNull(gd);
    
    assertEquals(2011, gd.getYears());
    assertEquals(9, gd.getMonths());
    assertEquals(23, gd.getDays());
    assertEquals(16, gd.getHours());
    assertEquals(7, gd.getMinutes());
    assertEquals(12, gd.getSeconds());
    assertEquals(123, gd.getMilliseconds());
}

function testGregDateConstructorEmpty() {
    var gd = new ilib.Date.GregDate();
    var now = new Date(gd.getTime()); // compare against the JS date
    assertNotNull(gd);
    
    assertEquals("year", now.getFullYear(), gd.getYears());
    assertEquals("month", now.getMonth()+1, gd.getMonths()); // js date months are 0-11 instead of 1-12 like gregorian dates
    assertEquals("day", now.getDate(), gd.getDays());
    assertEquals("hour", now.getHours(), gd.getHours());
    assertEquals("minute", now.getMinutes(), gd.getMinutes());
    assertEquals("second", now.getSeconds(), gd.getSeconds());
    assertEquals("millisecond", now.getMilliseconds(), gd.getMilliseconds());
}

function testGregDateConstructorUnixTime() {
    var gd = new ilib.Date.GregDate({
    	unixtime: 61000, 
    	timezone: "Etc/UTC"
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

function testGregDateGetJulianDay() {
    var gd;
    
    for (var i = 0; i < testDates.length; i++) {
        gd = new ilib.Date.GregDate({
            year: testDates[i][1], 
            month: testDates[i][2], 
            day: testDates[i][3],
            hour: testDates[i][4],
            minute: testDates[i][5],
            second: testDates[i][6],
            millisecond: testDates[i][7],
            timezone: "Etc/UTC"
        });
    
        info("testing jd=" + testDates[i][0]);
        
        assertEquals('object', typeof(gd));
        assertEquals(testDates[i][0], gd.getJulianDay());
        assertEquals(testDates[i][8], gd.getDayOfWeek());
    }
}

function testGregDateSetYears() {
	var gd = new ilib.Date.GregDate();
	
	assertNotNull(gd);
	
	gd.setYears(123);
	
	assertEquals(123, gd.getYears());
}

function testGregDateSetMonths() {
	var gd = new ilib.Date.GregDate();
	
	assertNotNull(gd);
	
	gd.setMonths(7);
	
	assertEquals(7, gd.getMonths());
}

function testGregDateSetDays() {
	var gd = new ilib.Date.GregDate();
	
	assertNotNull(gd);
	
	gd.setDays(12);
	
	assertEquals(12, gd.getDays());
}

function testGregDateSetHours() {
	var gd = new ilib.Date.GregDate();
	
	assertNotNull(gd);
	
	gd.setHours(12);
	
	assertEquals(12, gd.getHours());
}

function testGregDateSetMinutes() {
	var gd = new ilib.Date.GregDate();
	
	assertNotNull(gd);
	
	gd.setMinutes(13);
	
	assertEquals(13, gd.getMinutes());
}

function testGregDateSetSeconds() {
	var gd = new ilib.Date.GregDate();
	
	assertNotNull(gd);
	
	gd.setSeconds(23);
	
	assertEquals(23, gd.getSeconds());
}

function testGregDateSetMilliseconds() {
	var gd = new ilib.Date.GregDate();
	
	assertNotNull(gd);
	
	gd.setMilliseconds(123);
	
	assertEquals(123, gd.getMilliseconds());
}

function testGetDayOfWeek1() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 9, 
    	day: 30,
    	timezone: "Etc/UTC"
    });
    
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek());
}

function testGetDayOfWeekWithTime() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 9, 
    	day: 30, 
    	hour: 8, 
    	minute: 39, 
    	second: 34,
    	timezone: "Etc/UTC"
    });
    
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek());
}

function testGetDayOfWeek2() {
    var gd = new ilib.Date.GregDate({
    	year: 1648, 
    	month: 6, 
    	day: 10,
    	timezone: "Etc/UTC"
    });
    
    assertNotNull(gd);
    
    assertEquals(3, gd.getDayOfWeek());
}

function testGetDayOfWeek3() {
    var gd = new ilib.Date.GregDate({
    	year: 1190, 
    	month: 3, 
    	day: 23,
    	timezone: "Etc/UTC"
    });
    
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek());
}

function testGetDayOfWeek4() {
    var gd = new ilib.Date.GregDate({
    	year: -586, 
    	month: 7, 
    	day: 24,
    	timezone: "Etc/UTC"
    });
    
    assertNotNull(gd);
    
    assertEquals(0, gd.getDayOfWeek());
}

function testGetDayOfWeekWithTimezoneWestern() {
    var gd = new ilib.Date.GregDate({
    	year: 2014, 
    	month: 4,
    	day: 25,
    	hour: 23,
    	minute: 59,
    	timezone: "America/Los_Angeles"
    });
    
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek());
}

function testGetDayOfWeekWithTimezoneEastern() {
    var gd = new ilib.Date.GregDate({
    	year: 2014, 
    	month: 4,
    	day: 25,
    	timezone: "Asia/Seoul"
    });
    
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek());
}

function testGregDateTestGetTimeZero() {
    var gd = new ilib.Date.GregDate({
    	year: 1970, 
    	month: 1, 
    	day: 1,
    	timezone: "Etc/UTC"
    });
    assertNotNull(gd);
    
    assertEquals(0, gd.getTime());
}

function testGregDateTestGetTimeCalifornia() {
    var gd = new ilib.Date.GregDate({
    	year: 1970, 
    	month: 1, 
    	day: 1,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals(28800000, gd.getTime());
}

function testGregDateTestGetTime() {
    var gd = new ilib.Date.GregDate({
    	year: 1970, 
    	month: 1, 
    	day: 3,
	   	hour: 8,
	   	minute: 30,
	   	timezone: "Etc/UTC"
    });
    assertNotNull(gd);
    
    assertEquals(203400000, gd.getTime());
}

function testGregDateTestGetTimeTooEarly() {
    var gd = new ilib.Date.GregDate({
    	year: 1969, 
    	month: 12, 
    	day: 31,
    	timezone: "Etc/UTC"
    });
    assertNotNull(gd);
    
    assertEquals(-1, gd.getTime());
}

function testGregDateTestGetTimeTooLate() {
    var gd = new ilib.Date.GregDate({
    	year: 2038, 
    	month: 1, 
    	day: 20,
    	timezone: "Etc/UTC"
    });
    assertNotNull(gd);
    
    assertEquals(-1, gd.getTime());
}

function testGregDateTestSetTime1() {
    var gd = new ilib.Date.GregDate({
    	year: 1970, 
    	month: 1, 
    	day: 1,
    	timezone: "Etc/UTC"
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

function testGregDateTestSetTimeZero() {
    var gd = new ilib.Date.GregDate({
    	year: -1, 
    	month: 1,
    	day: 1,
	   	hour: 1,
	   	minute: 1,
	   	second: 1,
	   	millisecond: 1,
    	timezone: "Etc/UTC"
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
function testGregDateOnOrBeforeSun() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    // Sunday on or before is 5 days before 
    assertEquals(rd-5, gd.onOrBefore(0).getRataDie());
}

function testGregDateOnOrBeforeMon() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-4, gd.onOrBefore(1).getRataDie());
}

function testGregDateOnOrBeforeTue() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-3, gd.onOrBefore(2).getRataDie());
}

function testGregDateOnOrBeforeWed() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-2, gd.onOrBefore(3).getRataDie());
}

function testGregDateOnOrBeforeThu() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-1, gd.onOrBefore(4).getRataDie());
}

function testGregDateOnOrBeforeFri() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd, gd.onOrBefore(5).getRataDie());
}

function testGregDateOnOrBeforeSat() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-6, gd.onOrBefore(6).getRataDie());
}

function testGregDateOnOrBeforeSunWithTime() {
    var gd = new ilib.Date.GregDate({
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
    assertEquals(rd-5, gd.onOrBefore(0).getRataDie());
}

function testGregDateOnOrBeforeSunWithTimeZoneWestern1() {
    var gd = new ilib.Date.GregDate({
    	year: 2014, 
    	month: 4,
    	day: 26,
	   	hour: 23,
	   	minute: 59,
	   	timezone: "America/Los_Angeles"
    }); // this is Saturday in Los Angeles, but Sunday in UTC 
    assertNotNull(gd);
    
    assertEquals(6, gd.getDayOfWeek()); // Saturday
    var rd = gd.getRataDie(); // contains fractional time for the 8:00am part
    
    // Sunday on or before is 6 days before 
    // Should give an rd result that also contains the fractional time 
    assertEquals(rd-6, gd.onOrBefore(0).getRataDie());
}

function testGregDateOnOrBeforeSunWithTimeZoneWestern2() {
    var gd = new ilib.Date.GregDate({
    	year: 2014, 
    	month: 4, 
    	day: 27,
	   	hour: 0,
	   	minute: 0,
	   	timezone: "America/Los_Angeles"
    }); // this is Sunday in Los Angeles and in UTC 
    assertNotNull(gd);
    
    assertEquals(0, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie(); // contains fractional time for the 8:00am part
    
    // Sunday on or before is 5 days before 
    // Should give an rd result that also contains the fractional time 
    assertEquals(rd, gd.onOrBefore(0).getRataDie());
}

function testGregDateOnOrBeforeSunWithTimeZoneEastern1() {
    var gd = new ilib.Date.GregDate({
    	year: 2014, 
    	month: 4,
    	day: 27,
	   	hour: 0,
	   	minute: 0,
	   	timezone: "Asia/Seoul"
    }); // this is Saturday in UTC, but Sunday in Seoul
    assertNotNull(gd);
    
    assertEquals(0, gd.getDayOfWeek()); // Sunday
    var rd = gd.getRataDie(); // contains fractional time for the 8:00am part
    
    // Sunday on or before is today 
    // Should give an rd result that also contains the fractional time 
    assertEquals(rd, gd.onOrBefore(0).getRataDie());
}

function testGregDateOnOrBeforeSunWithTimeZoneEastern2() {
    var gd = new ilib.Date.GregDate({
    	year: 2014, 
    	month: 4, 
    	day: 26,
	   	hour: 23,
	   	minute: 59,
	   	timezone: "Asia/Seoul"
    }); // this is Saturday in Seoul and in UTC 
    assertNotNull(gd);
    
    assertEquals(6, gd.getDayOfWeek()); // Saturday
    var rd = gd.getRataDie(); // contains fractional time for the 8:00am part
    
    // Sunday on or before is 6 days before 
    // Should give an rd result that also contains the fractional time 
    assertEquals(rd-6, gd.onOrBefore(0).getRataDie());
}

function testGregDateOnOrAfterSun() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    // Sunday on or before is 5 days before 
    assertEquals(rd+2, gd.onOrAfter(0).getRataDie());
}

function testGregDateOnOrAfterSunDate() {
    var gd = new ilib.Date.GregDate({
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

function testGregDateOnOrAfterMon() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+3, gd.onOrAfter(1).getRataDie());
}

function testGregDateOnOrAfterMonDate() {
    var gd = new ilib.Date.GregDate({
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

function testGregDateOnOrAfterTue() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+4, gd.onOrAfter(2).getRataDie());
}

function testGregDateOnOrAfterWed() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+5, gd.onOrAfter(3).getRataDie());
}

function testGregDateOnOrAfterThu() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+6, gd.onOrAfter(4).getRataDie());
}

function testGregDateOnOrAfterThuDate() {
    var gd = new ilib.Date.GregDate({
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

function testGregDateOnOrAfterFri() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd, gd.onOrAfter(5).getRataDie());
}

function testGregDateOnOrAfterFriDate() {
    var gd = new ilib.Date.GregDate({
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

function testGregDateOnOrAfterSat() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+1, gd.onOrAfter(6).getRataDie());
}

function testGregDateBeforeSun() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    // Sunday before is 5 days before 
    assertEquals(rd-5, gd.before(0).getRataDie());
}

function testGregDateBeforeSunDate() {
    var gd = new ilib.Date.GregDate({
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

function testGregDateBeforeMon() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-4, gd.before(1).getRataDie());
}

function testGregDateBeforeTue() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-3, gd.before(2).getRataDie());
}

function testGregDateBeforeWed() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-2, gd.before(3).getRataDie());
}

function testGregDateBeforeThu() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-1, gd.before(4).getRataDie());
}

function testGregDateBeforeThuDate() {
    var gd = new ilib.Date.GregDate({
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

function testGregDateBeforeFri() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-7, gd.before(5).getRataDie());
}

function testGregDateBeforeFriDate() {
    var gd = new ilib.Date.GregDate({
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

function testGregDateBeforeSat() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd-6, gd.before(6).getRataDie());
}

function testGregDateAfterSun() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    // Sunday after is 2 days after 
    assertEquals(rd+2, gd.after(0).getRataDie());
}

function testGregDateAfterSunDate() {
    var gd = new ilib.Date.GregDate({
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

function testGregDateAfterMon() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+3, gd.after(1).getRataDie());
}

function testGregDateAfterTue() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+4, gd.after(2).getRataDie());
}

function testGregDateAfterWed() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+5, gd.after(3).getRataDie());
}

function testGregDateAfterThu() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+6, gd.after(4).getRataDie());
}

function testGregDateAfterFri() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+7, gd.after(5).getRataDie());
}

function testGregDateAfterFriDate() {
    var gd = new ilib.Date.GregDate({
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

function testGregDateAfterSat() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getDayOfWeek()); // Friday
    var rd = gd.getRataDie();
    
    assertEquals(rd+1, gd.after(6).getRataDie());
}

function testGregDateAfterSatDate() {
    var gd = new ilib.Date.GregDate({
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

function testGregDateTestGetWeekOfYearThisYear() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 1, 
    	day: 7
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfYear());
}

function testGregDateTestGetWeekOfYearThisYear2() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 1, 
    	day: 25
    });
    assertNotNull(gd);
    
    assertEquals(4, gd.getWeekOfYear());
}

function testGregDateTestGetWeekOfYearThisYear3() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 10, 
    	day: 19
    });
    assertNotNull(gd);
    
    assertEquals(42, gd.getWeekOfYear());
}

function testGregDateTestGetWeekOfYearThisYearWithTime() {
    var gd = new ilib.Date.GregDate({
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

function testGregDateTestGetWeekOfYearPreviousYear() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(52, gd.getWeekOfYear());
}

function testGregDateTestGetWeekOfYearLastWeekLeap() {
    var gd = new ilib.Date.GregDate({
    	year: 2009, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(53, gd.getWeekOfYear());
}

function testGregDateTestGetWeekOfYearLastWeekRegular1() {
    var gd = new ilib.Date.GregDate({
    	year: 2010, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(52, gd.getWeekOfYear());
}

function testGregDateTestGetWeekOfYearLastWeekRegular2() {
    var gd = new ilib.Date.GregDate({
    	year: 2008, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfYear());
}

function testGregDateTestGetWeekOfYearLastWeekRegular3() {
    var gd = new ilib.Date.GregDate({
    	year: 2007, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfYear());
}

function testGregDateTestGetWeekOfYearLastWeekRegular4() {
    var gd = new ilib.Date.GregDate({
    	year: 2006, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfYear());
}

function testGregDateTestGetWeekOfYearLastWeekRegular5() {
    var gd = new ilib.Date.GregDate({
    	year: 2005, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(52, gd.getWeekOfYear());
}

function testGregDateTestGetWeekOfYearLastWeekRegular6() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(52, gd.getWeekOfYear());
}

function testGregDateGetDayOfYearFirstDay() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getDayOfYear());
}

function testGregDateGetDayOfYearPaddysDay() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 3, 
    	day: 17
    });
    assertNotNull(gd);
    
    assertEquals(76, gd.getDayOfYear());
}

function testGregDateGetDayOfYearPaddysDayLeapYear() {
    var gd = new ilib.Date.GregDate({
    	year: 2008, 
    	month: 3, 
    	day: 17
    });
    assertNotNull(gd);
    
    assertEquals(77, gd.getDayOfYear());
}

function testGregDateGetDayOfYearLastDay() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(365, gd.getDayOfYear());
}

function testGregDateGetDayOfYearLastDayLeapYear() {
    var gd = new ilib.Date.GregDate({
    	year: 2008, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(366, gd.getDayOfYear());
}

function testGregDateGetWeekOfMonth0() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 10, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(0, gd.getWeekOfMonth("en-US"));
}

function testGregDateGetWeekOfMonth1() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 10, 
    	day: 2
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfMonth("en-US"));
}

function testGregDateGetWeekOfMonth2() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 10, 
    	day: 11
    });
    assertNotNull(gd);
    
    assertEquals(2, gd.getWeekOfMonth("en-US"));
}

function testGregDateGetWeekOfMonth3() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 10, 
    	day: 20
    });
    assertNotNull(gd);
    
    assertEquals(3, gd.getWeekOfMonth("en-US"));
}

function testGregDateGetWeekOfMonth4() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 10, 
    	day: 29
    });
    assertNotNull(gd);
    
    assertEquals(4, gd.getWeekOfMonth("en-US"));
}

function testGregDateGetWeekOfMonth5() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 10, 
    	day: 30
    });
    assertNotNull(gd);
    
    assertEquals(5, gd.getWeekOfMonth("en-US"));
}

function testGregDateGetWeekOfMonth6() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 9, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(0, gd.getWeekOfMonth("en-US"));
}

function testGregDateGetWeekOfMonth7() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 8, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfMonth("en-US"));
}

function testGregDateGetWeekOfMonth8() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 7, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(0, gd.getWeekOfMonth("en-US"));
}

function testGregDateGetWeekOfMonth9() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 6, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfMonth("en-US"));
}

function testGregDateGetWeekOfMonthUS() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 5, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getWeekOfMonth("en-US"));
}

function testGregDateGetWeekOfMonthDE() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 5, 
    	day: 1
    });
    assertNotNull(gd);
    
    // weeks in Germany start on Monday, and May 1st is a Sunday, so it is at the 
    // end of the preceding week.
    assertEquals(0, gd.getWeekOfMonth("de-DE"));
}

function testGregDateGetEraCE() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 5, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getEra());
}

function testGregDateGetEraBCE() {
    var gd = new ilib.Date.GregDate({
    	year: -46, 
    	month: 5, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(-1, gd.getEra());
}

function testGregDateGetEraCEYear1() {
    var gd = new ilib.Date.GregDate({
    	year: 1, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(gd);
    
    assertEquals(1, gd.getEra());
}

function testGregDateGetEraCEYear0() {
    var gd = new ilib.Date.GregDate({
    	year: 0, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(gd);
    
    assertEquals(-1, gd.getEra());
}

function testGregDateJan1Midnight() {
    var gd = new ilib.Date.GregDate({
    	julianday: 2455197.5,
    	timezone: "Etc/UTC"
    });
    assertNotNull(gd);
    
    assertEquals(2010, gd.year);
    assertEquals(1, gd.month);
    assertEquals(1, gd.day);
    assertEquals(0, gd.hour);
    assertEquals(0, gd.minute);
    assertEquals(0, gd.second);
    assertEquals(0, gd.millisecond);
}

function testGregDateGetRataDie() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "Etc/UTC"
    });
    assertNotNull(gd);
    
    assertEquals(734204, gd.getRataDie());
}

function testGregDateGetTimeZone() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
}

function testGregDateGetTimeZoneDefault() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 3, 
    	day: 8
    });
    assertNotNull(gd);
    
    assertEquals("local", gd.getTimeZone());
}

function testGregDateGetTimeZoneByLocale() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	locale: "de-DE"
    });
    assertNotNull(gd);
    
    assertEquals("Europe/Berlin", gd.getTimeZone());
}

function testGregDateGetTimeZoneByLocaleBogus() {
    var gd = new ilib.Date.GregDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	locale: "zz-ZZ"
    });
    assertNotNull(gd);
    
    assertEquals("Etc/UTC", gd.getTimeZone());
}

function testGregDateCurrentTimeWithTimeZone() {
    var gd = new ilib.Date.GregDate({
    	timezone: "America/Los_Angeles"
    });
    var d = new Date();
    assertNotNull(gd);
    
    assertRoughlyEquals(d.getTime(), gd.getTime(), 30);
}

function testGregDateSetTimeZone() {
    var gd = new ilib.Date.GregDate({
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

function testGregDateSetTimeZoneNotString() {
    var gd = new ilib.Date.GregDate({
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

function testGregDateSetTimeZoneUndefined() {
    var gd = new ilib.Date.GregDate({
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

function testGregDateSetTimeZoneEmpty() {
    var gd = new ilib.Date.GregDate({
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

function testGregDateInitWithUnixTimeRightTimeZone() {
    var gd = new ilib.Date.GregDate({
    	unixtime: 0
    });
    assertNotNull(gd);
    
    assertEquals("local", gd.getTimeZone());
}

function testGregDateInitWithJDRightTimeZone() {
    var gd = new ilib.Date.GregDate({
    	julianday: 0
    });
    assertNotNull(gd);
    
    assertEquals("local", gd.getTimeZone());
}

function testGregDateInitWithRDRightTimeZone() {
    var gd = new ilib.Date.GregDate({
    	rd: 0
    });
    assertNotNull(gd);
    
    assertEquals("local", gd.getTimeZone());
}

// for GF-33596
function testGregDateGetTimeWithUnixTime() {
	var d = new Date(2011, 2, 8, 0, 0, 0, 0);
    var gd = new ilib.Date.GregDate({
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

function testGregDateGetTimeWithUTC() {
	var utc = Date.UTC(2013, 10, 1);
	var d = new Date(utc);
    var gd = new ilib.Date.GregDate({
    	unixtime: utc
    });
    assertNotNull(gd);
    
    assertEquals(d.getTime(), gd.getTime());
}

function testGregDateGetTimeWithDefaultTime() {
	var d = new Date();
    var gd = new ilib.Date.GregDate();
    
    assertNotNull(gd);
    
    assertRoughlyEquals(d.getTime(), gd.getTime(), 100);
}

function testGregDateRoundTripConstruction() {
    var gd = new ilib.Date.GregDate({
    	year: 2014,
    	month: 11,
    	day: 3,
    	timezone: "local"
    });
    assertNotNull(gd);
    // console.log("gd is " + JSON.stringify(gd, undefined, 4));
    
    var u = gd.getTime();
    // console.log("unixtime is " + u);
    var gd2 = new ilib.Date.GregDate({
    	unixtime: u,
    	timezone: "local"
    });
    // console.log("gd2 is " + JSON.stringify(gd2, undefined, 4));
    assertEquals(gd.getTimeZone(), gd2.getTimeZone());
    assertEquals(gd.getYears(), gd2.getYears());
    assertEquals(gd.getMonths(), gd2.getMonths());
    assertEquals(gd.getDays(), gd2.getDays());
    assertEquals(gd.getHours(), gd2.getHours());
    assertEquals(gd.getMinutes(), gd2.getMinutes());
    assertEquals(gd.getSeconds(), gd2.getSeconds());
}

function testGregDateRoundTripConstruction2() {
    var gd = new ilib.Date.GregDate({
    	year: 2014,
    	month: 11,
    	day: 3,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    // console.log("gd is " + JSON.stringify(gd, undefined, 4));
    
    var u = gd.getTime();
    // console.log("unixtime is " + u);
    var gd2 = new ilib.Date.GregDate({
    	unixtime: u,
    	timezone: "America/Los_Angeles"
    });
    // console.log("gd2 is " + JSON.stringify(gd2, undefined, 4));
    assertEquals(gd.getTimeZone(), gd2.getTimeZone());
    assertEquals(gd.getYears(), gd2.getYears());
    assertEquals(gd.getMonths(), gd2.getMonths());
    assertEquals(gd.getDays(), gd2.getDays());
    assertEquals(gd.getHours(), gd2.getHours());
    assertEquals(gd.getMinutes(), gd2.getMinutes());
    assertEquals(gd.getSeconds(), gd2.getSeconds());
}
