/*
 * testhebrewdate.js - test the hebrew date object
 * 
 * Copyright © 2012-2015, JEDLSoft
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
	var hd = new ilib.Date.HebrewDate();
    
    assertNotNull(hd);
}

function testHebrewDateConstructorFromRD() {
	var hd = new ilib.Date.HebrewDate({rd: 357.25, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(hd));
    assertEquals(357.25, hd.getRataDie());
    assertEquals(2, hd.getYears());
    assertEquals(7, hd.getMonths());
    assertEquals(3, hd.getDays());
    assertEquals(0, hd.getHours());
    assertEquals(0, hd.getMinutes());
    assertEquals(0, hd.getSeconds());
    assertEquals(0, hd.getMilliseconds());
}

/* julian date is rd 357 + epoch */
function testHebrewDateConstructorFromJD() {
	var hd = new ilib.Date.HebrewDate({julianday: 348354.5, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(hd));
    assertEquals(357.25, hd.getRataDie());
    assertEquals(2, hd.getYears());
    assertEquals(7, hd.getMonths());
    assertEquals(3, hd.getDays());
    assertEquals(0, hd.getHours());
    assertEquals(0, hd.getMinutes());
    assertEquals(0, hd.getSeconds());
    assertEquals(0, hd.getMilliseconds());
}

function testHebrewDateConstructorFromRDCusp() {
	var hd = new ilib.Date.HebrewDate({rd: 355.25, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(hd));
    assertEquals(355.25, hd.getRataDie());
    assertEquals(2, hd.getYears());
    assertEquals(7, hd.getMonths());
    assertEquals(1, hd.getDays());
    assertEquals(0, hd.getHours());
    assertEquals(0, hd.getMinutes());
    assertEquals(0, hd.getSeconds());
    assertEquals(0, hd.getMilliseconds());
}

function testHebrewDateAfterLeapYear() {
	var hd = new ilib.Date.HebrewDate({julianday: 349326.9, timezone: "Etc/UTC"});  // Siv 1, 0004, 9:36am
    
    assertEquals('object', typeof(hd));
    assertRoughlyEquals(1329.65, hd.getRataDie(), 0.001);
    assertEquals(4, hd.getYears());
    assertEquals(3, hd.getMonths());
    assertEquals(1, hd.getDays());
    assertEquals(9, hd.getHours());
    assertEquals(36, hd.getMinutes());
    assertEquals(0, hd.getSeconds());
    assertEquals(0, hd.getMilliseconds());
}

function testHebrewDateAfterNoon() {
	var hd = new ilib.Date.HebrewDate({julianday: 349327.1, timezone: "Etc/UTC"});  // Siv 1, 0004, 2:24pm
    
    assertEquals('object', typeof(hd));
    assertRoughlyEquals(1329.85, hd.getRataDie(), 0.001);
    assertEquals(4, hd.getYears());
    assertEquals(3, hd.getMonths());
    assertEquals(1, hd.getDays());
    assertEquals(14, hd.getHours());
    assertEquals(24, hd.getMinutes());
    assertEquals(0, hd.getSeconds());
    assertEquals(0, hd.getMilliseconds());
}

var testDatesHebrew = [
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
    var hd;
    for (var i = 0; i < testDatesHebrew.length; i++) {
        hd = new ilib.Date.HebrewDate({julianday: testDatesHebrew[i][0], timezone: "Etc/UTC"});
    
        info("testing jd=" + testDatesHebrew[i][0]);
        
        assertEquals('object', typeof(hd));
        assertEquals("testing rd for " + testDatesHebrew[i][0], (testDatesHebrew[i][0] - 347997.25), hd.getRataDie());
        assertEquals("testing year for " + testDatesHebrew[i][0], testDatesHebrew[i][1], hd.getYears());
        assertEquals("testing month for " + testDatesHebrew[i][0], testDatesHebrew[i][2], hd.getMonths());
        assertEquals("testing day for " + testDatesHebrew[i][0], testDatesHebrew[i][3], hd.getDays());
        assertEquals("testing hour for " + testDatesHebrew[i][0], testDatesHebrew[i][4], hd.getHours());
        assertEquals("testing minute for " + testDatesHebrew[i][0], testDatesHebrew[i][5], hd.getMinutes());
        assertEquals("testing second for " + testDatesHebrew[i][0], testDatesHebrew[i][6], hd.getSeconds());
        assertEquals("testing millisecond for " + testDatesHebrew[i][0], testDatesHebrew[i][7], hd.getMilliseconds());
        assertEquals("testing day of week for " + testDatesHebrew[i][0], testDatesHebrew[i][8], hd.getDayOfWeek());
    }
}

function testHebrewDateConstructorFull() {
	var hd = new ilib.Date.HebrewDate({
		year: 2011,
		month: 9,
		day: 23,
		hour: 16,
		minute: 7,
		second: 12,
		millisecond: 123
	});
    
    assertNotNull(hd);
    
    assertEquals(2011, hd.getYears());
    assertEquals(9, hd.getMonths());
    assertEquals(23, hd.getDays());
    assertEquals(16, hd.getHours());
    assertEquals(7, hd.getMinutes());
    assertEquals(12, hd.getSeconds());
    assertEquals(123, hd.getMilliseconds());
}

function testHebrewDateConstructorFullWithStrings() {
	var hd = new ilib.Date.HebrewDate({
		year: "2011", 
		month: "9",
		day: "23", 
		hour: "16", 
		minute: "7", 
		second: "12", 
		millisecond: "123"
	});
    
    assertNotNull(hd);
    
    assertEquals(2011, hd.getYears());
    assertEquals(9, hd.getMonths());
    assertEquals(23, hd.getDays());
    assertEquals(16, hd.getHours());
    assertEquals(7, hd.getMinutes());
    assertEquals(12, hd.getSeconds());
    assertEquals(123, hd.getMilliseconds());
}

function testHebrewDateConstructorCopy() {
    var hd = new ilib.Date.HebrewDate({
        year: 2011, 
        month: 9, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123
    });
    
    assertNotNull(hd);
    
    assertEquals(2011, hd.getYears());
    assertEquals(9, hd.getMonths());
    assertEquals(23, hd.getDays());
    assertEquals(16, hd.getHours());
    assertEquals(7, hd.getMinutes());
    assertEquals(12, hd.getSeconds());
    assertEquals(123, hd.getMilliseconds());
}

function testHebrewDateGetJulianDay() {
    var hd;
    
    for (var i = 0; i < testDatesHebrew.length; i++) {
        hd = new ilib.Date.HebrewDate({
        	year: testDatesHebrew[i][1], 
            month: testDatesHebrew[i][2], 
            day: testDatesHebrew[i][3],
            hour: testDatesHebrew[i][4],
            minute: testDatesHebrew[i][5],
            second: testDatesHebrew[i][6],
            millisecond: testDatesHebrew[i][7],
            timezone: "Etc/UTC"            
    	});
    
        info("testing jd=" + testDatesHebrew[i][0]);
        
        assertEquals('object', typeof(hd));
        assertEquals(testDatesHebrew[i][0], hd.getJulianDay());
        assertEquals(testDatesHebrew[i][8], hd.getDayOfWeek());
    }
}

function testHebrewDateSetYears() {
    var hd = new ilib.Date.HebrewDate();
    
    assertNotNull(hd);
    
    hd.setYears(123);
    
    assertEquals(123, hd.getYears());
}

function testHebrewDateSetMonths() {
    var hd = new ilib.Date.HebrewDate();
    
    assertNotNull(hd);
    
    hd.setMonths(7);
    
    assertEquals(7, hd.getMonths());
}

function testHebrewDateSetDays() {
    var hd = new ilib.Date.HebrewDate();
    
    assertNotNull(hd);
    
    hd.setDays(12);
    
    assertEquals(12, hd.getDays());
}

function testHebrewDateSetHours() {
    var hd = new ilib.Date.HebrewDate();
    
    assertNotNull(hd);
    
    hd.setHours(12);
    
    assertEquals(12, hd.getHours());
}

function testHebrewDateSetMinutes() {
    var hd = new ilib.Date.HebrewDate();
    
    assertNotNull(hd);
    
    hd.setMinutes(13);
    
    assertEquals(13, hd.getMinutes());
}

function testHebrewDateSetSeconds() {
    var hd = new ilib.Date.HebrewDate();
    
    assertNotNull(hd);
    
    hd.setSeconds(23);
    
    assertEquals(23, hd.getSeconds());
}

function testHebrewDateSetMilliseconds() {
    var hd = new ilib.Date.HebrewDate();
    
    assertNotNull(hd);
    
    hd.setMilliseconds(123);
    
    assertEquals(123, hd.getMilliseconds());
}

function testGetDayOfWeek1() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 7,
		day: 2
	});
    
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek());
}

function testGetDayOfWeekWithTime() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 7,
		day: 2,
		hour: 8,
		minute: 39,
		second: 34
	});
    
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek());
}

function testHebrewDateTestGetTimeZero() {
    var hd = new ilib.Date.HebrewDate({
    	timezone: "Etc/UTC",
		year: 5730,
		month: 10,
		day: 23
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getTime());
}

function testHebrewDateTestGetTimeZeroJD() {
    var hd = new ilib.Date.HebrewDate({julianday: 2440587.5, timezone: "Etc/UTC"});
    assertNotNull(hd);
    
    assertEquals(0, hd.getTime());
}

function testHebrewDateTestGetTime() {
    var hd = new ilib.Date.HebrewDate({
		year: 5730,
		month: 10,
		day: 24,
		hour: 8,
		minute: 30,
		timezone: "Etc/UTC"
	});
    assertNotNull(hd);
    
    assertEquals(117000000, hd.getTime());
}

function testHebrewDateTestGetTimeTooEarly() {
    var hd = new ilib.Date.HebrewDate({
		year: 5730,
		month: 10,
		day: 22
	});
    assertNotNull(hd);
    
    assertEquals(-1, hd.getTime());
}

function testHebrewDateTestGetTimeTooLate() {
    var hd = new ilib.Date.HebrewDate({
		year: 5798,
		month: 11,
		day: 14
	});
    assertNotNull(hd);
    
    assertEquals(-1, hd.getTime());
}

// test some of the helper functions to make sure they are producing the right thing
function testHebrewDateOnOrBeforeSun() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    // Sunday on or before is 5 days before 
    assertEquals(rd-5, hd.onOrBefore(0).getRataDie());
}

function testHebrewDateOnOrBeforeMon() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-4, hd.onOrBefore(1).getRataDie());
}

function testHebrewDateOnOrBeforeTue() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-3, hd.onOrBefore(2).getRataDie());
}

function testHebrewDateOnOrBeforeWed() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-2, hd.onOrBefore(3).getRataDie());
}

function testHebrewDateOnOrBeforeThu() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-1, hd.onOrBefore(4).getRataDie());
}

function testHebrewDateOnOrBeforeFri() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd, hd.onOrBefore(5).getRataDie());
}

function testHebrewDateOnOrBeforeSat() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-6, hd.onOrBefore(6).getRataDie());
}

function testHebrewDateOnOrAfterSun() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    // Sunday on or before is 5 days before 
    assertEquals(rd+2, hd.onOrAfter(0).getRataDie());
}

function testHebrewDateOnOrAfterMon() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+3, hd.onOrAfter(1).getRataDie());
}

function testHebrewDateOnOrAfterTue() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+4, hd.onOrAfter(2).getRataDie());
}

function testHebrewDateOnOrAfterWed() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+5, hd.onOrAfter(3).getRataDie());
}

function testHebrewDateOnOrAfterThu() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+6, hd.onOrAfter(4).getRataDie());
}

function testHebrewDateOnOrAfterFri() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd, hd.onOrAfter(5).getRataDie());
}

function testHebrewDateOnOrAfterSat() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+1, hd.onOrAfter(6).getRataDie());
}

function testHebrewDateBeforeSun() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    // Sunday before hd 5 days before 
    assertEquals(rd-5, hd.before(0).getRataDie());
}

function testHebrewDateBeforeMon() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-4, hd.before(1).getRataDie());
}

function testHebrewDateBeforeTue() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-3, hd.before(2).getRataDie());
}

function testHebrewDateBeforeWed() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-2, hd.before(3).getRataDie());
}

function testHebrewDateBeforeThu() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-1, hd.before(4).getRataDie());
}

function testHebrewDateBeforeFri() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-7, hd.before(5).getRataDie());
}

function testHebrewDateBeforeSat() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-6, hd.before(6).getRataDie());
}

function testHebrewDateAfterSun() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    // Sunday on or before hd 5 days before 
    assertEquals(rd+2, hd.after(0).getRataDie());
}

function testHebrewDateAfterMon() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+3, hd.after(1).getRataDie());
}

function testHebrewDateAfterTue() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+4, hd.after(2).getRataDie());
}

function testHebrewDateAfterWed() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+5, hd.after(3).getRataDie());
}

function testHebrewDateAfterThu() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+6, hd.after(4).getRataDie());
}

function testHebrewDateAfterFri() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+7, hd.after(5).getRataDie());
}

function testHebrewDateAfterSat() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 9,
		day: 12
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+1, hd.after(6).getRataDie());
}

function testHebrewDateTestGetWeekOfYearThisYear() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 8,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearThisYear2() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 9,
		day: 19
	});
    assertNotNull(hd);
    
    assertEquals(12, hd.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearThisYearRegular() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 1,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(26, hd.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearThisYearLeap() {
    var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 1,
		day: 1
	});
    assertNotNull(hd);
    
    // the extra month pushes the week number later in leap years
    assertEquals(31, hd.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearThisYearWithTime() {
	var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 6,
		day: 29,
		hour: 16,
		minute: 13,
		second: 12,
		millisecond: 232
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearPreviousYear() {
    var hd = new ilib.Date.HebrewDate({
		year: 5781,
		month: 7,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(51, hd.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearLastWeekLeap() {
    var hd = new ilib.Date.HebrewDate({
		year: 5784,
		month: 6,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearLastWeekRegular1() {
    var hd = new ilib.Date.HebrewDate({
		year: 5781,
		month: 6,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearLastWeekRegular2() {
    var hd = new ilib.Date.HebrewDate({
		year: 5782,
		month: 6,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearLastWeekRegular3() {
    var hd = new ilib.Date.HebrewDate({
		year: 5783,
		month: 6,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(51, hd.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearLastWeekRegular4() {
    var hd = new ilib.Date.HebrewDate({
		year: 5785,
		month: 6,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearLastWeekRegular5() {
    var hd = new ilib.Date.HebrewDate({
		year: 5786,
		month: 6,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(51, hd.getWeekOfYear());
}

function testHebrewDateTestGetWeekOfYearLastWeekRegular6() {
    var hd = new ilib.Date.HebrewDate({
		year: 5787,
		month: 6,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(55, hd.getWeekOfYear());
}

function testHebrewDateGetDayOfYearFirstDay() {
	var hd = new ilib.Date.HebrewDate({
		year: 5771,
		month: 7,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getDayOfYear());
}

function testHebrewDateGetDayOfYearMidYear() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 1,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(178, hd.getDayOfYear());
}

function testHebrewDateGetDayOfYearMidYearLeap() {
    var hd = new ilib.Date.HebrewDate({
		year: 5774,
		month: 1,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(209, hd.getDayOfYear());
}

function testHebrewDateGetDayOfYearLastDay() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 6,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(354, hd.getDayOfYear());
}

function testHebrewDateGetDayOfYearLastDayLeapYear() {
    var hd = new ilib.Date.HebrewDate({
		year: 5774,
		month: 6,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(385, hd.getDayOfYear());
}

function testHebrewDateGetWeekOfMonth0() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 9,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth1() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 9,
		day: 2
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth2() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 9,
		day: 11
	});
    assertNotNull(hd);
    
    assertEquals(2, hd.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth3() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 9,
		day: 20
	});
    assertNotNull(hd);
    
    assertEquals(3, hd.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth4() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 9,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth5() {
	var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 1,
		day: 30
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth6() {
	var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 4,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth7() {
	var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 5,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth8() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 6,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth9() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 7,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonth10() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 8,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("he-IL"));
}

function testHebrewDateGetWeekOfMonthUS() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 8,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("en-US"));
}

function testHebrewDateGetWeekOfMonthDE() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 8,
		day: 1
	});
    assertNotNull(hd);
    
    // weeks in Germany start on Monday, and 8/1 is a Saturday, so it is at the 
    // end of the preceding week.
    assertEquals(0, hd.getWeekOfMonth("de-DE"));
}

function testHebrewDateGetEraAM() {
    var hd = new ilib.Date.HebrewDate({
		year: 5772,
		month: 5,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getEra());
}

function testHebrewDateGetEraBAM() {
    var hd = new ilib.Date.HebrewDate({
		year: -46,
		month: 5,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0
		
	});
    assertNotNull(hd);
    
    assertEquals(-1, hd.getEra());
}

function testHebrewDateGetEraAMYear1() {
    var hd = new ilib.Date.HebrewDate({
		year: 1,
		month: 1,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getEra());
}

function testHebrewDateGetEraBAMYear0() {
    var hd = new ilib.Date.HebrewDate({
		year: 0,
		month: 12,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(-1, hd.getEra());
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
    
    assertEquals("local", gd.getTimeZone());
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
    
    assertEquals("local", gd.getTimeZone());
}

function testHebrewDateInitWithUnixTimeRightTimeZone() {
    var gd = new ilib.Date.HebrewDate({
    	unixtime: 0
    });
    assertNotNull(gd);
    
    assertEquals("local", gd.getTimeZone());
}

function testHebrewDateInitWithJDRightTimeZone() {
    var gd = new ilib.Date.HebrewDate({
    	julianday: 0
    });
    assertNotNull(gd);
    
    assertEquals("local", gd.getTimeZone());
}

function testHebrewDateInitWithRDRightTimeZone() {
    var gd = new ilib.Date.HebrewDate({
    	rd: 0
    });
    assertNotNull(gd);
    
    assertEquals("local", gd.getTimeZone());
}

function testHebrewDateRoundTripConstruction() {
    var hd = new ilib.Date.HebrewDate({
    	year: 5775,
    	month: 8,
    	day: 10,
    	timezone: "local"
    });
    assertNotNull(hd);
    // console.log("hd is " + JSON.stringify(hd, undefined, 4));
    
    var u = hd.getTime();
    // console.log("unixtime is " + u);
    var hd2 = new ilib.Date.HebrewDate({
    	unixtime: u,
    	timezone: "local"
    });
    // console.log("hd2 is " + JSON.stringify(hd2, undefined, 4));
    assertEquals(hd.getTimeZone(), hd2.getTimeZone());
    assertEquals(hd.getYears(), hd2.getYears());
    assertEquals(hd.getMonths(), hd2.getMonths());
    assertEquals(hd.getDays(), hd2.getDays());
    assertEquals(hd.getHours(), hd2.getHours());
    assertEquals(hd.getMinutes(), hd2.getMinutes());
    assertEquals(hd.getSeconds(), hd2.getSeconds());
}

function testHebrewDateRoundTripConstruction2() {
    var hd = new ilib.Date.HebrewDate({
    	year: 5775,
    	month: 8,
    	day: 10,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(hd);
    // console.log("hd is " + JSON.stringify(hd, undefined, 4));
    
    var u = hd.getTime();
    // console.log("unixtime is " + u);
    var hd2 = new ilib.Date.HebrewDate({
    	unixtime: u,
    	timezone: "America/Los_Angeles"
    });
    // console.log("hd2 is " + JSON.stringify(hd2, undefined, 4));
    assertEquals(hd.getTimeZone(), hd2.getTimeZone());
    assertEquals(hd.getYears(), hd2.getYears());
    assertEquals(hd.getMonths(), hd2.getMonths());
    assertEquals(hd.getDays(), hd2.getDays());
    assertEquals(hd.getHours(), hd2.getHours());
    assertEquals(hd.getMinutes(), hd2.getMinutes());
    assertEquals(hd.getSeconds(), hd2.getSeconds());
}
