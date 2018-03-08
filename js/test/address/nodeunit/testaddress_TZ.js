/*
 * testaddress_TZ.js - test the address parsing and formatting routines
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

module.exports.testaddress_TZ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressTZNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Abel H.H. Bilia P.O. Box 10084\nDAR ES SALAAM\nTanzania", {locale: 'en-TZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Abel H.H. Bilia P.O. Box 10084");
        test.equal(parsedAddress.locality, "DAR ES SALAAM");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Tanzania");
        test.equal(parsedAddress.countryCode, "TZ");
        test.done();
    },
    
    testParseAddressTZNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Abel H.H. Bilia P.O. Box 10084\nDAR ES SALAAM\nTanzania", {locale: 'en-TZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Abel H.H. Bilia P.O. Box 10084");
        test.equal(parsedAddress.locality, "DAR ES SALAAM");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Tanzania");
        test.equal(parsedAddress.countryCode, "TZ");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressTZNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Abel H.H. Bilia P.O. Box 10084\nDAR ES SALAAM", {locale: 'en-TZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Abel H.H. Bilia P.O. Box 10084");
        test.equal(parsedAddress.locality, "DAR ES SALAAM");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "TZ");
        test.done();
    },
    
    testParseAddressTZManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Abel H.H. Bilia\nP.O. Box 10084\nDAR ES SALAAM\nTanzania\n\n\n", {locale: 'en-TZ'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Abel H.H. Bilia, P.O. Box 10084");
        test.equal(parsedAddress.locality, "DAR ES SALAAM");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Tanzania");
        test.equal(parsedAddress.countryCode, "TZ");
        test.done();
    },
    
    testParseAddressTZOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Abel H.H. Bilia , P.O. Box 10084 , DAR ES SALAAM , Tanzania", {locale: 'en-TZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Abel H.H. Bilia, P.O. Box 10084");
        test.equal(parsedAddress.locality, "DAR ES SALAAM");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Tanzania");
        test.equal(parsedAddress.countryCode, "TZ");
        test.done();
    },
    
    testParseAddressTZSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\t\tMr. Abel H.H. Bilia\t\t\tP.O. Box\t\r\r10084\t\nDAR ES SALAAM\n\t Tanzania\n\n\n", {locale: 'en-TZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Abel H.H. Bilia P.O. Box 10084");
        test.equal(parsedAddress.locality, "DAR ES SALAAM");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Tanzania");
        test.equal(parsedAddress.countryCode, "TZ");
        test.done();
    },
    
    testParseAddressTZNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Abel H.H. Bilia P.O. Box 10084 DAR ES SALAAM Tanzania", {locale: 'en-TZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Abel H.H. Bilia P.O. Box 10084");
        test.equal(parsedAddress.locality, "DAR ES SALAAM");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Tanzania");
        test.equal(parsedAddress.countryCode, "TZ");
        test.done();
    },
    
    testParseAddressTZFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Abel H.H. Bilia P.O. Box 10084\nDAR ES SALAAM\nTanzania", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Abel H.H. Bilia P.O. Box 10084");
        test.equal(parsedAddress.locality, "DAR ES SALAAM");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Tanzania");
        test.equal(parsedAddress.countryCode, "TZ");
        test.done();
    },
    
    testFormatAddressTZ: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Mr. Abel H.H. Bilia P.O. Box 10084",
            locality: "DAR ES SALAAM",
            country: "Tanzania",
            countryCode: "TZ"
        }, {locale: 'en-TZ'});
        
        var expected = "Mr. Abel H.H. Bilia P.O. Box 10084\nDAR ES SALAAM\nTanzania";
        var formatter = new AddressFmt({locale: 'en-TZ'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressTZFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Mr. Abel H.H. Bilia P.O. Box 10084",
            locality: "DAR ES SALAAM",
            country: "Tanzania",
            countryCode: "TZ"
        }, {locale: 'en-US'});
        
        var expected = "Mr. Abel H.H. Bilia P.O. Box 10084\nDAR ES SALAAM\nTanzania";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
