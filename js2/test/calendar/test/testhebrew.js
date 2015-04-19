/*
 * testhebrew.js - test the hebrew calendar
 * 
 * Copyright © 2012-2013, JEDLSoft
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

function testHebrewGetNumMonths() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(12, cal.getNumMonths(5772));
}

function testHebrewGetMonLength1() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.getMonLength(1, 5772));
}

function testHebrewGetMonLength2() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(29, cal.getMonLength(2, 5772));
}

function testHebrewGetMonLength3() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.getMonLength(3, 5772));
}

function testHebrewGetMonLength4() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(29, cal.getMonLength(4, 5772));
}

function testHebrewGetMonLength5() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.getMonLength(5, 5772));
}

function testHebrewGetMonLength6() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(29, cal.getMonLength(6, 5772));
}

function testHebrewGetMonLength7() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.getMonLength(7, 5772));
}

function testHebrewGetMonLength8() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(29, cal.getMonLength(8, 5772));
}

function testHebrewGetMonLength9() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.getMonLength(9, 5772));
}

function testHebrewGetMonLength10() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(29, cal.getMonLength(10, 5772));
}

function testHebrewGetMonLength11() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.getMonLength(11, 5772));
}

function testHebrewGetMonLength12() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.getMonLength(12, 5772));
}

function testHebrewGetMonLength13() {
    var cal = new ilib.Cal.Hebrew();

    // doesn't exist in a non-leap year
    assertEquals(0, cal.getMonLength(13, 5772));
}

function testHebrewGetNumMonthsLeap() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(13, cal.getNumMonths(5774));
}

function testHebrewGetMonLength1Leap() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.getMonLength(1, 5774));
}

function testHebrewGetMonLength2Leap() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(29, cal.getMonLength(2, 5774));
}

function testHebrewGetMonLength3Leap() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.getMonLength(3, 5774));
}

function testHebrewGetMonLength4Leap() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(29, cal.getMonLength(4, 5774));
}

function testHebrewGetMonLength5Leap() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.getMonLength(5, 5774));
}

function testHebrewGetMonLength6Leap() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(29, cal.getMonLength(6, 5774));
}

function testHebrewGetMonLength7Leap() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.getMonLength(7, 5774));
}

function testHebrewGetMonLength8Leap() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.getMonLength(8, 5774));
}

function testHebrewGetMonLength9Leap() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.getMonLength(9, 5774));
}

function testHebrewGetMonLength10Leap() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(29, cal.getMonLength(10, 5774));
}

function testHebrewGetMonLength11Leap() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.getMonLength(11, 5774));
}

function testHebrewGetMonLength12Leap() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.getMonLength(12, 5774));
}

function testHebrewGetMonLength13Leap() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(29, cal.getMonLength(13, 5774));
}

function testHebrewIsLeapYear1() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(1));
}

function testHebrewIsLeapYear2() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(2));
}

function testHebrewIsLeapYear3() {
    var cal = new ilib.Cal.Hebrew();
    
    assertTrue(cal.isLeapYear(3));
}

function testHebrewIsLeapYear4() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(4));
}

function testHebrewIsLeapYear5() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(5));
}

function testHebrewIsLeapYear6() {
    var cal = new ilib.Cal.Hebrew();
    
    assertTrue(cal.isLeapYear(6));
}

function testHebrewIsLeapYear7() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(7));
}

function testHebrewIsLeapYear8() {
    var cal = new ilib.Cal.Hebrew();
    
    assertTrue(cal.isLeapYear(8));
}

function testHebrewIsLeapYear9() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(9));
}

function testHebrewIsLeapYear10() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(10));
}

function testHebrewIsLeapYear11() {
    var cal = new ilib.Cal.Hebrew();
    
    assertTrue(cal.isLeapYear(11));
}

function testHebrewIsLeapYear12() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(12));
}

function testHebrewIsLeapYear13() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(13));
}
function testHebrewIsLeapYear14() {
    var cal = new ilib.Cal.Hebrew();
    
    assertTrue(cal.isLeapYear(14));
}
function testHebrewIsLeapYear15() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(15));
}
function testHebrewIsLeapYear16() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(16));
}
function testHebrewIsLeapYear17() {
    var cal = new ilib.Cal.Hebrew();
    
    assertTrue(cal.isLeapYear(17));
}
function testHebrewIsLeapYear18() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(18));
}
function testHebrewIsLeapYear19() {
    var cal = new ilib.Cal.Hebrew();
    
    assertTrue(cal.isLeapYear(19));
}
function testHebrewIsLeapYear20() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(20));
}
function testHebrewIsLeapYear21() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(21));
}
function testHebrewIsLeapYear22() {
    var cal = new ilib.Cal.Hebrew();
    
    assertTrue(cal.isLeapYear(22));
}
function testHebrewIsLeapYear23() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(23));
}
function testHebrewIsLeapYear24() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(24));
}
function testHebrewIsLeapYear25() {
    var cal = new ilib.Cal.Hebrew();
    
    assertTrue(cal.isLeapYear(25));
}
function testHebrewIsLeapYear26() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(26));
}
function testHebrewIsLeapYear27() {
    var cal = new ilib.Cal.Hebrew();
    
    assertTrue(cal.isLeapYear(27));
}
function testHebrewIsLeapYear28() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(28));
}
function testHebrewIsLeapYear29() {
    var cal = new ilib.Cal.Hebrew();
    
    assertFalse(cal.isLeapYear(29));
}
function testHebrewIsLeapYear30() {
    var cal = new ilib.Cal.Hebrew();
    
    assertTrue(cal.isLeapYear(30));
}

function testHebrewNewDateInstance() {
    var cal = new ilib.Cal.Hebrew();
    var d = cal.newDateInstance({
    	year: 20,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertTrue(d instanceof ilib.Date.HebrewDate);
}

function testHebrewGetNumMonths1() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(12, cal.getNumMonths(1));
}

function testHebrewGetNumMonths2() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(12, cal.getNumMonths(2));
}
function testHebrewGetNumMonths3() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(13, cal.getNumMonths(3));
}
function testHebrewGetNumMonths4() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(12, cal.getNumMonths(4));
}
function testHebrewGetNumMonths5() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(12, cal.getNumMonths(5));
}
function testHebrewGetNumMonths6() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(13, cal.getNumMonths(6));
}

function testHebrewLastDayOfMonth1() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.lastDayOfMonth(1, 5772));
}
function testHebrewLastDayOfMonth2() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(29, cal.lastDayOfMonth(2, 5772));
}
function testHebrewLastDayOfMonth3() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.lastDayOfMonth(3, 5772));
}
function testHebrewLastDayOfMonth4() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(29, cal.lastDayOfMonth(4, 5772));
}
function testHebrewLastDayOfMonth5() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.lastDayOfMonth(5, 5772));
}
function testHebrewLastDayOfMonth6() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(29, cal.lastDayOfMonth(6, 5772));
}
function testHebrewLastDayOfMonth7() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.lastDayOfMonth(7, 5772));
}
function testHebrewLastDayOfMonth8ShortHeshvan() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(29, cal.lastDayOfMonth(8, 5772));
}
function testHebrewLastDayOfMonth8LongHeshvan() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.lastDayOfMonth(8, 5771));
}
function testHebrewLastDayOfMonth9ShortKislev() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(29, cal.lastDayOfMonth(9, 5773));
}
function testHebrewLastDayOfMonth9LongKislev() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.lastDayOfMonth(9, 5772));
}
function testHebrewLastDayOfMonth10() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(29, cal.lastDayOfMonth(10, 5772));
}
function testHebrewLastDayOfMonth11() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.lastDayOfMonth(11, 5772));
}
function testHebrewLastDayOfMonth12() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(30, cal.lastDayOfMonth(12, 5772));
}
function testHebrewLastDayOfMonth13NotLeap() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(0, cal.lastDayOfMonth(13, 5772));
}
function testHebrewLastDayOfMonth13Leap() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(29, cal.lastDayOfMonth(13, 5771));
}
function testHebrewLastDayOfMonthBogus() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(0, cal.lastDayOfMonth(2313, 5772));
}
function testHebrewLastDayOfMonthNegative() {
    var cal = new ilib.Cal.Hebrew();
    
    assertEquals(0, cal.lastDayOfMonth(-2, 5772));
}

/* test internal private functions to make sure they are providing the correct
 * information to the other internal routines...
 */
function testHebrewElapsedDays1() {
    assertEquals(0, ilib.Cal.Hebrew.elapsedDays(1));
}
function testHebrewElapsedDays2() {
    assertEquals(355, ilib.Cal.Hebrew.elapsedDays(2));
}
function testHebrewElapsedDays3() {
    assertEquals(710, ilib.Cal.Hebrew.elapsedDays(3));
}
function testHebrewElapsedDays4() {
    assertEquals(1093, ilib.Cal.Hebrew.elapsedDays(4));
}
function testHebrewElapsedDays5() {
    assertEquals(1447, ilib.Cal.Hebrew.elapsedDays(5));
}
function testHebrewElapsedDays6() {
    assertEquals(1802, ilib.Cal.Hebrew.elapsedDays(6));
}
function testHebrewElapsedDays5773() {
	// bigger number calculation, so more chance for error
    assertEquals(2108190, ilib.Cal.Hebrew.elapsedDays(5773));
}
