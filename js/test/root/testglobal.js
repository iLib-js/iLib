/*
 * testglobal.js - test the ilib static routines
 *
 * Copyright © 2012-2015, 2017-2024 JEDLSoft
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
if (typeof(Locale) === "undefined") {
    var Locale = require("../../lib/Locale.js");
}

module.exports.testglobal = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testGetLocaleDefault: function(test) {
        test.expect(1);
        test.equal(ilib.getLocale(), "en-US");
        test.done();
    },
    testSetLocale: function(test) {
        test.expect(2);
        test.equal(ilib.getLocale(), "en-US");

        ilib.setLocale("it-IT");

        test.equal(ilib.getLocale(), "it-IT");
        test.done();
        delete ilib.locale; // clean up
    },
    testSetLocaleObject: function(test) {
        test.expect(2);
        test.equal(ilib.getLocale(), "en-US");

        ilib.setLocale(new Locale("it-IT"));

        // do not change the locale if the arg is not a string
        test.equal(ilib.getLocale(), "en-US");
        test.done();
    },
    testSetLocaleEmpty: function(test) {
        test.expect(2);
        test.equal(ilib.getLocale(), "en-US");

        ilib.setLocale();

        test.equal(ilib.getLocale(), "en-US");
        test.done();
    },
    testGetVersion: function(test) {
        if (ilib._getPlatform() === "qt" ) {
            test.done();
            return;
        }
        test.expect(1);
        test.equal(ilib.getVersion().substring(0,5), "14.21");
        test.done();
    },
    testGetCldrVersion: function(test) {
        test.expect(1);
        test.equal(ilib.getCLDRVersion().substring(0,4), "46.0");
        test.done();
    },
    testGetTimeZoneDefault: function(test) {
        // use a different test when the Intl object is available
        ilib._platform = undefined;
        if (ilib._global("Intl")) {
            test.done();
            return;
        }

        test.expect(1);
        ilib._platform = undefined;
        ilib.tz = undefined;

        var tmp;
        if (ilib._getPlatform() === "nodejs") {
            tmp = process.env.TZ;
            process.env.TZ = "";
        }

        if (ilib._getPlatform() === "browser") {
            navigator.timezone = undefined;
        }
        test.equal(ilib.getTimeZone(), "local");
        process.env.TZ = tmp;
        test.done();
    },
    testGetTimeZoneDefaultWithIntl: function(test) {
        // only test when the Intl object is available
        if (!ilib._global("Intl")) {
            test.done();
            return;
        }

        ilib._platform = undefined;
        ilib.tz = undefined;
        var ro = new Intl.DateTimeFormat().resolvedOptions();
        var expected = ro && ro.timeZone;
        if (expected) {
            test.expect(1);
            ilib._platform = undefined;
            ilib.tz = undefined;
            test.equal(ilib.getTimeZone(), expected);
        }
        test.done();
    },
    testSetTimeZone: function(test) {
        // use a different test when the Intl object is available
        if (ilib._global("Intl")) {
            test.done();
            return;
        }

        test.expect(2);
        ilib._platform = undefined;
        ilib.tz = undefined;
        test.equal(ilib.getTimeZone(), "local");

        ilib.setTimeZone("America/Los_Angeles");

        test.equal(ilib.getTimeZone(), "America/Los_Angeles");
        test.done();
        delete ilib.tz; // clean up
    },
    testGetTimeZoneBrowser: function(test) {
        if (ilib._getPlatform() !== "browser" || ilib._global("Intl")) {
            // only testable on a browser without the Intl object available
            test.done();
            return;
        }

        ilib._platform = undefined;
        ilib.tz = undefined;
        navigator.timezone = "America/New_York";

        test.expect(1);
        test.equal(ilib.getTimeZone(), "America/New_York");
        test.done();
        navigator.timezone = undefined;
    },
    testSetTimeZoneEmpty: function(test) {
        // use a different test when the Intl object is available
        if (ilib._global("Intl")) {
            test.done();
            return;
        }

        test.expect(2);
        ilib._platform = undefined;
        ilib.tz = undefined;
        if (ilib._getPlatform() === "browser") {
            navigator.timezone = undefined;
        }

        test.equal(ilib.getTimeZone(), "local");

        ilib.setTimeZone();

        test.equal(ilib.getTimeZone(), "local");
        test.done();
    },
    testGetTimeZoneNodejs: function(test) {
        // only test on older nodejs where the Intl object is not available
        if (ilib._getPlatform() === "nodejs" && !ilib._global("Intl")) {
            test.expect(1);
            ilib._platform = undefined;
            ilib.tz = undefined;
            if (typeof(process) === 'undefined') {
                process = {
                    env: {}
                };
            }
            if (!process.env) process.env = {};
            var tmp = process.env.TZ;
            process.env.TZ = "America/Phoenix";

            test.equal(ilib.getTimeZone(), "America/Phoenix");

            process.env.TZ = tmp;
        }
        test.done();
    },
    testGetTimeZoneRhino: function(test) {
        if (ilib._getPlatform() !== "rhino" || ilib._global("Intl")) {
            // only test this in rhino
            test.done();
            return;
        }
        ilib.tz = undefined;
        if (typeof(process) === 'undefined') {
            // under plain rhino
            environment.user.timezone = "America/New_York";
        } else {
            // under trireme on rhino emulating nodejs
            process.env.TZ = "America/New_York";
        }

        test.expect(1);
        test.equal(ilib.getTimeZone(), "America/New_York");
        test.done();
    },
    testGetTimeZoneWebOS: function(test) {
        if (ilib._getPlatform() !== "webos" || ilib._global("Intl")) {
            // only test this in webos
            test.done();
            return;
        }
        ilib.tz = undefined;
        PalmSystem.timezone = "Europe/London";

        test.expect(1);
        test.equal(ilib.getTimeZone(), "Europe/London");
        test.done();
    },
    testGetPlatformIoTjs: function(test) {
        if (typeof(global) === 'undefined' || !global.process) {
            // only test this in a platform that supports process
            test.done();
            return;
        }

        test.expect(1);

        global.process.iotjs = {
            "board": "None"
        };

        test.equal(ilib._getPlatform(), "nodejs");
        global.iotjs = undefined;
        test.done();
    },
    testGetLocaleNodejs1: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;
        if (!process.env) process.env = {};

        process.env.LANG = "th-TH";

        test.expect(1);
        test.equal(ilib.getLocale(), "th-TH");

        process.env.LANG = "";
        ilib.locale = undefined;
        test.done();
    },
    testGetLocaleNodejs2: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;

        process.env.LC_ALL = "th-TH";

        test.expect(1);
        test.equal(ilib.getLocale(), "th-TH");

        process.env.LC_ALL = "";
        ilib.locale = undefined;
        test.done();
    },
    testGetLocaleNodejsFullLocale: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;

        process.env.LC_ALL = "zh-Hans-CN";

        test.expect(1);
        test.equal(ilib.getLocale(), "zh-Hans-CN");

        process.env.LC_ALL = "";
        ilib.locale = undefined;
        test.done();
    },
    testGetLocaleNodejsLangScript: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;

        process.env.LC_ALL = "zh-Hans";

        test.expect(1);
        test.equal(ilib.getLocale(), "zh-Hans");

        process.env.LC_ALL = "";
        ilib.locale = undefined;
        test.done();
    },
    testGetLocaleNodejsLangOnly: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;

        process.env.LC_ALL = "zh";

        test.expect(1);
        test.equal(ilib.getLocale(), "zh");

        process.env.LC_ALL = "";
        ilib.locale = undefined;
        test.done();
    },
    testGetLocaleNodejsPosixLocale: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;

        process.env.LC_ALL = "C";

        test.expect(1);
        test.equal(ilib.getLocale(), "en-US");

        process.env.LC_ALL = "";
        ilib.locale = undefined;
        test.done();
    },
    testGetLocaleNodejsPosixLocaleFull: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;

        process.env.LC_ALL = "C.UTF8";

        test.expect(1);
        test.equal(ilib.getLocale(), "en-US");

        process.env.LC_ALL = "";
        ilib.locale = undefined;
        test.done();
    },
    testGetLocaleNodejsThreeLetterLanguage1: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;

        process.env.LC_ALL = "yue"; // Cantonese

        test.expect(1);
        test.equal(ilib.getLocale(), "yue");

        process.env.LC_ALL = "";
        ilib.locale = undefined;
        test.done();
    },
    testGetLocaleNodejsThreeLetterLanguage2: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;

        process.env.LC_ALL = "yue-Hant"; // Cantonese

        test.expect(1);
        test.equal(ilib.getLocale(), "yue-Hant");

        process.env.LC_ALL = "";
        ilib.locale = undefined;
        test.done();
    },
    testGetLocaleNodejsThreeLetterLanguage3: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;

        process.env.LC_ALL = "yue-Hant-CN"; // Cantonese

        test.expect(1);
        test.equal(ilib.getLocale(), "yue-Hant-CN");

        process.env.LC_ALL = "";
        ilib.locale = undefined;
        test.done();
    },
    testGetLocaleNodejsThreeDigitRegion: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;

        process.env.LC_ALL = "en-001"; // Cantonese

        test.expect(1);
        test.equal(ilib.getLocale(), "en-001");

        process.env.LC_ALL = "";
        ilib.locale = undefined;
        test.done();
    },
    testGetLocaleNodejsUnderscoreLocale: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;

        // on some platforms, it uses underscores instead of dashes
        process.env.LC_ALL = "de_DE";

        test.expect(1);
        test.equal(ilib.getLocale(), "de-DE");

        process.env.LC_ALL = "";
        ilib.locale = undefined;
        test.done();
    },
    testGetLocaleNodejsLocaleWithVariant1: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;

        // should ignore variants
        process.env.LC_ALL = "de-DE-FOOBAR";

        test.expect(1);
        test.equal(ilib.getLocale(), "de-DE");

        process.env.LC_ALL = "";
        ilib.locale = undefined;
        test.done();
    },
    testGetLocaleNodejsLocaleWithVariant2: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;

        // should ignore variants
        process.env.LC_ALL = "zh-Hans-CN-FOOBAR";

        test.expect(1);
        test.equal(ilib.getLocale(), "zh-Hans-CN");

        process.env.LC_ALL = "";
        ilib.locale = undefined;
        test.done();
    },
    testGetLocaleNodejsLocaleWithLongVariant: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;

        // should ignore variants
        process.env.LC_ALL = "zh-Hans-CN-u-col-pinyin";

        test.expect(1);
        test.equal(ilib.getLocale(), "zh-Hans-CN");

        process.env.LC_ALL = "";
        ilib.locale = undefined;
        test.done();
    },
    testGetLocaleSimulateRhino: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;
        ilib._platform = "rhino";

        global.environment = {
            user: {
                language: "de",
                country: "AT"
            }
        };

        test.expect(1);
        test.equal(ilib.getLocale(), "de-AT");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        global.environment = undefined;

        test.done();
    },
    testGetLocaleSimulateTrireme1: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;
        ilib._platform = "trireme";

        process.env.LANG = "de-AT";

        test.expect(1);
        test.equal(ilib.getLocale(), "de-AT");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        process.env.LANG = "";

        test.done();
    },
    testGetLocaleSimulateTrireme2: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;
        ilib._platform = "trireme";

        process.env.LANGUAGE = "de-AT";

        test.expect(1);
        test.equal(ilib.getLocale(), "de-AT");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        process.env.LANGUAGE = "";

        test.done();
    },
    testGetLocaleSimulateTrireme3: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;
        ilib._platform = "trireme";

        process.env.LC_ALL = "de-AT";

        test.expect(1);
        test.equal(ilib.getLocale(), "de-AT");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        process.env.LC_ALL = "";

        test.done();
    },
    testGetLocaleSimulateTriremeFullSpecifier: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;
        ilib._platform = "trireme";

        process.env.LC_ALL = "de_DE.UTF8";

        test.expect(1);
        test.equal(ilib.getLocale(), "de-DE");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        process.env.LC_ALL = "";

        test.done();
    },
    testGetLocaleSimulateTriremeFullLocale: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;
        ilib._platform = "trireme";

        process.env.LC_ALL = "zh-Hans-CN";

        test.expect(1);
        test.equal(ilib.getLocale(), "zh-Hans-CN");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        process.env.LC_ALL = "";

        test.done();
    },
    testGetLocaleSimulateWebOS: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;
        ilib._platform = "webos";

        global.PalmSystem = {
            locale: "ru-RU"
        };

        test.expect(1);
        test.equal(ilib.getLocale(), "ru-RU");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        global.PalmSystem = undefined;

        test.done();
    },
    testGetLocaleSimulateWebOSWebapp: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;
        ilib._platform = "webos-webapp";

        global.PalmSystem = {
            locale: "ru-RU"
        };

        test.expect(1);
        test.equal(ilib.getLocale(), "ru-RU");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        global.PalmSystem = undefined;

        test.done();
    },
    testGetLocaleSimulateRegularBrowser: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in nodejs
            test.done();
            return;
        }

        ilib._platform = "browser";
        ilib.locale = undefined;

        var loc = "";

        global.navigator = {
            language: "ja-JP"
        };

        test.expect(1);
        test.equal(ilib.getLocale(), "ja-JP");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        global.navigator = undefined;

        test.done();
    },
    testGetLocaleSimulateRegularBrowserLangOnly: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in nodejs
            test.done();
            return;
        }

        ilib._platform = "browser";
        ilib.locale = undefined;

        var loc = "";

        global.navigator = {
            language: "ja"
        };

        test.expect(1);
        test.equal(ilib.getLocale(), "ja");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        global.navigator = undefined;

        test.done();
    },
    testGetLocaleSimulateRegularBrowserFullLocale: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in nodejs
            test.done();
            return;
        }

        ilib._platform = "browser";
        ilib.locale = undefined;

        var loc = "";

        global.navigator = {
            language: "zh-Hans-CN"
        };

        test.expect(1);
        test.equal(ilib.getLocale(), "zh-Hans-CN");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        global.navigator = undefined;

        test.done();
    },
    testGetLocaleSimulateRegularBrowserNonBCP47: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in nodejs
            test.done();
            return;
        }

        ilib._platform = "browser";
        ilib.locale = undefined;

        var loc = "";

        global.navigator = {
            language: "ja_jp"
        };

        test.expect(1);
        test.equal(ilib.getLocale(), "ja-JP");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        global.navigator = undefined;

        test.done();
    },
    testGetLocaleSimulateIEBrowser1: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in nodejs
            test.done();
            return;
        }

        ilib._platform = "browser";
        ilib.locale = undefined;

        var loc = "";

        global.navigator = {
            browserLanguage: "ja-JP"
        };

        test.expect(1);
        test.equal(ilib.getLocale(), "ja-JP");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        global.navigator = undefined;

        test.done();
    },
    testGetLocaleSimulateIEBrowser2: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in nodejs
            test.done();
            return;
        }

        ilib._platform = "browser";
        ilib.locale = undefined;

        var loc = "";

        global.navigator = {
            userLanguage: "ko-KR"
        };

        test.expect(1);
        test.equal(ilib.getLocale(), "ko-KR");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        global.navigator = undefined;

        test.done();
    },
    testGetLocaleSimulateIEBrowser3: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in nodejs
            test.done();
            return;
        }

        ilib._platform = "browser";
        ilib.locale = undefined;

        var loc = "";

        global.navigator = {
            systemLanguage: "zh-CN"
        };

        test.expect(1);
        test.equal(ilib.getLocale(), "zh-CN");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        global.navigator = undefined;

        test.done();
    },
    testGetLocaleSimulateIEBrowserNonBCP: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in nodejs
            test.done();
            return;
        }

        ilib._platform = "browser";
        ilib.locale = undefined;

        var loc = "";

        global.navigator = {
            systemLanguage: "zh_cn"
        };

        test.expect(1);
        test.equal(ilib.getLocale(), "zh-CN");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        global.navigator = undefined;

        test.done();
    },
    testGetLocaleSimulateIEBrowserFull: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in nodejs
            test.done();
            return;
        }

        ilib._platform = "browser";
        ilib.locale = undefined;

        var loc = "";

        global.navigator = {
            systemLanguage: "zh-Hans-CN"
        };

        test.expect(1);
        test.equal(ilib.getLocale(), "zh-Hans-CN");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        global.navigator = undefined;

        test.done();
    },
    testGetLocaleSimulateQt: function(test) {
        if (ilib._getPlatform() !== "nodejs") {
            // only test this in nodejs
            test.done();
            return;
        }

        ilib._platform = "qt";
        ilib.locale = undefined;

        var loc = "";

        global.Qt = {
            locale: function() {
                return {
                    name: "fr-FR"
                };
            }
        };

        test.expect(1);
        test.equal(ilib.getLocale(), "fr-FR");

        // clean up
        ilib._platform = undefined;
        ilib.locale = undefined;
        global.Qt = undefined;

        test.done();
    },
    testGetLocaleRhino: function(test) {
        if (ilib._getPlatform() !== "rhino") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;

        if (typeof(process) === 'undefined') {
            // under plain rhino
            environment.user.language = "de";
            environment.user.country = "AT";
        } else {
            // under trireme on rhino emulating nodejs
            process.env.LANG = "de_AT.UTF8";
        }

        test.expect(1);
        test.equal(ilib.getLocale(), "de-AT");

        if (typeof(process) === 'undefined') {
            // under plain rhino
            environment.user.language = undefined;
            environment.user.country = undefined;
        } else {
            process.env.LANG = "en_US.UTF8";
        }
        test.done();
    },
    testGetLocaleWebOS: function(test) {
        if (ilib._getPlatform() !== "webos") {
            // only test this in node
            test.done();
            return;
        }

        ilib.locale = undefined;

        PalmSystem.locale = "ru-RU";

        test.expect(1);
        test.equal(ilib.getLocale(), "ru-RU");

        PalmSystem.locale = undefined;
        test.done();
    },
    testGetLocaleNotString: function(test) {
        if (ilib.isDynCode()) {
            // can't test this with dynamically loaded code because the global context
            // is different for each module and we cannot set global variables, so we
            // cannot simulate the conditions where this code would work
            test.done();
            return;
        }
        ilib._platform = undefined;
        ilib.locale = new Locale("it-IT");

        // should remove the locale object and make it into a string
        test.expect(1);
        test.equal(ilib.getLocale(), "en-US");
        test.done();
    },
    testGetLocaleBrowser: function(test) {
        if (ilib._getPlatform() !== "browser") {
            // only test this in a real browser
            test.done();
            return;
        }
        ilib.locale = undefined;

        var loc = "";

        if (navigator.language.length > 5) {
            var l = navigator.language;
            loc = l.substring(0,3) + l.charAt(3).toUpperCase() + l.substring(4,8).toLowerCase() + l.substring(8).toUpperCase();
        } else if (navigator.language.length > 2) {
            loc = navigator.language.substring(0,3) + navigator.language.substring(3).toUpperCase();
        } else {
            loc = navigator.language;
        }
        if (loc === "en") {
            loc = "en-US";
        }
        test.expect(1);
        test.equal(ilib.getLocale(), loc);
        test.done();
    },
    testIsArrayNewArrayObj: function(test) {
        test.expect(1);
        var a = new Array();
        test.ok(ilib.isArray(a));
        test.done();
    },
    testIsArrayNewArrayBrackets: function(test) {
        test.expect(1);
        var a = [];
        test.ok(ilib.isArray(a));
        test.done();
    },
    testIsArrayObject: function(test) {
        test.expect(1);
        var a = {foo:234};
        test.ok(!ilib.isArray(a));
        test.done();
    },
    testIsArrayObjectWithNumericProperties: function(test) {
        test.expect(1);
        var a = {"0": "d", "1": "c"};
        test.ok(!ilib.isArray(a));
        test.done();
    },
    testIsArrayNumber: function(test) {
        test.expect(1);
        var a = 234;
        test.ok(!ilib.isArray(a));
        test.done();
    },
    testIsArrayString: function(test) {
        test.expect(1);
        var a = "asdf";
        test.ok(!ilib.isArray(a));
        test.done();
    },
    testIsArrayNull: function(test) {
        test.expect(1);
        var a = null;
        test.ok(!ilib.isArray(a));
        test.done();
    },
    testIsArrayUndefined: function(test) {
        test.expect(1);
        var a = undefined;
        test.ok(!ilib.isArray(a));
        test.done();
    },
    testExtendSimple: function(test) {
        test.expect(1);
        var object1 = {"a": "A", "b": "B"},
            object2 = {"c": "C", "d": "D"};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"a": "A", "b": "B", "c": "C", "d": "D"});
        test.done();
    },
    testExtendReturnObject1: function(test) {
        test.expect(1);
        var object1 = {"a": "A", "b": "B"},
            object2 = {"c": "C", "d": "D"};

        var x = ilib.extend(object1, object2);
        test.equal(x, object1);
        test.done();
    },
    testExtendArrays: function(test) {
        test.expect(1);
        var object1 = {"a": ["b", "c"]},
            object2 = {"a": ["d"]};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"a": ["b", "c", "d"]});
        test.done();
    },
    testExtendArraysDups: function(test) {
        test.expect(1);
        var object1 = {"a": ["b", "c"]},
            object2 = {"a": ["c", "d"]};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"a": ["b", "c", "c", "d"]});
        test.done();
    },
    testExtendArraysEmptySource: function(test) {
        test.expect(1);
        var object1 = {"a": []},
            object2 = {"a": ["d"]};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"a": ["d"]});
        test.done();
    },
    testExtendArraysEmptyTarget: function(test) {
        test.expect(1);
        var object1 = {"a": ["b", "c"]},
            object2 = {"a": []};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"a": ["b", "c"]});
        test.done();
    },
    testExtendArraysIncongruentTypes1: function(test) {
        test.expect(1);
        var object1 = {"a": ["b", "c"]},
            object2 = {"a": "d"};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"a": "d"});
        test.done();
    },
    testExtendArraysIncongruentTypes2: function(test) {
        test.expect(1);
        var object1 = {"a": "b"},
            object2 = {"a": ["d"]};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"a": ["d"]});
        test.done();
    },
    testExtendSimpleProperty: function(test) {
        test.expect(1);
        var object1 = {"a": "A", "b": "B"},
            object2 = {"b": "X"};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"a": "A", "b": "X"});
        test.done();
    },
    testExtendComplexProperty: function(test) {
        test.expect(1);
        var object1 = {"a": "A", "b": {"x": "B"}},
            object2 = {"b": "X"};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"a": "A", "b": "X"});
        test.done();
    },
    testExtendSubobjects: function(test) {
        test.expect(1);
        var object1 = {"b": {"x": "X", "y": "Y"}},
            object2 = {"b": {"x": "M", "y": "N"}};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"b": {"x": "M", "y": "N"}});
        test.done();
    },
    testExtendSubobjectsLeaveObj1PropsUntouched: function(test) {
        test.expect(1);
        var object1 = {"a": "A", "b": {"x": "X", "y": "Y", "z": "Z"}},
            object2 = {"b": {"x": "M", "y": "N"}};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}});
        test.done();
    },
    testExtendSubobjectsAddProps: function(test) {
        test.expect(1);
        var object1 = {"a": "A", "b": {"x": "X", "y": "Y"}},
            object2 = {"b": {"x": "M", "y": "N", "z": "Z"}};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}});
        test.done();
    },
    testExtendSubobjectsAddProps: function(test) {
        test.expect(1);
        var object1 = {"a": "A", "b": {"x": "X", "y": "Y"}},
            object2 = {"b": {"x": "M", "y": "N", "z": "Z"}};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}});
        test.done();
    },
    testExtendBooleans: function(test) {
        test.expect(1);
        var object1 = {"a": true, "b": true},
            object2 = {"b": false};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"a": true, "b": false});
        test.done();
    },
    testExtendAddBooleans: function(test) {
        test.expect(1);
        var object1 = {"a": true, "b": true},
            object2 = {"c": false};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"a": true, "b": true, "c": false});
        test.done();
    },
    testExtendNumbers: function(test) {
        test.expect(1);
        var object1 = {"a": 1, "b": 2},
            object2 = {"b": 3};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"a": 1, "b": 3});
        test.done();
    },
    testExtendNumbersWithZero: function(test) {
        test.expect(1);
        var object1 = {"a": 1, "b": 2},
            object2 = {"b": 0};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"a": 1, "b": 0});
        test.done();
    },
    testExtendNumbersAddZero: function(test) {
        test.expect(1);
        var object1 = {"a": 1, "b": 2},
            object2 = {"c": 0};

        ilib.extend(object1, object2);
        test.deepEqual(object1, {"a": 1, "b": 2, "c": 0});
        test.done();
    }


    /*
    var testGlobalNumber = 42;

    testIsGlobal: function(test) {
        test.expect(1);
        test.ok(ilib._isGlobal("testGlobalNumber"));
        test.done();
    },
    testIsGlobalNot: function(test) {
        test.expect(1);
        test.ok(!ilib._isGlobal("asdfasdfasdf"));
        test.done();
    },
    testGlobal: function(test) {
        test.expect(1);
        test.equal(ilib._global("testGlobalNumber"), 42);
        test.done();
    },
    testGlobalUndefined: function(test) {
        test.expect(1);
        test.ok(typeof(ilib._global("testGlobalNumber2")) === "undefined");
        test.done();
    }
    */

};
