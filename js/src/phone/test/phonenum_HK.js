function testLocalNumber(){
	var parsed = new ilib.PhoneNumber("23897077", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "23897077"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testFromIntl(){
	var parsed = new ilib.PhoneNumber("+85223897077", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "852",
		subscriberNumber: "23897077"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testMobile(){
	var parsed = new ilib.PhoneNumber("93897077", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		mobilePrefix: "9",
		subscriberNumber: "3897077"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testFromIntlToMobile(){
	var parsed = new ilib.PhoneNumber("+85293897077", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "852",
		mobilePrefix: "9",
		subscriberNumber: "3897077"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testLocalNumberWithMCC(){
	var parsed = new ilib.PhoneNumber("23897077", {locale: "en-US", mcc: "454"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "23897077"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLocalNumber(){
	var parsed = new ilib.PhoneNumber("2123 4567", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "21234567"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("22-34-56-78", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "22345678"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIgnoreCrap(){
	var parsed = new ilib.PhoneNumber("2!1@2$3-^4&5(6)7", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "21234567"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseServiceCode(){
	var parsed = new ilib.PhoneNumber("18501", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		serviceCode: "1",
		subscriberNumber: "8501"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMobileNumber(){
	var parsed = new ilib.PhoneNumber("51234567", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		mobilePrefix: "5",
		subscriberNumber: "1234567"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePlusIDDToUS(){
	var parsed = new ilib.PhoneNumber("+12028675309", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseZerosIDDToUS(){
	var parsed = new ilib.PhoneNumber("00112028675309", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "001",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseEmergencyNumber(){
	var parsed = new ilib.PhoneNumber("999", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "999"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseEmergencyNumberGSM(){
	var parsed = new ilib.PhoneNumber("112", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "112"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePartial1(){
	var parsed = new ilib.PhoneNumber("2", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "2"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePartial2(){
	var parsed = new ilib.PhoneNumber("21", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "21"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial3(){
	var parsed = new ilib.PhoneNumber("212", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "212"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial4(){
	var parsed = new ilib.PhoneNumber("2123", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "2123"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial5(){
	var parsed = new ilib.PhoneNumber("2123 4", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "21234"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial6(){
	var parsed = new ilib.PhoneNumber("2123 45", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "212345"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial7(){
	var parsed = new ilib.PhoneNumber("2123 456", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "2123456"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial8(){
	var parsed = new ilib.PhoneNumber("2123 4567", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "21234567"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial9(){
	var parsed = new ilib.PhoneNumber("2123 4567 8", {locale: "en-HK"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "212345678"
	}, {locale: "en-HK"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithUSMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-HK", mcc: "316"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en-US"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithFRMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-HK", mcc: "208"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithMXMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-HK", mcc: "334"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithDEMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-HK", mcc: "262"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-DE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithGBMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-HK", mcc: "235"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
