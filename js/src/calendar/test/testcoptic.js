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
    
    assertEquals(12, cal.getNumMonths(2011));
}

function testCopticgetMonLengthJan() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(31, cal.getMonLength(1, 2011));
}

function testCopticgetMonLengthFeb() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(28, cal.getMonLength(2, 2011));
}

function testCopticgetMonLengthFebLeapYear() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(29, cal.getMonLength(2, 2012));
}

function testCopticgetMonLengthMar() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(31, cal.getMonLength(3, 2011));
}

function testCopticgetMonLengthApr() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(30, cal.getMonLength(4, 2011));
}

function testCopticgetMonLengthMay() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(31, cal.getMonLength(5, 2011));
}

function testCopticgetMonLengthJun() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(30, cal.getMonLength(6, 2011));
}

function testCopticgetMonLengthJul() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(31, cal.getMonLength(7, 2011));
}

function testCopticgetMonLengthAug() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(31, cal.getMonLength(8, 2011));
}

function testCopticgetMonLengthSep() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(30, cal.getMonLength(9, 2011));
}

function testCopticgetMonLengthOct() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(31, cal.getMonLength(10, 2011));
}

function testCopticgetMonLengthNov() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(30, cal.getMonLength(11, 2011));
}

function testCopticgetMonLengthDec() {
    var cal = new ilib.Cal.Coptic();
    
    assertEquals(31, cal.getMonLength(12, 2011));
}

function testCopticIsLeapYear() {
    var cal = new ilib.Cal.Coptic();
    
    assertTrue(cal.isLeapYear(2012));
}

/*
In the Coptic calendar, there is no year 0. The dates
go from 2 BCE, 1 BCE, 1 CE, 2 CE, etc.
Thus, year 4 is a leap year, and 4 years earlier was year
1 BCE, which was also a leap year. 1 BCE is represented
as -1 in our calculations.
*/
function testCopticIsLeapYearBCEFalse() {
    var cal = new ilib.Cal.Coptic();
    
    assertFalse(cal.isLeapYear(-3));
}

function testCopticIsLeapYearBCETrue() {
    var cal = new ilib.Cal.Coptic();
    
    assertTrue(cal.isLeapYear(-1));
}

function testCopticIsLeapYearNot() {
    var cal = new ilib.Cal.Coptic();
    
    assertFalse(cal.isLeapYear(2011));
}

function testCopticIsLeapYearNotOnCentury1() {
    var cal = new ilib.Cal.Coptic();
    
    assertTrue(cal.isLeapYear(1700));
}

function testCopticIsLeapYearNotOnCentury2() {
    var cal = new ilib.Cal.Coptic();
    
    assertTrue(cal.isLeapYear(1800));
}

function testCopticIsLeapYearNotOnCentury3() {
    var cal = new ilib.Cal.Coptic();
    
    assertTrue(cal.isLeapYear(1900));
}

function testCopticIsLeapYearOnQuadCentennial() {
    var cal = new ilib.Cal.Coptic();
    
    assertTrue(cal.isLeapYear(2000));
}

function testCopticNewDateInstance() {
    var cal = new ilib.Cal.Coptic();
    var d = cal.newDateInstance({
    	year: 20,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertTrue(d instanceof ilib.Date.JulDate);
}
