/*
 * phonefmt_GB.js - Test the phonefmt_GB Style.
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
 
function testFormatGBStyle0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "20",
			subscriberNumber: "34523434"
	});
	var expected = "(020) 3452 3434";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatGBStyle1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "20",
			subscriberNumber: "34523434"
	});
	var expected = "020 3452 3434";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatGBInternational() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatGBInternationalAccessCode() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "00 33 1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatGBLongAreaCode() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "17684",
			subscriberNumber: "12345"
	});
	var expected = "(0176 84) 12345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};


function testFormatGBMobile() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "75",
			subscriberNumber: "1234567"
	});
	var expected = "075 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatGBMobileInternational() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			trunkAccess: "0",
			mobilePrefix: "75",
			subscriberNumber: "1234567"
	});
	var expected = "+44 75 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatGBService() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			serviceCode: "300",
			subscriberNumber: "1234567"
	});
	var expected = "(0300) 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatGBIEIDD() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "353",
			trunkAccess: "0",
			areaCode: "1",
			subscriberNumber: "1234567"
	});
	var expected = "+353 1 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatGBStyle0Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "1"
	});
	var expected = "01";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "12"
	});
	var expected = "012";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "120"
	});
	var expected = "0120";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202"
	});
	var expected = "(01202) ";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "3"
	});
	var expected = "(01202) 3";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "34"
	});
	var expected = "(01202) 34";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "345"
	});
	var expected = "(01202) 345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "3453"
	});
	var expected = "(01202) 3453";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0Partial9() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "34534"
	});
	var expected = "(01202) 34534";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "345343"
	});
	var expected = "(01202) 345343";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatGBStyle0PartialLocal1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0PartialLocal2() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0PartialLocal3() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0PartialLocal4() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "4563";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0PartialLocal5() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45634";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0PartialLocal6() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0PartialLocal7() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456 3453";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0PartialLocal8() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634535"
	});
	var expected = "4563 4535";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle0PartialLocal9() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345352"	// too long
	});
	var expected = "456345352";	// use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatGBStyle1PartialLocal1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle1PartialLocal2() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle1PartialLocal3() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle1PartialLocal4() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "4563";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle1PartialLocal5() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45634";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle1PartialLocal6() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle1PartialLocal7() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456 3453";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle1PartialLocal8() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634534"
	});
	var expected = "4563 4534";
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatGBStyle1PartialLocal9() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345345"	// too long
	});
	var expected = "456345345"; // use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "en-GB", style: "common"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
