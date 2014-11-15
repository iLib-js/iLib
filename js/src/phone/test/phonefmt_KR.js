/*
 * phonefmt_KR.js - Test the phonefmt_KR Style.
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
 
function testFormatKRStyle0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "34523434"
	});
	var expected = "02-3452-3434";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatKRStyle1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "34523434"
	});
	var expected = "(02) 3452-3434";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "괄호"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatKRInternational() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		areaCode: "1",
		subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatKRInternationalAccessCode() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "002",
		countryCode: "33",
		areaCode: "1",
		subscriberNumber: "12345678"
	});
	var expected = "002 33 1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatKRLongAreaCode() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "1234567"
	});
	var expected = "033-123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};


function testFormatKRMobile() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "18",
		subscriberNumber: "12345678"
	});
	var expected = "018-1234-5678";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatKRMobileInternational() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "82",
		mobilePrefix: "16",
		subscriberNumber: "12345678"
	});
	var expected = "+82 16 1234 5678";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatKRService() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "30",
		subscriberNumber: "1234567"
	});
	var expected = "030-123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatKRIEIDD() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		trunkAccess: "0",
		areaCode: "1",
		subscriberNumber: "1234567"
	});
	var expected = "+353 1 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatKRStyle0Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "3"
	});
	var expected = "03";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33"
	});
	var expected = "033-";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "1"
	});
	var expected = "033-1";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "12"
	});
	var expected = "033-12";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "123"
	});
	var expected = "033-123";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "1234"
	});
	var expected = "033-123-4";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "12345"
	});
	var expected = "033-123-45";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "123456"
	});
	var expected = "033-123-456";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Partial9() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "1234567"
	});
	var expected = "033-123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "12345678"
	});
	var expected = "033-1234-5678";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatKRStyle0Whole0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Whole1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "3"
	});
	var expected = "03";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Whole2() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33"
	});
	var expected = "033-";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Whole3() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "1"
	});
	var expected = "033-1";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Whole4() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "12"
	});
	var expected = "033-12";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Whole5() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "123"
	});
	var expected = "033-123";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Whole6() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "1234"
	});
	var expected = "033-1234";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Whole7() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "12345"
	});
	var expected = "033-12345";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Whole8() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "123456"
	});
	var expected = "033-123456";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Whole9() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "1234567"
	});
	var expected = "033-123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0Whole10() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "12345678"
	});
	var expected = "033-1234-5678";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatKRStyle1Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "괄호"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "3"
	});
	var expected = "03";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "괄호"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33"
	});
	var expected = "(033) ";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "괄호"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "1"
	});
	var expected = "(033) 1";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "괄호"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "12"
	});
	var expected = "(033) 12";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "괄호"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "123"
	});
	var expected = "(033) 123";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "괄호"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "1234"
	});
	var expected = "(033) 123-4";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "괄호"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "12345"
	});
	var expected = "(033) 123-45";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "괄호"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "123456"
	});
	var expected = "(033) 123-456";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "괄호"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1Partial9() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "1234567"
	});
	var expected = "(033) 123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "괄호"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "33",
		subscriberNumber: "12345678"
	});
	var expected = "(033) 1234-5678";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "괄호"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatKRStyle0PartialLocal1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0PartialLocal2() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0PartialLocal3() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0PartialLocal4() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "4563"
	});
	var expected = "456-3";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0PartialLocal5() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "45634"
	});
	var expected = "456-34";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0PartialLocal6() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "456345"
	});
	var expected = "456-345";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0PartialLocal7() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "4563453"
	});
	var expected = "456-3453";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0PartialLocal8() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "45634535"
	});
	var expected = "4563-4535";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle0PartialLocal9() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "456345352"	// too long
	});
	var expected = "456345352";	// use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatKRStyle1PartialLocal1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "점"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1PartialLocal2() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "점"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1PartialLocal3() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "점"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1PartialLocal4() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "4563"
	});
	var expected = "456.3";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "점"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1PartialLocal5() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "45634"
	});
	var expected = "456.34";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "점"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1PartialLocal6() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "456345"
	});
	var expected = "456.345";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "점"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1PartialLocal7() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "4563453"
	});
	var expected = "456.3453";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "점"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1PartialLocal8() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "45634534"
	});
	var expected = "4563.4534";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "점"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};
function testFormatKRStyle1PartialLocal9() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "456345345"	// too long
	});
	var expected = "456345345"; // use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "점"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatBREmergency1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("111", {locale: "ko-KR"});
	var expected = "111";
	
	var fmt = new ilib.PhoneFmt({locale: "ko-KR", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};