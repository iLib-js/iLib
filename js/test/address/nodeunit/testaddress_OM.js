/*
 * testaddress_OM.js - test the address parsing and formatting routines
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

module.exports.testaddress_OM = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressOMNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ\n١١٢\nﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ\nعُمان", {locale: 'ar-OM'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ");
        test.equal(parsedAddress.locality, "ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "١١٢");
        test.equal(parsedAddress.country, "عُمان");
        test.equal(parsedAddress.countryCode, "OM");
        test.done();
    },
    
    testParseAddressOMNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ\nﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ\nعُمان", {locale: 'ar-OM'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ");
        test.equal(parsedAddress.locality, "ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "عُمان");
        test.equal(parsedAddress.countryCode, "OM");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressOMNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ\n١١٢\nﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ", {locale: 'ar-OM'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ");
        test.equal(parsedAddress.locality, "ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "١١٢");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "OM");
        test.done();
    },
    
    testParseAddressOMManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﻡﻭﺎﻘﻓ ﻑﺮﻋ\n٣٣٨ - ﺭﻮﻳ\n١١٢\nﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ\n\nعُمان\n\n\n", {locale: 'ar-OM'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﻡﻭﺎﻘﻓ ﻑﺮﻋ, ٣٣٨ - ﺭﻮﻳ");
        test.equal(parsedAddress.locality, "ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "١١٢");
        test.equal(parsedAddress.country, "عُمان");
        test.equal(parsedAddress.countryCode, "OM");
        test.done();
    },
    
    testParseAddressOMOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﻡﻭﺎﻘﻓ ﻑﺮﻋ ,  ٣٣٨ - ﺭﻮﻳ , ١١٢ , ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ , عُمان", {locale: 'ar-OM'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﻡﻭﺎﻘﻓ ﻑﺮﻋ, ٣٣٨ - ﺭﻮﻳ");
        test.equal(parsedAddress.locality, "ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "١١٢");
        test.equal(parsedAddress.country, "عُمان");
        test.equal(parsedAddress.countryCode, "OM");
        test.done();
    },
    
    testParseAddressOMSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tﻡﻭﺎﻘﻓ ﻑﺮﻋ\n\n\t٣٣٨ - ﺭﻮﻳ\n\n\t١١٢\n\n\tﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ\n\n\tعُمان\n\n\n", {locale: 'ar-OM'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﻡﻭﺎﻘﻓ ﻑﺮﻋ, ٣٣٨ - ﺭﻮﻳ");
        test.equal(parsedAddress.locality, "ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "١١٢");
        test.equal(parsedAddress.country, "عُمان");
        test.equal(parsedAddress.countryCode, "OM");
        test.done();
    },
    
    testParseAddressOMNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ ١١٢  ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ عُمان", {locale: 'ar-OM'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ");
        test.equal(parsedAddress.locality, "ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "١١٢");
        test.equal(parsedAddress.country, "عُمان");
        test.equal(parsedAddress.countryCode, "OM");
        test.done();
    },
    
    testParseAddressOMFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ\n١١٢\nﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ\nOman", {locale: 'en-US'});
        
        
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ");
        test.equal(parsedAddress.locality, "ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "١١٢");
        test.equal(parsedAddress.country, "Oman");
        test.equal(parsedAddress.countryCode, "OM");
        test.done();
    },
    
    testFormatAddressOM: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ",
            locality: "ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ",
            postalCode: "١١٢",
            country: "عُمان",
            countryCode: "OM"
        }, {locale: 'ar-OM'});
        
        var expected = "ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ\n١١٢\nﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ\nعُمان";
        var formatter = new AddressFmt({locale: 'ar-OM'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressOMFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ",
            locality: "ﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ",
            postalCode: "١١٢",
            country: "Oman",
            countryCode: "OM"
        }, {locale: 'en-US'});
        
        var expected = "ﻡﻭﺎﻘﻓ ﻑﺮﻋ ٣٣٨ - ﺭﻮﻳ\n١١٢\nﺎﻠﻤﺴﻛﺎﺗ ﻊﻨﺑ ﻂﻴﺑ ﺎﻠﺷﺫﺍ\nOman";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};