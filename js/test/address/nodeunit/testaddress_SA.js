/*
 * testaddress_SA.js - test the address parsing and formatting routines
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

module.exports.testaddress_SA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressSANormalNative: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴\nالمملكة العربية السعودية", {locale: 'ar-SA'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد عبد الله ناصر");
        test.equal(parsedAddress.locality, "مكة المكرمة");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "٢١۴۵۴");
        test.equal(parsedAddress.country, "المملكة العربية السعودية");
        test.equal(parsedAddress.countryCode, "SA");
        test.done();
    },
    
    
    
    testParseAddressSANoZipNative: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد عبد الله ناصر\nمكة المكرمة\nالمملكة العربية السعودية", {locale: 'ar-SA'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد عبد الله ناصر");
        test.equal(parsedAddress.locality, "مكة المكرمة");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "المملكة العربية السعودية");
        test.equal(parsedAddress.countryCode, "SA");
        test.done();
    },
    
    
    testParseAddressSANoCountrynative: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴", {locale: 'ar-SA'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد عبد الله ناصر");
        test.equal(parsedAddress.locality, "مكة المكرمة");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "٢١۴۵۴");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "SA");
        test.done();
    },
    
    testParseAddressSAManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴\nالمملكة العربية السعودية", {locale: 'ar-SA'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد عبد الله ناصر");
        test.equal(parsedAddress.locality, "مكة المكرمة");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "٢١۴۵۴");
        test.equal(parsedAddress.country, "المملكة العربية السعودية");
        test.equal(parsedAddress.countryCode, "SA");
        test.done();
    },
    
    testParseAddressSAOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد عبد الله ناصر, مكة المكرمة ٢١۴۵۴, المملكة العربية السعودية", {locale: 'ar-SA'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد عبد الله ناصر");
        test.equal(parsedAddress.locality, "مكة المكرمة");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "٢١۴۵۴");
        test.equal(parsedAddress.country, "المملكة العربية السعودية");
        test.equal(parsedAddress.countryCode, "SA");
        test.done();
    },
    
    
    testParseAddressSANoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد عبد الله ناصر, مكة المكرمة ٢١۴۵۴ المملكة العربية السعودية", {locale: 'ar-SA'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد عبد الله ناصر");
        test.equal(parsedAddress.locality, "مكة المكرمة");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "٢١۴۵۴");
        test.equal(parsedAddress.country, "المملكة العربية السعودية");
        test.equal(parsedAddress.countryCode, "SA");
        test.done();
    },
    
    
    testParseAddressSAFromUSNative: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴\nSAUDI ARABIA", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
            
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد عبد الله ناصر");
        test.equal(parsedAddress.locality, "مكة المكرمة");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "٢١۴۵۴");
        test.equal(parsedAddress.country, "SAUDI ARABIA");
        test.equal(parsedAddress.countryCode, "SA");
        test.done();
    },
    
    
    
    testFormatAddressSASANative: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "السيد عبد الله ناصر",
            locality: "مكة المكرمة",
            region: null,
            postalCode: "٢١۴۵۴",
            country: "المملكة العربية السعودية",
            countryCode: "SA"
        }, {locale: 'ar-SA'});
        
        var expected = "السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴\nالمملكة العربية السعودية";
        var formatter = new AddressFmt({locale: 'ar-SA'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressSAFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "السيد عبد الله ناصر",
            locality: "مكة المكرمة",
            region: null,
            postalCode: "٢١۴۵۴",
            country: "SAUDI ARABIA",
            countryCode: "SA"
        }, {locale: 'ar-SA'});
        
        var expected = "السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴\nSAUDI ARABIA";
        var formatter = new AddressFmt({locale: 'ar-SA'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testParseAddressSA1: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Zakat & Income Tax Dept,RIYADH 11187, SAUDI ARABIA", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
            
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Zakat & Income Tax Dept");
        test.equal(parsedAddress.locality, "RIYADH");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "11187");
        test.equal(parsedAddress.country, "SAUDI ARABIA");
        test.equal(parsedAddress.countryCode, "SA");
        test.done();
    },
    
    testParseAddressSA2: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Ibrahim Mohamad, P.O. Box 56577, RIYADH 11564, SAUDI ARABIA", {locale: 'en-US'});
        // the country name is in English because this address is for a contact in a US database
            
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ibrahim Mohamad, P.O. Box 56577");
        test.equal(parsedAddress.locality, "RIYADH");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "11564");
        test.equal(parsedAddress.country, "SAUDI ARABIA");
        test.equal(parsedAddress.countryCode, "SA");
        test.done();
    }
    
};
