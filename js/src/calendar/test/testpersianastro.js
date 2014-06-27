/*
 * testpersianastro.js - test the persian astronomical calendar
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

function testPersianAstroGetNumMonths() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertEquals(12, cal.getNumMonths(1392));
}

function testPersianAstroGetMonLength1() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertEquals(31, cal.getMonLength(1, 1392));
}

function testPersianAstroGetMonLength2() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertEquals(31, cal.getMonLength(2, 1392));
}

function testPersianAstroGetMonLength3() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertEquals(31, cal.getMonLength(3, 1392));
}

function testPersianAstroGetMonLength4() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertEquals(31, cal.getMonLength(4, 1392));
}

function testPersianAstroGetMonLength5() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertEquals(31, cal.getMonLength(5, 1392));
}

function testPersianAstroGetMonLength6() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertEquals(31, cal.getMonLength(6, 1392));
}

function testPersianAstroGetMonLength7() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertEquals(30, cal.getMonLength(7, 1392));
}

function testPersianAstroGetMonLength8() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertEquals(30, cal.getMonLength(8, 1392));
}

function testPersianAstroGetMonLength9() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertEquals(30, cal.getMonLength(9, 1392));
}

function testPersianAstroGetMonLength10() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertEquals(30, cal.getMonLength(10, 1392));
}

function testPersianAstroGetMonLength11() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertEquals(30, cal.getMonLength(11, 1392));
}

function testPersianAstroGetMonLength12() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertEquals(29, cal.getMonLength(12, 1392));
}

function testPersianAstroGetMonLength12LeapYear() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertEquals(30, cal.getMonLength(12, 1391));
}


function testPersianAstroIsLeapYear() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertTrue(cal.isLeapYear(1391));
}

function testPersianAstroIsLeapYearNot() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertFalse(cal.isLeapYear(1392));
}

function testPersianAstroIsLeapYear1() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertFalse(cal.isLeapYear(1393));
}

function testPersianAstroIsLeapYear2() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertFalse(cal.isLeapYear(1394));
}

function testPersianAstroIsLeapYear3() {
    var cal = new ilib.Cal.PersianAstro();
    
    assertTrue(cal.isLeapYear(1395));
}

function testPersianAstroNewDateInstance() {
    var cal = new ilib.Cal.PersianAstro();
    var d = cal.newDateInstance({
    	year: 1392,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertTrue(d instanceof ilib.Date.PersAstroDate);
}
