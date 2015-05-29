/*
 * phonefmt_NL.js - Test the phonefmt_NL Style.
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
 
function testFormatNLStyle0(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "255",
			subscriberNumber: "123456"
	});
	var expected = "(0255) 123 456";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNLStyle1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "255",
			subscriberNumber: "123456"
	});
	var expected = "0255 12 34 56";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "255",
			subscriberNumber: "123456"
	});
	var expected = "0255 123456";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "255",
			subscriberNumber: "123456"
	});
	var expected = "0255-123-456";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "streepjes"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "255",
			subscriberNumber: "123456"
	});
	var expected = "0255/12 34 56";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "japen"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNLInternational(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "31",
			areaCode: "20",
			subscriberNumber: "1234567"
	});
	var expected = "+31 20 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNLInternationalAccessCode(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "00",
			countryCode: "31",
			areaCode: "20",
			subscriberNumber: "1234567"
	});
	var expected = "00 31 20 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNLLongAreaCode(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "388",
			subscriberNumber: "123456"
	});
	var expected = "(0388) 123 456";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};


function testFormatNLMobile(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "6",
			subscriberNumber: "12345678"
	});
	var expected = "06 1234 5678";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNLMobileInternational(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			iddPrefix: "+",
			countryCode: "31",
			trunkAccess: "0",
			mobilePrefix: "6",
			subscriberNumber: "12345678"
	});
	var expected = "+31 6 1234 5678";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNLWithParamsSMSPartial(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "8765"
	});
	var expected = "876 5";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNLWithParamsSMSWhole(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "8765"
	});
	var expected = "8765";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNLPremium(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			serviceCode: "906",
			subscriberNumber: "12345678"
	});
	var expected = "0906 1234 5678";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLBlock(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			serviceCode: "116",
			subscriberNumber: "116"
	});
	var expected = "116 116";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLInternetDialUp(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			serviceCode: "85",
			subscriberNumber: "7654321"
	});
	var expected = "085 765 4321";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
	
	
};








function testFormatNLStyle0Partial0(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0Partial1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "3"
	});
	var expected = "03";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0Partial2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30"
	});
	var expected = "(030) ";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0Partial3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1"
	});
	var expected = "(030) 1";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0Partial4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12"
	});
	var expected = "(030) 12";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0Partial5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123"
	});
	var expected = "(030) 123";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0Partial6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1234"
	});
	var expected = "(030) 123 4";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0Partial7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12345"
	});
	var expected = "(030) 123 45";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0Partial8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123456"
	});
	var expected = "(030) 123 456";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0Partial9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1234567"
	});
	var expected = "(030) 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0Partial10(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12345678"
	});
	var expected = "(030) 1234 5678";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0Partial11(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123456789"	// too long
	});
	var expected = "030123456789";	// last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNLStyle0PartialLocal1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0PartialLocal2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0PartialLocal3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0PartialLocal4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "456 3";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0PartialLocal5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "456 34";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0PartialLocal6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456 345";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0PartialLocal7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456 3453";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0PartialLocal8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634535"
	});
	var expected = "4563 4535";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle0PartialLocal9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345352"	// too long
	});
	var expected = "456345352";	// use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};


function testFormatNLStyle1Partial0(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle1Partial1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "3"
	});
	var expected = "03";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle1Partial2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30"
	});
	var expected = "030 ";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle1Partial3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1"
	});
	var expected = "030 1";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle1Partial4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12"
	});
	var expected = "030 12";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle1Partial5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123"
	});
	var expected = "030 12 3";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle1Partial6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1234"
	});
	var expected = "030 12 34";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle1Partial7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12345"
	});
	var expected = "030 12 34 5";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle1Partial8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123456"
	});
	var expected = "030 12 34 56";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle1Partial9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1234567"
	});
	var expected = "030 123 45 67";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle1Partial10(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12345678" // too long
	});
	var expected = "03012345678";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNLStyle1PartialLocal1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle1PartialLocal2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle1PartialLocal3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "45 6";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle1PartialLocal4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "45 63";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle1PartialLocal5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45 63 4";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle1PartialLocal6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "45 63 45";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle1PartialLocal7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456 34 53";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle1PartialLocal8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634534" // too long
	});
	var expected = "45634534";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "spatie"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};


function testFormatNLStyle2Partial0(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2Partial1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "3"
	});
	var expected = "03";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2Partial2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30"
	});
	var expected = "030 ";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2Partial3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1"
	});
	var expected = "030 1";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2Partial4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12"
	});
	var expected = "030 12";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2Partial5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123"
	});
	var expected = "030 123";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2Partial6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1234"
	});
	var expected = "030 1234";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2Partial7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12345"
	});
	var expected = "030 12345";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2Partial8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123456"
	});
	var expected = "030 123456";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2Partial9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "1234567"
	});
	var expected = "030 1234567";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2Partial10(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "12345678"
	});
	var expected = "030 12345678";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2Partial11(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			trunkAccess: "0",
			areaCode: "30",
			subscriberNumber: "123456789"	// too long
	});
	var expected = "030123456789";	// last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};

function testFormatNLStyle2PartialLocal1(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2PartialLocal2(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2PartialLocal3(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2PartialLocal4(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "4563";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2PartialLocal5(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45634";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2PartialLocal6(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456345";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2PartialLocal7(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "4563453";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2PartialLocal8(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "45634534"
	});
	var expected = "45634534";
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
function testFormatNLStyle2PartialLocal9(){
	var formatted;
	var parsed = new ilib.PhoneNumber({
			subscriberNumber: "456345345"	// too long
	});
	var expected = "456345345"; // use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "nl-NL", style: "gecomprimeerd"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
	
	
};
