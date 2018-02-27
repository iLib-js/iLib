/*
 * testglobal.js - test the ilib static routines
 *
 * Copyright © 2012-2015, 2017-2018, JEDLSoft
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
    var ilib = require("../../../lib/ilib.js");
}
if (typeof(Locale) === "undefined") {
    var Locale = require("../../../lib/Locale.js");
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
        test.expect(1);
        test.equal(ilib.getVersion().substring(0,4), "13.1");
        test.done();
    },
    
    testGetTimeZoneDefault: function(test) {
        test.expect(1);
        ilib._platform = undefined;
        ilib.tz = undefined;
        
        if (ilib._getPlatform() === "nodejs") {
            process.env.TZ = "";
        }
    
        if (ilib._getPlatform() === "browser") {
            navigator.timezone = undefined;
        }
        test.equal(ilib.getTimeZone(), "local");
        test.done();
    },
    
    testSetTimeZone: function(test) {
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
        if (ilib._getPlatform() !== "browser") {
            // only testable on a browser
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
        if (ilib._getPlatform() === "nodejs") {
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
        if (ilib._getPlatform() !== "rhino") {
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
        if (ilib._getPlatform() !== "webos") {
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
        test.done();
        
        process.env.LANG = "";
        ilib.locale = undefined;
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
        test.done();
        
        process.env.LC_ALL = "";
        ilib.locale = undefined;
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
        test.done();
        
        if (typeof(process) === 'undefined') {
            // under plain rhino
            environment.user.language = undefined;
            environment.user.country = undefined;
        } else {
            process.env.LANG = "en_US.UTF8";
        }
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
        test.done();
        
        PalmSystem.locale = undefined;
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
    
    testGetTimeZoneBrowser: function(test) {
        if (ilib._getPlatform() !== "browser") {
            // only test this in a real browser
            test.done();
            return;
        }
        ilib.tz = undefined;
        navigator.timezone = 'America/Los_Angeles';             
        
        test.expect(1);
        test.equal(ilib.getTimeZone(), "America/Los_Angeles");
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