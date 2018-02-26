/*
 * testaddress_QA.js - test the address parsing and formatting routines
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

module.exports.testaddress_QA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressQANormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\nﺎﻟﺩﻮﺣﺓ\nقطر", {locale: 'ar-QA'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣");
        test.equal(parsedAddress.locality, "ﺎﻟﺩﻮﺣﺓ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "قطر");
        test.equal(parsedAddress.countryCode, "QA");
        test.done();
    },
    
    testParseAddressQANoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\nﺎﻟﺩﻮﺣﺓ\nقطر", {locale: 'ar-QA'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣");
        test.equal(parsedAddress.locality, "ﺎﻟﺩﻮﺣﺓ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "قطر");
        test.equal(parsedAddress.countryCode, "QA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressQANoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\n\nﺎﻟﺩﻮﺣﺓ", {locale: 'ar-QA'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣");
        test.equal(parsedAddress.locality, "ﺎﻟﺩﻮﺣﺓ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "QA");
        test.done();
    },
    
    testParseAddressQAManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ\nمكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣\n\nﺎﻟﺩﻮﺣﺓ\n\nقطر\n\n\n", {locale: 'ar-QA'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ, مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣");
        test.equal(parsedAddress.locality, "ﺎﻟﺩﻮﺣﺓ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "قطر");
        test.equal(parsedAddress.countryCode, "QA");
        test.done();
    },
    
    testParseAddressQAOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ , ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣ , ﺎﻟﺩﻮﺣﺓ , قطر", {locale: 'ar-QA'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ, ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣");
        test.equal(parsedAddress.locality, "ﺎﻟﺩﻮﺣﺓ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "قطر");
        test.equal(parsedAddress.countryCode, "QA");
        test.done();
    },
    
    testParseAddressQASuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ\n\n\tمكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣\n\n\t\n\n\tﺎﻟﺩﻮﺣﺓ\n\n\tقطر\n\n\n", {locale: 'ar-QA'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ, مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣");
        test.equal(parsedAddress.locality, "ﺎﻟﺩﻮﺣﺓ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "قطر");
        test.equal(parsedAddress.countryCode, "QA");
        test.done();
    },
    
    
    
    testParseAddressQAFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\n\nﺎﻟﺩﻮﺣﺓ\nQatar", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣");
        test.equal(parsedAddress.locality, "ﺎﻟﺩﻮﺣﺓ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Qatar");
        test.equal(parsedAddress.countryCode, "QA");
        test.done();
    },
    
    testFormatAddressQA: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣",
            locality: "ﺎﻟﺩﻮﺣﺓ",
            country: "قطر",
            countryCode: "QA"
        }, {locale: 'ar-QA'});
        
        var expected = "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\nﺎﻟﺩﻮﺣﺓ\nقطر";
        var formatter = new AddressFmt({locale: 'ar-QA'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressQAFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣",
            locality: "ﺎﻟﺩﻮﺣﺓ",
            country: "Qatar",
            countryCode: "QA"
        }, {locale: 'en-US'});
        
        var expected = "ﺎﻠﺴﻳﺩ ﻊﺑﺩ ﺎﻠﻠﻫ ﺎﻠﻣﺮﻴﺨﻳ مكتب بريد ﻡﺮﺒﻋ ﺮﻘﻣ ٣٢٦٣\nﺎﻟﺩﻮﺣﺓ\nQatar";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
