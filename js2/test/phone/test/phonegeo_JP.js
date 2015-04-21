/*
 * phonegeo_JP.js - Test the GeoLocator Object.
 * 
 * Copyright © 2014, JEDLSoft
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
function testJPLocalNumber1() {
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
	
	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
};

function testJPNumberWithAreaCode1() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testJPNumberWithAreaCode2() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testJPNumberWithAreaCodeAndCountry1() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testJPNumberWithAreaCodeAndCountry2() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testJPNumberWithAreaCodeAndCountry3() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testJPNumberCallFromUS() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testJPNumberWithAreaCodeAndCountry4() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testJPPolice() {
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

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testJPFireAndAmbulance() {
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

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

