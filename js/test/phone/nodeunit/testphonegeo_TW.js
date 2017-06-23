/*
 * phonegeo_TW.js - Test the GeoLocator Object.
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
/* Calling from US*/
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.phonegeo_TW = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testNANPUStoTaiwan: function(test) {
        var parsed = new PhoneNumber("011 886 2 3210 3210");
        var expected = {
            country: {
                sn: "Taiwan",
                ln: "Republic of China",
                code: "TW"
            },
            area: {
                sn: "Taipei",
                ln: "Taipei County, Keelung, Panchiao, Sanchung, Yingge, Yungho, Jilong"
            }
        };
        
        var locator = new PhoneGeoLocator();
        var geoInfo = locator.locate(parsed);
        
        test.expect(6);
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testTWLocalNumber2: function(test) {
        var parsed = new PhoneNumber("212-3456",{locale: "en-US"});
        var expected = {
            country: {
                sn: "Taiwan",
                ln: "Republic of China",
                code: "TW"
            }        
        };
    
        var locator = new PhoneGeoLocator({locale: "tw-TW"});
        var geoInfo = locator.locate(parsed);
        
        test.expect(4);
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.done();
    },
    
    testTWNumberWithAreaCode1: function(test) {
        var parsed = new PhoneNumber("(89) 456-7890",{locale: "en-US"});
        var expected = {
            country: {
                sn: "Taiwan",
                ln: "Republic of China",
                code: "TW"
            },
            area: {
                sn: "Taitung",
                ln: "Taitung County"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'tw-TW'});
        var geoInfo = locator.locate(parsed);
        
        test.expect(5);
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testTWNumberWithAreaCode2: function(test) {
        var parsed = new PhoneNumber("(49)212-3456",{locale: "en-US"});
        var expected = {
            country: {
                sn: "Taiwan",
                ln: "Republic of China",
                code: "TW"
            },
            area: {
                sn: "Nantou",
                ln: "Buli, Riyuetan, Xincun, Zhongxing, Nantou County"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'tw-TW'});
        var geoInfo = locator.locate(parsed);
        
        test.expect(5);
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testTWNumberWithAreaCodeAndCountry1: function(test) {
        var parsed = new PhoneNumber("+886-49-312-3456");
        var expected = {
            country: {
                sn: "Taiwan",
                ln: "Republic of China",
                code: "TW"
            },
            area: {
                sn: "Nantou",
                ln: "Buli, Riyuetan, Xincun, Zhongxing, Nantou County"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'ko-KR'});
        var geoInfo = locator.locate(parsed);
        
        test.expect(5);
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testTWNumberWithAreaCodeAndCountry2: function(test) {
        var parsed = new PhoneNumber("+886-49-32-456-1");
        var expected = {
            country: {
                sn: "Taiwan",
                ln: "Republic of China",
                code: "TW"
            },
            area: {
                sn: "Nantou",
                ln: "Buli, Riyuetan, Xincun, Zhongxing, Nantou County"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
        
        test.expect(5);
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testTWNumberWithAreaCodeAndCountry3: function(test) {
        var parsed = new PhoneNumber("+886-2-212-3456");
        var expected = {
            country: {
                sn: "Taiwan",
                ln: "Republic of China",
                code: "TW"
            },
            area: {
                sn: "Taipei",
                ln: "Taipei County, Keelung, Panchiao, Sanchung, Yingge, Yungho, Jilong"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
        
        test.expect(5);
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testTWNumberCallFromUS: function(test) {
        var parsed = new PhoneNumber("011 886-812-212-3456");
        var expected = {
            country: {
                sn: "Taiwan",
                ln: "Republic of China",
                code: "TW"
            },
            area: {
                sn: "Pingtung",
                ln: "Pingtung, Kinmen, Lienchiang, Taitung Counties, Wuqiu Township"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
        
        test.expect(5);
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testTWNumberWithAreaCodeAndCountry4: function(test) {
        var parsed = new PhoneNumber("+886-37-212-3456");
        var expected = {
            country: {
                sn: "Taïwan",
                ln: "République de Chine",
                code: "TW"
            },
            area: {
                sn: "Miaoli",
                ln: "Miaoli County, Zhunan, Miaoli"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'fr-FR'});
        var geoInfo = locator.locate(parsed);
        
        test.expect(5);
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testTWPolice: function(test) {
        var parsed = new PhoneNumber("112",{locale: "tw-TW"});
        var expected = {
            country: {
                sn: "Taiwan",
                ln: "Republic of China",
                code: "TW"
            },
            area: {
                sn: "Emergency Services Number",
                ln: "Emergency Services Number"
            }
        };
        var locator = new PhoneGeoLocator({locale: "tw-TW"});
        var geoInfo = locator.locate(parsed);
    
        test.expect(6);
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testTWFireAndAmbulance: function(test) {
        var parsed = new PhoneNumber("119",{locale: "tw-TW"});
        var expected = {
            country: {
                sn: "Taiwan",
                ln: "Republic of China",
                code: "TW"
            },
            area: {
                sn: "Emergency Services Number",
                ln: "Emergency Services Number"
            }
        };
        var locator = new PhoneGeoLocator({locale: "tw-TW"});
        var geoInfo = locator.locate(parsed);
    
        test.expect(6);
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    }
    
    
};