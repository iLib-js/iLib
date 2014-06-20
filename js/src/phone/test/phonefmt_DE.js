PhoneFormatTestsDE.prototype.testFormatDEStyle0 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "6224",
			subscriberNumber: "1234567"
	});
	var expected = "06224 123 45 67";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsDE.prototype.testFormatDEStyle1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "6224",
			subscriberNumber: "1234567"
	});
	var expected = "06224/1 23 45 67";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "alten"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "6224",
			subscriberNumber: "1234567"
	});
	var expected = "(06224) 123 4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "6224",
			subscriberNumber: "1234567"
	});
	var expected = "06224 1234567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "minimalistischen"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle4 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "6224",
			subscriberNumber: "1234567"
	});
	var expected = "06224 123 4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "alternitive"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsDE.prototype.testFormatDEInternational = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsDE.prototype.testFormatDEInternationalAccessCode = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "00 33 1 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsDE.prototype.testFormatIEMobile = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		mobilePrefix: "86",
		subscriberNumber: "8223689"
	});
	var expected = "+353 86 822 3689";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsDE.prototype.testFormatDELongAreaCode = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "38852",
			subscriberNumber: "123456"
	});
	var expected = "038852 12 34 56";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsDE.prototype.testFormatDEMobile = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "165",
			subscriberNumber: "12345678"
	});
	var expected = "0165 1234 5678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEDialAround = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			cic: "1032",
			areaCode: "2360",
			subscriberNumber: "123456"
	});
	var expected = "01032 2360 12 34 56";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEDialAroundLong = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			cic: "10032",
			areaCode: "2360",
			subscriberNumber: "1234567"
	});
	var expected = "010032 2360 123 45 67";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatpremium = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			serviceCode: "1169",
			subscriberNumber: "12345678"
	});
	var expected = "01169 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEBlock = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			serviceCode: "116",
			subscriberNumber: "116"
	});
	var expected = "116 116";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEInternetDialUp = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			serviceCode: "1925",
			subscriberNumber: "87654321"
	});
	var expected = "01925 87 65 43 21";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsDE.prototype.testFormatDEStyle0Partial0 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0Partial1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "3"
	});
	var expected = "03";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0Partial2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30"
	});
	var expected = "(030) ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0Partial3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1"
	});
	var expected = "(030) 1";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0Partial4 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12"
	});
	var expected = "(030) 12";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0Partial5 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123"
	});
	var expected = "(030) 123";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0Partial6 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1234"
	});
	var expected = "(030) 1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0Partial7 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12345"
	});
	var expected = "(030) 12345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0Partial8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123456"
	});
	var expected = "(030) 123 456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0Partial9 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1234567"
	});
	var expected = "(030) 123 4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0Partial10 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12345678"
	});
	var expected = "(030) 1234 5678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0Partial11 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123456789"	// too long
	});
	var expected = "030123456789";	// last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "Microsoft"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsDE.prototype.testFormatDEStyle0PartialLocal1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0PartialLocal2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0PartialLocal3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0PartialLocal4 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "4563";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0PartialLocal5 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45634";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0PartialLocal6 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "45 63 45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0PartialLocal7 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456 34 53";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0PartialLocal8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634535"
	});
	var expected = "45 63 45 35";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle0PartialLocal9 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345352"	// too long
	});
	var expected = "456345352";	// use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsDE.prototype.testFormatDEStyle1PartialLocal1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "alten"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle1PartialLocal2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "alten"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle1PartialLocal3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "4 56";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "alten"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle1PartialLocal4 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "45 63";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "alten"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle1PartialLocal5 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "4 56 34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "alten"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle1PartialLocal6 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "45 63 45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "alten"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle1PartialLocal7 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "4 56 34 53";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "alten"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle1PartialLocal8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634534"
	});
	var expected = "45 63 45 34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "alten"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsDE.prototype.testFormatDEStyle1PartialLocal9 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345345"	// too long
	});
	var expected = "456345345"; // use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_de", style: "alten"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
