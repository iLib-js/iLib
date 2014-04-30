/*
 * testdatefmt_ar_SA.js - test the date formatter in saudi Arabia
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


function testDateFmtSimpleShort_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtSimpleMedium_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtSimpleLong_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtSimpleFull_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtSimpleTimeShort_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtSimpleTimeMedium_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtSimpleTimeLong_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtSimpleTimeFull_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtDateTimeSimpleShort_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtDateTimeSimpleMedium_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtDateTimeSimpleLong_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtDateTimeSimpleFull_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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


function testDateFmtTemplateCalendar_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
    	locale: "ar-SA",
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


function testDateFmtTemplateClock12SwitchHH_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtTemplateClock12Switchkk_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtTemplateClock24Switchhh_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtTemplateClock24SwitchKK_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", locale: "ar-SA", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", locale: "ar-SA", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", locale: "ar-SA", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", locale: "ar-SA", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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


function testDateFmtTypeDate_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtTypeTime_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtTypeDateTime_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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


function testDateFmtShortDateComponentsY_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtShortDateComponentsM_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtShortDateComponentsN_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtShortDateComponentsD_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtShortDateComponentsDM_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtShortDateComponentsMY_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtShortDateComponentsDMY_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtShortDateComponentsWDM_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtShortDateComponentsWDMY_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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


function testDateFmtFullDateComponentsY_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtFullDateComponentsM_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtFullDateComponentsD_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtFullDateComponentsDM_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtFullDateComponentsMY_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtFullDateComponentsDMY_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtFullDateComponentsWDM_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtFullDateComponentsWDMY_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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


function testDateFmtShortTimeComponentsS_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtShortTimeComponentsM_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtShortTimeComponentsH_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtShortTimeComponentsMS_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtShortTimeComponentsHM_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥:٣٧", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtShortTimeComponentsHMZ_ar_SA() {
    var fmt = new ilib.DateFmt({
		locale: "ar-SA", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtShortTimeComponentsHMAZ_ar_SA() {
    var fmt = new ilib.DateFmt({
		locale: "ar-SA", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥ م AST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtShortTimeComponentsHMSZ_ar_SA() {
    var fmt = new ilib.DateFmt({
		locale: "ar-SA", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtShortTimeComponentsHMSAZ_ar_SA() {
    var fmt = new ilib.DateFmt({
		locale: "ar-SA", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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


function testDateFmtFullTimeComponentsS_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtFullTimeComponentsM_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtFullTimeComponentsH_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtFullTimeComponentsMS_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtFullTimeComponentsHM_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥:٣٧", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtFullTimeComponentsHMZ_ar_SA() {
    var fmt = new ilib.DateFmt({
		locale: "ar-SA", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtFullTimeComponentsHMAZ_ar_SA() {
    var fmt = new ilib.DateFmt({
		locale: "ar-SA", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("١:٤٥ م AST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_ar_SA() {
    var fmt = new ilib.DateFmt({locale: "ar-SA", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtFullTimeComponentsHMSZ_ar_SA() {
    var fmt = new ilib.DateFmt({
		locale: "ar-SA", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtFullTimeComponentsHMSAZ_ar_SA() {
    var fmt = new ilib.DateFmt({
		locale: "ar-SA", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

function testDateFmtWithTimeZoneAndNoDST_ar_SA() {
    var fmt = new ilib.DateFmt({
		locale: "ar-SA", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "ar-SA",
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

