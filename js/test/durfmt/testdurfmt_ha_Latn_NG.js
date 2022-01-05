/*
 * testdurfmt_or_IN.js - test the duration formatter object
 * 
 * Copyright © 2015,2017,2021 JEDLSoft
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
    var DurationFmt = require("../../lib/DurationFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testdurfmt_ha_Latn_NG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDurFmtHAFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ha-Latn-NG",
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
        test.equal(duration.toString(), "shkr 1, w1, m1, r1, s1, minti1, d 1");
        test.done();
    },
    
    testDurFmtHAFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ha-Latn-NG",
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
        test.equal(duration.toString(), "shkr 1, w1, m1, r1, s1, minti1, d 1");
        test.done();
    },
    
    testDurFmtHAFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ha-Latn-NG",
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
        test.equal(duration.toString(), "shkr 1, w1, m1, r1, 01:01:01");
        test.done();
    },
    
    testDurFmtHAFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ha-Latn-NG",
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
        test.equal(duration.toString(), "shkr 1, w1, m1, r1, s1, minti1, d 1");
        test.done();
    },
    
    testDurFmtHAFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ha-Latn-NG",
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
        test.equal(duration.toString(), "shkr 1, wat 1, mk 1, rana 1, s 1, mnt 1, d 1");
        test.done();
    },
    
    testDurFmtHAFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ha-Latn-NG",
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
        test.equal(duration.toString(), "shekara 1, wata 1, mako 1, rana 1, sa'a 1, minti 1, daƙiƙa 1");
        test.done();
    },
    
    
    testDurFmtHAAsyncWithLocale: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ha-Latn-NG",
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
                test.equal(duration.toString(), "shekaru 2, watanni 2, makonni 2, ranaku 2, sa'o'i 2, mintoci 2, daƙiƙoƙi 2");
                test.done();
            }
        });
    },
    
    testDurFmtHAFormatShortClockAsync: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ha-Latn-NG",
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
                test.equal(duration.toString(), "shkr 1, w1, m1, r1, 01:01:01");
                test.done();
            }
        });
    }
    
};
