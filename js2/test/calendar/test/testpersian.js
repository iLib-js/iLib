/*
 * testpersian.js - test the persian calendar
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

function testPersianAlgoGetNumMonths() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertEquals(12, cal.getNumMonths(1392));
}

function testPersianAlgoGetMonLength1() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertEquals(31, cal.getMonLength(1, 1392));
}

function testPersianAlgoGetMonLength2() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertEquals(31, cal.getMonLength(2, 1392));
}

function testPersianAlgoGetMonLength3() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertEquals(31, cal.getMonLength(3, 1392));
}

function testPersianAlgoGetMonLength4() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertEquals(31, cal.getMonLength(4, 1392));
}

function testPersianAlgoGetMonLength5() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertEquals(31, cal.getMonLength(5, 1392));
}

function testPersianAlgoGetMonLength6() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertEquals(31, cal.getMonLength(6, 1392));
}

function testPersianAlgoGetMonLength7() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertEquals(30, cal.getMonLength(7, 1392));
}

function testPersianAlgoGetMonLength8() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertEquals(30, cal.getMonLength(8, 1392));
}

function testPersianAlgoGetMonLength9() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertEquals(30, cal.getMonLength(9, 1392));
}

function testPersianAlgoGetMonLength10() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertEquals(30, cal.getMonLength(10, 1392));
}

function testPersianAlgoGetMonLength11() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertEquals(30, cal.getMonLength(11, 1392));
}

function testPersianAlgoGetMonLength12() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertEquals(29, cal.getMonLength(12, 1392));
}

function testPersianAlgoGetMonLength12LeapYear() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertEquals(30, cal.getMonLength(12, 1391));
}


function testPersianAlgoIsLeapYear() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertTrue(cal.isLeapYear(1391));
}

function testPersianAlgoIsLeapYearNot() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertFalse(cal.isLeapYear(1392));
}

function testPersianAlgoIsLeapYear1() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertFalse(cal.isLeapYear(1393));
}

function testPersianAlgoIsLeapYear2() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertFalse(cal.isLeapYear(1394));
}

function testPersianAlgoIsLeapYear3() {
    var cal = new ilib.Cal.PersianAlgo();
    
    assertTrue(cal.isLeapYear(1395));
}

function testPersianAlgoNewDateInstance() {
    var cal = new ilib.Cal.PersianAlgo();
    var d = cal.newDateInstance({
    	year: 1392,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertTrue(d instanceof ilib.Date.PersAlgoDate);
}
