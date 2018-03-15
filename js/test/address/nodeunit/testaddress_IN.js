/*
 * testaddress_IN.js - test the address parsing and formatting routines
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
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testaddress_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressINHINormal: function(test) {
        test.expect(7);
       var parsedAddress = new Address("१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू\nकोलकाता\nपश्चिम बंगाल\n७०००१७\nभारत", {locale: 'hi-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू");
        test.equal(parsedAddress.locality, "कोलकाता");
        test.equal(parsedAddress.region, "पश्चिम बंगाल");
        test.equal(parsedAddress.postalCode, "७०००१७");
        test.equal(parsedAddress.country, "भारत");
        test.equal(parsedAddress.countryCode, "IN");
        test.done();
    },
    
    
    testParseAddressINGUNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("125/1, એજી ટાવર્સ. 3 જો માળ, પાર્ક સ્ટ્રીટ. સર્કસ એવન્યુ\nકોલકાતા\nપશ્ચિમ બંગાળ\nભારત", {locale: 'gu-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "125/1, એજી ટાવર્સ. 3 જો માળ, પાર્ક સ્ટ્રીટ. સર્કસ એવન્યુ");
        test.equal(parsedAddress.locality, "કોલકાતા");
        test.equal(parsedAddress.region, "પશ્ચિમ બંગાળ");
        test.equal(parsedAddress.country, "ભારત");
        test.equal(parsedAddress.countryCode, "IN");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressINKNNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("125/1, ಎಜಿ ಟವರ್ಸ್. 3 ನೇ ಮಹಡಿ, ಪಾರ್ಕ್ ಸ್ಟ್ರೀಟ್. ಸರ್ಕಸ್ ಅವೆನ್ಯೂ\nಕಲ್ಕತ್ತಾ\nಪಶ್ಚಿಮ ಬಂಗಾಳ\nಭಾರತ", {locale: 'kn-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "125/1, ಎಜಿ ಟವರ್ಸ್. 3 ನೇ ಮಹಡಿ, ಪಾರ್ಕ್ ಸ್ಟ್ರೀಟ್. ಸರ್ಕಸ್ ಅವೆನ್ಯೂ");
        test.equal(parsedAddress.locality, "ಕಲ್ಕತ್ತಾ");
        test.equal(parsedAddress.region, "ಪಶ್ಚಿಮ ಬಂಗಾಳ");
        test.equal(parsedAddress.country, "ಭಾರತ");
        test.equal(parsedAddress.countryCode, "IN");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressINKNNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("125/1, ಎಜಿ ಟವರ್ಸ್. 3 ನೇ ಮಹಡಿ, ಪಾರ್ಕ್ ಸ್ಟ್ರೀಟ್. ಸರ್ಕಸ್ ಅವೆನ್ಯೂ\nಕಲ್ಕತ್ತಾ\nಪಶ್ಚಿಮ ಬಂಗಾಳ\nಭಾರತ", {locale: 'kn-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "125/1, ಎಜಿ ಟವರ್ಸ್. 3 ನೇ ಮಹಡಿ, ಪಾರ್ಕ್ ಸ್ಟ್ರೀಟ್. ಸರ್ಕಸ್ ಅವೆನ್ಯೂ");
        test.equal(parsedAddress.locality, "ಕಲ್ಕತ್ತಾ");
        test.equal(parsedAddress.region, "ಪಶ್ಚಿಮ ಬಂಗಾಳ");
        test.equal(parsedAddress.country, "ಭಾರತ");
        test.equal(parsedAddress.countryCode, "IN");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressINMRNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("125/1, एजी टॉवर्स. 3 रा मजला, पार्क स्ट्रीट. सर्कस ऍव्हेन्यू\nकलकत्ता\nपश्चिम बंगाल\nभारत", {locale: 'mr-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "125/1, एजी टॉवर्स. 3 रा मजला, पार्क स्ट्रीट. सर्कस ऍव्हेन्यू");
        test.equal(parsedAddress.locality, "कलकत्ता");
        test.equal(parsedAddress.region, "पश्चिम बंगाल");
        test.equal(parsedAddress.country, "भारत");
        test.equal(parsedAddress.countryCode, "IN");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressINTENoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("125/1, AG టవర్స్. 3 వ అంతస్తు, పార్క్ స్ట్రీట్. సర్కస్ ఎవెన్యూ \nకలకత్తా \nవెస్ట్ బెంగాల్\nభారత దేశం", {locale: 'te-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "125/1, AG టవర్స్. 3 వ అంతస్తు, పార్క్ స్ట్రీట్. సర్కస్ ఎవెన్యూ");
        test.equal(parsedAddress.locality, "కలకత్తా");
        test.equal(parsedAddress.region, "వెస్ట్ బెంగాల్");
        test.equal(parsedAddress.country, "భారత దేశం");
        test.equal(parsedAddress.countryCode, "IN");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressINTANoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("125/1, ஏஜி டவர்ஸ். 3 வது மாடி, பார்க் தெரு. சர்க்கஸ் அவென்யூ\nகல்கத்தா\nமேற்கு வங்காளம்\nஇந்தியா", {locale: 'ta-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "125/1, ஏஜி டவர்ஸ். 3 வது மாடி, பார்க் தெரு. சர்க்கஸ் அவென்யூ");
        test.equal(parsedAddress.locality, "கல்கத்தா");
        test.equal(parsedAddress.region, "மேற்கு வங்காளம்");
        test.equal(parsedAddress.country, "இந்தியா");
        test.equal(parsedAddress.countryCode, "IN");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressINBNMRNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("125/1, এজি টাওয়ার্স. 3 য় তল, পার্ক স্ট্রীট. সার্কাস অ্যাভিনিউ\nকলকাতা\nপশ্চিম বঙ্গ\nভারত", {locale: 'bn-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "125/1, এজি টাওয়ার্স. 3 য় তল, পার্ক স্ট্রীট. সার্কাস অ্যাভিনিউ");
        test.equal(parsedAddress.locality, "কলকাতা");
        test.equal(parsedAddress.region, "পশ্চিম বঙ্গ");
        test.equal(parsedAddress.country, "ভারত");
        test.equal(parsedAddress.countryCode, "IN");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressINHINoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("125/1، اےجي ٹاورز. 3 فلور، پارک سٹریٹ. سرکس ایونی\nn کولکتہ\nمغربی بنگال\nبھارت", {locale: 'hi-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "125/1، اےجي ٹاورز. 3 فلور، پارک سٹریٹ. سرکس ایونی");
        test.equal(parsedAddress.locality, "n کولکتہ");
        test.equal(parsedAddress.region, "مغربی بنگال");
        test.equal(parsedAddress.country, "بھارت");
        test.equal(parsedAddress.countryCode, "IN");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressINHINoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू\nकोलकाता\nपश्चिम बंगाल\nभारत", {locale: 'hi-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू");
        test.equal(parsedAddress.locality, "कोलकाता");
        test.equal(parsedAddress.region, "पश्चिम बंगाल");
        test.equal(parsedAddress.country, "भारत");
        test.equal(parsedAddress.countryCode, "IN");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressINHINoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू\nकोलकाता\nपश्चिम बंगाल\n७०००१७", {locale: 'hi-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू");
        test.equal(parsedAddress.locality, "कोलकाता");
        test.equal(parsedAddress.region, "पश्चिम बंगाल");
        test.equal(parsedAddress.postalCode, "७०००१७");    
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "IN");
        test.done();
    },
    
    testParseAddressINHIManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("१२५/१, एजी टावर्स\n३ तल, पार्क स्ट्रीट\nसर्कस एवेन्यू\nकोलकाता\nपश्चिम बंगाल\n७०००१७\nभारत", {locale: 'hi-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "१२५/१, एजी टावर्स, ३ तल, पार्क स्ट्रीट, सर्कस एवेन्यू");
        test.equal(parsedAddress.locality, "कोलकाता");
        test.equal(parsedAddress.region, "पश्चिम बंगाल");
        test.equal(parsedAddress.postalCode, "७०००१७");
        test.equal(parsedAddress.country, "भारत");
        test.equal(parsedAddress.countryCode, "IN");
        test.done();
    },
    
    testParseAddressINHIOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("१२५/१, एजी टावर्स , ३ तल, पार्क स्ट्रीट , सर्कस एवेन्यू , कोलकाता , पश्चिम बंगाल , ७०००१७ , भारत", {locale: 'hi-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "१२५/१, एजी टावर्स, ३ तल, पार्क स्ट्रीट, सर्कस एवेन्यू");
        test.equal(parsedAddress.locality, "कोलकाता");
        test.equal(parsedAddress.region, "पश्चिम बंगाल");
        test.equal(parsedAddress.postalCode, "७०००१७");
        test.equal(parsedAddress.country, "भारत");
        test.equal(parsedAddress.countryCode, "IN");
        test.done();
    },
    
    testParseAddressINHISuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("१२५/१, एजी टावर्स\t\t\r३ तल, पार्क स्ट्रीट\t\t\rसर्कस एवेन्यू\t\t\r\nकोलकाता\n\t\tपश्चिम बंगाल\n\t\r७०००१७\n\t\rभारत", {locale: 'hi-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "१२५/१, एजी टावर्स ३ तल, पार्क स्ट्रीट सर्कस एवेन्यू");
        test.equal(parsedAddress.locality, "कोलकाता");
        test.equal(parsedAddress.region, "पश्चिम बंगाल");
        test.equal(parsedAddress.postalCode, "७०००१७");
        test.equal(parsedAddress.country, "भारत");
        test.equal(parsedAddress.countryCode, "IN");
        test.done();
    },
    
    testParseAddressINHINoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू कोलकाता पश्चिम बंगाल ७०००१७ भारत", {locale: 'hi-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू");
        test.equal(parsedAddress.locality, "कोलकाता");
        test.equal(parsedAddress.region, "पश्चिम बंगाल");
        test.equal(parsedAddress.postalCode, "७०००१७");
        test.equal(parsedAddress.country, "भारत");
        test.equal(parsedAddress.countryCode, "IN");
        test.done();
    },
    
    testParseAddressINHIFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू\nकोलकाता\nपश्चिम बंगाल\n७०००१७\nIndia", {locale: 'hi-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू");
        test.equal(parsedAddress.locality, "कोलकाता");
        test.equal(parsedAddress.region, "पश्चिम बंगाल");
        test.equal(parsedAddress.postalCode, "७०००१७");
        test.equal(parsedAddress.country, "India");
        test.equal(parsedAddress.countryCode, "IN");
        test.done();
    },
    
    testFormatAddressINHI: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू",
            locality: "कोलकाता",
            postalCode: "७०००१७",
            region: "पश्चिम बंगाल",
            country: "भारत",
            countryCode: "IN"
        }, {locale: 'hi-IN'});
        
        var expected = "१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू\nकोलकाता\nपश्चिम बंगाल\n७०००१७\nभारत";
        var formatter = new AddressFmt({locale: 'hi-IN'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressINHIFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू",
            locality: "कोलकाता",
            postalCode: "७०००१७",
            region: "पश्चिम बंगाल",
            country: "India",
            countryCode: "IN"
        }, {locale: 'en-US'});
        
        var expected = "१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू\nकोलकाता\nपश्चिम बंगाल\n७०००१७\nIndia";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    
    testParseAddressINNormal: function(test) {
        test.expect(7);
       var parsedAddress = new Address("125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue\nKolkata\nWest Bengal\n700017\nIndia", {locale: 'en-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue");
        test.equal(parsedAddress.locality, "Kolkata");
        test.equal(parsedAddress.region, "West Bengal");
        test.equal(parsedAddress.postalCode, "700017");
        test.equal(parsedAddress.country, "India");
        test.equal(parsedAddress.countryCode, "IN");
        test.done();
    },
    
    testParseAddressINNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue\nKolkata\nWest Bengal\nIndia", {locale: 'en-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue");
        test.equal(parsedAddress.locality, "Kolkata");
        test.equal(parsedAddress.region, "West Bengal");
        test.equal(parsedAddress.country, "India");
        test.equal(parsedAddress.countryCode, "IN");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressINNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue\nKolkata\nWest Bengal\n700017", {locale: 'en-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue");
        test.equal(parsedAddress.locality, "Kolkata");
        test.equal(parsedAddress.region, "West Bengal");
        test.equal(parsedAddress.postalCode, "700017");    
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "IN");
        test.done();
    },
    
    testParseAddressINManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("125/1, A G Towers\n3rd Floor, Park Street\nCircus Avenue\nKolkata\nWest Bengal\n700017\nIndia", {locale: 'en-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "125/1, A G Towers, 3rd Floor, Park Street, Circus Avenue");
        test.equal(parsedAddress.locality, "Kolkata");
        test.equal(parsedAddress.region, "West Bengal");
        test.equal(parsedAddress.postalCode, "700017");
        test.equal(parsedAddress.country, "India");
        test.equal(parsedAddress.countryCode, "IN");
        test.done();
    },
    
    testParseAddressINOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("125/1, A G Towers , 3rd Floor, Park Street , Circus Avenue , Kolkata , West Bengal , 700017 , India", {locale: 'en-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "125/1, A G Towers, 3rd Floor, Park Street, Circus Avenue");
        test.equal(parsedAddress.locality, "Kolkata");
        test.equal(parsedAddress.region, "West Bengal");
        test.equal(parsedAddress.postalCode, "700017");
        test.equal(parsedAddress.country, "India");
        test.equal(parsedAddress.countryCode, "IN");
        test.done();
    },
    
    testParseAddressINSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("125/1, A G Towers\t\t\r3rd Floor, Park Street\t\t\rCircus Avenue\t\t\r\nKolkata\n\t\tWest Bengal\n\t\r700017\n\t\rIndia", {locale: 'en-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "125/1, A G Towers 3rd Floor, Park Street Circus Avenue");
        test.equal(parsedAddress.locality, "Kolkata");
        test.equal(parsedAddress.region, "West Bengal");
        test.equal(parsedAddress.postalCode, "700017");
        test.equal(parsedAddress.country, "India");
        test.equal(parsedAddress.countryCode, "IN");
        test.done();
    },
    
    testParseAddressINNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue Kolkata West Bengal 700017 India", {locale: 'en-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue");
        test.equal(parsedAddress.locality, "Kolkata");
        test.equal(parsedAddress.region, "West Bengal");
        test.equal(parsedAddress.postalCode, "700017");
        test.equal(parsedAddress.country, "India");
        test.equal(parsedAddress.countryCode, "IN");
        test.done();
    },
    
    testParseAddressINFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue\nKolkata\nWest Bengal\n700017\nIndia", {locale: 'en-IN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue");
        test.equal(parsedAddress.locality, "Kolkata");
        test.equal(parsedAddress.region, "West Bengal");
        test.equal(parsedAddress.postalCode, "700017");
        test.equal(parsedAddress.country, "India");
        test.equal(parsedAddress.countryCode, "IN");
        test.done();
    },
    
    testFormatAddressIN: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue",
            locality: "Kolkata",
            postalCode: "700017",
            region: "West Bengal",
            country: "India",
            countryCode: "IN"
        }, {locale: 'en-IN'});
        
        var expected = "125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue\nKolkata\nWest Bengal\n700017\nIndia";
        var formatter = new AddressFmt({locale: 'en-IN'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressINFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue",
            locality: "Kolkata",
            postalCode: "700017",
            region: "West Bengal",
            country: "India",
            countryCode: "IN"
        }, {locale: 'en-US'});
        
        var expected = "125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue\nKolkata\nWest Bengal\n700017\nIndia";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
