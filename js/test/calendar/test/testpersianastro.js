/*
 * testpersianastro.js - test the persian astronomical calendar
 * 
 * Copyright © 2014-2015, JEDLSoft
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

var PersianCal = require("./../lib/PersianCal.js");

function testPersianGetNumMonths() {
    var cal = new PersianCal();
    
    assertEquals(12, cal.getNumMonths(1392));
}

function testPersianGetMonLength1() {
    var cal = new PersianCal();
    
    assertEquals(31, cal.getMonLength(1, 1392));
}

function testPersianGetMonLength2() {
    var cal = new PersianCal();
    
    assertEquals(31, cal.getMonLength(2, 1392));
}

function testPersianGetMonLength3() {
    var cal = new PersianCal();
    
    assertEquals(31, cal.getMonLength(3, 1392));
}

function testPersianGetMonLength4() {
    var cal = new PersianCal();
    
    assertEquals(31, cal.getMonLength(4, 1392));
}

function testPersianGetMonLength5() {
    var cal = new PersianCal();
    
    assertEquals(31, cal.getMonLength(5, 1392));
}

function testPersianGetMonLength6() {
    var cal = new PersianCal();
    
    assertEquals(31, cal.getMonLength(6, 1392));
}

function testPersianGetMonLength7() {
    var cal = new PersianCal();
    
    assertEquals(30, cal.getMonLength(7, 1392));
}

function testPersianGetMonLength8() {
    var cal = new PersianCal();
    
    assertEquals(30, cal.getMonLength(8, 1392));
}

function testPersianGetMonLength9() {
    var cal = new PersianCal();
    
    assertEquals(30, cal.getMonLength(9, 1392));
}

function testPersianGetMonLength10() {
    var cal = new PersianCal();
    
    assertEquals(30, cal.getMonLength(10, 1392));
}

function testPersianGetMonLength11() {
    var cal = new PersianCal();
    
    assertEquals(30, cal.getMonLength(11, 1392));
}

function testPersianGetMonLength12() {
    var cal = new PersianCal();
    
    assertEquals(29, cal.getMonLength(12, 1392));
}

function testPersianGetMonLength12LeapYear() {
    var cal = new PersianCal();
    
    assertEquals(30, cal.getMonLength(12, 1391));
}


function testPersianIsLeapYear() {
    var cal = new PersianCal();
    
    assertTrue(cal.isLeapYear(1391));
}

function testPersianIsLeapYearNot() {
    var cal = new PersianCal();
    
    assertFalse(cal.isLeapYear(1392));
}

function testPersianIsLeapYear1() {
    var cal = new PersianCal();
    
    assertFalse(cal.isLeapYear(1393));
}

function testPersianIsLeapYear2() {
    var cal = new PersianCal();
    
    assertFalse(cal.isLeapYear(1394));
}

function testPersianIsLeapYear3() {
    var cal = new PersianCal();
    
    assertTrue(cal.isLeapYear(1395));
}

function testPersianNewDateInstance() {
    var cal = new PersianCal();
    var d = cal.newDateInstance({
    	year: 1392,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertEquals("persian", d.cal.type);
}
