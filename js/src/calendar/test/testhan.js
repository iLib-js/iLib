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

function testHanGetNumMonths4650() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(12, cal.getNumMonths(4650));
}

function testHanGetMonLength1() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(1, 4650));
}

function testHanGetMonLength2() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(2, 4650));
}

function testHanGetMonLength3() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(3, 4650));
}

function testHanGetMonLength4() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(4, 4650));
}

function testHanGetMonLength5() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(5, 4650));
}

function testHanGetMonLength6() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(6, 4650));
}

function testHanGetMonLength7() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(7, 4650));
}

function testHanGetMonLength8() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(8, 4650));
}

function testHanGetMonLength9() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(9, 4650));
}

function testHanGetMonLength10() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(10, 4650));
}

function testHanGetMonLength11() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(11, 4650));
}

function testHanGetMonLength12() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(12, 4650));
}

var hanLeapYears = {
	"4697": {months: 12, leapMonth: -1}, // 2000
	"4698": {months: 13, leapMonth: 4},  // 2001
	"4699": {months: 12, leapMonth: -1}, // 2002
	"4700": {months: 12, leapMonth: -1}, // 2003
	"4701": {months: 13, leapMonth: 2},  // 2004
	"4702": {months: 12, leapMonth: -1}, // 2005
	"4703": {months: 13, leapMonth: 7},  // 2006
	"4704": {months: 12, leapMonth: -1}, // 2007
	"4705": {months: 12, leapMonth: -1}, // 2008
	"4706": {months: 13, leapMonth: 5},  // 2009
	"4707": {months: 12, leapMonth: -1}, // 2010
	"4708": {months: 12, leapMonth: -1}, // 2011
	"4709": {months: 13, leapMonth: 4},  // 2012
	"4710": {months: 12, leapMonth: -1}, // 2013
	"4711": {months: 13, leapMonth: 9},  // 2014
	"4712": {months: 12, leapMonth: -1}, // 2015
	"4713": {months: 12, leapMonth: -1}, // 2016
	"4714": {months: 13, leapMonth: 6}   // 2017
};

function testHanIsLeapYear() {
    var cal = new ilib.Cal.Han();
    
    for (i in hanLeapYears) {
    	var n = parseInt(i);
    	assertEquals(hanLeapYears[i].months === 13, cal.isLeapYear(n));
    }
}

function testHanGetNumMonths() {
    var cal = new ilib.Cal.Han();
    
    for (i in hanLeapYears) {
    	var n = parseInt(i);
    	assertEquals(hanLeapYears[i].months, cal.getNumMonths(n));
    }
}

function testHanGetLeapMonth() {
    var cal = new ilib.Cal.Han();
    
    for (i in hanLeapYears) {
    	var n = parseInt(i);
    	assertEquals(hanLeapYears[i].leapMonth, cal.getLeapMonth(n));
    }
}

function testHanNewDateInstance() {
    var cal = new ilib.Cal.Han();
    var d = cal.newDateInstance({
    	year: 4650,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertTrue(d instanceof ilib.Date.HanDate);
}
