function testParseFRFull(){
	var parsed = new ilib.PhoneNumber("0112345678", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1",
		subscriberNumber: "12345678"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseFRIgnoreFormatting(){
	var parsed = new ilib.PhoneNumber("(01) 12 34 56 78", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1",
		subscriberNumber: "12345678"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseFRIgnoreCrap(){
	var parsed = new ilib.PhoneNumber("0@11$23%45&678", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1",
		subscriberNumber: "12345678"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseFRNoAreaCode(){
	var parsed = new ilib.PhoneNumber("12 34 56 78", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "12345678"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseFRPlusIDDToUS(){
	var parsed = new ilib.PhoneNumber("+12028675309", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseIDDToIEMobile(){
	var parsed = new ilib.PhoneNumber("+353 86 8223689", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		mobilePrefix: "86",
		subscriberNumber: "8223689"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};


function testParseFRZerosIDDToUS(){
	var parsed = new ilib.PhoneNumber("0012028675309", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseFRLongAreaCodeNoTrunk(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new ilib.PhoneNumber("1 23 45 67 89 00", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "12345678900"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseFRLocalNumber(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new ilib.PhoneNumber("12345678", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "12345678"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseFRPlusIDDToGB(){
	var parsed = new ilib.PhoneNumber("+442012345678", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseFRZerosIDDToGB(){
	var parsed = new ilib.PhoneNumber("00442012345678", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseFRDepartments(){
	var parsed = new ilib.PhoneNumber("0590 123 456", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseFRInternationalToDepartments(){
	var parsed = new ilib.PhoneNumber("+33 590 123 456", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		serviceCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseFRMobileNumber(){
	var parsed = new ilib.PhoneNumber("0712345678", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "7",
		subscriberNumber: "12345678"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseFRPartial1(){
	var parsed = new ilib.PhoneNumber("0", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};

function testParseFRPartial2(){
	var parsed = new ilib.PhoneNumber("05", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "5"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseFRPartial3(){
	var parsed = new ilib.PhoneNumber("051", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "5",
		subscriberNumber: "1"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseFRPartial4(){
	var parsed = new ilib.PhoneNumber("0512", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "5",
		subscriberNumber: "12"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseFRPartial5(){
	var parsed = new ilib.PhoneNumber("05123", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "5",
			subscriberNumber: "123"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseFRPartial6(){
	var parsed = new ilib.PhoneNumber("051234", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "5",
		subscriberNumber: "1234"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseFRPartial7(){
	var parsed = new ilib.PhoneNumber("0512345", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "5",
		subscriberNumber: "12345"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseFRPartial8(){
	var parsed = new ilib.PhoneNumber("05123456", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "5",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseFRPartial9(){
	var parsed = new ilib.PhoneNumber("051234567", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "5",
			subscriberNumber: "1234567"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};
function testParseFRPartial10(){
	var parsed = new ilib.PhoneNumber("0512345678", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "5",
			subscriberNumber: "12345678"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};


// for NOV-113777
function testParseLocalNumber(){
	var parsed = new ilib.PhoneNumber("41551735", {locale: "fr-FR"});
	assertNotUndefined(parsed);
	
	var expected = new ilib.PhoneNumber({
		subscriberNumber: "41551735"
	}, {locale: "fr-FR"});
	
	assertTrue(parsed.equals(expected));
	
};
