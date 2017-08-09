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

module.exports.testaddress_JP = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressJPSimple: function(test) {
        test.expect(7);
        var parsedAddress = new Address("5-2-1 Ginza, Chuo-ku\nTokyo 170-3293\nJapan", {locale: 'en-JP'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "5-2-1 Ginza");
        test.equal(parsedAddress.locality, "Chuo-ku");
        test.equal(parsedAddress.region, "Tokyo");
        test.equal(parsedAddress.postalCode, "170-3293");
        test.equal(parsedAddress.country, "Japan");
        test.equal(parsedAddress.countryCode, "JP");
        test.done();
    },
    
    testParseAddressJPLatinNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Tokyo Central Post Office\n208 5-3, Yaesu 1-Chome\nChuo-ku, Tokyo 100-8994\nJapan", {locale: 'en-JP'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Tokyo Central Post Office, 208 5-3, Yaesu 1-Chome");
        test.equal(parsedAddress.locality, "Chuo-ku");
        test.equal(parsedAddress.region, "Tokyo");
        test.equal(parsedAddress.postalCode, "100-8994");
        test.equal(parsedAddress.country, "Japan");
        test.equal(parsedAddress.countryCode, "JP");
        test.done();
    },
    
    testParseAddressJPLatinNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Tokyo Central Post Office\n208 5-3, Yaesu 1-Chome\nChuo-ku, Tokyo\nJapan", {locale: 'en-JP'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Tokyo Central Post Office, 208 5-3, Yaesu 1-Chome");
        test.equal(parsedAddress.locality, "Chuo-ku");
        test.equal(parsedAddress.region, "Tokyo");
        test.equal(parsedAddress.country, "Japan");
        test.equal(parsedAddress.countryCode, "JP");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressJPLatinNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Tokyo Central Post Office\n208 5-3, Yaesu 1-Chome\nChuo-ku, Tokyo 100-8994", {locale: 'en-JP'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Tokyo Central Post Office, 208 5-3, Yaesu 1-Chome");
        test.equal(parsedAddress.locality, "Chuo-ku");
        test.equal(parsedAddress.region, "Tokyo");
        test.equal(parsedAddress.postalCode, "100-8994");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "JP");
        test.done();
    },
    
    testParseAddressJPAsianNormal1: function(test) {
        test.expect(6);
        var parsedAddress = new Address("〒150-2345 東京都渋谷区本町2丁目4-7サニーマンション203", {locale: 'ja-JP'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "本町2丁目4-7サニーマンション203");
        test.equal(parsedAddress.locality, "渋谷区");
        test.equal(parsedAddress.region, "東京都");
        test.equal(parsedAddress.postalCode, "〒150-2345");
        test.equal(parsedAddress.countryCode, "JP");
        test.done();
    },
    
    testParseAddressJPAsianNormal2: function(test) {
        test.expect(6);
        var parsedAddress = new Address("〒108-8282\n東京都港区港南2-16-1\n品川イーストワンタワー", {locale: 'ja-JP'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "港南2-16-1品川イーストワンタワー");
        test.equal(parsedAddress.locality, "港区");
        test.equal(parsedAddress.region, "東京都");
        test.equal(parsedAddress.postalCode, "〒108-8282");
        test.equal(parsedAddress.countryCode, "JP");
        test.done();
    },
    
    testParseAddressJPAsianNormal3: function(test) {
        test.expect(6);
        var parsedAddress = new Address("623-0006京都府綾部市有岡町田坂１６", {locale: 'ja-JP'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "有岡町田坂１６");
        test.equal(parsedAddress.locality, "綾部市");
        test.equal(parsedAddress.region, "京都府");
        test.equal(parsedAddress.postalCode, "623-0006");
        test.equal(parsedAddress.countryCode, "JP");
        test.done();
    },
    
    testParseAddressJPAsianNoZip: function(test) {
        test.expect(6);
        var parsedAddress = new Address("東京都港区港南2-16-1n品川イーストワンタワー", {locale: 'ja-JP'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "港南2-16-1n品川イーストワンタワー");
        test.equal(parsedAddress.locality, "港区");
        test.equal(parsedAddress.region, "東京都");
        test.equal(parsedAddress.countryCode, "JP");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressJPAsianNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("100-8994東京都中央区\n東京中央郵便局、2085-3、八重洲1丁目", {locale: 'ja-JP'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "東京中央郵便局、2085-3、八重洲1丁目");
        test.equal(parsedAddress.locality, "中央区");
        test.equal(parsedAddress.region, "東京都");
        test.equal(parsedAddress.postalCode, "100-8994");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "JP");
        test.done();
    },
    
    testParseAddressJPManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Tokyo Central Post Office\n208 5-3\nYaesu 1-Chome\nChuo-ku\nTokyo\n100-8994\nJapan\n\n\n", {locale: 'en-JP'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Tokyo Central Post Office, 208 5-3, Yaesu 1-Chome");
        test.equal(parsedAddress.locality, "Chuo-ku");
        test.equal(parsedAddress.region, "Tokyo");
        test.equal(parsedAddress.postalCode, "100-8994");
        test.equal(parsedAddress.country, "Japan");
        test.equal(parsedAddress.countryCode, "JP");
        test.done();
    },
    
    testParseAddressJPOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("6-11 SHIMOHONDA, KOYASU-CHO, HACHIOJI, TOKYO 192-0993, JAPAN", {locale: 'en-JP'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "6-11 SHIMOHONDA, KOYASU-CHO");
        test.equal(parsedAddress.locality, "HACHIOJI");
        test.equal(parsedAddress.region, "TOKYO");
        test.equal(parsedAddress.postalCode, "192-0993");
        test.equal(parsedAddress.country, "JAPAN");
        test.equal(parsedAddress.countryCode, "JP");
        test.done();
    },
    
    testParseAddressJPSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\t6-11 SHIMOHONDA \r\t   \tKOYASU-CHO\t\t\t, HACHIOJI-SHI \r\tTOKYO 192-0993\t\n\n\nJAPAN", {locale: 'en-JP'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "6-11 SHIMOHONDA KOYASU-CHO");
        test.equal(parsedAddress.locality, "HACHIOJI-SHI");
        test.equal(parsedAddress.region, "TOKYO");
        test.equal(parsedAddress.postalCode, "192-0993");
        test.equal(parsedAddress.country, "JAPAN");
        test.equal(parsedAddress.countryCode, "JP");
        test.done();
    },
    
    testParseAddressJPNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("6-11 SHIMOHONDA KOYASU-CHO HACHIOJI-SHI TOKYO 192-0993 JAPAN", {locale: 'en-JP'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "6-11 SHIMOHONDA KOYASU-CHO");
        test.equal(parsedAddress.locality, "HACHIOJI-SHI");
        test.equal(parsedAddress.region, "TOKYO");
        test.equal(parsedAddress.postalCode, "192-0993");
        test.equal(parsedAddress.country, "JAPAN");
        test.equal(parsedAddress.countryCode, "JP");
        test.done();
    },
    
    testParseAddressJPFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("208 Tianhe Road, Tianhe District,\nChūō, Tōkyō 192-0993\nJapan", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "208 Tianhe Road, Tianhe District");
        test.equal(parsedAddress.locality, "Chūō");
        test.equal(parsedAddress.region, "Tōkyō");
        test.equal(parsedAddress.postalCode, "192-0993");
        test.equal(parsedAddress.country, "Japan");
        test.equal(parsedAddress.countryCode, "JP");
        test.done();
    },
    
    testFormatAddressJPLatin: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "208 Tianhe Road, Tianhe District",
            locality: "Chūō",
            region: "Tōkyō",
            postalCode: "192-0993",
            country: "Japan",
            countryCode: "JP",
            format: "latin"
        }, {locale: 'en-JP'});
        
        var expected = "208 Tianhe Road, Tianhe District\nChūō, Tōkyō 192-0993\nJapan";
        var formatter = new AddressFmt({locale: 'en-JP'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressJPFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "208 Tianhe Road, Tianhe District",
            locality: "Chūō",
            region: "Tōkyō",
            postalCode: "192-0993",
            country: "Japan",
            countryCode: "JP",
            format: "latin"
        }, {locale: 'en-US'});
        
        var expected = "208 Tianhe Road, Tianhe District\nChūō, Tōkyō 192-0993\nJapan";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressJPAsianNormal: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "本町2丁目4-7サニーマンション203",
            locality: "渋谷区",
            region: "東京都",
            postalCode: "〒150-2345",
            countryCode: "JP",
            format: "asian"
        }, {locale: 'ja-JP'});
        
        var expected = "〒150-2345\n東京都渋谷区本町2丁目4-7サニーマンション203";
        var formatter = new AddressFmt({locale: 'ja-JP'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
    
};