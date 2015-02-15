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

function testCopticRataDieConstructor() {
	var crd = new ilib.Date.CopticRataDie();
	
	assertNotNull(crd);
}

function testCopticRataDieConstructorComponents() {
	var crd = new ilib.Date.CopticRataDie({
		year: 1,
		month: 1,
		day: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	
	assertNotNull(crd);
	
	assertEquals(1, crd.getRataDie());
}

function testCopticRataDieConstructorComponentsBig() {
	var crd = new ilib.Date.CopticRataDie({
		year: 1731,
		month: 2,
		day: 19,
		hour: 12,
		minute: 30,
		second: 12,
		millisecond: 0
	});
	
	assertNotNull(crd);
	
	assertEquals(631931.5209722222, crd.getRataDie());
}

function testCopticRataDieConstructorRD() {
	var crd = new ilib.Date.CopticRataDie({
		rd: 732323.2342345
	});
	
	assertNotNull(crd);
	
	assertEquals(732323.2342345, crd.getRataDie());
}

function testCopticRataDieConstructorUnixtime() {
	var crd = new ilib.Date.CopticRataDie({
		unixtime: 0
	});
	
	assertNotNull(crd);
	
	assertEquals(615559, crd.getRataDie());
}

function testCopticRataDieConstructorJD() {
	var crd = new ilib.Date.CopticRataDie({
		julianday: 1825028.5 + 734564 
	});
	
	assertNotNull(crd);
	
	assertEquals(734564, crd.getRataDie());
}

function testCopticRataDieGetJulianDay1() {
	var crd = new ilib.Date.CopticRataDie({
		julianday: 1825028.5 + 734564 
	});
	
	assertNotNull(crd);
	
	assertEquals(1825028.5 + 734564, crd.getJulianDay());
}

function testCopticRataDieGetJulianDay2() {
	var crd = new ilib.Date.CopticRataDie({
		unixtime: 0 
	});
	
	assertNotNull(crd);
	
	assertEquals(2440587.5, crd.getJulianDay());
}

function testCopticRataDieGetJulianDay3() {
	var crd = new ilib.Date.CopticRataDie({
		rd: 0 
	});
	
	assertNotNull(crd);
	
	assertEquals(1825028.5, crd.getJulianDay());
}

function testCopticRataDieGetTime1() {
	var crd = new ilib.Date.CopticRataDie({
		unixtime: 0 
	});
	
	assertNotNull(crd);
	
	assertEquals(0, crd.getTime());
}

function testCopticRataDieGetTime2() {
	var crd = new ilib.Date.CopticRataDie({
		julianday: 2440587.5
	});
	
	assertNotNull(crd);
	
	assertEquals(0, crd.getTime());
}

function testCopticRataDieGetTimeTooSmall() {
	var crd = new ilib.Date.CopticRataDie({
		julianday: 2440586.5
	});
	
	assertNotNull(crd);
	
	assertEquals(-1, crd.getTime());
}

function testCopticRataDieGetTimeTooBig() {
	var crd = new ilib.Date.CopticRataDie({
		julianday: 2465443.634803241
	});
	
	assertNotNull(crd);
	
	assertEquals(-1, crd.getTime());
}

function testCopticRataDieGetTimeExtended1() {
	var crd = new ilib.Date.CopticRataDie({
		unixtime: 0 
	});
	
	assertNotNull(crd);
	
	assertEquals(0, crd.getTimeExtended());
}

function testCopticRataDieGetTimeExtended2() {
	var crd = new ilib.Date.CopticRataDie({
		julianday: 2440587.5
	});
	
	assertNotNull(crd);
	
	assertEquals(0, crd.getTimeExtended());
}

function testCopticRataDieGetTimeExtendedTooSmallForRegularGetTime() {
	var crd = new ilib.Date.CopticRataDie({
		julianday: 2440586.5
	});
	
	assertNotNull(crd);
	
	assertEquals(-86400000, crd.getTimeExtended());
}

function testCopticRataDieGetTimeExtendedTooBigForRegularGetTime() {
	var crd = new ilib.Date.CopticRataDie({
		julianday: 2465443.634803241
	});
	
	assertNotNull(crd);
	
	assertEquals(2147570047000, crd.getTimeExtended());
}


function testCopticDateConstructor() {
	var cd = new ilib.Date.CopticDate();
	
	assertNotNull(cd);
}

/* Coptic date is rd 367 + epoch */
function testCopticDateConstructorFromJD() {
    var cd = new ilib.Date.CopticDate({
		julianday: 1825395.5,
		timezone: "Etc/UTC"
	});
    
    //console.log("testCopticDateConstructorFromJD: " + JSON.stringify(cd, undefined, 4));
    assertEquals('object', typeof(cd));
    assertEquals(2, cd.getYears());
    assertEquals(1, cd.getMonths());
    assertEquals(2, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateConstructorUnixTime() {
    var cd = new ilib.Date.CopticDate({
    	unixtime: 0,
		timezone: "Etc/UTC"
    });
    assertNotNull(cd);
    
    assertEquals("year", 1686, cd.getYears());
    assertEquals("month", 4, cd.getMonths());
    assertEquals("day", 23, cd.getDays());
    assertEquals("hour", 0, cd.getHours());
    assertEquals("minute", 0, cd.getMinutes());
    assertEquals("second", 0, cd.getSeconds());
    assertEquals("millisecond", 0, cd.getMilliseconds());
}

function testCopticDateAfterLeapYear() {
	// year 3 of every 4 year cycle is a leap year in the Coptic calendar
    var cd = new ilib.Date.CopticDate({
		julianday: 1826125.5, // Coptic epoch + 1 + 2 * 365 + 366
		timezone: "Etc/UTC"
	});
    
    assertEquals('object', typeof(cd));
    assertEquals(4, cd.getYears());
    assertEquals(1, cd.getMonths());
    assertEquals(1, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

// next two test the transition between months at 6am
function testCopticDateFirstMonthEndRightBeforeDateChange() {
    var cd = new ilib.Date.CopticDate({rd: 632263.9583333333, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(cd));
    assertEquals(1732, cd.getYears()); // 2015 Gregorian
    assertEquals(1, cd.getMonths());   // Sept
    assertEquals(15, cd.getDays());    // 27
    assertEquals(23, cd.getHours());   // 6am
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateSecondMonthStartNoonAfterDateChange() {
    var cd = new ilib.Date.CopticDate({rd: 632265.2083333333, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(cd));
    assertEquals(1732, cd.getYears()); // 2015 Gregorian
    assertEquals(1, cd.getMonths());   // Sept
    assertEquals(17, cd.getDays());    // 28
    assertEquals(5, cd.getHours());    // 12:00pm
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

// next two test the year transition from a leap year to a regular year
function testCopticDateLastMonthLeapYear() {
    var cd = new ilib.Date.CopticDate({rd: 632245, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(cd));
    assertEquals(1731, cd.getYears());
    assertEquals(13, cd.getMonths());
    assertEquals(3, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateFirstMonthAfterLeapYear() {
    var cd = new ilib.Date.CopticDate({rd: 632246, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(cd));
    assertEquals(1731, cd.getYears());
    assertEquals(13, cd.getMonths());
    assertEquals(4, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

// next two test a regular month transition
function testCopticDateThirdMonthEnd() {
    var cd = new ilib.Date.CopticDate({rd: 632335, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(cd));
    assertEquals(1732, cd.getYears());
    assertEquals(3, cd.getMonths());
    assertEquals(27, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateFourthMonthStart() {
    var cd = new ilib.Date.CopticDate({rd: 632336, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(cd));
    assertEquals(1732, cd.getYears());
    assertEquals(3, cd.getMonths());
    assertEquals(28, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

// next two test a transition from a non-leap year to a non-leap year
function testCopticDateLastMonthEndNonLeapYear() {
    var cd = new ilib.Date.CopticDate({rd: 632610, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(cd));
    assertEquals(1732, cd.getYears());
    assertEquals(13, cd.getMonths());
    assertEquals(2, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateFirstMonthStartNonLeapYear() {
    var cd = new ilib.Date.CopticDate({rd: 632611, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(cd));
    assertEquals(1732, cd.getYears());
    assertEquals(13, cd.getMonths());
    assertEquals(3, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateEndOfYearZeroRd() {
    var cd = new ilib.Date.CopticDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(cd));
    assertEquals(0, cd.getYears());
    assertEquals(13, cd.getMonths());
    assertEquals(5, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateBeginningOfYearOneRd() {
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

function testCopticDateAlmostEndOfYearOneRd() {
    var cd = new ilib.Date.CopticDate({rd: 364, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(cd));
    assertEquals(1, cd.getYears());
    assertEquals(13, cd.getMonths());
    assertEquals(4, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
    assertEquals(0, cd.getMilliseconds());
}

function testCopticDateEndOfYearOneRd() {
    var cd = new ilib.Date.CopticDate({rd: 365, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(cd));
    assertEquals(1, cd.getYears());
    assertEquals(13, cd.getMonths());
    assertEquals(5, cd.getDays());
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
	[1507231.5, -870,	  12,	6,	0,	0,	0,	0,	0],
	[1660037.5, -451,	  4,	12,	0,	0,	0,	0,	3],
	[1746893.5, -213,	  1,	29,	0,	0,	0,	0,	3],
	[1770641.5, -148,	  2,	5,	0,	0,	0,	0,	0],
	[1892731.5, 186,	  5,	12,	0,	0,	0,	0,	3],
	[1931579.5, 292,	  9,	23,	0,	0,	0,	0,	1],
	[1974851.5, 411,	  3,	11,	0,	0,	0,	0,	6],
	[2091164.5, 729,	  8,	24,	0,	0,	0,	0,	0],
	[2121509.5, 812,	  9,	23,	0,	0,	0,	0,	0],
	[2155779.5, 906,	  7,	20,	0,	0,	0,	0,	5],
	[2174029.5, 956,	  7,	7,	0,	0,	0,	0,	6],
	[2191584.5, 1004,	  7,	30,	0,	0,	0,	0,	5],
	[2195261.5, 1014,	  8,	25,	0,	0,	0,	0,	0],
	[2229274.5, 1107,	  10,	10,	0,	0,	0,	0,	0],
	[2245580.5, 1152,	  5,	29,	0,	0,	0,	0,	3],
	[2266100.5, 1208,	  8,	5,	0,	0,	0,	0,	6],
	[2288542.5, 1270,	  1,	12,	0,	0,	0,	0,	6],
	[2290901.5, 1276,	  6,	29,	0,	0,	0,	0,	6],
	[2323140.5, 1364,	  10,	6,	0,	0,	0,	0,	3],
	[2334848.5, 1396,	  10,	26,	0,	0,	0,	0,	0],
	[2348020.5, 1432,	  11,	19,	0,	0,	0,	0,	5],
	[2366978.5, 1484,	  10,	14,	0,	0,	0,	0,	0],
	[2385648.5, 1535,	  11,	27,	0,	0,	0,	0,	1],
	[2392825.5, 1555,	  7,	19,	0,	0,	0,	0,	3],
	[2416223.5, 1619,	  8,	11,	0,	0,	0,	0,	0],
	[2425848.5, 1645,	  12,	19,	0,	0,	0,	0,	0],
	[2430266.5, 1658,	  1,	19,	0,	0,	0,	0,	1],
	[2430833.5, 1659,	  8,	11,	0,	0,	0,	0,	1],
	[2431004.5, 1660,	  1,	26,	0,	0,	0,	0,	4],
	[2448698.5, 1708,	  7,	8,	0,	0,	0,	0,	2],
	[2450138.5, 1712,	  6,	17,	0,	0,	0,	0,	0],
	[2465737.5, 1755,	  3,	1,	0,	0,	0,	0,	3],
	[2486076.5, 1810,	  11,	11,	0,	0,	0,	0,	0]
];

function testCopticDateConvertYears() {
    var cd;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date of " + JSON.stringify(cd));
        
        cd = new ilib.Date.CopticDate({
            julianday: testDates[i][0], 
            timezone: "Etc/UTC"
        });

        assertEquals('object', typeof(cd));
        assertEquals(testDates[i][1], cd.getYears());        
    }
}

function testCopticDateConvertMonths() {
    var cd;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date of " + JSON.stringify(cd));
        
        cd = new ilib.Date.CopticDate({
            julianday: testDates[i][0], 
            timezone: "Etc/UTC"
        });
   
        assertEquals('object', typeof(cd));
        assertEquals(testDates[i][2], cd.getMonths());        
    }
}

function testCopticDateConvertDays() {
    var cd;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date of " + JSON.stringify(cd));
        cd = new ilib.Date.CopticDate({
            julianday: testDates[i][0], 
            timezone: "Etc/UTC"
        });
        
        assertEquals('object', typeof(cd));
        assertEquals(testDates[i][3], cd.getDays());
    }
}

function testCopticDateConvertHours() {
    var cd;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date of " + JSON.stringify(cd));
        
        cd = new ilib.Date.CopticDate({
            julianday: testDates[i][0], 
            timezone: "Etc/UTC"
        });

        assertEquals('object', typeof(cd));
        assertEquals(testDates[i][4], cd.getHours());
    }
}

function testCopticDateConvertDayOfWeek() {
    var cd;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date of " + JSON.stringify(cd));
        
        cd = new ilib.Date.CopticDate({
            julianday: testDates[i][0], 
            timezone: "Etc/UTC"
        });

        assertEquals('object', typeof(cd));
        assertEquals(testDates[i][8], cd.getDayOfWeek());
    }
}

function testCopticDateConvertOther() {
    var cd;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date of " + JSON.stringify(cd));
        
        cd = new ilib.Date.CopticDate({
            julianday: testDates[i][0], 
            timezone: "Etc/UTC"
        });

        assertEquals('object', typeof(cd));
        assertEquals(testDates[i][5], cd.getMinutes());
        assertEquals(testDates[i][6], cd.getSeconds());
        assertEquals(testDates[i][7], cd.getMilliseconds());
    }
}

function testCopticDateConstructorFull() {
	var cd = new ilib.Date.CopticDate({
		year: 1735,
		month: 9,
		day: 23,
		hour: 16,
		minute: 7,
		second: 12,
		millisecond: 123
	});
	
	assertNotNull(cd);
	
	assertEquals(1735, cd.getYears());
	assertEquals(9, cd.getMonths());
	assertEquals(23, cd.getDays());
	assertEquals(16, cd.getHours());
	assertEquals(7, cd.getMinutes());
	assertEquals(12, cd.getSeconds());
	assertEquals(123, cd.getMilliseconds());
}

function testCopticDateConstructorFullWithStrings() {
	var cd = new ilib.Date.CopticDate({
		year: "1735", 
		month: "9",
		day: "23", 
		hour: "16", 
		minute: "7", 
		second: "12", 
		millisecond: "123"
	});
	
	assertNotNull(cd);
	
	assertEquals(1735, cd.getYears());
	assertEquals(9, cd.getMonths());
	assertEquals(23, cd.getDays());
	assertEquals(16, cd.getHours());
	assertEquals(7, cd.getMinutes());
	assertEquals(12, cd.getSeconds());
	assertEquals(123, cd.getMilliseconds());
}

function testCopticDateConstructorCopy() {
    var cd = new ilib.Date.CopticDate({
        year: 1735, 
        month: 9, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123
    });
    
    assertNotNull(cd);
    
    assertEquals(1735, cd.getYears());
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
		year: 1686,
		month: 4,
		day: 23,
		hour: 0,
        timezone: "Etc/UTC"
	});
    assertNotNull(cd);
 
    assertEquals(0, cd.getTime());
}

function testCopticDateTestGetTime() {
    var cd = new ilib.Date.CopticDate({
		year: 1686,
		month: 4,
		day: 23,
		hour: 3,		// 20:30 coptic time = 3:30am gregorian time
		minute: 30,
        timezone: "Etc/UTC"
	});
    assertNotNull(cd);
    
    assertEquals(12600000, cd.getTime());
}

function testCopticDateTestGetTimeTooEarly() {
    var cd = new ilib.Date.CopticDate({
		year: 1686,
		month: 4,
		day: 22,
		hour: 23,
		timezone: "Etc/UTC"
	});
    assertNotNull(cd);
    
    assertEquals(-1, cd.getTime());
}

function testCopticDateTestGetTimeTooLate() {
	// 1 second too late for regular unix time. This is Jan 19, 2038 Gregorian at 3:14:08am UTC
    var cd = new ilib.Date.CopticDate({
		year: 1754,
		month: 5,
		day: 11,
		hour: 3,
		minute: 14,
		second: 8,
		timezone: "Etc/UTC"
	});
    assertNotNull(cd);
    
    assertEquals(-1, cd.getTime());
}

function testCopticDateTestGetTimeExtendedNotTooLate() {
	// 1 second too late for regular unix time, but not for extended time. This is Jan 19, 2038 Gregorian at 3:14:08am UTC
    var cd = new ilib.Date.CopticDate({
		year: 1754,
		month: 5,
		day: 11,
		hour: 3,
		minute: 14,
		second: 8,
		timezone: "Etc/UTC"
	});
    assertNotNull(cd);
    
    assertEquals(2147483648000, cd.getTimeExtended());
}

function testCopticDateTestSetTime1() {
    var cd = new ilib.Date.CopticDate({
		year: 1686,
		month: 1,
		day: 1,
		hour: 0,
        timezone: "Etc/UTC"
    });
    assertNotNull(cd);
    
    cd.setTime(86400000*3 + 3600000*8 + 60000*30 + 3000);
    
    assertEquals(1686, cd.getYears());
    assertEquals(4, cd.getMonths());
    assertEquals(26, cd.getDays());
    assertEquals(8, cd.getHours());
    assertEquals(30, cd.getMinutes());
    assertEquals(3, cd.getSeconds());
}

function testCopticDateTestSetTimeZero() {
    var cd = new ilib.Date.CopticDate({
    	timezone: "Etc/UTC",
    	year: 0, 
    	month: 1, 
    	day: 1,
	   	hour: 1,
	   	minute: 1,
	   	second: 1,
	   	millisecond: 1
    });
    assertNotNull(cd);
    
    cd.setTime(0);
    
    assertEquals(1686, cd.getYears());
    assertEquals(4, cd.getMonths());
    assertEquals(23, cd.getDays());
    assertEquals(0, cd.getHours());
    assertEquals(0, cd.getMinutes());
    assertEquals(0, cd.getSeconds());
}

function testCopticDateGetTimeZone() {
    var cd = new ilib.Date.CopticDate({
    	year: 1735, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(cd);
    
    assertEquals("America/Los_Angeles", cd.getTimeZone());
}

function testCopticDateGetTimeZoneDefault() {
    var cd = new ilib.Date.CopticDate({
    	year: 1735, 
    	month: 3, 
    	day: 8
    });
    assertNotNull(cd);
    
    assertEquals("local", cd.getTimeZone());
}

function testCopticDateGetTimeZoneByLocaleDE() {
    var cd = new ilib.Date.CopticDate({
    	year: 1735, 
    	month: 3, 
    	day: 8,
    	locale: "de-DE"
    });
    assertNotNull(cd);
    
    assertEquals("Europe/Berlin", cd.getTimeZone());
}

function testCopticDateGetTimeZoneByLocaleJP() {
    var cd = new ilib.Date.CopticDate({
    	year: 1735, 
    	month: 3, 
    	day: 8,
    	locale: "ja-JP"
    });
    assertNotNull(cd);
    
    assertEquals("Asia/Tokyo", cd.getTimeZone());
}

function testCopticDateGetTimeZoneByLocaleBogus() {
    var cd = new ilib.Date.CopticDate({
    	year: 1735, 
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
    	year: 1735, 
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
    	year: 1735, 
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
    	year: 1735, 
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
    	year: 1735, 
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
    	year: 1738,
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
    	year: 1738,
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
