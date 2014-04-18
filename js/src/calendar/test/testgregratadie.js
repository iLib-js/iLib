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
        
        assertEquals(testDates[i][0] - ilib.Date.GregRataDie.epoch, rd.getRataDie());
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
    assertEquals(rdn-5, rd.onOrBeforeRd(0));
}

function testGregRataDieOnOrBeforeMon() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-4, rd.onOrBeforeRd(1));
}

function testGregRataDieOnOrBeforeTue() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-3, rd.onOrBeforeRd(2));
}

function testGregRataDieOnOrBeforeWed() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-2, rd.onOrBeforeRd(3));
}

function testGregRataDieOnOrBeforeThu() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-1, rd.onOrBeforeRd(4));
}

function testGregRataDieOnOrBeforeFri() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn, rd.onOrBeforeRd(5));
}

function testGregRataDieOnOrBeforeSat() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-6, rd.onOrBeforeRd(6));
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
    assertEquals(rdn-5, rd.onOrBeforeRd(0));
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
    assertEquals(rdn+2, rd.onOrAfterRd(0));
}

function testGregRataDieOnOrAfterMon() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+3, rd.onOrAfterRd(1));
}

function testGregRataDieOnOrAfterTue() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+4, rd.onOrAfterRd(2));
}

function testGregRataDieOnOrAfterWed() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+5, rd.onOrAfterRd(3));
}

function testGregRataDieOnOrAfterThu() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+6, rd.onOrAfterRd(4));
}

function testGregRataDieOnOrAfterFri() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn, rd.onOrAfterRd(5));
}

function testGregRataDieOnOrAfterSat() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+1, rd.onOrAfterRd(6));
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
    assertEquals(rdn-5, rd.beforeRd(0));
}

function testGregRataDieBeforeMon() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-4, rd.beforeRd(1));
}

function testGregRataDieBeforeTue() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-3, rd.beforeRd(2));
}

function testGregRataDieBeforeWed() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-2, rd.beforeRd(3));
}

function testGregRataDieBeforeThu() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-1, rd.beforeRd(4));
}

function testGregRataDieBeforeFri() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-7, rd.beforeRd(5));
}

function testGregRataDieBeforeSat() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn-6, rd.beforeRd(6));
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
    assertEquals(rdn+2, rd.afterRd(0));
}

function testGregRataDieAfterMon() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+3, rd.afterRd(1));
}

function testGregRataDieAfterTue() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+4, rd.afterRd(2));
}

function testGregRataDieAfterWed() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+5, rd.afterRd(3));
}

function testGregRataDieAfterThu() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+6, rd.afterRd(4));
}

function testGregRataDieAfterFri() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+7, rd.afterRd(5));
}

function testGregRataDieAfterSat() {
    var rd = new ilib.Date.GregRataDie({
    	year: 2010, 
    	month: 1, 
    	day: 1
    });
    assertNotNull(rd);
    
    var rdn = rd.getRataDie();
    
    assertEquals(rdn+1, rd.afterRd(6));
}

function testGregRataDieJan1Midnight() {
    var rd = new ilib.Date.GregRataDie({julianday: 2455197.5});
    assertNotNull(rd);
    
    assertEquals(733773, rd.getRataDie());
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
