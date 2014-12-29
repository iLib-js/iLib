/*
 * testhan.js - test the Han Chinese lunar calendar
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

function testHanGetNumMonths4687() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(13, cal.getNumMonths(4687));
}

function testHanGetMonLength1() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(29, cal.getMonLength(1, 4687));
}

function testHanGetMonLength2() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(2, 4687));
}

function testHanGetMonLength3() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(29, cal.getMonLength(3, 4687));
}

function testHanGetMonLength4() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(29, cal.getMonLength(4, 4687));
}

function testHanGetMonLength5() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(5, 4687));
}

function testHanGetMonLength6() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(29, cal.getMonLength(6, 4687));
}

function testHanGetMonLength7() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(29, cal.getMonLength(7, 4687));
}

function testHanGetMonLength8() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(8, 4687));
}

function testHanGetMonLength9() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(29, cal.getMonLength(9, 4687));
}

function testHanGetMonLength10() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(10, 4687));
}

function testHanGetMonLength11() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(11, 4687));
}

function testHanGetMonLength12() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(12, 4687));
}

function testHanGetMonLength13() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(13, 4687));
}

var hanLeapYears = [
   	// year	jd		rd	isleapyear	leapMonth	gregYear
	[ 4650,	2434422.5,	712998,	false,	-1,	1953],
	[ 4651,	2434776.5,	713352,	false,	-1,	1954],
	[ 4652,	2435131.5,	713707,	true,	3,	1955],
	[ 4653,	2435515.5,	714091,	false,	-1,	1956],
	[ 4654,	2435869.5,	714445,	true,	8,	1957],
	[ 4655,	2436252.5,	714828,	false,	-1,	1958],
	[ 4656,	2436607.5,	715183,	false,	-1,	1959],
	[ 4657,	2436961.5,	715537,	true,	6,	1960],
	[ 4658,	2437345.5,	715921,	false,	-1,	1961],
	[ 4659,	2437700.5,	716276,	false,	-1,	1962],
	[ 4660,	2438054.5,	716630,	true,	4,	1963],
	[ 4661,	2438438.5,	717014,	false,	-1,	1964],
	[ 4662,	2438793.5,	717369,	false,	-1,	1965],
	[ 4663,	2439146.5,	717722,	true,	3,	1966],
	[ 4664,	2439530.5,	718106,	false,	-1,	1967],
	[ 4665,	2439885.5,	718461,	true,	7,	1968],
	[ 4666,	2440269.5,	718845,	false,	-1,	1969],
	[ 4667,	2440623.5,	719199,	false,	-1,	1970],
	[ 4668,	2440978.5,	719554,	true,	5,	1971],
	[ 4669,	2441362.5,	719938,	false,	-1,	1972],
	[ 4670,	2441716.5,	720292,	false,	-1,	1973],
	[ 4671,	2442070.5,	720646,	true,	4,	1974],
	[ 4672,	2442454.5,	721030,	false,	-1,	1975],
	[ 4673,	2442808.5,	721384,	true,	8,	1976],
	[ 4674,	2443192.5,	721768,	false,	-1,	1977],
	[ 4675,	2443546.5,	722122,	false,	-1,	1978],
	[ 4676,	2443901.5,	722477,	true,	6,	1979],
	[ 4677,	2444285.5,	722861,	false,	-1,	1980],
	[ 4678,	2444640.5,	723216,	false,	-1,	1981],
	[ 4679,	2444994.5,	723570,	true,	4,	1982],
	[ 4680,	2445378.5,	723954,	false,	-1,	1983],
	[ 4681,	2445732.5,	724308,	true,	10,	1984],
	[ 4682,	2446116.5,	724692,	false,	-1,	1985],
	[ 4683,	2446470.5,	725046,	false,	-1,	1986],
	[ 4684,	2446824.5,	725400,	true,	6,	1987],
	[ 4685,	2447208.5,	725784,	false,	-1,	1988],
	[ 4686,	2447563.5,	726139,	false,	-1,	1989],
	[ 4687,	2447918.5,	726494,	true,	5,	1990],
	[ 4688,	2448302.5,	726878,	false,	-1,	1991],
	[ 4689,	2448656.5,	727232,	false,	-1,	1992],
	[ 4690,	2449010.5,	727586,	true,	3,	1993],
	[ 4691,	2449393.5,	727969,	false,	-1,	1994],
	[ 4692,	2449748.5,	728324,	true,	8,	1995],
	[ 4693,	2450132.5,	728708,	false,	-1,	1996],
	[ 4694,	2450486.5,	729062,	false,	-1,	1997],
	[ 4695,	2450841.5,	729417,	true,	5,	1998],
	[ 4696,	2451225.5,	729801,	false,	-1,	1999],
	[ 4697,	2451579.5,	730155,	false,	-1,	2000],
	[ 4698,	2451933.5,	730509,	true,	4,	2001],
	[ 4699,	2452317.5,	730893,	false,	-1,	2002],
	[ 4700,	2452671.5,	731247,	false,	-1,	2003],
	[ 4701,	2453026.5,	731602,	true,	2,	2004],
	[ 4702,	2453410.5,	731986,	false,	-1,	2005],
	[ 4703,	2453764.5,	732340,	true,	7,	2006],
	[ 4704,	2454149.5,	732725,	false,	-1,	2007],
	[ 4705,	2454503.5,	733079,	false,	-1,	2008],
	[ 4706,	2454857.5,	733433,	true,	5,	2009],
	[ 4707,	2455241.5,	733817,	false,	-1,	2010],
	[ 4708,	2455595.5,	734171,	false,	-1,	2011],
	[ 4709,	2455949.5,	734525,	true,	4,	2012],
	[ 4710,	2456333.5,	734909,	false,	-1,	2013],
	[ 4711,	2456688.5,	735264,	true,	9,	2014],
	[ 4712,	2457072.5,	735648,	false,	-1,	2015],
	[ 4713,	2457426.5,	736002,	false,	-1,	2016],
	[ 4714,	2457781.5,	736357,	true,	6,	2017],
	[ 4715,	2458165.5,	736741,	false,	-1,	2018],
	[ 4716,	2458519.5,	737095,	false,	-1,	2019],
	[ 4717,	2458873.5,	737449,	true,	4,	2020]
];

function testHanIsLeapYear() {
    var cal = new ilib.Cal.Han();
    
    for (var i = 0; i < hanLeapYears.length; i++) {
    	var n = hanLeapYears[i][0];
    	assertEquals(hanLeapYears[i][3], cal.isLeapYear(n));
    }
}

function testHanGetNumMonths() {
    var cal = new ilib.Cal.Han();
    
    for (var i = 0; i < hanLeapYears.length; i++) {
    	var n = hanLeapYears[i][0];
    	assertEquals(hanLeapYears[i][3] ? 13 : 12, cal.getNumMonths(n));
    }
}

function testHanGetLeapMonth() {
    var cal = new ilib.Cal.Han();
    
    for (var i = 0; i < hanLeapYears.length; i++) {
    	var n = hanLeapYears[i][0];
    	assertEquals(hanLeapYears[i][4], cal.getLeapMonth(n));
    }
}

function testHanNewYears() {
    var cal = new ilib.Cal.Han();
    
    for (var i = 0; i < hanLeapYears.length; i++) {
    	var n = hanLeapYears[i][0];
    	assertEquals(hanLeapYears[i][1], cal.newYears(n));
    }
}

function testHanNewDateInstance() {
    var cal = new ilib.Cal.Han();
    var d = cal.newDateInstance({
    	year: 4681,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertTrue(d instanceof ilib.Date.HanDate);
}
