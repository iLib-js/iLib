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
	var td = new ilib.Date.ThaiSolarDate();
	
	assertNotNull(td);
}

function testThaiSolarDateConstructorFromRd() {
    var td = new ilib.Date.ThaiSolarDate({rd: 0});
    
    assertEquals(0, td.getRataDie());
    assertEquals(1523097.5, td.getJulianDay());
}

function testThaiSolarDateConstructorFromRd1() {
    var td = new ilib.Date.ThaiSolarDate({rd: 1});
    
    assertEquals(1, td.getRataDie());
    assertEquals(1523098.5, td.getJulianDay());
}

function testThaiSolarDateConstructorFromRd2() {
    var td = new ilib.Date.ThaiSolarDate({rd: 2});
    
    assertEquals(2, td.getRataDie());
    assertEquals(1523099.5, td.getJulianDay());
}

function testThaiSolarDateConstructorFromJD() {
    var td = new ilib.Date.ThaiSolarDate({julianday: 1523096.5});
    
    assertEquals(-1, td.getRataDie());
    assertEquals(1523096.5, td.getJulianDay());
}

function testThaiSolarDateConstructorFromJD1() {
    var td = new ilib.Date.ThaiSolarDate({julianday: 1523097.5});
    
    assertEquals(0, td.getRataDie());
    assertEquals(1523097.5, td.getJulianDay());
}

function testThaiSolarDateConstructorFromJD2() {
    var td = new ilib.Date.ThaiSolarDate({julianday: 1523098.5});
    
    assertEquals(1, td.getRataDie());
    assertEquals(1523098.5, td.getJulianDay());
}

function testThaiSolarDateConstructorFromRdComplex1() {
	// start of the gregorian calendar
    var td = new ilib.Date.ThaiSolarDate({rd: 198327}); 
    
    assertEquals(198327, td.getRataDie());
}

function testThaiSolarDateConstructorFromRdComplex2() {
	// start of the gregorian calendar
    var td = new ilib.Date.ThaiSolarDate({rd: 198327}); 
    
    assertEquals(1721424.5, td.getJulianDay());
}

function testThaiSolarDateConstructorFromRdComplex3() {
	// start of the gregorian calendar
    var td = new ilib.Date.ThaiSolarDate({rd: 198327, timezone: "Etc/UTC"}); 
    
    assertEquals(543, td.getYears());
    assertEquals(12, td.getMonths());
    assertEquals(31, td.getDays());
    assertEquals(0, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

/* julian date is rd 366 + epoch */
function testThaiSolarDateConstructorFromJDRightRd() {
    var td = new ilib.Date.ThaiSolarDate({julianday: 1721790.75});
    
    assertEquals(366.25 + 198327, td.getRataDie());
}

/* julian date is rd 366 + epoch */
function testThaiSolarDateConstructorFromJDYear2() {
    var td = new ilib.Date.ThaiSolarDate({julianday: 1721790.75, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(td));
    assertEquals(545, td.getYears());
    assertEquals(1, td.getMonths());
    assertEquals(1, td.getDays());
    assertEquals(6, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateAfterLeapYear() {
    var td = new ilib.Date.ThaiSolarDate({julianday: 1723071.9, timezone: "Etc/UTC"});  // jul 5, 05, 9:36am
    
    assertEquals('object', typeof(td));
    assertEquals(548, td.getYears());
    assertEquals(7, td.getMonths());
    assertEquals(5, td.getDays());
    assertEquals(9, td.getHours());
    assertEquals(36, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateJan31Midnight() {
    var td = new ilib.Date.ThaiSolarDate({rd: 932860, timezone: "Etc/UTC"});  // Jan 31, 2555 12:00am
    
    assertEquals('object', typeof(td));
    assertEquals(2555, td.getYears());
    assertEquals(1, td.getMonths());
    assertEquals(31, td.getDays());
    assertEquals(0, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateJan31Noon() {
    var td = new ilib.Date.ThaiSolarDate({rd: 932860.5, timezone: "Etc/UTC"});  // Jan 31, 2555 12:00pm
    
    assertEquals('object', typeof(td));
    assertEquals(2555, td.getYears());
    assertEquals(1, td.getMonths());
    assertEquals(31, td.getDays());
    assertEquals(12, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateFeb1() {
    var td = new ilib.Date.ThaiSolarDate({rd: 932861.5, timezone: "Etc/UTC"});  // Feb 1, 2555 12:00pm
    
    assertEquals('object', typeof(td));
    assertEquals(2555, td.getYears());
    assertEquals(2, td.getMonths());
    assertEquals(1, td.getDays());
    assertEquals(12, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateFeb28LeapYear() {
    var td = new ilib.Date.ThaiSolarDate({rd: 932888.5, timezone: "Etc/UTC"});  // Feb 28, 2555 12:00pm
    
    assertEquals('object', typeof(td));
    assertEquals(2555, td.getYears());
    assertEquals(2, td.getMonths());
    assertEquals(28, td.getDays());
    assertEquals(12, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateFeb29LeapYear() {
    var td = new ilib.Date.ThaiSolarDate({rd: 932889.5, timezone: "Etc/UTC"});  // Feb 29, 2555 12:00pm
    
    assertEquals('object', typeof(td));
    assertEquals(2555, td.getYears());
    assertEquals(2, td.getMonths());
    assertEquals(29, td.getDays());
    assertEquals(12, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateMar1LeapYear() {
    var td = new ilib.Date.ThaiSolarDate({rd: 932890.5, timezone: "Etc/UTC"});  // Mar 1, 2555 12:00pm
    
    assertEquals('object', typeof(td));
    assertEquals(2555, td.getYears());
    assertEquals(3, td.getMonths());
    assertEquals(1, td.getDays());
    assertEquals(12, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateMar31LeapYear() {
    var td = new ilib.Date.ThaiSolarDate({rd: 932920.5, timezone: "Etc/UTC"});  // Mar 31, 2555 12:00pm
    
    assertEquals('object', typeof(td));
    assertEquals(2555, td.getYears());
    assertEquals(3, td.getMonths());
    assertEquals(31, td.getDays());
    assertEquals(12, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateApr1LeapYear() {
    var td = new ilib.Date.ThaiSolarDate({rd: 932921.5, timezone: "Etc/UTC"});  // Apr 1, 2555 12:00pm
    
    assertEquals('object', typeof(td));
    assertEquals(2555, td.getYears());
    assertEquals(4, td.getMonths());
    assertEquals(1, td.getDays());
    assertEquals(12, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateDec31LeapYear() {
    var td = new ilib.Date.ThaiSolarDate({rd: 933195.5, timezone: "Etc/UTC"});  // Dec 31, 2555 12:00pm
    
    assertEquals('object', typeof(td));
    assertEquals(2555, td.getYears());
    assertEquals(12, td.getMonths());
    assertEquals(31, td.getDays());
    assertEquals(12, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateJan1NonLeapYear() {
    var td = new ilib.Date.ThaiSolarDate({rd: 933196.5, timezone: "Etc/UTC"});  // Jan 1, 2556 12:00pm
    
    assertEquals('object', typeof(td));
    assertEquals(2556, td.getYears());
    assertEquals(1, td.getMonths());
    assertEquals(1, td.getDays());
    assertEquals(12, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateFeb28NonLeapYear() {
    var td = new ilib.Date.ThaiSolarDate({rd: 933254.5, timezone: "Etc/UTC"});  // Feb 28, 2556 12:00pm
    
    assertEquals('object', typeof(td));
    assertEquals(2556, td.getYears());
    assertEquals(2, td.getMonths());
    assertEquals(28, td.getDays());
    assertEquals(12, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateMar1NonLeapYear() {
    var td = new ilib.Date.ThaiSolarDate({rd: 933255.5, timezone: "Etc/UTC"});  // Mar 1, 2556 12:00pm
    
    assertEquals('object', typeof(td));
    assertEquals(2556, td.getYears());
    assertEquals(3, td.getMonths());
    assertEquals(1, td.getDays());
    assertEquals(12, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateMar31NonLeapYear() {
    var td = new ilib.Date.ThaiSolarDate({rd: 933285.5, timezone: "Etc/UTC"});  // Mar 31, 2556 12:00pm
    
    assertEquals('object', typeof(td));
    assertEquals(2556, td.getYears());
    assertEquals(3, td.getMonths());
    assertEquals(31, td.getDays());
    assertEquals(12, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateApr1NonLeapYear() {
    var td = new ilib.Date.ThaiSolarDate({rd: 933286.5, timezone: "Etc/UTC"});  // Apr 1, 2556 12:00pm
    
    assertEquals('object', typeof(td));
    assertEquals(2556, td.getYears());
    assertEquals(4, td.getMonths());
    assertEquals(1, td.getDays());
    assertEquals(12, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateAfterCentury() {
    var td = new ilib.Date.ThaiSolarDate({julianday: 1758231.8, timezone: "Etc/UTC"}); // Oct 10, 101, 7:12am
    
    assertEquals('object', typeof(td));
    assertEquals(644, td.getYears());
    assertEquals(10, td.getMonths());
    assertEquals(10, td.getDays());
    assertEquals(7, td.getHours());
    assertEquals(12, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateAfterQuadCentury() {
    var td = new ilib.Date.ThaiSolarDate({julianday: 1867706.833333333333, timezone: "Etc/UTC"}); // Jul 4, 401, 8:00pm
    
    assertEquals('object', typeof(td));
    assertEquals(944, td.getYears());
    assertEquals(7, td.getMonths());
    assertEquals(4, td.getDays());
    assertEquals(8, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateEndOfYear() {
    var td = new ilib.Date.ThaiSolarDate({julianday: 2455196.5, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(td));
    assertEquals(2552, td.getYears());
    assertEquals(12, td.getMonths());
    assertEquals(31, td.getDays());
    assertEquals(0, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateBeginningOfYear() {
    var td = new ilib.Date.ThaiSolarDate({julianday: 2455197.5, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(td));
    assertEquals(2553, td.getYears());
    assertEquals(1, td.getMonths());
    assertEquals(1, td.getDays());
    assertEquals(0, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateEndOfYearLeapYear() {
    var td = new ilib.Date.ThaiSolarDate({julianday: 2454831.5, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(td));
    assertEquals(2551, td.getYears());
    assertEquals(12, td.getMonths());
    assertEquals(31, td.getDays());
    assertEquals(0, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateBeginningOfYearAfterLeapYear() {
    var td = new ilib.Date.ThaiSolarDate({julianday: 2454832.5, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(td));
    assertEquals(2552, td.getYears());
    assertEquals(1, td.getMonths());
    assertEquals(1, td.getDays());
    assertEquals(0, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateEndOfYear0Rd() {
    var td = new ilib.Date.ThaiSolarDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(td));
    assertEquals(0, td.getYears());
    assertEquals(12, td.getMonths());
    assertEquals(31, td.getDays());
    assertEquals(0, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateBeginningOfYearRd() {
    var td = new ilib.Date.ThaiSolarDate({rd: 1, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(td));
    assertEquals(1, td.getYears());
    assertEquals(1, td.getMonths());
    assertEquals(1, td.getDays());
    assertEquals(0, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateAlmostEndOfYearRd() {
    var td = new ilib.Date.ThaiSolarDate({rd: 364, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(td));
    assertEquals(1, td.getYears());
    assertEquals(12, td.getMonths());
    assertEquals(30, td.getDays());
    assertEquals(0, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateEndOfYearRd() {
    var td = new ilib.Date.ThaiSolarDate({rd: 365, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(td));
    assertEquals(1, td.getYears());
    assertEquals(12, td.getMonths());
    assertEquals(31, td.getDays());
    assertEquals(0, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
}

function testThaiSolarDateBeginningOfYear2Rd() {
    var td = new ilib.Date.ThaiSolarDate({rd: 366, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(td));
    assertEquals(2, td.getYears());
    assertEquals(1, td.getMonths());
    assertEquals(1, td.getDays());
    assertEquals(0, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
    assertEquals(0, td.getMilliseconds());
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
    var td;
    
    for (var i = 0; i < testDates.length; i++) {
        td = new ilib.Date.ThaiSolarDate({julianday: testDates[i][0], timezone: "Etc/UTC"});
    
        info("testing jd=" + testDates[i][0]);
        
        assertEquals('object', typeof(td));
        assertEquals(testDates[i][1], td.getYears());
        assertEquals(testDates[i][2], td.getMonths());
        assertEquals(testDates[i][3], td.getDays());
        assertEquals(testDates[i][4], td.getHours());
        assertEquals(testDates[i][5], td.getMinutes());
        assertEquals(testDates[i][6], td.getSeconds());
        assertEquals(testDates[i][7], td.getMilliseconds());
        assertEquals(testDates[i][8], td.getDayOfWeek());
    }
}

function testThaiSolarDateConstructorFull() {
	var td = new ilib.Date.ThaiSolarDate({
		year: 2553, 
		month: 9, 
		day: 23, 
		hour: 16, 
		minute: 7, 
		second: 12, 
		millisecond: 123
	});
	
	assertNotNull(td);
	
	assertEquals(2553, td.getYears());
	assertEquals(9, td.getMonths());
	assertEquals(23, td.getDays());
	assertEquals(16, td.getHours());
	assertEquals(7, td.getMinutes());
	assertEquals(12, td.getSeconds());
	assertEquals(123, td.getMilliseconds());
}

function testThaiSolarDateConstructorFullWithStrings() {
	// often you get strings from a UI element instead of numbers... 
	// this constructor should work with numbers or strings
	var td = new ilib.Date.ThaiSolarDate({
		year: "2553", 
		month: "9",
		day: "23", 
		hour: "16", 
		minute: "7", 
		second: "12", 
		millisecond: "123"
	});
	
	assertNotNull(td);
	
	assertEquals(2553, td.getYears());
	assertEquals(9, td.getMonths());
	assertEquals(23, td.getDays());
	assertEquals(16, td.getHours());
	assertEquals(7, td.getMinutes());
	assertEquals(12, td.getSeconds());
	assertEquals(123, td.getMilliseconds());
}

function testThaiSolarDateConstructorCopy() {
    var td2 = new ilib.Date.ThaiSolarDate({
        year: 2553, 
        month: 9, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123
    });
    var td = new ilib.Date.ThaiSolarDate(td2);
    
    assertNotNull(td);
    
    assertEquals(2553, td.getYears());
    assertEquals(9, td.getMonths());
    assertEquals(23, td.getDays());
    assertEquals(16, td.getHours());
    assertEquals(7, td.getMinutes());
    assertEquals(12, td.getSeconds());
    assertEquals(123, td.getMilliseconds());
}

function testThaiSolarDateConstructorEmpty() {
    var td = new ilib.Date.ThaiSolarDate();
    var now = new Date(td.getTime()); // compare against the JS date
    assertNotNull(td);
    
    assertEquals("year", now.getFullYear()+543, td.getYears());
    assertEquals("month", now.getMonth()+1, td.getMonths()); // js date months are 0-11 instead of 1-12 like gregorian dates
    assertEquals("day", now.getDate(), td.getDays());
    assertEquals("hour", now.getHours(), td.getHours());
    assertEquals("minute", now.getMinutes(), td.getMinutes());
    assertEquals("second", now.getSeconds(), td.getSeconds());
    assertEquals("millisecond", now.getMilliseconds(), td.getMilliseconds());
}

function testThaiSolarDateConstructorUnixTime() {
    var td = new ilib.Date.ThaiSolarDate({
    	unixtime: 61000, 
		timezone: "Etc/UTC"
    });
    assertNotNull(td);
    
    assertEquals("year", 2513, td.getYears());
    assertEquals("month", 1, td.getMonths());
    assertEquals("day", 1, td.getDays());
    assertEquals("hour", 0, td.getHours());
    assertEquals("minute", 1, td.getMinutes());
    assertEquals("second", 1, td.getSeconds());
    assertEquals("millisecond", 0, td.getMilliseconds());
}

function testThaiSolarDateGetJulianDay() {
    var td;
    
    for (var i = 0; i < testDates.length; i++) {
        td = new ilib.Date.ThaiSolarDate({
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
        
        assertEquals('object', typeof(td));
        assertEquals(testDates[i][0], td.getJulianDay());
        assertEquals(testDates[i][8], td.getDayOfWeek());
    }
}

function testThaiSolarDateSetYears() {
	var td = new ilib.Date.ThaiSolarDate();
	
	assertNotNull(td);
	
	td.setYears(123);
	
	assertEquals(123, td.getYears());
}

function testThaiSolarDateSetMonths() {
	var td = new ilib.Date.ThaiSolarDate();
	
	assertNotNull(td);
	
	td.setMonths(7);
	
	assertEquals(7, td.getMonths());
}

function testThaiSolarDateSetDays() {
	var td = new ilib.Date.ThaiSolarDate();
	
	assertNotNull(td);
	
	td.setDays(12);
	
	assertEquals(12, td.getDays());
}

function testThaiSolarDateSetHours() {
	var td = new ilib.Date.ThaiSolarDate();
	
	assertNotNull(td);
	
	td.setHours(12);
	
	assertEquals(12, td.getHours());
}

function testThaiSolarDateSetMinutes() {
	var td = new ilib.Date.ThaiSolarDate();
	
	assertNotNull(td);
	
	td.setMinutes(13);
	
	assertEquals(13, td.getMinutes());
}

function testThaiSolarDateSetSeconds() {
	var td = new ilib.Date.ThaiSolarDate();
	
	assertNotNull(td);
	
	td.setSeconds(23);
	
	assertEquals(23, td.getSeconds());
}

function testThaiSolarDateSetMilliseconds() {
	var td = new ilib.Date.ThaiSolarDate();
	
	assertNotNull(td);
	
	td.setMilliseconds(123);
	
	assertEquals(123, td.getMilliseconds());
}

function testGetDayOfWeekSimple1() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 1, 
    	month: 1, 
    	day: 1
    });
    
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek());
}

function testGetDayOfWeekGregorianDay1() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 544,
    	month: 1, 
    	day: 1
    });
    
    assertNotNull(td);
    
    assertEquals(1, td.getDayOfWeek());
}

function testGetDayOfWeekGregorianDay1ByJD() {
    var td = new ilib.Date.ThaiSolarDate({
    	julianday: 1721424.5
    });
    
    assertNotNull(td);
    
    assertEquals(0, td.getDayOfWeek());
}

function testGetDayOfWeekSimple2() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 0,
    	month: 12, 
    	day: 31
    });
    
    assertNotNull(td);
    
    assertEquals(4, td.getDayOfWeek());
}

function testGetDayOfWeekSimple3() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 1,
    	month: 1,
    	day: 2
    });
    
    assertNotNull(td);
    
    assertEquals(6, td.getDayOfWeek());
}

function testGetDayOfWeekSimple4() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 1,
    	month: 1,
    	day: 3
    });
    
    assertNotNull(td);
    
    assertEquals(0, td.getDayOfWeek());
}

function testGetDayOfWeekSimple5() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 1,
    	month: 1,
    	day: 4
    });
    
    assertNotNull(td);
    
    assertEquals(1, td.getDayOfWeek());
}

function testGetDayOfWeek1() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 9, 
    	day: 30
    });
    
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek());
}

function testGetDayOfWeekWithTime() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 9, 
    	day: 30, 
    	hour: 8, 
    	minute: 39, 
    	second: 34
    });
    
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek());
}

function testGetDayOfWeek2() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2191, 
    	month: 6, 
    	day: 10
    });
    
    assertNotNull(td);
    
    assertEquals(3, td.getDayOfWeek());
}

function testGetDayOfWeek3() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 1733, 
    	month: 3, 
    	day: 23
    });
    
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek());
}

function testGetDayOfWeek4() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: -43, 
    	month: 7, 
    	day: 24
    });
    
    assertNotNull(td);
    
    assertEquals(0, td.getDayOfWeek());
}

function testThaiSolarDateTestGetTimeZero() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2513, 
    	month: 1, 
    	day: 1,
    	timezone: "Etc/UTC"
    });
    assertNotNull(td);
    
    assertEquals(0, td.getTime());
}

function testThaiSolarDateTestGetTime() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2513, 
    	month: 1, 
    	day: 3,
	   	hour: 8,
	   	minute: 30,
    	timezone: "Etc/UTC"
    });
    assertNotNull(td);
    
    assertEquals(203400000, td.getTime());
}

function testThaiSolarDateTestGetTimeTooEarly() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2512, 
    	month: 12, 
    	day: 31,
    	timezone: "Etc/UTC"
    });
    assertNotNull(td);
    
    assertEquals(-1, td.getTime());
}

function testThaiSolarDateTestGetTimeTooLate() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2581, 
    	month: 1, 
    	day: 20,
    	timezone: "Etc/UTC"
    });
    assertNotNull(td);
    
    assertEquals(-1, td.getTime());
}

function testThaiSolarDateTestSetTime1() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2513, 
    	month: 1, 
    	day: 1,
    	timezone: "Etc/UTC"
    });
    assertNotNull(td);
    assertEquals(0, td.getTime());
    
    // set to Jan 4, 2513 at 8:30:03
    td.setTime(86400000*3 + 3600000*8 + 60000*30 + 3000);
    
    assertEquals(2513, td.getYears());
    assertEquals(1, td.getMonths());
    assertEquals(4, td.getDays());
    assertEquals(8, td.getHours());
    assertEquals(30, td.getMinutes());
    assertEquals(3, td.getSeconds());
}

function testThaiSolarDateTestSetTimeZero() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: -1, 
    	month: 1, 
    	day: 1,
	   	hour: 1,
	   	minute: 1,
	   	second: 1,
	   	millisecond: 1,
	   	timezone: "Etc/UTC"
    });
    assertNotNull(td);
    
    td.setTime(0);
    
    assertEquals(2513, td.getYears());
    assertEquals(1, td.getMonths());
    assertEquals(1, td.getDays());
    assertEquals(0, td.getHours());
    assertEquals(0, td.getMinutes());
    assertEquals(0, td.getSeconds());
}

// test some of the helper functions to make sure they are producing the right thing
function testThaiSolarDateOnOrBeforeSun() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    // Sunday on or before is 5 days before 
    assertEquals(rd-5, td.onOrBefore(0).getRataDie());
}

function testThaiSolarDateOnOrBeforeMon() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd-4, td.onOrBefore(1).getRataDie());
}

function testThaiSolarDateOnOrBeforeTue() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd-3, td.onOrBefore(2).getRataDie());
}

function testThaiSolarDateOnOrBeforeWed() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd-2, td.onOrBefore(3).getRataDie());
}

function testThaiSolarDateOnOrBeforeThu() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd-1, td.onOrBefore(4).getRataDie());
}

function testThaiSolarDateOnOrBeforeFri() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd, td.onOrBefore(5).getRataDie());
}

function testThaiSolarDateOnOrBeforeSat() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd-6, td.onOrBefore(6).getRataDie());
}

function testThaiSolarDateOnOrBeforeSunWithTime() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1,
	   	hour: 8
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie(); // contains fractional time for the 8:00am part
    
    // Sunday on or before is 5 days before 
    // Should give an rd result that also contains the fractional time 
    assertEquals(rd-5, td.onOrBefore(0).getRataDie());
}

function testThaiSolarDateOnOrAfterSun() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    // Sunday on or before is 5 days before 
    assertEquals(rd+2, td.onOrAfter(0).getRataDie());
}

function testThaiSolarDateOnOrAfterSunDate() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var date = td.onOrBefore(0);
    
    // Sunday on or before is 5 days before
    assertEquals(2552, date.year);
    assertEquals(12, date.month);
    assertEquals(27, date.day);
}

function testThaiSolarDateOnOrAfterMon() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd+3, td.onOrAfter(1).getRataDie());
}

function testThaiSolarDateOnOrAfterMonDate() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553,
    	month: 1,
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var date = td.onOrAfter(1);
    
    assertEquals(2553, date.year);
    assertEquals(1, date.month);
    assertEquals(4, date.day);
}

function testThaiSolarDateOnOrAfterTue() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd+4, td.onOrAfter(2).getRataDie());
}

function testThaiSolarDateOnOrAfterWed() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd+5, td.onOrAfter(3).getRataDie());
}

function testThaiSolarDateOnOrAfterThu() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd+6, td.onOrAfter(4).getRataDie());
}

function testThaiSolarDateOnOrAfterThuDate() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var date = td.onOrAfter(4);
    
    assertEquals(2553, date.year);
    assertEquals(1, date.month);
    assertEquals(7, date.day);
}

function testThaiSolarDateOnOrAfterFri() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd, td.onOrAfter(5).getRataDie());
}

function testThaiSolarDateOnOrAfterFriDate() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var date = td.onOrAfter(5);
    
    assertEquals(2553, date.year);
    assertEquals(1, date.month);
    assertEquals(1, date.day);
}

function testThaiSolarDateOnOrAfterSat() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd+1, td.onOrAfter(6).getRataDie());
}

function testThaiSolarDateBeforeSun() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    // Sunday before is 5 days before 
    assertEquals(rd-5, td.before(0).getRataDie());
}

function testThaiSolarDateBeforeSunDate() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var date = td.before(0);
    
    // Sunday before is 5 days before 
    assertEquals(2552, date.year);
    assertEquals(12, date.month);
    assertEquals(27, date.day);
}

function testThaiSolarDateBeforeMon() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd-4, td.before(1).getRataDie());
}

function testThaiSolarDateBeforeTue() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd-3, td.before(2).getRataDie());
}

function testThaiSolarDateBeforeWed() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd-2, td.before(3).getRataDie());
}

function testThaiSolarDateBeforeThu() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd-1, td.before(4).getRataDie());
}

function testThaiSolarDateBeforeThuDate() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var date = td.before(4);
    
    // Thursday before is 1 day before 
    assertEquals(2552, date.year);
    assertEquals(12, date.month);
    assertEquals(31, date.day);
}

function testThaiSolarDateBeforeFri() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd-7, td.before(5).getRataDie());
}

function testThaiSolarDateBeforeFriDate() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var date = td.before(5);
    
    // Friday before is 7 days before the current Friday
    assertEquals(2552, date.year);
    assertEquals(12, date.month);
    assertEquals(25, date.day);
}

function testThaiSolarDateBeforeSat() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd-6, td.before(6).getRataDie());
}

function testThaiSolarDateAfterSun() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    // Sunday after is 2 days after 
    assertEquals(rd+2, td.after(0).getRataDie());
}

function testThaiSolarDateAfterSunDate() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var date = td.after(0);
    
    // Sunday after is 2 days after 
    assertEquals(2553, date.year);
    assertEquals(1, date.month);
    assertEquals(3, date.day);
}

function testThaiSolarDateAfterMon() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd+3, td.after(1).getRataDie());
}

function testThaiSolarDateAfterTue() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd+4, td.after(2).getRataDie());
}

function testThaiSolarDateAfterWed() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd+5, td.after(3).getRataDie());
}

function testThaiSolarDateAfterThu() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd+6, td.after(4).getRataDie());
}

function testThaiSolarDateAfterFri() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd+7, td.after(5).getRataDie());
}

function testThaiSolarDateAfterFriDate() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var date = td.after(5);
    
    // Friday after is 7 days after 
    assertEquals(2553, date.year);
    assertEquals(1, date.month);
    assertEquals(8, date.day);
}

function testThaiSolarDateAfterSat() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var rd = td.getRataDie();
    
    assertEquals(rd+1, td.after(6).getRataDie());
}

function testThaiSolarDateAfterSatDate() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(5, td.getDayOfWeek()); // Friday
    var date = td.after(6);
    
    // Sat after is 1 day after 
    assertEquals(2553, date.year);
    assertEquals(1, date.month);
    assertEquals(2, date.day);
}

function testThaiSolarDateTestGetWeekOfYearThisYear() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 7
    });
    assertNotNull(td);
    
    assertEquals(1, td.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearThisYear2() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 1, 
    	day: 25
    });
    assertNotNull(td);
    
    assertEquals(4, td.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearThisYear3() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 10, 
    	day: 19
    });
    assertNotNull(td);
    
    assertEquals(42, td.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearThisYearWithTime() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: -1468, 
    	month: 10, 
    	day: 19,
	   	hour: 16,
	   	minute: 13,
	   	second: 12,
	   	millisecond: 232
    });
    assertNotNull(td);
    
    assertEquals(42, td.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearPreviousYear() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(52, td.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearLastWeekLeap() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2552, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(td);
    
    assertEquals(53, td.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearLastWeekRegular1() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2553, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(td);
    
    assertEquals(52, td.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearLastWeekRegular2() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2551, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(td);
    
    assertEquals(1, td.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearLastWeekRegular3() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2550, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(td);
    
    assertEquals(1, td.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearLastWeekRegular4() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2549, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(td);
    
    assertEquals(1, td.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearLastWeekRegular5() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2548, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(td);
    
    assertEquals(52, td.getWeekOfYear());
}

function testThaiSolarDateTestGetWeekOfYearLastWeekRegular6() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(td);
    
    assertEquals(52, td.getWeekOfYear());
}

function testThaiSolarDateGetDayOfYearFirstDay() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(1, td.getDayOfYear());
}

function testThaiSolarDateGetDayOfYearPaddysDay() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 3, 
    	day: 17
    });
    assertNotNull(td);
    
    assertEquals(76, td.getDayOfYear());
}

function testThaiSolarDateGetDayOfYearPaddysDayLeapYear() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2551, 
    	month: 3, 
    	day: 17
    });
    assertNotNull(td);
    
    assertEquals(77, td.getDayOfYear());
}

function testThaiSolarDateGetDayOfYearLastDay() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(td);
    
    assertEquals(365, td.getDayOfYear());
}

function testThaiSolarDateGetDayOfYearLastDayLeapYear() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2551, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(td);
    
    assertEquals(366, td.getDayOfYear());
}

function testThaiSolarDateGetWeekOfMonth0() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 10, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(0, td.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth1() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 10, 
    	day: 2
    });
    assertNotNull(td);
    
    assertEquals(1, td.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth2() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 10, 
    	day: 11
    });
    assertNotNull(td);
    
    assertEquals(2, td.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth3() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 10, 
    	day: 20
    });
    assertNotNull(td);
    
    assertEquals(3, td.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth4() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 10, 
    	day: 29
    });
    assertNotNull(td);
    
    assertEquals(4, td.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth5() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 10, 
    	day: 30
    });
    assertNotNull(td);
    
    assertEquals(5, td.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth6() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 9, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(0, td.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth7() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 8, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(1, td.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth8() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 7, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(0, td.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonth9() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 6, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(1, td.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonthUS() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 5, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(1, td.getWeekOfMonth("en-US"));
}

function testThaiSolarDateGetWeekOfMonthDE() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 5, 
    	day: 1
    });
    assertNotNull(td);
    
    // weeks in Germany start on Monday, and May 1st is a Sunday, so it is at the 
    // end of the preceding week.
    assertEquals(0, td.getWeekOfMonth("de-DE"));
}

function testThaiSolarDateGetEraCE() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 5, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(1, td.getEra());
}

function testThaiSolarDateGetEraBCE() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: -46, 
    	month: 5, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(-1, td.getEra());
}

function testThaiSolarDateGetEraCEYear1() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 1, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(td);
    
    assertEquals(1, td.getEra());
}

function testThaiSolarDateGetEraCEYear0() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 0, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(td);
    
    assertEquals(-1, td.getEra());
}

function testThaiSolarDateJan1Midnight() {
    var td = new ilib.Date.ThaiSolarDate({
    	julianday: 2455197.5,
	   	timezone: "Etc/UTC"
	});
    assertNotNull(td);
    
    assertEquals(2553, td.year);
    assertEquals(1, td.month);
    assertEquals(1, td.day);
    assertEquals(0, td.hour);
    assertEquals(0, td.minute);
    assertEquals(0, td.second);
    assertEquals(0, td.millisecond);
}

function testThaiSolarDateGetRataDie() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 3, 
    	day: 8,
	   	timezone: "Etc/UTC"
    });
    assertNotNull(td);
    
    assertEquals(932531, td.getRataDie());
}

function testThaiSolarDateGetTimeZone() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(td);
    
    assertEquals("America/Los_Angeles", td.getTimeZone());
}

function testThaiSolarDateGetTimeZoneDefault() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 3, 
    	day: 8
    });
    assertNotNull(td);
    
    assertEquals("local", td.getTimeZone());
}

function testThaiSolarDateGetTimeZoneByLocale() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 3, 
    	day: 8,
    	locale: "de-DE"
    });
    assertNotNull(td);
    
    assertEquals("Europe/Berlin", td.getTimeZone());
}

function testThaiSolarDateGetTimeZoneByLocaleBogus() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 3, 
    	day: 8,
    	locale: "zz-ZZ"
    });
    assertNotNull(td);
    
    assertEquals("Etc/UTC", td.getTimeZone());
}

function testThaiSolarDateCurrentTimeWithTimeZone() {
    var td = new ilib.Date.ThaiSolarDate({
    	timezone: "America/Los_Angeles"
    });
    var d = new Date();
    assertNotNull(td);
    
    assertRoughlyEquals(d.getTime(), td.getTime(), 30);
}

function testThaiSolarDateSetTimeZone() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(td);
    
    assertEquals("America/Los_Angeles", td.getTimeZone());
    
    td.setTimeZone("Asia/Tokyo");
    
    assertEquals("Asia/Tokyo", td.getTimeZone());
}

function testThaiSolarDateSetTimeZoneNotString() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(td);
    
    assertEquals("America/Los_Angeles", td.getTimeZone());
    
    td.setTimeZone(345);
    
    assertEquals("America/Los_Angeles", td.getTimeZone());
}

function testThaiSolarDateSetTimeZoneUndefined() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(td);
    
    assertEquals("America/Los_Angeles", td.getTimeZone());

    // clears it out
    td.setTimeZone(undefined);
    
    assertEquals("local", td.getTimeZone());
}

function testThaiSolarDateSetTimeZoneEmpty() {
    var td = new ilib.Date.ThaiSolarDate({
    	year: 2554, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(td);
    
    assertEquals("America/Los_Angeles", td.getTimeZone());
    
    // clears it out
    td.setTimeZone("");
    
    assertEquals("local", td.getTimeZone());
}

function testThaiSolarDateInitWithUnixTimeRightTimeZone() {
    var td = new ilib.Date.ThaiSolarDate({
    	unixtime: 0
    });
    assertNotNull(td);
    
    assertEquals("local", td.getTimeZone());
}

function testThaiSolarDateInitWithJDRightTimeZone() {
    var td = new ilib.Date.ThaiSolarDate({
    	julianday: 0
    });
    assertNotNull(td);
    
    assertEquals("local", td.getTimeZone());
}

function testThaiSolarDateInitWithRDRightTimeZone() {
    var td = new ilib.Date.ThaiSolarDate({
    	rd: 0
    });
    assertNotNull(td);
    
    assertEquals("local", td.getTimeZone());
}
