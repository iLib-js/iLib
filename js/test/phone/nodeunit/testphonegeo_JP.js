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
    var PhoneNumber = require("../../../lib/PhoneNumber.js");
}
if (typeof(PhoneGeoLocator) === "undefined") {
    var PhoneGeoLocator = require("../../../lib/PhoneGeoLocator.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.phonegeo_JP = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testJPLocalNumber1: function(test) {
        test.expect(4);
        var parsed = new PhoneNumber("3111 1111",{locale: "ja-JP"});
        var expected = {
            country: {
                sn: "Japan",
                ln: "Japan",
                code: "JP"
            }        
        };
    
        var locator = new PhoneGeoLocator({locale: 'ja-JP'});
        var geoInfo = locator.locate(parsed);
        
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.done();
    },
    
    testJPNumberWithAreaCode1: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("056-5-3111-1111",{locale: "ja-JP"});
        var expected = {
            country: {
                sn: "Japan",
                ln: "Japan",
                code: "JP"
            },
            area: {
                sn: "Aichi",
                ln: "Higashikamo District, Nishikamo District, Toyota, Aichi"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: "ja-JP"});
        var geoInfo = locator.locate(parsed);
        
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testJPNumberWithAreaCode2: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("03-3262-2391",{locale: "ja-JP"});
        var expected = {
            country: {
                sn: "Japan",
                ln: "Japan",
                code: "JP"
            },
            area: {
                sn: "Tokyo",
                ln: "Tokyo"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'ja-JP'});
        var geoInfo = locator.locate(parsed);
        
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testJPNumberWithAreaCodeAndCountry1: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("+81-3-2122-3456");
        var expected = {
            country: {
                sn: "Japan",
                ln: "Japan",
                code: "JP"
            },
            area: {
                sn: "Tokyo",
                ln: "Tokyo"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'ja-JP'});
        var geoInfo = locator.locate(parsed);
        
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testJPNumberWithAreaCodeAndCountry2: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("+81-56-5-2122-3456");
        var expected = {
            country: {
                sn: "Japan",
                ln: "Japan",
                code: "JP"
            },
            area: {
                sn: "Aichi",
                ln: "Higashikamo District, Nishikamo District, Toyota, Aichi"
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
    
    testJPNumberWithAreaCodeAndCountry3: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("+81-4-29-2123-3456");
        var expected = {
            country: {
                sn: "Japan",
                ln: "Japan",
                code: "JP"
            },
            area: {
                sn: "Saitama",
                ln: "Hannō, Hidaka, Iruma District, Iruma, Sayama, Tokorozawa, Saitama"
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
    
    testJPNumberCallFromUS: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("011 81-4-29-2123-3456");
        var expected = {
            country: {
                sn: "Japan",
                ln: "Japan",
                code: "JP"
            },
            area: {
                sn: "Saitama",
                ln: "Hannō, Hidaka, Iruma District, Iruma, Sayama, Tokorozawa, Saitama"
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
    
    testJPNumberWithAreaCodeAndCountry4: function(test) {
        test.expect(5);
        var parsed = new PhoneNumber("+81-4-29-2123-3456");
        var expected = {
            country: {
                sn: "Japon",
                ln: "Japon",
                code: "JP"
            },
            area: {
                sn: "Saitama",
                ln: "Hannō, Hidaka, Iruma District, Iruma, Sayama, Tokorozawa, Saitama"
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
    
    testJPPolice: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("110",{locale: "ja-JP"});
        var expected = {
            country: {
                sn: "Japan",
                ln: "Japan",
                code: "JP"
            },
            area: {
                sn: "Emergency Services Number",
                ln: "Emergency Services Number"
            }
        };
        var locator = new PhoneGeoLocator({locale: "ja-JP"});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testJPFireAndAmbulance: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("119",{locale: "ja-JP"});
        var expected = {
            country: {
                sn: "Japan",
                ln: "Japan",
                code: "JP"
            },
            area: {
                sn: "Emergency Services Number",
                ln: "Emergency Services Number"
            }
        };
        var locator = new PhoneGeoLocator({locale: "ja-JP"});
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
