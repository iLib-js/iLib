/*
 * testaddress_VE.js - test the address parsing and formatting routines
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

module.exports.testaddress_PH = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressPHNormal: function(test) {
        var parsedAddress = new Address("Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan\n2900 Laoag City Ilocos Norte\nPhilippines", {locale: 'es-PH'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan");
        test.equal(parsedAddress.locality, "Laoag City");
        test.equal(parsedAddress.region, "Ilocos Norte");
        test.equal(parsedAddress.postalCode, "2900");
        test.equal(parsedAddress.country, "Philippines");
        test.equal(parsedAddress.countryCode, "PH");
        test.done();
    },
    
    testParseAddressPHNoZip: function(test) {
        var parsedAddress = new Address("Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan\nLaoag City Ilocos Norte\nPhilippines", {locale: 'es-PH'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan");
        test.equal(parsedAddress.locality, "Laoag City");
        test.equal(parsedAddress.region, "Ilocos Norte");
        test.equal(parsedAddress.country, "Philippines");
        test.equal(parsedAddress.countryCode, "PH");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressPHNoCountry: function(test) {
        var parsedAddress = new Address("Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan\n2900 Laoag City Ilocos Norte", {locale: 'es-PH'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan");
        test.equal(parsedAddress.locality, "Laoag City");
        test.equal(parsedAddress.region, "Ilocos Norte");
        test.equal(parsedAddress.postalCode, "2900");    
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "PH");
        test.done();
    },
    
    testParseAddressPHManyLines: function(test) {
        var parsedAddress = new Address("Juan dela Cruz Rm 107\n1901 Airport Road\nCabungaan\n2900 Laoag City Ilocos Norte\nPhilippines", {locale: 'es-PH'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Juan dela Cruz Rm 107, 1901 Airport Road, Cabungaan");
        test.equal(parsedAddress.locality, "Laoag City");
        test.equal(parsedAddress.region, "Ilocos Norte");
        test.equal(parsedAddress.postalCode, "2900");
        test.equal(parsedAddress.country, "Philippines");
        test.equal(parsedAddress.countryCode, "PH");
        test.done();
    },
    
    testParseAddressPHOneLine: function(test) {
        var parsedAddress = new Address("Juan dela Cruz Rm 107 , 1901 Airport Road , Cabungaan , 2900 , Laoag City , Ilocos Norte , Philippines", {locale: 'es-PH'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Juan dela Cruz Rm 107, 1901 Airport Road, Cabungaan");
        test.equal(parsedAddress.locality, "Laoag City");
        test.equal(parsedAddress.region, "Ilocos Norte");
        test.equal(parsedAddress.postalCode, "2900");
        test.equal(parsedAddress.country, "Philippines");
        test.equal(parsedAddress.countryCode, "PH");
        test.done();
    },
    
    testParseAddressPHSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("Juan dela Cruz Rm 107\n\n\t\r1901 Airport Road\t\t\rCabungaan\n\n\t\r2900\r\n\nLaoag City\t\rIlocos Norte\t\t\rPhilippines", {locale: 'es-PH'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan");
        test.equal(parsedAddress.locality, "Laoag City");
        test.equal(parsedAddress.region, "Ilocos Norte");
        test.equal(parsedAddress.postalCode, "2900");
        test.equal(parsedAddress.country, "Philippines");
        test.equal(parsedAddress.countryCode, "PH");
        test.done();
    },
    
    testParseAddressPHNoDelimiters: function(test) {
        var parsedAddress = new Address("Juan dela Cruz Rm 107 1901 Airport Road Cabungaan 2900 Laoag City Ilocos Norte Philippines", {locale: 'es-PH'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Juan dela Cruz Rm 107 1901 Airport Road Cabungaan");
        test.equal(parsedAddress.locality, "Laoag City");
        test.equal(parsedAddress.region, "Ilocos Norte");
        test.equal(parsedAddress.postalCode, "2900");
        test.equal(parsedAddress.country, "Philippines");
        test.equal(parsedAddress.countryCode, "PH");
        test.done();
    },
    
    testParseAddressPHFromUS: function(test) {
        var parsedAddress = new Address("Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan\n2900 Laoag City Ilocos Norte\nPhilippines", {locale: 'es-PH'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan");
        test.equal(parsedAddress.locality, "Laoag City");
        test.equal(parsedAddress.region, "Ilocos Norte");
        test.equal(parsedAddress.postalCode, "2900");
        test.equal(parsedAddress.country, "Philippines");
        test.equal(parsedAddress.countryCode, "PH");
        test.done();
    },
    
    testFormatAddressPH: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan",
            locality: "Laoag City",
            postalCode: "2900",
            region: "Ilocos Norte",
            country: "Philippines",
            countryCode: "PH"
        }, {locale: 'es-PH'});
        
        var expected = "Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan\n2900 Laoag City Ilocos Norte\nPhilippines";
        var formatter = new AddressFmt({locale: 'es-PH'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressPHFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan",
            locality: "Laoag City",
            postalCode: "2900",
            region: "Ilocos Norte",
            country: "Philippines",
            countryCode: "PH"
        }, {locale: 'en-US'});
        
        var expected = "Juan dela Cruz Rm 107, 1901 Airport Road Cabungaan\n2900 Laoag City Ilocos Norte\nPhilippines";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};