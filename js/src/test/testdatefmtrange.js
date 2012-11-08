/*
 * testdatefmtrange.js - test the date range formatter object
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

function testDateRngFmtConstructorEmpty() {
    var fmt = new ilib.DateRngFmt();
    
    assertNotNull(fmt);
}

function testDateRngFmtConstructorDefaultLocale() {
    var fmt = new ilib.DateRngFmt();
    
    assertNotNull(fmt);
    
    assertEquals("en-US", fmt.getLocale().toString());
}

function testDateRngFmtGetCalendarDefault() {
    var fmt = new ilib.DateRngFmt();
    
    assertNotNull(fmt);
    var cal = fmt.getCalendar();
    assertNotNull(cal);
    
    assertEquals("gregorian", cal);
}

function testDateRngFmtGetCalendarExplicit() {
    var fmt = new ilib.DateRngFmt({calendar: "julian"});
    
    assertNotNull(fmt);
    var cal = fmt.getCalendar();
    assertNotNull(cal);
    
    assertEquals("julian", cal);
}

function testDateRngFmtGetCalendarExplicitDefault() {
    var fmt = new ilib.DateRngFmt({calendar: "gregorian"});
    
    assertNotNull(fmt);
    var cal = fmt.getCalendar();
    assertNotNull(cal);
    
    assertEquals("gregorian", cal);
}

function testDateRngFmtGetCalendarNotInThisLocale() {
    try {
        var fmt = new ilib.DateRngFmt({calendar: "arabic", locale: 'en-US'});
        fail();
    } catch (str) {
        assertEquals("string", typeof(str));
        assertEquals("No formats available for calendar arabic in locale en-US", str);
    }
}

function testDateRngFmtGetLength() {
    var fmt = new ilib.DateRngFmt({length: "full"});
    assertNotNull(fmt);
    
    assertEquals("full", fmt.getLength());
}

function testDateRngFmtGetLengthDefault() {
    var fmt = new ilib.DateRngFmt();
    assertNotNull(fmt);
    
    assertEquals("short", fmt.getLength());
}

function testDateRngFmtGetLengthBogus() {
    var fmt = new ilib.DateRngFmt({length: "asdf"});
    assertNotNull(fmt);
    
    assertEquals("short", fmt.getLength());
}

function testDateRngFmtGetLocale() {
    var fmt = new ilib.DateRngFmt({locale: "de-DE"});
    assertNotNull(fmt);
    
    assertEquals("de-DE", fmt.getLocale().toString());
}

function testDateRngFmtGetLocaleDefault() {
    var fmt = new ilib.DateRngFmt();
    assertNotNull(fmt);
    
    assertEquals("en-US", fmt.getLocale().toString());
}

function testDateRngFmtGetLocaleBogus() {
    var fmt = new ilib.DateRngFmt({locale: "xx-XX"});
    assertNotNull(fmt);
    
    assertEquals("xx-XX", fmt.getLocale().toString());
}

function testDateRngFmtGetClockDefaultUS() {
    var fmt = new ilib.DateRngFmt({locale: "en-US"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("12", fmt.getClock());
}

function testDateRngFmtGetClockDefaultDE() {
    var fmt = new ilib.DateRngFmt({locale: "de-DE"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("24", fmt.getClock());
}

function testDateRngFmtGetClock() {
    var fmt = new ilib.DateRngFmt({locale: "en-US", clock: "24"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("24", fmt.getClock());
}

function testDateRngFmtGetClockBogus() {
    var fmt = new ilib.DateRngFmt({locale: "en-US", clock: "asdf"});
    assertNotNull(fmt);
    
    // use the default
    assertEquals("12", fmt.getClock());
}

function testDateRngFmtGetTimeZoneDefault() {
    var fmt = new ilib.DateRngFmt();
    assertNotNull(fmt);
    
    var tz = fmt.getTimeZone();
    assertEquals("America/New_York", tz.getId());
}

function testDateRngFmtGetTimeZone() {
    var fmt = new ilib.DateRngFmt({timezone: "Europe/Paris"});
    assertNotNull(fmt);
    
    var tz = fmt.getTimeZone();
    assertEquals("Europe/Paris", tz.getId());
}
