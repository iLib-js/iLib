/*
 * phonegeo_TW.js - Test the GeoLocator Object.
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
/* Calling from US*/
function testNANPUStoTaiwan() {
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
	
	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testTWLocalNumber2() {
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
	
	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
};

function testTWNumberWithAreaCode1() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testTWNumberWithAreaCode2() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testTWNumberWithAreaCodeAndCountry1() {
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
	
	var locator = new PhoneGeoLocator({locale: 'ko-KO'});
	var geoInfo = locator.locate(parsed);
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};
 function testTWNumberWithAreaCodeAndCountry2() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testTWNumberWithAreaCodeAndCountry3() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testTWNumberCallFromUS() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testTWNumberWithAreaCodeAndCountry4() {
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
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testTWPolice() {
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

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testTWFireAndAmbulance() {
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

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

