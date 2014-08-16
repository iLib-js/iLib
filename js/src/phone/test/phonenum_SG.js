// for bug NOV-118901
function testLocalNumber(){
	var parsed = new ilib.PhoneNumber("93897077", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "93897077"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testFromIntl(){
	var parsed = new ilib.PhoneNumber("+6593897077", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "65",
		subscriberNumber: "93897077"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testLocalNumberWithMCC(){
	var parsed = new ilib.PhoneNumber("83897077", {locale: "en-US", mcc: "525"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "83897077"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLocalNumber(){
	var parsed = new ilib.PhoneNumber("6123 4567", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "61234567"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("62-34-56-78", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "62345678"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIgnoreCrap(){
	var parsed = new ilib.PhoneNumber("6!1@2$3-^4&5(6)7", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "61234567"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseServiceCode(){
	var parsed = new ilib.PhoneNumber("1800 345 6789", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		serviceCode: "1800",
		subscriberNumber: "3456789"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseMobileNumber(){
	var parsed = new ilib.PhoneNumber("81234567", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "81234567"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePlusIDDToUS(){
	var parsed = new ilib.PhoneNumber("+12028675309", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseZerosIDDToUS(){
	var parsed = new ilib.PhoneNumber("00112028675309", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "001",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseEmergencyNumber(){
	var parsed = new ilib.PhoneNumber("999", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "999"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePartial1(){
	var parsed = new ilib.PhoneNumber("6", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParsePartial2(){
	var parsed = new ilib.PhoneNumber("61", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "61"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial3(){
	var parsed = new ilib.PhoneNumber("612", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "612"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial4(){
	var parsed = new ilib.PhoneNumber("6123", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6123"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial5(){
	var parsed = new ilib.PhoneNumber("6123 4", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "61234"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial6(){
	var parsed = new ilib.PhoneNumber("6123 45", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "612345"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial7(){
	var parsed = new ilib.PhoneNumber("6123 456", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6123456"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial8(){
	var parsed = new ilib.PhoneNumber("6123 4567", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "61234567"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParsePartial9(){
	var parsed = new ilib.PhoneNumber("6123 4567 8", {locale: "en-SG"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "612345678"
	}, {locale: "en-SG"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithUSMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-SG", mcc: "316"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en-US"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithFRMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-SG", mcc: "208"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithMXMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-SG", mcc: "334"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en-MX"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithDEMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-SG", mcc: "262"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-DE"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseWithGBMCC(){
	var parsed = new ilib.PhoneNumber("6153222313", {locale: "en-SG", mcc: "235"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en-GB"});
	
	assertTrue(parsed.equals(expected));
	
};
