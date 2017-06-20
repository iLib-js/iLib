/*
 * phonegeo_RU.js - Test the GeoLocator Object.
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
    var ilib = require("../../..");
}

module.exports.phonegeo_RU = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testRULocalNumber1: function(test) {
        test.expect(4);
        var parsed = new PhoneNumber("3456123",{locale: "ru-RU"});
        var expected = {
            country: {
                sn: "Russia",
                ln: "Russia, Kazakhstan",
                code: "RU"
            }        
        };
    
        var locator = new PhoneGeoLocator({locale: "ru-RU"});
        var geoInfo = locator.locate(parsed);
        
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.done();
    },
    
    testRULocalNumber2: function(test) {
        test.expect(4);
        var parsed = new PhoneNumber("212-3456",{locale: "ru-RU"});
        var expected = {
            country: {
                sn: "Russia",
                ln: "Russia, Kazakhstan",
                code: "RU"
            }        
        };
    
        var locator = new PhoneGeoLocator({locale: "ru-RU"});
        var geoInfo = locator.locate(parsed);
        
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.done();
    },
    
    testRUNumberWithAreaCode1: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("8 (812) 456-7890",{locale: "ru-RU"});
        var expected = {
            country: {
                sn: "Russia",
                ln: "Russia, Kazakhstan",
                code: "RU"
            },
            area: {
                sn: "Saint Petersburg",
                ln: "Saint Petersburg"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'ru-RU'});
        var geoInfo = locator.locate(parsed);
        
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testRUNumberWithAreaCode2: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("8 (8352) 051-212-3456",{locale: "ru-RU"});
        var expected = {
            country: {
                sn: "Russia",
                ln: "Russia, Kazakhstan",
                code: "RU"
            },
            area: {
                sn: "Cheboksary",
                ln: "Cheboksary"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'ru-RU'});
        var geoInfo = locator.locate(parsed);
        
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testRUNumberWithAreaCodeAndCountry1: function(test) {
        test.expect(10);
        test.expect(5);
        var parsed = new PhoneNumber("+7-812-312-3456");
        var expected = {
            country: {
                sn: "Russia",
                ln: "Russia, Kazakhstan",
                code: "RU"
            },
            area: {
                sn: "Saint Petersburg",
                ln: "Saint Petersburg"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'ru-RU'});
        var geoInfo = locator.locate(parsed);
        
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
     function testRUNumberWithAreaCodeAndCountry2() {
        var parsed = new PhoneNumber("+7-8552-32-456-1");
        var expected = {
            country: {
                sn: "Russia",
                ln: "Russia, Kazakhstan",
                code: "RU"
            },
            area: {
                sn: "Naberezhnye Chelny",
                ln: "Naberezhnye Chelny",
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
    
    testRUNumberWithAreaCodeAndCountry3: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("+7-3452-212-3456");
        var expected = {
            country: {
                sn: "Russia",
                ln: "Russia, Kazakhstan",
                code: "RU"
            },
            area: {
                sn: "Tyumen",
                ln: "Tyumen Oblast"
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
    
    testRUNumberCallFromUS: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("011 7-812-212-3456");
        var expected = {
            country: {
                sn: "Russia",
                ln: "Russia, Kazakhstan",
                code: "RU"
            },
            area: {
                sn: "Saint Petersburg",
                ln: "Saint Petersburg"
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
    
    testRUNumberWithAreaCodeAndCountry4: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("+7-812-212-3456");
        var expected = {
            country: {
                sn: "Russie",
                ln: "Russie, Kazakhstan",
                code: "RU"
            },
            area: {
                sn: "Saint Petersburg",
                ln: "Saint Petersburg"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'fr-FR'});
        var geoInfo = locator.locate(parsed);
        
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testRUPolice: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("112",{locale: "ru-RU"});
        var expected = {
            country: {
                sn: "Russia",
                ln: "Russia, Kazakhstan",
                code: "RU"
            },
            area: {
                sn: "Emergency Services Number",
                ln: "Emergency Services Number"
            }
        };
        var locator = new PhoneGeoLocator({locale: "ru-RU"});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testRUFireAndAmbulance: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("101",{locale: "ru-RU"});
        var expected = {
            country: {
                sn: "Russia",
                ln: "Russia, Kazakhstan",
                code: "RU"
            },
            area: {
                sn: "Emergency Services Number",
                ln: "Emergency Services Number"
            }
        };
        var locator = new PhoneGeoLocator({locale: "ru-RU"});
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