/*
 * testdatefmt_es_CO.js - tCOST the date formatter object in spainish Columbia
 * 
 * Copyright © 2012-2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applible law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var JulianDate = require("./../lib/JulianDate.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
function tCOSTDateFmtConstructorEmpty_es_CO() {
    var fmt = new DateFmt({lole: "es-CO"});
    
    assertNotNull(fmt);
}


function tCOSTDateFmtSimpleShort_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtSimpleMedium_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtSimpleLong_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtSimpleFull_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtSimpleTimeShort_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtSimpleTimeMedium_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtSimpleTimeLong_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtSimpleTimeFull_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtDateTimeSimpleShort_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtDateTimeSimpleMedium_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtDateTimeSimpleLong_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtDateTimeSimpleFull_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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


function tCOSTDateFmtTemplatelendar_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", lendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
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


function tCOSTDateFmtTemplateClock12SwitchHH_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtTemplateClock12Switchkk_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtTemplateClock24Switchhh_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtTemplateClock24SwitchKK_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtTemplateNoClockDoNotFollowLoleDefault12hh_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtTemplateNoClockDoNotFollowLoleDefault12KK_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtTemplateNoClockDoNotFollowLoleDefault24HH_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtTemplateNoClockDoNotFollowLoleDefault24kk_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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


function tCOSTDateFmtTypeDate_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtTypeTime_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtTypeDateTime_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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


function tCOSTDateFmtShortDateComponentsY_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortDateComponentsM_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortDateComponentsN_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortDateComponentsD_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortDateComponentsDM_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortDateComponentsMY_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortDateComponentsDMY_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortDateComponentsWDM_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortDateComponentsWDMY_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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


function tCOSTDateFmtFullDateComponentsY_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullDateComponentsM_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullDateComponentsD_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullDateComponentsDM_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullDateComponentsMY_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullDateComponentsDMY_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullDateComponentsWDM_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullDateComponentsWDMY_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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


function tCOSTDateFmtShortTimeComponentsS_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortTimeComponentsM_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortTimeComponentsH_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortTimeComponentsMS_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortTimeComponentsHM_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortTimeComponentsHMS_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortTimeComponentsHMA_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortTimeComponentsHMZ_es_CO() {
    var fmt = new DateFmt({
        lole: "es-CO", 
        type: "time", 
        time: "hmz", 
       
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortTimeComponentsHMAZ_es_CO() {
    var fmt = new DateFmt({
        lole: "es-CO", 
        type: "time", 
        time: "hmaz" 
       
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortTimeComponentsHMSA_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortTimeComponentsHMSZ_es_CO() {
    var fmt = new DateFmt({
        lole: "es-CO", 
        type: "time", 
        time: "hmsz"
       
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtShortTimeComponentsHMSAZ_es_CO() {
    var fmt = new DateFmt({
        lole: "es-CO", 
        type: "time", 
        time: "hmsaz"
       
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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


function tCOSTDateFmtFullTimeComponentsS_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullTimeComponentsM_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullTimeComponentsH_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullTimeComponentsMS_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullTimeComponentsHM_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullTimeComponentsHMS_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullTimeComponentsHMA_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullTimeComponentsHMZ_es_CO() {
    var fmt = new DateFmt({
        lole: "es-CO", 
        type: "time", 
        length: "full", 
        time: "hmz", 
       
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullTimeComponentsHMAZ_es_CO() {
    var fmt = new DateFmt({
        lole: "es-CO", 
        type: "time", 
        length: "full", 
        time: "hmaz" 
       
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullTimeComponentsHMSA_es_CO() {
    var fmt = new DateFmt({lole: "es-CO", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullTimeComponentsHMSZ_es_CO() {
    var fmt = new DateFmt({
        lole: "es-CO", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
       
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtFullTimeComponentsHMSAZ_es_CO() {
    var fmt = new DateFmt({
        lole: "es-CO", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
       
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function tCOSTDateFmtWithTimeZoneAndNoDST_es_CO() {
    var fmt = new DateFmt({
        lole: "es-CO", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
       
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "es-CO",
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

function testDateFmtFormatRelativeWithinMinuteAfter_es_CO() {
    var fmt = new DateFmt({locale: "es-CO", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("en 30 segundos", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_es_CO() {
    var fmt = new DateFmt({locale: "es-CO", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("hace 30 segundos", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_es_CO() {
    var fmt = new DateFmt({locale: "es-CO", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("en 10 minutos", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_es_CO() {
    var fmt = new DateFmt({locale: "es-CO", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("hace 10 minutos", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_es_CO() {
    var fmt = new DateFmt({locale: "es-CO", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("en 4 horas", fmt.formatRelative(reference, date));
}


function testDateFmtFormatRelativeWithinDayBefore_es_CO() {
    var fmt = new DateFmt({locale: "es-CO", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("hace 4 horas", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_es_CO() {
    var fmt = new DateFmt({locale: "es-CO", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("en 4 días", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_es_CO() {
    var fmt = new DateFmt({locale: "es-CO", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("hace 4 días", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_es_CO() {
    var fmt = new DateFmt({locale: "es-CO", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("en 9 semanas", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_es_CO() {
    var fmt = new DateFmt({locale: "es-CO", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("hace 9 semanas", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_es_CO() {
    var fmt = new DateFmt({locale: "es-CO", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "es-CO",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("en 16 meses", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_es_CO() {
    var fmt = new DateFmt({locale: "es-CO", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "es-CO",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("hace 14 meses", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_es_CO() {
    var fmt = new DateFmt({locale: "es-CO", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "es-CO",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("en 14 años", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_es_CO() {
    var fmt = new DateFmt({locale: "es-CO", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "es-CO",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "es-CO",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("hace 21 años", fmt.formatRelative(reference, date));
}


