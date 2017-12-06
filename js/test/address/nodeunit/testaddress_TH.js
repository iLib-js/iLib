/*
 * testaddress_TH.js - test the address parsing and formatting routines
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

module.exports.testaddress_TH = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressTHNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("49 ซอยร่วมฤดี, ถนนเพลินจิต, ลุมพินี\nเขตปทุมวัน กรุงเทพฯ 10330\nประเทศไทย", {locale: 'th-Th'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "49 ซอยร่วมฤดี, ถนนเพลินจิต, ลุมพินี");
        test.equal(parsedAddress.locality, "เขตปทุมวัน");
        test.equal(parsedAddress.region, "กรุงเทพฯ");
        test.equal(parsedAddress.postalCode, "10330");
        test.equal(parsedAddress.country, "ประเทศไทย");
        test.equal(parsedAddress.countryCode, "TH");
        test.done();
    },
    
    
    
    testParseAddressTHNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("49 ซอยร่วมฤดี, ถนนเพลินจิต, ลุมพินี\nเขตปทุมวัน กรุงเทพฯ\nประเทศไทย", {locale: 'th-Th'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "49 ซอยร่วมฤดี, ถนนเพลินจิต, ลุมพินี");
        test.equal(parsedAddress.locality, "เขตปทุมวัน");
        test.equal(parsedAddress.region, "กรุงเทพฯ");
        test.equal(parsedAddress.country, "ประเทศไทย");
        test.equal(parsedAddress.countryCode, "TH");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    
    testParseAddressTHNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("112/119 มณียา สมบูรณ์ ผลงานชิ้นเอก ไทรม้า\nอำเภอเมือง นนทบุรี 11000", {locale: 'th-TH'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "112/119 มณียา สมบูรณ์ ผลงานชิ้นเอก ไทรม้า");
        test.equal(parsedAddress.locality, "อำเภอเมือง");
        test.equal(parsedAddress.region, "นนทบุรี");
        test.equal(parsedAddress.postalCode, "11000");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "TH");
        test.done();
    },
    
    testParseAddressTHManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("112/119\nมณียา สมบูรณ์ ผลงานชิ้นเอก\nไทรม้า\nเขตปทุมวัน\nกรุงเทพฯ\n11000\nประเทศไทย", {locale: 'th-TH'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "112/119, มณียา สมบูรณ์ ผลงานชิ้นเอก, ไทรม้า");
        test.equal(parsedAddress.locality, "เขตปทุมวัน");
        test.equal(parsedAddress.region, "กรุงเทพฯ");
        test.equal(parsedAddress.postalCode, "11000");
        test.equal(parsedAddress.country, "ประเทศไทย");
        test.equal(parsedAddress.countryCode, "TH");
        test.done();
    },
    
    
    testParseAddressTHOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("112/119,มณียา สมบูรณ์ ผลงานชิ้นเอก,ไทรม้า\nเขตปทุมวัน,กรุงเทพฯ,11000,ประเทศไทย", {locale: 'th-TH'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "112/119, มณียา สมบูรณ์ ผลงานชิ้นเอก, ไทรม้า");
        test.equal(parsedAddress.locality, "เขตปทุมวัน");
        test.equal(parsedAddress.region, "กรุงเทพฯ");
        test.equal(parsedAddress.postalCode, "11000");
        test.equal(parsedAddress.country, "ประเทศไทย");
        test.equal(parsedAddress.countryCode, "TH");
        test.done();
    },
    
    
    testParseAddressTHOther: function(test) {
        test.expect(7);
        var parsedAddress = new Address("112/119 มณียา สมบูรณ์ ผลงานชิ้นเอก ไทรม้า\nอำเภอเมือง นนทบุรี 11000\nประเทศไทย", {locale: 'th-TH'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "112/119 มณียา สมบูรณ์ ผลงานชิ้นเอก ไทรม้า");
        test.equal(parsedAddress.locality, "อำเภอเมือง");
        test.equal(parsedAddress.region, "นนทบุรี");
        test.equal(parsedAddress.postalCode, "11000");
        test.equal(parsedAddress.country, "ประเทศไทย");
        test.equal(parsedAddress.countryCode, "TH");
        test.done();
    },
    
    
    testFormatAddressTH: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "49 ซอยร่วมฤดี, ถนนเพลินจิต, ลุมพินี",
            locality: "เขตปทุมวัน",
            postalCode: "10330",
            region: "กรุงเทพฯ",
            country: "ประเทศไทย",
            countryCode: "TH"
        }, {locale: 'th-TH'});
        
        var expected = "49 ซอยร่วมฤดี, ถนนเพลินจิต, ลุมพินี\nเขตปทุมวัน กรุงเทพฯ 10330\nประเทศไทย";
        var formatter = new AddressFmt({locale: 'tH-TH'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressTHFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "112/119 มณียา สมบูรณ์ ผลงานชิ้นเอก ไทรม้า",
            locality: "อำเภอเมือง",
            region: "นนทบุรี",
            postalCode: "11000",
            country: "Thailand",
            countryCode: "TH"
        }, {locale: 'en-US'});
        var expected = "112/119 มณียา สมบูรณ์ ผลงานชิ้นเอก ไทรม้า\nอำเภอเมือง นนทบุรี 11000\nThailand";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
    
};