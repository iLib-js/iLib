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

module.exports.testaddress_CN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressCNLatinNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("L30, Unit 3007, Teemtower, Teemmall,\n208 Tianhe Road, Tianhe District,\nGuangzhou, Guangdong 510620\nChina", {locale: 'en-CN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "L30, Unit 3007, Teemtower, Teemmall, 208 Tianhe Road, Tianhe District");
        test.equal(parsedAddress.locality, "Guangzhou");
        test.equal(parsedAddress.region, "Guangdong");
        test.equal(parsedAddress.postalCode, "510620");
        test.equal(parsedAddress.country, "China");
        test.equal(parsedAddress.countryCode, "CN");
        test.done();
    },
    
    testParseAddressCNLatinNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("No. 1 Zhongguancun East Road\nHaidian District\nBeijing, China", {locale: 'en-CN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "No. 1 Zhongguancun East Road, Haidian District");
        test.equal(parsedAddress.locality, "Beijing");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "China");
        test.equal(parsedAddress.countryCode, "CN");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressCNLatinNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("No.268 Xizang Zhong Road, Huangpu District\nShanghai, 200001", {locale: 'en-CN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "No.268 Xizang Zhong Road, Huangpu District");
        test.equal(parsedAddress.locality, "Shanghai");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "200001");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "CN");
        test.done();
    },
    
    testParseAddressCNAsianNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("中国北京市朝阳区建国路112号 中国惠普大厦100022", {locale: 'zh-CN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "建国路112号 中国惠普大厦");
        test.equal(parsedAddress.locality, "朝阳区");
        test.equal(parsedAddress.region, "北京市");
        test.equal(parsedAddress.postalCode, "100022");
        test.equal(parsedAddress.country, "中国");
        test.equal(parsedAddress.countryCode, "CN");
        test.done();
    },
    
    testParseAddressCNAsianNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("中国武汉市汉口建设大道568号新世界国贸大厦I座9楼910室", {locale: 'zh-CN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "汉口建设大道568号新世界国贸大厦I座9楼910室");
        test.equal(parsedAddress.locality, "武汉市");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "中国");
        test.equal(parsedAddress.countryCode, "CN");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressCNAsianNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("北京市朝阳区北四环中路 27号盘古大观 A 座 23层200001", {locale: 'zh-CN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "北四环中路 27号盘古大观 A 座 23层");
        test.equal(parsedAddress.region, "北京市");
        test.equal(parsedAddress.locality, "朝阳区");
        test.equal(parsedAddress.postalCode, "200001");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "CN");
        test.done();
    },
    
    testParseAddressCNAsianNOExplicitCityDistrict: function(test) {
        test.expect(7);
        var parsedAddress = new Address("中国四川成都领事馆路4号,邮编 610041", {locale: 'zh-CN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "领事馆路4号邮编");
        test.equal(parsedAddress.region, "四川");
        test.equal(parsedAddress.locality, "成都");
        test.equal(parsedAddress.postalCode, "610041");
        test.equal(parsedAddress.country, "中国");
        test.equal(parsedAddress.countryCode, "CN");
        test.done();
    },
    
    testParseAddressCNAsianWithRegion: function(test) {
        test.expect(7);
        var parsedAddress = new Address("中国湖北省武汉市汉口建设大道568号新世界国贸大厦I座9楼910室430000", {locale: 'zh-CN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "汉口建设大道568号新世界国贸大厦I座9楼910室");
        test.equal(parsedAddress.locality, "武汉市");
        test.equal(parsedAddress.region, "湖北省");
        test.equal(parsedAddress.country, "中国");
        test.equal(parsedAddress.countryCode, "CN");
        test.equal(parsedAddress.postalCode, "430000");
        test.done();
    },
    
    testParseAddressCNManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Tsinghua Science Park Bldg 6\nNo. 1 Zhongguancun East Road\nHaidian District\nBeijing 100084\nPRC\n\n", {locale: 'en-CN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Tsinghua Science Park Bldg 6, No. 1 Zhongguancun East Road, Haidian District");
        test.equal(parsedAddress.locality, "Beijing");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "100084");
        test.equal(parsedAddress.country, "PRC");
        test.equal(parsedAddress.countryCode, "CN");
        test.done();
    },
    
    testParseAddressCNOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("No. 27, Central North Fourth Ring Road, Chaoyang District, Beijing 100101, PRC", {locale: 'en-CN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "No. 27, Central North Fourth Ring Road, Chaoyang District");
        test.equal(parsedAddress.locality, "Beijing");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "100101");
        test.equal(parsedAddress.country, "PRC");
        test.equal(parsedAddress.countryCode, "CN");
        test.done();
    },
    
    testParseAddressCNSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tNo. 27, Central North Fourth \r\t   \tRing Road\t\t\n\t, Chaoyang \r\tDistrict\n\t\rBeijing\t\r\n100101\n\t\t\r\rPRC\t\n\n\n", {locale: 'en-CN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "No. 27, Central North Fourth Ring Road, Chaoyang District");
        test.equal(parsedAddress.locality, "Beijing");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "100101");
        test.equal(parsedAddress.country, "PRC");
        test.equal(parsedAddress.countryCode, "CN");
        test.done();
    },
    
    testParseAddressCNNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("No. 27 Central North Fourth Ring Road Chaoyang District Beijing 100101 PRC", {locale: 'en-CN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "No. 27 Central North Fourth Ring Road Chaoyang District");
        test.equal(parsedAddress.locality, "Beijing");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "100101");
        test.equal(parsedAddress.country, "PRC");
        test.equal(parsedAddress.countryCode, "CN");
        test.done();
    },
    
    testParseAddressCNSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("208 Tianhe Road, Tianhe District,\nGuǎngzhōu, Guǎngdōng 510620\nChina", {locale: 'en-CN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "208 Tianhe Road, Tianhe District");
        test.equal(parsedAddress.locality, "Guǎngzhōu");
        test.equal(parsedAddress.region, "Guǎngdōng");
        test.equal(parsedAddress.postalCode, "510620");
        test.equal(parsedAddress.country, "China");
        test.equal(parsedAddress.countryCode, "CN");
        test.done();
    },
    
    testParseAddressCNFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("208 Tianhe Road, Tianhe District,\nGuǎngzhōu, Guǎngdōng 510620\nChina", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "208 Tianhe Road, Tianhe District");
        test.equal(parsedAddress.locality, "Guǎngzhōu");
        test.equal(parsedAddress.region, "Guǎngdōng");
        test.equal(parsedAddress.postalCode, "510620");
        test.equal(parsedAddress.country, "China");
        test.equal(parsedAddress.countryCode, "CN");
        test.done();
    },
    
    testFormatAddressCNLatin: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "208 Tianhe Road, Tianhe District",
            locality: "Guǎngzhōu",
            region: "Guǎngdōng",
            postalCode: "510620",
            country: "China",
            countryCode: "CN",
            format: "latin"
        }, {locale: 'en-CN'});
        
        var expected = "208 Tianhe Road, Tianhe District\nGuǎngzhōu, Guǎngdōng 510620\nChina";
        var formatter = new AddressFmt({locale: 'en-CN'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressCNFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "208 Tianhe Road, Tianhe District",
            locality: "Guǎngzhōu",
            region: "Guǎngdōng",
            postalCode: "510620",
            country: "China",
            countryCode: "CN",
            format: "latin"
        }, {locale: 'en-US'});
        
        var expected = "208 Tianhe Road, Tianhe District\nGuǎngzhōu, Guǎngdōng 510620\nChina";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};