function testParseITFull(){
	var parsed = new ilib.PhoneNumber("06 1234 5678", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "12345678"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseITIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("(06) 1234 5678", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "12345678"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseITIgnoreCrap(){
	var parsed = new ilib.PhoneNumber("0@61$23%45&678", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "12345678"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseITPlusIDDToUS(){
	var parsed = new ilib.PhoneNumber("+12028675309", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseITZerosIDDToUS(){
	var parsed = new ilib.PhoneNumber("0012028675309", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIDDToSanMarino(){
	var parsed = new ilib.PhoneNumber("+378 0549 123 456", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	// San Marino should use the Italian parsing algorithm, so we can get the parts instead
	// of everything being in the subscriber number
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "549",
		subscriberNumber: "123456"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseITPlusIDDToGB(){
	var parsed = new ilib.PhoneNumber("+442012345678", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseITZerosIDDToGB(){
	var parsed = new ilib.PhoneNumber("00442012345678", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseEmergencyNumber(){
	var parsed = new ilib.PhoneNumber("112", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			emergency: "112"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseEmergencyNumberPlus(){
	var parsed = new ilib.PhoneNumber("112115", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			emergency: "112",
			subscriberNumber: "115"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseITMobileNumber(){
	var parsed = new ilib.PhoneNumber("3991234567", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		mobilePrefix: "399",
		subscriberNumber: "1234567"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseITServiceNumber(){
	var parsed = new ilib.PhoneNumber("7991234567", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		serviceCode: "799",
		subscriberNumber: "1234567"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseITNetServiceNumber(){
	var parsed = new ilib.PhoneNumber("4345654343", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		serviceCode: "4",
		subscriberNumber: "345654343"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseITSpecialRateNumber(){
	var parsed = new ilib.PhoneNumber("8991234567", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		serviceCode: "899",
		subscriberNumber: "1234567"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseITPartial1(){
	var parsed = new ilib.PhoneNumber("0", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseITPartial2(){
	var parsed = new ilib.PhoneNumber("05", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "5"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseITPartial3(){
	var parsed = new ilib.PhoneNumber("057", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "57"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseITPartial4(){
	var parsed = new ilib.PhoneNumber("0577", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "577"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseITPartial5(){
	var parsed = new ilib.PhoneNumber("0577 1", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "577",
			subscriberNumber: "1"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseITPartial6(){
	var parsed = new ilib.PhoneNumber("0577 12", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "577",
		subscriberNumber: "12"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseITPartial7(){
	var parsed = new ilib.PhoneNumber("0577 123", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "577",
		subscriberNumber: "123"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseITPartial8(){
	var parsed = new ilib.PhoneNumber("0577 1234", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "577",
		subscriberNumber: "1234"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseITPartial9(){
	var parsed = new ilib.PhoneNumber("0577 12345", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "577",
			subscriberNumber: "12345"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseITPartial10(){
	var parsed = new ilib.PhoneNumber("0577 123456", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "577",
			subscriberNumber: "123456"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};

// for bug NOV-115337
function testParseIntlToMobile(){
	var parsed = new ilib.PhoneNumber("+3939012345678", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "39",
			mobilePrefix: "390",
			subscriberNumber: "12345678"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseIntlToAreaCode(){
	var parsed = new ilib.PhoneNumber("+3903912345678", {locale: "it-IT"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "39",
			trunkAccess: "0",
			areaCode: "39",
			subscriberNumber: "12345678"
	}, {locale: "it-IT"});
	
	assertTrue(parsed.equals(expected));
	
};
