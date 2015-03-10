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

function testEthiopicRataDieConstructor() {
    var erd = new ilib.Date.EthiopicRataDie();
    
    assertNotNull(erd);
}

function testEthiopicRataDieConstructorComponents() {
    var erd = new ilib.Date.EthiopicRataDie({
        year: 1,
        month: 1,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
    });
    
    assertNotNull(erd);
    
    assertEquals(1, erd.getRataDie());
}

function testEthiopicRataDieConstructorComponentsBig() {
    var erd = new ilib.Date.EthiopicRataDie({
        year: 2007,
        month: 2,
        day: 19,
        hour: 12,
        minute: 30,
        second: 12,
        millisecond: 0
    });
    
    assertNotNull(erd);
    
    assertEquals(732740.5209722222, erd.getRataDie());
}

function testEthiopicRataDieConstructorRD() {
    var erd = new ilib.Date.EthiopicRataDie({
        rd: 732323.2342345
    });
    
    assertNotNull(erd);
    
    assertEquals(732323.2342345, erd.getRataDie());
}

function testEthiopicRataDieConstructorUnixtime() {
    var erd = new ilib.Date.EthiopicRataDie({
        unixtime: 0
    });
    
    assertNotNull(erd);
    
    assertEquals(716367.75, erd.getRataDie());
}

function testEthiopicRataDieConstructorJulianDay() {
    var erd = new ilib.Date.EthiopicRataDie({
        julianday: 1724219.75 + 734564 
    });
    
    assertNotNull(erd);
    
    assertEquals(734564, erd.getRataDie());
}

function testEthiopicRataDieGetJulianDay1() {
    var erd = new ilib.Date.EthiopicRataDie({
        julianday: 1724219.75 + 734564 
    });
    
    assertNotNull(erd);
    
    assertEquals(1724219.75 + 734564, erd.getJulianDay());
}

function testEthiopicRataDieGetJulianDay2() {
    var erd = new ilib.Date.EthiopicRataDie({
        unixtime: 0 
    });
    
    assertNotNull(erd);
    
    assertEquals(2440587.5, erd.getJulianDay());
}

function testEthiopicRataDieGetJulianDay3() {
    var erd = new ilib.Date.EthiopicRataDie({
        rd: 0 
    });
    
    assertNotNull(erd);
    
    assertEquals(1724219.75, erd.getJulianDay());
}

function testEthiopicRataDieGetTime1() {
    var erd = new ilib.Date.EthiopicRataDie({
        unixtime: 0 
    });
    
    assertNotNull(erd);
    
    assertEquals(0, erd.getTime());
}

function testEthiopicRataDieGetTime2() {
    var erd = new ilib.Date.EthiopicRataDie({
        julianday: 2440587.5
    });
    
    assertNotNull(erd);
    
    assertEquals(0, erd.getTime());
}

function testEthiopicRataDieGetTimeTooSmall() {
    var erd = new ilib.Date.EthiopicRataDie({
        julianday: 2440586.5
    });
    
    assertNotNull(erd);
    
    assertEquals(-1, erd.getTime());
}

function testEthiopicRataDieGetTimeTooBig() {
    var erd = new ilib.Date.EthiopicRataDie({
        julianday: 2465443.634803241
    });
    
    assertNotNull(erd);
    
    assertEquals(-1, erd.getTime());
}

function testEthiopicRataDieGetTimeExtended1() {
    var erd = new ilib.Date.EthiopicRataDie({
        unixtime: 0 
    });
    
    assertNotNull(erd);
    
    assertEquals(0, erd.getTimeExtended());
}

function testEthiopicRataDieGetTimeExtended2() {
    var erd = new ilib.Date.EthiopicRataDie({
        julianday: 2440587.5
    });
    
    assertNotNull(erd);
    
    assertEquals(0, erd.getTimeExtended());
}

function testEthiopicRataDieGetTimeExtendedTooSmallForRegularGetTime() {
    var erd = new ilib.Date.EthiopicRataDie({
        julianday: 2440586.5
    });
    
    assertNotNull(erd);
    
    assertEquals(-86400000, erd.getTimeExtended());
}

function testEthiopicRataDieGetTimeExtendedTooBigForRegularGetTime() {
    var erd = new ilib.Date.EthiopicRataDie({
        julianday: 2465443.634803241
    });
    
    assertNotNull(erd);
    
    assertEquals(2147570047000, erd.getTimeExtended());
}


function testEthiopicDateConstructor() {
    var ed = new ilib.Date.EthiopicDate();
    
    assertNotNull(ed);
}

/* ethiopic date is rd 366 + epoch */
function testEthiopicDateConstructorFromJD() {
    var ed = new ilib.Date.EthiopicDate({
        julianday: 1724586.75,
        timezone: "Etc/UTC"
    });
    
    assertEquals('object', typeof(ed));
    assertEquals(2, ed.getYears());
    assertEquals(1, ed.getMonths());
    assertEquals(2, ed.getDays());
    assertEquals(0, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateConstructorUnixTime() {
    var ed = new ilib.Date.EthiopicDate({
        unixtime: 0, // rd = 716367.4166633331
        timezone: "Etc/UTC"
    });
    assertNotNull(ed);
    
    assertEquals("year", 1962, ed.getYears());
    assertEquals("month", 4, ed.getMonths());
    assertEquals("day", 22, ed.getDays());
    assertEquals("hour", 18, ed.getHours());
    assertEquals("minute", 0, ed.getMinutes());
    assertEquals("second", 0, ed.getSeconds());
    assertEquals("millisecond", 0, ed.getMilliseconds());
}

function testEthiopicDateAfterLeapYear() {
    // year 3 of every 4 year cycle is a leap year in the ethiopic calendar
    var ed = new ilib.Date.EthiopicDate({
        julianday: 1725316.75, // ethiopic epoch + 1 + 2 * 365 + 366
        timezone: "Etc/UTC"
    });
    
    assertEquals('object', typeof(ed));
    assertEquals(4, ed.getYears());
    assertEquals(1, ed.getMonths());
    assertEquals(1, ed.getDays());
    assertEquals(0, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

// next two test the transition between months at 6am
function testEthiopicDateFirstMonthEndRightBeforeDateChange() {
    var ed = new ilib.Date.EthiopicDate({rd: 733087.9583333333, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(ed));
    assertEquals(2008, ed.getYears()); // 2015 Gregorian
    assertEquals(1, ed.getMonths());   // Oct
    assertEquals(30, ed.getDays());    // 11
    assertEquals(23, ed.getHours());   // 6:00am
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateSecondMonthStartNoonAfterDateChange() {
    var ed = new ilib.Date.EthiopicDate({rd: 733088.041666667, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(ed));
    assertEquals(2008, ed.getYears()); // 2015 Gregorian
    assertEquals(2, ed.getMonths());   // Oct
    assertEquals(1, ed.getDays());     // 12
    assertEquals(1, ed.getHours());    // 8:00am
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

// next two test the year transition from a leap year to a regular year
function testEthiopicDateLastMonthLeapYear() {
    var ed = new ilib.Date.EthiopicDate({rd: 733057, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(ed));
    assertEquals(2007, ed.getYears());
    assertEquals(13, ed.getMonths());
    assertEquals(6, ed.getDays());
    assertEquals(0, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateFirstMonthAfterLeapYear() {
    var ed = new ilib.Date.EthiopicDate({rd: 733058, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(ed));
    assertEquals(2008, ed.getYears());
    assertEquals(1, ed.getMonths());
    assertEquals(1, ed.getDays());
    assertEquals(0, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

// next two test a regular month transition
function testEthiopicDateThirdMonthEnd() {
    var ed = new ilib.Date.EthiopicDate({rd: 733147, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(ed));
    assertEquals(2008, ed.getYears());
    assertEquals(3, ed.getMonths());
    assertEquals(30, ed.getDays());
    assertEquals(0, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateFourthMonthStart() {
    var ed = new ilib.Date.EthiopicDate({rd: 733148, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(ed));
    assertEquals(2008, ed.getYears());
    assertEquals(4, ed.getMonths());
    assertEquals(1, ed.getDays());
    assertEquals(0, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

// next two test a transition from a non-leap year to a non-leap year
function testEthiopicDateLastMonthEndNonLeapYear() {
    var ed = new ilib.Date.EthiopicDate({rd: 733422, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(ed));
    assertEquals(2008, ed.getYears());
    assertEquals(13, ed.getMonths());
    assertEquals(5, ed.getDays());
    assertEquals(0, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateFirstMonthStartNonLeapYear() {
    var ed = new ilib.Date.EthiopicDate({rd: 733423, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(ed));
    assertEquals(2009, ed.getYears());
    assertEquals(1, ed.getMonths());
    assertEquals(1, ed.getDays());
    assertEquals(0, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateEndOfYearZeroRd() {
    var ed = new ilib.Date.EthiopicDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(ed));
    assertEquals(0, ed.getYears());
    assertEquals(13, ed.getMonths());
    assertEquals(5, ed.getDays());
    assertEquals(0, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateBeginningOfYearOneRd() {
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

function testEthiopicDateAlmostEndOfYearOneRd() {
    var ed = new ilib.Date.EthiopicDate({rd: 364, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(ed));
    assertEquals(1, ed.getYears());
    assertEquals(13, ed.getMonths());
    assertEquals(4, ed.getDays());
    assertEquals(0, ed.getHours());
    assertEquals(0, ed.getMinutes());
    assertEquals(0, ed.getSeconds());
    assertEquals(0, ed.getMilliseconds());
}

function testEthiopicDateEndOfYearOneRd() {
    var ed = new ilib.Date.EthiopicDate({rd: 365, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(ed));
    assertEquals(1, ed.getYears());
    assertEquals(13, ed.getMonths());
    assertEquals(5, ed.getDays());
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
    [1507231.5, -594,  12,    5,   18,   0,      0,      0,           0],
    [1660037.5, -175,  4,     11,  18,   0,      0,      0,           3],
    [1746893.5, 63,    1,     28,  18,   0,      0,      0,           3],
    [1770641.5, 128,   2,     4,   18,   0,      0,      0,           0],
    [1892731.5, 462,   5,     11,  18,   0,      0,      0,           3],
    [1931579.5, 568,   9,     22,  18,   0,      0,      0,           1],
    [1974851.5, 687,   3,     10,  18,   0,      0,      0,           6],
    [2091164.5, 1005,  8,     23,  18,   0,      0,      0,           0],
    [2121509.5, 1088,  9,     22,  18,   0,      0,      0,           0],
    [2155779.5, 1182,  7,     19,  18,   0,      0,      0,           5],
    [2174029.5, 1232,  7,     6,   18,   0,      0,      0,           6],
    [2191584.5, 1280,  7,     29,  18,   0,      0,      0,           5],
    [2195261.5, 1290,  8,     24,  18,   0,      0,      0,           0],
    [2229274.5, 1383,  10,    9,   18,   0,      0,      0,           0],
    [2245580.5, 1428,  5,     28,  18,   0,      0,      0,           3],
    [2266100.5, 1484,  8,     4,   18,   0,      0,      0,           6],
    [2288542.5, 1546,  1,     11,  18,   0,      0,      0,           6],
    [2290901.5, 1552,  6,     28,  18,   0,      0,      0,           6],
    [2323140.5, 1640,  10,    5,   18,   0,      0,      0,           3],
    [2334848.5, 1672,  10,    25,  18,   0,      0,      0,           0],
    [2348020.5, 1708,  11,    18,  18,   0,      0,      0,           5],
    [2366978.5, 1760,  10,    13,  18,   0,      0,      0,           0],
    [2385648.5, 1811,  11,    26,  18,   0,      0,      0,           1],
    [2392825.5, 1831,  7,     18,  18,   0,      0,      0,           3],
    [2416223.5, 1895,  8,     10,  18,   0,      0,      0,           0],
    [2425848.5, 1921,  12,    18,  18,   0,      0,      0,           0],
    [2430266.5, 1934,  1,     18,  18,   0,      0,      0,           1],
    [2430833.5, 1935,  8,     10,  18,   0,      0,      0,           1],
    [2431004.5, 1936,  1,     25,  18,   0,      0,      0,           4],
    [2448698.5, 1984,  7,     7,   18,   0,      0,      0,           2],
    [2450138.5, 1988,  6,     16,  18,   0,      0,      0,           0],
    [2465737.5, 2031,  2,     30,  18,   0,      0,      0,           3],
    [2486076.5, 2086,  11,    10,  18,   0,      0,      0,           0]
];

function testEthiopicDateConvertYears() {
    var ed;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date of " + JSON.stringify(ed));
        
        ed = new ilib.Date.EthiopicDate({
            julianday: testDates[i][0], 
            timezone: "Etc/UTC"
        });

        assertEquals('object', typeof(ed));
        assertEquals(testDates[i][1], ed.getYears());        
    }
}

function testEthiopicDateConvertMonths() {
    var ed;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date of " + JSON.stringify(ed));
        
        ed = new ilib.Date.EthiopicDate({
            julianday: testDates[i][0], 
            timezone: "Etc/UTC"
        });
   
        assertEquals('object', typeof(ed));
        assertEquals(testDates[i][2], ed.getMonths());        
    }
}

function testEthiopicDateConvertDays() {
    var ed;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date of " + JSON.stringify(ed));
        ed = new ilib.Date.EthiopicDate({
            julianday: testDates[i][0], 
            timezone: "Etc/UTC"
        });
        
        assertEquals('object', typeof(ed));
        assertEquals(testDates[i][3], ed.getDays());
    }
}

function testEthiopicDateConvertHours() {
    var ed;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date of " + JSON.stringify(ed));
        
        ed = new ilib.Date.EthiopicDate({
            julianday: testDates[i][0], 
            timezone: "Etc/UTC"
        });

        assertEquals('object', typeof(ed));
        assertEquals(testDates[i][4], ed.getHours());
    }
}

function testEthiopicDateConvertDayOfWeek() {
    var ed;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date of " + JSON.stringify(ed));
        
        ed = new ilib.Date.EthiopicDate({
            julianday: testDates[i][0], 
            timezone: "Etc/UTC"
        });

        assertEquals('object', typeof(ed));
        assertEquals(testDates[i][8], ed.getDayOfWeek());
    }
}

function testEthiopicDateConvertOther() {
    var ed;
    
    for (var i = 0; i < testDates.length; i++) {
        info("testing jd=" + testDates[i][0] + " and date of " + JSON.stringify(ed));
        
        ed = new ilib.Date.EthiopicDate({
            julianday: testDates[i][0], 
            timezone: "Etc/UTC"
        });

        assertEquals('object', typeof(ed));
        assertEquals(testDates[i][5], ed.getMinutes());
        assertEquals(testDates[i][6], ed.getSeconds());
        assertEquals(testDates[i][7], ed.getMilliseconds());
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
        year: 1962,
        month: 4,
        day: 22,
        hour: 18,
        timezone: "Etc/UTC"
    });
    assertNotNull(ed);
 
    assertEquals(0, ed.getTime());
}

function testEthiopicDateTestGetTime() {
    var ed = new ilib.Date.EthiopicDate({
        year: 1962,
        month: 4,
        day: 22,
        hour: 21,       // 21:30 ethiopic time = 3:30am gregorian time
        minute: 30,
        timezone: "Etc/UTC"
    });
    assertNotNull(ed);
    
    assertEquals(12600000, ed.getTime());
}

function testEthiopicDateTestGetTimeTooEarly() {
    var ed = new ilib.Date.EthiopicDate({
        year: 1962,
        month: 4,
        day: 22,
        hour: 16,
        timezone: "Etc/UTC"
    });
    assertNotNull(ed);
    
    assertEquals(-1, ed.getTime());
}

function testEthiopicDateTestGetTimeTooLate() {
    // 1 second too late for regular unix time. This is Jan 19, 2038 Gregorian at 3:14:08am UTC
    var ed = new ilib.Date.EthiopicDate({
        year: 2030,
        month: 5,
        day: 10,
        hour: 21,
        minute: 14,
        second: 8,
        timezone: "Etc/UTC"
    });
    assertNotNull(ed);
    
    assertEquals(-1, ed.getTime());
}

function testEthiopicDateTestGetTimeExtendedNotTooLate() {
    // 1 second too late for regular unix time, but not for extended time. This is Jan 19, 2038 Gregorian at 3:14:08am UTC
    var ed = new ilib.Date.EthiopicDate({
        year: 2030,
        month: 5,
        day: 10,
        hour: 21,
        minute: 14,
        second: 8,
        timezone: "Etc/UTC"
    });
    assertNotNull(ed);
    
    assertEquals(2147483648000, ed.getTimeExtended());
}

function testEthiopicDateTestSetTime1() {
    var ed = new ilib.Date.EthiopicDate({
        year: 1962,
        month: 4,
        day: 22,
        hour: 18,
        timezone: "Etc/UTC"
    });
    assertNotNull(ed);
    assertEquals(0, ed.getTime());
    
    ed.setTime(86400000*3 + 3600000*8 + 60000*30 + 3000);
    
    assertEquals(1962, ed.getYears());
    assertEquals(4, ed.getMonths());
    assertEquals(26, ed.getDays());
    assertEquals(2, ed.getHours());
    assertEquals(30, ed.getMinutes());
    assertEquals(3, ed.getSeconds());
}

function testEthiopicDateTestSetTimeZero() {
    var ed = new ilib.Date.EthiopicDate({
        timezone: "Etc/UTC",
        year: 0, 
        month: 1, 
        day: 1,
        hour: 1,
        minute: 1,
        second: 1,
        millisecond: 1
    });
    assertNotNull(ed);
    
    ed.setTime(0);
    
    assertEquals(1962, ed.getYears());
    assertEquals(4, ed.getMonths());
    assertEquals(22, ed.getDays());
    assertEquals(18, ed.getHours());
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
