/*
 * testdatefmt_sw_KE.js - test the date formatter object in Kenya
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

function testDateFmtConstructorEmpty_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE"});

    assertNotNull(fmt);
}


function testDateFmtSimpleShort_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "short"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtSimpleMedium_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "medium"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 Sep 2011", fmt.format(date));
}

function testDateFmtSimpleLong_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "long"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 Septemba 2011", fmt.format(date));
}

function testDateFmtSimpleFull_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 Septemba 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "short", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtSimpleTimeMedium_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "medium", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtSimpleTimeLong_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", timelength: "long", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtSimpleTimeFull_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtDateTimeSimpleShort_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "short", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29/09/2011, 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "medium", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 Sep 2011, 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "long", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });

    assertEquals("29 Septemba 2011 saa 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 Septemba 2011 saa 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);

    var date = new JulianDate({
        locale: "sw-Latn-KE",
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



function testDateFmtTemplateClock12SwitchHH_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtTemplateClock12Switchkk_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtTemplateClock24Switchhh_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtTemplateClock24SwitchKK_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", template: "hh:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", template: "KK:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", template: "HH:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", template: "kk:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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


function testDateFmtTypeDate_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "date"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtTypeTime_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtTypeDateTime_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29/09/2011, 13:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", date: "y"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtShortDateComponentsM_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", date: "m"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtShortDateComponentsN_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", date: "n"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtShortDateComponentsD_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", date: "d"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtShortDateComponentsDM_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", date: "dm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtShortDateComponentsMY_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", date: "my"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtShortDateComponentsDMY_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", date: "dmy"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtShortDateComponentsDMW_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", date: "dmw"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("T, 29/09", fmt.format(date));
}

function testDateFmtShortDateComponentsDMWY_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", date: "dmwy"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("T, 29/09/2011", fmt.format(date));
}


function testDateFmtFullDateComponentsY_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", date: "y"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtFullDateComponentsM_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", date: "m"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("Septemba", fmt.format(date));
}

function testDateFmtFullDateComponentsD_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", date: "d"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtFullDateComponentsDM_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", date: "dm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 Septemba", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", date: "my"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("Septemba 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", date: "dmy"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 Septemba 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMW_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", date: "dmw"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("Alhamisi, 29 Septemba", fmt.format(date));
}

function testDateFmtFullDateComponentsDMWY_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full", date: "dmwy"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("Alhamisi, 29 Septemba 2011", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", time: "s"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtShortTimeComponentsM_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", time: "m"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtShortTimeComponentsH_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", time: "h"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtShortTimeComponentsMS_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", time: "ms"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtShortTimeComponentsHM_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", time: "hm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtShortTimeComponentsHMS_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", time: "hms"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtShortTimeComponentsHMA_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", time: "hma"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtShortTimeComponentsHMZ_sw_KE() {
    var fmt = new DateFmt({
        locale: "sw-Latn-KE",
        type: "time",
        time: "hmz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45 EAT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_sw_KE() {
    var fmt = new DateFmt({
        locale: "sw-Latn-KE",
        type: "time",
        time: "hmaz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45 EAT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", time: "hmsa"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtShortTimeComponentsHMSZ_sw_KE() {
    var fmt = new DateFmt({
        locale: "sw-Latn-KE",
        type: "time",
        time: "hmsz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45:37 EAT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_sw_KE() {
    var fmt = new DateFmt({
        locale: "sw-Latn-KE",
        type: "time",
        time: "hmsaz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45:37 EAT", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtFullTimeComponentsM_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtFullTimeComponentsH_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtFullTimeComponentsMS_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtFullTimeComponentsHM_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtFullTimeComponentsHMS_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtFullTimeComponentsHMA_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtFullTimeComponentsHMZ_sw_KE() {
    var fmt = new DateFmt({
        locale: "sw-Latn-KE",
        type: "time",
        length: "full",
        time: "hmz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45 EAT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_sw_KE() {
    var fmt = new DateFmt({
        locale: "sw-Latn-KE",
        type: "time",
        length: "full",
        time: "hmaz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45 EAT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
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

function testDateFmtFullTimeComponentsHMSZ_sw_KE() {
    var fmt = new DateFmt({
        locale: "sw-Latn-KE",
        type: "time",
        length: "full",
        time: "hmsz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45:37 EAT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_sw_KE() {
    var fmt = new DateFmt({
        locale: "sw-Latn-KE",
        type: "time",
        length: "full",
        time: "hmsaz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45:37 EAT", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_sw_KE() {
    var fmt = new DateFmt({
        locale: "sw-Latn-KE",
        type: "time",
        length: "full",
        time: "hmsz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 12,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45:37 EAT", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 30,
        millisecond: 0
    });
    assertEquals("baada ya sekunde 30", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 44,
        second: 30,
        millisecond: 0
    });
    assertEquals("sekunde 30 zilizopita", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("baada ya dakika 10", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("dakika 10 zilizopita", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 11,
        day: 20,
        hour: 17,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("baada ya saa 4", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 11,
        day: 20,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("saa 4 zilizopita", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 11,
        day: 24,
        hour: 15,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("baada ya siku 4", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 11,
        day: 16,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("siku 4 zilizopita", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 11,
        day: 24,
        hour: 15,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("baada ya wiki 9", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 7,
        day: 18,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("wiki 9 zilizopita", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2013,
        month: 1,
        day: 24,
        hour: 15,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("baada ya miezi 16", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2010,
        month: 7,
        day: 18,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("miezi 14 zilizopita", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2025,
        month: 10,
        day: 24,
        hour: 15,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("baada ya miaka 14", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_sw_KE() {
    var fmt = new DateFmt({locale: "sw-Latn-KE", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "sw-Latn-KE",
        year: 1990,
        month: 7,
        day: 18,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("miaka 21 zilizopita", fmt.formatRelative(reference, date));
}

