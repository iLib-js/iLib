function testParseGBFull(){
	var parsed = new ilib.PhoneNumber("020 1234 5678", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBLocalNumber(){
	var parsed = new ilib.PhoneNumber("3456789", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "3456789"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBBogusPrefix(){
	var parsed = new ilib.PhoneNumber("06 69812345", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "669812345"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};


function testParseGBFullLongAreaCode(){
	var parsed = new ilib.PhoneNumber("01946712345", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "19467",
		subscriberNumber: "12345"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBFullSpecialAreaCode(){
	var parsed = new ilib.PhoneNumber("01946123456", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1946",
		subscriberNumber: "123456"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("(020) 1234-5678", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBFullLongAreaCodeIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("(01999)123456", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1999",
		subscriberNumber: "123456"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBIgnoreCrap(){
	var parsed = new ilib.PhoneNumber("$020@1234&5678-", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBNoAreaCode(){
	var parsed = new ilib.PhoneNumber("82345678", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "82345678"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseInvalidLocalNumber(){
	var parsed = new ilib.PhoneNumber("12345678", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "12345678",
		invalid: true
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBServiceCode(){
	var parsed = new ilib.PhoneNumber("034012345678", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "340",
		subscriberNumber: "12345678"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBWithVSC(){
	var parsed = new ilib.PhoneNumber("14102012345678", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		vsc: "141",
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBPersonalNumbering(){
	var parsed = new ilib.PhoneNumber("07012345678", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "70",
		subscriberNumber: "12345678"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBMobileNumber(){
	var parsed = new ilib.PhoneNumber("07534123456", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "7534",
		subscriberNumber: "123456"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBPlusIDDToUS(){
	var parsed = new ilib.PhoneNumber("+12028675309", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBZerosIDDToUS(){
	var parsed = new ilib.PhoneNumber("0012028675309", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBLongAreaCodeNoTrunk(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new ilib.PhoneNumber("1999123456", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "1999123456",
		invalid: true
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBEmergencyNumber(){
	var parsed = new ilib.PhoneNumber("116", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "116"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBEmergencyNumberPlus(){
	var parsed = new ilib.PhoneNumber("116116", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "116",
		subscriberNumber: "116"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBPartial1(){
	var parsed = new ilib.PhoneNumber("0", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseGBPartial2(){
	var parsed = new ilib.PhoneNumber("01", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "1"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial3(){
	var parsed = new ilib.PhoneNumber("019", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "19"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial4(){
	var parsed = new ilib.PhoneNumber("0199", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "199"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial5(){
	var parsed = new ilib.PhoneNumber("01999", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1999"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial6(){
	var parsed = new ilib.PhoneNumber("019991", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1999",
		subscriberNumber: "1"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial7(){
	var parsed = new ilib.PhoneNumber("0199912", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1999",
		subscriberNumber: "12"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial8(){
	var parsed = new ilib.PhoneNumber("01999123", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1999",
		subscriberNumber: "123"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial9(){
	var parsed = new ilib.PhoneNumber("019991234", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1999",
			subscriberNumber: "1234"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial10(){
	var parsed = new ilib.PhoneNumber("0199912345", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1999",
			subscriberNumber: "12345"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseGBPartial11(){
	var parsed = new ilib.PhoneNumber("01999123456", {locale: "en-GB"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1999",
			subscriberNumber: "123456"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithUSMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-GB", mcc: "316"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en-US"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithFRMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-GB", mcc: "208"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithMXMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-GB", mcc: "334"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithDEMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-GB", mcc: "262"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-DE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithGBMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-GB", mcc: "235"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
