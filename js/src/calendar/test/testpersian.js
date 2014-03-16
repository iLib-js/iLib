/*
 * testpersian.js - test the persian calendar
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

function testPersianGetNumMonths() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(12, cal.getNumMonths(2011));
}

function testPersiangetMonLengthJan() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(31, cal.getMonLength(1, 2011));
}

function testPersiangetMonLengthFeb() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(28, cal.getMonLength(2, 2011));
}

function testPersiangetMonLengthFebLeapYear() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(29, cal.getMonLength(2, 2012));
}

function testPersiangetMonLengthMar() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(31, cal.getMonLength(3, 2011));
}

function testPersiangetMonLengthApr() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(30, cal.getMonLength(4, 2011));
}

function testPersiangetMonLengthMay() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(31, cal.getMonLength(5, 2011));
}

function testPersiangetMonLengthJun() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(30, cal.getMonLength(6, 2011));
}

function testPersiangetMonLengthJul() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(31, cal.getMonLength(7, 2011));
}

function testPersiangetMonLengthAug() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(31, cal.getMonLength(8, 2011));
}

function testPersiangetMonLengthSep() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(30, cal.getMonLength(9, 2011));
}

function testPersiangetMonLengthOct() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(31, cal.getMonLength(10, 2011));
}

function testPersiangetMonLengthNov() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(30, cal.getMonLength(11, 2011));
}

function testPersiangetMonLengthDec() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(31, cal.getMonLength(12, 2011));
}

function testPersianIsLeapYear() {
    var cal = new ilib.Cal.Persian();
    
    assertTrue(cal.isLeapYear(2012));
}

function testPersianIsLeapYearNot() {
    var cal = new ilib.Cal.Persian();
    
    assertFalse(cal.isLeapYear(2011));
}

function testPersianIsLeapYearNotOnCentury1() {
    var cal = new ilib.Cal.Persian();
    
    assertFalse(cal.isLeapYear(1700));
}

function testPersianIsLeapYearNotOnCentury2() {
    var cal = new ilib.Cal.Persian();
    
    assertFalse(cal.isLeapYear(1800));
}

function testPersianIsLeapYearNotOnCentury3() {
    var cal = new ilib.Cal.Persian();
    
    assertFalse(cal.isLeapYear(1900));
}

function testPersianIsLeapYearOnQuadCentennial() {
    var cal = new ilib.Cal.Persian();
    
    assertTrue(cal.isLeapYear(2000));
}

function testPersianNewDateInstance() {
    var cal = new ilib.Cal.Persian();
    var d = cal.newDateInstance({
    	year: 2012,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertTrue(d instanceof ilib.Date.PersDate);
}

