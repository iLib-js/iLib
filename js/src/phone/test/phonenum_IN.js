function testParseINFull(){
	var parsed = new ilib.PhoneNumber("01112345678", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12345678"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINFull2(){
	var parsed = new ilib.PhoneNumber("07753123456", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "7753",
		subscriberNumber: "123456"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("011-12345678", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12345678"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINIgnoreCrap(){
	var parsed = new ilib.PhoneNumber("01%1@-12$&34!56^7(8", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12345678"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseLocalNumber(){
	var parsed = new ilib.PhoneNumber("37654321", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "37654321"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseInvalidLocalNumber(){
	var parsed = new ilib.PhoneNumber("8765432100", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "8765432100",
		invalid: true
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseINMobileNumber(){
	var parsed = new ilib.PhoneNumber("9912345678", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		mobilePrefix: "991",
		subscriberNumber: "2345678"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};

// for CFISH-8481
function testParseINMobileNumberFromIntl(){
	var parsed = new ilib.PhoneNumber("+91 99123 45678", {locale: "en-us"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "91",
		mobilePrefix: "991",
		subscriberNumber: "2345678"
	}, {locale: "en-us"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseCic(){
	var parsed = new ilib.PhoneNumber("01054 80123 45678", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		cic: "1054",
		areaCode: "80",
		subscriberNumber: "12345678"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseINEmergencyNumber(){
	var parsed = new ilib.PhoneNumber("112", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "112"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINEmergencyNumberPlus(){
	var parsed = new ilib.PhoneNumber("112118", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		emergency: "112",
		subscriberNumber: "118"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseINPlusIDDToGB(){
	var parsed = new ilib.PhoneNumber("+442012345678", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseINZerosIDDToGB(){
	var parsed = new ilib.PhoneNumber("00442012345678", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseINPlusIDDToGBLongArea(){
	var parsed = new ilib.PhoneNumber("+441997123456", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "1997",
		subscriberNumber: "123456"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseINPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+4", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		subscriberNumber: "4"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+44", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+442", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		subscriberNumber: "2"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+4420", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+44201", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+442012", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "12"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+4420123", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "123"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+44201234", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1234"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+442012345", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "12345"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+4420123456", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "123456"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+44201234567", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1234567"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPlusIDDToGBPartial1(){
	var parsed = new ilib.PhoneNumber("+442012345678", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "12345678"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};


function testParseINPlusIDDToUnknown(){
	var parsed = new ilib.PhoneNumber("+5062012345678", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "506",
		subscriberNumber: "2012345678"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseINZerosIDDToUnknown(){
	var parsed = new ilib.PhoneNumber("005062012345678", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "506",
		subscriberNumber: "2012345678"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPartial1(){
	var parsed = new ilib.PhoneNumber("0", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseINPartial2(){
	var parsed = new ilib.PhoneNumber("01", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "1"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPartial3(){
	var parsed = new ilib.PhoneNumber("011", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPartial4(){
	var parsed = new ilib.PhoneNumber("0111", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "1"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPartial5(){
	var parsed = new ilib.PhoneNumber("01112", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPartial6(){
	var parsed = new ilib.PhoneNumber("011123", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "123"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPartial7(){
	var parsed = new ilib.PhoneNumber("0111234", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "1234"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPartial8(){
	var parsed = new ilib.PhoneNumber("01112345", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12345"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPartial9(){
	var parsed = new ilib.PhoneNumber("011123456", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "123456"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPartial10(){
	var parsed = new ilib.PhoneNumber("0111234567", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "1234567"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPartial11(){
	var parsed = new ilib.PhoneNumber("01112345678", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12345678"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPartial11(){
	var parsed = new ilib.PhoneNumber("011123456789", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "123456789",
		invalid: true	// number is too long
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseINPartialLocal1(){
	var parsed = new ilib.PhoneNumber("4", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "4"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseINPartialLocal2(){
	var parsed = new ilib.PhoneNumber("47", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "47"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPartialLocal3(){
	var parsed = new ilib.PhoneNumber("476", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "476"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPartialLocal4(){
	var parsed = new ilib.PhoneNumber("4765", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "4765"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPartialLocal5(){
	var parsed = new ilib.PhoneNumber("47654", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "47654"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPartialLocal6(){
	var parsed = new ilib.PhoneNumber("476543", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "476543"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPartialLocal7(){
	var parsed = new ilib.PhoneNumber("4765432", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "4765432"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseINPartialLocal8(){
	var parsed = new ilib.PhoneNumber("47654321", {locale: "en-IN"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "47654321"
	}, {locale: "en-IN"});
	
	assertTrue(parsed.equals(expected));
	
};
