/*
 * phonenum.js - test phonenumber class
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
if (typeof(PhoneHandlerFactory) === "undefined") {
    var PhoneHandlerFactory = require("../.././../lib/PhoneHandlerFactory.js");
}
function mockLoaderPhoneNum(paths, sync, params, callback) {
    var data = [];
    
    data.push(ilib.data.states); // for the generic, shared stuff
    data.push(ilib.data.states_US);
    data.push(ilib.data.states_FR);
    
    if (typeof(callback) !== 'undefined') {
        callback.call(this, data);    
    }
    return data;
}

var lookAheadStates = {
    "s": [
        0,
        0,
        0,
        0,
        {    // 4 -> area
            "l": 7,
            "s": [
                0,
                0,
                0,
                0,
                0,
                { // 45 -> area
                    "l": 7,
                    "s": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        7    // 456 -> area
                    ]
                },
                {  // 46
                    "s": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        { // 465
                            "s": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                { // 4655
                                    "s": [
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        7    // 46555 -> area
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        { // ^
            "s": [
                12 // ^0 -> trunk
            ]
        }
    ]
};


if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

var oldLoader = ilib._load;

module.exports.phonenum = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    
    tearDown: function(callback) {
        ilib._load = oldLoader;
        callback();
    },

    testNumberMatchFRDepartments1: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testStringsNumberMatchUSIgnoreSomeFields: function(test) {
        test.expect(2);
        var left = new PhoneNumber('1 (650) 456-7890'),
            right = new PhoneNumber('650-456-7890');
        test.ok(typeof(left) !== "undefined");
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testNumberMatchFRDepartments2: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testNumberMatchFRDepartments3: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testNumberMatchFRDepartments1Reverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        
        test.equal(right.compare(left), 100);
        test.done();
    },
    
    testNumberMatchFRDepartmentsWrongArea: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "591",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        
        test.equal(left.compare(right), 0);
        test.done();
    },
    
    testNumberMatchFRDepartmentsWrongAreaReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "591",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        
        test.equal(right.compare(left), 0);
        test.done();
    },
    
    testNumberMatchFRDepartmentsDifferentCountryCodes: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        var right = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "33",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testNumberMatchFRDifferentSN: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "590",
            subscriberNumber: "123454"
        }, {locale: "fr-FR"});
        
        test.equal(left.compare(right), 0);    
        test.done();
    },
    
    testNumberMatchUSTrunk: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "en-US"});
        
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testNumberMatchUSTrunkReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "en-US"});
        
        test.equal(right.compare(left), 100);
        test.done();
    },
    
    testNumberMatchUSTrunkDefaultLocale: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "590",
            subscriberNumber: "1234567"
        });
        var right = new PhoneNumber({
            areaCode: "590",
            subscriberNumber: "1234567"
        });
        
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testNumberMatchUSTrunkDefaultLocaleReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "590",
            subscriberNumber: "1234567"
        });
        var right = new PhoneNumber({
            areaCode: "590",
            subscriberNumber: "1234567"
        });
        
        test.equal(right.compare(left), 100);
        test.done();
    },
    
    testNumberMatchUSTrunkWrongLocale: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "fr-FR"});
        var right = new PhoneNumber({
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "fr-FR"});
        
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testNumberMatchUSTrunkWrongLocaleReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "fr-FR"});
        var right = new PhoneNumber({
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "fr-FR"});
        
        test.equal(right.compare(left), 100);
        test.done();
    },
    
    testNumberMatchUSMissingArea: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            subscriberNumber: "1234567"
        }, {locale: "en-US"});
        
        test.equal(left.compare(right), 88);
        test.done();
    },
    
    testNumberMatchUSMissingAreaReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            subscriberNumber: "1234567"
        }, {locale: "en-US"});
        
        test.equal(right.compare(left), 88);
        test.done();
    },
    
    testNumberMatchUSDifferentArea: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            areaCode: "407",
            subscriberNumber: "1234567"
        }, {locale: "en-US"});
        
        test.equal(left.compare(right), 0);
        test.done();
    },
    
    testNumberMatchUSDifferentAreaReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            areaCode: "407",
            subscriberNumber: "1234567"
        }, {locale: "en-US"});
        
        test.equal(right.compare(left), 0);
        test.done();
    },
    
    testNumberMatchUSCompletelyDifferentCountryCodes: function(test) {
        test.expect(1);
        // different area codes, where neither is the US
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "30",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "34",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "en-US"});
        
        test.equal(left.compare(right), 0);
        test.done();
    },
    
    testNumberMatchUSMissingCountryCodeThisCountry: function(test) {
        test.expect(1);
        // missing area code, where the one that is present is the same as the locale
        var left = new PhoneNumber({
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "es-ES"});
        var right = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "34",
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "es-ES"});
        
        test.equal(left.compare(right), 84);
        test.done();
    },
    
    testNumberMatchUSMissingCountryCodeThisCountryReverse: function(test) {
        test.expect(1);
        // missing area code, where the one that is present is the same as the locale
        var left = new PhoneNumber({
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "es-ES"});
        var right = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "34",
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "es-ES"});
        
        test.equal(right.compare(left), 84);
        test.done();
    },
    
    testNumberMatchUSMissingCountryCodeOtherCountry: function(test) {
        test.expect(1);
        // missing area codes, where the one that is present is not the same as the current locale (US)
        var left = new PhoneNumber({
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "34",
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "en-US"});
        
        test.equal(left.compare(right), 68);
        test.done();
    },
    
    testNumberMatchUSMissingCountryCodeOtherCountryReverse: function(test) {
        test.expect(1);
        // missing area codes, where the one that is present is not the same as the current locale (US)
        var left = new PhoneNumber({
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "34",
            areaCode: "590",
            subscriberNumber: "1234567"
        }, {locale: "en-US"});
        
        test.equal(right.compare(left), 68);
        test.done();
    },
    
    testNumberMatchITSanMarino: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            countryCode: "378",
            trunkAccess: "0",
            areaCode: "378",
            subscriberNumber: "123456"
        }, {locale: "it-IT"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "378",
            subscriberNumber: "123456"
        }, {locale: "it-IT"});
        
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testNumberMatchITSanMarinoReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            countryCode: "378",
            trunkAccess: "0",
            areaCode: "378",
            subscriberNumber: "123456"
        }, {locale: "it-IT"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "378",
            subscriberNumber: "123456"
        }, {locale: "it-IT"});
        
        test.equal(right.compare(left), 100);
        test.done();
    },
    
    testNumberMatchUSSanMarino: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            countryCode: "378",
            trunkAccess: "0",
            areaCode: "378",
            subscriberNumber: "123456"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "378",
            subscriberNumber: "123456"
        }, {locale: "en-US"});
    
        // only a 100% match if calling from inside of italy
        test.equal(left.compare(right), 68);
        test.done();
    },
    
    testNumberMatchITSanMarinoWrongArea: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            countryCode: "378",
            trunkAccess: "0",
            areaCode: "374",
            subscriberNumber: "123456"
        }, {locale: "it-IT"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "378",
            subscriberNumber: "123456"
        }, {locale: "it-IT"});
        
        test.equal(left.compare(right), 0);
        test.done();
    },
    
    testNumberMatchITSanMarinoDifferentCountryCodes: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "378",
            trunkAccess: "0",
            areaCode: "378",
            subscriberNumber: "123456"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "39",
            trunkAccess: "0",
            areaCode: "378",
            subscriberNumber: "123456"
        }, {locale: "en-US"});
        
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testNumberMatchITSanMarinoDifferentCountryCodesReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "378",
            trunkAccess: "0",
            areaCode: "378",
            subscriberNumber: "123456"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "39",
            trunkAccess: "0",
            areaCode: "378",
            subscriberNumber: "123456"
        }, {locale: "en-US"});
        
        test.equal(right.compare(left), 100);
        test.done();
    },
    
    testNumberMatchITSanMarinoDifferentCountryCodesDiffAreaCodes: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "378",
            trunkAccess: "0",
            areaCode: "378",
            subscriberNumber: "123456"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "39",
            trunkAccess: "0",
            areaCode: "374",
            subscriberNumber: "123456"
        }, {locale: "en-US"});
        
        test.equal(left.compare(right), 0);
        test.done();
    },
    
    testNumberMatchITVaticanCity: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "379",
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "69812345"
        }, {locale: "it-IT"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "69812345"
        }, {locale: "it-IT"});
        
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testNumberMatchITVaticanCityReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "379",
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "69812345"
        }, {locale: "it-IT"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "69812345"
        }, {locale: "it-IT"});
        
        test.equal(right.compare(left), 100);
        test.done();
    },
    
    testNumberMatchITOther: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "69812345"
        }, {locale: "it-IT"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "69812345"
        }, {locale: "it-IT"});
        
        test.equal(left.compare(right), 84);
        test.done();
    },
    
    testNumberMatchITOtherReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "69812345"
        }, {locale: "it-IT"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "69812345"
        }, {locale: "it-IT"});
        
        test.equal(right.compare(left), 84);
        test.done();
    },
    
    testNumberMatchUSDifferentCountryCodesIT: function(test) {
        test.expect(1);
        // both ways are valid ways to reach the Vatican from abroad
        var left = new PhoneNumber({
            countryCode: "379",
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "69812345"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            countryCode: "39",
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "69812345"
        }, {locale: "en-US"});
        
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testNumberMatchUSDifferentCountryCodesITReverse: function(test) {
        test.expect(1);
        // both ways are valid ways to reach the Vatican from abroad
        var left = new PhoneNumber({
            countryCode: "379",
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "69812345"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            countryCode: "39",
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "69812345"
        }, {locale: "en-US"});
        
        test.equal(right.compare(left), 100);
        test.done();
    },
    
    testNumberMatchUSDifferentCountryCodesFR: function(test) {
        test.expect(1);
        // both ways are valid ways to reach the departments from abroad
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "33",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "en-US"});
        
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testNumberMatchUSDifferentCountryCodesFRReverse: function(test) {
        test.expect(1);
        // both ways are valid ways to reach the departments from abroad
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "33",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "en-US"});
        
        test.equal(right.compare(left), 100);
        test.done();
    },
    
    testNumberMatchDEMissingExtension: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2203",
            subscriberNumber: "123456"
        }, {locale: "de-DE"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2203",
            subscriberNumber: "123456",
            extension: "789"
        }, {locale: "de-DE"});
        
        test.equal(left.compare(right), 0);
        test.done();
    },
    
    testNumberMatchDEMissingExtensionReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2203",
            subscriberNumber: "123456"
        }, {locale: "de-DE"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2203",
            subscriberNumber: "123456",
            extension: "789"
        }, {locale: "de-DE"});
        
        test.equal(right.compare(left), 0);
        test.done();
    },
    
    testNumberMatchDEDifferentExtension: function(test) {
        test.expect(1);
        var location;
        var left = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2203",
            subscriberNumber: "123456",
            extension: "833"
        }, {locale: "de-DE"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2203",
            subscriberNumber: "123456",
            extension: "789"
        }, {locale: "de-DE"});
        
        test.equal(left.compare(right), 0);
        test.done();
    },
    
    testNumberMatchUSEverythingDifferent: function(test) {
        test.expect(1);
        var location;
        var left = new PhoneNumber({
            trunkAccess: "0",
            countryCode: "49",
            areaCode: "2203",
            subscriberNumber: "123456",
            extension: "833"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "650",
            subscriberNumber: "7654321"
        }, {locale: "en-US"});
        
        test.equal(left.compare(right), 0);
        test.done();
    },
    
    testNumberMatchCAUseNanpRules: function(test) {
        test.expect(1);
        var location;
        var left = new PhoneNumber({
            areaCode: "416",
            subscriberNumber: "1234567"
        }, {locale: "en-CA"});
        var right = new PhoneNumber({
            trunkAccess: "1",
            areaCode: "416",
            subscriberNumber: "1234567"
        }, {locale: "en-CA"});
        
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    // for bug NOV-116615
    testNumberMatchMobileVsLDNumber: function(test) {
        test.expect(1);
        var location;
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            mobilePrefix: "7734",
            subscriberNumber: "345345"
        }, {locale: "en-gb"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "1483",
            subscriberNumber: "345345"
        }, {locale: "en-gb"});
        
        test.equal(left.compare(right), 0);
        test.done();
    },
    
    //for bug NOV-118901
    
    testNumberMatchSG: function(test) {
        test.expect(1);
        var location;
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "65",
            subscriberNumber: "93897077"
        }, {locale: "en-SG"});
        var right = new PhoneNumber({
            subscriberNumber: "93897077"
        }, {locale: "en-SG"});
        
        test.equal(left.compare(right), 84);
        test.done();
    },
    
    testNumberMatchSGWrongLocale: function(test) {
        test.expect(1);
        var location;
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "65",
            subscriberNumber: "93897077"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            subscriberNumber: "93897077"
        }, {locale: "en-US"});
        
        test.equal(left.compare(right), 68);
        test.done();
    },
    
    testStringsNumberMatchITSanMarinoDifferentCountryCodes: function(test) {
        test.expect(1);
        var left = new PhoneNumber('+378 0549 123 456', {locale: "en-US"}),
            right = new PhoneNumber('+39 0549 123 456', {locale: "en-US"});
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testStringsNumberMatchITSanMarinoMissingCountryCodes: function(test) {
        test.expect(1);
        var left = new PhoneNumber('+378 0549 123 456', {locale: "it-IT"}),
            right = new PhoneNumber('0549 123 456', {locale: "it-IT"});
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testStringsNumberMatchITSanMarinoDifferentCountryCodesDiffAreaCodes: function(test) {
        test.expect(1);
        var left = new PhoneNumber('+378 0548 123 456', {locale: "en-US"}),
            right = new PhoneNumber('+39 0545 123 456', {locale: "en-US"});
        test.equal(left.compare(right), 0);
        test.done();
    },
    
    testStringsNumberMatchITOther: function(test) {
        test.expect(1);
        var left = new PhoneNumber('+39 06 69812345', {locale: "it-IT"}),
            right = new PhoneNumber('06-69812345', {locale: "it-IT"});
        test.equal(left.compare(right), 84);
        test.done();
    },
    
    testStringsNumberMatchFRDepartments1: function(test) {
        test.expect(1);
        var left = new PhoneNumber('+590 590 123 456', {locale: "fr-FR"}),
            right = new PhoneNumber('0590 123 456', {locale: "fr-FR"});
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testStringsNumberMatchDEMissingExtension: function(test) {
        test.expect(1);
        var left = new PhoneNumber('02203 123456', {locale: "de-DE"}),
            right = new PhoneNumber('02203 123456-789', {locale: "de-DE"});
        test.equal(left.compare(right), 0);
        test.done();
    },
    
    testStringsNumberMatchDEDifferentExtension: function(test) {
        test.expect(1);
        var left = new PhoneNumber('02203/123456-833', {locale: "de-DE"}),
            right = new PhoneNumber('02203 123456-789', {locale: "de-DE"});
        test.equal(left.compare(right), 0);
        test.done();
    },
    
    testStringsNumberMatchUSIgnoreSomeFieldsReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber('650-456-7890', {locale: "en-US"}),
            right = new PhoneNumber('1 (650) 456-7890', {locale: "en-US"});
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testStringsNumberMatchITSanMarinoDifferentCountryCodesReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber('+39 0549 123 456', {locale: "en-US"}),
            right = new PhoneNumber('+378 0549 123 456', {locale: "en-US"});
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testStringsNumberMatchITSanMarinoMissingCountryCodesReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber('0549 123 456', {locale: "it-IT"}),
            right = new PhoneNumber('+378 0549 123 456', {locale: "it-IT"});
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testStringsNumberMatchITSanMarinoDifferentCountryCodesDiffAreaCodesReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber('+39 0545 123 456', {locale: "en-US"}),
            right = new PhoneNumber('+378 0548 123 456', {locale: "en-US"});
        test.equal(left.compare(right), 0);
        test.done();
    },
    
    testStringsNumberMatchITOtherReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber('06-69812345', {locale: "it-IT"}),
            right = new PhoneNumber('+39 06 69812345', {locale: "it-IT"});
        test.equal(left.compare(right), 84);
        test.done();
    },
    
    testStringsNumberMatchFRDepartments1Reverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber('0590 123 456', {locale: "fr-FR"}),
            right = new PhoneNumber('+590 590 123 456', {locale: "fr-FR"});
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testStringsNumberMatchDEMissingExtensionReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber('02203 123456-789', {locale: "de-DE"}),
            right = new PhoneNumber('02203 123456', {locale: "de-DE"});
        test.equal(left.compare(right), 0);
        test.done();
    },
    
    testStringsNumberMatchDEDifferentExtensionReverse: function(test) {
        test.expect(1);
        var left = new PhoneNumber('02203 123456-789', {locale: "de-DE"}),
            right = new PhoneNumber('02203/123456-833', {locale: "de-DE"});
        test.equal(left.compare(right), 0);    
        test.done();
    },
    
    
    testEqualsNotEqual: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        
        test.ok(!left.equals(right));
        test.done();
    },
    
    testEquals: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        var right = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        
        test.ok(left.equals(right));
        test.done();
    },
    
    testEqualsDifferentLocaleOkay: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        
        // same number because they have the country code
        test.ok(left.equals(right));    
        test.done();
    },
    
    testEqualsDifferentLocaleNotOkay: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "en-US"});
        var right = new PhoneNumber({
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        
        // same local number, but different country
        test.ok(!left.equals(right));
        test.done();
    },
    
    testEqualsMissingLocaleLeft: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        });
        var right = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        
        test.ok(left.equals(right));
        test.done();
    },
    
    testEqualsMissingLocaleRight: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        var right = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        });
        
        test.ok(left.equals(right));
        test.done();
    },
    
    testEqualsMissingLocaleBoth: function(test) {
        test.expect(1);
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        });
        var right = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        });
    
        test.ok(left.equals(right));
        test.done();
    },
    
    testPhoneNumLoadLocaleDataSynch: function(test) {
        if (ilib.isDynData()) {
            // don't need to test loading on the dynamic load version because we are testing
            // it via all the other tests already.
            test.done();
            return;
        }
        
        var oldLoader = ilib._load;
        ilib.setLoaderCallback(mockLoaderPhoneNum);
    
        var left = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "590",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR",
            sync: false});
        var right = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "590",
            subscriberNumber: "123456"
        }, {locale: "fr-FR", 
            sync: false});
    
        ilib.setLoaderCallback(oldLoader);
        
        test.expect(1);
        test.equal(left.compare(right), 100);
        test.done();
    },
    
    testPhoneNumLookaheadRoot: function(test) {
        test.expect(2);
        var left = new PhoneNumber("0", {locale: "XX"});
        
        left.trunkAccess = undefined;
        left.areaCode = undefined;
        
        // use custom states data to test lookahead parsing
        var regionData = {
            stateData: lookAheadStates,
            plan: left.plan,
            handler: PhoneHandlerFactory(left.locale, left.plan)
        };
        
        left._parseNumber("^04", regionData, {sync: true});
        
        test.equal(left.trunkAccess, "0");
        test.equal(left.areaCode, "4");
        test.done();
    },
    
    testPhoneNumLookaheadSubleaf1: function(test) {
        test.expect(2);
        var left = new PhoneNumber("0", {locale: "XX"});
        
        left.trunkAccess = undefined;
        left.areaCode = undefined;
        
        // use custom states data to test lookahead parsing
        var regionData = { 
            stateData: lookAheadStates,
            plan: left.plan,
            handler: PhoneHandlerFactory(left.locale, left.plan)
        };
        
        left._parseNumber("^045", regionData, {sync: true});
        
        test.equal(left.trunkAccess, "0");
        test.equal(left.areaCode, "45");
        test.done();
    },
    
    testPhoneNumLookaheadSubleaf2: function(test) {
        test.expect(2);
        var left = new PhoneNumber("0", {locale: "XX"});
        
        left.trunkAccess = undefined;
        left.areaCode = undefined;
        
        // use custom states data to test lookahead parsing
        var regionData = { 
            stateData: lookAheadStates,
            plan: left.plan,
            handler: PhoneHandlerFactory(left.locale, left.plan)
        };
        
        left._parseNumber("^0456", regionData, {sync: true});
        
        test.equal(left.trunkAccess, "0");
        test.equal(left.areaCode, "456");
        test.done();
    },
    
    testPhoneNumLookaheadSubleaf3: function(test) {
        test.expect(2);
        var left = new PhoneNumber("0", {locale: "XX"});
        
        left.trunkAccess = undefined;
        left.areaCode = undefined;
        
        // use custom states data to test lookahead parsing
        var regionData = { 
            stateData: lookAheadStates,
            plan: left.plan,
            handler: PhoneHandlerFactory(left.locale, left.plan)
        };
        
        left._parseNumber("^046555", regionData, {sync: true});
        
        test.equal(left.trunkAccess, "0");
        test.equal(left.areaCode, "46555");
        test.done();
    },
    
    testPhoneNumLookaheadFallback1: function(test) {
        test.expect(3);
        var left = new PhoneNumber("0", {locale: "XX"});
        
        left.trunkAccess = undefined;
        left.areaCode = undefined;
        left.subscriberNumber = undefined;
        
        // use custom states data to test lookahead parsing
        var regionData = { 
            stateData: lookAheadStates,
            plan: left.plan,
            handler: PhoneHandlerFactory(left.locale, left.plan)
        };
        
        left._parseNumber("^047", regionData, {sync: true});
        
        test.equal(left.trunkAccess, "0");
        test.equal(left.areaCode, "4");
        test.equal(left.subscriberNumber, "7");
        test.done();
    },
    
    testPhoneNumLookaheadFallback2: function(test) {
        test.expect(3);
        var left = new PhoneNumber("0", {locale: "XX"});
        
        left.trunkAccess = undefined;
        left.areaCode = undefined;
        left.subscriberNumber = undefined;
        
        // use custom states data to test lookahead parsing
        var regionData = { 
            stateData: lookAheadStates,
            plan: left.plan,
            handler: PhoneHandlerFactory(left.locale, left.plan)
        };
        
        left._parseNumber("^046", regionData, {sync: true});
        
        test.equal(left.trunkAccess, "0");
        test.equal(left.areaCode, "4");
        test.equal(left.subscriberNumber, "6");
        test.done();
    },
    
    testPhoneNumLookaheadFallback3: function(test) {
        test.expect(3);
        var left = new PhoneNumber("0", {locale: "XX"});
        
        left.trunkAccess = undefined;
        left.areaCode = undefined;
        left.subscriberNumber = undefined;
        
        // use custom states data to test lookahead parsing
        var regionData = { 
            stateData: lookAheadStates,
            plan: left.plan,
            handler: PhoneHandlerFactory(left.locale, left.plan)
        };
        
        left._parseNumber("^04655", regionData, {sync: true});
        
        test.equal(left.trunkAccess, "0");
        test.equal(left.areaCode, "4");
        test.equal(left.subscriberNumber, "655");
        test.done();
    },
    
    testPhoneNumLookaheadFallback4: function(test) {
        test.expect(3);
        var left = new PhoneNumber("0", {locale: "XX"});
        
        left.trunkAccess = undefined;
        left.areaCode = undefined;
        left.subscriberNumber = undefined;
        
        // use custom states data to test lookahead parsing
        var regionData = { 
            stateData: lookAheadStates,
            plan: left.plan,
            handler: PhoneHandlerFactory(left.locale, left.plan)
        };
        
        left._parseNumber("^0457", regionData, {sync: true});
        
        test.equal(left.trunkAccess, "0");
        test.equal(left.areaCode, "45");
        test.equal(left.subscriberNumber, "7");
        test.done();
    },
    
    testPhoneNumLookaheadFallback5: function(test) {
        test.expect(3);
        var left = new PhoneNumber("0", {locale: "XX"});
        
        left.trunkAccess = undefined;
        left.areaCode = undefined;
        left.subscriberNumber = undefined;
        
        // use custom states data to test lookahead parsing
        var regionData = { 
            stateData: lookAheadStates,
            plan: left.plan,
            handler: PhoneHandlerFactory(left.locale, left.plan)
        };
        
        left._parseNumber("^0477", regionData, {sync: true});
        
        test.equal(left.trunkAccess, "0");
        test.equal(left.areaCode, "4");
        test.equal(left.subscriberNumber, "77");
        test.done();
    }
    
};