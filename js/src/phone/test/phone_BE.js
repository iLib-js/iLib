function testParseFull(){
	var parsed = new ilib.PhoneNumber("038234567", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "8234567"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("03-823-45-67", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "8234567"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIgnoreCrap(){
	var parsed = new ilib.PhoneNumber("0@3!8$2^34(56_7", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "8234567"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseNoAreaCode(){
	var parsed = new ilib.PhoneNumber("8234567", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "8234567"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePlusIDDToUS(){
	var parsed = new ilib.PhoneNumber("+12028675309", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseZerosIDDToUS(){
	var parsed = new ilib.PhoneNumber("0012028675309", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLongAreaCodeNoTrunk(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new ilib.PhoneNumber("71123456", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "71123456"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLocalNumber(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new ilib.PhoneNumber("82 34 56", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "823456"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePlusIDDToGB(){
	var parsed = new ilib.PhoneNumber("+442082345678", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "82345678"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseZerosIDDToGB(){
	var parsed = new ilib.PhoneNumber("00442082345678", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "82345678"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseEmergencyNumber(){
	var parsed = new ilib.PhoneNumber("112", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			emergency: "112"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseEmergencyNumberPlus(){
	var parsed = new ilib.PhoneNumber("112115", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			emergency: "112",
			subscriberNumber: "115"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMobileNumber(){
	var parsed = new ilib.PhoneNumber("0492 823456", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "492",
		subscriberNumber: "823456"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseInternational(){
	var parsed = new ilib.PhoneNumber("+32 3 823 45 67", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "32",
		areaCode: "3",
		subscriberNumber: "8234567"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseInternationalMobile(){
	var parsed = new ilib.PhoneNumber("+32 492 823 456", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "32",
		mobilePrefix: "492",
		subscriberNumber: "823456"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseService(){
	var parsed = new ilib.PhoneNumber("0800 82345678", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "800",
		subscriberNumber: "82345678"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseBlock(){
	var parsed = new ilib.PhoneNumber("116116", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		serviceCode: "116",
		subscriberNumber: "116"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePartial1(){
	var parsed = new ilib.PhoneNumber("0", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePartial2(){
	var parsed = new ilib.PhoneNumber("05", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "5"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial3(){
	var parsed = new ilib.PhoneNumber("058", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "58"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial4(){
	var parsed = new ilib.PhoneNumber("0584", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "58",
		subscriberNumber: "4"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial5(){
	var parsed = new ilib.PhoneNumber("05844", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "58",
		subscriberNumber: "44"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial6(){
	var parsed = new ilib.PhoneNumber("058441", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "58",
		subscriberNumber: "441"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial7(){
	var parsed = new ilib.PhoneNumber("0584412", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "58",
		subscriberNumber: "4412"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial8(){
	var parsed = new ilib.PhoneNumber("05844123", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "58",
		subscriberNumber: "44123"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial9(){
	var parsed = new ilib.PhoneNumber("058441234", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "58",
			subscriberNumber: "441234"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial10(){
	var parsed = new ilib.PhoneNumber("0584412345", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "58",
			subscriberNumber: "4412345"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial11(){
	var parsed = new ilib.PhoneNumber("05844123456", {locale: "nl-BE"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "58",
			subscriberNumber: "44123456"
	}, {locale: "nl-BE"});
	
	assertTrue(parsed.equals(expected));
	
};