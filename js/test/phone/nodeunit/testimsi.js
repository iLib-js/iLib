/*
 * imsi.js - Test the parseImsi() function.
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
if (typeof(PhoneNumber) === "undefined") {
    var PhoneNumber = require("../.././../lib/PhoneNumber.js");
}

function mockLoader(paths, sync, params, callback) {
    var data = [];
    
    data.push(ilib.data.mnc); // for the generic, shared stuff
    
    
    if (typeof(callback) !== 'undefined') {
        callback.call(this, data);    
    }
    return data;
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.imsi = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testRegularImsi3DigitMNC: function(test) {
        var imsi = "31003014084567890"
        var expected = {
            mcc: "310",
            mnc: "030",
            msin: "14084567890"
        };
    
        test.expect(1);
        test.deepEqual(PhoneNumber.parseImsi(imsi), expected);
        test.done();
    },
    
    testRegularImsi2DigitMNC: function(test) {
        var imsi = "26207201234567"
        var expected = {
            mcc: "262",
            mnc: "07",
            msin: "201234567"
        };
    
        test.expect(1);
        test.deepEqual(PhoneNumber.parseImsi(imsi), expected);
        test.done();
    },
    
    testSpecialImsi1: function(test) {
        var imsi = "31000201234567"
        var expected = {
            mcc: "310",
            mnc: "00",
            msin: "201234567"
        };
        
        test.expect(1);
        test.deepEqual(PhoneNumber.parseImsi(imsi), expected);
        test.done();
    },
    
    testSpecialImsi2: function(test) {
        var imsi = "310004201234567"
        var expected = {
            mcc: "310",
            mnc: "004",
            msin: "201234567"
        };
        
        test.expect(1);
        test.deepEqual(PhoneNumber.parseImsi(imsi), expected);
        test.done();
    },
    
    testBrokenMCC: function(test) {
        var imsi = "32000414084567890"
        var expected = {
            mcc: "320",
            mnc: "004",
            msin: "14084567890"
        };
        
        // should default to a 3 digit mnc
        test.expect(1);
        test.deepEqual(PhoneNumber.parseImsi(imsi), expected);
        test.done();
    },
    
    testBrokenMNC: function(test) {
        var imsi = "31014114084567890"
        var expected = {
            mcc: "310",
            mnc: "141",
            msin: "14084567890"
        };
        
        // should default to a 3 digit mnc
        test.expect(1);
        test.deepEqual(PhoneNumber.parseImsi(imsi), expected);
        test.done();
    },
    
    testTooShort: function(test) {
        var imsi = "31"
        test.expect(1);
        test.deepEqual(PhoneNumber.parseImsi(imsi), undefined);
        test.done();
    },
    
    testUndefined: function(test) {
        test.expect(1);
        test.ok(typeof(PhoneNumber.parseImsi(undefined)) === "undefined");
        test.done();
    },
    
    testIMSILoadLocaleDataSynch: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
        test.done();
            return;
        }
        
       var oldLoader = ilib._load;
       ilib.setLoaderCallback(mockLoader);
    
        var field = [];
        var imsi = "31003014084567890";
        var options = {sync: false}
          var expected = {
            mcc: "310",
            mnc: "030",
            msin: "14084567890"
        };
        
        fields = PhoneNumber.parseImsi(imsi)
        test.expect(2);
        test.deepEqual(options), expected, PhoneNumber.parseImsi(imsi);
        ilib.setLoaderCallback(oldLoader);
        test.ok(true);
        test.done();
    }
    
};