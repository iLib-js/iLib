/*
 * testaddress.js - test the address parsing and formatting routines
 * 
 * Copyright © 2013-2015,2017, JEDLSoft
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

if (typeof(Address) === "undefined") {
    var Address = require("../../../lib/Address.js");
}
if (typeof(AddressFmt) === "undefined") {
    var AddressFmt = require("../../../lib/AddressFmt.js");
}


if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testaddress_BG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressBGNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Georg Popandov, Kukush Str. 2, fl.6, 1309 SOFIA, BULGARIA", {locale: 'bg-BG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Georg Popandov, Kukush Str. 2, fl.6");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SOFIA");
        test.equal(parsedAddress.postalCode, "1309");
        test.equal(parsedAddress.country, "BULGARIA");
        test.equal(parsedAddress.countryCode, "BG");
        test.done();
    },
    
    testParseAddressBGNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Georg Popandov, Kukush Str. 2, fl.6, 1309 SOFIA, BULGARIA", {locale: 'bg-BG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Georg Popandov, Kukush Str. 2, fl.6");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SOFIA");
        test.equal(parsedAddress.country, "BULGARIA");
        test.equal(parsedAddress.countryCode, "BG");
        test.equal(parsedAddress.postalCode, "1309");
        test.done();
    },
    
    testParseAddressBGManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Georg Popandov\nKukush Str. 2, fl.6\n1309 SOFIA\nBULGARIA", {locale: 'bg-BG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Georg Popandov, Kukush Str. 2, fl.6");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SOFIA");
        test.equal(parsedAddress.postalCode, "1309");
        test.equal(parsedAddress.country, "BULGARIA");
        test.equal(parsedAddress.countryCode, "BG");
        test.done();
    },
    
    testParseAddressBGOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Georg Popandov, Kukush Str. 2, fl.6, 1309 SOFIA, BULGARIA", {locale: 'bg-BG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Georg Popandov, Kukush Str. 2, fl.6");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SOFIA");
        test.equal(parsedAddress.postalCode, "1309");
        test.equal(parsedAddress.country, "BULGARIA");
        test.equal(parsedAddress.countryCode, "BG");
        test.done();
    },
    
    testParseAddressBGSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Georg Popandov, Kukush Str. 2, fl.6  \n\t\n 1309 SOFIA\t\n\n BULGARIA  \n  \t\t\t", {locale: 'bg-BG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Georg Popandov, Kukush Str. 2, fl.6");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SOFIA");
        test.equal(parsedAddress.postalCode, "1309");
        test.equal(parsedAddress.country, "BULGARIA");
        test.equal(parsedAddress.countryCode, "BG");
        test.done();
    },
    
    testParseAddressBGNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Georg Popandov Kukush Str. 2 fl.6 1309 SOFIA BULGARIA", {locale: 'bg-BG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Georg Popandov Kukush Str. 2 fl.6");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SOFIA");
        test.equal(parsedAddress.postalCode, "1309");
        test.equal(parsedAddress.country, "BULGARIA");
        test.equal(parsedAddress.countryCode, "BG");
        test.done();
    },
    
    testParseAddressBGSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Джордж Попандов, Ул. Кукуш. 2, ет.6, 1309 СОФИЯ, БЪЛГАРИЯ", {locale: 'bg-BG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Джордж Попандов, Ул. Кукуш. 2, ет.6");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "СОФИЯ");
        test.equal(parsedAddress.postalCode, "1309");
        test.equal(parsedAddress.country, "БЪЛГАРИЯ");
        test.equal(parsedAddress.countryCode, "BG");
        test.done();
    },
    
    testParseAddressBGFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Georg Popandov, Kukush Str. 2, fl.6, 1309 SOFIA, BULGARIA", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Georg Popandov, Kukush Str. 2, fl.6");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SOFIA");
        test.equal(parsedAddress.postalCode, "1309");
        test.equal(parsedAddress.country, "BULGARIA");
        test.equal(parsedAddress.countryCode, "BG");
        test.done();
    },
    
    testFormatAddressBG: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Georg Popandov, Kukush Str. 2, fl.6",
            locality: "1309 SOFIA",
            country: "BULGARIA",
            countryCode: "BG"
        }, {locale: 'bg-BG'});
        
        var expected = "Georg Popandov, Kukush Str. 2, fl.6\n1309 SOFIA\nBULGARIA";
        var formatter = new AddressFmt({locale: 'bg-BG'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressBGFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Georg Popandov, Kukush Str. 2, fl.6",
            country: "BULGARIA",
            locality: "1309 SOFIA",
            countryCode: "BG"
        }, {locale: 'en-US'});
        
        var expected = "Georg Popandov, Kukush Str. 2, fl.6\n1309 SOFIA\nBULGARIA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};