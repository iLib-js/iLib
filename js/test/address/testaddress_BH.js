/*
 * testaddress.js - test the address parsing and formatting routines
 * 
 * Copyright © 2013-2015,2017, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the Specific language governing permissions and
 * limitations under the License.
 */

if (typeof(Address) === "undefined") {
    var Address = require("../../lib/Address.js");
}
if (typeof(AddressFmt) === "undefined") {
    var AddressFmt = require("../../lib/AddressFmt.js");
}


if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testaddress_BH = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressBHNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد عبد الله احمد, عمارة ٢٢٢, المنامة ٣١٦, البحرين", {locale: 'ar-BH'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد عبد الله احمد, عمارة ٢٢٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "المنامة");
        test.equal(parsedAddress.postalCode, "٣١٦");
        test.equal(parsedAddress.country, "البحرين");
        test.equal(parsedAddress.countryCode, "BH");
        test.done();
    },
    
    testParseAddressBHNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد عبد الله احمد, عمارة ٢٢٢, المنامة, البحرين", {locale: 'ar-BH'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد عبد الله احمد, عمارة ٢٢٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "المنامة");
        test.equal(parsedAddress.country, "البحرين");
        test.equal(parsedAddress.countryCode, "BH");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressBHManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد عبد الله احمد\nعمارة ٢٢٢\nالمنامة ٣١٦\n البحرين", {locale: 'ar-BH'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد عبد الله احمد, عمارة ٢٢٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "المنامة");
        test.equal(parsedAddress.postalCode, "٣١٦");
        test.equal(parsedAddress.country, "البحرين");
        test.equal(parsedAddress.countryCode, "BH");
        test.done();
    },
    
    testParseAddressBHOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد عبد الله احمد, عمارة ٢٢٢,المنامة ٣١٦, البحرين", {locale: 'ar-BH'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد عبد الله احمد, عمارة ٢٢٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "المنامة");
        test.equal(parsedAddress.postalCode, "٣١٦");
        test.equal(parsedAddress.country, "البحرين");
        test.equal(parsedAddress.countryCode, "BH");
        test.done();
    },
    
    testParseAddressBHSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد عبد الله احمد, عمارة ٢٢٢  \n\t\n المنامة ٣١٦\t\n\n البحرين \n \t\t\t", {locale: 'ar-BH'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد عبد الله احمد, عمارة ٢٢٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "المنامة");
        test.equal(parsedAddress.postalCode, "٣١٦");
        test.equal(parsedAddress.country, "البحرين");
        test.equal(parsedAddress.countryCode, "BH");
        test.done();
    },
    
    testParseAddressBHNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد عبد الله احمد عمارة ٢٢٢ المنامة ٣١٦  البحرين", {locale: 'ar-BH'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد عبد الله احمد عمارة ٢٢٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "المنامة");
        test.equal(parsedAddress.postalCode, "٣١٦");
        test.equal(parsedAddress.country, "البحرين");
        test.equal(parsedAddress.countryCode, "BH");
        test.done();
    },
    
    testParseAddressBHSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد عبد الله احمد, عمارة ٢٢٢,المنامة ٣١٦,  البحرين", {locale: 'ar-BH'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد عبد الله احمد, عمارة ٢٢٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "المنامة");
        test.equal(parsedAddress.postalCode, "٣١٦");
        test.equal(parsedAddress.country, "البحرين");
        test.equal(parsedAddress.countryCode, "BH");
        test.done();
    },
    
    testParseAddressBHFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد عبد الله احمد, عمارة ٢٢٢,المنامة ٣١٦, Bahrain", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد عبد الله احمد, عمارة ٢٢٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "المنامة");
        test.equal(parsedAddress.postalCode, "٣١٦");
        test.equal(parsedAddress.country, "Bahrain");
        test.equal(parsedAddress.countryCode, "BH");
        test.done();
    },
    
    testFormatAddressBH: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "السيد عبد الله احمد, عمارة ٢٢٢",
            locality: " المنامة",
            postalCode: "٣١٦",
            country: "  البحرين",
            countryCode: "BH"
        }, {locale: 'ar-BH'});
        
        var expected = "السيد عبد الله احمد, عمارة ٢٢٢\nالمنامة ٣١٦\n البحرين";
        var formatter = new AddressFmt({locale: 'ar-BH'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressBHFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "السيد عبد الله احمد, عمارة ٢٢٢",
            postalCode: "٣١٦",
            locality: " المنامة",
            country: "Bahrain",
            countryCode: "BH"
        }, {locale: 'en-US'});
        
        var expected = "السيد عبد الله احمد, عمارة ٢٢٢\nالمنامة ٣١٦\nBahrain";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
