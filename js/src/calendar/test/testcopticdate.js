/*
 * testcopticdate.js - test the coptic date object
 * 
 * Copyright © 2015, JEDLSoft
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

function testCopticDateConstructor() {
	var cd = new ilib.Date.CopticDate();
	
	assertNotNull(cd);
}

/* coptic date is rd 366 + epoch */
function testCopticDateConstructorFromJD() {
    var cd = new ilib.Date.CopticDate({
		julianday: 1721790.75,
		timezone: "Etc/UTC"
	});
    
    assertEquals('object', typeof(cd));
    assertEquals(2, cd.getYears());
    assertEquals(1, cd.getMonths());
    assertEquals(3, cd.getDays());
    assertEquals(6, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateConstructorUnixTime() {
    var cd = new ilib.Date.CopticDate({
    	unixtime: 61000,
		timezone: "Etc/UTC"
    });
    assertNotNull(cd);
    
    assertEquals("year", 1969, cd.getYears());
    assertEquals("month", 12, cd.getMonths());
    assertEquals("day", 19, cd.getDays());
    assertEquals("hour", 0, cd.getHours());
    assertEquals("minute", 1, cd.getMinutes());
    assertEquals("second", 1, cd.getSeconds());
    assertEquals("millisecond", 0, cd.getMilliseconds());
}

function testCopticDateAfterLeapYear() {
    var cd = new ilib.Date.CopticDate({
		julianday: 1723071.9,
		timezone: "Etc/UTC"
	});
    
    assertEquals('object', typeof(cd));
    assertEquals(5, cd.getYears());
    assertEquals(7, cd.getMonths());
    assertEquals(7, cd.getDays());
    assertEquals(9, cd.getHours());
    assertEquals(36, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateJan31Midnight() {
    var cd = new ilib.Date.CopticDate({rd: 734548,	timezone: "Etc/UTC"});  // Jan 31, 2012 12:00am
    
    assertEquals('object', typeof(cd));
    assertEquals(2012, cd.getYears());
    assertEquals(1, cd.getMonths());
    assertEquals(31, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateJan31Noon() {
    var cd = new ilib.Date.CopticDate({rd: 734548.5, timezone: "Etc/UTC"});  // Jan 31, 2012 12:00pm
    
    assertEquals('object', typeof(cd));
    assertEquals(2012, cd.getYears());
    assertEquals(1, cd.getMonths());
    assertEquals(31, cd.getDays());
    assertEquals(12, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateFeb1() {
    var cd = new ilib.Date.CopticDate({rd: 734549.5, timezone: "Etc/UTC"});  // Feb 1, 2012 12:00pm
    
    assertEquals('object', typeof(cd));
    assertEquals(2012, cd.getYears());
    assertEquals(2, cd.getMonths());
    assertEquals(1, cd.getDays());
    assertEquals(12, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateFeb28LeapYear() {
    var cd = new ilib.Date.CopticDate({rd: 734576.5, timezone: "Etc/UTC"});  // Feb 28, 2012 12:00pm
    
    assertEquals('object', typeof(cd));
    assertEquals(2012, cd.getYears());
    assertEquals(2, cd.getMonths());
    assertEquals(28, cd.getDays());
    assertEquals(12, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateFeb29LeapYear() {
    var cd = new ilib.Date.CopticDate({rd: 734577.5, timezone: "Etc/UTC"});  // Feb 29, 2012 12:00pm
    
    assertEquals('object', typeof(cd));
    assertEquals(2012, cd.getYears());
    assertEquals(2, cd.getMonths());
    assertEquals(29, cd.getDays());
    assertEquals(12, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateMar1LeapYear() {
    var cd = new ilib.Date.CopticDate({rd: 734578.5, timezone: "Etc/UTC"});  // Mar 1, 2012 12:00pm
    
    assertEquals('object', typeof(cd));
    assertEquals(2012, cd.getYears());
    assertEquals(3, cd.getMonths());
    assertEquals(1, cd.getDays());
    assertEquals(12, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateMar31LeapYear() {
    var cd = new ilib.Date.CopticDate({rd: 734608.5, timezone: "Etc/UTC"});  // Mar 31, 2012 12:00pm
    
    assertEquals('object', typeof(cd));
    assertEquals(2012, cd.getYears());
    assertEquals(3, cd.getMonths());
    assertEquals(31, cd.getDays());
    assertEquals(12, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateApr1LeapYear() {
    var cd = new ilib.Date.CopticDate({rd: 734609.5, timezone: "Etc/UTC"});  // Apr 1, 2012 12:00pm
    
    assertEquals('object', typeof(cd));
    assertEquals(2012, cd.getYears());
    assertEquals(4, cd.getMonths());
    assertEquals(1, cd.getDays());
    assertEquals(12, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateDec31LeapYear() {
    var cd = new ilib.Date.CopticDate({rd: 734883.5, timezone: "Etc/UTC"});  // Dec 31, 2012 12:00pm
    
    assertEquals('object', typeof(cd));
    assertEquals(2012, cd.getYears());
    assertEquals(12, cd.getMonths());
    assertEquals(31, cd.getDays());
    assertEquals(12, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateJan1NonLeapYear() {
    var cd = new ilib.Date.CopticDate({rd: 734884.5, timezone: "Etc/UTC"});  // Jan 1, 2013 12:00pm
    
    assertEquals('object', typeof(cd));
    assertEquals(2013, cd.getYears());
    assertEquals(1, cd.getMonths());
    assertEquals(1, cd.getDays());
    assertEquals(12, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateFeb28NonLeapYear() {
    var cd = new ilib.Date.CopticDate({rd: 734942.5, timezone: "Etc/UTC"});  // Feb 28, 2013 12:00pm
    
    assertEquals('object', typeof(cd));
    assertEquals(2013, cd.getYears());
    assertEquals(2, cd.getMonths());
    assertEquals(28, cd.getDays());
    assertEquals(12, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateMar1NonLeapYear() {
    var cd = new ilib.Date.CopticDate({rd: 734943.5, timezone: "Etc/UTC"});  // Mar 1, 2013 12:00pm
    
    assertEquals('object', typeof(cd));
    assertEquals(2013, cd.getYears());
    assertEquals(3, cd.getMonths());
    assertEquals(1, cd.getDays());
    assertEquals(12, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateMar31NonLeapYear() {
    var cd = new ilib.Date.CopticDate({rd: 734973.5, timezone: "Etc/UTC"});  // Mar 31, 2013 12:00pm
    
    assertEquals('object', typeof(cd));
    assertEquals(2013, cd.getYears());
    assertEquals(3, cd.getMonths());
    assertEquals(31, cd.getDays());
    assertEquals(12, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateApr1NonLeapYear() {
    var cd = new ilib.Date.CopticDate({rd: 734974.5, timezone: "Etc/UTC"});  // Apr 1, 2013 12:00pm
    
    assertEquals('object', typeof(cd));
    assertEquals(2013, cd.getYears());
    assertEquals(4, cd.getMonths());
    assertEquals(1, cd.getDays());
    assertEquals(12, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateAfterCentury() {
    var cd = new ilib.Date.CopticDate({
		julianday: 1758231.8, 
		timezone: "Etc/UTC"
	});
    
    assertEquals('object', typeof(cd));
    assertEquals(101, cd.getYears());
    assertEquals(10, cd.getMonths());
    assertEquals(11, cd.getDays());
    assertEquals(7, cd.getHours());
    assertEquals(12, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateAfterQuadCentury() {
    var cd = new ilib.Date.CopticDate({
		julianday: 1867706.833333333333, 
		timezone: "Etc/UTC"
	});
    
    assertEquals('object', typeof(cd));
    assertEquals(401, cd.getYears());
    assertEquals(7, cd.getMonths());
    assertEquals(3, cd.getDays());
    assertEquals(8, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateEndOfYearMinus1Rd() {
    var cd = new ilib.Date.CopticDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(cd));
    assertEquals(-1, cd.getYears());
    assertEquals(12, cd.getMonths());
    assertEquals(31, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateBeginningOfYearRd() {
    var cd = new ilib.Date.CopticDate({rd: 1, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(cd));
    assertEquals(1, cd.getYears());
    assertEquals(1, cd.getMonths());
    assertEquals(1, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateAlmostEndOfYearRd() {
    var cd = new ilib.Date.CopticDate({rd: 364, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(cd));
    assertEquals(1, cd.getYears());
    assertEquals(12, cd.getMonths());
    assertEquals(30, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateEndOfYearRd() {
    var cd = new ilib.Date.CopticDate({rd: 365, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(cd));
    assertEquals(1, cd.getYears());
    assertEquals(12, cd.getMonths());
    assertEquals(31, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateBeginningOfYear2Rd() {
    var cd = new ilib.Date.CopticDate({rd: 366, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(cd));
    assertEquals(2, cd.getYears());
    assertEquals(1, cd.getMonths());
    assertEquals(1, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

var testDates = [
//   jd         year   month  day  hour  minute  second  millisecond  dayofweek
	[1507231.5, -870,  12,    6,   0,    0,      0,      0,           0],
	[1660037.5, -451,  4,     12,  0,    0,      0,      0,           3],
	[1746893.5, -213,  1,     29,  0,    0,      0,      0,           3],
	[1770641.5, -148,  2,     5,   0,    0,      0,      0,           0],
	[1892731.5, 186,   5,     12,  0,    0,      0,      0,           3],
	[1931579.5, 292,   9,     23,  0,    0,      0,      0,           1],
	[1974851.5, 411,   3,     11,  0,    0,      0,      0,           6],
	[2091164.5, 729,   8,     24,  0,    0,      0,      0,           0],
	[2121509.5, 812,   9,     23,  0,    0,      0,      0,           0],
	[2155779.5, 906,   7,     20,  0,    0,      0,      0,           5],
	[2174029.5, 956,   7,     7,   0,    0,      0,      0,           6],
	[2191584.5, 1004,  7,     30,  0,    0,      0,      0,           5],
	[2195261.5, 1014,  8,     25,  0,    0,      0,      0,           0],
	[2229274.5, 1107,  10,    10,  0,    0,      0,      0,           0],
	[2245580.5, 1152,  5,     29,  0,    0,      0,      0,           3],
	[2266100.5, 1208,  8,     5,   0,    0,      0,      0,           6],
	[2288542.5, 1270,  1,     12,  0,    0,      0,      0,           6],
	[2290901.5, 1276,  6,     29,  0,    0,      0,      0,           6],
	[2323140.5, 1364,  10,    6,   0,    0,      0,      0,           3],
	[2334848.5, 1396,  10,    26,  0,    0,      0,      0,           0],
	[2348020.5, 1432,  11,    19,  0,    0,      0,      0,           5],
	[2366978.5, 1484,  10,    14,  0,    0,      0,      0,           0],
	[2385648.5, 1535,  11,    27,  0,    0,      0,      0,           1],
	[2392825.5, 1555,  7,     19,  0,    0,      0,      0,           3],
	[2416223.5, 1619,  8,     11,  0,    0,      0,      0,           0],
	[2425848.5, 1645,  12,    19,  0,    0,      0,      0,           0],
	[2430266.5, 1658,  1,     19,  0,    0,      0,      0,           1],
	[2430833.5, 1659,  8,     11,  0,    0,      0,      0,           1],
	[2431004.5, 1660,  1,     26,  0,    0,      0,      0,           4],
	[2448698.5, 1708,  7,     8,   0,    0,      0,      0,           2],
	[2450138.5, 1712,  6,     17,  0,    0,      0,      0,           0],
	[2465737.5, 1755,  3,     1,   0,    0,      0,      0,           3],
	[2486076.5, 1810,  11,    11,  0,    0,      0,      0,           0]
];

function testCopticDateConvert() {
    var cd;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date of " + JSON.stringify(cd));
        
        cd = new ilib.Date.EthiopicDate({
        	julianday: testDates[i][0], 
        	timezone: "Etc/UTC"
        });
    
        assertEquals('object', typeof(cd));
        assertEquals(testDates[i][1], cd.getYears());
        assertEquals(testDates[i][2], cd.getMonths());
        assertEquals(testDates[i][3], cd.getDays());
        assertEquals(testDates[i][4], cd.getHours());
        assertEquals(testDates[i][5], cd.getMinutes());
        assertEquals(testDates[i][6], cd.getSeconds());
        assertEquals(testDates[i][7], cd.getMilliseconds());
        assertEquals(testDates[i][8], cd.getDayOfWeek());
    }
}

function testEthiopicDateConstructorFull() {
	var cd = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 9,
		day: 23,
		hour: 16,
		minute: 7,
		second: 12,
		millisecond: 123
	});
	
	assertNotNull(cd);
	
	assertEquals(2011, cd.getYears());
	assertEquals(9, cd.getMonths());
	assertEquals(23, cd.getDays());
	assertEquals(16, cd.getHours());
	assertEquals(7, cd.getMinutes());
	assertEquals(12, cd.getSeconds());
	assertEquals(123, cd.getMilliseconds());
}

function testCopticDateConstructorFullWithStrings() {
	var cd = new ilib.Date.CopticDate({
		year: "2011", 
		month: "9",
		day: "23", 
		hour: "16", 
		minute: "7", 
		second: "12", 
		millisecond: "123"
	});
	
	assertNotNull(cd);
	
	assertEquals(2011, cd.getYears());
	assertEquals(9, cd.getMonths());
	assertEquals(23, cd.getDays());
	assertEquals(16, cd.getHours());
	assertEquals(7, cd.getMinutes());
	assertEquals(12, cd.getSeconds());
	assertEquals(123, cd.getMilliseconds());
}

function testCopticDateConstructorCopy() {
    var cd = new ilib.Date.CopticDate({
        year: 2011, 
        month: 9, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123
    });
    
    assertNotNull(cd);
    
    assertEquals(2011, cd.getYears());
    assertEquals(9, cd.getMonths());
    assertEquals(23, cd.getDays());
    assertEquals(16, cd.getHours());
    assertEquals(7, cd.getMinutes());
    assertEquals(12, cd.getSeconds());
    assertEquals(123, cd.getMilliseconds());
}

function testCopticDateGetJulianDay() {
    var cd;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date " + JSON.stringify(cd));
        
        cd = new ilib.Date.CopticDate({
            year: testDates[i][1], 
            month: testDates[i][2], 
            day: testDates[i][3],
            hour: testDates[i][4],
            minute: testDates[i][5],
            second: testDates[i][6],
            millisecond: testDates[i][7],
            timezone: "Etc/UTC"
        });
    
        assertEquals('object', typeof(cd));
        info("calculated julian day is " + cd.getJulianDay());
        assertEquals(testDates[i][0], cd.getJulianDay());
        assertEquals(testDates[i][8], cd.getDayOfWeek());
    }
}

function testCopticDateSetYears() {
	var cd = new ilib.Date.CopticDate();
	
	assertNotNull(cd);
	
	cd.setYears(123);
	
	assertEquals(123, cd.getYears());
}

function testCopticDateSetMonths() {
	var cd = new ilib.Date.CopticDate();
	
	assertNotNull(cd);
	
	cd.setMonths(7);
	
	assertEquals(7, cd.getMonths());
}

function testCopticDateSetDays() {
	var cd = new ilib.Date.CopticDate();
	
	assertNotNull(cd);
	
	cd.setDays(12);
	
	assertEquals(12, cd.getDays());
}

function testCopticDateSetHours() {
	var cd = new ilib.Date.CopticDate();
	
	assertNotNull(cd);
	
	cd.setHours(12);
	
	assertEquals(12, cd.getHours());
}

function testCopticDateSetMinutes() {
	var cd = new ilib.Date.CopticDate();
	
	assertNotNull(cd);
	
	cd.setMinutes(13);
	
	assertEquals(13, cd.getMinutes());
}

function testCopticDateSetSeconds() {
	var cd = new ilib.Date.CopticDate();
	
	assertNotNull(cd);
	
	cd.setSeconds(23);
	
	assertEquals(23, cd.getSeconds());
}

function testCopticDateSetMilliseconds() {
	var cd = new ilib.Date.CopticDate();
	
	assertNotNull(cd);
	
	cd.setMilliseconds(123);
	
	assertEquals(123, cd.getMilliseconds());
}

function testCopticDateTestGetTimeZero() {
    var cd = new ilib.Date.CopticDate({
		year: 1969,
		month: 12,
		day: 19,
        timezone: "Etc/UTC"
	});
    assertNotNull(cd);
    
    assertEquals(0, cd.getTime());
}

function testCopticDateTestGetTime() {
    var cd = new ilib.Date.CopticDate({
		year: 1969,
		month: 12,
		day: 21,
		hour: 8,
		minute: 30,
        timezone: "Etc/UTC"
	});
    assertNotNull(cd);
    
    assertEquals(203400000, cd.getTime());
}

function testCopticDateTestGetTimeTooEarly() {
    var cd = new ilib.Date.CopticDate({
		year: 1960,
		month: 1,
		day: 1
	});
    assertNotNull(cd);
    
    assertEquals(-1, cd.getTime());
}

function testCopticDateTestGetTimeTooLate() {
    var cd = new ilib.Date.CopticDate({
		year: 2040,
		month: 1,
		day: 1
	});
    assertNotNull(cd);
    
    assertEquals(-1, cd.getTime());
}

function testCopticDateTestSetTime1() {
    var cd = new ilib.Date.CopticDate({
    	year: 1969, 
    	month: 12, 
    	day: 19,
        timezone: "Etc/UTC"
    });
    assertNotNull(cd);
    assertEquals(0, cd.getTime());
    
    cd.setTime(86400000*3 + 3600000*8 + 60000*30 + 3000);
    
    assertEquals(1969, cd.getYears());
    assertEquals(12, cd.getMonths());
    assertEquals(22, cd.getDays());
    assertEquals(8, cd.getHours());
    assertEquals(30, cd.getMinutes());
    assertEquals(3, cd.getSeconds());
}

function testCopticDateTestSetTimeZero() {
    var cd = new ilib.Date.CopticDate({
    	timezone: "Etc/UTC",
    	year: -1, 
    	month: 1, 
    	day: 1,
	   	hour: 1,
	   	minute: 1,
	   	second: 1,
	   	millisecond: 1
    });
    assertNotNull(cd);
    
    cd.setTime(0);
    
    assertEquals(1969, cd.getYears());
    assertEquals(12, cd.getMonths());
    assertEquals(19, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
}

function testCopticDateGetTimeZone() {
    var cd = new ilib.Date.CopticDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(cd);
    
    assertEquals("America/Los_Angeles", cd.getTimeZone());
}

function testCopticDateGetTimeZoneDefault() {
    var cd = new ilib.Date.CopticDate({
    	year: 2011, 
    	month: 3, 
    	day: 8
    });
    assertNotNull(cd);
    
    assertEquals("local", cd.getTimeZone());
}

function testCopticDateGetTimeZoneByLocaleDE() {
    var cd = new ilib.Date.CopticDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	locale: "de-DE"
    });
    assertNotNull(cd);
    
    assertEquals("Europe/Berlin", cd.getTimeZone());
}

function testCopticDateGetTimeZoneByLocaleJP() {
    var cd = new ilib.Date.CopticDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	locale: "ja-JP"
    });
    assertNotNull(cd);
    
    assertEquals("Asia/Tokyo", cd.getTimeZone());
}

function testCopticDateGetTimeZoneByLocaleBogus() {
    var cd = new ilib.Date.CopticDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	locale: "zz-ZZ"
    });
    assertNotNull(cd);
    
    assertEquals("Etc/UTC", cd.getTimeZone());
}

function testCopticDateCurrentTimeWithTimeZone() {
    var cd = new ilib.Date.CopticDate({
    	timezone: "America/Los_Angeles"
    });
    var d = new Date();
    assertNotNull(cd);
    
    assertRoughlyEquals(d.getTime(), cd.getTime(), 50);
}

function testCopticDateSetTimeZone() {
    var cd = new ilib.Date.CopticDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(cd);
    
    assertEquals("America/Los_Angeles", cd.getTimeZone());
    
    cd.setTimeZone("Asia/Tokyo");
    
    assertEquals("Asia/Tokyo", cd.getTimeZone());
}

function testCopticDateSetTimeZoneNotString() {
    var cd = new ilib.Date.CopticDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(cd);
    
    assertEquals("America/Los_Angeles", cd.getTimeZone());
    
    cd.setTimeZone(345);
    
    assertEquals("America/Los_Angeles", cd.getTimeZone());
}

function testCopticDateSetTimeZoneUndefined() {
    var cd = new ilib.Date.CopticDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(cd);
    
    assertEquals("America/Los_Angeles", cd.getTimeZone());

    // clears it out
    cd.setTimeZone(undefined);
    
    assertEquals("local", cd.getTimeZone());
}

function testCopticDateSetTimeZoneEmpty() {
    var cd = new ilib.Date.CopticDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(cd);
    
    assertEquals("America/Los_Angeles", cd.getTimeZone());
    
    // clears it out
    cd.setTimeZone("");
    
    assertEquals("local", cd.getTimeZone());
}

function testCopticDateInitWithUnixTimeRightTimeZone() {
    var cd = new ilib.Date.CopticDate({
    	unixtime: 0
    });
    assertNotNull(cd);
    
    assertEquals("local", cd.getTimeZone());
}

function testCopticDateInitWithJDRightTimeZone() {
    var cd = new ilib.Date.CopticDate({
    	julianday: 0
    });
    assertNotNull(cd);
    
    assertEquals("local", cd.getTimeZone());
}

function testCopticDateInitWithRDRightTimeZone() {
    var cd = new ilib.Date.CopticDate({
    	rd: 0
    });
    assertNotNull(cd);
    
    assertEquals("local", cd.getTimeZone());
}

function testCopticDateRoundTripConstruction() {
    var jd = new ilib.Date.CopticDate({
    	year: 2014,
    	month: 10,
    	day: 20,
    	timezone: "local"
    });
    assertNotNull(jd);
    // console.log("jd is " + JSON.stringify(jd, undefined, 4));
    
    var u = jd.getTime();
    // console.log("unixtime is " + u);
    var jd2 = new ilib.Date.CopticDate({
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

function testCopticDateRoundTripConstruction2() {
    var jd = new ilib.Date.CopticDate({
    	year: 2014,
    	month: 10,
    	day: 20,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(jd);
    // console.log("jd is " + JSON.stringify(jd, undefined, 4));
    
    var u = jd.getTime();
    // console.log("unixtime is " + u);
    var jd2 = new ilib.Date.CopticDate({
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
