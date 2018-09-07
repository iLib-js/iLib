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
    var Address = require("../.././../lib/Address.js");
}
if (typeof(AddressFmt) === "undefined") {
    var AddressFmt = require("../../../lib/AddressFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testaddress = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressSimple: function(test) {
        test.expect(7);
        var parsedAddress = new Address("950 W Maude Ave.\nSunnyvale, CA 94085\nUSA", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "950 W Maude Ave.");
        test.equal(parsedAddress.locality, "Sunnyvale");
        test.equal(parsedAddress.region, "CA");
        test.equal(parsedAddress.postalCode, "94085");
        test.equal(parsedAddress.country, "USA");
        test.equal(parsedAddress.countryCode, "US");
        test.done();
    },
    
    // to verify NOV-111026
    testParseAddressSimple2: function(test) {
        test.expect(7);
        var parsedAddress = new Address("20 Main St.\nMyTown, NY 11530\nUSA", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "20 Main St.");
        test.equal(parsedAddress.locality, "MyTown");
        test.equal(parsedAddress.region, "NY");
        test.equal(parsedAddress.postalCode, "11530");
        test.equal(parsedAddress.country, "USA");
        test.equal(parsedAddress.countryCode, "US");
        test.done();
    },
    
    testParseAddressSimple3: function(test) {
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
    
    testParseAddressMoreComplex: function(test) {
        test.expect(7);
        var parsedAddress = new Address("950 W 21st Ave, Apt 45\nNY, NY 10234", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "950 W 21st Ave, Apt 45");
        test.equal(parsedAddress.locality, "NY");
        test.equal(parsedAddress.region, "NY");
        test.equal(parsedAddress.postalCode, "10234");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "US");
        test.done();
    },
    
    testParseAddressSpelledOutState: function(test) {
        test.expect(7);
        var parsedAddress = new Address("20 Main St.\nMyTown, Arizona 11530\nUSA", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "20 Main St.");
        test.equal(parsedAddress.locality, "MyTown");
        test.equal(parsedAddress.region, "Arizona");
        test.equal(parsedAddress.postalCode, "11530");
        test.equal(parsedAddress.country, "USA");
        test.equal(parsedAddress.countryCode, "US");
        test.done();
    },
    
    testParseAddressSpelledOutStateWithSpaces: function(test) {
        test.expect(7);
        var parsedAddress = new Address("20 Main St.\nMyTown, New York 11530\nUSA", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "20 Main St.");
        test.equal(parsedAddress.locality, "MyTown");
        test.equal(parsedAddress.region, "New York");
        test.equal(parsedAddress.postalCode, "11530");
        test.equal(parsedAddress.country, "USA");
        test.equal(parsedAddress.countryCode, "US");
        test.done();
    },
    
    testParseAddressSpelledOutStateWithPrefix: function(test) {
        test.expect(7);
        var parsedAddress = new Address("20 Main St.\nMyTown, Arkansas 11530\nUSA", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "20 Main St.");
        test.equal(parsedAddress.locality, "MyTown");
        test.equal(parsedAddress.region, "Arkansas");
        test.equal(parsedAddress.postalCode, "11530");
        test.equal(parsedAddress.country, "USA");
        test.equal(parsedAddress.countryCode, "US");
        test.done();
    },
    
    testParseAddressNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("20 Main St.\nMyTown, NY\nUSA", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "20 Main St.");
        test.equal(parsedAddress.locality, "MyTown");
        test.equal(parsedAddress.region, "NY");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "USA");
        test.equal(parsedAddress.countryCode, "US");
        test.done();
    },
    
    testParseAddressManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("950 W 21st Ave\nApt 45\nNY\nNY\n10234", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "950 W 21st Ave, Apt 45");
        test.equal(parsedAddress.locality, "NY");
        test.equal(parsedAddress.region, "NY");
        test.equal(parsedAddress.postalCode, "10234");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "US");
        test.done();
    },
    
    testParseAddressOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("950 W Maude Ave., Sunnyvale, CA 94085 USA", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "950 W Maude Ave.");
        test.equal(parsedAddress.locality, "Sunnyvale");
        test.equal(parsedAddress.region, "CA");
        test.equal(parsedAddress.postalCode, "94085");
        test.equal(parsedAddress.country, "USA");
        test.equal(parsedAddress.countryCode, "US");
        test.done();
    },
    
    testParseAddressSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("950 W 21st Ave\n\n   Apt 45      \n NY,    NY   10234\n\n   \n\n", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "950 W 21st Ave, Apt 45");
        test.equal(parsedAddress.locality, "NY");
        test.equal(parsedAddress.region, "NY");
        test.equal(parsedAddress.postalCode, "10234");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "US");
        test.done();
    },
    
    testParseAddressFewDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("950 W Maude Ave., Sunnyvale CA 94085 USA", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "950 W Maude Ave.");
        test.equal(parsedAddress.locality, "Sunnyvale");
        test.equal(parsedAddress.region, "CA");
        test.equal(parsedAddress.postalCode, "94085");
        test.equal(parsedAddress.country, "USA");
        test.equal(parsedAddress.countryCode, "US");
        test.done();
    },
    
    testParseAddressWithStreetNumberThatLooksLikeAZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("15672 W 156st St #45\nSeattle, WA 98765", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "15672 W 156st St #45");
        test.equal(parsedAddress.locality, "Seattle");
        test.equal(parsedAddress.region, "WA");
        test.equal(parsedAddress.postalCode, "98765");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "US");
        test.done();
    },
    
    testParseAddressPOBox: function(test) {
        test.expect(7);
        var parsedAddress = new Address("P.O. Box 350\nMinneapolis MN 45678-2234", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "P.O. Box 350");
        test.equal(parsedAddress.locality, "Minneapolis");
        test.equal(parsedAddress.region, "MN");
        test.equal(parsedAddress.postalCode, "45678-2234");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "US");
        test.done();
    },
    
    testParseAddressHawaii: function(test) {
        test.expect(7);
        var parsedAddress = new Address("20 Hawai'i Oe Lane\nKa'anapali, HI 99232", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "20 Hawai'i Oe Lane");
        test.equal(parsedAddress.locality, "Ka'anapali");
        test.equal(parsedAddress.region, "HI");
        test.equal(parsedAddress.postalCode, "99232");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "US");
        test.done();
    },
    
    testParseAddressUnknown: function(test) {
        test.expect(7);
    
        var parsedAddress = new Address("123 Main Street, Pretoria 5678, South Africa", {locale: 'en-US'});
    
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "123 Main Street");
        test.equal(parsedAddress.locality, "Pretoria");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "5678");
        test.equal(parsedAddress.country, "South Africa");
        test.equal(parsedAddress.countryCode, "ZA");
        test.done();
    },
    
    testParseAddressNonUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Achterberglaan 23, 2345 GD Uithoorn, Netherlands", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Achterberglaan 23");
        test.equal(parsedAddress.locality, "Uithoorn");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "2345 GD");
        test.equal(parsedAddress.country, "Netherlands");
        test.equal(parsedAddress.countryCode, "NL");
        test.done();
    },
        
    // for NOV-118061
    testParseAddressNonStandard: function(test) {
        test.expect(7);
        var parsedAddress = new Address("123 mcdonald ave, apt 234, sunnyvale, CA 34567", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "123 mcdonald ave, apt 234");
        test.equal(parsedAddress.locality, "sunnyvale");
        test.equal(parsedAddress.region, "CA");
        test.equal(parsedAddress.postalCode, "34567");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "US");
        test.done();
    },

    testFormatAddressDefault: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "1234 Any Street",
            locality: "Anytown",
            region: "CA",
            postalCode: "94085",
            country: "United States of America",
            countryCode: "US"
        }, {locale: 'en-US'});
        
        // should give US format by default
        var expected = "1234 Any Street\nAnytown CA 94085\nUnited States of America";
        var formatter = new AddressFmt();
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },

    testFormatAddressUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "1234 Any Street",
            locality: "Anytown",
            region: "CA",
            postalCode: "94085",
            country: "United States of America",
            countryCode: "US"
        }, {locale: 'en-US'});
        
        var expected = "1234 Any Street\nAnytown CA 94085\nUnited States of America";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressDomestic: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "1234 Any Street",
            locality: "Anytown",
            region: "CA",
            postalCode: "94085",
            country: "United States of America",
            countryCode: "US"
        }, {locale: 'en-US'});
        
        var expected = "1234 Any Street\nAnytown CA 94085";
        var formatter = new AddressFmt({locale: 'en-US', style: 'nocountry'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    // for DFISH-9927
    testParseAddressUnknownLocale: function(test) {
        test.expect(7);
        var parsedAddress = new Address("123 mcdonald ave, apt 234, sunnyvale, CA 34567", {locale: 'zxx-XX'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "123 mcdonald ave, apt 234, sunnyvale");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "CA");
        test.equal(parsedAddress.postalCode, "34567");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "XX");
        test.done();
    },
    
    //for DFISH-23879
    testParseAddressUnknownLocaleQQ: function(test) {
        test.expect(7);
        var parsedAddress = new Address("123 mcdonald ave, apt 234, sunnyvale, CA 34567", {locale: 'en-QQ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "123 mcdonald ave, apt 234, sunnyvale");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "CA");
        test.equal(parsedAddress.postalCode, "34567");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "QQ");
        test.done();
    },
    
    testFormatAddressUnknownLocaleQQ: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "123 mcdonald ave, apt 234", 
            locality: "Sunnyvale",
            region: "CA",
            postalCode: "94086", 
            locale: 'en-QQ'
        });
        
        var expected = "123 mcdonald ave, apt 234\nSunnyvale CA 94086";
        var formatter = new AddressFmt({locale: 'en-QQ', style: 'nocountry'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testParseAddressUnknownLocaleHK: function(test) {
        test.expect(7);
        var parsedAddress = new Address("123 mcdonald ave, apt 234, sunnyvale, CA 34567", {locale: 'en-HK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "123 mcdonald ave, apt 234, sunnyvale, CA 34567");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.locality) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "HK");
        test.done();
    },
    
    testFormatAddressUnknownLocaleHK: function(test) {
        test.expect(1);
        var parsedAddress = new Address("123 mcdonald ave, apt 234, sunnyvale, CA 34567", {locale: 'en-HK'});
        
        var expected = "123 mcdonald ave, apt 234, sunnyvale, CA 34567";
        var formatter = new AddressFmt({locale: 'en-HK', style: 'nocountry'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressDefaultEverythingButForeignAddress: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            country: "Hong Kong",
            countryCode: "HK",
            locality: "North Point",
            streetAddress: "5F, 633 King's Road"
        });
        
        var expected = "5F, 633 King's Road\nNorth Point\nHong Kong";
        var formatter = new AddressFmt();
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },

    testAddressFmtGetFormatInfoUSRightComponents: function(test) {
        test.expect(15);
        var formatter = new AddressFmt({locale: 'en-US'});

        var info = formatter.getFormatInfo();

        test.ok(info);
        test.equal(info.length, 3);
        test.equal(info[0].length, 1);
        test.equal(info[1].length, 3);
        test.equal(info[2].length, 1);

        test.equal(info[0][0].component, "streetAddress");
        test.equal(info[0][0].label, "Street Address");
        test.equal(info[1][0].component, "locality");
        test.equal(info[1][0].label, "City");
        test.equal(info[1][1].component, "region");
        test.equal(info[1][1].label, "State");
        test.equal(info[1][2].component, "postalCode");
        test.equal(info[1][2].label, "Zip Code");
        test.equal(info[2][0].component, "country");
        test.equal(info[2][0].label, "Country");
        test.done();
    },

    testAddressFmtGetFormatInfoUSRightConstraints: function(test) {
        test.expect(13);
        var formatter = new AddressFmt({locale: 'en-US'});

        var info = formatter.getFormatInfo();

        test.ok(info);

        test.equal(info[1][2].component, "postalCode");
        test.equal(info[1][2].constraint, "[0-9]{5}(-[0-9]{4})?");

        test.equal(info[1][1].component, "region");
        test.ok(info[1][2].constraint);
        test.equal(info[1][1].constraint["AZ"], "Arizona");
        test.equal(info[1][1].constraint["MS"], "Mississippi");
        test.equal(info[1][1].constraint["NY"], "New York");

        test.equal(info[2][0].component, "country");
        test.ok(info[2][0].constraint);
        test.equal(info[2][0].constraint["JP"], "Japan");
        test.equal(info[2][0].constraint["CR"], "Costa Rica");
        test.equal(info[2][0].constraint["ZA"], "South Africa");

        test.done();
    },

    testAddressFmtGetFormatInfoUSButGermanLabels: function(test) {
        test.expect(15);
        var formatter = new AddressFmt({locale: 'en-US'});

        var info = formatter.getFormatInfo("de");

        test.ok(info);
        test.equal(info.length, 3);
        test.equal(info[0].length, 1);
        test.equal(info[1].length, 3);
        test.equal(info[2].length, 1);

        test.equal(info[0][0].component, "streetAddress");
        test.equal(info[0][0].label, "Straßenadresse");
        test.equal(info[1][0].component, "locality");
        test.equal(info[1][0].label, "Stadt");
        test.equal(info[1][1].component, "region");
        test.equal(info[1][1].label, "Bundesland");
        test.equal(info[1][2].component, "postalCode");
        test.equal(info[1][2].label, "Postleitzahl");
        test.equal(info[2][0].component, "country");
        test.equal(info[2][0].label, "Land");
        test.done();
    },

    testAddressFmtGetFormatInfoDE: function(test) {
        test.expect(18);
        var formatter = new AddressFmt({locale: 'de-DE'});

        var info = formatter.getFormatInfo();

        test.ok(info);
        test.equal(info.length, 3);
        test.equal(info[0].length, 1);
        test.equal(info[1].length, 2);
        test.equal(info[2].length, 1);

        test.equal(info[0][0].component, "streetAddress");
        test.equal(info[0][0].label, "Straßenadresse");
        test.equal(info[1][0].component, "postalCode");
        test.equal(info[1][0].label, "Postleitzahl");
        test.equal(info[1][0].constraint, "[0-9]{5}");
        test.equal(info[1][1].component, "locality");
        test.equal(info[1][1].label, "Stadt");
        test.equal(info[2][0].component, "country");
        test.equal(info[2][0].label, "Land");
        test.ok(info[2][0].constraint);
        test.equal(info[2][0].constraint["RU"], "Russland");
        test.equal(info[2][0].constraint["CA"], "Kanada");
        test.equal(info[2][0].constraint["ZA"], "Südafrika");
        test.done();
    },

    testAddressFmtGetFormatInfoCN: function(test) {
        test.expect(21);
        var formatter = new AddressFmt({locale: 'zh-Hans-CN'});

        var info = formatter.getFormatInfo();

        test.ok(info);
        test.equal(info.length, 4);
        test.equal(info[0].length, 1);
        test.equal(info[1].length, 1);
        test.equal(info[2].length, 2);
        test.equal(info[3].length, 1);

        test.equal(info[0][0].component, "country");
        test.equal(info[0][0].label, "国家");
        test.ok(info[0][0].constraint);
        test.equal(info[0][0].constraint["RU"], "俄罗斯");
        test.equal(info[0][0].constraint["CA"], "加拿大");
        test.equal(info[0][0].constraint["ZA"], "南非");
        test.equal(info[1][0].component, "region");
        test.equal(info[1][0].label, "省或地区");
        test.equal(info[2][0].component, "locality");
        test.equal(info[2][0].label, "城市");
        test.equal(info[2][1].component, "postalCode");
        test.equal(info[2][1].label, "邮政编码");
        test.equal(info[2][1].constraint, "[0-9]{6}$");
        test.equal(info[3][0].component, "streetAddress");
        test.equal(info[3][0].label, "地址");
        test.done();
    },

    testAddressFmtGetFormatInfoSG: function(test) {
        test.expect(17);
        var formatter = new AddressFmt({locale: 'zh-Hans-SG'});

        var info = formatter.getFormatInfo();

        test.ok(info);
        test.equal(info.length, 2);
        test.equal(info[0].length, 1);
        test.equal(info[1].length, 3);

        test.equal(info[0][0].component, "country");
        test.equal(info[0][0].label, "国家");
        test.ok(info[0][0].constraint);
        test.equal(info[0][0].constraint["RU"], "俄罗斯");
        test.equal(info[0][0].constraint["CA"], "加拿大");
        test.equal(info[0][0].constraint["ZA"], "南非");
        test.equal(info[1][0].component, "postalCode");
        test.equal(info[1][0].label, "邮政编码");
        test.equal(info[1][0].constraint, "^[0-9]{6}");
        test.equal(info[1][1].component, "locality");
        test.equal(info[1][1].label, "城市");
        test.equal(info[1][2].component, "streetAddress");
        test.equal(info[1][2].label, "地址");
        test.done();
    },

    testAddressFmtGetFormatInfoENSG: function(test) {
        test.expect(18);
        var formatter = new AddressFmt({locale: 'en-SG'});

        var info = formatter.getFormatInfo();

        test.ok(info);
        test.equal(info.length, 3);
        test.equal(info[0].length, 1);
        test.equal(info[1].length, 2);
        test.equal(info[2].length, 1);

        test.equal(info[0][0].component, "streetAddress");
        test.equal(info[0][0].label, "Street Address");
        test.equal(info[1][0].component, "locality");
        test.equal(info[1][0].label, "Town");
        test.equal(info[1][1].component, "postalCode");
        test.equal(info[1][1].label, "Post Code");
        test.equal(info[1][1].constraint, "[0-9]{6}");
        test.equal(info[2][0].component, "country");
        test.equal(info[2][0].label, "Country");
        test.ok(info[2][0].constraint);
        test.equal(info[2][0].constraint["RU"], "Russia");
        test.equal(info[2][0].constraint["CA"], "Canada");
        test.equal(info[2][0].constraint["ZA"], "South Africa");
        test.done();
    },

    testAddressFmtGetFormatInfoCARightComponents: function(test) {
        test.expect(20);
        var formatter = new AddressFmt({locale: 'en-CA'});

        var info = formatter.getFormatInfo();

        test.ok(info);
        test.equal(info.length, 3);
        test.equal(info[0].length, 1);
        test.equal(info[1].length, 3);
        test.equal(info[2].length, 1);

        test.equal(info[0][0].component, "streetAddress");
        test.equal(info[0][0].label, "Street Address");
        test.equal(info[1][0].component, "locality");
        test.equal(info[1][0].label, "City");
        test.equal(info[1][1].component, "region");
        test.equal(info[1][1].label, "Province or Territory");
        test.ok(info[1][1].constraint);
        test.equal(info[1][1].constraint["AB"], "Alberta");
        test.equal(info[1][1].constraint["BC"], "British Columbia");
        test.equal(info[1][1].constraint["QC"], "Quebec");
        test.equal(info[1][2].component, "postalCode");
        test.equal(info[1][2].label, "Postal Code");
        test.equal(info[1][2].constraint, "[A-Za-z][0-9][A-Za-z]\\s+[0-9][A-Za-z][0-9]");
        test.equal(info[2][0].component, "country");
        test.equal(info[2][0].label, "Country");
        test.done();
    },

    testAddressFmtGetFormatInfoCAInGerman: function(test) {
        test.expect(20);
        var formatter = new AddressFmt({locale: 'en-CA'});

        var info = formatter.getFormatInfo("de");

        test.ok(info);
        test.equal(info.length, 3);
        test.equal(info[0].length, 1);
        test.equal(info[1].length, 3);
        test.equal(info[2].length, 1);

        test.equal(info[0][0].component, "streetAddress");
        test.equal(info[0][0].label, "Straßenadresse");
        test.equal(info[1][0].component, "locality");
        test.equal(info[1][0].label, "Stadt");
        test.equal(info[1][1].component, "region");
        test.equal(info[1][1].label, "Provinz oder Gebiet");
        test.equal(info[1][2].component, "postalCode");
        test.ok(info[1][1].constraint);
        test.equal(info[1][1].constraint["NT"], "Nordwest-Territorien");
        test.equal(info[1][1].constraint["BC"], "British Columbia");
        test.equal(info[1][1].constraint["QC"], "Québec");
        test.equal(info[1][2].label, "Postleitzahl");
        test.equal(info[1][2].constraint, "[A-Za-z][0-9][A-Za-z]\\s+[0-9][A-Za-z][0-9]");
        test.equal(info[2][0].component, "country");
        test.equal(info[2][0].label, "Land");
        test.done();
    },

    testAddressFmtGetFormatInfoGBRightComponents: function(test) {
        test.expect(15);
        var formatter = new AddressFmt({locale: 'en-GB'});

        var info = formatter.getFormatInfo();

        test.ok(info);
        test.equal(info.length, 4);
        test.equal(info[0].length, 1);
        test.equal(info[1].length, 1);
        test.equal(info[2].length, 1);
        test.equal(info[2].length, 1);

        test.equal(info[0][0].component, "streetAddress");
        test.equal(info[0][0].label, "Street Address");
        test.equal(info[1][0].component, "locality");
        test.equal(info[1][0].label, "Town");
        test.equal(info[2][0].component, "postalCode");
        test.equal(info[2][0].label, "Post Code");
        test.equal(info[2][0].constraint, "([A-Za-z]{1,2}[0-9]{1,2}[ABCDEFGHJKMNPRSTUVWXYabcdefghjkmnprstuvwxy]?\\s+[0-9][A-Za-z]{2}|GIR 0AA|SAN TA1)");
        test.equal(info[3][0].component, "country");
        test.equal(info[3][0].label, "Country");
        test.done();
    }
};
