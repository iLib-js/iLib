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

module.exports.testaddress_DO = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressDONormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Dominica L. Hernandez, C/45 # 33, Katanga, Los Minas, 11903 SANTO DOMINGO, República Dominicana", {locale: 'es-DO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Dominica L. Hernandez, C/45 # 33, Katanga");
        test.equal(parsedAddress.region, "SANTO DOMINGO");
        test.equal(parsedAddress.locality, "Los Minas");
        test.equal(parsedAddress.postalCode, "11903");
        test.equal(parsedAddress.country, "República Dominicana");
        test.equal(parsedAddress.countryCode, "DO");
        test.done();
    },
    
    testParseAddressDONoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Dominica L. Hernandez, C/45 # 33, Katanga, Los Minas, 11903 SANTO DOMINGO, República Dominicana", {locale: 'es-DO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Dominica L. Hernandez, C/45 # 33, Katanga");
        test.equal(parsedAddress.region, "SANTO DOMINGO");
        test.equal(parsedAddress.locality, "Los Minas");
        test.equal(parsedAddress.country, "República Dominicana");
        test.equal(parsedAddress.countryCode, "DO");
        test.equal(parsedAddress.postalCode, "11903");
        test.done();
    },
    
    testParseAddressDOManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Dominica L. Hernandez\nC/45 # 33\nKatanga, Los Minas\n11903 SANTO DOMINGO\nRepública Dominicana", {locale: 'es-DO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Dominica L. Hernandez, C/45 # 33, Katanga");
        test.equal(parsedAddress.region, "SANTO DOMINGO");
        test.equal(parsedAddress.locality, "Los Minas");
        test.equal(parsedAddress.postalCode, "11903");
        test.equal(parsedAddress.country, "República Dominicana");
        test.equal(parsedAddress.countryCode, "DO");
        test.done();
    },
    
    testParseAddressDOOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Dominica L. Hernandez, C/45 # 33, Katanga, Los Minas, 11903 SANTO DOMINGO, República Dominicana", {locale: 'es-DO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Dominica L. Hernandez, C/45 # 33, Katanga");
        test.equal(parsedAddress.region, "SANTO DOMINGO");
        test.equal(parsedAddress.locality, "Los Minas");
        test.equal(parsedAddress.postalCode, "11903");
        test.equal(parsedAddress.country, "República Dominicana");
        test.equal(parsedAddress.countryCode, "DO");
        test.done();
    },
    
    testParseAddressDOSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Dominica L. Hernandez, C/45 # 33, Katanga, Los Minas  \n\t\n 11903 SANTO DOMINGO\t\n\n República Dominicana  \n  \t\t\t", {locale: 'es-DO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Dominica L. Hernandez, C/45 # 33, Katanga");
        test.equal(parsedAddress.region, "SANTO DOMINGO");
        test.equal(parsedAddress.locality, "Los Minas");
        test.equal(parsedAddress.postalCode, "11903");
        test.equal(parsedAddress.country, "República Dominicana");
        test.equal(parsedAddress.countryCode, "DO");
        test.done();
    },
    
    testParseAddressDONoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Dominica L. Hernandez C/45 # 33 Katanga, Los Minas 11903 SANTO DOMINGO República Dominicana", {locale: 'es-DO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Dominica L. Hernandez C/45 # 33 Katanga");
        test.equal(parsedAddress.region, "SANTO DOMINGO");
        test.equal(parsedAddress.locality, "Los Minas");
        test.equal(parsedAddress.postalCode, "11903");
        test.equal(parsedAddress.country, "República Dominicana");
        test.equal(parsedAddress.countryCode, "DO");
        test.done();
    },
    
    testParseAddressDOSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Instituto Postal Dominicano, C/Héroes de Luperón esq. Rafael Damirón, Centro de los Héroes, 10101 SANTO DOMINGO, República Dominicana", {locale: 'es-DO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Instituto Postal Dominicano, C/Héroes de Luperón esq. Rafael Damirón");
        test.equal(parsedAddress.region, "SANTO DOMINGO");
        test.equal(parsedAddress.locality, "Centro de los Héroes");
        test.equal(parsedAddress.postalCode, "10101");
        test.equal(parsedAddress.country, "República Dominicana");
        test.equal(parsedAddress.countryCode, "DO");
        test.done();
    },
    
    testParseAddressDOFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Dominica L. Hernandez, C/45 # 33, Katanga, Los Minas, 11903 SANTO DOMINGO, Dominican Republic", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Dominica L. Hernandez, C/45 # 33, Katanga");
        test.equal(parsedAddress.region, "SANTO DOMINGO");
        test.equal(parsedAddress.locality, "Los Minas");
        test.equal(parsedAddress.postalCode, "11903");
        test.equal(parsedAddress.country, "Dominican Republic");
        test.equal(parsedAddress.countryCode, "DO");
        test.done();
    },
    
    testFormatAddressDO: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Dominica L. Hernandez, C/45 # 33",
            region: "SANTO DOMINGO",
            locality: "Katanga, Los Minas",
            postalCode: "11903",
            country: "República Dominicana",
            countryCode: "DO"
        }, {locale: 'es-DO'});
        
        var expected = "Dominica L. Hernandez, C/45 # 33\nKatanga, Los Minas\n11903 SANTO DOMINGO\nRepública Dominicana";
        var formatter = new AddressFmt({locale: 'es-DO'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressDOFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Dominica L. Hernandez, C/45 # 33",
            region: "SANTO DOMINGO",
            locality: "Katanga, Los Minas",
            postalCode: "11903",
            country: "Dominican Republic",
            countryCode: "DO"
        }, {locale: 'en-US'});
        
        var expected = "Dominica L. Hernandez, C/45 # 33\nKatanga, Los Minas\n11903 SANTO DOMINGO\nDominican Republic";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};