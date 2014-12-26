/*
 * testhandate.js - test the Han Chinese Lunar date object
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
	for (var i = 0; i < testDatesChineseAstro1.length; i++) {
    
        info("testing jd=" + testDatesChineseAstro1[i][0]);
        //try {
        var rd = testDatesChineseAstro1[i][0] - ilib.Date.RataDie.gregorianEpoch;
        var deg = ilib.Date._universalFromLocal(rd, ilib.Date.HanDate._chineseTZ(rd))
        assertRoughlyEquals("testing current major solar term for " + testDatesChineseAstro1[i][0], testDatesChineseAstro1[i][1], deg, 1e-9);
    	//} catch (e) {
        //	console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
        //}
    } 
}

function testCurrentMajorSolarTerm() {
	var l;
	for (var i = 0; i < testDatesChineseAstro1.length; i++) {
    
        info("testing jd=" + testDatesChineseAstro1[i][0]);
        //try {
        var rd = testDatesChineseAstro1[i][0] - ilib.Date.RataDie.gregorianEpoch;
        l = ilib.Date.HanDate._currentMajorST(rd);
        assertRoughlyEquals("testing current major solar term for " + testDatesChineseAstro1[i][0], testDatesChineseAstro1[i][2], l, 1e-9);
    	//} catch (e) {
        //	console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
        //}
    } 
}

function testHanNextSolarLongitude() {
	var l;
	for (var i = 0; i < testDatesChineseAstro1.length; i++) {
    
        info("testing jd=" + testDatesChineseAstro1[i][0]);
        //try {
        var rd = testDatesChineseAstro1[i][0] - ilib.Date.RataDie.gregorianEpoch;
        l = ilib.Date.HanDate._hanNextSolarLongitude(rd, 30.0);
        assertRoughlyEquals("testing next solar longitude for " + testDatesChineseAstro1[i][0], testDatesChineseAstro1[i][3], l, 1e-5);
    	//} catch (e) {
        //	console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
        //}
    } 
}

function testCurrentMinorSolarTerm() {
	var l;
	for (var i = 0; i < testDatesChineseAstro1.length; i++) {
    
        info("testing jd=" + testDatesChineseAstro1[i][0]);
        //try {
        var rd = testDatesChineseAstro1[i][0] - ilib.Date.RataDie.gregorianEpoch;
        l = ilib.Date.HanDate._currentMinorST(rd);
        assertRoughlyEquals("testing current minor solar term for " + testDatesChineseAstro1[i][0], testDatesChineseAstro1[i][4], l, 1e-9);
    	//} catch (e) {
        //	console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
        //}
    } 
}

function testMinorSolarTermOnOrAfter() {
	var l;
	for (var i = 0; i < testDatesChineseAstro1.length; i++) {
    
        info("testing jd=" + testDatesChineseAstro1[i][0]);
        //try {
        var rd = testDatesChineseAstro1[i][0] - ilib.Date.RataDie.gregorianEpoch;
        l = ilib.Date.HanDate._minorSTOnOrAfter(rd);
        assertRoughlyEquals("testing minor solar term on or after for " + testDatesChineseAstro1[i][0], testDatesChineseAstro1[i][5], l, 1e-5);
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
	for (var i = 0; i < testDatesChineseAstro2.length; i++) {
    
        info("testing jd=" + testDatesChineseAstro2[i][0]);
        //try {
        var rd = testDatesChineseAstro2[i][0] - ilib.Date.RataDie.gregorianEpoch;
        l = ilib.Date.HanDate._newMoonBefore(rd);
        assertRoughlyEquals("testing new moon before " + testDatesChineseAstro2[i][0], testDatesChineseAstro2[i][1], l, 1e-5);
    	//} catch (e) {
        //	console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
        //}
    } 
}

function testNewMoonOnOrAfter() {
	var l;
	for (var i = 0; i < testDatesChineseAstro2.length; i++) {
    
        info("testing jd=" + testDatesChineseAstro2[i][0]);
        //try {
        var rd = testDatesChineseAstro2[i][0] - ilib.Date.RataDie.gregorianEpoch;
        l = ilib.Date.HanDate._newMoonOnOrAfter(rd);
        assertRoughlyEquals("testing new moon on or after " + testDatesChineseAstro2[i][0], testDatesChineseAstro2[i][2], l, 1e-5);
    	//} catch (e) {
        //	console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
        //}
    } 
}

function testNoMajorST() {
	var l;
	for (var i = 0; i < testDatesChineseAstro2.length; i++) {
    
        info("testing jd=" + testDatesChineseAstro2[i][0]);
        //try {
        var rd = testDatesChineseAstro2[i][0] - ilib.Date.RataDie.gregorianEpoch;
        l = ilib.Date.HanDate._noMajorST(rd);
        assertEquals("testing no major solar term for " + testDatesChineseAstro2[i][0], testDatesChineseAstro2[i][3], l);
    	//} catch (e) {
        //	console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
        //}
    } 
}

function testMajorSTOnOrAfter() {
	var l;
	for (var i = 0; i < testDatesChineseAstro2.length; i++) {
    
        info("testing jd=" + testDatesChineseAstro2[i][0]);
        //try {
        var rd = testDatesChineseAstro2[i][0] - ilib.Date.RataDie.gregorianEpoch;
        l = ilib.Date.HanDate._majorSTOnOrAfter(rd);
        assertRoughlyEquals("testing major solar term on or after for " + testDatesChineseAstro2[i][0], testDatesChineseAstro2[i][4], l, 1e-5);
    	//} catch (e) {
        //	console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
        //}
    } 
}

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
    	month: 12,
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
    	month: 12,
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
    	day: 29,
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
    	month: 12,
    	day: 29,
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
    	month: 12,
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
    	year: 0,
    	month: 12,
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
    	year: 2,
    	month: 12,
    	day: 29,
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
    	year: 3,
    	month: 12,
    	day: 29,
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

/* julian date is rd 366 + epoch */
function testHanDateConstructorFromJD() {
    var hd = new ilib.Date.HanDate({julianday: 1948685.5, timezone: "Etc/UTC"});
    
    assertEquals('object', typeof(hd));
    assertEquals(366, hd.getRataDie());
    assertEquals(2, hd.getYears());
    assertEquals(1, hd.getMonths());
    assertEquals(1, hd.getDays());
    assertEquals(0, hd.getHours());
    assertEquals(0, hd.getMinutes());
    assertEquals(0, hd.getSeconds());
    assertEquals(0, hd.getMilliseconds());
}

// year 4 was a leap year, so Esfand 0004 contains 30 days instead of 29, and 
// Farvardin 1 0005 is one day later than expected. RD is 1462
function testHanDateAfterLeapYear() {
    var hd = new ilib.Date.HanDate({julianday: 1949781.9, timezone: "Etc/UTC"});  // Far 1, 0005, 9:36am
    
    assertEquals('object', typeof(hd));
    assertEquals(1462.4, hd.getRataDie());
    assertEquals(5, hd.getYears());
    assertEquals(1, hd.getMonths());
    assertEquals(1, hd.getDays());
    assertEquals(9, hd.getHours());
    assertEquals(36, hd.getMinutes());
    assertEquals(0, hd.getSeconds());
    assertEquals(0, hd.getMilliseconds());
}

var testDatesHan = [
	// jd			cycle	year	month	day	isLeapYear	isLeapMonth	day of week
	[ 1507231.5,	35,	11,	6,	12,	false,	false,	0],
	[ 1660037.5,	42,	9,	10,	27,	false,	false,	3],
	[ 1746893.5,	46,	7,	8,	4,	true,	false,	3],
	[ 1770641.5,	47,	12,	8,	9,	true,	false,	0],
	[ 1892731.5,	52,	46,	11,	20,	false,	false,	3],
	[ 1931579.5,	54,	33,	4,	5,	false,	false,	1],
	[ 1974851.5,	56,	31,	10,	15,	false,	false,	6],
	[ 2091164.5,	61,	50,	3,	7,	true,	false,	0],
	[ 2121509.5,	63,	13,	4,	24,	false,	false,	0],
	[ 2155779.5,	64,	47,	2,	9,	false,	false,	5],
	[ 2174029.5,	65,	37,	2,	9,	false,	false,	6],
	[ 2191584.5,	66,	25,	2,	23,	false,	false,	5],
	[ 2195261.5,	66,	35,	3,	9,	true,	false,	0],
	[ 2229274.5,	68,	8,	5,	2,	false,	false,	0],
	[ 2245580.5,	68,	53,	1,	8,	true,	false,	3],
	[ 2266100.5,	69,	49,	3,	4,	false,	false,	6],
	[ 2288542.5,	70,	50,	8,	2,	true,	false,	6],
	[ 2290901.5,	70,	57,	1,	29,	false,	false,	6],
	[ 2323140.5,	72,	25,	4,	20,	true,	true,	3],
	[ 2334848.5,	72,	57,	6,	5,	true,	false,	0],
	[ 2348020.5,	73,	33,	6,	6,	true,	false,	5],
	[ 2366978.5,	74,	25,	5,	5,	false,	false,	0],
	[ 2385648.5,	75,	16,	6,	12,	true,	false,	1],
	[ 2392825.5,	75,	36,	2,	13,	false,	false,	3],
	[ 2416223.5,	76,	40,	3,	22,	true,	false,	0],
	[ 2425848.5,	77,	6,	7,	21,	false,	false,	0],
	[ 2430266.5,	77,	18,	8,	9,	true,	false,	1],
	[ 2430833.5,	77,	20,	3,	15,	false,	false,	1],
	[ 2431004.5,	77,	20,	9,	9,	false,	false,	4],
	[ 2448698.5,	78,	9,	2,	14,	false,	false,	2],
	[ 2450138.5,	78,	13,	1,	7,	false,	false,	0],
	[ 2465737.5,	78,	55,	10,	14,	false,	false,	3],
	[ 2486076.5,	79,	51,	6,	7,	false,	false,	0],
];

var testDatesHanOld = [
//   jd         cycle  year  month  day  hour  minute  second  millisecond  dayofweek
    [1507231.5, 35,    11,   6,     12,  0,    0,      0,      0,           0],
    [1660037.5, 42,    9,    10,    27,  0,    0,      0,      0,           3],
    [1746893.5, 46,    7,    8,     4,   0,    0,      0,      0,           3],
    [1770641.5, 47,    12,   8,     9,   0,    0,      0,      0,           0],
    [1892731.5, 52,    46,   11,    20,  0,    0,      0,      0,           3],
    [1931579.5, 54,    33,   4,     5,   0,    0,      0,      0,           1],
    [1974851.5, 56,    31,   10,    15,  0,    0,      0,      0,           6],
    [2091164.5, 61,    50,   3,     7,   0,    0,      0,      0,           0],
    [2121509.5, 63,    13,   4,     24,  0,    0,      0,      0,           0],
    [2155779.5, 64,    47,   2,     9,   0,    0,      0,      0,           5],
    [2174029.5, 65,    37,   2,     9,   0,    0,      0,      0,           6],
    [2191584.5, 66,    25,   2,     23,  0,    0,      0,      0,           5],
    [2195261.5, 66,    35,   3,     9,   0,    0,      0,      0,           0],
    [2229274.5, 68,    8,    5,     2,   0,    0,      0,      0,           0],
    [2245580.5, 68,    53,   1,     8,   0,    0,      0,      0,           3],
    [2266100.5, 69,    49,   3,     4,   0,    0,      0,      0,           6],
    [2288542.5, 70,    50,   8,     2,   0,    0,      0,      0,           6],
    [2290901.5, 70,    57,   1,     29,  0,    0,      0,      0,           6],
    [2323140.5, 72,    25,   4,     20,  0,    0,      0,      0,           3],
    [2334848.5, 72,    57,   6,     5,   0,    0,      0,      0,           0],
    [2348020.5, 73,    33,   6,     6,   0,    0,      0,      0,           5],
    [2366978.5, 74,    25,   5,     5,   0,    0,      0,      0,           0],
    [2385648.5, 75,    16,   6,     12,  0,    0,      0,      0,           1],
    [2392825.5, 75,    36,   2,     13,  0,    0,      0,      0,           3],
    [2416223.5, 76,    40,   3,     22,  0,    0,      0,      0,           0],
    [2425848.5, 77,    6,    7,     21,  0,    0,      0,      0,           0],
    [2430266.5, 77,    18,   8,     9,   0,    0,      0,      0,           1],
    [2430833.5, 77,    20,   3,     15,  0,    0,      0,      0,           1],
    [2431004.5, 77,    20,   9,     9,   0,    0,      0,      0,           4],
    [2448698.5, 78,    9,    2,     14,  0,    0,      0,      0,           2],
    [2450138.5, 78,    13,   1,     7,   0,    0,      0,      0,           0],
    [2465737.5, 78,    55,   10,    14,  0,    0,      0,      0,           3],
    [2486076.5, 79,    51,   6,     7,   0,    0,      0,      0,           0]
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
        assertEquals(testDatesHan[i][8], hd.getDayOfWeek());
    }
}

function testHanDateConstructorFull() {
    var hd = new ilib.Date.HanDate({
		year: 1392,
		month: 9,
		day: 23,
		hour: 16,
		minute: 7,
		second: 12,
		millisecond: 123
	});
    
    assertNotNull(hd);
    
    assertEquals(1392, hd.getYears());
    assertEquals(9, hd.getMonths());
    assertEquals(23, hd.getDays());
    assertEquals(16, hd.getHours());
    assertEquals(7, hd.getMinutes());
    assertEquals(12, hd.getSeconds());
    assertEquals(123, hd.getMilliseconds());
}

function testHanDateConstructorFullWithStrings() {
    var hd = new ilib.Date.HanDate({
		year: "1392", 
		month: "9",
		day: "23", 
		hour: "16", 
		minute: "7", 
		second: "12", 
		millisecond: "123"
	});
    
    assertNotNull(hd);
    
    assertEquals(1392, hd.getYears());
    assertEquals(9, hd.getMonths());
    assertEquals(23, hd.getDays());
    assertEquals(16, hd.getHours());
    assertEquals(7, hd.getMinutes());
    assertEquals(12, hd.getSeconds());
    assertEquals(123, hd.getMilliseconds());
}

function testHanDateConstructorCopy() {
    var hd = new ilib.Date.HanDate({
        year: 1392, 
        month: 9, 
        day: 23, 
        hour: 16, 
        minute: 7, 
        second: 12, 
        millisecond: 123
    });
    
    assertNotNull(hd);
    
    assertEquals(1392, hd.getYears());
    assertEquals(9, hd.getMonths());
    assertEquals(23, hd.getDays());
    assertEquals(16, hd.getHours());
    assertEquals(7, hd.getMinutes());
    assertEquals(12, hd.getSeconds());
    assertEquals(123, hd.getMilliseconds());
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
		year: 1393,
		month: 3,
		day: 16
	});
    
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek());
}

function testGetDayOfWeekWithTime() {
    var hd = new ilib.Date.HanDate({
		year: 1393,
		month: 3,
		day: 16,
		hour: 8,
		minute: 39,
		second: 34
	});
    
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek());
}

function testHanDateTestGetTimeZero() {
    var hd = new ilib.Date.HanDate({
		year: 1348,
		month: 10,
		day: 11,
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
		year: 1348,
		month: 10,
		day: 11,
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
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    // Sunday on or before hd 5 days before 
    assertEquals(rd-5, hd.onOrBefore(0).getRataDie());
}

function testHanDateOnOrBeforeMon() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-4, hd.onOrBefore(1).getRataDie());
}

function testHanDateOnOrBeforeTue() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-3, hd.onOrBefore(2).getRataDie());
}

function testHanDateOnOrBeforeWed() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-2, hd.onOrBefore(3).getRataDie());
}

function testHanDateOnOrBeforeThu() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-1, hd.onOrBefore(4).getRataDie());
}

function testHanDateOnOrBeforeFri() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd, hd.onOrBefore(5).getRataDie());
}

function testHanDateOnOrBeforeSat() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-6, hd.onOrBefore(6).getRataDie());
}

function testHanDateOnOrAfterSun() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    // Sunday on or before hd 5 days before 
    assertEquals(rd+2, hd.onOrAfter(0).getRataDie());
}

function testHanDateOnOrAfterMon() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+3, hd.onOrAfter(1).getRataDie());
}

function testHanDateOnOrAfterTue() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+4, hd.onOrAfter(2).getRataDie());
}

function testHanDateOnOrAfterWed() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+5, hd.onOrAfter(3).getRataDie());
}

function testHanDateOnOrAfterThu() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+6, hd.onOrAfter(4).getRataDie());
}

function testHanDateOnOrAfterFri() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd, hd.onOrAfter(5).getRataDie());
}

function testHanDateOnOrAfterSat() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+1, hd.onOrAfter(6).getRataDie());
}

function testHanDateBeforeSun() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    // Sunday before hd 5 days before 
    assertEquals(rd-5, hd.before(0).getRataDie());
}

function testHanDateBeforeMon() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-4, hd.before(1).getRataDie());
}

function testHanDateBeforeTue() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-3, hd.before(2).getRataDie());
}

function testHanDateBeforeWed() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-2, hd.before(3).getRataDie());
}

function testHanDateBeforeThu() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-1, hd.before(4).getRataDie());
}

function testHanDateBeforeFri() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-7, hd.before(5).getRataDie());
}

function testHanDateBeforeSat() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd-6, hd.before(6).getRataDie());
}

function testHanDateAfterSun() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    // Sunday on or before hd 5 days before 
    assertEquals(rd+2, hd.after(0).getRataDie());
}

function testHanDateAfterMon() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+3, hd.after(1).getRataDie());
}

function testHanDateAfterTue() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+4, hd.after(2).getRataDie());
}

function testHanDateAfterWed() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+5, hd.after(3).getRataDie());
}

function testHanDateAfterThu() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+6, hd.after(4).getRataDie());
}

function testHanDateAfterFri() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+7, hd.after(5).getRataDie());
}

function testHanDateAfterSat() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 27
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getDayOfWeek()); // Friday
    var rd = hd.getRataDie();
    
    assertEquals(rd+1, hd.after(6).getRataDie());
}

function testHanDateTestGetWeekOfYearThisYear() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 2,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearThisYear2() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 19
	});
    assertNotNull(hd);
    
    assertEquals(12, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearThisYear3() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 12,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(52, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearThisYearWithTime() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 12,
		day: 29,
		hour: 16,
		minute: 13,
		second: 12,
		millisecond: 232
	});
    assertNotNull(hd);
    
    assertEquals(52, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearPreviousYear() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 1,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(53, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekLeap() {
    var hd = new ilib.Date.HanDate({
		year: 1383,
		month: 12,
		day: 30
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular1() {
    var hd = new ilib.Date.HanDate({
		year: 1389,
		month: 12,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular2() {
    var hd = new ilib.Date.HanDate({
		year: 1390,
		month: 12,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular3() {
    var hd = new ilib.Date.HanDate({
		year: 1391,
		month: 12,
		day: 30
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular4() {
    var hd = new ilib.Date.HanDate({
		year: 1392,
		month: 12,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(53, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular5() {
    var hd = new ilib.Date.HanDate({
		year: 1393,
		month: 12,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(52, hd.getWeekOfYear());
}

function testHanDateTestGetWeekOfYearLastWeekRegular6() {
    var hd = new ilib.Date.HanDate({
		year: 1394,
		month: 12,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(52, hd.getWeekOfYear());
}

function testHanDateGetDayOfYearFirstDay() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 1,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getDayOfYear());
}

function testHanDateGetDayOfYearMidYear() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 17
	});
    assertNotNull(hd);
    
    assertEquals(79, hd.getDayOfYear());
}

function testHanDateGetDayOfYearLastDay() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 12,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(365, hd.getDayOfYear());
}

function testHanDateGetDayOfYearLastDayLeapYear() {
    var hd = new ilib.Date.HanDate({
		year: 1387,
		month: 12,
		day: 30
	});
    assertNotNull(hd);
    
    assertEquals(366, hd.getDayOfYear());
}

function testHanDateGetWeekOfMonth0() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth1() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 4
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth2() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 11
	});
    assertNotNull(hd);
    
    assertEquals(2, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth3() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 20
	});
    assertNotNull(hd);
    
    assertEquals(3, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth4() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(4, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth5() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 31
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth6() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 4,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth7() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 5,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth8() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 6,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonth9() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 7,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonthCN0() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN1() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 4
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN2() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 11
	});
    assertNotNull(hd);
    
    assertEquals(2, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN3() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 20
	});
    assertNotNull(hd);
    
    assertEquals(3, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN4() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 29
	});
    assertNotNull(hd);
    
    assertEquals(4, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN5() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 3,
		day: 31
	});
    assertNotNull(hd);
    
    assertEquals(5, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN6() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 4,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN7() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 5,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN8() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 6,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN9() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 7,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN10() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 8,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN11() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 9,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN12() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 10,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN13() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 11,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthCN14() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 12,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(1, hd.getWeekOfMonth("zh-Hans-CN"));
}

function testHanDateGetWeekOfMonthUS() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 8,
		day: 1
	});
    assertNotNull(hd);
    
    assertEquals(0, hd.getWeekOfMonth("en-US"));
}

function testHanDateGetWeekOfMonthDE() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
		month: 8,
		day: 1
	});
    assertNotNull(hd);
    
    // weeks in Germany start on Monday, and 8/1 is a Sunday, so it is at the 
    // end of the preceding week.
    assertEquals(0, hd.getWeekOfMonth("de-DE"));
}

function testHanDateGetEraAP() {
    var hd = new ilib.Date.HanDate({
		year: 1388,
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
    	year: 1433, 
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
    	year: 1433, 
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
    	year: 1433, 
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
    	year: 1433, 
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

function testPersDateAlgoRoundTripConstruction() {
    var hd = new ilib.Date.HanDate({
    	year: 1393,
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

function testPersDateAlgoRoundTripConstruction2() {
    var hd = new ilib.Date.HanDate({
    	year: 1393,
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
