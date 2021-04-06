/*
 * testtimezone.js - test the time zone object
 * 
 * Copyright © 2012-2015,2017, JEDLSoft
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}
if (typeof(TimeZone) === "undefined") {
    var TimeZone = require("../../lib/TimeZone.js");
}
if (typeof(LocaleInfo) === "undefined") {
    var LocaleInfo = require("../../lib/LocaleInfo.js");
}
if (typeof(IString) === "undefined") {
    var IString = require("../../lib/IString.js");
}
if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../../lib/GregorianDate.js");
}
if (typeof(DateFactory) === "undefined") {
    var DateFactory = require("../../lib/DateFactory.js");
}

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

function mockLoaderTZ (paths, sync, params, callback) {
    var data = [];
    
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

function mockLoaderTZ2(paths, sync, params, callback) {
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

module.exports.testtimezone = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    tearDown: function(callback) {
        ilib._load = oldLoader;
        callback();
    },

    testTZConstructorEmpty: function(test) {
        test.expect(1);
        var tz = new TimeZone();
        test.ok(tz !== null);
        test.done();
    },
    
    testTZConstructor: function(test) {
        test.expect(1);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        test.done();
    },
    
    testTZConstructorWithIlibString: function(test) {
        test.expect(1);
        var tz = new TimeZone({id: new IString("America/Los_Angeles")});
        test.ok(tz !== null);
        test.done();
    },
    
    testTZConstructorLocalWithIlibString: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: new IString("local")});
        test.ok(tz !== null);
        
        test.ok(tz.isLocal);
        test.done();
    },
    
    testTZGet: function(test) {
        test.expect(3);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        test.deepEqual(tz.getRawOffset(), {h: -8});
        test.deepEqual(tz.getDSTSavings(), {h: 1});
        test.done();
    },
    
    testTZGetWithIlibString: function(test) {
        test.expect(3);
        var tz = new TimeZone({id: new IString("America/Los_Angeles")});
        test.ok(tz !== null);
        
        test.deepEqual(tz.getRawOffset(), {h: -8});
        test.deepEqual(tz.getDSTSavings(), {h: 1});
        test.done();
    },
    
    testTZGetStr: function(test) {
        test.expect(3);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        test.equal(tz.getRawOffsetStr(), "-8:0");
        test.equal(tz.getDSTSavingsStr(), "1:0");
        test.done();
    },
    
    testTZGetEmpty: function(test) {
        test.expect(4);
        var tz = new TimeZone();
        test.ok(tz !== null);
        
        // should have the default time zone for the US locale
        test.equal(tz.getId(), "America/New_York");
        test.deepEqual(tz.getRawOffset(), {h:-5});
        test.deepEqual(tz.getDSTSavings(), {h: 1});
        test.done();
    },
    
    testTZGetEmptyStr: function(test) {
        test.expect(4);
        var tz = new TimeZone();
        test.ok(tz !== null);
        
        // should have the default time zone for the US locale
        test.equal(tz.getId(), "America/New_York");
        test.equal(tz.getRawOffsetStr(), "-5:0");
        test.equal(tz.getDSTSavingsStr(), "1:0");
        test.done();
    },
    
    testTZGetDefaultForLocale: function(test) {
        test.expect(4);
        var tz = new TimeZone({locale: "nl-NL"});
        test.ok(tz !== null);
        
        // should have the default time zone for the US locale
        test.equal(tz.getId(), "Europe/Amsterdam");
        test.deepEqual(tz.getRawOffset(), {h: 1});
        test.deepEqual(tz.getDSTSavings(), {h: 1});
        test.done();
    },
    
    testTZGetDefaultForLocaleStr: function(test) {
        test.expect(4);
        var tz = new TimeZone({locale: "nl-NL"});
        test.ok(tz !== null);
        
        // should have the default time zone for the US locale
        test.equal(tz.getId(), "Europe/Amsterdam");
        test.equal(tz.getRawOffsetStr(), "1:0");
        test.equal(tz.getDSTSavingsStr(), "1:0");
        test.done();
    },

    testTZGetDefaultFor_wo_SN: function(test) {
        test.expect(5);
        var tz = new TimeZone({locale: "wo-SN"});
        test.ok(tz !== null);

        // should have the default time zone for the US locale
        test.equal(tz.getId(), "Africa/Dakar");
        test.equal(tz.getRawOffsetStr(), "0:0");
        test.equal(tz.getDSTSavingsStr(), "0:0");

        var gd = new GregorianDate({
            year: 2021,
            month: 4,
            day: 1
        });
        test.equal(tz.getDisplayName(gd, 'standard'), "GMT");

        test.done();
    },
    
    testTZGetUnknown: function(test) {
        test.expect(4);
        var tz = new TimeZone({id: "America/asdfasdfasdf"});
        test.ok(tz !== null);
        
        test.equal(tz.getId(), "Etc/UTC");
        test.deepEqual(tz.getRawOffset(), {h: 0});
        test.deepEqual(tz.getDSTSavings(), {h: 0});
        test.done();
    },
    
    testTZGetUnknownStr: function(test) {
        test.expect(4);
        var tz = new TimeZone({id: "America/asdfasdfasdf"});
        test.ok(tz !== null);
        
        test.equal(tz.getId(), "Etc/UTC");
        test.equal(tz.getRawOffsetStr(), "0:0");
        test.equal(tz.getDSTSavingsStr(), "0:0");
        test.done();
    },
    
    testTZDisplayNameDSTStandardStyle: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 8,
            day: 1
        });
        test.equal(tz.getDisplayName(gd, 'standard'), "PDT");
        test.done();
    },

    testTZDisplayNameDSTStandardStyleNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);

        var gd = new Date(2011, 7, 1);
        test.equal(tz.getDisplayName(gd, 'standard'), "PDT");
        test.done();
    },

    testTZDisplayNameDSTDefaultStyle: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 8,
            day: 1
        });
        test.equal(tz.getDisplayName(gd), "PDT");
        test.done();
    },

    testTZDisplayNameDSTDefaultStyleNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);

        var gd = new Date(2011, 7, 1);
        test.equal(tz.getDisplayName(gd), "PDT");
        test.done();
    },

    testTZDisplayNameDSTStyleRFC: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 8,
            day: 1
        });
        test.equal(tz.getDisplayName(gd, 'rfc822'), "UTC-0700");
        test.done();
    },

    testTZDisplayNameDSTStyleRFCNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);

        var gd = new Date(2011, 7, 1);
        test.equal(tz.getDisplayName(gd, 'rfc822'), "UTC-0700");
        test.done();
    },

    testTZDisplayNameDSTDaylightStandardStyle: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 8,
            day: 1
        });
        test.equal(tz.getDisplayName(gd, 'standard'), "PDT");
        test.done();
    },
    
    testTZDisplayNameDSTDaylightLongStyle: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 8,
            day: 1
        });
        test.equal(tz.getDisplayName(gd, 'long'), "Pacific Daylight Time");
        test.done();
    },

    testTZDisplayNameDSTDaylightLongStyleNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);

        var gd = new Date(2011, 7, 1);
        test.equal(tz.getDisplayName(gd, 'long'), "Pacific Daylight Time");
        test.done();
    },

    testTZDisplayNameStandardTime: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 12,
            day: 1
        });
        test.equal(tz.getDisplayName(gd, 'standard'), "PST");
        test.done();
    },

    testTZDisplayNameStandardTimeNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);

        var gd = new Date(2011, 11, 1);
        test.equal(tz.getDisplayName(gd, 'standard'), "PST");
        test.done();
    },

    testTZDisplayNameStandardTimeAmbiguous: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
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
        test.equal(tz.getDisplayName(gd, 'standard'), "PST");
        test.done();
    },
    
    testTZDisplayNameDaylightTimeAmbiguous: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
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
        test.equal(tz.getDisplayName(gd, 'standard'), "PDT");
        test.done();
    },
    
    testTZDisplayNameStandardTimeRFC: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 12,
            day: 1
        });
        test.equal(tz.getDisplayName(gd, 'rfc822'), "UTC-0800");
        test.done();
    },
    
    testTZDisplayNameStandardTimeLong: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 12,
            day: 1
        });
        test.equal(tz.getDisplayName(gd, 'long'), "Pacific Standard Time");
        test.done();
    },

    testTZDisplayNameStandardTimeLongNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);

        var gd = new Date(2011, 11, 1);
        test.equal(tz.getDisplayName(gd, 'long'), "Pacific Standard Time");
        test.done();
    },

    testTZDisplayNameStandardTimeESWithNoDST: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Europe/Madrid"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 12,
            day: 1
        });
        test.equal(tz.getDisplayName(gd, 'standard'), "CET");
        test.done();
    },

    testTZDisplayNameStandardTimeESWithNoDSTNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Europe/Madrid"});
        test.ok(tz !== null);

        var gd = new Date(2011, 11, 1);
        test.equal(tz.getDisplayName(gd, 'standard'), "CET");
        test.done();
    },

    testTZDisplayNameStandardTimeESWithDST: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Europe/Madrid"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 6,
            day: 1
        });
        test.equal(tz.getDisplayName(gd, 'standard'), "CEST");
        test.done();
    },

    testTZDisplayNameStandardTimeESWithDSTNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Europe/Madrid"});
        test.ok(tz !== null);

        var gd = new Date(2011, 5, 1);
        test.equal(tz.getDisplayName(gd, 'standard'), "CEST");
        test.done();
    },

    testTZDisplayNameNoDST1: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Phoenix"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 8,
            day: 1
        });
        test.equal(tz.getDisplayName(gd, 'standard'), "MST");
        test.done();
    },

    testTZDisplayNameNoDST1NonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Phoenix"});
        test.ok(tz !== null);

        var gd = new Date(2011, 7, 1);
        test.equal(tz.getDisplayName(gd, 'standard'), "MST");
        test.done();
    },

    testTZDisplayNameNoDST2: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Phoenix"});
        test.ok(tz !== null);

        var gd = new GregorianDate({
            year: 2011,
            month: 12,
            day: 1
        });
        test.equal(tz.getDisplayName(gd, 'standard'), "MST");
        test.done();
    },

    testTZDisplayNameNoDST2NonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Phoenix"});
        test.ok(tz !== null);

        var gd = new Date(2011, 11, 1);
        test.equal(tz.getDisplayName(gd, 'standard'), "MST");
        test.done();
    },

    testTZDisplayNameEasternRFCWithDST: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Australia/Broken_Hill"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 12,
            day: 1
        });
        test.equal(tz.getDisplayName(gd, 'rfc822'), "UTC+1030");
        test.done();
    },
    testTZDisplayNameEasternRFCWithoutDST: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Australia/Broken_Hill"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 7,
            day: 1
        });
        test.equal(tz.getDisplayName(gd, 'rfc822'), "UTC+0930");
        test.done();
    },
    
    testTZDisplayNameNoLetterForDST: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Europe/Berlin"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37
        });
        test.equal(tz.getDisplayName(gd, 'standard'), "CET");
        test.done();
    },
    
    testTZGetOffsetDST: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 8,
            day: 1
        });
        test.deepEqual(tz.getOffset(gd), {h:-7});
        test.done();
    },

    testTZGetOffsetDSTNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);

        var gd = new Date(2011, 7, 1);

        test.deepEqual(tz.getOffset(gd), {h:-7});
        test.done();
    },

    testTZGetOffsetRightBeforeDSTStart: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
    
        var date = new GregorianDate({
            timezone: "Etc/UTC",
            unixtime: 1394359140000 // this is 3/9/2014 at 1:59am
        });
        
        test.deepEqual(tz.getOffset(date), {h:-8});
        test.done();
    },

    testTZGetOffsetRightBeforeDSTStartNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);

        var date = new Date(1394359140000); // this is 3/9/2014 at 1:59am

        test.deepEqual(tz.getOffset(date), {h:-8});
        test.done();
    },

    testTZGetOffsetRightAfterDSTStart: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
    
        var date = new GregorianDate({
            timezone: "Etc/UTC",
            unixtime: 1394359260000
        });
        
        // 2 minutes later
        test.deepEqual(tz.getOffset(date), {h:-7});
        test.done();
    },

    testTZGetOffsetRightAfterDSTStartNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);

        var date = new Date(1394359260000);

        // 2 minutes later
        test.deepEqual(tz.getOffset(date), {h:-7});
        test.done();
    },

    testTZGetOffsetRightBeforeDSTEnd: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
    
        var date = new GregorianDate({
            timezone: "Etc/UTC",
            unixtime: 1414918740000 // this is 11/2/2014 at 1:59am
        });
        
        test.deepEqual(tz.getOffset(date), {h:-7});
        test.done();
    },

    testTZGetOffsetRightBeforeDSTEndNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);

        var date = new Date(1414918740000); // this is 11/2/2014 at 1:59am

        test.deepEqual(tz.getOffset(date), {h:-7});
        test.done();
    },

    testTZGetOffsetRightAfterDSTEnd: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
    
        var date = new GregorianDate({
            timezone: "Etc/UTC",
            unixtime: 1414918860000
        });
        
        // 2 minutes later
        test.deepEqual(tz.getOffset(date), {h:-8});
        test.done();
    },

    testTZGetOffsetRightAfterDSTEnd: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);

        var date = new Date(1414918860000);

        // 2 minutes later
        test.deepEqual(tz.getOffset(date), {h:-8});
        test.done();
    },

    testTZGetOffsetRightAfterDST: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            timezone: "America/Los_Angeles",
            year: 2014,
            month: 3,
            day: 9,
            hour: 3,
            minute: 1
        });
        test.deepEqual(tz.getOffset(gd), {h:-7});
        test.done();
    },
    
    testTZGetOffsetDSTStr: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 8,
            day: 1
        });
        test.equal(tz.getOffsetStr(gd), "-7:0");
        test.done();
    },

    testTZGetOffsetDSTStrNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);

        var gd = new Date(2011, 7, 1);
        test.equal(tz.getOffsetStr(gd), "-7:0");
        test.done();
    },

    testTZGetOffsetNoDST: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 12,
            day: 1
        });
        test.deepEqual(tz.getOffset(gd), {h:-8});
        test.done();
    },
    testTZGetOffsetNoDSTStr: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 12,
            day: 1
        });
        test.equal(tz.getOffsetStr(gd), "-8:0");
        test.done();
    },

    testTZGetOffsetNoDSTStrNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);

        var gd = new Date(2011, 11, 1);
        test.equal(tz.getOffsetStr(gd), "-8:0");
        test.done();
    },

    testTZGetOffsetNonDSTZone1: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Phoenix"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 8,
            day: 1
        });
        test.deepEqual(tz.getOffset(gd), {h:-7});
        test.done();
    },
    testTZGetOffsetNonDSTZone1Str: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Phoenix"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 8,
            day: 1
        });
        test.equal(tz.getOffsetStr(gd), "-7:0");
        test.done();
    },
    
    testTZGetOffsetNonDSTZone2: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Phoenix"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 12,
            day: 1
        });
        test.deepEqual(tz.getOffset(gd), {h:-7});
        test.done();
    },
    testTZGetOffsetNonDSTZone2Str: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Phoenix"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 12,
            day: 1
        });
        test.equal(tz.getOffsetStr(gd), "-7:0");
        test.done();
    },
    
    testTZGetRawOffsetDST: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        test.deepEqual(tz.getRawOffset(), {h:-8});
        test.done();
    },
    testTZGetRawOffsetDSTStr: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        test.equal(tz.getRawOffsetStr(), "-8:0");
        test.done();
    },
    
    testTZGetRawOffsetNonDSTZone: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Phoenix"});
        test.ok(tz !== null);
        
        test.deepEqual(tz.getRawOffset(), {h:-7});
        test.done();
    },
    testTZGetRawOffsetNonDSTZoneStr: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Phoenix"});
        test.ok(tz !== null);
        
        test.equal(tz.getRawOffsetStr(), "-7:0");
        test.done();
    },
    
    testTZGetDSTSavingsDSTZone: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        test.deepEqual(tz.getDSTSavings(), {h:1});
        test.done();
    },
    testTZGetDSTSavingsDSTZoneStr: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        test.equal(tz.getDSTSavingsStr(), "1:0");
        test.done();
    },
    
    testTZGetDSTSavingsDSTZoneOdd: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Australia/Lord_Howe"});
        test.ok(tz !== null);
        
        test.deepEqual(tz.getDSTSavings(), {h:0,m:30});
        test.done();
    },
    testTZGetDSTSavingsDSTZoneOddStr: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Australia/Lord_Howe"});
        test.ok(tz !== null);
        
        test.equal(tz.getDSTSavingsStr(), "0:30");
        test.done();
    },
    
    testTZGetDSTSavingsNonDSTZone: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Phoenix"});
        test.ok(tz !== null);
        
        test.deepEqual(tz.getDSTSavings(), {h:0});
        test.done();
    },
    testTZGetDSTSavingsNonDSTZoneStr: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Phoenix"});
        test.ok(tz !== null);
        
        test.equal(tz.getDSTSavingsStr(), "0:0");
        test.done();
    },
    
    testTZGetDSTSavingsUnknown: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "x/y"});
        test.ok(tz !== null);
        
        // should default to Etc/UTC
        test.deepEqual(tz.getDSTSavings(), {h:0});
        test.done();
    },
    testTZGetDSTSavingsUnknownStr: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "x/y"});
        test.ok(tz !== null);
        
        // should default to Etc/UTC
        test.equal(tz.getDSTSavingsStr(), "0:0");
        test.done();
    },
    
    testTZInDaylightTimeTrue: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            timezone: "America/Los_Angeles",
            year: 2011,
            month: 7,
            day: 1
        });
        test.ok(tz.inDaylightTime(gd));
        test.done();
    },
    testTZInDaylightTimeFalse: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            timezone: "America/Los_Angeles",
            year: 2011,
            month: 12,
            day: 1
        });
        test.ok(!tz.inDaylightTime(gd));
        test.done();
    },

    testTZInDaylightTimeTrueNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);

        var d = new Date(2011, 6, 1);
        test.ok(tz.inDaylightTime(d));
        test.done();
    },
    testTZInDaylightTimeFalseNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);

        var d = new Date(2011, 11, 1);
        test.ok(!tz.inDaylightTime(d));
        test.done();
    },

    testTZInDaylightTimeLocalTrue: function(test) {
        var summer = new Date(2014, 6, 1);
        var winter = new Date(2014, 0, 1);
        // only perform this test if we are in a zone where there is DST
        if (summer.getTimezoneOffset() === winter.getTimezoneOffset()) {
            test.done();
            return;
        }

        test.expect(2);
        var tz = new TimeZone({id: "local"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            timezone: "local",
            year: 2011,
            month: 7,
            day: 1
        });
        test.ok(tz.inDaylightTime(gd));
        test.done();
    },
    testTZInDaylightTimeLocalFalse: function(test) {
        var summer = new Date(2014, 6, 1);
        var winter = new Date(2014, 0, 1);
        // only perform this test if we are in a zone where there is DST
        if (summer.getTimezoneOffset() === winter.getTimezoneOffset()) {
            test.done();
            return;
        }
        
        test.expect(2);
        var tz = new TimeZone({id: "local"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            timezone: "local",
            year: 2011,
            month: 12,
            day: 1
        });
        test.ok(!tz.inDaylightTime(gd));
        test.done();
    },
    
    testTZInDaylightTimeNonDSTZone: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Phoenix"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            timezone: "Australia/Phoenix",
            year: 2011,
            month: 7,
            day: 1
        });
        test.ok(!tz.inDaylightTime(gd));
        test.done();
    },
    testTZInDaylightTimeUnknown: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "x/y"});
        test.ok(tz !== null);
        
        // defaults to Etc/UTC
        var gd = new GregorianDate({
            year: 2011,
            month: 7,
            day: 1
        });
        test.ok(!tz.inDaylightTime(gd));
        test.done();
    },
    
    testTZInDaylightTimeJustBeforeStart: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            timezone: "America/Los_Angeles",
            year: 2011,
            month: 3,
            day: 13,
            hour: 1,
            minute: 59,
            second: 59
        });
        test.ok(!tz.inDaylightTime(gd));
        test.done();
    },
    testTZInDaylightTimeJustAfterStart: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            timezone: "America/Los_Angeles",
            year: 2011,
            month: 3,
            day: 13,
            hour: 2
        });
        test.ok(tz.inDaylightTime(gd));
        test.done();
    },
    testTZInDaylightTimeJustBeforeEnd: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            timezone: "America/Los_Angeles",
            year: 2014,
            month: 11,
            day: 2,
            hour: 1,
            minute: 59,
            second: 59
        });
        test.ok(tz.inDaylightTime(gd));
        test.done();
    },
    testTZInDaylightTimeJustAfterEnd: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            timezone: "America/Los_Angeles",
            year: 2014,
            month: 11,
            day: 2,
            hour: 2
        });
        test.ok(!tz.inDaylightTime(gd));
        test.done();
    },
    
    testTZInDaylightTimeJustBeforeStartDownUnder: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Australia/Sydney"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            timezone: "Australia/Sydney",
            year: 2014,
            month: 10,
            day: 5,
            hour: 1,
            minute: 59,
            second: 59
        });
        test.ok(!tz.inDaylightTime(gd));
        test.done();
    },
    
    testTZInDaylightTimeJustAfterStartDownUnder: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Australia/Sydney"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            timezone: "Australia/Sydney",
            year: 2014,
            month: 10,
            day: 5,
            hour: 2
        });
        test.ok(tz.inDaylightTime(gd));
        test.done();
    },
    testTZInDaylightTimeJustBeforeEndDownUnder: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Australia/Sydney"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            timezone: "Australia/Sydney",
            year: 2011,
            month: 4,
            day: 3,
            hour: 2,
            minute: 59,
            second: 59
        });
        test.ok(tz.inDaylightTime(gd));
        test.done();
    },
    testTZInDaylightTimeJustAfterEndDownUnder: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Australia/Sydney"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            timezone: "Australia/Sydney",
            year: 2011,
            month: 4,
            day: 3,
            hour: 3
        });
        test.ok(!tz.inDaylightTime(gd));
        test.done();
    },
    
    
    testTZUseDaylightTime: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        test.ok(tz.useDaylightTime());
        test.done();
    },
    testTZUseDaylightTimeNonDST: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Phoenix"});
        test.ok(tz !== null);
        
        test.ok(!tz.useDaylightTime());
        test.done();
    },
    testTZUseDaylightTimeUnknown: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "x/y"});
        test.ok(tz !== null);
        
        test.ok(!tz.useDaylightTime());
        test.done();
    },
    
    testTZGetAvailableIds: function(test) {
        test.expect(2);
        var zones = TimeZone.getAvailableIds();
        test.ok(zones !== null);
        
        test.ok(zones.length > 0);
        test.done();
    },
    
    testTZGetAvailableIdsRightValues: function(test) {
        test.expect(6);
        var zones = TimeZone.getAvailableIds();
        test.ok(zones !== null);
        
        test.contains(zones, "Europe/London");
        test.contains(zones, "America/Los_Angeles");
        test.contains(zones, "Australia/Sydney");
        test.contains(zones, "Asia/Tokyo");
        test.contains(zones, "Africa/Cairo");
        test.done();
    },
    
    testTZGetAvailableIdsNoFilterContainsLocal: function(test) {
        test.expect(2);
        var zones = TimeZone.getAvailableIds();
        test.ok(zones !== null);
        
        test.ok(zones.indexOf("local") != -1);
        test.done();
    },
    
    testGetAvailableTimeZonesWithLoader: function(test) {
        test.expect(3);
        ilib.setLoaderCallback(new getAvailableMocker());
        ilib.data.timezones = []; // clear the timezones cache
        
        try {
            var zones = TimeZone.getAvailableIds();
            test.equal(zones.length, 1);
            test.contains(zones, "local");
        } finally {
            // clean up
            ilib.data.timezones = []; // clear the timezones cache
            
            ilib.setLoaderCallback(oldLoader);
            test.ok(true);
            test.done();
        }
    },
    
    testTZGetAvailableIdsByCountryRightLength: function(test) {
        test.expect(2);
        var zones = TimeZone.getAvailableIds("US");
        test.ok(zones !== null);
        
        test.equal(zones.length, 48);
        test.done();
    },
    
    testTZGetAvailableIdsWithFilterContainsNoLocal: function(test) {
        test.expect(2);
        var zones = TimeZone.getAvailableIds("US");
        test.ok(zones !== null);
        
        test.ok(zones.indexOf("local") == -1);
        test.done();
    },
    
    testTZGetAvailableIdsByCountryRightContents: function(test) {
        test.expect(2);
        var zones = TimeZone.getAvailableIds("US");
        test.ok(zones !== null);
        
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
        
        test.equalIgnoringOrder(zones, expected);
        test.done();
    },
    
    testTZGetAvailableIdsByCountry2RightLength: function(test) {
        test.expect(2);
        var zones = TimeZone.getAvailableIds("SG");
        test.ok(zones !== null);
        
        test.equal(zones.length, 2);
        test.done();
    },
    
    testTZGetAvailableIdsByCountry2RightContents: function(test) {
        test.expect(2);
        var zones = TimeZone.getAvailableIds("SG");
        test.ok(zones !== null);
        
        var expected = [
            "Asia/Singapore",
            "Singapore"
        ];
        
        test.equalIgnoringOrder(zones, expected);
        test.done();
    },
    
    testTZGetAvailableIdsByCountry3RightLength: function(test) {
        test.expect(2);
        var zones = TimeZone.getAvailableIds("IN");
        test.ok(zones !== null);
        
        test.equal(zones.length, 2);
        test.done();
    },
    
    testTZGetAvailableIdsByCountry3RightContents: function(test) {
        test.expect(2);
        var zones = TimeZone.getAvailableIds("IN");
        test.ok(zones !== null);
        
        var expected = [
            "Asia/Kolkata",
            "Asia/Calcutta"
        ];
        
        test.equalIgnoringOrder(zones, expected);
        test.done();
    },
    
    testTZUseDaylightTimeID: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Asia/Jakarta"});
        test.ok(tz !== null);
        
        test.ok(!tz.useDaylightTime());
        test.done();
    },
    
    testTZDisplayNameStandardID: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Asia/Jakarta"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37
        });
        test.equal(tz.getDisplayName(gd, 'standard'), "WIB");
        test.done();
    },
    
    testTZDisplayNameLongID: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Asia/Jakarta"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37
        });
        test.equal(tz.getDisplayName(gd, 'long'), "SE Asia Standard Time");
        test.done();
    },
    
    testTZConstructUsingOffset: function(test) {
        test.expect(1);
       var tz = new TimeZone({offset: 420});
       test.ok(tz !== null);
       test.done();
    },
    
    testTZOffsetGetRawOffset: function(test) {
        test.expect(4);
       var tz = new TimeZone({offset: 420});
       test.ok(tz !== null);
       
       var offset = tz.getRawOffset();
       test.ok(typeof(offset) !== "undefined");
       test.equal(offset.h, 7);
       test.ok(typeof(offset.m) === "undefined");
       test.done();
    },
    
    testTZOffsetGetRawOffsetNegative: function(test) {
        test.expect(4);
       var tz = new TimeZone({offset: -450});
       test.ok(tz !== null);
       
       var offset = tz.getRawOffset();
       test.ok(typeof(offset) !== "undefined");
    
       test.equal(offset.h, -7);
       test.equal(offset.m, 30);
       test.done();
    },
    
    testTZOffsetGetRawOffsetStr: function(test) {
        test.expect(2);
       var tz = new TimeZone({offset: 420});
       test.ok(tz !== null);
       
       test.equal(tz.getRawOffsetStr(), "7:0");
       test.done();
    },
    
    testTZOffsetGetOffsetWinter: function(test) {
        test.expect(4);
       var tz = new TimeZone({offset: 450});
       test.ok(tz !== null);
       
       var date = DateFactory({
          year: 2012,
          month: 1,
          day: 1
       });
       
       var offset = tz.getOffset(date);
       test.ok(typeof(offset) !== "undefined");
    
       test.equal(offset.h, 7);
       test.equal(offset.m, 30);
       test.done();
    },
    
    testTZOffsetGetOffsetSummer: function(test) {
        test.expect(4);
       var tz = new TimeZone({offset: 450});
       test.ok(tz !== null);
       
       var date = DateFactory({
          year: 2012,
          month: 6,
          day: 1
       });
       
       var offset = tz.getOffset(date);
       test.ok(typeof(offset) !== "undefined");
    
       // should be the same as winter because we can't determine DST
       test.equal(offset.h, 7);
       test.equal(offset.m, 30);
       test.done();
    },

    testTZOffsetGetOffsetWinterNonIDate: function(test) {
        test.expect(4);
       var tz = new TimeZone({offset: 450});
       test.ok(tz !== null);

       var date = new Date(2012, 0, 1);

       var offset = tz.getOffset(date);
       test.ok(typeof(offset) !== "undefined");

       test.equal(offset.h, 7);
       test.equal(offset.m, 30);
       test.done();
    },
    
    testTZOffsetGetOffsetSummerNonIDate: function(test) {
        test.expect(4);
       var tz = new TimeZone({offset: 450});
       test.ok(tz !== null);

       var date = new Date(2012, 5, 1);

       var offset = tz.getOffset(date);
       test.ok(typeof(offset) !== "undefined");

       // should be the same as winter because we can't determine DST
       test.equal(offset.h, 7);
       test.equal(offset.m, 30);
       test.done();
    },

    testTZOffsetGetDisplayNameStandard: function(test) {
        test.expect(2);
       var tz = new TimeZone({offset: 450});
       test.ok(tz !== null);
       
       var date = DateFactory({
          year: 2012,
          month: 6,
          day: 1
       });
    
       // should give rfc style because we don't know the name of the time zone 
       test.equal(tz.getDisplayName(date, "standard"), "UTC+0730");
       test.done();
    },
    
    testTZOffsetGetDisplayNameRFC: function(test) {
        test.expect(2);
       var tz = new TimeZone({offset: 450});
       test.ok(tz !== null);
       
       var date = DateFactory({
          year: 2012,
          month: 6,
          day: 1
       });
    
       test.equal(tz.getDisplayName(date, "rfc822"), "UTC+0730");
       test.done();
    },
    
    testTZOffsetGetDisplayNameRFCNegative: function(test) {
        test.expect(2);
       var tz = new TimeZone({offset: -510});
       test.ok(tz !== null);
       
       var date = DateFactory({
          year: 2012,
          month: 6,
          day: 1
       });
    
       test.equal(tz.getDisplayName(date, "rfc822"), "UTC-0830");
       test.done();
    },
    
    testTZOffsetGetId: function(test) {
        test.expect(2);
       var tz = new TimeZone({offset: 450});
       test.ok(tz !== null);
       
       // should give the same as the rfc style display name because we don't know the name of the time zone 
       test.equal(tz.getId(), "UTC+0730");
       test.done();
    },
    
    testTZOffsetGetDSTSavings: function(test) {
        test.expect(3);
       var tz = new TimeZone({offset: 450});
       test.ok(tz !== null);
       
       test.ok(typeof(tz.getDSTSavings()) !== "undefined");
       test.equal(tz.getDSTSavings().h, 0);
       test.done();
    },
    
    testTZOffsetGetDSTSavingsStr: function(test) {
        test.expect(3);
       var tz = new TimeZone({offset: 450});
       test.ok(tz !== null);
       
       test.ok(typeof(tz.getDSTSavingsStr()) !== "undefined");
       test.equal(tz.getDSTSavingsStr(), "0:0");
       test.done();
    },
    
    testTZOffsetGetUseDaylightTime: function(test) {
        test.expect(2);
       var tz = new TimeZone({offset: 450});
       test.ok(tz !== null);
       
       test.ok(!tz.useDaylightTime());
       test.done();
    },
    
    testTZOffsetInDaylightTimeWinter: function(test) {
        test.expect(2);
       var tz = new TimeZone({offset: 450});
       test.ok(tz !== null);
       
       var date = DateFactory({
          year: 2012,
          month: 1,
          day: 1
       });
       
       test.ok(!tz.inDaylightTime(date));
       test.done();
    },
    
    testTZOffsetInDaylightTimeSummer: function(test) {
        test.expect(2);
       var tz = new TimeZone({offset: 450});
       test.ok(tz !== null);
       
       var date = DateFactory({
          year: 2012,
          month: 6,
          day: 1
       });
       
       // should be the same as winter because we can't determine DST
       test.ok(!tz.inDaylightTime(date));
       test.done();
    },
    
    testTZConstructUsingLocalID: function(test) {
        test.expect(1);
       var tz = new TimeZone({id: "local"});
       test.ok(tz !== null);
       test.done();
    },
    
    // difficult to test the id: 'local' stuff further, because it will depend on the user's test environment...
    
    testTZGetOffsetMillisDST: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 8,
            day: 1
        });
        test.equal(tz.getOffsetMillis(gd), -25200000);
        test.done();
    },

    testTZGetOffsetMillisDSTNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);

        var gd = new Date(2011, 7, 1);
        test.equal(tz.getOffsetMillis(gd), -25200000);
        test.done();
    },

    testTZGetOffsetMillisNoDST: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 12,
            day: 1
        });
        test.equal(tz.getOffsetMillis(gd), -28800000);
        test.done();
    },

    testTZGetOffsetMillisNoDSTNonIDate: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);

        var gd = new Date(2011, 11, 1);
        test.equal(tz.getOffsetMillis(gd), -28800000);
        test.done();
    },

    testTZGetOffsetMillisDSTSouthern: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Australia/Sydney"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 12,
            day: 1
        });
        test.equal(tz.getOffsetMillis(gd), 39600000);
        test.done();
    },
    
    testTZGetOffsetMillisNoDSTSouthern: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Australia/Sydney"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 8,
            day: 1
        });
        test.equal(tz.getOffsetMillis(gd), 36000000);
        test.done();
    },
    
    testTZGetOffsetMillisNonDSTZone1: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Phoenix"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 8,
            day: 1
        });
        test.equal(tz.getOffsetMillis(gd), -25200000);
        test.done();
    },
    
    testTZGetOffsetMillisNonDSTZone2: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Phoenix"});
        test.ok(tz !== null);
        
        var gd = new GregorianDate({
            year: 2011,
            month: 12,
            day: 1
        });
        test.equal(tz.getOffsetMillis(gd), -25200000);
        test.done();
    },
    
    testTZGetOffsetMillisRightBeforeDSTStart: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
    
        var date = new GregorianDate({
            timezone: "Etc/UTC",
            unixtime: 1394359140000 // this is 3/9/2014 at 1:59am
        });
        
        test.equal(tz.getOffsetMillis(date), -28800000);
        test.done();
    },
    
    testTZGetOffsetMillisRightAfterDSTStart: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
    
        var date = new GregorianDate({
            timezone: "Etc/UTC",
            unixtime: 1394359260000
        });
        
        // 2 minutes later
        test.equal(tz.getOffsetMillis(date), -25200000);
        test.done();
    },
    
    testTZGetOffsetMillisRightBeforeDSTEnd: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
    
        var date = new GregorianDate({
            timezone: "Etc/UTC",
            unixtime: 1414918740000 // this is 11/2/2014 at 1:59am
        });
        
        test.equal(tz.getOffsetMillis(date), -25200000);
        test.done();
    },
    
    testTZGetOffsetMillisRightAfterDSTEnd: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
    
        var date = new GregorianDate({
            timezone: "Etc/UTC",
            unixtime: 1414918860000
        });
        
        // 2 minutes later
        test.equal(tz.getOffsetMillis(date), -28800000);
        test.done();
    },
    
    testTZGetRawOffsetMillisDST: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        test.equal(tz.getRawOffsetMillis(), -28800000);
        test.done();
    },
    
    testTZGetRawOffsetMillisDSTEastern: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Asia/Shanghai"});
        test.ok(tz !== null);
        
        test.equal(tz.getRawOffsetMillis(), 28800000);
        test.done();
    },
    
    testTZGetRawOffsetMillisNonDSTZone: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Phoenix"});
        test.ok(tz !== null);
        
        test.equal(tz.getRawOffsetMillis(), -25200000);
        test.done();
    },
    
    testTZGetRawOffsetMillisLocal: function(test) {
        test.expect(2);
        // this should work in any time zone that this test is run in
        var tz = new TimeZone({id: "local"});
        test.ok(tz !== null);
        
        var expected = new Date(2014,0,1).getTimezoneOffset() * 60 * -1000;
        
        test.equal(tz.getRawOffsetMillis(), expected);
        test.done();
    },
    
    testTZGetTimeZoneForLocale: function(test) {
        test.expect(2);
        var tz = new TimeZone({locale: "nl-NL"});
        test.ok(tz !== null);
        
        test.equal(tz.getId(), "Europe/Amsterdam");
        test.done();
    },
    
    testTZGetTimeZoneForLocaleUnknown: function(test) {
        test.expect(2);
        var tz = new TimeZone({locale: "zz-YY"});
        test.ok(tz !== null);
        
        test.equal(tz.getId(), "Etc/UTC");
        test.done();
    },
    
    testTZGetTimeZoneForLocaleUnknownWithLoader: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.setLoaderCallback(mockLoaderTZ);
        ilib.data.localeinfo_zz = ilib.data.localeinfo_und_YY = ilib.data.localeinfo_zz_YY = undefined;
        ilib.clearCache();
        var tz = new TimeZone({locale: "zz-YY"});
        test.expect(2);
        test.ok(tz !== null);
        ilib.setLoaderCallback(oldLoader);
        test.equal(tz.getId(), "Asia/Tokyo");
        test.done();
    },
    
    testTZGetTimeZoneForLocaleUnknownWithLoaderAsynch: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.setLoaderCallback(mockLoaderTZ);
        ilib.data.localeinfo_zz = ilib.data.localeinfo_und_YY = ilib.data.localeinfo_zz_YY = undefined;
        ilib.clearCache();
        new TimeZone({
            locale: "zz-YY",
            sync: false,
            onLoad: function (tz) {
                ilib.setLoaderCallback(oldLoader);
                test.expect(2);
                test.ok(tz !== null);
                test.equal(tz.getId(), "Asia/Tokyo");
                test.done();
            }
        });
    },
    
    testTZGetTimeZoneForLocaleWithLoaderNoData: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.setLoaderCallback(mockLoaderTZ);
        var tz = new TimeZone({locale: "ww-WW"});
        ilib.data.localeinfo_ww = ilib.data.localeinfo_und_WW = ilib.data.localeinfo_ww_WW = undefined;
        ilib.clearCache();
        test.expect(2);
        test.ok(tz !== null);
        ilib.setLoaderCallback(oldLoader);
        test.equal(tz.getId(), "Etc/UTC");
        test.done();
    },
    
    testTZGetTimeZoneForLocaleWithLoaderNoDataAsynch: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        ilib.setLoaderCallback(mockLoaderTZ);
        ilib.data.localeinfo_ww = ilib.data.localeinfo_und_WW = ilib.data.localeinfo_ww_WW = undefined;
        ilib.clearCache();
        new TimeZone({
            locale: "ww-WW",
            sync: false,
            onLoad: function (tz) {
                ilib.setLoaderCallback(oldLoader);
                test.expect(2);
                test.ok(tz !== null);
                test.equal(tz.getId(), "Etc/UTC");
                test.done();
            }
        });
    },
    
    testTZGetTimeZoneWithLoaderAsynch: function(test) {
        test.expect(2);
        ilib.setLoaderCallback(mockLoaderTZ2);
        new TimeZone({
            id: "America/Los_Angeles",
            sync: false,
            onLoad: function (tz) {
                ilib.setLoaderCallback(oldLoader);
                test.ok(tz !== null);
                test.deepEqual(tz.getId(), "America/Los_Angeles");
                test.done();
            }
        });
    },
    
    testTZGetTimeZoneWithLoaderJulianTransitionBeforeStart: function(test) {
        test.expect(3);
        ilib.setLoaderCallback(mockLoaderTZ2);
        new TimeZone({
            id: "America/Los_Angeles",
            sync: false,
            onLoad: function (tz) {
                ilib.setLoaderCallback(oldLoader);
    
                test.ok(tz !== null);
                test.deepEqual(tz.getId(), "America/Los_Angeles");
                
                // before start
                var d = DateFactory({
                    julianday: 2456725.916666
                });
                test.ok(!tz.inDaylightTime(d));
                test.done();
            }
        });
    },
    
    testTZGetTimeZoneWithLoaderJulianTransitionAfterStart: function(test) {
        test.expect(3);
        ilib.setLoaderCallback(mockLoaderTZ2);
        new TimeZone({
            id: "America/Los_Angeles",
            sync: false,
            onLoad: function (tz) {
                ilib.setLoaderCallback(oldLoader);
    
                test.ok(tz !== null);
                test.deepEqual(tz.getId(), "America/Los_Angeles");
                
                // after start
                var d = DateFactory({
                    julianday: 2456725.91666669
                });
                test.ok(tz.inDaylightTime(d));
                test.done();
            }
        });
    },
    
    testTZGetTimeZoneWithLoaderJulianTransitionBeforeEnd: function(test) {
        test.expect(3);
        ilib.setLoaderCallback(mockLoaderTZ2);
        new TimeZone({
            id: "America/Los_Angeles",
            sync: false,
            onLoad: function (tz) {
                test.ok(tz !== null);
                test.deepEqual(tz.getId(), "America/Los_Angeles");
                ilib.setLoaderCallback(oldLoader);
                
                // before end
                var d = DateFactory({
                    julianday: 2456963.8749999
                });
                test.ok(tz.inDaylightTime(d));
                test.done();
            }
        });
    },
    
    testTZGetTimeZoneWithLoaderJulianTransitionAfterEnd: function(test) {
        test.expect(3);
        ilib.setLoaderCallback(mockLoaderTZ2);
        new TimeZone({
            id: "America/Los_Angeles",
            sync: false,
            onLoad: function (tz) {
                ilib.setLoaderCallback(oldLoader);
    
                test.ok(tz !== null);
                test.deepEqual(tz.getId(), "America/Los_Angeles");
    
                // after end
                var d = DateFactory({
                    julianday: 2456963.8750001
                });
                test.ok(!tz.inDaylightTime(d));
                test.done();
            }
        });
    },
    
    testTZGetCountry1: function(test) {
        test.expect(2);
        ilib.setLoaderCallback(oldLoader);
        var tz = new TimeZone({id: "America/Los_Angeles"});
        test.ok(tz !== null);
        
        test.equal(tz.getCountry(), "US");
        test.done();
    },
    
    testTZGetCountry2: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Europe/Berlin"});
        test.ok(tz !== null);
        
        test.equal(tz.getCountry(), "DE");
        test.done();
    },
    
    testTZGetCountry3: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Europe/Kiev"});
        test.ok(tz !== null);
        
        test.equal(tz.getCountry(), "UA");
        test.done();
    },
    
    testTZLinkedZonesUseDST: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Europe/Zagreb"});
        test.ok(tz !== null);
    
        test.ok(tz.useDaylightTime());
        test.done();
    },
    
    testTZLinkedZonesInDST: function(test) {
        test.expect(3);
        var tz = new TimeZone({id: "Europe/Zagreb"});
        test.ok(tz !== null);
    
        var jan1 = DateFactory({year: 2014, month: 1, day: 1, timezone: "Etc/UTC"});
        var jul1 = DateFactory({year: 2014, month: 7, day: 1, timezone: "Etc/UTC"});
        test.ok(!tz.inDaylightTime(jan1));
        test.ok(tz.inDaylightTime(jul1));
        test.done();
    },
    
    testTZLinkedZonesRightOffset: function(test) {
        test.expect(3);
        var tz = new TimeZone({id: "Europe/Zagreb"});
        test.ok(tz !== null);
    
        var jan1 = DateFactory({year: 2014, month: 1, day: 1, timezone: "Etc/UTC"});
        var jul1 = DateFactory({year: 2014, month: 7, day: 1, timezone: "Etc/UTC"});
        test.deepEqual(tz.getOffset(jan1), {h:1});
        test.deepEqual(tz.getOffset(jul1), {h:2});
        test.done();
    },
    
    testTZLinkedZonesUseDST2: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "Europe/Bratislava"});
        test.ok(tz !== null);
    
        test.ok(tz.useDaylightTime());
        test.done();
    },
    
    testTZLinkedZonesInDST2: function(test) {
        test.expect(3);
        var tz = new TimeZone({id: "Europe/Bratislava"});
        test.ok(tz !== null);
    
        var jan1 = DateFactory({year: 2014, month: 1, day: 1, timezone: "Etc/UTC"});
        var jul1 = DateFactory({year: 2014, month: 7, day: 1, timezone: "Etc/UTC"});
        test.ok(!tz.inDaylightTime(jan1));
        test.ok(tz.inDaylightTime(jul1));
        test.done();
    },
    
    testTZLinkedZonesRightOffset2: function(test) {
        test.expect(3);
        var tz = new TimeZone({id: "Europe/Bratislava"});
        test.ok(tz !== null);
    
        var jan1 = DateFactory({year: 2014, month: 1, day: 1, timezone: "Etc/UTC"});
        var jul1 = DateFactory({year: 2014, month: 7, day: 1, timezone: "Etc/UTC"});
        test.deepEqual(tz.getOffset(jan1), {h:1});
        test.deepEqual(tz.getOffset(jul1), {h:2});
        test.done();
    },

    testTZMultiLevelZoneName: function(test) {
        test.expect(2);
        var tz = new TimeZone({id: "America/Indiana/Marengo"});
        test.ok(tz !== null);

        var gd = new GregorianDate({
            year: 2011,
            month: 1,
            day: 1
        });
        test.deepEqual(tz.getOffset(gd), {h:-5});
        test.done();
    },
};
