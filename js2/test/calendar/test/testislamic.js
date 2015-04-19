/*
 * testislamic.js - test the islamic calendar
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

function testIslamicGetNumMonths() {
    var cal = new ilib.Cal.Islamic();
    
    assertEquals(12, cal.getNumMonths(1));
}

function testIslamicgetMonLength1() {
    var cal = new ilib.Cal.Islamic();
    
    assertEquals(30, cal.getMonLength(1, 1));
}

function testIslamicgetMonLength2() {
    var cal = new ilib.Cal.Islamic();
    
    assertEquals(29, cal.getMonLength(2, 1));
}

function testIslamicgetMonLength3() {
    var cal = new ilib.Cal.Islamic();
    
    assertEquals(30, cal.getMonLength(3, 1));
}

function testIslamicgetMonLength4() {
    var cal = new ilib.Cal.Islamic();
    
    assertEquals(29, cal.getMonLength(4, 1));
}

function testIslamicgetMonLength5() {
    var cal = new ilib.Cal.Islamic();
    
    assertEquals(30, cal.getMonLength(5, 1));
}

function testIslamicgetMonLength6() {
    var cal = new ilib.Cal.Islamic();
    
    assertEquals(29, cal.getMonLength(6, 1));
}

function testIslamicgetMonLength7() {
    var cal = new ilib.Cal.Islamic();
    
    assertEquals(30, cal.getMonLength(7, 1));
}

function testIslamicgetMonLength8() {
    var cal = new ilib.Cal.Islamic();
    
    assertEquals(29, cal.getMonLength(8, 1));
}

function testIslamicgetMonLength9() {
    var cal = new ilib.Cal.Islamic();
    
    assertEquals(30, cal.getMonLength(9, 1));
}

function testIslamicgetMonLength10() {
    var cal = new ilib.Cal.Islamic();
    
    assertEquals(29, cal.getMonLength(10, 1));
}

function testIslamicgetMonLength11() {
    var cal = new ilib.Cal.Islamic();
    
    assertEquals(30, cal.getMonLength(11, 1));
}

function testIslamicgetMonLength12() {
    var cal = new ilib.Cal.Islamic();
    
    assertEquals(29, cal.getMonLength(12, 1));
}

function testIslamicgetMonLength12LeapYear() {
    var cal = new ilib.Cal.Islamic();
    
    assertEquals(30, cal.getMonLength(12, 2));
}

function testIslamicIsLeapYear1() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(1));
}

function testIslamicIsLeapYear2() {
    var cal = new ilib.Cal.Islamic();
    
    assertTrue(cal.isLeapYear(2));
}

function testIslamicIsLeapYear3() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(3));
}

function testIslamicIsLeapYear4() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(4));
}

function testIslamicIsLeapYear5() {
    var cal = new ilib.Cal.Islamic();
    
    assertTrue(cal.isLeapYear(5));
}

function testIslamicIsLeapYear6() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(6));
}

function testIslamicIsLeapYear7() {
    var cal = new ilib.Cal.Islamic();
    
    assertTrue(cal.isLeapYear(7));
}

function testIslamicIsLeapYear8() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(8));
}

function testIslamicIsLeapYear9() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(9));
}

function testIslamicIsLeapYear10() {
    var cal = new ilib.Cal.Islamic();
    
    assertTrue(cal.isLeapYear(10));
}

function testIslamicIsLeapYear11() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(11));
}

function testIslamicIsLeapYear12() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(12));
}

function testIslamicIsLeapYear13() {
    var cal = new ilib.Cal.Islamic();
    
    assertTrue(cal.isLeapYear(13));
}
function testIslamicIsLeapYear14() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(14));
}
function testIslamicIsLeapYear15() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(15));
}
function testIslamicIsLeapYear16() {
    var cal = new ilib.Cal.Islamic();
    
    assertTrue(cal.isLeapYear(16));
}
function testIslamicIsLeapYear17() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(17));
}
function testIslamicIsLeapYear18() {
    var cal = new ilib.Cal.Islamic();
    
    assertTrue(cal.isLeapYear(18));
}
function testIslamicIsLeapYear19() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(19));
}
function testIslamicIsLeapYear20() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(20));
}
function testIslamicIsLeapYear21() {
    var cal = new ilib.Cal.Islamic();
    
    assertTrue(cal.isLeapYear(21));
}
function testIslamicIsLeapYear22() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(22));
}
function testIslamicIsLeapYear23() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(23));
}
function testIslamicIsLeapYear24() {
    var cal = new ilib.Cal.Islamic();
    
    assertTrue(cal.isLeapYear(24));
}
function testIslamicIsLeapYear25() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(25));
}
function testIslamicIsLeapYear26() {
    var cal = new ilib.Cal.Islamic();
    
    assertTrue(cal.isLeapYear(26));
}
function testIslamicIsLeapYear27() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(27));
}
function testIslamicIsLeapYear28() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(28));
}
function testIslamicIsLeapYear29() {
    var cal = new ilib.Cal.Islamic();
    
    assertTrue(cal.isLeapYear(29));
}
function testIslamicIsLeapYear30() {
    var cal = new ilib.Cal.Islamic();
    
    assertFalse(cal.isLeapYear(30));
}

function testIslamicNewDateInstance() {
    var cal = new ilib.Cal.Islamic();
    var d = cal.newDateInstance({
    	year: 20,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertTrue(d instanceof ilib.Date.IslamicDate);
}
