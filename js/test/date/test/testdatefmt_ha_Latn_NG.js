/*
 * testdatefmt_ha_Latn_NG.js - test the date formatter object in Hausa.
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

var JulianDate = require("./../lib/JulianDate.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
function testDateFmtConstructorEmpty_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG"});
    
    assertNotNull(fmt);
}

function testDateFmtSimpleShort_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtSimpleMedium_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Sat, 2011", fmt.format(date));
}

function testDateFmtSimpleLong_ha_Latn_Jan() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 1,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Janairu, 2011", fmt.format(date));
}

function testDateFmtSimpleLong_ha_Latn_Feb() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 2,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Faburairu, 2011", fmt.format(date));
}

function testDateFmtSimpleLong_ha_Latn_Mar() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 3,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Maris, 2011", fmt.format(date));
}
function testDateFmtSimpleLong_ha_Latn_Apr() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 4,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Afirilu, 2011", fmt.format(date));
}

function testDateFmtSimpleLong_ha_Latn_May() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 5,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Mayu, 2011", fmt.format(date));
}

function testDateFmtSimpleLong_ha_Latn_Jun() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 6,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Yuni, 2011", fmt.format(date));
}

function testDateFmtSimpleLong_ha_Latn_Jul() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 7,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Yuli, 2011", fmt.format(date));
}
function testDateFmtSimpleLong_ha_Latn_Aug() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 8,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Agusta, 2011", fmt.format(date));
}

function testDateFmtSimpleLong_ha_Latn_Sep() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Satumba, 2011", fmt.format(date));
}

function testDateFmtSimpleLong_ha_Latn_Oct() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 10,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Oktoba, 2011", fmt.format(date));
}

function testDateFmtSimpleLong_ha_Latn_Nov() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Nuwamba, 2011", fmt.format(date));
}
function testDateFmtSimpleLong_ha_Latn_Dec() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Disamba, 2011", fmt.format(date));
}
function testDateFmtSimpleLong_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Satumba, 2011", fmt.format(date));
}

function testDateFmtSimpleFull_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Satumba, 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 1,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtSimpleTimeLong_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtSimpleTimeFull_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtDateTimeSimpleShort_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Sat, 2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Satumba, 2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Satumba, 2011 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
    	locale: "ha-Latn-NG",
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



function testDateFmtTemplateClock12SwitchHH_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtTemplateClock12Switchkk_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtTemplateClock24Switchhh_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtTemplateClock24SwitchKK_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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


function testDateFmtTypeDate_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtTypeTime_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtTypeDateTime_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11 13:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtShortDateComponentsM_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtShortDateComponentsN_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtShortDateComponentsN_ha_Latn_Mar() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 3,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("M", fmt.format(date));
}
function testDateFmtShortDateComponentsD_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtShortDateComponentsDM_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/11", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtShortDateComponentsDMW_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "dmw"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("L, 29/9", fmt.format(date));
}

function testDateFmtShortDateComponentsDMWY_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", date: "dmwy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2554,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("L, 29/9/54", fmt.format(date));
}


function testDateFmtFullDateComponentsY_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtFullDateComponentsM_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Satumba", fmt.format(date));
}

function testDateFmtFullDateComponentsD_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtFullDateComponentsDM_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Satumba", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Satumba, 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Satumba, 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMW_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", date: "dmw"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2015,
		month: 2,
		day: 19,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Alhamis, 19 Faburairu", fmt.format(date));
}

function testDateFmtFullDateComponentsDMWY_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full", date: "dmwy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2015,
		month: 2,
		day: 19,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Alhamis, 19 Faburairu, 2015", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtShortTimeComponentsM_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtShortTimeComponentsH_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtShortTimeComponentsMS_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtShortTimeComponentsHM_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", clock:"12", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", clock:"12", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", clock:"12", type: "time", time: "ahm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 PM", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_ha_Latn() {
    var fmt = new DateFmt({
        locale: "ha-Latn-NG", calendar: "gregorian", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 WAT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_ha_Latn() {
    var fmt = new DateFmt({
        locale: "ha-Latn-NG", calendar: "gregorian", 
        type: "time", 
        time: "ahmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 WAT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", clock:"12", type: "time", time: "ahms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 PM", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_ha_Latn() {
    var fmt = new DateFmt({
        locale: "ha-Latn-NG", calendar: "gregorian", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 WAT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_ha_Latn() {
    var fmt = new DateFmt({
        locale: "ha-Latn-NG", calendar: "gregorian", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 WAT", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtFullTimeComponentsM_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtFullTimeComponentsH_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", clock:"12", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
}

function testDateFmtFullTimeComponentsMS_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtFullTimeComponentsHM_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtFullTimeComponentsHMS_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
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

function testDateFmtFullTimeComponentsHMA_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", clock:"12", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 PM", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_ha_Latn() {
    var fmt = new DateFmt({
        locale: "ha-Latn-NG", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 WAT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_ha_Latn() {
    var fmt = new DateFmt({
        locale: "ha-Latn-NG", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 WAT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", type: "time", clock:"12", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 PM", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_ha_Latn() {
    var fmt = new DateFmt({
        locale: "ha-Latn-NG", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 WAT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_ha_Latn() {
    var fmt = new DateFmt({
        locale: "ha-Latn-NG", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 WAT", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_ha_Latn() {
    var fmt = new DateFmt({
        locale: "ha-Latn-NG", calendar: "gregorian", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 WAT", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("+30 s", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("-30 s", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+10 min", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-10 min", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+4 h", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-4 h", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+4 d", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-4 d", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+9 w", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-9 w", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+16 m", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-14 m", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("+14 y", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_ha_Latn() {
    var fmt = new DateFmt({locale: "ha-Latn-NG", calendar: "gregorian", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "ha-Latn-NG",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("-21 y", fmt.formatRelative(reference, date));
}

