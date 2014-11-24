/*
 * testaddress_IN.js - test the address parsing and formatting routines
 * 
 * Copyright © 2013, JEDLSoft
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

function testParseAddressINHINormal() {
   var parsedAddress = new ilib.Address("१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू\nकोलकाता\nपश्चिम बंगाल\n७०००१७\nभारत", {locale: 'hi-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू", parsedAddress.streetAddress);
	assertEquals("कोलकाता", parsedAddress.locality);
	assertEquals("पश्चिम बंगाल", parsedAddress.region);
	assertEquals("७०००१७", parsedAddress.postalCode);
	assertEquals("भारत", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
};


function testParseAddressINGUNoZip() {
	var parsedAddress = new ilib.Address("125/1, એજી ટાવર્સ. 3 જો માળ, પાર્ક સ્ટ્રીટ. સર્કસ એવન્યુ\nકોલકાતા\nપશ્ચિમ બંગાળ\nભારત", {locale: 'gu-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("125/1, એજી ટાવર્સ. 3 જો માળ, પાર્ક સ્ટ્રીટ. સર્કસ એવન્યુ", parsedAddress.streetAddress);
	assertEquals("કોલકાતા", parsedAddress.locality);
	assertEquals("પશ્ચિમ બંગાળ", parsedAddress.region);
	assertEquals("ભારત", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressINKNNoZip() {
	var parsedAddress = new ilib.Address("125/1, ಎಜಿ ಟವರ್ಸ್. 3 ನೇ ಮಹಡಿ, ಪಾರ್ಕ್ ಸ್ಟ್ರೀಟ್. ಸರ್ಕಸ್ ಅವೆನ್ಯೂ\nಕಲ್ಕತ್ತಾ\nಪಶ್ಚಿಮ ಬಂಗಾಳ\nಭಾರತ", {locale: 'kn-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("125/1, ಎಜಿ ಟವರ್ಸ್. 3 ನೇ ಮಹಡಿ, ಪಾರ್ಕ್ ಸ್ಟ್ರೀಟ್. ಸರ್ಕಸ್ ಅವೆನ್ಯೂ", parsedAddress.streetAddress);
	assertEquals("ಕಲ್ಕತ್ತಾ", parsedAddress.locality);
	assertEquals("ಪಶ್ಚಿಮ ಬಂಗಾಳ", parsedAddress.region);
	assertEquals("ಭಾರತ", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressINKNNoZip() {
	var parsedAddress = new ilib.Address("125/1, ಎಜಿ ಟವರ್ಸ್. 3 ನೇ ಮಹಡಿ, ಪಾರ್ಕ್ ಸ್ಟ್ರೀಟ್. ಸರ್ಕಸ್ ಅವೆನ್ಯೂ\nಕಲ್ಕತ್ತಾ\nಪಶ್ಚಿಮ ಬಂಗಾಳ\nಭಾರತ", {locale: 'kn-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("125/1, ಎಜಿ ಟವರ್ಸ್. 3 ನೇ ಮಹಡಿ, ಪಾರ್ಕ್ ಸ್ಟ್ರೀಟ್. ಸರ್ಕಸ್ ಅವೆನ್ಯೂ", parsedAddress.streetAddress);
	assertEquals("ಕಲ್ಕತ್ತಾ", parsedAddress.locality);
	assertEquals("ಪಶ್ಚಿಮ ಬಂಗಾಳ", parsedAddress.region);
	assertEquals("ಭಾರತ", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressINMRNoZip() {
	var parsedAddress = new ilib.Address("125/1, एजी टॉवर्स. 3 रा मजला, पार्क स्ट्रीट. सर्कस ऍव्हेन्यू\nकलकत्ता\nपश्चिम बंगाल\nभारत", {locale: 'mr-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("125/1, एजी टॉवर्स. 3 रा मजला, पार्क स्ट्रीट. सर्कस ऍव्हेन्यू", parsedAddress.streetAddress);
	assertEquals("कलकत्ता", parsedAddress.locality);
	assertEquals("पश्चिम बंगाल", parsedAddress.region);
	assertEquals("भारत", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressINTENoZip() {
	var parsedAddress = new ilib.Address("125/1, AG టవర్స్. 3 వ అంతస్తు, పార్క్ స్ట్రీట్. సర్కస్ ఎవెన్యూ \nకలకత్తా \nవెస్ట్ బెంగాల్\nభారత దేశం", {locale: 'te-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("125/1, AG టవర్స్. 3 వ అంతస్తు, పార్క్ స్ట్రీట్. సర్కస్ ఎవెన్యూ", parsedAddress.streetAddress);
	assertEquals("కలకత్తా", parsedAddress.locality);
	assertEquals("వెస్ట్ బెంగాల్", parsedAddress.region);
	assertEquals("భారత దేశం", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressINTANoZip() {
	var parsedAddress = new ilib.Address("125/1, ஏஜி டவர்ஸ். 3 வது மாடி, பார்க் தெரு. சர்க்கஸ் அவென்யூ\nகல்கத்தா\nமேற்கு வங்காளம்\nஇந்தியா", {locale: 'ta-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("125/1, ஏஜி டவர்ஸ். 3 வது மாடி, பார்க் தெரு. சர்க்கஸ் அவென்யூ", parsedAddress.streetAddress);
	assertEquals("கல்கத்தா", parsedAddress.locality);
	assertEquals("மேற்கு வங்காளம்", parsedAddress.region);
	assertEquals("இந்தியா", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressINBNMRNoZip() {
	var parsedAddress = new ilib.Address("125/1, এজি টাওয়ার্স. 3 য় তল, পার্ক স্ট্রীট. সার্কাস অ্যাভিনিউ\nকলকাতা\nপশ্চিম বঙ্গ\nভারত", {locale: 'bn-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("125/1, এজি টাওয়ার্স. 3 য় তল, পার্ক স্ট্রীট. সার্কাস অ্যাভিনিউ", parsedAddress.streetAddress);
	assertEquals("কলকাতা", parsedAddress.locality);
	assertEquals("পশ্চিম বঙ্গ", parsedAddress.region);
	assertEquals("ভারত", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressINHINoZip() {
	var parsedAddress = new ilib.Address("125/1، اےجي ٹاورز. 3 فلور، پارک سٹریٹ. سرکس ایونی\nn کولکتہ\nمغربی بنگال\nبھارت", {locale: 'hi-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("125/1، اےجي ٹاورز. 3 فلور، پارک سٹریٹ. سرکس ایونی", parsedAddress.streetAddress);
	assertEquals("n کولکتہ", parsedAddress.locality);
	assertEquals("مغربی بنگال", parsedAddress.region);
	assertEquals("بھارت", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressINHINoZip() {
	var parsedAddress = new ilib.Address("१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू\nकोलकाता\nपश्चिम बंगाल\nभारत", {locale: 'hi-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू", parsedAddress.streetAddress);
	assertEquals("कोलकाता", parsedAddress.locality);
	assertEquals("पश्चिम बंगाल", parsedAddress.region);
	assertEquals("भारत", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressINHINoCountry() {
	var parsedAddress = new ilib.Address("१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू\nकोलकाता\nपश्चिम बंगाल\n७०००१७", {locale: 'hi-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू", parsedAddress.streetAddress);
	assertEquals("कोलकाता", parsedAddress.locality);
	assertEquals("पश्चिम बंगाल", parsedAddress.region);
	assertEquals("७०००१७", parsedAddress.postalCode);	
	assertUndefined(parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
};

function testParseAddressINHIManyLines() {
	var parsedAddress = new ilib.Address("१२५/१, एजी टावर्स\n३ तल, पार्क स्ट्रीट\nसर्कस एवेन्यू\nकोलकाता\nपश्चिम बंगाल\n७०००१७\nभारत", {locale: 'hi-IN'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("१२५/१, एजी टावर्स, ३ तल, पार्क स्ट्रीट, सर्कस एवेन्यू", parsedAddress.streetAddress);
	assertEquals("कोलकाता", parsedAddress.locality);
	assertEquals("पश्चिम बंगाल", parsedAddress.region);
	assertEquals("७०००१७", parsedAddress.postalCode);
	assertEquals("भारत", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
};

function testParseAddressINHIOneLine() {
	var parsedAddress = new ilib.Address("१२५/१, एजी टावर्स , ३ तल, पार्क स्ट्रीट , सर्कस एवेन्यू , कोलकाता , पश्चिम बंगाल , ७०००१७ , भारत", {locale: 'hi-IN'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("१२५/१, एजी टावर्स, ३ तल, पार्क स्ट्रीट, सर्कस एवेन्यू", parsedAddress.streetAddress);
	assertEquals("कोलकाता", parsedAddress.locality);
	assertEquals("पश्चिम बंगाल", parsedAddress.region);
	assertEquals("७०००१७", parsedAddress.postalCode);
	assertEquals("भारत", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
};

function testParseAddressINHISuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("१२५/१, एजी टावर्स\t\t\r३ तल, पार्क स्ट्रीट\t\t\rसर्कस एवेन्यू\t\t\r\nकोलकाता\n\t\tपश्चिम बंगाल\n\t\r७०००१७\n\t\rभारत", {locale: 'hi-IN'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("१२५/१, एजी टावर्स ३ तल, पार्क स्ट्रीट सर्कस एवेन्यू", parsedAddress.streetAddress);
	assertEquals("कोलकाता", parsedAddress.locality);
	assertEquals("पश्चिम बंगाल", parsedAddress.region);
	assertEquals("७०००१७", parsedAddress.postalCode);
	assertEquals("भारत", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
};

function testParseAddressINHINoDelimiters() {
	var parsedAddress = new ilib.Address("१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू कोलकाता पश्चिम बंगाल ७०००१७ भारत", {locale: 'hi-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू", parsedAddress.streetAddress);
	assertEquals("कोलकाता", parsedAddress.locality);
	assertEquals("पश्चिम बंगाल", parsedAddress.region);
	assertEquals("७०००१७", parsedAddress.postalCode);
	assertEquals("भारत", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
};

function testParseAddressINHIFromUS() {
	var parsedAddress = new ilib.Address("१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू\nकोलकाता\nपश्चिम बंगाल\n७०००१७\nIndia", {locale: 'hi-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू", parsedAddress.streetAddress);
	assertEquals("कोलकाता", parsedAddress.locality);
	assertEquals("पश्चिम बंगाल", parsedAddress.region);
	assertEquals("७०००१७", parsedAddress.postalCode);
	assertEquals("India", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
};

function testFormatAddressINHI() {
	var parsedAddress = new ilib.Address({
		streetAddress: "१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू",
		locality: "कोलकाता",
		postalCode: "७०००१७",
		region: "पश्चिम बंगाल",
		country: "भारत",
		countryCode: "IN"
	}, {locale: 'hi-IN'});
	
	var expected = "१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू\nकोलकाता\nपश्चिम बंगाल\n७०००१७\nभारत";
	var formatter = new ilib.AddressFmt({locale: 'hi-IN'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressINHIFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू",
		locality: "कोलकाता",
		postalCode: "७०००१७",
		region: "पश्चिम बंगाल",
		country: "India",
		countryCode: "IN"
	}, {locale: 'en-US'});
	
	var expected = "१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू\nकोलकाता\nपश्चिम बंगाल\n७०००१७\nIndia";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};


function testParseAddressINNormal() {
   var parsedAddress = new ilib.Address("125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue\nKolkata\nWest Bengal\n700017\nIndia", {locale: 'en-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue", parsedAddress.streetAddress);
	assertEquals("Kolkata", parsedAddress.locality);
	assertEquals("West Bengal", parsedAddress.region);
	assertEquals("700017", parsedAddress.postalCode);
	assertEquals("India", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
};

function testParseAddressINNoZip() {
	var parsedAddress = new ilib.Address("125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue\nKolkata\nWest Bengal\nIndia", {locale: 'en-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue", parsedAddress.streetAddress);
	assertEquals("Kolkata", parsedAddress.locality);
	assertEquals("West Bengal", parsedAddress.region);
	assertEquals("India", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressINNoCountry() {
	var parsedAddress = new ilib.Address("125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue\nKolkata\nWest Bengal\n700017", {locale: 'en-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue", parsedAddress.streetAddress);
	assertEquals("Kolkata", parsedAddress.locality);
	assertEquals("West Bengal", parsedAddress.region);
	assertEquals("700017", parsedAddress.postalCode);	
	assertUndefined(parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
};

function testParseAddressINManyLines() {
	var parsedAddress = new ilib.Address("125/1, A G Towers\n3rd Floor, Park Street\nCircus Avenue\nKolkata\nWest Bengal\n700017\nIndia", {locale: 'en-IN'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("125/1, A G Towers, 3rd Floor, Park Street, Circus Avenue", parsedAddress.streetAddress);
	assertEquals("Kolkata", parsedAddress.locality);
	assertEquals("West Bengal", parsedAddress.region);
	assertEquals("700017", parsedAddress.postalCode);
	assertEquals("India", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
};

function testParseAddressINOneLine() {
	var parsedAddress = new ilib.Address("125/1, A G Towers , 3rd Floor, Park Street , Circus Avenue , Kolkata , West Bengal , 700017 , India", {locale: 'en-IN'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("125/1, A G Towers, 3rd Floor, Park Street, Circus Avenue", parsedAddress.streetAddress);
	assertEquals("Kolkata", parsedAddress.locality);
	assertEquals("West Bengal", parsedAddress.region);
	assertEquals("700017", parsedAddress.postalCode);
	assertEquals("India", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
};

function testParseAddressINSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("125/1, A G Towers\t\t\r3rd Floor, Park Street\t\t\rCircus Avenue\t\t\r\nKolkata\n\t\tWest Bengal\n\t\r700017\n\t\rIndia", {locale: 'en-IN'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("125/1, A G Towers 3rd Floor, Park Street Circus Avenue", parsedAddress.streetAddress);
	assertEquals("Kolkata", parsedAddress.locality);
	assertEquals("West Bengal", parsedAddress.region);
	assertEquals("700017", parsedAddress.postalCode);
	assertEquals("India", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
};

function testParseAddressINNoDelimiters() {
	var parsedAddress = new ilib.Address("125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue Kolkata West Bengal 700017 India", {locale: 'en-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue", parsedAddress.streetAddress);
	assertEquals("Kolkata", parsedAddress.locality);
	assertEquals("West Bengal", parsedAddress.region);
	assertEquals("700017", parsedAddress.postalCode);
	assertEquals("India", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
};

function testParseAddressINFromUS() {
	var parsedAddress = new ilib.Address("125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue\nKolkata\nWest Bengal\n700017\nIndia", {locale: 'en-IN'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue", parsedAddress.streetAddress);
	assertEquals("Kolkata", parsedAddress.locality);
	assertEquals("West Bengal", parsedAddress.region);
	assertEquals("700017", parsedAddress.postalCode);
	assertEquals("India", parsedAddress.country);
	assertEquals("IN", parsedAddress.countryCode);
};

function testFormatAddressIN() {
	var parsedAddress = new ilib.Address({
		streetAddress: "125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue",
		locality: "Kolkata",
		postalCode: "700017",
		region: "West Bengal",
		country: "India",
		countryCode: "IN"
	}, {locale: 'en-IN'});
	
	var expected = "125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue\nKolkata\nWest Bengal\n700017\nIndia";
	var formatter = new ilib.AddressFmt({locale: 'en-IN'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressINFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue",
		locality: "Kolkata",
		postalCode: "700017",
		region: "West Bengal",
		country: "India",
		countryCode: "IN"
	}, {locale: 'en-US'});
	
	var expected = "125/1, A G Towers. 3rd Floor, Park Street. Circus Avenue\nKolkata\nWest Bengal\n700017\nIndia";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
