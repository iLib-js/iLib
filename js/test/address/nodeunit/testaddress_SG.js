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

module.exports.testaddress_SG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressSGSGLatinNormal: function(test) {
        var parsedAddress = new Address("#38-01/01A\n8 Shenton Way\nSingapore 068811\nSingapore", {locale: 'en-SG'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "#38-01/01A, 8 Shenton Way");
        test.equal(parsedAddress.locality, "Singapore");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "068811");
        test.equal(parsedAddress.country, "Singapore");
        test.equal(parsedAddress.countryCode, "SG");
        test.done();
    },
    
    testParseAddressSGSGLatinNoZip: function(test) {
        var parsedAddress = new Address("9 Changi Business Park Central 1\nSingapore", {locale: 'en-SG'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "9 Changi Business Park Central 1");
        test.ok(typeof(parsedAddress.locality) === "undefined");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Singapore");
        test.equal(parsedAddress.countryCode, "SG");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressSGSGLatinNoCountry: function(test) {
        var parsedAddress = new Address("#38-01/01A\n8 Shenton Way\nSingapore 068811", {locale: 'en-SG'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "#38-01/01A, 8 Shenton Way");
        test.equal(parsedAddress.locality, "Singapore");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "068811");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "SG");
        test.done();
    },
    
    testParseAddressSGSGAsianNormal: function(test) {
        var parsedAddress = new Address("新加坡159088新加坡麟記路4＃06-07/08矽統科技大廈", {locale: 'zh-SG'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "麟記路4＃06-07/08矽統科技大廈");
        test.equal(parsedAddress.locality, "新加坡");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "159088");
        test.equal(parsedAddress.country, "新加坡");
        test.equal(parsedAddress.countryCode, "SG");
        test.done();
    },
    
    testParseAddressSGSGAsianNoZip: function(test) {
        var parsedAddress = new Address("新加坡麟記路4＃06-07/08矽統科技大廈", {locale: 'zh-SG'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "麟記路4＃06-07/08矽統科技大廈");
        test.ok(typeof(parsedAddress.locality) === "undefined");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "新加坡");
        test.equal(parsedAddress.countryCode, "SG");
        test.done();
    },
    
    testParseAddressSGSGAsianNoCountry: function(test) {
        var parsedAddress = new Address("159088新加坡麟記路4＃06-07/08矽統科技大廈", {locale: 'zh-SG'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "麟記路4＃06-07/08矽統科技大廈");
        test.equal(parsedAddress.locality, "新加坡");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "159088");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "SG");
        test.done();
    },
    
    testParseAddressSGSGManyLines: function(test) {
        var parsedAddress = new Address("Blk 111\nAng Mo Kio Avenue 4\nSingapore\n560111\nSingapore\n\n", {locale: 'en-SG'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Blk 111, Ang Mo Kio Avenue 4");
        test.equal(parsedAddress.locality, "Singapore");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "560111");
        test.equal(parsedAddress.country, "Singapore");
        test.equal(parsedAddress.countryCode, "SG");
        test.done();
    },
    
    testParseAddressSGSGOneLine: function(test) {
        var parsedAddress = new Address("152 Beach Rd., #16-00 Gateway East, Singapore 189721, Singapore", {locale: 'en-SG'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "152 Beach Rd., #16-00 Gateway East");
        test.equal(parsedAddress.locality, "Singapore");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "189721");
        test.equal(parsedAddress.country, "Singapore");
        test.equal(parsedAddress.countryCode, "SG");
        test.done();
    },
    
    testParseAddressSGSGSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("\t\t\t2 Orchard Turn\t\t\r\n\t#04-05\r\t ION \tOrchard\t\nSingapore \r\t\n238801\n\t\rSingapore\n\n", {locale: 'en-SG'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "2 Orchard Turn, #04-05 ION Orchard");
        test.equal(parsedAddress.locality, "Singapore");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "238801");
        test.equal(parsedAddress.country, "Singapore");
        test.equal(parsedAddress.countryCode, "SG");
        test.done();
    },
    
    testParseAddressSGSGNoDelimiters: function(test) {
        var parsedAddress = new Address("152 Beach Rd. #16-00 Gateway East Singapore 189721 Singapore", {locale: 'en-SG'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "152 Beach Rd. #16-00 Gateway East");
        test.equal(parsedAddress.locality, "Singapore");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "189721");
        test.equal(parsedAddress.country, "Singapore");
        test.equal(parsedAddress.countryCode, "SG");
        test.done();
    },
    
    testParseAddressSGSGSpecialChars: function(test) {
        var parsedAddress = new Address("Lín Jì Lù 4\n# 06-07/08 Xì Tǒng Kējì Dàshà\nSingapore 159088\n", {locale: 'en-SG'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Lín Jì Lù 4, # 06-07/08 Xì Tǒng Kējì Dàshà");
        test.equal(parsedAddress.locality, "Singapore");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "159088");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "SG");
        test.done();
    },
    
    testParseAddressSGSGFromUS: function(test) {
        var parsedAddress = new Address("#38-01/01A\n8 Shenton Way\nSingapore 068811\nSingapore", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "#38-01/01A, 8 Shenton Way");
        test.equal(parsedAddress.locality, "Singapore");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "068811");
        test.equal(parsedAddress.country, "Singapore");
        test.equal(parsedAddress.countryCode, "SG");
        test.done();
    },
    
    testFormatAddressSGLatin: function(test) {
        var parsedAddress = new Address({
            streetAddress: "#38-01/01A, 8 Shenton Way",
            locality: "Singapore",
            postalCode: "068811",
            country: "Singapore",
            countryCode: "SG",
            format: "latin"
        }, {locale: 'en-SG'});
        
        var expected = "#38-01/01A, 8 Shenton Way\nSingapore 068811\nSingapore";
        var formatter = new AddressFmt({locale: 'en-SG'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressSGAsian: function(test) {
        var parsedAddress = new Address({
            streetAddress: "麟記路4＃06-07/08矽統科技大廈",
            locality: "新加坡",
            postalCode: "159088",
            country: "新加坡共和國",
            countryCode: "SG",
            format: "asian"
        }, {locale: 'zh-SG'});
        
        var expected = "新加坡共和國159088新加坡麟記路4＃06-07/08矽統科技大廈";
        var formatter = new AddressFmt({locale: 'zh-SG'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressSGFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "#38-01/01A, 8 Shenton Way",
            locality: "Singapore",
            postalCode: "068811",
            country: "Republic of Singapore",
            countryCode: "SG",
            format: "latin"
        }, {locale: 'en-US'});
        
        var expected = "#38-01/01A, 8 Shenton Way\nSingapore 068811\nRepublic of Singapore";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};