/*
 * testtimezone.js - test the time zone object
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

function testTZConstructorEmpty() {
    var tz = new ilib.TimeZone();
    assertNotNull(tz);
}

function testTZConstructor() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
}

function testTZGet() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    assertObjectEquals({h: -8}, tz.getRawOffset());
    assertObjectEquals({h: 1}, tz.getDSTSavings());
}

function testTZGetStr() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    assertEquals("-8:0", tz.getRawOffsetStr());
    assertEquals("1:0", tz.getDSTSavingsStr());
}

function testTZGetEmpty() {
    var tz = new ilib.TimeZone();
    assertNotNull(tz);
    
    // should have the default time zone for the US locale
    assertEquals("America/New_York", tz.getId());
    assertObjectEquals({h:-5}, tz.getRawOffset());
    assertObjectEquals({h: 1}, tz.getDSTSavings());
}

function testTZGetEmptyStr() {
    var tz = new ilib.TimeZone();
    assertNotNull(tz);
    
    // should have the default time zone for the US locale
    assertEquals("America/New_York", tz.getId());
    assertEquals("-5:0", tz.getRawOffsetStr());
    assertEquals("1:0", tz.getDSTSavingsStr());
}

function testTZGetDefaultForLocale() {
    var tz = new ilib.TimeZone({locale: "nl-NL"});
    assertNotNull(tz);
    
    // should have the default time zone for the US locale
    assertEquals("Europe/Amsterdam", tz.getId());
    assertObjectEquals({h: 1}, tz.getRawOffset());
    assertObjectEquals({h: 1}, tz.getDSTSavings());
}

function testTZGetDefaultForLocaleStr() {
    var tz = new ilib.TimeZone({locale: "nl-NL"});
    assertNotNull(tz);
    
    // should have the default time zone for the US locale
    assertEquals("Europe/Amsterdam", tz.getId());
    assertEquals("1:0", tz.getRawOffsetStr());
    assertEquals("1:0", tz.getDSTSavingsStr());
}

function testTZGetUnknown() {
    var tz = new ilib.TimeZone({id: "America/asdfasdfasdf"});
    assertNotNull(tz);
    
    assertEquals("Europe/London", tz.getId());
    assertObjectEquals({h: 0}, tz.getRawOffset());
    assertObjectEquals({h: 1}, tz.getDSTSavings());
}

function testTZGetUnknownStr() {
    var tz = new ilib.TimeZone({id: "America/asdfasdfasdf"});
    assertNotNull(tz);
    
    assertEquals("Europe/London", tz.getId());
    assertEquals("0:0", tz.getRawOffsetStr());
    assertEquals("1:0", tz.getDSTSavingsStr());
}

function testTZDisplayNameDST() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals("PDT", tz.getDisplayName(gd, 'standard'));
}

function testTZDisplayNameDSTDefaultStyle() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals("PDT", tz.getDisplayName(gd));
}

function testTZDisplayNameDSTStyleRFC() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals("UTC-0700", tz.getDisplayName(gd, 'rfc822'));
}

function testTZDisplayNameDST() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals("PDT", tz.getDisplayName(gd, 'standard'));
}

function testTZDisplayNameStandardTime() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals("PST", tz.getDisplayName(gd, 'standard'));
}

function testTZDisplayNameStandardTimeRFC() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals("UTC-0800", tz.getDisplayName(gd, 'rfc822'));
}

function testTZDisplayNameStandardTimeESWithNoDST() {
    var tz = new ilib.TimeZone({id: "Europe/Madrid"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals("CET", tz.getDisplayName(gd, 'standard'));
}
function testTZDisplayNameStandardTimeESWithDST() {
    var tz = new ilib.TimeZone({id: "Europe/Madrid"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 6,
		day: 1
	});
    assertEquals("CEST", tz.getDisplayName(gd, 'standard'));
}

function testTZDisplayNameNoDST1() {
    var tz = new ilib.TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals("MST", tz.getDisplayName(gd, 'standard'));
}
function testTZDisplayNameNoDST2() {
    var tz = new ilib.TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals("MST", tz.getDisplayName(gd, 'standard'));
}

function testTZDisplayNameEasternRFCWithDST() {
    var tz = new ilib.TimeZone({id: "Australia/Broken_Hill"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals("UTC+1030", tz.getDisplayName(gd, 'rfc822'));
}
function testTZDisplayNameEasternRFCWithoutDST() {
    var tz = new ilib.TimeZone({id: "Australia/Broken_Hill"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 7,
		day: 1
	});
    assertEquals("UTC+0930", tz.getDisplayName(gd, 'rfc822'));
}

function testTZDisplayNameNoLetterForDST() {
    var tz = new ilib.TimeZone({id: "Europe/Berlin"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37
	});
    assertEquals("CET", tz.getDisplayName(gd, 'standard'));
}

function testTZGetOffsetDST() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertObjectEquals({h:-7}, tz.getOffset(gd));
}

function testTZGetOffsetDSTStr() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals("-7:0", tz.getOffsetStr(gd));
}

function testTZGetOffsetNoDST() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertObjectEquals({h:-8}, tz.getOffset(gd));
}
function testTZGetOffsetNoDSTStr() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals("-8:0", tz.getOffsetStr(gd));
}

function testTZGetOffsetNonDSTZone1() {
    var tz = new ilib.TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertObjectEquals({h:-7}, tz.getOffset(gd));
}
function testTZGetOffsetNonDSTZone1Str() {
    var tz = new ilib.TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals("-7:0", tz.getOffsetStr(gd));
}

function testTZGetOffsetNonDSTZone2() {
    var tz = new ilib.TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertObjectEquals({h:-7}, tz.getOffset(gd));
}
function testTZGetOffsetNonDSTZone2Str() {
    var tz = new ilib.TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals("-7:0", tz.getOffsetStr(gd));
}

function testTZGetRawOffsetDST() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    assertObjectEquals({h:-8}, tz.getRawOffset());
}
function testTZGetRawOffsetDSTStr() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    assertEquals("-8:0", tz.getRawOffsetStr());
}

function testTZGetRawOffsetNonDSTZone() {
    var tz = new ilib.TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    assertObjectEquals({h:-7}, tz.getRawOffset());
}
function testTZGetRawOffsetNonDSTZoneStr() {
    var tz = new ilib.TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    assertEquals("-7:0", tz.getRawOffsetStr());
}

function testTZGetDSTSavingsDSTZone() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    assertObjectEquals({h:1}, tz.getDSTSavings());
}
function testTZGetDSTSavingsDSTZoneStr() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    assertEquals("1:0", tz.getDSTSavingsStr());
}

function testTZGetDSTSavingsDSTZoneOdd() {
    var tz = new ilib.TimeZone({id: "Pacific/Rarotonga"});
    assertNotNull(tz);
    
    assertObjectEquals({h:0,m:30}, tz.getDSTSavings());
}
function testTZGetDSTSavingsDSTZoneOddStr() {
    var tz = new ilib.TimeZone({id: "Pacific/Rarotonga"});
    assertNotNull(tz);
    
    assertEquals("0:30", tz.getDSTSavingsStr());
}

function testTZGetDSTSavingsNonDSTZone() {
    var tz = new ilib.TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    assertObjectEquals({h:0}, tz.getDSTSavings());
}
function testTZGetDSTSavingsNonDSTZoneStr() {
    var tz = new ilib.TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    assertEquals("0:0", tz.getDSTSavingsStr());
}

function testTZGetDSTSavingsUnknown() {
    var tz = new ilib.TimeZone({id: "x/y"});
    assertNotNull(tz);
    
    // should default to Europe/London
    assertObjectEquals({h:1}, tz.getDSTSavings());
}
function testTZGetDSTSavingsUnknownStr() {
    var tz = new ilib.TimeZone({id: "x/y"});
    assertNotNull(tz);
    
    // should default to Europe/London
    assertEquals("1:0", tz.getDSTSavingsStr());
}

function testTZInDaylightTimeTrue() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 7,
		day: 1
	});
    assertTrue(tz.inDaylightTime(gd));
}
function testTZInDaylightTimeFalse() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertFalse(tz.inDaylightTime(gd));
}
function testTZInDaylightTimeNonDSTZone() {
    var tz = new ilib.TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 7,
		day: 1
	});
    assertFalse(tz.inDaylightTime(gd));
}
function testTZInDaylightTimeUnknown() {
    var tz = new ilib.TimeZone({id: "x/y"});
    assertNotNull(tz);
    
    // defaults to Europe/London
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 7,
		day: 1
	});
    assertTrue(tz.inDaylightTime(gd));
}

function testTZInDaylightTimeJustBeforeStart() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 3,
		day: 13,
		hour: 1,
		minute: 59,
		second: 59
	});
    assertFalse(tz.inDaylightTime(gd));
}
function testTZInDaylightTimeJustAfterStart() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 3,
		day: 13,
		hour: 2
	});
    assertTrue(tz.inDaylightTime(gd));
}
function testTZInDaylightTimeJustBeforeEnd() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 6,
		hour: 1,
		minute: 59,
		second: 59
	});
    assertTrue(tz.inDaylightTime(gd));
}
function testTZInDaylightTimeJustAfterEnd() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 11,
		day: 6,
		hour: 2
	});
    assertFalse(tz.inDaylightTime(gd));
}

function testTZInDaylightTimeJustBeforeStartDownUnder() {
    var tz = new ilib.TimeZone({id: "Australia/Sydney"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 2,
		hour: 1,
		minute: 59,
		second: 59
	});
    assertFalse(tz.inDaylightTime(gd));
}
function testTZInDaylightTimeJustAfterStartDownUnder() {
    var tz = new ilib.TimeZone({id: "Australia/Sydney"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 10,
		day: 2,
		hour: 2
	});
    assertTrue(tz.inDaylightTime(gd));
}
function testTZInDaylightTimeJustBeforeEndDownUnder() {
    var tz = new ilib.TimeZone({id: "Australia/Sydney"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 4,
		day: 3,
		hour: 1,
		minute: 59,
		second: 59
	});
    assertTrue(tz.inDaylightTime(gd));
}
function testTZInDaylightTimeJustAfterEndDownUnder() {
    var tz = new ilib.TimeZone({id: "Australia/Sydney"});
    assertNotNull(tz);
    
    var gd = new ilib.Date.GregDate({
		year: 2011,
		month: 4,
		day: 3,
		hour: 2
	});
    assertFalse(tz.inDaylightTime(gd));
}


function testTZUseDaylightTime() {
    var tz = new ilib.TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    assertTrue(tz.useDaylightTime());
}
function testTZUseDaylightTimeNonDST() {
    var tz = new ilib.TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    assertFalse(tz.useDaylightTime());
}
function testTZUseDaylightTimeUnknown() {
    var tz = new ilib.TimeZone({id: "x/y"});
    assertNotNull(tz);
    
    assertTrue(tz.useDaylightTime());
}

function testTZGetAvailableIds() {
    var zones = ilib.TimeZone.getAvailableIds();
    assertNotNull(zones);
    
    assertTrue(zones.length > 0);
}

function testTZGetAvailableIdsRightValues() {
    var zones = ilib.TimeZone.getAvailableIds();
    assertNotNull(zones);
    
    assertContains("Europe/London", zones);
    assertContains("America/Los_Angeles", zones);
    assertContains("Australia/Sydney", zones);
    assertContains("Asia/Tokyo", zones);
    assertContains("Africa/Cairo", zones);
}

