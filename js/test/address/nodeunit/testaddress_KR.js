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

module.exports.testaddress_KR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressKRNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Seoul National University, 1 Gwanak-ro, Gwanak-gu, Seoul 151-742\nSOUTH KOREA", {locale: 'ko-KR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Seoul National University, 1 Gwanak-ro, Gwanak-gu");
        test.equal(parsedAddress.locality, "Seoul");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "151-742");
        test.equal(parsedAddress.country, "SOUTH KOREA");
        test.equal(parsedAddress.countryCode, "KR");
        test.done();
    },
    
    testParseAddressKRNormalNative: function(test) {
        test.expect(7);
        var parsedAddress = new Address("대한민국\n151-742 서울시 관악구 관악로 1 서울대학교", {locale: 'ko-KR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "관악구 관악로 1 서울대학교");
        test.equal(parsedAddress.locality, "서울시");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "151-742");
        test.equal(parsedAddress.country, "대한민국");
        test.equal(parsedAddress.countryCode, "KR");
        test.done();
    },
    
    testParseAddressKRWithBrackets: function(test) {
        test.expect(7);
        var parsedAddress = new Address("(609-735) 부산광역시 금정구 부산대학로63번길 2 (장전동)", {locale: 'ko-KR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "금정구 부산대학로63번길 2 (장전동)");
        test.equal(parsedAddress.locality, "부산광역시");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "(609-735)");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "KR");
        test.done();
    },
    
    testParseAddressKRWithRegion: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Chuncheon National University of Education.\nGongji Ro 126, Chuncheon 200-703, Gangwon-Do, Republic of Korea", {locale: 'ko-KR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Chuncheon National University of Education., Gongji Ro 126");
        test.equal(parsedAddress.locality, "Chuncheon");
        test.equal(parsedAddress.region, "Gangwon-Do");
        test.equal(parsedAddress.postalCode, "200-703");
        test.equal(parsedAddress.country, "Republic of Korea");
        test.equal(parsedAddress.countryCode, "KR");
        test.done();
    },
    
    testParseAddressKRWithRegionNative: function(test) {
        test.expect(7);
        var parsedAddress = new Address("(200-703) 강원도 춘천시 공지로 126(석사동)", {locale: 'ko-KR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.postalCode, "(200-703)");
        test.equal(parsedAddress.region, "강원도");
        test.equal(parsedAddress.locality, "춘천시");
        test.equal(parsedAddress.streetAddress, "공지로 126(석사동)");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "KR");
        test.done();
    },
    
    testParseAddressKRNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Seoul National University, 1 Gwanak-ro, Gwanak-gu, Seoul\nSOUTH KOREA", {locale: 'ko-KR'});
    
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Seoul National University, 1 Gwanak-ro, Gwanak-gu");
        test.equal(parsedAddress.locality, "Seoul");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "SOUTH KOREA");
        test.equal(parsedAddress.countryCode, "KR");
        test.done();
    },
    
    testParseAddressKRNoZipNative: function(test) {
        test.expect(7);
        var parsedAddress = new Address("대한민국\n서울시 관악구 관악로 1 서울대학교", {locale: 'ko-KR'});
    
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "관악구 관악로 1 서울대학교");
        test.equal(parsedAddress.locality, "서울시");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "대한민국");
        test.equal(parsedAddress.countryCode, "KR");
        test.done();
    },
    
    testParseAddressKRNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Seoul National University, 1 Gwanak-ro, Gwanak-gu, Seoul 151-742", {locale: 'ko-KR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Seoul National University, 1 Gwanak-ro, Gwanak-gu");
        test.equal(parsedAddress.locality, "Seoul");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "151-742");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "KR");
        test.done();
    },
    
    testParseAddressKRNoCountryNative: function(test) {
        test.expect(7);
        var parsedAddress = new Address("151-742 서울시 관악구 관악로 1 서울대학교", {locale: 'ko-KR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "관악구 관악로 1 서울대학교");
        test.equal(parsedAddress.locality, "서울시");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "151-742");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "KR");
        test.done();
    },
    
    testParseAddressKRManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Seoul National University\n1 Gwanak-ro\nGwanak-gu\nSeoul\n151-742\nKorea\n", {locale: 'ko-KR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Seoul National University, 1 Gwanak-ro, Gwanak-gu");
        test.equal(parsedAddress.locality, "Seoul");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "151-742");
        test.equal(parsedAddress.country, "Korea");
        test.equal(parsedAddress.countryCode, "KR");
        test.done();
    },
    
    testParseAddressKRManyLinesNative: function(test) {
        test.expect(7);
        var parsedAddress = new Address("대한민국\n151-742\n서울시\n관악구 관악로\n1 서울대학교", {locale: 'ko-KR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "관악구 관악로 1 서울대학교");
        test.equal(parsedAddress.locality, "서울시");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "151-742");
        test.equal(parsedAddress.country, "대한민국");
        test.equal(parsedAddress.countryCode, "KR");
        test.done();
    },
    
    testParseAddressKROneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Seoul National University, 1 Gwanak-ro, Gwanak-gu, Seoul 151-742, SOUTH KOREA", {locale: 'ko-KR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Seoul National University, 1 Gwanak-ro, Gwanak-gu");
        test.equal(parsedAddress.locality, "Seoul");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "151-742");
        test.equal(parsedAddress.country, "SOUTH KOREA");
        test.equal(parsedAddress.countryCode, "KR");
        test.done();
    },
    
    testParseAddressKROneLineNative: function(test) {
        test.expect(7);
        var parsedAddress = new Address("대한민국, 151-742 서울시 관악구 관악로 1 서울대학교", {locale: 'ko-KR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "관악구 관악로 1 서울대학교");
        test.equal(parsedAddress.locality, "서울시");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "151-742");
        test.equal(parsedAddress.country, "대한민국");
        test.equal(parsedAddress.countryCode, "KR");
        test.done();
    },
    
    testParseAddressKRNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Seoul National University 1 Gwanak-ro Gwanak-gu Seoul 151-742 SOUTH KOREA", {locale: 'ko-KR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Seoul National University 1 Gwanak-ro Gwanak-gu");
        test.equal(parsedAddress.locality, "Seoul");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "151-742");
        test.equal(parsedAddress.country, "SOUTH KOREA");
        test.equal(parsedAddress.countryCode, "KR");
        test.done();
    },
    
    testParseAddressKRNoDelimitersNative: function(test) {
        test.expect(7);
        var parsedAddress = new Address("대한민국 151-742 서울시 관악구 관악로 1 서울대학교", {locale: 'ko-KR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "관악구 관악로 1 서울대학교");
        test.equal(parsedAddress.locality, "서울시");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "151-742");
        test.equal(parsedAddress.country, "대한민국");
        test.equal(parsedAddress.countryCode, "KR");
        test.done();
    },
    
    testParseAddressKRLatinFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Seoul National University, 1 Gwanak-ro, Gwanak-gu\nSeoul 151-742\nRepublic of Korea", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Seoul National University, 1 Gwanak-ro, Gwanak-gu");
        test.equal(parsedAddress.locality, "Seoul");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "151-742");
        test.equal(parsedAddress.country, "Republic of Korea");
        test.equal(parsedAddress.countryCode, "KR");
        test.done();
    },
    
    testFormatAddressKRLatin: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Seoul National University, 1 Gwanak-ro, Gwanak-gu",
            locality: "Seoul",
            postalCode: "151-742",
            country: "SOUTH KOREA",
            countryCode: "KR",
            format: "latin"
        }, {locale: 'ko-KR'});
        
        var expected = "Seoul National University, 1 Gwanak-ro, Gwanak-gu\nSeoul 151-742\nSOUTH KOREA";
        var formatter = new AddressFmt({locale: 'ko-KR'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressKRLatinWithRegion: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Chuncheon National University of Education, 339 Seoksa-dong",
            locality: "Chuncheon-si",
            region: "Gangwon-do",
            postalCode: "200-703",
            country: "South Korea",
            countryCode: "KR",
            format: "latin"
        }, {locale: 'ko-KR'});
        
        var expected = "Chuncheon National University of Education, 339 Seoksa-dong\nChuncheon-si Gangwon-do 200-703\nSouth Korea";
        var formatter = new AddressFmt({locale: 'ko-KR'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressKRLatinFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Seoul National University, 1 Gwanak-ro, Gwanak-gu",
            locality: "Seoul",
            postalCode: "151-742",
            country: "SOUTH KOREA",
            countryCode: "KR",
            format: "latin"
        }, {locale: 'en-US'});
        
        var expected = "Seoul National University, 1 Gwanak-ro, Gwanak-gu\nSeoul 151-742\nSOUTH KOREA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressKRNative: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "관악구 관악로 1 서울대학교",
            locality: "서울시",
            postalCode: "151-742",
            country: "대한민국",
            countryCode: "KR",
            format: "asian"
        }, {locale: 'ko-KR'});
        
        var expected = "대한민국\n151-742 서울시 관악구 관악로 1 서울대학교";
        var formatter = new AddressFmt({locale: 'ko-KR'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressKRNativeWithRegion: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "공지로 126(석사동)",
            locality: "춘천시",
            region: "강원도",
            postalCode: "(200-703)",
            country: "대한민국",
            countryCode: "KR",
            format: "asian"
        }, {locale: 'ko-KR'});
        
        var expected = "대한민국\n(200-703) 강원도 춘천시 공지로 126(석사동)";
        var formatter = new AddressFmt({locale: 'ko-KR'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
    
};
