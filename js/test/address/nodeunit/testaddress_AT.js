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
// TODO: put in Austrian addresses here

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testaddress_AT = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseATAddressNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("R. Fellner, Pazmaniteng 24-9, A-1020 Wien, Österreich", {locale: 'de-AT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "R. Fellner, Pazmaniteng 24-9");
        test.equal(parsedAddress.locality, "Wien");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "A-1020");
        test.equal(parsedAddress.country, "Österreich");
        test.equal(parsedAddress.countryCode, "AT");
        test.done();
    },
    
    testParseATAddressNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("R. Fellner, Pazmaniteng 24-9, Wien, Österreich", {locale: 'de-AT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "R. Fellner, Pazmaniteng 24-9");
        test.equal(parsedAddress.locality, "Wien");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Österreich");
        test.equal(parsedAddress.countryCode, "AT");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseATAddressNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("R. Fellner, Pazmaniteng 24-9, A-1020 Wien", {locale: 'de-AT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "R. Fellner, Pazmaniteng 24-9");
        test.equal(parsedAddress.locality, "Wien");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "A-1020");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "AT");
        test.done();
    },
    
    testParseATAddressManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Wolfgang Schüssel\nLiebiggasse 5\n1010 Wien\nÖsterreich\n\n\n", {locale: 'de-AT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Wolfgang Schüssel, Liebiggasse 5");
        test.equal(parsedAddress.locality, "Wien");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1010");
        test.equal(parsedAddress.country, "Österreich");
        test.equal(parsedAddress.countryCode, "AT");
        test.done();
    },
    
    testParseATAddressOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("R. Fellner, Pazmaniteng 24-9, A-1020 Wien, Österreich", {locale: 'de-AT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "R. Fellner, Pazmaniteng 24-9");
        test.equal(parsedAddress.locality, "Wien");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "A-1020");
        test.equal(parsedAddress.country, "Österreich");
        test.equal(parsedAddress.countryCode, "AT");
        test.done();
    },
    
    testParseATAddressSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("  \t  \r  Wolfgang Schüssel,\n\t    Liebiggasse 5,\n\n\n\n\t 1010 Wien\r\t  ,\n\t Österreich       ", {locale: 'de-AT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Wolfgang Schüssel, Liebiggasse 5");
        test.equal(parsedAddress.locality, "Wien");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1010");
        test.equal(parsedAddress.country, "Österreich");
        test.equal(parsedAddress.countryCode, "AT");
        test.done();
    },
    
    testParseATAddressNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Wolfgang Schüssel Liebiggasse 5 1010 Wien Österreich", {locale: 'de-AT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Wolfgang Schüssel Liebiggasse 5");
        test.equal(parsedAddress.locality, "Wien");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1010");
        test.equal(parsedAddress.country, "Österreich");
        test.equal(parsedAddress.countryCode, "AT");
        test.done();
    },
    
    testParseATAddressSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Wolfgang Schüssel, Liebiggasse 5, 1010 Wien, Österreich", {locale: 'de-AT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Wolfgang Schüssel, Liebiggasse 5");
        test.equal(parsedAddress.locality, "Wien");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1010");
        test.equal(parsedAddress.country, "Österreich");
        test.equal(parsedAddress.countryCode, "AT");
        test.done();
    },
    
    testParseATAddressFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Wolfgang Schüssel, Liebiggasse 5, 1010 Wien, Austria", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Wolfgang Schüssel, Liebiggasse 5");
        test.equal(parsedAddress.locality, "Wien");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1010");
        test.equal(parsedAddress.country, "Austria");
        test.equal(parsedAddress.countryCode, "AT");
        test.done();
    },
    
    testFormatAddressAT: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Wolfgang Schüssel, Liebiggasse 5",
            locality: "Wien",
            postalCode: "1010",
            country: "Österreich",
            countryCode: "AT"
        }, {locale: 'de-AT'});
        
        var expected = "Wolfgang Schüssel, Liebiggasse 5\n1010 Wien\nÖsterreich";
        var formatter = new AddressFmt({locale: 'de-AT'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressATFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Wolfgang Schüssel, Liebiggasse 5",
            locality: "Vienna",
            postalCode: "1010",
            country: "Austria",
            countryCode: "AT"
        }, {locale: 'en-US'});
        
        var expected = "Wolfgang Schüssel, Liebiggasse 5\n1010 Vienna\nAustria";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};