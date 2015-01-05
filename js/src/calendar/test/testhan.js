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

var testDatesChineseAstro1 = [
  	// jd			deg					current major ST	han next solar long.	current minor ST	minor ST on or aft
	[ 1507231.5,	-214193.32337962964,	5.0,	-213920.51787281086,	6.0,	-214176.22370667264],
	[ 1660037.5,	-61387.323379629626,	10.0,	-61249.369028268404,	10.0,	-61385.444340543145],
	[ 1746893.5,	25468.67662037037,	8.0,	25678.2304087151,	8.0,	25483.357150583466],
	[ 1770641.5,	49216.676620370374,	8.0,	49418.95965836868,	8.0,	49224.13929101463],
	[ 1892731.5,	171306.67662037036,	11.0,	171409.78696368195,	12.0,	171333.4749999702],
	[ 1931579.5,	210154.67662037036,	3.0,	210490.67934626466,	4.0,	210172.48814278847],
	[ 1974851.5,	253426.67662037036,	9.0,	253589.24372347264,	10.0,	253454.02914428158],
	[ 2091164.5,	369739.67662037036,	3.0,	370101.44639907114,	3.0,	369751.76511813333],
	[ 2121509.5,	400084.67662037036,	4.0,	400416.52726409596,	4.0,	400098.1901484494],
	[ 2155779.5,	434354.67662037036,	2.0,	434384.0303209763,	2.0,	434368.614228359],
	[ 2174029.5,	452604.67662037036,	1.0,	452646.1461670075,	2.0,	452630.7312855567],
	[ 2191584.5,	470159.67662037036,	2.0,	470177.7557296877,	2.0,	470162.3543415879],
	[ 2195261.5,	473836.67662037036,	3.0,	474195.4159466373,	3.0,	473845.69711954164],
	[ 2229274.5,	507849.67662037036,	4.0,	508162.92789982166,	5.0,	507875.9730010715],
	[ 2245580.5,	524155.67662037036,	12.0,	524233.57768617425,	12.0,	524157.94819703535],
	[ 2266100.5,	544675.6766203704,	2.0,	544687.133715068,	3.0,	544702.6323386605],
	[ 2288542.5,	567117.6766203704,	7.0,	567332.142340577,	8.0,	567138.0301526968],
	[ 2290901.5,	569476.6766203704,	1.0,	569523.588568101,	1.0,	569477.9000633665],
	[ 2323140.5,	601715.6766203704,	4.0,	602030.1358997995,	5.0,	601743.0790532649],
	[ 2334848.5,	613423.6766203704,	5.0,	613717.8814901164,	5.0,	613430.8001055417],
	[ 2348020.5,	626595.6766203704,	6.0,	626866.5906548423,	6.0,	626610.8866520353],
	[ 2366978.5,	645553.6766203704,	4.0,	645859.1712437994,	5.0,	645572.0629274619],
	[ 2385648.5,	664223.6766203704,	6.0,	664486.5195703104,	6.0,	664230.7843155959],
	[ 2392825.5,	671400.6766203704,	2.0,	671426.1243360509,	2.0,	671410.806595866],
	[ 2416223.5,	694798.6766203704,	2.0,	694801.6142626695,	3.0,	694817.0495115437],
	[ 2425848.5,	704423.6666666666,	7.0,	704663.1707556676,	7.0,	704438.485820114],
	[ 2430266.5,	708841.6666666666,	8.0,	709046.0684573387,	8.0,	708852.0263073004],
	[ 2430833.5,	709408.6666666666,	2.0,	709411.3133945792,	3.0,	709426.7452013097],
	[ 2431004.5,	709579.6666666666,	8.0,	709776.5535893324,	8.0,	709582.5069423852],
	[ 2448698.5,	727273.6666666666,	1.0,	727308.1644219602,	2.0,	727292.8644105808],
	[ 2450138.5,	728713.6666666666,	1.0,	728769.131665963,	1.0,	728723.6317172738],
	[ 2465737.5,	744312.6666666666,	9.0,	744474.5530561531,	10.0,	744340.3713539304],
	[ 2486076.5,	764651.6666666666,	5.0,	764928.1072765427,	6.0,	764672.2571517569],
];

function testDegreesInBeijing() {
	var l;
	ilib.Date.initAstro(true, undefined, undefined);
	for (var i = 0; i < testDatesChineseAstro1.length; i++) {
    
        info("testing jd=" + testDatesChineseAstro1[i][0]);
        //try {
        var jd = testDatesChineseAstro1[i][0];
        var deg = ilib.Date._universalFromLocal(jd, ilib.Cal.Han._chineseTZ(jd)) - ilib.Date.RataDie.gregorianEpoch;
        assertRoughlyEquals("testing current major solar term for " + testDatesChineseAstro1[i][0], testDatesChineseAstro1[i][1], deg, 1e-9);
    	//} catch (e) {
        //	console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
        //}
    } 
}

function testCurrentMajorSolarTerm() {
	var l;
	ilib.Date.initAstro(true, undefined, undefined);
	for (var i = 0; i < testDatesChineseAstro1.length; i++) {
    
        info("testing jd=" + testDatesChineseAstro1[i][0]);
        //try {
        var jd = testDatesChineseAstro1[i][0];
        l = ilib.Cal.Han._currentMajorST(jd);
        assertRoughlyEquals("testing current major solar term for " + testDatesChineseAstro1[i][0], testDatesChineseAstro1[i][2], l, 1e-9);
    	//} catch (e) {
        //	console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
        //}
    } 
}

function testHanNextSolarLongitude() {
	var l;
	ilib.Date.initAstro(true, undefined, undefined);
	for (var i = 0; i < testDatesChineseAstro1.length; i++) {
    
        info("testing jd=" + testDatesChineseAstro1[i][0]);
        //try {
        var jd = testDatesChineseAstro1[i][0];
        l = ilib.Cal.Han._hanNextSolarLongitude(jd, 30.0) - ilib.Date.RataDie.gregorianEpoch;
        assertRoughlyEquals("testing next solar longitude for " + testDatesChineseAstro1[i][0], testDatesChineseAstro1[i][3], l, 1e-5);
    	//} catch (e) {
        //	console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
        //}
    } 
}

var testDatesChineseAstro2 = [
  	// jd			new moon before		new moon on or after	no major ST	major ST on or after
	[ 1507231.5,	-214204.0,			-214175.0,		false,		-214191.63472866686],
	[ 1660037.5,	-61413.0,			-61383.0,		true,		-61370.73303351946],
	[ 1746893.5,	25466.0,			25496.0,		true,		25498.21582920543],
	[ 1770641.5,	49209.0,			49238.0,		true,		49239.00668502776],
	[ 1892731.5,	171288.0,			171318.0,		true,		171318.59023477943],
	[ 1931579.5,	210151.0,			210181.0,		false,		210156.74612063644],
	[ 1974851.5,	253413.0,			253443.0,		false,		253439.3165107484],
	[ 2091164.5,	369734.0,			369764.0,		true,		369767.4172919335],
	[ 2121509.5,	400062.0,			400091.0,		true,		400113.93568994536],
	[ 2155779.5,	434347.0,			434376.0,		true,		434384.0303224664],
	[ 2174029.5,	452597.0,			452627.0,		false,		452615.4534497873],
	[ 2191584.5,	470138.0,			470167.0,		true,		470177.75572521734],
	[ 2195261.5,	473829.0,			473859.0,		true,		473861.320345154],
	[ 2229274.5,	507849.0,			507878.0,		false,		507860.2328061121],
	[ 2245580.5,	524149.0,			524179.0,		false,		524172.8345683732],
	[ 2266100.5,	544673.0,			544703.0,		false,		544687.1337111937],
	[ 2288542.5,	567117.0,			567146.0,		false,		567122.8349659285],
	[ 2290901.5,	569449.0,			569479.0,		true,		569492.9961213906],
	[ 2323140.5,	601697.0,			601727.0,		true,		601727.3421156994],
	[ 2334848.5,	613420.0,			613450.0,		false,		613446.5208890564],
	[ 2348020.5,	626591.0,			626620.0,		true,		626626.4672954933],
	[ 2366978.5,	645550.0,			645579.0,		false,		645556.3239765117],
	[ 2385648.5,	664213.0,			664243.0,		true,		664246.3762916852],
	[ 2392825.5,	671389.0,			671419.0,		true,		671426.124336349],
	[ 2416223.5,	694778.0,			694807.0,		false,		694801.6142622171],
	[ 2425848.5,	704404.0,			704433.0,		true,		704453.8694904867],
	[ 2430266.5,	708834.0,			708863.0,		true,		708867.1437302814],
	[ 2430833.5,	709395.0,			709424.0,		false,		709411.313395883],
	[ 2431004.5,	709572.0,			709602.0,		false,		709597.630493654],
	[ 2448698.5,	727261.0,			727291.0,		false,		727277.6999041374],
	[ 2450138.5,	728708.0,			728737.0,		true,		728738.6686686199],
	[ 2465737.5,	744300.0,			744329.0,		false,		744325.5623915427],
	[ 2486076.5,	764646.0,			764676.0,		false,		764656.5644218596],
];

function testNewMoonBefore() {
	var l;
	ilib.Date.initAstro(true, undefined, undefined);
	for (var i = 0; i < testDatesChineseAstro2.length; i++) {
    
        info("testing jd=" + testDatesChineseAstro2[i][0]);
        //try {
        var jd = testDatesChineseAstro2[i][0];
        l = ilib.Cal.Han._newMoonBefore(jd) - ilib.Date.RataDie.gregorianEpoch;
        assertRoughlyEquals("testing new moon before " + testDatesChineseAstro2[i][0], testDatesChineseAstro2[i][1], l, 1e-5);
    	//} catch (e) {
        //	console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
        //}
    } 
}

function testNewMoonOnOrAfter() {
	var l;
	ilib.Date.initAstro(true, undefined, undefined);
	for (var i = 0; i < testDatesChineseAstro2.length; i++) {
    
        info("testing jd=" + testDatesChineseAstro2[i][0]);
        //try {
        var jd = testDatesChineseAstro2[i][0];
        l = ilib.Cal.Han._newMoonOnOrAfter(jd) - ilib.Date.RataDie.gregorianEpoch;
        assertRoughlyEquals("testing new moon on or after " + testDatesChineseAstro2[i][0], testDatesChineseAstro2[i][2], l, 1e-5);
    	//} catch (e) {
        //	console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
        //}
    } 
}

function testNoMajorST() {
	var l;
	ilib.Date.initAstro(true, undefined, undefined);
	for (var i = 0; i < testDatesChineseAstro2.length; i++) {
    
        info("testing jd=" + testDatesChineseAstro2[i][0]);
        //try {
        var jd = testDatesChineseAstro2[i][0];
        l = ilib.Cal.Han._noMajorST(jd);
        assertEquals("testing no major solar term for " + testDatesChineseAstro2[i][0], testDatesChineseAstro2[i][3], l);
    	//} catch (e) {
        //	console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
        //}
    } 
}

function testMajorSTOnOrAfter() {
	var l;
	ilib.Date.initAstro(true, undefined, undefined);
	for (var i = 0; i < testDatesChineseAstro2.length; i++) {
    
        info("testing jd=" + testDatesChineseAstro2[i][0]);
        //try {
        var jd = testDatesChineseAstro2[i][0];
        l = ilib.Cal.Han._majorSTOnOrAfter(jd) - ilib.Date.RataDie.gregorianEpoch;
        assertRoughlyEquals("testing major solar term on or after for " + testDatesChineseAstro2[i][0], testDatesChineseAstro2[i][4], l, 1e-5);
    	//} catch (e) {
        //	console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
        //}
    } 
}

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
