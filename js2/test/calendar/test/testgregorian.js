/*
 * testgregorian.js - test the gregorian calendar
 * 
 * Copyright © 2012, JEDLSoft
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


function testGregorianGetNumMonths() {
    var cal = new ilib.Cal.Gregorian();
    
    assertEquals(12, cal.getNumMonths(2011));
}

function testGregoriangetMonLengthJan() {
    var cal = new ilib.Cal.Gregorian();
    
    assertEquals(31, cal.getMonLength(1, 2011));
}

function testGregoriangetMonLengthFeb() {
    var cal = new ilib.Cal.Gregorian();
    
    assertEquals(28, cal.getMonLength(2, 2011));
}

function testGregoriangetMonLengthFebLeapYear() {
    var cal = new ilib.Cal.Gregorian();
    
    assertEquals(29, cal.getMonLength(2, 2012));
}

function testGregoriangetMonLengthMar() {
    var cal = new ilib.Cal.Gregorian();
    
    assertEquals(31, cal.getMonLength(3, 2011));
}

function testGregoriangetMonLengthApr() {
    var cal = new ilib.Cal.Gregorian();
    
    assertEquals(30, cal.getMonLength(4, 2011));
}

function testGregoriangetMonLengthMay() {
    var cal = new ilib.Cal.Gregorian();
    
    assertEquals(31, cal.getMonLength(5, 2011));
}

function testGregoriangetMonLengthJun() {
    var cal = new ilib.Cal.Gregorian();
    
    assertEquals(30, cal.getMonLength(6, 2011));
}

function testGregoriangetMonLengthJul() {
    var cal = new ilib.Cal.Gregorian();
    
    assertEquals(31, cal.getMonLength(7, 2011));
}

function testGregoriangetMonLengthAug() {
    var cal = new ilib.Cal.Gregorian();
    
    assertEquals(31, cal.getMonLength(8, 2011));
}

function testGregoriangetMonLengthSep() {
    var cal = new ilib.Cal.Gregorian();
    
    assertEquals(30, cal.getMonLength(9, 2011));
}

function testGregoriangetMonLengthOct() {
    var cal = new ilib.Cal.Gregorian();
    
    assertEquals(31, cal.getMonLength(10, 2011));
}

function testGregoriangetMonLengthNov() {
    var cal = new ilib.Cal.Gregorian();
    
    assertEquals(30, cal.getMonLength(11, 2011));
}

function testGregoriangetMonLengthDec() {
    var cal = new ilib.Cal.Gregorian();
    
    assertEquals(31, cal.getMonLength(12, 2011));
}

function testGregorianIsLeapYear() {
    var cal = new ilib.Cal.Gregorian();
    
    assertTrue(cal.isLeapYear(2012));
}

function testGregorianIsLeapYearNot() {
    var cal = new ilib.Cal.Gregorian();
    
    assertFalse(cal.isLeapYear(2011));
}

function testGregorianIsLeapYearNotOnCentury1() {
    var cal = new ilib.Cal.Gregorian();
    
    assertFalse(cal.isLeapYear(1700));
}

function testGregorianIsLeapYearNotOnCentury2() {
    var cal = new ilib.Cal.Gregorian();
    
    assertFalse(cal.isLeapYear(1800));
}

function testGregorianIsLeapYearNotOnCentury3() {
    var cal = new ilib.Cal.Gregorian();
    
    assertFalse(cal.isLeapYear(1900));
}

function testGregorianIsLeapYearOnQuadCentennial() {
    var cal = new ilib.Cal.Gregorian();
    
    assertTrue(cal.isLeapYear(2000));
}

function testGregorianNewDateInstance() {
    var cal = new ilib.Cal.Gregorian();
    var d = cal.newDateInstance({
    	year: 2012,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertNotUndefined(d.cal);
    assertEquals("gregorian", d.cal.type);
}

