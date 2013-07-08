/*
 * tCOSTdatefmt_fr_FR.js - tCOST the date formatter object in standard French
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

function tCOSTDateFmtCAConstructorEmpty_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO"});
    
    assertNotNull(fmt);
}


function tCOSTDateFmtCASimpleShort_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "short"});
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
    assertEquals("29/09/11", fmt.format(date));
}

function tCOSTDateFmtCASimpleMedium_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "medium"});
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
    assertEquals("29/09/2011", fmt.format(date));
}

function tCOSTDateFmtCASimpleLong_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "long"});
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
    assertEquals("29 de sep 2011", fmt.format(date));
}

function tCOSTDateFmtCASimpleFull_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "full"});
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
    assertEquals("29 de septiembre 2011", fmt.format(date));
}

function tCOSTDateFmtCASimpleTimeShort_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "short", type: "time"});
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
    assertEquals("13:45", fmt.format(date));
}

function tCOSTDateFmtCASimpleTimeMedium_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "medium", type: "time"});
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
    assertEquals("13:45", fmt.format(date));
}

function tCOSTDateFmtCASimpleTimeLong_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", timelength: "long", type: "time"});
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
    assertEquals("13:45", fmt.format(date));
}

function tCOSTDateFmtCASimpleTimeFull_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "full", type: "time"});
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
    assertEquals("13:45", fmt.format(date));
}

function tCOSTDateFmtCADateTimeSimpleShort_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "short", type: "datetime"});
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
    assertEquals("29/09/11 13:45", fmt.format(date));
}

function tCOSTDateFmtCADateTimeSimpleMedium_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 9,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09/09/2011 13:45", fmt.format(date));
}

function tCOSTDateFmtCADateTimeSimpleLong_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "long", type: "datetime"});
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
    assertEquals("29 de sep 2011 13:45", fmt.format(date));
}

function tCOSTDateFmtCADateTimeSimpleFull_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "full", type: "datetime"});
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
    assertEquals("29 de septiembre 2011 13:45", fmt.format(date));
}


function tCOSTDateFmtCATemplateCalendar_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", calendar: "julian", template: "yyyy-MM-dd"});
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


function tCOSTDateFmtCATemplateClock12SwitchHH_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", clock: "12", template: "HH:mm"});
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
    assertEquals("01:45", fmt.format(date));
}

function tCOSTDateFmtCATemplateClock12Switchkk_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", clock: "12", template: "kk:mm"});
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
    assertEquals("01:45", fmt.format(date));
}

function tCOSTDateFmtCATemplateClock24Switchhh_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", clock: "24", template: "hh:mm"});
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
    assertEquals("13:45", fmt.format(date));
}

function tCOSTDateFmtCATemplateClock24SwitchKK_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", clock: "24", template: "KK:mm"});
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
    assertEquals("13:45", fmt.format(date));
}

function tCOSTDateFmtCATemplateNoClockDoNotFollowLocaleDefault12hh_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", template: "hh:mm"});
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
    assertEquals("01:45", fmt.format(date));
}

function tCOSTDateFmtCATemplateNoClockDoNotFollowLocaleDefault12KK_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", template: "KK:mm"});
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
    assertEquals("01:45", fmt.format(date));
}

function tCOSTDateFmtCATemplateNoClockDoNotFollowLocaleDefault24HH_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", template: "HH:mm"});
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
    assertEquals("13:45", fmt.format(date));
}

function tCOSTDateFmtCATemplateNoClockDoNotFollowLocaleDefault24kk_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", template: "kk:mm"});
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
    assertEquals("13:45", fmt.format(date));
}


function tCOSTDateFmtCATypeDate_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "date"});
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
    assertEquals("29/09/11", fmt.format(date));
}

function tCOSTDateFmtCATypeTime_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "time"});
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
    assertEquals("13:45", fmt.format(date));
}

function tCOSTDateFmtCATypeDateTime_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "datetime"});
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
    assertEquals("29/09/11 13:45", fmt.format(date));
}


function tCOSTDateFmtCAShortDateComponentsY_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", date: "y"});
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
    assertEquals("11", fmt.format(date));
}

function tCOSTDateFmtCAShortDateComponentsM_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", date: "m"});
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
    assertEquals("9", fmt.format(date));
}

function tCOSTDateFmtCAShortDateComponentsN_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", date: "n"});
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
    assertEquals("S", fmt.format(date));
}

function tCOSTDateFmtCAShortDateComponentsD_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", date: "d"});
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
    assertEquals("29", fmt.format(date));
}

function tCOSTDateFmtCAShortDateComponentsDM_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", date: "dm"});
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
    assertEquals("29/09", fmt.format(date));
}

function tCOSTDateFmtCAShortDateComponentsMY_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", date: "my"});
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
    assertEquals("09/11", fmt.format(date));
}

function tCOSTDateFmtCAShortDateComponentsDMY_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", date: "dmy"});
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
    assertEquals("29/09/11", fmt.format(date));
}

function tCOSTDateFmtCAShortDateComponentsWDM_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", date: "wdm"});
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
    assertEquals("ju 29/09", fmt.format(date));
}

function tCOSTDateFmtCAShortDateComponentsWDMY_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", date: "wdmy"});
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
    assertEquals("ju 29/09/11", fmt.format(date));
}


function tCOSTDateFmtCAFullDateComponentsY_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "full", date: "y"});
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
    assertEquals("2011 d.C.", fmt.format(date));
}

function tCOSTDateFmtCAFullDateComponentsM_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "full", date: "m"});
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
    assertEquals("septiembre", fmt.format(date));
}

function tCOSTDateFmtCAFullDateComponentsD_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "full", date: "d"});
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
    assertEquals("29", fmt.format(date));
}

function tCOSTDateFmtCAFullDateComponentsDM_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "full", date: "dm"});
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
    assertEquals("29 de septiembre", fmt.format(date));
}

function tCOSTDateFmtCAFullDateComponentsMY_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "full", date: "my"});
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
    assertEquals("septiembre 2011", fmt.format(date));
}

function tCOSTDateFmtCAFullDateComponentsDMY_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "full", date: "dmy"});
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
    assertEquals("29 de septiembre 2011", fmt.format(date));
}

function tCOSTDateFmtCAFullDateComponentsWDM_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "full", date: "wdm"});
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
    assertEquals("jueves 29 de septiembre", fmt.format(date));
}

function tCOSTDateFmtCAFullDateComponentsWDMY_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", length: "full", date: "wdmy"});
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
    assertEquals("jueves 29 de septiembre 2011", fmt.format(date));
}


function tCOSTDateFmtCAShortTimeComponentsS_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function tCOSTDateFmtCAShortTimeComponentsM_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function tCOSTDateFmtCAShortTimeComponentsH_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function tCOSTDateFmtCAShortTimeComponentsMS_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function tCOSTDateFmtCAShortTimeComponentsHM_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function tCOSTDateFmtCAShortTimeComponentsHMS_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function tCOSTDateFmtCAShortTimeComponentsHMA_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function tCOSTDateFmtCAShortTimeComponentsHMZ_es_CO() {
    var fmt = new ilib.DateFmt({
        locale: "es-CO", 
        type: "time", 
        time: "hmz", 
       
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 COST", fmt.format(date));
}

function tCOSTDateFmtCAShortTimeComponentsHMAZ_es_CO() {
    var fmt = new ilib.DateFmt({
        locale: "es-CO", 
        type: "time", 
        time: "hmaz" 
       
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 COST", fmt.format(date));
}

function tCOSTDateFmtCAShortTimeComponentsHMSA_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function tCOSTDateFmtCAShortTimeComponentsHMSZ_es_CO() {
    var fmt = new ilib.DateFmt({
        locale: "es-CO", 
        type: "time", 
        time: "hmsz"
       
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 COST", fmt.format(date));
}

function tCOSTDateFmtCAShortTimeComponentsHMSAZ_es_CO() {
    var fmt = new ilib.DateFmt({
        locale: "es-CO", 
        type: "time", 
        time: "hmsaz"
       
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 COST", fmt.format(date));
}


function tCOSTDateFmtCAFullTimeComponentsS_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function tCOSTDateFmtCAFullTimeComponentsM_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function tCOSTDateFmtCAFullTimeComponentsH_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function tCOSTDateFmtCAFullTimeComponentsMS_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function tCOSTDateFmtCAFullTimeComponentsHM_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function tCOSTDateFmtCAFullTimeComponentsHMS_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function tCOSTDateFmtCAFullTimeComponentsHMA_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function tCOSTDateFmtCAFullTimeComponentsHMZ_es_CO() {
    var fmt = new ilib.DateFmt({
        locale: "es-CO", 
        type: "time", 
        length: "full", 
        time: "hmz", 
       
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 COST", fmt.format(date));
}

function tCOSTDateFmtCAFullTimeComponentsHMAZ_es_CO() {
    var fmt = new ilib.DateFmt({
        locale: "es-CO", 
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
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 COST", fmt.format(date));
}

function tCOSTDateFmtCAFullTimeComponentsHMSA_es_CO() {
    var fmt = new ilib.DateFmt({locale: "es-CO", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function tCOSTDateFmtCAFullTimeComponentsHMSZ_es_CO() {
    var fmt = new ilib.DateFmt({
        locale: "es-CO", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
       
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 COST", fmt.format(date));
}

function tCOSTDateFmtCAFullTimeComponentsHMSAZ_es_CO() {
    var fmt = new ilib.DateFmt({
        locale: "es-CO", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
       
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 COST", fmt.format(date));
}

function tCOSTDateFmtCAWithTimeZoneAndNoDST_es_CO() {
    var fmt = new ilib.DateFmt({
        locale: "es-CO", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
       
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 COST", fmt.format(date));
}

