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
    var ilib = require("../../..");
}

module.exports.testaddress_JO = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressJONormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("رويل ٥, آل الحلب, عمان ١١٩٣٧, الأردن", {locale: 'ar-JO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "رويل ٥, آل الحلب");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "عمان");
        test.equal(parsedAddress.postalCode, "١١٩٣٧");
        test.equal(parsedAddress.country, "الأردن");
        test.equal(parsedAddress.countryCode, "JO");
        test.done();
    },
    
    testParseAddressJONoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("رويل ٥, آل الحلب, عمان, الأردن", {locale: 'ar-JO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "رويل ٥, آل الحلب");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "عمان");
        test.equal(parsedAddress.country, "الأردن");
        test.equal(parsedAddress.countryCode, "JO");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressJOManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("رويل ٥, آل الحلب\nعمان ١١٩٣٧\n الأردن", {locale: 'ar-JO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "رويل ٥, آل الحلب");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "عمان");
        test.equal(parsedAddress.postalCode, "١١٩٣٧");
        test.equal(parsedAddress.country, "الأردن");
        test.equal(parsedAddress.countryCode, "JO");
        test.done();
    },
    
    testParseAddressJOOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("رويل ٥, آل الحلب,عمان ١١٩٣٧, الأردن", {locale: 'ar-JO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "رويل ٥, آل الحلب");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "عمان");
        test.equal(parsedAddress.postalCode, "١١٩٣٧");
        test.equal(parsedAddress.country, "الأردن");
        test.equal(parsedAddress.countryCode, "JO");
        test.done();
    },
    
    testParseAddressJOSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("رويل ٥, آل الحلب   \n\t\n عمان ١١٩٣٧\t\n\n  الأردن  \n  \t\t\t", {locale: 'ar-JO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "رويل ٥, آل الحلب");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "عمان");
        test.equal(parsedAddress.postalCode, "١١٩٣٧");
        test.equal(parsedAddress.country, "الأردن");
        test.equal(parsedAddress.countryCode, "JO");
        test.done();
    },
    
    //needs a precise regular expression top deal with no delimiters for locality
    /*
    testParseAddressJONoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("رويل ٥ آل الحلب  ٢ شارع الاستقلال عمان ١١٩٣٧  الأردن", {locale: 'ar-JO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "رويل ٥ آل الحلب ٢ شارع الاستقلال");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "عمان");
        test.equal(parsedAddress.postalCode, "١١٩٣٧");
        test.equal(parsedAddress.country, "الأردن");
        test.equal(parsedAddress.countryCode, "JO");
        test.done();
    },
    */
    
    testParseAddressJOSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("رويل ٥, آل الحلب,عمان ١١٩٣٧, الأردن", {locale: 'ar-JO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "رويل ٥, آل الحلب");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "عمان");
        test.equal(parsedAddress.postalCode, "١١٩٣٧");
        test.equal(parsedAddress.country, "الأردن");
        test.equal(parsedAddress.countryCode, "JO");
        test.done();
    },
    
    testParseAddressJOFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("رويل ٥, آل الحلب,عمان ١١٩٣٧, Jordan", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "رويل ٥, آل الحلب");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "عمان");
        test.equal(parsedAddress.postalCode, "١١٩٣٧");
        test.equal(parsedAddress.country, "Jordan");
        test.equal(parsedAddress.countryCode, "JO");
        test.done();
    },
    
    testFormatAddressJO: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "رويل ٥, آل الحلب",
            locality: "عمان ١١٩٣٧",
            country: " الأردن",
            countryCode: "JO"
        }, {locale: 'ar-JO'});
        
        var expected = "رويل ٥, آل الحلب\nعمان ١١٩٣٧\nالأردن";
        var formatter = new AddressFmt({locale: 'ar-JO'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressJOARFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "رويل ٥, آل الحلب",
            locality: "عمان ١١٩٣٧",
            country: "Jordan",
            countryCode: "JO"
        }, {locale: 'en-US'});
        
        var expected = "رويل ٥, آل الحلب\nعمان ١١٩٣٧\nJordan";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};