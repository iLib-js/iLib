/*
 * testaddress_EG.js - test the address parsing and formatting routines
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

module.exports.testaddress_EG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressEGNormal: function(test) {
        test.expect(8);
        var parsedAddress = new Address("السيد محمد احمد محمود ٣٠, شارع احمد عرابى\nآل المهندسين\nالجيزة\n١٢٤١١\nمصر", {locale: 'ar-EG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.country, "مصر");
        test.equal(parsedAddress.streetAddress, "السيد محمد احمد محمود ٣٠, شارع احمد عرابى");
        test.equal(parsedAddress.locality, "آل المهندسين");
        test.equal(parsedAddress.region, "الجيزة");
        test.equal(parsedAddress.postalCode, "١٢٤١١");
        test.equal(parsedAddress.country, "مصر");
        test.equal(parsedAddress.countryCode, "EG");
        test.done();
    },
    
    
    
    testParseAddressEGNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد محمد احمد محمود ٣٠, شارع احمد عرابى\nآل المهندسين\nالجيزة\nمصر", {locale: 'ar-EG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد محمد احمد محمود ٣٠, شارع احمد عرابى");
        test.equal(parsedAddress.locality, "آل المهندسين");
        test.equal(parsedAddress.region, "الجيزة");
        test.equal(parsedAddress.country, "مصر");
        test.equal(parsedAddress.countryCode, "EG");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    
    testParseAddressEGNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد محمد احمد محمود ٣٠, شارع احمد عرابى\nآل المهندسين\nالجيزة\n ١٢٤١١", {locale: 'ar-EG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد محمد احمد محمود ٣٠, شارع احمد عرابى");
        test.equal(parsedAddress.locality, "آل المهندسين");
        test.equal(parsedAddress.region, "الجيزة");
        test.equal(parsedAddress.countryCode, "EG");
        test.equal(parsedAddress.postalCode, "١٢٤١١");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.done();
        
    },
    
    
    testParseAddressEGManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد محمد احمد محمود ٣٠\nشارع احمد عرابى\nآل المهندسين\nالجيزة\n١٢٤١١\nمصر\n\n", {locale: 'ar-EG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد محمد احمد محمود ٣٠, شارع احمد عرابى");
        test.equal(parsedAddress.locality, "آل المهندسين");
        test.equal(parsedAddress.region, "الجيزة");
        test.equal(parsedAddress.countryCode, "EG");
        test.equal(parsedAddress.postalCode, "١٢٤١١");
        test.equal(parsedAddress.country, "مصر");
        test.done();
    },
    
    testParseAddressEGOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد محمد احمد محمود ٣٠ , شارع احمد عرابى , آل المهندسين , الجيزة , ١٢٤١١ , مصر", {locale: 'ar-EG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد محمد احمد محمود ٣٠, شارع احمد عرابى");
        test.equal(parsedAddress.locality, "آل المهندسين");
        test.equal(parsedAddress.region, "الجيزة");
        test.equal(parsedAddress.countryCode, "EG");
        test.equal(parsedAddress.postalCode, "١٢٤١١");
        test.equal(parsedAddress.country, "مصر");
        test.done();
    },
    
    //needs a more precise regular expression to handle spaces within localities
    /*
    testParseAddressEGNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد محمد احمد محمود ٣٠, شارع احمد عرابى آل المهندسين\n الجيزة\n ١٢٤١١ مصر", {locale: 'ar-EG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد محمد احمد محمود ٣٠, شارع احمد عرابى");
        test.equal(parsedAddress.locality, "آل المهندسين");
        test.equal(parsedAddress.region, "الجيزة");
        test.equal(parsedAddress.countryCode, "EG");
        test.equal(parsedAddress.postalCode, "١٢٤١١");
        test.equal(parsedAddress.country, "مصر");
        test.done();
    },
    */
    
    testParseAddressEGFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد محمد احمد محمود ٣٠, شارع احمد عرابى\nآل المهندسين\n الجيزة\n ١٢٤١١\nEgypt", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد محمد احمد محمود ٣٠, شارع احمد عرابى");
        test.equal(parsedAddress.locality, "آل المهندسين");
        test.equal(parsedAddress.region, "الجيزة");
        test.equal(parsedAddress.countryCode, "EG");
        test.equal(parsedAddress.postalCode, "١٢٤١١");
        test.equal(parsedAddress.country, "Egypt");
        test.done();
    },
    
    
    testFormatAddressEGEG: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "السيد محمد احمد محمود ٣٠, شارع احمد عرابى",
            locality: "آل المهندسين",
            region: "الجيزة",
            postalCode: "١٢٤١١",
            country: "مصر",
            countryCode: "EG"
        }, {locale: 'ar-EG'});
        
        var expected = "السيد محمد احمد محمود ٣٠, شارع احمد عرابى\nآل المهندسين\nالجيزة\n١٢٤١١\nمصر";
        var formatter = new AddressFmt({locale: 'ar-EG'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    
    testFormatAddressEGFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "السيد محمد احمد محمود ٣٠, شارع احمد عرابى",
            locality: "آل المهندسين",
            region: "الجيزة",
            postalCode: "١٢٤١١",
            country: "Egypt",
            countryCode: "EG"
        }, {locale: 'en-US'});
        
        var expected = "السيد محمد احمد محمود ٣٠, شارع احمد عرابى\nآل المهندسين\nالجيزة\n١٢٤١١\nEgypt";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};