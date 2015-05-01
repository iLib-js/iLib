/*
 * phonefmt_SG.js - Test the phonefmt_SG Style.
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
function testFormatSGStyle0() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "34523434"
	});
	var expected = "3452 3434";
	
	var fmt = new PhoneFmt({locale: "en-SG", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatSGInternational() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new PhoneFmt({locale: "en-SG", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatSGInternationalAccessCode() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "001",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "001 33 1 12 34 56 78";
	
	var fmt = new PhoneFmt({locale: "en-SG", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatSGMobile() {
	var formatted;
	var parsed = new PhoneNumber({
		subscriberNumber: "81234567"
	});
	var expected = "8123 4567";
	
	var fmt = new PhoneFmt({locale: "en-SG", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatSGMobileInternational() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "65",
			subscriberNumber: "81234567"
	});
	var expected = "+65 8123 4567";
	
	var fmt = new PhoneFmt({locale: "en-SG", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatSGService() {
	var formatted;
	var parsed = new PhoneNumber({
			serviceCode: "800",
			subscriberNumber: "1234567"
	});
	var expected = "800 123 4567";
	
	var fmt = new PhoneFmt({locale: "en-SG", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatSGIEIDD() {
	var formatted;
	var parsed = new PhoneNumber({
			iddPrefix: "+",
			countryCode: "353",
			trunkAccess: "0",
			areaCode: "1",
			subscriberNumber: "1234567"
	});
	var expected = "+353 1 123 4567";
	
	var fmt = new PhoneFmt({locale: "en-SG", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatSGStyle0Partial0() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "6"
	});
	var expected = "6";
	
	var fmt = new PhoneFmt({locale: "en-SG"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatSGStyle0Partial1() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "61"
	});
	var expected = "61";
	
	var fmt = new PhoneFmt({locale: "en-SG"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatSGStyle0Partial2() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "612"
	});
	var expected = "612";
	
	var fmt = new PhoneFmt({locale: "en-SG"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatSGStyle0Partial3() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "6123"
	});
	var expected = "6123";
	
	var fmt = new PhoneFmt({locale: "en-SG"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatSGStyle0Partial4() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "61234"
	});
	var expected = "6123 4";
	
	var fmt = new PhoneFmt({locale: "en-SG"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatSGStyle0Partial5() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "612345"
	});
	var expected = "6123 45";
	
	var fmt = new PhoneFmt({locale: "en-SG"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatSGStyle0Partial6() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "6123456"
	});
	var expected = "6123 456";
	
	var fmt = new PhoneFmt({locale: "en-SG"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatSGStyle0Partial7() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "61234567"
	});
	var expected = "6123 4567";
	
	var fmt = new PhoneFmt({locale: "en-SG"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatSGStyle0Partial8() {
	var formatted;
	var parsed = new PhoneNumber({
			subscriberNumber: "612345678"	// too long
	});
	var expected = "612345678";
	
	var fmt = new PhoneFmt({locale: "en-SG"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
