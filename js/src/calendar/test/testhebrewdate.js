/*
 * testhebrewdate.js - test the hebrew date object
 * 
 * Copyright © 2012, JEDLSoft
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

function testHebrewDateConstructor() {
	var id = new ilib.Date.HebrewDate();
    
    assertNotNull(id);
}

function testHebrewDateConstructorFromRD() {
	var id = new ilib.Date.HebrewDate({rd: 357.25});
    
    assertEquals('object', typeof(id));
    assertEquals(357.25, id.getRataDie());
    assertEquals(2, id.getYears());
    assertEquals(7, id.getMonths());
    assertEquals(3, id.getDays());
    assertEquals(0, id.getHours());
    assertEquals(0, id.getMinutes());
    assertEquals(0, id.getSeconds());
    assertEquals(0, id.getMilliseconds());
}

/* julian date id rd 357 + epoch */
function testHebrewDateConstructorFromJD() {
	var id = new ilib.Date.HebrewDate({julianday: 348354.5});
    
    assertEquals('object', typeof(id));
    assertEquals(357.25, id.getRataDie());
    assertEquals(2, id.getYears());
    assertEquals(7, id.getMonths());
    assertEquals(3, id.getDays());
    assertEquals(0, id.getHours());
    assertEquals(0, id.getMinutes());
    assertEquals(0, id.getSeconds());
    assertEquals(0, id.getMilliseconds());
}

function testHebrewDateConstructorFromRDCusp() {
	var id = new ilib.Date.HebrewDate({rd: 355.25});
    
    assertEquals('object', typeof(id));
    assertEquals(355.25, id.getRataDie());
    assertEquals(2, id.getYears());
    assertEquals(7, id.getMonths());
    assertEquals(1, id.getDays());
    assertEquals(0, id.getHours());
    assertEquals(0, id.getMinutes());
    assertEquals(0, id.getSeconds());
    assertEquals(0, id.getMilliseconds());
}

function testHebrewDateAfterLeapYear() {
	var id = new ilib.Date.HebrewDate({julianday: 349326.9});  // Siv 1, 0004, 9:36am
    
    assertEquals('object', typeof(id));
    assertRoughlyEquals(1329.65, id.getRataDie(), 0.001);
    assertEquals(4, id.getYears());
    assertEquals(3, id.getMonths());
    assertEquals(1, id.getDays());
    assertEquals(9, id.getHours());
    assertEquals(36, id.getMinutes());
    assertEquals(0, id.getSeconds());
    assertEquals(0, id.getMilliseconds());
}

function testHebrewDateAfterNoon() {
	var id = new ilib.Date.HebrewDate({julianday: 349327.1});  // Siv 1, 0004, 2:24pm
    
    assertEquals('object', typeof(id));
    assertRoughlyEquals(1329.85, id.getRataDie(), 0.001);
    assertEquals(4, id.getYears());
    assertEquals(3, id.getMonths());
    assertEquals(1, id.getDays());
    assertEquals(14, id.getHours());
    assertEquals(24, id.getMinutes());
    assertEquals(0, id.getSeconds());
    assertEquals(0, id.getMilliseconds());
}

var testDates = [
//   jd         year   month  day  hour  minute  second  millisecond  dayofweek
    [1507231.5, 3174,  5,     10,  0,    0,      0,      0,           0],
    [1660037.5, 3593,  9,     25,  0,    0,      0,      0,           3],
    [1746893.5, 3831,  7,     3,   0,    0,      0,      0,           3],
    [1770641.5, 3896,  7,     9,   0,    0,      0,      0,           0],
    [1892731.5, 4230,  10,    18,  0,    0,      0,      0,           3],
    [1931579.5, 4336,  3,     4,   0,    0,      0,      0,           1],
    [1974851.5, 4455,  8,     13,  0,    0,      0,      0,           6],
    [2091164.5, 4773,  2,     6,   0,    0,      0,      0,           0],
    [2121509.5, 4856,  2,     23,  0,    0,      0,      0,           0],
    [2155779.5, 4950,  1,     7,   0,    0,      0,      0,           5],
    [2174029.5, 5000,  13,    8,   0,    0,      0,      0,           6],
    [2191584.5, 5048,  1,     21,  0,    0,      0,      0,           5],
    [2195261.5, 5058,  2,     7,   0,    0,      0,      0,           0],
    [2229274.5, 5151,  4,     1,   0,    0,      0,      0,           0],
    [2245580.5, 5196,  11,    7,   0,    0,      0,      0,           3],
    [2266100.5, 5252,  1,     3,   0,    0,      0,      0,           6],
    [2288542.5, 5314,  7,     1,   0,    0,      0,      0,           6],
    [2290901.5, 5320,  12,    27,  0,    0,      0,      0,           6],
    [2323140.5, 5408,  3,     20,  0,    0,      0,      0,           3],
    [2334848.5, 5440,  4,     3,   0,    0,      0,      0,           0],
    [2348020.5, 5476,  5,     5,   0,    0,      0,      0,           5],
    [2366978.5, 5528,  4,     4,   0,    0,      0,      0,           0],
    [2385648.5, 5579,  5,     11,  0,    0,      0,      0,           1],
    [2392825.5, 5599,  1,     12,  0,    0,      0,      0,           3],
    [2416223.5, 5663,  1,     22,  0,    0,      0,      0,           0],
    [2425848.5, 5689,  5,     19,  0,    0,      0,      0,           0],
    [2430266.5, 5702,  7,     8,   0,    0,      0,      0,           1],
    [2430833.5, 5703,  1,     14,  0,    0,      0,      0,           1],
    [2431004.5, 5704,  7,     8,   0,    0,      0,      0,           4],
    [2448698.5, 5752,  13,    12,  0,    0,      0,      0,           2],
    [2450138.5, 5756,  12,    5,   0,    0,      0,      0,           0],
    [2465737.5, 5799,  8,     12,  0,    0,      0,      0,           3],
    [2486076.5, 5854,  5,     5,   0,    0,      0,      0,           0]
];

function testHebrewDateConvert() {
    var gd;
    for (i = 0; i < testDates.length; i++) {
        id = new ilib.Date.HebrewDate({julianday: testDates[i][0]});
    
        info("testing jd=" + testDates[i][0]);
        
        assertEquals('object', typeof(id));
        assertEquals("testing rd for " + testDates[i][0], (testDates[i][0] - 347997.25), id.getRataDie());
        assertEquals("testing year for " + testDates[i][0], testDates[i][1], id.getYears());
        assertEquals("testing month for " + testDates[i][0], testDates[i][2], id.getMonths());
        assertEquals("testing day for " + testDates[i][0], testDates[i][3], id.getDays());
        assertEquals("testing hour for " + testDates[i][0], testDates[i][4], id.getHours());
        assertEquals("testing minute for " + testDates[i][0], testDates[i][5], id.getMinutes());
        assertEquals("testing second for " + testDates[i][0], testDates[i][6], id.getSeconds());
        assertEquals("testing millisecond for " + testDates[i][0], testDates[i][7], id.getMilliseconds());
        assertEquals("testing day of week for " + testDates[i][0], testDates[i][8], id.getDayOfWeek());
    }
}

function testHebrewDateConstructorFull() {
	var id = new ilib.Date.HebrewDate({
		year: 2011,
		month: 9,
		day: 23,
		hour: 16,
		minute: 7,
		second: 12,
		millisecond: 123
	});
    
    assertNotNull(id);
    
    assertEquals(2011, id.getYears());
    assertEquals(9, id.getMonths());
    assertEquals(23, id.getDays());
    assertEquals(16, id.getHours());
    assertEquals(7, id.getMinutes());
    assertEquals(12, id.getSeconds());
    assertEquals(123, id.getMilliseconds());
}

function testHebrewDateConstructorFullWithStrings() {
	var id = new ilib.Date.HebrewDate({
		year: "2011", 
		month: "9",
		day: "23", 
		hour: "16", 
		minute: "7", 
		second: "12", 
		millisecond: "123"
	});
    
    assertNotNull(id);
    
    assertEquals(2011, id.getYears());
    assertEquals(9, id.getMonths());
    assertEquals(23, id.getDays());
    assertEquals(16, id.getHours());
    assertEquals(7, id.getMinutes());
    assertEquals(12, id.getSeconds());
    assertEquals(123, id.getMilliseconds());
}

function testHebrewDateConstructorCopy() {
    var id = new ilib.Date.HebrewDate({
        year: 2011, 
        month: 9, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123
    });
    
    assertNotNull(id);
    
    assertEquals(2011, id.getYears());
    assertEquals(9, id.getMonths());
    assertEquals(23, id.getDays());
    assertEquals(16, id.getHours());
    assertEquals(7, id.getMinutes());
    assertEquals(12, id.getSeconds());
    assertEquals(123, id.getMilliseconds());
}

function testHebrewDateGetJulianDay() {
    var gd;
    
    for (i = 0; i < testDates.length; i++) {
        id = new ilib.Date.HebrewDate({
            year: testDates[i][1], 
            month: testDates[i][2], 
            day: testDates[i][3],
            hour: testDates[i][4],
            minute: testDates[i][5],
            second: testDates[i][6],
            millisecond: testDates[i][7]
    	});
    
        info("testing jd=" + testDates[i][0]);
        
        assertEquals('object', typeof(id));
        assertEquals(testDates[i][0], id.getJulianDay());
        assertEquals(testDates[i][8], id.getDayOfWeek());
    }
}

function testHebrewDateSetYears() {
    var id = new ilib.Date.HebrewDate();
    
    assertNotNull(id);
    
    id.setYears(123);
    
    assertEquals(123, id.getYears());
}

function testHebrewDateSetMonths() {
    var id = new ilib.Date.HebrewDate();
    
    assertNotNull(id);
    
    id.setMonths(7);
    
    assertEquals(7, id.getMonths());
}

function testHebrewDateSetDays() {
    var id = new ilib.Date.HebrewDate();
    
    assertNotNull(id);
    
    id.setDays(12);
    
    assertEquals(12, id.getDays());
}

function testHebrewDateSetHours() {
    var id = new ilib.Date.HebrewDate();
    
    assertNotNull(id);
    
    id.setHours(12);
    
    assertEquals(12, id.getHours());
}

function testHebrewDateSetMinutes() {
    var id = new ilib.Date.HebrewDate();
    
    assertNotNull(id);
    
    id.setMinutes(13);
    
    assertEquals(13, id.getMinutes());
}

function testHebrewDateSetSeconds() {
    var id = new ilib.Date.HebrewDate();
    
    assertNotNull(id);
    
    id.setSeconds(23);
    
    assertEquals(23, id.getSeconds());
}

function testHebrewDateSetMilliseconds() {
    var id = new ilib.Date.HebrewDate();
    
    assertNotNull(id);
    
    id.setMilliseconds(123);
    
    assertEquals(123, id.getMilliseconds());
}

function testGetDayOfWeek1() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 7,
		day: 2
	});
    
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek());
}

function testGetDayOfWeekWithTime() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 7,
		day: 2,
		hour: 8,
		minute: 39,
		second: 34
	});
    
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek());
}

function testHebrewDateTestGetTimeZero() {
    var id = new ilib.Date.HebrewDate({
		year: 5730,
		month: 10,
		day: 23
	});
    assertNotNull(id);
    
    assertEquals(0, id.getTime());
}

function testHebrewDateTestGetTimeZeroJD() {
    var id = new ilib.Date.HebrewDate({julianday: 2440587.5});
    assertNotNull(id);
    
    assertEquals(0, id.getTime());
}

function testHebrewDateTestGetTime() {
    var id = new ilib.Date.HebrewDate({
		year: 5730,
		month: 10,
		day: 24,
		hour: 8,
		minute: 30
	});
    assertNotNull(id);
    
    assertEquals(117000000, id.getTime());
}

function testHebrewDateTestGetTimeTooEarly() {
    var id = new ilib.Date.HebrewDate({
		year: 5730,
		month: 10,
		day: 22
	});
    assertNotNull(id);
    
    assertEquals(-1, id.getTime());
}

function testHebrewDateTestGetTimeTooLate() {
    var id = new ilib.Date.HebrewDate({
		year: 5798,
		month: 11,
		day: 14
	});
    assertNotNull(id);
    
    assertEquals(-1, id.getTime());
}

// test some of the helper functions to make sure they are producing the right thing
function testHebrewDateOnOrBeforeSun() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    // Sunday on or before id 5 days before 
    assertEquals(rd-5, id.onOrBeforeRd(rd, 0));
}

function testHebrewDateOnOrBeforeMon() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-4, id.onOrBeforeRd(rd, 1));
}

function testHebrewDateOnOrBeforeTue() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-3, id.onOrBeforeRd(rd, 2));
}

function testHebrewDateOnOrBeforeWed() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-2, id.onOrBeforeRd(rd, 3));
}

function testHebrewDateOnOrBeforeThu() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-1, id.onOrBeforeRd(rd, 4));
}

function testHebrewDateOnOrBeforeFri() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd, id.onOrBeforeRd(rd, 5));
}

function testHebrewDateOnOrBeforeSat() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-6, id.onOrBeforeRd(rd, 6));
}

function testHebrewDateOnOrAfterSun() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    // Sunday on or before id 5 days before 
    assertEquals(rd+2, id.onOrAfterRd(rd, 0));
}

function testHebrewDateOnOrAfterMon() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+3, id.onOrAfterRd(rd, 1));
}

function testHebrewDateOnOrAfterTue() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+4, id.onOrAfterRd(rd, 2));
}

function testHebrewDateOnOrAfterWed() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+5, id.onOrAfterRd(rd, 3));
}

function testHebrewDateOnOrAfterThu() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+6, id.onOrAfterRd(rd, 4));
}

function testHebrewDateOnOrAfterFri() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd, id.onOrAfterRd(rd, 5));
}

function testHebrewDateOnOrAfterSat() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+1, id.onOrAfterRd(rd, 6));
}

function testHebrewDateBeforeSun() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    // Sunday before id 5 days before 
    assertEquals(rd-5, id.beforeRd(rd, 0));
}

function testHebrewDateBeforeMon() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-4, id.beforeRd(rd, 1));
}

function testHebrewDateBeforeTue() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-3, id.beforeRd(rd, 2));
}

function testHebrewDateBeforeWed() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-2, id.beforeRd(rd, 3));
}

function testHebrewDateBeforeThu() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-1, id.beforeRd(rd, 4));
}

function testHebrewDateBeforeFri() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-7, id.beforeRd(rd, 5));
}

function testHebrewDateBeforeSat() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd-6, id.beforeRd(rd, 6));
}

function testHebrewDateAfterSun() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    // Sunday on or before id 5 days before 
    assertEquals(rd+2, id.afterRd(rd, 0));
}

function testHebrewDateAfterMon() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+3, id.afterRd(rd, 1));
}

function testHebrewDateAfterTue() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+4, id.afterRd(rd, 2));
}

function testHebrewDateAfterWed() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+5, id.afterRd(rd, 3));
}

function testHebrewDateAfterThu() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+6, id.afterRd(rd, 4));
}

function testHebrewDateAfterFri() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+7, id.afterRd(rd, 5));
}

function testHebrewDateAfterSat() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(id);
    
    assertEquals(5, id.getDayOfWeek()); // Friday
    var rd = id.getRataDie();
    
    assertEquals(rd+1, id.afterRd(rd, 6));
}

function testHebrewDateTestGetWeekOfYearThisYear() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 8,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(5, id.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearThisYear2() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 9,
		day: 19
	});
    assertNotNull(id);
    
    assertEquals(12, id.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearThisYearRegular() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(26, id.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearThisYearLeap() {
    var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    // the extra month pushes the week number later in leap years
    assertEquals(31, id.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearThisYearWithTime() {
	var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 6,
		day: 29,
		hour: 16,
		minute: 13,
		second: 12,
		millisecond: 232
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearPreviousYear() {
    var id = new ilib.Date.HebrewDate({
		year: 5781,
		month: 7,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(51, id.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearLastWeekLeap() {
    var id = new ilib.Date.HebrewDate({
		year: 5784,
		month: 6,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearLastWeekRegular1() {
    var id = new ilib.Date.HebrewDate({
		year: 5781,
		month: 6,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearLastWeekRegular2() {
    var id = new ilib.Date.HebrewDate({
		year: 5782,
		month: 6,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearLastWeekRegular3() {
    var id = new ilib.Date.HebrewDate({
		year: 5783,
		month: 6,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(51, id.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearLastWeekRegular4() {
    var id = new ilib.Date.HebrewDate({
		year: 5785,
		month: 6,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearLastWeekRegular5() {
    var id = new ilib.Date.HebrewDate({
		year: 5786,
		month: 6,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(51, id.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearLastWeekRegular6() {
    var id = new ilib.Date.HebrewDate({
		year: 5787,
		month: 6,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(55, id.getWeekOfYear());
}

function testHebrewDateGetDayOfYearFirstDay() {
	var id = new ilib.Date.HebrewDate({
		year: 5771,
		month: 7,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(1, id.getDayOfYear());
}

function testHebrewDateGetDayOfYearMidYear() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(178, id.getDayOfYear());
}

function testHebrewDateGetDayOfYearMidYearLeap() {
    var id = new ilib.Date.HebrewDate({
		year: 5774,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(209, id.getDayOfYear());
}

function testHebrewDateGetDayOfYearLastDay() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 6,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(354, id.getDayOfYear());
}

function testHebrewDateGetDayOfYearLastDayLeapYear() {
    var id = new ilib.Date.HebrewDate({
		year: 5774,
		month: 6,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(385, id.getDayOfYear());
}

function testHebrewDateGetWeekOfMonth0() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 9,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth1() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 9,
		day: 2
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth2() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 9,
		day: 11
	});
    assertNotNull(id);
    
    assertEquals(2, id.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth3() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 9,
		day: 20
	});
    assertNotNull(id);
    
    assertEquals(3, id.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth4() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 9,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(5, id.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth5() {
	var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 1,
		day: 30
	});
    assertNotNull(id);
    
    assertEquals(5, id.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth6() {
	var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 4,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(0, id.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth7() {
	var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 5,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(0, id.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth8() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 6,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth9() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 7,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(0, id.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth10() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 8,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(1, id.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonthUS() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 8,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(0, id.getWeekOfMonth("en-US"));
}

function testHebrewDateGetWeekOfMonthDE() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 8,
		day: 1
	});
    assertNotNull(id);
    
    // weeks in Germany start on Monday, and 8/1 is a Saturday, so it is at the 
    // end of the preceding week.
    assertEquals(0, id.getWeekOfMonth("de-DE"));
}

function testHebrewDateGetEraAM() {
    var id = new ilib.Date.HebrewDate({
		year: 5772,
		month: 5,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(1, id.getEra());
}

function testHebrewDateGetEraBAM() {
    var id = new ilib.Date.HebrewDate({
		year: -46,
		month: 5,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0
		
	});
    assertNotNull(id);
    
    assertEquals(-1, id.getEra());
}

function testHebrewDateGetEraAMYear1() {
    var id = new ilib.Date.HebrewDate({
		year: 1,
		month: 1,
		day: 1
	});
    assertNotNull(id);
    
    assertEquals(1, id.getEra());
}

function testHebrewDateGetEraBAMYear0() {
    var id = new ilib.Date.HebrewDate({
		year: 0,
		month: 12,
		day: 29
	});
    assertNotNull(id);
    
    assertEquals(-1, id.getEra());
}

function testHebrewDateSetTimeZone() {
    var gd = new ilib.Date.HebrewDate({
    	year: 5711, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
    
    gd.setTimeZone("Asia/Tokyo");
    
    assertEquals("Asia/Tokyo", gd.getTimeZone());
}

function testHebrewDateSetTimeZoneNotString() {
    var gd = new ilib.Date.HebrewDate({
    	year: 5711, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(gd);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
    
    gd.setTimeZone(345);
    
    assertEquals("America/Los_Angeles", gd.getTimeZone());
}

function testHebrewDateSetTimeZoneUndefined() {
    var gd = new ilib.Date.HebrewDate({
    	year: 5711, 
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

function testHebrewDateSetTimeZoneEmpty() {
    var gd = new ilib.Date.HebrewDate({
    	year: 5711, 
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

