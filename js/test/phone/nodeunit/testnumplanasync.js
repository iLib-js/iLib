/*
 * testnumplanasync.js - Test the phone numbering plan.
 * 
 * Copyright © 2018, JEDLSoft
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
    var ilib = require("../.././../lib/ilib.js");
}
if (typeof(NumberingPlan) === "undefined") {
    var NumberingPlan = require("../.././../lib/NumberingPlan.js");
}

module.exports.numplanasync = {
    testNumberingPlanAsync1: function(test) {
        test.expect(2);
        new NumberingPlan({
            locale: "en-US",
            sync: false,
            onLoad: function(plan) {
                test.ok(typeof(plan) !== "undefined");
                test.equal(plan.getName(), "US");
                test.done();
            }
        });
    },
    
    testNumberingPlanAsync2: function(test) {
        test.expect(2);
        new NumberingPlan({
            locale: "de-DE",
            sync: false,
            onLoad: function(plan) {
                test.ok(typeof(plan) !== "undefined");
                test.equal(plan.getName(), "DE");
                test.done();
            }
        });
    },
    
    testNumberingPlanAsyncUnknown: function(test) {
        test.expect(2);
        new NumberingPlan({
            locale: "unknown-unknown",
            sync: false,
            onLoad: function(plan) {
                test.ok(typeof(plan) !== "undefined");
                test.equal(plan.getName(), "XX");
                test.done();
            }
        });
    },
    
    testNumberingPlanAsyncUnrecognized: function(test) {
        test.expect(2);
        new NumberingPlan({
            locale: "zu-ZZ",
            sync: false,
            onLoad: function(plan) {
                test.ok(typeof(plan) !== "undefined");
                test.equal(plan.getName(), "XX");
                test.done();
            }
        });
    }
};
