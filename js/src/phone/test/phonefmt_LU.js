/*
 * phonefmt_LU.js - Test the phonefmt_LU Style.
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
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "223456"
		}),
		expected = "22 34 56";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatStyle1() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "223456"
		}),
		expected = "223456";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "komprimierte/comprimé"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "223456"
		}),
		expected = "223-456";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "Bindestrichen/tirets"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatInternational() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "352",
			subscriberNumber: "123456"
		}),
		expected = "+352 123 456";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatInternationalAccessCode() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "352",
			subscriberNumber: "123456"
		}),
		expected = "00 352 123 456";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatMobile() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			mobilePrefix: "661",
			subscriberNumber: "234567"
		}),
		expected = "661 234 567";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatMobileInternational() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "352",
			mobilePrefix: "661",
			subscriberNumber: "234567"
		}),
		expected = "+352 661 234 567";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};


function testFormatWithParamsSMSPartial() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "8765"
		}),
		expected = "87 65";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatWithParamsSMSWhole() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "8765"
		}),
		expected = "8765";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatPremium() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			serviceCode: "901",
			subscriberNumber: "12345"
		}),
		expected = "901 123 45";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatBlock() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			serviceCode: "116",
			subscriberNumber: "116"
		}),
		expected = "116 116";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};



function testFormatStyle0Partial1() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "5"
		}),
		expected = "5";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial2() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "50"
		}),
		expected = "50";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial3() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "501"
		}),
		expected = "501";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial4() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "5012"
		}),
		expected = "50 12";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial5() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "50123"
		}),
		expected = "501 23";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial6() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "501234"
		}),
		expected = "50 12 34";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle0Partial7() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "5012345" // too long
		}),
		expected = "5012345";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};


function testFormatStyle1Partial1() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "5"
		}),
		expected = "5";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "komprimierte/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial2() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "50"
		}),
		expected = "50";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "komprimierte/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial3() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "501"
		}),
		expected = "501";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "komprimierte/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial4() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "5012"
		}),
		expected = "5012";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "komprimierte/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial5() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "50123"
		}),
		expected = "50123";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "komprimierte/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial6() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "501234"
		}),
		expected = "501234";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "komprimierte/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle1Partial7() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "5012345"
		}),
		expected = "5012345"; // too long
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "komprimierte/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};


function testFormatStyle2Partial1() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "5"
		}),
		expected = "5";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "Bindestrichen/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial2() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "50"
		}),
		expected = "50";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "Bindestrichen/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial3() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "501"
		}),
		expected = "501";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "Bindestrichen/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial4() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "5012"
		}),
		expected = "501-2";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "Bindestrichen/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial5() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "50123"
		}),
		expected = "501-23";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "Bindestrichen/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial6() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "501234"
		}),
		expected = "501-234";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "Bindestrichen/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatStyle2Partial7() {
	var formatted,
		parsed = new ilib.PhoneNumber({
			subscriberNumber: "5012345" // too long
		}),
		expected = "5012345";
	
	var fmt = new ilib.PhoneFmt({locale: "de-LU", style: "Bindestrichen/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
