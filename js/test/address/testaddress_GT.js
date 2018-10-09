/*
 * testaddress_GT.js - test the address parsing and formatting routines
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

module.exports.testaddress_GT = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressGTNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12\n01012-GUATEMALA\nGUATEMALA", {locale: 'es-GT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12");
        test.equal(parsedAddress.locality, "GUATEMALA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "01012");
        test.equal(parsedAddress.country, "GUATEMALA");
        test.equal(parsedAddress.countryCode, "GT");
        test.done();
    },
    
    testParseAddressGTNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12\nGUATEMALA\nGUATEMALA", {locale: 'es-GT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12");
        test.equal(parsedAddress.locality, "GUATEMALA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "GUATEMALA");
        test.equal(parsedAddress.countryCode, "GT");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressGTNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12\n01012-GUATEMALA", {locale: 'es-GT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12");
        test.equal(parsedAddress.locality, "GUATEMALA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "01012");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "GT");
        test.done();
    },
    
    testParseAddressGTManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MIGUEL ÁNGEL MENCHÚ \nAVENIDA PETAPA 37\n\nZ. 12\n01012\nGUATEMALA\n\n\nGUATEMALA\n\n\n", {locale: 'es-GT'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MIGUEL ÁNGEL MENCHÚ, AVENIDA PETAPA 37, Z. 12");
        test.equal(parsedAddress.locality, "GUATEMALA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "01012");
        test.equal(parsedAddress.country, "GUATEMALA");
        test.equal(parsedAddress.countryCode, "GT");
        test.done();
    },
    
    testParseAddressGTOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MIGUEL ÁNGEL MENCHÚ , AVENIDA PETAPA 37 , Z. 12 ,01012 GUATEMALA , GUATEMALA", {locale: 'es-GT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MIGUEL ÁNGEL MENCHÚ, AVENIDA PETAPA 37, Z. 12");
        test.equal(parsedAddress.locality, "GUATEMALA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "01012");
        test.equal(parsedAddress.country, "GUATEMALA");
        test.equal(parsedAddress.countryCode, "GT");
        test.done();
    },
    
    testParseAddressGTSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tMIGUEL ÁNGEL MENCHÚ \n\t\tAVENIDA PETAPA 37\n\nZ. 12\n\n01012\n\t\nGUATEMALA\n GUATEMALA\n\n\n", {locale: 'es-GT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MIGUEL ÁNGEL MENCHÚ, AVENIDA PETAPA 37, Z. 12");
        test.equal(parsedAddress.locality, "GUATEMALA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "01012");
        test.equal(parsedAddress.country, "GUATEMALA");
        test.equal(parsedAddress.countryCode, "GT");
        test.done();
    },
    
    testParseAddressGTNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12 01012-GUATEMALA GUATEMALA", {locale: 'es-GT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12");
        test.equal(parsedAddress.locality, "GUATEMALA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "01012");
        test.equal(parsedAddress.country, "GUATEMALA");
        test.equal(parsedAddress.countryCode, "GT");
        test.done();
    },
    
    testParseAddressGTFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MIGUEL ANGEL MENCHÚ AVENIDA PETAPA 37 Z. 12\n01012-GUATEMALA\nGUATEMALA", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MIGUEL ANGEL MENCHÚ AVENIDA PETAPA 37 Z. 12");
        test.equal(parsedAddress.locality, "GUATEMALA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "01012");
        test.equal(parsedAddress.country, "GUATEMALA");
        test.equal(parsedAddress.countryCode, "GT");
        test.done();
    },
    
    testFormatAddressGT: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12",
            locality: "GUATEMALA",
            postalCode: "01012",
            country: "GUATEMALA",
            countryCode: "GT"
        }, {locale: 'es-GT'});
        
        var expected = "MIGUEL ÁNGEL MENCHÚ AVENIDA PETAPA 37 Z. 12\n01012-GUATEMALA\nGUATEMALA";
        var formatter = new AddressFmt({locale: 'es-GT'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressGTFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "MIGUEL ANGEL MENCHÚ AVENIDA PETAPA 37 Z. 12",
            locality: "GUATEMALA",
            postalCode: "01012",
            country: "GUATEMALA",
            countryCode: "GT"
        }, {locale: 'en-US'});
        
        var expected = "MIGUEL ANGEL MENCHÚ AVENIDA PETAPA 37 Z. 12\n01012-GUATEMALA\nGUATEMALA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
