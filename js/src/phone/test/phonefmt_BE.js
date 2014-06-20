PhoneFormatTestsBE.prototype.testFormatStyle0 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "59",
			subscriberNumber: "123456"
		}),
		expected = "059 12 34 56";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsBE.prototype.testFormatStyle1 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "59",
			subscriberNumber: "123456"
		}),
		expected = "059 123456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "59",
			subscriberNumber: "123456"
		}),
		expected = "059-12-34-56";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle3 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "59",
			subscriberNumber: "123456"
		}),
		expected = "059/12 34 56";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "japen/barres obliques"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsBE.prototype.testFormatInternational = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "32",
			areaCode: "2",
			subscriberNumber: "1234567"
		}),
		expected = "+32 2 123 45 67";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsBE.prototype.testFormatInternationalAccessCode = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "32",
			areaCode: "2",
			subscriberNumber: "1234567"
		}),
		expected = "00 32 2 123 45 67";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsBE.prototype.testFormatLongAreaCode = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "601",
			subscriberNumber: "123456"
		}),
		expected = "0601 12 34 56";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsBE.prototype.testFormatMobile = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "491",
			subscriberNumber: "234567"
		}),
		expected = "0491 23 45 67";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsBE.prototype.testFormatMobileInternational = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "32",
			trunkAccess: "0",
			mobilePrefix: "491",
			subscriberNumber: "234567"
		}),
		expected = "+32 491 23 45 67";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsBE.prototype.testFormatWithParamsSMSPartial = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "8765"
		}),
		expected = "87 65";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsBE.prototype.testFormatWithParamsSMSWhole = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "8765"
		}),
		expected = "8765";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsBE.prototype.testFormatPremium = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			serviceCode: "906",
			subscriberNumber: "12345"
		}),
		expected = "0906 12 34 5";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatBlock = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			serviceCode: "116",
			subscriberNumber: "116"
		}),
		expected = "116 116";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};



PhoneFormatTestsBE.prototype.testFormatStyle0Partial0 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0"
		}),
		expected = "0";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle0Partial1 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "6"
		}),
		expected = "06";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle0Partial2 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60"
		}),
		expected = "060 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle0Partial3 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1"
		}),
		expected = "060 1";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle0Partial4 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12"
		}),
		expected = "060 12";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle0Partial5 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123"
		}),
		expected = "060 12 3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle0Partial6 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234"
		}),
		expected = "060 12 34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle0Partial7 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345"
		}),
		expected = "060 12 34 5";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle0Partial8 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123456"
		}),
		expected = "060 12 34 56";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle0Partial9 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234567"
		}),
		expected = "060 123 45 67";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle0Partial10 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345678" // too long
		}),
		expected = "06012345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsBE.prototype.testFormatStyle0PartialLocal1 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4"
		}),
		expected = "4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle0PartialLocal2 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45"
		}),
		expected = "45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle0PartialLocal3 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456"
		}),
		expected = "45 6";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle0PartialLocal4 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563"
		}),
		expected = "45 63";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle0PartialLocal5 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634"
		}),
		expected = "45 63 4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle0PartialLocal6 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345"
		}),
		expected = "45 63 45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle0PartialLocal7 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563453"
		}),
		expected = "456 34 53";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle0PartialLocal8 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634535"
		}),
		expected = "45634535"; // too long
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsBE.prototype.testFormatStyle1Partial0 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0"
		}),
		expected = "0";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle1Partial1 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "6"
		}),
		expected = "06";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle1Partial2 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60"
		}),
		expected = "060 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle1Partial3 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1"
		}),
		expected = "060 1";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle1Partial4 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12"
		}),
		expected = "060 12";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle1Partial5 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123"
		}),
		expected = "060 123";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle1Partial6 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234"
		}),
		expected = "060 1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle1Partial7 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345"
		}),
		expected = "060 12345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle1Partial8 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123456"
		}),
		expected = "060 123456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle1Partial9 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234567"
		}),
		expected = "060 1234567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle1Partial10 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345678" // too long
		}),
		expected = "06012345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsBE.prototype.testFormatStyle1PartialLocal1 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4"
		}),
		expected = "4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle1PartialLocal2 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45"
		}),
		expected = "45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle1PartialLocal3 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456"
		}),
		expected = "456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle1PartialLocal4 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563"
		}),
		expected = "4563";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle1PartialLocal5 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634"
		}),
		expected = "45634";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle1PartialLocal6 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345"
		}),
		expected = "456345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle1PartialLocal7 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563453"
		}),
		expected = "4563453";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle1PartialLocal8 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634534" // too long
		}),
		expected = "45634534";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "gecomprimeerd/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsBE.prototype.testFormatStyle2Partial0 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0"
		}),
		expected = "0";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2Partial1 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "6"
		}),
		expected = "06";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2Partial2 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60"
		}),
		expected = "060-";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2Partial3 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1"
		}),
		expected = "060-1";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2Partial4 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12"
		}),
		expected = "060-12";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2Partial5 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123"
		}),
		expected = "060-12-3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2Partial6 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234"
		}),
		expected = "060-12-34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2Partial7 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345"
		}),
		expected = "060-12-34-5";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2Partial8 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "123456"
		}),
		expected = "060-12-34-56";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2Partial9 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "1234567"
		}),
		expected = "060-123-45-67";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2Partial10 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "60",
			subscriberNumber: "12345678" // too long
		}),
		expected = "06012345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsBE.prototype.testFormatStyle2PartialLocal1 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4"
		}),
		expected = "4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2PartialLocal2 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45"
		}),
		expected = "45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2PartialLocal3 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456"
		}),
		expected = "45-6";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2PartialLocal4 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563"
		}),
		expected = "45-63";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2PartialLocal5 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634"
		}),
		expected = "45-63-4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2PartialLocal6 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345"
		}),
		expected = "45-63-45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2PartialLocal7 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563453"
		}),
		expected = "456-34-53";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsBE.prototype.testFormatStyle2PartialLocal8 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634534" // too long
		}),
		expected = "45634534";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "nl_be", style: "streepjes/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
