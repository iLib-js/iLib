/*
 * phonegeo_RU.js - Test the GeoLocator Object.
 * 
 * Copyright © 2014-2015, JEDLSoft
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

function testRULocalNumber1() {
	var parsed = new ilib.PhoneNumber("3456123",{locale: "ru-RU"});
	var expected = {
		country: {
			sn: "Russia",
			ln: "Russia, Kazakhstan",
			code: "RU"
		}		
	};

	var locator = new ilib.GeoLocator({locale: "ru-RU"});
	var geoInfo = locator.locate(parsed);
	
	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
};

function testRULocalNumber2() {
	var parsed = new ilib.PhoneNumber("212-3456",{locale: "ru-RU"});
	var expected = {
		country: {
			sn: "Russia",
			ln: "Russia, Kazakhstan",
			code: "RU"
		}		
	};

	var locator = new ilib.GeoLocator({locale: "ru-RU"});
	var geoInfo = locator.locate(parsed);
	
	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
};

function testRUNumberWithAreaCode1() {
	var parsed = new ilib.PhoneNumber("8 (812) 456-7890",{locale: "ru-RU"});
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
	
	var locator = new ilib.GeoLocator({locale: 'ru-RU'});
	var geoInfo = locator.locate(parsed);
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testRUNumberWithAreaCode2() {
	var parsed = new ilib.PhoneNumber("8 (8352) 051-212-3456",{locale: "ru-RU"});
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
	
	var locator = new ilib.GeoLocator({locale: 'ru-RU'});
	var geoInfo = locator.locate(parsed);
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testRUNumberWithAreaCodeAndCountry1() {
	var parsed = new ilib.PhoneNumber("+7-812-312-3456");
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
	
	var locator = new ilib.GeoLocator({locale: 'ru-RU'});
	var geoInfo = locator.locate(parsed);
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};
 function testRUNumberWithAreaCodeAndCountry2() {
	var parsed = new ilib.PhoneNumber("+7-8552-32-456-1");
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
	
	var locator = new ilib.GeoLocator({locale: 'en-US'});
	var geoInfo = locator.locate(parsed);
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testRUNumberWithAreaCodeAndCountry3() {
	var parsed = new ilib.PhoneNumber("+7-3452-212-3456");
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
	
	var locator = new ilib.GeoLocator({locale: 'en-US'});
	var geoInfo = locator.locate(parsed);
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testRUNumberCallFromUS() {
	var parsed = new ilib.PhoneNumber("011 7-812-212-3456");
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
	
	var locator = new ilib.GeoLocator({locale: 'en-US'});
	var geoInfo = locator.locate(parsed);
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testRUNumberWithAreaCodeAndCountry4() {
	var parsed = new ilib.PhoneNumber("+7-812-212-3456");
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
	
	var locator = new ilib.GeoLocator({locale: 'fr-FR'});
	var geoInfo = locator.locate(parsed);
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testRUPolice() {
	var parsed = new ilib.PhoneNumber("112",{locale: "ru-RU"});
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
	var locator = new ilib.GeoLocator({locale: "ru-RU"});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testRUFireAndAmbulance() {
	var parsed = new ilib.PhoneNumber("101",{locale: "ru-RU"});
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
	var locator = new ilib.GeoLocator({locale: "ru-RU"});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

