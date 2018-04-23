/*
 * testtimezone.js - test the time zone object
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

var ilib = require("./../lib/ilib.js");
var TimeZone = require("./../lib/TimeZone.js");
var LocaleInfo = require("./../lib/LocaleInfo.js");
var Loader = require("./../lib/Loader.js");
var IString = require("./../lib/IString.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateFactory = require("./../lib/DateFactory.js");

function getAvailableMocker(paths, sync, params, callback) {
}
getAvailableMocker.prototype = new ilib.Loader();
getAvailableMocker.prototype.constructor = getAvailableMocker;
getAvailableMocker.prototype.listAvailableFiles = function(sync, cb) {
    var ret = {"resources": "*"}; 
    if (typeof(cb) === 'function') {
        cb(ret);
    }
    return ret;
};

function mockLoader (paths, sync, params, callback) {
    var data = [];
    
    data.push(ilib.data.localeinfo); // for the generic, shared stuff
    paths.shift();
    paths.forEach(function (path) {
        data.push((path.indexOf('zz') === -1) ? undefined : {
            "clock": "24",
            "currencyFormats": {
                "common": "common {s} {n}",
                "iso": "iso {s} {n}"
            },
            "units": "metric",
            "calendar": "hebrew",
            "firstDayOfWeek": 4,
            "currency": "JPY",
            "timezone": "Asia/Tokyo",
            "numfmt": {
                "decimalChar": ".",
                "groupChar": ",",
                "groupSize": 4,
                "pctFmt": "{n} %",
                "pctChar": "%"
            },
            "locale": "zxx-XX"
        });
    });
    if (typeof(callback) !== 'undefined') {
        callback.call(this, data);  
    }
    return data;
}

function mockLoader2(paths, sync, params, callback) {
    var data = [];
    
    data.push({
        "o": "-8:0",
        "f": "{c}",
        "s": {
            "c": "PDT",
            "j": 2456725.9166666665,
            "v": 60
        },
        "e": {
            "c": "PST",
            "j": 2456963.875
        }
    });
    if (typeof(callback) !== 'undefined') {
        callback.call(this, data);  
    }
    return data;
}

var oldLoader = ilib._load;

function testTZConstructorEmpty() {
    var tz = new TimeZone();
    assertNotNull(tz);
}

function testTZConstructor() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
}

function testTZConstructorWithIlibString() {
    var tz = new TimeZone({id: new IString("America/Los_Angeles")});
    assertNotNull(tz);
}

function testTZConstructorLocalWithIlibString() {
    var tz = new TimeZone({id: new IString("local")});
    assertNotNull(tz);
    
    assertTrue(tz.isLocal);
}

function testTZGet() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    assertObjectEquals({h: -8}, tz.getRawOffset());
    assertObjectEquals({h: 1}, tz.getDSTSavings());
}

function testTZGetWithIlibString() {
    var tz = new TimeZone({id: new IString("America/Los_Angeles")});
    assertNotNull(tz);
    
    assertObjectEquals({h: -8}, tz.getRawOffset());
    assertObjectEquals({h: 1}, tz.getDSTSavings());
}

function testTZGetStr() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    assertEquals("-8:0", tz.getRawOffsetStr());
    assertEquals("1:0", tz.getDSTSavingsStr());
}

function testTZGetEmpty() {
    var tz = new TimeZone();
    assertNotNull(tz);
    
    // should have the default time zone for the US locale
    assertEquals("America/New_York", tz.getId());
    assertObjectEquals({h:-5}, tz.getRawOffset());
    assertObjectEquals({h: 1}, tz.getDSTSavings());
}

function testTZGetEmptyStr() {
    var tz = new TimeZone();
    assertNotNull(tz);
    
    // should have the default time zone for the US locale
    assertEquals("America/New_York", tz.getId());
    assertEquals("-5:0", tz.getRawOffsetStr());
    assertEquals("1:0", tz.getDSTSavingsStr());
}

function testTZGetDefaultForLocale() {
    var tz = new TimeZone({locale: "nl-NL"});
    assertNotNull(tz);
    
    // should have the default time zone for the US locale
    assertEquals("Europe/Amsterdam", tz.getId());
    assertObjectEquals({h: 1}, tz.getRawOffset());
    assertObjectEquals({h: 1}, tz.getDSTSavings());
}

function testTZGetDefaultForLocaleStr() {
    var tz = new TimeZone({locale: "nl-NL"});
    assertNotNull(tz);
    
    // should have the default time zone for the US locale
    assertEquals("Europe/Amsterdam", tz.getId());
    assertEquals("1:0", tz.getRawOffsetStr());
    assertEquals("1:0", tz.getDSTSavingsStr());
}

function testTZGetUnknown() {
    var tz = new TimeZone({id: "America/asdfasdfasdf"});
    assertNotNull(tz);
    
    assertEquals("Etc/UTC", tz.getId());
    assertObjectEquals({h: 0}, tz.getRawOffset());
    assertObjectEquals({h: 0}, tz.getDSTSavings());
}

function testTZGetUnknownStr() {
    var tz = new TimeZone({id: "America/asdfasdfasdf"});
    assertNotNull(tz);
    
    assertEquals("Etc/UTC", tz.getId());
    assertEquals("0:0", tz.getRawOffsetStr());
    assertEquals("0:0", tz.getDSTSavingsStr());
}

function testTZDisplayNameDSTStandardStyle() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals("PDT", tz.getDisplayName(gd, 'standard'));
}

function testTZDisplayNameDSTDefaultStyle() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals("PDT", tz.getDisplayName(gd));
}

function testTZDisplayNameDSTStyleRFC() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals("UTC-0700", tz.getDisplayName(gd, 'rfc822'));
}

function testTZDisplayNameDSTDaylightStandardStyle() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals("PDT", tz.getDisplayName(gd, 'standard'));
}

function testTZDisplayNameDSTDaylightLongStyle() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals("Pacific Daylight Time", tz.getDisplayName(gd, 'long'));
}

function testTZDisplayNameStandardTime() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals("PST", tz.getDisplayName(gd, 'standard'));
}

function testTZDisplayNameStandardTimeAmbiguous() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    // this is in the magic overlap hour at the end of DST
    var gd = new GregorianDate({
    	timezone: "America/Los_Angeles",
		year: 2014,
		month: 11,
		day: 2,
		hour: 1,
		minute: 30,
		dst: false
	});
    assertEquals("PST", tz.getDisplayName(gd, 'standard'));
}

function testTZDisplayNameDaylightTimeAmbiguous() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    // this is in the magic overlap hour at the end of DST
    var gd = new GregorianDate({
    	timezone: "America/Los_Angeles",
		year: 2014,
		month: 11,
		day: 2,
		hour: 1,
		minute: 30,
		dst: true
	});
    assertEquals("PDT", tz.getDisplayName(gd, 'standard'));
}

function testTZDisplayNameStandardTimeRFC() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals("UTC-0800", tz.getDisplayName(gd, 'rfc822'));
}

function testTZDisplayNameStandardTimeLong() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals("Pacific Standard Time", tz.getDisplayName(gd, 'long'));
}

function testTZDisplayNameStandardTimeESWithNoDST() {
    var tz = new TimeZone({id: "Europe/Madrid"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals("CET", tz.getDisplayName(gd, 'standard'));
}
function testTZDisplayNameStandardTimeESWithDST() {
    var tz = new TimeZone({id: "Europe/Madrid"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 6,
		day: 1
	});
    assertEquals("CEST", tz.getDisplayName(gd, 'standard'));
}

function testTZDisplayNameNoDST1() {
    var tz = new TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals("MST", tz.getDisplayName(gd, 'standard'));
}
function testTZDisplayNameNoDST2() {
    var tz = new TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals("MST", tz.getDisplayName(gd, 'standard'));
}

function testTZDisplayNameEasternRFCWithDST() {
    var tz = new TimeZone({id: "Australia/Broken_Hill"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals("UTC+1030", tz.getDisplayName(gd, 'rfc822'));
}
function testTZDisplayNameEasternRFCWithoutDST() {
    var tz = new TimeZone({id: "Australia/Broken_Hill"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 7,
		day: 1
	});
    assertEquals("UTC+0930", tz.getDisplayName(gd, 'rfc822'));
}

function testTZDisplayNameNoLetterForDST() {
    var tz = new TimeZone({id: "Europe/Berlin"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
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
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertObjectEquals({h:-7}, tz.getOffset(gd));
}

function testTZGetOffsetRightBeforeDSTStart() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);

    var date = new GregorianDate({
		timezone: "Etc/UTC",
		unixtime: 1394359140000 // this is 3/9/2014 at 1:59am
	});
    
    assertObjectEquals({h:-8}, tz.getOffset(date));
}

function testTZGetOffsetRightAfterDSTStart() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);

    var date = new GregorianDate({
    	timezone: "Etc/UTC",
		unixtime: 1394359260000
	});
    
    // 2 minutes later
    assertObjectEquals({h:-7}, tz.getOffset(date));
}

function testTZGetOffsetRightBeforeDSTEnd() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);

    var date = new GregorianDate({
    	timezone: "Etc/UTC",
		unixtime: 1414918740000 // this is 11/2/2014 at 1:59am
	});
    
    assertObjectEquals({h:-7}, tz.getOffset(date));
}

function testTZGetOffsetRightAfterDSTEnd() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);

    var date = new GregorianDate({
    	timezone: "Etc/UTC",
		unixtime: 1414918860000
	});
    
    // 2 minutes later
    assertObjectEquals({h:-8}, tz.getOffset(date));
}

function testTZGetOffsetRightAfterDST() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
    	timezone: "America/Los_Angeles",
		year: 2014,
		month: 3,
		day: 9,
		hour: 3,
		minute: 1
	});
    assertObjectEquals({h:-7}, tz.getOffset(gd));
}

function testTZGetOffsetDSTStr() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals("-7:0", tz.getOffsetStr(gd));
}

function testTZGetOffsetNoDST() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertObjectEquals({h:-8}, tz.getOffset(gd));
}
function testTZGetOffsetNoDSTStr() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals("-8:0", tz.getOffsetStr(gd));
}

function testTZGetOffsetNonDSTZone1() {
    var tz = new TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertObjectEquals({h:-7}, tz.getOffset(gd));
}
function testTZGetOffsetNonDSTZone1Str() {
    var tz = new TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals("-7:0", tz.getOffsetStr(gd));
}

function testTZGetOffsetNonDSTZone2() {
    var tz = new TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertObjectEquals({h:-7}, tz.getOffset(gd));
}
function testTZGetOffsetNonDSTZone2Str() {
    var tz = new TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals("-7:0", tz.getOffsetStr(gd));
}

function testTZGetRawOffsetDST() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    assertObjectEquals({h:-8}, tz.getRawOffset());
}
function testTZGetRawOffsetDSTStr() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    assertEquals("-8:0", tz.getRawOffsetStr());
}

function testTZGetRawOffsetNonDSTZone() {
    var tz = new TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    assertObjectEquals({h:-7}, tz.getRawOffset());
}
function testTZGetRawOffsetNonDSTZoneStr() {
    var tz = new TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    assertEquals("-7:0", tz.getRawOffsetStr());
}

function testTZGetDSTSavingsDSTZone() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    assertObjectEquals({h:1}, tz.getDSTSavings());
}
function testTZGetDSTSavingsDSTZoneStr() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    assertEquals("1:0", tz.getDSTSavingsStr());
}

function testTZGetDSTSavingsDSTZoneOdd() {
    var tz = new TimeZone({id: "Australia/Lord_Howe"});
    assertNotNull(tz);
    
    assertObjectEquals({h:0,m:30}, tz.getDSTSavings());
}
function testTZGetDSTSavingsDSTZoneOddStr() {
    var tz = new TimeZone({id: "Australia/Lord_Howe"});
    assertNotNull(tz);
    
    assertEquals("0:30", tz.getDSTSavingsStr());
}

function testTZGetDSTSavingsNonDSTZone() {
    var tz = new TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    assertObjectEquals({h:0}, tz.getDSTSavings());
}
function testTZGetDSTSavingsNonDSTZoneStr() {
    var tz = new TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    assertEquals("0:0", tz.getDSTSavingsStr());
}

function testTZGetDSTSavingsUnknown() {
    var tz = new TimeZone({id: "x/y"});
    assertNotNull(tz);
    
    // should default to Etc/UTC
    assertObjectEquals({h:0}, tz.getDSTSavings());
}
function testTZGetDSTSavingsUnknownStr() {
    var tz = new TimeZone({id: "x/y"});
    assertNotNull(tz);
    
    // should default to Etc/UTC
    assertEquals("0:0", tz.getDSTSavingsStr());
}

function testTZInDaylightTimeTrue() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
    	timezone: "America/Los_Angeles",
		year: 2011,
		month: 7,
		day: 1
	});
    assertTrue(tz.inDaylightTime(gd));
}
function testTZInDaylightTimeFalse() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
    	timezone: "America/Los_Angeles",
		year: 2011,
		month: 12,
		day: 1
	});
    assertFalse(tz.inDaylightTime(gd));
}

function testTZInDaylightTimeLocalTrue() {
	var summer = new Date(2014, 6, 1);
	var winter = new Date(2014, 0, 1);
	// only perform this test if we are in a zone where there is DST
	if (summer.getTimezoneOffset() !== winter.getTimezoneOffset()) {
	    var tz = new TimeZone({id: "local"});
	    assertNotNull(tz);
	    
	    var gd = new GregorianDate({
	    	timezone: "local",
			year: 2011,
			month: 7,
			day: 1
		});
	    assertTrue(tz.inDaylightTime(gd));
	}
}
function testTZInDaylightTimeLocalFalse() {
	var summer = new Date(2014, 6, 1);
	var winter = new Date(2014, 0, 1);
	// only perform this test if we are in a zone where there is DST
	if (summer.getTimezoneOffset() !== winter.getTimezoneOffset()) {
	    var tz = new TimeZone({id: "local"});
	    assertNotNull(tz);
	    
	    var gd = new GregorianDate({
	    	timezone: "local",
			year: 2011,
			month: 12,
			day: 1
		});
	    assertFalse(tz.inDaylightTime(gd));
	}
}

function testTZInDaylightTimeNonDSTZone() {
    var tz = new TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
    	timezone: "Australia/Phoenix",
		year: 2011,
		month: 7,
		day: 1
	});
    assertFalse(tz.inDaylightTime(gd));
}
function testTZInDaylightTimeUnknown() {
    var tz = new TimeZone({id: "x/y"});
    assertNotNull(tz);
    
    // defaults to Etc/UTC
    var gd = new GregorianDate({
		year: 2011,
		month: 7,
		day: 1
	});
    assertFalse(tz.inDaylightTime(gd));
}

function testTZInDaylightTimeJustBeforeStart() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
    	timezone: "America/Los_Angeles",
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
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
    	timezone: "America/Los_Angeles",
		year: 2011,
		month: 3,
		day: 13,
		hour: 2
	});
    assertTrue(tz.inDaylightTime(gd));
}
function testTZInDaylightTimeJustBeforeEnd() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
    	timezone: "America/Los_Angeles",
		year: 2014,
		month: 11,
		day: 2,
		hour: 1,
		minute: 59,
		second: 59
	});
    assertTrue(tz.inDaylightTime(gd));
}
function testTZInDaylightTimeJustAfterEnd() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
    	timezone: "America/Los_Angeles",
		year: 2014,
		month: 11,
		day: 2,
		hour: 2
	});
    assertFalse(tz.inDaylightTime(gd));
}

function testTZInDaylightTimeJustBeforeStartDownUnder() {
    var tz = new TimeZone({id: "Australia/Sydney"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
    	timezone: "Australia/Sydney",
		year: 2014,
		month: 10,
		day: 5,
		hour: 1,
		minute: 59,
		second: 59
	});
    assertFalse(tz.inDaylightTime(gd));
}

function testTZInDaylightTimeJustAfterStartDownUnder() {
    var tz = new TimeZone({id: "Australia/Sydney"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
    	timezone: "Australia/Sydney",
		year: 2014,
		month: 10,
		day: 5,
		hour: 2
	});
    assertTrue(tz.inDaylightTime(gd));
}
function testTZInDaylightTimeJustBeforeEndDownUnder() {
    var tz = new TimeZone({id: "Australia/Sydney"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
    	timezone: "Australia/Sydney",
		year: 2011,
		month: 4,
		day: 3,
		hour: 2,
		minute: 59,
		second: 59
	});
    assertTrue(tz.inDaylightTime(gd));
}
function testTZInDaylightTimeJustAfterEndDownUnder() {
    var tz = new TimeZone({id: "Australia/Sydney"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
    	timezone: "Australia/Sydney",
		year: 2011,
		month: 4,
		day: 3,
		hour: 3
	});
    assertFalse(tz.inDaylightTime(gd));
}


function testTZUseDaylightTime() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    assertTrue(tz.useDaylightTime());
}
function testTZUseDaylightTimeNonDST() {
    var tz = new TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    assertFalse(tz.useDaylightTime());
}
function testTZUseDaylightTimeUnknown() {
    var tz = new TimeZone({id: "x/y"});
    assertNotNull(tz);
    
    assertFalse(tz.useDaylightTime());
}

function testTZGetAvailableIds() {
    var zones = TimeZone.getAvailableIds();
    assertNotNull(zones);
    
    assertTrue(zones.length > 0);
}

function testTZGetAvailableIdsRightValues() {
    var zones = TimeZone.getAvailableIds();
    assertNotNull(zones);
    
    assertContains("Europe/London", zones);
    assertContains("America/Los_Angeles", zones);
    assertContains("Australia/Sydney", zones);
    assertContains("Asia/Tokyo", zones);
    assertContains("Africa/Cairo", zones);
}

function testTZGetAvailableIdsNoFilterContainsLocal() {
    var zones = TimeZone.getAvailableIds();
    assertNotNull(zones);
    
    assertTrue(zones.indexOf("local") != -1);
}

function testGetAvailableTimeZonesWithLoader() {
	ilib.setLoaderCallback(new getAvailableMocker());
	ilib.data.timezones = []; // clear the timezones cache
	var ol = oldLoader;
	
	try {
		var zones = TimeZone.getAvailableIds();
		assertEquals(1, zones.length);
		assertContains("local", zones);
	} finally {
		// clean up
		ilib.data.timezones = []; // clear the timezones cache
		
		ilib.setLoaderCallback(ol);
		assertTrue(true);
	}
}

function testTZGetAvailableIdsByCountryRightLength() {
    var zones = TimeZone.getAvailableIds("US");
    assertNotNull(zones);
    
    assertEquals(48, zones.length);
}

function testTZGetAvailableIdsWithFilterContainsNoLocal() {
    var zones = TimeZone.getAvailableIds("US");
    assertNotNull(zones);
    
    assertTrue(zones.indexOf("local") == -1);
}

function testTZGetAvailableIdsByCountryRightContents() {
    var zones = TimeZone.getAvailableIds("US");
    assertNotNull(zones);
    
    var expected = [
		"America/New_York",
		"America/Detroit",
		"America/Kentucky/Louisville",
		"America/Kentucky/Monticello",
		"America/Indiana/Indianapolis",
		"America/Indiana/Vincennes",
		"America/Indiana/Winamac",
		"America/Indiana/Marengo",
		"America/Indiana/Petersburg",
		"America/Indiana/Vevay",
		"America/Chicago",
		"America/Indiana/Tell_City",
		"America/Indiana/Knox",
		"America/Menominee",
		"America/North_Dakota/Center",
		"America/North_Dakota/New_Salem",
		"America/North_Dakota/Beulah",
		"America/Denver",
		"America/Boise",
		"America/Phoenix",
		"America/Los_Angeles",
		"America/Anchorage",
		"America/Juneau",
		"America/Sitka",
		"America/Yakutat",
		"America/Nome",
		"America/Adak",
		"America/Metlakatla",
		"Pacific/Honolulu",
		"America/Atka",
		"America/Fort_Wayne",
		"America/Indianapolis",
		"America/Knox_IN",
		"America/Louisville",
		"America/Shiprock",
		"Navajo",
		"Pacific/Johnston",
		"US/Alaska",
		"US/Aleutian",
		"US/Arizona",
		"US/Central",
		"US/East-Indiana",
		"US/Eastern",
		"US/Hawaii",
		"US/Indiana-Starke",
		"US/Michigan",
		"US/Mountain",
		"US/Pacific"
    ];
    
    assertArrayEqualsIgnoringOrder(expected, zones);
}

function testTZGetAvailableIdsByCountry2RightLength() {
    var zones = TimeZone.getAvailableIds("SG");
    assertNotNull(zones);
    
    assertEquals(2, zones.length);
}

function testTZGetAvailableIdsByCountry2RightContents() {
    var zones = TimeZone.getAvailableIds("SG");
    assertNotNull(zones);
    
    var expected = [
		"Asia/Singapore",
		"Singapore"
	];
    
    assertArrayEqualsIgnoringOrder(expected, zones);
}

function testTZGetAvailableIdsByCountry3RightLength() {
    var zones = TimeZone.getAvailableIds("IN");
    assertNotNull(zones);
    
    assertEquals(2, zones.length);
}

function testTZGetAvailableIdsByCountry3RightContents() {
    var zones = TimeZone.getAvailableIds("IN");
    assertNotNull(zones);
    
    var expected = [
		"Asia/Kolkata",
		"Asia/Calcutta"
	];
    
    assertArrayEqualsIgnoringOrder(expected, zones);
}

function testTZUseDaylightTimeID() {
    var tz = new TimeZone({id: "Asia/Jakarta"});
    assertNotNull(tz);
    
    assertFalse(tz.useDaylightTime());
}

function testTZDisplayNameStandardID() {
    var tz = new TimeZone({id: "Asia/Jakarta"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37
	});
    assertEquals("WIB", tz.getDisplayName(gd, 'standard'));
}

function testTZDisplayNameLongID() {
    var tz = new TimeZone({id: "Asia/Jakarta"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37
	});
    assertEquals("SE Asia Standard Time", tz.getDisplayName(gd, 'long'));
}

function testTZConstructUsingOffset() {
   var tz = new TimeZone({offset: 420});
   assertNotNull(tz);
}

function testTZOffsetGetRawOffset() {
   var tz = new TimeZone({offset: 420});
   assertNotNull(tz);
   
   var offset = tz.getRawOffset();
   assertNotUndefined(offset);
   assertEquals(7, offset.h);
   assertUndefined(offset.m);
}

function testTZOffsetGetRawOffsetNegative() {
   var tz = new TimeZone({offset: -450});
   assertNotNull(tz);
   
   var offset = tz.getRawOffset();
   assertNotUndefined(offset);

   assertEquals(-7, offset.h);
   assertEquals(30, offset.m);
}

function testTZOffsetGetRawOffsetStr() {
   var tz = new TimeZone({offset: 420});
   assertNotNull(tz);
   
   assertEquals("7:0", tz.getRawOffsetStr());
}

function testTZOffsetGetOffsetWinter() {
   var tz = new TimeZone({offset: 450});
   assertNotNull(tz);
   
   var date = DateFactory({
      year: 2012,
      month: 1,
      day: 1
   });
   
   var offset = tz.getOffset(date);
   assertNotUndefined(offset);

   assertEquals(7, offset.h);
   assertEquals(30, offset.m);
}

function testTZOffsetGetOffsetSummer() {
   var tz = new TimeZone({offset: 450});
   assertNotNull(tz);
   
   var date = DateFactory({
      year: 2012,
      month: 6,
      day: 1
   });
   
   var offset = tz.getOffset(date);
   assertNotUndefined(offset);

   // should be the same as winter because we can't determine DST
   assertEquals(7, offset.h);
   assertEquals(30, offset.m);
}

function testTZOffsetGetDisplayNameStandard() {
   var tz = new TimeZone({offset: 450});
   assertNotNull(tz);
   
   var date = DateFactory({
      year: 2012,
      month: 6,
      day: 1
   });

   // should give rfc style because we don't know the name of the time zone 
   assertEquals("UTC+0730", tz.getDisplayName(date, "standard"));
}

function testTZOffsetGetDisplayNameRFC() {
   var tz = new TimeZone({offset: 450});
   assertNotNull(tz);
   
   var date = DateFactory({
      year: 2012,
      month: 6,
      day: 1
   });

   assertEquals("UTC+0730", tz.getDisplayName(date, "rfc822"));
}

function testTZOffsetGetDisplayNameRFCNegative() {
   var tz = new TimeZone({offset: -510});
   assertNotNull(tz);
   
   var date = DateFactory({
      year: 2012,
      month: 6,
      day: 1
   });

   assertEquals("UTC-0830", tz.getDisplayName(date, "rfc822"));
}

function testTZOffsetGetId() {
   var tz = new TimeZone({offset: 450});
   assertNotNull(tz);
   
   // should give the same as the rfc style display name because we don't know the name of the time zone 
   assertEquals("UTC+0730", tz.getId());
}

function testTZOffsetGetDSTSavings() {
   var tz = new TimeZone({offset: 450});
   assertNotNull(tz);
   
   assertNotUndefined(tz.getDSTSavings());
   assertEquals(0, tz.getDSTSavings().h);
}

function testTZOffsetGetDSTSavingsStr() {
   var tz = new TimeZone({offset: 450});
   assertNotNull(tz);
   
   assertNotUndefined(tz.getDSTSavingsStr());
   assertEquals("0:0", tz.getDSTSavingsStr());
}

function testTZOffsetGetUseDaylightTime() {
   var tz = new TimeZone({offset: 450});
   assertNotNull(tz);
   
   assertFalse(tz.useDaylightTime());
}

function testTZOffsetInDaylightTimeWinter() {
   var tz = new TimeZone({offset: 450});
   assertNotNull(tz);
   
   var date = DateFactory({
      year: 2012,
      month: 1,
      day: 1
   });
   
   assertFalse(tz.inDaylightTime(date));
}

function testTZOffsetInDaylightTimeSummer() {
   var tz = new TimeZone({offset: 450});
   assertNotNull(tz);
   
   var date = DateFactory({
      year: 2012,
      month: 6,
      day: 1
   });
   
   // should be the same as winter because we can't determine DST
   assertFalse(tz.inDaylightTime(date));
}

function testTZConstructUsingLocalID() {
   var tz = new TimeZone({id: "local"});
   assertNotNull(tz);
}

// difficult to test the id: 'local' stuff further, because it will depend on the user's test environment...

function testTZGetOffsetMillisDST() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals(-25200000, tz.getOffsetMillis(gd));
}

function testTZGetOffsetMillisNoDST() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals(-28800000, tz.getOffsetMillis(gd));
}

function testTZGetOffsetMillisDSTSouthern() {
    var tz = new TimeZone({id: "Australia/Sydney"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals(39600000, tz.getOffsetMillis(gd));
}

function testTZGetOffsetMillisNoDSTSouthern() {
    var tz = new TimeZone({id: "Australia/Sydney"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals(36000000, tz.getOffsetMillis(gd));
}

function testTZGetOffsetMillisNonDSTZone1() {
    var tz = new TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 8,
		day: 1
	});
    assertEquals(-25200000, tz.getOffsetMillis(gd));
}

function testTZGetOffsetMillisNonDSTZone2() {
    var tz = new TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    var gd = new GregorianDate({
		year: 2011,
		month: 12,
		day: 1
	});
    assertEquals(-25200000, tz.getOffsetMillis(gd));
}

function testTZGetOffsetMillisRightBeforeDSTStart() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);

    var date = new GregorianDate({
		timezone: "Etc/UTC",
		unixtime: 1394359140000 // this is 3/9/2014 at 1:59am
	});
    
    assertEquals(-28800000, tz.getOffsetMillis(date));
}

function testTZGetOffsetMillisRightAfterDSTStart() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);

    var date = new GregorianDate({
    	timezone: "Etc/UTC",
		unixtime: 1394359260000
	});
    
    // 2 minutes later
    assertEquals(-25200000, tz.getOffsetMillis(date));
}

function testTZGetOffsetMillisRightBeforeDSTEnd() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);

    var date = new GregorianDate({
    	timezone: "Etc/UTC",
		unixtime: 1414918740000 // this is 11/2/2014 at 1:59am
	});
    
    assertEquals(-25200000, tz.getOffsetMillis(date));
}

function testTZGetOffsetMillisRightAfterDSTEnd() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);

    var date = new GregorianDate({
    	timezone: "Etc/UTC",
		unixtime: 1414918860000
	});
    
    // 2 minutes later
    assertEquals(-28800000, tz.getOffsetMillis(date));
}

function testTZGetRawOffsetMillisDST() {
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    assertEquals(-28800000, tz.getRawOffsetMillis());
}

function testTZGetRawOffsetMillisDSTEastern() {
    var tz = new TimeZone({id: "Asia/Shanghai"});
    assertNotNull(tz);
    
    assertEquals(28800000, tz.getRawOffsetMillis());
}

function testTZGetRawOffsetMillisNonDSTZone() {
    var tz = new TimeZone({id: "America/Phoenix"});
    assertNotNull(tz);
    
    assertEquals(-25200000, tz.getRawOffsetMillis());
}

function testTZGetRawOffsetMillisLocal() {
	// this should work in any time zone that this test is run in
    var tz = new TimeZone({id: "local"});
    assertNotNull(tz);
    
    var expected = new Date(2014,0,1).getTimezoneOffset() * 60 * -1000;
    
    assertEquals(expected, tz.getRawOffsetMillis());
}

function testTZGetTimeZoneForLocale() {
    var tz = new TimeZone({locale: "nl-NL"});
    assertNotNull(tz);
    
    assertEquals("Europe/Amsterdam", tz.getId());
}

function testTZGetTimeZoneForLocaleUnknown() {
	var tz = new TimeZone({locale: "zz-YY"});
    assertNotNull(tz);
    
    assertEquals("Etc/UTC", tz.getId());
}

function testTZGetTimeZoneForLocaleUnknownWithLoader() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	ilib.setLoaderCallback(mockLoader);
	var tz = new TimeZone({locale: "zz-YY"});
    assertNotNull(tz);
    ilib.setLoaderCallback(oldLoader);
    assertEquals("Asia/Tokyo", tz.getId());
}

function testTZGetTimeZoneForLocaleUnknownWithLoaderAsynch() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var ol = oldLoader;
	ilib.setLoaderCallback(mockLoader);
	new TimeZone({
    	locale: "zz-YY",
    	sync: false,
    	onLoad: function (tz) {
            ilib.setLoaderCallback(ol);
    		assertNotNull(tz);
    	    assertEquals("Asia/Tokyo", tz.getId());
    	}
    });
}

function testTZGetTimeZoneForLocaleWithLoaderNoData() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var ol = oldLoader;
	ilib.setLoaderCallback(mockLoader);
	var tz = new TimeZone({locale: "ww-WW"});
    assertNotNull(tz);
    ilib.setLoaderCallback(ol);
    assertEquals("Etc/UTC", tz.getId());
}

function testTZGetTimeZoneForLocaleWithLoaderNoDataAsynch() {
	if (ilib.isDynData()) {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	var ol = oldLoader;
	ilib.setLoaderCallback(mockLoader);
	new TimeZone({
    	locale: "ww-WW",
    	sync: false,
    	onLoad: function (tz) {
            ilib.setLoaderCallback(ol);
    		assertNotNull(tz);
    	    assertEquals("Etc/UTC", tz.getId());
    	}
    });
}

function testTZGetTimeZoneWithLoaderAsynch() {
    var ol = oldLoader;
	ilib.setLoaderCallback(mockLoader2);
	new TimeZone({
    	id: "America/Los_Angeles",
    	sync: false,
    	onLoad: function (tz) {
            ilib.setLoaderCallback(ol);
    		assertNotNull(tz);
    	    assertObjectEquals("America/Los_Angeles", tz.getId());
    	}
    });
}

function testTZGetTimeZoneWithLoaderJulianTransitionBeforeStart() {
    var ol = oldLoader;
	ilib.setLoaderCallback(mockLoader2);
	new TimeZone({
    	id: "America/Los_Angeles",
    	sync: false,
    	onLoad: function (tz) {
    	    ilib.setLoaderCallback(ol);

    	    assertNotNull(tz);
    	    assertObjectEquals("America/Los_Angeles", tz.getId());
    	    
    	    // before start
    	    var d = DateFactory({
    	    	julianday: 2456725.916666
    	    });
    	    assertFalse(tz.inDaylightTime(d));
    	}
    });
}

function testTZGetTimeZoneWithLoaderJulianTransitionAfterStart() {
    var ol = oldLoader;
	ilib.setLoaderCallback(mockLoader2);
	new TimeZone({
    	id: "America/Los_Angeles",
    	sync: false,
    	onLoad: function (tz) {
    	    ilib.setLoaderCallback(ol);

    	    assertNotNull(tz);
    	    assertObjectEquals("America/Los_Angeles", tz.getId());
    	    
    	    // after start
    	    var d = DateFactory({
    	    	julianday: 2456725.91666669
    	    });
    	    assertTrue(tz.inDaylightTime(d));
    	}
    });
}

function testTZGetTimeZoneWithLoaderJulianTransitionBeforeEnd() {
    var ol = oldLoader;
	ilib.setLoaderCallback(mockLoader2);
	new TimeZone({
    	id: "America/Los_Angeles",
    	sync: false,
    	onLoad: function (tz) {
    		assertNotNull(tz);
    	    assertObjectEquals("America/Los_Angeles", tz.getId());
    	    ilib.setLoaderCallback(ol);
    	    
    	    // before end
    	    var d = DateFactory({
    	    	julianday: 2456963.8749999
    	    });
    	    assertTrue(tz.inDaylightTime(d));
    	}
    });
}

function testTZGetTimeZoneWithLoaderJulianTransitionAfterEnd() {
    var ol = oldLoader;
	ilib.setLoaderCallback(mockLoader2);
	new TimeZone({
    	id: "America/Los_Angeles",
    	sync: false,
    	onLoad: function (tz) {
    	    ilib.setLoaderCallback(ol);

    	    assertNotNull(tz);
    	    assertObjectEquals("America/Los_Angeles", tz.getId());

    	    // after end
    	    var d = DateFactory({
    	    	julianday: 2456963.8750001
    	    });
    	    assertFalse(tz.inDaylightTime(d));
    	}
    });
}

function testTZGetCountry1() {
    ilib.setLoaderCallback(oldLoader);
    var tz = new TimeZone({id: "America/Los_Angeles"});
    assertNotNull(tz);
    
    assertEquals("US", tz.getCountry());
}

function testTZGetCountry2() {
    var tz = new TimeZone({id: "Europe/Berlin"});
    assertNotNull(tz);
    
    assertEquals("DE", tz.getCountry());
}

function testTZGetCountry3() {
    var tz = new TimeZone({id: "Europe/Kiev"});
    assertNotNull(tz);
    
    assertEquals("UA", tz.getCountry());
}

function testTZLinkedZonesUseDST() {
    var tz = new TimeZone({id: "Europe/Zagreb"});
    assertNotNull(tz);

    assertTrue(tz.useDaylightTime());
}

function testTZLinkedZonesInDST() {
    var tz = new TimeZone({id: "Europe/Zagreb"});
    assertNotNull(tz);

    var jan1 = DateFactory({year: 2014, month: 1, day: 1, timezone: "Etc/UTC"});
    var jul1 = DateFactory({year: 2014, month: 7, day: 1, timezone: "Etc/UTC"});
    assertFalse(tz.inDaylightTime(jan1));
    assertTrue(tz.inDaylightTime(jul1));
}

function testTZLinkedZonesRightOffset() {
    var tz = new TimeZone({id: "Europe/Zagreb"});
    assertNotNull(tz);

    var jan1 = DateFactory({year: 2014, month: 1, day: 1, timezone: "Etc/UTC"});
    var jul1 = DateFactory({year: 2014, month: 7, day: 1, timezone: "Etc/UTC"});
    assertObjectEquals({h:1}, tz.getOffset(jan1));
    assertObjectEquals({h:2}, tz.getOffset(jul1));
}

function testTZLinkedZonesUseDST2() {
    var tz = new TimeZone({id: "Europe/Bratislava"});
    assertNotNull(tz);

    assertTrue(tz.useDaylightTime());
}

function testTZLinkedZonesInDST2() {
    var tz = new TimeZone({id: "Europe/Bratislava"});
    assertNotNull(tz);

    var jan1 = DateFactory({year: 2014, month: 1, day: 1, timezone: "Etc/UTC"});
    var jul1 = DateFactory({year: 2014, month: 7, day: 1, timezone: "Etc/UTC"});
    assertFalse(tz.inDaylightTime(jan1));
    assertTrue(tz.inDaylightTime(jul1));
}

function testTZLinkedZonesRightOffset2() {
    var tz = new TimeZone({id: "Europe/Bratislava"});
    assertNotNull(tz);

    var jan1 = DateFactory({year: 2014, month: 1, day: 1, timezone: "Etc/UTC"});
    var jul1 = DateFactory({year: 2014, month: 7, day: 1, timezone: "Etc/UTC"});
    assertObjectEquals({h:1}, tz.getOffset(jan1));
    assertObjectEquals({h:2}, tz.getOffset(jul1));
}
