PhoneFormatTestsES.prototype.testFormatESStyle0 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "957",
			subscriberNumber: "123456"
	});
	var expected = "957 123 456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "957",
			subscriberNumber: "123456"
	});
	var expected = "957 12 34 56";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "dobles"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "957",
			subscriberNumber: "123456"
	});
	var expected = "95 712 34 56";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "viejo"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "957",
			subscriberNumber: "123456"
	});
	var expected = "957 123456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "compacto"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsES.prototype.testFormatESInternational = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "34",
			areaCode: "957",
			subscriberNumber: "123456"
	});
	var expected = "+34 957 123 456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsES.prototype.testFormatMobile = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			mobilePrefix: "616",
			subscriberNumber: "846357"
	});
	var expected = "616 846 357";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsES.prototype.testFormatESInternationalAccessCode = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "34",
			areaCode: "957",
			subscriberNumber: "123456"
	});
	var expected = "00 34 957 123 456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsES.prototype.testFormatESDialAround = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			cic: "1032",
			areaCode: "957",
			subscriberNumber: "123456"
	});
	var expected = "1032 957 123 456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsES.prototype.testFormatESStyle0Partial1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "9"
	});
	var expected = "9";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle0Partial2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "91"
	});
	var expected = "91 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle0Partial3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "912"
	});
	var expected = "912 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle0Partial4 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "1"
	});
	var expected = "912 1";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle0Partial5 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "12"
	});
	var expected = "912 12";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle0Partial6 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "123"
	});
	var expected = "912 123";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle0Partial7 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "1234"
	});
	var expected = "912 123 4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle0Partial8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "12345"
	});
	var expected = "912 123 45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle0Partial9 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "123456"
	});
	var expected = "912 123 456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle0Partial10 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "1234567"	// too long
	});
	var expected = "9121234567"; 	// use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsES.prototype.testFormatESStyle1Partial1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "9"
	});
	var expected = "9";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "dobles"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle1Partial2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "91"
	});
	var expected = "91 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "dobles"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle1Partial3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "912"
	});
	var expected = "912 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "dobles"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle1Partial4 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "1"
	});
	var expected = "912 1";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "dobles"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle1Partial5 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "12"
	});
	var expected = "912 12";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "dobles"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle1Partial6 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "123"
	});
	var expected = "912 12 3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "dobles"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle1Partial7 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "1234"
	});
	var expected = "912 12 34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "dobles"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle1Partial8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "12345"
	});
	var expected = "912 12 34 5";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "dobles"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle1Partial9 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "123456"
	});
	var expected = "912 12 34 56";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "dobles"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatESStyle1Partial10 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "912",
			subscriberNumber: "1234567"	// too long
	});
	var expected = "9121234567"; 	// use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es", style: "dobles"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsES.prototype.testFormatInternational = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "34",
			areaCode: "912",
			subscriberNumber: "123456"
	});
	var expected = "+34 912 123 456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsES.prototype.testFormatInternationalPartial0 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatInternationalPartial1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00"
	});
	var expected = "00 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatInternationalPartial2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1"
	});
	var expected = "00 1 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatInternationalPartial3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			subscriberNumber: "6"
	});
	var expected = "00 1 6";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatInternationalPartial4 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			subscriberNumber: "65"
	});
	var expected = "00 1 65";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatInternationalPartial5 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650"
	});
	var expected = "00 1 650 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatInternationalPartial6 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "5"
	});
	var expected = "00 1 650 5";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatInternationalPartial7 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "55"
	});
	var expected = "00 1 650 55";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatInternationalPartial8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "555"
	});
	var expected = "00 1 650 555";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatInternationalPartial9 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "5551"
	});
	var expected = "00 1 650 555 1";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatInternationalPartial10 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "55512"
	});
	var expected = "00 1 650 555 12";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatInternationalPartial11 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "555123"
	});
	var expected = "00 1 650 555 123";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsES.prototype.testFormatInternationalPartial12 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "5551234"
	});
	var expected = "00 1 650 555 1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_es"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
