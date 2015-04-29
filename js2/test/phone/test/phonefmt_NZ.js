/*
 * phonefmt_NZ.js - Test the phonefmt_NZ Style.
 * 
 * Copyright © 2014-2015, JEDLSoft
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
function testFormatNZStyle0() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "3452343"
	});
	var expected = "(03) 345-2343";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNZStyle1() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "3452343"
	});
	var expected = "03 345 2343";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNZInternational() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "64",
			areaCode: "3",
			subscriberNumber: "1234567"
	});
	var expected = "+64 3 123 4567";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNZInternationalAccessCode() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "00",
			countryCode: "64",
			areaCode: "3",
			subscriberNumber: "1234567"
	});
	var expected = "00 64 3 123 4567";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNZLongNumber() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "12345678"
	});
	var expected = "(03) 1234-5678";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};


function testFormatNZMobile() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "21",
			subscriberNumber: "1234567"
	});
	var expected = "021 123 4567";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNZMobileInternational() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			trunkAccess: "0",
			mobilePrefix: "75",
			subscriberNumber: "1234567"
	});
	var expected = "+44 75 123 4567";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNZService() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			serviceCode: "800",
			subscriberNumber: "12345"
	});
	var expected = "0800 12345";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNZIEIDD() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "353",
			trunkAccess: "0",
			areaCode: "1",
			subscriberNumber: "1234567"
	});
	var expected = "+353 1 123 4567";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNZStyle0Partial0() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0Partial1() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "3"
	});
	var expected = "(03) ";
	
	var fmt = new PhoneFmt({ locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0Partial2() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "1"
	});
	var expected = "(03) 1";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0Partial3() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "22"
	});
	var expected = "(03) 22";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0Partial4() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "220"
	});
	var expected = "(03) 220";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0Partial5() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "2203"
	});
	var expected = "(03) 220-3";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0Partial6() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "22034"
	});
	var expected = "(03) 220-34";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0Partial7() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "220345"
	});
	var expected = "(03) 220-345";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0Partial8() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "2203456"
	});
	var expected = "(03) 220-3456";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0Partial9() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "22034567"
	});
	var expected = "(03) 2203-4567";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0Partial10() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "220345678"	// too long
	});
	var expected = "03220345678";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNZStyle0PartialLocal1() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0PartialLocal2() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0PartialLocal3() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0PartialLocal4() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "456-3";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0PartialLocal5() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "456-34";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0PartialLocal6() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456-345";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0PartialLocal7() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456-3453";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0PartialLocal8() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45634535"
	});
	var expected = "4563-4535";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle0PartialLocal9() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456345352"	// too long
	});
	var expected = "456345352";	// use last resort rule
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNZStyle1PartialLocal1() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle1PartialLocal2() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle1PartialLocal3() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle1PartialLocal4() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "456 3";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle1PartialLocal5() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "456 34";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle1PartialLocal6() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456 345";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle1PartialLocal7() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456 3453";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle1PartialLocal8() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45634534"
	});
	var expected = "4563 4534";
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNZStyle1PartialLocal9() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456345345"	// too long
	});
	var expected = "456345345"; // use last resort rule
	
	var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
