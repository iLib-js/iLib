/*
 * testhandate.js - test the Han Chinese Lunar date object
 * 
 * Copyright © 2014-2015, JEDLSoft
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

//if (ilib.isDynCode()) {
//	ilib.Date.newInstance({type: "han"});
//}

function testHanDateConstructor() {
    var hd = new ilib.Date.HanDate();
    
    assertNotNull(hd);
}

function testHanDateCalcYearPositive1() {
    var hd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2697, hd._calcYear(1));
}

function testHanDateCalcYearPositive2() {
    var hd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2697, hd._calcYear(40));
}

function testHanDateCalcYearPositive3() {
    var hd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2698, hd._calcYear(41));
}
function testHanDateCalcYearPositive4() {
    var hd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2698, hd._calcYear(394));
}
function testHanDateCalcYearPositive5() {
    var hd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2699, hd._calcYear(395));
}
function testHanDateCalcYearPositive6() {
    var hd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2699, hd._calcYear(778));
}
function testHanDateCalcYearPositive7() {
    var hd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2700, hd._calcYear(779));
}
function testHanDateCalcYearPositive8() {
    var hd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2700, hd._calcYear(1132));
}
function testHanDateCalcYearPositive9() {
    var hd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2701, hd._calcYear(1133));
}
function testHanDateCalcYearPositive10() {
    var hd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2701, hd._calcYear(1487));
}
function testHanDateCalcYearPositive11() {
    var hd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(2702, hd._calcYear(1827));
}

function testHanDateCalcYearNegative1() {
    var hd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(0, hd._calcYear(-985395));
}
function testHanDateCalcYearNegative2() {
    var hd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-1, hd._calcYear(-985396));
}
function testHanDateCalcYearNegative3() {
    var hd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-1, hd._calcYear(-985749));
}
function testHanDateCalcYearNegative4() {
    var hd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-2, hd._calcYear(-985750));
}
function testHanDateCalcYearNegative5() {
    var hd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-3, hd._calcYear(-986135));
}
function testHanDateCalcYearNegative6() {
    var hd = new ilib.Date.HanDate({rd: 0, timezone: "Etc/UTC"});
    
    assertEquals(-1208, hd._calcYear(-1426600));
}

function testHanRataDieConstructorFromDateComponents1() {
    var prd = new ilib.Date.HanRataDie({
    	year: 2698,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(41, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents2() {
    var prd = new ilib.Date.HanRataDie({
    	year: 2697,
    	month: 13, // leap year
    	day: 30,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(40, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents3() {
    var prd = new ilib.Date.HanRataDie({
    	year: 1,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-985011, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents4() {
    var prd = new ilib.Date.HanRataDie({
    	year: 0,
    	month: 13,
    	day: 30,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-985012, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents5() {
    var prd = new ilib.Date.HanRataDie({
    	year: 1,
    	month: 12,
    	day: 30,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-984658, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents6() {
    var prd = new ilib.Date.HanRataDie({
    	year: 2,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-984657, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents7() {
    var prd = new ilib.Date.HanRataDie({
    	year: 2,
    	month: 12,
    	day: 30,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-984304, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents8() {
    var prd = new ilib.Date.HanRataDie({
    	year: 3,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-984303, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents9() {
    var prd = new ilib.Date.HanRataDie({
    	year: 3,
    	month: 13,
    	day: 30,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-983920, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents10() {
    var prd = new ilib.Date.HanRataDie({
    	year: 4,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-983919, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents11() {
    var prd = new ilib.Date.HanRataDie({
    	year: 4,
    	month: 12,
    	day: 30,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-983565, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents12() {
    var prd = new ilib.Date.HanRataDie({
    	year: 5,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-983564, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents13() {
    var prd = new ilib.Date.HanRataDie({
    	year: 5,
    	month: 12,
    	day: 29,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-983211, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents14() {
    var prd = new ilib.Date.HanRataDie({
    	year: 6,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-983210, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponents15() {
    var prd = new ilib.Date.HanRataDie({
    	year: -1208,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-1426612, prd.getRataDie());
}

function testHanRataDieConstructorFromDateComponentsCycle1() {
    var prd = new ilib.Date.HanRataDie({
    	year: 58,
    	cycle: 44,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(41, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponentsCycle2() {
    var prd = new ilib.Date.HanRataDie({
    	year: 57,
    	cycle: 44,
    	month: 13,
    	day: 30,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(40, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponentsCycle3() {
    var prd = new ilib.Date.HanRataDie({
    	cycle: 0,
    	year: 1,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-985011, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponentsCycle4() {
    var prd = new ilib.Date.HanRataDie({
    	cycle: 0,
    	year: 0,
    	month: 13,
    	day: 30,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-985012, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponentsCycle5() {
    var prd = new ilib.Date.HanRataDie({
    	cycle: 0,
    	year: 1,
    	month: 12,
    	day: 30,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-984658, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponentsCycle6() {
    var prd = new ilib.Date.HanRataDie({
    	cycle: 0,
    	year: 2,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-984657, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponentsCycle7() {
    var prd = new ilib.Date.HanRataDie({
    	cycle: 0,
    	year: 2,
    	month: 12,
    	day: 30,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-984304, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponentsCycle8() {
    var prd = new ilib.Date.HanRataDie({
    	cycle: 0,
    	year: 3,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-984303, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponentsCycle9() {
    var prd = new ilib.Date.HanRataDie({
    	cycle: 0,
    	year: 3,
    	month: 13,
    	day: 30,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-983920, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponentsCycle10() {
    var prd = new ilib.Date.HanRataDie({
    	cycle: 0,
    	year: 4,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-983919, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponentsCycle11() {
    var prd = new ilib.Date.HanRataDie({
    	cycle: 0,
    	year: 4,
    	month: 12,
    	day: 30,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-983565, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponentsCycle12() {
    var prd = new ilib.Date.HanRataDie({
    	cycle: 0,
    	year: 5,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-983564, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponentsCycle13() {
    var prd = new ilib.Date.HanRataDie({
    	cycle: 0,
    	year: 5,
    	month: 12,
    	day: 29,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-983211, prd.getRataDie());
}
function testHanRataDieConstructorFromDateComponentsCycle14() {
    var prd = new ilib.Date.HanRataDie({
    	cycle: 0,
    	year: 6,
    	month: 1,
    	day: 1,
    	hour: 0,
    	minute: 0,
    	second: 0,
    	millisecond: 0
    });
    
    assertEquals('object', typeof(prd));
    assertEquals(-983210, prd.getRataDie());
}

var testDatesHan = [
	// jd			cycle	year	month	day	isLeapYear	isLeapMonth	day of week
	[ 1507231.5,	35,	11,	6,	12,	false,	false,	0,	-214193],
	[ 1660037.5,	42,	9,	10,	27,	false,	false,	3,	-61387],
	[ 1746893.5,	46,	7,	9,	4,	true,	false,	3,	25469],
	[ 1770641.5,	47,	12,	9,	9,	true,	false,	0,	49217],
	[ 1892731.5,	52,	46,	12,	20,	true,	false,	3,	171307],
	[ 1931579.5,	54,	33,	4,	5,	false,	false,	1,	210155],
	[ 1974851.5,	56,	31,	10,	15,	false,	false,	6,	253427],
	[ 2091164.5,	61,	50,	4,	7,	true,	false,	0,	369740],
	[ 2121509.5,	63,	13,	4,	24,	false,	false,	0,	400085],
	[ 2155779.5,	64,	47,	2,	9,	false,	false,	5,	434355],
	[ 2174029.5,	65,	37,	2,	9,	false,	false,	6,	452605],
	[ 2191584.5,	66,	25,	2,	23,	false,	false,	5,	470160],
	[ 2195261.5,	66,	35,	4,	9,	true,	false,	0,	473837],
	[ 2229274.5,	68,	8,	5,	2,	false,	false,	0,	507850],
	[ 2245580.5,	68,	53,	1,	8,	true,	false,	3,	524156],
	[ 2266100.5,	69,	49,	3,	4,	false,	false,	6,	544676],
	[ 2288542.5,	70,	50,	9,	2,	true,	false,	6,	567118],
	[ 2290901.5,	70,	57,	1,	29,	false,	false,	6,	569477],
	[ 2323140.5,	72,	25,	5,	20,	true,	true,	3,	601716],
	[ 2334848.5,	72,	57,	6,	5,	true,	false,	0,	613424],
	[ 2348020.5,	73,	33,	7,	6,	true,	false,	5,	626596],
	[ 2366978.5,	74,	25,	5,	5,	false,	false,	0,	645554],
	[ 2385648.5,	75,	16,	7,	12,	true,	false,	1,	664224],
	[ 2392825.5,	75,	36,	2,	13,	false,	false,	3,	671401],
	[ 2416223.5,	76,	40,	3,	22,	true,	false,	0,	694799],
	[ 2425848.5,	77,	6,	7,	21,	false,	false,	0,	704424],
	[ 2430266.5,	77,	18,	9,	9,	true,	false,	1,	708842],
	[ 2430833.5,	77,	20,	3,	15,	false,	false,	1,	709409],
	[ 2431004.5,	77,	20,	9,	9,	false,	false,	4,	709580],
	[ 2448698.5,	78,	9,	2,	14,	false,	false,	2,	727274],
	[ 2450138.5,	78,	13,	1,	7,	false,	false,	0,	728714],
	[ 2465737.5,	78,	55,	10,	14,	false,	false,	3,	744313],
	[ 2486076.5,	79,	51,	6,	7,	false,	false,	0,	764652],
];

function testHanDateConvert() {
    var hd;
    
    for (var i = 0; i < testDatesHan.length; i++) {
        hd = new ilib.Date.HanDate({julianday: testDatesHan[i][0], timezone: "Etc/UTC"});
    
        info("testing jd=" + testDatesHan[i][0]);
        
        assertEquals('object', typeof(hd));
        assertEquals("testing rd for " + testDatesHan[i][0], (testDatesHan[i][0] - 1721424.5), hd.getRataDie());
        assertEquals("testing cycle for " + testDatesHan[i][0], testDatesHan[i][1], hd.getCycles());
        assertEquals("testing cycle year for " + testDatesHan[i][0], testDatesHan[i][2], hd.getCycleYears());
        assertEquals("testing year for " + testDatesHan[i][0], testDatesHan[i][1] * 60 + testDatesHan[i][2], hd.getYears());
        assertEquals("testing month for " + testDatesHan[i][0], testDatesHan[i][3], hd.getMonths());
        assertEquals("testing day for " + testDatesHan[i][0], testDatesHan[i][4], hd.getDays());
        assertEquals("testing isLeapYear for " + testDatesHan[i][0], testDatesHan[i][5], hd.isLeapYear());
        assertEquals("testing isLeapMonth for " + testDatesHan[i][0], testDatesHan[i][6], hd.isLeapMonth());
        assertEquals("testing day of week for " + testDatesHan[i][0], testDatesHan[i][7], hd.getDayOfWeek());
    }
}

function testHanDateGetJulianDay() {
	var hd;
	
    for (var i = 0; i < testDatesHan.length; i++) {
        hd = new ilib.Date.HanDate({
        	cycle: testDatesHan[i][1],
            year: testDatesHan[i][2], 
            month: testDatesHan[i][3], 
            day: testDatesHan[i][4],
            timezone: "Etc/UTC"
    	});
    
        info("testing jd=" + testDatesHan[i][0]);
        
        assertEquals('object', typeof(hd));
        assertEquals("testing row " + testDatesHan[i][0], testDatesHan[i][0], hd.getJulianDay());
        assertEquals(testDatesHan[i][7], hd.getDayOfWeek());
    }
}

function testHanDateConstructorFull() {
    var hd = new ilib.Date.HanDate({
		year: 4711,
		month: 9,
		day: 23,
		hour: 16,
		minute: 7,
		second: 12,
		millisecond: 123
	});
    
    assertNotNull(hd);
    
    assertEquals(4711, hd.getYears());
    assertEquals(9, hd.getMonths());
    assertEquals(23, hd.getDays());
    assertEquals(16, hd.getHours());
    assertEquals(7, hd.getMinutes());
    assertEquals(12, hd.getSeconds());
    assertEquals(123, hd.getMilliseconds());
    assertEquals(78, hd.getCycles());
    assertEquals(31, hd.getCycleYears());
}

function testHanDateConstructorFullWithStrings() {
    var hd = new ilib.Date.HanDate({
		year: "4711", 
		month: "9",
		day: "23", 
		hour: "16", 
		minute: "7", 
		second: "12", 
		millisecond: "123"
	});
    
    assertNotNull(hd);
    
    assertEquals(4711, hd.getYears());
    assertEquals(9, hd.getMonths());
    assertEquals(23, hd.getDays());
    assertEquals(16, hd.getHours());
    assertEquals(7, hd.getMinutes());
    assertEquals(12, hd.getSeconds());
    assertEquals(123, hd.getMilliseconds());
    assertEquals(78, hd.getCycles());
    assertEquals(31, hd.getCycleYears());
}

function testHanDateConstructorCopy() {
    var hd2 = new ilib.Date.HanDate({
        year: 4711, 
        month: 9, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123
    });
    var hd = new ilib.Date.HanDate(hd2);
    
    assertNotNull(hd);
    
    assertEquals(4711, hd.getYears());
    assertEquals(9, hd.getMonths());
    assertEquals(23, hd.getDays());
    assertEquals(16, hd.getHours());
    assertEquals(7, hd.getMinutes());
    assertEquals(12, hd.getSeconds());
    assertEquals(123, hd.getMilliseconds());
    assertEquals(78, hd.getCycles());
    assertEquals(31, hd.getCycleYears());
    assertTrue(hd.isLeapYear());
    assertFalse(hd.isLeapMonth());
}

function testHanDateConstructorCopyLeapMonth() {
    var hd2 = new ilib.Date.HanDate({
        year: 4711, 
        month: 10, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123
    });
    var hd = new ilib.Date.HanDate(hd2);
    
    assertNotNull(hd);
    
    assertEquals(4711, hd.getYears());
    assertEquals(10, hd.getMonths());
    assertTrue(hd.isLeapYear());
    assertTrue(hd.isLeapMonth());
}

function testHanDateConstructorUnixTime() {
    var hd = new ilib.Date.HanDate({
		unixtime: 1420563744696,
		timezone: "Etc/UTC"
	});
    
    assertNotNull(hd);
    
    assertEquals(4711, hd.getYears());
    assertEquals(12, hd.getMonths());
    assertEquals(16, hd.getDays());
    assertEquals(17, hd.getHours());
    assertEquals(2, hd.getMinutes());
    assertEquals(24, hd.getSeconds());
    assertEquals(696, hd.getMilliseconds());
    assertEquals(78, hd.getCycles());
    assertEquals(31, hd.getCycleYears());
    assertTrue(hd.isLeapYear());
    assertFalse(hd.isLeapMonth());
}

function testHanDateSetYears() {
    var hd = new ilib.Date.HanDate();
    
    assertNotNull(hd);
    
    hd.setYears(123);
    
    assertEquals(123, hd.getYears());
}

function testHanDateSetMonths() {
    var hd = new ilib.Date.HanDate();
    
    assertNotNull(hd);
    
    hd.setMonths(7);
    
    assertEquals(7, hd.getMonths());
}

function testHanDateSetDays() {
    var hd = new ilib.Date.HanDate();
    
    assertNotNull(hd);
    
    hd.setDays(12);
    
    assertEquals(12, hd.getDays());
}

function testHanDateSetHours() {
    var hd = new ilib.Date.HanDate();
    
    assertNotNull(hd);
    
    hd.setHours(12);
    
    assertEquals(12, hd.getHours());
}

function testHanDateSetMinutes() {
    var hd = new ilib.Date.HanDate();
    
    assertNotNull(hd);
    
    hd.setMinutes(13);
    
    assertEquals(13, hd.getMinutes());
}

function testHanDateSetSeconds() {
    var hd = new ilib.Date.HanDate();
    
    assertNotNull(hd);
    
    hd.setSeconds(23);
    
    assertEquals(23, hd.getSeconds());
}

function testHanDateSetMilliseconds() {
    var hd = new ilib.Date.HanDate();
    
    assertNotNull(hd);
    
    hd.setMilliseconds(123);
    
    assertEquals(123, hd.getMilliseconds());
}

function testGetDayOfWeek1() {
    var hd = new ilib.Date.HanDate({
		year: 4706, 
    	month: 13, 
    	day: 29
	});
    
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek());
}

function testGetDayOfWeekWithTime() {
    var hd = new ilib.Date.HanDate({
		year: 4706, 
    	month: 13, 
    	day: 29,
		hour: 8,
		minute: 39,
		second: 34
	});
    
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek());
}

function testHanDateTestGetTimeZero() {
    var hd = new ilib.Date.HanDate({
		year: 4666,
		month: 11,
		day: 24,
		timezone: "Etc/UTC"
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getTime());
}

function testHanDateTestGetTimeZeroJD() {
    var hd = new ilib.Date.HanDate({julianday: 2440587.5});
    assertNotNull(hd);
    
    assertEquals(0, hd.getTime());
}

function testHanDateTestGetTime() {
    var hd = new ilib.Date.HanDate({
		year: 4666,
		month: 11,
		day: 24,
		hour: 8,
		minute: 30,
		timezone: "Etc/UTC"
	});
    assertNotNull(hd);
    
    assertEquals(30600000, hd.getTime());
}

function testHanDateTestGetTimeTooEarly() {
    var hd = new ilib.Date.HanDate({
		year: 1348,
		month: 10,
		day: 10
	});
    assertNotNull(hd);
    
    assertEquals(-1, hd.getTime());
}

function testHanDateTestGetTimeTooLate() {
    var hd = new ilib.Date.HanDate({
		year: 1416,
		month: 11,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(-1, hd.getTime());
}

// test some of the helper functions to make sure they are producing the right thing
function testHanDateOnOrBeforeSun() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    // Sunday on or before is 5 days before 
    assertEquals(rd-5, hd.onOrBefore(0).getRataDie());
}

function testHanDateOnOrBeforeMon() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-4, hd.onOrBefore(1).getRataDie());
}

function testHanDateOnOrBeforeTue() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-3, hd.onOrBefore(2).getRataDie());
}

function testHanDateOnOrBeforeWed() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-2, hd.onOrBefore(3).getRataDie());
}

function testHanDateOnOrBeforeThu() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-1, hd.onOrBefore(4).getRataDie());
}

function testHanDateOnOrBeforeFri() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd, hd.onOrBefore(5).getRataDie());
}

function testHanDateOnOrBeforeSat() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-6, hd.onOrBefore(6).getRataDie());
}

function testHanDateOnOrBeforeSunWithTime() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 30,
	   	hour: 8
    });
    assertNotNull(hd);
    
    assertEquals(6, hd.getDayOfWeek()); // Saturday
    var rd = hd.getRataDie(); // contains fractional time for the 8:00am part
    
    // Sunday on or before is 5 days before 
    // Should give an rd result that also contains the fractional time 
    assertEquals(rd-6, hd.onOrBefore(0).getRataDie());
}

function testHanDateOnOrBeforeSunWithTimeZoneWestern1() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13,
    	day: 30,
	   	hour: 23,
	   	minute: 59,
	   	timezone: "America/Los_Angeles"
    }); // this is Saturday in Los Angeles, but Sunday in UTC 
    assertNotNull(hd);
    
    assertEquals(6, hd.getDayOfWeek()); // Saturday
    var rd = hd.getRataDie(); // contains fractional time for the 8:00am part
    
    // Sunday on or before is 6 days before 
    // Should give an rd result that also contains the fractional time 
    assertEquals(rd-6, hd.onOrBefore(0).getRataDie());
}

function testHanDateOnOrBeforeSunWithTimeZoneWestern2() {
    var hd = new ilib.Date.HanDate({
    	year: 4707, 
    	month: 1, 
    	day: 1,
	   	hour: 0,
	   	minute: 0,
	   	timezone: "America/Los_Angeles"
    }); // this is Sunday in Los Angeles and in UTC 
    assertNotNull(hd);
    
    assertEquals(0, hd.getDayOfWeek()); // Sunday
    var rd = hd.getRataDie(); // contains fractional time for the 8:00am part
    
    // Sunday on or before is 5 days before 
    // Should give an rd result that also contains the fractional time 
    assertEquals(rd, hd.onOrBefore(0).getRataDie());
}

function testHanDateOnOrBeforeSunWithTimeZoneEastern1() {
    var hd = new ilib.Date.HanDate({
    	year: 4707, 
    	month: 1,
    	day: 1,
	   	hour: 0,
	   	minute: 0,
	   	timezone: "Asia/Seoul"
    }); // this is Saturday in UTC, but Sunday in Seoul
    assertNotNull(hd);
    
    assertEquals(0, hd.getDayOfWeek()); // Sunday
    var rd = hd.getRataDie(); // contains fractional time for the 8:00am part
    
    // Sunday on or before is today 
    // Should give an rd result that also contains the fractional time 
    assertEquals(rd, hd.onOrBefore(0).getRataDie());
}

function testHanDateOnOrBeforeSunWithTimeZoneEastern2() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 30,
	   	hour: 23,
	   	minute: 59,
	   	timezone: "Asia/Seoul"
    }); // this is Saturday in Seoul and in UTC 
    assertNotNull(hd);
    
    assertEquals(6, hd.getDayOfWeek()); // Saturday
    var rd = hd.getRataDie(); // contains fractional time for the 8:00am part
    
    // Sunday on or before is 6 days before 
    // Should give an rd result that also contains the fractional time 
    assertEquals(rd-6, hd.onOrBefore(0).getRataDie());
}

function testHanDateOnOrAfterSun() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    // Sunday on or after is 2 days after 
    assertEquals(rd+2, hd.onOrAfter(0).getRataDie());
}

function testHanDateOnOrAfterSunDate() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var date = hd.onOrBefore(0);
    
    // Sunday on or before is 5 days before
    assertEquals(4706, date.year);
    assertEquals(13, date.month);
    assertEquals(24, date.day);
}

function testHanDateOnOrAfterMon() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+3, hd.onOrAfter(1).getRataDie());
}

function testHanDateOnOrAfterMonDate() {
    var hd = new ilib.Date.HanDate({
    	year: 4706,
    	month: 13,
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var date = hd.onOrAfter(1);
    
    assertEquals(4707, date.year);
    assertEquals(1, date.month);
    assertEquals(2, date.day);
}

function testHanDateOnOrAfterTue() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+4, hd.onOrAfter(2).getRataDie());
}

function testHanDateOnOrAfterWed() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+5, hd.onOrAfter(3).getRataDie());
}

function testHanDateOnOrAfterThu() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+6, hd.onOrAfter(4).getRataDie());
}

function testHanDateOnOrAfterThuDate() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var date = hd.onOrAfter(4);
    
    assertEquals(4707, date.year);
    assertEquals(1, date.month);
    assertEquals(5, date.day);
}

function testHanDateOnOrAfterFri() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd, hd.onOrAfter(5).getRataDie());
}

function testHanDateOnOrAfterFriDate() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var date = hd.onOrAfter(5);
    
    assertEquals(4706, date.year);
    assertEquals(13, date.month);
    assertEquals(29, date.day);
}

function testHanDateOnOrAfterSat() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+1, hd.onOrAfter(6).getRataDie());
}

function testHanDateBeforeSun() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    // Sunday before is 5 days before 
    assertEquals(rd-5, hd.before(0).getRataDie());
}

function testHanDateBeforeSunDate() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var date = hd.before(0);
    
    // Sunday before is 5 days before 
    assertEquals(4706, date.year);
    assertEquals(13, date.month);
    assertEquals(24, date.day);
}

function testHanDateBeforeMon() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-4, hd.before(1).getRataDie());
}

function testHanDateBeforeTue() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-3, hd.before(2).getRataDie());
}

function testHanDateBeforeWed() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-2, hd.before(3).getRataDie());
}

function testHanDateBeforeThu() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-1, hd.before(4).getRataDie());
}

function testHanDateBeforeThuDate() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var date = hd.before(4);
    
    // Thursday before is 1 day before 
    assertEquals(4706, date.year);
    assertEquals(13, date.month);
    assertEquals(28, date.day);
}

function testHanDateBeforeFri() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-7, hd.before(5).getRataDie());
}

function testHanDateBeforeFriDate() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var date = hd.before(5);
    
    // Friday before is 7 days before the current Friday
    assertEquals(4706, date.year);
    assertEquals(13, date.month);
    assertEquals(22, date.day);
}

function testHanDateBeforeSat() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-6, hd.before(6).getRataDie());
}

function testHanDateAfterSun() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    // Sunday after is 2 days after 
    assertEquals(rd+2, hd.after(0).getRataDie());
}

function testHanDateAfterSunDate() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var date = hd.after(0);
    
    // Sunday after is 2 days after 
    assertEquals(4707, date.year);
    assertEquals(1, date.month);
    assertEquals(1, date.day);
}

function testHanDateAfterMon() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+3, hd.after(1).getRataDie());
}

function testHanDateAfterTue() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+4, hd.after(2).getRataDie());
}

function testHanDateAfterWed() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+5, hd.after(3).getRataDie());
}

function testHanDateAfterThu() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+6, hd.after(4).getRataDie());
}

function testHanDateAfterFri() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+7, hd.after(5).getRataDie());
}

function testHanDateAfterFriDate() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var date = hd.after(5);
    
    // Friday after is 7 days after 
    assertEquals(4707, date.year);
    assertEquals(1, date.month);
    assertEquals(6, date.day);
}

function testHanDateAfterSat() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+1, hd.after(6).getRataDie());
}

function testHanDateAfterSatDate() {
    var hd = new ilib.Date.HanDate({
    	year: 4706, 
    	month: 13, 
    	day: 29
    });
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var date = hd.after(6);
    
    // Sat after is 1 day after 
    assertEquals(4706, date.year);
    assertEquals(13, date.month);
    assertEquals(30, date.day);
}

function testHanDateTestGetWeekOfYearThisYear() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 2,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearThisYear2() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 3,
		day: 19
	});
    assertNotNull(hd);
    
    assertEquals(12, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearThisYear3() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 12,
		day: 30
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearThisYearWithTime() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 12,
		day: 30,
		hour: 16,
		minute: 13,
		second: 12,
		millisecond: 232
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearPreviousYear() {
    var hd = new ilib.Date.HanDate({
		year: 4700,
		month: 1,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(51, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular1() {
    var hd = new ilib.Date.HanDate({
		year: 4689,
		month: 12,
		day: 30
	});
    assertNotNull(hd);
    
    assertEquals(51, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular2() {
    var hd = new ilib.Date.HanDate({
		year: 4690,
		month: 13,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular3() {
    var hd = new ilib.Date.HanDate({
		year: 4691,
		month: 12,
		day: 30
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular4() {
    var hd = new ilib.Date.HanDate({
		year: 4692,
		month: 13,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(55, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular5() {
    var hd = new ilib.Date.HanDate({
		year: 4693,
		month: 12,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(51, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular6() {
    var hd = new ilib.Date.HanDate({
		year: 4694,
		month: 12,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfYear());
}

function testHanDateGetDayOfYearFirstDay() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 1,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getDayOfYear());
}

function testHanDateGetDayOfYearMidYear() {
    var hd = new ilib.Date.HanDate({
		year: 4687,
		month: 3,
		day: 17
	});
    assertNotNull(hd);
    
    assertEquals(76, hd.getDayOfYear());
}

function testHanDateGetDayOfYearLastDay() {
    var hd = new ilib.Date.HanDate({
		year: 4686,
		month: 12,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(354, hd.getDayOfYear());
}

function testHanDateGetDayOfYearLastDayLeapYear() {
    var hd = new ilib.Date.HanDate({
		year: 4687,
		month: 13,
		day: 30
	});
    assertNotNull(hd);
    
    assertEquals(384, hd.getDayOfYear());
}

function testHanDateGetWeekOfMonth0() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 3,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth1() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 3,
		day: 4
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth2() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 3,
		day: 11
	});
    assertNotNull(hd);
    
    assertEquals(2, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth3() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 3,
		day: 20
	});
    assertNotNull(hd);
    
    assertEquals(4, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth4() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 3,
		day: 30
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth6() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 4,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth7() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 5,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth8() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 6,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth9() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 7,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonthCN0() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 3,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN1() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 3,
		day: 4
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN2() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 3,
		day: 11
	});
    assertNotNull(hd);
    
    assertEquals(2, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN3() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 3,
		day: 20
	});
    assertNotNull(hd);
    
    assertEquals(4, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN4() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 3,
		day: 30
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN6() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 4,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN7() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 5,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN8() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 6,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN9() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 7,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("zh-Hans-CN"));
}


function testHanDateGetWeekOfMonthCN10() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 8,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN11() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 9,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN12() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 10,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN13() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 11,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN14() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 12,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN() {
    var hd = new ilib.Date.HanDate({
		year: 4708,
		month: 3,
		day: 1
	});
    assertNotNull(hd);
    
    // 3/1 is a Sunday, so it is at the beginning of the first week in China
    assertEquals(1, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthDE() {
    var hd = new ilib.Date.HanDate({
		year: 4708,
		month: 3,
		day: 1
	});
    assertNotNull(hd);
    
    // weeks in Germany start on Monday, and 3/1 is a Sunday, so it is at the 
    // end of the preceding week.
    assertEquals(0, hd.getWeekOfMonth("de-DE"));
}

function testHanDateGetEraAP() {
    var hd = new ilib.Date.HanDate({
		year: 4707,
		month: 5,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getEra());
}

function testHanDateGetEraBAP() {
    var hd = new ilib.Date.HanDate({
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

function testHanDateGetEraAPYear1() {
    var hd = new ilib.Date.HanDate({
		year: 1,
		month: 1,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getEra());
}

function testHanDateGetEraBAPYear0() {
    var hd = new ilib.Date.HanDate({
		year: 0,
		month: 12,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(-1, hd.getEra());
}

function testHanDateSetTimeZone() {
    var hd = new ilib.Date.HanDate({
    	year: 4707, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(hd);
    
    assertEquals("America/Los_Angeles", hd.getTimeZone());
    
    hd.setTimeZone("Asia/Tokyo");
    
    assertEquals("Asia/Tokyo", hd.getTimeZone());
}

function testHanDateSetTimeZoneNotString() {
    var hd = new ilib.Date.HanDate({
    	year: 4707, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(hd);
    
    assertEquals("America/Los_Angeles", hd.getTimeZone());
    
    hd.setTimeZone(345);
    
    assertEquals("America/Los_Angeles", hd.getTimeZone());
}

function testHanDateSetTimeZoneUndefined() {
    var hd = new ilib.Date.HanDate({
    	year: 4707, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(hd);
    
    assertEquals("America/Los_Angeles", hd.getTimeZone());

    // clears it out
    hd.setTimeZone(undefined);
    
    assertEquals("local", hd.getTimeZone());
}

function testHanDateSetTimeZoneEmpty() {
    var hd = new ilib.Date.HanDate({
    	year: 4707, 
    	month: 3, 
    	day: 8,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(hd);
    
    assertEquals("America/Los_Angeles", hd.getTimeZone());
    
    // clears it out
    hd.setTimeZone("");
    
    assertEquals("local", hd.getTimeZone());
}

function testHanDateInitWithUnixTimeRightTimeZone() {
    var hd = new ilib.Date.HanDate({
    	unixtime: 0
    });
    assertNotNull(hd);
    
    assertEquals("local", hd.getTimeZone());
}

function testHanDateInitWithJDRightTimeZone() {
    var hd = new ilib.Date.HanDate({
    	julianday: 0
    });
    assertNotNull(hd);
    
    assertEquals("local", hd.getTimeZone());
}

function testHanDateInitWithRDRightTimeZone() {
    var hd = new ilib.Date.HanDate({
    	rd: 0
    });
    assertNotNull(hd);
    
    assertEquals("local", hd.getTimeZone());
}

function testHanDateRoundTripConstruction() {
    var hd = new ilib.Date.HanDate({
    	year: 4707,
    	month: 8,
    	day: 12,
    	timezone: "local"
    });
    assertNotNull(hd);
    // console.log("hd is " + JSON.stringify(hd, undefined, 4));
    
    var u = hd.getTime();
    // console.log("unixtime is " + u);
    var hd2 = new ilib.Date.HanDate({
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

function testHanDateRoundTripConstruction2() {
    var hd = new ilib.Date.HanDate({
    	year: 4707,
    	month: 8,
    	day: 12,
    	timezone: "America/Los_Angeles"
    });
    assertNotNull(hd);
    // console.log("hd is " + JSON.stringify(hd, undefined, 4));
    
    var u = hd.getTime();
    // console.log("unixtime is " + u);
    var hd2 = new ilib.Date.HanDate({
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
