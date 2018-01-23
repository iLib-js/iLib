
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

module.exports.testaddress_DZ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressDZFRNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Said Mohamed, 2, rue de l'Indépendance, 16027 ALGIERS, Algérie", {locale: 'fr-DZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Said Mohamed, 2, rue de l'Indépendance");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ALGIERS");
        test.equal(parsedAddress.postalCode, "16027");
        test.equal(parsedAddress.country, "Algérie");
        test.equal(parsedAddress.countryCode, "DZ");
        test.done();
    },
    
    testParseAddressDZFRNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Said Mohamed,2, rue de l'Indépendance, ALGIERS, Algérie", {locale: 'fr-DZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Said Mohamed, 2, rue de l'Indépendance");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ALGIERS");
        test.equal(parsedAddress.country, "Algérie");
        test.equal(parsedAddress.countryCode, "DZ");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressDZFRManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Said Mohamed\n2, rue de l'Indépendance\n16027 ALGIERS\n Algérie", {locale: 'fr-DZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Said Mohamed, 2, rue de l'Indépendance");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ALGIERS");
        test.equal(parsedAddress.postalCode, "16027");
        test.equal(parsedAddress.country, "Algérie");
        test.equal(parsedAddress.countryCode, "DZ");
        test.done();
    },
    
    testParseAddressDZFROneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Said Mohamed,2, rue de l'Indépendance,16027 ALGIERS, Algérie", {locale: 'fr-DZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Said Mohamed, 2, rue de l'Indépendance");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ALGIERS");
        test.equal(parsedAddress.postalCode, "16027");
        test.equal(parsedAddress.country, "Algérie");
        test.equal(parsedAddress.countryCode, "DZ");
        test.done();
    },
    
    testParseAddressDZFRSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Said Mohamed,2, rue de l'Indépendance   \n\t\n 16027 ALGIERS\t\n\n  Algérie  \n  \t\t\t", {locale: 'fr-DZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Said Mohamed, 2, rue de l'Indépendance");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ALGIERS");
        test.equal(parsedAddress.postalCode, "16027");
        test.equal(parsedAddress.country, "Algérie");
        test.equal(parsedAddress.countryCode, "DZ");
        test.done();
    },
    
    testParseAddressDZFRNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Said Mohamed 2  rue de l'Indépendance 16027 ALGIERS  Algérie", {locale: 'fr-DZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Said Mohamed 2 rue de l'Indépendance");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ALGIERS");
        test.equal(parsedAddress.postalCode, "16027");
        test.equal(parsedAddress.country, "Algérie");
        test.equal(parsedAddress.countryCode, "DZ");
        test.done();
    },
    
    testParseAddressDZFRSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Said Mohamed,2, rue de l'Indépendance,16027 ALGIERS, Algérie", {locale: 'fr-DZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Said Mohamed, 2, rue de l'Indépendance");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ALGIERS");
        test.equal(parsedAddress.postalCode, "16027");
        test.equal(parsedAddress.country, "Algérie");
        test.equal(parsedAddress.countryCode, "DZ");
        test.done();
    },
    
    testParseAddressDZFRFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Said Mohamed,2, rue de l'Indépendance,16027 ALGIERS, Algeria", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Said Mohamed, 2, rue de l'Indépendance");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ALGIERS");
        test.equal(parsedAddress.postalCode, "16027");
        test.equal(parsedAddress.country, "Algeria");
        test.equal(parsedAddress.countryCode, "DZ");
        test.done();
    },
    
    testFormatAddressDZFR: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "M. Said Mohamed,2, rue de l'Indépendance",
            locality: "ALGIERS",
            postalCode: "16027",
            country: "Algérie",
            countryCode: "DZ"
        }, {locale: 'fr-DZ'});
        
        var expected = "M. Said Mohamed,2, rue de l'Indépendance\n16027 ALGIERS\nAlgérie";
        var formatter = new AddressFmt({locale: 'fr-DZ'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressDZFRFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "M. Said Mohamed,2, rue de l'Indépendance",
            postalCode: "10110",
            locality: "ALGIERS",
            country: "Algeria",
            countryCode: "DZ"
        }, {locale: 'en-US'});
        
        var expected = "M. Said Mohamed,2, rue de l'Indépendance\n10110 ALGIERS\nAlgeria";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    
    testParseAddressDZARNormal: function(test) {
        test.expect(8);
        var parsedAddress = new Address("محمد سعيد, ٢ شارع الاستقلال, ١٦٠٢٦ الجزائر, الجزائر", {locale: 'ar-DZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.country, "الجزائر");
        test.equal(parsedAddress.streetAddress, "محمد سعيد, ٢ شارع الاستقلال");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "الجزائر");
        test.equal(parsedAddress.postalCode, "١٦٠٢٦");
        test.equal(parsedAddress.country, "الجزائر");
        test.equal(parsedAddress.countryCode, "DZ");
        test.done();
    },
    
    testParseAddressDZARNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("محمد سعيد, ٢ شارع الاستقلال, الجزائر, الجزائر", {locale: 'ar-DZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "محمد سعيد, ٢ شارع الاستقلال");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "الجزائر");
        test.equal(parsedAddress.country, "الجزائر");
        test.equal(parsedAddress.countryCode, "DZ");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressDZARManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("محمد سعيد\n٢ شارع الاستقلال\n١٦٠٢٦ الجزائر\n الجزائر", {locale: 'ar-DZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "محمد سعيد, ٢ شارع الاستقلال");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "الجزائر");
        test.equal(parsedAddress.postalCode, "١٦٠٢٦");
        test.equal(parsedAddress.country, "الجزائر");
        test.equal(parsedAddress.countryCode, "DZ");
        test.done();
    },
    
    testParseAddressDZAROneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("محمد سعيد, ٢ شارع الاستقلال,١٦٠٢٦ الجزائر, الجزائر", {locale: 'ar-DZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "محمد سعيد, ٢ شارع الاستقلال");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "الجزائر");
        test.equal(parsedAddress.postalCode, "١٦٠٢٦");
        test.equal(parsedAddress.country, "الجزائر");
        test.equal(parsedAddress.countryCode, "DZ");
        test.done();
    },
    
    testParseAddressDZARSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("محمد سعيد, ٢ شارع الاستقلال   \n\t\n ١٦٠٢٦ الجزائر\t\n\n  الجزائر  \n  \t\t\t", {locale: 'ar-DZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "محمد سعيد, ٢ شارع الاستقلال");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "الجزائر");
        test.equal(parsedAddress.postalCode, "١٦٠٢٦");
        test.equal(parsedAddress.country, "الجزائر");
        test.equal(parsedAddress.countryCode, "DZ");
        test.done();
    },
    
    testParseAddressDZARNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("محمد سعيد  ٢ شارع الاستقلال ١٦٠٢٦ الجزائر  الجزائر", {locale: 'ar-DZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "محمد سعيد ٢ شارع الاستقلال");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "الجزائر");
        test.equal(parsedAddress.postalCode, "١٦٠٢٦");
        test.equal(parsedAddress.country, "الجزائر");
        test.equal(parsedAddress.countryCode, "DZ");
        test.done();
    },
    
    testParseAddressDZARSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("محمد سعيد, ٢ شارع الاستقلال,١٦٠٢٦ الجزائر, الجزائر", {locale: 'ar-DZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "محمد سعيد, ٢ شارع الاستقلال");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "الجزائر");
        test.equal(parsedAddress.postalCode, "١٦٠٢٦");
        test.equal(parsedAddress.country, "الجزائر");
        test.equal(parsedAddress.countryCode, "DZ");
        test.done();
    },
    
    testParseAddressDZARFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("محمد سعيد, ٢ شارع الاستقلال,١٦٠٢٦ الجزائر, Algeria", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "محمد سعيد, ٢ شارع الاستقلال");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "الجزائر");
        test.equal(parsedAddress.postalCode, "١٦٠٢٦");
        test.equal(parsedAddress.country, "Algeria");
        test.equal(parsedAddress.countryCode, "DZ");
        test.done();
    },
    
    testFormatARAddress: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "محمد سعيد, ٢ شارع الاستقلال",
            locality: "الجزائر",
            postalCode: "١٦٠٢٦",
            country: " الجزائر",
            countryCode: "DZ"
        }, {locale: 'ar-DZ'});
        
        var expected = "محمد سعيد, ٢ شارع الاستقلال\n١٦٠٢٦ الجزائر\nالجزائر";
        var formatter = new AddressFmt({locale: 'ar-DZ'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressDZARFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "محمد سعيد, ٢ شارع الاستقلال",
            postalCode: "١٦٠٢٦",
            locality: "الجزائر",
            country: "Algeria",
            countryCode: "DZ"
        }, {locale: 'en-US'});
        
        var expected = "محمد سعيد, ٢ شارع الاستقلال\n١٦٠٢٦ الجزائر\nAlgeria";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};