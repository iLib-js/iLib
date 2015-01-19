/*
 * testdatefmt_ku_Arab_IQ.js - test the date formatter object in Kurdish Arabic
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

function testDateFmtSimpleShort_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29/9/2011", fmt.format(date));
}

function testDateFmtSimpleMedium_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29/09/2011", fmt.format(date));
}

function testDateFmtSimpleLong_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏2011/ئەیلول/29", fmt.format(date));
}

function testDateFmtSimpleFull_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏2011/ئەیلول/29", fmt.format(date));
}

function testDateFmtSimpleTimeShort_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtSimpleTimeMedium_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtSimpleTimeLong_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtSimpleTimeFull_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtDateTimeSimpleShort_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29/9/2011 13:45",fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29/09/2011 13:45",fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏2011/ئەیلول/29 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏2011/ئەیلول/29 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
    	locale: "ku-Arab-IQ",
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



function testDateFmtTemplateClock12SwitchHH_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtTemplateClock12Switchkk_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtTemplateClock24Switchhh_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtTemplateClock24SwitchKK_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", locale: "ku-Arab-IQ", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", locale: "ku-Arab-IQ", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", locale: "ku-Arab-IQ", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", locale: "ku-Arab-IQ", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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


function testDateFmtTypeDate_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29/9/2011", fmt.format(date));
}

function testDateFmtTypeTime_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtTypeDateTime_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29/9/2011 13:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtShortDateComponentsM_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9", fmt.format(date));
}


function testDateFmtShortDateComponentsD_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtShortDateComponentsDM_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29/9", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏9/2011", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});

    assertEquals("‏29/9/2011", fmt.format(date));

}

function testDateFmtShortDateComponentsWDM_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("پێن, 29/9", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("پێن,  29/9/2011", fmt.format(date));
}


function testDateFmtFullDateComponentsY_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtFullDateComponentsM_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ئەیلول", fmt.format(date));
}

function testDateFmtFullDateComponentsD_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtFullDateComponentsDM_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29/ئەیلول", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏09/2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏2011/ئەیلول/29", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("پێنج شەممە,ئەیلول/29", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("پێنج شەممە, 2011/ئەیلول/29", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtShortTimeComponentsM_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtShortTimeComponentsH_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13", fmt.format(date));
}

function testDateFmtShortTimeComponentsMS_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtShortTimeComponentsHM_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({
		locale: "ku-Arab-IQ", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 AST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({
		locale: "ku-Arab-IQ", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 AST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({
		locale: "ku-Arab-IQ", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 AST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({
		locale: "ku-Arab-IQ", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 AST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtFullTimeComponentsM_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtFullTimeComponentsH_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13", fmt.format(date));
}

function testDateFmtFullTimeComponentsMS_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
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

function testDateFmtFullTimeComponentsHM_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({
		locale: "ku-Arab-IQ", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 AST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({
		locale: "ku-Arab-IQ", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 AST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({locale: "ku-Arab-IQ", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({
		locale: "ku-Arab-IQ", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 AST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({
		locale: "ku-Arab-IQ", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 AST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_ku_Arab_IQ() {
    var fmt = new ilib.DateFmt({
		locale: "ku-Arab-IQ", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ku-Arab-IQ",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 AST", fmt.format(date));
}

