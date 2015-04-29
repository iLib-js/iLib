/*
 * phonegeo_KR.js - Test the GeoLocator Object.
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
function testKRLocalNumber1() {
	var parsed = new PhoneNumber("312 3456",{locale: "ko-KR"});
	var expected = {
		country: {
			sn: "남한",
			ln: "남한",
			code: "KR"
		}		
	};

	var locator = new PhoneGeoLocator({locale: "ko-KR"});
	var geoInfo = locator.locate(parsed);
	
	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
};

function testKRLocalNumber2() {
	var parsed = new PhoneNumber("212-3456",{locale: "ko-KR"});
	var expected = {
		country: {
			sn: "남한",
			ln: "남한",
			code: "KR"
		}		
	};

	var locator = new PhoneGeoLocator({locale: "ko-KR"});
	var geoInfo = locator.locate(parsed);
	
	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
};

function testKRNumberWithAreaCode1() {
	var parsed = new PhoneNumber("02-312-3456",{locale: "ko-KR"});
	var expected = {
		country: {
			sn: "남한",
			ln: "남한",
			code: "KR"
		},
		area: {
			sn: "서울",
			ln: "서울 그리고 경기도 일부(과천, 광명 그리고 고양시 하남시)"
		}
	};
	
	var locator = new PhoneGeoLocator({locale: 'ko-KR'});
	var geoInfo = locator.locate(parsed);
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testKRNumberWithAreaCode2() {
	var parsed = new PhoneNumber("051-212-3456",{locale: "ko-KR"});
	var expected = {
		country: {
			sn: "남한",
			ln: "남한",
			code: "KR"
		},
		area: {
			sn: "부산",
			ln: "부산"
		}
	};
	
	var locator = new PhoneGeoLocator({locale: 'ko-KR'});
	var geoInfo = locator.locate(parsed);
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testKRNumberWithAreaCodeAndCountry1() {
	var parsed = new PhoneNumber("+82-2-312-3456");
	var expected = {
		country: {
			sn: "남한",
			ln: "남한",
			code: "KR"
		},
		area: {
			sn: "서울",
			ln: "서울 그리고 경기도 일부(과천, 광명 그리고 고양시 하남시)"
		}
	};
	
	var locator = new PhoneGeoLocator({locale: 'ko-KR'});
	var geoInfo = locator.locate(parsed);
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testKRNumberWithAreaCodeAndCountry2() {
	var parsed = new PhoneNumber("+82-2-312-3456");
	var expected = {
		country: {
			sn: "South Korea",
			ln: "South Korea",
			code: "KR"
		},
		area: {
			sn: "Seoul",
			ln: "Seoul and parts of Gyeonggi-do (Gwacheon, Gwangmyeong and some neighborhoods of Goyang and Hanam)"
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

function testKRNumberWithAreaCodeAndCountry3() {
	var parsed = new PhoneNumber("+82-51-212-3456");
	var expected = {
		country: {
			sn: "South Korea",
			ln: "South Korea",
			code: "KR"
		},
		area: {
			sn: "Busan",
			ln: "Busan"
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

function testKRNumberCallFromUS() {
	var parsed = new PhoneNumber("011 82-51-212-3456");
	var expected = {
		country: {
			sn: "South Korea",
			ln: "South Korea",
			code: "KR"
		},
		area: {
			sn: "Busan",
			ln: "Busan"
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

function testKRNumberWithAreaCodeAndCountry4() {
	var parsed = new PhoneNumber("+82-51-212-3456");
	var expected = {
		country: {
			sn: "Corée du Sud",
			ln: "Corée du Sud",
			code: "KR"
		},
		area: {
			sn: "Busan",
			ln: "Busan"
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

function testKRPolice() {
	var parsed = new PhoneNumber("112",{locale: "ko-KR"});
	var expected = {
		country: {
			sn: "남한",
			ln: "남한",
			code: "KR"
		},
		area: {
			sn: "Emergency Services Number",
			ln: "Emergency Services Number"
		}
	};
	var locator = new PhoneGeoLocator({locale: "ko-KR"});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testKRFireAndAmbulance() {
	var parsed = new PhoneNumber("119",{locale: "ko-KR"});
	var expected = {
		country: {
			sn: "남한",
			ln: "남한",
			code: "KR"
		},
		area: {
			sn: "Emergency Services Number",
			ln: "Emergency Services Number"
		}
	};
	var locator = new PhoneGeoLocator({locale: "ko-KR"});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

