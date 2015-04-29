/*
 * testaddressasync.js - test the address parsing and formatting routines asynchronously
 * 
 * Copyright © 2015, JEDLSoft
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

function testParseAddressAsyncSimple() {
	var pa = new ilib.Address("950 W Maude Ave.\nSunnyvale, CA 94085\nUSA", {
		locale: 'en-US',
		sync: false,
		onLoad: function(parsedAddress) {
			assertNotUndefined(parsedAddress);
			assertEquals("950 W Maude Ave.", parsedAddress.streetAddress);
			assertEquals("Sunnyvale", parsedAddress.locality);
			assertEquals("CA", parsedAddress.region);
			assertEquals("94085", parsedAddress.postalCode);
			assertEquals("USA", parsedAddress.country);
			assertEquals("US", parsedAddress.countryCode);
		}
	});
	assertNotUndefined(pa);
};

// to verify NOV-111026
function testParseAddressAsyncSimple2() {
	var pa = new ilib.Address("20 Main St.\nMyTown, NY 11530\nUSA", {
		locale: 'en-US',
		sync: false,
		onLoad: function(parsedAddress) {
			assertNotUndefined(parsedAddress);
			assertEquals("20 Main St.", parsedAddress.streetAddress);
			assertEquals("MyTown", parsedAddress.locality);
			assertEquals("NY", parsedAddress.region);
			assertEquals("11530", parsedAddress.postalCode);
			assertEquals("USA", parsedAddress.country);
			assertEquals("US", parsedAddress.countryCode);
		}
	});
	assertNotUndefined(pa);
};

function testParseAddressAsyncSimple3() {
	var pa = new ilib.Address("5-2-1 Ginza, Chuo-ku\nTokyo 170-3293\nJapan", {
		locale: 'en-US',
		sync: false,
		onLoad: function(parsedAddress) {
			assertNotUndefined(parsedAddress);
			assertEquals("5-2-1 Ginza", parsedAddress.streetAddress);
			assertEquals("Chuo-ku", parsedAddress.locality);
			assertEquals("Tokyo", parsedAddress.region);
			assertEquals("170-3293", parsedAddress.postalCode);
			assertEquals("Japan", parsedAddress.country);
			assertEquals("JP", parsedAddress.countryCode);
		}
	});
	assertNotUndefined(pa);
};

function testParseAddressAsyncMoreComplex() {
	var pa = new ilib.Address("950 W 21st Ave, Apt 45\nNY, NY 10234", {
		locale: 'en-US',
		sync: false,
		onLoad: function(parsedAddress) {
			assertNotUndefined(parsedAddress);
			assertEquals("950 W 21st Ave, Apt 45", parsedAddress.streetAddress);
			assertEquals("NY", parsedAddress.locality);
			assertEquals("NY", parsedAddress.region);
			assertEquals("10234", parsedAddress.postalCode);
			assertUndefined(parsedAddress.country);
			assertEquals("US", parsedAddress.countryCode);
		}
	});
	assertNotUndefined(pa);
};

function testParseAddressAsyncSpelledOutState() {
	var pa = new ilib.Address("20 Main St.\nMyTown, Arizona 11530\nUSA", {
		locale: 'en-US',
		sync: false,
		onLoad: function(parsedAddress) {
			assertNotUndefined(parsedAddress);
			assertEquals("20 Main St.", parsedAddress.streetAddress);
			assertEquals("MyTown", parsedAddress.locality);
			assertEquals("Arizona", parsedAddress.region);
			assertEquals("11530", parsedAddress.postalCode);
			assertEquals("USA", parsedAddress.country);
			assertEquals("US", parsedAddress.countryCode);
		}
	});
	assertNotUndefined(pa);
};

function testParseAddressAsyncSpelledOutStateWithSpaces() {
	var pa = new ilib.Address("20 Main St.\nMyTown, New York 11530\nUSA", {
		locale: 'en-US',
		sync: false,
		onLoad: function(parsedAddress) {
			assertNotUndefined(parsedAddress);
			assertEquals("20 Main St.", parsedAddress.streetAddress);
			assertEquals("MyTown", parsedAddress.locality);
			assertEquals("New York", parsedAddress.region);
			assertEquals("11530", parsedAddress.postalCode);
			assertEquals("USA", parsedAddress.country);
			assertEquals("US", parsedAddress.countryCode);
		}
	});
	assertNotUndefined(pa);
};

function testParseAddressAsyncUnknown() {

	var pa = new ilib.Address("123 Main Street, Pretoria 5678, South Africa", {
		locale: 'en-US',
		sync: false,
		onLoad: function(parsedAddress) {
			assertNotUndefined(parsedAddress);
			assertEquals("123 Main Street", parsedAddress.streetAddress);
			assertEquals("Pretoria", parsedAddress.locality);
			assertUndefined(parsedAddress.region);
			assertEquals("5678", parsedAddress.postalCode);
			assertEquals("South Africa", parsedAddress.country);
			assertEquals("ZA", parsedAddress.countryCode);
		}
	});
	assertNotUndefined(pa);
};

function testParseAddressAsyncNonUS() {
	var pa = new ilib.Address("Achterberglaan 23, 2345 GD Uithoorn, Netherlands", {
		locale: 'en-US',
		sync: false,
		onLoad: function(parsedAddress) {
			assertNotUndefined(parsedAddress);
			assertEquals("Achterberglaan 23", parsedAddress.streetAddress);
			assertEquals("Uithoorn", parsedAddress.locality);
			assertUndefined(parsedAddress.region);
			assertEquals("2345 GD", parsedAddress.postalCode);
			assertEquals("Netherlands", parsedAddress.country);
			assertEquals("NL", parsedAddress.countryCode);
		}
	});
	assertNotUndefined(pa);
};
	
function testFormatAddressAsyncUS() {
	var pa = new ilib.Address({
		streetAddress: "1234 Any Street",
		locality: "Anytown",
		region: "CA",
		postalCode: "94085",
		country: "United States of America",
		countryCode: "US"
	}, {locale: 'en-US'});
	
	var expected = "1234 Any Street\nAnytown CA 94085\nUnited States of America";
	var f = new ilib.AddressFmt({
		locale: 'en-US',
		sync: false,
		onLoad: function(formatter) {
			assertNotUndefined(formatter);
			assertEquals(expected, formatter.format(pa));
		}
	});
	assertNotUndefined(f);
};

function testFormatAddressAsyncUnknownLocaleQQ() {
	var pa = new ilib.Address({
		streetAddress: "123 mcdonald ave, apt 234", 
		locality: "Sunnyvale",
		region: "CA",
		postalCode: "94086", 
		locale: 'en-QQ'
	});
	
	var expected = "123 mcdonald ave, apt 234\nSunnyvale CA 94086";
	var f = new ilib.AddressFmt({
		locale: 'en-QQ', 
		style: 'nocountry',
		sync: false,
		onLoad: function(formatter) {
			assertNotUndefined(formatter);
			assertEquals(expected, formatter.format(pa));
		}
	});
	assertNotUndefined(f);
};

function testParseAddressAsyncJPAsianNormal1() {
	var pa = new ilib.Address("〒150-2345 東京都渋谷区本町2丁目4-7サニーマンション203",  {
		locale: 'ja-JP',
		sync: false,
		onLoad: function(parsedAddress) {
			assertNotUndefined(parsedAddress);
			assertEquals("本町2丁目4-7サニーマンション203", parsedAddress.streetAddress);
			assertEquals("渋谷区", parsedAddress.locality);
			assertEquals("東京都",parsedAddress.region);
			assertEquals("〒150-2345", parsedAddress.postalCode);
			assertEquals("JP", parsedAddress.countryCode);
		}
	});
	assertNotUndefined(pa);
};

function testFormatAddressAsyncJPAsianNormal() {
	var parsedAddress = new ilib.Address({
		streetAddress: "本町2丁目4-7サニーマンション203",
		locality: "渋谷区",
		region: "東京都",
		postalCode: "〒150-2345",
		countryCode: "JP",
		format: "asian"
	}, {locale: 'ja-JP'});
	
	var expected = "〒150-2345\n東京都渋谷区本町2丁目4-7サニーマンション203";
	
	var f = new ilib.AddressFmt({
		locale: 'ja-JP',
		sync: false,
		onLoad: function(formatter) {
			assertNotUndefined(formatter);
			assertEquals(expected, formatter.format(parsedAddress));
		}
	});
	assertNotUndefined(f);
};


function testParseAddressAsyncCNAsianNormal() {
	var pa = new ilib.Address("中国北京市朝阳区建国路112号 中国惠普大厦100022", {
		locale: 'zh-CN',
		sync: false,
		onLoad: function(parsedAddress) {
			assertNotUndefined(parsedAddress);
			assertEquals("建国路112号 中国惠普大厦", parsedAddress.streetAddress);
			assertEquals("朝阳区", parsedAddress.locality);
			assertEquals("北京市", parsedAddress.region);
			assertEquals("100022", parsedAddress.postalCode);
			assertEquals("中国", parsedAddress.country);
			assertEquals("CN", parsedAddress.countryCode);
		}
	});
	assertNotUndefined(pa);
};

function testParseAddressAsyncDENormal() {
	var pa = new ilib.Address("Herrenberger Straße 140, 71034 Böblingen, Deutschland", {
		locale: 'de-DE',
		sync: false,
		onLoad: function(parsedAddress) {
			assertNotUndefined(parsedAddress);
			assertEquals("Herrenberger Straße 140", parsedAddress.streetAddress);
			assertEquals("Böblingen", parsedAddress.locality);
			assertUndefined(parsedAddress.region);
			assertEquals("71034", parsedAddress.postalCode);
			assertEquals("Deutschland", parsedAddress.country);
			assertEquals("DE", parsedAddress.countryCode);
		}
	});
	assertNotUndefined(pa);
};

function testParseAddressAsyncTHNormal() {
	var pa = new ilib.Address("49 ซอยร่วมฤดี, ถนนเพลินจิต, ลุมพินี\nเขตปทุมวัน กรุงเทพฯ 10330\nประเทศไทย", {
		locale: 'th-Th',
		sync: false,
		onLoad: function(parsedAddress) {
			assertNotUndefined(parsedAddress);
			assertEquals("49 ซอยร่วมฤดี, ถนนเพลินจิต, ลุมพินี", parsedAddress.streetAddress);
			assertEquals("เขตปทุมวัน", parsedAddress.locality);
			assertEquals("กรุงเทพฯ", parsedAddress.region);
			assertEquals("10330", parsedAddress.postalCode);
			assertEquals("ประเทศไทย", parsedAddress.country);
			assertEquals("TH", parsedAddress.countryCode);
		}
	});
	assertNotUndefined(pa);
};

function testParseAddressAsyncRUNormal() {
	var pa = new ilib.Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\nРоссия\n247112", {
		locale: 'ru-RU',
		sync: false,
		onLoad: function(parsedAddress) {
			assertNotUndefined(parsedAddress);
			assertEquals("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной", parsedAddress.streetAddress);
			assertEquals("АЛЕКСЕЕВСКИЙ R-N", parsedAddress.locality);
			assertEquals("Воронежская область", parsedAddress.region);
			assertEquals("247112", parsedAddress.postalCode);
			assertEquals("Россия", parsedAddress.country);
			assertEquals("RU", parsedAddress.countryCode);
		}
	});
	assertNotUndefined(pa);
};

function testParseAddressAsyncSANormalNative() {
	var pa = new ilib.Address("السيد عبد الله ناصر\nمكة المكرمة ٢١۴۵۴\nالمملكة العربية السعودية", {
		locale: 'ar-SA',
		sync: false,
		onLoad: function(parsedAddress) {
			assertNotUndefined(parsedAddress);
			assertEquals("السيد عبد الله ناصر", parsedAddress.streetAddress);
			assertEquals("مكة المكرمة", parsedAddress.locality);
			assertUndefined(parsedAddress.region);
			assertEquals("٢١۴۵۴", parsedAddress.postalCode);
			assertEquals("المملكة العربية السعودية", parsedAddress.country);
			assertEquals("SA", parsedAddress.countryCode);
		}
	});
	assertNotUndefined(pa);
};

function testParseAddressAsyncINHINormal() {
	var pa = new ilib.Address("१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू\nकोलकाता\nपश्चिम बंगाल\n७०००१७\nभारत", {
		locale: 'hi-IN',
		sync: false,
		onLoad: function(parsedAddress) {	
			assertNotUndefined(parsedAddress);
			assertEquals("१२५/१, एजी टावर्स. ३ तल, पार्क स्ट्रीट. सर्कस एवेन्यू", parsedAddress.streetAddress);
			assertEquals("कोलकाता", parsedAddress.locality);
			assertEquals("पश्चिम बंगाल", parsedAddress.region);
			assertEquals("७०००१७", parsedAddress.postalCode);
			assertEquals("भारत", parsedAddress.country);
			assertEquals("IN", parsedAddress.countryCode);
		}
	});
	assertNotUndefined(pa);
};

function testParseAddressAsyncINGUNoZip() {
	var pa = new ilib.Address("125/1, એજી ટાવર્સ. 3 જો માળ, પાર્ક સ્ટ્રીટ. સર્કસ એવન્યુ\nકોલકાતા\nપશ્ચિમ બંગાળ\nભારત", {
		locale: 'gu-IN',
		sync: false,
		onLoad: function(parsedAddress) {						
			assertNotUndefined(parsedAddress);
			assertEquals("125/1, એજી ટાવર્સ. 3 જો માળ, પાર્ક સ્ટ્રીટ. સર્કસ એવન્યુ", parsedAddress.streetAddress);
			assertEquals("કોલકાતા", parsedAddress.locality);
			assertEquals("પશ્ચિમ બંગાળ", parsedAddress.region);
			assertEquals("ભારત", parsedAddress.country);
			assertEquals("IN", parsedAddress.countryCode);
			assertUndefined(parsedAddress.postalCode);
		}
	});
	assertNotUndefined(pa);
};
