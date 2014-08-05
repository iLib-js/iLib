function testNumberMatchFRDepartments1(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertEquals(100, left.compare(right));
};

function testStringsNumberMatchUSIgnoreSomeFields() {
	var left = new ilib.PhoneNumber('1 (650) 456-7890');
		right = new ilib.PhoneNumber('650-456-7890');
	assertNotUndefined(left);
	assertEquals(100, left.compare(right));
};

function testNumberMatchFRDepartments1(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchFRDepartments1(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchFRDepartments1Reverse(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertEquals(100, right.compare(left));
};

function testNumberMatchFRDepartmentsWrongArea(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "591",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertEquals(0, left.compare(right));
};

function testNumberMatchFRDepartmentsWrongAreaReverse(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "591",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertEquals(0, right.compare(left));
};

function testNumberMatchFRDepartmentsDifferentCountryCodes(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertEquals(100, left.compare(right));
};
/*
[Q] value 0
function testNumberMatchFRDifferentSN(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123454"
	}, {locale: "fr-FR"});
	
	assertEquals(20, left.compare(right));	
};
*/

function testNumberMatchUSTrunk(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchUSTrunkReverse(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	
	assertEquals(100, right.compare(left));
};

function testNumberMatchUSTrunkDefaultLocale(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	});
	var right = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchUSTrunkDefaultLocaleReverse(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	});
	var right = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	});
	
	assertEquals(100, right.compare(left));
};

function testNumberMatchUSTrunkWrongLocale(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "fr-FR"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchUSTrunkWrongLocaleReverse(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "fr-FR"});
	
	assertEquals(100, right.compare(left));
};


function testNumberMatchUSMissingArea(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	
	assertEquals(88, left.compare(right));
};

function testNumberMatchUSMissingAreaReverse(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	
	assertEquals(88, right.compare(left));
};

function testNumberMatchUSDifferentArea(){
	var left = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		areaCode: "407",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	
	assertEquals(0, left.compare(right));
};

function testNumberMatchUSDifferentAreaReverse(){
	var left = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		areaCode: "407",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	
	assertEquals(0, right.compare(left));
};
/*
[Q] value : 100
function testNumberMatchUSCompletelyDifferentCountryCodes(){
	// different area codes, where neither is the US
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "30",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "34",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	
	assertEquals(0, left.compare(right));
};
*/
/*
[Q] value : 68.
function testNumberMatchUSMissingCountryCodeThisCountry(){
	// missing area code, where the one that is present is the same as the locale
	var left = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "es-ES"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "34",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "es-ES"});
	
	assertEquals(84, left.compare(right));
};
*/
/* [Q] value : 68
function testNumberMatchUSMissingCountryCodeThisCountryReverse(){
	// missing area code, where the one that is present is the same as the locale
	var left = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "es-ES"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "34",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "es-ES"});
	
	assertEquals(84, right.compare(left));
};
*/
function testNumberMatchUSMissingCountryCodeOtherCountry(){
	// missing area codes, where the one that is present is not the same as the current locale (US)
	var left = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "34",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	
	assertEquals(68, left.compare(right));
};

function testNumberMatchUSMissingCountryCodeOtherCountryReverse(){
	// missing area codes, where the one that is present is not the same as the current locale (US)
	var left = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "34",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en-US"});
	
	assertEquals(68, right.compare(left));
};

function testNumberMatchITSanMarino(){
	var left = new ilib.PhoneNumber({
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "it-IT"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "it-IT"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchITSanMarinoReverse(){
	var left = new ilib.PhoneNumber({
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "it-IT"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "it-IT"});
	
	assertEquals(100, right.compare(left));
};


function testNumberMatchUSSanMarino(){
	var left = new ilib.PhoneNumber({
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en-US"});

	// only a 100% match if calling from inside of italy
	assertEquals(68, left.compare(right));
};

function testNumberMatchITSanMarinoWrongArea(){
	var left = new ilib.PhoneNumber({
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "374",
		subscriberNumber: "123456"
	}, {locale: "it-IT"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "it-IT"});
	
	assertEquals(0, left.compare(right));
};

function testNumberMatchITSanMarinoDifferentCountryCodes(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchITSanMarinoDifferentCountryCodesReverse(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	
	assertEquals(100, right.compare(left));
};

function testNumberMatchITSanMarinoDifferentCountryCodesDiffAreaCodes(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "00",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "374",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	
	assertEquals(0, left.compare(right));
};

function testNumberMatchITVaticanCity(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "379",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it-IT"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it-IT"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchITVaticanCityReverse(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "379",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it-IT"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it-IT"});
	
	assertEquals(100, right.compare(left));
};

function testNumberMatchITOther(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it-IT"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it-IT"});
	
	assertEquals(84, left.compare(right));
};

function testNumberMatchITOtherReverse(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it-IT"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it-IT"});
	
	assertEquals(84, right.compare(left));
};

function testNumberMatchUSDifferentCountryCodesIT(){
	// both ways are valid ways to reach the Vatican from abroad
	var left = new ilib.PhoneNumber({
		countryCode: "379",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "en-US"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchUSDifferentCountryCodesITReverse(){
	// both ways are valid ways to reach the Vatican from abroad
	var left = new ilib.PhoneNumber({
		countryCode: "379",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "en-US"});
	
	assertEquals(100, right.compare(left));
};

function testNumberMatchUSDifferentCountryCodesFR(){
	// both ways are valid ways to reach the departments from abroad
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	
	assertEquals(100, left.compare(right));
};

function testNumberMatchUSDifferentCountryCodesFRReverse(){
	// both ways are valid ways to reach the departments from abroad
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	
	assertEquals(100, right.compare(left));
};

function testNumberMatchDEMissingExtension(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456"
	}, {locale: "de-DE"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456",
		extension: "789"
	}, {locale: "de-DE"});
	
	assertEquals(0, left.compare(right));
};

function testNumberMatchDEMissingExtensionReverse(){
	var left = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456"
	}, {locale: "de-DE"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456",
		extension: "789"
	}, {locale: "de-DE"});
	
	assertEquals(0, right.compare(left));
};

function testNumberMatchDEDifferentExtension(){
	var location;
	var left = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456",
		extension: "833"
	}, {locale: "de-DE"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456",
		extension: "789"
	}, {locale: "de-DE"});
	
	assertEquals(0, left.compare(right));
};

function testNumberMatchUSEverythingDifferent(){
	var location;
	var left = new ilib.PhoneNumber({
		trunkAccess: "0",
		countryCode: "49",
		areaCode: "2203",
		subscriberNumber: "123456",
		extension: "833"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "650",
		subscriberNumber: "7654321"
	}, {locale: "en-US"});
	
	assertEquals(0, left.compare(right));
};

function testNumberMatchCAUseNanpRules(){
	var location;
	var left = new ilib.PhoneNumber({
		areaCode: "416",
		subscriberNumber: "1234567"
	}, {locale: "en-CA"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "1",
		areaCode: "416",
		subscriberNumber: "1234567"
	}, {locale: "en-CA"});
	
	assertEquals(100, left.compare(right));
};

// for bug NOV-116615
function testNumberMatchMobileVsLDNumber(){
	var location;
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		mobilePrefix: "7734",
		subscriberNumber: "345345"
	}, {locale: "en-gb"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1483",
		subscriberNumber: "345345"
	}, {locale: "en-gb"});
	
	assertEquals(0, left.compare(right));
};

//for bug NOV-118901
/* [Q] value : 68
function testNumberMatchSG(){
	var location;
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "65",
		subscriberNumber: "93897077"
	}, {locale: "en-SG"});
	var right = new ilib.PhoneNumber({
		subscriberNumber: "93897077"
	}, {locale: "en-SG"});
	
	assertEquals(84, left.compare(right));
};
*/
function testNumberMatchSGWrongLocale(){
	var location;
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "65",
		subscriberNumber: "93897077"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		subscriberNumber: "93897077"
	}, {locale: "en-US"});
	
	assertEquals(68, left.compare(right));
};

function testStringsNumberMatchUSIgnoreSomeFields() {
	var left = new ilib.PhoneNumber('1 (650) 456-7890'),
		right = new ilib.PhoneNumber('650-456-7890');
	assertEquals(100, left.compare(right));
};

function testStringsNumberMatchITSanMarinoDifferentCountryCodes(){
	var left = new ilib.PhoneNumber('+378 0549 123 456', {locale: "en-US"}),
		right = new ilib.PhoneNumber('+39 0549 123 456', {locale: "en-US"});
	assertEquals(100, left.compare(right));
};
/*
function testStringsNumberMatchITSanMarinoMissingCountryCodes(){
	var left = new ilib.PhoneNumber('+378 0549 123 456', {locale: "it-IT"}),
		right = new ilib.PhoneNumber('0549 123 456', {locale: "it-IT"});
	assertEquals(100, left.compare(right));
};

function testStringsNumberMatchITSanMarinoDifferentCountryCodesDiffAreaCodes(){
	var left = new ilib.PhoneNumber('+378 0548 123 456', {locale: "en-US"}),
		right = new ilib.PhoneNumber('+39 0545 123 456', {locale: "en-US"});
	assertEquals(0, left.compare(right));
};

function testStringsNumberMatchITOther(){
	var left = new ilib.PhoneNumber('+39 06 69812345', {locale: "it-IT"}),
		right = new ilib.PhoneNumber('06-69812345', {locale: "it-IT"});
	assertEquals(84, left.compare(right));
};

function testStringsNumberMatchFRDepartments1(){
	var left = new ilib.PhoneNumber('+590 590 123 456', {locale: "fr-FR"}),
		right = new ilib.PhoneNumber('0590 123 456', {locale: "fr-FR"});
	assertEquals(100, left.compare(right));
};

function testStringsNumberMatchDEMissingExtension(){
	var left = new ilib.PhoneNumber('02203 123456', {locale: "de-DE"}),
		right = new ilib.PhoneNumber('02203 123456-789', {locale: "de-DE"});
	assertEquals(0, left.compare(right));
};

function testStringsNumberMatchDEDifferentExtension(){
	var left = new ilib.PhoneNumber('02203/123456-833', {locale: "de-DE"}),
		right = new ilib.PhoneNumber('02203 123456-789', {locale: "de-DE"});
	assertEquals(0, left.compare(right));
};

function testStringsNumberMatchUSIgnoreSomeFieldsReverse(){
	var left = new ilib.PhoneNumber('650-456-7890', {locale: "en-US"}),
		right = new ilib.PhoneNumber('1 (650) 456-7890', {locale: "en-US"});
	assertEquals(100, left.compare(right));
};

function testStringsNumberMatchITSanMarinoDifferentCountryCodesReverse(){
	var left = new ilib.PhoneNumber('+39 0549 123 456', {locale: "en-US"}),
		right = new ilib.PhoneNumber('+378 0549 123 456', {locale: "en-US"});
	assertEquals(100, left.compare(right));
};

function testStringsNumberMatchITSanMarinoMissingCountryCodesReverse(){
	var left = new ilib.PhoneNumber('0549 123 456', {locale: "it-IT"}),
		right = new ilib.PhoneNumber('+378 0549 123 456', {locale: "it-IT"});
	assertEquals(100, left.compare(right));
};

function testStringsNumberMatchITSanMarinoDifferentCountryCodesDiffAreaCodesReverse(){
	var left = new ilib.PhoneNumber('+39 0545 123 456', {locale: "en-US"}),
		right = new ilib.PhoneNumber('+378 0548 123 456', {locale: "en-US"});
	assertEquals(0, left.compare(right));
};

function testStringsNumberMatchITOtherReverse(){
	var left = new ilib.PhoneNumber('06-69812345', {locale: "it-IT"}),
		right = new ilib.PhoneNumber('+39 06 69812345', {locale: "it-IT"});
	assertEquals(84, left.compare(right));
};

function testStringsNumberMatchFRDepartments1Reverse(){
	var left = new ilib.PhoneNumber('0590 123 456', {locale: "fr-FR"}),
		right = new ilib.PhoneNumber('+590 590 123 456', {locale: "fr-FR"});
	assertEquals(100, left.compare(right));
};

function testStringsNumberMatchDEMissingExtensionReverse(){
	var left = new ilib.PhoneNumber('02203 123456-789', {locale: "de-DE"}),
		right = new ilib.PhoneNumber('02203 123456', {locale: "de-DE"});
	assertEquals(0, left.compare(right));
};

function testStringsNumberMatchDEDifferentExtensionReverse(){
	var left = new ilib.PhoneNumber('02203 123456-789', {locale: "de-DE"}),
		right = new ilib.PhoneNumber('02203/123456-833', {locale: "de-DE"});
	assertEquals(0, left.compare(right));	
};
*/

function testEqualsNotEqual(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertFalse(left.equals(right));
};

function testEquals(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertTrue(left.equals(right));
};

function testEqualsDifferentLocaleOkay(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	// same number because they have the country code
	assertTrue(left.equals(right));	
};

function testEqualsDifferentLocaleNotOkay(){
	var left = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en-US"});
	var right = new ilib.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	// same local number, but different country
	assertFalse(left.equals(right));
};

function testEqualsMissingLocaleLeft(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	
	assertTrue(left.equals(right));
};

function testEqualsMissingLocaleRight(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr-FR"});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	});
	
	assertTrue(left.equals(right));
};

function testEqualsMissingLocaleBoth(){
	var left = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	});
	var right = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	});

	assertTrue(left.equals(right));
};