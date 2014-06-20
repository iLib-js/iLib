PhoneFormatTestsMX.prototype.testFormatMXStyle0 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "12345678"
	});
	var expected = "33-1234-5678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatMXStyle1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "12345678"
	});
	var expected = "(33) 1234-5678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatMXStyle2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "12345678"
	});
	var expected = "33 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "espacios"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatMXStyle3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "12345678"
	});
	var expected = "33/1234-5678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "barras"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
 
PhoneFormatTestsMX.prototype.testFormatMXInternational = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatMXInternationalAccessCode = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "00 33 1 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatMXInternationalDialToCell = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "52",
			mobilePrefix: "044",
			areaCode: "55",
			subscriberNumber: "12345678"
	});
	var expected = "+52 1 55 1234 5678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatMXService = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			serviceCode: "800",
			subscriberNumber: "12345678"
	});
	var expected = "01-800-1234-5678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatSMSPartial = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "12345"
	});
	var expected = "123-45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatSMSWhole = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "12345"
	});
	var expected = "12345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatNumberWithUSMCC = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "(615) 987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatNumberWithUSMCCNoLocale = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "(615) 987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatLocalNumberWithMXMCC = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatLocalNumberWithMXMCCNoLocale = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsMX.prototype.testFormatNumberWithFRMCC = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "15987654"
	});
	var expected = "06 15 98 76 54";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatNumberWithFRMCCNoLocale = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "15987654"
	});
	var expected = "06 15 98 76 54";
	
	var fmt = new enyo.g11n.PhoneFmt({style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatLocalNumberWithFRMCC = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "15987654"
	});
	var expected = "15 98 76 54";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatLocalNumberWithFRMCCNoLocale = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "15987654"
	});
	var expected = "15 98 76 54";
	
	var fmt = new enyo.g11n.PhoneFmt({style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsMX.prototype.testFormatNumberWithDEMCC = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "212",
		subscriberNumber: "98765432"
	});
	var expected = "0212 98 76 54 32";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "default", mcc: "262"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatNumberWithDEMCCNoLocale = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "212",
		subscriberNumber: "98765432"
	});
	var expected = "0212 98 76 54 32";
	
	var fmt = new enyo.g11n.PhoneFmt({style: "default", mcc: "262"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatLocalNumberWithFRMCC = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "98765432"
	});
	var expected = "98 76 54 32";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatLocalNumberWithFRMCCNoLocale = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "98765432"
	});
	var expected = "98 76 54 32";
	
	var fmt = new enyo.g11n.PhoneFmt({style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatNumberWithMXMCC = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "615-987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "default", mcc: "334"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatNumberWithMXMCCNoLocale = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "615-987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({style: "default", mcc: "334"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatLocalNumberWithMXMCC = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "default", mcc: "334"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatLocalNumberWithMXMCCNoLocale = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({style: "default", mcc: "334"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};





PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0Partial1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "3"
	});
	var expected = "3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0Partial2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "33"
	});
	var expected = "33";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0Partial3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "331"
	});
	var expected = "331";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0Partial4 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "3312"
	});
	var expected = "331-2";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0Partial5 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "33123"
	});
	var expected = "331-23";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0Partial6 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "331234"
	});
	var expected = "331-234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0Partial7 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "3312345"
	});
	var expected = "331-2345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0Partial8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "33123456"
	});
	var expected = "3312-3456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0Partial9 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "1234567"
	});
	var expected = "33-123-4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0Partial10 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "12345678"
	});
	var expected = "33-1234-5678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0Partial11 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "123456789" // too long
	});
	var expected = "33123456789"; // use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialLocal1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialLocal2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialLocal3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialLocal4 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "456-3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialLocal5 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "456-34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialLocal6 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456-345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialLocal7 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456-3453";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialLocal8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634535"
	});
	var expected = "4563-4535";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialLocal8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345356"  // too long
	});
	var expected = "456345356";  // use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialTrunk0 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "0"
	});
	var expected = "0";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialTrunk1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01"
	});
	var expected = "01";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialTrunk1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "5"
	});
	var expected = "01-5-";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialTrunk2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55"
	});
	var expected = "01-55-";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialTrunk3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1"
	});
	var expected = "01-55-1";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialTrunk4 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12"
	});
	var expected = "01-55-12";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialTrunk5 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "123"
	});
	var expected = "01-55-123";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialTrunk6 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1234"
	});
	var expected = "01-55-123-4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialTrunk7 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12345"
	});
	var expected = "01-55-123-45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialTrunk8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "123456"
	});
	var expected = "01-55-123-456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialTrunk9 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1234567"
	});
	var expected = "01-55-123-4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialTrunk10 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12345678"
	});
	var expected = "01-55-1234-5678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle0PartialTrunk11 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "123456789" // too long 
	});
	var expected = "0155123456789";	// use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1Partial1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "3"
	});
	var expected = "3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1Partial2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "33"
	});
	var expected = "33";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1Partial3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "331"
	});
	var expected = "331";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1Partial4 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "3312"
	});
	var expected = "331-2";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1Partial5 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "33123"
	});
	var expected = "331-23";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1Partial6 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "331234"
	});
	var expected = "331-234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1Partial7 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "3312345"
	});
	var expected = "331-2345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1Partial8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "33123456"
	});
	var expected = "3312-3456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1Partial9 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "1234567"
	});
	var expected = "(33) 123-4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1Partial10 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "12345678"
	});
	var expected = "(33) 1234-5678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1Partial11 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "33",
			subscriberNumber: "123456789" // too long
	});
	var expected = "33123456789"; // use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialLocal1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialLocal2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialLocal3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialLocal4 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "456-3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialLocal5 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "456-34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialLocal6 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456-345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialLocal7 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456-3453";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialLocal8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634535"
	});
	var expected = "4563-4535";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialLocal8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345356"  // too long
	});
	var expected = "456345356";  // use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialTrunk0 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "0"
	});
	var expected = "0";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialTrunk1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01"
	});
	var expected = "01";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialTrunk1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "5"
	});
	var expected = "01 (5) ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialTrunk2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55"
	});
	var expected = "01 (55) ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialTrunk3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1"
	});
	var expected = "01 (55) 1";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialTrunk4 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12"
	});
	var expected = "01 (55) 12";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialTrunk5 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "123"
	});
	var expected = "01 (55) 123";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialTrunk6 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1234"
	});
	var expected = "01 (55) 123-4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialTrunk7 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12345"
	});
	var expected = "01 (55) 123-45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialTrunk8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "123456"
	});
	var expected = "01 (55) 123-456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialTrunk9 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1234567"
	});
	var expected = "01 (55) 123-4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialTrunk10 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12345678"
	});
	var expected = "01 (55) 1234-5678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsMX.prototype.testFormatWithParamsStyle1PartialTrunk11 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "123456789" // too long 
	});
	var expected = "0155123456789";	// use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "paréntesis"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

//for bug NOV-119557
PhoneFormatTestsMX.prototype.testFormatTollFree = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "01",
		serviceCode: "800",
		subscriberNumber: "0220606" 
	});
	var expected = "01-800-022-0606";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx"});
	formatted = fmt.format(parsed, {partial: false});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
