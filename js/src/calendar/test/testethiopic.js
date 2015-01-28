/*
 * testethiopic.js - test the ethiopic calendar
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


function testEthiopicGetNumMonths() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertEquals(12, cal.getNumMonths(2011));
}

function testEthiopicgetMonLengthJan() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertEquals(31, cal.getMonLength(1, 2011));
}

function testEthiopicgetMonLengthFeb() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertEquals(28, cal.getMonLength(2, 2011));
}

function testEthiopicgetMonLengthFebLeapYear() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertEquals(29, cal.getMonLength(2, 2012));
}

function testEthiopicgetMonLengthMar() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertEquals(31, cal.getMonLength(3, 2011));
}

function testEthiopicgetMonLengthApr() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertEquals(30, cal.getMonLength(4, 2011));
}

function testEthiopicgetMonLengthMay() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertEquals(31, cal.getMonLength(5, 2011));
}

function testEthiopicgetMonLengthJun() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertEquals(30, cal.getMonLength(6, 2011));
}

function testEthiopicgetMonLengthJul() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertEquals(31, cal.getMonLength(7, 2011));
}

function testEthiopicgetMonLengthAug() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertEquals(31, cal.getMonLength(8, 2011));
}

function testEthiopicgetMonLengthSep() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertEquals(30, cal.getMonLength(9, 2011));
}

function testEthiopicgetMonLengthOct() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertEquals(31, cal.getMonLength(10, 2011));
}

function testEthiopicgetMonLengthNov() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertEquals(30, cal.getMonLength(11, 2011));
}

function testEthiopicgetMonLengthDec() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertEquals(31, cal.getMonLength(12, 2011));
}

function testEthiopicIsLeapYear() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertTrue(cal.isLeapYear(2012));
}

/*
In the Ethiopic calendar, there is no year 0. The dates
go from 2 BCE, 1 BCE, 1 CE, 2 CE, etc.
Thus, year 4 is a leap year, and 4 years earlier was year
1 BCE, which was also a leap year. 1 BCE is represented
as -1 in our calculations.
*/
function testEthiopicIsLeapYearBCEFalse() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertFalse(cal.isLeapYear(-3));
}

function testEthiopicIsLeapYearBCETrue() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertTrue(cal.isLeapYear(-1));
}

function testEthiopicIsLeapYearNot() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertFalse(cal.isLeapYear(2011));
}

function testEthiopicIsLeapYearNotOnCentury1() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertTrue(cal.isLeapYear(1700));
}

function testEthiopicIsLeapYearNotOnCentury2() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertTrue(cal.isLeapYear(1800));
}

function testEthiopicIsLeapYearNotOnCentury3() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertTrue(cal.isLeapYear(1900));
}

function testEthiopicIsLeapYearOnQuadCentennial() {
    var cal = new ilib.Cal.Ethiopic();
    
    assertTrue(cal.isLeapYear(2000));
}

function testEthiopicNewDateInstance() {
    var cal = new ilib.Cal.Ethiopic();
    var d = cal.newDateInstance({
    	year: 20,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertTrue(d instanceof ilib.Date.JulDate);
}
