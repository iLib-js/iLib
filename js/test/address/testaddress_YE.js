/*
 * testaddress_YE.js - test the address parsing and formatting routines
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
    var Address = require("../../lib/Address.js");
}
if (typeof(AddressFmt) === "undefined") {
    var AddressFmt = require("../../lib/AddressFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testaddress_YE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressYENormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣\nﻉﺪﻧ\nاليمن", {locale: 'ar-YE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣");
        test.equal(parsedAddress.locality, "ﻉﺪﻧ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "اليمن");
        test.equal(parsedAddress.countryCode, "YE");
        test.done();
    },
    
    testParseAddressYENoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣\nﻉﺪﻧ\nاليمن", {locale: 'ar-YE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣");
        test.equal(parsedAddress.locality, "ﻉﺪﻧ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "اليمن");
        test.equal(parsedAddress.countryCode, "YE");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressYENoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣\n\nﻉﺪﻧ", {locale: 'ar-YE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣");
        test.equal(parsedAddress.locality, "ﻉﺪﻧ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "YE");
        test.done();
    },
    
    testParseAddressYEManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣\nﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ\n\nﻉﺪﻧ\n\nاليمن\n\n\n", {locale: 'ar-YE'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣, ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ");
        test.equal(parsedAddress.locality, "ﻉﺪﻧ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "اليمن");
        test.equal(parsedAddress.countryCode, "YE");
        test.done();
    },
    
    testParseAddressYEOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣ , ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣ , ﻉﺪﻧ , اليمن", {locale: 'ar-YE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣, ﻡﺮﺒﻋ ﺮﻘﻣ٣٢٦٣");
        test.equal(parsedAddress.locality, "ﻉﺪﻧ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "اليمن");
        test.equal(parsedAddress.countryCode, "YE");
        test.done();
    },
    
    testParseAddressYESuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tپﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣\n\n\tﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ\n\n\t\n\n\tﻉﺪﻧ\n\n\tاليمن\n\n\n", {locale: 'ar-YE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣, ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ");
        test.equal(parsedAddress.locality, "ﻉﺪﻧ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "اليمن");
        test.equal(parsedAddress.countryCode, "YE");
        test.done();
    },
    
    
    
    testParseAddressYEFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣\n\nﻉﺪﻧ\nYemen", {locale: 'en-US'});
        
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣");
        test.equal(parsedAddress.locality, "ﻉﺪﻧ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Yemen");
        test.equal(parsedAddress.countryCode, "YE");
        test.done();
    },
    
    testFormatAddressYE: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣",
            locality: "ﻉﺪﻧ",
            country: "اليمن",
            countryCode: "YE"
        }, {locale: 'ar-YE'});
        
        var expected = "ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣\nﻉﺪﻧ\nاليمن";
        var formatter = new AddressFmt({locale: 'ar-YE'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressYEFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣",
            locality: "ﻉﺪﻧ",
            country: "Yemen",
            countryCode: "YE"
        }, {locale: 'en-US'});
        
        var expected = "ﺂﻗﺍی ﻢﺤﻣﺩ ﻑﻭﺍﺩ ﺂﻟ ﻑیﺽ پﺲﺗ ﻩﺍﻭ پﺱ ﺎﻧﺩﺍﺯ پﺲﺗی ﺍﺮﺳﺎﻟ ﺞﻌﺒﻫ. ١٩٩٣\nﻉﺪﻧ\nYemen";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
