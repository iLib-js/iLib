/*
 * testdatefmt_am_ET.js - test the date formatter object in Amharic
 * 
 * Copyright © 2015, JEDLSoft
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

function testDateFmtConstructorEmpty_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011", fmt.format(date));
}

function testDateFmtSimpleMedium_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 ግንቦት 2011", fmt.format(date));
}

function testDateFmtSimpleLong_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 ግንቦት 2011", fmt.format(date));
}

function testDateFmtSimpleFull_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ግንቦት 29 ቀን 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት", fmt.format(date));
}

function testDateFmtSimpleTimeLong_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት", fmt.format(date));
}

function testDateFmtSimpleTimeFull_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት 29/09/2011", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት 29 ግንቦት 2011", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት 29 ግንቦት 2011", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት ግንቦት 29 ቀን 2011", fmt.format(date));
}

function testDateFmtjTemplateMorning_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", template: "j"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
    	locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 4,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("5", fmt.format(date));
}

function testDateFmtjjTemplateMorning_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", template: "jj"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
    	locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 4,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("05", fmt.format(date));
}

function testDateFmtjTemplateEvening_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", template: "j"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
    	locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2", fmt.format(date));
}

function testDateFmtjjTemplateEvening_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", template: "jj"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
    	locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("02", fmt.format(date));
}

function testDateFmtjjTemplateTransitionBefore_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", template: "jj"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
    	locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 23,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("12", fmt.format(date));
}

function testDateFmtjjTemplateTransitionAfter_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", template: "jj"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
    	locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 0,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01", fmt.format(date));
}

function testDateFmtjjTemplateTransitionEveningBefore_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", template: "jj"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
    	locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 11,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("12", fmt.format(date));
}

function testDateFmtjjTemplateTransitionEveningAfter_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", template: "jj"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
    	locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 12,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01", fmt.format(date));
}


function testDateFmtTemplateCalendar_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
    	locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09-29", fmt.format(date));
}


function testDateFmtTemplateCalendarIncompatibleDateType_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    // convert automatically to a Julian calendar date
    assertEquals("2019-05-24 20:45", fmt.format(date));
}

function testDateFmtTemplateClock12SwitchHH_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtTemplateClock12Switchkk_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtTemplateClock24Switchhh_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtTemplateClock24SwitchKK_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}


function testDateFmtTypeDate_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011", fmt.format(date));
}

function testDateFmtTypeTime_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት", fmt.format(date));
}

function testDateFmtTypeDateTime_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት 29/09/2011", fmt.format(date));
}


function testDateFmtShortDateComponentsY_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011", fmt.format(date));
}

function testDateFmtShortDateComponentsM_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09", fmt.format(date));
}

function testDateFmtShortDateComponentsN_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09", fmt.format(date));
}

function testDateFmtShortDateComponentsD() {
    var fmt = new ilib.DateFmt({locale: "am-ET", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29", fmt.format(date));
}

function testDateFmtShortDateComponentsDM_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09/29", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09/2011", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ዓ፣ 09/29", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ዓ፣ 29/09/2011", fmt.format(date));
}


function testDateFmtFullDateComponentsY_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011", fmt.format(date));
}

function testDateFmtFullDateComponentsM_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ግንቦት", fmt.format(date));
}

function testDateFmtFullDateComponentsD() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29", fmt.format(date));
}

function testDateFmtFullDateComponentsDM_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ግንቦት 29", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ግንቦት ቀን 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ግንቦት 29 ቀን 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ዓርብ፣ ግንቦት 29", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ዓርብ፣ ግንቦት 29 ቀን 2011", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("37", fmt.format(date));
}

function testDateFmtShortTimeComponentsM_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45", fmt.format(date));
}

function testDateFmtShortTimeComponentsH_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2", fmt.format(date));
}

function testDateFmtShortTimeComponentsMS_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHM_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_am_ET() {
    var fmt = new ilib.DateFmt({
        locale: "am-ET", 
        type: "time", 
        time: "hmz", 
        timezone: "Africa/Addis_Ababa"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2:45 EAT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_am_ET() {
    var fmt = new ilib.DateFmt({
        locale: "am-ET", 
        type: "time", 
        time: "hmaz", 
        timezone: "Africa/Addis_Ababa"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት EAT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2:45:37 ከሰዓት", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_am_ET() {
    var fmt = new ilib.DateFmt({
        locale: "am-ET", 
        type: "time", 
        time: "hmsz", 
        timezone: "Africa/Addis_Ababa"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2:45:37 EAT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_am_ET() {
    var fmt = new ilib.DateFmt({
        locale: "am-ET", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Africa/Addis_Ababa"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2:45:37 ከሰዓት EAT", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("37", fmt.format(date));
}

function testDateFmtFullTimeComponentsM_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45", fmt.format(date));
}

function testDateFmtFullTimeComponentsH_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2", fmt.format(date));
}

function testDateFmtFullTimeComponentsMS_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHM_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_am_ET() {
    var fmt = new ilib.DateFmt({
        locale: "am-ET", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "Africa/Addis_Ababa"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2:45 EAT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_am_ET() {
    var fmt = new ilib.DateFmt({
        locale: "am-ET", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Africa/Addis_Ababa"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2:45 ከሰዓት EAT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2:45:37 ከሰዓት", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_am_ET() {
    var fmt = new ilib.DateFmt({
        locale: "am-ET", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Africa/Addis_Ababa"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2:45:37 EAT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_am_ET() {
    var fmt = new ilib.DateFmt({
        locale: "am-ET", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Africa/Addis_Ababa"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("2:45:37 ከሰዓት EAT", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_am_ET() {
    var fmt = new ilib.DateFmt({
        locale: "am-ET", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Africa/Addis_Ababa"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    // does not observe DST, so no difference in the TZ spec
    assertEquals("2:45:37 EAT", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("በ 30 ሰከንዶች ውስጥ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("ከ30 ሰከንዶች በፊት", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("በ 10 ደቂቃዎች ውስጥ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("ከ10 ደቂቃዎች በፊት", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("በ 4 ሰዓቶች ውስጥ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("ከ4 ሰዓቶች በፊት", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("በ 4 ቀናት ውስጥ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("ከ4 ቀናት በፊት", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("በ 9 ሳምንታት ውስጥ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("ከ9 ሳምንታት በፊት", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("በ 16 ወራት ውስጥ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("ከ14 ወራት በፊት", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("በ 14 ዓመታት ውስጥ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_am_ET() {
    var fmt = new ilib.DateFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.EthiopicDate({
		locale: "am-ET",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("ከ21 ዓመታት በፊት", fmt.formatRelative(reference, date));
}

