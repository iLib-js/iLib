/*
 * testdatefmt_fa_IR.js - test the date formatter in saudi Arabia
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


function testDateFmtSimpleShort_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٢٩‏/٩‏/١١", fmt.format(date));
}

function testDateFmtSimpleMedium_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٢٩‏/٠٩‏/٢٠١١", fmt.format(date));
}

function testDateFmtSimpleLong_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٢٩ سبتمبر، ٢٠١١", fmt.format(date));
}

function testDateFmtSimpleFull_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٢٩ سبتمبر، ٢٠١١", fmt.format(date));
}

function testDateFmtSimpleTimeShort_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("١:٤٥ م", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("١:٤٥ م", fmt.format(date));
}

function testDateFmtSimpleTimeLong_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("١:٤٥ م", fmt.format(date));
}

function testDateFmtSimpleTimeFull_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("١:٤٥ م", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("١:٤٥ م ٢٩‏/٩‏/١١", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("١:٤٥ م ٢٩‏/٠٩‏/٢٠١١", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("١:٤٥ م ٢٩ سبتمبر، ٢٠١١", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("١:٤٥ م ٢٩ سبتمبر، ٢٠١١", fmt.format(date));
}


function testDateFmtTemplateCalendar_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٢٠١١-٠٩-٢٩", fmt.format(date));
}


function testDateFmtTemplateClock12SwitchHH_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٠١:٤٥", fmt.format(date));
}

function testDateFmtTemplateClock12Switchkk_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٠١:٤٥", fmt.format(date));
}

function testDateFmtTemplateClock24Switchhh_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("١٣:٤٥", fmt.format(date));
}

function testDateFmtTemplateClock24SwitchKK_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("١٣:٤٥", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", locale: "fa-IR", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٠١:٤٥", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", locale: "fa-IR", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٠١:٤٥", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", locale: "fa-IR", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("١٣:٤٥", fmt.format(date));
}

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", locale: "fa-IR", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("١٣:٤٥", fmt.format(date));
}


function testDateFmtTypeDate_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٢٩‏/٩‏/١١", fmt.format(date));
}

function testDateFmtTypeTime_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("١:٤٥ م", fmt.format(date));
}

function testDateFmtTypeDateTime_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("١:٤٥ م ٢٩‏/٩‏/١١", fmt.format(date));
}


function testDateFmtShortDateComponentsY_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("١١", fmt.format(date));
}

function testDateFmtShortDateComponentsM_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٠٩", fmt.format(date));
}

function testDateFmtShortDateComponentsN_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("س", fmt.format(date));
}

function testDateFmtShortDateComponentsD_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٢٩", fmt.format(date));
}

function testDateFmtShortDateComponentsDM_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٢٩/‏٩", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٩‏/١١", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٢٩‏/٩‏/١١", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("خ، ٢٩/٩", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("خ، ٢٩/‏٩/‏١١", fmt.format(date));
}


function testDateFmtFullDateComponentsY_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٢٠١١", fmt.format(date));
}

function testDateFmtFullDateComponentsM_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("سبتمبر", fmt.format(date));
}

function testDateFmtFullDateComponentsD_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٢٩", fmt.format(date));
}

function testDateFmtFullDateComponentsDM_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٢٩ سبتمبر", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("سبتمبر، ٢٠١١", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٢٩ سبتمبر، ٢٠١١", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("الخميس، ٢٩ سبتمبر", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("الخميس، ٢٩ سبتمبر، ٢٠١١", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("٣٧", fmt.format(date));
}

function testDateFmtShortTimeComponentsM_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("٤٥", fmt.format(date));
}

function testDateFmtShortTimeComponentsH_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١", fmt.format(date));
}

function testDateFmtShortTimeComponentsMS_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("٤٥:٣٧", fmt.format(date));
}

function testDateFmtShortTimeComponentsHM_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥ م", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥:٣٧ م", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥ م", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_fa_IR() {
    var fmt = new ilib.DateFmt({
		locale: "fa-IR", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥ AST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_fa_IR() {
    var fmt = new ilib.DateFmt({
		locale: "fa-IR", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥: م AST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥:٣٧ م", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_fa_IR() {
    var fmt = new ilib.DateFmt({
		locale: "fa-IR", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥:٣٧ AST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_fa_IR() {
    var fmt = new ilib.DateFmt({
		locale: "fa-IR", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥:٣٧ م AST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("٣٧", fmt.format(date));
}

function testDateFmtFullTimeComponentsM_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("٤٥", fmt.format(date));
}

function testDateFmtFullTimeComponentsH_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١", fmt.format(date));
}

function testDateFmtFullTimeComponentsMS_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("٤٥:٣٧", fmt.format(date));
}

function testDateFmtFullTimeComponentsHM_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥ م", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥:٣٧ م", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥ م", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_fa_IR() {
    var fmt = new ilib.DateFmt({
		locale: "fa-IR", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥ AST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_fa_IR() {
    var fmt = new ilib.DateFmt({
		locale: "fa-IR", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥: م AST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_fa_IR() {
    var fmt = new ilib.DateFmt({locale: "fa-IR", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥:٣٧ م", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_fa_IR() {
    var fmt = new ilib.DateFmt({
		locale: "fa-IR", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥:٣٧ AST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_fa_IR() {
    var fmt = new ilib.DateFmt({
		locale: "fa-IR", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥:٣٧ م AST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_fa_IR() {
    var fmt = new ilib.DateFmt({
		locale: "fa-IR", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥:٣٧ AST", fmt.format(date));
}

