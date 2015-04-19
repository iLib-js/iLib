/*
 * testthaisolar.js - test the Thai solar calendar
 * 
 * Copyright © 2013, JEDLSoft
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

function testThaiSolarGetNumMonths() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertEquals(12, cal.getNumMonths(2554));
}

function testThaiSolargetMonLengthJan() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertEquals(31, cal.getMonLength(1, 2554));
}

function testThaiSolargetMonLengthFeb() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertEquals(28, cal.getMonLength(2, 2554));
}

function testThaiSolargetMonLengthFebLeapYear() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertEquals(29, cal.getMonLength(2, 2555));
}

function testThaiSolargetMonLengthMar() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertEquals(31, cal.getMonLength(3, 2554));
}

function testThaiSolargetMonLengthApr() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertEquals(30, cal.getMonLength(4, 2554));
}

function testThaiSolargetMonLengthMay() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertEquals(31, cal.getMonLength(5, 2554));
}

function testThaiSolargetMonLengthJun() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertEquals(30, cal.getMonLength(6, 2554));
}

function testThaiSolargetMonLengthJul() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertEquals(31, cal.getMonLength(7, 2554));
}

function testThaiSolargetMonLengthAug() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertEquals(31, cal.getMonLength(8, 2554));
}

function testThaiSolargetMonLengthSep() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertEquals(30, cal.getMonLength(9, 2554));
}

function testThaiSolargetMonLengthOct() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertEquals(31, cal.getMonLength(10, 2554));
}

function testThaiSolargetMonLengthNov() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertEquals(30, cal.getMonLength(11, 2554));
}

function testThaiSolargetMonLengthDec() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertEquals(31, cal.getMonLength(12, 2554));
}

function testThaiSolarIsLeapYear() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertTrue(cal.isLeapYear(2555));
}

function testThaiSolarIsLeapYearNot() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertFalse(cal.isLeapYear(2554));
}

function testThaiSolarIsLeapYearNotOnCentury1() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertFalse(cal.isLeapYear(2243));
}

function testThaiSolarIsLeapYearNotOnCentury2() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertFalse(cal.isLeapYear(2343));
}

function testThaiSolarIsLeapYearNotOnCentury3() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertFalse(cal.isLeapYear(2443));
}

function testThaiSolarIsLeapYearOnQuadCentennial() {
    var cal = new ilib.Cal.ThaiSolar();
    
    assertTrue(cal.isLeapYear(2543));
}

function testThaiSolarNewDateInstance() {
    var cal = new ilib.Cal.ThaiSolar();
    var d = cal.newDateInstance({
    	year: 2555,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertTrue(d instanceof ilib.Date.ThaiSolarDate);
}

