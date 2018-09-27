/*
 * testdurfmt_or_IN.js - test the duration formatter object
 * 
 * Copyright © 2015,2017, JEDLSoft
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

if (typeof(DurationFmt) === "undefined") {
    var DurationFmt = require("../../../lib/DurationFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testdurfmt_or_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDurFmtORFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "or-IN",
            length: "short"
        });
        test.ok(fmt !== null);
        
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });
        test.equal(duration.toString(), "1 y, 1 m, 1 w, 1 d, 1 h, 1 min, 1 s");
        test.done();
    },
    
    testDurFmtORFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "or-IN",
            length: "short",
            style: "text"
        });
        test.ok(fmt !== null);
        
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });
        test.equal(duration.toString(), "1 y, 1 m, 1 w, 1 d, 1 h, 1 min, 1 s");
        test.done();
    },
    
    testDurFmtORFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "or-IN",
            length: "short",
            style: "clock"
        });
        test.ok(fmt !== null);
        
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });
        test.equal(duration.toString(), "1 y, 1 m, 1 w, 1 d, 1:01:01");
        test.done();
    },
    
    testDurFmtORFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "or-IN",
            length: "medium"
        });
        test.ok(fmt !== null);
        
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });
        test.equal(duration.toString(), "1 y, 1 m, 1 w, 1 d, 1 h, 1 min, 1 s");
        test.done();
    },
    
    testDurFmtORFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "or-IN",
            length: "long"
        });
        test.ok(fmt !== null);
        
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });
        test.equal(duration.toString(), "1 y, 1 m, 1 w, 1 d, 1 h, 1 min, 1 s");
        test.done();
    },
    
    testDurFmtORFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "or-IN",
            length: "full"
        });
        test.ok(fmt !== null);
        
        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1,
            minute: 1,
            second: 1
        });
        test.equal(duration.toString(), "1 y, 1 m, 1 w, 1 d, 1 h, 1 min, 1 s");
        test.done();
    },
    
    
    testDurFmtORAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "or-IN",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 2,
                    month: 2,
                    week: 2,
                    day: 2,
                    hour: 2,
                    minute: 2,
                    second: 2
                });
                test.equal(duration.toString(), "2 y, 2 m, 2 w, 2 d, 2 h, 2 min, 2 s");
                test.done();
            }
        });
    },
    
    testDurFmtORFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "or-IN",
            length: "short",
            style: "clock",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);
                
                var duration = fmt.format({
                    year: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    hour: 1,
                    minute: 1,
                    second: 1
                });
                test.equal(duration.toString(), "1 y, 1 m, 1 w, 1 d, 1:01:01");
                test.done();
            }
        });
    }
    
};
