/*
 * testlgOverideCase.js - test the loader object for whatever platform this test 
 * is running on
 * 
 * Copyright © 2016, LG Electronics.
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

var ilib = require("./../lib/ilib.js");

var DateFmt = require("./../lib/DateFmt.js");
var DateFactory = require("./../lib/DateFactory.js");
var EthiopicDate = require("./../lib/EthiopicDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");

function testDateFmtGetMeridiemsRangeName_with_bn_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "bn-IN"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};

function testDateFmtGetMeridiemsRangeName_with_gu_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "gu-IN"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};

function testDateFmtGetMeridiemsRangeName_with_kn_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "kn-IN"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};

function testDateFmtGetMeridiemsRangeName_with_ml_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "ml-IN"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};

function testDateFmtGetMeridiemsRangeName_with_mr_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "mr-IN"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};

function testDateFmtGetMeridiemsRangeName_with_or_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "or-IN"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};

function testDateFmtGetMeridiemsRangeName_with_pa_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "pa-IN"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};

function testDateFmtGetMeridiemsRangeName_with_ta_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "ta-IN"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};

function testDateFmtGetMeridiemsRangeName_with_te_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "te-IN"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};

function testDateFmtGetMeridiemsRangeName_with_ur_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "ur-IN"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};

function testDateFmtGetMeridiemsRangeName_with_as_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "as-IN"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};

function testDateFmtGetMeridiemsRangeName_with_hi_IN_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "hi-IN"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};

function testDateFmtGetMeridiemsRangeName_with_ur_PK_locale() {
    var fmt = DateFmt.getMeridiemsRange({locale: "ur-PK"});
    assertNotNull(fmt);

    assertEquals("AM", fmt[0].name);
    assertEquals("PM", fmt[1].name);
};

function testDateFmtSimpleFullOveride_am_ET() {
    var fmt = new DateFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var date = new EthiopicDate({
		locale: "am-ET",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("ግንቦት 29 ቀን 2011 ዓ.ም", fmt.format(date));
}

function testDateRngFmtAMRangeInDayFullOveride() {
    var fmt = new DateRngFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var start = new EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("ነሐሴ 30 ቀን 2011 ዓ.ም ከምሽቱ 1:45 – ከምሽቱ 2:30", fmt.format(start, end));
}

function testDateRngFmtAMRangeMultiDayFullOveride() {
    var fmt = new DateRngFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var start = new EthiopicDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});           
    assertEquals("ነሐሴ 20 – 30 ቀን 2011 ዓ.ም", fmt.format(start, end));
}

function testDateRngFmtAMRangeNextMonthFullOveride() {
    var fmt = new DateRngFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var start = new EthiopicDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new EthiopicDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});           
    assertEquals("ሐምሌ 20 – ነሐሴ 30 ቀን 2011 ዓ.ም", fmt.format(start, end));
}

function testDateRngFmtAMRangeNextYearFullOveride() {
    var fmt = new DateRngFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var start = new EthiopicDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new EthiopicDate({
		year: 2012,
		month: 1,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("ሐምሌ 20 ቀን 2011  ዓ.ም – መስከረም 30 ቀን 2012 ዓ.ም", fmt.format(start, end));
}

function testDateRngFmtAMRangeMultiYearFullOveride() {
    var fmt = new DateRngFmt({locale: "am-ET", length: "full"});
    assertNotNull(fmt);
    
    var start = new EthiopicDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new EthiopicDate({
		year: 2014,
		month: 1,
		day: 30,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("ሐምሌ ቀን 2011 ዓ.ም  – መስከረም ቀን 2014 ዓ.ም", fmt.format(start, end));
}
