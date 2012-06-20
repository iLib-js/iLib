/*
 * testjulianday.js - test the julian day object
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

function testJulianDayConstructor() {
    var jd = new ilib.JulianDay(1721791.25);  // jan 2, 2, 6:00pm

    assertNotNull(jd);
    debug(JSON.stringify(jd));
}

/* julian date is 366 + epoch */
function testJulianDayGetDate() {
    var jd = new ilib.JulianDay(1721791.25);  // jan 2, 2, 6:00pm

    assertEquals(1721791.25, jd.getDate());
}

function testJulianDayGetDays() {
    var jd = new ilib.JulianDay(1721791.25);  // jan 2, 2, 6:00pm

    debug(typeof(jd.getDays));
    assertEquals(1721791, jd.getDays());
}

function testJulianDayGetDayFraction() {
    var jd = new ilib.JulianDay(1721791.25);  // jan 2, 2, 6:00pm

    assertEquals(0.25, jd.getDayFraction());
}

function testJulianDayAddDate() {
    var jd = new ilib.JulianDay(1.25);
    assertEquals(1.25, jd.getDate());
    
    jd.addDate(83.2);
    
    assertEquals(84.45, jd.getDate());
}

function testJulianDaySetDays() {
    var jd = new ilib.JulianDay(1721791.25);  // jan 2, 2, 6:00pm
    assertEquals(1721791.25, jd.getDate());
    
    jd.setDays(2);
    
    assertEquals(2, jd.getDays());
    assertEquals(2.25, jd.getDate());
}

function testJulianDaySetDaysIgnoreFraction() {
    var jd = new ilib.JulianDay(1721791.25);  // jan 2, 2, 6:00pm
    assertEquals(1721791.25, jd.getDate());
    
    jd.setDays(2.9);
    
    assertEquals(2, jd.getDays());
    assertEquals(2.25, jd.getDate());
}

function testJulianDaySetDayFraction() {
    var jd = new ilib.JulianDay(1721791.25);  // jan 2, 2, 6:00pm
    assertEquals(1721791.25, jd.getDate());
    
    jd.setDayFraction(0.33);
    
    assertTrue(jd.getDayFraction() - 0.33 < 0.0000000001);
    assertEquals(1721791.33, jd.getDate());
}

function testJulianDaySetDayFractionWithWholeNumber() {
    var jd = new ilib.JulianDay(1721791.25);  // jan 2, 2, 6:00pm
    assertEquals(1721791.25, jd.getDate());
    
    jd.setDayFraction(2.33);
    
    assertTrue(jd.getDayFraction() - 0.33 < 0.0000000001);
    assertEquals(1721791.33, jd.getDate());
}

function testJulianDaySetDate() {
    var jd = new ilib.JulianDay(1721791.25);
    assertEquals(1721791.25, jd.getDate());
    
    jd.setDate(123.456);
    
    assertEquals(123.456, jd.getDate());
}

