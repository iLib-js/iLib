/*
 * testdatefmt_ar_SA.js - test the date formatter in saudi Arabia
 * 
 * Copyright © 2012-2015, JEDLSoft
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
function testDateFmtSimpleShort_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏٢٩/٩/٢٠١١", fmt.format(date));
}

function testDateFmtSimpleMedium_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏٢٩/٠٩/٢٠١١", fmt.format(date));
    
}

function testDateFmtSimpleLong_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏٢٩ سبتمبر، ٢٠١١", fmt.format(date));
}

function testDateFmtSimpleFull_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏٢٩ سبتمبر، ٢٠١١", fmt.format(date));
}

function testDateFmtSimpleTimeShort_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏١:٤٥ م", fmt.format(date));
}

function testDateFmtSimpleTimeMedium_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏١:٤٥ م", fmt.format(date));
}

function testDateFmtSimpleTimeLong_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏١:٤٥ م", fmt.format(date));
}

function testDateFmtSimpleTimeFull_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏١:٤٥ م", fmt.format(date));
}

function testDateFmtDateTimeSimpleShort_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏٢٩/٩/٢٠١١ ‏١:٤٥ م", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏٢٩/٠٩/٢٠١١ ‏١:٤٥ م", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏٢٩ سبتمبر، ٢٠١١ ‏١:٤٥ م", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏٢٩ سبتمبر، ٢٠١١ ‏١:٤٥ م", fmt.format(date));
}


function testDateFmtTemplateCalendar_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new JulianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", locale: "ar-SA", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", locale: "ar-SA", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", locale: "ar-SA", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", locale: "ar-SA", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", type: "date"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏٢٩/٩/٢٠١١", fmt.format(date));
}

function testDateFmtTypeTime_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏١:٤٥ م", fmt.format(date));
}

function testDateFmtTypeDateTime_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏٢٩/٩/٢٠١١ ‏١:٤٥ م", fmt.format(date));
}


function testDateFmtShortDateComponentsY_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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

function testDateFmtShortDateComponentsM_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("٩", fmt.format(date));
}

function testDateFmtShortDateComponentsN_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", date: "n"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏٢٩/٩", fmt.format(date));
}

function testDateFmtShortDateComponentsMY_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏٩/٢٠١١", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏٢٩/٩/٢٠١١", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("خ، ‏٢٩/٩", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("خ، ٢٩/٩/٢٠١١", fmt.format(date));
}


function testDateFmtFullDateComponentsY_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏٢٩ سبتمبر", fmt.format(date));
}

function testDateFmtFullDateComponentsMY_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏٢٩ سبتمبر، ٢٠١١", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("الخميس، ‏٢٩ سبتمبر", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏١:٤٥", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏١:٤٥:٣٧", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏١:٤٥ م", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ_ar_SA() {
    var fmt = new DateFmt({
		locale: "ar-SA", 
        type: "time", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏١:٤٥ AST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ_ar_SA() {
    var fmt = new DateFmt({
		locale: "ar-SA", 
        type: "time", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏١:٤٥ م AST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏١:٤٥:٣٧ م", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ_ar_SA() {
    var fmt = new DateFmt({
		locale: "ar-SA", 
        type: "time", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏١:٤٥:٣٧ AST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ_ar_SA() {
    var fmt = new DateFmt({
		locale: "ar-SA", 
        type: "time", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏١:٤٥:٣٧ م AST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
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
    var fmt = new DateFmt({locale: "ar-SA", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏١:٤٥", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏١:٤٥:٣٧", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏١:٤٥ م", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ_ar_SA() {
    var fmt = new DateFmt({
		locale: "ar-SA", 
        type: "time", 
        length: "full", 
        time: "hmz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏١:٤٥ AST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ_ar_SA() {
    var fmt = new DateFmt({
		locale: "ar-SA", 
        type: "time", 
        length: "full", 
        time: "hmaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏١:٤٥ م AST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏١:٤٥:٣٧ م", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ_ar_SA() {
    var fmt = new DateFmt({
		locale: "ar-SA", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏١:٤٥:٣٧ AST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ_ar_SA() {
    var fmt = new DateFmt({
		locale: "ar-SA", 
        type: "time", 
        length: "full", 
        time: "hmsaz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏١:٤٥:٣٧ م AST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_ar_SA() {
    var fmt = new DateFmt({
		locale: "ar-SA", 
        type: "time", 
        length: "full", 
        time: "hmsz"
    });
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute:45,
		second:37,
		millisecond: 0
	});
    assertEquals("‏١:٤٥:٣٧ AST", fmt.format(date));
}


function testDateFmtFormatRelativeWithinMinuteAfter_ar_SA() {
    var fmt = new DateFmt({
    	locale: "ar-SA",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("خلال 30 ثانية من الأيام", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinMinuteBefore_ar_SA() {
    var fmt = new DateFmt({
    	locale: "ar-SA",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("قبل 30 ثانية من الأيام", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinHourAfter_ar_SA() {
    var fmt = new DateFmt({
    	locale: "ar-SA",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("خلال 10 دقائق من الأيام", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinHourBefore_ar_SA() {
    var fmt = new DateFmt({
    	locale: "ar-SA",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("قبل 10 دقائق من الأيام", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinDayAfter_ar_SA() {
    var fmt = new DateFmt({
    	locale: "ar-SA",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("خلال 4 ساعات من الأيام", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinDayBefore_ar_SA() {
    var fmt = new DateFmt({
    	locale: "ar-SA",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("قبل 4 ساعات من الأيام", fmt.formatRelative(reference, date));
};

function testDateFmtFormatRelativeWithinFortnightAfter_ar_SA() {
    var fmt = new DateFmt({
    	locale: "ar-SA",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("خلال 4 أيام من الأيام", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinFortnightBefore_ar_SA() {
    var fmt = new DateFmt({
    	locale: "ar-SA",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("قبل 4 أيام من الأيام", fmt.formatRelative(reference, date));
};

function testDateFmtFormatRelativeWithinQuarterAfter_ar_SA() {
    var fmt = new DateFmt({
    	locale: "ar-SA",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("خلال 9 أسابيع من الأيام", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeWithinQuarterBefore_ar_SA() {
    var fmt = new DateFmt({
    	locale: "ar-SA",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("قبل 9 أسابيع من الأيام", fmt.formatRelative(reference, date));
};

function testDateFmtFormatRelativeWithinTwoYearsAfter_ar_SA() {
    var fmt = new DateFmt({
    	locale: "ar-SA",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
    	locale: "ar-SA",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("خلال 16 شهرًا من الأيام", fmt.formatRelative(reference, date));
                  
};
function testDateFmtFormatRelativeWithinTwoYearsBefore_ar_SA() {
    var fmt = new DateFmt({
    	locale: "ar-SA",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
    	locale: "ar-SA",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("قبل 14 شهرًا من الأيام", fmt.formatRelative(reference, date));
};

function testDateFmtFormatRelativeYearsAfter_ar_SA() {
    var fmt = new DateFmt({
    	locale: "ar-SA",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
    	locale: "ar-SA",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("خلال 14 سنة من الأيام", fmt.formatRelative(reference, date));
};
function testDateFmtFormatRelativeYearsBefore_ar_SA() {
    var fmt = new DateFmt({
    	locale: "ar-SA",
		length: "full"
	});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
    	locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
    	locale: "ar-SA",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("قبل 21 سنة من الأيام", fmt.formatRelative(reference, date));
};

function testDateFmtNativeSimpleShort_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "short"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29/9/2011", fmt.format(date));
}

function testDateFmtNativeSimpleMedium_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "medium"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29/09/2011", fmt.format(date));
    
}

function testDateFmtNativeSimpleLong_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "long"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29 سبتمبر، 2011", fmt.format(date));
}

function testDateFmtNativeSimpleFull_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "full"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29 سبتمبر، 2011", fmt.format(date));
}

function testDateFmtNativeSimpleTimeShort_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏1:45 م", fmt.format(date));
}

function testDateFmtNativeSimpleTimeMedium_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏1:45 م", fmt.format(date));
}

function testDateFmtNativeSimpleTimeLong_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", useNative: false,  timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏1:45 م", fmt.format(date));
}

function testDateFmtNativeSimpleTimeFull_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏1:45 م", fmt.format(date));
}

function testDateFmtNativeDateTimeSimpleShort_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29/9/2011 ‏1:45 م", fmt.format(date));
}

function testDateFmtNativeDateTimeSimpleMedium_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29/09/2011 ‏1:45 م", fmt.format(date));
}

function testDateFmtNativeDateTimeSimpleLong_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29 سبتمبر، 2011 ‏1:45 م", fmt.format(date));
}

function testDateFmtNativeDateTimeSimpleFull_ar_SA() {
    var fmt = new DateFmt({locale: "ar-SA", useNative: false,  length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new GregorianDate({
		locale: "ar-SA",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute:45,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏29 سبتمبر، 2011 ‏1:45 م", fmt.format(date));
}
