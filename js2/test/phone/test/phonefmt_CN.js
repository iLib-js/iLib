/*
 * phonefmt_CN.js - Test the phonefmt_CN Style.
 * 
 * Copyright © 2014, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var PhoneNumber = require("./../lib/PhoneNumber.js");
var PhoneFmt = require("./../lib/PhoneFmt.js");
 function testFormatCNStyle0() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "10",
			subscriberNumber: "12345678"
	});
	var expected = "010 12345678";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatCNInternational() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatCNInternationalLongArea() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "1997",
			subscriberNumber: "123456"
	});
	var expected = "+44 1997 123456";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatCNInternationalAccessCode() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "00",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "00 33 1 12 34 56 78";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatCNPlusIDDtoUnknownCountry() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "123",
		subscriberNumber: "987654321"
	});
	var expected = "+123 987654321";	// use last resort rule for subscriber number
	
	var fmt = new PhoneFmt({locale: "zh-CN", style: "破折号"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatMobile() {
	var formatted;
	var parsed = new PhoneNumber({
		mobilePrefix: "150",
		subscriberNumber: "05179573"
	});
	var expected = "150 05179573";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatMobileInternational() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "86",
		mobilePrefix: "150",
		subscriberNumber: "05179573"
	});
	var expected = "+86 150 05179573";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatCNStyle0Partial1() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatCNStyle0Partial2() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "1"
	});
	var expected = "01";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatCNStyle0Partial3() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10"
	});
	var expected = "010 ";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatCNStyle0Partial4() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1"
	});
	var expected = "010 1";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatCNStyle0Partial5() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12"
	});
	var expected = "010 12";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatCNStyle0Partial6() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "123"
	});
	var expected = "010 123";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatCNStyle0Partial7() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1234"
	});
	var expected = "010 1234";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatCNStyle0Partial8() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345"
	});
	var expected = "010 12345";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatCNStyle0Partial9() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "123456"
	});
	var expected = "010 123456";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatCNStyle0Partial10() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1234567"
	});
	var expected = "010 1234567";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatCNStyle0Partial11() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345678"
	});
	var expected = "010 12345678";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatCNStyle0Partial12() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "123456789" // too long
	});
	var expected = "010123456789"; // use last resort rule
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatCNStyle0PartialLocal1() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "8"
	});
	var expected = "8";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatCNStyle0PartialLocal2() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "87"
	});
	var expected = "87";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatCNStyle0PartialLocal3() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "876"
	});
	var expected = "876";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatCNStyle0PartialLocal4() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "8765"
	});
	var expected = "8765";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatCNStyle0PartialLocal5() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "87654"
	});
	var expected = "87654";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatCNStyle0PartialLocal6() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "876543"
	});
	var expected = "876543";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatCNStyle0PartialLocal7() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "8765432"
	});
	var expected = "8765432";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatCNStyle0PartialLocal8() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "87654321"
	});
	var expected = "87654321";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatCNStyle0PartialLocal9() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "876543210"  // too long
	});
	var expected = "876543210";  // shouldn't matter, but theoretically use the last resort rule
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "10",
			subscriberNumber: "12345678"
	});
	var expected = "010 12345678";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsInternational() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsInternationalLongArea() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "1997",
			subscriberNumber: "123456"
	});
	var expected = "+44 1997 123456";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsInternationalAccessCode() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "00",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "00 33 1 12 34 56 78";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsPlusIDDtoUnknownCountry() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "123",
		subscriberNumber: "987654321"
	});
	var expected = "+123 987654321";
	
	var fmt = new PhoneFmt({locale: "zh-CN", style: "破折号"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatMobile() {
	var formatted;
	var parsed = new PhoneNumber({
		mobilePrefix: "150",
		subscriberNumber: "05179573"
	});
	var expected = "150 05179573";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatMobileInternational() {
	var formatted;
	var parsed = new PhoneNumber({
		iddPrefix: "+",
		countryCode: "86",
		mobilePrefix: "150",
		subscriberNumber: "05179573"
	});
	var expected = "+86 150 05179573";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0Partial1() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatWithParamsStyle0Partial2() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "1"
	});
	var expected = "01";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0Partial3() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10"
	});
	var expected = "010 ";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0Partial4() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1"
	});
	var expected = "010 1";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0Partial5() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12"
	});
	var expected = "010 12";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0Partial6() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "123"
	});
	var expected = "010 123";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0Partial7() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1234"
	});
	var expected = "010 1234";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};

function testFormatWithParamsStyle0Partial8() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345"
	});
	var expected = "010 12345";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0Partial9() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "123456"
	});
	var expected = "010 123456";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0Partial10() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1234567"
	});
	var expected = "010 1234567";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0Partial11() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345678"
	});
	var expected = "010 12345678";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0Partial12() {
	var formatted;
	var parsed = new PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "123456789" // too long
	});
	var expected = "010123456789"; // use last resort rule
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0PartialLocal1() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "8"
	});
	var expected = "8";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0PartialLocal2() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "87"
	});
	var expected = "87";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0PartialLocal3() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "876"
	});
	var expected = "876";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0PartialLocal4() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "8765"
	});
	var expected = "8765";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0PartialLocal5() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "87654"
	});
	var expected = "87654";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0PartialLocal6() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "876543"
	});
	var expected = "876543";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0PartialLocal7() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "8765432"
	});
	var expected = "8765432";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0PartialLocal8() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "87654321"
	});
	var expected = "87654321";
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatWithParamsStyle0PartialLocal9() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "876543210"  // too long
	});
	var expected = "876543210";  // shouldn't matter, but theoretically use the last resort rule
	
	var fmt = new PhoneFmt({locale: "zh-CN"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);	
};