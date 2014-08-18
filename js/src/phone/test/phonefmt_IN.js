/*
 * phonefmt_IN.js - Test the phonefmt_IN Style.
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
 
function testFormatINStyle0(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "11",
			subscriberNumber: "12345678"
	});
	var expected = "011-12345678";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "11",
			subscriberNumber: "12345678"
	});
	var expected = "011 1234 5678";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "11",
			subscriberNumber: "12345678"
	});
	var expected = "011-1234-5678";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "hyphens"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatINInternational(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "91",
			areaCode: "11",
			subscriberNumber: "12345678"
	});
	var expected = "+91 11 12345678";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINInternationalLongArea(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "91",
			areaCode: "7753",
			subscriberNumber: "123456"
	});
	var expected = "+91 7753 123456";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINInternationalAccessCode(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "91",
			areaCode: "11",
			subscriberNumber: "12345678"
	});
	var expected = "00 91 11 12345678";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatINPlusIDDtoUnknownCountry(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "872",	// pitcairn island
		subscriberNumber: "987654321"
	});
	var expected = "+872 987654321";	// use last resort rule for subscriber number
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatINInternationalMobile(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		iddPrefix: "+",
		countryCode: "91",
		mobilePrefix: "912",
		subscriberNumber: "7654321"
	});
	var expected = "+91 91276 54321";
	
	var fmt = new ilib.PhoneFmt({locale: "en-us", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatINMobile(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		mobilePrefix: "912",
		subscriberNumber: "7654321"
	});
	var expected = "91276-54321";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "spaces"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatINStyle0Partial1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0Partial2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "1"
	});
	var expected = "01";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0Partial3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11"
	});
	var expected = "011-";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0Partial4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "1"
	});
	var expected = "011-1";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0Partial5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12"
	});
	var expected = "011-12";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0Partial6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "123"
	});
	var expected = "011-123";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0Partial7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "1234"
	});
	var expected = "011-1234";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0Partial8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12345"
	});
	var expected = "011-12345";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0Partial9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "123456"
	});
	var expected = "011-123456";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0Partial10(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "1234567"
	});
	var expected = "011-1234567";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0Partial11(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12345678"
	});
	var expected = "011-12345678";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0Partial12(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "123456789" // too long
	});
	var expected = "011123456789"; // use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatINStyle0PartialLocal1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "8"
	});
	var expected = "8";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0PartialLocal2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "87"
	});
	var expected = "87";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0PartialLocal3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "876"
	});
	var expected = "876";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0PartialLocal4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "8765"
	});
	var expected = "8765";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0PartialLocal5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "87654"
	});
	var expected = "87654";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0PartialLocal6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "876543"
	});
	var expected = "876543";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0PartialLocal7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "8765432"
	});
	var expected = "8765432";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0PartialLocal8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "87654321"
	});
	var expected = "87654321";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINStyle0PartialLocal9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		subscriberNumber: "876543210"  // too long
	});
	var expected = "876543210";  // shouldn't matter, but theoretically use the last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatINMobile(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
		mobilePrefix: "991",
		subscriberNumber: "2345678"
	});
	var expected = "99123-45678";
	
	var fmt = new ilib.PhoneFmt({locale: "en-IN", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
