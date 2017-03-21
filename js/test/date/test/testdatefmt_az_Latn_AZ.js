/*
 * testdatefmt_az_Latn_AZ.js - test the date formatter object in Latin Azerbaijani
 *
 * Copyright © 2016, JEDLSoft
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

function testDateFmtConstructorEmpty_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ"});

    assertNotNull(fmt);
}


function testDateFmtSimpleShort_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "short"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29.09.11", fmt.format(date));
}

function testDateFmtSimpleMedium_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "medium"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 sen 2011", fmt.format(date));
}

function testDateFmtSimpleLong_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "long"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 sentyabr 2011", fmt.format(date));
}

function testDateFmtSimpleFull_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 sentyabr 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "short", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtSimpleTimeMedium_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "medium", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtSimpleTimeLong_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", timelength: "long", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtSimpleTimeFull_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtDateTimeSimpleShort_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "short", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29.09.11 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "medium", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 sen 2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "long", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });

    assertEquals("29 sentyabr 2011 13:45", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 sentyabr 2011 13:45", fmt.format(date));
}


function testDateFmtTemplateCalendar_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);

    var date = new JulianDate({
        locale: "az-Latn-AZ",
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



function testDateFmtTemplateClock12SwitchHH_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtTemplateClock12Switchkk_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtTemplateClock24Switchhh_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtTemplateClock24SwitchKK_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", template: "hh:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", template: "KK:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", template: "HH:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", template: "kk:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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


function testDateFmtTypeDate_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "date"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29.09.11", fmt.format(date));
}

function testDateFmtTypeTime_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtTypeDateTime_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29.09.11 13:45", fmt.format(date));
}


function testDateFmtShortDateComponentsY_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", date: "y"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtShortDateComponentsM_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", date: "m"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtShortDateComponentsN_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", date: "n"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtShortDateComponentsD_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", date: "d"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtShortDateComponentsDM_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", date: "dm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29.09", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", date: "my"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("09.11", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", date: "dmy"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29.09.11", fmt.format(date));
}

function testDateFmtShortDateComponentsDMW_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", date: "dmw"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29.09, 4", fmt.format(date));
}

function testDateFmtShortDateComponentsDMWY_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", date: "dmwy"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29.09.11, 4", fmt.format(date));
}


function testDateFmtFullDateComponentsY_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", date: "y"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtFullDateComponentsM_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", date: "m"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("sentyabr", fmt.format(date));
}

function testDateFmtFullDateComponentsD_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", date: "d"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtFullDateComponentsDM_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", date: "dm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 sentyabr", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", date: "my"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("Sentyabr 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", date: "dmy"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 sentyabr 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMW_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", date: "dmw"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 sentyabr, cümə axşamı", fmt.format(date));
}

function testDateFmtFullDateComponentsDMWY_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full", date: "dmwy"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 sentyabr 2011, cümə axşamı", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", time: "s"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtShortTimeComponentsM_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", time: "m"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtShortTimeComponentsH_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", time: "h"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtShortTimeComponentsMS_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", time: "ms"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtShortTimeComponentsHM_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", time: "hm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtShortTimeComponentsHMS_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", time: "hms"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtShortTimeComponentsHMA_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", time: "hma"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtShortTimeComponentsHMZ_az_Latn_AZ() {
    var fmt = new DateFmt({
        locale: "az-Latn-AZ",
        type: "time",
        time: "hmz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45 AZST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_az_Latn_AZ() {
    var fmt = new DateFmt({
        locale: "az-Latn-AZ",
        type: "time",
        time: "hmaz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45 AZST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", time: "hmsa"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtShortTimeComponentsHMSZ_az_Latn_AZ() {
    var fmt = new DateFmt({
        locale: "az-Latn-AZ",
        type: "time",
        time: "hmsz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45:37 AZST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_az_Latn_AZ() {
    var fmt = new DateFmt({
        locale: "az-Latn-AZ",
        type: "time",
        time: "hmsaz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45:37 AZST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtFullTimeComponentsM_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtFullTimeComponentsH_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtFullTimeComponentsMS_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtFullTimeComponentsHM_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtFullTimeComponentsHMS_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtFullTimeComponentsHMA_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtFullTimeComponentsHMZ_az_Latn_AZ() {
    var fmt = new DateFmt({
        locale: "az-Latn-AZ",
        type: "time",
        length: "full",
        time: "hmz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45 AZST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_az_Latn_AZ() {
    var fmt = new DateFmt({
        locale: "az-Latn-AZ",
        type: "time",
        length: "full",
        time: "hmaz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45 AZST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
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

function testDateFmtFullTimeComponentsHMSZ_az_Latn_AZ() {
    var fmt = new DateFmt({
        locale: "az-Latn-AZ",
        type: "time",
        length: "full",
        time: "hmsz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45:37 AZST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_az_Latn_AZ() {
    var fmt = new DateFmt({
        locale: "az-Latn-AZ",
        type: "time",
        length: "full",
        time: "hmsaz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45:37 AZST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_az_Latn_AZ() {
    var fmt = new DateFmt({
        locale: "az-Latn-AZ",
        type: "time",
        length: "full",
        time: "hmsz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 12,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("13:45:37 AZT", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 30,
        millisecond: 0
    });
    assertEquals("+30 saniyə", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 44,
        second: 30,
        millisecond: 0
    });
    assertEquals("-30 saniyə", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("+10 dəqiqə", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("-10 dəqiqə", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 11,
        day: 20,
        hour: 17,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("+4 saat", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 11,
        day: 20,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("-4 saat", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 11,
        day: 24,
        hour: 15,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("+4 gün", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 11,
        day: 16,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("-4 gün", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 11,
        day: 24,
        hour: 15,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("+9 həftə", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 7,
        day: 18,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("-9 həftə", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2013,
        month: 1,
        day: 24,
        hour: 15,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("+16 ay", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2010,
        month: 7,
        day: 18,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("-14 ay", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2025,
        month: 10,
        day: 24,
        hour: 15,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("+14 il", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_az_Latn_AZ() {
    var fmt = new DateFmt({locale: "az-Latn-AZ", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "az-Latn-AZ",
        year: 1990,
        month: 7,
        day: 18,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("-21 il", fmt.formatRelative(reference, date));
}

