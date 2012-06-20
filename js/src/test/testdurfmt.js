/*
 * testdurfmt.js - test the duration formatter object
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

function testDurFmtConstructorEmpty() {
	var fmt = new ilib.DurFmt();
    
    assertNotNull(fmt);
}

function testDurFmtConstructorDefaultLocale() {
    var fmt = new ilib.DurFmt();
    
    assertNotNull(fmt);
    
    assertEquals("en-US", fmt.getLocale().toString());
}

function testDurFmtGetLength() {
    var fmt = new ilib.DurFmt({length: "full"});
    assertNotNull(fmt);
    
    assertEquals("full", fmt.getLength());
}

function testDurFmtGetLengthDefault() {
    var fmt = new ilib.DurFmt();
    assertNotNull(fmt);
    
    assertEquals("short", fmt.getLength());
}

function testDurFmtGetLengthBogus() {
    var fmt = new ilib.DurFmt({length: "asdf"});
    assertNotNull(fmt);
    
    assertEquals("short", fmt.getLength());
}

function testDurFmtGetLocale() {
    var fmt = new ilib.DurFmt({locale: "de-DE"});
    assertNotNull(fmt);
    
    assertEquals("de-DE", fmt.getLocale().toString());
}

function testDurFmtGetLocaleDefault() {
    var fmt = new ilib.DurFmt();
    assertNotNull(fmt);
    
    assertEquals("en-US", fmt.getLocale().toString());
}

function testDurFmtGetLocaleBogus() {
    var fmt = new ilib.DurFmt({locale: "xx-XX"});
    assertNotNull(fmt);
    
    assertEquals("xx-XX", fmt.getLocale().toString());
}

function testDurFmtGetStyleDefault() {
    var fmt = new ilib.DurFmt();
    assertNotNull(fmt);
    
    assertEquals("text", fmt.getStyle());
}

function testDurFmtGetStyleText() {
    var fmt = new ilib.DurFmt({style: "text"});
    assertNotNull(fmt);
    
    assertEquals("text", fmt.getStyle());
}

function testDurFmtGetStyleClock() {
    var fmt = new ilib.DurFmt({style: "clock"});
    assertNotNull(fmt);
    
    assertEquals("clock", fmt.getStyle());
}

function testDurFmtGetStyleBogus() {
    var fmt = new ilib.DurFmt({style: "asdf"});
    assertNotNull(fmt);
    
    assertEquals("text", fmt.getStyle());
}

function testDurFmtFormatShortText() {
    var fmt = new ilib.DurFmt({
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1y 1m 1w 1d 1h 1m 1s 1m", duration.toString());
}

function testDurFmtFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1y 1m 1w 1d 1:01:01", duration.toString());
}

function testDurFmtFormatShortExceedClockLimitsNoWrap() {
    var fmt = new ilib.DurFmt({
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 36,
    	minute: 65,
    	second: 66
    });
    assertEquals("1y 1m 1w 1d 36:65:66", duration.toString());
}

function testDurFmtFormatShortClockNoMinutesSeconds() {
    var fmt = new ilib.DurFmt({
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1
    });
    assertEquals("1y 1m 1w 1d 1:00:00", duration.toString());
}

function testDurFmtFormatShortTextNoMinutesSeconds() {
    var fmt = new ilib.DurFmt({
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1
    });
    assertEquals("1y 1m 1w 1d 1h", duration.toString());
}

function testDurFmtFormatMedium() {
    var fmt = new ilib.DurFmt({
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 yr 1 mo 1 wk 1 dy 1 hr 1 mi 1 se 1 ms", duration.toString());
}

function testDurFmtFormatLongSingle() {
    var fmt = new ilib.DurFmt({
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 yr, 1 mon, 1 wk, 1 day, 1 hr, 1 min, 1 sec, 1 ms", duration.toString());
}

function testDurFmtFormatFullSingle() {
    var fmt = new ilib.DurFmt({
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 year, 1 month, 1 week, 1 day, 1 hour, 1 minute, 1 second and 1 millisecond", duration.toString());
}

function testDurFmtFormatLongPlural() {
    var fmt = new ilib.DurFmt({
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 2,
    	month: 2,
    	week: 2,
    	day: 2,
    	hour: 2,
    	minute: 2,
    	second: 2,
    	millisecond: 2
    });
    assertEquals("2 yrs, 2 mon, 2 wks, 2 dys, 2 hrs, 2 min, 2 sec, 2 ms", duration.toString());
}

function testDurFmtFormatFullPlural() {
    var fmt = new ilib.DurFmt({
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 2,
    	month: 2,
    	week: 2,
    	day: 2,
    	hour: 2,
    	minute: 2,
    	second: 2,
    	millisecond: 2
    });
    assertEquals("2 years, 2 months, 2 weeks, 2 days, 2 hours, 2 minutes, 2 seconds and 2 milliseconds", duration.toString());
}

function testDurFmtFormatShortDEDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "de-DE",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1J 1M 1W 1T 1S 1M 1S 1M", duration.toString());
}

function testDurFmtFormatShortDEText() {
    var fmt = new ilib.DurFmt({
    	locale: "de-DE",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1J 1M 1W 1T 1S 1M 1S 1M", duration.toString());
}

function testDurFmtFormatShortDEClock() {
    var fmt = new ilib.DurFmt({
    	locale: "de-DE",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1J 1M 1W 1T 1:01:01.001", duration.toString());
}

function testDurFmtFormatMediumDE() {
    var fmt = new ilib.DurFmt({
    	locale: "de-DE",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 Jr 1 Mo 1 Wo 1 Ta 1 St 1 Mi 1 Se 1 Ms", duration.toString());
}

function testDurFmtFormatLongDESingle() {
    var fmt = new ilib.DurFmt({
    	locale: "de-DE",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 Jhr, 1 Mon, 1 Woc, 1 Tag, 1 Std, 1 Min, 1 Sek, 1 Ms", duration.toString());
}

function testDurFmtFormatFullDESingle() {
    var fmt = new ilib.DurFmt({
    	locale: "de-DE",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 Jahr, 1 Monat, 1 Woche, 1 Tag, 1 Stunde, 1 Minute, 1 Sekunde, und 1 Millisekunde", duration.toString());
}

function testDurFmtFormatLongDEPlural() {
    var fmt = new ilib.DurFmt({
    	locale: "de-DE",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 2,
    	month: 2,
    	week: 2,
    	day: 2,
    	hour: 2,
    	minute: 2,
    	second: 2,
    	millisecond: 2
    });
    assertEquals("2 Jre, 2 Mon, 2 Wch, 2 Tge, 2 Std, 2 Min, 2 Sek, 2 Ms", duration.toString());
}

function testDurFmtFormatFullDEPlural() {
    var fmt = new ilib.DurFmt({
    	locale: "de-DE",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 2,
    	month: 2,
    	week: 2,
    	day: 2,
    	hour: 2,
    	minute: 2,
    	second: 2,
    	millisecond: 2
    });
    assertEquals("2 Jahre, 2 Monate, 2 Wochen, 2 Tage, 2 Stunden, 2 Minuten, 2 Sekunden, und 2 Millisekunden", duration.toString());
}
