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

module.exports.testaddress_TW = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressTWTWLatinNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Level 73, Taipei 101 Tower\n7 Xinyi Road, Sec. 5\nTaipei, 110\nTaiwan", {locale: 'en-TW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Level 73, Taipei 101 Tower, 7 Xinyi Road, Sec. 5");
        test.equal(parsedAddress.locality, "Taipei");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "110");
        test.equal(parsedAddress.country, "Taiwan");
        test.equal(parsedAddress.countryCode, "TW");
        test.done();
    },
    
    testParseAddressTWTWLatinNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("3F-499, Jung-Ming S. Road, West District, Taichung, Taiwan, R.O.C.", {locale: 'en-TW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "3F-499, Jung-Ming S. Road, West District");
        test.equal(parsedAddress.locality, "Taichung");
        test.equal(parsedAddress.region, "Taiwan");
        test.equal(parsedAddress.country, "R.O.C.");
        test.equal(parsedAddress.countryCode, "TW");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressTWTWLatinNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("3F, No.7\nShong-Ren Rd.\nTaipei City 11045", {locale: 'en-TW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "3F, No.7, Shong-Ren Rd.");
        test.equal(parsedAddress.locality, "Taipei City");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "11045");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "TW");
        test.done();
    },
    
    testParseAddressTWTWAsianNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("台灣高雄市苓雅區802四維三路6號18樓A", {locale: 'zh-Hant-TW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "苓雅區四維三路6號18樓A");
        test.equal(parsedAddress.locality, "高雄市");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "802");
        test.equal(parsedAddress.country, "台灣");
        test.equal(parsedAddress.countryCode, "TW");
        test.done();
    },
    
    testParseAddressTWTWAsianNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("台灣台灣省台北市南港區經貿二路66號10樓", {locale: 'zh-Hant-TW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "南港區經貿二路66號10樓");
        test.equal(parsedAddress.locality, "台北市");
        test.equal(parsedAddress.region, "台灣省");
        test.equal(parsedAddress.country, "台灣");
        test.equal(parsedAddress.countryCode, "TW");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressTWTWAsianNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("高雄市苓雅區 802 四維三路 6 號 26 樓", {locale: 'zh-Hant-TW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "苓雅區四維三路 6 號 26 樓");
        test.equal(parsedAddress.locality, "高雄市");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "802");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "TW");
        test.done();
    },
    
    testParseAddressTWTWAsianWithRegion: function(test) {
        test.expect(7);
        var parsedAddress = new Address("台灣台灣省台高雄市苓雅區802四維三路6號18樓A", {locale: 'zh-Hant-TW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "苓雅區四維三路6號18樓A");
        test.equal(parsedAddress.locality, "台高雄市");
        test.equal(parsedAddress.region, "台灣省");
        test.equal(parsedAddress.postalCode, "802");
        test.equal(parsedAddress.country, "台灣");
        test.equal(parsedAddress.countryCode, "TW");
        test.done();
    },
    
    testParseAddressTWTWAsianZipAtEnd: function(test) {
        test.expect(7);
        var parsedAddress = new Address("台灣\n台灣省台高雄市苓雅區四維三路6號18樓A 80245", {locale: 'zh-Hant-TW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "苓雅區四維三路6號18樓A");
        test.equal(parsedAddress.locality, "台高雄市");
        test.equal(parsedAddress.region, "台灣省");
        test.equal(parsedAddress.postalCode, "80245");
        test.equal(parsedAddress.country, "台灣");
        test.equal(parsedAddress.countryCode, "TW");
        test.done();
    },
    
    testParseAddressTWTWManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Level 73\nTaipei 101 Tower\n7 Xinyi Road\nSec. 5\nTaipei\n110\nTaiwan\n\n\n", {locale: 'en-TW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Level 73, Taipei 101 Tower, 7 Xinyi Road, Sec. 5");
        test.equal(parsedAddress.locality, "Taipei");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "110");
        test.equal(parsedAddress.country, "Taiwan");
        test.equal(parsedAddress.countryCode, "TW");
        test.done();
    },
    
    testParseAddressTWTWOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("3F, 499, Jung-Ming S. Road, West District, Taichung, 403, Taiwan, R.O.C.", {locale: 'en-TW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "3F, 499, Jung-Ming S. Road, West District");
        test.equal(parsedAddress.locality, "Taichung");
        test.equal(parsedAddress.region, "Taiwan");
        test.equal(parsedAddress.postalCode, "403");
        test.equal(parsedAddress.country, "R.O.C.");
        test.equal(parsedAddress.countryCode, "TW");
        test.done();
    },
    
    testParseAddressTWTWSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\t3F, \t\rNo.7\n  \rShong-Ren Rd.\t\t   \n\r \t Taipei \t\tCity\r  \r \n  \tTaiwan  \t \t 110\t \n\t \r \t Taiwan\n\n\n", {locale: 'en-TW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.countryCode, "TW");
        test.equal(parsedAddress.country, "Taiwan");
        test.equal(parsedAddress.postalCode, "110");
        test.equal(parsedAddress.region, "Taiwan");
        test.equal(parsedAddress.locality, "Taipei City");
        test.equal(parsedAddress.streetAddress, "3F, No.7, Shong-Ren Rd.");
        test.done();
    },
    
    testParseAddressTWTWNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("3F 499 Jung-Ming S. Road West District Taichung 403 Taiwan R.O.C.", {locale: 'en-TW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "3F 499 Jung-Ming S. Road West District");
        test.equal(parsedAddress.locality, "Taichung");
        test.equal(parsedAddress.region, "Taiwan");
        test.equal(parsedAddress.postalCode, "403");
        test.equal(parsedAddress.country, "R.O.C.");
        test.equal(parsedAddress.countryCode, "TW");
        test.done();
    },
    
    testParseAddressTWTWSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Level 73, Taipei 101 Tower\n7 Xinyi Road, Sec. 5\nTáiběi, 110\nTáiwān\nROC", {locale: 'en-TW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Level 73, Taipei 101 Tower, 7 Xinyi Road, Sec. 5");
        test.equal(parsedAddress.locality, "Táiběi");
        test.equal(parsedAddress.region, "Táiwān");
        test.equal(parsedAddress.postalCode, "110");
        test.equal(parsedAddress.country, "ROC");
        test.equal(parsedAddress.countryCode, "TW");
        test.done();
    },
    
    testParseAddressTWTWFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Level 73, Taipei 101 Tower\n7 Xinyi Road, Sec. 5\nTaipei, 110\nTaiwan\nTaiwan", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Level 73, Taipei 101 Tower, 7 Xinyi Road, Sec. 5");
        test.equal(parsedAddress.locality, "Taipei");
        test.equal(parsedAddress.region, "Taiwan");
        test.equal(parsedAddress.postalCode, "110");
        test.equal(parsedAddress.country, "Taiwan");
        test.equal(parsedAddress.countryCode, "TW");
        test.done();
    },
    
    testFormatAddressTWTWLatin: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Level 73, Taipei 101 Tower, 7 Xinyi Road, Sec. 5",
            locality: "Taipei",
            region: "Taiwan",
            postalCode: "11045",
            country: "Republic of China",
            countryCode: "TW",
            format: "latin"
        }, {locale: 'en-TW'});
        
        var expected = "Level 73, Taipei 101 Tower, 7 Xinyi Road, Sec. 5\nTaipei, Taiwan, 11045\nRepublic of China";
        var formatter = new AddressFmt({locale: 'en-TW'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressTWTWAsian: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "苓雅區四維三路6號18樓A",
            locality: "高雄市",
            region: "台灣省",
            postalCode: "80212",
            country: "中華民國",
            countryCode: "TW",
            format: "asian"
        }, {locale: 'zh-Hant-TW'});
        
        var expected = "中華民國\n台灣省高雄市苓雅區四維三路6號18樓A80212";
        var formatter = new AddressFmt({locale: 'zh-Hant-TW'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressTWTWFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Level 73, Taipei 101 Tower, 7 Xinyi Road, Sec. 5",
            locality: "Taipei",
            region: "Taiwan",
            postalCode: "11045",
            country: "Republic of China",
            countryCode: "TW",
            format: "latin"
        }, {locale: 'en-US'});
        
        var expected = "Level 73, Taipei 101 Tower, 7 Xinyi Road, Sec. 5\nTaipei, Taiwan, 11045\nRepublic of China";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
