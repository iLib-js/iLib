/*
 * testdurfmt.js - test the duration formatter object
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

var DurationFmt = require("./../lib/DurationFmt.js");

function testDurFmtConstructorEmpty() {
	var fmt = new DurationFmt();
    
    assertNotNull(fmt);
};

function testDurFmtConstructorDefaultLocale() {
    var fmt = new DurationFmt();
    
    assertNotNull(fmt);
    
    assertEquals("en-US", fmt.getLocale().toString());
};

function testDurFmtGetLength() {
    var fmt = new DurationFmt({length: "full"});
    assertNotNull(fmt);
    
    assertEquals("full", fmt.getLength());
};

function testDurFmtGetLengthDefault() {
    var fmt = new DurationFmt();
    assertNotNull(fmt);
    
    assertEquals("short", fmt.getLength());
};

function testDurFmtGetLengthBogus() {
    var fmt = new DurationFmt({length: "asdf"});
    assertNotNull(fmt);
    
    assertEquals("short", fmt.getLength());
};

function testDurFmtGetLocale() {
    var fmt = new DurationFmt({locale: "de-DE"});
    assertNotNull(fmt);
    
    assertEquals("de-DE", fmt.getLocale().toString());
};

function testDurFmtGetLocaleDefault() {
    var fmt = new DurationFmt();
    assertNotNull(fmt);
    
    assertEquals("en-US", fmt.getLocale().toString());
};

function testDurFmtGetLocaleBogus() {
    var fmt = new DurationFmt({locale: "zyy-XX"});
    assertNotNull(fmt);
    
    assertEquals("zyy-XX", fmt.getLocale().toString());
};

function testDurFmtGetStyleDefault() {
    var fmt = new DurationFmt();
    assertNotNull(fmt);
    
    assertEquals("text", fmt.getStyle());
};

function testDurFmtGetStyleText() {
    var fmt = new DurationFmt({style: "text"});
    assertNotNull(fmt);
    
    assertEquals("text", fmt.getStyle());
};

function testDurFmtGetStyleClock() {
    var fmt = new DurationFmt({style: "clock"});
    assertNotNull(fmt);
    
    assertEquals("clock", fmt.getStyle());
};

function testDurFmtGetStyleBogus() {
    var fmt = new DurationFmt({style: "asdf"});
    assertNotNull(fmt);
    
    assertEquals("text", fmt.getStyle());
};

function testDurFmtFormatShortText() {
    var fmt = new DurationFmt({
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
    assertEquals("1y 1m 1w 1d 1h 1m 1s 1ms", duration.toString());
};

function testDurFmtFormatShortClock() {
    var fmt = new DurationFmt({
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
};

function testDurFmtFormatShortExceedClockLimitsNoWrap() {
    var fmt = new DurationFmt({
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
};

function testDurFmtFormatShortClockNoMinutesSeconds() {
    var fmt = new DurationFmt({
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
    assertEquals("1y 1m 1w 1d 1:00", duration.toString());
};

function testDurFmtFormatShortTextNoMinutesSeconds() {
    var fmt = new DurationFmt({
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
};

function testDurFmtFormatMedium() {
    var fmt = new DurationFmt({
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
    assertEquals("1 yr 1 mth 1 wk 1 day 1 hr 1 min 1 sec 1 ms", duration.toString());
};

function testDurFmtFormatLongSingle() {
    var fmt = new DurationFmt({
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
    assertEquals("1 yr, 1 mth, 1 wk, 1 day, 1 hr, 1 min, 1 sec, 1 ms", duration.toString());
};

function testDurFmtFormatFullSingle() {
    var fmt = new DurationFmt({
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
};

function testDurFmtFormatFullSingle_en_GB() {
    var fmt = new DurationFmt({
    	length: "full",
    	locale: "en-GB"
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
    assertEquals("1 year, 1 month, 1 week, 1 day, 1 hour, 1 minute, 1 second, and 1 millisecond", duration.toString());
};

function testDurFmtFormatFullSingleNotAllFields() {
    var fmt = new DurationFmt({
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	week: 1,
    	day: 1,
    	minute: 1
    });
    assertEquals("1 year, 1 week, 1 day and 1 minute", duration.toString());
};

function testDurFmtFormatFullSingleNotAllFields_en_GB() {
    var fmt = new DurationFmt({
    	length: "full",
    	locale: "en-GB"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	week: 1,
    	day: 1,
    	minute: 1
    });
    assertEquals("1 year, 1 week, 1 day, and 1 minute", duration.toString());
};

function testDurFmtFormatFullSingle() {
    var fmt = new DurationFmt({
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
};

function testDurFmtFormatFullSingle_en_GB() {
    var fmt = new DurationFmt({
    	length: "full",
    	locale: "en-GB"
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
    assertEquals("1 year, 1 month, 1 week, 1 day, 1 hour, 1 minute, 1 second, and 1 millisecond", duration.toString());
};

function testDurFmtFormatLongPlural() {
    var fmt = new DurationFmt({
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
    assertEquals("2 yrs, 2 mths, 2 wks, 2 days, 2 hrs, 2 mins, 2 secs, 2 ms", duration.toString());
};

function testDurFmtFormatFullPlural() {
    var fmt = new DurationFmt({
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
};

function testDurFmtFormatFullPlural_en_GB() {
    var fmt = new DurationFmt({
    	length: "full",
    	locale: "en-GB"
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
    assertEquals("2 years, 2 months, 2 weeks, 2 days, 2 hours, 2 minutes, 2 seconds, and 2 milliseconds", duration.toString());
};

function testDurFmtFormatShortDEDefaultStyle() {
    var fmt = new DurationFmt({
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
    assertEquals("1 J 1 M 1 W 1 T 1 Std. 1 Min. 1 s 1 ms", duration.toString());
};

function testDurFmtFormatShortDEText() {
    var fmt = new DurationFmt({
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
    assertEquals("1 J 1 M 1 W 1 T 1 Std. 1 Min. 1 s 1 ms", duration.toString());
};

function testDurFmtFormatShortDEClock() {
    var fmt = new DurationFmt({
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
    assertEquals("1 J 1 M 1 W 1 T 01:01:01", duration.toString());
};

function testDurFmtFormatMediumDE() {
    var fmt = new DurationFmt({
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
    assertEquals("1 J 1 Mon 1 W 1 T 1 Std. 1 Min. 1 Sek. 1 ms", duration.toString());
};

function testDurFmtFormatLongDESingle() {
    var fmt = new DurationFmt({
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
    assertEquals("1 J, 1 Mon, 1 W, 1 T, 1 Std., 1 Min., 1 Sek., 1 ms", duration.toString());
};

function testDurFmtFormatFullDESingle() {
    var fmt = new DurationFmt({
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
    assertEquals("1 Jahr, 1 Monat, 1 Woche, 1 Tag, 1 Stunde, 1 Minute, 1 Sekunde, and 1 Millisekunde", duration.toString());
};

function testDurFmtFormatLongDEPlural() {
    var fmt = new DurationFmt({
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
    assertEquals("2 J, 2 Mon, 2 W, 2 T, 2 Std., 2 Min., 2 Sek., 2 ms", duration.toString());
};

function testDurFmtFormatFullDEPlural() {
    var fmt = new DurationFmt({
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
    assertEquals("2 Jahre, 2 Monate, 2 Wochen, 2 Tage, 2 Stunden, 2 Minuten, 2 Sekunden, and 2 Millisekunden", duration.toString());
};

function testDurFmtFormatShortZHDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "zh-Hans-CN",
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
    assertEquals("1年 1个月 1周 1天 1小时 1分钟 1秒 1毫秒", duration.toString());
};

function testDurFmtFormatShortZHText() {
    var fmt = new DurationFmt({
    	locale: "zh-Hans-CN",
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
    assertEquals("1年 1个月 1周 1天 1小时 1分钟 1秒 1毫秒", duration.toString());
};

function testDurFmtFormatShortZHClock() {
    var fmt = new DurationFmt({
    	locale: "zh-Hans-CN",
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
    assertEquals("1年 1个月 1周 1天 1:01:01", duration.toString());
};

function testDurFmtFormatMediumZH() {
    var fmt = new DurationFmt({
    	locale: "zh-Hans-CN",
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
    assertEquals("1年 1个月 1周 1天 1小时 1分钟 1秒 1毫秒", duration.toString());
};

function testDurFmtFormatLongZH() {
    var fmt = new DurationFmt({
    	locale: "zh-Hans-CN",
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
    assertEquals("1年, 1个月, 1周, 1天, 1小时, 1分钟, 1秒, 1毫秒", duration.toString());
};

function testDurFmtFormatFullZH() {
    var fmt = new DurationFmt({
    	locale: "zh-Hans-CN",
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
    assertEquals("1年, 1个月, 1周, 1天, 1小时, 1分钟, 1秒钟, and 1毫秒", duration.toString());
};

function testDurFmtFormatShortFRDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "fr-FR",
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
    assertEquals("1a 1m 1sem 1j 1h 1m 1s 1ms", duration.toString());
};

function testDurFmtFormatShortFRText() {
    var fmt = new DurationFmt({
    	locale: "fr-FR",
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
    assertEquals("1a 1m 1sem 1j 1h 1m 1s 1ms", duration.toString());
};

function testDurFmtFormatShortFRClock() {
    var fmt = new DurationFmt({
    	locale: "fr-FR",
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
    assertEquals("1a 1m 1sem 1j 01:01:01", duration.toString());
};

function testDurFmtFormatMediumFR() {
    var fmt = new DurationFmt({
    	locale: "fr-FR",
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
    assertEquals("1 an 1 m 1 sem. 1 j 1 h 1 min 1 s 1 ms", duration.toString());
};

function testDurFmtFormatLongFR() {
    var fmt = new DurationFmt({
    	locale: "fr-FR",
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
    assertEquals("1 an, 1 m, 1 sem., 1 j, 1 h, 1 min, 1 s, 1 ms", duration.toString());
};

function testDurFmtFormatFullFR() {
    var fmt = new DurationFmt({
    	locale: "fr-FR",
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
    assertEquals("1 an, 1 mois, 1 semaine, 1 jour, 1 heure, 1 minute, 1 seconde, and 1 milliseconde", duration.toString());
};

//test cases for bg-BG

function testDurFmtBGFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "bg-BG",
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
    	second: 1
    });
    assertEquals("1 г 1 м 1 седм. 1 д 1 h 1 min 1 s", duration.toString());
};

function testDurFmtBGFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "bg-BG",
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
    	second: 1
    });
    assertEquals("1 г 1 м 1 седм. 1 д 1 h 1 min 1 s", duration.toString());
};

function testDurFmtBGFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "bg-BG",
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
    	second: 1
    });
    assertEquals("1 г 1 м 1 седм. 1 д 1:01:01", duration.toString());
};

function testDurFmtBGFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "bg-BG",
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
    	second: 1
    });
    assertEquals("1 г 1 мес. 1 седм. 1 д 1 h 1 min 1 s", duration.toString());
};

function testDurFmtBGFormatLong() {
    var fmt = new DurationFmt({
    	locale: "bg-BG",
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
    	second: 1
    });
    assertEquals("1 г, 1 мес., 1 седм., 1 д, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtBGFormatFull() {
    var fmt = new DurationFmt({
    	locale: "bg-BG",
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
    	second: 1
    });
    assertEquals("1 година, 1 месец, 1 седмица, 1 ден, 1 час, 1 минута, and 1 секунда", duration.toString());
};


//test cases for bs-Latn-BA

function testDurFmtBSLatnFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "bs-Latn-BA",
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
    	second: 1
    });
    assertEquals("1 god 1 mj. 1 sedm 1 dan 1 sat 1 min 1 sek", duration.toString());
};

function testDurFmtBSLatnFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "bs-Latn-BA",
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
    	second: 1
    });
    assertEquals("1 god 1 mj. 1 sedm 1 dan 1 sat 1 min 1 sek", duration.toString());
};

function testDurFmtBSLatnFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "bs-Latn-BA",
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
    	second: 1
    });
    assertEquals("1 god 1 mj. 1 sedm 1 dan 01:01:01", duration.toString());
};

function testDurFmtBSLatnFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "bs-Latn-BA",
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
    	second: 1
    });
    assertEquals("1 god 1 mj 1 sedm 1 dan 1 sat 1 min 1 sek", duration.toString());
};

function testDurFmtBSLatnFormatLong() {
    var fmt = new DurationFmt({
    	locale: "bs-Latn-BA",
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
    	second: 1
    });
    assertEquals("1 god, 1 mj, 1 sedm, 1 dan, 1 sat, 1 min, 1 sek", duration.toString());
};

function testDurFmtBSLatnFormatFull() {
    var fmt = new DurationFmt({
    	locale: "bs-Latn-BA",
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
    	second: 1
    });
    assertEquals("1 godina, 1 mjesec, 1 sedmica, 1 dan, 1 sat, 1 minut, and 1 sekunda", duration.toString());
};

//test cases for cs-CZ

function testDurFmtCSFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "cs-CZ",
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
    	second: 1
    });
    assertEquals("1 r 1 m 1 t 1 d 1 h 1 m 1 s", duration.toString());
};

function testDurFmtCSFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "cs-CZ",
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
    	second: 1
    });
    assertEquals("1 r 1 m 1 t 1 d 1 h 1 m 1 s", duration.toString());
};

function testDurFmtCSFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "cs-CZ",
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
    	second: 1
    });
    assertEquals("1 r 1 m 1 t 1 d 1:01:01", duration.toString());
};

function testDurFmtCSFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "cs-CZ",
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
    	second: 1
    });
    assertEquals("1 rok 1 měs. 1 týd. 1 den 1 h 1 min 1 s", duration.toString());
};

function testDurFmtCSFormatLong() {
    var fmt = new DurationFmt({
    	locale: "cs-CZ",
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
    	second: 1
    });
    assertEquals("1 rok, 1 měs., 1 týd., 1 den, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtCSFormatFull() {
    var fmt = new DurationFmt({
    	locale: "cs-CZ",
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
    	second: 1
    });
    assertEquals("1 rok, 1 měsíc, 1 týden, 1 den, 1 hodina, 1 minuta, and 1 sekunda", duration.toString());
};

//test cases for da-DK


function testDurFmtDAFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "da-DK",
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
    	second: 1
    });
    assertEquals("1 år 1 m 1 u 1 d 1 t 1 m 1 s", duration.toString());
};

function testDurFmtDAFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "da-DK",
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
    	second: 1
    });
    assertEquals("1 år 1 m 1 u 1 d 1 t 1 m 1 s", duration.toString());
};

function testDurFmtDAFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "da-DK",
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
    	second: 1
    });
    assertEquals("1 år 1 m 1 u 1 d 01.01.01", duration.toString());
};

function testDurFmtDAFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "da-DK",
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
    	second: 1
    });
    assertEquals("1 år 1 md. 1 uge 1 dag 1 t 1 min 1 sek", duration.toString());
};

function testDurFmtDAFormatLong() {
    var fmt = new DurationFmt({
    	locale: "da-DK",
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
    	second: 1
    });
    assertEquals("1 år, 1 md., 1 uge, 1 dag, 1 t, 1 min, 1 sek", duration.toString());
};

function testDurFmtDAFormatFull() {
    var fmt = new DurationFmt({
    	locale: "da-DK",
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
    	second: 1
    });
    assertEquals("1 år, 1 måned, 1 uge, 1 dag, 1 time, 1 minut, and 1 sekund", duration.toString());
};

//test cases for el-GR


function testDurFmtGRFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "el-GR",
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
    	second: 1
    });
    assertEquals("1 έ 1 μ 1 ε 1 η 1 ώ 1 λ 1 δ", duration.toString());
};

function testDurFmtGRFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "el-GR",
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
    	second: 1
    });
    assertEquals("1 έ 1 μ 1 ε 1 η 1 ώ 1 λ 1 δ", duration.toString());
};

function testDurFmtGRFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "el-GR",
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
    	second: 1
    });
    assertEquals("1 έ 1 μ 1 ε 1 η 1:01:01", duration.toString());
};

function testDurFmtGRFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "el-GR",
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
    	second: 1
    });
    assertEquals("1 έτ. 1 μήν. 1 εβδ. 1 ημέρα 1 ώρα 1 λεπ. 1 δευτ.", duration.toString());
};

function testDurFmtGRFormatLong() {
    var fmt = new DurationFmt({
    	locale: "el-GR",
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
    	second: 1
    });
    assertEquals("1 έτ., 1 μήν., 1 εβδ., 1 ημέρα, 1 ώρα, 1 λεπ., 1 δευτ.", duration.toString());
};

function testDurFmtGRFormatFull() {
    var fmt = new DurationFmt({
    	locale: "el-GR",
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
    	second: 1
    });
    assertEquals("1 έτος, 1 μήνας, 1 εβδομάδα, 1 ημέρα, 1 ώρα, 1 λεπτό, and 1 δευτερόλεπτο", duration.toString());
};

//test cases for es-CO


function testDurFmtESFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "es-CO",
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
    	second: 1
    });
    assertEquals("1 a. 1 m. 1 sem. 1 d. 1 h 1 min 1 s", duration.toString());
};

function testDurFmtESFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "es-CO",
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
    	second: 1
    });
    assertEquals("1 a. 1 m. 1 sem. 1 d. 1 h 1 min 1 s", duration.toString());
};

function testDurFmtESFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "es-CO",
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
    	second: 1
    });
    assertEquals("1 a. 1 m. 1 sem. 1 d. 1:01:01", duration.toString());
};

function testDurFmtESFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "es-CO",
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
    	second: 1
    });
    assertEquals("1 a. 1 m. 1 sem. 1 d. 1 h 1 min 1 s", duration.toString());
};

function testDurFmtESFormatLong() {
    var fmt = new DurationFmt({
    	locale: "es-CO",
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
    	second: 1
    });
    assertEquals("1 a., 1 m., 1 sem., 1 d., 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtESFormatFull() {
    var fmt = new DurationFmt({
    	locale: "es-CO",
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
    	second: 1
    });
    assertEquals("1 año, 1 mes, 1 semana, 1 día, 1 hora, 1 minuto, and 1 segundo", duration.toString());
};


//test cases for estonian

function testDurFmtETFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "et-EE",
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
    	second: 1
    });
    assertEquals("1 a 1 k 1 n 1 p 1 h 1 min 1 s", duration.toString());
};

function testDurFmtETFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "et-EE",
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
    	second: 1
    });
    assertEquals("1 a 1 k 1 n 1 p 1 h 1 min 1 s", duration.toString());
};

function testDurFmtETFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "et-EE",
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
    	second: 1
    });
    assertEquals("1 a 1 k 1 n 1 p 1:01.01", duration.toString());
};

function testDurFmtETFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "et-EE",
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
    	second: 1
    });
    assertEquals("1 a 1 kuu 1 nädal 1 päev 1 h 1 min 1 s", duration.toString());
};

function testDurFmtETFormatLong() {
    var fmt = new DurationFmt({
    	locale: "et-EE",
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
    	second: 1
    });
    assertEquals("1 a, 1 kuu, 1 nädal, 1 päev, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtETFormatFull() {
    var fmt = new DurationFmt({
    	locale: "et-EE",
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
    	second: 1
    });
    assertEquals("1 aasta, 1 kuu, 1 nädal, 1 ööpäev, 1 tund, 1 minut, and 1 sekund", duration.toString());
};

//test cases for fa-IR

function testDurFmtFAFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "fa-IR",
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
    	second: 1
    });
    assertEquals("۱س ۱م ۱ه ۱ر ۱س ۱د ۱ث", duration.toString());
};

function testDurFmtFAFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "fa-IR",
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
    	second: 1
    });
    assertEquals("۱س ۱م ۱ه ۱ر ۱س ۱د ۱ث", duration.toString());
};

function testDurFmtFAFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "fa-IR",
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
    	second: 1
    });
    assertEquals("۱س ۱م ۱ه ۱ر ‏۱:۰۱:۰۱", duration.toString());
};

function testDurFmtFAFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "fa-IR",
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
    	second: 1
    });
    assertEquals("۱ سال ۱ ماه ۱ هفته ۱ روز ۱ ساعت ۱ دقیقه ۱ ثانیه", duration.toString());
};

function testDurFmtFAFormatLong() {
    var fmt = new DurationFmt({
    	locale: "fa-IR",
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
    	second: 1
    });
    assertEquals("۱ سال ۱ ماه ۱ هفته ۱ روز ۱ ساعت ۱ دقیقه ۱ ثانیه", duration.toString());
};

function testDurFmtFAFormatFull() {
    var fmt = new DurationFmt({
    	locale: "fa-IR",
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
    	second: 1
    });
    assertEquals("۱ سال،‏ ۱ ماه،‏ ۱ هفته،‏ ۱ روز،‏ ۱ ساعت،‏ ۱ دقیقه، و ۱ ثانیه", duration.toString());
};

//test cases for fi-FI


function testDurFmtFIFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "fi-FI",
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
    	second: 1
    });
    assertEquals("1v 1kk 1vk 1pv 1t 1min 1s", duration.toString());
};

function testDurFmtFIFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "fi-FI",
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
    	second: 1
    });
    assertEquals("1v 1kk 1vk 1pv 1t 1min 1s", duration.toString());
};

function testDurFmtFIFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "fi-FI",
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
    	second: 1
    });
    assertEquals("1v 1kk 1vk 1pv 1.01.01", duration.toString());
};

function testDurFmtFIFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "fi-FI",
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
    	second: 1
    });
    assertEquals("1 v 1 kk 1 vk 1 pv 1 t 1 min 1 s", duration.toString());
};

function testDurFmtFIFormatLong() {
    var fmt = new DurationFmt({
    	locale: "fi-FI",
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
    	second: 1
    });
    assertEquals("1 v, 1 kk, 1 vk, 1 pv, 1 t, 1 min, 1 s", duration.toString());
};

function testDurFmtFIFormatFull() {
    var fmt = new DurationFmt({
    	locale: "fi-FI",
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
    	second: 1
    });
    assertEquals("1 vuosi, 1 kuukausi, 1 viikko, 1 päivä, 1 tunti, 1 minuutti ja 1 sekunti", duration.toString());
};

//test cases for fr-CA

function testDurFmtFRCAFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "fr-CA",
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
    	second: 1
    });
    assertEquals("1a 1mo 1sm 1j 1h 1m 1s", duration.toString());
};

function testDurFmtFRCAFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "fr-CA",
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
    	second: 1
    });
    assertEquals("1a 1mo 1sm 1j 1h 1m 1s", duration.toString());
};

function testDurFmtFRCAFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "fr-CA",
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
    	second: 1
    });
    assertEquals("1a 1mo 1sm 1j 01:01:01", duration.toString());
};

function testDurFmtFRCAFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "fr-CA",
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
    	second: 1
    });
    assertEquals("1 an 1 mo 1 sm 1 jr 1 hr 1 mn 1 se", duration.toString());
};

function testDurFmtFRCAFormatLong() {
    var fmt = new DurationFmt({
    	locale: "fr-CA",
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
    	second: 1
    });
    assertEquals("1 an 1 mois 1 sem 1 jr 1 hr 1 min 1 sec", duration.toString());
};

function testDurFmtFRCAFormatFull() {
    var fmt = new DurationFmt({
    	locale: "fr-CA",
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
    	second: 1
    });
    assertEquals("1 an, 1 mois, 1 semaine, 1 jour, 1 heure, 1 minute et 1 seconde", duration.toString());
};

//test cases for ga-IE

function testDurFmtGAFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "ga-IE",
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
    	second: 1
    });
    assertEquals("1y 1m 1w 1d 1h 1m 1s", duration.toString());
};

function testDurFmtGAFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "ga-IE",
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
    	second: 1
    });
    assertEquals("1y 1m 1w 1d 1h 1m 1s", duration.toString());
};

function testDurFmtGAFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "ga-IE",
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
    	second: 1
    });
    assertEquals("1y 1m 1w 1d 01:01:01", duration.toString());
};

function testDurFmtGAFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "ga-IE",
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
    	second: 1
    });
    assertEquals("1 yr 1 mo 1 wk 1 dy 1 hr 1 mi 1 se", duration.toString());
};

function testDurFmtGAFormatLong() {
    var fmt = new DurationFmt({
    	locale: "ga-IE",
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
    	second: 1
    });
    assertEquals("1 y 1 m 1 w 1 d 1 h 1 min 1 s", duration.toString());
};

function testDurFmtGAFormatFull() {
    var fmt = new DurationFmt({
    	locale: "ga-IE",
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
    	second: 1
    });
    assertEquals("1 y, 1 m, 1 w, 1 d, 1 h, 1 min, 1 s", duration.toString());
};

//test cases for hebrew

function testDurFmtHEFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "he-IL",
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
    	second: 1
    });
    assertEquals("1ש 1ח 1ש ‏1 יום 1ש 1ד 1ש", duration.toString());
};

function testDurFmtHEFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "he-IL",
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
    	second: 1
    });
    assertEquals("1ש 1ח 1ש ‏1 יום 1ש 1ד 1ש", duration.toString());
};

function testDurFmtHEFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "he-IL",
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
    	second: 1
    });
    assertEquals("1ש 1ח 1ש ‏1 יום ‏01:01:01", duration.toString());
};

function testDurFmtHEFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "he-IL",
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
    	second: 1
    });
    assertEquals("1 שנה 1 חו 1 שב 1 יום 1 שעה 1 דק׳ 1 שנ׳", duration.toString());
};

function testDurFmtHEFormatLong() {
    var fmt = new DurationFmt({
    	locale: "he-IL",
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
    	second: 1
    });
    assertEquals("1 שנה 1 חודש 1 שבוע ‏1 יום 1 שעה 1 דקה 1 שניה", duration.toString());
};

function testDurFmtHEFormatFull() {
    var fmt = new DurationFmt({
    	locale: "he-IL",
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
    	second: 1
    });
    assertEquals("1 שנה, 1 חודש, 1 שבוע, ‏1 יום, 1 שעה, 1 דקה ו1 שניה", duration.toString());
};


//test cases for hi-IN

function testDurFmtHIFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "hi-IN",
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
    	second: 1
    });
    assertEquals("1स 1म 1स 1द 1घ 1म 1स", duration.toString());
};

function testDurFmtHIFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "hi-IN",
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
    	second: 1
    });
    assertEquals("1स 1म 1स 1द 1घ 1म 1स", duration.toString());
};

function testDurFmtHIFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "hi-IN",
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
    	second: 1
    });
    assertEquals("1स 1म 1स 1द 1:01:01", duration.toString());
};

function testDurFmtHIFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "hi-IN",
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
    	second: 1
    });
    assertEquals("1 साल 1 मह 1 सप 1 दि. 1 घं. 1 मि 1 से", duration.toString());
};

function testDurFmtHIFormatLong() {
    var fmt = new DurationFmt({
    	locale: "hi-IN",
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
    	second: 1
    });
    assertEquals("1 साल 1 मही 1 सप् 1 दिन 1 घंटा 1 मिनट 1 सेक", duration.toString());
};

function testDurFmtHIFormatFull() {
    var fmt = new DurationFmt({
    	locale: "hi-IN",
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
    	second: 1
    });
    assertEquals("1 साल, 1 महीना, 1 सप्ताह, 1 दिन, 1 घंटा, 1 मिनट, और 1 सेकंड", duration.toString());
};


//test cases for marathi mr-IN

function testDurFmtMRFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "mr-IN",
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
    	second: 1
    });
    assertEquals("१व १म १आ १द १त १म १स", duration.toString());
};



function testDurFmtMRFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "mr-IN",
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
    	second: 1
    });
    assertEquals("१व १म १आ १द १त १म १स", duration.toString());
};

function testDurFmtMRFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "mr-IN",
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
    	second: 1
    });
    assertEquals("१व १म १आ १द १:०१:०१", duration.toString());
};

function testDurFmtMRFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "mr-IN",
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
    	second: 1
    });
    assertEquals("१ वर १ मह १ आठ १ दि १ तास १ मि १ से", duration.toString());
};

function testDurFmtMRFormatLong() {
    var fmt = new DurationFmt({
    	locale: "mr-IN",
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
    	second: 1
    });
    assertEquals("१ वर्ष १ महि १ आठव १ दिवस १ तास १ मिन १ सेक", duration.toString());
};

function testDurFmtMRFormatFull() {
    var fmt = new DurationFmt({
    	locale: "mr-IN",
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
    	second: 1
    });
    assertEquals("१ वर्ष, १ महिना, १ आठवडा, १ दिवस, १ तास, १ मिनिट आणि १ सेकंद", duration.toString());
};



//testa cases for Telugu (te-IN)

function testDurFmtTEFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "te-IN",
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
    	second: 1
    });
    assertEquals("1స 1న 1వ 1ర 1గ 1న 1స", duration.toString());
};

function testDurFmtTEFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "te-IN",
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
    	second: 1
    });
    assertEquals("1స 1న 1వ 1ర 1గ 1న 1స", duration.toString());
};

function testDurFmtTEFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "te-IN",
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
    	second: 1
    });
    assertEquals("1స 1న 1వ 1ర 1:01:01", duration.toString());
};


function testDurFmtTEFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "te-IN",
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
    	second: 1
    });
    assertEquals("1 సం 1 నెల 1 వా 1 రో 1 గంట 1 ని 1 సె", duration.toString());
};

function testDurFmtTEFormatLong() {
    var fmt = new DurationFmt({
    	locale: "te-IN",
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
    	second: 1
    });
    assertEquals("1 సంవ 1 నెల 1 వారం 1 రోజు 1 గంట 1 నిమ 1 సెక", duration.toString());
};

function testDurFmtTEFormatFull() {
    var fmt = new DurationFmt({
    	locale: "te-IN",
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
    	second: 1
    });
    assertEquals("1 సంవత్సరం, 1 నెల, 1 వారం, 1 రోజు, 1 గంట, 1 నిమిషం మరియు 1 సెకను", duration.toString());
};


//test cases for kannada(kn-IN)

function testDurFmtKNFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "kn-IN",
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
    	second: 1
    });
    assertEquals("1ವ 1ತ 1ವ 1ದ 1ಗ 1ನ 1ಸ", duration.toString());
};

function testDurFmtKNFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "kn-IN",
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
    	second: 1
    });
    assertEquals("1ವ 1ತ 1ವ 1ದ 1ಗ 1ನ 1ಸ", duration.toString());
};

function testDurFmtKNFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "kn-IN",
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
    	second: 1
    });
    assertEquals("1ವ 1ತ 1ವ 1ದ 1:01:01", duration.toString());
};

function testDurFmtKNFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "kn-IN",
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
    	second: 1
    });
    assertEquals("1 ವರ 1 ತಿ 1 ವಾ 1 ದಿನ 1 ಗಂ. 1 ನಿ 1 ಸೆ", duration.toString());
};

function testDurFmtKNFormatLong() {
    var fmt = new DurationFmt({
    	locale: "kn-IN",
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
    	second: 1
    });
    assertEquals("1 ವರ್ 1 ತಿಂ 1 ವಾರ 1 ದಿನ 1 ಗಂಟ 1 ನಿಮ 1 ಸೆಕ", duration.toString());
};

function testDurFmtKNFormatFull() {
    var fmt = new DurationFmt({
    	locale: "kn-IN",
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
    	second: 1
    });
    assertEquals("1 ವರ್ಷಗಳು, 1 ತಿಂಗಳುಗಳು, 1 ವಾರಗಳು, 1 ದಿನಗಳು, 1 ಗಂಟೆಗಳು, 1 ನಿಮಿಷಗಳು, ಮತ್ತು 1 ಸೆಕೆಂಡುಗಳು", duration.toString());
};

//test cases for tamil(ta-IN)

function testDurFmtTAFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "ta-IN",
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
    	second: 1
    });
    assertEquals("1வ 1ம 1வ 1ந 1ம 1ந 1வ", duration.toString());
};

function testDurFmtTAFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "ta-IN",
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
    	second: 1
    });
    assertEquals("1வ 1ம 1வ 1ந 1ம 1ந 1வ", duration.toString());
};

function testDurFmtTAFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "ta-IN",
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
    	second: 1
    });
    assertEquals("1வ 1ம 1வ 1ந 1:01:01", duration.toString());
};

function testDurFmtTAFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "ta-IN",
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
    	second: 1
    });
    assertEquals("1 வர 1 மா 1 வா 1 நா 1 மண 1 நி 1 வி", duration.toString());
};

function testDurFmtTAFormatLong() {
    var fmt = new DurationFmt({
    	locale: "ta-IN",
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
    	second: 1
    });
    assertEquals("1 வரு 1 மாத 1 வார 1 நாள் 1 மணி 1 நிம 1 வின", duration.toString());
};

function testDurFmtTAFormatFull() {
    var fmt = new DurationFmt({
    	locale: "ta-IN",
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
    	second: 1
    });
    assertEquals("1 வருடம், 1 மாதம், 1 வாரம், 1 நாள், 1 மணிநேரம், 1 நிமிடம் மற்றும் 1 வினாடி", duration.toString());
};

//test cases for Malaylam(ml-IN)

function testDurFmtMLFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "ml-IN",
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
    	second: 1
    });
    assertEquals("1വ 1മ 1ആ 1ദ 1മ 1മ 1സ", duration.toString());
};

function testDurFmtMLFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "ml-IN",
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
    	second: 1
    });
    assertEquals("1വ 1മ 1ആ 1ദ 1മ 1മ 1സ", duration.toString());
};

function testDurFmtMLFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "ml-IN",
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
    	second: 1
    });
    assertEquals("1വ 1മ 1ആ 1ദ 1:01:01", duration.toString());
};

function testDurFmtMLFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "ml-IN",
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
    	second: 1
    });
    assertEquals("1 വർ 1 മാ 1 ആഴ 1 ദി 1 മണ 1 മി 1 സെ", duration.toString());
};

function testDurFmtMLFormatLong() {
    var fmt = new DurationFmt({
    	locale: "ml-IN",
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
    	second: 1
    });
    assertEquals("1 വർഷം 1 മാസം 1 ആഴ്ച 1 ദിവ 1 മണി 1 മിന 1 സെക", duration.toString());
};

function testDurFmtMLFormatFull() {
    var fmt = new DurationFmt({
    	locale: "ml-IN",
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
    	second: 1
    });
    assertEquals("1 വർഷം, 1 മാസം, 1 ആഴ്ച, 1 ദിവസം, 1 മണിക്കൂർ, 1 മിനിട്ട്,  എന്നിവ1 സെക്കന്റ്", duration.toString());
};

//test cases for Gujrati(gu-IN)

function testDurFmtGUFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "gu-IN",
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
    	second: 1
    });
    assertEquals("1વ 1મ 1અ 1દ 1ક 1મ 1સ", duration.toString());
};

function testDurFmtGUFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "gu-IN",
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
    	second: 1
    });
    assertEquals("1વ 1મ 1અ 1દ 1ક 1મ 1સ", duration.toString());
};

function testDurFmtGUFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "gu-IN",
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
    	second: 1
    });
    assertEquals("1વ 1મ 1અ 1દ 1:01:01", duration.toString());
};

function testDurFmtGUFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "gu-IN",
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
    	second: 1
    });
    assertEquals("1 વર 1 મહ 1 અઠ. 1 દિ 1 કલ 1 મિ 1 સે", duration.toString());
};

function testDurFmtGUFormatLong() {
    var fmt = new DurationFmt({
    	locale: "gu-IN",
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
    	second: 1
    });
    assertEquals("1 વર્ષ 1 મહિ 1 અઠવ 1 દિવસ 1 કલાક 1 મિન 1 સેક", duration.toString());
};

function testDurFmtGUFormatFull() {
    var fmt = new DurationFmt({
    	locale: "gu-IN",
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
    	second: 1
    });
    assertEquals("1 વર્ષ, 1 મહિનો, 1 અઠવાડિયું, 1 દિવસ, 1 કલાક, 1 મિનિટ અને 1 સેકંડ", duration.toString());
};


//test cases for Bengali(bn-IN)

function testDurFmtBNFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "bn-IN",
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
    	second: 1
    });
    assertEquals("১ব ১ম ১স ১দ ১ঘ ১ম ১স", duration.toString());
};

function testDurFmtBNFormatShortDefaultStyleNative() {
    var fmt = new DurationFmt({
    	locale: "bn-IN",
    	length: "short",
    	useNative: true
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("১ব ১ম ১স ১দ ১ঘ ১ম ১স", duration.toString());
};

function testDurFmtBNFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "bn-IN",
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
    	second: 1
    });
    assertEquals("১ব ১ম ১স ১দ ১ঘ ১ম ১স", duration.toString());
};

function testDurFmtBNFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "bn-IN",
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
    	second: 1
    });
    assertEquals("১ব ১ম ১স ১দ ১:০১:০১", duration.toString());
};

function testDurFmtBNFormatShortClockNative() {
    var fmt = new DurationFmt({
    	locale: "bn-IN",
    	length: "short",
    	style: "clock",
    	useNative: true
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("১ব ১ম ১স ১দ ১:০১:০১", duration.toString());
};

function testDurFmtBNFormatShortClockWestern() {
    var fmt = new DurationFmt({
    	locale: "bn-IN",
    	length: "short",
    	style: "clock",
    	useNative: false
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1ব 1ম 1স 1দ 1:01:01", duration.toString());
};

function testDurFmtBNFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "bn-IN",
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
    	second: 1
    });
    assertEquals("১ বছর ১ মাস ১ সপ ১ দিন ১ ঘন ১ মি ১ সে", duration.toString());
};

function testDurFmtBNFormatLong() {
    var fmt = new DurationFmt({
    	locale: "bn-IN",
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
    	second: 1
    });
    assertEquals("১ বছর ১ মাস ১ সপ্ ১ দিন ১ ঘন্ ১ মিন ১ সেক", duration.toString());
};

function testDurFmtBNFormatFull() {
    var fmt = new DurationFmt({
    	locale: "bn-IN",
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
    	second: 1
    });
    assertEquals("১ বছর, ১ মাস, ১ সপ্তাহ, ১ দিন, ১ ঘন্টা, ১ মিনিট, এবং ১ সেকেন্ড", duration.toString());
};


//test cases for Assamese(as-IN)
/*
function testDurFmtASFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "as-IN",
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
    	second: 1
    });
    assertEquals("y", duration.toString());
};

function testDurFmtASFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "as-IN",
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
    	second: 1
    });
    assertEquals("y", duration.toString());
};

function testDurFmtASFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "as-IN",
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
    	second: 1
    });
    assertEquals("1வ 1ம 1வ 1ந 1:01:01", duration.toString());
};

function testDurFmtASFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "as-IN",
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
    	second: 1
    });
    assertEquals("y", duration.toString());
};

function testDurFmtASFormatLong() {
    var fmt = new DurationFmt({
    	locale: "as-IN",
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
    	second: 1
    });
    assertEquals("y", duration.toString());
};

function testDurFmtASFormatFull() {
    var fmt = new DurationFmt({
    	locale: "as-IN",
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
    	second: 1
    });
    assertEquals("y", duration.toString());
};
*/

//test cases for Punjabi(pa-IN)

function testDurFmtPAFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "pa-IN",
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
    	second: 1
    });
    assertEquals("1ਸ 1ਮ 1ਹ 1ਦਿ 1ਘੰ 1ਮਿੰ 1ਸ", duration.toString());
};

function testDurFmtPAFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "pa-IN",
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
    	second: 1
    });
    assertEquals("1ਸ 1ਮ 1ਹ 1ਦਿ 1ਘੰ 1ਮਿੰ 1ਸ", duration.toString());
};

function testDurFmtPAFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "pa-IN",
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
    	second: 1
    });
    assertEquals("1ਸ 1ਮ 1ਹ 1ਦਿ 1:01:01", duration.toString());
};

function testDurFmtPAFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "pa-IN",
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
    	second: 1
    });
    assertEquals("1 ਸਾ 1 ਮ 1 ਹਫ਼ 1 ਦਿ 1 ਘੰਟੇ 1 ਮਿੰ 1 ਸਕ", duration.toString());
};

function testDurFmtPAFormatLong() {
    var fmt = new DurationFmt({
    	locale: "pa-IN",
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
    	second: 1
    });
    assertEquals("1 ਸਾਲ 1 ਮਹੀਨੇ 1 ਹਫ਼ਤੇ 1 ਦਿਨ 1 ਘੰਟੇ 1 ਮਿੰਟ 1 ਸਕਿੰਟ", duration.toString());
};

function testDurFmtPAFormatFull() {
    var fmt = new DurationFmt({
    	locale: "pa-IN",
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
    	second: 1
    });
    assertEquals("1 ਸਾਲ, 1 ਮਹੀਨੇ, 1 ਹਫ਼ਤੇ, 1 ਦਿਨ, 1 ਘੰਟੇ, 1 ਮਿੰਟ, 1 ਸਕਿੰਟ", duration.toString());
};

//test cases for Urdu(ur-IN)

function testDurFmtURFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "ur-IN",
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
    	second: 1
    });
    assertEquals("۱س ۱م ۱ہ ۱د ۱گ ۱م ۱س", duration.toString());
};

function testDurFmtURFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "ur-IN",
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
    	second: 1
    });
    assertEquals("۱س ۱م ۱ہ ۱د ۱گ ۱م ۱س", duration.toString());
};

function testDurFmtURFormatShortTextWestern() {
    var fmt = new DurationFmt({
    	locale: "ur-IN",
    	length: "short",
    	style: "text",
    	useNative: false
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1س 1م 1ہ 1د 1گ 1م 1س", duration.toString());
};

function testDurFmtURFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "ur-IN",
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
    	second: 1
    });
    assertEquals("۱س ۱م ۱ہ ۱د ‏۱:۰۱:۰۱", duration.toString());
};

function testDurFmtURFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "ur-IN",
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
    	second: 1
    });
    assertEquals("۱ سال ۱ مہ ۱ ہف ۱ دن ۱ گھ ۱ منٹ ۱ سی", duration.toString());
};

function testDurFmtURFormatLong() {
    var fmt = new DurationFmt({
    	locale: "ur-IN",
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
    	second: 1
    });
    assertEquals("۱ سال ۱ مہی ۱ ہفتہ ۱ دن ۱ گھن ۱ منٹ ۱ سیک", duration.toString());
};

function testDurFmtURFormatFull() {
    var fmt = new DurationFmt({
    	locale: "ur-IN",
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
    	second: 1
    });
    assertEquals("۱ سال، ۱ مہینہ، ۱ ہفتہ، ۱ دن، ۱ گھنٹہ، ۱ منٹ، اور ۱ سیکنڈ", duration.toString());
};

//test cases for croation

function testDurFmtHRFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "hr-HR",
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
    	second: 1
    });
    assertEquals("1g 1m 1t 1d 1s 1m 1s", duration.toString());
};

function testDurFmtHRFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "hr-HR",
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
    	second: 1
    });
    assertEquals("1g 1m 1t 1d 1s 1m 1s", duration.toString());
};

function testDurFmtHRFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "hr-HR",
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
    	second: 1
    });
    assertEquals("1g 1m 1t 1d 01:01:01", duration.toString());
};

function testDurFmtHRFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "hr-HR",
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
    	second: 1
    });
    assertEquals("1 g. 1 mj. 1 tj. 1 dan 1 sat 1 min 1 se", duration.toString());
};

function testDurFmtHRFormatLong() {
    var fmt = new DurationFmt({
    	locale: "hr-HR",
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
    	second: 1
    });
    assertEquals("1 god 1 mje 1 tje 1 dan 1 sat 1 min 1 sek", duration.toString());
};

function testDurFmtHRFormatFull() {
    var fmt = new DurationFmt({
    	locale: "hr-HR",
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
    	second: 1
    });
    assertEquals("1 godina, 1 mjesec, 1 tjedan, 1 dan, 1 sat, 1 minuta i 1 sekunda", duration.toString());
};

//test cases for hungarian
function testDurFmtHUFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "hu-HU",
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
    	second: 1
    });
    assertEquals("1é 1h 1h 1n 1ó 1p 1m", duration.toString());
};

function testDurFmtHUFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "hu-HU",
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
    	second: 1
    });
    assertEquals("1é 1h 1h 1n 1ó 1p 1m", duration.toString());
};

function testDurFmtHUFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "hu-HU",
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
    	second: 1
    });
    assertEquals("1é 1h 1h 1n 1:01:01", duration.toString());
};

function testDurFmtHUFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "hu-HU",
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
    	second: 1
    });
    assertEquals("1 év 1 hó 1 hét 1 nap 1 óra 1 pe 1 mp", duration.toString());
};

function testDurFmtHUFormatLong() {
    var fmt = new DurationFmt({
    	locale: "hu-HU",
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
    	second: 1
    });
    assertEquals("1 év 1 hón 1 hét 1 nap 1 óra 1 perc 1 más", duration.toString());
};

function testDurFmtHUFormatFull() {
    var fmt = new DurationFmt({
    	locale: "hu-HU",
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
    	second: 1
    });
    assertEquals("1 év, 1 hónap, 1 hét, 1 nap, 1 óra, 1 perc és 1 másodperc", duration.toString());
};

//test cases for indonesia

function testDurFmtIDFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "id-ID",
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
    	second: 1
    });
    assertEquals("1t 1b 1m 1h 1j 1m 1d", duration.toString());
};

function testDurFmtIDFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "id-ID",
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
    	second: 1
    });
    assertEquals("1t 1b 1m 1h 1j 1m 1d", duration.toString());
};

function testDurFmtIDFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "id-ID",
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
    	second: 1
    });
    assertEquals("1t 1b 1m 1h 01.01.01", duration.toString());
};

function testDurFmtIDFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "id-ID",
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
    	second: 1
    });
    assertEquals("1 th 1 bl 1 mg 1 hr 1 ja 1 mn 1 dt", duration.toString());
};

function testDurFmtIDFormatLong() {
    var fmt = new DurationFmt({
    	locale: "id-ID",
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
    	second: 1
    });
    assertEquals("1 thn 1 bln 1 mggu 1 hari 1 jam 1 mnt 1 dtk", duration.toString());
};

function testDurFmtIDFormatFull() {
    var fmt = new DurationFmt({
    	locale: "id-ID",
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
    	second: 1
    });
    assertEquals("1 tahun, 1 bulan, 1 minggu, 1 hari, 1 jam, 1 menit, dan 1 detik", duration.toString());
};

//test cases for Italy

function testDurFmtITFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "it-IT",
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
    	second: 1
    });
    assertEquals("1a 1me 1st 1g 1o 1m 1s", duration.toString());
};

function testDurFmtITFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "it-IT",
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
    	second: 1
    });
    assertEquals("1a 1me 1st 1g 1o 1m 1s", duration.toString());
};

function testDurFmtITFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "it-IT",
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
    	second: 1
    });
    assertEquals("1a 1me 1st 1g 01:01:01", duration.toString());
};

function testDurFmtITFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "it-IT",
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
    	second: 1
    });
    assertEquals("1 an 1 me 1 set 1 g 1 h 1 mn 1 se", duration.toString());
};

function testDurFmtITFormatLong() {
    var fmt = new DurationFmt({
    	locale: "it-IT",
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
    	second: 1
    });
    assertEquals("1 anno 1 mese 1 sett 1 g 1 h 1 min 1 sec", duration.toString());
};

function testDurFmtITFormatFull() {
    var fmt = new DurationFmt({
    	locale: "it-IT",
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
    	second: 1
    });
    assertEquals("1 anno, 1 mese, 1 settimana, 1 giorno, 1 ora, 1 minuto, e 1 secondo", duration.toString());
};

//test cases for japanese

function testDurFmtJAFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "ja-JP",
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
    assertEquals("1年 1ヶ月 1週間 1日 1時間 1分 1秒 1ミリ秒", duration.toString());
};

function testDurFmtJAFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "ja-JP",
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
    assertEquals("1年 1ヶ月 1週間 1日 1時間 1分 1秒 1ミリ秒", duration.toString());
};

function testDurFmtJAFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "ja-JP",
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
    assertEquals("1年 1ヶ月 1週間 1日 1:01:01", duration.toString());
};

function testDurFmtJAFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "ja-JP",
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
    assertEquals("1年 1ヶ月 1週間 1日 1時間 1分 1秒 1ミリ秒", duration.toString());
};

function testDurFmtJAFormatLong() {
    var fmt = new DurationFmt({
    	locale: "ja-JP",
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
    assertEquals("1年、1ヶ月、1週間、1日、1時間、1分、1秒、1ミリ秒", duration.toString());
};

function testDurFmtJAFormatFull() {
    var fmt = new DurationFmt({
    	locale: "ja-JP",
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
    assertEquals("1年、1ヶ月、1週間、1日、1時間、1分、1秒、1ミリ秒", duration.toString());
};


//test cases for kk-Cyrl-KZ

function testDurFmtKKFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "kk-Cyrl-KZ",
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
    	second: 1
    });
    assertEquals("1ж 1а 1а 1т 1с 1м 1с", duration.toString());
};

function testDurFmtKKFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "kk-Cyrl-KZ",
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
    	second: 1
    });
    assertEquals("1ж 1а 1а 1т 1с 1м 1с", duration.toString());
};

function testDurFmtKKFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "kk-Cyrl-KZ",
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
    	second: 1
    });
    assertEquals("1ж 1а 1а 1т 01:01:01", duration.toString());
};


function testDurFmtKKFormatLong() {
    var fmt = new DurationFmt({
    	locale: "kk-Cyrl-KZ",
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
    	second: 1
    });
    assertEquals("1 жыл 1 ай 1 апта 1 тәу 1 сағ 1 мин 1 сек", duration.toString());
};

function testDurFmtKKFormatFull() {
    var fmt = new DurationFmt({
    	locale: "kk-Cyrl-KZ",
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
    	second: 1
    });
    assertEquals("1 жыл, 1 ай, 1 апта, 1 тәулік, 1 сағат, 1 минут, 1 секунд", duration.toString());
};


//test cases for ko-KR

function testDurFmtKOFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "ko-KR",
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
    assertEquals("1년 1개월 1주 1일 1시 1분 1초 1밀리초", duration.toString());
};

function testDurFmtKOFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "ko-KR",
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
    assertEquals("1년 1개월 1주 1일 1시 1분 1초 1밀리초", duration.toString());
};

function testDurFmtKOFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "ko-KR",
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
    assertEquals("1년 1개월 1주 1일 1:01:01", duration.toString());
};

function testDurFmtKOFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "ko-KR",
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
    assertEquals("1년 1개월 1주 1일 1시간 1분 1초 1밀리초", duration.toString());
};

function testDurFmtKOFormatLong() {
    var fmt = new DurationFmt({
    	locale: "ko-KR",
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
    assertEquals("1년, 1개월, 1주, 1일, 1시간, 1분, 1초, 1밀리초", duration.toString());
};

function testDurFmtKOFormatFull() {
    var fmt = new DurationFmt({
    	locale: "ko-KR",
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
    assertEquals("1년, 1개월, 1주, 1일, 1시간, 1분, 1초 및 1밀리초", duration.toString());
};

function testDurFmtKUFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "ku-Arab-IQ",
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
    	second: 1
    });
    assertEquals("1س 1م 1ه 1ر 1ک 1خ 1چ", duration.toString());
};

function testDurFmtKUFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "ku-Arab-IQ",
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
    	second: 1
    });
    assertEquals("1س 1م 1ه 1ر 1ک 1خ 1چ", duration.toString());
};

function testDurFmtKUFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "ku-Arab-IQ",
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
    	second: 1
    });
    assertEquals("1س 1م 1ه 1ر 01:01:01", duration.toString());
};

function testDurFmtKUFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "ku-Arab-IQ",
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
    	second: 1
    });
    assertEquals("1 سا 1 ما 1 هە 1 رۆ 1 کات 1 خو 1 چر", duration.toString());
};

function testDurFmtKUFormatLong() {
    var fmt = new DurationFmt({
    	locale: "ku-Arab-IQ",
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
    	second: 1
    });
    assertEquals("1 ساڵ 1 مانگ 1 هەفتە 1 رۆژ 1 کاتژ 1 خول 1 چرک", duration.toString());
};

function testDurFmtKUFormatFull() {
    var fmt = new DurationFmt({
    	locale: "ku-Arab-IQ",
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
    	second: 1
    });
    assertEquals("1 ساڵ, 1 مانگ, 1 هەفتە, 1 رۆژ, 1 کاتژمێر, 1 خولەک,  1 چرکە", duration.toString());
};

//test cases for lt-LT

function testDurFmtLTFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "lt-LT",
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
    	second: 1
    });
    assertEquals("1m 1m 1s 1d 1v 1m 1s", duration.toString());
};

function testDurFmtLTFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "lt-LT",
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
    	second: 1
    });
    assertEquals("1m 1m 1s 1d 1v 1m 1s", duration.toString());
};

function testDurFmtLTFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "lt-LT",
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
    	second: 1
    });
    assertEquals("1m 1m 1s 1d 01:01:01", duration.toString());
};

function testDurFmtLTFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "lt-LT",
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
    	second: 1
    });
    assertEquals("1 m. 1 mė 1 sa 1 d. 1 va 1 mi 1 se", duration.toString());
};

function testDurFmtLTFormatLong() {
    var fmt = new DurationFmt({
    	locale: "lt-LT",
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
    	second: 1
    });
    assertEquals("1 met 1 mėn 1 sav 1 die 1 val 1 min 1 sek", duration.toString());
};

function testDurFmtLTFormatFull() {
    var fmt = new DurationFmt({
    	locale: "lt-LT",
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
    	second: 1
    });
    assertEquals("1 metai, 1 mėnuo, 1 savaitė, 1 diena, 1 valanda, 1 minutė ir 1 sekundė", duration.toString());
};

//test cases for lv-LV

function testDurFmtLVFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "lv-LV",
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
    	second: 1
    });
    assertEquals("1g 1m 1n 1d 1s 1m 1s", duration.toString());
};

function testDurFmtLVFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "lv-LV",
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
    	second: 1
    });
    assertEquals("1g 1m 1n 1d 1s 1m 1s", duration.toString());
};

function testDurFmtLVFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "lv-LV",
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
    	second: 1
    });
    assertEquals("1g 1m 1n 1d 01:01:01", duration.toString());
};

function testDurFmtLVFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "lv-LV",
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
    	second: 1
    });
    assertEquals("1 g. 1 mē 1 ne 1 di 1 st 1 min 1 se", duration.toString());
};

function testDurFmtLVFormatLong() {
    var fmt = new DurationFmt({
    	locale: "lv-LV",
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
    	second: 1
    });
    assertEquals("1 gads 1 mēn 1 ned 1 die 1 stu 1 min 1 sek", duration.toString());
};

function testDurFmtLVFormatFull() {
    var fmt = new DurationFmt({
    	locale: "lv-LV",
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
    	second: 1
    });
    assertEquals("1 gads, 1 mēnesis, 1 nedēļa, 1 diennakts, 1 stunda, 1 minūte un 1 sekunde", duration.toString());
};

//test cases for mk-MK

function testDurFmtMKFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "mk-MK",
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
    	second: 1
    });
    assertEquals("1г 1м 1н 1д 1ч 1м 1с", duration.toString());
};

function testDurFmtMKFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "mk-MK",
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
    	second: 1
    });
    assertEquals("1г 1м 1н 1д 1ч 1м 1с", duration.toString());
};

function testDurFmtMKFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "mk-MK",
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
    	second: 1
    });
    assertEquals("1г 1м 1н 1д 01:01:01", duration.toString());
};

function testDurFmtMKFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "mk-MK",
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
    	second: 1
    });
    assertEquals("1 год 1 мсц 1 нед 1 ден 1 час 1 мин 1 сек", duration.toString());
};

function testDurFmtMKFormatLong() {
    var fmt = new DurationFmt({
    	locale: "mk-MK",
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
    	second: 1
    });
    assertEquals("1 год 1 мес 1 нед 1 ден 1 час 1 мин 1 сек", duration.toString());
};

function testDurFmtMKFormatFull() {
    var fmt = new DurationFmt({
    	locale: "mk-MK",
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
    	second: 1
    });
    assertEquals("1 година, 1 месец, 1 недела, 1 ден, 1 час, 1 минута, 1 секунда", duration.toString());
};


//test cases for mn-Cyrl-MN

function testDurFmtMNFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "mn-Cyrl-MN",
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
    	second: 1
    });
    assertEquals("1ж 1с 1w 1х 1ц 1м 1с", duration.toString());
};

function testDurFmtMNFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "mn-Cyrl-MN",
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
    	second: 1
    });
    assertEquals("1ж 1с 1w 1х 1ц 1м 1с", duration.toString());
};

function testDurFmtMNFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "mn-Cyrl-MN",
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
    	second: 1
    });
    assertEquals("1ж 1с 1w 1х 01:01:01", duration.toString());
};

function testDurFmtMNFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "mn-Cyrl-MN",
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
    	second: 1
    });
    assertEquals("1 жи 1 са 1 до 1 хо 1 ца 1 ми 1 се", duration.toString());
};

function testDurFmtMNFormatLong() {
    var fmt = new DurationFmt({
    	locale: "mn-Cyrl-MN",
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
    	second: 1
    });
    assertEquals("1 жил 1 сар 1 дол 1 хон 1 цаг 1 мин 1 сек", duration.toString());
};

function testDurFmtMNFormatFull() {
    var fmt = new DurationFmt({
    	locale: "mn-Cyrl-MN",
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
    	second: 1
    });
    assertEquals("1 жил, 1 сар, 1 долоо хоног, 1 хоног, 1 цаг, 1 минут,  1 секунд", duration.toString());
};

//test cases for ms-MY

function testDurFmtMSFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "ms-MY",
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
    	second: 1
    });
    assertEquals("1t 1b 1m 1h 1j 1m 1s", duration.toString());
};

function testDurFmtMSFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "ms-MY",
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
    	second: 1
    });
    assertEquals("1t 1b 1m 1h 1j 1m 1s", duration.toString());
};

function testDurFmtMSFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "ms-MY",
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
    	second: 1
    });
    assertEquals("1t 1b 1m 1h 1:01:01", duration.toString());
};

function testDurFmtMSFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "ms-MY",
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
    	second: 1
    });
    assertEquals("1 thn 1 bu 1 mi 1 ha 1 jam 1 min 1 sa", duration.toString());
};

function testDurFmtMSFormatLong() {
    var fmt = new DurationFmt({
    	locale: "ms-MY",
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
    	second: 1
    });
    assertEquals("1 tah 1 bul 1 min 1 hari 1 jam 1 min 1 saat", duration.toString());
};

function testDurFmtMSFormatFull() {
    var fmt = new DurationFmt({
    	locale: "ms-MY",
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
    	second: 1
    });
    assertEquals("1 tahun, 1 bulan, 1 minggu, 1 hari, 1 jam, 1 minit, dan 1 saat", duration.toString());
};


//test cases for nb-NO


function testDurFmtNBFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "nb-NO",
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
    	second: 1
    });
    assertEquals("1å 1m 1u 1d 1t 1m 1s", duration.toString());
};

function testDurFmtNBFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "nb-NO",
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
    	second: 1
    });
    assertEquals("1å 1m 1u 1d 1t 1m 1s", duration.toString());
};

function testDurFmtNBFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "nb-NO",
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
    	second: 1
    });
    assertEquals("1å 1m 1u 1d 01.01.01", duration.toString());
};

function testDurFmtNBFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "nb-NO",
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
    	second: 1
    });
    assertEquals("1 år 1 md. 1 uke 1 dag 1 ti 1 min 1 sek", duration.toString());
};

function testDurFmtNBFormatLong() {
    var fmt = new DurationFmt({
    	locale: "nb-NO",
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
    	second: 1
    });
    assertEquals("1 år 1 mån 1 uke 1 dag 1 time 1 min 1 sek", duration.toString());
};

function testDurFmtNBFormatFull() {
    var fmt = new DurationFmt({
    	locale: "nb-NO",
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
    	second: 1
    });
    assertEquals("1 år, 1 måned, 1 uke, 1 dag, 1 time, 1 minutt og 1 sekund", duration.toString());
};

//test cases for nl-NL

function testDurFmtNLFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "nl-NL",
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
    	second: 1
    });
    assertEquals("1j 1m 1w 1d 1u 1m 1s", duration.toString());
};

function testDurFmtNLFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "nl-NL",
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
    	second: 1
    });
    assertEquals("1j 1m 1w 1d 1u 1m 1s", duration.toString());
};

function testDurFmtNLFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "nl-NL",
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
    	second: 1
    });
    assertEquals("1j 1m 1w 1d 01:01:01", duration.toString());
};

function testDurFmtNLFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "nl-NL",
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
    	second: 1
    });
    assertEquals("1 jr 1 mn 1 wk 1 da 1 u 1 mi 1 se", duration.toString());
};

function testDurFmtNLFormatLong() {
    var fmt = new DurationFmt({
    	locale: "nl-NL",
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
    	second: 1
    });
    assertEquals("1 jr 1 mnd 1 wk 1 dag 1 uur 1 min 1 sec", duration.toString());
};

function testDurFmtNLFormatFull() {
    var fmt = new DurationFmt({
    	locale: "nl-NL",
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
    	second: 1
    });
    assertEquals("1 jaar, 1 maand, 1 week, 1 dag, 1 uur, 1 minuut en 1 seconde", duration.toString());
};

//test cases for pl-PL

function testDurFmtPLFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "pl-PL",
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
    	second: 1
    });
    assertEquals("1r 1m 1t 1d 1g 1m 1s", duration.toString());
};

function testDurFmtPLFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "pl-PL",
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
    	second: 1
    });
    assertEquals("1r 1m 1t 1d 1g 1m 1s", duration.toString());
};

function testDurFmtPLFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "pl-PL",
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
    	second: 1
    });
    assertEquals("1r 1m 1t 1d 01:01:01", duration.toString());
};

function testDurFmtPLFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "pl-PL",
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
    	second: 1
    });
    assertEquals("1 rok 1 mi 1 ty 1 dz 1 go 1 mi 1 se", duration.toString());
};

function testDurFmtPLFormatLong() {
    var fmt = new DurationFmt({
    	locale: "pl-PL",
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
    	second: 1
    });
    assertEquals("1 rok 1 mie 1 tyd 1 dzi 1 god 1 min 1 sek", duration.toString());
};

function testDurFmtPLFormatFull() {
    var fmt = new DurationFmt({
    	locale: "pl-PL",
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
    	second: 1
    });
    assertEquals("1 rok, 1 miesiąc, 1 tydzień, 1 dzień, 1 godzina, 1 minuta i 1 sekunda", duration.toString());
};




//test cases for pt-BR

function testDurFmtPTFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "pt-BR",
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
    	second: 1
    });
    assertEquals("1a 1me 1sm 1d 1h 1m 1s", duration.toString());
};

function testDurFmtPTFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "pt-BR",
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
    	second: 1
    });
    assertEquals("1a 1me 1sm 1d 1h 1m 1s", duration.toString());
};

function testDurFmtPTFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "pt-BR",
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
    	second: 1
    });
    assertEquals("1a 1me 1sm 1d 01:01:01", duration.toString());
};

function testDurFmtPTFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "pt-BR",
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
    	second: 1
    });
    assertEquals("1 an 1 mê 1 sm 1 di 1 hr 1 mn 1 sg", duration.toString());
};

function testDurFmtPTFormatLong() {
    var fmt = new DurationFmt({
    	locale: "pt-BR",
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
    	second: 1
    });
    assertEquals("1 ano 1 mês 1 sem 1 dia 1 hor 1 min 1 seg", duration.toString());
};

function testDurFmtPTFormatFull() {
    var fmt = new DurationFmt({
    	locale: "pt-BR",
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
    	second: 1
    });
    assertEquals("1 ano, 1 mês, 1 semana, 1 dia, 1 hora, 1 minuto e 1 segundo", duration.toString());
};

//test cases for ro-RO

function testDurFmtROFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "ro-RO",
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
    	second: 1
    });
    assertEquals("1a 1l 1s 1z 1o 1m 1s", duration.toString());
};

function testDurFmtROFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "ro-RO",
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
    	second: 1
    });
    assertEquals("1a 1l 1s 1z 1o 1m 1s", duration.toString());
};

function testDurFmtROFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "ro-RO",
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
    	second: 1
    });
    assertEquals("1a 1l 1s 1z 01:01:01", duration.toString());
};

function testDurFmtROFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "ro-RO",
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
    	second: 1
    });
    assertEquals("1 an 1 lu 1 să 1 zi 1 oră 1 mi 1 se", duration.toString());
};

function testDurFmtROFormatLong() {
    var fmt = new DurationFmt({
    	locale: "ro-RO",
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
    	second: 1
    });
    assertEquals("1 an 1 lună 1 săp 1 zi 1 oră 1 min 1 sec", duration.toString());
};

function testDurFmtROFormatFull() {
    var fmt = new DurationFmt({
    	locale: "ro-RO",
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
    	second: 1
    });
    assertEquals("1 an, 1 lună, 1 săptămână, 1 zi, 1 oră, 1 minut şi 1 secundă", duration.toString());
};

//test cases for ru-RU

function testDurFmtRUFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "ru-RU",
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
    	second: 1
    });
    assertEquals("1г 1м 1н 1д 1ч 1м 1с", duration.toString());
};

function testDurFmtRUFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "ru-RU",
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
    	second: 1
    });
    assertEquals("1г 1м 1н 1д 1ч 1м 1с", duration.toString());
};

function testDurFmtRUFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "ru-RU",
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
    	second: 1
    });
    assertEquals("1г 1м 1н 1д 1:01:01", duration.toString());
};

function testDurFmtRUFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "ru-RU",
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
    	second: 1
    });
    assertEquals("1 г 1 ме 1 не 1 дн 1 ч 1 ми 1 се", duration.toString());
};

function testDurFmtRUFormatLong() {
    var fmt = new DurationFmt({
    	locale: "ru-RU",
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
    	second: 1
    });
    assertEquals("1 год 1 мес 1 нед 1 день 1 час 1 мин 1 сек", duration.toString());
};

function testDurFmtRUFormatFull() {
    var fmt = new DurationFmt({
    	locale: "ru-RU",
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
    	second: 1
    });
    assertEquals("1 год, 1 месяц, 1 неделя, 1 день, 1 час, 1 минута и 1 секунда", duration.toString());
};


//test cases for sk-SK

function testDurFmtSKFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "sk-SK",
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
    	second: 1
    });
    assertEquals("1r 1m 1t 1d 1h 1m 1s", duration.toString());
};

function testDurFmtSKFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "sk-SK",
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
    	second: 1
    });
    assertEquals("1r 1m 1t 1d 1h 1m 1s", duration.toString());
};

function testDurFmtSKFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "sk-SK",
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
    	second: 1
    });
    assertEquals("1r 1m 1t 1d 1:01:01", duration.toString());
};

function testDurFmtSKFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "sk-SK",
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
    	second: 1
    });
    assertEquals("1 r. 1 me 1 tý 1 d. 1 ho 1 min 1 se", duration.toString());
};

function testDurFmtSKFormatLong() {
    var fmt = new DurationFmt({
    	locale: "sk-SK",
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
    	second: 1
    });
    assertEquals("1 rok 1 mes 1 týž 1 deň 1 hod 1 min 1 sek", duration.toString());
};

function testDurFmtSKFormatFull() {
    var fmt = new DurationFmt({
    	locale: "sk-SK",
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
    	second: 1
    });
    assertEquals("1 rok, 1 mesiac, 1 týždeň, 1 deň, 1 hodina, 1 minúta a 1 sekunda", duration.toString());
};

//test cases for sq-AL

function testDurFmtSQFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "sq-AL",
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
    	second: 1
    });
    assertEquals("1v 1m 1j 1d 1o 1m 1s", duration.toString());
};

function testDurFmtSQFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "sq-AL",
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
    	second: 1
    });
    assertEquals("1v 1m 1j 1d 1o 1m 1s", duration.toString());
};

function testDurFmtSQFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "sq-AL",
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
    	second: 1
    });
    assertEquals("1v 1m 1j 1d 01:01:01", duration.toString());
};

function testDurFmtSQFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "sq-AL",
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
    	second: 1
    });
    assertEquals("1 yr 1 mo 1 wk 1 dy 1 hr 1 mi 1 se", duration.toString());
};

function testDurFmtSQFormatLong() {
    var fmt = new DurationFmt({
    	locale: "sq-AL",
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
    	second: 1
    });
    assertEquals("1 vit 1 muaj 1 javë 1 ditë 1 orë 1 min 1 sek", duration.toString());
};

function testDurFmtSQFormatFull() {
    var fmt = new DurationFmt({
    	locale: "sq-AL",
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
    	second: 1
    });
    assertEquals("1 vit, 1 muaj, 1 javë, 1 ditë, 1 orë, 1 minutë, 1 sekondë", duration.toString());
};


//test cases for sr-Latn-RS

function testDurFmtSRFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "sr-Latn-RS",
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
    	second: 1
    });
    assertEquals("1g 1m 1n 1d 1s 1m 1s", duration.toString());
};

function testDurFmtSRFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "sr-Latn-RS",
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
    	second: 1
    });
    assertEquals("1g 1m 1n 1d 1s 1m 1s", duration.toString());
};

function testDurFmtSRFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "sr-Latn-RS",
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
    	second: 1
    });
    assertEquals("1g 1m 1n 1d 01.01.01", duration.toString());
};


function testDurFmtSRFormatLong() {
    var fmt = new DurationFmt({
    	locale: "sr-Latn-RS",
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
    	second: 1
    });
    assertEquals("1 god 1 mes 1 ned 1 dan 1 sat 1 min 1 sek", duration.toString());
};

function testDurFmtSRFormatFull() {
    var fmt = new DurationFmt({
    	locale: "sr-Latn-RS",
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
    	second: 1
    });
    assertEquals("1 godina, 1 mesec, 1 nedelja, 1 dan, 1 sat, 1 minut i 1 sekunda", duration.toString());
};

//test cases for th-TH

function testDurFmtTHFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "th-TH",
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
    	second: 1
    });
    assertEquals("1ป 1เ 1ส 1ว 1ช 1น 1ว", duration.toString());
};

function testDurFmtTHFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "th-TH",
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
    	second: 1
    });
    assertEquals("1ป 1เ 1ส 1ว 1ช 1น 1ว", duration.toString());
};

function testDurFmtTHFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "th-TH",
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
    	second: 1
    });
    assertEquals("1ป 1เ 1ส 1ว 01:01:01", duration.toString());
};

function testDurFmtTHFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "th-TH",
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
    	second: 1
    });
    assertEquals("1 ปี 1 เด 1 สั 1 วัน 1 ชั 1 นา 1 วิ", duration.toString());
};

function testDurFmtTHFormatLong() {
    var fmt = new DurationFmt({
    	locale: "th-TH",
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
    	second: 1
    });
    assertEquals("1 ปี 1 เดื 1 สัป 1 วัน 1 ชั่ 1 นาที 1 วิน", duration.toString());
};

function testDurFmtTHFormatFull() {
    var fmt = new DurationFmt({
    	locale: "th-TH",
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
    	second: 1
    });
    assertEquals("1 ปี 1 เดือน 1 สัปดาห์ 1 วัน 1 ชั่วโมง 1 นาที และ1 วินาที", duration.toString());
};

//test cases for uk-UA

function testDurFmtUKUAFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "uk-UA",
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
    	second: 1
    });
    assertEquals("1р 1м 1т 1д 1г 1х 1с", duration.toString());
};

function testDurFmtUKUAFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "uk-UA",
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
    	second: 1
    });
    assertEquals("1р 1м 1т 1д 1г 1х 1с", duration.toString());
};

function testDurFmtUKUAFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "uk-UA",
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
    	second: 1
    });
    assertEquals("1р 1м 1т 1д 01:01:01", duration.toString());
};

function testDurFmtUKUAFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "uk-UA",
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
    	second: 1
    });
    assertEquals("1 р. 1 мі 1 ти 1 де 1 го 1 хв. 1 се", duration.toString());
};

function testDurFmtUKUAFormatLong() {
    var fmt = new DurationFmt({
    	locale: "uk-UA",
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
    	second: 1
    });
    assertEquals("1 рік 1 міс 1 тиж 1 день 1 год 1 хви 1 сек", duration.toString());
};

function testDurFmtUKUAFormatFull() {
    var fmt = new DurationFmt({
    	locale: "uk-UA",
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
    	second: 1
    });
    assertEquals("1 рік, 1 місяць, 1 тиждень, 1 день, 1 година, 1 хвилина та 1 секунда", duration.toString());
};

//test cases for uz-Cyrl-UZ

function testDurFmtUZFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "uz-Cyrl-UZ",
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
    	second: 1
    });
    assertEquals("1у 1о 1х 1к 1со 1д 1с", duration.toString());
};

function testDurFmtUZFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "uz-Cyrl-UZ",
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
    	second: 1
    });
    assertEquals("1у 1о 1х 1к 1со 1д 1с", duration.toString());
};

function testDurFmtUZFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "uz-Cyrl-UZ",
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
    	second: 1
    });
    assertEquals("1у 1о 1х 1к 01:01:01", duration.toString());
};

function testDurFmtUZFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "uz-Cyrl-UZ",
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
    	second: 1
    });
    assertEquals("1 уи 1 оы 1 ха 1 ку 1 со 1 да 1 се", duration.toString());
};

function testDurFmtUZFormatLong() {
    var fmt = new DurationFmt({
    	locale: "uz-Cyrl-UZ",
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
    	second: 1
    });
    assertEquals("1 уил 1 оы 1 хаф 1 кун 1 соа 1 дак 1 сек", duration.toString());
};

function testDurFmtUZFormatFull() {
    var fmt = new DurationFmt({
    	locale: "uz-Cyrl-UZ",
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
    	second: 1
    });
    assertEquals("1 уил, 1 бир оы, 1 хафта, 1 кун, 1 соат, 1 дакика, 1 секунд", duration.toString());
};

//test cases for uz-Latn-UZ

function testDurFmtUZLATNFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "uz-Latn-UZ",
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
    	second: 1
    });
    assertEquals("1y 1o 1h 1k 1so 1d 1s", duration.toString());
};

function testDurFmtUZLATNFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "uz-Latn-UZ",
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
    	second: 1
    });
    assertEquals("1y 1o 1h 1k 1so 1d 1s", duration.toString());
};

function testDurFmtUZLATNFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "uz-Latn-UZ",
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
    	second: 1
    });
    assertEquals("1y 1o 1h 1k 01:01:01", duration.toString());
};

function testDurFmtUZLATNFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "uz-Latn-UZ",
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
    	second: 1
    });
    assertEquals("1 yi 1 oy 1 ha 1 ku 1 so 1 da 1 se", duration.toString());
};

function testDurFmtUZLATNFormatLong() {
    var fmt = new DurationFmt({
    	locale: "uz-Latn-UZ",
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
    	second: 1
    });
    assertEquals("1 yil 1 oy 1 haf 1 kun 1 soa 1 daq 1 sek", duration.toString());
};

function testDurFmtUZLATNFormatFull() {
    var fmt = new DurationFmt({
    	locale: "uz-Latn-UZ",
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
    	second: 1
    });
    assertEquals("1 yil, 1 bir oy, 1 hafta, 1 kun, 1 soat, 1 daqiqa, 1 sekund", duration.toString());
};

//test cases for vietnemese

function testDurFmtVIFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "vi-VN",
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
    	second: 1
    });
    assertEquals("1n 1t 1t 1n 1g 1p 1g", duration.toString());
};

function testDurFmtVIFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "vi-VN",
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
    	second: 1
    });
    assertEquals("1n 1t 1t 1n 1g 1p 1g", duration.toString());
};

function testDurFmtVIFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "vi-VN",
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
    	second: 1
    });
    assertEquals("1n 1t 1t 1n 01:01:01", duration.toString());
};

function testDurFmtVIFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "vi-VN",
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
    	second: 1
    });
    assertEquals("1 năm 1 th 1 tu 1 ng 1 giờ 1 ph 1 gi", duration.toString());
};

function testDurFmtVIFormatLong() {
    var fmt = new DurationFmt({
    	locale: "vi-VN",
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
    	second: 1
    });
    assertEquals("1 năm, 1 thá, 1 tuần, 1 ngày, 1 giờ, 1 phút, 1 giây", duration.toString());
};

function testDurFmtVIFormatFull() {
    var fmt = new DurationFmt({
    	locale: "vi-VN",
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
    	second: 1
    });
    assertEquals("1 năm, 1 tháng, 1 tuần, 1 ngày, 1 giờ, 1 phút và 1 giây", duration.toString());
};

//test cases for zh-Hant-TW

function testDurFmtZHFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "zh-Hant-TW",
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
    	second: 1
    });
    assertEquals("1年 1個月 1週 1天 1小時 1分鐘 1秒", duration.toString());
};

function testDurFmtZHFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "zh-Hant-TW",
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
    	second: 1
    });
    assertEquals("1年 1個月 1週 1天 1小時 1分鐘 1秒", duration.toString());
};

function testDurFmtZHFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "zh-Hant-TW",
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
    	second: 1
    });
    assertEquals("1年 1個月 1週 1天 1:01:01", duration.toString());
};

function testDurFmtZHFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "zh-Hant-TW",
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
    	second: 1
    });
    assertEquals("1年 1個月 1周 1天 1小時 1分鐘 1秒", duration.toString());
};

function testDurFmtZHFormatLong() {
    var fmt = new DurationFmt({
    	locale: "zh-Hant-TW",
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
    	second: 1
    });
    assertEquals("1年、1個月、1週、1天、1小時、1分鐘、1秒", duration.toString());
};

function testDurFmtZHFormatFull() {
    var fmt = new DurationFmt({
    	locale: "zh-Hant-TW",
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
    	second: 1
    });
    assertEquals("1年、1個月、1週、1天、1小時、1分鐘和1秒", duration.toString());
};

//test cases for zh-Hank-HK

function testDurFmtZHHKFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "zh-Hant-HK",
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
    	second: 1
    });
    assertEquals("1年 1個月 1週 1天 1小時 1分鐘 1秒", duration.toString());
};


function testDurFmtZHHKFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "zh-Hant-HK",
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
    	second: 1
    });
    assertEquals("1年 1個月 1週 1天 1小時 1分鐘 1秒", duration.toString());
};

function testDurFmtZHHKFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "zh-Hant-HK",
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
    	second: 1
    });
    assertEquals("1年 1個月 1週 1天 1:01:01", duration.toString());
};

function testDurFmtZHHKFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "zh-Hant-HK",
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
    	second: 1
    });
    assertEquals("1年 1個月 1周 1天 1小時 1分鐘 1秒", duration.toString());
};

function testDurFmtZHHKFormatLong() {
    var fmt = new DurationFmt({
    	locale: "zh-Hant-HK",
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
    	second: 1
    });
    assertEquals("1年、1個月、1週、1天、1小時、1分鐘、1秒", duration.toString());
};

function testDurFmtZHHKFormatFull() {
    var fmt = new DurationFmt({
    	locale: "zh-Hant-HK",
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
    	second: 1
    });
    assertEquals("1年、1個月、1週、1天、1小時、1分鐘和1秒", duration.toString());
};

//test cases for tr-TR

function testDurFmtTRFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "tr-TR",
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
    	second: 1
    });
    assertEquals("1y 1a 1h 1g 1s 1d 1s", duration.toString());
};

function testDurFmtTRFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "tr-TR",
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
    	second: 1
    });
    assertEquals("1y 1a 1h 1g 1s 1d 1s", duration.toString());
};

function testDurFmtTRFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "tr-TR",
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
    	second: 1
    });
    assertEquals("1y 1a 1h 1g 01:01:01", duration.toString());
};

function testDurFmtTRFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "tr-TR",
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
    	second: 1
    });
    assertEquals("1 yıl 1 ay 1 hf 1 gün 1 sa 1 dk 1 sn", duration.toString());
};

function testDurFmtTRFormatLong() {
    var fmt = new DurationFmt({
    	locale: "tr-TR",
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
    	second: 1
    });
    assertEquals("1 yıl 1 ay 1 haf 1 gün 1 saat 1 dak 1 san", duration.toString());
};

function testDurFmtTRFormatFull() {
    var fmt = new DurationFmt({
    	locale: "tr-TR",
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
    	second: 1
    });
    assertEquals("1 yıl, 1 ay, 1 hafta, 1 gün, 1 saat, 1 dakika ve 1 saniye", duration.toString());
};

//test cases for swedish

function testDurFmtSVFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "sv-SE",
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
    	second: 1
    });
    assertEquals("1å 1må 1v 1d 1t 1m 1s", duration.toString());
};

function testDurFmtSVFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "sv-SE",
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
    	second: 1
    });
    assertEquals("1å 1må 1v 1d 1t 1m 1s", duration.toString());
};

function testDurFmtSVFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "sv-SE",
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
    	second: 1
    });
    assertEquals("1å 1må 1v 1d 01:01:01", duration.toString());
};

function testDurFmtSVFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "sv-SE",
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
    	second: 1
    });
    assertEquals("1 år 1 må 1 ve 1 dy 1 ti 1 mi 1 se", duration.toString());
};

function testDurFmtSVFormatLong() {
    var fmt = new DurationFmt({
    	locale: "sv-SE",
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
    	second: 1
    });
    assertEquals("1 år, 1 mån, 1 vec, 1 dygn, 1 tim, 1 min, 1 sek", duration.toString());
};

function testDurFmtSVFormatFull() {
    var fmt = new DurationFmt({
    	locale: "sv-SE",
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
    	second: 1
    });
    assertEquals("1 år, 1 månad, 1 vecka, 1 dygn, 1 timme, 1 minut och 1 sekund", duration.toString());
};

//test cases for sl-SI

function testDurFmtSLFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "sl-SI",
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
    	second: 1
    });
    assertEquals("1l 1m 1t 1d 1u 1m 1s", duration.toString());
};

function testDurFmtSLFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "sl-SI",
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
    	second: 1
    });
    assertEquals("1l 1m 1t 1d 1u 1m 1s", duration.toString());
};

function testDurFmtSLFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "sl-SI",
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
    	second: 1
    });
    assertEquals("1l 1m 1t 1d 01.01.01", duration.toString());
};

function testDurFmtSLFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "sl-SI",
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
    	second: 1
    });
    assertEquals("1 le 1 me 1 te 1 dan 1 ura 1 min 1 se", duration.toString());
};

function testDurFmtSLFormatLong() {
    var fmt = new DurationFmt({
    	locale: "sl-SI",
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
    	second: 1
    });
    assertEquals("1 leto 1 mes 1 ted 1 dan 1 ura 1 min 1 sek", duration.toString());
};

function testDurFmtSLFormatFull() {
    var fmt = new DurationFmt({
    	locale: "sl-SI",
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
    	second: 1
    });
    assertEquals("1 leto, 1 mesec, 1 teden, 1 dan, 1 ura, 1 minuta in 1 sekunda", duration.toString());
};

//test cases for portuguese pt-PU

function testDurFmtPTPTFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
    	locale: "pt-PT",
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
    	second: 1
    });
    assertEquals("1a 1me 1sm 1d 1h 1m 1s", duration.toString());
};

function testDurFmtPTPTFormatShortText() {
    var fmt = new DurationFmt({
    	locale: "pt-PT",
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
    	second: 1
    });
    assertEquals("1a 1me 1sm 1d 1h 1m 1s", duration.toString());
};

function testDurFmtPTPTFormatShortClock() {
    var fmt = new DurationFmt({
    	locale: "pt-PT",
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
    	second: 1
    });
    assertEquals("1a 1me 1sm 1d 01:01:01", duration.toString());
};

function testDurFmtPTPTFormatMedium() {
    var fmt = new DurationFmt({
    	locale: "pt-PT",
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
    	second: 1
    });
    assertEquals("1 an 1 mê 1 sm 1 di 1 hr 1 mn 1 sg", duration.toString());
};

function testDurFmtPTPTFormatLong() {
    var fmt = new DurationFmt({
    	locale: "pt-PT",
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
    	second: 1
    });
    assertEquals("1 ano 1 mês 1 sem 1 dia 1 hor 1 min 1 seg", duration.toString());
};

function testDurFmtPTPTFormatFull() {
    var fmt = new DurationFmt({
    	locale: "pt-PT",
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
    	second: 1
    });
    assertEquals("1 ano, 1 mês, 1 semana, 1 dia, 1 hora, 1 minuto e 1 segundo", duration.toString());
};
