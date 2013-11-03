/*
 * testdatefmt_pt_BR.js - test the date formatter object in Brazilian Portuguese
 * 
 * Copyright © 2012-2013, JEDLSoft
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

function testDateFmtBRConstructorEmpty() {
    var fmt = new ilib.DateFmt({locale: "pt-BR"});
    
    assertNotNull(fmt);
}


function testDateFmtBRSimpleShort() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11", fmt.format(date));
}

function testDateFmtBRSimpleMedium() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRSimpleLong() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 de set de 2011", fmt.format(date));
}

function testDateFmtBRSimpleFull() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 de setembro de 2011", fmt.format(date));
}

function testDateFmtBRSimpleTimeShort() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13h45min", fmt.format(date));
}

function testDateFmtBRSimpleTimeMedium() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13h45min", fmt.format(date));
}

function testDateFmtBRSimpleTimeLong() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13h45min", fmt.format(date));
}

function testDateFmtBRSimpleTimeFull() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13h45min", fmt.format(date));
}

function testDateFmtBRDateTimeSimpleShort() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11 13h45min", fmt.format(date));
}

function testDateFmtBRDateTimeSimpleMedium() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011 13h45min", fmt.format(date));
}

function testDateFmtBRDateTimeSimpleLong() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 de set de 2011 13h45min", fmt.format(date));
}

function testDateFmtBRDateTimeSimpleFull() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 de setembro de 2011 13h45min", fmt.format(date));
}


function testDateFmtBRTemplateCalendar() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
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

function testDateFmtBRTemplateCalendarIncompatibleDateType() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    try {
        fmt.format(date);
        fail();
    } catch (str) {
        // success
        assertEquals("Wrong date type passed to ilib.DateFmt.format()", str);
    }
}

function testDateFmtBRTemplateClock12SwitchHH() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRTemplateClock12Switchkk() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRTemplateClock24Switchhh() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRTemplateClock24SwitchKK() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRTemplateNoClockDoNotFollowLocaleDefault12hh() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRTemplateNoClockDoNotFollowLocaleDefault12KK() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRTemplateNoClockDoNotFollowLocaleDefault24HH() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRTemplateNoClockDoNotFollowLocaleDefault24kk() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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


function testDateFmtBRTypeDate() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11", fmt.format(date));
}

function testDateFmtBRTypeTime() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13h45min", fmt.format(date));
}

function testDateFmtBRTypeDateTime() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11 13h45min", fmt.format(date));
}


function testDateFmtBRShortDateComponentsY() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11", fmt.format(date));
}

function testDateFmtBRShortDateComponentsM() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRShortDateComponentsN() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("S", fmt.format(date));
}

function testDateFmtBRShortDateComponentsD() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRShortDateComponentsDM() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09", fmt.format(date));
}

function testDateFmtBRShortDateComponentsMY() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09/11", fmt.format(date));
}

function testDateFmtBRShortDateComponentsDMY() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11", fmt.format(date));
}

function testDateFmtBRShortDateComponentsWDM() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Q, 29/09", fmt.format(date));
}

function testDateFmtBRShortDateComponentsWDMY() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Q, 29/09/11", fmt.format(date));
}


function testDateFmtBRFullDateComponentsY() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRFullDateComponentsM() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("setembro", fmt.format(date));
}

function testDateFmtBRFullDateComponentsD() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRFullDateComponentsDM() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 de setembro", fmt.format(date));
}

function testDateFmtBRFullDateComponentsMY() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("setembro 2011", fmt.format(date));
}

function testDateFmtBRFullDateComponentsDMY() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 de setembro de 2011", fmt.format(date));
}

function testDateFmtBRFullDateComponentsWDM() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("quinta-feira, 29 de setembro", fmt.format(date));
}

function testDateFmtBRFullDateComponentsWDMY() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("quinta-feira, 29 de setembro de 2011", fmt.format(date));
}


function testDateFmtBRShortTimeComponentsS() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRShortTimeComponentsM() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRShortTimeComponentsH() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRShortTimeComponentsMS() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45min37s", fmt.format(date));
}

function testDateFmtBRShortTimeComponentsHM() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13h45min", fmt.format(date));
}

function testDateFmtBRShortTimeComponentsHMS() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13h45min37s", fmt.format(date));
}

function testDateFmtBRShortTimeComponentsHMA() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13h45min", fmt.format(date));
}

function testDateFmtBRShortTimeComponentsHMZ() {
    var fmt = new ilib.DateFmt({
        locale: "pt-BR", 
        type: "time", 
        time: "hmz", 
        timezone: "America/Sao_Paulo"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13h45min BRT", fmt.format(date));
}

function testDateFmtBRShortTimeComponentsHMAZ() {
    var fmt = new ilib.DateFmt({
        locale: "pt-BR", 
        type: "time", 
        time: "hmaz", 
        timezone: "America/Sao_Paulo"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13h45min BRT", fmt.format(date));
}

function testDateFmtBRShortTimeComponentsHMSA() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13h45min37s", fmt.format(date));
}

function testDateFmtBRShortTimeComponentsHMSZ() {
    var fmt = new ilib.DateFmt({
        locale: "pt-BR", 
        type: "time", 
        time: "hmsz", 
        timezone: "America/Sao_Paulo"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13h45min37s BRT", fmt.format(date));
}

function testDateFmtBRShortTimeComponentsHMSAZ() {
    var fmt = new ilib.DateFmt({
        locale: "pt-BR", 
        type: "time", 
        time: "hmsaz", 
        timezone: "America/Sao_Paulo"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13h45min37s BRT", fmt.format(date));
}


function testDateFmtBRFullTimeComponentsS() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRFullTimeComponentsM() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRFullTimeComponentsH() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
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

function testDateFmtBRFullTimeComponentsMS() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45min37s", fmt.format(date));
}

function testDateFmtBRFullTimeComponentsHM() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13h45min", fmt.format(date));
}

function testDateFmtBRFullTimeComponentsHMS() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13h45min37s", fmt.format(date));
}

function testDateFmtBRFullTimeComponentsHMA() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13h45min", fmt.format(date));
}

function testDateFmtBRFullTimeComponentsHMZ() {
    var fmt = new ilib.DateFmt({
        locale: "pt-BR", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "America/Sao_Paulo"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13h45min BRT", fmt.format(date));
}

function testDateFmtBRFullTimeComponentsHMAZ() {
    var fmt = new ilib.DateFmt({
        locale: "pt-BR", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "America/Sao_Paulo"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13h45min BRT", fmt.format(date));
}

function testDateFmtBRFullTimeComponentsHMSA() {
    var fmt = new ilib.DateFmt({locale: "pt-BR", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13h45min37s", fmt.format(date));
}

function testDateFmtBRFullTimeComponentsHMSZ() {
    var fmt = new ilib.DateFmt({
        locale: "pt-BR", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "America/Sao_Paulo"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13h45min37s BRT", fmt.format(date));
}

function testDateFmtBRFullTimeComponentsHMSAZ() {
    var fmt = new ilib.DateFmt({
        locale: "pt-BR", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "America/Sao_Paulo"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13h45min37s BRT", fmt.format(date));
}

function testDateFmtBRWithTimeZoneAndNoDST() {
    var fmt = new ilib.DateFmt({
        locale: "pt-BR", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "America/Sao_Paulo"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "pt-BR",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13h45min37s BRST", fmt.format(date));
}

