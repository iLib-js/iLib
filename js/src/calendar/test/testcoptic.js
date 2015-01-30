/*
 * testcoptic.js - test the coptic calendar
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


function testCopticGetNumMonths() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(13, cal.getNumMonths(1731));
}

function testCopticGetMonLength1() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(30, cal.getMonLength(1, 1731));
}

function testCopticGetMonLength2() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(30, cal.getMonLength(2, 1731));
}

function testCopticGetMonLength3() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(30, cal.getMonLength(3, 1731));
}

function testCopticGetMonLength4() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(30, cal.getMonLength(4, 1731));
}

function testCopticGetMonLength5() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(30, cal.getMonLength(5, 1731));
}

function testCopticGetMonLength6() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(30, cal.getMonLength(6, 1731));
}

function testCopticGetMonLength7() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(30, cal.getMonLength(7, 1731));
}

function testCopticGetMonLength8() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(30, cal.getMonLength(8, 1731));
}

function testCopticGetMonLength9() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(30, cal.getMonLength(9, 1731));
}

function testCopticGetMonLength10() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(30, cal.getMonLength(10, 1731));
}

function testCopticGetMonLength11() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(30, cal.getMonLength(11, 1731));
}

function testCopticGetMonLength12() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(30, cal.getMonLength(12, 1731));
}

function testCopticGetMonLength13LeapYear() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(6, cal.getMonLength(13, 1731));
}

function testCopticGetMonLength13() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(5, cal.getMonLength(13, 1732));
}

function testCopticIsLeapYear() {
    var cal = new ilib.Cal.Coptic();
    
    assertTrue(cal.isLeapYear(1731));
}

function testCopticIsLeapYear() {
    var cal = new ilib.Cal.Coptic();
    
    assertFalse(cal.isLeapYear(1732));
}

function testCopticIsLeapYear() {
    var cal = new ilib.Cal.Coptic();
    
    assertFalse(cal.isLeapYear(1733));
}

function testCopticIsLeapYear() {
    var cal = new ilib.Cal.Coptic();
    
    assertFalse(cal.isLeapYear(1734));
}

function testCopticIsLeapYear() {
    var cal = new ilib.Cal.Coptic();
    
    assertTrue(cal.isLeapYear(1735));
}

function testCopticIsLeapYearBM0() {
    var cal = new ilib.Cal.Coptic();
    
    assertTrue(cal.isLeapYear(0));
}

function testCopticIsLeapYearBMMinus1() {
    var cal = new ilib.Cal.Coptic();
    
    assertFalse(cal.isLeapYear(-1));
}

function testCopticIsLeapYearBMMinus2() {
    var cal = new ilib.Cal.Coptic();
    
    assertFalse(cal.isLeapYear(-2));
}

function testCopticIsLeapYearBMMinus3() {
    var cal = new ilib.Cal.Coptic();
    
    assertFalse(cal.isLeapYear(-3));
}

function testCopticIsLeapYearBMMinus4() {
    var cal = new ilib.Cal.Coptic();
    
    assertTrue(cal.isLeapYear(-4));
}

function testCopticIsLeapYearOnMillenium() {
    var cal = new ilib.Cal.Coptic();
    
    assertTrue(cal.isLeapYear(2003));
}

function testCopticIsLeapYearOnCentury0() {
    var cal = new ilib.Cal.Coptic();
    
    assertTrue(cal.isLeapYear(1603));
}

function testCopticIsLeapYearOnCentury1() {
    var cal = new ilib.Cal.Coptic();
    
    assertTrue(cal.isLeapYear(1703));
}

function testCopticIsLeapYearOnCentury2() {
    var cal = new ilib.Cal.Coptic();
    
    assertTrue(cal.isLeapYear(1803));
}

function testCopticIsLeapYearOnCentury3() {
    var cal = new ilib.Cal.Coptic();
    
    assertTrue(cal.isLeapYear(1903));
}

function testCopticIsLeapYearOnQuadCentennial() {
    var cal = new ilib.Cal.Coptic();
    
    assertTrue(cal.isLeapYear(2003));
}

function testCopticNewDateInstance() {
    var cal = new ilib.Cal.Coptic();
    var d = cal.newDateInstance({
    	year: 20,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertTrue(d instanceof ilib.Date.CopticDate);
}
