/*
 * testdatefmt_en_GB.js - test the date formatter object in British English
 *
 * Copyright © 2012-2015, 2017, 2021-2024 JEDLSoft
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

if (typeof(JulianDate) === "undefined") {
    var JulianDate = require("../../lib/JulianDate.js");
}
if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../../lib/GregorianDate.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../lib/DateFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

if (typeof(DateFactory) === "undefined") {
    var DateFactory = require("../../lib/DateFactory.js");
}


function getChromeVersion () {
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    return raw ? parseInt(raw[2], 10) : false;
}

module.exports.testdatefmt_en_GB = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDateFmtGBConstructorEmpty: function(test) {
        test.expect(1);
        var fmt = new DateFmt();

        test.ok(fmt !== null);
        test.done();
    },
    testDateFmtGBSimpleShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "short"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011");
        test.done();
    },
    testDateFmtGBSimpleMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "medium"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Sept 2011");
        test.done();
    },
    testDateFmtGBSimpleLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "long"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    testDateFmtGBSimpleFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "full"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    testDateFmtSimpleShort_en_GB_useIntl: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("en-GB")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "short", useIntl: true});
        test.ok(fmt !== null);

        var date = DateFactory({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });

        if(ilib._getPlatform() === "nodejs"){
            var cldrVersion = Number(process.versions["cldr"]);
            var nodeMajorVersion = process.versions["node"].split(".")[0];
            if (cldrVersion < 36) {
                test.equal(fmt.format(date), "9/29/2011");
            } else if (cldrVersion < 38) {
                /*
                * Both node v12.16.1 and v14.16.1 say the cldr version is 37.0.
                * But it returns a different result.
                */
                if (nodeMajorVersion === "14") {
                    test.equal(fmt.format(date), "29/09/2011");
                } else {
                    test.equal(fmt.format(date), "9/29/11");
                }
            } else {
                test.equal(fmt.format(date), "29/09/2011");
            }
        } else {
            test.equal(fmt.format(date), "29/09/2011");
        }
        test.done();
    },
    testDateFmtSimpleMedium_en_GB_useIntl: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("en-GB")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "medium", useIntl: true});
        test.ok(fmt !== null);

        var date = DateFactory({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });

        if (ilib._getPlatform() === "nodejs") {
            var cldrVersion = Number(process.versions["cldr"]);
            var nodeMajorVersion = process.versions["node"].split(".")[0];
            //console.log("version: " + version + " majorVersion: " + majorVersion);
            if (cldrVersion < 36) {
                test.equal(fmt.format(date), "9/29/2011");
            } else if (cldrVersion < 38) {
                if (nodeMajorVersion === "14") {
                    test.equal(fmt.format(date), "29 Sep 2011");
                } else {
                    test.equal(fmt.format(date), "Sep 29, 2011");
                }
            } else {
                test.equal(fmt.format(date), "29 Sept 2011");
            }
        } else {
            test.equal(fmt.format(date), "29 Sept 2011");
        }
        test.done();
    },
    testDateFmtSimpleLong_en_GB_useIntl: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("en-GB")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "long", useIntl: true});
        test.ok(fmt !== null);

        var date = DateFactory({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });

        if(ilib._getPlatform() === "nodejs"){
            var cldrVersion = Number(process.versions["cldr"]);
            var nodeMajorVersion = process.versions["node"].split(".")[0];
            if (cldrVersion < 36) {
                test.equal(fmt.format(date), "9/29/2011");
            } else if (cldrVersion < 38) {
                if (nodeMajorVersion === "14") {
                    test.equal(fmt.format(date), "29 September 2011");
                } else {
                    test.equal(fmt.format(date), "September 29, 2011");
                }

            } else {
                test.equal(fmt.format(date), "29 September 2011");
            }
        } else {
            test.equal(fmt.format(date), "29 September 2011");
        }

        test.done();
    },
    testDateFmtSimpleFull_en_GB_useIntl: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("en-GB")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "full", useIntl: true});
        test.ok(fmt !== null);

        var date = DateFactory({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });

        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    testDateFmtSimpleLong_en_GB_useIntl_dmwy: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("en-GB")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "full", date:"dmwy", useIntl: true});
        test.ok(fmt !== null);

        var date = DateFactory({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });

        var platform = ilib._getPlatform();
        if(platform === "nodejs"){
            var cldrVersion = Number(process.versions["cldr"]);
            var nodeMajorVersion = process.versions["node"].split(".")[0];
            if (cldrVersion < 36) {
                test.equal(fmt.format(date), "9/29/2011");
            } else if (cldrVersion < 38) {
                if (nodeMajorVersion === "14") {
                    test.equal(fmt.format(date), "Thursday, 29 September 2011");
                } else {
                    test.equal(fmt.format(date), "Thursday, September 29, 2011");
                }
            } else if (cldrVersion < 44) {
                test.equal(fmt.format(date), "Thursday, 29 September 2011");
            } else {
                test.equal(fmt.format(date), "Thursday 29 September 2011");
            }
        } else if (platform === "browser") {
            var browser = ilib._getBrowser();
            if (browser === "chrome" && getChromeVersion() >= 130) {
                //chrome 131.0.6778.139
                test.equal(fmt.format(date), "Thursday 29 September 2011");
            } else {
                // firefox 133.0.3
                test.equal(fmt.format(date), "Thursday, 29 September 2011");
            }
        } else {
            test.equal(fmt.format(date), "Thursday, 29 September 2011");
        }
        test.done();
    },
    testDateFmtGBSimpleTimeShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "short", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    testDateFmtGBSimpleTimeMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "medium", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    testDateFmtGBSimpleTimeLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "long", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    testDateFmtGBSimpleTimeFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "full", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    testDateFmtGBDateTimeSimpleShort: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "short", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011, 13:45");
        test.done();
    },
    testDateFmtGBDateTimeSimpleMedium: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "medium", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Sept 2011, 13:45");
        test.done();
    },
    testDateFmtGBDateTimeSimpleLong: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "long", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011 at 13:45");
        test.done();
    },
    testDateFmtGBDateTimeSimpleFull: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "full", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011 at 13:45");
        test.done();
    },
    testDateFmtGBTemplateCalendar: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", calendar: "julian", template: "yyyy-MM-dd"});
        test.ok(fmt !== null);

        var date = new JulianDate({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29");
        test.done();
    },
    testDateFmtGBTemplateCalendarIncompatibleDateType: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", calendar: "julian", template: "yyyy-MM-dd HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        // convert automatically to a Julian calendar date
        test.equal(fmt.format(date), "2011-09-16 13:45");
        test.done();
    },
    testDateFmtGBTemplateClock12SwitchHH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", clock: "12", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    testDateFmtGBTemplateClock12Switchkk: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", clock: "12", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    testDateFmtGBTemplateClock24Switchhh: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", clock: "24", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    testDateFmtGBTemplateClock24SwitchKK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", clock: "24", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    testDateFmtGBTemplateNoClockDoNotFollowLocaleDefault12hh: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", locale: "en-GB", template: "hh:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    testDateFmtGBTemplateNoClockDoNotFollowLocaleDefault12KK: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", locale: "en-GB", template: "KK:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    testDateFmtGBTemplateNoClockDoNotFollowLocaleDefault24HH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", locale: "en-GB", template: "HH:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    testDateFmtGBTemplateNoClockDoNotFollowLocaleDefault24kk: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", locale: "en-GB", template: "kk:mm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    testDateFmtGBTypeDate: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "date"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011");
        test.done();
    },
    testDateFmtGBTypeTime: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    testDateFmtGBTypeDateTime: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "datetime"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011, 13:45");
        test.done();
    },
    testDateFmtGBShortDateComponentsY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011");
        test.done();
    },
    testDateFmtGBShortDateComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09");
        test.done();
    },
    testDateFmtGBShortDateComponentsN: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", date: "n"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "S");
        test.done();
    },
    testDateFmtGBShortDateComponentsD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29");
        test.done();
    },
    testDateFmtGBShortDateComponentsDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09");
        test.done();
    },
    testDateFmtGBShortDateComponentsMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09/2011");
        test.done();
    },
    testDateFmtGBShortDateComponentsDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29/09/2011");
        test.done();
    },
    testDateFmtGBShortDateComponentsWDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T, 29/09");
        test.done();
    },
    testDateFmtGBShortDateComponentsWDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "T, 29/09/2011");
        test.done();
    },
    testDateFmtGBFullDateComponentsY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "full", date: "y"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011");
        test.done();
    },
    testDateFmtGBFullDateComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "full", date: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September");
        test.done();
    },
    testDateFmtGBFullDateComponentsD: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "full", date: "d"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29");
        test.done();
    },
    testDateFmtGBFullDateComponentsDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "full", date: "dm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September");
        test.done();
    },
    testDateFmtGBFullDateComponentsMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "full", date: "my"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "September 2011");
        test.done();
    },
    testDateFmtGBFullDateComponentsDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "full", date: "dmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 September 2011");
        test.done();
    },
    testDateFmtGBFullDateComponentsWDM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "full", date: "wdm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Thursday, 29 September");
        test.done();
    },
    testDateFmtGBFullDateComponentsWDMY: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", length: "full", date: "wdmy"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Thursday, 29 September 2011");
        test.done();
    },
    testDateFmtGBShortTimeComponentsS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "37");
        test.done();
    },
    testDateFmtGBShortTimeComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45");
        test.done();
    },
    testDateFmtGBShortTimeComponentsH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13");
        test.done();
    },
    testDateFmtGBShortTimeComponentsMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45:37");
        test.done();
    },
    testDateFmtGBShortTimeComponentsHM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    testDateFmtGBShortTimeComponentsHMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    testDateFmtGBShortTimeComponentsHMA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    testDateFmtGBShortTimeComponentsHMZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-GB",
            type: "time",
            time: "hmz",
            timezone: "Europe/London"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 GMT/BST");
        test.done();
    },
    testDateFmtGBShortTimeComponentsHMAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-GB",
            type: "time",
            time: "hmaz",
            timezone: "Europe/London"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 GMT/BST");
        test.done();
    },
    testDateFmtGBShortTimeComponentsHMSA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    testDateFmtGBShortTimeComponentsHMSZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-GB",
            type: "time",
            time: "hmsz",
            timezone: "Europe/London"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 GMT/BST");
        test.done();
    },
    testDateFmtGBShortTimeComponentsHMSAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-GB",
            type: "time",
            time: "hmsaz",
            timezone: "Europe/London"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 GMT/BST");
        test.done();
    },
    testDateFmtSimpleTime_en_GB_Intl_ahm: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("en-GB")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", useIntl: true});
        test.ok(fmt !== null);

        var date = DateFactory({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 10,
            millisecond: 0
        });

        if(ilib._getPlatform() === "nodejs") {
            var cldrVersion = Number(process.versions["cldr"]);
            var nodeMajorVersion = process.versions["node"].split(".")[0];
            if (cldrVersion < 36) {
                test.equal(fmt.format(date), "9/29/2011");
            } else if (cldrVersion < 38) {
                if (nodeMajorVersion === "14") {
                    test.equal(fmt.format(date), "13:45");
                } else {
                    test.equal(fmt.format(date), "1:45 PM");
                }
            } else {
                test.equal(fmt.format(date), "13:45");
            }
        } else {
            test.equal(fmt.format(date), "13:45");
        }
        test.done();
    },
    testDateFmtSimpleTime_en_GB_Intl_ahms: function(test) {
        if(!DateFmt.isIntlDateTimeAvailable("en-GB")){
            // The result is different depending on the node version.
            test.done();
            return;
        }
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", time: "ahms", useIntl: true});
        test.ok(fmt !== null);

        var date = DateFactory({
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 10,
            millisecond: 0
        });

        if(ilib._getPlatform() === "nodejs"){
            var cldrVersion = Number(process.versions["cldr"]);
            var nodeMajorVersion = process.versions["node"].split(".")[0];
            if (cldrVersion < 36) {
                test.equal(fmt.format(date), "9/29/2011");
            } else if (cldrVersion < 38) {
                if (nodeMajorVersion === "14") {
                    test.equal(fmt.format(date), "13:45:10");
                } else {
                    test.equal(fmt.format(date), "1:45:10 PM");
                }
            } else {
                test.equal(fmt.format(date), "13:45:10");
            }
        } else {
            test.equal(fmt.format(date), "13:45:10");
        }
        test.done();
    },
    testDateFmtGBFullTimeComponentsS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", length: "full", time: "s"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "37");
        test.done();
    },
    testDateFmtGBFullTimeComponentsM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", length: "full", time: "m"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45");
        test.done();
    },
    testDateFmtGBFullTimeComponentsH: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", length: "full", time: "h"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13");
        test.done();
    },
    testDateFmtGBFullTimeComponentsMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", length: "full", time: "ms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45:37");
        test.done();
    },
    testDateFmtGBFullTimeComponentsHM: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", length: "full", time: "hm"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    testDateFmtGBFullTimeComponentsHMS: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", length: "full", time: "hms"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    testDateFmtGBFullTimeComponentsHMA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", length: "full", time: "hma"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    testDateFmtGBFullTimeComponentsHMZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-GB",
            type: "time",
            length: "full",
            time: "hmz",
            timezone: "Europe/London"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 GMT/BST");
        test.done();
    },
    testDateFmtGBFullTimeComponentsHMAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-GB",
            type: "time",
            length: "full",
            time: "hmaz",
            timezone: "Europe/London"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 GMT/BST");
        test.done();
    },
    testDateFmtGBFullTimeComponentsHMSA: function(test) {
        test.expect(2);
        var fmt = new DateFmt({locale: "en-GB", type: "time", length: "full", time: "hmsa"});
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    testDateFmtGBFullTimeComponentsHMSZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-GB",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/London"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 GMT/BST");
        test.done();
    },
    testDateFmtGBFullTimeComponentsHMSAZ: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-GB",
            type: "time",
            length: "full",
            time: "hmsaz",
            timezone: "Europe/London"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 GMT/BST");
        test.done();
    },
    testDateFmtGBWithTimeZoneAndNoDST: function(test) {
        test.expect(2);
        var fmt = new DateFmt({
            locale: "en-GB",
            type: "time",
            length: "full",
            time: "hmsz",
            timezone: "Europe/London"
        });
        test.ok(fmt !== null);

        var date = new GregorianDate({
            locale: "en-GB",
            year: 2011,
            month: 12,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 GMT/BST");
        test.done();
    }
};