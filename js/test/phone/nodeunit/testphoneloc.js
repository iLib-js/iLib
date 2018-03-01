/*
 * phoneloc.js - Test the phoneloc class.
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
    var ilib = require("../../../lib/ilib.js");
}
if (typeof(PhoneLocale) === "undefined") {
    var PhoneLocale = require("../../../lib/PhoneLocale.js");
}

function mockLoaderPhoneLoc(paths, sync, params, callback) {
    var data = [];
    
    data.push(ilib.data.cc2reg); // for the generic, shared stuff
    data.push(ilib.data.reg2cc);
    data.push(ilib.data.mcc2reg);
    data.push(ilib.data.area2reg);
    
    if (typeof(callback) !== 'undefined') {
        callback.call(this, data);    
    }
    return data;
}

var oldLoader = ilib._load;

module.exports.phoneloc = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    
    tearDown: function(callback) {
        ilib._load = oldLoader;
        callback();
    },

    testGetByMCCUS: function(test) {
        test.expect(2);
        var loc = new PhoneLocale({mcc: "310"});
        test.ok(typeof(loc) !== "undefined");
        test.equal(loc.getRegion(), "US");
        test.done();
    },
    
    testGetByMCCDE: function(test) {
        test.expect(2);
        var loc = new PhoneLocale({mcc: "262"});
        test.ok(typeof(loc) !== "undefined");
        test.equal(loc.getRegion(), "DE");
        test.done();
    },
    
    testGetByMCCUnknownMCC: function(test) {
        test.expect(2);
        var loc = new PhoneLocale({mcc: "31"});
        test.ok(typeof(loc) !== "undefined");
        test.equal(loc.getRegion(), "XX");
        test.done();
    },
    
    testGetByCC1: function(test) {
        test.expect(2);
        var loc = new PhoneLocale({countryCode: "1"});
        test.ok(typeof(loc) !== "undefined");
        test.equal(loc.getRegion(), "US");
        test.done();
    },
    
    testGetByCC1: function(test) {
        test.expect(2);
        var loc = new PhoneLocale({countryCode: "44"});
        test.ok(typeof(loc) !== "undefined");
        test.equal(loc.getRegion(), "GB");    
        test.done();
    },
    
    testGetByCCUnknownCC: function(test) {
        test.expect(2);
        var loc = new PhoneLocale({countryCode: "0"});
        test.ok(typeof(loc) !== "undefined");
        test.equal(loc.getRegion(), "XX");
        test.done();
    },
    
    testGetByLocaleUS: function(test) {
        test.expect(2);
        var loc = new PhoneLocale({locale: "en-US"});
        test.ok(typeof(loc) !== "undefined");
        test.equal(loc.getRegion(), "US");
        test.done();
    },
    
    testGetByLocaleDE: function(test) {
        test.expect(2);
        var loc = new PhoneLocale({locale: "de-DE"});
        test.ok(typeof(loc) !== "undefined");
        test.equal(loc.getRegion(), "DE");    
        test.done();
    },
    
    testGetDefault: function(test) {
        test.expect(2);
        var loc = new PhoneLocale();
        test.ok(typeof(loc) !== "undefined");
        test.equal(loc.region, "US");    
        test.done();
    },
    
    testGetDefaultEmpty: function(test) {
        test.expect(2);
        var loc = new PhoneLocale({});
        test.ok(typeof(loc) !== "undefined");
        test.equal(loc.region, "US");
        test.done();
    },
    
    testPhoneLocLoadLocaleDataSynch: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        
        var oldLoader = ilib._load;
        ilib.setLoaderCallback(mockLoaderPhoneLoc);
        test.expect(2);
    
        new PhoneLocale({
            countryCode: "44",
            sync: false,
            onLoad: function (loc) {
                ilib.setLoaderCallback(oldLoader);
                test.ok(loc !== null);
                test.equal(loc.getRegion(), "GB");                
                test.done();
            }
        });
    }
    
};
