/*
 * testaddress.js - test the address parsing and formatting routines
 *
 * Copyright © 2013-2015,2017,2023 JEDLSoft
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

function searchRegions(array, regionCode) {
    return array.find(function(region) {
        return region.code === regionCode;
    });
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
    testFormatAddressUnknownCountry: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "1234 Any Street",
            locality: "Anytown",
            region: "CA",
            postalCode: "94085",
            country: "Unknown",
            countryCode: "XY"
        }, {locale: 'en-XY'});

        var expected = "1234 Any Street\nAnytown CA 94085\nUnknown";
        var formatter = new AddressFmt({locale: 'en-XY', style: 'nocountry'});
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
        test.expect(19);
        var formatter = new AddressFmt({locale: 'en-US'});

        var info = formatter.getFormatInfo();

        test.ok(info);

        test.equal(info[1][2].component, "postalCode");
        test.equal(info[1][2].constraint, "[0-9]{5}(-[0-9]{4})?");

        test.equal(info[1][1].component, "region");
        test.ok(info[1][1].constraint);
        var r = searchRegions(info[1][1].constraint, "AZ");
        test.equal(r.code, "AZ");
        test.equal(r.name, "Arizona");
        r = searchRegions(info[1][1].constraint, "MS");
        test.equal(r.code, "MS");
        test.equal(r.name, "Mississippi");
        r = searchRegions(info[1][1].constraint, "NY");
        test.equal(r.code, "NY");
        test.equal(r.name, "New York");

        test.equal(info[2][0].component, "country");
        test.ok(info[2][0].constraint);
        var r = searchRegions(info[2][0].constraint, "JP");
        test.equal(r.code, "JP");
        test.equal(r.name, "Japan");
        r = searchRegions(info[2][0].constraint, "CR");
        test.equal(r.code, "CR");
        test.equal(r.name, "Costa Rica");
        r = searchRegions(info[2][0].constraint, "ZA");
        test.equal(r.code, "ZA");
        test.equal(r.name, "South Africa");

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
        test.expect(21);
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
        var r = searchRegions(info[2][0].constraint, "RU");
        test.equal(r.code, "RU");
        test.equal(r.name, "Russland");
        r = searchRegions(info[2][0].constraint, "CA");
        test.equal(r.code, "CA");
        test.equal(r.name, "Kanada");
        r = searchRegions(info[2][0].constraint, "ZA");
        test.equal(r.code, "ZA");
        test.equal(r.name, "Südafrika");
        test.done();
    },
    testAddressFmtGetFormatInfoCN: function(test) {
        test.expect(24);
        var formatter = new AddressFmt({locale: 'zh-Hans-CN'});

        var info = formatter.getFormatInfo();

        test.ok(info);
        test.equal(info.length, 4);
        test.equal(info[0].length, 1);
        test.equal(info[1].length, 1);
        test.equal(info[2].length, 2);
        test.equal(info[3].length, 1);

        test.equal(info[0][0].component, "country");
        test.equal(info[0][0].label, "国家/地区");
        test.ok(info[0][0].constraint);
        var r = searchRegions(info[0][0].constraint, "RU");
        test.equal(r.code, "RU");
        test.equal(r.name, "俄罗斯");
        r = searchRegions(info[0][0].constraint, "CA");
        test.equal(r.code, "CA");
        test.equal(r.name, "加拿大");
        r = searchRegions(info[0][0].constraint, "ZA");
        test.equal(r.code, "ZA");
        test.equal(r.name, "南非");
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
        test.expect(20);
        var formatter = new AddressFmt({locale: 'zh-Hans-SG'});

        var info = formatter.getFormatInfo();

        test.ok(info);
        test.equal(info.length, 2);
        test.equal(info[0].length, 1);
        test.equal(info[1].length, 3);

        test.equal(info[0][0].component, "country");
        test.equal(info[0][0].label, "国家/地区");
        test.ok(info[0][0].constraint);
        var r = searchRegions(info[0][0].constraint, "RU");
        test.equal(r.code, "RU");
        test.equal(r.name, "俄罗斯");
        r = searchRegions(info[0][0].constraint, "CA");
        test.equal(r.code, "CA");
        test.equal(r.name, "加拿大");
        r = searchRegions(info[0][0].constraint, "ZA");
        test.equal(r.code, "ZA");
        test.equal(r.name, "南非");
        test.equal(info[1][0].component, "postalCode");
        test.equal(info[1][0].label, "邮政编码");
        test.equal(info[1][0].constraint, "^[0-9]{6}");
        test.equal(info[1][1].component, "locality");
        test.equal(info[1][1].label, "镇");
        test.equal(info[1][2].component, "streetAddress");
        test.equal(info[1][2].label, "地址");
        test.done();
    },
    testAddressFmtGetFormatInfoENSG: function(test) {
        test.expect(21);
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

        var r = searchRegions(info[2][0].constraint, "RU");
        test.equal(r.code, "RU");
        test.equal(r.name, "Russia");
        r = searchRegions(info[2][0].constraint, "CA");
        test.equal(r.code, "CA");
        test.equal(r.name, "Canada");
        r = searchRegions(info[2][0].constraint, "ZA");
        test.equal(r.code, "ZA");
        test.equal(r.name, "South Africa");

        test.done();
    },
    testAddressFmtGetFormatInfoCARightComponents: function(test) {
        test.expect(23);
        var formatter = new AddressFmt({locale: 'en-CA'});

        var info = formatter.getFormatInfo();

        test.ok(info);
        test.equal(info.length, 3);
        test.equal(info[0].length, 1);
        test.equal(info[1].length, 3);
        test.equal(info[2].length, 1);

        test.equal(info[0][0].component, "streetAddress");
        test.equal(info[0][0].label, "Street address");
        test.equal(info[1][0].component, "locality");
        test.equal(info[1][0].label, "City");
        test.equal(info[1][1].component, "region");
        test.equal(info[1][1].label, "Province or territory");
        test.ok(info[1][1].constraint);
        var r = searchRegions(info[1][1].constraint, "NT");
        test.equal(r.code, "NT");
        test.equal(r.name, "Northwest Territories");
        r = searchRegions(info[1][1].constraint, "BC");
        test.equal(r.code, "BC");
        test.equal(r.name, "British Columbia");
        r = searchRegions(info[1][1].constraint, "QC");
        test.equal(r.code, "QC");
        test.equal(r.name, "Quebec");
        test.equal(info[1][2].component, "postalCode");
        test.equal(info[1][2].label, "Postal code");
        test.equal(info[1][2].constraint, "[A-Za-z][0-9][A-Za-z]\\s+[0-9][A-Za-z][0-9]");
        test.equal(info[2][0].component, "country");
        test.equal(info[2][0].label, "Country");
        test.done();
    },
    testAddressFmtGetFormatInfoCAInGerman: function(test) {
        test.expect(23);
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
        var r = searchRegions(info[1][1].constraint, "NT");
        test.equal(r.code, "NT");
        test.equal(r.name, "Nordwest-Territorien");
        r = searchRegions(info[1][1].constraint, "BC");
        test.equal(r.code, "BC");
        test.equal(r.name, "British Columbia");
        r = searchRegions(info[1][1].constraint, "QC");
        test.equal(r.code, "QC");
        test.equal(r.name, "Québec");
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
        test.equal(info[0][0].label, "Street address");
        test.equal(info[1][0].component, "locality");
        test.equal(info[1][0].label, "Town");
        test.equal(info[2][0].component, "postalCode");
        test.equal(info[2][0].label, "Post code");
        test.equal(info[2][0].constraint, "([A-Za-z]{1,2}[0-9]{1,2}[ABCDEFGHJKMNPRSTUVWXYabcdefghjkmnprstuvwxy]?\\s+[0-9][A-Za-z]{2}|GIR 0AA|SAN TA1)");
        test.equal(info[3][0].component, "country");
        test.equal(info[3][0].label, "Country");
        test.done();
    },
    testAddressFmtGetFormatInfoUSRightSortOrder: function(test) {
        test.expect(55);
        var formatter = new AddressFmt({locale: 'en-US'});

        var info = formatter.getFormatInfo();

        test.ok(info);
        var expectedOrder = [
            "Alabama",
            "Alaska",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "Florida",
            "Georgia",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana",
            "Nebraska",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginia",
            "Washington",
            "Washington DC",
            "West Virginia",
            "Wisconsin",
            "Wyoming"
        ];

        test.equal(info[1][1].component, "region");
        test.ok(info[1][1].constraint);
        test.equal(info[1][1].constraint.length, expectedOrder.length);

        for (var i = 0; i < expectedOrder.length; i++) {
            test.equal(info[1][1].constraint[i].name, expectedOrder[i]);
        }

        test.done();
    },
    testAddressFmtGetFormatInfoUSRightSortOrderInSpanish: function(test) {
        test.expect(55);
        var formatter = new AddressFmt({locale: 'en-US'});

        var info = formatter.getFormatInfo("es");

        test.ok(info);
        var expectedOrder = [
            "Alabama",
            "Alaska",
            "Arizona",
            "Arkansas",
            "California",
            "Carolina del Norte",
            "Carolina del Sur",
            "Colorado",
            "Connecticut",
            "Dakota del Norte",
            "Dakota del Sur",
            "Delaware",
            "Florida",
            "Georgia",
            "Hawái",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Luisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Míchigan",
            "Minnesota",
            "Misisipi",
            "Misuri",
            "Montana",
            "Nebraska",
            "Nevada",
            "Nueva Jersey",
            "Nueva York",
            "Nuevo Hampshire",
            "Nuevo México",
            "Ohio",
            "Oklahoma",
            "Oregón",
            "Pensilvania",
            "Rhode Island",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginia",
            "Virginia Occidental",
            "Washington",
            "Washington D. C.",
            "Wisconsin",
            "Wyoming"
        ];

        test.equal(info[1][1].component, "region");
        test.ok(info[1][1].constraint);
        test.equal(info[1][1].constraint.length, expectedOrder.length);

        for (var i = 0; i < expectedOrder.length; i++) {
            test.equal(info[1][1].constraint[i].name, expectedOrder[i]);
        }

        test.done();
    },
    testAddressFmtGetFormatInfoENCountriesRightSortOrder: function(test) {
        test.expect(263);
        var formatter = new AddressFmt({locale: 'en-US'});

        var info = formatter.getFormatInfo();

        test.ok(info);
        var expectedOrder = [
            "Afghanistan",
            "Åland Islands",
            "Albania",
            "Algeria",
            "American Samoa",
            "Andorra",
            "Angola",
            "Anguilla",
            "Antigua & Barbuda",
            "Argentina",
            "Armenia",
            "Aruba",
            "Ascension Island",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bermuda",
            "Bhutan",
            "Bolivia",
            "Bosnia & Herzegovina",
            "Botswana",
            "Bouvet Island",
            "Brazil",
            "British Indian Ocean Territory",
            "British Virgin Islands",
            "Brunei",
            "Bulgaria",
            "Burkina Faso",
            "Burundi",
            "Cambodia",
            "Cameroon",
            "Canada",
            "Canary Islands",
            "Cape Verde",
            "Caribbean Netherlands",
            "Cayman Islands",
            "Central African Republic",
            "Ceuta & Melilla",
            "Chad",
            "Chile",
            "China",
            "Christmas Island",
            "Clipperton Island",
            "Cocos (Keeling) Islands",
            "Colombia",
            "Comoros",
            "Congo - Brazzaville",
            "Congo - Kinshasa",
            "Cook Islands",
            "Costa Rica",
            "Côte d’Ivoire",
            "Croatia",
            "Cuba",
            "Curaçao",
            "Cyprus",
            "Czechia",
            "Denmark",
            "Diego Garcia",
            "Djibouti",
            "Dominica",
            "Dominican Republic",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "Equatorial Guinea",
            "Eritrea",
            "Estonia",
            "Eswatini",
            "Ethiopia",
            "Falkland Islands",
            "Faroe Islands",
            "Fiji",
            "Finland",
            "France",
            "French Guiana",
            "French Polynesia",
            "French Southern Territories",
            "Gabon",
            "Gambia",
            "Georgia",
            "Germany",
            "Ghana",
            "Gibraltar",
            "Greece",
            "Greenland",
            "Grenada",
            "Guadeloupe",
            "Guam",
            "Guatemala",
            "Guernsey",
            "Guinea",
            "Guinea-Bissau",
            "Guyana",
            "Haiti",
            "Heard & McDonald Islands",
            "Honduras",
            "Hong Kong SAR China",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran",
            "Iraq",
            "Ireland",
            "Isle of Man",
            "Israel",
            "Italy",
            "Jamaica",
            "Japan",
            "Jersey",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kiribati",
            "Kosovo",
            "Kuwait",
            "Kyrgyzstan",
            "Laos",
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macao SAR China",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Mali",
            "Malta",
            "Marshall Islands",
            "Martinique",
            "Mauritania",
            "Mauritius",
            "Mayotte",
            "Mexico",
            "Micronesia",
            "Moldova",
            "Monaco",
            "Mongolia",
            "Montenegro",
            "Montserrat",
            "Morocco",
            "Mozambique",
            "Myanmar (Burma)",
            "Namibia",
            "Nauru",
            "Nepal",
            "Netherlands",
            "New Caledonia",
            "New Zealand",
            "Nicaragua",
            "Niger",
            "Nigeria",
            "Niue",
            "Norfolk Island",
            "North Korea",
            "North Macedonia",
            "Northern Mariana Islands",
            "Norway",
            "Oman",
            "Outlying Oceania",
            "Pakistan",
            "Palau",
            "Palestinian Territories",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines",
            "Pitcairn Islands",
            "Poland",
            "Portugal",
            "Pseudo-Accents",
            "Pseudo-Bidi",
            "Puerto Rico",
            "Qatar",
            "Réunion",
            "Romania",
            "Russia",
            "Rwanda",
            "Samoa",
            "San Marino",
            "São Tomé & Príncipe",
            "Sark",
            "Saudi Arabia",
            "Senegal",
            "Serbia",
            "Seychelles",
            "Sierra Leone",
            "Singapore",
            "Sint Maarten",
            "Slovakia",
            "Slovenia",
            "Solomon Islands",
            "Somalia",
            "South Africa",
            "South Georgia & South Sandwich Islands",
            "South Korea",
            "South Sudan",
            "Spain",
            "Sri Lanka",
            "St. Barthélemy",
            "St. Helena",
            "St. Kitts & Nevis",
            "St. Lucia",
            "St. Martin",
            "St. Pierre & Miquelon",
            "St. Vincent & Grenadines",
            "Sudan",
            "Suriname",
            "Svalbard & Jan Mayen",
            "Sweden",
            "Switzerland",
            "Syria",
            "Taiwan",
            "Tajikistan",
            "Tanzania",
            "Thailand",
            "Timor-Leste",
            "Togo",
            "Tokelau",
            "Tonga",
            "Trinidad & Tobago",
            "Tristan da Cunha",
            "Tunisia",
            "Türkiye",
            "Turkmenistan",
            "Turks & Caicos Islands",
            "Tuvalu",
            "U.S. Outlying Islands",
            "U.S. Virgin Islands",
            "Uganda",
            "Ukraine",
            "United Arab Emirates",
            "United Kingdom",
            "United States",
            "Uruguay",
            "Uzbekistan",
            "Vanuatu",
            "Vatican City",
            "Venezuela",
            "Vietnam",
            "Wallis & Futuna",
            "Western Sahara",
            "Yemen",
            "Zambia",
            "Zimbabwe"
        ];

        test.equal(info[2][0].component, "country");
        test.ok(info[2][0].constraint);
        test.equal(info[2][0].constraint.length, expectedOrder.length);

        for (var i = 0; i < expectedOrder.length; i++) {
            test.equal(info[2][0].constraint[i].name, expectedOrder[i]);
        }

        test.done();
    },
    testAddressFmtGetFormatInfoESCountriesRightSortOrder: function(test) {
        test.expect(263);
        var formatter = new AddressFmt({locale: 'en-US'});

        var info = formatter.getFormatInfo("es");

        test.ok(info);
        var expectedOrder = [
            "Afganistán",
            "Albania",
            "Alemania",
            "Andorra",
            "Angola",
            "Anguila",
            "Antigua y Barbuda",
            "Arabia Saudita",
            "Argelia",
            "Argentina",
            "Armenia",
            "Aruba",
            "Australia",
            "Austria",
            "Azerbaiyán",
            "Bahamas",
            "Bangladés",
            "Barbados",
            "Baréin",
            "Bélgica",
            "Belice",
            "Benín",
            "Bermudas",
            "Bielorrusia",
            "Bolivia",
            "Bosnia y Herzegovina",
            "Botsuana",
            "Brasil",
            "Brunéi",
            "Bulgaria",
            "Burkina Faso",
            "Burundi",
            "Bután",
            "Cabo Verde",
            "Camboya",
            "Camerún",
            "Canadá",
            "Caribe neerlandés",
            "Catar",
            "Ceuta y Melilla",
            "Chad",
            "Chequia",
            "Chile",
            "China",
            "Chipre",
            "Ciudad del Vaticano",
            "Colombia",
            "Comoras",
            "Corea del Norte",
            "Corea del Sur",
            "Costa de Marfil",
            "Costa Rica",
            "Croacia",
            "Cuba",
            "Curazao",
            "Diego García",
            "Dinamarca",
            "Dominica",
            "Ecuador",
            "Egipto",
            "El Salvador",
            "Emiratos Árabes Unidos",
            "Eritrea",
            "Eslovaquia",
            "Eslovenia",
            "España",
            "Estados Unidos",
            "Estonia",
            "Esuatini",
            "Etiopía",
            "Filipinas",
            "Finlandia",
            "Fiyi",
            "Francia",
            "Gabón",
            "Gambia",
            "Georgia",
            "Ghana",
            "Gibraltar",
            "Granada",
            "Grecia",
            "Groenlandia",
            "Guadalupe",
            "Guam",
            "Guatemala",
            "Guayana Francesa",
            "Guernsey",
            "Guinea",
            "Guinea Ecuatorial",
            "Guinea-Bisáu",
            "Guyana",
            "Haití",
            "Honduras",
            "Hungría",
            "India",
            "Indonesia",
            "Irak",
            "Irán",
            "Irlanda",
            "Isla Bouvet",
            "Isla Clipperton",
            "Isla de la Ascensión",
            "Isla de Man",
            "Isla de Navidad",
            "Isla Norfolk",
            "Islandia",
            "Islas Åland",
            "Islas Caimán",
            "Islas Canarias",
            "Islas Cocos",
            "Islas Cook",
            "Islas Feroe",
            "Islas Georgia del Sur y Sándwich del Sur",
            "Islas Heard y McDonald",
            "Islas Malvinas",
            "Islas Marianas del Norte",
            "Islas Marshall",
            "Islas menores alejadas de EE. UU.",
            "Islas Pitcairn",
            "Islas Salomón",
            "Islas Turcas y Caicos",
            "Islas Vírgenes Británicas",
            "Islas Vírgenes de EE. UU.",
            "Israel",
            "Italia",
            "Jamaica",
            "Japón",
            "Jersey",
            "Jordania",
            "Kazajistán",
            "Kenia",
            "Kirguistán",
            "Kiribati",
            "Kosovo",
            "Kuwait",
            "Laos",
            "Lesoto",
            "Letonia",
            "Líbano",
            "Liberia",
            "Libia",
            "Liechtenstein",
            "Lituania",
            "Luxemburgo",
            "Macedonia del Norte",
            "Madagascar",
            "Malasia",
            "Malaui",
            "Maldivas",
            "Mali",
            "Malta",
            "Marruecos",
            "Martinica",
            "Mauricio",
            "Mauritania",
            "Mayotte",
            "México",
            "Micronesia",
            "Moldavia",
            "Mónaco",
            "Mongolia",
            "Montenegro",
            "Montserrat",
            "Mozambique",
            "Myanmar (Birmania)",
            "Namibia",
            "Nauru",
            "Nepal",
            "Nicaragua",
            "Níger",
            "Nigeria",
            "Niue",
            "Noruega",
            "Nueva Caledonia",
            "Nueva Zelanda",
            "Omán",
            "Países Bajos",
            "Pakistán",
            "Palaos",
            "Panamá",
            "Papúa Nueva Guinea",
            "Paraguay",
            "Perú",
            "Polinesia Francesa",
            "Polonia",
            "Portugal",
            "Pseudoacentos",
            "Pseudobidi",
            "Puerto Rico",
            "RAE de Hong Kong (China)",
            "RAE de Macao (China)",
            "Reino Unido",
            "República Centroafricana",
            "República del Congo",
            "República Democrática del Congo",
            "República Dominicana",
            "Reunión",
            "Ruanda",
            "Rumania",
            "Rusia",
            "Sahara Occidental",
            "Samoa",
            "Samoa Americana",
            "San Bartolomé",
            "San Cristóbal y Nieves",
            "San Marino",
            "San Martín",
            "San Pedro y Miquelón",
            "San Vicente y las Granadinas",
            "Santa Elena",
            "Santa Lucía",
            "Santo Tomé y Príncipe",
            "Sark",
            "Senegal",
            "Serbia",
            "Seychelles",
            "Sierra Leona",
            "Singapur",
            "Sint Maarten",
            "Siria",
            "Somalia",
            "Sri Lanka",
            "Sudáfrica",
            "Sudán",
            "Sudán del Sur",
            "Suecia",
            "Suiza",
            "Surinam",
            "Svalbard y Jan Mayen",
            "Tailandia",
            "Taiwán",
            "Tanzania",
            "Tayikistán",
            "Territorio Británico del Océano Índico",
            "Territorios alejados de Oceanía",
            "Territorios Australes Franceses",
            "Territorios Palestinos",
            "Timor Oriental",
            "Togo",
            "Tokelau",
            "Tonga",
            "Trinidad y Tobago",
            "Tristán de Acuña",
            "Túnez",
            "Turkmenistán",
            "Turquía",
            "Tuvalu",
            "Ucrania",
            "Uganda",
            "Uruguay",
            "Uzbekistán",
            "Vanuatu",
            "Venezuela",
            "Vietnam",
            "Wallis y Futuna",
            "Yemen",
            "Yibuti",
            "Zambia",
            "Zimbabue"
        ];

        test.equal(info[2][0].component, "country");
        test.ok(info[2][0].constraint);
        test.equal(info[2][0].constraint.length, expectedOrder.length);

        for (var i = 0; i < expectedOrder.length; i++) {
            test.equal(info[2][0].constraint[i].name, expectedOrder[i]);
        }

        test.done();
    },
    testAddressFmtGetFormatInfoGBWithTranslationsToRussian: function(test) {
        test.expect(15);
        var formatter = new AddressFmt({locale: 'en-GB'});

        var info = formatter.getFormatInfo("ru");

        test.ok(info);
        test.equal(info.length, 4);
        test.equal(info[0].length, 1);
        test.equal(info[1].length, 1);
        test.equal(info[2].length, 1);
        test.equal(info[2].length, 1);

        test.equal(info[0][0].component, "streetAddress");
        test.equal(info[0][0].label, "Адрес");
        test.equal(info[1][0].component, "locality");
        test.equal(info[1][0].label, "Город");
        test.equal(info[2][0].component, "postalCode");
        test.equal(info[2][0].label, "Почтовый индекс");
        test.equal(info[2][0].constraint, "([A-Za-z]{1,2}[0-9]{1,2}[ABCDEFGHJKMNPRSTUVWXYabcdefghjkmnprstuvwxy]?\\s+[0-9][A-Za-z]{2}|GIR 0AA|SAN TA1)");
        test.equal(info[3][0].component, "country");
        test.equal(info[3][0].label, "Страна");
        test.done();
    },
    testAddressFmtGetFormatInfoGBWithTranslationsToKorean: function(test) {
        test.expect(15);
        var formatter = new AddressFmt({locale: 'en-GB'});

        var info = formatter.getFormatInfo("ko");

        test.ok(info);
        test.equal(info.length, 4);
        test.equal(info[0].length, 1);
        test.equal(info[1].length, 1);
        test.equal(info[2].length, 1);
        test.equal(info[2].length, 1);

        test.equal(info[0][0].component, "streetAddress");
        test.equal(info[0][0].label, "번지");
        test.equal(info[1][0].component, "locality");
        test.equal(info[1][0].label, "읍");
        test.equal(info[2][0].component, "postalCode");
        test.equal(info[2][0].label, "우편 번호");
        test.equal(info[2][0].constraint, "([A-Za-z]{1,2}[0-9]{1,2}[ABCDEFGHJKMNPRSTUVWXYabcdefghjkmnprstuvwxy]?\\s+[0-9][A-Za-z]{2}|GIR 0AA|SAN TA1)");
        test.equal(info[3][0].component, "country");
        test.equal(info[3][0].label, "국가");
        test.done();
    },
    testAddressFmtGetFormatInfoUnknownCountry: function(test) {
        test.expect(10);
        var formatter = new AddressFmt({locale: 'en-XY'});

        var info = formatter.getFormatInfo();

        test.ok(info);

        // test for generic root data
        test.equal(info[1][0].component, "locality");
        test.equal(info[1][0].label, "City");
        test.equal(info[1][0].constraint, "([A-zÀÁÈÉÌÍÑÒÓÙÚÜàáèéìíñòóùúü\\.\\-\\']+\\s*){1,2}$");

        test.equal(info[1][1].component, "region");
        test.equal(info[1][1].label, "Province");
        test.equal(info[1][1].constraint, "([A-zÀÁÈÉÌÍÑÒÓÙÚÜàáèéìíñòóùúü\\.\\-\\']+\\s*){1,2}$");

        test.equal(info[1][2].component, "postalCode");
        test.equal(info[1][2].label, "Postal Code");
        test.equal(info[1][2].constraint, "[0-9]+");

        test.done();
    },
    testAddressFmtGetFormatInfoRightRegionNameJA: function(test) {
        test.expect(2);
        var formatter = new AddressFmt({locale: 'ja-JP'});

        var info = formatter.getFormatInfo();

        test.ok(info);

        for (var i = 0; i < info.length; i++) {
            for (var j = 0; j < info[i].length; j++) {
                if (info[i][j].component === "region") {
                    test.equal(info[i][j], "Prefecture");
                }
            }
        }

        test.done();
    },
    testAddressFmtGetFormatInfoRightRegionNameJA: function(test) {
        test.expect(2);
        var formatter = new AddressFmt({locale: 'ja-JP'});

        var info = formatter.getFormatInfo();

        test.ok(info);

        for (var i = 0; i < info.length; i++) {
            for (var j = 0; j < info[i].length; j++) {
                if (info[i][j].component === "region") {
                    test.equal(info[i][j], "Prefecture");
                }
            }
        }

        test.done();
    },
    testAddressFmtGetFormatInfoRightRegionNameJA: function(test) {
        test.expect(2);
        var formatter = new AddressFmt({locale: 'ja-JP'});

        var info = formatter.getFormatInfo("en");

        test.ok(info);

        for (var i = 0; i < info.length; i++) {
            for (var j = 0; j < info[i].length; j++) {
                if (info[i][j].component === "region") {
                    test.equal(info[i][j].label, "Prefecture");
                }
            }
        }

        test.done();
    },
    testAddressFmtGetFormatInfoRightRegionNameJATranslated: function(test) {
        test.expect(2);
        var formatter = new AddressFmt({locale: 'ja-JP'});

        var info = formatter.getFormatInfo();

        test.ok(info);

        for (var i = 0; i < info.length; i++) {
            for (var j = 0; j < info[i].length; j++) {
                if (info[i][j].component === "region") {
                    test.equal(info[i][j].label, "都道府県");
                }
            }
        }

        test.done();
    },
    testAddressFmtGetFormatInfoRightRegionNameRU: function(test) {
        test.expect(2);
        var formatter = new AddressFmt({locale: 'ru-RU'});

        var info = formatter.getFormatInfo("en");

        test.ok(info);

        for (var i = 0; i < info.length; i++) {
            for (var j = 0; j < info[i].length; j++) {
                if (info[i][j].component === "region") {
                    test.equal(info[i][j].label, "Oblast");
                }
            }
        }

        test.done();
    },
    testAddressFmtGetFormatInfoRightRegionNameRUTranslated: function(test) {
        test.expect(2);
        var formatter = new AddressFmt({locale: 'ru-RU'});

        var info = formatter.getFormatInfo();

        test.ok(info);

        for (var i = 0; i < info.length; i++) {
            for (var j = 0; j < info[i].length; j++) {
                if (info[i][j].component === "region") {
                    test.equal(info[i][j].label, "Область");
                }
            }
        }

        test.done();
    }
};