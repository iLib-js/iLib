/*
 * testethiopicdate.js - test the ethiopic date object
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

function testEthiopicDateConstructor() {
	var ed = new ilib.Date.EthiopicDate();
	
	assertNotNull(ed);
}

/* ethiopic date is rd 366 + epoch */
function testEthiopicDateConstructorFromJD() {
    var ed = new ilib.Date.EthiopicDate({
		julianday: 1721790.75,
		timezone: "Etc/UTC"
	});
    
    assertEquals('object', typeof(ed));
    assertEquals(2, ed.getYears());
    assertEquals(1, ed.getMonths());
    assertEquals(3, ed.getDays());
    assertEquals(6, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateConstructorUnixTime() {
    var ed = new ilib.Date.EthiopicDate({
    	unixtime: 61000,
		timezone: "Etc/UTC"
    });
    assertNotNull(ed);
    
    assertEquals("year", 1969, ed.getYears());
    assertEquals("month", 12, ed.getMonths());
    assertEquals("day", 19, ed.getDays());
    assertEquals("hour", 0, ed.getHours());
    assertEquals("minute", 1, ed.getMinutes());
    assertEquals("second", 1, ed.getSeconds());
    assertEquals("millisecond", 0, ed.getMilliseconds());
}

function testEthiopicDateAfterLeapYear() {
    var ed = new ilib.Date.EthiopicDate({
		julianday: 1723071.9,
		timezone: "Etc/UTC"
	});
    
    assertEquals('object', typeof(ed));
    assertEquals(5, ed.getYears());
    assertEquals(7, ed.getMonths());
    assertEquals(7, ed.getDays());
    assertEquals(9, ed.getHours());
    assertEquals(36, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateJan31Midnight() {
    var ed = new ilib.Date.EthiopicDate({rd: 734548,	timezone: "Etc/UTC"});  // Jan 31, 2012 12:00am
    
    assertEquals('object', typeof(ed));
    assertEquals(2012, ed.getYears());
    assertEquals(1, ed.getMonths());
    assertEquals(31, ed.getDays());
    assertEquals(0, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateJan31Noon() {
    var ed = new ilib.Date.EthiopicDate({rd: 734548.5, timezone: "Etc/UTC"});  // Jan 31, 2012 12:00pm
    
    assertEquals('object', typeof(ed));
    assertEquals(2012, ed.getYears());
    assertEquals(1, ed.getMonths());
    assertEquals(31, ed.getDays());
    assertEquals(12, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateFeb1() {
    var ed = new ilib.Date.EthiopicDate({rd: 734549.5, timezone: "Etc/UTC"});  // Feb 1, 2012 12:00pm
    
    assertEquals('object', typeof(ed));
    assertEquals(2012, ed.getYears());
    assertEquals(2, ed.getMonths());
    assertEquals(1, ed.getDays());
    assertEquals(12, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateFeb28LeapYear() {
    var ed = new ilib.Date.EthiopicDate({rd: 734576.5, timezone: "Etc/UTC"});  // Feb 28, 2012 12:00pm
    
    assertEquals('object', typeof(ed));
    assertEquals(2012, ed.getYears());
    assertEquals(2, ed.getMonths());
    assertEquals(28, ed.getDays());
    assertEquals(12, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateFeb29LeapYear() {
    var ed = new ilib.Date.EthiopicDate({rd: 734577.5, timezone: "Etc/UTC"});  // Feb 29, 2012 12:00pm
    
    assertEquals('object', typeof(ed));
    assertEquals(2012, ed.getYears());
    assertEquals(2, ed.getMonths());
    assertEquals(29, ed.getDays());
    assertEquals(12, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateMar1LeapYear() {
    var ed = new ilib.Date.EthiopicDate({rd: 734578.5, timezone: "Etc/UTC"});  // Mar 1, 2012 12:00pm
    
    assertEquals('object', typeof(ed));
    assertEquals(2012, ed.getYears());
    assertEquals(3, ed.getMonths());
    assertEquals(1, ed.getDays());
    assertEquals(12, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateMar31LeapYear() {
    var ed = new ilib.Date.EthiopicDate({rd: 734608.5, timezone: "Etc/UTC"});  // Mar 31, 2012 12:00pm
    
    assertEquals('object', typeof(ed));
    assertEquals(2012, ed.getYears());
    assertEquals(3, ed.getMonths());
    assertEquals(31, ed.getDays());
    assertEquals(12, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateApr1LeapYear() {
    var ed = new ilib.Date.EthiopicDate({rd: 734609.5, timezone: "Etc/UTC"});  // Apr 1, 2012 12:00pm
    
    assertEquals('object', typeof(ed));
    assertEquals(2012, ed.getYears());
    assertEquals(4, ed.getMonths());
    assertEquals(1, ed.getDays());
    assertEquals(12, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateDec31LeapYear() {
    var ed = new ilib.Date.EthiopicDate({rd: 734883.5, timezone: "Etc/UTC"});  // Dec 31, 2012 12:00pm
    
    assertEquals('object', typeof(ed));
    assertEquals(2012, ed.getYears());
    assertEquals(12, ed.getMonths());
    assertEquals(31, ed.getDays());
    assertEquals(12, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateJan1NonLeapYear() {
    var ed = new ilib.Date.EthiopicDate({rd: 734884.5, timezone: "Etc/UTC"});  // Jan 1, 2013 12:00pm
    
    assertEquals('object', typeof(ed));
    assertEquals(2013, ed.getYears());
    assertEquals(1, ed.getMonths());
    assertEquals(1, ed.getDays());
    assertEquals(12, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateFeb28NonLeapYear() {
    var ed = new ilib.Date.EthiopicDate({rd: 734942.5, timezone: "Etc/UTC"});  // Feb 28, 2013 12:00pm
    
    assertEquals('object', typeof(ed));
    assertEquals(2013, ed.getYears());
    assertEquals(2, ed.getMonths());
    assertEquals(28, ed.getDays());
    assertEquals(12, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateMar1NonLeapYear() {
    var ed = new ilib.Date.EthiopicDate({rd: 734943.5, timezone: "Etc/UTC"});  // Mar 1, 2013 12:00pm
    
    assertEquals('object', typeof(ed));
    assertEquals(2013, ed.getYears());
    assertEquals(3, ed.getMonths());
    assertEquals(1, ed.getDays());
    assertEquals(12, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateMar31NonLeapYear() {
    var ed = new ilib.Date.EthiopicDate({rd: 734973.5, timezone: "Etc/UTC"});  // Mar 31, 2013 12:00pm
    
    assertEquals('object', typeof(ed));
    assertEquals(2013, ed.getYears());
    assertEquals(3, ed.getMonths());
    assertEquals(31, ed.getDays());
    assertEquals(12, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateApr1NonLeapYear() {
    var ed = new ilib.Date.EthiopicDate({rd: 734974.5, timezone: "Etc/UTC"});  // Apr 1, 2013 12:00pm
    
    assertEquals('object', typeof(ed));
    assertEquals(2013, ed.getYears());
    assertEquals(4, ed.getMonths());
    assertEquals(1, ed.getDays());
    assertEquals(12, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateAfterCentury() {
    var ed = new ilib.Date.EthiopicDate({
		julianday: 1758231.8, 
		timezone: "Etc/UTC"
	});
    
    assertEquals('object', typeof(ed));
    assertEquals(101, ed.getYears());
    assertEquals(10, ed.getMonths());
    assertEquals(11, ed.getDays());
    assertEquals(7, ed.getHours());
    assertEquals(12, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateAfterQuadCentury() {
    var ed = new ilib.Date.EthiopicDate({
		julianday: 1867706.833333333333, 
		timezone: "Etc/UTC"
	});
    
    assertEquals('object', typeof(ed));
    assertEquals(401, ed.getYears());
    assertEquals(7, ed.getMonths());
    assertEquals(3, ed.getDays());
    assertEquals(8, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateEndOfYearMinus1Rd() {
    var ed = new ilib.Date.EthiopicDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(ed));
    assertEquals(-1, ed.getYears());
    assertEquals(12, ed.getMonths());
    assertEquals(31, ed.getDays());
    assertEquals(0, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateBeginningOfYearRd() {
    var ed = new ilib.Date.EthiopicDate({rd: 1, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(ed));
    assertEquals(1, ed.getYears());
    assertEquals(1, ed.getMonths());
    assertEquals(1, ed.getDays());
    assertEquals(0, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateAlmostEndOfYearRd() {
    var ed = new ilib.Date.EthiopicDate({rd: 364, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(ed));
    assertEquals(1, ed.getYears());
    assertEquals(12, ed.getMonths());
    assertEquals(30, ed.getDays());
    assertEquals(0, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateEndOfYearRd() {
    var ed = new ilib.Date.EthiopicDate({rd: 365, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(ed));
    assertEquals(1, ed.getYears());
    assertEquals(12, ed.getMonths());
    assertEquals(31, ed.getDays());
    assertEquals(0, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateBeginningOfYear2Rd() {
    var ed = new ilib.Date.EthiopicDate({rd: 366, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(ed));
    assertEquals(2, ed.getYears());
    assertEquals(1, ed.getMonths());
    assertEquals(1, ed.getDays());
    assertEquals(0, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
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

function testEthiopicDateConvert() {
    var ed;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date of " + JSON.stringify(ed));
        
        ed = new ilib.Date.EthiopicDate({
        	julianday: testDates[i][0], 
        	timezone: "Etc/UTC"
        });
    
        assertEquals('object', typeof(ed));
        assertEquals(testDates[i][1], ed.getYears());
        assertEquals(testDates[i][2], ed.getMonths());
        assertEquals(testDates[i][3], ed.getDays());
        assertEquals(testDates[i][4], ed.getHours());
        assertEquals(testDates[i][5], ed.getMinutes());
        assertEquals(testDates[i][6], ed.getSeconds());
        assertEquals(testDates[i][7], ed.getMilliseconds());
        assertEquals(testDates[i][8], ed.getDayOfWeek());
    }
}

function testEthiopicDateConstructorFull() {
	var ed = new ilib.Date.EthiopicDate({
		year: 2011,
		month: 9,
		day: 23,
		hour: 16,
		minute: 7,
		second: 12,
		millisecond: 123
	});
	
	assertNotNull(ed);
	
	assertEquals(2011, ed.getYears());
	assertEquals(9, ed.getMonths());
	assertEquals(23, ed.getDays());
	assertEquals(16, ed.getHours());
	assertEquals(7, ed.getMinutes());
	assertEquals(12, ed.getSeconds());
	assertEquals(123, ed.getMilliseconds());
}

function testEthiopicDateConstructorFullWithStrings() {
	var ed = new ilib.Date.EthiopicDate({
		year: "2011", 
		month: "9",
		day: "23", 
		hour: "16", 
		minute: "7", 
		second: "12", 
		millisecond: "123"
	});
	
	assertNotNull(ed);
	
	assertEquals(2011, ed.getYears());
	assertEquals(9, ed.getMonths());
	assertEquals(23, ed.getDays());
	assertEquals(16, ed.getHours());
	assertEquals(7, ed.getMinutes());
	assertEquals(12, ed.getSeconds());
	assertEquals(123, ed.getMilliseconds());
}

function testEthiopicDateConstructorCopy() {
    var ed = new ilib.Date.EthiopicDate({
        year: 2011, 
        month: 9, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123
    });
    
    assertNotNull(ed);
    
    assertEquals(2011, ed.getYears());
    assertEquals(9, ed.getMonths());
    assertEquals(23, ed.getDays());
    assertEquals(16, ed.getHours());
    assertEquals(7, ed.getMinutes());
    assertEquals(12, ed.getSeconds());
    assertEquals(123, ed.getMilliseconds());
}

function testEthiopicDateGetJulianDay() {
    var ed;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date " + JSON.stringify(ed));
        
        ed = new ilib.Date.EthiopicDate({
            year: testDates[i][1], 
            month: testDates[i][2], 
            day: testDates[i][3],
            hour: testDates[i][4],
            minute: testDates[i][5],
            second: testDates[i][6],
            millisecond: testDates[i][7],
            timezone: "Etc/UTC"
        });
    
        assertEquals('object', typeof(ed));
        info("calculated julian day is " + ed.getJulianDay());
        assertEquals(testDates[i][0], ed.getJulianDay());
        assertEquals(testDates[i][8], ed.getDayOfWeek());
    }
}

function testEthiopicDateSetYears() {
	var ed = new ilib.Date.EthiopicDate();
	
	assertNotNull(ed);
	
	ed.setYears(123);
	
	assertEquals(123, ed.getYears());
}

function testEthiopicDateSetMonths() {
	var ed = new ilib.Date.EthiopicDate();
	
	assertNotNull(ed);
	
	ed.setMonths(7);
	
	assertEquals(7, ed.getMonths());
}

function testEthiopicDateSetDays() {
	var ed = new ilib.Date.EthiopicDate();
	
	assertNotNull(ed);
	
	ed.setDays(12);
	
	assertEquals(12, ed.getDays());
}

function testEthiopicDateSetHours() {
	var ed = new ilib.Date.EthiopicDate();
	
	assertNotNull(ed);
	
	ed.setHours(12);
	
	assertEquals(12, ed.getHours());
}

function testEthiopicDateSetMinutes() {
	var ed = new ilib.Date.EthiopicDate();
	
	assertNotNull(ed);
	
	ed.setMinutes(13);
	
	assertEquals(13, ed.getMinutes());
}

function testEthiopicDateSetSeconds() {
	var ed = new ilib.Date.EthiopicDate();
	
	assertNotNull(ed);
	
	ed.setSeconds(23);
	
	assertEquals(23, ed.getSeconds());
}

function testEthiopicDateSetMilliseconds() {
	var ed = new ilib.Date.EthiopicDate();
	
	assertNotNull(ed);
	
	ed.setMilliseconds(123);
	
	assertEquals(123, ed.getMilliseconds());
}

function testEthiopicDateTestGetTimeZero() {
    var ed = new ilib.Date.EthiopicDate({
		year: 1969,
		month: 12,
		day: 19,
        timezone: "Etc/UTC"
	});
    assertNotNull(ed);
    
    assertEquals(0, ed.getTime());
}

function testEthiopicDateTestGetTime() {
    var ed = new ilib.Date.EthiopicDate({
		year: 1969,
		month: 12,
		day: 21,
		hour: 8,
		minute: 30,
        timezone: "Etc/UTC"
	});
    assertNotNull(ed);
    
    assertEquals(203400000, ed.getTime());
}

function testEthiopicDateTestGetTimeTooEarly() {
    var ed = new ilib.Date.EthiopicDate({
		year: 1960,
		month: 1,
		day: 1
	});
    assertNotNull(ed);
    
    assertEquals(-1, ed.getTime());
}

function testEthiopicDateTestGetTimeTooLate() {
    var ed = new ilib.Date.EthiopicDate({
		year: 2040,
		month: 1,
		day: 1
	});
    assertNotNull(ed);
    
    assertEquals(-1, ed.getTime());
}

function testEthiopicDateTestSetTime1() {
    var ed = new ilib.Date.EthiopicDate({
    	year: 1969, 
    	month: 12, 
    	day: 19,
        timezone: "Etc/UTC"
    });
    assertNotNull(ed);
    assertEquals(0, ed.getTime());
    
    ed.setTime(86400000*3 + 3600000*8 + 60000*30 + 3000);
    
    assertEquals(1969, ed.getYears());
    assertEquals(12, ed.getMonths());
    assertEquals(22, ed.getDays());
    assertEquals(8, ed.getHours());
    assertEquals(30, ed.getMinutes());
    assertEquals(3, ed.getSeconds());
}

function testEthiopicDateTestSetTimeZero() {
    var ed = new ilib.Date.EthiopicDate({
    	timezone: "Etc/UTC",
    	year: -1, 
    	month: 1, 
    	day: 1,
	   	hour: 1,
	   	minute: 1,
	   	second: 1,
	   	millisecond: 1
    });
    assertNotNull(ed);
    
    ed.setTime(0);
    
    assertEquals(1969, ed.getYears());
    assertEquals(12, ed.getMonths());
    assertEquals(19, ed.getDays());
    assertEquals(0, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
}

function testEthiopicDateGetTimeZone() {
    var ed = new ilib.Date.EthiopicDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(ed);
    
    assertEquals("America/Los_Angeles", ed.getTimeZone());
}

function testEthiopicDateGetTimeZoneDefault() {
    var ed = new ilib.Date.EthiopicDate({
    	year: 2011, 
    	month: 3, 
    	day: 8
    });
    assertNotNull(ed);
    
    assertEquals("local", ed.getTimeZone());
}

function testEthiopicDateGetTimeZoneByLocaleDE() {
    var ed = new ilib.Date.EthiopicDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	locale: "de-DE"
    });
    assertNotNull(ed);
    
    assertEquals("Europe/Berlin", ed.getTimeZone());
}

function testEthiopicDateGetTimeZoneByLocaleJP() {
    var ed = new ilib.Date.EthiopicDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	locale: "ja-JP"
    });
    assertNotNull(ed);
    
    assertEquals("Asia/Tokyo", ed.getTimeZone());
}

function testEthiopicDateGetTimeZoneByLocaleBogus() {
    var ed = new ilib.Date.EthiopicDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	locale: "zz-ZZ"
    });
    assertNotNull(ed);
    
    assertEquals("Etc/UTC", ed.getTimeZone());
}

function testEthiopicDateCurrentTimeWithTimeZone() {
    var ed = new ilib.Date.EthiopicDate({
    	timezone: "America/Los_Angeles"
    });
    var d = new Date();
    assertNotNull(ed);
    
    assertRoughlyEquals(d.getTime(), ed.getTime(), 50);
}

function testEthiopicDateSetTimeZone() {
    var ed = new ilib.Date.EthiopicDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(ed);
    
    assertEquals("America/Los_Angeles", ed.getTimeZone());
    
    ed.setTimeZone("Asia/Tokyo");
    
    assertEquals("Asia/Tokyo", ed.getTimeZone());
}

function testEthiopicDateSetTimeZoneNotString() {
    var ed = new ilib.Date.EthiopicDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(ed);
    
    assertEquals("America/Los_Angeles", ed.getTimeZone());
    
    ed.setTimeZone(345);
    
    assertEquals("America/Los_Angeles", ed.getTimeZone());
}

function testEthiopicDateSetTimeZoneUndefined() {
    var ed = new ilib.Date.EthiopicDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(ed);
    
    assertEquals("America/Los_Angeles", ed.getTimeZone());

    // clears it out
    ed.setTimeZone(undefined);
    
    assertEquals("local", ed.getTimeZone());
}

function testEthiopicDateSetTimeZoneEmpty() {
    var ed = new ilib.Date.EthiopicDate({
    	year: 2011, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(ed);
    
    assertEquals("America/Los_Angeles", ed.getTimeZone());
    
    // clears it out
    ed.setTimeZone("");
    
    assertEquals("local", ed.getTimeZone());
}

function testEthiopicDateInitWithUnixTimeRightTimeZone() {
    var ed = new ilib.Date.EthiopicDate({
    	unixtime: 0
    });
    assertNotNull(ed);
    
    assertEquals("local", ed.getTimeZone());
}

function testEthiopicDateInitWithJDRightTimeZone() {
    var ed = new ilib.Date.EthiopicDate({
    	julianday: 0
    });
    assertNotNull(ed);
    
    assertEquals("local", ed.getTimeZone());
}

function testEthiopicDateInitWithRDRightTimeZone() {
    var ed = new ilib.Date.EthiopicDate({
    	rd: 0
    });
    assertNotNull(ed);
    
    assertEquals("local", ed.getTimeZone());
}

function testEthiopicDateRoundTripConstruction() {
    var jd = new ilib.Date.EthiopicDate({
    	year: 2014,
    	month: 10,
    	day: 20,
    	timezone: "local"
    });
    assertNotNull(jd);
    // console.log("jd is " + JSON.stringify(jd, undefined, 4));
    
    var u = jd.getTime();
    // console.log("unixtime is " + u);
    var jd2 = new ilib.Date.EthiopicDate({
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

function testEthiopicDateRoundTripConstruction2() {
    var jd = new ilib.Date.EthiopicDate({
    	year: 2014,
    	month: 10,
    	day: 20,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(jd);
    // console.log("jd is " + JSON.stringify(jd, undefined, 4));
    
    var u = jd.getTime();
    // console.log("unixtime is " + u);
    var jd2 = new ilib.Date.EthiopicDate({
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
