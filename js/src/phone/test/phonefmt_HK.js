/*
 * phonefmt_HK.js - Test the phonefmt_HK Style.
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
 
function testFormatStyle0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "34523434"
	});
	var expected = "3452 3434";
	
	var fmt = new ilib.PhoneFmt({locale: "en-HK", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatInternational() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "en-HK", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatInternationalAccessCode() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "001",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "001 33 1 12 34 56 78";
	
	var fmt = new ilib.PhoneFmt({locale: "en-HK", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatMobile() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "61234567"
	});
	var expected = "6123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-HK", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatMobileInternational() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "852",
			subscriberNumber: "61234567"
	});
	var expected = "+852 6123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-HK", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatService() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		serviceCode: "1",
		subscriberNumber: "8501"
	});
	var expected = "18501";
	
	var fmt = new ilib.PhoneFmt({locale: "en-HK", style: "default"});
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
	
	var fmt = new ilib.PhoneFmt({locale: "en-HK", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle0Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "6"
	});
	var expected = "6";
	
	var fmt = new ilib.PhoneFmt({locale: "en-HK"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "61"
	});
	var expected = "61";
	
	var fmt = new ilib.PhoneFmt({locale: "en-HK"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "612"
	});
	var expected = "612";
	
	var fmt = new ilib.PhoneFmt({locale: "en-HK"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "6123"
	});
	var expected = "6123";
	
	var fmt = new ilib.PhoneFmt({locale: "en-HK"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "61234"
	});
	var expected = "6123 4";
	
	var fmt = new ilib.PhoneFmt({locale: "en-HK"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "612345"
	});
	var expected = "6123 45";
	
	var fmt = new ilib.PhoneFmt({locale: "en-HK"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "6123456"
	});
	var expected = "6123 456";
	
	var fmt = new ilib.PhoneFmt({locale: "en-HK"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "61234567"
	});
	var expected = "6123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-HK"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "612345678"	// too long
	});
	var expected = "612345678";
	
	var fmt = new ilib.PhoneFmt({locale: "en-HK"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
