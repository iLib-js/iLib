/*
 * numplan.js - Test the phone numbering plan.
 * 
 * Copyright © 2014-2015,2017, JEDLSoft
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

function mockLoaderNP(paths, sync, params, callback) {
    var data = [];
    
    data.push(ilib.data.numplan); // for the generic, shared stuff
    data.push(ilib.data.numplan_US);
    
    if (typeof(callback) !== 'undefined') {
        callback.call(this, data);    
    }
    return data;
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

var oldLoader = ilib._load;

module.exports.numplan = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    
    tearDown: function(callback) {
        ilib._load = oldLoader;
        callback();
    },

    testGet1: function(test) {
        test.expect(2);
        var plan = new NumberingPlan({locale: "en-US"});
        test.ok(typeof(plan) !== "undefined");
        test.equal(plan.getName(), "US");
        test.done();
    },
    
    testGet2: function(test) {
        test.expect(2);
        var plan = new NumberingPlan({locale: "de-DE"});
        test.ok(typeof(plan) !== "undefined");
        test.equal(plan.getName(), "DE");
        test.done();
    },
    
    testGetUnknown: function(test) {
        test.expect(2);
        var plan = new NumberingPlan({locale: "unknown-unknown"});
        test.ok(typeof(plan) !== "undefined");
        test.equal(plan.getName(), "XX");
        test.done();
    },
    
    testGetUnrecognized: function(test) {
        test.expect(2);
        var plan = new NumberingPlan({locale: "zu-ZZ"});
        test.ok(typeof(plan) !== "undefined");
        test.equal(plan.getName(), "XX");
        test.done();
    },
    
    testGetDefault: function(test) {
        test.expect(2);
        var plan = new NumberingPlan({});
        test.ok(typeof(plan) !== "undefined");
        test.equal(plan.getName(), "US");
        test.done();
    },
    
    testGetContextFreeContent: function(test) {
        test.expect(2);
        var plan = new NumberingPlan({locale: "en-GB"});
        test.ok(typeof(plan) !== "undefined");
        test.equal(plan.getContextFree(), false);
        test.done();
    },
    
    testGetContextFreeContent: function(test) {
        test.expect(2);
        var plan = new NumberingPlan({locale: "en-US"});
        test.ok(typeof(plan) !== "undefined");
        test.equal(plan.getContextFree(), undefined);
        test.done();
    },
    
    testRightContents: function(test) {
        test.expect(13);
        var plan = new NumberingPlan({locale: "en-US"});
        test.ok(typeof(plan) !== "undefined");
        test.equal(plan.getName(), "US");
        test.equal(plan.getTrunkCode(), "1");
        test.equal(plan.getIDDCode(), "011");
        test.equal(plan.getFieldLength('areaCode'), 3);
        test.equal(plan.getFieldLength('minLocalLength'), 7);
        test.equal(plan.getFieldLength('serviceCode'), 0);
        test.equal(plan.getFieldLength('cic'), 7);
        test.equal(plan.getFieldLength('mobilePrefix'), 0);
        test.equal(plan.getFieldLength('emergency'), 0);
        test.equal(plan.getFieldLength('vsc'), 0);
        test.equal(plan.getPlanStyle(), "closed");
        test.equal(plan.getCommonFormatChars(), " ()-.");    
        test.done();
    },
    
    testNumPlanLoadLocaleDataSynch: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        
        var oldLoader = ilib._load;
        ilib.setLoaderCallback(mockLoaderNP);
    
        new NumberingPlan({
            locale: "en-US",
            sync: false,
            onLoad: function (plan) {
                ilib.setLoaderCallback(oldLoader);
        test.expect(2);
                test.ok(plan !== null);
                test.equal(plan.getName(), "US");                
                test.done();
            }
        });
    }
    
};
