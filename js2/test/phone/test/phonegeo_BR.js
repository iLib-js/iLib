/*
 * phonegeo_JP.js - Test the GeoLocator Object.
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

var PhoneNumber = require("./../lib/PhoneNumber.js");
var PhoneGeoLocator = require("./../lib/PhoneGeoLocator.js");
function testBRLocalNumber1() {
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
	
	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
};

function testBRNumberWithAreaCode1() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testBRNumberWithAreaCode2() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testBRNumberWithAreaCodeAndCountry1() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testBRNumberWithAreaCodeAndCountry2() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testBRNumberWithAreaCodeAndCountry3() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testBRNumberCallFromUS() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testBRPolice() {
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

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testBRAmbulance() {
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

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

