/*
 * testgregratadie.js - test the gregorian RD date object
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

function testGregRataDieConstructor() {
	var rd = new ilib.Date.GregRataDie();
	
	assertNotNull(rd);
}

/* julian date is rd 366.25 + epoch */
function testGregRataDieConstructorFromJD() {
    var rd = new ilib.Date.GregRataDie({julianday: 1721790.75});
    
    assertEquals('object', typeof(rd));
    assertEquals(366.25, rd.getRataDie());
}

function testGregRataDieConstructorFromRD() {
    var rd = new ilib.Date.GregRataDie({rd: 234323});
    
    assertEquals('object', typeof(rd));
    assertEquals(234323, rd.getRataDie());
}

function testGregRataDieConstructorFromUnixtime() {
    var rd = new ilib.Date.GregRataDie({unixtime: 0});
    
    assertEquals('object', typeof(rd));
    assertEquals(719163, rd.getRataDie());
}

function testGregRataDieConstructorFromComponents() {
    var rd = new ilib.Date.GregRataDie({
    	year: 1970,
    	month: 1,
    	day: 1
    });
    
    assertEquals('object', typeof(rd));
    assertEquals(719163, rd.getRataDie());
}

function testGregRataDieAfterLeapYear() {
    var rdobj = new ilib.Date.GregRataDie({julianday: 1723071.9});  // jul 5, 05, 9:36am
    
    var rd = rdobj.getDateComponents();
    
    assertEquals('object', typeof(rd));
    assertEquals(5, rd.year);
    assertEquals(7, rd.month);
    assertEquals(5, rd.day);
    assertEquals(9, rd.hour);
    assertEquals(36, rd.minute);
    assertEquals(0, rd.second);
    assertEquals(0, rd.millisecond);
}

function testGregRataDieJan31Midnight() {
    var rdobj = new ilib.Date.GregRataDie({rd: 734533});  // Jan 31, 2012 12:00am
    
    var rd = rdobj.getDateComponents();
    
    assertEquals('object', typeof(rd));
    assertEquals(2012, rd.year);
    assertEquals(1, rd.month);
    assertEquals(31, rd.day);
    assertEquals(0, rd.hour);
    assertEquals(0, rd.minute);
    assertEquals(0, rd.second);
    assertEquals(0, rd.millisecond);
}

function testGregRataDieJan31Noon() {
    var rdobj = new ilib.Date.GregRataDie({rd: 734533.5});  // Jan 31, 2012 12:00pm
    
    var rd = rdobj.getDateComponents();
    
    assertEquals('object', typeof(rd));
    assertEquals(2012, rd.year);
    assertEquals(1, rd.month);
    assertEquals(31, rd.day);
    assertEquals(12, rd.hour);
    assertEquals(0, rd.minute);
    assertEquals(0, rd.second);
    assertEquals(0, rd.millisecond);
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

function testGregRataDieConvert() {
    var rd;
    
    for (var i = 0; i < testDates.length; i++) {
        rd = new ilib.Date.GregRataDie({julianday: testDates[i][0]});
    
        info("testing jd=" + testDates[i][0]);
        
        var obj = rd.getDateComponents();
        assertEquals('object', typeof(obj));
        assertEquals(testDates[i][1], obj.year);
        assertEquals(testDates[i][2], obj.month);
        assertEquals(testDates[i][3], obj.day);
        assertEquals(testDates[i][4], obj.hour);
        assertEquals(testDates[i][5], obj.minute);
        assertEquals(testDates[i][6], obj.second);
        assertEquals(testDates[i][7], obj.millisecond);
    }
}

function testGregRataDieConstructorFull() {
	var rd = new ilib.Date.GregRataDie({
		year: 2011,
		month: 9, 
		day: 23, 
		hour: 16, 
		minute: 7, 
		second: 12, 
		millisecond: 123
	});
	
	assertNotNull(rd);
	
	assertEquals(734403.6716680903, rd.getRataDie());
}

function testGregRataDieConstructorFullWithStrings() {
	// often you get strings from a UI element instead of numbers... 
	// this constructor should work with numbers or strings
	var rd = new ilib.Date.GregRataDie({
		year: "2011", 
		month: "9",
		day: "23", 
		hour: "16", 
		minute: "7", 
		second: "12", 
		millisecond: "123"
	});
	
	assertNotNull(rd);
	
	assertEquals(734403.6716680903, rd.getRataDie());
}

function testGregRataDieConstructorCopy() {
    var rd2 = new ilib.Date.GregRataDie({
        year: 2011, 
        month: 9, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123
    });
    var rd = new ilib.Date.GregRataDie(rd2);
    
    assertNotNull(rd);
    
    assertEquals(734403.6716680903, rd.getRataDie());
}

function testGregRataDieConstructorEmpty() {
    var rd = new ilib.Date.GregRataDie();
    var now = new Date(rd.getTime()); // compare against the JS date
    assertNotNull(rd);
    
    var obj = rd.getDateComponents();
    
    assertEquals("year", now.getUTCFullYear(), obj.year);
    assertEquals("month", now.getUTCMonth()+1, obj.month); // js date months are 0-11 instead of 1-12 like gregorian dates
    assertEquals("day", now.getUTCDate(), obj.day);
    assertEquals("hour", now.getUTCHours(), obj.hour);
    assertEquals("minute", now.getUTCMinutes(), obj.minute);
    assertEquals("second", now.getUTCSeconds(), obj.second);
    assertEquals("millisecond", now.getUTCMilliseconds(), obj.millisecond);
}

function testGregRataDieConstructorUnixTime() {
    var rd = new ilib.Date.GregRataDie({
    	unixtime: 61000
    });
    assertNotNull(rd);
    
    assertEquals(719163.0007060185, rd.getRataDie());
}

function testGregRataDieGetJulianDay() {
    var rd;
    
    for (var i = 0; i < testDates.length; i++) {
        rd = new ilib.Date.GregRataDie({
            year: testDates[i][1], 
            month: testDates[i][2], 
            day: testDates[i][3],
            hour: testDates[i][4],
            minute: testDates[i][5],
            second: testDates[i][6],
            millisecond: testDates[i][7]
        });
    
        info("testing jd=" + testDates[i][0]);
        
        assertEquals('object', typeof(rd));
        assertEquals(testDates[i][0], rd.getJulianDay());
    }
}

function testGregRataDieTestGetTimeZero() {
    var rd = new ilib.Date.GregRataDie({
    	year: 1970, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    assertEquals(0, rd.getTime());
}

function testGregRataDieTestGetTime() {
    var rd = new ilib.Date.GregRataDie({
    	year: 1970, 
    	month: 1, 
    	day: 3,
	   	hour: 8,
	   	minute: 30
    });
    assertNotNull(rd);
    
    assertEquals(203400000, rd.getTime());
}

function testGregRataDieTestGetTimeTooEarly() {
    var rd = new ilib.Date.GregRataDie({
    	year: 1969, 
    	month: 12, 
    	day: 31
    });
    assertNotNull(rd);
    
    assertEquals(-1, rd.getTime());
}

function testGregRataDieTestGetTimeTooLate() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2038, 
    	month: 1, 
    	day: 20
    });
    assertNotNull(rd);
    
    assertEquals(-1, rd.getTime());
}

// test some of the helper functions to make sure they are producing the right thing
function testGregRataDieOnOrBeforeSun() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    // Sunday on or before is 5 days before 
    assertEquals(rdn-5, rd.onOrBeforeRd(rdn, 0));
}

function testGregRataDieOnOrBeforeMon() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-4, rd.onOrBeforeRd(rdn, 1));
}

function testGregRataDieOnOrBeforeTue() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-3, rd.onOrBeforeRd(rdn, 2));
}

function testGregRataDieOnOrBeforeWed() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-2, rd.onOrBeforeRd(rdn, 3));
}

function testGregRataDieOnOrBeforeThu() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-1, rd.onOrBeforeRd(rdn, 4));
}

function testGregRataDieOnOrBeforeFri() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn, rd.onOrBeforeRd(rdn, 5));
}

function testGregRataDieOnOrBeforeSat() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-6, rd.onOrBeforeRd(rdn, 6));
}

function testGregRataDieOnOrBeforeSunWithTime() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1,
	   	hour: 8
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie(); // contains fractional time for the 8:00am part
    
    // Sunday on or before is 5 days before 
    // Should give an rd result that also contains the fractional time 
    assertEquals(rdn-5, rd.onOrBeforeRd(rdn, 0));
}

function testGregRataDieOnOrAfterSun() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    // Sunday on or before is 5 days before 
    assertEquals(rdn+2, rd.onOrAfterRd(rdn, 0));
}

function testGregRataDieOnOrAfterSunDate() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var date = rd.onOrBefore(0);
    
    // Sunday on or before is 5 days before
    var obj = date.getDateComponents();
    assertEquals(2009, obj.year);
    assertEquals(12, obj.month);
    assertEquals(27, obj.day);
}

function testGregRataDieOnOrAfterMon() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+3, rd.onOrAfterRd(rdn, 1));
}

function testGregRataDieOnOrAfterMonDate() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010,
    	month: 1,
    	day: 1
    });
    assertNotNull(rd);
    
    var date = rd.onOrAfter(1);
    var obj = date.getDateComponents();
    
    assertEquals(2010, obj.year);
    assertEquals(1, obj.month);
    assertEquals(4, obj.day);
}

function testGregRataDieOnOrAfterTue() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+4, rd.onOrAfterRd(rdn, 2));
}

function testGregRataDieOnOrAfterWed() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+5, rd.onOrAfterRd(rdn, 3));
}

function testGregRataDieOnOrAfterThu() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+6, rd.onOrAfterRd(rdn, 4));
}

function testGregRataDieOnOrAfterThuDate() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var date = rd.onOrAfter(4);
    var obj = date.getDateComponents();

    assertEquals(2010, obj.year);
    assertEquals(1, obj.month);
    assertEquals(7, obj.day);
}

function testGregRataDieOnOrAfterFri() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn, rd.onOrAfterRd(rdn, 5));
}

function testGregRataDieOnOrAfterFriDate() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var date = rd.onOrAfter(5);
    var obj = date.getDateComponents();

    assertEquals(2010, obj.year);
    assertEquals(1, obj.month);
    assertEquals(1, obj.day);
}

function testGregRataDieOnOrAfterSat() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+1, rd.onOrAfterRd(rdn, 6));
}

function testGregRataDieBeforeSun() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    // Sunday before is 5 days before 
    assertEquals(rdn-5, rd.beforeRd(rdn, 0));
}

function testGregRataDieBeforeSunDate() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var date = rd.before(0);
    var obj = date.getDateComponents();

    // Sunday before is 5 days before 
    assertEquals(2009, obj.year);
    assertEquals(12, obj.month);
    assertEquals(27, obj.day);
}

function testGregRataDieBeforeMon() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-4, rd.beforeRd(rdn, 1));
}

function testGregRataDieBeforeTue() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-3, rd.beforeRd(rdn, 2));
}

function testGregRataDieBeforeWed() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-2, rd.beforeRd(rdn, 3));
}

function testGregRataDieBeforeThu() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-1, rd.beforeRd(rdn, 4));
}

function testGregRataDieBeforeThuDate() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var date = rd.before(4);
    var obj = date.getDateComponents();

    // Thursday before is 1 day before 
    assertEquals(2009, obj.year);
    assertEquals(12, obj.month);
    assertEquals(31, obj.day);
}

function testGregRataDieBeforeFri() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-7, rd.beforeRd(rdn, 5));
}

function testGregRataDieBeforeFriDate() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var date = rd.before(5);
    var obj = date.getDateComponents();

    // Friday before is 7 days before the current Friday
    assertEquals(2009, obj.year);
    assertEquals(12, obj.month);
    assertEquals(25, obj.day);
}

function testGregRataDieBeforeSat() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-6, rd.beforeRd(rdn, 6));
}

function testGregRataDieAfterSun() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    // Sunday after is 2 days after 
    assertEquals(rdn+2, rd.afterRd(rdn, 0));
}

function testGregRataDieAfterSunDate() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var date = rd.after(0);
    var obj = date.getDateComponents();

    // Sunday after is 2 days after 
    assertEquals(2010, obj.year);
    assertEquals(1, obj.month);
    assertEquals(3, obj.day);
}

function testGregRataDieAfterMon() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+3, rd.afterRd(rdn, 1));
}

function testGregRataDieAfterTue() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+4, rd.afterRd(rdn, 2));
}

function testGregRataDieAfterWed() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+5, rd.afterRd(rdn, 3));
}

function testGregRataDieAfterThu() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+6, rd.afterRd(rdn, 4));
}

function testGregRataDieAfterFri() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+7, rd.afterRd(rdn, 5));
}

function testGregRataDieAfterFriDate() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var date = rd.after(5);
    var obj = date.getDateComponents();

    // Friday after is 7 days after 
    assertEquals(2010, obj.year);
    assertEquals(1, obj.month);
    assertEquals(8, obj.day);
}

function testGregRataDieAfterSat() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+1, rd.afterRd(rdn, 6));
}

function testGregRataDieAfterSatDate() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var date = rd.after(6);
    var obj = date.getDateComponents();

    // Sat after is 1 day after 
    assertEquals(2010, obj.year);
    assertEquals(1, obj.month);
    assertEquals(2, obj.day);
}


function testGregRataDieJan1Midnight() {
    var rd = new ilib.Date.GregRataDie({julianday: 2455197.5});
    assertNotNull(rd);
    
    assertEquals(733773, rd.getRataDie());
}

function testGregRataDieJan1MidnightComponents() {
    var rd = new ilib.Date.GregRataDie({julianday: 2455197.5});
    assertNotNull(rd);
    
    var obj = rd.getDateComponents();
    
    assertEquals(2010, obj.year);
    assertEquals(1, obj.month);
    assertEquals(1, obj.day);
    assertEquals(0, obj.hour);
    assertEquals(0, obj.minute);
    assertEquals(0, obj.second);
    assertEquals(0, obj.millisecond);
}


function testGregRataDieGetRataDie() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2011, 
    	month: 3, 
    	day: 8
    });
    assertNotNull(rd);
    
    assertEquals(734204, rd.getRataDie());
}


// for GF-33596
function testGregRataDieGetTimeWithUnixTime() {
	var d = new Date(Date.UTC(2011, 2, 8, 0, 0, 0, 0));
    var rd = new ilib.Date.GregRataDie({
    	year: 2011,
    	month: 3, 
    	day: 8,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    assertNotNull(rd);
    
    assertEquals(d.getTime(), rd.getTime());
}

function testGregRataDieGetTimeWithUTC() {
	var utc = Date.UTC(2013, 10, 1);
	var d = new Date(utc);
    var rd = new ilib.Date.GregRataDie({
    	unixtime: utc
    });
    assertNotNull(rd);
    
    assertEquals(d.getTime(), rd.getTime());
}

function testGregRataDieGetTimeWithDefaultTime() {
	var d = new Date();
    var rd = new ilib.Date.GregRataDie();
    
    assertNotNull(rd);
    
    assertRoughlyEquals(d.getTime(), rd.getTime(), 100);
}
