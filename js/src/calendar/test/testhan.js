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

function testHanGetNumMonths() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(12, cal.getNumMonths(1392));
}

function testHanGetMonLength1() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(31, cal.getMonLength(1, 1392));
}

function testHanGetMonLength2() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(31, cal.getMonLength(2, 1392));
}

function testHanGetMonLength3() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(31, cal.getMonLength(3, 1392));
}

function testHanGetMonLength4() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(31, cal.getMonLength(4, 1392));
}

function testHanGetMonLength5() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(31, cal.getMonLength(5, 1392));
}

function testHanGetMonLength6() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(31, cal.getMonLength(6, 1392));
}

function testHanGetMonLength7() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(7, 1392));
}

function testHanGetMonLength8() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(8, 1392));
}

function testHanGetMonLength9() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(9, 1392));
}

function testHanGetMonLength10() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(10, 1392));
}

function testHanGetMonLength11() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(11, 1392));
}

function testHanGetMonLength12() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(29, cal.getMonLength(12, 1392));
}

function testHanGetMonLength12LeapYear() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(12, 1391));
}


function testHanIsLeapYear() {
    var cal = new ilib.Cal.Han();
    
    assertTrue(cal.isLeapYear(1391));
}

function testHanIsLeapYearNot() {
    var cal = new ilib.Cal.Han();
    
    assertFalse(cal.isLeapYear(1392));
}

function testHanIsLeapYear1() {
    var cal = new ilib.Cal.Han();
    
    assertFalse(cal.isLeapYear(1393));
}

function testHanIsLeapYear2() {
    var cal = new ilib.Cal.Han();
    
    assertFalse(cal.isLeapYear(1394));
}

function testHanIsLeapYear3() {
    var cal = new ilib.Cal.Han();
    
    assertTrue(cal.isLeapYear(1395));
}

function testHanNewDateInstance() {
    var cal = new ilib.Cal.Han();
    var d = cal.newDateInstance({
    	year: 1392,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertTrue(d instanceof ilib.Date.HanDate);
}
