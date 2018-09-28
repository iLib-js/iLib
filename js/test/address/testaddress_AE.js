/*
 * testaddress_AE.js - test the address parsing and formatting routines
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
    var Address = require("../../lib/Address.js");
}
if (typeof(AddressFmt) === "undefined") {
    var AddressFmt = require("../../lib/AddressFmt.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testaddress_AE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAEAddressNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("تاج قصر الفندق صندوق البريد بالبوسطة ٤٢٢١١\nدبي\nالإمارات العربية المتحدة", {locale: 'ar-AE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "تاج قصر الفندق صندوق البريد بالبوسطة ٤٢٢١١");
        test.equal(parsedAddress.locality, "دبي");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "الإمارات العربية المتحدة");
        test.equal(parsedAddress.countryCode, "AE");
        test.done();
    },
    
    testParseAEAddressManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("تاج قصر الفندق\nصندوق البريد بالبوسطة\n٤٢٢١١\nدبي\nالإمارات العربية المتحدة\n\n", {locale: 'ar-AE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "تاج قصر الفندق, صندوق البريد بالبوسطة, ٤٢٢١١");
        test.equal(parsedAddress.locality, "دبي");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "الإمارات العربية المتحدة");
        test.equal(parsedAddress.countryCode, "AE");
        test.done();
    },
    
    testParseAEAddressOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("تاج قصر الفندق صندوق البريد بالبوسطة ٤٢٢١١ دبي الإمارات العربية المتحدة", {locale: 'ar-AE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "تاج قصر الفندق صندوق البريد بالبوسطة ٤٢٢١١");
        test.equal(parsedAddress.locality, "دبي");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "الإمارات العربية المتحدة");
        test.equal(parsedAddress.countryCode, "AE");
        test.done();
    },
    
    
    testParseAEAddressNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("تاج قصر الفندق صندوق البريد بالبوسطة ٤٢٢١١ دبي الإمارات العربية المتحدة", {locale: 'ar-AE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "تاج قصر الفندق صندوق البريد بالبوسطة ٤٢٢١١");
        test.equal(parsedAddress.locality, "دبي");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "الإمارات العربية المتحدة");
        test.equal(parsedAddress.countryCode, "AE");
        test.done();
    },
    
    
    testParseAEAddressFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("فندق تاج بالاس مكتب بريد صندوق ٤٢٢١١\nدبي\nUnited Arab Emirates", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "فندق تاج بالاس مكتب بريد صندوق ٤٢٢١١");
        test.equal(parsedAddress.locality, "دبي");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "United Arab Emirates");
        test.equal(parsedAddress.countryCode, "AE");
        test.done();
    },
    
    
    
    testFormatAddressAESANative: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "فندق تاج بالاس مكتب بريد صندوق ٤٢٢١١",
            locality: "دبي",
            region: null,
            postalCode: null,
            country: "الإمارات العربية المتحدة",
            countryCode: "AE"
        }, {locale: 'ar-AE'});
        
        var expected = "فندق تاج بالاس مكتب بريد صندوق ٤٢٢١١\nدبي\nالإمارات العربية المتحدة";
        var formatter = new AddressFmt({locale: 'ar-AE'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressAEFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "تاج قصر الفندق صندوق البريد بالبوسطة ٤٢٢١١",
            locality: "دبي",
            region: null,
            postalCode: null,
            country: "United Arab Emirates",
            countryCode: "AE"
        }, {locale: 'en-US'});
        
        var expected = "تاج قصر الفندق صندوق البريد بالبوسطة ٤٢٢١١\nدبي\nUnited Arab Emirates";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
