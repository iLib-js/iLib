/*
 * phonegeo.js - Test the GeoLocator Object.
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../.././../lib/ilib-node.js");
}
if (typeof(PhoneNumber) === "undefined") {
    var PhoneNumber = require("../.././../lib/PhoneNumber.js");
}
if (typeof(PhoneLocale) === "undefined") {
    var PhoneLocale = require("../.././../lib/PhoneLocale.js");
}
if (typeof(PhoneGeoLocator) === "undefined") {
    var PhoneGeoLocator = require("../.././../lib/PhoneGeoLocator.js");
}
if (typeof(NumberingPlan) === "undefined") {
    var NumberingPlan = require("../.././../lib/NumberingPlan.js");
}

function mockLoaderGeo(paths, sync, params, callback) {
    var data = [];
    
    data.push(ilib.data.area_US); // for the generic, shared stuff
    
    if (typeof(callback) !== 'undefined') {
        callback.call(this, data);    
    }
    return data;
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

var oldLoader = ilib._load;

module.exports.phonegeo = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    
    tearDown: function(callback) {
        ilib._load = oldLoader;
        callback();
    },

    testNANP: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+1 650 654 3210");
        var expected = {
            country: {
                sn: "North America",
                ln: "North America and the Caribbean Islands",
                code: "US"
            },
            area: {
                sn: "California",
                ln: "Central California: San Mateo, Palo Alto, Redwood City, Menlo Park, Mountain View, southern San Francisco suburbs"
            }
        };
    
        var locator = new PhoneGeoLocator();
        var geoInfo = locator.locate(parsed);
        
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testNANPLocalNumber: function(test) {
        test.expect(3);
        var parsed = new PhoneNumber("654 3210");
        var expected = {
            country: {
                sn: "North America",
                ln: "North America and the Caribbean Islands",
                code: "US"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
        
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.done();
    },
    
    testNANPServiceNumber: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+1 888 654 3210");
        var expected = {
            country: {
                sn: "North America",
                ln: "North America and the Caribbean Islands",
                code: "US"
            },
            area: {
                sn: "Toll-free",
                ln: "Toll-free Telephone Service"
            }
        };
    
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testNANPEmergencyLikeServiceNumber: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("411");
        var expected = {
            country: {
                sn: "North America",
                ln: "North America and the Caribbean Islands",
                code: "US"
            },
            area: {
                sn: "Service Number",
                ln: "Service Number"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testNANPEmergency: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("911");
        var expected = {
            country: {
                sn: "North America",
                ln: "North America and the Caribbean Islands",
                code: "US"
            },
            area: {
                sn: "Emergency Services Number",
                ln: "Emergency Services Number"
            }
        };
        var locator = new PhoneGeoLocator();
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testNANPNoLocale: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+1 650 654 3210");
        var expected = {
            country: {
                sn: "North America",
                ln: "North America and the Caribbean Islands",
                code: "US"
            },
            area: {
                sn: "California",
                ln: "Central California: San Mateo, Palo Alto, Redwood City, Menlo Park, Mountain View, southern San Francisco suburbs"
            }
        };
        
        var locator = new PhoneGeoLocator();
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testNANPOtherLocale: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+1 650 654 3210");
        var expected = {
            country: {
                sn: "Amérique du Nord",
                ln: "Amérique du Nord et Îles Caraïbes",
                code: "US"
            },
            area: {
                sn: "Californie",
                ln: "Californie centrale : San Mateo, Palo Alto, Redwood City, Menlo Park, Mountain View, banlieues du sud de San Francisco"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'fr-FR'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
        
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testNANPUnknownAreaCode: function(test) {
        test.expect(4);
        var parsed = new PhoneNumber("875 654 3210");
        var expected = {
            country: {
                sn: "North America",
                ln: "North America and the Caribbean Islands",
                code: "US"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.done();
    },
    
    testDefaultCountry: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("650 654 3210");
        var expected = {
            country: {
                sn: "North America",
                ln: "North America and the Caribbean Islands",
                code: "US"
            },
            area: {
                sn: "California",
                ln: "Central California: San Mateo, Palo Alto, Redwood City, Menlo Park, Mountain View, southern San Francisco suburbs"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    
    },
    
    //for bug NOV-118981
    testNANPInvalidNumber: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("1 234");
        var expected = {
            country: {
                sn: "North America",
                ln: "North America and the Caribbean Islands",
                code: "US"
            },
            area: {
                sn: "Ohio",
                ln: "Ohio"
            }
        };
    
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testDefaultDE: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("06224 123456", {locale: "de-DE"});
        var expected = {
            country: {
                sn: "Deutschland",
                ln: "Deutschland",
                code: "DE"
            },
            area: {
                sn: "Leimen",
                ln: "Leimen, Nußloch, Sandhausen"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'de-DE'});
        var geoInfo = locator.locate(parsed);
        
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testDEMobileNumber: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("017 12345678", {locale: "de-DE"});
        var expected = {
            country: {
                sn: "Deutschland",
                ln: "Deutschland",
                code: "DE"
            },
            area: {
                sn: "Handynummer",
                ln: "Handynummer"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'de-DE'});
        var geoInfo = locator.locate(parsed);
        
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testDEServiceNumber: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("012 12345678", {locale: "de-DE"});
        var expected = {
            country: {
                sn: "Deutschland",
                ln: "Deutschland",
                code: "DE"
            },
            area: {
                sn: "Dienstnummer",
                ln: "Dienstnummer"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'de-DE'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testDEEmergency: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("112", {locale: "de-DE"});
        var expected = {
            country: {
                sn: "Deutschland",
                ln: "Deutschland",
                code: "DE"
            },
            area: {
                sn: "Notrufnummer",
                ln: "Notrufnummer"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'de-DE'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    
    testDELocal: function(test) {
        test.expect(4);
        var parsed = new PhoneNumber("12345678", {locale: 'de-DE'});
        var expected = {
            country: {
                sn: "Deutschland",
                ln: "Deutschland",
                code: "DE"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'de-DE'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.done();
    },
    
    testDefaultHK: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("0663 12345678", {locale: 'en-CN'});
        var expected = {
            country: {
                sn: "中国",
                ln: "中华人民共和国",
                code: "CN"
            },
            area: {
                sn: "揭阳市",
                ln: "揭阳市"
            }
        };
        
        // give the prc mcc number so that this gives the right geo location
        var locator = new PhoneGeoLocator({locale: 'zh-HK', mcc: "460"});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testHKMobileNumber: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("150 05179573", {locale: 'en-CN'});
        var expected = {
            country: {
                sn: "中国",
                ln: "中华人民共和国",
                code: "CN"
            },
            area: {
                sn: "手机号码",
                ln: "手机号码"
            }
        };
    
        // give the prc mcc number so that this gives the right geo location
        var locator = new PhoneGeoLocator({locale: 'zh-HK', mcc: "460"});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testDefaultCN: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("0663 12345678", {locale: 'zh-CN'});
        var expected = {
            country: {
                sn: "中国",
                ln: "中华人民共和国",
                code: "CN"  
            },
            area: {
                sn: "揭阳市",
                ln: "揭阳市"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'zh-CN'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testCNMobileNumber: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("150 05179573", {locale: 'zh-CN'});
        var expected = {
            country: {
                sn: "中国",
                ln: "中华人民共和国",
                code: "CN"
            },
            area: {
                sn: "手机号码",
                ln: "手机号码"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'zh-CN'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testUK: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+44 161 1234567", {locale: 'en-GB'});
        var expected = {
            country: {
                sn: "United Kingdom",
                ln: "United Kingdom, Guernsey, Isle of Man, Jersey",
                code: "GB"
            },
            area: {
                sn: "Manchester",
                ln: "Manchester"
            }
        };
    
        var locator = new PhoneGeoLocator({locale: 'en-GB'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testGB: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+44 161 1234567", {locale: 'en-GB'});
        var expected = {
            country: {
                sn: "United Kingdom",
                ln: "United Kingdom, Guernsey, Isle of Man, Jersey",
                code: "GB"
            },
            area: {
                sn: "Manchester",
                ln: "Manchester"
            }
        };
    
        var locator = new PhoneGeoLocator({locale: 'en-GB'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testUKMobile: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+44 75 12345678", {locale: 'en-GB'});
        var expected = {
            country: {
                sn: "United Kingdom",
                ln: "United Kingdom, Guernsey, Isle of Man, Jersey",
                code: "GB"
            },
            area: {
                sn: "Mobile Number",
                ln: "Mobile Number"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-GB'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testUKService: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+44 303 1234567", {locale: 'en-GB'});
        var expected = {
            country: {
                sn: "United Kingdom",
                ln: "United Kingdom, Guernsey, Isle of Man, Jersey",
                code: "GB"
            },
            area: {
                sn: "Service Number",
                ln: "Service Number"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-GB'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testUKLocal: function(test) {
        test.expect(4);
        var parsed = new PhoneNumber("1234567", {locale: 'en-GB'});
        var expected = {
            country: {
                sn: "United Kingdom",
                ln: "United Kingdom, Guernsey, Isle of Man, Jersey",
                code: "GB"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-GB'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.done();
    },
    
    
    testFR: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+33 1 12 34 56 78");
        var expected = {
            country: {
                sn: "France",
                ln: "France",
                code: "FR"
            },
            area: {
                sn: "Paris",
                ln: "Paris (Île-de-France)"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'fr-FR'});
        var geoInfo = locator.locate(parsed);
        
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testFRMobile: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+33 6 23 45 67 89");
        var expected = {
            country: {
                sn: "France",
                ln: "France",
                code: "FR"
            },
            area: {
                sn: "Numéro de mobile",
                ln: "Numéro de mobile"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'fr-FR'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testFRService: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+33 6 90 12 34 56");
        var expected = {
            country: {
                sn: "France",
                ln: "France",
                code: "FR"
            },
            area: {
                sn: "Numéro de mobile",
                ln: "Numéro de mobile en les Îles de Guadeloupe, Saint-Barthélemy ou Saint-Martin"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'fr-FR'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testFRDepartment: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+33 2 62 12 34 56");
        var expected = {
            country: {
                sn: "France",
                ln: "France",
                code: "FR"
            },
            area: {
                sn: "Réunion",
                ln: "Îles de la Réunion et de Mayotte"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'fr-FR'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testFRFreephone: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+33 800 12 34 56");
        var expected = {
            country: {
                sn: "France",
                ln: "France",
                code: "FR"
            },
            area: {
                sn: "Numéro gratuit",
                ln: "Numéro gratuit (Numéros Verts)"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'fr-FR'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testFRToll: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+33 810 12 34 56");
        var expected = {
            country: {
                sn: "France",
                ln: "France",
                code: "FR"
            },
            area: {
                sn: "Appel payant",
                ln: "Appel payant au tarif local (Numéros Azurs)"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'fr-FR'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testDE: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+49 6224 12 34 56");
        var expected = {
            country: {
                sn: "Deutschland",
                ln: "Deutschland",
                code: "DE"
            },
            area: {
                sn: "Leimen",
                ln: "Leimen, Nußloch, Sandhausen"
            }
        };
    
        var locator = new PhoneGeoLocator({locale: 'de-DE'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testIT: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+39 075 12345678");
        var expected = {
            country: {
                sn: "Italia",
                ln: "Italia, Città del Vaticano",
                code: "IT"
            },
            area: {
                sn: "Perugia",
                ln: "Perugia"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'it-IT'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    // for bug NOV-115337
    testITIntl: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+39 039 12345678");
        var expected = {
            country: {
                sn: "Italia",
                ln: "Italia, Città del Vaticano",
                code: "IT"
            },
            area: {
                sn: "Monza",
                ln: "Monza"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'it-IT'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testITIntlMobile: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+39 390 12345678");
        var expected = {
            country: {
                sn: "Italia",
                ln: "Italia, Città del Vaticano",
                code: "IT"
            },
            area: {
                sn: "Numero cellulare",
                ln: "Numero cellulare"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'it-IT'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testES: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+34 930 123 456");
        var expected = {
            country: {
                sn: "España",
                ln: "España",
                code: "ES"
            },
            area: {
                sn: "Barcelona",
                ln: "Barcelona, Granollers, Mataro, Sabadell-Terrassa"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'es-ES'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testMX: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+52 755 123 4567");
        var expected = {
            country: {
                sn: "Mexico",
                ln: "Mexico",
                code: "MX"
            },
            area: {
                sn: "Guerrero",
                ln: "Ixtapa, Zihuatanejo, Guerrero"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-MX'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testMXLocal: function(test) {
        test.expect(4);
        var parsed = new PhoneNumber("1234 5678");
        var expected = {
            country: {
                sn: "Mexico",
                ln: "Mexico",
                code: "MX"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-MX'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.done();
    },
    
    testAU: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+61 8 9201 2345");
        var expected = {
            country: {
                sn: "Australia",
                ln: "Australia, Isla Christmas, Islas Cocos",
                code: "AU"
            },
            area: {
                sn: "Perth",
                ln: "Wanneroo, Perth North/Northwest"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'es-AU'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testAUMobile: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+61 4201 2345");
        var expected = {
            country: {
                sn: "Australia",
                ln: "Australia, Isla Christmas, Islas Cocos",
                code: "AU"
            },
            area: {
                sn: "Número de móvil",
                ln: "Número de móvil"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'es-AU'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testAUUnknownAreaWithinACity: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+61 2 9120 2343");
        var expected = {
            country: {
                sn: "Australia",
                ln: "Australia, Isla Christmas, Islas Cocos",
                code: "AU"
            },
            area: {
                sn: "Sydney",
                ln: "Sydney"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'es-AU'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testAUUnknownAreaWithinCountry: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+61 3 1234 5678");
        var expected = {
            country: {
                sn: "Australia",
                ln: "Australia, Isla Christmas, Islas Cocos",
                code: "AU"
            },
            area: {
                sn: "Southeast",
                ln: "Southeastern Australia (VIC, TAS)"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'es-AU'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testNZ: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+64 3 9601 2345");
        var expected = {
            country: {
                sn: "Nueva Zelanda",
                ln: "Nueva Zelanda",
                code: "NZ"
            },
            area: {
                sn: "Christchurch",
                ln: "Christchurch"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'es-NZ'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testNZWithDot: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+64 3 2331 2345");
        var expected = {
            country: {
                sn: "Nueva Zelanda",
                ln: "Nueva Zelanda",
                code: "NZ"
            },
            area: {
                sn: "Invercargill",
                ln: "Invercargill"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'es-NZ'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testNZMobile: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+64 21 201 2345");
        var expected = {
            country: {
                sn: "Nueva Zelanda",
                ln: "Nueva Zelanda",
                code: "NZ"
            },
            area: {
                sn: "Número de móvil",
                ln: "Número de móvil"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'es-NZ'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testNZUnknownAreaWithinACity: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+64 9 4620 2343");
        var expected = {
            country: {
                sn: "Nueva Zelanda",
                ln: "Nueva Zelanda",
                code: "NZ"
            },
            area: {
                sn: "Auckland",
                ln: "Auckland and Northland"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'es-NZ'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testNZUnknownAreaWithinCountry: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+64 3 812 345 678");
        var expected = {
            country: {
                sn: "Nueva Zelanda",
                ln: "Nueva Zelanda",
                code: "NZ"
            },
            area: {
                sn: "South Island",
                ln: "South Island, Chatham Islands"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'es-NZ'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testUnknown: function(test) {
        test.expect(4);
        var parsed = new PhoneNumber("+506 20 123 456");
        var expected = {
            country: {
                sn: "Costa Rica",
                ln: "Costa Rica",
                code: "CR"
            }
        };
    
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.done();
    },
    
    testDEMobileIntl: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+49 16 1234 5678");
        var expected = {
            country: {
                sn: "Germany",
                ln: "Germany",
                code: "DE"
            },
            area: {
                sn: "Mobile Number",
                ln: "Mobile Number"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testWithUSMCC: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("650-123-4567");
        var expected = {
            country: {
                sn: "North America",
                ln: "North America and the Caribbean Islands",
                code: "US"
            },
            area: {
                sn: "California",
                ln: "Central California: San Mateo, Palo Alto, Redwood City, Menlo Park, Mountain View, southern San Francisco suburbs"
            }
        };
        
        var locator = new PhoneGeoLocator(parsed, {locale: 'en-US', mcc: '316'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testWithUSMCCNoLocale: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("650-123-4567");
        var expected = {
            country: {
                sn: "North America",
                ln: "North America and the Caribbean Islands",
                code: "US"
            },
            area: {
                sn: "California",
                ln: "Central California: San Mateo, Palo Alto, Redwood City, Menlo Park, Mountain View, southern San Francisco suburbs"
            }
        };
        
        var locator = new PhoneGeoLocator({mcc: '316'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testDEMCCEnglishLocale: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("06224 123 456", {locale: "de-DE"});
        var expected = {
            country: {
                sn: "Germany",
                ln: "Germany",
                code: "DE"
            },
            area: {
                sn: "Leimen",
                ln: "Leimen, Nußloch, Sandhausen"
            }
        };
    
        var locator = new PhoneGeoLocator({locale: 'en-US', mcc: '262'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testDEMCCGermanLocale: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("06224 123 456", {locale: "de-DE"});
        var expected = {
            country: {
                sn: "Deutschland",
                ln: "Deutschland",
                code: "DE"
            },
            area: {
                sn: "Leimen",
                ln: "Leimen, Nußloch, Sandhausen"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'de-DE', mcc: '262'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testDEMCCFrenchLocaleUSCountryCode: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber("+1 650 555 1212");
        var expected = {
            country: {
                sn: "Amérique du Nord",
                ln: "Amérique du Nord et Îles Caraïbes",
                code: "US"
            },
            area: {
                sn: "Californie",
                ln: "Californie centrale : San Mateo, Palo Alto, Redwood City, Menlo Park, Mountain View, banlieues du sud de San Francisco"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'fr-FR', mcc: '262'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testBogusCountryCode: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "P1",
            areaCode: "650",
            subscriberNumber: "5551212",
            destinationPlan: new NumberingPlan({locale: "en-US"}),
            destinationLocale: new PhoneLocale({locale: "en-US"})
        }, {locale: "en-US"});
        var expected = {
            country: {
                sn: "North America",
                ln: "North America and the Caribbean Islands",
                code: "US"
            },
            area: {
                sn: "California",
                ln: "Central California: San Mateo, Palo Alto, Redwood City, Menlo Park, Mountain View, southern San Francisco suburbs"
            }
        };
    
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testBogusAreaCode: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "650P",
            subscriberNumber: "5551212",
            destinationPlan: new NumberingPlan({locale: "en-US"}),
            destinationLocale: new PhoneLocale({locale: "en-US"})
        }, {locale: "en-US"});
        var expected = {
            country: {
                sn: "North America",
                ln: "North America and the Caribbean Islands",
                code: "US"
            },
            area: {
                sn: "California",
                ln: "Central California: San Mateo, Palo Alto, Redwood City, Menlo Park, Mountain View, southern San Francisco suburbs"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    // for bug NOV-115625
    testNumberTooLongUS: function(test) {
        test.expect(4);
        var parsed = new PhoneNumber({
            areaCode: "941",
            subscriberNumber: "62719524"
        }, {locale: "en-US"});
        var expected = {
            country: {
                sn: "North America",
                ln: "North America and the Caribbean Islands",
                code: "US"
            }
        };
    
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.done();
    },
    
    // no fixed length in Germany, so there should not be any numbers that are "too long"
    testNumberTooLongDE: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber({
            areaCode: "6224",
            subscriberNumber: "12345678901234567890"
        }, {locale: "de-DE"});
        var expected = {
            country: {
                sn: "Deutschland",
                ln: "Deutschland",
                code: "DE"
            },
            area: {
                sn: "Leimen",
                ln: "Leimen, Nußloch, Sandhausen"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'de-DE'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);
        test.done();
    },
    
    testInvalidNumberPartial: function(test) {
        test.expect(6);
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "234"
        }, {locale: "en-US"});
        var expected = {
            country: {
                sn: "North America",
                ln: "North America and the Caribbean Islands",
                code: "US"
            },
            area: {
                sn: "Ohio",
                ln: "Ohio"
            }
        };
    
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
        test.ok(typeof(locator) !== "undefined");
    
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.area.sn, expected.area.sn);
        test.equal(geoInfo.area.ln, expected.area.ln);    
        test.done();
    },
    
    testGetCountryCode: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber("+49 6224 12345678901234567890");
        
        var locator = new PhoneGeoLocator();
        country = locator.country(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(country, 'DE');
        test.done();
    },
    
    testGetCountryCode2: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber("+61 2 1234 5678");
        
        var locator = new PhoneGeoLocator();
        country = locator.country(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(country, 'AU');
        test.done();
    },
    
    testGetCountryCodeUndefined: function(test) {
        test.expect(2);
        var locator = new PhoneGeoLocator();
        var geoInfo = locator.country(undefined);
        
        test.ok(typeof(locator) !== "undefined");
        test.ok(typeof(undefined === geoInfo) !== "undefined");
        test.done();
    },
    
    testGetCountryCodeLocalNumber: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "6224",
            subscriberNumber: "12345678901234567890"
        }, {locale: "de-DE"});
        
        var locator = new PhoneGeoLocator({locale: 'de-DE'});
        country = locator.country(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(country, 'DE');
        test.done();
    },
    
    testGetCountryCodeLocalNumberNoLocale: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber({
            areaCode: "905",
            subscriberNumber: "5551212"
        }, {locale: "en-US"});
        
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        country = locator.country(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(country, 'CA');    
        test.done();
    },
    
    testGetCountryCodeLocalNumberNoLocaleDefault: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber({
            areaCode: "650",
            subscriberNumber: "5551212"
        });
        
        var locator = new PhoneGeoLocator();
        country = locator.country(parsed);
        
        test.ok(typeof(locator) !== "undefined");
        test.equal(country, 'US');    
        test.done();
    },
    
    testGetCountryCodeLocalNumberNoAreaCode: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            mobilePrefix: "175",
            subscriberNumber: "12345678"
        }, {locale: "de-DE"});
        
        var locator = new PhoneGeoLocator({locale: 'de-DE'});
        country = locator.country(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(country, 'DE');    
        test.done();
    },
    
    testGetCountryCodeHaveCountryButNoAreaCode: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "49",
            mobilePrefix: "175",
            subscriberNumber: "12345678"
        }, {locale: "de-DE"});
        
        var locator = new PhoneGeoLocator({locale: 'de-DE'});
        country = locator.country(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(country, 'DE');    
        test.done();
    },
    
    testGetCountryCodeHaveCountryButNoAreaCodeFR: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "33",
            mobilePrefix: "6",
            subscriberNumber: "12345678"
        });
        
        var locator = new PhoneGeoLocator({locale: 'fr-FR'});
        country = locator.country(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(country, 'FR');
        test.done();
    },
    
    testGetCountryCodeUS: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "408",
            subscriberNumber: "5551212"
        });
        
        var locator = new PhoneGeoLocator();
        country = locator.country(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(country, 'US');
        test.done();
    },
    
    testGetCountryCodeCA: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "705",
            subscriberNumber: "5551212"
        });
        
        var locator = new PhoneGeoLocator();
        country = locator.country(parsed);    
        
        test.ok(typeof(locator) !== "undefined");
        test.equal(country, 'CA');
        test.done();
    },
    
    testGetCountryCodeCaribbean: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "876",
            subscriberNumber: "5551212"
        });
        
        var locator = new PhoneGeoLocator(parsed);
        country = locator.country(parsed);
    
        test.ok(typeof(locator) !== "undefined");    
        test.equal(country, 'JM');
        test.done();
    },
    
    testGetCountryCodeCaribbean2: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "284",
            subscriberNumber: "5551212"
        });
        
        var locator = new PhoneGeoLocator();
        country = locator.country(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(country, 'VG');
        test.done();
    },
    
    testGetCountryCodeItalySanMarino: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "39",
            trunkAccess: "0",
            areaCode: "549",
            subscriberNumber: "87654321"
        });
        
        var locator = new PhoneGeoLocator();
        country = locator.country(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(country, 'SM');
        test.done();
    },
    
    testGetCountryCodeItalyRome: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "39",
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "87654321"
        });
        
        var locator = new PhoneGeoLocator();
        country = locator.country(parsed);
        
        test.ok(typeof(locator) !== "undefined");
        test.equal(country, 'IT');
        test.done();
    },
    
    testGetCountryCodeFranceParis: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "33",
            trunkAccess: "0",
            areaCode: "1",
            subscriberNumber: "87654321"
        });
        
        var locator = new PhoneGeoLocator();
        country = locator.country(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(country, 'FR');
        test.done();
    },
    
    testGetCountryCodeFranceReunion: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "33",
            trunkAccess: "0",
            serviceCode: "262",
            subscriberNumber: "654321"
        });
        
        var locator = new PhoneGeoLocator();
        country = locator.country(parsed);
        
        test.ok(typeof(locator) !== "undefined");
        test.equal(country, 'RE');        
        test.done();
    },
    
    testGetCountryCodeFranceMartinique: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "33",
            trunkAccess: "0",
            serviceCode: "596",
            subscriberNumber: "654321"
        });
        
        var locator = new PhoneGeoLocator();
        country = locator.country(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(country, 'MQ');    
        test.done();
    },
    
    // for bug NOV-118981
    testInvalidNumber: function(test) {
        test.expect(2);
        var country;
        var parsed = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "234"
        });
        
        var locator = new PhoneGeoLocator();
        country = locator.country(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(country, 'US');    
        test.done();
    },
    
    testSG: function(test) {
        test.expect(4);
        var parsed = new PhoneNumber("+65 2543 2102");
        var expected = {
            country: {
                sn: "Singapore",
                ln: "Republic of Singapore",
                code: "SG"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
        
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.done();
    },
    
    testSGLocal: function(test) {
        test.expect(4);
        var parsed = new PhoneNumber("25432102", {locale: "en-SG"});
        var expected = {
            country: {
                sn: "Singapore",
                ln: "Republic of Singapore",
                code: "SG"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-SG'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.done();
    },
    
    testSGMobile: function(test) {
        test.expect(4);
        var parsed = new PhoneNumber("65432102", {locale: "en-SG"});
        var expected = {
            country: {
                sn: "Singapore",
                ln: "Republic of Singapore",
                code: "SG"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-SG'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.done();
    },
    
    testHK: function(test) {
        test.expect(4);
        var parsed = new PhoneNumber("+852 2543 2102");
        var expected = {
            country: {
                sn: "Hong Kong",
                ln: "Hong Kong",
                code: "HK"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-US'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.done();
    },
    
    testHKLocal: function(test) {
        test.expect(4);
        var parsed = new PhoneNumber("2543 2102", {locale: "en-HK"});
        var expected = {
            country: {
                sn: "Hong Kong",
                ln: "Hong Kong",
                code: "HK"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-HK'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.done();
    },
    
    testHKMobile: function(test) {
        test.expect(4);
        var parsed = new PhoneNumber("6543 2102", {locale: "en-HK"});
        var expected = {
            country: {
                sn: "Hong Kong",
                ln: "Hong Kong",
                code: "HK"
            }
        };
        
        var locator = new PhoneGeoLocator({locale: 'en-HK'});
        var geoInfo = locator.locate(parsed);
    
        test.ok(typeof(locator) !== "undefined");
        test.equal(geoInfo.country.code, expected.country.code);
        test.equal(geoInfo.country.ln, expected.country.ln);
        test.equal(geoInfo.country.sn, expected.country.sn);
        test.done();
    },
    
    testPhoneGeoLoadLocaleDataSynch: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
    
        var parsed = new PhoneNumber("+1 650 654 3210");
    
        var expected = {
            country: {
                sn: "North America",
                ln: "North America and the Caribbean Islands",
                code: "US"
            },
            area: {
                sn: "California",
                ln: "Central California: San Mateo, Palo Alto, Redwood City, Menlo Park, Mountain View, southern San Francisco suburbs"
            }
        };
    
        var oldLoader = ilib._load;
        ilib.setLoaderCallback(mockLoaderGeo);
    
        var locator = new PhoneGeoLocator({locale: 'en-US',
            sync: false,
            onLoad: function (loc) {
        test.expect(3);
                test.ok(loc !== null);
            }
        });
    
        ilib.setLoaderCallback(oldLoader);
        test.ok(locator !== null);
        var geoInfo = locator.locate(parsed);
        test.deepEqual(geoInfo, expected);
        test.done();
    }
    
};