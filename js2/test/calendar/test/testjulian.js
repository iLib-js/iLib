/*
 * testjulian.js - test the julian calendar
 * 
 * Copyright © 2012-2015, JEDLSoft
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

var JulianCal = require("./../lib/JulianCal.js");

function testJulianGetNumMonths() {
    var cal = new JulianCal();
    
    assertEquals(12, cal.getNumMonths(2011));
}

function testJuliangetMonLengthJan() {
    var cal = new JulianCal();
    
    assertEquals(31, cal.getMonLength(1, 2011));
}

function testJuliangetMonLengthFeb() {
    var cal = new JulianCal();
    
    assertEquals(28, cal.getMonLength(2, 2011));
}

function testJuliangetMonLengthFebLeapYear() {
    var cal = new JulianCal();
    
    assertEquals(29, cal.getMonLength(2, 2012));
}

function testJuliangetMonLengthMar() {
    var cal = new JulianCal();
    
    assertEquals(31, cal.getMonLength(3, 2011));
}

function testJuliangetMonLengthApr() {
    var cal = new JulianCal();
    
    assertEquals(30, cal.getMonLength(4, 2011));
}

function testJuliangetMonLengthMay() {
    var cal = new JulianCal();
    
    assertEquals(31, cal.getMonLength(5, 2011));
}

function testJuliangetMonLengthJun() {
    var cal = new JulianCal();
    
    assertEquals(30, cal.getMonLength(6, 2011));
}

function testJuliangetMonLengthJul() {
    var cal = new JulianCal();
    
    assertEquals(31, cal.getMonLength(7, 2011));
}

function testJuliangetMonLengthAug() {
    var cal = new JulianCal();
    
    assertEquals(31, cal.getMonLength(8, 2011));
}

function testJuliangetMonLengthSep() {
    var cal = new JulianCal();
    
    assertEquals(30, cal.getMonLength(9, 2011));
}

function testJuliangetMonLengthOct() {
    var cal = new JulianCal();
    
    assertEquals(31, cal.getMonLength(10, 2011));
}

function testJuliangetMonLengthNov() {
    var cal = new JulianCal();
    
    assertEquals(30, cal.getMonLength(11, 2011));
}

function testJuliangetMonLengthDec() {
    var cal = new JulianCal();
    
    assertEquals(31, cal.getMonLength(12, 2011));
}

function testJulianIsLeapYear() {
    var cal = new JulianCal();
    
    assertTrue(cal.isLeapYear(2012));
}

/*
In the Julian calendar, there is no year 0. The dates
go from 2 BCE, 1 BCE, 1 CE, 2 CE, etc.
Thus, year 4 is a leap year, and 4 years earlier was year
1 BCE, which was also a leap year. 1 BCE is represented
as -1 in our calculations.
*/
function testJulianIsLeapYearBCEFalse() {
    var cal = new JulianCal();
    
    assertFalse(cal.isLeapYear(-3));
}

function testJulianIsLeapYearBCETrue() {
    var cal = new JulianCal();
    
    assertTrue(cal.isLeapYear(-1));
}

function testJulianIsLeapYearNot() {
    var cal = new JulianCal();
    
    assertFalse(cal.isLeapYear(2011));
}

function testJulianIsLeapYearNotOnCentury1() {
    var cal = new JulianCal();
    
    assertTrue(cal.isLeapYear(1700));
}

function testJulianIsLeapYearNotOnCentury2() {
    var cal = new JulianCal();
    
    assertTrue(cal.isLeapYear(1800));
}

function testJulianIsLeapYearNotOnCentury3() {
    var cal = new JulianCal();
    
    assertTrue(cal.isLeapYear(1900));
}

function testJulianIsLeapYearOnQuadCentennial() {
    var cal = new JulianCal();
    
    assertTrue(cal.isLeapYear(2000));
}

function testJulianNewDateInstance() {
    var cal = new JulianCal();
    var d = cal.newDateInstance({
    	year: 20,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertNotUndefined(d.cal);
    assertEquals("julian", d.cal.type);
}
