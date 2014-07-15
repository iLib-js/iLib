function testFormatStyle0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "34523434"
	});
	var expected = "(02) 3452 3434";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "34523434"
	});
	var expected = "02 3452 3434";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "nobrackets"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle2() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "34523434"
	});
	var expected = "02 34523434";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatInternational() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "61",
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "12345678"
	});
	var expected = "+61 2 1234 5678";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatInternationalAccessCode() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "0011",
			countryCode: "61",
			areaCode: "2",
			subscriberNumber: "12345678"
	});
	var expected = "0011 61 2 1234 5678";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatMobile() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "4192",
			subscriberNumber: "12345"
	});
	var expected = "0419 212 345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatMobileInternational() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "61",
			trunkAccess: "0",
			mobilePrefix: "4192",
			subscriberNumber: "12345"
	});
	var expected = "+61 419 212 345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatService() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			serviceCode: "1800",
			subscriberNumber: "123456"
	});
	var expected = "1800 123 456";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatIEIDD() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "353",
			trunkAccess: "0",
			areaCode: "1",
			subscriberNumber: "1234567"
	});
	var expected = "+353 1 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle0Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2"
	});
	var expected = "(02) ";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "8"
	});
	var expected = "(02) 8";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "87"
	});
	var expected = "(02) 87";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "876"
	});
	var expected = "(02) 876";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "8765"
	});
	var expected = "(02) 8765";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "87654"
	});
	var expected = "(02) 8765 4";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "876543"
	});
	var expected = "(02) 8765 43";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "8765432"
	});
	var expected = "(02) 8765 432";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial9() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "87654321"
	});
	var expected = "(02) 8765 4321";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "876543210"	// too long
	});
	var expected = "02876543210";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle0PartialLocal1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "8"
	});
	var expected = "8";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal2() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "87"
	});
	var expected = "87";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal3() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "876"
	});
	var expected = "876";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal4() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "8765"
	});
	var expected = "8765";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal5() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "87654"
	});
	var expected = "8765 4";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal6() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "876543"
	});
	var expected = "8765 43";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal7() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "8765432"
	});
	var expected = "8765 432";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal8() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "87654321"
	});
	var expected = "8765 4321";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0PartialLocal9() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "876543210"	// too long
	});
	var expected = "876543210";	// use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle2PartialLocal1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal2() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal3() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal4() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "4563";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal5() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45634";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal6() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal7() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "4563453";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal8() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634534"
	});
	var expected = "45634534";
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2PartialLocal9() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345345"	// too long
	});
	var expected = "456345345"; // use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
