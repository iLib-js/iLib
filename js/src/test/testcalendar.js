/*
 * testcalendar.js - test the calendar routines
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

function testCalendarFactoryDefault() {
    var cal = ilib.Cal.newInstance();
    assertNotNull(cal);
}

function testCalendarFactoryDefaultRightType() {
    var cal = ilib.Cal.newInstance();
    assertNotNull(cal);
    
    assertEquals("gregorian", cal.getType());
}

function testCalendarFactorySpecific() {
    var cal = ilib.Cal.newInstance({type: "julian"});
    assertNotNull(cal);
    
    assertEquals("julian", cal.getType());
}

function testCalendarFactoryUnknown() {
    var cal = ilib.Cal.newInstance({type: "asdf"});
    assertUndefined(cal);
}

function testCalendarFactoryDefaultForLocale() {
    var cal = ilib.Cal.newInstance({locale: "ar-AE"});
    assertNotNull(cal);
    
    assertEquals("islamic", cal.getType());
}

function testCalendarFactoryOverrideLocale() {
    var cal = ilib.Cal.newInstance({locale: "ar-AE", type: "gregorian"});
    assertNotNull(cal);
    
    assertEquals("gregorian", cal.getType());
}

function testGetCalendars() {
    var expected = [
        "julian",
        "gregorian",
        "islamic",
        "hebrew"
    ];
    
    assertArrayEqualsIgnoringOrder(expected, ilib.Cal.getCalendars());
}
