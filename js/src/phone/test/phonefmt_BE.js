function testFormatStyle0() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "59",
			subscriberNumber: "123456"
		}),
		expected = "059 12 34 56";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle1() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "59",
			subscriberNumber: "123456"
		}),
		expected = "059 123456";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "59",
			subscriberNumber: "123456"
		}),
		expected = "059-12-34-56";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle3() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "59",
			subscriberNumber: "123456"
		}),
		expected = "059/12 34 56";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "japen/barres obliques"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatInternational() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "32",
			areaCode: "2",
			subscriberNumber: "1234567"
		}),
		expected = "+32 2 123 45 67";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatInternationalAccessCode() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "32",
			areaCode: "2",
			subscriberNumber: "1234567"
		}),
		expected = "00 32 2 123 45 67";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatLongAreaCode() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "601",
			subscriberNumber: "123456"
		}),
		expected = "0601 12 34 56";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};


function testFormatMobile() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "491",
			subscriberNumber: "234567"
		}),
		expected = "0491 23 45 67";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatMobileInternational() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "32",
			trunkAccess: "0",
			mobilePrefix: "491",
			subscriberNumber: "234567"
		}),
		expected = "+32 491 23 45 67";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};


function testFormatWithParamsSMSPartial() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "8765"
		}),
		expected = "87 65";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatWithParamsSMSWhole() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "8765"
		}),
		expected = "8765";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatPremium() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			serviceCode: "906",
			subscriberNumber: "12345"
		}),
		expected = "0906 12 34 5";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBlock() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			serviceCode: "116",
			subscriberNumber: "116"
		}),
		expected = "116 116";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};



function testFormatStyle0Partial0() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0"
		}),
		expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial1() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "6"
		}),
		expected = "06";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial2() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60"
		}),
		expected = "060 ";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial3() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1"
		}),
		expected = "060 1";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial4() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12"
		}),
		expected = "060 12";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial5() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123"
		}),
		expected = "060 12 3";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial6() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234"
		}),
		expected = "060 12 34";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial7() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345"
		}),
		expected = "060 12 34 5";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial8() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123456"
		}),
		expected = "060 12 34 56";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial9() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234567"
		}),
		expected = "060 123 45 67";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial10() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345678" // too long
		}),
		expected = "06012345678";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle0PartialLocal1() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "4"
		}),
		expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal2() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "45"
		}),
		expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal3() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "456"
		}),
		expected = "45 6";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal4() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563"
		}),
		expected = "45 63";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal5() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634"
		}),
		expected = "45 63 4";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal6() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345"
		}),
		expected = "45 63 45";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal7() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563453"
		}),
		expected = "456 34 53";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal8() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634535"
		}),
		expected = "45634535"; // too long
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle1Partial0() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0"
		}),
		expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial1() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "6"
		}),
		expected = "06";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial2() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60"
		}),
		expected = "060 ";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial3() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1"
		}),
		expected = "060 1";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial4() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12"
		}),
		expected = "060 12";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial5() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123"
		}),
		expected = "060 123";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial6() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234"
		}),
		expected = "060 1234";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial7() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345"
		}),
		expected = "060 12345";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial8() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123456"
		}),
		expected = "060 123456";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial9() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234567"
		}),
		expected = "060 1234567";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial10() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345678" // too long
		}),
		expected = "06012345678";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle1PartialLocal1() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "4"
		}),
		expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal2() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "45"
		}),
		expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal3() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "456"
		}),
		expected = "456";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal4() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563"
		}),
		expected = "4563";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal5() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634"
		}),
		expected = "45634";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal6() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345"
		}),
		expected = "456345";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal7() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563453"
		}),
		expected = "4563453";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1PartialLocal8() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634534" // too long
		}),
		expected = "45634534";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle2Partial0() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0"
		}),
		expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial1() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "6"
		}),
		expected = "06";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial2() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60"
		}),
		expected = "060-";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial3() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1"
		}),
		expected = "060-1";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial4() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12"
		}),
		expected = "060-12";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial5() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123"
		}),
		expected = "060-12-3";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial6() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234"
		}),
		expected = "060-12-34";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial7() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345"
		}),
		expected = "060-12-34-5";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial8() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123456"
		}),
		expected = "060-12-34-56";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial9() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234567"
		}),
		expected = "060-123-45-67";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial10() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345678" // too long
		}),
		expected = "06012345678";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle2PartialLocal1() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "4"
		}),
		expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal2() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "45"
		}),
		expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal3() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "456"
		}),
		expected = "45-6";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal4() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563"
		}),
		expected = "45-63";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal5() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634"
		}),
		expected = "45-63-4";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal6() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345"
		}),
		expected = "45-63-45";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal7() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563453"
		}),
		expected = "456-34-53";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal8() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634534" // too long
		}),
		expected = "45634534";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-BE", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
