/*
 * phonegeo.js - Test the GeoLocator Object.
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

function testNANP() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "650",
		subscriberNumber: "6543210"
	});
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

	var locator = new ilib.GeoLocator();
	var geoInfo = locator.locate(parsed);
	
	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testNANPLocalNumber() {
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "6543210"
	});
	var expected = {
		country: {
			sn: "North America",
			ln: "North America and the Caribbean Islands",
			code: "US"
		}
	};
	
	var locator = new ilib.GeoLocator({locale: 'en-US'});
	var geoInfo = locator.locate(parsed);
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
};

function testNANPServiceNumber() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "888",
		subscriberNumber: "6543210"
	});
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

	var locator = new ilib.GeoLocator({locale: 'en-US'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testNANPEmergencyLikeServiceNumber() {
	var parsed = new ilib.PhoneNumber({
		serviceCode: "411"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'en-US'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testNANPEmergency() {
	var parsed = new ilib.PhoneNumber({
		emergency: "911"
	});
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
	var locator = new ilib.GeoLocator();
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testNANPNoLocale() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "650",
		subscriberNumber: "6543210"
	});
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
	
	var locator = new ilib.GeoLocator();
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testNANPOtherLocale() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "650",
		subscriberNumber: "6543210"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'fr-FR'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);
	
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testNANPUnknownAreaCode() {
	var parsed = new ilib.PhoneNumber({
		areaCode: "875",
		subscriberNumber: "6543210"
	});
	var expected = {
		country: {
			sn: "North America",
			ln: "North America and the Caribbean Islands",
			code: "US"
		}
	};
	
	var locator = new ilib.GeoLocator({locale: 'en-US'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
};

function testDefaultCountry() {
	var parsed = new ilib.PhoneNumber({
		areaCode: "650",
		subscriberNumber: "6543210"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'en-US'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);

};

//for bug NOV-118981
function testNANPInvalidNumber() {
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "234"
	});
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

	var locator = new ilib.GeoLocator({locale: 'en-US'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testDefaultDE() {
	var parsed = new ilib.PhoneNumber({
		areaCode: "6224",
		subscriberNumber: "123456"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'de-DE'});
	var geoInfo = locator.locate(parsed);
	
	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testDEMobileNumber() {
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "17",
		subscriberNumber: "12345678"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'de-DE'});
	var geoInfo = locator.locate(parsed);
	
	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testDEServiceNumber() {
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "12",
		subscriberNumber: "12345678"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'de-DE'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testDEEmergency() {
	var parsed = new ilib.PhoneNumber({
		emergency: "112"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'de-DE'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};


function testDELocal() {
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "12345678"
	}, {locale: 'de-DE'});
	var expected = {
		country: {
			sn: "Deutschland",
			ln: "Deutschland",
			code: "DE"
		}
	};
	
	var locator = new ilib.GeoLocator({locale: 'de-DE'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
};

function testDefaultHK() {
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "663",
		subscriberNumber: "12345678"
	}, {locale: 'en-HK'});
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
	var locator = new ilib.GeoLocator({locale: 'zh-HK', mcc: "460"});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testHKMobileNumber() {
	var parsed = new ilib.PhoneNumber({
		mobilePrefix: "150",
		subscriberNumber: "05179573"
	}, {locale: 'en-HK'});
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
	var locator = new ilib.GeoLocator({locale: 'zh-HK', mcc: "460"});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testDefaultCN() {
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "663",
		subscriberNumber: "12345678"
	}, {locale: 'zh-CN'});
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
	
	var locator = new ilib.GeoLocator({locale: 'zh-CN'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testCNMobileNumber() {
	var parsed = new ilib.PhoneNumber({
		mobilePrefix: "150",
		subscriberNumber: "05179573"
	}, {locale: 'zh-CN'});
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
	
	var locator = new ilib.GeoLocator({locale: 'zh-CN'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testUK() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "161",
		subscriberNumber: "1234567"
	}, {locale: 'en-GB'});
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

	var locator = new ilib.GeoLocator({locale: 'en-GB'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testGB() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "161",
		subscriberNumber: "1234567"
	}, {locale: 'en-GB'});
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

	var locator = new ilib.GeoLocator({locale: 'en-GB'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testUKMobile() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		mobilePrefix: "75",
		subscriberNumber: "12345678"
	}, {locale: 'en-GB'});
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
	
	var locator = new ilib.GeoLocator({locale: 'en-GB'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testUKService() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		serviceCode: "303",
		subscriberNumber: "1234567"
	}, {locale: 'en-GB'});
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
	
	var locator = new ilib.GeoLocator({locale: 'en-GB'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testUKLocal() {
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "1234567"
	}, {locale: 'en-GB'});
	var expected = {
		country: {
			sn: "United Kingdom",
			ln: "United Kingdom, Guernsey, Isle of Man, Jersey",
			code: "GB"
		}
	};
	
	var locator = new ilib.GeoLocator({locale: 'en-GB'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
};


function testFR() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		areaCode: "1",
		subscriberNumber: "12345678"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'fr-FR'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testFRMobile() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		mobilePrefix: "6",
		subscriberNumber: "23456789"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'fr-FR'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testFRService() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		serviceCode: "690",
		subscriberNumber: "123456"
	});
	var expected = {
		country: {
			sn: "France",
			ln: "France",
			code: "FR"
		},
		area: {
			sn: "Numéro de service",
			ln: "Numéro de service"
		}
	};
	
	var locator = new ilib.GeoLocator({locale: 'fr-FR'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testFRDepartment() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		serviceCode: "262",
		subscriberNumber: "123456"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'fr-FR'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testFRFreephone() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		serviceCode: "800",
		subscriberNumber: "123456"
	});
	var expected = {
		country: {
			sn: "France",
			ln: "France",
			code: "FR"
		},
		area: {
			sn: "Numéro de service",
			ln: "Numéro de service"
		}
	};
	
	var locator = new ilib.GeoLocator({locale: 'fr-FR'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testFRToll() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		serviceCode: "810",
		subscriberNumber: "123456"
	});
	var expected = {
		country: {
			sn: "France",
			ln: "France",
			code: "FR"
		},
		area: {
			sn: "Numéro de service",
			ln: "Numéro de service"
		}
	};
	
	var locator = new ilib.GeoLocator({locale: 'fr-FR'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testDE() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "49",
		areaCode: "6224",
		subscriberNumber: "123456"
	});
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

	var locator = new ilib.GeoLocator({locale: 'de-DE'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testIT() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "75",
		subscriberNumber: "12345678"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'it-IT'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

// for bug NOV-115337
function testITIntl() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "39",
		subscriberNumber: "12345678"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'it-IT'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testITIntlMobile() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		mobilePrefix: "390",
		subscriberNumber: "12345678"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'it-IT'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testES() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "34",
		areaCode: "930",	
		subscriberNumber: "123456"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'es-ES'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testMX() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "52",
		areaCode: "755",
		subscriberNumber: "1234567"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'en-MX'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testMXLocal() {
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "12345678"
	});
	var expected = {
		country: {
			sn: "Mexico",
			ln: "Mexico",
			code: "MX"
		}
	};
	
	var locator = new ilib.GeoLocator({locale: 'en-MX'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
};

function testAU() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "61",
		areaCode: "8",	
		subscriberNumber: "92012345"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'es-AU'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testAUMobile() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "61",
		mobilePrefix: "4",	
		subscriberNumber: "2012345"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'es-AU'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testAUUnknownAreaWithinACity() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "61",
		areaCode: "2",	
		subscriberNumber: "91202343"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'es-AU'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testAUUnknownAreaWithinCountry() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "61",
		areaCode: "3",	
		subscriberNumber: "12345678"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'es-AU'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testNZ() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "64",
		areaCode: "3",	
		subscriberNumber: "96012345"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'es-NZ'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testNZWithDot() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "64",
		areaCode: "3",	
		subscriberNumber: "23312345"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'es-NZ'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testNZMobile() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "64",
		mobilePrefix: "21",	
		subscriberNumber: "2012345"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'es-NZ'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testNZUnknownAreaWithinACity() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "64",
		areaCode: "9",	
		subscriberNumber: "46202343"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'es-NZ'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testNZUnknownAreaWithinCountry() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "64",
		areaCode: "3",	
		subscriberNumber: "812345678"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'es-NZ'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testUnknown() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "506",
		areaCode: "20",
		subscriberNumber: "123456"
	});
	var expected = {
		country: {
			sn: "Costa Rica",
			ln: "Costa Rica",
			code: "CR"
		}
	};

	var locator = new ilib.GeoLocator({locale: 'en-US'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
};

function testMobile() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "49",
		mobilePrefix: "16",
		subscriberNumber: "12345678"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'en-US'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testWithUSMCC() {
	var parsed = new ilib.PhoneNumber({
		areaCode: "650",
		subscriberNumber: "1234567"
	});
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
	
	var locator = new ilib.GeoLocator(parsed, {locale: 'en-US', mcc: '316'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testWithUSMCCNoLocale() {
	var parsed = new ilib.PhoneNumber({
		areaCode: "650",
		subscriberNumber: "1234567"
	});
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
	
	var locator = new ilib.GeoLocator({mcc: '316'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testDEMCCEnglishLocale() {
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6224",
		subscriberNumber: "123456"
	});
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

	var locator = new ilib.GeoLocator({locale: 'en-US', mcc: '262'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testDEMCCGermanLocale() {
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6224",
		subscriberNumber: "123456"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'de-DE', mcc: '262'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testDEMCCFrenchLocaleUSCountryCode() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "650",
		subscriberNumber: "5551212"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'fr-FR', mcc: '262'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testBogusCountryCode() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "P1",
		areaCode: "650",
		subscriberNumber: "5551212"
	});
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

	var locator = new ilib.GeoLocator({locale: 'en-US'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testBogusAreaCode() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "650P",
		subscriberNumber: "5551212"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'en-US'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

// for bug NOV-115625
function testNumberTooLongUS() {
	var parsed = new ilib.PhoneNumber({
		areaCode: "941",
		subscriberNumber: "62719524"
	});
	var expected = {
		country: {
			sn: "North America",
			ln: "North America and the Caribbean Islands",
			code: "US"
		}
	};

	var locator = new ilib.GeoLocator({locale: 'en-US'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
};

// no fixed length in Germany, so there should not be any numbers that are "too long"
function testNumberTooLongDE() {
	var parsed = new ilib.PhoneNumber({
		areaCode: "6224",
		subscriberNumber: "12345678901234567890"
	});
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
	
	var locator = new ilib.GeoLocator({locale: 'de-DE'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);
};

function testInvalidNumber() {
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "234"
	});
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

	var locator = new ilib.GeoLocator({locale: 'en-US'});
	var geoInfo = locator.locate(parsed);
	assertNotUndefined(locator);

	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.sn, geoInfo.country.sn);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.area.sn, geoInfo.area.sn);
	assertEquals(expected.area.ln, geoInfo.area.ln);	
};

function testGetCountryCode() {
	var country;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "49",
		areaCode: "6224",
		subscriberNumber: "12345678901234567890"
	});
	
	var locator = new ilib.GeoLocator();
	country = locator.country(parsed);

	assertNotUndefined(locator);
	assertEquals('DE', country);
};

function testGetCountryCode2() {
	var country;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "61",
		areaCode: "2",
		subscriberNumber: "12345678"
	});
	
	var locator = new ilib.GeoLocator();
	country = locator.country(parsed);

	assertNotUndefined(locator);
	assertEquals('AU', country);
};

function testGetCountryCodeUndefined() {
	var locator = new ilib.GeoLocator();
	var geoInfo = locator.country(undefined);
	
	assertNotUndefined(locator);
	assertNotUndefined(undefined === geoInfo);
};

function testGetCountryCodeLocalNumber() {
	var country;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6224",
		subscriberNumber: "12345678901234567890"
	}, {locale: "de-DE"});
	
	
	var locator = new ilib.GeoLocator({locale: 'de-DE'});
	country = locator.country(parsed);

	assertNotUndefined(locator);
	assertEquals('DE', country);
};

function testGetCountryCodeLocalNumberNoLocale() {
	var country;
	var parsed = new ilib.PhoneNumber({
		areaCode: "905",
		subscriberNumber: "5551212"
	}, {locale: "en-US"});
	
	var locator = new ilib.GeoLocator({locale: 'en-US'});
	country = locator.country(parsed);

	assertNotUndefined(locator);
	assertEquals('CA', country);	
};

function testGetCountryCodeLocalNumberNoLocaleDefault() {
	var country;
	var parsed = new ilib.PhoneNumber({
		areaCode: "650",
		subscriberNumber: "5551212"
	});
	
	var locator = new ilib.GeoLocator();
	country = locator.country(parsed);
	
	assertNotUndefined(locator);
	assertEquals('US', country);	
};

function testGetCountryCodeLocalNumberNoAreaCode() {
	var country;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "175",
		subscriberNumber: "12345678"
	}, {locale: "de-DE"});
	
	var locator = new ilib.GeoLocator({locale: 'de-DE'});
	country = locator.country(parsed);

	assertNotUndefined(locator);
	assertEquals('DE', country);	
};

function testGetCountryCodeHaveCountryButNoAreaCode() {
	var country;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "49",
		mobilePrefix: "175",
		subscriberNumber: "12345678"
	}, {locale: "de-DE"});
	
	var locator = new ilib.GeoLocator({locale: 'de-DE'});
	country = locator.country(parsed);

	assertNotUndefined(locator);
	assertEquals('DE', country);	
};

function testGetCountryCodeHaveCountryButNoAreaCodeFR() {
	var country;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		mobilePrefix: "6",
		subscriberNumber: "12345678"
	});
	
	var locator = new ilib.GeoLocator({locale: 'fr-FR'});
	country = locator.country(parsed);

	assertNotUndefined(locator);
	assertEquals('FR', country);
};

function testGetCountryCodeUS() {
	var country;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "408",
		subscriberNumber: "5551212"
	});
	
	var locator = new ilib.GeoLocator();
	country = locator.country(parsed);

	assertNotUndefined(locator);
	assertEquals('US', country);
};

function testGetCountryCodeCA() {
	var country;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "705",
		subscriberNumber: "5551212"
	});
	
	var locator = new ilib.GeoLocator();
	country = locator.country(parsed);	
	
	assertNotUndefined(locator);
	assertEquals('CA', country);
};

function testGetCountryCodeCaribbean() {
	var country;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "876",
		subscriberNumber: "5551212"
	});
	
	var locator = new ilib.GeoLocator(parsed);
	country = locator.country(parsed);

	assertNotUndefined(locator);	
	assertEquals('JM', country);
};

function testGetCountryCodeCaribbean2() {
	var country;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "284",
		subscriberNumber: "5551212"
	});
	
	var locator = new ilib.GeoLocator();
	country = locator.country(parsed);

	assertNotUndefined(locator);
	assertEquals('VG', country);
};

function testGetCountryCodeItalySanMarino() {
	var country;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "549",
		subscriberNumber: "87654321"
	});
	
	var locator = new ilib.GeoLocator();
	country = locator.country(parsed);

	assertNotUndefined(locator);
	assertEquals('SM', country);
};

function testGetCountryCodeItalyRome() {
	var country;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "87654321"
	});
	
	var locator = new ilib.GeoLocator();
	country = locator.country(parsed);
	
	assertNotUndefined(locator);
	assertEquals('IT', country);
};

function testGetCountryCodeFranceParis() {
	var country;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		trunkAccess: "0",
		areaCode: "1",
		subscriberNumber: "87654321"
	});
	
	var locator = new ilib.GeoLocator();
	country = locator.country(parsed);

	assertNotUndefined(locator);
	assertEquals('FR', country);
};

function testGetCountryCodeFranceReunion() {
	var country;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		trunkAccess: "0",
		serviceCode: "262",
		subscriberNumber: "654321"
	});
	
	var locator = new ilib.GeoLocator();
	country = locator.country(parsed);
	
	assertNotUndefined(locator);
	assertEquals('RE', country);		
};

function testGetCountryCodeFranceMartinique() {
	var country;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		trunkAccess: "0",
		serviceCode: "596",
		subscriberNumber: "654321"
	});
	
	var locator = new ilib.GeoLocator();
	country = locator.country(parsed);

	assertNotUndefined(locator);
	assertEquals('MQ', country);	
};

// for bug NOV-118981
function testInvalidNumber() {
	var country;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "234"
	});
	
	var locator = new ilib.GeoLocator();
	country = locator.country(parsed);

	assertNotUndefined(locator);
	assertEquals('US', country);	
};

function testSG() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "65",
		subscriberNumber: "25432102"
	});
	var expected = {
		country: {
			sn: "Singapore",
			ln: "Republic of Singapore",
			code: "SG"
		}
	};
	
	var locator = new ilib.GeoLocator({locale: 'en-US'});
	var geoInfo = locator.locate(parsed);
	
	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.country.sn, geoInfo.country.sn);
};

function testSGLocal() {
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "25432102"
	});
	var expected = {
		country: {
			sn: "Singapore",
			ln: "Republic of Singapore",
			code: "SG"
		}
	};
	
	var locator = new ilib.GeoLocator({locale: 'en-SG'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.country.sn, geoInfo.country.sn);
};

function testSGMobile() {
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "65432102"
	});
	var expected = {
		country: {
			sn: "Singapore",
			ln: "Republic of Singapore",
			code: "SG"
		}
	};
	
	var locator = new ilib.GeoLocator({locale: 'en-SG'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.country.sn, geoInfo.country.sn);
};

function testHK() {
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "852",
		subscriberNumber: "25432102"
	});
	var expected = {
		country: {
			sn: "Hong Kong",
			ln: "Hong Kong",
			code: "HK"
		}
	};
	
	var locator = new ilib.GeoLocator({locale: 'en-US'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.country.sn, geoInfo.country.sn);
};

function testHKLocal() {
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "25432102"
	});
	var expected = {
		country: {
			sn: "Hong Kong",
			ln: "Hong Kong",
			code: "HK"
		}
	};
	
	var locator = new ilib.GeoLocator({locale: 'en-HK'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.country.sn, geoInfo.country.sn);
};

function testHKMobile() {
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "65432102"
	});
	var expected = {
		country: {
			sn: "Hong Kong",
			ln: "Hong Kong",
			code: "HK"
		}
	};
	
	var locator = new ilib.GeoLocator({locale: 'en-HK'});
	var geoInfo = locator.locate(parsed);

	assertNotUndefined(locator);
	assertEquals(expected.country.code, geoInfo.country.code);
	assertEquals(expected.country.ln, geoInfo.country.ln);
	assertEquals(expected.country.sn, geoInfo.country.sn);
};

function mockLoader(paths, sync, params, callback) {
	var data = [];
	
	data.push(ilib.data.area_US); // for the generic, shared stuff
	
	if (typeof(callback) !== 'undefined') {
		callback.call(this, data);	
	}
	return data;
}

function testPhoneGeoLoadLocaleDataSynch() {
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}

	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "650",
		subscriberNumber: "6543210"
	});

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

	ilib.GeoLocator.cache = {};
	ilib.setLoaderCallback(mockLoader);

	var locator = new ilib.GeoLocator({locale: 'en-US',
		sync: false,
		onLoad: function (loc) {
    		assertNotNull(loc);
    	}
	});

    assertNotNull(locator);
	var geoInfo = locator.locate(parsed);
    assertObjectEquals(expected, geoInfo);
    ilib.setLoaderCallback(undefined);
};