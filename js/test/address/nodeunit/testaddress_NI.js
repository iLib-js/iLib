/*
 * testaddress_NI.js - test the address parsing and formatting routines
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

module.exports.testaddress_NI = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressNINormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Sr. Juan Manuel Nurinda Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel\n050-008-4\nGRANADA, GRANADA\nNICARAGUA", {locale: 'es-NI'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Sr. Juan Manuel Nurinda Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel");
        test.equal(parsedAddress.locality, "GRANADA");
        test.equal(parsedAddress.region, "GRANADA");
        test.equal(parsedAddress.postalCode, "050-008-4");
        test.equal(parsedAddress.country, "NICARAGUA");
        test.equal(parsedAddress.countryCode, "NI");
        test.done();
    },
    
    testParseAddressNINoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Sr. Juan Manuel Nurinda Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel\nGRANADA, GRANADA\nNICARAGUA", {locale: 'es-NI'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Sr. Juan Manuel Nurinda Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel");
        test.equal(parsedAddress.locality, "GRANADA");
        test.equal(parsedAddress.region, "GRANADA");
        test.equal(parsedAddress.country, "NICARAGUA");
        test.equal(parsedAddress.countryCode, "NI");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressNINoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Sr. Juan Manuel Nurinda    \nDel Hotel Granada 1c.\narriba 75\nvrs. alsur. Reparto\nSanta Isabel\n050-008-4\nGranada, Masaya", {locale: 'es-NI'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Sr. Juan Manuel Nurinda, Del Hotel Granada 1c., arriba 75, vrs. alsur. Reparto, Santa Isabel");
        test.equal(parsedAddress.locality, "Granada");
        test.equal(parsedAddress.region, "Masaya");
        test.equal(parsedAddress.postalCode, "050-008-4");    
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "NI");
        test.done();
    },
    
    testParseAddressNIManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Sr. Juan Manuel Nurinda\nDel Hotel Granada 1c.\narriba 75\nvrs. alsur. Reparto\nSanta Isabel\n050-008-4\nGRANADA, GRANADA\nNICARAGUA", {locale: 'es-NI'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Sr. Juan Manuel Nurinda, Del Hotel Granada 1c., arriba 75, vrs. alsur. Reparto, Santa Isabel");
        test.equal(parsedAddress.locality, "GRANADA");
        test.equal(parsedAddress.region, "GRANADA");
        test.equal(parsedAddress.postalCode, "050-008-4");
        test.equal(parsedAddress.country, "NICARAGUA");
        test.equal(parsedAddress.countryCode, "NI");
        test.done();
    },
    
    testParseAddressNIOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Sr. Juan Manuel Nurinda , Del Hotel Granada 1c. , arriba 75 , vrs. alsur. Reparto , Santa Isabel , 050-008-4 , GRANADA , GRANADA , NICARAGUA", {locale: 'es-NI'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Sr. Juan Manuel Nurinda, Del Hotel Granada 1c., arriba 75, vrs. alsur. Reparto, Santa Isabel");
        test.equal(parsedAddress.locality, "GRANADA");
        test.equal(parsedAddress.region, "GRANADA");
        test.equal(parsedAddress.postalCode, "050-008-4");
        test.equal(parsedAddress.country, "NICARAGUA");
        test.equal(parsedAddress.countryCode, "NI");
        test.done();
    },
    
    testParseAddressNISuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Sr. Juan Manuel Nurinda\n\n\t\rDel Hotel Granada 1c.\t\t\rarriba 75\r\r\rvrs. alsur. Reparto\t\t\rSanta Isabel\n\n\n050-008-4\t\t\rGRANADA\r\r\rGRANADA\t\t\rNICARAGUA", {locale: 'es-NI'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Sr. Juan Manuel Nurinda, Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel");
        test.equal(parsedAddress.locality, "GRANADA");
        test.equal(parsedAddress.region, "GRANADA");
        test.equal(parsedAddress.postalCode, "050-008-4");
        test.equal(parsedAddress.country, "NICARAGUA");
        test.equal(parsedAddress.countryCode, "NI");
        test.done();
    },
    
    testParseAddressNINoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Sr. Juan Manuel Nurinda Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel 050-008-4\nGRANADA, GRANADA NICARAGUA", {locale: 'es-NI'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Sr. Juan Manuel Nurinda Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel");
        test.equal(parsedAddress.locality, "GRANADA");
        test.equal(parsedAddress.region, "GRANADA");
        test.equal(parsedAddress.postalCode, "050-008-4");
        test.equal(parsedAddress.country, "NICARAGUA");
        test.equal(parsedAddress.countryCode, "NI");
        test.done();
    },
    
    testParseAddressNIFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. JOSE PEREZ AV. Del Hotel Granada 1c. arriba 75, vrs. alsur. Reparto Santa Isabel\n050-008-4\nGRANADA, GRANADA\nNICARAGUA", {locale: 'es-NI'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. JOSE PEREZ AV. Del Hotel Granada 1c. arriba 75, vrs. alsur. Reparto Santa Isabel");
        test.equal(parsedAddress.locality, "GRANADA");
        test.equal(parsedAddress.region, "GRANADA");
        test.equal(parsedAddress.postalCode, "050-008-4");
        test.equal(parsedAddress.country, "NICARAGUA");
        test.equal(parsedAddress.countryCode, "NI");
        test.done();
    },
    
    testFormatAddressNI: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Sr. Juan Manuel Nurinda Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel",
            locality: "GRANADA",
            postalCode: "050-008-4",
            region: "GRANADA",
            country: "NICARAGUA",
            countryCode: "NI"
        }, {locale: 'es-NI'});
        
        var expected = "Sr. Juan Manuel Nurinda Del Hotel Granada 1c. arriba 75 vrs. alsur. Reparto Santa Isabel\n050-008-4\nGRANADA, GRANADA\nNICARAGUA";
        var formatter = new AddressFmt({locale: 'es-NI'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressNIFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Mr. JOSE PEREZ AV. Del Hotel Granada 1c. arriba 75, vrs. alsur. Reparto Santa Isabel",
            locality: "GRANADA",
            postalCode: "050-008-4",
            region: "GRANADA",
            country: "NICARAGUA",
            countryCode: "NI"
        }, {locale: 'en-US'});
        
        var expected = "Mr. JOSE PEREZ AV. Del Hotel Granada 1c. arriba 75, vrs. alsur. Reparto Santa Isabel\n050-008-4\nGRANADA, GRANADA\nNICARAGUA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};