/*
 * phonegeo_JP.js - Test the GeoLocator Object.
 * 
 * Copyright © 2014-2015,2017, JEDLSoft
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

if (typeof(PhoneNumber) === "undefined") {
    var PhoneNumber = require("../.././../lib/PhoneNumber.js");
}
if (typeof(PhoneGeoLocator) === "undefined") {
    var PhoneGeoLocator = require("../.././../lib/PhoneGeoLocator.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.phonegeo_BR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testBRLocalNumber1: function(test) {
        test.expect(4);
        var parsed = new PhoneNumber("3111-1111",{locale: "pt-BR"});
        var expected = {
            country: {
                sn: "Brazil",
                ln: "Brazil",
                code: "BR"
            }        
        };
    
        var locator = new PhoneGeoLocator({locale: 'pt-BR'});
        var geoInfo = locator.locate(parsed);
        
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.done();
    },
    
    testBRNumberWithAreaCode1: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("0 31 85 2222 2222",{locale: "pt-BR"});
        var expected = {
            country: {
                sn: "Brazil",
                ln: "Brazil",
                code: "BR"
            },
            area: {
                sn: "Fortaleza",
                ln: "Greater Fortaleza"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: "pt-BR"});
        var geoInfo = locator.locate(parsed);
        
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testBRNumberWithAreaCode2: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("0-31-31-2222-2222",{locale: "pt-BR"});
        var expected = {
            country: {
                sn: "Brazil",
                ln: "Brazil",
                code: "BR"
            },
            area: {
                sn: "Central Minas Gerais State",
                ln: "Central Minas Gerais State (Greater Belo Horizonte, Sete Lagoas, Ipatinga)"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'pt-BR'});
        var geoInfo = locator.locate(parsed);
        
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testBRNumberWithAreaCodeAndCountry1: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("+55-31-2122-3456");
        var expected = {
            country: {
                sn: "Brazil",
                ln: "Brazil",
                code: "BR"
            },
            area: {
                sn: "Central Minas Gerais State",
                ln: "Central Minas Gerais State (Greater Belo Horizonte, Sete Lagoas, Ipatinga)"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'pt-BR'});
        var geoInfo = locator.locate(parsed);
        
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testBRNumberWithAreaCodeAndCountry2: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("+55-87-2122-3456");
        var expected = {
            country: {
                sn: "Brazil",
                ln: "Brazil",
                code: "BR"
            },
            area: {
                sn: "Central and West Pernambuco State",
                ln: "Central and West Pernambuco State (Petrolina, Garanhuns)"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
        
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testBRNumberWithAreaCodeAndCountry3: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("+55-71-2123-3456");
        var expected = {
            country: {
                sn: "Brazil",
                ln: "Brazil",
                code: "BR"
            },
            area: {
                sn: "Salvador",
                ln: "Greater Salvador"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
        
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testBRNumberCallFromUS: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("011 55-71-2123-3456");
        var expected = {
            country: {
                sn: "Brazil",
                ln: "Brazil",
                code: "BR"
            },
            area: {
                sn: "Salvador",
                ln: "Greater Salvador"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
        
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testBRPolice: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("197",{locale: "pt-BR"});
        var expected = {
            country: {
                sn: "Brazil",
                ln: "Brazil",
                code: "BR"
            },
            area: {
                sn: "Emergency Services Number",
                ln: "Emergency Services Number"
            }
        };
        var locator = new PhoneGeoLocator({locale: "pt-BR"});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testBRAmbulance: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("192",{locale: "pt-BR"});
        var expected = {
            country: {
                sn: "Brazil",
                ln: "Brazil",
                code: "BR"
            },
            area: {
                sn: "Emergency Services Number",
                ln: "Emergency Services Number"
            }
        };
        var locator = new PhoneGeoLocator({locale: "pt-BR"});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    }
    
    
};
