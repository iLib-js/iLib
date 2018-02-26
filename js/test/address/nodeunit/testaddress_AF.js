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

module.exports.testaddress_AF = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAFAddressNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("آقای احمد توحید, خیابان، خانه شماره ۰۴۲, کابل, ۱۰۰۱, افغانستان", {locale: 'fa-AF'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "آقای احمد توحید, خیابان، خانه شماره ۰۴۲");
        test.ok(typeof(parsedAddress.locality) === "undefined");
        test.equal(parsedAddress.region, "کابل");
        test.equal(parsedAddress.postalCode, "۱۰۰۱");
        test.equal(parsedAddress.country, "افغانستان");
        test.equal(parsedAddress.countryCode, "AF");
        test.done();
    },
    
    testParseAFAddressNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("آقای احمد توحید,خیابان، خانه شماره ۰۴۲, کابل, افغانستان", {locale: 'fa-AF'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "آقای احمد توحید, خیابان، خانه شماره ۰۴۲");
        test.ok(typeof(parsedAddress.locality) === "undefined");
        test.equal(parsedAddress.region, "کابل");
        test.equal(parsedAddress.country, "افغانستان");
        test.equal(parsedAddress.countryCode, "AF");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAFAddressManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("آقای احمد توحید\nخیابان، خانه شماره ۰۴۲\nکابل ۱۰۰۱\nافغانستان", {locale: 'fa-AF'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "آقای احمد توحید, خیابان، خانه شماره ۰۴۲");
        test.ok(typeof(parsedAddress.locality) === "undefined");
        test.equal(parsedAddress.region, "کابل");
        test.equal(parsedAddress.postalCode, "۱۰۰۱");
        test.equal(parsedAddress.country, "افغانستان");
        test.equal(parsedAddress.countryCode, "AF");
        test.done();
    },
    
    testParseAFAddressOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("آقای احمد توحید,خیابان، خانه شماره ۰۴۲,کابل ۱۰۰۱ افغانستان", {locale: 'fa-AF'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "آقای احمد توحید, خیابان، خانه شماره ۰۴۲");
        test.ok(typeof(parsedAddress.locality) === "undefined");
        test.equal(parsedAddress.region, "کابل");
        test.equal(parsedAddress.postalCode, "۱۰۰۱");
        test.equal(parsedAddress.country, "افغانستان");
        test.equal(parsedAddress.countryCode, "AF");
        test.done();
    },
    
    testParseAFAddressSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("آقای احمد توحید,خیابان، خانه شماره ۰۴۲   \n\t\n کابل ۱۰۰۱\t\n\n افغانستان  \n  \t\t\t", {locale: 'fa-AF'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "آقای احمد توحید, خیابان، خانه شماره ۰۴۲");
        test.ok(typeof(parsedAddress.locality) === "undefined");
        test.equal(parsedAddress.region, "کابل");
        test.equal(parsedAddress.postalCode, "۱۰۰۱");
        test.equal(parsedAddress.country, "افغانستان");
        test.equal(parsedAddress.countryCode, "AF");
        test.done();
    },
    
    testParseAFAddressNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("آقای احمد توحید خیابان، خانه شماره ۰۴۲ کابل ۱۰۰۱ افغانستان", {locale: 'fa-AF'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "آقای احمد توحید خیابان، خانه شماره ۰۴۲");
        test.ok(typeof(parsedAddress.locality) === "undefined");
        test.equal(parsedAddress.region, "کابل");
        test.equal(parsedAddress.postalCode, "۱۰۰۱");
        test.equal(parsedAddress.country, "افغانستان");
        test.equal(parsedAddress.countryCode, "AF");
        test.done();
    },
    
    
    
    testParseAFAddressFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("آقای احمد توحید,خیابان، خانه شماره ۰۴۲,کابل ۱۰۰۱,Afghanistan", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "آقای احمد توحید, خیابان، خانه شماره ۰۴۲");
        test.ok(typeof(parsedAddress.locality) === "undefined");
        test.equal(parsedAddress.region, "کابل");
        test.equal(parsedAddress.postalCode, "۱۰۰۱");
        test.equal(parsedAddress.country, "Afghanistan");
        test.equal(parsedAddress.countryCode, "AF");
        test.done();
    },
    
    testFormatAddressAF: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "آقای احمد توحید,خیابان، خانه شماره ۰۴۲",
            region: "کابل",
            postalCode: "۱۰۰۱",
            country: "افغانستان",
            countryCode: "AF"
        }, {locale: 'fa-AF'});
        
        var expected = "آقای احمد توحید,خیابان، خانه شماره ۰۴۲\nکابل\n۱۰۰۱\nافغانستان";
        var formatter = new AddressFmt({locale: 'fa-AF'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressAFFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "آقای احمد توحید,خیابان، خانه شماره ۰۴۲",
            postalCode: "۱۰۰۱",
            country: "Afghanistan",
            countryCode: "AF"
        }, {locale: 'en-US'});
        
        var expected = "آقای احمد توحید,خیابان، خانه شماره ۰۴۲\n۱۰۰۱\nAfghanistan";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
