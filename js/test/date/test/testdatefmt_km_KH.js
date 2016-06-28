/*
 * testdatefmt_km_KH.js - test the date formatter object in Cambodian
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

function testDateFmtConstructorEmpty_km_KH() {
    var fmt = new DateFmt({locale: "km-KH"});

    assertNotNull(fmt);
}


function testDateFmtSimpleShort_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "short"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtSimpleMedium_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "medium"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 កញ្ញា 2011", fmt.format(date));
}

function testDateFmtSimpleLong_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "long"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 កញ្ញា 2011", fmt.format(date));
}

function testDateFmtSimpleFull_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 កញ្ញា 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "short", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("1:45 ល្ងាច", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "medium", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("1:45 ល្ងាច", fmt.format(date));
}

function testDateFmtSimpleTimeLong_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", timelength: "long", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("1:45 ល្ងាច", fmt.format(date));
}

function testDateFmtSimpleTimeFull_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("1:45 ល្ងាច", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "short", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29/9/11, 1:45 ល្ងាច", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "medium", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 កញ្ញា 2011, 1:45 ល្ងាច", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "long", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });

    assertEquals("29 កញ្ញា 2011 នៅ 1:45 ល្ងាច", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 កញ្ញា 2011 នៅ 1:45 ល្ងាច", fmt.format(date));
}


function testDateFmtTemplateCalendar_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);

    var date = new JulianDate({
        locale: "km-KH",
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



function testDateFmtTemplateClock12SwitchHH_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtTemplateClock12Switchkk_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtTemplateClock24Switchhh_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtTemplateClock24SwitchKK_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12hh_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", template: "hh:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault12KK_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", template: "KK:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24HH_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", template: "HH:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtTemplateNoClockNotFollowLocaleDefault24kk_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", template: "kk:mm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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


function testDateFmtTypeDate_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "date"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtTypeTime_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "time"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("1:45 ល្ងាច", fmt.format(date));
}

function testDateFmtTypeDateTime_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "datetime"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29/9/11, 1:45 ល្ងាច", fmt.format(date));
}


function testDateFmtShortDateComponentsY_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", date: "y"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtShortDateComponentsM_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", date: "m"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtShortDateComponentsN_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", date: "n"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtShortDateComponentsD_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", date: "d"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtShortDateComponentsDM_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", date: "dm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtShortDateComponentsMY_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", date: "my"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtShortDateComponentsDMY_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", date: "dmy"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtShortDateComponentsDMW_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", date: "dmw"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("5 29/9", fmt.format(date));
}

function testDateFmtShortDateComponentsDMWY_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", date: "dmwy"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("5 29/9/11", fmt.format(date));
}


function testDateFmtFullDateComponentsY_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full", date: "y"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtFullDateComponentsM_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full", date: "m"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("កញ្ញា", fmt.format(date));
}

function testDateFmtFullDateComponentsD_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full", date: "d"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtFullDateComponentsDM_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full", date: "dm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 កញ្ញា", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full", date: "my"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("កញ្ញា 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full", date: "dmy"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("29 កញ្ញា 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMW_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full", date: "dmw"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("ព្រហស្បតិ៍ 29 កញ្ញា", fmt.format(date));
}

function testDateFmtFullDateComponentsDMWY_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full", date: "dmwy"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    assertEquals("ព្រហស្បតិ៍ 29 កញ្ញា 2011", fmt.format(date));
}


function testDateFmtShortTimeComponentsS_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "time", time: "s"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtShortTimeComponentsM_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "time", time: "m"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtShortTimeComponentsH_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "time", time: "h"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtShortTimeComponentsMS_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "time", time: "ms"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtShortTimeComponentsHM_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "time", time: "hm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtShortTimeComponentsHMS_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "time", time: "hms"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtShortTimeComponentsHMA_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "time", time: "hma"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("1:45 ល្ងាច", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_km_KH() {
    var fmt = new DateFmt({
        locale: "km-KH",
        type: "time",
        time: "hmz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("1:45 ICT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_km_KH() {
    var fmt = new DateFmt({
        locale: "km-KH",
        type: "time",
        time: "hmaz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("1:45 ល្ងាច ICT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "time", time: "hmsa"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("1:45:37 ល្ងាច", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_km_KH() {
    var fmt = new DateFmt({
        locale: "km-KH",
        type: "time",
        time: "hmsz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("1:45:37 ICT", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_km_KH() {
    var fmt = new DateFmt({
        locale: "km-KH",
        type: "time",
        time: "hmsaz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("1:45:37 ល្ងាច ICT", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtFullTimeComponentsM_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtFullTimeComponentsH_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtFullTimeComponentsMS_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtFullTimeComponentsHM_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtFullTimeComponentsHMS_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
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

function testDateFmtFullTimeComponentsHMA_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("1:45 ល្ងាច", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_km_KH() {
    var fmt = new DateFmt({
        locale: "km-KH",
        type: "time",
        length: "full",
        time: "hmz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("1:45 ICT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_km_KH() {
    var fmt = new DateFmt({
        locale: "km-KH",
        type: "time",
        length: "full",
        time: "hmaz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("1:45 ល្ងាច ICT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("1:45:37 ល្ងាច", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_km_KH() {
    var fmt = new DateFmt({
        locale: "km-KH",
        type: "time",
        length: "full",
        time: "hmsz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("1:45:37 ICT", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_km_KH() {
    var fmt = new DateFmt({
        locale: "km-KH",
        type: "time",
        length: "full",
        time: "hmsaz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("1:45:37 ល្ងាច ICT", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_km_KH() {
    var fmt = new DateFmt({
        locale: "km-KH",
        type: "time",
        length: "full",
        time: "hmsz"
    });
    assertNotNull(fmt);

    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 12,
        day: 29,
        hour: 13,
        minute: 45,
        second: 37,
        millisecond: 0
    });
    assertEquals("1:45:37 ICT", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 30,
        millisecond: 0
    });
    assertEquals("ក្នុង​រយៈ​ពេល 30 វិនាទី", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 44,
        second: 30,
        millisecond: 0
    });
    assertEquals("30 វិនាទី​មុន", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("ក្នុង​រយៈ​ពេល 10 នាទី", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("10 នាទី​មុន", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 11,
        day: 20,
        hour: 17,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("ក្នុង​រយៈ​ពេល 4 ម៉ោង", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 11,
        day: 20,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("4 ម៉ោង​មុន", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 11,
        day: 24,
        hour: 15,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("ក្នុង​រយៈ​ពេល 4 ថ្ងៃ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 11,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 11,
        day: 16,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("4 ថ្ងៃ​មុន", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 11,
        day: 24,
        hour: 15,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("ក្នុង​រយៈ​ពេល 9 សប្ដាហ៍", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 7,
        day: 18,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("9 សប្ដាហ៍​មុន", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "km-KH",
        year: 2013,
        month: 1,
        day: 24,
        hour: 15,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("ក្នុង​រយៈ​ពេល 16 ខែ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "km-KH",
        year: 2010,
        month: 7,
        day: 18,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("14 ខែ​មុន", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "km-KH",
        year: 2025,
        month: 10,
        day: 24,
        hour: 15,
        minute: 55,
        second: 0,
        millisecond: 0
    });
    assertEquals("ក្នុង​រយៈ​ពេល 14 ឆ្នាំ", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_km_KH() {
    var fmt = new DateFmt({locale: "km-KH", length: "full"});
    assertNotNull(fmt);

    var reference = new GregorianDate({
        locale: "km-KH",
        year: 2011,
        month: 9,
        day: 20,
        hour: 13,
        minute: 45,
        second: 0,
        millisecond: 0
    });
    var date = new GregorianDate({
        locale: "km-KH",
        year: 1990,
        month: 7,
        day: 18,
        hour: 9,
        minute: 35,
        second: 0,
        millisecond: 0
    });
    assertEquals("21 ឆ្នាំ​មុន", fmt.formatRelative(reference, date));
}

