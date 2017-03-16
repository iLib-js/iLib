/*
 * testcalendar.js - test the calendar routines
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

var CalendarFactory = require("./../lib/CalendarFactory.js");

function testCalendarFactoryDefault() {
    var cal = CalendarFactory();
    assertNotUndefined(cal);
}

function testCalendarFactoryDefaultRightType() {
    var cal = CalendarFactory();
    assertNotUndefined(cal);

    assertEquals("gregorian", cal.getType());
}

function testCalendarFactorySpecific() {
    var cal = CalendarFactory({type: "julian"});
    assertNotUndefined(cal);

    assertEquals("julian", cal.getType());
}

function testCalendarFactoryUnknown() {
    var cal = CalendarFactory({type: "asdf"});
    assertUndefined(cal);
}

function testCalendarFactoryDefaultForLocale() {
    var cal = CalendarFactory({locale: "ar-AE"});
    assertNotUndefined(cal);

    assertEquals("gregorian", cal.getType());
}

function testCalendarFactoryDefaultForLocale_AZ() {
    var cal = CalendarFactory({locale: "az-Latn-AZ"});
    assertNotUndefined(cal);

    assertEquals("gregorian", cal.getType());
}

function testCalendarFactoryDefaultForLocaleOther() {
    var cal = CalendarFactory({locale: "th-TH"});
    assertNotUndefined(cal);

    assertEquals("thaisolar", cal.getType());
}

function testCalendarFactoryOverrideLocale() {
    var cal = CalendarFactory({locale: "ar-AE", type: "gregorian"});
    assertNotUndefined(cal);

    assertEquals("gregorian", cal.getType());
}

function testGetCalendars() {
    var expected = [
        "julian",
        "gregorian",
        "islamic",
        "hebrew",
        "thaisolar",
        "persian-algo",
        "persian",
        "han",
        "ethiopic",
        "coptic"
    ];

    assertArrayEqualsIgnoringOrder(expected, CalendarFactory.getCalendars());
}
