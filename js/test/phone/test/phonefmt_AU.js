/*
 * phonefmt_AU.js - Test the phonefmt_AU Style.
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
function testFormatAUStyle0() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "34523434"
	});
	var expected = "(02) 3452 3434";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatAUStyle1() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "34523434"
	});
	var expected = "02 3452 3434";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "nobrackets"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatAUStyle2() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "34523434"
	});
	var expected = "02 34523434";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatAUInternational() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "61",
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "12345678"
	});
	var expected = "+61 2 1234 5678";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatAUInternationalAccessCode() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "0011",
			countryCode: "61",
			areaCode: "2",
			subscriberNumber: "12345678"
	});
	var expected = "0011 61 2 1234 5678";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatAUMobile() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "4192",
			subscriberNumber: "12345"
	});
	var expected = "0419 212 345";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatAUMobileInternational() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "61",
			trunkAccess: "0",
			mobilePrefix: "4192",
			subscriberNumber: "12345"
	});
	var expected = "+61 419 212 345";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatAUService() {
	var formatted;
	var parsed = new PhoneNumber({
			serviceCode: "1800",
			subscriberNumber: "123456"
	});
	var expected = "1800 123 456";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatAUIEIDD() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "353",
			trunkAccess: "0",
			areaCode: "1",
			subscriberNumber: "1234567"
	});
	var expected = "+353 1 123 4567";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatAUStyle0Partial0() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0Partial1() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "2"
	});
	var expected = "(02) ";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0Partial2() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "8"
	});
	var expected = "(02) 8";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0Partial3() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "87"
	});
	var expected = "(02) 87";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0Partial4() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "876"
	});
	var expected = "(02) 876";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0Partial5() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "8765"
	});
	var expected = "(02) 8765";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0Partial6() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "87654"
	});
	var expected = "(02) 8765 4";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0Partial7() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "876543"
	});
	var expected = "(02) 8765 43";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0Partial8() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "8765432"
	});
	var expected = "(02) 8765 432";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0Partial9() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "87654321"
	});
	var expected = "(02) 8765 4321";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0Partial10() {
	var formatted;
	var parsed = new PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "876543210"	// too long
	});
	var expected = "02876543210";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatAUStyle0PartialLocal1() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "8"
	});
	var expected = "8";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0PartialLocal2() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "87"
	});
	var expected = "87";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0PartialLocal3() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "876"
	});
	var expected = "876";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0PartialLocal4() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "8765"
	});
	var expected = "8765";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0PartialLocal5() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "87654"
	});
	var expected = "8765 4";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0PartialLocal6() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "876543"
	});
	var expected = "8765 43";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0PartialLocal7() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "8765432"
	});
	var expected = "8765 432";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0PartialLocal8() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "87654321"
	});
	var expected = "8765 4321";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle0PartialLocal9() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "876543210"	// too long
	});
	var expected = "876543210";	// use last resort rule
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatAUStyle2PartialLocal1() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle2PartialLocal2() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle2PartialLocal3() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle2PartialLocal4() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "4563";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle2PartialLocal5() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45634";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle2PartialLocal6() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456345";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle2PartialLocal7() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "4563453";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle2PartialLocal8() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "45634534"
	});
	var expected = "45634534";
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatAUStyle2PartialLocal9() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "456345345"	// too long
	});
	var expected = "456345345"; // use last resort rule
	
	var fmt = new PhoneFmt({locale: "en-AU", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
