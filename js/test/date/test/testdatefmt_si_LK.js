/*
 * testdatefmt_si_LK.js - test the date formatter object in Sri Lanka
 *
 * Copyright © 2017, JEDLSoft
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

function testDateFmtConstructorEmpty_si_LK() {
    var fmt = new DateFmt({locale: "si-LK"});

    assertNotNull(fmt);
}


function testDateFmtSimpleShort_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "short"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtSimpleMedium_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "medium"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("2011 සැප් 29", fmt.format(date));
}

function testDateFmtSimpleLong_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "long"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("2011 සැප්තැම්බර් 29", fmt.format(date));
}

function testDateFmtSimpleFull_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("2011 සැප්තැම්බර් 29", fmt.format(date));
}

function testDateFmtSimpleTimeShort_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "short", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "medium", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtSimpleTimeLong_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", timelength: "long", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtSimpleTimeFull_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "short", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("2011-09-29 13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "medium", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("2011 සැප් 29 13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "long", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });

    assertEquals("2011 සැප්තැම්බර් 29 13.45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("2011 සැප්තැම්බර් 29 13.45", fmt.format(date));
}


function testDateFmtTemplateCalendar_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);

    var date = new JulianDate({
        locale: "si-LK",
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



function testDateFmtTemplateClock12SwitchHH_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtTemplateClock12Switchkk_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtTemplateClock24Switchhh_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtTemplateClock24SwitchKK_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", template: "hh:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", template: "KK:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", template: "HH:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", template: "kk:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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


function testDateFmtTypeDate_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "date"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtTypeTime_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtTypeDateTime_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("2011-09-29 13.45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", date: "y"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtShortDateComponentsM_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", date: "m"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

// resources(N formats) of si-LK locale are changed manually
// because of combination of glyph, substring function can't 
// extract N formats properly in toolcode for datefomat.   
function testDateFmtShortDateComponentsN_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", date: "n"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("සැ", fmt.format(date));
}

function testDateFmtShortDateComponentsD_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", date: "d"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtShortDateComponentsDM_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", date: "dm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("09-29", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", date: "my"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("2011-09", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", date: "dmy"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtShortDateComponentsDMW_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", date: "dmw"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("09-29, බ්‍ර", fmt.format(date));
}

function testDateFmtShortDateComponentsDMWY_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", date: "dmwy"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("2011-09-29, බ්‍ර", fmt.format(date));
}


function testDateFmtFullDateComponentsY_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full", date: "y"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtFullDateComponentsM_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full", date: "m"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("සැප්තැම්බර්", fmt.format(date));
}

function testDateFmtFullDateComponentsD_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full", date: "d"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtFullDateComponentsDM_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full", date: "dm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("සැප්තැම්බර් 29", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full", date: "my"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("2011 සැප්තැම්බර්", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full", date: "dmy"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("2011 සැප්තැම්බර් 29", fmt.format(date));
}

function testDateFmtFullDateComponentsDMW_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full", date: "dmw"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("සැප්තැම්බර් 29, බ්‍රහස්පතින්දා", fmt.format(date));
}

function testDateFmtFullDateComponentsDMWY_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full", date: "dmwy"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("2011 සැප්තැම්බර් 29, බ්‍රහස්පතින්දා", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "time", time: "s"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtShortTimeComponentsM_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "time", time: "m"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtShortTimeComponentsH_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "time", time: "h"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtShortTimeComponentsMS_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "time", time: "ms"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("45.37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHM_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "time", time: "hm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "time", time: "hms"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13.45.37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "time", time: "hma"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_si_LK() {
    var fmt = new DateFmt({
        locale: "si-LK",
        type: "time",
        time: "hmz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13.45 +0530", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_si_LK() {
    var fmt = new DateFmt({
        locale: "si-LK",
        type: "time",
        time: "hmaz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13.45 +0530", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "time", time: "hmsa"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13.45.37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_si_LK() {
    var fmt = new DateFmt({
        locale: "si-LK",
        type: "time",
        time: "hmsz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13.45.37 +0530", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_si_LK() {
    var fmt = new DateFmt({
        locale: "si-LK",
        type: "time",
        time: "hmsaz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13.45.37 +0530", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtFullTimeComponentsM_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtFullTimeComponentsH_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
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

function testDateFmtFullTimeComponentsMS_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("45.37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHM_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13.45.37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13.45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_si_LK() {
    var fmt = new DateFmt({
        locale: "si-LK",
        type: "time",
        length: "full",
        time: "hmz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13.45 +0530", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_si_LK() {
    var fmt = new DateFmt({
        locale: "si-LK",
        type: "time",
        length: "full",
        time: "hmaz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13.45 +0530", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13.45.37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_si_LK() {
    var fmt = new DateFmt({
        locale: "si-LK",
        type: "time",
        length: "full",
        time: "hmsz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13.45.37 +0530", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_si_LK() {
    var fmt = new DateFmt({
        locale: "si-LK",
        type: "time",
        length: "full",
        time: "hmsaz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13.45.37 +0530", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_si_LK() {
    var fmt = new DateFmt({
        locale: "si-LK",
        type: "time",
        length: "full",
        time: "hmsz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 12,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13.45.37 +0530", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 30,
        millisecond: 0
    });
    assertEquals("තත්පර 30න්", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 44,
        second: 30,
        millisecond: 0
    });
    assertEquals("තත්පර 30කට පෙර", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("මිනිත්තු 10න්", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("මිනිත්තු 10කට පෙර", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 11,
        day: 20,
        hour: 17,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("පැය 4න්", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 11,
        day: 20,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("පැය 4කට පෙර", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 11,
        day: 24,
        hour: 15,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("දින 4න්", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 11,
        day: 16,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("දින 4කට පෙර", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 11,
        day: 24,
        hour: 15,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("සති 9න්", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 7,
        day: 18,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("සති 9කට පෙර", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "si-LK",
        year: 2013,
        month: 1,
        day: 24,
        hour: 15,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("මාස 16න්", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "si-LK",
        year: 2010,
        month: 7,
        day: 18,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("මාස 14කට පෙර", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "si-LK",
        year: 2025,
        month: 10,
        day: 24,
        hour: 15,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("වසර 14න්", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_si_LK() {
    var fmt = new DateFmt({locale: "si-LK", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "si-LK",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "si-LK",
        year: 1990,
        month: 7,
        day: 18,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("වසර 21කට පෙර", fmt.formatRelative(reference, date));
}

